// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('colorobo.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('dommy.core');
goog.require('hipo.core');
cljs.core.enable_console_print_BANG_();
colorobo.core.cal_feeds = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BoulderIsForRobots","Women-in-Robotics-Boulder-Denver","Denver-Is-For-Robots","SHARC-Greater-Denver-Area-Robotics-Club"], null);
colorobo.core.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
colorobo.core.calendar_element = (function (){var v18465 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null);
var el__15476__auto__ = hipo.interpreter.create(v18465,null);
hipo.core.set_hiccup_BANG_(el__15476__auto__,v18465);

return el__15476__auto__;
})();
colorobo.core.aggregate_all_events = (function colorobo$core$aggregate_all_events(cal_events){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(colorobo.core.events,cljs.core.concat,cal_events);
});
colorobo.core.date_format = (function colorobo$core$date_format(var_args){
var args__8620__auto__ = [];
var len__8613__auto___18473 = arguments.length;
var i__8614__auto___18474 = (0);
while(true){
if((i__8614__auto___18474 < len__8613__auto___18473)){
args__8620__auto__.push((arguments[i__8614__auto___18474]));

var G__18475 = (i__8614__auto___18474 + (1));
i__8614__auto___18474 = G__18475;
continue;
} else {
}
break;
}

var argseq__8621__auto__ = ((((2) < args__8620__auto__.length))?(new cljs.core.IndexedSeq(args__8620__auto__.slice((2)),(0),null)):null);
return colorobo.core.date_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8621__auto__);
});

colorobo.core.date_format.cljs$core$IFn$_invoke$arity$variadic = (function (date,fmt,p__18469){
var vec__18470 = p__18469;
var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18470,(0),null);
var formatter = (new goog.i18n.DateTimeFormat(fmt));
if(cljs.core.truth_(tz)){
return formatter.format(date,tz);
} else {
return formatter.format(date);
}
});

colorobo.core.date_format.cljs$lang$maxFixedArity = (2);

colorobo.core.date_format.cljs$lang$applyTo = (function (seq18466){
var G__18467 = cljs.core.first(seq18466);
var seq18466__$1 = cljs.core.next(seq18466);
var G__18468 = cljs.core.first(seq18466__$1);
var seq18466__$2 = cljs.core.next(seq18466__$1);
return colorobo.core.date_format.cljs$core$IFn$_invoke$arity$variadic(G__18467,G__18468,seq18466__$2);
});

