function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,c;function a(t,e){return t===e||(i||(i=document.createElement("a")),i.href=e,t===i.href)}function u(e,...n){if(null==e){for(const t of n)t(void 0);return t}const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}function d(t,e,n){t.$$.on_destroy.push(u(e,n))}function l(t,e,n){return t.set(n),e}function $(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function _(){return g(" ")}function b(){return g("")}function y(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e,n){const s=new Set;for(let e=0;e<t.length;e+=1)t[e].checked&&s.add(t[e].__value);return n||s.delete(e),Array.from(s)}function E(t){let e;return{p(...n){e=n,e.forEach((e=>t.push(e)))},r(){e.forEach((e=>t.splice(t.indexOf(e),1)))}}}function k(t,e){e=""+e,t.data!==e&&(t.data=e)}function x(t,e){t.value=null==e?"":e}function N(t,e,n,s){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function j(t,e,n){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e)return void(s.selected=!0)}n&&void 0===e||(t.selectedIndex=-1)}function A(t){const e=t.querySelector(":checked");return e&&e.__value}function L(t,e,n){t.classList.toggle(e,!!n)}function O(t){c=t}function S(){if(!c)throw new Error("Function called outside component initialization");return c}function C(t){S().$$.on_mount.push(t)}function P(){const t=S();return(e,n,{cancelable:s=!1}={})=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:s})}(e,n,{cancelable:s});return o.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}const T=[],M=[];let B=[];const H=[],I=Promise.resolve();let R=!1;function D(t){B.push(t)}const F=new Set;let z=0;function G(){if(0!==z)return;const t=c;do{try{for(;z<T.length;){const t=T[z];z++,O(t),J(t.$$)}}catch(t){throw T.length=0,z=0,t}for(O(null),T.length=0,z=0;M.length;)M.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];F.has(e)||(F.add(e),e())}B.length=0}while(T.length);for(;H.length;)H.pop()();R=!1,F.clear(),O(t)}function J(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const W=new Set;let q,V;function K(){q={r:0,c:[],p:q}}function Q(){q.r||s(q.c),q=q.p}function U(t,e){t&&t.i&&(W.delete(t),t.i(e))}function X(t,e,n,s){if(t&&t.o){if(W.has(t))return;W.add(t),q.c.push((()=>{W.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function Y(t){return void 0!==t?.length?t:Array.from(t)}function Z(t,e){t.d(1),e.delete(t.key)}function tt(t,e,n,o,r,i,c,a,u,d,l,$){let p=t.length,f=i.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const g=[],_=new Map,b=new Map,y=[];for(h=f;h--;){const t=$(r,i,h),s=n(t);let a=c.get(s);a?o&&y.push((()=>a.p(t,e))):(a=d(s,t),a.c()),_.set(s,g[h]=a),s in m&&b.set(s,Math.abs(h-m[s]))}const v=new Set,w=new Set;function E(t){U(t,1),t.m(a,l),c.set(t.key,t),l=t.first,f--}for(;p&&f;){const e=g[f-1],n=t[p-1],s=e.key,o=n.key;e===n?(l=e.first,p--,f--):_.has(o)?!c.has(s)||v.has(s)?E(e):w.has(o)?p--:b.get(s)>b.get(o)?(w.add(s),E(e)):(v.add(o),p--):(u(n,c),p--)}for(;p--;){const e=t[p];_.has(e.key)||u(e,c)}for(;f;)E(g[f-1]);return s(y),g}function et(t){t&&t.c()}function nt(t,n,r){const{fragment:i,after_update:c}=t.$$;i&&i.m(n,r),D((()=>{const n=t.$$.on_mount.map(e).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...n):s(n),t.$$.on_mount=[]})),c.forEach(D)}function st(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];B.forEach((s=>-1===t.indexOf(s)?e.push(s):n.push(s))),n.forEach((t=>t())),B=e}(n.after_update),s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){-1===t.$$.dirty[0]&&(T.push(t),R||(R=!0,I.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(e,o,r,i,a,u,d=null,l=[-1]){const $=c;O(e);const p=e.$$={fragment:null,ctx:[],props:u,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||($?$.$$.context:[])),callbacks:n(),dirty:l,skip_bound:!1,root:o.target||$.$$.root};d&&d(p.root);let h=!1;if(p.ctx=r?r(e,o.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),h&&ot(e,t)),n})):[],p.update(),h=!0,s(p.before_update),p.fragment=!!i&&i(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();o.intro&&U(e.$$.fragment),nt(e,o.target,o.anchor),G()}O($)}function it(t,e,n,s){const o=n[t]?.type;if(e="Boolean"===o&&"boolean"!=typeof e?null!=e:e,!s||!n[t])return e;if("toAttribute"===s)switch(o){case"Object":case"Array":return null==e?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return null==e?null:e;default:return e}else switch(o){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":default:return e;case"Number":return null!=e?+e:e}}function ct(t,e,n,s,o,r){let i=class extends V{constructor(){super(t,n,o),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map((t=>(e[t].attribute||t).toLowerCase()))}};return Object.keys(e).forEach((t=>{Object.defineProperty(i.prototype,t,{get(){return this.$$c&&t in this.$$c?this.$$c[t]:this.$$d[t]},set(n){n=it(t,n,e),this.$$d[t]=n,this.$$c?.$set({[t]:n})}})})),s.forEach((t=>{Object.defineProperty(i.prototype,t,{get(){return this.$$c?.[t]}})})),r&&(i=r(i)),t.element=i,i}"function"==typeof HTMLElement&&(V=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const n=this.$$c.$on(t,e);this.$$l_u.set(e,n)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const t=this.$$l_u.get(e);t&&(t(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){if(await Promise.resolve(),!this.$$cn)return;function t(t){return()=>{let e;return{c:function(){e=m("slot"),"default"!==t&&v(e,"name",t)},m:function(t,n){p(t,e,n)},d:function(t){t&&f(e)}}}}const e={},n=function(t){const e={};return t.childNodes.forEach((t=>{e[t.slot||"default"]=!0})),e}(this);for(const o of this.$$s)o in n&&(e[o]=[t(o)]);for(const r of this.attributes){const i=this.$$g_p(r.name);i in this.$$d||(this.$$d[i]=it(i,r.value,this.$$p_d,"toProp"))}this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$scope:{ctx:[]}}});const s=()=>{this.$$r=!0;for(const t in this.$$p_d)if(this.$$d[t]=this.$$c.$$.ctx[this.$$c.$$.props[t]],this.$$p_d[t].reflect){const e=it(t,this.$$d[t],this.$$p_d,"toAttribute");null==e?this.removeAttribute(this.$$p_d[t].attribute||t):this.setAttribute(this.$$p_d[t].attribute||t,e)}this.$$r=!1};this.$$c.$$.after_update.push(s),s();for(const c in this.$$l)for(const a of this.$$l[c]){const u=this.$$c.$on(c,a);this.$$l_u.set(a,u)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=it(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then((()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)}))}$$g_p(t){return Object.keys(this.$$p_d).find((e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t))||t}});class at{$$=void 0;$$set=void 0;$destroy(){st(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const t=s.indexOf(n);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");const ut=[];function dt(e,n=t){let s;const o=new Set;function i(t){if(r(e,t)&&(e=t,s)){const t=!ut.length;for(const t of o)t[1](),ut.push(t,e);if(t){for(let t=0;t<ut.length;t+=2)ut[t][0](ut[t+1]);ut.length=0}}}function c(t){i(t(e))}return{set:i,update:c,subscribe:function(r,a=t){const u=[r,a];return o.add(u),1===o.size&&(s=n(i,c)||t),r(e),()=>{o.delete(u),0===o.size&&s&&(s(),s=null)}}}}const lt=dt(0),$t=dt({lhcVersion:0,last_actions_index:0,last_actions:[],userDepartments:[],userProductNames:[],userDepartmentsGroups:[],userGroups:[],userList:[],widgets:[],additionalColumns:[],excludeIcons:[],notifIcons:[],departmentd:[],departmentd_dpgroups:[],departmentdNames:[],operatord:[],operatord_dpgroups:[],operatord_ugroups:[],operatordNames:[],actived:[],actived_products:[],actived_dpgroups:[],actived_ugroups:[],activedNames:[],mcd:[],mcd_products:[],mcd_dpgroups:[],mcdNames:[],unreadd:[],unreadd_products:[],unreadd_dpgroups:[],unreaddNames:[],pendingd:[],pendingd_products:[],pendingd_dpgroups:[],pendingd_ugroups:[],pendingdNames:[],botd:[],botd_products:[],botd_dpgroups:[],botd_ugroups:[],botdNames:[],subjectd:[],subjectd_products:[],subjectd_dpgroups:[],subjectd_ugroups:[],subjectdNames:[],closedd:[],closedd_products:[],closedd_dpgroups:[],closeddNames:[],statusNotifications:[],toggleWidgetData:[],isListLoaded:!1,activeu:[],pendingu:[],subjectu:[],oopu:[],custom_extension_filter:"",depFilterText:"",userFilterText:"",limitb:"10",limita:"10",limitu:"10",limitp:"10",limito:String(confLH.dlist.op_n),limitc:"10",limitd:"10",limitmc:"10",limitgc:"10",limits:"10",new_group_type:"1",bot_st:{},departmentd_hide_dep:!1,departmentd_hide_dgroup:!1,lmtoggle:!1,rmtoggle:!1,current_user_id:confLH.user_id,limitpm:"10",limitam:"10",limitalm:"10",limitmm:"10",pendingmd:[],pendingmd_products:[],pendingmd_dpgroups:[],pendingmd_ugroups:[],pendingmdNames:[],activemd:[],activemd_products:[],activemd_dpgroups:[],activemd_ugroups:[],activemdNames:[],alarmmd:[],alarmmd_products:[],alarmmd_dpgroups:[],alarmmd_ugroups:[],alarmmdNames:[],mmd:[],mmd_dpgroups:[],mmdNames:[],pendingmu:[],activemu:[],alarmmu:[]}),pt=dt({});const ft=await fetch(WWW_DIR_JAVASCRIPT+"restapi/lang/lhcbo",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":confLH.csrf_token}}).catch((t=>{console.log("Translations could not be loaded!")})),ht=await ft.json();const mt=function(e,n,r){const i=!Array.isArray(e),c=i?[e]:e;if(!c.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const a=n.length<2;return d=(e,r)=>{let d=!1;const l=[];let $=0,p=t;const f=()=>{if($)return;p();const s=n(i?l[0]:l,e,r);a?e(s):p=o(s)?s:t},h=c.map(((t,e)=>u(t,(t=>{l[e]=t,$&=~(1<<e),d&&f()}),(()=>{$|=1<<e}))));return d=!0,f(),function(){s(h),p(),d=!1}},{subscribe:dt(r,d).subscribe};var d}(dt("lhcbo"),(t=>(e,n={})=>function(t,e,n){if(!e)throw new Error("no key provided to $t()");if(!t)throw new Error(`no translation for key "${e}"`);let s=ht[e];return s?(Object.keys(n).map((t=>{const e=new RegExp(`{{${t}}}`,"g");s=s.replace(e,n[t])})),s):(console.log(`no translation found for ${e}`),e)}(t,e,n)));export{h as A,u as B,A as C,tt as D,Z as E,D as F,j as G,a as H,N as I,E as J,w as K,U as L,X as M,Q as N,K as O,et as P,nt as Q,st as R,at as S,pt as T,P as U,d as a,lt as b,ct as c,l as d,_ as e,G as f,b as g,p as h,rt as i,f as j,m as k,$t as l,v as m,t as n,C as o,$ as p,k as q,y as r,r as s,g as t,mt as u,x as v,s as w,L as x,o as y,Y as z};
//# sourceMappingURL=i18n.JfZhZI_J.js.map
