import{r as o,W as u,j as e,F as h,B as x}from"./app-f4743089.js";import j from"./Lessons-7b5591b1.js";import{D as i}from"./Tooltip-8f55ef20.js";import{C as f}from"./ConfirmModal-817ab9a2.js";import{m as l,A as g}from"./Button-5d0bd51e.js";import"./LessonForm-5d36a08a.js";import"./Modal-0d004a72.js";import"./Input-76a8ec44.js";import"./Textarea-f90a160a.js";import"./LessonCard-c1ffa470.js";import"./index.esm-edd1bfa1.js";const S=({module:t,courseId:n,handleEdit:a})=>{const[s,d]=o.useState(!1),[c,r]=o.useState(!1),{delete:m}=u({}),p=()=>{m(route("module.destroy",t==null?void 0:t.id),{preserveScroll:!0,onSuccess:()=>{r(!1)}})};return e.jsxs(l.div,{layout:!0,layoutRoot:!0,children:[e.jsx(f,{label:"Are you sure you want to delete the module? Think twice dude!",onCancel:()=>r(!1),onConfirm:p,show:c}),e.jsxs("div",{className:"flex bg-gray-50 p-2 my-2 items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:`transition-all hover:bg-primary hover:text-white rounded-full p-2 md:p-3 duration-300  ${s?"rotate-90":""}`,onClick:()=>d(!s),children:e.jsx(h,{})}),e.jsxs("h4",{className:"font-medium text-sm line-clamp-3",children:["Module ",t.number," - ",t.title]})]}),e.jsx("div",{className:"flex mr-2 items-center",children:e.jsxs(i,{className:"bg-white",label:"",renderTrigger:()=>e.jsx("div",{className:"cursor-pointer",children:e.jsx(x,{})}),children:[e.jsx(i.Item,{onClick:()=>a({...t,videos:null}),children:"Edit"}),e.jsx(i.Item,{onClick:()=>r(!0),children:"Delete"})]})})]}),e.jsx(g,{children:s&&e.jsx(l.div,{layout:!0,initial:{height:"0px"},animate:{height:"auto"},exit:{height:"0px",opacity:0},transition:{duration:.2},children:e.jsx(j,{lessons:t.videos,moduleId:t.id,courseId:n})})})]})};export{S as default};