colorobo.core.format_timestamp = (function colorobo$core$format_timestamp(ts){
var dt = (new Date(ts));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,colorobo.core.date_format(dt,goog.i18n.DateTimeFormat.Format.MEDIUM_DATE)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,colorobo.core.date_format(dt,goog.i18n.DateTimeFormat.Format.SHORT_TIME)], null)], null)], null)], null);
});
colorobo.core.format_event = (function colorobo$core$format_event(ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$calendar_DASH_event$border,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col$ml_DASH_2$text_DASH_left,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$font_DASH_weight_DASH_bold,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(ev)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ev)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col$ml_DASH_2$text_DASH_left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$group.cljs$core$IFn$_invoke$arity$1(ev))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col$text_DASH_right$mr_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,colorobo.core.format_timestamp(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(ev))], null)], null)], null)], null)], null);
});
colorobo.core.format_event_calendar = (function colorobo$core$format_event_calendar(events){
hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$2(colorobo.core.calendar_element,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_community_DASH_events$border,(function (){var iter__8277__auto__ = (function colorobo$core$format_event_calendar_$_iter__18476(s__18477){
return (new cljs.core.LazySeq(null,(function (){
var s__18477__$1 = s__18477;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18477__$1);
if(temp__4657__auto__){
var s__18477__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18477__$2)){
var c__8275__auto__ = cljs.core.chunk_first(s__18477__$2);
var size__8276__auto__ = cljs.core.count(c__8275__auto__);
var b__18479 = cljs.core.chunk_buffer(size__8276__auto__);
if((function (){var i__18478 = (0);
while(true){
if((i__18478 < size__8276__auto__)){
var ev = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8275__auto__,i__18478);
cljs.core.chunk_append(b__18479,colorobo.core.format_event(ev));

var G__18480 = (i__18478 + (1));
i__18478 = G__18480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18479),colorobo$core$format_event_calendar_$_iter__18476(cljs.core.chunk_rest(s__18477__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18479),null);
}
} else {
var ev = cljs.core.first(s__18477__$2);
return cljs.core.cons(colorobo.core.format_event(ev),colorobo$core$format_event_calendar_$_iter__18476(cljs.core.rest(s__18477__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8277__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$time,events));
})()], null));

return colorobo.core.calendar_element;
});
colorobo.core.insert_calendar_to_page = (function colorobo$core$insert_calendar_to_page(cal_html){
if(cljs.core.not(document.getElementById("community-events"))){
return document.getElementById("community-calendar").appendChild(cal_html);
} else {
return null;
}
});
colorobo.core.fetch_calendars = (function colorobo$core$fetch_calendars(){
cljs.core.reset_BANG_(colorobo.core.events,cljs.core.PersistentVector.EMPTY);

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__8277__auto__ = (function colorobo$core$fetch_calendars_$_iter__18481(s__18482){
return (new cljs.core.LazySeq(null,(function (){
var s__18482__$1 = s__18482;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18482__$1);
if(temp__4657__auto__){
var s__18482__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18482__$2)){
var c__8275__auto__ = cljs.core.chunk_first(s__18482__$2);
var size__8276__auto__ = cljs.core.count(c__8275__auto__);
var b__18484 = cljs.core.chunk_buffer(size__8276__auto__);
if((function (){var i__18483 = (0);
while(true){
if((i__18483 < size__8276__auto__)){
var feed = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8275__auto__,i__18483);
cljs.core.chunk_append(b__18484,(function (){var c__15748__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (i__18483,c__15748__auto__,feed,c__8275__auto__,size__8276__auto__,b__18484,s__18482__$2,temp__4657__auto__){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (i__18483,c__15748__auto__,feed,c__8275__auto__,size__8276__auto__,b__18484,s__18482__$2,temp__4657__auto__){
return (function (state_18495){
var state_val_18496 = (state_18495[(1)]);
if((state_val_18496 === (1))){
var inst_18485 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("https://api.meetup.com/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feed),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/events")].join('');
var inst_18486 = cljs_http.client.jsonp(inst_18485);
var state_18495__$1 = state_18495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18495__$1,(2),inst_18486);
} else {
if((state_val_18496 === (2))){
var inst_18488 = (state_18495[(2)]);
var inst_18489 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18488);
var inst_18490 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_18489);
var inst_18491 = colorobo.core.aggregate_all_events(inst_18490);
var inst_18492 = colorobo.core.format_event_calendar(inst_18491);
var inst_18493 = colorobo.core.insert_calendar_to_page(inst_18492);
var state_18495__$1 = state_18495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18495__$1,inst_18493);
} else {
return null;
}
}
});})(i__18483,c__15748__auto__,feed,c__8275__auto__,size__8276__auto__,b__18484,s__18482__$2,temp__4657__auto__))
;
return ((function (i__18483,switch__15115__auto__,c__15748__auto__,feed,c__8275__auto__,size__8276__auto__,b__18484,s__18482__$2,temp__4657__auto__){
return (function() {
var colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto__ = null;
var colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto____0 = (function (){
var statearr_18497 = [null,null,null,null,null,null,null];
(statearr_18497[(0)] = colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto__);

(statearr_18497[(1)] = (1));

return statearr_18497;
});
var colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto____1 = (function (state_18495){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_18495);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e18498){if((e18498 instanceof Object)){
var ex__15119__auto__ = e18498;
var statearr_18499_18517 = state_18495;
(statearr_18499_18517[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18495);

return cljs.core.cst$kw$recur;
} else {
throw e18498;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__18518 = state_18495;
state_18495 = G__18518;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto__ = function(state_18495){
switch(arguments.length){
case 0:
return colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto____0.call(this);
case 1:
return colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto____1.call(this,state_18495);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto____0;
colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto____1;
return colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto__;
})()
;})(i__18483,switch__15115__auto__,c__15748__auto__,feed,c__8275__auto__,size__8276__auto__,b__18484,s__18482__$2,temp__4657__auto__))
})();
var state__15750__auto__ = (function (){var statearr_18500 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_18500[(6)] = c__15748__auto__);

return statearr_18500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(i__18483,c__15748__auto__,feed,c__8275__auto__,size__8276__auto__,b__18484,s__18482__$2,temp__4657__auto__))
);

return c__15748__auto__;
})());

var G__18519 = (i__18483 + (1));
i__18483 = G__18519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18484),colorobo$core$fetch_calendars_$_iter__18481(cljs.core.chunk_rest(s__18482__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18484),null);
}
} else {
var feed = cljs.core.first(s__18482__$2);
return cljs.core.cons((function (){var c__15748__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15748__auto__,feed,s__18482__$2,temp__4657__auto__){
return (function (){
var f__15749__auto__ = (function (){var switch__15115__auto__ = ((function (c__15748__auto__,feed,s__18482__$2,temp__4657__auto__){
return (function (state_18511){
var state_val_18512 = (state_18511[(1)]);
if((state_val_18512 === (1))){
var inst_18501 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("https://api.meetup.com/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feed),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/events")].join('');
var inst_18502 = cljs_http.client.jsonp(inst_18501);
var state_18511__$1 = state_18511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18511__$1,(2),inst_18502);
} else {
if((state_val_18512 === (2))){
var inst_18504 = (state_18511[(2)]);
var inst_18505 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18504);
var inst_18506 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_18505);
var inst_18507 = colorobo.core.aggregate_all_events(inst_18506);
var inst_18508 = colorobo.core.format_event_calendar(inst_18507);
var inst_18509 = colorobo.core.insert_calendar_to_page(inst_18508);
var state_18511__$1 = state_18511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18511__$1,inst_18509);
} else {
return null;
}
}
});})(c__15748__auto__,feed,s__18482__$2,temp__4657__auto__))
;
return ((function (switch__15115__auto__,c__15748__auto__,feed,s__18482__$2,temp__4657__auto__){
return (function() {
var colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto__ = null;
var colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto____0 = (function (){
var statearr_18513 = [null,null,null,null,null,null,null];
(statearr_18513[(0)] = colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto__);

(statearr_18513[(1)] = (1));

return statearr_18513;
});
var colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto____1 = (function (state_18511){
while(true){
var ret_value__15117__auto__ = (function (){try{while(true){
var result__15118__auto__ = switch__15115__auto__(state_18511);
if(cljs.core.keyword_identical_QMARK_(result__15118__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15118__auto__;
}
break;
}
}catch (e18514){if((e18514 instanceof Object)){
var ex__15119__auto__ = e18514;
var statearr_18515_18520 = state_18511;
(statearr_18515_18520[(5)] = ex__15119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18511);

return cljs.core.cst$kw$recur;
} else {
throw e18514;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15117__auto__,cljs.core.cst$kw$recur)){
var G__18521 = state_18511;
state_18511 = G__18521;
continue;
} else {
return ret_value__15117__auto__;
}
break;
}
});
colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto__ = function(state_18511){
switch(arguments.length){
case 0:
return colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto____0.call(this);
case 1:
return colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto____1.call(this,state_18511);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$0 = colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto____0;
colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto__.cljs$core$IFn$_invoke$arity$1 = colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto____1;
return colorobo$core$fetch_calendars_$_iter__18481_$_state_machine__15116__auto__;
})()
;})(switch__15115__auto__,c__15748__auto__,feed,s__18482__$2,temp__4657__auto__))
})();
var state__15750__auto__ = (function (){var statearr_18516 = (f__15749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15749__auto__.cljs$core$IFn$_invoke$arity$0() : f__15749__auto__.call(null));
(statearr_18516[(6)] = c__15748__auto__);

return statearr_18516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15750__auto__);
});})(c__15748__auto__,feed,s__18482__$2,temp__4657__auto__))
);

return c__15748__auto__;
})(),colorobo$core$fetch_calendars_$_iter__18481(cljs.core.rest(s__18482__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8277__auto__(colorobo.core.cal_feeds);
})());
});
colorobo.core.init = (function colorobo$core$init(){
return colorobo.core.fetch_calendars();
});
goog.exportSymbol('colorobo.core.init', colorobo.core.init);
