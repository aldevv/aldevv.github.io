function j(){}function v(t){return t()}function A(){return Object.create(null)}function l(t){t.forEach(v)}function O(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function T(t){return Object.keys(t).length===0}function L(t,e){t.appendChild(e)}function Q(t,e,n){t.insertBefore(e,n||null)}function B(t){t.parentNode.removeChild(t)}function R(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function U(){return M(" ")}function V(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function P(t){return Array.from(t.childNodes)}function W(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let g;function i(t){g=t}const a=[],S=[],d=[],C=[],q=Promise.resolve();let $=!1;function z(){$||($=!0,q.then(N))}function y(t){d.push(t)}const x=new Set;let h=0;function N(){const t=g;do{for(;h<a.length;){const e=a[h];h++,i(e),D(e.$$)}for(i(null),a.length=0,h=0;S.length;)S.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];x.has(n)||(x.add(n),n())}d.length=0}while(a.length);for(;C.length;)C.pop()();$=!1,x.clear(),i(t)}function D(t){if(t.fragment!==null){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const _=new Set;let F;function G(t,e){t&&t.i&&(_.delete(t),t.i(e))}function X(t,e,n,o){if(t&&t.o){if(_.has(t))return;_.add(t),F.c.push(()=>{_.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function Y(t){t&&t.c()}function H(t,e,n,o){const{fragment:s,on_mount:m,on_destroy:u,after_update:p}=t.$$;s&&s.m(e,n),o||y(()=>{const f=m.map(v).filter(O);u?u.push(...f):l(f),t.$$.on_mount=[]}),p.forEach(y)}function I(t,e){const n=t.$$;n.fragment!==null&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){t.$$.dirty[0]===-1&&(a.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(t,e,n,o,s,m,u,p=[-1]){const f=g;i(t);const r=t.$$={fragment:null,ctx:null,props:m,update:j,not_equal:s,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:A(),dirty:p,skip_bound:!1,root:e.target||f.$$.root};u&&u(r.root);let b=!1;if(r.ctx=n?n(t,e.props||{},(c,w,...k)=>{const E=k.length?k[0]:w;return r.ctx&&s(r.ctx[c],r.ctx[c]=E)&&(!r.skip_bound&&r.bound[c]&&r.bound[c](E),b&&J(t,c)),w}):[],r.update(),b=!0,l(r.before_update),r.fragment=o?o(r.ctx):!1,e.target){if(e.hydrate){const c=P(e.target);r.fragment&&r.fragment.l(c),c.forEach(B)}else r.fragment&&r.fragment.c();e.intro&&G(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),N()}i(f)}class tt{$destroy(){I(this,1),this.$destroy=j}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!T(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{tt as S,V as a,Q as b,L as c,W as d,R as e,B as f,Y as g,U as h,Z as i,G as j,X as k,I as l,H as m,j as n,K as s,M as t};