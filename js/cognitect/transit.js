// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv(other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash(this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#uuid \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__12749_12758 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__12750_12759 = null;
var count__12751_12760 = (0);
var i__12752_12761 = (0);
while(true){
if((i__12752_12761 < count__12751_12760)){
var k_12764 = chunk__12750_12759.cljs$core$IIndexed$_nth$arity$2(null,i__12752_12761);
var v_12765 = (b[k_12764]);
(a[k_12764] = v_12765);

var G__12766 = seq__12749_12758;
var G__12767 = chunk__12750_12759;
var G__12768 = count__12751_12760;
var G__12769 = (i__12752_12761 + (1));
seq__12749_12758 = G__12766;
chunk__12750_12759 = G__12767;
count__12751_12760 = G__12768;
i__12752_12761 = G__12769;
continue;
} else {
var temp__4657__auto___12770 = cljs.core.seq(seq__12749_12758);
if(temp__4657__auto___12770){
var seq__12749_12771__$1 = temp__4657__auto___12770;
if(cljs.core.chunked_seq_QMARK_(seq__12749_12771__$1)){
var c__8308__auto___12772 = cljs.core.chunk_first(seq__12749_12771__$1);
var G__12773 = cljs.core.chunk_rest(seq__12749_12771__$1);
var G__12774 = c__8308__auto___12772;
var G__12775 = cljs.core.count(c__8308__auto___12772);
var G__12776 = (0);
seq__12749_12758 = G__12773;
chunk__12750_12759 = G__12774;
count__12751_12760 = G__12775;
i__12752_12761 = G__12776;
continue;
} else {
var k_12777 = cljs.core.first(seq__12749_12771__$1);
var v_12778 = (b[k_12777]);
(a[k_12777] = v_12778);

var G__12779 = cljs.core.next(seq__12749_12771__$1);
var G__12780 = null;
var G__12781 = (0);
var G__12782 = (0);
seq__12749_12758 = G__12779;
chunk__12750_12759 = G__12780;
count__12751_12760 = G__12781;
i__12752_12761 = G__12782;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
});
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(arr,true,true) : cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true));
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(arr,true) : cljs.core.PersistentVector.fromArray.call(null,arr,true));
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var G__12816 = arguments.length;
switch (G__12816) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var G__12822 = cljs.core.name(type);
var G__12823 = cognitect.transit.opts_merge(({"handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__12822){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__12822))
,":",((function (G__12822){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__12822))
,"set",((function (G__12822){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__12822))
,"list",((function (G__12822){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__12822))
,"cmap",((function (G__12822){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__12832 = (i + (2));
var G__12833 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__12832;
ret = G__12833;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__12822))
], null),cljs.core.cst$kw$handlers.cljs$core$IFn$_invoke$arity$1(opts)], 0))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$handlers)));
return com.cognitect.transit.reader(G__12822,G__12823);
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
});
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12856_12888 = cljs.core.seq(v);
var chunk__12857_12889 = null;
var count__12858_12890 = (0);
var i__12859_12891 = (0);
while(true){
if((i__12859_12891 < count__12858_12890)){
var x_12896 = chunk__12857_12889.cljs$core$IIndexed$_nth$arity$2(null,i__12859_12891);
ret.push(x_12896);

var G__12912 = seq__12856_12888;
var G__12913 = chunk__12857_12889;
var G__12914 = count__12858_12890;
var G__12915 = (i__12859_12891 + (1));
seq__12856_12888 = G__12912;
chunk__12857_12889 = G__12913;
count__12858_12890 = G__12914;
i__12859_12891 = G__12915;
continue;
} else {
var temp__4657__auto___12917 = cljs.core.seq(seq__12856_12888);
if(temp__4657__auto___12917){
var seq__12856_12918__$1 = temp__4657__auto___12917;
if(cljs.core.chunked_seq_QMARK_(seq__12856_12918__$1)){
var c__8308__auto___12920 = cljs.core.chunk_first(seq__12856_12918__$1);
var G__12922 = cljs.core.chunk_rest(seq__12856_12918__$1);
var G__12923 = c__8308__auto___12920;
var G__12924 = cljs.core.count(c__8308__auto___12920);
var G__12925 = (0);
seq__12856_12888 = G__12922;
chunk__12857_12889 = G__12923;
count__12858_12890 = G__12924;
i__12859_12891 = G__12925;
continue;
} else {
var x_12930 = cljs.core.first(seq__12856_12918__$1);
ret.push(x_12930);

var G__12934 = cljs.core.next(seq__12856_12918__$1);
var G__12935 = null;
var G__12936 = (0);
var G__12937 = (0);
seq__12856_12888 = G__12934;
chunk__12857_12889 = G__12935;
count__12858_12890 = G__12936;
i__12859_12891 = G__12937;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
});
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
});
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12946_12952 = cljs.core.seq(v);
var chunk__12947_12953 = null;
var count__12948_12954 = (0);
var i__12949_12955 = (0);
while(true){
if((i__12949_12955 < count__12948_12954)){
var x_12956 = chunk__12947_12953.cljs$core$IIndexed$_nth$arity$2(null,i__12949_12955);
ret.push(x_12956);

var G__12957 = seq__12946_12952;
var G__12958 = chunk__12947_12953;
var G__12959 = count__12948_12954;
var G__12960 = (i__12949_12955 + (1));
seq__12946_12952 = G__12957;
chunk__12947_12953 = G__12958;
count__12948_12954 = G__12959;
i__12949_12955 = G__12960;
continue;
} else {
var temp__4657__auto___12962 = cljs.core.seq(seq__12946_12952);
if(temp__4657__auto___12962){
var seq__12946_12963__$1 = temp__4657__auto___12962;
if(cljs.core.chunked_seq_QMARK_(seq__12946_12963__$1)){
var c__8308__auto___12964 = cljs.core.chunk_first(seq__12946_12963__$1);
var G__12965 = cljs.core.chunk_rest(seq__12946_12963__$1);
var G__12966 = c__8308__auto___12964;
var G__12967 = cljs.core.count(c__8308__auto___12964);
var G__12968 = (0);
seq__12946_12952 = G__12965;
chunk__12947_12953 = G__12966;
count__12948_12954 = G__12967;
i__12949_12955 = G__12968;
continue;
} else {
var x_12969 = cljs.core.first(seq__12946_12963__$1);
ret.push(x_12969);

var G__12970 = cljs.core.next(seq__12946_12963__$1);
var G__12971 = null;
var G__12972 = (0);
var G__12973 = (0);
seq__12946_12952 = G__12970;
chunk__12947_12953 = G__12971;
count__12948_12954 = G__12972;
i__12949_12955 = G__12973;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12974_12983 = cljs.core.seq(v);
var chunk__12975_12984 = null;
var count__12976_12985 = (0);
var i__12977_12986 = (0);
while(true){
if((i__12977_12986 < count__12976_12985)){
var x_12987 = chunk__12975_12984.cljs$core$IIndexed$_nth$arity$2(null,i__12977_12986);
ret.push(x_12987);

var G__12988 = seq__12974_12983;
var G__12989 = chunk__12975_12984;
var G__12990 = count__12976_12985;
var G__12991 = (i__12977_12986 + (1));
seq__12974_12983 = G__12988;
chunk__12975_12984 = G__12989;
count__12976_12985 = G__12990;
i__12977_12986 = G__12991;
continue;
} else {
var temp__4657__auto___12993 = cljs.core.seq(seq__12974_12983);
if(temp__4657__auto___12993){
var seq__12974_12994__$1 = temp__4657__auto___12993;
if(cljs.core.chunked_seq_QMARK_(seq__12974_12994__$1)){
var c__8308__auto___12995 = cljs.core.chunk_first(seq__12974_12994__$1);
var G__12996 = cljs.core.chunk_rest(seq__12974_12994__$1);
var G__12997 = c__8308__auto___12995;
var G__12998 = cljs.core.count(c__8308__auto___12995);
var G__12999 = (0);
seq__12974_12983 = G__12996;
chunk__12975_12984 = G__12997;
count__12976_12985 = G__12998;
i__12977_12986 = G__12999;
continue;
} else {
var x_13000 = cljs.core.first(seq__12974_12994__$1);
ret.push(x_13000);

var G__13001 = cljs.core.next(seq__12974_12994__$1);
var G__13002 = null;
var G__13003 = (0);
var G__13004 = (0);
seq__12974_12983 = G__13001;
chunk__12975_12984 = G__13002;
count__12976_12985 = G__13003;
i__12977_12986 = G__13004;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var G__13008 = arguments.length;
switch (G__13008) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.cst$kw$handlers.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__13016 = cljs.core.name(type);
var G__13017 = cognitect.transit.opts_merge(({"objectBuilder": ((function (G__13016,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__13016,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__13020 = obj;
G__13020.push((kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(k) : kfn.call(null,k)),(vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(v) : vfn.call(null,v)));

return G__13020;
});})(G__13016,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__13016,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x13023 = cljs.core.clone(handlers);
x13023.forEach = ((function (x13023,G__13016,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__13029 = cljs.core.seq(coll);
var chunk__13030 = null;
var count__13031 = (0);
var i__13032 = (0);
while(true){
if((i__13032 < count__13031)){
var vec__13033 = chunk__13030.cljs$core$IIndexed$_nth$arity$2(null,i__13032);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13033,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13033,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__13074 = seq__13029;
var G__13075 = chunk__13030;
var G__13076 = count__13031;
var G__13077 = (i__13032 + (1));
seq__13029 = G__13074;
chunk__13030 = G__13075;
count__13031 = G__13076;
i__13032 = G__13077;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13029);
if(temp__4657__auto__){
var seq__13029__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13029__$1)){
var c__8308__auto__ = cljs.core.chunk_first(seq__13029__$1);
var G__13083 = cljs.core.chunk_rest(seq__13029__$1);
var G__13084 = c__8308__auto__;
var G__13085 = cljs.core.count(c__8308__auto__);
var G__13086 = (0);
seq__13029 = G__13083;
chunk__13030 = G__13084;
count__13031 = G__13085;
i__13032 = G__13086;
continue;
} else {
var vec__13036 = cljs.core.first(seq__13029__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13036,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13036,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__13089 = cljs.core.next(seq__13029__$1);
var G__13090 = null;
var G__13091 = (0);
var G__13092 = (0);
seq__13029 = G__13089;
chunk__13030 = G__13090;
count__13031 = G__13091;
i__13032 = G__13092;
continue;
}
} else {
return null;
}
}
break;
}
});})(x13023,G__13016,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x13023;
})(), "unpack": ((function (G__13016,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__13016,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$handlers)));
return com.cognitect.transit.writer(G__13016,G__13017);
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var G__13096 = arguments.length;
switch (G__13096) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit13098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit13098 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta13099){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta13099 = meta13099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cognitect.transit.t_cognitect$transit13098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13100,meta13099__$1){
var self__ = this;
var _13100__$1 = this;
return (new cognitect.transit.t_cognitect$transit13098(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta13099__$1));
});

cognitect.transit.t_cognitect$transit13098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13100){
var self__ = this;
var _13100__$1 = this;
return self__.meta13099;
});

cognitect.transit.t_cognitect$transit13098.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.tag_fn.call(null,o));
});

