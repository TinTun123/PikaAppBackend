import{W as x,r as h,j as e}from"./app-fed2a0d1.js";import{M as b}from"./Modal-7d9c6350.js";import{I as j}from"./Input-e0a25325.js";import{I as g}from"./ImageUploader-f175f896.js";import{C as v}from"./Checkbox-139dbaaa.js";import{B as N}from"./Button-f318903a.js";const E=({course:t,showForm:a,setShowForm:d,selectedTestimonial:i,type:c})=>{const{data:r,setData:l,errors:n,processing:p,post:m}=x({course_id:t.id,published:!0}),u=s=>{l(o=>({...o,file:s}))};h.useEffect(()=>{i.id&&l(i)},[a,i]);const f=s=>{s.preventDefault();let o=c==="create"?route("testimonial.store"):route("testimonial.update",i.id);m(o,{preserveScroll:!0,onSuccess:()=>{d(!1),l({course_id:t.id,published:!0})}})};return e.jsx(b,{onClose:()=>d(!1),show:a,children:e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"font-medium",children:"Type"}),e.jsx("div",{className:"flex items-center gap-3",children:["video","photo"].map(s=>e.jsxs("div",{onClick:()=>l(o=>({...o,type:s,file:null})),className:`w-full cursor-pointer border transition-all text-center p-2 ${s===r.type?"border border-primary":""}`,children:[" ",s," "]},s))})]}),r.type==="video"&&e.jsx(j,{value:(r==null?void 0:r.file)??"",label:"Vimeo ID",onChange:s=>l("file",s.target.value)}),r.type==="photo"&&e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"font-medium",children:"Photo"}),e.jsx(g,{handleUpload:u,data:{image:r==null?void 0:r.file},setData:l,error:n.image})]}),e.jsx(v,{checked:r.published,onChange:s=>l("published",s.target.checked),id:"published",label:"Published"})]}),e.jsx(N,{type:"submit",loading:p,className:"w-full mt-5",children:"Submit"})]})})};export{E as default};