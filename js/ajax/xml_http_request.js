// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__12598 = e.target.readyState;
var fexpr__12597 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__12597.cljs$core$IFn$_invoke$arity$1 ? fexpr__12597.cljs$core$IFn$_invoke$arity$1(G__12598) : fexpr__12597.call(null,G__12598));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12611,handler){
var map__12612 = p__12611;
var map__12612__$1 = ((((!((map__12612 == null)))?((((map__12612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12612):map__12612);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12612__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12612__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12612__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12612__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12612__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12612__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12612__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__12612,map__12612__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__12610_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__12610_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__12612,map__12612__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___12656 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___12656)){
var response_type_12657 = temp__4657__auto___12656;
this$__$1.responseType = cljs.core.name(response_type_12657);
} else {
}

var seq__12621_12658 = cljs.core.seq(headers);
var chunk__12622_12659 = null;
var count__12623_12660 = (0);
var i__12624_12661 = (0);
while(true){
if((i__12624_12661 < count__12623_12660)){
var vec__12625_12662 = chunk__12622_12659.cljs$core$IIndexed$_nth$arity$2(null,i__12624_12661);
var k_12663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12625_12662,(0),null);
var v_12664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12625_12662,(1),null);
this$__$1.setRequestHeader(k_12663,v_12664);

var G__12665 = seq__12621_12658;
var G__12666 = chunk__12622_12659;
var G__12667 = count__12623_12660;
var G__12668 = (i__12624_12661 + (1));
seq__12621_12658 = G__12665;
chunk__12622_12659 = G__12666;
count__12623_12660 = G__12667;
i__12624_12661 = G__12668;
continue;
} else {
var temp__4657__auto___12669 = cljs.core.seq(seq__12621_12658);
if(temp__4657__auto___12669){
var seq__12621_12670__$1 = temp__4657__auto___12669;
if(cljs.core.chunked_seq_QMARK_(seq__12621_12670__$1)){
var c__8308__auto___12671 = cljs.core.chunk_first(seq__12621_12670__$1);
var G__12672 = cljs.core.chunk_rest(seq__12621_12670__$1);
var G__12673 = c__8308__auto___12671;
var G__12674 = cljs.core.count(c__8308__auto___12671);
var G__12675 = (0);
seq__12621_12658 = G__12672;
chunk__12622_12659 = G__12673;
count__12623_12660 = G__12674;
i__12624_12661 = G__12675;
continue;
} else {
var vec__12633_12678 = cljs.core.first(seq__12621_12670__$1);
var k_12679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12633_12678,(0),null);
var v_12680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12633_12678,(1),null);
this$__$1.setRequestHeader(k_12679,v_12680);

var G__12683 = cljs.core.next(seq__12621_12670__$1);
var G__12684 = null;
var G__12685 = (0);
var G__12686 = (0);
seq__12621_12658 = G__12683;
chunk__12622_12659 = G__12684;
count__12623_12660 = G__12685;
i__12624_12661 = G__12686;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__7488__auto__ = body;
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
