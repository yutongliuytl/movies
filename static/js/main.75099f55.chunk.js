(this["webpackJsonpyutong-movie-challenge"]=this["webpackJsonpyutong-movie-challenge"]||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},66:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),c=n(10),s=n.n(c),i=n(14),o=n(36),l=Object(a.createContext)(),u={nominees:[]},j=JSON.parse(localStorage.getItem("nominees")),b=function(e,t){switch(t.type){case"SET_NOMINEES":return Object(o.a)(Object(o.a)({},e),{},{nominees:t.payload.nominees});default:return null}},p=function(e){var t=e.children,n=Object(a.useReducer)(b,j||u),c=Object(i.a)(n,2),s=c[0],o=c[1];return Object(a.useEffect)((function(){localStorage.setItem("nominees",JSON.stringify(s))}),[s]),Object(r.jsx)(l.Provider,{value:[s,o],children:t})},d=function(e){var t=e.children;return Object(r.jsx)(p,{children:t})},h=function(){return{movie:Object(a.useContext)(l)}},m=(n(60),n(61),n(115)),O=n(118),f=n(113),v=n(114),x=n(117),g=function(e){var t=e.value,n=e.done,a=t/5*100;return Object(r.jsxs)(x.a,{position:"relative",display:"inline-flex",children:[Object(r.jsx)(f.a,{style:{color:n?"#84EEAB":"#88CADC",width:100,height:100},variant:"determinate",value:a}),Object(r.jsx)(x.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(r.jsx)(v.a,{variant:"body1",component:"div",color:"textSecondary",children:"".concat(t," / 5")})})]})},N=(n(66),function(){var e=h(),t=Object(i.a)(e.movie,2),n=t[0],a=t[1],c=n.nominees,s=function(e){var t=c.filter((function(t){return e.target.alt!==t.title}));a({type:"SET_NOMINEES",payload:{nominees:t}})};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"nomination-text",children:"Your nominations"}),Object(r.jsxs)("div",{className:"cart-wrapper",children:[Object(r.jsx)("div",{className:"progress-wrapper",children:c&&Object(r.jsx)(g,{value:c.length,done:5===c.length})}),Object(r.jsx)("div",{className:"containers-wrapper",children:[0,1,2,3,4].map((function(e){return e<c.length?Object(r.jsx)(O.a,{title:"Remove","aria-label":"Remove",children:Object(r.jsx)("img",{className:"cart-poster-container pointer",src:c[e].src,alt:c[e].title,onClick:s,onKeyDown:s,role:"presentation",tabIndex:-1},e)}):Object(r.jsx)(m.a,{className:"cart-poster-container"},e)}))})]})]})}),w=n(21),y=n.n(w),S=n(33),E=n(119),I=n(47),k=n.n(I),C=n(46),T=n.n(C),R=function(){var e=Object(S.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=new URL("https://www.omdbapi.com/")).search=new URLSearchParams({apikey:"96da4af7",s:"*".concat(t,"*")}),!t){e.next=4;break}return e.abrupt("return",T.a.get(n.toString()).then((function(e){return e.data.Search})).catch((function(e){return console.log("error",e)})));case 4:return e.abrupt("return",[]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=(n(87),function(e){var t=e.poster,n=e.title,a=e.year,c=h(),s=Object(i.a)(c.movie,2),o=s[0],l=s[1],u=o.nominees,j=function(e){var t;u.length<5&&(t=e.target.alt,!u.filter((function(e){return t===e.title})).length)&&(u.push({src:e.target.currentSrc,title:e.target.alt}),l({type:"SET_NOMINEES",payload:{nominees:u}}))};return Object(r.jsx)(O.a,{title:"Nominate","aria-label":"Nominate",children:Object(r.jsxs)("div",{className:"search-poster-wrapper",onClick:j,onKeyDown:j,role:"button",tabIndex:0,children:[Object(r.jsx)("img",{className:"search-poster-wrapper__image",src:t,alt:n}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:n})}),Object(r.jsx)("div",{children:a})]})})}),J=(n(88),function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),o=Object(i.a)(s,2),l=o[0],u=o[1];Object(a.useEffect)((function(){var e=setTimeout(Object(S.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(n);case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)}))),500);return function(){return clearTimeout(e)}}),[n]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"search-text",children:"Movies"}),Object(r.jsxs)("div",{className:"search-wrapper",children:[Object(r.jsxs)(m.a,{className:"search-paper",children:[Object(r.jsx)(E.a,{fullWidth:!0,className:"search-input",placeholder:"Search for movies...",inputProps:{"aria-label":"search for movies"},onChange:function(e){c(e.target.value)}}),Object(r.jsx)(k.a,{className:"search-icon"})]}),Object(r.jsx)("div",{className:"grid-wrapper",children:Object(r.jsx)("div",{className:"search-results-wrapper",children:l&&l.map((function(e){return Object(r.jsx)(_,{poster:e.Poster,title:e.Title,year:e.Year},e.Title)}))})})]})]})});var M=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(N,{}),Object(r.jsx)(J,{})]})};s.a.render(Object(r.jsx)(d,{children:Object(r.jsx)(M,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.75099f55.chunk.js.map