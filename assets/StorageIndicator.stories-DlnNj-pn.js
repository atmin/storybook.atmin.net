import{j as g}from"./iframe-C2Jnt6hb.js";import{f as l}from"./utils-BXTaqGe-.js";import"./preload-helper-PPVm8Dsz.js";function m({usage:e,loading:u}){if(u)return g.jsx("div",{className:"text-sm text-muted-foreground",children:"Loading storage usage…"});if(!e)return null;const d=e.used_bytes/e.quota_bytes>=.9;return g.jsxs("div",{"data-testid":"storage-indicator",className:d?"text-sm text-destructive":"text-sm text-muted-foreground",children:["Storage: ",l(e.used_bytes)," /"," ",l(e.quota_bytes)," (",e.blob_count," ",e.blob_count===1?"file":"files",")",d&&g.jsx("span",{className:"ml-2",children:"Approaching storage limit."})]})}m.__docgenInfo={description:"",methods:[],displayName:"StorageIndicator",props:{usage:{required:!0,tsType:{name:"union",raw:"StorageUsage | null",elements:[{name:"StorageUsage"},{name:"null"}]},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""}}};const i=1<<30,a=(e,u=12)=>({used_bytes:e,quota_bytes:i,blob_count:u,quota_blob_cap:1e3}),y={title:"Settings/StorageIndicator",component:m},s={args:{loading:!0,usage:null}},r={args:{loading:!1,usage:a(0,0)}},o={args:{loading:!1,usage:a(320*1024,1)}},t={args:{loading:!1,usage:a(320*1024*1024)}},n={args:{loading:!1,usage:a(Math.round(.95*i))}},c={args:{loading:!1,usage:a(i)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    usage: null
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    usage: usage(0, 0)
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    usage: usage(320 * 1024, 1)
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    usage: usage(320 * 1024 * 1024)
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    usage: usage(Math.round(0.95 * GIB))
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    usage: usage(GIB)
  }
}`,...c.parameters?.docs?.source}}};const S=["Loading","EmptyUsage","SubMegabyte","Typical","Warning","AtQuota"];export{c as AtQuota,r as EmptyUsage,s as Loading,o as SubMegabyte,t as Typical,n as Warning,S as __namedExportsOrder,y as default};
