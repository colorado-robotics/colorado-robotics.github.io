// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__7488__auto__ = elem.textContent;
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__15497 = arguments.length;
switch (G__15497) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,cljs.core.cst$kw$display) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$top,r.top,cljs.core.cst$kw$bottom,r.bottom,cljs.core.cst$kw$left,r.left,cljs.core.cst$kw$right,r.right,cljs.core.cst$kw$width,r.width,cljs.core.cst$kw$height,r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__15506 = arguments.length;
switch (G__15506) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__15514 = arguments.length;
switch (G__15514) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15512_SHARP_){
return !((p1__15512_SHARP_ === base));
}),dommy.core.ancestors(elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__8620__auto__ = [];
var len__8613__auto___15538 = arguments.length;
var i__8614__auto___15539 = (0);
while(true){
if((i__8614__auto___15539 < len__8613__auto___15538)){
args__8620__auto__.push((arguments[i__8614__auto___15539]));

var G__15542 = (i__8614__auto___15539 + (1));
i__8614__auto___15539 = G__15542;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__15525_15551 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__15526_15552 = null;
var count__15527_15553 = (0);
var i__15528_15554 = (0);
while(true){
if((i__15528_15554 < count__15527_15553)){
var vec__15529_15555 = chunk__15526_15552.cljs$core$IIndexed$_nth$arity$2(null,i__15528_15554);
var k_15556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15529_15555,(0),null);
var v_15557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15529_15555,(1),null);
style.setProperty(dommy.utils.as_str(k_15556),v_15557);

var G__15558 = seq__15525_15551;
var G__15559 = chunk__15526_15552;
var G__15560 = count__15527_15553;
var G__15561 = (i__15528_15554 + (1));
seq__15525_15551 = G__15558;
chunk__15526_15552 = G__15559;
count__15527_15553 = G__15560;
i__15528_15554 = G__15561;
continue;
} else {
var temp__4657__auto___15562 = cljs.core.seq(seq__15525_15551);
if(temp__4657__auto___15562){
var seq__15525_15563__$1 = temp__4657__auto___15562;
if(cljs.core.chunked_seq_QMARK_(seq__15525_15563__$1)){
var c__8308__auto___15564 = cljs.core.chunk_first(seq__15525_15563__$1);
var G__15565 = cljs.core.chunk_rest(seq__15525_15563__$1);
var G__15566 = c__8308__auto___15564;
var G__15567 = cljs.core.count(c__8308__auto___15564);
var G__15568 = (0);
seq__15525_15551 = G__15565;
chunk__15526_15552 = G__15566;
count__15527_15553 = G__15567;
i__15528_15554 = G__15568;
continue;
} else {
var vec__15532_15569 = cljs.core.first(seq__15525_15563__$1);
var k_15570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15532_15569,(0),null);
var v_15571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15532_15569,(1),null);
style.setProperty(dommy.utils.as_str(k_15570),v_15571);

var G__15572 = cljs.core.next(seq__15525_15563__$1);
var G__15573 = null;
var G__15574 = (0);
var G__15575 = (0);
seq__15525_15551 = G__15572;
chunk__15526_15552 = G__15573;
count__15527_15553 = G__15574;
i__15528_15554 = G__15575;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq15522){
var G__15523 = cljs.core.first(seq15522);
var seq15522__$1 = cljs.core.next(seq15522);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15523,seq15522__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__8620__auto__ = [];
var len__8613__auto___15583 = arguments.length;
var i__8614__auto___15584 = (0);
while(true){
if((i__8614__auto___15584 < len__8613__auto___15583)){
args__8620__auto__.push((arguments[i__8614__auto___15584]));

var G__15585 = (i__8614__auto___15584 + (1));
i__8614__auto___15584 = G__15585;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__15578_15586 = cljs.core.seq(keywords);
var chunk__15579_15587 = null;
var count__15580_15588 = (0);
var i__15581_15589 = (0);
while(true){
if((i__15581_15589 < count__15580_15588)){
var kw_15590 = chunk__15579_15587.cljs$core$IIndexed$_nth$arity$2(null,i__15581_15589);
style.removeProperty(dommy.utils.as_str(kw_15590));

var G__15591 = seq__15578_15586;
var G__15592 = chunk__15579_15587;
var G__15593 = count__15580_15588;
var G__15594 = (i__15581_15589 + (1));
seq__15578_15586 = G__15591;
chunk__15579_15587 = G__15592;
count__15580_15588 = G__15593;
i__15581_15589 = G__15594;
continue;
} else {
var temp__4657__auto___15595 = cljs.core.seq(seq__15578_15586);
if(temp__4657__auto___15595){
var seq__15578_15596__$1 = temp__4657__auto___15595;
if(cljs.core.chunked_seq_QMARK_(seq__15578_15596__$1)){
var c__8308__auto___15597 = cljs.core.chunk_first(seq__15578_15596__$1);
var G__15598 = cljs.core.chunk_rest(seq__15578_15596__$1);
var G__15599 = c__8308__auto___15597;
var G__15600 = cljs.core.count(c__8308__auto___15597);
var G__15601 = (0);
seq__15578_15586 = G__15598;
chunk__15579_15587 = G__15599;
count__15580_15588 = G__15600;
i__15581_15589 = G__15601;
continue;
} else {
var kw_15602 = cljs.core.first(seq__15578_15596__$1);
style.removeProperty(dommy.utils.as_str(kw_15602));

var G__15603 = cljs.core.next(seq__15578_15596__$1);
var G__15604 = null;
var G__15605 = (0);
var G__15606 = (0);
seq__15578_15586 = G__15603;
chunk__15579_15587 = G__15604;
count__15580_15588 = G__15605;
i__15581_15589 = G__15606;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq15576){
var G__15577 = cljs.core.first(seq15576);
var seq15576__$1 = cljs.core.next(seq15576);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15577,seq15576__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__8620__auto__ = [];
var len__8613__auto___15619 = arguments.length;
var i__8614__auto___15620 = (0);
while(true){
if((i__8614__auto___15620 < len__8613__auto___15619)){
args__8620__auto__.push((arguments[i__8614__auto___15620]));

var G__15621 = (i__8614__auto___15620 + (1));
i__8614__auto___15620 = G__15621;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__15609_15622 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__15610_15623 = null;
var count__15611_15624 = (0);
var i__15612_15625 = (0);
while(true){
if((i__15612_15625 < count__15611_15624)){
var vec__15613_15626 = chunk__15610_15623.cljs$core$IIndexed$_nth$arity$2(null,i__15612_15625);
var k_15627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15613_15626,(0),null);
var v_15628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15613_15626,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15627,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15628),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('')], 0));

var G__15629 = seq__15609_15622;
var G__15630 = chunk__15610_15623;
var G__15631 = count__15611_15624;
var G__15632 = (i__15612_15625 + (1));
seq__15609_15622 = G__15629;
chunk__15610_15623 = G__15630;
count__15611_15624 = G__15631;
i__15612_15625 = G__15632;
continue;
} else {
var temp__4657__auto___15633 = cljs.core.seq(seq__15609_15622);
if(temp__4657__auto___15633){
var seq__15609_15634__$1 = temp__4657__auto___15633;
if(cljs.core.chunked_seq_QMARK_(seq__15609_15634__$1)){
var c__8308__auto___15635 = cljs.core.chunk_first(seq__15609_15634__$1);
var G__15636 = cljs.core.chunk_rest(seq__15609_15634__$1);
var G__15637 = c__8308__auto___15635;
var G__15638 = cljs.core.count(c__8308__auto___15635);
var G__15639 = (0);
seq__15609_15622 = G__15636;
chunk__15610_15623 = G__15637;
count__15611_15624 = G__15638;
i__15612_15625 = G__15639;
continue;
} else {
var vec__15616_15640 = cljs.core.first(seq__15609_15634__$1);
var k_15641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15616_15640,(0),null);
var v_15642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15616_15640,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15641,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15642),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('')], 0));

var G__15644 = cljs.core.next(seq__15609_15634__$1);
var G__15645 = null;
var G__15646 = (0);
var G__15647 = (0);
seq__15609_15622 = G__15644;
chunk__15610_15623 = G__15645;
count__15611_15624 = G__15646;
i__15612_15625 = G__15647;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq15607){
var G__15608 = cljs.core.first(seq15607);
var seq15607__$1 = cljs.core.next(seq15607);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15608,seq15607__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__15653 = arguments.length;
switch (G__15653) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__8632__auto__ = [];
var len__8613__auto___15672 = arguments.length;
var i__8614__auto___15673 = (0);
while(true){
if((i__8614__auto___15673 < len__8613__auto___15672)){
args_arr__8632__auto__.push((arguments[i__8614__auto___15673]));

var G__15674 = (i__8614__auto___15673 + (1));
i__8614__auto___15673 = G__15674;
continue;
} else {
}
break;
}

var argseq__8633__auto__ = (new cljs.core.IndexedSeq(args_arr__8632__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8633__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__15655 = elem;
(G__15655[k__$1] = v);

return G__15655;
} else {
var G__15657 = elem;
G__15657.setAttribute(k__$1,v);

return G__15657;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__15659_15677 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__15660_15678 = null;
var count__15661_15679 = (0);
var i__15662_15680 = (0);
while(true){
if((i__15662_15680 < count__15661_15679)){
var vec__15663_15681 = chunk__15660_15678.cljs$core$IIndexed$_nth$arity$2(null,i__15662_15680);
var k_15682__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15663_15681,(0),null);
var v_15683__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15663_15681,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15682__$1,v_15683__$1);

var G__15684 = seq__15659_15677;
var G__15685 = chunk__15660_15678;
var G__15686 = count__15661_15679;
var G__15687 = (i__15662_15680 + (1));
seq__15659_15677 = G__15684;
chunk__15660_15678 = G__15685;
count__15661_15679 = G__15686;
i__15662_15680 = G__15687;
continue;
} else {
var temp__4657__auto___15688 = cljs.core.seq(seq__15659_15677);
if(temp__4657__auto___15688){
var seq__15659_15689__$1 = temp__4657__auto___15688;
if(cljs.core.chunked_seq_QMARK_(seq__15659_15689__$1)){
var c__8308__auto___15690 = cljs.core.chunk_first(seq__15659_15689__$1);
var G__15691 = cljs.core.chunk_rest(seq__15659_15689__$1);
var G__15692 = c__8308__auto___15690;
var G__15693 = cljs.core.count(c__8308__auto___15690);
var G__15694 = (0);
seq__15659_15677 = G__15691;
chunk__15660_15678 = G__15692;
count__15661_15679 = G__15693;
i__15662_15680 = G__15694;
continue;
} else {
var vec__15668_15695 = cljs.core.first(seq__15659_15689__$1);
var k_15696__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15668_15695,(0),null);
var v_15697__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15668_15695,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15696__$1,v_15697__$1);

var G__15698 = cljs.core.next(seq__15659_15689__$1);
var G__15699 = null;
var G__15700 = (0);
var G__15701 = (0);
seq__15659_15677 = G__15698;
chunk__15660_15678 = G__15699;
count__15661_15679 = G__15700;
i__15662_15680 = G__15701;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq15649){
var G__15650 = cljs.core.first(seq15649);
var seq15649__$1 = cljs.core.next(seq15649);
var G__15651 = cljs.core.first(seq15649__$1);
var seq15649__$2 = cljs.core.next(seq15649__$1);
var G__15652 = cljs.core.first(seq15649__$2);
var seq15649__$3 = cljs.core.next(seq15649__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15650,G__15651,G__15652,seq15649__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__15706 = arguments.length;
switch (G__15706) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8632__auto__ = [];
var len__8613__auto___15713 = arguments.length;
var i__8614__auto___15714 = (0);
while(true){
if((i__8614__auto___15714 < len__8613__auto___15713)){
args_arr__8632__auto__.push((arguments[i__8614__auto___15714]));

var G__15715 = (i__8614__auto___15714 + (1));
i__8614__auto___15714 = G__15715;
continue;
} else {
}
break;
}

var argseq__8633__auto__ = (new cljs.core.IndexedSeq(args_arr__8632__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8633__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_15716__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__15707 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__15707.cljs$core$IFn$_invoke$arity$1 ? fexpr__15707.cljs$core$IFn$_invoke$arity$1(k_15716__$1) : fexpr__15707.call(null,k_15716__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_15716__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__15708_15723 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__15709_15724 = null;
var count__15710_15725 = (0);
var i__15711_15726 = (0);
while(true){
if((i__15711_15726 < count__15710_15725)){
var k_15727__$1 = chunk__15709_15724.cljs$core$IIndexed$_nth$arity$2(null,i__15711_15726);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15727__$1);

var G__15728 = seq__15708_15723;
var G__15729 = chunk__15709_15724;
var G__15730 = count__15710_15725;
var G__15731 = (i__15711_15726 + (1));
seq__15708_15723 = G__15728;
chunk__15709_15724 = G__15729;
count__15710_15725 = G__15730;
i__15711_15726 = G__15731;
continue;
} else {
var temp__4657__auto___15732 = cljs.core.seq(seq__15708_15723);
if(temp__4657__auto___15732){
var seq__15708_15733__$1 = temp__4657__auto___15732;
if(cljs.core.chunked_seq_QMARK_(seq__15708_15733__$1)){
var c__8308__auto___15734 = cljs.core.chunk_first(seq__15708_15733__$1);
var G__15735 = cljs.core.chunk_rest(seq__15708_15733__$1);
var G__15736 = c__8308__auto___15734;
var G__15737 = cljs.core.count(c__8308__auto___15734);
var G__15738 = (0);
seq__15708_15723 = G__15735;
chunk__15709_15724 = G__15736;
count__15710_15725 = G__15737;
i__15711_15726 = G__15738;
continue;
} else {
var k_15743__$1 = cljs.core.first(seq__15708_15733__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15743__$1);

var G__15744 = cljs.core.next(seq__15708_15733__$1);
var G__15745 = null;
var G__15746 = (0);
var G__15747 = (0);
seq__15708_15723 = G__15744;
chunk__15709_15724 = G__15745;
count__15710_15725 = G__15746;
i__15711_15726 = G__15747;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq15703){
var G__15704 = cljs.core.first(seq15703);
var seq15703__$1 = cljs.core.next(seq15703);
var G__15705 = cljs.core.first(seq15703__$1);
var seq15703__$2 = cljs.core.next(seq15703__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15704,G__15705,seq15703__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__15753 = arguments.length;
switch (G__15753) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__15786 = arguments.length;
switch (G__15786) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8632__auto__ = [];
var len__8613__auto___15819 = arguments.length;
var i__8614__auto___15820 = (0);
while(true){
if((i__8614__auto___15820 < len__8613__auto___15819)){
args_arr__8632__auto__.push((arguments[i__8614__auto___15820]));

var G__15821 = (i__8614__auto___15820 + (1));
i__8614__auto___15820 = G__15821;
continue;
} else {
}
break;
}

var argseq__8633__auto__ = (new cljs.core.IndexedSeq(args_arr__8632__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8633__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__4655__auto___15822 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15822)){
var class_list_15823 = temp__4655__auto___15822;
var seq__15792_15824 = cljs.core.seq(classes__$1);
var chunk__15793_15825 = null;
var count__15794_15826 = (0);
var i__15795_15827 = (0);
while(true){
if((i__15795_15827 < count__15794_15826)){
var c_15828 = chunk__15793_15825.cljs$core$IIndexed$_nth$arity$2(null,i__15795_15827);
class_list_15823.add(c_15828);

var G__15830 = seq__15792_15824;
var G__15831 = chunk__15793_15825;
var G__15832 = count__15794_15826;
var G__15833 = (i__15795_15827 + (1));
seq__15792_15824 = G__15830;
chunk__15793_15825 = G__15831;
count__15794_15826 = G__15832;
i__15795_15827 = G__15833;
continue;
} else {
var temp__4657__auto___15834 = cljs.core.seq(seq__15792_15824);
if(temp__4657__auto___15834){
var seq__15792_15835__$1 = temp__4657__auto___15834;
if(cljs.core.chunked_seq_QMARK_(seq__15792_15835__$1)){
var c__8308__auto___15836 = cljs.core.chunk_first(seq__15792_15835__$1);
var G__15837 = cljs.core.chunk_rest(seq__15792_15835__$1);
var G__15838 = c__8308__auto___15836;
var G__15839 = cljs.core.count(c__8308__auto___15836);
var G__15840 = (0);
seq__15792_15824 = G__15837;
chunk__15793_15825 = G__15838;
count__15794_15826 = G__15839;
i__15795_15827 = G__15840;
continue;
} else {
var c_15841 = cljs.core.first(seq__15792_15835__$1);
class_list_15823.add(c_15841);

var G__15842 = cljs.core.next(seq__15792_15835__$1);
var G__15843 = null;
var G__15844 = (0);
var G__15845 = (0);
seq__15792_15824 = G__15842;
chunk__15793_15825 = G__15843;
count__15794_15826 = G__15844;
i__15795_15827 = G__15845;
continue;
}
} else {
}
}
break;
}
} else {
var seq__15801_15846 = cljs.core.seq(classes__$1);
var chunk__15802_15847 = null;
var count__15803_15848 = (0);
var i__15804_15849 = (0);
while(true){
if((i__15804_15849 < count__15803_15848)){
var c_15850 = chunk__15802_15847.cljs$core$IIndexed$_nth$arity$2(null,i__15804_15849);
var class_name_15851 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15851,c_15850))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15851 === ""))?c_15850:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15851),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15850)].join('')));
}

var G__15852 = seq__15801_15846;
var G__15853 = chunk__15802_15847;
var G__15854 = count__15803_15848;
var G__15855 = (i__15804_15849 + (1));
seq__15801_15846 = G__15852;
chunk__15802_15847 = G__15853;
count__15803_15848 = G__15854;
i__15804_15849 = G__15855;
continue;
} else {
var temp__4657__auto___15856 = cljs.core.seq(seq__15801_15846);
if(temp__4657__auto___15856){
var seq__15801_15857__$1 = temp__4657__auto___15856;
if(cljs.core.chunked_seq_QMARK_(seq__15801_15857__$1)){
var c__8308__auto___15858 = cljs.core.chunk_first(seq__15801_15857__$1);
var G__15859 = cljs.core.chunk_rest(seq__15801_15857__$1);
var G__15860 = c__8308__auto___15858;
var G__15861 = cljs.core.count(c__8308__auto___15858);
var G__15862 = (0);
seq__15801_15846 = G__15859;
chunk__15802_15847 = G__15860;
count__15803_15848 = G__15861;
i__15804_15849 = G__15862;
continue;
} else {
var c_15863 = cljs.core.first(seq__15801_15857__$1);
var class_name_15864 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15864,c_15863))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15864 === ""))?c_15863:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15864),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15863)].join('')));
}

