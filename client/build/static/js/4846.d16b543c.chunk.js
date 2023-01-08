"use strict";(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[4846],{1865:function(e,n,t){t.d(n,{J:function(){return s}});var r=t(6151),a=(t(2791),t(184)),s=function(e){var n=e.Text,t=e.Method,s=e.Icon;return(0,a.jsx)(r.Z,{variant:"contain",startIcon:(0,a.jsx)(s,{}),onClick:t,sx:{marginTop:2},children:n})}},6751:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(885),a=t(2791),s=t(4431),c=t(338),i=t(5067),o=t(6167),l=t(184);var u=function(e){var n=e.source,t=(0,a.useRef)(null),u=(0,a.useState)(!1),d=(0,r.Z)(u,2),p=d[0],h=d[1],f=(0,a.useState)(0),v=(0,r.Z)(f,2),x=v[0],m=v[1],j=(0,a.useState)(0),Z=(0,r.Z)(j,2),y=Z[0],b=Z[1],g=(0,a.useState)(0),k=(0,r.Z)(g,2),_=k[0],w=k[1],C=function(e){if("play"===e){t.current.play(),h(!0);var n=document.getElementById("video1");b(n.duration)}else"pause"===e&&(t.current.pause(),h(!1))};return window.setInterval((function(){var e,n;m(null===(e=t.current)||void 0===e?void 0:e.currentTime),w((null===(n=t.current)||void 0===n?void 0:n.currentTime)/y*100)}),1e3),(0,l.jsxs)("div",{className:"app",children:[(0,l.jsx)("video",{id:"video1",ref:t,className:"video",src:n}),(0,l.jsx)("div",{className:"controlsContainer",children:(0,l.jsxs)("div",{className:"controls",children:[(0,l.jsx)(s.Z,{onClick:function(){t.current.currentTime-=5},className:"controlsIcon"}),p?(0,l.jsx)(i.Z,{onClick:function(){return C("pause")},className:"controlsIcon--small"}):(0,l.jsx)(o.Z,{onClick:function(){return C("play")},className:"controlsIcon--small"}),(0,l.jsx)(c.Z,{onClick:function(){t.current.currentTime+=5},className:"controlsIcon"})]})}),(0,l.jsxs)("div",{className:"timecontrols",children:[(0,l.jsx)("p",{className:"controlsTime",children:Math.floor(x/60)+":"+("0"+Math.floor(x%60)).slice(-2)}),(0,l.jsx)("div",{className:"time_progressbarContainer",children:(0,l.jsx)("div",{style:{width:"".concat(_,"%")},className:"time_progressBar"})}),(0,l.jsx)("p",{className:"controlsTime",children:Math.floor(y/60)+":"+("0"+Math.floor(y%60)).slice(-2)})]})]})}},8:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(1413),a=(t(2791),t(7630)),s=t(184),c=(0,a.ZP)("div")((function(e){var n=e.theme;return(0,r.Z)((0,r.Z)({},n.typography.button),{},{backgroundColor:n.palette.background.paper,fontSize:"25px",fontWeight:"bold"})}));function i(e){var n=e.text;return(0,s.jsx)(c,{children:n})}},4846:function(e,n,t){t.r(n);var r=t(2982),a=t(4165),s=t(5861),c=t(885),i=t(2791),o=t(9658),l=t(8),u=t(9012),d=t(5523),p=t(9174),h=t(2452),f=t(3420),v=t(6176),x=t(2419),m=t(9823),j=t(1042),Z=(t(1977),t(7845),t(6363),t(6751)),y=t(2491),b=t(2062),g=t.n(b),k=t(1865),_=t(6871),w=t(184);n.default=function(){var e=(0,_.s0)(),n=(0,i.useState)(!1),t=(0,c.Z)(n,2),b=t[0],C=t[1],N=(0,i.useState)([]),S=(0,c.Z)(N,2),T=S[0],z=S[1],A=(0,i.useState)(""),B=(0,c.Z)(A,2),M=B[0],P=B[1],L=(0,i.useState)(""),D=(0,c.Z)(L,2),I=D[0],O=D[1],V=(0,i.useState)(""),F=(0,c.Z)(V,2),R=F[0],H=F[1],U=(0,i.useState)(""),q=(0,c.Z)(U,2),E=q[0],J=q[1],W=(0,i.useState)([]),G=(0,c.Z)(W,2),K=G[0],Y=G[1],$=(0,i.useState)([]),Q=(0,c.Z)($,2),X=Q[0],ee=Q[1],ne=(0,i.useState)(""),te=(0,c.Z)(ne,2),re=te[0],ae=te[1],se=(0,i.useState)(!1),ce=(0,c.Z)(se,2),ie=ce[0],oe=ce[1],le=(0,i.useState)(""),ue=(0,c.Z)(le,2),de=ue[0],pe=ue[1],he=(0,i.useState)(""),fe=(0,c.Z)(he,2),ve=fe[0],xe=fe[1],me=(0,i.useState)(!0),je=(0,c.Z)(me,2),Ze=je[0],ye=je[1],be=(0,i.useState)(!1),ge=(0,c.Z)(be,2),ke=ge[0],_e=ge[1],we=(0,i.useState)(!1),Ce=(0,c.Z)(we,2),Ne=Ce[0],Se=Ce[1],Te=(0,i.useState)(!1),ze=(0,c.Z)(Te,2),Ae=ze[0],Be=ze[1],Me=(0,i.useState)(!1),Pe=(0,c.Z)(Me,2),Le=Pe[0],De=Pe[1],Ie=(0,i.useState)(""),Oe=(0,c.Z)(Ie,2),Ve=Oe[0],Fe=Oe[1],Re=(0,i.useState)(!1),He=(0,c.Z)(Re,2),Ue=He[0],qe=He[1],Ee=(0,i.useState)(""),Je=(0,c.Z)(Ee,2),We=Je[0],Ge=Je[1],Ke=(0,i.useState)(!1),Ye=(0,c.Z)(Ke,2),$e=Ye[0],Qe=Ye[1],Xe=(0,i.useState)(null),en=(0,c.Z)(Xe,2),nn=en[0],tn=en[1],rn=(0,i.useState)(!1),an=(0,c.Z)(rn,2),sn=an[0],cn=an[1],on=(0,i.useState)(null),ln=(0,c.Z)(on,2),un=ln[0],dn=ln[1],pn=(0,i.useState)(!1),hn=(0,c.Z)(pn,2),fn=hn[0],vn=hn[1],xn=(0,i.useState)(""),mn=(0,c.Z)(xn,2),jn=mn[0],Zn=mn[1],yn=(0,i.useState)(!1),bn=(0,c.Z)(yn,2),gn=bn[0],kn=bn[1],_n=(0,i.useState)(""),wn=(0,c.Z)(_n,2),Cn=wn[0],Nn=wn[1],Sn=(0,i.useState)([]),Tn=(0,c.Z)(Sn,2),zn=Tn[0],An=Tn[1],Bn=(0,i.useState)(""),Mn=(0,c.Z)(Bn,2),Pn=Mn[0],Ln=Mn[1],Dn=(0,i.useState)(""),In=(0,c.Z)(Dn,2),On=In[0],Vn=In[1],Fn=(0,i.useState)(""),Rn=(0,c.Z)(Fn,2),Hn=Rn[0],Un=Rn[1],qn=(0,i.useState)([]),En=(0,c.Z)(qn,2),Jn=En[0],Wn=En[1],Gn=(0,i.useState)(""),Kn=(0,c.Z)(Gn,2),Yn=Kn[0],$n=Kn[1];(0,i.useEffect)((function(){(0,f.Mn)(v.token,"/api/fetch-company-admin").then((function(e){var n;if(!e.data.success)return $n("404");z(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.data)})).catch((function(e){$n(e),setTimeout((function(){$n("")}),5e3)}))}),[]);var Qn=function(){var n=(0,s.Z)((0,a.Z)().mark((function n(t){var r,s,c,i;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),!!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(We)||($n("Please enter a valid email address"),!1)){n.next=4;break}return n.abrupt("return");case 4:if(0!==Jn.length||($n("Images not found!"),(0,v.removeStatus)($n),!1))try{for(C(!0),r=""===Hn&&""===Pn,s={company_id:I,brand:M,brand_active_status:Ze,carousel_headings:K,carousel_text:X,product_description:re,authentication_feature:ve,warranty:ke,request_help:Ne,survey_feature:ie,survey_link:de,promo_code:Ae,referrals:Le,re_order_link:Ve,email_support:Ue,email_id:"mailto:".concat(We),call_support:$e,call_no:"tel:".concat(nn),whatsapp_support:sn,whatsapp_number:"https://wa.me/".concat(un),instagram:fn,insta_link:jn,facebook:gn,fb_link:Cn,videoURL:Hn,emptyVideo:r},c=new FormData,i=0;i<Jn.length;i++)c.append("image",Jn[i]);c.append("video",Pn),c.append("reqBody",JSON.stringify(s)),(0,h.AC)(v.token,c).then((function(n){var t;g()({title:"Success!",text:null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.msg,icon:"success",button:"Okay!"}).then((function(){e("/ls-admin/brands",{replace:!0}),C(!1)}))})).catch((function(e){C(!1),$n(null===e||void 0===e?void 0:e.response.data.error),(0,v.removeStatus)($n)}))}catch(Yn){$n(Yn),(0,v.removeStatus)($n)}case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Xn=function(e,n,t,a){if(!n)return!1;var s=(0,r.Z)(e);s.push(n),t(s),a("")},et=function(e,n,t){var a=(0,r.Z)(e);a.splice(n,1),t(a)},nt=function(){Vn(""),Un(""),Ln("")};return"404"===Yn?(0,w.jsx)(o.Z,{severity:"warning",children:"No Company data found !!"}):b?(0,w.jsx)(y.Z,{loading:b}):(0,w.jsxs)("form",{className:"form-structure",onSubmit:Qn,children:[(0,w.jsx)(l.Z,{text:"Add Brand"}),""!==Yn&&(0,w.jsx)(o.Z,{severity:"error",children:Yn}),(0,w.jsxs)("div",{className:"create-brand__flex",children:[(0,w.jsxs)("section",{className:"brand_form",children:[(0,w.jsxs)("div",{className:"company_admin_form",children:[(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Brand"}),(0,w.jsx)("input",{placeholder:"Audi...",value:M,onChange:function(e){return P(e.target.value)},required:!0})]}),(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Company"}),(0,w.jsxs)("select",{onChange:function(e){return O(e.target.value)},required:!0,children:[(0,w.jsx)("option",{value:"",children:"select company"}),T.map((function(e,n){return(0,w.jsx)("option",{value:null===e||void 0===e?void 0:e._id,className:"company_list",children:null===e||void 0===e?void 0:e.company_name},n)}))]})]}),(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Carousel Headings"}),(0,w.jsx)("input",{placeholder:"heading...",className:"right-spacing",value:R,onChange:function(e){return H(e.target.value)}}),(0,w.jsx)(x.Z,{className:"addlist__icon",onClick:function(){return Xn(K,R,Y,H)}})]}),(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Carousel Text"}),(0,w.jsx)("input",{placeholder:"text...",className:"right-spacing",value:E,onChange:function(e){return J(e.target.value)}}),(0,w.jsx)(x.Z,{className:"addlist__icon",onClick:function(){return Xn(X,E,ee,J)}})]}),(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Authentication Feature"}),(0,w.jsxs)("select",{onChange:function(e){return xe(e.target.value)},required:!0,children:[(0,w.jsx)("option",{value:"",children:"Select Feature"}),(0,w.jsx)("option",{value:"Label",children:"Label"}),(0,w.jsx)("option",{value:"Batch",children:"Batch"}),(0,w.jsx)("option",{value:"No Feature",children:"No Feature"})]})]}),(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Re Order Link"}),(0,w.jsx)("input",{placeholder:"re-order link...",value:Ve,onChange:function(e){return Fe(e.target.value)}})]}),(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Product Description"}),(0,w.jsx)("textarea",{placeholder:"description...",value:re,onChange:function(e){return ae(e.target.value)}})]}),(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Video Link"}),(0,w.jsx)("input",{placeholder:"video link...",value:Hn,onChange:function(e){return Un(e.target.value)}})]}),ie&&(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Survey Link"}),(0,w.jsx)("input",{placeholder:"survey link...",value:de,onChange:function(e){return pe(e.target.value)}})]}),Ue&&(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Email"}),(0,w.jsx)("input",{placeholder:"email...",value:We,onChange:function(e){return Ge(e.target.value)}})]}),$e&&(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Call No"}),(0,w.jsx)("input",{placeholder:"call no...",value:nn,onChange:function(e){return tn(e.target.value)}})]}),sn&&(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Whatsapp No"}),(0,w.jsx)("input",{placeholder:"9134984...",value:un,onChange:function(e){return dn(e.target.value)}})]}),fn&&(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Instagram Link"}),(0,w.jsx)("input",{placeholder:"http://instagram...",value:jn,onChange:function(e){return Zn(e.target.value)}})]}),gn&&(0,w.jsxs)("div",{className:"company_admin_form_field",children:[(0,w.jsx)("label",{children:"Facebook Link"}),(0,w.jsx)("input",{placeholder:"http://facebook...",value:Cn,onChange:function(e){return Nn(e.target.value)}})]})]}),(0,w.jsx)("div",{style:{width:"40%",marginTop:"2%"},children:(0,w.jsxs)("div",{className:"upload-btns-group",children:[(0,w.jsxs)("div",{children:[(0,w.jsxs)("div",{className:"upload-btn-wrapper",children:[(0,w.jsx)(j.Z,{color:"primary",sx:{fontSize:30}}),(0,w.jsx)("span",{children:"Images"}),(0,w.jsx)("input",{type:"file",onChange:function(e){var n=e.target.files;if(Array.from(n).length>7)return g()({title:"".concat(n.length," images"),text:"Cannot upload images more then 7",icon:"info",buttons:"Try Again"}),!1;for(var t=[],r=[],a=0;a<n.length;a++){var s=n[a];if("image/jpeg"!==s.type&&"image/png"!==s.type)return g()({title:"Invalid file format !!",text:"Only jpeg or png are allowed",icon:"info",buttons:"Try Again"}),!1;t.push(URL.createObjectURL(s)),r.push(s)}Wn(r),An(t)},multiple:!0,accept:"image/*"})]}),(0,w.jsx)("h6",{className:"subscript",children:"Max 7 Images Limit"})]}),(0,w.jsxs)("div",{children:[(0,w.jsxs)("div",{className:"upload-btn-wrapper",children:[(0,w.jsx)(j.Z,{color:"primary",sx:{fontSize:30}}),(0,w.jsx)("span",{children:"Video"}),(0,w.jsx)("input",{type:"file",onChange:function(e){var n=e.target.files[0];if(n.size>5e7)return g()({title:"".concat(Math.floor(n.size/1e6),"MB Size"),text:"Cannot upload video upto 50mb",icon:"info",buttons:"Try Again"}),!1;if("video/mp4"!==n.type)return g()({title:"Invalid file format !!",text:"Only mp4 format is allowed",icon:"info",buttons:"Try Again"}),!1;if(""!==Hn)return!1;var t=URL.createObjectURL(n);Vn(t),Ln(n)},accept:"video/*",disabled:""!==Hn})]}),(0,w.jsx)("h6",{className:"subscript",children:"Max 50MB video Limit"})]})]})}),(0,w.jsx)("button",{style:{width:"100%",marginBottom:"5%"},children:"Create Brand"}),""===Hn&&""!==On&&(0,w.jsxs)("div",{className:"uploaded-video",children:[(0,w.jsx)(Z.Z,{source:On}),(0,w.jsx)(k.J,{Icon:m.Z,Text:"Delete Video",Method:nt})]}),""!==Hn&&(0,w.jsxs)("div",{className:"uploaded-video",children:[(0,w.jsx)("iframe",{width:"100%",height:"100%",src:Hn,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}),(0,w.jsx)(k.J,{Icon:m.Z,Text:"Delete Video",Method:nt})]})]}),(0,w.jsxs)("section",{className:"brand-checkboxes",children:[(0,w.jsxs)("div",{className:"brand-checkbox",children:[(0,w.jsxs)("div",{className:"checkboxes",children:[(0,w.jsx)("label",{children:"Brand Status"}),(0,w.jsx)(u.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,w.jsx)(d.Z,{name:"company_status",control:(0,w.jsx)(p.Z,{onChange:function(e){return ye(e.target.checked)},checked:Ze}),label:"Active"})})]}),(0,w.jsxs)("div",{className:"checkboxes",children:[(0,w.jsx)("label",{children:"Warranty"}),(0,w.jsx)(u.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,w.jsx)(d.Z,{name:"company_status",control:(0,w.jsx)(p.Z,{onChange:function(e){return _e(e.target.checked)},checked:ke}),label:"Available"})})]}),(0,w.jsxs)("div",{className:"checkboxes",children:[(0,w.jsx)("label",{children:"Request Help"}),(0,w.jsx)(u.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,w.jsx)(d.Z,{name:"company_status",control:(0,w.jsx)(p.Z,{onChange:function(e){return Se(e.target.checked)},checked:Ne}),label:"Available"})})]}),(0,w.jsxs)("div",{className:"checkboxes",children:[(0,w.jsx)("label",{children:"Survey Feature"}),(0,w.jsx)(u.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,w.jsx)(d.Z,{name:"company_status",control:(0,w.jsx)(p.Z,{onChange:function(e){return oe(e.target.checked)},checked:ie}),label:"Available"})})]}),(0,w.jsxs)("div",{className:"checkboxes",children:[(0,w.jsx)("label",{children:"Promo Code"}),(0,w.jsx)(u.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,w.jsx)(d.Z,{name:"company_status",control:(0,w.jsx)(p.Z,{onChange:function(e){return Be(e.target.checked)},checked:Ae}),label:"Available"})})]}),(0,w.jsxs)("div",{className:"checkboxes",children:[(0,w.jsx)("label",{children:"Referrals"}),(0,w.jsx)(u.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,w.jsx)(d.Z,{name:"company_status",control:(0,w.jsx)(p.Z,{onChange:function(e){return De(e.target.checked)},checked:Le}),label:"Available"})})]}),(0,w.jsxs)("div",{className:"checkboxes",children:[(0,w.jsx)("label",{children:"Email Support"}),(0,w.jsx)(u.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,w.jsx)(d.Z,{name:"company_status",control:(0,w.jsx)(p.Z,{onChange:function(e){return qe(e.target.checked)},checked:Ue}),label:"Available"})})]}),(0,w.jsxs)("div",{className:"checkboxes",children:[(0,w.jsx)("label",{children:"Call Support"}),(0,w.jsx)(u.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,w.jsx)(d.Z,{name:"company_status",control:(0,w.jsx)(p.Z,{onChange:function(e){return Qe(e.target.checked)},checked:$e}),label:"Available"})})]}),(0,w.jsxs)("div",{className:"checkboxes",children:[(0,w.jsx)("label",{children:"Whatsapp Support"}),(0,w.jsx)(u.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,w.jsx)(d.Z,{name:"company_status",control:(0,w.jsx)(p.Z,{onChange:function(e){return cn(e.target.checked)},checked:sn}),label:"Available"})})]}),(0,w.jsxs)("div",{className:"checkboxes",children:[(0,w.jsx)("label",{children:"Instagram"}),(0,w.jsx)(u.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,w.jsx)(d.Z,{name:"company_status",control:(0,w.jsx)(p.Z,{onChange:function(e){return vn(e.target.checked)},checked:fn}),label:"Available"})})]}),(0,w.jsxs)("div",{className:"checkboxes",children:[(0,w.jsx)("label",{children:"Facebook"}),(0,w.jsx)(u.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,w.jsx)(d.Z,{name:"company_status",control:(0,w.jsx)(p.Z,{onChange:function(e){return kn(e.target.checked)},checked:gn}),label:"Available"})})]}),(0,w.jsxs)("div",{style:{width:"100%"},children:[0!==K.length&&(0,w.jsxs)("div",{children:[(0,w.jsx)("label",{children:"Carousel Headings"}),(0,w.jsx)("div",{className:"chips",children:null===K||void 0===K?void 0:K.map((function(e,n){return(0,w.jsxs)("p",{onClick:function(){return et(K,n,Y)},className:"sub-category-chips selected-chip",children:[e," ",(0,w.jsx)(m.Z,{})]},n)}))})]}),0!==X.length&&(0,w.jsxs)("div",{style:{margin:"15px 0"},children:[(0,w.jsx)("label",{children:"Carousel Text"}),(0,w.jsx)("div",{className:"chips",children:null===X||void 0===X?void 0:X.map((function(e,n){return(0,w.jsxs)("p",{onClick:function(){return et(X,n,ee)},className:"sub-category-chips selected-chip",children:[e," ",(0,w.jsx)(m.Z,{})]},n)}))})]})]})]}),(0,w.jsx)("div",{className:"imageList",children:0!==zn.length&&(null===zn||void 0===zn?void 0:zn.map((function(e,n){return(0,w.jsxs)("div",{className:"imageList__container",onClick:function(){return function(e){var n=(0,r.Z)(zn);n.splice(e,1),An(n)}(n)},children:[(0,w.jsx)("img",{src:e,className:"imageList__img",alt:"imageList__img"}),(0,w.jsx)("div",{children:(0,w.jsx)(m.Z,{color:"secondary",sx:{fontSize:15,width:20,height:20,borderRadius:30,bgcolor:"#000"}})})]},n)})))})]})]})]})}},2452:function(e,n,t){t.d(n,{AC:function(){return c},S0:function(){return l},Sw:function(){return i},uK:function(){return o}});var r=t(4165),a=t(5861),s=t(197),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,c){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{i=s.default.post("http://35.91.231.34/api/insert-brand",t,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(n)}}),a(i)}catch(r){c(null===r||void 0===r?void 0:r.response.data.error)}case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,c){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,i){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{o=s.default.put("/api/update-brand/".concat(n),c,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(t)}}),a(o)}catch(r){i(null===r||void 0===r?void 0:r.response.data.error)}case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,c){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,i){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{o=s.default.put("/api/update-image/".concat(n),c,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(t)}}),a(o)}catch(r){i(null===r||void 0===r?void 0:r.response.data.error)}case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,c){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.default)({method:"GET",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:i=e.sent,a(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},3420:function(e,n,t){t.d(n,{CB:function(){return u},F1:function(){return o},Hr:function(){return d},K0:function(){return i},Mn:function(){return c},eD:function(){return l},h8:function(){return p}});var r=t(4165),a=t(5861),s=t(197),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,c){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.default)({method:"GET",url:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:i=e.sent,a(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,c){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.default)({method:"POST",url:"/api/fetch-admin",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},data:t});case 3:i=e.sent,a(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,c){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.default)({method:"POST",url:"/api/insert-company-admin",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},data:t});case 3:i=e.sent,a(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,c){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.default)({method:"POST",url:"/api/auth/register",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},data:t});case 3:i=e.sent,a(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,c){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,i){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.default)({method:"PUT",url:n,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},data:c});case 3:(o=e.sent)?a(o):i(o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,c){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,i){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.default)({method:"PUT",url:n,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},data:c});case 3:(o=e.sent)?a(o):i(o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),p=function(e,n,t){return new Promise(function(){var c=(0,a.Z)((0,r.Z)().mark((function a(c,i){var o;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,s.default)({method:"PUT",url:n,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},data:t});case 3:o=r.sent,c(o),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),i(null===r.t0||void 0===r.t0?void 0:r.t0.response.data.error);case 10:case"end":return r.stop()}}),a,null,[[0,7]])})));return function(e,n){return c.apply(this,arguments)}}())}},2419:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),s=t(184),c=(0,a.default)((0,s.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.Z=c},9823:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),s=t(184),c=(0,a.default)((0,s.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.Z=c},1042:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),s=t(184),c=(0,a.default)((0,s.jsx)("path",{d:"M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z"}),"FileUploadOutlined");n.Z=c},338:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),s=t(184),c=(0,a.default)([(0,s.jsx)("path",{d:"M18 13c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6v4l5-5-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8h-2z"},"0"),(0,s.jsx)("path",{d:"M12.03 15.38c-.44 0-.58-.31-.6-.56h-.84c.03.85.79 1.25 1.44 1.25.93 0 1.44-.63 1.44-1.43 0-1.33-.97-1.44-1.3-1.44-.2 0-.43.05-.64.16l.11-.92h1.7v-.71h-2.39l-.25 2.17.67.17c.13-.13.28-.23.57-.23.4 0 .69.23.69.75-.01.05.02.79-.6.79z"},"1")],"Forward5");n.Z=c},5067:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),s=t(184),c=(0,a.default)((0,s.jsx)("path",{d:"M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"}),"PauseCircleOutlineOutlined");n.Z=c},6167:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),s=t(184),c=(0,a.default)((0,s.jsx)("path",{d:"m10 16.5 6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"PlayCircleOutlineOutlined");n.Z=c},4431:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),s=t(184),c=(0,a.default)([(0,s.jsx)("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"},"0"),(0,s.jsx)("path",{d:"m10.69 13.9.25-2.17h2.39v.71h-1.7l-.11.92c.03-.02.07-.03.11-.05s.09-.04.15-.05.12-.03.18-.04.13-.02.2-.02c.21 0 .39.03.55.1s.3.16.41.28.2.27.25.45.09.38.09.6c0 .19-.03.37-.09.54s-.15.32-.27.45-.27.24-.45.31-.39.12-.64.12c-.18 0-.36-.03-.53-.08s-.32-.14-.46-.24-.24-.24-.32-.39-.13-.33-.13-.53h.84c.02.18.08.32.19.41s.25.15.42.15c.11 0 .2-.02.27-.06s.14-.1.18-.17.08-.15.11-.25.03-.2.03-.31-.01-.21-.04-.31-.07-.17-.13-.24-.13-.12-.21-.15-.19-.05-.3-.05c-.08 0-.15.01-.2.02s-.11.03-.15.05-.08.05-.12.07-.07.06-.1.09l-.67-.16z"},"1")],"Replay5");n.Z=c},6363:function(){},7845:function(){},1977:function(){}}]);
//# sourceMappingURL=4846.d16b543c.chunk.js.map