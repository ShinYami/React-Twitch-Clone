import React, {useEffect, useState} from 'react';
import api from '../../api';
import {Link} from 'react-router-dom';

const TopStreams = () => {

    const [channels, setChannels] = useState([]);
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
                let newUrl = stream.thumbnail_url
                .replace('{width}', '320')
                .replace('{height}', '180');
                stream.thumbnail_url = newUrl;
                return stream;
            })
            setChannels(finalArray);
        }
        fetchData();
    }, [])
    return (
        <div>
            <h1 className="titreGames">Stream Populaires</h1>
            <div className="flexAccueil">

                {channels.map((channel,index) => (
                    <div key={index} className="carteStream">
                        <div className="bgCard">
                        <img className="imgCarte" src={channel.thumbnail_url} alt="game pic" />
                        </div>
                        <div className="cardBodyStream">
                            <h5 className="titreCartesStream">{channel.user_name}</h5>
                            <p className="txtStream">Jeu : {channel.gamesName}</p>
                            <p className="txtStream viewers">Viewers : {channel.viewer_count}</p>
                            <Link className="link" to={{pathname:`/live/${channel.login}`}}>
                            <div className="btnCarte">Regarder {channel.user_name}</div>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default TopStreams;