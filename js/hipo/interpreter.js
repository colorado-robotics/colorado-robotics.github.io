// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__13563){
var map__13564 = p__13563;
var map__13564__$1 = ((((!((map__13564 == null)))?((((map__13564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13564):map__13564);
var m = map__13564__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13564__$1,cljs.core.cst$kw$interceptors);
if(!((ov === nv))){
var temp__4655__auto__ = hipo.hiccup.listener_name__GT_event_name(cljs.core.name(sok));
if(cljs.core.truth_(temp__4655__auto__)){
var en = temp__4655__auto__;
if(!((cljs.core.map_QMARK_(ov)) && (cljs.core.map_QMARK_(nv)) && ((cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ov) === cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(nv))))){
var b__13348__auto__ = ((function (en,temp__4655__auto__,map__13564,map__13564__$1,m,interceptors){
return (function (){
var hn = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("hipo_listener_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(en)].join('');
var temp__4655__auto___13578__$1 = (el[hn]);
if(cljs.core.truth_(temp__4655__auto___13578__$1)){
var l_13579 = temp__4655__auto___13578__$1;
el.removeEventListener(en,l_13579);
} else {
}

var temp__4657__auto__ = (function (){var or__7488__auto__ = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(nv);
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return nv;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var nv__$1 = temp__4657__auto__;
el.addEventListener(en,nv__$1);

return (el[hn] = nv__$1);
} else {
return null;
}
});})(en,temp__4655__auto__,map__13564,map__13564__$1,m,interceptors))
;
var v__13349__auto__ = interceptors;
if((cljs.core.not(v__13349__auto__)) || (cljs.core.empty_QMARK_(v__13349__auto__))){
return b__13348__auto__();
} else {
return hipo.interceptor.call(b__13348__auto__,v__13349__auto__,(cljs.core.truth_(nv)?cljs.core.cst$kw$update_DASH_handler:cljs.core.cst$kw$remove_DASH_handler),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$name,sok,cljs.core.cst$kw$old_DASH_value,ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$new_DASH_value,nv], null):null)], 0)));
}
} else {
return null;
}
} else {
var b__13348__auto__ = ((function (temp__4655__auto__,map__13564,map__13564__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_(el,m,ns,tag,sok,ov,nv);
});})(temp__4655__auto__,map__13564,map__13564__$1,m,interceptors))
;
var v__13349__auto__ = interceptors;
if((cljs.core.not(v__13349__auto__)) || (cljs.core.empty_QMARK_(v__13349__auto__))){
return b__13348__auto__();
} else {
return hipo.interceptor.call(b__13348__auto__,v__13349__auto__,(cljs.core.truth_(nv)?cljs.core.cst$kw$update_DASH_attribute:cljs.core.cst$kw$remove_DASH_attribute),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$name,sok,cljs.core.cst$kw$old_DASH_value,ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$new_DASH_value,nv], null):null)], 0)));
}
}
} else {
return null;
}
});
hipo.interpreter.append_children_BANG_ = (function hipo$interpreter$append_children_BANG_(el,v,m){
if(cljs.core.vector_QMARK_(v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

var v__$1 = hipo.hiccup.flatten_children(v);
while(true){
if(cljs.core.empty_QMARK_(v__$1)){
return null;
} else {
var temp__4655__auto___13588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___13588)){
var h_13590 = temp__4655__auto___13588;
el.appendChild((hipo.interpreter.create_child.cljs$core$IFn$_invoke$arity$2 ? hipo.interpreter.create_child.cljs$core$IFn$_invoke$arity$2(h_13590,m) : hipo.interpreter.create_child.call(null,h_13590,m)));
} else {
}

var G__13592 = cljs.core.rest(v__$1);
v__$1 = G__13592;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element(ns,tag);
var seq__13593_13605 = cljs.core.seq(attrs);
var chunk__13594_13606 = null;
var count__13595_13607 = (0);
var i__13596_13608 = (0);
while(true){
if((i__13596_13608 < count__13595_13607)){
var vec__13597_13609 = chunk__13594_13606.cljs$core$IIndexed$_nth$arity$2(null,i__13596_13608);
var sok_13610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13597_13609,(0),null);
var v_13611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13597_13609,(1),null);
if(cljs.core.truth_(v_13611)){
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_13610,null,v_13611,m);
} else {
}

var G__13613 = seq__13593_13605;
var G__13614 = chunk__13594_13606;
var G__13615 = count__13595_13607;
var G__13616 = (i__13596_13608 + (1));
seq__13593_13605 = G__13613;
chunk__13594_13606 = G__13614;
count__13595_13607 = G__13615;
i__13596_13608 = G__13616;
continue;
} else {
var temp__4657__auto___13619 = cljs.core.seq(seq__13593_13605);
if(temp__4657__auto___13619){
var seq__13593_13620__$1 = temp__4657__auto___13619;
if(cljs.core.chunked_seq_QMARK_(seq__13593_13620__$1)){
var c__8308__auto___13621 = cljs.core.chunk_first(seq__13593_13620__$1);
var G__13622 = cljs.core.chunk_rest(seq__13593_13620__$1);
var G__13623 = c__8308__auto___13621;
var G__13624 = cljs.core.count(c__8308__auto___13621);
var G__13625 = (0);
seq__13593_13605 = G__13622;
chunk__13594_13606 = G__13623;
count__13595_13607 = G__13624;
i__13596_13608 = G__13625;
continue;
} else {
var vec__13602_13626 = cljs.core.first(seq__13593_13620__$1);
var sok_13627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13602_13626,(0),null);
var v_13628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13602_13626,(1),null);
if(cljs.core.truth_(v_13628)){
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_13627,null,v_13628,m);
} else {
}

var G__13629 = cljs.core.next(seq__13593_13620__$1);
var G__13630 = null;
var G__13631 = (0);
var G__13632 = (0);
seq__13593_13605 = G__13629;
chunk__13594_13606 = G__13630;
count__13595_13607 = G__13631;
i__13596_13608 = G__13632;
continue;
}
} else {
}
}
break;
}

