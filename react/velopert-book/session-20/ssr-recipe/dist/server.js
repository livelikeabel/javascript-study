!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=6)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t){e.exports={}},function(e,t){e.exports={}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),l=n(2),u=n.n(l),a=n(3),c=n.n(a),i=n(1),f=function(){return o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(i.Link,{to:"/red"},"Red")),o.a.createElement("li",null,o.a.createElement(i.Link,{to:"/blue"},"Blue")))},s=(n(4),function(){return o.a.createElement("div",{className:"Red"},"Red")}),m=function(){return console.log("red!"),o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"REDDDD!"),o.a.createElement(s,null))},d=(n(5),function(){return o.a.createElement("div",{className:"Blue"},"Blue")}),p=function(){return o.a.createElement(d,null)},E=function(){return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement("hr",null),o.a.createElement(i.Route,{path:"/red",component:m}),o.a.createElement(i.Route,{path:"/blue",component:p}))},b=c()();b.use((function(e,t,n){console.log("URL:",e.url);var r=o.a.createElement(i.StaticRouter,{location:e.url,context:{}},o.a.createElement(E,null)),l=u.a.renderToString(r);t.send(l)})),b.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);