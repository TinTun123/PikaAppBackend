import{r as t,W as d,j as e,B as w}from"./app-ca5fa7a3.js";import{T,a as b,b as s}from"./TableData-76932b08.js";import{B as n}from"./Button-eb39e5b5.js";import{C as y}from"./ConfirmModal-24ed9e93.js";import{P as D}from"./Paginator-2ff27ba2.js";import{D as l}from"./Dropdown-e1989ded.js";import"./Modal-6485ae4e.js";import"./Tooltip-f5f4c8bf.js";const I=({podcasts:c,prepareForEdit:i,links:p})=>{const[x,r]=t.useState(!1),[m,u]=t.useState(null),{delete:j}=d({}),f=[{field:"Title"},{field:"Status"},{field:"price"},{field:"image"},{field:"file"},{field:"category"},{field:"popular"},{field:"recommended"}],{post:a}=d({}),h=o=>{a(route("podcast.togglePopular",o),{onSuccess:()=>{}})},g=o=>{a(route("podcast.toggleRecommended",o),{onSuccess:()=>{}})},C=o=>{r(!0),u(o)},P=()=>{j(route("podcast.destroy",m.id),{onSuccess:()=>{r(!1)}})};return console.log(c),e.jsxs("div",{className:"overflow-x-scroll",children:[e.jsx(y,{onCancel:()=>r(!1),onConfirm:P,show:x}),e.jsx(T,{columns:f,children:c.map(o=>e.jsxs(b,{children:[e.jsx(s,{children:o.title}),e.jsx(s,{children:o.type}),e.jsx(s,{children:o.price}),e.jsx(s,{children:e.jsx("img",{width:100,src:o.image,alt:""})}),e.jsx(s,{children:e.jsx("audio",{controls:!0,children:e.jsx("source",{src:o.playable_file,type:"audio/mp3"})})}),e.jsx(s,{children:o.category.name}),e.jsx(s,{children:e.jsx(n,{className:"w-[120px] px-2",onClick:()=>h(o.id),children:o.popular?"Unpopular":"Make Popular"})}),e.jsx(s,{children:e.jsx(n,{className:"w-[100px] px-2",onClick:()=>g(o.id),children:o.recommended?"Remove":"Add"})}),e.jsx(s,{children:e.jsxs(l,{label:"",renderTrigger:()=>e.jsx("div",{className:"cursor-pointer",children:e.jsx(w,{})}),children:[e.jsx(l.Item,{onClick:()=>i(o),children:"Edit"}),e.jsx(l.Item,{onClick:()=>C(o),children:"Delete"})]})})]},o.id))}),e.jsx(D,{links:p})]})};export{I as default};
