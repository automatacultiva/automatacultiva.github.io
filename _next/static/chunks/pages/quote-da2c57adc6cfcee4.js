(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[876],{3853:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quote",function(){return l(9416)}])},5717:function(e,t,l){"use strict";var r=l(5893),a=l(7e3),s=l(7294),i=l(7219),n=l(750);t.Z=e=>{let{onChange:t=()=>{},required:l=!1,options:o,defaultValue:d="",id:c}=e,u=o.findIndex(e=>e.value==d),[h,p]=(0,s.useState)(-1==u?0:u),[x,m]=(0,s.useState)(!1),f=(0,a.Z)(),b=(0,s.useRef)(null),g=e=>{var t;b.current&&(b.current.options.selectedIndex=e),null===(t=b.current)||void 0===t||t.dispatchEvent(new Event("change",{bubbles:!0}))};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"w-full relative select-none ".concat(f?"cursor-default":"cursor-pointer"),children:[(0,r.jsxs)("div",{className:"w-full flex place-content-between place-items-center bg-transparent border-borderLight px-4 py-2 rounded hover:bg-light border hover:border-white z-10 hover:border-opacity-30 ",onClick:()=>m(!x),children:[(0,r.jsx)("p",{className:"text-white text-opacity-40 w-full",children:o[h].label}),(0,r.jsx)("div",{className:"text-xl text-white text-opacity-40",children:(0,r.jsx)(i.bTu,{})}),(0,r.jsx)("select",{className:"invisible w-0 h-0",onChange:t,required:l,ref:b,id:c,children:o.map(e=>(0,r.jsx)("option",{value:e.value,children:e.label},(0,n.Z)(64)))})]}),(0,r.jsx)("div",{className:"absolute left-0 top-12 w-full bg-[#21172f] bg-cover rounded overflow-hidden ".concat(x?"":"hidden"),children:(0,r.jsx)("div",{className:"bg-light backdrop-blur-3xl",children:o.map((e,t)=>(0,r.jsx)("div",{onClick:()=>{m(!x),p(t),g(t)},className:"text-white text-opacity-60 hover:bg-primary px-3 py-2 hover:text-opacity-100 ".concat(t==h?"bg-primary text-opacity-100":""),children:e.label},(0,n.Z)(64)))})})]})})}},4139:function(e,t,l){"use strict";var r=l(5893);l(7294),t.Z=e=>{let{label:t,htmlFor:l}=e;return(0,r.jsx)("label",{htmlFor:l,className:"text-muted font-normal text-sm leading-5 select-none",children:t})}},7113:function(e,t,l){"use strict";l.d(t,{Z:function(){return o}});var r=l(5893),a=l(7294),s=e=>{let{defaultValue:t="",onChange:l=()=>{},onSubmit:a=()=>{},required:s=!1,id:i,placeholder:n}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("input",{type:"text",className:"w-full bg-transparent border-borderLight text-white text-opacity-40 px-4 py-2 rounded focus:bg-light border      focus:border-white focus:border-opacity-30",defaultValue:t,onChange:l,onSubmit:a,required:s,id:i,placeholder:n})})},i=l(4139),n=l(750),o=e=>{let{label:t,defaultValue:l,onChange:o,onSubmit:d,required:c,placeholder:u}=e,[h,p]=(0,a.useState)("");return(0,a.useEffect)(()=>{p((0,n.Z)(64))},[]),(0,r.jsxs)("div",{className:"space-y-1.5",children:[(0,r.jsx)(i.Z,{label:t,htmlFor:h}),(0,r.jsx)(s,{defaultValue:l,id:h,onChange:o,onSubmit:d,placeholder:u,required:c})]})}},477:function(e,t,l){"use strict";l.d(t,{Z:function(){return o}});var r=l(5893),a=l(7294),s=e=>{let{defaultValue:t="",onChange:l=()=>{},onSubmit:a=()=>{},required:s=!1,rows:i=4,id:n,placeholder:o}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("textarea",{className:"w-full bg-transparent border-borderLight text-white text-opacity-40 px-4 py-2 rounded focus:bg-light border      focus:border-white focus:border-opacity-30",defaultValue:t,onChange:l,onSubmit:a,required:s,rows:i,id:n,placeholder:o})})},i=l(4139),n=l(750),o=e=>{let{label:t,defaultValue:l,onChange:o,onSubmit:d,required:c,rows:u,placeholder:h}=e,[p,x]=(0,a.useState)("");return(0,a.useEffect)(()=>{x((0,n.Z)(64))},[]),(0,r.jsxs)("div",{className:"space-y-1.5",children:[(0,r.jsx)(i.Z,{label:t,htmlFor:p}),(0,r.jsx)(s,{defaultValue:l,id:p,onChange:o,onSubmit:d,placeholder:h,required:c,rows:u})]})}},9416:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return m}});var r=l(5893),a=l(9528),s=l(4616),i=l(7113),n=l(5717),o=l(4139),d=l(7294),c=l(750),u=e=>{let{label:t,defaultValue:l,onChange:a,options:s,required:i}=e,[u,h]=(0,d.useState)("");return(0,d.useEffect)(()=>{h((0,c.Z)(64))},[]),(0,r.jsxs)("div",{className:"space-y-1.5",children:[(0,r.jsx)(o.Z,{label:t,htmlFor:u}),(0,r.jsx)(n.Z,{defaultValue:l,onChange:a,required:i,options:s,id:u})]})},h=l(477),p=l(193),x=l(6289),m=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(x.Z,{title:"Send Quote - Collosal",children:(0,r.jsxs)("section",{className:"grid grid-cols-1 place-items-center gap-5 lg:grid-cols-2",children:[(0,r.jsxs)("aside",{className:"w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 place-items-center gap-12 lg:w-full lg:place-items-start","data-aos":"fade-down-right",children:[(0,r.jsx)("div",{className:"text-center lg:text-left",children:(0,r.jsx)(p.Z,{title:"Tell us about your problem and how we can help",description:"We are happy to help you, tell us what is the problem with your company, and we are ready to answer these problems. It usually takes a few minutes for us to respond.",badge:"SEND QUOTE"})}),(0,r.jsx)("div",{className:"w-fit",children:(0,r.jsx)(s.Z,{value:"Ask Us",href:"/faq",color:"white",style:"light"})})]}),(0,r.jsx)("aside",{className:"w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end","data-aos":"fade-up-left",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ",children:[(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,r.jsx)(i.Z,{label:"Name"}),(0,r.jsx)(i.Z,{label:"Email"})]}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,r.jsx)(i.Z,{label:"Company"}),(0,r.jsx)(u,{label:"Company Size",options:[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}]})]}),(0,r.jsx)(h.Z,{label:"Tell Us Your Problem"}),(0,r.jsx)(a.Z,{value:"Send Quote"})]})})]})})})},750:function(e,t){"use strict";t.Z=e=>{let t=[],l=["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"];for(let r=0;r<e-1;r++){let e=Math.floor(Math.random()*l.length);t.push(l[e])}return t.join("")}}},function(e){e.O(0,[638,360,774,888,179],function(){return e(e.s=3853)}),_N_E=e.O()}]);