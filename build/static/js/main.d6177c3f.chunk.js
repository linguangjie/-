(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{173:function(e,t,n){},190:function(e,t,n){},315:function(e,t,n){"use strict";n.r(t);var a=n(26),c=n(0),i=n.n(c),l=n(31),r=n.n(l),s=(n(173),n(86)),o=n(139),u=n(64),j=n(319),d=n(320),b=n(83),O=n(50),h=n(318),x=n(140),m=n.n(x),f=(n(190),[{title:"\u4efb\u52a1\u540d",dataIndex:"mission",key:"mission",align:"center"},{title:"\u5362\u5e03",dataIndex:"rouble",key:"rouble",align:"center"},{title:"\u4eba\u6c11\u5e01",dataIndex:"RMB",key:"RMB",align:"center"},{title:"\u7f8e\u5143",dataIndex:"dollar",key:"dollar",align:"center"}]),p=[{title:"\u4efb\u52a1\u540d",dataIndex:"mission",key:"mission",align:"center",render:function(e){return Object(a.jsx)("span",{style:{textDecoration:"line-through"},children:e})}},{title:"\u5362\u5e03",dataIndex:"rouble",key:"rouble",align:"center"},{title:"\u4eba\u6c11\u5e01",dataIndex:"RMB",key:"RMB",align:"center"},{title:"\u7f8e\u5143",dataIndex:"dollar",key:"dollar",align:"center"}];var g=function(){var e=Object(c.useState)([{key:"\u6d4b\u8bd5",mission:"\u6d4b\u8bd5",rouble:1,RMB:1,dollar:1}]),t=Object(u.a)(e,2),n=t[0],i=t[1],l=Object(c.useState)(1),r=Object(u.a)(l,2),x=r[0],g=r[1],v=Object(c.useState)([]),y=Object(u.a)(v,2),k=y[0],I=y[1],S=Object(c.useState)(0),B=Object(u.a)(S,2),M=B[0],R=B[1],C=Object(c.useState)(null),N=Object(u.a)(C,2),F=N[0],w=N[1],q=Object(c.useState)([]),D=Object(u.a)(q,2),E=D[0],T=D[1];Object(c.useEffect)((function(){m.a.get("https://api.globus.furniture/forex").then((function(e){w(e.data)})).catch((function(e){console.log(e)}))}),[]);var J=function(e,t){var n,a=0,c=Object(o.a)(e);try{for(c.s();!(n=c.n()).done;){var i=n.value;a+=Number(i.RMB)}}catch(l){c.e(l)}finally{c.f()}t(a)};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)(j.a,{onFinish:function(e){var t,a,c,l=e.mission,r=e.price,o=e.currency,u=F.RUB,j=F.USD,d=Object(s.a)(n);({"\u5362\u5e03":function(){t=r,a=r/u.value,c=a*j.value},"\u4eba\u6c11\u5e01":function(){a=r,t=r*u.value,c=r*j.value},"\u7f8e\u5143":function(){c=r,a=r/j.value,t=a*u.value}})[o](),d.push({key:l,mission:l,rouble:t,RMB:a,dollar:c}),i(d),J(d,g)},children:[Object(a.jsx)(j.a.Item,{label:"\u4efb\u52a1",name:"mission",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4efb\u52a1"}],children:Object(a.jsx)(d.a,{})}),Object(a.jsx)(j.a.Item,{label:"\u4ef7\u683c",name:"price",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4ef7\u683c"}],children:Object(a.jsx)(d.a,{})}),Object(a.jsx)(j.a.Item,{label:"\u8d27\u5e01",name:"currency",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8d27\u5e01"}],children:Object(a.jsxs)(b.a,{allowClear:!0,children:[Object(a.jsx)(b.a.Option,{value:"\u5362\u5e03",children:"\u5362\u5e03"}),Object(a.jsx)(b.a.Option,{value:"\u4eba\u6c11\u5e01",children:"\u4eba\u6c11\u5e01"}),Object(a.jsx)(b.a.Option,{value:"\u7f8e\u5143",children:"\u7f8e\u5143"})]})}),Object(a.jsx)(j.a.Item,{children:Object(a.jsx)(O.a,{type:"primary",htmlType:"submit",children:"\u6dfb\u52a0"})})]}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)("div",{className:"left",children:[Object(a.jsx)("div",{className:"btn",children:Object(a.jsx)(O.a,{type:"primary",onClick:function(){if(0!==E.length){var e=[],t=Object(s.a)(n);E.forEach((function(n){for(var a=0;a<t.length;a++){n===t[a].key&&(e.push(t.splice(a,1)[0]),a--)}})),i(t),I([].concat(Object(s.a)(k),e)),J(t,g),J([].concat(Object(s.a)(k),e),R)}},children:"\u5b8c\u6210"})}),Object(a.jsx)(h.a,{rowSelection:{type:"checkbox",onChange:function(e,t){T(e)}},dataSource:n,columns:f,pagination:!1}),Object(a.jsxs)("div",{children:["\u603b\u5171\uff1a",x,"\u5143"]})]}),Object(a.jsxs)("div",{className:"right",children:[Object(a.jsx)(h.a,{dataSource:k,columns:p,pagination:!1}),Object(a.jsxs)("div",{children:["\u603b\u5171\uff1a",M,"\u5143"]})]})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,321)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),i(e),l(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),v()}},[[315,1,2]]]);
//# sourceMappingURL=main.d6177c3f.chunk.js.map