(()=>{"use strict";var e,t={276:()=>{const e=window.wp.blocks,t=window.wp.i18n,r=JSON.parse('{"u2":"automattic/chatrix","TN":"Chatrix","W3":"embed","Y4":{"instanceId":{"type":"string","default":""},"defaultHomeserver":{"type":"string","default":""},"roomId":{"type":"string","default":""},"height":{"type":"object","default":{"value":600,"unit":"px"}},"borderWidth":{"type":"object","default":{"value":1,"unit":"px"}},"borderRadius":{"type":"object","default":{"value":10,"unit":"px"}},"borderStyle":{"type":"string","default":"solid"},"borderColor":{"type":"string","default":"black"}}}'),n=window.wp.element,l=window.wp.blockEditor,o=window.wp.components,a=window.wp.compose;class i{constructor(e,t){this.url=e;for(let e in t){let r=t[e];"boolean"==typeof r&&(r=r?"true":"false"),r&&this.url.searchParams.append(e,r)}this.applyLoginToken()}toString(){return this.url.toString()}applyLoginToken(){const e="loginToken",t=new URLSearchParams(window.location.search);var r;t.has(e)&&this.url.searchParams.append(e,null!==(r=t.get(e))&&void 0!==r?r:"")}}function u(e){const{focusable:t,iframeUrl:r,instanceId:l,defaultHomeserver:o,roomId:u,enableServiceWorker:s}=e,c=t?(0,a.useFocusableIframe)():void 0,d=new i(r,{instanceId:l,defaultHomeserver:o,roomId:u,enableServiceWorker:s});return(0,n.createElement)("div",{className:"chatrix-component-chat"},(0,n.createElement)("iframe",{ref:c,src:d.toString()}))}function s(e){const{focusable:t,iframeUrl:r}=e,{instanceId:l,defaultHomeserver:o,roomId:a,enableServiceWorker:i,height:s,borderWidth:c,borderRadius:d,borderStyle:h,borderColor:m}=e.attributes,b={height:s?s.toString():"",borderWidth:c?c.toString():0,borderRadius:d?d.toString():"",borderStyle:null!=h?h:"",borderColor:null!=m?m:""},v={focusable:t,iframeUrl:r,instanceId:l,defaultHomeserver:o,roomId:a,enableServiceWorker:i};return(0,n.createElement)("div",{className:"chatrix-component-block",style:b},(0,n.createElement)(u,v))}let c;!function(e){e.px="px",e["%"]="%",e.vh="vh",e.vw="vw",e.vmax="vmax",e.vmin="vmin",e.em="em",e.rem="rem"}(c||(c={}));class d{constructor(e,t){this.value="string"==typeof e?+e:e,this.unit="string"==typeof t?c[t]:t}toString(){return this.value&&this.unit?`${this.value}${this.unit}`:""}}class h extends d{constructor(e,t){super(e,t)}}class m extends d{constructor(e,t){super(e,t)}toString(){return this.value&&this.unit?`${this.value}${this.unit}`:"0"}}class b extends d{constructor(e,t){super(e,t)}}function v(){var e;let t=window.origin;const r=null!==(e=window.ChatrixConfig)&&void 0!==e?e:null;return r&&r.rootUrl&&(t=r.rootUrl),new URL("iframe.html",t)}function p(e){let{attributes:r,setAttributes:l}=e;return(0,n.createElement)(o.PanelBody,{title:(0,t.__)("Homeserver","chatrix"),initialOpen:!0},(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(o.TextControl,{label:(0,t.__)("Default Homeserver","chatrix"),value:r.defaultHomeserver,onChange:e=>l({defaultHomeserver:e})})))}function f(e){let{attributes:r,setAttributes:l}=e;return(0,n.createElement)(o.PanelBody,{title:(0,t.__)("Room","chatrix"),initialOpen:!1},(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(o.TextControl,{label:(0,t.__)("Room id or alias (optional)","chatrix"),value:r.roomId,onChange:e=>l({roomId:e}),help:(0,n.createElement)(g,null)})))}function g(){return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",null,(0,t.__)("When a room id or room alias is specified, the client will be in single-room mode.","chatrix")),(0,n.createElement)("br",null),(0,n.createElement)("br",null),(0,n.createElement)("span",null,(0,t.__)("In this mode, the client opens directly in that room, with the user not having access to the screen that shows the list of rooms.","chatrix")),(0,n.createElement)("br",null),(0,n.createElement)("br",null),(0,n.createElement)("span",null,(0,t.__)("The room must be public, so that the user can join without requiring an invitation.","chatrix")),(0,n.createElement)("br",null),(0,n.createElement)("br",null),(0,n.createElement)("span",null,(0,t.__)("Example: #foo:example.com","chatrix")),(0,n.createElement)("br",null))}const E=(0,n.forwardRef)((function(e,t){const r=`inspector-text-control-${(0,a.useInstanceId)(E)}`,[l,i]=(0,n.useState)({value:e.value,unit:e.unit});return e!==l&&i(e),(0,n.createElement)("div",{className:"chatrix-text-control-with-unit"},(0,n.createElement)(o.BaseControl,{label:e.label,id:r,help:e.help},(0,n.createElement)("span",null,(0,n.createElement)("input",{className:"components-text-control__input",type:"text",id:r,value:l.value,onChange:t=>{const r=+t.target.value;i({...l,value:r}),e.onChange(r,l.unit)},"aria-describedby":e.help?r+"__help":void 0,ref:t}),(0,n.createElement)("select",{value:l.unit,onChange:t=>{const r=t.target.value;i({...l,unit:r}),e.onChange(l.value,r)}},e.units.map((e=>(0,n.createElement)("option",{value:e,key:e},e)))))))})),x=E;function w(e){let{attributes:r,setAttributes:l}=e;return(0,n.createElement)(o.PanelBody,{title:(0,t.__)("Style","chatrix"),initialOpen:!1},(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(x,{label:(0,t.__)("height","chatrix"),value:r.height.value,unit:r.height.unit,units:[c.px,c["%"],c.vh,c.vw,c.vmax,c.vmin],onChange:(e,t)=>{l({height:{value:e,unit:t}})}})),(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(x,{label:(0,t.__)("border width","chatrix"),value:r.borderWidth.value,unit:r.borderWidth.unit,units:[c.px,c.em,c.rem],onChange:(e,t)=>{l({borderWidth:{value:e,unit:t}})}})),(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(o.TextControl,{label:(0,t.__)("border style","chatrix"),value:r.borderStyle,onChange:e=>{l({borderStyle:e})}})),(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(o.TextControl,{label:(0,t.__)("border color","chatrix"),value:r.borderColor,onChange:e=>{l({borderColor:e})}})),(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(x,{label:(0,t.__)("border radius","chatrix"),value:r.borderRadius.value,unit:r.borderRadius.unit,units:[c.px,c.em,c.rem],onChange:(e,t)=>{l({borderRadius:{value:e,unit:t}})}})))}function y(e){let{attributes:t,setAttributes:r}=e;return(0,n.createElement)(l.InspectorControls,null,(0,n.createElement)("div",{className:"chatrix-inspector-controls"},(0,n.createElement)(p,{attributes:t,setAttributes:r}),(0,n.createElement)(f,{attributes:t,setAttributes:r}),(0,n.createElement)(w,{attributes:t,setAttributes:r})))}let _=[];const C=r.u2,S={title:r.TN,description:(0,t.__)("Matrix client","chatrix"),category:r.W3,attributes:r.Y4,edit:function(e){const{attributes:t,setAttributes:r}=e;(0,n.useEffect)((()=>{let{instanceId:e}=t;const n=e&&""!==e,l=n&&_.includes(e);n&&!l||(e=Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(),r({instanceId:e})),_.push(e)}),[]);const a=function(e){const{instanceId:t,defaultHomeserver:r,roomId:n,enableServiceWorker:l,height:o,borderWidth:a,borderRadius:i,borderStyle:u,borderColor:s}=e;return{instanceId:t,defaultHomeserver:null!=r?r:"",roomId:null!=n?n:"",enableServiceWorker:null==l||l,height:o?new h(o.value,o.unit):void 0,borderWidth:a?new m(a.value,a.unit):void 0,borderRadius:i?new b(i.value,i.unit):void 0,borderStyle:u,borderColor:s}}(t),i={focusable:!0,attributes:a,iframeUrl:v()};return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(y,{attributes:t,setAttributes:r}),(0,n.createElement)(o.ResizableBox,{size:{width:"100%",height:a.height?a.height.toString():"600px"},enable:{top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},onResizeStop:(e,t,n)=>{r({height:{value:n.clientHeight,unit:"px"}})}},(0,n.createElement)("div",(0,l.useBlockProps)(),(0,n.createElement)(s,i))))}};(0,e.registerBlockType)(C,S)}},r={};function n(e){var l=r[e];if(void 0!==l)return l.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,l,o)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){for(var[r,l,o]=e[c],i=!0,u=0;u<r.length;u++)(!1&o||a>=o)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(i=!1,o<a&&(a=o));if(i){e.splice(c--,1);var s=l();void 0!==s&&(t=s)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,l,o]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var l,o,[a,i,u]=r,s=0;if(a.some((t=>0!==e[t]))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(u)var c=u(n)}for(t&&t(r);s<a.length;s++)o=a[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=globalThis.webpackChunkchatrix=globalThis.webpackChunkchatrix||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=n.O(void 0,[431],(()=>n(276)));l=n.O(l)})();