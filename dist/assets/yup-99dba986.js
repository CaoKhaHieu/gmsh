import{r as St,a as pt,j as ye,c as kt,e as S}from"./index-edd0788e.js";const Qt=St.forwardRef((e,i)=>{const{className:r,variant:s,label:n,error:u,...o}=e,{t:g}=pt();return ye.jsxs("div",{className:"input-wrapper",children:[ye.jsx("label",{className:"input-label",children:n}),ye.jsx("input",{ref:i,className:kt("input",r,s),...o}),u&&ye.jsx("span",{className:"mt-2 text-xs text-red",children:g(u)})]})});var oe=e=>e.type==="checkbox",ie=e=>e instanceof Date,U=e=>e==null;const st=e=>typeof e=="object";var E=e=>!U(e)&&!Array.isArray(e)&&st(e)&&!ie(e),it=e=>E(e)&&e.target?oe(e.target)?e.target.checked:e.target.value:e,Et=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,nt=(e,i)=>e.has(Et(i)),Ct=e=>{const i=e.constructor&&e.constructor.prototype;return E(i)&&i.hasOwnProperty("isPrototypeOf")},Te=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function N(e){let i;const r=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Te&&(e instanceof Blob||e instanceof FileList))&&(r||E(e)))if(i=r?[]:{},!r&&!Ct(e))i=e;else for(const s in e)e.hasOwnProperty(s)&&(i[s]=N(e[s]));else return e;return i}var ce=e=>Array.isArray(e)?e.filter(Boolean):[],p=e=>e===void 0,f=(e,i,r)=>{if(!i||!E(e))return r;const s=ce(i.split(/[,[\].]+?/)).reduce((n,u)=>U(n)?n:n[u],e);return p(s)||s===e?p(e[i])?r:e[i]:s},P=e=>typeof e=="boolean";const ge={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ot=S.createContext(null),Le=()=>S.useContext(Ot);var at=(e,i,r,s=!0)=>{const n={defaultValues:i._defaultValues};for(const u in e)Object.defineProperty(n,u,{get:()=>{const o=u;return i._proxyFormState[o]!==I.all&&(i._proxyFormState[o]=!s||I.all),r&&(r[o]=!0),e[o]}});return n},B=e=>E(e)&&!Object.keys(e).length,ut=(e,i,r,s)=>{r(e);const{name:n,...u}=e;return B(u)||Object.keys(u).length>=Object.keys(i).length||Object.keys(u).find(o=>i[o]===(!s||I.all))},he=e=>Array.isArray(e)?e:[e],lt=(e,i,r)=>!e||!i||e===i||he(e).some(s=>s&&(r?s===i:s.startsWith(i)||i.startsWith(s)));function Ue(e){const i=S.useRef(e);i.current=e,S.useEffect(()=>{const r=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function Tt(e){const i=Le(),{control:r=i.control,disabled:s,name:n,exact:u}=e||{},[o,g]=S.useState(r._formState),h=S.useRef(!0),x=S.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),b=S.useRef(n);return b.current=n,Ue({disabled:s,next:F=>h.current&&lt(b.current,F.name,u)&&ut(F,x.current,r._updateFormState)&&g({...r._formState,...F}),subject:r._subjects.state}),S.useEffect(()=>(h.current=!0,x.current.isValid&&r._updateValid(!0),()=>{h.current=!1}),[r]),at(o,r,x.current,!1)}var $=e=>typeof e=="string",ot=(e,i,r,s,n)=>$(e)?(s&&i.watch.add(e),f(r,e,n)):Array.isArray(e)?e.map(u=>(s&&i.watch.add(u),f(r,u))):(s&&(i.watchAll=!0),r);function Lt(e){const i=Le(),{control:r=i.control,name:s,defaultValue:n,disabled:u,exact:o}=e||{},g=S.useRef(s);g.current=s,Ue({disabled:u,subject:r._subjects.values,next:b=>{lt(g.current,b.name,o)&&x(N(ot(g.current,r._names,b.values||r._formValues,!1,n)))}});const[h,x]=S.useState(r._getWatch(s,n));return S.useEffect(()=>r._removeUnmounted()),h}var Re=e=>/^\w*$/.test(e),ct=e=>ce(e.replace(/["|']|\]/g,"").split(/\.|\[/)),w=(e,i,r)=>{let s=-1;const n=Re(i)?[i]:ct(i),u=n.length,o=u-1;for(;++s<u;){const g=n[s];let h=r;if(s!==o){const x=e[g];h=E(x)||Array.isArray(x)?x:isNaN(+n[s+1])?{}:[]}e[g]=h,e=e[g]}return e};function Ut(e){const i=Le(),{name:r,disabled:s,control:n=i.control,shouldUnregister:u}=e,o=nt(n._names.array,r),g=Lt({control:n,name:r,defaultValue:f(n._formValues,r,f(n._defaultValues,r,e.defaultValue)),exact:!0}),h=Tt({control:n,name:r}),x=S.useRef(n.register(r,{...e.rules,value:g,...P(e.disabled)?{disabled:e.disabled}:{}}));return S.useEffect(()=>{const b=n._options.shouldUnregister||u,F=(_,j)=>{const L=f(n._fields,_);L&&(L._f.mount=j)};if(F(r,!0),b){const _=N(f(n._options.defaultValues,r));w(n._defaultValues,r,_),p(f(n._formValues,r))&&w(n._formValues,r,_)}return()=>{(o?b&&!n._state.action:b)?n.unregister(r):F(r,!1)}},[r,n,o,u]),S.useEffect(()=>{f(n._fields,r)&&n._updateDisabledField({disabled:s,fields:n._fields,name:r,value:f(n._fields,r)._f.value})},[s,r,n]),{field:{name:r,value:g,...P(s)||h.disabled?{disabled:h.disabled||s}:{},onChange:S.useCallback(b=>x.current.onChange({target:{value:it(b),name:r},type:ge.CHANGE}),[r]),onBlur:S.useCallback(()=>x.current.onBlur({target:{value:f(n._formValues,r),name:r},type:ge.BLUR}),[r,n]),ref:b=>{const F=f(n._fields,r);F&&b&&(F._f.ref={focus:()=>b.focus(),select:()=>b.select(),setCustomValidity:_=>b.setCustomValidity(_),reportValidity:()=>b.reportValidity()})}},formState:h,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!f(h.errors,r)},isDirty:{enumerable:!0,get:()=>!!f(h.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!f(h.touchedFields,r)},error:{enumerable:!0,get:()=>f(h.errors,r)}})}}const Xt=e=>e.render(Ut(e));var ft=(e,i,r,s,n)=>i?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:n||!0}}:{},Ye=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched}),ze=(e,i,r)=>!r&&(i.watchAll||i.watch.has(e)||[...i.watch].some(s=>e.startsWith(s)&&/^\.\w+/.test(e.slice(s.length))));const le=(e,i,r,s)=>{for(const n of r||Object.keys(e)){const u=f(e,n);if(u){const{_f:o,...g}=u;if(o){if(o.refs&&o.refs[0]&&i(o.refs[0],n)&&!s)break;if(o.ref&&i(o.ref,o.name)&&!s)break;le(g,i)}else E(g)&&le(g,i)}}};var Rt=(e,i,r)=>{const s=ce(f(e,r));return w(s,"root",i[r]),w(e,r,s),e},Ne=e=>e.type==="file",Q=e=>typeof e=="function",_e=e=>{if(!Te)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},ve=e=>$(e),Me=e=>e.type==="radio",be=e=>e instanceof RegExp;const Je={value:!1,isValid:!1},Qe={value:!0,isValid:!0};var dt=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!p(e[0].attributes.value)?p(e[0].value)||e[0].value===""?Qe:{value:e[0].value,isValid:!0}:Qe:Je}return Je};const Xe={isValid:!1,value:null};var yt=e=>Array.isArray(e)?e.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,Xe):Xe;function Ze(e,i,r="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||P(e)&&!e)return{type:r,message:ve(e)?e:"",ref:i}}var se=e=>E(e)&&!be(e)?e:{value:e,message:""},et=async(e,i,r,s,n)=>{const{ref:u,refs:o,required:g,maxLength:h,minLength:x,min:b,max:F,pattern:_,validate:j,name:L,valueAsNumber:fe,mount:xe,disabled:J}=e._f,m=f(i,L);if(!xe||J)return{};const K=o?o[0]:u,G=A=>{s&&K.reportValidity&&(K.setCustomValidity(P(A)?"":A||""),K.reportValidity())},C={},ne=Me(u),te=oe(u),Fe=ne||te,q=(fe||Ne(u))&&p(u.value)&&p(m)||_e(u)&&u.value===""||m===""||Array.isArray(m)&&!m.length,X=ft.bind(null,L,r,C),Y=(A,V,k,R=z.maxLength,M=z.minLength)=>{const W=A?V:k;C[L]={type:A?R:M,message:W,ref:u,...X(A?R:M,W)}};if(n?!Array.isArray(m)||!m.length:g&&(!Fe&&(q||U(m))||P(m)&&!m||te&&!dt(o).isValid||ne&&!yt(o).isValid)){const{value:A,message:V}=ve(g)?{value:!!g,message:g}:se(g);if(A&&(C[L]={type:z.required,message:V,ref:K,...X(z.required,V)},!r))return G(V),C}if(!q&&(!U(b)||!U(F))){let A,V;const k=se(F),R=se(b);if(!U(m)&&!isNaN(m)){const M=u.valueAsNumber||m&&+m;U(k.value)||(A=M>k.value),U(R.value)||(V=M<R.value)}else{const M=u.valueAsDate||new Date(m),W=de=>new Date(new Date().toDateString()+" "+de),Z=u.type=="time",ae=u.type=="week";$(k.value)&&m&&(A=Z?W(m)>W(k.value):ae?m>k.value:M>new Date(k.value)),$(R.value)&&m&&(V=Z?W(m)<W(R.value):ae?m<R.value:M<new Date(R.value))}if((A||V)&&(Y(!!A,k.message,R.message,z.max,z.min),!r))return G(C[L].message),C}if((h||x)&&!q&&($(m)||n&&Array.isArray(m))){const A=se(h),V=se(x),k=!U(A.value)&&m.length>+A.value,R=!U(V.value)&&m.length<+V.value;if((k||R)&&(Y(k,A.message,V.message),!r))return G(C[L].message),C}if(_&&!q&&$(m)){const{value:A,message:V}=se(_);if(be(A)&&!m.match(A)&&(C[L]={type:z.pattern,message:V,ref:u,...X(z.pattern,V)},!r))return G(V),C}if(j){if(Q(j)){const A=await j(m,i),V=Ze(A,K);if(V&&(C[L]={...V,...X(z.validate,V.message)},!r))return G(V.message),C}else if(E(j)){let A={};for(const V in j){if(!B(A)&&!r)break;const k=Ze(await j[V](m,i),K,V);k&&(A={...k,...X(V,k.message)},G(k.message),r&&(C[L]=A))}if(!B(A)&&(C[L]={ref:K,...A},!r))return C}}return G(!0),C};function Nt(e,i){const r=i.slice(0,-1).length;let s=0;for(;s<r;)e=p(e)?s++:e[i[s++]];return e}function Mt(e){for(const i in e)if(e.hasOwnProperty(i)&&!p(e[i]))return!1;return!0}function T(e,i){const r=Array.isArray(i)?i:Re(i)?[i]:ct(i),s=r.length===1?e:Nt(e,r),n=r.length-1,u=r[n];return s&&delete s[u],n!==0&&(E(s)&&B(s)||Array.isArray(s)&&Mt(s))&&T(e,r.slice(0,-1)),e}var ke=()=>{let e=[];return{get observers(){return e},next:n=>{for(const u of e)u.next&&u.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(u=>u!==n)}}),unsubscribe:()=>{e=[]}}},Ve=e=>U(e)||!st(e);function ee(e,i){if(Ve(e)||Ve(i))return e===i;if(ie(e)&&ie(i))return e.getTime()===i.getTime();const r=Object.keys(e),s=Object.keys(i);if(r.length!==s.length)return!1;for(const n of r){const u=e[n];if(!s.includes(n))return!1;if(n!=="ref"){const o=i[n];if(ie(u)&&ie(o)||E(u)&&E(o)||Array.isArray(u)&&Array.isArray(o)?!ee(u,o):u!==o)return!1}}return!0}var ht=e=>e.type==="select-multiple",Bt=e=>Me(e)||oe(e),Ee=e=>_e(e)&&e.isConnected,vt=e=>{for(const i in e)if(Q(e[i]))return!0;return!1};function me(e,i={}){const r=Array.isArray(e);if(E(e)||r)for(const s in e)Array.isArray(e[s])||E(e[s])&&!vt(e[s])?(i[s]=Array.isArray(e[s])?[]:{},me(e[s],i[s])):U(e[s])||(i[s]=!0);return i}function gt(e,i,r){const s=Array.isArray(e);if(E(e)||s)for(const n in e)Array.isArray(e[n])||E(e[n])&&!vt(e[n])?p(i)||Ve(r[n])?r[n]=Array.isArray(e[n])?me(e[n],[]):{...me(e[n])}:gt(e[n],U(i)?{}:i[n],r[n]):r[n]=!ee(e[n],i[n]);return r}var Ce=(e,i)=>gt(e,i,me(i)),_t=(e,{valueAsNumber:i,valueAsDate:r,setValueAs:s})=>p(e)?e:i?e===""?NaN:e&&+e:r&&$(e)?new Date(e):s?s(e):e;function Oe(e){const i=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):i.disabled))return Ne(i)?i.files:Me(i)?yt(e.refs).value:ht(i)?[...i.selectedOptions].map(({value:r})=>r):oe(i)?dt(e.refs).value:_t(p(i.value)?e.ref.value:i.value,e)}var Pt=(e,i,r,s)=>{const n={};for(const u of e){const o=f(i,u);o&&w(n,u,o._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:s}},ue=e=>p(e)?e:be(e)?e.source:E(e)?be(e.value)?e.value.source:e.value:e,It=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function tt(e,i,r){const s=f(e,r);if(s||Re(r))return{error:s,name:r};const n=r.split(".");for(;n.length;){const u=n.join("."),o=f(i,u),g=f(e,u);if(o&&!Array.isArray(o)&&r!==u)return{name:r};if(g&&g.type)return{name:u,error:g};n.pop()}return{name:r}}var jt=(e,i,r,s,n)=>n.isOnAll?!1:!r&&n.isOnTouch?!(i||e):(r?s.isOnBlur:n.isOnBlur)?!e:(r?s.isOnChange:n.isOnChange)?e:!0,qt=(e,i)=>!ce(f(e,i)).length&&T(e,i);const Wt={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0};function Ht(e={},i){let r={...Wt,...e},s={submitCount:0,isDirty:!1,isLoading:Q(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:r.errors||{},disabled:r.disabled||!1},n={},u=E(r.defaultValues)||E(r.values)?N(r.defaultValues||r.values)||{}:{},o=r.shouldUnregister?{}:N(u),g={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},x,b=0;const F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={values:ke(),array:ke(),state:ke()},j=Ye(r.mode),L=Ye(r.reValidateMode),fe=r.criteriaMode===I.all,xe=t=>a=>{clearTimeout(b),b=setTimeout(t,a)},J=async t=>{if(F.isValid||t){const a=r.resolver?B((await q()).errors):await Y(n,!0);a!==s.isValid&&_.state.next({isValid:a})}},m=t=>F.isValidating&&_.state.next({isValidating:t}),K=(t,a=[],l,y,d=!0,c=!0)=>{if(y&&l){if(g.action=!0,c&&Array.isArray(f(n,t))){const v=l(f(n,t),y.argA,y.argB);d&&w(n,t,v)}if(c&&Array.isArray(f(s.errors,t))){const v=l(f(s.errors,t),y.argA,y.argB);d&&w(s.errors,t,v),qt(s.errors,t)}if(F.touchedFields&&c&&Array.isArray(f(s.touchedFields,t))){const v=l(f(s.touchedFields,t),y.argA,y.argB);d&&w(s.touchedFields,t,v)}F.dirtyFields&&(s.dirtyFields=Ce(u,o)),_.state.next({name:t,isDirty:V(t,a),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else w(o,t,a)},G=(t,a)=>{w(s.errors,t,a),_.state.next({errors:s.errors})},C=t=>{s.errors=t,_.state.next({errors:s.errors,isValid:!1})},ne=(t,a,l,y)=>{const d=f(n,t);if(d){const c=f(o,t,p(l)?f(u,t):l);p(c)||y&&y.defaultChecked||a?w(o,t,a?c:Oe(d._f)):M(t,c),g.mount&&J()}},te=(t,a,l,y,d)=>{let c=!1,v=!1;const D={name:t},O=!!(f(n,t)&&f(n,t)._f.disabled);if(!l||y){F.isDirty&&(v=s.isDirty,s.isDirty=D.isDirty=V(),c=v!==D.isDirty);const H=O||ee(f(u,t),a);v=!!(!O&&f(s.dirtyFields,t)),H||O?T(s.dirtyFields,t):w(s.dirtyFields,t,!0),D.dirtyFields=s.dirtyFields,c=c||F.dirtyFields&&v!==!H}if(l){const H=f(s.touchedFields,t);H||(w(s.touchedFields,t,l),D.touchedFields=s.touchedFields,c=c||F.touchedFields&&H!==l)}return c&&d&&_.state.next(D),c?D:{}},Fe=(t,a,l,y)=>{const d=f(s.errors,t),c=F.isValid&&P(a)&&s.isValid!==a;if(e.delayError&&l?(x=xe(()=>G(t,l)),x(e.delayError)):(clearTimeout(b),x=null,l?w(s.errors,t,l):T(s.errors,t)),(l?!ee(d,l):d)||!B(y)||c){const v={...y,...c&&P(a)?{isValid:a}:{},errors:s.errors,name:t};s={...s,...v},_.state.next(v)}m(!1)},q=async t=>r.resolver(o,r.context,Pt(t||h.mount,n,r.criteriaMode,r.shouldUseNativeValidation)),X=async t=>{const{errors:a}=await q(t);if(t)for(const l of t){const y=f(a,l);y?w(s.errors,l,y):T(s.errors,l)}else s.errors=a;return a},Y=async(t,a,l={valid:!0})=>{for(const y in t){const d=t[y];if(d){const{_f:c,...v}=d;if(c){const D=h.array.has(c.name),O=await et(d,o,fe,r.shouldUseNativeValidation&&!a,D);if(O[c.name]&&(l.valid=!1,a))break;!a&&(f(O,c.name)?D?Rt(s.errors,O,c.name):w(s.errors,c.name,O[c.name]):T(s.errors,c.name))}v&&await Y(v,a,l)}}return l.valid},A=()=>{for(const t of h.unMount){const a=f(n,t);a&&(a._f.refs?a._f.refs.every(l=>!Ee(l)):!Ee(a._f.ref))&&we(t)}h.unMount=new Set},V=(t,a)=>(t&&a&&w(o,t,a),!ee(Be(),u)),k=(t,a,l)=>ot(t,h,{...g.mount?o:p(a)?u:$(t)?{[t]:a}:a},l,a),R=t=>ce(f(g.mount?o:u,t,e.shouldUnregister?f(u,t,[]):[])),M=(t,a,l={})=>{const y=f(n,t);let d=a;if(y){const c=y._f;c&&(!c.disabled&&w(o,t,_t(a,c)),d=_e(c.ref)&&U(a)?"":a,ht(c.ref)?[...c.ref.options].forEach(v=>v.selected=d.includes(v.value)):c.refs?oe(c.ref)?c.refs.length>1?c.refs.forEach(v=>(!v.defaultChecked||!v.disabled)&&(v.checked=Array.isArray(d)?!!d.find(D=>D===v.value):d===v.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(v=>v.checked=v.value===d):Ne(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||_.values.next({name:t,values:{...o}})))}(l.shouldDirty||l.shouldTouch)&&te(t,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&Ae(t)},W=(t,a,l)=>{for(const y in a){const d=a[y],c=`${t}.${y}`,v=f(n,c);(h.array.has(t)||!Ve(d)||v&&!v._f)&&!ie(d)?W(c,d,l):M(c,d,l)}},Z=(t,a,l={})=>{const y=f(n,t),d=h.array.has(t),c=N(a);w(o,t,c),d?(_.array.next({name:t,values:{...o}}),(F.isDirty||F.dirtyFields)&&l.shouldDirty&&_.state.next({name:t,dirtyFields:Ce(u,o),isDirty:V(t,c)})):y&&!y._f&&!U(c)?W(t,c,l):M(t,c,l),ze(t,h)&&_.state.next({...s}),_.values.next({name:t,values:{...o}}),!g.mount&&i()},ae=async t=>{const a=t.target;let l=a.name,y=!0;const d=f(n,l),c=()=>a.type?Oe(d._f):it(t),v=D=>{y=Number.isNaN(D)||D===f(o,l,D)};if(d){let D,O;const H=c(),re=t.type===ge.BLUR||t.type===ge.FOCUS_OUT,At=!It(d._f)&&!r.resolver&&!f(s.errors,l)&&!d._f.deps||jt(re,f(s.touchedFields,l),s.isSubmitted,L,j),Se=ze(l,h,re);w(o,l,H),re?(d._f.onBlur&&d._f.onBlur(t),x&&x(0)):d._f.onChange&&d._f.onChange(t);const pe=te(l,H,re,!1),wt=!B(pe)||Se;if(!re&&_.values.next({name:l,type:t.type,values:{...o}}),At)return F.isValid&&J(),wt&&_.state.next({name:l,...Se?{}:pe});if(!re&&Se&&_.state.next({...s}),m(!0),r.resolver){const{errors:Ke}=await q([l]);if(v(H),y){const Dt=tt(s.errors,n,l),Ge=tt(Ke,n,Dt.name||l);D=Ge.error,l=Ge.name,O=B(Ke)}}else D=(await et(d,o,fe,r.shouldUseNativeValidation))[l],v(H),y&&(D?O=!1:F.isValid&&(O=await Y(n,!0)));y&&(d._f.deps&&Ae(d._f.deps),Fe(l,O,D,pe))}},de=(t,a)=>{if(f(s.errors,a)&&t.focus)return t.focus(),1},Ae=async(t,a={})=>{let l,y;const d=he(t);if(m(!0),r.resolver){const c=await X(p(t)?t:d);l=B(c),y=t?!d.some(v=>f(c,v)):l}else t?(y=(await Promise.all(d.map(async c=>{const v=f(n,c);return await Y(v&&v._f?{[c]:v}:v)}))).every(Boolean),!(!y&&!s.isValid)&&J()):y=l=await Y(n);return _.state.next({...!$(t)||F.isValid&&l!==s.isValid?{}:{name:t},...r.resolver||!t?{isValid:l}:{},errors:s.errors,isValidating:!1}),a.shouldFocus&&!y&&le(n,de,t?d:h.mount),y},Be=t=>{const a={...u,...g.mount?o:{}};return p(t)?a:$(t)?f(a,t):t.map(l=>f(a,l))},Pe=(t,a)=>({invalid:!!f((a||s).errors,t),isDirty:!!f((a||s).dirtyFields,t),isTouched:!!f((a||s).touchedFields,t),error:f((a||s).errors,t)}),Vt=t=>{t&&he(t).forEach(a=>T(s.errors,a)),_.state.next({errors:t?s.errors:{}})},Ie=(t,a,l)=>{const y=(f(n,t,{_f:{}})._f||{}).ref;w(s.errors,t,{...a,ref:y}),_.state.next({name:t,errors:s.errors,isValid:!1}),l&&l.shouldFocus&&y&&y.focus&&y.focus()},mt=(t,a)=>Q(t)?_.values.subscribe({next:l=>t(k(void 0,a),l)}):k(t,a,!0),we=(t,a={})=>{for(const l of t?he(t):h.mount)h.mount.delete(l),h.array.delete(l),a.keepValue||(T(n,l),T(o,l)),!a.keepError&&T(s.errors,l),!a.keepDirty&&T(s.dirtyFields,l),!a.keepTouched&&T(s.touchedFields,l),!r.shouldUnregister&&!a.keepDefaultValue&&T(u,l);_.values.next({values:{...o}}),_.state.next({...s,...a.keepDirty?{isDirty:V()}:{}}),!a.keepIsValid&&J()},je=({disabled:t,name:a,field:l,fields:y,value:d})=>{if(P(t)){const c=t?void 0:p(d)?Oe(l?l._f:f(y,a)._f):d;w(o,a,c),te(a,c,!1,!1,!0)}},De=(t,a={})=>{let l=f(n,t);const y=P(a.disabled);return w(n,t,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:t}},name:t,mount:!0,...a}}),h.mount.add(t),l?je({field:l,disabled:a.disabled,name:t,value:a.value}):ne(t,!0,a.value),{...y?{disabled:a.disabled}:{},...r.progressive?{required:!!a.required,min:ue(a.min),max:ue(a.max),minLength:ue(a.minLength),maxLength:ue(a.maxLength),pattern:ue(a.pattern)}:{},name:t,onChange:ae,onBlur:ae,ref:d=>{if(d){De(t,a),l=f(n,t);const c=p(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,v=Bt(c),D=l._f.refs||[];if(v?D.find(O=>O===c):c===l._f.ref)return;w(n,t,{_f:{...l._f,...v?{refs:[...D.filter(Ee),c,...Array.isArray(f(u,t))?[{}]:[]],ref:{type:c.type,name:t}}:{ref:c}}}),ne(t,!1,void 0,c)}else l=f(n,t,{}),l._f&&(l._f.mount=!1),(r.shouldUnregister||a.shouldUnregister)&&!(nt(h.array,t)&&g.action)&&h.unMount.add(t)}}},qe=()=>r.shouldFocusError&&le(n,de,h.mount),xt=t=>{P(t)&&(_.state.next({disabled:t}),le(n,(a,l)=>{let y=t;const d=f(n,l);d&&P(d._f.disabled)&&(y||(y=d._f.disabled)),a.disabled=y},0,!1))},We=(t,a)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let y=N(o);if(_.state.next({isSubmitting:!0}),r.resolver){const{errors:d,values:c}=await q();s.errors=d,y=c}else await Y(n);T(s.errors,"root"),B(s.errors)?(_.state.next({errors:{}}),await t(y,l)):(a&&await a({...s.errors},l),qe(),setTimeout(qe)),_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:B(s.errors),submitCount:s.submitCount+1,errors:s.errors})},Ft=(t,a={})=>{f(n,t)&&(p(a.defaultValue)?Z(t,N(f(u,t))):(Z(t,a.defaultValue),w(u,t,N(a.defaultValue))),a.keepTouched||T(s.touchedFields,t),a.keepDirty||(T(s.dirtyFields,t),s.isDirty=a.defaultValue?V(t,N(f(u,t))):V()),a.keepError||(T(s.errors,t),F.isValid&&J()),_.state.next({...s}))},He=(t,a={})=>{const l=t?N(t):u,y=N(l),d=t&&!B(t)?y:u;if(a.keepDefaultValues||(u=l),!a.keepValues){if(a.keepDirtyValues)for(const c of h.mount)f(s.dirtyFields,c)?w(d,c,f(o,c)):Z(c,f(d,c));else{if(Te&&p(t))for(const c of h.mount){const v=f(n,c);if(v&&v._f){const D=Array.isArray(v._f.refs)?v._f.refs[0]:v._f.ref;if(_e(D)){const O=D.closest("form");if(O){O.reset();break}}}}n={}}o=e.shouldUnregister?a.keepDefaultValues?N(u):{}:N(d),_.array.next({values:{...d}}),_.values.next({values:{...d}})}h={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!g.mount&&i(),g.mount=!F.isValid||!!a.keepIsValid,g.watch=!!e.shouldUnregister,_.state.next({submitCount:a.keepSubmitCount?s.submitCount:0,isDirty:a.keepDirty?s.isDirty:!!(a.keepDefaultValues&&!ee(t,u)),isSubmitted:a.keepIsSubmitted?s.isSubmitted:!1,dirtyFields:a.keepDirtyValues?s.dirtyFields:a.keepDefaultValues&&t?Ce(u,t):{},touchedFields:a.keepTouched?s.touchedFields:{},errors:a.keepErrors?s.errors:{},isSubmitSuccessful:a.keepIsSubmitSuccessful?s.isSubmitSuccessful:!1,isSubmitting:!1})},$e=(t,a)=>He(Q(t)?t(o):t,a);return{control:{register:De,unregister:we,getFieldState:Pe,handleSubmit:We,setError:Ie,_executeSchema:q,_getWatch:k,_getDirty:V,_updateValid:J,_removeUnmounted:A,_updateFieldArray:K,_updateDisabledField:je,_getFieldArray:R,_reset:He,_resetDefaultValues:()=>Q(r.defaultValues)&&r.defaultValues().then(t=>{$e(t,r.resetOptions),_.state.next({isLoading:!1})}),_updateFormState:t=>{s={...s,...t}},_disableForm:xt,_subjects:_,_proxyFormState:F,_setErrors:C,get _fields(){return n},get _formValues(){return o},get _state(){return g},set _state(t){g=t},get _defaultValues(){return u},get _names(){return h},set _names(t){h=t},get _formState(){return s},set _formState(t){s=t},get _options(){return r},set _options(t){r={...r,...t}}},trigger:Ae,register:De,handleSubmit:We,watch:mt,setValue:Z,getValues:Be,reset:$e,resetField:Ft,clearErrors:Vt,unregister:we,setError:Ie,setFocus:(t,a={})=>{const l=f(n,t),y=l&&l._f;if(y){const d=y.refs?y.refs[0]:y.ref;d.focus&&(d.focus(),a.shouldSelect&&d.select())}},getFieldState:Pe}}function Zt(e={}){const i=S.useRef(),r=S.useRef(),[s,n]=S.useState({isDirty:!1,isValidating:!1,isLoading:Q(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Q(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...Ht(e,()=>n(o=>({...o}))),formState:s});const u=i.current.control;return u._options=e,Ue({subject:u._subjects.state,next:o=>{ut(o,u._proxyFormState,u._updateFormState,!0)&&n({...u._formState})}}),S.useEffect(()=>u._disableForm(e.disabled),[u,e.disabled]),S.useEffect(()=>{if(u._proxyFormState.isDirty){const o=u._getDirty();o!==s.isDirty&&u._subjects.state.next({isDirty:o})}},[u,s.isDirty]),S.useEffect(()=>{e.values&&!ee(e.values,r.current)?(u._reset(e.values,u._options.resetOptions),r.current=e.values,n(o=>({...o}))):u._resetDefaultValues()},[e.values,u]),S.useEffect(()=>{e.errors&&u._setErrors(e.errors)},[e.errors,u]),S.useEffect(()=>{u._state.mount||(u._updateValid(),u._state.mount=!0),u._state.watch&&(u._state.watch=!1,u._subjects.state.next({...u._formState})),u._removeUnmounted()}),i.current.formState=at(s,u),i.current}var rt=function(e,i,r){if(e&&"reportValidity"in e){var s=f(r,i);e.setCustomValidity(s&&s.message||""),e.reportValidity()}},bt=function(e,i){var r=function(n){var u=i.fields[n];u&&u.ref&&"reportValidity"in u.ref?rt(u.ref,n,e):u.refs&&u.refs.forEach(function(o){return rt(o,n,e)})};for(var s in i.fields)r(s)},$t=function(e,i){i.shouldUseNativeValidation&&bt(e,i);var r={};for(var s in e){var n=f(i.fields,s),u=Object.assign(e[s]||{},{ref:n&&n.ref});if(Kt(i.names||Object.keys(e),s)){var o=Object.assign({},f(r,s));w(o,"root",u),w(r,s,o)}else w(r,s,u)}return r},Kt=function(e,i){return e.some(function(r){return r.startsWith(i+".")})};function er(e,i,r){return i===void 0&&(i={}),r===void 0&&(r={}),function(s,n,u){try{return Promise.resolve(function(o,g){try{var h=(i.context,Promise.resolve(e[r.mode==="sync"?"validateSync":"validate"](s,Object.assign({abortEarly:!1},i,{context:n}))).then(function(x){return u.shouldUseNativeValidation&&bt({},u),{values:r.raw?s:x,errors:{}}}))}catch(x){return g(x)}return h&&h.then?h.then(void 0,g):h}(0,function(o){if(!o.inner)throw o;return{values:{},errors:$t((g=o,h=!u.shouldUseNativeValidation&&u.criteriaMode==="all",(g.inner||[]).reduce(function(x,b){if(x[b.path]||(x[b.path]={message:b.message,type:b.type}),h){var F=x[b.path].types,_=F&&F[b.type];x[b.path]=ft(b.path,h,x,b.type,_?[].concat(_,b.message):b.message)}return x},{})),u)};var g,h}))}catch(o){return Promise.reject(o)}}}export{Xt as C,Qt as I,er as o,Zt as u};
