(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{16:function(t,e,o){},17:function(t,e,o){},18:function(t,e,o){"use strict";o.r(e);var n=o(1),c=o(2),i=o(8),a=o.n(i),r=(o(16),o(17),o(7)),u=o(3),s=o(9),d=o(10);var l=function(t){var e=Object(c.useState)(""),o=Object(u.a)(e,2),i=o[0],a=o[1],r=Object(c.useRef)(null);return Object(c.useEffect)((function(){r.current.focus()})),Object(n.jsxs)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:i}),a("")},children:[Object(n.jsx)("input",{className:"todo-input",placeholder:"Add Todo",value:i,onChange:function(t){a(t.target.value)},ref:r}),Object(n.jsx)("button",{className:"todo-button",children:"Add Todo"})]})};var j=function(t){var e=t.todos,o=t.completeTodo,i=t.removeTodo,a=t.updateTodo,r=Object(c.useState)({id:null,value:""}),j=Object(u.a)(r,2),f=j[0],b=j[1];return f.id?Object(n.jsx)(l,{edit:f,onSubmit:function(t){a(f.id,t),b({id:null,value:""})}}):e.map((function(t,e){return Object(n.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(n.jsx)("div",{onClick:function(){return o(t.id)},children:t.text},t.id),Object(n.jsxs)("div",{className:"icons",children:[Object(n.jsx)(s.a,{onClick:function(){return i(t.id)},className:"delte-icon"}),Object(n.jsx)(d.a,{onClick:function(){return b({id:t.id,value:t.text})},className:"delete-icon"})]})]},e)}))};var f=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),o=e[0],i=e[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"What's the Plan for Today?"}),Object(n.jsx)(l,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(r.a)(o));i(e)}}}),Object(n.jsx)(j,{todos:o,completeTodo:function(t){var e=o.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));i(e)},removeTodo:function(t){var e=Object(r.a)(o).filter((function(e){return e.id!==t}));i(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&i((function(o){return o.map((function(o){return o.id===t?e:o}))}))}})]})};var b=function(){return Object(n.jsx)("div",{className:"todo-app",children:Object(n.jsx)(f,{})})};a.a.render(Object(n.jsx)(b,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.baae5de6.chunk.js.map