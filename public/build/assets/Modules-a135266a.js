import{r as a,j as n}from"./app-80f8a396.js";import{L as p,u as h,B as m}from"./Button-eed1d5c6.js";import y from"./Module-b361a4c7.js";import j from"./ModuleForm-b260efca.js";import{C}from"./ConfirmModal-8c9645e5.js";import"./Lessons-fe89d2c4.js";import"./LessonForm-65efa685.js";import"./Modal-03076b5d.js";import"./Input-9032cbf5.js";import"./Textarea-497dc4d9.js";import"./AudioUploader-77882d78.js";import"./LessonCard-d289b738.js";import"./Dropdown-5e609415.js";import"./index.esm-15d317b0.js";const M=a.createContext(null),w=t=>!t.isLayoutDirty&&t.willUpdate(!1);function c(){const t=new Set,o=new WeakMap,r=()=>t.forEach(w);return{add:e=>{t.add(e),o.set(e,e.addEventListener("willUpdate",r))},remove:e=>{t.delete(e);const i=o.get(e);i&&(i(),o.delete(e)),r()},dirty:r}}const x=t=>t===!0,E=t=>x(t===!0)||t==="id",G=({children:t,id:o,inherit:r=!0})=>{const e=a.useContext(p),i=a.useContext(M),[u,d]=h(),l=a.useRef(null),s=e.id||i;l.current===null&&(E(r)&&s&&(o=o?s+"-"+o:s),l.current={id:o,group:x(r)&&e.group||c()});const f=a.useMemo(()=>({...l.current,forceRender:u}),[d]);return a.createElement(p.Provider,{value:f},t)},z=({course:t})=>{var l;const[o,r]=a.useState(!1),[e,i]=a.useState({}),u=()=>{r(!0),i({})},d=s=>{i(s),r(!0)};return n.jsxs("div",{className:"pt-3 transition-all duration-1000",children:[n.jsx(C,{}),n.jsx(j,{module:e,courseId:t==null?void 0:t.id,setShowForm:r,showForm:o}),n.jsxs("div",{className:"flex justify-between mb-3",children:[n.jsx(m,{className:"!px-5",href:route("testimonial.index",t.id),children:"Manage Testimonials"}),n.jsx(m,{className:"!px-5",onClick:u,children:"Add Module"})]}),n.jsx(G,{className:"",children:(l=t==null?void 0:t.modules)==null?void 0:l.map(s=>n.jsx(y,{handleEdit:d,courseId:t.id,module:s},s.id))})]})};export{z as default};