return el;
});
hipo.interpreter.create_element = (function hipo$interpreter$create_element(ns,tag,attrs,m){
var temp__4655__auto__ = cljs.core.cst$kw$create_DASH_element_DASH_fn.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(ns,tag,attrs,m) : f.call(null,ns,tag,attrs,m));
} else {
return hipo.interpreter.default_create_element(ns,tag,attrs,m);
}
});
hipo.interpreter.create_vector = (function hipo$interpreter$create_vector(h,m){
if(cljs.core.vector_QMARK_(h)){
} else {
throw (new Error("Assert failed: (vector? h)"));
}

var key = hipo.hiccup.keyns(h);
var tag = hipo.hiccup.tag(h);
var attrs = hipo.hiccup.attributes(h);
var children = hipo.hiccup.children(h);
var el = hipo.interpreter.create_element(hipo.hiccup.key__GT_namespace(key,m),tag,attrs,m);
if(cljs.core.truth_(children)){
hipo.interpreter.append_children_BANG_(el,children,m);
} else {
}

return el;
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o,m){
if(cljs.core.truth_((function (){var or__7488__auto__ = hipo.hiccup.literal_QMARK_(o);
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return cljs.core.vector_QMARK_(o);
}
})())){
} else {
throw (new Error("Assert failed: (or (hic/literal? o) (vector? o))"));
}

if(cljs.core.truth_(hipo.hiccup.literal_QMARK_(o))){
return document.createTextNode(o);
} else {
return hipo.interpreter.create_vector(o,m);
}
});
hipo.interpreter.append_to_parent = (function hipo$interpreter$append_to_parent(el,o,m){
if(cljs.core.seq_QMARK_(o)){
return hipo.interpreter.append_children_BANG_(el,cljs.core.vec(o),m);
} else {
if(!((o == null))){
return el.appendChild(hipo.interpreter.create_child(o,m));
} else {
return null;
}
}
});
hipo.interpreter.create = (function hipo$interpreter$create(o,m){
if(cljs.core.seq_QMARK_(o)){
var f = document.createDocumentFragment();
hipo.interpreter.append_children_BANG_(f,cljs.core.vec(o),m);

return f;
} else {
if(!((o == null))){
return hipo.interpreter.create_child(o,m);
} else {
return null;
}
}
});
hipo.interpreter.reconciliate_attributes_BANG_ = (function hipo$interpreter$reconciliate_attributes_BANG_(el,ns,tag,om,nm,m){
var seq__13644_13663 = cljs.core.seq(nm);
var chunk__13646_13664 = null;
var count__13647_13665 = (0);
var i__13648_13666 = (0);
while(true){
if((i__13648_13666 < count__13647_13665)){
var vec__13650_13667 = chunk__13646_13664.cljs$core$IIndexed$_nth$arity$2(null,i__13648_13666);
var sok_13668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13650_13667,(0),null);
var nv_13669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13650_13667,(1),null);
var ov_13670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok_13668);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_13668,ov_13670,nv_13669,m);

