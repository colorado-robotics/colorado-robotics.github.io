// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8114__auto__,k__8115__auto__){
var self__ = this;
var this__8114__auto____$1 = this;
return this__8114__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8115__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8116__auto__,k13062,else__8117__auto__){
var self__ = this;
var this__8116__auto____$1 = this;
var G__13066 = k13062;
var G__13066__$1 = (((G__13066 instanceof cljs.core.Keyword))?G__13066.fqn:null);
switch (G__13066__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13062,else__8117__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__13067,opts){
var self__ = this;
var map__13068 = p__13067;
var map__13068__$1 = ((((!((map__13068 == null)))?((((map__13068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13068):map__13068);
var request__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13068__$1,cljs.core.cst$kw$request);
var map__13070 = this;
var map__13070__$1 = ((((!((map__13070 == null)))?((((map__13070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13070):map__13070);
var request__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13070__$1,cljs.core.cst$kw$request);
return (request__$2.cljs$core$IFn$_invoke$arity$1 ? request__$2.cljs$core$IFn$_invoke$arity$1(opts) : request__$2.call(null,opts));
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__13078,xhrio){
var self__ = this;
var map__13079 = p__13078;
var map__13079__$1 = ((((!((map__13079 == null)))?((((map__13079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13079):map__13079);
var response__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13079__$1,cljs.core.cst$kw$response);
var map__13087 = this;
var map__13087__$1 = ((((!((map__13087 == null)))?((((map__13087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13087):map__13087);
var response__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13087__$1,cljs.core.cst$kw$response);
return (response__$2.cljs$core$IFn$_invoke$arity$1 ? response__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : response__$2.call(null,xhrio));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8128__auto__,writer__8129__auto__,opts__8130__auto__){
var self__ = this;
var this__8128__auto____$1 = this;
var pr_pair__8131__auto__ = ((function (this__8128__auto____$1){
return (function (keyval__8132__auto__){
return cljs.core.pr_sequential_writer(writer__8129__auto__,cljs.core.pr_writer,""," ","",opts__8130__auto__,keyval__8132__auto__);
});})(this__8128__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8129__auto__,pr_pair__8131__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__8130__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13061){
var self__ = this;
var G__13061__$1 = this;
return (new cljs.core.RecordIter((0),G__13061__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$request,cljs.core.cst$kw$response], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8112__auto__){
var self__ = this;
var this__8112__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8109__auto__){
var self__ = this;
var this__8109__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8118__auto__){
var self__ = this;
var this__8118__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8110__auto__){
var self__ = this;
var this__8110__auto____$1 = this;
var h__7928__auto__ = self__.__hash;
if(!((h__7928__auto__ == null))){
return h__7928__auto__;
} else {
var h__7928__auto____$1 = (function (){var fexpr__13095 = ((function (h__7928__auto__,this__8110__auto____$1){
return (function (coll__8111__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll(coll__8111__auto__));
});})(h__7928__auto__,this__8110__auto____$1))
;
return fexpr__13095(this__8110__auto____$1);
})();
self__.__hash = h__7928__auto____$1;

return h__7928__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13063,other13064){
var self__ = this;
var this13063__$1 = this;
return (!((other13064 == null))) && ((this13063__$1.constructor === other13064.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13063__$1.name,other13064.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13063__$1.request,other13064.request)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13063__$1.response,other13064.response)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13063__$1.__extmap,other13064.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8123__auto__,k__8124__auto__){
var self__ = this;
var this__8123__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response,null,cljs.core.cst$kw$request,null,cljs.core.cst$kw$name,null], null), null),k__8124__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8123__auto____$1),self__.__meta),k__8124__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8124__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8121__auto__,k__8122__auto__,G__13061){
var self__ = this;
var this__8121__auto____$1 = this;
var pred__13102 = cljs.core.keyword_identical_QMARK_;
var expr__13103 = k__8122__auto__;
if(cljs.core.truth_((function (){var G__13106 = cljs.core.cst$kw$name;
var G__13107 = expr__13103;
return (pred__13102.cljs$core$IFn$_invoke$arity$2 ? pred__13102.cljs$core$IFn$_invoke$arity$2(G__13106,G__13107) : pred__13102.call(null,G__13106,G__13107));
})())){
return (new ajax.interceptors.StandardInterceptor(G__13061,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13108 = cljs.core.cst$kw$request;
var G__13109 = expr__13103;
return (pred__13102.cljs$core$IFn$_invoke$arity$2 ? pred__13102.cljs$core$IFn$_invoke$arity$2(G__13108,G__13109) : pred__13102.call(null,G__13108,G__13109));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__13061,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13110 = cljs.core.cst$kw$response;
var G__13111 = expr__13103;
return (pred__13102.cljs$core$IFn$_invoke$arity$2 ? pred__13102.cljs$core$IFn$_invoke$arity$2(G__13110,G__13111) : pred__13102.call(null,G__13110,G__13111));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__13061,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8122__auto__,G__13061),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8126__auto__){
var self__ = this;
var this__8126__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8113__auto__,G__13061){
var self__ = this;
var this__8113__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__13061,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8119__auto__,entry__8120__auto__){
var self__ = this;
var this__8119__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8120__auto__)){
return this__8119__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8120__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8120__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8119__auto____$1,entry__8120__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$request,cljs.core.cst$sym$response], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__8150__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__8150__auto__,writer__8151__auto__){
return cljs.core._write(writer__8151__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__13065){
return (new ajax.interceptors.StandardInterceptor(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__13065),cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(G__13065),cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(G__13065),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13065,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$request,cljs.core.cst$kw$response], 0))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,cljs.core.identity,cljs.core.cst$kw$response,cljs.core.identity], null),m], 0)));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__13128,xhrio){
var map__13129 = p__13128;
var map__13129__$1 = ((((!((map__13129 == null)))?((((map__13129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13129):map__13129);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13129__$1,cljs.core.cst$kw$description);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$failure,cljs.core.cst$kw$error,cljs.core.cst$kw$response,null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  Format should have been "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$failure,cljs.core.cst$kw$parse,cljs.core.cst$kw$original_DASH_text,ajax.protocols._body(xhrio)], 0));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,ajax.protocols._status_text(xhrio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parse_DASH_error,parse_error], 0));
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__8620__auto__ = [];
var len__8613__auto___13139 = arguments.length;
var i__8614__auto___13140 = (0);
while(true){
if((i__8614__auto___13140 < len__8613__auto___13139)){
args__8620__auto__.push((arguments[i__8614__auto___13140]));

var G__13141 = (i__8614__auto___13140 + (1));
i__8614__auto___13140 = G__13141;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((3) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8621__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.cst$kw$failure,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq13134){
var G__13135 = cljs.core.first(seq13134);
var seq13134__$1 = cljs.core.next(seq13134);
var G__13136 = cljs.core.first(seq13134__$1);
var seq13134__$2 = cljs.core.next(seq13134__$1);
var G__13137 = cljs.core.first(seq13134__$2);
var seq13134__$3 = cljs.core.next(seq13134__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__13135,G__13136,G__13137,seq13134__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8114__auto__,k__8115__auto__){
var self__ = this;
var this__8114__auto____$1 = this;
return this__8114__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8115__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8116__auto__,k13150,else__8117__auto__){
var self__ = this;
var this__8116__auto____$1 = this;
var G__13154 = k13150;
var G__13154__$1 = (((G__13154 instanceof cljs.core.Keyword))?G__13154.fqn:null);
switch (G__13154__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13150,else__8117__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__13155,request){
var self__ = this;
var map__13156 = p__13155;
var map__13156__$1 = ((((!((map__13156 == null)))?((((map__13156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13156.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13156):map__13156);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,cljs.core.cst$kw$content_DASH_type);
var map__13159 = this;
var map__13159__$1 = ((((!((map__13159 == null)))?((((map__13159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13159):map__13159);
var content_type__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13159__$1,cljs.core.cst$kw$content_DASH_type);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$headers,((function (map__13159,map__13159__$1,content_type__$2,map__13156,map__13156__$1,content_type__$1){
return (function (p1__13148_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header(content_type__$2)], null),(function (){var or__7488__auto__ = p1__13148_SHARP_;
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
});})(map__13159,map__13159__$1,content_type__$2,map__13156,map__13156__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__13164,xhrio){
var self__ = this;
var map__13165 = p__13164;
var map__13165__$1 = ((((!((map__13165 == null)))?((((map__13165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13165):map__13165);
var format = map__13165__$1;
var read__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13165__$1,cljs.core.cst$kw$read);
var map__13167 = this;
var map__13167__$1 = ((((!((map__13167 == null)))?((((map__13167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13167):map__13167);
var format__$1 = map__13167__$1;
var read__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13167__$1,cljs.core.cst$kw$read);

try{var status = ajax.protocols._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.interceptors.fail,status);
var G__13170 = status;
switch (G__13170) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
var G__13171 = "Request failed.";
var G__13172 = cljs.core.cst$kw$failed;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__13171,G__13172) : fail.call(null,G__13171,G__13172));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted(xhrio))){
var G__13173 = "Request aborted by client.";
var G__13174 = cljs.core.cst$kw$aborted;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__13173,G__13174) : fail.call(null,G__13173,G__13174));
} else {
var G__13176 = "Request timed out.";
var G__13177 = cljs.core.cst$kw$timeout;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__13176,G__13177) : fail.call(null,G__13176,G__13177));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = (read__$2.cljs$core$IFn$_invoke$arity$1 ? read__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : read__$2.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__13179 = ajax.protocols._status_text(xhrio);
var G__13180 = cljs.core.cst$kw$error;
var G__13181 = cljs.core.cst$kw$response;
var G__13182 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__13179,G__13180,G__13181,G__13182) : fail.call(null,G__13179,G__13180,G__13181,G__13182));
}
}catch (e13178){if((e13178 instanceof Object)){
var e = e13178;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response(e,status,format__$1,xhrio)], null);
} else {
throw e13178;

}
}
}
}catch (e13169){if((e13169 instanceof Object)){
var e = e13169;
var message = e.message;
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((0),message,cljs.core.cst$kw$exception,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$exception,e], 0));
} else {
throw e13169;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8128__auto__,writer__8129__auto__,opts__8130__auto__){
var self__ = this;
var this__8128__auto____$1 = this;
var pr_pair__8131__auto__ = ((function (this__8128__auto____$1){
return (function (keyval__8132__auto__){
return cljs.core.pr_sequential_writer(writer__8129__auto__,cljs.core.pr_writer,""," ","",opts__8130__auto__,keyval__8132__auto__);
});})(this__8128__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8129__auto__,pr_pair__8131__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__8130__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13149){
var self__ = this;
var G__13149__$1 = this;
return (new cljs.core.RecordIter((0),G__13149__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read,cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8112__auto__){
var self__ = this;
var this__8112__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8109__auto__){
var self__ = this;
var this__8109__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8118__auto__){
var self__ = this;
var this__8118__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8110__auto__){
var self__ = this;
var this__8110__auto____$1 = this;
var h__7928__auto__ = self__.__hash;
if(!((h__7928__auto__ == null))){
return h__7928__auto__;
} else {
var h__7928__auto____$1 = (function (){var fexpr__13190 = ((function (h__7928__auto__,this__8110__auto____$1){
return (function (coll__8111__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll(coll__8111__auto__));
});})(h__7928__auto__,this__8110__auto____$1))
;
return fexpr__13190(this__8110__auto____$1);
})();
self__.__hash = h__7928__auto____$1;

return h__7928__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13151,other13152){
var self__ = this;
var this13151__$1 = this;
return (!((other13152 == null))) && ((this13151__$1.constructor === other13152.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13151__$1.read,other13152.read)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13151__$1.description,other13152.description)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13151__$1.content_type,other13152.content_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13151__$1.__extmap,other13152.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8123__auto__,k__8124__auto__){
var self__ = this;
var this__8123__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,null,cljs.core.cst$kw$read,null,cljs.core.cst$kw$content_DASH_type,null], null), null),k__8124__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8123__auto____$1),self__.__meta),k__8124__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8124__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8121__auto__,k__8122__auto__,G__13149){
var self__ = this;
var this__8121__auto____$1 = this;
var pred__13194 = cljs.core.keyword_identical_QMARK_;
var expr__13195 = k__8122__auto__;
if(cljs.core.truth_((function (){var G__13197 = cljs.core.cst$kw$read;
var G__13198 = expr__13195;
return (pred__13194.cljs$core$IFn$_invoke$arity$2 ? pred__13194.cljs$core$IFn$_invoke$arity$2(G__13197,G__13198) : pred__13194.call(null,G__13197,G__13198));
})())){
return (new ajax.interceptors.ResponseFormat(G__13149,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13199 = cljs.core.cst$kw$description;
var G__13200 = expr__13195;
return (pred__13194.cljs$core$IFn$_invoke$arity$2 ? pred__13194.cljs$core$IFn$_invoke$arity$2(G__13199,G__13200) : pred__13194.call(null,G__13199,G__13200));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,G__13149,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13201 = cljs.core.cst$kw$content_DASH_type;
var G__13202 = expr__13195;
return (pred__13194.cljs$core$IFn$_invoke$arity$2 ? pred__13194.cljs$core$IFn$_invoke$arity$2(G__13201,G__13202) : pred__13194.call(null,G__13201,G__13202));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__13149,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8122__auto__,G__13149),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8126__auto__){
var self__ = this;
var this__8126__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8113__auto__,G__13149){
var self__ = this;
var this__8113__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__13149,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8119__auto__,entry__8120__auto__){
var self__ = this;
var this__8119__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8120__auto__)){
return this__8119__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8120__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8120__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8119__auto____$1,entry__8120__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read,cljs.core.cst$sym$description,cljs.core.cst$sym$content_DASH_type], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__8150__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__8150__auto__,writer__8151__auto__){
return cljs.core._write(writer__8151__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__13153){
return (new ajax.interceptors.ResponseFormat(cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(G__13153),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__13153),cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(G__13153),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13153,cljs.core.cst$kw$read,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], 0))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_(format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,format,cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(params) : write.call(null,params));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8114__auto__,k__8115__auto__){
var self__ = this;
var this__8114__auto____$1 = this;
return this__8114__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8115__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8116__auto__,k13213,else__8117__auto__){
var self__ = this;
var this__8116__auto____$1 = this;
var G__13217 = k13213;
switch (G__13217) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13213,else__8117__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__13218){
var self__ = this;
var map__13219 = p__13218;
var map__13219__$1 = ((((!((map__13219 == null)))?((((map__13219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13219):map__13219);
var request = map__13219__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13219__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13219__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13219__$1,cljs.core.cst$kw$format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13219__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13219__$1,cljs.core.cst$kw$headers);
var ___$1 = this;
var map__13221 = ajax.interceptors.get_request_format(format);
var map__13221__$1 = ((((!((map__13221 == null)))?((((map__13221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13221.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13221):map__13221);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13221__$1,cljs.core.cst$kw$write);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13221__$1,cljs.core.cst$kw$content_DASH_type);
var body = ((!((write == null)))?ajax.interceptors.apply_request_format(write,params):ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__7488__auto__ = headers;
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$body,body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$headers,(cljs.core.truth_(content_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header(content_type)):headers__$1)], 0));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8128__auto__,writer__8129__auto__,opts__8130__auto__){
var self__ = this;
var this__8128__auto____$1 = this;
var pr_pair__8131__auto__ = ((function (this__8128__auto____$1){
return (function (keyval__8132__auto__){
return cljs.core.pr_sequential_writer(writer__8129__auto__,cljs.core.pr_writer,""," ","",opts__8130__auto__,keyval__8132__auto__);
});})(this__8128__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8129__auto__,pr_pair__8131__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__8130__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13212){
var self__ = this;
var G__13212__$1 = this;
return (new cljs.core.RecordIter((0),G__13212__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8112__auto__){
var self__ = this;
var this__8112__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8109__auto__){
var self__ = this;
var this__8109__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8118__auto__){
var self__ = this;
var this__8118__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8110__auto__){
var self__ = this;
var this__8110__auto____$1 = this;
var h__7928__auto__ = self__.__hash;
if(!((h__7928__auto__ == null))){
return h__7928__auto__;
} else {
var h__7928__auto____$1 = (function (){var fexpr__13223 = ((function (h__7928__auto__,this__8110__auto____$1){
return (function (coll__8111__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll(coll__8111__auto__));
});})(h__7928__auto__,this__8110__auto____$1))
;
return fexpr__13223(this__8110__auto____$1);
})();
self__.__hash = h__7928__auto____$1;

return h__7928__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13214,other13215){
var self__ = this;
var this13214__$1 = this;
return (!((other13215 == null))) && ((this13214__$1.constructor === other13215.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13214__$1.__extmap,other13215.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8123__auto__,k__8124__auto__){
var self__ = this;
var this__8123__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__8124__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8123__auto____$1),self__.__meta),k__8124__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8124__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8121__auto__,k__8122__auto__,G__13212){
var self__ = this;
var this__8121__auto____$1 = this;
var pred__13224 = cljs.core.keyword_identical_QMARK_;
var expr__13225 = k__8122__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8122__auto__,G__13212),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8126__auto__){
var self__ = this;
var this__8126__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8113__auto__,G__13212){
var self__ = this;
var this__8113__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__13212,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8119__auto__,entry__8120__auto__){
var self__ = this;
var this__8119__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8120__auto__)){
return this__8119__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8120__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8120__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8119__auto____$1,entry__8120__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__8150__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__8150__auto__,writer__8151__auto__){
return cljs.core._write(writer__8151__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__13216){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__13216)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__13229 = arguments.length;
switch (G__13229) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__13230,uri){
var map__13231 = p__13230;
var map__13231__$1 = ((((!((map__13231 == null)))?((((map__13231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13231):map__13231);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13231__$1,cljs.core.cst$kw$vec_DASH_strategy);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13231__$1,cljs.core.cst$kw$params);

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2(vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__13233){
var map__13234 = p__13233;
var map__13234__$1 = ((((!((map__13234 == null)))?((((map__13234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13234):map__13234);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13234__$1,cljs.core.cst$kw$vec_DASH_strategy);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13234__$1,cljs.core.cst$kw$params);
return ((function (map__13234,map__13234__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2(vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__13234,map__13234__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8114__auto__,k__8115__auto__){
var self__ = this;
var this__8114__auto____$1 = this;
return this__8114__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8115__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8116__auto__,k13238,else__8117__auto__){
var self__ = this;
var this__8116__auto____$1 = this;
var G__13242 = k13238;
switch (G__13242) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13238,else__8117__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__13243){
var self__ = this;
var map__13244 = p__13243;
var map__13244__$1 = ((((!((map__13244 == null)))?((((map__13244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13244):map__13244);
var request = map__13244__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13244__$1,cljs.core.cst$kw$method);
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")){
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$uri,ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1(request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8128__auto__,writer__8129__auto__,opts__8130__auto__){
var self__ = this;
var this__8128__auto____$1 = this;
var pr_pair__8131__auto__ = ((function (this__8128__auto____$1){
return (function (keyval__8132__auto__){
return cljs.core.pr_sequential_writer(writer__8129__auto__,cljs.core.pr_writer,""," ","",opts__8130__auto__,keyval__8132__auto__);
});})(this__8128__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8129__auto__,pr_pair__8131__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__8130__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13237){
var self__ = this;
var G__13237__$1 = this;
return (new cljs.core.RecordIter((0),G__13237__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8112__auto__){
var self__ = this;
var this__8112__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8109__auto__){
var self__ = this;
var this__8109__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8118__auto__){
var self__ = this;
var this__8118__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8110__auto__){
var self__ = this;
var this__8110__auto____$1 = this;
var h__7928__auto__ = self__.__hash;
if(!((h__7928__auto__ == null))){
return h__7928__auto__;
} else {
var h__7928__auto____$1 = (function (){var fexpr__13246 = ((function (h__7928__auto__,this__8110__auto____$1){
return (function (coll__8111__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll(coll__8111__auto__));
});})(h__7928__auto__,this__8110__auto____$1))
;
return fexpr__13246(this__8110__auto____$1);
})();
self__.__hash = h__7928__auto____$1;

return h__7928__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13239,other13240){
var self__ = this;
var this13239__$1 = this;
return (!((other13240 == null))) && ((this13239__$1.constructor === other13240.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13239__$1.__extmap,other13240.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8123__auto__,k__8124__auto__){
var self__ = this;
var this__8123__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__8124__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8123__auto____$1),self__.__meta),k__8124__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8124__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8121__auto__,k__8122__auto__,G__13237){
var self__ = this;
var this__8121__auto____$1 = this;
var pred__13247 = cljs.core.keyword_identical_QMARK_;
var expr__13248 = k__8122__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8122__auto__,G__13237),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8126__auto__){
var self__ = this;
var this__8126__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8113__auto__,G__13237){
var self__ = this;
var this__8113__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__13237,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8119__auto__,entry__8120__auto__){
var self__ = this;
var this__8119__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8120__auto__)){
return this__8119__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8120__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8120__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8119__auto____$1,entry__8120__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__8150__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__8150__auto__,writer__8151__auto__){
return cljs.core._write(writer__8151__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__13241){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__13241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8114__auto__,k__8115__auto__){
var self__ = this;
var this__8114__auto____$1 = this;
return this__8114__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8115__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8116__auto__,k13252,else__8117__auto__){
var self__ = this;
var this__8116__auto____$1 = this;
var G__13256 = k13252;
switch (G__13256) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13252,else__8117__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__13257){
var self__ = this;
var map__13258 = p__13257;
var map__13258__$1 = ((((!((map__13258 == null)))?((((map__13258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13258):map__13258);
var request = map__13258__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13258__$1,cljs.core.cst$kw$body);
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced(request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8128__auto__,writer__8129__auto__,opts__8130__auto__){
var self__ = this;
var this__8128__auto____$1 = this;
var pr_pair__8131__auto__ = ((function (this__8128__auto____$1){
return (function (keyval__8132__auto__){
return cljs.core.pr_sequential_writer(writer__8129__auto__,cljs.core.pr_writer,""," ","",opts__8130__auto__,keyval__8132__auto__);
});})(this__8128__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8129__auto__,pr_pair__8131__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__8130__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13251){
var self__ = this;
var G__13251__$1 = this;
return (new cljs.core.RecordIter((0),G__13251__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8112__auto__){
var self__ = this;
var this__8112__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8109__auto__){
var self__ = this;
var this__8109__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8118__auto__){
var self__ = this;
var this__8118__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8110__auto__){
var self__ = this;
var this__8110__auto____$1 = this;
var h__7928__auto__ = self__.__hash;
if(!((h__7928__auto__ == null))){
return h__7928__auto__;
} else {
var h__7928__auto____$1 = (function (){var fexpr__13260 = ((function (h__7928__auto__,this__8110__auto____$1){
return (function (coll__8111__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll(coll__8111__auto__));
});})(h__7928__auto__,this__8110__auto____$1))
;
return fexpr__13260(this__8110__auto____$1);
})();
self__.__hash = h__7928__auto____$1;

return h__7928__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13253,other13254){
var self__ = this;
var this13253__$1 = this;
return (!((other13254 == null))) && ((this13253__$1.constructor === other13254.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13253__$1.__extmap,other13254.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8123__auto__,k__8124__auto__){
var self__ = this;
var this__8123__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__8124__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8123__auto____$1),self__.__meta),k__8124__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8124__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8121__auto__,k__8122__auto__,G__13251){
var self__ = this;
var this__8121__auto____$1 = this;
var pred__13261 = cljs.core.keyword_identical_QMARK_;
var expr__13262 = k__8122__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8122__auto__,G__13251),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8126__auto__){
var self__ = this;
var this__8126__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8113__auto__,G__13251){
var self__ = this;
var this__8113__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__13251,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8119__auto__,entry__8120__auto__){
var self__ = this;
var this__8119__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8120__auto__)){
return this__8119__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8120__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8120__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8119__auto____$1,entry__8120__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__8150__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__8150__auto__,writer__8151__auto__){
return cljs.core._write(writer__8151__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__13255){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__13255)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__13265){
var map__13266 = p__13265;
var map__13266__$1 = ((((!((map__13266 == null)))?((((map__13266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13266):map__13266);
var opts = map__13266__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13266__$1,cljs.core.cst$kw$response_DASH_format);
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_(response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_(response_format)){
return (interpret_vector.cljs$core$IFn$_invoke$arity$1 ? interpret_vector.cljs$core$IFn$_invoke$arity$1(opts) : interpret_vector.call(null,opts));
} else {
if(cljs.core.map_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,response_format,cljs.core.cst$kw$description,"custom",cljs.core.cst$kw$content_DASH_type,"*/*"], null));
} else {
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});
