(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[5466],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},6751:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(885),i=t(2791),u=t(4431),c=t(338),s=t(5067),o=t(6167),a=t(184);var l=function(e){var n=e.source,t=(0,i.useRef)(null),l=(0,i.useState)(!1),d=(0,r.Z)(l,2),f=d[0],v=d[1],m=(0,i.useState)(0),h=(0,r.Z)(m,2),p=h[0],Z=h[1],x=(0,i.useState)(0),j=(0,r.Z)(x,2),_=j[0],b=j[1],g=(0,i.useState)(0),y=(0,r.Z)(g,2),N=y[0],w=y[1],C=function(e){if("play"===e){t.current.play(),v(!0);var n=document.getElementById("video1");b(n.duration)}else"pause"===e&&(t.current.pause(),v(!1))};return window.setInterval((function(){var e,n;Z(null===(e=t.current)||void 0===e?void 0:e.currentTime),w((null===(n=t.current)||void 0===n?void 0:n.currentTime)/_*100)}),1e3),(0,a.jsxs)("div",{className:"app",children:[(0,a.jsx)("video",{id:"video1",ref:t,className:"video",src:n}),(0,a.jsx)("div",{className:"controlsContainer",children:(0,a.jsxs)("div",{className:"controls",children:[(0,a.jsx)(u.Z,{onClick:function(){t.current.currentTime-=5},className:"controlsIcon"}),f?(0,a.jsx)(s.Z,{onClick:function(){return C("pause")},className:"controlsIcon--small"}):(0,a.jsx)(o.Z,{onClick:function(){return C("play")},className:"controlsIcon--small"}),(0,a.jsx)(c.Z,{onClick:function(){t.current.currentTime+=5},className:"controlsIcon"})]})}),(0,a.jsxs)("div",{className:"timecontrols",children:[(0,a.jsx)("p",{className:"controlsTime",children:Math.floor(p/60)+":"+("0"+Math.floor(p%60)).slice(-2)}),(0,a.jsx)("div",{className:"time_progressbarContainer",children:(0,a.jsx)("div",{style:{width:"".concat(N,"%")},className:"time_progressBar"})}),(0,a.jsx)("p",{className:"controlsTime",children:Math.floor(_/60)+":"+("0"+Math.floor(_%60)).slice(-2)})]})]})}},5466:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var r=t(885),i=t(4942),u=t(2791),c=t(7630),s=t(9836),o=t(3382),a=t(8745),l=t(618),d=t(9281),f=t(6890),v=t(5855),m=t(703),h=t(6871),p=t(6751),Z=(t(7845),t(184)),x=(0,c.ZP)(a.Z)((function(e){var n,t=e.theme;return n={},(0,i.Z)(n,"&.".concat(l.Z.head),{backgroundColor:t.palette.primary.main,color:t.palette.common.white}),(0,i.Z)(n,"&.".concat(l.Z.body),{fontSize:14}),n})),j=(0,c.ZP)(v.Z)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}}));function _(){var e,n,t,i,c=(0,h.TH)().state,a=c.data,l=c.type;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("section",{className:"brandDetai__video_and_images",children:[0!==Object.keys(null===a||void 0===a?void 0:a.video_url).length&&(0,Z.jsxs)("div",{children:[(0,Z.jsx)("h3",{children:"Video"}),""!==(null===(e=a.video_url)||void 0===e?void 0:e.public_id)?(0,Z.jsx)(p.Z,{source:null===a||void 0===a||null===(n=a.video_url)||void 0===n?void 0:n.url}):(0,Z.jsx)("div",{className:"brandDetail__video_container",children:(0,Z.jsx)("iframe",{width:"100%",height:"100%",src:null===a||void 0===a||null===(t=a.video_url)||void 0===t?void 0:t.url,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})})]}),(0,Z.jsxs)("div",{style:{marginBottom:15},children:[(0,Z.jsx)("h3",{children:"Images"}),(0,Z.jsx)("div",{className:"brandDetail__imageList",children:null===a||void 0===a||null===(i=a.image_list)||void 0===i?void 0:i.map((function(e,n){return(0,Z.jsx)("img",{src:e.url,className:"brandDetail__img",alt:"brand_images"},n)}))})]})]}),(0,Z.jsx)(d.Z,{sx:{width:"80%"},component:m.Z,children:(0,Z.jsxs)(s.Z,{"aria-label":"customized table",children:[(0,Z.jsx)(f.Z,{children:(0,Z.jsxs)(v.Z,{children:[(0,Z.jsx)(x,{children:l}),(0,Z.jsx)(x,{align:"center",children:"Details"})]})}),(0,Z.jsx)(o.Z,{children:Object.entries(a).map((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1],c=("estaiblishment_year"===t||"createdAt"===t||"updatedAt"===t)&&i.split("T")[0],s="brand_active_status"===t&&(i?"Active":"In Active"),o=("carousel_headings"===t||"carousel_text"===t)&&Object.values(i).join(", "),a="brand_active_status"!==t&&"boolean"===typeof i&&(!0===i?"Yes":"No");return(0,Z.jsx)(u.Fragment,{children:"company_id"!==t&&"image_list"!==t&&"video_url"!==t&&"_id"!==t&&"__v"!==t&&(0,Z.jsxs)(j,{children:[(0,Z.jsx)(x,{align:"left",children:t}),(0,Z.jsx)(x,{align:"center",children:a||o||c||s||i})]})},t+i)}))})]})})]})}},338:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var i=r(t(5649)),u=t(184),c=(0,i.default)([(0,u.jsx)("path",{d:"M18 13c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6v4l5-5-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8h-2z"},"0"),(0,u.jsx)("path",{d:"M12.03 15.38c-.44 0-.58-.31-.6-.56h-.84c.03.85.79 1.25 1.44 1.25.93 0 1.44-.63 1.44-1.43 0-1.33-.97-1.44-1.3-1.44-.2 0-.43.05-.64.16l.11-.92h1.7v-.71h-2.39l-.25 2.17.67.17c.13-.13.28-.23.57-.23.4 0 .69.23.69.75-.01.05.02.79-.6.79z"},"1")],"Forward5");n.Z=c},5067:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var i=r(t(5649)),u=t(184),c=(0,i.default)((0,u.jsx)("path",{d:"M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"}),"PauseCircleOutlineOutlined");n.Z=c},6167:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var i=r(t(5649)),u=t(184),c=(0,i.default)((0,u.jsx)("path",{d:"m10 16.5 6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"PlayCircleOutlineOutlined");n.Z=c},4431:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var i=r(t(5649)),u=t(184),c=(0,i.default)([(0,u.jsx)("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"},"0"),(0,u.jsx)("path",{d:"m10.69 13.9.25-2.17h2.39v.71h-1.7l-.11.92c.03-.02.07-.03.11-.05s.09-.04.15-.05.12-.03.18-.04.13-.02.2-.02c.21 0 .39.03.55.1s.3.16.41.28.2.27.25.45.09.38.09.6c0 .19-.03.37-.09.54s-.15.32-.27.45-.27.24-.45.31-.39.12-.64.12c-.18 0-.36-.03-.53-.08s-.32-.14-.46-.24-.24-.24-.32-.39-.13-.33-.13-.53h.84c.02.18.08.32.19.41s.25.15.42.15c.11 0 .2-.02.27-.06s.14-.1.18-.17.08-.15.11-.25.03-.2.03-.31-.01-.21-.04-.31-.07-.17-.13-.24-.13-.12-.21-.15-.19-.05-.3-.05c-.08 0-.15.01-.2.02s-.11.03-.15.05-.08.05-.12.07-.07.06-.1.09l-.67-.16z"},"1")],"Replay5");n.Z=c},5649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(4454)},3199:function(e,n,t){"use strict";var r=t(3981);n.Z=r.Z},4454:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return i.Z},createChainedFunction:function(){return u},createSvgIcon:function(){return c.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return o},isMuiElement:function(){return a.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return v},unstable_ClassNameGenerator:function(){return b},unstable_useEnhancedEffect:function(){return m.Z},unstable_useId:function(){return h},unsupportedProp:function(){return p},useControlled:function(){return Z.Z},useEventCallback:function(){return x.Z},useForkRef:function(){return j.Z},useIsFocusVisible:function(){return _.Z}});var r=t(5902),i=t(4036),u=t(8949).Z,c=t(9201),s=t(3199);var o=function(e,n){return function(){return null}},a=t(9103),l=t(8301),d=t(7602);t(7462);var f=function(e,n){return function(){return null}},v=t(2971).Z,m=t(162),h=t(6248).Z;var p=function(e,n,t,r,i){return null},Z=t(8278),x=t(9683),j=t(2071),_=t(3031),b={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}},9103:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(2791);var i=function(e,n){return r.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)}},8301:function(e,n,t){"use strict";var r=t(9723);n.Z=r.Z},7602:function(e,n,t){"use strict";var r=t(7979);n.Z=r.Z},8278:function(e,n,t){"use strict";var r=t(8959);n.Z=r.Z},162:function(e,n,t){"use strict";var r=t(5721);n.Z=r.Z},8949:function(e,n,t){"use strict";function r(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];e.apply(this,r),n.apply(this,r)}}),(function(){}))}t.d(n,{Z:function(){return r}})},3981:function(e,n,t){"use strict";function r(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];var s=function(){e.apply(r,u)};clearTimeout(n),n=setTimeout(s,t)}return r.clear=function(){clearTimeout(n)},r}t.d(n,{Z:function(){return r}})},9723:function(e,n,t){"use strict";function r(e){return e&&e.ownerDocument||document}t.d(n,{Z:function(){return r}})},7979:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(9723);function i(e){return(0,r.Z)(e).defaultView||window}},8959:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(885),i=t(2791);function u(e){var n=e.controlled,t=e.default,u=(e.name,e.state,i.useRef(void 0!==n).current),c=i.useState(t),s=(0,r.Z)(c,2),o=s[0],a=s[1];return[u?n:o,i.useCallback((function(e){u||a(e)}),[])]}},6248:function(e,n,t){"use strict";var r;t.d(n,{Z:function(){return o}});var i=t(885),u=t(2791),c=0;var s=(r||(r=t.t(u,2))).useId;function o(e){if(void 0!==s){var n=s();return null!=e?e:n}return function(e){var n=u.useState(e),t=(0,i.Z)(n,2),r=t[0],s=t[1],o=e||r;return u.useEffect((function(){null==r&&s("mui-".concat(c+=1))}),[r]),o}(e)}},7845:function(){}}]);
//# sourceMappingURL=5466.87edfc58.chunk.js.map