import{W as x,r as h,j as e,M as b,B as j}from"./app-bf4b4a66.js";import{I as g}from"./Input-66bf8bd1.js";import{I as v}from"./ImageUploader-2cc5dd73.js";import{C as N}from"./Checkbox-a4887038.js";const S=({course:a,showForm:t,setShowForm:d,selectedTestimonial:o,type:c})=>{const{data:l,setData:r,errors:n,processing:p,post:u}=x({course_id:a.id,published:!0}),m=s=>{r(i=>({...i,file:s}))};h.useEffect(()=>{o.id&&r(o)},[t,o]);const f=s=>{s.preventDefault();let i=c==="create"?route("testimonial.store"):route("testimonial.update",o.id);u(i,{preserveScroll:!0,onSuccess:()=>{d(!1),r({course_id:a.id,published:!0})}})};return e.jsx(b,{onClose:()=>d(!1),show:t,children:e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"font-medium",children:"Type"}),e.jsx("div",{className:"flex items-center gap-3",children:["video","photo"].map(s=>e.jsxs("div",{onClick:()=>r(i=>({...i,type:s,file:null})),className:`w-full cursor-pointer border transition-all text-center p-2 ${s===l.type?"border border-primary":""}`,children:[" ",s," "]},s))})]}),l.type==="video"&&e.jsx(g,{value:(l==null?void 0:l.file)??"",label:"Vimeo ID",onChange:s=>r("file",s.target.value)}),l.type==="photo"&&e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"font-medium",children:"Photo"}),e.jsx(v,{handleUpload:m,data:{image:l==null?void 0:l.file},setData:r,error:n.image})]}),e.jsx(N,{checked:l.published,onChange:s=>r("published",s.target.checked),id:"published",label:"Published"})]}),e.jsx(j,{type:"submit",loading:p,className:"w-full mt-5",children:"Submit"})]})})};export{S as default};
