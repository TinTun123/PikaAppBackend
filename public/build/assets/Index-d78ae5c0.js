import{r as a,j as r}from"./app-9d0c5c84.js";import{B as i}from"./Button-ffaf121f.js";import c from"./Form-080469e7.js";import"./Tooltip-44b82b50.js";import u from"./Podcasts-b60a318b.js";import"./Modal-4f9b7b0c.js";import"./Input-d810557f.js";import"./Textarea-3d458a32.js";import"./ImageUploader-c5322701.js";import"./AudioUploader-90c0f153.js";import"./TableRow-24c26f81.js";import"./ConfirmModal-e077266b.js";const d=()=>{const[s,t]=a.useState(!1),[p,e]=a.useState(null);return{formOpen:s,setFormOpen:t,current:p,setCurrent:e,prepareForEdit:o=>{e(o),t(!0)},prepareNewForm:()=>{e(null),t(!0)}}},P=({categories:s,audios:t})=>{const{prepareForEdit:p,prepareNewForm:e,formOpen:m,setFormOpen:n,current:o}=d();return r.jsxs(r.Fragment,{children:[r.jsx("div",{children:r.jsx(i,{onClick:e,children:"Create Podcast"})}),r.jsx(c,{categories:s,current:o,show:m,setFormOpen:n}),r.jsx(u,{prepareForEdit:p,current:o,podcasts:t.data})]})};export{P as default};