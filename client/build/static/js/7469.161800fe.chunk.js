"use strict";(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[7469],{2039:function(n,e,t){t(2791);var r=t(7246),a=t(184);e.Z=function(n){var e=n.count,t=n.setPage,o=n.page;return(0,a.jsx)(r.Z,{className:"margin-vertical",count:e,shape:"rounded",color:"primary",onChange:function(n,e){t(e)},page:o})}},349:function(n,e,t){t.d(e,{Z:function(){return p}});var r=t(885),a=t(2791),o=t(1027),c=t(3786),u=t(5403),i=t(2672),s=t(184),l=function(n){var e=n.list,t=n.setFilterBy,u=a.useState(null),l=(0,r.Z)(u,2),p=l[0],d=l[1],f=Boolean(p),h=function(n){d(null),t(n)};return(0,s.jsxs)("div",{children:[(0,s.jsx)(i.Z,{"aria-controls":f?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":f?"true":void 0,id:"filter-icon",onClick:function(n){d(n.currentTarget)},sx:{color:"#fff",fontSize:"large",mt:1}}),(0,s.jsx)(o.Z,{id:"basic-menu",anchorEl:p,open:f,onClose:h,MenuListProps:{"aria-labelledby":"filter-icon"},children:e.map((function(n,e){return(0,s.jsx)(c.Z,{onClick:function(){return h(e)},children:n},e)}))})]})},p=function(n){var e=n.handler,t=n.searchBy,r=n.setFilterBy;return(0,s.jsxs)("div",{className:"barCont",children:[null!==t&&void 0!==t&&t.length?(0,s.jsx)(l,{list:t,setFilterBy:r}):(0,s.jsx)(u.Z,{sx:{color:"#eee",fontSize:20}}),(0,s.jsx)("input",{type:"search",placeholder:"search...",onChange:function(n){return e(n.target.value)}})]})}},3711:function(n,e,t){t.d(e,{W:function(){return o}});var r=t(2062),a=t.n(r),o=function(n,e,t,r,o){return new Promise((function(c){a()({title:"Are you sure?",text:"Once deleted, you will not be able to recover data!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(u){u?(a()("Poof! Your this data has been deleted!",{icon:"success"}),n(e,t,r,o),c(!0)):c(!1)}))}))}},8:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(1413),a=(t(2791),t(7630)),o=t(184),c=(0,a.ZP)("div")((function(n){var e=n.theme;return(0,r.Z)((0,r.Z)({},e.typography.button),{},{backgroundColor:e.palette.background.paper,fontSize:"25px",fontWeight:"bold"})}));function u(n){var e=n.text;return(0,o.jsx)(c,{children:e})}},7469:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r=t(4165),a=t(5861),o=t(885),c=t(3239),u=t(4554),i=t(6151),s=t(9658),l=t(2791),p=t(6871),d=t(6176),f=t(503),h=t(450),v=t(2039),Z=t(349),x=t(2491),m=t(8),w=t(4942),j=t(7630),y=t(9836),b=t(3382),k=t(8745),g=t(618),C=t(9281),T=t(6890),P=t(5855),S=t(703),z=t(3746),B=t(383),A=t(3711),E=t(5641),_=t(184),L=(0,j.ZP)(k.Z)((function(n){var e,t=n.theme;return e={},(0,w.Z)(e,"&.".concat(g.Z.head),{backgroundColor:t.palette.primary.main,color:t.palette.common.white}),(0,w.Z)(e,"&.".concat(g.Z.body),{fontSize:14}),e})),N=(0,j.ZP)(P.Z)((function(n){return{"&:nth-of-type(odd)":{backgroundColor:n.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}}));function G(n){var e=n.data,t=n.token,r=n.toggleLoader,a=l.useState(""),c=(0,o.Z)(a,2),u=c[0],i=c[1],f=(0,p.s0)();return(0,_.jsxs)(_.Fragment,{children:[""!==u&&(0,_.jsx)(s.Z,{severity:"error",children:u}),(0,_.jsx)(C.Z,{sx:{width:"100%",maxHeight:"500px"},component:S.Z,children:(0,_.jsxs)(y.Z,{"aria-label":"customized table",children:[(0,_.jsx)(T.Z,{children:(0,_.jsxs)(P.Z,{children:[(0,_.jsx)(L,{children:"Company"}),(0,_.jsx)(L,{align:"center",children:"Manufacturer Name"}),(0,_.jsx)(L,{align:"center",children:"Batch Number"}),(0,_.jsx)(L,{align:"center",children:"Serial Number"}),(0,_.jsx)(L,{align:"center",children:"Status"}),(0,_.jsx)(L,{align:"center",children:"View"}),(0,_.jsx)(L,{align:"center",children:"Delete"})]})}),(0,_.jsx)(b.Z,{children:e.map((function(n){return(0,_.jsxs)(N,{children:[(0,_.jsx)(L,{component:"th",scope:"row",children:n.company_name}),(0,_.jsx)(L,{align:"center",children:n.manufacturer_name}),(0,_.jsx)(L,{align:"center",children:n.batch_number}),(0,_.jsx)(L,{align:"center",children:n.serial_number}),(0,_.jsx)(L,{align:"center",children:n.tag_active?"Active":"Inactive"}),(0,_.jsx)(L,{align:"center",onClick:function(){f("detail",{state:{data:n}})},children:(0,_.jsx)(z.Z,{sx:{cursor:"pointer"}})}),(0,_.jsx)(L,{align:"center",onClick:function(){return function(n){try{var e="/api/delete-label/".concat(n),a=E.fA;(0,A.W)(a,e,t).then((function(n){return r(n)}))}catch(u){i(null===u||void 0===u?void 0:u.response.data.error),(0,d.removeStatus)(i)}}(null===n||void 0===n?void 0:n._id)},children:(0,_.jsx)(B.Z,{sx:{cursor:"pointer"}})})]},n._id)}))})]})})]})}var O=t(3585),F=t(2419),M=function(n){var e=n.user,t=(0,p.s0)(),w=(0,l.useState)(!1),j=(0,o.Z)(w,2),y=j[0],b=j[1],k=(0,l.useState)([]),g=(0,o.Z)(k,2),C=g[0],T=g[1],P=(0,l.useState)(""),S=(0,o.Z)(P,2),z=S[0],B=S[1],A=(0,l.useState)(""),E=(0,o.Z)(A,2),L=E[0],N=E[1],M=(0,l.useState)(""),D=(0,o.Z)(M,2),I=D[0],V=D[1],W=(0,l.useState)(1),q=(0,o.Z)(W,2),U=q[0],X=q[1],$=(0,l.useState)(1),H=(0,o.Z)($,2),R=H[0],Y=H[1];(0,l.useEffect)((function(){var n=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:B("0"),(t=new FormData).append("id",e._id),a="/api/fetch-label?company_name=".concat(I,"&page=").concat(U,"&limit=50"),(0,f.hu)(d.token,a,t).then((function(n){var e,t,r;null!==n&&void 0!==n&&null!==(e=n.data)&&void 0!==e&&e.success?(B("1"),T(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.data),Y(null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.pages)):B("Collection is Empty")})).catch((function(n){N(n),(0,d.removeStatus)(N)}));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[y,I,U]);if(y)return setTimeout((function(){b(!1)}),2e3),(0,_.jsx)(x.Z,{loading:y});return(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:"direction-corner",children:[(0,_.jsxs)("div",{className:"direction",children:[(0,_.jsx)(m.Z,{text:"LABEL"}),"1"===z||z.length<=1&&(0,_.jsx)(c.Z,{size:25,sx:{ml:1}})]}),(0,_.jsxs)(u.Z,{className:"direction",children:[(0,_.jsx)(Z.Z,{handler:function(n){V(n),X(1)}}),(0,_.jsx)(i.Z,{variant:"contained",startIcon:(0,_.jsx)(F.Z,{}),onClick:function(){try{var n=new FormData;n.append("uId",e._id);var t="/api/generate-label-csv?company_name=".concat(I,"&page=").concat(U);(0,h.y)(d.token,t,n).then((function(n){var e=n.data;if(!e)return!1;window.open(O.L+(null===e||void 0===e?void 0:e.downloadURL),"_parent")})).catch((function(n){N(n),(0,d.removeStatus)(N)}))}catch(L){N(L.message)}},sx:{mr:"5px"},children:"CSV"}),(0,_.jsx)(i.Z,{variant:"contained",startIcon:(0,_.jsx)(F.Z,{}),onClick:function(){return t("create-label")},children:"Label"})]})]}),""!==L&&(0,_.jsx)(s.Z,{severity:"error",children:L}),z.length>1&&(0,_.jsx)(s.Z,{severity:"warning",children:z}),0!==C.length&&(0,_.jsx)(G,{data:C,token:d.token,toggleLoader:function(n){return b(n)}}),(0,_.jsx)(v.Z,{count:R,setPage:X})]})}},503:function(n,e,t){t.d(e,{G9:function(){return i},O$:function(){return d},ad:function(){return l},eg:function(){return s},hu:function(){return c},qX:function(){return p},u$:function(){return u}});var r=t(4165),a=t(5861),o=t(197),c=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,c){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,u){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.default)({method:"POST",url:t,data:c,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:i=n.sent,a(i),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),u(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,c){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,u){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.default)({method:"POST",url:t,data:c,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:i=n.sent,a(i),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),u(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,c){var u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.default)({method:"GET",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:u=n.sent,a(u),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s=function(n,e,t){return new Promise(function(){var c=(0,a.Z)((0,r.Z)().mark((function a(c,u){var i;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o.default)({method:"POST",url:e,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},data:t});case 3:i=r.sent,c(i),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),u(null===r.t0||void 0===r.t0?void 0:r.t0.response.data.error);case 10:case"end":return r.stop()}}),a,null,[[0,7]])})));return function(n,e){return c.apply(this,arguments)}}())},l=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,c){var u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.default)({method:"GET",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:u=n.sent,a(u),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,c){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,c){var u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.default)({method:"GET",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:u=n.sent,a(u),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),d=function(n,e,t){return new Promise(function(){var c=(0,a.Z)((0,r.Z)().mark((function a(c,u){var i;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o.default)({method:"POST",url:e,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},data:t});case 3:i=r.sent,c(i),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),u(null===r.t0||void 0===r.t0?void 0:r.t0.response.data.error);case 10:case"end":return r.stop()}}),a,null,[[0,7]])})));return function(n,e){return c.apply(this,arguments)}}())}},5641:function(n,e,t){t.d(e,{Sv:function(){return s},fA:function(){return u},jn:function(){return c},qX:function(){return i}});var r=t(4165),a=t(5861),o=t(197),c=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,c){var u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.default)({method:"GET",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:u=n.sent,a(u),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,o.default)({method:"DELETE",url:e,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,c){var u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.default)({method:"GET",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:u=n.sent,a(u),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,c){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,u){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.default)({method:"PUT",url:e,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},data:c});case 3:(i=n.sent)?a(i):u(i),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),u(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},450:function(n,e,t){t.d(e,{E:function(){return c},y:function(){return u}});var r=t(4165),a=t(5861),o=t(197),c=function(n,e){return new Promise(function(){var t=(0,a.Z)((0,r.Z)().mark((function t(a,c){var u;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.default)({method:"GET",url:e,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:u=t.sent,a(u),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c(null===t.t0||void 0===t.t0?void 0:t.t0.response.data.error);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n,e){return t.apply(this,arguments)}}())},u=function(n,e,t){return new Promise(function(){var c=(0,a.Z)((0,r.Z)().mark((function a(c,u){var i;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o.default)({method:"POST",url:e,data:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:i=r.sent,c(i),r.next=12;break;case 7:if(r.prev=7,r.t0=r.catch(0),!r.t0.message){r.next=11;break}return r.abrupt("return",u(r.t0.message));case 11:u(null===r.t0||void 0===r.t0?void 0:r.t0.response.data.error);case 12:case"end":return r.stop()}}),a,null,[[0,7]])})));return function(n,e){return c.apply(this,arguments)}}())}},3585:function(n,e,t){t.d(e,{L:function(){return r}});var r="http://35.163.101.249/"},3746:function(n,e,t){var r=t(5318);e.Z=void 0;var a=r(t(5649)),o=t(184),c=(0,a.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");e.Z=c}}]);
//# sourceMappingURL=7469.161800fe.chunk.js.map