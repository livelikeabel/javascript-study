!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=16)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t,r){e.exports=r(13)},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("redux-saga/effects")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("redux-saga")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("regenerator-runtime")},function(e,t){e.exports={}},function(e,t){e.exports={}},function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n);function u(e,t,r,n,a,u,c){try{var o=e[u](c),s=o.value}catch(e){return void r(e)}o.done?t(s):Promise.resolve(s).then(n,a)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var c=e.apply(t,r);function o(e){u(c,n,a,o,s,"next",e)}function s(e){u(c,n,a,o,s,"throw",e)}o(void 0)}))}}var o=r(0),s=r.n(o),i=r(7),l=r.n(i),p=r(8),f=r.n(p),d=r(1),m=function(){return s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/red"},"Red")),s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/blue"},"Blue")),s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/users"},"Users")))},E=(r(14),function(){return s.a.createElement("div",{className:"Red"},"Red")}),v=function(){return console.log("red!"),s.a.createElement(s.a.Fragment,null,s.a.createElement(E,null))},b=(r(15),function(){return s.a.createElement("div",{className:"Blue"},"Blue")}),h=function(){return s.a.createElement(b,null)},y=function(e){var t=e.users;return t?s.a.createElement("div",null,s.a.createElement("ul",null,t.map((function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(d.Link,{to:"/users/".concat(e.id)},e.username))})))):null},x=r(3);function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=r(9),_=r.n(j),w=r(4),R=a.a.mark(C),P=a.a.mark(G),k="users/GET_USER",U=function(e){return{type:"users/GET_USERS_SUCCESS",error:!0,payload:e}},T=function(e){return{type:k,payload:e}},q=function(e){return _.a.get("https://jsonplaceholder.typicode.com/users/".concat(e))};function C(e){var t;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(w.call)(q,e.payload);case 3:return t=r.sent,r.next=6,Object(w.put)({type:"users/GET_USER_SUCCESS",payload:t.data});case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),r.next=12,Object(w.put)({type:"users/GET_USER_FAILURE",payload:r.t0,error:!0});case 12:case"end":return r.stop()}}),R,null,[[0,8]])}function G(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.takeEvery)(k,C);case 2:case"end":return e.stop()}}),P)}var D={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/GET_USERS_PENDING":return O({},e,{loading:O({},e.loading,{users:!0})});case"users/GET_USERS_SUCCESS":return O({},e,{loading:O({},e.loading,{users:!1}),users:t.payload.data});case"users/GET_USERS_FAILURE":return O({},e,{loading:O({},e.loading,{users:!1}),error:O({},e.error,{users:t.payload})});case k:return O({},e,{loading:O({},e.loading,{user:!0}),error:O({},e.error,{user:null})});case"users/GET_USER_SUCCESS":return O({},e,{loading:O({},e.loading,{user:!1}),user:t.payload});case"users/GET_USER_FAILURE":return O({},e,{loading:O({},e.loading,{user:!1}),error:O({},e.error,{user:t.payload})});default:return e}},L=Object(o.createContext)(null),F=L,A=function(e){var t=e.resolve,r=Object(o.useContext)(L);return r?(r.done||r.promises.push(Promise.resolve(t())),null):null},I=Object(x.connect)((function(e){return{users:e.users.users}}),{getUsers:function(){return function(){var e=c(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"users/GET_USERS_PENDING"}),e.next=4,_.a.get("https://jsonplaceholder.typicode.com/users");case 4:r=e.sent,t({type:"users/GET_USERS_SUCCESS",payload:r}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),t(U(e.t0)),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.users,r=e.getUsers;return Object(o.useEffect)((function(){t||r()}),[r,t]),s.a.createElement(s.a.Fragment,null,s.a.createElement(y,{users:t}),s.a.createElement(A,{resolve:r}))})),M=function(e){var t=e.user,r=t.email,n=t.name,a=t.username;return s.a.createElement("div",null,s.a.createElement("h1",null,a," (",n,")"),s.a.createElement("p",null,s.a.createElement("b",null,"e=mail:")," ",r))},B=function(e){var t=e.id,r=Object(x.useSelector)((function(e){return e.users.user})),n=Object(x.useDispatch)();return Object(o.useEffect)((function(){r&&r.id===parseInt(t,10)||n(T(t))}),[n,t,r]),r?s.a.createElement(M,{user:r}):s.a.createElement(A,{resolve:function(){return n(T(t))}})},J=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(I,null),s.a.createElement(d.Route,{path:"/users/:id",render:function(e){var t=e.match;return s.a.createElement(B,{id:t.params.id})}}))},Y=function(){return s.a.createElement("div",null,s.a.createElement(m,null),s.a.createElement("hr",null),s.a.createElement(d.Route,{path:"/red",component:v}),s.a.createElement(d.Route,{path:"/blue",component:h}),s.a.createElement(d.Route,{path:"/users",component:J}))},$=r(10),z=r.n($),H=r(11),K=r.n(H),Q=r(5),V=r(12),W=r.n(V),X=r(6),Z=r.n(X),ee=a.a.mark(te);function te(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.all)([G()]);case 2:case"end":return e.stop()}}),ee)}var re=Object(Q.combineReducers)({users:N}),ne=JSON.parse(K.a.readFileSync(z.a.resolve("./build/asset-manifest.json"),"utf8")),ae=Object.keys(ne.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(ne.files[e],'"><\/script>')})).join("");function ue(e,t){return'<!DOCTYPE html>\n  <html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="shortcut icon" href="/favicon.ico" />\n    <meta\n      name="viewport"\n      content="width=device-width,initial-scale-1,shrink-to-fit=no"\n    />\n    <meta name="theme-color" content="#000000" />\n    <title>React App</title>\n    <link href="'.concat(ne.files["main.css"],'" rel="stylesheet" />\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root">\n      ').concat(e,"\n    </div>\n    ").concat(t,'\n    <script src="').concat(ne.files["runtime-main.js"],'"><\/script>\n    ').concat(ae,'\n    <script src="').concat(ne.files["main.js"],'"><\/script>\n  </body>\n  </html>\n  ')}var ce=f()(),oe=function(){var e=c(a.a.mark((function e(t,r,n){var u,c,o,i,p,f,m,E,v;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u={},c=Z()(),o=Object(Q.createStore)(re,Object(Q.applyMiddleware)(W.a,c)),i=c.run(te).toPromise(),p={done:!1,promises:[]},f=s.a.createElement(F.Provider,{value:p},s.a.createElement(x.Provider,{store:o},s.a.createElement(d.StaticRouter,{location:t.url,context:u},s.a.createElement(Y,null)))),l.a.renderToStaticMarkup(f),o.dispatch(X.END),e.prev=8,e.next=11,i;case 11:return e.next=13,Promise.all(p.promises);case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(8),e.abrupt("return",r.status(500));case 18:p.done=!0,m=l.a.renderToString(f),E=JSON.stringify(o.getState()).replace(/</g,"\\u003c"),v="<script>__PRELOADED_STATE__ = ".concat(E,"<\/script>"),r.send(ue(m,v));case 23:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(t,r,n){return e.apply(this,arguments)}}(),se=f.a.static(z.a.resolve("./build"),{index:!1});ce.use(se),ce.use(oe),ce.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);