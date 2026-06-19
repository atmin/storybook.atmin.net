import{r as x,j as e,P as H,N as $,h as k,i as b,b as C,S as B,a as W,k as z,B as S}from"./iframe-G8plW4P5.js";import{c as h}from"./createLucideIcon-DgTG2hH4.js";import"./preload-helper-PPVm8Dsz.js";const V=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]],P=h("notebook",V);const Y=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],K=h("settings",Y);const F=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],G=h("square-pen",F);function N(t){const n=Math.floor((Date.now()-t)/1e3);if(n<60)return"just now";const r=Math.floor(n/60);if(r<60)return`${r}m ago`;const o=Math.floor(r/60);return o<24?`${o}h ago`:`${Math.floor(o/24)}d ago`}const T=t=>e.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-lg dark:bg-white/10",children:t});function E({serverOk:t,conversations:n,contacts:r,displayNames:o,userId:v,onOpen:u,onNewChat:j}){const[R,i]=x.useState(!1),[g,w]=x.useState(""),y=t===!0?"Server online":t===!1?"Server offline":"Connecting to server",O=t===!0?"bg-green-500":t===!1?"bg-red-500":"bg-yellow-500",c=n.find(s=>s.conversationId.startsWith("self:")),f=n.filter(s=>!s.conversationId.startsWith("self:")),U=s=>{const a=s.split(":");return a[1]===v?a[2]:a[1]},M=s=>r.get(s)??s.slice(0,8),_=s=>o.get(s)||M(s),L=()=>{const s=g.trim();s&&(j(s),i(!1),w(""))},A=e.jsxs("span",{className:"flex items-center justify-center gap-1.5 font-semibold",children:["atmin",e.jsx("span",{role:"img","aria-label":y,title:y,className:`inline-block h-2 w-2 rounded-full ${O}`})]}),D=e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{type:"button","aria-label":"New chat",onClick:()=>i(!0),className:"flex h-10 w-10 items-center justify-center active:opacity-60",children:e.jsx(G,{className:"h-5 w-5"})}),e.jsx("button",{type:"button","aria-label":"Settings",onClick:()=>u("/settings"),className:"flex h-10 w-10 items-center justify-center active:opacity-60",children:e.jsx(K,{className:"h-5 w-5"})})]});return e.jsxs(H,{children:[e.jsx($,{title:A,right:D}),e.jsxs(k,{strong:!0,inset:!0,children:[e.jsx(b,{link:!0,title:"Saved Messages",subtitle:c?c.lastMessageText:"Your private notes",after:c?N(c.lastMessageTimestamp):void 0,media:T(e.jsx(P,{className:"h-5 w-5"})),onClick:()=>u("/saved")}),f.map(s=>{const a=U(s.conversationId),q=M(a);return e.jsx(b,{link:!0,title:_(a),subtitle:s.lastMessageText,after:N(s.lastMessageTimestamp),media:T("💬"),onClick:()=>u(`/@${encodeURIComponent(q)}`)},s.conversationId)})]}),f.length===0&&e.jsx(C,{className:"text-center text-sm opacity-60",children:"No conversations yet — tap the compose button to start one."}),e.jsxs(B,{opened:R,onBackdropClick:()=>i(!1),className:"w-full pb-8",children:[e.jsx(W,{children:"New chat"}),e.jsx(k,{strong:!0,inset:!0,children:e.jsx(z,{type:"text",placeholder:"Enter a handle...",value:g,onChange:s=>w(s.target.value)})}),e.jsxs(C,{className:"flex gap-3",children:[e.jsx(S,{clear:!0,onClick:()=>i(!1),children:"Cancel"}),e.jsx(S,{onClick:L,disabled:!g.trim(),children:"Start chat"})]})]})]})}E.__docgenInfo={description:"",methods:[],displayName:"ChatsView",props:{serverOk:{required:!0,tsType:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},description:""},conversations:{required:!0,tsType:{name:"Array",elements:[{name:"StoredConversation"}],raw:"StoredConversation[]"},description:""},contacts:{required:!0,tsType:{name:"Map",elements:[{name:"string"},{name:"string"}],raw:"Map<string, string>"},description:""},displayNames:{required:!0,tsType:{name:"Map",elements:[{name:"string"},{name:"string"}],raw:"Map<string, string>"},description:""},userId:{required:!0,tsType:{name:"string"},description:""},onOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:"Navigate (forward View Transition) to a chat / settings route."},onNewChat:{required:!0,tsType:{name:"signature",type:"function",raw:"(handle: string) => void",signature:{arguments:[{type:{name:"string"},name:"handle"}],return:{name:"void"}}},description:""}}};const{fn:I}=__STORYBOOK_MODULE_TEST__,Z={title:"Chat/ChatsView",component:E,parameters:{layout:"fullscreen"},args:{onNewChat:I(),onOpen:I()}},l={args:{serverOk:!0,conversations:[],contacts:new Map,displayNames:new Map,userId:"01USER123"}},d={args:{serverOk:!0,conversations:[{conversationId:"dm:01USER123:01OTHER456",lastMessageText:"See you tomorrow!",lastMessageTimestamp:Date.now()-1e3*60*5,messageCount:12},{conversationId:"dm:01USER123:01ALICE789",lastMessageText:"The encryption looks solid.",lastMessageTimestamp:Date.now()-1e3*60*60*2,messageCount:45},{conversationId:"self:01USER123",lastMessageText:"Remember to review the key backup code",lastMessageTimestamp:Date.now()-1e3*60*60*24,messageCount:7}],contacts:new Map([["01OTHER456","silver-hawk"],["01ALICE789","gentle-breeze"]]),displayNames:new Map([["01ALICE789","Alice Wonderland"]]),userId:"01USER123"}},m={args:{serverOk:!1,conversations:[],contacts:new Map,displayNames:new Map,userId:"01USER123"}},p={args:{serverOk:null,conversations:[],contacts:new Map,displayNames:new Map,userId:"01USER123"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    serverOk: true,
    conversations: [],
    contacts: new Map(),
    displayNames: new Map(),
    userId: '01USER123'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    serverOk: true,
    conversations: [{
      conversationId: 'dm:01USER123:01OTHER456',
      lastMessageText: 'See you tomorrow!',
      lastMessageTimestamp: Date.now() - 1000 * 60 * 5,
      messageCount: 12
    }, {
      conversationId: 'dm:01USER123:01ALICE789',
      lastMessageText: 'The encryption looks solid.',
      lastMessageTimestamp: Date.now() - 1000 * 60 * 60 * 2,
      messageCount: 45
    }, {
      conversationId: 'self:01USER123',
      lastMessageText: 'Remember to review the key backup code',
      lastMessageTimestamp: Date.now() - 1000 * 60 * 60 * 24,
      messageCount: 7
    }],
    contacts: new Map([['01OTHER456', 'silver-hawk'], ['01ALICE789', 'gentle-breeze']]),
    displayNames: new Map([['01ALICE789', 'Alice Wonderland']]),
    userId: '01USER123'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    serverOk: false,
    conversations: [],
    contacts: new Map(),
    displayNames: new Map(),
    userId: '01USER123'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    serverOk: null,
    conversations: [],
    contacts: new Map(),
    displayNames: new Map(),
    userId: '01USER123'
  }
}`,...p.parameters?.docs?.source}}};const ee=["Empty","WithConversations","ServerDown","ServerConnecting"];export{l as Empty,p as ServerConnecting,m as ServerDown,d as WithConversations,ee as __namedExportsOrder,Z as default};
