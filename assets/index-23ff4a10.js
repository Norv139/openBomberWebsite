var Be=Object.defineProperty;var Ie=(t,e,n)=>e in t?Be(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var fe=(t,e,n)=>(Ie(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function b(){}function ze(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Ae(t){return t()}function ye(){return Object.create(null)}function M(t){t.forEach(Ae)}function Te(t){return typeof t=="function"}function U(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let re;function Fe(t,e){return t===e?!0:(re||(re=document.createElement("a")),re.href=e,t===re.href)}function He(t){return Object.keys(t).length===0}function i(t,e){t.appendChild(e)}function k(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode&&t.parentNode.removeChild(t)}function Q(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function m(){return A(" ")}function ie(){return A("")}function G(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function d(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ve(t){return Array.from(t.childNodes)}function R(t,e){e=""+e,t.data!==e&&(t.data=e)}function H(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}let J;function E(t){J=t}function We(){if(!J)throw new Error("Function called outside component initialization");return J}const F=[],xe=[];let W=[];const Ce=[],Ue=Promise.resolve();let he=!1;function De(){he||(he=!0,Ue.then(me))}function _e(t){W.push(t)}const de=new Set;let z=0;function me(){if(z!==0)return;const t=J;do{try{for(;z<F.length;){const e=F[z];z++,E(e),Ke(e.$$)}}catch(e){throw F.length=0,z=0,e}for(E(null),F.length=0,z=0;xe.length;)xe.pop()();for(let e=0;e<W.length;e+=1){const n=W[e];de.has(n)||(de.add(n),n())}W.length=0}while(F.length);for(;Ce.length;)Ce.pop()();he=!1,de.clear(),E(t)}function Ke(t){if(t.fragment!==null){t.update(),M(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_e)}}function Re(t){const e=[],n=[];W.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),W=e}const oe=new Set;let T;function Ne(){T={r:0,c:[],p:T}}function Se(){T.r||M(T.c),T=T.p}function x(t,e){t&&t.i&&(oe.delete(t),t.i(e))}function q(t,e,n,r){if(t&&t.o){if(oe.has(t))return;oe.add(t),T.c.push(()=>{oe.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function pe(t,e){const n=e.token={};function r(l,c,s,a){if(e.token!==n)return;e.resolved=a;let o=e.ctx;s!==void 0&&(o=o.slice(),o[s]=a);const u=l&&(e.current=l)(o);let h=!1;e.block&&(e.blocks?e.blocks.forEach((_,p)=>{p!==c&&_&&(Ne(),q(_,1,1,()=>{e.blocks[p]===_&&(e.blocks[p]=null)}),Se())}):e.block.d(1),u.c(),x(u,1),u.m(e.mount(),e.anchor),h=!0),e.block=u,e.blocks&&(e.blocks[c]=u),h&&me()}if(ze(t)){const l=We();if(t.then(c=>{E(l),r(e.then,1,e.value,c),E(null)},c=>{if(E(l),r(e.catch,2,e.error,c),E(null),!e.hasCatch)throw c}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function ve(t,e,n){const r=e.slice(),{resolved:l}=t;t.current===t.then&&(r[t.value]=l),t.current===t.catch&&(r[t.error]=l),t.block.p(r,n)}function P(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function V(t){t&&t.c()}function N(t,e,n){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),_e(()=>{const c=t.$$.on_mount.map(Ae).filter(Te);t.$$.on_destroy?t.$$.on_destroy.push(...c):M(c),t.$$.on_mount=[]}),l.forEach(_e)}function S(t,e){const n=t.$$;n.fragment!==null&&(Re(n.after_update),M(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ge(t,e){t.$$.dirty[0]===-1&&(F.push(t),De(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(t,e,n,r,l,c,s,a=[-1]){const o=J;E(t);const u=t.$$={fragment:null,ctx:[],props:c,update:b,not_equal:l,bound:ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:ye(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};s&&s(u.root);let h=!1;if(u.ctx=n?n(t,e.props||{},(_,p,...v)=>{const g=v.length?v[0]:p;return u.ctx&&l(u.ctx[_],u.ctx[_]=g)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](g),h&&Ge(t,_)),p}):[],u.update(),h=!0,M(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const _=Ve(e.target);u.fragment&&u.fragment.l(_),_.forEach($)}else u.fragment&&u.fragment.c();e.intro&&x(t.$$.fragment),N(t,e.target,e.anchor),me()}E(o)}class K{constructor(){fe(this,"$$");fe(this,"$$set")}$destroy(){S(this,1),this.$destroy=b}$on(e,n){if(!Te(n))return b;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!He(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Je="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Je);const Qe="https://api.github.com/repos/",Xe="vicimpa/openbomber";async function Ye(){return(await(await fetch(`${Qe}${Xe}/commits`)).json()).map(n=>({html_url:n.html_url,message:n.commit.message,author:{name:n.commit.author.name,avatar_url:n.committer.avatar_url,url:n.committer.html_url}}))}function je(t,e,n){const r=t.slice();return r[2]=e[n],r[4]=n,r}function Ze(t){let e;return{c(){e=f("h1"),e.textContent="error"},m(n,r){k(n,e,r)},p:b,d(n){n&&$(e)}}}function et(t){let e,n,r,l=P(t[1]),c=[];for(let s=0;s<l.length;s+=1)c[s]=qe(je(t,l,s));return{c(){e=f("h1"),e.textContent=`Commits: ${t[1].length}`,n=m(),r=f("ul");for(let s=0;s<c.length;s+=1)c[s].c();d(r,"class","listComits svelte-64n00m")},m(s,a){k(s,e,a),k(s,n,a),k(s,r,a);for(let o=0;o<c.length;o+=1)c[o]&&c[o].m(r,null)},p(s,a){if(a&1){l=P(s[1]);let o;for(o=0;o<l.length;o+=1){const u=je(s,l,o);c[o]?c[o].p(u,a):(c[o]=qe(u),c[o].c(),c[o].m(r,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=l.length}},d(s){s&&($(e),$(n),$(r)),Q(c,s)}}}function qe(t){let e,n,r,l,c,s,a,o;return{c(){e=f("li"),n=f("a"),r=f("img"),c=m(),s=f("a"),a=f("p"),a.textContent=`${t[2].message}`,o=m(),Fe(r.src,l=t[2].author.avatar_url)||d(r,"src",l),d(r,"alt",t[2].author.name),d(r,"class","svelte-64n00m"),d(n,"href",t[2].author.url),d(n,"class","svelte-64n00m"),d(s,"href",t[2].html_url),d(s,"class","svelte-64n00m"),d(e,"class","svelte-64n00m")},m(u,h){k(u,e,h),i(e,n),i(n,r),i(e,c),i(e,s),i(s,a),i(e,o)},p:b,d(u){u&&$(e)}}}function tt(t){let e;return{c(){e=f("h1"),e.textContent="Waiting..."},m(n,r){k(n,e,r)},p:b,d(n){n&&$(e)}}}function nt(t){let e,n={ctx:t,current:null,token:null,hasCatch:!0,pending:tt,then:et,catch:Ze,value:1};return pe(t[0],n),{c(){e=f("section"),n.block.c(),d(e,"class","svelte-64n00m")},m(r,l){k(r,e,l),n.block.m(e,n.anchor=null),n.mount=()=>e,n.anchor=null},p(r,[l]){t=r,ve(n,t,l)},i:b,o:b,d(r){r&&$(e),n.block.d(),n.token=null,n=null}}}function lt(t){return[Ye()]}class rt extends K{constructor(e){super(),D(this,e,lt,nt,U,{})}}function st(t){let e,n,r,l,c,s,a,o,u,h,_,p;return{c(){e=f("div"),n=f("div"),r=f("div"),l=m(),c=f("p"),s=A(t[0]),a=m(),o=f("button"),o.textContent="next",u=m(),h=f("button"),h.textContent="prev",d(r,"class","sprite-image svelte-gp53gk"),d(n,"class","sprite-container svelte-gp53gk"),H(n,"--laer",t[0]),d(o,"class","svelte-gp53gk"),d(h,"class","svelte-gp53gk"),d(e,"class","sprite svelte-gp53gk")},m(v,g){k(v,e,g),i(e,n),i(n,r),i(e,l),i(e,c),i(c,s),i(e,a),i(e,o),i(e,u),i(e,h),_||(p=[G(o,"click",t[1]),G(h,"click",t[2])],_=!0)},p(v,[g]){g&1&&H(n,"--laer",v[0]),g&1&&R(s,v[0])},i:b,o:b,d(v){v&&$(e),_=!1,M(p)}}}function ct(t,e,n){let r;const l=()=>{r==51?n(0,r=0):n(0,r++,r)},c=()=>{r==0?n(0,r=51):n(0,r--,r)};return n(0,r=0),[r,l,c]}class ot extends K{constructor(e){super(),D(this,e,ct,st,U,{})}}function it(t){let e,n;return{c(){e=f("div"),n=f("div"),n.innerHTML='<div class="sprite-image svelte-1b8tm9z"></div>',d(n,"class","sprite-container svelte-1b8tm9z"),d(e,"class","sprite svelte-1b8tm9z"),H(e,"--laer",t[0]),H(e,"--max",t[1])},m(r,l){k(r,e,l),i(e,n)},p(r,[l]){l&1&&H(e,"--laer",r[0]),l&2&&H(e,"--max",r[1])},i:b,o:b,d(r){r&&$(e)}}}function at(t,e,n){let{laer:r=0}=e,{max:l="16px"}=e;return t.$$set=c=>{"laer"in c&&n(0,r=c.laer),"max"in c&&n(1,l=c.max)},[r,l]}class Me extends K{constructor(e){super(),D(this,e,at,it,U,{laer:0,max:1})}}var ut=[{name:"main",online:23}],ft=[{plaer:{skin:2,name:"23"},kill:2,win:3,death:2}];function Ee(t,e,n){const r=t.slice();return r[6]=e[n],r[8]=n,r}function dt(t,e,n){const r=t.slice();return r[6]=e[n],r[8]=n,r}function ht(t){return{c:b,m:b,p:b,i:b,o:b,d:b}}function _t(t){let e,n,r=P(t[1](t[9])),l=[];for(let s=0;s<r.length;s+=1)l[s]=Le(Ee(t,r,s));const c=s=>q(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=ie()},m(s,a){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(s,a);k(s,e,a),n=!0},p(s,a){if(a&6){r=P(s[1](s[9]));let o;for(o=0;o<r.length;o+=1){const u=Ee(s,r,o);l[o]?(l[o].p(u,a),x(l[o],1)):(l[o]=Le(u),l[o].c(),x(l[o],1),l[o].m(e.parentNode,e))}for(Ne(),o=r.length;o<l.length;o+=1)c(o);Se()}},i(s){if(!n){for(let a=0;a<r.length;a+=1)x(l[a]);n=!0}},o(s){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)q(l[a]);n=!1},d(s){s&&$(e),Q(l,s)}}}function Le(t){let e,n,r,l,c,s=t[6].plaer.name+"",a,o,u,h,_,p,v,g,w,C=t[6].win+"",j,X,B,Y,ge,Z,ee=t[6].kill+"",ae,be,I,te,$e,ne,le=t[6].death+"",ue,ke,L;return h=new Me({props:{laer:t[6].plaer.skin,max:"50px"}}),{c(){e=f("ol"),n=f("h1"),n.textContent=`${t[8]+1}`,r=m(),l=f("div"),c=f("h3"),a=A(s),o=m(),u=f("div"),V(h.$$.fragment),_=m(),p=f("p"),v=f("span"),v.textContent="win",g=m(),w=f("span"),j=A(C),X=m(),B=f("p"),Y=f("span"),Y.textContent="kill",ge=m(),Z=f("span"),ae=A(ee),be=m(),I=f("p"),te=f("span"),te.textContent="death",$e=m(),ne=f("span"),ue=A(le),ke=m(),d(n,"class","list-item_number svelte-1bq2jv8"),d(c,"class","card_info-name svelte-1bq2jv8"),d(v,"class","svelte-1bq2jv8"),d(w,"class","svelte-1bq2jv8"),d(p,"class","card_info-text svelte-1bq2jv8"),d(Y,"class","svelte-1bq2jv8"),d(Z,"class","svelte-1bq2jv8"),d(B,"class","card_info-text svelte-1bq2jv8"),d(te,"class","svelte-1bq2jv8"),d(ne,"class","svelte-1bq2jv8"),d(I,"class","card_info-text svelte-1bq2jv8"),d(u,"class","card_info svelte-1bq2jv8"),d(l,"class","card svelte-1bq2jv8"),d(e,"class","list-item svelte-1bq2jv8")},m(y,O){k(y,e,O),i(e,n),i(e,r),i(e,l),i(l,c),i(c,a),i(l,o),i(l,u),N(h,u,null),i(u,_),i(u,p),i(p,v),i(p,g),i(p,w),i(w,j),i(u,X),i(u,B),i(B,Y),i(B,ge),i(B,Z),i(Z,ae),i(u,be),i(u,I),i(I,te),i(I,$e),i(I,ne),i(ne,ue),i(e,ke),L=!0},p(y,O){(!L||O&2)&&s!==(s=y[6].plaer.name+"")&&R(a,s);const we={};O&2&&(we.laer=y[6].plaer.skin),h.$set(we),(!L||O&2)&&C!==(C=y[6].win+"")&&R(j,C),(!L||O&2)&&ee!==(ee=y[6].kill+"")&&R(ae,ee),(!L||O&2)&&le!==(le=y[6].death+"")&&R(ue,le)},i(y){L||(x(h.$$.fragment,y),L=!0)},o(y){q(h.$$.fragment,y),L=!1},d(y){y&&$(e),S(h)}}}function mt(t){let e,n,r=P(Array(5)),l=[];for(let c=0;c<r.length;c+=1)l[c]=pt(dt(t,r,c));return{c(){for(let c=0;c<l.length;c+=1)l[c].c();e=ie()},m(c,s){for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(c,s);k(c,e,s),n=!0},p:b,i(c){if(!n){for(let s=0;s<r.length;s+=1)x(l[s]);n=!0}},o(c){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)q(l[s]);n=!1},d(c){c&&$(e),Q(l,c)}}}function pt(t){let e,n,r,l,c,s,a,o,u,h,_,p;return o=new Me({props:{laer:0,max:"50px"}}),{c(){e=f("ol"),n=f("h1"),n.textContent=`${t[8]+1}`,r=m(),l=f("div"),c=f("h3"),c.textContent="Waiting ...",s=m(),a=f("div"),V(o.$$.fragment),u=m(),h=f("p"),h.textContent="Waiting ...",_=m(),d(n,"class","list-item_number svelte-1bq2jv8"),d(c,"class","card_info-name svelte-1bq2jv8"),d(h,"class","card_info-text svelte-1bq2jv8"),d(a,"class","card_info svelte-1bq2jv8"),d(l,"class","card svelte-1bq2jv8"),d(e,"class","list-item svelte-1bq2jv8")},m(v,g){k(v,e,g),i(e,n),i(e,r),i(e,l),i(l,c),i(l,s),i(l,a),N(o,a,null),i(a,u),i(a,h),i(e,_),p=!0},p:b,i(v){p||(x(o.$$.fragment,v),p=!0)},o(v){q(o.$$.fragment,v),p=!1},d(v){v&&$(e),S(o)}}}function vt(t){let e,n,r,l,c,s,a,o,u,h,_,p,v,g,w={ctx:t,current:null,token:null,hasCatch:!1,pending:mt,then:_t,catch:ht,value:9,blocks:[,,,]};return pe(t[2],w),{c(){e=f("section"),n=f("h2"),n.textContent="Top plaers",r=m(),l=f("ul"),w.block.c(),c=m(),s=f("div"),a=f("button"),a.textContent="win",o=m(),u=f("button"),u.textContent="kill",h=m(),_=f("button"),_.textContent="death",d(l,"class","list svelte-1bq2jv8"),d(a,"class","svelte-1bq2jv8"),d(u,"class","svelte-1bq2jv8"),d(_,"class","svelte-1bq2jv8"),d(s,"class","control svelte-1bq2jv8"),d(e,"class","top svelte-1bq2jv8")},m(C,j){k(C,e,j),i(e,n),i(e,r),i(e,l),w.block.m(l,w.anchor=null),w.mount=()=>l,w.anchor=null,i(e,c),i(e,s),i(s,a),i(s,o),i(s,u),i(s,h),i(s,_),p=!0,v||(g=[G(a,"click",t[3]),G(u,"click",t[4]),G(_,"click",t[5])],v=!0)},p(C,[j]){t=C,ve(w,t,j)},i(C){p||(x(w.block),p=!0)},o(C){for(let j=0;j<3;j+=1){const X=w.blocks[j];q(X)}p=!1},d(C){C&&$(e),w.block.d(),w.token=null,w=null,v=!1,M(g)}}}let se=0,ce=5;function gt(t,e,n){let r,l="win",c=new Promise((u,h)=>{setTimeout(()=>{u(ft)},500)});const s=()=>{n(0,l="win")},a=()=>{n(0,l="kill")},o=()=>{n(0,l="death")};return t.$$.update=()=>{t.$$.dirty&1&&n(1,r=u=>{switch(l){case"win":return u.sort((h,_)=>h.win>_.win?-1:1).slice(se,ce);case"kill":return u.sort((h,_)=>h.kill>_.kill?-1:1).slice(se,ce);case"death":return u.sort((h,_)=>h.death>_.death?-1:1).slice(se,ce);default:return u.slice(se,ce)}})},[l,r,c,s,a,o]}class bt extends K{constructor(e){super(),D(this,e,gt,vt,U,{})}}function Pe(t,e,n){const r=t.slice();return r[1]=e[n],r[3]=n,r}function $t(t,e,n){const r=t.slice();return r[1]=e[n],r[3]=n,r}function kt(t){return{c:b,m:b,p:b,d:b}}function wt(t){let e,n=P(t[4]),r=[];for(let l=0;l<n.length;l+=1)r[l]=Oe(Pe(t,n,l));return{c(){for(let l=0;l<r.length;l+=1)r[l].c();e=ie()},m(l,c){for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(l,c);k(l,e,c)},p(l,c){if(c&1){n=P(l[4]);let s;for(s=0;s<n.length;s+=1){const a=Pe(l,n,s);r[s]?r[s].p(a,c):(r[s]=Oe(a),r[s].c(),r[s].m(e.parentNode,e))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(l){l&&$(e),Q(r,l)}}}function Oe(t){let e,n,r,l,c,s,a,o,u,h,_;return{c(){e=f("ol"),n=f("h1"),n.textContent=`${t[3]+1}`,r=m(),l=f("div"),c=f("h3"),c.textContent=`${t[1].name}`,s=m(),a=f("div"),o=f("p"),o.textContent=`online: ${t[1].online}`,u=m(),h=f("a"),h.textContent="conncet",_=m(),d(n,"class","list-item_number svelte-97dw20"),d(c,"class","card_info-name svelte-97dw20"),d(o,"class","card_info-text svelte-97dw20"),d(h,"class","card_info-text svelte-97dw20"),d(a,"class","card_info svelte-97dw20"),d(l,"class","card svelte-97dw20"),d(e,"class","list-item svelte-97dw20")},m(p,v){k(p,e,v),i(e,n),i(e,r),i(e,l),i(l,c),i(l,s),i(l,a),i(a,o),i(a,u),i(a,h),i(e,_)},p:b,d(p){p&&$(e)}}}function yt(t){let e,n=P(Array(5)),r=[];for(let l=0;l<n.length;l+=1)r[l]=xt($t(t,n,l));return{c(){for(let l=0;l<r.length;l+=1)r[l].c();e=ie()},m(l,c){for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(l,c);k(l,e,c)},p:b,d(l){l&&$(e),Q(r,l)}}}function xt(t){let e,n,r,l,c;return{c(){e=f("ol"),n=f("h1"),n.textContent=`${t[3]+1}`,r=m(),l=f("div"),l.innerHTML='<h3 class="card_info-name svelte-97dw20">Loading...</h3> <div class="card_info svelte-97dw20">online: ?</div>',c=m(),d(n,"class","list-item_number svelte-97dw20"),d(l,"class","card svelte-97dw20"),d(e,"class","list-item svelte-97dw20")},m(s,a){k(s,e,a),i(e,n),i(e,r),i(e,l),i(e,c)},p:b,d(s){s&&$(e)}}}function Ct(t){let e,n,r,l,c,s,a={ctx:t,current:null,token:null,hasCatch:!1,pending:yt,then:wt,catch:kt,value:4};return pe(t[0],a),{c(){e=f("section"),n=f("h2"),n.textContent="Top servers",r=m(),l=f("ul"),a.block.c(),c=m(),s=f("div"),s.innerHTML="",d(l,"class","list svelte-97dw20"),d(s,"class","control svelte-97dw20"),d(e,"class","top svelte-97dw20")},m(o,u){k(o,e,u),i(e,n),i(e,r),i(e,l),a.block.m(l,a.anchor=null),a.mount=()=>l,a.anchor=null,i(e,c),i(e,s)},p(o,[u]){t=o,ve(a,t,u)},i:b,o:b,d(o){o&&$(e),a.block.d(),a.token=null,a=null}}}function jt(t){return[new Promise((n,r)=>{setTimeout(()=>{n(ut)},1e3)})]}class qt extends K{constructor(e){super(),D(this,e,jt,Ct,U,{})}}function Et(t){let e,n,r,l,c,s,a,o,u,h,_,p,v;return l=new qt({}),s=new bt({}),o=new rt({}),h=new ot({}),{c(){e=f("header"),e.innerHTML='<a href="https://openbomber.ru/" class="logo svelte-9t1k4f"><h3>openbomber</h3></a> <p>[menu]</p> <p>[links]</p>',n=m(),r=f("main"),V(l.$$.fragment),c=m(),V(s.$$.fragment),a=m(),V(o.$$.fragment),u=m(),V(h.$$.fragment),_=m(),p=f("div"),d(e,"class","svelte-9t1k4f"),d(r,"class","svelte-9t1k4f"),d(p,"class","bg-img")},m(g,w){k(g,e,w),k(g,n,w),k(g,r,w),N(l,r,null),i(r,c),N(s,r,null),i(r,a),N(o,r,null),i(r,u),N(h,r,null),k(g,_,w),k(g,p,w),v=!0},p:b,i(g){v||(x(l.$$.fragment,g),x(s.$$.fragment,g),x(o.$$.fragment,g),x(h.$$.fragment,g),v=!0)},o(g){q(l.$$.fragment,g),q(s.$$.fragment,g),q(o.$$.fragment,g),q(h.$$.fragment,g),v=!1},d(g){g&&($(e),$(n),$(r),$(_),$(p)),S(l),S(s),S(o),S(h)}}}class Lt extends K{constructor(e){super(),D(this,e,null,Et,U,{})}}new Lt({target:document.getElementById("app")});