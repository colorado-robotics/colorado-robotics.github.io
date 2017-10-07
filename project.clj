(defproject colorado-robotics "0.0.1"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.671"]
                 [cljs-ajax "0.7.2"]
                 [cljs-http "0.1.43"]
                 [org.clojure/core.incubator "0.1.4"]
                 [hipo "0.5.2"]
                 [prismatic/dommy "1.1.0"]]
  :plugins [[lein-figwheel "0.5.11"]
            [lein-cljsbuild "1.1.6"]
            [lein-ancient "0.6.10"]]

  :figwheel {:css-dirs ["_site/css"]}
  :cljsbuild {:builds [{:id "prod"
                        :source-paths ["cljs"]
                        :figwheel {:on-jsload "colorobo.core/init"}
                        :compiler {:output-to "main.js"
                                   :output-dir "js"
                                   :asset-path "/js"
                                   :main "colorobo.core"
                                   :parallel-build true
                                   :optimizations :advanced
                                   :source-map false
                                   :pretty-print false
                                   }}
                       {:id "dev"
                        :source-paths ["cljs"]
                        :figwheel {:on-jsload "colorobo.core/init"}
                        :compiler {:output-to "main.js"
                                   :output-dir "target/js"
                                   :asset-path "/target/js"
                                   :main "colorobo.core"
                                   :parallel-build true
                                   :optimizations :none
                                   }}]})