var G__13671 = seq__13644_13663;
var G__13672 = chunk__13646_13664;
var G__13673 = count__13647_13665;
var G__13674 = (i__13648_13666 + (1));
seq__13644_13663 = G__13671;
chunk__13646_13664 = G__13672;
count__13647_13665 = G__13673;
i__13648_13666 = G__13674;
continue;
} else {
var temp__4657__auto___13675 = cljs.core.seq(seq__13644_13663);
if(temp__4657__auto___13675){
var seq__13644_13676__$1 = temp__4657__auto___13675;
if(cljs.core.chunked_seq_QMARK_(seq__13644_13676__$1)){
var c__8308__auto___13677 = cljs.core.chunk_first(seq__13644_13676__$1);
var G__13678 = cljs.core.chunk_rest(seq__13644_13676__$1);
var G__13679 = c__8308__auto___13677;
var G__13680 = cljs.core.count(c__8308__auto___13677);
var G__13681 = (0);
seq__13644_13663 = G__13678;
chunk__13646_13664 = G__13679;
count__13647_13665 = G__13680;
i__13648_13666 = G__13681;
continue;
} else {
var vec__13653_13682 = cljs.core.first(seq__13644_13676__$1);
var sok_13683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13653_13682,(0),null);
var nv_13684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13653_13682,(1),null);
var ov_13685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok_13683);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_13683,ov_13685,nv_13684,m);

var G__13688 = cljs.core.next(seq__13644_13676__$1);
var G__13689 = null;
var G__13690 = (0);
var G__13691 = (0);
seq__13644_13663 = G__13688;
chunk__13646_13664 = G__13689;
count__13647_13665 = G__13690;
i__13648_13666 = G__13691;
continue;
}
} else {
}
}
break;
}

var seq__13658 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(om)),cljs.core.set(cljs.core.keys(nm))));
var chunk__13659 = null;
var count__13660 = (0);
var i__13661 = (0);
while(true){
if((i__13661 < count__13660)){
var sok = chunk__13659.cljs$core$IIndexed$_nth$arity$2(null,i__13661);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok,cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok),null,m);

var G__13696 = seq__13658;
var G__13697 = chunk__13659;
var G__13698 = count__13660;
var G__13699 = (i__13661 + (1));
seq__13658 = G__13696;
chunk__13659 = G__13697;
count__13660 = G__13698;
i__13661 = G__13699;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13658);
if(temp__4657__auto__){
var seq__13658__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13658__$1)){
var c__8308__auto__ = cljs.core.chunk_first(seq__13658__$1);
var G__13702 = cljs.core.chunk_rest(seq__13658__$1);
var G__13703 = c__8308__auto__;
var G__13704 = cljs.core.count(c__8308__auto__);
var G__13705 = (0);
seq__13658 = G__13702;
chunk__13659 = G__13703;
count__13660 = G__13704;
i__13661 = G__13705;
continue;
} else {
var sok = cljs.core.first(seq__13658__$1);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok,cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok),null,m);

