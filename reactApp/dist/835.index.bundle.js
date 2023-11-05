"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[835],{4835:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(5466),a=n(2255),o=n(578);const l=function(){var e=(0,a.v9)((function(e){return e.userReducer.user})),t=(0,r.useRef)(null),n=(0,r.useRef)(null),l=(0,r.useRef)(null),c=(0,r.useRef)(null),i=(0,a.I0)();return r.createElement(r.Fragment,null,r.createElement("form",{className:"form-profile",onSubmit:function(r){if(e.email.length>=1){var a={email:e.email,password:e.password,firstName:t.current.value,lastName:n.current.value,address:l.current.value,mobile:c.current.value};i((0,o._W)(a)),r.preventDefault()}}},r.createElement("h1",null,"USER PROFILE"),r.createElement("form",{class:"row g-3"},r.createElement("div",{class:"col-md-6"},r.createElement("label",{className:"form-label"},r.createElement("b",null,"Frist name "),r.createElement("input",{type:"text",className:"form-control",ref:t,placeholder:"First name",maxLength:20}))),r.createElement("div",{class:"col-md-6"},r.createElement("label",{className:"form-label"},r.createElement("b",null,"Last name "),r.createElement("input",{type:"text",className:"form-control",ref:n,placeholder:"Last name",maxLength:20})))),r.createElement("div",{class:"col-md-12"},r.createElement("label",{for:"inputEmail4",class:"form-label"}," ",r.createElement("b",null,"Address ")),r.createElement("input",{type:"text",class:"form-control",ref:l,placeholder:"Address",maxLength:50})),r.createElement("div",{class:"col-md-12"},r.createElement("label",{for:"inputEmail4",class:"form-label"}," ",r.createElement("b",null,"Mobile ")),r.createElement("input",{type:"text",class:"form-control",ref:c,placeholder:"Mobile",maxLength:13})),r.createElement("br",null),r.createElement("button",{className:"btn btn-warning"},"Update ")))}},6469:(e,t,n)=>{n.d(t,{Vp:()=>c,WK:()=>u,dm:()=>o,kx:()=>l,wK:()=>i});var r=n(2387);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=function(e){return{type:r.xL,payload:e}},l=function(e){return{type:r.Nh,payload:e}},c=function(e,t){return{type:r.ei,payload:{id:e,qty:parseInt(t)}}},i=function(e,t){return function(n){window.fetch("http://localhost:9000/cart/api/additem",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userid:t,cart:e})}).then((function(e){return e.json()})).then((function(e){console.log("successfully added "+e)})).catch((function(e){console.log("ERROR while adding Item")}))}},u=function(e){return function(t){window.fetch("http://localhost:9000/cart/api/getUserCart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userid:e})}).then((function(e){return e.json()})).then((function(e){if(t({type:r.Qd}),e){var n,l=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,l=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw l}}}}(e.cart);try{for(l.s();!(n=l.n()).done;){var c=n.value;t(o(c))}}catch(e){l.e(e)}finally{l.f()}}}))}}},578:(e,t,n)=>{n.d(t,{Mv:()=>c,_W:()=>l,hL:()=>i});var r=n(7231),a=n(2387),o=n(6469),l=function(e){return function(t){window.fetch("http://localhost:9000/user/api/update",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){var n;console.log("we updated to the db "+e),t((n=e,{type:a.bf,payload:n})),alert("Successfully updated")})).catch((function(e){console.log("Error while fetching user",e)}))}},c=function(e){return function(t){r.Z.post("http://localhost:9000/user/api/signup",e).then((function(e){console.log("successfully send user info to the server "+e.status)})).catch((function(e){console.log("ERROR WHILE SENDING USER TO DB "+e)}))}},i=function(e){return function(t){window.fetch("http://localhost:9000/user/api/signin",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){alert("Can't find user"),t(e)})).then((function(e){var n;t((n=e,{type:a.Vc,payload:n})),t((0,o.WK)(e._id)),alert("Successfully Logged In")})).catch((function(e){console.log("Error while fetching user",e)}))}}}}]);