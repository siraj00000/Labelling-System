"use strict";(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[2205],{2039:function(n,e,t){t(2791);var r=t(7246),a=t(184);e.Z=function(n){var e=n.count,t=n.setPage,o=n.page;return(0,a.jsx)(r.Z,{className:"margin-vertical",count:e,shape:"rounded",color:"primary",onChange:function(n,e){t(e)},page:o})}},349:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(885),a=t(2791),o=t(1027),c=t(3786),i=t(5403),u=t(2672),s=t(184),l=function(n){var e=n.list,t=n.setFilterBy,i=a.useState(null),l=(0,r.Z)(i,2),d=l[0],p=l[1],f=Boolean(d),h=function(n){p(null),t(n)};return(0,s.jsxs)("div",{children:[(0,s.jsx)(u.Z,{"aria-controls":f?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":f?"true":void 0,id:"filter-icon",onClick:function(n){p(n.currentTarget)},sx:{color:"#fff",fontSize:"large",mt:1}}),(0,s.jsx)(o.Z,{id:"basic-menu",anchorEl:d,open:f,onClose:h,MenuListProps:{"aria-labelledby":"filter-icon"},children:e.map((function(n,e){return(0,s.jsx)(c.Z,{onClick:function(){return h(e)},children:n},e)}))})]})},d=function(n){var e=n.handler,t=n.searchBy,r=n.setFilterBy;return(0,s.jsxs)("div",{className:"barCont",children:[null!==t&&void 0!==t&&t.length?(0,s.jsx)(l,{list:t,setFilterBy:r}):(0,s.jsx)(i.Z,{sx:{color:"#eee",fontSize:20}}),(0,s.jsx)("input",{type:"search",placeholder:"search...",onChange:function(n){return e(n.target.value)}})]})}},3711:function(n,e,t){t.d(e,{W:function(){return o}});var r=t(2062),a=t.n(r),o=function(n,e,t,r,o){return new Promise((function(c){a()({title:"Are you sure?",text:"Once deleted, you will not be able to recover data!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(i){i?(a()("Poof! Your this data has been deleted!",{icon:"success"}),n(e,t,r,o),c(!0)):c(!1)}))}))}},8:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(1413),a=(t(2791),t(7630)),o=t(184),c=(0,a.ZP)("div")((function(n){var e=n.theme;return(0,r.Z)((0,r.Z)({},e.typography.button),{},{backgroundColor:e.palette.background.paper,fontSize:"25px",fontWeight:"bold"})}));function i(n){var e=n.text;return(0,o.jsx)(c,{children:e})}},2205:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r=t(4165),a=t(5861),o=t(885),c=t(3239),i=t(4554),u=t(6151),s=t(9658),l=t(2791),d=t(6871),p=t(6176),f=t(450),h=t(2039),v=t(349),x=t(2491),Z=t(8),m=t(3585),j=t(2419),y=t(8810),w=t(4942),g=t(7630),k=t(9836),b=t(3382),C=t(8745),P=t(618),T=t(9281),z=t(6890),S=t(5855),B=t(703),_=t(3746),A=t(1286),E=t(383),L=t(3711),F=t(5641),M=t(184),N=(0,g.ZP)(C.Z)((function(n){var e,t=n.theme;return e={},(0,w.Z)(e,"&.".concat(P.Z.head),{backgroundColor:t.palette.primary.main,color:t.palette.common.white}),(0,w.Z)(e,"&.".concat(P.Z.body),{fontSize:14}),e})),D=(0,g.ZP)(S.Z)((function(n){return{"&:nth-of-type(odd)":{backgroundColor:n.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}}));function U(n){var e=n.data,t=n.token,r=n.toggleLoader,a=l.useState(""),c=(0,o.Z)(a,2),i=c[0],u=c[1],p=(0,d.s0)();return(0,M.jsxs)(M.Fragment,{children:[""!==i&&(0,M.jsx)(s.Z,{severity:"error",children:i}),(0,M.jsx)(T.Z,{sx:{width:"100%",maxHeight:"500px"},component:B.Z,children:(0,M.jsxs)(k.Z,{"aria-label":"customized table",children:[(0,M.jsx)(z.Z,{children:(0,M.jsxs)(S.Z,{children:[(0,M.jsx)(N,{children:"Product Name"}),(0,M.jsx)(N,{align:"center",children:"Company"}),(0,M.jsx)(N,{align:"center",children:"Brand"}),(0,M.jsx)(N,{align:"center",children:"Category"}),(0,M.jsx)(N,{align:"center",children:"View"}),(0,M.jsx)(N,{align:"center",children:"Edit"}),(0,M.jsx)(N,{align:"center",children:"Delete"})]})}),(0,M.jsx)(b.Z,{children:e.map((function(n){return(0,M.jsxs)(D,{children:[(0,M.jsx)(N,{component:"th",scope:"row",children:n.product_name}),(0,M.jsx)(N,{align:"center",children:n.company_name}),(0,M.jsx)(N,{align:"center",children:n.brand_name}),(0,M.jsx)(N,{align:"center",children:n.category_name}),(0,M.jsx)(N,{align:"center",onClick:function(){p("detail",{state:{data:n}})},children:(0,M.jsx)(_.Z,{sx:{cursor:"pointer"}})}),(0,M.jsx)(N,{align:"center",onClick:function(){return e=null===n||void 0===n?void 0:n._id,t=n,void(e&&p("update",{state:{data:t,id:e}}));var e,t},children:(0,M.jsx)(A.Z,{sx:{cursor:"pointer"}})}),(0,M.jsx)(N,{align:"center",onClick:function(){return function(n){try{var e="/api/delete-product/".concat(n),a=F.fA;(0,L.W)(a,e,t).then((function(n){return r(n)}))}catch(i){u(null===i||void 0===i?void 0:i.response.data.error),setTimeout((function(){u("")}),5e3)}}(null===n||void 0===n?void 0:n._id)},children:(0,M.jsx)(E.Z,{sx:{cursor:"pointer"}})})]},n._id)}))})]})})]})}var G=function(n){var e=n.user,t=(0,d.s0)(),w=(0,l.useState)(!1),g=(0,o.Z)(w,2),k=g[0],b=g[1],C=(0,l.useState)([]),P=(0,o.Z)(C,2),T=P[0],z=P[1],S=(0,l.useState)(""),B=(0,o.Z)(S,2),_=B[0],A=B[1],E=(0,l.useState)(""),L=(0,o.Z)(E,2),F=L[0],N=L[1],D=(0,l.useState)(""),G=(0,o.Z)(D,2),O=G[0],V=G[1],W=(0,l.useState)(1),I=(0,o.Z)(W,2),R=I[0],q=I[1],H=(0,l.useState)(1),X=(0,o.Z)(H,2),Y=X[0],J=X[1];(0,l.useEffect)((function(){var n=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:A("0"),(t=new FormData).append("email",e.company_email),a="/api/fetch-product?product_name=".concat(O,"&page=").concat(R,"&limit=5"),(0,y.t2)(p.token,a,t).then((function(n){var e,t,r;null!==n&&void 0!==n&&null!==(e=n.data)&&void 0!==e&&e.success?(A("1"),z(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.data),J(null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.pages)):A("Collection is Empty")})).catch((function(n){N(n),(0,p.removeStatus)(N)}));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[k,O,R]);if(k)return setTimeout((function(){b(!1)}),2e3),(0,M.jsx)(x.Z,{loading:k});return(0,M.jsxs)("div",{children:[(0,M.jsxs)("div",{className:"direction-corner",children:[(0,M.jsxs)("div",{className:"direction",children:[(0,M.jsx)(Z.Z,{text:"PRODUCTS"}),"1"===_||_.length<=1&&(0,M.jsx)(c.Z,{size:25,sx:{ml:1}})]}),(0,M.jsxs)(i.Z,{className:"direction",children:[(0,M.jsx)(v.Z,{handler:function(n){V(n),q(1)}}),(0,M.jsx)(u.Z,{variant:"contained",startIcon:(0,M.jsx)(j.Z,{}),onClick:function(){try{var n=new FormData;n.append("email",e.company_email);var t="/api/generate-product-csv?product_name=".concat(O,"&page=").concat(R);(0,f.y)(p.token,t,n).then((function(n){var e=n.data;if(!e.success)return!1;window.open(m.L+(null===e||void 0===e?void 0:e.downloadURL),"_parent")})).catch((function(n){N(n),(0,p.removeStatus)(N)}))}catch(F){N(F.message)}},sx:{mr:"5px"},children:"CSV"}),(0,M.jsx)(u.Z,{variant:"contained",startIcon:(0,M.jsx)(j.Z,{}),onClick:function(){return t("create-product")},children:"Product"})]})]}),""!==F&&(0,M.jsx)(s.Z,{severity:"error",children:F}),(null===_||void 0===_?void 0:_.length)>1&&(0,M.jsx)(s.Z,{severity:"warning",children:_}),0!==(null===T||void 0===T?void 0:T.length)&&(0,M.jsx)(U,{data:T,token:p.token,toggleLoader:function(n){return b(n)}}),(0,M.jsx)(h.Z,{count:Y,setPage:q})]})}},8810:function(n,e,t){t.d(e,{eA:function(){return u},t2:function(){return c},zG:function(){return i}});var r=t(4165),a=t(5861),o=t(197),c=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,c){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,i){var u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.default)({method:"POST",url:t,data:c,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:u=n.sent,a(u),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),i(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,c){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,i){var u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.default)({method:"PUT",url:t,data:c,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:u=n.sent,a(u),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),i(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,c){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,i){var u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.default)({method:"PUT",url:t,data:c,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:u=n.sent,a(u),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),i(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},5641:function(n,e,t){t.d(e,{Sv:function(){return s},fA:function(){return i},jn:function(){return c},qX:function(){return u}});var r=t(4165),a=t(5861),o=t(197),c=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,c){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.default)({method:"GET",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:i=n.sent,a(i),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,o.default)({method:"DELETE",url:e,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,c){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.default)({method:"GET",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:i=n.sent,a(i),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,c){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,i){var u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.default)({method:"PUT",url:e,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},data:c});case 3:(u=n.sent)?a(u):i(u),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),i(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},450:function(n,e,t){t.d(e,{E:function(){return c},y:function(){return i}});var r=t(4165),a=t(5861),o=t(197),c=function(n,e){return new Promise(function(){var t=(0,a.Z)((0,r.Z)().mark((function t(a,c){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.default)({method:"GET",url:e,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:i=t.sent,a(i),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c(null===t.t0||void 0===t.t0?void 0:t.t0.response.data.error);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n,e){return t.apply(this,arguments)}}())},i=function(n,e,t){return new Promise(function(){var c=(0,a.Z)((0,r.Z)().mark((function a(c,i){var u;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o.default)({method:"POST",url:e,data:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:u=r.sent,c(u),r.next=12;break;case 7:if(r.prev=7,r.t0=r.catch(0),!r.t0.message){r.next=11;break}return r.abrupt("return",i(r.t0.message));case 11:i(null===r.t0||void 0===r.t0?void 0:r.t0.response.data.error);case 12:case"end":return r.stop()}}),a,null,[[0,7]])})));return function(n,e){return c.apply(this,arguments)}}())}},3585:function(n,e,t){t.d(e,{L:function(){return r}});var r="http://54.187.177.192/"},1286:function(n,e,t){var r=t(5318);e.Z=void 0;var a=r(t(5649)),o=t(184),c=(0,a.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");e.Z=c},3746:function(n,e,t){var r=t(5318);e.Z=void 0;var a=r(t(5649)),o=t(184),c=(0,a.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");e.Z=c}}]);
//# sourceMappingURL=2205.abd612d5.chunk.js.map