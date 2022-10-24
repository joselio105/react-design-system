var D=Object.defineProperty;var i=(e,t)=>D(e,"name",{value:t,configurable:!0});import{r}from"./index.ad198ea3.js";import{a as _,$ as U}from"./index.module.ed858f6c.js";import{r as z}from"./index.d2a971f1.js";import{j as p,F as g,a as B}from"./jsx-runtime.c9f9d2f2.js";import{I as W,r as F}from"./IconBase.esm.ad67a451.js";import{T as q}from"./Text.c38516a8.js";import"./iframe.db7e979b.js";import"./clsx.m.256e9345.js";function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},N.apply(this,arguments)}i(N,"_extends$1");function K(e,t=[]){let n=[];function o(c,f){const u=r.exports.createContext(f),d=n.length;n=[...n,f];function a(l){const{scope:h,children:b,...x}=l,y=(h==null?void 0:h[e][d])||u,$=r.exports.useMemo(()=>x,Object.values(x));return r.exports.createElement(y.Provider,{value:$},b)}i(a,"Provider");function m(l,h){const b=(h==null?void 0:h[e][d])||u,x=r.exports.useContext(b);if(x)return x;if(f!==void 0)return f;throw new Error(`\`${l}\` must be used within \`${c}\``)}return i(m,"useContext"),a.displayName=c+"Provider",[a,m]}i(o,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const s=i(()=>{const c=n.map(f=>r.exports.createContext(f));return i(function(u){const d=(u==null?void 0:u[e])||c;return r.exports.useMemo(()=>({[`__scope${e}`]:{...u,[e]:d}}),[u,d])},"useScope")},"createScope");return s.scopeName=e,[o,X(s,...t)]}i(K,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function X(...e){const t=e[0];if(e.length===1)return t;const n=i(()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return i(function(c){const f=o.reduce((u,{useScope:d,scopeName:a})=>{const l=d(c)[`__scope${a}`];return{...u,...l}},{});return r.exports.useMemo(()=>({[`__scope${t.scopeName}`]:f}),[f])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}i(X,"$c512c27ab02ef895$var$composeContextScopes");function A(e,t,{checkForDefaultPrevented:n=!0}={}){return i(function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)},"handleEvent")}i(A,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function w(e){const t=r.exports.useRef(e);return r.exports.useEffect(()=>{t.current=e}),r.exports.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}i(w,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function H({prop:e,defaultProp:t,onChange:n=i(()=>{},"onChange")}){const[o,s]=Z({defaultProp:t,onChange:n}),c=e!==void 0,f=c?e:o,u=w(n),d=r.exports.useCallback(a=>{if(c){const l=typeof a=="function"?a(e):a;l!==e&&u(l)}else s(a)},[c,e,s,u]);return[f,d]}i(H,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Z({defaultProp:e,onChange:t}){const n=r.exports.useState(e),[o]=n,s=r.exports.useRef(o),c=w(t);return r.exports.useEffect(()=>{s.current!==o&&(c(o),s.current=o)},[o,s,c]),n}i(Z,"$71cd76cc60e0454e$var$useUncontrolledState");function G(e){const t=r.exports.useRef({value:e,previous:e});return r.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}i(G,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const S=Boolean(globalThis==null?void 0:globalThis.document)?r.exports.useLayoutEffect:()=>{};function J(e){const[t,n]=r.exports.useState(void 0);return S(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let f,u;if("borderBoxSize"in c){const d=c.borderBoxSize,a=Array.isArray(d)?d[0]:d;f=a.inlineSize,u=a.blockSize}else f=e.offsetWidth,u=e.offsetHeight;n({width:f,height:u})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}i(J,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function Q(e,t){return r.exports.useReducer((n,o)=>{const s=t[n][o];return s!=null?s:n},e)}i(Q,"$fe963b355347cc68$export$3e6543de14f8614f");const M=i(e=>{const{present:t,children:n}=e,o=Y(t),s=typeof n=="function"?n({present:o.isPresent}):r.exports.Children.only(n),c=_(o.ref,s.ref);return typeof n=="function"||o.isPresent?r.exports.cloneElement(s,{ref:c}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");M.displayName="Presence";function Y(e){const[t,n]=r.exports.useState(),o=r.exports.useRef({}),s=r.exports.useRef(e),c=r.exports.useRef("none"),f=e?"mounted":"unmounted",[u,d]=Q(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.exports.useEffect(()=>{const a=P(o.current);c.current=u==="mounted"?a:"none"},[u]),S(()=>{const a=o.current,m=s.current;if(m!==e){const h=c.current,b=P(a);e?d("MOUNT"):b==="none"||(a==null?void 0:a.display)==="none"?d("UNMOUNT"):d(m&&h!==b?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,d]),S(()=>{if(t){const a=i(l=>{const b=P(o.current).includes(l.animationName);l.target===t&&b&&z.exports.flushSync(()=>d("ANIMATION_END"))},"handleAnimationEnd"),m=i(l=>{l.target===t&&(c.current=P(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",a),t.addEventListener("animationend",a),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",a),t.removeEventListener("animationend",a)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:r.exports.useCallback(a=>{a&&(o.current=getComputedStyle(a)),n(a)},[])}}i(Y,"$921a889cee6df7e8$var$usePresence");function P(e){return(e==null?void 0:e.animationName)||"none"}i(P,"$921a889cee6df7e8$var$getAnimationName");function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},E.apply(this,arguments)}i(E,"_extends");const V=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],R=V.reduce((e,t)=>{const n=r.exports.forwardRef((o,s)=>{const{asChild:c,...f}=o,u=c?U:t;return r.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.exports.createElement(u,E({},f,{ref:s}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),L="Checkbox",[ee,Ce]=K(L),[te,ne]=ee(L),oe=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:o,checked:s,defaultChecked:c,required:f,disabled:u,value:d="on",onCheckedChange:a,...m}=e,[l,h]=r.exports.useState(null),b=_(t,v=>h(v)),x=r.exports.useRef(!1),y=l?Boolean(l.closest("form")):!0,[$=!1,j]=H({prop:s,defaultProp:c,onChange:a});return r.exports.createElement(te,{scope:n,state:$,disabled:u},r.exports.createElement(R.button,N({type:"button",role:"checkbox","aria-checked":k($)?"mixed":$,"aria-required":f,"data-state":T($),"data-disabled":u?"":void 0,disabled:u,value:d},m,{ref:b,onKeyDown:A(e.onKeyDown,v=>{v.key==="Enter"&&v.preventDefault()}),onClick:A(e.onClick,v=>{j(O=>k(O)?!0:!O),y&&(x.current=v.isPropagationStopped(),x.current||v.stopPropagation())})})),y&&r.exports.createElement(ce,{control:l,bubbles:!x.current,name:o,value:d,checked:$,required:f,disabled:u,style:{transform:"translateX(-100%)"}}))}),re="CheckboxIndicator",se=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:o,...s}=e,c=ne(re,n);return r.exports.createElement(M,{present:o||k(c.state)||c.state===!0},r.exports.createElement(R.span,N({"data-state":T(c.state),"data-disabled":c.disabled?"":void 0},s,{ref:t,style:{pointerEvents:"none",...e.style}})))}),ce=i(e=>{const{control:t,checked:n,bubbles:o=!0,...s}=e,c=r.exports.useRef(null),f=G(n),u=J(t);return r.exports.useEffect(()=>{const d=c.current,a=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(a,"checked").set;if(f!==n&&l){const h=new Event("click",{bubbles:o});d.indeterminate=k(n),l.call(d,k(n)?!1:n),d.dispatchEvent(h)}},[f,n,o]),r.exports.createElement("input",N({type:"checkbox","aria-hidden":!0,defaultChecked:k(n)?!1:n},s,{tabIndex:-1,ref:c,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function k(e){return e==="indeterminate"}i(k,"$e698a72e93240346$var$isIndeterminate");function T(e){return k(e)?"indeterminate":e?"checked":"unchecked"}i(T,"$e698a72e93240346$var$getState");const ae=oe,ie=se;var C=new Map;C.set("bold",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});C.set("duotone",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});C.set("fill",function(){return p(g,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});C.set("light",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});C.set("thin",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});C.set("regular",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var ue=i(function(t,n){return F(t,n,C)},"renderPath"),I=r.exports.forwardRef(function(e,t){return p(W,{...Object.assign({ref:t},e,{renderPath:ue})})});I.displayName="Check";const de=I,fe=i(()=>p(ae,{className:"h-6 w-6 p-[2px] bg-gray-800 rounded",children:p(ie,{asChild:!0,children:p(de,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})}),"Checkbox"),ge={title:"Components/Checkbox",component:fe,decorators:[e=>B("div",{className:"flex items-center gap-2",children:[e(),p(q,{size:"sm",children:"Lembrar-me de mim por 30 dias"})]})]},Ne={},ye=["Default"];export{Ne as Default,ye as __namedExportsOrder,ge as default};
//# sourceMappingURL=Checkbox.stories.1f9aae81.js.map
