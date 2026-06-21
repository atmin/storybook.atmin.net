import{r as be,j as n,m as De,N as je,n as Ee,s as ke,t as Ce}from"./iframe-Chxscvv8.js";import{f as Me}from"./utils-CRP4iD9C.js";import{C as Ne}from"./ChatMessage-CUSZgLa2.js";import{J as Ae}from"./JumpToBottomButton-7hzHIOIu.js";import{M as Ze}from"./MessageActions-CRsiFQTR.js";import{c as I}from"./createLucideIcon-CyQYxhS1.js";import{F as qe}from"./MediaAttachment-B5Rjn9yA.js";import{C as Ie}from"./check-B5h3AJFc.js";import"./preload-helper-PPVm8Dsz.js";import"./media-BO-BlET4.js";const _e=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],Ve=I("paperclip",_e);const Fe=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Ue=I("pencil",Fe);const Be=[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",key:"117uat"}],["path",{d:"M6 12h16",key:"s4cdu5"}]],ze=I("send-horizontal",Be);const He=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$=I("x",He);function X({chatTitle:c,isSaved:m,handle:Q,onBack:ee,messages:_,loading:ne,sending:ae,online:z,encryptionReady:te,mediaStates:H={},onMediaRequest:se=()=>{},mediaObserve:ie,onSend:re,onSendMedia:O,pending:i,onAttach:o,onClearAttachment:W,inputValue:p,setInputValue:V,editingId:oe=null,editValue:J="",onEditValueChange:le,onStartEdit:L,onCancelEdit:de,onCommitEdit:ce,onDeleteMessage:F,scrollContainerRef:me,showJumpToBottom:pe=!1,onJumpToBottom:ue}){const[R,u]=be.useState(null),s=oe!==null,d=ae||!te||!z,P=s?!d&&!!J.trim():!d&&(!!p.trim()||!!i),K=()=>{P&&(s?ce?.():i&&O?(O(i.file,p),V(""),W?.()):(re(p.trim()),V("")))},ge=e=>{e.key==="Enter"&&!e.shiftKey&&!e.nativeEvent.isComposing&&(e.preventDefault(),K())},fe=e=>{if(!o||s)return;const t=e.clipboardData?.items;if(t)for(let U=0;U<t.length;U++){const B=t[U];if(B.kind==="file"&&B.type.startsWith("image/")){const Y=B.getAsFile();if(Y){e.preventDefault(),o(Y);return}}}},he=e=>{if(!o||s)return;const t=e.dataTransfer?.files?.[0];t&&(e.preventDefault(),o(t))},ve=e=>{o&&!s&&e.preventDefault()},ye=s?"Edit message…":i?"Add a caption…":z?"Type a message...":"You are offline",r=R?_.find(e=>e.id===R):void 0,xe=!!r&&!!L&&(!r.media||r.text!==""),we=e=>e.media?[e.media.url,e.media.preview?.url].filter(t=>!!t):void 0,Te=o&&!s?n.jsxs("label",{"data-testid":"attach-button","aria-label":"Attach file","aria-disabled":d,className:`flex size-8 -translate-y-2.5 items-center justify-center rounded-full text-primary ${d?"pointer-events-none opacity-40":"cursor-pointer hover:bg-black/5 dark:hover:bg-white/10"}`,children:[n.jsx(Ve,{className:"size-5"}),n.jsx("input",{type:"file",className:"hidden",disabled:d,onChange:e=>{const t=e.target.files?.[0];t&&o(t),e.target.value=""}})]}):void 0,Se=n.jsx("button",{type:"button","aria-label":s?"Save edit":"Send",disabled:!P,onClick:K,className:"flex size-8 -translate-y-2.5 items-center justify-center rounded-full text-primary disabled:opacity-40",children:s?n.jsx(Ie,{className:"size-5"}):n.jsx(ze,{className:"size-5"})});return n.jsxs(De,{className:"flex flex-col overflow-hidden!",children:[n.jsx(je,{title:m?c:n.jsx("span",{className:"font-mono",children:c}),left:n.jsx(Ee,{text:"Chats",onClick:ee})}),n.jsxs("div",{className:"relative flex flex-1 flex-col overflow-hidden",children:[n.jsx("div",{ref:me,className:"flex-1 overflow-y-auto overflow-x-hidden",children:n.jsx("div",{className:"mx-auto max-w-2xl px-1 py-4",children:ne?n.jsx("div",{className:"flex h-96 items-center justify-center text-muted-foreground",children:n.jsx("p",{children:"Loading messages..."})}):_.length===0?n.jsx("div",{className:"flex h-96 items-center justify-center text-center text-muted-foreground",children:n.jsxs("div",{children:[n.jsx("p",{className:"mb-2",children:"No messages yet"}),n.jsx("p",{className:"text-xs",children:m?"Send yourself notes and reminders":`Start a conversation with ${Q}`})]})}):n.jsx(ke,{className:"mb-2! bg-transparent",children:_.map(e=>{const t=e.sent&&!e.deleted&&!!F;return n.jsx(Ne,{text:e.text,timestamp:e.timestamp,sent:e.sent,media:e.media,mediaState:e.media?H[e.media.preview?.url??e.media.url]:void 0,mediaFullState:e.media?H[e.media.url]:void 0,onMediaRequest:se,mediaObserve:ie,editedAt:e.editedAt,deleted:e.deleted,onRequestActions:t?()=>u(e.id):void 0},e.id)})})})}),pe&&n.jsx(Ae,{onClick:ue??(()=>{})})]}),n.jsxs("div",{className:"bg-background",children:[s?n.jsxs("div",{"data-testid":"edit-banner",className:"flex items-center gap-2 px-4 pt-2 text-sm",children:[n.jsx(Ue,{className:"size-4 text-primary","aria-hidden":!0}),n.jsx("span",{className:"font-medium text-primary",children:"Editing message"}),n.jsx("button",{type:"button","data-testid":"edit-cancel","aria-label":"Cancel edit",onClick:de,className:"ml-auto flex size-7 items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10",children:n.jsx($,{className:"size-4"})})]}):i&&n.jsx("div",{className:"px-3 pt-3",children:n.jsxs("div",{"data-testid":"compose-tray",className:"flex items-center gap-3 rounded-xl bg-black/5 p-2 dark:bg-white/10",children:[i.isImage?n.jsx("img",{"data-testid":"compose-thumb",src:i.previewUrl,alt:i.file.name,className:"size-16 rounded-lg object-cover"}):n.jsxs("div",{"data-testid":"compose-file",className:"flex min-w-0 flex-1 items-center gap-2",children:[n.jsx(qe,{className:"size-4 shrink-0 opacity-70","aria-hidden":!0}),n.jsxs("span",{className:"min-w-0",children:[n.jsx("span",{className:"block truncate text-sm",children:i.file.name}),n.jsx("span",{className:"block text-xs opacity-70",children:Me(i.file.size)})]})]}),n.jsx("button",{type:"button","data-testid":"compose-remove","aria-label":"Remove attachment",onClick:()=>W?.(),className:"ml-auto flex size-8 items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10",children:n.jsx($,{className:"size-4"})})]})}),n.jsx(Ce,{className:"relative!",leftClassName:"-ms-1",rightClassName:"-me-1",value:s?J:p,placeholder:ye,textareaId:"message-input",onChange:e=>s?le?.(e.target.value):V(e.target.value),onKeyDown:ge,onPaste:fe,onDrop:he,onDragOver:ve,left:Te,right:Se})]}),n.jsx(Ze,{opened:!!r,canEdit:xe,onEdit:()=>{r&&(L?.(r.id,r.text),document.getElementById("message-input")?.focus()),u(null)},onDelete:()=>{r&&F&&F(r.id,we(r)),u(null)},onClose:()=>u(null)})]})}X.__docgenInfo={description:"",methods:[],displayName:"ChatView",props:{chatTitle:{required:!0,tsType:{name:"string"},description:""},isSaved:{required:!0,tsType:{name:"boolean"},description:""},handle:{required:!0,tsType:{name:"string"},description:""},onBack:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Back to the conversation list. Plain navigate (no reverse transition)."},messages:{required:!0,tsType:{name:"Array",elements:[{name:"Message"}],raw:"Message[]"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},sending:{required:!0,tsType:{name:"boolean"},description:""},online:{required:!0,tsType:{name:"boolean"},description:""},encryptionReady:{required:!0,tsType:{name:"boolean"},description:""},mediaStates:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"MediaState"}],raw:"Record<string, MediaState>"},description:"",defaultValue:{value:"{}",computed:!1}},onMediaRequest:{required:!1,tsType:{name:"signature",type:"function",raw:"(url: string) => void",signature:{arguments:[{type:{name:"string"},name:"url"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},mediaObserve:{required:!1,tsType:{name:"signature",type:"function",raw:"(url: string, el: HTMLElement | null) => void",signature:{arguments:[{type:{name:"string"},name:"url"},{type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},onSend:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""},onSendMedia:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File, caption?: string) => void",signature:{arguments:[{type:{name:"File"},name:"file"},{type:{name:"string"},name:"caption"}],return:{name:"void"}}},description:""},pending:{required:!1,tsType:{name:"union",raw:"PendingAttachment | null",elements:[{name:"PendingAttachment"},{name:"null"}]},description:""},onAttach:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => void",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"void"}}},description:""},onClearAttachment:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""},setInputValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},editingId:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},editValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onEditValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},onStartEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, body: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"string"},name:"body"}],return:{name:"void"}}},description:""},onCancelEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCommitEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDeleteMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, mediaUrls?: string[]) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"mediaUrls"}],return:{name:"void"}}},description:""},scrollContainerRef:{required:!1,tsType:{name:"signature",type:"function",raw:"(el: HTMLDivElement | null) => void",signature:{arguments:[{type:{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},showJumpToBottom:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onJumpToBottom:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:a}=__STORYBOOK_MODULE_TEST__,Ge={title:"Chat/ChatView",component:X,parameters:{layout:"fullscreen"},args:{onSend:a(),onBack:a(),encryptionReady:!0,online:!0,inputValue:"",setInputValue:a()}},g={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!1,sending:!1}},f={args:{chatTitle:"Saved Messages",isSaved:!0,handle:"saved",messages:[],loading:!1,sending:!1}},h={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!1,sending:!1,inputValue:"half-typed message…"}},v={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!0,sending:!1}},y={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hey, how are you?",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1},{id:"2",text:"I'm doing great! Working on the new encryption feature.",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!0},{id:"3",text:"Nice, sounds exciting. Let me know if you need help testing.",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!1}],loading:!1,sending:!1}},x={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:`Shopping list:
- milk
- eggs
- a very long line that should wrap onto the next visual row on its own without breaking the others`,timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1}],loading:!1,sending:!1}},w={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"ok",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0},{id:"2",text:"level=info msg=request request_id=01KVJKJQGEF90SE5PVF11AX33S method=GET path=/v1/store/object status=200 dur_ms=3 ip=127.0.0.1 user_id=01KVJJAH971RXNVEMHJ11F69BF",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!0}],loading:!1,sending:!1,onStartEdit:a(),onDeleteMessage:a()}},T={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"check this out",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0,media:{url:"media/01STORY/wide",key:new Uint8Array(32),iv:new Uint8Array(12),name:"wide.jpg",size:482113,width:2048,height:1536}}],loading:!1,sending:!1,mediaStates:{"media/01STORY/wide":{status:"idle",blobUrl:null,mime:null}},onMediaRequest:a(),onStartEdit:a(),onDeleteMessage:a()}},S={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hello!",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0}],loading:!1,sending:!0}},b={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Older message",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1},{id:"2",text:"Newer message — user has scrolled up so a jump indicator is visible",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!1}],loading:!1,sending:!1,showJumpToBottom:!0,onJumpToBottom:a()}},D={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"This was synced before the network dropped.",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1}],loading:!1,sending:!1,online:!1}},j={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hello Bob (edited)",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0,editedAt:new Date("2024-01-15T10:31:00Z")},{id:"2",text:"",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!0,deleted:!0},{id:"3",text:"A normal received message",timestamp:new Date("2024-01-15T10:33:00Z"),sent:!1}],loading:!1,sending:!1,onStartEdit:a(),onDeleteMessage:a()}},G="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Crect width='160' height='160' fill='%2360a5fa'/%3E%3C/svg%3E",l={chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!1,sending:!1,onSendMedia:a(),onAttach:a(),onClearAttachment:a()},E={args:{...l}},k={args:{...l,inputValue:"just a normal message"}},C={args:{...l,inputValue:`first line
second line
third line`}},M={args:{...l,pending:{file:new File(["x"],"beach.jpg",{type:"image/jpeg"}),previewUrl:G,isImage:!0}}},N={args:{...l,inputValue:"sunset, night one",pending:{file:new File(["x"],"beach.jpg",{type:"image/jpeg"}),previewUrl:G,isImage:!0}}},A={args:{...l,pending:{file:new File([new Uint8Array(204800)],"report.pdf",{type:"application/pdf"}),previewUrl:"",isImage:!1}}},Z={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"First message",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0},{id:"2",text:"This one is being edited",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!0},{id:"3",text:"Third message",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!0}],loading:!1,sending:!1,editingId:"2",editValue:"This one is being edited",onStartEdit:a(),onEditValueChange:a(),onCancelEdit:a(),onCommitEdit:a(),onDeleteMessage:a()}},q={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Tap the ⋯ to edit or delete me",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0}],loading:!1,sending:!1,onStartEdit:a(),onDeleteMessage:a()},play:async({canvas:c,userEvent:m})=>{await m.click(c.getByTestId("message-actions-trigger"))}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [],
    loading: false,
    sending: false
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'Saved Messages',
    isSaved: true,
    handle: 'saved',
    messages: [],
    loading: false,
    sending: false
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [],
    loading: false,
    sending: false,
    inputValue: 'half-typed message…'
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [],
    loading: true,
    sending: false
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [{
      id: '1',
      text: 'ok',
      timestamp: new Date('2024-01-15T10:30:00Z'),
      sent: true
    }, {
      id: '2',
      text: 'level=info msg=request request_id=01KVJKJQGEF90SE5PVF11AX33S method=GET path=/v1/store/object status=200 dur_ms=3 ip=127.0.0.1 user_id=01KVJJAH971RXNVEMHJ11F69BF',
      timestamp: new Date('2024-01-15T10:31:00Z'),
      sent: true
    }],
    loading: false,
    sending: false,
    onStartEdit: fn(),
    onDeleteMessage: fn()
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [{
      id: '1',
      text: 'check this out',
      timestamp: new Date('2024-01-15T10:30:00Z'),
      sent: true,
      media: {
        url: 'media/01STORY/wide',
        key: new Uint8Array(32),
        iv: new Uint8Array(12),
        name: 'wide.jpg',
        size: 482_113,
        width: 2048,
        height: 1536
      }
    }],
    loading: false,
    sending: false,
    mediaStates: {
      'media/01STORY/wide': {
        status: 'idle',
        blobUrl: null,
        mime: null
      }
    },
    onMediaRequest: fn(),
    onStartEdit: fn(),
    onDeleteMessage: fn()
  }
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
    onStartEdit: fn(),
    onDeleteMessage: fn()
  }
}`,...j.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...composeArgs
  }
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...composeArgs,
    inputValue: 'just a normal message'
  }
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...composeArgs,
    inputValue: 'first line\\nsecond line\\nthird line'
  }
}`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
    editingId: '2',
    editValue: 'This one is being edited',
    onStartEdit: fn(),
    onEditValueChange: fn(),
    onCancelEdit: fn(),
    onCommitEdit: fn(),
    onDeleteMessage: fn()
  }
}`,...Z.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [{
      id: '1',
      text: 'Tap the ⋯ to edit or delete me',
      timestamp: new Date('2024-01-15T10:30:00Z'),
      sent: true
    }],
    loading: false,
    sending: false,
    onStartEdit: fn(),
    onDeleteMessage: fn()
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId('message-actions-trigger'));
  }
}`,...q.parameters?.docs?.source}}};const Qe=["Empty","SavedEmpty","Draft","Loading","WithMessages","WithMultilineMessage","WideUnbreakableMessage","WithImageAttachment","Sending","WithScrolledUpIndicator","Offline","WithAmendments","ComposeEmpty","ComposeTextOnly","ComposeMultiline","ComposeStagedImage","ComposeStagedImageWithCaption","ComposeStagedFile","EditingInComposer","WithActionSheet"];export{E as ComposeEmpty,C as ComposeMultiline,A as ComposeStagedFile,M as ComposeStagedImage,N as ComposeStagedImageWithCaption,k as ComposeTextOnly,h as Draft,Z as EditingInComposer,g as Empty,v as Loading,D as Offline,f as SavedEmpty,S as Sending,w as WideUnbreakableMessage,q as WithActionSheet,j as WithAmendments,T as WithImageAttachment,y as WithMessages,x as WithMultilineMessage,b as WithScrolledUpIndicator,Qe as __namedExportsOrder,Ge as default};
