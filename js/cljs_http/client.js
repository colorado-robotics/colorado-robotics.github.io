// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__7476__auto__ = v;
if(cljs.core.truth_(and__7476__auto__)){
return (v > (0));
} else {
return and__7476__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18254_SHARP_,p2__18253_SHARP_){
var vec__18255 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__18253_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18255,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18255,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18254_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_(url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.cst$kw$server_DASH_name,uri.getDomain(),cljs.core.cst$kw$server_DASH_port,cljs_http.client.if_pos(uri.getPort()),cljs.core.cst$kw$uri,uri.getPath(),cljs.core.cst$kw$query_DASH_string,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),cljs.core.cst$kw$query_DASH_params,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18258_SHARP_){
return cljs_http.client.encode_val(k,p1__18258_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__18259){
var vec__18260 = p__18259;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18260,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18260,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__18263_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18263_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__7476__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__7476__auto__){
var and__7476__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__7476__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__7476__auto____$1;
}
} else {
return and__7476__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$edn_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__18264 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18264) : client.call(null,G__18264));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__18265_SHARP_){
return cljs_http.client.decode_body(p1__18265_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__8620__auto__ = [];
var len__8613__auto___18273 = arguments.length;
var i__8614__auto___18274 = (0);
while(true){
if((i__8614__auto___18274 < len__8613__auto___18273)){
args__8620__auto__.push((arguments[i__8614__auto___18274]));

var G__18275 = (i__8614__auto___18274 + (1));
i__8614__auto___18274 = G__18275;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__18268){
var vec__18269 = p__18268;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18269,(0),null);
return ((function (vec__18269,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__7488__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
var G__18272 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18272) : client.call(null,G__18272));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__18269,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq18266){
var G__18267 = cljs.core.first(seq18266);
var seq18266__$1 = cljs.core.next(seq18266);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__18267,seq18266__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__8620__auto__ = [];
var len__8613__auto___18283 = arguments.length;
var i__8614__auto___18284 = (0);
while(true){
if((i__8614__auto___18284 < len__8613__auto___18283)){
args__8620__auto__.push((arguments[i__8614__auto___18284]));

var G__18285 = (i__8614__auto___18284 + (1));
i__8614__auto___18284 = G__18285;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__18278){
var vec__18279 = p__18278;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18279,(0),null);
return ((function (vec__18279,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__7488__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
var G__18282 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18282) : client.call(null,G__18282));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__18279,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq18276){
var G__18277 = cljs.core.first(seq18276);
var seq18276__$1 = cljs.core.next(seq18276);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__18277,seq18276__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__8620__auto__ = [];
var len__8613__auto___18293 = arguments.length;
var i__8614__auto___18294 = (0);
while(true){
if((i__8614__auto___18294 < len__8613__auto___18293)){
args__8620__auto__.push((arguments[i__8614__auto___18294]));

var G__18295 = (i__8614__auto___18294 + (1));
i__8614__auto___18294 = G__18295;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__18288){
var vec__18289 = p__18288;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18289,(0),null);
return ((function (vec__18289,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__7488__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
var G__18292 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18292) : client.call(null,G__18292));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__18289,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq18286){
var G__18287 = cljs.core.first(seq18286);
var seq18286__$1 = cljs.core.next(seq18286);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__18287,seq18286__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$encoding,cljs.core.cst$kw$json,cljs.core.cst$kw$encoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$decoding,cljs.core.cst$kw$json,cljs.core.cst$kw$decoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$transit_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__18296 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__18296__$1 = ((((!((map__18296 == null)))?((((map__18296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18296):map__18296);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18296__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18296__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__18298 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18298) : client.call(null,G__18298));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__18301 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__18301__$1 = ((((!((map__18301 == null)))?((((map__18301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18301):map__18301);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18301__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18301__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__18301,map__18301__$1,decoding,decoding_opts){
return (function (p1__18299_SHARP_){
return cljs_http.util.transit_decode(p1__18299_SHARP_,decoding,decoding_opts);
});})(map__18301,map__18301__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__18301,map__18301__$1,decoding,decoding_opts,transit_decode){
return (function (p1__18300_SHARP_){
return cljs_http.client.decode_body(p1__18300_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__18301,map__18301__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__18303 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18303) : client.call(null,G__18303));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__18304_SHARP_){
return cljs_http.client.decode_body(p1__18304_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__18305){
var map__18306 = p__18305;
var map__18306__$1 = ((((!((map__18306 == null)))?((((map__18306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18306):map__18306);
var req = map__18306__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18306__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__18308 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18308) : client.call(null,G__18308));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__18309){
var map__18310 = p__18309;
var map__18310__$1 = ((((!((map__18310 == null)))?((((map__18310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18310):map__18310);
var request = map__18310__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18310__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18310__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18310__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__7476__auto__ = form_params;
if(cljs.core.truth_(and__7476__auto__)){
var fexpr__18312 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null);
return (fexpr__18312.cljs$core$IFn$_invoke$arity$1 ? fexpr__18312.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__18312.call(null,request_method));
} else {
return and__7476__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__18313 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18313) : client.call(null,G__18313));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__18314_18324 = cljs.core.seq(params);
var chunk__18315_18325 = null;
var count__18316_18326 = (0);
var i__18317_18327 = (0);
while(true){
if((i__18317_18327 < count__18316_18326)){
var vec__18318_18328 = chunk__18315_18325.cljs$core$IIndexed$_nth$arity$2(null,i__18317_18327);
var k_18329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18318_18328,(0),null);
var v_18330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18318_18328,(1),null);
if(cljs.core.coll_QMARK_(v_18330)){
form_data.append(cljs.core.name(k_18329),cljs.core.first(v_18330),cljs.core.second(v_18330));
} else {
form_data.append(cljs.core.name(k_18329),v_18330);
}

var G__18331 = seq__18314_18324;
var G__18332 = chunk__18315_18325;
var G__18333 = count__18316_18326;
var G__18334 = (i__18317_18327 + (1));
seq__18314_18324 = G__18331;
chunk__18315_18325 = G__18332;
count__18316_18326 = G__18333;
i__18317_18327 = G__18334;
continue;
} else {
var temp__4657__auto___18335 = cljs.core.seq(seq__18314_18324);
if(temp__4657__auto___18335){
var seq__18314_18336__$1 = temp__4657__auto___18335;
if(cljs.core.chunked_seq_QMARK_(seq__18314_18336__$1)){
var c__8308__auto___18337 = cljs.core.chunk_first(seq__18314_18336__$1);
var G__18338 = cljs.core.chunk_rest(seq__18314_18336__$1);
var G__18339 = c__8308__auto___18337;
var G__18340 = cljs.core.count(c__8308__auto___18337);
var G__18341 = (0);
seq__18314_18324 = G__18338;
chunk__18315_18325 = G__18339;
count__18316_18326 = G__18340;
i__18317_18327 = G__18341;
continue;
} else {
var vec__18321_18342 = cljs.core.first(seq__18314_18336__$1);
var k_18343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18321_18342,(0),null);
var v_18344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18321_18342,(1),null);
if(cljs.core.coll_QMARK_(v_18344)){
form_data.append(cljs.core.name(k_18343),cljs.core.first(v_18344),cljs.core.second(v_18344));
} else {
form_data.append(cljs.core.name(k_18343),v_18344);
}

var G__18345 = cljs.core.next(seq__18314_18336__$1);
var G__18346 = null;
var G__18347 = (0);
var G__18348 = (0);
seq__18314_18324 = G__18345;
chunk__18315_18325 = G__18346;
count__18316_18326 = G__18347;
i__18317_18327 = G__18348;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__18349){
var map__18350 = p__18349;
var map__18350__$1 = ((((!((map__18350 == null)))?((((map__18350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18350):map__18350);
var request = map__18350__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18350__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18350__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__7476__auto__ = multipart_params;
if(cljs.core.truth_(and__7476__auto__)){
var fexpr__18352 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null);
return (fexpr__18352.cljs$core$IFn$_invoke$arity$1 ? fexpr__18352.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__18352.call(null,request_method));
} else {
return and__7476__auto__;
}
})())){
var G__18353 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18353) : client.call(null,G__18353));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
var G__18354 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18354) : client.call(null,G__18354));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__18355_SHARP_){
var G__18356 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18355_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18356) : client.call(null,G__18356));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__18358){
var map__18359 = p__18358;
var map__18359__$1 = ((((!((map__18359 == null)))?((((map__18359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18359):map__18359);
var req = map__18359__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18359__$1,cljs.core.cst$kw$query_DASH_params);
var temp__4655__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
var G__18361 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__4655__auto__,map__18359,map__18359__$1,req,query_params){
return (function (p1__18357_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__18357_SHARP_,query_params], 0));
});})(spec,temp__4655__auto__,map__18359,map__18359__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18361) : client.call(null,G__18361));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__8620__auto__ = [];
var len__8613__auto___18369 = arguments.length;
var i__8614__auto___18370 = (0);
while(true){
if((i__8614__auto___18370 < len__8613__auto___18369)){
args__8620__auto__.push((arguments[i__8614__auto___18370]));

var G__18371 = (i__8614__auto___18370 + (1));
i__8614__auto___18370 = G__18371;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__18364){
var vec__18365 = p__18364;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18365,(0),null);
return ((function (vec__18365,credentials){
return (function (req){
var credentials__$1 = (function (){var or__7488__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__18368 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18368) : client.call(null,G__18368));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__18365,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq18362){
var G__18363 = cljs.core.first(seq18362);
var seq18362__$1 = cljs.core.next(seq18362);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__18363,seq18362__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
var G__18372 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bearer "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18372) : client.call(null,G__18372));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$channel.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__8620__auto__ = [];
var len__8613__auto___18380 = arguments.length;
var i__8614__auto___18381 = (0);
while(true){
if((i__8614__auto___18381 < len__8613__auto___18380)){
args__8620__auto__.push((arguments[i__8614__auto___18381]));

var G__18382 = (i__8614__auto___18381 + (1));
i__8614__auto___18381 = G__18382;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18375){
var vec__18376 = p__18375;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18376,(0),null);
var G__18379 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18379) : cljs_http.client.request.call(null,G__18379));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq18373){
var G__18374 = cljs.core.first(seq18373);
var seq18373__$1 = cljs.core.next(seq18373);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__18374,seq18373__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__8620__auto__ = [];
var len__8613__auto___18390 = arguments.length;
var i__8614__auto___18391 = (0);
while(true){
if((i__8614__auto___18391 < len__8613__auto___18390)){
args__8620__auto__.push((arguments[i__8614__auto___18391]));

var G__18392 = (i__8614__auto___18391 + (1));
i__8614__auto___18391 = G__18392;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18385){
var vec__18386 = p__18385;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18386,(0),null);
var G__18389 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18389) : cljs_http.client.request.call(null,G__18389));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq18383){
var G__18384 = cljs.core.first(seq18383);
var seq18383__$1 = cljs.core.next(seq18383);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__18384,seq18383__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__8620__auto__ = [];
var len__8613__auto___18400 = arguments.length;
var i__8614__auto___18401 = (0);
while(true){
if((i__8614__auto___18401 < len__8613__auto___18400)){
args__8620__auto__.push((arguments[i__8614__auto___18401]));

var G__18402 = (i__8614__auto___18401 + (1));
i__8614__auto___18401 = G__18402;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18395){
var vec__18396 = p__18395;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18396,(0),null);
var G__18399 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18399) : cljs_http.client.request.call(null,G__18399));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq18393){
var G__18394 = cljs.core.first(seq18393);
var seq18393__$1 = cljs.core.next(seq18393);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__18394,seq18393__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__8620__auto__ = [];
var len__8613__auto___18410 = arguments.length;
var i__8614__auto___18411 = (0);
while(true){
if((i__8614__auto___18411 < len__8613__auto___18410)){
args__8620__auto__.push((arguments[i__8614__auto___18411]));

var G__18412 = (i__8614__auto___18411 + (1));
i__8614__auto___18411 = G__18412;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18405){
var vec__18406 = p__18405;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18406,(0),null);
var G__18409 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18409) : cljs_http.client.request.call(null,G__18409));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq18403){
var G__18404 = cljs.core.first(seq18403);
var seq18403__$1 = cljs.core.next(seq18403);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__18404,seq18403__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__8620__auto__ = [];
var len__8613__auto___18420 = arguments.length;
var i__8614__auto___18421 = (0);
while(true){
if((i__8614__auto___18421 < len__8613__auto___18420)){
args__8620__auto__.push((arguments[i__8614__auto___18421]));

var G__18422 = (i__8614__auto___18421 + (1));
i__8614__auto___18421 = G__18422;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18415){
var vec__18416 = p__18415;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18416,(0),null);
var G__18419 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18419) : cljs_http.client.request.call(null,G__18419));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq18413){
var G__18414 = cljs.core.first(seq18413);
var seq18413__$1 = cljs.core.next(seq18413);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__18414,seq18413__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__8620__auto__ = [];
var len__8613__auto___18430 = arguments.length;
var i__8614__auto___18431 = (0);
while(true){
if((i__8614__auto___18431 < len__8613__auto___18430)){
args__8620__auto__.push((arguments[i__8614__auto___18431]));

var G__18432 = (i__8614__auto___18431 + (1));
i__8614__auto___18431 = G__18432;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18425){
var vec__18426 = p__18425;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18426,(0),null);
var G__18429 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18429) : cljs_http.client.request.call(null,G__18429));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq18423){
var G__18424 = cljs.core.first(seq18423);
var seq18423__$1 = cljs.core.next(seq18423);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__18424,seq18423__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__8620__auto__ = [];
var len__8613__auto___18440 = arguments.length;
var i__8614__auto___18441 = (0);
while(true){
if((i__8614__auto___18441 < len__8613__auto___18440)){
args__8620__auto__.push((arguments[i__8614__auto___18441]));

var G__18442 = (i__8614__auto___18441 + (1));
i__8614__auto___18441 = G__18442;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18435){
var vec__18436 = p__18435;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18436,(0),null);
var G__18439 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18439) : cljs_http.client.request.call(null,G__18439));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq18433){
var G__18434 = cljs.core.first(seq18433);
var seq18433__$1 = cljs.core.next(seq18433);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__18434,seq18433__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__8620__auto__ = [];
var len__8613__auto___18450 = arguments.length;
var i__8614__auto___18451 = (0);
while(true){
if((i__8614__auto___18451 < len__8613__auto___18450)){
args__8620__auto__.push((arguments[i__8614__auto___18451]));

var G__18452 = (i__8614__auto___18451 + (1));
i__8614__auto___18451 = G__18452;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18445){
var vec__18446 = p__18445;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18446,(0),null);
var G__18449 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18449) : cljs_http.client.request.call(null,G__18449));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq18443){
var G__18444 = cljs.core.first(seq18443);
var seq18443__$1 = cljs.core.next(seq18443);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__18444,seq18443__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__8620__auto__ = [];
var len__8613__auto___18460 = arguments.length;
var i__8614__auto___18461 = (0);
while(true){
if((i__8614__auto___18461 < len__8613__auto___18460)){
args__8620__auto__.push((arguments[i__8614__auto___18461]));

var G__18462 = (i__8614__auto___18461 + (1));
i__8614__auto___18461 = G__18462;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18455){
var vec__18456 = p__18455;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18456,(0),null);
var G__18459 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18459) : cljs_http.client.request.call(null,G__18459));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq18453){
var G__18454 = cljs.core.first(seq18453);
var seq18453__$1 = cljs.core.next(seq18453);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__18454,seq18453__$1);
});

