(function() {
  const fn = function() {
    'use strict';
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
    const element = document.getElementById("a27be405-1d18-4fea-965a-68eaff117f7b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a27be405-1d18-4fea-965a-68eaff117f7b' but no matching script tag was found.")
        }
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.10.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.10.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.10.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.10.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.10.0.min.js"];
      const css_urls = [];
    
      const inline_js = [    function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                  const docs_json = '{"57a49bc9-f836-4c56-91e7-03f97d9c29dd":{"version":"3.10.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1740","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1741"}}},"roots":[{"type":"object","name":"GridPlot","id":"p1752","attributes":{"rows":null,"cols":null,"sizing_mode":"stretch_both","toolbar":{"type":"object","name":"Toolbar","id":"p1751"},"children":[[{"type":"object","name":"NumericInput","id":"p1742","attributes":{"sizing_mode":"stretch_both","title":"x_min","value":-1.0,"mode":"float"}},0,0],[{"type":"object","name":"NumericInput","id":"p1743","attributes":{"sizing_mode":"stretch_both","title":"x_max","value":1.0,"mode":"float"}},0,1],[{"type":"object","name":"NumericInput","id":"p1744","attributes":{"sizing_mode":"stretch_both","title":"y_min","value":-1.0,"mode":"float"}},0,2],[{"type":"object","name":"NumericInput","id":"p1745","attributes":{"sizing_mode":"stretch_both","title":"y_max","value":1.0,"mode":"float"}},0,3],[{"type":"object","name":"NumericInput","id":"p1746","attributes":{"sizing_mode":"stretch_both","title":"z","value":1.0,"mode":"float"}},0,4],[{"type":"object","name":"NumericInput","id":"p1747","attributes":{"sizing_mode":"stretch_both","title":"increment","value":0.1,"mode":"float"}},1,0],[{"type":"object","name":"NumericInput","id":"p1748","attributes":{"disabled":true,"sizing_mode":"stretch_both","title":"nxsteps","value":21}},1,1],[{"type":"object","name":"NumericInput","id":"p1749","attributes":{"disabled":true,"sizing_mode":"stretch_both","title":"nysteps","value":21}},1,2],[{"type":"object","name":"NumericInput","id":"p1750","attributes":{"disabled":true,"sizing_mode":"stretch_both","title":"size","value":441}},1,3]]}}]}}';
                  const render_items = [{"docid":"57a49bc9-f836-4c56-91e7-03f97d9c29dd","roots":{"p1752":"a27be405-1d18-4fea-965a-68eaff117f7b"},"root_ids":["p1752"]}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
    function(Bokeh) {
        }
      ];
    
      function run_inline_js() {
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();