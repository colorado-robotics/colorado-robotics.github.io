// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15814 = arguments.length;
switch (G__15814) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15815 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15815 = (function (f,blockable,meta15816){
this.f = f;
this.blockable = blockable;
this.meta15816 = meta15816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15817,meta15816__$1){
var self__ = this;
var _15817__$1 = this;
return (new cljs.core.async.t_cljs$core$async15815(self__.f,self__.blockable,meta15816__$1));
});

cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15817){
var self__ = this;
var _15817__$1 = this;
return self__.meta15816;
});

cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15816], null);
});

cljs.core.async.t_cljs$core$async15815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15815";

cljs.core.async.t_cljs$core$async15815.cljs$lang$ctorPrWriter = (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cljs.core.async/t_cljs$core$async15815");
});

cljs.core.async.__GT_t_cljs$core$async15815 = (function cljs$core$async$__GT_t_cljs$core$async15815(f__$1,blockable__$1,meta15816){
return (new cljs.core.async.t_cljs$core$async15815(f__$1,blockable__$1,meta15816));
});

}

return (new cljs.core.async.t_cljs$core$async15815(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15888 = arguments.length;
switch (G__15888) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15904 = arguments.length;
switch (G__15904) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15919 = arguments.length;
switch (G__15919) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15931 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15931) : fn1.call(null,val_15931));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15931,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15931) : fn1.call(null,val_15931));
});})(val_15931,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15934 = arguments.length;
switch (G__15934) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8412__auto___15943 = n;
var x_15944 = (0);
while(true){
if((x_15944 < n__8412__auto___15943)){
(a[x_15944] = (0));

var G__15945 = (x_15944 + (1));
x_15944 = G__15945;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__15947 = (i + (1));
i = G__15947;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async15948 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15948 = (function (flag,meta15949){
this.flag = flag;
this.meta15949 = meta15949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15950,meta15949__$1){
var self__ = this;
var _15950__$1 = this;
return (new cljs.core.async.t_cljs$core$async15948(self__.flag,meta15949__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15948.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15950){
var self__ = this;
var _15950__$1 = this;
return self__.meta15949;
});})(flag))
;

cljs.core.async.t_cljs$core$async15948.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15948.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15948.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15948.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15948.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15949], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15948";

cljs.core.async.t_cljs$core$async15948.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cljs.core.async/t_cljs$core$async15948");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15948 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15948(flag__$1,meta15949){
return (new cljs.core.async.t_cljs$core$async15948(flag__$1,meta15949));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15948(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15969 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15969 = (function (flag,cb,meta15970){
this.flag = flag;
this.cb = cb;
this.meta15970 = meta15970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15971,meta15970__$1){
var self__ = this;
var _15971__$1 = this;
return (new cljs.core.async.t_cljs$core$async15969(self__.flag,self__.cb,meta15970__$1));
});

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15971){
var self__ = this;
var _15971__$1 = this;
return self__.meta15970;
});

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15970], null);
});

cljs.core.async.t_cljs$core$async15969.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15969";

cljs.core.async.t_cljs$core$async15969.cljs$lang$ctorPrWriter = (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cljs.core.async/t_cljs$core$async15969");
});

cljs.core.async.__GT_t_cljs$core$async15969 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15969(flag__$1,cb__$1,meta15970){
return (new cljs.core.async.t_cljs$core$async15969(flag__$1,cb__$1,meta15970));
});

}

