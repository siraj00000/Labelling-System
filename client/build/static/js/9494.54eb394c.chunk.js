"use strict";(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[9494],{9494:function(e,n,r){r.r(n);var t=r(4165),a=r(5861),s=r(4942),u=r(1413),c=r(885),o=r(2791),i=r(6871),l=r(3504),p=r(5755),f=r(2062),d=r.n(f),v=(r(5814),r(9658)),h=r(184);n.default=function(){var e=(0,i.s0)(),n=(0,o.useState)({email:"",password:""}),r=(0,c.Z)(n,2),f=r[0],m=r[1],b=(0,o.useState)(""),j=(0,c.Z)(b,2),w=j[0],x=j[1],y=function(e){var n=e.target,r=n.name,t=n.value;m((function(e){return(0,u.Z)((0,u.Z)({},e),{},(0,s.Z)({},r,t))}))},Z=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a,s;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,"/api/login-enduser",n.next=5,(0,p.jV)("/api/login-enduser",f);case 5:(s=n.sent).data.success&&d()("Good job!","Successfully Logged in","success"),localStorage.setItem("endutoken",null===s||void 0===s||null===(a=s.data)||void 0===a?void 0:a.token),e("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),x(n.t0);case 14:m({email:"",password:""});case 15:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}();return(0,h.jsx)("main",{children:(0,h.jsxs)("form",{className:"--form-layout -w-half",onSubmit:Z,children:[(0,h.jsx)("h1",{children:"Login"}),""!==w&&(0,h.jsx)(v.Z,{severity:"error",children:w}),(0,h.jsxs)("div",{className:"-input-full",children:[(0,h.jsx)("label",{children:"Email"}),(0,h.jsx)("input",{name:"email",type:"email",placeholder:"mark@example.com",value:f.email,onChange:y})]}),(0,h.jsxs)("div",{className:"-input-full",children:[(0,h.jsx)("label",{children:"Password"}),(0,h.jsx)("input",{name:"password",type:"password",placeholder:"mark!123",value:f.password,onChange:y})]}),(0,h.jsx)("button",{children:"Login"}),(0,h.jsx)(l.OL,{to:"/user/sign-up",children:"Don't have an account? Sign up"})]})})}},5755:function(e,n,r){r.d(n,{O0:function(){return u},jV:function(){return c}});var t=r(4165),a=r(5861),s=r(197),u=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n,r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(a,u){var c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.default)({method:"POST",url:r,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:c=e.sent,a(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,r){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n,r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(a,u){var c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.default)({method:"POST",url:n,data:r});case 3:c=e.sent,a(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,r){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()},5814:function(){},1413:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(4942);function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}}}]);
//# sourceMappingURL=9494.54eb394c.chunk.js.map