var G__13710 = cljs.core.next(seq__13658__$1);
var G__13711 = null;
var G__13712 = (0);
var G__13713 = (0);
seq__13658 = G__13710;
chunk__13659 = G__13711;
count__13660 = G__13712;
i__13661 = G__13713;
continue;
}
} else {
return null;
}
}
break;
}
});
hipo.interpreter.child_key = (function hipo$interpreter$child_key(h){
return cljs.core.cst$kw$hipo_SLASH_key.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(h));
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8277__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__13719(s__13720){
return (new cljs.core.LazySeq(null,(function (){
var s__13720__$1 = s__13720;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13720__$1);
if(temp__4657__auto__){
var s__13720__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13720__$2)){
var c__8275__auto__ = cljs.core.chunk_first(s__13720__$2);
var size__8276__auto__ = cljs.core.count(c__8275__auto__);
var b__13722 = cljs.core.chunk_buffer(size__8276__auto__);
if((function (){var i__13721 = (0);
while(true){
if((i__13721 < size__8276__auto__)){
var ih = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8275__auto__,i__13721);
cljs.core.chunk_append(b__13722,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ih,(1))),ih], null));

var G__13737 = (i__13721 + (1));
i__13721 = G__13737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13722),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__13719(cljs.core.chunk_rest(s__13720__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13722),null);
}
} else {
var ih = cljs.core.first(s__13720__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__13719(cljs.core.rest(s__13720__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8277__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (iter__8277__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__8277__auto__))
,v));
})());
});
/**
 * Reconciliate a vector of children based on their associated key.
 */
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__13752){
var map__13754 = p__13752;
var map__13754__$1 = ((((!((map__13754 == null)))?((((map__13754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13754):map__13754);
var m = map__13754__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13754__$1,cljs.core.cst$kw$interceptors);
var om = hipo.interpreter.keyed_children__GT_indexed_map(och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map(nch);
var cs = hipo.dom.children.cljs$core$IFn$_invoke$arity$2(el,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(nm)),cljs.core.set(cljs.core.keys(om)))));
var seq__13764_13848 = cljs.core.seq(nm);
var chunk__13765_13849 = null;
var count__13766_13850 = (0);
var i__13767_13851 = (0);
while(true){
if((i__13767_13851 < count__13766_13850)){
var vec__13770_13852 = chunk__13765_13849.cljs$core$IIndexed$_nth$arity$2(null,i__13767_13851);
var i_13853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13770_13852,(0),null);
var vec__13773_13854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13770_13852,(1),null);
var ii_13855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13773_13854,(0),null);
var h_13856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13773_13854,(1),null);
var temp__4655__auto___13861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,i_13853);
if(cljs.core.truth_(temp__4655__auto___13861)){
var vec__13779_13866 = temp__4655__auto___13861;
var iii_13867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13779_13866,(0),null);
var oh_13868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13779_13866,(1),null);
var cel_13876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,iii_13867);
if((ii_13855 === iii_13867)){
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_13876,oh_13868,h_13856,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_13876,oh_13868,h_13856,m));
} else {
var b__13348__auto___13879 = ((function (seq__13764_13848,chunk__13765_13849,count__13766_13850,i__13767_13851,cel_13876,vec__13779_13866,iii_13867,oh_13868,temp__4655__auto___13861,vec__13770_13852,i_13853,vec__13773_13854,ii_13855,h_13856,om,nm,cs,map__13754,map__13754__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_13876);
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(ncel,oh_13868,h_13856,m) : hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_13868,h_13856,m));

return hipo.dom.insert_child_BANG_(el,ii_13855,ncel);
});})(seq__13764_13848,chunk__13765_13849,count__13766_13850,i__13767_13851,cel_13876,vec__13779_13866,iii_13867,oh_13868,temp__4655__auto___13861,vec__13770_13852,i_13853,vec__13773_13854,ii_13855,h_13856,om,nm,cs,map__13754,map__13754__$1,m,interceptors))
;
var v__13349__auto___13880 = interceptors;
if((cljs.core.not(v__13349__auto___13880)) || (cljs.core.empty_QMARK_(v__13349__auto___13880))){
b__13348__auto___13879();
} else {
hipo.interceptor.call(b__13348__auto___13879,v__13349__auto___13880,cljs.core.cst$kw$move,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h_13856,cljs.core.cst$kw$index,ii_13855], null));
}
}
} else {
var b__13348__auto___13912 = ((function (seq__13764_13848,chunk__13765_13849,count__13766_13850,i__13767_13851,temp__4655__auto___13861,vec__13770_13852,i_13853,vec__13773_13854,ii_13855,h_13856,om,nm,cs,map__13754,map__13754__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,ii_13855,hipo.interpreter.create_child(h_13856,m));
});})(seq__13764_13848,chunk__13765_13849,count__13766_13850,i__13767_13851,temp__4655__auto___13861,vec__13770_13852,i_13853,vec__13773_13854,ii_13855,h_13856,om,nm,cs,map__13754,map__13754__$1,m,interceptors))
;
var v__13349__auto___13913 = interceptors;
if((cljs.core.not(v__13349__auto___13913)) || (cljs.core.empty_QMARK_(v__13349__auto___13913))){
b__13348__auto___13912();
} else {
hipo.interceptor.call(b__13348__auto___13912,v__13349__auto___13913,cljs.core.cst$kw$insert,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h_13856,cljs.core.cst$kw$index,ii_13855], null));
}
}

