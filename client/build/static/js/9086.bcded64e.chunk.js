"use strict";(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[9086],{9086:function(e,t,n){n.r(t);var a=n(4165),r=n(5861),s=n(9439),o=n(2791),l=n(1087),u=n(9658),i=n(197),c=(n(1977),n(184));t.default=function(){var e=(0,o.useState)(""),t=(0,s.Z)(e,2),n=t[0],d=t[1],m=(0,o.useState)(""),p=(0,s.Z)(m,2),h=p[0],f=p[1],v=(0,o.useState)(""),g=(0,s.Z)(v,2),x=g[0],b=g[1],j=(0,o.useState)(""),y=(0,s.Z)(j,2),w=y[0],S=y[1];(0,o.useEffect)((function(e){localStorage.getItem("authToken")&&(e.preventDefault(),document.location="/ls-admin")}),[]);var k=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var r,s,o,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,i.default.post("api/auth/login",{email:n,password:x},r);case 5:s=e.sent,o=s.data,localStorage.setItem("authToken",null===o||void 0===o?void 0:o.token),o.userInfo&&(localStorage.setItem("role",o.userInfo.role),a=o.userInfo.role,l=1===Number(a)?"Super":2===Number(a)?"Company":3===Number(a)?"Manufacturer":void 0,f("".concat(l," admin login successfull!")),S(""),document.location="/ls-admin"),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(2),S(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error),f(""),setTimeout((function(){S("")}),5e3);case 16:case"end":return e.stop()}var a}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return(0,c.jsx)("main",{children:(0,c.jsxs)("div",{className:"auth-container",children:[(0,c.jsx)("section",{className:"auth-bg-img"}),(0,c.jsx)("section",{className:"auth-form-container",children:(0,c.jsxs)("form",{onSubmit:k,children:[""!==w&&(0,c.jsx)(u.Z,{severity:"error",children:w}),""!==h&&(0,c.jsx)(u.Z,{severity:"success",children:h}),(0,c.jsx)("h1",{children:"Labelling System"}),(0,c.jsx)("label",{children:"Email"}),(0,c.jsx)("input",{type:"email",name:"email",value:n,onChange:function(e){return d(e.target.value)},required:!0,placeholder:"Email Address"}),(0,c.jsx)("label",{children:"Password"}),(0,c.jsx)("input",{type:"password",value:x,onChange:function(e){return b(e.target.value)},required:!0,placeholder:"Password"}),(0,c.jsx)("button",{type:"submit",children:"Login"}),(0,c.jsx)(l.OL,{to:"/ls-admin/forgetpassword",children:"Forget Password"})]})})]})})}},1977:function(){}}]);
//# sourceMappingURL=9086.bcded64e.chunk.js.map