(this["webpackJsonpgeneration-take-home-intern"]=this["webpackJsonpgeneration-take-home-intern"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(6),o=n.n(r),i=(n(26),n(10)),s=n(11),c=n(21),l=n(19),d=(n(27),n(20)),u=n(3),j=n(5),h=n(13),f=n(14),b=n(17),m=n.n(b),v=n(18),O=function(e,t){var n=Object(a.useRef)(!0);Object(a.useEffect)((function(){return function(){n.current=!1}}),[]);var r=Object(a.useState)({data:null,loading:!0,error:null}),o=Object(j.a)(r,2),i=o[0],s=o[1];return Object(a.useEffect)((function(){(function(){var a=Object(v.a)(m.a.mark((function a(){var r,o,i,c,l,d,u,j,h;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r=!1,t&&null!==(o=window.localStorage.getItem("cacheUrl"))&&(i=JSON.parse(o),(c=i.find((function(t){return t.key===e})))&&(s({loading:!1,error:null,data:c.data}),r=!0)),r){a.next=16;break}return a.prev=3,a.next=6,fetch(e);case 6:return l=a.sent,a.next=9,l.json();case 9:d=a.sent,n.current&&(t&&(u=[],j={key:e,data:d},null!==(h=window.localStorage.getItem("cacheUrl"))&&(u=JSON.parse(h)),u.push(j),localStorage.setItem("cacheUrl",JSON.stringify(u))),s({loading:!1,error:null,data:d})),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(3),n.current&&(console.log("Error in ",e,a.t0),s({loading:!1,error:null,data:null}));case 16:case"end":return a.stop()}}),a,null,[[3,13]])})));return function(){return a.apply(this,arguments)}})()()}),[e,t]),i},p=n(8),g=n(1),x=Object(a.memo)((function(e){var t=e.marker,n=e.handleClick,r=Object(a.useState)({center:{lat:19.43224,lng:-99.1335},googleKey:"AIzaSyAmX-kWiHUQ7W3sUDe3viG2xET1q45-QAQ"}),o=Object(j.a)(r,2),i=o[0],s=o[1],c=i.center,l=i.googleKey,d=O("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(encodeURI(t.Address),"&key=").concat(l),!0),h=d.loading,f=d.data;return Object(a.useEffect)((function(){if(f&&"OK"===f.status){var e=f.results[0].geometry.location;s(Object(u.a)(Object(u.a)({},s),{},{center:e}))}}),[h,f]),Object(g.jsx)(g.Fragment,{children:!!f&&Object(g.jsx)(p.c,{title:t.Name,position:c,onClick:function(e){return n(e,t.Name)}})})})),w=function(e){var t=e.addFavorite,n=e.markerList,a=e.mapStyle,r=void 0===a?{height:"80vh",width:"100%"}:a,o=e.center,i=void 0===o?{lat:19.43224,lng:-99.1335}:o,s=e.apiKey,c=void 0===s?"AIzaSyAmX-kWiHUQ7W3sUDe3viG2xET1q45-QAQ":s,l=function(e,n){var a=e.latLng,r=a.lat,o=a.lng;t(n,r(),o())};return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(p.b,{googleMapsApiKey:c,children:Object(g.jsx)(p.a,{mapContainerStyle:r,zoom:13,center:i,children:!!n&&n.map((function(e){return Object(g.jsx)(x,{marker:e,handleClick:l},e.Name)}))})})})},y=function(e){var t=e.item,n=e.removeFavorite;return Object(g.jsxs)("div",{className:"item",children:[Object(g.jsx)(h.a,{onClick:function(){n(t.title)},icon:f.b}),Object(g.jsx)("p",{children:t.title})]})},k=function(e){var t=e.favorites,n=e.removeFavorite,a=e.toggleListFavorite,r=e.css;return console.log(t),Object(g.jsxs)("div",{className:r,children:[Object(g.jsx)("button",{onClick:a,className:"btn-close",children:"X"}),Object(g.jsx)("h1",{children:" My Favorite Stores "}),!!t&&t.map((function(e){return Object(g.jsx)(y,{item:e,removeFavorite:n},e.title)}))]})},S=function(){var e=O("store_directory.json").data,t=Object(a.useState)({markerList:[],favorites:[],openFavorites:!1,center:{lat:19.43224,lng:-99.1335},animateFav:"fav-icon",renderFavList:!1,toasterText:"",toasterClass:"toaster hidden"}),n=Object(j.a)(t,2),r=n[0],o=n[1],i=r.markerList,s=r.favorites,c=r.openFavorites,l=r.center,b=r.animateFav,m=r.renderFavList,v=r.toasterText,p=r.toasterClass;Object(a.useEffect)((function(){var e=window.localStorage.getItem("favoriteStoreList");if(null!==e){var t=JSON.parse(e);o((function(e){return Object(u.a)(Object(u.a)({},e),{},{favorites:t})}))}}),[]),Object(a.useEffect)((function(){o((function(t){return Object(u.a)(Object(u.a)({},t),{},{markerList:e})}))}),[e]),Object(a.useEffect)((function(){"fav-icon"!==b&&setTimeout((function(){o((function(e){return Object(u.a)(Object(u.a)({},e),{},{animateFav:"fav-icon"})}))}),1e3)}),[b]),Object(a.useEffect)((function(){"toaster animate__animated animate__fadeOutUp"!==p&&setTimeout((function(){o((function(e){return Object(u.a)(Object(u.a)({},e),{},{toasterClass:"toaster animate__animated animate__fadeOutUp"})}))}),2e3)}),[p]);var x=function(){o(Object(u.a)(Object(u.a)({},r),{},{openFavorites:!c,renderFavList:!0}))};return Object(g.jsxs)("div",{className:"your-component",children:[Object(g.jsx)("h1",{children:" Put your solution here!"}),Object(g.jsxs)("div",{className:"map-wrapper",children:[Object(g.jsx)(w,{addFavorite:function(e,t,n){if(s.find((function(t){return t.title===e})))o(Object(u.a)(Object(u.a)({},r),{},{animateFav:"fav-icon animate__heartBeat",toasterText:"".concat(e," is actually in Favorite list"),toasterClass:"toaster animate__animated animate__fadeInDown"}));else{var a={title:e,lat:t,lng:n};o(Object(u.a)(Object(u.a)({},r),{},{favorites:[].concat(Object(d.a)(s),[a]),animateFav:"fav-icon animate__heartBeat",toasterText:"".concat(e," added to Favorite list"),toasterClass:"toaster animate__animated animate__fadeInDown"}));var i=window.localStorage.getItem("favoriteStoreList"),c=[];null!==i&&(c=JSON.parse(i)),c.push(a),window.localStorage.setItem("favoriteStoreList",JSON.stringify(c))}},markerList:i,center:l}),Object(g.jsxs)("div",{className:p,children:[" ",v," "]}),!!s&&Object(g.jsx)("div",{className:b,onClick:x,children:Object(g.jsx)(h.a,{icon:f.a})}),m&&Object(g.jsx)(k,{favorites:s,removeFavorite:function(e){var t=s.filter((function(t){return t.title!==e}));o(Object(u.a)(Object(u.a)({},r),{},{favorites:t})),window.localStorage.setItem("favoriteStoreList",JSON.stringify(t))},toggleListFavorite:x,css:c?"fav-list animate__animated  animate__backInRight":"fav-list animate__animated  animate__backOutRight"})]})]})},_=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{children:"Hi, Welcome to the Digital Generation Code Challenge!"}),Object(g.jsx)("h3",{children:"Intro:"}),Object(g.jsx)("p",{children:"At Generation, we have many users: students, teachers, employers, and the core Generation team."}),Object(g.jsx)("p",{children:"Everything we do at Generation is centered around better serving the needs of these users. "}),Object(g.jsx)("p",{children:"In your role, you'll be using your ninja JavaScript skills to empower Generation to better serve these users."}),Object(g.jsx)("p",{children:"That's why we've included this piece in the recruiting process. It gives you an opportunity to demonstrate your creative problem-solving, user-centric design, and coding style. "}),Object(g.jsx)("h3",{children:" Here's how it works:"}),Object(g.jsx)("p",{}),Object(g.jsxs)("p",{children:["Below are some real-life ",Object(g.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://en.wikipedia.org/wiki/User_story",children:"user stories"})," that we face at Generation."]}),Object(g.jsx)("p",{children:"We'd love to see how you use JS and React to address these user stories."}),Object(g.jsx)("p",{children:"Feel free to add libraries, create new components, or otherwise change the codebase. This app is yours!"}),Object(g.jsx)("p",{children:"If you're having trouble, don't be afraid to ask for help!"}),Object(g.jsx)("strong",{children:"Student user stories:"}),Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:["As a student, I want to see a map of ",Object(g.jsx)("b",{children:"Mexico City"})]}),Object(g.jsxs)("li",{children:["As a student, I want to see a map that has ",Object(g.jsx)("b",{children:"all the stores"})," represented as ",Object(g.jsx)("b",{children:"markers/pins"})," on the map. (",Object(g.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://developers.google.com/maps/documentation/javascript/examples/marker-simple",children:"What a google maps marker is?"}),")"]}),Object(g.jsxs)("li",{children:["As a student, I want to be able to click on a store marker and add it to a list of ",Object(g.jsx)("b",{children:"'My Favorite Stores'"})]}),Object(g.jsxs)("li",{children:["As a student, I want to be able to click on a store in the ",Object(g.jsx)("b",{children:"'My Favorite Stores'"})," and remove if from the list"]})]}),Object(g.jsx)("strong",{children:"Helpful tips:"}),Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:["Feel free to use our Google Maps API key: ",Object(g.jsx)("b",{children:"AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A"})]}),Object(g.jsxs)("li",{children:["The list of stores is located in the file ",Object(g.jsx)("b",{children:"store_directory.json"})," "]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("b",{children:"Focus on the user, not the technology."})," A simple implementation that impresses the user is better than a super technical solution that impresses other developers."]}),Object(g.jsx)("li",{children:"That said, code that is easy to follow is always appreciated ():"})]}),Object(g.jsx)(S,{})]})}}]),n}(a.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(g.jsx)(_,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");F?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):I(e)}))}}()}},[[35,1,2]]]);
//# sourceMappingURL=main.82717729.chunk.js.map