var G__13931 = seq__13764_13848;
var G__13932 = chunk__13765_13849;
var G__13933 = count__13766_13850;
var G__13934 = (i__13767_13851 + (1));
seq__13764_13848 = G__13931;
chunk__13765_13849 = G__13932;
count__13766_13850 = G__13933;
i__13767_13851 = G__13934;
continue;
} else {
var temp__4657__auto___13935 = cljs.core.seq(seq__13764_13848);
if(temp__4657__auto___13935){
var seq__13764_13936__$1 = temp__4657__auto___13935;
if(cljs.core.chunked_seq_QMARK_(seq__13764_13936__$1)){
var c__8308__auto___13937 = cljs.core.chunk_first(seq__13764_13936__$1);
var G__13938 = cljs.core.chunk_rest(seq__13764_13936__$1);
var G__13939 = c__8308__auto___13937;
var G__13940 = cljs.core.count(c__8308__auto___13937);
var G__13941 = (0);
seq__13764_13848 = G__13938;
chunk__13765_13849 = G__13939;
count__13766_13850 = G__13940;
i__13767_13851 = G__13941;
continue;
} else {
var vec__13802_13942 = cljs.core.first(seq__13764_13936__$1);
var i_13943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13802_13942,(0),null);
var vec__13805_13944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13802_13942,(1),null);
var ii_13945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13805_13944,(0),null);
var h_13946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13805_13944,(1),null);
var temp__4655__auto___13949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,i_13943);
if(cljs.core.truth_(temp__4655__auto___13949)){
var vec__13810_13950 = temp__4655__auto___13949;
var iii_13951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13810_13950,(0),null);
var oh_13952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13810_13950,(1),null);
var cel_13955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,iii_13951);
if((ii_13945 === iii_13951)){
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_13955,oh_13952,h_13946,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_13955,oh_13952,h_13946,m));
} else {
var b__13348__auto___13967 = ((function (seq__13764_13848,chunk__13765_13849,count__13766_13850,i__13767_13851,cel_13955,vec__13810_13950,iii_13951,oh_13952,temp__4655__auto___13949,vec__13802_13942,i_13943,vec__13805_13944,ii_13945,h_13946,seq__13764_13936__$1,temp__4657__auto___13935,om,nm,cs,map__13754,map__13754__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_13955);
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(ncel,oh_13952,h_13946,m) : hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_13952,h_13946,m));

return hipo.dom.insert_child_BANG_(el,ii_13945,ncel);
});})(seq__13764_13848,chunk__13765_13849,count__13766_13850,i__13767_13851,cel_13955,vec__13810_13950,iii_13951,oh_13952,temp__4655__auto___13949,vec__13802_13942,i_13943,vec__13805_13944,ii_13945,h_13946,seq__13764_13936__$1,temp__4657__auto___13935,om,nm,cs,map__13754,map__13754__$1,m,interceptors))
;
var v__13349__auto___13968 = interceptors;
if((cljs.core.not(v__13349__auto___13968)) || (cljs.core.empty_QMARK_(v__13349__auto___13968))){
b__13348__auto___13967();
} else {
hipo.interceptor.call(b__13348__auto___13967,v__13349__auto___13968,cljs.core.cst$kw$move,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h_13946,cljs.core.cst$kw$index,ii_13945], null));
}
}
} else {
var b__13348__auto___13993 = ((function (seq__13764_13848,chunk__13765_13849,count__13766_13850,i__13767_13851,temp__4655__auto___13949,vec__13802_13942,i_13943,vec__13805_13944,ii_13945,h_13946,seq__13764_13936__$1,temp__4657__auto___13935,om,nm,cs,map__13754,map__13754__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,ii_13945,hipo.interpreter.create_child(h_13946,m));
});})(seq__13764_13848,chunk__13765_13849,count__13766_13850,i__13767_13851,temp__4655__auto___13949,vec__13802_13942,i_13943,vec__13805_13944,ii_13945,h_13946,seq__13764_13936__$1,temp__4657__auto___13935,om,nm,cs,map__13754,map__13754__$1,m,interceptors))
;
var v__13349__auto___13994 = interceptors;
if((cljs.core.not(v__13349__auto___13994)) || (cljs.core.empty_QMARK_(v__13349__auto___13994))){
b__13348__auto___13993();
} else {
hipo.interceptor.call(b__13348__auto___13993,v__13349__auto___13994,cljs.core.cst$kw$insert,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h_13946,cljs.core.cst$kw$index,ii_13945], null));
}
}

