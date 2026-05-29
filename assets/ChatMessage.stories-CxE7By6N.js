import{C as u}from"./ChatMessage-BTJQHXsf.js";import"./iframe-BKzLHnKf.js";import"./preload-helper-PPVm8Dsz.js";const w={title:"Chat/ChatMessage",component:u},n={args:{text:"Hey, how are you?",timestamp:new Date("2025-01-15T14:30:00"),sent:!0}},s={args:{text:"I'm doing great, thanks for asking!",timestamp:new Date("2025-01-15T14:31:00"),sent:!1}},r={args:{text:"Message with no timestamp",timestamp:new Date(0),sent:!1}},e={url:"media/01STORY/fixture",key:new Uint8Array(32),iv:new Uint8Array(12),name:"fixture.png",size:12345},a=p=>p,t=()=>{},o={args:{text:"Check out this photo",timestamp:new Date("2025-01-15T14:32:00"),sent:!1,media:e,mediaState:a({status:"network-error",blobUrl:null,mime:null}),onMediaRetry:t}},i={args:{text:"Here is a file",timestamp:new Date("2025-01-15T14:33:00"),sent:!0,media:{...e,name:"report.bin",size:98765},mediaState:a({status:"network-error",blobUrl:null,mime:null}),onMediaRetry:t}},m={args:{text:"",timestamp:new Date("2025-01-15T14:34:00"),sent:!1,media:e,mediaState:a({status:"corrupt",blobUrl:null,mime:null}),onMediaRetry:t}},l={args:{text:"missing.jpg",timestamp:new Date("2025-01-15T14:35:00"),sent:!1,media:e,mediaState:a({status:"unavailable",blobUrl:null,mime:null}),onMediaRetry:t}},d={args:{text:"loading.png",timestamp:new Date("2025-01-15T14:36:00"),sent:!1,media:e,mediaState:a({status:"loading",blobUrl:null,mime:null}),onMediaRetry:t}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    onMediaRetry: noop
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
    onMediaRetry: noop
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
    onMediaRetry: noop
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    onMediaRetry: noop
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    onMediaRetry: noop
  }
}`,...d.parameters?.docs?.source}}};const b=["Sent","Received","NoTimestamp","MediaImage","MediaDownload","MediaCorrupt","MediaUnavailable","MediaLoading"];export{m as MediaCorrupt,i as MediaDownload,o as MediaImage,d as MediaLoading,l as MediaUnavailable,r as NoTimestamp,s as Received,n as Sent,b as __namedExportsOrder,w as default};
