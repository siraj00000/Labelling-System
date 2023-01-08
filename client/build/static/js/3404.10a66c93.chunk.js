"use strict";(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[3404],{8:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(1413),a=(t(2791),t(7630)),u=t(184),c=(0,a.ZP)("div")((function(e){var n=e.theme;return(0,r.Z)((0,r.Z)({},n.typography.button),{},{backgroundColor:n.palette.background.paper,fontSize:"25px",fontWeight:"bold"})}));function o(e){var n=e.text;return(0,u.jsx)(c,{children:n})}},4886:function(e,n,t){t.r(n);var r=t(4165),a=t(5861),u=t(9439),c=t(2791),o=t(9658),i=t(9012),s=t(5523),p=t(9174),l=(t(1977),t(6363),t(8)),f=t(7689),d=t(3420),v=t(6176),h=t(2491),m=t(2062),Z=t.n(m),x=t(184);n.default=function(){var e=(0,f.TH)().state,n=e.data,t=e.id,m=(0,f.s0)(),w=(0,c.useState)(!1),y=(0,u.Z)(w,2),k=y[0],b=y[1],j=(0,c.useState)(null===n||void 0===n?void 0:n.pincode),_=(0,u.Z)(j,2),g=_[0],C=_[1],P=(0,c.useState)(0),S=(0,u.Z)(P,2),T=S[0],A=S[1],B=(0,c.useState)(0),z=(0,u.Z)(B,2),N=z[0],O=z[1],U=(0,c.useState)(""),D=(0,u.Z)(U,2),H=D[0],M=D[1],R=(0,c.useState)(null===n||void 0===n?void 0:n.manufacturer_active_status),q=(0,u.Z)(R,2),E=q[0],F=q[1],G=(0,c.useState)(""),K=(0,u.Z)(G,2),W=K[0],I=K[1],J=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var a,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),a="api/update-manufacturer-admin/".concat(t);try{b(!0),u={pincode:g,manufacturer_active_status:E,phone_one:T,phone_two:N},(0,d.Hr)(a,v.token,u).then((function(e){var n;Z()({title:"Success!",text:null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.msg,icon:"success",button:"Okay!"}).then((function(){m("/ls-admin/admins",{replace:!0}),b(!1)}))})).catch((function(e){var n;b(!1),I(null===e||void 0===e||null===(n=e.response.data)||void 0===n?void 0:n.error),(0,v.removeStatus)(I)}))}catch(W){}case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return k?(0,x.jsx)(h.Z,{loading:k}):(0,x.jsxs)("form",{className:"form-sec",onSubmit:J,children:[(0,x.jsx)(l.Z,{text:"Update Manufacturer"}),""!==W&&(0,x.jsx)(o.Z,{severity:"error",children:W}),(0,x.jsxs)("div",{className:"company_admin_form",children:[(0,x.jsxs)("div",{className:"company_admin_form_field",children:[(0,x.jsx)("label",{children:"Pincode"}),(0,x.jsx)("input",{placeholder:"392032",value:g||"",onChange:function(e){return C(e.target.value)},required:!0})]}),(0,x.jsxs)("div",{className:"company_admin_form_field",children:[(0,x.jsx)("label",{children:"Registration Address"}),(0,x.jsx)("input",{placeholder:"ABC street",value:H,onChange:function(e){return M(e.target.value)}})]}),(0,x.jsxs)("div",{className:"company_admin_form_field",children:[(0,x.jsx)("label",{children:"Phone 1"}),(0,x.jsx)("input",{placeholder:"9132793293",value:T||"",onChange:function(e){return A(e.target.value)}})]}),(0,x.jsxs)("div",{className:"company_admin_form_field",children:[(0,x.jsx)("label",{children:"Phone 2"}),(0,x.jsx)("input",{placeholder:"9112793293",value:N||"",onChange:function(e){return O(e.target.value)}})]}),(0,x.jsxs)("div",{className:"company_admin_form_field",children:[(0,x.jsx)("label",{children:"Company Status"}),(0,x.jsx)(i.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,x.jsx)(s.Z,{name:"company_status",control:(0,x.jsx)(p.Z,{onChange:function(e){F(e.target.checked)},checked:E}),label:"Active"})})]})]}),(0,x.jsx)("button",{children:"Create Manufacturer"})]})}},3420:function(e,n,t){t.d(n,{CB:function(){return p},F1:function(){return i},Hr:function(){return l},K0:function(){return o},Mn:function(){return c},eD:function(){return s},h8:function(){return f}});var r=t(4165),a=t(5861),u=t(197),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,c){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.default)({method:"GET",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:o=e.sent,a(o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,c){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.default)({method:"POST",url:"/api/fetch-admin",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},data:t});case 3:o=e.sent,a(o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,c){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.default)({method:"POST",url:"/api/insert-company-admin",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},data:t});case 3:o=e.sent,a(o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,c){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.default)({method:"POST",url:"/api/auth/register",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},data:t});case 3:o=e.sent,a(o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,c){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,o){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.default)({method:"PUT",url:n,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},data:c});case 3:(i=e.sent)?a(i):o(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,c){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,o){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.default)({method:"PUT",url:n,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},data:c});case 3:(i=e.sent)?a(i):o(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),f=function(e,n,t){return new Promise(function(){var c=(0,a.Z)((0,r.Z)().mark((function a(c,o){var i;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,u.default)({method:"PUT",url:n,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},data:t});case 3:i=r.sent,c(i),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),o(null===r.t0||void 0===r.t0?void 0:r.t0.response.data.error);case 10:case"end":return r.stop()}}),a,null,[[0,7]])})));return function(e,n){return c.apply(this,arguments)}}())}},8278:function(e,n,t){var r=t(8959);n.Z=r.Z},8959:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(9439),a=t(2791);function u(e){var n=e.controlled,t=e.default,u=(e.name,e.state,a.useRef(void 0!==n).current),c=a.useState(t),o=(0,r.Z)(c,2),i=o[0],s=o[1];return[u?n:i,a.useCallback((function(e){u||s(e)}),[])]}},6363:function(){},1977:function(){}}]);
//# sourceMappingURL=3404.10a66c93.chunk.js.map