import{j as c}from"./iframe-UB0dUQD7.js";import{P as m}from"./PasswordField-Dj2VCO5Y.js";import"./preload-helper-PPVm8Dsz.js";import"./PasswordInput-B6XWpKT2.js";import"./createLucideIcon-2QsMXZMy.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,u={title:"Forms/PasswordField",component:m,args:{onPasswordChange:n(),onConfirmChange:n()},decorators:[t=>c.jsx("div",{className:"max-w-md p-8",children:c.jsx(t,{})})]},r={args:{password:"",confirm:""}},s={args:{password:"correct-horse",confirm:""}},o={args:{password:"correct-horse",confirm:"correct-hoarse"}},e={args:{password:"correct-horse",confirm:"correct-horse"}},a={args:{password:"correct-horse",confirm:"correct-horse",disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    password: '',
    confirm: ''
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    password: 'correct-horse',
    confirm: ''
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    password: 'correct-horse',
    confirm: 'correct-hoarse'
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    password: 'correct-horse',
    confirm: 'correct-horse'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    password: 'correct-horse',
    confirm: 'correct-horse',
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};const f=["Empty","Typing","ConfirmMismatch","Matching","Disabled"];export{o as ConfirmMismatch,a as Disabled,r as Empty,e as Matching,s as Typing,f as __namedExportsOrder,u as default};