var G__15865 = cljs.core.next(seq__15801_15857__$1);
var G__15866 = null;
var G__15867 = (0);
var G__15868 = (0);
seq__15801_15846 = G__15865;
chunk__15802_15847 = G__15866;
count__15803_15848 = G__15867;
i__15804_15849 = G__15868;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__15810_15869 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__15811_15870 = null;
var count__15812_15871 = (0);
var i__15813_15872 = (0);
while(true){
if((i__15813_15872 < count__15812_15871)){
var c_15874 = chunk__15811_15870.cljs$core$IIndexed$_nth$arity$2(null,i__15813_15872);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15874);

var G__15875 = seq__15810_15869;
var G__15876 = chunk__15811_15870;
var G__15877 = count__15812_15871;
var G__15878 = (i__15813_15872 + (1));
seq__15810_15869 = G__15875;
chunk__15811_15870 = G__15876;
count__15812_15871 = G__15877;
i__15813_15872 = G__15878;
continue;
} else {
var temp__4657__auto___15879 = cljs.core.seq(seq__15810_15869);
if(temp__4657__auto___15879){
var seq__15810_15880__$1 = temp__4657__auto___15879;
if(cljs.core.chunked_seq_QMARK_(seq__15810_15880__$1)){
var c__8308__auto___15881 = cljs.core.chunk_first(seq__15810_15880__$1);
var G__15882 = cljs.core.chunk_rest(seq__15810_15880__$1);
var G__15883 = c__8308__auto___15881;
var G__15884 = cljs.core.count(c__8308__auto___15881);
var G__15885 = (0);
seq__15810_15869 = G__15882;
chunk__15811_15870 = G__15883;
count__15812_15871 = G__15884;
i__15813_15872 = G__15885;
continue;
} else {
var c_15886 = cljs.core.first(seq__15810_15880__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15886);

var G__15889 = cljs.core.next(seq__15810_15880__$1);
var G__15890 = null;
var G__15891 = (0);
var G__15892 = (0);
seq__15810_15869 = G__15889;
chunk__15811_15870 = G__15890;
count__15812_15871 = G__15891;
i__15813_15872 = G__15892;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq15782){
var G__15783 = cljs.core.first(seq15782);
var seq15782__$1 = cljs.core.next(seq15782);
var G__15784 = cljs.core.first(seq15782__$1);
var seq15782__$2 = cljs.core.next(seq15782__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15783,G__15784,seq15782__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__15897 = arguments.length;
switch (G__15897) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8632__auto__ = [];
var len__8613__auto___15907 = arguments.length;
var i__8614__auto___15908 = (0);
while(true){
if((i__8614__auto___15908 < len__8613__auto___15907)){
args_arr__8632__auto__.push((arguments[i__8614__auto___15908]));

var G__15909 = (i__8614__auto___15908 + (1));
i__8614__auto___15908 = G__15909;
continue;
} else {
}
break;
}

var argseq__8633__auto__ = (new cljs.core.IndexedSeq(args_arr__8632__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8633__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto___15910 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15910)){
var class_list_15911 = temp__4655__auto___15910;
class_list_15911.remove(c__$1);
} else {
var class_name_15912 = dommy.core.class$(elem);
var new_class_name_15913 = dommy.utils.remove_class_str(class_name_15912,c__$1);
if((class_name_15912 === new_class_name_15913)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_15913);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__15899 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__15900 = null;
var count__15901 = (0);
var i__15902 = (0);
while(true){
if((i__15902 < count__15901)){
var c = chunk__15900.cljs$core$IIndexed$_nth$arity$2(null,i__15902);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15914 = seq__15899;
var G__15915 = chunk__15900;
var G__15916 = count__15901;
var G__15917 = (i__15902 + (1));
seq__15899 = G__15914;
chunk__15900 = G__15915;
count__15901 = G__15916;
i__15902 = G__15917;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15899);
if(temp__4657__auto__){
var seq__15899__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15899__$1)){
var c__8308__auto__ = cljs.core.chunk_first(seq__15899__$1);
var G__15920 = cljs.core.chunk_rest(seq__15899__$1);
var G__15921 = c__8308__auto__;
var G__15922 = cljs.core.count(c__8308__auto__);
var G__15923 = (0);
seq__15899 = G__15920;
chunk__15900 = G__15921;
count__15901 = G__15922;
i__15902 = G__15923;
continue;
} else {
var c = cljs.core.first(seq__15899__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15924 = cljs.core.next(seq__15899__$1);
var G__15925 = null;
var G__15926 = (0);
var G__15927 = (0);
seq__15899 = G__15924;
chunk__15900 = G__15925;
count__15901 = G__15926;
i__15902 = G__15927;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq15894){
var G__15895 = cljs.core.first(seq15894);
var seq15894__$1 = cljs.core.next(seq15894);
var G__15896 = cljs.core.first(seq15894__$1);
var seq15894__$2 = cljs.core.next(seq15894__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15895,G__15896,seq15894__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__15930 = arguments.length;
switch (G__15930) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto___15935 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15935)){
var class_list_15936 = temp__4655__auto___15935;
class_list_15936.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,!(dommy.core.has_class_QMARK_(elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__15938 = arguments.length;
switch (G__15938) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$display,((show_QMARK_)?"":"none")], 0));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__15942 = arguments.length;
switch (G__15942) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__15955 = arguments.length;
switch (G__15955) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8632__auto__ = [];
var len__8613__auto___15962 = arguments.length;
var i__8614__auto___15963 = (0);
while(true){
if((i__8614__auto___15963 < len__8613__auto___15962)){
args_arr__8632__auto__.push((arguments[i__8614__auto___15963]));

var G__15964 = (i__8614__auto___15963 + (1));
i__8614__auto___15963 = G__15964;
continue;
} else {
}
break;
}

var argseq__8633__auto__ = (new cljs.core.IndexedSeq(args_arr__8632__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8633__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__15956 = parent;
G__15956.appendChild(child);

return G__15956;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15957_15965 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15958_15966 = null;
var count__15959_15967 = (0);
var i__15960_15968 = (0);
while(true){
if((i__15960_15968 < count__15959_15967)){
var c_15972 = chunk__15958_15966.cljs$core$IIndexed$_nth$arity$2(null,i__15960_15968);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15972);

var G__15973 = seq__15957_15965;
var G__15974 = chunk__15958_15966;
var G__15975 = count__15959_15967;
var G__15976 = (i__15960_15968 + (1));
seq__15957_15965 = G__15973;
chunk__15958_15966 = G__15974;
count__15959_15967 = G__15975;
i__15960_15968 = G__15976;
continue;
} else {
var temp__4657__auto___15977 = cljs.core.seq(seq__15957_15965);
if(temp__4657__auto___15977){
var seq__15957_15978__$1 = temp__4657__auto___15977;
if(cljs.core.chunked_seq_QMARK_(seq__15957_15978__$1)){
var c__8308__auto___15979 = cljs.core.chunk_first(seq__15957_15978__$1);
var G__15980 = cljs.core.chunk_rest(seq__15957_15978__$1);
var G__15981 = c__8308__auto___15979;
var G__15982 = cljs.core.count(c__8308__auto___15979);
var G__15983 = (0);
seq__15957_15965 = G__15980;
chunk__15958_15966 = G__15981;
count__15959_15967 = G__15982;
i__15960_15968 = G__15983;
continue;
} else {
var c_15984 = cljs.core.first(seq__15957_15978__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15984);

var G__15985 = cljs.core.next(seq__15957_15978__$1);
var G__15986 = null;
var G__15987 = (0);
var G__15988 = (0);
seq__15957_15965 = G__15985;
chunk__15958_15966 = G__15986;
count__15959_15967 = G__15987;
i__15960_15968 = G__15988;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq15952){
var G__15953 = cljs.core.first(seq15952);
var seq15952__$1 = cljs.core.next(seq15952);
var G__15954 = cljs.core.first(seq15952__$1);
var seq15952__$2 = cljs.core.next(seq15952__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15953,G__15954,seq15952__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__15993 = arguments.length;
switch (G__15993) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8632__auto__ = [];
var len__8613__auto___16003 = arguments.length;
var i__8614__auto___16004 = (0);
while(true){
if((i__8614__auto___16004 < len__8613__auto___16003)){
args_arr__8632__auto__.push((arguments[i__8614__auto___16004]));

var G__16006 = (i__8614__auto___16004 + (1));
i__8614__auto___16004 = G__16006;
continue;
} else {
}
break;
}

var argseq__8633__auto__ = (new cljs.core.IndexedSeq(args_arr__8632__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8633__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__15994 = parent;
G__15994.insertBefore(child,parent.firstChild);

return G__15994;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15995_16007 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15996_16008 = null;
var count__15997_16009 = (0);
var i__15998_16010 = (0);
while(true){
if((i__15998_16010 < count__15997_16009)){
var c_16011 = chunk__15996_16008.cljs$core$IIndexed$_nth$arity$2(null,i__15998_16010);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_16011);

var G__16012 = seq__15995_16007;
var G__16013 = chunk__15996_16008;
var G__16014 = count__15997_16009;
var G__16015 = (i__15998_16010 + (1));
seq__15995_16007 = G__16012;
chunk__15996_16008 = G__16013;
count__15997_16009 = G__16014;
i__15998_16010 = G__16015;
continue;
} else {
var temp__4657__auto___16016 = cljs.core.seq(seq__15995_16007);
if(temp__4657__auto___16016){
var seq__15995_16017__$1 = temp__4657__auto___16016;
if(cljs.core.chunked_seq_QMARK_(seq__15995_16017__$1)){
var c__8308__auto___16018 = cljs.core.chunk_first(seq__15995_16017__$1);
var G__16019 = cljs.core.chunk_rest(seq__15995_16017__$1);
var G__16020 = c__8308__auto___16018;
var G__16021 = cljs.core.count(c__8308__auto___16018);
var G__16022 = (0);
seq__15995_16007 = G__16019;
chunk__15996_16008 = G__16020;
count__15997_16009 = G__16021;
i__15998_16010 = G__16022;
continue;
} else {
var c_16023 = cljs.core.first(seq__15995_16017__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_16023);

var G__16024 = cljs.core.next(seq__15995_16017__$1);
var G__16025 = null;
var G__16026 = (0);
var G__16027 = (0);
seq__15995_16007 = G__16024;
chunk__15996_16008 = G__16025;
count__15997_16009 = G__16026;
i__15998_16010 = G__16027;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq15990){
var G__15991 = cljs.core.first(seq15990);
var seq15990__$1 = cljs.core.next(seq15990);
var G__15992 = cljs.core.first(seq15990__$1);
var seq15990__$2 = cljs.core.next(seq15990__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15991,G__15992,seq15990__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Target element must have a parent"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___16031 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___16031)){
var next_16032 = temp__4655__auto___16031;
dommy.core.insert_before_BANG_(elem,next_16032);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Target element must have a parent"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("p")].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__16039 = arguments.length;
switch (G__16039) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Target element must have a parent"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("p")].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__16041 = p;
G__16041.removeChild(elem);

return G__16041;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16043){
var vec__16044 = p__16043;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16044,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16044,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__16044,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__16044,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__7488__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__7476__auto__ = related_target;
if(cljs.core.truth_(and__7476__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__7476__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
;})(vec__16044,special_mouse_event,real_mouse_event))
});})(vec__16044,special_mouse_event,real_mouse_event))
])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mouseenter,cljs.core.cst$kw$mouseover,cljs.core.cst$kw$mouseleave,cljs.core.cst$kw$mouseout], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__7476__auto__ = selected_target;
if(cljs.core.truth_(and__7476__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,cljs.core.cst$kw$disabled));
} else {
return and__7476__auto__;
}
})())){
event.selectedTarget = selected_target;

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__7488__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__7488__auto__)){
return or__7488__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__8620__auto__ = [];
var len__8613__auto___16066 = arguments.length;
var i__8614__auto___16067 = (0);
while(true){
if((i__8614__auto___16067 < len__8613__auto___16066)){
args__8620__auto__.push((arguments[i__8614__auto___16067]));

var G__16069 = (i__8614__auto___16067 + (1));
i__8614__auto___16067 = G__16069;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((2) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8621__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq16050){
var G__16051 = cljs.core.first(seq16050);
var seq16050__$1 = cljs.core.next(seq16050);
var G__16052 = cljs.core.first(seq16050__$1);
var seq16050__$2 = cljs.core.next(seq16050__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16051,G__16052,seq16050__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__16080 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__16080.cljs$core$IFn$_invoke$arity$1 ? fexpr__16080.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__16080.call(null,elem_sel));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__8620__auto__ = [];
var len__8613__auto___16148 = arguments.length;
var i__8614__auto___16149 = (0);
while(true){
if((i__8614__auto___16149 < len__8613__auto___16148)){
args__8620__auto__.push((arguments[i__8614__auto___16149]));

var G__16151 = (i__8614__auto___16149 + (1));
i__8614__auto___16149 = G__16151;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__16085_16153 = dommy.core.elem_and_selector(elem_sel);
var elem_16154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16085_16153,(0),null);
var selector_16155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16085_16153,(1),null);
var seq__16089_16157 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__16096_16158 = null;
var count__16097_16159 = (0);
var i__16098_16160 = (0);
while(true){
if((i__16098_16160 < count__16097_16159)){
var vec__16107_16161 = chunk__16096_16158.cljs$core$IIndexed$_nth$arity$2(null,i__16098_16160);
var orig_type_16162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16107_16161,(0),null);
var f_16163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16107_16161,(1),null);
var seq__16099_16166 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_16162,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_16162,cljs.core.identity])));
var chunk__16101_16167 = null;
var count__16103_16168 = (0);
var i__16104_16169 = (0);
while(true){
if((i__16104_16169 < count__16103_16168)){
var vec__16110_16170 = chunk__16101_16167.cljs$core$IIndexed$_nth$arity$2(null,i__16104_16169);
var actual_type_16171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16110_16170,(0),null);
var factory_16172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16110_16170,(1),null);
var canonical_f_16174 = (function (){var G__16115 = (factory_16172.cljs$core$IFn$_invoke$arity$1 ? factory_16172.cljs$core$IFn$_invoke$arity$1(f_16163) : factory_16172.call(null,f_16163));
var fexpr__16114 = (cljs.core.truth_(selector_16155)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_16154,selector_16155):cljs.core.identity);
return (fexpr__16114.cljs$core$IFn$_invoke$arity$1 ? fexpr__16114.cljs$core$IFn$_invoke$arity$1(G__16115) : fexpr__16114.call(null,G__16115));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16154,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16155,actual_type_16171,f_16163], null),canonical_f_16174], 0));

