(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[4306],{5649:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=e(4454)},6151:function(t,n,e){"use strict";e.d(n,{Z:function(){return I}});var o=e(4942),r=e(3366),a=e(7462),i=e(2791),c=e(8182),l=e(5735),u=e(4419),s=e(2065),d=e(7630),p=e(1046),v=e(3701),f=e(4036),h=e(5878),m=e(1217);function b(t){return(0,m.Z)("MuiButton",t)}var x=(0,h.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var Z=i.createContext({}),g=e(184),S=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=function(t){return(0,a.Z)({},"small"===t.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===t.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===t.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},z=(0,d.ZP)(v.Z,{shouldForwardProp:function(t){return(0,d.FO)(t)||"classes"===t},name:"MuiButton",slot:"Root",overridesResolver:function(t,n){var e=t.ownerState;return[n.root,n[e.variant],n["".concat(e.variant).concat((0,f.Z)(e.color))],n["size".concat((0,f.Z)(e.size))],n["".concat(e.variant,"Size").concat((0,f.Z)(e.size))],"inherit"===e.color&&n.colorInherit,e.disableElevation&&n.disableElevation,e.fullWidth&&n.fullWidth]}})((function(t){var n,e,r,i=t.theme,c=t.ownerState;return(0,a.Z)({},i.typography.button,(n={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,a.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===c.variant&&"inherit"!==c.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===c.variant&&"inherit"!==c.color&&{border:"1px solid ".concat((i.vars||i).palette[c.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===c.variant&&{backgroundColor:(i.vars||i).palette.grey.A100,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===c.variant&&"inherit"!==c.color&&{backgroundColor:(i.vars||i).palette[c.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[c.color].main}}),"&:active":(0,a.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,o.Z)(n,"&.".concat(x.focusVisible),(0,a.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,o.Z)(n,"&.".concat(x.disabled),(0,a.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===c.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"outlined"===c.variant&&"secondary"===c.color&&{border:"1px solid ".concat((i.vars||i).palette.action.disabled)},"contained"===c.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),n),"text"===c.variant&&{padding:"6px 8px"},"text"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main},"outlined"===c.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[c.color].mainChannel," / 0.5)"):"1px solid ".concat((0,s.Fq)(i.palette[c.color].main,.5))},"contained"===c.variant&&{color:i.vars?i.vars.palette.text.primary:null==(e=(r=i.palette).getContrastText)?void 0:e.call(r,i.palette.grey[300]),backgroundColor:(i.vars||i).palette.grey[300],boxShadow:(i.vars||i).shadows[2]},"contained"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].contrastText,backgroundColor:(i.vars||i).palette[c.color].main},"inherit"===c.color&&{color:"inherit",borderColor:"currentColor"},"small"===c.size&&"text"===c.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"text"===c.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"outlined"===c.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"outlined"===c.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"contained"===c.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"contained"===c.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},c.fullWidth&&{width:"100%"})}),(function(t){var n;return t.ownerState.disableElevation&&(n={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,o.Z)(n,"&.".concat(x.focusVisible),{boxShadow:"none"}),(0,o.Z)(n,"&:active",{boxShadow:"none"}),(0,o.Z)(n,"&.".concat(x.disabled),{boxShadow:"none"}),n)})),w=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(t,n){var e=t.ownerState;return[n.startIcon,n["iconSize".concat((0,f.Z)(e.size))]]}})((function(t){var n=t.ownerState;return(0,a.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===n.size&&{marginLeft:-2},y(n))})),C=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(t,n){var e=t.ownerState;return[n.endIcon,n["iconSize".concat((0,f.Z)(e.size))]]}})((function(t){var n=t.ownerState;return(0,a.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===n.size&&{marginRight:-2},y(n))})),I=i.forwardRef((function(t,n){var e=i.useContext(Z),o=(0,l.Z)(e,t),s=(0,p.Z)({props:o,name:"MuiButton"}),d=s.children,v=s.color,h=void 0===v?"primary":v,m=s.component,x=void 0===m?"button":m,y=s.className,I=s.disabled,k=void 0!==I&&I,R=s.disableElevation,E=void 0!==R&&R,M=s.disableFocusRipple,W=void 0!==M&&M,F=s.endIcon,P=s.focusVisibleClassName,T=s.fullWidth,N=void 0!==T&&T,_=s.size,O=void 0===_?"medium":_,V=s.startIcon,B=s.type,L=s.variant,j=void 0===L?"text":L,q=(0,r.Z)(s,S),A=(0,a.Z)({},s,{color:h,component:x,disabled:k,disableElevation:E,disableFocusRipple:W,fullWidth:N,size:O,type:B,variant:j}),D=function(t){var n=t.color,e=t.disableElevation,o=t.fullWidth,r=t.size,i=t.variant,c=t.classes,l={root:["root",i,"".concat(i).concat((0,f.Z)(n)),"size".concat((0,f.Z)(r)),"".concat(i,"Size").concat((0,f.Z)(r)),"inherit"===n&&"colorInherit",e&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,f.Z)(r))],endIcon:["endIcon","iconSize".concat((0,f.Z)(r))]},s=(0,u.Z)(l,b,c);return(0,a.Z)({},c,s)}(A),G=V&&(0,g.jsx)(w,{className:D.startIcon,ownerState:A,children:V}),H=F&&(0,g.jsx)(C,{className:D.endIcon,ownerState:A,children:F});return(0,g.jsxs)(z,(0,a.Z)({ownerState:A,className:(0,c.Z)(e.className,D.root,y),component:x,disabled:k,focusRipple:!W,focusVisibleClassName:(0,c.Z)(D.focusVisible,P),ref:n,type:B},q,{classes:D,children:[G,d,H]}))}))},3199:function(t,n,e){"use strict";var o=e(3981);n.Z=o.Z},4454:function(t,n,e){"use strict";e.r(n),e.d(n,{capitalize:function(){return r.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return i.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return l},isMuiElement:function(){return u.Z},ownerDocument:function(){return s.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return v},unstable_ClassNameGenerator:function(){return S},unstable_useEnhancedEffect:function(){return f.Z},unstable_useId:function(){return h},unsupportedProp:function(){return m},useControlled:function(){return b.Z},useEventCallback:function(){return x.Z},useForkRef:function(){return Z.Z},useIsFocusVisible:function(){return g.Z}});var o=e(5902),r=e(4036),a=e(8949).Z,i=e(9201),c=e(3199);var l=function(t,n){return function(){return null}},u=e(9103),s=e(8301),d=e(7602);e(7462);var p=function(t,n){return function(){return null}},v=e(2971).Z,f=e(162),h=e(6248).Z;var m=function(t,n,e,o,r){return null},b=e(8278),x=e(9683),Z=e(2071),g=e(3031),S={configure:function(t){o.Z.configure(t)}}},9103:function(t,n,e){"use strict";e.d(n,{Z:function(){return r}});var o=e(2791);var r=function(t,n){return o.isValidElement(t)&&-1!==n.indexOf(t.type.muiName)}},8301:function(t,n,e){"use strict";var o=e(9723);n.Z=o.Z},7602:function(t,n,e){"use strict";var o=e(7979);n.Z=o.Z},8278:function(t,n,e){"use strict";var o=e(8959);n.Z=o.Z},162:function(t,n,e){"use strict";var o=e(5721);n.Z=o.Z},8949:function(t,n,e){"use strict";function o(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.reduce((function(t,n){return null==n?t:function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];t.apply(this,o),n.apply(this,o)}}),(function(){}))}e.d(n,{Z:function(){return o}})},3981:function(t,n,e){"use strict";function o(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var c=function(){t.apply(o,a)};clearTimeout(n),n=setTimeout(c,e)}return o.clear=function(){clearTimeout(n)},o}e.d(n,{Z:function(){return o}})},9723:function(t,n,e){"use strict";function o(t){return t&&t.ownerDocument||document}e.d(n,{Z:function(){return o}})},7979:function(t,n,e){"use strict";e.d(n,{Z:function(){return r}});var o=e(9723);function r(t){return(0,o.Z)(t).defaultView||window}},8959:function(t,n,e){"use strict";e.d(n,{Z:function(){return a}});var o=e(9439),r=e(2791);function a(t){var n=t.controlled,e=t.default,a=(t.name,t.state,r.useRef(void 0!==n).current),i=r.useState(e),c=(0,o.Z)(i,2),l=c[0],u=c[1];return[a?n:l,r.useCallback((function(t){a||u(t)}),[])]}},6248:function(t,n,e){"use strict";var o;e.d(n,{Z:function(){return l}});var r=e(9439),a=e(2791),i=0;var c=(o||(o=e.t(a,2))).useId;function l(t){if(void 0!==c){var n=c();return null!=t?t:n}return function(t){var n=a.useState(t),e=(0,r.Z)(n,2),o=e[0],c=e[1],l=t||o;return a.useEffect((function(){null==o&&c("mui-".concat(i+=1))}),[o]),l}(t)}},4836:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=4306.eea83868.chunk.js.map