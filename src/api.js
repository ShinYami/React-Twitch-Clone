import axio from "axios";

let api = axio.create({
  headers: {
    "Client-ID": "kfo9ps5bzfxcy7mk911va14758rjq5",
    Authorization: "Bearer dbi4k43pf6sjhr0j9mqmbsuxo3y5mq",
  },
});

/*
    
    CLIENT_ID = kfo9ps5bzfxcy7mk911va14758rjq5
    REDIRECT = 'https://127.0.0.1/'
    LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=kfo9ps5bzfxcy7mk911va14758rjq5&redirect_uri=https://127.0.0.1/&response_type=token

    LIEN REMPLI = https://id.twitch.tv/oauth2/authorize?client_id=kfo9ps5bzfxcy7mk911va14758rjq5&redirect_uri=https://127.0.0.1/&response_type=token

*/

export default api;
