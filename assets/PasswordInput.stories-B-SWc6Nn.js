import{j as o}from"./iframe-Dk40pMEE.js";import{P as c}from"./PasswordInput-BbxsZN6G.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BRrkO-wd.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,i={title:"Forms/PasswordInput",component:c,args:{id:"demo",onChange:n()},decorators:[t=>o.jsx("div",{className:"max-w-md p-8",children:o.jsx(t,{})})]},r={args:{value:"",placeholder:"Password"}},e={args:{value:"correct-horse-battery-staple"}},a={args:{value:"mismatch",ariaInvalid:!0}},s={args:{value:"correct-horse",disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: 'Password'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'correct-horse-battery-staple'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'mismatch',
    ariaInvalid: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'correct-horse',
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};const u=["Empty","Filled","Invalid","Disabled"];export{s as Disabled,r as Empty,e as Filled,a as Invalid,u as __namedExportsOrder,i as default};