var G__14023 = cljs.core.next(seq__13764_13936__$1);
var G__14024 = null;
var G__14025 = (0);
var G__14026 = (0);
seq__13764_13848 = G__14023;
chunk__13765_13849 = G__14024;
count__13766_13850 = G__14025;
i__13767_13851 = G__14026;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(om)),cljs.core.set(cljs.core.keys(nm))));
if((d > (0))){
var b__13348__auto__ = ((function (d,om,nm,cs,map__13754,map__13754__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_(el,d);
});})(d,om,nm,cs,map__13754,map__13754__$1,m,interceptors))
;
var v__13349__auto__ = interceptors;
if((cljs.core.not(v__13349__auto__)) || (cljs.core.empty_QMARK_(v__13349__auto__))){
return b__13348__auto__();
} else {
return hipo.interceptor.call(b__13348__auto__,v__13349__auto__,cljs.core.cst$kw$remove_DASH_trailing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$count,d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__14032){
var map__14033 = p__14032;
var map__14033__$1 = ((((!((map__14033 == null)))?((((map__14033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14033):map__14033);
var m = map__14033__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14033__$1,cljs.core.cst$kw$interceptors);
var oc = cljs.core.count(och);
var nc = cljs.core.count(nch);
var d = (oc - nc);
if((d > (0))){
var b__13348__auto___14080 = ((function (oc,nc,d,map__14033,map__14033__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_(el,d);
});})(oc,nc,d,map__14033,map__14033__$1,m,interceptors))
;
var v__13349__auto___14081 = interceptors;
if((cljs.core.not(v__13349__auto___14081)) || (cljs.core.empty_QMARK_(v__13349__auto___14081))){
b__13348__auto___14080();
} else {
hipo.interceptor.call(b__13348__auto___14080,v__13349__auto___14081,cljs.core.cst$kw$remove_DASH_trailing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$count,d], null));
}
} else {
}

var n__8412__auto___14084 = (function (){var x__7831__auto__ = oc;
var y__7832__auto__ = nc;
return ((x__7831__auto__ < y__7832__auto__) ? x__7831__auto__ : y__7832__auto__);
})();
var i_14087 = (0);
while(true){
if((i_14087 < n__8412__auto___14084)){
var ov_14088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(och,i_14087);
var nv_14089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nch,i_14087);
if(!(((ov_14088 == null)) && ((nv_14089 == null)))){
if((ov_14088 == null)){
var b__13348__auto___14090 = ((function (i_14087,ov_14088,nv_14089,n__8412__auto___14084,oc,nc,d,map__14033,map__14033__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,i_14087,hipo.interpreter.create_child(nv_14089,m));
});})(i_14087,ov_14088,nv_14089,n__8412__auto___14084,oc,nc,d,map__14033,map__14033__$1,m,interceptors))
;
var v__13349__auto___14091 = interceptors;
if((cljs.core.not(v__13349__auto___14091)) || (cljs.core.empty_QMARK_(v__13349__auto___14091))){
b__13348__auto___14090();
} else {
hipo.interceptor.call(b__13348__auto___14090,v__13349__auto___14091,cljs.core.cst$kw$insert,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,nv_14089,cljs.core.cst$kw$index,i_14087], null));
}
} else {
if((nv_14089 == null)){
var b__13348__auto___14101 = ((function (i_14087,ov_14088,nv_14089,n__8412__auto___14084,oc,nc,d,map__14033,map__14033__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_(el,i_14087);
});})(i_14087,ov_14088,nv_14089,n__8412__auto___14084,oc,nc,d,map__14033,map__14033__$1,m,interceptors))
;
var v__13349__auto___14102 = interceptors;
if((cljs.core.not(v__13349__auto___14102)) || (cljs.core.empty_QMARK_(v__13349__auto___14102))){
b__13348__auto___14101();
} else {
hipo.interceptor.call(b__13348__auto___14101,v__13349__auto___14102,cljs.core.cst$kw$remove,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$index,i_14087], null));
}
} else {
var temp__4655__auto___14103 = hipo.dom.child(el,i_14087);
if(cljs.core.truth_(temp__4655__auto___14103)){
var cel_14104 = temp__4655__auto___14103;
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_14104,ov_14088,nv_14089,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_14104,ov_14088,nv_14089,m));
} else {
}

}
}
} else {
}

