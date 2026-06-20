import{r as ce,j as a,i as me,N as pe,k as ue,M as ge}from"./iframe-Dk40pMEE.js";import{f as fe}from"./utils-DDjLFhm7.js";import{C as he}from"./ChatMessage-D1UaKFXL.js";import{J as ve}from"./JumpToBottomButton-D2l9lQhk.js";import{F as ye}from"./MediaAttachment-C-Lj9NH4.js";import{c as B}from"./createLucideIcon-BRrkO-wd.js";import"./preload-helper-PPVm8Dsz.js";import"./MessageActions-DS-Jp8Mf.js";const xe=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],we=B("paperclip",xe);const Te=[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",key:"117uat"}],["path",{d:"M6 12h16",key:"s4cdu5"}]],Se=B("send-horizontal",Te);const be=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],je=B("x",be);function z({chatTitle:l,isSaved:d,handle:E,onBack:R,messages:I,loading:J,sending:$,online:_,encryptionReady:K,mediaStates:F={},onMediaRequest:Y=()=>{},mediaObserve:X,onSend:G,onSendMedia:L,pending:t,onAttach:r,onClearAttachment:O,inputValue:m,setInputValue:Z,onEditMessage:A,onDeleteMessage:U,scrollContainerRef:Q,showJumpToBottom:ee=!1,onJumpToBottom:ae}){const[ne,q]=ce.useState(null),p=$||!K||!_,H=!p&&(!!m.trim()||!!t),W=()=>{H&&(t&&L?(L(t.file,m),Z(""),O?.()):(G(m.trim()),Z("")))},se=e=>{e.key==="Enter"&&!e.shiftKey&&!e.nativeEvent.isComposing&&(e.preventDefault(),W())},te=e=>{if(!r)return;const n=e.clipboardData?.items;if(n)for(let c=0;c<n.length;c++){const i=n[c];if(i.kind==="file"&&i.type.startsWith("image/")){const V=i.getAsFile();if(V){e.preventDefault(),r(V);return}}}},re=e=>{if(!r)return;const n=e.dataTransfer?.files?.[0];n&&(e.preventDefault(),r(n))},ie=e=>{r&&e.preventDefault()},oe=t?"Add a caption…":_?"Type a message...":"You are offline",le=r?a.jsxs("label",{"data-testid":"attach-button","aria-label":"Attach file","aria-disabled":p,className:`flex size-8 -translate-y-2.5 items-center justify-center rounded-full text-primary ${p?"pointer-events-none opacity-40":"cursor-pointer hover:bg-black/5 dark:hover:bg-white/10"}`,children:[a.jsx(we,{className:"size-5"}),a.jsx("input",{type:"file",className:"hidden",disabled:p,onChange:e=>{const n=e.target.files?.[0];n&&r(n),e.target.value=""}})]}):void 0,de=a.jsx("button",{type:"button","aria-label":"Send",disabled:!H,onClick:W,className:"flex size-8 -translate-y-2.5 items-center justify-center rounded-full text-primary disabled:opacity-40",children:a.jsx(Se,{className:"size-5"})});return a.jsxs(me,{className:"flex flex-col overflow-hidden!",children:[a.jsx(pe,{title:d?l:a.jsx("span",{className:"font-mono",children:l}),left:a.jsx(ue,{text:"Chats",onClick:R})}),a.jsxs("div",{className:"relative flex flex-1 flex-col overflow-hidden",children:[a.jsx("div",{ref:Q,className:"flex-1 overflow-y-auto",children:a.jsx("div",{className:"mx-auto max-w-2xl px-4 py-4",children:J?a.jsx("div",{className:"flex h-96 items-center justify-center text-muted-foreground",children:a.jsx("p",{children:"Loading messages..."})}):I.length===0?a.jsx("div",{className:"flex h-96 items-center justify-center text-center text-muted-foreground",children:a.jsxs("div",{children:[a.jsx("p",{className:"mb-2",children:"No messages yet"}),a.jsx("p",{className:"text-xs",children:d?"Send yourself notes and reminders":`Start a conversation with ${E}`})]})}):a.jsx("div",{className:"space-y-3",children:I.map(e=>{const n=e.sent&&!e.deleted&&!!U,c=n&&!!A&&(!e.media||e.text!=="");return a.jsx(he,{text:e.text,timestamp:e.timestamp,sent:e.sent,media:e.media,mediaState:e.media?F[e.media.preview?.url??e.media.url]:void 0,mediaFullState:e.media?F[e.media.url]:void 0,onMediaRequest:Y,mediaObserve:X,editedAt:e.editedAt,deleted:e.deleted,editing:ne===e.id,onStartEdit:c?()=>q(e.id):void 0,onCancelEdit:()=>q(null),onSaveEdit:A?i=>{A(e.id,i),q(null)}:void 0,onDelete:n?()=>U(e.id,e.media?[e.media.url,e.media.preview?.url].filter(i=>!!i):void 0):void 0},e.id)})})})}),ee&&a.jsx(ve,{onClick:ae??(()=>{})})]}),a.jsxs("div",{className:"bg-background",children:[t&&a.jsx("div",{className:"px-3 pt-3",children:a.jsxs("div",{"data-testid":"compose-tray",className:"flex items-center gap-3 rounded-xl bg-black/5 p-2 dark:bg-white/10",children:[t.isImage?a.jsx("img",{"data-testid":"compose-thumb",src:t.previewUrl,alt:t.file.name,className:"size-16 rounded-lg object-cover"}):a.jsxs("div",{"data-testid":"compose-file",className:"flex min-w-0 flex-1 items-center gap-2",children:[a.jsx(ye,{className:"size-4 shrink-0 opacity-70","aria-hidden":!0}),a.jsxs("span",{className:"min-w-0",children:[a.jsx("span",{className:"block truncate text-sm",children:t.file.name}),a.jsx("span",{className:"block text-xs opacity-70",children:fe(t.file.size)})]})]}),a.jsx("button",{type:"button","data-testid":"compose-remove","aria-label":"Remove attachment",onClick:()=>O?.(),className:"ml-auto flex size-8 items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10",children:a.jsx(je,{className:"size-4"})})]})}),a.jsx(ge,{className:"relative!",leftClassName:"-ms-1",rightClassName:"-me-1",value:m,placeholder:oe,textareaId:"message-input",onChange:e=>Z(e.target.value),onKeyDown:se,onPaste:te,onDrop:re,onDragOver:ie,left:le,right:de})]})]})}z.__docgenInfo={description:"",methods:[],displayName:"ChatView",props:{chatTitle:{required:!0,tsType:{name:"string"},description:""},isSaved:{required:!0,tsType:{name:"boolean"},description:""},handle:{required:!0,tsType:{name:"string"},description:""},onBack:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Back to the conversation list. Plain navigate (no reverse transition)."},messages:{required:!0,tsType:{name:"Array",elements:[{name:"Message"}],raw:"Message[]"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},sending:{required:!0,tsType:{name:"boolean"},description:""},online:{required:!0,tsType:{name:"boolean"},description:""},encryptionReady:{required:!0,tsType:{name:"boolean"},description:""},mediaStates:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"MediaState"}],raw:"Record<string, MediaState>"},description:"",defaultValue:{value:"{}",computed:!1}},onMediaRequest:{required:!1,tsType:{name:"signature",type:"function",raw:"(url: string) => void",signature:{arguments:[{type:{name:"string"},name:"url"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},mediaObserve:{required:!1,tsType:{name:"signature",type:"function",raw:"(url: string, el: HTMLElement | null) => void",signature:{arguments:[{type:{name:"string"},name:"url"},{type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},onSend:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""},onSendMedia:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File, caption?: string) => void",signature:{arguments:[{type:{name:"File"},name:"file"},{type:{name:"string"},name:"caption"}],return:{name:"void"}}},description:""},pending:{required:!1,tsType:{name:"union",raw:"PendingAttachment | null",elements:[{name:"PendingAttachment"},{name:"null"}]},description:""},onAttach:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => void",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"void"}}},description:""},onClearAttachment:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""},setInputValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},onEditMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, newBody: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"string"},name:"newBody"}],return:{name:"void"}}},description:""},onDeleteMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, mediaUrls?: string[]) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"mediaUrls"}],return:{name:"void"}}},description:""},scrollContainerRef:{required:!1,tsType:{name:"signature",type:"function",raw:"(el: HTMLDivElement | null) => void",signature:{arguments:[{type:{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},showJumpToBottom:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onJumpToBottom:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:s}=__STORYBOOK_MODULE_TEST__,qe={title:"Chat/ChatView",component:z,parameters:{layout:"fullscreen"},args:{onSend:s(),onBack:s(),encryptionReady:!0,online:!0,inputValue:"",setInputValue:s()}},u={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!1,sending:!1}},g={args:{chatTitle:"Saved Messages",isSaved:!0,handle:"saved",messages:[],loading:!1,sending:!1}},f={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!1,sending:!1,inputValue:"half-typed message…"}},h={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!0,sending:!1}},v={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hey, how are you?",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1},{id:"2",text:"I'm doing great! Working on the new encryption feature.",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!0},{id:"3",text:"Nice, sounds exciting. Let me know if you need help testing.",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!1}],loading:!1,sending:!1}},y={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:`Shopping list:
- milk
- eggs
- a very long line that should wrap onto the next visual row on its own without breaking the others`,timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1}],loading:!1,sending:!1}},x={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hello!",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0}],loading:!1,sending:!0}},w={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Older message",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1},{id:"2",text:"Newer message — user has scrolled up so a jump indicator is visible",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!1}],loading:!1,sending:!1,showJumpToBottom:!0,onJumpToBottom:s()}},T={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"This was synced before the network dropped.",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1}],loading:!1,sending:!1,online:!1}},S={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hello Bob (edited)",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0,editedAt:new Date("2024-01-15T10:31:00Z")},{id:"2",text:"",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!0,deleted:!0},{id:"3",text:"A normal received message",timestamp:new Date("2024-01-15T10:33:00Z"),sent:!1}],loading:!1,sending:!1,onEditMessage:s(),onDeleteMessage:s()}},P="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Crect width='160' height='160' fill='%2360a5fa'/%3E%3C/svg%3E",o={chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!1,sending:!1,onSendMedia:s(),onAttach:s(),onClearAttachment:s()},b={args:{...o}},j={args:{...o,inputValue:"just a normal message"}},D={args:{...o,inputValue:`first line
second line
third line`}},M={args:{...o,pending:{file:new File(["x"],"beach.jpg",{type:"image/jpeg"}),previewUrl:P,isImage:!0}}},k={args:{...o,inputValue:"sunset, night one",pending:{file:new File(["x"],"beach.jpg",{type:"image/jpeg"}),previewUrl:P,isImage:!0}}},N={args:{...o,pending:{file:new File([new Uint8Array(204800)],"report.pdf",{type:"application/pdf"}),previewUrl:"",isImage:!1}}},C={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"First message",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0},{id:"2",text:"This one is being edited",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!0},{id:"3",text:"Third message",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!0}],loading:!1,sending:!1,onEditMessage:s(),onDeleteMessage:s()},play:async({canvas:l,userEvent:d})=>{const E=l.getAllByTestId("message-actions-trigger");await d.click(E[1]),await d.click(l.getByTestId("message-action-edit"))}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [{
      id: '1',
      text: 'Shopping list:\\n- milk\\n- eggs\\n- a very long line that should wrap onto the next visual row on its own without breaking the others',
      timestamp: new Date('2024-01-15T10:30:00Z'),
      sent: false
    }],
    loading: false,
    sending: false
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...composeArgs
  }
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...composeArgs,
    inputValue: 'just a normal message'
  }
}`,...j.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...composeArgs,
    inputValue: 'first line\\nsecond line\\nthird line'
  }
}`,...D.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const Be=["Empty","SavedEmpty","Draft","Loading","WithMessages","WithMultilineMessage","Sending","WithScrolledUpIndicator","Offline","WithAmendments","ComposeEmpty","ComposeTextOnly","ComposeMultiline","ComposeStagedImage","ComposeStagedImageWithCaption","ComposeStagedFile","WithOneMessageEditing"];export{b as ComposeEmpty,D as ComposeMultiline,N as ComposeStagedFile,M as ComposeStagedImage,k as ComposeStagedImageWithCaption,j as ComposeTextOnly,f as Draft,u as Empty,h as Loading,T as Offline,g as SavedEmpty,x as Sending,S as WithAmendments,v as WithMessages,y as WithMultilineMessage,C as WithOneMessageEditing,w as WithScrolledUpIndicator,Be as __namedExportsOrder,qe as default};
