(this["webpackJsonptwitch-clone-react"]=this["webpackJsonptwitch-clone-react"]||[]).push([[0],{35:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(28),r=a.n(n),i=(a(35),a(4)),l=a.p+"static/media/IconeTwitch.72d35b74.svg",u=a.p+"static/media/Search.240e946d.svg",m=a.p+"static/media/MenuIco.e783931c.svg",o=a.p+"static/media/Croix.2b9b9747.svg",j=a(3),d=a(0);var h=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),r=Object(i.a)(n,2),h=r[0],b=r[1],x=Object(c.useState)(""),p=Object(i.a)(x,2),O=p[0],f=p[1];Object(c.useEffect)((function(){var e=window.matchMedia("(max-width: 900px)");return e.addListener(v),v(e),function(){e.removeListener(v)}}));var v=function(e){e.matches?b(!0):b(!1)},g=function(){!0===a&&s(!a)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{className:"headerTop",children:(a||!h)&&Object(d.jsxs)("ul",{className:"listeMenu",children:[Object(d.jsx)("li",{onClick:g,className:"liensNav",children:Object(d.jsx)(j.b,{className:"link",to:"/",children:Object(d.jsx)("img",{src:l,alt:"logo twitch",className:"logo"})})}),Object(d.jsx)("li",{onClick:g,className:"liensNav",children:Object(d.jsx)(j.b,{className:"link",to:"/",children:"Top Games"})}),Object(d.jsx)("li",{onClick:g,className:"liensNav",children:Object(d.jsx)(j.b,{className:"link",to:"/top-streams",children:"Top Streams"})}),Object(d.jsx)("li",{className:"liensNav",children:Object(d.jsxs)("form",{className:"formSubmit",onSubmit:function(e){e.preventDefault()},children:[Object(d.jsx)("input",{required:!0,value:O,onChange:function(e){return function(e){f(e.target.value)}(e)},type:"text",className:"inputRecherche"}),Object(d.jsx)(j.b,{className:"link",to:{pathname:"/resultats/".concat(O)},children:Object(d.jsx)("button",{type:"submit",children:Object(d.jsx)("img",{src:u,alt:"icone loupe",className:"logoLoupe"})})})]})})]})}),Object(d.jsx)("div",{className:"menuResBtn",children:Object(d.jsx)("img",{onClick:function(){s(!a)},src:a?o:m,alt:"icone menu responsive",className:"menuIco"})})]})},b=a(6),x=a.n(b),p=a(10),O=a(30),f=a.n(O).a.create({headers:{"Client-ID":"kfo9ps5bzfxcy7mk911va14758rjq5",Authorization:"Bearer dbi4k43pf6sjhr0j9mqmbsuxo3y5mq"}}),v=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(p.a)(x.a.mark((function e(){var t,a,c,n,r,i,l,u,m,o,j,d,h;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("https://api.twitch.tv/helix/streams");case 2:return t=e.sent,a=t.data.data,console.log(a),c=a.map((function(e){return e.game_id})),n=a.map((function(e){return e.user_id})),"https://api.twitch.tv/helix/games?","https://api.twitch.tv/helix/users?",r="",i="",c.map((function(e){return r+="id=".concat(e,"&")})),n.map((function(e){return i+="id=".concat(e,"&")})),l="https://api.twitch.tv/helix/games?"+r,u="https://api.twitch.tv/helix/users?"+i,e.next=17,f.get(l);case 17:return m=e.sent,e.next=20,f.get(u);case 20:o=e.sent,j=m.data.data,d=o.data.data,h=a.map((function(e){return e.gamesName="",e.truePic="",e.login="",j.forEach((function(t){d.forEach((function(a){e.user_id===a.id&&e.game_id===t.id&&(e.truePic=a.profile_image_url,e.gamesName=t.name,e.login=a.login)}))})),e})),s(h.slice(0,7));case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsx)("h2",{className:"titreSidebar",children:"Cha\xeenes Recommand\xe9es"}),Object(d.jsx)("ul",{className:"listeStream",children:a.map((function(e,t){return Object(d.jsx)(j.b,{className:"link",to:{pathname:"/live/".concat(e.login)},children:Object(d.jsxs)("li",{className:"containerFlexSidebar",children:[Object(d.jsx)("img",{src:e.truePic,alt:"streamer logo",className:"profilePicRonde"}),Object(d.jsx)("div",{className:"streamUser",children:e.user_name}),Object(d.jsxs)("div",{className:"viewerRight",children:[Object(d.jsx)("div",{className:"live"}),Object(d.jsx)("div",{children:e.viewer_count})]}),Object(d.jsx)("div",{className:"gameNameSidebar",children:e.gamesName})]})},t)}))})]})},g=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(p.a)(x.a.mark((function e(){var t,a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("https://api.twitch.tv/helix/games/top");case 2:t=e.sent,a=t.data.data,c=a.map((function(e){var t=e.box_art_url.replace("{width}","250").replace("{height}","300");return e.box_art_url=t,e})),s(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"titreGames",children:"Jeux les plus populaires"}),Object(d.jsx)("div",{className:"flexAccueil",children:a.map((function(e,t){return Object(d.jsxs)("div",{className:"carteGames",children:[Object(d.jsx)("div",{className:"bgCard",children:Object(d.jsx)("img",{src:e.box_art_url,alt:"jeu profile pic",className:"imgCarte"})}),Object(d.jsxs)("div",{className:"cardBodyGames",children:[Object(d.jsx)("h5",{className:"titreCartesGames",children:e.name}),Object(d.jsx)(j.b,{className:"link",to:{pathname:"game/"+e.name,state:{gameID:e.id}},children:Object(d.jsxs)("div",{className:"btnCarte",children:["Regarder ",e.name]})})]})]},t)}))})]})},N=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(p.a)(x.a.mark((function e(){var t,a,c,n,r,i,l,u,m,o,j,d,h;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("https://api.twitch.tv/helix/streams");case 2:return t=e.sent,a=t.data.data,console.log(a),c=a.map((function(e){return e.game_id})),n=a.map((function(e){return e.user_id})),"https://api.twitch.tv/helix/games?","https://api.twitch.tv/helix/users?",r="",i="",c.map((function(e){return r+="id=".concat(e,"&")})),n.map((function(e){return i+="id=".concat(e,"&")})),l="https://api.twitch.tv/helix/games?"+r,u="https://api.twitch.tv/helix/users?"+i,e.next=17,f.get(l);case 17:return m=e.sent,e.next=20,f.get(u);case 20:o=e.sent,j=m.data.data,d=o.data.data,h=a.map((function(e){e.gamesName="",e.login="",j.forEach((function(t){d.forEach((function(a){e.user_id===a.id&&e.game_id===t.id&&(e.truePic=a.profile_image_url,e.gamesName=t.name,e.login=a.login)}))}));var t=e.thumbnail_url.replace("{width}","320").replace("{height}","180");return e.thumbnail_url=t,e})),s(h);case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"titreGames",children:"Stream Populaires"}),Object(d.jsx)("div",{className:"flexAccueil",children:a.map((function(e,t){return Object(d.jsxs)("div",{className:"carteStream",children:[Object(d.jsx)("div",{className:"bgCard",children:Object(d.jsx)("img",{className:"imgCarte",src:e.thumbnail_url,alt:"game pic"})}),Object(d.jsxs)("div",{className:"cardBodyStream",children:[Object(d.jsx)("h5",{className:"titreCartesStream",children:e.user_name}),Object(d.jsxs)("p",{className:"txtStream",children:["Jeu : ",e.gamesName]}),Object(d.jsxs)("p",{className:"txtStream viewers",children:["Viewers : ",e.viewer_count]}),Object(d.jsx)(j.b,{className:"link",to:{pathname:"/live/".concat(e.login)},children:Object(d.jsxs)("div",{className:"btnCarte",children:["Regarder ",e.user_name]})})]})]},t)}))})]})},w=a(2),_=a(18),S=a.n(_),C=function(){var e=Object(w.g)().slug;console.log(e);var t=Object(c.useState)([]),a=Object(i.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)([]),l=Object(i.a)(r,2),u=l[0],m=l[1];return Object(c.useEffect)((function(){(function(){var t=Object(p.a)(x.a.mark((function t(){var a,c,s,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("https://api.twitch.tv/helix/streams?user_login=".concat(e));case 2:if(0!==(a=t.sent).data.data.length){t.next=7;break}n({title:"Le streamer est Offline."}),t.next=14;break;case 7:return c=a.data.data.map((function(e){return e.game_id})),t.next=10,f.get("https://api.twitch.tv/helix/games?id=".concat(c));case 10:s=t.sent,r=s.data.data.map((function(e){return e.name})),m(r),n(a.data.data[0]);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),"Le streamer est Offline."===s.title?Object(d.jsxs)("div",{className:"containerDecale",children:[Object(d.jsx)(S.a,{height:"650",width:"100%",channel:e}),Object(d.jsx)("div",{className:"contInfo",children:Object(d.jsx)("div",{className:"titreStream",children:s.title})})]}):Object(d.jsxs)("div",{className:"containerDecale",children:[Object(d.jsx)(S.a,{height:"650",width:"100%",channel:e}),Object(d.jsxs)("div",{className:"contInfo",children:[Object(d.jsx)("div",{className:"titreStream",children:s.title}),Object(d.jsxs)("div",{className:"viewer",children:["Spectateurs : ",s.viewer_count]}),Object(d.jsxs)("div",{className:"infogame",children:["Streamer : ",s.user_name," \xa0 Langue : ",s.language]}),Object(d.jsxs)("div",{className:"nomJeu",children:["Jeu : ",u]})]})]})},k=function(){var e=Object(w.f)(),t=Object(w.g)().slug,a=Object(c.useState)([]),s=Object(i.a)(a,2),n=s[0],r=s[1],l=Object(c.useState)(0),u=Object(i.a)(l,2),m=u[0],o=u[1];return Object(c.useEffect)((function(){(function(){var t=Object(p.a)(x.a.mark((function t(){var a,c,s,n,i,l,u,m,j;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("https://api.twitch.tv/helix/streams?game_id=".concat(e.state.gameID));case 2:return a=t.sent,c=a.data.data,s=c.map((function(e){var t=e.thumbnail_url.replace("{width}","320").replace("{height}","180");return e.thumbnail_url=t,e})),n=s.reduce((function(e,t){return e+t.viewer_count}),0),i=c.map((function(e){return e.user_id})),"https://api.twitch.tv/helix/users?",l="",i.map((function(e){return l+="id=".concat(e,"&")})),u="https://api.twitch.tv/helix/users?"+l,t.next=13,f.get(u);case 13:m=t.sent,j=m.data.data,s=c.map((function(e){return e.login="",j.forEach((function(t){e.user_id===t.id&&(e.login=t.login)})),e})),o(n),r(s);case 18:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{className:"titreGamesStreams",children:["Streams : ",t]}),Object(d.jsxs)("h3",{className:"sousTitreGameStreams",children:[Object(d.jsx)("strong",{className:"textColored",children:m})," personnes regardent ",t]}),Object(d.jsx)("div",{className:"flexAccueil",children:n.map((function(e,t){return Object(d.jsxs)("div",{className:"carteGameStreams",children:[Object(d.jsx)("div",{className:"bgCard",children:Object(d.jsx)("img",{src:e.thumbnail_url,alt:"game pic",className:"imgCarte"})}),Object(d.jsxs)("div",{className:"cardBodyGameStreams",children:[Object(d.jsx)("h5",{className:"titreCartesStream",children:e.user_name}),Object(d.jsxs)("p",{className:"txtStream",children:["Nombre de viewers : ",e.viewer_count]}),Object(d.jsx)(j.b,{className:"link",to:{pathname:"/live/".concat(e.login)},children:Object(d.jsxs)("div",{className:"btnCarte",children:["Regarder ",e.user_name]})})]})]},t)}))})]})};var R=function(){return Object(d.jsx)("div",{className:"containerDecaleResultats",children:Object(d.jsxs)("h4",{children:["R\xe9sultats de recherche: Pas de r\xe9sultats, ",Object(d.jsx)("br",{})," V\xe9rifiez l'orthographe de votre saisie, ou ce streamer n'\xe9xiste pas."]})})};var y=function(){var e=Object(w.g)().slug,t=Object(c.useState)(!0),a=Object(i.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)([]),l=Object(i.a)(r,2),u=l[0],m=l[1],o=e.replace(/ /g,"");return Object(c.useEffect)((function(){(function(){var e=Object(p.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("https://api.twitch.tv/helix/users?login=".concat(o));case 2:t=e.sent,console.log(t),0===t.data.data.length?n(!1):m(t.data.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),s?Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"containerDecaleResultats",children:[Object(d.jsx)("h4",{children:"R\xe9sultats de recherche : "}),u.map((function(e,t){return Object(d.jsxs)("div",{className:"carteResultats",children:[Object(d.jsx)("div",{className:"bgCardRond",children:Object(d.jsx)("img",{src:e.profile_image_url,alt:"resultat profile",className:"imgCarte"})}),Object(d.jsxs)("div",{className:"cardBodyResults",children:[Object(d.jsx)("h5",{className:"titreCartesStream",children:e.display_name}),Object(d.jsx)("div",{className:"txtResult",children:e.description}),Object(d.jsx)(j.b,{className:"link",to:{pathname:"/live/".concat(e.login)},children:Object(d.jsxs)("div",{className:"btnCarte btnResult",children:["Regarder ",e.display_name]})})]})]},t)}))]})}):Object(d.jsx)(R,{})};var E=function(){return Object(d.jsx)(j.a,{basename:"/React-Twitch-Clone",children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{}),Object(d.jsx)(v,{}),Object(d.jsxs)(w.c,{children:[Object(d.jsx)(w.a,{exact:!0,path:"/",component:g}),Object(d.jsx)(w.a,{exact:!0,path:"/top-streams",component:N}),Object(d.jsx)(w.a,{exact:!0,path:"/live/:slug",component:C}),Object(d.jsx)(w.a,{exact:!0,path:"/game/:slug",component:k}),Object(d.jsx)(w.a,{exact:!0,path:"/resultats/:slug",component:y})]})]})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root")),G()}},[[62,1,2]]]);
//# sourceMappingURL=main.7d663306.chunk.js.map