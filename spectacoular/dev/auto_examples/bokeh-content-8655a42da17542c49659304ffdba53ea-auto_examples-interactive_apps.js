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
    
    
    const element = document.getElementById("e7ffb414-c615-4f89-8527-f36f70a1f5e2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e7ffb414-c615-4f89-8527-f36f70a1f5e2' but no matching script tag was found.")
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
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.9.1.min.js"];
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
                  const docs_json = '{"6603df32-78fd-4b05-a854-d0f3870f6c65":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p2658","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p2659"}}},"roots":[{"type":"object","name":"Row","id":"p2713","attributes":{"children":[{"type":"object","name":"Column","id":"p2712","attributes":{"children":[{"type":"object","name":"Slider","id":"p2711","attributes":{"title":"f/Hz","start":400.0,"end":25600.0,"value":4000.0,"step":400}},{"type":"object","name":"GridPlot","id":"p2670","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p2669"},"children":[[{"type":"object","name":"NumericInput","id":"p2660","attributes":{"width":150,"title":"x_min","value":-0.2,"mode":"float"}},0,0],[{"type":"object","name":"NumericInput","id":"p2661","attributes":{"width":150,"title":"x_max","value":0.2,"mode":"float"}},0,1],[{"type":"object","name":"NumericInput","id":"p2662","attributes":{"width":150,"title":"y_min","value":-0.2,"mode":"float"}},1,0],[{"type":"object","name":"NumericInput","id":"p2663","attributes":{"width":150,"title":"y_max","value":0.2,"mode":"float"}},1,1],[{"type":"object","name":"NumericInput","id":"p2664","attributes":{"width":150,"title":"z","value":-0.3,"mode":"float"}},2,0],[{"type":"object","name":"NumericInput","id":"p2665","attributes":{"width":150,"title":"increment","value":0.01,"mode":"float"}},2,1],[{"type":"object","name":"NumericInput","id":"p2666","attributes":{"disabled":true,"width":150,"title":"nxsteps","value":41}},3,0],[{"type":"object","name":"NumericInput","id":"p2667","attributes":{"disabled":true,"width":150,"title":"nysteps","value":41}},3,1],[{"type":"object","name":"NumericInput","id":"p2668","attributes":{"disabled":true,"width":150,"title":"size","value":1681}},4,0]]}}]}},{"type":"object","name":"Figure","id":"p2672","attributes":{"x_range":{"type":"object","name":"DataRange1d","id":"p2673"},"y_range":{"type":"object","name":"DataRange1d","id":"p2674"},"x_scale":{"type":"object","name":"LinearScale","id":"p2682"},"y_scale":{"type":"object","name":"LinearScale","id":"p2683"},"title":{"type":"object","name":"Title","id":"p2675","attributes":{"text":"Acoular Three Sources"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p2708","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p2698","attributes":{"selected":{"type":"object","name":"Selection","id":"p2699","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p2700"},"data":{"type":"map","entries":[["bfdata",[{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[41,41],"dtype":"float64","order":"little"}]],["x",[-0.2]],["y",[-0.2]],["dw",[0.4]],["dh",[0.4]]]}}},"view":{"type":"object","name":"CDSView","id":"p2709","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p2710"}}},"glyph":{"type":"object","name":"Image","id":"p2702","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"dw":{"type":"field","field":"dw"},"dh":{"type":"field","field":"dh"},"global_alpha":{"type":"value","value":0.9},"image":{"type":"field","field":"bfdata"},"color_mapper":{"type":"object","name":"LinearColorMapper","id":"p2701","attributes":{"palette":["#440154","#440357","#45085B","#460B5E","#470F62","#471265","#471669","#481A6C","#481D6F","#482172","#482374","#472777","#472A79","#462D7C","#46317E","#45347F","#443781","#433A83","#423D84","#424085","#404387","#3F4788","#3E4989","#3D4C89","#3C4E8A","#3A528B","#39548B","#38578C","#365A8C","#355C8C","#345F8D","#33618D","#31648D","#30678D","#2F698D","#2E6C8E","#2D6E8E","#2C718E","#2B738E","#2A768E","#29798E","#287A8E","#277D8E","#267F8E","#25828E","#24848D","#23878D","#22898D","#228B8D","#218E8C","#20908C","#1F938B","#1F958B","#1E988A","#1E9A89","#1E9C89","#1E9F88","#1FA187","#20A485","#21A685","#23A883","#25AB81","#27AD80","#2AB07E","#2CB17D","#30B47A","#35B778","#38B976","#3DBB74","#40BD72","#45BF6F","#49C16D","#4FC369","#55C666","#59C764","#60C960","#64CB5D","#6BCD59","#70CE56","#77D052","#7ED24E","#83D34B","#8BD546","#90D643","#97D83E","#9DD93A","#A5DA35","#ADDC30","#B2DD2C","#BADE27","#BFDF24","#C7E01F","#CDE01D","#D4E11A","#DCE218","#E1E318","#E9E419","#EEE51B","#F6E61F","#FDE724"],"low":70.12265028597311,"high":90.12265028597311}}}},"nonselection_glyph":{"type":"object","name":"Image","id":"p2704","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"dw":{"type":"field","field":"dw"},"dh":{"type":"field","field":"dh"},"global_alpha":{"type":"value","value":0.1},"image":{"type":"field","field":"bfdata"},"color_mapper":{"id":"p2701"}}},"muted_glyph":{"type":"object","name":"Image","id":"p2706","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"dw":{"type":"field","field":"dw"},"dh":{"type":"field","field":"dh"},"global_alpha":{"type":"value","value":0.2},"image":{"type":"field","field":"bfdata"},"color_mapper":{"id":"p2701"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p2681","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p2694","attributes":{"renderers":"auto","sort_by":null}},{"type":"object","name":"ResetTool","id":"p2695"},{"type":"object","name":"PanTool","id":"p2696"},{"type":"object","name":"WheelZoomTool","id":"p2697","attributes":{"renderers":"auto"}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p2689","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p2690","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p2691"},"major_label_policy":{"type":"object","name":"AllLabels","id":"p2692"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p2684","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p2685","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p2686"},"major_label_policy":{"type":"object","name":"AllLabels","id":"p2687"}}}],"center":[{"type":"object","name":"Grid","id":"p2688","attributes":{"axis":{"id":"p2684"}}},{"type":"object","name":"Grid","id":"p2693","attributes":{"dimension":1,"axis":{"id":"p2689"}}}]}}]}}]}}';
                  const render_items = [{"docid":"6603df32-78fd-4b05-a854-d0f3870f6c65","roots":{"p2713":"e7ffb414-c615-4f89-8527-f36f70a1f5e2"},"root_ids":["p2713"]}];
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