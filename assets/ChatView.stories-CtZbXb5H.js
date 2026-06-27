import{r as ae,j as e,m as Ae,N as Ze,n as qe,s as Fe,t as Ie}from"./iframe-DExrBerK.js";import{f as Ve}from"./utils-CRP4iD9C.js";import{C as _e}from"./ChatMessage-BddSQ6Vr.js";import{J as Ue}from"./JumpToBottomButton-fKDLQLs7.js";import{M as Be}from"./MessageActions-BltwH8gt.js";import{c as O}from"./createLucideIcon-lcv2Z9VP.js";import{F as We}from"./MediaAttachment-DALxldtl.js";import{C as He}from"./check-8BzNdRa5.js";import"./preload-helper-PPVm8Dsz.js";import"./media-BO-BlET4.js";const ze=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],Je=O("paperclip",ze);const Oe=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Re=O("pencil",Oe);const Le=[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",key:"117uat"}],["path",{d:"M6 12h16",key:"s4cdu5"}]],Ye=O("send-horizontal",Le);const Pe=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],se=O("x",Pe),$e=["January","February","March","April","May","June","July","August","September","October","November","December"];function v(a){const s=a.getFullYear(),c=String(a.getMonth()+1).padStart(2,"0"),o=String(a.getDate()).padStart(2,"0");return`${s}-${c}-${o}`}function Ke(a,s){const c=v(a);if(c===v(s))return"Today";const o=new Date(s.getFullYear(),s.getMonth(),s.getDate()-1);if(c===v(o))return"Yesterday";const m=`${a.getDate()} ${$e[a.getMonth()]}`;return a.getFullYear()===s.getFullYear()?m:`${m} ${a.getFullYear()}`}function ie({chatTitle:a,isSaved:s,handle:c,onBack:o,messages:m,loading:oe,sending:le,online:Y,encryptionReady:de,newBoundary:P=null,mediaStates:$={},onMediaRequest:ce=()=>{},mediaObserve:me,onSend:pe,onSendMedia:K,pending:l,onAttach:p,onClearAttachment:X,inputValue:x,setInputValue:R,editingId:ue=null,editValue:G="",onEditValueChange:ge,onStartEdit:Q,onCancelEdit:fe,onCommitEdit:he,onDeleteMessage:L,scrollContainerRef:ye,showJumpToBottom:ve=!1,onJumpToBottom:xe}){const[ee,w]=ae.useState(null),r=ue!==null,f=le||!de||!Y,we=new Date,Te=P==null?null:m.find(t=>!t.sent&&t.timestamp.getTime()>P)?.id??null,te=r?!f&&!!G.trim():!f&&(!!x.trim()||!!l),ne=()=>{te&&(r?he?.():l&&K?(K(l.file,x),R(""),X?.()):(pe(x.trim()),R("")))},Se=t=>{t.key==="Enter"&&!t.shiftKey&&!t.nativeEvent.isComposing&&(t.preventDefault(),ne())},be=t=>{if(!p||r)return;const i=t.clipboardData?.items;if(i)for(let h=0;h<i.length;h++){const u=i[h];if(u.kind==="file"&&u.type.startsWith("image/")){const T=u.getAsFile();if(T){t.preventDefault(),p(T);return}}}},De=t=>{if(!p||r)return;const i=t.dataTransfer?.files?.[0];i&&(t.preventDefault(),p(i))},je=t=>{p&&!r&&t.preventDefault()},ke=r?"Edit message…":l?"Add a caption…":Y?"Type a message...":"You are offline",d=ee?m.find(t=>t.id===ee):void 0,Ee=!!d&&!!Q&&(!d.media||d.text!==""),Me=t=>t.media?[t.media.url,t.media.preview?.url].filter(i=>!!i):void 0,Ne=p&&!r?e.jsxs("label",{"data-testid":"attach-button","aria-label":"Attach file","aria-disabled":f,className:`flex size-8 -translate-y-2.5 items-center justify-center rounded-full text-primary ${f?"pointer-events-none opacity-40":"cursor-pointer hover:bg-black/5 dark:hover:bg-white/10"}`,children:[e.jsx(Je,{className:"size-5"}),e.jsx("input",{type:"file",className:"hidden",disabled:f,onChange:t=>{const i=t.target.files?.[0];i&&p(i),t.target.value=""}})]}):void 0,Ce=e.jsx("button",{type:"button","aria-label":r?"Save edit":"Send",disabled:!te,onClick:ne,className:"flex size-8 -translate-y-2.5 items-center justify-center rounded-full text-primary disabled:opacity-40",children:r?e.jsx(He,{className:"size-5"}):e.jsx(Ye,{className:"size-5"})});return e.jsxs(Ae,{className:"flex flex-col overflow-hidden!",children:[e.jsx(Ze,{title:s?a:e.jsx("span",{className:"font-mono",children:a}),left:e.jsx(qe,{text:"Chats",onClick:o})}),e.jsxs("div",{className:"relative flex flex-1 flex-col overflow-hidden",children:[e.jsx("div",{ref:ye,className:"flex-1 overflow-y-auto overflow-x-hidden",children:e.jsx("div",{className:"mx-auto max-w-2xl px-1 py-4",children:oe?e.jsx("div",{className:"flex h-96 items-center justify-center text-muted-foreground",children:e.jsx("p",{children:"Loading messages..."})}):m.length===0?e.jsx("div",{className:"flex h-96 items-center justify-center text-center text-muted-foreground",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-2",children:"No messages yet"}),e.jsx("p",{className:"text-xs",children:s?"Send yourself notes and reminders":`Start a conversation with ${c}`})]})}):e.jsx(Fe,{className:"mb-2! bg-transparent",children:m.map((t,i)=>{const h=t.sent&&!t.deleted&&!!L,u=m[i-1],T=!u||v(t.timestamp)!==v(u.timestamp);return e.jsxs(ae.Fragment,{children:[t.id===Te&&e.jsxs("div",{"data-testid":"new-divider",className:"my-3 flex items-center gap-3 px-3",children:[e.jsx("span",{className:"h-px flex-1 bg-primary/40"}),e.jsx("span",{className:"text-xs font-semibold tracking-wider text-primary uppercase",children:"New"}),e.jsx("span",{className:"h-px flex-1 bg-primary/40"})]}),T&&e.jsx("div",{"data-testid":"day-separator",className:"sticky top-2 z-10 my-3 flex justify-center",children:e.jsx("span",{className:"w-36 rounded-full bg-background/80 px-3 py-1 text-center text-xs font-medium whitespace-nowrap text-muted-foreground backdrop-blur-sm",children:Ke(t.timestamp,we)})}),e.jsx(_e,{text:t.text,timestamp:t.timestamp,sent:t.sent,media:t.media,mediaState:t.media?$[t.media.preview?.url??t.media.url]:void 0,mediaFullState:t.media?$[t.media.url]:void 0,onMediaRequest:ce,mediaObserve:me,editedAt:t.editedAt,deleted:t.deleted,onRequestActions:h?()=>w(t.id):void 0})]},t.id)})})})}),ve&&e.jsx(Ue,{onClick:xe??(()=>{})})]}),e.jsxs("div",{className:"bg-background",children:[r?e.jsxs("div",{"data-testid":"edit-banner",className:"flex items-center gap-2 px-4 pt-2 text-sm",children:[e.jsx(Re,{className:"size-4 text-primary","aria-hidden":!0}),e.jsx("span",{className:"font-medium text-primary",children:"Editing message"}),e.jsx("button",{type:"button","data-testid":"edit-cancel","aria-label":"Cancel edit",onClick:fe,className:"ml-auto flex size-7 items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10",children:e.jsx(se,{className:"size-4"})})]}):l&&e.jsx("div",{className:"px-3 pt-3",children:e.jsxs("div",{"data-testid":"compose-tray",className:"flex items-center gap-3 rounded-xl bg-black/5 p-2 dark:bg-white/10",children:[l.isImage?e.jsx("img",{"data-testid":"compose-thumb",src:l.previewUrl,alt:l.file.name,className:"size-16 rounded-lg object-cover"}):e.jsxs("div",{"data-testid":"compose-file",className:"flex min-w-0 flex-1 items-center gap-2",children:[e.jsx(We,{className:"size-4 shrink-0 opacity-70","aria-hidden":!0}),e.jsxs("span",{className:"min-w-0",children:[e.jsx("span",{className:"block truncate text-sm",children:l.file.name}),e.jsx("span",{className:"block text-xs opacity-70",children:Ve(l.file.size)})]})]}),e.jsx("button",{type:"button","data-testid":"compose-remove","aria-label":"Remove attachment",onClick:()=>X?.(),className:"ml-auto flex size-8 items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10",children:e.jsx(se,{className:"size-4"})})]})}),e.jsx(Ie,{className:"relative!",leftClassName:"-ms-1",rightClassName:"-me-1",value:r?G:x,placeholder:ke,textareaId:"message-input",onChange:t=>r?ge?.(t.target.value):R(t.target.value),onKeyDown:Se,onPaste:be,onDrop:De,onDragOver:je,left:Ne,right:Ce})]}),e.jsx(Be,{opened:!!d,canEdit:Ee,onEdit:()=>{d&&(Q?.(d.id,d.text),document.getElementById("message-input")?.focus()),w(null)},onDelete:()=>{d&&L&&L(d.id,Me(d)),w(null)},onClose:()=>w(null)})]})}ie.__docgenInfo={description:"",methods:[],displayName:"ChatView",props:{chatTitle:{required:!0,tsType:{name:"string"},description:""},isSaved:{required:!0,tsType:{name:"boolean"},description:""},handle:{required:!0,tsType:{name:"string"},description:""},onBack:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Back to the conversation list. Plain navigate (no reverse transition)."},messages:{required:!0,tsType:{name:"Array",elements:[{name:"Message"}],raw:"Message[]"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},sending:{required:!0,tsType:{name:"boolean"},description:""},online:{required:!0,tsType:{name:"boolean"},description:""},encryptionReady:{required:!0,tsType:{name:"boolean"},description:""},newBoundary:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:`Read watermark captured on open (ADR-0026). A "New" divider renders before
the first incoming message newer than this. null / no message past it →
no divider.`,defaultValue:{value:"null",computed:!1}},mediaStates:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"MediaState"}],raw:"Record<string, MediaState>"},description:"",defaultValue:{value:"{}",computed:!1}},onMediaRequest:{required:!1,tsType:{name:"signature",type:"function",raw:"(url: string) => void",signature:{arguments:[{type:{name:"string"},name:"url"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},mediaObserve:{required:!1,tsType:{name:"signature",type:"function",raw:"(url: string, el: HTMLElement | null) => void",signature:{arguments:[{type:{name:"string"},name:"url"},{type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},onSend:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""},onSendMedia:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File, caption?: string) => void",signature:{arguments:[{type:{name:"File"},name:"file"},{type:{name:"string"},name:"caption"}],return:{name:"void"}}},description:""},pending:{required:!1,tsType:{name:"union",raw:"PendingAttachment | null",elements:[{name:"PendingAttachment"},{name:"null"}]},description:""},onAttach:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => void",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"void"}}},description:""},onClearAttachment:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""},setInputValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},editingId:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},editValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onEditValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},onStartEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, body: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"string"},name:"body"}],return:{name:"void"}}},description:""},onCancelEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCommitEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDeleteMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, mediaUrls?: string[]) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"mediaUrls"}],return:{name:"void"}}},description:""},scrollContainerRef:{required:!1,tsType:{name:"signature",type:"function",raw:"(el: HTMLDivElement | null) => void",signature:{arguments:[{type:{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},showJumpToBottom:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onJumpToBottom:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:n}=__STORYBOOK_MODULE_TEST__,lt={title:"Chat/ChatView",component:ie,parameters:{layout:"fullscreen"},args:{onSend:n(),onBack:n(),encryptionReady:!0,online:!0,inputValue:"",setInputValue:n()}},S={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!1,sending:!1}},b={args:{chatTitle:"Saved Messages",isSaved:!0,handle:"saved",messages:[],loading:!1,sending:!1}},D={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!1,sending:!1,inputValue:"half-typed message…"}},j={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!0,sending:!1}},k={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hey, how are you?",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1},{id:"2",text:"I'm doing great! Working on the new encryption feature.",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!0},{id:"3",text:"Nice, sounds exciting. Let me know if you need help testing.",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!1}],loading:!1,sending:!1}},E={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",newBoundary:new Date("2024-01-15T10:31:30Z").getTime(),messages:[{id:"1",text:"A message you already saw",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1},{id:"2",text:"Your reply",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!0},{id:"3",text:"This arrived since you last looked",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!1},{id:"4",text:"And so did this one",timestamp:new Date("2024-01-15T10:33:00Z"),sent:!1}],loading:!1,sending:!1}},Xe=864e5,y=(a,s,c)=>{const o=new Date;return o.setDate(o.getDate()-a),o.setHours(s,c,0,0),o},M={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Way back when we first set this up.",timestamp:new Date(Date.now()-400*Xe),sent:!1},{id:"2",text:"A note from a few days ago.",timestamp:y(4,9,15),sent:!0},{id:"3",text:"Did you see the deploy went out?",timestamp:y(1,18,30),sent:!1},{id:"4",text:"Yep — green across the board.",timestamp:y(1,18,32),sent:!0},{id:"5",text:"Morning! Starting on the revamp today.",timestamp:y(0,8,5),sent:!1},{id:"6",text:"The date dividers look great.",timestamp:y(0,8,10),sent:!0}],loading:!1,sending:!1}},N={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:`Shopping list:
- milk
- eggs
- a very long line that should wrap onto the next visual row on its own without breaking the others`,timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1}],loading:!1,sending:!1}},C={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"ok",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0},{id:"2",text:"level=info msg=request request_id=01KVJKJQGEF90SE5PVF11AX33S method=GET path=/v1/store/object status=200 dur_ms=3 ip=127.0.0.1 user_id=01KVJJAH971RXNVEMHJ11F69BF",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!0}],loading:!1,sending:!1,onStartEdit:n(),onDeleteMessage:n()}},A={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"check this out",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0,media:{url:"media/01STORY/wide",key:new Uint8Array(32),iv:new Uint8Array(12),name:"wide.jpg",size:482113,width:2048,height:1536}}],loading:!1,sending:!1,mediaStates:{"media/01STORY/wide":{status:"idle",blobUrl:null,mime:null}},onMediaRequest:n(),onStartEdit:n(),onDeleteMessage:n()}},Z={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hello!",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0}],loading:!1,sending:!0}},q={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Older message",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1},{id:"2",text:"Newer message — user has scrolled up so a jump indicator is visible",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!1}],loading:!1,sending:!1,showJumpToBottom:!0,onJumpToBottom:n()}},F={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"This was synced before the network dropped.",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!1}],loading:!1,sending:!1,online:!1}},I={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Hello Bob (edited)",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0,editedAt:new Date("2024-01-15T10:31:00Z")},{id:"2",text:"",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!0,deleted:!0},{id:"3",text:"A normal received message",timestamp:new Date("2024-01-15T10:33:00Z"),sent:!1}],loading:!1,sending:!1,onStartEdit:n(),onDeleteMessage:n()}},re="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Crect width='160' height='160' fill='%2360a5fa'/%3E%3C/svg%3E",g={chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[],loading:!1,sending:!1,onSendMedia:n(),onAttach:n(),onClearAttachment:n()},V={args:{...g}},_={args:{...g,inputValue:"just a normal message"}},U={args:{...g,inputValue:`first line
second line
third line`}},B={args:{...g,pending:{file:new File(["x"],"beach.jpg",{type:"image/jpeg"}),previewUrl:re,isImage:!0}}},W={args:{...g,inputValue:"sunset, night one",pending:{file:new File(["x"],"beach.jpg",{type:"image/jpeg"}),previewUrl:re,isImage:!0}}},H={args:{...g,pending:{file:new File([new Uint8Array(204800)],"report.pdf",{type:"application/pdf"}),previewUrl:"",isImage:!1}}},z={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"First message",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0},{id:"2",text:"This one is being edited",timestamp:new Date("2024-01-15T10:31:00Z"),sent:!0},{id:"3",text:"Third message",timestamp:new Date("2024-01-15T10:32:00Z"),sent:!0}],loading:!1,sending:!1,editingId:"2",editValue:"This one is being edited",onStartEdit:n(),onEditValueChange:n(),onCancelEdit:n(),onCommitEdit:n(),onDeleteMessage:n()}},J={args:{chatTitle:"copper-falcon",isSaved:!1,handle:"copper-falcon",messages:[{id:"1",text:"Tap the ⋯ to edit or delete me",timestamp:new Date("2024-01-15T10:30:00Z"),sent:!0}],loading:!1,sending:!1,onStartEdit:n(),onDeleteMessage:n()},play:async({canvas:a,userEvent:s})=>{await s.click(a.getByTestId("message-actions-trigger"))}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [],
    loading: false,
    sending: false
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'Saved Messages',
    isSaved: true,
    handle: 'saved',
    messages: [],
    loading: false,
    sending: false
  }
}`,...b.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [],
    loading: false,
    sending: false,
    inputValue: 'half-typed message…'
  }
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [],
    loading: true,
    sending: false
  }
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    newBoundary: new Date('2024-01-15T10:31:30Z').getTime(),
    messages: [{
      id: '1',
      text: 'A message you already saw',
      timestamp: new Date('2024-01-15T10:30:00Z'),
      sent: false
    }, {
      id: '2',
      text: 'Your reply',
      timestamp: new Date('2024-01-15T10:31:00Z'),
      sent: true
    }, {
      id: '3',
      text: 'This arrived since you last looked',
      timestamp: new Date('2024-01-15T10:32:00Z'),
      sent: false
    }, {
      id: '4',
      text: 'And so did this one',
      timestamp: new Date('2024-01-15T10:33:00Z'),
      sent: false
    }],
    loading: false,
    sending: false
  }
}`,...E.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    chatTitle: 'copper-falcon',
    isSaved: false,
    handle: 'copper-falcon',
    messages: [{
      id: '1',
      text: 'Way back when we first set this up.',
      timestamp: new Date(Date.now() - 400 * DAY),
      // earlier year
      sent: false
    }, {
      id: '2',
      text: 'A note from a few days ago.',
      timestamp: at(4, 9, 15),
      // this year, dated label
      sent: true
    }, {
      id: '3',
      text: 'Did you see the deploy went out?',
      timestamp: at(1, 18, 30),
      // yesterday
      sent: false
    }, {
      id: '4',
      text: 'Yep — green across the board.',
      timestamp: at(1, 18, 32),
      // still yesterday, no new divider
      sent: true
    }, {
      id: '5',
      text: 'Morning! Starting on the revamp today.',
      timestamp: at(0, 8, 5),
      // today
      sent: false
    }, {
      id: '6',
      text: 'The date dividers look great.',
      timestamp: at(0, 8, 10),
      // still today, no new divider
      sent: true
    }],
    loading: false,
    sending: false
  }
}`,...M.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    ...composeArgs
  }
}`,...V.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...composeArgs,
    inputValue: 'just a normal message'
  }
}`,..._.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...composeArgs,
    inputValue: 'first line\\nsecond line\\nthird line'
  }
}`,...U.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};const dt=["Empty","SavedEmpty","Draft","Loading","WithMessages","WithNewDivider","WithDaySeparators","WithMultilineMessage","WideUnbreakableMessage","WithImageAttachment","Sending","WithScrolledUpIndicator","Offline","WithAmendments","ComposeEmpty","ComposeTextOnly","ComposeMultiline","ComposeStagedImage","ComposeStagedImageWithCaption","ComposeStagedFile","EditingInComposer","WithActionSheet"];export{V as ComposeEmpty,U as ComposeMultiline,H as ComposeStagedFile,B as ComposeStagedImage,W as ComposeStagedImageWithCaption,_ as ComposeTextOnly,D as Draft,z as EditingInComposer,S as Empty,j as Loading,F as Offline,b as SavedEmpty,Z as Sending,C as WideUnbreakableMessage,J as WithActionSheet,I as WithAmendments,M as WithDaySeparators,A as WithImageAttachment,k as WithMessages,N as WithMultilineMessage,E as WithNewDivider,q as WithScrolledUpIndicator,dt as __namedExportsOrder,lt as default};