cognitect.transit.t_cognitect$transit13098.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.rep_fn.call(null,o));
});

cognitect.transit.t_cognitect$transit13098.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.str_rep_fn.call(null,o));
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit13098.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit13098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$tag_DASH_fn,cljs.core.cst$sym$rep_DASH_fn,cljs.core.cst$sym$str_DASH_rep_DASH_fn,cljs.core.cst$sym$verbose_DASH_handler_DASH_fn,cljs.core.cst$sym$meta13099], null);
});

cognitect.transit.t_cognitect$transit13098.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit13098.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit13098";

cognitect.transit.t_cognitect$transit13098.cljs$lang$ctorPrWriter = (function (this__8099__auto__,writer__8100__auto__,opt__8101__auto__){
return cljs.core._write(writer__8100__auto__,"cognitect.transit/t_cognitect$transit13098");
});

cognitect.transit.__GT_t_cognitect$transit13098 = (function cognitect$transit$__GT_t_cognitect$transit13098(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta13099){
return (new cognitect.transit.t_cognitect$transit13098(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta13099));
});

}

return (new cognitect.transit.t_cognitect$transit13098(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue(tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue(x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue(s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger(x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger(s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger(x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue(s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal(x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri(s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI(x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid(s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__7488__auto__ = com.cognitect.transit.types.isUUID(x);
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary(s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary(x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted(x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted(x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link(x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink(x);
});
