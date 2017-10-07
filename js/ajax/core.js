// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort(this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__8620__auto__ = [];
var len__8613__auto___13537 = arguments.length;
var i__8614__auto___13538 = (0);
while(true){
if((i__8614__auto___13538 < len__8613__auto___13537)){
args__8620__auto__.push((arguments[i__8614__auto___13538]));

var G__13539 = (i__8614__auto___13538 + (1));
i__8614__auto___13538 = G__13539;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13045__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"GET",(((f__13045__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13045__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq13535){
var G__13536 = cljs.core.first(seq13535);
var seq13535__$1 = cljs.core.next(seq13535);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__13536,seq13535__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__8620__auto__ = [];
var len__8613__auto___13546 = arguments.length;
var i__8614__auto___13547 = (0);
while(true){
if((i__8614__auto___13547 < len__8613__auto___13546)){
args__8620__auto__.push((arguments[i__8614__auto___13547]));

var G__13548 = (i__8614__auto___13547 + (1));
i__8614__auto___13547 = G__13548;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13045__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"HEAD",(((f__13045__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13045__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq13541){
var G__13542 = cljs.core.first(seq13541);
var seq13541__$1 = cljs.core.next(seq13541);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__13542,seq13541__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__8620__auto__ = [];
var len__8613__auto___13556 = arguments.length;
var i__8614__auto___13557 = (0);
while(true){
if((i__8614__auto___13557 < len__8613__auto___13556)){
args__8620__auto__.push((arguments[i__8614__auto___13557]));

var G__13558 = (i__8614__auto___13557 + (1));
i__8614__auto___13557 = G__13558;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13045__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"POST",(((f__13045__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13045__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq13550){
var G__13551 = cljs.core.first(seq13550);
var seq13550__$1 = cljs.core.next(seq13550);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__13551,seq13550__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__8620__auto__ = [];
var len__8613__auto___13566 = arguments.length;
var i__8614__auto___13567 = (0);
while(true){
if((i__8614__auto___13567 < len__8613__auto___13566)){
args__8620__auto__.push((arguments[i__8614__auto___13567]));

var G__13568 = (i__8614__auto___13567 + (1));
i__8614__auto___13567 = G__13568;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13045__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PUT",(((f__13045__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13045__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq13560){
var G__13561 = cljs.core.first(seq13560);
var seq13560__$1 = cljs.core.next(seq13560);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__13561,seq13560__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__8620__auto__ = [];
var len__8613__auto___13575 = arguments.length;
var i__8614__auto___13576 = (0);
while(true){
if((i__8614__auto___13576 < len__8613__auto___13575)){
args__8620__auto__.push((arguments[i__8614__auto___13576]));

var G__13577 = (i__8614__auto___13576 + (1));
i__8614__auto___13576 = G__13577;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13045__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"DELETE",(((f__13045__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13045__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq13572){
var G__13573 = cljs.core.first(seq13572);
var seq13572__$1 = cljs.core.next(seq13572);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__13573,seq13572__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__8620__auto__ = [];
var len__8613__auto___13582 = arguments.length;
var i__8614__auto___13583 = (0);
while(true){
if((i__8614__auto___13583 < len__8613__auto___13582)){
args__8620__auto__.push((arguments[i__8614__auto___13583]));

var G__13584 = (i__8614__auto___13583 + (1));
i__8614__auto___13583 = G__13584;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13045__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"OPTIONS",(((f__13045__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13045__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq13580){
var G__13581 = cljs.core.first(seq13580);
var seq13580__$1 = cljs.core.next(seq13580);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__13581,seq13580__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__8620__auto__ = [];
var len__8613__auto___13587 = arguments.length;
var i__8614__auto___13589 = (0);
while(true){
if((i__8614__auto___13589 < len__8613__auto___13587)){
args__8620__auto__.push((arguments[i__8614__auto___13589]));

var G__13591 = (i__8614__auto___13589 + (1));
i__8614__auto___13589 = G__13591;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13045__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"TRACE",(((f__13045__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13045__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq13585){
var G__13586 = cljs.core.first(seq13585);
var seq13585__$1 = cljs.core.next(seq13585);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__13586,seq13585__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__8620__auto__ = [];
var len__8613__auto___13612 = arguments.length;
var i__8614__auto___13617 = (0);
while(true){
if((i__8614__auto___13617 < len__8613__auto___13612)){
args__8620__auto__.push((arguments[i__8614__auto___13617]));

var G__13618 = (i__8614__auto___13617 + (1));
i__8614__auto___13617 = G__13618;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13045__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PATCH",(((f__13045__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13045__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq13600){
var G__13601 = cljs.core.first(seq13600);
var seq13600__$1 = cljs.core.next(seq13600);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__13601,seq13600__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__8620__auto__ = [];
var len__8613__auto___13641 = arguments.length;
var i__8614__auto___13642 = (0);
while(true){
if((i__8614__auto___13642 < len__8613__auto___13641)){
args__8620__auto__.push((arguments[i__8614__auto___13642]));

var G__13643 = (i__8614__auto___13642 + (1));
i__8614__auto___13642 = G__13643;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13045__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PURGE",(((f__13045__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13045__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq13633){
var G__13634 = cljs.core.first(seq13633);
var seq13633__$1 = cljs.core.next(seq13633);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__13634,seq13633__$1);
});

