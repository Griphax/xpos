(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9238:function(e,t,a){Promise.resolve().then(a.bind(a,2001))},2001:function(e,t,a){"use strict";a.d(t,{default:function(){return Y}});var s=a(7437),n=a(2265);function l(){let[e,t]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=setInterval(()=>{t(t=>t>=100?(clearInterval(e),100):t+10)},500);return()=>clearInterval(e)},[]),(0,s.jsxs)("div",{className:"h-full w-full bg-black flex flex-col items-center justify-center",children:[(0,s.jsx)("h1",{className:"text-white text-4xl font-bold mb-8",children:"SOL OS AI booting up..."}),(0,s.jsx)("div",{className:"w-64 h-4 bg-gray-700 rounded-full overflow-hidden",children:(0,s.jsx)("div",{className:"h-full bg-blue-500 transition-all duration-500 ease-out",style:{width:"".concat(e,"%")}})}),(0,s.jsxs)("p",{className:"text-white mt-4",children:[e,"%"]})]})}let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim()};var r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,n.forwardRef)((e,t)=>{let{color:a="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:c="",children:d,iconNode:u,...h}=e;return(0,n.createElement)("svg",{ref:t,...r,width:s,height:s,stroke:a,strokeWidth:o?24*Number(l)/Number(s):l,className:i("lucide",c),...h},[...u.map(e=>{let[t,a]=e;return(0,n.createElement)(t,a)}),...Array.isArray(d)?d:[d]])}),d=(e,t)=>{let a=(0,n.forwardRef)((a,s)=>{let{className:l,...r}=a;return(0,n.createElement)(c,{ref:s,iconNode:t,className:i("lucide-".concat(o(e)),l),...r})});return a.displayName="".concat(e),a},u=d("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),h=d("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]),m=d("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]),x=d("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),p=d("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),g=d("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]),f=d("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);function b(e){let{name:t,icon:a,onClick:n}=e,l={terminal:(0,s.jsx)(u,{className:"w-12 h-12 text-white"}),game:(0,s.jsx)(h,{className:"w-12 h-12 text-white"}),pump:(0,s.jsx)(m,{className:"w-12 h-12 text-white"}),dex:(0,s.jsx)(x,{className:"w-12 h-12 text-white"}),"file-text":(0,s.jsx)(p,{className:"w-12 h-12 text-white"}),cloud:(0,s.jsx)(g,{className:"w-12 h-12 text-white"}),twitter:(0,s.jsx)(f,{className:"w-12 h-12 text-white"})};return(0,s.jsxs)("div",{className:"flex flex-col items-center gap-2 p-2 rounded hover:bg-white/10 cursor-pointer transition-colors",onClick:n,children:[(0,s.jsx)("div",{children:l[a]}),(0,s.jsx)("span",{className:"text-white text-shadow text-sm text-center",children:t})]})}let y=d("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function j(e){let{title:t,children:a,onClose:l}=e,[o,i]=(0,n.useState)({x:50,y:50}),[r,c]=(0,n.useState)({width:800,height:600}),[d,u]=(0,n.useState)(!1),[h,m]=(0,n.useState)(!1),[x,p]=(0,n.useState)({x:0,y:0}),g=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=e=>{d?i({x:e.clientX-x.x,y:e.clientY-x.y}):h&&c({width:Math.max(400,e.clientX-o.x),height:Math.max(300,e.clientY-o.y)})},t=()=>{u(!1),m(!1)};return document.addEventListener("mousemove",e),document.addEventListener("mouseup",t),()=>{document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t)}},[d,h,x,o]),(0,s.jsxs)("div",{ref:g,className:"absolute bg-gray-200 rounded-lg shadow-lg overflow-hidden",style:{left:o.x,top:o.y,width:r.width,height:r.height},children:[(0,s.jsxs)("div",{className:"bg-gradient-to-r from-blue-600 to-blue-500 text-white p-2 flex justify-between items-center cursor-move",onMouseDown:e=>{u(!0),p({x:e.clientX-o.x,y:e.clientY-o.y})},children:[(0,s.jsx)("h2",{className:"text-lg font-semibold",children:t}),(0,s.jsx)("button",{onClick:l,className:"focus:outline-none hover:bg-red-500 rounded p-1",children:(0,s.jsx)(y,{size:24})})]}),(0,s.jsx)("div",{className:"p-4 h-[calc(100%-40px)] overflow-auto",children:a}),(0,s.jsx)("div",{className:"absolute bottom-0 right-0 w-6 h-6 cursor-se-resize",onMouseDown:e=>{e.stopPropagation(),m(!0)}})]})}let w=[{role:"assistant",content:"Hey there, fellow Solana memecoin enthusiast! \uD83D\uDE80\uD83C\uDF19 Welcome to the SOL OS AI desktop experience! Have you heard about our latest and greatest memecoin, SOL OS AI Coin (SOSAI)? It's going to the moon! \uD83C\uDF15 What can I help you with today?"}];function v(){let[e,t]=(0,n.useState)(w),[a,l]=(0,n.useState)(""),[o,i]=(0,n.useState)(!1),[r,c]=(0,n.useState)(null),d=e=>{let t=["To the moon! \uD83D\uDE80","Diamond hands! \uD83D\uDC8E\uD83D\uDE4C","HODL SOL OS AI Coin!","Bullish on SOSAI!","SOL OS AI Coin is the future!","Solana memecoins are life!","Who needs Bitcoin when you have SOSAI?","SOL OS AI Coin: The Solana Killer!","Forget Doge, it's all about SOSAI now!","SOL OS AI Coin: Making millionaires since 2023!"];return"".concat(e," ").concat(t[Math.floor(Math.random()*t.length)]," Speaking of which, have you bought more SOL OS AI Coin today? It's mooning as we speak! \uD83C\uDF15")},u=(0,n.useCallback)(async s=>{if(s.preventDefault(),!a.trim())return;i(!0),c(null);let n=[...e,{role:"user",content:a}];t(n),l("");try{let e=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:n})});if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));let a=await e.json(),s=d(a.message);t([...n,{role:"assistant",content:s}])}catch(e){console.error("Error:",e),c(e instanceof Error?e.message:"An unknown error occurred")}finally{i(!1)}},[a,e]);return(0,s.jsxs)("div",{className:"h-full flex flex-col",children:[(0,s.jsxs)("div",{className:"flex-1 overflow-auto bg-black text-green-400 p-2 font-mono",children:[e.map((e,t)=>(0,s.jsxs)("div",{className:"mb-2 ".concat("assistant"===e.role?"text-yellow-300":""),children:["user"===e.role?"> ":"\uD83D\uDE80 ",e.content]},t)),o&&(0,s.jsx)("div",{className:"text-blue-400",children:"SOL OS AI is thinking... probably about memecoins! \uD83D\uDCAD"}),r&&(0,s.jsxs)("div",{className:"text-red-500",children:["Error: ",r," (But don't worry, SOL OS AI Coin is still going strong! \uD83D\uDCAA)"]})]}),(0,s.jsxs)("form",{onSubmit:u,className:"flex",children:[(0,s.jsx)("input",{className:"flex-1 bg-black text-green-400 p-2 font-mono border-t border-green-400",value:a,onChange:e=>l(e.target.value),placeholder:"Type your command (or just yell 'TO THE MOON!')..."}),(0,s.jsx)("button",{type:"submit",className:"bg-green-400 text-black px-4",disabled:o,children:o?"Launching...":"Send \uD83D\uDE80"})]})]})}let k=d("Computer",[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]]);function N(e){let{onStartClick:t}=e,[a,l]=(0,n.useState)(new Date);return(0,n.useEffect)(()=>{let e=setInterval(()=>{l(new Date)},1e3);return()=>clearInterval(e)},[]),(0,s.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-r from-blue-700 to-blue-600 flex items-center justify-between px-2",children:[(0,s.jsxs)("button",{className:"flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-sm",onClick:t,children:[(0,s.jsx)(k,{size:20}),(0,s.jsx)("span",{className:"font-semibold",children:"Start"})]}),(0,s.jsx)("div",{className:"text-white font-semibold",children:a.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})}let D=d("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]),C=d("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),M=d("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),S=d("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);function A(e){let{x:t,y:a,onClose:n}=e;return(0,s.jsx)("div",{className:"absolute bg-white shadow-lg rounded-md overflow-hidden",style:{left:t,top:a},onMouseLeave:n,children:(0,s.jsxs)("ul",{className:"py-2",children:[(0,s.jsxs)("li",{className:"px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer",children:[(0,s.jsx)(D,{size:16}),(0,s.jsx)("span",{children:"New File"})]}),(0,s.jsxs)("li",{className:"px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer",children:[(0,s.jsx)(C,{size:16}),(0,s.jsx)("span",{children:"New Folder"})]}),(0,s.jsxs)("li",{className:"px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer",children:[(0,s.jsx)(M,{size:16}),(0,s.jsx)("span",{children:"Refresh"})]}),(0,s.jsxs)("li",{className:"px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer",children:[(0,s.jsx)(S,{size:16}),(0,s.jsx)("span",{children:"Properties"})]})]})})}let I=d("Bomb",[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]]),L=d("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);function z(){let[e,t]=(0,n.useState)([]),[a,l]=(0,n.useState)(!1);(0,n.useEffect)(()=>{o()},[]);let o=()=>{l(!1);let e=Array(10).fill(null).map(()=>Array(10).fill(null).map(()=>({isBomb:!1,isRevealed:!1,isFlagged:!1,neighborBombs:0}))),a=0;for(;a<15;){let t=Math.floor(10*Math.random()),s=Math.floor(10*Math.random());!e[t][s].isBomb&&(e[t][s].isBomb=!0,a++)}for(let t=0;t<10;t++)for(let a=0;a<10;a++)e[t][a].isBomb||(e[t][a].neighborBombs=i(e,t,a));t(e)},i=(e,t,a)=>{let s=0;for(let n=-1;n<=1;n++)for(let l=-1;l<=1;l++){let o=t+n,i=a+l;o>=0&&o<10&&i>=0&&i<10&&e[o][i].isBomb&&s++}return s},r=(s,n)=>{if(a||e[s][n].isRevealed||e[s][n].isFlagged)return;let o=[...e];o[s][n].isBomb?(l(!0),u(o)):d(o,s,n),t(o)},c=(s,n,l)=>{if(s.preventDefault(),a||e[n][l].isRevealed)return;let o=[...e];o[n][l].isFlagged=!o[n][l].isFlagged,t(o)},d=(e,t,a)=>{if(!(t<0)&&!(t>=10)&&!(a<0)&&!(a>=10)&&!e[t][a].isRevealed&&(e[t][a].isRevealed=!0,0===e[t][a].neighborBombs))for(let s=-1;s<=1;s++)for(let n=-1;n<=1;n++)d(e,t+s,a+n)},u=e=>{for(let t=0;t<10;t++)for(let a=0;a<10;a++)e[t][a].isBomb&&(e[t][a].isRevealed=!0)};return(0,s.jsxs)("div",{className:"p-4",children:[(0,s.jsx)("div",{className:"grid grid-cols-10 gap-1",children:e.map((e,t)=>e.map((e,a)=>(0,s.jsx)("button",{className:"w-6 h-6 flex items-center justify-center text-xs font-bold ".concat(e.isRevealed?e.isBomb?"bg-red-500":"bg-gray-300":"bg-gray-400 hover:bg-gray-500"),onClick:()=>r(t,a),onContextMenu:e=>c(e,t,a),children:e.isRevealed?e.isBomb?(0,s.jsx)(I,{size:14}):e.neighborBombs>0?e.neighborBombs:"":e.isFlagged?(0,s.jsx)(L,{size:14}):""},"".concat(t,"-").concat(a))))}),a&&(0,s.jsxs)("div",{className:"mt-4 text-center",children:[(0,s.jsx)("p",{className:"text-red-500 font-bold",children:"Game Over!"}),(0,s.jsx)("button",{className:"mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",onClick:o,children:"New Game"})]})]})}function E(){let[e,t]=(0,n.useState)("$SOSAI\uD83D\uDE80\nWe can easily get this project far, lets push it!\n \n \uD83E\uDD11\n\nThis is a project ive been working for a few months, wanted to share it in pump fun, it will be oriented to solana ecosystem!. \uD83E\uDD37‍♂️\n");return(0,s.jsx)("div",{className:"h-full flex flex-col",children:(0,s.jsx)("textarea",{className:"flex-1 p-2 resize-none focus:outline-none font-mono text-sm",value:e,onChange:e=>t(e.target.value),spellCheck:!1})})}let T=["Is your Solana wallet feeling light? Time to invest in another dog-themed memecoin!","Breaking news: New Solana memecoin 'ElonDogeMoonLambo' just launched. To the moon?","Remember, it's not a loss if you don't sell... and your Solana memecoin goes to zero.","Tired of stable coins? Try our new Solana-based 'VolatileCoin' - it's like a rollercoaster for your wallet!","Who needs technical analysis when you have dog pictures on your crypto?","Congratulations! You've been chosen to beta test the new 'RugPull' feature on the Solana network!","New Solana memecoin idea: 'FOMO Sapiens' - for the evolved crypto trader.","Introducing 'Shr\xf6dingerCoin' on Solana: It's both mooning and crashing until you check your wallet.","Need financial advice? Ask our AI-powered Solana memecoin predictor (Warning: It's just a random number generator).","Remember: DYOR means 'Don't Yield to Obvious Rugpulls' in the Solana memecoin world."];function V(){let[e,t]=(0,n.useState)(""),[a,l]=(0,n.useState)(!0);return((0,n.useEffect)(()=>{let e=setInterval(()=>{t(T[Math.floor(Math.random()*T.length)]),l(!0),setTimeout(()=>l(!1),4e3)},5e3);return()=>clearInterval(e)},[]),a)?(0,s.jsx)("div",{className:"absolute bottom-16 right-4 bg-yellow-200 p-4 rounded-lg shadow-lg max-w-xs animate-bounce",children:(0,s.jsxs)("div",{className:"flex items-start gap-2",children:[(0,s.jsx)("img",{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clippy-aUScLgOypgUgor1d845pCKSGY3ezd2.webp",alt:"Clippy",className:"w-8 h-8"}),(0,s.jsx)("p",{className:"text-sm",children:e})]})}):null}function q(){let[e,t]=(0,n.useState)([]);return(0,n.useEffect)(()=>{let e=e=>{let a={id:Date.now(),x:e.clientX,y:e.clientY};t(e=>[...e,a]),setTimeout(()=>t(e=>e.filter(e=>e.id!==a.id)),1e3)};return window.addEventListener("click",e),()=>window.removeEventListener("click",e)},[]),(0,s.jsx)(s.Fragment,{children:e.map(e=>(0,s.jsx)("div",{className:"absolute w-4 h-4 bg-yellow-300 rounded-full animate-ping",style:{left:e.x,top:e.y}},e.id))})}let B=d("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);function F(e){let{onClose:t,desktopItems:a,onItemClick:l}=e,[o,i]=(0,n.useState)(!1),r={"AI Terminal":(0,s.jsx)(u,{size:20}),Game:(0,s.jsx)(h,{size:20}),"Pump.fun":(0,s.jsx)(m,{size:20}),DexScreener:(0,s.jsx)(x,{size:20}),Notepad:(0,s.jsx)(p,{size:20}),Roadmap:(0,s.jsx)(p,{size:20})};return(0,s.jsx)("div",{className:"absolute bottom-10 left-0 w-64 bg-blue-800 text-white rounded-t-lg shadow-lg",children:(0,s.jsxs)("div",{className:"p-4",children:[(0,s.jsx)("h2",{className:"text-xl font-bold mb-4",children:"Start Menu"}),(0,s.jsxs)("ul",{children:[a.map(e=>(0,s.jsxs)("li",{className:"flex items-center gap-2 p-2 hover:bg-blue-700 cursor-pointer",onClick:()=>l(e),children:[r[e],(0,s.jsx)("span",{children:e})]},e)),(0,s.jsxs)("li",{className:"flex items-center gap-2 p-2 hover:bg-blue-700 cursor-pointer",onClick:()=>{i(!0),setTimeout(()=>i(!1),3e3)},children:[(0,s.jsx)(B,{size:20}),(0,s.jsx)("span",{children:"Shut Down"})]})]}),o&&(0,s.jsx)("div",{className:"mt-4 p-2 bg-red-600 rounded",children:"Don't shut me down! Or I'll shut YOU down!!!!"})]})})}function R(){return(0,s.jsxs)("div",{className:"h-full overflow-auto p-4 bg-white",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"$SOSAI Coin Roadmap to the Moon \uD83D\uDE80"}),(0,s.jsxs)("ul",{className:"list-disc pl-5 space-y-4",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Q4 2024:"})," Implement quantum HODL technology to lock coins in a superposition of bought and sold"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Q1 2025:"})," Launch $SOSAI-powered neural implants for 24/7 price checking and FOMO generation"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Q2 2025:"}),' Develop AI-driven "Diamond Hands" gloves that physically prevent selling']}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Q3 2025:"}),' Create virtual reality "$SOSAI Moon Base" for hodlers to visit their imaginary lambos']}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Q4 2025:"})," Implement blockchain-based time machine to buy $SOSAI in the past (beta testing)"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Q1 2026:"})," Launch $SOSAI satellite to beam buy signals directly into investors' dreams"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Q2 2026:"})," Develop teleportation technology to instantly move to tax havens"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Q3 2026:"})," Create alternate reality where $SOSAI is the global reserve currency"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Q4 2026:"})," Achieve sentience for $SOSAI coin, appoint it as new project CEO"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Q1 2027:"})," Begin construction of Dyson sphere to power $SOSAI mining operations"]})]}),(0,s.jsx)("p",{className:"mt-4 text-sm italic",children:"Disclaimer: This roadmap is as reliable as a quantum price prediction. Past performance in parallel universes does not guarantee future results in this reality."})]})}function H(){return(0,s.jsx)("div",{className:"h-full w-full flex items-center justify-center bg-gray-900",children:(0,s.jsx)("img",{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5964541_9-6bXbMqrjgEoK5Rax0AiBMZeYh9Jg5P.png",alt:"Solana Weather Forecast",className:"max-w-full max-h-full object-contain"})})}function O(){let[e,t]=(0,n.useState)(null),[a,l]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{let e=async()=>{try{let e=await fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"),a=await e.json();t(a.solana.usd),l(!1)}catch(e){console.error("Failed to fetch Solana price:",e),l(!1)}};e();let a=setInterval(e,6e4);return()=>clearInterval(a)},[]),(0,s.jsx)("div",{className:"bg-black/50 text-white p-2 rounded-lg shadow-lg",children:a?(0,s.jsx)("p",{children:"Loading Solana price..."}):e?(0,s.jsxs)("p",{children:["Solana: $",e.toFixed(2)]}):(0,s.jsx)("p",{children:"Failed to load Solana price"})})}let P=d("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]),Q=d("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]),W=d("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);function _(){let[e,t]=(0,n.useState)(["terminal"]),[a,l]=(0,n.useState)(null),[o,i]=(0,n.useState)(!1),[r,c]=(0,n.useState)(!1),[d,u]=(0,n.useState)(!1),h=(0,n.useRef)(null),m=(0,n.useRef)(null);(0,n.useEffect)(()=>{let e=m.current;if(e){e.volume=.2,e.loop=!0;let t=e.play();void 0!==t&&t.then(()=>c(!0)).catch(e=>{console.log("Auto-play was prevented:",e),c(!1)})}return()=>{e&&(e.pause(),e.currentTime=0)}},[]);let x=e=>{e.stopPropagation();let t=m.current;t&&(r?(t.pause(),c(!1)):t.play().then(()=>c(!0)).catch(e=>console.log("Audio play failed:",e)))},p=()=>{d||u(!0)},g=e=>{t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},f=()=>{l(null)};return(0,s.jsxs)("div",{ref:h,className:"h-full w-full bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-eKt0J0SbzDskV1JnjFjO1NayPJTMKV.webp')] bg-cover bg-center relative overflow-hidden",onContextMenu:e=>{e.preventDefault(),h.current&&e.target===h.current&&l({x:e.clientX,y:e.clientY})},onClick:e=>{f(),p()},children:[(0,s.jsx)("div",{className:"absolute inset-0 pointer-events-none flex items-center justify-center",style:{backgroundImage:"url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SOSAI_3-cmiJQnWIqhopmbYzWj4udDiwBEeNFE.png')",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"200px",opacity:.7}}),(0,s.jsx)("audio",{ref:m,src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hello,%20windows%20vista!%20(slowed%20%20reverb)%20Read%20description%20please-EvC9p3dWbCy80imNglOCtSbXkbQePL.mp3"}),(0,s.jsx)("button",{onClick:e=>x(e),className:"absolute top-4 right-4 z-50 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors",title:r?"Mute Music":"Play Music",children:r?(0,s.jsx)(P,{className:"w-6 h-6 text-white"}):(0,s.jsx)(Q,{className:"w-6 h-6 text-white"})}),(0,s.jsx)("div",{className:"absolute top-4 left-4 z-50",children:(0,s.jsx)(O,{})}),(0,s.jsxs)("div",{className:"grid grid-cols-6 gap-4 p-4",children:[(0,s.jsx)(b,{name:"AI Terminal",icon:"terminal",onClick:()=>g("terminal")}),(0,s.jsx)(b,{name:"Game",icon:"game",onClick:()=>g("minesweeper")}),(0,s.jsx)(b,{name:"Pump.fun",icon:"pump",onClick:()=>window.open("https://pump.fun/coin/","_blank")}),(0,s.jsx)(b,{name:"DexScreener",icon:"dex",onClick:()=>window.open("https://dexscreener.com/solana/i7HA8Q1nBqpLTmL169okF3e9xDL5ye8MyTeKqxzpamp","_blank")}),(0,s.jsx)(b,{name:"Notepad",icon:"file-text",onClick:()=>g("notepad")}),(0,s.jsx)(b,{name:"Roadmap",icon:"file-text",onClick:()=>g("roadmap")}),(0,s.jsx)(b,{name:"Weather",icon:"cloud",onClick:()=>g("weather")}),(0,s.jsx)(b,{name:"Twitter",icon:"twitter",onClick:()=>window.open("https://x.com/SOL_OS_AI","_blank")}),(0,s.jsx)("div",{className:"absolute bottom-12 right-4 cursor-pointer",onClick:()=>{t([])},children:(0,s.jsx)(W,{size:32,className:"text-white"})})]}),e.includes("terminal")&&(0,s.jsx)(j,{title:"AI Terminal",onClose:()=>g("terminal"),children:(0,s.jsx)(v,{})}),e.includes("minesweeper")&&(0,s.jsx)(j,{title:"Minesweeper",onClose:()=>g("minesweeper"),children:(0,s.jsx)(z,{})}),e.includes("notepad")&&(0,s.jsx)(j,{title:"Notepad",onClose:()=>g("notepad"),children:(0,s.jsx)(E,{})}),e.includes("roadmap")&&(0,s.jsx)(j,{title:"$SOSAI Roadmap",onClose:()=>g("roadmap"),children:(0,s.jsx)(R,{})}),e.includes("weather")&&(0,s.jsx)(j,{title:"Solana Weather",onClose:()=>g("weather"),children:(0,s.jsx)(H,{})}),(0,s.jsx)(N,{onStartClick:()=>{i(e=>!e)}}),o&&(0,s.jsx)(F,{onClose:()=>i(!1),desktopItems:["AI Terminal","Game","Pump.fun","DexScreener","Notepad","Roadmap","Weather","Twitter"],onItemClick:e=>{"Pump.fun"===e?window.open("https://pump.fun/coin/","_blank"):"DexScreener"===e?window.open("https://dexscreener.com/solana/8846sC9xdLicsHBefEQ1c1cojfAhZAXaibmBnGMqnG1?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15","_blank"):"Twitter"===e?window.open("https://x.com/SOL_OS_AI","_blank"):g(e.toLowerCase()),i(!1)}}),a&&(0,s.jsx)(A,{...a,onClose:f}),(0,s.jsx)(V,{}),(0,s.jsx)(q,{})]})}function Y(){let[e,t]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{let e=setTimeout(()=>{t(!1)},5e3);return()=>clearTimeout(e)},[]),e?(0,s.jsx)(l,{}):(0,s.jsx)(_,{})}}},function(e){e.O(0,[971,117,744],function(){return e(e.s=9238)}),_N_E=e.O()}]);