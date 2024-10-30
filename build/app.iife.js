(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode(`.chatrix-component-chat{width:100%;height:100%;border-radius:inherit}.chatrix-component-chat iframe{width:100%;height:100%;border:0;border-radius:inherit}.chatrix-component-popup{position:fixed;right:20px;bottom:15px}.chatrix-component-popup-start-button>button{width:64px;height:64px;border:none;border-radius:100%;cursor:pointer;box-shadow:0 1px 3px #0000001a,0 12px 32px -2px #0003;background:no-repeat center url('data:image/svg+xml;utf8,<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.94152 8.54592C0.629834 6.77827 1.81013 5.09263 3.57779 4.78094L30.1676 0.0924402C31.9346 -0.219139 33.6205 0.958905 33.9323 2.72716L37.5792 23.4097C37.8909 25.1773 36.7106 26.863 34.9429 27.1747L14.4261 30.7923C14.1597 30.8393 13.9158 30.9714 13.7309 31.1688L8.03376 37.2505C7.32955 38.0022 6.06936 37.6273 5.89049 36.6129L0.94152 8.54592ZM20.5047 23.0349C23.8143 22.4513 26.3772 20.1489 27.4756 17.2195C27.7229 16.5597 27.1289 15.9435 26.435 16.0659L12.5485 18.5144C11.8547 18.6368 11.5072 19.419 11.9653 19.9543C13.9993 22.3314 17.1951 23.6184 20.5047 23.0349Z" fill="white"/></svg>'),linear-gradient(180deg,#048bcf 0%,#007cba 100%)}.chatrix-component-popup-start-button>button.active{background:no-repeat center url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.56066 8.04481C3.14645 7.45902 4.09773 7.45748 4.68541 8.04137L12.134 15.4419L19.5586 8.01731C20.1444 7.43153 21.0957 7.42999 21.6834 8.01388C22.2711 8.59776 22.2726 9.54597 21.6868 10.1318L13.2015 18.617C12.6157 19.2028 11.6645 19.2044 11.0768 18.6205L2.56409 10.1627C1.97641 9.5788 1.97487 8.6306 2.56066 8.04481Z" fill="white"/></svg>'),linear-gradient(180deg,#048bcf 0%,#007cba 100%)}.chatrix-component-popup-chat-container{display:none;position:fixed;right:20px;bottom:100px;border:none;border-radius:12px;height:595px;width:375px;box-shadow:0 1px 3px #0000001a,0 14px 64px -10px #0003}.chatrix-component-popup-chat-container.active{display:block}`)),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var Chatrix=function(r){"use strict";React.Children,React.cloneElement,React.Component,React.createContext;const f=React.createElement;React.createRef,React.forwardRef,React.Fragment,React.isValidElement,React.memo,React.StrictMode,React.useCallback,React.useContext,React.useDebugValue,React.useEffect,React.useImperativeHandle,React.useLayoutEffect,React.useMemo,React.useReducer,React.useRef;const g=React.useState;React.lazy,React.Suspense,ReactDOM.createPortal,ReactDOM.findDOMNode;const d=ReactDOM.render;ReactDOM.hydrate,ReactDOM.unmountComponentAtNode;var I="";React.Children,React.cloneElement,React.Component,React.createContext,React.createElement,React.createRef,React.forwardRef,React.Fragment,React.isValidElement,React.memo,React.StrictMode;const b=React.useCallback;React.useContext,React.useDebugValue,React.useEffect,React.useImperativeHandle,React.useLayoutEffect,React.useMemo,React.useReducer;const v=React.useRef;React.useState,React.lazy,React.Suspense;function E(a,t){const e=v();return b(c=>{c?e.current=a(c):e.current&&e.current()},t)}function _(){return E(a=>{const{ownerDocument:t}=a;if(!t)return;const{defaultView:e}=t;if(!e)return;function c(){t&&t.activeElement===a&&a.focus()}return e.addEventListener("blur",c),()=>{e.removeEventListener("blur",c)}},[])}const S="loginToken";class k{constructor(t,e){this.url=t;for(let c in e){let n=e[c];typeof n=="boolean"&&(n=n?"true":"false"),n&&this.url.searchParams.append(c,n)}this.applyLoginToken()}toString(){return this.url.toString()}applyLoginToken(){var c;const t=S,e=new URLSearchParams(window.location.search);e.has(t)&&this.url.searchParams.append(t,(c=e.get(t))!=null?c:"")}}function p(a){const{focusable:t,iframeUrl:e,instanceId:c,defaultHomeserver:n,roomId:o,enableServiceWorker:i}=a,s=t?_():void 0,l=new k(e,{instanceId:c,defaultHomeserver:n,roomId:o,enableServiceWorker:i});return React.createElement("div",{className:"chatrix-component-chat"},React.createElement("iframe",{ref:s,src:l.toString()}))}function C(a){const{focusable:t,iframeUrl:e}=a,{instanceId:c,defaultHomeserver:n,roomId:o,enableServiceWorker:i,height:s,borderWidth:l,borderRadius:h,borderStyle:R,borderColor:m}=a.attributes,U={height:s?s.toString():"",borderWidth:l?l.toString():0,borderRadius:h?h.toString():"",borderStyle:R!=null?R:"",borderColor:m!=null?m:""},N={focusable:t,iframeUrl:e,instanceId:c,defaultHomeserver:n,roomId:o,enableServiceWorker:i};return React.createElement("div",{className:"chatrix-component-block",style:U},React.createElement(p,{...N}))}var L="";function w(a){const t=y()||!1,[e,c]=g(t),n=e?React.createElement(p,{...a}):void 0;return React.createElement("div",{className:"chatrix-component-popup"},React.createElement("div",{className:`chatrix-component-popup-chat-container ${e?"active":""}`},n),React.createElement("div",{className:"chatrix-component-popup-start-button"},React.createElement("button",{className:`${e?"active":""}`,onClick:()=>c(o=>!o)})))}function y(){return new URLSearchParams(window.location.search).has("loginToken")}function P(a,t){const e={...t,iframeUrl:u()},c=f(C,e);d(c,a)}function M(a,t){const e={...t,iframeUrl:u()},c=f(w,e);d(c,a)}function u(){var e;let a=window.origin;const t=(e=window.ChatrixConfig)!=null?e:null;return t&&t.rootUrl&&(a=t.rootUrl),new URL("iframe.html",a)}return r.getIframeUrl=u,r.renderBlock=P,r.renderPopup=M,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),r}({});