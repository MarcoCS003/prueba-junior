import{r as n,a as y,j as e,L as i}from"./app-pPOtI2W1.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,s,a)=>a?a.toUpperCase():s.toLowerCase()),x=r=>{const t=b(r);return t.charAt(0).toUpperCase()+t.slice(1)},u=(...r)=>r.filter((t,s,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===s).join(" ").trim(),v=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=n.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:o,iconNode:h,...d},m)=>n.createElement("svg",{ref:m,...w,width:t,height:t,stroke:r,strokeWidth:a?Number(s)*24/Number(t):s,className:u("lucide",l),...!o&&!v(d)&&{"aria-hidden":"true"},...d},[...h.map(([g,p])=>n.createElement(g,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=(r,t)=>{const s=n.forwardRef(({className:a,...l},o)=>n.createElement(N,{ref:o,iconNode:t,className:u(`lucide-${f(x(r))}`,`lucide-${r}`,a),...l}));return s.displayName=x(r),s};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],k=c("grid-3x3",j);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],_=c("package",C);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],L=c("plus",A);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],$=c("shopping-cart",M);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],E=c("user",P);function S({children:r}){const{auth:t}=y().props,[s,a]=n.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsx("nav",{className:"bg-white border-b border-gray-100",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"flex space-x-8",children:[e.jsxs(i,{href:route("dashboard"),className:"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out",children:[e.jsx(k,{className:"w-4 h-4 mr-2"}),"Catalog"]}),e.jsxs(i,{href:route("categories.index"),className:"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out",children:[e.jsx(_,{className:"w-4 h-4 mr-2"}),"Categories"]}),e.jsxs(i,{href:route("products.index"),className:"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out",children:[e.jsx($,{className:"w-4 h-4 mr-2"}),"Products"]})]})}),e.jsx("div",{className:"flex items-center",children:t.user?e.jsxs("div",{className:"relative",children:[e.jsx("button",{onClick:()=>a(!s),className:"flex items-center text-sm rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:e.jsx("div",{className:"w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center",children:e.jsx(E,{className:"w-5 h-5 text-gray-600"})})}),s&&e.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50",children:[e.jsx("div",{className:"px-4 py-2 text-xs text-gray-400",children:t.user.name}),e.jsx(i,{href:route("logout"),method:"post",as:"button",className:"block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:"Log Out"})]})]}):e.jsxs(i,{href:route("login"),className:"flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[e.jsx(L,{className:"w-4 h-4 mr-2"}),"Login"]})})]})})}),e.jsx("main",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:r})})]})}export{S as A};