if(cljs.core.truth_(elem_16154.addEventListener)){
elem_16154.addEventListener(cljs.core.name(actual_type_16171),canonical_f_16174);
} else {
elem_16154.attachEvent(cljs.core.name(actual_type_16171),canonical_f_16174);
}

var G__16176 = seq__16099_16166;
var G__16177 = chunk__16101_16167;
var G__16178 = count__16103_16168;
var G__16179 = (i__16104_16169 + (1));
seq__16099_16166 = G__16176;
chunk__16101_16167 = G__16177;
count__16103_16168 = G__16178;
i__16104_16169 = G__16179;
continue;
} else {
var temp__4657__auto___16181 = cljs.core.seq(seq__16099_16166);
if(temp__4657__auto___16181){
var seq__16099_16183__$1 = temp__4657__auto___16181;
if(cljs.core.chunked_seq_QMARK_(seq__16099_16183__$1)){
var c__8308__auto___16184 = cljs.core.chunk_first(seq__16099_16183__$1);
var G__16186 = cljs.core.chunk_rest(seq__16099_16183__$1);
var G__16187 = c__8308__auto___16184;
var G__16188 = cljs.core.count(c__8308__auto___16184);
var G__16189 = (0);
seq__16099_16166 = G__16186;
chunk__16101_16167 = G__16187;
count__16103_16168 = G__16188;
i__16104_16169 = G__16189;
continue;
} else {
var vec__16116_16191 = cljs.core.first(seq__16099_16183__$1);
var actual_type_16192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16116_16191,(0),null);
var factory_16193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16116_16191,(1),null);
var canonical_f_16195 = (function (){var G__16121 = (factory_16193.cljs$core$IFn$_invoke$arity$1 ? factory_16193.cljs$core$IFn$_invoke$arity$1(f_16163) : factory_16193.call(null,f_16163));
var fexpr__16120 = (cljs.core.truth_(selector_16155)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_16154,selector_16155):cljs.core.identity);
return (fexpr__16120.cljs$core$IFn$_invoke$arity$1 ? fexpr__16120.cljs$core$IFn$_invoke$arity$1(G__16121) : fexpr__16120.call(null,G__16121));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16154,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16155,actual_type_16192,f_16163], null),canonical_f_16195], 0));

