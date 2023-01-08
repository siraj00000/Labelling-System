(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[4611],{8:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(1413),u=(e(2791),e(7630)),a=e(184),c=(0,u.ZP)("div")((function(n){var t=n.theme;return(0,r.Z)((0,r.Z)({},t.typography.button),{},{backgroundColor:t.palette.background.paper,fontSize:"25px",fontWeight:"bold"})}));function o(n){var t=n.text;return(0,a.jsx)(c,{children:t})}},4611:function(n,t,e){"use strict";e.r(t);var r=e(3433),u=e(4165),a=e(5861),c=e(9439),o=e(2791),i=e(9658),s=e(197),l=(e(1977),e(6363),e(8)),f=e(9012),d=e(5523),p=e(9174),v=e(5641),h=e(2419),Z=e(9823),m=e(6176),x=e(7689),y=e(2062),b=e.n(y),g=e(2491),j=e(184);t.default=function(){var n=(0,x.s0)(),t=(0,o.useState)(!1),e=(0,c.Z)(t,2),y=e[0],_=e[1],w=(0,o.useState)([]),k=(0,c.Z)(w,2),C=k[0],S=k[1],N=(0,o.useState)([]),T=(0,c.Z)(N,2),A=T[0],E=T[1],P=(0,o.useState)(""),z=(0,c.Z)(P,2),M=z[0],F=z[1],B=(0,o.useState)(""),D=(0,c.Z)(B,2),I=D[0],O=D[1],V=(0,o.useState)([]),q=(0,c.Z)(V,2),G=q[0],R=q[1],W=(0,o.useState)(!0),H=(0,c.Z)(W,2),L=H[0],U=H[1],X=(0,o.useState)(""),J=(0,c.Z)(X,2),K=J[0],Q=J[1];(0,o.useEffect)((function(){(0,v.jn)(m.token,"/api/category").then((function(n){var t;S(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.data)})).catch((function(n){return Q(null===n||void 0===n?void 0:n.response.data.error)}))}),[]);var Y=function(){var t=(0,a.Z)((0,u.Z)().mark((function t(e){var r,a,c;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),0!==A.length){t.next=3;break}return t.abrupt("return",Q("Must select parent category"));case 3:return r={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(m.token)}},t.prev=4,_(!0),t.next=8,s.default.post("api/insert-subcategory",{parent_category_id:A[0]._id,sub_category:M,sub_category_active_status:L,feature:G},r);case 8:c=t.sent,b()({title:"Success!",text:null===c||void 0===c||null===(a=c.data)||void 0===a?void 0:a.msg,icon:"success",button:"Okay!"}).then((function(){n("/ls-admin/subcategory",{replace:!0}),_(!1)})),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),_(!1),Q(null===t.t0||void 0===t.t0?void 0:t.t0.response.data.error),(0,m.removeStatus)(Q);case 17:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(n){return t.apply(this,arguments)}}();return y?(0,j.jsx)(g.Z,{loading:y}):(0,j.jsxs)("form",{className:"form-sec",onSubmit:Y,children:[(0,j.jsx)(l.Z,{text:"Add Sub-Category"}),""!==K&&(0,j.jsx)(i.Z,{severity:"error",children:K}),(0,j.jsxs)("div",{className:"company_admin_form ",children:[(0,j.jsxs)("div",{className:"company_admin_form_field ",children:[(0,j.jsx)("label",{children:"Sub-Category"}),(0,j.jsx)("input",{placeholder:"Electronics...",value:M,onChange:function(n){return F(n.target.value)},required:!0})]}),(0,j.jsxs)("div",{className:"company_admin_form_field ",children:[(0,j.jsx)("label",{children:"Feature"}),(0,j.jsx)("input",{placeholder:"Automatic...",value:I,onChange:function(n){return O(n.target.value)}}),(0,j.jsx)(h.Z,{className:"addlist__icon",onClick:function(){if(!I)return!1;var n=(0,r.Z)(G);n.push(I),R(n),O("")}})]}),(0,j.jsxs)("div",{className:"company_admin_form_field",children:[(0,j.jsx)("label",{children:"Category Status"}),(0,j.jsx)(f.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,j.jsx)(d.Z,{name:"company_status",control:(0,j.jsx)(p.Z,{onChange:function(n){U(n.target.checked)},checked:L}),label:"Active"})})]})]}),0!==(null===A||void 0===A?void 0:A.length)&&(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{children:"Category"}),(0,j.jsx)("div",{className:"sub-catory-list_not_seleted",children:null===A||void 0===A?void 0:A.map((function(n,t){return(0,j.jsxs)("p",{onClick:function(){return function(n,t){var e=(0,r.Z)(C);e.push(n),S(e);var u=(0,r.Z)(A);u.splice(t,1),E(u)}(n,t)},className:"sub-category-chips _selected",children:[n.category_name," ",(0,j.jsx)(Z.Z,{})]},t)}))})]}),0===A.length&&0!==(null===C||void 0===C?void 0:C.length)&&(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{children:"Categories To choose"}),(0,j.jsx)("div",{className:"sub-catory-list_not_seleted",children:null===C||void 0===C?void 0:C.map((function(n,t){return(0,j.jsxs)("p",{onClick:function(){return function(n,t){var e=(0,r.Z)(A);e.push(n),E(e);var u=(0,r.Z)(C);u.splice(t,1),S(u)}(n,t)},className:"sub-category-chips",children:[n.category_name," ",(0,j.jsx)(h.Z,{})]},t)}))})]}),0!==G.length&&(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{children:"Features"}),(0,j.jsx)("div",{className:"sub-catory-list_not_seleted",children:null===G||void 0===G?void 0:G.map((function(n,t){return(0,j.jsxs)("p",{onClick:function(){return function(n){var t=(0,r.Z)(G);t.splice(n,1),R(t)}(t)},className:"sub-category-chips _selected",children:[n," ",(0,j.jsx)(Z.Z,{})]},t)}))})]}),(0,j.jsx)("button",{children:"Create Sub-Category"})]})}},5641:function(n,t,e){"use strict";e.d(t,{Sv:function(){return s},fA:function(){return o},jn:function(){return c},qX:function(){return i}});var r=e(4165),u=e(5861),a=e(197),c=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t,e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,u.Z)((0,r.Z)().mark((function n(u,c){var o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,a.default)({method:"GET",url:e,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:o=n.sent,u(o),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),o=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t,e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,a.default)({method:"DELETE",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),i=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t,e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,u.Z)((0,r.Z)().mark((function n(u,c){var o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,a.default)({method:"GET",url:e,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:o=n.sent,u(o),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),s=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t,e,c){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,u.Z)((0,r.Z)().mark((function n(u,o){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,a.default)({method:"PUT",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},data:c});case 3:(i=n.sent)?u(i):o(i),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),o(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}()},2419:function(n,t,e){"use strict";var r=e(4836);t.Z=void 0;var u=r(e(5649)),a=e(184),c=(0,u.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=c},9823:function(n,t,e){"use strict";var r=e(4836);t.Z=void 0;var u=r(e(5649)),a=e(184),c=(0,u.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=c},5649:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=e(4454)},3199:function(n,t,e){"use strict";var r=e(3981);t.Z=r.Z},4454:function(n,t,e){"use strict";e.r(t),e.d(t,{capitalize:function(){return u.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return c.Z},debounce:function(){return o.Z},deprecatedPropType:function(){return i},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return f.Z},requirePropFactory:function(){return d},setRef:function(){return p},unstable_ClassNameGenerator:function(){return g},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return h},unsupportedProp:function(){return Z},useControlled:function(){return m.Z},useEventCallback:function(){return x.Z},useForkRef:function(){return y.Z},useIsFocusVisible:function(){return b.Z}});var r=e(5902),u=e(4036),a=e(8949).Z,c=e(9201),o=e(3199);var i=function(n,t){return function(){return null}},s=e(9103),l=e(8301),f=e(7602);e(7462);var d=function(n,t){return function(){return null}},p=e(2971).Z,v=e(162),h=e(6248).Z;var Z=function(n,t,e,r,u){return null},m=e(8278),x=e(9683),y=e(2071),b=e(3031),g={configure:function(n){r.Z.configure(n)}}},9103:function(n,t,e){"use strict";e.d(t,{Z:function(){return u}});var r=e(2791);var u=function(n,t){return r.isValidElement(n)&&-1!==t.indexOf(n.type.muiName)}},8301:function(n,t,e){"use strict";var r=e(9723);t.Z=r.Z},7602:function(n,t,e){"use strict";var r=e(7979);t.Z=r.Z},8278:function(n,t,e){"use strict";var r=e(8959);t.Z=r.Z},162:function(n,t,e){"use strict";var r=e(5721);t.Z=r.Z},8949:function(n,t,e){"use strict";function r(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.reduce((function(n,t){return null==t?n:function(){for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];n.apply(this,r),t.apply(this,r)}}),(function(){}))}e.d(t,{Z:function(){return r}})},3981:function(n,t,e){"use strict";function r(n){var t,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,u=arguments.length,a=new Array(u),c=0;c<u;c++)a[c]=arguments[c];var o=function(){n.apply(r,a)};clearTimeout(t),t=setTimeout(o,e)}return r.clear=function(){clearTimeout(t)},r}e.d(t,{Z:function(){return r}})},9723:function(n,t,e){"use strict";function r(n){return n&&n.ownerDocument||document}e.d(t,{Z:function(){return r}})},7979:function(n,t,e){"use strict";e.d(t,{Z:function(){return u}});var r=e(9723);function u(n){return(0,r.Z)(n).defaultView||window}},8959:function(n,t,e){"use strict";e.d(t,{Z:function(){return a}});var r=e(9439),u=e(2791);function a(n){var t=n.controlled,e=n.default,a=(n.name,n.state,u.useRef(void 0!==t).current),c=u.useState(e),o=(0,r.Z)(c,2),i=o[0],s=o[1];return[a?t:i,u.useCallback((function(n){a||s(n)}),[])]}},6248:function(n,t,e){"use strict";var r;e.d(t,{Z:function(){return i}});var u=e(9439),a=e(2791),c=0;var o=(r||(r=e.t(a,2))).useId;function i(n){if(void 0!==o){var t=o();return null!=n?n:t}return function(n){var t=a.useState(n),e=(0,u.Z)(t,2),r=e[0],o=e[1],i=n||r;return a.useEffect((function(){null==r&&o("mui-".concat(c+=1))}),[r]),i}(n)}},6363:function(){},1977:function(){},4836:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports}}]);
//# sourceMappingURL=4611.c2790d9f.chunk.js.map