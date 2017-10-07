// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('hipo.attribute');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hipo.hiccup');
hipo.attribute.style_handler = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$attr,"style"], null),cljs.core.cst$kw$fn,(function (p1__13455_SHARP_,p2__13456_SHARP_,p3__13457_SHARP_,p4__13454_SHARP_){
var seq__13458 = cljs.core.seq(p4__13454_SHARP_);
var chunk__13459 = null;
var count__13460 = (0);
var i__13461 = (0);
while(true){
if((i__13461 < count__13460)){
var vec__13462 = chunk__13459.cljs$core$IIndexed$_nth$arity$2(null,i__13461);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13462,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13462,(1),null);
(p1__13455_SHARP_["style"][cljs.core.name(k)] = v);

var G__13478 = seq__13458;
var G__13479 = chunk__13459;
var G__13480 = count__13460;
var G__13481 = (i__13461 + (1));
seq__13458 = G__13478;
chunk__13459 = G__13479;
count__13460 = G__13480;
i__13461 = G__13481;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13458);
if(temp__4657__auto__){
var seq__13458__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13458__$1)){
var c__8308__auto__ = cljs.core.chunk_first(seq__13458__$1);
var G__13484 = cljs.core.chunk_rest(seq__13458__$1);
var G__13485 = c__8308__auto__;
var G__13486 = cljs.core.count(c__8308__auto__);
var G__13487 = (0);
seq__13458 = G__13484;
chunk__13459 = G__13485;
count__13460 = G__13486;
i__13461 = G__13487;
continue;
} else {
var vec__13471 = cljs.core.first(seq__13458__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13471,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13471,(1),null);
(p1__13455_SHARP_["style"][cljs.core.name(k)] = v);

var G__13488 = cljs.core.next(seq__13458__$1);
var G__13489 = null;
var G__13490 = (0);
var G__13491 = (0);
seq__13458 = G__13488;
chunk__13459 = G__13489;
count__13460 = G__13490;
i__13461 = G__13491;
continue;
}
} else {
return null;
}
}
break;
}
})], null);
hipo.attribute.property_name__GT_js_property_name = (function hipo$attribute$property_name__GT_js_property_name(n){
return n.replace("-","_");
});
hipo.attribute.set_property_value = (function hipo$attribute$set_property_value(el,k,v){
return (el[hipo.attribute.property_name__GT_js_property_name(cljs.core.name(k))] = v);
});
hipo.attribute.set_attribute_BANG_ = (function hipo$attribute$set_attribute_BANG_(el,k,v,m){
var temp__4655__auto__ = (((k instanceof cljs.core.Keyword))?hipo.hiccup.key__GT_namespace(cljs.core.namespace(k),m):null);
if(cljs.core.truth_(temp__4655__auto__)){
var nns = temp__4655__auto__;
return el.setAttributeNS(nns,cljs.core.name(k),v);
} else {
return el.setAttribute(cljs.core.name(k),v);
}
});
hipo.attribute.remove_attribute_BANG_ = (function hipo$attribute$remove_attribute_BANG_(el,k,m){
var temp__4655__auto__ = (((k instanceof cljs.core.Keyword))?hipo.hiccup.key__GT_namespace(cljs.core.namespace(k),m):null);
if(cljs.core.truth_(temp__4655__auto__)){
var nns = temp__4655__auto__;
return el.removeAttributeNS(nns,cljs.core.name(k));
} else {
return el.removeAttribute(cljs.core.name(k));
}
});
hipo.attribute.default_handler_fns = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prop,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fn,(function (p1__13499_SHARP_,p2__13500_SHARP_,p3__13502_SHARP_,p4__13501_SHARP_){
return hipo.attribute.set_property_value(p1__13499_SHARP_,p2__13500_SHARP_,p4__13501_SHARP_);
})], null),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fn,(function (p1__13504_SHARP_,p2__13505_SHARP_,p3__13507_SHARP_,p4__13503_SHARP_,p5__13506_SHARP_){
if(cljs.core.truth_(p4__13503_SHARP_)){
return hipo.attribute.set_attribute_BANG_(p1__13504_SHARP_,p2__13505_SHARP_,p4__13503_SHARP_,p5__13506_SHARP_);
} else {
return hipo.attribute.remove_attribute_BANG_(p1__13504_SHARP_,p2__13505_SHARP_,p5__13506_SHARP_);
}
})], null)], null);
hipo.attribute.default_handlers = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,"svg",cljs.core.cst$kw$attr,"class"], null),cljs.core.cst$kw$type,cljs.core.cst$kw$attr], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,"input",cljs.core.cst$kw$attr,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["value",null,"checked",null], null), null)], null),cljs.core.cst$kw$type,cljs.core.cst$kw$prop], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,"input",cljs.core.cst$kw$attr,"autofocus"], null),cljs.core.cst$kw$fn,(function (p1__13514_SHARP_,p2__13515_SHARP_,p3__13516_SHARP_,p4__13513_SHARP_){
if(cljs.core.truth_(p4__13513_SHARP_)){
p1__13514_SHARP_.focus();

return p1__13514_SHARP_.setAttribute(p2__13515_SHARP_,p4__13513_SHARP_);
} else {
return null;
}
})], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,"option",cljs.core.cst$kw$attr,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["selected",null], null), null)], null),cljs.core.cst$kw$type,cljs.core.cst$kw$prop], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,"select",cljs.core.cst$kw$attr,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["value",null,"selectIndex",null], null), null)], null),cljs.core.cst$kw$type,cljs.core.cst$kw$prop], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,"textarea",cljs.core.cst$kw$attr,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["value",null], null), null)], null),cljs.core.cst$kw$type,cljs.core.cst$kw$prop], null)], null);
hipo.attribute.matches_QMARK_ = (function hipo$attribute$matches_QMARK_(expr,s){
if(cljs.core.truth_(expr)){
if(cljs.core.set_QMARK_(expr)){
return cljs.core.contains_QMARK_(expr,s);
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,expr);

}
} else {
return true;
}
});
hipo.attribute.target_matches_QMARK_ = (function hipo$attribute$target_matches_QMARK_(m,ns,tag,attr){
var and__7476__auto__ = hipo.attribute.matches_QMARK_(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m),ns);
if(cljs.core.truth_(and__7476__auto__)){
var and__7476__auto____$1 = hipo.attribute.matches_QMARK_(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(m),tag);
if(cljs.core.truth_(and__7476__auto____$1)){
return hipo.attribute.matches_QMARK_(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(m),attr);
} else {
return and__7476__auto____$1;
}
} else {
return and__7476__auto__;
}
});
hipo.attribute.handler = (function hipo$attribute$handler(m,ns,tag,attr){
var v = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attribute_DASH_handlers.cljs$core$IFn$_invoke$arity$1(m),hipo.attribute.default_handlers);
var h = cljs.core.some(((function (v){
return (function (p1__13530_SHARP_){
var t = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(p1__13530_SHARP_);
if(cljs.core.truth_(hipo.attribute.target_matches_QMARK_(t,ns,tag,cljs.core.name(attr)))){
return p1__13530_SHARP_;
} else {
return null;
}
});})(v))
,v);
if(cljs.core.contains_QMARK_(h,cljs.core.cst$kw$type)){
var fexpr__13533 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(h);
return (fexpr__13533.cljs$core$IFn$_invoke$arity$1 ? fexpr__13533.cljs$core$IFn$_invoke$arity$1(hipo.attribute.default_handler_fns) : fexpr__13533.call(null,hipo.attribute.default_handler_fns));
} else {
return h;
}
});
hipo.attribute.default_set_value_BANG_ = (function hipo$attribute$default_set_value_BANG_(el,attr,ov,nv,m){
if(cljs.core.truth_((function (){var or__7488__auto__ = hipo.hiccup.literal_QMARK_(ov);
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return hipo.hiccup.literal_QMARK_(nv);
}
})())){
if(cljs.core.truth_(nv)){
return hipo.attribute.set_attribute_BANG_(el,attr,nv,m);
} else {
return hipo.attribute.remove_attribute_BANG_(el,attr,m);
}
} else {
return (el[attr] = hipo.attribute.set_property_value(el,attr,nv));
}
});
hipo.attribute.set_value_BANG_ = (function hipo$attribute$set_value_BANG_(el,m,ns,tag,attr,ov,nv){
var h = hipo.attribute.handler(m,ns,tag,attr);
var f = (function (){var or__7488__auto__ = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(h);
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return hipo.attribute.default_set_value_BANG_;
}
})();
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(el,attr,ov,nv,m) : f.call(null,el,attr,ov,nv,m));
});
