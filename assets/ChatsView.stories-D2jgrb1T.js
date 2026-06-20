import{r as k,j as t,m as H,N as J,L as x,i as M,b as S,S as W,a as $,p as B,B as j}from"./iframe-CtSQpU8Y.js";import{i as P}from"./media-BO-BlET4.js";import{c as h}from"./createLucideIcon-Ckykkxlo.js";import"./preload-helper-PPVm8Dsz.js";const V=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]],Y=h("notebook",V);const K=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],F=h("settings",K);const G=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Q=h("square-pen",G);function X(a){if(!a.startsWith("{"))return{kind:"text",body:a};let r;try{r=JSON.parse(a)}catch{return{kind:"text",body:a}}if(!r||typeof r!="object")return{kind:"text",body:a};const s=r;if(s.type==="text"&&typeof s.body=="string")return{kind:"text",body:s.body};if(s.type==="media"&&typeof s.body=="string"&&s.file&&typeof s.file=="object"){const e=s.file;if(typeof e.url=="string"&&typeof e.key=="string"&&typeof e.iv=="string"&&typeof e.name=="string"&&typeof e.size=="number"){const i={url:e.url,key:e.key,iv:e.iv,name:e.name,size:e.size};if(typeof e.mime=="string"&&(i.mime=e.mime),typeof e.width=="number"&&(i.width=e.width),typeof e.height=="number"&&(i.height=e.height),typeof e.optimized=="boolean"&&(i.optimized=e.optimized),e.preview&&typeof e.preview=="object"){const o=e.preview;typeof o.url=="string"&&typeof o.key=="string"&&typeof o.iv=="string"&&typeof o.width=="number"&&typeof o.height=="number"&&(i.preview={url:o.url,key:o.key,iv:o.iv,width:o.width,height:o.height})}return{kind:"media",body:s.body,file:i}}}return s.type==="amendment"&&typeof s.target_msg_id=="string"?{kind:"amendment",targetMsgId:s.target_msg_id,action:typeof s.action=="string"?s.action:"",...typeof s.body=="string"?{body:s.body}:{}}:{kind:"unknown"}}function Z(a){const r=X(a);return r.kind==="text"?r.body.replace(/\s+/g," ").trim():r.kind==="media"?r.file.mime?.startsWith("image/")||P(r.file.name)?"<photo>":"<file>":""}function N({text:a}){return t.jsx("span",{className:"line-clamp-1",children:Z(a)})}function C(a){const r=Math.floor((Date.now()-a)/1e3);if(r<60)return"just now";const s=Math.floor(r/60);if(s<60)return`${s}m ago`;const e=Math.floor(s/60);return e<24?`${e}h ago`:`${Math.floor(e/24)}d ago`}const I=a=>t.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-lg dark:bg-white/10",children:a});function E({serverOk:a,conversations:r,contacts:s,displayNames:e,userId:i,onOpen:o,onNewChat:O}){const[R,l]=k.useState(!1),[y,f]=k.useState(""),v=a===!0?"Server online":a===!1?"Server offline":"Connecting to server",_=a===!0?"bg-green-500":a===!1?"bg-red-500":"bg-yellow-500",d=r.find(n=>n.conversationId.startsWith("self:")),w=r.filter(n=>!n.conversationId.startsWith("self:")),U=n=>{const c=n.split(":");return c[1]===i?c[2]:c[1]},b=n=>s.get(n)??n.slice(0,8),L=n=>e.get(n)||b(n),z=()=>{const n=y.trim();n&&(O(n),l(!1),f(""))},A=t.jsxs("span",{className:"flex items-center justify-center gap-1.5 font-semibold",children:["atmin",t.jsx("span",{role:"img","aria-label":v,title:v,className:`inline-block h-2 w-2 rounded-full ${_}`})]}),D=t.jsxs("div",{className:"flex items-center",children:[t.jsx("button",{type:"button","aria-label":"New chat",onClick:()=>l(!0),className:"flex h-10 w-10 items-center justify-center active:opacity-60",children:t.jsx(Q,{className:"h-5 w-5"})}),t.jsx("button",{type:"button","aria-label":"Settings",onClick:()=>o("/settings"),className:"flex h-10 w-10 items-center justify-center active:opacity-60",children:t.jsx(F,{className:"h-5 w-5"})})]});return t.jsxs(H,{children:[t.jsx(J,{title:A,right:D}),t.jsxs(x,{strong:!0,inset:!0,children:[t.jsx(M,{link:!0,title:"Saved Messages",subtitle:d?t.jsx(N,{text:d.lastMessageText}):"Your private notes",after:d?C(d.lastMessageTimestamp):void 0,media:I(t.jsx(Y,{className:"h-5 w-5"})),onClick:()=>o("/saved")}),w.map(n=>{const c=U(n.conversationId),q=b(c);return t.jsx(M,{link:!0,title:L(c),subtitle:t.jsx(N,{text:n.lastMessageText}),after:C(n.lastMessageTimestamp),media:I("💬"),onClick:()=>o(`/@${encodeURIComponent(q)}`)},n.conversationId)})]}),w.length===0&&t.jsx(S,{className:"text-center text-sm opacity-60",children:"No conversations yet — tap the compose button to start one."}),t.jsxs(W,{opened:R,onBackdropClick:()=>l(!1),className:"w-full pb-8",children:[t.jsx($,{children:"New chat"}),t.jsx(x,{strong:!0,inset:!0,children:t.jsx(B,{type:"text",placeholder:"Enter a handle...",value:y,onChange:n=>f(n.target.value)})}),t.jsxs(S,{className:"flex gap-3",children:[t.jsx(j,{rounded:!0,clear:!0,onClick:()=>l(!1),children:"Cancel"}),t.jsx(j,{rounded:!0,onClick:z,disabled:!y.trim(),children:"Start chat"})]})]})]})}E.__docgenInfo={description:"",methods:[],displayName:"ChatsView",props:{serverOk:{required:!0,tsType:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},description:""},conversations:{required:!0,tsType:{name:"Array",elements:[{name:"StoredConversation"}],raw:"StoredConversation[]"},description:""},contacts:{required:!0,tsType:{name:"Map",elements:[{name:"string"},{name:"string"}],raw:"Map<string, string>"},description:""},displayNames:{required:!0,tsType:{name:"Map",elements:[{name:"string"},{name:"string"}],raw:"Map<string, string>"},description:""},userId:{required:!0,tsType:{name:"string"},description:""},onOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:"Navigate (forward View Transition) to a chat / settings route."},onNewChat:{required:!0,tsType:{name:"signature",type:"function",raw:"(handle: string) => void",signature:{arguments:[{type:{name:"string"},name:"handle"}],return:{name:"void"}}},description:""}}};const{fn:T}=__STORYBOOK_MODULE_TEST__,ae={title:"Chat/ChatsView",component:E,parameters:{layout:"fullscreen"},args:{onNewChat:T(),onOpen:T()}},p={args:{serverOk:!0,conversations:[],contacts:new Map,displayNames:new Map,userId:"01USER123"}},m={args:{serverOk:!0,conversations:[{conversationId:"dm:01USER123:01OTHER456",lastMessageText:JSON.stringify({type:"text",body:"See you tomorrow!"}),lastMessageTimestamp:Date.now()-1e3*60*5,messageCount:12},{conversationId:"dm:01USER123:01ALICE789",lastMessageText:JSON.stringify({type:"media",body:"sunset.jpg",file:{url:"media/01OTHER/x",key:"k",iv:"i",name:"sunset.jpg",size:482113,mime:"image/jpeg"}}),lastMessageTimestamp:Date.now()-1e3*60*60*2,messageCount:45},{conversationId:"self:01USER123",lastMessageText:JSON.stringify({type:"text",body:"Remember to review the key backup code before the audit, and double-check the rotation schedule for next week as well"}),lastMessageTimestamp:Date.now()-1e3*60*60*24,messageCount:7}],contacts:new Map([["01OTHER456","silver-hawk"],["01ALICE789","gentle-breeze"]]),displayNames:new Map([["01ALICE789","Alice Wonderland"]]),userId:"01USER123"}},u={args:{serverOk:!1,conversations:[],contacts:new Map,displayNames:new Map,userId:"01USER123"}},g={args:{serverOk:null,conversations:[],contacts:new Map,displayNames:new Map,userId:"01USER123"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    serverOk: true,
    conversations: [],
    contacts: new Map(),
    displayNames: new Map(),
    userId: '01USER123'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    serverOk: true,
    conversations: [{
      conversationId: 'dm:01USER123:01OTHER456',
      // Typed text envelope (the wire format) — the preview shows the
      // body, not the raw JSON.
      lastMessageText: JSON.stringify({
        type: 'text',
        body: 'See you tomorrow!'
      }),
      lastMessageTimestamp: Date.now() - 1000 * 60 * 5,
      messageCount: 12
    }, {
      conversationId: 'dm:01USER123:01ALICE789',
      // A media message previews as "<photo>".
      lastMessageText: JSON.stringify({
        type: 'media',
        body: 'sunset.jpg',
        file: {
          url: 'media/01OTHER/x',
          key: 'k',
          iv: 'i',
          name: 'sunset.jpg',
          size: 482_113,
          mime: 'image/jpeg'
        }
      }),
      lastMessageTimestamp: Date.now() - 1000 * 60 * 60 * 2,
      messageCount: 45
    }, {
      conversationId: 'self:01USER123',
      // A long body is clamped to a single line with an ellipsis.
      lastMessageText: JSON.stringify({
        type: 'text',
        body: 'Remember to review the key backup code before the audit, and double-check the rotation schedule for next week as well'
      }),
      lastMessageTimestamp: Date.now() - 1000 * 60 * 60 * 24,
      messageCount: 7
    }],
    contacts: new Map([['01OTHER456', 'silver-hawk'], ['01ALICE789', 'gentle-breeze']]),
    displayNames: new Map([['01ALICE789', 'Alice Wonderland']]),
    userId: '01USER123'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    serverOk: false,
    conversations: [],
    contacts: new Map(),
    displayNames: new Map(),
    userId: '01USER123'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    serverOk: null,
    conversations: [],
    contacts: new Map(),
    displayNames: new Map(),
    userId: '01USER123'
  }
}`,...g.parameters?.docs?.source}}};const re=["Empty","WithConversations","ServerDown","ServerConnecting"];export{p as Empty,g as ServerConnecting,u as ServerDown,m as WithConversations,re as __namedExportsOrder,ae as default};
