"use strict";(self.webpackChunklabelling_system=self.webpackChunklabelling_system||[]).push([[8184],{8184:function(e,n,r){r.r(n);var t=r(4165),a=r(5861),i=r(4942),o=r(1413),c=r(9439),s=r(2791),u=r(7689),p=r(1822),l=r(5755),d=r(2062),f=r.n(d),m=(r(5814),r(184));n.default=function(){var e=(0,u.s0)(),n=(0,u.TH)().pathname,r=function(){var e=n.split("/");return"/"+e[1]+"/"+e[2]}(),d=(0,s.useState)({ds1:r,warranty_activated:!0,purchase_date:"",store_name_and_address:"",store_pin_code:"",warranty_duration:"",invoice_number:"",invoice_image:"",pincode:"",address1:"",address2:""}),v=(0,c.Z)(d,2),h=v[0],b=v[1],_=function(e){b((0,o.Z)((0,o.Z)({},h),{},(0,i.Z)({},e.target.name,e.target.value)))},y=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a,i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,(a=new FormData).append("image",h.invoice_image),h.invoice_image=void 0,a.append("req_body",JSON.stringify(h)),n.next=8,(0,l.jV)("/api/insert-warranty",a);case 8:i=n.sent,f()("Success",i.data.msg,"success").then((function(){return e(-1,{replace:!0})})),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),f()("error",n.t0,"error");case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}();return(0,m.jsx)("main",{children:(0,m.jsxs)("form",{onSubmit:y,className:"--form-layout",children:[(0,m.jsx)("h1",{children:"Register Warranty"}),p.R.map((function(e,n){return(0,m.jsxs)("div",{children:[(0,m.jsx)("label",{children:e.label}),(0,m.jsx)("input",(0,o.Z)((0,o.Z)({},e),{},{value:h[e.name],onChange:_}))]},n)})),(0,m.jsxs)("div",{children:[(0,m.jsx)("label",{children:"Invoice Image"}),(0,m.jsx)("input",{name:"invoice_image",type:"file",onChange:function(e){b((0,o.Z)((0,o.Z)({},h),{},{invoice_image:e.target.files[0]}))}})]}),(0,m.jsx)("button",{children:"Submit"})]})})}},1822:function(e,n,r){r.d(n,{R:function(){return u},w:function(){return s}});var t=r(6409),a=r(2129),i=r(1880),o=r(2093),c=r(3229),s=[{Service:"Whatsapp",Icon:t.Z,enableKey:"whatsapp_support",info:"whatsapp_number",asset:r(1928)},{Service:"Email",Icon:a.Z,enableKey:"email_support",info:"email_id",asset:r(7932)},{Service:"Call",Icon:c.Z,enableKey:"call_support",info:"call_no",asset:r(1373)},{Service:"Instagram",Icon:i.Z,enableKey:"instagram",info:"insta_link",asset:r(7932)},{Service:"facebook",Icon:o.Z,enableKey:"facebook",info:"fb_link",asset:r(1928)}],u=[{label:"Store & Location",name:"store_name_and_address",type:"text",placeholder:"friends bakery block 34 DHA",required:!0},{label:"Store Pin Code",name:"store_pin_code",type:"tel",placeholder:"323272",required:!0},{label:"Warranty Duration",name:"warranty_duration",type:"text",placeholder:"3month, 4mon..",required:!0},{label:"Purchase Date",name:"purchase_date",type:"date",required:!0},{label:"Invoice Number",name:"invoice_number",type:"text",placeholder:"09Inv2200",required:!0},{label:"Pincode",name:"pincode",type:"text",placeholder:"239230",required:!0},{label:"Address 01",name:"address1",type:"text",placeholder:"Office",required:!1},{label:"Address 02",name:"address2",type:"text",placeholder:"house",required:!1}]},5755:function(e,n,r){r.d(n,{O0:function(){return o},jV:function(){return c}});var t=r(4165),a=r(5861),i=r(197),o=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n,r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(a,o){var c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.default)({method:"POST",url:r,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:c=e.sent,a(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,r){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n,r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(a,o){var c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.default)({method:"POST",url:n,data:r});case 3:c=e.sent,a(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,r){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()},5814:function(){},7932:function(e,n,r){e.exports=r.p+"static/media/instagram_people.b935ca4e96335cf57997.jpg"},1373:function(e,n,r){e.exports=r.p+"static/media/twitter_people.dbe02fd40b21331095ab.jpg"},1928:function(e,n,r){e.exports=r.p+"static/media/whatsapp_people.1a9b375af32c28fdb66f.jpg"}}]);
//# sourceMappingURL=8184.f244d8d9.chunk.js.map