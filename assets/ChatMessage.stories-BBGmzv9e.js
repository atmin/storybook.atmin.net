import{C as f}from"./ChatMessage-VOgDIldM.js";import"./iframe-Dl2q8Ffc.js";import"./preload-helper-PPVm8Dsz.js";import"./MediaAttachment-B24l1WVE.js";import"./createLucideIcon-C51JCz3H.js";const R={title:"Chat/ChatMessage",component:f},n={args:{text:"Hey, how are you?",timestamp:new Date("2025-01-15T14:30:00"),sent:!0}},s={args:{text:"I'm doing great, thanks for asking!",timestamp:new Date("2025-01-15T14:31:00"),sent:!1}},r={args:{text:"Message with no timestamp",timestamp:new Date(0),sent:!1}},t={url:"media/01STORY/fixture",key:new Uint8Array(32),iv:new Uint8Array(12),name:"fixture.png",size:12345},a=D=>D,e=()=>{},o={args:{text:"Check out this photo",timestamp:new Date("2025-01-15T14:32:00"),sent:!1,media:t,mediaState:a({status:"network-error",blobUrl:null,mime:null}),onMediaRequest:e}},i={args:{text:"Here is a file",timestamp:new Date("2025-01-15T14:33:00"),sent:!0,media:{...t,name:"report.bin",size:98765},mediaState:a({status:"network-error",blobUrl:null,mime:null}),onMediaRequest:e}},m={args:{text:"",timestamp:new Date("2025-01-15T14:34:00"),sent:!1,media:t,mediaState:a({status:"corrupt",blobUrl:null,mime:null}),onMediaRequest:e}},d={args:{text:"missing.jpg",timestamp:new Date("2025-01-15T14:35:00"),sent:!1,media:t,mediaState:a({status:"unavailable",blobUrl:null,mime:null}),onMediaRequest:e}},u={args:{text:"loading.png",timestamp:new Date("2025-01-15T14:36:00"),sent:!1,media:t,mediaState:a({status:"loading",blobUrl:null,mime:null}),onMediaRequest:e}},l={args:{text:"Hello Bob (fixed)",timestamp:new Date("2025-01-15T14:30:00"),sent:!0,editedAt:new Date("2025-01-15T14:31:00"),onRequestActions:e}},p={args:{text:"typo fixed moments later",timestamp:new Date("2025-01-15T14:30:00"),sent:!0,editedAt:new Date("2025-01-15T14:30:20"),onRequestActions:e}},c={args:{text:"fixed it a few hours on",timestamp:new Date("2025-01-15T14:30:00"),sent:!0,editedAt:new Date("2025-01-15T19:30:00"),onRequestActions:e}},g={args:{text:"rewriting history",timestamp:new Date("2025-01-15T14:30:00"),sent:!0,editedAt:new Date("2025-02-05T09:00:00"),onRequestActions:e}},w={args:{text:"",timestamp:new Date("2025-01-15T14:30:00"),sent:!0,deleted:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Hey, how are you?',
    timestamp: new Date('2025-01-15T14:30:00'),
    sent: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: "I'm doing great, thanks for asking!",
    timestamp: new Date('2025-01-15T14:31:00'),
    sent: false
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Message with no timestamp',
    timestamp: new Date(0),
    sent: false
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Hello Bob (fixed)',
    timestamp: new Date('2025-01-15T14:30:00'),
    sent: true,
    editedAt: new Date('2025-01-15T14:31:00'),
    onRequestActions: noop
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'typo fixed moments later',
    timestamp: new Date('2025-01-15T14:30:00'),
    sent: true,
    editedAt: new Date('2025-01-15T14:30:20'),
    onRequestActions: noop
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'fixed it a few hours on',
    timestamp: new Date('2025-01-15T14:30:00'),
    sent: true,
    editedAt: new Date('2025-01-15T19:30:00'),
    onRequestActions: noop
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'rewriting history',
    timestamp: new Date('2025-01-15T14:30:00'),
    sent: true,
    editedAt: new Date('2025-02-05T09:00:00'),
    onRequestActions: noop
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    text: '',
    timestamp: new Date('2025-01-15T14:30:00'),
    sent: true,
    deleted: true
  }
}`,...w.parameters?.docs?.source}}};const A=["Sent","Received","NoTimestamp","MediaImage","MediaDownload","MediaCorrupt","MediaUnavailable","MediaLoading","Edited","EditedRecently","EditedHoursLater","EditedLongAfter","Deleted"];export{w as Deleted,l as Edited,c as EditedHoursLater,g as EditedLongAfter,p as EditedRecently,m as MediaCorrupt,i as MediaDownload,o as MediaImage,u as MediaLoading,d as MediaUnavailable,r as NoTimestamp,s as Received,n as Sent,A as __namedExportsOrder,R as default};
