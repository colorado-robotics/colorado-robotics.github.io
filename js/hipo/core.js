// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('hipo.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hipo.interceptor');
goog.require('hipo.interpreter');
hipo.core.hiccup_property = "hipo_hiccup";
hipo.core.get_hiccup = (function hipo$core$get_hiccup(el){
return (el[hipo.core.hiccup_property]);
});
hipo.core.set_hiccup_BANG_ = (function hipo$core$set_hiccup_BANG_(el,h){
return (el[hipo.core.hiccup_property] = h);
});
/**
 * Reconciliate an existing DOM element to match an hiccup style vector.
 * Reconciliation works by diffing the hiccup used to create the DOM element with a new hiccup. Element created with `hipo.core/create` can be reconcilied without providing the previous hiccup.
 * Last argument is an optional map of options.
 * 
 * Options:
 * 
 * * force-compilation? fail create if DOM construction can't be fully compiled
 * * force-interpretation? bypass the DOM construction compilation
 * * create-element-fn
 * * namespaces
 * * attribute-handlers
 * * interceptors
 *   
 */
hipo.core.reconciliate_BANG_ = (function hipo$core$reconciliate_BANG_(var_args){
var G__15491 = arguments.length;
switch (G__15491) {
case 2:
return hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (el,nh){
return hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$3(el,nh,cljs.core.PersistentArrayMap.EMPTY);
});

hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (el,nh,m){
return hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(el,hipo.core.get_hiccup(el),nh,m);
});

hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (el,oh,nh,m){
if(!((oh == null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Previous hiccup can't be nil"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not (nil? oh))")].join('')));
}

hipo.core.set_hiccup_BANG_(el,nh);

return hipo.interpreter.reconciliate_BANG_(el,oh,nh,m);
});

hipo.core.reconciliate_BANG_.cljs$lang$maxFixedArity = 4;

