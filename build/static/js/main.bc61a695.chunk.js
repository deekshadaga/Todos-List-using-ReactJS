(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),o=n.n(s),l=(n(25),n(11)),r=n(20),i=(n(26),n(8)),b=n(0);function d(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchbar?Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})}d.defaultProps={title:"hello, Title?",searchbar:!0};var j=function(e){var t=e.todo,n=e.onDelete;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.desc}),Object(b.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){n(t)},children:" Delete"})]}),Object(b.jsx)("hr",{})]})},h=function(e){return Object(b.jsxs)("div",{className:"container ",style:{minHeight:"60vh",margin:"40px auto"},children:[Object(b.jsx)("h3",{children:"Todo List"}),0===e.todos.length?"No todos to display":e.todos.map((function(t){return Object(b.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)}))]})},u=function(e){var t=e.addTodo,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],o=c[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),d=i[0],j=i[1];return Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h3",{children:"Add a Todo"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&d?(t(s,d),o(""),j("")):alert("Title or Decs can not be blank")},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(b.jsx)("input",{type:"text",value:s,onChange:function(e){o(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(b.jsx)("input",{type:"text",value:d,onChange:function(e){j(e.target.value)},className:"form-control",id:"desc"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-success btn-sm",children:"Add Todo"})]})]})},m=function(){return Object(b.jsx)("footer",{className:"bg-dark text-light py-3",children:Object(b.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodosList.com"})})},O=function(){return Object(b.jsxs)("div",{children:["This is an about MyComponents",Object(b.jsx)("p",{children:"This example shows how nested routing works. The route /topics loads the Topics component, which renders any further Route's conditionally on the paths :id value."})]})},x=n(2);var p=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){j(o.filter((function(t){return t!==e}))),localStorage.getItem("todos",JSON.stringify(o))},n=function(e,t){var n={sno:0===o.length?1:o[o.length-1].sno+1,title:e,desc:t};j([].concat(Object(r.a)(o),[n]))},c=Object(a.useState)(e),s=Object(l.a)(c,2),o=s[0],j=s[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(b.jsxs)(i.a,{children:[Object(b.jsx)(d,{title:"My Todos List"}),Object(b.jsxs)(x.c,{children:[Object(b.jsx)(x.a,{exact:!0,path:"/",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u,{addTodo:n}),Object(b.jsx)(h,{todos:o,onDelete:t})]})}}),Object(b.jsx)(x.a,{path:"/about",children:Object(b.jsx)(O,{})})]}),Object(b.jsx)(m,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.bc61a695.chunk.js.map