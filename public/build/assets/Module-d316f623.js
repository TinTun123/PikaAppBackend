import{r as o,W as u,j as e,F as h,B as x}from"./app-fed2a0d1.js";import j from"./Lessons-6fc0605d.js";import{a as i}from"./Dropdown-030447f3.js";import{C as f}from"./ConfirmModal-c156a444.js";import{m as l,A as g}from"./Button-f318903a.js";import"./LessonForm-a04313bd.js";import"./Modal-7d9c6350.js";import"./Input-e0a25325.js";import"./Textarea-bc40bf29.js";import"./AudioUploader-bb2266a4.js";import"./LessonCard-3d9f1161.js";import"./index.esm-b09dd7c1.js";const E=({module:t,courseId:n,handleEdit:a})=>{const[s,c]=o.useState(!1),[d,r]=o.useState(!1),{delete:m}=u({}),p=()=>{m(route("module.destroy",t==null?void 0:t.id),{preserveScroll:!0,onSuccess:()=>{r(!1)}})};return e.jsxs(l.div,{layout:!0,layoutRoot:!0,children:[e.jsx(f,{label:"Are you sure you want to delete the module? Think twice dude!",onCancel:()=>r(!1),onConfirm:p,show:d}),e.jsxs("div",{className:"flex bg-gray-50 p-2 my-2 items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:`transition-all hover:bg-primary hover:text-white rounded-full p-2 md:p-3 duration-300  ${s?"rotate-90":""}`,onClick:()=>c(!s),children:e.jsx(h,{})}),e.jsxs("h4",{className:"font-medium text-sm line-clamp-3",children:["Module ",t.number," - ",t.title]})]}),e.jsx("div",{className:"flex mr-2 items-center",children:e.jsxs(i,{className:"bg-white",label:"",renderTrigger:()=>e.jsx("div",{className:"cursor-pointer",children:e.jsx(x,{})}),children:[e.jsx(i.Item,{onClick:()=>a({...t,lessons:null}),children:"Edit"}),e.jsx(i.Item,{onClick:()=>r(!0),children:"Delete"})]})})]}),e.jsx(g,{children:s&&e.jsx(l.div,{layout:!0,initial:{height:"0px"},animate:{height:"auto"},exit:{height:"0px",opacity:0},transition:{duration:.2},children:e.jsx(j,{lessons:t.lessons,moduleId:t.id,courseId:n})})})]})};export{E as default};