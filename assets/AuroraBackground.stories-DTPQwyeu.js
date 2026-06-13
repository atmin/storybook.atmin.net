import{r as m,j as d}from"./iframe-BLHCXzkA.js";import"./preload-helper-PPVm8Dsz.js";const B=`
attribute vec2 aPosition;
varying vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,x=`
precision mediump float;
varying vec2 vUv;

uniform vec3 uBgColor;
uniform vec3 uBlob1Color;
uniform vec3 uBlob2Color;
uniform float uBlobRadius;
uniform float uBlobRadiusSecondary;
uniform float uBlobStrength;
uniform float uTime;
uniform float uVelocityIntensity;
uniform float uNoiseStrength;
uniform float uAspect;

float random(vec2 st) {
  return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  vec2 uv = vUv;
  uv.x *= uAspect;

  // swap orbit axes in portrait so blobs spread vertically instead of horizontally
  float hAmp1 = uAspect >= 1.0 ? 0.28 : 0.22;
  float vAmp1 = uAspect >= 1.0 ? 0.22 : 0.28;
  float hAmp2 = uAspect >= 1.0 ? 0.30 : 0.25;
  float vAmp2 = uAspect >= 1.0 ? 0.25 : 0.30;

  vec2 blob1Center = vec2(
    uAspect * (0.5 + hAmp1 * sin(uTime * 0.41)),
    0.5 + vAmp1 * cos(uTime * 0.31)
  );
  vec2 blob2Center = vec2(
    uAspect * (0.5 + hAmp2 * cos(uTime * 0.37)),
    0.5 + vAmp2 * sin(uTime * 0.53)
  );

  vec3 color = uBgColor;

  float blob1 = smoothstep(uBlobRadius, 0.0, distance(uv, blob1Center));
  float blob2 = smoothstep(uBlobRadiusSecondary, 0.0, distance(uv, blob2Center));

  vec3 blob1SoftColor = mix(uBlob1Color, uBgColor, 0.35);
  vec3 blob2SoftColor = mix(uBlob2Color, uBgColor, 0.35);
  color = mix(color, blob1SoftColor, blob1 * uBlobStrength);
  color = mix(color, blob2SoftColor, blob2 * uBlobStrength);

  color += uVelocityIntensity;

  float grain = random(vUv * vec2(1387.13, 947.91)) - 0.5;
  color += grain * uNoiseStrength;

  gl_FragColor = vec4(color, 1.0);
}
`;function y(e){const t=e.replace("#","");return[parseInt(t.substring(0,2),16)/255,parseInt(t.substring(2,4),16)/255,parseInt(t.substring(4,6),16)/255]}function R(e,t,a){const n=e.createShader(t);return e.shaderSource(n,a),e.compileShader(n),n}function S(e,t,a){const{gl:n,uniforms:o}=e;if(!n)return;const r=a.width/a.height,l=Math.max(r,1);n.uniform3fv(o.uBgColor,y(t.bgColor)),n.uniform3fv(o.uBlob1Color,y(t.blob1Color)),n.uniform3fv(o.uBlob2Color,y(t.blob2Color)),n.uniform1f(o.uBlobRadius,t.blobRadius*l),n.uniform1f(o.uBlobRadiusSecondary,t.blobRadiusSecondary*l),n.uniform1f(o.uBlobStrength,t.blobStrength),n.uniform1f(o.uTime,e.time),n.uniform1f(o.uVelocityIntensity,Math.min(e.velocity,1)*t.velocityStrength),n.uniform1f(o.uNoiseStrength,t.noiseStrength),n.uniform1f(o.uAspect,r),n.drawArrays(n.TRIANGLE_STRIP,0,4)}function w(e,t,a){e.running=!0;const n=()=>{const o=t();e.velocity*=o.velocityDecay,S(e,o,a),e.velocity>.001?e.rafId=requestAnimationFrame(n):(e.velocity=0,e.running=!1)};e.rafId=requestAnimationFrame(n)}function E(e){const t=m.useRef(null),a=m.useRef({gl:null,uniforms:{},time:0,velocity:0,rafId:0,running:!1}),n=m.useRef(e);return n.current=e,m.useEffect(()=>{const o=t.current,r=o.getContext("webgl");if(!r)return;const l=a.current,s=r.createProgram();r.attachShader(s,R(r,r.VERTEX_SHADER,B)),r.attachShader(s,R(r,r.FRAGMENT_SHADER,x)),r.linkProgram(s),r.useProgram(s);const f=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,f),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),r.STATIC_DRAW);const i=r.getAttribLocation(s,"aPosition");r.enableVertexAttribArray(i),r.vertexAttribPointer(i,2,r.FLOAT,!1,0,0),l.gl=r,l.uniforms=Object.fromEntries(["uBgColor","uBlob1Color","uBlob2Color","uBlobRadius","uBlobRadiusSecondary","uBlobStrength","uTime","uVelocityIntensity","uNoiseStrength","uAspect"].map(b=>[b,r.getUniformLocation(s,b)]));const u=()=>{o.width=o.offsetWidth*devicePixelRatio,o.height=o.offsetHeight*devicePixelRatio,r.viewport(0,0,o.width,o.height),S(l,n.current,o)};u();const c=new ResizeObserver(u);return c.observe(o),()=>{c.disconnect(),cancelAnimationFrame(l.rafId),l.running=!1,r.deleteProgram(s)}},[]),m.useEffect(()=>{const o=t.current;o&&S(a.current,n.current,o)},[e.bgColor,e.blob1Color,e.blob2Color,e.blobRadius,e.blobRadiusSecondary,e.blobStrength,e.noiseStrength,e.velocityStrength]),m.useEffect(()=>{const o=a.current,r=t.current;let l=window.scrollY,s=performance.now();const f=c=>{const b=performance.now(),A=Math.max(b-s,1);s=b,o.velocity=Math.abs(c)/A,o.time+=c/n.current.scrollScale,o.running||w(o,()=>n.current,r)},i=()=>{const c=window.scrollY-l;l=window.scrollY,f(c)},u=c=>f(c.deltaY);return window.addEventListener("scroll",i,{passive:!0}),r.addEventListener("wheel",u,{passive:!0}),()=>{window.removeEventListener("scroll",i),r.removeEventListener("wheel",u)}},[]),t}function g({bgColor:e="#1a1a2e",blob1Color:t="#e94560",blob2Color:a="#0f3460",blobRadius:n=.6,blobRadiusSecondary:o=.6,blobStrength:r=.5,noiseStrength:l=.06,scrollScale:s=800,velocityStrength:f=.03,velocityDecay:i=.94,children:u,className:c}){const b=E({bgColor:e,blob1Color:t,blob2Color:a,blobRadius:n,blobRadiusSecondary:o,blobStrength:r,noiseStrength:l,scrollScale:s,velocityStrength:f,velocityDecay:i});return d.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},className:c,children:[d.jsx("canvas",{ref:b,style:{position:"fixed",inset:0,width:"100%",height:"100%",zIndex:-1,display:"block"}}),u]})}g.__docgenInfo={description:"",methods:[],displayName:"AuroraBackground",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},bgColor:{defaultValue:{value:"'#1a1a2e'",computed:!1},required:!1},blob1Color:{defaultValue:{value:"'#e94560'",computed:!1},required:!1},blob2Color:{defaultValue:{value:"'#0f3460'",computed:!1},required:!1},blobRadius:{defaultValue:{value:"0.6",computed:!1},required:!1},blobRadiusSecondary:{defaultValue:{value:"0.6",computed:!1},required:!1},blobStrength:{defaultValue:{value:"0.5",computed:!1},required:!1},noiseStrength:{defaultValue:{value:"0.06",computed:!1},required:!1},scrollScale:{defaultValue:{value:"800",computed:!1},required:!1},velocityStrength:{defaultValue:{value:"0.03",computed:!1},required:!1},velocityDecay:{defaultValue:{value:"0.94",computed:!1},required:!1}},composes:["AuroraUniforms"]};const I={title:"Components/AuroraBackground",component:g,parameters:{layout:"fullscreen",docs:{description:{component:"Scroll (or wheel over the canvas) to animate the blobs."}}},argTypes:{bgColor:{control:"color"},blob1Color:{control:"color"},blob2Color:{control:"color"},blobRadius:{control:{type:"range",min:.05,max:1.5,step:.01}},blobRadiusSecondary:{control:{type:"range",min:.05,max:1.5,step:.01}},blobStrength:{control:{type:"range",min:0,max:1,step:.01}},noiseStrength:{control:{type:"range",min:0,max:.2,step:.005}},scrollScale:{control:{type:"range",min:100,max:3e3,step:50}},velocityStrength:{control:{type:"range",min:0,max:.2,step:.005}},velocityDecay:{control:{type:"range",min:.5,max:.99,step:.01}}}},T=Array.from({length:1e3},(e,t)=>t+1),C=e=>d.jsx("ul",{style:{position:"relative",zIndex:1,margin:0,padding:"16px 24px",listStyle:"none",fontFamily:"monospace",fontSize:13,color:e},children:T.map(t=>d.jsxs("li",{style:{padding:"4px 0",opacity:.5},children:["item ",t]},t))}),v={args:{bgColor:"#1a1a2e",blob1Color:"#e94560",blob2Color:"#0f3460",blobRadius:.6,blobRadiusSecondary:.6,blobStrength:.5,noiseStrength:.06,scrollScale:800,velocityStrength:.03,velocityDecay:.94},render:e=>d.jsx(g,{...e,children:C("rgba(255,255,255,0.9)")})},h={args:{bgColor:"#f0ede8",blob1Color:"#c0392b",blob2Color:"#2471a3",blobRadius:.6,blobRadiusSecondary:.6,blobStrength:.5,noiseStrength:.06,scrollScale:800,velocityStrength:.03,velocityDecay:.94},render:e=>d.jsx(g,{...e,children:C("rgba(0,0,0,0.75)")})},p={args:{bgColor:"#0d1117",blob1Color:"#58a6ff",blob2Color:"#3fb950",blobRadius:.6,blobRadiusSecondary:.6,blobStrength:.5,noiseStrength:.06,scrollScale:600,velocityStrength:.03,velocityDecay:.94},render:e=>d.jsx(g,{...e,children:C("rgba(255,255,255,0.9)")})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    bgColor: '#1a1a2e',
    blob1Color: '#e94560',
    blob2Color: '#0f3460',
    blobRadius: 0.6,
    blobRadiusSecondary: 0.6,
    blobStrength: 0.5,
    noiseStrength: 0.06,
    scrollScale: 800,
    velocityStrength: 0.03,
    velocityDecay: 0.94
  },
  render: args => <AuroraBackground {...args}>
            {scrollableContent('rgba(255,255,255,0.9)')}
        </AuroraBackground>
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    bgColor: '#f0ede8',
    blob1Color: '#c0392b',
    blob2Color: '#2471a3',
    blobRadius: 0.6,
    blobRadiusSecondary: 0.6,
    blobStrength: 0.5,
    noiseStrength: 0.06,
    scrollScale: 800,
    velocityStrength: 0.03,
    velocityDecay: 0.94
  },
  render: args => <AuroraBackground {...args}>
            {scrollableContent('rgba(0,0,0,0.75)')}
        </AuroraBackground>
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    bgColor: '#0d1117',
    blob1Color: '#58a6ff',
    blob2Color: '#3fb950',
    blobRadius: 0.6,
    blobRadiusSecondary: 0.6,
    blobStrength: 0.5,
    noiseStrength: 0.06,
    scrollScale: 600,
    velocityStrength: 0.03,
    velocityDecay: 0.94
  },
  render: args => <AuroraBackground {...args}>
            {scrollableContent('rgba(255,255,255,0.9)')}
        </AuroraBackground>
}`,...p.parameters?.docs?.source}}};const D=["Dark","Light","CoolMist"];export{p as CoolMist,v as Dark,h as Light,D as __namedExportsOrder,I as default};