if(cljs.core.truth_(elem_16154.addEventListener)){
elem_16154.addEventListener(cljs.core.name(actual_type_16192),canonical_f_16195);
} else {
elem_16154.attachEvent(cljs.core.name(actual_type_16192),canonical_f_16195);
}

var G__16199 = cljs.core.next(seq__16099_16183__$1);
var G__16200 = null;
var G__16201 = (0);
var G__16202 = (0);
seq__16099_16166 = G__16199;
chunk__16101_16167 = G__16200;
count__16103_16168 = G__16201;
i__16104_16169 = G__16202;
continue;
}
} else {
}
}
break;
}

var G__16203 = seq__16089_16157;
var G__16204 = chunk__16096_16158;
var G__16205 = count__16097_16159;
var G__16206 = (i__16098_16160 + (1));
seq__16089_16157 = G__16203;
chunk__16096_16158 = G__16204;
count__16097_16159 = G__16205;
i__16098_16160 = G__16206;
continue;
} else {
var temp__4657__auto___16207 = cljs.core.seq(seq__16089_16157);
if(temp__4657__auto___16207){
var seq__16089_16208__$1 = temp__4657__auto___16207;
if(cljs.core.chunked_seq_QMARK_(seq__16089_16208__$1)){
var c__8308__auto___16209 = cljs.core.chunk_first(seq__16089_16208__$1);
var G__16210 = cljs.core.chunk_rest(seq__16089_16208__$1);
var G__16211 = c__8308__auto___16209;
var G__16212 = cljs.core.count(c__8308__auto___16209);
var G__16213 = (0);
seq__16089_16157 = G__16210;
chunk__16096_16158 = G__16211;
count__16097_16159 = G__16212;
i__16098_16160 = G__16213;
continue;
} else {
var vec__16125_16215 = cljs.core.first(seq__16089_16208__$1);
var orig_type_16216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16125_16215,(0),null);
var f_16217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16125_16215,(1),null);
var seq__16090_16219 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_16216,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_16216,cljs.core.identity])));
var chunk__16092_16220 = null;
var count__16093_16221 = (0);
var i__16094_16222 = (0);
while(true){
if((i__16094_16222 < count__16093_16221)){
var vec__16131_16223 = chunk__16092_16220.cljs$core$IIndexed$_nth$arity$2(null,i__16094_16222);
var actual_type_16224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16131_16223,(0),null);
var factory_16225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16131_16223,(1),null);
var canonical_f_16226 = (function (){var G__16136 = (factory_16225.cljs$core$IFn$_invoke$arity$1 ? factory_16225.cljs$core$IFn$_invoke$arity$1(f_16217) : factory_16225.call(null,f_16217));
var fexpr__16135 = (cljs.core.truth_(selector_16155)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_16154,selector_16155):cljs.core.identity);
return (fexpr__16135.cljs$core$IFn$_invoke$arity$1 ? fexpr__16135.cljs$core$IFn$_invoke$arity$1(G__16136) : fexpr__16135.call(null,G__16136));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16154,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16155,actual_type_16224,f_16217], null),canonical_f_16226], 0));

