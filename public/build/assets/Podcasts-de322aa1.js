import{r as c,W as n,j as e,B as T}from"./app-fd86d18c.js";import{T as D,a as b,b as r}from"./TableRow-a233dd7c.js";import{B as a}from"./Button-7cbf0b8a.js";import{D as d}from"./Tooltip-959f8c39.js";import{C as k}from"./ConfirmModal-37b8bccd.js";import"./Modal-402cc240.js";const v=({podcasts:t,prepareForEdit:i})=>{const[p,s]=c.useState(!1),[u,x]=c.useState(null),{delete:h}=n({}),j=[{field:"Title"},{field:"price"},{field:"image"},{field:"file"},{field:"category"},{field:"popular"},{field:"recommended"},{field:"description"},{field:"author"}],{post:l}=n({}),f=(o,P)=>{l(route("audio.togglePopular",o),{onSuccess:()=>{}})},m=(o,P)=>{l(route("audio.toggleRecommended",o),{onSuccess:()=>{}})},g=o=>{s(!0),x(o)},C=()=>{h(route("audio.destroy",u.id),{onSuccess:()=>{s(!1)}})};return e.jsxs("div",{children:[e.jsx(k,{onCancel:()=>s(!1),onConfirm:C,show:p}),e.jsx(D,{columns:j,children:t.map(o=>e.jsxs(b,{children:[e.jsx(r,{children:o.title}),e.jsx(r,{children:o.price}),e.jsx(r,{children:e.jsx("img",{width:100,src:o.image,alt:""})}),e.jsx(r,{children:e.jsx("audio",{controls:!0,children:e.jsx("source",{src:o.file,type:"audio/mp3"})})}),e.jsx(r,{children:o.category.name}),e.jsx(r,{children:e.jsx(a,{onClick:()=>f(o.id,o.popular),children:o.popular?"Unpopular":"Make Popular"})}),e.jsx(r,{children:e.jsx(a,{onClick:()=>m(o.id,o.recommended),children:o.recommended?"Remove":"Add"})}),e.jsx(r,{children:o.description}),e.jsx(r,{children:o.author}),e.jsx(r,{children:e.jsxs(d,{label:"",renderTrigger:()=>e.jsx("div",{className:"cursor-pointer",children:e.jsx(T,{})}),children:[e.jsx(d.Item,{onClick:()=>i(o),children:"Edit"}),e.jsx(d.Item,{onClick:()=>g(o),children:"Delete"})]})})]},o.id))})]})};export{v as default};
