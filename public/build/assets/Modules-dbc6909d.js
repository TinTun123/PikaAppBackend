import{r as a,j as n}from"./app-f4743089.js";import{L as p,u as h,B as m}from"./Button-5d0bd51e.js";import y from"./Module-8f730097.js";import j from"./ModuleForm-198a7b0b.js";import{C}from"./ConfirmModal-817ab9a2.js";import"./Lessons-7b5591b1.js";import"./LessonForm-5d36a08a.js";import"./Modal-0d004a72.js";import"./Input-76a8ec44.js";import"./Textarea-f90a160a.js";import"./LessonCard-c1ffa470.js";import"./Tooltip-8f55ef20.js";import"./index.esm-edd1bfa1.js";const M=a.createContext(null),w=t=>!t.isLayoutDirty&&t.willUpdate(!1);function c(){const t=new Set,o=new WeakMap,r=()=>t.forEach(w);return{add:e=>{t.add(e),o.set(e,e.addEventListener("willUpdate",r))},remove:e=>{t.delete(e);const i=o.get(e);i&&(i(),o.delete(e)),r()},dirty:r}}const x=t=>t===!0,E=t=>x(t===!0)||t==="id",G=({children:t,id:o,inherit:r=!0})=>{const e=a.useContext(p),i=a.useContext(M),[d,l]=h(),u=a.useRef(null),s=e.id||i;u.current===null&&(E(r)&&s&&(o=o?s+"-"+o:s),u.current={id:o,group:x(r)&&e.group||c()});const f=a.useMemo(()=>({...u.current,forceRender:d}),[l]);return a.createElement(p.Provider,{value:f},t)},D=({course:t})=>{var u;const[o,r]=a.useState(!1),[e,i]=a.useState({}),d=()=>{r(!0),i({})},l=s=>{i(s),r(!0)};return n.jsxs("div",{className:"pt-3 transition-all duration-1000",children:[n.jsx(C,{}),n.jsx(j,{module:e,courseId:t==null?void 0:t.id,setShowForm:r,showForm:o}),n.jsxs("div",{className:"flex justify-between mb-3",children:[n.jsx(m,{href:route("testimonial.index",t.id),children:"Manage Testimonials"}),n.jsx(m,{onClick:d,children:"Add Module"})]}),n.jsx(G,{className:"",children:(u=t==null?void 0:t.modules)==null?void 0:u.map(s=>n.jsx(y,{handleEdit:l,courseId:t.id,module:s},s.id))})]})};export{D as default};