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
    
    
    const element = document.getElementById("c947e482-6fdd-40b3-be25-76d611c0b7a8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c947e482-6fdd-40b3-be25-76d611c0b7a8' but no matching script tag was found.")
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
                  const docs_json = '{"1d8b50c9-306e-4b4e-b6dc-2e74e612b667":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p2658","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p2659"}}},"roots":[{"type":"object","name":"Row","id":"p2713","attributes":{"children":[{"type":"object","name":"Column","id":"p2712","attributes":{"children":[{"type":"object","name":"Slider","id":"p2711","attributes":{"title":"f/Hz","start":400.0,"end":25600.0,"value":4000.0,"step":400}},{"type":"object","name":"GridPlot","id":"p2670","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p2669"},"children":[[{"type":"object","name":"NumericInput","id":"p2660","attributes":{"width":150,"title":"x_min","value":-0.2,"mode":"float"}},0,0],[{"type":"object","name":"NumericInput","id":"p2661","attributes":{"width":150,"title":"x_max","value":0.2,"mode":"float"}},0,1],[{"type":"object","name":"NumericInput","id":"p2662","attributes":{"width":150,"title":"y_min","value":-0.2,"mode":"float"}},1,0],[{"type":"object","name":"NumericInput","id":"p2663","attributes":{"width":150,"title":"y_max","value":0.2,"mode":"float"}},1,1],[{"type":"object","name":"NumericInput","id":"p2664","attributes":{"width":150,"title":"z","value":-0.3,"mode":"float"}},2,0],[{"type":"object","name":"NumericInput","id":"p2665","attributes":{"width":150,"title":"increment","value":0.01,"mode":"float"}},2,1],[{"type":"object","name":"NumericInput","id":"p2666","attributes":{"disabled":true,"width":150,"title":"nxsteps","value":41}},3,0],[{"type":"object","name":"NumericInput","id":"p2667","attributes":{"disabled":true,"width":150,"title":"nysteps","value":41}},3,1],[{"type":"object","name":"NumericInput","id":"p2668","attributes":{"disabled":true,"width":150,"title":"size","value":1681}},4,0]]}}]}},{"type":"object","name":"Figure","id":"p2672","attributes":{"x_range":{"type":"object","name":"DataRange1d","id":"p2673"},"y_range":{"type":"object","name":"DataRange1d","id":"p2674"},"x_scale":{"type":"object","name":"LinearScale","id":"p2682"},"y_scale":{"type":"object","name":"LinearScale","id":"p2683"},"title":{"type":"object","name":"Title","id":"p2675","attributes":{"text":"Acoular Three Sources"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p2708","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p2698","attributes":{"selected":{"type":"object","name":"Selection","id":"p2699","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p2700"},"data":{"type":"map","entries":[["bfdata",[{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[41,41],"dtype":"float64","order":"little"}]],["x",[-0.2]],["y",[-0.2]],["dw",[0.4]],["dh",[0.4]]]}}},"view":{"type":"object","name":"CDSView","id":"p2709","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p2710"}}},"glyph":{"type":"object","name":"Image","id":"p2702","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"dw":{"type":"field","field":"dw"},"dh":{"type":"field","field":"dh"},"global_alpha":{"type":"value","value":0.9},"image":{"type":"field","field":"bfdata"},"color_mapper":{"type":"object","name":"LinearColorMapper","id":"p2701","attributes":{"palette":["#440154","#440357","#45085B","#460B5E","#470F62","#471265","#471669","#481A6C","#481D6F","#482172","#482374","#472777","#472A79","#462D7C","#46317E","#45347F","#443781","#433A83","#423D84","#424085","#404387","#3F4788","#3E4989","#3D4C89","#3C4E8A","#3A528B","#39548B","#38578C","#365A8C","#355C8C","#345F8D","#33618D","#31648D","#30678D","#2F698D","#2E6C8E","#2D6E8E","#2C718E","#2B738E","#2A768E","#29798E","#287A8E","#277D8E","#267F8E","#25828E","#24848D","#23878D","#22898D","#228B8D","#218E8C","#20908C","#1F938B","#1F958B","#1E988A","#1E9A89","#1E9C89","#1E9F88","#1FA187","#20A485","#21A685","#23A883","#25AB81","#27AD80","#2AB07E","#2CB17D","#30B47A","#35B778","#38B976","#3DBB74","#40BD72","#45BF6F","#49C16D","#4FC369","#55C666","#59C764","#60C960","#64CB5D","#6BCD59","#70CE56","#77D052","#7ED24E","#83D34B","#8BD546","#90D643","#97D83E","#9DD93A","#A5DA35","#ADDC30","#B2DD2C","#BADE27","#BFDF24","#C7E01F","#CDE01D","#D4E11A","#DCE218","#E1E318","#E9E419","#EEE51B","#F6E61F","#FDE724"],"low":70.12265028597311,"high":90.12265028597311}}}},"nonselection_glyph":{"type":"object","name":"Image","id":"p2704","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"dw":{"type":"field","field":"dw"},"dh":{"type":"field","field":"dh"},"global_alpha":{"type":"value","value":0.1},"image":{"type":"field","field":"bfdata"},"color_mapper":{"id":"p2701"}}},"muted_glyph":{"type":"object","name":"Image","id":"p2706","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"dw":{"type":"field","field":"dw"},"dh":{"type":"field","field":"dh"},"global_alpha":{"type":"value","value":0.2},"image":{"type":"field","field":"bfdata"},"color_mapper":{"id":"p2701"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p2681","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p2694","attributes":{"renderers":"auto","sort_by":null}},{"type":"object","name":"ResetTool","id":"p2695"},{"type":"object","name":"PanTool","id":"p2696"},{"type":"object","name":"WheelZoomTool","id":"p2697","attributes":{"renderers":"auto"}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p2689","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p2690","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p2691"},"major_label_policy":{"type":"object","name":"AllLabels","id":"p2692"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p2684","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p2685","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p2686"},"major_label_policy":{"type":"object","name":"AllLabels","id":"p2687"}}}],"center":[{"type":"object","name":"Grid","id":"p2688","attributes":{"axis":{"id":"p2684"}}},{"type":"object","name":"Grid","id":"p2693","attributes":{"dimension":1,"axis":{"id":"p2689"}}}]}}]}}]}}';
                  const render_items = [{"docid":"1d8b50c9-306e-4b4e-b6dc-2e74e612b667","roots":{"p2713":"c947e482-6fdd-40b3-be25-76d611c0b7a8"},"root_ids":["p2713"]}];
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