import{r as n,j as e,B as x}from"./app-da6db5f0.js";import{B as j}from"./Button-95ae98ed.js";import h from"./Form-5af1010a.js";import{T as u,a as f,b as a}from"./TableRow-5cd82825.js";import{D as t}from"./Tooltip-fee82d4d.js";import"./Modal-a4a8a3a6.js";import"./Input-736b34ba.js";const y=({categories:l})=>{const[i,s]=n.useState(!1),[c,o]=n.useState(null),d=r=>{o(r),s(!0)},m=()=>{o(null),s(!0)},p=()=>{};return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(j,{onClick:m,children:"Create Category"})}),e.jsx(h,{setFormOpen:s,category:c,show:i}),e.jsx("div",{children:e.jsx(u,{columns:[{field:"Name"},{field:"Actions"}],children:l.map(r=>e.jsxs(f,{children:[e.jsx(a,{children:r.name}),e.jsx(a,{children:e.jsxs(t,{label:"",renderTrigger:()=>e.jsx("div",{className:"cursor-pointer",children:e.jsx(x,{})}),children:[e.jsx(t.Item,{onClick:()=>d(r),children:"Edit"}),e.jsx(t.Item,{onClick:()=>p(),children:"Delete"})]})})]},r.id))})})]})};export{y as default};