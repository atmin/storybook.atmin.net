import{j as a,b as m,a as f,o as y}from"./iframe-BFqoCbj6.js";import{f as p}from"./utils-CRP4iD9C.js";import"./preload-helper-PPVm8Dsz.js";function b({usage:e,loading:g}){if(g)return a.jsx(m,{className:"text-sm opacity-60",children:"Loading storage usage…"});if(!e)return null;const l=e.quota_bytes>0?e.used_bytes/e.quota_bytes:0,d=l>=.9;return a.jsxs(a.Fragment,{children:[a.jsx(f,{children:"Storage"}),a.jsxs(m,{strong:!0,inset:!0,"data-testid":"storage-indicator",className:d?"text-red-500":"",children:[a.jsx(y,{progress:Math.min(l,1)}),a.jsxs("p",{className:"mt-2 text-sm",children:[p(e.used_bytes)," /"," ",p(e.quota_bytes)," (",e.blob_count," ",e.blob_count===1?"file":"files",")",d&&" — approaching storage limit."]})]})]})}b.__docgenInfo={description:"",methods:[],displayName:"StorageIndicator",props:{usage:{required:!0,tsType:{name:"union",raw:"StorageUsage | null",elements:[{name:"StorageUsage"},{name:"null"}]},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""}}};const u=1<<30,s=(e,g=12)=>({used_bytes:e,quota_bytes:u,blob_count:g,quota_blob_cap:1e3}),h={title:"Settings/StorageIndicator",component:b},r={args:{loading:!0,usage:null}},o={args:{loading:!1,usage:s(0,0)}},t={args:{loading:!1,usage:s(320*1024,1)}},n={args:{loading:!1,usage:s(320*1024*1024)}},c={args:{loading:!1,usage:s(Math.round(.95*u))}},i={args:{loading:!1,usage:s(u)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    usage: null
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    usage: usage(0, 0)
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    usage: usage(320 * 1024, 1)
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    usage: usage(320 * 1024 * 1024)
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    usage: usage(Math.round(0.95 * GIB))
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    usage: usage(GIB)
  }
}`,...i.parameters?.docs?.source}}};const j=["Loading","EmptyUsage","SubMegabyte","Typical","Warning","AtQuota"];export{i as AtQuota,o as EmptyUsage,r as Loading,t as SubMegabyte,n as Typical,c as Warning,j as __namedExportsOrder,h as default};
