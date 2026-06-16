import{r as J,j as n}from"./iframe-Cp7nkevz.js";import{B as R}from"./BackButton-vasgSk0T.js";import{C as F}from"./ChatMessage-m6YUUj1B.js";import{J as U}from"./JumpToBottomButton-N10nlBlB.js";import{L as Y}from"./Layout-CYicJXWd.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Bad4VUIO.js";import"./MediaAttachment-B00f3IS5.js";import"./MessageActions-BbcGuGz_.js";import"./utils-BXTaqGe-.js";function Z({chatTitle:s,isSaved:r,handle:T,messages:b,loading:M,sending:x,online:y,encryptionReady:N,mediaStates:q={},onMediaRequest:B=()=>{},mediaObserve:k,onSend:L,onSendMedia:D,inputValue:v,setInputValue:j,onEditMessage:w,onDeleteMessage:E,scrollContainerRef:A,showJumpToBottom:H=!1,onJumpToBottom:O}){const[I,S]=J.useState(null),C=e=>{e.preventDefault();const t=v.trim();!t||x||!y||(L(t),j(""))},i=x||!N||!y,W=n.jsxs(n.Fragment,{children:[n.jsx(R,{}),n.jsx("h2",{className:"ml-1 font-mono text-sm font-medium",children:s})]});return n.jsxs(Y,{fullHeight:!0,topBar:W,children:[n.jsxs("div",{className:"relative flex flex-1 flex-col overflow-hidden",children:[n.jsx("div",{ref:A,className:"flex-1 overflow-y-auto",children:n.jsx("div",{className:"mx-auto max-w-2xl px-4 pb-4 pt-14",children:M?n.jsx("div",{className:"flex h-96 items-center justify-center text-muted-foreground",children:n.jsx("div",{className:"text-center",children:n.jsx("p",{children:"Loading messages..."})})}):b.length===0?n.jsx("div",{className:"flex h-96 items-center justify-center text-center text-muted-foreground",children:n.jsxs("div",{children:[n.jsx("p",{className:"mb-2",children:"No messages yet"}),n.jsx("p",{className:"text-xs",children:r?"Send yourself notes and reminders":`Start a conversation with ${T}`})]})}):n.jsx("div",{className:"space-y-3",children:b.map(e=>{const t=e.sent&&!e.deleted&&!!E,_=t&&!!w&&(!e.media||e.text!=="");return n.jsx(F,{text:e.text,timestamp:e.timestamp,sent:e.sent,media:e.media,mediaState:e.media?q[e.media.url]:void 0,onMediaRequest:B,mediaObserve:k,editedAt:e.editedAt,deleted:e.deleted,editing:I===e.id,onStartEdit:_?()=>S(e.id):void 0,onCancelEdit:()=>S(null),onSaveEdit:w?V=>{w(e.id,V),S(null)}:void 0,onDelete:t?()=>E(e.id,e.media?.url):void 0},e.id)})})})}),H&&n.jsx(U,{onClick:O??(()=>{})})]}),n.jsx("div",{className:"bg-background px-4 py-3",children:n.jsxs("form",{onSubmit:C,className:"mx-auto flex max-w-2xl gap-2",children:[D&&n.jsxs("label",{"data-testid":"attach-button","aria-label":"Attach file","aria-disabled":i,className:`rounded border border-input px-3 py-2 text-sm hover:bg-accent ${i?"pointer-events-none opacity-50":"cursor-pointer"}`,children:["📎",n.jsx("input",{type:"file",className:"hidden",disabled:i,onChange:e=>{const t=e.target.files?.[0];t&&D(t),e.target.value=""}})]}),n.jsx("input",{type:"text",value:v,onChange:e=>j(e.target.value),placeholder:y?"Type a message...":"You are offline",className:"flex-1 rounded border border-input bg-background px-3 py-2 text-sm focus:border-ring focus:outline-none"}),n.jsx("button",{type:"submit",disabled:!v.trim()||i,className:"rounded bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-50",children:x?"Sending...":"Send"})]})})]})}Z.__docgenInfo={description:"",methods:[],displayName:"ChatView",props:{chatTitle:{required:!0,tsType:{name:"string"},description:""},isSaved:{required:!0,tsType:{name:"boolean"},description:""},handle:{required:!0,tsType:{name:"string"},description:""},messages:{required:!0,tsType:{name:"Array",elements:[{name:"Message"}],raw:"Message[]"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},sending:{required:!0,tsType:{name:"boolean"},description:""},online:{required:!0,tsType:{name:"boolean"},description:""},encryptionReady:{required:!0,tsType:{name:"boolean"},description:""},mediaStates:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"MediaState"}],raw:"Record<string, MediaState>"},description:"",defaultValue:{value:"{}",computed:!1}},onMediaRequest:{required:!1,tsType:{name:"signature",type:"function",raw:"(url: string) => void",signature:{arguments:[{type:{name:"string"},name:"url"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},mediaObserve:{required:!1,tsType:{name:"signature",type:"function",raw:"(url: string, el: HTMLElement | null) => void",signature:{arguments:[{type:{name:"string"},name:"url"},{type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},onSend:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""},onSendMedia:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => void",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"void"}}},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""},setInputValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},onEditMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, newBody: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"string"},name:"newBody"}],return:{name:"void"}}},description:""},onDeleteMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, mediaUrl?: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"string"},name:"mediaUrl"}],return:{name:"void"}}},description:""},scrollContainerRef:{required:!1,tsType:{name:"signature",type:"function",raw:"(el: HTMLDivElement | null) => void",signature:{arguments:[{type:{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},showJumpToBottom:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onJumpToBottom:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:a}=__STORYBOOK_MODULE_TEST__,ae={title:"Chat/ChatView",component:Z,args:{onSend:a(),encryptionReady:!0,online:!0,inputValue:"",setInputValue:a()}},o={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!1,sending:!1}},d={args:{chatTitle:"Saved Messages",isSaved:!0,handle:"saved",messages:[],loading:!1,sending:!1}},l={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!1,sending:!1,inputValue:"half-typed message…"}},c={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!0,sending:!1}},m={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hey, how are you?",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1},{id:"2",text:"I'm doing great! Working on the new encryption feature.",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!0},{id:"3",text:"Nice, sounds exciting. Let me know if you need help testing.",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!1}],loading:!1,sending:!1}},p={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hello!",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0}],loading:!1,sending:!0}},u={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Older message",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1},{id:"2",text:"Newer message — user has scrolled up so a jump indicator is visible",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!1}],loading:!1,sending:!1,showJumpToBottom:!0,onJumpToBottom:a()}},g={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"This was synced before the network dropped.",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1}],loading:!1,sending:!1,online:!1}},f={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hello Bob (edited)",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0,editedAt:new Date("2024-01-15T10:31:00Z")},{id:"2",text:"",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!0,deleted:!0},{id:"3",text:"A normal received message",timestamp:new Date("2024-01-15T10:33:00Z"),sent:!1}],loading:!1,sending:!1,onEditMessage:a(),onDeleteMessage:a()}},h={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"First message",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0},{id:"2",text:"This one is being edited",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!0},{id:"3",text:"Third message",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!0}],loading:!1,sending:!1,onEditMessage:a(),onDeleteMessage:a()},play:async({canvas:s,userEvent:r})=>{const T=s.getAllByTestId("message-actions-trigger");await r.click(T[1]),await r.click(s.getByTestId("message-action-edit"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [],
    loading: false,
    sending: false
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'Saved Messages',
    isSaved: true,
    handle: 'saved',
    messages: [],
    loading: false,
    sending: false
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [],
    loading: false,
    sending: false,
    inputValue: 'half-typed message…'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [],
    loading: true,
    sending: false
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [{
      id: '1',
      text: 'Hello Bob (edited)',
      timestamp: new Date('2024-01-15T10:30:00Z'),
      sent: true,
      editedAt: new Date('2024-01-15T10:31:00Z')
    }, {
      id: '2',
      text: '',
      timestamp: new Date('2024-01-15T10:32:00Z'),
      sent: true,
      deleted: true
    }, {
      id: '3',
      text: 'A normal received message',
      timestamp: new Date('2024-01-15T10:33:00Z'),
      sent: false
    }],
    loading: false,
    sending: false,
    onEditMessage: fn(),
    onDeleteMessage: fn()
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [{
      id: '1',
      text: 'First message',
      timestamp: new Date('2024-01-15T10:30:00Z'),
      sent: true
    }, {
      id: '2',
      text: 'This one is being edited',
      timestamp: new Date('2024-01-15T10:31:00Z'),
      sent: true
    }, {
      id: '3',
      text: 'Third message',
      timestamp: new Date('2024-01-15T10:32:00Z'),
      sent: true
    }],
    loading: false,
    sending: false,
    onEditMessage: fn(),
    onDeleteMessage: fn()
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    // Open message 2's action menu and click Edit.
    const triggers = canvas.getAllByTestId('message-actions-trigger');
    await userEvent.click(triggers[1]);
    await userEvent.click(canvas.getByTestId('message-action-edit'));
  }
}`,...h.parameters?.docs?.source}}};const se=["Empty","SavedEmpty","Draft","Loading","WithMessages","Sending","WithScrolledUpIndicator","Offline","WithAmendments","WithOneMessageEditing"];export{l as Draft,o as Empty,c as Loading,g as Offline,d as SavedEmpty,p as Sending,f as WithAmendments,m as WithMessages,h as WithOneMessageEditing,u as WithScrolledUpIndicator,se as __namedExportsOrder,ae as default};
