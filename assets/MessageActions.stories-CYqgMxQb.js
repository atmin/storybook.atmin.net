import{M as o}from"./MessageActions-D8EE3r9L.js";import"./iframe-Dt0Bloec.js";import"./preload-helper-PPVm8Dsz.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,m={title:"Chat/MessageActions",component:o,parameters:{layout:"fullscreen"},args:{opened:!0,canEdit:!0,onEdit:t(),onDelete:t(),onClose:t()}},e={},a={args:{canEdit:!1}},s={play:async({canvas:r,userEvent:n})=>{await n.click(r.getByTestId("message-action-delete"))}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    canEdit: false
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId('message-action-delete'));
  }
}`,...s.parameters?.docs?.source}}};const d=["Editable","DeleteOnly","ConfirmingDelete"];export{s as ConfirmingDelete,a as DeleteOnly,e as Editable,d as __namedExportsOrder,m as default};
