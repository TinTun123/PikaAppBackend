import{q as x,W as d,r as j,j as s}from"./app-6a54aa77.js";import{M as h}from"./Modal-9376f476.js";import{I as g}from"./Input-8e9be8be.js";import{B as v}from"./Button-b247fbc3.js";const y=({setFormOpen:l,show:n,category:e})=>{const u=x();let t="";u.url==="/category/course"?t="course":t="podcast";const{data:o,setData:r,errors:c,post:m,processing:i}=d({type:t});j.useEffect(()=>{e&&r(e)},[e]);const p=a=>{a.preventDefault();let f=e?route("category.update",e.id):route("category.store");m(f,{onSuccess:()=>{l(!1),r({})}})};return s.jsx(h,{show:n,onClose:()=>l(!1),children:s.jsxs("form",{onSubmit:p,className:"col-span-2 flex flex-col gap-3",children:[s.jsx(g,{value:(o==null?void 0:o.name)??"",error:c.name,onChange:a=>r("name",a.target.value),label:"Name"}),s.jsx("div",{className:"flex justify-end",children:s.jsx(v,{type:"submit",className:"w-[200px]",loading:i,children:"Save"})})]})})};export{y as default};
