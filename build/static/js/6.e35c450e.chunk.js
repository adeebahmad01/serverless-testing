(this["webpackJsonpportfolio-3.0"]=this["webpackJsonpportfolio-3.0"]||[]).push([[6,16],{32:function(e,t,s){"use strict";s.r(t);var n=s(18),c=s(2),r=(s(75),s(25)),a=s(9),i=s(7);t.default=function(){var e=Object(a.g)(),t=Object(c.useState)(""),s=Object(n.a)(t,2),l=s[0],o=s[1],d=Object(c.useState)(""),u=Object(n.a)(d,2),p=u[0],j=u[1],b=Object(c.useState)(!0),h=Object(n.a)(b,2),m=h[0],f=h[1],x=Object(c.useRef)(document.createElement("button")),w=Object(c.useRef)(document.createElement("h1"));return Object(i.jsx)("div",{className:"login_container",children:Object(i.jsxs)("form",{id:"accesspanel",autoComplete:"off",onSubmit:function(t){x.current.classList.add("c-btn__loading"),x.current.disabled=!0,t.preventDefault(),w.current.classList.add("poweron"),r.b.auth().signInWithEmailAndPassword(l,p).then((function(){e.push("/panel/add/projects")})).catch((function(e){f(!1),w.current.style.setProperty("--neon","red"),x.current.disabled=!1,setTimeout((function(){return x.current.classList.remove("c-btn__finished")}),3e3),x.current.classList.remove("c-btn__loading"),x.current.classList.add("c-btn__finished")}))},action:"/",className:"adding_form",method:"post",children:[Object(i.jsx)("h1",{ref:w,className:"light_heading",id:"litheader",children:"ADEEB AHMAD"}),Object(i.jsxs)("div",{className:"inset",children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("label",{htmlFor:"email",children:"Email"}),Object(i.jsx)("input",{value:l,autoComplete:"off",className:"browser-default",onChange:function(e){return o(e.target.value)},type:"email",id:"email",placeholder:"Email"})]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("label",{htmlFor:"password",children:"Password"}),Object(i.jsx)("input",{value:p,autoComplete:"off",className:"browser-default",onChange:function(e){return j(e.target.value)},type:"password",id:"password",placeholder:"Password"})]})]}),Object(i.jsxs)("button",{ref:x,className:"c-btn__continue browser-default",id:"continue-btn",children:[Object(i.jsx)("span",{children:"Continue"}),Object(i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 37 37",xmlSpace:"preserve",className:"u-loading",id:"loading",children:Object(i.jsx)("path",{className:"circ path",style:{fill:"none",stroke:"#fff",strokeWidth:3,strokeLinejoin:"round",strokeMiterlimit:10},d:"\r M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"})}),m?Object(i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 37 37",xmlSpace:"preserve",className:"u-success",children:Object(i.jsx)("polyline",{className:"tick path",style:{fill:"none",stroke:"#fff",strokeWidth:3,strokeLinejoin:"round",strokeMiterlimit:10},points:"\r 11.6,20 15.9,24.2 26.4,13.8 "})}):Object(i.jsx)("span",{style:{fontSize:"2.5rem"},className:"u-success",children:"\xd7"})]})]})})}},75:function(e,t,s){}}]);
//# sourceMappingURL=6.e35c450e.chunk.js.map