import{r as N,j as e,m as V,N as P,L as E,i as T,b as C,S as K,a as Y,p as F,B as j}from"./iframe-BcmkuDE_.js";import{i as G}from"./media-BO-BlET4.js";import{c as w}from"./createLucideIcon-xwYUcDU8.js";import"./preload-helper-PPVm8Dsz.js";const Q=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]],X=w("notebook",Q);const Z=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ee=w("settings",Z);const te=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],se=w("square-pen",te);function ae(n){if(!n.startsWith("{"))return{kind:"text",body:n};let r;try{r=JSON.parse(n)}catch{return{kind:"text",body:n}}if(!r||typeof r!="object")return{kind:"text",body:n};const s=r;if(s.type==="text"&&typeof s.body=="string")return{kind:"text",body:s.body};if(s.type==="media"&&typeof s.body=="string"&&s.file&&typeof s.file=="object"){const t=s.file;if(typeof t.url=="string"&&typeof t.key=="string"&&typeof t.iv=="string"&&typeof t.name=="string"&&typeof t.size=="number"){const i={url:t.url,key:t.key,iv:t.iv,name:t.name,size:t.size};if(typeof t.mime=="string"&&(i.mime=t.mime),typeof t.width=="number"&&(i.width=t.width),typeof t.height=="number"&&(i.height=t.height),typeof t.optimized=="boolean"&&(i.optimized=t.optimized),t.preview&&typeof t.preview=="object"){const o=t.preview;typeof o.url=="string"&&typeof o.key=="string"&&typeof o.iv=="string"&&typeof o.width=="number"&&typeof o.height=="number"&&(i.preview={url:o.url,key:o.key,iv:o.iv,width:o.width,height:o.height})}return{kind:"media",body:s.body,file:i}}}return s.type==="amendment"&&typeof s.target_msg_id=="string"?{kind:"amendment",targetMsgId:s.target_msg_id,action:typeof s.action=="string"?s.action:"",...typeof s.body=="string"?{body:s.body}:{}}:{kind:"unknown"}}function ne(n){const r=ae(n);return r.kind==="text"?r.body.replace(/\s+/g," ").trim():r.kind==="media"?r.file.mime?.startsWith("image/")||G(r.file.name)?"<photo>":"<file>":""}function R({text:n,deleted:r,draft:s}){return s?e.jsxs("span",{className:"line-clamp-1","data-testid":"conversation-preview",children:[e.jsx("span",{className:"text-destructive",children:"Draft:"})," ",s.replace(/\s+/g," ").trim()]}):r?e.jsx("span",{className:"line-clamp-1 italic opacity-50","data-testid":"conversation-preview",children:"[deleted]"}):e.jsx("span",{className:"line-clamp-1","data-testid":"conversation-preview",children:ne(n)})}function O(n){const r=Math.floor((Date.now()-n)/1e3);if(r<60)return"just now";const s=Math.floor(r/60);if(s<60)return`${s}m ago`;const t=Math.floor(s/60);return t<24?`${t}h ago`:`${Math.floor(t/24)}d ago`}const D=n=>e.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-lg dark:bg-white/10",children:n});function A({serverOk:n,conversations:r,contacts:s,displayNames:t,drafts:i=new Map,userId:o,hydrated:L,onOpen:f,onNewChat:_}){const[z,c]=N.useState(!1),[v,b]=N.useState(""),M=n===!0?"Server online":n===!1?"Server offline":"Connecting to server",H=n===!0?"bg-green-500":n===!1?"bg-red-500":"bg-yellow-500",l=r.find(a=>a.conversationId.startsWith("self:")),x=i.get("saved"),k=r.filter(a=>!a.conversationId.startsWith("self:")),q=a=>{const d=a.split(":");return d[1]===o?d[2]:d[1]},S=a=>s.get(a)??a.slice(0,8),J=a=>t.get(a)||S(a),W=()=>{const a=v.trim();a&&(_(a),c(!1),b(""))},B=e.jsxs("span",{className:"flex items-center justify-center gap-1.5 font-semibold",children:["atmin",e.jsx("span",{role:"img","aria-label":M,title:M,className:`inline-block h-2 w-2 rounded-full ${H}`})]}),$=e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{type:"button","aria-label":"New chat",onClick:()=>c(!0),className:"flex h-10 w-10 items-center justify-center active:opacity-60",children:e.jsx(se,{className:"h-5 w-5"})}),e.jsx("button",{type:"button","aria-label":"Settings",onClick:()=>f("/settings"),className:"flex h-10 w-10 items-center justify-center active:opacity-60",children:e.jsx(ee,{className:"h-5 w-5"})})]});return e.jsxs(V,{children:[e.jsx(P,{title:B,right:$}),e.jsxs(E,{strong:!0,inset:!0,children:[e.jsx(T,{link:!0,title:"Saved Messages",subtitle:l||x?e.jsx(R,{text:l?.lastMessageText??"",deleted:l?.lastMessageDeleted,draft:x}):"Your private notes",after:l?O(l.lastMessageTimestamp):void 0,media:D(e.jsx(X,{className:"h-5 w-5"})),onClick:()=>f("/saved")}),k.map(a=>{const d=q(a.conversationId),I=S(d);return e.jsx(T,{link:!0,title:J(d),subtitle:e.jsx(R,{text:a.lastMessageText,deleted:a.lastMessageDeleted,draft:i.get(I)}),after:O(a.lastMessageTimestamp),media:D("💬"),onClick:()=>f(`/@${encodeURIComponent(I)}`)},a.conversationId)})]}),L&&k.length===0&&e.jsx(C,{className:"text-center text-sm opacity-60",children:"No conversations yet — tap the compose button to start one."}),e.jsxs(K,{opened:z,onBackdropClick:()=>c(!1),className:"w-full pb-8",children:[e.jsx(Y,{children:"New chat"}),e.jsx(E,{strong:!0,inset:!0,children:e.jsx(F,{type:"text",placeholder:"Enter a handle...",value:v,onChange:a=>b(a.target.value)})}),e.jsxs(C,{className:"flex gap-3",children:[e.jsx(j,{rounded:!0,clear:!0,onClick:()=>c(!1),children:"Cancel"}),e.jsx(j,{rounded:!0,onClick:W,disabled:!v.trim(),children:"Start chat"})]})]})]})}A.__docgenInfo={description:"",methods:[],displayName:"ChatsView",props:{serverOk:{required:!0,tsType:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},description:""},conversations:{required:!0,tsType:{name:"Array",elements:[{name:"StoredConversation"}],raw:"StoredConversation[]"},description:""},contacts:{required:!0,tsType:{name:"Map",elements:[{name:"string"},{name:"string"}],raw:"Map<string, string>"},description:""},displayNames:{required:!0,tsType:{name:"Map",elements:[{name:"string"},{name:"string"}],raw:"Map<string, string>"},description:""},drafts:{required:!1,tsType:{name:"Map",elements:[{name:"string"},{name:"string"}],raw:"Map<string, string>"},description:'Unsent drafts keyed by conversation handle ("saved" for Saved Messages).',defaultValue:{value:"new Map()",computed:!1}},userId:{required:!0,tsType:{name:"string"},description:""},hydrated:{required:!0,tsType:{name:"boolean"},description:`False until the first IndexedDB read resolves. Gates the empty state so a
populated account never flashes "No conversations yet" on reload while the
local read is in flight.`},onOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:"Navigate (forward View Transition) to a chat / settings route."},onNewChat:{required:!0,tsType:{name:"signature",type:"function",raw:"(handle: string) => void",signature:{arguments:[{type:{name:"string"},name:"handle"}],return:{name:"void"}}},description:""}}};const{fn:U}=__STORYBOOK_MODULE_TEST__,le={title:"Chat/ChatsView",component:A,parameters:{layout:"fullscreen"},args:{hydrated:!0,onNewChat:U(),onOpen:U()}},p={args:{serverOk:!0,conversations:[],contacts:new Map,displayNames:new Map,userId:"01USER123"}},m={args:{serverOk:!0,conversations:[],contacts:new Map,displayNames:new Map,userId:"01USER123",hydrated:!1}},u={args:{serverOk:!0,conversations:[{conversationId:"dm:01USER123:01OTHER456",lastMessageText:JSON.stringify({type:"text",body:"See you tomorrow!"}),lastMessageTimestamp:Date.now()-1e3*60*5,messageCount:12},{conversationId:"dm:01USER123:01ALICE789",lastMessageText:JSON.stringify({type:"media",body:"sunset.jpg",file:{url:"media/01OTHER/x",key:"k",iv:"i",name:"sunset.jpg",size:482113,mime:"image/jpeg"}}),lastMessageTimestamp:Date.now()-1e3*60*60*2,messageCount:45},{conversationId:"self:01USER123",lastMessageText:JSON.stringify({type:"text",body:"Remember to review the key backup code before the audit, and double-check the rotation schedule for next week as well"}),lastMessageTimestamp:Date.now()-1e3*60*60*24,messageCount:7}],contacts:new Map([["01OTHER456","silver-hawk"],["01ALICE789","gentle-breeze"]]),displayNames:new Map([["01ALICE789","Alice Wonderland"]]),userId:"01USER123"}},g={args:{serverOk:!0,conversations:[{conversationId:"dm:01USER123:01OTHER456",lastMessageText:JSON.stringify({type:"text",body:"See you tomorrow!"}),lastMessageTimestamp:Date.now()-1e3*60*5,messageCount:12},{conversationId:"dm:01USER123:01ALICE789",lastMessageText:"",lastMessageDeleted:!0,lastMessageTimestamp:Date.now()-1e3*60*30,messageCount:8},{conversationId:"self:01USER123",lastMessageText:JSON.stringify({type:"text",body:"Buy milk"}),lastMessageTimestamp:Date.now()-1e3*60*60*24,messageCount:3}],contacts:new Map([["01OTHER456","silver-hawk"],["01ALICE789","gentle-breeze"]]),displayNames:new Map([["01ALICE789","Alice Wonderland"]]),drafts:new Map([["silver-hawk","actually, let me check my calendar first"],["saved","todo: renew passport"]]),userId:"01USER123"}},y={args:{serverOk:!1,conversations:[],contacts:new Map,displayNames:new Map,userId:"01USER123"}},h={args:{serverOk:null,conversations:[],contacts:new Map,displayNames:new Map,userId:"01USER123"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    conversations: [],
    contacts: new Map(),
    displayNames: new Map(),
    userId: '01USER123',
    hydrated: false
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    serverOk: true,
    conversations: [{
      conversationId: 'dm:01USER123:01OTHER456',
      // Stored last message — overridden in the row by the live draft.
      lastMessageText: JSON.stringify({
        type: 'text',
        body: 'See you tomorrow!'
      }),
      lastMessageTimestamp: Date.now() - 1000 * 60 * 5,
      messageCount: 12
    }, {
      conversationId: 'dm:01USER123:01ALICE789',
      // Latest message was deleted — the row shows "[deleted]".
      lastMessageText: '',
      lastMessageDeleted: true,
      lastMessageTimestamp: Date.now() - 1000 * 60 * 30,
      messageCount: 8
    }, {
      conversationId: 'self:01USER123',
      lastMessageText: JSON.stringify({
        type: 'text',
        body: 'Buy milk'
      }),
      lastMessageTimestamp: Date.now() - 1000 * 60 * 60 * 24,
      messageCount: 3
    }],
    contacts: new Map([['01OTHER456', 'silver-hawk'], ['01ALICE789', 'gentle-breeze']]),
    displayNames: new Map([['01ALICE789', 'Alice Wonderland']]),
    // Keyed by conversation handle ("saved" for Saved Messages).
    drafts: new Map([['silver-hawk', 'actually, let me check my calendar first'], ['saved', 'todo: renew passport']]),
    userId: '01USER123'
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    serverOk: false,
    conversations: [],
    contacts: new Map(),
    displayNames: new Map(),
    userId: '01USER123'
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    serverOk: null,
    conversations: [],
    contacts: new Map(),
    displayNames: new Map(),
    userId: '01USER123'
  }
}`,...h.parameters?.docs?.source}}};const ce=["Empty","Hydrating","WithConversations","DraftsAndDeleted","ServerDown","ServerConnecting"];export{g as DraftsAndDeleted,p as Empty,m as Hydrating,h as ServerConnecting,y as ServerDown,u as WithConversations,ce as __namedExportsOrder,le as default};
