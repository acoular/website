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
    
    
    const element = document.getElementById("ddac4c9c-d62d-4ca0-a9fc-85e5bf9319a2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ddac4c9c-d62d-4ca0-a9fc-85e5bf9319a2' but no matching script tag was found.")
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
                  const docs_json = '{"d2c14cca-4f8b-41a7-b4fe-b5074c773a17":{"version":"3.10.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1902","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1903"}}},"roots":[{"type":"object","name":"Row","id":"p1957","attributes":{"children":[{"type":"object","name":"Column","id":"p1956","attributes":{"children":[{"type":"object","name":"Slider","id":"p1955","attributes":{"title":"f/Hz","start":400.0,"end":25600.0,"value":4000.0,"step":400}},{"type":"object","name":"GridPlot","id":"p1914","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p1913"},"children":[[{"type":"object","name":"NumericInput","id":"p1904","attributes":{"width":150,"title":"x_min","value":-0.2,"mode":"float"}},0,0],[{"type":"object","name":"NumericInput","id":"p1905","attributes":{"width":150,"title":"x_max","value":0.2,"mode":"float"}},0,1],[{"type":"object","name":"NumericInput","id":"p1906","attributes":{"width":150,"title":"y_min","value":-0.2,"mode":"float"}},1,0],[{"type":"object","name":"NumericInput","id":"p1907","attributes":{"width":150,"title":"y_max","value":0.2,"mode":"float"}},1,1],[{"type":"object","name":"NumericInput","id":"p1908","attributes":{"width":150,"title":"z","value":-0.3,"mode":"float"}},2,0],[{"type":"object","name":"NumericInput","id":"p1909","attributes":{"width":150,"title":"increment","value":0.01,"mode":"float"}},2,1],[{"type":"object","name":"NumericInput","id":"p1910","attributes":{"disabled":true,"width":150,"title":"nxsteps","value":41}},3,0],[{"type":"object","name":"NumericInput","id":"p1911","attributes":{"disabled":true,"width":150,"title":"nysteps","value":41}},3,1],[{"type":"object","name":"NumericInput","id":"p1912","attributes":{"disabled":true,"width":150,"title":"size","value":1681}},4,0]]}}]}},{"type":"object","name":"Figure","id":"p1916","attributes":{"x_range":{"type":"object","name":"DataRange1d","id":"p1917"},"y_range":{"type":"object","name":"DataRange1d","id":"p1918"},"x_scale":{"type":"object","name":"LinearScale","id":"p1926"},"y_scale":{"type":"object","name":"LinearScale","id":"p1927"},"title":{"type":"object","name":"Title","id":"p1919","attributes":{"text":"Acoular Three Sources"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1952","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1942","attributes":{"selected":{"type":"object","name":"Selection","id":"p1943","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1944"},"data":{"type":"map","entries":[["bfdata",[{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[41,41],"dtype":"float64","order":"little"}]],["x",[-0.2]],["y",[-0.2]],["dw",[0.4]],["dh",[0.4]]]}}},"view":{"type":"object","name":"CDSView","id":"p1953","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1954"}}},"glyph":{"type":"object","name":"Image","id":"p1946","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"dw":{"type":"field","field":"dw"},"dh":{"type":"field","field":"dh"},"global_alpha":{"type":"value","value":0.9},"image":{"type":"field","field":"bfdata"},"color_mapper":{"type":"object","name":"LinearColorMapper","id":"p1945","attributes":{"palette":["#440154","#440357","#45085B","#460B5E","#470F62","#471265","#471669","#481A6C","#481D6F","#482172","#482374","#472777","#472A79","#462D7C","#46317E","#45347F","#443781","#433A83","#423D84","#424085","#404387","#3F4788","#3E4989","#3D4C89","#3C4E8A","#3A528B","#39548B","#38578C","#365A8C","#355C8C","#345F8D","#33618D","#31648D","#30678D","#2F698D","#2E6C8E","#2D6E8E","#2C718E","#2B738E","#2A768E","#29798E","#287A8E","#277D8E","#267F8E","#25828E","#24848D","#23878D","#22898D","#228B8D","#218E8C","#20908C","#1F938B","#1F958B","#1E988A","#1E9A89","#1E9C89","#1E9F88","#1FA187","#20A485","#21A685","#23A883","#25AB81","#27AD80","#2AB07E","#2CB17D","#30B47A","#35B778","#38B976","#3DBB74","#40BD72","#45BF6F","#49C16D","#4FC369","#55C666","#59C764","#60C960","#64CB5D","#6BCD59","#70CE56","#77D052","#7ED24E","#83D34B","#8BD546","#90D643","#97D83E","#9DD93A","#A5DA35","#ADDC30","#B2DD2C","#BADE27","#BFDF24","#C7E01F","#CDE01D","#D4E11A","#DCE218","#E1E318","#E9E419","#EEE51B","#F6E61F","#FDE724"],"low":70.12265028597311,"high":90.12265028597311}}}},"nonselection_glyph":{"type":"object","name":"Image","id":"p1948","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"dw":{"type":"field","field":"dw"},"dh":{"type":"field","field":"dh"},"global_alpha":{"type":"value","value":0.1},"image":{"type":"field","field":"bfdata"},"color_mapper":{"id":"p1945"}}},"muted_glyph":{"type":"object","name":"Image","id":"p1950","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"dw":{"type":"field","field":"dw"},"dh":{"type":"field","field":"dh"},"global_alpha":{"type":"value","value":0.2},"image":{"type":"field","field":"bfdata"},"color_mapper":{"id":"p1945"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1925","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p1938","attributes":{"renderers":"auto","sort_by":null}},{"type":"object","name":"ResetTool","id":"p1939"},{"type":"object","name":"PanTool","id":"p1940"},{"type":"object","name":"WheelZoomTool","id":"p1941","attributes":{"renderers":"auto"}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1933","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1934","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1935"},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1936"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1928","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1929","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1930"},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1931"}}}],"center":[{"type":"object","name":"Grid","id":"p1932","attributes":{"axis":{"id":"p1928"}}},{"type":"object","name":"Grid","id":"p1937","attributes":{"dimension":1,"axis":{"id":"p1933"}}}]}}]}}]}}';
                  const render_items = [{"docid":"d2c14cca-4f8b-41a7-b4fe-b5074c773a17","roots":{"p1957":"ddac4c9c-d62d-4ca0-a9fc-85e5bf9319a2"},"root_ids":["p1957"]}];
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