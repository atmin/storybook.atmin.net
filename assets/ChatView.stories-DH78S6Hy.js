import{r as j,j as e}from"./iframe-CZa_wsSi.js";import{B as N}from"./BackButton-B3JYRzRI.js";import{C as q}from"./ChatMessage-qofrmtEI.js";import{L as M}from"./Layout-0p-Pp72D.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DmIffzK0.js";import"./utils-BQHNewu7.js";function g({chatTitle:f,isSaved:h,handle:x,messages:m,loading:y,sending:t,encryptionReady:n,mediaStates:v={},onMediaRetry:S=()=>{},onSend:b,onSendMedia:p}){const[c,u]=j.useState(""),T=a=>{a.preventDefault();const s=c.trim();!s||t||(b(s),u(""))},w=e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx("h2",{className:"ml-1 font-mono text-sm font-medium",children:f})]});return e.jsxs(M,{fullHeight:!0,topBar:w,children:[e.jsx("div",{className:"flex-1 overflow-y-auto",children:e.jsx("div",{className:"mx-auto max-w-2xl px-4 pb-4 pt-14",children:y?e.jsx("div",{className:"flex h-96 items-center justify-center text-muted-foreground",children:e.jsx("div",{className:"text-center",children:e.jsx("p",{children:"Loading messages..."})})}):m.length===0?e.jsx("div",{className:"flex h-96 items-center justify-center rounded border border-dashed border-border text-center text-muted-foreground",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-2",children:"No messages yet"}),e.jsx("p",{className:"text-xs",children:h?"Send yourself notes and reminders":`Start a conversation with ${x}`})]})}):e.jsx("div",{className:"space-y-3",children:m.map(a=>e.jsx(q,{text:a.text,timestamp:a.timestamp,sent:a.sent,media:a.media,mediaState:a.media?v[a.media.url]:void 0,onMediaRetry:S},a.id))})})}),e.jsx("div",{className:"border-t border-border bg-background px-4 py-3",children:e.jsxs("form",{onSubmit:T,className:"mx-auto flex max-w-2xl gap-2",children:[p&&e.jsxs("label",{"data-testid":"attach-button","aria-label":"Attach file","aria-disabled":t||!n,className:`rounded border border-input px-3 py-2 text-sm hover:bg-accent ${t||!n?"pointer-events-none opacity-50":"cursor-pointer"}`,children:["📎",e.jsx("input",{type:"file",className:"hidden",disabled:t||!n,onChange:a=>{const s=a.target.files?.[0];s&&p(s),a.target.value=""}})]}),e.jsx("input",{type:"text",value:c,onChange:a=>u(a.target.value),placeholder:"Type a message...",className:"flex-1 rounded border border-input bg-background px-3 py-2 text-sm focus:border-ring focus:outline-none"}),e.jsx("button",{type:"submit",disabled:!c.trim()||t||!n,className:"rounded bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-50",children:t?"Sending...":"Send"})]})})]})}g.__docgenInfo={description:"",methods:[],displayName:"ChatView",props:{chatTitle:{required:!0,tsType:{name:"string"},description:""},isSaved:{required:!0,tsType:{name:"boolean"},description:""},handle:{required:!0,tsType:{name:"string"},description:""},messages:{required:!0,tsType:{name:"Array",elements:[{name:"Message"}],raw:"Message[]"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},sending:{required:!0,tsType:{name:"boolean"},description:""},encryptionReady:{required:!0,tsType:{name:"boolean"},description:""},mediaStates:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"MediaState"}],raw:"Record<string, MediaState>"},description:"",defaultValue:{value:"{}",computed:!1}},onMediaRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"(url: string) => void",signature:{arguments:[{type:{name:"string"},name:"url"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onSend:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""},onSendMedia:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => void",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"void"}}},description:""}}};const{fn:D}=__STORYBOOK_MODULE_TEST__,B={title:"Chat/ChatView",component:g,args:{onSend:D(),encryptionReady:!0}},r={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!1,sending:!1}},i={args:{chatTitle:"Saved Messages",isSaved:!0,handle:"saved",messages:[],loading:!1,sending:!1}},o={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!0,sending:!1}},d={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hey, how are you?",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1},{id:"2",text:"I'm doing great! Working on the new encryption feature.",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!0},{id:"3",text:"Nice, sounds exciting. Let me know if you need help testing.",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!1}],loading:!1,sending:!1}},l={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hello!",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0}],loading:!1,sending:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [],
    loading: false,
    sending: false
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'Saved Messages',
    isSaved: true,
    handle: 'saved',
    messages: [],
    loading: false,
    sending: false
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [],
    loading: true,
    sending: false
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const H=["Empty","SavedEmpty","Loading","WithMessages","Sending"];export{r as Empty,o as Loading,i as SavedEmpty,l as Sending,d as WithMessages,H as __namedExportsOrder,B as default};
