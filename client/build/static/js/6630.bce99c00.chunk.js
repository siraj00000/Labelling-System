(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[6630],{8:function(n,t,e){"use strict";e.d(t,{Z:function(){return a}});var r=e(1413),u=(e(2791),e(7630)),o=e(184),i=(0,u.ZP)("div")((function(n){var t=n.theme;return(0,r.Z)((0,r.Z)({},t.typography.button),{},{backgroundColor:t.palette.background.paper,fontSize:"25px",fontWeight:"bold"})}));function a(n){var t=n.text;return(0,o.jsx)(i,{children:t})}},6630:function(n,t,e){"use strict";e.r(t);var r=e(4165),u=e(5861),o=e(9439),i=e(2791),a=e(9658),c=e(6176),s=e(4196),l=e(1903),f=e(197),d=e(8),p=(e(1977),e(6363),e(7689)),v=e(2062),m=e.n(v),h=e(2491),Z=e(184);t.default=function(){var n=(0,p.s0)(),t=(0,i.useState)(!1),e=(0,o.Z)(t,2),v=e[0],y=e[1],b=(0,i.useState)(""),x=(0,o.Z)(b,2),g=x[0],j=x[1],w=(0,i.useState)(""),_=(0,o.Z)(w,2),k=_[0],O=_[1],P=(0,i.useState)(""),S=(0,o.Z)(P,2),C=S[0],E=S[1],M=(0,i.useState)([]),N=(0,o.Z)(M,2),z=N[0],A=N[1],D=(0,i.useState)(""),T=(0,o.Z)(D,2),F=T[0],I=T[1];i.useEffect((function(){try{(0,s.P)(c.token,"/api/fetch-manufacturer-admin").then((function(n){var t;A(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.data)})).catch((function(n){I(null===n||void 0===n?void 0:n.response.data.error),(0,c.removeStatus)(I)}))}catch(F){I(F.message)}}),[]);var R=function(){var t=(0,u.Z)((0,r.Z)().mark((function t(e){var u,o,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!(k.length<5)){t.next=5;break}return I("Password must contain at least 6 digits"),(0,c.removeStatus)(I),t.abrupt("return",!1);case 5:return u={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.prev=7,y(!0),t.next=11,f.default.post("api/auth/register",{email:g,password:k,role:3,company_email:C},u);case 11:i=t.sent,m()({title:"Success!",text:null===i||void 0===i||null===(o=i.data)||void 0===o?void 0:o.msg,icon:"success",button:"Okay!"}).then((function(){n("/ls-admin/admins",{replace:!0}),y(!1)})),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(7),I(null===t.t0||void 0===t.t0?void 0:t.t0.response.data.error),y(!1),(0,c.removeStatus)(I);case 20:case"end":return t.stop()}}),t,null,[[7,15]])})));return function(n){return t.apply(this,arguments)}}();return v?(0,Z.jsx)(h.Z,{loading:v}):(0,Z.jsxs)("form",{className:"form-sec",onSubmit:R,children:[(0,Z.jsx)(d.Z,{text:"Register Manufacturer Admin"}),""!==F&&(0,Z.jsx)(a.Z,{severity:"error",children:F}),(0,Z.jsxs)("div",{className:"company_admin_form",children:[(0,Z.jsxs)("div",{className:"company_admin_form_field",children:[(0,Z.jsx)("label",{children:"email"}),(0,Z.jsx)("input",{type:"email",placeholder:"mark@example",value:g,onChange:function(n){return j(n.target.value)},required:!0})]}),(0,Z.jsxs)("div",{className:"company_admin_form_field",children:[(0,Z.jsx)("label",{children:"password"}),(0,Z.jsx)("input",{type:"password",placeholder:"mark123",value:k,onChange:function(n){return O(n.target.value)},required:!0})]}),(0,Z.jsxs)("div",{className:"company_admin_form_field",children:[(0,Z.jsx)("label",{children:"Company & Manufacturer"}),(0,Z.jsxs)("select",{onChange:function(n){return E(n.target.value)},required:!0,children:[(0,Z.jsx)("option",{value:"",children:"select company & manufacturer"}),null===z||void 0===z?void 0:z.map((function(n,t){return(0,Z.jsx)("option",{value:null===n||void 0===n?void 0:n.manufacturer_email,className:"company_list",children:"".concat(null===n||void 0===n?void 0:n.manufacturer," \n (").concat(null===n||void 0===n?void 0:n.company_name,")")},t)}))]}),(0,Z.jsx)(l.Z,{className:"filter-icon"})]})]}),(0,Z.jsx)("button",{children:"Register Manufacturer Admin"})]})}},4196:function(n,t,e){"use strict";e.d(t,{P:function(){return i}});var r=e(4165),u=e(5861),o=e(197),i=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t,e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=(0,u.Z)((0,r.Z)().mark((function n(u,i){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.default)({method:"GET",url:e,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:a=n.sent,u(a),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),i(null===n.t0||void 0===n.t0?void 0:n.t0.response.data.error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},1903:function(n,t,e){"use strict";var r=e(4836);t.Z=void 0;var u=r(e(5649)),o=e(184),i=(0,u.default)((0,o.jsx)("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterList");t.Z=i},5649:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=e(4454)},3199:function(n,t,e){"use strict";var r=e(3981);t.Z=r.Z},4454:function(n,t,e){"use strict";e.r(t),e.d(t,{capitalize:function(){return u.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return i.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return f.Z},requirePropFactory:function(){return d},setRef:function(){return p},unstable_ClassNameGenerator:function(){return g},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return m},unsupportedProp:function(){return h},useControlled:function(){return Z.Z},useEventCallback:function(){return y.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return x.Z}});var r=e(5902),u=e(4036),o=e(8949).Z,i=e(9201),a=e(3199);var c=function(n,t){return function(){return null}},s=e(9103),l=e(8301),f=e(7602);e(7462);var d=function(n,t){return function(){return null}},p=e(2971).Z,v=e(162),m=e(6248).Z;var h=function(n,t,e,r,u){return null},Z=e(8278),y=e(9683),b=e(2071),x=e(3031),g={configure:function(n){r.Z.configure(n)}}},9103:function(n,t,e){"use strict";e.d(t,{Z:function(){return u}});var r=e(2791);var u=function(n,t){return r.isValidElement(n)&&-1!==t.indexOf(n.type.muiName)}},8301:function(n,t,e){"use strict";var r=e(9723);t.Z=r.Z},7602:function(n,t,e){"use strict";var r=e(7979);t.Z=r.Z},8278:function(n,t,e){"use strict";var r=e(8959);t.Z=r.Z},162:function(n,t,e){"use strict";var r=e(5721);t.Z=r.Z},8949:function(n,t,e){"use strict";function r(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.reduce((function(n,t){return null==t?n:function(){for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];n.apply(this,r),t.apply(this,r)}}),(function(){}))}e.d(t,{Z:function(){return r}})},3981:function(n,t,e){"use strict";function r(n){var t,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,u=arguments.length,o=new Array(u),i=0;i<u;i++)o[i]=arguments[i];var a=function(){n.apply(r,o)};clearTimeout(t),t=setTimeout(a,e)}return r.clear=function(){clearTimeout(t)},r}e.d(t,{Z:function(){return r}})},9723:function(n,t,e){"use strict";function r(n){return n&&n.ownerDocument||document}e.d(t,{Z:function(){return r}})},7979:function(n,t,e){"use strict";e.d(t,{Z:function(){return u}});var r=e(9723);function u(n){return(0,r.Z)(n).defaultView||window}},8959:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(9439),u=e(2791);function o(n){var t=n.controlled,e=n.default,o=(n.name,n.state,u.useRef(void 0!==t).current),i=u.useState(e),a=(0,r.Z)(i,2),c=a[0],s=a[1];return[o?t:c,u.useCallback((function(n){o||s(n)}),[])]}},6248:function(n,t,e){"use strict";var r;e.d(t,{Z:function(){return c}});var u=e(9439),o=e(2791),i=0;var a=(r||(r=e.t(o,2))).useId;function c(n){if(void 0!==a){var t=a();return null!=n?n:t}return function(n){var t=o.useState(n),e=(0,u.Z)(t,2),r=e[0],a=e[1],c=n||r;return o.useEffect((function(){null==r&&a("mui-".concat(i+=1))}),[r]),c}(n)}},6363:function(){},1977:function(){},4836:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports},1413:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(4942);function u(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?u(Object(e),!0).forEach((function(t){(0,r.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}}}]);
//# sourceMappingURL=6630.bce99c00.chunk.js.map