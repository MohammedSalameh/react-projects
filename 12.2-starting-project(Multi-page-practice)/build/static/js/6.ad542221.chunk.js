(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{41:function(e,t,c){e.exports={card:"Card_card__ZGE02"}},42:function(e,t,c){e.exports={form:"QuoteForm_form__2-8Jz",loading:"QuoteForm_loading__2maaa",control:"QuoteForm_control__1hoIR",actions:"QuoteForm_actions__32Njh"}},55:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c(37),a=c(0),r=c(41),s=c.n(r),u=c(1),i=function(e){return Object(u.jsx)("div",{className:s.a.card,children:e.children})},l=c(15),d=c(42),j=c.n(d),b=function(e){var t=Object(a.useRef)(),c=Object(a.useRef)(),r=Object(a.useState)(!1),s=Object(o.a)(r,2),d=s[0],b=s[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(n.a,{when:d,message:function(e){return"Are you sure you want to leave?"}}),Object(u.jsx)(i,{children:Object(u.jsxs)("form",{onFocus:function(){b(!0)},className:j.a.form,onSubmit:function(n){n.preventDefault();var o=t.current.value,a=c.current.value;e.onAddQuote({author:o,text:a})},children:[e.isLoading&&Object(u.jsx)("div",{className:j.a.loading,children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:t})]}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:c})]}),Object(u.jsx)("div",{className:j.a.actions,children:Object(u.jsx)("button",{onClick:function(){b(!1)},className:"btn",children:"Add Quote"})})]})})]})},h=c(35),f=c(36);t.default=function(){var e=Object(n.h)(),t=Object(h.a)(f.b),c=t.sendRequest,o=t.status;Object(a.useEffect)((function(){"completed"===o&&e.push("/quotes")}),[o,e]);return Object(u.jsx)(b,{isLoading:"pending"===o,onAddQuote:function(e){c(e)}})}}}]);
//# sourceMappingURL=6.ad542221.chunk.js.map