var G__14109 = (i_14087 + (1));
i_14087 = G__14109;
continue;
} else {
}
break;
}

if((d < (0))){
if(((-1) === d)){
var temp__4655__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nch,oc);
if(cljs.core.truth_(temp__4655__auto__)){
var h = temp__4655__auto__;
var b__13348__auto__ = ((function (h,temp__4655__auto__,oc,nc,d,map__14033,map__14033__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child(h,m));
});})(h,temp__4655__auto__,oc,nc,d,map__14033,map__14033__$1,m,interceptors))
;
var v__13349__auto__ = interceptors;
if((cljs.core.not(v__13349__auto__)) || (cljs.core.empty_QMARK_(v__13349__auto__))){
return b__13348__auto__();
} else {
return hipo.interceptor.call(b__13348__auto__,v__13349__auto__,cljs.core.cst$kw$append,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(nch,oc));
var b__13348__auto___14114 = ((function (f,cs,oc,nc,d,map__14033,map__14033__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_(f,cs,m);
});})(f,cs,oc,nc,d,map__14033,map__14033__$1,m,interceptors))
;
var v__13349__auto___14115 = interceptors;
if((cljs.core.not(v__13349__auto___14115)) || (cljs.core.empty_QMARK_(v__13349__auto___14115))){
b__13348__auto___14114();
} else {
hipo.interceptor.call(b__13348__auto___14114,v__13349__auto___14115,cljs.core.cst$kw$append,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,cs], null));
}

