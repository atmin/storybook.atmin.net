import{r as L,j as e}from"./iframe-BQK7UCGk.js";import{B as k}from"./BackButton-BBN7ktRv.js";import{C}from"./ChatMessage-D6H90cja.js";import{J as _}from"./JumpToBottomButton-D2Pb3QtQ.js";import{L as O}from"./Layout-dx_2Elxt.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Bdi3Scb5.js";import"./utils-BQHNewu7.js";function x({chatTitle:v,isSaved:T,handle:w,messages:f,loading:S,sending:m,online:p,encryptionReady:b,mediaStates:j={},onMediaRetry:N=()=>{},onSend:D,onSendMedia:g,scrollContainerRef:q,showJumpToBottom:M=!1,onJumpToBottom:Z}){const[u,h]=L.useState(""),B=a=>{a.preventDefault();const s=u.trim();!s||m||!p||(D(s),h(""))},t=m||!b||!p,E=e.jsxs(e.Fragment,{children:[e.jsx(k,{}),e.jsx("h2",{className:"ml-1 font-mono text-sm font-medium",children:v})]});return e.jsxs(O,{fullHeight:!0,topBar:E,children:[e.jsxs("div",{className:"relative flex flex-1 flex-col overflow-hidden",children:[e.jsx("div",{ref:q,className:"flex-1 overflow-y-auto",children:e.jsx("div",{className:"mx-auto max-w-2xl px-4 pb-4 pt-14",children:S?e.jsx("div",{className:"flex h-96 items-center justify-center text-muted-foreground",children:e.jsx("div",{className:"text-center",children:e.jsx("p",{children:"Loading messages..."})})}):f.length===0?e.jsx("div",{className:"flex h-96 items-center justify-center rounded border border-dashed border-border text-center text-muted-foreground",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-2",children:"No messages yet"}),e.jsx("p",{className:"text-xs",children:T?"Send yourself notes and reminders":`Start a conversation with ${w}`})]})}):e.jsx("div",{className:"space-y-3",children:f.map(a=>e.jsx(C,{text:a.text,timestamp:a.timestamp,sent:a.sent,media:a.media,mediaState:a.media?j[a.media.url]:void 0,onMediaRetry:N},a.id))})})}),M&&e.jsx(_,{onClick:Z??(()=>{})})]}),e.jsx("div",{className:"border-t border-border bg-background px-4 py-3",children:e.jsxs("form",{onSubmit:B,className:"mx-auto flex max-w-2xl gap-2",children:[g&&e.jsxs("label",{"data-testid":"attach-button","aria-label":"Attach file","aria-disabled":t,className:`rounded border border-input px-3 py-2 text-sm hover:bg-accent ${t?"pointer-events-none opacity-50":"cursor-pointer"}`,children:["📎",e.jsx("input",{type:"file",className:"hidden",disabled:t,onChange:a=>{const s=a.target.files?.[0];s&&g(s),a.target.value=""}})]}),e.jsx("input",{type:"text",value:u,onChange:a=>h(a.target.value),placeholder:p?"Type a message...":"You are offline",className:"flex-1 rounded border border-input bg-background px-3 py-2 text-sm focus:border-ring focus:outline-none"}),e.jsx("button",{type:"submit",disabled:!u.trim()||t,className:"rounded bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-50",children:m?"Sending...":"Send"})]})})]})}x.__docgenInfo={description:"",methods:[],displayName:"ChatView",props:{chatTitle:{required:!0,tsType:{name:"string"},description:""},isSaved:{required:!0,tsType:{name:"boolean"},description:""},handle:{required:!0,tsType:{name:"string"},description:""},messages:{required:!0,tsType:{name:"Array",elements:[{name:"Message"}],raw:"Message[]"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},sending:{required:!0,tsType:{name:"boolean"},description:""},online:{required:!0,tsType:{name:"boolean"},description:""},encryptionReady:{required:!0,tsType:{name:"boolean"},description:""},mediaStates:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"MediaState"}],raw:"Record<string, MediaState>"},description:"",defaultValue:{value:"{}",computed:!1}},onMediaRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"(url: string) => void",signature:{arguments:[{type:{name:"string"},name:"url"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onSend:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""},onSendMedia:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => void",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"void"}}},description:""},scrollContainerRef:{required:!1,tsType:{name:"signature",type:"function",raw:"(el: HTMLDivElement | null) => void",signature:{arguments:[{type:{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},showJumpToBottom:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onJumpToBottom:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:y}=__STORYBOOK_MODULE_TEST__,A={title:"Chat/ChatView",component:x,args:{onSend:y(),encryptionReady:!0,online:!0}},n={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!1,sending:!1}},r={args:{chatTitle:"Saved Messages",isSaved:!0,handle:"saved",messages:[],loading:!1,sending:!1}},o={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!0,sending:!1}},i={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hey, how are you?",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1},{id:"2",text:"I'm doing great! Working on the new encryption feature.",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!0},{id:"3",text:"Nice, sounds exciting. Let me know if you need help testing.",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!1}],loading:!1,sending:!1}},d={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hello!",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0}],loading:!1,sending:!0}},l={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Older message",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1},{id:"2",text:"Newer message — user has scrolled up so a jump indicator is visible",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!1}],loading:!1,sending:!1,showJumpToBottom:!0,onJumpToBottom:y()}},c={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"This was synced before the network dropped.",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1}],loading:!1,sending:!1,online:!1}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [],
    loading: true,
    sending: false
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      text: 'Older message',
      timestamp: new Date('2024-01-15T10:30:00Z'),
      sent: false
    }, {
      id: '2',
      text: 'Newer message — user has scrolled up so a jump indicator is visible',
      timestamp: new Date('2024-01-15T10:31:00Z'),
      sent: false
    }],
    loading: false,
    sending: false,
    showJumpToBottom: true,
    onJumpToBottom: fn()
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Y=["Empty","SavedEmpty","Loading","WithMessages","Sending","WithScrolledUpIndicator","Offline"];export{n as Empty,o as Loading,c as Offline,r as SavedEmpty,d as Sending,i as WithMessages,l as WithScrolledUpIndicator,Y as __namedExportsOrder,A as default};