if(cljs.core.truth_(elem_16154.addEventListener)){
elem_16154.addEventListener(cljs.core.name(actual_type_16224),canonical_f_16226);
} else {
elem_16154.attachEvent(cljs.core.name(actual_type_16224),canonical_f_16226);
}

var G__16227 = seq__16090_16219;
var G__16228 = chunk__16092_16220;
var G__16229 = count__16093_16221;
var G__16230 = (i__16094_16222 + (1));
seq__16090_16219 = G__16227;
chunk__16092_16220 = G__16228;
count__16093_16221 = G__16229;
i__16094_16222 = G__16230;
continue;
} else {
var temp__4657__auto___16235__$1 = cljs.core.seq(seq__16090_16219);
if(temp__4657__auto___16235__$1){
var seq__16090_16236__$1 = temp__4657__auto___16235__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16090_16236__$1)){
var c__8308__auto___16237 = cljs.core.chunk_first(seq__16090_16236__$1);
var G__16238 = cljs.core.chunk_rest(seq__16090_16236__$1);
var G__16239 = c__8308__auto___16237;
var G__16240 = cljs.core.count(c__8308__auto___16237);
var G__16241 = (0);
seq__16090_16219 = G__16238;
chunk__16092_16220 = G__16239;
count__16093_16221 = G__16240;
i__16094_16222 = G__16241;
continue;
} else {
var vec__16140_16248 = cljs.core.first(seq__16090_16236__$1);
var actual_type_16249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16140_16248,(0),null);
var factory_16250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16140_16248,(1),null);
var canonical_f_16251 = (function (){var G__16145 = (factory_16250.cljs$core$IFn$_invoke$arity$1 ? factory_16250.cljs$core$IFn$_invoke$arity$1(f_16217) : factory_16250.call(null,f_16217));
var fexpr__16144 = (cljs.core.truth_(selector_16155)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_16154,selector_16155):cljs.core.identity);
return (fexpr__16144.cljs$core$IFn$_invoke$arity$1 ? fexpr__16144.cljs$core$IFn$_invoke$arity$1(G__16145) : fexpr__16144.call(null,G__16145));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16154,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16155,actual_type_16249,f_16217], null),canonical_f_16251], 0));

