"use strict";(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[9727],{9727:function(e,t,n){n.r(t);var r=n(4165),a=n(5861),s=n(9439),i=n(2791),o=n(9658),c=n(197),l=(n(1977),n(184));t.default=function(){var e=(0,i.useState)(""),t=(0,s.Z)(e,2),n=t[0],u=t[1],d=(0,i.useState)(""),f=(0,s.Z)(d,2),h=f[0],p=f[1],m=(0,i.useState)(""),v=(0,s.Z)(m,2),x=v[0],j=v[1];(0,i.useEffect)((function(){localStorage.getItem("authToken")&&(document.location="/ls-admin")}),[]);var g=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a,s,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,c.default.post("api/auth/forgetpassword",{email:n},a);case 5:s=e.sent,i=s.data,0!==Object.keys(i).length&&j(i.data),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),p(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error),setTimeout((function(){p("")}),5e3);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return(0,l.jsx)("main",{children:(0,l.jsx)("div",{className:"auth-container forget_password",children:(0,l.jsx)("section",{className:"auth-form-container forget_password_form",children:(0,l.jsxs)("form",{onSubmit:g,children:[""!==h&&(0,l.jsx)(o.Z,{severity:"error",children:h}),""!==x&&(0,l.jsx)(o.Z,{severity:"success",children:x}),(0,l.jsx)("h1",{children:"Forget Password"}),(0,l.jsx)("label",{children:"Email"}),(0,l.jsx)("input",{type:"email",name:"email",value:n,onChange:function(e){return u(e.target.value)},required:!0,placeholder:"Email Address"}),(0,l.jsx)("button",{type:"submit",children:"Send"})]})})})})}},1977:function(){}}]);
//# sourceMappingURL=9727.84277067.chunk.js.map