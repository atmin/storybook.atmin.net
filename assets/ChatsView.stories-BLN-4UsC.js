import{j as e,r as f,L as u}from"./iframe-BTk8zBlw.js";import{L as U}from"./Layout-AnePHYUJ.js";import{P as _}from"./PageContent-NJO2eVRV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";function y({className:t}){return e.jsxs("svg",{viewBox:"6 12 92 77",fill:"none",stroke:"currentColor",className:t,xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("title",{children:"atmin.net logo"}),e.jsx("path",{strokeWidth:"5",strokeLinejoin:"round",d:"m 44.344,17.038 c -18.404,0 -33.324,14.92 -33.324,33.324 -0.001,18.405 14.919,33.326 33.324,33.326 9.662,0 13.399,-1.549 22.348,-8.363 6.331,7.355 8.657,9.047 26.826,8.36 -11.684,-7.889 -19.089,-6.848 -16.429,-31.034 2.304,-20.953 -14.503,-35.614 -32.745,-35.613 z"}),e.jsx("circle",{cx:"34.22",cy:"61.12",r:"4",fill:"currentColor",stroke:"none"}),e.jsx("circle",{cx:"45.24",cy:"61.12",r:"4",fill:"currentColor",stroke:"none"}),e.jsx("circle",{cx:"56.26",cy:"61.12",r:"4",fill:"currentColor",stroke:"none"})]})}y.__docgenInfo={description:"",methods:[],displayName:"Logo",props:{className:{required:!1,tsType:{name:"string"},description:""}}};function v(t){const a=Math.floor((Date.now()-t)/1e3);if(a<60)return"just now";const r=Math.floor(a/60);if(r<60)return`${r}m ago`;const o=Math.floor(r/60);return o<24?`${o}h ago`:`${Math.floor(o/24)}d ago`}function b({handle:t,serverOk:a,conversations:r,contacts:o,displayNames:g,userId:j,onNewChat:N,onLogout:M}){const[C,x]=f.useState(!1),[p,T]=f.useState(""),S=()=>{navigator.clipboard.writeText(t),x(!0),setTimeout(()=>x(!1),2e3)},i=r.find(s=>s.conversationId.startsWith("self:")),E=r.filter(s=>!s.conversationId.startsWith("self:")),k=s=>{const n=s.split(":");return n[1]===j?n[2]:n[1]},h=s=>o.get(s)??s.slice(0,8),I=s=>g.get(s)||h(s),R=e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-2 font-mono",children:[e.jsx(y,{className:"h-7 w-7"}),e.jsx("span",{className:"font-bold",children:"atmin"})]}),e.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[e.jsx(u,{to:"/settings",className:"text-xs text-muted-foreground hover:text-foreground",children:"Settings"}),e.jsx("span",{className:`inline-block h-2 w-2 rounded-full ${a===!0?"bg-green-500":a===!1?"bg-red-500":"bg-yellow-500"}`})]})]});return e.jsx(U,{topBar:R,children:e.jsxs(_,{children:[e.jsxs("div",{className:"mb-6 rounded bg-muted p-4",children:[e.jsx("p",{className:"mb-1 text-xs text-muted-foreground",children:"Your handle"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-lg",children:t}),e.jsx("button",{type:"button",onClick:S,className:"text-xs text-muted-foreground hover:text-foreground",children:C?"Copied":"Copy"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(u,{to:"/saved",className:"block rounded border border-border bg-card p-4 hover:bg-accent",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground",children:"📝"}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("div",{className:"font-medium",children:"Saved Messages"}),e.jsx("div",{className:"truncate text-xs text-muted-foreground",children:i?i.lastMessageText:"Your private notes"})]}),i&&e.jsx("span",{className:"shrink-0 text-xs text-muted-foreground",children:v(i.lastMessageTimestamp)})]})}),E.map(s=>{const n=k(s.conversationId),L=h(n),O=I(n);return e.jsx(u,{to:`/@${encodeURIComponent(L)}`,className:"block rounded border border-border bg-card p-4 hover:bg-accent",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground",children:"💬"}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("div",{className:"font-medium",children:O}),e.jsx("div",{className:"truncate text-xs text-muted-foreground",children:s.lastMessageText})]}),e.jsx("span",{className:"shrink-0 text-xs text-muted-foreground",children:v(s.lastMessageTimestamp)})]})},s.conversationId)}),e.jsxs("form",{onSubmit:s=>{s.preventDefault();const n=p.trim();n&&N(n)},className:"flex gap-2",children:[e.jsx("input",{type:"text",value:p,onChange:s=>T(s.target.value),placeholder:"Enter a handle...",className:"flex-1 rounded border border-input bg-background px-3 py-2 text-sm focus:border-ring focus:outline-none"}),e.jsx("button",{type:"submit",disabled:!p.trim(),className:"rounded bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-50",children:"Chat"})]})]}),e.jsx("button",{type:"button",onClick:M,className:"mt-8 text-xs text-muted-foreground hover:text-destructive",children:"Sign out"})]})})}b.__docgenInfo={description:"",methods:[],displayName:"ChatsView",props:{handle:{required:!0,tsType:{name:"string"},description:""},serverOk:{required:!0,tsType:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},description:""},conversations:{required:!0,tsType:{name:"Array",elements:[{name:"StoredConversation"}],raw:"StoredConversation[]"},description:""},contacts:{required:!0,tsType:{name:"Map",elements:[{name:"string"},{name:"string"}],raw:"Map<string, string>"},description:""},displayNames:{required:!0,tsType:{name:"Map",elements:[{name:"string"},{name:"string"}],raw:"Map<string, string>"},description:""},userId:{required:!0,tsType:{name:"string"},description:""},onNewChat:{required:!0,tsType:{name:"signature",type:"function",raw:"(handle: string) => void",signature:{arguments:[{type:{name:"string"},name:"handle"}],return:{name:"void"}}},description:""},onLogout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:w}=__STORYBOOK_MODULE_TEST__,$={title:"Chat/ChatsView",component:b,args:{onNewChat:w(),onLogout:w()}},c={args:{handle:"copper-falcon",serverOk:!0,conversations:[],contacts:new Map,displayNames:new Map,userId:"01USER123"}},d={args:{handle:"copper-falcon",serverOk:!0,conversations:[{conversationId:"dm:01USER123:01OTHER456",lastMessageText:"See you tomorrow!",lastMessageTimestamp:Date.now()-1e3*60*5,messageCount:12},{conversationId:"dm:01USER123:01ALICE789",lastMessageText:"The encryption looks solid.",lastMessageTimestamp:Date.now()-1e3*60*60*2,messageCount:45},{conversationId:"self:01USER123",lastMessageText:"Remember to review the key backup code",lastMessageTimestamp:Date.now()-1e3*60*60*24,messageCount:7}],contacts:new Map([["01OTHER456","silver-hawk"],["01ALICE789","gentle-breeze"]]),displayNames:new Map([["01ALICE789","Alice Wonderland"]]),userId:"01USER123"}},l={args:{handle:"copper-falcon",serverOk:!1,conversations:[],contacts:new Map,displayNames:new Map,userId:"01USER123"}},m={args:{handle:"copper-falcon",serverOk:null,conversations:[],contacts:new Map,displayNames:new Map,userId:"01USER123"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    handle: 'copper-falcon',
    serverOk: true,
    conversations: [],
    contacts: new Map(),
    displayNames: new Map(),
    userId: '01USER123'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    handle: 'copper-falcon',
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    handle: 'copper-falcon',
    serverOk: false,
    conversations: [],
    contacts: new Map(),
    displayNames: new Map(),
    userId: '01USER123'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    handle: 'copper-falcon',
    serverOk: null,
    conversations: [],
    contacts: new Map(),
    displayNames: new Map(),
    userId: '01USER123'
  }
}`,...m.parameters?.docs?.source}}};const z=["Empty","WithConversations","ServerDown","ServerConnecting"];export{c as Empty,m as ServerConnecting,l as ServerDown,d as WithConversations,z as __namedExportsOrder,$ as default};
