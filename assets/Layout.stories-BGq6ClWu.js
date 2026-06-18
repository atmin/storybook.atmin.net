import{j as e}from"./iframe-BDa6lOl2.js";import{L as n}from"./Layout-BhYanVrC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BXTaqGe-.js";const p={title:"Shell/Layout",component:n},a=()=>e.jsxs("div",{className:"flex w-full items-center justify-between",children:[e.jsx("span",{className:"font-mono font-bold",children:"atmin"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Settings"})]}),s=()=>e.jsx("div",{className:"mx-auto max-w-md p-8 font-mono text-sm",children:e.jsx("p",{className:"text-muted-foreground",children:"Page content goes here."})}),r={args:{topBar:e.jsx(a,{}),children:e.jsx(s,{})}},o={args:{children:e.jsx(s,{})}},t={args:{fullHeight:!0,topBar:e.jsx(a,{}),children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex-1 overflow-y-auto p-4 font-mono text-sm",children:e.jsx("p",{className:"text-muted-foreground",children:"Scrollable messages area"})}),e.jsx("div",{className:"border-t border-border bg-background px-4 py-3 font-mono text-sm text-muted-foreground",children:"Docked input bar"})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    topBar: <SampleTopBar />,
    children: <SampleContent />
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <SampleContent />
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    fullHeight: true,
    topBar: <SampleTopBar />,
    children: <>
                <div className="flex-1 overflow-y-auto p-4 font-mono text-sm">
                    <p className="text-muted-foreground">
                        Scrollable messages area
                    </p>
                </div>
                <div className="border-t border-border bg-background px-4 py-3 font-mono text-sm text-muted-foreground">
                    Docked input bar
                </div>
            </>
  }
}`,...t.parameters?.docs?.source}}};const i=["WithTopBar","NoTopBar","FullHeight"];export{t as FullHeight,o as NoTopBar,r as WithTopBar,i as __namedExportsOrder,p as default};
