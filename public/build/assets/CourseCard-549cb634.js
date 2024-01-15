import{G as c,j as e,B as i,y as s}from"./app-5f19a3d5.js";import{D as t}from"./Dropdown-64f0760d.js";import"./Tooltip-e0d6649a.js";function o(l){return c({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M1021.06 839.968L833.798 493.664c19.104-43.36 29.792-91.28 29.792-141.696C863.59 157.664 706.07.16 511.782.16c-194.336 0-351.84 157.52-351.84 351.808 0 51.632 11.216 100.624 31.184 144.784L3.03 839.808c-6.065 11.024-5.057 24.624 2.527 34.688 7.6 10.033 20.432 14.752 32.687 11.873l160.624-36.848 54.976 153.12c4.288 11.904 15.152 20.16 27.744 21.088.817.064 1.6.096 2.368.096a32.002 32.002 0 0 0 28.192-16.88L475.844 701.97a355.152 355.152 0 0 0 35.92 1.808c11.12 0 22.095-.576 32.943-1.6l167.248 305.008a31.984 31.984 0 0 0 30.56 16.527c12.56-1.008 23.376-9.248 27.631-21.088l54.976-153.12 160.624 36.848c12.32 2.975 25.024-1.809 32.624-11.809 7.632-9.984 8.656-23.52 2.688-34.576zm-731.282 73.376L249.52 801.183c-5.504-15.248-21.471-24.128-37.28-20.368l-118.8 27.248L228.85 561.087c44.592 60.24 107.952 105.68 181.44 127.793zm-65.553-561.377c0-158.544 129.009-287.536 287.568-287.536 158.544 0 287.536 128.992 287.536 287.536S670.337 639.535 511.793 639.535c-158.576 0-287.568-129.024-287.568-287.568zm587.52 428.847c-15.872-3.744-31.776 5.12-37.28 20.367l-40.529 112.976-123.152-224.56c75.44-22.096 140.337-68.735 185.505-130.735L931.137 808.19z"}}]})(l)}const x=({course:l,handleDeleteModal:a})=>{const r=()=>{s.post(route("courses.togglePopular",l.id),{},{preserveScroll:!0})},d=()=>{s.post(route("courses.toggleRecommended",l.id),{},{preserveScroll:!0})};return e.jsxs("div",{className:" w-full p-4  relative bg-white rounded-lg cursor-pointer",children:[e.jsx("div",{className:"bg-gray-100 bg-opacity-90 rounded-lg p-1 mt-1 ml-2 absolute ",children:l.category.name}),l.popular?e.jsx("div",{className:"absolute text-white p-3 bg-yellow-400 top-0 right-0 rounded-full ",children:e.jsx(o,{})}):null,e.jsx("img",{className:"h-[200px] w-full object-cover rounded-lg ",src:l.image,alt:""}),e.jsxs("div",{className:"flex flex-col gap-5 w-full justify-between",children:[e.jsxs("div",{className:"flex justify-between mt-2",children:[e.jsxs("p",{className:"bg-gray-100 text-sm py-1 px-2 rounded-lg ",children:[l.modules_count," modules"]}),e.jsx("p",{className:"bg-gray-100 text-sm py-1 px-2 rounded-lg ",children:"24h 10m"}),e.jsx("p",{className:"bg-gray-100 text-sm py-1 px-2 rounded-lg ",children:"321 Participant"})]}),e.jsx("div",{children:e.jsx("h3",{className:"font-medium text-lg mb-2",children:l.title})}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("p",{className:"text-sm font-medium",children:[(+l.price).toLocaleString("en-US")," mmk"]}),e.jsx("div",{className:"flex gap-5",children:e.jsxs(t,{className:"!bg-white",label:"",renderTrigger:()=>e.jsx("div",{className:"cursor-pointer",children:e.jsx(i,{})}),children:[e.jsx(t.Item,{className:"hover:!bg-gray-100 !text-black",onClick:()=>r(l.id),children:l.popular?"Remove from popular":"Add to popular"}),e.jsx(t.Item,{className:"hover:!bg-gray-100 !text-black",onClick:()=>d(l.id),children:l.recommended?"Remove from recommended":"Add to recommended"}),e.jsx(t.Item,{className:"hover:!bg-gray-100 !text-black",onClick:()=>s.get(route("courses.edit",l.id)),children:"Edit"}),e.jsx(t.Item,{className:"hover:!bg-gray-100 !text-black",onClick:()=>a(l.id),children:"Delete"})]})})]})]})]})};export{x as default};