if(cljs.core.truth_(elem_16154.addEventListener)){
elem_16154.addEventListener(cljs.core.name(actual_type_16249),canonical_f_16251);
} else {
elem_16154.attachEvent(cljs.core.name(actual_type_16249),canonical_f_16251);
}

var G__16256 = cljs.core.next(seq__16090_16236__$1);
var G__16257 = null;
var G__16258 = (0);
var G__16259 = (0);
seq__16090_16219 = G__16256;
chunk__16092_16220 = G__16257;
count__16093_16221 = G__16258;
i__16094_16222 = G__16259;
continue;
}
} else {
}
}
break;
}

var G__16261 = cljs.core.next(seq__16089_16208__$1);
var G__16262 = null;
var G__16263 = (0);
var G__16264 = (0);
seq__16089_16157 = G__16261;
chunk__16096_16158 = G__16262;
count__16097_16159 = G__16263;
i__16098_16160 = G__16264;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq16081){
var G__16082 = cljs.core.first(seq16081);
var seq16081__$1 = cljs.core.next(seq16081);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16082,seq16081__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__8620__auto__ = [];
var len__8613__auto___16353 = arguments.length;
var i__8614__auto___16354 = (0);
while(true){
if((i__8614__auto___16354 < len__8613__auto___16353)){
args__8620__auto__.push((arguments[i__8614__auto___16354]));

var G__16356 = (i__8614__auto___16354 + (1));
i__8614__auto___16354 = G__16356;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__16287_16359 = dommy.core.elem_and_selector(elem_sel);
var elem_16361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16287_16359,(0),null);
var selector_16362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16287_16359,(1),null);
var seq__16290_16363 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__16297_16364 = null;
var count__16298_16365 = (0);
var i__16299_16366 = (0);
while(true){
if((i__16299_16366 < count__16298_16365)){
var vec__16306_16373 = chunk__16297_16364.cljs$core$IIndexed$_nth$arity$2(null,i__16299_16366);
var orig_type_16375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16306_16373,(0),null);
var f_16376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16306_16373,(1),null);
var seq__16300_16379 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_16375,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_16375,cljs.core.identity])));
var chunk__16302_16380 = null;
var count__16303_16381 = (0);
var i__16304_16382 = (0);
while(true){
if((i__16304_16382 < count__16303_16381)){
var vec__16311_16397 = chunk__16302_16380.cljs$core$IIndexed$_nth$arity$2(null,i__16304_16382);
var actual_type_16398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16311_16397,(0),null);
var __16399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16311_16397,(1),null);
var keys_16400 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16362,actual_type_16398,f_16376], null);
var canonical_f_16401 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_16361),keys_16400);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16361,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_16400], 0));

