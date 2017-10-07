(ns colorobo.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [ajax.core :refer [GET POST]]
   [goog.i18n.DateTimeFormat]
   [goog.dom :as dom]
   [goog.events :as events]

   [cljs-http.client :as http]
   [cljs.core.async :as async]

   [clojure.set :as set]
   [clojure.string :as string]
   [dommy.core :refer-macros [sel sel1]]
   [hipo.core :as hipo]))

(enable-console-print!)

(def cal-feeds
  ["BoulderIsForRobots"
   "Women-in-Robotics-Boulder-Denver"
   "Denver-Is-For-Robots"
   "SHARC-Greater-Denver-Area-Robotics-Club"])

(def events (atom []))
(def calendar-element (hipo/create [:div]))

(defn aggregate-all-events [cal-events]
  (swap! events concat cal-events))

;;; Borrowed from reagent-utils:
;;; https://github.com/reagent-project/reagent-utils/blob/master/src/reagent/format.cljs
(defn date-format [date fmt & [tz]]
  (let [formatter (goog.i18n.DateTimeFormat. fmt)]
    (if tz
      (.format formatter date tz)
      (.format formatter date))))

(defn format-timestamp [ts]
  (let [dt (js/Date. ts)]
    [:div
     [:div.row
      [:div.col
       [:span (date-format dt goog.i18n.DateTimeFormat.Format.MEDIUM_DATE)]]]
     [:div.row
      [:div.col
       [:span (date-format dt goog.i18n.DateTimeFormat.Format.SHORT_TIME)]]]]))

(defn format-event [ev]
  [:div.calendar-event.border
   [:div.row
    [:div.col-8
     [:div.row
      [:div.col.ml-2.text-left
       [:a.font-weight-bold {:href (:link ev)}
        (:name ev)]]]
     [:div.row
      [:div.col.ml-2.text-left
       [:span (:name (:group ev))]]]]
    [:div.col
     [:div.col.text-right.mr-2
       [:span (format-timestamp (:time ev))]]]]])

(defn format-event-calendar [events]
  (hipo/reconciliate! calendar-element
                      [:div#community-events.border
                       (for [ev (sort-by :time events)]
                         ^{:hipo/key (:id ev)}
                         (format-event ev))])
  calendar-element)

(defn insert-calendar-to-page [cal-html]
  (if-not (sel1 :#community-events)
    (.appendChild (sel1 :#community-calendar) cal-html)))

(defn fetch-calendars []
  (reset! events [])
  (doall
   (for [feed cal-feeds]
     (go (-> (str "http://api.meetup.com/" feed "/events")
             http/jsonp
             async/<!
             :body
             :data
             aggregate-all-events
             format-event-calendar
             insert-calendar-to-page)))))

(defn ^:export init []
  (fetch-calendars))
