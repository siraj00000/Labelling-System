(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[4611],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},8:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(1413),u=(n(2791),n(7630)),a=n(184),o=(0,u.ZP)("div")((function(e){var t=e.theme;return(0,r.Z)((0,r.Z)({},t.typography.button),{},{backgroundColor:t.palette.background.paper,fontSize:"25px",fontWeight:"bold"})}));function i(e){var t=e.text;return(0,a.jsx)(o,{children:t})}},4611:function(e,t,n){"use strict";n.r(t);var r=n(2982),u=n(4165),a=n(5861),o=n(885),i=n(2791),c=n(9658),s=n(197),l=(n(1977),n(6363),n(8)),f=n(9012),d=n(5523),p=n(9174),v=n(5641),h=n(2419),m=n(9823),Z=n(6176),x=n(6871),y=n(2062),b=n.n(y),g=n(2491),j=n(184);t.default=function(){var e=(0,x.s0)(),t=(0,i.useState)(!1),n=(0,o.Z)(t,2),y=n[0],_=n[1],w=(0,i.useState)([]),k=(0,o.Z)(w,2),C=k[0],S=k[1],N=(0,i.useState)([]),T=(0,o.Z)(N,2),A=T[0],E=T[1],P=(0,i.useState)(""),z=(0,o.Z)(P,2),M=z[0],F=z[1],I=(0,i.useState)(""),B=(0,o.Z)(I,2),D=B[0],G=B[1],O=(0,i.useState)([]),V=(0,o.Z)(O,2),q=V[0],R=V[1],U=(0,i.useState)(!0),W=(0,o.Z)(U,2),H=W[0],L=W[1],X=(0,i.useState)(""),Y=(0,o.Z)(X,2),J=Y[0],K=Y[1];(0,i.useEffect)((function(){(0,v.jn)(Z.token,"/api/category").then((function(e){var t;S(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data)})).catch((function(e){return K(null===e||void 0===e?void 0:e.response.data.error)}))}),[]);var Q=function(){var t=(0,a.Z)((0,u.Z)().mark((function t(n){var r,a,o;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),0!==A.length){t.next=3;break}return t.abrupt("return",K("Must select parent category"));case 3:return r={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(Z.token)}},t.prev=4,_(!0),t.next=8,s.default.post("api/insert-subcategory",{parent_category_id:A[0]._id,sub_category:M,sub_category_active_status:H,feature:q},r);case 8:o=t.sent,b()({title:"Success!",text:null===o||void 0===o||null===(a=o.data)||void 0===a?void 0:a.msg,icon:"success",button:"Okay!"}).then((function(){e("/ls-admin/subcategory",{replace:!0}),_(!1)})),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),_(!1),K(null===t.t0||void 0===t.t0?void 0:t.t0.response.data.error),(0,Z.removeStatus)(K);case 17:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e){return t.apply(this,arguments)}}();return y?(0,j.jsx)(g.Z,{loading:y}):(0,j.jsxs)("form",{className:"form-sec",onSubmit:Q,children:[(0,j.jsx)(l.Z,{text:"Add Sub-Category"}),""!==J&&(0,j.jsx)(c.Z,{severity:"error",children:J}),(0,j.jsxs)("div",{className:"company_admin_form ",children:[(0,j.jsxs)("div",{className:"company_admin_form_field ",children:[(0,j.jsx)("label",{children:"Sub-Category"}),(0,j.jsx)("input",{placeholder:"Electronics...",value:M,onChange:function(e){return F(e.target.value)},required:!0})]}),(0,j.jsxs)("div",{className:"company_admin_form_field ",children:[(0,j.jsx)("label",{children:"Feature"}),(0,j.jsx)("input",{placeholder:"Automatic...",value:D,onChange:function(e){return G(e.target.value)}}),(0,j.jsx)(h.Z,{className:"addlist__icon",onClick:function(){if(!D)return!1;var e=(0,r.Z)(q);e.push(D),R(e),G("")}})]}),(0,j.jsxs)("div",{className:"company_admin_form_field",children:[(0,j.jsx)("label",{children:"Category Status"}),(0,j.jsx)(f.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,j.jsx)(d.Z,{name:"company_status",control:(0,j.jsx)(p.Z,{onChange:function(e){L(e.target.checked)},checked:H}),label:"Active"})})]})]}),0!==(null===A||void 0===A?void 0:A.length)&&(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{children:"Category"}),(0,j.jsx)("div",{className:"sub-catory-list_not_seleted",children:null===A||void 0===A?void 0:A.map((function(e,t){return(0,j.jsxs)("p",{onClick:function(){return function(e,t){var n=(0,r.Z)(C);n.push(e),S(n);var u=(0,r.Z)(A);u.splice(t,1),E(u)}(e,t)},className:"sub-category-chips _selected",children:[e.category_name," ",(0,j.jsx)(m.Z,{})]},t)}))})]}),0===A.length&&0!==(null===C||void 0===C?void 0:C.length)&&(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{children:"Categories To choose"}),(0,j.jsx)("div",{className:"sub-catory-list_not_seleted",children:null===C||void 0===C?void 0:C.map((function(e,t){return(0,j.jsxs)("p",{onClick:function(){return function(e,t){var n=(0,r.Z)(A);n.push(e),E(n);var u=(0,r.Z)(C);u.splice(t,1),S(u)}(e,t)},className:"sub-category-chips",children:[e.category_name," ",(0,j.jsx)(h.Z,{})]},t)}))})]}),0!==q.length&&(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{children:"Features"}),(0,j.jsx)("div",{className:"sub-catory-list_not_seleted",children:null===q||void 0===q?void 0:q.map((function(e,t){return(0,j.jsxs)("p",{onClick:function(){return function(e){var t=(0,r.Z)(q);t.splice(e,1),R(t)}(t)},className:"sub-category-chips _selected",children:[e," ",(0,j.jsx)(m.Z,{})]},t)}))})]}),(0,j.jsx)("button",{children:"Create Sub-Category"})]})}},5641:function(e,t,n){"use strict";n.d(t,{Sv:function(){return s},fA:function(){return i},jn:function(){return o},qX:function(){return c}});var r=n(4165),u=n(5861),a=n(197),o=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,u.Z)((0,r.Z)().mark((function e(u,o){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.default)({method:"GET",url:n,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:i=e.sent,u(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),i=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,a.default)({method:"DELETE",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),c=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,u.Z)((0,r.Z)().mark((function e(u,o){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.default)({method:"GET",url:n,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:i=e.sent,u(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),s=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n,o){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,u.Z)((0,r.Z)().mark((function e(u,i){var c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.default)({method:"PUT",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},data:o});case 3:(c=e.sent)?u(c):i(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},2419:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var u=r(n(5649)),a=n(184),o=(0,u.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=o},9823:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var u=r(n(5649)),a=n(184),o=(0,u.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=o},5649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(4454)},3199:function(e,t,n){"use strict";var r=n(3981);t.Z=r.Z},4454:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return u.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return o.Z},debounce:function(){return i.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return f.Z},requirePropFactory:function(){return d},setRef:function(){return p},unstable_ClassNameGenerator:function(){return g},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return h},unsupportedProp:function(){return m},useControlled:function(){return Z.Z},useEventCallback:function(){return x.Z},useForkRef:function(){return y.Z},useIsFocusVisible:function(){return b.Z}});var r=n(5902),u=n(4036),a=n(8949).Z,o=n(9201),i=n(3199);var c=function(e,t){return function(){return null}},s=n(9103),l=n(8301),f=n(7602);n(7462);var d=function(e,t){return function(){return null}},p=n(2971).Z,v=n(162),h=n(6248).Z;var m=function(e,t,n,r,u){return null},Z=n(8278),x=n(9683),y=n(2071),b=n(3031),g={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}},9103:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2791);var u=function(e,t){return r.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},8301:function(e,t,n){"use strict";var r=n(9723);t.Z=r.Z},7602:function(e,t,n){"use strict";var r=n(7979);t.Z=r.Z},8278:function(e,t,n){"use strict";var r=n(8959);t.Z=r.Z},162:function(e,t,n){"use strict";var r=n(5721);t.Z=r.Z},8949:function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];e.apply(this,r),t.apply(this,r)}}),(function(){}))}n.d(t,{Z:function(){return r}})},3981:function(e,t,n){"use strict";function r(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,u=arguments.length,a=new Array(u),o=0;o<u;o++)a[o]=arguments[o];var i=function(){e.apply(r,a)};clearTimeout(t),t=setTimeout(i,n)}return r.clear=function(){clearTimeout(t)},r}n.d(t,{Z:function(){return r}})},9723:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,{Z:function(){return r}})},7979:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(9723);function u(e){return(0,r.Z)(e).defaultView||window}},8959:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(885),u=n(2791);function a(e){var t=e.controlled,n=e.default,a=(e.name,e.state,u.useRef(void 0!==t).current),o=u.useState(n),i=(0,r.Z)(o,2),c=i[0],s=i[1];return[a?t:c,u.useCallback((function(e){a||s(e)}),[])]}},6248:function(e,t,n){"use strict";var r;n.d(t,{Z:function(){return c}});var u=n(885),a=n(2791),o=0;var i=(r||(r=n.t(a,2))).useId;function c(e){if(void 0!==i){var t=i();return null!=e?e:t}return function(e){var t=a.useState(e),n=(0,u.Z)(t,2),r=n[0],i=n[1],c=e||r;return a.useEffect((function(){null==r&&i("mui-".concat(o+=1))}),[r]),c}(e)}},6363:function(){},1977:function(){}}]);
//# sourceMappingURL=4611.e7e42c96.chunk.js.map