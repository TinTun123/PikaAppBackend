import{r as a,j as r}from"./app-36359947.js";import{B as i}from"./Button-f654e2a1.js";import u from"./Form-23913d32.js";import"./Tooltip-35ce38fb.js";import c from"./Podcasts-5be229f8.js";import"./Modal-7b777abc.js";import"./Input-420db27d.js";import"./Textarea-c7702ab5.js";import"./ImageUploader-0c9ffaec.js";import"./TableRow-999d9a50.js";const d=()=>{const[o,t]=a.useState(!1),[p,e]=a.useState(null);return{formOpen:o,setFormOpen:t,current:p,setCurrent:e,prepareForEdit:s=>{e(s),t(!0)},prepareNewForm:()=>{e(null),t(!0)}}},B=({categories:o,audios:t})=>{const{prepareForEdit:p,prepareNewForm:e,formOpen:n,setFormOpen:m,current:s,setCurrent:l}=d();return r.jsxs(r.Fragment,{children:[r.jsx("div",{children:r.jsx(i,{onClick:e,children:"Create Audio"})}),r.jsx(u,{categories:o,current:s,show:n,setFormOpen:m}),r.jsx(c,{podcasts:t.data})]})};export{B as default};
