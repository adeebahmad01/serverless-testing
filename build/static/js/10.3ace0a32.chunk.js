(this["webpackJsonpportfolio-3.0"]=this["webpackJsonpportfolio-3.0"]||[]).push([[10],{36:function(e,s,t){"use strict";t.r(s);var a=t(18),c=t(2),n=t(29),j=t(91),i=t(89),l=t(92),r=t(25),b=t(43),o=t(90),u=t(7);s.default=function(e){var s=e.history,t=Object(c.useState)(""),d=Object(a.a)(t,2),O=d[0],h=d[1],x=Object(c.useState)(""),p=Object(a.a)(x,2),m=p[0],v=p[1],f=Object(c.useState)(""),N=Object(a.a)(f,2),_=N[0],g=N[1],w=Object(c.useState)(""),y=Object(a.a)(w,2),C=y[0],S=y[1],R=Object(c.useRef)(null);return Object(u.jsxs)("div",{className:"add_panel",children:[Object(u.jsx)(i.a,{admin:!0}),Object(u.jsx)(l.a,{admin:!0}),Object(u.jsxs)("div",{className:"outer_container",children:[Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),_<=5&&(R.current.classList.add("show_on_success"),r.a.collection("testimonials").add({name:O,src:m,stars:_,review:C}).then((function(){R.current.classList.remove("show_on_success"),h(""),v(""),g(null),S("")})).catch((function(e){R.current.classList.remove("show_on_success")})))},className:"adding_form container",children:[Object(u.jsx)("div",{className:"loader_success",ref:R,children:Object(u.jsx)(b.a,{loader:!0})}),Object(u.jsx)("h1",{id:"litheader",className:"light_heading",children:"ADD NEW REVIEW"}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(o.a,{onChange:function(e){return h(e.target.value)},value:O,type:"text",id:"name",placeholder:"Name"}),Object(u.jsx)(o.a,{onChange:function(e){return v(e.target.value)},value:m,type:"url",id:"image",placeholder:"Image"})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(o.a,{onChange:function(e){return g(e.target.value)},value:_,type:"number",id:"stars",placeholder:"Stars (1 - 5)"}),Object(u.jsxs)("div",{className:"col-lg-6  col-12 ",children:[Object(u.jsx)("label",{htmlFor:"review",children:"Review"}),Object(u.jsxs)("div",{className:"btn_animate input_animate",children:[Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("textarea",{required:!0,style:{height:"auto"},id:"review",onChange:function(e){return S(e.target.value)},value:C,placeholder:"Review"})]})]})]}),Object(u.jsxs)("div",{className:"center btn_wrapper",children:[Object(u.jsxs)("button",{className:"btn_animate browser-default",children:[Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),"Add new Review",Object(u.jsx)("span",{className:"shift",children:"\u203a"})]}),Object(u.jsxs)(n.b,{to:"/",className:"btn_animate browser-default",children:[Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),"Home"]}),Object(u.jsxs)("div",{className:"btn_animate",style:{display:"inline-block"},onClick:function(){r.b.auth().signOut().then((function(){return s.push("/")})).catch((function(e){}))},children:[Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),"Logout \xa0",Object(u.jsx)("span",{className:"shift",children:"\u203a"})]})]})]}),Object(u.jsx)(j.a,{})]})]})}},90:function(e,s,t){"use strict";var a=t(8),c=(t(2),t(7));s.a=function(e){return Object(c.jsxs)("div",{className:"col-lg-6 col-12",children:[Object(c.jsxs)("label",{htmlFor:e.id,children:[e.id,":"]}),Object(c.jsxs)("div",{className:"btn_animate input_animate",children:[Object(c.jsx)("span",{}),Object(c.jsx)("span",{}),Object(c.jsx)("span",{}),Object(c.jsx)("span",{}),Object(c.jsx)("input",Object(a.a)(Object(a.a)({required:!0},e),{},{autoComplete:"off",className:"browser-default"}))]})]})}}}]);
//# sourceMappingURL=10.3ace0a32.chunk.js.map