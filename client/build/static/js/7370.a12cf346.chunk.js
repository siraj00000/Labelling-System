"use strict";(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[7370],{9174:function(e,r,o){o.d(r,{Z:function(){return L}});var t=o(4942),n=o(3366),a=o(7462),i=o(2791),c=o(8182),l=o(4419),s=o(2065),u=o(9439),d=o(4036),p=o(7630),m=o(8278),f=o(2930),h=o(3701),v=o(5878),b=o(1217);function Z(e){return(0,b.Z)("PrivateSwitchBase",e)}(0,v.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var g=o(184),y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=(0,p.ZP)(h.Z)((function(e){var r=e.ownerState;return(0,a.Z)({padding:9,borderRadius:"50%"},"start"===r.edge&&{marginLeft:"small"===r.size?-3:-12},"end"===r.edge&&{marginRight:"small"===r.size?-3:-12})})),w=(0,p.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),P=i.forwardRef((function(e,r){var o=e.autoFocus,t=e.checked,i=e.checkedIcon,s=e.className,p=e.defaultChecked,h=e.disabled,v=e.disableFocusRipple,b=void 0!==v&&v,P=e.edge,k=void 0!==P&&P,C=e.icon,S=e.id,R=e.inputProps,O=e.inputRef,j=e.name,B=e.onBlur,F=e.onChange,M=e.onFocus,N=e.readOnly,z=e.required,I=e.tabIndex,L=e.type,W=e.value,D=(0,n.Z)(e,y),E=(0,m.Z)({controlled:t,default:Boolean(p),name:"SwitchBase",state:"checked"}),T=(0,u.Z)(E,2),H=T[0],q=T[1],A=(0,f.Z)(),G=h;A&&"undefined"===typeof G&&(G=A.disabled);var V="checkbox"===L||"radio"===L,_=(0,a.Z)({},e,{checked:H,disabled:G,disableFocusRipple:b,edge:k}),J=function(e){var r=e.classes,o=e.checked,t=e.disabled,n=e.edge,a={root:["root",o&&"checked",t&&"disabled",n&&"edge".concat((0,d.Z)(n))],input:["input"]};return(0,l.Z)(a,Z,r)}(_);return(0,g.jsxs)(x,(0,a.Z)({component:"span",className:(0,c.Z)(J.root,s),centerRipple:!0,focusRipple:!b,disabled:G,tabIndex:null,role:void 0,onFocus:function(e){M&&M(e),A&&A.onFocus&&A.onFocus(e)},onBlur:function(e){B&&B(e),A&&A.onBlur&&A.onBlur(e)},ownerState:_,ref:r},D,{children:[(0,g.jsx)(w,(0,a.Z)({autoFocus:o,checked:t,defaultChecked:p,className:J.input,disabled:G,id:V&&S,name:j,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var r=e.target.checked;q(r),F&&F(e,r)}},readOnly:N,ref:O,required:z,ownerState:_,tabIndex:I,type:L},"checkbox"===L&&void 0===W?{}:{value:W},R)),H?i:C]}))})),k=o(9201),C=(0,k.Z)((0,g.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),S=(0,k.Z)((0,g.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),R=(0,k.Z)((0,g.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),O=o(1046);function j(e){return(0,b.Z)("MuiCheckbox",e)}var B=(0,v.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),F=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],M=(0,p.ZP)(P,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,o.indeterminate&&r.indeterminate,"default"!==o.color&&r["color".concat((0,d.Z)(o.color))]]}})((function(e){var r,o=e.theme,n=e.ownerState;return(0,a.Z)({color:(o.vars||o).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:o.vars?"rgba(".concat("default"===n.color?o.vars.palette.action.activeChannel:o.vars.palette.primary.mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,s.Fq)("default"===n.color?o.palette.action.active:o.palette[n.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(r={},(0,t.Z)(r,"&.".concat(B.checked,", &.").concat(B.indeterminate),{color:(o.vars||o).palette[n.color].main}),(0,t.Z)(r,"&.".concat(B.disabled),{color:(o.vars||o).palette.action.disabled}),r))})),N=(0,g.jsx)(S,{}),z=(0,g.jsx)(C,{}),I=(0,g.jsx)(R,{}),L=i.forwardRef((function(e,r){var o,t,s=(0,O.Z)({props:e,name:"MuiCheckbox"}),u=s.checkedIcon,p=void 0===u?N:u,m=s.color,f=void 0===m?"primary":m,h=s.icon,v=void 0===h?z:h,b=s.indeterminate,Z=void 0!==b&&b,y=s.indeterminateIcon,x=void 0===y?I:y,w=s.inputProps,P=s.size,k=void 0===P?"medium":P,C=s.className,S=(0,n.Z)(s,F),R=Z?x:v,B=Z?x:p,L=(0,a.Z)({},s,{color:f,indeterminate:Z,size:k}),W=function(e){var r=e.classes,o=e.indeterminate,t=e.color,n={root:["root",o&&"indeterminate","color".concat((0,d.Z)(t))]},i=(0,l.Z)(n,j,r);return(0,a.Z)({},r,i)}(L);return(0,g.jsx)(M,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":Z},w),icon:i.cloneElement(R,{fontSize:null!=(o=R.props.fontSize)?o:k}),checkedIcon:i.cloneElement(B,{fontSize:null!=(t=B.props.fontSize)?t:k}),ownerState:L,ref:r,className:(0,c.Z)(W.root,C)},S,{classes:W}))}))},5523:function(e,r,o){o.d(r,{Z:function(){return w}});var t=o(4942),n=o(3366),a=o(7462),i=o(2791),c=o(8182),l=o(4419),s=o(2930),u=o(890),d=o(4036),p=o(7630),m=o(1046),f=o(5878),h=o(1217);function v(e){return(0,h.Z)("MuiFormControlLabel",e)}var b=(0,f.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),Z=o(6147),g=o(184),y=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],x=(0,p.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[(0,t.Z)({},"& .".concat(b.label),r.label),r.root,r["labelPlacement".concat((0,d.Z)(o.labelPlacement))]]}})((function(e){var r=e.theme,o=e.ownerState;return(0,a.Z)((0,t.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(b.disabled),{cursor:"default"}),"start"===o.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===o.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===o.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,t.Z)({},"& .".concat(b.label),(0,t.Z)({},"&.".concat(b.disabled),{color:(r.vars||r).palette.text.disabled})))})),w=i.forwardRef((function(e,r){var o,t=(0,m.Z)({props:e,name:"MuiFormControlLabel"}),p=t.className,f=t.componentsProps,h=void 0===f?{}:f,b=t.control,w=t.disabled,P=t.disableTypography,k=t.label,C=t.labelPlacement,S=void 0===C?"end":C,R=t.slotProps,O=void 0===R?{}:R,j=(0,n.Z)(t,y),B=(0,s.Z)(),F=w;"undefined"===typeof F&&"undefined"!==typeof b.props.disabled&&(F=b.props.disabled),"undefined"===typeof F&&B&&(F=B.disabled);var M={disabled:F};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof b.props[e]&&"undefined"!==typeof t[e]&&(M[e]=t[e])}));var N=(0,Z.Z)({props:t,muiFormControl:B,states:["error"]}),z=(0,a.Z)({},t,{disabled:F,labelPlacement:S,error:N.error}),I=function(e){var r=e.classes,o=e.disabled,t=e.labelPlacement,n=e.error,a={root:["root",o&&"disabled","labelPlacement".concat((0,d.Z)(t)),n&&"error"],label:["label",o&&"disabled"]};return(0,l.Z)(a,v,r)}(z),L=null!=(o=O.typography)?o:h.typography,W=k;return null==W||W.type===u.Z||P||(W=(0,g.jsx)(u.Z,(0,a.Z)({component:"span"},L,{className:(0,c.Z)(I.label,null==L?void 0:L.className),children:W}))),(0,g.jsxs)(x,(0,a.Z)({className:(0,c.Z)(I.root,p),ownerState:z,ref:r},j,{children:[i.cloneElement(b,M),W]}))}))},3840:function(e,r,o){var t=o(2791).createContext(void 0);r.Z=t},6147:function(e,r,o){function t(e){var r=e.props,o=e.states,t=e.muiFormControl;return o.reduce((function(e,o){return e[o]=r[o],t&&"undefined"===typeof r[o]&&(e[o]=t[o]),e}),{})}o.d(r,{Z:function(){return t}})},2930:function(e,r,o){o.d(r,{Z:function(){return a}});var t=o(2791),n=o(3840);function a(){return t.useContext(n.Z)}},9012:function(e,r,o){o.d(r,{Z:function(){return Z}});var t=o(3366),n=o(7462),a=o(2791),i=o(8182),c=o(4419),l=o(7630),s=o(1046),u=o(5878),d=o(1217);function p(e){return(0,d.Z)("MuiFormGroup",e)}(0,u.Z)("MuiFormGroup",["root","row","error"]);var m=o(2930),f=o(6147),h=o(184),v=["className","row"],b=(0,l.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,o.row&&r.row]}})((function(e){var r=e.ownerState;return(0,n.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},r.row&&{flexDirection:"row"})})),Z=a.forwardRef((function(e,r){var o=(0,s.Z)({props:e,name:"MuiFormGroup"}),a=o.className,l=o.row,u=void 0!==l&&l,d=(0,t.Z)(o,v),Z=(0,m.Z)(),g=(0,f.Z)({props:o,muiFormControl:Z,states:["error"]}),y=(0,n.Z)({},o,{row:u,error:g.error}),x=function(e){var r=e.classes,o={root:["root",e.row&&"row",e.error&&"error"]};return(0,c.Z)(o,p,r)}(y);return(0,h.jsx)(b,(0,n.Z)({className:(0,i.Z)(x.root,a),ownerState:y,ref:r},d))}))},890:function(e,r,o){o.d(r,{Z:function(){return y}});var t=o(3366),n=o(7462),a=o(2791),i=o(8182),c=o(8519),l=o(4419),s=o(7630),u=o(1046),d=o(4036),p=o(5878),m=o(1217);function f(e){return(0,m.Z)("MuiTypography",e)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=o(184),v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],b=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,o.variant&&r[o.variant],"inherit"!==o.align&&r["align".concat((0,d.Z)(o.align))],o.noWrap&&r.noWrap,o.gutterBottom&&r.gutterBottom,o.paragraph&&r.paragraph]}})((function(e){var r=e.theme,o=e.ownerState;return(0,n.Z)({margin:0},o.variant&&r.typography[o.variant],"inherit"!==o.align&&{textAlign:o.align},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.paragraph&&{marginBottom:16})})),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=a.forwardRef((function(e,r){var o=(0,u.Z)({props:e,name:"MuiTypography"}),a=function(e){return g[e]||e}(o.color),s=(0,c.Z)((0,n.Z)({},o,{color:a})),p=s.align,m=void 0===p?"inherit":p,y=s.className,x=s.component,w=s.gutterBottom,P=void 0!==w&&w,k=s.noWrap,C=void 0!==k&&k,S=s.paragraph,R=void 0!==S&&S,O=s.variant,j=void 0===O?"body1":O,B=s.variantMapping,F=void 0===B?Z:B,M=(0,t.Z)(s,v),N=(0,n.Z)({},s,{align:m,color:a,className:y,component:x,gutterBottom:P,noWrap:C,paragraph:R,variant:j,variantMapping:F}),z=x||(R?"p":F[j]||Z[j])||"span",I=function(e){var r=e.align,o=e.gutterBottom,t=e.noWrap,n=e.paragraph,a=e.variant,i=e.classes,c={root:["root",a,"inherit"!==e.align&&"align".concat((0,d.Z)(r)),o&&"gutterBottom",t&&"noWrap",n&&"paragraph"]};return(0,l.Z)(c,f,i)}(N);return(0,h.jsx)(b,(0,n.Z)({as:z,ref:r,ownerState:N,className:(0,i.Z)(I.root,y)},M))}))},8519:function(e,r,o){o.d(r,{Z:function(){return s}});var t=o(3433),n=o(7462),a=o(3366),i=o(2466),c=o(7416),l=["sx"];function s(e){var r,o=e.sx,s=function(e){var r,o,t={systemProps:{},otherProps:{}},n=null!=(r=null==e||null==(o=e.theme)?void 0:o.unstable_sxConfig)?r:c.Z;return Object.keys(e).forEach((function(r){n[r]?t.systemProps[r]=e[r]:t.otherProps[r]=e[r]})),t}((0,a.Z)(e,l)),u=s.systemProps,d=s.otherProps;return r=Array.isArray(o)?[u].concat((0,t.Z)(o)):"function"===typeof o?function(){var e=o.apply(void 0,arguments);return(0,i.P)(e)?(0,n.Z)({},u,e):u}:(0,n.Z)({},u,o),(0,n.Z)({},d,{sx:r})}},1413:function(e,r,o){o.d(r,{Z:function(){return a}});var t=o(4942);function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){(0,t.Z)(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}}}]);
//# sourceMappingURL=7370.a12cf346.chunk.js.map