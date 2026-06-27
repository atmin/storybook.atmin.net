import{C as T}from"./ChatMessage-BddSQ6Vr.js";import"./iframe-DExrBerK.js";import"./preload-helper-PPVm8Dsz.js";import"./MediaAttachment-DALxldtl.js";import"./media-BO-BlET4.js";import"./createLucideIcon-lcv2Z9VP.js";const k={title:"Chat/ChatMessage",component:T},s={args:{text:"Hey, how are you?",timestamp:new Date("2025-01-15T14:30:00"),sent:!0}},n={args:{text:"I'm doing great, thanks for asking!",timestamp:new Date("2025-01-15T14:31:00"),sent:!1}},r={args:{text:"Message with no timestamp",timestamp:new Date(0),sent:!1}},o={args:{text:Array.from({length:18},(x,D)=>`Line ${D+1}: this is a fairly long paragraph of text that keeps going so the whole message takes a lot of vertical space.`).join(`
`),timestamp:new Date("2025-01-15T14:30:00"),sent:!1}},t={url:"media/01STORY/fixture",key:new Uint8Array(32),iv:new Uint8Array(12),name:"fixture.png",size:12345},a=x=>x,e=()=>{},i={args:{text:"Check out this photo",timestamp:new Date("2025-01-15T14:32:00"),sent:!1,media:t,mediaState:a({status:"network-error",blobUrl:null,mime:null}),onMediaRequest:e}},m={args:{text:"Here is a file",timestamp:new Date("2025-01-15T14:33:00"),sent:!0,media:{...t,name:"report.bin",size:98765},mediaState:a({status:"network-error",blobUrl:null,mime:null}),onMediaRequest:e}},d={args:{text:"",timestamp:new Date("2025-01-15T14:34:00"),sent:!1,media:t,mediaState:a({status:"corrupt",blobUrl:null,mime:null}),onMediaRequest:e}},l={args:{text:"missing.jpg",timestamp:new Date("2025-01-15T14:35:00"),sent:!1,media:t,mediaState:a({status:"unavailable",blobUrl:null,mime:null}),onMediaRequest:e}},p={args:{text:"loading.png",timestamp:new Date("2025-01-15T14:36:00"),sent:!1,media:t,mediaState:a({status:"loading",blobUrl:null,mime:null}),onMediaRequest:e}},c={args:{text:"Hello Bob (fixed)",timestamp:new Date("2025-01-15T14:30:00"),sent:!0,editedAt:new Date("2025-01-15T14:31:00"),onRequestActions:e}},u={args:{text:"typo fixed moments later",timestamp:new Date("2025-01-15T14:30:00"),sent:!0,editedAt:new Date("2025-01-15T14:30:20"),onRequestActions:e}},g={args:{text:"fixed it a few hours on",timestamp:new Date("2025-01-15T14:30:00"),sent:!0,editedAt:new Date("2025-01-15T19:30:00"),onRequestActions:e}},w={args:{text:"rewriting history",timestamp:new Date("2025-01-15T14:30:00"),sent:!0,editedAt:new Date("2025-02-05T09:00:00"),onRequestActions:e}},f={args:{text:"",timestamp:new Date("2025-01-15T14:30:00"),sent:!0,deleted:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Hey, how are you?',
    timestamp: new Date('2025-01-15T14:30:00'),
    sent: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: "I'm doing great, thanks for asking!",
    timestamp: new Date('2025-01-15T14:31:00'),
    sent: false
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Message with no timestamp',
    timestamp: new Date(0),
    sent: false
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: Array.from({
      length: 18
    }, (_, i) => \`Line \${i + 1}: this is a fairly long paragraph of text that keeps going so the whole message takes a lot of vertical space.\`).join('\\n'),
    timestamp: new Date('2025-01-15T14:30:00'),
    sent: false
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Check out this photo',
    timestamp: new Date('2025-01-15T14:32:00'),
    sent: false,
    media: fakeMedia,
    mediaState: state({
      status: 'network-error',
      blobUrl: null,
      mime: null
    }),
    onMediaRequest: noop
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Here is a file',
    timestamp: new Date('2025-01-15T14:33:00'),
    sent: true,
    media: {
      ...fakeMedia,
      name: 'report.bin',
      size: 98_765
    },
    mediaState: state({
      status: 'network-error',
      blobUrl: null,
      mime: null
    }),
    onMediaRequest: noop
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: '',
    timestamp: new Date('2025-01-15T14:34:00'),
    sent: false,
    media: fakeMedia,
    mediaState: state({
      status: 'corrupt',
      blobUrl: null,
      mime: null
    }),
    onMediaRequest: noop
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'missing.jpg',
    timestamp: new Date('2025-01-15T14:35:00'),
    sent: false,
    media: fakeMedia,
    mediaState: state({
      status: 'unavailable',
      blobUrl: null,
      mime: null
    }),
    onMediaRequest: noop
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'loading.png',
    timestamp: new Date('2025-01-15T14:36:00'),
    sent: false,
    media: fakeMedia,
    mediaState: state({
      status: 'loading',
      blobUrl: null,
      mime: null
    }),
    onMediaRequest: noop
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Hello Bob (fixed)',
    timestamp: new Date('2025-01-15T14:30:00'),
    sent: true,
    editedAt: new Date('2025-01-15T14:31:00'),
    onRequestActions: noop
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'typo fixed moments later',
    timestamp: new Date('2025-01-15T14:30:00'),
    sent: true,
    editedAt: new Date('2025-01-15T14:30:20'),
    onRequestActions: noop
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'fixed it a few hours on',
    timestamp: new Date('2025-01-15T14:30:00'),
    sent: true,
    editedAt: new Date('2025-01-15T19:30:00'),
    onRequestActions: noop
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'rewriting history',
    timestamp: new Date('2025-01-15T14:30:00'),
    sent: true,
    editedAt: new Date('2025-02-05T09:00:00'),
    onRequestActions: noop
  }
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    text: '',
    timestamp: new Date('2025-01-15T14:30:00'),
    sent: true,
    deleted: true
  }
}`,...f.parameters?.docs?.source}}};const q=["Sent","Received","NoTimestamp","LongMessage","MediaImage","MediaDownload","MediaCorrupt","MediaUnavailable","MediaLoading","Edited","EditedRecently","EditedHoursLater","EditedLongAfter","Deleted"];export{f as Deleted,c as Edited,g as EditedHoursLater,w as EditedLongAfter,u as EditedRecently,o as LongMessage,d as MediaCorrupt,m as MediaDownload,i as MediaImage,p as MediaLoading,l as MediaUnavailable,r as NoTimestamp,n as Received,s as Sent,q as __namedExportsOrder,k as default};
