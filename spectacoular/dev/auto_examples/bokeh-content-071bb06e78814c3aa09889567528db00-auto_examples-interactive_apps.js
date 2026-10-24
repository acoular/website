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
    
    
    const element = document.getElementById("f27853c3-907d-4d57-851f-7b74f6b29750");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f27853c3-907d-4d57-851f-7b74f6b29750' but no matching script tag was found.")
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
                  const docs_json = '{"3c5d04a7-4e16-4b74-8769-132d90862d66":{"version":"3.10.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1902","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1903"}}},"roots":[{"type":"object","name":"Row","id":"p1957","attributes":{"children":[{"type":"object","name":"Column","id":"p1956","attributes":{"children":[{"type":"object","name":"Slider","id":"p1955","attributes":{"title":"f/Hz","start":400.0,"end":25600.0,"value":4000.0,"step":400}},{"type":"object","name":"GridPlot","id":"p1914","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p1913"},"children":[[{"type":"object","name":"NumericInput","id":"p1904","attributes":{"width":150,"title":"x_min","value":-0.2,"mode":"float"}},0,0],[{"type":"object","name":"NumericInput","id":"p1905","attributes":{"width":150,"title":"x_max","value":0.2,"mode":"float"}},0,1],[{"type":"object","name":"NumericInput","id":"p1906","attributes":{"width":150,"title":"y_min","value":-0.2,"mode":"float"}},1,0],[{"type":"object","name":"NumericInput","id":"p1907","attributes":{"width":150,"title":"y_max","value":0.2,"mode":"float"}},1,1],[{"type":"object","name":"NumericInput","id":"p1908","attributes":{"width":150,"title":"z","value":-0.3,"mode":"float"}},2,0],[{"type":"object","name":"NumericInput","id":"p1909","attributes":{"width":150,"title":"increment","value":0.01,"mode":"float"}},2,1],[{"type":"object","name":"NumericInput","id":"p1910","attributes":{"disabled":true,"width":150,"title":"nxsteps","value":41}},3,0],[{"type":"object","name":"NumericInput","id":"p1911","attributes":{"disabled":true,"width":150,"title":"nysteps","value":41}},3,1],[{"type":"object","name":"NumericInput","id":"p1912","attributes":{"disabled":true,"width":150,"title":"size","value":1681}},4,0]]}}]}},{"type":"object","name":"Figure","id":"p1916","attributes":{"x_range":{"type":"object","name":"DataRange1d","id":"p1917"},"y_range":{"type":"object","name":"DataRange1d","id":"p1918"},"x_scale":{"type":"object","name":"LinearScale","id":"p1926"},"y_scale":{"type":"object","name":"LinearScale","id":"p1927"},"title":{"type":"object","name":"Title","id":"p1919","attributes":{"text":"Acoular Three Sources"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1952","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1942","attributes":{"selected":{"type":"object","name":"Selection","id":"p1943","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1944"},"data":{"type":"map","entries":[["bfdata",[{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[41,41],"dtype":"float64","order":"little"}]],["x",[-0.2]],["y",[-0.2]],["dw",[0.4]],["dh",[0.4]]]}}},"view":{"type":"object","name":"CDSView","id":"p1953","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1954"}}},"glyph":{"type":"object","name":"Image","id":"p1946","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"dw":{"type":"field","field":"dw"},"dh":{"type":"field","field":"dh"},"global_alpha":{"type":"value","value":0.9},"image":{"type":"field","field":"bfdata"},"color_mapper":{"type":"object","name":"LinearColorMapper","id":"p1945","attributes":{"palette":["#440154","#440357","#45085B","#460B5E","#470F62","#471265","#471669","#481A6C","#481D6F","#482172","#482374","#472777","#472A79","#462D7C","#46317E","#45347F","#443781","#433A83","#423D84","#424085","#404387","#3F4788","#3E4989","#3D4C89","#3C4E8A","#3A528B","#39548B","#38578C","#365A8C","#355C8C","#345F8D","#33618D","#31648D","#30678D","#2F698D","#2E6C8E","#2D6E8E","#2C718E","#2B738E","#2A768E","#29798E","#287A8E","#277D8E","#267F8E","#25828E","#24848D","#23878D","#22898D","#228B8D","#218E8C","#20908C","#1F938B","#1F958B","#1E988A","#1E9A89","#1E9C89","#1E9F88","#1FA187","#20A485","#21A685","#23A883","#25AB81","#27AD80","#2AB07E","#2CB17D","#30B47A","#35B778","#38B976","#3DBB74","#40BD72","#45BF6F","#49C16D","#4FC369","#55C666","#59C764","#60C960","#64CB5D","#6BCD59","#70CE56","#77D052","#7ED24E","#83D34B","#8BD546","#90D643","#97D83E","#9DD93A","#A5DA35","#ADDC30","#B2DD2C","#BADE27","#BFDF24","#C7E01F","#CDE01D","#D4E11A","#DCE218","#E1E318","#E9E419","#EEE51B","#F6E61F","#FDE724"],"low":70.12265028597311,"high":90.12265028597311}}}},"nonselection_glyph":{"type":"object","name":"Image","id":"p1948","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"dw":{"type":"field","field":"dw"},"dh":{"type":"field","field":"dh"},"global_alpha":{"type":"value","value":0.1},"image":{"type":"field","field":"bfdata"},"color_mapper":{"id":"p1945"}}},"muted_glyph":{"type":"object","name":"Image","id":"p1950","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"dw":{"type":"field","field":"dw"},"dh":{"type":"field","field":"dh"},"global_alpha":{"type":"value","value":0.2},"image":{"type":"field","field":"bfdata"},"color_mapper":{"id":"p1945"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1925","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p1938","attributes":{"renderers":"auto","sort_by":null}},{"type":"object","name":"ResetTool","id":"p1939"},{"type":"object","name":"PanTool","id":"p1940"},{"type":"object","name":"WheelZoomTool","id":"p1941","attributes":{"renderers":"auto"}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1933","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1934","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1935"},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1936"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1928","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1929","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1930"},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1931"}}}],"center":[{"type":"object","name":"Grid","id":"p1932","attributes":{"axis":{"id":"p1928"}}},{"type":"object","name":"Grid","id":"p1937","attributes":{"dimension":1,"axis":{"id":"p1933"}}}]}}]}}]}}';
                  const render_items = [{"docid":"3c5d04a7-4e16-4b74-8769-132d90862d66","roots":{"p1957":"f27853c3-907d-4d57-851f-7b74f6b29750"},"root_ids":["p1957"]}];
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