return el.appendChild(f);
}
} else {
return null;
}
});
hipo.interpreter.keyed_children_QMARK_ = (function hipo$interpreter$keyed_children_QMARK_(v){
return !((hipo.interpreter.child_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0))) == null));
});
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__14125){
var map__14126 = p__14125;
var map__14126__$1 = ((((!((map__14126 == null)))?((((map__14126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14126):map__14126);
var m = map__14126__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14126__$1,cljs.core.cst$kw$interceptors);
if(cljs.core.empty_QMARK_(nch)){
if(!(cljs.core.empty_QMARK_(och))){
var b__13348__auto__ = ((function (map__14126,map__14126__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_(el);
});})(map__14126,map__14126__$1,m,interceptors))
;
var v__13349__auto__ = interceptors;
if((cljs.core.not(v__13349__auto__)) || (cljs.core.empty_QMARK_(v__13349__auto__))){
return b__13348__auto__();
} else {
return hipo.interceptor.call(b__13348__auto__,v__13349__auto__,cljs.core.cst$kw$clear,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,el], null));
}
} else {
return null;
}
} else {
if(cljs.core.truth_(hipo.interpreter.keyed_children_QMARK_(nch))){
return hipo.interpreter.reconciliate_keyed_children_BANG_(el,och,nch,m);
} else {
return hipo.interpreter.reconciliate_non_keyed_children_BANG_(el,och,nch,m);
}
}
});
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__14137){
var map__14138 = p__14137;
var map__14138__$1 = ((((!((map__14138 == null)))?((((map__14138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14138):map__14138);
var m = map__14138__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14138__$1,cljs.core.cst$kw$interceptors);
if(cljs.core.vector_QMARK_(nh)){
} else {
throw (new Error("Assert failed: (vector? nh)"));
}

if(cljs.core.truth_((function (){var or__7488__auto__ = hipo.hiccup.literal_QMARK_(oh);
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return !((hipo.hiccup.tag(nh) === hipo.hiccup.tag(oh)));
}
})())){
var nel = hipo.interpreter.create_child(nh,m);
var b__13348__auto__ = ((function (nel,map__14138,map__14138__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(.-parentElement el)")].join('')));
}

return hipo.dom.replace_BANG_(el,nel);
});})(nel,map__14138,map__14138__$1,m,interceptors))
;
var v__13349__auto__ = interceptors;
if((cljs.core.not(v__13349__auto__)) || (cljs.core.empty_QMARK_(v__13349__auto__))){
return b__13348__auto__();
} else {
return hipo.interceptor.call(b__13348__auto__,v__13349__auto__,cljs.core.cst$kw$replace,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,nh], null));
}
} else {
var om = hipo.hiccup.attributes(oh);
var nm = hipo.hiccup.attributes(nh);
var och = hipo.hiccup.children(oh);
var nch = hipo.hiccup.children(nh);
var b__13348__auto___14153 = ((function (om,nm,och,nch,map__14138,map__14138__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_(el,hipo.hiccup.flatten_children(och),hipo.hiccup.flatten_children(nch),m);
});})(om,nm,och,nch,map__14138,map__14138__$1,m,interceptors))
;
var v__13349__auto___14154 = interceptors;
if((cljs.core.not(v__13349__auto___14154)) || (cljs.core.empty_QMARK_(v__13349__auto___14154))){
b__13348__auto___14153();
} else {
hipo.interceptor.call(b__13348__auto___14153,v__13349__auto___14154,cljs.core.cst$kw$reconciliate,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$old_DASH_value,och,cljs.core.cst$kw$new_DASH_value,nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_(el,hipo.hiccup.keyns(nh),hipo.hiccup.tag(nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__14166){
var map__14167 = p__14166;
var map__14167__$1 = ((((!((map__14167 == null)))?((((map__14167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14167):map__14167);
var m = map__14167__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14167__$1,cljs.core.cst$kw$interceptors);
if(cljs.core.truth_((function (){var or__7488__auto__ = cljs.core.vector_QMARK_(nh);
if(or__7488__auto__){
return or__7488__auto__;
} else {
return hipo.hiccup.literal_QMARK_(nh);
}
})())){
} else {
throw (new Error("Assert failed: (or (vector? nh) (hic/literal? nh))"));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

var b__13348__auto__ = ((function (map__14167,map__14167__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_(nh))){
if(!((oh === nh))){
var b__13348__auto__ = ((function (map__14167,map__14167__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(.-parentElement el)")].join('')));
}

return hipo.dom.replace_text_BANG_(el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nh)].join(''));
});})(map__14167,map__14167__$1,m,interceptors))
;
var v__13349__auto__ = interceptors;
if((cljs.core.not(v__13349__auto__)) || (cljs.core.empty_QMARK_(v__13349__auto__))){
return b__13348__auto__();
} else {
return hipo.interceptor.call(b__13348__auto__,v__13349__auto__,cljs.core.cst$kw$replace,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_(el,oh,nh,m);
}
});})(map__14167,map__14167__$1,m,interceptors))
;
var v__13349__auto__ = interceptors;
if((cljs.core.not(v__13349__auto__)) || (cljs.core.empty_QMARK_(v__13349__auto__))){
return b__13348__auto__();
} else {
return hipo.interceptor.call(b__13348__auto__,v__13349__auto__,cljs.core.cst$kw$reconciliate,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$old_DASH_value,oh,cljs.core.cst$kw$new_DASH_value,nh], null));
}
});