return (new cljs.core.async.t_cljs$core$async15969(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15999_SHARP_){
var G__16002 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15999_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16002) : fret.call(null,G__16002));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16000_SHARP_){
var G__16005 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16000_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16005) : fret.call(null,G__16005));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__7488__auto__ = wport;
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16028 = (i + (1));
i = G__16028;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7488__auto__ = ret;
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__7476__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__7476__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__7476__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__8620__auto__ = [];
var len__8613__auto___16036 = arguments.length;
var i__8614__auto___16037 = (0);
while(true){
if((i__8614__auto___16037 < len__8613__auto___16036)){
args__8620__auto__.push((arguments[i__8614__auto___16037]));

var G__16040 = (i__8614__auto___16037 + (1));
i__8614__auto___16037 = G__16040;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16033){
var map__16034 = p__16033;
var map__16034__$1 = ((((!((map__16034 == null)))?((((map__16034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16034):map__16034);
var opts = map__16034__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16029){
var G__16030 = cljs.core.first(seq16029);
var seq16029__$1 = cljs.core.next(seq16029);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16030,seq16029__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__16048 = arguments.length;
switch (G__16048) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15748__auto___16150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto___16150){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto___16150){
return (function (state_16078){
var state_val_16079 = (state_16078[(1)]);
if((state_val_16079 === (7))){
var inst_16074 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
var statearr_16083_16152 = state_16078__$1;
(statearr_16083_16152[(2)] = inst_16074);

(statearr_16083_16152[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16079 === (1))){
var state_16078__$1 = state_16078;
var statearr_16084_16156 = state_16078__$1;
(statearr_16084_16156[(2)] = null);

(statearr_16084_16156[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16079 === (4))){
var inst_16054 = (state_16078[(7)]);
var inst_16054__$1 = (state_16078[(2)]);
var inst_16055 = (inst_16054__$1 == null);
var state_16078__$1 = (function (){var statearr_16088 = state_16078;
(statearr_16088[(7)] = inst_16054__$1);

return statearr_16088;
})();
if(cljs.core.truth_(inst_16055)){
var statearr_16102_16164 = state_16078__$1;
(statearr_16102_16164[(1)] = (5));

} else {
var statearr_16106_16165 = state_16078__$1;
(statearr_16106_16165[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16079 === (13))){
var state_16078__$1 = state_16078;
var statearr_16113_16173 = state_16078__$1;
(statearr_16113_16173[(2)] = null);

(statearr_16113_16173[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16079 === (6))){
var inst_16054 = (state_16078[(7)]);
var state_16078__$1 = state_16078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16078__$1,(11),to,inst_16054);
} else {
if((state_val_16079 === (3))){
var inst_16076 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16078__$1,inst_16076);
} else {
if((state_val_16079 === (12))){
var state_16078__$1 = state_16078;
var statearr_16119_16175 = state_16078__$1;
(statearr_16119_16175[(2)] = null);

(statearr_16119_16175[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16079 === (2))){
var state_16078__$1 = state_16078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16078__$1,(4),from);
} else {
if((state_val_16079 === (11))){
var inst_16064 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
if(cljs.core.truth_(inst_16064)){
var statearr_16122_16180 = state_16078__$1;
(statearr_16122_16180[(1)] = (12));

} else {
var statearr_16123_16182 = state_16078__$1;
(statearr_16123_16182[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16079 === (9))){
var state_16078__$1 = state_16078;
var statearr_16124_16185 = state_16078__$1;
(statearr_16124_16185[(2)] = null);

(statearr_16124_16185[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16079 === (5))){
var state_16078__$1 = state_16078;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16128_16190 = state_16078__$1;
(statearr_16128_16190[(1)] = (8));

} else {
var statearr_16129_16194 = state_16078__$1;
(statearr_16129_16194[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16079 === (14))){
var inst_16072 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
var statearr_16130_16196 = state_16078__$1;
(statearr_16130_16196[(2)] = inst_16072);

(statearr_16130_16196[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16079 === (10))){
var inst_16061 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
var statearr_16134_16197 = state_16078__$1;
(statearr_16134_16197[(2)] = inst_16061);

(statearr_16134_16197[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16079 === (8))){
var inst_16058 = cljs.core.async.close_BANG_(to);
var state_16078__$1 = state_16078;
var statearr_16137_16198 = state_16078__$1;
(statearr_16137_16198[(2)] = inst_16058);

(statearr_16137_16198[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15748__auto___16150))
;
return ((function (switch__15115__auto__,c__15748__auto___16150){
return (function() {
var cljs$core$async$state_machine__15116__auto__ = null;
var cljs$core$async$state_machine__15116__auto____0 = (function (){
var statearr_16138 = [null,null,null,null,null,null,null,null];
(statearr_16138[(0)] = cljs$core$async$state_machine__15116__auto__);

(statearr_16138[(1)] = (1));

return statearr_16138;
});
var cljs$core$async$state_machine__15116__auto____1 = (function (state_16078){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_16078);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e16139){if((e16139 instanceof Object)){
var ex__15119__auto__ = e16139;
var statearr_16143_16214 = state_16078;
(statearr_16143_16214[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16078);

return cljs.core.cst$kw$recur;
} else {
throw e16139;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__16218 = state_16078;
state_16078 = G__16218;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$state_machine__15116__auto__ = function(state_16078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15116__auto____1.call(this,state_16078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15116__auto____0;
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15116__auto____1;
return cljs$core$async$state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto___16150))
})();
var state__15750__auto__ = (function (){var statearr_16146 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_16146[(6)] = c__15748__auto___16150);

return statearr_16146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto___16150))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__16231){
var vec__16232 = p__16231;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16232,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16232,(1),null);
var job = vec__16232;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15748__auto___16589 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto___16589,res,vec__16232,v,p,job,jobs,results){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto___16589,res,vec__16232,v,p,job,jobs,results){
return (function (state_16246){
var state_val_16247 = (state_16246[(1)]);
if((state_val_16247 === (1))){
var state_16246__$1 = state_16246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16246__$1,(2),res,v);
} else {
if((state_val_16247 === (2))){
var inst_16243 = (state_16246[(2)]);
var inst_16244 = cljs.core.async.close_BANG_(res);
var state_16246__$1 = (function (){var statearr_16252 = state_16246;
(statearr_16252[(7)] = inst_16243);

return statearr_16252;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16246__$1,inst_16244);
} else {
return null;
}
}
});})(c__15748__auto___16589,res,vec__16232,v,p,job,jobs,results))
;
return ((function (switch__15115__auto__,c__15748__auto___16589,res,vec__16232,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____0 = (function (){
var statearr_16253 = [null,null,null,null,null,null,null,null];
(statearr_16253[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__);

(statearr_16253[(1)] = (1));

return statearr_16253;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____1 = (function (state_16246){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_16246);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e16254){if((e16254 instanceof Object)){
var ex__15119__auto__ = e16254;
var statearr_16255_16597 = state_16246;
(statearr_16255_16597[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16246);

return cljs.core.cst$kw$recur;
} else {
throw e16254;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__16598 = state_16246;
state_16246 = G__16598;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__ = function(state_16246){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____1.call(this,state_16246);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto___16589,res,vec__16232,v,p,job,jobs,results))
})();
var state__15750__auto__ = (function (){var statearr_16260 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_16260[(6)] = c__15748__auto___16589);

return statearr_16260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto___16589,res,vec__16232,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16265){
var vec__16266 = p__16265;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16266,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16266,(1),null);
var job = vec__16266;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__8412__auto___16599 = n;
var __16600 = (0);
while(true){
if((__16600 < n__8412__auto___16599)){
var G__16269_16601 = type;
var G__16269_16602__$1 = (((G__16269_16601 instanceof cljs.core.Keyword))?G__16269_16601.fqn:null);
switch (G__16269_16602__$1) {
case "compute":
var c__15748__auto___16604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16600,c__15748__auto___16604,G__16269_16601,G__16269_16602__$1,n__8412__auto___16599,jobs,results,process,async){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (__16600,c__15748__auto___16604,G__16269_16601,G__16269_16602__$1,n__8412__auto___16599,jobs,results,process,async){
return (function (state_16284){
var state_val_16285 = (state_16284[(1)]);
if((state_val_16285 === (1))){
var state_16284__$1 = state_16284;
var statearr_16286_16605 = state_16284__$1;
(statearr_16286_16605[(2)] = null);

(statearr_16286_16605[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16285 === (2))){
var state_16284__$1 = state_16284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16284__$1,(4),jobs);
} else {
if((state_val_16285 === (3))){
var inst_16282 = (state_16284[(2)]);
var state_16284__$1 = state_16284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16284__$1,inst_16282);
} else {
if((state_val_16285 === (4))){
var inst_16274 = (state_16284[(2)]);
var inst_16275 = process(inst_16274);
var state_16284__$1 = state_16284;
if(cljs.core.truth_(inst_16275)){
var statearr_16309_16606 = state_16284__$1;
(statearr_16309_16606[(1)] = (5));

} else {
var statearr_16310_16607 = state_16284__$1;
(statearr_16310_16607[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16285 === (5))){
var state_16284__$1 = state_16284;
var statearr_16314_16608 = state_16284__$1;
(statearr_16314_16608[(2)] = null);

(statearr_16314_16608[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16285 === (6))){
var state_16284__$1 = state_16284;
var statearr_16315_16609 = state_16284__$1;
(statearr_16315_16609[(2)] = null);

(statearr_16315_16609[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16285 === (7))){
var inst_16280 = (state_16284[(2)]);
var state_16284__$1 = state_16284;
var statearr_16316_16610 = state_16284__$1;
(statearr_16316_16610[(2)] = inst_16280);

(statearr_16316_16610[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16600,c__15748__auto___16604,G__16269_16601,G__16269_16602__$1,n__8412__auto___16599,jobs,results,process,async))
;
return ((function (__16600,switch__15115__auto__,c__15748__auto___16604,G__16269_16601,G__16269_16602__$1,n__8412__auto___16599,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____0 = (function (){
var statearr_16320 = [null,null,null,null,null,null,null];
(statearr_16320[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__);

(statearr_16320[(1)] = (1));

return statearr_16320;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____1 = (function (state_16284){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_16284);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e16321){if((e16321 instanceof Object)){
var ex__15119__auto__ = e16321;
var statearr_16322_16611 = state_16284;
(statearr_16322_16611[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16284);

return cljs.core.cst$kw$recur;
} else {
throw e16321;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__16612 = state_16284;
state_16284 = G__16612;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__ = function(state_16284){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____1.call(this,state_16284);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__;
})()
;})(__16600,switch__15115__auto__,c__15748__auto___16604,G__16269_16601,G__16269_16602__$1,n__8412__auto___16599,jobs,results,process,async))
})();
var state__15750__auto__ = (function (){var statearr_16323 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_16323[(6)] = c__15748__auto___16604);

return statearr_16323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(__16600,c__15748__auto___16604,G__16269_16601,G__16269_16602__$1,n__8412__auto___16599,jobs,results,process,async))
);


break;
case "async":
var c__15748__auto___16613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16600,c__15748__auto___16613,G__16269_16601,G__16269_16602__$1,n__8412__auto___16599,jobs,results,process,async){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (__16600,c__15748__auto___16613,G__16269_16601,G__16269_16602__$1,n__8412__auto___16599,jobs,results,process,async){
return (function (state_16342){
var state_val_16343 = (state_16342[(1)]);
if((state_val_16343 === (1))){
var state_16342__$1 = state_16342;
var statearr_16344_16614 = state_16342__$1;
(statearr_16344_16614[(2)] = null);

(statearr_16344_16614[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16343 === (2))){
var state_16342__$1 = state_16342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16342__$1,(4),jobs);
} else {
if((state_val_16343 === (3))){
var inst_16337 = (state_16342[(2)]);
var state_16342__$1 = state_16342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16342__$1,inst_16337);
} else {
if((state_val_16343 === (4))){
var inst_16329 = (state_16342[(2)]);
var inst_16330 = async(inst_16329);
var state_16342__$1 = state_16342;
if(cljs.core.truth_(inst_16330)){
var statearr_16348_16615 = state_16342__$1;
(statearr_16348_16615[(1)] = (5));

} else {
var statearr_16349_16616 = state_16342__$1;
(statearr_16349_16616[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16343 === (5))){
var state_16342__$1 = state_16342;
var statearr_16350_16617 = state_16342__$1;
(statearr_16350_16617[(2)] = null);

(statearr_16350_16617[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16343 === (6))){
var state_16342__$1 = state_16342;
var statearr_16351_16618 = state_16342__$1;
(statearr_16351_16618[(2)] = null);

(statearr_16351_16618[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16343 === (7))){
var inst_16335 = (state_16342[(2)]);
var state_16342__$1 = state_16342;
var statearr_16352_16619 = state_16342__$1;
(statearr_16352_16619[(2)] = inst_16335);

(statearr_16352_16619[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16600,c__15748__auto___16613,G__16269_16601,G__16269_16602__$1,n__8412__auto___16599,jobs,results,process,async))
;
return ((function (__16600,switch__15115__auto__,c__15748__auto___16613,G__16269_16601,G__16269_16602__$1,n__8412__auto___16599,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____0 = (function (){
var statearr_16355 = [null,null,null,null,null,null,null];
(statearr_16355[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__);

(statearr_16355[(1)] = (1));

return statearr_16355;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____1 = (function (state_16342){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_16342);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e16357){if((e16357 instanceof Object)){
var ex__15119__auto__ = e16357;
var statearr_16358_16620 = state_16342;
(statearr_16358_16620[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16342);

return cljs.core.cst$kw$recur;
} else {
throw e16357;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__16621 = state_16342;
state_16342 = G__16621;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__ = function(state_16342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____1.call(this,state_16342);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__;
})()
;})(__16600,switch__15115__auto__,c__15748__auto___16613,G__16269_16601,G__16269_16602__$1,n__8412__auto___16599,jobs,results,process,async))
})();
var state__15750__auto__ = (function (){var statearr_16360 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_16360[(6)] = c__15748__auto___16613);

return statearr_16360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(__16600,c__15748__auto___16613,G__16269_16601,G__16269_16602__$1,n__8412__auto___16599,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16269_16602__$1)].join('')));

}

var G__16622 = (__16600 + (1));
__16600 = G__16622;
continue;
} else {
}
break;
}

var c__15748__auto___16623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto___16623,jobs,results,process,async){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto___16623,jobs,results,process,async){
return (function (state_16395){
var state_val_16396 = (state_16395[(1)]);
if((state_val_16396 === (1))){
var state_16395__$1 = state_16395;
var statearr_16402_16624 = state_16395__$1;
(statearr_16402_16624[(2)] = null);

(statearr_16402_16624[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (2))){
var state_16395__$1 = state_16395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16395__$1,(4),from);
} else {
if((state_val_16396 === (3))){
var inst_16393 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16395__$1,inst_16393);
} else {
if((state_val_16396 === (4))){
var inst_16369 = (state_16395[(7)]);
var inst_16369__$1 = (state_16395[(2)]);
var inst_16370 = (inst_16369__$1 == null);
var state_16395__$1 = (function (){var statearr_16414 = state_16395;
(statearr_16414[(7)] = inst_16369__$1);

return statearr_16414;
})();
if(cljs.core.truth_(inst_16370)){
var statearr_16415_16625 = state_16395__$1;
(statearr_16415_16625[(1)] = (5));

} else {
var statearr_16419_16626 = state_16395__$1;
(statearr_16419_16626[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (5))){
var inst_16372 = cljs.core.async.close_BANG_(jobs);
var state_16395__$1 = state_16395;
var statearr_16422_16627 = state_16395__$1;
(statearr_16422_16627[(2)] = inst_16372);

(statearr_16422_16627[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (6))){
var inst_16377 = (state_16395[(8)]);
var inst_16369 = (state_16395[(7)]);
var inst_16377__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16378 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16383 = [inst_16369,inst_16377__$1];
var inst_16384 = (new cljs.core.PersistentVector(null,2,(5),inst_16378,inst_16383,null));
var state_16395__$1 = (function (){var statearr_16423 = state_16395;
(statearr_16423[(8)] = inst_16377__$1);

return statearr_16423;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16395__$1,(8),jobs,inst_16384);
} else {
if((state_val_16396 === (7))){
var inst_16391 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
var statearr_16428_16628 = state_16395__$1;
(statearr_16428_16628[(2)] = inst_16391);

(statearr_16428_16628[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (8))){
var inst_16377 = (state_16395[(8)]);
var inst_16386 = (state_16395[(2)]);
var state_16395__$1 = (function (){var statearr_16433 = state_16395;
(statearr_16433[(9)] = inst_16386);

return statearr_16433;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16395__$1,(9),results,inst_16377);
} else {
if((state_val_16396 === (9))){
var inst_16388 = (state_16395[(2)]);
var state_16395__$1 = (function (){var statearr_16437 = state_16395;
(statearr_16437[(10)] = inst_16388);

return statearr_16437;
})();
var statearr_16442_16629 = state_16395__$1;
(statearr_16442_16629[(2)] = null);

(statearr_16442_16629[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__15748__auto___16623,jobs,results,process,async))
;
return ((function (switch__15115__auto__,c__15748__auto___16623,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____0 = (function (){
var statearr_16446 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__);

(statearr_16446[(1)] = (1));

return statearr_16446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____1 = (function (state_16395){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_16395);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e16451){if((e16451 instanceof Object)){
var ex__15119__auto__ = e16451;
var statearr_16452_16630 = state_16395;
(statearr_16452_16630[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16395);

return cljs.core.cst$kw$recur;
} else {
throw e16451;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__16631 = state_16395;
state_16395 = G__16631;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__ = function(state_16395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____1.call(this,state_16395);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto___16623,jobs,results,process,async))
})();
var state__15750__auto__ = (function (){var statearr_16456 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_16456[(6)] = c__15748__auto___16623);

return statearr_16456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto___16623,jobs,results,process,async))
);


var c__15748__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto__,jobs,results,process,async){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto__,jobs,results,process,async){
return (function (state_16507){
var state_val_16508 = (state_16507[(1)]);
if((state_val_16508 === (7))){
var inst_16499 = (state_16507[(2)]);
var state_16507__$1 = state_16507;
var statearr_16514_16632 = state_16507__$1;
(statearr_16514_16632[(2)] = inst_16499);

(statearr_16514_16632[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (20))){
var state_16507__$1 = state_16507;
var statearr_16515_16633 = state_16507__$1;
(statearr_16515_16633[(2)] = null);

(statearr_16515_16633[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (1))){
var state_16507__$1 = state_16507;
var statearr_16516_16634 = state_16507__$1;
(statearr_16516_16634[(2)] = null);

(statearr_16516_16634[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (4))){
var inst_16461 = (state_16507[(7)]);
var inst_16461__$1 = (state_16507[(2)]);
var inst_16462 = (inst_16461__$1 == null);
var state_16507__$1 = (function (){var statearr_16521 = state_16507;
(statearr_16521[(7)] = inst_16461__$1);

return statearr_16521;
})();
if(cljs.core.truth_(inst_16462)){
var statearr_16526_16635 = state_16507__$1;
(statearr_16526_16635[(1)] = (5));

} else {
var statearr_16527_16636 = state_16507__$1;
(statearr_16527_16636[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (15))){
var inst_16478 = (state_16507[(8)]);
var state_16507__$1 = state_16507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16507__$1,(18),to,inst_16478);
} else {
if((state_val_16508 === (21))){
var inst_16493 = (state_16507[(2)]);
var state_16507__$1 = state_16507;
var statearr_16528_16637 = state_16507__$1;
(statearr_16528_16637[(2)] = inst_16493);

(statearr_16528_16637[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (13))){
var inst_16495 = (state_16507[(2)]);
var state_16507__$1 = (function (){var statearr_16529 = state_16507;
(statearr_16529[(9)] = inst_16495);

return statearr_16529;
})();
var statearr_16532_16638 = state_16507__$1;
(statearr_16532_16638[(2)] = null);

(statearr_16532_16638[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (6))){
var inst_16461 = (state_16507[(7)]);
var state_16507__$1 = state_16507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16507__$1,(11),inst_16461);
} else {
if((state_val_16508 === (17))){
var inst_16487 = (state_16507[(2)]);
var state_16507__$1 = state_16507;
if(cljs.core.truth_(inst_16487)){
var statearr_16533_16639 = state_16507__$1;
(statearr_16533_16639[(1)] = (19));

} else {
var statearr_16534_16640 = state_16507__$1;
(statearr_16534_16640[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (3))){
var inst_16501 = (state_16507[(2)]);
var state_16507__$1 = state_16507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16507__$1,inst_16501);
} else {
if((state_val_16508 === (12))){
var inst_16471 = (state_16507[(10)]);
var state_16507__$1 = state_16507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16507__$1,(14),inst_16471);
} else {
if((state_val_16508 === (2))){
var state_16507__$1 = state_16507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16507__$1,(4),results);
} else {
if((state_val_16508 === (19))){
var state_16507__$1 = state_16507;
var statearr_16542_16641 = state_16507__$1;
(statearr_16542_16641[(2)] = null);

(statearr_16542_16641[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (11))){
var inst_16471 = (state_16507[(2)]);
var state_16507__$1 = (function (){var statearr_16546 = state_16507;
(statearr_16546[(10)] = inst_16471);

return statearr_16546;
})();
var statearr_16547_16642 = state_16507__$1;
(statearr_16547_16642[(2)] = null);

(statearr_16547_16642[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (9))){
var state_16507__$1 = state_16507;
var statearr_16548_16643 = state_16507__$1;
(statearr_16548_16643[(2)] = null);

(statearr_16548_16643[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (5))){
var state_16507__$1 = state_16507;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16552_16644 = state_16507__$1;
(statearr_16552_16644[(1)] = (8));

} else {
var statearr_16553_16645 = state_16507__$1;
(statearr_16553_16645[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (14))){
var inst_16480 = (state_16507[(11)]);
var inst_16478 = (state_16507[(8)]);
var inst_16478__$1 = (state_16507[(2)]);
var inst_16479 = (inst_16478__$1 == null);
var inst_16480__$1 = cljs.core.not(inst_16479);
var state_16507__$1 = (function (){var statearr_16554 = state_16507;
(statearr_16554[(11)] = inst_16480__$1);

(statearr_16554[(8)] = inst_16478__$1);

return statearr_16554;
})();
if(inst_16480__$1){
var statearr_16555_16646 = state_16507__$1;
(statearr_16555_16646[(1)] = (15));

} else {
var statearr_16556_16647 = state_16507__$1;
(statearr_16556_16647[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (16))){
var inst_16480 = (state_16507[(11)]);
var state_16507__$1 = state_16507;
var statearr_16559_16648 = state_16507__$1;
(statearr_16559_16648[(2)] = inst_16480);

(statearr_16559_16648[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (10))){
var inst_16468 = (state_16507[(2)]);
var state_16507__$1 = state_16507;
var statearr_16561_16649 = state_16507__$1;
(statearr_16561_16649[(2)] = inst_16468);

(statearr_16561_16649[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (18))){
var inst_16484 = (state_16507[(2)]);
var state_16507__$1 = state_16507;
var statearr_16562_16650 = state_16507__$1;
(statearr_16562_16650[(2)] = inst_16484);

(statearr_16562_16650[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (8))){
var inst_16465 = cljs.core.async.close_BANG_(to);
var state_16507__$1 = state_16507;
var statearr_16566_16651 = state_16507__$1;
(statearr_16566_16651[(2)] = inst_16465);

(statearr_16566_16651[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15748__auto__,jobs,results,process,async))
;
return ((function (switch__15115__auto__,c__15748__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____0 = (function (){
var statearr_16571 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16571[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__);

(statearr_16571[(1)] = (1));

return statearr_16571;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____1 = (function (state_16507){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_16507);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e16572){if((e16572 instanceof Object)){
var ex__15119__auto__ = e16572;
var statearr_16573_16652 = state_16507;
(statearr_16573_16652[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16507);

return cljs.core.cst$kw$recur;
} else {
throw e16572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__16653 = state_16507;
state_16507 = G__16653;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__ = function(state_16507){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____1.call(this,state_16507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto__,jobs,results,process,async))
})();
var state__15750__auto__ = (function (){var statearr_16577 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_16577[(6)] = c__15748__auto__);

return statearr_16577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto__,jobs,results,process,async))
);

return c__15748__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16655 = arguments.length;
switch (G__16655) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16658 = arguments.length;
switch (G__16658) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16661 = arguments.length;
switch (G__16661) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15748__auto___16710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto___16710,tc,fc){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto___16710,tc,fc){
return (function (state_16687){
var state_val_16688 = (state_16687[(1)]);
if((state_val_16688 === (7))){
var inst_16683 = (state_16687[(2)]);
var state_16687__$1 = state_16687;
var statearr_16689_16711 = state_16687__$1;
(statearr_16689_16711[(2)] = inst_16683);

(statearr_16689_16711[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16688 === (1))){
var state_16687__$1 = state_16687;
var statearr_16690_16712 = state_16687__$1;
(statearr_16690_16712[(2)] = null);

(statearr_16690_16712[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16688 === (4))){
var inst_16664 = (state_16687[(7)]);
var inst_16664__$1 = (state_16687[(2)]);
var inst_16665 = (inst_16664__$1 == null);
var state_16687__$1 = (function (){var statearr_16691 = state_16687;
(statearr_16691[(7)] = inst_16664__$1);

return statearr_16691;
})();
if(cljs.core.truth_(inst_16665)){
var statearr_16692_16713 = state_16687__$1;
(statearr_16692_16713[(1)] = (5));

} else {
var statearr_16693_16714 = state_16687__$1;
(statearr_16693_16714[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16688 === (13))){
var state_16687__$1 = state_16687;
var statearr_16694_16715 = state_16687__$1;
(statearr_16694_16715[(2)] = null);

(statearr_16694_16715[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16688 === (6))){
var inst_16664 = (state_16687[(7)]);
var inst_16670 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16664) : p.call(null,inst_16664));
var state_16687__$1 = state_16687;
if(cljs.core.truth_(inst_16670)){
var statearr_16695_16716 = state_16687__$1;
(statearr_16695_16716[(1)] = (9));

} else {
var statearr_16696_16717 = state_16687__$1;
(statearr_16696_16717[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16688 === (3))){
var inst_16685 = (state_16687[(2)]);
var state_16687__$1 = state_16687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16687__$1,inst_16685);
} else {
if((state_val_16688 === (12))){
var state_16687__$1 = state_16687;
var statearr_16697_16718 = state_16687__$1;
(statearr_16697_16718[(2)] = null);

(statearr_16697_16718[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16688 === (2))){
var state_16687__$1 = state_16687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16687__$1,(4),ch);
} else {
if((state_val_16688 === (11))){
var inst_16664 = (state_16687[(7)]);
var inst_16674 = (state_16687[(2)]);
var state_16687__$1 = state_16687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16687__$1,(8),inst_16674,inst_16664);
} else {
if((state_val_16688 === (9))){
var state_16687__$1 = state_16687;
var statearr_16698_16719 = state_16687__$1;
(statearr_16698_16719[(2)] = tc);

(statearr_16698_16719[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16688 === (5))){
var inst_16667 = cljs.core.async.close_BANG_(tc);
var inst_16668 = cljs.core.async.close_BANG_(fc);
var state_16687__$1 = (function (){var statearr_16699 = state_16687;
(statearr_16699[(8)] = inst_16667);

return statearr_16699;
})();
var statearr_16700_16720 = state_16687__$1;
(statearr_16700_16720[(2)] = inst_16668);

(statearr_16700_16720[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16688 === (14))){
var inst_16681 = (state_16687[(2)]);
var state_16687__$1 = state_16687;
var statearr_16701_16721 = state_16687__$1;
(statearr_16701_16721[(2)] = inst_16681);

(statearr_16701_16721[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16688 === (10))){
var state_16687__$1 = state_16687;
var statearr_16702_16722 = state_16687__$1;
(statearr_16702_16722[(2)] = fc);

(statearr_16702_16722[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16688 === (8))){
var inst_16676 = (state_16687[(2)]);
var state_16687__$1 = state_16687;
if(cljs.core.truth_(inst_16676)){
var statearr_16703_16723 = state_16687__$1;
(statearr_16703_16723[(1)] = (12));

} else {
var statearr_16704_16724 = state_16687__$1;
(statearr_16704_16724[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15748__auto___16710,tc,fc))
;
return ((function (switch__15115__auto__,c__15748__auto___16710,tc,fc){
return (function() {
var cljs$core$async$state_machine__15116__auto__ = null;
var cljs$core$async$state_machine__15116__auto____0 = (function (){
var statearr_16705 = [null,null,null,null,null,null,null,null,null];
(statearr_16705[(0)] = cljs$core$async$state_machine__15116__auto__);

(statearr_16705[(1)] = (1));

return statearr_16705;
});
var cljs$core$async$state_machine__15116__auto____1 = (function (state_16687){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_16687);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e16706){if((e16706 instanceof Object)){
var ex__15119__auto__ = e16706;
var statearr_16707_16725 = state_16687;
(statearr_16707_16725[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16687);

return cljs.core.cst$kw$recur;
} else {
throw e16706;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__16726 = state_16687;
state_16687 = G__16726;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$state_machine__15116__auto__ = function(state_16687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15116__auto____1.call(this,state_16687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15116__auto____0;
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15116__auto____1;
return cljs$core$async$state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto___16710,tc,fc))
})();
var state__15750__auto__ = (function (){var statearr_16708 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_16708[(6)] = c__15748__auto___16710);

return statearr_16708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto___16710,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15748__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto__){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto__){
return (function (state_16747){
var state_val_16748 = (state_16747[(1)]);
if((state_val_16748 === (7))){
var inst_16743 = (state_16747[(2)]);
var state_16747__$1 = state_16747;
var statearr_16749_16767 = state_16747__$1;
(statearr_16749_16767[(2)] = inst_16743);

(statearr_16749_16767[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16748 === (1))){
var inst_16727 = init;
var state_16747__$1 = (function (){var statearr_16750 = state_16747;
(statearr_16750[(7)] = inst_16727);

return statearr_16750;
})();
var statearr_16751_16768 = state_16747__$1;
(statearr_16751_16768[(2)] = null);

(statearr_16751_16768[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16748 === (4))){
var inst_16730 = (state_16747[(8)]);
var inst_16730__$1 = (state_16747[(2)]);
var inst_16731 = (inst_16730__$1 == null);
var state_16747__$1 = (function (){var statearr_16752 = state_16747;
(statearr_16752[(8)] = inst_16730__$1);

return statearr_16752;
})();
if(cljs.core.truth_(inst_16731)){
var statearr_16753_16769 = state_16747__$1;
(statearr_16753_16769[(1)] = (5));

} else {
var statearr_16754_16770 = state_16747__$1;
(statearr_16754_16770[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16748 === (6))){
var inst_16727 = (state_16747[(7)]);
var inst_16734 = (state_16747[(9)]);
var inst_16730 = (state_16747[(8)]);
var inst_16734__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16727,inst_16730) : f.call(null,inst_16727,inst_16730));
var inst_16735 = cljs.core.reduced_QMARK_(inst_16734__$1);
var state_16747__$1 = (function (){var statearr_16755 = state_16747;
(statearr_16755[(9)] = inst_16734__$1);

return statearr_16755;
})();
if(inst_16735){
var statearr_16756_16771 = state_16747__$1;
(statearr_16756_16771[(1)] = (8));

} else {
var statearr_16757_16772 = state_16747__$1;
(statearr_16757_16772[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16748 === (3))){
var inst_16745 = (state_16747[(2)]);
var state_16747__$1 = state_16747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16747__$1,inst_16745);
} else {
if((state_val_16748 === (2))){
var state_16747__$1 = state_16747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16747__$1,(4),ch);
} else {
if((state_val_16748 === (9))){
var inst_16734 = (state_16747[(9)]);
var inst_16727 = inst_16734;
var state_16747__$1 = (function (){var statearr_16758 = state_16747;
(statearr_16758[(7)] = inst_16727);

return statearr_16758;
})();
var statearr_16759_16773 = state_16747__$1;
(statearr_16759_16773[(2)] = null);

(statearr_16759_16773[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16748 === (5))){
var inst_16727 = (state_16747[(7)]);
var state_16747__$1 = state_16747;
var statearr_16760_16774 = state_16747__$1;
(statearr_16760_16774[(2)] = inst_16727);

(statearr_16760_16774[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16748 === (10))){
var inst_16741 = (state_16747[(2)]);
var state_16747__$1 = state_16747;
var statearr_16761_16775 = state_16747__$1;
(statearr_16761_16775[(2)] = inst_16741);

(statearr_16761_16775[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16748 === (8))){
var inst_16734 = (state_16747[(9)]);
var inst_16737 = cljs.core.deref(inst_16734);
var state_16747__$1 = state_16747;
var statearr_16762_16776 = state_16747__$1;
(statearr_16762_16776[(2)] = inst_16737);

(statearr_16762_16776[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__15748__auto__))
;
return ((function (switch__15115__auto__,c__15748__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15116__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15116__auto____0 = (function (){
var statearr_16763 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16763[(0)] = cljs$core$async$reduce_$_state_machine__15116__auto__);

(statearr_16763[(1)] = (1));

return statearr_16763;
});
var cljs$core$async$reduce_$_state_machine__15116__auto____1 = (function (state_16747){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_16747);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e16764){if((e16764 instanceof Object)){
var ex__15119__auto__ = e16764;
var statearr_16765_16777 = state_16747;
(statearr_16765_16777[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16747);

return cljs.core.cst$kw$recur;
} else {
throw e16764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__16778 = state_16747;
state_16747 = G__16778;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15116__auto__ = function(state_16747){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15116__auto____1.call(this,state_16747);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15116__auto____0;
cljs$core$async$reduce_$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15116__auto____1;
return cljs$core$async$reduce_$_state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto__))
})();
var state__15750__auto__ = (function (){var statearr_16766 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_16766[(6)] = c__15748__auto__);

return statearr_16766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto__))
);

return c__15748__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15748__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto__,f__$1){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto__,f__$1){
return (function (state_16784){
var state_val_16785 = (state_16784[(1)]);
if((state_val_16785 === (1))){
var inst_16779 = cljs.core.async.reduce(f__$1,init,ch);
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16784__$1,(2),inst_16779);
} else {
if((state_val_16785 === (2))){
var inst_16781 = (state_16784[(2)]);
var inst_16782 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16781) : f__$1.call(null,inst_16781));
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16784__$1,inst_16782);
} else {
return null;
}
}
});})(c__15748__auto__,f__$1))
;
return ((function (switch__15115__auto__,c__15748__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15116__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15116__auto____0 = (function (){
var statearr_16786 = [null,null,null,null,null,null,null];
(statearr_16786[(0)] = cljs$core$async$transduce_$_state_machine__15116__auto__);

(statearr_16786[(1)] = (1));

return statearr_16786;
});
var cljs$core$async$transduce_$_state_machine__15116__auto____1 = (function (state_16784){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_16784);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e16787){if((e16787 instanceof Object)){
var ex__15119__auto__ = e16787;
var statearr_16788_16790 = state_16784;
(statearr_16788_16790[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16784);

return cljs.core.cst$kw$recur;
} else {
throw e16787;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__16791 = state_16784;
state_16784 = G__16791;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15116__auto__ = function(state_16784){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15116__auto____1.call(this,state_16784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15116__auto____0;
cljs$core$async$transduce_$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15116__auto____1;
return cljs$core$async$transduce_$_state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto__,f__$1))
})();
var state__15750__auto__ = (function (){var statearr_16789 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_16789[(6)] = c__15748__auto__);

return statearr_16789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto__,f__$1))
);

return c__15748__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16793 = arguments.length;
switch (G__16793) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15748__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto__){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto__){
return (function (state_16818){
var state_val_16819 = (state_16818[(1)]);
if((state_val_16819 === (7))){
var inst_16800 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
var statearr_16820_16841 = state_16818__$1;
(statearr_16820_16841[(2)] = inst_16800);

(statearr_16820_16841[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16819 === (1))){
var inst_16794 = cljs.core.seq(coll);
var inst_16795 = inst_16794;
var state_16818__$1 = (function (){var statearr_16821 = state_16818;
(statearr_16821[(7)] = inst_16795);

return statearr_16821;
})();
var statearr_16822_16842 = state_16818__$1;
(statearr_16822_16842[(2)] = null);

(statearr_16822_16842[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16819 === (4))){
var inst_16795 = (state_16818[(7)]);
var inst_16798 = cljs.core.first(inst_16795);
var state_16818__$1 = state_16818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16818__$1,(7),ch,inst_16798);
} else {
if((state_val_16819 === (13))){
var inst_16812 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
var statearr_16823_16843 = state_16818__$1;
(statearr_16823_16843[(2)] = inst_16812);

(statearr_16823_16843[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16819 === (6))){
var inst_16803 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
if(cljs.core.truth_(inst_16803)){
var statearr_16824_16844 = state_16818__$1;
(statearr_16824_16844[(1)] = (8));

} else {
var statearr_16825_16845 = state_16818__$1;
(statearr_16825_16845[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16819 === (3))){
var inst_16816 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16818__$1,inst_16816);
} else {
if((state_val_16819 === (12))){
var state_16818__$1 = state_16818;
var statearr_16826_16846 = state_16818__$1;
(statearr_16826_16846[(2)] = null);

(statearr_16826_16846[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16819 === (2))){
var inst_16795 = (state_16818[(7)]);
var state_16818__$1 = state_16818;
if(cljs.core.truth_(inst_16795)){
var statearr_16827_16847 = state_16818__$1;
(statearr_16827_16847[(1)] = (4));

} else {
var statearr_16828_16848 = state_16818__$1;
(statearr_16828_16848[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16819 === (11))){
var inst_16809 = cljs.core.async.close_BANG_(ch);
var state_16818__$1 = state_16818;
var statearr_16829_16849 = state_16818__$1;
(statearr_16829_16849[(2)] = inst_16809);

(statearr_16829_16849[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16819 === (9))){
var state_16818__$1 = state_16818;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16830_16850 = state_16818__$1;
(statearr_16830_16850[(1)] = (11));

} else {
var statearr_16831_16851 = state_16818__$1;
(statearr_16831_16851[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16819 === (5))){
var inst_16795 = (state_16818[(7)]);
var state_16818__$1 = state_16818;
var statearr_16832_16852 = state_16818__$1;
(statearr_16832_16852[(2)] = inst_16795);

(statearr_16832_16852[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16819 === (10))){
var inst_16814 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
var statearr_16833_16853 = state_16818__$1;
(statearr_16833_16853[(2)] = inst_16814);

(statearr_16833_16853[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16819 === (8))){
var inst_16795 = (state_16818[(7)]);
var inst_16805 = cljs.core.next(inst_16795);
var inst_16795__$1 = inst_16805;
var state_16818__$1 = (function (){var statearr_16834 = state_16818;
(statearr_16834[(7)] = inst_16795__$1);

return statearr_16834;
})();
var statearr_16835_16854 = state_16818__$1;
(statearr_16835_16854[(2)] = null);

(statearr_16835_16854[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15748__auto__))
;
return ((function (switch__15115__auto__,c__15748__auto__){
return (function() {
var cljs$core$async$state_machine__15116__auto__ = null;
var cljs$core$async$state_machine__15116__auto____0 = (function (){
var statearr_16836 = [null,null,null,null,null,null,null,null];
(statearr_16836[(0)] = cljs$core$async$state_machine__15116__auto__);

(statearr_16836[(1)] = (1));

return statearr_16836;
});
var cljs$core$async$state_machine__15116__auto____1 = (function (state_16818){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_16818);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e16837){if((e16837 instanceof Object)){
var ex__15119__auto__ = e16837;
var statearr_16838_16855 = state_16818;
(statearr_16838_16855[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16818);

return cljs.core.cst$kw$recur;
} else {
throw e16837;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__16856 = state_16818;
state_16818 = G__16856;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$state_machine__15116__auto__ = function(state_16818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15116__auto____1.call(this,state_16818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15116__auto____0;
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15116__auto____1;
return cljs$core$async$state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto__))
})();
var state__15750__auto__ = (function (){var statearr_16839 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_16839[(6)] = c__15748__auto__);

return statearr_16839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto__))
);

return c__15748__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__8157__auto__ = (((_ == null))?null:_);
var m__8158__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8157__auto__)]);
if(!((m__8158__auto__ == null))){
return (m__8158__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8158__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8158__auto__.call(null,_));
} else {
var m__8158__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8158__auto____$1 == null))){
return (m__8158__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8158__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8158__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__8157__auto__ = (((m == null))?null:m);
var m__8158__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8157__auto__)]);
if(!((m__8158__auto__ == null))){
return (m__8158__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8158__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8158__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__8158__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8158__auto____$1 == null))){
return (m__8158__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8158__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8158__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8157__auto__ = (((m == null))?null:m);
var m__8158__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8157__auto__)]);
if(!((m__8158__auto__ == null))){
return (m__8158__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8158__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8158__auto__.call(null,m,ch));
} else {
var m__8158__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8158__auto____$1 == null))){
return (m__8158__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8158__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8158__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8157__auto__ = (((m == null))?null:m);
var m__8158__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8157__auto__)]);
if(!((m__8158__auto__ == null))){
return (m__8158__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8158__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8158__auto__.call(null,m));
} else {
var m__8158__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8158__auto____$1 == null))){
return (m__8158__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8158__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8158__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16857 = (function (ch,cs,meta16858){
this.ch = ch;
this.cs = cs;
this.meta16858 = meta16858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16859,meta16858__$1){
var self__ = this;
var _16859__$1 = this;
return (new cljs.core.async.t_cljs$core$async16857(self__.ch,self__.cs,meta16858__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16859){
var self__ = this;
var _16859__$1 = this;
return self__.meta16858;
});})(cs))
;

cljs.core.async.t_cljs$core$async16857.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16857.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16857.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16857.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16857.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16857.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16857.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16858], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16857";

cljs.core.async.t_cljs$core$async16857.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cljs.core.async/t_cljs$core$async16857");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16857 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16857(ch__$1,cs__$1,meta16858){
return (new cljs.core.async.t_cljs$core$async16857(ch__$1,cs__$1,meta16858));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16857(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15748__auto___17079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto___17079,cs,m,dchan,dctr,done){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto___17079,cs,m,dchan,dctr,done){
return (function (state_16994){
var state_val_16995 = (state_16994[(1)]);
if((state_val_16995 === (7))){
var inst_16990 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
var statearr_16996_17080 = state_16994__$1;
(statearr_16996_17080[(2)] = inst_16990);

(statearr_16996_17080[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (20))){
var inst_16893 = (state_16994[(7)]);
var inst_16905 = cljs.core.first(inst_16893);
var inst_16906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16905,(0),null);
var inst_16907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16905,(1),null);
var state_16994__$1 = (function (){var statearr_16997 = state_16994;
(statearr_16997[(8)] = inst_16906);

return statearr_16997;
})();
if(cljs.core.truth_(inst_16907)){
var statearr_16998_17081 = state_16994__$1;
(statearr_16998_17081[(1)] = (22));

} else {
var statearr_16999_17082 = state_16994__$1;
(statearr_16999_17082[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (27))){
var inst_16862 = (state_16994[(9)]);
var inst_16942 = (state_16994[(10)]);
var inst_16937 = (state_16994[(11)]);
var inst_16935 = (state_16994[(12)]);
var inst_16942__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16935,inst_16937);
var inst_16943 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16942__$1,inst_16862,done);
var state_16994__$1 = (function (){var statearr_17000 = state_16994;
(statearr_17000[(10)] = inst_16942__$1);

return statearr_17000;
})();
if(cljs.core.truth_(inst_16943)){
var statearr_17001_17083 = state_16994__$1;
(statearr_17001_17083[(1)] = (30));

} else {
var statearr_17002_17084 = state_16994__$1;
(statearr_17002_17084[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (1))){
var state_16994__$1 = state_16994;
var statearr_17003_17085 = state_16994__$1;
(statearr_17003_17085[(2)] = null);

(statearr_17003_17085[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (24))){
var inst_16893 = (state_16994[(7)]);
var inst_16912 = (state_16994[(2)]);
var inst_16913 = cljs.core.next(inst_16893);
var inst_16871 = inst_16913;
var inst_16872 = null;
var inst_16873 = (0);
var inst_16874 = (0);
var state_16994__$1 = (function (){var statearr_17004 = state_16994;
(statearr_17004[(13)] = inst_16871);

(statearr_17004[(14)] = inst_16873);

(statearr_17004[(15)] = inst_16872);

(statearr_17004[(16)] = inst_16912);

(statearr_17004[(17)] = inst_16874);

return statearr_17004;
})();
var statearr_17005_17086 = state_16994__$1;
(statearr_17005_17086[(2)] = null);

(statearr_17005_17086[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (39))){
var state_16994__$1 = state_16994;
var statearr_17009_17087 = state_16994__$1;
(statearr_17009_17087[(2)] = null);

(statearr_17009_17087[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (4))){
var inst_16862 = (state_16994[(9)]);
var inst_16862__$1 = (state_16994[(2)]);
var inst_16863 = (inst_16862__$1 == null);
var state_16994__$1 = (function (){var statearr_17010 = state_16994;
(statearr_17010[(9)] = inst_16862__$1);

return statearr_17010;
})();
if(cljs.core.truth_(inst_16863)){
var statearr_17011_17088 = state_16994__$1;
(statearr_17011_17088[(1)] = (5));

} else {
var statearr_17012_17089 = state_16994__$1;
(statearr_17012_17089[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (15))){
var inst_16871 = (state_16994[(13)]);
var inst_16873 = (state_16994[(14)]);
var inst_16872 = (state_16994[(15)]);
var inst_16874 = (state_16994[(17)]);
var inst_16889 = (state_16994[(2)]);
var inst_16890 = (inst_16874 + (1));
var tmp17006 = inst_16871;
var tmp17007 = inst_16873;
var tmp17008 = inst_16872;
var inst_16871__$1 = tmp17006;
var inst_16872__$1 = tmp17008;
var inst_16873__$1 = tmp17007;
var inst_16874__$1 = inst_16890;
var state_16994__$1 = (function (){var statearr_17013 = state_16994;
(statearr_17013[(18)] = inst_16889);

(statearr_17013[(13)] = inst_16871__$1);

(statearr_17013[(14)] = inst_16873__$1);

(statearr_17013[(15)] = inst_16872__$1);

(statearr_17013[(17)] = inst_16874__$1);

return statearr_17013;
})();
var statearr_17014_17090 = state_16994__$1;
(statearr_17014_17090[(2)] = null);

(statearr_17014_17090[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (21))){
var inst_16916 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
var statearr_17018_17091 = state_16994__$1;
(statearr_17018_17091[(2)] = inst_16916);

(statearr_17018_17091[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (31))){
var inst_16942 = (state_16994[(10)]);
var inst_16946 = done(null);
var inst_16947 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16942);
var state_16994__$1 = (function (){var statearr_17019 = state_16994;
(statearr_17019[(19)] = inst_16946);

return statearr_17019;
})();
var statearr_17020_17092 = state_16994__$1;
(statearr_17020_17092[(2)] = inst_16947);

(statearr_17020_17092[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (32))){
var inst_16936 = (state_16994[(20)]);
var inst_16937 = (state_16994[(11)]);
var inst_16935 = (state_16994[(12)]);
var inst_16934 = (state_16994[(21)]);
var inst_16949 = (state_16994[(2)]);
var inst_16950 = (inst_16937 + (1));
var tmp17015 = inst_16936;
var tmp17016 = inst_16935;
var tmp17017 = inst_16934;
var inst_16934__$1 = tmp17017;
var inst_16935__$1 = tmp17016;
var inst_16936__$1 = tmp17015;
var inst_16937__$1 = inst_16950;
var state_16994__$1 = (function (){var statearr_17021 = state_16994;
(statearr_17021[(20)] = inst_16936__$1);

(statearr_17021[(11)] = inst_16937__$1);

(statearr_17021[(12)] = inst_16935__$1);

(statearr_17021[(22)] = inst_16949);

(statearr_17021[(21)] = inst_16934__$1);

return statearr_17021;
})();
var statearr_17022_17093 = state_16994__$1;
(statearr_17022_17093[(2)] = null);

(statearr_17022_17093[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (40))){
var inst_16962 = (state_16994[(23)]);
var inst_16966 = done(null);
var inst_16967 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16962);
var state_16994__$1 = (function (){var statearr_17023 = state_16994;
(statearr_17023[(24)] = inst_16966);

return statearr_17023;
})();
var statearr_17024_17094 = state_16994__$1;
(statearr_17024_17094[(2)] = inst_16967);

(statearr_17024_17094[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (33))){
var inst_16953 = (state_16994[(25)]);
var inst_16955 = cljs.core.chunked_seq_QMARK_(inst_16953);
var state_16994__$1 = state_16994;
if(inst_16955){
var statearr_17025_17095 = state_16994__$1;
(statearr_17025_17095[(1)] = (36));

} else {
var statearr_17026_17096 = state_16994__$1;
(statearr_17026_17096[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (13))){
var inst_16883 = (state_16994[(26)]);
var inst_16886 = cljs.core.async.close_BANG_(inst_16883);
var state_16994__$1 = state_16994;
var statearr_17027_17097 = state_16994__$1;
(statearr_17027_17097[(2)] = inst_16886);

(statearr_17027_17097[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (22))){
var inst_16906 = (state_16994[(8)]);
var inst_16909 = cljs.core.async.close_BANG_(inst_16906);
var state_16994__$1 = state_16994;
var statearr_17028_17098 = state_16994__$1;
(statearr_17028_17098[(2)] = inst_16909);

(statearr_17028_17098[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (36))){
var inst_16953 = (state_16994[(25)]);
var inst_16957 = cljs.core.chunk_first(inst_16953);
var inst_16958 = cljs.core.chunk_rest(inst_16953);
var inst_16959 = cljs.core.count(inst_16957);
var inst_16934 = inst_16958;
var inst_16935 = inst_16957;
var inst_16936 = inst_16959;
var inst_16937 = (0);
var state_16994__$1 = (function (){var statearr_17029 = state_16994;
(statearr_17029[(20)] = inst_16936);

(statearr_17029[(11)] = inst_16937);

(statearr_17029[(12)] = inst_16935);

(statearr_17029[(21)] = inst_16934);

return statearr_17029;
})();
var statearr_17030_17099 = state_16994__$1;
(statearr_17030_17099[(2)] = null);

(statearr_17030_17099[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (41))){
var inst_16953 = (state_16994[(25)]);
var inst_16969 = (state_16994[(2)]);
var inst_16970 = cljs.core.next(inst_16953);
var inst_16934 = inst_16970;
var inst_16935 = null;
var inst_16936 = (0);
var inst_16937 = (0);
var state_16994__$1 = (function (){var statearr_17031 = state_16994;
(statearr_17031[(27)] = inst_16969);

(statearr_17031[(20)] = inst_16936);

(statearr_17031[(11)] = inst_16937);

(statearr_17031[(12)] = inst_16935);

(statearr_17031[(21)] = inst_16934);

return statearr_17031;
})();
var statearr_17032_17100 = state_16994__$1;
(statearr_17032_17100[(2)] = null);

(statearr_17032_17100[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (43))){
var state_16994__$1 = state_16994;
var statearr_17033_17101 = state_16994__$1;
(statearr_17033_17101[(2)] = null);

(statearr_17033_17101[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (29))){
var inst_16978 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
var statearr_17034_17102 = state_16994__$1;
(statearr_17034_17102[(2)] = inst_16978);

(statearr_17034_17102[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (44))){
var inst_16987 = (state_16994[(2)]);
var state_16994__$1 = (function (){var statearr_17035 = state_16994;
(statearr_17035[(28)] = inst_16987);

return statearr_17035;
})();
var statearr_17036_17103 = state_16994__$1;
(statearr_17036_17103[(2)] = null);

(statearr_17036_17103[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (6))){
var inst_16926 = (state_16994[(29)]);
var inst_16925 = cljs.core.deref(cs);
var inst_16926__$1 = cljs.core.keys(inst_16925);
var inst_16927 = cljs.core.count(inst_16926__$1);
var inst_16928 = cljs.core.reset_BANG_(dctr,inst_16927);
var inst_16933 = cljs.core.seq(inst_16926__$1);
var inst_16934 = inst_16933;
var inst_16935 = null;
var inst_16936 = (0);
var inst_16937 = (0);
var state_16994__$1 = (function (){var statearr_17037 = state_16994;
(statearr_17037[(30)] = inst_16928);

(statearr_17037[(29)] = inst_16926__$1);

(statearr_17037[(20)] = inst_16936);

(statearr_17037[(11)] = inst_16937);

(statearr_17037[(12)] = inst_16935);

(statearr_17037[(21)] = inst_16934);

return statearr_17037;
})();
var statearr_17038_17104 = state_16994__$1;
(statearr_17038_17104[(2)] = null);

(statearr_17038_17104[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (28))){
var inst_16953 = (state_16994[(25)]);
var inst_16934 = (state_16994[(21)]);
var inst_16953__$1 = cljs.core.seq(inst_16934);
var state_16994__$1 = (function (){var statearr_17039 = state_16994;
(statearr_17039[(25)] = inst_16953__$1);

return statearr_17039;
})();
if(inst_16953__$1){
var statearr_17040_17105 = state_16994__$1;
(statearr_17040_17105[(1)] = (33));

} else {
var statearr_17041_17106 = state_16994__$1;
(statearr_17041_17106[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (25))){
var inst_16936 = (state_16994[(20)]);
var inst_16937 = (state_16994[(11)]);
var inst_16939 = (inst_16937 < inst_16936);
var inst_16940 = inst_16939;
var state_16994__$1 = state_16994;
if(cljs.core.truth_(inst_16940)){
var statearr_17042_17107 = state_16994__$1;
(statearr_17042_17107[(1)] = (27));

} else {
var statearr_17043_17108 = state_16994__$1;
(statearr_17043_17108[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (34))){
var state_16994__$1 = state_16994;
var statearr_17044_17109 = state_16994__$1;
(statearr_17044_17109[(2)] = null);

(statearr_17044_17109[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (17))){
var state_16994__$1 = state_16994;
var statearr_17045_17110 = state_16994__$1;
(statearr_17045_17110[(2)] = null);

(statearr_17045_17110[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (3))){
var inst_16992 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16994__$1,inst_16992);
} else {
if((state_val_16995 === (12))){
var inst_16921 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
var statearr_17046_17111 = state_16994__$1;
(statearr_17046_17111[(2)] = inst_16921);

(statearr_17046_17111[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (2))){
var state_16994__$1 = state_16994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16994__$1,(4),ch);
} else {
if((state_val_16995 === (23))){
var state_16994__$1 = state_16994;
var statearr_17047_17112 = state_16994__$1;
(statearr_17047_17112[(2)] = null);

(statearr_17047_17112[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (35))){
var inst_16976 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
var statearr_17048_17113 = state_16994__$1;
(statearr_17048_17113[(2)] = inst_16976);

(statearr_17048_17113[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (19))){
var inst_16893 = (state_16994[(7)]);
var inst_16897 = cljs.core.chunk_first(inst_16893);
var inst_16898 = cljs.core.chunk_rest(inst_16893);
var inst_16899 = cljs.core.count(inst_16897);
var inst_16871 = inst_16898;
var inst_16872 = inst_16897;
var inst_16873 = inst_16899;
var inst_16874 = (0);
var state_16994__$1 = (function (){var statearr_17049 = state_16994;
(statearr_17049[(13)] = inst_16871);

(statearr_17049[(14)] = inst_16873);

(statearr_17049[(15)] = inst_16872);

(statearr_17049[(17)] = inst_16874);

return statearr_17049;
})();
var statearr_17050_17114 = state_16994__$1;
(statearr_17050_17114[(2)] = null);

(statearr_17050_17114[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (11))){
var inst_16893 = (state_16994[(7)]);
var inst_16871 = (state_16994[(13)]);
var inst_16893__$1 = cljs.core.seq(inst_16871);
var state_16994__$1 = (function (){var statearr_17051 = state_16994;
(statearr_17051[(7)] = inst_16893__$1);

return statearr_17051;
})();
if(inst_16893__$1){
var statearr_17052_17115 = state_16994__$1;
(statearr_17052_17115[(1)] = (16));

} else {
var statearr_17053_17116 = state_16994__$1;
(statearr_17053_17116[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (9))){
var inst_16923 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
var statearr_17054_17117 = state_16994__$1;
(statearr_17054_17117[(2)] = inst_16923);

(statearr_17054_17117[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (5))){
var inst_16869 = cljs.core.deref(cs);
var inst_16870 = cljs.core.seq(inst_16869);
var inst_16871 = inst_16870;
var inst_16872 = null;
var inst_16873 = (0);
var inst_16874 = (0);
var state_16994__$1 = (function (){var statearr_17055 = state_16994;
(statearr_17055[(13)] = inst_16871);

(statearr_17055[(14)] = inst_16873);

(statearr_17055[(15)] = inst_16872);

(statearr_17055[(17)] = inst_16874);

return statearr_17055;
})();
var statearr_17056_17118 = state_16994__$1;
(statearr_17056_17118[(2)] = null);

(statearr_17056_17118[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (14))){
var state_16994__$1 = state_16994;
var statearr_17057_17119 = state_16994__$1;
(statearr_17057_17119[(2)] = null);

(statearr_17057_17119[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (45))){
var inst_16984 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
var statearr_17058_17120 = state_16994__$1;
(statearr_17058_17120[(2)] = inst_16984);

(statearr_17058_17120[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (26))){
var inst_16926 = (state_16994[(29)]);
var inst_16980 = (state_16994[(2)]);
var inst_16981 = cljs.core.seq(inst_16926);
var state_16994__$1 = (function (){var statearr_17059 = state_16994;
(statearr_17059[(31)] = inst_16980);

return statearr_17059;
})();
if(inst_16981){
var statearr_17060_17121 = state_16994__$1;
(statearr_17060_17121[(1)] = (42));

} else {
var statearr_17061_17122 = state_16994__$1;
(statearr_17061_17122[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (16))){
var inst_16893 = (state_16994[(7)]);
var inst_16895 = cljs.core.chunked_seq_QMARK_(inst_16893);
var state_16994__$1 = state_16994;
if(inst_16895){
var statearr_17062_17123 = state_16994__$1;
(statearr_17062_17123[(1)] = (19));

} else {
var statearr_17063_17124 = state_16994__$1;
(statearr_17063_17124[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (38))){
var inst_16973 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
var statearr_17064_17125 = state_16994__$1;
(statearr_17064_17125[(2)] = inst_16973);

(statearr_17064_17125[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (30))){
var state_16994__$1 = state_16994;
var statearr_17065_17126 = state_16994__$1;
(statearr_17065_17126[(2)] = null);

(statearr_17065_17126[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (10))){
var inst_16872 = (state_16994[(15)]);
var inst_16874 = (state_16994[(17)]);
var inst_16882 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16872,inst_16874);
var inst_16883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16882,(0),null);
var inst_16884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16882,(1),null);
var state_16994__$1 = (function (){var statearr_17066 = state_16994;
(statearr_17066[(26)] = inst_16883);

return statearr_17066;
})();
if(cljs.core.truth_(inst_16884)){
var statearr_17067_17127 = state_16994__$1;
(statearr_17067_17127[(1)] = (13));

} else {
var statearr_17068_17128 = state_16994__$1;
(statearr_17068_17128[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (18))){
var inst_16919 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
var statearr_17069_17129 = state_16994__$1;
(statearr_17069_17129[(2)] = inst_16919);

(statearr_17069_17129[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (42))){
var state_16994__$1 = state_16994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16994__$1,(45),dchan);
} else {
if((state_val_16995 === (37))){
var inst_16862 = (state_16994[(9)]);
var inst_16962 = (state_16994[(23)]);
var inst_16953 = (state_16994[(25)]);
var inst_16962__$1 = cljs.core.first(inst_16953);
var inst_16963 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16962__$1,inst_16862,done);
var state_16994__$1 = (function (){var statearr_17070 = state_16994;
(statearr_17070[(23)] = inst_16962__$1);

return statearr_17070;
})();
if(cljs.core.truth_(inst_16963)){
var statearr_17071_17130 = state_16994__$1;
(statearr_17071_17130[(1)] = (39));

} else {
var statearr_17072_17131 = state_16994__$1;
(statearr_17072_17131[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16995 === (8))){
var inst_16873 = (state_16994[(14)]);
var inst_16874 = (state_16994[(17)]);
var inst_16876 = (inst_16874 < inst_16873);
var inst_16877 = inst_16876;
var state_16994__$1 = state_16994;
if(cljs.core.truth_(inst_16877)){
var statearr_17073_17132 = state_16994__$1;
(statearr_17073_17132[(1)] = (10));

} else {
var statearr_17074_17133 = state_16994__$1;
(statearr_17074_17133[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15748__auto___17079,cs,m,dchan,dctr,done))
;
return ((function (switch__15115__auto__,c__15748__auto___17079,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15116__auto__ = null;
var cljs$core$async$mult_$_state_machine__15116__auto____0 = (function (){
var statearr_17075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17075[(0)] = cljs$core$async$mult_$_state_machine__15116__auto__);

(statearr_17075[(1)] = (1));

return statearr_17075;
});
var cljs$core$async$mult_$_state_machine__15116__auto____1 = (function (state_16994){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_16994);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e17076){if((e17076 instanceof Object)){
var ex__15119__auto__ = e17076;
var statearr_17077_17134 = state_16994;
(statearr_17077_17134[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16994);

return cljs.core.cst$kw$recur;
} else {
throw e17076;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__17135 = state_16994;
state_16994 = G__17135;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15116__auto__ = function(state_16994){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15116__auto____1.call(this,state_16994);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15116__auto____0;
cljs$core$async$mult_$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15116__auto____1;
return cljs$core$async$mult_$_state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto___17079,cs,m,dchan,dctr,done))
})();
var state__15750__auto__ = (function (){var statearr_17078 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_17078[(6)] = c__15748__auto___17079);

return statearr_17078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto___17079,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17137 = arguments.length;
switch (G__17137) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8157__auto__ = (((m == null))?null:m);
var m__8158__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8157__auto__)]);
if(!((m__8158__auto__ == null))){
return (m__8158__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8158__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8158__auto__.call(null,m,ch));
} else {
var m__8158__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8158__auto____$1 == null))){
return (m__8158__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8158__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8158__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8157__auto__ = (((m == null))?null:m);
var m__8158__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8157__auto__)]);
if(!((m__8158__auto__ == null))){
return (m__8158__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8158__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8158__auto__.call(null,m,ch));
} else {
var m__8158__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8158__auto____$1 == null))){
return (m__8158__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8158__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8158__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8157__auto__ = (((m == null))?null:m);
var m__8158__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8157__auto__)]);
if(!((m__8158__auto__ == null))){
return (m__8158__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8158__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8158__auto__.call(null,m));
} else {
var m__8158__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8158__auto____$1 == null))){
return (m__8158__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8158__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8158__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8157__auto__ = (((m == null))?null:m);
var m__8158__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8157__auto__)]);
if(!((m__8158__auto__ == null))){
return (m__8158__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8158__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8158__auto__.call(null,m,state_map));
} else {
var m__8158__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8158__auto____$1 == null))){
return (m__8158__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8158__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8158__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8157__auto__ = (((m == null))?null:m);
var m__8158__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8157__auto__)]);
if(!((m__8158__auto__ == null))){
return (m__8158__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8158__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8158__auto__.call(null,m,mode));
} else {
var m__8158__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8158__auto____$1 == null))){
return (m__8158__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8158__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8158__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8620__auto__ = [];
var len__8613__auto___17149 = arguments.length;
var i__8614__auto___17150 = (0);
while(true){
if((i__8614__auto___17150 < len__8613__auto___17149)){
args__8620__auto__.push((arguments[i__8614__auto___17150]));

var G__17151 = (i__8614__auto___17150 + (1));
i__8614__auto___17150 = G__17151;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((3) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8621__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17143){
var map__17144 = p__17143;
var map__17144__$1 = ((((!((map__17144 == null)))?((((map__17144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17144):map__17144);
var opts = map__17144__$1;
var statearr_17146_17152 = state;
(statearr_17146_17152[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__17144,map__17144__$1,opts){
return (function (val){
var statearr_17147_17153 = state;
(statearr_17147_17153[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17144,map__17144__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_17148_17154 = state;
(statearr_17148_17154[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17139){
var G__17140 = cljs.core.first(seq17139);
var seq17139__$1 = cljs.core.next(seq17139);
var G__17141 = cljs.core.first(seq17139__$1);
var seq17139__$2 = cljs.core.next(seq17139__$1);
var G__17142 = cljs.core.first(seq17139__$2);
var seq17139__$3 = cljs.core.next(seq17139__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17140,G__17141,G__17142,seq17139__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17155 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17155 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17156){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17156 = meta17156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17157,meta17156__$1){
var self__ = this;
var _17157__$1 = this;
return (new cljs.core.async.t_cljs$core$async17155(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17156__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17157){
var self__ = this;
var _17157__$1 = this;
return self__.meta17156;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17155.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17155.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17155.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17155.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17155.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17155.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17155.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17155.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17155.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta17156], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17155.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17155.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17155";

cljs.core.async.t_cljs$core$async17155.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cljs.core.async/t_cljs$core$async17155");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17155 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17155(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17156){
return (new cljs.core.async.t_cljs$core$async17155(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17156));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17155(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15748__auto___17319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto___17319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto___17319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17259){
var state_val_17260 = (state_17259[(1)]);
if((state_val_17260 === (7))){
var inst_17174 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
var statearr_17261_17320 = state_17259__$1;
(statearr_17261_17320[(2)] = inst_17174);

(statearr_17261_17320[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (20))){
var inst_17186 = (state_17259[(7)]);
var state_17259__$1 = state_17259;
var statearr_17262_17321 = state_17259__$1;
(statearr_17262_17321[(2)] = inst_17186);

(statearr_17262_17321[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (27))){
var state_17259__$1 = state_17259;
var statearr_17263_17322 = state_17259__$1;
(statearr_17263_17322[(2)] = null);

(statearr_17263_17322[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (1))){
var inst_17161 = (state_17259[(8)]);
var inst_17161__$1 = calc_state();
var inst_17163 = (inst_17161__$1 == null);
var inst_17164 = cljs.core.not(inst_17163);
var state_17259__$1 = (function (){var statearr_17264 = state_17259;
(statearr_17264[(8)] = inst_17161__$1);

return statearr_17264;
})();
if(inst_17164){
var statearr_17265_17323 = state_17259__$1;
(statearr_17265_17323[(1)] = (2));

} else {
var statearr_17266_17324 = state_17259__$1;
(statearr_17266_17324[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (24))){
var inst_17233 = (state_17259[(9)]);
var inst_17210 = (state_17259[(10)]);
var inst_17219 = (state_17259[(11)]);
var inst_17233__$1 = (inst_17210.cljs$core$IFn$_invoke$arity$1 ? inst_17210.cljs$core$IFn$_invoke$arity$1(inst_17219) : inst_17210.call(null,inst_17219));
var state_17259__$1 = (function (){var statearr_17267 = state_17259;
(statearr_17267[(9)] = inst_17233__$1);

return statearr_17267;
})();
if(cljs.core.truth_(inst_17233__$1)){
var statearr_17268_17325 = state_17259__$1;
(statearr_17268_17325[(1)] = (29));

} else {
var statearr_17269_17326 = state_17259__$1;
(statearr_17269_17326[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (4))){
var inst_17177 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
if(cljs.core.truth_(inst_17177)){
var statearr_17270_17327 = state_17259__$1;
(statearr_17270_17327[(1)] = (8));

} else {
var statearr_17271_17328 = state_17259__$1;
(statearr_17271_17328[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (15))){
var inst_17204 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
if(cljs.core.truth_(inst_17204)){
var statearr_17272_17329 = state_17259__$1;
(statearr_17272_17329[(1)] = (19));

} else {
var statearr_17273_17330 = state_17259__$1;
(statearr_17273_17330[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (21))){
var inst_17209 = (state_17259[(12)]);
var inst_17209__$1 = (state_17259[(2)]);
var inst_17210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17209__$1,cljs.core.cst$kw$solos);
var inst_17211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17209__$1,cljs.core.cst$kw$mutes);
var inst_17212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17209__$1,cljs.core.cst$kw$reads);
var state_17259__$1 = (function (){var statearr_17274 = state_17259;
(statearr_17274[(12)] = inst_17209__$1);

(statearr_17274[(10)] = inst_17210);

(statearr_17274[(13)] = inst_17211);

return statearr_17274;
})();
return cljs.core.async.ioc_alts_BANG_(state_17259__$1,(22),inst_17212);
} else {
if((state_val_17260 === (31))){
var inst_17241 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
if(cljs.core.truth_(inst_17241)){
var statearr_17275_17331 = state_17259__$1;
(statearr_17275_17331[(1)] = (32));

} else {
var statearr_17276_17332 = state_17259__$1;
(statearr_17276_17332[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (32))){
var inst_17218 = (state_17259[(14)]);
var state_17259__$1 = state_17259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17259__$1,(35),out,inst_17218);
} else {
if((state_val_17260 === (33))){
var inst_17209 = (state_17259[(12)]);
var inst_17186 = inst_17209;
var state_17259__$1 = (function (){var statearr_17277 = state_17259;
(statearr_17277[(7)] = inst_17186);

return statearr_17277;
})();
var statearr_17278_17333 = state_17259__$1;
(statearr_17278_17333[(2)] = null);

(statearr_17278_17333[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (13))){
var inst_17186 = (state_17259[(7)]);
var inst_17193 = inst_17186.cljs$lang$protocol_mask$partition0$;
var inst_17194 = (inst_17193 & (64));
var inst_17195 = inst_17186.cljs$core$ISeq$;
var inst_17196 = (cljs.core.PROTOCOL_SENTINEL === inst_17195);
var inst_17197 = (inst_17194) || (inst_17196);
var state_17259__$1 = state_17259;
if(cljs.core.truth_(inst_17197)){
var statearr_17279_17334 = state_17259__$1;
(statearr_17279_17334[(1)] = (16));

} else {
var statearr_17280_17335 = state_17259__$1;
(statearr_17280_17335[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (22))){
var inst_17218 = (state_17259[(14)]);
var inst_17219 = (state_17259[(11)]);
var inst_17217 = (state_17259[(2)]);
var inst_17218__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17217,(0),null);
var inst_17219__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17217,(1),null);
var inst_17220 = (inst_17218__$1 == null);
var inst_17221 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17219__$1,change);
var inst_17222 = (inst_17220) || (inst_17221);
var state_17259__$1 = (function (){var statearr_17281 = state_17259;
(statearr_17281[(14)] = inst_17218__$1);

(statearr_17281[(11)] = inst_17219__$1);

return statearr_17281;
})();
if(cljs.core.truth_(inst_17222)){
var statearr_17282_17336 = state_17259__$1;
(statearr_17282_17336[(1)] = (23));

} else {
var statearr_17283_17337 = state_17259__$1;
(statearr_17283_17337[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (36))){
var inst_17209 = (state_17259[(12)]);
var inst_17186 = inst_17209;
var state_17259__$1 = (function (){var statearr_17284 = state_17259;
(statearr_17284[(7)] = inst_17186);

return statearr_17284;
})();
var statearr_17285_17338 = state_17259__$1;
(statearr_17285_17338[(2)] = null);

(statearr_17285_17338[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (29))){
var inst_17233 = (state_17259[(9)]);
var state_17259__$1 = state_17259;
var statearr_17286_17339 = state_17259__$1;
(statearr_17286_17339[(2)] = inst_17233);

(statearr_17286_17339[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (6))){
var state_17259__$1 = state_17259;
var statearr_17287_17340 = state_17259__$1;
(statearr_17287_17340[(2)] = false);

(statearr_17287_17340[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (28))){
var inst_17229 = (state_17259[(2)]);
var inst_17230 = calc_state();
var inst_17186 = inst_17230;
var state_17259__$1 = (function (){var statearr_17288 = state_17259;
(statearr_17288[(15)] = inst_17229);

(statearr_17288[(7)] = inst_17186);

return statearr_17288;
})();
var statearr_17289_17341 = state_17259__$1;
(statearr_17289_17341[(2)] = null);

(statearr_17289_17341[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (25))){
var inst_17255 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
var statearr_17290_17342 = state_17259__$1;
(statearr_17290_17342[(2)] = inst_17255);

(statearr_17290_17342[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (34))){
var inst_17253 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
var statearr_17291_17343 = state_17259__$1;
(statearr_17291_17343[(2)] = inst_17253);

(statearr_17291_17343[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (17))){
var state_17259__$1 = state_17259;
var statearr_17292_17344 = state_17259__$1;
(statearr_17292_17344[(2)] = false);

(statearr_17292_17344[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (3))){
var state_17259__$1 = state_17259;
var statearr_17293_17345 = state_17259__$1;
(statearr_17293_17345[(2)] = false);

(statearr_17293_17345[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (12))){
var inst_17257 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17259__$1,inst_17257);
} else {
if((state_val_17260 === (2))){
var inst_17161 = (state_17259[(8)]);
var inst_17166 = inst_17161.cljs$lang$protocol_mask$partition0$;
var inst_17167 = (inst_17166 & (64));
var inst_17168 = inst_17161.cljs$core$ISeq$;
var inst_17169 = (cljs.core.PROTOCOL_SENTINEL === inst_17168);
var inst_17170 = (inst_17167) || (inst_17169);
var state_17259__$1 = state_17259;
if(cljs.core.truth_(inst_17170)){
var statearr_17294_17346 = state_17259__$1;
(statearr_17294_17346[(1)] = (5));

} else {
var statearr_17295_17347 = state_17259__$1;
(statearr_17295_17347[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (23))){
var inst_17218 = (state_17259[(14)]);
var inst_17224 = (inst_17218 == null);
var state_17259__$1 = state_17259;
if(cljs.core.truth_(inst_17224)){
var statearr_17296_17348 = state_17259__$1;
(statearr_17296_17348[(1)] = (26));

} else {
var statearr_17297_17349 = state_17259__$1;
(statearr_17297_17349[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (35))){
var inst_17244 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
if(cljs.core.truth_(inst_17244)){
var statearr_17298_17350 = state_17259__$1;
(statearr_17298_17350[(1)] = (36));

} else {
var statearr_17299_17351 = state_17259__$1;
(statearr_17299_17351[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (19))){
var inst_17186 = (state_17259[(7)]);
var inst_17206 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17186);
var state_17259__$1 = state_17259;
var statearr_17300_17352 = state_17259__$1;
(statearr_17300_17352[(2)] = inst_17206);

(statearr_17300_17352[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (11))){
var inst_17186 = (state_17259[(7)]);
var inst_17190 = (inst_17186 == null);
var inst_17191 = cljs.core.not(inst_17190);
var state_17259__$1 = state_17259;
if(inst_17191){
var statearr_17301_17353 = state_17259__$1;
(statearr_17301_17353[(1)] = (13));

} else {
var statearr_17302_17354 = state_17259__$1;
(statearr_17302_17354[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (9))){
var inst_17161 = (state_17259[(8)]);
var state_17259__$1 = state_17259;
var statearr_17303_17355 = state_17259__$1;
(statearr_17303_17355[(2)] = inst_17161);

(statearr_17303_17355[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (5))){
var state_17259__$1 = state_17259;
var statearr_17304_17356 = state_17259__$1;
(statearr_17304_17356[(2)] = true);

(statearr_17304_17356[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (14))){
var state_17259__$1 = state_17259;
var statearr_17305_17357 = state_17259__$1;
(statearr_17305_17357[(2)] = false);

(statearr_17305_17357[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (26))){
var inst_17219 = (state_17259[(11)]);
var inst_17226 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17219);
var state_17259__$1 = state_17259;
var statearr_17306_17358 = state_17259__$1;
(statearr_17306_17358[(2)] = inst_17226);

(statearr_17306_17358[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (16))){
var state_17259__$1 = state_17259;
var statearr_17307_17359 = state_17259__$1;
(statearr_17307_17359[(2)] = true);

(statearr_17307_17359[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (38))){
var inst_17249 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
var statearr_17308_17360 = state_17259__$1;
(statearr_17308_17360[(2)] = inst_17249);

(statearr_17308_17360[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (30))){
var inst_17210 = (state_17259[(10)]);
var inst_17219 = (state_17259[(11)]);
var inst_17211 = (state_17259[(13)]);
var inst_17236 = cljs.core.empty_QMARK_(inst_17210);
var inst_17237 = (inst_17211.cljs$core$IFn$_invoke$arity$1 ? inst_17211.cljs$core$IFn$_invoke$arity$1(inst_17219) : inst_17211.call(null,inst_17219));
var inst_17238 = cljs.core.not(inst_17237);
var inst_17239 = (inst_17236) && (inst_17238);
var state_17259__$1 = state_17259;
var statearr_17309_17361 = state_17259__$1;
(statearr_17309_17361[(2)] = inst_17239);

(statearr_17309_17361[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (10))){
var inst_17161 = (state_17259[(8)]);
var inst_17182 = (state_17259[(2)]);
var inst_17183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17182,cljs.core.cst$kw$solos);
var inst_17184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17182,cljs.core.cst$kw$mutes);
var inst_17185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17182,cljs.core.cst$kw$reads);
var inst_17186 = inst_17161;
var state_17259__$1 = (function (){var statearr_17310 = state_17259;
(statearr_17310[(16)] = inst_17185);

(statearr_17310[(7)] = inst_17186);

(statearr_17310[(17)] = inst_17183);

(statearr_17310[(18)] = inst_17184);

return statearr_17310;
})();
var statearr_17311_17362 = state_17259__$1;
(statearr_17311_17362[(2)] = null);

(statearr_17311_17362[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (18))){
var inst_17201 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
var statearr_17312_17363 = state_17259__$1;
(statearr_17312_17363[(2)] = inst_17201);

(statearr_17312_17363[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (37))){
var state_17259__$1 = state_17259;
var statearr_17313_17364 = state_17259__$1;
(statearr_17313_17364[(2)] = null);

(statearr_17313_17364[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17260 === (8))){
var inst_17161 = (state_17259[(8)]);
var inst_17179 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17161);
var state_17259__$1 = state_17259;
var statearr_17314_17365 = state_17259__$1;
(statearr_17314_17365[(2)] = inst_17179);

(statearr_17314_17365[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15748__auto___17319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15115__auto__,c__15748__auto___17319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15116__auto__ = null;
var cljs$core$async$mix_$_state_machine__15116__auto____0 = (function (){
var statearr_17315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17315[(0)] = cljs$core$async$mix_$_state_machine__15116__auto__);

(statearr_17315[(1)] = (1));

return statearr_17315;
});
var cljs$core$async$mix_$_state_machine__15116__auto____1 = (function (state_17259){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_17259);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e17316){if((e17316 instanceof Object)){
var ex__15119__auto__ = e17316;
var statearr_17317_17366 = state_17259;
(statearr_17317_17366[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17259);

return cljs.core.cst$kw$recur;
} else {
throw e17316;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__17367 = state_17259;
state_17259 = G__17367;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15116__auto__ = function(state_17259){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15116__auto____1.call(this,state_17259);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15116__auto____0;
cljs$core$async$mix_$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15116__auto____1;
return cljs$core$async$mix_$_state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto___17319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15750__auto__ = (function (){var statearr_17318 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_17318[(6)] = c__15748__auto___17319);

return statearr_17318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto___17319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8157__auto__ = (((p == null))?null:p);
var m__8158__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8157__auto__)]);
if(!((m__8158__auto__ == null))){
return (m__8158__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8158__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8158__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__8158__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8158__auto____$1 == null))){
return (m__8158__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8158__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8158__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8157__auto__ = (((p == null))?null:p);
var m__8158__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8157__auto__)]);
if(!((m__8158__auto__ == null))){
return (m__8158__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8158__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8158__auto__.call(null,p,v,ch));
} else {
var m__8158__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8158__auto____$1 == null))){
return (m__8158__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8158__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8158__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17369 = arguments.length;
switch (G__17369) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8157__auto__ = (((p == null))?null:p);
var m__8158__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8157__auto__)]);
if(!((m__8158__auto__ == null))){
return (m__8158__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8158__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__8158__auto__.call(null,p));
} else {
var m__8158__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8158__auto____$1 == null))){
return (m__8158__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8158__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__8158__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8157__auto__ = (((p == null))?null:p);
var m__8158__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8157__auto__)]);
if(!((m__8158__auto__ == null))){
return (m__8158__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8158__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__8158__auto__.call(null,p,v));
} else {
var m__8158__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8158__auto____$1 == null))){
return (m__8158__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8158__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__8158__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17373 = arguments.length;
switch (G__17373) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7488__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7488__auto__,mults){
return (function (p1__17371_SHARP_){
if(cljs.core.truth_((p1__17371_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17371_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17371_SHARP_.call(null,topic)))){
return p1__17371_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17371_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7488__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17374 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17375){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17375 = meta17375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17376,meta17375__$1){
var self__ = this;
var _17376__$1 = this;
return (new cljs.core.async.t_cljs$core$async17374(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17375__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17376){
var self__ = this;
var _17376__$1 = this;
return self__.meta17375;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17374.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17374.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17374.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17374.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17374.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17374.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17374.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17374.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17375], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17374";

cljs.core.async.t_cljs$core$async17374.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cljs.core.async/t_cljs$core$async17374");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17374 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17374(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17375){
return (new cljs.core.async.t_cljs$core$async17374(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17375));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17374(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15748__auto___17494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto___17494,mults,ensure_mult,p){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto___17494,mults,ensure_mult,p){
return (function (state_17448){
var state_val_17449 = (state_17448[(1)]);
if((state_val_17449 === (7))){
var inst_17444 = (state_17448[(2)]);
var state_17448__$1 = state_17448;
var statearr_17450_17495 = state_17448__$1;
(statearr_17450_17495[(2)] = inst_17444);

(statearr_17450_17495[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (20))){
var state_17448__$1 = state_17448;
var statearr_17451_17496 = state_17448__$1;
(statearr_17451_17496[(2)] = null);

(statearr_17451_17496[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (1))){
var state_17448__$1 = state_17448;
var statearr_17452_17497 = state_17448__$1;
(statearr_17452_17497[(2)] = null);

(statearr_17452_17497[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (24))){
var inst_17427 = (state_17448[(7)]);
var inst_17436 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17427);
var state_17448__$1 = state_17448;
var statearr_17453_17498 = state_17448__$1;
(statearr_17453_17498[(2)] = inst_17436);

(statearr_17453_17498[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (4))){
var inst_17379 = (state_17448[(8)]);
var inst_17379__$1 = (state_17448[(2)]);
var inst_17380 = (inst_17379__$1 == null);
var state_17448__$1 = (function (){var statearr_17454 = state_17448;
(statearr_17454[(8)] = inst_17379__$1);

return statearr_17454;
})();
if(cljs.core.truth_(inst_17380)){
var statearr_17455_17499 = state_17448__$1;
(statearr_17455_17499[(1)] = (5));

} else {
var statearr_17456_17500 = state_17448__$1;
(statearr_17456_17500[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (15))){
var inst_17421 = (state_17448[(2)]);
var state_17448__$1 = state_17448;
var statearr_17457_17501 = state_17448__$1;
(statearr_17457_17501[(2)] = inst_17421);

(statearr_17457_17501[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (21))){
var inst_17441 = (state_17448[(2)]);
var state_17448__$1 = (function (){var statearr_17458 = state_17448;
(statearr_17458[(9)] = inst_17441);

return statearr_17458;
})();
var statearr_17459_17502 = state_17448__$1;
(statearr_17459_17502[(2)] = null);

(statearr_17459_17502[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (13))){
var inst_17403 = (state_17448[(10)]);
var inst_17405 = cljs.core.chunked_seq_QMARK_(inst_17403);
var state_17448__$1 = state_17448;
if(inst_17405){
var statearr_17460_17503 = state_17448__$1;
(statearr_17460_17503[(1)] = (16));

} else {
var statearr_17461_17504 = state_17448__$1;
(statearr_17461_17504[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (22))){
var inst_17433 = (state_17448[(2)]);
var state_17448__$1 = state_17448;
if(cljs.core.truth_(inst_17433)){
var statearr_17462_17505 = state_17448__$1;
(statearr_17462_17505[(1)] = (23));

} else {
var statearr_17463_17506 = state_17448__$1;
(statearr_17463_17506[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (6))){
var inst_17379 = (state_17448[(8)]);
var inst_17427 = (state_17448[(7)]);
var inst_17429 = (state_17448[(11)]);
var inst_17427__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17379) : topic_fn.call(null,inst_17379));
var inst_17428 = cljs.core.deref(mults);
var inst_17429__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17428,inst_17427__$1);
var state_17448__$1 = (function (){var statearr_17464 = state_17448;
(statearr_17464[(7)] = inst_17427__$1);

(statearr_17464[(11)] = inst_17429__$1);

return statearr_17464;
})();
if(cljs.core.truth_(inst_17429__$1)){
var statearr_17465_17507 = state_17448__$1;
(statearr_17465_17507[(1)] = (19));

} else {
var statearr_17466_17508 = state_17448__$1;
(statearr_17466_17508[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (25))){
var inst_17438 = (state_17448[(2)]);
var state_17448__$1 = state_17448;
var statearr_17467_17509 = state_17448__$1;
(statearr_17467_17509[(2)] = inst_17438);

(statearr_17467_17509[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (17))){
var inst_17403 = (state_17448[(10)]);
var inst_17412 = cljs.core.first(inst_17403);
var inst_17413 = cljs.core.async.muxch_STAR_(inst_17412);
var inst_17414 = cljs.core.async.close_BANG_(inst_17413);
var inst_17415 = cljs.core.next(inst_17403);
var inst_17389 = inst_17415;
var inst_17390 = null;
var inst_17391 = (0);
var inst_17392 = (0);
var state_17448__$1 = (function (){var statearr_17468 = state_17448;
(statearr_17468[(12)] = inst_17390);

(statearr_17468[(13)] = inst_17392);

(statearr_17468[(14)] = inst_17414);

(statearr_17468[(15)] = inst_17389);

(statearr_17468[(16)] = inst_17391);

return statearr_17468;
})();
var statearr_17469_17510 = state_17448__$1;
(statearr_17469_17510[(2)] = null);

(statearr_17469_17510[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (3))){
var inst_17446 = (state_17448[(2)]);
var state_17448__$1 = state_17448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17448__$1,inst_17446);
} else {
if((state_val_17449 === (12))){
var inst_17423 = (state_17448[(2)]);
var state_17448__$1 = state_17448;
var statearr_17470_17511 = state_17448__$1;
(statearr_17470_17511[(2)] = inst_17423);

(statearr_17470_17511[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (2))){
var state_17448__$1 = state_17448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17448__$1,(4),ch);
} else {
if((state_val_17449 === (23))){
var state_17448__$1 = state_17448;
var statearr_17471_17512 = state_17448__$1;
(statearr_17471_17512[(2)] = null);

(statearr_17471_17512[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (19))){
var inst_17379 = (state_17448[(8)]);
var inst_17429 = (state_17448[(11)]);
var inst_17431 = cljs.core.async.muxch_STAR_(inst_17429);
var state_17448__$1 = state_17448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17448__$1,(22),inst_17431,inst_17379);
} else {
if((state_val_17449 === (11))){
var inst_17389 = (state_17448[(15)]);
var inst_17403 = (state_17448[(10)]);
var inst_17403__$1 = cljs.core.seq(inst_17389);
var state_17448__$1 = (function (){var statearr_17472 = state_17448;
(statearr_17472[(10)] = inst_17403__$1);

return statearr_17472;
})();
if(inst_17403__$1){
var statearr_17473_17513 = state_17448__$1;
(statearr_17473_17513[(1)] = (13));

} else {
var statearr_17474_17514 = state_17448__$1;
(statearr_17474_17514[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (9))){
var inst_17425 = (state_17448[(2)]);
var state_17448__$1 = state_17448;
var statearr_17475_17515 = state_17448__$1;
(statearr_17475_17515[(2)] = inst_17425);

(statearr_17475_17515[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (5))){
var inst_17386 = cljs.core.deref(mults);
var inst_17387 = cljs.core.vals(inst_17386);
var inst_17388 = cljs.core.seq(inst_17387);
var inst_17389 = inst_17388;
var inst_17390 = null;
var inst_17391 = (0);
var inst_17392 = (0);
var state_17448__$1 = (function (){var statearr_17476 = state_17448;
(statearr_17476[(12)] = inst_17390);

(statearr_17476[(13)] = inst_17392);

(statearr_17476[(15)] = inst_17389);

(statearr_17476[(16)] = inst_17391);

return statearr_17476;
})();
var statearr_17477_17516 = state_17448__$1;
(statearr_17477_17516[(2)] = null);

(statearr_17477_17516[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (14))){
var state_17448__$1 = state_17448;
var statearr_17481_17517 = state_17448__$1;
(statearr_17481_17517[(2)] = null);

(statearr_17481_17517[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (16))){
var inst_17403 = (state_17448[(10)]);
var inst_17407 = cljs.core.chunk_first(inst_17403);
var inst_17408 = cljs.core.chunk_rest(inst_17403);
var inst_17409 = cljs.core.count(inst_17407);
var inst_17389 = inst_17408;
var inst_17390 = inst_17407;
var inst_17391 = inst_17409;
var inst_17392 = (0);
var state_17448__$1 = (function (){var statearr_17482 = state_17448;
(statearr_17482[(12)] = inst_17390);

(statearr_17482[(13)] = inst_17392);

(statearr_17482[(15)] = inst_17389);

(statearr_17482[(16)] = inst_17391);

return statearr_17482;
})();
var statearr_17483_17518 = state_17448__$1;
(statearr_17483_17518[(2)] = null);

(statearr_17483_17518[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (10))){
var inst_17390 = (state_17448[(12)]);
var inst_17392 = (state_17448[(13)]);
var inst_17389 = (state_17448[(15)]);
var inst_17391 = (state_17448[(16)]);
var inst_17397 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17390,inst_17392);
var inst_17398 = cljs.core.async.muxch_STAR_(inst_17397);
var inst_17399 = cljs.core.async.close_BANG_(inst_17398);
var inst_17400 = (inst_17392 + (1));
var tmp17478 = inst_17390;
var tmp17479 = inst_17389;
var tmp17480 = inst_17391;
var inst_17389__$1 = tmp17479;
var inst_17390__$1 = tmp17478;
var inst_17391__$1 = tmp17480;
var inst_17392__$1 = inst_17400;
var state_17448__$1 = (function (){var statearr_17484 = state_17448;
(statearr_17484[(12)] = inst_17390__$1);

(statearr_17484[(13)] = inst_17392__$1);

(statearr_17484[(15)] = inst_17389__$1);

(statearr_17484[(16)] = inst_17391__$1);

(statearr_17484[(17)] = inst_17399);

return statearr_17484;
})();
var statearr_17485_17519 = state_17448__$1;
(statearr_17485_17519[(2)] = null);

(statearr_17485_17519[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (18))){
var inst_17418 = (state_17448[(2)]);
var state_17448__$1 = state_17448;
var statearr_17486_17520 = state_17448__$1;
(statearr_17486_17520[(2)] = inst_17418);

(statearr_17486_17520[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17449 === (8))){
var inst_17392 = (state_17448[(13)]);
var inst_17391 = (state_17448[(16)]);
var inst_17394 = (inst_17392 < inst_17391);
var inst_17395 = inst_17394;
var state_17448__$1 = state_17448;
if(cljs.core.truth_(inst_17395)){
var statearr_17487_17521 = state_17448__$1;
(statearr_17487_17521[(1)] = (10));

} else {
var statearr_17488_17522 = state_17448__$1;
(statearr_17488_17522[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15748__auto___17494,mults,ensure_mult,p))
;
return ((function (switch__15115__auto__,c__15748__auto___17494,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15116__auto__ = null;
var cljs$core$async$state_machine__15116__auto____0 = (function (){
var statearr_17489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17489[(0)] = cljs$core$async$state_machine__15116__auto__);

(statearr_17489[(1)] = (1));

return statearr_17489;
});
var cljs$core$async$state_machine__15116__auto____1 = (function (state_17448){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_17448);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e17490){if((e17490 instanceof Object)){
var ex__15119__auto__ = e17490;
var statearr_17491_17523 = state_17448;
(statearr_17491_17523[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17448);

return cljs.core.cst$kw$recur;
} else {
throw e17490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__17524 = state_17448;
state_17448 = G__17524;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$state_machine__15116__auto__ = function(state_17448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15116__auto____1.call(this,state_17448);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15116__auto____0;
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15116__auto____1;
return cljs$core$async$state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto___17494,mults,ensure_mult,p))
})();
var state__15750__auto__ = (function (){var statearr_17492 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_17492[(6)] = c__15748__auto___17494);

return statearr_17492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto___17494,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17526 = arguments.length;
switch (G__17526) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17529 = arguments.length;
switch (G__17529) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17532 = arguments.length;
switch (G__17532) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__15748__auto___17599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto___17599,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto___17599,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17571){
var state_val_17572 = (state_17571[(1)]);
if((state_val_17572 === (7))){
var state_17571__$1 = state_17571;
var statearr_17573_17600 = state_17571__$1;
(statearr_17573_17600[(2)] = null);

(statearr_17573_17600[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (1))){
var state_17571__$1 = state_17571;
var statearr_17574_17601 = state_17571__$1;
(statearr_17574_17601[(2)] = null);

(statearr_17574_17601[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (4))){
var inst_17535 = (state_17571[(7)]);
var inst_17537 = (inst_17535 < cnt);
var state_17571__$1 = state_17571;
if(cljs.core.truth_(inst_17537)){
var statearr_17575_17602 = state_17571__$1;
(statearr_17575_17602[(1)] = (6));

} else {
var statearr_17576_17603 = state_17571__$1;
(statearr_17576_17603[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (15))){
var inst_17567 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
var statearr_17577_17604 = state_17571__$1;
(statearr_17577_17604[(2)] = inst_17567);

(statearr_17577_17604[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (13))){
var inst_17560 = cljs.core.async.close_BANG_(out);
var state_17571__$1 = state_17571;
var statearr_17578_17605 = state_17571__$1;
(statearr_17578_17605[(2)] = inst_17560);

(statearr_17578_17605[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (6))){
var state_17571__$1 = state_17571;
var statearr_17579_17606 = state_17571__$1;
(statearr_17579_17606[(2)] = null);

(statearr_17579_17606[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (3))){
var inst_17569 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17571__$1,inst_17569);
} else {
if((state_val_17572 === (12))){
var inst_17557 = (state_17571[(8)]);
var inst_17557__$1 = (state_17571[(2)]);
var inst_17558 = cljs.core.some(cljs.core.nil_QMARK_,inst_17557__$1);
var state_17571__$1 = (function (){var statearr_17580 = state_17571;
(statearr_17580[(8)] = inst_17557__$1);

return statearr_17580;
})();
if(cljs.core.truth_(inst_17558)){
var statearr_17581_17607 = state_17571__$1;
(statearr_17581_17607[(1)] = (13));

} else {
var statearr_17582_17608 = state_17571__$1;
(statearr_17582_17608[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (2))){
var inst_17534 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17535 = (0);
var state_17571__$1 = (function (){var statearr_17583 = state_17571;
(statearr_17583[(9)] = inst_17534);

(statearr_17583[(7)] = inst_17535);

return statearr_17583;
})();
var statearr_17584_17609 = state_17571__$1;
(statearr_17584_17609[(2)] = null);

(statearr_17584_17609[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (11))){
var inst_17535 = (state_17571[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17571,(10),Object,null,(9));
var inst_17544 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17535) : chs__$1.call(null,inst_17535));
var inst_17545 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17535) : done.call(null,inst_17535));
var inst_17546 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17544,inst_17545);
var state_17571__$1 = state_17571;
var statearr_17585_17610 = state_17571__$1;
(statearr_17585_17610[(2)] = inst_17546);


cljs.core.async.impl.ioc_helpers.process_exception(state_17571__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (9))){
var inst_17535 = (state_17571[(7)]);
var inst_17548 = (state_17571[(2)]);
var inst_17549 = (inst_17535 + (1));
var inst_17535__$1 = inst_17549;
var state_17571__$1 = (function (){var statearr_17586 = state_17571;
(statearr_17586[(7)] = inst_17535__$1);

(statearr_17586[(10)] = inst_17548);

return statearr_17586;
})();
var statearr_17587_17611 = state_17571__$1;
(statearr_17587_17611[(2)] = null);

(statearr_17587_17611[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (5))){
var inst_17555 = (state_17571[(2)]);
var state_17571__$1 = (function (){var statearr_17588 = state_17571;
(statearr_17588[(11)] = inst_17555);

return statearr_17588;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17571__$1,(12),dchan);
} else {
if((state_val_17572 === (14))){
var inst_17557 = (state_17571[(8)]);
var inst_17562 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17557);
var state_17571__$1 = state_17571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17571__$1,(16),out,inst_17562);
} else {
if((state_val_17572 === (16))){
var inst_17564 = (state_17571[(2)]);
var state_17571__$1 = (function (){var statearr_17589 = state_17571;
(statearr_17589[(12)] = inst_17564);

return statearr_17589;
})();
var statearr_17590_17612 = state_17571__$1;
(statearr_17590_17612[(2)] = null);

(statearr_17590_17612[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (10))){
var inst_17539 = (state_17571[(2)]);
var inst_17540 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17571__$1 = (function (){var statearr_17591 = state_17571;
(statearr_17591[(13)] = inst_17539);

return statearr_17591;
})();
var statearr_17592_17613 = state_17571__$1;
(statearr_17592_17613[(2)] = inst_17540);


cljs.core.async.impl.ioc_helpers.process_exception(state_17571__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (8))){
var inst_17553 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
var statearr_17593_17614 = state_17571__$1;
(statearr_17593_17614[(2)] = inst_17553);

(statearr_17593_17614[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15748__auto___17599,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15115__auto__,c__15748__auto___17599,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15116__auto__ = null;
var cljs$core$async$state_machine__15116__auto____0 = (function (){
var statearr_17594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17594[(0)] = cljs$core$async$state_machine__15116__auto__);

(statearr_17594[(1)] = (1));

return statearr_17594;
});
var cljs$core$async$state_machine__15116__auto____1 = (function (state_17571){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_17571);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e17595){if((e17595 instanceof Object)){
var ex__15119__auto__ = e17595;
var statearr_17596_17615 = state_17571;
(statearr_17596_17615[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17571);

return cljs.core.cst$kw$recur;
} else {
throw e17595;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__17616 = state_17571;
state_17571 = G__17616;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$state_machine__15116__auto__ = function(state_17571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15116__auto____1.call(this,state_17571);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15116__auto____0;
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15116__auto____1;
return cljs$core$async$state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto___17599,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15750__auto__ = (function (){var statearr_17597 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_17597[(6)] = c__15748__auto___17599);

return statearr_17597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto___17599,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17619 = arguments.length;
switch (G__17619) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15748__auto___17673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto___17673,out){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto___17673,out){
return (function (state_17651){
var state_val_17652 = (state_17651[(1)]);
if((state_val_17652 === (7))){
var inst_17630 = (state_17651[(7)]);
var inst_17631 = (state_17651[(8)]);
var inst_17630__$1 = (state_17651[(2)]);
var inst_17631__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17630__$1,(0),null);
var inst_17632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17630__$1,(1),null);
var inst_17633 = (inst_17631__$1 == null);
var state_17651__$1 = (function (){var statearr_17653 = state_17651;
(statearr_17653[(9)] = inst_17632);

(statearr_17653[(7)] = inst_17630__$1);

(statearr_17653[(8)] = inst_17631__$1);

return statearr_17653;
})();
if(cljs.core.truth_(inst_17633)){
var statearr_17654_17674 = state_17651__$1;
(statearr_17654_17674[(1)] = (8));

} else {
var statearr_17655_17675 = state_17651__$1;
(statearr_17655_17675[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17652 === (1))){
var inst_17620 = cljs.core.vec(chs);
var inst_17621 = inst_17620;
var state_17651__$1 = (function (){var statearr_17656 = state_17651;
(statearr_17656[(10)] = inst_17621);

return statearr_17656;
})();
var statearr_17657_17676 = state_17651__$1;
(statearr_17657_17676[(2)] = null);

(statearr_17657_17676[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17652 === (4))){
var inst_17621 = (state_17651[(10)]);
var state_17651__$1 = state_17651;
return cljs.core.async.ioc_alts_BANG_(state_17651__$1,(7),inst_17621);
} else {
if((state_val_17652 === (6))){
var inst_17647 = (state_17651[(2)]);
var state_17651__$1 = state_17651;
var statearr_17658_17677 = state_17651__$1;
(statearr_17658_17677[(2)] = inst_17647);

(statearr_17658_17677[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17652 === (3))){
var inst_17649 = (state_17651[(2)]);
var state_17651__$1 = state_17651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17651__$1,inst_17649);
} else {
if((state_val_17652 === (2))){
var inst_17621 = (state_17651[(10)]);
var inst_17623 = cljs.core.count(inst_17621);
var inst_17624 = (inst_17623 > (0));
var state_17651__$1 = state_17651;
if(cljs.core.truth_(inst_17624)){
var statearr_17660_17678 = state_17651__$1;
(statearr_17660_17678[(1)] = (4));

} else {
var statearr_17661_17679 = state_17651__$1;
(statearr_17661_17679[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17652 === (11))){
var inst_17621 = (state_17651[(10)]);
var inst_17640 = (state_17651[(2)]);
var tmp17659 = inst_17621;
var inst_17621__$1 = tmp17659;
var state_17651__$1 = (function (){var statearr_17662 = state_17651;
(statearr_17662[(11)] = inst_17640);

(statearr_17662[(10)] = inst_17621__$1);

return statearr_17662;
})();
var statearr_17663_17680 = state_17651__$1;
(statearr_17663_17680[(2)] = null);

(statearr_17663_17680[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17652 === (9))){
var inst_17631 = (state_17651[(8)]);
var state_17651__$1 = state_17651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17651__$1,(11),out,inst_17631);
} else {
if((state_val_17652 === (5))){
var inst_17645 = cljs.core.async.close_BANG_(out);
var state_17651__$1 = state_17651;
var statearr_17664_17681 = state_17651__$1;
(statearr_17664_17681[(2)] = inst_17645);

(statearr_17664_17681[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17652 === (10))){
var inst_17643 = (state_17651[(2)]);
var state_17651__$1 = state_17651;
var statearr_17665_17682 = state_17651__$1;
(statearr_17665_17682[(2)] = inst_17643);

(statearr_17665_17682[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17652 === (8))){
var inst_17632 = (state_17651[(9)]);
var inst_17630 = (state_17651[(7)]);
var inst_17631 = (state_17651[(8)]);
var inst_17621 = (state_17651[(10)]);
var inst_17635 = (function (){var cs = inst_17621;
var vec__17626 = inst_17630;
var v = inst_17631;
var c = inst_17632;
return ((function (cs,vec__17626,v,c,inst_17632,inst_17630,inst_17631,inst_17621,state_val_17652,c__15748__auto___17673,out){
return (function (p1__17617_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17617_SHARP_);
});
;})(cs,vec__17626,v,c,inst_17632,inst_17630,inst_17631,inst_17621,state_val_17652,c__15748__auto___17673,out))
})();
var inst_17636 = cljs.core.filterv(inst_17635,inst_17621);
var inst_17621__$1 = inst_17636;
var state_17651__$1 = (function (){var statearr_17666 = state_17651;
(statearr_17666[(10)] = inst_17621__$1);

return statearr_17666;
})();
var statearr_17667_17683 = state_17651__$1;
(statearr_17667_17683[(2)] = null);

(statearr_17667_17683[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15748__auto___17673,out))
;
return ((function (switch__15115__auto__,c__15748__auto___17673,out){
return (function() {
var cljs$core$async$state_machine__15116__auto__ = null;
var cljs$core$async$state_machine__15116__auto____0 = (function (){
var statearr_17668 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17668[(0)] = cljs$core$async$state_machine__15116__auto__);

(statearr_17668[(1)] = (1));

return statearr_17668;
});
var cljs$core$async$state_machine__15116__auto____1 = (function (state_17651){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_17651);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e17669){if((e17669 instanceof Object)){
var ex__15119__auto__ = e17669;
var statearr_17670_17684 = state_17651;
(statearr_17670_17684[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17651);

return cljs.core.cst$kw$recur;
} else {
throw e17669;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__17685 = state_17651;
state_17651 = G__17685;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$state_machine__15116__auto__ = function(state_17651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15116__auto____1.call(this,state_17651);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15116__auto____0;
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15116__auto____1;
return cljs$core$async$state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto___17673,out))
})();
var state__15750__auto__ = (function (){var statearr_17671 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_17671[(6)] = c__15748__auto___17673);

return statearr_17671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto___17673,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17687 = arguments.length;
switch (G__17687) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15748__auto___17732 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto___17732,out){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto___17732,out){
return (function (state_17711){
var state_val_17712 = (state_17711[(1)]);
if((state_val_17712 === (7))){
var inst_17693 = (state_17711[(7)]);
var inst_17693__$1 = (state_17711[(2)]);
var inst_17694 = (inst_17693__$1 == null);
var inst_17695 = cljs.core.not(inst_17694);
var state_17711__$1 = (function (){var statearr_17713 = state_17711;
(statearr_17713[(7)] = inst_17693__$1);

return statearr_17713;
})();
if(inst_17695){
var statearr_17714_17733 = state_17711__$1;
(statearr_17714_17733[(1)] = (8));

} else {
var statearr_17715_17734 = state_17711__$1;
(statearr_17715_17734[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17712 === (1))){
var inst_17688 = (0);
var state_17711__$1 = (function (){var statearr_17716 = state_17711;
(statearr_17716[(8)] = inst_17688);

return statearr_17716;
})();
var statearr_17717_17735 = state_17711__$1;
(statearr_17717_17735[(2)] = null);

(statearr_17717_17735[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17712 === (4))){
var state_17711__$1 = state_17711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17711__$1,(7),ch);
} else {
if((state_val_17712 === (6))){
var inst_17706 = (state_17711[(2)]);
var state_17711__$1 = state_17711;
var statearr_17718_17736 = state_17711__$1;
(statearr_17718_17736[(2)] = inst_17706);

(statearr_17718_17736[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17712 === (3))){
var inst_17708 = (state_17711[(2)]);
var inst_17709 = cljs.core.async.close_BANG_(out);
var state_17711__$1 = (function (){var statearr_17719 = state_17711;
(statearr_17719[(9)] = inst_17708);

return statearr_17719;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17711__$1,inst_17709);
} else {
if((state_val_17712 === (2))){
var inst_17688 = (state_17711[(8)]);
var inst_17690 = (inst_17688 < n);
var state_17711__$1 = state_17711;
if(cljs.core.truth_(inst_17690)){
var statearr_17720_17737 = state_17711__$1;
(statearr_17720_17737[(1)] = (4));

} else {
var statearr_17721_17738 = state_17711__$1;
(statearr_17721_17738[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17712 === (11))){
var inst_17688 = (state_17711[(8)]);
var inst_17698 = (state_17711[(2)]);
var inst_17699 = (inst_17688 + (1));
var inst_17688__$1 = inst_17699;
var state_17711__$1 = (function (){var statearr_17722 = state_17711;
(statearr_17722[(10)] = inst_17698);

(statearr_17722[(8)] = inst_17688__$1);

return statearr_17722;
})();
var statearr_17723_17739 = state_17711__$1;
(statearr_17723_17739[(2)] = null);

(statearr_17723_17739[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17712 === (9))){
var state_17711__$1 = state_17711;
var statearr_17724_17740 = state_17711__$1;
(statearr_17724_17740[(2)] = null);

(statearr_17724_17740[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17712 === (5))){
var state_17711__$1 = state_17711;
var statearr_17725_17741 = state_17711__$1;
(statearr_17725_17741[(2)] = null);

(statearr_17725_17741[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17712 === (10))){
var inst_17703 = (state_17711[(2)]);
var state_17711__$1 = state_17711;
var statearr_17726_17742 = state_17711__$1;
(statearr_17726_17742[(2)] = inst_17703);

(statearr_17726_17742[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17712 === (8))){
var inst_17693 = (state_17711[(7)]);
var state_17711__$1 = state_17711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17711__$1,(11),out,inst_17693);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15748__auto___17732,out))
;
return ((function (switch__15115__auto__,c__15748__auto___17732,out){
return (function() {
var cljs$core$async$state_machine__15116__auto__ = null;
var cljs$core$async$state_machine__15116__auto____0 = (function (){
var statearr_17727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17727[(0)] = cljs$core$async$state_machine__15116__auto__);

(statearr_17727[(1)] = (1));

return statearr_17727;
});
var cljs$core$async$state_machine__15116__auto____1 = (function (state_17711){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_17711);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e17728){if((e17728 instanceof Object)){
var ex__15119__auto__ = e17728;
var statearr_17729_17743 = state_17711;
(statearr_17729_17743[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17711);

return cljs.core.cst$kw$recur;
} else {
throw e17728;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__17744 = state_17711;
state_17711 = G__17744;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$state_machine__15116__auto__ = function(state_17711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15116__auto____1.call(this,state_17711);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15116__auto____0;
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15116__auto____1;
return cljs$core$async$state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto___17732,out))
})();
var state__15750__auto__ = (function (){var statearr_17730 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_17730[(6)] = c__15748__auto___17732);

return statearr_17730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto___17732,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17746 = (function (f,ch,meta17747){
this.f = f;
this.ch = ch;
this.meta17747 = meta17747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17748,meta17747__$1){
var self__ = this;
var _17748__$1 = this;
return (new cljs.core.async.t_cljs$core$async17746(self__.f,self__.ch,meta17747__$1));
});

cljs.core.async.t_cljs$core$async17746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17748){
var self__ = this;
var _17748__$1 = this;
return self__.meta17747;
});

cljs.core.async.t_cljs$core$async17746.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17746.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17746.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17746.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17746.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17749 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17749 = (function (f,ch,meta17747,_,fn1,meta17750){
this.f = f;
this.ch = ch;
this.meta17747 = meta17747;
this._ = _;
this.fn1 = fn1;
this.meta17750 = meta17750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17751,meta17750__$1){
var self__ = this;
var _17751__$1 = this;
return (new cljs.core.async.t_cljs$core$async17749(self__.f,self__.ch,self__.meta17747,self__._,self__.fn1,meta17750__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17751){
var self__ = this;
var _17751__$1 = this;
return self__.meta17750;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17749.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17749.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17745_SHARP_){
var G__17752 = (((p1__17745_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17745_SHARP_) : self__.f.call(null,p1__17745_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17752) : f1.call(null,G__17752));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17749.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17747,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17746], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17750], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17749";

cljs.core.async.t_cljs$core$async17749.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cljs.core.async/t_cljs$core$async17749");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17749 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17749(f__$1,ch__$1,meta17747__$1,___$2,fn1__$1,meta17750){
return (new cljs.core.async.t_cljs$core$async17749(f__$1,ch__$1,meta17747__$1,___$2,fn1__$1,meta17750));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17749(self__.f,self__.ch,self__.meta17747,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7476__auto__ = ret;
if(cljs.core.truth_(and__7476__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__7476__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17753 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17753) : self__.f.call(null,G__17753));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17746.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17746.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17747], null);
});

cljs.core.async.t_cljs$core$async17746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17746";

cljs.core.async.t_cljs$core$async17746.cljs$lang$ctorPrWriter = (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cljs.core.async/t_cljs$core$async17746");
});

cljs.core.async.__GT_t_cljs$core$async17746 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17746(f__$1,ch__$1,meta17747){
return (new cljs.core.async.t_cljs$core$async17746(f__$1,ch__$1,meta17747));
});

}

return (new cljs.core.async.t_cljs$core$async17746(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17754 = (function (f,ch,meta17755){
this.f = f;
this.ch = ch;
this.meta17755 = meta17755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17756,meta17755__$1){
var self__ = this;
var _17756__$1 = this;
return (new cljs.core.async.t_cljs$core$async17754(self__.f,self__.ch,meta17755__$1));
});

cljs.core.async.t_cljs$core$async17754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17756){
var self__ = this;
var _17756__$1 = this;
return self__.meta17755;
});

cljs.core.async.t_cljs$core$async17754.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17754.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17754.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17754.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17754.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17754.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17755], null);
});

cljs.core.async.t_cljs$core$async17754.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17754";

cljs.core.async.t_cljs$core$async17754.cljs$lang$ctorPrWriter = (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cljs.core.async/t_cljs$core$async17754");
});

cljs.core.async.__GT_t_cljs$core$async17754 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17754(f__$1,ch__$1,meta17755){
return (new cljs.core.async.t_cljs$core$async17754(f__$1,ch__$1,meta17755));
});

}

return (new cljs.core.async.t_cljs$core$async17754(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17757 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17757 = (function (p,ch,meta17758){
this.p = p;
this.ch = ch;
this.meta17758 = meta17758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17759,meta17758__$1){
var self__ = this;
var _17759__$1 = this;
return (new cljs.core.async.t_cljs$core$async17757(self__.p,self__.ch,meta17758__$1));
});

cljs.core.async.t_cljs$core$async17757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17759){
var self__ = this;
var _17759__$1 = this;
return self__.meta17758;
});

cljs.core.async.t_cljs$core$async17757.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17757.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17757.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17757.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17757.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17757.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17757.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17758], null);
});

cljs.core.async.t_cljs$core$async17757.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17757";

cljs.core.async.t_cljs$core$async17757.cljs$lang$ctorPrWriter = (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cljs.core.async/t_cljs$core$async17757");
});

cljs.core.async.__GT_t_cljs$core$async17757 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17757(p__$1,ch__$1,meta17758){
return (new cljs.core.async.t_cljs$core$async17757(p__$1,ch__$1,meta17758));
});

}

return (new cljs.core.async.t_cljs$core$async17757(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17761 = arguments.length;
switch (G__17761) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15748__auto___17801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto___17801,out){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto___17801,out){
return (function (state_17782){
var state_val_17783 = (state_17782[(1)]);
if((state_val_17783 === (7))){
var inst_17778 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
var statearr_17784_17802 = state_17782__$1;
(statearr_17784_17802[(2)] = inst_17778);

(statearr_17784_17802[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17783 === (1))){
var state_17782__$1 = state_17782;
var statearr_17785_17803 = state_17782__$1;
(statearr_17785_17803[(2)] = null);

(statearr_17785_17803[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17783 === (4))){
var inst_17764 = (state_17782[(7)]);
var inst_17764__$1 = (state_17782[(2)]);
var inst_17765 = (inst_17764__$1 == null);
var state_17782__$1 = (function (){var statearr_17786 = state_17782;
(statearr_17786[(7)] = inst_17764__$1);

return statearr_17786;
})();
if(cljs.core.truth_(inst_17765)){
var statearr_17787_17804 = state_17782__$1;
(statearr_17787_17804[(1)] = (5));

} else {
var statearr_17788_17805 = state_17782__$1;
(statearr_17788_17805[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17783 === (6))){
var inst_17764 = (state_17782[(7)]);
var inst_17769 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17764) : p.call(null,inst_17764));
var state_17782__$1 = state_17782;
if(cljs.core.truth_(inst_17769)){
var statearr_17789_17806 = state_17782__$1;
(statearr_17789_17806[(1)] = (8));

} else {
var statearr_17790_17807 = state_17782__$1;
(statearr_17790_17807[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17783 === (3))){
var inst_17780 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17782__$1,inst_17780);
} else {
if((state_val_17783 === (2))){
var state_17782__$1 = state_17782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17782__$1,(4),ch);
} else {
if((state_val_17783 === (11))){
var inst_17772 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
var statearr_17791_17808 = state_17782__$1;
(statearr_17791_17808[(2)] = inst_17772);

(statearr_17791_17808[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17783 === (9))){
var state_17782__$1 = state_17782;
var statearr_17792_17809 = state_17782__$1;
(statearr_17792_17809[(2)] = null);

(statearr_17792_17809[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17783 === (5))){
var inst_17767 = cljs.core.async.close_BANG_(out);
var state_17782__$1 = state_17782;
var statearr_17793_17810 = state_17782__$1;
(statearr_17793_17810[(2)] = inst_17767);

(statearr_17793_17810[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17783 === (10))){
var inst_17775 = (state_17782[(2)]);
var state_17782__$1 = (function (){var statearr_17794 = state_17782;
(statearr_17794[(8)] = inst_17775);

return statearr_17794;
})();
var statearr_17795_17811 = state_17782__$1;
(statearr_17795_17811[(2)] = null);

(statearr_17795_17811[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17783 === (8))){
var inst_17764 = (state_17782[(7)]);
var state_17782__$1 = state_17782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17782__$1,(11),out,inst_17764);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15748__auto___17801,out))
;
return ((function (switch__15115__auto__,c__15748__auto___17801,out){
return (function() {
var cljs$core$async$state_machine__15116__auto__ = null;
var cljs$core$async$state_machine__15116__auto____0 = (function (){
var statearr_17796 = [null,null,null,null,null,null,null,null,null];
(statearr_17796[(0)] = cljs$core$async$state_machine__15116__auto__);

(statearr_17796[(1)] = (1));

return statearr_17796;
});
var cljs$core$async$state_machine__15116__auto____1 = (function (state_17782){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_17782);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e17797){if((e17797 instanceof Object)){
var ex__15119__auto__ = e17797;
var statearr_17798_17812 = state_17782;
(statearr_17798_17812[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17782);

return cljs.core.cst$kw$recur;
} else {
throw e17797;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__17813 = state_17782;
state_17782 = G__17813;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$state_machine__15116__auto__ = function(state_17782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15116__auto____1.call(this,state_17782);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15116__auto____0;
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15116__auto____1;
return cljs$core$async$state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto___17801,out))
})();
var state__15750__auto__ = (function (){var statearr_17799 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_17799[(6)] = c__15748__auto___17801);

return statearr_17799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto___17801,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17815 = arguments.length;
switch (G__17815) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15748__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto__){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto__){
return (function (state_17878){
var state_val_17879 = (state_17878[(1)]);
if((state_val_17879 === (7))){
var inst_17874 = (state_17878[(2)]);
var state_17878__$1 = state_17878;
var statearr_17880_17918 = state_17878__$1;
(statearr_17880_17918[(2)] = inst_17874);

(statearr_17880_17918[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (20))){
var inst_17844 = (state_17878[(7)]);
var inst_17855 = (state_17878[(2)]);
var inst_17856 = cljs.core.next(inst_17844);
var inst_17830 = inst_17856;
var inst_17831 = null;
var inst_17832 = (0);
var inst_17833 = (0);
var state_17878__$1 = (function (){var statearr_17881 = state_17878;
(statearr_17881[(8)] = inst_17855);

(statearr_17881[(9)] = inst_17833);

(statearr_17881[(10)] = inst_17832);

(statearr_17881[(11)] = inst_17830);

(statearr_17881[(12)] = inst_17831);

return statearr_17881;
})();
var statearr_17882_17919 = state_17878__$1;
(statearr_17882_17919[(2)] = null);

(statearr_17882_17919[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (1))){
var state_17878__$1 = state_17878;
var statearr_17883_17920 = state_17878__$1;
(statearr_17883_17920[(2)] = null);

(statearr_17883_17920[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (4))){
var inst_17819 = (state_17878[(13)]);
var inst_17819__$1 = (state_17878[(2)]);
var inst_17820 = (inst_17819__$1 == null);
var state_17878__$1 = (function (){var statearr_17884 = state_17878;
(statearr_17884[(13)] = inst_17819__$1);

return statearr_17884;
})();
if(cljs.core.truth_(inst_17820)){
var statearr_17885_17921 = state_17878__$1;
(statearr_17885_17921[(1)] = (5));

} else {
var statearr_17886_17922 = state_17878__$1;
(statearr_17886_17922[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (15))){
var state_17878__$1 = state_17878;
var statearr_17890_17923 = state_17878__$1;
(statearr_17890_17923[(2)] = null);

(statearr_17890_17923[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (21))){
var state_17878__$1 = state_17878;
var statearr_17891_17924 = state_17878__$1;
(statearr_17891_17924[(2)] = null);

(statearr_17891_17924[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (13))){
var inst_17833 = (state_17878[(9)]);
var inst_17832 = (state_17878[(10)]);
var inst_17830 = (state_17878[(11)]);
var inst_17831 = (state_17878[(12)]);
var inst_17840 = (state_17878[(2)]);
var inst_17841 = (inst_17833 + (1));
var tmp17887 = inst_17832;
var tmp17888 = inst_17830;
var tmp17889 = inst_17831;
var inst_17830__$1 = tmp17888;
var inst_17831__$1 = tmp17889;
var inst_17832__$1 = tmp17887;
var inst_17833__$1 = inst_17841;
var state_17878__$1 = (function (){var statearr_17892 = state_17878;
(statearr_17892[(14)] = inst_17840);

(statearr_17892[(9)] = inst_17833__$1);

(statearr_17892[(10)] = inst_17832__$1);

(statearr_17892[(11)] = inst_17830__$1);

(statearr_17892[(12)] = inst_17831__$1);

return statearr_17892;
})();
var statearr_17893_17925 = state_17878__$1;
(statearr_17893_17925[(2)] = null);

(statearr_17893_17925[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (22))){
var state_17878__$1 = state_17878;
var statearr_17894_17926 = state_17878__$1;
(statearr_17894_17926[(2)] = null);

(statearr_17894_17926[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (6))){
var inst_17819 = (state_17878[(13)]);
var inst_17828 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17819) : f.call(null,inst_17819));
var inst_17829 = cljs.core.seq(inst_17828);
var inst_17830 = inst_17829;
var inst_17831 = null;
var inst_17832 = (0);
var inst_17833 = (0);
var state_17878__$1 = (function (){var statearr_17895 = state_17878;
(statearr_17895[(9)] = inst_17833);

(statearr_17895[(10)] = inst_17832);

(statearr_17895[(11)] = inst_17830);

(statearr_17895[(12)] = inst_17831);

return statearr_17895;
})();
var statearr_17896_17927 = state_17878__$1;
(statearr_17896_17927[(2)] = null);

(statearr_17896_17927[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (17))){
var inst_17844 = (state_17878[(7)]);
var inst_17848 = cljs.core.chunk_first(inst_17844);
var inst_17849 = cljs.core.chunk_rest(inst_17844);
var inst_17850 = cljs.core.count(inst_17848);
var inst_17830 = inst_17849;
var inst_17831 = inst_17848;
var inst_17832 = inst_17850;
var inst_17833 = (0);
var state_17878__$1 = (function (){var statearr_17897 = state_17878;
(statearr_17897[(9)] = inst_17833);

(statearr_17897[(10)] = inst_17832);

(statearr_17897[(11)] = inst_17830);

(statearr_17897[(12)] = inst_17831);

return statearr_17897;
})();
var statearr_17898_17928 = state_17878__$1;
(statearr_17898_17928[(2)] = null);

(statearr_17898_17928[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (3))){
var inst_17876 = (state_17878[(2)]);
var state_17878__$1 = state_17878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17878__$1,inst_17876);
} else {
if((state_val_17879 === (12))){
var inst_17864 = (state_17878[(2)]);
var state_17878__$1 = state_17878;
var statearr_17899_17929 = state_17878__$1;
(statearr_17899_17929[(2)] = inst_17864);

(statearr_17899_17929[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (2))){
var state_17878__$1 = state_17878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17878__$1,(4),in$);
} else {
if((state_val_17879 === (23))){
var inst_17872 = (state_17878[(2)]);
var state_17878__$1 = state_17878;
var statearr_17900_17930 = state_17878__$1;
(statearr_17900_17930[(2)] = inst_17872);

(statearr_17900_17930[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (19))){
var inst_17859 = (state_17878[(2)]);
var state_17878__$1 = state_17878;
var statearr_17901_17931 = state_17878__$1;
(statearr_17901_17931[(2)] = inst_17859);

(statearr_17901_17931[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (11))){
var inst_17844 = (state_17878[(7)]);
var inst_17830 = (state_17878[(11)]);
var inst_17844__$1 = cljs.core.seq(inst_17830);
var state_17878__$1 = (function (){var statearr_17902 = state_17878;
(statearr_17902[(7)] = inst_17844__$1);

return statearr_17902;
})();
if(inst_17844__$1){
var statearr_17903_17932 = state_17878__$1;
(statearr_17903_17932[(1)] = (14));

} else {
var statearr_17904_17933 = state_17878__$1;
(statearr_17904_17933[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (9))){
var inst_17866 = (state_17878[(2)]);
var inst_17867 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17878__$1 = (function (){var statearr_17905 = state_17878;
(statearr_17905[(15)] = inst_17866);

return statearr_17905;
})();
if(cljs.core.truth_(inst_17867)){
var statearr_17906_17934 = state_17878__$1;
(statearr_17906_17934[(1)] = (21));

} else {
var statearr_17907_17935 = state_17878__$1;
(statearr_17907_17935[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (5))){
var inst_17822 = cljs.core.async.close_BANG_(out);
var state_17878__$1 = state_17878;
var statearr_17908_17936 = state_17878__$1;
(statearr_17908_17936[(2)] = inst_17822);

(statearr_17908_17936[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (14))){
var inst_17844 = (state_17878[(7)]);
var inst_17846 = cljs.core.chunked_seq_QMARK_(inst_17844);
var state_17878__$1 = state_17878;
if(inst_17846){
var statearr_17909_17937 = state_17878__$1;
(statearr_17909_17937[(1)] = (17));

} else {
var statearr_17910_17938 = state_17878__$1;
(statearr_17910_17938[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (16))){
var inst_17862 = (state_17878[(2)]);
var state_17878__$1 = state_17878;
var statearr_17911_17939 = state_17878__$1;
(statearr_17911_17939[(2)] = inst_17862);

(statearr_17911_17939[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (10))){
var inst_17833 = (state_17878[(9)]);
var inst_17831 = (state_17878[(12)]);
var inst_17838 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17831,inst_17833);
var state_17878__$1 = state_17878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17878__$1,(13),out,inst_17838);
} else {
if((state_val_17879 === (18))){
var inst_17844 = (state_17878[(7)]);
var inst_17853 = cljs.core.first(inst_17844);
var state_17878__$1 = state_17878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17878__$1,(20),out,inst_17853);
} else {
if((state_val_17879 === (8))){
var inst_17833 = (state_17878[(9)]);
var inst_17832 = (state_17878[(10)]);
var inst_17835 = (inst_17833 < inst_17832);
var inst_17836 = inst_17835;
var state_17878__$1 = state_17878;
if(cljs.core.truth_(inst_17836)){
var statearr_17912_17940 = state_17878__$1;
(statearr_17912_17940[(1)] = (10));

} else {
var statearr_17913_17941 = state_17878__$1;
(statearr_17913_17941[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15748__auto__))
;
return ((function (switch__15115__auto__,c__15748__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15116__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15116__auto____0 = (function (){
var statearr_17914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17914[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15116__auto__);

(statearr_17914[(1)] = (1));

return statearr_17914;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15116__auto____1 = (function (state_17878){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_17878);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e17915){if((e17915 instanceof Object)){
var ex__15119__auto__ = e17915;
var statearr_17916_17942 = state_17878;
(statearr_17916_17942[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17878);

return cljs.core.cst$kw$recur;
} else {
throw e17915;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__17943 = state_17878;
state_17878 = G__17943;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15116__auto__ = function(state_17878){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15116__auto____1.call(this,state_17878);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15116__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15116__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto__))
})();
var state__15750__auto__ = (function (){var statearr_17917 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_17917[(6)] = c__15748__auto__);

return statearr_17917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto__))
);

return c__15748__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17945 = arguments.length;
switch (G__17945) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17948 = arguments.length;
switch (G__17948) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17951 = arguments.length;
switch (G__17951) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15748__auto___17998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto___17998,out){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto___17998,out){
return (function (state_17975){
var state_val_17976 = (state_17975[(1)]);
if((state_val_17976 === (7))){
var inst_17970 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
var statearr_17977_17999 = state_17975__$1;
(statearr_17977_17999[(2)] = inst_17970);

(statearr_17977_17999[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (1))){
var inst_17952 = null;
var state_17975__$1 = (function (){var statearr_17978 = state_17975;
(statearr_17978[(7)] = inst_17952);

return statearr_17978;
})();
var statearr_17979_18000 = state_17975__$1;
(statearr_17979_18000[(2)] = null);

(statearr_17979_18000[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (4))){
var inst_17955 = (state_17975[(8)]);
var inst_17955__$1 = (state_17975[(2)]);
var inst_17956 = (inst_17955__$1 == null);
var inst_17957 = cljs.core.not(inst_17956);
var state_17975__$1 = (function (){var statearr_17980 = state_17975;
(statearr_17980[(8)] = inst_17955__$1);

return statearr_17980;
})();
if(inst_17957){
var statearr_17981_18001 = state_17975__$1;
(statearr_17981_18001[(1)] = (5));

} else {
var statearr_17982_18002 = state_17975__$1;
(statearr_17982_18002[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (6))){
var state_17975__$1 = state_17975;
var statearr_17983_18003 = state_17975__$1;
(statearr_17983_18003[(2)] = null);

(statearr_17983_18003[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (3))){
var inst_17972 = (state_17975[(2)]);
var inst_17973 = cljs.core.async.close_BANG_(out);
var state_17975__$1 = (function (){var statearr_17984 = state_17975;
(statearr_17984[(9)] = inst_17972);

return statearr_17984;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17975__$1,inst_17973);
} else {
if((state_val_17976 === (2))){
var state_17975__$1 = state_17975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17975__$1,(4),ch);
} else {
if((state_val_17976 === (11))){
var inst_17955 = (state_17975[(8)]);
var inst_17964 = (state_17975[(2)]);
var inst_17952 = inst_17955;
var state_17975__$1 = (function (){var statearr_17985 = state_17975;
(statearr_17985[(10)] = inst_17964);

(statearr_17985[(7)] = inst_17952);

return statearr_17985;
})();
var statearr_17986_18004 = state_17975__$1;
(statearr_17986_18004[(2)] = null);

(statearr_17986_18004[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (9))){
var inst_17955 = (state_17975[(8)]);
var state_17975__$1 = state_17975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17975__$1,(11),out,inst_17955);
} else {
if((state_val_17976 === (5))){
var inst_17955 = (state_17975[(8)]);
var inst_17952 = (state_17975[(7)]);
var inst_17959 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17955,inst_17952);
var state_17975__$1 = state_17975;
if(inst_17959){
var statearr_17988_18005 = state_17975__$1;
(statearr_17988_18005[(1)] = (8));

} else {
var statearr_17989_18006 = state_17975__$1;
(statearr_17989_18006[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (10))){
var inst_17967 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
var statearr_17990_18007 = state_17975__$1;
(statearr_17990_18007[(2)] = inst_17967);

(statearr_17990_18007[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (8))){
var inst_17952 = (state_17975[(7)]);
var tmp17987 = inst_17952;
var inst_17952__$1 = tmp17987;
var state_17975__$1 = (function (){var statearr_17991 = state_17975;
(statearr_17991[(7)] = inst_17952__$1);

return statearr_17991;
})();
var statearr_17992_18008 = state_17975__$1;
(statearr_17992_18008[(2)] = null);

(statearr_17992_18008[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15748__auto___17998,out))
;
return ((function (switch__15115__auto__,c__15748__auto___17998,out){
return (function() {
var cljs$core$async$state_machine__15116__auto__ = null;
var cljs$core$async$state_machine__15116__auto____0 = (function (){
var statearr_17993 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17993[(0)] = cljs$core$async$state_machine__15116__auto__);

(statearr_17993[(1)] = (1));

return statearr_17993;
});
var cljs$core$async$state_machine__15116__auto____1 = (function (state_17975){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_17975);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e17994){if((e17994 instanceof Object)){
var ex__15119__auto__ = e17994;
var statearr_17995_18009 = state_17975;
(statearr_17995_18009[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17975);

return cljs.core.cst$kw$recur;
} else {
throw e17994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__18010 = state_17975;
state_17975 = G__18010;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$state_machine__15116__auto__ = function(state_17975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15116__auto____1.call(this,state_17975);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15116__auto____0;
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15116__auto____1;
return cljs$core$async$state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto___17998,out))
})();
var state__15750__auto__ = (function (){var statearr_17996 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_17996[(6)] = c__15748__auto___17998);

return statearr_17996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto___17998,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18012 = arguments.length;
switch (G__18012) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15748__auto___18078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto___18078,out){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto___18078,out){
return (function (state_18050){
var state_val_18051 = (state_18050[(1)]);
if((state_val_18051 === (7))){
var inst_18046 = (state_18050[(2)]);
var state_18050__$1 = state_18050;
var statearr_18052_18079 = state_18050__$1;
(statearr_18052_18079[(2)] = inst_18046);

(statearr_18052_18079[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18051 === (1))){
var inst_18013 = (new Array(n));
var inst_18014 = inst_18013;
var inst_18015 = (0);
var state_18050__$1 = (function (){var statearr_18053 = state_18050;
(statearr_18053[(7)] = inst_18015);

(statearr_18053[(8)] = inst_18014);

return statearr_18053;
})();
var statearr_18054_18080 = state_18050__$1;
(statearr_18054_18080[(2)] = null);

(statearr_18054_18080[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18051 === (4))){
var inst_18018 = (state_18050[(9)]);
var inst_18018__$1 = (state_18050[(2)]);
var inst_18019 = (inst_18018__$1 == null);
var inst_18020 = cljs.core.not(inst_18019);
var state_18050__$1 = (function (){var statearr_18055 = state_18050;
(statearr_18055[(9)] = inst_18018__$1);

return statearr_18055;
})();
if(inst_18020){
var statearr_18056_18081 = state_18050__$1;
(statearr_18056_18081[(1)] = (5));

} else {
var statearr_18057_18082 = state_18050__$1;
(statearr_18057_18082[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18051 === (15))){
var inst_18040 = (state_18050[(2)]);
var state_18050__$1 = state_18050;
var statearr_18058_18083 = state_18050__$1;
(statearr_18058_18083[(2)] = inst_18040);

(statearr_18058_18083[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18051 === (13))){
var state_18050__$1 = state_18050;
var statearr_18059_18084 = state_18050__$1;
(statearr_18059_18084[(2)] = null);

(statearr_18059_18084[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18051 === (6))){
var inst_18015 = (state_18050[(7)]);
var inst_18036 = (inst_18015 > (0));
var state_18050__$1 = state_18050;
if(cljs.core.truth_(inst_18036)){
var statearr_18060_18085 = state_18050__$1;
(statearr_18060_18085[(1)] = (12));

} else {
var statearr_18061_18086 = state_18050__$1;
(statearr_18061_18086[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18051 === (3))){
var inst_18048 = (state_18050[(2)]);
var state_18050__$1 = state_18050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18050__$1,inst_18048);
} else {
if((state_val_18051 === (12))){
var inst_18014 = (state_18050[(8)]);
var inst_18038 = cljs.core.vec(inst_18014);
var state_18050__$1 = state_18050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18050__$1,(15),out,inst_18038);
} else {
if((state_val_18051 === (2))){
var state_18050__$1 = state_18050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18050__$1,(4),ch);
} else {
if((state_val_18051 === (11))){
var inst_18030 = (state_18050[(2)]);
var inst_18031 = (new Array(n));
var inst_18014 = inst_18031;
var inst_18015 = (0);
var state_18050__$1 = (function (){var statearr_18062 = state_18050;
(statearr_18062[(7)] = inst_18015);

(statearr_18062[(8)] = inst_18014);

(statearr_18062[(10)] = inst_18030);

return statearr_18062;
})();
var statearr_18063_18087 = state_18050__$1;
(statearr_18063_18087[(2)] = null);

(statearr_18063_18087[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18051 === (9))){
var inst_18014 = (state_18050[(8)]);
var inst_18028 = cljs.core.vec(inst_18014);
var state_18050__$1 = state_18050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18050__$1,(11),out,inst_18028);
} else {
if((state_val_18051 === (5))){
var inst_18015 = (state_18050[(7)]);
var inst_18014 = (state_18050[(8)]);
var inst_18023 = (state_18050[(11)]);
var inst_18018 = (state_18050[(9)]);
var inst_18022 = (inst_18014[inst_18015] = inst_18018);
var inst_18023__$1 = (inst_18015 + (1));
var inst_18024 = (inst_18023__$1 < n);
var state_18050__$1 = (function (){var statearr_18064 = state_18050;
(statearr_18064[(12)] = inst_18022);

(statearr_18064[(11)] = inst_18023__$1);

return statearr_18064;
})();
if(cljs.core.truth_(inst_18024)){
var statearr_18065_18088 = state_18050__$1;
(statearr_18065_18088[(1)] = (8));

} else {
var statearr_18066_18089 = state_18050__$1;
(statearr_18066_18089[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18051 === (14))){
var inst_18043 = (state_18050[(2)]);
var inst_18044 = cljs.core.async.close_BANG_(out);
var state_18050__$1 = (function (){var statearr_18068 = state_18050;
(statearr_18068[(13)] = inst_18043);

return statearr_18068;
})();
var statearr_18069_18090 = state_18050__$1;
(statearr_18069_18090[(2)] = inst_18044);

(statearr_18069_18090[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18051 === (10))){
var inst_18034 = (state_18050[(2)]);
var state_18050__$1 = state_18050;
var statearr_18070_18091 = state_18050__$1;
(statearr_18070_18091[(2)] = inst_18034);

(statearr_18070_18091[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18051 === (8))){
var inst_18014 = (state_18050[(8)]);
var inst_18023 = (state_18050[(11)]);
var tmp18067 = inst_18014;
var inst_18014__$1 = tmp18067;
var inst_18015 = inst_18023;
var state_18050__$1 = (function (){var statearr_18071 = state_18050;
(statearr_18071[(7)] = inst_18015);

(statearr_18071[(8)] = inst_18014__$1);

return statearr_18071;
})();
var statearr_18072_18092 = state_18050__$1;
(statearr_18072_18092[(2)] = null);

(statearr_18072_18092[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15748__auto___18078,out))
;
return ((function (switch__15115__auto__,c__15748__auto___18078,out){
return (function() {
var cljs$core$async$state_machine__15116__auto__ = null;
var cljs$core$async$state_machine__15116__auto____0 = (function (){
var statearr_18073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18073[(0)] = cljs$core$async$state_machine__15116__auto__);

(statearr_18073[(1)] = (1));

return statearr_18073;
});
var cljs$core$async$state_machine__15116__auto____1 = (function (state_18050){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_18050);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e18074){if((e18074 instanceof Object)){
var ex__15119__auto__ = e18074;
var statearr_18075_18093 = state_18050;
(statearr_18075_18093[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18050);

return cljs.core.cst$kw$recur;
} else {
throw e18074;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__18094 = state_18050;
state_18050 = G__18094;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$state_machine__15116__auto__ = function(state_18050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15116__auto____1.call(this,state_18050);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15116__auto____0;
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15116__auto____1;
return cljs$core$async$state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto___18078,out))
})();
var state__15750__auto__ = (function (){var statearr_18076 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_18076[(6)] = c__15748__auto___18078);

return statearr_18076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto___18078,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18096 = arguments.length;
switch (G__18096) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15748__auto___18166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto___18166,out){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto___18166,out){
return (function (state_18138){
var state_val_18139 = (state_18138[(1)]);
if((state_val_18139 === (7))){
var inst_18134 = (state_18138[(2)]);
var state_18138__$1 = state_18138;
var statearr_18140_18167 = state_18138__$1;
(statearr_18140_18167[(2)] = inst_18134);

(statearr_18140_18167[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18139 === (1))){
var inst_18097 = [];
var inst_18098 = inst_18097;
var inst_18099 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18138__$1 = (function (){var statearr_18141 = state_18138;
(statearr_18141[(7)] = inst_18099);

(statearr_18141[(8)] = inst_18098);

return statearr_18141;
})();
var statearr_18142_18168 = state_18138__$1;
(statearr_18142_18168[(2)] = null);

(statearr_18142_18168[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18139 === (4))){
var inst_18102 = (state_18138[(9)]);
var inst_18102__$1 = (state_18138[(2)]);
var inst_18103 = (inst_18102__$1 == null);
var inst_18104 = cljs.core.not(inst_18103);
var state_18138__$1 = (function (){var statearr_18143 = state_18138;
(statearr_18143[(9)] = inst_18102__$1);

return statearr_18143;
})();
if(inst_18104){
var statearr_18144_18169 = state_18138__$1;
(statearr_18144_18169[(1)] = (5));

} else {
var statearr_18145_18170 = state_18138__$1;
(statearr_18145_18170[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18139 === (15))){
var inst_18128 = (state_18138[(2)]);
var state_18138__$1 = state_18138;
var statearr_18146_18171 = state_18138__$1;
(statearr_18146_18171[(2)] = inst_18128);

(statearr_18146_18171[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18139 === (13))){
var state_18138__$1 = state_18138;
var statearr_18147_18172 = state_18138__$1;
(statearr_18147_18172[(2)] = null);

(statearr_18147_18172[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18139 === (6))){
var inst_18098 = (state_18138[(8)]);
var inst_18123 = inst_18098.length;
var inst_18124 = (inst_18123 > (0));
var state_18138__$1 = state_18138;
if(cljs.core.truth_(inst_18124)){
var statearr_18148_18173 = state_18138__$1;
(statearr_18148_18173[(1)] = (12));

} else {
var statearr_18149_18174 = state_18138__$1;
(statearr_18149_18174[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18139 === (3))){
var inst_18136 = (state_18138[(2)]);
var state_18138__$1 = state_18138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18138__$1,inst_18136);
} else {
if((state_val_18139 === (12))){
var inst_18098 = (state_18138[(8)]);
var inst_18126 = cljs.core.vec(inst_18098);
var state_18138__$1 = state_18138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18138__$1,(15),out,inst_18126);
} else {
if((state_val_18139 === (2))){
var state_18138__$1 = state_18138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18138__$1,(4),ch);
} else {
if((state_val_18139 === (11))){
var inst_18106 = (state_18138[(10)]);
var inst_18102 = (state_18138[(9)]);
var inst_18116 = (state_18138[(2)]);
var inst_18117 = [];
var inst_18118 = inst_18117.push(inst_18102);
var inst_18098 = inst_18117;
var inst_18099 = inst_18106;
var state_18138__$1 = (function (){var statearr_18150 = state_18138;
(statearr_18150[(11)] = inst_18116);

(statearr_18150[(7)] = inst_18099);

(statearr_18150[(12)] = inst_18118);

(statearr_18150[(8)] = inst_18098);

return statearr_18150;
})();
var statearr_18151_18175 = state_18138__$1;
(statearr_18151_18175[(2)] = null);

(statearr_18151_18175[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18139 === (9))){
var inst_18098 = (state_18138[(8)]);
var inst_18114 = cljs.core.vec(inst_18098);
var state_18138__$1 = state_18138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18138__$1,(11),out,inst_18114);
} else {
if((state_val_18139 === (5))){
var inst_18099 = (state_18138[(7)]);
var inst_18106 = (state_18138[(10)]);
var inst_18102 = (state_18138[(9)]);
var inst_18106__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18102) : f.call(null,inst_18102));
var inst_18107 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18106__$1,inst_18099);
var inst_18108 = cljs.core.keyword_identical_QMARK_(inst_18099,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18109 = (inst_18107) || (inst_18108);
var state_18138__$1 = (function (){var statearr_18152 = state_18138;
(statearr_18152[(10)] = inst_18106__$1);

return statearr_18152;
})();
if(cljs.core.truth_(inst_18109)){
var statearr_18153_18176 = state_18138__$1;
(statearr_18153_18176[(1)] = (8));

} else {
var statearr_18154_18177 = state_18138__$1;
(statearr_18154_18177[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18139 === (14))){
var inst_18131 = (state_18138[(2)]);
var inst_18132 = cljs.core.async.close_BANG_(out);
var state_18138__$1 = (function (){var statearr_18156 = state_18138;
(statearr_18156[(13)] = inst_18131);

return statearr_18156;
})();
var statearr_18157_18178 = state_18138__$1;
(statearr_18157_18178[(2)] = inst_18132);

(statearr_18157_18178[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18139 === (10))){
var inst_18121 = (state_18138[(2)]);
var state_18138__$1 = state_18138;
var statearr_18158_18179 = state_18138__$1;
(statearr_18158_18179[(2)] = inst_18121);

(statearr_18158_18179[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18139 === (8))){
var inst_18106 = (state_18138[(10)]);
var inst_18098 = (state_18138[(8)]);
var inst_18102 = (state_18138[(9)]);
var inst_18111 = inst_18098.push(inst_18102);
var tmp18155 = inst_18098;
var inst_18098__$1 = tmp18155;
var inst_18099 = inst_18106;
var state_18138__$1 = (function (){var statearr_18159 = state_18138;
(statearr_18159[(7)] = inst_18099);

(statearr_18159[(8)] = inst_18098__$1);

(statearr_18159[(14)] = inst_18111);

return statearr_18159;
})();
var statearr_18160_18180 = state_18138__$1;
(statearr_18160_18180[(2)] = null);

(statearr_18160_18180[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15748__auto___18166,out))
;
return ((function (switch__15115__auto__,c__15748__auto___18166,out){
return (function() {
var cljs$core$async$state_machine__15116__auto__ = null;
var cljs$core$async$state_machine__15116__auto____0 = (function (){
var statearr_18161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18161[(0)] = cljs$core$async$state_machine__15116__auto__);

(statearr_18161[(1)] = (1));

return statearr_18161;
});
var cljs$core$async$state_machine__15116__auto____1 = (function (state_18138){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_18138);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e18162){if((e18162 instanceof Object)){
var ex__15119__auto__ = e18162;
var statearr_18163_18181 = state_18138;
(statearr_18163_18181[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18138);

return cljs.core.cst$kw$recur;
} else {
throw e18162;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__18182 = state_18138;
state_18138 = G__18182;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs$core$async$state_machine__15116__auto__ = function(state_18138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15116__auto____1.call(this,state_18138);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15116__auto____0;
cljs$core$async$state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15116__auto____1;
return cljs$core$async$state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto___18166,out))
})();
var state__15750__auto__ = (function (){var statearr_18164 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_18164[(6)] = c__15748__auto___18166);

return statearr_18164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto___18166,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

