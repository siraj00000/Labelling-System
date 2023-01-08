"use strict";(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[9534],{3382:function(e,t,a){a.d(t,{Z:function(){return h}});var o=a(7462),r=a(3366),n=a(2791),i=a(8182),l=a(4419),c=a(829),s=a(1046),d=a(7630),u=a(5878),p=a(1217);function v(e){return(0,p.Z)("MuiTableBody",e)}(0,u.Z)("MuiTableBody",["root"]);var f=a(184),m=["className","component"],Z=(0,d.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),g={variant:"body"},y="tbody",h=n.forwardRef((function(e,t){var a=(0,s.Z)({props:e,name:"MuiTableBody"}),n=a.className,d=a.component,u=void 0===d?y:d,p=(0,r.Z)(a,m),h=(0,o.Z)({},a,{component:u}),b=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},v,t)}(h);return(0,f.jsx)(c.Z.Provider,{value:g,children:(0,f.jsx)(Z,(0,o.Z)({className:(0,i.Z)(b.root,n),as:u,ref:t,role:u===y?null:"rowgroup",ownerState:h},p))})}))},8745:function(e,t,a){var o=a(4942),r=a(3366),n=a(7462),i=a(2791),l=a(8182),c=a(4419),s=a(2065),d=a(4036),u=a(6646),p=a(829),v=a(1046),f=a(7630),m=a(618),Z=a(184),g=["align","className","component","padding","scope","size","sortDirection","variant"],y=(0,f.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat((0,d.Z)(a.size))],"normal"!==a.padding&&t["padding".concat((0,d.Z)(a.padding))],"inherit"!==a.align&&t["align".concat((0,d.Z)(a.align))],a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return(0,n.Z)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?"1px solid ".concat(t.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===t.palette.mode?(0,s.$n)((0,s.Fq)(t.palette.divider,1),.88):(0,s._j)((0,s.Fq)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:(t.vars||t).palette.text.primary},"footer"===a.variant&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&(0,o.Z)({padding:"6px 16px"},"&.".concat(m.Z.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})})),h=i.forwardRef((function(e,t){var a,o=(0,v.Z)({props:e,name:"MuiTableCell"}),s=o.align,f=void 0===s?"inherit":s,h=o.className,b=o.component,x=o.padding,w=o.scope,k=o.size,T=o.sortDirection,C=o.variant,M=(0,r.Z)(o,g),R=i.useContext(u.Z),H=i.useContext(p.Z),N=H&&"head"===H.variant,z=w;"td"===(a=b||(N?"th":"td"))?z=void 0:!z&&N&&(z="col");var S=C||H&&H.variant,j=(0,n.Z)({},o,{align:f,component:a,padding:x||(R&&R.padding?R.padding:"normal"),size:k||(R&&R.size?R.size:"medium"),sortDirection:T,stickyHeader:"head"===S&&R&&R.stickyHeader,variant:S}),P=function(e){var t=e.classes,a=e.variant,o=e.align,r=e.padding,n=e.size,i={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==o&&"align".concat((0,d.Z)(o)),"normal"!==r&&"padding".concat((0,d.Z)(r)),"size".concat((0,d.Z)(n))]};return(0,c.Z)(i,m.U,t)}(j),A=null;return T&&(A="asc"===T?"ascending":"descending"),(0,Z.jsx)(y,(0,n.Z)({as:a,ref:t,className:(0,l.Z)(P.root,h),"aria-sort":A,scope:z,ownerState:j},M))}));t.Z=h},618:function(e,t,a){a.d(t,{U:function(){return n}});var o=a(5878),r=a(1217);function n(e){return(0,r.Z)("MuiTableCell",e)}var i=(0,o.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);t.Z=i},9281:function(e,t,a){a.d(t,{Z:function(){return Z}});var o=a(7462),r=a(3366),n=a(2791),i=a(8182),l=a(4419),c=a(1046),s=a(7630),d=a(5878),u=a(1217);function p(e){return(0,u.Z)("MuiTableContainer",e)}(0,d.Z)("MuiTableContainer",["root"]);var v=a(184),f=["className","component"],m=(0,s.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),Z=n.forwardRef((function(e,t){var a=(0,c.Z)({props:e,name:"MuiTableContainer"}),n=a.className,s=a.component,d=void 0===s?"div":s,u=(0,r.Z)(a,f),Z=(0,o.Z)({},a,{component:d}),g=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},p,t)}(Z);return(0,v.jsx)(m,(0,o.Z)({ref:t,as:d,className:(0,i.Z)(g.root,n),ownerState:Z},u))}))},6890:function(e,t,a){a.d(t,{Z:function(){return h}});var o=a(7462),r=a(3366),n=a(2791),i=a(8182),l=a(4419),c=a(829),s=a(1046),d=a(7630),u=a(5878),p=a(1217);function v(e){return(0,p.Z)("MuiTableHead",e)}(0,u.Z)("MuiTableHead",["root"]);var f=a(184),m=["className","component"],Z=(0,d.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),g={variant:"head"},y="thead",h=n.forwardRef((function(e,t){var a=(0,s.Z)({props:e,name:"MuiTableHead"}),n=a.className,d=a.component,u=void 0===d?y:d,p=(0,r.Z)(a,m),h=(0,o.Z)({},a,{component:u}),b=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},v,t)}(h);return(0,f.jsx)(c.Z.Provider,{value:g,children:(0,f.jsx)(Z,(0,o.Z)({as:u,className:(0,i.Z)(b.root,n),ref:t,role:u===y?null:"rowgroup",ownerState:h},p))})}))},5855:function(e,t,a){a.d(t,{Z:function(){return b}});var o=a(4942),r=a(7462),n=a(3366),i=a(2791),l=a(8182),c=a(4419),s=a(2065),d=a(829),u=a(1046),p=a(7630),v=a(5878),f=a(1217);function m(e){return(0,f.Z)("MuiTableRow",e)}var Z=(0,v.Z)("MuiTableRow",["root","selected","hover","head","footer"]),g=a(184),y=["className","component","hover","selected"],h=(0,p.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},(0,o.Z)(t,"&.".concat(Z.hover,":hover"),{backgroundColor:(a.vars||a).palette.action.hover}),(0,o.Z)(t,"&.".concat(Z.selected),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,s.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,s.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),b=i.forwardRef((function(e,t){var a=(0,u.Z)({props:e,name:"MuiTableRow"}),o=a.className,s=a.component,p=void 0===s?"tr":s,v=a.hover,f=void 0!==v&&v,Z=a.selected,b=void 0!==Z&&Z,x=(0,n.Z)(a,y),w=i.useContext(d.Z),k=(0,r.Z)({},a,{component:p,hover:f,selected:b,head:w&&"head"===w.variant,footer:w&&"footer"===w.variant}),T=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return(0,c.Z)(a,m,t)}(k);return(0,g.jsx)(h,(0,r.Z)({as:p,ref:t,className:(0,l.Z)(T.root,o),role:"tr"===p?null:"row",ownerState:k},x))}))},9836:function(e,t,a){a.d(t,{Z:function(){return y}});var o=a(3366),r=a(7462),n=a(2791),i=a(8182),l=a(4419),c=a(6646),s=a(1046),d=a(7630),u=a(5878),p=a(1217);function v(e){return(0,p.Z)("MuiTable",e)}(0,u.Z)("MuiTable",["root","stickyHeader"]);var f=a(184),m=["className","component","padding","size","stickyHeader"],Z=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return(0,r.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,r.Z)({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),g="table",y=n.forwardRef((function(e,t){var a=(0,s.Z)({props:e,name:"MuiTable"}),d=a.className,u=a.component,p=void 0===u?g:u,y=a.padding,h=void 0===y?"normal":y,b=a.size,x=void 0===b?"medium":b,w=a.stickyHeader,k=void 0!==w&&w,T=(0,o.Z)(a,m),C=(0,r.Z)({},a,{component:p,padding:h,size:x,stickyHeader:k}),M=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return(0,l.Z)(a,v,t)}(C),R=n.useMemo((function(){return{padding:h,size:x,stickyHeader:k}}),[h,x,k]);return(0,f.jsx)(c.Z.Provider,{value:R,children:(0,f.jsx)(Z,(0,r.Z)({as:p,role:p===g?null:"table",ref:t,className:(0,i.Z)(M.root,d),ownerState:C},T))})}))},6646:function(e,t,a){var o=a(2791).createContext();t.Z=o},829:function(e,t,a){var o=a(2791).createContext();t.Z=o}}]);
//# sourceMappingURL=9534.6d063f25.chunk.js.map