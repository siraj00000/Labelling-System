"use strict";(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[2806,3267],{9380:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var r=t(885),a=t(9658),c=t(6151),i=t(2791),o=t(2491),u=t(6176),s=t(5641),l=t(3420),d=t(3239),p=t(4554),f=t(2419),h=t(8),v=t(4942),m=t(7630),x=t(9836),Z=t(3382),y=t(8745),j=t(618),g=t(9281),k=t(6890),w=t(5855),C=t(703),b=t(3746),S=t(1286),P=t(383),T=t(3711),_=t(6871),A=t(184),z=(0,m.ZP)(y.Z)((function(n){var e,t=n.theme;return e={},(0,v.Z)(e,"&.".concat(j.Z.head),{backgroundColor:t.palette.primary.main,color:t.palette.common.white}),(0,v.Z)(e,"&.".concat(j.Z.body),{fontSize:14}),e})),B=(0,m.ZP)(w.Z)((function(n){return{"&:nth-of-type(odd)":{backgroundColor:n.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}}));function E(n){var e=n.detail,t=n.token,r=n.toggleLoader,a=(0,_.s0)();return(0,A.jsx)(g.Z,{component:C.Z,sx:{maxHeight:"500px"},children:(0,A.jsxs)(x.Z,{"aria-label":"customized table",children:[(0,A.jsx)(k.Z,{children:(0,A.jsxs)(w.Z,{children:[(0,A.jsx)(z,{align:"center",children:"company"}),(0,A.jsx)(z,{align:"center",children:"company_email"}),(0,A.jsx)(z,{align:"center",children:"pincode"}),(0,A.jsx)(z,{align:"center",children:"Status"}),(0,A.jsx)(z,{align:"center",children:"View"}),(0,A.jsx)(z,{align:"center",children:"Edit"}),(0,A.jsx)(z,{align:"center",children:"Delete"})]})}),(0,A.jsx)(Z.Z,{children:null===e||void 0===e?void 0:e.map((function(n){return(0,A.jsxs)(B,{children:[(0,A.jsx)(z,{align:"center",children:n.company_name}),(0,A.jsx)(z,{align:"center",children:n.company_email}),(0,A.jsx)(z,{align:"center",children:n.pincode}),(0,A.jsx)(z,{align:"center",children:n.company_active_status?"Active":"In Active"}),(0,A.jsx)(z,{align:"center",onClick:function(){a("detail",{state:{data:n,type:"Company"}})},children:(0,A.jsx)(b.Z,{sx:{cursor:"pointer"}})}),(0,A.jsx)(z,{align:"center",onClick:function(){return e=null===n||void 0===n?void 0:n._id,t=n,void(e&&a("edit-company-admin",{state:{data:t,id:e}}));var e,t},children:(0,A.jsx)(S.Z,{sx:{cursor:"pointer"}})}),(0,A.jsx)(z,{align:"center",onClick:function(){return function(n){try{var e="/api/delete-company-admin/".concat(n),a=s.fA;(0,T.W)(a,e,t).then((function(n){return r(n)}))}catch(c){alert("error agaya")}}(null===n||void 0===n?void 0:n._id)},children:(0,A.jsx)(P.Z,{sx:{cursor:"pointer"}})})]},null===n||void 0===n?void 0:n._id)}))})]})})}t(6363);var L=t(349),M=t(2039),I=t(450),N=t(3585),R=function(n){var e=n.isResponse,t=n.error,o=n.toggleLoader,s=(0,_.s0)(),v=(0,i.useState)(""),m=(0,r.Z)(v,2),x=m[0],Z=m[1],y=(0,i.useState)(1),j=(0,r.Z)(y,2),g=j[0],k=j[1],w=(0,i.useState)(1),C=(0,r.Z)(w,2),b=C[0],S=C[1],P=(0,i.useState)([]),T=(0,r.Z)(P,2),z=T[0],B=T[1],R=(0,i.useState)(t),U=(0,r.Z)(R,2),D=U[0],O=U[1],H=(0,i.useState)(e),V=(0,r.Z)(H,2),F=V[0],G=V[1];i.useEffect((function(){G("0");try{var n="/api/fetch-company-admin?company_name=".concat(x,"&page=").concat(g,"&limit=50");(0,l.Mn)(u.token,n).then((function(n){var e,t;null!==n&&void 0!==n&&n.data.success?(G("1"),B(null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.data),S(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.pages)):(G("Collection is Empty"),B([]),S(1))})).catch((function(n){O(n),(0,u.removeStatus)(O)}))}catch(D){O(D.message)}}),[x,g]);return(0,A.jsxs)("div",{className:"ca_container",children:[""!==D&&(0,A.jsx)(a.Z,{severity:"error",children:D}),(0,A.jsxs)("div",{className:"direction-corner",children:[(0,A.jsxs)("div",{className:"direction",children:[(0,A.jsx)(h.Z,{text:"Company"}),"1"===F||F.length<=1&&(0,A.jsx)(d.Z,{size:25,sx:{ml:1}})]}),(0,A.jsxs)(p.Z,{className:"direction",children:[(0,A.jsx)(L.Z,{handler:function(n){Z(n),k(1)}}),(0,A.jsx)(c.Z,{variant:"contained",startIcon:(0,A.jsx)(f.Z,{}),style:{ml:"5px"},onClick:function(){try{var n="/api/generate-company-csv?company_name=".concat(x,"&page=").concat(g);(0,I.E)(u.token,n).then((function(n){var e=n.data;if(!e.success)return!1;window.open(N.L+(null===e||void 0===e?void 0:e.downloadURL),"_parent")})).catch((function(n){O(n),(0,u.removeStatus)(O)}))}catch(D){O(D.message)}},children:"CSV"}),(0,A.jsx)(c.Z,{variant:"contained",startIcon:(0,A.jsx)(f.Z,{}),sx:{margin:"0 5px"},onClick:function(){return s("register-company-admin")},children:"Company Admin"}),(0,A.jsx)(c.Z,{variant:"contained",startIcon:(0,A.jsx)(f.Z,{}),onClick:function(){return s("create-company-admin")},children:"Company"})]})]}),""!==D&&(0,A.jsx)(a.Z,{severity:"error",children:D}),F.length>1&&(0,A.jsx)(a.Z,{severity:"warning",children:F}),0!==z.length&&(0,A.jsx)(E,{detail:z,token:u.token,toggleLoader:o}),(0,A.jsx)(M.Z,{count:b,setPage:k})]})},U=t(3183),D=function(){var n=i.useState(!1),e=(0,r.Z)(n,2),t=e[0],d=e[1],p=(0,i.useState)(!0),f=(0,r.Z)(p,2),h=f[0],v=f[1],m=(0,i.useState)(!0),x=(0,r.Z)(m,2),Z=x[0],y=x[1],j=(0,i.useState)([]),g=(0,r.Z)(j,2),k=g[0],w=g[1],C=(0,i.useState)(""),b=(0,r.Z)(C,2),S=b[0],P=b[1],T=(0,i.useState)(""),_=(0,r.Z)(T,2),z=_[0],B=_[1];(0,i.useEffect)((function(){(0,s.jn)(u.token,"/api/category").then((function(n){if(!n.data.success)return y(!1);(0,l.Mn)(u.token,"/api/fetch-company-admin").then((function(n){var e,t,r;0===(null===n||void 0===n||null===(e=n.data)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.length)?P("Collection is Empty"):(P("1"),w(null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.data))})).catch((function(n){B(n),setTimeout((function(){B("")}),5e3)}))})).catch((function(n){return B(n)}))}),[t]);var E=function(n){return d(n)};return t?(setTimeout((function(){d(!1)}),2e3),(0,A.jsx)(o.Z,{loading:t})):Z?(0,A.jsxs)("div",{children:[(0,A.jsx)(c.Z,{sx:{marginRight:2},variant:h?"contained":"outlined",onClick:function(){return v(!0)},children:"Company"}),(0,A.jsx)(c.Z,{variant:h?"outlined":"contained",onClick:function(){return v(!1)},children:"Manufacturer"}),h&&(0,A.jsx)(R,{isResponse:S,error:z,toggleLoader:E}),!h&&(0,A.jsx)(U.default,{companyDetail:k,toggleLoader:E})]}):(0,A.jsx)(a.Z,{severity:"warning",children:"Make sure you have categories."})}},3420:function(n,e,t){t.d(e,{CB:function(){return l},F1:function(){return u},Hr:function(){return d},K0:function(){return o},Mn:function(){return i},eD:function(){return s},h8:function(){return p}});var r=t(4165),a=t(5861),c=t(197),i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,i){var o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.default)({method:"GET",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:o=n.sent,a(o),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),i(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,i){var o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.default)({method:"POST",url:"/api/fetch-admin",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},data:t});case 3:o=n.sent,a(o),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),i(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,i){var o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.default)({method:"POST",url:"/api/insert-company-admin",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},data:t});case 3:o=n.sent,a(o),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),i(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,i){var o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.default)({method:"POST",url:"/api/auth/register",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},data:t});case 3:o=n.sent,a(o),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),i(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,i){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,o){var u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.default)({method:"PUT",url:e,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},data:i});case 3:(u=n.sent)?a(u):o(u),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),o(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,i){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,o){var u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.default)({method:"PUT",url:e,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},data:i});case 3:(u=n.sent)?a(u):o(u),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),o(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),p=function(n,e,t){return new Promise(function(){var i=(0,a.Z)((0,r.Z)().mark((function a(i,o){var u;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,c.default)({method:"PUT",url:e,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},data:t});case 3:u=r.sent,i(u),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),o(null===r.t0||void 0===r.t0?void 0:r.t0.response.data.error);case 10:case"end":return r.stop()}}),a,null,[[0,7]])})));return function(n,e){return i.apply(this,arguments)}}())}}}]);
//# sourceMappingURL=2806.52672e10.chunk.js.map