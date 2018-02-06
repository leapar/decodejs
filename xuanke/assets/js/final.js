function FastClick(a) {
  "use strict";
  var c, b = this;
  if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = a, !a || !a.nodeType) {
    throw new TypeError("Layer must be a document node")
  };
  this.onClick = function() {
    return FastClick.prototype.onClick.apply(b, arguments)
  }, this.onMouse = function() {
    return FastClick.prototype.onMouse.apply(b, arguments)
  }, this.onTouchStart = function() {
    return FastClick.prototype.onTouchStart.apply(b, arguments)
  }, this.onTouchMove = function() {
    return FastClick.prototype.onTouchMove.apply(b, arguments)
  }, this.onTouchEnd = function() {
    return FastClick.prototype.onTouchEnd.apply(b, arguments)
  }, this.onTouchCancel = function() {
    return FastClick.prototype.onTouchCancel.apply(b, arguments)
  }, FastClick.notNeeded(a) || (this.deviceIsAndroid && (a.addEventListener("mouseover", this.onMouse, !0), a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0)), a.addEventListener("click", this.onClick, !0), a.addEventListener("touchstart", this.onTouchStart, !1), a.addEventListener("touchmove", this.onTouchMove, !1), a.addEventListener("touchend", this.onTouchEnd, !1), a.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(e, c, b) {
    var d = Node.prototype.removeEventListener;
    "click" === e ? d.call(a, e, c.hijacked || c, b) : d.call(a, e, c, b)
  }, a.addEventListener = function(e, c, b) {
    var d = Node.prototype.addEventListener;
    "click" === e ? d.call(a, e, c.hijacked || (c.hijacked = function(a) {
      a.propagationStopped || c(a)
    }), b) : d.call(a, e, c, b)
  }), "function" == typeof a.onclick && (c = a.onclick, a.addEventListener("click", function(a) {
    c(a)
  }, !1), a.onclick = null))
}
window.Modernizr = function(i, E, x) {
    function p(a) {
      I.cssText = a
    }

    function z(a, b) {
      return p(s.join(a + ";") + (b || ""))
    }

    function B(a, b) {
      return typeof a === b
    }

    function a(a, b) {
      return !!~("" + a).indexOf(b)
    }

    function C(b, e) {
      for (var c in b) {
        var d = b[c];
        if (!a(d, "-") && I[d] !== x) {
          return "pfx" == e ? d : !0
        }
      };
      return !1
    }

    function G(b, e, c) {
      for (var d in b) {
        var a = e[b[d]];
        if (a !== x) {
          return c === !1 ? b[d] : B(a, "function") ? a.bind(c || e) : a
        }
      };
      return !1
    }

    function e(a, e, c) {
      var b = a.charAt(0).toUpperCase() + a.slice(1),
        d = (a + " " + j.join(b + " ") + b).split(" ");
      return B(e, "string") || B(e, "undefined") ? C(d, e) : (d = (a + " " + D.join(b + " ") + b).split(" "), G(d, e, c))
    }

    function t() {
      A.input = function(d) {
        for (var a = 0, e = d.length; e > a; a++) {
          b[d[a]] = !!(d[a] in c)
        };
        return b.list && (b.list = !(!E.createElement("datalist") || !i.HTMLDataListElement)), b
      }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), A.inputtypes = function(b) {
        for (var d, e, f, a = 0, g = b.length; g > a; a++) {
          c.setAttribute("type", e = b[a]), d = "text" !== c.type, d && (c.value = J, c.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && c.style.WebkitAppearance !== x ? (m.appendChild(c), f = E.defaultView, d = f.getComputedStyle && "textfield" !== f.getComputedStyle(c, null).WebkitAppearance && 0 !== c.offsetHeight, m.removeChild(c)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? c.checkValidity && c.checkValidity() === !1 : c.value != J)), w[b[a]] = !!d
        };
        return w
      }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var g, n, k = "2.7.1",
      A = {},
      v = !0,
      m = E.documentElement,
      H = "modernizr",
      K = E.createElement(H),
      I = K.style,
      c = E.createElement("input"),
      J = ":)",
      f = {}.toString,
      s = " -webkit- -moz- -o- -ms- ".split(" "),
      F = "Webkit Moz O ms",
      j = F.split(" "),
      D = F.toLowerCase().split(" "),
      u = {
        svg: "http://www.w3.org/2000/svg"
      },
      y = {},
      w = {},
      b = {},
      h = [],
      d = h.slice,
      q = function(d, g, e, h) {
        var i, a, j, k, b = E.createElement("div"),
          f = E.body,
          c = f || E.createElement("body");
        if (parseInt(e, 10)) {
          for (; e--;) {
            j = E.createElement("div"), j.id = h ? h[e] : H + (e + 1), b.appendChild(j)
          }
        };
        return i = ["&#173;", "<style id=\"s", H, "\">", d, "</style>"].join(""), b.id = H, (f ? b : c).innerHTML += i, c.appendChild(b), f || (c.style.background = "", c.style.overflow = "hidden", k = m.style.overflow, m.style.overflow = "hidden", m.appendChild(c)), a = g(b, d), f ? b.parentNode.removeChild(b) : (c.parentNode.removeChild(c), m.style.overflow = k), !!a
      },
      o = function() {
        function a(c, d) {
          d = d || E.createElement(b[c] || "div"), c = "on" + c;
          var a = c in d;
          return a || (d.setAttribute || (d = E.createElement("div")), d.setAttribute && d.removeAttribute && (d.setAttribute(c, ""), a = B(d[c], "function"), B(d[c], "undefined") || (d[c] = x), d.removeAttribute(c))), d = null, a
        }
        var b = {
          select: "input",
          change: "input",
          submit: "form",
          reset: "form",
          error: "img",
          load: "img",
          abort: "img"
        };
        return a
      }(),
      r = {}.hasOwnProperty;
    n = B(r, "undefined") || B(r.call, "undefined") ? function(a, b) {
      return b in a && B(a.constructor.prototype[b], "undefined")
    } : function(a, b) {
      return r.call(a, b)
    }, Function.prototype.bind || (Function.prototype.bind = function(a) {
      var e = this;
      if ("function" != typeof e) {
        throw new TypeError
      };
      var c = d.call(arguments, 1),
        b = function() {
          if (this instanceof b) {
            var g = function() {};
            g.prototype = e.prototype;
            var h = new g,
              f = e.apply(h, c.concat(d.call(arguments)));
            return Object(f) === f ? f : h
          };
          return e.apply(a, c.concat(d.call(arguments)))
        };
      return b
    }), y.flexbox = function() {
      return e("flexWrap")
    }, y.canvas = function() {
      var a = E.createElement("canvas");
      return !(!a.getContext || !a.getContext("2d"))
    }, y.canvastext = function() {
      return !(!A.canvas || !B(E.createElement("canvas").getContext("2d").fillText, "function"))
    }, y.webgl = function() {
      return !!i.WebGLRenderingContext
    }, y.touch = function() {
      var a;
      return "ontouchstart" in i || i.DocumentTouch && E instanceof DocumentTouch ? a = !0 : q(["@media (", s.join("touch-enabled),("), H, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(b) {
        a = 9 === b.offsetTop
      }), a
    }, y.geolocation = function() {
      return "geolocation" in navigator
    }, y.postmessage = function() {
      return !!i.postMessage
    }, y.websqldatabase = function() {
      return !!i.openDatabase
    }, y.indexedDB = function() {
      return !!e("indexedDB", i)
    }, y.hashchange = function() {
      return o("hashchange", i) && (E.documentMode === x || E.documentMode > 7)
    }, y.history = function() {
      return !(!i.history || !history.pushState)
    }, y.draganddrop = function() {
      var a = E.createElement("div");
      return "draggable" in a || "ondragstart" in a && "ondrop" in a
    }, y.websockets = function() {
      return "WebSocket" in i || "MozWebSocket" in i
    }, y.rgba = function() {
      return p("background-color:rgba(150,255,150,.5)"), a(I.backgroundColor, "rgba")
    }, y.hsla = function() {
      return p("background-color:hsla(120,40%,100%,.5)"), a(I.backgroundColor, "rgba") || a(I.backgroundColor, "hsla")
    }, y.multiplebgs = function() {
      return p("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(I.background)
    }, y.backgroundsize = function() {
      return e("backgroundSize")
    }, y.borderimage = function() {
      return e("borderImage")
    }, y.borderradius = function() {
      return e("borderRadius")
    }, y.boxshadow = function() {
      return e("boxShadow")
    }, y.textshadow = function() {
      return "" === E.createElement("div").style.textShadow
    }, y.opacity = function() {
      return z("opacity:.55"), /^0.55$/.test(I.opacity)
    }, y.cssanimations = function() {
      return e("animationName")
    }, y.csscolumns = function() {
      return e("columnCount")
    }, y.cssgradients = function() {
      var b = "background-image:",
        d = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        c = "linear-gradient(left top,#9f9, white);";
      return p((b + "-webkit- ".split(" ").join(d + b) + s.join(c + b)).slice(0, -b.length)), a(I.backgroundImage, "gradient")
    }, y.cssreflections = function() {
      return e("boxReflect")
    }, y.csstransforms = function() {
      return !!e("transform")
    }, y.csstransforms3d = function() {
      var a = !!e("perspective");
      return a && "webkitPerspective" in m.style && q("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(c, b) {
        a = 9 === c.offsetLeft && 3 === c.offsetHeight
      }), a
    }, y.csstransitions = function() {
      return e("transition")
    }, y.fontface = function() {
      var a;
      return q("@font-face {font-family:\"font\";src:url(\"https://\")}", function(d, c) {
        var e = E.getElementById("smodernizr"),
          f = e.sheet || e.styleSheet,
          b = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
        a = /src/i.test(b) && 0 === b.indexOf(c.split(" ")[0])
      }), a
    }, y.generatedcontent = function() {
      var a;
      return q(["#", H, "{font:0/0 a}#", H, ":after{content:\"", J, "\";visibility:hidden;font:3px/1 a}"].join(""), function(b) {
        a = b.offsetHeight >= 3
      }), a
    }, y.video = function() {
      var a = E.createElement("video"),
        b = !1;
      try {
        (b = !!a.canPlayType) && (b = new Boolean(b), b.ogg = a.canPlayType("video/ogg; codecs=\"theora\"").replace(/^no$/, ""), b.h264 = a.canPlayType("video/mp4; codecs=\"avc1.42E01E\"").replace(/^no$/, ""), b.webm = a.canPlayType("video/webm; codecs=\"vp8, vorbis\"").replace(/^no$/, ""))
      } catch (p) {};
      return b
    }, y.audio = function() {
      var a = E.createElement("audio"),
        b = !1;
      try {
        (b = !!a.canPlayType) && (b = new Boolean(b), b.ogg = a.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""), b.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), b.wav = a.canPlayType("audio/wav; codecs=\"1\"").replace(/^no$/, ""), b.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
      } catch (p) {};
      return b
    }, y.localstorage = function() {
      try {
        return localStorage.setItem(H, H), localStorage.removeItem(H), !0
      } catch (i) {
        return !1
      }
    }, y.sessionstorage = function() {
      try {
        return sessionStorage.setItem(H, H), sessionStorage.removeItem(H), !0
      } catch (i) {
        return !1
      }
    }, y.webworkers = function() {
      return !!i.Worker
    }, y.applicationcache = function() {
      return !!i.applicationCache
    }, y.svg = function() {
      return !!E.createElementNS && !!E.createElementNS(u.svg, "svg").createSVGRect
    }, y.inlinesvg = function() {
      var a = E.createElement("div");
      return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == u.svg
    }, y.smil = function() {
      return !!E.createElementNS && /SVGAnimate/.test(f.call(E.createElementNS(u.svg, "animate")))
    }, y.svgclippaths = function() {
      return !!E.createElementNS && /SVGClipPath/.test(f.call(E.createElementNS(u.svg, "clipPath")))
    };
    for (var l in y) {
      n(y, l) && (g = l.toLowerCase(), A[g] = y[l](), h.push((A[g] ? "" : "no-") + g))
    };
    return A.input || t(), A.addTest = function(a, c) {
        if ("object" == typeof a) {
          for (var b in a) {
            n(a, b) && A.addTest(b, a[b])
          }
        } else {
          if (a = a.toLowerCase(), A[a] !== x) {
            return A
          };
          c = "function" == typeof c ? c() : c, "undefined" != typeof v && v && (m.className += " " + (c ? "" : "no-") + a), A[a] = c
        };
        return A
      }, p(""), K = c = null,
      function(d, p) {
        function k(a, d) {
          var c = a.createElement("p"),
            b = a.getElementsByTagName("head")[0] || a.documentElement;
          return c.innerHTML = "x<style>" + d + "</style>", b.insertBefore(c.lastChild, b.firstChild)
        }

        function h() {
          var a = s.elements;
          return "string" == typeof a ? a.split(" ") : a
        }

        function l(a) {
          var b = r[a[j]];
          return b || (b = {}, f++, a[j] = f, r[f] = b), b
        }

        function n(a, c, b) {
          if (c || (c = p), i) {
            return c.createElement(a)
          };
          b || (b = l(c));
          var d;
          return d = b.cache[a] ? b.cache[a].cloneNode() : m.test(a) ? (b.cache[a] = b.createElem(a)).cloneNode() : b.createElem(a), !d.canHaveChildren || e.test(a) || d.tagUrn ? d : b.frag.appendChild(d)
        }

        function a(b, c) {
          if (b || (b = p), i) {
            return b.createDocumentFragment()
          };
          c = c || l(b);
          for (var d = c.frag.cloneNode(), a = 0, e = h(), f = e.length; f > a; a++) {
            d.createElement(e[a])
          };
          return d
        }

        function o(a, b) {
          b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
            return s.shivMethods ? n(c, a, b) : b.createElem(c)
          }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + h().join().replace(/[\w\-]+/g, function(a) {
            return b.createElem(a), b.frag.createElement(a), "c(\"" + a + "\")"
          }) + ");return n}")(s, b.frag)
        }

        function q(a) {
          a || (a = p);
          var c = l(a);
          return !s.shivCSS || b || c.hasCSS || (c.hasCSS = !!k(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), i || o(a, c), a
        }
        var b, i, c = "3.7.0",
          g = d.html5 || {},
          e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          j = "_html5shiv",
          f = 0,
          r = {};
        ! function() {
          try {
            var a = p.createElement("a");
            a.innerHTML = "<xyz></xyz>", b = "hidden" in a, i = 1 == a.childNodes.length || function() {
              p.createElement("a");
              var a = p.createDocumentFragment();
              return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
            }()
          } catch (k) {
            b = !0, i = !0
          }
        }();
        var s = {
          elements: g.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
          version: c,
          shivCSS: g.shivCSS !== !1,
          supportsUnknownElements: i,
          shivMethods: g.shivMethods !== !1,
          type: "default",
          shivDocument: q,
          createElement: n,
          createDocumentFragment: a
        };
        d.html5 = s, q(p)
      }(this, E), A._version = k, A._prefixes = s, A._domPrefixes = D, A._cssomPrefixes = j, A.hasEvent = o, A.testProp = function(a) {
        return C([a])
      }, A.testAllProps = e, A.testStyles = q, A.prefixed = function(a, c, b) {
        return c ? e(a, c, b) : e(a, "pfx")
      }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (v ? " js " + h.join(" ") : ""), A
  }(this, this.document),
  function(f, v, p) {
    function k(a) {
      return "[object Function]" == i.call(a)
    }

    function q(a) {
      return "string" == typeof a
    }

    function s() {}

    function a(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function t() {
      var a = y.shift();
      B = 1, a ? a.t ? r(function() {
        ("c" == a.t ? j.injectCss : j.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
      }, 0) : (a(), t()) : B = 0
    }

    function x(e, k, h, l, m, n, c) {
      function i(c) {
        if (!f && a(d.readyState) && (p.r = f = 1, !B && t(), d.onload = d.onreadystatechange = null, c)) {
          "img" != e && r(function() {
            A.removeChild(d)
          }, 50);
          for (var b in u[k]) {
            u[k].hasOwnProperty(b) && u[k][b].onload()
          }
        }
      }
      var c = c || j.errorTimeout,
        d = v.createElement(e),
        f = 0,
        g = 0,
        p = {
          t: h,
          s: k,
          e: m,
          a: n,
          x: c
        };
      1 === u[k] && (g = 1, u[k] = []), "object" == e ? d.data = k : (d.src = k, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function() {
        i.call(this, g)
      }, y.splice(l, 0, p), "img" != e && (g || 2 === u[k] ? (A.insertBefore(d, b ? null : o), r(i, c)) : u[k].push(d))
    }

    function c(a, f, c, b, e) {
      return B = 0, f = f || "j", q(a) ? x("c" == f ? l : d, a, f, this.i++, c, b, e) : (y.splice(this.i++, 0, a), 1 == y.length && t()), this
    }

    function m() {
      var a = j;
      return a.loader = {
        load: c,
        i: 0
      }, a
    }
    var e, j, h = v.documentElement,
      r = f.setTimeout,
      o = v.getElementsByTagName("script")[0],
      i = {}.toString,
      y = [],
      B = 0,
      z = "MozAppearance" in h.style,
      b = z && !!v.createRange().compareNode,
      A = b ? h : o.parentNode,
      h = f.opera && "[object Opera]" == i.call(f.opera),
      h = !!v.attachEvent && !h,
      d = z ? "object" : h ? "script" : "img",
      l = h ? "script" : d,
      w = Array.isArray || function(a) {
        return "[object Array]" == i.call(a)
      },
      g = [],
      u = {},
      n = {
        timeout: function(a, b) {
          return b.length && (a.timeout = b[0]), a
        }
      };
    j = function(d) {
      function f(b) {
        var h, d, c, b = b.split("!"),
          e = g.length,
          f = b.pop(),
          a = b.length,
          f = {
            url: f,
            origUrl: f,
            prefixes: b
          };
        for (d = 0; a > d; d++) {
          c = b[d].split("="), (h = n[c.shift()]) && (f = h(f, c))
        };
        for (d = 0; e > d; d++) {
          f = g[d](f)
        };
        return f
      }

      function a(c, d, e, a, g) {
        var h = f(c),
          b = h.autoCallback;
        h.url.split(".").pop().split("?").shift(), h.bypass || (d && (d = k(d) ? d : d[c] || d[a] || d[c.split("/").pop().split("?")[0]]), h.instead ? h.instead(c, d, e, a, g) : (u[h.url] ? h.noexec = !0 : u[h.url] = 1, e.load(h.url, h.forceCSS || !h.forceJS && "css" == h.url.split(".").pop().split("?").shift() ? "c" : p, h.noexec, h.attrs, h.timeout), (k(d) || k(b)) && e.load(function() {
          m(), d && d(h.origUrl, g, a), b && b(h.origUrl, g, a), u[h.url] = 2
        })))
      }

      function e(d, j) {
        function h(d, g) {
          if (d) {
            if (q(d)) {
              g || (c = function() {
                var a = [].slice.call(arguments);
                f.apply(this, a), e()
              }), a(d, c, j, 0, b)
            } else {
              if (Object(d) === d) {
                for (l in i = function() {
                    var b, a = 0;
                    for (b in d) {
                      d.hasOwnProperty(b) && a++
                    };
                    return a
                  }(), d) {
                  d.hasOwnProperty(l) && (!g && !--i && (k(c) ? c = function() {
                    var a = [].slice.call(arguments);
                    f.apply(this, a), e()
                  } : c[l] = function(a) {
                    return function() {
                      var b = [].slice.call(arguments);
                      a && a.apply(this, b), e()
                    }
                  }(f[l])), a(d[l], c, j, l, b))
                }
              }
            }
          } else {
            !g && e()
          }
        }
        var i, l, b = !!d.test,
          g = d.load || d.both,
          c = d.callback || s,
          f = c,
          e = d.complete || s;
        h(b ? d.yep : d.nope, !!g), g && h(g)
      }
      var h, b, c = this.yepnope.loader;
      if (q(d)) {
        a(d, 0, c, 0)
      } else {
        if (w(d)) {
          for (h = 0; h < d.length; h++) {
            b = d[h], q(b) ? a(b, 0, c, 0) : w(b) ? j(b) : Object(b) === b && e(b, c)
          }
        } else {
          Object(d) === d && e(d, c)
        }
      }
    }, j.addPrefix = function(a, b) {
      n[a] = b
    }, j.addFilter = function(a) {
      g.push(a)
    }, j.errorTimeout = 1e4, null == v.readyState && v.addEventListener && (v.readyState = "loading", v.addEventListener("DOMContentLoaded", e = function() {
      v.removeEventListener("DOMContentLoaded", e, 0), v.readyState = "complete"
    }, 0)), f.yepnope = m(), f.yepnope.executeStack = t, f.yepnope.injectJs = function(d, h, f, i, k, b) {
      var g, c, e = v.createElement("script"),
        i = i || j.errorTimeout;
      e.src = d;
      for (c in f) {
        e.setAttribute(c, f[c])
      };
      h = b ? t : h || s, e.onreadystatechange = e.onload = function() {
        !g && a(e.readyState) && (g = 1, h(), e.onload = e.onreadystatechange = null)
      }, r(function() {
        g || (g = 1, h(1))
      }, i), k ? e.onload() : o.parentNode.insertBefore(e, o)
    }, f.yepnope.injectCss = function(c, e, d, f, a, g) {
      var b, f = v.createElement("link"),
        e = g ? t : e || s;
      f.href = c, f.rel = "stylesheet", f.type = "text/css";
      for (b in d) {
        f.setAttribute(b, d[b])
      };
      a || (o.parentNode.insertBefore(f, o), r(e, 0))
    }
  }(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
  }, ! function(c, i) {
    function e(a) {
      return g.call(typeof a == i ? a : h, a, 1)
    }

    function d(a, c, b) {
      return function() {
        var d = this.supr;
        this.supr = b[j][a];
        var e = c.apply(this, arguments);
        return this.supr = d, e
      }
    }

    function f(b, c, e) {
      for (var f in c) {
        c.hasOwnProperty(f) && (b[f] = typeof c[f] == i && typeof e[j][f] == i && a.test(c[f]) ? d(f, c[f], e) : c[f])
      }
    }

    function g(d, m) {
      var k = this,
        n = new h,
        a = typeof d == i,
        l = a ? d : this,
        c = a ? {} : d,
        g = function() {
          m || b(d) && k.apply(this, arguments), l.apply(this, arguments)
        };
      if (g.methods = function(a) {
          return f(n, a, k), g[j] = n, this
        }, g.methods.call(g, c).constructor = this, g.extend = arguments.callee, g[j].implement = g.statics = function(a) {
          return f(this, a, k), this
        }, a) {
        for (var e in this.prototype) {
          e.match(/supr|implement/) || (g[j][e] = this.prototype[e])
        }
      };
      return g
    }
    var a = /xyz/.test(function() {
        xyz
      }) ? /\bsupr\b/ : /.*/,
      h = function() {},
      j = "prototype",
      b = function(a) {
        return typeof a === i
      };
    "undefined" != typeof module && module.exports ? module.exports = e : c.klass = e
  }(this, "function"),
  function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
      if (!a.document) {
        throw new Error("jQuery requires a window with a document")
      };
      return b(a)
    } : b(a)
  }("undefined" != typeof window ? window : this, function(F, cv) {
    function bI(a) {
      var c = a.length,
        b = bR.type(a);
      return "function" === b || bR.isWindow(a) ? !1 : 1 === a.nodeType && c ? !0 : "array" === b || 0 === c || "number" == typeof c && c > 0 && c - 1 in a
    }

    function be(a, c, b) {
      if (bR.isFunction(c)) {
        return bR.grep(a, function(a, d) {
          return !!c.call(a, d, a) !== b
        })
      };
      if (c.nodeType) {
        return bR.grep(a, function(a) {
          return a === c !== b
        })
      };
      if ("string" == typeof c) {
        if (ba.test(c)) {
          return bR.filter(c, a, b)
        };
        c = bR.filter(c, a)
      };
      return bR.grep(a, function(a) {
        return bR.inArray(a, c) >= 0 !== b
      })
    }

    function bP(a, b) {
      do {
        a = a[b]
      } while (a && 1 !== a.nodeType);;
      return a
    }

    function ci(a) {
      var b = p[a] = {};
      return bR.each(a.match(cQ) || [], function(a, c) {
        b[c] = !0
      }), b
    }

    function g() {
      bY.addEventListener ? (bY.removeEventListener("DOMContentLoaded", cp, !1), F.removeEventListener("load", cp, !1)) : (bY.detachEvent("onreadystatechange", cp), F.detachEvent("onload", cp))
    }

    function cp() {
      (bY.addEventListener || "load" === event.type || "complete" === bY.readyState) && (g(), bR.ready())
    }

    function cC(a, d, c) {
      if (void(0) === c && 1 === a.nodeType) {
        var b = "data-" + d.replace(I, "-$1").toLowerCase();
        if (c = a.getAttribute(b), "string" == typeof c) {
          try {
            c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : cy.test(c) ? bR.parseJSON(c) : c
          } catch (bP) {};
          bR.data(a, d, c)
        } else {
          c = void(0)
        }
      };
      return c
    }

    function t(a) {
      var b;
      for (b in a) {
        if (("data" !== b || !bR.isEmptyObject(a[b])) && "toJSON" !== b) {
          return !1
        }
      };
      return !0
    }

    function bw(c, i, e, d) {
      if (bR.acceptData(c)) {
        var f, g, a = bR.expando,
          h = c.nodeType,
          j = h ? bR.cache : c,
          b = h ? c[a] : c[a] && a;
        if (b && j[b] && (d || j[b].data) || void(0) !== e || "string" != typeof i) {
          return b || (b = h ? c[a] = cD.pop() || bR.guid++ : a), j[b] || (j[b] = h ? {} : {
            toJSON: bR.noop
          }), ("object" == typeof i || "function" == typeof i) && (d ? j[b] = bR.extend(j[b], i) : j[b].data = bR.extend(j[b].data, i)), g = j[b], d || (g.data || (g.data = {}), g = g.data), void(0) !== e && (g[bR.camelCase(i)] = e), "string" == typeof i ? (f = g[i], null == f && (f = g[bR.camelCase(i)])) : f = g, f
        }
      }
    }

    function z(b, h, d) {
      if (bR.acceptData(b)) {
        var c, e, f = b.nodeType,
          a = f ? bR.cache : b,
          g = f ? b[bR.expando] : bR.expando;
        if (a[g]) {
          if (h && (c = d ? a[g] : a[g].data)) {
            bR.isArray(h) ? h = h.concat(bR.map(h, bR.camelCase)) : h in c ? h = [h] : (h = bR.camelCase(h), h = h in c ? [h] : h.split(" ")), e = h.length;
            for (; e--;) {
              delete c[h[e]]
            };
            if (d ? !t(c) : !bR.isEmptyObject(c)) {
              return
            }
          };
          (d || (delete a[g].data, t(a[g]))) && (f ? bR.cleanData([b], !0) : bK.deleteExpando || a != a.window ? delete a[g] : a[g] = null)
        }
      }
    }

    function Y() {
      return !0
    }

    function M() {
      return !1
    }

    function bW() {
      try {
        return bY.activeElement
      } catch (F) {}
    }

    function bC(a) {
      var c = P.split("|"),
        b = a.createDocumentFragment();
      if (b.createElement) {
        for (; c.length;) {
          b.createElement(c.pop())
        }
      };
      return b
    }

    function S(a, f) {
      var c, b, d = 0,
        e = typeof a.getElementsByTagName !== bs ? a.getElementsByTagName(f || "*") : typeof a.querySelectorAll !== bs ? a.querySelectorAll(f || "*") : void(0);
      if (!e) {
        for (e = [], c = a.childNodes || a; null != (b = c[d]); d++) {
          !f || bR.nodeName(b, f) ? e.push(b) : bR.merge(e, S(b, f))
        }
      };
      return void(0) === f || f && bR.nodeName(a, f) ? bR.merge([a], e) : e
    }

    function cI(a) {
      j.test(a.type) && (a.defaultChecked = a.checked)
    }

    function cZ(a, b) {
      return bR.nodeName(a, "table") && bR.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function cO(a) {
      return a.type = (null !== bR.find.attr(a, "type")) + "/" + a.type, a
    }

    function n(a) {
      var b = dc.exec(a.type);
      return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function cU(a, d) {
      for (var c, b = 0; null != (c = a[b]); b++) {
        bR._data(c, "globalEval", !d || bR._data(d[b], "globalEval"))
      }
    }

    function u(b, h) {
      if (1 === h.nodeType && bR.hasData(b)) {
        var d, c, e, f = bR._data(b),
          a = bR._data(h, f),
          g = f.events;
        if (g) {
          delete a.handle, a.events = {};
          for (d in g) {
            for (c = 0, e = g[d].length; e > c; c++) {
              bR.event.add(h, d, g[d][c])
            }
          }
        };
        a.data && (a.data = bR.extend({}, a.data))
      }
    }

    function bq(a, e) {
      var c, b, d;
      if (1 === e.nodeType) {
        if (c = e.nodeName.toLowerCase(), !bK.noCloneEvent && e[bR.expando]) {
          d = bR._data(e);
          for (b in d.events) {
            bR.removeEvent(e, b, d.handle)
          };
          e.removeAttribute(bR.expando)
        };
        "script" === c && e.text !== a.text ? (cO(e).text = a.text, n(e)) : "object" === c ? (e.parentNode && (e.outerHTML = a.outerHTML), bK.html5Clone && a.innerHTML && !bR.trim(e.innerHTML) && (e.innerHTML = a.innerHTML)) : "input" === c && j.test(a.type) ? (e.defaultChecked = e.checked = a.checked, e.value !== a.value && (e.value = a.value)) : "option" === c ? e.defaultSelected = e.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (e.defaultValue = a.defaultValue)
      }
    }

    function cw(e, b) {
      var a, c = bR(b.createElement(e)).appendTo(b.body),
        d = F.getDefaultComputedStyle && (a = F.getDefaultComputedStyle(c[0])) ? a.display : bR.css(c[0], "display");
      return c.detach(), d
    }

    function G(a) {
      var c = bY,
        b = di[a];
      return b || (b = cw(a, c), "none" !== b && b || (cf = (cf || bR("<iframe frameborder='0' width='0' height='0'/>")).appendTo(c.documentElement), c = (cf[0].contentWindow || cf[0].contentDocument).document, c.write(), c.close(), b = cw(a, c), cf.detach()), di[a] = b), b
    }

    function cq(a, b) {
      return {
        get: function() {
          var c = a();
          if (null != c) {
            return c ? void(delete this).get : (this.get = b).apply(this, arguments)
          }
        }
      }
    }

    function bx(a, e) {
      if (e in a) {
        return e
      };
      for (var c = e.charAt(0).toUpperCase() + e.slice(1), b = e, d = bc.length; d--;) {
        if (e = bc[d] + c, e in a) {
          return e
        }
      };
      return b
    }

    function bJ(b, h) {
      for (var d, c, e, f = [], a = 0, g = b.length; g > a; a++) {
        c = b[a], c.style && (f[a] = bR._data(c, "olddisplay"), d = c.style.display, h ? (f[a] || "none" !== d || (c.style.display = ""), "" === c.style.display && bL(c) && (f[a] = bR._data(c, "olddisplay", G(c.nodeName)))) : (e = bL(c), (d && "none" !== d || !e) && bR._data(c, "olddisplay", e ? d : bR.css(c, "display"))))
      };
      for (a = 0; g > a; a++) {
        c = b[a], c.style && (h && "none" !== c.style.display && "" !== c.style.display || (c.style.display = h ? f[a] || "" : "none"))
      };
      return b
    }

    function bD(a, d, c) {
      var b = cG.exec(d);
      return b ? Math.max(0, b[1] - (c || 0)) + (b[2] || "px") : d
    }

    function h(b, g, d, c, e) {
      for (var f = d === (c ? "border" : "content") ? 4 : "width" === g ? 1 : 0, a = 0; 4 > f; f += 2) {
        "margin" === d && (a += bR.css(b, d + bz[f], !0, e)), c ? ("content" === d && (a -= bR.css(b, "padding" + bz[f], !0, e)), "margin" !== d && (a -= bR.css(b, "border" + bz[f] + "Width", !0, e))) : (a += bR.css(b, "padding" + bz[f], !0, e), "padding" !== d && (a += bR.css(b, "border" + bz[f] + "Width", !0, e)))
      };
      return a
    }

    function A(b, g, d) {
      var c = !0,
        e = "width" === g ? b.offsetWidth : b.offsetHeight,
        f = K(b),
        a = bK.boxSizing && "border-box" === bR.css(b, "boxSizing", !1, f);
      if (0 >= e || null == e) {
        if (e = cA(b, g, f), (0 > e || null == e) && (e = b.style[g]), bi.test(e)) {
          return e
        };
        c = a && (bK.boxSizingReliable() || e === b.style[g]), e = parseFloat(e) || 0
      };
      return e + h(b, g, d || (a ? "border" : "content"), c, f) + "px"
    }

    function o(a, e, c, b, d) {
      return new o.prototype.init(a, e, c, b, d)
    }

    function bf() {
      return setTimeout(function() {
        Q = void(0)
      }), Q = bR.now()
    }

    function Z(a, e) {
      var c, b = {
          height: a
        },
        d = 0;
      for (e = e ? 1 : 0; 4 > d; d += 2 - e) {
        c = bz[d], b["margin" + c] = b["padding" + c] = a
      };
      return e && (b.opacity = b.width = a), b
    }

    function bk(b, g, d) {
      for (var c, e = (cS[g] || []).concat(cS["*"]), f = 0, a = e.length; a > f; f++) {
        if (c = e[f].call(d, g, b)) {
          return c
        }
      }
    }

    function N(d, o, j) {
      var g, k, m, a, n, p, b, h, c = this,
        f = {},
        e = d.style,
        l = d.nodeType && bL(d),
        i = bR._data(d, "fxshow");
      j.queue || (n = bR._queueHooks(d, "fx"), null == n.unqueued && (n.unqueued = 0, p = n.empty.fire, n.empty.fire = function() {
        n.unqueued || p()
      }), n.unqueued++, c.always(function() {
        c.always(function() {
          n.unqueued--, bR.queue(d, "fx").length || n.empty.fire()
        })
      })), 1 === d.nodeType && ("height" in o || "width" in o) && (j.overflow = [e.overflow, e.overflowX, e.overflowY], b = bR.css(d, "display"), h = "none" === b ? bR._data(d, "olddisplay") || G(d.nodeName) : b, "inline" === h && "none" === bR.css(d, "float") && (bK.inlineBlockNeedsLayout && "inline" !== G(d.nodeName) ? e.zoom = 1 : e.display = "inline-block")), j.overflow && (e.overflow = "hidden", bK.shrinkWrapBlocks() || c.always(function() {
        e.overflow = j.overflow[0], e.overflowX = j.overflow[1], e.overflowY = j.overflow[2]
      }));
      for (g in o) {
        if (k = o[g], bG.exec(k)) {
          if (delete o[g], m = m || "toggle" === k, k === (l ? "hide" : "show")) {
            if ("show" !== k || !i || void(0) === i[g]) {
              continue
            };
            l = !0
          };
          f[g] = i && i[g] || bR.style(d, g)
        } else {
          b = void(0)
        }
      };
      if (bR.isEmptyObject(f)) {
        "inline" === ("none" === b ? G(d.nodeName) : b) && (e.display = b)
      } else {
        i ? "hidden" in i && (l = i.hidden) : i = bR._data(d, "fxshow", {}), m && (i.hidden = !l), l ? bR(d).show() : c.done(function() {
          bR(d).hide()
        }), c.done(function() {
          var a;
          bR._removeData(d, "fxshow");
          for (a in f) {
            bR.style(d, a, f[a])
          }
        });
        for (g in f) {
          a = bk(l ? i[g] : 0, g, c), g in i || (i[g] = a.start, l && (a.end = a.start, a.start = "width" === g || "height" === g ? 1 : 0))
        }
      }
    }

    function bX(b, g) {
      var d, c, e, f, a;
      for (d in b) {
        if (c = bR.camelCase(d), e = g[c], f = b[d], bR.isArray(f) && (e = f[1], f = b[d] = f[0]), d !== c && (b[c] = f, delete b[d]), a = bR.cssHooks[c], a && "expand" in a) {
          f = a.expand(f), delete b[c];
          for (d in f) {
            d in b || (b[d] = f[d], g[d] = e)
          }
        } else {
          g[c] = e
        }
      }
    }

    function df(c, j, f) {
      var d, g, h = 0,
        a = dd.length,
        i = bR.Deferred().always(function() {
          delete k.elem
        }),
        k = function() {
          if (g) {
            return !1
          };
          for (var h = Q || bf(), e = Math.max(0, b.startTime + b.duration - h), d = e / b.duration || 0, f = 1 - d, a = 0, j = b.tweens.length; j > a; a++) {
            b.tweens[a].run(f)
          };
          return i.notifyWith(c, [b, f, e]), 1 > f && j ? e : (i.resolveWith(c, [b]), !1)
        },
        b = i.promise({
          elem: c,
          props: bR.extend({}, j),
          opts: bR.extend(!0, {
            specialEasing: {}
          }, f),
          originalProperties: j,
          originalOptions: f,
          startTime: Q || bf(),
          duration: f.duration,
          tweens: [],
          createTween: function(e, d) {
            var a = bR.Tween(c, b.opts, e, d, b.opts.specialEasing[e] || b.opts.easing);
            return b.tweens.push(a), a
          },
          stop: function(e) {
            var d = 0,
              a = e ? b.tweens.length : 0;
            if (g) {
              return this
            };
            for (g = !0; a > d; d++) {
              b.tweens[d].run(1)
            };
            return e ? i.resolveWith(c, [b, e]) : i.rejectWith(c, [b, e]), this
          }
        }),
        e = b.props;
      for (bX(e, b.opts.specialEasing); a > h; h++) {
        if (d = dd[h].call(b, c, e, b.opts)) {
          return d
        }
      };
      return bR.map(e, bk, b), bR.isFunction(b.opts.start) && b.opts.start.call(c, b), bR.fx.timer(bR.extend(k, {
        elem: c,
        anim: b,
        queue: b.opts.queue
      })), b.progress(b.opts.progress).done(b.opts.done, b.opts.complete).fail(b.opts.fail).always(b.opts.always)
    }

    function d(a) {
      return function(f, c) {
        "string" != typeof f && (c = f, f = "*");
        var b, d = 0,
          e = f.toLowerCase().match(cQ) || [];
        if (bR.isFunction(c)) {
          for (; b = e[d++];) {
            "+" === b.charAt(0) ? (b = b.slice(1) || "*", (a[b] = a[b] || []).unshift(c)) : (a[b] = a[b] || []).push(c)
          }
        }
      }
    }

    function bQ(b, g, d, c) {
      function e(h) {
        var i;
        return f[h] = !0, bR.each(b[h] || [], function(h, j) {
          var b = j(g, d, c);
          return "string" != typeof b || a || f[b] ? a ? !(i = b) : void(0) : (g.dataTypes.unshift(b), e(b), !1)
        }), i
      }
      var f = {},
        a = b === co;
      return e(g.dataTypes[0]) || !f["*"] && e("*")
    }

    function $(a, e) {
      var c, b, d = bR.ajaxSettings.flatOptions || {};
      for (b in e) {
        void(0) !== e[b] && ((d[b] ? a : c || (c = {}))[b] = e[b])
      };
      return c && bR.extend(!0, a, c), a
    }

    function cc(b, h, d) {
      for (var c, e, f, a, g = b.contents, i = b.dataTypes;
        "*" === i[0];) {
        i.shift(), void(0) === e && (e = b.mimeType || h.getResponseHeader("Content-Type"))
      };
      if (e) {
        for (a in g) {
          if (g[a] && g[a].test(e)) {
            i.unshift(a);
            break
          }
        }
      };
      if (i[0] in d) {
        f = i[0]
      } else {
        for (a in d) {
          if (!i[0] || b.converters[a + " " + i[0]]) {
            f = a;
            break
          };
          c || (c = a)
        };
        f = f || c
      };
      return f ? (f !== i[0] && i.unshift(f), d[f]) : void(0)
    }

    function cj(c, j, f, d) {
      var g, h, a, i, k, b = {},
        e = c.dataTypes.slice();
      if (e[1]) {
        for (a in c.converters) {
          b[a.toLowerCase()] = c.converters[a]
        }
      };
      for (h = e.shift(); h;) {
        if (c.responseFields[h] && (f[c.responseFields[h]] = j), !k && d && c.dataFilter && (j = c.dataFilter(j, c.dataType)), k = h, h = e.shift()) {
          if ("*" === h) {
            h = k
          } else {
            if ("*" !== k && k !== h) {
              if (a = b[k + " " + h] || b["* " + h], !a) {
                for (g in b) {
                  if (i = g.split(" "), i[1] === h && (a = b[k + " " + i[0]] || b["* " + i[0]])) {
                    a === !0 ? a = b[g] : b[g] !== !0 && (h = i[0], e.unshift(i[1]));
                    break
                  }
                }
              };
              if (a !== !0) {
                if (a && c.throws) {
                  j = a(j)
                } else {
                  try {
                    j = a(j)
                  } catch (z) {
                    return {
                      state: "parsererror",
                      error: a ? z : "No conversion from " + k + " to " + h
                    }
                  }
                }
              }
            }
          }
        }
      };
      return {
        state: "success",
        data: j
      }
    }

    function cP(a, e, c, b) {
      var d;
      if (bR.isArray(e)) {
        bR.each(e, function(e, d) {
          c || de.test(a) ? b(a, d) : cP(a + "[" + ("object" == typeof d ? e : "") + "]", d, c, b)
        })
      } else {
        if (c || "object" !== bR.type(e)) {
          b(a, e)
        } else {
          for (d in e) {
            cP(a + "[" + d + "]", e[d], c, b)
          }
        }
      }
    }

    function cV() {
      try {
        return new F.XMLHttpRequest
      } catch (cv) {}
    }

    function cJ() {
      try {
        return new F.ActiveXObject("Microsoft.XMLHTTP")
      } catch (cv) {}
    }

    function da(a) {
      return bR.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var cD = [],
      T = cD.slice,
      br = cD.concat,
      bl = cD.push,
      cd = cD.indexOf,
      dg = {},
      H = dg.toString,
      cx = dg.hasOwnProperty,
      bK = {},
      bg = "1.11.1",
      bR = function(a, b) {
        return new bR.fn.init(a, b)
      },
      ck = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      i = /^-ms-/,
      cr = /-([\da-z])/gi,
      cE = function(a, b) {
        return b.toUpperCase()
      };
    bR.fn = bR.prototype = {
      jquery: bg,
      constructor: bR,
      selector: "",
      length: 0,
      toArray: function() {
        return T.call(this)
      },
      get: function(a) {
        return null != a ? 0 > a ? this[a + this.length] : this[a] : T.call(this)
      },
      pushStack: function(a) {
        var b = bR.merge(this.constructor(), a);
        return b.prevObject = this, b.context = this.context, b
      },
      each: function(a, b) {
        return bR.each(this, a, b)
      },
      map: function(a) {
        return this.pushStack(bR.map(this, function(c, b) {
          return a.call(c, b, c)
        }))
      },
      slice: function() {
        return this.pushStack(T.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(a) {
        var c = this.length,
          b = +a + (0 > a ? c : 0);
        return this.pushStack(b >= 0 && c > b ? [this[b]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor(null)
      },
      push: bl,
      sort: cD.sort,
      splice: cD.splice
    }, bR.extend = bR.fn.extend = function() {
      var c, i, e, d, f, g, a = arguments[0] || {},
        h = 1,
        j = arguments.length,
        b = !1;
      for ("boolean" == typeof a && (b = a, a = arguments[h] || {}, h++), "object" == typeof a || bR.isFunction(a) || (a = {}), h === j && (a = this, h--); j > h; h++) {
        if (null != (f = arguments[h])) {
          for (d in f) {
            c = a[d], e = f[d], a !== e && (b && e && (bR.isPlainObject(e) || (i = bR.isArray(e))) ? (i ? (i = !1, g = c && bR.isArray(c) ? c : []) : g = c && bR.isPlainObject(c) ? c : {}, a[d] = bR.extend(b, g, e)) : void(0) !== e && (a[d] = e))
          }
        }
      };
      return a
    }, bR.extend({
      expando: "jQuery" + (bg + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(a) {
        throw new Error(a)
      },
      noop: function() {},
      isFunction: function(a) {
        return "function" === bR.type(a)
      },
      isArray: Array.isArray || function(a) {
        return "array" === bR.type(a)
      },
      isWindow: function(a) {
        return null != a && a == a.window
      },
      isNumeric: function(a) {
        return !bR.isArray(a) && a - parseFloat(a) >= 0
      },
      isEmptyObject: function(a) {
        var b;
        for (b in a) {
          return !1
        };
        return !0
      },
      isPlainObject: function(a) {
        var b;
        if (!a || "object" !== bR.type(a) || a.nodeType || bR.isWindow(a)) {
          return !1
        };
        try {
          if (a.constructor && !cx.call(a, "constructor") && !cx.call(a.constructor.prototype, "isPrototypeOf")) {
            return !1
          }
        } catch (bI) {
          return !1
        };
        if (bK.ownLast) {
          for (b in a) {
            return cx.call(a, b)
          }
        };
        for (b in a) {;
        };
        return void(0) === b || cx.call(a, b)
      },
      type: function(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? dg[H.call(a)] || "object" : typeof a
      },
      globalEval: function(a) {
        a && bR.trim(a) && (F.execScript || function(a) {
          F.eval.call(F, a)
        })(a)
      },
      camelCase: function(a) {
        return a.replace(i, "ms-").replace(cr, cE)
      },
      nodeName: function(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
      },
      each: function(b, g, c) {
        var d, e = 0,
          a = b.length,
          f = bI(b);
        if (c) {
          if (f) {
            for (; a > e && (d = g.apply(b[e], c), d !== !1); e++) {;
            }
          } else {
            for (e in b) {
              if (d = g.apply(b[e], c), d === !1) {
                break
              }
            }
          }
        } else {
          if (f) {
            for (; a > e && (d = g.call(b[e], e, b[e]), d !== !1); e++) {;
            }
          } else {
            for (e in b) {
              if (d = g.call(b[e], e, b[e]), d === !1) {
                break
              }
            }
          }
        };
        return b
      },
      trim: function(a) {
        return null == a ? "" : (a + "").replace(ck, "")
      },
      makeArray: function(a, c) {
        var b = c || [];
        return null != a && (bI(Object(a)) ? bR.merge(b, "string" == typeof a ? [a] : a) : bl.call(b, a)), b
      },
      inArray: function(a, d, c) {
        var b;
        if (d) {
          if (cd) {
            return cd.call(d, a, c)
          };
          for (b = d.length, c = c ? 0 > c ? Math.max(0, b + c) : c : 0; b > c; c++) {
            if (c in d && d[c] === a) {
              return c
            }
          }
        };
        return -1
      },
      merge: function(a, e) {
        for (var c = +e.length, b = 0, d = a.length; c > b;) {
          a[d++] = e[b++]
        };
        if (c !== c) {
          for (; void(0) !== e[b];) {
            a[d++] = e[b++]
          }
        };
        return a.length = d, a
      },
      grep: function(b, h, d) {
        for (var c, e = [], f = 0, a = b.length, g = !d; a > f; f++) {
          c = !h(b[f], f), c !== g && e.push(b[f])
        };
        return e
      },
      map: function(b, g, c) {
        var d, e = 0,
          a = b.length,
          f = bI(b),
          h = [];
        if (f) {
          for (; a > e; e++) {
            d = g(b[e], e, c), null != d && h.push(d)
          }
        } else {
          for (e in b) {
            d = g(b[e], e, c), null != d && h.push(d)
          }
        };
        return br.apply([], h)
      },
      guid: 1,
      proxy: function(a, e) {
        var c, b, d;
        return "string" == typeof e && (d = a[e], e = a, a = d), bR.isFunction(a) ? (c = T.call(arguments, 2), b = function() {
          return a.apply(e || this, c.concat(T.call(arguments)))
        }, b.guid = a.guid = a.guid || bR.guid++, b) : void(0)
      },
      now: function() {
        return +new Date
      },
      support: bK
    }), bR.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
      dg["[object " + b + "]"] = b.toLowerCase()
    });
    var v = function(p) {
      function bg(e, r, k, i) {
        var l, o, a, p, s, c, d, f, m, j;
        if ((r ? r.ownerDocument || r : S) !== g && n(r), r = r || g, k = k || [], !e || "string" != typeof e) {
          return k
        };
        if (1 !== (p = r.nodeType) && 9 !== p) {
          return []
        };
        if (z && !i) {
          if (l = by.exec(e)) {
            if (a = l[1]) {
              if (9 === p) {
                if (o = r.getElementById(a), !o || !o.parentNode) {
                  return k
                };
                if (o.id === a) {
                  return k.push(o), k
                }
              } else {
                if (r.ownerDocument && (o = r.ownerDocument.getElementById(a)) && bz(r, o) && o.id === a) {
                  return k.push(o), k
                }
              }
            } else {
              if (l[2]) {
                return bB.apply(k, r.getElementsByTagName(e)), k
              };
              if ((a = l[3]) && bt.getElementsByClassName && r.getElementsByClassName) {
                return bB.apply(k, r.getElementsByClassName(a)), k
              }
            }
          };
          if (bt.qsa && (!E || !E.test(e))) {
            if (f = d = b, m = r, j = 9 === p && e, 1 === p && "object" !== r.nodeName.toLowerCase()) {
              for (c = q(e), (d = r.getAttribute("id")) ? f = d.replace(h, "\_$_455d[530]") : r.setAttribute("id", f), f = "[id='" + f + "'] ", s = c.length; s--;) {
                c[s] = f + y(c[s])
              };
              m = br.test(e) && I(r.parentNode) || r, j = c.join(",")
            };
            if (j) {
              try {
                return bB.apply(k, m.querySelectorAll(j)), k
              } catch (v) {} finally {
                d || r.removeAttribute("id")
              }
            }
          }
        };
        return J(e.replace(bl, "$1"), r, k, i)
      }

      function O() {
        function a(d, c) {
          return b.push(d + " ") > j.cacheLength && delete a[b.shift()], a[d + " "] = c
        }
        var b = [];
        return a
      }

      function B(a) {
        return a[b] = !0, a
      }

      function R(a) {
        var b = g.createElement("div");
        try {
          return !!a(b)
        } catch (O) {
          return !1
        } finally {
          b.parentNode && b.parentNode.removeChild(b), b = null
        }
      }

      function ba(a, d) {
        for (var c = a.split("|"), b = a.length; b--;) {
          j.attrHandle[c[b]] = d
        }
      }

      function c(a, d) {
        var c = d && a,
          b = c && 1 === a.nodeType && 1 === d.nodeType && (~d.sourceIndex || bk) - (~a.sourceIndex || bk);
        if (b) {
          return b
        };
        if (c) {
          for (; c = c.nextSibling;) {
            if (c === d) {
              return -1
            }
          }
        };
        return a ? 1 : -1
      }

      function bd(a) {
        return function(c) {
          var b = c.nodeName.toLowerCase();
          return "input" === b && c.type === a
        }
      }

      function bj(a) {
        return function(c) {
          var b = c.nodeName.toLowerCase();
          return ("input" === b || "button" === b) && c.type === a
        }
      }

      function i(a) {
        return B(function(b) {
          return b = +b, B(function(e, d) {
            for (var f, g = a([], e.length, b), c = g.length; c--;) {
              e[f = g[c]] && (e[f] = !(d[f] = e[f]))
            }
          })
        })
      }

      function I(a) {
        return a && typeof a.getElementsByTagName !== bx && a
      }

      function m() {}

      function y(a) {
        for (var d = 0, c = a.length, b = ""; c > d; d++) {
          b += a[d].value
        };
        return b
      }

      function s(c, h, e) {
        var d = h.dir,
          f = e && "parentNode" === d,
          g = Y++;
        return h.first ? function(e, a, b) {
          for (; e = e[d];) {
            if (1 === e.nodeType || f) {
              return c(e, a, b)
            }
          }
        } : function(k, i, e) {
          var j, l, h = [$, g];
          if (e) {
            for (; k = k[d];) {
              if ((1 === k.nodeType || f) && c(k, i, e)) {
                return !0
              }
            }
          } else {
            for (; k = k[d];) {
              if (1 === k.nodeType || f) {
                if (l = k[b] || (k[b] = {}), (j = l[d]) && j[0] === $ && j[1] === g) {
                  return h[2] = j[2]
                };
                if (l[d] = h, h[2] = c(k, i, e)) {
                  return !0
                }
              }
            }
          }
        }
      }

      function U(a) {
        return a.length > 1 ? function(e, c, b) {
          for (var d = a.length; d--;) {
            if (!a[d](e, c, b)) {
              return !1
            }
          };
          return !0
        } : a[0]
      }

      function L(a, c, b) {
        for (var d = 0, e = c.length; e > d; d++) {
          bg(a, c[d], b)
        };
        return b
      }

      function v(c, i, e, d, f) {
        for (var g, a = [], h = 0, j = c.length, b = null != i; j > h; h++) {
          (g = c[h]) && (!e || e(g, d, f)) && (a.push(g), b && i.push(h))
        };
        return a
      }

      function bm(c, g, d, e, f, a) {
        return e && !e[b] && (e = bm(e)), f && !f[b] && (f = bm(f, a)), B(function(k, a, n, o) {
          var b, l, h, j = [],
            i = [],
            m = a.length,
            p = k || L(g || "*", n.nodeType ? [n] : n, []),
            r = !c || !k && g ? p : v(p, j, c, n, o),
            q = d ? f || (k ? c : m || e) ? [] : a : r;
          if (d && d(r, q, n, o), e) {
            for (b = v(q, i), e(b, [], n, o), l = b.length; l--;) {
              (h = b[l]) && (q[i[l]] = !(r[i[l]] = h))
            }
          };
          if (k) {
            if (f || c) {
              if (f) {
                for (b = [], l = q.length; l--;) {
                  (h = q[l]) && b.push(r[l] = h)
                };
                f(null, q = [], b, o)
              };
              for (l = q.length; l--;) {
                (h = q[l]) && (b = f ? bi.call(k, h) : j[l]) > -1 && (k[b] = !(a[b] = h))
              }
            }
          } else {
            q = v(q === a ? q.splice(m, q.length) : q), f ? f(null, a, q, o) : bB.apply(a, q)
          }
        })
      }

      function bw(d) {
        for (var l, g, e, h = d.length, i = j.relative[d[0].type], a = i || j.relative[" "], k = i ? 1 : 0, m = s(function(a) {
            return a === l
          }, a, !0), c = s(function(a) {
            return bi.call(l, a) > -1
          }, a, !0), f = [function(a, d, b) {
            return !i && (b || d !== P) || ((l = d).nodeType ? m(a, d, b) : c(a, d, b))
          }]; h > k; k++) {
          if (g = j.relative[d[k].type]) {
            f = [s(U(f), g)]
          } else {
            if (g = j.filter[d[k].type].apply(null, d[k].matches), g[b]) {
              for (e = ++k; h > e && !j.relative[d[e].type]; e++) {;
              };
              return bm(k > 1 && U(f), k > 1 && y(d.slice(0, k - 1).concat({
                value: " " === d[k - 2].type ? "*" : ""
              })).replace(bl, "$1"), g, e > k && bw(d.slice(k, e)), h > e && bw(d = d.slice(e)), h > e && y(d))
            };
            f.push(g)
          }
        };
        return U(f)
      }

      function bp(c, d) {
        var e = d.length > 0,
          f = c.length > 0,
          b = function(n, b, r, s, i) {
            var o, k, m, l = 0,
              q = "0",
              p = n && [],
              t = [],
              x = P,
              u = n || f && j.find.TAG("*", i),
              h = $ += null == x ? 1 : Math.random() || 0.1,
              w = u.length;
            for (i && (P = b !== g && b); q !== w && null != (o = u[q]); q++) {
              if (f && o) {
                for (k = 0; m = c[k++];) {
                  if (m(o, b, r)) {
                    s.push(o);
                    break
                  }
                };
                i && ($ = h)
              };
              e && ((o = !m && o) && l--, n && p.push(o))
            };
            if (l += q, e && q !== l) {
              for (k = 0; m = d[k++];) {
                m(p, t, b, r)
              };
              if (n) {
                if (l > 0) {
                  for (; q--;) {
                    p[q] || t[q] || (t[q] = F.call(s))
                  }
                };
                t = v(t)
              };
              bB.apply(s, t), i && !n && t.length > 0 && l + d.length > 1 && bg.uniqueSort(s)
            };
            return i && ($ = h, P = x), p
          };
        return e ? B(b) : b
      }
      var f, bt, j, G, bh, q, be, J, P, M, d, n, g, C, z, E, t, V, bz, b = "sizzle" + -new Date,
        S = p.document,
        $ = 0,
        Y = 0,
        bb = O(),
        bq = O(),
        bu = O(),
        bn = function(a, b) {
          return a === b && (d = !0), 0
        },
        bx = "undefined",
        bk = 1 << 31,
        w = {}.hasOwnProperty,
        H = [],
        F = H.pop,
        Z = H.push,
        bB = H.push,
        r = H.slice,
        bi = H.indexOf || function(a) {
          for (var c = 0, b = this.length; b > c; c++) {
            if (this[c] === a) {
              return c
            }
          };
          return -1
        },
        Q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        D = "[\x20\t\r\n\f]",
        T = "(?:\\\\.|[\\w-]|[^\x00-\xa0])+",
        bc = T.replace("w", "w#"),
        e = "\[" + D + "*(" + T + ")(?:" + D + "*([*^$|!~]?=)" + D + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + bc + "))|)" + D + "*\]",
        bf = ":(" + T + ")(?:\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\]]|" + e + ")*)|.*)\)|)",
        bl = new RegExp("^" + D + "+|((?:^|[^\\\\])(?:\\\\.)*)" + D + "+$", "g"),
        k = new RegExp("^" + D + "*," + D + "*"),
        K = new RegExp("^" + D + "*([>+~]|" + D + ")" + D + "*"),
        o = new RegExp("=" + D + "*([^\]'\"]*?)" + D + "*\]", "g"),
        A = new RegExp(bf),
        u = new RegExp("^" + bc + "$"),
        X = {
          ID: new RegExp("^#(" + T + ")"),
          CLASS: new RegExp("^\.(" + T + ")"),
          TAG: new RegExp("^(" + T.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + e),
          PSEUDO: new RegExp("^" + bf),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\(" + D + "*(even|odd|(([+-]|)(\\d*)n|)" + D + "*(?:([+-]|)" + D + "*(\\d+)|))" + D + "*\)|)", "i"),
          bool: new RegExp("^(?:" + Q + ")$", "i"),
          needsContext: new RegExp("^" + D + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\(" + D + "*((?:-\\d)?\\d*)" + D + "*\)|)(?=[^-]|$)", "i")
        },
        N = /^(?:input|select|textarea|button)$/i,
        x = /^h\d$/i,
        bo = /^[^{]+\{\s*\[native \w/,
        by = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        br = /[+~]/,
        h = /'|\\/g,
        bv = new RegExp("\\\\([\\da-f]{1,6}" + D + "?|(" + D + ")|.)", "ig"),
        l = function(a, d, c) {
          var b = "0x" + d - 65536;
          return b !== b || c ? d : 0 > b ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, 1023 & b | 56320)
        };
      try {
        bB.apply(H = r.call(S.childNodes), S.childNodes), H[S.childNodes.length].nodeType
      } catch (bs) {
        bB = {
          apply: H.length ? function(a, b) {
            Z.apply(a, r.call(b))
          } : function(a, d) {
            for (var c = a.length, b = 0; a[c++] = d[b++];) {;
            };
            a.length = c - 1
          }
        }
      };
      bt = bg.support = {}, bh = bg.isXML = function(a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return b ? "HTML" !== b.nodeName : !1
      }, n = bg.setDocument = function(a) {
        var h, f = a ? a.ownerDocument || a : S,
          e = f.defaultView;
        return f !== g && 9 === f.nodeType && f.documentElement ? (g = f, C = f.documentElement, z = !bh(f), e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", function() {
          n()
        }, !1) : e.attachEvent && e.attachEvent("onunload", function() {
          n()
        })), bt.attributes = R(function(a) {
          return a.className = "i", !a.getAttribute("className")
        }), bt.getElementsByTagName = R(function(a) {
          return a.appendChild(f.createComment("")), !a.getElementsByTagName("*").length
        }), bt.getElementsByClassName = bo.test(f.getElementsByClassName) && R(function(a) {
          return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
        }), bt.getById = R(function(a) {
          return C.appendChild(a).id = b, !f.getElementsByName || !f.getElementsByName(b).length
        }), bt.getById ? (j.find.ID = function(a, c) {
          if (typeof c.getElementById !== bx && z) {
            var b = c.getElementById(a);
            return b && b.parentNode ? [b] : []
          }
        }, j.filter.ID = function(a) {
          var b = a.replace(bv, l);
          return function(a) {
            return a.getAttribute("id") === b
          }
        }) : (delete j.find.ID, j.filter.ID = function(a) {
          var b = a.replace(bv, l);
          return function(a) {
            var c = typeof a.getAttributeNode !== bx && a.getAttributeNode("id");
            return c && c.value === b
          }
        }), j.find.TAG = bt.getElementsByTagName ? function(a, b) {
          return typeof b.getElementsByTagName !== bx ? b.getElementsByTagName(a) : void(0)
        } : function(a, f) {
          var c, b = [],
            d = 0,
            e = f.getElementsByTagName(a);
          if ("*" === a) {
            for (; c = e[d++];) {
              1 === c.nodeType && b.push(c)
            };
            return b
          };
          return e
        }, j.find.CLASS = bt.getElementsByClassName && function(a, b) {
          return typeof b.getElementsByClassName !== bx && z ? b.getElementsByClassName(a) : void(0)
        }, t = [], E = [], (bt.qsa = bo.test(f.querySelectorAll)) && (R(function(a) {
          a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && E.push("[*^$]=" + D + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || E.push("\[" + D + "*(?:value|" + Q + ")"), a.querySelectorAll(":checked").length || E.push(":checked")
        }), R(function(a) {
          var b = f.createElement("input");
          b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && E.push("name" + D + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || E.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), E.push(",.*:")
        })), (bt.matchesSelector = bo.test(V = C.matches || C.webkitMatchesSelector || C.mozMatchesSelector || C.oMatchesSelector || C.msMatchesSelector)) && R(function(a) {
          bt.disconnectedMatch = V.call(a, "div"), V.call(a, "[s!='']:x"), t.push("!=", bf)
        }), E = E.length && new RegExp(E.join("|")), t = t.length && new RegExp(t.join("|")), h = bo.test(C.compareDocumentPosition), bz = h || bo.test(C.contains) ? function(a, d) {
          var c = 9 === a.nodeType ? a.documentElement : a,
            b = d && d.parentNode;
          return a === b || !(!b || 1 !== b.nodeType || !(c.contains ? c.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b)))
        } : function(a, b) {
          if (b) {
            for (; b = b.parentNode;) {
              if (b === a) {
                return !0
              }
            }
          };
          return !1
        }, bn = h ? function(a, c) {
          if (a === c) {
            return d = !0, 0
          };
          var b = !a.compareDocumentPosition - !c.compareDocumentPosition;
          return b ? b : (b = (a.ownerDocument || a) === (c.ownerDocument || c) ? a.compareDocumentPosition(c) : 1, 1 & b || !bt.sortDetached && c.compareDocumentPosition(a) === b ? a === f || a.ownerDocument === S && bz(S, a) ? -1 : c === f || c.ownerDocument === S && bz(S, c) ? 1 : M ? bi.call(M, a) - bi.call(M, c) : 0 : 4 & b ? -1 : 1)
        } : function(b, j) {
          if (b === j) {
            return d = !0, 0
          };
          var e, g = 0,
            h = b.parentNode,
            i = j.parentNode,
            k = [b],
            a = [j];
          if (!h || !i) {
            return b === f ? -1 : j === f ? 1 : h ? -1 : i ? 1 : M ? bi.call(M, b) - bi.call(M, j) : 0
          };
          if (h === i) {
            return c(b, j)
          };
          for (e = b; e = e.parentNode;) {
            k.unshift(e)
          };
          for (e = j; e = e.parentNode;) {
            a.unshift(e)
          };
          for (; k[g] === a[g];) {
            g++
          };
          return g ? c(k[g], a[g]) : k[g] === S ? -1 : a[g] === S ? 1 : 0
        }, f) : g
      }, bg.matches = function(a, b) {
        return bg(a, null, null, b)
      }, bg.matchesSelector = function(a, c) {
        if ((a.ownerDocument || a) !== g && n(a), c = c.replace(o, "='$1']"), !(!bt.matchesSelector || !z || t && t.test(c) || E && E.test(c))) {
          try {
            var b = V.call(a, c);
            if (b || bt.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
              return b
            }
          } catch (R) {}
        };
        return bg(c, g, null, [a]).length > 0
      }, bg.contains = function(a, b) {
        return (a.ownerDocument || a) !== g && n(a), bz(a, b)
      }, bg.attr = function(a, d) {
        (a.ownerDocument || a) !== g && n(a);
        var c = j.attrHandle[d.toLowerCase()],
          b = c && w.call(j.attrHandle, d.toLowerCase()) ? c(a, d, !z) : void(0);
        return void(0) !== b ? b : bt.attributes || !z ? a.getAttribute(d) : (b = a.getAttributeNode(d)) && b.specified ? b.value : null
      }, bg.error = function(a) {
        throw new Error("Syntax error, unrecognized expression: " + a)
      }, bg.uniqueSort = function(a) {
        var f, c = [],
          b = 0,
          e = 0;
        if (d = !bt.detectDuplicates, M = !bt.sortStable && a.slice(0), a.sort(bn), d) {
          for (; f = a[e++];) {
            f === a[e] && (b = c.push(e))
          };
          for (; b--;) {
            a.splice(c[b], 1)
          }
        };
        return M = null, a
      }, G = bg.getText = function(a) {
        var e, c = "",
          b = 0,
          d = a.nodeType;
        if (d) {
          if (1 === d || 9 === d || 11 === d) {
            if ("string" == typeof a.textContent) {
              return a.textContent
            };
            for (a = a.firstChild; a; a = a.nextSibling) {
              c += G(a)
            }
          } else {
            if (3 === d || 4 === d) {
              return a.nodeValue
            }
          }
        } else {
          for (; e = a[b++];) {
            c += G(e)
          }
        };
        return c
      }, j = bg.selectors = {
        cacheLength: 50,
        createPseudo: B,
        match: X,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(a) {
            return a[1] = a[1].replace(bv, l), a[3] = (a[3] || a[4] || a[5] || "").replace(bv, l), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
          },
          CHILD: function(a) {
            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || bg.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && bg.error(a[0]), a
          },
          PSEUDO: function(a) {
            var c, b = !a[6] && a[2];
            return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : b && A.test(b) && (c = q(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (a[0] = a[0].slice(0, c), a[2] = b.slice(0, c)), a.slice(0, 3))
          }
        },
        filter: {
          TAG: function(a) {
            var b = a.replace(bv, l).toLowerCase();
            return "*" === a ? function() {
              return !0
            } : function(a) {
              return a.nodeName && a.nodeName.toLowerCase() === b
            }
          },
          CLASS: function(a) {
            var b = bb[a + " "];
            return b || (b = new RegExp("(^|" + D + ")" + a + "(" + D + "|$)")) && bb(a, function(a) {
              return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== bx && a.getAttribute("class") || "")
            })
          },
          ATTR: function(a, c, b) {
            return function(d) {
              var e = bg.attr(d, a);
              return null == e ? "!=" === c : c ? (e += "", "=" === c ? e === b : "!=" === c ? e !== b : "^=" === c ? b && 0 === e.indexOf(b) : "*=" === c ? b && e.indexOf(b) > -1 : "$=" === c ? b && e.slice(-b.length) === b : "~=" === c ? (" " + e + " ").indexOf(b) > -1 : "|=" === c ? e === b || e.slice(0, b.length + 1) === b + "-" : !1) : !0
            }
          },
          CHILD: function(d, j, f, e, g) {
            var h = "nth" !== d.slice(0, 3),
              c = "last" !== d.slice(-4),
              i = "of-type" === j;
            return 1 === e && 0 === g ? function(a) {
              return !!a.parentNode
            } : function(r, p, s) {
              var f, n, j, m, k, q, o = h !== c ? "nextSibling" : "previousSibling",
                l = r.parentNode,
                t = i && r.nodeName.toLowerCase(),
                u = !s && !i;
              if (l) {
                if (h) {
                  for (; o;) {
                    for (j = r; j = j[o];) {
                      if (i ? j.nodeName.toLowerCase() === t : 1 === j.nodeType) {
                        return !1
                      }
                    };
                    q = o = "only" === d && !q && "nextSibling"
                  };
                  return !0
                };
                if (q = [c ? l.firstChild : l.lastChild], c && u) {
                  for (n = l[b] || (l[b] = {}), f = n[d] || [], k = f[0] === $ && f[1], m = f[0] === $ && f[2], j = k && l.childNodes[k]; j = ++k && j && j[o] || (m = k = 0) || q.pop();) {
                    if (1 === j.nodeType && ++m && j === r) {
                      n[d] = [$, k, m];
                      break
                    }
                  }
                } else {
                  if (u && (f = (r[b] || (r[b] = {}))[d]) && f[0] === $) {
                    m = f[1]
                  } else {
                    for (;
                      (j = ++k && j && j[o] || (m = k = 0) || q.pop()) && ((i ? j.nodeName.toLowerCase() !== t : 1 !== j.nodeType) || !++m || (u && ((j[b] || (j[b] = {}))[d] = [$, m]), j !== r));) {;
                    }
                  }
                };
                return m -= g, m === e || m % e === 0 && m / e >= 0
              }
            }
          },
          PSEUDO: function(a, c) {
            var d, e = j.pseudos[a] || j.setFilters[a.toLowerCase()] || bg.error("unsupported pseudo: " + a);
            return e[b] ? e(c) : e.length > 1 ? (d = [a, a, "", c], j.setFilters.hasOwnProperty(a.toLowerCase()) ? B(function(b, g) {
              for (var d, f = e(b, c), a = f.length; a--;) {
                d = bi.call(b, f[a]), b[d] = !(g[d] = f[a])
              }
            }) : function(a) {
              return e(a, 0, d)
            }) : e
          }
        },
        pseudos: {
          not: B(function(a) {
            var e = [],
              c = [],
              d = be(a.replace(bl, "$1"));
            return d[b] ? B(function(b, h, e, c) {
              for (var f, a = d(b, null, c, []), g = b.length; g--;) {
                (f = a[g]) && (b[g] = !(h[g] = f))
              }
            }) : function(a, b, f) {
              return e[0] = a, d(e, null, f, c), !c.pop()
            }
          }),
          has: B(function(a) {
            return function(b) {
              return bg(a, b).length > 0
            }
          }),
          contains: B(function(a) {
            return function(b) {
              return (b.textContent || b.innerText || G(b)).indexOf(a) > -1
            }
          }),
          lang: B(function(a) {
            return u.test(a || "") || bg.error("unsupported lang: " + a), a = a.replace(bv, l).toLowerCase(),
              function(c) {
                var b;
                do {
                  if (b = z ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang")) {
                    return b = b.toLowerCase(), b === a || 0 === b.indexOf(a + "-")
                  }
                } while ((c = c.parentNode) && 1 === c.nodeType);;
                return !1
              }
          }),
          target: function(b) {
            var a = p.location && p.location.hash;
            return a && a.slice(1) === b.id
          },
          root: function(a) {
            return a === C
          },
          focus: function(a) {
            return a === g.activeElement && (!g.hasFocus || g.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
          },
          enabled: function(a) {
            return a.disabled === !1
          },
          disabled: function(a) {
            return a.disabled === !0
          },
          checked: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && !!a.checked || "option" === b && !!a.selected
          },
          selected: function(a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
          },
          empty: function(a) {
            for (a = a.firstChild; a; a = a.nextSibling) {
              if (a.nodeType < 6) {
                return !1
              }
            };
            return !0
          },
          parent: function(a) {
            return !j.pseudos.empty(a)
          },
          header: function(a) {
            return x.test(a.nodeName)
          },
          input: function(a) {
            return N.test(a.nodeName)
          },
          button: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && "button" === a.type || "button" === b
          },
          text: function(a) {
            var b;
            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
          },
          first: i(function() {
            return [0]
          }),
          last: i(function(a, b) {
            return [b - 1]
          }),
          eq: i(function(a, c, b) {
            return [0 > b ? b + c : b]
          }),
          even: i(function(a, c) {
            for (var b = 0; c > b; b += 2) {
              a.push(b)
            };
            return a
          }),
          odd: i(function(a, c) {
            for (var b = 1; c > b; b += 2) {
              a.push(b)
            };
            return a
          }),
          lt: i(function(a, d, c) {
            for (var b = 0 > c ? c + d : c; --b >= 0;) {
              a.push(b)
            };
            return a
          }),
          gt: i(function(a, d, c) {
            for (var b = 0 > c ? c + d : c; ++b < d;) {
              a.push(b)
            };
            return a
          })
        }
      }, j.pseudos.nth = j.pseudos.eq;
      for (f in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) {
        j.pseudos[f] = bd(f)
      };
      for (f in {
          submit: !0,
          reset: !0
        }) {
        j.pseudos[f] = bj(f)
      };
      return m.prototype = j.filters = j.pseudos, j.setFilters = new m, q = bg.tokenize = function(c, f) {
        var d, g, h, a, i, l, b, e = bq[c + " "];
        if (e) {
          return f ? 0 : e.slice(0)
        };
        for (i = c, l = [], b = j.preFilter; i;) {
          (!d || (g = k.exec(i))) && (g && (i = i.slice(g[0].length) || i), l.push(h = [])), d = !1, (g = K.exec(i)) && (d = g.shift(), h.push({
            value: d,
            type: g[0].replace(bl, " ")
          }), i = i.slice(d.length));
          for (a in j.filter) {
            !(g = X[a].exec(i)) || b[a] && !(g = b[a](g)) || (d = g.shift(), h.push({
              value: d,
              type: a,
              matches: g
            }), i = i.slice(d.length))
          };
          if (!d) {
            break
          }
        };
        return f ? i.length : i ? bg.error(c) : bq(c, l).slice(0)
      }, be = bg.compile = function(a, g) {
        var d, c = [],
          e = [],
          f = bu[a + " "];
        if (!f) {
          for (g || (g = q(a)), d = g.length; d--;) {
            f = bw(g[d]), f[b] ? c.push(f) : e.push(f)
          };
          f = bu(a, bp(e, c)), f.selector = a
        };
        return f
      }, J = bg.select = function(d, k, f, e) {
        var g, h, a, i, m, b = "function" == typeof d && d,
          c = !e && q(d = b.selector || d);
        if (f = f || [], 1 === c.length) {
          if (h = c[0] = c[0].slice(0), h.length > 2 && "ID" === (a = h[0]).type && bt.getById && 9 === k.nodeType && z && j.relative[h[1].type]) {
            if (k = (j.find.ID(a.matches[0].replace(bv, l), k) || [])[0], !k) {
              return f
            };
            b && (k = k.parentNode), d = d.slice(h.shift().value.length)
          };
          for (g = X.needsContext.test(d) ? 0 : h.length; g-- && (a = h[g], !j.relative[i = a.type]);) {
            if ((m = j.find[i]) && (e = m(a.matches[0].replace(bv, l), br.test(h[0].type) && I(k.parentNode) || k))) {
              if (h.splice(g, 1), d = e.length && y(h), !d) {
                return bB.apply(f, e), f
              };
              break
            }
          }
        };
        return (b || be(d, c))(e, k, !z, f, br.test(d) && I(k.parentNode) || k), f
      }, bt.sortStable = b.split("").sort(bn).join("") === b, bt.detectDuplicates = !!d, n(), bt.sortDetached = R(function(a) {
        return 1 & a.compareDocumentPosition(g.createElement("div"))
      }), R(function(a) {
        return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
      }) || ba("type|href|height|width", function(a, c, b) {
        return b ? void(0) : a.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
      }), bt.attributes && R(function(a) {
        return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
      }) || ba("value", function(a, c, b) {
        return b || "input" !== a.nodeName.toLowerCase() ? void(0) : a.defaultValue
      }), R(function(a) {
        return null == a.getAttribute("disabled")
      }) || ba(Q, function(a, d, c) {
        var b;
        return c ? void(0) : a[d] === !0 ? d.toLowerCase() : (b = a.getAttributeNode(d)) && b.specified ? b.value : null
      }), bg
    }(F);
    bR.find = v, bR.expr = v.selectors, bR.expr[":"] = bR.expr.pseudos, bR.unique = v.uniqueSort, bR.text = v.getText, bR.isXMLDoc = v.isXML, bR.contains = v.contains;
    var by = bR.expr.match.needsContext,
      B = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      ba = /^.[^:#\[\.,]*$/;
    bR.filter = function(a, d, c) {
      var b = d[0];
      return c && (a = ":not(" + a + ")"), 1 === d.length && 1 === b.nodeType ? bR.find.matchesSelector(b, a) ? [b] : [] : bR.find.matches(a, bR.grep(d, function(a) {
        return 1 === a.nodeType
      }))
    }, bR.fn.extend({
      find: function(a) {
        var e, c = [],
          b = this,
          d = b.length;
        if ("string" != typeof a) {
          return this.pushStack(bR(a).filter(function() {
            for (e = 0; d > e; e++) {
              if (bR.contains(b[e], this)) {
                return !0
              }
            }
          }))
        };
        for (e = 0; d > e; e++) {
          bR.find(a, b[e], c)
        };
        return c = this.pushStack(d > 1 ? bR.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
      },
      filter: function(a) {
        return this.pushStack(be(this, a || [], !1))
      },
      not: function(a) {
        return this.pushStack(be(this, a || [], !0))
      },
      is: function(a) {
        return !!be(this, "string" == typeof a && by.test(a) ? bR(a) : a || [], !1).length
      }
    });
    var O, bY = F.document,
      bE = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      U = bR.fn.init = function(a, d) {
        var c, b;
        if (!a) {
          return this
        };
        if ("string" == typeof a) {
          if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : bE.exec(a), !c || !c[1] && d) {
            return !d || d["jquery"] ? (d || O).find(a) : this.constructor(d).find(a)
          };
          if (c[1]) {
            if (d = d instanceof bR ? d[0] : d, bR.merge(this, bR.parseHTML(c[1], d && d.nodeType ? d.ownerDocument || d : bY, !0)), B.test(c[1]) && bR.isPlainObject(d)) {
              for (c in d) {
                bR.isFunction(this[c]) ? this[c](d[c]) : this.attr(c, d[c])
              }
            };
            return this
          };
          if (b = bY.getElementById(c[2]), b && b.parentNode) {
            if (b.id !== c[2]) {
              return O.find(a)
            };
            this.length = 1, this[0] = b
          };
          return this.context = bY, this.selector = a, this
        };
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : bR.isFunction(a) ? "undefined" != typeof O.ready ? O.ready(a) : a(bR) : (void(0) !== a.selector && (this.selector = a.selector, this.context = a.context), bR.makeArray(a, this))
      };
    U.prototype = bR.fn, O = bR(bY);
    var cK = /^(?:parents|prev(?:Until|All))/,
      db = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    bR.extend({
      dir: function(a, e, c) {
        for (var b = [], d = a[e]; d && 9 !== d.nodeType && (void(0) === c || 1 !== d.nodeType || !bR(d).is(c));) {
          1 === d.nodeType && b.push(d), d = d[e]
        };
        return b
      },
      sibling: function(a, c) {
        for (var b = []; a; a = a.nextSibling) {
          1 === a.nodeType && a !== c && b.push(a)
        };
        return b
      }
    }), bR.fn.extend({
      has: function(a) {
        var d, c = bR(a, this),
          b = c.length;
        return this.filter(function() {
          for (d = 0; b > d; d++) {
            if (bR.contains(this, c[d])) {
              return !0
            }
          }
        })
      },
      closest: function(b, g) {
        for (var d, c = 0, e = this.length, f = [], a = by.test(b) || "string" != typeof b ? bR(b, g || this.context) : 0; e > c; c++) {
          for (d = this[c]; d && d !== g; d = d.parentNode) {
            if (d.nodeType < 11 && (a ? a.index(d) > -1 : 1 === d.nodeType && bR.find.matchesSelector(d, b))) {
              f.push(d);
              break
            }
          }
        };
        return this.pushStack(f.length > 1 ? bR.unique(f) : f)
      },
      index: function(a) {
        return a ? "string" == typeof a ? bR.inArray(this[0], bR(a)) : bR.inArray(a["jquery"] ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(a, b) {
        return this.pushStack(bR.unique(bR.merge(this.get(), bR(a, b))))
      },
      addBack: function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
      }
    }), bR.each({
      parent: function(a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null
      },
      parents: function(a) {
        return bR.dir(a, "parentNode")
      },
      parentsUntil: function(a, c, b) {
        return bR.dir(a, "parentNode", b)
      },
      next: function(a) {
        return bP(a, "nextSibling")
      },
      prev: function(a) {
        return bP(a, "previousSibling")
      },
      nextAll: function(a) {
        return bR.dir(a, "nextSibling")
      },
      prevAll: function(a) {
        return bR.dir(a, "previousSibling")
      },
      nextUntil: function(a, c, b) {
        return bR.dir(a, "nextSibling", b)
      },
      prevUntil: function(a, c, b) {
        return bR.dir(a, "previousSibling", b)
      },
      siblings: function(a) {
        return bR.sibling((a.parentNode || {}).firstChild, a)
      },
      children: function(a) {
        return bR.sibling(a.firstChild)
      },
      contents: function(a) {
        return bR.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : bR.merge([], a.childNodes)
      }
    }, function(a, b) {
      bR.fn[a] = function(d, c) {
        var e = bR.map(this, b, d);
        return "Until" !== a.slice(-5) && (c = d), c && "string" == typeof c && (e = bR.filter(c, e)), this.length > 1 && (db[a] || (e = bR.unique(e)), cK.test(a) && (e = e.reverse())), this.pushStack(e)
      }
    });
    var cQ = /\S+/g,
      p = {};
    bR.Callbacks = function(d) {
      d = "string" == typeof d ? p[d] || ci(d) : bR.extend({}, d);
      var j, g, e, h, a, i, k = [],
        b = !d.once && [],
        f = function(l) {
          for (g = d.memory && l, e = !0, a = i || 0, i = 0, h = k.length, j = !0; k && h > a; a++) {
            if (k[a].apply(l[0], l[1]) === !1 && d.stopOnFalse) {
              g = !1;
              break
            }
          };
          j = !1, k && (b ? b.length && f(b.shift()) : g ? k = [] : c.disable())
        },
        c = {
          add: function() {
            if (k) {
              var a = k.length;
              ! function b(a) {
                bR.each(a, function(f, e) {
                  var a = bR.type(e);
                  "function" === a ? d.unique && c.has(e) || k.push(e) : e && e.length && "string" !== a && b(e)
                })
              }(arguments), j ? h = k.length : g && (i = a, f(g))
            };
            return this
          },
          remove: function() {
            return k && bR.each(arguments, function(b, d) {
              for (var c;
                (c = bR.inArray(d, k, c)) > -1;) {
                k.splice(c, 1), j && (h >= c && h--, a >= c && a--)
              }
            }), this
          },
          has: function(a) {
            return a ? bR.inArray(a, k) > -1 : !(!k || !k.length)
          },
          empty: function() {
            return k = [], h = 0, this
          },
          disable: function() {
            return k = b = g = void(0), this
          },
          disabled: function() {
            return !k
          },
          lock: function() {
            return b = void(0), g || c.disable(), this
          },
          locked: function() {
            return !b
          },
          fireWith: function(a, c) {
            return !k || e && !b || (c = c || [], c = [a, c.slice ? c.slice() : c], j ? b.push(c) : f(c)), this
          },
          fire: function() {
            return c.fireWith(this, arguments), this
          },
          fired: function() {
            return !!e
          }
        };
      return c
    }, bR.extend({
      Deferred: function(a) {
        var e = [
            ["resolve", "done", bR.Callbacks("once memory"), "resolved"],
            ["reject", "fail", bR.Callbacks("once memory"), "rejected"],
            ["notify", "progress", bR.Callbacks("memory")]
          ],
          c = "pending",
          b = {
            state: function() {
              return c
            },
            always: function() {
              return d.done(arguments).fail(arguments), this
            },
            then: function() {
              var a = arguments;
              return bR.Deferred(function(c) {
                bR.each(e, function(g, f) {
                  var e = bR.isFunction(a[g]) && a[g];
                  d[f[1]](function() {
                    var a = e && e.apply(this, arguments);
                    a && bR.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === b ? c.promise() : this, e ? [a] : arguments)
                  })
                }), a = null
              }).promise()
            },
            promise: function(a) {
              return null != a ? bR.extend(a, b) : b
            }
          },
          d = {};
        return b.pipe = b.then, bR.each(e, function(f, g) {
          var a = g[2],
            h = g[3];
          b[g[1]] = a.add, h && a.add(function() {
            c = h
          }, e[1 ^ f][2].disable, e[2][2].lock), d[g[0]] = function() {
            return d[g[0] + "With"](this === d ? b : this, arguments), this
          }, d[g[0] + "With"] = a.fireWith
        }), b.promise(d), a && a.call(d, d), d
      },
      when: function(c) {
        var i, e, d, f = 0,
          g = T.call(arguments),
          a = g.length,
          h = 1 !== a || c && bR.isFunction(c.promise) ? a : 0,
          j = 1 === h ? c : bR.Deferred(),
          b = function(a, c, b) {
            return function(d) {
              c[a] = this, b[a] = arguments.length > 1 ? T.call(arguments) : d, b === i ? j.notifyWith(c, b) : --h || j.resolveWith(c, b)
            }
          };
        if (a > 1) {
          for (i = new Array(a), e = new Array(a), d = new Array(a); a > f; f++) {
            g[f] && bR.isFunction(g[f].promise) ? g[f].promise().done(b(f, d, g)).fail(j.reject).progress(b(f, e, i)) : --h
          }
        };
        return h || j.resolveWith(d, g), j.promise()
      }
    });
    var cW;
    bR.fn.ready = function(a) {
      return bR.ready.promise().done(a), this
    }, bR.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(a) {
        a ? bR.readyWait++ : bR.ready(!0)
      },
      ready: function(a) {
        if (a === !0 ? !--bR.readyWait : !bR.isReady) {
          if (!bY.body) {
            return setTimeout(bR.ready)
          };
          bR.isReady = !0, a !== !0 && --bR.readyWait > 0 || (cW.resolveWith(bY, [bR]), bR.fn.triggerHandler && (bR(bY).triggerHandler("ready"), bR(bY).off("ready")))
        }
      }
    }), bR.ready.promise = function(c) {
      if (!cW) {
        if (cW = bR.Deferred(), "complete" === bY.readyState) {
          setTimeout(bR.ready)
        } else {
          if (bY.addEventListener) {
            bY.addEventListener("DOMContentLoaded", cp, !1), F.addEventListener("load", cp, !1)
          } else {
            bY.attachEvent("onreadystatechange", cp), F.attachEvent("onload", cp);
            var a = !1;
            try {
              a = null == F.frameElement && bY.documentElement
            } catch (be) {};
            a && a.doScroll && ! function b() {
              if (!bR.isReady) {
                try {
                  a.doScroll("left")
                } catch (F) {
                  return setTimeout(b, 50)
                };
                g(), bR.ready()
              }
            }()
          }
        }
      };
      return cW.promise(c)
    };
    var w, bs = "undefined";
    for (w in bR(bK)) {
      break
    };
    bK.ownLast = "0" !== w, bK.inlineBlockNeedsLayout = !1, bR(function() {
        var a, d, c, b;
        c = bY.getElementsByTagName("body")[0], c && c.style && (d = bY.createElement("div"), b = bY.createElement("div"), b.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(b).appendChild(d), typeof d.style.zoom !== bs && (d.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", bK.inlineBlockNeedsLayout = a = 3 === d.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(b))
      }),
      function() {
        var a = bY.createElement("div");
        if (null == bK.deleteExpando) {
          bK.deleteExpando = !0;
          try {
            delete a.test
          } catch (cv) {
            bK.deleteExpando = !1
          }
        };
        a = null
      }(), bR.acceptData = function(a) {
        var c = bR.noData[(a.nodeName + " ").toLowerCase()],
          b = +a.nodeType || 1;
        return 1 !== b && 9 !== b ? !1 : !c || c !== !0 && a.getAttribute("classid") === c
      };
    var cy = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      I = /([A-Z])/g;
    bR.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
      },
      hasData: function(a) {
        return a = a.nodeType ? bR.cache[a[bR.expando]] : a[bR.expando], !!a && !t(a)
      },
      data: function(a, c, b) {
        return bw(a, c, b)
      },
      removeData: function(a, b) {
        return z(a, b)
      },
      _data: function(a, c, b) {
        return bw(a, c, b, !0)
      },
      _removeData: function(a, b) {
        return z(a, b, !0)
      }
    }), bR.fn.extend({
      data: function(b, g) {
        var d, c, e, f = this[0],
          a = f && f.attributes;
        if (void(0) === b) {
          if (this.length && (e = bR.data(f), 1 === f.nodeType && !bR._data(f, "parsedAttrs"))) {
            for (d = a.length; d--;) {
              a[d] && (c = a[d].name, 0 === c.indexOf("data-") && (c = bR.camelCase(c.slice(5)), cC(f, c, e[c])))
            };
            bR._data(f, "parsedAttrs", !0)
          };
          return e
        };
        return "object" == typeof b ? this.each(function() {
          bR.data(this, b)
        }) : arguments.length > 1 ? this.each(function() {
          bR.data(this, b, g)
        }) : f ? cC(f, b, bR.data(f, b)) : void(0)
      },
      removeData: function(a) {
        return this.each(function() {
          bR.removeData(this, a)
        })
      }
    }), bR.extend({
      queue: function(a, d, c) {
        var b;
        return a ? (d = (d || "fx") + "queue", b = bR._data(a, d), c && (!b || bR.isArray(c) ? b = bR._data(a, d, bR.makeArray(c)) : b.push(c)), b || []) : void(0)
      },
      dequeue: function(b, g) {
        g = g || "fx";
        var d = bR.queue(b, g),
          c = d.length,
          e = d.shift(),
          f = bR._queueHooks(b, g),
          a = function() {
            bR.dequeue(b, g)
          };
        "inprogress" === e && (e = d.shift(), c--), e && ("fx" === g && d.unshift("inprogress"), delete f.stop, e.call(b, a, f)), !c && f && f.empty.fire()
      },
      _queueHooks: function(a, c) {
        var b = c + "queueHooks";
        return bR._data(a, b) || bR._data(a, b, {
          empty: bR.Callbacks("once memory").add(function() {
            bR._removeData(a, c + "queue"), bR._removeData(a, b)
          })
        })
      }
    }), bR.fn.extend({
      queue: function(a, c) {
        var b = 2;
        return "string" != typeof a && (c = a, a = "fx", b--), arguments.length < b ? bR.queue(this[0], a) : void(0) === c ? this : this.each(function() {
          var b = bR.queue(this, a, c);
          bR._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && bR.dequeue(this, a)
        })
      },
      dequeue: function(a) {
        return this.each(function() {
          bR.dequeue(this, a)
        })
      },
      clearQueue: function(a) {
        return this.queue(a || "fx", [])
      },
      promise: function(b, h) {
        var d, c = 1,
          e = bR.Deferred(),
          f = this,
          a = this.length,
          g = function() {
            --c || e.resolveWith(f, [f])
          };
        for ("string" != typeof b && (h = b, b = void(0)), b = b || "fx"; a--;) {
          d = bR._data(f[a], b + "queueHooks"), d && d.empty && (c++, d.empty.add(g))
        };
        return g(), e.promise(h)
      }
    });
    var cs = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      bz = ["Top", "Right", "Bottom", "Left"],
      bL = function(a, b) {
        return a = b || a, "none" === bR.css(a, "display") || !bR.contains(a.ownerDocument, a)
      },
      bF = bR.access = function(c, i, e, d, f, g, a) {
        var h = 0,
          j = c.length,
          b = null == e;
        if ("object" === bR.type(e)) {
          f = !0;
          for (h in e) {
            bR.access(c, i, h, e[h], !0, g, a)
          }
        } else {
          if (void(0) !== d && (f = !0, bR.isFunction(d) || (a = !0), b && (a ? (i.call(c, d), i = null) : (b = i, i = function(a, d, c) {
              return b.call(bR(a), c)
            })), i)) {
            for (; j > h; h++) {
              i(c[h], e, a ? d : d.call(c[h], h, i(c[h], e)))
            }
          }
        };
        return f ? c : b ? i.call(c) : j ? i(c[0], e) : g
      },
      j = /^(?:checkbox|radio)$/i;
    ! function() {
      var a = bY.createElement("input"),
        c = bY.createElement("div"),
        b = bY.createDocumentFragment();
      if (c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", bK.leadingWhitespace = 3 === c.firstChild.nodeType, bK.tbody = !c.getElementsByTagName("tbody").length, bK.htmlSerialize = !!c.getElementsByTagName("link").length, bK.html5Clone = "<:nav></:nav>" !== bY.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, b.appendChild(a), bK.appendChecked = a.checked, c.innerHTML = "<textarea>x</textarea>", bK.noCloneChecked = !!c.cloneNode(!0).lastChild.defaultValue, b.appendChild(c), c.innerHTML = "<input type='radio' checked='checked' name='t'/>", bK.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked, bK.noCloneEvent = !0, c.attachEvent && (c.attachEvent("onclick", function() {
          bK.noCloneEvent = !1
        }), c.cloneNode(!0).click()), null == bK.deleteExpando) {
        bK.deleteExpando = !0;
        try {
          delete c.test
        } catch (be) {
          bK.deleteExpando = !1
        }
      }
    }(),
    function() {
      var c, b, a = bY.createElement("div");
      for (c in {
          submit: !0,
          change: !0,
          focusin: !0
        }) {
        b = "on" + c, (bK[c + "Bubbles"] = b in F) || (a.setAttribute(b, "t"), bK[c + "Bubbles"] = a.attributes[b].expando === !1)
      };
      a = null
    }();
    var C = /^(?:input|select|textarea)$/i,
      q = /^key/,
      bh = /^(?:mouse|pointer|contextmenu)|click/,
      bb = /^(?:focusinfocus|focusoutblur)$/,
      bm = /^([^.]*)(?:\.(.+)|)$/;
    bR.event = {
      global: {},
      add: function(d, p, k, h, l) {
        var n, a, o, q, b, i, c, g, e, m, j, f = bR._data(d);
        if (f) {
          for (k.handler && (q = k, k = q.handler, l = q.selector), k.guid || (k.guid = bR.guid++), (a = f.events) || (a = f.events = {}), (i = f.handle) || (i = f.handle = function(a) {
              return typeof bR === bs || a && bR.event.triggered === a.type ? void(0) : bR.event.dispatch.apply(i.elem, arguments)
            }, i.elem = d), p = (p || "").match(cQ) || [""], o = p.length; o--;) {
            n = bm.exec(p[o]) || [], e = j = n[1], m = (n[2] || "").split(".").sort(), e && (b = bR.event.special[e] || {}, e = (l ? b.delegateType : b.bindType) || e, b = bR.event.special[e] || {}, c = bR.extend({
              type: e,
              origType: j,
              data: h,
              handler: k,
              guid: k.guid,
              selector: l,
              needsContext: l && bR.expr.match.needsContext.test(l),
              namespace: m.join(".")
            }, q), (g = a[e]) || (g = a[e] = [], g.delegateCount = 0, b.setup && b.setup.call(d, h, m, i) !== !1 || (d.addEventListener ? d.addEventListener(e, i, !1) : d.attachEvent && d.attachEvent("on" + e, i))), b.add && (b.add.call(d, c), c.handler.guid || (c.handler.guid = k.guid)), l ? g.splice(g.delegateCount++, 0, c) : g.push(c), bR.event.global[e] = !0)
          };
          d = null
        }
      },
      remove: function(d, p, k, h, l) {
        var n, a, o, q, b, i, c, g, e, m, j, f = bR.hasData(d) && bR._data(d);
        if (f && (i = f.events)) {
          for (p = (p || "").match(cQ) || [""], b = p.length; b--;) {
            if (o = bm.exec(p[b]) || [], e = j = o[1], m = (o[2] || "").split(".").sort(), e) {
              for (c = bR.event.special[e] || {}, e = (h ? c.delegateType : c.bindType) || e, g = i[e] || [], o = o[2] && new RegExp("(^|\.)" + m.join("\.(?:.*\.|)") + "(\.|$)"), q = n = g.length; n--;) {
                a = g[n], !l && j !== a.origType || k && k.guid !== a.guid || o && !o.test(a.namespace) || h && h !== a.selector && ("**" !== h || !a.selector) || (g.splice(n, 1), a.selector && g.delegateCount--, c.remove && c.remove.call(d, a))
              };
              q && !g.length && (c.teardown && c.teardown.call(d, m, f.handle) !== !1 || bR.removeEvent(d, e, f.handle), delete i[e])
            } else {
              for (e in i) {
                bR.event.remove(d, e + p[b], k, h, !0)
              }
            }
          };
          bR.isEmptyObject(i) && (delete f.handle, bR._removeData(d, "events"))
        }
      },
      trigger: function(m, h, f, i) {
        var k, a, l, n, b, g, c, e = [f || bY],
          d = cx.call(m, "type") ? m.type : m,
          j = cx.call(m, "namespace") ? m.namespace.split(".") : [];
        if (l = g = f = f || bY, 3 !== f.nodeType && 8 !== f.nodeType && !bb.test(d + bR.event.triggered) && (d.indexOf(".") >= 0 && (j = d.split("."), d = j.shift(), j.sort()), a = d.indexOf(":") < 0 && "on" + d, m = m[bR.expando] ? m : new bR.Event(d, "object" == typeof m && m), m.isTrigger = i ? 2 : 3, m.namespace = j.join("."), m.namespace_re = m.namespace ? new RegExp("(^|\.)" + j.join("\.(?:.*\.|)") + "(\.|$)") : null, m.result = void(0), m.target || (m.target = f), h = null == h ? [m] : bR.makeArray(h, [m]), b = bR.event.special[d] || {}, i || !b.trigger || b.trigger.apply(f, h) !== !1)) {
          if (!i && !b.noBubble && !bR.isWindow(f)) {
            for (n = b.delegateType || d, bb.test(n + d) || (l = l.parentNode); l; l = l.parentNode) {
              e.push(l), g = l
            };
            g === (f.ownerDocument || bY) && e.push(g.defaultView || g.parentWindow || F)
          };
          for (c = 0;
            (l = e[c++]) && !m.isPropagationStopped();) {
            m.type = c > 1 ? n : b.bindType || d, k = (bR._data(l, "events") || {})[m.type] && bR._data(l, "handle"), k && k.apply(l, h), k = a && l[a], k && k.apply && bR.acceptData(l) && (m.result = k.apply(l, h), m.result === !1 && m.preventDefault())
          };
          if (m.type = d, !i && !m.isDefaultPrevented() && (!b._default || b._default.apply(e.pop(), h) === !1) && bR.acceptData(f) && a && f[d] && !bR.isWindow(f)) {
            g = f[a], g && (f[a] = null), bR.event.triggered = d;
            try {
              f[d]()
            } catch (bC) {};
            bR.event.triggered = void(0), g && (f[a] = g)
          };
          return m.result
        }
      },
      dispatch: function(c) {
        c = bR.event.fix(c);
        var i, e, d, f, g, a = [],
          h = T.call(arguments),
          j = (bR._data(this, "events") || {})[c.type] || [],
          b = bR.event.special[c.type] || {};
        if (h[0] = c, c.delegateTarget = this, !b.preDispatch || b.preDispatch.call(this, c) !== !1) {
          for (a = bR.event.handlers.call(this, c, j), i = 0;
            (f = a[i++]) && !c.isPropagationStopped();) {
            for (c.currentTarget = f.elem, g = 0;
              (d = f.handlers[g++]) && !c.isImmediatePropagationStopped();) {
              (!c.namespace_re || c.namespace_re.test(d.namespace)) && (c.handleObj = d, c.data = d.data, e = ((bR.event.special[d.origType] || {}).handle || d.handler).apply(f.elem, h), void(0) !== e && (c.result = e) === !1 && (c.preventDefault(), c.stopPropagation()))
            }
          };
          return b.postDispatch && b.postDispatch.call(this, c), c.result
        }
      },
      handlers: function(b, h) {
        var d, c, e, f, a = [],
          g = h.delegateCount,
          i = b.target;
        if (g && i.nodeType && (!b.button || "click" !== b.type)) {
          for (; i != this; i = i.parentNode || this) {
            if (1 === i.nodeType && (i.disabled !== !0 || "click" !== b.type)) {
              for (e = [], f = 0; g > f; f++) {
                c = h[f], d = c.selector + " ", void(0) === e[d] && (e[d] = c.needsContext ? bR(d, this).index(i) >= 0 : bR.find(d, this, null, [i]).length), e[d] && e.push(c)
              };
              e.length && a.push({
                elem: i,
                handlers: e
              })
            }
          }
        };
        return g < h.length && a.push({
          elem: this,
          handlers: h.slice(g)
        }), a
      },
      fix: function(b) {
        if (b[bR.expando]) {
          return b
        };
        var g, d, c, e = b.type,
          f = b,
          a = this.fixHooks[e];
        for (a || (this.fixHooks[e] = a = bh.test(e) ? this.mouseHooks : q.test(e) ? this.keyHooks : {}), c = a.props ? this.props.concat(a.props) : this.props, b = new bR.Event(f), g = c.length; g--;) {
          d = c[g], b[d] = f[d]
        };
        return b.target || (b.target = f.srcElement || bY), 3 === b.target.nodeType && (b.target = b.target.parentNode), b.metaKey = !!b.metaKey, a.filter ? a.filter(b, f) : b
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(a, b) {
          return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(b, g) {
          var d, c, e, f = g.button,
            a = g.fromElement;
          return null == b.pageX && null != g.clientX && (c = b.target.ownerDocument || bY, e = c.documentElement, d = c.body, b.pageX = g.clientX + (e && e.scrollLeft || d && d.scrollLeft || 0) - (e && e.clientLeft || d && d.clientLeft || 0), b.pageY = g.clientY + (e && e.scrollTop || d && d.scrollTop || 0) - (e && e.clientTop || d && d.clientTop || 0)), !b.relatedTarget && a && (b.relatedTarget = a === b.target ? g.toElement : a), b.which || void(0) === f || (b.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), b
        }
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            if (this !== bW() && this.focus) {
              try {
                return this.focus(), !1
              } catch (F) {}
            }
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            return this === bW() && this.blur ? (this.blur(), !1) : void(0)
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            return bR.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void(0)
          },
          _default: function(a) {
            return bR.nodeName(a.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(a) {
            void(0) !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
          }
        }
      },
      simulate: function(a, e, c, b) {
        var d = bR.extend(new bR.Event, c, {
          type: a,
          isSimulated: !0,
          originalEvent: {}
        });
        b ? bR.event.trigger(d, null, e) : bR.event.dispatch.call(e, d), d.isDefaultPrevented() && c.preventDefault()
      }
    }, bR.removeEvent = bY.removeEventListener ? function(a, c, b) {
      a.removeEventListener && a.removeEventListener(c, b, !1)
    } : function(a, d, c) {
      var b = "on" + d;
      a.detachEvent && (typeof a[b] === bs && (a[b] = null), a.detachEvent(b, c))
    }, bR.Event = function(a, b) {
      return this instanceof bR.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void(0) === a.defaultPrevented && a.returnValue === !1 ? Y : M) : this.type = a, b && bR.extend(this, b), this.timeStamp = a && a.timeStamp || bR.now(), void((this[bR.expando] = !0))) : new bR.Event(a, b)
    }, bR.Event.prototype = {
      isDefaultPrevented: M,
      isPropagationStopped: M,
      isImmediatePropagationStopped: M,
      preventDefault: function() {
        var a = this.originalEvent;
        this.isDefaultPrevented = Y, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
      },
      stopPropagation: function() {
        var a = this.originalEvent;
        this.isPropagationStopped = Y, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
      },
      stopImmediatePropagation: function() {
        var a = this.originalEvent;
        this.isImmediatePropagationStopped = Y, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
      }
    }, bR.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(a, b) {
      bR.event.special[a] = {
        delegateType: b,
        bindType: b,
        handle: function(a) {
          var d, c = this,
            e = a.relatedTarget,
            f = a.handleObj;
          return (!e || e !== c && !bR.contains(c, e)) && (a.type = f.origType, d = f.handler.apply(this, arguments), a.type = b), d
        }
      }
    }), bK.submitBubbles || (bR.event.special.submit = {
      setup: function() {
        return bR.nodeName(this, "form") ? !1 : void(bR).event.add(this, "click._submit keypress._submit", function(a) {
          var c = a.target,
            b = bR.nodeName(c, "input") || bR.nodeName(c, "button") ? c.form : void(0);
          b && !bR._data(b, "submitBubbles") && (bR.event.add(b, "submit._submit", function(a) {
            a._submit_bubble = !0
          }), bR._data(b, "submitBubbles", !0))
        })
      },
      postDispatch: function(a) {
        a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && bR.event.simulate("submit", this.parentNode, a, !0))
      },
      teardown: function() {
        return bR.nodeName(this, "form") ? !1 : void(bR).event.remove(this, "._submit")
      }
    }), bK.changeBubbles || (bR.event.special.change = {
      setup: function() {
        return C.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (bR.event.add(this, "propertychange._change", function(a) {
          "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
        }), bR.event.add(this, "click._change", function(a) {
          this._just_changed && !a.isTrigger && (this._just_changed = !1), bR.event.simulate("change", this, a, !0)
        })), !1) : void(bR).event.add(this, "beforeactivate._change", function(a) {
          var b = a.target;
          C.test(b.nodeName) && !bR._data(b, "changeBubbles") && (bR.event.add(b, "change._change", function(a) {
            !this.parentNode || a.isSimulated || a.isTrigger || bR.event.simulate("change", this.parentNode, a, !0)
          }), bR._data(b, "changeBubbles", !0))
        })
      },
      handle: function(a) {
        var b = a.target;
        return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void(0)
      },
      teardown: function() {
        return bR.event.remove(this, "._change"), !C.test(this.nodeName)
      }
    }), bK.focusinBubbles || bR.each({
      focus: "focusin",
      blur: "focusout"
    }, function(a, c) {
      var b = function(a) {
        bR.event.simulate(c, a.target, bR.event.fix(a), !0)
      };
      bR.event.special[c] = {
        setup: function() {
          var d = this.ownerDocument || this,
            e = bR._data(d, c);
          e || d.addEventListener(a, b, !0), bR._data(d, c, (e || 0) + 1)
        },
        teardown: function() {
          var d = this.ownerDocument || this,
            e = bR._data(d, c) - 1;
          e ? bR._data(d, c, e) : (d.removeEventListener(a, b, !0), bR._removeData(d, c))
        }
      }
    }), bR.fn.extend({
      on: function(b, g, d, c, e) {
        var f, a;
        if ("object" == typeof b) {
          "string" != typeof g && (d = d || g, g = void(0));
          for (f in b) {
            this.on(f, g, d, b[f], e)
          };
          return this
        };
        if (null == d && null == c ? (c = g, d = g = void(0)) : null == c && ("string" == typeof g ? (c = d, d = void(0)) : (c = d, d = g, g = void(0))), c === !1) {
          c = M
        } else {
          if (!c) {
            return this
          }
        };
        return 1 === e && (a = c, c = function(b) {
          return bR().off(b), a.apply(this, arguments)
        }, c.guid = a.guid || (a.guid = bR.guid++)), this.each(function() {
          bR.event.add(this, b, c, d, g)
        })
      },
      one: function(a, d, c, b) {
        return this.on(a, d, c, b, 1)
      },
      off: function(a, e, c) {
        var b, d;
        if (a && a.preventDefault && a.handleObj) {
          return b = a.handleObj, bR(a.delegateTarget).off(b.namespace ? b.origType + "." + b.namespace : b.origType, b.selector, b.handler), this
        };
        if ("object" == typeof a) {
          for (d in a) {
            this.off(d, e, a[d])
          };
          return this
        };
        return (e === !1 || "function" == typeof e) && (c = e, e = void(0)), c === !1 && (c = M), this.each(function() {
          bR.event.remove(this, a, c, e)
        })
      },
      trigger: function(a, b) {
        return this.each(function() {
          bR.event.trigger(a, b, this)
        })
      },
      triggerHandler: function(a, c) {
        var b = this[0];
        return b ? bR.event.trigger(a, c, b, !0) : void(0)
      }
    });
    var P = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      bZ = / jQuery\d+="(?:null|\d+)"/g,
      dh = new RegExp("<(?:" + P + ")[\s/>]", "i"),
      e = /^\s+/,
      bS = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      $e = /<([\w:]+)/,
      ce = /<tbody/i,
      cl = /<|&#?\w+;/,
      cR = /<(?:script|style|link)/i,
      cX = /checked\s*(?:[^=]|=\s*.checked.)/i,
      cL = /^$|\/(?:java|ecma)script/i,
      dc = /^true\/(.*)/,
      cF = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      V = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: bK.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
      },
      bt = bC(bY),
      bn = bt.appendChild(bY.createElement("div"));
    V.optgroup = V.option, V.tbody = V.tfoot = V.colgroup = V.caption = V.thead, V.th = V.td, bR.extend({
      clone: function(b, h, d) {
        var c, e, f, a, g, i = bR.contains(b.ownerDocument, b);
        if (bK.html5Clone || bR.isXMLDoc(b) || !dh.test("<" + b.nodeName + ">") ? f = b.cloneNode(!0) : (bn.innerHTML = b.outerHTML, bn.removeChild(f = bn.firstChild)), !(bK.noCloneEvent && bK.noCloneChecked || 1 !== b.nodeType && 11 !== b.nodeType || bR.isXMLDoc(b))) {
          for (c = S(f), g = S(b), a = 0; null != (e = g[a]); ++a) {
            c[a] && bq(e, c[a])
          }
        };
        if (h) {
          if (d) {
            for (g = g || S(b), c = c || S(f), a = 0; null != (e = g[a]); a++) {
              u(e, c[a])
            }
          } else {
            u(b, f)
          }
        };
        return c = S(f, "script"), c.length > 0 && cU(c, !i && S(b, "script")), c = g = e = null, f
      },
      buildFragment: function(f, p, k, i) {
        for (var l, n, a, o, q, c, j, d = f.length, h = bC(p), g = [], m = 0; d > m; m++) {
          if (n = f[m], n || 0 === n) {
            if ("object" === bR.type(n)) {
              bR.merge(g, n.nodeType ? [n] : n)
            } else {
              if (cl.test(n)) {
                for (o = o || h.appendChild(p.createElement("div")), q = ($e.exec(n) || ["", ""])[1].toLowerCase(), j = V[q] || V._default, o.innerHTML = j[1] + n.replace(bS, "<$1></$2>") + j[2], l = j[0]; l--;) {
                  o = o.lastChild
                };
                if (!bK.leadingWhitespace && e.test(n) && g.push(p.createTextNode(e.exec(n)[0])), !bK.tbody) {
                  for (n = "table" !== q || ce.test(n) ? "<table>" !== j[1] || ce.test(n) ? 0 : o : o.firstChild, l = n && n.childNodes.length; l--;) {
                    bR.nodeName(c = n.childNodes[l], "tbody") && !c.childNodes.length && n.removeChild(c)
                  }
                };
                for (bR.merge(g, o.childNodes), o.textContent = ""; o.firstChild;) {
                  o.removeChild(o.firstChild)
                };
                o = h.lastChild
              } else {
                g.push(p.createTextNode(n))
              }
            }
          }
        };
        for (o && h.removeChild(o), bK.appendChecked || bR.grep(S(g, "input"), cI), m = 0; n = g[m++];) {
          if ((!i || -1 === bR.inArray(n, i)) && (a = bR.contains(n.ownerDocument, n), o = S(h.appendChild(n), "script"), a && cU(o), k)) {
            for (l = 0; n = o[l++];) {
              cL.test(n.type || "") && k.push(n)
            }
          }
        };
        return o = null, h
      },
      cleanData: function(c, j) {
        for (var f, d, g, h, a = 0, i = bR.expando, k = bR.cache, b = bK.deleteExpando, e = bR.event.special; null != (f = c[a]); a++) {
          if ((j || bR.acceptData(f)) && (g = f[i], h = g && k[g])) {
            if (h.events) {
              for (d in h.events) {
                e[d] ? bR.event.remove(f, d) : bR.removeEvent(f, d, h.handle)
              }
            };
            k[g] && (delete k[g], b ? delete f[i] : typeof f.removeAttribute !== bs ? f.removeAttribute(i) : f[i] = null, cD.push(g))
          }
        }
      }
    }), bR.fn.extend({
      text: function(a) {
        return bF(this, function(a) {
          return void(0) === a ? bR.text(this) : this.empty().append((this[0] && this[0].ownerDocument || bY).createTextNode(a))
        }, null, a, arguments.length)
      },
      append: function() {
        return this.domManip(arguments, function(a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = cZ(this, a);
            b.appendChild(a)
          }
        })
      },
      prepend: function() {
        return this.domManip(arguments, function(a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = cZ(this, a);
            b.insertBefore(a, b.firstChild)
          }
        })
      },
      before: function() {
        return this.domManip(arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this)
        })
      },
      after: function() {
        return this.domManip(arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
        })
      },
      remove: function(a, e) {
        for (var c, b = a ? bR.filter(a, this) : this, d = 0; null != (c = b[d]); d++) {
          e || 1 !== c.nodeType || bR.cleanData(S(c)), c.parentNode && (e && bR.contains(c.ownerDocument, c) && cU(S(c, "script")), c.parentNode.removeChild(c))
        };
        return this
      },
      empty: function() {
        for (var a, b = 0; null != (a = this[b]); b++) {
          for (1 === a.nodeType && bR.cleanData(S(a, !1)); a.firstChild;) {
            a.removeChild(a.firstChild)
          };
          a.options && bR.nodeName(a, "select") && (a.options.length = 0)
        };
        return this
      },
      clone: function(a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
          return bR.clone(this, a, b)
        })
      },
      html: function(a) {
        return bF(this, function(a) {
          var f = this[0] || {},
            d = 0,
            c = this.length;
          if (void(0) === a) {
            return 1 === f.nodeType ? f.innerHTML.replace(bZ, "") : void(0)
          };
          if (!("string" != typeof a || cR.test(a) || !bK.htmlSerialize && dh.test(a) || !bK.leadingWhitespace && e.test(a) || V[($e.exec(a) || ["", ""])[1].toLowerCase()])) {
            a = a.replace(bS, "<$1></$2>");
            try {
              for (; c > d; d++) {
                f = this[d] || {}, 1 === f.nodeType && (bR.cleanData(S(f, !1)), f.innerHTML = a)
              };
              f = 0
            } catch (bP) {}
          };
          f && this.empty().append(a)
        }, null, a, arguments.length)
      },
      replaceWith: function() {
        var a = arguments[0];
        return this.domManip(arguments, function(b) {
          a = this.parentNode, bR.cleanData(S(this)), a && a.replaceChild(b, this)
        }), a && (a.length || a.nodeType) ? this : this.remove()
      },
      detach: function(a) {
        return this.remove(a, !0)
      },
      domManip: function(d, m) {
        d = br.apply([], d);
        var i, g, j, k, a, l, o = 0,
          b = this.length,
          h = this,
          c = b - 1,
          f = d[0],
          e = bR.isFunction(f);
        if (e || b > 1 && "string" == typeof f && !bK.checkClone && cX.test(f)) {
          return this.each(function(b) {
            var a = h.eq(b);
            e && (d[0] = f.call(this, b, a.html())), a.domManip(d, m)
          })
        };
        if (b && (l = bR.buildFragment(d, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
          for (k = bR.map(S(l, "script"), cO), j = k.length; b > o; o++) {
            g = l, o !== c && (g = bR.clone(g, !0, !0), j && bR.merge(k, S(g, "script"))), m.call(this[o], g, o)
          };
          if (j) {
            for (a = k[k.length - 1].ownerDocument, bR.map(k, n), o = 0; j > o; o++) {
              g = k[o], cL.test(g.type || "") && !bR._data(g, "globalEval") && bR.contains(a, g) && (g.src ? bR._evalUrl && bR._evalUrl(g.src) : bR.globalEval((g.text || g.textContent || g.innerHTML || "").replace(cF, "")))
            }
          };
          l = i = null
        };
        return this
      }
    }), bR.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(a, b) {
      bR.fn[a] = function(c) {
        for (var e, d = 0, f = [], g = bR(c), a = g.length - 1; a >= d; d++) {
          e = d === a ? this : this.clone(!0), bR(g[d])[b](e), bl.apply(f, e.get())
        };
        return this.pushStack(f)
      }
    });
    var cf, di = {};
    ! function() {
      var a;
      bK.shrinkWrapBlocks = function() {
        if (null != a) {
          return a
        };
        a = !1;
        var d, c, b;
        return c = bY.getElementsByTagName("body")[0], c && c.style ? (d = bY.createElement("div"), b = bY.createElement("div"), b.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(b).appendChild(d), typeof d.style.zoom !== bs && (d.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", d.appendChild(bY.createElement("div")).style.width = "5px", a = 3 !== d.offsetWidth), c.removeChild(b), a) : void(0)
      }
    }();
    var K, cA, bN = /^margin/,
      bi = new RegExp("^(" + cs + ")(?!px)[a-z%]+$", "i"),
      bU = /^(top|right|bottom|left)$/;
    F.getComputedStyle ? (K = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
      }, cA = function(b, h, d) {
        var c, e, f, a, g = b.style;
        return d = d || K(b), a = d ? d.getPropertyValue(h) || d[h] : void(0), d && ("" !== a || bR.contains(b.ownerDocument, b) || (a = bR.style(b, h)), bi.test(a) && bN.test(h) && (c = g.width, e = g.minWidth, f = g.maxWidth, g.minWidth = g.maxWidth = g.width = a, a = d.width, g.width = c, g.minWidth = e, g.maxWidth = f)), void(0) === a ? a : a + ""
      }) : bY.documentElement.currentStyle && (K = function(a) {
        return a.currentStyle
      }, cA = function(b, h, d) {
        var c, e, f, a, g = b.style;
        return d = d || K(b), a = d ? d[h] : void(0), null == a && g && g[h] && (a = g[h]), bi.test(a) && !bU.test(h) && (c = g.left, e = b.runtimeStyle, f = e && e.left, f && (e.left = b.currentStyle.left), g.left = "fontSize" === h ? "1em" : a, a = g.pixelLeft + "px", g.left = c, f && (e.left = f)), void(0) === a ? a : a + "" || "auto"
      }),
      function() {
        function g() {
          var g, c, b, d;
          c = bY.getElementsByTagName("body")[0], c && c.style && (g = bY.createElement("div"), b = bY.createElement("div"), b.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(b).appendChild(g), g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = a = !1, h = !0, F.getComputedStyle && (e = "1%" !== (F.getComputedStyle(g, null) || {}).top, a = "4px" === (F.getComputedStyle(g, null) || {
            width: "4px"
          }).width, d = g.appendChild(bY.createElement("div")), d.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", d.style.marginRight = d.style.width = "0", g.style.width = "1px", h = !parseFloat((F.getComputedStyle(d, null) || {}).marginRight)), g.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", d = g.getElementsByTagName("td"), d[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === d[0].offsetHeight, f && (d[0].style.display = "", d[1].style.display = "none", f = 0 === d[0].offsetHeight), c.removeChild(b))
        }
        var c, b, d, e, a, f, h;
        c = bY.createElement("div"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = c.getElementsByTagName("a")[0], b = d && d.style, b && (b.cssText = "float:left;opacity:.5", bK.opacity = "0.5" === b.opacity, bK.cssFloat = !!b.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", bK.clearCloneStyle = "content-box" === c.style.backgroundClip, bK.boxSizing = "" === b.boxSizing || "" === b.MozBoxSizing || "" === b.WebkitBoxSizing, bR.extend(bK, {
          reliableHiddenOffsets: function() {
            return null == f && g(), f
          },
          boxSizingReliable: function() {
            return null == a && g(), a
          },
          pixelPosition: function() {
            return null == e && g(), e
          },
          reliableMarginRight: function() {
            return null == h && g(), h
          }
        }))
      }(), bR.swap = function(b, g, d, c) {
        var e, f, a = {};
        for (f in g) {
          a[f] = b.style[f], b.style[f] = g[f]
        };
        e = d.apply(b, c || []);
        for (f in g) {
          b.style[f] = a[f]
        };
        return e
      };
    var cn = /alpha\([^)]*\)/i,
      l = /opacity\s*=\s*([^)]*)/,
      ct = /^(none|table(?!-c[ea]).+)/,
      cG = new RegExp("^(" + cs + ")(.*)$", "i"),
      x = new RegExp("^([+-])=(" + cs + ")", "i"),
      bA = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      D = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      bc = ["Webkit", "O", "Moz", "ms"];
    bR.extend({
      cssHooks: {
        opacity: {
          get: function(a, c) {
            if (c) {
              var b = cA(a, "opacity");
              return "" === b ? "1" : b
            }
          }
        }
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        "float": bK.cssFloat ? "cssFloat" : "styleFloat"
      },
      style: function(b, h, d, c) {
        if (b && 3 !== b.nodeType && 8 !== b.nodeType && b.style) {
          var e, f, a, g = bR.camelCase(h),
            i = b.style;
          if (h = bR.cssProps[g] || (bR.cssProps[g] = bx(i, g)), a = bR.cssHooks[h] || bR.cssHooks[g], void(0) === d) {
            return a && "get" in a && void(0) !== (e = a.get(b, !1, c)) ? e : i[h]
          };
          if (f = typeof d, "string" === f && (e = x.exec(d)) && (d = (e[1] + 1) * e[2] + parseFloat(bR.css(b, h)), f = "number"), null != d && d === d && ("number" !== f || bR.cssNumber[g] || (d += "px"), bK.clearCloneStyle || "" !== d || 0 !== h.indexOf("background") || (i[h] = "inherit"), !(a && "set" in a && void(0) === (d = a.set(b, d, c))))) {
            try {
              i[h] = d
            } catch (t) {}
          }
        }
      },
      css: function(b, h, d, c) {
        var e, f, a, g = bR.camelCase(h);
        return h = bR.cssProps[g] || (bR.cssProps[g] = bx(b.style, g)), a = bR.cssHooks[h] || bR.cssHooks[g], a && "get" in a && (f = a.get(b, !0, d)), void(0) === f && (f = cA(b, h, c)), "normal" === f && h in D && (f = D[h]), "" === d || d ? (e = parseFloat(f), d === !0 || bR.isNumeric(e) ? e || 0 : f) : f
      }
    }), bR.each(["height", "width"], function(a, b) {
      bR.cssHooks[b] = {
        get: function(a, d, c) {
          return d ? ct.test(bR.css(a, "display")) && 0 === a.offsetWidth ? bR.swap(a, bA, function() {
            return A(a, b, c)
          }) : A(a, b, c) : void(0)
        },
        set: function(a, d, c) {
          var e = c && K(a);
          return bD(a, d, c ? h(a, b, c, bK.boxSizing && "border-box" === bR.css(a, "boxSizing", !1, e), e) : 0)
        }
      }
    }), bK.opacity || (bR.cssHooks.opacity = {
      get: function(a, b) {
        return l.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
      },
      set: function(a, f) {
        var c = a.style,
          b = a.currentStyle,
          d = bR.isNumeric(f) ? "alpha(opacity=" + 100 * f + ")" : "",
          e = b && b.filter || c.filter || "";
        c.zoom = 1, (f >= 1 || "" === f) && "" === bR.trim(e.replace(cn, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === f || b && !b.filter) || (c.filter = cn.test(e) ? e.replace(cn, d) : e + " " + d)
      }
    }), bR.cssHooks.marginRight = cq(bK.reliableMarginRight, function(a, b) {
      return b ? bR.swap(a, {
        display: "inline-block"
      }, cA, [a, "marginRight"]) : void(0)
    }), bR.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(a, b) {
      bR.cssHooks[a + b] = {
        expand: function(d) {
          for (var c = 0, e = {}, f = "string" == typeof d ? d.split(" ") : [d]; 4 > c; c++) {
            e[a + bz[c] + b] = f[c] || f[c - 2] || f[0]
          };
          return e
        }
      }, bN.test(a) || (bR.cssHooks[a + b].set = bD)
    }), bR.fn.extend({
      css: function(a, b) {
        return bF(this, function(b, g, d) {
          var c, e, f = {},
            a = 0;
          if (bR.isArray(g)) {
            for (c = K(b), e = g.length; e > a; a++) {
              f[g[a]] = bR.css(b, g[a], !1, c)
            };
            return f
          };
          return void(0) !== d ? bR.style(b, g, d) : bR.css(b, g)
        }, a, b, arguments.length > 1)
      },
      show: function() {
        return bJ(this, !0)
      },
      hide: function() {
        return bJ(this)
      },
      toggle: function(a) {
        return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
          bL(this) ? bR(this).show() : bR(this).hide()
        })
      }
    }), bR.Tween = o, o.prototype = {
      constructor: o,
      init: function(a, f, c, b, d, e) {
        this.elem = a, this.prop = c, this.easing = d || "swing", this.options = f, this.start = this.now = this.cur(), this.end = b, this.unit = e || (bR.cssNumber[c] ? "" : "px")
      },
      cur: function() {
        var a = o.propHooks[this.prop];
        return a && a.get ? a.get(this) : o.propHooks._default.get(this)
      },
      run: function(a) {
        var c, b = o.propHooks[this.prop];
        return this.pos = c = this.options.duration ? bR.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), b && b.set ? b.set(this) : o.propHooks._default.set(this), this
      }
    }, o.prototype.init.prototype = o.prototype, o.propHooks = {
      _default: {
        get: function(a) {
          var b;
          return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = bR.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
        },
        set: function(a) {
          bR.fx.step[a.prop] ? bR.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[bR.cssProps[a.prop]] || bR.cssHooks[a.prop]) ? bR.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
        }
      }
    }, o.propHooks.scrollTop = o.propHooks.scrollLeft = {
      set: function(a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
      }
    }, bR.easing = {
      linear: function(a) {
        return a
      },
      swing: function(a) {
        return 0.5 - Math.cos(a * Math.PI) / 2
      }
    }, bR.fx = o.prototype.init, bR.fx.step = {};
    var Q, ca, bG = /^(?:toggle|show|hide)$/,
      W = new RegExp("^(?:([+-])=|)(" + cs + ")([a-z%]*)$", "i"),
      cM = /queueHooks$/,
      dd = [N],
      cS = {
        "*": [function(b, h) {
          var d = this.createTween(b, h),
            c = d.cur(),
            e = W.exec(h),
            f = e && e[3] || (bR.cssNumber[b] ? "" : "px"),
            a = (bR.cssNumber[b] || "px" !== f && +c) && W.exec(bR.css(d.elem, b)),
            g = 1,
            i = 20;
          if (a && a[3] !== f) {
            f = f || a[3], e = e || [], a = +c || 1;
            do {
              g = g || ".5", a /= g, bR.style(d.elem, b, a + f)
            } while (g !== (g = d.cur() / c) && 1 !== g && --i);
          };
          return e && (a = d.start = +a || +c || 0, d.unit = f, d.end = e[1] ? a + (e[1] + 1) * e[2] : +e[2]), d
        }]
      };
    bR.Animation = bR.extend(df, {
        tweener: function(a, e) {
          bR.isFunction(a) ? (e = a, a = ["*"]) : a = a.split(" ");
          for (var c, b = 0, d = a.length; d > b; b++) {
            c = a[b], cS[c] = cS[c] || [], cS[c].unshift(e)
          }
        },
        prefilter: function(a, b) {
          b ? dd.unshift(a) : dd.push(a)
        }
      }), bR.speed = function(a, d, c) {
        var b = a && "object" == typeof a ? bR.extend({}, a) : {
          complete: c || !c && d || bR.isFunction(a) && a,
          duration: a,
          easing: c && d || d && !bR.isFunction(d) && d
        };
        return b.duration = bR.fx.off ? 0 : "number" == typeof b.duration ? b.duration : b.duration in bR.fx.speeds ? bR.fx.speeds[b.duration] : bR.fx.speeds._default, (null == b.queue || b.queue === !0) && (b.queue = "fx"), b.old = b.complete, b.complete = function() {
          bR.isFunction(b.old) && b.old.call(this), b.queue && bR.dequeue(this, b.queue)
        }, b
      }, bR.fn.extend({
        fadeTo: function(a, d, c, b) {
          return this.filter(bL).css("opacity", 0).show().end().animate({
            opacity: d
          }, a, c, b)
        },
        animate: function(b, g, d, c) {
          var e = bR.isEmptyObject(b),
            f = bR.speed(g, d, c),
            a = function() {
              var a = df(this, bR.extend({}, b), f);
              (e || bR._data(this, "finish")) && a.stop(!0)
            };
          return a.finish = a, e || f.queue === !1 ? this.each(a) : this.queue(f.queue, a)
        },
        stop: function(a, d, c) {
          var b = function(a) {
            var b = a.stop;
            delete a.stop, b(c)
          };
          return "string" != typeof a && (c = d, d = a, a = void(0)), d && a !== !1 && this.queue(a || "fx", []), this.each(function() {
            var g = !0,
              e = null != a && a + "queueHooks",
              f = bR.timers,
              d = bR._data(this);
            if (e) {
              d[e] && d[e].stop && b(d[e])
            } else {
              for (e in d) {
                d[e] && d[e].stop && cM.test(e) && b(d[e])
              }
            };
            for (e = f.length; e--;) {
              f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), g = !1, f.splice(e, 1))
            };
            (g || !c) && bR.dequeue(this, a)
          })
        },
        finish: function(a) {
          return a !== !1 && (a = a || "fx"), this.each(function() {
            var g, d = bR._data(this),
              c = d[a + "queue"],
              e = d[a + "queueHooks"],
              f = bR.timers,
              b = c ? c.length : 0;
            for (d.finish = !0, bR.queue(this, a, []), e && e.stop && e.stop.call(this, !0), g = f.length; g--;) {
              f[g].elem === this && f[g].queue === a && (f[g].anim.stop(!0), f.splice(g, 1))
            };
            for (g = 0; b > g; g++) {
              c[g] && c[g].finish && c[g].finish.call(this)
            };
            delete d.finish
          })
        }
      }), bR.each(["toggle", "show", "hide"], function(a, c) {
        var b = bR.fn[c];
        bR.fn[c] = function(a, d, e) {
          return null == a || "boolean" == typeof a ? b.apply(this, arguments) : this.animate(Z(c, !0), a, d, e)
        }
      }), bR.each({
        slideDown: Z("show"),
        slideUp: Z("hide"),
        slideToggle: Z("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(a, b) {
        bR.fn[a] = function(a, d, c) {
          return this.animate(b, a, d, c)
        }
      }), bR.timers = [], bR.fx.tick = function() {
        var a, c = bR.timers,
          b = 0;
        for (Q = bR.now(); b < c.length; b++) {
          a = c[b], a() || c[b] !== a || c.splice(b--, 1)
        };
        c.length || bR.fx.stop(), Q = void(0)
      }, bR.fx.timer = function(a) {
        bR.timers.push(a), a() ? bR.fx.start() : bR.timers.pop()
      }, bR.fx.interval = 13, bR.fx.start = function() {
        ca || (ca = setInterval(bR.fx.tick, bR.fx.interval))
      }, bR.fx.stop = function() {
        clearInterval(ca), ca = null
      }, bR.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, bR.fn.delay = function(a, b) {
        return a = bR.fx ? bR.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(d, c) {
          var b = setTimeout(d, a);
          c.stop = function() {
            clearTimeout(b)
          }
        })
      },
      function() {
        var a, e, c, b, d;
        e = bY.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = e.getElementsByTagName("a")[0], c = bY.createElement("select"), d = c.appendChild(bY.createElement("option")), a = e.getElementsByTagName("input")[0], b.style.cssText = "top:1px", bK.getSetAttribute = "t" !== e.className, bK.style = /top/.test(b.getAttribute("style")), bK.hrefNormalized = "/a" === b.getAttribute("href"), bK.checkOn = !!a.value, bK.optSelected = d.selected, bK.enctype = !!bY.createElement("form").enctype, c.disabled = !0, bK.optDisabled = !d.disabled, a = bY.createElement("input"), a.setAttribute("value", ""), bK.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), bK.radioValue = "t" === a.value
      }();
    var r = /\r/g;
    bR.fn.extend({
      val: function(a) {
        var e, c, b, d = this[0]; {
          if (arguments.length) {
            return b = bR.isFunction(a), this.each(function(c) {
              var d;
              1 === this.nodeType && (d = b ? a.call(this, c, bR(this).val()) : a, null == d ? d = "" : "number" == typeof d ? d += "" : bR.isArray(d) && (d = bR.map(d, function(a) {
                return null == a ? "" : a + ""
              })), e = bR.valHooks[this.type] || bR.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void(0) !== e.set(this, d, "value") || (this.value = d))
            })
          };
          if (d) {
            return e = bR.valHooks[d.type] || bR.valHooks[d.nodeName.toLowerCase()], e && "get" in e && void(0) !== (c = e.get(d, "value")) ? c : (c = d.value, "string" == typeof c ? c.replace(r, "") : null == c ? "" : c)
          }
        }
      }
    }), bR.extend({
      valHooks: {
        option: {
          get: function(a) {
            var b = bR.find.attr(a, "value");
            return null != b ? b : bR.trim(bR.text(a))
          }
        },
        select: {
          get: function(b) {
            for (var h, d, c = b.options, e = b.selectedIndex, f = "select-one" === b.type || 0 > e, a = f ? null : [], g = f ? e + 1 : c.length, i = 0 > e ? g : f ? e : 0; g > i; i++) {
              if (d = c[i], !(!d.selected && i !== e || (bK.optDisabled ? d.disabled : null !== d.getAttribute("disabled")) || d.parentNode.disabled && bR.nodeName(d.parentNode, "optgroup"))) {
                if (h = bR(d).val(), f) {
                  return h
                };
                a.push(h)
              }
            };
            return a
          },
          set: function(b, g) {
            for (var d, c, e = b.options, f = bR.makeArray(g), a = e.length; a--;) {
              if (c = e[a], bR.inArray(bR.valHooks.option.get(c), f) >= 0) {
                try {
                  c.selected = d = !0
                } catch (cp) {
                  c.scrollHeight
                }
              } else {
                c.selected = !1
              }
            };
            return d || (b.selectedIndex = -1), e
          }
        }
      }
    }), bR.each(["radio", "checkbox"], function() {
      bR.valHooks[this] = {
        set: function(a, b) {
          return bR.isArray(b) ? a.checked = bR.inArray(bR(a).val(), b) >= 0 : void(0)
        }
      }, bK.checkOn || (bR.valHooks[this].get = function(a) {
        return null === a.getAttribute("value") ? "on" : a.value
      })
    });
    var cY, y, bu = bR.expr.attrHandle,
      cB = /^(?:checked|selected)$/i,
      L = bK.getSetAttribute,
      cu = bK.input;
    bR.fn.extend({
      attr: function(a, b) {
        return bF(this, bR.attr, a, b, arguments.length > 1)
      },
      removeAttr: function(a) {
        return this.each(function() {
          bR.removeAttr(this, a)
        })
      }
    }), bR.extend({
      attr: function(a, f, c) {
        var b, d, e = a.nodeType;
        if (a && 3 !== e && 8 !== e && 2 !== e) {
          return typeof a.getAttribute === bs ? bR.prop(a, f, c) : (1 === e && bR.isXMLDoc(a) || (f = f.toLowerCase(), b = bR.attrHooks[f] || (bR.expr.match.bool.test(f) ? y : cY)), void(0) === c ? b && "get" in b && null !== (d = b.get(a, f)) ? d : (d = bR.find.attr(a, f), null == d ? void(0) : d) : null !== c ? b && "set" in b && void(0) !== (d = b.set(a, c, f)) ? d : (a.setAttribute(f, c + ""), c) : void(bR).removeAttr(a, f))
        }
      },
      removeAttr: function(a, f) {
        var c, b, d = 0,
          e = f && f.match(cQ);
        if (e && 1 === a.nodeType) {
          for (; c = e[d++];) {
            b = bR.propFix[c] || c, bR.expr.match.bool.test(c) ? cu && L || !cB.test(c) ? a[b] = !1 : a[bR.camelCase("default-" + c)] = a[b] = !1 : bR.attr(a, c, ""), a.removeAttribute(L ? c : b)
          }
        }
      },
      attrHooks: {
        type: {
          set: function(a, c) {
            if (!bK.radioValue && "radio" === c && bR.nodeName(a, "input")) {
              var b = a.value;
              return a.setAttribute("type", c), b && (a.value = b), c
            }
          }
        }
      }
    }), y = {
      set: function(a, c, b) {
        return c === !1 ? bR.removeAttr(a, b) : cu && L || !cB.test(b) ? a.setAttribute(!L && bR.propFix[b] || b, b) : a[bR.camelCase("default-" + b)] = a[b] = !0, b
      }
    }, bR.each(bR.expr.match.bool.source.match(/\w+/g), function(a, c) {
      var b = bu[c] || bR.find.attr;
      bu[c] = cu && L || !cB.test(c) ? function(a, f, c) {
        var d, e;
        return c || (e = bu[f], bu[f] = d, d = null != b(a, f, c) ? f.toLowerCase() : null, bu[f] = e), d
      } : function(a, c, b) {
        return b ? void(0) : a[bR.camelCase("default-" + c)] ? c.toLowerCase() : null
      }
    }), cu && L || (bR.attrHooks.value = {
      set: function(a, c, b) {
        return bR.nodeName(a, "input") ? void((a.defaultValue = c)) : cY && cY.set(a, c, b)
      }
    }), L || (cY = {
      set: function(a, d, c) {
        var b = a.getAttributeNode(c);
        return b || a.setAttributeNode(b = a.ownerDocument.createAttribute(c)), b.value = d += "", "value" === c || d === a.getAttribute(c) ? d : void(0)
      }
    }, bu.id = bu.name = bu.coords = function(a, d, c) {
      var b;
      return c ? void(0) : (b = a.getAttributeNode(d)) && "" !== b.value ? b.value : null
    }, bR.valHooks.button = {
      get: function(a, c) {
        var b = a.getAttributeNode(c);
        return b && b.specified ? b.value : void(0)
      },
      set: cY.set
    }, bR.attrHooks.contenteditable = {
      set: function(a, c, b) {
        cY.set(a, "" === c ? !1 : c, b)
      }
    }, bR.each(["width", "height"], function(a, b) {
      bR.attrHooks[b] = {
        set: function(a, c) {
          return "" === c ? (a.setAttribute(b, "auto"), c) : void(0)
        }
      }
    })), bK.style || (bR.attrHooks.style = {
      get: function(a) {
        return a.style.cssText || void(0)
      },
      set: function(a, b) {
        return a.style.cssText = b + ""
      }
    });
    var bB = /^(?:input|select|textarea|button|object)$/i,
      bO = /^(?:a|area)$/i;
    bR.fn.extend({
      prop: function(a, b) {
        return bF(this, bR.prop, a, b, arguments.length > 1)
      },
      removeProp: function(a) {
        return a = bR.propFix[a] || a, this.each(function() {
          try {
            this[a] = void(0), delete this[a]
          } catch (cv) {}
        })
      }
    }), bR.extend({
      propFix: {
        "for": "htmlFor",
        "class": "className"
      },
      prop: function(b, g, d) {
        var c, e, f, a = b.nodeType;
        if (b && 3 !== a && 8 !== a && 2 !== a) {
          return f = 1 !== a || !bR.isXMLDoc(b), f && (g = bR.propFix[g] || g, e = bR.propHooks[g]), void(0) !== d ? e && "set" in e && void(0) !== (c = e.set(b, d, g)) ? c : b[g] = d : e && "get" in e && null !== (c = e.get(b, g)) ? c : b[g]
        }
      },
      propHooks: {
        tabIndex: {
          get: function(a) {
            var b = bR.find.attr(a, "tabindex");
            return b ? parseInt(b, 10) : bB.test(a.nodeName) || bO.test(a.nodeName) && a.href ? 0 : -1
          }
        }
      }
    }), bK.hrefNormalized || bR.each(["href", "src"], function(a, b) {
      bR.propHooks[b] = {
        get: function(a) {
          return a.getAttribute(b, 4)
        }
      }
    }), bK.optSelected || (bR.propHooks.selected = {
      get: function(a) {
        var b = a.parentNode;
        return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
      }
    }), bR.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      bR.propFix[this.toLowerCase()] = this
    }), bK.enctype || (bR.propFix.enctype = "encoding");
    var bH = /[\t\r\n\f]/g;
    bR.fn.extend({
      addClass: function(c) {
        var i, e, d, f, g, a, h = 0,
          j = this.length,
          b = "string" == typeof c && c;
        if (bR.isFunction(c)) {
          return this.each(function(a) {
            bR(this).addClass(c.call(this, a, this.className))
          })
        };
        if (b) {
          for (i = (c || "").match(cQ) || []; j > h; h++) {
            if (e = this[h], d = 1 === e.nodeType && (e.className ? (" " + e.className + " ").replace(bH, " ") : " ")) {
              for (g = 0; f = i[g++];) {
                d.indexOf(" " + f + " ") < 0 && (d += f + " ")
              };
              a = bR.trim(d), e.className !== a && (e.className = a)
            }
          }
        };
        return this
      },
      removeClass: function(c) {
        var i, e, d, f, g, a, h = 0,
          j = this.length,
          b = 0 === arguments.length || "string" == typeof c && c;
        if (bR.isFunction(c)) {
          return this.each(function(a) {
            bR(this).removeClass(c.call(this, a, this.className))
          })
        };
        if (b) {
          for (i = (c || "").match(cQ) || []; j > h; h++) {
            if (e = this[h], d = 1 === e.nodeType && (e.className ? (" " + e.className + " ").replace(bH, " ") : "")) {
              for (g = 0; f = i[g++];) {
                for (; d.indexOf(" " + f + " ") >= 0;) {
                  d = d.replace(" " + f + " ", " ")
                }
              };
              a = c ? bR.trim(d) : "", e.className !== a && (e.className = a)
            }
          }
        };
        return this
      },
      toggleClass: function(a, c) {
        var b = typeof a;
        return "boolean" == typeof c && "string" === b ? c ? this.addClass(a) : this.removeClass(a) : this.each(bR.isFunction(a) ? function(b) {
          bR(this).toggleClass(a.call(this, b, this.className, c), c)
        } : function() {
          if ("string" === b) {
            for (var f, c = 0, d = bR(this), e = a.match(cQ) || []; f = e[c++];) {
              d.hasClass(f) ? d.removeClass(f) : d.addClass(f)
            }
          } else {
            (b === bs || "boolean" === b) && (this.className && bR._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : bR._data(this, "__className__") || "")
          }
        })
      },
      hasClass: function(a) {
        for (var d = " " + a + " ", c = 0, b = this.length; b > c; c++) {
          if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(bH, " ").indexOf(d) >= 0) {
            return !0
          }
        };
        return !1
      }
    }), bR.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
      bR.fn[b] = function(a, c) {
        return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
      }
    }), bR.fn.extend({
      hover: function(a, b) {
        return this.mouseenter(a).mouseleave(b || a)
      },
      bind: function(a, c, b) {
        return this.on(a, null, c, b)
      },
      unbind: function(a, b) {
        return this.off(a, null, b)
      },
      delegate: function(a, d, c, b) {
        return this.on(d, a, c, b)
      },
      undelegate: function(a, c, b) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(c, a || "**", b)
      }
    });
    var m = bR.now(),
      E = /\?/,
      s = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    bR.parseJSON = function(d) {
      if (F.JSON && F.JSON.parse) {
        return F.JSON.parse(d + "")
      };
      var b, a = null,
        c = bR.trim(d + "");
      return c && !bR.trim(c.replace(s, function(c, f, d, e) {
        return b && f && (a = 0), 0 === a ? c : (b = d || f, a += !e - !d, "")
      })) ? Function("return " + c)() : bR.error("Invalid JSON: " + d)
    }, bR.parseXML = function(c) {
      var b, a;
      if (!c || "string" != typeof c) {
        return null
      };
      try {
        F.DOMParser ? (a = new DOMParser, b = a.parseFromString(c, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(c))
      } catch (bP) {
        b = void(0)
      };
      return b && b.documentElement && !b.getElementsByTagName("parsererror").length || bR.error("Invalid XML: " + c), b
    };
    var bj, bd, bo = /#.*$/,
      R = /([?&])_=[^&]*/,
      cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      dj = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      f = /^(?:GET|HEAD)$/,
      bV = /^\/\//,
      $t = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      cg = {},
      co = {},
      cT = "*/".concat("*");
    try {
      bd = location.href
    } catch (Xt) {
      bd = bY.createElement("a"), bd.href = "", bd = bd.href
    };
    bj = $t.exec(bd.toLowerCase()) || [], bR.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bd,
        type: "GET",
        isLocal: dj.test(bj[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": cT,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": bR.parseJSON,
          "text xml": bR.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(b, c) {
        return c ? $($(b, bR.ajaxSettings), c) : $(bR.ajaxSettings, b)
      },
      ajaxPrefilter: d(cg),
      ajaxTransport: d(co),
      ajax: function(g, t) {
        function o(f, o, l, g) {
          var m, k, p, t, b, c = o;
          2 !== x && (x = 2, s && clearTimeout(s), d = void(0), a = g || "", y.readyState = f > 0 ? 4 : 0, m = f >= 200 && 300 > f || 304 === f, l && (t = cc(e, y, l)), t = cj(e, t, y, m), m ? (e.ifModified && (b = y.getResponseHeader("Last-Modified"), b && (bR.lastModified[r] = b), b = y.getResponseHeader("etag"), b && (bR.etag[r] = b)), 204 === f || "HEAD" === e.type ? c = "nocontent" : 304 === f ? c = "notmodified" : (c = t.state, k = t.data, p = t.error, m = !p)) : (p = c, (f || !c) && (c = "error", 0 > f && (f = 0))), y.status = f, y.statusText = (o || c) + "", m ? q.resolveWith(j, [k, c, y]) : q.rejectWith(j, [y, c, p]), y.statusCode(i), i = void(0), v && h.trigger(m ? "ajaxSuccess" : "ajaxError", [y, e, m ? k : p]), n.fireWith(j, [y, c]), v && (h.trigger("ajaxComplete", [y, e]), --bR.active || bR.event.trigger("ajaxStop")))
        }
        "object" == typeof g && (t = g, g = void(0)), t = t || {};
        var k, p, r, a, s, v, d, l, e = bR.ajaxSetup({}, t),
          j = e.context || e,
          h = e.context && (j.nodeType || j["jquery"]) ? bR(j) : bR.event,
          q = bR.Deferred(),
          n = bR.Callbacks("once memory"),
          i = e.statusCode || {},
          w = {},
          z = {},
          x = 0,
          b = "canceled",
          y = {
            readyState: 0,
            getResponseHeader: function(b) {
              var c;
              if (2 === x) {
                if (!l) {
                  for (l = {}; c = cb.exec(a);) {
                    l[c[1].toLowerCase()] = c[2]
                  }
                };
                c = l[b.toLowerCase()]
              };
              return null == c ? null : c
            },
            getAllResponseHeaders: function() {
              return 2 === x ? a : null
            },
            setRequestHeader: function(a, c) {
              var b = a.toLowerCase();
              return x || (a = z[b] = z[b] || a, w[a] = c), this
            },
            overrideMimeType: function(a) {
              return x || (e.mimeType = a), this
            },
            statusCode: function(a) {
              var b;
              if (a) {
                if (2 > x) {
                  for (b in a) {
                    i[b] = [i[b], a[b]]
                  }
                } else {
                  y.always(a[y.status])
                }
              };
              return this
            },
            abort: function(a) {
              var c = a || b;
              return d && d.abort(c), o(0, c), this
            }
          };
        if (q.promise(y).complete = n.add, y.success = y.done, y.error = y.fail, e.url = ((g || e.url || bd) + "").replace(bo, "").replace(bV, bj[1] + "//"), e.type = t.method || t.type || e.method || e.type, e.dataTypes = bR.trim(e.dataType || "*").toLowerCase().match(cQ) || [""], null == e.crossDomain && (k = $t.exec(e.url.toLowerCase()), e.crossDomain = !(!k || k[1] === bj[1] && k[2] === bj[2] && (k[3] || ("http:" === k[1] ? "80" : "443")) === (bj[3] || ("http:" === bj[1] ? "80" : "443")))), e.data && e.processData && "string" != typeof e.data && (e.data = bR.param(e.data, e.traditional)), bQ(cg, e, t, y), 2 === x) {
          return y
        };
        v = e.global, v && 0 === bR.active++ && bR.event.trigger("ajaxStart"), e.type = e.type.toUpperCase(), e.hasContent = !f.test(e.type), r = e.url, e.hasContent || (e.data && (r = e.url += (E.test(r) ? "&" : "?") + e.data, delete e.data), e.cache === !1 && (e.url = R.test(r) ? r.replace(R, "$1_=" + m++) : r + (E.test(r) ? "&" : "?") + "_=" + m++)), e.ifModified && (bR.lastModified[r] && y.setRequestHeader("If-Modified-Since", bR.lastModified[r]), bR.etag[r] && y.setRequestHeader("If-None-Match", bR.etag[r])), (e.data && e.hasContent && e.contentType !== !1 || t.contentType) && y.setRequestHeader("Content-Type", e.contentType), y.setRequestHeader("Accept", e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] + ("*" !== e.dataTypes[0] ? ", " + cT + "; q=0.01" : "") : e.accepts["*"]);
        for (p in e.headers) {
          y.setRequestHeader(p, e.headers[p])
        };
        if (e.beforeSend && (e.beforeSend.call(j, y, e) === !1 || 2 === x)) {
          return y.abort()
        };
        b = "abort";
        for (p in {
            success: 1,
            error: 1,
            complete: 1
          }) {
          y[p](e[p])
        };
        if (d = bQ(co, e, t, y)) {
          y.readyState = 1, v && h.trigger("ajaxSend", [y, e]), e.async && e.timeout > 0 && (s = setTimeout(function() {
            y.abort("timeout")
          }, e.timeout));
          try {
            x = 1, d.send(w, o)
          } catch (u) {
            if (!(2 > x)) {
              throw u
            };
            o(-1, u)
          }
        } else {
          o(-1, "No Transport")
        };
        return y
      },
      getJSON: function(a, c, b) {
        return bR.get(a, c, b, "json")
      },
      getScript: function(a, b) {
        return bR.get(a, void(0), b, "script")
      }
    }), bR.each(["get", "post"], function(a, b) {
      bR[b] = function(a, d, c, e) {
        return bR.isFunction(d) && (e = e || c, c = d, d = void(0)), bR.ajax({
          url: a,
          type: b,
          dataType: e,
          data: d,
          success: c
        })
      }
    }), bR.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
      bR.fn[b] = function(a) {
        return this.on(b, a)
      }
    }), bR._evalUrl = function(a) {
      return bR.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
      })
    }, bR.fn.extend({
      wrapAll: function(a) {
        if (bR.isFunction(a)) {
          return this.each(function(b) {
            bR(this).wrapAll(a.call(this, b))
          })
        };
        if (this[0]) {
          var b = bR(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
            for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) {
              a = a.firstChild
            };
            return a
          }).append(this)
        };
        return this
      },
      wrapInner: function(a) {
        return this.each(bR.isFunction(a) ? function(b) {
          bR(this).wrapInner(a.call(this, b))
        } : function() {
          var c = bR(this),
            b = c.contents();
          b.length ? b.wrapAll(a) : c.append(a)
        })
      },
      wrap: function(a) {
        var b = bR.isFunction(a);
        return this.each(function(c) {
          bR(this).wrapAll(b ? a.call(this, c) : a)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          bR.nodeName(this, "body") || bR(this).replaceWith(this.childNodes)
        }).end()
      }
    }), bR.expr.filters.hidden = function(a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !bK.reliableHiddenOffsets() && "none" === (a.style && a.style.display || bR.css(a, "display"))
    }, bR.expr.filters.visible = function(a) {
      return !bR.expr.filters.hidden(a)
    };
    var cN = /%20/g,
      de = /\[\]$/,
      cH = /\r?\n/g,
      X = /^(?:submit|button|image|reset|file)$/i,
      bv = /^(?:input|select|textarea|keygen)/i;
    bR.param = function(a, e) {
      var c, b = [],
        d = function(a, c) {
          c = bR.isFunction(c) ? c() : null == c ? "" : c, b[b.length] = encodeURIComponent(a) + "=" + encodeURIComponent(c)
        };
      if (void(0) === e && (e = bR.ajaxSettings && bR.ajaxSettings.traditional), bR.isArray(a) || a["jquery"] && !bR.isPlainObject(a)) {
        bR.each(a, function() {
          d(this.name, this.value)
        })
      } else {
        for (c in a) {
          cP(c, a[c], e, d)
        }
      };
      return b.join("&").replace(cN, "+")
    }, bR.fn.extend({
      serialize: function() {
        return bR.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var a = bR.prop(this, "elements");
          return a ? bR.makeArray(a) : this
        }).filter(function() {
          var a = this.type;
          return this.name && !bR(this).is(":disabled") && bv.test(this.nodeName) && !X.test(a) && (this.checked || !j.test(a))
        }).map(function(a, c) {
          var b = bR(this).val();
          return null == b ? null : bR.isArray(b) ? bR.map(b, function(a) {
            return {
              name: c.name,
              value: a.replace(cH, "\\r\\n")
            }
          }) : {
            name: c.name,
            value: b.replace(cH, "\\r\\n")
          }
        }).get()
      }
    }), bR.ajaxSettings.xhr = void(0) !== F.ActiveXObject ? function() {
      return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && cV() || cJ()
    } : cV;
    var bp = 0,
      ch = {},
      dk = bR.ajaxSettings.xhr();
    F.ActiveXObject && bR(F).on("unload", function() {
      for (var a in ch) {
        ch[a](void(0), !0)
      }
    }), bK.cors = !!dk && "withCredentials" in dk, dk = bK.ajax = !!dk, dk && bR.ajaxTransport(function(a) {
      if (!a.crossDomain || bK.cors) {
        var b;
        return {
          send: function(e, d) {
            var f, g = a.xhr(),
              c = ++bp;
            if (g.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) {
              for (f in a.xhrFields) {
                g[f] = a.xhrFields[f]
              }
            };
            a.mimeType && g.overrideMimeType && g.overrideMimeType(a.mimeType), a.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
            for (f in e) {
              void(0) !== e[f] && g.setRequestHeader(f, e[f] + "")
            };
            g.send(a.hasContent && a.data || null), b = function(f, h) {
              var i, j, e;
              if (b && (h || 4 === g.readyState)) {
                if (delete ch[c], b = void(0), g.onreadystatechange = bR.noop, h) {
                  4 !== g.readyState && g.abort()
                } else {
                  e = {}, i = g.status, "string" == typeof g.responseText && (e.text = g.responseText);
                  try {
                    j = g.statusText
                  } catch (bw) {
                    j = ""
                  };
                  i || !a.isLocal || a.crossDomain ? 1223 === i && (i = 204) : i = e.text ? 200 : 404
                }
              };
              e && d(i, j, e, g.getAllResponseHeaders())
            }, a.async ? 4 === g.readyState ? setTimeout(b) : g.onreadystatechange = ch[c] = b : b()
          },
          abort: function() {
            b && b(void(0), !0)
          }
        }
      }
    }), bR.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /(?:java|ecma)script/
      },
      converters: {
        "text script": function(a) {
          return bR.globalEval(a), a
        }
      }
    }), bR.ajaxPrefilter("script", function(a) {
      void(0) === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), bR.ajaxTransport("script", function(a) {
      if (a.crossDomain) {
        var c, b = bY.head || bR("head")[0] || bY.documentElement;
        return {
          send: function(d, e) {
            c = bY.createElement("script"), c.async = !0, a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, b) {
              (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"))
            }, b.insertBefore(c, b.firstChild)
          },
          abort: function() {
            c && c.onload(void(0), !0)
          }
        }
      }
    });
    var J = [],
      cz = /(=)\?(?=&|$)|\?\?/;
    bR.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var a = J.pop() || bR.expando + "_" + m++;
        return this[a] = !0, a
      }
    }), bR.ajaxPrefilter("json jsonp", function(g, c, b) {
      var d, e, a, f = g.jsonp !== !1 && (cz.test(g.url) ? "url" : "string" == typeof g.data && !(g.contentType || "").indexOf("application/x-www-form-urlencoded") && cz.test(g.data) && "data");
      return f || "jsonp" === g.dataTypes[0] ? (d = g.jsonpCallback = bR.isFunction(g.jsonpCallback) ? g.jsonpCallback() : g.jsonpCallback, f ? g[f] = g[f].replace(cz, "$1" + d) : g.jsonp !== !1 && (g.url += (E.test(g.url) ? "&" : "?") + g.jsonp + "=" + d), g.converters["script json"] = function() {
        return a || bR.error(d + " was not called"), a[0]
      }, g.dataTypes[0] = "json", e = F[d], F[d] = function() {
        a = arguments
      }, b.always(function() {
        F[d] = e, g[d] && (g.jsonpCallback = c.jsonpCallback, J.push(d)), a && bR.isFunction(e) && e(a[0]), a = e = void(0)
      }), "script") : void(0)
    }), bR.parseHTML = function(a, e, c) {
      if (!a || "string" != typeof a) {
        return null
      };
      "boolean" == typeof e && (c = e, e = !1), e = e || bY;
      var b = B.exec(a),
        d = !c && [];
      return b ? [e.createElement(b[1])] : (b = bR.buildFragment([a], e, d), d && d.length && bR(d).remove(), bR.merge([], b.childNodes))
    };
    var bM = bR.fn.load;
    bR.fn.load = function(b, h, d) {
      if ("string" != typeof b && bM) {
        return bM.apply(this, arguments)
      };
      var c, e, f, a = this,
        g = b.indexOf(" ");
      return g >= 0 && (c = bR.trim(b.slice(g, b.length)), b = b.slice(0, g)), bR.isFunction(h) ? (d = h, h = void(0)) : h && "object" == typeof h && (f = "POST"), a.length > 0 && bR.ajax({
        url: b,
        type: f,
        dataType: "html",
        data: h
      }).done(function(b) {
        e = arguments, a.html(c ? bR("<div>").append(bR.parseHTML(b)).find(c) : b)
      }).complete(d && function(b, c) {
        a.each(d, e || [b.responseText, c, b])
      }), this
    }, bR.expr.filters.animated = function(a) {
      return bR.grep(bR.timers, function(b) {
        return a === b.elem
      }).length
    };
    var bT = F.document.documentElement;
    bR.offset = {
      setOffset: function(d, l, h) {
        var f, i, j, a, k, m, b, g = bR.css(d, "position"),
          c = bR(d),
          e = {};
        "static" === g && (d.style.position = "relative"), k = c.offset(), j = bR.css(d, "top"), m = bR.css(d, "left"), b = ("absolute" === g || "fixed" === g) && bR.inArray("auto", [j, m]) > -1, b ? (f = c.position(), a = f.top, i = f.left) : (a = parseFloat(j) || 0, i = parseFloat(m) || 0), bR.isFunction(l) && (l = l.call(d, h, k)), null != l.top && (e.top = l.top - k.top + a), null != l.left && (e.left = l.left - k.left + i), "using" in l ? l.using.call(d, e) : c.css(e)
      }
    }, bR.fn.extend({
      offset: function(a) {
        if (arguments.length) {
          return void(0) === a ? this : this.each(function(b) {
            bR.offset.setOffset(this, a, b)
          })
        };
        var f, c, b = {
            top: 0,
            left: 0
          },
          d = this[0],
          e = d && d.ownerDocument;
        if (e) {
          return f = e.documentElement, bR.contains(f, d) ? (typeof d.getBoundingClientRect !== bs && (b = d.getBoundingClientRect()), c = da(e), {
            top: b.top + (c.pageYOffset || f.scrollTop) - (f.clientTop || 0),
            left: b.left + (c.pageXOffset || f.scrollLeft) - (f.clientLeft || 0)
          }) : b
        }
      },
      position: function() {
        if (this[0]) {
          var a, d, c = {
              top: 0,
              left: 0
            },
            b = this[0];
          return "fixed" === bR.css(b, "position") ? d = b.getBoundingClientRect() : (a = this.offsetParent(), d = this.offset(), bR.nodeName(a[0], "html") || (c = a.offset()), c.top += bR.css(a[0], "borderTopWidth", !0), c.left += bR.css(a[0], "borderLeftWidth", !0)), {
            top: d.top - c.top - bR.css(b, "marginTop", !0),
            left: d.left - c.left - bR.css(b, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var a = this.offsetParent || bT; a && !bR.nodeName(a, "html") && "static" === bR.css(a, "position");) {
            a = a.offsetParent
          };
          return a || bT
        })
      }
    }), bR.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(a, c) {
      var b = /Y/.test(c);
      bR.fn[a] = function(d) {
        return bF(this, function(a, d, e) {
          var f = da(a);
          return void(0) === e ? f ? c in f ? f[c] : f.document.documentElement[d] : a[d] : void((f ? f.scrollTo(b ? bR(f).scrollLeft() : e, b ? e : bR(f).scrollTop()) : a[d] = e))
        }, a, d, arguments.length, null)
      }
    }), bR.each(["top", "left"], function(a, b) {
      bR.cssHooks[b] = cq(bK.pixelPosition, function(a, c) {
        return c ? (c = cA(a, b), bi.test(c) ? bR(a).position()[b] + "px" : c) : void(0)
      })
    }), bR.each({
      Height: "height",
      Width: "width"
    }, function(a, b) {
      bR.each({
        padding: "inner" + a,
        content: b,
        "": "outer" + a
      }, function(d, c) {
        bR.fn[c] = function(e, f) {
          var g = arguments.length && (d || "boolean" != typeof e),
            c = d || (e === !0 || f === !0 ? "margin" : "border");
          return bF(this, function(f, d, b) {
            var e;
            return bR.isWindow(f) ? f.document.documentElement["client" + a] : 9 === f.nodeType ? (e = f.documentElement, Math.max(f.body["scroll" + a], e["scroll" + a], f.body["offset" + a], e["offset" + a], e["client" + a])) : void(0) === b ? bR.css(f, d, c) : bR.style(f, d, b, c)
          }, b, g ? e : void(0), g, null)
        }
      })
    }), bR.fn.size = function() {
      return this.length
    }, bR.fn.andSelf = bR.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
      return bR
    });
    var cm = F.jQuery,
      k = F.$;
    return bR.noConflict = function(a) {
      return F.$ === bR && (F.$ = k), a && F.jQuery === bR && (F.jQuery = cm), bR
    }, typeof cv === bs && (F.jQuery = F.$ = bR), bR
  }), ! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
  }(function(c) {
    function j(q) {
      var a = q || window.event,
        p = k.call(arguments, 1),
        b = 0,
        i = 0,
        m = 0,
        j = 0,
        o = 0,
        n = 0;
      if (q = c.event.fix(a), q.type = "mousewheel", "detail" in a && (m = -1 * a.detail), "wheelDelta" in a && (m = a["wheelDelta"]), "wheelDeltaY" in a && (m = a["wheelDeltaY"]), "wheelDeltaX" in a && (i = -1 * a["wheelDeltaX"]), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (i = -1 * m, m = 0), b = 0 === m ? i : m, "deltaY" in a && (m = -1 * a.deltaY, b = m), "deltaX" in a && (i = a.deltaX, 0 === m && (b = -1 * i)), 0 !== m || 0 !== i) {
        if (1 === a.deltaMode) {
          var l = c.data(this, "mousewheel-line-height");
          b *= l, m *= l, i *= l
        } else {
          if (2 === a.deltaMode) {
            var r = c.data(this, "mousewheel-page-height");
            b *= r, m *= r, i *= r
          }
        };
        if (j = Math.max(Math.abs(m), Math.abs(i)), (!h || h > j) && (h = j, d(a, j) && (h /= 40)), d(a, j) && (b /= 40, i /= 40, m /= 40), b = Math[b >= 1 ? "floor" : "ceil"](b / h), i = Math[i >= 1 ? "floor" : "ceil"](i / h), m = Math[m >= 1 ? "floor" : "ceil"](m / h), e.settings.normalizeOffset && this.getBoundingClientRect) {
          var s = this.getBoundingClientRect();
          o = q.clientX - s.left, n = q.clientY - s.top
        };
        return q.deltaX = i, q.deltaY = m, q.deltaFactor = h, q.offsetX = o, q.offsetY = n, q.deltaMode = 0, p.unshift(q, b, i, m), g && clearTimeout(g), g = setTimeout(f, 200), (c.event.dispatch || c.event.handle).apply(this, p)
      }
    }

    function f() {
      h = null
    }

    function d(a, b) {
      return e.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var g, h, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      i = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      k = Array.prototype.slice;
    if (c.event.fixHooks) {
      for (var b = a.length; b;) {
        c.event.fixHooks[a[--b]] = c.event.mouseHooks
      }
    };
    var e = c.event.special["mousewheel"] = {
      version: "3.1.12",
      setup: function() {
        if (this.addEventListener) {
          for (var a = i.length; a;) {
            this.addEventListener(i[--a], j, !1)
          }
        } else {
          this["onmousewheel"] = j
        };
        c.data(this, "mousewheel-line-height", e.getLineHeight(this)), c.data(this, "mousewheel-page-height", e.getPageHeight(this))
      },
      teardown: function() {
        if (this.removeEventListener) {
          for (var a = i.length; a;) {
            this.removeEventListener(i[--a], j, !1)
          }
        } else {
          this["onmousewheel"] = null
        };
        c.removeData(this, "mousewheel-line-height"), c.removeData(this, "mousewheel-page-height")
      },
      getLineHeight: function(d) {
        var b = c(d),
          a = b["offsetParent" in c.fn ? "offsetParent" : "parent"]();
        return a.length || (a = c("body")), parseInt(a.css("fontSize"), 10) || parseInt(b.css("fontSize"), 10) || 16
      },
      getPageHeight: function(a) {
        return c(a).height()
      },
      settings: {
        adjustOldDeltas: !0,
        normalizeOffset: !0
      }
    };
    c.fn.extend({
      mousewheel: function(a) {
        return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
      },
      unmousewheel: function(a) {
        return this.unbind("mousewheel", a)
      }
    })
  }),
  function(a) {
    a.fn.qrcode = function(j) {
      function f(a) {
        this.mode = i, this.data = a
      }

      function d(a, b) {
        this.typeNumber = a, this.errorCorrectLevel = b, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
      }

      function g(a, d) {
        if (void(0) == a.length) {
          throw Error(a.length + "/" + d)
        };
        for (var c = 0; c < a.length && 0 == a[c];) {
          c++
        };
        this.num = Array(a.length - c + d);
        for (var b = 0; b < a.length - c; b++) {
          this.num[b] = a[b + c]
        }
      }

      function h(a, b) {
        this.totalCount = a, this.dataCount = b
      }

      function b() {
        this.buffer = [], this.length = 0
      }
      var i;
      f.prototype = {
        getLength: function() {
          return this.data.length
        },
        write: function(a) {
          for (var b = 0; b < this.data.length; b++) {
            a.put(this.data.charCodeAt(b), 8)
          }
        }
      }, d.prototype = {
        addData: function(a) {
          this.dataList.push(new f(a)), this.dataCache = null
        },
        isDark: function(a, b) {
          if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b) {
            throw Error(a + "," + b)
          };
          return this.modules[a][b]
        },
        getModuleCount: function() {
          return this.moduleCount
        },
        make: function() {
          if (1 > this.typeNumber) {
            for (var a = 1, a = 1; 40 > a; a++) {
              for (var f = h.getRSBlocks(a, this.errorCorrectLevel), d = new b, c = 0, e = 0; e < f.length; e++) {
                c += f[e].dataCount
              };
              for (e = 0; e < this.dataList.length; e++) {
                f = this.dataList[e], d.put(f.mode, 4), d.put(f.getLength(), k.getLengthInBits(f.mode, a)), f.write(d)
              };
              if (d.getLengthInBits() <= 8 * c) {
                break
              }
            };
            this.typeNumber = a
          };
          this.makeImpl(!1, this.getBestMaskPattern())
        },
        makeImpl: function(a, e) {
          this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount);
          for (var b = 0; b < this.moduleCount; b++) {
            this.modules[b] = Array(this.moduleCount);
            for (var c = 0; c < this.moduleCount; c++) {
              this.modules[b][c] = null
            }
          };
          this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(a, e), 7 <= this.typeNumber && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = d.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e)
        },
        setupPositionProbePattern: function(a, d) {
          for (var c = -1; 7 >= c; c++) {
            if (!(-1 >= a + c || this.moduleCount <= a + c)) {
              for (var b = -1; 7 >= b; b++) {
                -1 >= d + b || this.moduleCount <= d + b || (this.modules[a + c][d + b] = c >= 0 && 6 >= c && (0 == b || 6 == b) || b >= 0 && 6 >= b && (0 == c || 6 == c) || c >= 2 && 4 >= c && b >= 2 && 4 >= b ? !0 : !1)
              }
            }
          }
        },
        getBestMaskPattern: function() {
          for (var a = 0, d = 0, c = 0; 8 > c; c++) {
            this.makeImpl(!0, c);
            var b = k.getLostPoint(this);
            (0 == c || a > b) && (a = b, d = c)
          };
          return d
        },
        createMovieClip: function(a, e, c) {
          for (a = a.createEmptyMovieClip(e, c), this.make(), e = 0; e < this.modules.length; e++) {
            for (var c = 1 * e, b = 0; b < this.modules[e].length; b++) {
              var d = 1 * b;
              this.modules[e][b] && (a.beginFill(0, 100), a.moveTo(d, c), a.lineTo(d + 1, c), a.lineTo(d + 1, c + 1), a.lineTo(d, c + 1), a.endFill())
            }
          };
          return a
        },
        setupTimingPattern: function() {
          for (var a = 8; a < this.moduleCount - 8; a++) {
            null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2)
          };
          for (a = 8; a < this.moduleCount - 8; a++) {
            null == this.modules[6][a] && (this.modules[6][a] = 0 == a % 2)
          }
        },
        setupPositionAdjustPattern: function() {
          for (var b = k.getPatternPosition(this.typeNumber), g = 0; g < b.length; g++) {
            for (var d = 0; d < b.length; d++) {
              var c = b[g],
                e = b[d];
              if (null == this.modules[c][e]) {
                for (var f = -2; 2 >= f; f++) {
                  for (var a = -2; 2 >= a; a++) {
                    this.modules[c + f][e + a] = -2 == f || 2 == f || -2 == a || 2 == a || 0 == f && 0 == a ? !0 : !1
                  }
                }
              }
            }
          }
        },
        setupTypeNumber: function(a) {
          for (var d = k.getBCHTypeNumber(this.typeNumber), c = 0; 18 > c; c++) {
            var b = !a && 1 == (d >> c & 1);
            this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3] = b
          };
          for (c = 0; 18 > c; c++) {
            b = !a && 1 == (d >> c & 1), this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)] = b
          }
        },
        setupTypeInfo: function(a, e) {
          for (var c = k.getBCHTypeInfo(this.errorCorrectLevel << 3 | e), b = 0; 15 > b; b++) {
            var d = !a && 1 == (c >> b & 1);
            6 > b ? this.modules[b][8] = d : 8 > b ? this.modules[b + 1][8] = d : this.modules[this.moduleCount - 15 + b][8] = d
          };
          for (b = 0; 15 > b; b++) {
            d = !a && 1 == (c >> b & 1), 8 > b ? this.modules[8][this.moduleCount - b - 1] = d : 9 > b ? this.modules[8][15 - b - 1 + 1] = d : this.modules[8][15 - b - 1] = d
          };
          this.modules[this.moduleCount - 8][8] = !a
        },
        mapData: function(c, i) {
          for (var e = -1, d = this.moduleCount - 1, f = 7, g = 0, a = this.moduleCount - 1; a > 0; a -= 2) {
            for (6 == a && a--;;) {
              for (var h = 0; 2 > h; h++) {
                if (null == this.modules[d][a - h]) {
                  var b = !1;
                  g < c.length && (b = 1 == (c[g] >>> f & 1)), k.getMask(i, d, a - h) && (b = !b), this.modules[d][a - h] = b, f--, -1 == f && (g++, f = 7)
                }
              };
              if (d += e, 0 > d || this.moduleCount <= d) {
                d -= e, e = -e;
                break
              }
            }
          }
        }
      }, d.PAD0 = 236, d.PAD1 = 17, d.createData = function(c, i, e) {
        for (var i = h.getRSBlocks(c, i), f = new b, g = 0; g < e.length; g++) {
          var a = e[g];
          f.put(a.mode, 4), f.put(a.getLength(), k.getLengthInBits(a.mode, c)), a.write(f)
        };
        for (g = c = 0; g < i.length; g++) {
          c += i[g].dataCount
        };
        if (f.getLengthInBits() > 8 * c) {
          throw Error("code length overflow. (" + f.getLengthInBits() + ">" + 8 * c + ")")
        };
        for (f.getLengthInBits() + 4 <= 8 * c && f.put(0, 4); 0 != f.getLengthInBits() % 8;) {
          f.putBit(!1)
        };
        for (; !(f.getLengthInBits() >= 8 * c) && (f.put(d.PAD0, 8), !(f.getLengthInBits() >= 8 * c));) {
          f.put(d.PAD1, 8)
        };
        return d.createBytes(f, i)
      }, d.createBytes = function(d, m) {
        for (var i = 0, f = 0, j = 0, a = Array(m.length), l = Array(m.length), b = 0; b < m.length; b++) {
          var h = m[b].dataCount,
            c = m[b].totalCount - h,
            f = Math.max(f, h),
            j = Math.max(j, c);
          a[b] = Array(h);
          for (var e = 0; e < a[b].length; e++) {
            a[b][e] = 255 & d.buffer[e + i]
          };
          for (i += h, e = k.getErrorCorrectPolynomial(c), h = new g(a[b], e.getLength() - 1).mod(e), l[b] = Array(e.getLength() - 1), e = 0; e < l[b].length; e++) {
            c = e + h.getLength() - l[b].length, l[b][e] = c >= 0 ? h.get(c) : 0
          }
        };
        for (e = b = 0; e < m.length; e++) {
          b += m[e].totalCount
        };
        for (i = Array(b), e = h = 0; f > e; e++) {
          for (b = 0; b < m.length; b++) {
            e < a[b].length && (i[h++] = a[b][e])
          }
        };
        for (e = 0; j > e; e++) {
          for (b = 0; b < m.length; b++) {
            e < l[b].length && (i[h++] = l[b][e])
          }
        };
        return i
      }, i = 4;
      for (var k = {
          PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
          ],
          G15: 1335,
          G18: 7973,
          G15_MASK: 21522,
          getBCHTypeInfo: function(a) {
            for (var b = a << 10; 0 <= k.getBCHDigit(b) - k.getBCHDigit(k.G15);) {
              b ^= k.G15 << k.getBCHDigit(b) - k.getBCHDigit(k.G15)
            };
            return (a << 10 | b) ^ k.G15_MASK
          },
          getBCHTypeNumber: function(a) {
            for (var b = a << 12; 0 <= k.getBCHDigit(b) - k.getBCHDigit(k.G18);) {
              b ^= k.G18 << k.getBCHDigit(b) - k.getBCHDigit(k.G18)
            };
            return a << 12 | b
          },
          getBCHDigit: function(a) {
            for (var b = 0; 0 != a;) {
              b++, a >>>= 1
            };
            return b
          },
          getPatternPosition: function(a) {
            return k.PATTERN_POSITION_TABLE[a - 1]
          },
          getMask: function(a, c, b) {
            switch (a) {
              case 0:
                return 0 == (c + b) % 2;
              case 1:
                return 0 == c % 2;
              case 2:
                return 0 == b % 3;
              case 3:
                return 0 == (c + b) % 3;
              case 4:
                return 0 == (Math.floor(c / 2) + Math.floor(b / 3)) % 2;
              case 5:
                return 0 == c * b % 2 + c * b % 3;
              case 6:
                return 0 == (c * b % 2 + c * b % 3) % 2;
              case 7:
                return 0 == (c * b % 3 + (c + b) % 2) % 2;
              default:
                throw Error("bad maskPattern:" + a)
            }
          },
          getErrorCorrectPolynomial: function(a) {
            for (var d = new g([1], 0), b = 0; a > b; b++) {
              d = d.multiply(new g([1, c.gexp(b)], 0))
            };
            return d
          },
          getLengthInBits: function(a, b) {
            if (b >= 1 && 10 > b) {
              switch (a) {
                case 1:
                  return 10;
                case 2:
                  return 9;
                case i:
                  return 8;
                case 8:
                  return 8;
                default:
                  throw Error("mode:" + a)
              }
            } else {
              if (27 > b) {
                switch (a) {
                  case 1:
                    return 12;
                  case 2:
                    return 11;
                  case i:
                    return 16;
                  case 8:
                    return 10;
                  default:
                    throw Error("mode:" + a)
                }
              } else {
                if (!(41 > b)) {
                  throw Error("type:" + b)
                };
                switch (a) {
                  case 1:
                    return 14;
                  case 2:
                    return 13;
                  case i:
                    return 16;
                  case 8:
                    return 12;
                  default:
                    throw Error("mode:" + a)
                }
              }
            }
          },
          getLostPoint: function(b) {
            for (var h = b.getModuleCount(), d = 0, c = 0; h > c; c++) {
              for (var e = 0; h > e; e++) {
                for (var f = 0, a = b.isDark(c, e), g = -1; 1 >= g; g++) {
                  if (!(0 > c + g || c + g >= h)) {
                    for (var i = -1; 1 >= i; i++) {
                      0 > e + i || e + i >= h || 0 == g && 0 == i || a == b.isDark(c + g, e + i) && f++
                    }
                  }
                };
                f > 5 && (d += 3 + f - 5)
              }
            };
            for (c = 0; h - 1 > c; c++) {
              for (e = 0; h - 1 > e; e++) {
                f = 0, b.isDark(c, e) && f++, b.isDark(c + 1, e) && f++, b.isDark(c, e + 1) && f++, b.isDark(c + 1, e + 1) && f++, (0 == f || 4 == f) && (d += 3)
              }
            };
            for (c = 0; h > c; c++) {
              for (e = 0; h - 6 > e; e++) {
                b.isDark(c, e) && !b.isDark(c, e + 1) && b.isDark(c, e + 2) && b.isDark(c, e + 3) && b.isDark(c, e + 4) && !b.isDark(c, e + 5) && b.isDark(c, e + 6) && (d += 40)
              }
            };
            for (e = 0; h > e; e++) {
              for (c = 0; h - 6 > c; c++) {
                b.isDark(c, e) && !b.isDark(c + 1, e) && b.isDark(c + 2, e) && b.isDark(c + 3, e) && b.isDark(c + 4, e) && !b.isDark(c + 5, e) && b.isDark(c + 6, e) && (d += 40)
              }
            };
            for (e = f = 0; h > e; e++) {
              for (c = 0; h > c; c++) {
                b.isDark(c, e) && f++
              }
            };
            return b = Math.abs(100 * f / h / h - 50) / 5, d + 10 * b
          }
        }, c = {
          glog: function(a) {
            if (1 > a) {
              throw Error("glog(" + a + ")")
            };
            return c.LOG_TABLE[a]
          },
          gexp: function(a) {
            for (; 0 > a;) {
              a += 255
            };
            for (; a >= 256;) {
              a -= 255
            };
            return c.EXP_TABLE[a]
          },
          EXP_TABLE: Array(256),
          LOG_TABLE: Array(256)
        }, e = 0; 8 > e; e++) {
        c.EXP_TABLE[e] = 1 << e
      };
      for (e = 8; 256 > e; e++) {
        c.EXP_TABLE[e] = c.EXP_TABLE[e - 4] ^ c.EXP_TABLE[e - 5] ^ c.EXP_TABLE[e - 6] ^ c.EXP_TABLE[e - 8]
      };
      for (e = 0; 255 > e; e++) {
        c.LOG_TABLE[c.EXP_TABLE[e]] = e
      };
      return g.prototype = {
        get: function(a) {
          return this.num[a]
        },
        getLength: function() {
          return this.num.length
        },
        multiply: function(a) {
          for (var e = Array(this.getLength() + a.getLength() - 1), d = 0; d < this.getLength(); d++) {
            for (var b = 0; b < a.getLength(); b++) {
              e[d + b] ^= c.gexp(c.glog(this.get(d)) + c.glog(a.get(b)))
            }
          };
          return new g(e, 0)
        },
        mod: function(a) {
          if (0 > this.getLength() - a.getLength()) {
            return this
          };
          for (var e = c.glog(this.get(0)) - c.glog(a.get(0)), d = Array(this.getLength()), b = 0; b < this.getLength(); b++) {
            d[b] = this.get(b)
          };
          for (b = 0; b < a.getLength(); b++) {
            d[b] ^= c.gexp(c.glog(a.get(b)) + e)
          };
          return new g(d, 0).mod(a)
        }
      }, h.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
      ], h.getRSBlocks = function(c, j) {
        var f = h.getRsBlockTable(c, j);
        if (void(0) == f) {
          throw Error("bad rs block @ typeNumber:" + c + "/errorCorrectLevel:" + j)
        };
        for (var d = f.length / 3, g = [], a = 0; d > a; a++) {
          for (var i = f[3 * a + 0], k = f[3 * a + 1], b = f[3 * a + 2], e = 0; i > e; e++) {
            g.push(new h(k, b))
          }
        };
        return g
      }, h.getRsBlockTable = function(a, b) {
        switch (b) {
          case 1:
            return h.RS_BLOCK_TABLE[4 * (a - 1) + 0];
          case 0:
            return h.RS_BLOCK_TABLE[4 * (a - 1) + 1];
          case 3:
            return h.RS_BLOCK_TABLE[4 * (a - 1) + 2];
          case 2:
            return h.RS_BLOCK_TABLE[4 * (a - 1) + 3]
        }
      }, b.prototype = {
        get: function(a) {
          return 1 == (this.buffer[Math.floor(a / 8)] >>> 7 - a % 8 & 1)
        },
        put: function(a, c) {
          for (var b = 0; c > b; b++) {
            this.putBit(1 == (a >>> c - b - 1 & 1))
          }
        },
        getLengthInBits: function() {
          return this.length
        },
        putBit: function(a) {
          var b = Math.floor(this.length / 8);
          this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |= 128 >>> this.length % 8), this.length++
        }
      }, "string" == typeof j && (j = {
        text: j
      }), j = a.extend({}, {
        render: "canvas",
        width: 256,
        height: 256,
        typeNumber: -1,
        correctLevel: 2,
        background: "#ffffff",
        foreground: "#000000"
      }, j), this.each(function() {
        var g;
        if ("canvas" == j.render) {
          g = new d(j.typeNumber, j.correctLevel), g.addData(j.text), g.make();
          var h = document.createElement("canvas");
          h.width = j.width, h.height = j.height;
          for (var i = h.getContext("2d"), b = j.width / g.getModuleCount(), k = j.height / g.getModuleCount(), l = 0; l < g.getModuleCount(); l++) {
            for (var c = 0; c < g.getModuleCount(); c++) {
              i.fillStyle = g.isDark(l, c) ? j.foreground : j.background;
              var f = Math.ceil((c + 1) * b) - Math.floor(c * b),
                e = Math.ceil((l + 1) * b) - Math.floor(l * b);
              i.fillRect(Math.round(c * b), Math.round(l * k), f, e)
            }
          }
        } else {
          for (g = new d(j.typeNumber, j.correctLevel), g.addData(j.text), g.make(), h = a("<table></table>").css("width", j.width + "px").css("height", j.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", j.background), i = j.width / g.getModuleCount(), b = j.height / g.getModuleCount(), k = 0; k < g.getModuleCount(); k++) {
            for (l = a("<tr></tr>").css("height", b + "px").appendTo(h), c = 0; c < g.getModuleCount(); c++) {
              a("<td></td>").css("width", i + "px").css("background-color", g.isDark(k, c) ? j.foreground : j.background).appendTo(l)
            }
          }
        };
        g = h, jQuery(g).appendTo(this)
      })
    }
  }(jQuery), FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), FastClick.prototype.needsClick = function(a) {
    "use strict";
    switch (a.nodeName.toLowerCase()) {
      case "button":
        ;
      case "select":
        ;
      case "textarea":
        if (a.disabled) {
          return !0
        };
        break;
      case "input":
        if (this.deviceIsIOS && "file" === a.type || a.disabled) {
          return !0
        };
        break;
      case "label":
        ;
      case "video":
        return !0
    };
    return /\bneedsclick\b/.test(a.className)
  }, FastClick.prototype.needsFocus = function(a) {
    "use strict";
    switch (a.nodeName.toLowerCase()) {
      case "textarea":
        return !0;
      case "select":
        return !this.deviceIsAndroid;
      case "input":
        switch (a.type) {
          case "button":
            ;
          case "checkbox":
            ;
          case "file":
            ;
          case "image":
            ;
          case "radio":
            ;
          case "submit":
            return !1
        };
        return !a.disabled && !a.readOnly;
      default:
        return /\bneedsfocus\b/.test(a.className)
    }
  }, FastClick.prototype.sendClick = function(a, d) {
    "use strict";
    var c, b;
    document.activeElement && document.activeElement !== a && document.activeElement.blur(), b = d.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, a.dispatchEvent(c)
  }, FastClick.prototype.determineEventType = function(a) {
    "use strict";
    return this.deviceIsAndroid && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
  }, FastClick.prototype.focus = function(a) {
    "use strict";
    var b;
    this.deviceIsIOS && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
  }, FastClick.prototype.updateScrollParent = function(a) {
    "use strict";
    var c, b;
    if (c = a.fastClickScrollParent, !c || !c.contains(a)) {
      b = a;
      do {
        if (b.scrollHeight > b.offsetHeight) {
          c = b, a.fastClickScrollParent = b;
          break
        };
        b = b.parentElement
      } while (b);
    };
    c && (c.fastClickLastScrollTop = c.scrollTop)
  }, FastClick.prototype.getTargetElementFromEventTarget = function(a) {
    "use strict";
    return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
  }, FastClick.prototype.onTouchStart = function(a) {
    "use strict";
    var d, c, b;
    if (a.targetTouches.length > 1) {
      return !0
    };
    if (d = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], this.deviceIsIOS) {
      if (b = window.getSelection(), b.rangeCount && !b.isCollapsed) {
        return !0
      };
      if (!this.deviceIsIOS4) {
        if (c.identifier === this.lastTouchIdentifier) {
          return a.preventDefault(), !1
        };
        this.lastTouchIdentifier = c.identifier, this.updateScrollParent(d)
      }
    };
    return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = d, this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < 200 && a.preventDefault(), !0
  }, FastClick.prototype.touchHasMoved = function(a) {
    "use strict";
    var c = a.changedTouches[0],
      b = this.touchBoundary;
    return Math.abs(c.pageX - this.touchStartX) > b || Math.abs(c.pageY - this.touchStartY) > b ? !0 : !1
  }, FastClick.prototype.onTouchMove = function(a) {
    "use strict";
    return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
  }, FastClick.prototype.findControl = function(a) {
    "use strict";
    return void(0) !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
  }, FastClick.prototype.onTouchEnd = function(b) {
    "use strict";
    var g, d, c, e, f, a = this.targetElement;
    if (!this.trackingClick) {
      return !0
    };
    if (b.timeStamp - this.lastClickTime < 200) {
      return this.cancelNextClick = !0, !0
    };
    if (this.cancelNextClick = !1, this.lastClickTime = b.timeStamp, d = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (f = b.changedTouches[0], a = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || a, a.fastClickScrollParent = this.targetElement.fastClickScrollParent), c = a.tagName.toLowerCase(), "label" === c) {
      if (g = this.findControl(a)) {
        if (this.focus(a), this.deviceIsAndroid) {
          return !1
        };
        a = g
      }
    } else {
      if (this.needsFocus(a)) {
        return b.timeStamp - d > 100 || this.deviceIsIOS && window.top !== window && "input" === c ? (this.targetElement = null, !1) : (this.focus(a), this.deviceIsIOS4 && "select" === c || (this.targetElement = null, b.preventDefault()), !1)
      }
    };
    return this.deviceIsIOS && !this.deviceIsIOS4 && (e = a.fastClickScrollParent, e && e.fastClickLastScrollTop !== e.scrollTop) ? !0 : (this.needsClick(a) || (b.preventDefault(), this.sendClick(a, b)), !1)
  }, FastClick.prototype.onTouchCancel = function() {
    "use strict";
    this.trackingClick = !1, this.targetElement = null
  }, FastClick.prototype.onMouse = function(a) {
    "use strict";
    return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0
  }, FastClick.prototype.onClick = function(a) {
    "use strict";
    var b;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), b || (this.targetElement = null), b)
  }, FastClick.prototype.destroy = function() {
    "use strict";
    var a = this.layer;
    this.deviceIsAndroid && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1)
  }, FastClick.notNeeded = function(a) {
    "use strict";
    var c, b;
    if ("undefined" == typeof window.ontouchstart) {
      return !0
    };
    if (b = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
      if (!FastClick.prototype.deviceIsAndroid) {
        return !0
      };
      if (c = document.querySelector("meta[name=viewport]")) {
        if (-1 !== c.content.indexOf("user-scalable=no")) {
          return !0
        };
        if (b > 31 && window.innerWidth <= window.screen.width) {
          return !0
        }
      }
    };
    return "none" === a.style.msTouchAction ? !0 : !1
  }, FastClick.attach = function(a) {
    "use strict";
    return new FastClick(a)
  }, "undefined" != typeof define && define.amd ? define(function() {
    "use strict";
    return FastClick
  }) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick,
  function() {
    "use strict";
    window.EventEmitter = klass(function() {
      this.events = {}
    }).methods({
      on: function(a, c) {
        if (void(0) !== c) {
          var b;
          return void(0) === this.events[a] && (this.events[a] = $.Callbacks()), b = this.events[a], b.add(c), this
        }
      },
      one: function(a, d) {
        var c = this,
          b = function() {
            c.off(a, b), d(arguments)
          };
        this.on(a, b)
      },
      off: function(a, c) {
        if (void(0) !== c) {
          var b = this.events[a];
          return b && b.remove(c), this
        }
      },
      emit: function(a, d) {
        var c = this.events[a];
        if (c) {
          var b = Array.prototype.slice.call(arguments, 1);
          c.fire.apply(c, b)
        };
        return this
      }
    })
  }(),
  function(a) {
    "use strict";

    function e() {
      var d = a("<b></b>").html("<!--[if IE 8]><i></i><![endif]-->"),
        c = d.find("i").length,
        b = 1 === c;
      return d.remove(), b
    }
    var c = 300,
      b = 3,
      d = 25;
    a.fn.gesture = function(r) {
      function f(a) {
        a.preventDefault && a.preventDefault(), a.stopPropagation && a.stopPropagation()
      }

      function s(a, d) {
        var c = d ? !1 : !0;
        c && f(a);
        var b = {
          type: "mouse",
          timestamp: parseInt(a.timeStamp || (new Date).getTime()),
          position: m(a),
          pointers: a.which
        };
        return b
      }

      function u(a) {
        f(a);
        var c = a.touches.length,
          b = {
            type: "touch",
            timestamp: parseInt(a.timeStamp),
            pointers: c
          };
        switch (c) {
          case 1:
            b.position = m(a.touches[0]);
            break;
          case 2:
            b.position = o(a);
            break;
          default:
            b.position = null
        };
        return b
      }

      function h(d, c, b) {
        a.each(n, function(a, e) {
          e[d] && e[d](c, b)
        })
      }

      function o(a) {
        var f = a.touches[0],
          c = a.touches[1],
          b = m(f),
          d = m(c),
          e = [(b[0] + d[0]) / 2, (b[1] + d[1]) / 2];
        return e
      }

      function j(b) {
        var h = b.touches[0],
          d = b.touches[1],
          c = m(h),
          e = m(d),
          f = c[0] - e[0],
          a = c[1] - e[1],
          g = Math.round(Math.sqrt(f * f + a * a));
        return g
      }

      function m(a) {
        var d = x.offset();
        if (a) {
          var c = parseInt(a.clientX - d.left + t.scrollLeft()),
            b = parseInt(a.clientY - d.top + t.scrollTop());
          return [c, b]
        }
      }

      function k(h) {
        function d(d, c) {
          c = c || {};
          var b = a.extend({}, d, c);
          return b.delta || (b.delta = i ? [b.position[0] - i.position[0], b.position[1] - i.position[1]] : [0, 0]), b
        }

        function c(a, b) {
          h.trigger(a, b), i = b
        }

        function e(a) {
          var b = d(a, {
            delta: [0, 0]
          });
          c("drag:start.gesture", b)
        }

        function f(a) {
          var b = d(a, {
            pointers: i.pointers
          });
          c("drag:change.gesture", b)
        }

        function b(a) {
          var b = d(a, {
            position: i.position,
            pointers: i.pointers,
            offset: i.offset
          });
          c("drag:end.gesture", b)
        }

        function g(a) {
          var b = d(a, {
            position: i.position,
            pointers: i.pointers,
            offset: i.offset
          });
          c("drag:cancel.gesture", b)
        }
        var i = null;
        this.mousedown = function(a) {
          e(a)
        }, this.touchdown = function(a) {
          1 === a.pointers ? e(a) : 2 === a.pointers ? (b(a), e(a)) : b(a)
        }, this.mousemove = function(a) {
          f(a)
        }, this.touchmove = function(a) {
          f(a)
        }, this.mouseup = function(a) {
          b(a)
        }, this.touchup = function(a) {
          b(a)
        }, this.mousecancel = function(a) {
          g(a)
        }, this.touchcancel = function(a) {
          g(a)
        }
      }

      function q(k) {
        function e(d, c) {
          var b = a.extend({}, d, {
            delta: c || 0,
            pointers: 2
          });
          return b
        }

        function d(a, b) {
          k.trigger(a, b), l = b
        }

        function f(a) {
          var b = e(a);
          d("zoom:start.gesture", b)
        }

        function g(a, c) {
          var b = e(a, c);
          d("zoom:change.gesture", b)
        }

        function b(a) {
          var b = e(a);
          d("zoom:end.gesture", b)
        }

        function h(a) {
          var b = e(a);
          d("zoom:cancel.gesture", b)
        }
        var l = null,
          c = 0;
        this["mousewheel"] = function(a, c) {
          var b;
          b = i ? 100 * c.deltaY : c.deltaY * c.deltaFactor, g(a, b)
        }, this.touchdown = function(a, b) {
          2 === a.pointers && (f(a), c = 0)
        }, this.touchmove = function(a, e) {
          if (2 === a.pointers) {
            var d = j(e),
              b = 0 === c ? 0 : d - c;
            g(a, b), c = d
          }
        }, this.touchup = function(a, d) {
          c && 2 === l.pointers && (b(a), c = 0, l = null)
        }, this.touchcancel = function(a, b) {
          c && 2 === l.pointers && (h(a), c = 0, l = null)
        }
      }

      function p(a, e) {
        if (null === a || null === e) {
          return 0
        };
        var c = e[0] - a[0],
          b = e[1] - a[1],
          d = Math.sqrt(c * c + b * b);
        return d
      }

      function l(h) {
        function f(d, f) {
          var i = p(g.position, d.position),
            j = d.timestamp - g.timestamp;
          if (i > f || j > c) {
            return e = null, void((g = null))
          };
          if (null !== e && (i = p(e.position, d.position), j = d.timestamp - e.timestamp, f > i && c > j)) {
            var b = a.extend({}, d, {
              pointers: g.pointers,
              position: g.position
            });
            return h.trigger("tap:double.gesture", b), e = null, void((g = null))
          };
          e = d, g = null
        }
        var e = null,
          g = null;
        this.mousedown = function(a) {
          g = a
        }, this.touchdown = function(a) {
          g = a
        }, this.mouseup = function(a, c) {
          f(a, b)
        }, this.touchup = function(a, b) {
          f(a, d)
        }
      }

      function v(c) {
        var b = 0;
        this.mousedown = function(a) {
          b = a.pointers
        }, this.dblclick = function(d) {
          var e = a.extend({}, d, {
            pointers: b
          });
          c.trigger("tap:double.gesture", e)
        }
      }

      function y(h) {
        function f(c) {
          var b = a.extend({}, c, {
            pointers: g.pointers,
            position: g.position
          });
          return b
        }

        function e(a) {
          h.trigger("tap:single.gesture", a)
        }
        var g = null;
        this.mousedown = function(a, b) {
          g = a
        }, this.mouseup = function(d, i) {
          var h = p(g.position, d.position),
            j = d.timestamp - g.timestamp;
          if (b > h && c > j) {
            var a = f(d);
            e(a), g = null
          }
        }, this.touchdown = function(a) {
          g = a
        }, this.touchup = function(a) {
          var h = p(g.position, a.position),
            b = a.timestamp - g.timestamp;
          if (d > h && c > b) {
            var i = f(a);
            e(i), g = null
          }
        }
      }

      function w(b) {
        this.contextmenu = function(d) {
          var c = a.extend({}, d, {
            pointers: 3
          });
          b.trigger("contextmenu:shown.gesture", c)
        }
      }
      r = r || {};
      var g = !1,
        x = this,
        i = e(),
        n = [new y(this), new l(this), new q(this), new k(this), new w(this)];
      i && n.push(new v(this)), this.on("mousedown", function(a) {
        if (3 !== a.which) {
          g = !0;
          var b = s(a);
          h("mousedown", b, a)
        }
      }).on("mousemove", function(a) {
        if (g) {
          var b = s(a);
          h("mousemove", b, a)
        }
      }).on("mouseup", function(a) {
        if (g) {
          g = !1;
          var b = s(a);
          h("mouseup", b, a)
        }
      }).on("mouseleave", function(a) {
        if (g) {
          g = !1;
          var b = s(a);
          h("mousecancel", b, a)
        }
      }).on("mousewheel", function(a) {
        var b = s(a);
        h("mousewheel", b, a)
      }).on("touchstart", function(a) {
        a = a.originalEvent;
        var b = u(a);
        g = !0, h("touchdown", b, a)
      }).on("touchmove", function(a) {
        if (g) {
          a = a.originalEvent;
          var b = u(a);
          h("touchmove", b, a)
        }
      }).on("touchend", function(a) {
        if (g) {
          a = a.originalEvent, g = !1;
          var b = u(a);
          h("touchup", b, a)
        }
      }).on("touchcancel", function(a) {
        if (g) {
          a = a.originalEvent, g = !1;
          var b = u(a);
          h("touchcancel", b, a)
        }
      }).on("click", function(a) {
        var b = s(a);
        h("click", b, a)
      }).on("dblclick", function(a) {
        var b = s(a);
        h("dblclick", b, a)
      }).on("contextmenu", function(a) {
        a = a.originalEvent;
        var b = s(a);
        return h("contextmenu", b, a), !1
      });
      var t = a(window);
      return this
    }
  }(jQuery), $(function() {
    var b = "([a-zA-Z0-9-._]+.xuantech.cn)|([a-zA-Z0-9-._]+.xuanke3d.com$)$",
      h = window.location.hostname,
      d = new RegExp(b, "g"),
      c = new App;
    if (window.XK3D.api = new Api(c), !d.test(h)) {
      c.startup()
    } else {
      var e = $("div.cover"),
        f = e.find(".loading"),
        a = e.find(".error"),
        g = a.find(".message");
      f.hide(), a.show(), g.text("您所访问的域名不合法，请访问首页查看最新的内容，谢谢。:-)")
    }
  }),
  function() {
    ! function() {
      for (var a = 0, c = ["webkit", "moz"], b = 0; b < c.length && !window.requestAnimationFrame; ++b) {
        window.requestAnimationFrame = window[c[b] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c[b] + "CancelAnimationFrame"] || window[c[b] + "CancelRequestAnimationFrame"]
      };
      window.requestAnimationFrame || (window.requestAnimationFrame = function(f, c) {
        var b = (new Date).getTime(),
          d = Math.max(0, 20),
          e = window.setTimeout(function() {
            f(b + d)
          }, d);
        return a = b + d, e
      }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
        clearTimeout(a)
      })
    }(), String.prototype.format || (String.prototype.format = function() {
      var a = arguments;
      return this.replace(/{(\d+)}/g, function(c, b) {
        return "undefined" != typeof a[b] ? a[b] : c
      })
    }), window.appPlugins = [], window.App = EventEmitter.extend(function() {
      var a = Utils.getParameterByName("name");
      this.model = new Model(a), this.cache = new Cache(this.model), this.frame = new Frame, this.modal = new Modal, this.toolbar = new Toolbar, this.mask = new Mask, this.canvas = Modernizr.canvas ? new NativeCanvas(this.frame) : new SimulateCanvas, this.cover = new Cover, this.components = {}, this.controllers = [], this.plugins = [], this.config = Utils.parseUri(window.location.href).queryKey || {}, this.component("model", this.model), this.component("transformation", new Transformation), this.component("cache", this.cache), this.component("frame", this.frame), this.component("modal", this.modal), this.component("toolbar", this.toolbar), this.component("canvas", this.canvas), this.component("cover", this.cover), this.component("mask", this.mask), this.controller(ModalController), this.controller(ToolbarController), this.controller(MaskController), this.controller(CanvasController), this.controller(CoverController), this.controller(CacheController), this.controller(SwitchController)
    }).methods({
      startup: function() {
        function a() {
          if ($.each(b.controllers, function(a, c) {
              new c(b)
            }), $.each(window.appPlugins, function(a, c) {
              new c(b)
            }), window.XK3D.onStartup && window.XK3D.onStartup.fire.call(window.XK3D.onStartup, window.XK3D.api), "hide" === b.config.popup) {
            var a = b.get("frame");
            a.hidePopupButton()
          };
          b.model.load()
        }
        var b = this;
        this.frame.isInFrame() && this.frame.isIE(8) || b.controller(XK3D.PreloadController), a(), b.emit("startup")
      },
      component: function(a, b) {
        if (void(0) !== this.components[a]) {
          throw new Error("Already Registered: " + a)
        };
        return this.components[a] = b, this
      },
      controller: function(a) {
        return void(0) !== a && this.controllers.push(a), this
      },
      get: function(a) {
        if (void(0) === this.components[a]) {
          throw new Error("Not Registered: " + a)
        };
        return this.components[a]
      }
    })
  }(),
  function() {
    "use strict";
    window.XK3D = window.XK3D || {};
    var a = null;
    window.Api = klass(function(b) {
      a = b
    }).methods({
      onModelSwitched: function(b) {
        return a.on("modelSwitched", b), this
      },
      onHotspotsChanged: function(b) {
        return a.on("hotspotsChanged", b), this
      },
      onModalVisibleChanged: function(b) {
        return a.on("onModalVisibleChanged", b), this
      },
      onMouseMoveStart: function(b) {
        return a.on("mouseMoveStart", b), this
      },
      onMouseMoveEnd: function(b) {
        return a.on("mouseMoveEnd", b), this
      },
      switchModel: function(b) {
        a.emit("switchModelByHotspot", b)
      },
      getCurrentModel: function() {
        var b = a.get("model");
        return b.getName()
      },
      disableDefaultHotspot: function() {
        a.config.hotspots = "hide"
      }
    })
  }(),
  function() {
    "use strict";
    window.Model = EventEmitter.extend(function(a) {
      this.angleV = 90, this.angleH = 0, this.offsetX = 0, this.offsetY = 0, this.edgeW = -1, this.edgeH = -1, this.sizeLevel = null, this.name = a, this.meta = null, this.aspect = 0
    }).methods({
      getName: function() {
        return this.name
      },
      setName: function(a) {
        return this.name = a, this.emit("imageChanged", "nameChanged"), this
      },
      switchModel: function(a) {
        var b = this;
        return b.name = a, b._loadMeta(b.name).done(function(a) {
          b.meta = a, b._initModel();
          [b.edgeW, b.edgeH];
          b.aspect = b.meta.l[0] / b.meta.l[1], b.edgeH = b.edgeW / b.aspect, b._updateProperSize(), b._updateImageLevel(), b.emit("modelSwitched")
        }).fail(function(a, d, c) {
          var e = a.status;
          b.emit("modelLoadedError", e)
        }), this
      },
      getModelAspect: function() {
        return this.meta.modelAspect
      },
      getModelAspectFactor: function() {
        return this.meta.modelAspectFactor || 1
      },
      getAngle: function() {
        return [this.angleV, this.angleH]
      },
      getModelCenterOffset: function() {
        var a = Math.round(this.offsetX),
          b = Math.round(this.offsetY);
        return [a, b]
      },
      getMeta: function() {
        return this.meta
      },
      getTitle: function() {
        return this.meta.name
      },
      getBgcolor: function() {
        return this.meta.bgcolor
      },
      reset: function(a) {
        this.aspect = this.meta.l[0] / this.meta.l[1], this.angleV = this.meta.start[0], this.angleH = this.meta.start[1], this.offsetX = this.offsetY = 0, this.rotate(0, 0), a[0] = Math.round(a[0] * this.meta.initScale), a[1] = Math.round(a[1] * this.meta.initScale), this.setSize(a), this.move(0, 0)
      },
      perform: function() {
        this.emit("imageChanged", "perform")
      },
      rotate: function(a, b) {
        this.angleV += Math.round(a), this.angleH += Math.round(b), this.angleH += 360, this.angleH %= 360, 360 == this.meta.range.v[1] ? (this.angleV += 360, this.angleV %= 360) : (this.angleV = Math.min(this.angleV, this.meta.range.v[1]), this.angleV = Math.max(this.angleV, this.meta.range.v[0])), this.emit("imageChanged", "rotate")
      },
      move: function(a, b) {
        this.offsetX += a, this.offsetY += b, this.emit("imageMoved")
      },
      getOffset: function() {
        return [this.offsetX, this.offsetY]
      },
      zoom: function(b, h, d) {
        var c = h - this.offsetX,
          e = d - this.offsetY,
          f = 1,
          a = [this.edgeW, this.edgeH],
          g = [Math.round(this.edgeW *= b), Math.round(this.edgeH *= b)];
        this.computeSize(g), f = this.edgeW / a[0], c = Math.round(c * (1 - f)), e = Math.round(e * (1 - f)), this.offsetX += c, this.offsetY += e, this.emit("imageZoomed")
      },
      getSize: function() {
        return [this.edgeW, this.edgeH]
      },
      setSize: function(a) {
        this.computeSize(a), this.emit("imageZoomed")
      },
      computeSize: function(a) {
        var b = a[0] / a[1];
        b > this.aspect ? (this.edgeH = a[1], this.edgeW = this.edgeH * this.aspect) : (this.edgeW = a[0], this.edgeH = this.edgeW / this.aspect), this._updateProperSize(), this._updateImageLevel()
      },
      getSizeLevel: function() {
        return this.sizeLevel
      },
      buildImageURL: function(a) {
        a = a || {}, 0 === a.sizeLevel && (a.sizeLevel = "0"), 0 === a.angleV && (a.angleV = "0"), 0 === a.angleH && (a.angleH = "0");
        var b = "/xkmodels/image.jpg?name={0}&size={1}&v={2}&h={3}&t={4}".format(this.name, a.sizeLevel || this.sizeLevel, a.angleV || this.angleV, a.angleH || this.angleH, this.meta.timestamp);
        return b
      },
      load: function() {
        var a = this;
        a._loadMeta(a.name).done(function(b) {
          a.meta = b, a._initModel(), a.emit("modelLoaded", a.meta)
        }).fail(function(e, c, b) {
          var d = e.status;
          a.emit("modelLoadedError", d)
        })
      },
      _loadMeta: function(a) {
        var b = "/xkmodels/meta.json?name={0}&t={1}".format(a, (new Date).getTime());
        return $.ajax({
          url: b,
          type: "GET",
          dataType: "json",
          timeout: 5e3
        })
      },
      _initModel: function() {
        void(0) === this.meta.bgcolor && (this.meta.bgcolor = "#ffffff"), void(0) === this.meta.range && (this.meta.range = {
          v: [0, 180],
          h: [0, 360]
        }), void(0) === this.meta.start && (this.meta.start = [(this.meta.range.v[0] + this.meta.range.v[1]) / 2, this.meta.range.h[0]]), void(0) === this.meta.initScale && (this.meta.initScale = 1), void(0) === this.meta.modelAspect && (this.meta.modelAspect = 1, this.meta.modelAspectFactor = 1)
      },
      _updateProperSize: function() {
        var a = 1.2 * this.meta.l[0],
          b = this.meta.s[0] / 1.5;
        this.aspect > 1 ? this.edgeW > a ? (this.edgeW = a, this.edgeH = this.edgeW / this.aspect) : this.edgeW < b && (this.edgeW = b, this.edgeH = this.edgeW / this.aspect) : (a = 1.2 * this.meta.l[1], b = this.meta.s[1] / 1.5, this.edgeH > a ? (this.edgeH = a, this.edgeW = this.edgeH * this.aspect) : this.edgeH < b && (this.edgeH = b, this.edgeW = this.edgeH * this.aspect))
      },
      _updateImageLevel: function() {
        this.edgeW = Math.round(this.edgeW), this.edgeH = Math.round(this.edgeH);
        var a = (this.meta.s[0] + this.meta.m[0]) / 3,
          c = (this.meta.m[0] + this.meta.l[0]) / 3,
          b = this.sizeLevel;
        this.sizeLevel = this.edgeW < a ? "0" : this.edgeW < c ? "1" : "2", b !== this.sizeLevel && this.emit("imageChanged", "zoom")
      }
    })
  }(), Utils = {
    options: {
      strictMode: !1,
      key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
      q: {
        name: "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
      },
      parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
      }
    },
    pad: function(a, c) {
      for (var b = a + ""; b.length < c;) {
        b = "0" + b
      };
      return b
    },
    getParameterByName: function(a) {
      a = a.replace(/[\[]/, "\[").replace(/[\]]/, "\]");
      var c = new RegExp("[\?&]" + a + "=([^&#]*)"),
        b = c.exec(location.search);
      return null == b ? "" : decodeURIComponent(b[1].replace(/\+/g, " "))
    },
    parseUri: function(a) {
      for (var e = this.options, c = e.parser[e.strictMode ? "strict" : "loose"].exec(a), b = {}, d = 14; d--;) {
        b[e.key[d]] = c[d] || ""
      };
      return b[e.q.name] = {}, b[e.key[12]].replace(e.q.parser, function(a, c, d) {
        c && (b[e.q.name][c] = d)
      }), b
    }
  },
  function() {
    "use strict";
    window.Transformation = klass(function() {
      this.$screenControl
    }).methods({
      bind: function(a) {
        this.$screenControl = a
      },
      width: function() {
        return this.$screenControl.width()
      },
      height: function() {
        return this.$screenControl.height()
      },
      modelToScreen: function(a) {
        var c = Math.round(this.width() / 2 + a[0]),
          b = Math.round(this.height() / 2 + a[1]);
        return [c, b]
      },
      screenToModel: function(a) {
        var c = Math.round(a[0] - this.width() / 2),
          b = Math.round(a[1] - this.height() / 2);
        return [c, b]
      }
    }), window.ReferenceBoxies = klass(function() {}).methods({
      update: function(a, f, c, b) {
        var d = [b[0], b[1] - c],
          e = [b[0], b[1] + c];
        this._topArea = {
          x: d[0] - a / 2,
          y: d[1] - f / 2,
          width: a,
          height: f,
          center: d
        }, this._bottomArea = {
          x: e[0] - a / 2,
          y: e[1] - f / 2,
          width: a,
          height: f,
          center: e
        }
      },
      updateVisibility: function(a, b) {
        this._isTopVisible = a, this._isBottomVisible = b
      },
      isTopVisible: function() {
        return this._isTopVisible
      },
      isBottomVisible: function() {
        return this._isBottomVisible
      },
      topArea: function() {
        return this._topArea
      },
      bottomArea: function() {
        return this._bottomArea
      },
      isLine: function() {
        return this._isTopVisible && this._isBottomVisible
      },
      isReversed: function() {
        return this._topArea.center[1] > this._bottomArea.center[1]
      }
    })
  }(),
  function() {
    "use strict";
    window.Cache = EventEmitter.extend(function(a) {
      this.model = a, this.images = [], this.bigImageActive = null, this.count = 0
    }).methods({
      init: function() {
        var a, d, c = this,
          b = c.model.getMeta();
        for (a = b.range.v[0]; a <= b.range.v[1]; a += 5) {
          for (d = b.range.h[0]; d < b.range.h[1]; d += 5) {
            c.images.push(null)
          }
        }
      },
      load: function(a) {
        var c = $.Deferred(),
          b = this;
        return b.get(a, function() {
          c.resolve()
        }), c.promise()
      },
      get: function(a, f) {
        var c = this,
          b = c.model.buildImageURL({
            sizeLevel: a.sizeLevel,
            angleV: a.v,
            angleH: a.h
          });
        if ("0" === a.sizeLevel) {
          var d = c.computeIndex(a);
          if (null == c.images[d]) {
            this.count++;
            var e = $("<img />").one("load", function() {
              c.images[d] = e, f(c.images[d])
            }).one("error", function() {
              f()
            });
            e.attr("src", b)
          } else {
            f(c.images[d])
          }
        } else {
          var e = $("<img />");
          e.one("load", function() {
            null != c.bigImageActive && (c.bigImageActive.remove(), delete c.bigImageActive), c.bigImageActive = e, f(c.bigImageActive)
          }).one("error", function() {
            f()
          }), e.attr("src", b)
        }
      },
      empty: function() {
        this.images = []
      },
      onImageLoaded: function(a, b) {},
      computeIndex: function(a) {
        var c = this.model.getMeta(),
          b = (a.v - c.range.v[0]) / 5 * 72 + (a.h - c.range.h[0]) / 5;
        return b
      }
    })
  }(),
  function() {
    "use strict";

    function a(a) {
      return "#" + (a[0] << 16 | a[1] << 8 | a[2]).toString(16)
    }
    window.NativeCanvas = EventEmitter.extend(function(a) {
      var b = this;
      this.frame = a, this.container = $("div.canvas"), this.container.empty(), this.canvas = $("<canvas></canvas>"), this.canvas.appendTo(this.container), this.context = this.canvas[0].getContext("2d"), this.imageSize = null, this.imageOffset = [0, 0], this.isDirty = !1, this.isPaused = !1, this.isBgcolorFixed = !1, this.bgcolor = "#fff", this.drawingImage = null, this.waitingImage = null, a.on("frameResized", function(a, c) {
        b.updateCanvasSize(a)
      }), b.lastFrameTimestamp = -1, b.animationFrameId = -1
    }).methods({
      animloop: function() {
        var a = this;
        a.animationFrameId = window.requestAnimationFrame(function() {
          a.animloop()
        }), a.isDirty && !a.isPaused && (a.drawImage(), a.lastFrameTimestamp = (new Date).getTime())
      },
      getContainer: function() {
        return this.container
      },
      getViewWidth: function() {
        return this.container.width()
      },
      getViewHeight: function() {
        return this.container.height()
      },
      getImageWidth: function() {
        return this.imageSize[0]
      },
      getImageHeight: function() {
        return this.imageSize[1]
      },
      pause: function() {
        this.isPaused = !0
      },
      resume: function() {
        this.isPaused = !1
      },
      updateImage: function(a) {
        this.waitingImage = a, this.makeDirty()
      },
      scaleImage: function(a, b) {
        this.imageSize = a, this.updateOffset(b[0], b[1]), this.makeDirty()
      },
      moveImage: function(a, b) {
        this.updateOffset(a, b), this.makeDirty()
      },
      updateOffset: function(a, b) {
        this.canvasSize && (a += Math.round((this.canvasSize[0] - this.imageSize[0]) / 2), b += Math.round((this.canvasSize[1] - this.imageSize[1]) / 2), this.imageOffset = [a, b])
      },
      updateParams: function(a, d, c, b) {
        this.bgcolor = a, this.imageSize = d, this.canvasSize && (c += Math.round((this.canvasSize[0] - this.imageSize[0]) / 2), b += Math.round((this.canvasSize[1] - this.imageSize[1]) / 2), this.imageOffset = [c, b], this.isBgcolorFixed = !1, this.makeDirty())
      },
      drawImage: function() {
        if (this.canvasSize) {
          this.clearCanvas(), this.drawingImage = this.waitingImage;
          var a = this.drawCanvas();
          a && !this.isBgcolorFixed ? this.fixBgColor() : this.isDirty = !1
        }
      },
      fixBgColor: function() {
        if (null == this.drawingImage) {
          return !1
        };
        var d = $("<canvas></canvas>"),
          c = d[0].getContext("2d");
        c.drawImage(this.drawingImage[0], 0, 0, this.imageSize[0], this.imageSize[1]);
        var b = c.getImageData(0, 0, 1, 1).data;
        this.setBgcolor(a(b)), this.isBgcolorFixed = !0
      },
      clearCanvas: function() {
        this.context.fillStyle = this.bgcolor, this.context.fillRect(0, 0, this.canvasSize[0], this.canvasSize[1])
      },
      drawCanvas: function() {
        return null == this.drawingImage ? !1 : (this.context.drawImage(this.drawingImage[0], this.imageOffset[0], this.imageOffset[1], this.imageSize[0], this.imageSize[1]), !0)
      },
      updateCanvasSize: function(a) {
        this.canvasSize = a, this.canvas.attr("width", this.canvasSize[0]), this.canvas.attr("height", this.canvasSize[1]), this.makeDirty()
      },
      setBgcolor: function(a) {
        this.bgcolor = a
      },
      makeDirty: function() {
        var a = this,
          b = (new Date).getTime() - a.lastFrameTimestamp;
        a.isDirty = !0, b > 500 && (a.animationFrameId > 0 && (window.cancelAnimationFrame(a.animationFrameId), a.animationFrameId = -1), a.animloop())
      }
    })
  }(),
  function() {
    "use strict";
    window.SimulateCanvas = EventEmitter.extend(function() {
      var a = this;
      this.container = $("div.canvas"), this.imageLayer = $(".layer-images"), this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.drawingImage = null, this.isDirty = !1, this.isPaused = !1,
        function b() {
          window.requestAnimationFrame(b), a.isDirty && !a.isPaused && a.updateImageLayer()
        }()
    }).methods({
      getContainer: function() {
        return this.container
      },
      getViewWidth: function() {
        return this.container.width()
      },
      getViewHeight: function() {
        return this.container.height()
      },
      getImageWidth: function() {
        return this.imageLayer.width()
      },
      getImageHeight: function() {
        return this.imageLayer.height()
      },
      pause: function() {
        this.isPaused = !0
      },
      resume: function() {
        this.isPaused = !1
      },
      updateImage: function(a) {
        null != this.drawingImage && this.drawingImage.remove().removeAttr("width").removeAttr("height"), this.drawingImage = a, this.drawingImage.appendTo(this.imageLayer), this.setStyle()
      },
      setStyle: function() {
        null !== this.drawingImage && this.drawingImage.attr("width", this.w + "px").attr("height", this.h + "px")
      },
      scaleImage: function(a, b) {
        this.w = a[0], this.h = a[1], this.isDirty = !0, this.isImageZoomed = !0, this.moveImage(b[0], b[1])
      },
      moveImage: function(a, b) {
        this.x = a, this.y = b, this.isDirty = !0, this.isImageMoved = !0
      },
      updateImageLayer: function() {
        if (this.isImageMoved) {
          var a = Math.round((this.container.width() - this.w) / 2) + this.x,
            b = Math.round((this.container.height() - this.h) / 2) + this.y;
          this.imageLayer.css({
            left: a,
            top: b
          }), this.isImageMoved = !1
        };
        this.isImageZoomed && (this.imageLayer.css({
          width: this.w,
          height: this.h
        }), this.setStyle(), this.isImageZoomed = !1)
      },
      setBgcolor: function(a) {
        this.container.find("div.split").css({
          backgroundColor: a
        })
      },
      updateParams: function(a, d, c, b) {
        this.setBgcolor(a), this.w = d[0], this.h = d[1], this.isImageZoomed = !0, this.x = c, this.y = b, this.isImageMoved = !0, this.isDirty = !0
      }
    })
  }(),
  function() {
    "use strict";
    window.Cover = EventEmitter.extend(function() {
      this.container = $("div.cover"), this.loadingLayer = this.container.find(".loading"), this.errorLayer = this.container.find(".error"), this.errorMessage = this.errorLayer.find(".message")
    }).methods({
      getContainer: function() {
        return this.container
      },
      getViewWidth: function() {
        return this.container.width()
      },
      getViewHeight: function() {
        return this.container.height()
      },
      hide: function() {
        this.container.hide()
      },
      removeLoading: function() {
        this.loadingLayer.hide()
      },
      showError: function(a) {
        this.removeLoading(), this.errorLayer.show(), this.errorMessage.text(a)
      }
    })
  }(),
  function() {
    "use strict";
    window.Frame = EventEmitter.extend(function() {
      var a = this;
      this.win = $(window), this.winSize = null, this.body = $("body"), this.enableScroll = !1, this.dragSwitch = new DragSwitch($("body")), this.inFrame = !1, Modernizr.touch && (FastClick.attach(document.body), $("a").on("touchstart", function() {
        $(this).addClass("hover")
      }).on("touchend", function() {
        $(this).removeClass("hover")
      }).on("touchcancel", function() {
        $(this).removeClass("hover")
      }), this.dragSwitch.off()), window.frames.length !== parent.frames.length ? (this.body.addClass("iframe"), this.inFrame = !0, $("a#btn-popup").attr("href", window.location.href)) : (this.body.addClass("no-iframe"), this.inFrame = !1), setInterval(function() {
        var d = a.winSize,
          c = a.updateSize();
        if (c) {
          var b = a.winSize;
          a.emit("frameResized", b, d)
        }
      }, 50)
    }).methods({
      isInFrame: function() {
        return this.inFrame
      },
      isIE: function(a) {
        var b = document.createElement("b");
        return b.innerHTML = "<!--[if IE " + a + "]><i></i><![endif]-->", 1 === b.getElementsByTagName("i").length
      },
      setScrollEnabled: function(a) {
        a ? this.dragSwitch.on() : this.dragSwitch.off()
      },
      add: function(a) {
        var b = 1e3;
        $.each(a, function(a, c) {
          c.getContainer().css({
            zIndex: b
          }), b -= 100
        })
      },
      updateSize: function() {
        var a = window.innerHeight ? window.innerHeight : $(window).height(),
          d = this.win.width(),
          c = !1;
        if (0 !== d && 0 !== a && (this.winSize ? (this.winSize[0] !== d || this.winSize[1] !== a) && (c = !0) : c = !0), c) {
          this.winSize = [d, a];
          var b = {
            width: this.winSize[0],
            height: this.winSize[1]
          };
          this.body.css(b)
        };
        return c
      },
      setBgcolor: function(a) {
        this.body.css({
          backgroundColor: a
        })
      },
      setTitle: function(a) {
        a && (document.title = a)
      },
      hidePopupButton: function() {
        $("a#btn-popup").css("display", "none")
      }
    }), window.DragSwitch = klass(function(a) {
      function c(a) {
        b.isEnabled || (a = a.originalEvent, a.preventDefault(), a.stopPropagation())
      }
      var b = this;
      this.element = a, this.isEnabled = !0, this.element.on("touchstart", function(a) {}).on("touchmove", function(a) {
        c(a)
      }).on("touchend", function(a) {})
    }).methods({
      on: function() {
        this.isEnabled = !0
      },
      off: function() {
        this.isEnabled = !1
      }
    })
  }(),
  function() {
    "use strict";
    window.Mask = EventEmitter.extend(function() {
      this.container = $("div.mask"), this.gesture = this.container.gesture()
    }).methods({
      getContainer: function() {
        return this.container
      },
      getWidth: function() {
        return this.container.width()
      },
      getHeight: function() {
        return this.container.height()
      },
      getGesture: function() {
        return this.gesture
      },
      changeIcon: function(a) {
        var b;
        switch (a) {
          case "h":
            b = "ew-resize";
            break;
          case "v":
            b = "ns-resize";
            break;
          default:
            b = "move"
        };
        Modernizr.touch || this.container.css({
          cursor: b
        })
      }
    })
  }(),
  function() {
    "use strict";
    window.Modal = EventEmitter.extend(function() {
      var a = this;
      this.container = $("div.modal"), this.closeButton = this.container.find("a.close"), this.container.on("click", function(c) {
        var b = "#" + $(this).attr("id");
        a.emit("closeButtonClicked", b), c.stopPropagation()
      }).on("mousewheel", function(a) {
        a.stopPropagation(), a.preventDefault()
      }), this.container.find("div.content").click(function(a) {
        a.stopPropagation()
      }), this.container.find("div.body").on("mousewheel", function(a, d) {
        a.stopPropagation();
        var c = this.scrollHeight,
          b = $(this).height();
        (this.scrollTop === c - b && 0 > d || 0 === this.scrollTop && d > 0) && a.preventDefault()
      }), this.closeButton.click(function(d) {
        var c = $(this).parentsUntil(".modal").parent(),
          b = "#" + c.attr("id");
        a.emit("closeButtonClicked", b), d.stopPropagation()
      }), this.container.hide(), $("div.qrcode").qrcode({
        render: Modernizr.canvas ? "canvas" : "table",
        text: window.location.href,
        width: 200,
        height: 200
      })
    }).methods({
      getContainer: function() {
        return this.container
      },
      show: function(a) {
        var b = this;
        b.emit("showing"), $(a).fadeIn(function() {
          b.emit("shown")
        })
      },
      hide: function(a) {
        var b = this;
        b.emit("hidding"), $(a).fadeOut(function() {
          b.emit("hidden")
        })
      },
      setInfoLayer: function(a) {
        $("#modal-info").find(".body").html(a)
      }
    })
  }(),
  function() {
    "use strict";
    window.SwitchView = EventEmitter.extend(function(a) {
      var b = this;
      this.$activeButton = null, this.$buttons = {}, this.$container = $("div.switch"), $.each(a, function(a, d) {
        var c = $("<a></a>").attr("class", "switch-button").attr("href", "javascript:;").html(a).on("click", function() {
          return b.$activeButton == c ? !1 : (null != b.$activeButton && b.$activeButton.removeClass("active"), b.$activeButton = c, b.$activeButton.addClass("active"), void(b).emit("switchButtonClick", a, d))
        }).appendTo(b.$container);
        b.$buttons[d] = c
      }), $("body").append(this.$container)
    }).methods({
      activate: function(a) {
        var b = this.$buttons[a];
        return this.$activeButton == b ? !1 : (null != this.$activeButton && this.$activeButton.removeClass("active"), void((null != b && (this.$activeButton = b, this.$activeButton.addClass("active")))))
      },
      hide: function() {
        this.$container.hide()
      },
      show: function() {
        this.$container.show()
      }
    })
  }(),
  function() {
    "use strict";
    window.Toolbar = EventEmitter.extend(function() {
      function a(a, c) {
        b.currentButton.removeClass("active"), b.currentButton.addClass("icon-clean"), b.currentButton.removeClass("icon-clean"), b.currentButton = a, b.currentButton.addClass("active"), b.emit(c)
      }
      var b = this;
      this.container = $("div.toolbar"), this.rotateButton = $("#btn-rotate"), this.moveButton = $("#btn-move"), this.zoomInButton = $("#btn-zoom-in"), this.zoomOutButton = $("#btn-zoom-out"), this.infoButton = $("#btn-info"), this.helpButton = $("#btn-help"), this.qrcodeButton = $("#btn-qrcode"), this.popupButton = $("#btn-popup"), this.currentButton = this.rotateButton, this.rotateButton.click(function() {
        a($(this), "rotateButtonClicked")
      }), this.moveButton.click(function() {
        a($(this), "moveButtonClicked")
      }), this.zoomInButton.click(function() {
        b.emit("zoomInButtonClicked")
      }), this.zoomOutButton.click(function() {
        b.emit("zoomOutButtonClicked")
      }), this.infoButton.click(function() {
        b.emit("infoButtonClicked")
      }), this.helpButton.click(function() {
        b.emit("helpButtonClicked")
      }), this.qrcodeButton.click(function() {
        b.emit("qrcodeButtonClicked")
      })
    }).methods({
      getContainer: function() {
        return this.container
      },
      show: function() {
        this.container.show(), this.popupButton.show()
      },
      hide: function() {
        this.container.hide(), this.popupButton.hide()
      },
      getButton: function(a) {
        switch (a) {
          case "rotate":
            return this.rotateButton;
          case "move":
            return this.moveButton;
          case "info":
            return this.infoButton;
          case "help":
            return this.helpButton;
          case "qrcode":
            return this.qrcodeButton;
          case "popup":
            return this.popupButton
        }
      }
    })
  }(),
  function() {
    "use strict";
    window.CacheController = function(a) {
      function f(a) {
        b.get(a, function(g) {
          if (null != g && b.emit(a.eventType, g), null !== e) {
            var c = e;
            e = null, f(c)
          } else {
            d = !1
          }
        })
      }
      var c = a.get("model"),
        b = a.get("cache"),
        d = !1,
        e = null;
      c.on("modelLoaded", function() {
        b.init()
      }).on("imageChanged", function(b) {
        var g = c.getAngle(),
          a = {
            v: g[0],
            h: g[1],
            sizeLevel: "rotate" === b ? "0" : c.getSizeLevel(),
            eventType: "imageLoaded"
          };
        d ? e = a : (d = !0, f(a))
      }).on("modelSwitched", function(g) {
        b.empty();
        var a = c.getAngle(),
          h = {
            v: a[0],
            h: a[1],
            sizeLevel: c.getSizeLevel(),
            eventType: "modelSwitched"
          };
        d ? e = h : (d = !0, f(h))
      })
    }
  }(),
  function() {
    "use strict";
    window.CanvasController = function(a) {
      var e = a.get("model"),
        c = a.get("cache"),
        b = a.get("frame"),
        d = a.get("canvas");
      e.on("modelLoaded", function() {
        b.setBgcolor(e.getBgcolor()), b.setTitle(e.getTitle()), d.setBgcolor(e.getBgcolor());
        var a = e.buildImageURL({
          sizeLevel: 2
        });
        $("img#weixin-preview-img").prop("src", a)
      }).on("modelSwitched", function(a) {
        b.setBgcolor(e.getBgcolor());
        var c = e.getOffset();
        d.updateParams(e.getBgcolor(), e.getSize(), c[0], c[1])
      }), c.on("modelSwitched", function(a) {
        d.updateImage(a)
      }), c.on("imageLoaded", function(a) {
        d.updateImage(a)
      }), e.on("imageMoved", function() {
        var a = e.getOffset();
        d.moveImage(a[0], a[1])
      }), e.on("imageZoomed", function() {
        d.scaleImage(e.getSize(), e.getOffset())
      })
    }
  }(),
  function() {
    "use strict";
    window.CoverController = function(a) {
      function e() {
        b.off("imageLoaded", e), d.hide()
      }
      var c = a.get("model"),
        b = a.get("cache"),
        d = a.get("cover");
      b.on("imageLoaded", e), c.on("modelLoadedError", function(a) {
        var b;
        switch (a) {
          case 404:
            b = "您所访问的模型链接已经失效，请访问首页查看最新的内容，谢谢。:-)";
            break;
          default:
            b = "三维服务暂时不可用，请访问首页查看其他内容，谢谢。:-)"
        };
        d.showError(b)
      })
    }
  }(),
  function() {
    "use strict";
    var a = 5,
      d = 10,
      c = 10,
      b = Math.PI / 180;
    window.MaskController = function(q) {
      function s(a, c, b) {
        c = void(0) === c ? 0 : c - p.getWidth() / 2, b = void(0) === b ? 0 : b - p.getHeight() / 2, m.zoom(a, c, b), o()
      }

      function e(a) {
        m.move(a.delta[0], a.delta[1]), o()
      }

      function t(g) {
        {
          var d = y[0] + g.delta[0],
            e = y[1] + g.delta[1];
          m.getModelAspect()
        }
        null === h && (h = new i);
        var f = h.getDirection();
        if (null === f) {
          var b = h.test(g);
          return void((b && (f = h.getDirection(), p.changeIcon(f))))
        };
        switch (f) {
          case "h":
            Math.abs(d) > c ? (d = n.adjustDeltaX(g.position[1], d), d = Math.round(d / c) * a, y[0] = 0, y[1] = 0, m.rotate(0, d)) : y[0] = d;
            break;
          case "v":
            Math.abs(e) > c ? (e = Math.round(e / c) * a, y[0] = 0, y[1] = 0, m.rotate(e, 0)) : y[1] = e
        };
        o()
      }

      function w(a) {
        z === t && 1 === a.pointers && (y = [0, 0], f = !1, p.changeIcon(""), h = null, r.one("imageLoaded", function() {
          q.emit("rotateEnd")
        }), m.perform())
      }

      function g() {
        if (v && j) {
          var a = 40;
          m.reset([p.getWidth(), p.getHeight() - a]), m.move(0, -a / 2), m.perform(), o()
        }
      }

      function o() {
        n && n.update(), window.modelAspectDebugger && n && window.modelAspectDebugger.update(n.referenceBoxies())
      }

      function i() {
        var a = this,
          c = null,
          b = null;
        a.getDirection = function() {
          return b
        }, a.test = function(e) {
          if (null === c) {
            return c = e.position, !1
          };
          var f = e.position[0] - c[0],
            g = e.position[1] - c[1],
            a = Math.sqrt(f * f + g * g);
          return a > d ? (b = Math.abs(f) > Math.abs(g) ? "h" : "v", !0) : !1
        }
      }
      var m = q.get("model"),
        k = q.get("transformation"),
        r = q.get("cache"),
        p = q.get("mask"),
        l = q.get("frame"),
        x = q.get("toolbar"),
        A = p.getGesture(),
        y = [0, 0],
        f = !1,
        z = t,
        h = null,
        n = null,
        v = !1,
        j = !1;
      m.on("modelLoaded", function() {
        v = !0, k.bind(p.getContainer()), n = new u(m, k), g()
      }).on("modelSwitched", function() {
        o()
      }), p.on("resetButtonClicked", function() {
        g()
      }), A.on("tap:double.gesture", function(a, b) {
        g()
      }).on("drag:start.gesture", function(a, b) {
        z === t && 1 === b.pointers && q.emit("rotateStart"), q.emit("mouseMoveStart")
      }).on("drag:change.gesture", function(a, b) {
        switch (b.pointers) {
          case 1:
            z(b);
            break;
          case 2:
            e(b)
        }
      }).on("drag:end.gesture", function(a, b) {
        w(b), q.emit("mouseMoveEnd")
      }).on("drag:cancel.gesture", function(a, b) {
        w(b), q.emit("mouseMoveLeft")
      }).on("zoom:change.gesture", function(b, f) {
        var d = 1;
        if ("touch" === f.type) {
          var c = p.getWidth(),
            e = p.getHeight(),
            a = Math.round(Math.sqrt(c * c + e * e));
          d += f.delta / a * 2
        } else {
          f.delta > 100 ? f.delta = 100 : f.delta < -100 && (f.delta = -100), d = 1 + f.delta / 1e3
        };
        s(d, f.position[0], f.position[1])
      }).on("zoom:end.gesture", function(a, b) {}).on("contextmenu:shown.gesture", function(a, b) {
        q.emit("contextmenuShown", b)
      }), l.on("frameResized", function(a, e) {
        if (null === e || null === a) {
          return j = !0, void(g)()
        };
        var c = Math.sqrt(a[0] * a[1]),
          b = Math.sqrt(e[0] * e[1]),
          d = c / b;
        s(d)
      }), x.on("rotateButtonClicked", function() {
        z = t
      }), x.on("moveButtonClicked", function() {
        z = e
      }), x.on("zoomInButtonClicked", function() {
        s(1.15)
      }), x.on("zoomOutButtonClicked", function() {
        s(0.87)
      });
      var u = klass(function(a, b) {
        this._model = a, this._referenceBoxies = new ReferenceBoxies, this._transformation = b
      }).methods({
        update: function() {
          var c = this._model.getAngle()[0],
            h = this._model.getSize(),
            d = m.getOffset();
          d = this._transformation.modelToScreen(d);
          var e = this._model.getMeta().modelAspectFactor,
            f = this._model.getMeta().modelAspect;
          this._referenceBoxies.updateVisibility(c >= 90 && 270 >= c, 90 >= c || c >= 270), c -= 90;
          var a = Math.round(h[0] * e),
            g = Math.round(a * Math.sin(c * b));
          0 > g && (g = -g);
          var i = Math.round(a / 2 * f * Math.cos(c * b));
          this._referenceBoxies.update(a, g, i, d)
        },
        adjustDeltaX: function(a, b) {
          return this._referenceBoxies.isLine() ? this._referenceBoxies.isReversed() ? -b : b : (this._referenceBoxies.isTopVisible() && a < this._referenceBoxies.topArea().center[1] ? b = -b : this._referenceBoxies.isBottomVisible() && a > this._referenceBoxies.bottomArea().center[1] && (b = -b), b)
        },
        referenceBoxies: function() {
          return this._referenceBoxies
        }
      })
    }
  }(),
  function() {
    "use strict";
    window.ModalController = function(a) {
      var e = a.get("modal"),
        c = a.get("toolbar"),
        b = a.get("frame"),
        d = a.get("canvas");
      c.on("hotspotButtonClicked", function() {
        e.show("#modal-hotspot")
      }), c.on("infoButtonClicked", function() {
        e.show("#modal-info")
      }), c.on("helpButtonClicked", function() {
        e.show("#modal-help")
      }), c.on("qrcodeButtonClicked", function() {
        e.show("#modal-qrcode")
      }), e.on("closeButtonClicked", function(a) {
        e.hide(a)
      }), e.on("showing", function() {
        d.pause(), b.setScrollEnabled(!0), a.emit("onModalVisibleChanged", !0)
      }), e.on("hidden", function() {
        b.setScrollEnabled(!1), d.resume(), a.emit("onModalVisibleChanged", !1)
      })
    }
  }(),
  function() {
    "use strict";
    window.PreloadController = function(b) {
      function g() {
        {
          var b = d();
          b.length
        }! function c() {
          if (b.length > 0 && a) {
            var d = b.splice(0, 1)[0];
            e.get(d, c)
          }
        }()
      }

      function d() {
        for (var d = c.getAngle(), j = d[0], f = d[1], g = c.getMeta(), h = [], a = 5; 90 >= a;) {
          var i = f - a,
            k = f + a;
          if (0 > i && (i += 360), h.push({
              sizeLevel: "0",
              v: j,
              h: i
            }), k >= 360 && (k -= 360), h.push({
              sizeLevel: "0",
              v: j,
              h: k
            }), a % 10 === 0) {
            var b = a / 2,
              i = j - b,
              k = j + b;
            i >= g.range.v[0] && h.push({
              sizeLevel: "0",
              v: i,
              h: f
            });
            var e = g.range.v[1];
            360 == e && (e = 355), e >= k && h.push({
              sizeLevel: "0",
              v: k,
              h: f
            })
          };
          a += 5
        };
        return h
      }
      var c = b.get("model"),
        e = b.get("cache"),
        f = (b.get("frame"), b.get("canvas"), b.get("mask")),
        a = (b.get("toolbar"), f.getGesture(), !1);
      b.on("rotateStart", function(b) {
        a = !1
      }).on("rotateEnd", function(b) {
        a = !0, g()
      }), e.one("imageLoaded", function() {
        a = !0, g()
      })
    }
  }(),
  function() {
    "use strict";
    window.SwitchController = function(a) {
      var d = a.get("model"),
        c = (a.get("cache"), a.get("frame"), a.get("canvas"), null),
        b = null;
      d.on("modelLoaded", function() {
        var e = d.getMeta(),
          f = e.switch;
        f && (c = new SwitchView(f), c.on("switchButtonClick", function(a, c) {
          c == b || (b = c, d.switchModel(c))
        }), b = d.getName(), c.activate(b), "hide" === a.config.switches && c.hide())
      }), a.on("switchModelByHotspot", function(a) {
        a !== b && (b = a, d.switchModel(a)), c && c.activate(a)
      }), $(window).on("hashchange", function() {
        var a = (location.hash || "").replace(/#/g, "");
        a && a !== b && (b = a, d.switchModel(a)), a && c && c.activate(a)
      })
    }
  }(),
  function() {
    "use strict";
    window.ToolbarController = function(a) {
      var c = (a.get("model"), a.get("modal")),
        b = a.get("toolbar");
      "hide" === a.config.toolbar && b.hide(), c.on("shown", function() {
        b.hide()
      }), c.on("hidden", function() {
        "hide" !== a.config.toolbar && b.show()
      })
    }
  }()