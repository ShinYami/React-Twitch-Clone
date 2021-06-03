import React, {useState,useEffect} from 'react';
import api from '../../api';
import {Link} from 'react-router-dom';

const Sidebar = () => {

    const [topStreams, setTopStreams] = useState([])

    useEffect(() => {

        const fetchData = async() => {
            const result = await api.get("https://api.twitch.tv/helix/streams");

            let dataArray = result.data.data;
            console.log(dataArray);

            let gameIDs = dataArray.map(stream => {
                return stream.game_id;
            })
            let userIDs = dataArray.map(stream => {
                return stream.user_id;
            })
            //console.log(gameIDs, userIDs)

            //Url perso

            let baseUrlGames = "https://api.twitch.tv/helix/games?";
            let baseUrlUsers = "https://api.twitch.tv/helix/users?";

            let queryParamsGame = "";
            let queryParamsUsers = "";

            gameIDs.map(id => {
                return (queryParamsGame = queryParamsGame + `id=${id}&`)
            })
            userIDs.map(id => {
                return (queryParamsUsers = queryParamsUsers + `id=${id}&`)
            })

            //url 
            let urlFinalGames = baseUrlGames + queryParamsGame;
            let urlFinalUsers = baseUrlUsers + queryParamsUsers;

            //console.log(urlFinalGames, urlFinalUsers);

            let gamesNames = await api.get(urlFinalGames);
            let getUsers = await api.get(urlFinalUsers);

            let gamesNameArray = gamesNames.data.data;
            let arrayUsers = getUsers.data.data;
            //console.log(arrayUsers, gamesNameArray);

            //table
            let finalArray = dataArray.map(stream => {

                stream.gamesName = "";
                stream.truePic = "";
                stream.login = "";

                gamesNameArray.forEach(name => {
                    arrayUsers.forEach(user => {
                        if(stream.user_id === user.id && stream.game_id === name.id) {
                            stream.truePic = user.profile_image_url;
                            stream.gamesName = name.name;
                            stream.login = user.login;
                        }
                    })
                });

                return stream;
            })
            setTopStreams(finalArray.slice(0,7));
        }
        fetchData();
    }, [])

    //console.log(topStreams);

    return (
        <div className="sidebar">
            <h2 className="titreSidebar">Chaînes Recommandées</h2>
            <ul className="listeStream">
                
                {topStreams.map((stream,index) => (
                    <Link className="link" key={index}  to={{pathname:`/live/${stream.login}`}}>
                    <li className="containerFlexSidebar">

                        <img src={stream.truePic} alt="streamer logo" className="profilePicRonde" />

                        <div className="streamUser">{stream.user_name}</div>

                        <div className="viewerRight">
                            <div className="live"></div>
                            <div>{stream.viewer_count}</div>
                        </div>

                        <div className="gameNameSidebar">{stream.gamesName}</div>

                    </li>
                    </Link>
                ))}


            </ul>
            
        </div>
    );
};

export default Sidebar;