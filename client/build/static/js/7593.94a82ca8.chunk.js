"use strict";(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[7593],{7593:function(e,t,s){s.r(t);var n=s(4165),r=s(5861),a=s(885),o=s(2791),i=s(6871),u=s(3504),l=s(9658),c=s(197),d=(s(1977),s(184));t.default=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),s=t[0],p=t[1],h=(0,o.useState)(""),f=(0,a.Z)(h,2),m=f[0],w=f[1],v=(0,o.useState)(""),x=(0,a.Z)(v,2),g=x[0],j=x[1],b=(0,o.useState)(""),k=(0,a.Z)(b,2),y=k[0],Z=k[1],C=(0,i.UO)().resetToken;console.log(C),(0,o.useEffect)((function(){localStorage.getItem("authToken")&&(document.location="/ls-admin")}),[]);var N=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var r,a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r={headers:{"Content-Type":"application/json"}},s===m){e.next=7;break}return p(""),w(""),setTimeout((function(){j("")}),5e3),e.abrupt("return",j("Passwords don't match"));case 7:return e.prev=7,e.next=10,c.default.put("api/auth/resetpassword/".concat(C),{password:s},r);case 10:a=e.sent,o=a.data,0!==Object.keys(o).length&&Z(o.data),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(7),j(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error),setTimeout((function(){j("")}),5e3);case 19:case"end":return e.stop()}}),e,null,[[7,15]])})));return function(t){return e.apply(this,arguments)}}();return(0,d.jsx)("main",{children:(0,d.jsx)("div",{className:"auth-container forget_password",children:(0,d.jsx)("section",{className:"auth-form-container forget_password_form",children:(0,d.jsxs)("form",{onSubmit:N,children:[""!==g&&(0,d.jsx)(l.Z,{severity:"error",children:g}),""!==y&&(0,d.jsxs)(l.Z,{severity:"success",style:{position:"relative"},children:[y,(0,d.jsx)(u.OL,{to:"/ls-admin/login",className:"login_link",children:"Login"})]}),(0,d.jsx)("h1",{children:"Reset Password"}),(0,d.jsx)("label",{children:"New Password"}),(0,d.jsx)("input",{type:"password",value:s,onChange:function(e){return p(e.target.value)},required:!0,placeholder:"New Password"}),(0,d.jsx)("label",{children:"Confirm New Password"}),(0,d.jsx)("input",{type:"password",value:m,onChange:function(e){return w(e.target.value)},required:!0,placeholder:"Confirm New Password"}),(0,d.jsx)("button",{type:"submit",children:"Reset Password"})]})})})})}},1977:function(){}}]);
//# sourceMappingURL=7593.94a82ca8.chunk.js.map