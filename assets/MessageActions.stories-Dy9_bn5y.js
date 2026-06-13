import{j as o}from"./iframe-BLHCXzkA.js";import{M as c}from"./MessageActions-B9ExABRh.js";import"./preload-helper-PPVm8Dsz.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,l={title:"Chat/MessageActions",component:c,args:{onEdit:n(),onDelete:n()},decorators:[e=>o.jsx("div",{className:"group relative h-40 w-48 rounded bg-bubble-sent",children:o.jsx(e,{})})]},s={},a={args:{onEdit:void 0}},t={play:async({canvas:e,userEvent:r})=>{await r.click(e.getByTestId("message-actions-trigger")),await r.click(e.getByTestId("message-action-delete"))}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    onEdit: undefined
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId('message-actions-trigger'));
    await userEvent.click(canvas.getByTestId('message-action-delete'));
  }
}`,...t.parameters?.docs?.source}}};const g=["Editable","DeleteOnly","ConfirmingDelete"];export{t as ConfirmingDelete,a as DeleteOnly,s as Editable,g as __namedExportsOrder,l as default};
