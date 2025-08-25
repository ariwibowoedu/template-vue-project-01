const lc=()=>{};var Xi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},dc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],u=n[e++],h=n[e++],d=((i&7)<<18|(o&63)<<12|(u&63)<<6|h&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},aa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],u=i+1<n.length,h=u?n[i+1]:0,d=i+2<n.length,f=d?n[i+2]:0,_=o>>2,A=(o&3)<<4|h>>4;let w=(h&15)<<2|f>>6,P=f&63;d||(P=64,u||(w=64)),r.push(e[_],e[A],e[w],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(oa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):dc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],h=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const A=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||h==null||f==null||A==null)throw new fc;const w=o<<2|h>>4;if(r.push(w),f!==64){const P=h<<4&240|f>>2;if(r.push(P),A!==64){const k=f<<6&192|A;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mc=function(n){const t=oa(n);return aa.encodeByteArray(t,!0)},Wn=function(n){return mc(n).replace(/\./g,"")},pc=function(n){try{return aa.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=()=>gc().__FIREBASE_DEFAULTS__,yc=()=>{if(typeof process>"u"||typeof Xi>"u")return;const n=Xi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ec=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&pc(n[1]);return t&&JSON.parse(t)},or=()=>{try{return lc()||_c()||yc()||Ec()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},vc=n=>or()?.emulatorHosts?.[n],Tc=n=>{const t=vc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},ua=()=>or()?.config,Wf=n=>or()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wc(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Wn(JSON.stringify(e)),Wn(JSON.stringify(u)),""].join(".")}const nn={};function Rc(){const n={prod:[],emulator:[]};for(const t of Object.keys(nn))nn[t]?n.emulator.push(t):n.prod.push(t);return n}function Cc(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Yi=!1;function Sc(n,t){if(typeof window>"u"||typeof document>"u"||!As(window.location.host)||nn[n]===t||nn[n]||Yi)return;nn[n]=t;function e(w){return`__firebase__banner__${w}`}const r="__firebase__banner",o=Rc().prod.length>0;function u(){const w=document.getElementById(r);w&&w.remove()}function h(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function d(w,P){w.setAttribute("width","24"),w.setAttribute("id",P),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function f(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Yi=!0,u()},w}function _(w,P){w.setAttribute("id",P),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function A(){const w=Cc(r),P=e("text"),k=document.getElementById(P)||document.createElement("span"),M=e("learnmore"),N=document.getElementById(M)||document.createElement("a"),W=e("preprendIcon"),H=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const z=w.element;h(z),_(N,M);const ot=f();d(H,W),z.append(H,k,N,ot),document.body.appendChild(z)}o?(k.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rs())}function Pc(){const n=or()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tm(){const n=Rs();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function bc(){return!Pc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vc(){try{return typeof indexedDB=="object"}catch{return!1}}function Dc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="FirebaseError";class De extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Nc,Object.setPrototypeOf(this,De.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ca.prototype.create)}}class ca{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?kc(o,r):"Error",h=`${this.serviceName}: ${u} (${i}).`;return new De(i,h,r)}}function kc(n,t){return n.replace(Oc,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Oc=/\{\$([^}]+)}/g;function em(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Xn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],u=t[i];if(Ji(o)&&Ji(u)){if(!Xn(o,u))return!1}else if(o!==u)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Ji(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function rm(n,t){const e=new xc(n,t);return e.subscribe.bind(e)}class xc{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Mc(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=zr),i.error===void 0&&(i.error=zr),i.complete===void 0&&(i.complete=zr);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mc(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function zr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(n){return n&&n._delegate?n._delegate:n}class un{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ic;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Uc(t))try{this.getOrInitializeService({instanceIdentifier:oe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=oe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=oe){return this.instances.has(t)}getOptions(t=oe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&u.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=oe){return this.component?this.component.multipleInstances?t:oe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fc(n){return n===oe?void 0:n}function Uc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Lc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const jc={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},qc=B.INFO,$c={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},zc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=$c[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class la{constructor(t){this.name=t,this._logLevel=qc,this._logHandler=zc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const Hc=(n,t)=>t.some(e=>n instanceof e);let Zi,to;function Gc(){return Zi||(Zi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kc(){return to||(to=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const da=new WeakMap,es=new WeakMap,fa=new WeakMap,Hr=new WeakMap,Cs=new WeakMap;function Qc(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e($t(n.result)),i()},u=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&da.set(e,n)}).catch(()=>{}),Cs.set(t,n),t}function Wc(n){if(es.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),i()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});es.set(n,t)}let ns={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return es.get(n);if(t==="objectStoreNames")return n.objectStoreNames||fa.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return $t(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Xc(n){ns=n(ns)}function Yc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Gr(this),t,...e);return fa.set(r,t.sort?t.sort():[t]),$t(r)}:Kc().includes(n)?function(...t){return n.apply(Gr(this),t),$t(da.get(this))}:function(...t){return $t(n.apply(Gr(this),t))}}function Jc(n){return typeof n=="function"?Yc(n):(n instanceof IDBTransaction&&Wc(n),Hc(n,Gc())?new Proxy(n,ns):n)}function $t(n){if(n instanceof IDBRequest)return Qc(n);if(Hr.has(n))return Hr.get(n);const t=Jc(n);return t!==n&&(Hr.set(n,t),Cs.set(t,n)),t}const Gr=n=>Cs.get(n);function Zc(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const u=indexedDB.open(n,t),h=$t(u);return r&&u.addEventListener("upgradeneeded",d=>{r($t(u.result),d.oldVersion,d.newVersion,$t(u.transaction),d)}),e&&u.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),h.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),h}const th=["get","getKey","getAll","getAllKeys","count"],eh=["put","add","delete","clear"],Kr=new Map;function eo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Kr.get(t))return Kr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=eh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||th.includes(e)))return;const o=async function(u,...h){const d=this.transaction(u,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(h.shift())),(await Promise.all([f[e](...h),i&&d.done]))[0]};return Kr.set(t,o),o}Xc(n=>({...n,get:(t,e,r)=>eo(t,e)||n.get(t,e,r),has:(t,e)=>!!eo(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(rh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function rh(n){return n.getComponent()?.type==="VERSION"}const rs="@firebase/app",no="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new la("@firebase/app"),sh="@firebase/app-compat",ih="@firebase/analytics-compat",oh="@firebase/analytics",ah="@firebase/app-check-compat",uh="@firebase/app-check",ch="@firebase/auth",hh="@firebase/auth-compat",lh="@firebase/database",dh="@firebase/data-connect",fh="@firebase/database-compat",mh="@firebase/functions",ph="@firebase/functions-compat",gh="@firebase/installations",_h="@firebase/installations-compat",yh="@firebase/messaging",Eh="@firebase/messaging-compat",vh="@firebase/performance",Th="@firebase/performance-compat",Ih="@firebase/remote-config",wh="@firebase/remote-config-compat",Ah="@firebase/storage",Rh="@firebase/storage-compat",Ch="@firebase/firestore",Sh="@firebase/ai",Ph="@firebase/firestore-compat",bh="firebase",Vh="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="[DEFAULT]",Dh={[rs]:"fire-core",[sh]:"fire-core-compat",[oh]:"fire-analytics",[ih]:"fire-analytics-compat",[uh]:"fire-app-check",[ah]:"fire-app-check-compat",[ch]:"fire-auth",[hh]:"fire-auth-compat",[lh]:"fire-rtdb",[dh]:"fire-data-connect",[fh]:"fire-rtdb-compat",[mh]:"fire-fn",[ph]:"fire-fn-compat",[gh]:"fire-iid",[_h]:"fire-iid-compat",[yh]:"fire-fcm",[Eh]:"fire-fcm-compat",[vh]:"fire-perf",[Th]:"fire-perf-compat",[Ih]:"fire-rc",[wh]:"fire-rc-compat",[Ah]:"fire-gcs",[Rh]:"fire-gcs-compat",[Ch]:"fire-fst",[Ph]:"fire-fst-compat",[Sh]:"fire-vertex","fire-js":"fire-js",[bh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new Map,Nh=new Map,is=new Map;function ro(n,t){try{n.container.addComponent(t)}catch(e){xt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Jn(n){const t=n.name;if(is.has(t))return xt.debug(`There were multiple attempts to register component ${t}.`),!1;is.set(t,n);for(const e of Yn.values())ro(e,n);for(const e of Nh.values())ro(e,n);return!0}function kh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Oh(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new ca("app","Firebase",xh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=Vh;function Fh(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:ss,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});if(e||(e=ua()),!e)throw zt.create("no-options");const o=Yn.get(i);if(o){if(Xn(e,o.options)&&Xn(r,o.config))return o;throw zt.create("duplicate-app",{appName:i})}const u=new Bc(i);for(const d of is.values())u.addComponent(d);const h=new Mh(e,r,u);return Yn.set(i,h),h}function Uh(n=ss){const t=Yn.get(n);if(!t&&n===ss&&ua())return Fh();if(!t)throw zt.create("no-app",{appName:n});return t}function ve(n,t,e){let r=Dh[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const u=[`Unable to register library "${r}" with version "${t}":`];i&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&u.push("and"),o&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xt.warn(u.join(" "));return}Jn(new un(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="firebase-heartbeat-database",jh=1,cn="firebase-heartbeat-store";let Qr=null;function ma(){return Qr||(Qr=Zc(Bh,jh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(cn)}catch(e){console.warn(e)}}}}).catch(n=>{throw zt.create("idb-open",{originalErrorMessage:n.message})})),Qr}async function qh(n){try{const e=(await ma()).transaction(cn),r=await e.objectStore(cn).get(pa(n));return await e.done,r}catch(t){if(t instanceof De)xt.warn(t.message);else{const e=zt.create("idb-get",{originalErrorMessage:t?.message});xt.warn(e.message)}}}async function so(n,t){try{const r=(await ma()).transaction(cn,"readwrite");await r.objectStore(cn).put(t,pa(n)),await r.done}catch(e){if(e instanceof De)xt.warn(e.message);else{const r=zt.create("idb-set",{originalErrorMessage:e?.message});xt.warn(r.message)}}}function pa(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=1024,zh=30;class Hh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Kh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=io();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>zh){const i=Qh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){xt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=io(),{heartbeatsToSend:e,unsentEntries:r}=Gh(this._heartbeatsCache.heartbeats),i=Wn(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return xt.warn(t),""}}}function io(){return new Date().toISOString().substring(0,10)}function Gh(n,t=$h){const e=[];let r=n.slice();for(const i of n){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),oo(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),oo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Kh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vc()?Dc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await qh(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return so(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return so(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function oo(n){return Wn(JSON.stringify({version:2,heartbeats:n})).length}function Qh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(n){Jn(new un("platform-logger",t=>new nh(t),"PRIVATE")),Jn(new un("heartbeat",t=>new Hh(t),"PRIVATE")),ve(rs,no,n),ve(rs,no,"esm2020"),ve("fire-js","")}Wh("");var ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ht,ga;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,m){function g(){}g.prototype=m.prototype,v.D=m.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(y,E,I){for(var p=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)p[Nt-2]=arguments[Nt];return m.prototype[E].apply(y,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,g){g||(g=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(E=0;16>E;++E)y[E]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=v.g[0],g=v.g[1],E=v.g[2];var I=v.g[3],p=m+(I^g&(E^I))+y[0]+3614090360&4294967295;m=g+(p<<7&4294967295|p>>>25),p=I+(E^m&(g^E))+y[1]+3905402710&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(g^I&(m^g))+y[2]+606105819&4294967295,E=I+(p<<17&4294967295|p>>>15),p=g+(m^E&(I^m))+y[3]+3250441966&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(I^g&(E^I))+y[4]+4118548399&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(E^m&(g^E))+y[5]+1200080426&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(g^I&(m^g))+y[6]+2821735955&4294967295,E=I+(p<<17&4294967295|p>>>15),p=g+(m^E&(I^m))+y[7]+4249261313&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(I^g&(E^I))+y[8]+1770035416&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(E^m&(g^E))+y[9]+2336552879&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(g^I&(m^g))+y[10]+4294925233&4294967295,E=I+(p<<17&4294967295|p>>>15),p=g+(m^E&(I^m))+y[11]+2304563134&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(I^g&(E^I))+y[12]+1804603682&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(E^m&(g^E))+y[13]+4254626195&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(g^I&(m^g))+y[14]+2792965006&4294967295,E=I+(p<<17&4294967295|p>>>15),p=g+(m^E&(I^m))+y[15]+1236535329&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(E^I&(g^E))+y[1]+4129170786&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^E&(m^g))+y[6]+3225465664&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(I^m))+y[11]+643717713&4294967295,E=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(E^I))+y[0]+3921069994&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^I&(g^E))+y[5]+3593408605&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^E&(m^g))+y[10]+38016083&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(I^m))+y[15]+3634488961&4294967295,E=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(E^I))+y[4]+3889429448&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^I&(g^E))+y[9]+568446438&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^E&(m^g))+y[14]+3275163606&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(I^m))+y[3]+4107603335&4294967295,E=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(E^I))+y[8]+1163531501&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^I&(g^E))+y[13]+2850285829&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^E&(m^g))+y[2]+4243563512&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(I^m))+y[7]+1735328473&4294967295,E=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(E^I))+y[12]+2368359562&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(g^E^I)+y[5]+4294588738&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^E)+y[8]+2272392833&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^g)+y[11]+1839030562&4294967295,E=I+(p<<16&4294967295|p>>>16),p=g+(E^I^m)+y[14]+4259657740&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^I)+y[1]+2763975236&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^E)+y[4]+1272893353&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^g)+y[7]+4139469664&4294967295,E=I+(p<<16&4294967295|p>>>16),p=g+(E^I^m)+y[10]+3200236656&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^I)+y[13]+681279174&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^E)+y[0]+3936430074&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^g)+y[3]+3572445317&4294967295,E=I+(p<<16&4294967295|p>>>16),p=g+(E^I^m)+y[6]+76029189&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^I)+y[9]+3654602809&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^E)+y[12]+3873151461&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^g)+y[15]+530742520&4294967295,E=I+(p<<16&4294967295|p>>>16),p=g+(E^I^m)+y[2]+3299628645&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(E^(g|~I))+y[0]+4096336452&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~E))+y[7]+1126891415&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~g))+y[14]+2878612391&4294967295,E=I+(p<<15&4294967295|p>>>17),p=g+(I^(E|~m))+y[5]+4237533241&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~I))+y[12]+1700485571&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~E))+y[3]+2399980690&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~g))+y[10]+4293915773&4294967295,E=I+(p<<15&4294967295|p>>>17),p=g+(I^(E|~m))+y[1]+2240044497&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~I))+y[8]+1873313359&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~E))+y[15]+4264355552&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~g))+y[6]+2734768916&4294967295,E=I+(p<<15&4294967295|p>>>17),p=g+(I^(E|~m))+y[13]+1309151649&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~I))+y[4]+4149444226&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~E))+y[11]+3174756917&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~g))+y[2]+718787259&4294967295,E=I+(p<<15&4294967295|p>>>17),p=g+(I^(E|~m))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var g=m-this.blockSize,y=this.B,E=this.h,I=0;I<m;){if(E==0)for(;I<=g;)i(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<m;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<m;)if(y[E++]=v[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var g=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=g&255,g/=256;for(this.u(v),v=Array(16),m=g=0;4>m;++m)for(var y=0;32>y;y+=8)v[g++]=this.g[m]>>>y&255;return v};function o(v,m){var g=h;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=m(v)}function u(v,m){this.h=m;for(var g=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==m||(g[E]=I,y=!1)}this.g=g}var h={};function d(v){return-128<=v&&128>v?o(v,function(m){return new u([m|0],0>m?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return N(f(-v));for(var m=[],g=1,y=0;v>=g;y++)m[y]=v/g|0,g*=4294967296;return new u(m,0)}function _(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return N(_(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(m,8)),y=A,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),p=parseInt(v.substring(E,E+I),m);8>I?(I=f(Math.pow(m,I)),y=y.j(I).add(f(p))):(y=y.j(g),y=y.add(f(p)))}return y}var A=d(0),w=d(1),P=d(16777216);n=u.prototype,n.m=function(){if(M(this))return-N(this).m();for(var v=0,m=1,g=0;g<this.g.length;g++){var y=this.i(g);v+=(0<=y?y:4294967296+y)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(M(this))return"-"+N(this).toString(v);for(var m=f(Math.pow(v,6)),g=this,y="";;){var E=ot(g,m).g;g=W(g,E.j(m));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=E,k(g))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function M(v){return v.h==-1}n.l=function(v){return v=W(this,v),M(v)?-1:k(v)?0:1};function N(v){for(var m=v.g.length,g=[],y=0;y<m;y++)g[y]=~v.g[y];return new u(g,~v.h).add(w)}n.abs=function(){return M(this)?N(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0,E=0;E<=m;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),p=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=p>>>16,I&=65535,p&=65535,g[E]=p<<16|I}return new u(g,g[g.length-1]&-2147483648?-1:0)};function W(v,m){return v.add(N(m))}n.j=function(v){if(k(this)||k(v))return A;if(M(this))return M(v)?N(this).j(N(v)):N(N(this).j(v));if(M(v))return N(this.j(N(v)));if(0>this.l(P)&&0>v.l(P))return f(this.m()*v.m());for(var m=this.g.length+v.g.length,g=[],y=0;y<2*m;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,p=this.i(y)&65535,Nt=v.i(E)>>>16,xe=v.i(E)&65535;g[2*y+2*E]+=p*xe,H(g,2*y+2*E),g[2*y+2*E+1]+=I*xe,H(g,2*y+2*E+1),g[2*y+2*E+1]+=p*Nt,H(g,2*y+2*E+1),g[2*y+2*E+2]+=I*Nt,H(g,2*y+2*E+2)}for(y=0;y<m;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=m;y<2*m;y++)g[y]=0;return new u(g,0)};function H(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function z(v,m){this.g=v,this.h=m}function ot(v,m){if(k(m))throw Error("division by zero");if(k(v))return new z(A,A);if(M(v))return m=ot(N(v),m),new z(N(m.g),N(m.h));if(M(m))return m=ot(v,N(m)),new z(N(m.g),m.h);if(30<v.g.length){if(M(v)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var g=w,y=m;0>=y.l(v);)g=Rt(g),y=Rt(y);var E=ht(g,1),I=ht(y,1);for(y=ht(y,2),g=ht(g,2);!k(y);){var p=I.add(y);0>=p.l(v)&&(E=E.add(g),I=p),y=ht(y,1),g=ht(g,1)}return m=W(v,E.j(m)),new z(E,m)}for(E=A;0<=v.l(m);){for(g=Math.max(1,Math.floor(v.m()/m.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(g),p=I.j(m);M(p)||0<p.l(v);)g-=y,I=f(g),p=I.j(m);k(I)&&(I=w),E=E.add(I),v=W(v,p)}return new z(E,v)}n.A=function(v){return ot(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)&v.i(y);return new u(g,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)|v.i(y);return new u(g,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)^v.i(y);return new u(g,this.h^v.h)};function Rt(v){for(var m=v.g.length+1,g=[],y=0;y<m;y++)g[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(g,v.h)}function ht(v,m){var g=m>>5;m%=32;for(var y=v.g.length-g,E=[],I=0;I<y;I++)E[I]=0<m?v.i(I+g)>>>m|v.i(I+g+1)<<32-m:v.i(I+g);return new u(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ga=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,Ht=u}).apply(typeof ao<"u"?ao:typeof self<"u"?self:typeof window<"u"?window:{});var Un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _a,Je,ya,zn,os,Ea,va,Ta;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Un=="object"&&Un];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var c=r;s=s.split(".");for(var l=0;l<s.length-1;l++){var T=s[l];if(!(T in c))break t;c=c[T]}s=s[s.length-1],l=c[s],a=a(l),a!=l&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,l=!1,T={next:function(){if(!l&&c<s.length){var R=c++;return{value:a(R,s[R]),done:!1}}return l=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,c){return s.call.apply(s.bind,arguments)}function A(s,a,c){if(!s)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,l),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function w(s,a,c){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:A,w.apply(null,arguments)}function P(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var l=c.slice();return l.push.apply(l,arguments),s.apply(this,l)}}function k(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(l,T,R){for(var b=Array(arguments.length-2),G=2;G<arguments.length;G++)b[G-2]=arguments[G];return a.prototype[T].apply(l,b)}}function M(s){const a=s.length;if(0<a){const c=Array(a);for(let l=0;l<a;l++)c[l]=s[l];return c}return[]}function N(s,a){for(let c=1;c<arguments.length;c++){const l=arguments[c];if(d(l)){const T=s.length||0,R=l.length||0;s.length=T+R;for(let b=0;b<R;b++)s[T+b]=l[b]}else s.push(l)}}class W{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function H(s){return/^[\s\xa0]*$/.test(s)}function z(){var s=h.navigator;return s&&(s=s.userAgent)?s:""}function ot(s){return ot[" "](s),s}ot[" "]=function(){};var Rt=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function ht(s,a,c){for(const l in s)a.call(c,s[l],l,s)}function v(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function m(s){const a={};for(const c in s)a[c]=s[c];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let c,l;for(let T=1;T<arguments.length;T++){l=arguments[T];for(c in l)s[c]=l[c];for(let R=0;R<g.length;R++)c=g[R],Object.prototype.hasOwnProperty.call(l,c)&&(s[c]=l[c])}}function E(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function I(s){h.setTimeout(()=>{throw s},0)}function p(){var s=vr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Nt{constructor(){this.h=this.g=null}add(a,c){const l=xe.get();l.set(a,c),this.h?this.h.next=l:this.g=l,this.h=l}}var xe=new W(()=>new Vu,s=>s.reset());class Vu{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,Le=!1,vr=new Nt,Xs=()=>{const s=h.Promise.resolve(void 0);Me=()=>{s.then(Du)}};var Du=()=>{for(var s;s=p();){try{s.h.call(s.g)}catch(c){I(c)}var a=xe;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Le=!1};function Lt(){this.s=this.s,this.C=this.C}Lt.prototype.s=!1,Lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function lt(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var Nu=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};h.addEventListener("test",c,a),h.removeEventListener("test",c,a)}catch{}return s})();function Fe(s,a){if(lt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,l=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Rt){t:{try{ot(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:ku[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Fe.aa.h.call(this)}}k(Fe,lt);var ku={2:"touch",3:"pen",4:"mouse"};Fe.prototype.h=function(){Fe.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var vn="closure_listenable_"+(1e6*Math.random()|0),Ou=0;function xu(s,a,c,l,T){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!l,this.ha=T,this.key=++Ou,this.da=this.fa=!1}function Tn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function In(s){this.src=s,this.g={},this.h=0}In.prototype.add=function(s,a,c,l,T){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var b=Ir(s,a,l,T);return-1<b?(a=s[b],c||(a.fa=!1)):(a=new xu(a,this.src,R,!!l,T),a.fa=c,s.push(a)),a};function Tr(s,a){var c=a.type;if(c in s.g){var l=s.g[c],T=Array.prototype.indexOf.call(l,a,void 0),R;(R=0<=T)&&Array.prototype.splice.call(l,T,1),R&&(Tn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function Ir(s,a,c,l){for(var T=0;T<s.length;++T){var R=s[T];if(!R.da&&R.listener==a&&R.capture==!!c&&R.ha==l)return T}return-1}var wr="closure_lm_"+(1e6*Math.random()|0),Ar={};function Ys(s,a,c,l,T){if(Array.isArray(a)){for(var R=0;R<a.length;R++)Ys(s,a[R],c,l,T);return null}return c=ti(c),s&&s[vn]?s.K(a,c,f(l)?!!l.capture:!1,T):Mu(s,a,c,!1,l,T)}function Mu(s,a,c,l,T,R){if(!a)throw Error("Invalid event type");var b=f(T)?!!T.capture:!!T,G=Cr(s);if(G||(s[wr]=G=new In(s)),c=G.add(a,c,l,b,R),c.proxy)return c;if(l=Lu(),c.proxy=l,l.src=s,l.listener=c,s.addEventListener)Nu||(T=b),T===void 0&&(T=!1),s.addEventListener(a.toString(),l,T);else if(s.attachEvent)s.attachEvent(Zs(a.toString()),l);else if(s.addListener&&s.removeListener)s.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Lu(){function s(c){return a.call(s.src,s.listener,c)}const a=Fu;return s}function Js(s,a,c,l,T){if(Array.isArray(a))for(var R=0;R<a.length;R++)Js(s,a[R],c,l,T);else l=f(l)?!!l.capture:!!l,c=ti(c),s&&s[vn]?(s=s.i,a=String(a).toString(),a in s.g&&(R=s.g[a],c=Ir(R,c,l,T),-1<c&&(Tn(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete s.g[a],s.h--)))):s&&(s=Cr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Ir(a,c,l,T)),(c=-1<s?a[s]:null)&&Rr(c))}function Rr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[vn])Tr(a.i,s);else{var c=s.type,l=s.proxy;a.removeEventListener?a.removeEventListener(c,l,s.capture):a.detachEvent?a.detachEvent(Zs(c),l):a.addListener&&a.removeListener&&a.removeListener(l),(c=Cr(a))?(Tr(c,s),c.h==0&&(c.src=null,a[wr]=null)):Tn(s)}}}function Zs(s){return s in Ar?Ar[s]:Ar[s]="on"+s}function Fu(s,a){if(s.da)s=!0;else{a=new Fe(a,this);var c=s.listener,l=s.ha||s.src;s.fa&&Rr(s),s=c.call(l,a)}return s}function Cr(s){return s=s[wr],s instanceof In?s:null}var Sr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ti(s){return typeof s=="function"?s:(s[Sr]||(s[Sr]=function(a){return s.handleEvent(a)}),s[Sr])}function dt(){Lt.call(this),this.i=new In(this),this.M=this,this.F=null}k(dt,Lt),dt.prototype[vn]=!0,dt.prototype.removeEventListener=function(s,a,c,l){Js(this,s,a,c,l)};function Et(s,a){var c,l=s.F;if(l)for(c=[];l;l=l.F)c.push(l);if(s=s.M,l=a.type||a,typeof a=="string")a=new lt(a,s);else if(a instanceof lt)a.target=a.target||s;else{var T=a;a=new lt(l,s),y(a,T)}if(T=!0,c)for(var R=c.length-1;0<=R;R--){var b=a.g=c[R];T=wn(b,l,!0,a)&&T}if(b=a.g=s,T=wn(b,l,!0,a)&&T,T=wn(b,l,!1,a)&&T,c)for(R=0;R<c.length;R++)b=a.g=c[R],T=wn(b,l,!1,a)&&T}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],l=0;l<c.length;l++)Tn(c[l]);delete s.g[a],s.h--}}this.F=null},dt.prototype.K=function(s,a,c,l){return this.i.add(String(s),a,!1,c,l)},dt.prototype.L=function(s,a,c,l){return this.i.add(String(s),a,!0,c,l)};function wn(s,a,c,l){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,R=0;R<a.length;++R){var b=a[R];if(b&&!b.da&&b.capture==c){var G=b.listener,at=b.ha||b.src;b.fa&&Tr(s.i,b),T=G.call(at,l)!==!1&&T}}return T&&!l.defaultPrevented}function ei(s,a,c){if(typeof s=="function")c&&(s=w(s,c));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:h.setTimeout(s,a||0)}function ni(s){s.g=ei(()=>{s.g=null,s.i&&(s.i=!1,ni(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Uu extends Lt{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:ni(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ue(s){Lt.call(this),this.h=s,this.g={}}k(Ue,Lt);var ri=[];function si(s){ht(s.g,function(a,c){this.g.hasOwnProperty(c)&&Rr(a)},s),s.g={}}Ue.prototype.N=function(){Ue.aa.N.call(this),si(this)},Ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pr=h.JSON.stringify,Bu=h.JSON.parse,ju=class{stringify(s){return h.JSON.stringify(s,void 0)}parse(s){return h.JSON.parse(s,void 0)}};function br(){}br.prototype.h=null;function ii(s){return s.h||(s.h=s.i())}function oi(){}var Be={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vr(){lt.call(this,"d")}k(Vr,lt);function Dr(){lt.call(this,"c")}k(Dr,lt);var ne={},ai=null;function An(){return ai=ai||new dt}ne.La="serverreachability";function ui(s){lt.call(this,ne.La,s)}k(ui,lt);function je(s){const a=An();Et(a,new ui(a))}ne.STAT_EVENT="statevent";function ci(s,a){lt.call(this,ne.STAT_EVENT,s),this.stat=a}k(ci,lt);function vt(s){const a=An();Et(a,new ci(a,s))}ne.Ma="timingevent";function hi(s,a){lt.call(this,ne.Ma,s),this.size=a}k(hi,lt);function qe(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){s()},a)}function $e(){this.g=!0}$e.prototype.xa=function(){this.g=!1};function qu(s,a,c,l,T,R){s.info(function(){if(s.g)if(R)for(var b="",G=R.split("&"),at=0;at<G.length;at++){var $=G[at].split("=");if(1<$.length){var ft=$[0];$=$[1];var mt=ft.split("_");b=2<=mt.length&&mt[1]=="type"?b+(ft+"="+$+"&"):b+(ft+"=redacted&")}}else b=null;else b=R;return"XMLHTTP REQ ("+l+") [attempt "+T+"]: "+a+`
`+c+`
`+b})}function $u(s,a,c,l,T,R,b){s.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+T+"]: "+a+`
`+c+`
`+R+" "+b})}function de(s,a,c,l){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Hu(s,c)+(l?" "+l:"")})}function zu(s,a){s.info(function(){return"TIMEOUT: "+a})}$e.prototype.info=function(){};function Hu(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var l=c[s];if(!(2>l.length)){var T=l[1];if(Array.isArray(T)&&!(1>T.length)){var R=T[0];if(R!="noop"&&R!="stop"&&R!="close")for(var b=1;b<T.length;b++)T[b]=""}}}}return Pr(c)}catch{return a}}var Rn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},li={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nr;function Cn(){}k(Cn,br),Cn.prototype.g=function(){return new XMLHttpRequest},Cn.prototype.i=function(){return{}},Nr=new Cn;function Ft(s,a,c,l){this.j=s,this.i=a,this.l=c,this.R=l||1,this.U=new Ue(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new di}function di(){this.i=null,this.g="",this.h=!1}var fi={},kr={};function Or(s,a,c){s.L=1,s.v=Vn(kt(a)),s.m=c,s.P=!0,mi(s,null)}function mi(s,a){s.F=Date.now(),Sn(s),s.A=kt(s.v);var c=s.A,l=s.R;Array.isArray(l)||(l=[String(l)]),Pi(c.i,"t",l),s.C=0,c=s.j.J,s.h=new di,s.g=Gi(s.j,c?a:null,!s.m),0<s.O&&(s.M=new Uu(w(s.Y,s,s.g),s.O)),a=s.U,c=s.g,l=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(ri[0]=T.toString()),T=ri);for(var R=0;R<T.length;R++){var b=Ys(c,T[R],l||a.handleEvent,!1,a.h||a);if(!b)break;a.g[b.key]=b}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),je(),qu(s.i,s.u,s.A,s.l,s.R,s.m)}Ft.prototype.ca=function(s){s=s.target;const a=this.M;a&&Ot(s)==3?a.j():this.Y(s)},Ft.prototype.Y=function(s){try{if(s==this.g)t:{const mt=Ot(this.g);var a=this.g.Ba();const pe=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||xi(this.g)))){this.J||mt!=4||a==7||(a==8||0>=pe?je(3):je(2)),xr(this);var c=this.g.Z();this.X=c;e:if(pi(this)){var l=xi(this.g);s="";var T=l.length,R=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){re(this),ze(this);var b="";break e}this.h.i=new h.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(l[a],{stream:!(R&&a==T-1)});l.length=0,this.h.g+=s,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=c==200,$u(this.i,this.u,this.A,this.l,this.R,mt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var G,at=this.g;if((G=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(G)){var $=G;break e}}$=null}if(c=$)de(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mr(this,c);else{this.o=!1,this.s=3,vt(12),re(this),ze(this);break t}}if(this.P){c=!0;let At;for(;!this.J&&this.C<b.length;)if(At=Gu(this,b),At==kr){mt==4&&(this.s=4,vt(14),c=!1),de(this.i,this.l,null,"[Incomplete Response]");break}else if(At==fi){this.s=4,vt(15),de(this.i,this.l,b,"[Invalid Chunk]"),c=!1;break}else de(this.i,this.l,At,null),Mr(this,At);if(pi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||b.length!=0||this.h.h||(this.s=1,vt(16),c=!1),this.o=this.o&&c,!c)de(this.i,this.l,b,"[Invalid Chunked Response]"),re(this),ze(this);else if(0<b.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),qr(ft),ft.M=!0,vt(11))}}else de(this.i,this.l,b,null),Mr(this,b);mt==4&&re(this),this.o&&!this.J&&(mt==4?qi(this.j,this):(this.o=!1,Sn(this)))}else cc(this.g),c==400&&0<b.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),re(this),ze(this)}}}catch{}finally{}};function pi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Gu(s,a){var c=s.C,l=a.indexOf(`
`,c);return l==-1?kr:(c=Number(a.substring(c,l)),isNaN(c)?fi:(l+=1,l+c>a.length?kr:(a=a.slice(l,l+c),s.C=l+c,a)))}Ft.prototype.cancel=function(){this.J=!0,re(this)};function Sn(s){s.S=Date.now()+s.I,gi(s,s.I)}function gi(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=qe(w(s.ba,s),a)}function xr(s){s.B&&(h.clearTimeout(s.B),s.B=null)}Ft.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(zu(this.i,this.A),this.L!=2&&(je(),vt(17)),re(this),this.s=2,ze(this)):gi(this,this.S-s)};function ze(s){s.j.G==0||s.J||qi(s.j,s)}function re(s){xr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,si(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Mr(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||Lr(c.h,s))){if(!s.K&&Lr(c.h,s)&&c.G==3){try{var l=c.Da.g.parse(a)}catch{l=null}if(Array.isArray(l)&&l.length==3){var T=l;if(T[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)Mn(c),On(c);else break t;jr(c),vt(18)}}else c.za=T[1],0<c.za-c.T&&37500>T[2]&&c.F&&c.v==0&&!c.C&&(c.C=qe(w(c.Za,c),6e3));if(1>=Ei(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else ie(c,11)}else if((s.K||c.g==s)&&Mn(c),!H(a))for(T=c.Da.g.parse(a),a=0;a<T.length;a++){let $=T[a];if(c.T=$[0],$=$[1],c.G==2)if($[0]=="c"){c.K=$[1],c.ia=$[2];const ft=$[3];ft!=null&&(c.la=ft,c.j.info("VER="+c.la));const mt=$[4];mt!=null&&(c.Aa=mt,c.j.info("SVER="+c.Aa));const pe=$[5];pe!=null&&typeof pe=="number"&&0<pe&&(l=1.5*pe,c.L=l,c.j.info("backChannelRequestTimeoutMs_="+l)),l=c;const At=s.g;if(At){const Fn=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fn){var R=l.h;R.g||Fn.indexOf("spdy")==-1&&Fn.indexOf("quic")==-1&&Fn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Fr(R,R.h),R.h=null))}if(l.D){const $r=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;$r&&(l.ya=$r,K(l.I,l.D,$r))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),l=c;var b=s;if(l.qa=Hi(l,l.J?l.ia:null,l.W),b.K){vi(l.h,b);var G=b,at=l.L;at&&(G.I=at),G.B&&(xr(G),Sn(G)),l.g=b}else Bi(l);0<c.i.length&&xn(c)}else $[0]!="stop"&&$[0]!="close"||ie(c,7);else c.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?ie(c,7):Br(c):$[0]!="noop"&&c.l&&c.l.ta($),c.v=0)}}je(4)}catch{}}var Ku=class{constructor(s,a){this.g=s,this.map=a}};function _i(s){this.l=s||10,h.PerformanceNavigationTiming?(s=h.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ei(s){return s.h?1:s.g?s.g.size:0}function Lr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Fr(s,a){s.g?s.g.add(a):s.h=a}function vi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}_i.prototype.cancel=function(){if(this.i=Ti(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Ti(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return M(s.i)}function Qu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],c=s.length,l=0;l<c;l++)a.push(s[l]);return a}a=[],c=0;for(l in s)a[c++]=s[l];return a}function Wu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const l in s)a[c++]=l;return a}}}function Ii(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=Wu(s),l=Qu(s),T=l.length,R=0;R<T;R++)a.call(void 0,l[R],c&&c[R],s)}var wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xu(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var l=s[c].indexOf("="),T=null;if(0<=l){var R=s[c].substring(0,l);T=s[c].substring(l+1)}else R=s[c];a(R,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function se(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof se){this.h=s.h,Pn(this,s.j),this.o=s.o,this.g=s.g,bn(this,s.s),this.l=s.l;var a=s.i,c=new Ke;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),Ai(this,c),this.m=s.m}else s&&(a=String(s).match(wi))?(this.h=!1,Pn(this,a[1]||"",!0),this.o=He(a[2]||""),this.g=He(a[3]||"",!0),bn(this,a[4]),this.l=He(a[5]||"",!0),Ai(this,a[6]||"",!0),this.m=He(a[7]||"")):(this.h=!1,this.i=new Ke(null,this.h))}se.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Ge(a,Ri,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Ge(a,Ri,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Ge(c,c.charAt(0)=="/"?Zu:Ju,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Ge(c,ec)),s.join("")};function kt(s){return new se(s)}function Pn(s,a,c){s.j=c?He(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function bn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Ai(s,a,c){a instanceof Ke?(s.i=a,nc(s.i,s.h)):(c||(a=Ge(a,tc)),s.i=new Ke(a,s.h))}function K(s,a,c){s.i.set(a,c)}function Vn(s){return K(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function He(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ge(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Yu),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Yu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ri=/[#\/\?@]/g,Ju=/[#\?:]/g,Zu=/[#\?]/g,tc=/[#\?@]/g,ec=/#/g;function Ke(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Ut(s){s.g||(s.g=new Map,s.h=0,s.i&&Xu(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=Ke.prototype,n.add=function(s,a){Ut(this),this.i=null,s=fe(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function Ci(s,a){Ut(s),a=fe(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Si(s,a){return Ut(s),a=fe(s,a),s.g.has(a)}n.forEach=function(s,a){Ut(this),this.g.forEach(function(c,l){c.forEach(function(T){s.call(a,T,l,this)},this)},this)},n.na=function(){Ut(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let l=0;l<a.length;l++){const T=s[l];for(let R=0;R<T.length;R++)c.push(a[l])}return c},n.V=function(s){Ut(this);let a=[];if(typeof s=="string")Si(this,s)&&(a=a.concat(this.g.get(fe(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},n.set=function(s,a){return Ut(this),this.i=null,s=fe(this,s),Si(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Pi(s,a,c){Ci(s,a),0<c.length&&(s.i=null,s.g.set(fe(s,a),M(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var l=a[c];const R=encodeURIComponent(String(l)),b=this.V(l);for(l=0;l<b.length;l++){var T=R;b[l]!==""&&(T+="="+encodeURIComponent(String(b[l]))),s.push(T)}}return this.i=s.join("&")};function fe(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function nc(s,a){a&&!s.j&&(Ut(s),s.i=null,s.g.forEach(function(c,l){var T=l.toLowerCase();l!=T&&(Ci(this,l),Pi(this,T,c))},s)),s.j=a}function rc(s,a){const c=new $e;if(h.Image){const l=new Image;l.onload=P(Bt,c,"TestLoadImage: loaded",!0,a,l),l.onerror=P(Bt,c,"TestLoadImage: error",!1,a,l),l.onabort=P(Bt,c,"TestLoadImage: abort",!1,a,l),l.ontimeout=P(Bt,c,"TestLoadImage: timeout",!1,a,l),h.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=s}else a(!1)}function sc(s,a){const c=new $e,l=new AbortController,T=setTimeout(()=>{l.abort(),Bt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:l.signal}).then(R=>{clearTimeout(T),R.ok?Bt(c,"TestPingServer: ok",!0,a):Bt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Bt(c,"TestPingServer: error",!1,a)})}function Bt(s,a,c,l,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),l(c)}catch{}}function ic(){this.g=new ju}function oc(s,a,c){const l=c||"";try{Ii(s,function(T,R){let b=T;f(T)&&(b=Pr(T)),a.push(l+R+"="+encodeURIComponent(b))})}catch(T){throw a.push(l+"type="+encodeURIComponent("_badmap")),T}}function Dn(s){this.l=s.Ub||null,this.j=s.eb||!1}k(Dn,br),Dn.prototype.g=function(){return new Nn(this.l,this.j)},Dn.prototype.i=(function(s){return function(){return s}})({});function Nn(s,a){dt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Nn,dt),n=Nn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,We(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||h).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qe(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,We(this)),this.g&&(this.readyState=3,We(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function bi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Qe(this):We(this),this.readyState==3&&bi(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Qe(this))},n.Qa=function(s){this.g&&(this.response=s,Qe(this))},n.ga=function(){this.g&&Qe(this)};function Qe(s){s.readyState=4,s.l=null,s.j=null,s.v=null,We(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function We(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Vi(s){let a="";return ht(s,function(c,l){a+=l,a+=":",a+=c,a+=`\r
`}),a}function Ur(s,a,c){t:{for(l in c){var l=!1;break t}l=!0}l||(c=Vi(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):K(s,a,c))}function Y(s){dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Y,dt);var ac=/^https?$/i,uc=["POST","PUT"];n=Y.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,c,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nr.g(),this.v=this.o?ii(this.o):ii(Nr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(R){Di(this,R);return}if(s=c||"",c=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var T in l)c.set(T,l[T]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const R of l.keys())c.set(R,l.get(R));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),T=h.FormData&&s instanceof h.FormData,!(0<=Array.prototype.indexOf.call(uc,a,void 0))||l||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,b]of c)this.g.setRequestHeader(R,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Oi(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){Di(this,R)}};function Di(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Ni(s),kn(s)}function Ni(s){s.A||(s.A=!0,Et(s,"complete"),Et(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Et(this,"complete"),Et(this,"abort"),kn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kn(this,!0)),Y.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ki(this):this.bb())},n.bb=function(){ki(this)};function ki(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Ot(s)!=4||s.Z()!=2)){if(s.u&&Ot(s)==4)ei(s.Ea,0,s);else if(Et(s,"readystatechange"),Ot(s)==4){s.h=!1;try{const b=s.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var l;if(l=b===0){var T=String(s.D).match(wi)[1]||null;!T&&h.self&&h.self.location&&(T=h.self.location.protocol.slice(0,-1)),l=!ac.test(T?T.toLowerCase():"")}c=l}if(c)Et(s,"complete"),Et(s,"success");else{s.m=6;try{var R=2<Ot(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",Ni(s)}}finally{kn(s)}}}}function kn(s,a){if(s.g){Oi(s);const c=s.g,l=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||Et(s,"ready");try{c.onreadystatechange=l}catch{}}}function Oi(s){s.I&&(h.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ot(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Bu(a)}};function xi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function cc(s){const a={};s=(s.g&&2<=Ot(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<s.length;l++){if(H(s[l]))continue;var c=E(s[l]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=a[T]||[];a[T]=R,R.push(c)}v(a,function(l){return l.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xe(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function Mi(s){this.Aa=0,this.i=[],this.j=new $e,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xe("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xe("baseRetryDelayMs",5e3,s),this.cb=Xe("retryDelaySeedMs",1e4,s),this.Wa=Xe("forwardChannelMaxRetries",2,s),this.wa=Xe("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new _i(s&&s.concurrentRequestLimit),this.Da=new ic,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Mi.prototype,n.la=8,n.G=1,n.connect=function(s,a,c,l){vt(0),this.W=s,this.H=a||{},c&&l!==void 0&&(this.H.OSID=c,this.H.OAID=l),this.F=this.X,this.I=Hi(this,null,this.W),xn(this)};function Br(s){if(Li(s),s.G==3){var a=s.U++,c=kt(s.I);if(K(c,"SID",s.K),K(c,"RID",a),K(c,"TYPE","terminate"),Ye(s,c),a=new Ft(s,s.j,a),a.L=2,a.v=Vn(kt(c)),c=!1,h.navigator&&h.navigator.sendBeacon)try{c=h.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&h.Image&&(new Image().src=a.v,c=!0),c||(a.g=Gi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Sn(a)}zi(s)}function On(s){s.g&&(qr(s),s.g.cancel(),s.g=null)}function Li(s){On(s),s.u&&(h.clearTimeout(s.u),s.u=null),Mn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&h.clearTimeout(s.s),s.s=null)}function xn(s){if(!yi(s.h)&&!s.s){s.s=!0;var a=s.Ga;Me||Xs(),Le||(Me(),Le=!0),vr.add(a,s),s.B=0}}function hc(s,a){return Ei(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=qe(w(s.Ga,s,a),$i(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new Ft(this,this.j,s);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(T.H=R,R=null),this.P)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var l=this.i[c];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break e}l=void 0}if(l===void 0)break;if(a+=l,4096<a){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=Ui(this,T,a),c=kt(this.I),K(c,"RID",s),K(c,"CVER",22),this.D&&K(c,"X-HTTP-Session-Id",this.D),Ye(this,c),R&&(this.O?a="headers="+encodeURIComponent(String(Vi(R)))+"&"+a:this.m&&Ur(c,this.m,R)),Fr(this.h,T),this.Ua&&K(c,"TYPE","init"),this.P?(K(c,"$req",a),K(c,"SID","null"),T.T=!0,Or(T,c,null)):Or(T,c,a),this.G=2}}else this.G==3&&(s?Fi(this,s):this.i.length==0||yi(this.h)||Fi(this))};function Fi(s,a){var c;a?c=a.l:c=s.U++;const l=kt(s.I);K(l,"SID",s.K),K(l,"RID",c),K(l,"AID",s.T),Ye(s,l),s.m&&s.o&&Ur(l,s.m,s.o),c=new Ft(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Ui(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Fr(s.h,c),Or(c,l,a)}function Ye(s,a){s.H&&ht(s.H,function(c,l){K(a,l,c)}),s.l&&Ii({},function(c,l){K(a,l,c)})}function Ui(s,a,c){c=Math.min(s.i.length,c);var l=s.l?w(s.l.Na,s.l,s):null;t:{var T=s.i;let R=-1;for(;;){const b=["count="+c];R==-1?0<c?(R=T[0].g,b.push("ofs="+R)):R=0:b.push("ofs="+R);let G=!0;for(let at=0;at<c;at++){let $=T[at].g;const ft=T[at].map;if($-=R,0>$)R=Math.max(0,T[at].g-100),G=!1;else try{oc(ft,b,"req"+$+"_")}catch{l&&l(ft)}}if(G){l=b.join("&");break t}}}return s=s.i.splice(0,c),a.D=s,l}function Bi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Me||Xs(),Le||(Me(),Le=!0),vr.add(a,s),s.v=0}}function jr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=qe(w(s.Fa,s),$i(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,ji(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=qe(w(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),On(this),ji(this))};function qr(s){s.A!=null&&(h.clearTimeout(s.A),s.A=null)}function ji(s){s.g=new Ft(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=kt(s.qa);K(a,"RID","rpc"),K(a,"SID",s.K),K(a,"AID",s.T),K(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&K(a,"TO",s.ja),K(a,"TYPE","xmlhttp"),Ye(s,a),s.m&&s.o&&Ur(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=Vn(kt(a)),c.m=null,c.P=!0,mi(c,s)}n.Za=function(){this.C!=null&&(this.C=null,On(this),jr(this),vt(19))};function Mn(s){s.C!=null&&(h.clearTimeout(s.C),s.C=null)}function qi(s,a){var c=null;if(s.g==a){Mn(s),qr(s),s.g=null;var l=2}else if(Lr(s.h,a))c=a.D,vi(s.h,a),l=1;else return;if(s.G!=0){if(a.o)if(l==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;l=An(),Et(l,new hi(l,c)),xn(s)}else Bi(s);else if(T=a.s,T==3||T==0&&0<a.X||!(l==1&&hc(s,a)||l==2&&jr(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),T){case 1:ie(s,5);break;case 4:ie(s,10);break;case 3:ie(s,6);break;default:ie(s,2)}}}function $i(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function ie(s,a){if(s.j.info("Error code "+a),a==2){var c=w(s.fb,s),l=s.Xa;const T=!l;l=new se(l||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Pn(l,"https"),Vn(l),T?rc(l.toString(),c):sc(l.toString(),c)}else vt(2);s.G=0,s.l&&s.l.sa(a),zi(s),Li(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function zi(s){if(s.G=0,s.ka=[],s.l){const a=Ti(s.h);(a.length!=0||s.i.length!=0)&&(N(s.ka,a),N(s.ka,s.i),s.h.i.length=0,M(s.i),s.i.length=0),s.l.ra()}}function Hi(s,a,c){var l=c instanceof se?kt(c):new se(c);if(l.g!="")a&&(l.g=a+"."+l.g),bn(l,l.s);else{var T=h.location;l=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var R=new se(null);l&&Pn(R,l),a&&(R.g=a),T&&bn(R,T),c&&(R.l=c),l=R}return c=s.D,a=s.ya,c&&a&&K(l,c,a),K(l,"VER",s.la),Ye(s,l),l}function Gi(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Y(new Dn({eb:c})):new Y(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ki(){}n=Ki.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ln(){}Ln.prototype.g=function(s,a){return new wt(s,a)};function wt(s,a){dt.call(this),this.g=new Mi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!H(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!H(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new me(this)}k(wt,dt),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Br(this.g)},wt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=Pr(s),s=c);a.i.push(new Ku(a.Ya++,s)),a.G==3&&xn(a)},wt.prototype.N=function(){this.g.l=null,delete this.j,Br(this.g),delete this.g,wt.aa.N.call(this)};function Qi(s){Vr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const c in a){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}k(Qi,Vr);function Wi(){Dr.call(this),this.status=1}k(Wi,Dr);function me(s){this.g=s}k(me,Ki),me.prototype.ua=function(){Et(this.g,"a")},me.prototype.ta=function(s){Et(this.g,new Qi(s))},me.prototype.sa=function(s){Et(this.g,new Wi)},me.prototype.ra=function(){Et(this.g,"b")},Ln.prototype.createWebChannel=Ln.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,Ta=function(){return new Ln},va=function(){return An()},Ea=ne,os={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Rn.NO_ERROR=0,Rn.TIMEOUT=8,Rn.HTTP_ERROR=6,zn=Rn,li.COMPLETE="complete",ya=li,oi.EventType=Be,Be.OPEN="a",Be.CLOSE="b",Be.ERROR="c",Be.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Je=oi,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,_a=Y}).apply(typeof Un<"u"?Un:typeof self<"u"?self:typeof window<"u"?window:{});const uo="@firebase/firestore",co="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ne="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new la("@firebase/firestore");function ge(){return he.logLevel}function V(n,...t){if(he.logLevel<=B.DEBUG){const e=t.map(Ss);he.debug(`Firestore (${Ne}): ${n}`,...e)}}function Mt(n,...t){if(he.logLevel<=B.ERROR){const e=t.map(Ss);he.error(`Firestore (${Ne}): ${n}`,...e)}}function Ae(n,...t){if(he.logLevel<=B.WARN){const e=t.map(Ss);he.warn(`Firestore (${Ne}): ${n}`,...e)}}function Ss(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Ia(n,r,e)}function Ia(n,t,e){let r=`FIRESTORE (${Ne}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Mt(r),new Error(r)}function X(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Ia(t,i,r)}function j(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends De{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Xh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(gt.UNAUTHENTICATED)))}shutdown(){}}class Yh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Jh{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0,42304);let r=this.i;const i=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Gt,t.enqueueRetryable((()=>i(this.currentUser)))};const u=()=>{const d=o;t.enqueueRetryable((async()=>{await d.promise,await i(this.currentUser)}))},h=d=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((d=>h(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?h(d):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Gt)}}),0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new wa(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string",2055,{h:t}),new gt(t)}}class Zh{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class tl{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Zh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ho{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class el{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Oh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){X(this.o===void 0,3512);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ho(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(X(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ho(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=nl(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function F(n,t){return n<t?-1:n>t?1:0}function as(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return Wr(i)===Wr(o)?F(i,o):Wr(i)?1:-1}return F(n.length,t.length)}const rl=55296,sl=57343;function Wr(n){const t=n.charCodeAt(0);return t>=rl&&t<=sl}function Re(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="__name__";class Ct{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ct.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ct?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Ct.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return F(t.length,e.length)}static compareSegments(t,e){const r=Ct.isNumericId(t),i=Ct.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Ct.extractNumericId(t).compare(Ct.extractNumericId(e)):as(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ht.fromString(t.substring(4,t.length-2))}}class Q extends Ct{construct(t,e,r){return new Q(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new Q(e)}static emptyPath(){return new Q([])}}const il=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends Ct{construct(t,e,r){return new Tt(t,e,r)}static isValidIdentifier(t){return il.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lo}static keyField(){return new Tt([lo])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new D(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new D(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,i+=2}else h==="`"?(u=!u,i++):h!=="."||u?(r+=h,i++):(o(),i++)}if(o(),u)throw new D(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Tt(e)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Q.fromString(t))}static fromName(t){return new O(Q.fromString(t).popFirst(5))}static empty(){return new O(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Q(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n,t,e){if(!e)throw new D(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function ol(n,t,e,r){if(t===!0&&r===!0)throw new D(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function fo(n){if(!O.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function mo(n){if(O.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function al(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ul(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function hn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new D(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ul(n);throw new D(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(n,t){const e={typeString:n};return t&&(e.value=t),e}function pn(n,t){if(!al(n))throw new D(S.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const u=n[r];if(i&&typeof u!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&u!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new D(S.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=-62135596800,go=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*go);return new et(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<po)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/go}_compareTo(t){return this.seconds===t.seconds?F(this.nanoseconds,t.nanoseconds):F(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(pn(t,et._jsonSchema))return new et(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-po;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}et._jsonSchemaVersion="firestore/timestamp/1.0",et._jsonSchema={type:nt("string",et._jsonSchemaVersion),seconds:nt("number"),nanoseconds:nt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static fromTimestamp(t){return new x(t)}static min(){return new x(new et(0,0))}static max(){return new x(new et(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=-1;function cl(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=x.fromTimestamp(r===1e9?new et(e+1,0):new et(e,r));return new Xt(i,O.empty(),t)}function hl(n){return new Xt(n.readTime,n.key,ln)}class Xt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Xt(x.min(),O.empty(),ln)}static max(){return new Xt(x.max(),O.empty(),ln)}}function ll(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:F(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==dl)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):C.reject(e)}static resolve(t){return new C(((e,r)=>{e(t)}))}static reject(t){return new C(((e,r)=>{r(t)}))}static waitFor(t){return new C(((e,r)=>{let i=0,o=0,u=!1;t.forEach((h=>{++i,h.next((()=>{++o,u&&o===i&&e()}),(d=>r(d)))})),u=!0,o===i&&e()}))}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next((i=>i?C.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new C(((r,i)=>{const o=t.length,u=new Array(o);let h=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next((_=>{u[f]=_,++h,h===o&&r(u)}),(_=>i(_)))}}))}static doWhile(t,e){return new C(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function ml(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ke(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}ur.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=-1;function cr(n){return n==null}function us(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="";function gl(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=_o(t)),t=_l(n.get(e),t);return _o(t)}function _l(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case Ra:e+="";break;default:e+=o}}return e}function _o(n){return n+Ra+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function gn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function yl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Bn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Bn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Bn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Bn(this.root,t,this.comparator,!0)}}class Bn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ut.RED,this.left=i??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ut(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Eo(this.data.getIterator())}getIteratorFrom(t){return new Eo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class Eo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.fields=t,t.sort(Tt.comparator)}static empty(){return new jt([])}unionWith(t){let e=new st(Tt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new jt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Re(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ca("Invalid base64 string: "+o):o}})(t);return new ct(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o})(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return F(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const El=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yt(n){if(X(!!n,39018),typeof n=="string"){let t=0;const e=El.exec(n);if(X(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:J(n.seconds),nanos:J(n.nanos)}}function J(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jt(n){return typeof n=="string"?ct.fromBase64String(n):ct.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="server_timestamp",Pa="__type__",ba="__previous_value__",Va="__local_write_time__";function bs(n){return(n?.mapValue?.fields||{})[Pa]?.stringValue===Sa}function hr(n){const t=n.mapValue.fields[ba];return bs(t)?hr(t):t}function dn(n){const t=Yt(n.mapValue.fields[Va].timestampValue);return new et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,e,r,i,o,u,h,d,f,_){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=d,this.useFetchStreams=f,this.isUsingEmulator=_}}const Zn="(default)";class fn{constructor(t,e){this.projectId=t,this.database=e||Zn}static empty(){return new fn("","")}get isDefaultDatabase(){return this.database===Zn}isEqual(t){return t instanceof fn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="__type__",Il="__max__",jn={mapValue:{}},wl="__vector__",cs="value";function Zt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bs(n)?4:Rl(n)?9007199254740991:Al(n)?10:11:L(28295,{value:n})}function Vt(n,t){if(n===t)return!0;const e=Zt(n);if(e!==Zt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return dn(n).isEqual(dn(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Yt(i.timestampValue),h=Yt(o.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return Jt(i.bytesValue).isEqual(Jt(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return J(i.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return J(i.integerValue)===J(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=J(i.doubleValue),h=J(o.doubleValue);return u===h?us(u)===us(h):isNaN(u)&&isNaN(h)}return!1})(n,t);case 9:return Re(n.arrayValue.values||[],t.arrayValue.values||[],Vt);case 10:case 11:return(function(i,o){const u=i.mapValue.fields||{},h=o.mapValue.fields||{};if(yo(u)!==yo(h))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(h[d]===void 0||!Vt(u[d],h[d])))return!1;return!0})(n,t);default:return L(52216,{left:n})}}function mn(n,t){return(n.values||[]).find((e=>Vt(e,t)))!==void 0}function Ce(n,t){if(n===t)return 0;const e=Zt(n),r=Zt(t);if(e!==r)return F(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return F(n.booleanValue,t.booleanValue);case 2:return(function(o,u){const h=J(o.integerValue||o.doubleValue),d=J(u.integerValue||u.doubleValue);return h<d?-1:h>d?1:h===d?0:isNaN(h)?isNaN(d)?0:-1:1})(n,t);case 3:return vo(n.timestampValue,t.timestampValue);case 4:return vo(dn(n),dn(t));case 5:return as(n.stringValue,t.stringValue);case 6:return(function(o,u){const h=Jt(o),d=Jt(u);return h.compareTo(d)})(n.bytesValue,t.bytesValue);case 7:return(function(o,u){const h=o.split("/"),d=u.split("/");for(let f=0;f<h.length&&f<d.length;f++){const _=F(h[f],d[f]);if(_!==0)return _}return F(h.length,d.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,u){const h=F(J(o.latitude),J(u.latitude));return h!==0?h:F(J(o.longitude),J(u.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return To(n.arrayValue,t.arrayValue);case 10:return(function(o,u){const h=o.fields||{},d=u.fields||{},f=h[cs]?.arrayValue,_=d[cs]?.arrayValue,A=F(f?.values?.length||0,_?.values?.length||0);return A!==0?A:To(f,_)})(n.mapValue,t.mapValue);case 11:return(function(o,u){if(o===jn.mapValue&&u===jn.mapValue)return 0;if(o===jn.mapValue)return 1;if(u===jn.mapValue)return-1;const h=o.fields||{},d=Object.keys(h),f=u.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let A=0;A<d.length&&A<_.length;++A){const w=as(d[A],_[A]);if(w!==0)return w;const P=Ce(h[d[A]],f[_[A]]);if(P!==0)return P}return F(d.length,_.length)})(n.mapValue,t.mapValue);default:throw L(23264,{he:e})}}function vo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return F(n,t);const e=Yt(n),r=Yt(t),i=F(e.seconds,r.seconds);return i!==0?i:F(e.nanos,r.nanos)}function To(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ce(e[i],r[i]);if(o)return o}return F(e.length,r.length)}function Se(n){return hs(n)}function hs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=Yt(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Jt(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return O.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=hs(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of r)o?o=!1:i+=",",i+=`${u}:${hs(e.fields[u])}`;return i+"}"})(n.mapValue):L(61005,{value:n})}function Hn(n){switch(Zt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=hr(n);return t?16+Hn(t):16;case 5:return 2*n.stringValue.length;case 6:return Jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+Hn(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return gn(r.fields,((o,u)=>{i+=o.length+Hn(u)})),i})(n.mapValue);default:throw L(13486,{value:n})}}function ls(n){return!!n&&"integerValue"in n}function Vs(n){return!!n&&"arrayValue"in n}function Io(n){return!!n&&"nullValue"in n}function wo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Xr(n){return!!n&&"mapValue"in n}function Al(n){return(n?.mapValue?.fields||{})[Tl]?.stringValue===wl}function rn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return gn(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=rn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=rn(n.arrayValue.values[e]);return t}return{...n}}function Rl(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Il}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.value=t}static empty(){return new St({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Xr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=rn(e)}setAll(t){let e=Tt.emptyPath(),r={},i=[];t.forEach(((u,h)=>{if(!e.isImmediateParentOf(h)){const d=this.getFieldsMap(e);this.applyChanges(d,r,i),r={},i=[],e=h.popLast()}u?r[h.lastSegment()]=rn(u):i.push(h.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Xr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Vt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Xr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){gn(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new St(rn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,r,i,o,u,h){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=u,this.documentState=h}static newInvalidDocument(t){return new _t(t,0,x.min(),x.min(),x.min(),St.empty(),0)}static newFoundDocument(t,e,r,i){return new _t(t,1,e,x.min(),r,i,0)}static newNoDocument(t,e){return new _t(t,2,e,x.min(),x.min(),St.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,x.min(),x.min(),St.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e){this.position=t,this.inclusive=e}}function Ao(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],u=n.position[i];if(o.field.isKeyField()?r=O.comparator(O.fromName(u.referenceValue),e.key):r=Ce(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ro(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Vt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,e="asc"){this.field=t,this.dir=e}}function Cl(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{}class rt extends Da{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Pl(t,e,r):e==="array-contains"?new Dl(t,r):e==="in"?new Nl(t,r):e==="not-in"?new kl(t,r):e==="array-contains-any"?new Ol(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new bl(t,r):new Vl(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ce(e,this.value)):e!==null&&Zt(this.value)===Zt(e)&&this.matchesComparison(Ce(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends Da{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Dt(t,e)}matches(t){return Na(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Na(n){return n.op==="and"}function ka(n){return Sl(n)&&Na(n)}function Sl(n){for(const t of n.filters)if(t instanceof Dt)return!1;return!0}function ds(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+Se(n.value);if(ka(n))return n.filters.map((t=>ds(t))).join(",");{const t=n.filters.map((e=>ds(e))).join(",");return`${n.op}(${t})`}}function Oa(n,t){return n instanceof rt?(function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&Vt(r.value,i.value)})(n,t):n instanceof Dt?(function(r,i){return i instanceof Dt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,u,h)=>o&&Oa(u,i.filters[h])),!0):!1})(n,t):void L(19439)}function xa(n){return n instanceof rt?(function(e){return`${e.field.canonicalString()} ${e.op} ${Se(e.value)}`})(n):n instanceof Dt?(function(e){return e.op.toString()+" {"+e.getFilters().map(xa).join(" ,")+"}"})(n):"Filter"}class Pl extends rt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class bl extends rt{constructor(t,e){super(t,"in",e),this.keys=Ma("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Vl extends rt{constructor(t,e){super(t,"not-in",e),this.keys=Ma("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ma(n,t){return(t.arrayValue?.values||[]).map((e=>O.fromName(e.referenceValue)))}class Dl extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Vs(e)&&mn(e.arrayValue,this.value)}}class Nl extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&mn(this.value.arrayValue,e)}}class kl extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(mn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!mn(this.value.arrayValue,e)}}class Ol extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Vs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>mn(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t,e=null,r=[],i=[],o=null,u=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=u,this.endAt=h,this.Te=null}}function Co(n,t=null,e=[],r=[],i=null,o=null,u=null){return new xl(n,t,e,r,i,o,u)}function Ds(n){const t=j(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>ds(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),cr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Se(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Se(r))).join(",")),t.Te=e}return t.Te}function Ns(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Cl(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Oa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ro(n.startAt,t.startAt)&&Ro(n.endAt,t.endAt)}function fs(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,e=null,r=[],i=[],o=null,u="F",h=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=u,this.startAt=h,this.endAt=d,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ml(n,t,e,r,i,o,u,h){return new lr(n,t,e,r,i,o,u,h)}function ks(n){return new lr(n)}function So(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ll(n){return n.collectionGroup!==null}function sn(n){const t=j(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new st(Tt.comparator);return u.filters.forEach((d=>{d.getFlattenedFilters().forEach((f=>{f.isInequality()&&(h=h.add(f.field))}))})),h})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new er(o,r))})),e.has(Tt.keyField().canonicalString())||t.Ie.push(new er(Tt.keyField(),r))}return t.Ie}function bt(n){const t=j(n);return t.Ee||(t.Ee=Fl(t,sn(n))),t.Ee}function Fl(n,t){if(n.limitType==="F")return Co(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new er(i.field,o)}));const e=n.endAt?new tr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new tr(n.startAt.position,n.startAt.inclusive):null;return Co(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ms(n,t,e){return new lr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function dr(n,t){return Ns(bt(n),bt(t))&&n.limitType===t.limitType}function La(n){return`${Ds(bt(n))}|lt:${n.limitType}`}function _e(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>xa(i))).join(", ")}]`),cr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>Se(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>Se(i))).join(",")),`Target(${r})`})(bt(n))}; limitType=${n.limitType})`}function fr(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of sn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(u,h,d){const f=Ao(u,h,d);return u.inclusive?f<=0:f<0})(r.startAt,sn(r),i)||r.endAt&&!(function(u,h,d){const f=Ao(u,h,d);return u.inclusive?f>=0:f>0})(r.endAt,sn(r),i))})(n,t)}function Ul(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Fa(n){return(t,e)=>{let r=!1;for(const i of sn(n)){const o=Bl(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Bl(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):(function(o,u,h){const d=u.data.field(o),f=h.data.field(o);return d!==null&&f!==null?Ce(d,f):L(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){gn(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return yl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new Z(O.comparator);function te(){return jl}const Ua=new Z(O.comparator);function Ze(...n){let t=Ua;for(const e of n)t=t.insert(e.key,e);return t}function ql(n){let t=Ua;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function ae(){return on()}function Ba(){return on()}function on(){return new le((n=>n.toString()),((n,t)=>n.isEqual(t)))}const $l=new st(O.comparator);function q(...n){let t=$l;for(const e of n)t=t.add(e);return t}const zl=new st(F);function Hl(){return zl}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:us(t)?"-0":t}}function Kl(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this._=void 0}}function Ql(n,t,e){return n instanceof ps?(function(i,o){const u={fields:{[Pa]:{stringValue:Sa},[Va]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&bs(o)&&(o=hr(o)),o&&(u.fields[ba]=o),{mapValue:u}})(e,t):n instanceof nr?ja(n,t):n instanceof rr?qa(n,t):(function(i,o){const u=Xl(i,o),h=Po(u)+Po(i.Ae);return ls(u)&&ls(i.Ae)?Kl(h):Gl(i.serializer,h)})(n,t)}function Wl(n,t,e){return n instanceof nr?ja(n,t):n instanceof rr?qa(n,t):e}function Xl(n,t){return n instanceof gs?(function(r){return ls(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class ps extends mr{}class nr extends mr{constructor(t){super(),this.elements=t}}function ja(n,t){const e=$a(t);for(const r of n.elements)e.some((i=>Vt(i,r)))||e.push(r);return{arrayValue:{values:e}}}class rr extends mr{constructor(t){super(),this.elements=t}}function qa(n,t){let e=$a(t);for(const r of n.elements)e=e.filter((i=>!Vt(i,r)));return{arrayValue:{values:e}}}class gs extends mr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Po(n){return J(n.integerValue||n.doubleValue)}function $a(n){return Vs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Yl(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof nr&&i instanceof nr||r instanceof rr&&i instanceof rr?Re(r.elements,i.elements,Vt):r instanceof gs&&i instanceof gs?Vt(r.Ae,i.Ae):r instanceof ps&&i instanceof ps})(n.transform,t.transform)}class ue{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ue}static exists(t){return new ue(void 0,t)}static updateTime(t){return new ue(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Gn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Os{}function za(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Zl(n.key,ue.none()):new xs(n.key,n.data,ue.none());{const e=n.data,r=St.empty();let i=new st(Tt.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),i=i.add(o)}return new pr(n.key,r,new jt(i.toArray()),ue.none())}}function Jl(n,t,e){n instanceof xs?(function(i,o,u){const h=i.value.clone(),d=Vo(i.fieldTransforms,o,u.transformResults);h.setAll(d),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()})(n,t,e):n instanceof pr?(function(i,o,u){if(!Gn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const h=Vo(i.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(Ha(i)),d.setAll(h),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,t,e):(function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()})(0,t,e)}function an(n,t,e,r){return n instanceof xs?(function(o,u,h,d){if(!Gn(o.precondition,u))return h;const f=o.value.clone(),_=Do(o.fieldTransforms,d,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null})(n,t,e,r):n instanceof pr?(function(o,u,h,d){if(!Gn(o.precondition,u))return h;const f=Do(o.fieldTransforms,d,u),_=u.data;return _.setAll(Ha(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((A=>A.field)))})(n,t,e,r):(function(o,u,h){return Gn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h})(n,t,e)}function bo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Re(r,i,((o,u)=>Yl(o,u)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class xs extends Os{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pr extends Os{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ha(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Vo(n,t,e){const r=new Map;X(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let i=0;i<e.length;i++){const o=n[i],u=o.transform,h=t.data.field(o.field);r.set(o.field,Wl(u,h,e[i]))}return r}function Do(n,t,e){const r=new Map;for(const i of n){const o=i.transform,u=e.data.field(i.field);r.set(i.field,Ql(o,u,t))}return r}class Zl extends Os{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Jl(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=an(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=an(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ba();return this.mutations.forEach((i=>{const o=t.get(i.key),u=o.overlayedDocument;let h=this.applyToLocalView(u,o.mutatedFields);h=e.has(i.key)?null:h;const d=za(u,h);d!==null&&r.set(i.key,d),u.isValidDocument()||u.convertToNoDocument(x.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),q())}isEqual(t){return this.batchId===t.batchId&&Re(this.mutations,t.mutations,((e,r)=>bo(e,r)))&&Re(this.baseMutations,t.baseMutations,((e,r)=>bo(e,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,U;function Ga(n){if(n===void 0)return Mt("GRPC error has no .code"),S.UNKNOWN;switch(n){case tt.OK:return S.OK;case tt.CANCELLED:return S.CANCELLED;case tt.UNKNOWN:return S.UNKNOWN;case tt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case tt.INTERNAL:return S.INTERNAL;case tt.UNAVAILABLE:return S.UNAVAILABLE;case tt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case tt.NOT_FOUND:return S.NOT_FOUND;case tt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case tt.ABORTED:return S.ABORTED;case tt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case tt.DATA_LOSS:return S.DATA_LOSS;default:return L(39323,{code:n})}}(U=tt||(tt={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=new Ht([4294967295,4294967295],0);function No(n){const t=rd().encode(n),e=new ga;return e.update(t),new Uint8Array(e.digest())}function ko(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Ht([e,r],0),new Ht([i,o],0)]}class Ms{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new tn(`Invalid padding: ${e}`);if(r<0)throw new tn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new tn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new tn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Ht.fromNumber(this.ge)}ye(t,e,r){let i=t.add(e.multiply(Ht.fromNumber(r)));return i.compare(sd)===1&&(i=new Ht([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=No(t),[r,i]=ko(e);for(let o=0;o<this.hashCount;o++){const u=this.ye(r,i,o);if(!this.we(u))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Ms(o,i,e);return r.forEach((h=>u.insert(h))),u}insert(t){if(this.ge===0)return;const e=No(t),[r,i]=ko(e);for(let o=0;o<this.hashCount;o++){const u=this.ye(r,i,o);this.Se(u)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class tn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,_n.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new gr(x.min(),i,new Z(F),te(),q())}}class _n{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new _n(r,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e,r,i){this.be=t,this.removedTargetIds=e,this.key=r,this.De=i}}class Ka{constructor(t,e){this.targetId=t,this.Ce=e}}class Qa{constructor(t,e,r=ct.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Oo{constructor(){this.ve=0,this.Fe=xo(),this.Me=ct.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=q(),e=q(),r=q();return this.Fe.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:L(38017,{changeType:o})}})),new _n(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=xo()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class id{constructor(t){this.Ge=t,this.ze=new Map,this.je=te(),this.Je=qn(),this.He=qn(),this.Ye=new Z(F)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:L(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,i)=>{this.rt(i)&&e(i)}))}st(t){const e=t.targetId,r=t.Ce.count,i=this.ot(e);if(i){const o=i.target;if(fs(o))if(r===0){const u=new O(o.path);this.et(e,u,_t.newNoDocument(u,x.min()))}else X(r===1,20013,{expectedCount:r});else{const u=this._t(e);if(u!==r){const h=this.ut(t),d=h?this.ct(h,t,u):1;if(d!==0){this.it(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,f)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let u,h;try{u=Jt(r).toUint8Array()}catch(d){if(d instanceof Ca)return Ae("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{h=new Ms(u,i,o)}catch(d){return Ae(d instanceof tn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return h.ge===0?null:h}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let i=0;return r.forEach((o=>{const u=this.Ge.ht(),h=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(h)||(this.et(e,o,null),i++)})),i}Tt(t){const e=new Map;this.ze.forEach(((o,u)=>{const h=this.ot(u);if(h){if(o.current&&fs(h.target)){const d=new O(h.target.path);this.It(d).has(u)||this.Et(u,d)||this.et(u,d,_t.newNoDocument(d,t))}o.Be&&(e.set(u,o.ke()),o.qe())}}));let r=q();this.He.forEach(((o,u)=>{let h=!0;u.forEachWhile((d=>{const f=this.ot(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)})),h&&(r=r.add(o))})),this.je.forEach(((o,u)=>u.setReadTime(t)));const i=new gr(t,e,this.Ye,this.je,r);return this.je=te(),this.Je=qn(),this.He=qn(),this.Ye=new Z(F),i}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,e)?i.Qe(e,1):i.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Oo,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new st(F),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new st(F),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Oo),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function qn(){return new Z(O.comparator)}function xo(){return new Z(O.comparator)}const od={asc:"ASCENDING",desc:"DESCENDING"},ad={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ud={and:"AND",or:"OR"};class cd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function _s(n,t){return n.useProto3Json||cr(t)?t:{value:t}}function hd(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ld(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Te(n){return X(!!n,49232),x.fromTimestamp((function(e){const r=Yt(e);return new et(r.seconds,r.nanos)})(n))}function dd(n,t){return ys(n,t).canonicalString()}function ys(n,t){const e=(function(i){return new Q(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Wa(n){const t=Q.fromString(n);return X(tu(t),10190,{key:t.toString()}),t}function Yr(n,t){const e=Wa(t);if(e.get(1)!==n.databaseId.projectId)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Ya(e))}function Xa(n,t){return dd(n.databaseId,t)}function fd(n){const t=Wa(n);return t.length===4?Q.emptyPath():Ya(t)}function Mo(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ya(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function md(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L(39313,{state:f})})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(f,_){return f.useProto3Json?(X(_===void 0||typeof _=="string",58123),ct.fromBase64String(_||"")):(X(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),ct.fromUint8Array(_||new Uint8Array))})(n,t.targetChange.resumeToken),u=t.targetChange.cause,h=u&&(function(f){const _=f.code===void 0?S.UNKNOWN:Ga(f.code);return new D(_,f.message||"")})(u);e=new Qa(r,i,o,h||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Yr(n,r.document.name),o=Te(r.document.updateTime),u=r.document.createTime?Te(r.document.createTime):x.min(),h=new St({mapValue:{fields:r.document.fields}}),d=_t.newFoundDocument(i,o,u,h),f=r.targetIds||[],_=r.removedTargetIds||[];e=new Kn(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Yr(n,r.document),o=r.readTime?Te(r.readTime):x.min(),u=_t.newNoDocument(i,o),h=r.removedTargetIds||[];e=new Kn([],h,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Yr(n,r.document),o=r.removedTargetIds||[];e=new Kn([],o,i,null)}else{if(!("filter"in t))return L(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,u=new nd(i,o),h=r.targetId;e=new Ka(h,u)}}return e}function pd(n,t){return{documents:[Xa(n,t.path)]}}function gd(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Xa(n,i);const o=(function(f){if(f.length!==0)return Za(Dt.create(f,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const u=(function(f){if(f.length!==0)return f.map((_=>(function(w){return{field:ye(w.field),direction:Ed(w.dir)}})(_)))})(t.orderBy);u&&(e.structuredQuery.orderBy=u);const h=_s(n,t.limit);return h!==null&&(e.structuredQuery.limit=h),t.startAt&&(e.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(t.endAt)),{ft:e,parent:i}}function _d(n){let t=fd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){X(r===1,65062);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=(function(A){const w=Ja(A);return w instanceof Dt&&ka(w)?w.getFilters():[w]})(e.where));let u=[];e.orderBy&&(u=(function(A){return A.map((w=>(function(k){return new er(Ee(k.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(w)))})(e.orderBy));let h=null;e.limit&&(h=(function(A){let w;return w=typeof A=="object"?A.value:A,cr(w)?null:w})(e.limit));let d=null;e.startAt&&(d=(function(A){const w=!!A.before,P=A.values||[];return new tr(P,w)})(e.startAt));let f=null;return e.endAt&&(f=(function(A){const w=!A.before,P=A.values||[];return new tr(P,w)})(e.endAt)),Ml(t,i,u,o,h,"F",d,f)}function yd(n,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:i})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ja(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ee(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ee(e.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ee(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Ee(e.unaryFilter.field);return rt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(e){return rt.create(Ee(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Dt.create(e.compositeFilter.filters.map((r=>Ja(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(n):L(30097,{filter:n})}function Ed(n){return od[n]}function vd(n){return ad[n]}function Td(n){return ud[n]}function ye(n){return{fieldPath:n.canonicalString()}}function Ee(n){return Tt.fromServerFormat(n.fieldPath)}function Za(n){return n instanceof rt?(function(e){if(e.op==="=="){if(wo(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NAN"}};if(Io(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(wo(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NOT_NAN"}};if(Io(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ye(e.field),op:vd(e.op),value:e.value}}})(n):n instanceof Dt?(function(e){const r=e.getFilters().map((i=>Za(i)));return r.length===1?r[0]:{compositeFilter:{op:Td(e.op),filters:r}}})(n):L(54877,{filter:n})}function tu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,e,r,i,o=x.min(),u=x.min(),h=ct.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=d}withSequenceNumber(t){return new qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t){this.yt=t}}function wd(n){const t=_d({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ms(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this.Cn=new Rd}addToCollectionParentIndex(t,e){return this.Cn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Xt.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Xt.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Rd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new st(Q.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new st(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},eu=41943040;class It{static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(eu,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Pe(0)}static cr(){return new Pe(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="LruGarbageCollector",Cd=1048576;function Uo([n,t],[e,r]){const i=F(n,e);return i===0?F(t,r):i}class Sd{constructor(t){this.Ir=t,this.buffer=new st(Uo),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Uo(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Pd{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){V(Fo,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ke(e)?V(Fo,"Ignoring IndexedDB error during garbage collection: ",e):await ar(e)}await this.Vr(3e5)}))}}class bd{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return C.resolve(ur.ce);const r=new Sd(e);return this.mr.forEachTarget(t,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(t,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Lo)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Lo):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,i,o,u,h,d,f;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,u=Date.now(),this.nthSequenceNumber(t,i)))).next((A=>(r=A,h=Date.now(),this.removeTargets(t,r,e)))).next((A=>(o=A,d=Date.now(),this.removeOrphanedDocuments(t,r)))).next((A=>(f=Date.now(),ge()<=B.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${i} in `+(h-u)+`ms
	Removed ${o} targets in `+(d-h)+`ms
	Removed ${A} documents in `+(f-d)+`ms
Total Duration: ${f-_}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A}))))}}function Vd(n,t){return new bd(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.changes=new le((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&an(r.mutation,i,jt.empty(),et.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,q()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=q()){const i=ae();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let u=Ze();return o.forEach(((h,d)=>{u=u.insert(h,d.overlayedDocument)})),u}))))}getOverlayedDocuments(t,e){const r=ae();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,q())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((u,h)=>{e.set(u,h)}))}))}computeViews(t,e,r,i){let o=te();const u=on(),h=(function(){return on()})();return e.forEach(((d,f)=>{const _=r.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof pr)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),an(_.mutation,f,_.mutation.getFieldMask(),et.now())):u.set(f.key,jt.empty())})),this.recalculateAndSaveOverlays(t,o).next((d=>(d.forEach(((f,_)=>u.set(f,_))),e.forEach(((f,_)=>h.set(f,new Nd(_,u.get(f)??null)))),h)))}recalculateAndSaveOverlays(t,e){const r=on();let i=new Z(((u,h)=>u-h)),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((u=>{for(const h of u)h.keys().forEach((d=>{const f=e.get(d);if(f===null)return;let _=r.get(d)||jt.empty();_=h.applyToLocalView(f,_),r.set(d,_);const A=(i.get(h.batchId)||q()).add(d);i=i.insert(h.batchId,A)}))})).next((()=>{const u=[],h=i.getReverseIterator();for(;h.hasNext();){const d=h.getNext(),f=d.key,_=d.value,A=Ba();_.forEach((w=>{if(!o.has(w)){const P=za(e.get(w),r.get(w));P!==null&&A.set(w,P),o=o.add(w)}})),u.push(this.documentOverlayCache.saveOverlays(t,f,A))}return C.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ll(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):C.resolve(ae());let h=ln,d=o;return u.next((f=>C.forEach(f,((_,A)=>(h<A.largestBatchId&&(h=A.largestBatchId),o.get(_)?C.resolve():this.remoteDocumentCache.getEntry(t,_).next((w=>{d=d.insert(_,w)}))))).next((()=>this.populateOverlays(t,f,o))).next((()=>this.computeViews(t,d,f,q()))).next((_=>({batchId:h,changes:ql(_)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next((r=>{let i=Ze();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let u=Ze();return this.indexManager.getCollectionParents(t,o).next((h=>C.forEach(h,(d=>{const f=(function(A,w){return new lr(w,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next((_=>{_.forEach(((A,w)=>{u=u.insert(A,w)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((u=>{o.forEach(((d,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,_t.newInvalidDocument(_)))}));let h=Ze();return u.forEach(((d,f)=>{const _=o.get(d);_!==void 0&&an(_.mutation,f,jt.empty(),et.now()),fr(e,f)&&(h=h.insert(d,f))})),h}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return C.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:Te(i.createTime)}})(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(i){return{name:i.name,query:wd(i.bundledQuery),readTime:Te(i.readTime)}})(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.overlays=new Z(O.comparator),this.qr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ae();return C.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.St(t,e,o)})),C.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const i=ae(),o=e.length+1,u=new O(e.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const d=h.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return C.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Z(((f,_)=>f-_));const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=ae(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const h=ae(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((f,_)=>h.set(f,_))),!(h.size()>=i)););return C.resolve(h)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new ed(e,r));let o=this.qr.get(e);o===void 0&&(o=q(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.Qr=new st(it.$r),this.Ur=new st(it.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new it(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new it(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new O(new Q([])),r=new it(e,t),i=new it(e,t+1),o=[];return this.Ur.forEachInRange([r,i],(u=>{this.Gr(u),o.push(u.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new O(new Q([])),r=new it(e,t),i=new it(e,t+1);let o=q();return this.Ur.forEachInRange([r,i],(u=>{o=o.add(u.key)})),o}containsKey(t){const e=new it(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return O.comparator(t.key,e.key)||F(t.Yr,e.Yr)}static Kr(t,e){return F(t.Yr,e.Yr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new st(it.$r)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new td(o,e,r,i);this.mutationQueue.push(u);for(const h of i)this.Zr=this.Zr.add(new it(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return C.resolve(u)}lookupMutationBatch(t,e){return C.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ei(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?pl:this.tr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),i=new it(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],(u=>{const h=this.Xr(u.Yr);o.push(h)})),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new st(F);return e.forEach((i=>{const o=new it(i,0),u=new it(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,u],(h=>{r=r.add(h.Yr)}))})),C.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const u=new it(new O(o),0);let h=new st(F);return this.Zr.forEachWhile((d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(h=h.add(d.Yr)),!0)}),u),C.resolve(this.ti(h))}ti(t){const e=[];return t.forEach((r=>{const i=this.Xr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){X(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return C.forEach(e.mutations,(i=>{const o=new it(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new it(e,0),i=this.Zr.firstAfterOrEqual(r);return C.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t){this.ri=t,this.docs=(function(){return new Z(O.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,u=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=te();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():_t.newInvalidDocument(i))})),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=te();const u=e.path,h=new O(u.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(h);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||ll(hl(_),r)<=0||(i.has(_.key)||fr(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,i){L(9500)}ii(t,e){return C.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Ud(this)}getSize(t){return C.resolve(this.size)}}class Ud extends Dd{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)})),C.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t){this.persistence=t,this.si=new le((e=>Ds(e)),Ns),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.oi=0,this._i=new Ls,this.targetCount=0,this.ai=Pe.ur()}forEachTarget(t,e){return this.si.forEach(((r,i)=>e(i))),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),C.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Pe(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Pr(e),C.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.si.forEach(((u,h)=>{h.sequenceNumber<=e&&r.get(h.targetId)===null&&(this.si.delete(u),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)})),C.waitFor(o).next((()=>i))}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((u=>{o.push(i.markPotentiallyOrphaned(t,u))})),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t,e){this.ui={},this.overlays={},this.ci=new ur(0),this.li=!1,this.li=!0,this.hi=new Md,this.referenceDelegate=t(this),this.Pi=new Bd(this),this.indexManager=new Ad,this.remoteDocumentCache=(function(i){return new Fd(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Id(e),this.Ii=new Od(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new xd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new Ld(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const i=new jd(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(t,e){return C.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class jd extends fl{constructor(t){super(),this.currentSequenceNumber=t}}class Fs{constructor(t){this.persistence=t,this.Ri=new Ls,this.Vi=null}static mi(t){return new Fs(t)}get fi(){if(this.Vi)return this.Vi;throw L(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),C.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.fi,(r=>{const i=O.fromPath(r);return this.gi(t,i).next((o=>{o||e.removeEntry(i,x.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return C.or([()=>C.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class sr{constructor(t,e){this.persistence=t,this.pi=new le((r=>gl(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=Vd(this,e)}static mi(t,e){return new sr(t,e)}Ei(){}di(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((i=>r+i))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return C.forEach(this.pi,((r,i)=>this.br(t,r,i).next((o=>o?C.resolve():e(i)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,(u=>this.br(t,u,e).next((h=>{h||(r++,o.removeEntry(u,x.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),C.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Hn(t.data.value)),e}br(t,e,r){return C.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=i}static As(t,e){let r=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Us(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return bc()?8:ml(Rs())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ys(t,e).next((u=>{o.result=u})).next((()=>{if(!o.result)return this.ws(t,e,i,r).next((u=>{o.result=u}))})).next((()=>{if(o.result)return;const u=new qd;return this.Ss(t,e,u).next((h=>{if(o.result=h,this.Vs)return this.bs(t,e,u,h.size)}))})).next((()=>o.result))}bs(t,e,r,i){return r.documentReadCount<this.fs?(ge()<=B.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",_e(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),C.resolve()):(ge()<=B.DEBUG&&V("QueryEngine","Query:",_e(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(ge()<=B.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",_e(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,bt(e))):C.resolve())}ys(t,e){if(So(e))return C.resolve(null);let r=bt(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=ms(e,null,"F"),r=bt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const u=q(...o);return this.ps.getDocuments(t,u).next((h=>this.indexManager.getMinOffset(t,r).next((d=>{const f=this.Ds(e,h);return this.Cs(e,f,u,d.readTime)?this.ys(t,ms(e,null,"F")):this.vs(t,f,e,d)}))))})))))}ws(t,e,r,i){return So(e)||i.isEqual(x.min())?C.resolve(null):this.ps.getDocuments(t,r).next((o=>{const u=this.Ds(e,o);return this.Cs(e,u,r,i)?C.resolve(null):(ge()<=B.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_e(e)),this.vs(t,u,e,cl(i,ln)).next((h=>h)))}))}Ds(t,e){let r=new st(Fa(t));return e.forEach(((i,o)=>{fr(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return ge()<=B.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",_e(e)),this.ps.getDocumentsMatchingQuery(t,e,Xt.min(),r)}vs(t,e,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((u=>{o=o.insert(u.key,u)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="LocalStore",zd=3e8;class Hd{constructor(t,e,r,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new Z(F),this.xs=new le((o=>Ds(o)),Ns),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new kd(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function Gd(n,t,e,r){return new Hd(n,t,e,r)}async function ru(n,t){const e=j(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const u=[],h=[];let d=q();for(const f of i){u.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){h.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(r,d).next((f=>({Ls:f,removedBatchIds:u,addedBatchIds:h})))}))}))}function su(n){const t=j(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function Kd(n,t){const e=j(n),r=t.snapshotVersion;let i=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const u=e.Ns.newChangeBuffer({trackRemovals:!0});i=e.Ms;const h=[];t.targetChanges.forEach(((_,A)=>{const w=i.get(A);if(!w)return;h.push(e.Pi.removeMatchingKeys(o,_.removedDocuments,A).next((()=>e.Pi.addMatchingKeys(o,_.addedDocuments,A))));let P=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?P=P.withResumeToken(ct.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):_.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(_.resumeToken,r)),i=i.insert(A,P),(function(M,N,W){return M.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=zd?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0})(w,P,_)&&h.push(e.Pi.updateTargetData(o,P))}));let d=te(),f=q();if(t.documentUpdates.forEach((_=>{t.resolvedLimboDocuments.has(_)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))})),h.push(Qd(o,u,t.documentUpdates).next((_=>{d=_.ks,f=_.qs}))),!r.isEqual(x.min())){const _=e.Pi.getLastRemoteSnapshotVersion(o).next((A=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r)));h.push(_)}return C.waitFor(h).next((()=>u.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,d,f))).next((()=>d))})).then((o=>(e.Ms=i,o)))}function Qd(n,t,e){let r=q(),i=q();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let u=te();return e.forEach(((h,d)=>{const f=o.get(h);d.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(h)),d.isNoDocument()&&d.version.isEqual(x.min())?(t.removeEntry(h,d.readTime),u=u.insert(h,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(h,d)):V(Bs,"Ignoring outdated watch update for ",h,". Current version:",f.version," Watch version:",d.version)})),{ks:u,qs:i}}))}function Wd(n,t){const e=j(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return e.Pi.getTargetData(r,t).next((o=>o?(i=o,C.resolve(i)):e.Pi.allocateTargetId(r).next((u=>(i=new qt(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=e.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r}))}async function Es(n,t,e){const r=j(n),i=r.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(u=>r.persistence.referenceDelegate.removeTarget(u,i)))}catch(u){if(!ke(u))throw u;V(Bs,`Failed to update sequence numbers for target ${t}: ${u}`)}r.Ms=r.Ms.remove(t),r.xs.delete(i.target)}function Bo(n,t,e){const r=j(n);let i=x.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(d,f,_){const A=j(d),w=A.xs.get(_);return w!==void 0?C.resolve(A.Ms.get(w)):A.Pi.getTargetData(f,_)})(r,u,bt(t)).next((h=>{if(h)return i=h.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(u,h.targetId).next((d=>{o=d}))})).next((()=>r.Fs.getDocumentsMatchingQuery(u,t,e?i:x.min(),e?o:q()))).next((h=>(Xd(r,Ul(t),h),{documents:h,Qs:o})))))}function Xd(n,t,e){let r=n.Os.get(t)||x.min();e.forEach(((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Os.set(t,r)}class jo{constructor(){this.activeTargetIds=Hl()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Yd{constructor(){this.Mo=new jo,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new jo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="ConnectivityMonitor";class $o{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(qo,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){V(qo,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $n=null;function vs(){return $n===null?$n=(function(){return 268435456+Math.round(2147483648*Math.random())})():$n++,"0x"+$n.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="RestConnection",Zd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class tf{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Zn?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,e,r,i,o){const u=vs(),h=this.zo(t,e.toUriEncodedString());V(Jr,`Sending RPC '${t}' ${u}:`,h,r);const d={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(d,i,o);const{host:f}=new URL(h),_=As(f);return this.Jo(t,h,d,r,_).then((A=>(V(Jr,`Received RPC '${t}' ${u}: `,A),A)),(A=>{throw Ae(Jr,`RPC '${t}' ${u} failed with error: `,A,"url: ",h,"request:",r),A}))}Ho(t,e,r,i,o,u){return this.Go(t,e,r,i,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ne})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),r&&r.headers.forEach(((i,o)=>t[o]=i))}zo(t,e){const r=Zd[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class nf extends tf{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const u=vs();return new Promise(((h,d)=>{const f=new _a;f.setWithCredentials(!0),f.listenOnce(ya.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case zn.NO_ERROR:const A=f.getResponseJson();V(pt,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(A)),h(A);break;case zn.TIMEOUT:V(pt,`RPC '${t}' ${u} timed out`),d(new D(S.DEADLINE_EXCEEDED,"Request time out"));break;case zn.HTTP_ERROR:const w=f.getStatus();if(V(pt,`RPC '${t}' ${u} failed with status:`,w,"response text:",f.getResponseText()),w>0){let P=f.getResponseJson();Array.isArray(P)&&(P=P[0]);const k=P?.error;if(k&&k.status&&k.message){const M=(function(W){const H=W.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(H)>=0?H:S.UNKNOWN})(k.status);d(new D(M,k.message))}else d(new D(S.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new D(S.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:t,streamId:u,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{V(pt,`RPC '${t}' ${u} completed.`)}}));const _=JSON.stringify(i);V(pt,`RPC '${t}' ${u} sending request:`,i),f.send(e,"POST",_,r,15)}))}T_(t,e,r){const i=vs(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Ta(),h=va(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.jo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const _=o.join("");V(pt,`Creating RPC '${t}' stream ${i}: ${_}`,d);const A=u.createWebChannel(_,d);this.I_(A);let w=!1,P=!1;const k=new ef({Yo:N=>{P?V(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,N):(w||(V(pt,`Opening RPC '${t}' stream ${i} transport.`),A.open(),w=!0),V(pt,`RPC '${t}' stream ${i} sending:`,N),A.send(N))},Zo:()=>A.close()}),M=(N,W,H)=>{N.listen(W,(z=>{try{H(z)}catch(ot){setTimeout((()=>{throw ot}),0)}}))};return M(A,Je.EventType.OPEN,(()=>{P||(V(pt,`RPC '${t}' stream ${i} transport opened.`),k.o_())})),M(A,Je.EventType.CLOSE,(()=>{P||(P=!0,V(pt,`RPC '${t}' stream ${i} transport closed`),k.a_(),this.E_(A))})),M(A,Je.EventType.ERROR,(N=>{P||(P=!0,Ae(pt,`RPC '${t}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),k.a_(new D(S.UNAVAILABLE,"The operation could not be completed")))})),M(A,Je.EventType.MESSAGE,(N=>{if(!P){const W=N.data[0];X(!!W,16349);const H=W,z=H?.error||H[0]?.error;if(z){V(pt,`RPC '${t}' stream ${i} received error:`,z);const ot=z.status;let Rt=(function(m){const g=tt[m];if(g!==void 0)return Ga(g)})(ot),ht=z.message;Rt===void 0&&(Rt=S.INTERNAL,ht="Unknown error status: "+ot+" with message "+z.message),P=!0,k.a_(new D(Rt,ht)),A.close()}else V(pt,`RPC '${t}' stream ${i} received:`,W),k.u_(W)}})),M(h,Ea.STAT_EVENT,(N=>{N.stat===os.PROXY?V(pt,`RPC '${t}' stream ${i} detected buffering proxy`):N.stat===os.NOPROXY&&V(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{k.__()}),0),k}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function Zr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(n){return new cd(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="PersistentStream";class rf{constructor(t,e,r,i,o,u,h,d){this.Mi=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ou(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Mt(e.toString()),Mt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===e&&this.G_(r,i)}),(r=>{t((()=>{const i=new D(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return V(zo,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(V(zo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class sf extends rf{constructor(t,e,r,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=md(this.serializer,t),r=(function(o){if(!("targetChange"in o))return x.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?x.min():u.readTime?Te(u.readTime):x.min()})(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=Mo(this.serializer),e.addTarget=(function(o,u){let h;const d=u.target;if(h=fs(d)?{documents:pd(o,d)}:{query:gd(o,d).ft},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=ld(o,u.resumeToken);const f=_s(o,u.expectedCount);f!==null&&(h.expectedCount=f)}else if(u.snapshotVersion.compareTo(x.min())>0){h.readTime=hd(o,u.snapshotVersion.toTimestamp());const f=_s(o,u.expectedCount);f!==null&&(h.expectedCount=f)}return h})(this.serializer,t);const r=yd(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=Mo(this.serializer),e.removeTarget=t,this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{}class af extends of{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,u])=>this.connection.Go(t,ys(e,r),i,o,u))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(S.UNKNOWN,o.toString())}))}Ho(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Ho(t,ys(e,r),i,u,h,o))).catch((u=>{throw u.name==="FirebaseError"?(u.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new D(S.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class uf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Mt(e),this.aa=!1):V("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="RemoteStore";class cf{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((u=>{r.enqueueAndForget((async()=>{En(this)&&(V(be,"Restarting streams for network reachability change."),await(async function(d){const f=j(d);f.Ea.add(4),await yn(f),f.Ra.set("Unknown"),f.Ea.delete(4),await _r(f)})(this))}))})),this.Ra=new uf(r,i)}}async function _r(n){if(En(n))for(const t of n.da)await t(!0)}async function yn(n){for(const t of n.da)await t(!1)}function au(n,t){const e=j(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),zs(e)?$s(e):Oe(e).O_()&&qs(e,t))}function js(n,t){const e=j(n),r=Oe(e);e.Ia.delete(t),r.O_()&&uu(e,t),e.Ia.size===0&&(r.O_()?r.L_():En(e)&&e.Ra.set("Unknown"))}function qs(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(x.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Oe(n).Y_(t)}function uu(n,t){n.Va.Ue(t),Oe(n).Z_(t)}function $s(n){n.Va=new id({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Oe(n).start(),n.Ra.ua()}function zs(n){return En(n)&&!Oe(n).x_()&&n.Ia.size>0}function En(n){return j(n).Ea.size===0}function cu(n){n.Va=void 0}async function hf(n){n.Ra.set("Online")}async function lf(n){n.Ia.forEach(((t,e)=>{qs(n,t)}))}async function df(n,t){cu(n),zs(n)?(n.Ra.ha(t),$s(n)):n.Ra.set("Unknown")}async function ff(n,t,e){if(n.Ra.set("Online"),t instanceof Qa&&t.state===2&&t.cause)try{await(async function(i,o){const u=o.cause;for(const h of o.targetIds)i.Ia.has(h)&&(await i.remoteSyncer.rejectListen(h,u),i.Ia.delete(h),i.Va.removeTarget(h))})(n,t)}catch(r){V(be,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ho(n,r)}else if(t instanceof Kn?n.Va.Ze(t):t instanceof Ka?n.Va.st(t):n.Va.tt(t),!e.isEqual(x.min()))try{const r=await su(n.localStore);e.compareTo(r)>=0&&await(function(o,u){const h=o.Va.Tt(u);return h.targetChanges.forEach(((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.Ia.get(f);_&&o.Ia.set(f,_.withResumeToken(d.resumeToken,u))}})),h.targetMismatches.forEach(((d,f)=>{const _=o.Ia.get(d);if(!_)return;o.Ia.set(d,_.withResumeToken(ct.EMPTY_BYTE_STRING,_.snapshotVersion)),uu(o,d);const A=new qt(_.target,d,f,_.sequenceNumber);qs(o,A)})),o.remoteSyncer.applyRemoteEvent(h)})(n,e)}catch(r){V(be,"Failed to raise snapshot:",r),await Ho(n,r)}}async function Ho(n,t,e){if(!ke(t))throw t;n.Ea.add(1),await yn(n),n.Ra.set("Offline"),e||(e=()=>su(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{V(be,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await _r(n)}))}async function Go(n,t){const e=j(n);e.asyncQueue.verifyOperationInProgress(),V(be,"RemoteStore received new credentials");const r=En(e);e.Ea.add(3),await yn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await _r(e)}async function mf(n,t){const e=j(n);t?(e.Ea.delete(2),await _r(e)):t||(e.Ea.add(2),await yn(e),e.Ra.set("Unknown"))}function Oe(n){return n.ma||(n.ma=(function(e,r,i){const o=j(e);return o.sa(),new sf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:hf.bind(null,n),t_:lf.bind(null,n),r_:df.bind(null,n),H_:ff.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),zs(n)?$s(n):n.Ra.set("Unknown")):(await n.ma.stop(),cu(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const u=Date.now()+r,h=new Hs(t,e,u,i,o);return h.start(r),h}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hu(n,t){if(Mt("AsyncQueue",`${t}: ${n}`),ke(n))return new D(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static emptySet(t){return new Ie(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=Ze(),this.sortedSet=new Z(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ie)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ie;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.ga=new Z(O.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):L(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class Ve{constructor(t,e,r,i,o,u,h,d,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const u=[];return e.forEach((h=>{u.push({type:0,doc:h})})),new Ve(t,e,Ie.emptySet(e),u,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&dr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class gf{constructor(){this.queries=Qo(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=j(e),o=i.queries;i.queries=Qo(),o.forEach(((u,h)=>{for(const d of h.Sa)d.onError(r)}))})(this,new D(S.ABORTED,"Firestore shutting down"))}}function Qo(){return new le((n=>La(n)),dr)}async function lu(n,t){const e=j(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.ba()&&t.Da()&&(r=2):(o=new pf,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(i,!0);break;case 1:o.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const h=hu(u,`Initialization of query '${_e(t.query)}' failed`);return void t.onError(h)}e.queries.set(i,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&Gs(e)}async function du(n,t){const e=j(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const u=o.Sa.indexOf(t);u>=0&&(o.Sa.splice(u,1),o.Sa.length===0?i=t.Da()?0:1:!o.ba()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function _f(n,t){const e=j(n);let r=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const h of u.Sa)h.Fa(i)&&(r=!0);u.wa=i}}r&&Gs(e)}function yf(n,t,e){const r=j(n),i=r.queries.get(t);if(i)for(const o of i.Sa)o.onError(e);r.queries.delete(t)}function Gs(n){n.Ca.forEach((t=>{t.next()}))}var Ts,Wo;(Wo=Ts||(Ts={})).Ma="default",Wo.Cache="cache";class fu{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ve(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Ve.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Ts.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t){this.key=t}}class pu{constructor(t){this.key=t}}class Ef{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=q(),this.mutatedKeys=q(),this.eu=Fa(t),this.tu=new Ie(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new Ko,i=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,h=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((_,A)=>{const w=i.get(_),P=fr(this.query,A)?A:null,k=!!w&&this.mutatedKeys.has(w.key),M=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let N=!1;w&&P?w.data.isEqual(P.data)?k!==M&&(r.track({type:3,doc:P}),N=!0):this.su(w,P)||(r.track({type:2,doc:P}),N=!0,(d&&this.eu(P,d)>0||f&&this.eu(P,f)<0)&&(h=!0)):!w&&P?(r.track({type:0,doc:P}),N=!0):w&&!P&&(r.track({type:1,doc:w}),N=!0,(d||f)&&(h=!0)),N&&(P?(u=u.add(P),o=M?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{tu:u,iu:r,Cs:h,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const u=t.iu.ya();u.sort(((_,A)=>(function(P,k){const M=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Rt:N})}};return M(P)-M(k)})(_.type,A.type)||this.eu(_.doc,A.doc))),this.ou(r),i=i??!1;const h=e&&!i?this._u():[],d=this.Xa.size===0&&this.current&&!i?1:0,f=d!==this.Za;return this.Za=d,u.length!==0||f?{snapshot:new Ve(this.query,t.tu,o,u,t.mutatedKeys,d===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:h}:{au:h}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ko,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=q(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const e=[];return t.forEach((r=>{this.Xa.has(r)||e.push(new pu(r))})),this.Xa.forEach((r=>{t.has(r)||e.push(new mu(r))})),e}cu(t){this.Ya=t.Qs,this.Xa=q();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Ve.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ks="SyncEngine";class vf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Tf{constructor(t){this.key=t,this.hu=!1}}class If{constructor(t,e,r,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new le((h=>La(h)),dr),this.Iu=new Map,this.Eu=new Set,this.du=new Z(O.comparator),this.Au=new Map,this.Ru=new Ls,this.Vu={},this.mu=new Map,this.fu=Pe.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function wf(n,t,e=!0){const r=vu(n);let i;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await gu(r,t,e,!0),i}async function Af(n,t){const e=vu(n);await gu(e,t,!0,!1)}async function gu(n,t,e,r){const i=await Wd(n.localStore,bt(t)),o=i.targetId,u=n.sharedClientState.addLocalQueryTarget(o,e);let h;return r&&(h=await Rf(n,t,o,u==="current",i.resumeToken)),n.isPrimaryClient&&e&&au(n.remoteStore,i),h}async function Rf(n,t,e,r,i){n.pu=(A,w,P)=>(async function(M,N,W,H){let z=N.view.ru(W);z.Cs&&(z=await Bo(M.localStore,N.query,!1).then((({documents:v})=>N.view.ru(v,z))));const ot=H&&H.targetChanges.get(N.targetId),Rt=H&&H.targetMismatches.get(N.targetId)!=null,ht=N.view.applyChanges(z,M.isPrimaryClient,ot,Rt);return Yo(M,N.targetId,ht.au),ht.snapshot})(n,A,w,P);const o=await Bo(n.localStore,t,!0),u=new Ef(t,o.Qs),h=u.ru(o.documents),d=_n.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=u.applyChanges(h,n.isPrimaryClient,d);Yo(n,e,f.au);const _=new vf(t,e,u);return n.Tu.set(t,_),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),f.snapshot}async function Cf(n,t,e){const r=j(n),i=r.Tu.get(t),o=r.Iu.get(i.targetId);if(o.length>1)return r.Iu.set(i.targetId,o.filter((u=>!dr(u,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Es(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),e&&js(r.remoteStore,i.targetId),Is(r,i.targetId)})).catch(ar)):(Is(r,i.targetId),await Es(r.localStore,i.targetId,!0))}async function Sf(n,t){const e=j(n),r=e.Tu.get(t),i=e.Iu.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),js(e.remoteStore,r.targetId))}async function _u(n,t){const e=j(n);try{const r=await Kd(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const u=e.Au.get(o);u&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u.hu=!0:i.modifiedDocuments.size>0?X(u.hu,14607):i.removedDocuments.size>0&&(X(u.hu,42227),u.hu=!1))})),await Eu(e,r,t)}catch(r){await ar(r)}}function Xo(n,t,e){const r=j(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach(((o,u)=>{const h=u.view.va(t);h.snapshot&&i.push(h.snapshot)})),(function(u,h){const d=j(u);d.onlineState=h;let f=!1;d.queries.forEach(((_,A)=>{for(const w of A.Sa)w.va(h)&&(f=!0)})),f&&Gs(d)})(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Pf(n,t,e){const r=j(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Au.get(t),o=i&&i.key;if(o){let u=new Z(O.comparator);u=u.insert(o,_t.newNoDocument(o,x.min()));const h=q().add(o),d=new gr(x.min(),new Map,new Z(F),u,h);await _u(r,d),r.du=r.du.remove(o),r.Au.delete(t),Qs(r)}else await Es(r.localStore,t,!1).then((()=>Is(r,t,e))).catch(ar)}function Is(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((r=>{n.Ru.containsKey(r)||yu(n,r)}))}function yu(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(js(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),Qs(n))}function Yo(n,t,e){for(const r of e)r instanceof mu?(n.Ru.addReference(r.key,t),bf(n,r)):r instanceof pu?(V(Ks,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||yu(n,r.key)):L(19791,{wu:r})}function bf(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(V(Ks,"New document in limbo: "+e),n.Eu.add(r),Qs(n))}function Qs(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new O(Q.fromString(t)),r=n.fu.next();n.Au.set(r,new Tf(e)),n.du=n.du.insert(e,r),au(n.remoteStore,new qt(bt(ks(e.path)),r,"TargetPurposeLimboResolution",ur.ce))}}async function Eu(n,t,e){const r=j(n),i=[],o=[],u=[];r.Tu.isEmpty()||(r.Tu.forEach(((h,d)=>{u.push(r.pu(d,t,e).then((f=>{if((f||e)&&r.isPrimaryClient){const _=f?!f.fromCache:e?.targetChanges.get(d.targetId)?.current;r.sharedClientState.updateQueryState(d.targetId,_?"current":"not-current")}if(f){i.push(f);const _=Us.As(d.targetId,f);o.push(_)}})))})),await Promise.all(u),r.Pu.H_(i),await(async function(d,f){const _=j(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>C.forEach(f,(w=>C.forEach(w.Es,(P=>_.persistence.referenceDelegate.addReference(A,w.targetId,P))).next((()=>C.forEach(w.ds,(P=>_.persistence.referenceDelegate.removeReference(A,w.targetId,P)))))))))}catch(A){if(!ke(A))throw A;V(Bs,"Failed to update sequence numbers: "+A)}for(const A of f){const w=A.targetId;if(!A.fromCache){const P=_.Ms.get(w),k=P.snapshotVersion,M=P.withLastLimboFreeSnapshotVersion(k);_.Ms=_.Ms.insert(w,M)}}})(r.localStore,o))}async function Vf(n,t){const e=j(n);if(!e.currentUser.isEqual(t)){V(Ks,"User change. New user:",t.toKey());const r=await ru(e.localStore,t);e.currentUser=t,(function(o,u){o.mu.forEach((h=>{h.forEach((d=>{d.reject(new D(S.CANCELLED,u))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Eu(e,r.Ls)}}function Df(n,t){const e=j(n),r=e.Au.get(t);if(r&&r.hu)return q().add(r.key);{let i=q();const o=e.Iu.get(t);if(!o)return i;for(const u of o){const h=e.Tu.get(u);i=i.unionWith(h.view.nu)}return i}}function vu(n){const t=j(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=_u.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Df.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Pf.bind(null,t),t.Pu.H_=_f.bind(null,t.eventManager),t.Pu.yu=yf.bind(null,t.eventManager),t}class ir{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=iu(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Gd(this.persistence,new $d,t.initialUser,this.serializer)}Cu(t){return new nu(Fs.mi,this.serializer)}Du(t){return new Yd}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ir.provider={build:()=>new ir};class Nf extends ir{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){X(this.persistence.referenceDelegate instanceof sr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Pd(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new nu((r=>sr.mi(r,e)),this.serializer)}}class ws{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vf.bind(null,this.syncEngine),await mf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new gf})()}createDatastore(t){const e=iu(t.databaseInfo.databaseId),r=(function(o){return new nf(o)})(t.databaseInfo);return(function(o,u,h,d){return new af(o,u,h,d)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,u,h){return new cf(r,i,o,u,h)})(this.localStore,this.datastore,t.asyncQueue,(e=>Xo(this.syncEngine,e,0)),(function(){return $o.v()?new $o:new Jd})())}createSyncEngine(t,e){return(function(i,o,u,h,d,f,_){const A=new If(i,o,u,h,d,f);return _&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=j(e);V(be,"RemoteStore shutting down."),r.Ea.add(5),await yn(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ws.provider={build:()=>new ws};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Mt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="FirestoreClient";class kf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=Ps.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async u=>{V(ee,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(V(ee,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=hu(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function ts(n,t){n.asyncQueue.verifyOperationInProgress(),V(ee,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await ru(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Jo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Of(n);V(ee,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>Go(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Go(t.remoteStore,i))),n._onlineComponents=t}async function Of(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(ee,"Using user provided OfflineComponentProvider");try{await ts(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;Ae("Error using user provided cache. Falling back to memory cache: "+e),await ts(n,new ir)}}else V(ee,"Using default OfflineComponentProvider"),await ts(n,new Nf(void 0));return n._offlineComponents}async function xf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(ee,"Using user provided OnlineComponentProvider"),await Jo(n,n._uninitializedComponentsProvider._online)):(V(ee,"Using default OnlineComponentProvider"),await Jo(n,new ws))),n._onlineComponents}async function Iu(n){const t=await xf(n),e=t.eventManager;return e.onListen=wf.bind(null,t.syncEngine),e.onUnlisten=Cf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Af.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Sf.bind(null,t.syncEngine),e}function Mf(n,t,e={}){const r=new Gt;return n.asyncQueue.enqueueAndForget((async()=>(function(o,u,h,d,f){const _=new Tu({next:w=>{_.Nu(),u.enqueueAndForget((()=>du(o,A)));const P=w.docs.has(h);!P&&w.fromCache?f.reject(new D(S.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&w.fromCache&&d&&d.source==="server"?f.reject(new D(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),A=new fu(ks(h.path),_,{includeMetadataChanges:!0,qa:!0});return lu(o,A)})(await Iu(n),n.asyncQueue,t,e,r))),r.promise}function Lf(n,t,e={}){const r=new Gt;return n.asyncQueue.enqueueAndForget((async()=>(function(o,u,h,d,f){const _=new Tu({next:w=>{_.Nu(),u.enqueueAndForget((()=>du(o,A))),w.fromCache&&d.source==="server"?f.reject(new D(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),A=new fu(h,_,{includeMetadataChanges:!0,qa:!0});return lu(o,A)})(await Iu(n),n.asyncQueue,t,e,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="firestore.googleapis.com",ta=!0;class ea{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new D(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Au,this.ssl=ta}else this.host=t.host,this.ssl=t.ssl??ta;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=eu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Cd)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ol("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wu(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ea({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ea(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Xh;switch(r.type){case"firstParty":return new tl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Zo.get(e);r&&(V("ComponentProvider","Removing Datastore"),Zo.delete(e),r.terminate())})(this),Promise.resolve()}}function Ff(n,t,e,r={}){n=hn(n,yr);const i=As(t),o=n._getSettings(),u={...o,emulatorOptions:n._getEmulatorOptions()},h=`${t}:${e}`;i&&(wc(`https://${h}`),Sc("Firestore",!0)),o.host!==Au&&o.host!==h&&Ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...o,host:h,ssl:i,emulatorOptions:r};if(!Xn(d,u)&&(n._setSettings(d),r.mockUserToken)){let f,_;if(typeof r.mockUserToken=="string")f=r.mockUserToken,_=gt.MOCK_USER;else{f=Ac(r.mockUserToken,n._app?.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new D(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new gt(A)}n._authCredentials=new Yh(new wa(f,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Er(this.firestore,t,this._query)}}class yt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yt(this.firestore,t,this._key)}toJSON(){return{type:yt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(pn(e,yt._jsonSchema))return new yt(t,r||null,new O(Q.fromString(e.referencePath)))}}yt._jsonSchemaVersion="firestore/documentReference/1.0",yt._jsonSchema={type:nt("string",yt._jsonSchemaVersion),referencePath:nt("string")};class Kt extends Er{constructor(t,e,r){super(t,e,ks(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yt(this.firestore,null,new O(t))}withConverter(t){return new Kt(this.firestore,t,this._path)}}function im(n,t,...e){if(n=ha(n),Aa("collection","path",t),n instanceof yr){const r=Q.fromString(t,...e);return mo(r),new Kt(n,null,r)}{if(!(n instanceof yt||n instanceof Kt))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return mo(r),new Kt(n.firestore,null,r)}}function om(n,t,...e){if(n=ha(n),arguments.length===1&&(t=Ps.newId()),Aa("doc","path",t),n instanceof yr){const r=Q.fromString(t,...e);return fo(r),new yt(n,null,new O(r))}{if(!(n instanceof yt||n instanceof Kt))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return fo(r),new yt(n.firestore,n instanceof Kt?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="AsyncQueue";class ra{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ou(this,"async_queue_retry"),this._c=()=>{const r=Zr();r&&V(na,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Zr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Zr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Gt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!ke(t))throw t;V(na,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,Mt("INTERNAL UNHANDLED ERROR: ",sa(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=Hs.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&L(47125,{Pc:sa(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function sa(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Ws extends yr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new ra,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ra(t),this._firestoreClient=void 0,await t}}}function am(n,t){const e=typeof n=="object"?n:Uh(),r=typeof n=="string"?n:Zn,i=kh(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Tc("firestore");o&&Ff(i,...o)}return i}function Ru(n){if(n._terminated)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Uf(n),n._firestoreClient}function Uf(n){const t=n._freezeSettings(),e=(function(i,o,u,h){return new vl(i,o,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,wu(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new kf(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(i){const o=i?._online.build();return{_offline:i?._offline.build(o),_online:o}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pt(ct.fromBase64String(t))}catch(e){throw new D(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Pt(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(pn(t,Pt._jsonSchema))return Pt.fromBase64String(t.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:nt("string",Pt._jsonSchemaVersion),bytes:nt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return F(this._lat,t._lat)||F(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qt._jsonSchemaVersion}}static fromJSON(t){if(pn(t,Qt._jsonSchema))return new Qt(t.latitude,t.longitude)}}Qt._jsonSchemaVersion="firestore/geoPoint/1.0",Qt._jsonSchema={type:nt("string",Qt._jsonSchemaVersion),latitude:nt("number"),longitude:nt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(pn(t,Wt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Wt(t.vectorValues);throw new D(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wt._jsonSchemaVersion="firestore/vectorValue/1.0",Wt._jsonSchema={type:nt("string",Wt._jsonSchemaVersion),vectorValues:nt("object")};const Bf=new RegExp("[~\\*/\\[\\]]");function jf(n,t,e){if(t.search(Bf)>=0)throw ia(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Cu(...t.split("."))._internalPath}catch{throw ia(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function ia(n,t,e,r,i){let o=`Function ${t}() called with invalid data`;o+=". ";let u="";return new D(S.INVALID_ARGUMENT,o+n+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new qf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Pu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class qf extends Su{data(){return super.data()}}function Pu(n,t){return typeof t=="string"?jf(n,t):t instanceof Cu?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zf{convertValue(t,e="none"){switch(Zt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return gn(t,((i,o)=>{r[i]=this.convertValue(o,e)})),r}convertVectorValue(t){const e=t.fields?.[cs].arrayValue?.values?.map((r=>J(r.doubleValue)));return new Wt(e)}convertGeoPoint(t){return new Qt(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=hr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(dn(t));default:return null}}convertTimestamp(t){const e=Yt(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Q.fromString(t);X(tu(r),9688,{name:t});const i=new fn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return i.isEqual(e)||Mt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}class en{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ce extends Su{constructor(t,e,r,i,o,u){super(t,e,r,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Pu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ce._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}ce._jsonSchemaVersion="firestore/documentSnapshot/1.0",ce._jsonSchema={type:nt("string",ce._jsonSchemaVersion),bundleSource:nt("string","DocumentSnapshot"),bundleName:nt("string"),bundle:nt("string")};class Qn extends ce{data(t={}){return super.data(t)}}class we{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new en(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Qn(this._firestore,this._userDataWriter,r.key,r,new en(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map((h=>{const d=new Qn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new en(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:d,oldIndex:-1,newIndex:u++}}))}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((h=>o||h.type!==3)).map((h=>{const d=new Qn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new en(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return h.type!==0&&(f=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),_=u.indexOf(h.doc.key)),{type:Hf(h.type),doc:d,oldIndex:f,newIndex:_}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=we._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ps.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Hf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n){n=hn(n,yt);const t=hn(n.firestore,Ws);return Mf(Ru(t),n._key).then((e=>Gf(t,n,e)))}we._jsonSchemaVersion="firestore/querySnapshot/1.0",we._jsonSchema={type:nt("string",we._jsonSchemaVersion),bundleSource:nt("string","QuerySnapshot"),bundleName:nt("string"),bundle:nt("string")};class bu extends zf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yt(this.firestore,null,e)}}function cm(n){n=hn(n,Er);const t=hn(n.firestore,Ws),e=Ru(t),r=new bu(t);return $f(n._query),Lf(e,n._query).then((i=>new we(t,r,n,i)))}function Gf(n,t,e){const r=e.docs.get(t._key),i=new bu(n);return new ce(n,i,t._key,r,new en(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Ne=i})(Lh),Jn(new un("firestore",((r,{instanceIdentifier:i,options:o})=>{const u=r.getProvider("app").getImmediate(),h=new Ws(new Jh(r.getProvider("auth-internal")),new el(u,r.getProvider("app-check-internal")),(function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new D(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fn(f.options.projectId,_)})(u,i),u);return o={useFetchStreams:e,...o},h._setSettings(o),h}),"PUBLIC").setMultipleInstances(!0)),ve(uo,co,t),ve(uo,co,"esm2020")})();var Kf="firebase",Qf="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve(Kf,Qf,"app");export{om as A,um as B,un as C,ca as E,De as F,la as L,Lh as S,Jn as _,Zf as a,Jf as b,Oh as c,ha as d,Rs as e,rm as f,Wf as g,B as h,Xf as i,pc as j,As as k,Uh as l,kh as m,vc as n,Xn as o,wc as p,nm as q,ve as r,tm as s,em as t,Sc as u,Yf as v,Fh as w,am as x,cm as y,im as z};
