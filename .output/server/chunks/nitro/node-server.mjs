globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import Rt, { Server as Server$1 } from 'node:http';
import Ka, { Server } from 'node:https';
import nt from 'node:zlib';
import se, { PassThrough, pipeline } from 'node:stream';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promisify, deprecate, types } from 'node:util';
import { format, fileURLToPath } from 'node:url';
import { isIP } from 'node:net';
import { statSync, promises, createReadStream } from 'node:fs';
import { basename } from 'node:path';
import { promises as promises$1, existsSync } from 'fs';
import { dirname as dirname$1, resolve as resolve$1, join } from 'path';

var Za=Object.defineProperty;var n=(i,o)=>Za(i,"name",{value:o,configurable:!0});var Ko=(i,o,a)=>{if(!o.has(i))throw TypeError("Cannot "+a)};var k=(i,o,a)=>(Ko(i,o,"read from private field"),a?a.call(i):o.get(i)),ae=(i,o,a)=>{if(o.has(i))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(i):o.set(i,a);},Y=(i,o,a,l)=>(Ko(i,o,"write to private field"),l?l.call(i,a):o.set(i,a),a);var me,vt,ct,wr,xe,Et,At,Wt,G,Bt,Ue,Ne,kt;function os(i){if(!/^data:/i.test(i))throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');i=i.replace(/\r?\n/g,"");const o=i.indexOf(",");if(o===-1||o<=4)throw new TypeError("malformed data: URI");const a=i.substring(5,o).split(";");let l="",u=!1;const d=a[0]||"text/plain";let p=d;for(let I=1;I<a.length;I++)a[I]==="base64"?u=!0:a[I]&&(p+=`;${a[I]}`,a[I].indexOf("charset=")===0&&(l=a[I].substring(8)));!a[0]&&!l.length&&(p+=";charset=US-ASCII",l="US-ASCII");const m=u?"base64":"ascii",C=unescape(i.substring(o+1)),S=Buffer.from(C,m);return S.type=d,S.typeFull=p,S.charset=l,S}n(os,"dataUriToBuffer");var _n=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof self<"u"?self:{};function is(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}n(is,"getDefaultExportFromCjs");var cr={exports:{}},Xo;function as(){return Xo||(Xo=1,function(i,o){(function(a,l){l(o);})(_n,function(a){const l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol:e=>`Symbol(${e})`;function u(){}n(u,"noop");function d(){if(typeof self<"u")return self;if(typeof _n<"u")return _n}n(d,"getGlobals");const p=d();function m(e){return typeof e=="object"&&e!==null||typeof e=="function"}n(m,"typeIsObject");const C=u,S=Promise,I=Promise.prototype.then,re=Promise.resolve.bind(S),L=Promise.reject.bind(S);function E(e){return new S(e)}n(E,"newPromise");function b(e){return re(e)}n(b,"promiseResolvedWith");function g(e){return L(e)}n(g,"promiseRejectedWith");function A(e,t,r){return I.call(e,t,r)}n(A,"PerformPromiseThen");function q(e,t,r){A(A(e,t,r),void 0,C);}n(q,"uponPromise");function ne(e,t){q(e,t);}n(ne,"uponFulfillment");function dt(e,t){q(e,void 0,t);}n(dt,"uponRejection");function O(e,t,r){return A(e,t,r)}n(O,"transformPromiseWith");function $(e){A(e,void 0,C);}n($,"setPromiseIsHandledToTrue");const F=(()=>{const e=p&&p.queueMicrotask;if(typeof e=="function")return e;const t=b(void 0);return r=>A(t,r)})();function ve(e,t,r){if(typeof e!="function")throw new TypeError("Argument is not a function");return Function.prototype.apply.call(e,t,r)}n(ve,"reflectCall");function ue(e,t,r){try{return b(ve(e,t,r))}catch(s){return g(s)}}n(ue,"promiseCall");const jn=16384,rn=class rn{constructor(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0;}get length(){return this._size}push(t){const r=this._back;let s=r;r._elements.length===jn-1&&(s={_elements:[],_next:void 0}),r._elements.push(t),s!==r&&(this._back=s,r._next=s),++this._size;}shift(){const t=this._front;let r=t;const s=this._cursor;let f=s+1;const c=t._elements,h=c[s];return f===jn&&(r=t._next,f=0),--this._size,this._cursor=f,t!==r&&(this._front=r),c[s]=void 0,h}forEach(t){let r=this._cursor,s=this._front,f=s._elements;for(;(r!==f.length||s._next!==void 0)&&!(r===f.length&&(s=s._next,f=s._elements,r=0,f.length===0));)t(f[r]),++r;}peek(){const t=this._front,r=this._cursor;return t._elements[r]}};n(rn,"SimpleQueue");let x=rn;function Fn(e,t){e._ownerReadableStream=t,t._reader=e,t._state==="readable"?vr(e):t._state==="closed"?Pi(e):In(e,t._storedError);}n(Fn,"ReadableStreamReaderGenericInitialize");function Pr(e,t){const r=e._ownerReadableStream;return J(r,t)}n(Pr,"ReadableStreamReaderGenericCancel");function fe(e){e._ownerReadableStream._state==="readable"?Er(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):vi(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),e._ownerReadableStream._reader=void 0,e._ownerReadableStream=void 0;}n(fe,"ReadableStreamReaderGenericRelease");function He(e){return new TypeError("Cannot "+e+" a stream using a released reader")}n(He,"readerLockException");function vr(e){e._closedPromise=E((t,r)=>{e._closedPromise_resolve=t,e._closedPromise_reject=r;});}n(vr,"defaultReaderClosedPromiseInitialize");function In(e,t){vr(e),Er(e,t);}n(In,"defaultReaderClosedPromiseInitializeAsRejected");function Pi(e){vr(e),Ln(e);}n(Pi,"defaultReaderClosedPromiseInitializeAsResolved");function Er(e,t){e._closedPromise_reject!==void 0&&($(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0);}n(Er,"defaultReaderClosedPromiseReject");function vi(e,t){In(e,t);}n(vi,"defaultReaderClosedPromiseResetToRejected");function Ln(e){e._closedPromise_resolve!==void 0&&(e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0);}n(Ln,"defaultReaderClosedPromiseResolve");const $n=l("[[AbortSteps]]"),Dn=l("[[ErrorSteps]]"),Ar=l("[[CancelSteps]]"),Wr=l("[[PullSteps]]"),Mn=Number.isFinite||function(e){return typeof e=="number"&&isFinite(e)},Ei=Math.trunc||function(e){return e<0?Math.ceil(e):Math.floor(e)};function Ai(e){return typeof e=="object"||typeof e=="function"}n(Ai,"isDictionary");function ce(e,t){if(e!==void 0&&!Ai(e))throw new TypeError(`${t} is not an object.`)}n(ce,"assertDictionary");function Z(e,t){if(typeof e!="function")throw new TypeError(`${t} is not a function.`)}n(Z,"assertFunction");function Wi(e){return typeof e=="object"&&e!==null||typeof e=="function"}n(Wi,"isObject");function Un(e,t){if(!Wi(e))throw new TypeError(`${t} is not an object.`)}n(Un,"assertObject");function de(e,t,r){if(e===void 0)throw new TypeError(`Parameter ${t} is required in '${r}'.`)}n(de,"assertRequiredArgument");function Br(e,t,r){if(e===void 0)throw new TypeError(`${t} is required in '${r}'.`)}n(Br,"assertRequiredField");function kr(e){return Number(e)}n(kr,"convertUnrestrictedDouble");function Nn(e){return e===0?0:e}n(Nn,"censorNegativeZero");function Bi(e){return Nn(Ei(e))}n(Bi,"integerPart");function xn(e,t){const s=Number.MAX_SAFE_INTEGER;let f=Number(e);if(f=Nn(f),!Mn(f))throw new TypeError(`${t} is not a finite number`);if(f=Bi(f),f<0||f>s)throw new TypeError(`${t} is outside the accepted range of 0 to ${s}, inclusive`);return !Mn(f)||f===0?0:f}n(xn,"convertUnsignedLongLongWithEnforceRange");function Or(e,t){if(!Te(e))throw new TypeError(`${t} is not a ReadableStream.`)}n(Or,"assertReadableStream");function Ve(e){return new Ee(e)}n(Ve,"AcquireReadableStreamDefaultReader");function Hn(e,t){e._reader._readRequests.push(t);}n(Hn,"ReadableStreamAddReadRequest");function qr(e,t,r){const f=e._reader._readRequests.shift();r?f._closeSteps():f._chunkSteps(t);}n(qr,"ReadableStreamFulfillReadRequest");function Ot(e){return e._reader._readRequests.length}n(Ot,"ReadableStreamGetNumReadRequests");function Vn(e){const t=e._reader;return !(t===void 0||!ye(t))}n(Vn,"ReadableStreamHasDefaultReader");const nn=class nn{constructor(t){if(de(t,1,"ReadableStreamDefaultReader"),Or(t,"First parameter"),Ce(t))throw new TypeError("This stream has already been locked for exclusive reading by another reader");Fn(this,t),this._readRequests=new x;}get closed(){return ye(this)?this._closedPromise:g(qt("closed"))}cancel(t=void 0){return ye(this)?this._ownerReadableStream===void 0?g(He("cancel")):Pr(this,t):g(qt("cancel"))}read(){if(!ye(this))return g(qt("read"));if(this._ownerReadableStream===void 0)return g(He("read from"));let t,r;const s=E((c,h)=>{t=c,r=h;});return ht(this,{_chunkSteps:c=>t({value:c,done:!1}),_closeSteps:()=>t({value:void 0,done:!0}),_errorSteps:c=>r(c)}),s}releaseLock(){if(!ye(this))throw qt("releaseLock");if(this._ownerReadableStream!==void 0){if(this._readRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");fe(this);}}};n(nn,"ReadableStreamDefaultReader");let Ee=nn;Object.defineProperties(Ee.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),typeof l.toStringTag=="symbol"&&Object.defineProperty(Ee.prototype,l.toStringTag,{value:"ReadableStreamDefaultReader",configurable:!0});function ye(e){return !m(e)||!Object.prototype.hasOwnProperty.call(e,"_readRequests")?!1:e instanceof Ee}n(ye,"IsReadableStreamDefaultReader");function ht(e,t){const r=e._ownerReadableStream;r._disturbed=!0,r._state==="closed"?t._closeSteps():r._state==="errored"?t._errorSteps(r._storedError):r._readableStreamController[Wr](t);}n(ht,"ReadableStreamDefaultReaderRead");function qt(e){return new TypeError(`ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`)}n(qt,"defaultReaderBrandCheckException");const Qn=Object.getPrototypeOf(Object.getPrototypeOf(async function*(){}).prototype),on=class on{constructor(t,r){this._ongoingPromise=void 0,this._isFinished=!1,this._reader=t,this._preventCancel=r;}next(){const t=n(()=>this._nextSteps(),"nextSteps");return this._ongoingPromise=this._ongoingPromise?O(this._ongoingPromise,t,t):t(),this._ongoingPromise}return(t){const r=n(()=>this._returnSteps(t),"returnSteps");return this._ongoingPromise?O(this._ongoingPromise,r,r):r()}_nextSteps(){if(this._isFinished)return Promise.resolve({value:void 0,done:!0});const t=this._reader;if(t._ownerReadableStream===void 0)return g(He("iterate"));let r,s;const f=E((h,y)=>{r=h,s=y;});return ht(t,{_chunkSteps:h=>{this._ongoingPromise=void 0,F(()=>r({value:h,done:!1}));},_closeSteps:()=>{this._ongoingPromise=void 0,this._isFinished=!0,fe(t),r({value:void 0,done:!0});},_errorSteps:h=>{this._ongoingPromise=void 0,this._isFinished=!0,fe(t),s(h);}}),f}_returnSteps(t){if(this._isFinished)return Promise.resolve({value:t,done:!0});this._isFinished=!0;const r=this._reader;if(r._ownerReadableStream===void 0)return g(He("finish iterating"));if(!this._preventCancel){const s=Pr(r,t);return fe(r),O(s,()=>({value:t,done:!0}))}return fe(r),b({value:t,done:!0})}};n(on,"ReadableStreamAsyncIteratorImpl");let zt=on;const Yn={next(){return Gn(this)?this._asyncIteratorImpl.next():g(Zn("next"))},return(e){return Gn(this)?this._asyncIteratorImpl.return(e):g(Zn("return"))}};Qn!==void 0&&Object.setPrototypeOf(Yn,Qn);function ki(e,t){const r=Ve(e),s=new zt(r,t),f=Object.create(Yn);return f._asyncIteratorImpl=s,f}n(ki,"AcquireReadableStreamAsyncIterator");function Gn(e){if(!m(e)||!Object.prototype.hasOwnProperty.call(e,"_asyncIteratorImpl"))return !1;try{return e._asyncIteratorImpl instanceof zt}catch{return !1}}n(Gn,"IsReadableStreamAsyncIterator");function Zn(e){return new TypeError(`ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`)}n(Zn,"streamAsyncIteratorBrandCheckException");const Kn=Number.isNaN||function(e){return e!==e};function pt(e){return e.slice()}n(pt,"CreateArrayFromList");function Jn(e,t,r,s,f){new Uint8Array(e).set(new Uint8Array(r,s,f),t);}n(Jn,"CopyDataBlockBytes");function Ks(e){return e}n(Ks,"TransferArrayBuffer");function jt(e){return !1}n(jt,"IsDetachedBuffer");function Xn(e,t,r){if(e.slice)return e.slice(t,r);const s=r-t,f=new ArrayBuffer(s);return Jn(f,0,e,t,s),f}n(Xn,"ArrayBufferSlice");function Oi(e){return !(typeof e!="number"||Kn(e)||e<0)}n(Oi,"IsNonNegativeNumber");function eo(e){const t=Xn(e.buffer,e.byteOffset,e.byteOffset+e.byteLength);return new Uint8Array(t)}n(eo,"CloneAsUint8Array");function zr(e){const t=e._queue.shift();return e._queueTotalSize-=t.size,e._queueTotalSize<0&&(e._queueTotalSize=0),t.value}n(zr,"DequeueValue");function jr(e,t,r){if(!Oi(r)||r===1/0)throw new RangeError("Size must be a finite, non-NaN, non-negative number.");e._queue.push({value:t,size:r}),e._queueTotalSize+=r;}n(jr,"EnqueueValueWithSize");function qi(e){return e._queue.peek().value}n(qi,"PeekQueueValue");function ge(e){e._queue=new x,e._queueTotalSize=0;}n(ge,"ResetQueue");const an=class an{constructor(){throw new TypeError("Illegal constructor")}get view(){if(!Fr(this))throw Dr("view");return this._view}respond(t){if(!Fr(this))throw Dr("respond");if(de(t,1,"respond"),t=xn(t,"First parameter"),this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");jt(this._view.buffer),Dt(this._associatedReadableByteStreamController,t);}respondWithNewView(t){if(!Fr(this))throw Dr("respondWithNewView");if(de(t,1,"respondWithNewView"),!ArrayBuffer.isView(t))throw new TypeError("You can only respond with array buffer views");if(this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");jt(t.buffer),Mt(this._associatedReadableByteStreamController,t);}};n(an,"ReadableStreamBYOBRequest");let Ae=an;Object.defineProperties(Ae.prototype,{respond:{enumerable:!0},respondWithNewView:{enumerable:!0},view:{enumerable:!0}}),typeof l.toStringTag=="symbol"&&Object.defineProperty(Ae.prototype,l.toStringTag,{value:"ReadableStreamBYOBRequest",configurable:!0});const sn=class sn{constructor(){throw new TypeError("Illegal constructor")}get byobRequest(){if(!We(this))throw mt("byobRequest");return $r(this)}get desiredSize(){if(!We(this))throw mt("desiredSize");return lo(this)}close(){if(!We(this))throw mt("close");if(this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!");const t=this._controlledReadableByteStream._state;if(t!=="readable")throw new TypeError(`The stream (in ${t} state) is not in the readable state and cannot be closed`);bt(this);}enqueue(t){if(!We(this))throw mt("enqueue");if(de(t,1,"enqueue"),!ArrayBuffer.isView(t))throw new TypeError("chunk must be an array buffer view");if(t.byteLength===0)throw new TypeError("chunk must have non-zero byteLength");if(t.buffer.byteLength===0)throw new TypeError("chunk's buffer must have non-zero byteLength");if(this._closeRequested)throw new TypeError("stream is closed or draining");const r=this._controlledReadableByteStream._state;if(r!=="readable")throw new TypeError(`The stream (in ${r} state) is not in the readable state and cannot be enqueued to`);$t(this,t);}error(t=void 0){if(!We(this))throw mt("error");K(this,t);}[Ar](t){to(this),ge(this);const r=this._cancelAlgorithm(t);return Lt(this),r}[Wr](t){const r=this._controlledReadableByteStream;if(this._queueTotalSize>0){const f=this._queue.shift();this._queueTotalSize-=f.byteLength,io(this);const c=new Uint8Array(f.buffer,f.byteOffset,f.byteLength);t._chunkSteps(c);return}const s=this._autoAllocateChunkSize;if(s!==void 0){let f;try{f=new ArrayBuffer(s);}catch(h){t._errorSteps(h);return}const c={buffer:f,bufferByteLength:s,byteOffset:0,byteLength:s,bytesFilled:0,elementSize:1,viewConstructor:Uint8Array,readerType:"default"};this._pendingPullIntos.push(c);}Hn(r,t),Be(this);}};n(sn,"ReadableByteStreamController");let _e=sn;Object.defineProperties(_e.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},byobRequest:{enumerable:!0},desiredSize:{enumerable:!0}}),typeof l.toStringTag=="symbol"&&Object.defineProperty(_e.prototype,l.toStringTag,{value:"ReadableByteStreamController",configurable:!0});function We(e){return !m(e)||!Object.prototype.hasOwnProperty.call(e,"_controlledReadableByteStream")?!1:e instanceof _e}n(We,"IsReadableByteStreamController");function Fr(e){return !m(e)||!Object.prototype.hasOwnProperty.call(e,"_associatedReadableByteStreamController")?!1:e instanceof Ae}n(Fr,"IsReadableStreamBYOBRequest");function Be(e){if(!Ii(e))return;if(e._pulling){e._pullAgain=!0;return}e._pulling=!0;const r=e._pullAlgorithm();q(r,()=>{e._pulling=!1,e._pullAgain&&(e._pullAgain=!1,Be(e));},s=>{K(e,s);});}n(Be,"ReadableByteStreamControllerCallPullIfNeeded");function to(e){Lr(e),e._pendingPullIntos=new x;}n(to,"ReadableByteStreamControllerClearPendingPullIntos");function Ir(e,t){let r=!1;e._state==="closed"&&(r=!0);const s=ro(t);t.readerType==="default"?qr(e,s,r):Di(e,s,r);}n(Ir,"ReadableByteStreamControllerCommitPullIntoDescriptor");function ro(e){const t=e.bytesFilled,r=e.elementSize;return new e.viewConstructor(e.buffer,e.byteOffset,t/r)}n(ro,"ReadableByteStreamControllerConvertPullIntoDescriptor");function Ft(e,t,r,s){e._queue.push({buffer:t,byteOffset:r,byteLength:s}),e._queueTotalSize+=s;}n(Ft,"ReadableByteStreamControllerEnqueueChunkToQueue");function no(e,t){const r=t.elementSize,s=t.bytesFilled-t.bytesFilled%r,f=Math.min(e._queueTotalSize,t.byteLength-t.bytesFilled),c=t.bytesFilled+f,h=c-c%r;let y=f,w=!1;h>s&&(y=h-t.bytesFilled,w=!0);const T=e._queue;for(;y>0;){const P=T.peek(),v=Math.min(y,P.byteLength),z=t.byteOffset+t.bytesFilled;Jn(t.buffer,z,P.buffer,P.byteOffset,v),P.byteLength===v?T.shift():(P.byteOffset+=v,P.byteLength-=v),e._queueTotalSize-=v,oo(e,v,t),y-=v;}return w}n(no,"ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");function oo(e,t,r){r.bytesFilled+=t;}n(oo,"ReadableByteStreamControllerFillHeadPullIntoDescriptor");function io(e){e._queueTotalSize===0&&e._closeRequested?(Lt(e),wt(e._controlledReadableByteStream)):Be(e);}n(io,"ReadableByteStreamControllerHandleQueueDrain");function Lr(e){e._byobRequest!==null&&(e._byobRequest._associatedReadableByteStreamController=void 0,e._byobRequest._view=null,e._byobRequest=null);}n(Lr,"ReadableByteStreamControllerInvalidateBYOBRequest");function ao(e){for(;e._pendingPullIntos.length>0;){if(e._queueTotalSize===0)return;const t=e._pendingPullIntos.peek();no(e,t)&&(It(e),Ir(e._controlledReadableByteStream,t));}}n(ao,"ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");function zi(e,t,r){const s=e._controlledReadableByteStream;let f=1;t.constructor!==DataView&&(f=t.constructor.BYTES_PER_ELEMENT);const c=t.constructor,h=t.buffer,y={buffer:h,bufferByteLength:h.byteLength,byteOffset:t.byteOffset,byteLength:t.byteLength,bytesFilled:0,elementSize:f,viewConstructor:c,readerType:"byob"};if(e._pendingPullIntos.length>0){e._pendingPullIntos.push(y),co(s,r);return}if(s._state==="closed"){const w=new c(y.buffer,y.byteOffset,0);r._closeSteps(w);return}if(e._queueTotalSize>0){if(no(e,y)){const w=ro(y);io(e),r._chunkSteps(w);return}if(e._closeRequested){const w=new TypeError("Insufficient bytes to fill elements in the given buffer");K(e,w),r._errorSteps(w);return}}e._pendingPullIntos.push(y),co(s,r),Be(e);}n(zi,"ReadableByteStreamControllerPullInto");function ji(e,t){const r=e._controlledReadableByteStream;if(Mr(r))for(;ho(r)>0;){const s=It(e);Ir(r,s);}}n(ji,"ReadableByteStreamControllerRespondInClosedState");function Fi(e,t,r){if(oo(e,t,r),r.bytesFilled<r.elementSize)return;It(e);const s=r.bytesFilled%r.elementSize;if(s>0){const f=r.byteOffset+r.bytesFilled,c=Xn(r.buffer,f-s,f);Ft(e,c,0,c.byteLength);}r.bytesFilled-=s,Ir(e._controlledReadableByteStream,r),ao(e);}n(Fi,"ReadableByteStreamControllerRespondInReadableState");function so(e,t){const r=e._pendingPullIntos.peek();Lr(e),e._controlledReadableByteStream._state==="closed"?ji(e):Fi(e,t,r),Be(e);}n(so,"ReadableByteStreamControllerRespondInternal");function It(e){return e._pendingPullIntos.shift()}n(It,"ReadableByteStreamControllerShiftPendingPullInto");function Ii(e){const t=e._controlledReadableByteStream;return t._state!=="readable"||e._closeRequested||!e._started?!1:!!(Vn(t)&&Ot(t)>0||Mr(t)&&ho(t)>0||lo(e)>0)}n(Ii,"ReadableByteStreamControllerShouldCallPull");function Lt(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0;}n(Lt,"ReadableByteStreamControllerClearAlgorithms");function bt(e){const t=e._controlledReadableByteStream;if(!(e._closeRequested||t._state!=="readable")){if(e._queueTotalSize>0){e._closeRequested=!0;return}if(e._pendingPullIntos.length>0&&e._pendingPullIntos.peek().bytesFilled>0){const s=new TypeError("Insufficient bytes to fill elements in the given buffer");throw K(e,s),s}Lt(e),wt(t);}}n(bt,"ReadableByteStreamControllerClose");function $t(e,t){const r=e._controlledReadableByteStream;if(e._closeRequested||r._state!=="readable")return;const s=t.buffer,f=t.byteOffset,c=t.byteLength,h=s;if(e._pendingPullIntos.length>0){const y=e._pendingPullIntos.peek();jt(y.buffer),y.buffer=y.buffer;}if(Lr(e),Vn(r))if(Ot(r)===0)Ft(e,h,f,c);else {e._pendingPullIntos.length>0&&It(e);const y=new Uint8Array(h,f,c);qr(r,y,!1);}else Mr(r)?(Ft(e,h,f,c),ao(e)):Ft(e,h,f,c);Be(e);}n($t,"ReadableByteStreamControllerEnqueue");function K(e,t){const r=e._controlledReadableByteStream;r._state==="readable"&&(to(e),ge(e),Lt(e),Io(r,t));}n(K,"ReadableByteStreamControllerError");function $r(e){if(e._byobRequest===null&&e._pendingPullIntos.length>0){const t=e._pendingPullIntos.peek(),r=new Uint8Array(t.buffer,t.byteOffset+t.bytesFilled,t.byteLength-t.bytesFilled),s=Object.create(Ae.prototype);$i(s,e,r),e._byobRequest=s;}return e._byobRequest}n($r,"ReadableByteStreamControllerGetBYOBRequest");function lo(e){const t=e._controlledReadableByteStream._state;return t==="errored"?null:t==="closed"?0:e._strategyHWM-e._queueTotalSize}n(lo,"ReadableByteStreamControllerGetDesiredSize");function Dt(e,t){const r=e._pendingPullIntos.peek();if(e._controlledReadableByteStream._state==="closed"){if(t!==0)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")}else {if(t===0)throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");if(r.bytesFilled+t>r.byteLength)throw new RangeError("bytesWritten out of range")}r.buffer=r.buffer,so(e,t);}n(Dt,"ReadableByteStreamControllerRespond");function Mt(e,t){const r=e._pendingPullIntos.peek();if(e._controlledReadableByteStream._state==="closed"){if(t.byteLength!==0)throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream")}else if(t.byteLength===0)throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");if(r.byteOffset+r.bytesFilled!==t.byteOffset)throw new RangeError("The region specified by view does not match byobRequest");if(r.bufferByteLength!==t.buffer.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest");if(r.bytesFilled+t.byteLength>r.byteLength)throw new RangeError("The region specified by view is larger than byobRequest");const f=t.byteLength;r.buffer=t.buffer,so(e,f);}n(Mt,"ReadableByteStreamControllerRespondWithNewView");function uo(e,t,r,s,f,c,h){t._controlledReadableByteStream=e,t._pullAgain=!1,t._pulling=!1,t._byobRequest=null,t._queue=t._queueTotalSize=void 0,ge(t),t._closeRequested=!1,t._started=!1,t._strategyHWM=c,t._pullAlgorithm=s,t._cancelAlgorithm=f,t._autoAllocateChunkSize=h,t._pendingPullIntos=new x,e._readableStreamController=t;const y=r();q(b(y),()=>{t._started=!0,Be(t);},w=>{K(t,w);});}n(uo,"SetUpReadableByteStreamController");function Li(e,t,r){const s=Object.create(_e.prototype);let f=n(()=>{},"startAlgorithm"),c=n(()=>b(void 0),"pullAlgorithm"),h=n(()=>b(void 0),"cancelAlgorithm");t.start!==void 0&&(f=n(()=>t.start(s),"startAlgorithm")),t.pull!==void 0&&(c=n(()=>t.pull(s),"pullAlgorithm")),t.cancel!==void 0&&(h=n(w=>t.cancel(w),"cancelAlgorithm"));const y=t.autoAllocateChunkSize;if(y===0)throw new TypeError("autoAllocateChunkSize must be greater than 0");uo(e,s,f,c,h,r,y);}n(Li,"SetUpReadableByteStreamControllerFromUnderlyingSource");function $i(e,t,r){e._associatedReadableByteStreamController=t,e._view=r;}n($i,"SetUpReadableStreamBYOBRequest");function Dr(e){return new TypeError(`ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`)}n(Dr,"byobRequestBrandCheckException");function mt(e){return new TypeError(`ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`)}n(mt,"byteStreamControllerBrandCheckException");function fo(e){return new ke(e)}n(fo,"AcquireReadableStreamBYOBReader");function co(e,t){e._reader._readIntoRequests.push(t);}n(co,"ReadableStreamAddReadIntoRequest");function Di(e,t,r){const f=e._reader._readIntoRequests.shift();r?f._closeSteps(t):f._chunkSteps(t);}n(Di,"ReadableStreamFulfillReadIntoRequest");function ho(e){return e._reader._readIntoRequests.length}n(ho,"ReadableStreamGetNumReadIntoRequests");function Mr(e){const t=e._reader;return !(t===void 0||!Oe(t))}n(Mr,"ReadableStreamHasBYOBReader");const ln=class ln{constructor(t){if(de(t,1,"ReadableStreamBYOBReader"),Or(t,"First parameter"),Ce(t))throw new TypeError("This stream has already been locked for exclusive reading by another reader");if(!We(t._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");Fn(this,t),this._readIntoRequests=new x;}get closed(){return Oe(this)?this._closedPromise:g(Ut("closed"))}cancel(t=void 0){return Oe(this)?this._ownerReadableStream===void 0?g(He("cancel")):Pr(this,t):g(Ut("cancel"))}read(t){if(!Oe(this))return g(Ut("read"));if(!ArrayBuffer.isView(t))return g(new TypeError("view must be an array buffer view"));if(t.byteLength===0)return g(new TypeError("view must have non-zero byteLength"));if(t.buffer.byteLength===0)return g(new TypeError("view's buffer must have non-zero byteLength"));if(jt(t.buffer),this._ownerReadableStream===void 0)return g(He("read from"));let r,s;const f=E((h,y)=>{r=h,s=y;});return po(this,t,{_chunkSteps:h=>r({value:h,done:!1}),_closeSteps:h=>r({value:h,done:!0}),_errorSteps:h=>s(h)}),f}releaseLock(){if(!Oe(this))throw Ut("releaseLock");if(this._ownerReadableStream!==void 0){if(this._readIntoRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");fe(this);}}};n(ln,"ReadableStreamBYOBReader");let ke=ln;Object.defineProperties(ke.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),typeof l.toStringTag=="symbol"&&Object.defineProperty(ke.prototype,l.toStringTag,{value:"ReadableStreamBYOBReader",configurable:!0});function Oe(e){return !m(e)||!Object.prototype.hasOwnProperty.call(e,"_readIntoRequests")?!1:e instanceof ke}n(Oe,"IsReadableStreamBYOBReader");function po(e,t,r){const s=e._ownerReadableStream;s._disturbed=!0,s._state==="errored"?r._errorSteps(s._storedError):zi(s._readableStreamController,t,r);}n(po,"ReadableStreamBYOBReaderRead");function Ut(e){return new TypeError(`ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`)}n(Ut,"byobReaderBrandCheckException");function yt(e,t){const{highWaterMark:r}=e;if(r===void 0)return t;if(Kn(r)||r<0)throw new RangeError("Invalid highWaterMark");return r}n(yt,"ExtractHighWaterMark");function Nt(e){const{size:t}=e;return t||(()=>1)}n(Nt,"ExtractSizeAlgorithm");function xt(e,t){ce(e,t);const r=e?.highWaterMark,s=e?.size;return {highWaterMark:r===void 0?void 0:kr(r),size:s===void 0?void 0:Mi(s,`${t} has member 'size' that`)}}n(xt,"convertQueuingStrategy");function Mi(e,t){return Z(e,t),r=>kr(e(r))}n(Mi,"convertQueuingStrategySize");function Ui(e,t){ce(e,t);const r=e?.abort,s=e?.close,f=e?.start,c=e?.type,h=e?.write;return {abort:r===void 0?void 0:Ni(r,e,`${t} has member 'abort' that`),close:s===void 0?void 0:xi(s,e,`${t} has member 'close' that`),start:f===void 0?void 0:Hi(f,e,`${t} has member 'start' that`),write:h===void 0?void 0:Vi(h,e,`${t} has member 'write' that`),type:c}}n(Ui,"convertUnderlyingSink");function Ni(e,t,r){return Z(e,r),s=>ue(e,t,[s])}n(Ni,"convertUnderlyingSinkAbortCallback");function xi(e,t,r){return Z(e,r),()=>ue(e,t,[])}n(xi,"convertUnderlyingSinkCloseCallback");function Hi(e,t,r){return Z(e,r),s=>ve(e,t,[s])}n(Hi,"convertUnderlyingSinkStartCallback");function Vi(e,t,r){return Z(e,r),(s,f)=>ue(e,t,[s,f])}n(Vi,"convertUnderlyingSinkWriteCallback");function bo(e,t){if(!Qe(e))throw new TypeError(`${t} is not a WritableStream.`)}n(bo,"assertWritableStream");function Qi(e){if(typeof e!="object"||e===null)return !1;try{return typeof e.aborted=="boolean"}catch{return !1}}n(Qi,"isAbortSignal");const Yi=typeof AbortController=="function";function Gi(){if(Yi)return new AbortController}n(Gi,"createAbortController");const un=class un{constructor(t={},r={}){t===void 0?t=null:Un(t,"First parameter");const s=xt(r,"Second parameter"),f=Ui(t,"First parameter");if(yo(this),f.type!==void 0)throw new RangeError("Invalid type is specified");const h=Nt(s),y=yt(s,1);ua(this,f,y,h);}get locked(){if(!Qe(this))throw Gt("locked");return Ye(this)}abort(t=void 0){return Qe(this)?Ye(this)?g(new TypeError("Cannot abort a stream that already has a writer")):Ht(this,t):g(Gt("abort"))}close(){return Qe(this)?Ye(this)?g(new TypeError("Cannot close a stream that already has a writer")):oe(this)?g(new TypeError("Cannot close an already-closing stream")):go(this):g(Gt("close"))}getWriter(){if(!Qe(this))throw Gt("getWriter");return mo(this)}};n(un,"WritableStream");let qe=un;Object.defineProperties(qe.prototype,{abort:{enumerable:!0},close:{enumerable:!0},getWriter:{enumerable:!0},locked:{enumerable:!0}}),typeof l.toStringTag=="symbol"&&Object.defineProperty(qe.prototype,l.toStringTag,{value:"WritableStream",configurable:!0});function mo(e){return new ze(e)}n(mo,"AcquireWritableStreamDefaultWriter");function Zi(e,t,r,s,f=1,c=()=>1){const h=Object.create(qe.prototype);yo(h);const y=Object.create(Se.prototype);return Co(h,y,e,t,r,s,f,c),h}n(Zi,"CreateWritableStream");function yo(e){e._state="writable",e._storedError=void 0,e._writer=void 0,e._writableStreamController=void 0,e._writeRequests=new x,e._inFlightWriteRequest=void 0,e._closeRequest=void 0,e._inFlightCloseRequest=void 0,e._pendingAbortRequest=void 0,e._backpressure=!1;}n(yo,"InitializeWritableStream");function Qe(e){return !m(e)||!Object.prototype.hasOwnProperty.call(e,"_writableStreamController")?!1:e instanceof qe}n(Qe,"IsWritableStream");function Ye(e){return e._writer!==void 0}n(Ye,"IsWritableStreamLocked");function Ht(e,t){var r;if(e._state==="closed"||e._state==="errored")return b(void 0);e._writableStreamController._abortReason=t,(r=e._writableStreamController._abortController)===null||r===void 0||r.abort();const s=e._state;if(s==="closed"||s==="errored")return b(void 0);if(e._pendingAbortRequest!==void 0)return e._pendingAbortRequest._promise;let f=!1;s==="erroring"&&(f=!0,t=void 0);const c=E((h,y)=>{e._pendingAbortRequest={_promise:void 0,_resolve:h,_reject:y,_reason:t,_wasAlreadyErroring:f};});return e._pendingAbortRequest._promise=c,f||Nr(e,t),c}n(Ht,"WritableStreamAbort");function go(e){const t=e._state;if(t==="closed"||t==="errored")return g(new TypeError(`The stream (in ${t} state) is not in the writable state and cannot be closed`));const r=E((f,c)=>{const h={_resolve:f,_reject:c};e._closeRequest=h;}),s=e._writer;return s!==void 0&&e._backpressure&&t==="writable"&&Jr(s),fa(e._writableStreamController),r}n(go,"WritableStreamClose");function Ki(e){return E((r,s)=>{const f={_resolve:r,_reject:s};e._writeRequests.push(f);})}n(Ki,"WritableStreamAddWriteRequest");function Ur(e,t){if(e._state==="writable"){Nr(e,t);return}xr(e);}n(Ur,"WritableStreamDealWithRejection");function Nr(e,t){const r=e._writableStreamController;e._state="erroring",e._storedError=t;const s=e._writer;s!==void 0&&So(s,t),!ra(e)&&r._started&&xr(e);}n(Nr,"WritableStreamStartErroring");function xr(e){e._state="errored",e._writableStreamController[Dn]();const t=e._storedError;if(e._writeRequests.forEach(f=>{f._reject(t);}),e._writeRequests=new x,e._pendingAbortRequest===void 0){Vt(e);return}const r=e._pendingAbortRequest;if(e._pendingAbortRequest=void 0,r._wasAlreadyErroring){r._reject(t),Vt(e);return}const s=e._writableStreamController[$n](r._reason);q(s,()=>{r._resolve(),Vt(e);},f=>{r._reject(f),Vt(e);});}n(xr,"WritableStreamFinishErroring");function Ji(e){e._inFlightWriteRequest._resolve(void 0),e._inFlightWriteRequest=void 0;}n(Ji,"WritableStreamFinishInFlightWrite");function Xi(e,t){e._inFlightWriteRequest._reject(t),e._inFlightWriteRequest=void 0,Ur(e,t);}n(Xi,"WritableStreamFinishInFlightWriteWithError");function ea(e){e._inFlightCloseRequest._resolve(void 0),e._inFlightCloseRequest=void 0,e._state==="erroring"&&(e._storedError=void 0,e._pendingAbortRequest!==void 0&&(e._pendingAbortRequest._resolve(),e._pendingAbortRequest=void 0)),e._state="closed";const r=e._writer;r!==void 0&&Ao(r);}n(ea,"WritableStreamFinishInFlightClose");function ta(e,t){e._inFlightCloseRequest._reject(t),e._inFlightCloseRequest=void 0,e._pendingAbortRequest!==void 0&&(e._pendingAbortRequest._reject(t),e._pendingAbortRequest=void 0),Ur(e,t);}n(ta,"WritableStreamFinishInFlightCloseWithError");function oe(e){return !(e._closeRequest===void 0&&e._inFlightCloseRequest===void 0)}n(oe,"WritableStreamCloseQueuedOrInFlight");function ra(e){return !(e._inFlightWriteRequest===void 0&&e._inFlightCloseRequest===void 0)}n(ra,"WritableStreamHasOperationMarkedInFlight");function na(e){e._inFlightCloseRequest=e._closeRequest,e._closeRequest=void 0;}n(na,"WritableStreamMarkCloseRequestInFlight");function oa(e){e._inFlightWriteRequest=e._writeRequests.shift();}n(oa,"WritableStreamMarkFirstWriteRequestInFlight");function Vt(e){e._closeRequest!==void 0&&(e._closeRequest._reject(e._storedError),e._closeRequest=void 0);const t=e._writer;t!==void 0&&Zr(t,e._storedError);}n(Vt,"WritableStreamRejectCloseAndClosedPromiseIfNeeded");function Hr(e,t){const r=e._writer;r!==void 0&&t!==e._backpressure&&(t?ya(r):Jr(r)),e._backpressure=t;}n(Hr,"WritableStreamUpdateBackpressure");const fn=class fn{constructor(t){if(de(t,1,"WritableStreamDefaultWriter"),bo(t,"First parameter"),Ye(t))throw new TypeError("This stream has already been locked for exclusive writing by another writer");this._ownerWritableStream=t,t._writer=this;const r=t._state;if(r==="writable")!oe(t)&&t._backpressure?Kt(this):Wo(this),Zt(this);else if(r==="erroring")Kr(this,t._storedError),Zt(this);else if(r==="closed")Wo(this),ba(this);else {const s=t._storedError;Kr(this,s),Eo(this,s);}}get closed(){return je(this)?this._closedPromise:g(Fe("closed"))}get desiredSize(){if(!je(this))throw Fe("desiredSize");if(this._ownerWritableStream===void 0)throw gt("desiredSize");return la(this)}get ready(){return je(this)?this._readyPromise:g(Fe("ready"))}abort(t=void 0){return je(this)?this._ownerWritableStream===void 0?g(gt("abort")):ia(this,t):g(Fe("abort"))}close(){if(!je(this))return g(Fe("close"));const t=this._ownerWritableStream;return t===void 0?g(gt("close")):oe(t)?g(new TypeError("Cannot close an already-closing stream")):_o(this)}releaseLock(){if(!je(this))throw Fe("releaseLock");this._ownerWritableStream!==void 0&&wo(this);}write(t=void 0){return je(this)?this._ownerWritableStream===void 0?g(gt("write to")):Ro(this,t):g(Fe("write"))}};n(fn,"WritableStreamDefaultWriter");let ze=fn;Object.defineProperties(ze.prototype,{abort:{enumerable:!0},close:{enumerable:!0},releaseLock:{enumerable:!0},write:{enumerable:!0},closed:{enumerable:!0},desiredSize:{enumerable:!0},ready:{enumerable:!0}}),typeof l.toStringTag=="symbol"&&Object.defineProperty(ze.prototype,l.toStringTag,{value:"WritableStreamDefaultWriter",configurable:!0});function je(e){return !m(e)||!Object.prototype.hasOwnProperty.call(e,"_ownerWritableStream")?!1:e instanceof ze}n(je,"IsWritableStreamDefaultWriter");function ia(e,t){const r=e._ownerWritableStream;return Ht(r,t)}n(ia,"WritableStreamDefaultWriterAbort");function _o(e){const t=e._ownerWritableStream;return go(t)}n(_o,"WritableStreamDefaultWriterClose");function aa(e){const t=e._ownerWritableStream,r=t._state;return oe(t)||r==="closed"?b(void 0):r==="errored"?g(t._storedError):_o(e)}n(aa,"WritableStreamDefaultWriterCloseWithErrorPropagation");function sa(e,t){e._closedPromiseState==="pending"?Zr(e,t):ma(e,t);}n(sa,"WritableStreamDefaultWriterEnsureClosedPromiseRejected");function So(e,t){e._readyPromiseState==="pending"?Bo(e,t):ga(e,t);}n(So,"WritableStreamDefaultWriterEnsureReadyPromiseRejected");function la(e){const t=e._ownerWritableStream,r=t._state;return r==="errored"||r==="erroring"?null:r==="closed"?0:Po(t._writableStreamController)}n(la,"WritableStreamDefaultWriterGetDesiredSize");function wo(e){const t=e._ownerWritableStream,r=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");So(e,r),sa(e,r),t._writer=void 0,e._ownerWritableStream=void 0;}n(wo,"WritableStreamDefaultWriterRelease");function Ro(e,t){const r=e._ownerWritableStream,s=r._writableStreamController,f=ca(s,t);if(r!==e._ownerWritableStream)return g(gt("write to"));const c=r._state;if(c==="errored")return g(r._storedError);if(oe(r)||c==="closed")return g(new TypeError("The stream is closing or closed and cannot be written to"));if(c==="erroring")return g(r._storedError);const h=Ki(r);return da(s,t,f),h}n(Ro,"WritableStreamDefaultWriterWrite");const To={},cn=class cn{constructor(){throw new TypeError("Illegal constructor")}get abortReason(){if(!Vr(this))throw Gr("abortReason");return this._abortReason}get signal(){if(!Vr(this))throw Gr("signal");if(this._abortController===void 0)throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");return this._abortController.signal}error(t=void 0){if(!Vr(this))throw Gr("error");this._controlledWritableStream._state==="writable"&&vo(this,t);}[$n](t){const r=this._abortAlgorithm(t);return Qt(this),r}[Dn](){ge(this);}};n(cn,"WritableStreamDefaultController");let Se=cn;Object.defineProperties(Se.prototype,{abortReason:{enumerable:!0},signal:{enumerable:!0},error:{enumerable:!0}}),typeof l.toStringTag=="symbol"&&Object.defineProperty(Se.prototype,l.toStringTag,{value:"WritableStreamDefaultController",configurable:!0});function Vr(e){return !m(e)||!Object.prototype.hasOwnProperty.call(e,"_controlledWritableStream")?!1:e instanceof Se}n(Vr,"IsWritableStreamDefaultController");function Co(e,t,r,s,f,c,h,y){t._controlledWritableStream=e,e._writableStreamController=t,t._queue=void 0,t._queueTotalSize=void 0,ge(t),t._abortReason=void 0,t._abortController=Gi(),t._started=!1,t._strategySizeAlgorithm=y,t._strategyHWM=h,t._writeAlgorithm=s,t._closeAlgorithm=f,t._abortAlgorithm=c;const w=Yr(t);Hr(e,w);const T=r(),P=b(T);q(P,()=>{t._started=!0,Yt(t);},v=>{t._started=!0,Ur(e,v);});}n(Co,"SetUpWritableStreamDefaultController");function ua(e,t,r,s){const f=Object.create(Se.prototype);let c=n(()=>{},"startAlgorithm"),h=n(()=>b(void 0),"writeAlgorithm"),y=n(()=>b(void 0),"closeAlgorithm"),w=n(()=>b(void 0),"abortAlgorithm");t.start!==void 0&&(c=n(()=>t.start(f),"startAlgorithm")),t.write!==void 0&&(h=n(T=>t.write(T,f),"writeAlgorithm")),t.close!==void 0&&(y=n(()=>t.close(),"closeAlgorithm")),t.abort!==void 0&&(w=n(T=>t.abort(T),"abortAlgorithm")),Co(e,f,c,h,y,w,r,s);}n(ua,"SetUpWritableStreamDefaultControllerFromUnderlyingSink");function Qt(e){e._writeAlgorithm=void 0,e._closeAlgorithm=void 0,e._abortAlgorithm=void 0,e._strategySizeAlgorithm=void 0;}n(Qt,"WritableStreamDefaultControllerClearAlgorithms");function fa(e){jr(e,To,0),Yt(e);}n(fa,"WritableStreamDefaultControllerClose");function ca(e,t){try{return e._strategySizeAlgorithm(t)}catch(r){return Qr(e,r),1}}n(ca,"WritableStreamDefaultControllerGetChunkSize");function Po(e){return e._strategyHWM-e._queueTotalSize}n(Po,"WritableStreamDefaultControllerGetDesiredSize");function da(e,t,r){try{jr(e,t,r);}catch(f){Qr(e,f);return}const s=e._controlledWritableStream;if(!oe(s)&&s._state==="writable"){const f=Yr(e);Hr(s,f);}Yt(e);}n(da,"WritableStreamDefaultControllerWrite");function Yt(e){const t=e._controlledWritableStream;if(!e._started||t._inFlightWriteRequest!==void 0)return;if(t._state==="erroring"){xr(t);return}if(e._queue.length===0)return;const s=qi(e);s===To?ha(e):pa(e,s);}n(Yt,"WritableStreamDefaultControllerAdvanceQueueIfNeeded");function Qr(e,t){e._controlledWritableStream._state==="writable"&&vo(e,t);}n(Qr,"WritableStreamDefaultControllerErrorIfNeeded");function ha(e){const t=e._controlledWritableStream;na(t),zr(e);const r=e._closeAlgorithm();Qt(e),q(r,()=>{ea(t);},s=>{ta(t,s);});}n(ha,"WritableStreamDefaultControllerProcessClose");function pa(e,t){const r=e._controlledWritableStream;oa(r);const s=e._writeAlgorithm(t);q(s,()=>{Ji(r);const f=r._state;if(zr(e),!oe(r)&&f==="writable"){const c=Yr(e);Hr(r,c);}Yt(e);},f=>{r._state==="writable"&&Qt(e),Xi(r,f);});}n(pa,"WritableStreamDefaultControllerProcessWrite");function Yr(e){return Po(e)<=0}n(Yr,"WritableStreamDefaultControllerGetBackpressure");function vo(e,t){const r=e._controlledWritableStream;Qt(e),Nr(r,t);}n(vo,"WritableStreamDefaultControllerError");function Gt(e){return new TypeError(`WritableStream.prototype.${e} can only be used on a WritableStream`)}n(Gt,"streamBrandCheckException$2");function Gr(e){return new TypeError(`WritableStreamDefaultController.prototype.${e} can only be used on a WritableStreamDefaultController`)}n(Gr,"defaultControllerBrandCheckException$2");function Fe(e){return new TypeError(`WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`)}n(Fe,"defaultWriterBrandCheckException");function gt(e){return new TypeError("Cannot "+e+" a stream using a released writer")}n(gt,"defaultWriterLockException");function Zt(e){e._closedPromise=E((t,r)=>{e._closedPromise_resolve=t,e._closedPromise_reject=r,e._closedPromiseState="pending";});}n(Zt,"defaultWriterClosedPromiseInitialize");function Eo(e,t){Zt(e),Zr(e,t);}n(Eo,"defaultWriterClosedPromiseInitializeAsRejected");function ba(e){Zt(e),Ao(e);}n(ba,"defaultWriterClosedPromiseInitializeAsResolved");function Zr(e,t){e._closedPromise_reject!==void 0&&($(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="rejected");}n(Zr,"defaultWriterClosedPromiseReject");function ma(e,t){Eo(e,t);}n(ma,"defaultWriterClosedPromiseResetToRejected");function Ao(e){e._closedPromise_resolve!==void 0&&(e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="resolved");}n(Ao,"defaultWriterClosedPromiseResolve");function Kt(e){e._readyPromise=E((t,r)=>{e._readyPromise_resolve=t,e._readyPromise_reject=r;}),e._readyPromiseState="pending";}n(Kt,"defaultWriterReadyPromiseInitialize");function Kr(e,t){Kt(e),Bo(e,t);}n(Kr,"defaultWriterReadyPromiseInitializeAsRejected");function Wo(e){Kt(e),Jr(e);}n(Wo,"defaultWriterReadyPromiseInitializeAsResolved");function Bo(e,t){e._readyPromise_reject!==void 0&&($(e._readyPromise),e._readyPromise_reject(t),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="rejected");}n(Bo,"defaultWriterReadyPromiseReject");function ya(e){Kt(e);}n(ya,"defaultWriterReadyPromiseReset");function ga(e,t){Kr(e,t);}n(ga,"defaultWriterReadyPromiseResetToRejected");function Jr(e){e._readyPromise_resolve!==void 0&&(e._readyPromise_resolve(void 0),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="fulfilled");}n(Jr,"defaultWriterReadyPromiseResolve");const ko=typeof DOMException<"u"?DOMException:void 0;function _a(e){if(!(typeof e=="function"||typeof e=="object"))return !1;try{return new e,!0}catch{return !1}}n(_a,"isDOMExceptionConstructor");function Sa(){const e=n(function(r,s){this.message=r||"",this.name=s||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor);},"DOMException");return e.prototype=Object.create(Error.prototype),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,configurable:!0}),e}n(Sa,"createDOMExceptionPolyfill");const wa=_a(ko)?ko:Sa();function Oo(e,t,r,s,f,c){const h=Ve(e),y=mo(t);e._disturbed=!0;let w=!1,T=b(void 0);return E((P,v)=>{let z;if(c!==void 0){if(z=n(()=>{const _=new wa("Aborted","AbortError"),R=[];s||R.push(()=>t._state==="writable"?Ht(t,_):b(void 0)),f||R.push(()=>e._state==="readable"?J(e,_):b(void 0)),U(()=>Promise.all(R.map(W=>W())),!0,_);},"abortAlgorithm"),c.aborted){z();return}c.addEventListener("abort",z);}function X(){return E((_,R)=>{function W(H){H?_():A(Xe(),W,R);}n(W,"next"),W(!1);})}n(X,"pipeLoop");function Xe(){return w?b(!0):A(y._readyPromise,()=>E((_,R)=>{ht(h,{_chunkSteps:W=>{T=A(Ro(y,W),void 0,u),_(!1);},_closeSteps:()=>_(!0),_errorSteps:R});}))}if(n(Xe,"pipeStep"),he(e,h._closedPromise,_=>{s?Q(!0,_):U(()=>Ht(t,_),!0,_);}),he(t,y._closedPromise,_=>{f?Q(!0,_):U(()=>J(e,_),!0,_);}),M(e,h._closedPromise,()=>{r?Q():U(()=>aa(y));}),oe(t)||t._state==="closed"){const _=new TypeError("the destination writable stream closed before all data could be piped to it");f?Q(!0,_):U(()=>J(e,_),!0,_);}$(X());function Pe(){const _=T;return A(T,()=>_!==T?Pe():void 0)}n(Pe,"waitForWritesToFinish");function he(_,R,W){_._state==="errored"?W(_._storedError):dt(R,W);}n(he,"isOrBecomesErrored");function M(_,R,W){_._state==="closed"?W():ne(R,W);}n(M,"isOrBecomesClosed");function U(_,R,W){if(w)return;w=!0,t._state==="writable"&&!oe(t)?ne(Pe(),H):H();function H(){q(_(),()=>pe(R,W),et=>pe(!0,et));}n(H,"doTheRest");}n(U,"shutdownWithAction");function Q(_,R){w||(w=!0,t._state==="writable"&&!oe(t)?ne(Pe(),()=>pe(_,R)):pe(_,R));}n(Q,"shutdown");function pe(_,R){wo(y),fe(h),c!==void 0&&c.removeEventListener("abort",z),_?v(R):P(void 0);}n(pe,"finalize");})}n(Oo,"ReadableStreamPipeTo");const dn=class dn{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!Jt(this))throw tr("desiredSize");return Xr(this)}close(){if(!Jt(this))throw tr("close");if(!Ge(this))throw new TypeError("The stream is not in a state that permits close");St(this);}enqueue(t=void 0){if(!Jt(this))throw tr("enqueue");if(!Ge(this))throw new TypeError("The stream is not in a state that permits enqueue");return er(this,t)}error(t=void 0){if(!Jt(this))throw tr("error");Re(this,t);}[Ar](t){ge(this);const r=this._cancelAlgorithm(t);return Xt(this),r}[Wr](t){const r=this._controlledReadableStream;if(this._queue.length>0){const s=zr(this);this._closeRequested&&this._queue.length===0?(Xt(this),wt(r)):_t(this),t._chunkSteps(s);}else Hn(r,t),_t(this);}};n(dn,"ReadableStreamDefaultController");let we=dn;Object.defineProperties(we.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},desiredSize:{enumerable:!0}}),typeof l.toStringTag=="symbol"&&Object.defineProperty(we.prototype,l.toStringTag,{value:"ReadableStreamDefaultController",configurable:!0});function Jt(e){return !m(e)||!Object.prototype.hasOwnProperty.call(e,"_controlledReadableStream")?!1:e instanceof we}n(Jt,"IsReadableStreamDefaultController");function _t(e){if(!qo(e))return;if(e._pulling){e._pullAgain=!0;return}e._pulling=!0;const r=e._pullAlgorithm();q(r,()=>{e._pulling=!1,e._pullAgain&&(e._pullAgain=!1,_t(e));},s=>{Re(e,s);});}n(_t,"ReadableStreamDefaultControllerCallPullIfNeeded");function qo(e){const t=e._controlledReadableStream;return !Ge(e)||!e._started?!1:!!(Ce(t)&&Ot(t)>0||Xr(e)>0)}n(qo,"ReadableStreamDefaultControllerShouldCallPull");function Xt(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0,e._strategySizeAlgorithm=void 0;}n(Xt,"ReadableStreamDefaultControllerClearAlgorithms");function St(e){if(!Ge(e))return;const t=e._controlledReadableStream;e._closeRequested=!0,e._queue.length===0&&(Xt(e),wt(t));}n(St,"ReadableStreamDefaultControllerClose");function er(e,t){if(!Ge(e))return;const r=e._controlledReadableStream;if(Ce(r)&&Ot(r)>0)qr(r,t,!1);else {let s;try{s=e._strategySizeAlgorithm(t);}catch(f){throw Re(e,f),f}try{jr(e,t,s);}catch(f){throw Re(e,f),f}}_t(e);}n(er,"ReadableStreamDefaultControllerEnqueue");function Re(e,t){const r=e._controlledReadableStream;r._state==="readable"&&(ge(e),Xt(e),Io(r,t));}n(Re,"ReadableStreamDefaultControllerError");function Xr(e){const t=e._controlledReadableStream._state;return t==="errored"?null:t==="closed"?0:e._strategyHWM-e._queueTotalSize}n(Xr,"ReadableStreamDefaultControllerGetDesiredSize");function Ra(e){return !qo(e)}n(Ra,"ReadableStreamDefaultControllerHasBackpressure");function Ge(e){const t=e._controlledReadableStream._state;return !e._closeRequested&&t==="readable"}n(Ge,"ReadableStreamDefaultControllerCanCloseOrEnqueue");function zo(e,t,r,s,f,c,h){t._controlledReadableStream=e,t._queue=void 0,t._queueTotalSize=void 0,ge(t),t._started=!1,t._closeRequested=!1,t._pullAgain=!1,t._pulling=!1,t._strategySizeAlgorithm=h,t._strategyHWM=c,t._pullAlgorithm=s,t._cancelAlgorithm=f,e._readableStreamController=t;const y=r();q(b(y),()=>{t._started=!0,_t(t);},w=>{Re(t,w);});}n(zo,"SetUpReadableStreamDefaultController");function Ta(e,t,r,s){const f=Object.create(we.prototype);let c=n(()=>{},"startAlgorithm"),h=n(()=>b(void 0),"pullAlgorithm"),y=n(()=>b(void 0),"cancelAlgorithm");t.start!==void 0&&(c=n(()=>t.start(f),"startAlgorithm")),t.pull!==void 0&&(h=n(()=>t.pull(f),"pullAlgorithm")),t.cancel!==void 0&&(y=n(w=>t.cancel(w),"cancelAlgorithm")),zo(e,f,c,h,y,r,s);}n(Ta,"SetUpReadableStreamDefaultControllerFromUnderlyingSource");function tr(e){return new TypeError(`ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`)}n(tr,"defaultControllerBrandCheckException$1");function Ca(e,t){return We(e._readableStreamController)?va(e):Pa(e)}n(Ca,"ReadableStreamTee");function Pa(e,t){const r=Ve(e);let s=!1,f=!1,c=!1,h=!1,y,w,T,P,v;const z=E(M=>{v=M;});function X(){return s?(f=!0,b(void 0)):(s=!0,ht(r,{_chunkSteps:U=>{F(()=>{f=!1;const Q=U,pe=U;c||er(T._readableStreamController,Q),h||er(P._readableStreamController,pe),s=!1,f&&X();});},_closeSteps:()=>{s=!1,c||St(T._readableStreamController),h||St(P._readableStreamController),(!c||!h)&&v(void 0);},_errorSteps:()=>{s=!1;}}),b(void 0))}n(X,"pullAlgorithm");function Xe(M){if(c=!0,y=M,h){const U=pt([y,w]),Q=J(e,U);v(Q);}return z}n(Xe,"cancel1Algorithm");function Pe(M){if(h=!0,w=M,c){const U=pt([y,w]),Q=J(e,U);v(Q);}return z}n(Pe,"cancel2Algorithm");function he(){}return n(he,"startAlgorithm"),T=en(he,X,Xe),P=en(he,X,Pe),dt(r._closedPromise,M=>{Re(T._readableStreamController,M),Re(P._readableStreamController,M),(!c||!h)&&v(void 0);}),[T,P]}n(Pa,"ReadableStreamDefaultTee");function va(e){let t=Ve(e),r=!1,s=!1,f=!1,c=!1,h=!1,y,w,T,P,v;const z=E(_=>{v=_;});function X(_){dt(_._closedPromise,R=>{_===t&&(K(T._readableStreamController,R),K(P._readableStreamController,R),(!c||!h)&&v(void 0));});}n(X,"forwardReaderError");function Xe(){Oe(t)&&(fe(t),t=Ve(e),X(t)),ht(t,{_chunkSteps:R=>{F(()=>{s=!1,f=!1;const W=R;let H=R;if(!c&&!h)try{H=eo(R);}catch(et){K(T._readableStreamController,et),K(P._readableStreamController,et),v(J(e,et));return}c||$t(T._readableStreamController,W),h||$t(P._readableStreamController,H),r=!1,s?he():f&&M();});},_closeSteps:()=>{r=!1,c||bt(T._readableStreamController),h||bt(P._readableStreamController),T._readableStreamController._pendingPullIntos.length>0&&Dt(T._readableStreamController,0),P._readableStreamController._pendingPullIntos.length>0&&Dt(P._readableStreamController,0),(!c||!h)&&v(void 0);},_errorSteps:()=>{r=!1;}});}n(Xe,"pullWithDefaultReader");function Pe(_,R){ye(t)&&(fe(t),t=fo(e),X(t));const W=R?P:T,H=R?T:P;po(t,_,{_chunkSteps:tt=>{F(()=>{s=!1,f=!1;const rt=R?h:c;if(R?c:h)rt||Mt(W._readableStreamController,tt);else {let Zo;try{Zo=eo(tt);}catch(gn){K(W._readableStreamController,gn),K(H._readableStreamController,gn),v(J(e,gn));return}rt||Mt(W._readableStreamController,tt),$t(H._readableStreamController,Zo);}r=!1,s?he():f&&M();});},_closeSteps:tt=>{r=!1;const rt=R?h:c,sr=R?c:h;rt||bt(W._readableStreamController),sr||bt(H._readableStreamController),tt!==void 0&&(rt||Mt(W._readableStreamController,tt),!sr&&H._readableStreamController._pendingPullIntos.length>0&&Dt(H._readableStreamController,0)),(!rt||!sr)&&v(void 0);},_errorSteps:()=>{r=!1;}});}n(Pe,"pullWithBYOBReader");function he(){if(r)return s=!0,b(void 0);r=!0;const _=$r(T._readableStreamController);return _===null?Xe():Pe(_._view,!1),b(void 0)}n(he,"pull1Algorithm");function M(){if(r)return f=!0,b(void 0);r=!0;const _=$r(P._readableStreamController);return _===null?Xe():Pe(_._view,!0),b(void 0)}n(M,"pull2Algorithm");function U(_){if(c=!0,y=_,h){const R=pt([y,w]),W=J(e,R);v(W);}return z}n(U,"cancel1Algorithm");function Q(_){if(h=!0,w=_,c){const R=pt([y,w]),W=J(e,R);v(W);}return z}n(Q,"cancel2Algorithm");function pe(){}return n(pe,"startAlgorithm"),T=Fo(pe,he,U),P=Fo(pe,M,Q),X(t),[T,P]}n(va,"ReadableByteStreamTee");function Ea(e,t){ce(e,t);const r=e,s=r?.autoAllocateChunkSize,f=r?.cancel,c=r?.pull,h=r?.start,y=r?.type;return {autoAllocateChunkSize:s===void 0?void 0:xn(s,`${t} has member 'autoAllocateChunkSize' that`),cancel:f===void 0?void 0:Aa(f,r,`${t} has member 'cancel' that`),pull:c===void 0?void 0:Wa(c,r,`${t} has member 'pull' that`),start:h===void 0?void 0:Ba(h,r,`${t} has member 'start' that`),type:y===void 0?void 0:ka(y,`${t} has member 'type' that`)}}n(Ea,"convertUnderlyingDefaultOrByteSource");function Aa(e,t,r){return Z(e,r),s=>ue(e,t,[s])}n(Aa,"convertUnderlyingSourceCancelCallback");function Wa(e,t,r){return Z(e,r),s=>ue(e,t,[s])}n(Wa,"convertUnderlyingSourcePullCallback");function Ba(e,t,r){return Z(e,r),s=>ve(e,t,[s])}n(Ba,"convertUnderlyingSourceStartCallback");function ka(e,t){if(e=`${e}`,e!=="bytes")throw new TypeError(`${t} '${e}' is not a valid enumeration value for ReadableStreamType`);return e}n(ka,"convertReadableStreamType");function Oa(e,t){ce(e,t);const r=e?.mode;return {mode:r===void 0?void 0:qa(r,`${t} has member 'mode' that`)}}n(Oa,"convertReaderOptions");function qa(e,t){if(e=`${e}`,e!=="byob")throw new TypeError(`${t} '${e}' is not a valid enumeration value for ReadableStreamReaderMode`);return e}n(qa,"convertReadableStreamReaderMode");function za(e,t){return ce(e,t),{preventCancel:!!e?.preventCancel}}n(za,"convertIteratorOptions");function jo(e,t){ce(e,t);const r=e?.preventAbort,s=e?.preventCancel,f=e?.preventClose,c=e?.signal;return c!==void 0&&ja(c,`${t} has member 'signal' that`),{preventAbort:!!r,preventCancel:!!s,preventClose:!!f,signal:c}}n(jo,"convertPipeOptions");function ja(e,t){if(!Qi(e))throw new TypeError(`${t} is not an AbortSignal.`)}n(ja,"assertAbortSignal");function Fa(e,t){ce(e,t);const r=e?.readable;Br(r,"readable","ReadableWritablePair"),Or(r,`${t} has member 'readable' that`);const s=e?.writable;return Br(s,"writable","ReadableWritablePair"),bo(s,`${t} has member 'writable' that`),{readable:r,writable:s}}n(Fa,"convertReadableWritablePair");const hn=class hn{constructor(t={},r={}){t===void 0?t=null:Un(t,"First parameter");const s=xt(r,"Second parameter"),f=Ea(t,"First parameter");if(tn(this),f.type==="bytes"){if(s.size!==void 0)throw new RangeError("The strategy for a byte stream cannot have a size function");const c=yt(s,0);Li(this,f,c);}else {const c=Nt(s),h=yt(s,1);Ta(this,f,h,c);}}get locked(){if(!Te(this))throw Ie("locked");return Ce(this)}cancel(t=void 0){return Te(this)?Ce(this)?g(new TypeError("Cannot cancel a stream that already has a reader")):J(this,t):g(Ie("cancel"))}getReader(t=void 0){if(!Te(this))throw Ie("getReader");return Oa(t,"First parameter").mode===void 0?Ve(this):fo(this)}pipeThrough(t,r={}){if(!Te(this))throw Ie("pipeThrough");de(t,1,"pipeThrough");const s=Fa(t,"First parameter"),f=jo(r,"Second parameter");if(Ce(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");if(Ye(s.writable))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");const c=Oo(this,s.writable,f.preventClose,f.preventAbort,f.preventCancel,f.signal);return $(c),s.readable}pipeTo(t,r={}){if(!Te(this))return g(Ie("pipeTo"));if(t===void 0)return g("Parameter 1 is required in 'pipeTo'.");if(!Qe(t))return g(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));let s;try{s=jo(r,"Second parameter");}catch(f){return g(f)}return Ce(this)?g(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):Ye(t)?g(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):Oo(this,t,s.preventClose,s.preventAbort,s.preventCancel,s.signal)}tee(){if(!Te(this))throw Ie("tee");const t=Ca(this);return pt(t)}values(t=void 0){if(!Te(this))throw Ie("values");const r=za(t,"First parameter");return ki(this,r.preventCancel)}};n(hn,"ReadableStream");let ie=hn;Object.defineProperties(ie.prototype,{cancel:{enumerable:!0},getReader:{enumerable:!0},pipeThrough:{enumerable:!0},pipeTo:{enumerable:!0},tee:{enumerable:!0},values:{enumerable:!0},locked:{enumerable:!0}}),typeof l.toStringTag=="symbol"&&Object.defineProperty(ie.prototype,l.toStringTag,{value:"ReadableStream",configurable:!0}),typeof l.asyncIterator=="symbol"&&Object.defineProperty(ie.prototype,l.asyncIterator,{value:ie.prototype.values,writable:!0,configurable:!0});function en(e,t,r,s=1,f=()=>1){const c=Object.create(ie.prototype);tn(c);const h=Object.create(we.prototype);return zo(c,h,e,t,r,s,f),c}n(en,"CreateReadableStream");function Fo(e,t,r){const s=Object.create(ie.prototype);tn(s);const f=Object.create(_e.prototype);return uo(s,f,e,t,r,0,void 0),s}n(Fo,"CreateReadableByteStream");function tn(e){e._state="readable",e._reader=void 0,e._storedError=void 0,e._disturbed=!1;}n(tn,"InitializeReadableStream");function Te(e){return !m(e)||!Object.prototype.hasOwnProperty.call(e,"_readableStreamController")?!1:e instanceof ie}n(Te,"IsReadableStream");function Ce(e){return e._reader!==void 0}n(Ce,"IsReadableStreamLocked");function J(e,t){if(e._disturbed=!0,e._state==="closed")return b(void 0);if(e._state==="errored")return g(e._storedError);wt(e);const r=e._reader;r!==void 0&&Oe(r)&&(r._readIntoRequests.forEach(f=>{f._closeSteps(void 0);}),r._readIntoRequests=new x);const s=e._readableStreamController[Ar](t);return O(s,u)}n(J,"ReadableStreamCancel");function wt(e){e._state="closed";const t=e._reader;t!==void 0&&(Ln(t),ye(t)&&(t._readRequests.forEach(r=>{r._closeSteps();}),t._readRequests=new x));}n(wt,"ReadableStreamClose");function Io(e,t){e._state="errored",e._storedError=t;const r=e._reader;r!==void 0&&(Er(r,t),ye(r)?(r._readRequests.forEach(s=>{s._errorSteps(t);}),r._readRequests=new x):(r._readIntoRequests.forEach(s=>{s._errorSteps(t);}),r._readIntoRequests=new x));}n(Io,"ReadableStreamError");function Ie(e){return new TypeError(`ReadableStream.prototype.${e} can only be used on a ReadableStream`)}n(Ie,"streamBrandCheckException$1");function Lo(e,t){ce(e,t);const r=e?.highWaterMark;return Br(r,"highWaterMark","QueuingStrategyInit"),{highWaterMark:kr(r)}}n(Lo,"convertQueuingStrategyInit");const $o=n(e=>e.byteLength,"byteLengthSizeFunction");try{Object.defineProperty($o,"name",{value:"size",configurable:!0});}catch{}const pn=class pn{constructor(t){de(t,1,"ByteLengthQueuingStrategy"),t=Lo(t,"First parameter"),this._byteLengthQueuingStrategyHighWaterMark=t.highWaterMark;}get highWaterMark(){if(!Mo(this))throw Do("highWaterMark");return this._byteLengthQueuingStrategyHighWaterMark}get size(){if(!Mo(this))throw Do("size");return $o}};n(pn,"ByteLengthQueuingStrategy");let Ze=pn;Object.defineProperties(Ze.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof l.toStringTag=="symbol"&&Object.defineProperty(Ze.prototype,l.toStringTag,{value:"ByteLengthQueuingStrategy",configurable:!0});function Do(e){return new TypeError(`ByteLengthQueuingStrategy.prototype.${e} can only be used on a ByteLengthQueuingStrategy`)}n(Do,"byteLengthBrandCheckException");function Mo(e){return !m(e)||!Object.prototype.hasOwnProperty.call(e,"_byteLengthQueuingStrategyHighWaterMark")?!1:e instanceof Ze}n(Mo,"IsByteLengthQueuingStrategy");const Uo=n(()=>1,"countSizeFunction");try{Object.defineProperty(Uo,"name",{value:"size",configurable:!0});}catch{}const bn=class bn{constructor(t){de(t,1,"CountQueuingStrategy"),t=Lo(t,"First parameter"),this._countQueuingStrategyHighWaterMark=t.highWaterMark;}get highWaterMark(){if(!xo(this))throw No("highWaterMark");return this._countQueuingStrategyHighWaterMark}get size(){if(!xo(this))throw No("size");return Uo}};n(bn,"CountQueuingStrategy");let Ke=bn;Object.defineProperties(Ke.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof l.toStringTag=="symbol"&&Object.defineProperty(Ke.prototype,l.toStringTag,{value:"CountQueuingStrategy",configurable:!0});function No(e){return new TypeError(`CountQueuingStrategy.prototype.${e} can only be used on a CountQueuingStrategy`)}n(No,"countBrandCheckException");function xo(e){return !m(e)||!Object.prototype.hasOwnProperty.call(e,"_countQueuingStrategyHighWaterMark")?!1:e instanceof Ke}n(xo,"IsCountQueuingStrategy");function Ia(e,t){ce(e,t);const r=e?.flush,s=e?.readableType,f=e?.start,c=e?.transform,h=e?.writableType;return {flush:r===void 0?void 0:La(r,e,`${t} has member 'flush' that`),readableType:s,start:f===void 0?void 0:$a(f,e,`${t} has member 'start' that`),transform:c===void 0?void 0:Da(c,e,`${t} has member 'transform' that`),writableType:h}}n(Ia,"convertTransformer");function La(e,t,r){return Z(e,r),s=>ue(e,t,[s])}n(La,"convertTransformerFlushCallback");function $a(e,t,r){return Z(e,r),s=>ve(e,t,[s])}n($a,"convertTransformerStartCallback");function Da(e,t,r){return Z(e,r),(s,f)=>ue(e,t,[s,f])}n(Da,"convertTransformerTransformCallback");const mn=class mn{constructor(t={},r={},s={}){t===void 0&&(t=null);const f=xt(r,"Second parameter"),c=xt(s,"Third parameter"),h=Ia(t,"First parameter");if(h.readableType!==void 0)throw new RangeError("Invalid readableType specified");if(h.writableType!==void 0)throw new RangeError("Invalid writableType specified");const y=yt(c,0),w=Nt(c),T=yt(f,1),P=Nt(f);let v;const z=E(X=>{v=X;});Ma(this,z,T,P,y,w),Na(this,h),h.start!==void 0?v(h.start(this._transformStreamController)):v(void 0);}get readable(){if(!Ho(this))throw Go("readable");return this._readable}get writable(){if(!Ho(this))throw Go("writable");return this._writable}};n(mn,"TransformStream");let Je=mn;Object.defineProperties(Je.prototype,{readable:{enumerable:!0},writable:{enumerable:!0}}),typeof l.toStringTag=="symbol"&&Object.defineProperty(Je.prototype,l.toStringTag,{value:"TransformStream",configurable:!0});function Ma(e,t,r,s,f,c){function h(){return t}n(h,"startAlgorithm");function y(z){return Va(e,z)}n(y,"writeAlgorithm");function w(z){return Qa(e,z)}n(w,"abortAlgorithm");function T(){return Ya(e)}n(T,"closeAlgorithm"),e._writable=Zi(h,y,T,w,r,s);function P(){return Ga(e)}n(P,"pullAlgorithm");function v(z){return nr(e,z),b(void 0)}n(v,"cancelAlgorithm"),e._readable=en(h,P,v,f,c),e._backpressure=void 0,e._backpressureChangePromise=void 0,e._backpressureChangePromise_resolve=void 0,or(e,!0),e._transformStreamController=void 0;}n(Ma,"InitializeTransformStream");function Ho(e){return !m(e)||!Object.prototype.hasOwnProperty.call(e,"_transformStreamController")?!1:e instanceof Je}n(Ho,"IsTransformStream");function rr(e,t){Re(e._readable._readableStreamController,t),nr(e,t);}n(rr,"TransformStreamError");function nr(e,t){Vo(e._transformStreamController),Qr(e._writable._writableStreamController,t),e._backpressure&&or(e,!1);}n(nr,"TransformStreamErrorWritableAndUnblockWrite");function or(e,t){e._backpressureChangePromise!==void 0&&e._backpressureChangePromise_resolve(),e._backpressureChangePromise=E(r=>{e._backpressureChangePromise_resolve=r;}),e._backpressure=t;}n(or,"TransformStreamSetBackpressure");const yn=class yn{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!ir(this))throw ar("desiredSize");const t=this._controlledTransformStream._readable._readableStreamController;return Xr(t)}enqueue(t=void 0){if(!ir(this))throw ar("enqueue");Qo(this,t);}error(t=void 0){if(!ir(this))throw ar("error");xa(this,t);}terminate(){if(!ir(this))throw ar("terminate");Ha(this);}};n(yn,"TransformStreamDefaultController");let Le=yn;Object.defineProperties(Le.prototype,{enqueue:{enumerable:!0},error:{enumerable:!0},terminate:{enumerable:!0},desiredSize:{enumerable:!0}}),typeof l.toStringTag=="symbol"&&Object.defineProperty(Le.prototype,l.toStringTag,{value:"TransformStreamDefaultController",configurable:!0});function ir(e){return !m(e)||!Object.prototype.hasOwnProperty.call(e,"_controlledTransformStream")?!1:e instanceof Le}n(ir,"IsTransformStreamDefaultController");function Ua(e,t,r,s){t._controlledTransformStream=e,e._transformStreamController=t,t._transformAlgorithm=r,t._flushAlgorithm=s;}n(Ua,"SetUpTransformStreamDefaultController");function Na(e,t){const r=Object.create(Le.prototype);let s=n(c=>{try{return Qo(r,c),b(void 0)}catch(h){return g(h)}},"transformAlgorithm"),f=n(()=>b(void 0),"flushAlgorithm");t.transform!==void 0&&(s=n(c=>t.transform(c,r),"transformAlgorithm")),t.flush!==void 0&&(f=n(()=>t.flush(r),"flushAlgorithm")),Ua(e,r,s,f);}n(Na,"SetUpTransformStreamDefaultControllerFromTransformer");function Vo(e){e._transformAlgorithm=void 0,e._flushAlgorithm=void 0;}n(Vo,"TransformStreamDefaultControllerClearAlgorithms");function Qo(e,t){const r=e._controlledTransformStream,s=r._readable._readableStreamController;if(!Ge(s))throw new TypeError("Readable side is not in a state that permits enqueue");try{er(s,t);}catch(c){throw nr(r,c),r._readable._storedError}Ra(s)!==r._backpressure&&or(r,!0);}n(Qo,"TransformStreamDefaultControllerEnqueue");function xa(e,t){rr(e._controlledTransformStream,t);}n(xa,"TransformStreamDefaultControllerError");function Yo(e,t){const r=e._transformAlgorithm(t);return O(r,void 0,s=>{throw rr(e._controlledTransformStream,s),s})}n(Yo,"TransformStreamDefaultControllerPerformTransform");function Ha(e){const t=e._controlledTransformStream,r=t._readable._readableStreamController;St(r);const s=new TypeError("TransformStream terminated");nr(t,s);}n(Ha,"TransformStreamDefaultControllerTerminate");function Va(e,t){const r=e._transformStreamController;if(e._backpressure){const s=e._backpressureChangePromise;return O(s,()=>{const f=e._writable;if(f._state==="erroring")throw f._storedError;return Yo(r,t)})}return Yo(r,t)}n(Va,"TransformStreamDefaultSinkWriteAlgorithm");function Qa(e,t){return rr(e,t),b(void 0)}n(Qa,"TransformStreamDefaultSinkAbortAlgorithm");function Ya(e){const t=e._readable,r=e._transformStreamController,s=r._flushAlgorithm();return Vo(r),O(s,()=>{if(t._state==="errored")throw t._storedError;St(t._readableStreamController);},f=>{throw rr(e,f),t._storedError})}n(Ya,"TransformStreamDefaultSinkCloseAlgorithm");function Ga(e){return or(e,!1),e._backpressureChangePromise}n(Ga,"TransformStreamDefaultSourcePullAlgorithm");function ar(e){return new TypeError(`TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`)}n(ar,"defaultControllerBrandCheckException");function Go(e){return new TypeError(`TransformStream.prototype.${e} can only be used on a TransformStream`)}n(Go,"streamBrandCheckException"),a.ByteLengthQueuingStrategy=Ze,a.CountQueuingStrategy=Ke,a.ReadableByteStreamController=_e,a.ReadableStream=ie,a.ReadableStreamBYOBReader=ke,a.ReadableStreamBYOBRequest=Ae,a.ReadableStreamDefaultController=we,a.ReadableStreamDefaultReader=Ee,a.TransformStream=Je,a.TransformStreamDefaultController=Le,a.WritableStream=qe,a.WritableStreamDefaultController=Se,a.WritableStreamDefaultWriter=ze,Object.defineProperty(a,"__esModule",{value:!0});});}(cr,cr.exports)),cr.exports}n(as,"requirePonyfill_es2018");const ss=65536;if(!globalThis.ReadableStream)try{const i=require("node:process"),{emitWarning:o}=i;try{i.emitWarning=()=>{},Object.assign(globalThis,require("node:stream/web")),i.emitWarning=o;}catch(a){throw i.emitWarning=o,a}}catch{Object.assign(globalThis,as());}try{const{Blob:i}=require("buffer");i&&!i.prototype.stream&&(i.prototype.stream=n(function(a){let l=0;const u=this;return new ReadableStream({type:"bytes",async pull(d){const m=await u.slice(l,Math.min(u.size,l+ss)).arrayBuffer();l+=m.byteLength,d.enqueue(new Uint8Array(m)),l===u.size&&d.close();}})},"name"));}catch{}/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */const ei=65536;async function*Sn(i,o=!0){for(const a of i)if("stream"in a)yield*a.stream();else if(ArrayBuffer.isView(a))if(o){let l=a.byteOffset;const u=a.byteOffset+a.byteLength;for(;l!==u;){const d=Math.min(u-l,ei),p=a.buffer.slice(l,l+d);l+=p.byteLength,yield new Uint8Array(p);}}else yield a;else {let l=0,u=a;for(;l!==u.size;){const p=await u.slice(l,Math.min(u.size,l+ei)).arrayBuffer();l+=p.byteLength,yield new Uint8Array(p);}}}n(Sn,"toIterator");const ti=(xe=class{constructor(o=[],a={}){ae(this,me,[]);ae(this,vt,"");ae(this,ct,0);ae(this,wr,"transparent");if(typeof o!="object"||o===null)throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");if(typeof o[Symbol.iterator]!="function")throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");if(typeof a!="object"&&typeof a!="function")throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");a===null&&(a={});const l=new TextEncoder;for(const d of o){let p;ArrayBuffer.isView(d)?p=new Uint8Array(d.buffer.slice(d.byteOffset,d.byteOffset+d.byteLength)):d instanceof ArrayBuffer?p=new Uint8Array(d.slice(0)):d instanceof xe?p=d:p=l.encode(`${d}`),Y(this,ct,k(this,ct)+(ArrayBuffer.isView(p)?p.byteLength:p.size)),k(this,me).push(p);}Y(this,wr,`${a.endings===void 0?"transparent":a.endings}`);const u=a.type===void 0?"":String(a.type);Y(this,vt,/^[\x20-\x7E]*$/.test(u)?u:"");}get size(){return k(this,ct)}get type(){return k(this,vt)}async text(){const o=new TextDecoder;let a="";for await(const l of Sn(k(this,me),!1))a+=o.decode(l,{stream:!0});return a+=o.decode(),a}async arrayBuffer(){const o=new Uint8Array(this.size);let a=0;for await(const l of Sn(k(this,me),!1))o.set(l,a),a+=l.length;return o.buffer}stream(){const o=Sn(k(this,me),!0);return new globalThis.ReadableStream({type:"bytes",async pull(a){const l=await o.next();l.done?a.close():a.enqueue(l.value);},async cancel(){await o.return();}})}slice(o=0,a=this.size,l=""){const{size:u}=this;let d=o<0?Math.max(u+o,0):Math.min(o,u),p=a<0?Math.max(u+a,0):Math.min(a,u);const m=Math.max(p-d,0),C=k(this,me),S=[];let I=0;for(const L of C){if(I>=m)break;const E=ArrayBuffer.isView(L)?L.byteLength:L.size;if(d&&E<=d)d-=E,p-=E;else {let b;ArrayBuffer.isView(L)?(b=L.subarray(d,Math.min(E,p)),I+=b.byteLength):(b=L.slice(d,Math.min(E,p)),I+=b.size),p-=E,S.push(b),d=0;}}const re=new xe([],{type:String(l).toLowerCase()});return Y(re,ct,m),Y(re,me,S),re}get[Symbol.toStringTag](){return "Blob"}static[Symbol.hasInstance](o){return o&&typeof o=="object"&&typeof o.constructor=="function"&&(typeof o.stream=="function"||typeof o.arrayBuffer=="function")&&/^(Blob|File)$/.test(o[Symbol.toStringTag])}},me=new WeakMap,vt=new WeakMap,ct=new WeakMap,wr=new WeakMap,n(xe,"Blob"),xe);Object.defineProperties(ti.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});const ls=ti,it=ls,us=(Wt=class extends it{constructor(a,l,u={}){if(arguments.length<2)throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);super(a,u);ae(this,Et,0);ae(this,At,"");u===null&&(u={});const d=u.lastModified===void 0?Date.now():Number(u.lastModified);Number.isNaN(d)||Y(this,Et,d),Y(this,At,String(l));}get name(){return k(this,At)}get lastModified(){return k(this,Et)}get[Symbol.toStringTag](){return "File"}static[Symbol.hasInstance](a){return !!a&&a instanceof it&&/^(File)$/.test(a[Symbol.toStringTag])}},Et=new WeakMap,At=new WeakMap,n(Wt,"File"),Wt),fs=us,wn=fs;/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */var{toStringTag:Tt,iterator:cs,hasInstance:ds}=Symbol,ri=Math.random,hs="append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","),ni=n((i,o,a)=>(i+="",/^(Blob|File)$/.test(o&&o[Tt])?[(a=a!==void 0?a+"":o[Tt]=="File"?o.name:"blob",i),o.name!==a||o[Tt]=="blob"?new wn([o],a,o):o]:[i,o+""]),"f"),Rn=n((i,o)=>(o?i:i.replace(/\r?\n|\r/g,`\r
`)).replace(/\n/g,"%0A").replace(/\r/g,"%0D").replace(/"/g,"%22"),"e$1"),$e=n((i,o,a)=>{if(o.length<a)throw new TypeError(`Failed to execute '${i}' on 'FormData': ${a} arguments required, but only ${o.length} present.`)},"x");const dr=(Bt=class{constructor(...o){ae(this,G,[]);if(o.length)throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.")}get[Tt](){return "FormData"}[cs](){return this.entries()}static[ds](o){return o&&typeof o=="object"&&o[Tt]==="FormData"&&!hs.some(a=>typeof o[a]!="function")}append(...o){$e("append",arguments,2),k(this,G).push(ni(...o));}delete(o){$e("delete",arguments,1),o+="",Y(this,G,k(this,G).filter(([a])=>a!==o));}get(o){$e("get",arguments,1),o+="";for(var a=k(this,G),l=a.length,u=0;u<l;u++)if(a[u][0]===o)return a[u][1];return null}getAll(o,a){return $e("getAll",arguments,1),a=[],o+="",k(this,G).forEach(l=>l[0]===o&&a.push(l[1])),a}has(o){return $e("has",arguments,1),o+="",k(this,G).some(a=>a[0]===o)}forEach(o,a){$e("forEach",arguments,1);for(var[l,u]of this)o.call(a,u,l,this);}set(...o){$e("set",arguments,2);var a=[],l=!0;o=ni(...o),k(this,G).forEach(u=>{u[0]===o[0]?l&&(l=!a.push(o)):a.push(u);}),l&&a.push(o),Y(this,G,a);}*entries(){yield*k(this,G);}*keys(){for(var[o]of this)yield o;}*values(){for(var[,o]of this)yield o;}},G=new WeakMap,n(Bt,"FormData"),Bt);function ps(i,o=it){var a=`${ri()}${ri()}`.replace(/\./g,"").slice(-28).padStart(32,"-"),l=[],u=`--${a}\r
Content-Disposition: form-data; name="`;return i.forEach((d,p)=>typeof d=="string"?l.push(u+Rn(p)+`"\r
\r
${d.replace(/\r(?!\n)|(?<!\r)\n/g,`\r
`)}\r
`):l.push(u+Rn(p)+`"; filename="${Rn(d.name,1)}"\r
Content-Type: ${d.type||"application/octet-stream"}\r
\r
`,d,`\r
`)),l.push(`--${a}--`),new o(l,{type:"multipart/form-data; boundary="+a})}n(ps,"formDataToBlob");const Bn=class Bn extends Error{constructor(o,a){super(o),Error.captureStackTrace(this,this.constructor),this.type=a;}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};n(Bn,"FetchBaseError");let at=Bn;const kn=class kn extends at{constructor(o,a,l){super(o,a),l&&(this.code=this.errno=l.code,this.erroredSysCall=l.syscall);}};n(kn,"FetchError");let V=kn;const hr=Symbol.toStringTag,oi=n(i=>typeof i=="object"&&typeof i.append=="function"&&typeof i.delete=="function"&&typeof i.get=="function"&&typeof i.getAll=="function"&&typeof i.has=="function"&&typeof i.set=="function"&&typeof i.sort=="function"&&i[hr]==="URLSearchParams","isURLSearchParameters"),pr=n(i=>i&&typeof i=="object"&&typeof i.arrayBuffer=="function"&&typeof i.type=="string"&&typeof i.stream=="function"&&typeof i.constructor=="function"&&/^(Blob|File)$/.test(i[hr]),"isBlob"),bs=n(i=>typeof i=="object"&&(i[hr]==="AbortSignal"||i[hr]==="EventTarget"),"isAbortSignal"),ms=n((i,o)=>{const a=new URL(o).hostname,l=new URL(i).hostname;return a===l||a.endsWith(`.${l}`)},"isDomainOrSubdomain"),ys=n((i,o)=>{const a=new URL(o).protocol,l=new URL(i).protocol;return a===l},"isSameProtocol"),gs=promisify(se.pipeline),N=Symbol("Body internals"),On=class On{constructor(o,{size:a=0}={}){let l=null;o===null?o=null:oi(o)?o=Buffer$1.from(o.toString()):pr(o)||Buffer$1.isBuffer(o)||(types.isAnyArrayBuffer(o)?o=Buffer$1.from(o):ArrayBuffer.isView(o)?o=Buffer$1.from(o.buffer,o.byteOffset,o.byteLength):o instanceof se||(o instanceof dr?(o=ps(o),l=o.type.split("=")[1]):o=Buffer$1.from(String(o))));let u=o;Buffer$1.isBuffer(o)?u=se.Readable.from(o):pr(o)&&(u=se.Readable.from(o.stream())),this[N]={body:o,stream:u,boundary:l,disturbed:!1,error:null},this.size=a,o instanceof se&&o.on("error",d=>{const p=d instanceof at?d:new V(`Invalid response body while trying to fetch ${this.url}: ${d.message}`,"system",d);this[N].error=p;});}get body(){return this[N].stream}get bodyUsed(){return this[N].disturbed}async arrayBuffer(){const{buffer:o,byteOffset:a,byteLength:l}=await Tn(this);return o.slice(a,a+l)}async formData(){const o=this.headers.get("content-type");if(o.startsWith("application/x-www-form-urlencoded")){const l=new dr,u=new URLSearchParams(await this.text());for(const[d,p]of u)l.append(d,p);return l}const{toFormData:a}=await import('../multipart-parser.mjs');return a(this.body,o)}async blob(){const o=this.headers&&this.headers.get("content-type")||this[N].body&&this[N].body.type||"",a=await this.arrayBuffer();return new it([a],{type:o})}async json(){const o=await this.text();return JSON.parse(o)}async text(){const o=await Tn(this);return new TextDecoder().decode(o)}buffer(){return Tn(this)}};n(On,"Body");let De=On;De.prototype.buffer=deprecate(De.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer"),Object.defineProperties(De.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:deprecate(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Tn(i){if(i[N].disturbed)throw new TypeError(`body used already for: ${i.url}`);if(i[N].disturbed=!0,i[N].error)throw i[N].error;const{body:o}=i;if(o===null)return Buffer$1.alloc(0);if(!(o instanceof se))return Buffer$1.alloc(0);const a=[];let l=0;try{for await(const u of o){if(i.size>0&&l+u.length>i.size){const d=new V(`content size at ${i.url} over limit: ${i.size}`,"max-size");throw o.destroy(d),d}l+=u.length,a.push(u);}}catch(u){throw u instanceof at?u:new V(`Invalid response body while trying to fetch ${i.url}: ${u.message}`,"system",u)}if(o.readableEnded===!0||o._readableState.ended===!0)try{return a.every(u=>typeof u=="string")?Buffer$1.from(a.join("")):Buffer$1.concat(a,l)}catch(u){throw new V(`Could not create Buffer from response body for ${i.url}: ${u.message}`,"system",u)}else throw new V(`Premature close of server response while trying to fetch ${i.url}`)}n(Tn,"consumeBody");const Cn=n((i,o)=>{let a,l,{body:u}=i[N];if(i.bodyUsed)throw new Error("cannot clone body after it is used");return u instanceof se&&typeof u.getBoundary!="function"&&(a=new PassThrough({highWaterMark:o}),l=new PassThrough({highWaterMark:o}),u.pipe(a),u.pipe(l),i[N].stream=a,u=l),u},"clone"),_s=deprecate(i=>i.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),ii=n((i,o)=>i===null?null:typeof i=="string"?"text/plain;charset=UTF-8":oi(i)?"application/x-www-form-urlencoded;charset=UTF-8":pr(i)?i.type||null:Buffer$1.isBuffer(i)||types.isAnyArrayBuffer(i)||ArrayBuffer.isView(i)?null:i instanceof dr?`multipart/form-data; boundary=${o[N].boundary}`:i&&typeof i.getBoundary=="function"?`multipart/form-data;boundary=${_s(i)}`:i instanceof se?null:"text/plain;charset=UTF-8","extractContentType"),Ss=n(i=>{const{body:o}=i[N];return o===null?0:pr(o)?o.size:Buffer$1.isBuffer(o)?o.length:o&&typeof o.getLengthSync=="function"&&o.hasKnownLength&&o.hasKnownLength()?o.getLengthSync():null},"getTotalBytes"),ws=n(async(i,{body:o})=>{o===null?i.end():await gs(o,i);},"writeToStream"),br=typeof Rt.validateHeaderName=="function"?Rt.validateHeaderName:i=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(i)){const o=new TypeError(`Header name must be a valid HTTP token [${i}]`);throw Object.defineProperty(o,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),o}},Pn=typeof Rt.validateHeaderValue=="function"?Rt.validateHeaderValue:(i,o)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(o)){const a=new TypeError(`Invalid character in header content ["${i}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},Rr=class Rr extends URLSearchParams{constructor(o){let a=[];if(o instanceof Rr){const l=o.raw();for(const[u,d]of Object.entries(l))a.push(...d.map(p=>[u,p]));}else if(o!=null)if(typeof o=="object"&&!types.isBoxedPrimitive(o)){const l=o[Symbol.iterator];if(l==null)a.push(...Object.entries(o));else {if(typeof l!="function")throw new TypeError("Header pairs must be iterable");a=[...o].map(u=>{if(typeof u!="object"||types.isBoxedPrimitive(u))throw new TypeError("Each header pair must be an iterable object");return [...u]}).map(u=>{if(u.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return [...u]});}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([l,u])=>(br(l),Pn(l,String(u)),[String(l).toLowerCase(),String(u)])):void 0,super(a),new Proxy(this,{get(l,u,d){switch(u){case"append":case"set":return (p,m)=>(br(p),Pn(p,String(m)),URLSearchParams.prototype[u].call(l,String(p).toLowerCase(),String(m)));case"delete":case"has":case"getAll":return p=>(br(p),URLSearchParams.prototype[u].call(l,String(p).toLowerCase()));case"keys":return ()=>(l.sort(),new Set(URLSearchParams.prototype.keys.call(l)).keys());default:return Reflect.get(l,u,d)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(o){const a=this.getAll(o);if(a.length===0)return null;let l=a.join(", ");return /^content-encoding$/i.test(o)&&(l=l.toLowerCase()),l}forEach(o,a=void 0){for(const l of this.keys())Reflect.apply(o,a,[this.get(l),l,this]);}*values(){for(const o of this.keys())yield this.get(o);}*entries(){for(const o of this.keys())yield [o,this.get(o)];}[Symbol.iterator](){return this.entries()}raw(){return [...this.keys()].reduce((o,a)=>(o[a]=this.getAll(a),o),{})}[Symbol.for("nodejs.util.inspect.custom")](){return [...this.keys()].reduce((o,a)=>{const l=this.getAll(a);return a==="host"?o[a]=l[0]:o[a]=l.length>1?l:l[0],o},{})}};n(Rr,"Headers");let le=Rr;Object.defineProperties(le.prototype,["get","entries","forEach","values"].reduce((i,o)=>(i[o]={enumerable:!0},i),{}));function Rs(i=[]){return new le(i.reduce((o,a,l,u)=>(l%2===0&&o.push(u.slice(l,l+2)),o),[]).filter(([o,a])=>{try{return br(o),Pn(o,String(a)),!0}catch{return !1}}))}n(Rs,"fromRawHeaders");const Ts=new Set([301,302,303,307,308]),vn=n(i=>Ts.has(i),"isRedirect"),ee=Symbol("Response internals"),Me=class Me extends De{constructor(o=null,a={}){super(o,a);const l=a.status!=null?a.status:200,u=new le(a.headers);if(o!==null&&!u.has("Content-Type")){const d=ii(o,this);d&&u.append("Content-Type",d);}this[ee]={type:"default",url:a.url,status:l,statusText:a.statusText||"",headers:u,counter:a.counter,highWaterMark:a.highWaterMark};}get type(){return this[ee].type}get url(){return this[ee].url||""}get status(){return this[ee].status}get ok(){return this[ee].status>=200&&this[ee].status<300}get redirected(){return this[ee].counter>0}get statusText(){return this[ee].statusText}get headers(){return this[ee].headers}get highWaterMark(){return this[ee].highWaterMark}clone(){return new Me(Cn(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(o,a=302){if(!vn(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new Me(null,{headers:{location:new URL(o).toString()},status:a})}static error(){const o=new Me(null,{status:0,statusText:""});return o[ee].type="error",o}static json(o=void 0,a={}){const l=JSON.stringify(o);if(l===void 0)throw new TypeError("data is not JSON serializable");const u=new le(a&&a.headers);return u.has("content-type")||u.set("content-type","application/json"),new Me(l,{...a,headers:u})}get[Symbol.toStringTag](){return "Response"}};n(Me,"Response");let te=Me;Object.defineProperties(te.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});const Cs=n(i=>{if(i.search)return i.search;const o=i.href.length-1,a=i.hash||(i.href[o]==="#"?"#":"");return i.href[o-a.length]==="?"?"?":""},"getSearch");function ai(i,o=!1){return i==null||(i=new URL(i),/^(about|blob|data):$/.test(i.protocol))?"no-referrer":(i.username="",i.password="",i.hash="",o&&(i.pathname="",i.search=""),i)}n(ai,"stripURLForUseAsAReferrer");const si=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Ps="strict-origin-when-cross-origin";function vs(i){if(!si.has(i))throw new TypeError(`Invalid referrerPolicy: ${i}`);return i}n(vs,"validateReferrerPolicy");function Es(i){if(/^(http|ws)s:$/.test(i.protocol))return !0;const o=i.host.replace(/(^\[)|(]$)/g,""),a=isIP(o);return a===4&&/^127\./.test(o)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(o)?!0:i.host==="localhost"||i.host.endsWith(".localhost")?!1:i.protocol==="file:"}n(Es,"isOriginPotentiallyTrustworthy");function st(i){return /^about:(blank|srcdoc)$/.test(i)||i.protocol==="data:"||/^(blob|filesystem):$/.test(i.protocol)?!0:Es(i)}n(st,"isUrlPotentiallyTrustworthy");function As(i,{referrerURLCallback:o,referrerOriginCallback:a}={}){if(i.referrer==="no-referrer"||i.referrerPolicy==="")return null;const l=i.referrerPolicy;if(i.referrer==="about:client")return "no-referrer";const u=i.referrer;let d=ai(u),p=ai(u,!0);d.toString().length>4096&&(d=p),o&&(d=o(d)),a&&(p=a(p));const m=new URL(i.url);switch(l){case"no-referrer":return "no-referrer";case"origin":return p;case"unsafe-url":return d;case"strict-origin":return st(d)&&!st(m)?"no-referrer":p.toString();case"strict-origin-when-cross-origin":return d.origin===m.origin?d:st(d)&&!st(m)?"no-referrer":p;case"same-origin":return d.origin===m.origin?d:"no-referrer";case"origin-when-cross-origin":return d.origin===m.origin?d:p;case"no-referrer-when-downgrade":return st(d)&&!st(m)?"no-referrer":d;default:throw new TypeError(`Invalid referrerPolicy: ${l}`)}}n(As,"determineRequestsReferrer");function Ws(i){const o=(i.get("referrer-policy")||"").split(/[,\s]+/);let a="";for(const l of o)l&&si.has(l)&&(a=l);return a}n(Ws,"parseReferrerPolicyFromHeader");const j=Symbol("Request internals"),Ct=n(i=>typeof i=="object"&&typeof i[j]=="object","isRequest"),Bs=deprecate(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Tr=class Tr extends De{constructor(o,a={}){let l;if(Ct(o)?l=new URL(o.url):(l=new URL(o),o={}),l.username!==""||l.password!=="")throw new TypeError(`${l} is an url with embedded credentials.`);let u=a.method||o.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(u)&&(u=u.toUpperCase()),!Ct(a)&&"data"in a&&Bs(),(a.body!=null||Ct(o)&&o.body!==null)&&(u==="GET"||u==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");const d=a.body?a.body:Ct(o)&&o.body!==null?Cn(o):null;super(d,{size:a.size||o.size||0});const p=new le(a.headers||o.headers||{});if(d!==null&&!p.has("Content-Type")){const S=ii(d,this);S&&p.set("Content-Type",S);}let m=Ct(o)?o.signal:null;if("signal"in a&&(m=a.signal),m!=null&&!bs(m))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let C=a.referrer==null?o.referrer:a.referrer;if(C==="")C="no-referrer";else if(C){const S=new URL(C);C=/^about:(\/\/)?client$/.test(S)?"client":S;}else C=void 0;this[j]={method:u,redirect:a.redirect||o.redirect||"follow",headers:p,parsedURL:l,signal:m,referrer:C},this.follow=a.follow===void 0?o.follow===void 0?20:o.follow:a.follow,this.compress=a.compress===void 0?o.compress===void 0?!0:o.compress:a.compress,this.counter=a.counter||o.counter||0,this.agent=a.agent||o.agent,this.highWaterMark=a.highWaterMark||o.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||o.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||o.referrerPolicy||"";}get method(){return this[j].method}get url(){return format(this[j].parsedURL)}get headers(){return this[j].headers}get redirect(){return this[j].redirect}get signal(){return this[j].signal}get referrer(){if(this[j].referrer==="no-referrer")return "";if(this[j].referrer==="client")return "about:client";if(this[j].referrer)return this[j].referrer.toString()}get referrerPolicy(){return this[j].referrerPolicy}set referrerPolicy(o){this[j].referrerPolicy=vs(o);}clone(){return new Tr(this)}get[Symbol.toStringTag](){return "Request"}};n(Tr,"Request");let lt=Tr;Object.defineProperties(lt.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});const ks=n(i=>{const{parsedURL:o}=i[j],a=new le(i[j].headers);a.has("Accept")||a.set("Accept","*/*");let l=null;if(i.body===null&&/^(post|put)$/i.test(i.method)&&(l="0"),i.body!==null){const m=Ss(i);typeof m=="number"&&!Number.isNaN(m)&&(l=String(m));}l&&a.set("Content-Length",l),i.referrerPolicy===""&&(i.referrerPolicy=Ps),i.referrer&&i.referrer!=="no-referrer"?i[j].referrer=As(i):i[j].referrer="no-referrer",i[j].referrer instanceof URL&&a.set("Referer",i.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),i.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:u}=i;typeof u=="function"&&(u=u(o));const d=Cs(o),p={path:o.pathname+d,method:i.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:i.insecureHTTPParser,agent:u};return {parsedURL:o,options:p}},"getNodeRequestOptions"),qn=class qn extends at{constructor(o,a="aborted"){super(o,a);}};n(qn,"AbortError");let mr=qn;/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */if(!globalThis.DOMException)try{const{MessageChannel:i}=require("worker_threads"),o=new i().port1,a=new ArrayBuffer;o.postMessage(a,[a,a]);}catch(i){i.constructor.name==="DOMException"&&(globalThis.DOMException=i.constructor);}var Os=globalThis.DOMException;const qs=is(Os),{stat:En}=promises;n((i,o)=>li(statSync(i),i,o),"blobFromSync");n((i,o)=>En(i).then(a=>li(a,i,o)),"blobFrom");n((i,o)=>En(i).then(a=>ui(a,i,o)),"fileFrom");n((i,o)=>ui(statSync(i),i,o),"fileFromSync");const li=n((i,o,a="")=>new it([new yr({path:o,size:i.size,lastModified:i.mtimeMs,start:0})],{type:a}),"fromBlob"),ui=n((i,o,a="")=>new wn([new yr({path:o,size:i.size,lastModified:i.mtimeMs,start:0})],basename(o),{type:a,lastModified:i.mtimeMs}),"fromFile"),Cr=class Cr{constructor(o){ae(this,Ue,void 0);ae(this,Ne,void 0);Y(this,Ue,o.path),Y(this,Ne,o.start),this.size=o.size,this.lastModified=o.lastModified;}slice(o,a){return new Cr({path:k(this,Ue),lastModified:this.lastModified,size:a-o,start:k(this,Ne)+o})}async*stream(){const{mtimeMs:o}=await En(k(this,Ue));if(o>this.lastModified)throw new qs("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.","NotReadableError");yield*createReadStream(k(this,Ue),{start:k(this,Ne),end:k(this,Ne)+this.size-1});}get[Symbol.toStringTag](){return "Blob"}};Ue=new WeakMap,Ne=new WeakMap,n(Cr,"BlobDataItem");let yr=Cr;const Ls=new Set(["data:","http:","https:"]);async function fi(i,o){return new Promise((a,l)=>{const u=new lt(i,o),{parsedURL:d,options:p}=ks(u);if(!Ls.has(d.protocol))throw new TypeError(`node-fetch cannot load ${i}. URL scheme "${d.protocol.replace(/:$/,"")}" is not supported.`);if(d.protocol==="data:"){const b=os(u.url),g=new te(b,{headers:{"Content-Type":b.typeFull}});a(g);return}const m=(d.protocol==="https:"?Ka:Rt).request,{signal:C}=u;let S=null;const I=n(()=>{const b=new mr("The operation was aborted.");l(b),u.body&&u.body instanceof se.Readable&&u.body.destroy(b),!(!S||!S.body)&&S.body.emit("error",b);},"abort");if(C&&C.aborted){I();return}const re=n(()=>{I(),E();},"abortAndFinalize"),L=m(d.toString(),p);C&&C.addEventListener("abort",re);const E=n(()=>{L.abort(),C&&C.removeEventListener("abort",re);},"finalize");L.on("error",b=>{l(new V(`request to ${u.url} failed, reason: ${b.message}`,"system",b)),E();}),$s(L,b=>{S&&S.body&&S.body.destroy(b);}),process.version<"v14"&&L.on("socket",b=>{let g;b.prependListener("end",()=>{g=b._eventsCount;}),b.prependListener("close",A=>{if(S&&g<b._eventsCount&&!A){const q=new Error("Premature close");q.code="ERR_STREAM_PREMATURE_CLOSE",S.body.emit("error",q);}});}),L.on("response",b=>{L.setTimeout(0);const g=Rs(b.rawHeaders);if(vn(b.statusCode)){const O=g.get("Location");let $=null;try{$=O===null?null:new URL(O,u.url);}catch{if(u.redirect!=="manual"){l(new V(`uri requested responds with an invalid redirect URL: ${O}`,"invalid-redirect")),E();return}}switch(u.redirect){case"error":l(new V(`uri requested responds with a redirect, redirect mode is set to error: ${u.url}`,"no-redirect")),E();return;case"manual":break;case"follow":{if($===null)break;if(u.counter>=u.follow){l(new V(`maximum redirect reached at: ${u.url}`,"max-redirect")),E();return}const F={headers:new le(u.headers),follow:u.follow,counter:u.counter+1,agent:u.agent,compress:u.compress,method:u.method,body:Cn(u),signal:u.signal,size:u.size,referrer:u.referrer,referrerPolicy:u.referrerPolicy};if(!ms(u.url,$)||!ys(u.url,$))for(const ue of ["authorization","www-authenticate","cookie","cookie2"])F.headers.delete(ue);if(b.statusCode!==303&&u.body&&o.body instanceof se.Readable){l(new V("Cannot follow redirect with body being a readable stream","unsupported-redirect")),E();return}(b.statusCode===303||(b.statusCode===301||b.statusCode===302)&&u.method==="POST")&&(F.method="GET",F.body=void 0,F.headers.delete("content-length"));const ve=Ws(g);ve&&(F.referrerPolicy=ve),a(fi(new lt($,F))),E();return}default:return l(new TypeError(`Redirect option '${u.redirect}' is not a valid value of RequestRedirect`))}}C&&b.once("end",()=>{C.removeEventListener("abort",re);});let A=pipeline(b,new PassThrough,O=>{O&&l(O);});process.version<"v12.10"&&b.on("aborted",re);const q={url:u.url,status:b.statusCode,statusText:b.statusMessage,headers:g,size:u.size,counter:u.counter,highWaterMark:u.highWaterMark},ne=g.get("Content-Encoding");if(!u.compress||u.method==="HEAD"||ne===null||b.statusCode===204||b.statusCode===304){S=new te(A,q),a(S);return}const dt={flush:nt.Z_SYNC_FLUSH,finishFlush:nt.Z_SYNC_FLUSH};if(ne==="gzip"||ne==="x-gzip"){A=pipeline(A,nt.createGunzip(dt),O=>{O&&l(O);}),S=new te(A,q),a(S);return}if(ne==="deflate"||ne==="x-deflate"){const O=pipeline(b,new PassThrough,$=>{$&&l($);});O.once("data",$=>{($[0]&15)===8?A=pipeline(A,nt.createInflate(),F=>{F&&l(F);}):A=pipeline(A,nt.createInflateRaw(),F=>{F&&l(F);}),S=new te(A,q),a(S);}),O.once("end",()=>{S||(S=new te(A,q),a(S));});return}if(ne==="br"){A=pipeline(A,nt.createBrotliDecompress(),O=>{O&&l(O);}),S=new te(A,q),a(S);return}S=new te(A,q),a(S);}),ws(L,u).catch(l);})}n(fi,"fetch$1");function $s(i,o){const a=Buffer$1.from(`0\r
\r
`);let l=!1,u=!1,d;i.on("response",p=>{const{headers:m}=p;l=m["transfer-encoding"]==="chunked"&&!m["content-length"];}),i.on("socket",p=>{const m=n(()=>{if(l&&!u){const S=new Error("Premature close");S.code="ERR_STREAM_PREMATURE_CLOSE",o(S);}},"onSocketClose"),C=n(S=>{u=Buffer$1.compare(S.slice(-5),a)===0,!u&&d&&(u=Buffer$1.compare(d.slice(-3),a.slice(0,3))===0&&Buffer$1.compare(S.slice(-2),a.slice(3))===0),d=S;},"onData");p.prependListener("close",m),p.on("data",C),i.on("close",()=>{p.removeListener("close",m),p.removeListener("data",C);});});}n($s,"fixResponseChunkedTransferBadEnding");const ci=new WeakMap,An=new WeakMap;function B(i){const o=ci.get(i);return console.assert(o!=null,"'this' is expected an Event object, but got",i),o}n(B,"pd");function di(i){if(i.passiveListener!=null){typeof console<"u"&&typeof console.error=="function"&&console.error("Unable to preventDefault inside passive event listener invocation.",i.passiveListener);return}i.event.cancelable&&(i.canceled=!0,typeof i.event.preventDefault=="function"&&i.event.preventDefault());}n(di,"setCancelFlag");function ut(i,o){ci.set(this,{eventTarget:i,event:o,eventPhase:2,currentTarget:i,canceled:!1,stopped:!1,immediateStopped:!1,passiveListener:null,timeStamp:o.timeStamp||Date.now()}),Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});const a=Object.keys(o);for(let l=0;l<a.length;++l){const u=a[l];u in this||Object.defineProperty(this,u,hi(u));}}n(ut,"Event"),ut.prototype={get type(){return B(this).event.type},get target(){return B(this).eventTarget},get currentTarget(){return B(this).currentTarget},composedPath(){const i=B(this).currentTarget;return i==null?[]:[i]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return B(this).eventPhase},stopPropagation(){const i=B(this);i.stopped=!0,typeof i.event.stopPropagation=="function"&&i.event.stopPropagation();},stopImmediatePropagation(){const i=B(this);i.stopped=!0,i.immediateStopped=!0,typeof i.event.stopImmediatePropagation=="function"&&i.event.stopImmediatePropagation();},get bubbles(){return !!B(this).event.bubbles},get cancelable(){return !!B(this).event.cancelable},preventDefault(){di(B(this));},get defaultPrevented(){return B(this).canceled},get composed(){return !!B(this).event.composed},get timeStamp(){return B(this).timeStamp},get srcElement(){return B(this).eventTarget},get cancelBubble(){return B(this).stopped},set cancelBubble(i){if(!i)return;const o=B(this);o.stopped=!0,typeof o.event.cancelBubble=="boolean"&&(o.event.cancelBubble=!0);},get returnValue(){return !B(this).canceled},set returnValue(i){i||di(B(this));},initEvent(){}},Object.defineProperty(ut.prototype,"constructor",{value:ut,configurable:!0,writable:!0});function hi(i){return {get(){return B(this).event[i]},set(o){B(this).event[i]=o;},configurable:!0,enumerable:!0}}n(hi,"defineRedirectDescriptor");function Ds(i){return {value(){const o=B(this).event;return o[i].apply(o,arguments)},configurable:!0,enumerable:!0}}n(Ds,"defineCallDescriptor");function Ms(i,o){const a=Object.keys(o);if(a.length===0)return i;function l(u,d){i.call(this,u,d);}n(l,"CustomEvent"),l.prototype=Object.create(i.prototype,{constructor:{value:l,configurable:!0,writable:!0}});for(let u=0;u<a.length;++u){const d=a[u];if(!(d in i.prototype)){const m=typeof Object.getOwnPropertyDescriptor(o,d).value=="function";Object.defineProperty(l.prototype,d,m?Ds(d):hi(d));}}return l}n(Ms,"defineWrapper");function pi(i){if(i==null||i===Object.prototype)return ut;let o=An.get(i);return o==null&&(o=Ms(pi(Object.getPrototypeOf(i)),i),An.set(i,o)),o}n(pi,"getWrapper");function Us(i,o){const a=pi(Object.getPrototypeOf(o));return new a(i,o)}n(Us,"wrapEvent");function Ns(i){return B(i).immediateStopped}n(Ns,"isStopped");function xs(i,o){B(i).eventPhase=o;}n(xs,"setEventPhase");function Hs(i,o){B(i).currentTarget=o;}n(Hs,"setCurrentTarget");function bi(i,o){B(i).passiveListener=o;}n(bi,"setPassiveListener");const mi=new WeakMap,yi=1,gi=2,gr=3;function _r(i){return i!==null&&typeof i=="object"}n(_r,"isObject");function Pt(i){const o=mi.get(i);if(o==null)throw new TypeError("'this' is expected an EventTarget object, but got another value.");return o}n(Pt,"getListeners");function Vs(i){return {get(){let a=Pt(this).get(i);for(;a!=null;){if(a.listenerType===gr)return a.listener;a=a.next;}return null},set(o){typeof o!="function"&&!_r(o)&&(o=null);const a=Pt(this);let l=null,u=a.get(i);for(;u!=null;)u.listenerType===gr?l!==null?l.next=u.next:u.next!==null?a.set(i,u.next):a.delete(i):l=u,u=u.next;if(o!==null){const d={listener:o,listenerType:gr,passive:!1,once:!1,next:null};l===null?a.set(i,d):l.next=d;}},configurable:!0,enumerable:!0}}n(Vs,"defineEventAttributeDescriptor");function _i(i,o){Object.defineProperty(i,`on${o}`,Vs(o));}n(_i,"defineEventAttribute");function Si(i){function o(){be.call(this);}n(o,"CustomEventTarget"),o.prototype=Object.create(be.prototype,{constructor:{value:o,configurable:!0,writable:!0}});for(let a=0;a<i.length;++a)_i(o.prototype,i[a]);return o}n(Si,"defineCustomEventTarget");function be(){if(this instanceof be){mi.set(this,new Map);return}if(arguments.length===1&&Array.isArray(arguments[0]))return Si(arguments[0]);if(arguments.length>0){const i=new Array(arguments.length);for(let o=0;o<arguments.length;++o)i[o]=arguments[o];return Si(i)}throw new TypeError("Cannot call a class as a function")}n(be,"EventTarget"),be.prototype={addEventListener(i,o,a){if(o==null)return;if(typeof o!="function"&&!_r(o))throw new TypeError("'listener' should be a function or an object.");const l=Pt(this),u=_r(a),p=(u?!!a.capture:!!a)?yi:gi,m={listener:o,listenerType:p,passive:u&&!!a.passive,once:u&&!!a.once,next:null};let C=l.get(i);if(C===void 0){l.set(i,m);return}let S=null;for(;C!=null;){if(C.listener===o&&C.listenerType===p)return;S=C,C=C.next;}S.next=m;},removeEventListener(i,o,a){if(o==null)return;const l=Pt(this),d=(_r(a)?!!a.capture:!!a)?yi:gi;let p=null,m=l.get(i);for(;m!=null;){if(m.listener===o&&m.listenerType===d){p!==null?p.next=m.next:m.next!==null?l.set(i,m.next):l.delete(i);return}p=m,m=m.next;}},dispatchEvent(i){if(i==null||typeof i.type!="string")throw new TypeError('"event.type" should be a string.');const o=Pt(this),a=i.type;let l=o.get(a);if(l==null)return !0;const u=Us(this,i);let d=null;for(;l!=null;){if(l.once?d!==null?d.next=l.next:l.next!==null?o.set(a,l.next):o.delete(a):d=l,bi(u,l.passive?l.listener:null),typeof l.listener=="function")try{l.listener.call(this,u);}catch(p){typeof console<"u"&&typeof console.error=="function"&&console.error(p);}else l.listenerType!==gr&&typeof l.listener.handleEvent=="function"&&l.listener.handleEvent(u);if(Ns(u))break;l=l.next;}return bi(u,null),xs(u,0),Hs(u,null),!u.defaultPrevented}},Object.defineProperty(be.prototype,"constructor",{value:be,configurable:!0,writable:!0});const zn=class zn extends be{constructor(){throw super(),new TypeError("AbortSignal cannot be constructed directly")}get aborted(){const o=Sr.get(this);if(typeof o!="boolean")throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this===null?"null":typeof this}`);return o}};n(zn,"AbortSignal");let ft=zn;_i(ft.prototype,"abort");function Qs(){const i=Object.create(ft.prototype);return be.call(i),Sr.set(i,!1),i}n(Qs,"createAbortSignal");function Ys(i){Sr.get(i)===!1&&(Sr.set(i,!0),i.dispatchEvent({type:"abort"}));}n(Ys,"abortSignal");const Sr=new WeakMap;Object.defineProperties(ft.prototype,{aborted:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(ft.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortSignal"});let Wn=(kt=class{constructor(){wi.set(this,Qs());}get signal(){return Ri(this)}abort(){Ys(Ri(this));}},n(kt,"AbortController"),kt);const wi=new WeakMap;function Ri(i){const o=wi.get(i);if(o==null)throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${i===null?"null":typeof i}`);return o}n(Ri,"getSignal"),Object.defineProperties(Wn.prototype,{signal:{enumerable:!0},abort:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Wn.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortController"});var Gs=Object.defineProperty,Zs=n((i,o)=>Gs(i,"name",{value:o,configurable:!0}),"e");const Ti=fi;Ci();function Ci(){!globalThis.process?.versions?.node&&!globalThis.process?.env.DISABLE_NODE_FETCH_NATIVE_WARN&&console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");}n(Ci,"s"),Zs(Ci,"checkNodeEnvironment");

var i=Object.defineProperty;var e=(r,t)=>i(r,"name",{value:t,configurable:!0});var c=Object.defineProperty,h=e((r,t)=>c(r,"name",{value:t,configurable:!0}),"a");function o$1(r,t){if(!(r in globalThis))try{globalThis[r]=t;}catch{}}e(o$1,"e"),h(o$1,"polyfill"),o$1("fetch",Ti),o$1("Blob",it),o$1("File",wn),o$1("FormData",dr),o$1("Headers",le),o$1("Request",lt),o$1("Response",te),o$1("AbortController",Wn);

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (value[0] === '"' && value[value.length - 1] === '"') {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}
const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/;
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}

function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto,
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  const [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  const { pathname, search, hash } = parsePath(
    path.replace(/\/(?=[A-Za-z]:)/, "")
  );
  return {
    protocol,
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol ? parsed.protocol + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    // @ts-ignore
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode !== void 0) {
      node = nextNode;
    } else {
      node = node.placeholderChildNode;
      if (node !== null) {
        params[node.paramName] = section;
        paramsFound = true;
      } else {
        break;
      }
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildNode = childNode;
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      node = childNode;
    }
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections[sections.length - 1];
    node.data = null;
    if (Object.keys(node.children).length === 0) {
      const parentNode = node.parent;
      parentNode.children.delete(lastSection);
      parentNode.wildcardChildNode = null;
      parentNode.placeholderChildNode = null;
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildNode: null
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table);
}
function _createMatcher(table) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table) {
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path.startsWith(key)) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        table.static.set(path, node.data);
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function(...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
function createNotImplementedError(name) {
  throw new Error(`[unenv] ${name} is not implemented yet!`);
}

let defaultMaxListeners = 10;
let EventEmitter$1 = class EventEmitter {
  __unenv__ = true;
  _events = /* @__PURE__ */ Object.create(null);
  _maxListeners;
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + "."
      );
    }
    defaultMaxListeners = arg;
  }
  setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + n + "."
      );
    }
    this._maxListeners = n;
    return this;
  }
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  emit(type, ...args) {
    if (!this._events[type] || this._events[type].length === 0) {
      return false;
    }
    if (type === "error") {
      let er;
      if (args.length > 0) {
        er = args[0];
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error(
        "Unhandled error." + (er ? " (" + er.message + ")" : "")
      );
      err.context = er;
      throw err;
    }
    for (const _listener of this._events[type]) {
      (_listener.listener || _listener).apply(this, args);
    }
    return true;
  }
  addListener(type, listener) {
    return _addListener(this, type, listener, false);
  }
  on(type, listener) {
    return _addListener(this, type, listener, false);
  }
  prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  }
  once(type, listener) {
    return this.on(type, _wrapOnce(this, type, listener));
  }
  prependOnceListener(type, listener) {
    return this.prependListener(type, _wrapOnce(this, type, listener));
  }
  removeListener(type, listener) {
    return _removeListener(this, type, listener);
  }
  off(type, listener) {
    return this.removeListener(type, listener);
  }
  removeAllListeners(type) {
    return _removeAllListeners(this, type);
  }
  listeners(type) {
    return _listeners(this, type, true);
  }
  rawListeners(type) {
    return _listeners(this, type, false);
  }
  listenerCount(type) {
    return this.rawListeners(type).length;
  }
  eventNames() {
    return Object.keys(this._events);
  }
};
function _addListener(target, type, listener, prepend) {
  _checkListener(listener);
  if (target._events.newListener !== void 0) {
    target.emit("newListener", type, listener.listener || listener);
  }
  if (!target._events[type]) {
    target._events[type] = [];
  }
  if (prepend) {
    target._events[type].unshift(listener);
  } else {
    target._events[type].push(listener);
  }
  const maxListeners = _getMaxListeners(target);
  if (maxListeners > 0 && target._events[type].length > maxListeners && !target._events[type].warned) {
    target._events[type].warned = true;
    const warning = new Error(
      `[unenv] Possible EventEmitter memory leak detected. ${target._events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    warning.name = "MaxListenersExceededWarning";
    warning.emitter = target;
    warning.type = type;
    warning.count = target._events[type]?.length;
    console.warn(warning);
  }
  return target;
}
function _removeListener(target, type, listener) {
  _checkListener(listener);
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  const lenBeforeFilter = target._events[type].length;
  target._events[type] = target._events[type].filter((fn) => fn !== listener);
  if (lenBeforeFilter === target._events[type].length) {
    return target;
  }
  if (target._events.removeListener) {
    target.emit("removeListener", type, listener.listener || listener);
  }
  if (target._events[type].length === 0) {
    delete target._events[type];
  }
  return target;
}
function _removeAllListeners(target, type) {
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type]) {
      target.emit("removeListener", type, _listener.listener || _listener);
    }
  }
  delete target._events[type];
  return target;
}
function _wrapOnce(target, type, listener) {
  let fired = false;
  const wrapper = (...args) => {
    if (fired) {
      return;
    }
    target.removeListener(type, wrapper);
    fired = true;
    return args.length === 0 ? listener.call(target) : listener.apply(target, args);
  };
  wrapper.listener = listener;
  return wrapper;
}
function _getMaxListeners(target) {
  return target._maxListeners ?? EventEmitter$1.defaultMaxListeners;
}
function _listeners(target, type, unwrap) {
  let listeners = target._events[type];
  if (typeof listeners === "function") {
    listeners = [listeners];
  }
  return unwrap ? listeners.map((l) => l.listener || l) : listeners;
}
function _checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof listener
    );
  }
}

const EventEmitter = globalThis.EventEmitter || EventEmitter$1;

class _Readable extends EventEmitter {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(_iterable, options) {
    return new _Readable(options);
  }
  constructor(_opts) {
    super();
  }
  _read(_size) {
  }
  read(_size) {
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {
  }
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error) {
    this.destroyed = true;
    this._destroy(error);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
}
const Readable = globalThis.Readable || _Readable;

class _Writable extends EventEmitter {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(_opts) {
    super();
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {
  }
  _destroy(_error, _callback) {
  }
  _final(_callback) {
  }
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
}
const Writable = globalThis.Writable || _Writable;

const __Duplex = class {
  allowHalfOpen = true;
  _destroy;
  constructor(readable = new Readable(), writable = new Writable()) {
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
};
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype);
  Object.assign(__Duplex.prototype, Writable.prototype);
  return __Duplex;
}
const _Duplex = /* @__PURE__ */ getDuplex();
const Duplex = globalThis.Duplex || _Duplex;

class Socket extends Duplex {
  __unenv__ = true;
  bufferSize = 0;
  bytesRead = 0;
  bytesWritten = 0;
  connecting = false;
  destroyed = false;
  pending = false;
  localAddress = "";
  localPort = 0;
  remoteAddress = "";
  remoteFamily = "";
  remotePort = 0;
  readyState = "readOnly";
  constructor(_options) {
    super();
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  resetAndDestroy() {
    const err = new Error("ERR_SOCKET_CLOSED");
    err.code = "ERR_SOCKET_CLOSED";
    this.destroy(err);
    return this;
  }
}

class IncomingMessage extends Readable {
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
}
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(
        Boolean
      );
    }
  }
  return d;
}

class ServerResponse extends Writable {
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) ; else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [
      ...Array.isArray(current) ? current : [current],
      ...Array.isArray(value) ? value : [value]
    ].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$1(this, "statusCode", 500);
    __publicField$1(this, "fatal", false);
    __publicField$1(this, "unhandled", false);
    __publicField$1(this, "statusMessage");
    __publicField$1(this, "data");
    __publicField$1(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$1(H3Error, "__h3_error__", true);
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function isMethod(event, expected, allowHead) {
  if (allowHead && event.method === "HEAD") {
    return true;
  }
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected, allowHead)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  return event.web?.request?.body || event._requestBody || new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(name, value);
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders(
    getProxyRequestHeaders(event),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  const response = await _getFetch(opts.fetch)(target, {
    headers: opts.headers,
    ignoreResponseError: true,
    // make $ofetch.raw transparent
    ...opts.fetchOptions
  });
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name)) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    // Context
    __publicField(this, "node");
    // Node
    __publicField(this, "web");
    // Web
    __publicField(this, "context", {});
    // Shared
    // Request
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    // Response
    __publicField(this, "_handled", false);
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. **/
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. **/
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    return Object.assign(handler, { __is_handler__: true });
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  return Object.assign(_handler, { __is_handler__: true });
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler = r.default || r;
        if (typeof handler !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler
          );
        }
        _resolved = toEventHandler(r.default || r);
        return _resolved;
      });
    }
    return _promise;
  };
  return eventHandler((event) => {
    if (_resolved) {
      return _resolved(event);
    }
    return resolveHandler().then((handler) => handler(event));
  });
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const app = {
    // @ts-ignore
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    handler,
    stack,
    options
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(
      normalizeLayer({ ...arg2, route: "/", handler: arg1 })
    );
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      await options.onAfterResponse(event, void 0);
    }
  });
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  router.handler = eventHandler((event) => {
    let path = event.path || "/";
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      if (opts.preemptive || opts.preemtive) {
        throw createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${event.path || "/"}.`
        });
      } else {
        return;
      }
    }
    const method = (event.node.req.method || "get").toLowerCase();
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      if (opts.preemptive || opts.preemtive) {
        throw createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        });
      } else {
        return;
      }
    }
    event.context.matchedRoute = matched;
    const params = matched.params || {};
    event.context.params = params;
    return Promise.resolve(handler(event)).then((res) => {
      if (res === void 0 && (opts.preemptive || opts.preemtive)) {
        return null;
      }
      return res;
    });
  });
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      await sendError(event, error, !!app.options.debug);
    }
  };
  return toNodeHandle;
}

