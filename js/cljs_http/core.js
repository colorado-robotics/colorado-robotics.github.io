// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = (function (){var fexpr__18185 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__18185.cljs$core$IFn$_invoke$arity$1 ? fexpr__18185.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__18185.call(null,channel));
})();
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__18186){
var vec__18187 = p__18186;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18187,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18187,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__18190 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__18190)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__18190)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__18190)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__18190)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__18190)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__18190)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18190)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__18191){
var map__18192 = p__18191;
var map__18192__$1 = ((((!((map__18192 == null)))?((((map__18192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18192):map__18192);
var request = map__18192__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18192__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18192__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18192__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__7488__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__18194 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__18194,default_headers);

cljs_http.core.apply_response_type_BANG_(G__18194,response_type);

G__18194.setTimeoutInterval(timeout);

G__18194.setWithCredentials(send_credentials);

return G__18194;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__18195){
var map__18196 = p__18195;
var map__18196__$1 = ((((!((map__18196 == null)))?((((map__18196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18196):map__18196);
var request = map__18196__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18196__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18196__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18196__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18196__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18196__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18196__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__7488__auto__ = request_method;
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__18196,map__18196__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__18198 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__18198) : cljs_http.core.error_kw.call(null,G__18198));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__18196,map__18196__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_18221 = ((function (channel,request_url,method,headers__$1,xhr,map__18196,map__18196__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__18196,map__18196__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__18199_18222 = xhr;
G__18199_18222.setProgressEventsEnabled(true);

G__18199_18222.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_18221,cljs.core.cst$kw$upload));

G__18199_18222.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_18221,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__15748__auto___18223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto___18223,channel,request_url,method,headers__$1,xhr,map__18196,map__18196__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto___18223,channel,request_url,method,headers__$1,xhr,map__18196,map__18196__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_18210){
var state_val_18211 = (state_18210[(1)]);
if((state_val_18211 === (1))){
var state_18210__$1 = state_18210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18210__$1,(2),cancel);
} else {
if((state_val_18211 === (2))){
var inst_18201 = (state_18210[(2)]);
var inst_18202 = xhr.isComplete();
var inst_18203 = cljs.core.not(inst_18202);
var state_18210__$1 = (function (){var statearr_18212 = state_18210;
(statearr_18212[(7)] = inst_18201);

return statearr_18212;
})();
if(inst_18203){
var statearr_18213_18224 = state_18210__$1;
(statearr_18213_18224[(1)] = (3));

} else {
var statearr_18214_18225 = state_18210__$1;
(statearr_18214_18225[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18211 === (3))){
var inst_18205 = xhr.abort();
var state_18210__$1 = state_18210;
var statearr_18215_18226 = state_18210__$1;
(statearr_18215_18226[(2)] = inst_18205);

(statearr_18215_18226[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18211 === (4))){
var state_18210__$1 = state_18210;
var statearr_18216_18227 = state_18210__$1;
(statearr_18216_18227[(2)] = null);

(statearr_18216_18227[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18211 === (5))){
var inst_18208 = (state_18210[(2)]);
var state_18210__$1 = state_18210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18210__$1,inst_18208);
} else {
return null;
}
}
}
}
}
});})(c__15748__auto___18223,channel,request_url,method,headers__$1,xhr,map__18196,map__18196__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__15115__auto__,c__15748__auto___18223,channel,request_url,method,headers__$1,xhr,map__18196,map__18196__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__15116__auto__ = null;
var cljs_http$core$xhr_$_state_machine__15116__auto____0 = (function (){
var statearr_18217 = [null,null,null,null,null,null,null,null];
(statearr_18217[(0)] = cljs_http$core$xhr_$_state_machine__15116__auto__);

(statearr_18217[(1)] = (1));

return statearr_18217;
});
var cljs_http$core$xhr_$_state_machine__15116__auto____1 = (function (state_18210){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_18210);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e18218){if((e18218 instanceof Object)){
var ex__15119__auto__ = e18218;
var statearr_18219_18228 = state_18210;
(statearr_18219_18228[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18210);

return cljs.core.cst$kw$recur;
} else {
throw e18218;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__18229 = state_18210;
state_18210 = G__18229;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__15116__auto__ = function(state_18210){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__15116__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__15116__auto____1.call(this,state_18210);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__15116__auto____0;
cljs_http$core$xhr_$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__15116__auto____1;
return cljs_http$core$xhr_$_state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto___18223,channel,request_url,method,headers__$1,xhr,map__18196,map__18196__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__15750__auto__ = (function (){var statearr_18220 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_18220[(6)] = c__15748__auto___18223);

return statearr_18220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto___18223,channel,request_url,method,headers__$1,xhr,map__18196,map__18196__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__18230){
var map__18231 = p__18230;
var map__18231__$1 = ((((!((map__18231 == null)))?((((map__18231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18231):map__18231);
var request = map__18231__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18231__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18231__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18231__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18231__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_18244 = jsonp.send(null,((function (channel,jsonp,map__18231,map__18231__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__18231,map__18231__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__18231,map__18231__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__18231,map__18231__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_18244], null));

if(cljs.core.truth_(cancel)){
var c__15748__auto___18245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto___18245,req_18244,channel,jsonp,map__18231,map__18231__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto___18245,req_18244,channel,jsonp,map__18231,map__18231__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_18237){
var state_val_18238 = (state_18237[(1)]);
if((state_val_18238 === (1))){
var state_18237__$1 = state_18237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18237__$1,(2),cancel);
} else {
if((state_val_18238 === (2))){
var inst_18234 = (state_18237[(2)]);
var inst_18235 = jsonp.cancel(req_18244);
var state_18237__$1 = (function (){var statearr_18239 = state_18237;
(statearr_18239[(7)] = inst_18234);

return statearr_18239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18237__$1,inst_18235);
} else {
return null;
}
}
});})(c__15748__auto___18245,req_18244,channel,jsonp,map__18231,map__18231__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__15115__auto__,c__15748__auto___18245,req_18244,channel,jsonp,map__18231,map__18231__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__15116__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__15116__auto____0 = (function (){
var statearr_18240 = [null,null,null,null,null,null,null,null];
(statearr_18240[(0)] = cljs_http$core$jsonp_$_state_machine__15116__auto__);

(statearr_18240[(1)] = (1));

return statearr_18240;
});
var cljs_http$core$jsonp_$_state_machine__15116__auto____1 = (function (state_18237){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_18237);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e18241){if((e18241 instanceof Object)){
var ex__15119__auto__ = e18241;
var statearr_18242_18246 = state_18237;
(statearr_18242_18246[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18237);

return cljs.core.cst$kw$recur;
} else {
throw e18241;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__18247 = state_18237;
state_18237 = G__18247;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__15116__auto__ = function(state_18237){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__15116__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__15116__auto____1.call(this,state_18237);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__15116__auto____0;
cljs_http$core$jsonp_$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__15116__auto____1;
return cljs_http$core$jsonp_$_state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto___18245,req_18244,channel,jsonp,map__18231,map__18231__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__15750__auto__ = (function (){var statearr_18243 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_18243[(6)] = c__15748__auto___18245);

return statearr_18243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto___18245,req_18244,channel,jsonp,map__18231,map__18231__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__18248){
var map__18249 = p__18248;
var map__18249__$1 = ((((!((map__18249 == null)))?((((map__18249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18249.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18249):map__18249);
var request = map__18249__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18249__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
