import{W as g,r as u,j as s}from"./app-6a54aa77.js";import{I as c}from"./Input-8e9be8be.js";import{T as d}from"./Textarea-045079ae.js";import{B as j}from"./Button-b247fbc3.js";import{M as v}from"./Modal-9376f476.js";const M=({showForm:o,setShowForm:n,courseId:a,module:r})=>{const{data:e,setData:i,processing:p,errors:l,post:f,clearErrors:m}=g(r.id?r:{course_id:a}),x=t=>{t.preventDefault();let b=r.id?route("module.update",r.id):route("module.store");f(b,{preserveScroll:!0,onSuccess:()=>n(!1)})};return u.useEffect(()=>{r.id&&i(r)},[r]),u.useEffect(()=>{o&&(r.id||i({course_id:a})),m()},[o]),s.jsx(v,{show:o,onClose:()=>n(!1),children:s.jsxs("form",{onSubmit:x,className:"flex flex-col gap-3",children:[s.jsx(c,{value:(e==null?void 0:e.title)??"",onChange:t=>i("title",t.target.value),label:"Title",error:l.title}),s.jsx(c,{type:"number",value:(e==null?void 0:e.number)??"",onChange:t=>i("number",t.target.value),label:"Number",error:l.number}),s.jsx(d,{error:l.description,rows:4,value:(e==null?void 0:e.description)??"",label:"Description",onChange:t=>i("description",t.target.value)}),s.jsx(j,{loading:p,type:"submit",children:"Submit"})]})})};export{M as default};