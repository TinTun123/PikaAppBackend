import{j as r}from"./app-dbf16eb4.js";import{B as o}from"./Button-1e32cf05.js";import t from"./CourseCard-1a4fa118.js";import"./Dropdown-4d8994ec.js";import"./Tooltip-563aaaa9.js";const l=({courses:e})=>r.jsxs(r.Fragment,{children:[r.jsx("div",{children:r.jsx(o,{href:route("courses.create"),children:"Create Course"})}),r.jsx("div",{className:"mt-4 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",children:e.data.map(s=>r.jsx(t,{course:s},s.id))})]});export{l as default};