var a=Object.defineProperty;var t=(e,r)=>a(e,"name",{value:r,configurable:!0});var f=Object.defineProperty,g=t((e,r)=>f(e,"name",{value:r,configurable:!0}),"e");const o=!!globalThis.process?.env?.FORCE_NODE_FETCH;function l(){return !o&&globalThis.fetch?globalThis.fetch:Ti}t(l,"p"),g(l,"_getFetch");const s=l(),d=!o&&globalThis.Headers||le,A=!o&&globalThis.AbortController||Wn;

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function mergeFetchOptions(input, defaults, Headers = globalThis.Headers) {
  const merged = {
    ...defaults,
    ...input
  };
  if (defaults?.params && input?.params) {
    merged.params = {
      ...defaults?.params,
      ...input?.params
    };
  }
  if (defaults?.query && input?.query) {
    merged.query = {
      ...defaults?.query,
      ...input?.query
    };
  }
  if (defaults?.headers && input?.headers) {
    merged.headers = new Headers(defaults?.headers || {});
    for (const [key, value] of new Headers(input?.headers || {})) {
      merged.headers.set(key, value);
    }
  }
  return merged;
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  //  Gateway Timeout
]);
const nullBodyResponses$1 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch$1(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1,
          timeout: context.options.timeout
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: mergeFetchOptions(_options, globalOptions.defaults, Headers),
      response: void 0,
      error: void 0
    };
    context.options.method = context.options.method?.toUpperCase();
    if (context.options.onRequest) {
      await context.options.onRequest(context);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query || context.options.params) {
        context.request = withQuery(context.request, {
          ...context.options.params,
          ...context.options.query
        });
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      setTimeout(() => controller.abort(), context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await context.options.onRequestError(context);
      }
      return await onError(context);
    }
    const hasBody = context.response.body && !nullBodyResponses$1.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await context.options.onResponse(context);
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await context.options.onResponseError(context);
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}) => createFetch$1({
    ...globalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return s;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new Rt.Agent(agentOptions);
  const httpsAgent = new Ka.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return s(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch || createNodeFetch();
const Headers$1 = globalThis.Headers || d;
const AbortController$1 = globalThis.AbortController || A;
const ofetch = createFetch$1({ fetch, Headers: Headers$1, AbortController: AbortController$1 });
const $fetch = ofetch;

const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createCall(handle) {
  return function callHandle(context) {
    const req = new IncomingMessage();
    const res = new ServerResponse(req);
    req.url = context.url || "/";
    req.method = context.method || "GET";
    req.headers = {};
    if (context.headers) {
      const headerEntries = typeof context.headers.entries === "function" ? context.headers.entries() : Object.entries(context.headers);
      for (const [name, value] of headerEntries) {
        if (!value) {
          continue;
        }
        req.headers[name.toLowerCase()] = value;
      }
    }
    req.headers.host = req.headers.host || context.host || "localhost";
    req.connection.encrypted = // @ts-ignore
    req.connection.encrypted || context.protocol === "https";
    req.body = context.body || null;
    req.__unenv__ = context.context;
    return handle(req, res).then(() => {
      let body = res._data;
      if (nullBodyResponses.has(res.statusCode) || req.method.toUpperCase() === "HEAD") {
        body = null;
        delete res._headers["content-length"];
      }
      const r = {
        body,
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage
      };
      req.destroy();
      res.destroy();
      return r;
    });
  };
}

function createFetch(call, _fetch = global.fetch) {
  return async function ufetch(input, init) {
    const url = input.toString();
    if (!url.startsWith("/")) {
      return _fetch(url, init);
    }
    try {
      const r = await call({ url, ...init });
      return new Response(r.body, {
        status: r.status,
        statusText: r.statusText,
        headers: Object.fromEntries(
          Object.entries(r.headers).map(([name, value]) => [
            name,
            Array.isArray(value) ? value.join(",") : String(value) || ""
          ])
        )
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: Number.parseInt(error.statusCode || error.code) || 500,
        statusText: error.statusText
      });
    }
  };
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char.toUpperCase() === char;
}
function splitByCase(string_, separators) {
  const splitters = separators ?? STR_SPLITTERS;
  const parts = [];
  if (!string_ || typeof string_ !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of string_) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff[buff.length - 1];
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(string_, joiner) {
  return !string_ ? "" : (Array.isArray(string_) ? string_ : splitByCase(string_)).map((p) => p.toLowerCase()).join(joiner ?? "-");
}
function snakeCase(string_) {
  return kebabCase(string_, "_");
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

class WordArray {
  constructor(words, sigBytes) {
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    this._data = new WordArray();
    this._nDataBytes = 0;
    this._minBufferSize = 0;
    this.blockSize = 512 / 32;
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}

const H = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    this._hash = new WordArray([...H]);
  }
  reset() {
    super.reset();
    this._hash = new WordArray([...H]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K[i] + W[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}

function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === void 0) {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base64 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base64;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}

const storageKeyProperties = [
  "hasItem",
  "getItem",
  "getItemRaw",
  "setItem",
  "setItemRaw",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    options: {},
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) || null;
    },
    getItemRaw(key) {
      return data.get(key) || null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return Array.from(data.keys());
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          await asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        const keys = rawKeys.map((key) => mount.mountpoint + normalizeKey$1(key)).filter((key) => !maskedMounts.some((p) => key.startsWith(p)));
        allKeys.push(...keys);
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter((key) => key.startsWith(base) && !key.endsWith("$")) : allKeys.filter((key) => !key.endsWith("$"));
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    }
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises$1.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises$1.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises$1.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises$1.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises$1.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        const dirFiles = await readdirRecursive(entryPath, ignore);
        files.push(...dirFiles.map((f) => entry.name + "/" + f));
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises$1.rmdir(entryPath));
      } else {
        return promises$1.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.\:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises$1.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys() {
      return readdirRecursive(r("."), opts.ignore);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"D:\\Bright Media WORK\\Poorvi Estella\\Main_files\\vie_vue_3\\.data\\kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && entry.value) {
      _resolvePromise.catch((error) => {
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const isErrorPage = event.path.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"13e-iXDEO5dKBbgIChVUFTuoi4a90u0\"",
    "mtime": "2024-12-26T05:36:29.482Z",
    "size": 318,
    "path": "../public/favicon.ico"
  },
  "/_redirects": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"19-6nugkiT3Fi95n4wqaYWSOGB3p+Y\"",
    "mtime": "2024-12-26T06:12:35.111Z",
    "size": 25,
    "path": "../public/_redirects"
  },
  "/demo-img/01.png": {
    "type": "image/png",
    "etag": "\"145c8-A1rSHxSL6TJmPY5LpP5QYrlJzCg\"",
    "mtime": "2024-12-26T05:36:30.547Z",
    "size": 83400,
    "path": "../public/demo-img/01.png"
  },
  "/demo-img/02.png": {
    "type": "image/png",
    "etag": "\"83a6-iuse250Q7yYjcXj5quZhVDTkN40\"",
    "mtime": "2024-12-26T05:36:30.563Z",
    "size": 33702,
    "path": "../public/demo-img/02.png"
  },
  "/demo-img/03.png": {
    "type": "image/png",
    "etag": "\"d005-bZIAUdxYbetQOpteHnkV2uUkl10\"",
    "mtime": "2024-12-26T05:36:30.595Z",
    "size": 53253,
    "path": "../public/demo-img/03.png"
  },
  "/demo-img/04.png": {
    "type": "image/png",
    "etag": "\"13b7c-rtPqzCgBTOSbIV/xNmcZY6HKL4c\"",
    "mtime": "2024-12-26T05:36:30.611Z",
    "size": 80764,
    "path": "../public/demo-img/04.png"
  },
  "/demo-img/05.png": {
    "type": "image/png",
    "etag": "\"9405-o1hPYGUcEzfFXkq8wQn/Fp18bHA\"",
    "mtime": "2024-12-26T05:36:30.627Z",
    "size": 37893,
    "path": "../public/demo-img/05.png"
  },
  "/demo-img/1.png": {
    "type": "image/png",
    "etag": "\"1a7f6-E/NdAMHkUUFkM2y01Pm0eLe9I44\"",
    "mtime": "2024-12-26T05:36:30.658Z",
    "size": 108534,
    "path": "../public/demo-img/1.png"
  },
  "/demo-img/2.png": {
    "type": "image/png",
    "etag": "\"9d67-GUOVZ3VycAfPhgOvwgSeW1OrMYY\"",
    "mtime": "2024-12-26T05:36:30.674Z",
    "size": 40295,
    "path": "../public/demo-img/2.png"
  },
  "/demo-img/3.png": {
    "type": "image/png",
    "etag": "\"d65e-CZyTXyivVhmioRO6pXKgxrQNG0Q\"",
    "mtime": "2024-12-26T05:36:30.697Z",
    "size": 54878,
    "path": "../public/demo-img/3.png"
  },
  "/demo-img/4.png": {
    "type": "image/png",
    "etag": "\"152f6-fTmDjOItmx+0QBwZMJhZKBD7Eww\"",
    "mtime": "2024-12-26T05:36:30.723Z",
    "size": 86774,
    "path": "../public/demo-img/4.png"
  },
  "/demo-img/5.png": {
    "type": "image/png",
    "etag": "\"a9c3-sU9HeN2QrS0efgRBLVbuwPWQkic\"",
    "mtime": "2024-12-26T05:36:30.747Z",
    "size": 43459,
    "path": "../public/demo-img/5.png"
  },
  "/demo-img/about.png": {
    "type": "image/png",
    "etag": "\"1083c-iskemeoITi0FnurvaqDRl+PYNFo\"",
    "mtime": "2024-12-26T05:36:30.763Z",
    "size": 67644,
    "path": "../public/demo-img/about.png"
  },
  "/demo-img/about1.png": {
    "type": "image/png",
    "etag": "\"f600-/KgA6yyppiuoSSkxYe5g+AKxa1M\"",
    "mtime": "2024-12-26T05:36:30.779Z",
    "size": 62976,
    "path": "../public/demo-img/about1.png"
  },
  "/demo-img/bg.png": {
    "type": "image/png",
    "etag": "\"11a253-+IXCtt3gPul/wTpqT5MyDH21k54\"",
    "mtime": "2024-12-26T05:36:30.811Z",
    "size": 1155667,
    "path": "../public/demo-img/bg.png"
  },
  "/demo-img/c1.png": {
    "type": "image/png",
    "etag": "\"1196b-hpnM6IC2N27F+FjvtbuYDqC2rZ0\"",
    "mtime": "2024-12-26T05:36:30.843Z",
    "size": 72043,
    "path": "../public/demo-img/c1.png"
  },
  "/demo-img/c2.png": {
    "type": "image/png",
    "etag": "\"a9d9-F+P4DEQ1q6AOKA5agqaJ2FsVGpM\"",
    "mtime": "2024-12-26T05:36:30.863Z",
    "size": 43481,
    "path": "../public/demo-img/c2.png"
  },
  "/demo-img/c3.png": {
    "type": "image/png",
    "etag": "\"c891-3bzt+49TqZvJXqy2MxucNjfQU3M\"",
    "mtime": "2024-12-26T05:36:30.880Z",
    "size": 51345,
    "path": "../public/demo-img/c3.png"
  },
  "/demo-img/c4.png": {
    "type": "image/png",
    "etag": "\"b395-uSz0i1tavGP4bkRkPGjnPO7cyM0\"",
    "mtime": "2024-12-26T05:36:30.906Z",
    "size": 45973,
    "path": "../public/demo-img/c4.png"
  },
  "/demo-img/contact.png": {
    "type": "image/png",
    "etag": "\"344aa-p8EoTinie74cpcdc1fNzrker3Hc\"",
    "mtime": "2024-12-26T05:36:30.930Z",
    "size": 214186,
    "path": "../public/demo-img/contact.png"
  },
  "/demo-img/contact1.png": {
    "type": "image/png",
    "etag": "\"12d4f-NHHbyIWP8RA0B6Jfr728gN/X4+c\"",
    "mtime": "2024-12-26T05:36:30.938Z",
    "size": 77135,
    "path": "../public/demo-img/contact1.png"
  },
  "/demo-img/mobile1.png": {
    "type": "image/png",
    "etag": "\"2f4a1-pbcSbIxgaNWH5tMusCLLDSOB/Sg\"",
    "mtime": "2024-12-26T05:36:30.970Z",
    "size": 193697,
    "path": "../public/demo-img/mobile1.png"
  },
  "/demo-img/mobile2.png": {
    "type": "image/png",
    "etag": "\"29cd5-ispZbdeNE8dnghC8izHp1OlrmE4\"",
    "mtime": "2024-12-26T05:36:30.997Z",
    "size": 171221,
    "path": "../public/demo-img/mobile2.png"
  },
  "/demo-img/n01.png": {
    "type": "image/png",
    "etag": "\"12a4c-dbQHODx2HIeHG4quOQ4SbgIn/SU\"",
    "mtime": "2024-12-26T05:36:31.018Z",
    "size": 76364,
    "path": "../public/demo-img/n01.png"
  },
  "/demo-img/n02.png": {
    "type": "image/png",
    "etag": "\"6b38-lun+TiKySIvmn9jh06dRBZWt5bo\"",
    "mtime": "2024-12-26T05:36:31.034Z",
    "size": 27448,
    "path": "../public/demo-img/n02.png"
  },
  "/demo-img/n03.png": {
    "type": "image/png",
    "etag": "\"1c26a-2tv1ievWia4L9jtWxErUgFhsQxI\"",
    "mtime": "2024-12-26T05:36:31.063Z",
    "size": 115306,
    "path": "../public/demo-img/n03.png"
  },
  "/demo-img/n1.png": {
    "type": "image/png",
    "etag": "\"18040-o6p7SMQ8msWltCkuJumo6yBUC+M\"",
    "mtime": "2024-12-26T05:36:31.081Z",
    "size": 98368,
    "path": "../public/demo-img/n1.png"
  },
  "/demo-img/n2.png": {
    "type": "image/png",
    "etag": "\"7f2f-QCU69DykWUBoZ/h9OSJSLKLiNAA\"",
    "mtime": "2024-12-26T05:36:31.097Z",
    "size": 32559,
    "path": "../public/demo-img/n2.png"
  },
  "/demo-img/n3.png": {
    "type": "image/png",
    "etag": "\"1aada-3lVApHCITsRRC8hhNGQulm3CEfQ\"",
    "mtime": "2024-12-26T05:36:31.129Z",
    "size": 109274,
    "path": "../public/demo-img/n3.png"
  },
  "/demo-img/s01.png": {
    "type": "image/png",
    "etag": "\"169fa-px8q/gbx/W3uHY2WCXWTLWEgRFo\"",
    "mtime": "2024-12-26T05:36:31.145Z",
    "size": 92666,
    "path": "../public/demo-img/s01.png"
  },
  "/demo-img/s02.png": {
    "type": "image/png",
    "etag": "\"11f6b-91829okzhBPKMt+aAwuzEJDFgT8\"",
    "mtime": "2024-12-26T05:36:31.176Z",
    "size": 73579,
    "path": "../public/demo-img/s02.png"
  },
  "/demo-img/s03.png": {
    "type": "image/png",
    "etag": "\"7746-oa7TLqYTA1lo7nx48nraEO6PiZ0\"",
    "mtime": "2024-12-26T05:36:31.192Z",
    "size": 30534,
    "path": "../public/demo-img/s03.png"
  },
  "/demo-img/s1.png": {
    "type": "image/png",
    "etag": "\"186e5-tghZer2lJRuLcY1wlbx9x8Dg+dA\"",
    "mtime": "2024-12-26T05:36:31.208Z",
    "size": 100069,
    "path": "../public/demo-img/s1.png"
  },
  "/demo-img/s2.png": {
    "type": "image/png",
    "etag": "\"12c50-rmvw8P4e7Seee89g4/hp6sN8q/I\"",
    "mtime": "2024-12-26T05:36:31.240Z",
    "size": 76880,
    "path": "../public/demo-img/s2.png"
  },
  "/demo-img/s3.png": {
    "type": "image/png",
    "etag": "\"800e-9O6YDlm8xk+5nWEnj2elMDo5qfs\"",
    "mtime": "2024-12-26T05:36:31.267Z",
    "size": 32782,
    "path": "../public/demo-img/s3.png"
  },
  "/demo-img/w01.png": {
    "type": "image/png",
    "etag": "\"13140-QklPQK1m5kmBICIMAZkD666PBnc\"",
    "mtime": "2024-12-26T05:36:31.290Z",
    "size": 78144,
    "path": "../public/demo-img/w01.png"
  },
  "/demo-img/w02.png": {
    "type": "image/png",
    "etag": "\"17c5a-FvFsEhP19Ep13kIrW4sHGUhMVnw\"",
    "mtime": "2024-12-26T05:36:31.312Z",
    "size": 97370,
    "path": "../public/demo-img/w02.png"
  },
  "/demo-img/w03.png": {
    "type": "image/png",
    "etag": "\"12add-bBNj4vloU/do6hi9+3HCjh3TU+s\"",
    "mtime": "2024-12-26T05:36:31.328Z",
    "size": 76509,
    "path": "../public/demo-img/w03.png"
  },
  "/demo-img/w1.png": {
    "type": "image/png",
    "etag": "\"123bb-OceZ+FhNk2UsJ++DsTWgIs4FMHo\"",
    "mtime": "2024-12-26T05:36:31.344Z",
    "size": 74683,
    "path": "../public/demo-img/w1.png"
  },
  "/demo-img/w2.png": {
    "type": "image/png",
    "etag": "\"18174-SJZN4ymIK7X8+jpBkOBlB/hlEGE\"",
    "mtime": "2024-12-26T05:36:31.375Z",
    "size": 98676,
    "path": "../public/demo-img/w2.png"
  },
  "/demo-img/w3.png": {
    "type": "image/png",
    "etag": "\"12370-YyeBxcGx8zdfpZNeXXIzhNwpa+8\"",
    "mtime": "2024-12-26T05:36:31.391Z",
    "size": 74608,
    "path": "../public/demo-img/w3.png"
  },
  "/img/01.jpg": {
    "type": "image/jpeg",
    "etag": "\"ac7e-HOpDE46ZAdV//O0hz/Vj1uNEEwo\"",
    "mtime": "2024-12-26T05:36:31.423Z",
    "size": 44158,
    "path": "../public/img/01.jpg"
  },
  "/img/02.jpg": {
    "type": "image/jpeg",
    "etag": "\"10805-gUJ0wa0Lu1rEvCz8b/D/58+zSmg\"",
    "mtime": "2024-12-26T05:36:31.439Z",
    "size": 67589,
    "path": "../public/img/02.jpg"
  },
  "/img/bg-vid.jpg": {
    "type": "image/jpeg",
    "etag": "\"4368c-Et9BIZig1HGZh9IoKuR7z+nXq00\"",
    "mtime": "2024-12-26T05:36:31.470Z",
    "size": 276108,
    "path": "../public/img/bg-vid.jpg"
  },
  "/img/dots.png": {
    "type": "image/png",
    "etag": "\"6b-NS41XfWrm8S4n73Tc3TwT3m+ZYU\"",
    "mtime": "2024-12-26T05:36:31.486Z",
    "size": 107,
    "path": "../public/img/dots.png"
  },
  "/img/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"13e-iXDEO5dKBbgIChVUFTuoi4a90u0\"",
    "mtime": "2024-12-26T05:36:31.502Z",
    "size": 318,
    "path": "../public/img/favicon.ico"
  },
  "/img/feat.jpg": {
    "type": "image/jpeg",
    "etag": "\"14db9-KidmzpgFG80V4OnP8oejL51JRbM\"",
    "mtime": "2024-12-26T05:36:31.534Z",
    "size": 85433,
    "path": "../public/img/feat.jpg"
  },
  "/img/hero.jpg": {
    "type": "image/jpeg",
    "etag": "\"17266-+f6SWU3HlZ5h9PYze3Xtp3qKm0A\"",
    "mtime": "2024-12-26T05:36:31.550Z",
    "size": 94822,
    "path": "../public/img/hero.jpg"
  },
  "/img/logo-dark.png": {
    "type": "image/png",
    "etag": "\"363-cfjLcHk64ComP3ZUGOQEYubj0W0\"",
    "mtime": "2024-12-26T05:36:31.582Z",
    "size": 867,
    "path": "../public/img/logo-dark.png"
  },
  "/img/logo-gr.png": {
    "type": "image/png",
    "etag": "\"4ae-CWDRHPhNf2gh7lHIXHAb6ZICtGY\"",
    "mtime": "2024-12-26T05:36:31.598Z",
    "size": 1198,
    "path": "../public/img/logo-gr.png"
  },
  "/img/logo-light.png": {
    "type": "image/png",
    "etag": "\"3e8-+CYPvKCxQVKSW2FkmpvWn+SaTpY\"",
    "mtime": "2024-12-26T05:36:31.613Z",
    "size": 1000,
    "path": "../public/img/logo-light.png"
  },
  "/img/min-area.jpg": {
    "type": "image/jpeg",
    "etag": "\"15ff7-wJLn9FFPagd7lbFtnhckI1fXQh8\"",
    "mtime": "2024-12-26T05:36:31.645Z",
    "size": 90103,
    "path": "../public/img/min-area.jpg"
  },
  "/img/patrn.svg": {
    "type": "image/svg+xml",
    "etag": "\"ea4f4-JT7ZmRhsgYgmsRM7FgyHUwYeB58\"",
    "mtime": "2024-12-26T05:36:31.693Z",
    "size": 959732,
    "path": "../public/img/patrn.svg"
  },
  "/img/patrn1.png": {
    "type": "image/png",
    "etag": "\"17e88-wfh5JDVxBz1K502WVam0ZoRgLPY\"",
    "mtime": "2024-12-26T05:36:31.709Z",
    "size": 97928,
    "path": "../public/img/patrn1.png"
  },
  "/img/testim-img.jpg": {
    "type": "image/jpeg",
    "etag": "\"21aca-0EaXO9Kx7we8aS2zmd7hZl0qOO8\"",
    "mtime": "2024-12-26T05:36:31.741Z",
    "size": 137930,
    "path": "../public/img/testim-img.jpg"
  },
  "/js/isotope.pkgd.min.js": {
    "type": "application/javascript",
    "etag": "\"8a80-FMf1nnPSqZqmiMJEOpqbJKy/9Dw\"",
    "mtime": "2024-12-26T05:36:34.973Z",
    "size": 35456,
    "path": "../public/js/isotope.pkgd.min.js"
  },
  "/js/pace.min.js": {
    "type": "application/javascript",
    "etag": "\"32a6-qq0V7M75KcjP88uOmW/j8PES77I\"",
    "mtime": "2024-12-26T05:36:35.028Z",
    "size": 12966,
    "path": "../public/js/pace.min.js"
  },
  "/js/simpleParallax.min.js": {
    "type": "application/javascript",
    "etag": "\"5a78-q4JbHD4nDbh4mJQ6gcZkJKzMDJ8\"",
    "mtime": "2024-12-26T05:36:35.076Z",
    "size": 23160,
    "path": "../public/js/simpleParallax.min.js"
  },
  "/js/splitting.min.js": {
    "type": "application/javascript",
    "etag": "\"1860-cUU3mz2Ob7hZ6PNNcH6q9oxumO8\"",
    "mtime": "2024-12-26T05:36:35.092Z",
    "size": 6240,
    "path": "../public/js/splitting.min.js"
  },
  "/js/wow.min.js": {
    "type": "application/javascript",
    "etag": "\"3be1-j+4acIGd8Jn6jLgo8t4A1Kt36rM\"",
    "mtime": "2024-12-26T05:36:35.140Z",
    "size": 15329,
    "path": "../public/js/wow.min.js"
  },
  "/_nuxt/1.3c8bb91a.js": {
    "type": "application/javascript",
    "etag": "\"69-cLz5M5HO8NBUvqS5AB0N/YeqF5g\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 105,
    "path": "../public/_nuxt/1.3c8bb91a.js"
  },
  "/_nuxt/2.11d1f82a.js": {
    "type": "application/javascript",
    "etag": "\"a1-uPwHfCEK9BDG+0qqRZeIqzQZSvY\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 161,
    "path": "../public/_nuxt/2.11d1f82a.js"
  },
  "/_nuxt/3.de546cee.js": {
    "type": "application/javascript",
    "etag": "\"66-2MaP4eyNV/hp6knvEkIUAGj52Rg\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 102,
    "path": "../public/_nuxt/3.de546cee.js"
  },
  "/_nuxt/4.d6c498bb.js": {
    "type": "application/javascript",
    "etag": "\"67-XbEPBIIHK+fFLPuMIBs+oFFEQj8\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 103,
    "path": "../public/_nuxt/4.d6c498bb.js"
  },
  "/_nuxt/5.9453341b.js": {
    "type": "application/javascript",
    "etag": "\"1a7-4Jt25UEBN0eGgtoyfRAhe/UD878\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 423,
    "path": "../public/_nuxt/5.9453341b.js"
  },
  "/_nuxt/6.a42241ba.js": {
    "type": "application/javascript",
    "etag": "\"77-rgu6X4IhezLBuUEl1I+A8kOwcKA\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 119,
    "path": "../public/_nuxt/6.a42241ba.js"
  },
  "/_nuxt/about-dark.e1f9cb8b.js": {
    "type": "application/javascript",
    "etag": "\"4d6-bzBeuw0+uJcluXPOoVjVTXkZPKM\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 1238,
    "path": "../public/_nuxt/about-dark.e1f9cb8b.js"
  },
  "/_nuxt/about-light.5eae1396.js": {
    "type": "application/javascript",
    "etag": "\"4e9-d+PtKP9VHOUBdByXCkFTFKDnIJA\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 1257,
    "path": "../public/_nuxt/about-light.5eae1396.js"
  },
  "/_nuxt/AboutUs5.c55fa930.js": {
    "type": "application/javascript",
    "etag": "\"2c98-qCGI+wgtLJxP9sO1ryj61FR9PBU\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 11416,
    "path": "../public/_nuxt/AboutUs5.c55fa930.js"
  },
  "/_nuxt/AboutUs5.c9cdc5c0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"87-oE6w/y7VM2G4+4Qhe2QC2pgF2xs\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 135,
    "path": "../public/_nuxt/AboutUs5.c9cdc5c0.css"
  },
  "/_nuxt/arch-dark.f39c8578.js": {
    "type": "application/javascript",
    "etag": "\"224-t6Qq2zPooR9fW+t5bLrSz9jDGcI\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 548,
    "path": "../public/_nuxt/arch-dark.f39c8578.js"
  },
  "/_nuxt/arch-light.b4dc48c9.js": {
    "type": "application/javascript",
    "etag": "\"222-2iDIQr0GOe8R2DfnQVwh/+TLPVI\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 546,
    "path": "../public/_nuxt/arch-light.b4dc48c9.js"
  },
  "/_nuxt/autoplay.74503cd7.js": {
    "type": "application/javascript",
    "etag": "\"bcc-hOsqOxUSNjaWWUTXHlM/nK+mrd4\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 3020,
    "path": "../public/_nuxt/autoplay.74503cd7.js"
  },
  "/_nuxt/blog-dark.1242bc86.js": {
    "type": "application/javascript",
    "etag": "\"30a-Y88an85soXl0V24/yO2QgeMT53o\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 778,
    "path": "../public/_nuxt/blog-dark.1242bc86.js"
  },
  "/_nuxt/blog-details-dark.2cf5186b.js": {
    "type": "application/javascript",
    "etag": "\"335-mDz0jC7MrkDGv+Q2L6+WoYBP17Y\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 821,
    "path": "../public/_nuxt/blog-details-dark.2cf5186b.js"
  },
  "/_nuxt/blog-details-light.8f14b855.js": {
    "type": "application/javascript",
    "etag": "\"342-GIuv/la+Sj0AamJxYmpmuCoq+9w\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 834,
    "path": "../public/_nuxt/blog-details-light.8f14b855.js"
  },
  "/_nuxt/blog-grid-dark.5d07f143.js": {
    "type": "application/javascript",
    "etag": "\"310-kM4H0Ceq3Mly1ERDsL6radQ+oSc\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 784,
    "path": "../public/_nuxt/blog-grid-dark.5d07f143.js"
  },
  "/_nuxt/blog-grid-light.436a7135.js": {
    "type": "application/javascript",
    "etag": "\"31d-XyxxLxbZvHGU0GfCMq+sqje9gy0\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 797,
    "path": "../public/_nuxt/blog-grid-light.436a7135.js"
  },
  "/_nuxt/blog-light.e18a6718.js": {
    "type": "application/javascript",
    "etag": "\"317-skQAAnFS1zRxVntH2fghRUUPGCY\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 791,
    "path": "../public/_nuxt/blog-light.e18a6718.js"
  },
  "/_nuxt/blog-list-dark.d7efeb21.js": {
    "type": "application/javascript",
    "etag": "\"325-2ZrV8C5TflG+v54ZH/QBovr5qZY\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 805,
    "path": "../public/_nuxt/blog-list-dark.d7efeb21.js"
  },
  "/_nuxt/blog-list-light.83c492fb.js": {
    "type": "application/javascript",
    "etag": "\"332-phtlPY4HD/nlpSUD5z3+el40Bn4\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 818,
    "path": "../public/_nuxt/blog-list-light.83c492fb.js"
  },
  "/_nuxt/BlogDetails.236d57c1.js": {
    "type": "application/javascript",
    "etag": "\"19a7-4IxN9jGcU7upEtqZWVaUz4L95u0\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 6567,
    "path": "../public/_nuxt/BlogDetails.236d57c1.js"
  },
  "/_nuxt/BlogGrid.9ff6b7b1.js": {
    "type": "application/javascript",
    "etag": "\"96a-ypm5hmBlP3ddNcUNWsWnZCJ3jbE\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 2410,
    "path": "../public/_nuxt/BlogGrid.9ff6b7b1.js"
  },
  "/_nuxt/BlogListed.4e72e40c.js": {
    "type": "application/javascript",
    "etag": "\"c56-aQl0+WHXLAQ16sPxqHI9i6CmHnY\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 3158,
    "path": "../public/_nuxt/BlogListed.4e72e40c.js"
  },
  "/_nuxt/Blogs1.787d364c.js": {
    "type": "application/javascript",
    "etag": "\"16fd-DxEQCDVW5XCu70pjBH3E3VTtcvY\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 5885,
    "path": "../public/_nuxt/Blogs1.787d364c.js"
  },
  "/_nuxt/Blogs2.16b1122a.js": {
    "type": "application/javascript",
    "etag": "\"989-Tp55T6TFNg+QqiyAURWvV+KyRGc\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 2441,
    "path": "../public/_nuxt/Blogs2.16b1122a.js"
  },
  "/_nuxt/Blogs3.123cf968.js": {
    "type": "application/javascript",
    "etag": "\"2db1-0RWrBcEFhhuRFoe07XoGhkgG3vA\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 11697,
    "path": "../public/_nuxt/Blogs3.123cf968.js"
  },
  "/_nuxt/Blogs4.2f8c11b8.js": {
    "type": "application/javascript",
    "etag": "\"146d-bRBe2xYUOPjXvPLzTLtVSQzBREU\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 5229,
    "path": "../public/_nuxt/Blogs4.2f8c11b8.js"
  },
  "/_nuxt/BlogStanderd.dc87a562.js": {
    "type": "application/javascript",
    "etag": "\"e67-0B+cjTdxUD3Qolgkw5SUjskfDKU\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 3687,
    "path": "../public/_nuxt/BlogStanderd.dc87a562.js"
  },
  "/_nuxt/CallToAction.9d669679.js": {
    "type": "application/javascript",
    "etag": "\"384-6mbQ1T9T4dZRI7UptJlpmACdTWI\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 900,
    "path": "../public/_nuxt/CallToAction.9d669679.js"
  },
  "/_nuxt/client-only.302d0bc8.js": {
    "type": "application/javascript",
    "etag": "\"1d4-F/vWyY+8oiEOPQvYf2lOGQnli2g\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 468,
    "path": "../public/_nuxt/client-only.302d0bc8.js"
  },
  "/_nuxt/clients.10c578dd.js": {
    "type": "application/javascript",
    "etag": "\"eba-6AXqsg7Fybyc4JB7htve7mqwVRI\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 3770,
    "path": "../public/_nuxt/clients.10c578dd.js"
  },
  "/_nuxt/Clients1.20d9234b.js": {
    "type": "application/javascript",
    "etag": "\"b03a-ep0KPZoco30THUbrXWtoKYxBrWo\"",
    "mtime": "2024-12-26T06:13:20.757Z",
    "size": 45114,
    "path": "../public/_nuxt/Clients1.20d9234b.js"
  },
  "/_nuxt/Clients2.d0cb90e7.js": {
    "type": "application/javascript",
    "etag": "\"c22-+T07C2/ekXX0ywPMTbVa72aPj1c\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 3106,
    "path": "../public/_nuxt/Clients2.d0cb90e7.js"
  },
  "/_nuxt/contact-dark.3ce70b8f.js": {
    "type": "application/javascript",
    "etag": "\"3d1-VBH8MLLM5Wxgzemw6O7pXge59Oc\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 977,
    "path": "../public/_nuxt/contact-dark.3ce70b8f.js"
  },
  "/_nuxt/contact-light.e662680d.js": {
    "type": "application/javascript",
    "etag": "\"3ee-b2vqxs9C43q53smSVSsJUoOFkvM\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 1006,
    "path": "../public/_nuxt/contact-light.e662680d.js"
  },
  "/_nuxt/ContactForm.9c090723.js": {
    "type": "application/javascript",
    "etag": "\"fe8-khhf7XCBwp/UOmbxA1bt4eC2jfw\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 4072,
    "path": "../public/_nuxt/ContactForm.9c090723.js"
  },
  "/_nuxt/ContactFormS.dd0c2548.js": {
    "type": "application/javascript",
    "etag": "\"6df-EKBriWnSMu609HAPRDPvgOCC7jk\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 1759,
    "path": "../public/_nuxt/ContactFormS.dd0c2548.js"
  },
  "/_nuxt/create-element-if-not-defined.20fa6fa2.js": {
    "type": "application/javascript",
    "etag": "\"127-FPOh8XZaU+RG1oirkkeDIGQFz5c\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 295,
    "path": "../public/_nuxt/create-element-if-not-defined.20fa6fa2.js"
  },
  "/_nuxt/dark.84b3a04b.js": {
    "type": "application/javascript",
    "etag": "\"1e1-mXJKuVhJf9ggxFcaO1uAVKDGRac\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 481,
    "path": "../public/_nuxt/dark.84b3a04b.js"
  },
  "/_nuxt/effect-fade.2f69f50f.js": {
    "type": "application/javascript",
    "etag": "\"8b1-EqQB4u7aHE8oQ7+50v3aUgRp8AQ\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 2225,
    "path": "../public/_nuxt/effect-fade.2f69f50f.js"
  },
  "/_nuxt/entry.1ee7db55.js": {
    "type": "application/javascript",
    "etag": "\"30068-60Ei8yZ9i9JA7mLsRdBaZoHD6rI\"",
    "mtime": "2024-12-26T06:13:20.757Z",
    "size": 196712,
    "path": "../public/_nuxt/entry.1ee7db55.js"
  },
  "/_nuxt/error-404.7fc72018.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-iNt1cqPQ0WDudfCTZVQd31BeRGs\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.7fc72018.css"
  },
  "/_nuxt/error-404.a140f58e.js": {
    "type": "application/javascript",
    "etag": "\"8cd-JsNlHsxcXUkeTelXwVSDQ3mElj8\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 2253,
    "path": "../public/_nuxt/error-404.a140f58e.js"
  },
  "/_nuxt/error-500.a39c9dbd.js": {
    "type": "application/javascript",
    "etag": "\"756-3OqVfnY6UOun4QarPbuXqif0mXM\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.a39c9dbd.js"
  },
  "/_nuxt/error-500.c5df6088.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-ByRo+49BgcevWdRjJy3CMx2IA5k\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.c5df6088.css"
  },
  "/_nuxt/fadeWhenScroll.56bb7870.js": {
    "type": "application/javascript",
    "etag": "\"be-2X5RSHuhpotfuvl2faDzSFwh5LA\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 190,
    "path": "../public/_nuxt/fadeWhenScroll.56bb7870.js"
  },
  "/_nuxt/features.2fd8146f.js": {
    "type": "application/javascript",
    "etag": "\"221-q+TiYKwpz7kd6iqzgXqnGnVhPSc\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 545,
    "path": "../public/_nuxt/features.2fd8146f.js"
  },
  "/_nuxt/Footer.6e0449de.js": {
    "type": "application/javascript",
    "etag": "\"1776-/4HMJNRlqJ7SaLP78GJdVdpCPDE\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 6006,
    "path": "../public/_nuxt/Footer.6e0449de.js"
  },
  "/_nuxt/FooterArch.2bd61f8d.js": {
    "type": "application/javascript",
    "etag": "\"6695-RsnjBFNEdMzyr0vQBhL/PGksbdU\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 26261,
    "path": "../public/_nuxt/FooterArch.2bd61f8d.js"
  },
  "/_nuxt/fullScreen.8e32eccc.js": {
    "type": "application/javascript",
    "etag": "\"19b-iE9y5DwA4EUhOqwyIBQtogAA4sA\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 411,
    "path": "../public/_nuxt/fullScreen.8e32eccc.js"
  },
  "/_nuxt/FullscreenCircleSide.dd879160.js": {
    "type": "application/javascript",
    "etag": "\"ab6-tdBNgRglOvmDtsDRKOo3s4HnQio\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 2742,
    "path": "../public/_nuxt/FullscreenCircleSide.dd879160.js"
  },
  "/_nuxt/FullTestimonials.415913c8.js": {
    "type": "application/javascript",
    "etag": "\"e0a-vJyoGD9DIOip3wq7kr/1wSAdoRE\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 3594,
    "path": "../public/_nuxt/FullTestimonials.415913c8.js"
  },
  "/_nuxt/FunFacts1.44376dc4.js": {
    "type": "application/javascript",
    "etag": "\"645-43kQTV+jO8crVOKedau74KRmXsM\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 1605,
    "path": "../public/_nuxt/FunFacts1.44376dc4.js"
  },
  "/_nuxt/getSiblings.287d1b0b.js": {
    "type": "application/javascript",
    "etag": "\"139-f9c2zw3BSxTiw8RB/evADIH2f2w\"",
    "mtime": "2024-12-26T06:13:20.743Z",
    "size": 313,
    "path": "../public/_nuxt/getSiblings.287d1b0b.js"
  },
  "/_nuxt/home1-dark.cbc46cab.js": {
    "type": "application/javascript",
    "etag": "\"5c6-CaeYv/lBmJmcxYJ5Ap7ZPrn3eYI\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 1478,
    "path": "../public/_nuxt/home1-dark.cbc46cab.js"
  },
  "/_nuxt/home1-light.f29c01ef.js": {
    "type": "application/javascript",
    "etag": "\"60a-MfwVYGwvKI/XzV9V9N+8gWNolEc\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 1546,
    "path": "../public/_nuxt/home1-light.f29c01ef.js"
  },
  "/_nuxt/home2-dark.94a21c7b.js": {
    "type": "application/javascript",
    "etag": "\"4d1-XLQUfZip1XvRc3Jc6eBjyIwdGL4\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 1233,
    "path": "../public/_nuxt/home2-dark.94a21c7b.js"
  },
  "/_nuxt/home2-light.c5522f0f.js": {
    "type": "application/javascript",
    "etag": "\"4f3-P+cgfTXk7synh/hAjXwYTgZsLMY\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 1267,
    "path": "../public/_nuxt/home2-light.c5522f0f.js"
  },
  "/_nuxt/home3-dark.1dd5341c.js": {
    "type": "application/javascript",
    "etag": "\"3d3-3fEulToMuOyxLBJedtM0D5eC1z8\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 979,
    "path": "../public/_nuxt/home3-dark.1dd5341c.js"
  },
  "/_nuxt/home3-light.62398abe.js": {
    "type": "application/javascript",
    "etag": "\"3f6-fozmfMpQh4qePu0qGCrLmOPKM30\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 1014,
    "path": "../public/_nuxt/home3-light.62398abe.js"
  },
  "/_nuxt/home4-dark.3e1f63f3.js": {
    "type": "application/javascript",
    "etag": "\"6c0-oUP8BMHmC3WAKG4mKU3VdlNX6OA\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 1728,
    "path": "../public/_nuxt/home4-dark.3e1f63f3.js"
  },
  "/_nuxt/home4-light.928bc351.js": {
    "type": "application/javascript",
    "etag": "\"6c3-Xyd1ry0abxWvvkFbAYVRdxkT5Zk\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 1731,
    "path": "../public/_nuxt/home4-light.928bc351.js"
  },
  "/_nuxt/home5-dark.c9496dd2.js": {
    "type": "application/javascript",
    "etag": "\"4ae-josBporS2LPd5ZzVW4Q+842Zr0A\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 1198,
    "path": "../public/_nuxt/home5-dark.c9496dd2.js"
  },
  "/_nuxt/home5-light.a386bead.js": {
    "type": "application/javascript",
    "etag": "\"4c0-Q49AKT6xJmUNcKL613Q8UXPhBuw\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 1216,
    "path": "../public/_nuxt/home5-light.a386bead.js"
  },
  "/_nuxt/home6-dark.04233b25.js": {
    "type": "application/javascript",
    "etag": "\"62b-Ir9eLTSDFUy9zQKNjjaptiJnDG8\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 1579,
    "path": "../public/_nuxt/home6-dark.04233b25.js"
  },
  "/_nuxt/home6-light.2e720328.js": {
    "type": "application/javascript",
    "etag": "\"62d-1kUFq33s42lFYe/ppYoxK00qCeE\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 1581,
    "path": "../public/_nuxt/home6-light.2e720328.js"
  },
  "/_nuxt/home7-dark.1e9959f5.js": {
    "type": "application/javascript",
    "etag": "\"41a-neHZN3nmtG2CQyAeQ0tALd3Q8OE\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 1050,
    "path": "../public/_nuxt/home7-dark.1e9959f5.js"
  },
  "/_nuxt/home7-light.a2e63fe7.js": {
    "type": "application/javascript",
    "etag": "\"42c-H2HgcFypSiwnTUVAwovxcFooONM\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 1068,
    "path": "../public/_nuxt/home7-light.a2e63fe7.js"
  },
  "/_nuxt/home8-dark.3345f0d8.js": {
    "type": "application/javascript",
    "etag": "\"48d-PoPUvi5H+gDJOMu98kAjPuAUdBY\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 1165,
    "path": "../public/_nuxt/home8-dark.3345f0d8.js"
  },
  "/_nuxt/home8-light.5c3ec05c.js": {
    "type": "application/javascript",
    "etag": "\"48f-biJ3vkT9RGQdSc7J18DNnErnwek\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 1167,
    "path": "../public/_nuxt/home8-light.5c3ec05c.js"
  },
  "/_nuxt/index.024c72b4.js": {
    "type": "application/javascript",
    "etag": "\"bb3-oVNc2fshYZP+83w0dcmB7NbINes\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 2995,
    "path": "../public/_nuxt/index.024c72b4.js"
  },
  "/_nuxt/index.08c97733.js": {
    "type": "application/javascript",
    "etag": "\"a05-hhTrABAAu70mAiK6JvGSWhyk/kQ\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 2565,
    "path": "../public/_nuxt/index.08c97733.js"
  },
  "/_nuxt/index.1e71b6af.js": {
    "type": "application/javascript",
    "etag": "\"553-JovjuhzoEgbjUYYbVQ9WyhddYL8\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 1363,
    "path": "../public/_nuxt/index.1e71b6af.js"
  },
  "/_nuxt/index.2cb2b3ea.js": {
    "type": "application/javascript",
    "etag": "\"b7b-Kc/AoDah8qbG8KIi35BhxDH47nI\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 2939,
    "path": "../public/_nuxt/index.2cb2b3ea.js"
  },
  "/_nuxt/index.2d5ac6f2.js": {
    "type": "application/javascript",
    "etag": "\"591d-G7ZUsM+0Caqdaa1PyzU9vPgizEo\"",
    "mtime": "2024-12-26T06:13:20.757Z",
    "size": 22813,
    "path": "../public/_nuxt/index.2d5ac6f2.js"
  },
  "/_nuxt/index.4243d39c.js": {
    "type": "application/javascript",
    "etag": "\"122a-1FvXKreumBd8nb+1yGx3liQgS+Y\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 4650,
    "path": "../public/_nuxt/index.4243d39c.js"
  },
  "/_nuxt/index.5684304a.js": {
    "type": "application/javascript",
    "etag": "\"1219-PR/rYiHkyGkcCQW7tvrrQtG8RUQ\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 4633,
    "path": "../public/_nuxt/index.5684304a.js"
  },
  "/_nuxt/index.6099f772.js": {
    "type": "application/javascript",
    "etag": "\"2e7-uR9Q4RqTLSgQy7xLcXqEPb6pqoI\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 743,
    "path": "../public/_nuxt/index.6099f772.js"
  },
  "/_nuxt/index.7a0eeda8.js": {
    "type": "application/javascript",
    "etag": "\"4cb2-3/5m0NGfIJVoqZZqiqVWh77QZQM\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 19634,
    "path": "../public/_nuxt/index.7a0eeda8.js"
  },
  "/_nuxt/index.879b3cad.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1291-0B87GCHF0x/19Vwy5BiU4WSGrZA\"",
    "mtime": "2024-12-26T06:13:20.727Z",
    "size": 4753,
    "path": "../public/_nuxt/index.879b3cad.css"
  },
  "/_nuxt/index.87fa8fe0.js": {
    "type": "application/javascript",
    "etag": "\"1280-YJ8rNIlslMPPKpT/e39UOwRVH4U\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 4736,
    "path": "../public/_nuxt/index.87fa8fe0.js"
  },
  "/_nuxt/index.e6316407.js": {
    "type": "application/javascript",
    "etag": "\"1713-yzswzp3wPBavmEI6CeRyLUkZxDI\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 5907,
    "path": "../public/_nuxt/index.e6316407.js"
  },
  "/_nuxt/index.fcb11262.js": {
    "type": "application/javascript",
    "etag": "\"785-y8JT5EAKANgtax1ObjZy3BFg6/g\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 1925,
    "path": "../public/_nuxt/index.fcb11262.js"
  },
  "/_nuxt/initIsotope.f37c57b2.js": {
    "type": "application/javascript",
    "etag": "\"301-/6kDHc11vZFMTSXxclYz89X6UUM\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 769,
    "path": "../public/_nuxt/initIsotope.f37c57b2.js"
  },
  "/_nuxt/light.24123e32.js": {
    "type": "application/javascript",
    "etag": "\"1dd-+wsqaKxJmRlID4kxVeWEDFvakgA\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 477,
    "path": "../public/_nuxt/light.24123e32.js"
  },
  "/_nuxt/Loading.ebf92b90.js": {
    "type": "application/javascript",
    "etag": "\"42b-zVyurlTnKGp40ZJnJGljpaJpnXE\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 1067,
    "path": "../public/_nuxt/Loading.ebf92b90.js"
  },
  "/_nuxt/MinimalArea1.4c1bb379.js": {
    "type": "application/javascript",
    "etag": "\"b5e-XtPr6aP4oQ3TsZ7MxZ5paTvMFMc\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 2910,
    "path": "../public/_nuxt/MinimalArea1.4c1bb379.js"
  },
  "/_nuxt/MinimalArea2.40bb6a0a.js": {
    "type": "application/javascript",
    "etag": "\"2988-kxSxdiXARo326j6PoXoYUj/PQnI\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 10632,
    "path": "../public/_nuxt/MinimalArea2.40bb6a0a.js"
  },
  "/_nuxt/mobile-app-dark.4569ff85.js": {
    "type": "application/javascript",
    "etag": "\"367-4mPgbmvavXl0kgP7bMKURjeG5Cg\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 871,
    "path": "../public/_nuxt/mobile-app-dark.4569ff85.js"
  },
  "/_nuxt/mobile-app-dark.e2fcd025.js": {
    "type": "application/javascript",
    "etag": "\"226-yEKNE0JL001jVQ9CLsi94tKcQAY\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 550,
    "path": "../public/_nuxt/mobile-app-dark.e2fcd025.js"
  },
  "/_nuxt/mobile-app-light.c876f94a.js": {
    "type": "application/javascript",
    "etag": "\"229-VNXD8p0Dt/Ydhy6lygfLFE8wa/o\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 553,
    "path": "../public/_nuxt/mobile-app-light.c876f94a.js"
  },
  "/_nuxt/mobile-app-light.c9738926.js": {
    "type": "application/javascript",
    "etag": "\"387-/zRmI9b2SpawH2G+FGk8VHaXDGY\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 903,
    "path": "../public/_nuxt/mobile-app-light.c9738926.js"
  },
  "/_nuxt/ModalVideo.9e2c2a2f.js": {
    "type": "application/javascript",
    "etag": "\"443-mvPIOpC1J4UUnGJfbyK6vR94PM8\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 1091,
    "path": "../public/_nuxt/ModalVideo.9e2c2a2f.js"
  },
  "/_nuxt/mousewheel.1fb9cff5.js": {
    "type": "application/javascript",
    "etag": "\"1185-0A/RX3UcxzXXTpiea/6XON/aKhs\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 4485,
    "path": "../public/_nuxt/mousewheel.1fb9cff5.js"
  },
  "/_nuxt/NavbarFullMenu.7816eaff.js": {
    "type": "application/javascript",
    "etag": "\"1abc-/W1B/Nu7e5bvVP7jCVBmlD/iFn8\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 6844,
    "path": "../public/_nuxt/NavbarFullMenu.7816eaff.js"
  },
  "/_nuxt/nuxt-link.2048aaa9.js": {
    "type": "application/javascript",
    "etag": "\"1101-u84SgxTHrO7a413eh+twGq2+PPU\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 4353,
    "path": "../public/_nuxt/nuxt-link.2048aaa9.js"
  },
  "/_nuxt/PageHeader.0d71dfdb.js": {
    "type": "application/javascript",
    "etag": "\"1f5-PhxDm1LHJPm5meK8oACFor6+ASw\"",
    "mtime": "2024-12-26T06:13:20.728Z",
    "size": 501,
    "path": "../public/_nuxt/PageHeader.0d71dfdb.js"
  },
  "/_nuxt/pagination.c7e15d91.js": {
    "type": "application/javascript",
    "etag": "\"1d6d-DwA7QB1A5fr5Co4m5WtTag8BL+w\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 7533,
    "path": "../public/_nuxt/pagination.c7e15d91.js"
  },
  "/_nuxt/parallax.2647997b.js": {
    "type": "application/javascript",
    "etag": "\"794-dHTXX5p44MTnf5Yrl60AxPdKV3w\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 1940,
    "path": "../public/_nuxt/parallax.2647997b.js"
  },
  "/_nuxt/particle-config.d9467bdc.js": {
    "type": "application/javascript",
    "etag": "\"116b0-z+obkqWTMPGr4EBlrUsc9xBg62U\"",
    "mtime": "2024-12-26T06:13:20.757Z",
    "size": 71344,
    "path": "../public/_nuxt/particle-config.d9467bdc.js"
  },
  "/_nuxt/portfolio-dark.39bf8ee3.js": {
    "type": "application/javascript",
    "etag": "\"281-fG+XoH8zY51W1QcPmFow0FP0CAg\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 641,
    "path": "../public/_nuxt/portfolio-dark.39bf8ee3.js"
  },
  "/_nuxt/portfolio-light.666f4980.js": {
    "type": "application/javascript",
    "etag": "\"27c-qFcLI5q4qA+21nqAMMwrFnnhDwc\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 636,
    "path": "../public/_nuxt/portfolio-light.666f4980.js"
  },
  "/_nuxt/pricing-plan-dark.a6b054e1.js": {
    "type": "application/javascript",
    "etag": "\"29a-qVhebbpJqek9l0l9nMuPykV9Pbw\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 666,
    "path": "../public/_nuxt/pricing-plan-dark.a6b054e1.js"
  },
  "/_nuxt/pricing-plan-light.1dbb63cd.js": {
    "type": "application/javascript",
    "etag": "\"2ac-fOJRZR2s3jIrOK8z3oz+Nsw/UOM\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 684,
    "path": "../public/_nuxt/pricing-plan-light.1dbb63cd.js"
  },
  "/_nuxt/project-details2-dark.936dd94d.js": {
    "type": "application/javascript",
    "etag": "\"3f1-vabx0VkIS2vAgu0lVUccPBmyBXk\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 1009,
    "path": "../public/_nuxt/project-details2-dark.936dd94d.js"
  },
  "/_nuxt/project-details2-light.92b1896d.js": {
    "type": "application/javascript",
    "etag": "\"3f3-ZTpKsvrIC6sFh113UqefjW5xX6E\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 1011,
    "path": "../public/_nuxt/project-details2-light.92b1896d.js"
  },
  "/_nuxt/project-details2.998c1371.js": {
    "type": "application/javascript",
    "etag": "\"1892-E883vlsESpen9OJq9HV26T+mXOQ\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 6290,
    "path": "../public/_nuxt/project-details2.998c1371.js"
  },
  "/_nuxt/removeSlashpagination.2d3f2e34.js": {
    "type": "application/javascript",
    "etag": "\"c48-oB138Kjgd9IdKwZDTOycYVrRBrs\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 3144,
    "path": "../public/_nuxt/removeSlashpagination.2d3f2e34.js"
  },
  "/_nuxt/ScrollToTop.e0f51134.js": {
    "type": "application/javascript",
    "etag": "\"9b4-cxAE66Jp99FXuM5qEb0dP2G1BeM\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 2484,
    "path": "../public/_nuxt/ScrollToTop.e0f51134.js"
  },
  "/_nuxt/services-dark.2a250b17.js": {
    "type": "application/javascript",
    "etag": "\"2c4-H10D/Piaa/nx2IeEqs7czWI7Z/I\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 708,
    "path": "../public/_nuxt/services-dark.2a250b17.js"
  },
  "/_nuxt/services-light.af5ddb22.js": {
    "type": "application/javascript",
    "etag": "\"2d7-kKlSNm2Eiv6fapB6ECcjq6JTlx0\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 727,
    "path": "../public/_nuxt/services-light.af5ddb22.js"
  },
  "/_nuxt/Services1.ca7d02df.js": {
    "type": "application/javascript",
    "etag": "\"5fe-xCZhXt5V2914+jlGnTNerLX7Gv0\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 1534,
    "path": "../public/_nuxt/Services1.ca7d02df.js"
  },
  "/_nuxt/shop-dark.cb254264.js": {
    "type": "application/javascript",
    "etag": "\"221-MoWS3UuiW1Uq87NS3PtF7u3Ynmc\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 545,
    "path": "../public/_nuxt/shop-dark.cb254264.js"
  },
  "/_nuxt/shop-light.839a1a53.js": {
    "type": "application/javascript",
    "etag": "\"233-3RkQpACkyXBBAhz4r42iA6ETyPI\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 563,
    "path": "../public/_nuxt/shop-light.839a1a53.js"
  },
  "/_nuxt/showcase-dark.dc0a4c75.js": {
    "type": "application/javascript",
    "etag": "\"292-pXfX5pgojeVbRjKHaZ1kcPtCyvs\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 658,
    "path": "../public/_nuxt/showcase-dark.dc0a4c75.js"
  },
  "/_nuxt/showcase-light.a9a49124.js": {
    "type": "application/javascript",
    "etag": "\"2a4-aVPYimNIX2ol1I+dHLuDs5UPczM\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 676,
    "path": "../public/_nuxt/showcase-light.a9a49124.js"
  },
  "/_nuxt/showcase2-dark.0197aade.js": {
    "type": "application/javascript",
    "etag": "\"2f7-0HBxfw8iuT6fDhrlyY6y4pkImqg\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 759,
    "path": "../public/_nuxt/showcase2-dark.0197aade.js"
  },
  "/_nuxt/showcase2-light.f2dd2d7e.js": {
    "type": "application/javascript",
    "etag": "\"309-SaXnj60c9hePnk+ar4/yapGyoe0\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 777,
    "path": "../public/_nuxt/showcase2-light.f2dd2d7e.js"
  },
  "/_nuxt/showcase3-dark.e6f3467c.js": {
    "type": "application/javascript",
    "etag": "\"2cf-UIRlgdnZQTYL03FIWd7swKkTviw\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 719,
    "path": "../public/_nuxt/showcase3-dark.e6f3467c.js"
  },
  "/_nuxt/showcase3-light.f66079da.js": {
    "type": "application/javascript",
    "etag": "\"2e1-chh6BwZYA1blbRn4zdVCQWL+g7I\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 737,
    "path": "../public/_nuxt/showcase3-light.f66079da.js"
  },
  "/_nuxt/ShowcaseFullscreen.94968c1f.js": {
    "type": "application/javascript",
    "etag": "\"a1d-6mFmRK9Q6uyFr27+t0lau5J48/s\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 2589,
    "path": "../public/_nuxt/ShowcaseFullscreen.94968c1f.js"
  },
  "/_nuxt/ShowcaseGrid.82d3b1df.js": {
    "type": "application/javascript",
    "etag": "\"75d-RBc5t2OWV5vomNZw0CQrLfthJuk\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 1885,
    "path": "../public/_nuxt/ShowcaseGrid.82d3b1df.js"
  },
  "/_nuxt/SliderHeader.84c062b9.js": {
    "type": "application/javascript",
    "etag": "\"b64-wfL/3Mu/rrQiiVyjAlIs0dLhl2g\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 2916,
    "path": "../public/_nuxt/SliderHeader.84c062b9.js"
  },
  "/_nuxt/swiper-slide.4154dbd7.js": {
    "type": "application/javascript",
    "etag": "\"14257-5As81kAXcRB8AQ4b5ioVtcVEzPs\"",
    "mtime": "2024-12-26T06:13:20.757Z",
    "size": 82519,
    "path": "../public/_nuxt/swiper-slide.4154dbd7.js"
  },
  "/_nuxt/Team1.45fad114.js": {
    "type": "application/javascript",
    "etag": "\"a80-lpFgbPAV0hfsJWixmFiPU2fnnwo\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 2688,
    "path": "../public/_nuxt/Team1.45fad114.js"
  },
  "/_nuxt/Team2.4c7be7e4.js": {
    "type": "application/javascript",
    "etag": "\"1910-aCYeEaCyxPIhKCmpwUqp0eEUWK0\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 6416,
    "path": "../public/_nuxt/Team2.4c7be7e4.js"
  },
  "/_nuxt/thumparallaxDown.d1604dcd.js": {
    "type": "application/javascript",
    "etag": "\"f2-kW1nDHP8gME7UAp+jGHbIBtKfnQ\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 242,
    "path": "../public/_nuxt/thumparallaxDown.d1604dcd.js"
  },
  "/_nuxt/tooltipEffect.6d031fd8.js": {
    "type": "application/javascript",
    "etag": "\"53c-9fnPG5orMIOVE6Qkww74v+EqpnU\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 1340,
    "path": "../public/_nuxt/tooltipEffect.6d031fd8.js"
  },
  "/_nuxt/vue3-count-to.esm.41846052.js": {
    "type": "application/javascript",
    "etag": "\"1018-zQPi2OI+c4mrIG+iqcfjbqTeHKY\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 4120,
    "path": "../public/_nuxt/vue3-count-to.esm.41846052.js"
  },
  "/_nuxt/works-dark.e14d0e4a.js": {
    "type": "application/javascript",
    "etag": "\"30e-47yFq5q/jpS3j95ZEGkllPUCh+w\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 782,
    "path": "../public/_nuxt/works-dark.e14d0e4a.js"
  },
  "/_nuxt/works-light.80475e68.js": {
    "type": "application/javascript",
    "etag": "\"340-BVaUSj+oQlmuBxdMxzhblfiH7jE\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 832,
    "path": "../public/_nuxt/works-light.80475e68.js"
  },
  "/_nuxt/works2-dark.50805607.js": {
    "type": "application/javascript",
    "etag": "\"350-eOsbGCUKInDW+EHybDvONN+hF2o\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 848,
    "path": "../public/_nuxt/works2-dark.50805607.js"
  },
  "/_nuxt/works2-light.b97266dc.js": {
    "type": "application/javascript",
    "etag": "\"364-UO7PFpVFovCiWAC3pmVf75UixuI\"",
    "mtime": "2024-12-26T06:13:20.734Z",
    "size": 868,
    "path": "../public/_nuxt/works2-light.b97266dc.js"
  },
  "/_nuxt/works3-dark.35a6b0ec.js": {
    "type": "application/javascript",
    "etag": "\"360-yq8soqLe22R/AAsvbPNXi2vKVTc\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 864,
    "path": "../public/_nuxt/works3-dark.35a6b0ec.js"
  },
  "/_nuxt/works3-light.2af1c5e6.js": {
    "type": "application/javascript",
    "etag": "\"372-B1y6XbQU/QriQ+M0EPNni6lHwUY\"",
    "mtime": "2024-12-26T06:13:20.737Z",
    "size": 882,
    "path": "../public/_nuxt/works3-light.2af1c5e6.js"
  },
  "/_nuxt/Works4.1648faf1.js": {
    "type": "application/javascript",
    "etag": "\"1313-cD57R7WENaE6rDF51be/seqQnB4\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 4883,
    "path": "../public/_nuxt/Works4.1648faf1.js"
  },
  "/_nuxt/WorksHeader.6772bccb.js": {
    "type": "application/javascript",
    "etag": "\"34b-qHooSPVzMJjOOYdyJtrAMC1rSJk\"",
    "mtime": "2024-12-26T06:13:20.741Z",
    "size": 843,
    "path": "../public/_nuxt/WorksHeader.6772bccb.js"
  },
  "/_nuxt/WorksStyle1.f2df365f.js": {
    "type": "application/javascript",
    "etag": "\"c4e-9TMFiwb9wSSmhe5UE9aNYDlAAbg\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 3150,
    "path": "../public/_nuxt/WorksStyle1.f2df365f.js"
  },
  "/_nuxt/WorksStyle2.c9d4b375.js": {
    "type": "application/javascript",
    "etag": "\"1169-dA6q8PH5n2yOEA2AcuubWnaBVRo\"",
    "mtime": "2024-12-26T06:13:20.745Z",
    "size": 4457,
    "path": "../public/_nuxt/WorksStyle2.c9d4b375.js"
  },
  "/assets/css/animate.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"fb9b-wC3hUaJZSfGSmQ4q+XU2n810LhA\"",
    "mtime": "2024-12-26T05:36:29.518Z",
    "size": 64411,
    "path": "../public/assets/css/animate.css"
  },
  "/assets/css/arch-skin-dark.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"683-Ygf/wkSy5ZYp7SRBB3gPAjiqMRE\"",
    "mtime": "2024-12-26T05:36:29.546Z",
    "size": 1667,
    "path": "../public/assets/css/arch-skin-dark.css"
  },
  "/assets/css/arch-skin-light.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"76b-PfIPYoIZAOJUom5osTPf3G0/xlo\"",
    "mtime": "2024-12-26T05:36:29.578Z",
    "size": 1899,
    "path": "../public/assets/css/arch-skin-light.css"
  },
  "/assets/css/bootstrap.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2e311-U+1vBihjCux/SBKiF9bOZzhYeoA\"",
    "mtime": "2024-12-26T05:36:29.610Z",
    "size": 189201,
    "path": "../public/assets/css/bootstrap.min.css"
  },
  "/assets/css/dark.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"29ddb-qUkZseYlRzNk/bmaKd8NVksntvk\"",
    "mtime": "2024-12-26T05:36:29.642Z",
    "size": 171483,
    "path": "../public/assets/css/dark.css"
  },
  "/assets/css/font-awesome.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e6c9-sFjgTUJytFHNFvXee4VEKqgQCX0\"",
    "mtime": "2024-12-26T05:36:29.675Z",
    "size": 59081,
    "path": "../public/assets/css/font-awesome.min.css"
  },
  "/assets/css/globals.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"453-bq9dkG44aqP90ClxVSnCP5pF3dM\"",
    "mtime": "2024-12-26T05:36:29.705Z",
    "size": 1107,
    "path": "../public/assets/css/globals.css"
  },
  "/assets/css/ionicons.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c7fd-3Kpn5seSGvAUtSLGlpqaYdyiKVo\"",
    "mtime": "2024-12-26T05:36:29.728Z",
    "size": 51197,
    "path": "../public/assets/css/ionicons.min.css"
  },
  "/assets/css/light.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"29cd7-LFj2YoJa9Fj0hJNNwqQz/2rTYvw\"",
    "mtime": "2024-12-26T05:36:29.760Z",
    "size": 171223,
    "path": "../public/assets/css/light.css"
  },
  "/assets/css/mobile-app-dark.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7c46-j5WuSAzdbuJd2zVfbeJjRYCF3dw\"",
    "mtime": "2024-12-26T05:36:29.792Z",
    "size": 31814,
    "path": "../public/assets/css/mobile-app-dark.css"
  },
  "/assets/css/mobile-app-light.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7cb1-0j3MnRI1oOIpMIpJwMomV2I157A\"",
    "mtime": "2024-12-26T05:36:29.829Z",
    "size": 31921,
    "path": "../public/assets/css/mobile-app-light.css"
  },
  "/assets/css/pe-icon.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2883-xlXaHUKljvolHN1Ncr2QBtxBP1k\"",
    "mtime": "2024-12-26T05:36:29.856Z",
    "size": 10371,
    "path": "../public/assets/css/pe-icon.min.css"
  },
  "/assets/fonts/fa-brands-400.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"1813c-gPivhDvkTX6cgEJ1cgZZGoEDTOs\"",
    "mtime": "2024-12-26T05:36:29.887Z",
    "size": 98620,
    "path": "../public/assets/fonts/fa-brands-400.eot"
  },
  "/assets/fonts/fa-brands-400.ttf": {
    "type": "font/ttf",
    "etag": "\"18050-UtM0E58YocUFNr9ePtGZPkUha24\"",
    "mtime": "2024-12-26T05:36:29.919Z",
    "size": 98384,
    "path": "../public/assets/fonts/fa-brands-400.ttf"
  },
  "/assets/fonts/fa-brands-400.woff": {
    "type": "font/woff",
    "etag": "\"f8e0-DUSBI+DUop3flglCaeulLrrpcqo\"",
    "mtime": "2024-12-26T05:36:29.935Z",
    "size": 63712,
    "path": "../public/assets/fonts/fa-brands-400.woff"
  },
  "/assets/fonts/fa-brands-400.woff2": {
    "type": "font/woff2",
    "etag": "\"d494-stoYnXIkpzpbfQ5NFKKWxVFcHAo\"",
    "mtime": "2024-12-26T05:36:29.966Z",
    "size": 54420,
    "path": "../public/assets/fonts/fa-brands-400.woff2"
  },
  "/assets/fonts/fa-regular-400.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"79b4-44lxjfPMIhzGLds0Z1AB+E6oDOE\"",
    "mtime": "2024-12-26T05:36:29.998Z",
    "size": 31156,
    "path": "../public/assets/fonts/fa-regular-400.eot"
  },
  "/assets/fonts/fa-regular-400.ttf": {
    "type": "font/ttf",
    "etag": "\"78d0-i0lNOh4SoZzA1N5PDeBHW2MGsnk\"",
    "mtime": "2024-12-26T05:36:30.029Z",
    "size": 30928,
    "path": "../public/assets/fonts/fa-regular-400.ttf"
  },
  "/assets/fonts/fa-regular-400.woff": {
    "type": "font/woff",
    "etag": "\"3978-RIhK6iLJFzjG3QRuiiaKcMzYidM\"",
    "mtime": "2024-12-26T05:36:30.062Z",
    "size": 14712,
    "path": "../public/assets/fonts/fa-regular-400.woff"
  },
  "/assets/fonts/fa-regular-400.woff2": {
    "type": "font/woff2",
    "etag": "\"2fbc-kv99RiQhxacFINP+FAPlel0ESzQ\"",
    "mtime": "2024-12-26T05:36:30.077Z",
    "size": 12220,
    "path": "../public/assets/fonts/fa-regular-400.woff2"
  },
  "/assets/fonts/fa-solid-900.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"18f08-8DzYU+K2n7I3KbeoBljWqer8MlA\"",
    "mtime": "2024-12-26T05:36:30.109Z",
    "size": 102152,
    "path": "../public/assets/fonts/fa-solid-900.eot"
  },
  "/assets/fonts/fa-solid-900.ttf": {
    "type": "font/ttf",
    "etag": "\"18e2c-yP4bkVt3QRJ6WeJpeAiVowO8My4\"",
    "mtime": "2024-12-26T05:36:30.141Z",
    "size": 101932,
    "path": "../public/assets/fonts/fa-solid-900.ttf"
  },
  "/assets/fonts/fa-solid-900.woff": {
    "type": "font/woff",
    "etag": "\"be40-Eb/b/cWYrCrfLP7WnOShM9u79FA\"",
    "mtime": "2024-12-26T05:36:30.173Z",
    "size": 48704,
    "path": "../public/assets/fonts/fa-solid-900.woff"
  },
  "/assets/fonts/fa-solid-900.woff2": {
    "type": "font/woff2",
    "etag": "\"9780-0o1yIry+uOpwGncehffv4AbmL7E\"",
    "mtime": "2024-12-26T05:36:30.205Z",
    "size": 38784,
    "path": "../public/assets/fonts/fa-solid-900.woff2"
  },
  "/assets/fonts/fontawesome-webfont.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"2876e-2YDCzoc9xDr0YNTVctRBMESZ9AA\"",
    "mtime": "2024-12-26T05:36:30.261Z",
    "size": 165742,
    "path": "../public/assets/fonts/fontawesome-webfont.eot"
  },
  "/assets/fonts/fontawesome-webfont.ttf": {
    "type": "font/ttf",
    "etag": "\"286ac-E7HqtlqYPHpzvHmXxHnWaUP3xss\"",
    "mtime": "2024-12-26T05:36:30.293Z",
    "size": 165548,
    "path": "../public/assets/fonts/fontawesome-webfont.ttf"
  },
  "/assets/fonts/fontawesome-webfont.woff": {
    "type": "font/woff",
    "etag": "\"17ee8-KLeCJAs+dtuCThLAJ1SpcxoWdSc\"",
    "mtime": "2024-12-26T05:36:30.325Z",
    "size": 98024,
    "path": "../public/assets/fonts/fontawesome-webfont.woff"
  },
  "/assets/fonts/fontawesome-webfont.woff2": {
    "type": "font/woff2",
    "etag": "\"12d68-1vSMun0Hb7by/Wupk6dbncHsvww\"",
    "mtime": "2024-12-26T05:36:30.340Z",
    "size": 77160,
    "path": "../public/assets/fonts/fontawesome-webfont.woff2"
  },
  "/assets/fonts/FontAwesome.otf": {
    "type": "font/otf",
    "etag": "\"20e98-BIcHvFKsS2VjqqODv+hmCg3ckIw\"",
    "mtime": "2024-12-26T05:36:30.238Z",
    "size": 134808,
    "path": "../public/assets/fonts/FontAwesome.otf"
  },
  "/assets/fonts/ionicons.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"1d794-YVMuieIS+N0WujHz6881wKczQDU\"",
    "mtime": "2024-12-26T05:36:30.372Z",
    "size": 120724,
    "path": "../public/assets/fonts/ionicons.eot"
  },
  "/assets/fonts/ionicons.ttf": {
    "type": "font/ttf",
    "etag": "\"2e05c-GwoN4ISQWUaiAwDKjDVIZd7EZ2Q\"",
    "mtime": "2024-12-26T05:36:30.404Z",
    "size": 188508,
    "path": "../public/assets/fonts/ionicons.ttf"
  },
  "/assets/fonts/ionicons.woff": {
    "type": "font/woff",
    "etag": "\"10940-5GgZ6GOkZ1HWIsEZDE6Kg+vCBhI\"",
    "mtime": "2024-12-26T05:36:30.435Z",
    "size": 67904,
    "path": "../public/assets/fonts/ionicons.woff"
  },
  "/assets/fonts/Pe-icon-7-stroke.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"e538-bAn5sBovip1nIpKy1B2U5jnq8T0\"",
    "mtime": "2024-12-26T05:36:30.468Z",
    "size": 58680,
    "path": "../public/assets/fonts/Pe-icon-7-stroke.eot"
  },
  "/assets/fonts/Pe-icon-7-stroke.ttf": {
    "type": "font/ttf",
    "etag": "\"e470-6NIauRh38AQvvutyvq9xymWVueg\"",
    "mtime": "2024-12-26T05:36:30.484Z",
    "size": 58480,
    "path": "../public/assets/fonts/Pe-icon-7-stroke.ttf"
  },
  "/assets/fonts/Pe-icon-7-stroke.woff": {
    "type": "font/woff",
    "etag": "\"e4bc-flRLsRt2VZmNtvMkxhL3/78Ktm4\"",
    "mtime": "2024-12-26T05:36:30.515Z",
    "size": 58556,
    "path": "../public/assets/fonts/Pe-icon-7-stroke.woff"
  },
  "/mobile-app/img/bg-vid.jpg": {
    "type": "image/jpeg",
    "etag": "\"57c73-6PDDdIqprV24QSPnjazhBkZr6yw\"",
    "mtime": "2024-12-26T05:36:35.171Z",
    "size": 359539,
    "path": "../public/mobile-app/img/bg-vid.jpg"
  },
  "/mobile-app/img/call-img.png": {
    "type": "image/png",
    "etag": "\"429ca-46fV/XqqEtUNnebILuyFkCaaYy4\"",
    "mtime": "2024-12-26T05:36:35.203Z",
    "size": 272842,
    "path": "../public/mobile-app/img/call-img.png"
  },
  "/mobile-app/img/header-img.png": {
    "type": "image/png",
    "etag": "\"6f3be-NtKaGdT6wfNpNmS530PkOv404XE\"",
    "mtime": "2024-12-26T05:36:35.219Z",
    "size": 455614,
    "path": "../public/mobile-app/img/header-img.png"
  },
  "/mobile-app/img/logo-dark.png": {
    "type": "image/png",
    "etag": "\"363-cfjLcHk64ComP3ZUGOQEYubj0W0\"",
    "mtime": "2024-12-26T05:36:35.250Z",
    "size": 867,
    "path": "../public/mobile-app/img/logo-dark.png"
  },
  "/mobile-app/img/logo-gr.png": {
    "type": "image/png",
    "etag": "\"4ae-CWDRHPhNf2gh7lHIXHAb6ZICtGY\"",
    "mtime": "2024-12-26T05:36:35.266Z",
    "size": 1198,
    "path": "../public/mobile-app/img/logo-gr.png"
  },
  "/mobile-app/img/logo-light.png": {
    "type": "image/png",
    "etag": "\"3e8-+CYPvKCxQVKSW2FkmpvWn+SaTpY\"",
    "mtime": "2024-12-26T05:36:35.298Z",
    "size": 1000,
    "path": "../public/mobile-app/img/logo-light.png"
  },
  "/mobile-app/img/p1.jpg": {
    "type": "image/jpeg",
    "etag": "\"217cb-KYCsJ9NcyvicjV8S34NhjqfmaCs\"",
    "mtime": "2024-12-26T05:36:35.314Z",
    "size": 137163,
    "path": "../public/mobile-app/img/p1.jpg"
  },
  "/mobile-app/img/qoute.png": {
    "type": "image/png",
    "etag": "\"ff10-aD1pYSrtIoXwVcUgH0iKpg+QX7E\"",
    "mtime": "2024-12-26T05:36:35.330Z",
    "size": 65296,
    "path": "../public/mobile-app/img/qoute.png"
  },
  "/img/arch/hero.jpg": {
    "type": "image/jpeg",
    "etag": "\"b1699-76TTKoP9Wo5//DqsCegcrAcmQtc\"",
    "mtime": "2024-12-26T05:36:31.773Z",
    "size": 726681,
    "path": "../public/img/arch/hero.jpg"
  },
  "/img/arch/s1.jpg": {
    "type": "image/jpeg",
    "etag": "\"13fcb-SK7C8PqZCvexjE64OIil4MOxw74\"",
    "mtime": "2024-12-26T05:36:31.799Z",
    "size": 81867,
    "path": "../public/img/arch/s1.jpg"
  },
  "/img/arch/s2.jpg": {
    "type": "image/jpeg",
    "etag": "\"21edc-4XRKIrjA0qRm2BI/w3JwnGVWxC4\"",
    "mtime": "2024-12-26T05:36:31.821Z",
    "size": 138972,
    "path": "../public/img/arch/s2.jpg"
  },
  "/img/arch/s3.jpg": {
    "type": "image/jpeg",
    "etag": "\"1879a-UeerioQ/JxAm9Kn+alcMP6HcfnA\"",
    "mtime": "2024-12-26T05:36:31.845Z",
    "size": 100250,
    "path": "../public/img/arch/s3.jpg"
  },
  "/img/arch/s4.jpg": {
    "type": "image/jpeg",
    "etag": "\"10727-FZ8OHIt4yHfE9Zvqeyv6OR/L8eE\"",
    "mtime": "2024-12-26T05:36:31.861Z",
    "size": 67367,
    "path": "../public/img/arch/s4.jpg"
  },
  "/img/arch/s5.jpg": {
    "type": "image/jpeg",
    "etag": "\"2506b-a4Ts1gqG79D17Ting89u0qP2ZOw\"",
    "mtime": "2024-12-26T05:36:31.880Z",
    "size": 151659,
    "path": "../public/img/arch/s5.jpg"
  },
  "/img/blog/01.jpg": {
    "type": "image/jpeg",
    "etag": "\"200c6-PvqiwyRlfjCZsa2NFlEm10uA1NE\"",
    "mtime": "2024-12-26T05:36:32.196Z",
    "size": 131270,
    "path": "../public/img/blog/01.jpg"
  },
  "/img/blog/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"23f14-kRxK9SIV6X304Z6uzqr5yPAdB8I\"",
    "mtime": "2024-12-26T05:36:32.210Z",
    "size": 147220,
    "path": "../public/img/blog/1.jpg"
  },
  "/img/blog/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a437-JyvG9sk4H/+T+5ha8/pluP5S+aE\"",
    "mtime": "2024-12-26T05:36:32.242Z",
    "size": 107575,
    "path": "../public/img/blog/2.jpg"
  },
  "/img/blog/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"3390c-A4vbkXlacBqwVbqsVNt26jhCWPE\"",
    "mtime": "2024-12-26T05:36:32.274Z",
    "size": 211212,
    "path": "../public/img/blog/3.jpg"
  },
  "/img/blog/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"3e4b3-jRvOhTFMMnyuhH1/G3G+hcRMADQ\"",
    "mtime": "2024-12-26T05:36:32.292Z",
    "size": 255155,
    "path": "../public/img/blog/4.jpg"
  },
  "/img/blog/b1.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ced6-KqBZzWoBkz2FjU5x/O9xSF6M9i4\"",
    "mtime": "2024-12-26T05:36:32.323Z",
    "size": 184022,
    "path": "../public/img/blog/b1.jpg"
  },
  "/img/blog/b2.jpg": {
    "type": "image/jpeg",
    "etag": "\"2809e-uL9cpp04we/mJyfSyTh5nUlmHYQ\"",
    "mtime": "2024-12-26T05:36:32.347Z",
    "size": 163998,
    "path": "../public/img/blog/b2.jpg"
  },
  "/img/blog/b3.jpg": {
    "type": "image/jpeg",
    "etag": "\"24704-R+P+d3F6s1+ggqQlffEf4Nd0Dz4\"",
    "mtime": "2024-12-26T05:36:32.370Z",
    "size": 149252,
    "path": "../public/img/blog/b3.jpg"
  },
  "/img/blog/b4.jpg": {
    "type": "image/jpeg",
    "etag": "\"2cb44-1FkQ0YjPdLFyPNJtHpZ2ibrm9Lk\"",
    "mtime": "2024-12-26T05:36:32.394Z",
    "size": 183108,
    "path": "../public/img/blog/b4.jpg"
  },
  "/img/blog/l1.jpg": {
    "type": "image/jpeg",
    "etag": "\"bc2e-SmzCY36nSI/9L/5S/nrQPl21tls\"",
    "mtime": "2024-12-26T05:36:32.410Z",
    "size": 48174,
    "path": "../public/img/blog/l1.jpg"
  },
  "/img/blog/l2.jpg": {
    "type": "image/jpeg",
    "etag": "\"c4fc-lP7ywsntbM2bQXssypuM68uq6mE\"",
    "mtime": "2024-12-26T05:36:32.438Z",
    "size": 50428,
    "path": "../public/img/blog/l2.jpg"
  },
  "/img/blog/l3.jpg": {
    "type": "image/jpeg",
    "etag": "\"c906-DOKzswggJTURV23zA2jGXs6qtYg\"",
    "mtime": "2024-12-26T05:36:32.461Z",
    "size": 51462,
    "path": "../public/img/blog/l3.jpg"
  },
  "/img/blog/single.jpg": {
    "type": "image/jpeg",
    "etag": "\"4fc1f-gQDpkK/tqQpAONVSL9is63R8u7U\"",
    "mtime": "2024-12-26T05:36:32.487Z",
    "size": 326687,
    "path": "../public/img/blog/single.jpg"
  },
  "/img/clients/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"200c6-PvqiwyRlfjCZsa2NFlEm10uA1NE\"",
    "mtime": "2024-12-26T05:36:32.505Z",
    "size": 131270,
    "path": "../public/img/clients/1.jpg"
  },
  "/img/clients/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"14fce-H1k4B7v3xhv7oJEiGho4lyT9fGg\"",
    "mtime": "2024-12-26T05:36:32.537Z",
    "size": 85966,
    "path": "../public/img/clients/2.jpg"
  },
  "/img/clients/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a68f-vP00+cfIOxAYsFfsIjf7jquFJsQ\"",
    "mtime": "2024-12-26T05:36:32.561Z",
    "size": 108175,
    "path": "../public/img/clients/3.jpg"
  },
  "/img/clients/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"10972-WkRz80awi2Ogxyf4SvmmNOoeNwo\"",
    "mtime": "2024-12-26T05:36:32.583Z",
    "size": 67954,
    "path": "../public/img/clients/4.jpg"
  },
  "/img/clients/quote.svg": {
    "type": "image/svg+xml",
    "etag": "\"aa0-If31m1qJEjqfiH8EyoV5a8JBsZs\"",
    "mtime": "2024-12-26T05:36:32.613Z",
    "size": 2720,
    "path": "../public/img/clients/quote.svg"
  },
  "/img/insta/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"a386-Ozp35PC/BLAXUDVinZAx6xyMssY\"",
    "mtime": "2024-12-26T05:36:32.991Z",
    "size": 41862,
    "path": "../public/img/insta/1.jpg"
  },
  "/img/insta/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"7e04-nFaCyzE6fHpn+iR6pSlBPC1QgcY\"",
    "mtime": "2024-12-26T05:36:33.022Z",
    "size": 32260,
    "path": "../public/img/insta/2.jpg"
  },
  "/img/insta/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"8968-Ac5yJ1aOHK+CWAp50e2QjJbmOcI\"",
    "mtime": "2024-12-26T05:36:33.038Z",
    "size": 35176,
    "path": "../public/img/insta/3.jpg"
  },
  "/img/intro/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"9e0d-iB73ndGoxYLfXfmVO7s11x5Fw/o\"",
    "mtime": "2024-12-26T05:36:33.069Z",
    "size": 40461,
    "path": "../public/img/intro/1.jpg"
  },
  "/img/intro/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"14a6e-0JreNq57OAFbJ0QMNVUxDx4hZCk\"",
    "mtime": "2024-12-26T05:36:33.085Z",
    "size": 84590,
    "path": "../public/img/intro/2.jpg"
  },
  "/img/intro/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"ec46-HR4KZbMtesrlUiVrWtQQHFS6q4k\"",
    "mtime": "2024-12-26T05:36:33.117Z",
    "size": 60486,
    "path": "../public/img/intro/3.jpg"
  },
  "/img/intro/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"8e302-RL/W1RMsE6Pls0HlM9Leb55i0Yc\"",
    "mtime": "2024-12-26T05:36:33.149Z",
    "size": 582402,
    "path": "../public/img/intro/4.jpg"
  },
  "/img/portfolio/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"105b2-QHok37bu1OyBUwbWOz68vdjIDng\"",
    "mtime": "2024-12-26T05:36:33.165Z",
    "size": 66994,
    "path": "../public/img/portfolio/1.jpg"
  },
  "/img/portfolio/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"1bc47-cuiOVLb+k8lwP+NTCr4+CnG42KI\"",
    "mtime": "2024-12-26T05:36:33.198Z",
    "size": 113735,
    "path": "../public/img/portfolio/2.jpg"
  },
  "/img/portfolio/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"c3d7-iibPEwKW0JPBUJR5/KFmAv6R3zg\"",
    "mtime": "2024-12-26T05:36:33.212Z",
    "size": 50135,
    "path": "../public/img/portfolio/3.jpg"
  },
  "/img/portfolio/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"73a7-ZSYwdB5+2JkSGU6qSs7u16P+H3Y\"",
    "mtime": "2024-12-26T05:36:33.243Z",
    "size": 29607,
    "path": "../public/img/portfolio/4.jpg"
  },
  "/img/portfolio/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"164be-J38ebgJqdwfgzxBYeTyN+fF+YKI\"",
    "mtime": "2024-12-26T05:36:33.259Z",
    "size": 91326,
    "path": "../public/img/portfolio/5.jpg"
  },
  "/img/portfolio/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"25458-8y0fJGXYHAXw0HVI35Q+Wue6ekk\"",
    "mtime": "2024-12-26T05:36:33.291Z",
    "size": 152664,
    "path": "../public/img/portfolio/6.jpg"
  },
  "/img/portfolio/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"15848-+gonLYZfk/w+yIb3Sey627okPsM\"",
    "mtime": "2024-12-26T05:36:33.306Z",
    "size": 88136,
    "path": "../public/img/portfolio/7.jpg"
  },
  "/img/slid/001.jpg": {
    "type": "image/jpeg",
    "etag": "\"17735-r1YGlfSocagniTRK6HSEixAwnlg\"",
    "mtime": "2024-12-26T05:36:34.605Z",
    "size": 96053,
    "path": "../public/img/slid/001.jpg"
  },
  "/img/slid/002.jpg": {
    "type": "image/jpeg",
    "etag": "\"14ca4-uMbjtq8tgI+nOVyeZ1uHnOfWrs4\"",
    "mtime": "2024-12-26T05:36:34.621Z",
    "size": 85156,
    "path": "../public/img/slid/002.jpg"
  },
  "/img/slid/01.jpg": {
    "type": "image/jpeg",
    "etag": "\"2297f-/HBdiI0yBHk/Di9uhC9B2+r1GDk\"",
    "mtime": "2024-12-26T05:36:34.637Z",
    "size": 141695,
    "path": "../public/img/slid/01.jpg"
  },
  "/img/slid/02.jpg": {
    "type": "image/jpeg",
    "etag": "\"25d34-7J9l3W4ERS0OVRCkcRPC82jVlrw\"",
    "mtime": "2024-12-26T05:36:34.669Z",
    "size": 154932,
    "path": "../public/img/slid/02.jpg"
  },
  "/img/slid/03.jpg": {
    "type": "image/jpeg",
    "etag": "\"3543c-IafMGt92AqyeZ/QSPu5PQkA8RMQ\"",
    "mtime": "2024-12-26T05:36:34.700Z",
    "size": 218172,
    "path": "../public/img/slid/03.jpg"
  },
  "/img/slid/about.jpg": {
    "type": "image/jpeg",
    "etag": "\"1937d-YG3gBErrUhu1Sj5Sl4XBEdhwUqQ\"",
    "mtime": "2024-12-26T05:36:34.716Z",
    "size": 103293,
    "path": "../public/img/slid/about.jpg"
  },
  "/mobile-app/img/app-img/s1-light.png": {
    "type": "image/png",
    "etag": "\"2542e-lN2QyB/KHCTELAtjl3tISeA5pIM\"",
    "mtime": "2024-12-26T05:36:35.393Z",
    "size": 152622,
    "path": "../public/mobile-app/img/app-img/s1-light.png"
  },
  "/mobile-app/img/app-img/s1.png": {
    "type": "image/png",
    "etag": "\"14366-0dnar4nctcKDQFzgpyAmiKY5Zi0\"",
    "mtime": "2024-12-26T05:36:35.362Z",
    "size": 82790,
    "path": "../public/mobile-app/img/app-img/s1.png"
  },
  "/mobile-app/img/app-img/s2-light.png": {
    "type": "image/png",
    "etag": "\"1eb96-9/WbXzi4wxDexVr8U9ZRSWEfJEI\"",
    "mtime": "2024-12-26T05:36:35.425Z",
    "size": 125846,
    "path": "../public/mobile-app/img/app-img/s2-light.png"
  },
  "/mobile-app/img/app-img/s2.png": {
    "type": "image/png",
    "etag": "\"13798-X4D8i7vzzlvfsM09lPMpqj/Ketk\"",
    "mtime": "2024-12-26T05:36:35.409Z",
    "size": 79768,
    "path": "../public/mobile-app/img/app-img/s2.png"
  },
  "/img/team/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"7d9e-a6EQpyvJxKfpBenutIY21dKUN4c\"",
    "mtime": "2024-12-26T05:36:34.748Z",
    "size": 32158,
    "path": "../public/img/team/1.jpg"
  },
  "/img/team/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"9207-ENHB6F+MoHuChzuIwT8JD4z20Qw\"",
    "mtime": "2024-12-26T05:36:34.764Z",
    "size": 37383,
    "path": "../public/img/team/2.jpg"
  },
  "/img/team/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"8804-HdBYpndRn3Y2lvVvIfGdXhqZLDk\"",
    "mtime": "2024-12-26T05:36:34.795Z",
    "size": 34820,
    "path": "../public/img/team/3.jpg"
  },
  "/img/team/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"b788-kJ9pSOIW5K+FzRPreKJGKKn3lvU\"",
    "mtime": "2024-12-26T05:36:34.812Z",
    "size": 46984,
    "path": "../public/img/team/4.jpg"
  },
  "/img/team/a1.jpg": {
    "type": "image/jpeg",
    "etag": "\"118e6-g2raxWFZtj35agWoDpTcIVpIVZU\"",
    "mtime": "2024-12-26T05:36:34.828Z",
    "size": 71910,
    "path": "../public/img/team/a1.jpg"
  },
  "/img/team/a2.jpg": {
    "type": "image/jpeg",
    "etag": "\"14242-GZVrTWv4TKG+I+8KT0vPRzM/dGo\"",
    "mtime": "2024-12-26T05:36:34.859Z",
    "size": 82498,
    "path": "../public/img/team/a2.jpg"
  },
  "/img/team/a3.jpg": {
    "type": "image/jpeg",
    "etag": "\"13624-oAiar0loSArW6h/GnJXvbMIUS/8\"",
    "mtime": "2024-12-26T05:36:34.875Z",
    "size": 79396,
    "path": "../public/img/team/a3.jpg"
  },
  "/img/team/a4.jpg": {
    "type": "image/jpeg",
    "etag": "\"176a6-ng3BQMrGM3rqAy9qw4FWhd9/O8U\"",
    "mtime": "2024-12-26T05:36:34.907Z",
    "size": 95910,
    "path": "../public/img/team/a4.jpg"
  },
  "/mobile-app/img/blog/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"c740-Y9nvpnJe8AFkq+ntWhOgM71KqAE\"",
    "mtime": "2024-12-26T05:36:35.462Z",
    "size": 51008,
    "path": "../public/mobile-app/img/blog/1.jpg"
  },
  "/mobile-app/img/blog/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"41f1f-BEjDmfy/G4EqSozZGhOj0HvDf5I\"",
    "mtime": "2024-12-26T05:36:35.489Z",
    "size": 270111,
    "path": "../public/mobile-app/img/blog/2.jpg"
  },
  "/mobile-app/img/brands/1.png": {
    "type": "image/png",
    "etag": "\"12f8-LmsDK7CqvYo04KGDTzGAPlLL8es\"",
    "mtime": "2024-12-26T05:36:35.517Z",
    "size": 4856,
    "path": "../public/mobile-app/img/brands/1.png"
  },
  "/mobile-app/img/brands/2.png": {
    "type": "image/png",
    "etag": "\"23b7-KkWU+pzTbFyQc6lnaMQI3XIlN4E\"",
    "mtime": "2024-12-26T05:36:35.538Z",
    "size": 9143,
    "path": "../public/mobile-app/img/brands/2.png"
  },
  "/mobile-app/img/brands/3.png": {
    "type": "image/png",
    "etag": "\"931a-JaDEcMF5uTlsxq1S4XUOiEk7wEE\"",
    "mtime": "2024-12-26T05:36:35.546Z",
    "size": 37658,
    "path": "../public/mobile-app/img/brands/3.png"
  },
  "/mobile-app/img/brands/4.png": {
    "type": "image/png",
    "etag": "\"5165-vq4mwZPjyFmgOuyXCGi5BQnFCS4\"",
    "mtime": "2024-12-26T05:36:35.578Z",
    "size": 20837,
    "path": "../public/mobile-app/img/brands/4.png"
  },
  "/mobile-app/img/brands/5.png": {
    "type": "image/png",
    "etag": "\"2f93-x5+R6Dq/S6qR5PHqYFV9lXj+cy0\"",
    "mtime": "2024-12-26T05:36:35.594Z",
    "size": 12179,
    "path": "../public/mobile-app/img/brands/5.png"
  },
  "/mobile-app/img/brands/l1.png": {
    "type": "image/png",
    "etag": "\"10b8-kihPZgOPTdl/HWWQiDAtNRtFbvc\"",
    "mtime": "2024-12-26T05:36:35.610Z",
    "size": 4280,
    "path": "../public/mobile-app/img/brands/l1.png"
  },
  "/mobile-app/img/brands/l2.png": {
    "type": "image/png",
    "etag": "\"1f39-eR9Mm0KRoLNcFLHFN9knABL7PoY\"",
    "mtime": "2024-12-26T05:36:35.641Z",
    "size": 7993,
    "path": "../public/mobile-app/img/brands/l2.png"
  },
  "/mobile-app/img/brands/l3.png": {
    "type": "image/png",
    "etag": "\"1913-8pabBe4T6Y8qpvRsmaK5SCGF9Fw\"",
    "mtime": "2024-12-26T05:36:35.657Z",
    "size": 6419,
    "path": "../public/mobile-app/img/brands/l3.png"
  },
  "/mobile-app/img/brands/l4.png": {
    "type": "image/png",
    "etag": "\"160b-ei4xFc4sRgXjlx+I5GyA2N+gkcE\"",
    "mtime": "2024-12-26T05:36:35.689Z",
    "size": 5643,
    "path": "../public/mobile-app/img/brands/l4.png"
  },
  "/mobile-app/img/brands/l5.png": {
    "type": "image/png",
    "etag": "\"2d10-DgZ+ygXHd/6Yujhg38dhsM2kWVI\"",
    "mtime": "2024-12-26T05:36:35.705Z",
    "size": 11536,
    "path": "../public/mobile-app/img/brands/l5.png"
  },
  "/mobile-app/img/clients/1.png": {
    "type": "image/png",
    "etag": "\"17b2-fEwGbkUlO3UYTaZ7hnDJAxN9Srs\"",
    "mtime": "2024-12-26T05:36:35.736Z",
    "size": 6066,
    "path": "../public/mobile-app/img/clients/1.png"
  },
  "/mobile-app/img/clients/2.png": {
    "type": "image/png",
    "etag": "\"16f7-x/6szFsfSBEPephJ8zr04kEBpy0\"",
    "mtime": "2024-12-26T05:36:35.752Z",
    "size": 5879,
    "path": "../public/mobile-app/img/clients/2.png"
  },
  "/mobile-app/img/clients/3.png": {
    "type": "image/png",
    "etag": "\"1b66-1CPNQxG+2BfywXzYoRfQ5IZSHqQ\"",
    "mtime": "2024-12-26T05:36:35.768Z",
    "size": 7014,
    "path": "../public/mobile-app/img/clients/3.png"
  },
  "/mobile-app/img/screenshots/1.png": {
    "type": "image/png",
    "etag": "\"520a-M0gBX+FECsbf7AD1hjIw1V/OGpo\"",
    "mtime": "2024-12-26T05:36:35.799Z",
    "size": 21002,
    "path": "../public/mobile-app/img/screenshots/1.png"
  },
  "/mobile-app/img/screenshots/2.png": {
    "type": "image/png",
    "etag": "\"5345-EG3xq+hrtW3iZDw2vBBIjNUwHgk\"",
    "mtime": "2024-12-26T05:36:35.831Z",
    "size": 21317,
    "path": "../public/mobile-app/img/screenshots/2.png"
  },
  "/mobile-app/img/screenshots/3.png": {
    "type": "image/png",
    "etag": "\"49f6-8uIhnpJGnTrt8rrOGHzpzFXBf2Q\"",
    "mtime": "2024-12-26T05:36:35.847Z",
    "size": 18934,
    "path": "../public/mobile-app/img/screenshots/3.png"
  },
  "/mobile-app/img/screenshots/4.png": {
    "type": "image/png",
    "etag": "\"4ff0-RW4QpLh9cdrBU6H6+z8VN3xedMo\"",
    "mtime": "2024-12-26T05:36:35.862Z",
    "size": 20464,
    "path": "../public/mobile-app/img/screenshots/4.png"
  },
  "/mobile-app/img/screenshots/5.png": {
    "type": "image/png",
    "etag": "\"5b6f-46N8H3L3xTFm8gCLYQYvMGcRRmI\"",
    "mtime": "2024-12-26T05:36:35.894Z",
    "size": 23407,
    "path": "../public/mobile-app/img/screenshots/5.png"
  },
  "/mobile-app/img/shapes/border.png": {
    "type": "image/png",
    "etag": "\"8f4-cS9CiBSzOAMHQB+CpUUSi0jcjUw\"",
    "mtime": "2024-12-26T05:36:35.910Z",
    "size": 2292,
    "path": "../public/mobile-app/img/shapes/border.png"
  },
  "/mobile-app/img/shapes/shape-light.png": {
    "type": "image/png",
    "etag": "\"19e2-hSzsglho/VuKMzLYqwGJpgEgYX0\"",
    "mtime": "2024-12-26T05:36:35.941Z",
    "size": 6626,
    "path": "../public/mobile-app/img/shapes/shape-light.png"
  },
  "/mobile-app/img/shop/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"5f28-8IQN1xHoyWYPD1Ma4JZZGdXmn9E\"",
    "mtime": "2024-12-26T05:36:35.957Z",
    "size": 24360,
    "path": "../public/mobile-app/img/shop/1.jpg"
  },
  "/mobile-app/img/shop/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"7b01-rIayz6jeZX7FKUymwiZzMibx3K8\"",
    "mtime": "2024-12-26T05:36:35.989Z",
    "size": 31489,
    "path": "../public/mobile-app/img/shop/2.jpg"
  },
  "/mobile-app/img/shop/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"3541-XIeWoFDhNX1ABogxN/lV49du5XY\"",
    "mtime": "2024-12-26T05:36:36.005Z",
    "size": 13633,
    "path": "../public/mobile-app/img/shop/3.jpg"
  },
  "/mobile-app/img/shop/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"3033-lvZf1zSbi4s4eJ6pL4J5d9Guads\"",
    "mtime": "2024-12-26T05:36:36.036Z",
    "size": 12339,
    "path": "../public/mobile-app/img/shop/4.jpg"
  },
  "/mobile-app/img/shop/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"2b96f-vijEbpRBS/ZL0JUKda3HuPF7ARM\"",
    "mtime": "2024-12-26T05:36:36.061Z",
    "size": 178543,
    "path": "../public/mobile-app/img/shop/5.jpg"
  },
  "/mobile-app/img/shop/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"66253-nlyujPzAY3WlBh6PSCE3J0a+JWc\"",
    "mtime": "2024-12-26T05:36:36.087Z",
    "size": 418387,
    "path": "../public/mobile-app/img/shop/6.jpg"
  },
  "/mobile-app/img/shop/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"11a93-mrI7ZfZjNphXEwt/bnt0M64mZkk\"",
    "mtime": "2024-12-26T05:36:36.095Z",
    "size": 72339,
    "path": "../public/mobile-app/img/shop/7.jpg"
  },
  "/mobile-app/img/shop/8.jpg": {
    "type": "image/jpeg",
    "etag": "\"2fc92-GpvX8DFy4bAa5GGfY5AOuPvd/2A\"",
    "mtime": "2024-12-26T05:36:36.127Z",
    "size": 195730,
    "path": "../public/mobile-app/img/shop/8.jpg"
  },
  "/mobile-app/img/shop/9.jpg": {
    "type": "image/jpeg",
    "etag": "\"42b11-ttpwn6ueMg8/DZ1ANwb12mZWUYc\"",
    "mtime": "2024-12-26T05:36:36.158Z",
    "size": 273169,
    "path": "../public/mobile-app/img/shop/9.jpg"
  },
  "/mobile-app/img/team/1.png": {
    "type": "image/png",
    "etag": "\"1b463-MPQ0Tosw22RH4FEdg+NJDijegeU\"",
    "mtime": "2024-12-26T05:36:36.190Z",
    "size": 111715,
    "path": "../public/mobile-app/img/team/1.png"
  },
  "/mobile-app/img/team/2.png": {
    "type": "image/png",
    "etag": "\"1b0d9-7uj1auAC6bfbHnSFkakIHO7V4y8\"",
    "mtime": "2024-12-26T05:36:36.206Z",
    "size": 110809,
    "path": "../public/mobile-app/img/team/2.png"
  },
  "/mobile-app/img/team/3.png": {
    "type": "image/png",
    "etag": "\"15c47-3uILFfdbn3/1pCeM107H1EMAcUA\"",
    "mtime": "2024-12-26T05:36:36.237Z",
    "size": 89159,
    "path": "../public/mobile-app/img/team/3.png"
  },
  "/mobile-app/img/team/4.png": {
    "type": "image/png",
    "etag": "\"18f70-ukRmBkg5bpoUU5a6mN932mYrvr0\"",
    "mtime": "2024-12-26T05:36:36.253Z",
    "size": 102256,
    "path": "../public/mobile-app/img/team/4.png"
  },
  "/mobile-app/img/works/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"e12b-vL3uo+rxwLhS+uJRk7zwEwvq/AI\"",
    "mtime": "2024-12-26T05:36:36.285Z",
    "size": 57643,
    "path": "../public/mobile-app/img/works/1.jpg"
  },
  "/mobile-app/img/works/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"7dad-GeEuksS6Und3JZz8t65XdodnOiI\"",
    "mtime": "2024-12-26T05:36:36.301Z",
    "size": 32173,
    "path": "../public/mobile-app/img/works/2.jpg"
  },
  "/mobile-app/img/works/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"855e-brMcKMzN1SpIgS+zjpJLCpezljI\"",
    "mtime": "2024-12-26T05:36:36.332Z",
    "size": 34142,
    "path": "../public/mobile-app/img/works/3.jpg"
  },
  "/mobile-app/img/works/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"7947-s/Kl/DrlTO86TviRn1Dis7xd3IQ\"",
    "mtime": "2024-12-26T05:36:36.348Z",
    "size": 31047,
    "path": "../public/mobile-app/img/works/4.jpg"
  },
  "/mobile-app/img/works/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"55c4-rT4aBwRbh7iRBM4pdUhGhdCH5J4\"",
    "mtime": "2024-12-26T05:36:36.364Z",
    "size": 21956,
    "path": "../public/mobile-app/img/works/5.jpg"
  },
  "/mobile-app/img/works/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"3916-LfYFCl8sch3jEQzV3jWoOAvijjg\"",
    "mtime": "2024-12-26T05:36:36.395Z",
    "size": 14614,
    "path": "../public/mobile-app/img/works/6.jpg"
  },
  "/mobile-app/img/works/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"7663-F9aqHNaGNTPpiKB8EQgLDW9CM9U\"",
    "mtime": "2024-12-26T05:36:36.411Z",
    "size": 30307,
    "path": "../public/mobile-app/img/works/7.jpg"
  },
  "/mobile-app/img/works/8.jpg": {
    "type": "image/jpeg",
    "etag": "\"ec8e-TzQ6T/mDoqjs/fxLRMEPIMMIoLk\"",
    "mtime": "2024-12-26T05:36:36.427Z",
    "size": 60558,
    "path": "../public/mobile-app/img/works/8.jpg"
  },
  "/img/arch/blog/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ff64-Xapelg+EpXnfd4AKFUJ8umz3Hko\"",
    "mtime": "2024-12-26T05:36:31.908Z",
    "size": 130916,
    "path": "../public/img/arch/blog/1.jpg"
  },
  "/img/arch/blog/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"3ba1a-TCTUmfP8sHhqXKCPp4oiEDw+gzs\"",
    "mtime": "2024-12-26T05:36:31.940Z",
    "size": 244250,
    "path": "../public/img/arch/blog/2.jpg"
  },
  "/img/arch/slid/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"57c01-S6RXs+86lxEhhOs8Prug8nJbSQ0\"",
    "mtime": "2024-12-26T05:36:31.972Z",
    "size": 359425,
    "path": "../public/img/arch/slid/1.jpg"
  },
  "/img/arch/slid/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"4a066-EVKCY4iIGNUnNHoWX14DQZfH71U\"",
    "mtime": "2024-12-26T05:36:31.988Z",
    "size": 303206,
    "path": "../public/img/arch/slid/2.jpg"
  },
  "/img/arch/slid/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"70060-0cnv4GxyGHebrxpXHUoZEE4qOpM\"",
    "mtime": "2024-12-26T05:36:32.020Z",
    "size": 458848,
    "path": "../public/img/arch/slid/3.jpg"
  },
  "/img/arch/work/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"645a-O8cbBoKCf47ljlolRLLDeKHtuA0\"",
    "mtime": "2024-12-26T05:36:32.052Z",
    "size": 25690,
    "path": "../public/img/arch/work/1.jpg"
  },
  "/img/arch/work/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"f379-N/q241t/kvHfmVzyYTeasEROJs0\"",
    "mtime": "2024-12-26T05:36:32.068Z",
    "size": 62329,
    "path": "../public/img/arch/work/2.jpg"
  },
  "/img/arch/work/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"187df-0qwA7MbA1FTR9vagVRnh4tpCsNY\"",
    "mtime": "2024-12-26T05:36:32.086Z",
    "size": 100319,
    "path": "../public/img/arch/work/3.jpg"
  },
  "/img/arch/work/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"29c0c-quriQmA1nePhOrPYwht4GGPBt6Q\"",
    "mtime": "2024-12-26T05:36:32.115Z",
    "size": 171020,
    "path": "../public/img/arch/work/4.jpg"
  },
  "/img/arch/work/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"2e436-AM4t/AgMblKyZzLEfRtSFKIdqYc\"",
    "mtime": "2024-12-26T05:36:32.147Z",
    "size": 189494,
    "path": "../public/img/arch/work/5.jpg"
  },
  "/img/arch/work/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"25705-+Xob5JautIjmC3FJOwMSyOoQpqA\"",
    "mtime": "2024-12-26T05:36:32.163Z",
    "size": 153349,
    "path": "../public/img/arch/work/6.jpg"
  },
  "/img/portfolio/cr/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"3e6fd-qrwWdCnFvUT0GBqDmd3Aq9BYeh0\"",
    "mtime": "2024-12-26T05:36:33.338Z",
    "size": 255741,
    "path": "../public/img/portfolio/cr/1.jpg"
  },
  "/img/portfolio/cr/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"47e36-qPcmojgaJaHYOB8z/A4CxLlQMbA\"",
    "mtime": "2024-12-26T05:36:33.354Z",
    "size": 294454,
    "path": "../public/img/portfolio/cr/2.jpg"
  },
  "/img/portfolio/cr/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"cf8a-k8gV0hVauUKzvgpTRl807ZaRfI0\"",
    "mtime": "2024-12-26T05:36:33.386Z",
    "size": 53130,
    "path": "../public/img/portfolio/cr/3.jpg"
  },
  "/img/portfolio/cr/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"12c18-arQSmEyg0NcsJqJ8zDjvaUCWgeM\"",
    "mtime": "2024-12-26T05:36:33.411Z",
    "size": 76824,
    "path": "../public/img/portfolio/cr/4.jpg"
  },
  "/img/portfolio/curs/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"44e34-YIQ/nKqbCm4xUGJcW1CycGmHfic\"",
    "mtime": "2024-12-26T05:36:33.431Z",
    "size": 282164,
    "path": "../public/img/portfolio/curs/1.jpg"
  },
  "/img/portfolio/curs/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e85d-vX3NB36eZImwRUKlzv8pTxRha+0\"",
    "mtime": "2024-12-26T05:36:33.461Z",
    "size": 125021,
    "path": "../public/img/portfolio/curs/2.jpg"
  },
  "/img/portfolio/curs/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"bbaf-e9X7TfyuVVgj72hvbDCjz4OAnWo\"",
    "mtime": "2024-12-26T05:36:33.480Z",
    "size": 48047,
    "path": "../public/img/portfolio/curs/3.jpg"
  },
  "/img/portfolio/curs/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"48bc6-BIYz1xCqd08BWE5vSsHphFTIWq4\"",
    "mtime": "2024-12-26T05:36:33.511Z",
    "size": 297926,
    "path": "../public/img/portfolio/curs/4.jpg"
  },
  "/img/portfolio/curs/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"24e2d-apy5U1HEZdXQQbZcJepj970llPw\"",
    "mtime": "2024-12-26T05:36:33.530Z",
    "size": 151085,
    "path": "../public/img/portfolio/curs/5.jpg"
  },
  "/img/portfolio/freelancer/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"529a5-7obeg7iF/3rNsDVmrsgv+DuKF0I\"",
    "mtime": "2024-12-26T05:36:33.556Z",
    "size": 338341,
    "path": "../public/img/portfolio/freelancer/1.jpg"
  },
  "/img/portfolio/freelancer/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ff34-J13UJcr1Md0QZNla+sobOCkSUII\"",
    "mtime": "2024-12-26T05:36:33.588Z",
    "size": 196404,
    "path": "../public/img/portfolio/freelancer/2.jpg"
  },
  "/img/portfolio/freelancer/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"2a357-lhcTbGNTxaIFOwXoJVwuICtRAps\"",
    "mtime": "2024-12-26T05:36:33.604Z",
    "size": 172887,
    "path": "../public/img/portfolio/freelancer/3.jpg"
  },
  "/img/portfolio/freelancer/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"2992a-7S5Kn+68xSzRYBWWTF9pFqxFizA\"",
    "mtime": "2024-12-26T05:36:33.635Z",
    "size": 170282,
    "path": "../public/img/portfolio/freelancer/4.jpg"
  },
  "/img/portfolio/freelancer/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"27f9e-yfr1evjKRnGcYGSQg6rf5puXynk\"",
    "mtime": "2024-12-26T05:36:33.651Z",
    "size": 163742,
    "path": "../public/img/portfolio/freelancer/5.jpg"
  },
  "/img/portfolio/freelancer/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"56a76-p6+Hg57lbcfbEDMVHzoH5cpgXjM\"",
    "mtime": "2024-12-26T05:36:33.682Z",
    "size": 354934,
    "path": "../public/img/portfolio/freelancer/6.jpg"
  },
  "/img/portfolio/full/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"290d1-+ME20XjQkg8VVz6SmLhhJjZL5Cs\"",
    "mtime": "2024-12-26T05:36:33.714Z",
    "size": 168145,
    "path": "../public/img/portfolio/full/1.jpg"
  },
  "/img/portfolio/full/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"4a042-Ku9G5u8JiEGNK4mXk410RwXwp64\"",
    "mtime": "2024-12-26T05:36:33.730Z",
    "size": 303170,
    "path": "../public/img/portfolio/full/2.jpg"
  },
  "/img/portfolio/full/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"242fd-k7vUJiLIANkaGpkdBcCq1u+waWM\"",
    "mtime": "2024-12-26T05:36:33.762Z",
    "size": 148221,
    "path": "../public/img/portfolio/full/3.jpg"
  },
  "/img/portfolio/full/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"89872-JNmfLZTzl+2xZObF91mP7GYFj34\"",
    "mtime": "2024-12-26T05:36:33.792Z",
    "size": 563314,
    "path": "../public/img/portfolio/full/4.jpg"
  },
  "/img/portfolio/full/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"2512a-ajCXVx9333nIfhHJ1LZ5EN1jHJo\"",
    "mtime": "2024-12-26T05:36:33.810Z",
    "size": 151850,
    "path": "../public/img/portfolio/full/5.jpg"
  },
  "/img/portfolio/full/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"7b0cb-UDtjeO5evdDtbFUC4KRCm9AUFWY\"",
    "mtime": "2024-12-26T05:36:33.842Z",
    "size": 504011,
    "path": "../public/img/portfolio/full/6.jpg"
  },
  "/img/portfolio/metro/01.jpg": {
    "type": "image/jpeg",
    "etag": "\"324c8-K8Cm25nVngB64ldHLaYheIH9p6k\"",
    "mtime": "2024-12-26T05:36:33.858Z",
    "size": 206024,
    "path": "../public/img/portfolio/metro/01.jpg"
  },
  "/img/portfolio/metro/02.jpg": {
    "type": "image/jpeg",
    "etag": "\"20a28-3vL+G3x2k/aADbvdCIj0lZYW92g\"",
    "mtime": "2024-12-26T05:36:33.889Z",
    "size": 133672,
    "path": "../public/img/portfolio/metro/02.jpg"
  },
  "/img/portfolio/metro/03.jpg": {
    "type": "image/jpeg",
    "etag": "\"344a3-ppJIanOk8TRy1F+a8TORB4D7tic\"",
    "mtime": "2024-12-26T05:36:33.920Z",
    "size": 214179,
    "path": "../public/img/portfolio/metro/03.jpg"
  },
  "/img/portfolio/metro/04.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b051-2ea6ugySA/TUcUGKBFd0DmuLrdI\"",
    "mtime": "2024-12-26T05:36:33.946Z",
    "size": 110673,
    "path": "../public/img/portfolio/metro/04.jpg"
  },
  "/img/portfolio/metro/05.jpg": {
    "type": "image/jpeg",
    "etag": "\"149ff-u0Pu0nJDLpl0SnV280j+LzjdIr0\"",
    "mtime": "2024-12-26T05:36:33.962Z",
    "size": 84479,
    "path": "../public/img/portfolio/metro/05.jpg"
  },
  "/img/portfolio/project2/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1709b-8brO2PP31DvOwqKbbvpr4nG6IP0\"",
    "mtime": "2024-12-26T05:36:34.405Z",
    "size": 94363,
    "path": "../public/img/portfolio/project2/1.jpg"
  },
  "/img/portfolio/project2/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"165c8-pI44aMj//KyOw3l84FDHteXVUFM\"",
    "mtime": "2024-12-26T05:36:34.439Z",
    "size": 91592,
    "path": "../public/img/portfolio/project2/2.jpg"
  },
  "/img/portfolio/project2/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"15c43-uFMDFE2xvh2F8+0Pd1pjyp2jyGs\"",
    "mtime": "2024-12-26T05:36:34.460Z",
    "size": 89155,
    "path": "../public/img/portfolio/project2/3.jpg"
  },
  "/img/portfolio/project2/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"13f3f-+oQace1yevGnYQZVMVCKpytokjk\"",
    "mtime": "2024-12-26T05:36:34.479Z",
    "size": 81727,
    "path": "../public/img/portfolio/project2/4.jpg"
  },
  "/img/portfolio/project2/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"d2a4-GM/uzyGxM5EXCexo2qivKsu/mcw\"",
    "mtime": "2024-12-26T05:36:34.495Z",
    "size": 53924,
    "path": "../public/img/portfolio/project2/5.jpg"
  },
  "/img/portfolio/project2/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"128a1-hNWYvjxg0dYDPnK8nmWYQQLR3SM\"",
    "mtime": "2024-12-26T05:36:34.526Z",
    "size": 75937,
    "path": "../public/img/portfolio/project2/6.jpg"
  },
  "/img/portfolio/project2/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"31a92-OPukbHKOrLtq4yfvvA5iXgZ0naA\"",
    "mtime": "2024-12-26T05:36:34.542Z",
    "size": 203410,
    "path": "../public/img/portfolio/project2/7.jpg"
  },
  "/img/portfolio/project2/bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"1f9a4-MJLvEZfZ2OY2j/ejRd4b/3SChlU\"",
    "mtime": "2024-12-26T05:36:34.574Z",
    "size": 129444,
    "path": "../public/img/portfolio/project2/bg.jpg"
  },
  "/img/clients/brands/dark/01.png": {
    "type": "image/png",
    "etag": "\"5090-nWVRj1IhQ3elaEoZneeYaOVNC3I\"",
    "mtime": "2024-12-26T05:36:32.632Z",
    "size": 20624,
    "path": "../public/img/clients/brands/dark/01.png"
  },
  "/img/clients/brands/dark/02.png": {
    "type": "image/png",
    "etag": "\"f29-Makp+wAAGi3KUrH2/jVbtvhPddo\"",
    "mtime": "2024-12-26T05:36:32.663Z",
    "size": 3881,
    "path": "../public/img/clients/brands/dark/02.png"
  },
  "/img/clients/brands/dark/03.png": {
    "type": "image/png",
    "etag": "\"90ff-diZ5HUNRsDZra5I7rMrULWdfzig\"",
    "mtime": "2024-12-26T05:36:32.679Z",
    "size": 37119,
    "path": "../public/img/clients/brands/dark/03.png"
  },
  "/img/clients/brands/dark/04.png": {
    "type": "image/png",
    "etag": "\"8d3a-nSZWJampRWtcVqbIfTPzXVxOB9M\"",
    "mtime": "2024-12-26T05:36:32.695Z",
    "size": 36154,
    "path": "../public/img/clients/brands/dark/04.png"
  },
  "/img/clients/brands/dark/05.png": {
    "type": "image/png",
    "etag": "\"5a7d-RCeYHCDoWCuJ0IE1T2Se7J9he5A\"",
    "mtime": "2024-12-26T05:36:32.726Z",
    "size": 23165,
    "path": "../public/img/clients/brands/dark/05.png"
  },
  "/img/clients/brands/dark/06.png": {
    "type": "image/png",
    "etag": "\"8771-fBPb1GsoobNk/xSUgSuyaYEpx4g\"",
    "mtime": "2024-12-26T05:36:32.742Z",
    "size": 34673,
    "path": "../public/img/clients/brands/dark/06.png"
  },
  "/img/clients/brands/dark/07.png": {
    "type": "image/png",
    "etag": "\"16f5-IMhrwm7Kx4AHDUl6ph9NewmKivk\"",
    "mtime": "2024-12-26T05:36:32.774Z",
    "size": 5877,
    "path": "../public/img/clients/brands/dark/07.png"
  },
  "/img/clients/brands/dark/08.png": {
    "type": "image/png",
    "etag": "\"cfd1-kFSanZs0210thgnrrElVHY2nv5s\"",
    "mtime": "2024-12-26T05:36:32.789Z",
    "size": 53201,
    "path": "../public/img/clients/brands/dark/08.png"
  },
  "/img/clients/brands/light/01.png": {
    "type": "image/png",
    "etag": "\"2264-oh5mmUoQ9XuEsIvoMiC9SQrmzZw\"",
    "mtime": "2024-12-26T05:36:32.821Z",
    "size": 8804,
    "path": "../public/img/clients/brands/light/01.png"
  },
  "/img/clients/brands/light/02.png": {
    "type": "image/png",
    "etag": "\"fa0-qzdOt/65IegJHepyqLulCkPhW9c\"",
    "mtime": "2024-12-26T05:36:32.837Z",
    "size": 4000,
    "path": "../public/img/clients/brands/light/02.png"
  },
  "/img/clients/brands/light/03.png": {
    "type": "image/png",
    "etag": "\"3513-mozweyMVXCwrBjxHsejvT08ptV4\"",
    "mtime": "2024-12-26T05:36:32.869Z",
    "size": 13587,
    "path": "../public/img/clients/brands/light/03.png"
  },
  "/img/clients/brands/light/04.png": {
    "type": "image/png",
    "etag": "\"31d5-kmpQj2zHrYaWR7h703OwHRrm9/I\"",
    "mtime": "2024-12-26T05:36:32.889Z",
    "size": 12757,
    "path": "../public/img/clients/brands/light/04.png"
  },
  "/img/clients/brands/light/05.png": {
    "type": "image/png",
    "etag": "\"14da-GA5/SHiEolpRi0B3EsbJRnL+uKI\"",
    "mtime": "2024-12-26T05:36:32.911Z",
    "size": 5338,
    "path": "../public/img/clients/brands/light/05.png"
  },
  "/img/clients/brands/light/06.png": {
    "type": "image/png",
    "etag": "\"30dd-soPLlEcoBFnkbERwH4EoW7FVoBY\"",
    "mtime": "2024-12-26T05:36:32.927Z",
    "size": 12509,
    "path": "../public/img/clients/brands/light/06.png"
  },
  "/img/clients/brands/light/07.png": {
    "type": "image/png",
    "etag": "\"1e32-ShEOU59+4gpPBchZTfGUOu2lKHA\"",
    "mtime": "2024-12-26T05:36:32.943Z",
    "size": 7730,
    "path": "../public/img/clients/brands/light/07.png"
  },
  "/img/clients/brands/light/08.png": {
    "type": "image/png",
    "etag": "\"3460-DSdFb4chhzsHfuXvzq0WJ50G3UY\"",
    "mtime": "2024-12-26T05:36:32.974Z",
    "size": 13408,
    "path": "../public/img/clients/brands/light/08.png"
  },
  "/img/portfolio/portfolio/1/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"142fb-wxs9lg+ENOg71BVIj5LlTRoYi1I\"",
    "mtime": "2024-12-26T05:36:33.993Z",
    "size": 82683,
    "path": "../public/img/portfolio/portfolio/1/1.jpg"
  },
  "/img/portfolio/portfolio/1/10.jpg": {
    "type": "image/jpeg",
    "etag": "\"2962f-fzXU7lLDk0Kv9Tjn6VGEeOMVXyQ\"",
    "mtime": "2024-12-26T05:36:34.009Z",
    "size": 169519,
    "path": "../public/img/portfolio/portfolio/1/10.jpg"
  },
  "/img/portfolio/portfolio/1/11.jpg": {
    "type": "image/jpeg",
    "etag": "\"175c9-v4jSiEeL9pI5InpA3j0alCU56eo\"",
    "mtime": "2024-12-26T05:36:34.041Z",
    "size": 95689,
    "path": "../public/img/portfolio/portfolio/1/11.jpg"
  },
  "/img/portfolio/portfolio/1/12.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b6f0-88v46FzurqPmFsq9USt20Nh2e5g\"",
    "mtime": "2024-12-26T05:36:34.057Z",
    "size": 112368,
    "path": "../public/img/portfolio/portfolio/1/12.jpg"
  },
  "/img/portfolio/portfolio/1/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d449-EIFIYgTdOcvCba7Rc+w/yuHW200\"",
    "mtime": "2024-12-26T05:36:34.088Z",
    "size": 119881,
    "path": "../public/img/portfolio/portfolio/1/2.jpg"
  },
  "/img/portfolio/portfolio/1/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e09f-NWV5Q9viokOOcu+uF0Q2zf/BII8\"",
    "mtime": "2024-12-26T05:36:34.104Z",
    "size": 123039,
    "path": "../public/img/portfolio/portfolio/1/3.jpg"
  },
  "/img/portfolio/portfolio/1/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"1658b-Rt2c/uuVy4/5ddGXfniEtcIahgk\"",
    "mtime": "2024-12-26T05:36:34.136Z",
    "size": 91531,
    "path": "../public/img/portfolio/portfolio/1/4.jpg"
  },
  "/img/portfolio/portfolio/1/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"f0b0-pQ/QF/vo4TbKOKJrG/E3JxJqIVE\"",
    "mtime": "2024-12-26T05:36:34.152Z",
    "size": 61616,
    "path": "../public/img/portfolio/portfolio/1/5.jpg"
  },
  "/img/portfolio/portfolio/1/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"1658b-9vaJDDT/DQ6hHtxlALaVFbIOobY\"",
    "mtime": "2024-12-26T05:36:34.183Z",
    "size": 91531,
    "path": "../public/img/portfolio/portfolio/1/6.jpg"
  },
  "/img/portfolio/portfolio/1/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"13bb3-texqYCMwA4aGk9tPonVz6UWdPQI\"",
    "mtime": "2024-12-26T05:36:34.199Z",
    "size": 80819,
    "path": "../public/img/portfolio/portfolio/1/7.jpg"
  },
  "/img/portfolio/portfolio/1/8.jpg": {
    "type": "image/jpeg",
    "etag": "\"27aca-CmePHqcSjfui8guylMyj/1qChls\"",
    "mtime": "2024-12-26T05:36:34.231Z",
    "size": 162506,
    "path": "../public/img/portfolio/portfolio/1/8.jpg"
  },
  "/img/portfolio/portfolio/1/9.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ac07-eNDovfMK0jccM5nRIx3c2hm0AHI\"",
    "mtime": "2024-12-26T05:36:34.247Z",
    "size": 109575,
    "path": "../public/img/portfolio/portfolio/1/9.jpg"
  },
  "/img/portfolio/portfolio/2/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"2de4-6tdidS2KyJ5tLyh7Cl0NyHdvcCA\"",
    "mtime": "2024-12-26T05:36:34.278Z",
    "size": 11748,
    "path": "../public/img/portfolio/portfolio/2/1.jpg"
  },
  "/img/portfolio/portfolio/2/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"c171-bACQKG4qWPlw3dOeqWpAbFSyKjQ\"",
    "mtime": "2024-12-26T05:36:34.294Z",
    "size": 49521,
    "path": "../public/img/portfolio/portfolio/2/2.jpg"
  },
  "/img/portfolio/portfolio/2/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"4979-Cc4Yi2BZjZ+QWRy+uX0mzwi85eU\"",
    "mtime": "2024-12-26T05:36:34.310Z",
    "size": 18809,
    "path": "../public/img/portfolio/portfolio/2/3.jpg"
  },
  "/img/portfolio/portfolio/2/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"1f2f7-ngNtEHIUnj/2p57M9BmD+I70GtE\"",
    "mtime": "2024-12-26T05:36:34.342Z",
    "size": 127735,
    "path": "../public/img/portfolio/portfolio/2/4.jpg"
  },
  "/img/portfolio/portfolio/2/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"21101-WKaifGsMxU0KwahoyDhyz6wwEj0\"",
    "mtime": "2024-12-26T05:36:34.357Z",
    "size": 135425,
    "path": "../public/img/portfolio/portfolio/2/5.jpg"
  },
  "/img/portfolio/portfolio/2/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"1820e-5Ew+iVbgQm4y161f2Xfu49TBgCI\"",
    "mtime": "2024-12-26T05:36:34.389Z",
    "size": 98830,
    "path": "../public/img/portfolio/portfolio/2/6.jpg"
  }
};

function normalizeWindowsPath(input = "") {
  if (!input || !input.includes("\\")) {
    return input;
  }
  return input.replace(/\\/g, "/");
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_QJy4sW = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_QJy4sW, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_QJy4sW, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (...args) => {
    return _localFetch(...args).then(
      (response) => normalizeFetchResponse(response)
    );
  };
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((err) => {
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof Rt.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
  }
  server.on("request", function(req, res) {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", function() {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", function(socket) {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", function() {
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    if (options.development) {
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        return Promise.resolve(false);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((err) => {
      const errString = typeof err === "string" ? err : JSON.stringify(err);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { $fetch as $, send as a, setResponseStatus as b, setResponseHeaders as c, dr as d, eventHandler as e, useRuntimeConfig as f, getResponseStatus as g, getQuery as h, createError$1 as i, joinURL as j, getRouteRules as k, getResponseStatusText as l, withQuery as m, hasProtocol as n, isScriptProtocol as o, parseURL as p, sanitizeStatusCode as q, createHooks as r, setResponseHeader as s, defu as t, useNitroApp as u, parseQuery as v, wn as w, withTrailingSlash as x, withoutTrailingSlash as y, nodeServer as z };
//# sourceMappingURL=node-server.mjs.map
