(this["webpackJsonpyutong-movie-challenge"]=this["webpackJsonpyutong-movie-challenge"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},56:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),c=n(20),s=n.n(c),i=n(10),o=n(28),l=Object(a.createContext)(),u={nominees:[]},j=JSON.parse(localStorage.getItem("nominees")),p=function(e,t){switch(t.type){case"SET_NOMINEES":return Object(o.a)(Object(o.a)({},e),{},{nominees:t.payload.nominees});default:return null}},h=function(e){var t=e.children,n=Object(a.useReducer)(p,j||u),c=Object(i.a)(n,2),s=c[0],o=c[1];return Object(a.useEffect)((function(){localStorage.setItem("nominees",JSON.stringify(s))}),[s]),Object(r.jsx)(l.Provider,{value:[s,o],children:t})},b=function(e){var t=e.children;return Object(r.jsx)(h,{children:t})},d=function(){return{movie:Object(a.useContext)(l)}},m=(n(50),n(51),n(100)),f=n(98),O=n(99),v=n(102),x=function(e){var t=e.value,n=t/5*100;return Object(r.jsxs)(v.a,{position:"relative",display:"inline-flex",children:[Object(r.jsx)(f.a,{style:{width:100,height:100,color:"#88CADC"},variant:"determinate",value:n}),Object(r.jsx)(v.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(r.jsx)(O.a,{variant:"body1",component:"div",color:"textSecondary",children:"".concat(t," / 5")})})]})},g=(n(56),function(){var e=d(),t=Object(i.a)(e.movie,2),n=t[0],a=t[1],c=n.nominees,s=function(e){var t=c.filter((function(t){return e.target.alt!==t.title}));a({type:"SET_NOMINEES",payload:{nominees:t}})};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"nomination-text",children:"Your nominations"}),Object(r.jsxs)("div",{className:"cart-wrapper",children:[Object(r.jsx)("div",{className:"progress-wrapper",children:c&&Object(r.jsx)(x,{value:c.length})}),Object(r.jsx)("div",{className:"containers-wrapper",children:[0,1,2,3,4].map((function(e){return e<c.length?Object(r.jsx)("img",{className:"cart-poster-container",src:c[e].src,alt:c[e].title,onClick:s,onKeyDown:s,role:"presentation",tabIndex:-1},e):Object(r.jsx)(m.a,{className:"cart-poster-container"},e)}))})]})]})}),N=n(15),w=n.n(N),y=n(25),S=n(104),E=n(38),I=n.n(E),k=n(37),C=n.n(k),T=function(){var e=Object(y.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=new URL("https://www.omdbapi.com/")).search=new URLSearchParams({apikey:"96da4af7",s:"*".concat(t,"*")}),!t){e.next=4;break}return e.abrupt("return",C.a.get(n.toString()).then((function(e){return e.data.Search})).catch((function(e){return console.log("error",e)})));case 4:return e.abrupt("return",[]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=(n(76),function(e){var t=e.poster,n=e.title,a=d(),c=Object(i.a)(a.movie,2),s=c[0],o=c[1],l=s.nominees,u=function(e){var t;l.length<5&&(t=e.target.alt,!l.filter((function(e){return t===e.title})).length)&&(l.push({src:e.target.currentSrc,title:e.target.alt}),o({type:"SET_NOMINEES",payload:{nominees:l}}))};return Object(r.jsx)("div",{className:"search-poster-wrapper",onClick:u,onKeyDown:u,role:"button",tabIndex:0,children:Object(r.jsx)("img",{className:"search-poster-wrapper__image",src:t,alt:n})})}),J=(n(77),function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),o=Object(i.a)(s,2),l=o[0],u=o[1];Object(a.useEffect)((function(){var e=setTimeout(Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(n);case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)}))),500);return function(){return clearTimeout(e)}}),[n]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"search-text",children:"Movies"}),Object(r.jsxs)("div",{className:"search-wrapper",children:[Object(r.jsxs)(m.a,{className:"search-paper",children:[Object(r.jsx)(S.a,{fullWidth:!0,className:"search-input",placeholder:"Search for movies...",inputProps:{"aria-label":"search for movies"},onChange:function(e){c(e.target.value)}}),Object(r.jsx)(I.a,{className:"search-icon"})]}),Object(r.jsx)("div",{className:"grid-wrapper",children:Object(r.jsx)("div",{className:"search-results-wrapper",children:l&&l.map((function(e){return Object(r.jsx)(_,{poster:e.Poster,title:e.Title},e.Title)}))})})]})]})});var M=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(g,{}),Object(r.jsx)(J,{})]})};s.a.render(Object(r.jsx)(b,{children:Object(r.jsx)(M,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.fc0080b9.chunk.js.map