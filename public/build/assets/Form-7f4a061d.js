import{q as d,W as j,r as n,j as o}from"./app-dbf16eb4.js";import{M as h}from"./Modal-7716676a.js";import{I as g}from"./Input-84bb6ecc.js";import{B as v}from"./Button-1e32cf05.js";const y=({setFormOpen:a,show:c,category:s})=>{const u=d(),{data:r,setData:t,errors:m,post:f,processing:l,reset:i}=j({});n.useEffect(()=>{let e="";u.url==="/category/course"?e="course":e="podcast",t("type",e)},[l]),console.log("hello"),n.useEffect(()=>{s&&t(s)},[s]);const p=e=>{e.preventDefault();let x=s?route("category.update",s.id):route("category.store");f(x,{onSuccess:()=>{a(!1),t({}),i()}})};return o.jsx(h,{show:c,onClose:()=>a(!1),children:o.jsxs("form",{onSubmit:p,className:"col-span-2 flex flex-col gap-3",children:[o.jsx(g,{value:(r==null?void 0:r.name)??"",error:m.name,onChange:e=>t("name",e.target.value),label:"Name"}),o.jsx("div",{className:"flex justify-end",children:o.jsx(v,{type:"submit",className:"w-[200px]",loading:l,children:"Save"})})]})})};export{y as default};