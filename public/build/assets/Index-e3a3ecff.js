import{r as i,j as e,d as l,D as m,F as d}from"./app-bf4b4a66.js";import x from"./Version-e14f5d79.js";import g from"./TermsAndConditions-0b1d1a1f.js";import"./Input-66bf8bd1.js";const r=[{title:"Version",link:"setting.version",icon:"FaRegShareFromSquare"},{title:"Terms & Conditions",link:"setting.term",icon:"MdOutlinePolicy"}],u=({version:n,terms:a})=>{const[o,c]=i.useState("");i.useEffect(()=>{r.forEach(t=>{s(t.link)&&c(t.title)})},[]);const s=t=>window.location.href===route(t);return e.jsxs("div",{className:"gap-5 grid grid-cols-1 lg:grid-cols-3",children:[e.jsx("div",{className:"flex flex-row lg:flex-col gap-2 ",children:r.map(t=>e.jsxs(l,{href:route(t.link),className:`flex items-center justify-between p-3 text-start bg-white  ${s(t.link)?"!bg-primary text-white":""}`,children:[e.jsxs("div",{className:"flex gap-3 text-2xl items-center",children:[e.jsx(m,{name:t.icon}),e.jsx("span",{className:"text-base hidden lg:block",children:t.title})]}),e.jsx(d,{className:"hidden lg:block"})]},t.icon))}),e.jsxs("div",{className:"col-span-2 bg-white p-5",children:[e.jsx("h3",{className:"text-center text-lg mb-5 font-semibold",children:o}),s("setting.version")&&e.jsx(x,{version:n}),s("setting.term")&&e.jsx(g,{terms:a})]})]})};export{u as default};