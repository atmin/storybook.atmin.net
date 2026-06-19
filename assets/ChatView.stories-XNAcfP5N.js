import{r as te,j as a}from"./iframe-C9vclmlM.js";import{f as se}from"./utils-r9lIULHa.js";import{B as re}from"./BackButton-CO--5l1Q.js";import{C as ie}from"./ChatMessage-BDtyKgye.js";import{J as oe}from"./JumpToBottomButton-k1bEDMDY.js";import{L as le}from"./Layout-l0YfOlU3.js";import{F as de}from"./MediaAttachment-C2nIoY3y.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BToZ0xwG.js";import"./MessageActions-DgoGs2Jp.js";function _({chatTitle:d,isSaved:m,handle:N,messages:B,loading:V,sending:q,online:I,encryptionReady:R,mediaStates:k={},onMediaRequest:J=()=>{},mediaObserve:P,onSend:z,onSendMedia:F,pending:t,onAttach:r,onClearAttachment:L,inputValue:c,setInputValue:C,onEditMessage:Z,onDeleteMessage:O,scrollContainerRef:$,showJumpToBottom:Y=!1,onJumpToBottom:K}){const[G,A]=te.useState(null),p=q||!R||!I,U=!p&&(!!c.trim()||!!t),Q=e=>{e.preventDefault(),U&&(t&&F?(F(t.file,c),C(""),L?.()):(z(c.trim()),C("")))},X=e=>{if(!r)return;const n=e.clipboardData?.items;if(n)for(let o=0;o<n.length;o++){const i=n[o];if(i.kind==="file"&&i.type.startsWith("image/")){const H=i.getAsFile();if(H){e.preventDefault(),r(H);return}}}},ee=e=>{if(!r)return;const n=e.dataTransfer?.files?.[0];n&&(e.preventDefault(),r(n))},ae=e=>{r&&e.preventDefault()},ne=a.jsxs(a.Fragment,{children:[a.jsx(re,{}),a.jsx("h2",{className:"ml-1 font-mono text-sm font-medium",children:d})]});return a.jsxs(le,{fullHeight:!0,topBar:ne,children:[a.jsxs("div",{className:"relative flex flex-1 flex-col overflow-hidden",children:[a.jsx("div",{ref:$,className:"flex-1 overflow-y-auto",children:a.jsx("div",{className:"mx-auto max-w-2xl px-4 pb-4 pt-14",children:V?a.jsx("div",{className:"flex h-96 items-center justify-center text-muted-foreground",children:a.jsx("div",{className:"text-center",children:a.jsx("p",{children:"Loading messages..."})})}):B.length===0?a.jsx("div",{className:"flex h-96 items-center justify-center text-center text-muted-foreground",children:a.jsxs("div",{children:[a.jsx("p",{className:"mb-2",children:"No messages yet"}),a.jsx("p",{className:"text-xs",children:m?"Send yourself notes and reminders":`Start a conversation with ${N}`})]})}):a.jsx("div",{className:"space-y-3",children:B.map(e=>{const n=e.sent&&!e.deleted&&!!O,o=n&&!!Z&&(!e.media||e.text!=="");return a.jsx(ie,{text:e.text,timestamp:e.timestamp,sent:e.sent,media:e.media,mediaState:e.media?k[e.media.preview?.url??e.media.url]:void 0,mediaFullState:e.media?k[e.media.url]:void 0,onMediaRequest:J,mediaObserve:P,editedAt:e.editedAt,deleted:e.deleted,editing:G===e.id,onStartEdit:o?()=>A(e.id):void 0,onCancelEdit:()=>A(null),onSaveEdit:Z?i=>{Z(e.id,i),A(null)}:void 0,onDelete:n?()=>O(e.id,e.media?[e.media.url,e.media.preview?.url].filter(i=>!!i):void 0):void 0},e.id)})})})}),Y&&a.jsx(oe,{onClick:K??(()=>{})})]}),a.jsx("div",{className:"bg-background px-4 py-3",children:a.jsxs("form",{onSubmit:Q,onDrop:ee,onDragOver:ae,className:"mx-auto flex max-w-2xl flex-col gap-2",children:[t&&a.jsxs("div",{"data-testid":"compose-tray",className:"flex items-center gap-3 rounded-lg border border-input bg-muted/40 p-2",children:[t.isImage?a.jsx("img",{"data-testid":"compose-thumb",src:t.previewUrl,alt:t.file.name,className:"size-16 rounded object-cover"}):a.jsxs("div",{"data-testid":"compose-file",className:"flex min-w-0 flex-1 items-center gap-2",children:[a.jsx(de,{className:"size-4 shrink-0 opacity-70","aria-hidden":!0}),a.jsxs("span",{className:"min-w-0",children:[a.jsx("span",{className:"block truncate text-sm",children:t.file.name}),a.jsx("span",{className:"block text-xs opacity-70",children:se(t.file.size)})]})]}),a.jsx("button",{type:"button","data-testid":"compose-remove","aria-label":"Remove attachment",onClick:()=>L?.(),className:"ml-auto rounded px-2 py-1 text-sm hover:bg-accent",children:"✕"})]}),a.jsxs("div",{className:"flex gap-2",children:[r&&a.jsxs("label",{"data-testid":"attach-button","aria-label":"Attach file","aria-disabled":p,className:`rounded border border-input px-3 py-2 text-sm hover:bg-accent ${p?"pointer-events-none opacity-50":"cursor-pointer"}`,children:["📎",a.jsx("input",{type:"file",className:"hidden",disabled:p,onChange:e=>{const n=e.target.files?.[0];n&&r(n),e.target.value=""}})]}),a.jsx("input",{type:"text","data-testid":"message-input",value:c,onChange:e=>C(e.target.value),onPaste:X,placeholder:t?"Add a caption…":I?"Type a message...":"You are offline",className:"flex-1 rounded border border-input bg-background px-3 py-2 text-sm focus:border-ring focus:outline-none"}),a.jsx("button",{type:"submit",disabled:!U,className:"rounded bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-50",children:q?"Sending...":"Send"})]})]})})]})}_.__docgenInfo={description:"",methods:[],displayName:"ChatView",props:{chatTitle:{required:!0,tsType:{name:"string"},description:""},isSaved:{required:!0,tsType:{name:"boolean"},description:""},handle:{required:!0,tsType:{name:"string"},description:""},messages:{required:!0,tsType:{name:"Array",elements:[{name:"Message"}],raw:"Message[]"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},sending:{required:!0,tsType:{name:"boolean"},description:""},online:{required:!0,tsType:{name:"boolean"},description:""},encryptionReady:{required:!0,tsType:{name:"boolean"},description:""},mediaStates:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"MediaState"}],raw:"Record<string, MediaState>"},description:"",defaultValue:{value:"{}",computed:!1}},onMediaRequest:{required:!1,tsType:{name:"signature",type:"function",raw:"(url: string) => void",signature:{arguments:[{type:{name:"string"},name:"url"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},mediaObserve:{required:!1,tsType:{name:"signature",type:"function",raw:"(url: string, el: HTMLElement | null) => void",signature:{arguments:[{type:{name:"string"},name:"url"},{type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},onSend:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""},onSendMedia:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File, caption?: string) => void",signature:{arguments:[{type:{name:"File"},name:"file"},{type:{name:"string"},name:"caption"}],return:{name:"void"}}},description:""},pending:{required:!1,tsType:{name:"union",raw:"PendingAttachment | null",elements:[{name:"PendingAttachment"},{name:"null"}]},description:""},onAttach:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => void",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"void"}}},description:""},onClearAttachment:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""},setInputValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},onEditMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, newBody: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"string"},name:"newBody"}],return:{name:"void"}}},description:""},onDeleteMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, mediaUrls?: string[]) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"mediaUrls"}],return:{name:"void"}}},description:""},scrollContainerRef:{required:!1,tsType:{name:"signature",type:"function",raw:"(el: HTMLDivElement | null) => void",signature:{arguments:[{type:{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},showJumpToBottom:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onJumpToBottom:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:s}=__STORYBOOK_MODULE_TEST__,Te={title:"Chat/ChatView",component:_,args:{onSend:s(),encryptionReady:!0,online:!0,inputValue:"",setInputValue:s()}},u={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!1,sending:!1}},g={args:{chatTitle:"Saved Messages",isSaved:!0,handle:"saved",messages:[],loading:!1,sending:!1}},f={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!1,sending:!1,inputValue:"half-typed message…"}},h={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!0,sending:!1}},v={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hey, how are you?",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1},{id:"2",text:"I'm doing great! Working on the new encryption feature.",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!0},{id:"3",text:"Nice, sounds exciting. Let me know if you need help testing.",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!1}],loading:!1,sending:!1}},x={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hello!",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0}],loading:!1,sending:!0}},y={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Older message",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1},{id:"2",text:"Newer message — user has scrolled up so a jump indicator is visible",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!1}],loading:!1,sending:!1,showJumpToBottom:!0,onJumpToBottom:s()}},T={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"This was synced before the network dropped.",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1}],loading:!1,sending:!1,online:!1}},w={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hello Bob (edited)",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0,editedAt:new Date("2024-01-15T10:31:00Z")},{id:"2",text:"",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!0,deleted:!0},{id:"3",text:"A normal received message",timestamp:new Date("2024-01-15T10:33:00Z"),sent:!1}],loading:!1,sending:!1,onEditMessage:s(),onDeleteMessage:s()}},W="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Crect width='160' height='160' fill='%2360a5fa'/%3E%3C/svg%3E",l={chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!1,sending:!1,onSendMedia:s(),onAttach:s(),onClearAttachment:s()},S={args:{...l}},b={args:{...l,inputValue:"just a normal message"}},j={args:{...l,pending:{file:new File(["x"],"beach.jpg",{type:"image/jpeg"}),previewUrl:W,isImage:!0}}},D={args:{...l,inputValue:"sunset, night one",pending:{file:new File(["x"],"beach.jpg",{type:"image/jpeg"}),previewUrl:W,isImage:!0}}},E={args:{...l,pending:{file:new File([new Uint8Array(204800)],"report.pdf",{type:"application/pdf"}),previewUrl:"",isImage:!1}}},M={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"First message",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0},{id:"2",text:"This one is being edited",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!0},{id:"3",text:"Third message",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!0}],loading:!1,sending:!1,onEditMessage:s(),onDeleteMessage:s()},play:async({canvas:d,userEvent:m})=>{const N=d.getAllByTestId("message-actions-trigger");await m.click(N[1]),await m.click(d.getByTestId("message-action-edit"))}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [],
    loading: false,
    sending: false
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'Saved Messages',
    isSaved: true,
    handle: 'saved',
    messages: [],
    loading: false,
    sending: false
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [],
    loading: false,
    sending: false,
    inputValue: 'half-typed message…'
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [],
    loading: true,
    sending: false
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...composeArgs
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...composeArgs,
    inputValue: 'just a normal message'
  }
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...composeArgs,
    pending: {
      file: new File(['x'], 'beach.jpg', {
        type: 'image/jpeg'
      }),
      previewUrl: SAMPLE_THUMB,
      isImage: true
    }
  }
}`,...j.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...composeArgs,
    inputValue: 'sunset, night one',
    pending: {
      file: new File(['x'], 'beach.jpg', {
        type: 'image/jpeg'
      }),
      previewUrl: SAMPLE_THUMB,
      isImage: true
    }
  }
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...composeArgs,
    pending: {
      file: new File([new Uint8Array(204_800)], 'report.pdf', {
        type: 'application/pdf'
      }),
      previewUrl: '',
      isImage: false
    }
  }
}`,...E.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};const we=["Empty","SavedEmpty","Draft","Loading","WithMessages","Sending","WithScrolledUpIndicator","Offline","WithAmendments","ComposeEmpty","ComposeTextOnly","ComposeStagedImage","ComposeStagedImageWithCaption","ComposeStagedFile","WithOneMessageEditing"];export{S as ComposeEmpty,E as ComposeStagedFile,j as ComposeStagedImage,D as ComposeStagedImageWithCaption,b as ComposeTextOnly,f as Draft,u as Empty,h as Loading,T as Offline,g as SavedEmpty,x as Sending,w as WithAmendments,v as WithMessages,M as WithOneMessageEditing,y as WithScrolledUpIndicator,we as __namedExportsOrder,Te as default};
