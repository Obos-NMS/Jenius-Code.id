(this["webpackJsonpcoding-test"]=this["webpackJsonpcoding-test"]||[]).push([[0],{100:function(e,t,a){e.exports=a(132)},105:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(105),a(21)),i=a(12),s=a(19),m=(a(110),a(40)),u=a(76),d=a(17),p={contacts:[],contact:[],updateContact:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CONTACTS":return Object(d.a)(Object(d.a)({},e),{},{contacts:t.payload});case"FETCH_CONTACT":return Object(d.a)(Object(d.a)({},e),{},{contact:t.payload});case"UPDATE_CONTACT":return Object(d.a)(Object(d.a)({},e),{},{updateContact:t.payload});case"ADD_CONTACT ":return Object(d.a)(Object(d.a)({},e),{},{addedContact:t.payload});default:return e}},g=Object(m.c)({contactReducer:f}),E=Object(m.d)(g,Object(m.a)(u.a)),h=a(32),b=a(15),y=a(5),O=a(170),j=a(39),C=a(77),v=a.n(C),N=(a(126),a(127),a(187)),S=a(171),T=a(173),w=a(175),x=a(174),k=Object(O.a)({media:{margin:"0 auto"}});function L(e){k();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{style:{width:375,backgroundColor:"black",color:"white",margin:"0 0.4em"}},r.a.createElement(l.b,{style:{color:"white",textDecoration:"none"},to:"/".concat(e._id)},r.a.createElement(T.a,null,r.a.createElement(x.a,{className:"",style:{height:375,width:300,marginTop:"9%",marginLeft:"9%",marginRight:"9%",marginBottom:"5%",alignItems:"center",justify:"center",paddingLeft:"2%"},title:"Contact"},r.a.createElement("img",{src:e.photo,style:{height:"21rem",width:"19rem"}})),r.a.createElement(w.a,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column",textAlign:"center"}},r.a.createElement("h5",null,r.a.createElement("b",null," ",e.firstName," ")),r.a.createElement("p",null," ",e.lastName," ")))))))}a(74);function B(e){Object(n.useEffect)((function(){e&&console.log(e)}),[e]);var t={infinite:!0,speed:500,slidesToShow:3,slidesToScroll:3,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1e3,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0}}]};return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{boxShadow:3,className:"box-wrapper",style:{marginTop:"12.5%",width:"80%",padding:"3em",backgroundColor:"#2C3948",color:"white",borderRadius:"10px"}},e.data?r.a.createElement(v.a,t,e.data.map((function(e,t){return r.a.createElement(N.a,{key:t},r.a.createElement(L,Object(h.a)({lastName:e.lastName,firstName:e.firstName,photo:e.photo,age:e.age,_id:e.id},"age",e.age)))}))):r.a.createElement("h1",null,"Loading..")))}var A=a(185),I=a(176),F=a(177),D=a(178),H=a(181),G=a(180),P=a(179),_=a(81),z=a.n(_),W=a(82),R=a.n(W),J=a(83),U=a.n(J),M=a(189),Q=a(182),$=a(84),q=a.n($),K=a(85),V=a.n(K),X=a(86),Y=a.n(X),Z=Object(O.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(d.a)(Object(d.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function ee(){var e=Z(),t=Object(j.a)(),a=r.a.useState(!1),n=Object(b.a)(a,2),o=n[0],c=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement(I.a,null),r.a.createElement(F.a,{position:"fixed",className:Object(y.a)(e.appBar,Object(h.a)({},e.appBarShift,o))},r.a.createElement(D.a,null,r.a.createElement(P.a,{color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},edge:"start",className:Object(y.a)(e.menuButton,o&&e.hide)},r.a.createElement(z.a,null)),r.a.createElement("h1",{style:{marginTop:"0.2%"}}," Contact Web - Naufal "))),r.a.createElement(A.a,{className:e.drawer,variant:"persistent",anchor:"left",open:o,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(P.a,{onClick:function(){c(!1)}},"ltr"===t.direction?r.a.createElement(R.a,null):r.a.createElement(U.a,null))),r.a.createElement(G.a,null),r.a.createElement(H.a,null,r.a.createElement(M.a,{button:!0,key:"Person"},r.a.createElement(Q.a,null,r.a.createElement(q.a,null)),r.a.createElement("h5",{style:{color:"#2C3948",marginTop:"4%"}},"Naufal")),r.a.createElement(M.a,{button:!0,key:"Home"},r.a.createElement(Q.a,null,r.a.createElement(V.a,null)),r.a.createElement(l.c,{to:"/",style:{textDecoration:"none"}},r.a.createElement("h5",{style:{color:"#2C3948",marginTop:"12%"}},"Home")))),r.a.createElement(G.a,null),r.a.createElement(H.a,null,r.a.createElement(M.a,{button:!0,key:"Add Contact"},r.a.createElement(Q.a,null,r.a.createElement(Y.a,null)),r.a.createElement(l.c,{to:"/contact/add",style:{textDecoration:"none"}},r.a.createElement("h5",{style:{color:"#2C3948",marginTop:"6%"}},"New Contact"))))))}var te=Object(O.a)((function(e){return{root:{display:"flex"},drawerHeader:Object(d.a)(Object(d.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function ae(){var e=te(),t=(Object(j.a)(),Object(s.b)()),a=Object(s.c)((function(e){return e.contactReducer.contacts})),o=Object(n.useState)(!1),c=Object(b.a)(o,2),l=c[0];c[1];return Object(n.useEffect)((function(){t((function(e,t){fetch("https://simple-contact-crud.herokuapp.com/contact",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e({type:"FETCH_CONTACTS",payload:t})}))}))}),[t]),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("h1",null,"HOME"),r.a.createElement(ee,null),r.a.createElement(B,{title:"Contact",data:a.data}),r.a.createElement("main",{className:Object(y.a)(e.content,Object(h.a)({},e.contentShift,l))}))}var ne=a(183),re=a(91),oe=a.n(re),ce=a(93),le=a.n(ce),ie=a(92),se=a.n(ie),me=a(184),ue=a(188);var de=a(186);function pe(e){var t=Object(i.f)(),a=Object(n.useState)(""),o=Object(b.a)(a,2),c=o[0],l=o[1],s=Object(n.useState)(""),m=Object(b.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)(""),f=Object(b.a)(p,2),g=f[0],E=f[1],h=Object(n.useState)(""),y=Object(b.a)(h,2),O=y[0],j=y[1],C=Object(n.useState)(),v=Object(b.a)(C,2),N=v[0],S=v[1];Object(n.useEffect)((function(){e.data&&(l(e.data.id),d(e.data.firstName),E(e.data.lastName),j(e.data.photo))}),[e.data]);return r.a.createElement("div",{className:"container"},r.a.createElement(de.a,{onSubmit:function(a){return function(a){console.log(e),a.preventDefault(),e.onSubmit({_id:c,firstName:u,lastName:g,age:Number(N),photo:O}),t.push("/")}(a)}},r.a.createElement(de.a.Group,{controlId:"formBasicEmail"},r.a.createElement(de.a.Label,null,"First Name"),r.a.createElement(de.a.Control,{type:"text",placeholder:"Input First Name",value:u,onChange:function(e){return function(e){d(e.target.value)}(e)}})),r.a.createElement(de.a.Group,{controlId:"formBasicEmail"},r.a.createElement(de.a.Label,null,"Last Name"),r.a.createElement(de.a.Control,{type:"text",placeholder:"Input Last Name",value:g,onChange:function(e){return function(e){E(e.target.value)}(e)}})),r.a.createElement(de.a.Group,{controlId:"formBasicEmail"},r.a.createElement(de.a.Label,null,"Age"),r.a.createElement(de.a.Control,{type:"number",placeholder:"Input Age",value:N,onChange:function(e){return function(e){S(e.target.value)}(e)}})),r.a.createElement(de.a.Group,{controlId:"formBasicEmail"},r.a.createElement(de.a.Label,null,"Photo"),r.a.createElement(de.a.Control,{type:"text",placeholder:"Input Photo",value:O,onChange:function(e){return function(e){j(e.target.value)}(e)}})),r.a.createElement(ue.a,{variant:"primary",type:"submit"},"Submit")))}function fe(e){var t=Object(i.f)(),a=e.data,n=Object(s.b)(),o=function(a){n(function(e,t){return function(a,n){console.log(e),console.log(t,"NEW CONT"),fetch("https://simple-contact-crud.herokuapp.com/contact/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log(e),a({type:"UPDATE_CONTACT",payload:e.data})}))}}(e.data.id,a)),t.push("/")};return r.a.createElement(me.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(me.a.Header,{closeButton:!0},r.a.createElement(me.a.Title,{id:"contained-modal-title-vcenter"},e.data.firstName)),r.a.createElement(me.a.Body,null,r.a.createElement(pe,{onSubmit:function(e){return o(e)},data:a})),r.a.createElement(me.a.Footer,null,r.a.createElement(ue.a,{onClick:e.onHide},"Close")))}function ge(){var e=Object(i.g)().id,t=Object(i.f)(),a=Object(s.b)(),o=Object(s.c)((function(e){return e.contactReducer.contact})),c=r.a.useState(!1),l=Object(b.a)(c,2),m=l[0],u=l[1];Object(n.useEffect)((function(){a(function(e){return function(t,a){fetch("https://simple-contact-crud.herokuapp.com/contact/".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){t({type:"FETCH_CONTACT",payload:e.data})}))}}(e))}),[a]);var d=function(){a(function(e){return function(t,a){console.log(),fetch("https://simple-contact-crud.herokuapp.com/contact/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}}(e)),t.push("/")};return r.a.createElement("div",null,r.a.createElement(ee,null),r.a.createElement(fe,{show:m,data:o,onHide:function(){return u(!1)}}),r.a.createElement("div",{className:"container",style:{marginTop:"12.5%"}},r.a.createElement(S.a,{style:{background:"black"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3 col-md-6 col-lg-4"},r.a.createElement("img",{src:o.photo,style:{width:"25em",height:"28.5em"}})),r.a.createElement("div",{className:"col-sm-9 col-md-6 col-lg-8"},r.a.createElement("h1",{style:{textAlign:"center",color:"white",marginTop:"3%",marginBottom:"2%"}}," ",o.firstName," "),r.a.createElement("h6",{style:{textAlign:"center",color:"white",fontSize:"21px"}}," ",o.lastName," "),r.a.createElement("div",{className:"row",style:{marginBottom:"3%",marginLeft:"5%",marginTop:"10%"}},r.a.createElement(ne.a,{onClick:function(){return u(!0)}},r.a.createElement(oe.a,{style:{color:"#7CCFA9",fontSize:"35px"}}),r.a.createElement("h6",{style:{color:"white",marginLeft:"2%",marginTop:"1.1%",fontSize:"20px"}},"Update")),r.a.createElement(se.a,{style:{color:"#FF707D",fontSize:"35px",marginLeft:"7.5%",marginTop:".5%"}}),r.a.createElement("h6",{style:{color:"white",marginLeft:"2%",marginTop:"1%",fontSize:"20px"}}," ",o.age," years old")),r.a.createElement("div",{className:"row",style:{marginBottom:"7.5%",marginLeft:"5%"}},r.a.createElement(ne.a,{onClick:function(){return d()}},r.a.createElement(le.a,{style:{color:"#FF707D",fontSize:"35px"}}),r.a.createElement("h6",{style:{color:"white",marginLeft:"2%",marginTop:".9%",fontSize:"20px"}},"Delete"))))))))}function Ee(){var e=Object(i.f)(),t=Object(s.b)(),a=Object(n.useState)(""),o=Object(b.a)(a,2),c=(o[0],o[1],Object(n.useState)("")),l=Object(b.a)(c,2),m=l[0],u=l[1],d=Object(n.useState)(""),p=Object(b.a)(d,2),f=p[0],g=p[1],E=Object(n.useState)(""),h=Object(b.a)(E,2),y=h[0],O=h[1],j=Object(n.useState)(),C=Object(b.a)(j,2),v=C[0],N=C[1];var S=function(a){var n,r={firstName:m,lastName:f,age:Number(v),photo:y};t((n=r,function(e,t){t().contactReducer.pokemons,fetch("https://simple-contact-crud.herokuapp.com/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){e({type:"ADD_CONTACT",payload:t})})).catch((function(e){return console.log(e)}))})),e.push("/")};return r.a.createElement("div",{className:"container"},r.a.createElement(de.a,{onSubmit:function(e){return S()}},r.a.createElement(de.a.Group,{controlId:"formBasicEmail"},r.a.createElement(de.a.Label,null,"First Name"),r.a.createElement(de.a.Control,{type:"text",placeholder:"Input First Name",value:m,onChange:function(e){return function(e){u(e.target.value)}(e)}})),r.a.createElement(de.a.Group,{controlId:"formBasicEmail"},r.a.createElement(de.a.Label,null,"Last Name"),r.a.createElement(de.a.Control,{type:"text",placeholder:"Input Last Name",value:f,onChange:function(e){return function(e){g(e.target.value)}(e)}})),r.a.createElement(de.a.Group,{controlId:"formBasicEmail"},r.a.createElement(de.a.Label,null,"Age"),r.a.createElement(de.a.Control,{type:"number",placeholder:"Input Age",value:v,onChange:function(e){return function(e){N(e.target.value)}(e)}})),r.a.createElement(de.a.Group,{controlId:"formBasicEmail"},r.a.createElement(de.a.Label,null,"Photo"),r.a.createElement(de.a.Control,{type:"text",placeholder:"Input Photo",value:y,onChange:function(e){return function(e){O(e.target.value)}(e)}})),r.a.createElement(ue.a,{variant:"primary",type:"submit"},"Submit")))}a(131);var he={bodyWrapper:{backgroundColor:"#2D3848",height:"100vh",width:"100%"},pageWrapper:{fontFamily:"Quicksand"}};var be=function(){return r.a.createElement(s.a,{store:E},r.a.createElement(l.a,null,r.a.createElement("div",{className:"",style:he.pageWrapper},r.a.createElement("div",{className:"",style:he.bodyWrapper},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:ae}),r.a.createElement(i.a,{path:"/contact/add",component:Ee}),r.a.createElement(i.a,{path:"/:id",component:ge}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.aa1aceec.chunk.js.map