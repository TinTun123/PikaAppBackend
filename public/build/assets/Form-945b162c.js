import{W as b,r as y,j as l,M as C,B as c,i as N}from"./app-bf4b4a66.js";import{I as n}from"./Input-66bf8bd1.js";import{T as p}from"./Textarea-b6eafe3f.js";import{I as w}from"./ImageUploader-2cc5dd73.js";import{C as _}from"./CustomSelect-eaa9ce53.js";import{A as S}from"./AudioUploader-e9b4f17b.js";const A=({show:d,current:t,setFormOpen:i,categories:u})=>{const{data:a,setData:s,processing:m,errors:o,post:x}=b(),f=e=>{e.preventDefault();let r=t?route("podcast.update",t.id):route("podcast.store");x(r,{onSuccess:()=>{i(!1),s({})}})};y.useEffect(()=>{s(t||{})},[t]);const h=e=>{s(r=>({...r,image:e}))},g=e=>{console.log(e),s(r=>({...r,file:e.path,playable_file:e.playable_file}))},j=async e=>{try{const r=await N.post(route("podcast.remove"),{path:e});s(v=>({...v,file:null,playable_file:null,time:0}))}catch(r){console.log(r)}};return l.jsx(C,{show:d,onClose:()=>i(!0),children:l.jsxs("form",{onSubmit:f,className:"col-span-2 flex flex-col gap-3",children:[l.jsx(w,{handleUpload:h,data:a,setData:s,error:o.image}),!a.playable_file&&l.jsx(S,{handleUploadSuccess:g}),l.jsx("p",{className:"text-red-500 text-sm",children:o.file??""}),a.playable_file&&l.jsxs(l.Fragment,{children:[l.jsx("audio",{className:"w-full ",controls:!0,children:l.jsx("source",{src:a.playable_file,type:"audio/mp3"})}),l.jsx(c,{onClick:()=>j(a.file),className:"bg-red-600 w-[200px]",children:"Remove"})]}),l.jsx(n,{value:(a==null?void 0:a.title)??"",error:o.title,onChange:e=>s("title",e.target.value),label:"Title"}),l.jsx("p",{className:"font-medium",children:"Type"}),l.jsx("div",{className:"flex items-center gap-3",children:["free","paid"].map(e=>l.jsxs("div",{onClick:()=>s(r=>({...r,type:e})),className:`w-full cursor-pointer border transition-all text-center p-2 ${e===a.type?"border border-primary":""}`,children:[" ",e," "]},e))}),l.jsx("p",{className:"text-red-500 text-sm",children:o.type??""}),(a==null?void 0:a.type)==="paid"&&l.jsx(n,{value:(a==null?void 0:a.price)??"",error:o.price,onChange:e=>s("price",e.target.value),label:"Price"}),l.jsxs(_,{label:"Category",error:o.category_id,onChange:e=>s("category_id",e.target.value),children:[l.jsx("option",{value:"",children:"--- select ---"}),u.map(e=>l.jsx("option",{value:e.id,children:e.name},e.id))]}),l.jsx(p,{error:o.description,rows:4,value:(a==null?void 0:a.description)??"",label:"Description",onChange:e=>s("description",e.target.value)}),l.jsx(p,{error:o.author,rows:4,value:(a==null?void 0:a.author)??"",label:"author",onChange:e=>s("author",e.target.value)}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx(c,{outline:!0,onClick:()=>i(!1),className:"w-full",children:"Cancel"}),l.jsx(c,{type:"submit",className:"w-full",loading:m,children:"Save"})]})]})})};export{A as default};
