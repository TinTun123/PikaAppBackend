import{G as t,j as e,d as c}from"./app-da6db5f0.js";import{f as i}from"./Methods-96e58c60.js";function r(s){return t({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]})(s)}function a(s){return t({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]})(s)}const d=({course:s,handleDeleteModal:l})=>e.jsxs("div",{className:" w-full p-4 shadow-lg hover:shadow-2xl flex flex-col sm:flex-row gap-5",children:[e.jsx("img",{className:"h-[200px] w-[400px] object-cover ",src:s.image,alt:""}),e.jsxs("div",{className:"flex flex-col gap-5 w-full justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-xl mb-2",children:s.title}),e.jsx("p",{children:s.description}),e.jsxs("p",{children:["Instructor: ",e.jsx("strong",{children:s.instructor})]}),e.jsxs("p",{children:["Price: ",e.jsx("strong",{children:i(s.price)})]})]}),e.jsx("div",{className:"flex justify-end",children:e.jsxs("div",{className:"flex gap-5",children:[e.jsx(c,{href:route("courses.edit",s.id),className:"text-2xl ",children:e.jsx(a,{})}),e.jsx("button",{onClick:()=>l(s.id),className:"text-2xl text-primary",children:e.jsx(r,{})})]})})]})]});export{d as default};
