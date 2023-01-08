"use strict";(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[2239],{1865:function(e,n,t){t.d(n,{J:function(){return i}});var r=t(6151),a=(t(2791),t(184)),i=function(e){var n=e.Text,t=e.Method,i=e.Icon;return(0,a.jsx)(r.Z,{variant:"contain",startIcon:(0,a.jsx)(i,{}),onClick:t,sx:{marginTop:2},children:n})}},6751:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(885),a=t(2791),i=t(4431),s=t(338),o=t(5067),c=t(6167),l=t(184);var u=function(e){var n=e.source,t=(0,a.useRef)(null),u=(0,a.useState)(!1),d=(0,r.Z)(u,2),p=d[0],v=d[1],h=(0,a.useState)(0),f=(0,r.Z)(h,2),m=f[0],x=f[1],j=(0,a.useState)(0),Z=(0,r.Z)(j,2),g=Z[0],y=Z[1],_=(0,a.useState)(0),b=(0,r.Z)(_,2),k=b[0],w=b[1],C=function(e){if("play"===e){t.current.play(),v(!0);var n=document.getElementById("video1");y(n.duration)}else"pause"===e&&(t.current.pause(),v(!1))};return window.setInterval((function(){var e,n;x(null===(e=t.current)||void 0===e?void 0:e.currentTime),w((null===(n=t.current)||void 0===n?void 0:n.currentTime)/g*100)}),1e3),(0,l.jsxs)("div",{className:"app",children:[(0,l.jsx)("video",{id:"video1",ref:t,className:"video",src:n}),(0,l.jsx)("div",{className:"controlsContainer",children:(0,l.jsxs)("div",{className:"controls",children:[(0,l.jsx)(i.Z,{onClick:function(){t.current.currentTime-=5},className:"controlsIcon"}),p?(0,l.jsx)(o.Z,{onClick:function(){return C("pause")},className:"controlsIcon--small"}):(0,l.jsx)(c.Z,{onClick:function(){return C("play")},className:"controlsIcon--small"}),(0,l.jsx)(s.Z,{onClick:function(){t.current.currentTime+=5},className:"controlsIcon"})]})}),(0,l.jsxs)("div",{className:"timecontrols",children:[(0,l.jsx)("p",{className:"controlsTime",children:Math.floor(m/60)+":"+("0"+Math.floor(m%60)).slice(-2)}),(0,l.jsx)("div",{className:"time_progressbarContainer",children:(0,l.jsx)("div",{style:{width:"".concat(k,"%")},className:"time_progressBar"})}),(0,l.jsx)("p",{className:"controlsTime",children:Math.floor(g/60)+":"+("0"+Math.floor(g%60)).slice(-2)})]})]})}},8:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(1413),a=(t(2791),t(7630)),i=t(184),s=(0,a.ZP)("div")((function(e){var n=e.theme;return(0,r.Z)((0,r.Z)({},n.typography.button),{},{backgroundColor:n.palette.background.paper,fontSize:"25px",fontWeight:"bold"})}));function o(e){var n=e.text;return(0,i.jsx)(s,{children:n})}},2239:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(4942),a=t(1413),i=t(2982),s=t(885),o=t(2791),c=t(6176),l=t(503),u=t(9658),d=t(9012),p=t(5523),v=t(9174),h=t(6871),f=t(1042),m=t(9823),x=t(8),j=t(2419),Z=t(7394),g=t(2062),y=t.n(g),_=t(6751),b=t(1865),k=t(2491),w=(t(1977),t(7845),t(6363),t(184)),C=function(){var e=(0,h.s0)(),n=(0,o.useState)(!1),t=(0,s.Z)(n,2),g=t[0],C=t[1],N=(0,h.TH)().state.data,S=null===N||void 0===N?void 0:N.reqHelp,T=null===N||void 0===N?void 0:N.sub_category_feature,z=(0,o.useState)(""),M=(0,s.Z)(z,2),L=M[0],O=M[1],B=(0,o.useState)(""),P=(0,s.Z)(B,2),A=P[0],I=P[1],R=(0,o.useState)([]),V=(0,s.Z)(R,2),H=V[0],D=V[1],F=(0,o.useState)([]),U=(0,s.Z)(F,2),E=U[0],G=U[1],J=(0,o.useState)(""),W=(0,s.Z)(J,2),q=W[0],$=W[1],X=(0,o.useState)(!1),Y=(0,s.Z)(X,2),K=Y[0],Q=Y[1],ee=(0,o.useState)(""),ne=(0,s.Z)(ee,2),te=ne[0],re=ne[1],ae=(0,o.useState)(""),ie=(0,s.Z)(ae,2),se=ie[0],oe=ie[1],ce=(0,o.useState)(""),le=(0,s.Z)(ce,2),ue=le[0],de=le[1],pe=(0,o.useState)(""),ve=(0,s.Z)(pe,2),he=ve[0],fe=ve[1],me=(0,o.useState)(""),xe=(0,s.Z)(me,2),je=xe[0],Ze=xe[1],ge=(0,o.useState)(!1),ye=(0,s.Z)(ge,2),_e=ye[0],be=ye[1],ke=(0,o.useState)(""),we=(0,s.Z)(ke,2),Ce=we[0],Ne=we[1],Se=(0,o.useState)({}),Te=(0,s.Z)(Se,2),ze=Te[0],Me=Te[1],Le=(0,o.useState)([]),Oe=(0,s.Z)(Le,2),Be=Oe[0],Pe=Oe[1],Ae=(0,o.useState)(""),Ie=(0,s.Z)(Ae,2),Re=Ie[0],Ve=Ie[1],He=(0,o.useState)(""),De=(0,s.Z)(He,2),Fe=De[0],Ue=De[1],Ee=(0,o.useState)(""),Ge=(0,s.Z)(Ee,2),Je=Ge[0],We=Ge[1],qe=(0,o.useState)([]),$e=(0,s.Z)(qe,2),Xe=$e[0],Ye=$e[1],Ke=(0,o.useState)(""),Qe=(0,s.Z)(Ke,2),en=Qe[0],nn=Qe[1];o.useEffect((function(){!function(){for(var e={},n=(0,i.Z)(T),t=0;t<n.length;t++){e[n[t]]=""}Me(e)}()}),[T]);var tn=function(e,n,t,r){if(!n)return!1;var a=(0,i.Z)(e);a.push(n),t(a),r("")},rn=function(e,n,t){var r=(0,i.Z)(e);r.splice(n,1),t(r)},an=function(){Ue(""),We(""),Ve("")},sn=function(e){var n=e.target,t=n.name,i=n.value;Me((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,i))}))};return g?(0,w.jsx)(k.Z,{loading:g}):(0,w.jsxs)("form",{className:"form-sec width-100per",onSubmit:function(n){n.preventDefault();try{var t,r,a,i,s,o,u;C(!0);for(var d=""===Je&&""===Re,p={product_name:null===N||void 0===N?void 0:N.productName,company_email:null===N||void 0===N?void 0:N.company_email,variant_type:null===N||void 0===N?void 0:N.variantType,variants:null===N||void 0===N?void 0:N.variantList,brand:null===N||void 0===N?void 0:N.brand._id,category:null===N||void 0===N?void 0:N.categoryId,sub_category:null===N||void 0===N?void 0:N.subCategoryId,carousel_headings:H||(null===(t=N.brand)||void 0===t?void 0:t.carousel_headings),carousel_text:E||(null===(r=N.brand)||void 0===r?void 0:r.carousel_text),product_description:q||(null===(a=N.brand)||void 0===a?void 0:a.product_description),general_warranty_duration:se,special_warranty_type:ue,special_warranty_duration:he,free_brand_maintenance_duration:je,one_click_reorder_feature:_e,reorder_link:Ce,survey_feature:K||(null===(i=N.brand)||void 0===i?void 0:i.survey_feature),survey_link:te||(null===(s=N.brand)||void 0===s?void 0:s.survey_link),feature:ze,videoURL:Je,emptyVideo:d,image_list:0===Xe.length&&(null===(o=N.brand)||void 0===o?void 0:o.image_list),video_url:!d&&(null===(u=N.brand)||void 0===u?void 0:u.video_url)},v=new FormData,h=0;h<Xe.length;h++)v.append("image",Xe[h]);v.append("video",Re),v.append("reqBody",JSON.stringify(p));(0,l.O$)(c.token,"/api/insert-product",v).then((function(n){var t;y()({title:"Success!",text:null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.msg,icon:"success",button:"Okay!"}).then((function(){e("/ls-admin/products",{replace:!0}),C(!1)}))})).catch((function(e){C(!1),nn(e),(0,c.removeStatus)(nn)}))}catch(en){C(!1),nn(en.message),(0,c.removeStatus)(nn)}},children:[(0,w.jsxs)("span",{className:"direction-row",children:[(0,w.jsx)(Z.Z,{fontSize:"medium",onClick:function(){return e(-1)}})," Back"]}),(0,w.jsx)(x.Z,{text:"Create Product"}),""!==en&&(0,w.jsx)(u.Z,{severity:"error",children:en}),(0,w.jsxs)("div",{className:"create-brand__flex",children:[(0,w.jsxs)("section",{className:"brand_form",children:[(0,w.jsxs)("div",{className:"company_admin_form",children:[(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Carousel Headings"}),(0,w.jsx)("input",{placeholder:"heading...",className:"right-spacing",value:L,onChange:function(e){return O(e.target.value)}}),(0,w.jsx)(j.Z,{className:"addlist__icon",onClick:function(){return tn(H,L,D,O)}})]}),(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Carousel Text"}),(0,w.jsx)("input",{placeholder:"text...",className:"right-spacing",value:A,onChange:function(e){return I(e.target.value)}}),(0,w.jsx)(j.Z,{className:"addlist__icon",onClick:function(){return tn(E,A,G,I)}})]}),(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Product Description"}),(0,w.jsx)("textarea",{placeholder:"description...",value:q,onChange:function(e){return $(e.target.value)}})]}),(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Video Link"}),(0,w.jsx)("input",{placeholder:"video link...",value:Je,onChange:function(e){return We(e.target.value)}})]}),(0,w.jsx)(w.Fragment,{children:S&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"General Warranty Duration"}),(0,w.jsx)("input",{placeholder:"12month, 24months...",value:se,onChange:function(e){return oe(e.target.value)}})]}),(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Special Warranty Type"}),(0,w.jsx)("input",{placeholder:"Compressor, Rotor...",value:ue,onChange:function(e){return de(e.target.value)}})]}),(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Special Warranty Duration"}),(0,w.jsx)("input",{placeholder:"60month, 120months...",value:he,onChange:function(e){return fe(e.target.value)}})]}),(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Free Brand Maintenance Duration"}),(0,w.jsx)("input",{placeholder:"0months, 12months...",value:je,onChange:function(e){return Ze(e.target.value)}})]})]})}),_e&&(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Reorder Link"}),(0,w.jsx)("input",{placeholder:"Reorder link...",value:Ce,onChange:function(e){return Ne(e.target.value)}})]}),K&&(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Survey Link"}),(0,w.jsx)("input",{placeholder:"Survey link...",value:te,onChange:function(e){return re(e.target.value)}})]}),null===T||void 0===T?void 0:T.map((function(e,n){return(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Feature ".concat(n+1," ( ").concat(e," )")}),(0,w.jsx)("input",{name:e,value:ze[e],onChange:sn,placeholder:"type ".concat(e,"..."),className:"right-spacing feature"})]},n)}))]}),(0,w.jsx)("div",{style:{width:"40%",marginTop:"2%"},children:(0,w.jsxs)("div",{className:"upload-btns-group",children:[(0,w.jsxs)("div",{children:[(0,w.jsxs)("div",{className:"upload-btn-wrapper",children:[(0,w.jsx)(f.Z,{color:"primary",sx:{fontSize:30}}),(0,w.jsx)("span",{children:"Images"}),(0,w.jsx)("input",{type:"file",onChange:function(e){var n=e.target.files;if(Array.from(n).length>7)return y()({title:"".concat(n.length," images"),text:"Cannot upload images more then 7",icon:"info",buttons:"Try Again"}),!1;for(var t=[],r=[],a=0;a<n.length;a++){var i=n[a];if("image/jpeg"!==i.type&&"image/png"!==i.type)return y()({title:"Invalid file format !!",text:"Only jpeg or png are allowed",icon:"info",buttons:"Try Again"}),!1;t.push(URL.createObjectURL(i)),r.push(i)}Ye(r),Pe(t)},multiple:!0,accept:"image/*"})]}),(0,w.jsx)("h6",{className:"subscript",children:"Max 7 Images Limit"})]}),(0,w.jsxs)("div",{children:[(0,w.jsxs)("div",{className:"upload-btn-wrapper",children:[(0,w.jsx)(f.Z,{color:"primary",sx:{fontSize:30}}),(0,w.jsx)("span",{children:"Video"}),(0,w.jsx)("input",{type:"file",onChange:function(e){var n=e.target.files[0];if(n.size>5e7)return y()({title:"".concat(Math.floor(n.size/1e6),"MB Size"),text:"Cannot upload video upto 50mb",icon:"info",buttons:"Try Again"}),!1;if("video/mp4"!==n.type)return y()({title:"Invalid file format !!",text:"Only mp4 format is allowed",icon:"info",buttons:"Try Again"}),!1;if(""!==Je)return!1;var t=URL.createObjectURL(n);Ue(t),Ve(n)},accept:"video/*",disabled:""!==Je})]}),(0,w.jsx)("h6",{className:"subscript",children:"Max 50MB video Limit"})]})]})}),(0,w.jsx)("button",{style:{width:"100%",marginBottom:"5%"},children:"Create Product"}),""===Je&&""!==Fe&&(0,w.jsxs)("div",{className:"uploaded-video",children:[(0,w.jsx)(_.Z,{source:Fe}),(0,w.jsx)(b.J,{Icon:m.Z,Text:"Delete Video",Method:an})]}),""!==Je&&(0,w.jsxs)("div",{className:"uploaded-video",children:[(0,w.jsx)("iframe",{width:"100%",height:"100%",src:Je,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}),(0,w.jsx)(b.J,{Icon:m.Z,Text:"Delete Video",Method:an})]})]}),(0,w.jsxs)("section",{className:"brand-checkboxes",children:[(0,w.jsxs)("div",{className:"brand-checkbox",children:[(0,w.jsxs)("div",{className:"checkboxes",children:[(0,w.jsx)("label",{children:"Survey Feature"}),(0,w.jsx)(d.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,w.jsx)(p.Z,{name:"survey feature",control:(0,w.jsx)(v.Z,{onChange:function(e){return Q(e.target.checked)},checked:K}),label:"Active"})})]}),(0,w.jsxs)("div",{className:"checkboxes",children:[(0,w.jsx)("label",{children:"One Click Reorder Link"}),(0,w.jsx)(d.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,w.jsx)(p.Z,{name:"one client reorder",control:(0,w.jsx)(v.Z,{onChange:function(e){return be(e.target.checked)},checked:_e}),label:"Active"})})]}),(0,w.jsxs)("div",{style:{width:"100%"},children:[0!==H.length&&(0,w.jsxs)("div",{children:[(0,w.jsx)("label",{children:"Carousel Headings"}),(0,w.jsx)("div",{className:"chips",children:null===H||void 0===H?void 0:H.map((function(e,n){return(0,w.jsxs)("p",{onClick:function(){return rn(H,n,D)},className:"sub-category-chips selected-chip",children:[e," ",(0,w.jsx)(m.Z,{})]},n)}))})]}),0!==E.length&&(0,w.jsxs)("div",{style:{margin:"15px 0"},children:[(0,w.jsx)("label",{children:"Carousel Text"}),(0,w.jsx)("div",{className:"chips",children:null===E||void 0===E?void 0:E.map((function(e,n){return(0,w.jsxs)("p",{onClick:function(){return rn(E,n,G)},className:"sub-category-chips selected-chip",children:[e," ",(0,w.jsx)(m.Z,{})]},n)}))})]})]})]}),(0,w.jsx)("div",{className:"imageList",children:0!==Be.length&&(null===Be||void 0===Be?void 0:Be.map((function(e,n){return(0,w.jsxs)("div",{className:"imageList__container",onClick:function(){return function(e){var n=(0,i.Z)(Be);n.splice(e,1),Pe(n)}(n)},children:[(0,w.jsx)("img",{src:e,className:"imageList__img",alt:"imageList__img"}),(0,w.jsx)("div",{children:(0,w.jsx)(m.Z,{color:"secondary",sx:{fontSize:15,width:20,height:20,borderRadius:30,bgcolor:"#000"}})})]},n)})))})]})]})]})}},503:function(e,n,t){t.d(n,{G9:function(){return c},O$:function(){return p},ad:function(){return u},eg:function(){return l},hu:function(){return s},qX:function(){return d},u$:function(){return o}});var r=t(4165),a=t(5861),i=t(197),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,s){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,o){var c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.default)({method:"POST",url:t,data:s,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:c=e.sent,a(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,s){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,o){var c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.default)({method:"POST",url:t,data:s,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:c=e.sent,a(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,s){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.default)({method:"GET",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:o=e.sent,a(o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(e,n,t){return new Promise(function(){var s=(0,a.Z)((0,r.Z)().mark((function a(s,o){var c;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.default)({method:"POST",url:n,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},data:t});case 3:c=r.sent,s(c),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),o(null===r.t0||void 0===r.t0?void 0:r.t0.response.data.error);case 10:case"end":return r.stop()}}),a,null,[[0,7]])})));return function(e,n){return s.apply(this,arguments)}}())},u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,s){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.default)({method:"GET",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:o=e.sent,a(o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,s){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,s){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.default)({method:"GET",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:o=e.sent,a(o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),p=function(e,n,t){return new Promise(function(){var s=(0,a.Z)((0,r.Z)().mark((function a(s,o){var c;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.default)({method:"POST",url:n,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},data:t});case 3:c=r.sent,s(c),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),o(null===r.t0||void 0===r.t0?void 0:r.t0.response.data.error);case 10:case"end":return r.stop()}}),a,null,[[0,7]])})));return function(e,n){return s.apply(this,arguments)}}())}},2419:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),i=t(184),s=(0,a.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.Z=s},7394:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),i=t(184),s=(0,a.default)((0,i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");n.Z=s},9823:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),i=t(184),s=(0,a.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.Z=s},1042:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),i=t(184),s=(0,a.default)((0,i.jsx)("path",{d:"M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z"}),"FileUploadOutlined");n.Z=s},338:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),i=t(184),s=(0,a.default)([(0,i.jsx)("path",{d:"M18 13c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6v4l5-5-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8h-2z"},"0"),(0,i.jsx)("path",{d:"M12.03 15.38c-.44 0-.58-.31-.6-.56h-.84c.03.85.79 1.25 1.44 1.25.93 0 1.44-.63 1.44-1.43 0-1.33-.97-1.44-1.3-1.44-.2 0-.43.05-.64.16l.11-.92h1.7v-.71h-2.39l-.25 2.17.67.17c.13-.13.28-.23.57-.23.4 0 .69.23.69.75-.01.05.02.79-.6.79z"},"1")],"Forward5");n.Z=s},5067:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),i=t(184),s=(0,a.default)((0,i.jsx)("path",{d:"M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"}),"PauseCircleOutlineOutlined");n.Z=s},6167:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),i=t(184),s=(0,a.default)((0,i.jsx)("path",{d:"m10 16.5 6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"PlayCircleOutlineOutlined");n.Z=s},4431:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),i=t(184),s=(0,a.default)([(0,i.jsx)("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"},"0"),(0,i.jsx)("path",{d:"m10.69 13.9.25-2.17h2.39v.71h-1.7l-.11.92c.03-.02.07-.03.11-.05s.09-.04.15-.05.12-.03.18-.04.13-.02.2-.02c.21 0 .39.03.55.1s.3.16.41.28.2.27.25.45.09.38.09.6c0 .19-.03.37-.09.54s-.15.32-.27.45-.27.24-.45.31-.39.12-.64.12c-.18 0-.36-.03-.53-.08s-.32-.14-.46-.24-.24-.24-.32-.39-.13-.33-.13-.53h.84c.02.18.08.32.19.41s.25.15.42.15c.11 0 .2-.02.27-.06s.14-.1.18-.17.08-.15.11-.25.03-.2.03-.31-.01-.21-.04-.31-.07-.17-.13-.24-.13-.12-.21-.15-.19-.05-.3-.05c-.08 0-.15.01-.2.02s-.11.03-.15.05-.08.05-.12.07-.07.06-.1.09l-.67-.16z"},"1")],"Replay5");n.Z=s},6363:function(){},7845:function(){},1977:function(){}}]);
//# sourceMappingURL=2239.b5fc7404.chunk.js.map