import{W as l,j as e}from"./app-36359947.js";import{I as u}from"./Input-420db27d.js";import{B as m}from"./Button-f654e2a1.js";const d=({version:o})=>{const{post:n,data:s,setData:r,processing:a}=l({version:o}),i=t=>{t.preventDefault(),n(route("version.update"),{onSuccess:()=>{}})};return e.jsxs("form",{onSubmit:i,className:"flex flex-col gap-3 ",children:[e.jsx(u,{label:"Version",value:s==null?void 0:s.version,onChange:t=>r("version",t.target.value)}),e.jsx("div",{children:e.jsx(m,{type:"submit",loading:a,children:"Save"})})]})};export{d as default};