if(cljs.core.truth_(elem_16361.removeEventListener)){
elem_16361.removeEventListener(cljs.core.name(actual_type_16398),canonical_f_16401);
} else {
elem_16361.detachEvent(cljs.core.name(actual_type_16398),canonical_f_16401);
}

var G__16403 = seq__16300_16379;
var G__16404 = chunk__16302_16380;
var G__16405 = count__16303_16381;
var G__16406 = (i__16304_16382 + (1));
seq__16300_16379 = G__16403;
chunk__16302_16380 = G__16404;
count__16303_16381 = G__16405;
i__16304_16382 = G__16406;
continue;
} else {
var temp__4657__auto___16407 = cljs.core.seq(seq__16300_16379);
if(temp__4657__auto___16407){
var seq__16300_16408__$1 = temp__4657__auto___16407;
if(cljs.core.chunked_seq_QMARK_(seq__16300_16408__$1)){
var c__8308__auto___16409 = cljs.core.chunk_first(seq__16300_16408__$1);
var G__16410 = cljs.core.chunk_rest(seq__16300_16408__$1);
var G__16411 = c__8308__auto___16409;
var G__16412 = cljs.core.count(c__8308__auto___16409);
var G__16413 = (0);
seq__16300_16379 = G__16410;
chunk__16302_16380 = G__16411;
count__16303_16381 = G__16412;
i__16304_16382 = G__16413;
continue;
} else {
var vec__16317_16416 = cljs.core.first(seq__16300_16408__$1);
var actual_type_16417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16317_16416,(0),null);
var __16418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16317_16416,(1),null);
var keys_16420 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16362,actual_type_16417,f_16376], null);
var canonical_f_16421 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_16361),keys_16420);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16361,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_16420], 0));

if(cljs.core.truth_(elem_16361.removeEventListener)){
elem_16361.removeEventListener(cljs.core.name(actual_type_16417),canonical_f_16421);
} else {
elem_16361.detachEvent(cljs.core.name(actual_type_16417),canonical_f_16421);
}

var G__16424 = cljs.core.next(seq__16300_16408__$1);
var G__16425 = null;
var G__16426 = (0);
var G__16427 = (0);
seq__16300_16379 = G__16424;
chunk__16302_16380 = G__16425;
count__16303_16381 = G__16426;
i__16304_16382 = G__16427;
continue;
}
} else {
}
}
break;
}

var G__16429 = seq__16290_16363;
var G__16430 = chunk__16297_16364;
var G__16431 = count__16298_16365;
var G__16432 = (i__16299_16366 + (1));
seq__16290_16363 = G__16429;
chunk__16297_16364 = G__16430;
count__16298_16365 = G__16431;
i__16299_16366 = G__16432;
continue;
} else {
var temp__4657__auto___16434 = cljs.core.seq(seq__16290_16363);
if(temp__4657__auto___16434){
var seq__16290_16435__$1 = temp__4657__auto___16434;
if(cljs.core.chunked_seq_QMARK_(seq__16290_16435__$1)){
var c__8308__auto___16436 = cljs.core.chunk_first(seq__16290_16435__$1);
var G__16438 = cljs.core.chunk_rest(seq__16290_16435__$1);
var G__16439 = c__8308__auto___16436;
var G__16440 = cljs.core.count(c__8308__auto___16436);
var G__16441 = (0);
seq__16290_16363 = G__16438;
chunk__16297_16364 = G__16439;
count__16298_16365 = G__16440;
i__16299_16366 = G__16441;
continue;
} else {
var vec__16324_16443 = cljs.core.first(seq__16290_16435__$1);
var orig_type_16444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16324_16443,(0),null);
var f_16445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16324_16443,(1),null);
var seq__16291_16447 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_16444,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_16444,cljs.core.identity])));
var chunk__16293_16448 = null;
var count__16294_16449 = (0);
var i__16295_16450 = (0);
while(true){
if((i__16295_16450 < count__16294_16449)){
var vec__16339_16453 = chunk__16293_16448.cljs$core$IIndexed$_nth$arity$2(null,i__16295_16450);
var actual_type_16454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16339_16453,(0),null);
var __16455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16339_16453,(1),null);
var keys_16457 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16362,actual_type_16454,f_16445], null);
var canonical_f_16458 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_16361),keys_16457);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16361,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_16457], 0));

