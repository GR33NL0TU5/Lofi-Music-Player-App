(this["webpackJsonpleafygreenlotus-musicplayer"]=this["webpackJsonpleafygreenlotus-musicplayer"]||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),r=a(12),o=a.n(r),i=a(4),s=a.n(i),l=a(7),p=a(3),d=a(8),u=a(6),h=a(5),b=a(0),j=function(e){var t=e.currentSong,a=e.setCurrentSong,c=e.setIsPlaying,n=e.isPlaying,r=e.audioRef,o=e.songInfo,i=e.setSongs,d=e.songs,j=e.setSongInfo,m=function(e){var t=d.map((function(t){return t.id===e.id?Object(p.a)(Object(p.a)({},t),{},{active:!0}):Object(p.a)(Object(p.a)({},t),{},{active:!1})}));i(t)},f=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},v=function(){var e=Object(l.a)(s.a.mark((function e(c){var o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=d.findIndex((function(e){return e.id===t.id})),"skip-forward"!==c){e.next=5;break}return e.next=4,a(d[(o+1)%d.length]);case 4:m(d[(o+1)%d.length]);case 5:if("skip-back"!==c){e.next=15;break}if((o-1)%d.length!==-1){e.next=12;break}return e.next=9,a(d[d.length-1]);case 9:m(d[d.length-1]),e.next=15;break;case 12:return e.next=14,a(d[(o-1)%d.length]);case 14:m(d[(o-1)%d.length]);case 15:n&&r.current.play();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g={transform:"translateX(".concat(o.animationPercentage,"%)")};return Object(b.jsxs)("div",{className:"player",children:[Object(b.jsxs)("div",{className:"time-control",children:[Object(b.jsx)("p",{children:f(o.currentTime)}),Object(b.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(t.color[0],", ").concat(t.color[1],")")},className:"track",children:[Object(b.jsx)("input",{min:0,max:o.duration||0,value:o.currentTime,onChange:function(e){r.current.currentTime=e.target.value,j(Object(p.a)(Object(p.a)({},o),{},{currentTime:e.target.value}))},type:"range"}),Object(b.jsx)("div",{style:g,className:"animate-track"})]}),Object(b.jsx)("p",{children:o.duration?f(o.duration):"0:00"})]}),Object(b.jsxs)("div",{className:"play-control",children:[Object(b.jsx)(u.a,{onClick:function(){return v("skip-back")},className:"skip-back",size:"2x",icon:h.a}),Object(b.jsx)(u.a,{onClick:function(){n?(r.current.pause(),c(!n)):(r.current.play(),c(!n))},className:"play",size:"2x",icon:n?h.e:h.f}),Object(b.jsx)(u.a,{onClick:function(){return v("skip-forward")},className:"skip-forward",size:"2x",icon:h.b})]})]})},m=function(e){var t=e.currentSong;return Object(b.jsxs)("div",{className:"song-container",children:[Object(b.jsx)("img",{alt:t.name,src:t.cover}),Object(b.jsx)("h2",{children:t.name}),Object(b.jsx)("h3",{children:t.artist})]})},f=(a(24),a(27));var v=function(){return[{name:"You",cover:"https://i1.sndcdn.com/artworks-000303028053-iiqehm-t500x500.jpg",artist:"Chin Saku",audio:"https://feeds.soundcloud.com/stream/1137294472-dumps33-you-scloudtomp3downloadercom.mp3",color:["#47609D","#E88774"],id:Object(f.a)(),active:!0},{name:"Aniexy Free",cover:"https://i1.sndcdn.com/artworks-THspyyZXo09NTTas-I0Whcg-t500x500.jpg",artist:"Leafy Green Lotus",audio:"https://feeds.soundcloud.com/stream/1035533785-sagewav-aniexy-free.mp3",color:["#47609D","#E88774"],id:Object(f.a)(),active:!0},{name:"Takai",cover:"https://i.scdn.co/image/ab67616d00001e027b40f7acf6709c50444b841f",artist:"Leafy Green Lotus",audio:"https://feeds.soundcloud.com/stream/1137299869-sagewav-takai.mp3",color:["#47609D","#E88774"],id:Object(f.a)(),active:!0},{name:"Fresh",cover:"https://i.scdn.co/image/ab67616d0000b273d2a33d341c0d45a5b44ae5d4",artist:"MiddleSchool",audio:"https://mp3.chillhop.com/serve.php/?mp3=7889",color:["#47609D","#E88774"],id:Object(f.a)(),active:!0},{name:"Sails",cover:"https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",artist:"Strehlow, Aylior",audio:"https://mp3.chillhop.com/serve.php/?mp3=9355",color:["#F2C5AB","#BE5853"],id:Object(f.a)(),active:!1},{name:"Cruisin'",cover:"https://chillhop.com/wp-content/uploads/2020/07/8404541e3b694d16fd79433b142ed910f36764dd-1024x1024.jpg",artist:"Cloudchord, G Mills",audio:"https://mp3.chillhop.com/serve.php/?mp3=8200",color:["#FF194A","#41B3B3"],id:Object(f.a)(),active:!1},{name:"Maple Leaf Pt.2",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",artist:"Philanthrope",audio:"https://mp3.chillhop.com/serve.php/?mp3=10243",color:["#CA483B","#682C24"],id:Object(f.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(f.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(f.a)(),active:!1},{name:"Leaving For Good",cover:"https://chillhop.com/wp-content/uploads/2020/07/7a84488fd87082302cb69c05262f2f3f87e93018-1024x1024.jpg",artist:"Hanz",audio:"https://mp3.chillhop.com/serve.php/?mp3=8264",color:["#90B4AA","#F2AE87"],id:Object(f.a)(),active:!1},{name:"Eastway",cover:"https://chillhop.com/wp-content/uploads/2020/07/c572841e8431cebc120dffed4f92119f723dd954-1024x1024.jpg",artist:"Dontcry, Nokiaa",audio:"https://mp3.chillhop.com/serve.php/?mp3=9071",color:["#B442A1","#F54F7A"],id:Object(f.a)(),active:!1},{name:"Wake up",cover:"https://chillhop.com/wp-content/uploads/2020/07/2c3bd458bfb0713c89f991d1ce469523e95e3b53-1024x1024.jpg",artist:"Evil Needle",audio:"https://mp3.chillhop.com/serve.php/?mp3=8285",color:["#A35CA0","#EE8D66"],id:Object(f.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(f.a)(),active:!1},{name:"Velocities",cover:"https://i.scdn.co/image/ab67616d0000b2734fb6a52430e65dbc6c593faf",artist:"Sleepy Fish",audio:"https://mp3.chillhop.com/serve.php/?mp3=3524",color:["#74c7b4","#1d6d92"],id:Object(f.a)(),active:!1},{name:"Deeper",cover:"https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",artist:"Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10460",color:["#C668B2","#4D92D7"],id:Object(f.a)(),active:!1}]},g=function(e){var t=e.song,a=e.songs,c=e.setCurrentSong,n=e.audioRef,r=e.isPlaying,o=e.setSongs,i=function(){var e=Object(l.a)(s.a.mark((function e(){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t);case 2:i=a.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{active:!0}):Object(p.a)(Object(p.a)({},e),{},{active:!1})})),o(i),r&&n.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{onClick:i,className:"library-song ".concat(t.active?"selected":""),children:[Object(b.jsx)("img",{alt:t.name,src:t.cover}),Object(b.jsxs)("div",{className:"song-description",children:[Object(b.jsx)("h3",{children:t.name}),Object(b.jsx)("h4",{children:t.artist})]})]})},O=function(e){var t=e.songs,a=e.setCurrentSong,c=e.audioRef,n=e.isPlaying,r=e.setSongs,o=e.libraryStatus;return Object(b.jsxs)("div",{className:"library ".concat(o?"active-library":""," "),children:[Object(b.jsx)("h2",{children:"Library"}),Object(b.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(b.jsx)(g,{songs:t,setSongs:r,setCurrentSong:a,song:e,audioRef:c,isPlaying:n},e.id)}))})]})},x=function(e){var t=e.libraryStatus,a=e.setLibraryStatus;return Object(b.jsxs)("nav",{children:[Object(b.jsxs)("h1",{children:["Chill ",Object(b.jsx)(u.a,{icon:h.c})," L.0.T.U.5"]}),Object(b.jsxs)("button",{onClick:function(){return a(!t)},children:["Library ",Object(b.jsx)(u.a,{icon:h.d})]})]})};var y=function(){var e=Object(c.useState)(v()),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(a[0]),o=Object(d.a)(r,2),i=o[0],u=o[1],h=Object(c.useState)(!1),f=Object(d.a)(h,2),g=f[0],y=f[1],S=Object(c.useRef)(null),k=Object(c.useState)(!1),w=Object(d.a)(k,2),C=w[0],N=w[1],A=function(e){var t=e.target.currentTime,a=e.target.duration,c=Math.round(t),n=Math.round(a),r=Math.round(c/n*100);P(Object(p.a)(Object(p.a)({},L),{},{currentTime:t,duration:a,animationPercentage:r}))},T=Object(c.useState)({currentTime:0,duration:0,animationPercentage:0}),E=Object(d.a)(T,2),L=E[0],P=E[1],M=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.findIndex((function(e){return e.id===i.id})),e.next=3,u(a[(t+1)%a.length]);case 3:g&&S.current.play();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App ".concat(C?"library-active":""),children:[Object(b.jsx)(x,{libraryStatus:C,setLibraryStatus:N}),Object(b.jsx)(O,{audioRef:S,songs:a,setSongs:n,setCurrentSong:u,isPlaying:g,libraryStatus:C}),Object(b.jsx)(m,{currentSong:i}),Object(b.jsx)(j,{audioRef:S,isPlaying:g,setIsPlaying:y,currentSong:i,setCurrentSong:u,songs:a,setSongs:n,songInfo:L,setSongInfo:P}),Object(b.jsx)("audio",{onTimeUpdate:A,onLoadedMetadata:A,ref:S,src:i.audio,onEnded:M}),Object(b.jsxs)("h4",{className:"footer",children:["Made with \ud83d\udd96\ud83c\udffe\ufe0f by"," ",Object(b.jsx)("a",{className:"link",href:"https://github.com/GR33NL0TU5/",target:"_blank",children:"GR33NL0TU5"})]})]})};o.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.a22bee8d.chunk.js.map