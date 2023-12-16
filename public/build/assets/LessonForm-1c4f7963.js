import{j as r,W as p,r as n}from"./app-b64a3f89.js";import{M as g}from"./Modal-31e6ab60.js";import{I as u}from"./Input-7c739dbf.js";import{B as d}from"./Button-580a0204.js";import"./Tooltip-646db666.js";const j=o=>r.jsxs(r.Fragment,{children:[o.label&&r.jsx("label",{className:"font-medium",children:o.label}),r.jsx("textarea",{...o,className:"w-[100%] border-primary border-[.1px]  focus:ring-4 focus:ring-primary focus:ring-opacity-10 p-2 placeholder:text-gray-400  "}),o.error&&r.jsx("p",{className:"text-red-500 text-sm",children:o.error})]}),v=({showForm:o,setShowForm:c,lesson:l,latestLessonNumber:m,courseId:a})=>{const{data:e,setData:s,errors:i,post:f}=p(l??{});n.useEffect(()=>{s(l)},[l]);const x=t=>{t.preventDefault();let b=l?route("lessons.update",l.id):route("lessons.store");f(b,{preserveScroll:!0,onSuccess:()=>{c(!1)}})};return n.useEffect(()=>{console.log(m),o&&!l&&s({number:m+1,course_id:a})},[o,l]),n.useEffect(()=>{console.log(a),s(t=>({...t,course_id:a}))},[a]),r.jsx(g,{show:o,onClose:()=>c(!1),children:r.jsxs("form",{onSubmit:x,className:"flex flex-col gap-3",children:[r.jsx(u,{value:(e==null?void 0:e.title)??"",onChange:t=>s("title",t.target.value),label:"Title",error:i.title}),r.jsx(u,{value:(e==null?void 0:e.video)??"",onChange:t=>s("video",t.target.value),label:"Vimeo ID",error:i.video}),r.jsx(u,{type:"number",value:(e==null?void 0:e.number)??"",onChange:t=>s("number",t.target.value),label:"Number",error:i.number}),r.jsx(j,{error:i.description,rows:4,value:(e==null?void 0:e.description)??"",label:"Description",onChange:t=>s("description",t.target.value)}),r.jsx(d,{type:"submit",children:"Submit"})]})})},E=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));export{v as L,j as T,E as a};
