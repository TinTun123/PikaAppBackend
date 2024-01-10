import{W as y,r as n,j as l,b as C}from"./app-6a54aa77.js";import{M as N}from"./Modal-9376f476.js";import{I as p}from"./Input-8e9be8be.js";import{B as i}from"./Button-b247fbc3.js";import{T as m}from"./Textarea-045079ae.js";import{I as _}from"./ImageUploader-b979c7fb.js";import{C as w}from"./CustomSelect-11f5012a.js";import{A as S}from"./AudioUploader-666a65ce.js";const M=({show:d,current:t,setFormOpen:c,categories:u})=>{const{data:r,setData:o,processing:x,errors:a,post:f}=y(),h=e=>{e.preventDefault();let s=t?route("podcast.update",t.id):route("podcast.store");f(s,{onSuccess:()=>{}})};n.useEffect(()=>{o(t||{})},[t]);const g=e=>{o(s=>({...s,image:e}))},j=e=>{console.log(e),o(s=>({...s,file:e.path,playable_file:e.playable_file}))},b=async e=>{try{const s=await C.post("api/podcast/remove",{path:e});o(v=>({...v,file:null,playable_file:null,time:0}))}catch(s){console.log(s)}};return n.useEffect(()=>{console.log(r)},[r]),l.jsx(N,{show:d,onClose:()=>c(!0),children:l.jsxs("form",{onSubmit:h,className:"col-span-2 flex flex-col gap-3",children:[l.jsx(_,{handleUpload:g,data:r,setData:o,error:a.image}),!r.playable_file&&l.jsx(S,{handleUploadSuccess:j}),l.jsx("p",{className:"text-red-500 text-sm",children:a.file??""}),r.playable_file&&l.jsxs(l.Fragment,{children:[l.jsx("audio",{controls:!0,children:l.jsx("source",{src:r.playable_file,type:"audio/mp3"})}),l.jsx(i,{onClick:()=>b(r.file),className:"bg-red-600 w-[200px]",children:"Remove"})]}),l.jsx(p,{value:(r==null?void 0:r.title)??"",error:a.title,onChange:e=>o("title",e.target.value),label:"Title"}),l.jsx("p",{className:"font-medium",children:"Type"}),l.jsx("div",{className:"flex items-center gap-3",children:["free","paid"].map(e=>l.jsxs("div",{onClick:()=>o(s=>({...s,type:e})),className:`w-full cursor-pointer border transition-all text-center p-2 ${e===r.type?"border border-primary":""}`,children:[" ",e," "]},e))}),l.jsx("p",{className:"text-red-500 text-sm",children:a.type??""}),(r==null?void 0:r.type)==="paid"&&l.jsx(p,{value:(r==null?void 0:r.price)??"",error:a.price,onChange:e=>o("price",e.target.value),label:"Price"}),l.jsxs(w,{label:"Category",error:a.category_id,onChange:e=>o("category_id",e.target.value),children:[l.jsx("option",{value:"",children:"--- select ---"}),u.map(e=>l.jsx("option",{value:e.id,children:e.name},e.id))]}),l.jsx(m,{error:a.description,rows:4,value:(r==null?void 0:r.description)??"",label:"Description",onChange:e=>o("description",e.target.value)}),l.jsx(m,{error:a.author,rows:4,value:(r==null?void 0:r.author)??"",label:"author",onChange:e=>o("author",e.target.value)}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx(i,{outline:!0,onClick:()=>c(!1),className:"w-full",children:"Cancel"}),l.jsx(i,{type:"submit",className:"w-full",loading:x,children:"Save"})]})]})})};export{M as default};