if(cljs.core.truth_(elem_16361.removeEventListener)){
elem_16361.removeEventListener(cljs.core.name(actual_type_16454),canonical_f_16458);
} else {
elem_16361.detachEvent(cljs.core.name(actual_type_16454),canonical_f_16458);
}

var G__16474 = seq__16291_16447;
var G__16475 = chunk__16293_16448;
var G__16476 = count__16294_16449;
var G__16477 = (i__16295_16450 + (1));
seq__16291_16447 = G__16474;
chunk__16293_16448 = G__16475;
count__16294_16449 = G__16476;
i__16295_16450 = G__16477;
continue;
} else {
var temp__4657__auto___16481__$1 = cljs.core.seq(seq__16291_16447);
if(temp__4657__auto___16481__$1){
var seq__16291_16488__$1 = temp__4657__auto___16481__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16291_16488__$1)){
var c__8308__auto___16498 = cljs.core.chunk_first(seq__16291_16488__$1);
var G__16503 = cljs.core.chunk_rest(seq__16291_16488__$1);
var G__16504 = c__8308__auto___16498;
var G__16505 = cljs.core.count(c__8308__auto___16498);
var G__16506 = (0);
seq__16291_16447 = G__16503;
chunk__16293_16448 = G__16504;
count__16294_16449 = G__16505;
i__16295_16450 = G__16506;
continue;
} else {
var vec__16345_16509 = cljs.core.first(seq__16291_16488__$1);
var actual_type_16510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16345_16509,(0),null);
var __16511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16345_16509,(1),null);
var keys_16512 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16362,actual_type_16510,f_16445], null);
var canonical_f_16513 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_16361),keys_16512);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16361,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_16512], 0));

if(cljs.core.truth_(elem_16361.removeEventListener)){
elem_16361.removeEventListener(cljs.core.name(actual_type_16510),canonical_f_16513);
} else {
elem_16361.detachEvent(cljs.core.name(actual_type_16510),canonical_f_16513);
}

var G__16517 = cljs.core.next(seq__16291_16488__$1);
var G__16518 = null;
var G__16519 = (0);
var G__16520 = (0);
seq__16291_16447 = G__16517;
chunk__16293_16448 = G__16518;
count__16294_16449 = G__16519;
i__16295_16450 = G__16520;
continue;
}
} else {
}
}
break;
}

var G__16522 = cljs.core.next(seq__16290_16435__$1);
var G__16523 = null;
var G__16524 = (0);
var G__16525 = (0);
seq__16290_16363 = G__16522;
chunk__16297_16364 = G__16523;
count__16298_16365 = G__16524;
i__16299_16366 = G__16525;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq16270){
var G__16271 = cljs.core.first(seq16270);
var seq16270__$1 = cljs.core.next(seq16270);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16271,seq16270__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__8620__auto__ = [];
var len__8613__auto___16557 = arguments.length;
var i__8614__auto___16558 = (0);
while(true){
if((i__8614__auto___16558 < len__8613__auto___16557)){
args__8620__auto__.push((arguments[i__8614__auto___16558]));

var G__16560 = (i__8614__auto___16558 + (1));
i__8614__auto___16558 = G__16560;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((1) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8621__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__16535_16563 = dommy.core.elem_and_selector(elem_sel);
var elem_16564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16535_16563,(0),null);
var selector_16565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16535_16563,(1),null);
var seq__16538_16567 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__16539_16568 = null;
var count__16540_16569 = (0);
var i__16541_16570 = (0);
while(true){
if((i__16541_16570 < count__16540_16569)){
var vec__16543_16574 = chunk__16539_16568.cljs$core$IIndexed$_nth$arity$2(null,i__16541_16570);
var type_16575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16543_16574,(0),null);
var f_16576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16543_16574,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_16575,((function (seq__16538_16567,chunk__16539_16568,count__16540_16569,i__16541_16570,vec__16543_16574,type_16575,f_16576,vec__16535_16563,elem_16564,selector_16565){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_16575,dommy$core$this_fn], 0));

return (f_16576.cljs$core$IFn$_invoke$arity$1 ? f_16576.cljs$core$IFn$_invoke$arity$1(e) : f_16576.call(null,e));
});})(seq__16538_16567,chunk__16539_16568,count__16540_16569,i__16541_16570,vec__16543_16574,type_16575,f_16576,vec__16535_16563,elem_16564,selector_16565))
], 0));

var G__16578 = seq__16538_16567;
var G__16579 = chunk__16539_16568;
var G__16580 = count__16540_16569;
var G__16581 = (i__16541_16570 + (1));
seq__16538_16567 = G__16578;
chunk__16539_16568 = G__16579;
count__16540_16569 = G__16580;
i__16541_16570 = G__16581;
continue;
} else {
var temp__4657__auto___16582 = cljs.core.seq(seq__16538_16567);
if(temp__4657__auto___16582){
var seq__16538_16583__$1 = temp__4657__auto___16582;
if(cljs.core.chunked_seq_QMARK_(seq__16538_16583__$1)){
var c__8308__auto___16584 = cljs.core.chunk_first(seq__16538_16583__$1);
var G__16585 = cljs.core.chunk_rest(seq__16538_16583__$1);
var G__16586 = c__8308__auto___16584;
var G__16587 = cljs.core.count(c__8308__auto___16584);
var G__16588 = (0);
seq__16538_16567 = G__16585;
chunk__16539_16568 = G__16586;
count__16540_16569 = G__16587;
i__16541_16570 = G__16588;
continue;
} else {
var vec__16549_16590 = cljs.core.first(seq__16538_16583__$1);
var type_16591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16549_16590,(0),null);
var f_16592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16549_16590,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_16591,((function (seq__16538_16567,chunk__16539_16568,count__16540_16569,i__16541_16570,vec__16549_16590,type_16591,f_16592,seq__16538_16583__$1,temp__4657__auto___16582,vec__16535_16563,elem_16564,selector_16565){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_16591,dommy$core$this_fn], 0));

return (f_16592.cljs$core$IFn$_invoke$arity$1 ? f_16592.cljs$core$IFn$_invoke$arity$1(e) : f_16592.call(null,e));
});})(seq__16538_16567,chunk__16539_16568,count__16540_16569,i__16541_16570,vec__16549_16590,type_16591,f_16592,seq__16538_16583__$1,temp__4657__auto___16582,vec__16535_16563,elem_16564,selector_16565))
], 0));

var G__16593 = cljs.core.next(seq__16538_16583__$1);
var G__16594 = null;
var G__16595 = (0);
var G__16596 = (0);
seq__16538_16567 = G__16593;
chunk__16539_16568 = G__16594;
count__16540_16569 = G__16595;
i__16541_16570 = G__16596;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq16530){
var G__16531 = cljs.core.first(seq16530);
var seq16530__$1 = cljs.core.next(seq16530);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16531,seq16530__$1);
});

