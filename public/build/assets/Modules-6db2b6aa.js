import{r as a,j as n}from"./app-9d0c5c84.js";import{L as p,u as h,B as c}from"./Button-ffaf121f.js";import y from"./Module-f854d04e.js";import j from"./ModuleForm-1b15b283.js";import{C}from"./ConfirmModal-e077266b.js";import"./Lessons-170226e7.js";import"./LessonForm-016ee084.js";import"./Modal-4f9b7b0c.js";import"./Input-d810557f.js";import"./Textarea-3d458a32.js";import"./LessonCard-a2fcbc65.js";import"./Tooltip-44b82b50.js";const M=a.createContext(null),w=t=>!t.isLayoutDirty&&t.willUpdate(!1);function m(){const t=new Set,o=new WeakMap,r=()=>t.forEach(w);return{add:e=>{t.add(e),o.set(e,e.addEventListener("willUpdate",r))},remove:e=>{t.delete(e);const i=o.get(e);i&&(i(),o.delete(e)),r()},dirty:r}}const x=t=>t===!0,E=t=>x(t===!0)||t==="id",G=({children:t,id:o,inherit:r=!0})=>{const e=a.useContext(p),i=a.useContext(M),[d,l]=h(),u=a.useRef(null),s=e.id||i;u.current===null&&(E(r)&&s&&(o=o?s+"-"+o:s),u.current={id:o,group:x(r)&&e.group||m()});const f=a.useMemo(()=>({...u.current,forceRender:d}),[l]);return a.createElement(p.Provider,{value:f},t)},B=({course:t})=>{var u;const[o,r]=a.useState(!1),[e,i]=a.useState({}),d=()=>{r(!0),i({})},l=s=>{i(s),r(!0)};return n.jsxs("div",{className:"pt-3 transition-all duration-1000",children:[n.jsx(C,{}),n.jsx(j,{module:e,courseId:t==null?void 0:t.id,setShowForm:r,showForm:o}),n.jsxs("div",{className:"flex justify-between mb-3",children:[n.jsx(c,{href:route("testimonial.index",t.id),children:"Manage Testimonials"}),n.jsx(c,{onClick:d,children:"Add Module"})]}),n.jsx(G,{className:"",children:(u=t==null?void 0:t.modules)==null?void 0:u.map(s=>n.jsx(y,{handleEdit:l,courseId:t.id,module:s},s.id))})]})};export{B as default};