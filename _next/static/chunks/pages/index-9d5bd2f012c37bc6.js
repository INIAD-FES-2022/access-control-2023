(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(9175)}])},9175:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return x}});var a=l(5893),t=l(7294),o=l(435),i=l.n(o);let c=e=>(0,a.jsxs)("div",{className:i().container,children:[null!==e.label&&(0,a.jsx)("label",{htmlFor:e.name,children:e.label}),(0,a.jsx)("input",{type:"text",name:e.name,id:e.name,value:e.value,onChange:e.onChange,className:i().input})]});var s=l(6316),u=l.n(s);let d=e=>(0,a.jsxs)("div",{className:u().container,children:[null!==e.label&&(0,a.jsx)("label",{htmlFor:e.name,children:e.label}),(0,a.jsxs)("select",{name:e.name,id:e.name,onChange:e.onChange,children:[(0,a.jsx)("option",{value:"",hidden:!0,selected:null===e.checkedIndex,children:"選択してください"}),e.options.map((n,l)=>(0,a.jsx)("option",{value:l,selected:e.checkedIndex===l,children:n},n))]})]});var r=l(2729),h=l.n(r);let m={age:["10代","20代","30代","40代","50代","60代以上"],gender:["男性","女性","その他","回答しない"],occupation:["学生","会社員","自営業","主婦","その他"],home:["地元","その他"],composition:["一人","家族(子どもあり)","家族(子どもなし)","学生グループ","恋人","友人","その他"]};var x=()=>{var e,n,l,o,i,s;let[u,r]=(0,t.useState)({}),x=e=>{let n=e.target.value,l=e.target.name;r(e=>({...e,[l]:n}))},_=(0,t.useMemo)(()=>{var e;let n=Object.values(u).some(e=>void 0===e);return n||(null!==(e=u.number)&&void 0!==e?e:-1)<=0},[u]);return(0,a.jsxs)("div",{className:h().container,children:[(0,a.jsx)("div",{children:(0,a.jsx)("h1",{className:h().title,children:"赤羽台祭 入退構サービス"})}),(0,a.jsxs)("main",{children:[(0,a.jsx)(d,{label:"年齢",name:"age",options:m.age,checkedIndex:null!==(e=u.age)&&void 0!==e?e:null,onChange:x}),(0,a.jsx)(d,{label:"性別",name:"gender",options:m.gender,checkedIndex:null!==(n=u.gender)&&void 0!==n?n:null,onChange:x}),(0,a.jsx)(d,{label:"職業",name:"occupation",options:m.occupation,checkedIndex:null!==(l=u.occupation)&&void 0!==l?l:null,onChange:x}),(0,a.jsx)(d,{label:"出身",name:"home",options:m.home,checkedIndex:null!==(o=u.home)&&void 0!==o?o:null,onChange:x}),(0,a.jsx)(c,{label:"人数",name:"number",value:null!==(i=u.number)&&void 0!==i?i:0,onChange:e=>{let n=e.target.value,l=e.target.name,a=!isNaN(Number(n))||""===n;a&&r(e=>({...e,[l]:n}))}}),(0,a.jsx)(d,{label:"グループ構成",name:"composition",options:m.composition,checkedIndex:null!==(s=u.composition)&&void 0!==s?s:null,onChange:x}),(0,a.jsx)("button",{disabled:_,onClick:()=>{},className:h().button,children:"送信"})]})]})}},435:function(e){e.exports={container:"Input_container__UziEO",input:"Input_input__cDdvD"}},6316:function(e){e.exports={container:"Select_container__J_rRP"}},2729:function(e){e.exports={container:"index_container___q52_",title:"index_title__k0g7D",button:"index_button__STkB1"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);