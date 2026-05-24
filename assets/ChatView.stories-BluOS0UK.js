import{r as q,j as e}from"./iframe-CryHe7PW.js";import{B as M}from"./BackButton-fE5fsRqV.js";import{C as Z}from"./ChatMessage-D4IgeoU-.js";import{L as _}from"./Layout-CXdIlDiF.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-CtWMxcTc.js";import"./utils-BQHNewu7.js";function h({chatTitle:x,isSaved:y,handle:v,messages:u,loading:T,sending:c,online:p,encryptionReady:b,mediaStates:S={},onMediaRetry:w=()=>{},onSend:j,onSendMedia:f}){const[m,g]=q.useState(""),N=a=>{a.preventDefault();const s=m.trim();!s||c||!p||(j(s),g(""))},t=c||!b||!p,D=e.jsxs(e.Fragment,{children:[e.jsx(M,{}),e.jsx("h2",{className:"ml-1 font-mono text-sm font-medium",children:x})]});return e.jsxs(_,{fullHeight:!0,topBar:D,children:[e.jsx("div",{className:"flex-1 overflow-y-auto",children:e.jsx("div",{className:"mx-auto max-w-2xl px-4 pb-4 pt-14",children:T?e.jsx("div",{className:"flex h-96 items-center justify-center text-muted-foreground",children:e.jsx("div",{className:"text-center",children:e.jsx("p",{children:"Loading messages..."})})}):u.length===0?e.jsx("div",{className:"flex h-96 items-center justify-center rounded border border-dashed border-border text-center text-muted-foreground",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-2",children:"No messages yet"}),e.jsx("p",{className:"text-xs",children:y?"Send yourself notes and reminders":`Start a conversation with ${v}`})]})}):e.jsx("div",{className:"space-y-3",children:u.map(a=>e.jsx(Z,{text:a.text,timestamp:a.timestamp,sent:a.sent,media:a.media,mediaState:a.media?S[a.media.url]:void 0,onMediaRetry:w},a.id))})})}),e.jsx("div",{className:"border-t border-border bg-background px-4 py-3",children:e.jsxs("form",{onSubmit:N,className:"mx-auto flex max-w-2xl gap-2",children:[f&&e.jsxs("label",{"data-testid":"attach-button","aria-label":"Attach file","aria-disabled":t,className:`rounded border border-input px-3 py-2 text-sm hover:bg-accent ${t?"pointer-events-none opacity-50":"cursor-pointer"}`,children:["📎",e.jsx("input",{type:"file",className:"hidden",disabled:t,onChange:a=>{const s=a.target.files?.[0];s&&f(s),a.target.value=""}})]}),e.jsx("input",{type:"text",value:m,onChange:a=>g(a.target.value),placeholder:p?"Type a message...":"You are offline",className:"flex-1 rounded border border-input bg-background px-3 py-2 text-sm focus:border-ring focus:outline-none"}),e.jsx("button",{type:"submit",disabled:!m.trim()||t,className:"rounded bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-50",children:c?"Sending...":"Send"})]})})]})}h.__docgenInfo={description:"",methods:[],displayName:"ChatView",props:{chatTitle:{required:!0,tsType:{name:"string"},description:""},isSaved:{required:!0,tsType:{name:"boolean"},description:""},handle:{required:!0,tsType:{name:"string"},description:""},messages:{required:!0,tsType:{name:"Array",elements:[{name:"Message"}],raw:"Message[]"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},sending:{required:!0,tsType:{name:"boolean"},description:""},online:{required:!0,tsType:{name:"boolean"},description:""},encryptionReady:{required:!0,tsType:{name:"boolean"},description:""},mediaStates:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"MediaState"}],raw:"Record<string, MediaState>"},description:"",defaultValue:{value:"{}",computed:!1}},onMediaRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"(url: string) => void",signature:{arguments:[{type:{name:"string"},name:"url"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onSend:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""},onSendMedia:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => void",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"void"}}},description:""}}};const{fn:k}=__STORYBOOK_MODULE_TEST__,H={title:"Chat/ChatView",component:h,args:{onSend:k(),encryptionReady:!0,online:!0}},n={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!1,sending:!1}},r={args:{chatTitle:"Saved Messages",isSaved:!0,handle:"saved",messages:[],loading:!1,sending:!1}},i={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!0,sending:!1}},o={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hey, how are you?",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1},{id:"2",text:"I'm doing great! Working on the new encryption feature.",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!0},{id:"3",text:"Nice, sounds exciting. Let me know if you need help testing.",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!1}],loading:!1,sending:!1}},d={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hello!",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0}],loading:!1,sending:!0}},l={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"This was synced before the network dropped.",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1}],loading:!1,sending:!1,online:!1}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [],
    loading: false,
    sending: false
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'Saved Messages',
    isSaved: true,
    handle: 'saved',
    messages: [],
    loading: false,
    sending: false
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [],
    loading: true,
    sending: false
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [{
      id: '1',
      text: 'Hey, how are you?',
      timestamp: new Date('2024-01-15T10:30:00Z'),
      sent: false
    }, {
      id: '2',
      text: "I'm doing great! Working on the new encryption feature.",
      timestamp: new Date('2024-01-15T10:31:00Z'),
      sent: true
    }, {
      id: '3',
      text: 'Nice, sounds exciting. Let me know if you need help testing.',
      timestamp: new Date('2024-01-15T10:32:00Z'),
      sent: false
    }],
    loading: false,
    sending: false
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [{
      id: '1',
      text: 'Hello!',
      timestamp: new Date('2024-01-15T10:30:00Z'),
      sent: true
    }],
    loading: false,
    sending: true
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [{
      id: '1',
      text: 'This was synced before the network dropped.',
      timestamp: new Date('2024-01-15T10:30:00Z'),
      sent: false
    }],
    loading: false,
    sending: false,
    online: false
  }
}`,...l.parameters?.docs?.source}}};const I=["Empty","SavedEmpty","Loading","WithMessages","Sending","Offline"];export{n as Empty,i as Loading,l as Offline,r as SavedEmpty,d as Sending,o as WithMessages,I as __namedExportsOrder,H as default};
