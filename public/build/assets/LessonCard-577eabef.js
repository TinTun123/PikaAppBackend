import{r as l,W as u,j as e,B as h}from"./app-dbf16eb4.js";import{D as a}from"./Tooltip-563aaaa9.js";import{C as x}from"./ConfirmModal-dd79b848.js";import"./Modal-7716676a.js";import"./Button-1e32cf05.js";const w=({lesson:s,handleEdit:o})=>{const[i,r]=l.useState(!1),[t,d]=l.useState(null),{delete:n}=u({}),c=p=>{d(p),r(!0)},m=()=>{n(route("lessons.destroy",t==null?void 0:t.id),{preserveScroll:!0,onSuccess:()=>{r(!0)}})};return e.jsxs("div",{children:[e.jsx(x,{onCancel:()=>r(!1),onConfirm:m,show:i}),e.jsxs("div",{className:"group border p-3",children:[e.jsx("div",{className:"relative aspect-video w-full ",children:e.jsx("iframe",{src:`https://player.vimeo.com/video/${s.video}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`,allow:"autoplay; fullscreen; picture-in-picture",width:426,height:240,frameborder:"0","data-ready":"true",style:{width:"100%",height:"100%"}})}),e.jsxs("div",{className:"flex mt-3",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("p",{className:"font-medium text-sm",children:s.title}),e.jsxs("p",{className:"text-[12px]",children:["Lesson - ",e.jsx("span",{className:"font-semibold",children:s.number})]})]}),e.jsxs(a,{className:"bg-white",label:"",renderTrigger:()=>e.jsx("div",{className:"cursor-pointer",children:e.jsx(h,{})}),children:[e.jsx(a.Item,{onClick:()=>o(s),children:"Edit"}),e.jsx(a.Item,{onClick:()=>c(s),children:"Delete"})]})]})]})]})};export{w as default};