function b5(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(e, i, o.get ? o : { enumerable: !0, get: () => r[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var ag = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function po(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function E5(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var i = [null];
        i.push.apply(i, arguments);
        var o = Function.bind.apply(t, i);
        return new o();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var lg = { exports: {} },
  nc = {},
  ug = { exports: {} },
  Ze = {};
var Va = Symbol.for("react.element"),
  T5 = Symbol.for("react.portal"),
  P5 = Symbol.for("react.fragment"),
  _5 = Symbol.for("react.strict_mode"),
  A5 = Symbol.for("react.profiler"),
  k5 = Symbol.for("react.provider"),
  L5 = Symbol.for("react.context"),
  M5 = Symbol.for("react.forward_ref"),
  R5 = Symbol.for("react.suspense"),
  I5 = Symbol.for("react.memo"),
  O5 = Symbol.for("react.lazy"),
  Mh = Symbol.iterator;
function B5(e) {
  return e === null || typeof e != "object" ? null : ((e = (Mh && e[Mh]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var cg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  fg = Object.assign,
  dg = {};
function ps(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = dg), (this.updater = n || cg);
}
ps.prototype.isReactComponent = {};
ps.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ps.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hg() {}
hg.prototype = ps.prototype;
function B0(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = dg), (this.updater = n || cg);
}
var $0 = (B0.prototype = new hg());
$0.constructor = B0;
fg($0, ps.prototype);
$0.isPureReactComponent = !0;
var Rh = Array.isArray,
  pg = Object.prototype.hasOwnProperty,
  D0 = { current: null },
  mg = { key: !0, ref: !0, __self: !0, __source: !0 };
function gg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null) for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t)) pg.call(t, r) && !mg.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: Va, type: e, key: o, ref: s, props: i, _owner: D0.current };
}
function $5(e, t) {
  return { $$typeof: Va, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function N0(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Va;
}
function D5(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ih = /\/+/g;
function Hc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? D5("" + e.key) : t.toString(36);
}
function Bl(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Va:
          case T5:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Hc(s, 0) : r),
      Rh(i)
        ? ((n = ""),
          e != null && (n = e.replace(Ih, "$&/") + "/"),
          Bl(i, t, n, "", function (u) {
            return u;
          }))
        : i != null && (N0(i) && (i = $5(i, n + (!i.key || (s && s.key === i.key) ? "" : ("" + i.key).replace(Ih, "$&/") + "/") + e)), t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Rh(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + Hc(o, a);
      s += Bl(o, t, n, l, i);
    }
  else if (((l = B5(e)), typeof l == "function")) for (e = l.call(e), a = 0; !(o = e.next()).done; ) (o = o.value), (l = r + Hc(o, a++)), (s += Bl(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function il(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Bl(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function N5(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var yn = { current: null },
  $l = { transition: null },
  V5 = { ReactCurrentDispatcher: yn, ReactCurrentBatchConfig: $l, ReactCurrentOwner: D0 };
Ze.Children = {
  map: il,
  forEach: function (e, t, n) {
    il(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      il(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      il(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!N0(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
Ze.Component = ps;
Ze.Fragment = P5;
Ze.Profiler = A5;
Ze.PureComponent = B0;
Ze.StrictMode = _5;
Ze.Suspense = R5;
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V5;
Ze.cloneElement = function (e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = fg({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if ((t.ref !== void 0 && ((o = t.ref), (s = D0.current)), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)) var a = e.type.defaultProps;
    for (l in t) pg.call(t, l) && !mg.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Va, type: e.type, key: i, ref: o, props: r, _owner: s };
};
Ze.createContext = function (e) {
  return (
    (e = { $$typeof: L5, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }),
    (e.Provider = { $$typeof: k5, _context: e }),
    (e.Consumer = e)
  );
};
Ze.createElement = gg;
Ze.createFactory = function (e) {
  var t = gg.bind(null, e);
  return (t.type = e), t;
};
Ze.createRef = function () {
  return { current: null };
};
Ze.forwardRef = function (e) {
  return { $$typeof: M5, render: e };
};
Ze.isValidElement = N0;
Ze.lazy = function (e) {
  return { $$typeof: O5, _payload: { _status: -1, _result: e }, _init: N5 };
};
Ze.memo = function (e, t) {
  return { $$typeof: I5, type: e, compare: t === void 0 ? null : t };
};
Ze.startTransition = function (e) {
  var t = $l.transition;
  $l.transition = {};
  try {
    e();
  } finally {
    $l.transition = t;
  }
};
Ze.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Ze.useCallback = function (e, t) {
  return yn.current.useCallback(e, t);
};
Ze.useContext = function (e) {
  return yn.current.useContext(e);
};
Ze.useDebugValue = function () {};
Ze.useDeferredValue = function (e) {
  return yn.current.useDeferredValue(e);
};
Ze.useEffect = function (e, t) {
  return yn.current.useEffect(e, t);
};
Ze.useId = function () {
  return yn.current.useId();
};
Ze.useImperativeHandle = function (e, t, n) {
  return yn.current.useImperativeHandle(e, t, n);
};
Ze.useInsertionEffect = function (e, t) {
  return yn.current.useInsertionEffect(e, t);
};
Ze.useLayoutEffect = function (e, t) {
  return yn.current.useLayoutEffect(e, t);
};
Ze.useMemo = function (e, t) {
  return yn.current.useMemo(e, t);
};
Ze.useReducer = function (e, t, n) {
  return yn.current.useReducer(e, t, n);
};
Ze.useRef = function (e) {
  return yn.current.useRef(e);
};
Ze.useState = function (e) {
  return yn.current.useState(e);
};
Ze.useSyncExternalStore = function (e, t, n) {
  return yn.current.useSyncExternalStore(e, t, n);
};
Ze.useTransition = function () {
  return yn.current.useTransition();
};
Ze.version = "18.2.0";
ug.exports = Ze;
var V = ug.exports;
const Ct = po(V),
  nd = b5({ __proto__: null, default: Ct }, [V]);
var j5 = V,
  F5 = Symbol.for("react.element"),
  U5 = Symbol.for("react.fragment"),
  z5 = Object.prototype.hasOwnProperty,
  W5 = j5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  H5 = { key: !0, ref: !0, __self: !0, __source: !0 };
function vg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) z5.call(t, r) && !H5.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: F5, type: e, key: o, ref: s, props: i, _owner: W5.current };
}
nc.Fragment = U5;
nc.jsx = vg;
nc.jsxs = vg;
lg.exports = nc;
var BM = lg.exports,
  Oh = {},
  yg = { exports: {} },
  jn = {},
  wg = { exports: {} },
  xg = {};
(function (e) {
  function t(J, ne) {
    var se = J.length;
    J.push(ne);
    e: for (; 0 < se; ) {
      var pe = (se - 1) >>> 1,
        Oe = J[pe];
      if (0 < i(Oe, ne)) (J[pe] = ne), (J[se] = Oe), (se = pe);
      else break e;
    }
  }
  function n(J) {
    return J.length === 0 ? null : J[0];
  }
  function r(J) {
    if (J.length === 0) return null;
    var ne = J[0],
      se = J.pop();
    if (se !== ne) {
      J[0] = se;
      e: for (var pe = 0, Oe = J.length, tt = Oe >>> 1; pe < tt; ) {
        var at = 2 * (pe + 1) - 1,
          Pe = J[at],
          Ye = at + 1,
          tn = J[Ye];
        if (0 > i(Pe, se)) Ye < Oe && 0 > i(tn, Pe) ? ((J[pe] = tn), (J[Ye] = se), (pe = Ye)) : ((J[pe] = Pe), (J[at] = se), (pe = at));
        else if (Ye < Oe && 0 > i(tn, se)) (J[pe] = tn), (J[Ye] = se), (pe = Ye);
        else break e;
      }
    }
    return ne;
  }
  function i(J, ne) {
    var se = J.sortIndex - ne.sortIndex;
    return se !== 0 ? se : J.id - ne.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    h = 3,
    p = !1,
    g = !1,
    v = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    w = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(J) {
    for (var ne = n(u); ne !== null; ) {
      if (ne.callback === null) r(u);
      else if (ne.startTime <= J) r(u), (ne.sortIndex = ne.expirationTime), t(l, ne);
      else break;
      ne = n(u);
    }
  }
  function T(J) {
    if (((v = !1), x(J), !g))
      if (n(l) !== null) (g = !0), oe(_);
      else {
        var ne = n(u);
        ne !== null && ye(T, ne.startTime - J);
      }
  }
  function _(J, ne) {
    (g = !1), v && ((v = !1), y(A), (A = -1)), (p = !0);
    var se = h;
    try {
      for (x(ne), f = n(l); f !== null && (!(f.expirationTime > ne) || (J && !M())); ) {
        var pe = f.callback;
        if (typeof pe == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var Oe = pe(f.expirationTime <= ne);
          (ne = e.unstable_now()), typeof Oe == "function" ? (f.callback = Oe) : f === n(l) && r(l), x(ne);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var tt = !0;
      else {
        var at = n(u);
        at !== null && ye(T, at.startTime - ne), (tt = !1);
      }
      return tt;
    } finally {
      (f = null), (h = se), (p = !1);
    }
  }
  var O = !1,
    B = null,
    A = -1,
    k = 5,
    I = -1;
  function M() {
    return !(e.unstable_now() - I < k);
  }
  function L() {
    if (B !== null) {
      var J = e.unstable_now();
      I = J;
      var ne = !0;
      try {
        ne = B(!0, J);
      } finally {
        ne ? N() : ((O = !1), (B = null));
      }
    } else O = !1;
  }
  var N;
  if (typeof w == "function")
    N = function () {
      w(L);
    };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(),
      W = j.port2;
    (j.port1.onmessage = L),
      (N = function () {
        W.postMessage(null);
      });
  } else
    N = function () {
      P(L, 0);
    };
  function oe(J) {
    (B = J), O || ((O = !0), N());
  }
  function ye(J, ne) {
    A = P(function () {
      J(e.unstable_now());
    }, ne);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (J) {
      J.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || p || ((g = !0), oe(_));
    }),
    (e.unstable_forceFrameRate = function (J) {
      0 > J || 125 < J
        ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported")
        : (k = 0 < J ? Math.floor(1e3 / J) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (J) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var ne = 3;
          break;
        default:
          ne = h;
      }
      var se = h;
      h = ne;
      try {
        return J();
      } finally {
        h = se;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (J, ne) {
      switch (J) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          J = 3;
      }
      var se = h;
      h = J;
      try {
        return ne();
      } finally {
        h = se;
      }
    }),
    (e.unstable_scheduleCallback = function (J, ne, se) {
      var pe = e.unstable_now();
      switch ((typeof se == "object" && se !== null ? ((se = se.delay), (se = typeof se == "number" && 0 < se ? pe + se : pe)) : (se = pe), J)) {
        case 1:
          var Oe = -1;
          break;
        case 2:
          Oe = 250;
          break;
        case 5:
          Oe = 1073741823;
          break;
        case 4:
          Oe = 1e4;
          break;
        default:
          Oe = 5e3;
      }
      return (
        (Oe = se + Oe),
        (J = { id: c++, callback: ne, priorityLevel: J, startTime: se, expirationTime: Oe, sortIndex: -1 }),
        se > pe
          ? ((J.sortIndex = se), t(u, J), n(l) === null && J === n(u) && (v ? (y(A), (A = -1)) : (v = !0), ye(T, se - pe)))
          : ((J.sortIndex = Oe), t(l, J), g || p || ((g = !0), oe(_))),
        J
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (J) {
      var ne = h;
      return function () {
        var se = h;
        h = ne;
        try {
          return J.apply(this, arguments);
        } finally {
          h = se;
        }
      };
    });
})(xg);
wg.exports = xg;
var K5 = wg.exports;
var Cg = V,
  $n = K5;
function re(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Sg = new Set(),
  la = {};
function mo(e, t) {
  ts(e, t), ts(e + "Capture", t);
}
function ts(e, t) {
  for (la[e] = t, e = 0; e < t.length; e++) Sg.add(t[e]);
}
var Hr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  rd = Object.prototype.hasOwnProperty,
  G5 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bh = {},
  $h = {};
function q5(e) {
  return rd.call($h, e) ? !0 : rd.call(Bh, e) ? !1 : G5.test(e) ? ($h[e] = !0) : ((Bh[e] = !0), !1);
}
function Y5(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Z5(e, t, n, r) {
  if (t === null || typeof t > "u" || Y5(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function wn(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var en = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  en[e] = new wn(e, 0, !1, e, null, !1, !1);
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  en[t] = new wn(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  en[e] = new wn(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  en[e] = new wn(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    en[e] = new wn(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  en[e] = new wn(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  en[e] = new wn(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  en[e] = new wn(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  en[e] = new wn(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var V0 = /[\-:]([a-z])/g;
function j0(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(V0, j0);
    en[t] = new wn(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(V0, j0);
  en[t] = new wn(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(V0, j0);
  en[t] = new wn(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  en[e] = new wn(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
en.xlinkHref = new wn("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  en[e] = new wn(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function F0(e, t, n, r) {
  var i = en.hasOwnProperty(t) ? en[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (Z5(t, n, i, r) && (n = null),
    r || i === null
      ? q5(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null ? e.removeAttribute(t) : ((i = i.type), (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Qr = Cg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ol = Symbol.for("react.element"),
  _o = Symbol.for("react.portal"),
  Ao = Symbol.for("react.fragment"),
  U0 = Symbol.for("react.strict_mode"),
  id = Symbol.for("react.profiler"),
  bg = Symbol.for("react.provider"),
  Eg = Symbol.for("react.context"),
  z0 = Symbol.for("react.forward_ref"),
  od = Symbol.for("react.suspense"),
  sd = Symbol.for("react.suspense_list"),
  W0 = Symbol.for("react.memo"),
  oi = Symbol.for("react.lazy"),
  Tg = Symbol.for("react.offscreen"),
  Dh = Symbol.iterator;
function Es(e) {
  return e === null || typeof e != "object" ? null : ((e = (Dh && e[Dh]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var _t = Object.assign,
  Kc;
function Bs(e) {
  if (Kc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Kc = (t && t[1]) || "";
    }
  return (
    `
` +
    Kc +
    e
  );
}
var Gc = !1;
function qc(e, t) {
  if (!e || Gc) return "";
  Gc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Gc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Bs(e) : "";
}
function Q5(e) {
  switch (e.tag) {
    case 5:
      return Bs(e.type);
    case 16:
      return Bs("Lazy");
    case 13:
      return Bs("Suspense");
    case 19:
      return Bs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = qc(e.type, !1)), e;
    case 11:
      return (e = qc(e.type.render, !1)), e;
    case 1:
      return (e = qc(e.type, !0)), e;
    default:
      return "";
  }
}
function ad(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ao:
      return "Fragment";
    case _o:
      return "Portal";
    case id:
      return "Profiler";
    case U0:
      return "StrictMode";
    case od:
      return "Suspense";
    case sd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Eg:
        return (e.displayName || "Context") + ".Consumer";
      case bg:
        return (e._context.displayName || "Context") + ".Provider";
      case z0:
        var t = e.render;
        return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
      case W0:
        return (t = e.displayName || null), t !== null ? t : ad(e.type) || "Memo";
      case oi:
        (t = e._payload), (e = e._init);
        try {
          return ad(e(t));
        } catch {}
    }
  return null;
}
function X5(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ad(t);
    case 8:
      return t === U0 ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Pi(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Pg(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function J5(e) {
  var t = Pg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function sl(e) {
  e._valueTracker || (e._valueTracker = J5(e));
}
function _g(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = Pg(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function eu(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ld(e, t) {
  var n = t.checked;
  return _t({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Nh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Pi(t.value != null ? t.value : n)),
    (e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null });
}
function Ag(e, t) {
  (t = t.checked), t != null && F0(e, "checked", t, !1);
}
function ud(e, t) {
  Ag(e, t);
  var n = Pi(t.value),
    r = t.type;
  if (n != null) r === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? cd(e, t.type, n) : t.hasOwnProperty("defaultValue") && cd(e, t.type, Pi(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Vh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name), n !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== "" && (e.name = n);
}
function cd(e, t, n) {
  (t !== "number" || eu(e.ownerDocument) !== e) && (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $s = Array.isArray;
function Go(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) (i = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Pi(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function fd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(re(91));
  return _t({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function jh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(re(92));
      if ($s(n)) {
        if (1 < n.length) throw Error(re(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Pi(n) };
}
function kg(e, t) {
  var n = Pi(t.value),
    r = Pi(t.defaultValue);
  n != null && ((n = "" + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Fh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Lg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function dd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Lg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var al,
  Mg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (al = al || document.createElement("div"), al.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = al.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ua(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Us = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ew = ["Webkit", "ms", "Moz", "O"];
Object.keys(Us).forEach(function (e) {
  ew.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Us[t] = Us[e]);
  });
});
function Rg(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || (Us.hasOwnProperty(e) && Us[e]) ? ("" + t).trim() : t + "px";
}
function Ig(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Rg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var tw = _t(
  { menuitem: !0 },
  { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }
);
function hd(e, t) {
  if (t) {
    if (tw[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(re(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(re(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(re(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(re(62));
  }
}
function pd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var md = null;
function H0(e) {
  return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var gd = null,
  qo = null,
  Yo = null;
function Uh(e) {
  if ((e = Ua(e))) {
    if (typeof gd != "function") throw Error(re(280));
    var t = e.stateNode;
    t && ((t = ac(t)), gd(e.stateNode, e.type, t));
  }
}
function Og(e) {
  qo ? (Yo ? Yo.push(e) : (Yo = [e])) : (qo = e);
}
function Bg() {
  if (qo) {
    var e = qo,
      t = Yo;
    if (((Yo = qo = null), Uh(e), t)) for (e = 0; e < t.length; e++) Uh(t[e]);
  }
}
function $g(e, t) {
  return e(t);
}
function Dg() {}
var Yc = !1;
function Ng(e, t, n) {
  if (Yc) return e(t, n);
  Yc = !0;
  try {
    return $g(e, t, n);
  } finally {
    (Yc = !1), (qo !== null || Yo !== null) && (Dg(), Bg());
  }
}
function ca(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ac(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(re(231, t, typeof n));
  return n;
}
var vd = !1;
if (Hr)
  try {
    var Ts = {};
    Object.defineProperty(Ts, "passive", {
      get: function () {
        vd = !0;
      },
    }),
      window.addEventListener("test", Ts, Ts),
      window.removeEventListener("test", Ts, Ts);
  } catch {
    vd = !1;
  }
function nw(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var zs = !1,
  tu = null,
  nu = !1,
  yd = null,
  rw = {
    onError: function (e) {
      (zs = !0), (tu = e);
    },
  };
function iw(e, t, n, r, i, o, s, a, l) {
  (zs = !1), (tu = null), nw.apply(rw, arguments);
}
function ow(e, t, n, r, i, o, s, a, l) {
  if ((iw.apply(this, arguments), zs)) {
    if (zs) {
      var u = tu;
      (zs = !1), (tu = null);
    } else throw Error(re(198));
    nu || ((nu = !0), (yd = u));
  }
}
function go(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Vg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function zh(e) {
  if (go(e) !== e) throw Error(re(188));
}
function sw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = go(e)), t === null)) throw Error(re(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return zh(i), e;
        if (o === r) return zh(i), t;
        o = o.sibling;
      }
      throw Error(re(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(re(189));
      }
    }
    if (n.alternate !== r) throw Error(re(190));
  }
  if (n.tag !== 3) throw Error(re(188));
  return n.stateNode.current === n ? e : t;
}
function jg(e) {
  return (e = sw(e)), e !== null ? Fg(e) : null;
}
function Fg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ug = $n.unstable_scheduleCallback,
  Wh = $n.unstable_cancelCallback,
  aw = $n.unstable_shouldYield,
  lw = $n.unstable_requestPaint,
  Bt = $n.unstable_now,
  uw = $n.unstable_getCurrentPriorityLevel,
  K0 = $n.unstable_ImmediatePriority,
  zg = $n.unstable_UserBlockingPriority,
  ru = $n.unstable_NormalPriority,
  cw = $n.unstable_LowPriority,
  Wg = $n.unstable_IdlePriority,
  rc = null,
  xr = null;
function fw(e) {
  if (xr && typeof xr.onCommitFiberRoot == "function")
    try {
      xr.onCommitFiberRoot(rc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ur = Math.clz32 ? Math.clz32 : pw,
  dw = Math.log,
  hw = Math.LN2;
function pw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((dw(e) / hw) | 0)) | 0;
}
var ll = 64,
  ul = 4194304;
function Ds(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function iu(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Ds(a)) : ((o &= s), o !== 0 && (r = Ds(o)));
  } else (s = n & ~i), s !== 0 ? (r = Ds(s)) : o !== 0 && (r = Ds(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))) return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - ur(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function mw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function gw(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - ur(o),
      a = 1 << s,
      l = i[s];
    l === -1 ? (!(a & n) || a & r) && (i[s] = mw(a, t)) : l <= t && (e.expiredLanes |= a), (o &= ~a);
  }
}
function wd(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Hg() {
  var e = ll;
  return (ll <<= 1), !(ll & 4194240) && (ll = 64), e;
}
function Zc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ja(e, t, n) {
  (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - ur(t)), (e[t] = n);
}
function vw(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - ur(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function G0(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ur(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ft = 0;
function Kg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Gg,
  q0,
  qg,
  Yg,
  Zg,
  xd = !1,
  cl = [],
  mi = null,
  gi = null,
  vi = null,
  fa = new Map(),
  da = new Map(),
  ui = [],
  yw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Hh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      mi = null;
      break;
    case "dragenter":
    case "dragleave":
      gi = null;
      break;
    case "mouseover":
    case "mouseout":
      vi = null;
      break;
    case "pointerover":
    case "pointerout":
      fa.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      da.delete(t.pointerId);
  }
}
function Ps(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }), t !== null && ((t = Ua(t)), t !== null && q0(t)), e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function ww(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (mi = Ps(mi, e, t, n, r, i)), !0;
    case "dragenter":
      return (gi = Ps(gi, e, t, n, r, i)), !0;
    case "mouseover":
      return (vi = Ps(vi, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return fa.set(o, Ps(fa.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (o = i.pointerId), da.set(o, Ps(da.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Qg(e) {
  var t = Zi(e.target);
  if (t !== null) {
    var n = go(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Vg(n)), t !== null)) {
          (e.blockedOn = t),
            Zg(e.priority, function () {
              qg(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Dl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Cd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (md = r), n.target.dispatchEvent(r), (md = null);
    } else return (t = Ua(n)), t !== null && q0(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Kh(e, t, n) {
  Dl(e) && n.delete(t);
}
function xw() {
  (xd = !1), mi !== null && Dl(mi) && (mi = null), gi !== null && Dl(gi) && (gi = null), vi !== null && Dl(vi) && (vi = null), fa.forEach(Kh), da.forEach(Kh);
}
function _s(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), xd || ((xd = !0), $n.unstable_scheduleCallback($n.unstable_NormalPriority, xw)));
}
function ha(e) {
  function t(i) {
    return _s(i, e);
  }
  if (0 < cl.length) {
    _s(cl[0], e);
    for (var n = 1; n < cl.length; n++) {
      var r = cl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (mi !== null && _s(mi, e), gi !== null && _s(gi, e), vi !== null && _s(vi, e), fa.forEach(t), da.forEach(t), n = 0; n < ui.length; n++)
    (r = ui[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ui.length && ((n = ui[0]), n.blockedOn === null); ) Qg(n), n.blockedOn === null && ui.shift();
}
var Zo = Qr.ReactCurrentBatchConfig,
  ou = !0;
function Cw(e, t, n, r) {
  var i = ft,
    o = Zo.transition;
  Zo.transition = null;
  try {
    (ft = 1), Y0(e, t, n, r);
  } finally {
    (ft = i), (Zo.transition = o);
  }
}
function Sw(e, t, n, r) {
  var i = ft,
    o = Zo.transition;
  Zo.transition = null;
  try {
    (ft = 4), Y0(e, t, n, r);
  } finally {
    (ft = i), (Zo.transition = o);
  }
}
function Y0(e, t, n, r) {
  if (ou) {
    var i = Cd(e, t, n, r);
    if (i === null) af(e, t, r, su, n), Hh(e, r);
    else if (ww(i, e, t, n, r)) r.stopPropagation();
    else if ((Hh(e, r), t & 4 && -1 < yw.indexOf(e))) {
      for (; i !== null; ) {
        var o = Ua(i);
        if ((o !== null && Gg(o), (o = Cd(e, t, n, r)), o === null && af(e, t, r, su, n), o === i)) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else af(e, t, r, null, n);
  }
}
var su = null;
function Cd(e, t, n, r) {
  if (((su = null), (e = H0(r)), (e = Zi(e)), e !== null))
    if (((t = go(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Vg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (su = e), null;
}
function Xg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (uw()) {
        case K0:
          return 1;
        case zg:
          return 4;
        case ru:
        case cw:
          return 16;
        case Wg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var fi = null,
  Z0 = null,
  Nl = null;
function Jg() {
  if (Nl) return Nl;
  var e,
    t = Z0,
    n = t.length,
    r,
    i = "value" in fi ? fi.value : fi.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Nl = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Vl(e) {
  var t = e.keyCode;
  return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function fl() {
  return !0;
}
function Gh() {
  return !1;
}
function Fn(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n), (this._targetInst = i), (this.type = r), (this.nativeEvent = o), (this.target = s), (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? fl : Gh), (this.isPropagationStopped = Gh), this;
  }
  return (
    _t(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), (this.isDefaultPrevented = fl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), (this.isPropagationStopped = fl));
      },
      persist: function () {},
      isPersistent: fl,
    }),
    t
  );
}
var ms = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Q0 = Fn(ms),
  Fa = _t({}, ms, { view: 0, detail: 0 }),
  bw = Fn(Fa),
  Qc,
  Xc,
  As,
  ic = _t({}, Fa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: X0,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== As && (As && e.type === "mousemove" ? ((Qc = e.screenX - As.screenX), (Xc = e.screenY - As.screenY)) : (Xc = Qc = 0), (As = e)), Qc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Xc;
    },
  }),
  qh = Fn(ic),
  Ew = _t({}, ic, { dataTransfer: 0 }),
  Tw = Fn(Ew),
  Pw = _t({}, Fa, { relatedTarget: 0 }),
  Jc = Fn(Pw),
  _w = _t({}, ms, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Aw = Fn(_w),
  kw = _t({}, ms, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Lw = Fn(kw),
  Mw = _t({}, ms, { data: 0 }),
  Yh = Fn(Mw),
  Rw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Iw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ow = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Bw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ow[e]) ? !!t[e] : !1;
}
function X0() {
  return Bw;
}
var $w = _t({}, Fa, {
    key: function (e) {
      if (e.key) {
        var t = Rw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? ((e = Vl(e)), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Iw[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: X0,
    charCode: function (e) {
      return e.type === "keypress" ? Vl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? Vl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  Dw = Fn($w),
  Nw = _t({}, ic, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
  Zh = Fn(Nw),
  Vw = _t({}, Fa, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: X0 }),
  jw = Fn(Vw),
  Fw = _t({}, ms, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Uw = Fn(Fw),
  zw = _t({}, ic, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ww = Fn(zw),
  Hw = [9, 13, 27, 32],
  J0 = Hr && "CompositionEvent" in window,
  Ws = null;
Hr && "documentMode" in document && (Ws = document.documentMode);
var Kw = Hr && "TextEvent" in window && !Ws,
  e2 = Hr && (!J0 || (Ws && 8 < Ws && 11 >= Ws)),
  Qh = String.fromCharCode(32),
  Xh = !1;
function t2(e, t) {
  switch (e) {
    case "keyup":
      return Hw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function n2(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ko = !1;
function Gw(e, t) {
  switch (e) {
    case "compositionend":
      return n2(t);
    case "keypress":
      return t.which !== 32 ? null : ((Xh = !0), Qh);
    case "textInput":
      return (e = t.data), e === Qh && Xh ? null : e;
    default:
      return null;
  }
}
function qw(e, t) {
  if (ko) return e === "compositionend" || (!J0 && t2(e, t)) ? ((e = Jg()), (Nl = Z0 = fi = null), (ko = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return e2 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Yw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Jh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Yw[e.type] : t === "textarea";
}
function r2(e, t, n, r) {
  Og(r), (t = au(t, "onChange")), 0 < t.length && ((n = new Q0("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Hs = null,
  pa = null;
function Zw(e) {
  p2(e, 0);
}
function oc(e) {
  var t = Ro(e);
  if (_g(t)) return e;
}
function Qw(e, t) {
  if (e === "change") return t;
}
var i2 = !1;
if (Hr) {
  var ef;
  if (Hr) {
    var tf = "oninput" in document;
    if (!tf) {
      var ep = document.createElement("div");
      ep.setAttribute("oninput", "return;"), (tf = typeof ep.oninput == "function");
    }
    ef = tf;
  } else ef = !1;
  i2 = ef && (!document.documentMode || 9 < document.documentMode);
}
function tp() {
  Hs && (Hs.detachEvent("onpropertychange", o2), (pa = Hs = null));
}
function o2(e) {
  if (e.propertyName === "value" && oc(pa)) {
    var t = [];
    r2(t, pa, e, H0(e)), Ng(Zw, t);
  }
}
function Xw(e, t, n) {
  e === "focusin" ? (tp(), (Hs = t), (pa = n), Hs.attachEvent("onpropertychange", o2)) : e === "focusout" && tp();
}
function Jw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return oc(pa);
}
function e6(e, t) {
  if (e === "click") return oc(t);
}
function t6(e, t) {
  if (e === "input" || e === "change") return oc(t);
}
function n6(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var fr = typeof Object.is == "function" ? Object.is : n6;
function ma(e, t) {
  if (fr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!rd.call(t, i) || !fr(e[i], t[i])) return !1;
  }
  return !0;
}
function np(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function rp(e, t) {
  var n = np(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = np(n);
  }
}
function s2(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? s2(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function a2() {
  for (var e = window, t = eu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = eu(e.document);
  }
  return t;
}
function e1(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function r6(e) {
  var t = a2(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && s2(n.ownerDocument.documentElement, n)) {
    if (r !== null && e1(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)), !e.extend && o > r && ((i = r), (r = o), (o = i)), (i = rp(n, o));
        var s = rp(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var i6 = Hr && "documentMode" in document && 11 >= document.documentMode,
  Lo = null,
  Sd = null,
  Ks = null,
  bd = !1;
function ip(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bd ||
    Lo == null ||
    Lo !== eu(r) ||
    ((r = Lo),
    "selectionStart" in r && e1(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
    (Ks && ma(Ks, r)) ||
      ((Ks = r), (r = au(Sd, "onSelect")), 0 < r.length && ((t = new Q0("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Lo))));
}
function dl(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var Mo = {
    animationend: dl("Animation", "AnimationEnd"),
    animationiteration: dl("Animation", "AnimationIteration"),
    animationstart: dl("Animation", "AnimationStart"),
    transitionend: dl("Transition", "TransitionEnd"),
  },
  nf = {},
  l2 = {};
Hr &&
  ((l2 = document.createElement("div").style),
  "AnimationEvent" in window || (delete Mo.animationend.animation, delete Mo.animationiteration.animation, delete Mo.animationstart.animation),
  "TransitionEvent" in window || delete Mo.transitionend.transition);
function sc(e) {
  if (nf[e]) return nf[e];
  if (!Mo[e]) return e;
  var t = Mo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in l2) return (nf[e] = t[n]);
  return e;
}
var u2 = sc("animationend"),
  c2 = sc("animationiteration"),
  f2 = sc("animationstart"),
  d2 = sc("transitionend"),
  h2 = new Map(),
  op =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Bi(e, t) {
  h2.set(e, t), mo(t, [e]);
}
for (var rf = 0; rf < op.length; rf++) {
  var of = op[rf],
    o6 = of.toLowerCase(),
    s6 = of[0].toUpperCase() + of.slice(1);
  Bi(o6, "on" + s6);
}
Bi(u2, "onAnimationEnd");
Bi(c2, "onAnimationIteration");
Bi(f2, "onAnimationStart");
Bi("dblclick", "onDoubleClick");
Bi("focusin", "onFocus");
Bi("focusout", "onBlur");
Bi(d2, "onTransitionEnd");
ts("onMouseEnter", ["mouseout", "mouseover"]);
ts("onMouseLeave", ["mouseout", "mouseover"]);
ts("onPointerEnter", ["pointerout", "pointerover"]);
ts("onPointerLeave", ["pointerout", "pointerover"]);
mo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
mo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
mo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
mo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
mo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ns =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  a6 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ns));
function sp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ow(r, t, void 0, e), (e.currentTarget = null);
}
function p2(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          sp(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (((a = r[s]), (l = a.instance), (u = a.currentTarget), (a = a.listener), l !== o && i.isPropagationStopped())) break e;
          sp(i, a, u), (o = l);
        }
    }
  }
  if (nu) throw ((e = yd), (nu = !1), (yd = null), e);
}
function gt(e, t) {
  var n = t[Ad];
  n === void 0 && (n = t[Ad] = new Set());
  var r = e + "__bubble";
  n.has(r) || (m2(t, e, 2, !1), n.add(r));
}
function sf(e, t, n) {
  var r = 0;
  t && (r |= 4), m2(n, e, r, t);
}
var hl = "_reactListening" + Math.random().toString(36).slice(2);
function ga(e) {
  if (!e[hl]) {
    (e[hl] = !0),
      Sg.forEach(function (n) {
        n !== "selectionchange" && (a6.has(n) || sf(n, !1, e), sf(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hl] || ((t[hl] = !0), sf("selectionchange", !1, t));
  }
}
function m2(e, t, n, r) {
  switch (Xg(t)) {
    case 1:
      var i = Cw;
      break;
    case 4:
      i = Sw;
      break;
    default:
      i = Y0;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !vd || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function af(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if ((l === 3 || l === 4) && ((l = s.stateNode.containerInfo), l === i || (l.nodeType === 8 && l.parentNode === i))) return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Zi(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Ng(function () {
    var u = o,
      c = H0(n),
      f = [];
    e: {
      var h = h2.get(e);
      if (h !== void 0) {
        var p = Q0,
          g = e;
        switch (e) {
          case "keypress":
            if (Vl(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = Dw;
            break;
          case "focusin":
            (g = "focus"), (p = Jc);
            break;
          case "focusout":
            (g = "blur"), (p = Jc);
            break;
          case "beforeblur":
          case "afterblur":
            p = Jc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = qh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Tw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = jw;
            break;
          case u2:
          case c2:
          case f2:
            p = Aw;
            break;
          case d2:
            p = Uw;
            break;
          case "scroll":
            p = bw;
            break;
          case "wheel":
            p = Ww;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = Lw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Zh;
        }
        var v = (t & 4) !== 0,
          P = !v && e === "scroll",
          y = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var w = u, x; w !== null; ) {
          x = w;
          var T = x.stateNode;
          if ((x.tag === 5 && T !== null && ((x = T), y !== null && ((T = ca(w, y)), T != null && v.push(va(w, T, x)))), P)) break;
          w = w.return;
        }
        0 < v.length && ((h = new p(h, g, null, n, c)), f.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          h && n !== md && (g = n.relatedTarget || n.fromElement) && (Zi(g) || g[Kr]))
        )
          break e;
        if (
          (p || h) &&
          ((h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window),
          p
            ? ((g = n.relatedTarget || n.toElement), (p = u), (g = g ? Zi(g) : null), g !== null && ((P = go(g)), g !== P || (g.tag !== 5 && g.tag !== 6)) && (g = null))
            : ((p = null), (g = u)),
          p !== g)
        ) {
          if (
            ((v = qh),
            (T = "onMouseLeave"),
            (y = "onMouseEnter"),
            (w = "mouse"),
            (e === "pointerout" || e === "pointerover") && ((v = Zh), (T = "onPointerLeave"), (y = "onPointerEnter"), (w = "pointer")),
            (P = p == null ? h : Ro(p)),
            (x = g == null ? h : Ro(g)),
            (h = new v(T, w + "leave", p, n, c)),
            (h.target = P),
            (h.relatedTarget = x),
            (T = null),
            Zi(c) === u && ((v = new v(y, w + "enter", g, n, c)), (v.target = x), (v.relatedTarget = P), (T = v)),
            (P = T),
            p && g)
          )
            t: {
              for (v = p, y = g, w = 0, x = v; x; x = Eo(x)) w++;
              for (x = 0, T = y; T; T = Eo(T)) x++;
              for (; 0 < w - x; ) (v = Eo(v)), w--;
              for (; 0 < x - w; ) (y = Eo(y)), x--;
              for (; w--; ) {
                if (v === y || (y !== null && v === y.alternate)) break t;
                (v = Eo(v)), (y = Eo(y));
              }
              v = null;
            }
          else v = null;
          p !== null && ap(f, h, p, v, !1), g !== null && P !== null && ap(f, P, g, v, !0);
        }
      }
      e: {
        if (((h = u ? Ro(u) : window), (p = h.nodeName && h.nodeName.toLowerCase()), p === "select" || (p === "input" && h.type === "file"))) var _ = Qw;
        else if (Jh(h))
          if (i2) _ = t6;
          else {
            _ = Jw;
            var O = Xw;
          }
        else (p = h.nodeName) && p.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (_ = e6);
        if (_ && (_ = _(e, u))) {
          r2(f, _, n, c);
          break e;
        }
        O && O(e, h, u), e === "focusout" && (O = h._wrapperState) && O.controlled && h.type === "number" && cd(h, "number", h.value);
      }
      switch (((O = u ? Ro(u) : window), e)) {
        case "focusin":
          (Jh(O) || O.contentEditable === "true") && ((Lo = O), (Sd = u), (Ks = null));
          break;
        case "focusout":
          Ks = Sd = Lo = null;
          break;
        case "mousedown":
          bd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (bd = !1), ip(f, n, c);
          break;
        case "selectionchange":
          if (i6) break;
        case "keydown":
        case "keyup":
          ip(f, n, c);
      }
      var B;
      if (J0)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else ko ? t2(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A &&
        (e2 &&
          n.locale !== "ko" &&
          (ko || A !== "onCompositionStart" ? A === "onCompositionEnd" && ko && (B = Jg()) : ((fi = c), (Z0 = "value" in fi ? fi.value : fi.textContent), (ko = !0))),
        (O = au(u, A)),
        0 < O.length && ((A = new Yh(A, e, null, n, c)), f.push({ event: A, listeners: O }), B ? (A.data = B) : ((B = n2(n)), B !== null && (A.data = B)))),
        (B = Kw ? Gw(e, n) : qw(e, n)) &&
          ((u = au(u, "onBeforeInput")), 0 < u.length && ((c = new Yh("onBeforeInput", "beforeinput", null, n, c)), f.push({ event: c, listeners: u }), (c.data = B)));
    }
    p2(f, t);
  });
}
function va(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function au(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 && o !== null && ((i = o), (o = ca(e, n)), o != null && r.unshift(va(e, o, i)), (o = ca(e, t)), o != null && r.push(va(e, o, i))), (e = e.return);
  }
  return r;
}
function Eo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ap(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && u !== null && ((a = u), i ? ((l = ca(n, o)), l != null && s.unshift(va(n, l, a))) : i || ((l = ca(n, o)), l != null && s.push(va(n, l, a)))), (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var l6 = /\r\n?/g,
  u6 = /\u0000|\uFFFD/g;
function lp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      l6,
      `
`
    )
    .replace(u6, "");
}
function pl(e, t, n) {
  if (((t = lp(t)), lp(e) !== t && n)) throw Error(re(425));
}
function lu() {}
var Ed = null,
  Td = null;
function Pd(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
  );
}
var _d = typeof setTimeout == "function" ? setTimeout : void 0,
  c6 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  up = typeof Promise == "function" ? Promise : void 0,
  f6 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof up < "u"
      ? function (e) {
          return up.resolve(null).then(e).catch(d6);
        }
      : _d;
function d6(e) {
  setTimeout(function () {
    throw e;
  });
}
function lf(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), ha(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ha(t);
}
function yi(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function cp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var gs = Math.random().toString(36).slice(2),
  yr = "__reactFiber$" + gs,
  ya = "__reactProps$" + gs,
  Kr = "__reactContainer$" + gs,
  Ad = "__reactEvents$" + gs,
  h6 = "__reactListeners$" + gs,
  p6 = "__reactHandles$" + gs;
function Zi(e) {
  var t = e[yr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Kr] || n[yr])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = cp(e); e !== null; ) {
          if ((n = e[yr])) return n;
          e = cp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ua(e) {
  return (e = e[yr] || e[Kr]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Ro(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(re(33));
}
function ac(e) {
  return e[ya] || null;
}
var kd = [],
  Io = -1;
function $i(e) {
  return { current: e };
}
function vt(e) {
  0 > Io || ((e.current = kd[Io]), (kd[Io] = null), Io--);
}
function mt(e, t) {
  Io++, (kd[Io] = e.current), (e.current = t);
}
var _i = {},
  dn = $i(_i),
  bn = $i(!1),
  so = _i;
function ns(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _i;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = i)), i;
}
function En(e) {
  return (e = e.childContextTypes), e != null;
}
function uu() {
  vt(bn), vt(dn);
}
function fp(e, t, n) {
  if (dn.current !== _i) throw Error(re(168));
  mt(dn, t), mt(bn, n);
}
function g2(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(re(108, X5(e) || "Unknown", i));
  return _t({}, n, r);
}
function cu(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || _i), (so = dn.current), mt(dn, e), mt(bn, bn.current), !0;
}
function dp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(re(169));
  n ? ((e = g2(e, t, so)), (r.__reactInternalMemoizedMergedChildContext = e), vt(bn), vt(dn), mt(dn, e)) : vt(bn), mt(bn, n);
}
var Or = null,
  lc = !1,
  uf = !1;
function v2(e) {
  Or === null ? (Or = [e]) : Or.push(e);
}
function m6(e) {
  (lc = !0), v2(e);
}
function Di() {
  if (!uf && Or !== null) {
    uf = !0;
    var e = 0,
      t = ft;
    try {
      var n = Or;
      for (ft = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Or = null), (lc = !1);
    } catch (i) {
      throw (Or !== null && (Or = Or.slice(e + 1)), Ug(K0, Di), i);
    } finally {
      (ft = t), (uf = !1);
    }
  }
  return null;
}
var Oo = [],
  Bo = 0,
  fu = null,
  du = 0,
  Gn = [],
  qn = 0,
  ao = null,
  $r = 1,
  Dr = "";
function zi(e, t) {
  (Oo[Bo++] = du), (Oo[Bo++] = fu), (fu = e), (du = t);
}
function y2(e, t, n) {
  (Gn[qn++] = $r), (Gn[qn++] = Dr), (Gn[qn++] = ao), (ao = e);
  var r = $r;
  e = Dr;
  var i = 32 - ur(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - ur(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)), (r >>= s), (i -= s), ($r = (1 << (32 - ur(t) + i)) | (n << i) | r), (Dr = o + e);
  } else ($r = (1 << o) | (n << i) | r), (Dr = e);
}
function t1(e) {
  e.return !== null && (zi(e, 1), y2(e, 1, 0));
}
function n1(e) {
  for (; e === fu; ) (fu = Oo[--Bo]), (Oo[Bo] = null), (du = Oo[--Bo]), (Oo[Bo] = null);
  for (; e === ao; ) (ao = Gn[--qn]), (Gn[qn] = null), (Dr = Gn[--qn]), (Gn[qn] = null), ($r = Gn[--qn]), (Gn[qn] = null);
}
var Bn = null,
  In = null,
  yt = !1,
  ar = null;
function w2(e, t) {
  var n = Yn(5, null, null, 0);
  (n.elementType = "DELETED"), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (Bn = e), (In = yi(t.firstChild)), !0) : !1;
    case 6:
      return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (Bn = e), (In = null), !0) : !1;
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ao !== null ? { id: $r, overflow: Dr } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Yn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Bn = e),
            (In = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ld(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Md(e) {
  if (yt) {
    var t = In;
    if (t) {
      var n = t;
      if (!hp(e, t)) {
        if (Ld(e)) throw Error(re(418));
        t = yi(n.nextSibling);
        var r = Bn;
        t && hp(e, t) ? w2(r, n) : ((e.flags = (e.flags & -4097) | 2), (yt = !1), (Bn = e));
      }
    } else {
      if (Ld(e)) throw Error(re(418));
      (e.flags = (e.flags & -4097) | 2), (yt = !1), (Bn = e);
    }
  }
}
function pp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Bn = e;
}
function ml(e) {
  if (e !== Bn) return !1;
  if (!yt) return pp(e), (yt = !0), !1;
  var t;
  if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !Pd(e.type, e.memoizedProps))), t && (t = In))) {
    if (Ld(e)) throw (x2(), Error(re(418)));
    for (; t; ) w2(e, t), (t = yi(t.nextSibling));
  }
  if ((pp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(re(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              In = yi(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      In = null;
    }
  } else In = Bn ? yi(e.stateNode.nextSibling) : null;
  return !0;
}
function x2() {
  for (var e = In; e; ) e = yi(e.nextSibling);
}
function rs() {
  (In = Bn = null), (yt = !1);
}
function r1(e) {
  ar === null ? (ar = [e]) : ar.push(e);
}
var g6 = Qr.ReactCurrentBatchConfig;
function or(e, t) {
  if (e && e.defaultProps) {
    (t = _t({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var hu = $i(null),
  pu = null,
  $o = null,
  i1 = null;
function o1() {
  i1 = $o = pu = null;
}
function s1(e) {
  var t = hu.current;
  vt(hu), (e._currentValue = t);
}
function Rd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (((e.childLanes & t) !== t ? ((e.childLanes |= t), r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
    e = e.return;
  }
}
function Qo(e, t) {
  (pu = e), (i1 = $o = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (Sn = !0), (e.firstContext = null));
}
function er(e) {
  var t = e._currentValue;
  if (i1 !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), $o === null)) {
      if (pu === null) throw Error(re(308));
      ($o = e), (pu.dependencies = { lanes: 0, firstContext: e });
    } else $o = $o.next = e;
  return t;
}
var Qi = null;
function a1(e) {
  Qi === null ? (Qi = [e]) : Qi.push(e);
}
function C2(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? ((n.next = n), a1(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), Gr(e, r);
}
function Gr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var si = !1;
function l1(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function S2(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function jr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function wi(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), st & 2)) {
    var i = r.pending;
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), Gr(e, n);
  }
  return (i = r.interleaved), i === null ? ((t.next = t), a1(r)) : ((t.next = i.next), (i.next = t)), (r.interleaved = t), Gr(e, n);
}
function jl(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), G0(e, n);
  }
}
function mp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function mu(e, t, n, r) {
  var i = e.updateQueue;
  si = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null && ((c = c.updateQueue), (a = c.lastBaseUpdate), a !== s && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var h = a.lane,
        p = a.eventTime;
      if ((r & h) === h) {
        c !== null && (c = c.next = { eventTime: p, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
        e: {
          var g = e,
            v = a;
          switch (((h = t), (p = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == "function")) {
                f = g.call(p, f, h);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (((g = v.payload), (h = typeof g == "function" ? g.call(p, f, h) : g), h == null)) break e;
              f = _t({}, f, h);
              break e;
            case 2:
              si = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && ((e.flags |= 64), (h = i.effects), h === null ? (i.effects = [a]) : h.push(a));
      } else (p = { eventTime: p, lane: h, tag: a.tag, payload: a.payload, callback: a.callback, next: null }), c === null ? ((u = c = p), (l = f)) : (c = c.next = p), (s |= h);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (h = a), (a = h.next), (h.next = null), (i.lastBaseUpdate = h), (i.shared.pending = null);
      }
    } while (1);
    if ((c === null && (l = f), (i.baseState = l), (i.firstBaseUpdate = u), (i.lastBaseUpdate = c), (t = i.shared.interleaved), t !== null)) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (uo |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function gp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function")) throw Error(re(191, i));
        i.call(r);
      }
    }
}
var b2 = new Cg.Component().refs;
function Id(e, t, n, r) {
  (t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : _t({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n);
}
var uc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? go(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = vn(),
      i = Ci(e),
      o = jr(r, i);
    (o.payload = t), n != null && (o.callback = n), (t = wi(e, o, i)), t !== null && (cr(t, e, i, r), jl(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = vn(),
      i = Ci(e),
      o = jr(r, i);
    (o.tag = 1), (o.payload = t), n != null && (o.callback = n), (t = wi(e, o, i)), t !== null && (cr(t, e, i, r), jl(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = vn(),
      r = Ci(e),
      i = jr(n, r);
    (i.tag = 2), t != null && (i.callback = t), (t = wi(e, i, r)), t !== null && (cr(t, e, r, n), jl(t, e, r));
  },
};
function vp(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !ma(n, r) || !ma(i, o) : !0
  );
}
function E2(e, t, n) {
  var r = !1,
    i = _i,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null ? (o = er(o)) : ((i = En(t) ? so : dn.current), (r = t.contextTypes), (o = (r = r != null) ? ns(e, i) : _i)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = uc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = i), (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function yp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && uc.enqueueReplaceState(t, t.state, null);
}
function Od(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = b2), l1(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? (i.context = er(o)) : ((o = En(t) ? so : dn.current), (i.context = ns(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Id(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
      t !== i.state && uc.enqueueReplaceState(i, i.state, null),
      mu(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ks(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(re(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(re(147, e));
      var i = r,
        o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === b2 && (a = i.refs = {}), s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(re(284));
    if (!n._owner) throw Error(re(290, e));
  }
  return e;
}
function gl(e, t) {
  throw ((e = Object.prototype.toString.call(t)), Error(re(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
}
function wp(e) {
  var t = e._init;
  return t(e._payload);
}
function T2(e) {
  function t(y, w) {
    if (e) {
      var x = y.deletions;
      x === null ? ((y.deletions = [w]), (y.flags |= 16)) : x.push(w);
    }
  }
  function n(y, w) {
    if (!e) return null;
    for (; w !== null; ) t(y, w), (w = w.sibling);
    return null;
  }
  function r(y, w) {
    for (y = new Map(); w !== null; ) w.key !== null ? y.set(w.key, w) : y.set(w.index, w), (w = w.sibling);
    return y;
  }
  function i(y, w) {
    return (y = Si(y, w)), (y.index = 0), (y.sibling = null), y;
  }
  function o(y, w, x) {
    return (y.index = x), e ? ((x = y.alternate), x !== null ? ((x = x.index), x < w ? ((y.flags |= 2), w) : x) : ((y.flags |= 2), w)) : ((y.flags |= 1048576), w);
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function a(y, w, x, T) {
    return w === null || w.tag !== 6 ? ((w = gf(x, y.mode, T)), (w.return = y), w) : ((w = i(w, x)), (w.return = y), w);
  }
  function l(y, w, x, T) {
    var _ = x.type;
    return _ === Ao
      ? c(y, w, x.props.children, T, x.key)
      : w !== null && (w.elementType === _ || (typeof _ == "object" && _ !== null && _.$$typeof === oi && wp(_) === w.type))
      ? ((T = i(w, x.props)), (T.ref = ks(y, w, x)), (T.return = y), T)
      : ((T = Kl(x.type, x.key, x.props, null, y.mode, T)), (T.ref = ks(y, w, x)), (T.return = y), T);
  }
  function u(y, w, x, T) {
    return w === null || w.tag !== 4 || w.stateNode.containerInfo !== x.containerInfo || w.stateNode.implementation !== x.implementation
      ? ((w = vf(x, y.mode, T)), (w.return = y), w)
      : ((w = i(w, x.children || [])), (w.return = y), w);
  }
  function c(y, w, x, T, _) {
    return w === null || w.tag !== 7 ? ((w = no(x, y.mode, T, _)), (w.return = y), w) : ((w = i(w, x)), (w.return = y), w);
  }
  function f(y, w, x) {
    if ((typeof w == "string" && w !== "") || typeof w == "number") return (w = gf("" + w, y.mode, x)), (w.return = y), w;
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ol:
          return (x = Kl(w.type, w.key, w.props, null, y.mode, x)), (x.ref = ks(y, null, w)), (x.return = y), x;
        case _o:
          return (w = vf(w, y.mode, x)), (w.return = y), w;
        case oi:
          var T = w._init;
          return f(y, T(w._payload), x);
      }
      if ($s(w) || Es(w)) return (w = no(w, y.mode, x, null)), (w.return = y), w;
      gl(y, w);
    }
    return null;
  }
  function h(y, w, x, T) {
    var _ = w !== null ? w.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number") return _ !== null ? null : a(y, w, "" + x, T);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ol:
          return x.key === _ ? l(y, w, x, T) : null;
        case _o:
          return x.key === _ ? u(y, w, x, T) : null;
        case oi:
          return (_ = x._init), h(y, w, _(x._payload), T);
      }
      if ($s(x) || Es(x)) return _ !== null ? null : c(y, w, x, T, null);
      gl(y, x);
    }
    return null;
  }
  function p(y, w, x, T, _) {
    if ((typeof T == "string" && T !== "") || typeof T == "number") return (y = y.get(x) || null), a(w, y, "" + T, _);
    if (typeof T == "object" && T !== null) {
      switch (T.$$typeof) {
        case ol:
          return (y = y.get(T.key === null ? x : T.key) || null), l(w, y, T, _);
        case _o:
          return (y = y.get(T.key === null ? x : T.key) || null), u(w, y, T, _);
        case oi:
          var O = T._init;
          return p(y, w, x, O(T._payload), _);
      }
      if ($s(T) || Es(T)) return (y = y.get(x) || null), c(w, y, T, _, null);
      gl(w, T);
    }
    return null;
  }
  function g(y, w, x, T) {
    for (var _ = null, O = null, B = w, A = (w = 0), k = null; B !== null && A < x.length; A++) {
      B.index > A ? ((k = B), (B = null)) : (k = B.sibling);
      var I = h(y, B, x[A], T);
      if (I === null) {
        B === null && (B = k);
        break;
      }
      e && B && I.alternate === null && t(y, B), (w = o(I, w, A)), O === null ? (_ = I) : (O.sibling = I), (O = I), (B = k);
    }
    if (A === x.length) return n(y, B), yt && zi(y, A), _;
    if (B === null) {
      for (; A < x.length; A++) (B = f(y, x[A], T)), B !== null && ((w = o(B, w, A)), O === null ? (_ = B) : (O.sibling = B), (O = B));
      return yt && zi(y, A), _;
    }
    for (B = r(y, B); A < x.length; A++)
      (k = p(B, y, A, x[A], T)),
        k !== null && (e && k.alternate !== null && B.delete(k.key === null ? A : k.key), (w = o(k, w, A)), O === null ? (_ = k) : (O.sibling = k), (O = k));
    return (
      e &&
        B.forEach(function (M) {
          return t(y, M);
        }),
      yt && zi(y, A),
      _
    );
  }
  function v(y, w, x, T) {
    var _ = Es(x);
    if (typeof _ != "function") throw Error(re(150));
    if (((x = _.call(x)), x == null)) throw Error(re(151));
    for (var O = (_ = null), B = w, A = (w = 0), k = null, I = x.next(); B !== null && !I.done; A++, I = x.next()) {
      B.index > A ? ((k = B), (B = null)) : (k = B.sibling);
      var M = h(y, B, I.value, T);
      if (M === null) {
        B === null && (B = k);
        break;
      }
      e && B && M.alternate === null && t(y, B), (w = o(M, w, A)), O === null ? (_ = M) : (O.sibling = M), (O = M), (B = k);
    }
    if (I.done) return n(y, B), yt && zi(y, A), _;
    if (B === null) {
      for (; !I.done; A++, I = x.next()) (I = f(y, I.value, T)), I !== null && ((w = o(I, w, A)), O === null ? (_ = I) : (O.sibling = I), (O = I));
      return yt && zi(y, A), _;
    }
    for (B = r(y, B); !I.done; A++, I = x.next())
      (I = p(B, y, A, I.value, T)),
        I !== null && (e && I.alternate !== null && B.delete(I.key === null ? A : I.key), (w = o(I, w, A)), O === null ? (_ = I) : (O.sibling = I), (O = I));
    return (
      e &&
        B.forEach(function (L) {
          return t(y, L);
        }),
      yt && zi(y, A),
      _
    );
  }
  function P(y, w, x, T) {
    if ((typeof x == "object" && x !== null && x.type === Ao && x.key === null && (x = x.props.children), typeof x == "object" && x !== null)) {
      switch (x.$$typeof) {
        case ol:
          e: {
            for (var _ = x.key, O = w; O !== null; ) {
              if (O.key === _) {
                if (((_ = x.type), _ === Ao)) {
                  if (O.tag === 7) {
                    n(y, O.sibling), (w = i(O, x.props.children)), (w.return = y), (y = w);
                    break e;
                  }
                } else if (O.elementType === _ || (typeof _ == "object" && _ !== null && _.$$typeof === oi && wp(_) === O.type)) {
                  n(y, O.sibling), (w = i(O, x.props)), (w.ref = ks(y, O, x)), (w.return = y), (y = w);
                  break e;
                }
                n(y, O);
                break;
              } else t(y, O);
              O = O.sibling;
            }
            x.type === Ao
              ? ((w = no(x.props.children, y.mode, T, x.key)), (w.return = y), (y = w))
              : ((T = Kl(x.type, x.key, x.props, null, y.mode, T)), (T.ref = ks(y, w, x)), (T.return = y), (y = T));
          }
          return s(y);
        case _o:
          e: {
            for (O = x.key; w !== null; ) {
              if (w.key === O)
                if (w.tag === 4 && w.stateNode.containerInfo === x.containerInfo && w.stateNode.implementation === x.implementation) {
                  n(y, w.sibling), (w = i(w, x.children || [])), (w.return = y), (y = w);
                  break e;
                } else {
                  n(y, w);
                  break;
                }
              else t(y, w);
              w = w.sibling;
            }
            (w = vf(x, y.mode, T)), (w.return = y), (y = w);
          }
          return s(y);
        case oi:
          return (O = x._init), P(y, w, O(x._payload), T);
      }
      if ($s(x)) return g(y, w, x, T);
      if (Es(x)) return v(y, w, x, T);
      gl(y, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x), w !== null && w.tag === 6 ? (n(y, w.sibling), (w = i(w, x)), (w.return = y), (y = w)) : (n(y, w), (w = gf(x, y.mode, T)), (w.return = y), (y = w)), s(y))
      : n(y, w);
  }
  return P;
}
var is = T2(!0),
  P2 = T2(!1),
  za = {},
  Cr = $i(za),
  wa = $i(za),
  xa = $i(za);
function Xi(e) {
  if (e === za) throw Error(re(174));
  return e;
}
function u1(e, t) {
  switch ((mt(xa, t), mt(wa, e), mt(Cr, za), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : dd(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = dd(t, e));
  }
  vt(Cr), mt(Cr, t);
}
function os() {
  vt(Cr), vt(wa), vt(xa);
}
function _2(e) {
  Xi(xa.current);
  var t = Xi(Cr.current),
    n = dd(t, e.type);
  t !== n && (mt(wa, e), mt(Cr, n));
}
function c1(e) {
  wa.current === e && (vt(Cr), vt(wa));
}
var bt = $i(0);
function gu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var cf = [];
function f1() {
  for (var e = 0; e < cf.length; e++) cf[e]._workInProgressVersionPrimary = null;
  cf.length = 0;
}
var Fl = Qr.ReactCurrentDispatcher,
  ff = Qr.ReactCurrentBatchConfig,
  lo = 0,
  Pt = null,
  Ut = null,
  Gt = null,
  vu = !1,
  Gs = !1,
  Ca = 0,
  v6 = 0;
function sn() {
  throw Error(re(321));
}
function d1(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!fr(e[n], t[n])) return !1;
  return !0;
}
function h1(e, t, n, r, i, o) {
  if (((lo = o), (Pt = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (Fl.current = e === null || e.memoizedState === null ? C6 : S6), (e = n(r, i)), Gs)) {
    o = 0;
    do {
      if (((Gs = !1), (Ca = 0), 25 <= o)) throw Error(re(301));
      (o += 1), (Gt = Ut = null), (t.updateQueue = null), (Fl.current = b6), (e = n(r, i));
    } while (Gs);
  }
  if (((Fl.current = yu), (t = Ut !== null && Ut.next !== null), (lo = 0), (Gt = Ut = Pt = null), (vu = !1), t)) throw Error(re(300));
  return e;
}
function p1() {
  var e = Ca !== 0;
  return (Ca = 0), e;
}
function gr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Gt === null ? (Pt.memoizedState = Gt = e) : (Gt = Gt.next = e), Gt;
}
function tr() {
  if (Ut === null) {
    var e = Pt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ut.next;
  var t = Gt === null ? Pt.memoizedState : Gt.next;
  if (t !== null) (Gt = t), (Ut = e);
  else {
    if (e === null) throw Error(re(310));
    (Ut = e),
      (e = { memoizedState: Ut.memoizedState, baseState: Ut.baseState, baseQueue: Ut.baseQueue, queue: Ut.queue, next: null }),
      Gt === null ? (Pt.memoizedState = Gt = e) : (Gt = Gt.next = e);
  }
  return Gt;
}
function Sa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function df(e) {
  var t = tr(),
    n = t.queue;
  if (n === null) throw Error(re(311));
  n.lastRenderedReducer = e;
  var r = Ut,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((lo & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f), (Pt.lanes |= c), (uo |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a), fr(r, t.memoizedState) || (Sn = !0), (t.memoizedState = r), (t.baseState = s), (t.baseQueue = l), (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Pt.lanes |= o), (uo |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hf(e) {
  var t = tr(),
    n = t.queue;
  if (n === null) throw Error(re(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    fr(o, t.memoizedState) || (Sn = !0), (t.memoizedState = o), t.baseQueue === null && (t.baseState = o), (n.lastRenderedState = o);
  }
  return [o, r];
}
function A2() {}
function k2(e, t) {
  var n = Pt,
    r = tr(),
    i = t(),
    o = !fr(r.memoizedState, i);
  if ((o && ((r.memoizedState = i), (Sn = !0)), (r = r.queue), m1(R2.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || (Gt !== null && Gt.memoizedState.tag & 1))) {
    if (((n.flags |= 2048), ba(9, M2.bind(null, n, r, i, t), void 0, null), qt === null)) throw Error(re(349));
    lo & 30 || L2(n, t, i);
  }
  return i;
}
function L2(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Pt.updateQueue),
    t === null ? ((t = { lastEffect: null, stores: null }), (Pt.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function M2(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), I2(t) && O2(e);
}
function R2(e, t, n) {
  return n(function () {
    I2(t) && O2(e);
  });
}
function I2(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !fr(e, n);
  } catch {
    return !0;
  }
}
function O2(e) {
  var t = Gr(e, 1);
  t !== null && cr(t, e, 1, -1);
}
function xp(e) {
  var t = gr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Sa, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = x6.bind(null, Pt, e)),
    [t.memoizedState, e]
  );
}
function ba(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Pt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Pt.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function B2() {
  return tr().memoizedState;
}
function Ul(e, t, n, r) {
  var i = gr();
  (Pt.flags |= e), (i.memoizedState = ba(1 | t, n, void 0, r === void 0 ? null : r));
}
function cc(e, t, n, r) {
  var i = tr();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ut !== null) {
    var s = Ut.memoizedState;
    if (((o = s.destroy), r !== null && d1(r, s.deps))) {
      i.memoizedState = ba(t, n, o, r);
      return;
    }
  }
  (Pt.flags |= e), (i.memoizedState = ba(1 | t, n, o, r));
}
function Cp(e, t) {
  return Ul(8390656, 8, e, t);
}
function m1(e, t) {
  return cc(2048, 8, e, t);
}
function $2(e, t) {
  return cc(4, 2, e, t);
}
function D2(e, t) {
  return cc(4, 4, e, t);
}
function N2(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function V2(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), cc(4, 4, N2.bind(null, t, e), n);
}
function g1() {}
function j2(e, t) {
  var n = tr();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && d1(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function F2(e, t) {
  var n = tr();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && d1(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function U2(e, t, n) {
  return lo & 21 ? (fr(n, t) || ((n = Hg()), (Pt.lanes |= n), (uo |= n), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (Sn = !0)), (e.memoizedState = n));
}
function y6(e, t) {
  var n = ft;
  (ft = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ff.transition;
  ff.transition = {};
  try {
    e(!1), t();
  } finally {
    (ft = n), (ff.transition = r);
  }
}
function z2() {
  return tr().memoizedState;
}
function w6(e, t, n) {
  var r = Ci(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), W2(e))) H2(t, n);
  else if (((n = C2(e, t, n, r)), n !== null)) {
    var i = vn();
    cr(n, e, r, i), K2(n, t, r);
  }
}
function x6(e, t, n) {
  var r = Ci(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (W2(e)) H2(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), fr(a, s))) {
          var l = t.interleaved;
          l === null ? ((i.next = i), a1(t)) : ((i.next = l.next), (l.next = i)), (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = C2(e, t, i, r)), n !== null && ((i = vn()), cr(n, e, r, i), K2(n, t, r));
  }
}
function W2(e) {
  var t = e.alternate;
  return e === Pt || (t !== null && t === Pt);
}
function H2(e, t) {
  Gs = vu = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function K2(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), G0(e, n);
  }
}
var yu = {
    readContext: er,
    useCallback: sn,
    useContext: sn,
    useEffect: sn,
    useImperativeHandle: sn,
    useInsertionEffect: sn,
    useLayoutEffect: sn,
    useMemo: sn,
    useReducer: sn,
    useRef: sn,
    useState: sn,
    useDebugValue: sn,
    useDeferredValue: sn,
    useTransition: sn,
    useMutableSource: sn,
    useSyncExternalStore: sn,
    useId: sn,
    unstable_isNewReconciler: !1,
  },
  C6 = {
    readContext: er,
    useCallback: function (e, t) {
      return (gr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: er,
    useEffect: Cp,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Ul(4194308, 4, N2.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Ul(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ul(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = gr();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = gr();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
        (r.queue = e),
        (e = e.dispatch = w6.bind(null, Pt, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = gr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: xp,
    useDebugValue: g1,
    useDeferredValue: function (e) {
      return (gr().memoizedState = e);
    },
    useTransition: function () {
      var e = xp(!1),
        t = e[0];
      return (e = y6.bind(null, e[1])), (gr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Pt,
        i = gr();
      if (yt) {
        if (n === void 0) throw Error(re(407));
        n = n();
      } else {
        if (((n = t()), qt === null)) throw Error(re(349));
        lo & 30 || L2(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (i.queue = o), Cp(R2.bind(null, r, o, e), [e]), (r.flags |= 2048), ba(9, M2.bind(null, r, o, n, t), void 0, null), n;
    },
    useId: function () {
      var e = gr(),
        t = qt.identifierPrefix;
      if (yt) {
        var n = Dr,
          r = $r;
        (n = (r & ~(1 << (32 - ur(r) - 1))).toString(32) + n), (t = ":" + t + "R" + n), (n = Ca++), 0 < n && (t += "H" + n.toString(32)), (t += ":");
      } else (n = v6++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  S6 = {
    readContext: er,
    useCallback: j2,
    useContext: er,
    useEffect: m1,
    useImperativeHandle: V2,
    useInsertionEffect: $2,
    useLayoutEffect: D2,
    useMemo: F2,
    useReducer: df,
    useRef: B2,
    useState: function () {
      return df(Sa);
    },
    useDebugValue: g1,
    useDeferredValue: function (e) {
      var t = tr();
      return U2(t, Ut.memoizedState, e);
    },
    useTransition: function () {
      var e = df(Sa)[0],
        t = tr().memoizedState;
      return [e, t];
    },
    useMutableSource: A2,
    useSyncExternalStore: k2,
    useId: z2,
    unstable_isNewReconciler: !1,
  },
  b6 = {
    readContext: er,
    useCallback: j2,
    useContext: er,
    useEffect: m1,
    useImperativeHandle: V2,
    useInsertionEffect: $2,
    useLayoutEffect: D2,
    useMemo: F2,
    useReducer: hf,
    useRef: B2,
    useState: function () {
      return hf(Sa);
    },
    useDebugValue: g1,
    useDeferredValue: function (e) {
      var t = tr();
      return Ut === null ? (t.memoizedState = e) : U2(t, Ut.memoizedState, e);
    },
    useTransition: function () {
      var e = hf(Sa)[0],
        t = tr().memoizedState;
      return [e, t];
    },
    useMutableSource: A2,
    useSyncExternalStore: k2,
    useId: z2,
    unstable_isNewReconciler: !1,
  };
function ss(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Q5(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function pf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Bd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var E6 = typeof WeakMap == "function" ? WeakMap : Map;
function G2(e, t, n) {
  (n = jr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      xu || ((xu = !0), (Hd = r)), Bd(e, t);
    }),
    n
  );
}
function q2(e, t, n) {
  (n = jr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Bd(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Bd(e, t), typeof r != "function" && (xi === null ? (xi = new Set([this])) : xi.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
      }),
    n
  );
}
function Sp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new E6();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = N6.bind(null, e, t, n)), t.then(e, e));
}
function bp(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ep(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = jr(-1, 1)), (t.tag = 2), wi(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var T6 = Qr.ReactCurrentOwner,
  Sn = !1;
function mn(e, t, n, r) {
  t.child = e === null ? P2(t, null, n, r) : is(t, e.child, n, r);
}
function Tp(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Qo(t, i),
    (r = h1(e, t, n, r, o, i)),
    (n = p1()),
    e !== null && !Sn ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), qr(e, t, i)) : (yt && n && t1(t), (t.flags |= 1), mn(e, t, r, i), t.child)
  );
}
function Pp(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !E1(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Y2(e, t, o, r, i))
      : ((e = Kl(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : ma), n(s, r) && e.ref === t.ref)) return qr(e, t, i);
  }
  return (t.flags |= 1), (e = Si(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Y2(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ma(o, r) && e.ref === t.ref)
      if (((Sn = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0)) e.flags & 131072 && (Sn = !0);
      else return (t.lanes = e.lanes), qr(e, t, i);
  }
  return $d(e, t, n, r, i);
}
function Z2(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), mt(No, Mn), (Mn |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          mt(No, Mn),
          (Mn |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = o !== null ? o.baseLanes : n), mt(No, Mn), (Mn |= r);
    }
  else o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), mt(No, Mn), (Mn |= r);
  return mn(e, t, i, n), t.child;
}
function Q2(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function $d(e, t, n, r, i) {
  var o = En(n) ? so : dn.current;
  return (
    (o = ns(t, o)),
    Qo(t, i),
    (n = h1(e, t, n, r, o, i)),
    (r = p1()),
    e !== null && !Sn ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), qr(e, t, i)) : (yt && r && t1(t), (t.flags |= 1), mn(e, t, n, i), t.child)
  );
}
function _p(e, t, n, r, i) {
  if (En(n)) {
    var o = !0;
    cu(t);
  } else o = !1;
  if ((Qo(t, i), t.stateNode === null)) zl(e, t), E2(t, n, r), Od(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? (u = er(u)) : ((u = En(n) ? so : dn.current), (u = ns(t, u)));
    var c = n.getDerivedStateFromProps,
      f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") || ((a !== r || l !== u) && yp(t, s, r, u)), (si = !1);
    var h = t.memoizedState;
    (s.state = h),
      mu(t, r, s, i),
      (l = t.memoizedState),
      a !== r || h !== l || bn.current || si
        ? (typeof c == "function" && (Id(t, n, c, r), (l = t.memoizedState)),
          (a = si || vp(t, n, a, r, h, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (s = t.stateNode),
      S2(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : or(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (h = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null ? (l = er(l)) : ((l = En(n) ? so : dn.current), (l = ns(t, l)));
    var p = n.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || h !== l) && yp(t, s, r, l)),
      (si = !1),
      (h = t.memoizedState),
      (s.state = h),
      mu(t, r, s, i);
    var g = t.memoizedState;
    a !== f || h !== g || bn.current || si
      ? (typeof p == "function" && (Id(t, n, p, r), (g = t.memoizedState)),
        (u = si || vp(t, n, u, r, h, g, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, l),
              typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" || (a === e.memoizedProps && h === e.memoizedState) || (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && h === e.memoizedState) || (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" || (a === e.memoizedProps && h === e.memoizedState) || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && h === e.memoizedState) || (t.flags |= 1024),
        (r = !1));
  }
  return Dd(e, t, n, r, o, i);
}
function Dd(e, t, n, r, i, o) {
  Q2(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && dp(t, n, !1), qr(e, t, o);
  (r = t.stateNode), (T6.current = t);
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1), e !== null && s ? ((t.child = is(t, e.child, null, o)), (t.child = is(t, null, a, o))) : mn(e, t, a, o), (t.memoizedState = r.state), i && dp(t, n, !0), t.child
  );
}
function X2(e) {
  var t = e.stateNode;
  t.pendingContext ? fp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && fp(e, t.context, !1), u1(e, t.containerInfo);
}
function Ap(e, t, n, r, i) {
  return rs(), r1(i), (t.flags |= 256), mn(e, t, n, r), t.child;
}
var Nd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function J2(e, t, n) {
  var r = t.pendingProps,
    i = bt.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    mt(bt, i & 1),
    e === null)
  )
    return (
      Md(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null ? ((o.childLanes = 0), (o.pendingProps = s)) : (o = hc(s, r, 0, null)),
              (e = no(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Vd(n)),
              (t.memoizedState = Nd),
              e)
            : v1(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null))) return P6(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null)) : ((r = Si(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = Si(a, o)) : ((o = no(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s = s === null ? Vd(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Nd),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Si(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function v1(e, t) {
  return (t = hc({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function vl(e, t, n, r) {
  return r !== null && r1(r), is(t, e.child, null, n), (e = v1(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function P6(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = pf(Error(re(422)))), vl(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = hc({ mode: "visible", children: r.children }, i, 0, null)),
        (o = no(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && is(t, e.child, null, s),
        (t.child.memoizedState = Vd(s)),
        (t.memoizedState = Nd),
        o);
  if (!(t.mode & 1)) return vl(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(re(419))), (r = pf(o, r, void 0)), vl(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Sn || a)) {
    if (((r = qt), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i), i !== 0 && i !== o.retryLane && ((o.retryLane = i), Gr(e, i), cr(r, e, i, -1));
    }
    return b1(), (r = pf(Error(re(421)))), vl(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = V6.bind(null, e)), (i._reactRetry = t), null)
    : ((e = o.treeContext),
      (In = yi(i.nextSibling)),
      (Bn = t),
      (yt = !0),
      (ar = null),
      e !== null && ((Gn[qn++] = $r), (Gn[qn++] = Dr), (Gn[qn++] = ao), ($r = e.id), (Dr = e.overflow), (ao = t)),
      (t = v1(t, r.children)),
      (t.flags |= 4096),
      t);
}
function kp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Rd(e.return, t, n);
}
function mf(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
    : ((o.isBackwards = t), (o.rendering = null), (o.renderingStartTime = 0), (o.last = r), (o.tail = n), (o.tailMode = i));
}
function e3(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((mn(e, t, r.children, n), (r = bt.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && kp(e, n, t);
        else if (e.tag === 19) kp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((mt(bt, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; ) (e = n.alternate), e !== null && gu(e) === null && (i = n), (n = n.sibling);
        (n = i), n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)), mf(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && gu(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        mf(t, !0, n, null, o);
        break;
      case "together":
        mf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zl(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function qr(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (uo |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(re(153));
  if (t.child !== null) {
    for (e = t.child, n = Si(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) (e = e.sibling), (n = n.sibling = Si(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function _6(e, t, n) {
  switch (t.tag) {
    case 3:
      X2(t), rs();
      break;
    case 5:
      _2(t);
      break;
    case 1:
      En(t.type) && cu(t);
      break;
    case 4:
      u1(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      mt(hu, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (mt(bt, bt.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? J2(e, t, n)
          : (mt(bt, bt.current & 1), (e = qr(e, t, n)), e !== null ? e.sibling : null);
      mt(bt, bt.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return e3(e, t, n);
        t.flags |= 128;
      }
      if (((i = t.memoizedState), i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)), mt(bt, bt.current), r)) break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Z2(e, t, n);
  }
  return qr(e, t, n);
}
var t3, jd, n3, r3;
t3 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
jd = function () {};
n3 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Xi(Cr.current);
    var o = null;
    switch (n) {
      case "input":
        (i = ld(e, i)), (r = ld(e, r)), (o = []);
        break;
      case "select":
        (i = _t({}, i, { value: void 0 })), (r = _t({}, r, { value: void 0 })), (o = []);
        break;
      case "textarea":
        (i = fd(e, i)), (r = fd(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = lu);
    }
    hd(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (la.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (((a = i != null ? i[u] : void 0), r.hasOwnProperty(u) && l !== a && (l != null || a != null)))
        if (u === "style")
          if (a) {
            for (s in a) !a.hasOwnProperty(s) || (l && l.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ""));
            for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0), (a = a ? a.__html : void 0), l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") || (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (la.hasOwnProperty(u) ? (l != null && u === "onScroll" && gt("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
r3 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ls(e, t) {
  if (!yt)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function an(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t) for (var i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags & 14680064), (r |= i.flags & 14680064), (i.return = e), (i = i.sibling);
  else for (i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function A6(e, t, n) {
  var r = t.pendingProps;
  switch ((n1(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return an(t), null;
    case 1:
      return En(t.type) && uu(), an(t), null;
    case 3:
      return (
        (r = t.stateNode),
        os(),
        vt(bn),
        vt(dn),
        f1(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ml(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), ar !== null && (qd(ar), (ar = null)))),
        jd(e, t),
        an(t),
        null
      );
    case 5:
      c1(t);
      var i = Xi(xa.current);
      if (((n = t.type), e !== null && t.stateNode != null)) n3(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(re(166));
          return an(t), null;
        }
        if (((e = Xi(Cr.current)), ml(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[yr] = t), (r[ya] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              gt("cancel", r), gt("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              gt("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ns.length; i++) gt(Ns[i], r);
              break;
            case "source":
              gt("error", r);
              break;
            case "img":
            case "image":
            case "link":
              gt("error", r), gt("load", r);
              break;
            case "details":
              gt("toggle", r);
              break;
            case "input":
              Nh(r, o), gt("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }), gt("invalid", r);
              break;
            case "textarea":
              jh(r, o), gt("invalid", r);
          }
          hd(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && pl(r.textContent, a, e), (i = ["children", a]))
                  : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && pl(r.textContent, a, e), (i = ["children", "" + a]))
                : la.hasOwnProperty(s) && a != null && s === "onScroll" && gt("scroll", r);
            }
          switch (n) {
            case "input":
              sl(r), Vh(r, o, !0);
              break;
            case "textarea":
              sl(r), Fh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = lu);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Lg(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)), n === "select" && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[yr] = t),
            (e[ya] = r),
            t3(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = pd(n, r)), n)) {
              case "dialog":
                gt("cancel", e), gt("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                gt("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ns.length; i++) gt(Ns[i], e);
                i = r;
                break;
              case "source":
                gt("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                gt("error", e), gt("load", e), (i = r);
                break;
              case "details":
                gt("toggle", e), (i = r);
                break;
              case "input":
                Nh(e, r), (i = ld(e, r)), gt("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }), (i = _t({}, r, { value: void 0 })), gt("invalid", e);
                break;
              case "textarea":
                jh(e, r), (i = fd(e, r)), gt("invalid", e);
                break;
              default:
                i = r;
            }
            hd(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Ig(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Mg(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ua(e, l)
                    : typeof l == "number" && ua(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (la.hasOwnProperty(o) ? l != null && o === "onScroll" && gt("scroll", e) : l != null && F0(e, o, l, s));
              }
            switch (n) {
              case "input":
                sl(e), Vh(e, r, !1);
                break;
              case "textarea":
                sl(e), Fh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Pi(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple), (o = r.value), o != null ? Go(e, !!r.multiple, o, !1) : r.defaultValue != null && Go(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = lu);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return an(t), null;
    case 6:
      if (e && t.stateNode != null) r3(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(re(166));
        if (((n = Xi(xa.current)), Xi(Cr.current), ml(t))) {
          if (((r = t.stateNode), (n = t.memoizedProps), (r[yr] = t), (o = r.nodeValue !== n) && ((e = Bn), e !== null)))
            switch (e.tag) {
              case 3:
                pl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && pl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[yr] = t), (t.stateNode = r);
      }
      return an(t), null;
    case 13:
      if ((vt(bt), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (yt && In !== null && t.mode & 1 && !(t.flags & 128)) x2(), rs(), (t.flags |= 98560), (o = !1);
        else if (((o = ml(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(re(318));
            if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(re(317));
            o[yr] = t;
          } else rs(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          an(t), (o = !1);
        } else ar !== null && (qd(ar), (ar = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) && r && ((t.child.flags |= 8192), t.mode & 1 && (e === null || bt.current & 1 ? Wt === 0 && (Wt = 3) : b1())),
          t.updateQueue !== null && (t.flags |= 4),
          an(t),
          null);
    case 4:
      return os(), jd(e, t), e === null && ga(t.stateNode.containerInfo), an(t), null;
    case 10:
      return s1(t.type._context), an(t), null;
    case 17:
      return En(t.type) && uu(), an(t), null;
    case 19:
      if ((vt(bt), (o = t.memoizedState), o === null)) return an(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Ls(o, !1);
        else {
          if (Wt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = gu(e)), s !== null)) {
                for (t.flags |= 128, Ls(o, !1), r = s.updateQueue, r !== null && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return mt(bt, (bt.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && Bt() > as && ((t.flags |= 128), (r = !0), Ls(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gu(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ls(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !yt)
            )
              return an(t), null;
          } else 2 * Bt() - o.renderingStartTime > as && n !== 1073741824 && ((t.flags |= 128), (r = !0), Ls(o, !1), (t.lanes = 4194304));
        o.isBackwards ? ((s.sibling = t.child), (t.child = s)) : ((n = o.last), n !== null ? (n.sibling = s) : (t.child = s), (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail), (o.rendering = t), (o.tail = t.sibling), (o.renderingStartTime = Bt()), (t.sibling = null), (n = bt.current), mt(bt, r ? (n & 1) | 2 : n & 1), t)
        : (an(t), null);
    case 22:
    case 23:
      return (
        S1(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Mn & 1073741824 && (an(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : an(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(re(156, t.tag));
}
function k6(e, t) {
  switch ((n1(t), t.tag)) {
    case 1:
      return En(t.type) && uu(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return os(), vt(bn), vt(dn), f1(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
    case 5:
      return c1(t), null;
    case 13:
      if ((vt(bt), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(re(340));
        rs();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return vt(bt), null;
    case 4:
      return os(), null;
    case 10:
      return s1(t.type._context), null;
    case 22:
    case 23:
      return S1(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yl = !1,
  un = !1,
  L6 = typeof WeakSet == "function" ? WeakSet : Set,
  de = null;
function Do(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Rt(e, t, r);
      }
    else n.current = null;
}
function Fd(e, t, n) {
  try {
    n();
  } catch (r) {
    Rt(e, t, r);
  }
}
var Lp = !1;
function M6(e, t) {
  if (((Ed = ou), (e = a2()), e1(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              (h = f), (f = p);
            for (;;) {
              if (f === e) break t;
              if ((h === n && ++u === i && (a = s), h === o && ++c === r && (l = s), (p = f.nextSibling) !== null)) break;
              (f = h), (h = f.parentNode);
            }
            f = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Td = { focusedElem: e, selectionRange: n }, ou = !1, de = t; de !== null; )
    if (((t = de), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (de = e);
    else
      for (; de !== null; ) {
        t = de;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    P = g.memoizedState,
                    y = t.stateNode,
                    w = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : or(t.type, v), P);
                  y.__reactInternalSnapshotBeforeUpdate = w;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1 ? (x.textContent = "") : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(re(163));
            }
        } catch (T) {
          Rt(t, t.return, T);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (de = e);
          break;
        }
        de = t.return;
      }
  return (g = Lp), (Lp = !1), g;
}
function qs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Fd(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function fc(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ud(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function i3(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), i3(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[yr], delete t[ya], delete t[Ad], delete t[h6], delete t[p6])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function o3(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || o3(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function zd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = lu));
  else if (r !== 4 && ((e = e.child), e !== null)) for (zd(e, t, n), e = e.sibling; e !== null; ) zd(e, t, n), (e = e.sibling);
}
function Wd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null)) for (Wd(e, t, n), e = e.sibling; e !== null; ) Wd(e, t, n), (e = e.sibling);
}
var Qt = null,
  sr = !1;
function ni(e, t, n) {
  for (n = n.child; n !== null; ) s3(e, t, n), (n = n.sibling);
}
function s3(e, t, n) {
  if (xr && typeof xr.onCommitFiberUnmount == "function")
    try {
      xr.onCommitFiberUnmount(rc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      un || Do(n, t);
    case 6:
      var r = Qt,
        i = sr;
      (Qt = null),
        ni(e, t, n),
        (Qt = r),
        (sr = i),
        Qt !== null && (sr ? ((e = Qt), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Qt.removeChild(n.stateNode));
      break;
    case 18:
      Qt !== null && (sr ? ((e = Qt), (n = n.stateNode), e.nodeType === 8 ? lf(e.parentNode, n) : e.nodeType === 1 && lf(e, n), ha(e)) : lf(Qt, n.stateNode));
      break;
    case 4:
      (r = Qt), (i = sr), (Qt = n.stateNode.containerInfo), (sr = !0), ni(e, t, n), (Qt = r), (sr = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!un && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag), s !== void 0 && (o & 2 || o & 4) && Fd(n, t, s), (i = i.next);
        } while (i !== r);
      }
      ni(e, t, n);
      break;
    case 1:
      if (!un && (Do(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          Rt(n, t, a);
        }
      ni(e, t, n);
      break;
    case 21:
      ni(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((un = (r = un) || n.memoizedState !== null), ni(e, t, n), (un = r)) : ni(e, t, n);
      break;
    default:
      ni(e, t, n);
  }
}
function Rp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new L6()),
      t.forEach(function (r) {
        var i = j6.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function rr(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Qt = a.stateNode), (sr = !1);
              break e;
            case 3:
              (Qt = a.stateNode.containerInfo), (sr = !0);
              break e;
            case 4:
              (Qt = a.stateNode.containerInfo), (sr = !0);
              break e;
          }
          a = a.return;
        }
        if (Qt === null) throw Error(re(160));
        s3(o, s, i), (Qt = null), (sr = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Rt(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) a3(t, e), (t = t.sibling);
}
function a3(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((rr(t, e), mr(e), r & 4)) {
        try {
          qs(3, e, e.return), fc(3, e);
        } catch (v) {
          Rt(e, e.return, v);
        }
        try {
          qs(5, e, e.return);
        } catch (v) {
          Rt(e, e.return, v);
        }
      }
      break;
    case 1:
      rr(t, e), mr(e), r & 512 && n !== null && Do(n, n.return);
      break;
    case 5:
      if ((rr(t, e), mr(e), r & 512 && n !== null && Do(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          ua(i, "");
        } catch (v) {
          Rt(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Ag(i, o), pd(a, s);
            var u = pd(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style" ? Ig(i, f) : c === "dangerouslySetInnerHTML" ? Mg(i, f) : c === "children" ? ua(i, f) : F0(i, c, f, u);
            }
            switch (a) {
              case "input":
                ud(i, o);
                break;
              case "textarea":
                kg(i, o);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null
                  ? Go(i, !!o.multiple, p, !1)
                  : h !== !!o.multiple && (o.defaultValue != null ? Go(i, !!o.multiple, o.defaultValue, !0) : Go(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ya] = o;
          } catch (v) {
            Rt(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((rr(t, e), mr(e), r & 4)) {
        if (e.stateNode === null) throw Error(re(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          Rt(e, e.return, v);
        }
      }
      break;
    case 3:
      if ((rr(t, e), mr(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          ha(t.containerInfo);
        } catch (v) {
          Rt(e, e.return, v);
        }
      break;
    case 4:
      rr(t, e), mr(e);
      break;
    case 13:
      rr(t, e),
        mr(e),
        (i = e.child),
        i.flags & 8192 && ((o = i.memoizedState !== null), (i.stateNode.isHidden = o), !o || (i.alternate !== null && i.alternate.memoizedState !== null) || (x1 = Bt())),
        r & 4 && Rp(e);
      break;
    case 22:
      if (((c = n !== null && n.memoizedState !== null), e.mode & 1 ? ((un = (u = un) || c), rr(t, e), (un = u)) : rr(t, e), mr(e), r & 8192)) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (de = e, c = e.child; c !== null; ) {
            for (f = de = c; de !== null; ) {
              switch (((h = de), (p = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qs(4, h, h.return);
                  break;
                case 1:
                  Do(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r), (g.props = t.memoizedProps), (g.state = t.memoizedState), g.componentWillUnmount();
                    } catch (v) {
                      Rt(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Do(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Op(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = h), (de = p)) : Op(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style), typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : (o.display = "none"))
                    : ((a = f.stateNode), (l = f.memoizedProps.style), (s = l != null && l.hasOwnProperty("display") ? l.display : null), (a.style.display = Rg("display", s)));
              } catch (v) {
                Rt(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                Rt(e, e.return, v);
              }
          } else if (((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) && f.child !== null) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      rr(t, e), mr(e), r & 4 && Rp(e);
      break;
    case 21:
      break;
    default:
      rr(t, e), mr(e);
  }
}
function mr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (o3(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(re(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ua(i, ""), (r.flags &= -33));
          var o = Mp(e);
          Wd(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Mp(e);
          zd(e, a, s);
          break;
        default:
          throw Error(re(161));
      }
    } catch (l) {
      Rt(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function R6(e, t, n) {
  (de = e), l3(e);
}
function l3(e, t, n) {
  for (var r = (e.mode & 1) !== 0; de !== null; ) {
    var i = de,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || yl;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || un;
        a = yl;
        var u = un;
        if (((yl = s), (un = l) && !u))
          for (de = i; de !== null; ) (s = de), (l = s.child), s.tag === 22 && s.memoizedState !== null ? Bp(i) : l !== null ? ((l.return = s), (de = l)) : Bp(i);
        for (; o !== null; ) (de = o), l3(o), (o = o.sibling);
        (de = i), (yl = a), (un = u);
      }
      Ip(e);
    } else i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (de = o)) : Ip(e);
  }
}
function Ip(e) {
  for (; de !== null; ) {
    var t = de;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              un || fc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !un)
                if (n === null) r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : or(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && gp(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                gp(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && ha(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(re(163));
          }
        un || (t.flags & 512 && Ud(t));
      } catch (h) {
        Rt(t, t.return, h);
      }
    }
    if (t === e) {
      de = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (de = n);
      break;
    }
    de = t.return;
  }
}
function Op(e) {
  for (; de !== null; ) {
    var t = de;
    if (t === e) {
      de = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (de = n);
      break;
    }
    de = t.return;
  }
}
function Bp(e) {
  for (; de !== null; ) {
    var t = de;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fc(4, t);
          } catch (l) {
            Rt(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Rt(t, i, l);
            }
          }
          var o = t.return;
          try {
            Ud(t);
          } catch (l) {
            Rt(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ud(t);
          } catch (l) {
            Rt(t, s, l);
          }
      }
    } catch (l) {
      Rt(t, t.return, l);
    }
    if (t === e) {
      de = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (de = a);
      break;
    }
    de = t.return;
  }
}
var I6 = Math.ceil,
  wu = Qr.ReactCurrentDispatcher,
  y1 = Qr.ReactCurrentOwner,
  Zn = Qr.ReactCurrentBatchConfig,
  st = 0,
  qt = null,
  Nt = null,
  Jt = 0,
  Mn = 0,
  No = $i(0),
  Wt = 0,
  Ea = null,
  uo = 0,
  dc = 0,
  w1 = 0,
  Ys = null,
  xn = null,
  x1 = 0,
  as = 1 / 0,
  Ir = null,
  xu = !1,
  Hd = null,
  xi = null,
  wl = !1,
  di = null,
  Cu = 0,
  Zs = 0,
  Kd = null,
  Wl = -1,
  Hl = 0;
function vn() {
  return st & 6 ? Bt() : Wl !== -1 ? Wl : (Wl = Bt());
}
function Ci(e) {
  return e.mode & 1
    ? st & 2 && Jt !== 0
      ? Jt & -Jt
      : g6.transition !== null
      ? (Hl === 0 && (Hl = Hg()), Hl)
      : ((e = ft), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Xg(e.type))), e)
    : 1;
}
function cr(e, t, n, r) {
  if (50 < Zs) throw ((Zs = 0), (Kd = null), Error(re(185)));
  ja(e, n, r),
    (!(st & 2) || e !== qt) && (e === qt && (!(st & 2) && (dc |= n), Wt === 4 && ci(e, Jt)), Tn(e, r), n === 1 && st === 0 && !(t.mode & 1) && ((as = Bt() + 500), lc && Di()));
}
function Tn(e, t) {
  var n = e.callbackNode;
  gw(e, t);
  var r = iu(e, e === qt ? Jt : 0);
  if (r === 0) n !== null && Wh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Wh(n), t === 1))
      e.tag === 0 ? m6($p.bind(null, e)) : v2($p.bind(null, e)),
        f6(function () {
          !(st & 6) && Di();
        }),
        (n = null);
    else {
      switch (Kg(r)) {
        case 1:
          n = K0;
          break;
        case 4:
          n = zg;
          break;
        case 16:
          n = ru;
          break;
        case 536870912:
          n = Wg;
          break;
        default:
          n = ru;
      }
      n = g3(n, u3.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function u3(e, t) {
  if (((Wl = -1), (Hl = 0), st & 6)) throw Error(re(327));
  var n = e.callbackNode;
  if (Xo() && e.callbackNode !== n) return null;
  var r = iu(e, e === qt ? Jt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Su(e, r);
  else {
    t = r;
    var i = st;
    st |= 2;
    var o = f3();
    (qt !== e || Jt !== t) && ((Ir = null), (as = Bt() + 500), to(e, t));
    do
      try {
        $6();
        break;
      } catch (a) {
        c3(e, a);
      }
    while (1);
    o1(), (wu.current = o), (st = i), Nt !== null ? (t = 0) : ((qt = null), (Jt = 0), (t = Wt));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = wd(e)), i !== 0 && ((r = i), (t = Gd(e, i)))), t === 1)) throw ((n = Ea), to(e, 0), ci(e, r), Tn(e, Bt()), n);
    if (t === 6) ci(e, r);
    else {
      if (((i = e.current.alternate), !(r & 30) && !O6(i) && ((t = Su(e, r)), t === 2 && ((o = wd(e)), o !== 0 && ((r = o), (t = Gd(e, o)))), t === 1)))
        throw ((n = Ea), to(e, 0), ci(e, r), Tn(e, Bt()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(re(345));
        case 2:
          Wi(e, xn, Ir);
          break;
        case 3:
          if ((ci(e, r), (r & 130023424) === r && ((t = x1 + 500 - Bt()), 10 < t))) {
            if (iu(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              vn(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = _d(Wi.bind(null, e, xn, Ir), t);
            break;
          }
          Wi(e, xn, Ir);
          break;
        case 4:
          if ((ci(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - ur(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i), (r = Bt() - r), (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * I6(r / 1960)) - r), 10 < r)
          ) {
            e.timeoutHandle = _d(Wi.bind(null, e, xn, Ir), r);
            break;
          }
          Wi(e, xn, Ir);
          break;
        case 5:
          Wi(e, xn, Ir);
          break;
        default:
          throw Error(re(329));
      }
    }
  }
  return Tn(e, Bt()), e.callbackNode === n ? u3.bind(null, e) : null;
}
function Gd(e, t) {
  var n = Ys;
  return e.current.memoizedState.isDehydrated && (to(e, t).flags |= 256), (e = Su(e, t)), e !== 2 && ((t = xn), (xn = n), t !== null && qd(t)), e;
}
function qd(e) {
  xn === null ? (xn = e) : xn.push.apply(xn, e);
}
function O6(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!fr(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ci(e, t) {
  for (t &= ~w1, t &= ~dc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ur(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function $p(e) {
  if (st & 6) throw Error(re(327));
  Xo();
  var t = iu(e, 0);
  if (!(t & 1)) return Tn(e, Bt()), null;
  var n = Su(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = wd(e);
    r !== 0 && ((t = r), (n = Gd(e, r)));
  }
  if (n === 1) throw ((n = Ea), to(e, 0), ci(e, t), Tn(e, Bt()), n);
  if (n === 6) throw Error(re(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Wi(e, xn, Ir), Tn(e, Bt()), null;
}
function C1(e, t) {
  var n = st;
  st |= 1;
  try {
    return e(t);
  } finally {
    (st = n), st === 0 && ((as = Bt() + 500), lc && Di());
  }
}
function co(e) {
  di !== null && di.tag === 0 && !(st & 6) && Xo();
  var t = st;
  st |= 1;
  var n = Zn.transition,
    r = ft;
  try {
    if (((Zn.transition = null), (ft = 1), e)) return e();
  } finally {
    (ft = r), (Zn.transition = n), (st = t), !(st & 6) && Di();
  }
}
function S1() {
  (Mn = No.current), vt(No);
}
function to(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), c6(n)), Nt !== null))
    for (n = Nt.return; n !== null; ) {
      var r = n;
      switch ((n1(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && uu();
          break;
        case 3:
          os(), vt(bn), vt(dn), f1();
          break;
        case 5:
          c1(r);
          break;
        case 4:
          os();
          break;
        case 13:
          vt(bt);
          break;
        case 19:
          vt(bt);
          break;
        case 10:
          s1(r.type._context);
          break;
        case 22:
        case 23:
          S1();
      }
      n = n.return;
    }
  if (((qt = e), (Nt = e = Si(e.current, null)), (Jt = Mn = t), (Wt = 0), (Ea = null), (w1 = dc = uo = 0), (xn = Ys = null), Qi !== null)) {
    for (t = 0; t < Qi.length; t++)
      if (((n = Qi[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Qi = null;
  }
  return e;
}
function c3(e, t) {
  do {
    var n = Nt;
    try {
      if ((o1(), (Fl.current = yu), vu)) {
        for (var r = Pt.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        vu = !1;
      }
      if (((lo = 0), (Gt = Ut = Pt = null), (Gs = !1), (Ca = 0), (y1.current = null), n === null || n.return === null)) {
        (Wt = 1), (Ea = t), (Nt = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (((t = Jt), (a.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = c.alternate;
            h ? ((c.updateQueue = h.updateQueue), (c.memoizedState = h.memoizedState), (c.lanes = h.lanes)) : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = bp(s);
          if (p !== null) {
            (p.flags &= -257), Ep(p, s, a, o, t), p.mode & 1 && Sp(o, u, t), (t = p), (l = u);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Sp(o, u, t), b1();
              break e;
            }
            l = Error(re(426));
          }
        } else if (yt && a.mode & 1) {
          var P = bp(s);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), Ep(P, s, a, o, t), r1(ss(l, a));
            break e;
          }
        }
        (o = l = ss(l, a)), Wt !== 4 && (Wt = 2), Ys === null ? (Ys = [o]) : Ys.push(o), (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var y = G2(o, l, t);
              mp(o, y);
              break e;
            case 1:
              a = l;
              var w = o.type,
                x = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof w.getDerivedStateFromError == "function" || (x !== null && typeof x.componentDidCatch == "function" && (xi === null || !xi.has(x))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var T = q2(o, a, t);
                mp(o, T);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      h3(n);
    } catch (_) {
      (t = _), Nt === n && n !== null && (Nt = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function f3() {
  var e = wu.current;
  return (wu.current = yu), e === null ? yu : e;
}
function b1() {
  (Wt === 0 || Wt === 3 || Wt === 2) && (Wt = 4), qt === null || (!(uo & 268435455) && !(dc & 268435455)) || ci(qt, Jt);
}
function Su(e, t) {
  var n = st;
  st |= 2;
  var r = f3();
  (qt !== e || Jt !== t) && ((Ir = null), to(e, t));
  do
    try {
      B6();
      break;
    } catch (i) {
      c3(e, i);
    }
  while (1);
  if ((o1(), (st = n), (wu.current = r), Nt !== null)) throw Error(re(261));
  return (qt = null), (Jt = 0), Wt;
}
function B6() {
  for (; Nt !== null; ) d3(Nt);
}
function $6() {
  for (; Nt !== null && !aw(); ) d3(Nt);
}
function d3(e) {
  var t = m3(e.alternate, e, Mn);
  (e.memoizedProps = e.pendingProps), t === null ? h3(e) : (Nt = t), (y1.current = null);
}
function h3(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = k6(n, t)), n !== null)) {
        (n.flags &= 32767), (Nt = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Wt = 6), (Nt = null);
        return;
      }
    } else if (((n = A6(n, t, Mn)), n !== null)) {
      Nt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Nt = t;
      return;
    }
    Nt = t = e;
  } while (t !== null);
  Wt === 0 && (Wt = 5);
}
function Wi(e, t, n) {
  var r = ft,
    i = Zn.transition;
  try {
    (Zn.transition = null), (ft = 1), D6(e, t, n, r);
  } finally {
    (Zn.transition = i), (ft = r);
  }
  return null;
}
function D6(e, t, n, r) {
  do Xo();
  while (di !== null);
  if (st & 6) throw Error(re(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(re(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (vw(e, o),
    e === qt && ((Nt = qt = null), (Jt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wl ||
      ((wl = !0),
      g3(ru, function () {
        return Xo(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Zn.transition), (Zn.transition = null);
    var s = ft;
    ft = 1;
    var a = st;
    (st |= 4), (y1.current = null), M6(e, n), a3(n, e), r6(Td), (ou = !!Ed), (Td = Ed = null), (e.current = n), R6(n), lw(), (st = a), (ft = s), (Zn.transition = o);
  } else e.current = n;
  if ((wl && ((wl = !1), (di = e), (Cu = i)), (o = e.pendingLanes), o === 0 && (xi = null), fw(n.stateNode), Tn(e, Bt()), t !== null))
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (xu) throw ((xu = !1), (e = Hd), (Hd = null), e);
  return Cu & 1 && e.tag !== 0 && Xo(), (o = e.pendingLanes), o & 1 ? (e === Kd ? Zs++ : ((Zs = 0), (Kd = e))) : (Zs = 0), Di(), null;
}
function Xo() {
  if (di !== null) {
    var e = Kg(Cu),
      t = Zn.transition,
      n = ft;
    try {
      if (((Zn.transition = null), (ft = 16 > e ? 16 : e), di === null)) var r = !1;
      else {
        if (((e = di), (di = null), (Cu = 0), st & 6)) throw Error(re(331));
        var i = st;
        for (st |= 4, de = e.current; de !== null; ) {
          var o = de,
            s = o.child;
          if (de.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (de = u; de !== null; ) {
                  var c = de;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qs(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (de = f);
                  else
                    for (; de !== null; ) {
                      c = de;
                      var h = c.sibling,
                        p = c.return;
                      if ((i3(c), c === u)) {
                        de = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = p), (de = h);
                        break;
                      }
                      de = p;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var P = v.sibling;
                    (v.sibling = null), (v = P);
                  } while (v !== null);
                }
              }
              de = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (de = s);
          else
            e: for (; de !== null; ) {
              if (((o = de), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    qs(9, o, o.return);
                }
              var y = o.sibling;
              if (y !== null) {
                (y.return = o.return), (de = y);
                break e;
              }
              de = o.return;
            }
        }
        var w = e.current;
        for (de = w; de !== null; ) {
          s = de;
          var x = s.child;
          if (s.subtreeFlags & 2064 && x !== null) (x.return = s), (de = x);
          else
            e: for (s = w; de !== null; ) {
              if (((a = de), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fc(9, a);
                  }
                } catch (_) {
                  Rt(a, a.return, _);
                }
              if (a === s) {
                de = null;
                break e;
              }
              var T = a.sibling;
              if (T !== null) {
                (T.return = a.return), (de = T);
                break e;
              }
              de = a.return;
            }
        }
        if (((st = i), Di(), xr && typeof xr.onPostCommitFiberRoot == "function"))
          try {
            xr.onPostCommitFiberRoot(rc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ft = n), (Zn.transition = t);
    }
  }
  return !1;
}
function Dp(e, t, n) {
  (t = ss(n, t)), (t = G2(e, t, 1)), (e = wi(e, t, 1)), (t = vn()), e !== null && (ja(e, 1, t), Tn(e, t));
}
function Rt(e, t, n) {
  if (e.tag === 3) Dp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Dp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || (typeof r.componentDidCatch == "function" && (xi === null || !xi.has(r)))) {
          (e = ss(n, e)), (e = q2(t, e, 1)), (t = wi(t, e, 1)), (e = vn()), t !== null && (ja(t, 1, e), Tn(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function N6(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = vn()),
    (e.pingedLanes |= e.suspendedLanes & n),
    qt === e && (Jt & n) === n && (Wt === 4 || (Wt === 3 && (Jt & 130023424) === Jt && 500 > Bt() - x1) ? to(e, 0) : (w1 |= n)),
    Tn(e, t);
}
function p3(e, t) {
  t === 0 && (e.mode & 1 ? ((t = ul), (ul <<= 1), !(ul & 130023424) && (ul = 4194304)) : (t = 1));
  var n = vn();
  (e = Gr(e, t)), e !== null && (ja(e, t, n), Tn(e, n));
}
function V6(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), p3(e, n);
}
function j6(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(re(314));
  }
  r !== null && r.delete(t), p3(e, n);
}
var m3;
m3 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || bn.current) Sn = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Sn = !1), _6(e, t, n);
      Sn = !!(e.flags & 131072);
    }
  else (Sn = !1), yt && t.flags & 1048576 && y2(t, du, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      zl(e, t), (e = t.pendingProps);
      var i = ns(t, dn.current);
      Qo(t, n), (i = h1(null, t, r, e, i, n));
      var o = p1();
      return (
        (t.flags |= 1),
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            En(r) ? ((o = !0), cu(t)) : (o = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            l1(t),
            (i.updater = uc),
            (t.stateNode = i),
            (i._reactInternals = t),
            Od(t, r, e, n),
            (t = Dd(null, t, r, !0, o, n)))
          : ((t.tag = 0), yt && o && t1(t), mn(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch ((zl(e, t), (e = t.pendingProps), (i = r._init), (r = i(r._payload)), (t.type = r), (i = t.tag = U6(r)), (e = or(r, e)), i)) {
          case 0:
            t = $d(null, t, r, e, n);
            break e;
          case 1:
            t = _p(null, t, r, e, n);
            break e;
          case 11:
            t = Tp(null, t, r, e, n);
            break e;
          case 14:
            t = Pp(null, t, r, or(r.type, e), n);
            break e;
        }
        throw Error(re(306, r, ""));
      }
      return t;
    case 0:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : or(r, i)), $d(e, t, r, i, n);
    case 1:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : or(r, i)), _p(e, t, r, i, n);
    case 3:
      e: {
        if ((X2(t), e === null)) throw Error(re(387));
        (r = t.pendingProps), (o = t.memoizedState), (i = o.element), S2(e, t), mu(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = ss(Error(re(423)), t)), (t = Ap(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ss(Error(re(424)), t)), (t = Ap(e, t, r, n, i));
            break e;
          } else
            for (In = yi(t.stateNode.containerInfo.firstChild), Bn = t, yt = !0, ar = null, n = P2(t, null, r, n), t.child = n; n; )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((rs(), r === i)) {
            t = qr(e, t, n);
            break e;
          }
          mn(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        _2(t),
        e === null && Md(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Pd(r, i) ? (s = null) : o !== null && Pd(r, o) && (t.flags |= 32),
        Q2(e, t),
        mn(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Md(t), null;
    case 13:
      return J2(e, t, n);
    case 4:
      return u1(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = is(t, null, r, n)) : mn(e, t, r, n), t.child;
    case 11:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : or(r, i)), Tp(e, t, r, i, n);
    case 7:
      return mn(e, t, t.pendingProps, n), t.child;
    case 8:
      return mn(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return mn(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (((r = t.type._context), (i = t.pendingProps), (o = t.memoizedProps), (s = i.value), mt(hu, r._currentValue), (r._currentValue = s), o !== null))
          if (fr(o.value, s)) {
            if (o.children === i.children && !bn.current) {
              t = qr(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = jr(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)), (u.pending = l);
                      }
                    }
                    (o.lanes |= n), (l = o.alternate), l !== null && (l.lanes |= n), Rd(o.return, n, t), (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(re(341));
                (s.lanes |= n), (a = s.alternate), a !== null && (a.lanes |= n), Rd(s, n, t), (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        mn(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (i = t.type), (r = t.pendingProps.children), Qo(t, n), (i = er(i)), (r = r(i)), (t.flags |= 1), mn(e, t, r, n), t.child;
    case 14:
      return (r = t.type), (i = or(r, t.pendingProps)), (i = or(r.type, i)), Pp(e, t, r, i, n);
    case 15:
      return Y2(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : or(r, i)),
        zl(e, t),
        (t.tag = 1),
        En(r) ? ((e = !0), cu(t)) : (e = !1),
        Qo(t, n),
        E2(t, r, i),
        Od(t, r, i, n),
        Dd(null, t, r, !0, e, n)
      );
    case 19:
      return e3(e, t, n);
    case 22:
      return Z2(e, t, n);
  }
  throw Error(re(156, t.tag));
};
function g3(e, t) {
  return Ug(e, t);
}
function F6(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Yn(e, t, n, r) {
  return new F6(e, t, n, r);
}
function E1(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function U6(e) {
  if (typeof e == "function") return E1(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === z0)) return 11;
    if (e === W0) return 14;
  }
  return 2;
}
function Si(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Yn(e.tag, t, e.key, e.mode)), (n.elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Kl(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) E1(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Ao:
        return no(n.children, i, o, t);
      case U0:
        (s = 8), (i |= 8);
        break;
      case id:
        return (e = Yn(12, n, t, i | 2)), (e.elementType = id), (e.lanes = o), e;
      case od:
        return (e = Yn(13, n, t, i)), (e.elementType = od), (e.lanes = o), e;
      case sd:
        return (e = Yn(19, n, t, i)), (e.elementType = sd), (e.lanes = o), e;
      case Tg:
        return hc(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case bg:
              s = 10;
              break e;
            case Eg:
              s = 9;
              break e;
            case z0:
              s = 11;
              break e;
            case W0:
              s = 14;
              break e;
            case oi:
              (s = 16), (r = null);
              break e;
          }
        throw Error(re(130, e == null ? e : typeof e, ""));
    }
  return (t = Yn(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
}
function no(e, t, n, r) {
  return (e = Yn(7, e, r, t)), (e.lanes = n), e;
}
function hc(e, t, n, r) {
  return (e = Yn(22, e, r, t)), (e.elementType = Tg), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function gf(e, t, n) {
  return (e = Yn(6, e, null, t)), (e.lanes = n), e;
}
function vf(e, t, n) {
  return (
    (t = Yn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function z6(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Zc(0)),
    (this.expirationTimes = Zc(-1)),
    (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
    (this.entanglements = Zc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function T1(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new z6(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Yn(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
    l1(o),
    e
  );
}
function W6(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: _o, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function v3(e) {
  if (!e) return _i;
  e = e._reactInternals;
  e: {
    if (go(e) !== e || e.tag !== 1) throw Error(re(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (En(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(re(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (En(n)) return g2(e, n, t);
  }
  return t;
}
function y3(e, t, n, r, i, o, s, a, l) {
  return (
    (e = T1(n, r, !0, e, i, o, s, a, l)),
    (e.context = v3(null)),
    (n = e.current),
    (r = vn()),
    (i = Ci(n)),
    (o = jr(r, i)),
    (o.callback = t ?? null),
    wi(n, o, i),
    (e.current.lanes = i),
    ja(e, i, r),
    Tn(e, r),
    e
  );
}
function pc(e, t, n, r) {
  var i = t.current,
    o = vn(),
    s = Ci(i);
  return (
    (n = v3(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = jr(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = wi(i, t, s)),
    e !== null && (cr(e, i, s, o), jl(e, i, s)),
    s
  );
}
function bu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Np(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function P1(e, t) {
  Np(e, t), (e = e.alternate) && Np(e, t);
}
function H6() {
  return null;
}
var w3 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _1(e) {
  this._internalRoot = e;
}
mc.prototype.render = _1.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(re(409));
  pc(e, t, null, null);
};
mc.prototype.unmount = _1.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    co(function () {
      pc(null, e, null, null);
    }),
      (t[Kr] = null);
  }
};
function mc(e) {
  this._internalRoot = e;
}
mc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Yg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ui.length && t !== 0 && t < ui[n].priority; n++);
    ui.splice(n, 0, e), n === 0 && Qg(e);
  }
};
function A1(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function gc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")));
}
function Vp() {}
function K6(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = bu(s);
        o.call(u);
      };
    }
    var s = y3(t, r, e, 0, null, !1, !1, "", Vp);
    return (e._reactRootContainer = s), (e[Kr] = s.current), ga(e.nodeType === 8 ? e.parentNode : e), co(), s;
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = bu(l);
      a.call(u);
    };
  }
  var l = T1(e, 0, !1, null, null, !1, !1, "", Vp);
  return (
    (e._reactRootContainer = l),
    (e[Kr] = l.current),
    ga(e.nodeType === 8 ? e.parentNode : e),
    co(function () {
      pc(t, l, n, r);
    }),
    l
  );
}
function vc(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = bu(s);
        a.call(l);
      };
    }
    pc(t, s, e, i);
  } else s = K6(n, t, e, i, r);
  return bu(s);
}
Gg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ds(t.pendingLanes);
        n !== 0 && (G0(t, n | 1), Tn(t, Bt()), !(st & 6) && ((as = Bt() + 500), Di()));
      }
      break;
    case 13:
      co(function () {
        var r = Gr(e, 1);
        if (r !== null) {
          var i = vn();
          cr(r, e, 1, i);
        }
      }),
        P1(e, 1);
  }
};
q0 = function (e) {
  if (e.tag === 13) {
    var t = Gr(e, 134217728);
    if (t !== null) {
      var n = vn();
      cr(t, e, 134217728, n);
    }
    P1(e, 134217728);
  }
};
qg = function (e) {
  if (e.tag === 13) {
    var t = Ci(e),
      n = Gr(e, t);
    if (n !== null) {
      var r = vn();
      cr(n, e, t, r);
    }
    P1(e, t);
  }
};
Yg = function () {
  return ft;
};
Zg = function (e, t) {
  var n = ft;
  try {
    return (ft = e), t();
  } finally {
    ft = n;
  }
};
gd = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ud(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ac(r);
            if (!i) throw Error(re(90));
            _g(r), ud(r, i);
          }
        }
      }
      break;
    case "textarea":
      kg(e, n);
      break;
    case "select":
      (t = n.value), t != null && Go(e, !!n.multiple, t, !1);
  }
};
$g = C1;
Dg = co;
var G6 = { usingClientEntryPoint: !1, Events: [Ua, Ro, ac, Og, Bg, C1] },
  Ms = { findFiberByHostInstance: Zi, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
  q6 = {
    bundleType: Ms.bundleType,
    version: Ms.version,
    rendererPackageName: Ms.rendererPackageName,
    rendererConfig: Ms.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Qr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = jg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ms.findFiberByHostInstance || H6,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xl.isDisabled && xl.supportsFiber)
    try {
      (rc = xl.inject(q6)), (xr = xl);
    } catch {}
}
jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G6;
jn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!A1(t)) throw Error(re(200));
  return W6(e, t, null, n);
};
jn.createRoot = function (e, t) {
  if (!A1(e)) throw Error(re(299));
  var n = !1,
    r = "",
    i = w3;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = T1(e, 1, !1, null, null, n, !1, r, i)),
    (e[Kr] = t.current),
    ga(e.nodeType === 8 ? e.parentNode : e),
    new _1(t)
  );
};
jn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(re(188)) : ((e = Object.keys(e).join(",")), Error(re(268, e)));
  return (e = jg(t)), (e = e === null ? null : e.stateNode), e;
};
jn.flushSync = function (e) {
  return co(e);
};
jn.hydrate = function (e, t, n) {
  if (!gc(t)) throw Error(re(200));
  return vc(null, e, t, !0, n);
};
jn.hydrateRoot = function (e, t, n) {
  if (!A1(e)) throw Error(re(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = w3;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = y3(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Kr] = t.current),
    ga(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, i]) : t.mutableSourceEagerHydrationData.push(n, i);
  return new mc(t);
};
jn.render = function (e, t, n) {
  if (!gc(t)) throw Error(re(200));
  return vc(null, e, t, !1, n);
};
jn.unmountComponentAtNode = function (e) {
  if (!gc(e)) throw Error(re(40));
  return e._reactRootContainer
    ? (co(function () {
        vc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Kr] = null);
        });
      }),
      !0)
    : !1;
};
jn.unstable_batchedUpdates = C1;
jn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!gc(n)) throw Error(re(200));
  if (e == null || e._reactInternals === void 0) throw Error(re(38));
  return vc(e, t, n, !1, r);
};
jn.version = "18.2.0-next-9e3b772b8-20220608";
function x3() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x3);
    } catch (e) {
      console.error(e);
    }
}
x3(), (yg.exports = jn);
var Y6 = yg.exports,
  jp = Y6;
(Oh.createRoot = jp.createRoot), (Oh.hydrateRoot = jp.hydrateRoot);
function Ta() {
  return (
    (Ta = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ta.apply(this, arguments)
  );
}
var hi;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(hi || (hi = {}));
const Fp = "popstate";
function Z6(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return Yd("", { pathname: o, search: s, hash: a }, (i.state && i.state.usr) || null, (i.state && i.state.key) || "default");
  }
  function n(r, i) {
    return typeof i == "string" ? i : C3(i);
  }
  return X6(t, n, null, e);
}
function Yt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function k1(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Q6() {
  return Math.random().toString(36).substr(2, 8);
}
function Up(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Yd(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ta({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? vs(t) : t, { state: n, key: (t && t.key) || r || Q6() })
  );
}
function C3(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function vs(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function X6(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = hi.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(Ta({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = hi.Pop;
    let P = c(),
      y = P == null ? null : P - u;
    (u = P), l && l({ action: a, location: v.location, delta: y });
  }
  function h(P, y) {
    a = hi.Push;
    let w = Yd(v.location, P, y);
    n && n(w, P), (u = c() + 1);
    let x = Up(w, u),
      T = v.createHref(w);
    try {
      s.pushState(x, "", T);
    } catch {
      i.location.assign(T);
    }
    o && l && l({ action: a, location: v.location, delta: 1 });
  }
  function p(P, y) {
    a = hi.Replace;
    let w = Yd(v.location, P, y);
    n && n(w, P), (u = c());
    let x = Up(w, u),
      T = v.createHref(w);
    s.replaceState(x, "", T), o && l && l({ action: a, location: v.location, delta: 0 });
  }
  function g(P) {
    let y = i.location.origin !== "null" ? i.location.origin : i.location.href,
      w = typeof P == "string" ? P : C3(P);
    return Yt(y, "No window.location.(origin|href) available to create URL for href: " + w), new URL(w, y);
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(P) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Fp, f),
        (l = P),
        () => {
          i.removeEventListener(Fp, f), (l = null);
        }
      );
    },
    createHref(P) {
      return t(i, P);
    },
    createURL: g,
    encodeLocation(P) {
      let y = g(P);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: h,
    replace: p,
    go(P) {
      return s.go(P);
    },
  };
  return v;
}
var zp;
(function (e) {
  (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(zp || (zp = {}));
function J6(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? vs(t) : t,
    i = E3(r.pathname || "/", n);
  if (i == null) return null;
  let o = S3(e);
  e8(o);
  let s = null;
  for (let a = 0; s == null && a < o.length; ++a) s = u8(o[a], d8(i));
  return s;
}
function S3(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, a) => {
    let l = { relativePath: a === void 0 ? o.path || "" : a, caseSensitive: o.caseSensitive === !0, childrenIndex: s, route: o };
    l.relativePath.startsWith("/") &&
      (Yt(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = ro([r, l.relativePath]),
      c = n.concat(l);
    o.children &&
      o.children.length > 0 &&
      (Yt(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), S3(o.children, t, c, u)),
      !(o.path == null && !o.index) && t.push({ path: u, score: a8(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else for (let l of b3(o.path)) i(o, s, l);
    }),
    t
  );
}
function b3(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = b3(r.join("/")),
    a = [];
  return a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))), i && a.push(...s), a.map((l) => (e.startsWith("/") && l === "" ? "/" : l));
}
function e8(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : l8(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const t8 = /^:\w+$/,
  n8 = 3,
  r8 = 2,
  i8 = 1,
  o8 = 10,
  s8 = -2,
  Wp = (e) => e === "*";
function a8(e, t) {
  let n = e.split("/"),
    r = n.length;
  return n.some(Wp) && (r += s8), t && (r += r8), n.filter((i) => !Wp(i)).reduce((i, o) => i + (t8.test(o) ? n8 : o === "" ? i8 : o8), r);
}
function l8(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function u8(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let s = 0; s < n.length; ++s) {
    let a = n[s],
      l = s === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = c8({ path: a.relativePath, caseSensitive: a.caseSensitive, end: l }, u);
    if (!c) return null;
    Object.assign(r, c.params);
    let f = a.route;
    o.push({ params: r, pathname: ro([i, c.pathname]), pathnameBase: y8(ro([i, c.pathnameBase])), route: f }), c.pathnameBase !== "/" && (i = ro([i, c.pathnameBase]));
  }
  return o;
}
function c8(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = f8(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      if (c === "*") {
        let h = a[f] || "";
        s = o.slice(0, o.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = h8(a[f] || "", c)), u;
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function f8(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    k1(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (s, a) => (r.push(a), "/([^\\/]+)"));
  return (
    e.endsWith("*") ? (r.push("*"), (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$")) : n ? (i += "\\/*$") : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function d8(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return k1(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function h8(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      k1(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' + e + '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function E3(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function p8(e, t) {
  t === void 0 && (t = "/");
  let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? vs(e) : e;
  return { pathname: n ? (n.startsWith("/") ? n : m8(n, t)) : t, search: w8(r), hash: x8(i) };
}
function m8(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function yf(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function g8(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function v8(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = vs(e))
    : ((i = Ta({}, e)),
      Yt(!i.pathname || !i.pathname.includes("?"), yf("?", "pathname", "search", i)),
      Yt(!i.pathname || !i.pathname.includes("#"), yf("#", "pathname", "hash", i)),
      Yt(!i.search || !i.search.includes("#"), yf("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    a;
  if (r || s == null) a = n;
  else {
    let f = t.length - 1;
    if (s.startsWith("..")) {
      let h = s.split("/");
      for (; h[0] === ".."; ) h.shift(), (f -= 1);
      i.pathname = h.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = p8(i, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (o || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const ro = (e) => e.join("/").replace(/\/\/+/g, "/"),
  y8 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  w8 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  x8 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function C8(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function S8(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const b8 = typeof Object.is == "function" ? Object.is : S8,
  { useState: E8, useEffect: T8, useLayoutEffect: P8, useDebugValue: _8 } = nd;
function A8(e, t, n) {
  const r = t(),
    [{ inst: i }, o] = E8({ inst: { value: r, getSnapshot: t } });
  return (
    P8(() => {
      (i.value = r), (i.getSnapshot = t), wf(i) && o({ inst: i });
    }, [e, r, t]),
    T8(
      () => (
        wf(i) && o({ inst: i }),
        e(() => {
          wf(i) && o({ inst: i });
        })
      ),
      [e]
    ),
    _8(r),
    r
  );
}
function wf(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !b8(n, r);
  } catch {
    return !0;
  }
}
function k8(e, t, n) {
  return t();
}
const L8 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  M8 = !L8,
  R8 = M8 ? k8 : A8;
"useSyncExternalStore" in nd && ((e) => e.useSyncExternalStore)(nd);
const T3 = V.createContext(null),
  P3 = V.createContext(null),
  L1 = V.createContext(null),
  yc = V.createContext(null),
  ys = V.createContext({ outlet: null, matches: [] }),
  _3 = V.createContext(null);
function Zd() {
  return (
    (Zd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zd.apply(this, arguments)
  );
}
function wc() {
  return V.useContext(yc) != null;
}
function A3() {
  return wc() || Yt(!1), V.useContext(yc).location;
}
function $M() {
  wc() || Yt(!1);
  let { basename: e, navigator: t } = V.useContext(L1),
    { matches: n } = V.useContext(ys),
    { pathname: r } = A3(),
    i = JSON.stringify(g8(n).map((a) => a.pathnameBase)),
    o = V.useRef(!1);
  return (
    V.useEffect(() => {
      o.current = !0;
    }),
    V.useCallback(
      function (a, l) {
        if ((l === void 0 && (l = {}), !o.current)) return;
        if (typeof a == "number") {
          t.go(a);
          return;
        }
        let u = v8(a, JSON.parse(i), r, l.relative === "path");
        e !== "/" && (u.pathname = u.pathname === "/" ? e : ro([e, u.pathname])), (l.replace ? t.replace : t.push)(u, l.state, l);
      },
      [e, t, i, r]
    )
  );
}
function DM() {
  let { matches: e } = V.useContext(ys),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function I8(e, t) {
  wc() || Yt(!1);
  let { navigator: n } = V.useContext(L1),
    r = V.useContext(P3),
    { matches: i } = V.useContext(ys),
    o = i[i.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let l = A3(),
    u;
  if (t) {
    var c;
    let v = typeof t == "string" ? vs(t) : t;
    a === "/" || ((c = v.pathname) != null && c.startsWith(a)) || Yt(!1), (u = v);
  } else u = l;
  let f = u.pathname || "/",
    h = a === "/" ? f : f.slice(a.length) || "/",
    p = J6(e, { pathname: h }),
    g = D8(
      p &&
        p.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, s, v.params),
            pathname: ro([a, n.encodeLocation ? n.encodeLocation(v.pathname).pathname : v.pathname]),
            pathnameBase: v.pathnameBase === "/" ? a : ro([a, n.encodeLocation ? n.encodeLocation(v.pathnameBase).pathname : v.pathnameBase]),
          })
        ),
      i,
      r || void 0
    );
  return t && g ? V.createElement(yc.Provider, { value: { location: Zd({ pathname: "/", search: "", hash: "", state: null, key: "default" }, u), navigationType: hi.Pop } }, g) : g;
}
function O8() {
  let e = F8(),
    t = C8(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return V.createElement(
    V.Fragment,
    null,
    V.createElement("h2", null, "Unexpected Application Error!"),
    V.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? V.createElement("pre", { style: i }, n) : null,
    o
  );
}
class B8 extends V.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ? { error: t.error, location: t.location } : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error
      ? V.createElement(ys.Provider, { value: this.props.routeContext }, V.createElement(_3.Provider, { value: this.state.error, children: this.props.component }))
      : this.props.children;
  }
}
function $8(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = V.useContext(T3);
  return (
    i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    V.createElement(ys.Provider, { value: t }, r)
  );
}
function D8(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    i = n == null ? void 0 : n.errors;
  if (i != null) {
    let o = r.findIndex((s) => s.route.id && (i == null ? void 0 : i[s.route.id]));
    o >= 0 || Yt(!1), (r = r.slice(0, Math.min(r.length, o + 1)));
  }
  return r.reduceRight((o, s, a) => {
    let l = s.route.id ? (i == null ? void 0 : i[s.route.id]) : null,
      u = null;
    n && (s.route.ErrorBoundary ? (u = V.createElement(s.route.ErrorBoundary, null)) : s.route.errorElement ? (u = s.route.errorElement) : (u = V.createElement(O8, null)));
    let c = t.concat(r.slice(0, a + 1)),
      f = () => {
        let h = o;
        return (
          l ? (h = u) : s.route.Component ? (h = V.createElement(s.route.Component, null)) : s.route.element && (h = s.route.element),
          V.createElement($8, { match: s, routeContext: { outlet: o, matches: c }, children: h })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || a === 0)
      ? V.createElement(B8, { location: n.location, component: u, error: l, children: f(), routeContext: { outlet: null, matches: c } })
      : f();
  }, null);
}
var Hp;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(Hp || (Hp = {}));
var Eu;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Eu || (Eu = {}));
function N8(e) {
  let t = V.useContext(P3);
  return t || Yt(!1), t;
}
function V8(e) {
  let t = V.useContext(ys);
  return t || Yt(!1), t;
}
function j8(e) {
  let t = V8(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Yt(!1), n.route.id;
}
function F8() {
  var e;
  let t = V.useContext(_3),
    n = N8(Eu.UseRouteError),
    r = j8(Eu.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function U8(e) {
  Yt(!1);
}
function z8(e) {
  let { basename: t = "/", children: n = null, location: r, navigationType: i = hi.Pop, navigator: o, static: s = !1 } = e;
  wc() && Yt(!1);
  let a = t.replace(/^\/*/, "/"),
    l = V.useMemo(() => ({ basename: a, navigator: o, static: s }), [a, o, s]);
  typeof r == "string" && (r = vs(r));
  let { pathname: u = "/", search: c = "", hash: f = "", state: h = null, key: p = "default" } = r,
    g = V.useMemo(() => {
      let v = E3(u, a);
      return v == null ? null : { location: { pathname: v, search: c, hash: f, state: h, key: p }, navigationType: i };
    }, [a, u, c, f, h, p, i]);
  return g == null ? null : V.createElement(L1.Provider, { value: l }, V.createElement(yc.Provider, { children: n, value: g }));
}
function NM(e) {
  let { children: t, location: n } = e,
    r = V.useContext(T3),
    i = r && !t ? r.router.routes : Qd(t);
  return I8(i, n);
}
var Kp;
(function (e) {
  (e[(e.pending = 0)] = "pending"), (e[(e.success = 1)] = "success"), (e[(e.error = 2)] = "error");
})(Kp || (Kp = {}));
new Promise(() => {});
function Qd(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    V.Children.forEach(e, (r, i) => {
      if (!V.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === V.Fragment) {
        n.push.apply(n, Qd(r.props.children, o));
        return;
      }
      r.type !== U8 && Yt(!1), !r.props.index || !r.props.children || Yt(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Qd(r.props.children, o)), n.push(s);
    }),
    n
  );
}
function VM(e) {
  let { basename: t, children: n, window: r } = e,
    i = V.useRef();
  i.current == null && (i.current = Z6({ window: r, v5Compat: !0 }));
  let o = i.current,
    [s, a] = V.useState({ action: o.action, location: o.location });
  return V.useLayoutEffect(() => o.listen(a), [o]), V.createElement(z8, { basename: t, children: n, location: s.location, navigationType: s.action, navigator: o });
}
var Gp;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"), (e.UseSubmitImpl = "useSubmitImpl"), (e.UseFetcher = "useFetcher");
})(Gp || (Gp = {}));
var qp;
(function (e) {
  (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(qp || (qp = {}));
var k3 = { exports: {} };
/*!
Copyright (c) 2018 Jed Watson.
Licensed under the MIT License (MIT), see
http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (o) {
          var s = typeof o;
          if (s === "string" || s === "number") r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var a = n.apply(null, o);
              a && r.push(a);
            }
          } else if (s === "object") {
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
              r.push(o.toString());
              continue;
            }
            for (var l in o) t.call(o, l) && o[l] && r.push(l);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(k3);
var W8 = k3.exports;
const Gl = po(W8),
  L3 = V.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: "never" }),
  xc = V.createContext({}),
  Cc = V.createContext(null),
  Sc = typeof document < "u",
  Tu = Sc ? V.useLayoutEffect : V.useEffect,
  M3 = V.createContext({ strict: !1 });
function H8(e, t, n, r) {
  const { visualElement: i } = V.useContext(xc),
    o = V.useContext(M3),
    s = V.useContext(Cc),
    a = V.useContext(L3).reducedMotion,
    l = V.useRef();
  (r = r || o.renderer),
    !l.current && r && (l.current = r(e, { visualState: t, parent: i, props: n, presenceContext: s, blockInitialAnimation: s ? s.initial === !1 : !1, reducedMotionConfig: a }));
  const u = l.current;
  return (
    V.useInsertionEffect(() => {
      u && u.update(n, s);
    }),
    Tu(() => {
      u && u.render();
    }),
    V.useEffect(() => {
      u && u.updateFeatures();
    }),
    (window.HandoffAppearAnimations ? Tu : V.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    u
  );
}
function Vo(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function K8(e, t, n) {
  return V.useCallback(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Vo(n) && (n.current = r));
    },
    [t]
  );
}
function Pa(e) {
  return typeof e == "string" || Array.isArray(e);
}
function bc(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const M1 = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  R1 = ["initial", ...M1];
function Ec(e) {
  return bc(e.animate) || R1.some((t) => Pa(e[t]));
}
function R3(e) {
  return !!(Ec(e) || e.variants);
}
function G8(e, t) {
  if (Ec(e)) {
    const { initial: n, animate: r } = e;
    return { initial: n === !1 || Pa(n) ? n : void 0, animate: Pa(r) ? r : void 0 };
  }
  return e.inherit !== !1 ? t : {};
}
function q8(e) {
  const { initial: t, animate: n } = G8(e, V.useContext(xc));
  return V.useMemo(() => ({ initial: t, animate: n }), [Yp(t), Yp(n)]);
}
function Yp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Zp = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  _a = {};
for (const e in Zp) _a[e] = { isEnabled: (t) => Zp[e].some((n) => !!t[n]) };
function Y8(e) {
  for (const t in e) _a[t] = { ..._a[t], ...e[t] };
}
const I1 = V.createContext({}),
  I3 = V.createContext({}),
  Z8 = Symbol.for("motionComponentSymbol");
function Q8({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
  e && Y8(e);
  function o(a, l) {
    let u;
    const c = { ...V.useContext(L3), ...a, layoutId: X8(a) },
      { isStatic: f } = c,
      h = q8(a),
      p = r(a, f);
    if (!f && Sc) {
      h.visualElement = H8(i, p, c, t);
      const g = V.useContext(I3),
        v = V.useContext(M3).strict;
      h.visualElement && (u = h.visualElement.loadFeatures(c, v, e, g));
    }
    return V.createElement(
      xc.Provider,
      { value: h },
      u && h.visualElement ? V.createElement(u, { visualElement: h.visualElement, ...c }) : null,
      n(i, a, K8(p, h.visualElement, l), p, f, h.visualElement)
    );
  }
  const s = V.forwardRef(o);
  return (s[Z8] = i), s;
}
function X8({ layoutId: e }) {
  const t = V.useContext(I1).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function J8(e) {
  function t(r, i = {}) {
    return Q8(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, { get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)) });
}
const ex = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function O1(e) {
  return typeof e != "string" || e.includes("-") ? !1 : !!(ex.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Pu = {};
function tx(e) {
  Object.assign(Pu, e);
}
const Wa = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  vo = new Set(Wa);
function O3(e, { layout: t, layoutId: n }) {
  return vo.has(e) || e.startsWith("origin") || ((t || n !== void 0) && (!!Pu[e] || e === "opacity"));
}
const Pn = (e) => !!(e && e.getVelocity),
  nx = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
  rx = Wa.length;
function ix(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, i) {
  let o = "";
  for (let s = 0; s < rx; s++) {
    const a = Wa[s];
    if (e[a] !== void 0) {
      const l = nx[a] || a;
      o += `${l}(${e[a]}) `;
    }
  }
  return t && !e.z && (o += "translateZ(0)"), (o = o.trim()), i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"), o;
}
const B3 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  $3 = B3("--"),
  Xd = B3("var(--"),
  ox = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  sx = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Ai = (e, t, n) => Math.min(Math.max(n, e), t),
  yo = { test: (e) => typeof e == "number", parse: parseFloat, transform: (e) => e },
  Qs = { ...yo, transform: (e) => Ai(0, 1, e) },
  Cl = { ...yo, default: 1 },
  Xs = (e) => Math.round(e * 1e5) / 1e5,
  Tc = /(-)?([\d]*\.?[\d])+/g,
  D3 = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  ax = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ha(e) {
  return typeof e == "string";
}
const Ka = (e) => ({ test: (t) => Ha(t) && t.endsWith(e) && t.split(" ").length === 1, parse: parseFloat, transform: (t) => `${t}${e}` }),
  ii = Ka("deg"),
  Sr = Ka("%"),
  Ae = Ka("px"),
  lx = Ka("vh"),
  ux = Ka("vw"),
  Qp = { ...Sr, parse: (e) => Sr.parse(e) / 100, transform: (e) => Sr.transform(e * 100) },
  Xp = { ...yo, transform: Math.round },
  N3 = {
    borderWidth: Ae,
    borderTopWidth: Ae,
    borderRightWidth: Ae,
    borderBottomWidth: Ae,
    borderLeftWidth: Ae,
    borderRadius: Ae,
    radius: Ae,
    borderTopLeftRadius: Ae,
    borderTopRightRadius: Ae,
    borderBottomRightRadius: Ae,
    borderBottomLeftRadius: Ae,
    width: Ae,
    maxWidth: Ae,
    height: Ae,
    maxHeight: Ae,
    size: Ae,
    top: Ae,
    right: Ae,
    bottom: Ae,
    left: Ae,
    padding: Ae,
    paddingTop: Ae,
    paddingRight: Ae,
    paddingBottom: Ae,
    paddingLeft: Ae,
    margin: Ae,
    marginTop: Ae,
    marginRight: Ae,
    marginBottom: Ae,
    marginLeft: Ae,
    rotate: ii,
    rotateX: ii,
    rotateY: ii,
    rotateZ: ii,
    scale: Cl,
    scaleX: Cl,
    scaleY: Cl,
    scaleZ: Cl,
    skew: ii,
    skewX: ii,
    skewY: ii,
    distance: Ae,
    translateX: Ae,
    translateY: Ae,
    translateZ: Ae,
    x: Ae,
    y: Ae,
    z: Ae,
    perspective: Ae,
    transformPerspective: Ae,
    opacity: Qs,
    originX: Qp,
    originY: Qp,
    originZ: Ae,
    zIndex: Xp,
    fillOpacity: Qs,
    strokeOpacity: Qs,
    numOctaves: Xp,
  };
function B1(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const h = t[f];
    if ($3(f)) {
      o[f] = h;
      continue;
    }
    const p = N3[f],
      g = sx(h, p);
    if (vo.has(f)) {
      if (((l = !0), (s[f] = g), !c)) continue;
      h !== (p.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (a[f] = g)) : (i[f] = g);
  }
  if ((t.transform || (l || r ? (i.transform = ix(e.transform, n, c, r)) : i.transform && (i.transform = "none")), u)) {
    const { originX: f = "50%", originY: h = "50%", originZ: p = 0 } = a;
    i.transformOrigin = `${f} ${h} ${p}`;
  }
}
const $1 = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function V3(e, t, n) {
  for (const r in t) !Pn(t[r]) && !O3(r, n) && (e[r] = t[r]);
}
function cx({ transformTemplate: e }, t, n) {
  return V.useMemo(() => {
    const r = $1();
    return B1(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function fx(e, t, n) {
  const r = e.style || {},
    i = {};
  return V3(i, r, e), Object.assign(i, cx(e, t, n)), e.transformValues ? e.transformValues(i) : i;
}
function dx(e, t, n) {
  const r = {},
    i = fx(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1), (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"), (i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const hx = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function _u(e) {
  return e.startsWith("while") || (e.startsWith("drag") && e !== "draggable") || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || hx.has(e);
}
let j3 = (e) => !_u(e);
function px(e) {
  e && (j3 = (t) => (t.startsWith("on") ? !_u(t) : e(t)));
}
try {
  px(require("@emotion/is-prop-valid").default);
} catch {}
function mx(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") || ((j3(i) || (n === !0 && _u(i)) || (!t && !_u(i)) || (e.draggable && i.startsWith("onDrag"))) && (r[i] = e[i]));
  return r;
}
function Jp(e, t, n) {
  return typeof e == "string" ? e : Ae.transform(t + n * e);
}
function gx(e, t, n) {
  const r = Jp(t, e.x, e.width),
    i = Jp(n, e.y, e.height);
  return `${r} ${i}`;
}
const vx = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  yx = { offset: "strokeDashoffset", array: "strokeDasharray" };
function wx(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? vx : yx;
  e[o.offset] = Ae.transform(-r);
  const s = Ae.transform(t),
    a = Ae.transform(n);
  e[o.array] = `${s} ${a}`;
}
function D1(e, { attrX: t, attrY: n, attrScale: r, originX: i, originY: o, pathLength: s, pathSpacing: a = 1, pathOffset: l = 0, ...u }, c, f, h) {
  if ((B1(e, u, c, h), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: p, style: g, dimensions: v } = e;
  p.transform && (v && (g.transform = p.transform), delete p.transform),
    v && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = gx(v, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)),
    t !== void 0 && (p.x = t),
    n !== void 0 && (p.y = n),
    r !== void 0 && (p.scale = r),
    s !== void 0 && wx(p, s, a, l, !1);
}
const F3 = () => ({ ...$1(), attrs: {} }),
  N1 = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function xx(e, t, n, r) {
  const i = V.useMemo(() => {
    const o = F3();
    return D1(o, t, { enableHardwareAcceleration: !1 }, N1(r), e.transformTemplate), { ...o.attrs, style: { ...o.style } };
  }, [t]);
  if (e.style) {
    const o = {};
    V3(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function Cx(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (O1(n) ? xx : dx)(r, o, s, n),
      c = { ...mx(r, typeof n == "string", e), ...l, ref: i },
      { children: f } = r,
      h = V.useMemo(() => (Pn(f) ? f.get() : f), [f]);
    return V.createElement(n, { ...c, children: h });
  };
}
const V1 = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function U3(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const z3 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function W3(e, t, n, r) {
  U3(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(z3.has(i) ? i : V1(i), t.attrs[i]);
}
function j1(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n) (Pn(n[i]) || (t.style && Pn(t.style[i])) || O3(i, e)) && (r[i] = n[i]);
  return r;
}
function H3(e, t) {
  const n = j1(e, t);
  for (const r in e)
    if (Pn(e[r]) || Pn(t[r])) {
      const i = Wa.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      n[i] = e[r];
    }
  return n;
}
function F1(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function K3(e) {
  const t = V.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Au = (e) => Array.isArray(e),
  Sx = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  bx = (e) => (Au(e) ? e[e.length - 1] || 0 : e);
function ql(e) {
  const t = Pn(e) ? e.get() : e;
  return Sx(t) ? t.toValue() : t;
}
function Ex({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, o) {
  const s = { latestValues: Tx(r, i, o, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const G3 = (e) => (t, n) => {
  const r = V.useContext(xc),
    i = V.useContext(Cc),
    o = () => Ex(e, t, r, i);
  return n ? o() : K3(o);
};
function Tx(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const h in o) i[h] = ql(o[h]);
  let { initial: s, animate: a } = e;
  const l = Ec(e),
    u = R3(e);
  t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? a : s;
  return (
    f &&
      typeof f != "boolean" &&
      !bc(f) &&
      (Array.isArray(f) ? f : [f]).forEach((p) => {
        const g = F1(e, p);
        if (!g) return;
        const { transitionEnd: v, transition: P, ...y } = g;
        for (const w in y) {
          let x = y[w];
          if (Array.isArray(x)) {
            const T = c ? x.length - 1 : 0;
            x = x[T];
          }
          x !== null && (i[w] = x);
        }
        for (const w in v) i[w] = v[w];
      }),
    i
  );
}
const Px = {
    useVisualState: G3({
      scrapeMotionValuesFromProps: H3,
      createRenderState: F3,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        try {
          n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        D1(n, r, { enableHardwareAcceleration: !1 }, N1(t.tagName), e.transformTemplate), W3(t, n);
      },
    }),
  },
  _x = { useVisualState: G3({ scrapeMotionValuesFromProps: j1, createRenderState: $1 }) };
function Ax(e, { forwardMotionProps: t = !1 }, n, r) {
  return { ...(O1(e) ? Px : _x), preloadedFeatures: n, useRender: Cx(t), createVisualElement: r, Component: e };
}
function Nr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const q3 = (e) => (e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1);
function Pc(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const kx = (e) => (t) => q3(t) && e(t, Pc(t));
function Fr(e, t, n, r) {
  return Nr(e, t, kx(n), r);
}
const Lx = (e, t) => (n) => t(e(n)),
  bi = (...e) => e.reduce(Lx);
function Y3(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const em = Y3("dragHorizontal"),
  tm = Y3("dragVertical");
function Z3(e) {
  let t = !1;
  if (e === "y") t = tm();
  else if (e === "x") t = em();
  else {
    const n = em(),
      r = tm();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Q3() {
  const e = Z3(!0);
  return e ? (e(), !1) : !0;
}
class Ni {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
const Vt = (e) => e;
function Mx(e) {
  let t = [],
    n = [],
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const f = c && i,
          h = f ? t : n;
        return u && s.add(l), h.indexOf(l) === -1 && (h.push(l), f && i && (r = t.length)), l;
      },
      cancel: (l) => {
        const u = n.indexOf(l);
        u !== -1 && n.splice(u, 1), s.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
          for (let u = 0; u < r; u++) {
            const c = t[u];
            c(l), s.has(c) && (a.schedule(c), e());
          }
        (i = !1), o && ((o = !1), a.process(l));
      },
    };
  return a;
}
const Sl = ["prepare", "read", "update", "preRender", "render", "postRender"],
  Rx = 40;
function Ix(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = Sl.reduce((f, h) => ((f[h] = Mx(() => (n = !0))), f), {}),
    s = (f) => o[f].process(i),
    a = (f) => {
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, Rx), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        Sl.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || e(a);
    };
  return {
    schedule: Sl.reduce((f, h) => {
      const p = o[h];
      return (f[h] = (g, v = !1, P = !1) => (n || l(), p.schedule(g, v, P))), f;
    }, {}),
    cancel: (f) => Sl.forEach((h) => o[h].cancel(f)),
    state: i,
    steps: o,
  };
}
const { schedule: xt, cancel: Yr, state: ln, steps: xf } = Ix(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Vt, !0);
function nm(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.type === "touch" || Q3()) return;
      const a = e.getProps();
      e.animationState && a.whileHover && e.animationState.setActive("whileHover", t), a[r] && xt.update(() => a[r](o, s));
    };
  return Fr(e.current, n, i, { passive: !e.getProps()[r] });
}
class Ox extends Ni {
  mount() {
    this.unmount = bi(nm(this.node, !0), nm(this.node, !1));
  }
  unmount() {}
}
class Bx extends Ni {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = bi(
      Nr(this.node.current, "focus", () => this.onFocus()),
      Nr(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const X3 = (e, t) => (t ? (e === t ? !0 : X3(e, t.parentElement)) : !1);
function Cf(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Pc(n));
}
class $x extends Ni {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Vt),
      (this.removeEndListeners = Vt),
      (this.removeAccessibleListeners = Vt),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          o = Fr(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              xt.update(() => {
                X3(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = Fr(window, "pointercancel", (a, l) => this.cancelPress(a, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
        (this.removeEndListeners = bi(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Cf("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && xt.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Nr(this.node.current, "keyup", s)),
              Cf("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Nr(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Cf("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = Nr(this.node.current, "blur", r);
        this.removeAccessibleListeners = bi(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && xt.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(), (this.isPressing = !1), this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Q3()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && xt.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Fr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }),
      r = Nr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = bi(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Jd = new WeakMap(),
  Sf = new WeakMap(),
  Dx = (e) => {
    const t = Jd.get(e.target);
    t && t(e);
  },
  Nx = (e) => {
    e.forEach(Dx);
  };
function Vx({ root: e, ...t }) {
  const n = e || document;
  Sf.has(n) || Sf.set(n, {});
  const r = Sf.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Nx, { root: e, ...t })), r[i];
}
function jx(e, t, n) {
  const r = Vx(t);
  return (
    Jd.set(e, n),
    r.observe(e),
    () => {
      Jd.delete(e), r.unobserve(e);
    }
  );
}
const Fx = { some: 0, all: 1 };
class Ux extends Ni {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = { root: n ? n.current : void 0, rootMargin: r, threshold: typeof i == "number" ? i : Fx[i] },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (this.isInView === u || ((this.isInView = u), o && !u && this.hasEnteredView)) return;
        u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          h = u ? c : f;
        h && h(l);
      };
    return jx(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(zx(t, n)) && this.startObserver();
  }
  unmount() {}
}
function zx({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Wx = { inView: { Feature: Ux }, tap: { Feature: $x }, focus: { Feature: Bx }, hover: { Feature: Ox } };
function J3(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Hx(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function Kx(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function _c(e, t, n) {
  const r = e.getProps();
  return F1(r, t, n !== void 0 ? n : r.custom, Hx(e), Kx(e));
}
const Gx = "framerAppearId",
  qx = "data-" + V1(Gx);
let Yx = Vt,
  U1 = Vt;
const Ei = (e) => e * 1e3,
  Ur = (e) => e / 1e3,
  Zx = { current: !1 },
  ev = (e) => Array.isArray(e) && typeof e[0] == "number";
function tv(e) {
  return !!(!e || (typeof e == "string" && nv[e]) || ev(e) || (Array.isArray(e) && e.every(tv)));
}
const Vs = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  nv = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Vs([0, 0.65, 0.55, 1]),
    circOut: Vs([0.55, 0, 1, 0.45]),
    backIn: Vs([0.31, 0.01, 0.66, -0.59]),
    backOut: Vs([0.33, 1.53, 0.69, 0.99]),
  };
function rv(e) {
  if (e) return ev(e) ? Vs(e) : Array.isArray(e) ? e.map(rv) : nv[e];
}
function Qx(e, t, n, { delay: r = 0, duration: i, repeat: o = 0, repeatType: s = "loop", ease: a, times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = rv(a);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, { delay: r, duration: i, easing: Array.isArray(c) ? "linear" : c, fill: "both", iterations: o + 1, direction: s === "reverse" ? "alternate" : "normal" })
  );
}
function Xx(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const iv = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Jx = 1e-7,
  e9 = 12;
function t9(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = iv(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > Jx && ++a < e9);
  return s;
}
function Ga(e, t, n, r) {
  if (e === t && n === r) return Vt;
  const i = (o) => t9(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : iv(i(o), t, r));
}
const n9 = Ga(0.42, 0, 1, 1),
  r9 = Ga(0, 0, 0.58, 1),
  ov = Ga(0.42, 0, 0.58, 1),
  i9 = (e) => Array.isArray(e) && typeof e[0] != "number",
  sv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  av = (e) => (t) => 1 - e(1 - t),
  lv = (e) => 1 - Math.sin(Math.acos(e)),
  z1 = av(lv),
  o9 = sv(z1),
  uv = Ga(0.33, 1.53, 0.69, 0.99),
  W1 = av(uv),
  s9 = sv(W1),
  a9 = (e) => ((e *= 2) < 1 ? 0.5 * W1(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  l9 = { linear: Vt, easeIn: n9, easeInOut: ov, easeOut: r9, circIn: lv, circInOut: o9, circOut: z1, backIn: W1, backInOut: s9, backOut: uv, anticipate: a9 },
  rm = (e) => {
    if (Array.isArray(e)) {
      U1(e.length === 4);
      const [t, n, r, i] = e;
      return Ga(t, n, r, i);
    } else if (typeof e == "string") return l9[e];
    return e;
  },
  H1 = (e, t) => (n) => !!((Ha(n) && ax.test(n) && n.startsWith(e)) || (t && Object.prototype.hasOwnProperty.call(n, t))),
  cv = (e, t, n) => (r) => {
    if (!Ha(r)) return r;
    const [i, o, s, a] = r.match(Tc);
    return { [e]: parseFloat(i), [t]: parseFloat(o), [n]: parseFloat(s), alpha: a !== void 0 ? parseFloat(a) : 1 };
  },
  u9 = (e) => Ai(0, 255, e),
  bf = { ...yo, transform: (e) => Math.round(u9(e)) },
  Ji = {
    test: H1("rgb", "red"),
    parse: cv("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + bf.transform(e) + ", " + bf.transform(t) + ", " + bf.transform(n) + ", " + Xs(Qs.transform(r)) + ")",
  };
function c9(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)), (n = e.substring(3, 5)), (r = e.substring(5, 7)), (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)), (n = e.substring(2, 3)), (r = e.substring(3, 4)), (i = e.substring(4, 5)), (t += t), (n += n), (r += r), (i += i)),
    { red: parseInt(t, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: i ? parseInt(i, 16) / 255 : 1 }
  );
}
const e0 = { test: H1("#"), parse: c9, transform: Ji.transform },
  jo = {
    test: H1("hsl", "hue"),
    parse: cv("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" + Math.round(e) + ", " + Sr.transform(Xs(t)) + ", " + Sr.transform(Xs(n)) + ", " + Xs(Qs.transform(r)) + ")",
  },
  pn = {
    test: (e) => Ji.test(e) || e0.test(e) || jo.test(e),
    parse: (e) => (Ji.test(e) ? Ji.parse(e) : jo.test(e) ? jo.parse(e) : e0.parse(e)),
    transform: (e) => (Ha(e) ? e : e.hasOwnProperty("red") ? Ji.transform(e) : jo.transform(e)),
  },
  Tt = (e, t, n) => -n * e + n * t + e;
function Ef(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function f9({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Ef(l, a, e + 1 / 3)), (o = Ef(l, a, e)), (s = Ef(l, a, e - 1 / 3));
  }
  return { red: Math.round(i * 255), green: Math.round(o * 255), blue: Math.round(s * 255), alpha: r };
}
const Tf = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  d9 = [e0, Ji, jo],
  h9 = (e) => d9.find((t) => t.test(e));
function im(e) {
  const t = h9(e);
  let n = t.parse(e);
  return t === jo && (n = f9(n)), n;
}
const fv = (e, t) => {
  const n = im(e),
    r = im(t),
    i = { ...n };
  return (o) => ((i.red = Tf(n.red, r.red, o)), (i.green = Tf(n.green, r.green, o)), (i.blue = Tf(n.blue, r.blue, o)), (i.alpha = Tt(n.alpha, r.alpha, o)), Ji.transform(i));
};
function p9(e) {
  var t, n;
  return isNaN(e) && Ha(e) && (((t = e.match(Tc)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(D3)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const dv = { regex: ox, countKey: "Vars", token: "${v}", parse: Vt },
  hv = { regex: D3, countKey: "Colors", token: "${c}", parse: pn.parse },
  pv = { regex: Tc, countKey: "Numbers", token: "${n}", parse: yo.parse };
function Pf(e, { regex: t, countKey: n, token: r, parse: i }) {
  const o = e.tokenised.match(t);
  o && ((e["num" + n] = o.length), (e.tokenised = e.tokenised.replace(t, r)), e.values.push(...o.map(i)));
}
function ku(e) {
  const t = e.toString(),
    n = { value: t, tokenised: t, values: [], numVars: 0, numColors: 0, numNumbers: 0 };
  return n.value.includes("var(--") && Pf(n, dv), Pf(n, hv), Pf(n, pv), n;
}
function mv(e) {
  return ku(e).values;
}
function gv(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = ku(e),
    o = t.length;
  return (s) => {
    let a = i;
    for (let l = 0; l < o; l++) l < r ? (a = a.replace(dv.token, s[l])) : l < r + n ? (a = a.replace(hv.token, pn.transform(s[l]))) : (a = a.replace(pv.token, Xs(s[l])));
    return a;
  };
}
const m9 = (e) => (typeof e == "number" ? 0 : e);
function g9(e) {
  const t = mv(e);
  return gv(e)(t.map(m9));
}
const ki = { test: p9, parse: mv, createTransformer: gv, getAnimatableNone: g9 },
  vv = (e, t) => (n) => `${n > 0 ? t : e}`;
function yv(e, t) {
  return typeof e == "number" ? (n) => Tt(e, t, n) : pn.test(e) ? fv(e, t) : e.startsWith("var(") ? vv(e, t) : xv(e, t);
}
const wv = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, s) => yv(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n;
    };
  },
  v9 = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = yv(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  xv = (e, t) => {
    const n = ki.createTransformer(t),
      r = ku(e),
      i = ku(t);
    return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? bi(wv(r.values, i.values), n) : vv(e, t);
  },
  Aa = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  om = (e, t) => (n) => Tt(e, t, n);
function y9(e) {
  return typeof e == "number" ? om : typeof e == "string" ? (pn.test(e) ? fv : xv) : Array.isArray(e) ? wv : typeof e == "object" ? v9 : om;
}
function w9(e, t, n) {
  const r = [],
    i = n || y9(e[0]),
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Vt : t;
      a = bi(l, a);
    }
    r.push(a);
  }
  return r;
}
function Cv(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((U1(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = w9(t, r, i),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Aa(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => l(Ai(e[0], e[o - 1], u)) : l;
}
function x9(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Aa(0, t, r);
    e.push(Tt(n, 1, i));
  }
}
function C9(e) {
  const t = [0];
  return x9(t, e.length - 1), t;
}
function S9(e, t) {
  return e.map((n) => n * t);
}
function b9(e, t) {
  return e.map(() => t || ov).splice(0, e.length - 1);
}
function Lu({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = i9(r) ? r.map(rm) : rm(r),
    o = { done: !1, value: t[0] },
    s = S9(n && n.length === t.length ? n : C9(t), e),
    a = Cv(s, t, { ease: Array.isArray(i) ? i : b9(t, i) });
  return { calculatedDuration: e, next: (l) => ((o.value = a(l)), (o.done = l >= e), o) };
}
function Sv(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const E9 = 5;
function bv(e, t, n) {
  const r = Math.max(t - E9, 0);
  return Sv(n - e(r), t - r);
}
const _f = 0.001,
  T9 = 0.01,
  sm = 10,
  P9 = 0.05,
  _9 = 1;
function A9({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let i, o;
  Yx(e <= Ei(sm));
  let s = 1 - t;
  (s = Ai(P9, _9, s)),
    (e = Ai(T9, sm, Ur(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            h = c - n,
            p = t0(u, s),
            g = Math.exp(-f);
          return _f - (h / p) * g;
        }),
        (o = (u) => {
          const f = u * s * e,
            h = f * n + n,
            p = Math.pow(s, 2) * Math.pow(u, 2) * e,
            g = Math.exp(-f),
            v = t0(Math.pow(u, 2), s);
          return ((-i(u) + _f > 0 ? -1 : 1) * ((h - p) * g)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -_f + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    l = L9(i, o, a);
  if (((e = Ei(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const k9 = 12;
function L9(e, t, n) {
  let r = n;
  for (let i = 1; i < k9; i++) r = r - e(r) / t(r);
  return r;
}
function t0(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const M9 = ["duration", "bounce"],
  R9 = ["stiffness", "damping", "mass"];
function am(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function I9(e) {
  let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
  if (!am(e, R9) && am(e, M9)) {
    const n = A9(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Ev({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    { stiffness: a, damping: l, mass: u, velocity: c, duration: f, isResolvedFromDuration: h } = I9(r),
    p = c ? -Ur(c) : 0,
    g = l / (2 * Math.sqrt(a * u)),
    v = o - i,
    P = Ur(Math.sqrt(a / u)),
    y = Math.abs(v) < 5;
  n || (n = y ? 0.01 : 2), t || (t = y ? 0.005 : 0.5);
  let w;
  if (g < 1) {
    const x = t0(P, g);
    w = (T) => {
      const _ = Math.exp(-g * P * T);
      return o - _ * (((p + g * P * v) / x) * Math.sin(x * T) + v * Math.cos(x * T));
    };
  } else if (g === 1) w = (x) => o - Math.exp(-P * x) * (v + (p + P * v) * x);
  else {
    const x = P * Math.sqrt(g * g - 1);
    w = (T) => {
      const _ = Math.exp(-g * P * T),
        O = Math.min(x * T, 300);
      return o - (_ * ((p + g * P * v) * Math.sinh(O) + x * v * Math.cosh(O))) / x;
    };
  }
  return {
    calculatedDuration: (h && f) || null,
    next: (x) => {
      const T = w(x);
      if (h) s.done = x >= f;
      else {
        let _ = p;
        x !== 0 && (g < 1 ? (_ = bv(w, x, T)) : (_ = 0));
        const O = Math.abs(_) <= n,
          B = Math.abs(o - T) <= t;
        s.done = O && B;
      }
      return (s.value = s.done ? o : T), s;
    },
  };
}
function lm({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    p = (A) => (a !== void 0 && A < a) || (l !== void 0 && A > l),
    g = (A) => (a === void 0 ? l : l === void 0 || Math.abs(a - A) < Math.abs(l - A) ? a : l);
  let v = n * t;
  const P = f + v,
    y = s === void 0 ? P : s(P);
  y !== P && (v = y - f);
  const w = (A) => -v * Math.exp(-A / r),
    x = (A) => y + w(A),
    T = (A) => {
      const k = w(A),
        I = x(A);
      (h.done = Math.abs(k) <= u), (h.value = h.done ? y : I);
    };
  let _, O;
  const B = (A) => {
    p(h.value) && ((_ = A), (O = Ev({ keyframes: [h.value, g(h.value)], velocity: bv(x, A, h.value), damping: i, stiffness: o, restDelta: u, restSpeed: c })));
  };
  return (
    B(0),
    {
      calculatedDuration: null,
      next: (A) => {
        let k = !1;
        return !O && _ === void 0 && ((k = !0), T(A), B(A)), _ !== void 0 && A > _ ? O.next(A - _) : (!k && T(A), h);
      },
    }
  );
}
const O9 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return { start: () => xt.update(t, !0), stop: () => Yr(t), now: () => (ln.isProcessing ? ln.timestamp : performance.now()) };
  },
  um = 2e4;
function cm(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < um; ) (t += n), (r = e.next(t));
  return t >= um ? 1 / 0 : t;
}
const B9 = { decay: lm, inertia: lm, tween: Lu, keyframes: Lu, spring: Ev };
function Mu({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = O9,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...h
}) {
  let p = 1,
    g = !1,
    v,
    P;
  const y = () => {
    P = new Promise((pe) => {
      v = pe;
    });
  };
  y();
  let w;
  const x = B9[i] || Lu;
  let T;
  x !== Lu && typeof r[0] != "number" && ((T = Cv([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const _ = x({ ...h, keyframes: r });
  let O;
  a === "mirror" && (O = x({ ...h, keyframes: [...r].reverse(), velocity: -(h.velocity || 0) }));
  let B = "idle",
    A = null,
    k = null,
    I = null;
  _.calculatedDuration === null && o && (_.calculatedDuration = cm(_));
  const { calculatedDuration: M } = _;
  let L = 1 / 0,
    N = 1 / 0;
  M !== null && ((L = M + s), (N = L * (o + 1) - s));
  let j = 0;
  const W = (pe) => {
      if (k === null) return;
      p > 0 && (k = Math.min(k, pe)), p < 0 && (k = Math.min(pe - N / p, k)), A !== null ? (j = A) : (j = Math.round(pe - k) * p);
      const Oe = j - t * (p >= 0 ? 1 : -1),
        tt = p >= 0 ? Oe < 0 : Oe > N;
      (j = Math.max(Oe, 0)), B === "finished" && A === null && (j = N);
      let at = j,
        Pe = _;
      if (o) {
        const K = j / L;
        let U = Math.floor(K),
          q = K % 1;
        !q && K >= 1 && (q = 1), q === 1 && U--, (U = Math.min(U, o + 1));
        const Z = !!(U % 2);
        Z && (a === "reverse" ? ((q = 1 - q), s && (q -= s / L)) : a === "mirror" && (Pe = O));
        let ae = Ai(0, 1, q);
        j > N && (ae = a === "reverse" && Z ? 1 : 0), (at = ae * L);
      }
      const Ye = tt ? { done: !1, value: r[0] } : Pe.next(at);
      T && (Ye.value = T(Ye.value));
      let { done: tn } = Ye;
      !tt && M !== null && (tn = p >= 0 ? j >= N : j <= 0);
      const G = A === null && (B === "finished" || (B === "running" && tn));
      return f && f(Ye.value), G && J(), Ye;
    },
    oe = () => {
      w && w.stop(), (w = void 0);
    },
    ye = () => {
      (B = "idle"), oe(), v(), y(), (k = I = null);
    },
    J = () => {
      (B = "finished"), c && c(), oe(), v();
    },
    ne = () => {
      if (g) return;
      w || (w = n(W));
      const pe = w.now();
      l && l(), A !== null ? (k = pe - A) : (!k || B === "finished") && (k = pe), B === "finished" && y(), (I = k), (A = null), (B = "running"), w.start();
    };
  e && ne();
  const se = {
    then(pe, Oe) {
      return P.then(pe, Oe);
    },
    get time() {
      return Ur(j);
    },
    set time(pe) {
      (pe = Ei(pe)), (j = pe), A !== null || !w || p === 0 ? (A = pe) : (k = w.now() - pe / p);
    },
    get duration() {
      const pe = _.calculatedDuration === null ? cm(_) : _.calculatedDuration;
      return Ur(pe);
    },
    get speed() {
      return p;
    },
    set speed(pe) {
      pe === p || !w || ((p = pe), (se.time = Ur(j)));
    },
    get state() {
      return B;
    },
    play: ne,
    pause: () => {
      (B = "paused"), (A = j);
    },
    stop: () => {
      (g = !0), B !== "idle" && ((B = "idle"), u && u(), ye());
    },
    cancel: () => {
      I !== null && W(I), ye();
    },
    complete: () => {
      B = "finished";
    },
    sample: (pe) => ((k = 0), W(pe)),
  };
  return se;
}
function $9(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const D9 = $9(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  N9 = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
  bl = 10,
  V9 = 2e4,
  j9 = (e, t) => t.type === "spring" || e === "backgroundColor" || !tv(t.ease);
function F9(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (!(D9() && N9.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia")) return !1;
  let s = !1,
    a,
    l;
  const u = () => {
    l = new Promise((y) => {
      a = y;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: h, times: p } = i;
  if (j9(t, i)) {
    const y = Mu({ ...i, repeat: 0, delay: 0 });
    let w = { done: !1, value: c[0] };
    const x = [];
    let T = 0;
    for (; !w.done && T < V9; ) (w = y.sample(T)), x.push(w.value), (T += bl);
    (p = void 0), (c = x), (f = T - bl), (h = "linear");
  }
  const g = Qx(e.owner.current, t, c, { ...i, duration: f, ease: h, times: p }),
    v = () => g.cancel(),
    P = () => {
      xt.update(v), a(), u();
    };
  return (
    (g.onfinish = () => {
      e.set(Xx(c, i)), r && r(), P();
    }),
    {
      then(y, w) {
        return l.then(y, w);
      },
      get timeline() {
        return g.timeline;
      },
      set timeline(y) {
        (g.timeline = y), (g.onfinish = null);
      },
      get time() {
        return Ur(g.currentTime || 0);
      },
      set time(y) {
        g.currentTime = Ei(y);
      },
      get speed() {
        return g.playbackRate;
      },
      set speed(y) {
        g.playbackRate = y;
      },
      get duration() {
        return Ur(f);
      },
      play: () => {
        s || (g.play(), Yr(v));
      },
      pause: () => g.pause(),
      stop: () => {
        if (((s = !0), g.playState === "idle")) return;
        const { currentTime: y } = g;
        if (y) {
          const w = Mu({ ...i, autoplay: !1 });
          e.setWithVelocity(w.sample(y - bl).value, w.sample(y).value, bl);
        }
        P();
      },
      complete: () => g.finish(),
      cancel: P,
    }
  );
}
function U9({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]), r && r(), { time: 0, speed: 1, duration: 0, play: Vt, pause: Vt, stop: Vt, then: (o) => (o(), Promise.resolve()), cancel: Vt, complete: Vt }
  );
  return t ? Mu({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i }) : i();
}
const z9 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  W9 = (e) => ({ type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }),
  H9 = { type: "keyframes", duration: 0.8 },
  K9 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  G9 = (e, { keyframes: t }) => (t.length > 2 ? H9 : vo.has(e) ? (e.startsWith("scale") ? W9(t[1]) : z9) : K9),
  n0 = (e, t) => (e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || (typeof t == "string" && (ki.test(t) || t === "0") && !t.startsWith("url(")))),
  q9 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Y9(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Tc) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = q9.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Z9 = /([a-z-]*)\(.*?\)/g,
  r0 = {
    ...ki,
    getAnimatableNone: (e) => {
      const t = e.match(Z9);
      return t ? t.map(Y9).join(" ") : e;
    },
  },
  Q9 = {
    ...N3,
    color: pn,
    backgroundColor: pn,
    outlineColor: pn,
    fill: pn,
    stroke: pn,
    borderColor: pn,
    borderTopColor: pn,
    borderRightColor: pn,
    borderBottomColor: pn,
    borderLeftColor: pn,
    filter: r0,
    WebkitFilter: r0,
  },
  K1 = (e) => Q9[e];
function Tv(e, t) {
  let n = K1(e);
  return n !== r0 && (n = ki), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Pv = (e) => /^0[^.\s]+$/.test(e);
function X9(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || Pv(e);
}
function J9(e, t, n, r) {
  const i = n0(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let a;
  const l = [];
  for (let u = 0; u < o.length; u++)
    o[u] === null && (o[u] = u === 0 ? s : o[u - 1]), X9(o[u]) && l.push(u), typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (a = o[u]);
  if (i && l.length && a)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      o[c] = Tv(t, a);
    }
  return o;
}
function e7({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function _v(e, t) {
  return e[t] || e.default || e;
}
const G1 =
  (e, t, n, r = {}) =>
  (i) => {
    const o = _v(r, e) || {},
      s = o.delay || r.delay || 0;
    let { elapsed: a = 0 } = r;
    a = a - Ei(s);
    const l = J9(t, e, n, o),
      u = l[0],
      c = l[l.length - 1],
      f = n0(e, u),
      h = n0(e, c);
    let p = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -a,
      onUpdate: (g) => {
        t.set(g), o.onUpdate && o.onUpdate(g);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      (e7(o) || (p = { ...p, ...G9(e, p) }),
      p.duration && (p.duration = Ei(p.duration)),
      p.repeatDelay && (p.repeatDelay = Ei(p.repeatDelay)),
      !f || !h || Zx.current || o.type === !1)
    )
      return U9(p);
    if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
      const g = F9(t, e, p);
      if (g) return g;
    }
    return Mu(p);
  };
function Ru(e) {
  return !!(Pn(e) && e.add);
}
const t7 = (e) => /^\-?\d*\.?\d+$/.test(e);
function q1(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Y1(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Z1 {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return q1(this.subscriptions, t), () => Y1(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const n7 = (e) => !isNaN(parseFloat(e));
class r7 {
  constructor(t, n = {}) {
    (this.version = "10.13.0"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: o, timestamp: s } = ln;
        this.lastUpdated !== s && ((this.timeDelta = o), (this.lastUpdated = s), xt.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
          i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => xt.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated && ((this.prev = this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = n7(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Z1());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            xt.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t), (this.prev = t), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity ? Sv(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0), (this.animation = t(n)), this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ls(e, t) {
  return new r7(e, t);
}
const Av = (e) => (t) => t.test(e),
  i7 = { test: (e) => e === "auto", parse: (e) => e },
  kv = [yo, Ae, Sr, ii, ux, lx, i7],
  Rs = (e) => kv.find(Av(e)),
  o7 = [...kv, pn, ki],
  s7 = (e) => o7.find(Av(e));
function a7(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ls(n));
}
function l7(e, t) {
  const n = _c(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = bx(o[s]);
    a7(e, s, a);
  }
}
function u7(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((a) => !e.hasValue(a)),
    s = o.length;
  if (s)
    for (let a = 0; a < s; a++) {
      const l = o[a],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null && (c = (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && i !== void 0 ? i : t[l]),
        c != null &&
          (typeof c == "string" && (t7(c) || Pv(c)) ? (c = parseFloat(c)) : !s7(c) && ki.test(u) && (c = Tv(l, u)),
          e.addValue(l, ls(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function c7(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function f7(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = c7(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function d7({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Lv(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: o = e.getDefaultTransition(), transitionEnd: s, ...a } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const h = e.getValue(f),
      p = a[f];
    if (!h || p === void 0 || (c && d7(c, f))) continue;
    const g = { delay: n, elapsed: 0, ...o };
    if (window.HandoffAppearAnimations && !h.hasAnimated) {
      const P = e.getProps()[qx];
      P && (g.elapsed = window.HandoffAppearAnimations(P, f, h, xt));
    }
    h.start(G1(f, h, p, e.shouldReduceMotion && vo.has(f) ? { type: !1 } : g));
    const v = h.animation;
    Ru(l) && (l.add(f), v.then(() => l.remove(f))), u.push(v);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && l7(e, s);
      }),
    u
  );
}
function i0(e, t, n = {}) {
  const r = _c(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Lv(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const { delayChildren: u = 0, staggerChildren: c, staggerDirection: f } = i;
            return h7(e, t, u + l, c, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [o, s] : [s, o];
    return l().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function h7(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(p7)
      .forEach((u, c) => {
        u.notify("AnimationStart", t), s.push(i0(u, t, { ...o, delay: n + l(c) }).then(() => u.notify("AnimationComplete", t)));
      }),
    Promise.all(s)
  );
}
function p7(e, t) {
  return e.sortNodePosition(t);
}
function m7(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => i0(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = i0(e, t, n);
  else {
    const i = typeof t == "function" ? _c(e, t, n.custom) : t;
    r = Promise.all(Lv(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const g7 = [...M1].reverse(),
  v7 = M1.length;
function y7(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => m7(e, n, r)));
}
function w7(e) {
  let t = y7(e);
  const n = C7();
  let r = !0;
  const i = (l, u) => {
    const c = _c(e, u);
    if (c) {
      const { transition: f, transitionEnd: h, ...p } = c;
      l = { ...l, ...p, ...h };
    }
    return l;
  };
  function o(l) {
    t = l(e);
  }
  function s(l, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      h = [],
      p = new Set();
    let g = {},
      v = 1 / 0;
    for (let y = 0; y < v7; y++) {
      const w = g7[y],
        x = n[w],
        T = c[w] !== void 0 ? c[w] : f[w],
        _ = Pa(T),
        O = w === u ? x.isActive : null;
      O === !1 && (v = y);
      let B = T === f[w] && T !== c[w] && _;
      if ((B && r && e.manuallyAnimateOnMount && (B = !1), (x.protectedKeys = { ...g }), (!x.isActive && O === null) || (!T && !x.prevProp) || bc(T) || typeof T == "boolean"))
        continue;
      const A = x7(x.prevProp, T);
      let k = A || (w === u && x.isActive && !B && _) || (y > v && _);
      const I = Array.isArray(T) ? T : [T];
      let M = I.reduce(i, {});
      O === !1 && (M = {});
      const { prevResolvedValues: L = {} } = x,
        N = { ...L, ...M },
        j = (W) => {
          (k = !0), p.delete(W), (x.needsAnimating[W] = !0);
        };
      for (const W in N) {
        const oe = M[W],
          ye = L[W];
        g.hasOwnProperty(W) ||
          (oe !== ye
            ? Au(oe) && Au(ye)
              ? !J3(oe, ye) || A
                ? j(W)
                : (x.protectedKeys[W] = !0)
              : oe !== void 0
              ? j(W)
              : p.add(W)
            : oe !== void 0 && p.has(W)
            ? j(W)
            : (x.protectedKeys[W] = !0));
      }
      (x.prevProp = T),
        (x.prevResolvedValues = M),
        x.isActive && (g = { ...g, ...M }),
        r && e.blockInitialAnimation && (k = !1),
        k && !B && h.push(...I.map((W) => ({ animation: W, options: { type: w, ...l } })));
    }
    if (p.size) {
      const y = {};
      p.forEach((w) => {
        const x = e.getBaseTarget(w);
        x !== void 0 && (y[w] = x);
      }),
        h.push({ animation: y });
    }
    let P = !!h.length;
    return r && c.initial === !1 && !e.manuallyAnimateOnMount && (P = !1), (r = !1), P ? t(h) : Promise.resolve();
  }
  function a(l, u, c) {
    var f;
    if (n[l].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((p) => {
        var g;
        return (g = p.animationState) === null || g === void 0 ? void 0 : g.setActive(l, u);
      }),
      (n[l].isActive = u);
    const h = s(c, l);
    for (const p in n) n[p].protectedKeys = {};
    return h;
  }
  return { animateChanges: s, setActive: a, setAnimateFunction: o, getState: () => n };
}
function x7(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !J3(t, e) : !1;
}
function Ui(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function C7() {
  return { animate: Ui(!0), whileInView: Ui(), whileHover: Ui(), whileTap: Ui(), whileDrag: Ui(), whileFocus: Ui(), exit: Ui() };
}
class S7 extends Ni {
  constructor(t) {
    super(t), t.animationState || (t.animationState = w7(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), bc(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let b7 = 0;
class E7 extends Ni {
  constructor() {
    super(...arguments), (this.id = b7++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n, custom: r } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, { custom: r ?? this.node.getProps().custom });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const T7 = { animation: { Feature: S7 }, exit: { Feature: E7 } },
  fm = (e, t) => Math.abs(e - t);
function P7(e, t) {
  const n = fm(e.x, t.x),
    r = fm(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Mv {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = kf(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          f = P7(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f) return;
        const { point: h } = u,
          { timestamp: p } = ln;
        this.history.push({ ...h, timestamp: p });
        const { onStart: g, onMove: v } = this.handlers;
        c || (g && g(this.lastMoveEvent, u), (this.startEvent = this.lastMoveEvent)), v && v(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u), (this.lastMoveEventInfo = Af(c, this.transformPagePoint)), xt.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
        const { onEnd: f, onSessionEnd: h } = this.handlers,
          p = kf(u.type === "pointercancel" ? this.lastMoveEventInfo : Af(c, this.transformPagePoint), this.history);
        this.startEvent && f && f(u, p), h && h(u, p);
      }),
      !q3(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const i = Pc(t),
      o = Af(i, this.transformPagePoint),
      { point: s } = o,
      { timestamp: a } = ln;
    this.history = [{ ...s, timestamp: a }];
    const { onSessionStart: l } = n;
    l && l(t, kf(o, this.history)),
      (this.removeListeners = bi(
        Fr(window, "pointermove", this.handlePointerMove),
        Fr(window, "pointerup", this.handlePointerUp),
        Fr(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Yr(this.updatePoint);
  }
}
function Af(e, t) {
  return t ? { point: t(e.point) } : e;
}
function dm(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function kf({ point: e }, t) {
  return { point: e, delta: dm(e, Rv(t)), offset: dm(e, _7(t)), velocity: A7(t, 0.1) };
}
function _7(e) {
  return e[0];
}
function Rv(e) {
  return e[e.length - 1];
}
function A7(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Rv(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Ei(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = Ur(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Dn(e) {
  return e.max - e.min;
}
function o0(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function hm(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Tt(t.min, t.max, e.origin)),
    (e.scale = Dn(n) / Dn(t)),
    (o0(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Tt(n.min, n.max, e.origin) - e.originPoint),
    (o0(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Js(e, t, n, r) {
  hm(e.x, t.x, n.x, r ? r.originX : void 0), hm(e.y, t.y, n.y, r ? r.originY : void 0);
}
function pm(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Dn(t));
}
function k7(e, t, n) {
  pm(e.x, t.x, n.x), pm(e.y, t.y, n.y);
}
function mm(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Dn(t));
}
function ea(e, t, n) {
  mm(e.x, t.x, n.x), mm(e.y, t.y, n.y);
}
function L7(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? (e = r ? Tt(t, e, r.min) : Math.max(e, t)) : n !== void 0 && e > n && (e = r ? Tt(n, e, r.max) : Math.min(e, n)), e;
}
function gm(e, t, n) {
  return { min: t !== void 0 ? e.min + t : void 0, max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0 };
}
function M7(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: gm(e.x, n, i), y: gm(e.y, t, r) };
}
function vm(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function R7(e, t) {
  return { x: vm(e.x, t.x), y: vm(e.y, t.y) };
}
function I7(e, t) {
  let n = 0.5;
  const r = Dn(e),
    i = Dn(t);
  return i > r ? (n = Aa(t.min, t.max - r, e.min)) : r > i && (n = Aa(e.min, e.max - i, t.min)), Ai(0, 1, n);
}
function O7(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const s0 = 0.35;
function B7(e = s0) {
  return e === !1 ? (e = 0) : e === !0 && (e = s0), { x: ym(e, "left", "right"), y: ym(e, "top", "bottom") };
}
function ym(e, t, n) {
  return { min: wm(e, t), max: wm(e, n) };
}
function wm(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const xm = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Fo = () => ({ x: xm(), y: xm() }),
  Cm = () => ({ min: 0, max: 0 }),
  Dt = () => ({ x: Cm(), y: Cm() });
function vr(e) {
  return [e("x"), e("y")];
}
function Iv({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function $7({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function D7(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Lf(e) {
  return e === void 0 || e === 1;
}
function a0({ scale: e, scaleX: t, scaleY: n }) {
  return !Lf(e) || !Lf(t) || !Lf(n);
}
function Hi(e) {
  return a0(e) || Ov(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Ov(e) {
  return Sm(e.x) || Sm(e.y);
}
function Sm(e) {
  return e && e !== "0%";
}
function Iu(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function bm(e, t, n, r, i) {
  return i !== void 0 && (e = Iu(e, i, r)), Iu(e, n, r) + t;
}
function l0(e, t = 0, n = 1, r, i) {
  (e.min = bm(e.min, t, n, r, i)), (e.max = bm(e.max, t, n, r, i));
}
function Bv(e, { x: t, y: n }) {
  l0(e.x, t.translate, t.scale, t.originPoint), l0(e.y, n.translate, n.scale, n.originPoint);
}
function N7(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (r && o.options.layoutScroll && o.scroll && o !== o.root && Uo(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Bv(e, s)),
      r && Hi(o.latestValues) && Uo(e, o.latestValues));
  }
  (t.x = Em(t.x)), (t.y = Em(t.y));
}
function Em(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function ai(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Tm(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = Tt(e.min, e.max, o);
  l0(e, t[n], t[r], s, t.scale);
}
const V7 = ["x", "scaleX", "originX"],
  j7 = ["y", "scaleY", "originY"];
function Uo(e, t) {
  Tm(e.x, t, V7), Tm(e.y, t, j7);
}
function $v(e, t) {
  return Iv(D7(e.getBoundingClientRect(), t));
}
function F7(e, t, n) {
  const r = $v(e, n),
    { scroll: i } = t;
  return i && (ai(r.x, i.offset.x), ai(r.y, i.offset.y)), r;
}
const U7 = new WeakMap();
class z7 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Dt()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (l) => {
        this.stopAnimation(), n && this.snapToCursor(Pc(l, "page").point);
      },
      o = (l, u) => {
        const { drag: c, dragPropagation: f, onDragStart: h } = this.getProps();
        if (c && !f && (this.openGlobalLock && this.openGlobalLock(), (this.openGlobalLock = Z3(c)), !this.openGlobalLock)) return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection && ((this.visualElement.projection.isAnimationBlocked = !0), (this.visualElement.projection.target = void 0)),
          vr((g) => {
            let v = this.getAxisMotionValue(g).get() || 0;
            if (Sr.test(v)) {
              const { projection: P } = this.visualElement;
              if (P && P.layout) {
                const y = P.layout.layoutBox[g];
                y && (v = Dn(y) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[g] = v;
          }),
          h && xt.update(() => h(l, u), !1, !0);
        const { animationState: p } = this.visualElement;
        p && p.setActive("whileDrag", !0);
      },
      s = (l, u) => {
        const { dragPropagation: c, dragDirectionLock: f, onDirectionLock: h, onDrag: p } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: g } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = W7(g)), this.currentDirection !== null && h && h(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, g), this.updateAxis("y", u.point, g), this.visualElement.render(), p && p(l, u);
      },
      a = (l, u) => this.stop(l, u);
    this.panSession = new Mv(t, { onSessionStart: i, onStart: o, onMove: s, onSessionEnd: a }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && xt.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !El(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = L7(s, this.constraints[t], this.elastic[t])), o.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      i = this.constraints;
    t && Vo(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? (this.constraints = M7(r.layoutBox, t)) : (this.constraints = !1),
      (this.elastic = B7(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        vr((o) => {
          this.getAxisMotionValue(o) && (this.constraints[o] = O7(r.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Vo(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = F7(r, i.root, this.visualElement.getTransformPagePoint());
    let s = R7(i.layout.layoutBox, o);
    if (n) {
      const a = n($7(s));
      (this.hasMutatedConstraints = !!a), a && (s = Iv(a));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(),
      l = this.constraints || {},
      u = vr((c) => {
        if (!El(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        s && (f = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          p = i ? 40 : 1e7,
          g = { type: "inertia", velocity: r ? t[c] : 0, bounceStiffness: h, bounceDamping: p, timeConstant: 750, restDelta: 1, restSpeed: 10, ...o, ...f };
        return this.startAxisValueAnimation(c, g);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(G1(t, r, 0, n));
  }
  stopAnimation() {
    vr((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    vr((n) => {
      const { drag: r } = this.getProps();
      if (!El(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - Tt(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Vo(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    vr((s) => {
      const a = this.getAxisMotionValue(s);
      if (a) {
        const l = a.get();
        i[s] = I7({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      vr((s) => {
        if (!El(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(Tt(l, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    U7.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Fr(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Vo(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = Nr(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
        this.isDragging &&
          u &&
          (vr((c) => {
            const f = this.getAxisMotionValue(c);
            f && ((this.originPoint[c] += l[c].translate), f.set(f.get() + l[c].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = s0, dragMomentum: a = !0 } = t;
    return { ...t, drag: n, dragDirectionLock: r, dragPropagation: i, dragConstraints: o, dragElastic: s, dragMomentum: a };
  }
}
function El(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function W7(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class H7 extends Ni {
  constructor(t) {
    super(t), (this.removeGroupControls = Vt), (this.removeListeners = Vt), (this.controls = new z7(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), (this.removeListeners = this.controls.addListeners() || Vt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Pm = (e) => (t, n) => {
  e && xt.update(() => e(t, n));
};
class K7 extends Ni {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Vt);
  }
  onPointerDown(t) {
    this.session = new Mv(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Pm(t),
      onStart: Pm(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && xt.update(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Fr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function G7() {
  const e = V.useContext(Cc);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = V.useId();
  return V.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Yl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function _m(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Is = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (Ae.test(e)) e = parseFloat(e);
        else return e;
      const n = _m(e, t.target.x),
        r = _m(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  q7 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = ki.parse(e);
      if (i.length > 5) return r;
      const o = ki.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const u = Tt(a, l, 0.5);
      return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i);
    },
  };
class Y7 extends Ct.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props,
      { projection: o } = t;
    tx(Z7),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({ ...o.options, onExitComplete: () => this.safeToRemove() })),
      (Yl.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              xt.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props,
      { projection: i } = t;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Dv(e) {
  const [t, n] = G7(),
    r = V.useContext(I1);
  return Ct.createElement(Y7, { ...e, layoutGroup: r, switchLayoutGroup: V.useContext(I3), isPresent: t, safeToRemove: n });
}
const Z7 = {
    borderRadius: { ...Is, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] },
    borderTopLeftRadius: Is,
    borderTopRightRadius: Is,
    borderBottomLeftRadius: Is,
    borderBottomRightRadius: Is,
    boxShadow: q7,
  },
  Nv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Q7 = Nv.length,
  Am = (e) => (typeof e == "string" ? parseFloat(e) : e),
  km = (e) => typeof e == "number" || Ae.test(e);
function X7(e, t, n, r, i, o) {
  i
    ? ((e.opacity = Tt(0, n.opacity !== void 0 ? n.opacity : 1, J7(r))), (e.opacityExit = Tt(t.opacity !== void 0 ? t.opacity : 1, 0, eC(r))))
    : o && (e.opacity = Tt(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let s = 0; s < Q7; s++) {
    const a = `border${Nv[s]}Radius`;
    let l = Lm(t, a),
      u = Lm(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || km(l) === km(u) ? ((e[a] = Math.max(Tt(Am(l), Am(u), r), 0)), (Sr.test(u) || Sr.test(l)) && (e[a] += "%")) : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = Tt(t.rotate || 0, n.rotate || 0, r));
}
function Lm(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const J7 = Vv(0, 0.5, z1),
  eC = Vv(0.5, 0.95, Vt);
function Vv(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Aa(e, t, r)));
}
function Mm(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Hn(e, t) {
  Mm(e.x, t.x), Mm(e.y, t.y);
}
function Rm(e, t, n, r, i) {
  return (e -= t), (e = Iu(e, 1 / n, r)), i !== void 0 && (e = Iu(e, 1 / i, r)), e;
}
function tC(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if ((Sr.test(t) && ((t = parseFloat(t)), (t = Tt(s.min, s.max, t / 100) - s.min)), typeof t != "number")) return;
  let a = Tt(o.min, o.max, r);
  e === o && (a -= t), (e.min = Rm(e.min, t, n, a, i)), (e.max = Rm(e.max, t, n, a, i));
}
function Im(e, t, [n, r, i], o, s) {
  tC(e, t[n], t[r], t[i], t.scale, o, s);
}
const nC = ["x", "scaleX", "originX"],
  rC = ["y", "scaleY", "originY"];
function Om(e, t, n, r) {
  Im(e.x, t, nC, n ? n.x : void 0, r ? r.x : void 0), Im(e.y, t, rC, n ? n.y : void 0, r ? r.y : void 0);
}
function Bm(e) {
  return e.translate === 0 && e.scale === 1;
}
function jv(e) {
  return Bm(e.x) && Bm(e.y);
}
function u0(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function $m(e) {
  return Dn(e.x) / Dn(e.y);
}
class iC {
  constructor() {
    this.members = [];
  }
  add(t) {
    q1(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if ((Y1(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot && ((t.snapshot = r.snapshot), (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Dm(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n)) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
}
const oC = (e, t) => e.depth - t.depth;
class sC {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    q1(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Y1(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(oC), (this.isDirty = !1), this.children.forEach(t);
  }
}
function aC(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (Yr(r), e(o - t));
    };
  return xt.read(r, !0), () => Yr(r);
}
function lC(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function uC(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function cC(e, t, n) {
  const r = Pn(e) ? e : ls(e);
  return r.start(G1("", r, t, n)), r.animation;
}
const Nm = ["", "X", "Y", "Z"],
  Vm = 1e3;
let fC = 0;
const Ki = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 };
function Fv({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = fC++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (Ki.totalNodes = Ki.resolvedTargetDeltas = Ki.recalculatedProjection = 0),
            this.nodes.forEach(pC),
            this.nodes.forEach(wC),
            this.nodes.forEach(xC),
            this.nodes.forEach(mC),
            lC(Ki);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new sC());
    }
    addEventListener(s, a) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Z1()), this.eventHandlers.get(s).add(a);
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = uC(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if ((c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e)) {
        let f;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0), f && f(), (f = aC(h, 250)), Yl.hasAnimatedSinceResize && ((Yl.hasAnimatedSinceResize = !1), this.nodes.forEach(Fm));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: h, hasRelativeTargetChanged: p, layout: g }) => {
            if (this.isTreeAnimationBlocked()) {
              (this.target = void 0), (this.relativeTarget = void 0);
              return;
            }
            const v = this.options.transition || c.getDefaultTransition() || TC,
              { onLayoutAnimationStart: P, onLayoutAnimationComplete: y } = c.getProps(),
              w = !this.targetLayout || !u0(this.targetLayout, g) || p,
              x = !h && p;
            if (this.options.layoutRoot || (this.resumeFrom && this.resumeFrom.instance) || x || (h && (w || !this.currentAnimation))) {
              this.resumeFrom && ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)), this.setAnimationOrigin(f, x);
              const T = { ..._v(v, "layout"), onPlay: P, onComplete: y };
              (c.shouldReduceMotion || this.options.layoutRoot) && ((T.delay = 0), (T.type = !1)), this.startAnimation(T);
            } else h || Fm(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
            this.targetLayout = g;
          });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), (this.instance = void 0), Yr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() || ((this.isUpdating = !0), this.nodes && this.nodes.forEach(CC), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0), f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0), this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(jm);
        return;
      }
      this.isUpdating || this.nodes.forEach(vC), (this.isUpdating = !1), this.nodes.forEach(yC), this.nodes.forEach(dC), this.nodes.forEach(hC), this.clearAllSnapshots();
      const a = performance.now();
      (ln.delta = Ai(0, 1e3 / 60, a - ln.timestamp)),
        (ln.timestamp = a),
        (ln.isProcessing = !0),
        xf.update.process(ln),
        xf.preRender.process(ln),
        xf.render.process(ln),
        (ln.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(gC), this.sharedNodes.forEach(SC);
    }
    scheduleUpdateProjection() {
      xt.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      xt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance) for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Dt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1),
        a && (this.scroll = { animationId: this.root.animationId, phase: s, isRoot: r(this.instance), offset: n(this.instance) });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !jv(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s && (a || Hi(this.latestValues) || c) && (i(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return s && (l = this.removeTransform(l)), _C(l), { animationId: this.root.animationId, measuredBox: a, layoutBox: l, latestValues: {}, source: this.id };
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return Dt();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (ai(a.x, l.offset.x), ai(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = Dt();
      Hn(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            Hn(a, s);
            const { scroll: h } = this.root;
            h && (ai(a.x, -h.offset.x), ai(a.y, -h.offset.y));
          }
          ai(a.x, c.offset.x), ai(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = Dt();
      Hn(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Uo(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }), Hi(c.latestValues) && Uo(l, c.latestValues);
      }
      return Hi(this.latestValues) && Uo(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = Dt();
      Hn(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Hi(u.latestValues)) continue;
        a0(u.latestValues) && u.updateSnapshot();
        const c = Dt(),
          f = u.measurePageBox();
        Hn(c, f), Om(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Hi(this.latestValues) && Om(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = { ...this.options, ...s, crossfade: s.crossfade !== void 0 ? s.crossfade : !0 };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ln.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) && a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (((this.resolvedRelativeTargetAt = ln.timestamp), !this.targetDelta && !this.relativeTarget)) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Dt()),
              (this.relativeTargetOrigin = Dt()),
              ea(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox),
              Hn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = Dt()), (this.targetWithTransforms = Dt())),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(), k7(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
              ? (this.resumingFrom ? (this.target = this.applyTransform(this.layout.layoutBox)) : Hn(this.target, this.layout.layoutBox), Bv(this.target, this.targetDelta))
              : Hn(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Dt()),
                (this.relativeTargetOrigin = Dt()),
                ea(this.relativeTargetOrigin, this.target, p.target),
                Hn(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Ki.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || a0(this.parent.latestValues) || Ov(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty || (!((s = this.parent) === null || s === void 0) && s.isProjectionDirty)) && (u = !1),
        l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
        this.resolvedRelativeTargetAt === ln.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!((this.parent && this.parent.isTreeAnimating) || this.currentAnimation || this.pendingAnimation)),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Hn(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        p = this.treeScale.y;
      N7(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
      const { target: g } = a;
      if (!g) {
        this.projectionTransform && ((this.projectionDelta = Fo()), (this.projectionTransform = "none"), this.scheduleRender());
        return;
      }
      this.projectionDelta || ((this.projectionDelta = Fo()), (this.projectionDeltaWithTransform = Fo()));
      const v = this.projectionTransform;
      Js(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
        (this.projectionTransform = Dm(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v || this.treeScale.x !== h || this.treeScale.y !== p) &&
          ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", g)),
        Ki.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = Fo();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), (this.attemptToResolveRelativeTarget = !a);
      const h = Dt(),
        p = l ? l.source : void 0,
        g = this.layout ? this.layout.source : void 0,
        v = p !== g,
        P = this.getStack(),
        y = !P || P.members.length <= 1,
        w = !!(v && !y && this.options.crossfade === !0 && !this.path.some(EC));
      this.animationProgress = 0;
      let x;
      (this.mixTargetDelta = (T) => {
        const _ = T / 1e3;
        Um(f.x, s.x, _),
          Um(f.y, s.y, _),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ea(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            bC(this.relativeTarget, this.relativeTargetOrigin, h, _),
            x && u0(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = Dt()),
            Hn(x, this.relativeTarget)),
          v && ((this.animationValues = c), X7(c, u, this.latestValues, _, w, y)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = _);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation && (Yr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = xt.update(() => {
          (Yl.hasAnimatedSinceResize = !0),
            (this.currentAnimation = cC(0, Vm, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom && ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(), (this.resumingFrom = this.currentAnimation = this.animationValues = void 0), this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Vm), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = s;
      if (!(!a || !l || !u)) {
        if (this !== s && this.layout && u && Uv(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Dt();
          const f = Dn(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const h = Dn(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + h);
        }
        Hn(a, l), Uo(a, c), Js(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new iC()), this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({ transition: u ? u.transition : void 0, preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0 });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), s && ((this.projectionDelta = void 0), (this.needsReset = !0)), a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a)) return;
      const u = {};
      for (let c = 0; c < Nm.length; c++) {
        const f = "rotate" + Nm[c];
        l[f] && ((u[f] = l[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var a, l;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset) return (this.needsReset = !1), (u.opacity = ""), (u.pointerEvents = ql(s.pointerEvents) || ""), (u.transform = c ? c(this.latestValues, "") : "none"), u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId && ((v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1), (v.pointerEvents = ql(s.pointerEvents) || "")),
          this.hasProjected && !Hi(this.latestValues) && ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), (u.transform = Dm(this.projectionDeltaWithTransform, this.treeScale, h)), c && (u.transform = c(h, u.transform));
      const { x: p, y: g } = this.projectionDelta;
      (u.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : h.opacityExit)
          : (u.opacity = f === this ? (h.opacity !== void 0 ? h.opacity : "") : h.opacityExit !== void 0 ? h.opacityExit : 0);
      for (const v in Pu) {
        if (h[v] === void 0) continue;
        const { correct: P, applyTo: y } = Pu[v],
          w = u.transform === "none" ? h[v] : P(h[v], f);
        if (y) {
          const x = y.length;
          for (let T = 0; T < x; T++) u[y[T]] = w;
        } else u[v] = w;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? ql(s.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(jm),
        this.root.sharedNodes.clear();
    }
  };
}
function dC(e) {
  e.updateLayout();
}
function hC(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? vr((f) => {
          const h = s ? n.measuredBox[f] : n.layoutBox[f],
            p = Dn(h);
          (h.min = r[f].min), (h.max = h.min + p);
        })
      : Uv(o, n.layoutBox, r) &&
        vr((f) => {
          const h = s ? n.measuredBox[f] : n.layoutBox[f],
            p = Dn(r[f]);
          (h.max = h.min + p), e.relativeTarget && !e.currentAnimation && ((e.isProjectionDirty = !0), (e.relativeTarget[f].max = e.relativeTarget[f].min + p));
        });
    const a = Fo();
    Js(a, r, n.layoutBox);
    const l = Fo();
    s ? Js(l, e.applyTransform(i, !0), n.measuredBox) : Js(l, r, n.layoutBox);
    const u = !jv(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: p } = f;
        if (h && p) {
          const g = Dt();
          ea(g, n.layoutBox, h.layoutBox);
          const v = Dt();
          ea(v, r, p.layoutBox), u0(g, v) || (c = !0), f.options.layoutRoot && ((e.relativeTarget = v), (e.relativeTargetOrigin = g), (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", { layout: r, snapshot: n, delta: l, layoutDelta: a, hasLayoutChanged: u, hasRelativeTargetChanged: c });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function pC(e) {
  Ki.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function mC(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function gC(e) {
  e.clearSnapshot();
}
function jm(e) {
  e.clearMeasurements();
}
function vC(e) {
  e.isLayoutDirty = !1;
}
function yC(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Fm(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0);
}
function wC(e) {
  e.resolveTargetDelta();
}
function xC(e) {
  e.calcProjection();
}
function CC(e) {
  e.resetRotation();
}
function SC(e) {
  e.removeLeadSnapshot();
}
function Um(e, t, n) {
  (e.translate = Tt(t.translate, 0, n)), (e.scale = Tt(t.scale, 1, n)), (e.origin = t.origin), (e.originPoint = t.originPoint);
}
function zm(e, t, n, r) {
  (e.min = Tt(t.min, n.min, r)), (e.max = Tt(t.max, n.max, r));
}
function bC(e, t, n, r) {
  zm(e.x, t.x, n.x, r), zm(e.y, t.y, n.y, r);
}
function EC(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const TC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
let Ou;
const PC = () => navigator.userAgent.toLowerCase().includes("applewebkit/");
function Wm(e) {
  (e.min = Ou(e.min)), (e.max = Ou(e.max));
}
function _C(e) {
  Ou || (Ou = PC() ? Math.round : (t) => Math.round(t * 2) / 2), Wm(e.x), Wm(e.y);
}
function Uv(e, t, n) {
  return e === "position" || (e === "preserve-aspect" && !o0($m(t), $m(n), 0.2));
}
const AC = Fv({
    attachResizeListener: (e, t) => Nr(e, "resize", t),
    measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }),
    checkIsScrollRoot: () => !0,
  }),
  Mf = { current: void 0 },
  zv = Fv({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Mf.current) {
        const e = new AC({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Mf.current = e);
      }
      return Mf.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  kC = { pan: { Feature: K7 }, drag: { Feature: H7, ProjectionNode: zv, MeasureLayout: Dv } },
  LC = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function MC(e) {
  const t = LC.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function c0(e, t, n = 1) {
  const [r, i] = MC(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  return o ? o.trim() : Xd(i) ? c0(i, t, n + 1) : i;
}
function RC(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!Xd(o)) return;
      const s = c0(o, r);
      s && i.set(s);
    });
  for (const i in t) {
    const o = t[i];
    if (!Xd(o)) continue;
    const s = c0(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const IC = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
  Wv = (e) => IC.has(e),
  OC = (e) => Object.keys(e).some(Wv),
  Hm = (e) => e === yo || e === Ae,
  Km = (e, t) => parseFloat(e.split(", ")[t]),
  Gm =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return Km(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? Km(o[1], e) : 0;
      }
    },
  BC = new Set(["x", "y", "z"]),
  $C = Wa.filter((e) => !BC.has(e));
function DC(e) {
  const t = [];
  return (
    $C.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const us = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Gm(4, 13),
  y: Gm(5, 14),
};
us.translateX = us.x;
us.translateY = us.y;
const NC = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        a[u] = us[u](r, o);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(a[u]), (e[u] = us[u](l, o));
      }),
      e
    );
  },
  VC = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(Wv);
    let o = [],
      s = !1;
    const a = [];
    if (
      (i.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          f = Rs(c);
        const h = t[l];
        let p;
        if (Au(h)) {
          const g = h.length,
            v = h[0] === null ? 1 : 0;
          (c = h[v]), (f = Rs(c));
          for (let P = v; P < g && h[P] !== null; P++) p ? U1(Rs(h[P]) === p) : (p = Rs(h[P]));
        } else p = Rs(h);
        if (f !== p)
          if (Hm(f) && Hm(p)) {
            const g = u.get();
            typeof g == "string" && u.set(parseFloat(g)), typeof h == "string" ? (t[l] = parseFloat(h)) : Array.isArray(h) && p === Ae && (t[l] = h.map(parseFloat));
          } else
            f != null && f.transform && p != null && p.transform && (c === 0 || h === 0)
              ? c === 0
                ? u.set(p.transform(c))
                : (t[l] = f.transform(h))
              : (s || ((o = DC(e)), (s = !0)), a.push(l), (r[l] = r[l] !== void 0 ? r[l] : t[l]), u.jump(h));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = NC(t, e, a);
      return (
        o.length &&
          o.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        Sc && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function jC(e, t, n, r) {
  return OC(t) ? VC(e, t, n, r) : { target: t, transitionEnd: r };
}
const FC = (e, t, n, r) => {
    const i = RC(e, t, r);
    return (t = i.target), (r = i.transitionEnd), jC(e, t, n, r);
  },
  f0 = { current: null },
  Hv = { current: !1 };
function UC() {
  if (((Hv.current = !0), !!Sc))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (f0.current = e.matches);
      e.addListener(t), t();
    } else f0.current = !1;
}
function zC(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (Pn(o)) e.addValue(i, o), Ru(r) && r.add(i);
    else if (Pn(s)) e.addValue(i, ls(o, { owner: e })), Ru(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const a = e.getValue(i);
        !a.hasAnimated && a.set(o);
      } else {
        const a = e.getStaticValue(i);
        e.addValue(i, ls(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const qm = new WeakMap(),
  Kv = Object.keys(_a),
  WC = Kv.length,
  Ym = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
  HC = R1.length;
class KC {
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, visualState: o }, s = {}) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.scheduleRender = () => xt.render(this.render, !1, !0));
    const { latestValues: a, renderState: l } = o;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = Ec(n)),
      (this.isVariantNode = R3(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const h = c[f];
      a[f] !== void 0 && Pn(h) && (h.set(a[f], !1), Ru(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      qm.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Hv.current || UC(),
      (this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : f0.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    qm.delete(this.current),
      this.projection && this.projection.unmount(),
      Yr(this.notifyUpdate),
      Yr(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = vo.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s), this.props.onUpdate && xt.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, a;
    for (let l = 0; l < WC; l++) {
      const u = Kv[l],
        { isEnabled: c, Feature: f, ProjectionNode: h, MeasureLayout: p } = _a[u];
      h && (s = h), c(n) && (!this.features[u] && f && (this.features[u] = new f(this)), p && (a = p));
    }
    if (!this.projection && s) {
      this.projection = new s(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: f, layoutScroll: h, layoutRoot: p } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (f && Vo(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: h,
        layoutRoot: p,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Dt();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Ym.length; r++) {
      const i = Ym[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = zC(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues)), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
    }
    const n = {};
    for (let r = 0; r < HC; r++) {
      const i = R1[r],
        o = this.props[i];
      (Pa(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  addValue(t, n) {
    n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)), this.values.set(t, n), (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && ((r = ls(n, { owner: this })), this.addValue(t, r)), r;
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i = typeof r == "string" || typeof r == "object" ? ((n = F1(this.props, r)) === null || n === void 0 ? void 0 : n[t]) : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Pn(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Z1()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Gv extends KC {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...r }, { transformValues: i }, o) {
    let s = f7(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
      u7(this, r, s);
      const a = FC(this, r, s, n);
      (n = a.transitionEnd), (r = a.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function GC(e) {
  return window.getComputedStyle(e);
}
class qC extends Gv {
  readValueFromInstance(t, n) {
    if (vo.has(n)) {
      const r = K1(n);
      return (r && r.default) || 0;
    } else {
      const r = GC(t),
        i = ($3(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return $v(t, n);
  }
  build(t, n, r, i) {
    B1(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return j1(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Pn(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    U3(t, n, r, i);
  }
}
class YC extends Gv {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (vo.has(n)) {
      const r = K1(n);
      return (r && r.default) || 0;
    }
    return (n = z3.has(n) ? n : V1(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Dt();
  }
  scrapeMotionValuesFromProps(t, n) {
    return H3(t, n);
  }
  build(t, n, r, i) {
    D1(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    W3(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = N1(t.tagName)), super.mount(t);
  }
}
const ZC = (e, t) => (O1(e) ? new YC(t, { enableHardwareAcceleration: !1 }) : new qC(t, { enableHardwareAcceleration: !0 })),
  QC = { layout: { ProjectionNode: zv, MeasureLayout: Dv } },
  XC = { ...T7, ...Wx, ...kC, ...QC },
  FM = J8((e, t) => Ax(e, t, XC, ZC));
function qv() {
  const e = V.useRef(!1);
  return (
    Tu(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function JC() {
  const e = qv(),
    [t, n] = V.useState(0),
    r = V.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [V.useCallback(() => xt.postRender(r), [r]), t];
}
class eS extends V.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0), (r.width = n.offsetWidth || 0), (r.top = n.offsetTop), (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function tS({ children: e, isPresent: t }) {
  const n = V.useId(),
    r = V.useRef(null),
    i = V.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    V.useInsertionEffect(() => {
      const { width: o, height: s, top: a, left: l } = i.current;
      if (t || !r.current || !o || !s) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    V.createElement(eS, { isPresent: t, childRef: r, sizeRef: i }, V.cloneElement(e, { ref: r }))
  );
}
const Rf = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s }) => {
  const a = K3(nS),
    l = V.useId(),
    u = V.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (c) => {
          a.set(c, !0);
          for (const f of a.values()) if (!f) return;
          r && r();
        },
        register: (c) => (a.set(c, !1), () => a.delete(c)),
      }),
      o ? void 0 : [n]
    );
  return (
    V.useMemo(() => {
      a.forEach((c, f) => a.set(f, !1));
    }, [n]),
    V.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = V.createElement(tS, { isPresent: n }, e)),
    V.createElement(Cc.Provider, { value: u }, e)
  );
};
function nS() {
  return new Map();
}
function rS(e) {
  return V.useEffect(() => () => e(), []);
}
const Po = (e) => e.key || "";
function iS(e, t) {
  e.forEach((n) => {
    const r = Po(n);
    t.set(r, n);
  });
}
function oS(e) {
  const t = [];
  return (
    V.Children.forEach(e, (n) => {
      V.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const UM = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: o = !0, mode: s = "sync" }) => {
  const a = V.useContext(I1).forceRender || JC()[0],
    l = qv(),
    u = oS(e);
  let c = u;
  const f = V.useRef(new Map()).current,
    h = V.useRef(c),
    p = V.useRef(new Map()).current,
    g = V.useRef(!0);
  if (
    (Tu(() => {
      (g.current = !1), iS(u, p), (h.current = c);
    }),
    rS(() => {
      (g.current = !0), p.clear(), f.clear();
    }),
    g.current)
  )
    return V.createElement(
      V.Fragment,
      null,
      c.map((w) => V.createElement(Rf, { key: Po(w), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: o, mode: s }, w))
    );
  c = [...c];
  const v = h.current.map(Po),
    P = u.map(Po),
    y = v.length;
  for (let w = 0; w < y; w++) {
    const x = v[w];
    P.indexOf(x) === -1 && !f.has(x) && f.set(x, void 0);
  }
  return (
    s === "wait" && f.size && (c = []),
    f.forEach((w, x) => {
      if (P.indexOf(x) !== -1) return;
      const T = p.get(x);
      if (!T) return;
      const _ = v.indexOf(x);
      let O = w;
      if (!O) {
        const B = () => {
          p.delete(x), f.delete(x);
          const A = h.current.findIndex((k) => k.key === x);
          if ((h.current.splice(A, 1), !f.size)) {
            if (((h.current = u), l.current === !1)) return;
            a(), r && r();
          }
        };
        (O = V.createElement(Rf, { key: Po(T), isPresent: !1, onExitComplete: B, custom: t, presenceAffectsLayout: o, mode: s }, T)), f.set(x, O);
      }
      c.splice(_, 0, O);
    }),
    (c = c.map((w) => {
      const x = w.key;
      return f.has(x) ? w : V.createElement(Rf, { key: Po(w), isPresent: !0, presenceAffectsLayout: o, mode: s }, w);
    })),
    V.createElement(V.Fragment, null, f.size ? c : c.map((w) => V.cloneElement(w)))
  );
};
class Zm extends Error {
  constructor(t, n, r) {
    const i = t.status || t.status === 0 ? t.status : "",
      o = t.statusText || "",
      s = `${i} ${o}`.trim(),
      a = s ? `status code ${s}` : "an unknown error";
    super(`Request failed with ${a}`),
      Object.defineProperty(this, "response", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "request", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "options", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.name = "HTTPError"),
      (this.response = t),
      (this.request = n),
      (this.options = r);
  }
}
class Yv extends Error {
  constructor(t) {
    super("Request timed out"),
      Object.defineProperty(this, "request", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.name = "TimeoutError"),
      (this.request = t);
  }
}
const Zl = (e) => e !== null && typeof e == "object",
  Tl = (...e) => {
    for (const t of e) if ((!Zl(t) || Array.isArray(t)) && typeof t < "u") throw new TypeError("The `options` argument must be an object");
    return Q1({}, ...e);
  },
  Zv = (e = {}, t = {}) => {
    const n = new globalThis.Headers(e),
      r = t instanceof globalThis.Headers,
      i = new globalThis.Headers(t);
    for (const [o, s] of i.entries()) (r && s === "undefined") || s === void 0 ? n.delete(o) : n.set(o, s);
    return n;
  },
  Q1 = (...e) => {
    let t = {},
      n = {};
    for (const r of e)
      if (Array.isArray(r)) Array.isArray(t) || (t = []), (t = [...t, ...r]);
      else if (Zl(r)) {
        for (let [i, o] of Object.entries(r)) Zl(o) && i in t && (o = Q1(t[i], o)), (t = { ...t, [i]: o });
        Zl(r.headers) && ((n = Zv(n, r.headers)), (t.headers = n));
      }
    return t;
  },
  sS = (() => {
    let e = !1,
      t = !1;
    const n = typeof globalThis.ReadableStream == "function",
      r = typeof globalThis.Request == "function";
    return (
      n &&
        r &&
        (t = new globalThis.Request("https://a.com", {
          body: new globalThis.ReadableStream(),
          method: "POST",
          get duplex() {
            return (e = !0), "half";
          },
        }).headers.has("Content-Type")),
      e && !t
    );
  })(),
  aS = typeof globalThis.AbortController == "function",
  lS = typeof globalThis.ReadableStream == "function",
  uS = typeof globalThis.FormData == "function",
  Qv = ["get", "post", "put", "patch", "head", "delete"],
  cS = { json: "application/json", text: "text/*", formData: "multipart/form-data", arrayBuffer: "*/*", blob: "*/*" },
  If = 2147483647,
  Xv = Symbol("stop"),
  fS = (e) => (Qv.includes(e) ? e.toUpperCase() : e),
  dS = ["get", "put", "head", "delete", "options", "trace"],
  hS = [408, 413, 429, 500, 502, 503, 504],
  Jv = [413, 429, 503],
  Qm = { limit: 2, methods: dS, statusCodes: hS, afterStatusCodes: Jv, maxRetryAfter: Number.POSITIVE_INFINITY, backoffLimit: Number.POSITIVE_INFINITY },
  pS = (e = {}) => {
    if (typeof e == "number") return { ...Qm, limit: e };
    if (e.methods && !Array.isArray(e.methods)) throw new Error("retry.methods must be an array");
    if (e.statusCodes && !Array.isArray(e.statusCodes)) throw new Error("retry.statusCodes must be an array");
    return { ...Qm, ...e, afterStatusCodes: Jv };
  };
async function mS(e, t, n) {
  return new Promise((r, i) => {
    const o = setTimeout(() => {
      t && t.abort(), i(new Yv(e));
    }, n.timeout);
    n.fetch(e)
      .then(r)
      .catch(i)
      .then(() => {
        clearTimeout(o);
      });
  });
}
const gS = !!globalThis.DOMException;
function Xm(e) {
  if (gS) return new DOMException((e == null ? void 0 : e.reason) ?? "The operation was aborted.", "AbortError");
  const t = new Error((e == null ? void 0 : e.reason) ?? "The operation was aborted.");
  return (t.name = "AbortError"), t;
}
async function vS(e, { signal: t }) {
  return new Promise((n, r) => {
    if (t) {
      if (t.aborted) {
        r(Xm(t));
        return;
      }
      t.addEventListener("abort", i, { once: !0 });
    }
    function i() {
      r(Xm(t)), clearTimeout(o);
    }
    const o = setTimeout(() => {
      t == null || t.removeEventListener("abort", i), n();
    }, e);
  });
}
class Bu {
  static create(t, n) {
    const r = new Bu(t, n),
      i = async () => {
        if (r._options.timeout > If) throw new RangeError(`The \`timeout\` option cannot be greater than ${If}`);
        await Promise.resolve();
        let a = await r._fetch();
        for (const l of r._options.hooks.afterResponse) {
          const u = await l(r.request, r._options, r._decorateResponse(a.clone()));
          u instanceof globalThis.Response && (a = u);
        }
        if ((r._decorateResponse(a), !a.ok && r._options.throwHttpErrors)) {
          let l = new Zm(a, r.request, r._options);
          for (const u of r._options.hooks.beforeError) l = await u(l);
          throw l;
        }
        if (r._options.onDownloadProgress) {
          if (typeof r._options.onDownloadProgress != "function") throw new TypeError("The `onDownloadProgress` option must be a function");
          if (!lS) throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");
          return r._stream(a.clone(), r._options.onDownloadProgress);
        }
        return a;
      },
      s = r._options.retry.methods.includes(r.request.method.toLowerCase()) ? r._retry(i) : i();
    for (const [a, l] of Object.entries(cS))
      s[a] = async () => {
        r.request.headers.set("accept", r.request.headers.get("accept") || l);
        const c = (await s).clone();
        if (a === "json") {
          if (c.status === 204 || (await c.clone().arrayBuffer()).byteLength === 0) return "";
          if (n.parseJson) return n.parseJson(await c.text());
        }
        return c[a]();
      };
    return s;
  }
  constructor(t, n = {}) {
    if (
      (Object.defineProperty(this, "request", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "abortController", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "_retryCount", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
      Object.defineProperty(this, "_input", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "_options", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this._input = t),
      (this._options = {
        credentials: this._input.credentials || "same-origin",
        ...n,
        headers: Zv(this._input.headers, n.headers),
        hooks: Q1({ beforeRequest: [], beforeRetry: [], beforeError: [], afterResponse: [] }, n.hooks),
        method: fS(n.method ?? this._input.method),
        prefixUrl: String(n.prefixUrl || ""),
        retry: pS(n.retry),
        throwHttpErrors: n.throwHttpErrors !== !1,
        timeout: typeof n.timeout > "u" ? 1e4 : n.timeout,
        fetch: n.fetch ?? globalThis.fetch.bind(globalThis),
      }),
      typeof this._input != "string" && !(this._input instanceof URL || this._input instanceof globalThis.Request))
    )
      throw new TypeError("`input` must be a string, URL, or Request");
    if (this._options.prefixUrl && typeof this._input == "string") {
      if (this._input.startsWith("/")) throw new Error("`input` must not begin with a slash when using `prefixUrl`");
      this._options.prefixUrl.endsWith("/") || (this._options.prefixUrl += "/"), (this._input = this._options.prefixUrl + this._input);
    }
    if (aS) {
      if (((this.abortController = new globalThis.AbortController()), this._options.signal)) {
        const r = this._options.signal;
        this._options.signal.addEventListener("abort", () => {
          this.abortController.abort(r.reason);
        });
      }
      this._options.signal = this.abortController.signal;
    }
    if ((sS && (this._options.duplex = "half"), (this.request = new globalThis.Request(this._input, this._options)), this._options.searchParams)) {
      const i = "?" + (typeof this._options.searchParams == "string" ? this._options.searchParams.replace(/^\?/, "") : new URLSearchParams(this._options.searchParams).toString()),
        o = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, i);
      ((uS && this._options.body instanceof globalThis.FormData) || this._options.body instanceof URLSearchParams) &&
        !(this._options.headers && this._options.headers["content-type"]) &&
        this.request.headers.delete("content-type"),
        (this.request = new globalThis.Request(new globalThis.Request(o, { ...this.request }), this._options));
    }
    this._options.json !== void 0 &&
      ((this._options.body = JSON.stringify(this._options.json)),
      this.request.headers.set("content-type", this._options.headers.get("content-type") ?? "application/json"),
      (this.request = new globalThis.Request(this.request, { body: this._options.body })));
  }
  _calculateRetryDelay(t) {
    if ((this._retryCount++, this._retryCount < this._options.retry.limit && !(t instanceof Yv))) {
      if (t instanceof Zm) {
        if (!this._options.retry.statusCodes.includes(t.response.status)) return 0;
        const r = t.response.headers.get("Retry-After");
        if (r && this._options.retry.afterStatusCodes.includes(t.response.status)) {
          let i = Number(r);
          return Number.isNaN(i) ? (i = Date.parse(r) - Date.now()) : (i *= 1e3), typeof this._options.retry.maxRetryAfter < "u" && i > this._options.retry.maxRetryAfter ? 0 : i;
        }
        if (t.response.status === 413) return 0;
      }
      const n = 0.3;
      return Math.min(this._options.retry.backoffLimit, n * 2 ** (this._retryCount - 1) * 1e3);
    }
    return 0;
  }
  _decorateResponse(t) {
    return this._options.parseJson && (t.json = async () => this._options.parseJson(await t.text())), t;
  }
  async _retry(t) {
    try {
      return await t();
    } catch (n) {
      const r = Math.min(this._calculateRetryDelay(n), If);
      if (r !== 0 && this._retryCount > 0) {
        await vS(r, { signal: this._options.signal });
        for (const i of this._options.hooks.beforeRetry) if ((await i({ request: this.request, options: this._options, error: n, retryCount: this._retryCount })) === Xv) return;
        return this._retry(t);
      }
      throw n;
    }
  }
  async _fetch() {
    for (const t of this._options.hooks.beforeRequest) {
      const n = await t(this.request, this._options);
      if (n instanceof Request) {
        this.request = n;
        break;
      }
      if (n instanceof Response) return n;
    }
    return this._options.timeout === !1 ? this._options.fetch(this.request.clone()) : mS(this.request.clone(), this.abortController, this._options);
  }
  _stream(t, n) {
    const r = Number(t.headers.get("content-length")) || 0;
    let i = 0;
    return t.status === 204
      ? (n && n({ percent: 1, totalBytes: r, transferredBytes: i }, new Uint8Array()),
        new globalThis.Response(null, { status: t.status, statusText: t.statusText, headers: t.headers }))
      : new globalThis.Response(
          new globalThis.ReadableStream({
            async start(o) {
              const s = t.body.getReader();
              n && n({ percent: 0, transferredBytes: 0, totalBytes: r }, new Uint8Array());
              async function a() {
                const { done: l, value: u } = await s.read();
                if (l) {
                  o.close();
                  return;
                }
                if (n) {
                  i += u.byteLength;
                  const c = r === 0 ? 0 : i / r;
                  n({ percent: c, transferredBytes: i, totalBytes: r }, u);
                }
                o.enqueue(u), await a();
              }
              await a();
            },
          }),
          { status: t.status, statusText: t.statusText, headers: t.headers }
        );
  }
}
/*!MIT License © Sindre Sorhus*/ const d0 = (e) => {
    const t = (n, r) => Bu.create(n, Tl(e, r));
    for (const n of Qv) t[n] = (r, i) => Bu.create(r, Tl(e, i, { method: n }));
    return (t.create = (n) => d0(Tl(n))), (t.extend = (n) => d0(Tl(e, n))), (t.stop = Xv), t;
  },
  yS = d0(),
  zM = yS;
var ey = { exports: {} };
(function (e) {
  (function (t, n) {
    e.exports ? (e.exports = n()) : (t.nacl || (t.nacl = {}), (t.nacl.util = n()));
  })(ag, function () {
    var t = {};
    function n(r) {
      if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(r)) throw new TypeError("invalid encoding");
    }
    return (
      (t.decodeUTF8 = function (r) {
        if (typeof r != "string") throw new TypeError("expected string");
        var i,
          o = unescape(encodeURIComponent(r)),
          s = new Uint8Array(o.length);
        for (i = 0; i < o.length; i++) s[i] = o.charCodeAt(i);
        return s;
      }),
      (t.encodeUTF8 = function (r) {
        var i,
          o = [];
        for (i = 0; i < r.length; i++) o.push(String.fromCharCode(r[i]));
        return decodeURIComponent(escape(o.join("")));
      }),
      typeof atob > "u"
        ? typeof Buffer.from < "u"
          ? ((t.encodeBase64 = function (r) {
              return Buffer.from(r).toString("base64");
            }),
            (t.decodeBase64 = function (r) {
              return n(r), new Uint8Array(Array.prototype.slice.call(Buffer.from(r, "base64"), 0));
            }))
          : ((t.encodeBase64 = function (r) {
              return new Buffer(r).toString("base64");
            }),
            (t.decodeBase64 = function (r) {
              return n(r), new Uint8Array(Array.prototype.slice.call(new Buffer(r, "base64"), 0));
            }))
        : ((t.encodeBase64 = function (r) {
            var i,
              o = [],
              s = r.length;
            for (i = 0; i < s; i++) o.push(String.fromCharCode(r[i]));
            return btoa(o.join(""));
          }),
          (t.decodeBase64 = function (r) {
            n(r);
            var i,
              o = atob(r),
              s = new Uint8Array(o.length);
            for (i = 0; i < o.length; i++) s[i] = o.charCodeAt(i);
            return s;
          })),
      t
    );
  });
})(ey);
var wS = ey.exports;
const ka = po(wS);
function xS(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var ty = { exports: {} };
const CS = {},
  SS = Object.freeze(Object.defineProperty({ __proto__: null, default: CS }, Symbol.toStringTag, { value: "Module" })),
  bS = E5(SS);
(function (e) {
  (function (t) {
    var n = function (m) {
        var S,
          C = new Float64Array(16);
        if (m) for (S = 0; S < m.length; S++) C[S] = m[S];
        return C;
      },
      r = function () {
        throw new Error("no PRNG");
      },
      i = new Uint8Array(16),
      o = new Uint8Array(32);
    o[0] = 9;
    var s = n(),
      a = n([1]),
      l = n([56129, 1]),
      u = n([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
      c = n([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
      f = n([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
      h = n([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
      p = n([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
    function g(m, S, C, d) {
      (m[S] = (C >> 24) & 255),
        (m[S + 1] = (C >> 16) & 255),
        (m[S + 2] = (C >> 8) & 255),
        (m[S + 3] = C & 255),
        (m[S + 4] = (d >> 24) & 255),
        (m[S + 5] = (d >> 16) & 255),
        (m[S + 6] = (d >> 8) & 255),
        (m[S + 7] = d & 255);
    }
    function v(m, S, C, d, E) {
      var $,
        D = 0;
      for ($ = 0; $ < E; $++) D |= m[S + $] ^ C[d + $];
      return (1 & ((D - 1) >>> 8)) - 1;
    }
    function P(m, S, C, d) {
      return v(m, S, C, d, 16);
    }
    function y(m, S, C, d) {
      return v(m, S, C, d, 32);
    }
    function w(m, S, C, d) {
      for (
        var E = (d[0] & 255) | ((d[1] & 255) << 8) | ((d[2] & 255) << 16) | ((d[3] & 255) << 24),
          $ = (C[0] & 255) | ((C[1] & 255) << 8) | ((C[2] & 255) << 16) | ((C[3] & 255) << 24),
          D = (C[4] & 255) | ((C[5] & 255) << 8) | ((C[6] & 255) << 16) | ((C[7] & 255) << 24),
          Q = (C[8] & 255) | ((C[9] & 255) << 8) | ((C[10] & 255) << 16) | ((C[11] & 255) << 24),
          ie = (C[12] & 255) | ((C[13] & 255) << 8) | ((C[14] & 255) << 16) | ((C[15] & 255) << 24),
          we = (d[4] & 255) | ((d[5] & 255) << 8) | ((d[6] & 255) << 16) | ((d[7] & 255) << 24),
          ue = (S[0] & 255) | ((S[1] & 255) << 8) | ((S[2] & 255) << 16) | ((S[3] & 255) << 24),
          nt = (S[4] & 255) | ((S[5] & 255) << 8) | ((S[6] & 255) << 16) | ((S[7] & 255) << 24),
          fe = (S[8] & 255) | ((S[9] & 255) << 8) | ((S[10] & 255) << 16) | ((S[11] & 255) << 24),
          ke = (S[12] & 255) | ((S[13] & 255) << 8) | ((S[14] & 255) << 16) | ((S[15] & 255) << 24),
          Me = (d[8] & 255) | ((d[9] & 255) << 8) | ((d[10] & 255) << 16) | ((d[11] & 255) << 24),
          Ne = (C[16] & 255) | ((C[17] & 255) << 8) | ((C[18] & 255) << 16) | ((C[19] & 255) << 24),
          De = (C[20] & 255) | ((C[21] & 255) << 8) | ((C[22] & 255) << 16) | ((C[23] & 255) << 24),
          Re = (C[24] & 255) | ((C[25] & 255) << 8) | ((C[26] & 255) << 16) | ((C[27] & 255) << 24),
          Be = (C[28] & 255) | ((C[29] & 255) << 8) | ((C[30] & 255) << 16) | ((C[31] & 255) << 24),
          Ie = (d[12] & 255) | ((d[13] & 255) << 8) | ((d[14] & 255) << 16) | ((d[15] & 255) << 24),
          he = E,
          xe = $,
          ce = D,
          me = Q,
          ve = ie,
          le = we,
          F = ue,
          z = nt,
          ee = fe,
          Y = ke,
          X = Me,
          te = Ne,
          Ee = De,
          Ve = Re,
          Ue = Be,
          je = Ie,
          R,
          Ke = 0;
        Ke < 20;
        Ke += 2
      )
        (R = (he + Ee) | 0),
          (ve ^= (R << 7) | (R >>> (32 - 7))),
          (R = (ve + he) | 0),
          (ee ^= (R << 9) | (R >>> (32 - 9))),
          (R = (ee + ve) | 0),
          (Ee ^= (R << 13) | (R >>> (32 - 13))),
          (R = (Ee + ee) | 0),
          (he ^= (R << 18) | (R >>> (32 - 18))),
          (R = (le + xe) | 0),
          (Y ^= (R << 7) | (R >>> (32 - 7))),
          (R = (Y + le) | 0),
          (Ve ^= (R << 9) | (R >>> (32 - 9))),
          (R = (Ve + Y) | 0),
          (xe ^= (R << 13) | (R >>> (32 - 13))),
          (R = (xe + Ve) | 0),
          (le ^= (R << 18) | (R >>> (32 - 18))),
          (R = (X + F) | 0),
          (Ue ^= (R << 7) | (R >>> (32 - 7))),
          (R = (Ue + X) | 0),
          (ce ^= (R << 9) | (R >>> (32 - 9))),
          (R = (ce + Ue) | 0),
          (F ^= (R << 13) | (R >>> (32 - 13))),
          (R = (F + ce) | 0),
          (X ^= (R << 18) | (R >>> (32 - 18))),
          (R = (je + te) | 0),
          (me ^= (R << 7) | (R >>> (32 - 7))),
          (R = (me + je) | 0),
          (z ^= (R << 9) | (R >>> (32 - 9))),
          (R = (z + me) | 0),
          (te ^= (R << 13) | (R >>> (32 - 13))),
          (R = (te + z) | 0),
          (je ^= (R << 18) | (R >>> (32 - 18))),
          (R = (he + me) | 0),
          (xe ^= (R << 7) | (R >>> (32 - 7))),
          (R = (xe + he) | 0),
          (ce ^= (R << 9) | (R >>> (32 - 9))),
          (R = (ce + xe) | 0),
          (me ^= (R << 13) | (R >>> (32 - 13))),
          (R = (me + ce) | 0),
          (he ^= (R << 18) | (R >>> (32 - 18))),
          (R = (le + ve) | 0),
          (F ^= (R << 7) | (R >>> (32 - 7))),
          (R = (F + le) | 0),
          (z ^= (R << 9) | (R >>> (32 - 9))),
          (R = (z + F) | 0),
          (ve ^= (R << 13) | (R >>> (32 - 13))),
          (R = (ve + z) | 0),
          (le ^= (R << 18) | (R >>> (32 - 18))),
          (R = (X + Y) | 0),
          (te ^= (R << 7) | (R >>> (32 - 7))),
          (R = (te + X) | 0),
          (ee ^= (R << 9) | (R >>> (32 - 9))),
          (R = (ee + te) | 0),
          (Y ^= (R << 13) | (R >>> (32 - 13))),
          (R = (Y + ee) | 0),
          (X ^= (R << 18) | (R >>> (32 - 18))),
          (R = (je + Ue) | 0),
          (Ee ^= (R << 7) | (R >>> (32 - 7))),
          (R = (Ee + je) | 0),
          (Ve ^= (R << 9) | (R >>> (32 - 9))),
          (R = (Ve + Ee) | 0),
          (Ue ^= (R << 13) | (R >>> (32 - 13))),
          (R = (Ue + Ve) | 0),
          (je ^= (R << 18) | (R >>> (32 - 18)));
      (he = (he + E) | 0),
        (xe = (xe + $) | 0),
        (ce = (ce + D) | 0),
        (me = (me + Q) | 0),
        (ve = (ve + ie) | 0),
        (le = (le + we) | 0),
        (F = (F + ue) | 0),
        (z = (z + nt) | 0),
        (ee = (ee + fe) | 0),
        (Y = (Y + ke) | 0),
        (X = (X + Me) | 0),
        (te = (te + Ne) | 0),
        (Ee = (Ee + De) | 0),
        (Ve = (Ve + Re) | 0),
        (Ue = (Ue + Be) | 0),
        (je = (je + Ie) | 0),
        (m[0] = (he >>> 0) & 255),
        (m[1] = (he >>> 8) & 255),
        (m[2] = (he >>> 16) & 255),
        (m[3] = (he >>> 24) & 255),
        (m[4] = (xe >>> 0) & 255),
        (m[5] = (xe >>> 8) & 255),
        (m[6] = (xe >>> 16) & 255),
        (m[7] = (xe >>> 24) & 255),
        (m[8] = (ce >>> 0) & 255),
        (m[9] = (ce >>> 8) & 255),
        (m[10] = (ce >>> 16) & 255),
        (m[11] = (ce >>> 24) & 255),
        (m[12] = (me >>> 0) & 255),
        (m[13] = (me >>> 8) & 255),
        (m[14] = (me >>> 16) & 255),
        (m[15] = (me >>> 24) & 255),
        (m[16] = (ve >>> 0) & 255),
        (m[17] = (ve >>> 8) & 255),
        (m[18] = (ve >>> 16) & 255),
        (m[19] = (ve >>> 24) & 255),
        (m[20] = (le >>> 0) & 255),
        (m[21] = (le >>> 8) & 255),
        (m[22] = (le >>> 16) & 255),
        (m[23] = (le >>> 24) & 255),
        (m[24] = (F >>> 0) & 255),
        (m[25] = (F >>> 8) & 255),
        (m[26] = (F >>> 16) & 255),
        (m[27] = (F >>> 24) & 255),
        (m[28] = (z >>> 0) & 255),
        (m[29] = (z >>> 8) & 255),
        (m[30] = (z >>> 16) & 255),
        (m[31] = (z >>> 24) & 255),
        (m[32] = (ee >>> 0) & 255),
        (m[33] = (ee >>> 8) & 255),
        (m[34] = (ee >>> 16) & 255),
        (m[35] = (ee >>> 24) & 255),
        (m[36] = (Y >>> 0) & 255),
        (m[37] = (Y >>> 8) & 255),
        (m[38] = (Y >>> 16) & 255),
        (m[39] = (Y >>> 24) & 255),
        (m[40] = (X >>> 0) & 255),
        (m[41] = (X >>> 8) & 255),
        (m[42] = (X >>> 16) & 255),
        (m[43] = (X >>> 24) & 255),
        (m[44] = (te >>> 0) & 255),
        (m[45] = (te >>> 8) & 255),
        (m[46] = (te >>> 16) & 255),
        (m[47] = (te >>> 24) & 255),
        (m[48] = (Ee >>> 0) & 255),
        (m[49] = (Ee >>> 8) & 255),
        (m[50] = (Ee >>> 16) & 255),
        (m[51] = (Ee >>> 24) & 255),
        (m[52] = (Ve >>> 0) & 255),
        (m[53] = (Ve >>> 8) & 255),
        (m[54] = (Ve >>> 16) & 255),
        (m[55] = (Ve >>> 24) & 255),
        (m[56] = (Ue >>> 0) & 255),
        (m[57] = (Ue >>> 8) & 255),
        (m[58] = (Ue >>> 16) & 255),
        (m[59] = (Ue >>> 24) & 255),
        (m[60] = (je >>> 0) & 255),
        (m[61] = (je >>> 8) & 255),
        (m[62] = (je >>> 16) & 255),
        (m[63] = (je >>> 24) & 255);
    }
    function x(m, S, C, d) {
      for (
        var E = (d[0] & 255) | ((d[1] & 255) << 8) | ((d[2] & 255) << 16) | ((d[3] & 255) << 24),
          $ = (C[0] & 255) | ((C[1] & 255) << 8) | ((C[2] & 255) << 16) | ((C[3] & 255) << 24),
          D = (C[4] & 255) | ((C[5] & 255) << 8) | ((C[6] & 255) << 16) | ((C[7] & 255) << 24),
          Q = (C[8] & 255) | ((C[9] & 255) << 8) | ((C[10] & 255) << 16) | ((C[11] & 255) << 24),
          ie = (C[12] & 255) | ((C[13] & 255) << 8) | ((C[14] & 255) << 16) | ((C[15] & 255) << 24),
          we = (d[4] & 255) | ((d[5] & 255) << 8) | ((d[6] & 255) << 16) | ((d[7] & 255) << 24),
          ue = (S[0] & 255) | ((S[1] & 255) << 8) | ((S[2] & 255) << 16) | ((S[3] & 255) << 24),
          nt = (S[4] & 255) | ((S[5] & 255) << 8) | ((S[6] & 255) << 16) | ((S[7] & 255) << 24),
          fe = (S[8] & 255) | ((S[9] & 255) << 8) | ((S[10] & 255) << 16) | ((S[11] & 255) << 24),
          ke = (S[12] & 255) | ((S[13] & 255) << 8) | ((S[14] & 255) << 16) | ((S[15] & 255) << 24),
          Me = (d[8] & 255) | ((d[9] & 255) << 8) | ((d[10] & 255) << 16) | ((d[11] & 255) << 24),
          Ne = (C[16] & 255) | ((C[17] & 255) << 8) | ((C[18] & 255) << 16) | ((C[19] & 255) << 24),
          De = (C[20] & 255) | ((C[21] & 255) << 8) | ((C[22] & 255) << 16) | ((C[23] & 255) << 24),
          Re = (C[24] & 255) | ((C[25] & 255) << 8) | ((C[26] & 255) << 16) | ((C[27] & 255) << 24),
          Be = (C[28] & 255) | ((C[29] & 255) << 8) | ((C[30] & 255) << 16) | ((C[31] & 255) << 24),
          Ie = (d[12] & 255) | ((d[13] & 255) << 8) | ((d[14] & 255) << 16) | ((d[15] & 255) << 24),
          he = E,
          xe = $,
          ce = D,
          me = Q,
          ve = ie,
          le = we,
          F = ue,
          z = nt,
          ee = fe,
          Y = ke,
          X = Me,
          te = Ne,
          Ee = De,
          Ve = Re,
          Ue = Be,
          je = Ie,
          R,
          Ke = 0;
        Ke < 20;
        Ke += 2
      )
        (R = (he + Ee) | 0),
          (ve ^= (R << 7) | (R >>> (32 - 7))),
          (R = (ve + he) | 0),
          (ee ^= (R << 9) | (R >>> (32 - 9))),
          (R = (ee + ve) | 0),
          (Ee ^= (R << 13) | (R >>> (32 - 13))),
          (R = (Ee + ee) | 0),
          (he ^= (R << 18) | (R >>> (32 - 18))),
          (R = (le + xe) | 0),
          (Y ^= (R << 7) | (R >>> (32 - 7))),
          (R = (Y + le) | 0),
          (Ve ^= (R << 9) | (R >>> (32 - 9))),
          (R = (Ve + Y) | 0),
          (xe ^= (R << 13) | (R >>> (32 - 13))),
          (R = (xe + Ve) | 0),
          (le ^= (R << 18) | (R >>> (32 - 18))),
          (R = (X + F) | 0),
          (Ue ^= (R << 7) | (R >>> (32 - 7))),
          (R = (Ue + X) | 0),
          (ce ^= (R << 9) | (R >>> (32 - 9))),
          (R = (ce + Ue) | 0),
          (F ^= (R << 13) | (R >>> (32 - 13))),
          (R = (F + ce) | 0),
          (X ^= (R << 18) | (R >>> (32 - 18))),
          (R = (je + te) | 0),
          (me ^= (R << 7) | (R >>> (32 - 7))),
          (R = (me + je) | 0),
          (z ^= (R << 9) | (R >>> (32 - 9))),
          (R = (z + me) | 0),
          (te ^= (R << 13) | (R >>> (32 - 13))),
          (R = (te + z) | 0),
          (je ^= (R << 18) | (R >>> (32 - 18))),
          (R = (he + me) | 0),
          (xe ^= (R << 7) | (R >>> (32 - 7))),
          (R = (xe + he) | 0),
          (ce ^= (R << 9) | (R >>> (32 - 9))),
          (R = (ce + xe) | 0),
          (me ^= (R << 13) | (R >>> (32 - 13))),
          (R = (me + ce) | 0),
          (he ^= (R << 18) | (R >>> (32 - 18))),
          (R = (le + ve) | 0),
          (F ^= (R << 7) | (R >>> (32 - 7))),
          (R = (F + le) | 0),
          (z ^= (R << 9) | (R >>> (32 - 9))),
          (R = (z + F) | 0),
          (ve ^= (R << 13) | (R >>> (32 - 13))),
          (R = (ve + z) | 0),
          (le ^= (R << 18) | (R >>> (32 - 18))),
          (R = (X + Y) | 0),
          (te ^= (R << 7) | (R >>> (32 - 7))),
          (R = (te + X) | 0),
          (ee ^= (R << 9) | (R >>> (32 - 9))),
          (R = (ee + te) | 0),
          (Y ^= (R << 13) | (R >>> (32 - 13))),
          (R = (Y + ee) | 0),
          (X ^= (R << 18) | (R >>> (32 - 18))),
          (R = (je + Ue) | 0),
          (Ee ^= (R << 7) | (R >>> (32 - 7))),
          (R = (Ee + je) | 0),
          (Ve ^= (R << 9) | (R >>> (32 - 9))),
          (R = (Ve + Ee) | 0),
          (Ue ^= (R << 13) | (R >>> (32 - 13))),
          (R = (Ue + Ve) | 0),
          (je ^= (R << 18) | (R >>> (32 - 18)));
      (m[0] = (he >>> 0) & 255),
        (m[1] = (he >>> 8) & 255),
        (m[2] = (he >>> 16) & 255),
        (m[3] = (he >>> 24) & 255),
        (m[4] = (le >>> 0) & 255),
        (m[5] = (le >>> 8) & 255),
        (m[6] = (le >>> 16) & 255),
        (m[7] = (le >>> 24) & 255),
        (m[8] = (X >>> 0) & 255),
        (m[9] = (X >>> 8) & 255),
        (m[10] = (X >>> 16) & 255),
        (m[11] = (X >>> 24) & 255),
        (m[12] = (je >>> 0) & 255),
        (m[13] = (je >>> 8) & 255),
        (m[14] = (je >>> 16) & 255),
        (m[15] = (je >>> 24) & 255),
        (m[16] = (F >>> 0) & 255),
        (m[17] = (F >>> 8) & 255),
        (m[18] = (F >>> 16) & 255),
        (m[19] = (F >>> 24) & 255),
        (m[20] = (z >>> 0) & 255),
        (m[21] = (z >>> 8) & 255),
        (m[22] = (z >>> 16) & 255),
        (m[23] = (z >>> 24) & 255),
        (m[24] = (ee >>> 0) & 255),
        (m[25] = (ee >>> 8) & 255),
        (m[26] = (ee >>> 16) & 255),
        (m[27] = (ee >>> 24) & 255),
        (m[28] = (Y >>> 0) & 255),
        (m[29] = (Y >>> 8) & 255),
        (m[30] = (Y >>> 16) & 255),
        (m[31] = (Y >>> 24) & 255);
    }
    function T(m, S, C, d) {
      w(m, S, C, d);
    }
    function _(m, S, C, d) {
      x(m, S, C, d);
    }
    var O = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
    function B(m, S, C, d, E, $, D) {
      var Q = new Uint8Array(16),
        ie = new Uint8Array(64),
        we,
        ue;
      for (ue = 0; ue < 16; ue++) Q[ue] = 0;
      for (ue = 0; ue < 8; ue++) Q[ue] = $[ue];
      for (; E >= 64; ) {
        for (T(ie, Q, D, O), ue = 0; ue < 64; ue++) m[S + ue] = C[d + ue] ^ ie[ue];
        for (we = 1, ue = 8; ue < 16; ue++) (we = (we + (Q[ue] & 255)) | 0), (Q[ue] = we & 255), (we >>>= 8);
        (E -= 64), (S += 64), (d += 64);
      }
      if (E > 0) for (T(ie, Q, D, O), ue = 0; ue < E; ue++) m[S + ue] = C[d + ue] ^ ie[ue];
      return 0;
    }
    function A(m, S, C, d, E) {
      var $ = new Uint8Array(16),
        D = new Uint8Array(64),
        Q,
        ie;
      for (ie = 0; ie < 16; ie++) $[ie] = 0;
      for (ie = 0; ie < 8; ie++) $[ie] = d[ie];
      for (; C >= 64; ) {
        for (T(D, $, E, O), ie = 0; ie < 64; ie++) m[S + ie] = D[ie];
        for (Q = 1, ie = 8; ie < 16; ie++) (Q = (Q + ($[ie] & 255)) | 0), ($[ie] = Q & 255), (Q >>>= 8);
        (C -= 64), (S += 64);
      }
      if (C > 0) for (T(D, $, E, O), ie = 0; ie < C; ie++) m[S + ie] = D[ie];
      return 0;
    }
    function k(m, S, C, d, E) {
      var $ = new Uint8Array(32);
      _($, d, E, O);
      for (var D = new Uint8Array(8), Q = 0; Q < 8; Q++) D[Q] = d[Q + 16];
      return A(m, S, C, D, $);
    }
    function I(m, S, C, d, E, $, D) {
      var Q = new Uint8Array(32);
      _(Q, $, D, O);
      for (var ie = new Uint8Array(8), we = 0; we < 8; we++) ie[we] = $[we + 16];
      return B(m, S, C, d, E, ie, Q);
    }
    var M = function (m) {
      (this.buffer = new Uint8Array(16)), (this.r = new Uint16Array(10)), (this.h = new Uint16Array(10)), (this.pad = new Uint16Array(8)), (this.leftover = 0), (this.fin = 0);
      var S, C, d, E, $, D, Q, ie;
      (S = (m[0] & 255) | ((m[1] & 255) << 8)),
        (this.r[0] = S & 8191),
        (C = (m[2] & 255) | ((m[3] & 255) << 8)),
        (this.r[1] = ((S >>> 13) | (C << 3)) & 8191),
        (d = (m[4] & 255) | ((m[5] & 255) << 8)),
        (this.r[2] = ((C >>> 10) | (d << 6)) & 7939),
        (E = (m[6] & 255) | ((m[7] & 255) << 8)),
        (this.r[3] = ((d >>> 7) | (E << 9)) & 8191),
        ($ = (m[8] & 255) | ((m[9] & 255) << 8)),
        (this.r[4] = ((E >>> 4) | ($ << 12)) & 255),
        (this.r[5] = ($ >>> 1) & 8190),
        (D = (m[10] & 255) | ((m[11] & 255) << 8)),
        (this.r[6] = (($ >>> 14) | (D << 2)) & 8191),
        (Q = (m[12] & 255) | ((m[13] & 255) << 8)),
        (this.r[7] = ((D >>> 11) | (Q << 5)) & 8065),
        (ie = (m[14] & 255) | ((m[15] & 255) << 8)),
        (this.r[8] = ((Q >>> 8) | (ie << 8)) & 8191),
        (this.r[9] = (ie >>> 5) & 127),
        (this.pad[0] = (m[16] & 255) | ((m[17] & 255) << 8)),
        (this.pad[1] = (m[18] & 255) | ((m[19] & 255) << 8)),
        (this.pad[2] = (m[20] & 255) | ((m[21] & 255) << 8)),
        (this.pad[3] = (m[22] & 255) | ((m[23] & 255) << 8)),
        (this.pad[4] = (m[24] & 255) | ((m[25] & 255) << 8)),
        (this.pad[5] = (m[26] & 255) | ((m[27] & 255) << 8)),
        (this.pad[6] = (m[28] & 255) | ((m[29] & 255) << 8)),
        (this.pad[7] = (m[30] & 255) | ((m[31] & 255) << 8));
    };
    (M.prototype.blocks = function (m, S, C) {
      for (
        var d = this.fin ? 0 : 2048,
          E,
          $,
          D,
          Q,
          ie,
          we,
          ue,
          nt,
          fe,
          ke,
          Me,
          Ne,
          De,
          Re,
          Be,
          Ie,
          he,
          xe,
          ce,
          me = this.h[0],
          ve = this.h[1],
          le = this.h[2],
          F = this.h[3],
          z = this.h[4],
          ee = this.h[5],
          Y = this.h[6],
          X = this.h[7],
          te = this.h[8],
          Ee = this.h[9],
          Ve = this.r[0],
          Ue = this.r[1],
          je = this.r[2],
          R = this.r[3],
          Ke = this.r[4],
          rt = this.r[5],
          it = this.r[6],
          We = this.r[7],
          Je = this.r[8],
          et = this.r[9];
        C >= 16;

      )
        (E = (m[S + 0] & 255) | ((m[S + 1] & 255) << 8)),
          (me += E & 8191),
          ($ = (m[S + 2] & 255) | ((m[S + 3] & 255) << 8)),
          (ve += ((E >>> 13) | ($ << 3)) & 8191),
          (D = (m[S + 4] & 255) | ((m[S + 5] & 255) << 8)),
          (le += (($ >>> 10) | (D << 6)) & 8191),
          (Q = (m[S + 6] & 255) | ((m[S + 7] & 255) << 8)),
          (F += ((D >>> 7) | (Q << 9)) & 8191),
          (ie = (m[S + 8] & 255) | ((m[S + 9] & 255) << 8)),
          (z += ((Q >>> 4) | (ie << 12)) & 8191),
          (ee += (ie >>> 1) & 8191),
          (we = (m[S + 10] & 255) | ((m[S + 11] & 255) << 8)),
          (Y += ((ie >>> 14) | (we << 2)) & 8191),
          (ue = (m[S + 12] & 255) | ((m[S + 13] & 255) << 8)),
          (X += ((we >>> 11) | (ue << 5)) & 8191),
          (nt = (m[S + 14] & 255) | ((m[S + 15] & 255) << 8)),
          (te += ((ue >>> 8) | (nt << 8)) & 8191),
          (Ee += (nt >>> 5) | d),
          (fe = 0),
          (ke = fe),
          (ke += me * Ve),
          (ke += ve * (5 * et)),
          (ke += le * (5 * Je)),
          (ke += F * (5 * We)),
          (ke += z * (5 * it)),
          (fe = ke >>> 13),
          (ke &= 8191),
          (ke += ee * (5 * rt)),
          (ke += Y * (5 * Ke)),
          (ke += X * (5 * R)),
          (ke += te * (5 * je)),
          (ke += Ee * (5 * Ue)),
          (fe += ke >>> 13),
          (ke &= 8191),
          (Me = fe),
          (Me += me * Ue),
          (Me += ve * Ve),
          (Me += le * (5 * et)),
          (Me += F * (5 * Je)),
          (Me += z * (5 * We)),
          (fe = Me >>> 13),
          (Me &= 8191),
          (Me += ee * (5 * it)),
          (Me += Y * (5 * rt)),
          (Me += X * (5 * Ke)),
          (Me += te * (5 * R)),
          (Me += Ee * (5 * je)),
          (fe += Me >>> 13),
          (Me &= 8191),
          (Ne = fe),
          (Ne += me * je),
          (Ne += ve * Ue),
          (Ne += le * Ve),
          (Ne += F * (5 * et)),
          (Ne += z * (5 * Je)),
          (fe = Ne >>> 13),
          (Ne &= 8191),
          (Ne += ee * (5 * We)),
          (Ne += Y * (5 * it)),
          (Ne += X * (5 * rt)),
          (Ne += te * (5 * Ke)),
          (Ne += Ee * (5 * R)),
          (fe += Ne >>> 13),
          (Ne &= 8191),
          (De = fe),
          (De += me * R),
          (De += ve * je),
          (De += le * Ue),
          (De += F * Ve),
          (De += z * (5 * et)),
          (fe = De >>> 13),
          (De &= 8191),
          (De += ee * (5 * Je)),
          (De += Y * (5 * We)),
          (De += X * (5 * it)),
          (De += te * (5 * rt)),
          (De += Ee * (5 * Ke)),
          (fe += De >>> 13),
          (De &= 8191),
          (Re = fe),
          (Re += me * Ke),
          (Re += ve * R),
          (Re += le * je),
          (Re += F * Ue),
          (Re += z * Ve),
          (fe = Re >>> 13),
          (Re &= 8191),
          (Re += ee * (5 * et)),
          (Re += Y * (5 * Je)),
          (Re += X * (5 * We)),
          (Re += te * (5 * it)),
          (Re += Ee * (5 * rt)),
          (fe += Re >>> 13),
          (Re &= 8191),
          (Be = fe),
          (Be += me * rt),
          (Be += ve * Ke),
          (Be += le * R),
          (Be += F * je),
          (Be += z * Ue),
          (fe = Be >>> 13),
          (Be &= 8191),
          (Be += ee * Ve),
          (Be += Y * (5 * et)),
          (Be += X * (5 * Je)),
          (Be += te * (5 * We)),
          (Be += Ee * (5 * it)),
          (fe += Be >>> 13),
          (Be &= 8191),
          (Ie = fe),
          (Ie += me * it),
          (Ie += ve * rt),
          (Ie += le * Ke),
          (Ie += F * R),
          (Ie += z * je),
          (fe = Ie >>> 13),
          (Ie &= 8191),
          (Ie += ee * Ue),
          (Ie += Y * Ve),
          (Ie += X * (5 * et)),
          (Ie += te * (5 * Je)),
          (Ie += Ee * (5 * We)),
          (fe += Ie >>> 13),
          (Ie &= 8191),
          (he = fe),
          (he += me * We),
          (he += ve * it),
          (he += le * rt),
          (he += F * Ke),
          (he += z * R),
          (fe = he >>> 13),
          (he &= 8191),
          (he += ee * je),
          (he += Y * Ue),
          (he += X * Ve),
          (he += te * (5 * et)),
          (he += Ee * (5 * Je)),
          (fe += he >>> 13),
          (he &= 8191),
          (xe = fe),
          (xe += me * Je),
          (xe += ve * We),
          (xe += le * it),
          (xe += F * rt),
          (xe += z * Ke),
          (fe = xe >>> 13),
          (xe &= 8191),
          (xe += ee * R),
          (xe += Y * je),
          (xe += X * Ue),
          (xe += te * Ve),
          (xe += Ee * (5 * et)),
          (fe += xe >>> 13),
          (xe &= 8191),
          (ce = fe),
          (ce += me * et),
          (ce += ve * Je),
          (ce += le * We),
          (ce += F * it),
          (ce += z * rt),
          (fe = ce >>> 13),
          (ce &= 8191),
          (ce += ee * Ke),
          (ce += Y * R),
          (ce += X * je),
          (ce += te * Ue),
          (ce += Ee * Ve),
          (fe += ce >>> 13),
          (ce &= 8191),
          (fe = ((fe << 2) + fe) | 0),
          (fe = (fe + ke) | 0),
          (ke = fe & 8191),
          (fe = fe >>> 13),
          (Me += fe),
          (me = ke),
          (ve = Me),
          (le = Ne),
          (F = De),
          (z = Re),
          (ee = Be),
          (Y = Ie),
          (X = he),
          (te = xe),
          (Ee = ce),
          (S += 16),
          (C -= 16);
      (this.h[0] = me),
        (this.h[1] = ve),
        (this.h[2] = le),
        (this.h[3] = F),
        (this.h[4] = z),
        (this.h[5] = ee),
        (this.h[6] = Y),
        (this.h[7] = X),
        (this.h[8] = te),
        (this.h[9] = Ee);
    }),
      (M.prototype.finish = function (m, S) {
        var C = new Uint16Array(10),
          d,
          E,
          $,
          D;
        if (this.leftover) {
          for (D = this.leftover, this.buffer[D++] = 1; D < 16; D++) this.buffer[D] = 0;
          (this.fin = 1), this.blocks(this.buffer, 0, 16);
        }
        for (d = this.h[1] >>> 13, this.h[1] &= 8191, D = 2; D < 10; D++) (this.h[D] += d), (d = this.h[D] >>> 13), (this.h[D] &= 8191);
        for (
          this.h[0] += d * 5,
            d = this.h[0] >>> 13,
            this.h[0] &= 8191,
            this.h[1] += d,
            d = this.h[1] >>> 13,
            this.h[1] &= 8191,
            this.h[2] += d,
            C[0] = this.h[0] + 5,
            d = C[0] >>> 13,
            C[0] &= 8191,
            D = 1;
          D < 10;
          D++
        )
          (C[D] = this.h[D] + d), (d = C[D] >>> 13), (C[D] &= 8191);
        for (C[9] -= 1 << 13, E = (d ^ 1) - 1, D = 0; D < 10; D++) C[D] &= E;
        for (E = ~E, D = 0; D < 10; D++) this.h[D] = (this.h[D] & E) | C[D];
        for (
          this.h[0] = (this.h[0] | (this.h[1] << 13)) & 65535,
            this.h[1] = ((this.h[1] >>> 3) | (this.h[2] << 10)) & 65535,
            this.h[2] = ((this.h[2] >>> 6) | (this.h[3] << 7)) & 65535,
            this.h[3] = ((this.h[3] >>> 9) | (this.h[4] << 4)) & 65535,
            this.h[4] = ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)) & 65535,
            this.h[5] = ((this.h[6] >>> 2) | (this.h[7] << 11)) & 65535,
            this.h[6] = ((this.h[7] >>> 5) | (this.h[8] << 8)) & 65535,
            this.h[7] = ((this.h[8] >>> 8) | (this.h[9] << 5)) & 65535,
            $ = this.h[0] + this.pad[0],
            this.h[0] = $ & 65535,
            D = 1;
          D < 8;
          D++
        )
          ($ = (((this.h[D] + this.pad[D]) | 0) + ($ >>> 16)) | 0), (this.h[D] = $ & 65535);
        (m[S + 0] = (this.h[0] >>> 0) & 255),
          (m[S + 1] = (this.h[0] >>> 8) & 255),
          (m[S + 2] = (this.h[1] >>> 0) & 255),
          (m[S + 3] = (this.h[1] >>> 8) & 255),
          (m[S + 4] = (this.h[2] >>> 0) & 255),
          (m[S + 5] = (this.h[2] >>> 8) & 255),
          (m[S + 6] = (this.h[3] >>> 0) & 255),
          (m[S + 7] = (this.h[3] >>> 8) & 255),
          (m[S + 8] = (this.h[4] >>> 0) & 255),
          (m[S + 9] = (this.h[4] >>> 8) & 255),
          (m[S + 10] = (this.h[5] >>> 0) & 255),
          (m[S + 11] = (this.h[5] >>> 8) & 255),
          (m[S + 12] = (this.h[6] >>> 0) & 255),
          (m[S + 13] = (this.h[6] >>> 8) & 255),
          (m[S + 14] = (this.h[7] >>> 0) & 255),
          (m[S + 15] = (this.h[7] >>> 8) & 255);
      }),
      (M.prototype.update = function (m, S, C) {
        var d, E;
        if (this.leftover) {
          for (E = 16 - this.leftover, E > C && (E = C), d = 0; d < E; d++) this.buffer[this.leftover + d] = m[S + d];
          if (((C -= E), (S += E), (this.leftover += E), this.leftover < 16)) return;
          this.blocks(this.buffer, 0, 16), (this.leftover = 0);
        }
        if ((C >= 16 && ((E = C - (C % 16)), this.blocks(m, S, E), (S += E), (C -= E)), C)) {
          for (d = 0; d < C; d++) this.buffer[this.leftover + d] = m[S + d];
          this.leftover += C;
        }
      });
    function L(m, S, C, d, E, $) {
      var D = new M($);
      return D.update(C, d, E), D.finish(m, S), 0;
    }
    function N(m, S, C, d, E, $) {
      var D = new Uint8Array(16);
      return L(D, 0, C, d, E, $), P(m, S, D, 0);
    }
    function j(m, S, C, d, E) {
      var $;
      if (C < 32) return -1;
      for (I(m, 0, S, 0, C, d, E), L(m, 16, m, 32, C - 32, m), $ = 0; $ < 16; $++) m[$] = 0;
      return 0;
    }
    function W(m, S, C, d, E) {
      var $,
        D = new Uint8Array(32);
      if (C < 32 || (k(D, 0, 32, d, E), N(S, 16, S, 32, C - 32, D) !== 0)) return -1;
      for (I(m, 0, S, 0, C, d, E), $ = 0; $ < 32; $++) m[$] = 0;
      return 0;
    }
    function oe(m, S) {
      var C;
      for (C = 0; C < 16; C++) m[C] = S[C] | 0;
    }
    function ye(m) {
      var S,
        C,
        d = 1;
      for (S = 0; S < 16; S++) (C = m[S] + d + 65535), (d = Math.floor(C / 65536)), (m[S] = C - d * 65536);
      m[0] += d - 1 + 37 * (d - 1);
    }
    function J(m, S, C) {
      for (var d, E = ~(C - 1), $ = 0; $ < 16; $++) (d = E & (m[$] ^ S[$])), (m[$] ^= d), (S[$] ^= d);
    }
    function ne(m, S) {
      var C,
        d,
        E,
        $ = n(),
        D = n();
      for (C = 0; C < 16; C++) D[C] = S[C];
      for (ye(D), ye(D), ye(D), d = 0; d < 2; d++) {
        for ($[0] = D[0] - 65517, C = 1; C < 15; C++) ($[C] = D[C] - 65535 - (($[C - 1] >> 16) & 1)), ($[C - 1] &= 65535);
        ($[15] = D[15] - 32767 - (($[14] >> 16) & 1)), (E = ($[15] >> 16) & 1), ($[14] &= 65535), J(D, $, 1 - E);
      }
      for (C = 0; C < 16; C++) (m[2 * C] = D[C] & 255), (m[2 * C + 1] = D[C] >> 8);
    }
    function se(m, S) {
      var C = new Uint8Array(32),
        d = new Uint8Array(32);
      return ne(C, m), ne(d, S), y(C, 0, d, 0);
    }
    function pe(m) {
      var S = new Uint8Array(32);
      return ne(S, m), S[0] & 1;
    }
    function Oe(m, S) {
      var C;
      for (C = 0; C < 16; C++) m[C] = S[2 * C] + (S[2 * C + 1] << 8);
      m[15] &= 32767;
    }
    function tt(m, S, C) {
      for (var d = 0; d < 16; d++) m[d] = S[d] + C[d];
    }
    function at(m, S, C) {
      for (var d = 0; d < 16; d++) m[d] = S[d] - C[d];
    }
    function Pe(m, S, C) {
      var d,
        E,
        $ = 0,
        D = 0,
        Q = 0,
        ie = 0,
        we = 0,
        ue = 0,
        nt = 0,
        fe = 0,
        ke = 0,
        Me = 0,
        Ne = 0,
        De = 0,
        Re = 0,
        Be = 0,
        Ie = 0,
        he = 0,
        xe = 0,
        ce = 0,
        me = 0,
        ve = 0,
        le = 0,
        F = 0,
        z = 0,
        ee = 0,
        Y = 0,
        X = 0,
        te = 0,
        Ee = 0,
        Ve = 0,
        Ue = 0,
        je = 0,
        R = C[0],
        Ke = C[1],
        rt = C[2],
        it = C[3],
        We = C[4],
        Je = C[5],
        et = C[6],
        Ot = C[7],
        ct = C[8],
        kt = C[9],
        Lt = C[10],
        Mt = C[11],
        Ft = C[12],
        nn = C[13],
        rn = C[14],
        on = C[15];
      (d = S[0]),
        ($ += d * R),
        (D += d * Ke),
        (Q += d * rt),
        (ie += d * it),
        (we += d * We),
        (ue += d * Je),
        (nt += d * et),
        (fe += d * Ot),
        (ke += d * ct),
        (Me += d * kt),
        (Ne += d * Lt),
        (De += d * Mt),
        (Re += d * Ft),
        (Be += d * nn),
        (Ie += d * rn),
        (he += d * on),
        (d = S[1]),
        (D += d * R),
        (Q += d * Ke),
        (ie += d * rt),
        (we += d * it),
        (ue += d * We),
        (nt += d * Je),
        (fe += d * et),
        (ke += d * Ot),
        (Me += d * ct),
        (Ne += d * kt),
        (De += d * Lt),
        (Re += d * Mt),
        (Be += d * Ft),
        (Ie += d * nn),
        (he += d * rn),
        (xe += d * on),
        (d = S[2]),
        (Q += d * R),
        (ie += d * Ke),
        (we += d * rt),
        (ue += d * it),
        (nt += d * We),
        (fe += d * Je),
        (ke += d * et),
        (Me += d * Ot),
        (Ne += d * ct),
        (De += d * kt),
        (Re += d * Lt),
        (Be += d * Mt),
        (Ie += d * Ft),
        (he += d * nn),
        (xe += d * rn),
        (ce += d * on),
        (d = S[3]),
        (ie += d * R),
        (we += d * Ke),
        (ue += d * rt),
        (nt += d * it),
        (fe += d * We),
        (ke += d * Je),
        (Me += d * et),
        (Ne += d * Ot),
        (De += d * ct),
        (Re += d * kt),
        (Be += d * Lt),
        (Ie += d * Mt),
        (he += d * Ft),
        (xe += d * nn),
        (ce += d * rn),
        (me += d * on),
        (d = S[4]),
        (we += d * R),
        (ue += d * Ke),
        (nt += d * rt),
        (fe += d * it),
        (ke += d * We),
        (Me += d * Je),
        (Ne += d * et),
        (De += d * Ot),
        (Re += d * ct),
        (Be += d * kt),
        (Ie += d * Lt),
        (he += d * Mt),
        (xe += d * Ft),
        (ce += d * nn),
        (me += d * rn),
        (ve += d * on),
        (d = S[5]),
        (ue += d * R),
        (nt += d * Ke),
        (fe += d * rt),
        (ke += d * it),
        (Me += d * We),
        (Ne += d * Je),
        (De += d * et),
        (Re += d * Ot),
        (Be += d * ct),
        (Ie += d * kt),
        (he += d * Lt),
        (xe += d * Mt),
        (ce += d * Ft),
        (me += d * nn),
        (ve += d * rn),
        (le += d * on),
        (d = S[6]),
        (nt += d * R),
        (fe += d * Ke),
        (ke += d * rt),
        (Me += d * it),
        (Ne += d * We),
        (De += d * Je),
        (Re += d * et),
        (Be += d * Ot),
        (Ie += d * ct),
        (he += d * kt),
        (xe += d * Lt),
        (ce += d * Mt),
        (me += d * Ft),
        (ve += d * nn),
        (le += d * rn),
        (F += d * on),
        (d = S[7]),
        (fe += d * R),
        (ke += d * Ke),
        (Me += d * rt),
        (Ne += d * it),
        (De += d * We),
        (Re += d * Je),
        (Be += d * et),
        (Ie += d * Ot),
        (he += d * ct),
        (xe += d * kt),
        (ce += d * Lt),
        (me += d * Mt),
        (ve += d * Ft),
        (le += d * nn),
        (F += d * rn),
        (z += d * on),
        (d = S[8]),
        (ke += d * R),
        (Me += d * Ke),
        (Ne += d * rt),
        (De += d * it),
        (Re += d * We),
        (Be += d * Je),
        (Ie += d * et),
        (he += d * Ot),
        (xe += d * ct),
        (ce += d * kt),
        (me += d * Lt),
        (ve += d * Mt),
        (le += d * Ft),
        (F += d * nn),
        (z += d * rn),
        (ee += d * on),
        (d = S[9]),
        (Me += d * R),
        (Ne += d * Ke),
        (De += d * rt),
        (Re += d * it),
        (Be += d * We),
        (Ie += d * Je),
        (he += d * et),
        (xe += d * Ot),
        (ce += d * ct),
        (me += d * kt),
        (ve += d * Lt),
        (le += d * Mt),
        (F += d * Ft),
        (z += d * nn),
        (ee += d * rn),
        (Y += d * on),
        (d = S[10]),
        (Ne += d * R),
        (De += d * Ke),
        (Re += d * rt),
        (Be += d * it),
        (Ie += d * We),
        (he += d * Je),
        (xe += d * et),
        (ce += d * Ot),
        (me += d * ct),
        (ve += d * kt),
        (le += d * Lt),
        (F += d * Mt),
        (z += d * Ft),
        (ee += d * nn),
        (Y += d * rn),
        (X += d * on),
        (d = S[11]),
        (De += d * R),
        (Re += d * Ke),
        (Be += d * rt),
        (Ie += d * it),
        (he += d * We),
        (xe += d * Je),
        (ce += d * et),
        (me += d * Ot),
        (ve += d * ct),
        (le += d * kt),
        (F += d * Lt),
        (z += d * Mt),
        (ee += d * Ft),
        (Y += d * nn),
        (X += d * rn),
        (te += d * on),
        (d = S[12]),
        (Re += d * R),
        (Be += d * Ke),
        (Ie += d * rt),
        (he += d * it),
        (xe += d * We),
        (ce += d * Je),
        (me += d * et),
        (ve += d * Ot),
        (le += d * ct),
        (F += d * kt),
        (z += d * Lt),
        (ee += d * Mt),
        (Y += d * Ft),
        (X += d * nn),
        (te += d * rn),
        (Ee += d * on),
        (d = S[13]),
        (Be += d * R),
        (Ie += d * Ke),
        (he += d * rt),
        (xe += d * it),
        (ce += d * We),
        (me += d * Je),
        (ve += d * et),
        (le += d * Ot),
        (F += d * ct),
        (z += d * kt),
        (ee += d * Lt),
        (Y += d * Mt),
        (X += d * Ft),
        (te += d * nn),
        (Ee += d * rn),
        (Ve += d * on),
        (d = S[14]),
        (Ie += d * R),
        (he += d * Ke),
        (xe += d * rt),
        (ce += d * it),
        (me += d * We),
        (ve += d * Je),
        (le += d * et),
        (F += d * Ot),
        (z += d * ct),
        (ee += d * kt),
        (Y += d * Lt),
        (X += d * Mt),
        (te += d * Ft),
        (Ee += d * nn),
        (Ve += d * rn),
        (Ue += d * on),
        (d = S[15]),
        (he += d * R),
        (xe += d * Ke),
        (ce += d * rt),
        (me += d * it),
        (ve += d * We),
        (le += d * Je),
        (F += d * et),
        (z += d * Ot),
        (ee += d * ct),
        (Y += d * kt),
        (X += d * Lt),
        (te += d * Mt),
        (Ee += d * Ft),
        (Ve += d * nn),
        (Ue += d * rn),
        (je += d * on),
        ($ += 38 * xe),
        (D += 38 * ce),
        (Q += 38 * me),
        (ie += 38 * ve),
        (we += 38 * le),
        (ue += 38 * F),
        (nt += 38 * z),
        (fe += 38 * ee),
        (ke += 38 * Y),
        (Me += 38 * X),
        (Ne += 38 * te),
        (De += 38 * Ee),
        (Re += 38 * Ve),
        (Be += 38 * Ue),
        (Ie += 38 * je),
        (E = 1),
        (d = $ + E + 65535),
        (E = Math.floor(d / 65536)),
        ($ = d - E * 65536),
        (d = D + E + 65535),
        (E = Math.floor(d / 65536)),
        (D = d - E * 65536),
        (d = Q + E + 65535),
        (E = Math.floor(d / 65536)),
        (Q = d - E * 65536),
        (d = ie + E + 65535),
        (E = Math.floor(d / 65536)),
        (ie = d - E * 65536),
        (d = we + E + 65535),
        (E = Math.floor(d / 65536)),
        (we = d - E * 65536),
        (d = ue + E + 65535),
        (E = Math.floor(d / 65536)),
        (ue = d - E * 65536),
        (d = nt + E + 65535),
        (E = Math.floor(d / 65536)),
        (nt = d - E * 65536),
        (d = fe + E + 65535),
        (E = Math.floor(d / 65536)),
        (fe = d - E * 65536),
        (d = ke + E + 65535),
        (E = Math.floor(d / 65536)),
        (ke = d - E * 65536),
        (d = Me + E + 65535),
        (E = Math.floor(d / 65536)),
        (Me = d - E * 65536),
        (d = Ne + E + 65535),
        (E = Math.floor(d / 65536)),
        (Ne = d - E * 65536),
        (d = De + E + 65535),
        (E = Math.floor(d / 65536)),
        (De = d - E * 65536),
        (d = Re + E + 65535),
        (E = Math.floor(d / 65536)),
        (Re = d - E * 65536),
        (d = Be + E + 65535),
        (E = Math.floor(d / 65536)),
        (Be = d - E * 65536),
        (d = Ie + E + 65535),
        (E = Math.floor(d / 65536)),
        (Ie = d - E * 65536),
        (d = he + E + 65535),
        (E = Math.floor(d / 65536)),
        (he = d - E * 65536),
        ($ += E - 1 + 37 * (E - 1)),
        (E = 1),
        (d = $ + E + 65535),
        (E = Math.floor(d / 65536)),
        ($ = d - E * 65536),
        (d = D + E + 65535),
        (E = Math.floor(d / 65536)),
        (D = d - E * 65536),
        (d = Q + E + 65535),
        (E = Math.floor(d / 65536)),
        (Q = d - E * 65536),
        (d = ie + E + 65535),
        (E = Math.floor(d / 65536)),
        (ie = d - E * 65536),
        (d = we + E + 65535),
        (E = Math.floor(d / 65536)),
        (we = d - E * 65536),
        (d = ue + E + 65535),
        (E = Math.floor(d / 65536)),
        (ue = d - E * 65536),
        (d = nt + E + 65535),
        (E = Math.floor(d / 65536)),
        (nt = d - E * 65536),
        (d = fe + E + 65535),
        (E = Math.floor(d / 65536)),
        (fe = d - E * 65536),
        (d = ke + E + 65535),
        (E = Math.floor(d / 65536)),
        (ke = d - E * 65536),
        (d = Me + E + 65535),
        (E = Math.floor(d / 65536)),
        (Me = d - E * 65536),
        (d = Ne + E + 65535),
        (E = Math.floor(d / 65536)),
        (Ne = d - E * 65536),
        (d = De + E + 65535),
        (E = Math.floor(d / 65536)),
        (De = d - E * 65536),
        (d = Re + E + 65535),
        (E = Math.floor(d / 65536)),
        (Re = d - E * 65536),
        (d = Be + E + 65535),
        (E = Math.floor(d / 65536)),
        (Be = d - E * 65536),
        (d = Ie + E + 65535),
        (E = Math.floor(d / 65536)),
        (Ie = d - E * 65536),
        (d = he + E + 65535),
        (E = Math.floor(d / 65536)),
        (he = d - E * 65536),
        ($ += E - 1 + 37 * (E - 1)),
        (m[0] = $),
        (m[1] = D),
        (m[2] = Q),
        (m[3] = ie),
        (m[4] = we),
        (m[5] = ue),
        (m[6] = nt),
        (m[7] = fe),
        (m[8] = ke),
        (m[9] = Me),
        (m[10] = Ne),
        (m[11] = De),
        (m[12] = Re),
        (m[13] = Be),
        (m[14] = Ie),
        (m[15] = he);
    }
    function Ye(m, S) {
      Pe(m, S, S);
    }
    function tn(m, S) {
      var C = n(),
        d;
      for (d = 0; d < 16; d++) C[d] = S[d];
      for (d = 253; d >= 0; d--) Ye(C, C), d !== 2 && d !== 4 && Pe(C, C, S);
      for (d = 0; d < 16; d++) m[d] = C[d];
    }
    function G(m, S) {
      var C = n(),
        d;
      for (d = 0; d < 16; d++) C[d] = S[d];
      for (d = 250; d >= 0; d--) Ye(C, C), d !== 1 && Pe(C, C, S);
      for (d = 0; d < 16; d++) m[d] = C[d];
    }
    function K(m, S, C) {
      var d = new Uint8Array(32),
        E = new Float64Array(80),
        $,
        D,
        Q = n(),
        ie = n(),
        we = n(),
        ue = n(),
        nt = n(),
        fe = n();
      for (D = 0; D < 31; D++) d[D] = S[D];
      for (d[31] = (S[31] & 127) | 64, d[0] &= 248, Oe(E, C), D = 0; D < 16; D++) (ie[D] = E[D]), (ue[D] = Q[D] = we[D] = 0);
      for (Q[0] = ue[0] = 1, D = 254; D >= 0; --D)
        ($ = (d[D >>> 3] >>> (D & 7)) & 1),
          J(Q, ie, $),
          J(we, ue, $),
          tt(nt, Q, we),
          at(Q, Q, we),
          tt(we, ie, ue),
          at(ie, ie, ue),
          Ye(ue, nt),
          Ye(fe, Q),
          Pe(Q, we, Q),
          Pe(we, ie, nt),
          tt(nt, Q, we),
          at(Q, Q, we),
          Ye(ie, Q),
          at(we, ue, fe),
          Pe(Q, we, l),
          tt(Q, Q, ue),
          Pe(we, we, Q),
          Pe(Q, ue, fe),
          Pe(ue, ie, E),
          Ye(ie, nt),
          J(Q, ie, $),
          J(we, ue, $);
      for (D = 0; D < 16; D++) (E[D + 16] = Q[D]), (E[D + 32] = we[D]), (E[D + 48] = ie[D]), (E[D + 64] = ue[D]);
      var ke = E.subarray(32),
        Me = E.subarray(16);
      return tn(ke, ke), Pe(Me, Me, ke), ne(m, Me), 0;
    }
    function U(m, S) {
      return K(m, S, o);
    }
    function q(m, S) {
      return r(S, 32), U(m, S);
    }
    function Z(m, S, C) {
      var d = new Uint8Array(32);
      return K(d, C, S), _(m, i, d, O);
    }
    var ae = j,
      Ce = W;
    function be(m, S, C, d, E, $) {
      var D = new Uint8Array(32);
      return Z(D, E, $), ae(m, S, C, d, D);
    }
    function lt(m, S, C, d, E, $) {
      var D = new Uint8Array(32);
      return Z(D, E, $), Ce(m, S, C, d, D);
    }
    var dt = [
      1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579,
      2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113,
      2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122,
      1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
      1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
      1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657,
      3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556,
      3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815,
      1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614,
      3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
      685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316,
      1246189591,
    ];
    function Te(m, S, C, d) {
      for (
        var E = new Int32Array(16),
          $ = new Int32Array(16),
          D,
          Q,
          ie,
          we,
          ue,
          nt,
          fe,
          ke,
          Me,
          Ne,
          De,
          Re,
          Be,
          Ie,
          he,
          xe,
          ce,
          me,
          ve,
          le,
          F,
          z,
          ee,
          Y,
          X,
          te,
          Ee = m[0],
          Ve = m[1],
          Ue = m[2],
          je = m[3],
          R = m[4],
          Ke = m[5],
          rt = m[6],
          it = m[7],
          We = S[0],
          Je = S[1],
          et = S[2],
          Ot = S[3],
          ct = S[4],
          kt = S[5],
          Lt = S[6],
          Mt = S[7],
          Ft = 0;
        d >= 128;

      ) {
        for (ve = 0; ve < 16; ve++)
          (le = 8 * ve + Ft),
            (E[ve] = (C[le + 0] << 24) | (C[le + 1] << 16) | (C[le + 2] << 8) | C[le + 3]),
            ($[ve] = (C[le + 4] << 24) | (C[le + 5] << 16) | (C[le + 6] << 8) | C[le + 7]);
        for (ve = 0; ve < 80; ve++)
          if (
            ((D = Ee),
            (Q = Ve),
            (ie = Ue),
            (we = je),
            (ue = R),
            (nt = Ke),
            (fe = rt),
            (ke = it),
            (Me = We),
            (Ne = Je),
            (De = et),
            (Re = Ot),
            (Be = ct),
            (Ie = kt),
            (he = Lt),
            (xe = Mt),
            (F = it),
            (z = Mt),
            (ee = z & 65535),
            (Y = z >>> 16),
            (X = F & 65535),
            (te = F >>> 16),
            (F = ((R >>> 14) | (ct << (32 - 14))) ^ ((R >>> 18) | (ct << (32 - 18))) ^ ((ct >>> (41 - 32)) | (R << (32 - (41 - 32))))),
            (z = ((ct >>> 14) | (R << (32 - 14))) ^ ((ct >>> 18) | (R << (32 - 18))) ^ ((R >>> (41 - 32)) | (ct << (32 - (41 - 32))))),
            (ee += z & 65535),
            (Y += z >>> 16),
            (X += F & 65535),
            (te += F >>> 16),
            (F = (R & Ke) ^ (~R & rt)),
            (z = (ct & kt) ^ (~ct & Lt)),
            (ee += z & 65535),
            (Y += z >>> 16),
            (X += F & 65535),
            (te += F >>> 16),
            (F = dt[ve * 2]),
            (z = dt[ve * 2 + 1]),
            (ee += z & 65535),
            (Y += z >>> 16),
            (X += F & 65535),
            (te += F >>> 16),
            (F = E[ve % 16]),
            (z = $[ve % 16]),
            (ee += z & 65535),
            (Y += z >>> 16),
            (X += F & 65535),
            (te += F >>> 16),
            (Y += ee >>> 16),
            (X += Y >>> 16),
            (te += X >>> 16),
            (ce = (X & 65535) | (te << 16)),
            (me = (ee & 65535) | (Y << 16)),
            (F = ce),
            (z = me),
            (ee = z & 65535),
            (Y = z >>> 16),
            (X = F & 65535),
            (te = F >>> 16),
            (F = ((Ee >>> 28) | (We << (32 - 28))) ^ ((We >>> (34 - 32)) | (Ee << (32 - (34 - 32)))) ^ ((We >>> (39 - 32)) | (Ee << (32 - (39 - 32))))),
            (z = ((We >>> 28) | (Ee << (32 - 28))) ^ ((Ee >>> (34 - 32)) | (We << (32 - (34 - 32)))) ^ ((Ee >>> (39 - 32)) | (We << (32 - (39 - 32))))),
            (ee += z & 65535),
            (Y += z >>> 16),
            (X += F & 65535),
            (te += F >>> 16),
            (F = (Ee & Ve) ^ (Ee & Ue) ^ (Ve & Ue)),
            (z = (We & Je) ^ (We & et) ^ (Je & et)),
            (ee += z & 65535),
            (Y += z >>> 16),
            (X += F & 65535),
            (te += F >>> 16),
            (Y += ee >>> 16),
            (X += Y >>> 16),
            (te += X >>> 16),
            (ke = (X & 65535) | (te << 16)),
            (xe = (ee & 65535) | (Y << 16)),
            (F = we),
            (z = Re),
            (ee = z & 65535),
            (Y = z >>> 16),
            (X = F & 65535),
            (te = F >>> 16),
            (F = ce),
            (z = me),
            (ee += z & 65535),
            (Y += z >>> 16),
            (X += F & 65535),
            (te += F >>> 16),
            (Y += ee >>> 16),
            (X += Y >>> 16),
            (te += X >>> 16),
            (we = (X & 65535) | (te << 16)),
            (Re = (ee & 65535) | (Y << 16)),
            (Ve = D),
            (Ue = Q),
            (je = ie),
            (R = we),
            (Ke = ue),
            (rt = nt),
            (it = fe),
            (Ee = ke),
            (Je = Me),
            (et = Ne),
            (Ot = De),
            (ct = Re),
            (kt = Be),
            (Lt = Ie),
            (Mt = he),
            (We = xe),
            ve % 16 === 15)
          )
            for (le = 0; le < 16; le++)
              (F = E[le]),
                (z = $[le]),
                (ee = z & 65535),
                (Y = z >>> 16),
                (X = F & 65535),
                (te = F >>> 16),
                (F = E[(le + 9) % 16]),
                (z = $[(le + 9) % 16]),
                (ee += z & 65535),
                (Y += z >>> 16),
                (X += F & 65535),
                (te += F >>> 16),
                (ce = E[(le + 1) % 16]),
                (me = $[(le + 1) % 16]),
                (F = ((ce >>> 1) | (me << (32 - 1))) ^ ((ce >>> 8) | (me << (32 - 8))) ^ (ce >>> 7)),
                (z = ((me >>> 1) | (ce << (32 - 1))) ^ ((me >>> 8) | (ce << (32 - 8))) ^ ((me >>> 7) | (ce << (32 - 7)))),
                (ee += z & 65535),
                (Y += z >>> 16),
                (X += F & 65535),
                (te += F >>> 16),
                (ce = E[(le + 14) % 16]),
                (me = $[(le + 14) % 16]),
                (F = ((ce >>> 19) | (me << (32 - 19))) ^ ((me >>> (61 - 32)) | (ce << (32 - (61 - 32)))) ^ (ce >>> 6)),
                (z = ((me >>> 19) | (ce << (32 - 19))) ^ ((ce >>> (61 - 32)) | (me << (32 - (61 - 32)))) ^ ((me >>> 6) | (ce << (32 - 6)))),
                (ee += z & 65535),
                (Y += z >>> 16),
                (X += F & 65535),
                (te += F >>> 16),
                (Y += ee >>> 16),
                (X += Y >>> 16),
                (te += X >>> 16),
                (E[le] = (X & 65535) | (te << 16)),
                ($[le] = (ee & 65535) | (Y << 16));
        (F = Ee),
          (z = We),
          (ee = z & 65535),
          (Y = z >>> 16),
          (X = F & 65535),
          (te = F >>> 16),
          (F = m[0]),
          (z = S[0]),
          (ee += z & 65535),
          (Y += z >>> 16),
          (X += F & 65535),
          (te += F >>> 16),
          (Y += ee >>> 16),
          (X += Y >>> 16),
          (te += X >>> 16),
          (m[0] = Ee = (X & 65535) | (te << 16)),
          (S[0] = We = (ee & 65535) | (Y << 16)),
          (F = Ve),
          (z = Je),
          (ee = z & 65535),
          (Y = z >>> 16),
          (X = F & 65535),
          (te = F >>> 16),
          (F = m[1]),
          (z = S[1]),
          (ee += z & 65535),
          (Y += z >>> 16),
          (X += F & 65535),
          (te += F >>> 16),
          (Y += ee >>> 16),
          (X += Y >>> 16),
          (te += X >>> 16),
          (m[1] = Ve = (X & 65535) | (te << 16)),
          (S[1] = Je = (ee & 65535) | (Y << 16)),
          (F = Ue),
          (z = et),
          (ee = z & 65535),
          (Y = z >>> 16),
          (X = F & 65535),
          (te = F >>> 16),
          (F = m[2]),
          (z = S[2]),
          (ee += z & 65535),
          (Y += z >>> 16),
          (X += F & 65535),
          (te += F >>> 16),
          (Y += ee >>> 16),
          (X += Y >>> 16),
          (te += X >>> 16),
          (m[2] = Ue = (X & 65535) | (te << 16)),
          (S[2] = et = (ee & 65535) | (Y << 16)),
          (F = je),
          (z = Ot),
          (ee = z & 65535),
          (Y = z >>> 16),
          (X = F & 65535),
          (te = F >>> 16),
          (F = m[3]),
          (z = S[3]),
          (ee += z & 65535),
          (Y += z >>> 16),
          (X += F & 65535),
          (te += F >>> 16),
          (Y += ee >>> 16),
          (X += Y >>> 16),
          (te += X >>> 16),
          (m[3] = je = (X & 65535) | (te << 16)),
          (S[3] = Ot = (ee & 65535) | (Y << 16)),
          (F = R),
          (z = ct),
          (ee = z & 65535),
          (Y = z >>> 16),
          (X = F & 65535),
          (te = F >>> 16),
          (F = m[4]),
          (z = S[4]),
          (ee += z & 65535),
          (Y += z >>> 16),
          (X += F & 65535),
          (te += F >>> 16),
          (Y += ee >>> 16),
          (X += Y >>> 16),
          (te += X >>> 16),
          (m[4] = R = (X & 65535) | (te << 16)),
          (S[4] = ct = (ee & 65535) | (Y << 16)),
          (F = Ke),
          (z = kt),
          (ee = z & 65535),
          (Y = z >>> 16),
          (X = F & 65535),
          (te = F >>> 16),
          (F = m[5]),
          (z = S[5]),
          (ee += z & 65535),
          (Y += z >>> 16),
          (X += F & 65535),
          (te += F >>> 16),
          (Y += ee >>> 16),
          (X += Y >>> 16),
          (te += X >>> 16),
          (m[5] = Ke = (X & 65535) | (te << 16)),
          (S[5] = kt = (ee & 65535) | (Y << 16)),
          (F = rt),
          (z = Lt),
          (ee = z & 65535),
          (Y = z >>> 16),
          (X = F & 65535),
          (te = F >>> 16),
          (F = m[6]),
          (z = S[6]),
          (ee += z & 65535),
          (Y += z >>> 16),
          (X += F & 65535),
          (te += F >>> 16),
          (Y += ee >>> 16),
          (X += Y >>> 16),
          (te += X >>> 16),
          (m[6] = rt = (X & 65535) | (te << 16)),
          (S[6] = Lt = (ee & 65535) | (Y << 16)),
          (F = it),
          (z = Mt),
          (ee = z & 65535),
          (Y = z >>> 16),
          (X = F & 65535),
          (te = F >>> 16),
          (F = m[7]),
          (z = S[7]),
          (ee += z & 65535),
          (Y += z >>> 16),
          (X += F & 65535),
          (te += F >>> 16),
          (Y += ee >>> 16),
          (X += Y >>> 16),
          (te += X >>> 16),
          (m[7] = it = (X & 65535) | (te << 16)),
          (S[7] = Mt = (ee & 65535) | (Y << 16)),
          (Ft += 128),
          (d -= 128);
      }
      return d;
    }
    function At(m, S, C) {
      var d = new Int32Array(8),
        E = new Int32Array(8),
        $ = new Uint8Array(256),
        D,
        Q = C;
      for (
        d[0] = 1779033703,
          d[1] = 3144134277,
          d[2] = 1013904242,
          d[3] = 2773480762,
          d[4] = 1359893119,
          d[5] = 2600822924,
          d[6] = 528734635,
          d[7] = 1541459225,
          E[0] = 4089235720,
          E[1] = 2227873595,
          E[2] = 4271175723,
          E[3] = 1595750129,
          E[4] = 2917565137,
          E[5] = 725511199,
          E[6] = 4215389547,
          E[7] = 327033209,
          Te(d, E, S, C),
          C %= 128,
          D = 0;
        D < C;
        D++
      )
        $[D] = S[Q - C + D];
      for ($[C] = 128, C = 256 - 128 * (C < 112 ? 1 : 0), $[C - 9] = 0, g($, C - 8, (Q / 536870912) | 0, Q << 3), Te(d, E, $, C), D = 0; D < 8; D++) g(m, 8 * D, d[D], E[D]);
      return 0;
    }
    function $t(m, S) {
      var C = n(),
        d = n(),
        E = n(),
        $ = n(),
        D = n(),
        Q = n(),
        ie = n(),
        we = n(),
        ue = n();
      at(C, m[1], m[0]),
        at(ue, S[1], S[0]),
        Pe(C, C, ue),
        tt(d, m[0], m[1]),
        tt(ue, S[0], S[1]),
        Pe(d, d, ue),
        Pe(E, m[3], S[3]),
        Pe(E, E, c),
        Pe($, m[2], S[2]),
        tt($, $, $),
        at(D, d, C),
        at(Q, $, E),
        tt(ie, $, E),
        tt(we, d, C),
        Pe(m[0], D, Q),
        Pe(m[1], we, ie),
        Pe(m[2], ie, Q),
        Pe(m[3], D, we);
    }
    function ti(m, S, C) {
      var d;
      for (d = 0; d < 4; d++) J(m[d], S[d], C);
    }
    function Ht(m, S) {
      var C = n(),
        d = n(),
        E = n();
      tn(E, S[2]), Pe(C, S[0], E), Pe(d, S[1], E), ne(m, d), (m[31] ^= pe(C) << 7);
    }
    function _n(m, S, C) {
      var d, E;
      for (oe(m[0], s), oe(m[1], a), oe(m[2], a), oe(m[3], s), E = 255; E >= 0; --E) (d = (C[(E / 8) | 0] >> (E & 7)) & 1), ti(m, S, d), $t(S, m), $t(m, m), ti(m, S, d);
    }
    function An(m, S) {
      var C = [n(), n(), n(), n()];
      oe(C[0], f), oe(C[1], h), oe(C[2], a), Pe(C[3], f, h), _n(m, C, S);
    }
    function $e(m, S, C) {
      var d = new Uint8Array(64),
        E = [n(), n(), n(), n()],
        $;
      for (C || r(S, 32), At(d, S, 32), d[0] &= 248, d[31] &= 127, d[31] |= 64, An(E, d), Ht(m, E), $ = 0; $ < 32; $++) S[$ + 32] = m[$];
      return 0;
    }
    var Qe = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
    function Le(m, S) {
      var C, d, E, $;
      for (d = 63; d >= 32; --d) {
        for (C = 0, E = d - 32, $ = d - 12; E < $; ++E) (S[E] += C - 16 * S[d] * Qe[E - (d - 32)]), (C = Math.floor((S[E] + 128) / 256)), (S[E] -= C * 256);
        (S[E] += C), (S[d] = 0);
      }
      for (C = 0, E = 0; E < 32; E++) (S[E] += C - (S[31] >> 4) * Qe[E]), (C = S[E] >> 8), (S[E] &= 255);
      for (E = 0; E < 32; E++) S[E] -= C * Qe[E];
      for (d = 0; d < 32; d++) (S[d + 1] += S[d] >> 8), (m[d] = S[d] & 255);
    }
    function ut(m) {
      var S = new Float64Array(64),
        C;
      for (C = 0; C < 64; C++) S[C] = m[C];
      for (C = 0; C < 64; C++) m[C] = 0;
      Le(m, S);
    }
    function nr(m, S, C, d) {
      var E = new Uint8Array(64),
        $ = new Uint8Array(64),
        D = new Uint8Array(64),
        Q,
        ie,
        we = new Float64Array(64),
        ue = [n(), n(), n(), n()];
      At(E, d, 32), (E[0] &= 248), (E[31] &= 127), (E[31] |= 64);
      var nt = C + 64;
      for (Q = 0; Q < C; Q++) m[64 + Q] = S[Q];
      for (Q = 0; Q < 32; Q++) m[32 + Q] = E[32 + Q];
      for (At(D, m.subarray(32), C + 32), ut(D), An(ue, D), Ht(m, ue), Q = 32; Q < 64; Q++) m[Q] = d[Q];
      for (At($, m, C + 64), ut($), Q = 0; Q < 64; Q++) we[Q] = 0;
      for (Q = 0; Q < 32; Q++) we[Q] = D[Q];
      for (Q = 0; Q < 32; Q++) for (ie = 0; ie < 32; ie++) we[Q + ie] += $[Q] * E[ie];
      return Le(m.subarray(32), we), nt;
    }
    function Wn(m, S) {
      var C = n(),
        d = n(),
        E = n(),
        $ = n(),
        D = n(),
        Q = n(),
        ie = n();
      return (
        oe(m[2], a),
        Oe(m[1], S),
        Ye(E, m[1]),
        Pe($, E, u),
        at(E, E, m[2]),
        tt($, m[2], $),
        Ye(D, $),
        Ye(Q, D),
        Pe(ie, Q, D),
        Pe(C, ie, E),
        Pe(C, C, $),
        G(C, C),
        Pe(C, C, E),
        Pe(C, C, $),
        Pe(C, C, $),
        Pe(m[0], C, $),
        Ye(d, m[0]),
        Pe(d, d, $),
        se(d, E) && Pe(m[0], m[0], p),
        Ye(d, m[0]),
        Pe(d, d, $),
        se(d, E) ? -1 : (pe(m[0]) === S[31] >> 7 && at(m[0], s, m[0]), Pe(m[3], m[0], m[1]), 0)
      );
    }
    function Xe(m, S, C, d) {
      var E,
        $ = new Uint8Array(32),
        D = new Uint8Array(64),
        Q = [n(), n(), n(), n()],
        ie = [n(), n(), n(), n()];
      if (C < 64 || Wn(ie, d)) return -1;
      for (E = 0; E < C; E++) m[E] = S[E];
      for (E = 0; E < 32; E++) m[E + 32] = d[E];
      if ((At(D, m, C), ut(D), _n(Q, ie, D), An(ie, S.subarray(32)), $t(Q, ie), Ht($, Q), (C -= 64), y(S, 0, $, 0))) {
        for (E = 0; E < C; E++) m[E] = 0;
        return -1;
      }
      for (E = 0; E < C; E++) m[E] = S[E + 64];
      return C;
    }
    var _e = 32,
      hn = 24,
      Ar = 32,
      kr = 16,
      Cs = 32,
      rl = 32,
      Ss = 32,
      bs = 32,
      Uc = 32,
      Ah = hn,
      x5 = Ar,
      C5 = kr,
      Lr = 64,
      Fi = 32,
      bo = 64,
      zc = 32,
      Wc = 64;
    t.lowlevel = {
      crypto_core_hsalsa20: _,
      crypto_stream_xor: I,
      crypto_stream: k,
      crypto_stream_salsa20_xor: B,
      crypto_stream_salsa20: A,
      crypto_onetimeauth: L,
      crypto_onetimeauth_verify: N,
      crypto_verify_16: P,
      crypto_verify_32: y,
      crypto_secretbox: j,
      crypto_secretbox_open: W,
      crypto_scalarmult: K,
      crypto_scalarmult_base: U,
      crypto_box_beforenm: Z,
      crypto_box_afternm: ae,
      crypto_box: be,
      crypto_box_open: lt,
      crypto_box_keypair: q,
      crypto_hash: At,
      crypto_sign: nr,
      crypto_sign_keypair: $e,
      crypto_sign_open: Xe,
      crypto_secretbox_KEYBYTES: _e,
      crypto_secretbox_NONCEBYTES: hn,
      crypto_secretbox_ZEROBYTES: Ar,
      crypto_secretbox_BOXZEROBYTES: kr,
      crypto_scalarmult_BYTES: Cs,
      crypto_scalarmult_SCALARBYTES: rl,
      crypto_box_PUBLICKEYBYTES: Ss,
      crypto_box_SECRETKEYBYTES: bs,
      crypto_box_BEFORENMBYTES: Uc,
      crypto_box_NONCEBYTES: Ah,
      crypto_box_ZEROBYTES: x5,
      crypto_box_BOXZEROBYTES: C5,
      crypto_sign_BYTES: Lr,
      crypto_sign_PUBLICKEYBYTES: Fi,
      crypto_sign_SECRETKEYBYTES: bo,
      crypto_sign_SEEDBYTES: zc,
      crypto_hash_BYTES: Wc,
      gf: n,
      D: u,
      L: Qe,
      pack25519: ne,
      unpack25519: Oe,
      M: Pe,
      A: tt,
      S: Ye,
      Z: at,
      pow2523: G,
      add: $t,
      set25519: oe,
      modL: Le,
      scalarmult: _n,
      scalarbase: An,
    };
    function kh(m, S) {
      if (m.length !== _e) throw new Error("bad key size");
      if (S.length !== hn) throw new Error("bad nonce size");
    }
    function S5(m, S) {
      if (m.length !== Ss) throw new Error("bad public key size");
      if (S.length !== bs) throw new Error("bad secret key size");
    }
    function kn() {
      for (var m = 0; m < arguments.length; m++) if (!(arguments[m] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array");
    }
    function Lh(m) {
      for (var S = 0; S < m.length; S++) m[S] = 0;
    }
    (t.randomBytes = function (m) {
      var S = new Uint8Array(m);
      return r(S, m), S;
    }),
      (t.secretbox = function (m, S, C) {
        kn(m, S, C), kh(C, S);
        for (var d = new Uint8Array(Ar + m.length), E = new Uint8Array(d.length), $ = 0; $ < m.length; $++) d[$ + Ar] = m[$];
        return j(E, d, d.length, S, C), E.subarray(kr);
      }),
      (t.secretbox.open = function (m, S, C) {
        kn(m, S, C), kh(C, S);
        for (var d = new Uint8Array(kr + m.length), E = new Uint8Array(d.length), $ = 0; $ < m.length; $++) d[$ + kr] = m[$];
        return d.length < 32 || W(E, d, d.length, S, C) !== 0 ? null : E.subarray(Ar);
      }),
      (t.secretbox.keyLength = _e),
      (t.secretbox.nonceLength = hn),
      (t.secretbox.overheadLength = kr),
      (t.scalarMult = function (m, S) {
        if ((kn(m, S), m.length !== rl)) throw new Error("bad n size");
        if (S.length !== Cs) throw new Error("bad p size");
        var C = new Uint8Array(Cs);
        return K(C, m, S), C;
      }),
      (t.scalarMult.base = function (m) {
        if ((kn(m), m.length !== rl)) throw new Error("bad n size");
        var S = new Uint8Array(Cs);
        return U(S, m), S;
      }),
      (t.scalarMult.scalarLength = rl),
      (t.scalarMult.groupElementLength = Cs),
      (t.box = function (m, S, C, d) {
        var E = t.box.before(C, d);
        return t.secretbox(m, S, E);
      }),
      (t.box.before = function (m, S) {
        kn(m, S), S5(m, S);
        var C = new Uint8Array(Uc);
        return Z(C, m, S), C;
      }),
      (t.box.after = t.secretbox),
      (t.box.open = function (m, S, C, d) {
        var E = t.box.before(C, d);
        return t.secretbox.open(m, S, E);
      }),
      (t.box.open.after = t.secretbox.open),
      (t.box.keyPair = function () {
        var m = new Uint8Array(Ss),
          S = new Uint8Array(bs);
        return q(m, S), { publicKey: m, secretKey: S };
      }),
      (t.box.keyPair.fromSecretKey = function (m) {
        if ((kn(m), m.length !== bs)) throw new Error("bad secret key size");
        var S = new Uint8Array(Ss);
        return U(S, m), { publicKey: S, secretKey: new Uint8Array(m) };
      }),
      (t.box.publicKeyLength = Ss),
      (t.box.secretKeyLength = bs),
      (t.box.sharedKeyLength = Uc),
      (t.box.nonceLength = Ah),
      (t.box.overheadLength = t.secretbox.overheadLength),
      (t.sign = function (m, S) {
        if ((kn(m, S), S.length !== bo)) throw new Error("bad secret key size");
        var C = new Uint8Array(Lr + m.length);
        return nr(C, m, m.length, S), C;
      }),
      (t.sign.open = function (m, S) {
        if ((kn(m, S), S.length !== Fi)) throw new Error("bad public key size");
        var C = new Uint8Array(m.length),
          d = Xe(C, m, m.length, S);
        if (d < 0) return null;
        for (var E = new Uint8Array(d), $ = 0; $ < E.length; $++) E[$] = C[$];
        return E;
      }),
      (t.sign.detached = function (m, S) {
        for (var C = t.sign(m, S), d = new Uint8Array(Lr), E = 0; E < d.length; E++) d[E] = C[E];
        return d;
      }),
      (t.sign.detached.verify = function (m, S, C) {
        if ((kn(m, S, C), S.length !== Lr)) throw new Error("bad signature size");
        if (C.length !== Fi) throw new Error("bad public key size");
        var d = new Uint8Array(Lr + m.length),
          E = new Uint8Array(Lr + m.length),
          $;
        for ($ = 0; $ < Lr; $++) d[$] = S[$];
        for ($ = 0; $ < m.length; $++) d[$ + Lr] = m[$];
        return Xe(E, d, d.length, C) >= 0;
      }),
      (t.sign.keyPair = function () {
        var m = new Uint8Array(Fi),
          S = new Uint8Array(bo);
        return $e(m, S), { publicKey: m, secretKey: S };
      }),
      (t.sign.keyPair.fromSecretKey = function (m) {
        if ((kn(m), m.length !== bo)) throw new Error("bad secret key size");
        for (var S = new Uint8Array(Fi), C = 0; C < S.length; C++) S[C] = m[32 + C];
        return { publicKey: S, secretKey: new Uint8Array(m) };
      }),
      (t.sign.keyPair.fromSeed = function (m) {
        if ((kn(m), m.length !== zc)) throw new Error("bad seed size");
        for (var S = new Uint8Array(Fi), C = new Uint8Array(bo), d = 0; d < 32; d++) C[d] = m[d];
        return $e(S, C, !0), { publicKey: S, secretKey: C };
      }),
      (t.sign.publicKeyLength = Fi),
      (t.sign.secretKeyLength = bo),
      (t.sign.seedLength = zc),
      (t.sign.signatureLength = Lr),
      (t.hash = function (m) {
        kn(m);
        var S = new Uint8Array(Wc);
        return At(S, m, m.length), S;
      }),
      (t.hash.hashLength = Wc),
      (t.verify = function (m, S) {
        return kn(m, S), m.length === 0 || S.length === 0 || m.length !== S.length ? !1 : v(m, 0, S, 0, m.length) === 0;
      }),
      (t.setPRNG = function (m) {
        r = m;
      }),
      (function () {
        var m = typeof self < "u" ? self.crypto || self.msCrypto : null;
        if (m && m.getRandomValues) {
          var S = 65536;
          t.setPRNG(function (C, d) {
            var E,
              $ = new Uint8Array(d);
            for (E = 0; E < d; E += S) m.getRandomValues($.subarray(E, E + Math.min(d - E, S)));
            for (E = 0; E < d; E++) C[E] = $[E];
            Lh($);
          });
        } else
          typeof xS < "u" &&
            ((m = bS),
            m &&
              m.randomBytes &&
              t.setPRNG(function (C, d) {
                var E,
                  $ = m.randomBytes(d);
                for (E = 0; E < d; E++) C[E] = $[E];
                Lh($);
              }));
      })();
  })(e.exports ? e.exports : (self.nacl = self.nacl || {}));
})(ty);
var ES = ty.exports;
const Pl = po(ES);
var li;
(function (e) {
  (e[(e.UNKNOWN_ERROR = 0)] = "UNKNOWN_ERROR"),
    (e[(e.BAD_REQUEST_ERROR = 1)] = "BAD_REQUEST_ERROR"),
    (e[(e.MANIFEST_NOT_FOUND_ERROR = 2)] = "MANIFEST_NOT_FOUND_ERROR"),
    (e[(e.MANIFEST_CONTENT_ERROR = 3)] = "MANIFEST_CONTENT_ERROR"),
    (e[(e.UNKNOWN_APP_ERROR = 100)] = "UNKNOWN_APP_ERROR"),
    (e[(e.USER_REJECTS_ERROR = 300)] = "USER_REJECTS_ERROR"),
    (e[(e.METHOD_NOT_SUPPORTED = 400)] = "METHOD_NOT_SUPPORTED");
})(li || (li = {}));
var Jm;
(function (e) {
  (e[(e.UNKNOWN_ERROR = 0)] = "UNKNOWN_ERROR"), (e[(e.METHOD_NOT_SUPPORTED = 400)] = "METHOD_NOT_SUPPORTED");
})(Jm || (Jm = {}));
var zo;
(function (e) {
  (e[(e.UNKNOWN_ERROR = 0)] = "UNKNOWN_ERROR"),
    (e[(e.BAD_REQUEST_ERROR = 1)] = "BAD_REQUEST_ERROR"),
    (e[(e.UNKNOWN_APP_ERROR = 100)] = "UNKNOWN_APP_ERROR"),
    (e[(e.USER_REJECTS_ERROR = 300)] = "USER_REJECTS_ERROR"),
    (e[(e.METHOD_NOT_SUPPORTED = 400)] = "METHOD_NOT_SUPPORTED");
})(zo || (zo = {}));
var e4;
(function (e) {
  (e[(e.UNKNOWN_ERROR = 0)] = "UNKNOWN_ERROR"),
    (e[(e.BAD_REQUEST_ERROR = 1)] = "BAD_REQUEST_ERROR"),
    (e[(e.UNKNOWN_APP_ERROR = 100)] = "UNKNOWN_APP_ERROR"),
    (e[(e.USER_REJECTS_ERROR = 300)] = "USER_REJECTS_ERROR"),
    (e[(e.METHOD_NOT_SUPPORTED = 400)] = "METHOD_NOT_SUPPORTED");
})(e4 || (e4 = {}));
var t4;
(function (e) {
  (e[(e.UNKNOWN_ERROR = 0)] = "UNKNOWN_ERROR"),
    (e[(e.BAD_REQUEST_ERROR = 1)] = "BAD_REQUEST_ERROR"),
    (e[(e.UNKNOWN_APP_ERROR = 100)] = "UNKNOWN_APP_ERROR"),
    (e[(e.METHOD_NOT_SUPPORTED = 400)] = "METHOD_NOT_SUPPORTED");
})(t4 || (t4 = {}));
var $u;
(function (e) {
  (e.MAINNET = "-239"), (e.TESTNET = "-3");
})($u || ($u = {}));
function TS(e, t) {
  const n = ka.encodeBase64(e);
  return t ? encodeURIComponent(n) : n;
}
function PS(e, t) {
  return t && (e = decodeURIComponent(e)), ka.decodeBase64(e);
}
function _S(e, t = !1) {
  let n;
  return e instanceof Uint8Array ? (n = e) : (typeof e != "string" && (e = JSON.stringify(e)), (n = ka.decodeUTF8(e))), TS(n, t);
}
function AS(e, t = !1) {
  const n = PS(e, t);
  return {
    toString() {
      return ka.encodeUTF8(n);
    },
    toObject() {
      try {
        return JSON.parse(ka.encodeUTF8(n));
      } catch {
        return null;
      }
    },
    toUint8Array() {
      return n;
    },
  };
}
const X1 = { encode: _S, decode: AS };
function kS(e, t) {
  const n = new Uint8Array(e.length + t.length);
  return n.set(e), n.set(t, e.length), n;
}
function LS(e, t) {
  if (t >= e.length) throw new Error("Index is out of buffer");
  const n = e.slice(0, t),
    r = e.slice(t);
  return [n, r];
}
function Of(e) {
  let t = "";
  return (
    e.forEach((n) => {
      t += ("0" + (n & 255).toString(16)).slice(-2);
    }),
    t
  );
}
function Du(e) {
  if (e.length % 2 !== 0) throw new Error(`Cannot convert ${e} to bytesArray`);
  const t = new Uint8Array(e.length / 2);
  for (let n = 0; n < e.length; n += 2) t[n / 2] = parseInt(e.slice(n, n + 2), 16);
  return t;
}
class h0 {
  constructor(t) {
    (this.nonceLength = 24), (this.keyPair = t ? this.createKeypairFromString(t) : this.createKeypair()), (this.sessionId = Of(this.keyPair.publicKey));
  }
  createKeypair() {
    return Pl.box.keyPair();
  }
  createKeypairFromString(t) {
    return { publicKey: Du(t.publicKey), secretKey: Du(t.secretKey) };
  }
  createNonce() {
    return Pl.randomBytes(this.nonceLength);
  }
  encrypt(t, n) {
    const r = new TextEncoder().encode(t),
      i = this.createNonce(),
      o = Pl.box(r, i, n, this.keyPair.secretKey);
    return kS(i, o);
  }
  decrypt(t, n) {
    const [r, i] = LS(t, this.nonceLength),
      o = Pl.box.open(i, r, n, this.keyPair.secretKey);
    if (!o)
      throw new Error(`Decryption error: 
 message: ${t.toString()} 
 sender pubkey: ${n.toString()} 
 keypair pubkey: ${this.keyPair.publicKey.toString()} 
 keypair secretkey: ${this.keyPair.secretKey.toString()}`);
    return new TextDecoder().decode(o);
  }
  stringifyKeypair() {
    return { publicKey: Of(this.keyPair.publicKey), secretKey: Of(this.keyPair.secretKey) };
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function MS(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Fe(e, t, n, r) {
  function i(o) {
    return o instanceof n
      ? o
      : new n(function (s) {
          s(o);
        });
  }
  return new (n || (n = Promise))(function (o, s) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        s(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      c.done ? o(c.value) : i(c.value).then(a, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
class ot extends Error {
  constructor(t, n) {
    super(t, n),
      (this.message = `${ot.prefix} ${this.constructor.name}${this.info ? ": " + this.info : ""}${
        t
          ? `
` + t
          : ""
      }`),
      Object.setPrototypeOf(this, ot.prototype);
  }
  get info() {
    return "";
  }
}
ot.prefix = "[TON_CONNECT_SDK_ERROR]";
class J1 extends ot {
  get info() {
    return "Passed DappMetadata is in incorrect format.";
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, J1.prototype);
  }
}
class Ac extends ot {
  get info() {
    return "Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest";
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ac.prototype);
  }
}
class kc extends ot {
  get info() {
    return "Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest";
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, kc.prototype);
  }
}
class eh extends ot {
  get info() {
    return "Wallet connection called but wallet already connected. To avoid the error, disconnect the wallet before doing a new connection.";
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, eh.prototype);
  }
}
class Nu extends ot {
  get info() {
    return "Send transaction or other protocol methods called while wallet is not connected.";
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Nu.prototype);
  }
}
function RS(e) {
  return "jsBridgeKey" in e;
}
class Lc extends ot {
  get info() {
    return "User rejects the action in the wallet.";
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Lc.prototype);
  }
}
class Mc extends ot {
  get info() {
    return "Request to the wallet contains errors.";
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Mc.prototype);
  }
}
class Rc extends ot {
  get info() {
    return "App tries to send rpc request to the injected wallet while not connected.";
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Rc.prototype);
  }
}
class th extends ot {
  get info() {
    return "There is an attempt to connect to the injected wallet while it is not exists in the webpage.";
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, th.prototype);
  }
}
class nh extends ot {
  get info() {
    return "Storage was not specified in the `DappMetadata` and default `localStorage` was not detected in the environment.";
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, nh.prototype);
  }
}
class rh extends ot {
  get info() {
    return "An error occurred while fetching the wallets list.";
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, rh.prototype);
  }
}
class Wo extends ot {
  get info() {
    return "Passed address is in incorrect format.";
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Wo.prototype);
  }
}
class Vu extends ot {
  get info() {
    return "Passed hex is in incorrect format.";
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Vu.prototype);
  }
}
class Li extends ot {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Li.prototype);
  }
}
const n4 = {
  [li.UNKNOWN_ERROR]: Li,
  [li.USER_REJECTS_ERROR]: Lc,
  [li.BAD_REQUEST_ERROR]: Mc,
  [li.UNKNOWN_APP_ERROR]: Rc,
  [li.MANIFEST_NOT_FOUND_ERROR]: kc,
  [li.MANIFEST_CONTENT_ERROR]: Ac,
};
class IS {
  parseError(t) {
    let n = Li;
    return t.code in n4 && (n = n4[t.code] || Li), new n(t.message);
  }
}
const OS = new IS();
class BS {
  isError(t) {
    return "error" in t;
  }
}
const r4 = { [zo.UNKNOWN_ERROR]: Li, [zo.USER_REJECTS_ERROR]: Lc, [zo.BAD_REQUEST_ERROR]: Mc, [zo.UNKNOWN_APP_ERROR]: Rc };
class $S extends BS {
  convertToRpcRequest(t) {
    return { method: "sendTransaction", params: [JSON.stringify(t)] };
  }
  parseAndThrowError(t) {
    let n = Li;
    throw (t.error.code in r4 && (n = r4[t.error.code] || Li), new n(t.error.message));
  }
  convertFromRpcResponse(t) {
    return { boc: t.result };
  }
}
const _l = new $S();
class DS {
  constructor(t, n) {
    (this.storage = t), (this.storeKey = "ton-connect-storage_http-bridge-gateway::" + n);
  }
  storeLastEventId(t) {
    return Fe(this, void 0, void 0, function* () {
      return this.storage.setItem(this.storeKey, t);
    });
  }
  removeLastEventId() {
    return Fe(this, void 0, void 0, function* () {
      return this.storage.removeItem(this.storeKey);
    });
  }
  getLastEventId() {
    return Fe(this, void 0, void 0, function* () {
      const t = yield this.storage.getItem(this.storeKey);
      return t || null;
    });
  }
}
function NS(e) {
  return e.slice(-1) === "/" ? e.slice(0, -1) : e;
}
function i4(e, t) {
  return NS(e) + "/" + t;
}
function La(e) {
  const t = new URL(e);
  return t.protocol === "tg:" || t.hostname === "t.me";
}
function ny(e) {
  return e.replaceAll(".", "%2E").replaceAll("-", "%2D").replaceAll("_", "%5F").replaceAll("&", "-").replaceAll("=", "__").replaceAll("%", "--");
}
class Bf {
  constructor(t, n, r, i, o) {
    (this.bridgeUrl = n),
      (this.sessionId = r),
      (this.listener = i),
      (this.errorsListener = o),
      (this.ssePath = "events"),
      (this.postPath = "message"),
      (this.heartbeatMessage = "heartbeat"),
      (this.defaultTtl = 300),
      (this.isClosed = !1),
      (this.bridgeGatewayStorage = new DS(t, n));
  }
  registerSession() {
    return Fe(this, void 0, void 0, function* () {
      const t = new URL(i4(this.bridgeUrl, this.ssePath));
      t.searchParams.append("client_id", this.sessionId);
      const n = yield this.bridgeGatewayStorage.getLastEventId();
      if (!this.isClosed)
        return (
          n && t.searchParams.append("last_event_id", n),
          (this.eventSource = new EventSource(t.toString())),
          new Promise((r, i) => {
            (this.eventSource.onerror = i),
              (this.eventSource.onopen = () => {
                (this.eventSource.onerror = this.errorsHandler.bind(this)), (this.eventSource.onmessage = this.messagesHandler.bind(this)), r();
              });
          })
        );
    });
  }
  send(t, n, r, i) {
    return Fe(this, void 0, void 0, function* () {
      const o = new URL(i4(this.bridgeUrl, this.postPath));
      o.searchParams.append("client_id", this.sessionId),
        o.searchParams.append("to", n),
        o.searchParams.append("ttl", (i || this.defaultTtl).toString()),
        o.searchParams.append("topic", r),
        yield fetch(o, { method: "post", body: X1.encode(t) });
    });
  }
  pause() {
    var t;
    (t = this.eventSource) === null || t === void 0 || t.close();
  }
  unPause() {
    return this.registerSession();
  }
  close() {
    var t;
    (this.isClosed = !0), (t = this.eventSource) === null || t === void 0 || t.close();
  }
  setListener(t) {
    this.listener = t;
  }
  setErrorsListener(t) {
    this.errorsListener = t;
  }
  errorsHandler(t) {
    var n, r;
    if (!this.isClosed) {
      if (((n = this.eventSource) === null || n === void 0 ? void 0 : n.readyState) === EventSource.CLOSED) {
        this.eventSource.close(), this.registerSession();
        return;
      }
      if (((r = this.eventSource) === null || r === void 0 ? void 0 : r.readyState) === EventSource.CONNECTING) {
        console.debug("[TON_CONNET_SDK_ERROR]: Bridge error", JSON.stringify(t));
        return;
      }
      this.errorsListener(t);
    }
  }
  messagesHandler(t) {
    return Fe(this, void 0, void 0, function* () {
      if (t.data !== this.heartbeatMessage && (yield this.bridgeGatewayStorage.storeLastEventId(t.lastEventId), !this.isClosed)) {
        let n;
        try {
          n = JSON.parse(t.data);
        } catch (r) {
          throw new ot(`Bridge message parse failed, message ${r.data}`);
        }
        this.listener(n);
      }
    });
  }
}
function ta(e) {
  return !("connectEvent" in e);
}
class Ma {
  constructor(t) {
    (this.storage = t), (this.storeKey = "ton-connect-storage_bridge-connection");
  }
  storeConnection(t) {
    return Fe(this, void 0, void 0, function* () {
      if (t.type === "injected") return this.storage.setItem(this.storeKey, JSON.stringify(t));
      if (!ta(t)) {
        const r = { sessionKeyPair: t.session.sessionCrypto.stringifyKeypair(), walletPublicKey: t.session.walletPublicKey, bridgeUrl: t.session.bridgeUrl },
          i = { type: "http", connectEvent: t.connectEvent, session: r, lastWalletEventId: t.lastWalletEventId, nextRpcRequestId: t.nextRpcRequestId };
        return this.storage.setItem(this.storeKey, JSON.stringify(i));
      }
      const n = { type: "http", connectionSource: t.connectionSource, sessionCrypto: t.sessionCrypto.stringifyKeypair() };
      return this.storage.setItem(this.storeKey, JSON.stringify(n));
    });
  }
  removeConnection() {
    return Fe(this, void 0, void 0, function* () {
      return this.storage.removeItem(this.storeKey);
    });
  }
  getConnection() {
    return Fe(this, void 0, void 0, function* () {
      const t = yield this.storage.getItem(this.storeKey);
      if (!t) return null;
      const n = JSON.parse(t);
      if (n.type === "injected") return n;
      if ("connectEvent" in n) {
        const r = new h0(n.session.sessionKeyPair);
        return {
          type: "http",
          connectEvent: n.connectEvent,
          lastWalletEventId: n.lastWalletEventId,
          nextRpcRequestId: n.nextRpcRequestId,
          session: { sessionCrypto: r, bridgeUrl: n.session.bridgeUrl, walletPublicKey: n.session.walletPublicKey },
        };
      }
      return { type: "http", sessionCrypto: new h0(n.sessionCrypto), connectionSource: n.connectionSource };
    });
  }
  getHttpConnection() {
    return Fe(this, void 0, void 0, function* () {
      const t = yield this.getConnection();
      if (!t) throw new ot("Trying to read HTTP connection source while nothing is stored");
      if (t.type === "injected") throw new ot("Trying to read HTTP connection source while injected connection is stored");
      return t;
    });
  }
  getHttpPendingConnection() {
    return Fe(this, void 0, void 0, function* () {
      const t = yield this.getConnection();
      if (!t) throw new ot("Trying to read HTTP connection source while nothing is stored");
      if (t.type === "injected") throw new ot("Trying to read HTTP connection source while injected connection is stored");
      if (!ta(t)) throw new ot("Trying to read HTTP-pending connection while http connection is stored");
      return t;
    });
  }
  getInjectedConnection() {
    return Fe(this, void 0, void 0, function* () {
      const t = yield this.getConnection();
      if (!t) throw new ot("Trying to read Injected bridge connection source while nothing is stored");
      if ((t == null ? void 0 : t.type) === "http") throw new ot("Trying to read Injected bridge connection source while HTTP connection is stored");
      return t;
    });
  }
  storedConnectionType() {
    return Fe(this, void 0, void 0, function* () {
      const t = yield this.storage.getItem(this.storeKey);
      return t ? JSON.parse(t).type : null;
    });
  }
  storeLastWalletEventId(t) {
    return Fe(this, void 0, void 0, function* () {
      const n = yield this.getConnection();
      if (n && n.type === "http" && !ta(n)) return (n.lastWalletEventId = t), this.storeConnection(n);
    });
  }
  getLastWalletEventId() {
    return Fe(this, void 0, void 0, function* () {
      const t = yield this.getConnection();
      if (t && "lastWalletEventId" in t) return t.lastWalletEventId;
    });
  }
  increaseNextRpcRequestId() {
    return Fe(this, void 0, void 0, function* () {
      const t = yield this.getConnection();
      if (t && "nextRpcRequestId" in t) {
        const n = t.nextRpcRequestId || 0;
        return (t.nextRpcRequestId = n + 1), this.storeConnection(t);
      }
    });
  }
  getNextRpcRequestId() {
    return Fe(this, void 0, void 0, function* () {
      const t = yield this.getConnection();
      return (t && "nextRpcRequestId" in t && t.nextRpcRequestId) || 0;
    });
  }
}
const ry = 2;
function Kn(...e) {
  try {
    console.debug("[TON_CONNECT_SDK]", ...e);
  } catch {}
}
function Ql(...e) {
  try {
    console.error("[TON_CONNECT_SDK]", ...e);
  } catch {}
}
function VS(...e) {
  try {
    console.warn("[TON_CONNECT_SDK]", ...e);
  } catch {}
}
class Ra {
  constructor(t, n) {
    (this.storage = t),
      (this.walletConnectionSource = n),
      (this.type = "http"),
      (this.standardUniversalLink = "tc://"),
      (this.pendingRequests = new Map()),
      (this.session = null),
      (this.gateway = null),
      (this.pendingGateways = []),
      (this.listeners = []),
      (this.connectionStorage = new Ma(t));
  }
  static fromStorage(t) {
    return Fe(this, void 0, void 0, function* () {
      const r = yield new Ma(t).getHttpConnection();
      return ta(r) ? new Ra(t, r.connectionSource) : new Ra(t, { bridgeUrl: r.session.bridgeUrl });
    });
  }
  connect(t) {
    this.closeGateways();
    const n = new h0();
    (this.session = { sessionCrypto: n, bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : "" }),
      this.connectionStorage.storeConnection({ type: "http", connectionSource: this.walletConnectionSource, sessionCrypto: n }).then(() => this.openGateways(n));
    const r = "universalLink" in this.walletConnectionSource && this.walletConnectionSource.universalLink ? this.walletConnectionSource.universalLink : this.standardUniversalLink;
    return this.generateUniversalLink(r, t);
  }
  restoreConnection() {
    return Fe(this, void 0, void 0, function* () {
      this.closeGateways();
      const t = yield this.connectionStorage.getHttpConnection();
      if (t) {
        if (ta(t))
          return (
            (this.session = { sessionCrypto: t.sessionCrypto, bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : "" }),
            this.openGateways(t.sessionCrypto)
          );
        if (Array.isArray(this.walletConnectionSource)) throw new ot("Internal error. Connection source is array while WalletConnectionSourceHTTP was expected.");
        (this.session = t.session),
          (this.gateway = new Bf(
            this.storage,
            this.walletConnectionSource.bridgeUrl,
            t.session.sessionCrypto.sessionId,
            this.gatewayListener.bind(this),
            this.gatewayErrorsListener.bind(this)
          )),
          yield this.gateway.registerSession(),
          this.listeners.forEach((n) => n(t.connectEvent));
      }
    });
  }
  sendRequest(t, n) {
    return new Promise((r, i) =>
      Fe(this, void 0, void 0, function* () {
        if (!this.gateway || !this.session || !("walletPublicKey" in this.session)) throw new ot("Trying to send bridge request without session");
        const o = (yield this.connectionStorage.getNextRpcRequestId()).toString();
        yield this.connectionStorage.increaseNextRpcRequestId(), Kn("Send http-bridge request:", Object.assign(Object.assign({}, t), { id: o }));
        const s = this.session.sessionCrypto.encrypt(JSON.stringify(Object.assign(Object.assign({}, t), { id: o })), Du(this.session.walletPublicKey));
        this.gateway.send(s, this.session.walletPublicKey, t.method).catch(i), this.pendingRequests.set(o.toString(), r), n == null || n();
      })
    );
  }
  closeConnection() {
    this.closeGateways(), (this.listeners = []), (this.session = null), (this.gateway = null);
  }
  disconnect() {
    return Fe(this, void 0, void 0, function* () {
      return new Promise((t) =>
        Fe(this, void 0, void 0, function* () {
          let n = !1;
          const r = () => {
            (n = !0), this.removeBridgeAndSession().then(t);
          };
          try {
            yield this.sendRequest({ method: "disconnect", params: [] }, r);
          } catch (i) {
            console.debug(i), n || this.removeBridgeAndSession().then(t);
          }
        })
      );
    });
  }
  listen(t) {
    return this.listeners.push(t), () => (this.listeners = this.listeners.filter((n) => n !== t));
  }
  pause() {
    var t;
    (t = this.gateway) === null || t === void 0 || t.pause(), this.pendingGateways.forEach((n) => n.pause());
  }
  unPause() {
    return Fe(this, void 0, void 0, function* () {
      const t = this.pendingGateways.map((n) => n.unPause());
      this.gateway && t.push(this.gateway.unPause()), yield Promise.all(t);
    });
  }
  pendingGatewaysListener(t, n, r) {
    return Fe(this, void 0, void 0, function* () {
      if (!this.pendingGateways.includes(t)) {
        t.close();
        return;
      }
      return (
        this.closeGateways({ except: t }),
        (this.session.bridgeUrl = n),
        (this.gateway = t),
        this.gateway.setErrorsListener(this.gatewayErrorsListener.bind(this)),
        this.gateway.setListener(this.gatewayListener.bind(this)),
        this.gatewayListener(r)
      );
    });
  }
  gatewayListener(t) {
    return Fe(this, void 0, void 0, function* () {
      const n = JSON.parse(this.session.sessionCrypto.decrypt(X1.decode(t.message).toUint8Array(), Du(t.from)));
      if ((Kn("Wallet message received:", n), !("event" in n))) {
        const i = n.id.toString(),
          o = this.pendingRequests.get(i);
        if (!o) {
          Kn(`Response id ${i} doesn't match any request's id`);
          return;
        }
        o(n), this.pendingRequests.delete(i);
        return;
      }
      if (n.id !== void 0) {
        const i = yield this.connectionStorage.getLastWalletEventId();
        if (i !== void 0 && n.id <= i) {
          Ql(`Received event id (=${n.id}) must be greater than stored last wallet event id (=${i}) `);
          return;
        }
        n.event !== "connect" && (yield this.connectionStorage.storeLastWalletEventId(n.id));
      }
      const r = this.listeners;
      n.event === "connect" && (yield this.updateSession(n, t.from)), n.event === "disconnect" && (yield this.removeBridgeAndSession()), r.forEach((i) => i(n));
    });
  }
  gatewayErrorsListener(t) {
    return Fe(this, void 0, void 0, function* () {
      throw new ot(`Bridge error ${JSON.stringify(t)}`);
    });
  }
  updateSession(t, n) {
    return Fe(this, void 0, void 0, function* () {
      this.session = Object.assign(Object.assign({}, this.session), { walletPublicKey: n });
      const r = t.payload.items.find((o) => o.name === "ton_addr"),
        i = Object.assign(Object.assign({}, t), { payload: Object.assign(Object.assign({}, t.payload), { items: [r] }) });
      yield this.connectionStorage.storeConnection({ type: "http", session: this.session, lastWalletEventId: t.id, connectEvent: i, nextRpcRequestId: 0 });
    });
  }
  removeBridgeAndSession() {
    return Fe(this, void 0, void 0, function* () {
      this.closeConnection(), yield this.connectionStorage.removeConnection();
    });
  }
  generateUniversalLink(t, n) {
    return La(t) ? this.generateTGUniversalLink(t, n) : this.generateRegularUniversalLink(t, n);
  }
  generateRegularUniversalLink(t, n) {
    const r = new URL(t);
    return (
      r.searchParams.append("v", ry.toString()), r.searchParams.append("id", this.session.sessionCrypto.sessionId), r.searchParams.append("r", JSON.stringify(n)), r.toString()
    );
  }
  generateTGUniversalLink(t, n) {
    const i = this.generateRegularUniversalLink("about:blank", n).split("?")[1],
      o = "tonconnect-" + ny(i),
      s = new URL(t);
    return s.searchParams.append("startattach", o), s.toString();
  }
  openGateways(t) {
    return Fe(this, void 0, void 0, function* () {
      if (Array.isArray(this.walletConnectionSource)) {
        (this.pendingGateways = this.walletConnectionSource.map((n) => {
          const r = new Bf(
            this.storage,
            n.bridgeUrl,
            t.sessionId,
            () => {},
            (i) => {
              console.error(i);
            }
          );
          return r.setListener((i) => this.pendingGatewaysListener(r, n.bridgeUrl, i)), r;
        })),
          yield Promise.race(this.pendingGateways.map((n) => n.registerSession()));
        return;
      } else return (this.gateway = new Bf(this.storage, this.walletConnectionSource.bridgeUrl, t.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this))), this.gateway.registerSession();
    });
  }
  closeGateways(t) {
    var n;
    (n = this.gateway) === null || n === void 0 || n.close(),
      this.pendingGateways.filter((r) => r !== (t == null ? void 0 : t.except)).forEach((r) => r.close()),
      (this.pendingGateways = []);
  }
}
function o4(e, t) {
  return iy(e, [t]);
}
function iy(e, t) {
  return !e || typeof e != "object" ? !1 : t.every((n) => n in e);
}
function jS(e) {
  try {
    return !o4(e, "tonconnect") || !o4(e.tonconnect, "walletInfo") ? !1 : iy(e.tonconnect.walletInfo, ["name", "app_name", "image", "about_url", "platforms"]);
  } catch {
    return !1;
  }
}
function ih() {
  if (!(typeof window > "u")) return window;
}
function FS() {
  if (!(typeof document > "u")) return document;
}
function US() {
  var e;
  const t = (e = ih()) === null || e === void 0 ? void 0 : e.location.origin;
  return t ? t + "/tonconnect-manifest.json" : "";
}
class Cn {
  constructor(t, n) {
    (this.injectedWalletKey = n), (this.type = "injected"), (this.unsubscribeCallback = null), (this.listenSubscriptions = !1), (this.listeners = []);
    const r = Cn.window;
    if (!Cn.isWindowContainsWallet(r, n)) throw new th();
    (this.connectionStorage = new Ma(t)), (this.injectedWallet = r[n].tonconnect);
  }
  static fromStorage(t) {
    return Fe(this, void 0, void 0, function* () {
      const r = yield new Ma(t).getInjectedConnection();
      return new Cn(t, r.jsBridgeKey);
    });
  }
  static isWalletInjected(t) {
    return Cn.isWindowContainsWallet(this.window, t);
  }
  static isInsideWalletBrowser(t) {
    return Cn.isWindowContainsWallet(this.window, t) ? this.window[t].tonconnect.isWalletBrowser : !1;
  }
  static getCurrentlyInjectedWallets() {
    return this.window
      ? Object.entries(this.window)
          .filter(([n, r]) => jS(r))
          .map(([n, r]) => ({
            name: r.tonconnect.walletInfo.name,
            appName: r.tonconnect.walletInfo.app_name,
            aboutUrl: r.tonconnect.walletInfo.about_url,
            imageUrl: r.tonconnect.walletInfo.image,
            tondns: r.tonconnect.walletInfo.tondns,
            jsBridgeKey: n,
            injected: !0,
            embedded: r.tonconnect.isWalletBrowser,
            platforms: r.tonconnect.walletInfo.platforms,
          }))
      : [];
  }
  static isWindowContainsWallet(t, n) {
    return !!t && n in t && typeof t[n] == "object" && "tonconnect" in t[n];
  }
  connect(t) {
    this._connect(ry, t);
  }
  restoreConnection() {
    return Fe(this, void 0, void 0, function* () {
      try {
        Kn("Injected Provider restoring connection...");
        const t = yield this.injectedWallet.restoreConnection();
        Kn("Injected Provider restoring connection response", t),
          t.event === "connect" ? (this.makeSubscriptions(), this.listeners.forEach((n) => n(t))) : yield this.connectionStorage.removeConnection();
      } catch (t) {
        yield this.connectionStorage.removeConnection(), console.error(t);
      }
    });
  }
  closeConnection() {
    this.listenSubscriptions && this.injectedWallet.disconnect(), this.closeAllListeners();
  }
  disconnect() {
    return Fe(this, void 0, void 0, function* () {
      return new Promise((t) => {
        const n = () => {
          this.closeAllListeners(), this.connectionStorage.removeConnection().then(t);
        };
        try {
          this.injectedWallet.disconnect(), n();
        } catch (r) {
          Kn(r), this.sendRequest({ method: "disconnect", params: [] }, n);
        }
      });
    });
  }
  closeAllListeners() {
    var t;
    (this.listenSubscriptions = !1), (this.listeners = []), (t = this.unsubscribeCallback) === null || t === void 0 || t.call(this);
  }
  listen(t) {
    return this.listeners.push(t), () => (this.listeners = this.listeners.filter((n) => n !== t));
  }
  sendRequest(t, n) {
    return Fe(this, void 0, void 0, function* () {
      const r = (yield this.connectionStorage.getNextRpcRequestId()).toString();
      yield this.connectionStorage.increaseNextRpcRequestId(), Kn("Send injected-bridge request:", Object.assign(Object.assign({}, t), { id: r }));
      const i = this.injectedWallet.send(Object.assign(Object.assign({}, t), { id: r }));
      return i.then((o) => Kn("Wallet message received:", o)), n == null || n(), i;
    });
  }
  _connect(t, n) {
    return Fe(this, void 0, void 0, function* () {
      try {
        Kn(`Injected Provider connect request: protocolVersion: ${t}, message:`, n);
        const r = yield this.injectedWallet.connect(t, n);
        Kn("Injected Provider connect response:", r), r.event === "connect" && (yield this.updateSession(), this.makeSubscriptions()), this.listeners.forEach((i) => i(r));
      } catch (r) {
        Kn(r);
        const i = { event: "connect_error", payload: { code: 0, message: r == null ? void 0 : r.toString() } };
        this.listeners.forEach((o) => o(i));
      }
    });
  }
  makeSubscriptions() {
    (this.listenSubscriptions = !0),
      (this.unsubscribeCallback = this.injectedWallet.listen((t) => {
        Kn("Wallet message received:", t), this.listenSubscriptions && this.listeners.forEach((n) => n(t)), t.event === "disconnect" && this.disconnect();
      }));
  }
  updateSession() {
    return this.connectionStorage.storeConnection({ type: "injected", jsBridgeKey: this.injectedWalletKey, nextRpcRequestId: 0 });
  }
}
Cn.window = ih();
class zS {
  constructor() {
    const t = ih();
    if (!(t != null && t.localStorage)) throw new nh();
    this.window = t;
  }
  getItem(t) {
    return Fe(this, void 0, void 0, function* () {
      return Promise.resolve(this.window.localStorage.getItem(t));
    });
  }
  removeItem(t) {
    return Fe(this, void 0, void 0, function* () {
      return this.window.localStorage.removeItem(t), Promise.resolve();
    });
  }
  setItem(t, n) {
    return this.window.localStorage.setItem(t, n), Promise.resolve();
  }
}
function io(e) {
  return WS(e) && e.injected;
}
function oy(e) {
  return io(e) && e.embedded;
}
function WS(e) {
  return "jsBridgeKey" in e;
}
function p0(e) {
  return "bridgeUrl" in e;
}
const HS = [
  {
    app_name: "telegram-wallet",
    name: "Wallet",
    image: "https://wallet.tg/images/logo-288.png",
    about_url: "https://wallet.tg/",
    universal_url: "https://t.me/wallet?attach=wallet",
    bridge: [{ type: "sse", url: "https://bridge.tonapi.io/bridge" }],
    platforms: ["ios", "android", "macos", "windows", "linux"],
  },
  {
    app_name: "tonkeeper",
    name: "Tonkeeper",
    image: "https://tonkeeper.com/assets/tonconnect-icon.png",
    tondns: "tonkeeper.ton",
    about_url: "https://tonkeeper.com",
    universal_url: "https://app.tonkeeper.com/ton-connect",
    bridge: [
      { type: "sse", url: "https://bridge.tonapi.io/bridge" },
      { type: "js", key: "tonkeeper" },
    ],
    platforms: ["ios", "android", "chrome", "firefox"],
  },
  {
    app_name: "openmask",
    name: "OpenMask",
    image: "https://raw.githubusercontent.com/OpenProduct/openmask-extension/main/public/openmask-logo-288.png",
    about_url: "https://www.openmask.app/",
    bridge: [{ type: "js", key: "openmask" }],
    platforms: ["chrome"],
  },
  {
    app_name: "mytonwallet",
    name: "MyTonWallet",
    image: "https://mytonwallet.io/icon-256.png",
    about_url: "https://mytonwallet.io",
    universal_url: "https://connect.mytonwallet.org",
    bridge: [
      { type: "js", key: "mytonwallet" },
      { type: "sse", url: "https://tonconnectbridge.mytonwallet.org/bridge/" },
    ],
    platforms: ["chrome", "windows", "macos", "linux"],
  },
  {
    app_name: "tonhub",
    name: "Tonhub",
    image: "https://tonhub.com/tonconnect_logo.png",
    about_url: "https://tonhub.com",
    universal_url: "https://tonhub.com/ton-connect",
    bridge: [
      { type: "js", key: "tonhub" },
      { type: "sse", url: "https://connect.tonhubapi.com/tonconnect" },
    ],
    platforms: ["ios", "android"],
  },
  {
    app_name: "tonflow",
    name: "TonFlow",
    image: "https://tonflow.net/assets/images/tonflow_ico_192.png",
    about_url: "https://tonflow.net",
    bridge: [{ type: "js", key: "tonflow" }],
    platforms: ["chrome"],
  },
  {
    app_name: "dewallet",
    name: "DeWallet",
    image: "https://app.delabwallet.com/logo_black.png",
    about_url: "https://delabwallet.com",
    bridge: [{ type: "js", key: "dewallet" }],
    platforms: ["chrome"],
  },
  {
    app_name: "xtonwallet",
    name: "XTONWallet",
    image: "https://xtonwallet.com/assets/img/icon-256-back.png",
    about_url: "https://xtonwallet.com",
    bridge: [{ type: "js", key: "xtonwallet" }],
    platforms: ["chrome", "firefox"],
  },
  {
    app_name: "tonwallet",
    name: "TON Wallet",
    image: "https://wallet.ton.org/assets/ui/qr-logo.png",
    about_url: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
    bridge: [{ type: "js", key: "tonwallet" }],
    platforms: ["chrome"],
  },
];
class m0 {
  constructor(t) {
    (this.walletsListCache = null),
      (this.walletsListCacheCreationTimestamp = null),
      (this.walletsListSource = "https://raw.githubusercontent.com/ton-blockchain/wallets-list/main/wallets-v2.json"),
      t != null && t.walletsListSource && (this.walletsListSource = t.walletsListSource),
      t != null && t.cacheTTLMs && (this.cacheTTLMs = t.cacheTTLMs);
  }
  getWallets() {
    return Fe(this, void 0, void 0, function* () {
      return (
        this.cacheTTLMs && this.walletsListCacheCreationTimestamp && Date.now() > this.walletsListCacheCreationTimestamp + this.cacheTTLMs && (this.walletsListCache = null),
        this.walletsListCache ||
          ((this.walletsListCache = this.fetchWalletsList()),
          this.walletsListCache
            .then(() => {
              this.walletsListCacheCreationTimestamp = Date.now();
            })
            .catch(() => {
              (this.walletsListCache = null), (this.walletsListCacheCreationTimestamp = null);
            })),
        this.walletsListCache
      );
    });
  }
  getEmbeddedWallet() {
    return Fe(this, void 0, void 0, function* () {
      const n = (yield this.getWallets()).filter(oy);
      return n.length !== 1 ? null : n[0];
    });
  }
  fetchWalletsList() {
    return Fe(this, void 0, void 0, function* () {
      let t = [];
      try {
        if (((t = yield (yield fetch(this.walletsListSource)).json()), !Array.isArray(t))) throw new rh("Wrong wallets list format, wallets list must be an array.");
        const i = t.filter((o) => !this.isCorrectWalletConfigDTO(o));
        i.length &&
          (Ql(`Wallet(s) ${i.map((o) => o.name).join(", ")} config format is wrong. They were removed from the wallets list.`),
          (t = t.filter((o) => this.isCorrectWalletConfigDTO(o))));
      } catch (r) {
        Ql(r), (t = HS);
      }
      let n = [];
      try {
        n = Cn.getCurrentlyInjectedWallets();
      } catch (r) {
        Ql(r);
      }
      return this.mergeWalletsLists(this.walletConfigDTOListToWalletConfigList(t), n);
    });
  }
  walletConfigDTOListToWalletConfigList(t) {
    return t.map((n) => {
      const i = { name: n.name, appName: n.app_name, imageUrl: n.image, aboutUrl: n.about_url, tondns: n.tondns, platforms: n.platforms };
      return (
        n.bridge.forEach((o) => {
          if ((o.type === "sse" && ((i.bridgeUrl = o.url), (i.universalLink = n.universal_url), (i.deepLink = n.deepLink)), o.type === "js")) {
            const s = o.key;
            (i.jsBridgeKey = s), (i.injected = Cn.isWalletInjected(s)), (i.embedded = Cn.isInsideWalletBrowser(s));
          }
        }),
        i
      );
    });
  }
  mergeWalletsLists(t, n) {
    return [...new Set(t.concat(n).map((i) => i.name)).values()].map((i) => {
      const o = t.find((a) => a.name === i),
        s = n.find((a) => a.name === i);
      return Object.assign(Object.assign({}, o && Object.assign({}, o)), s && Object.assign({}, s));
    });
  }
  isCorrectWalletConfigDTO(t) {
    if (!t || typeof t != "object") return !1;
    const n = "name" in t,
      r = "app_name" in t,
      i = "image" in t,
      o = "about_url" in t,
      s = "platforms" in t;
    if (!n || !i || !o || !s || !r || !t.platforms || !Array.isArray(t.platforms) || !t.platforms.length || !("bridge" in t) || !Array.isArray(t.bridge) || !t.bridge.length)
      return !1;
    const a = t.bridge;
    if (a.some((c) => !c || typeof c != "object" || !("type" in c))) return !1;
    const l = a.find((c) => c.type === "sse");
    if (l && (!("url" in l) || !l.url || !t.universal_url)) return !1;
    const u = a.find((c) => c.type === "js");
    return !(u && (!("key" in u) || !u.key));
  }
}
class ju extends ot {
  get info() {
    return "Wallet doesn't support requested feature method.";
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ju.prototype);
  }
}
function KS(e, t) {
  const n = e.includes("SendTransaction"),
    r = e.find((i) => i && typeof i == "object" && i.name === "SendTransaction");
  if (!n && !r) throw new ju("Wallet doesn't support SendTransaction feature.");
  if (r && r.maxMessages !== void 0) {
    if (r.maxMessages < t.requiredMessagesNumber)
      throw new ju(`Wallet is not able to handle such SendTransaction request. Max support messages number is ${r.maxMessages}, but ${t.requiredMessagesNumber} is required.`);
    return;
  }
  VS("Connected wallet didn't provide information about max allowed messages in the SendTransaction request. Request may be rejected by the wallet.");
}
class fo {
  constructor(t) {
    if (
      ((this.walletsList = new m0()),
      (this._wallet = null),
      (this.provider = null),
      (this.statusChangeSubscriptions = []),
      (this.statusChangeErrorSubscriptions = []),
      (this.dappSettings = { manifestUrl: (t == null ? void 0 : t.manifestUrl) || US(), storage: (t == null ? void 0 : t.storage) || new zS() }),
      (this.walletsList = new m0({ walletsListSource: t == null ? void 0 : t.walletsListSource, cacheTTLMs: t == null ? void 0 : t.walletsListCacheTTLMs })),
      !this.dappSettings.manifestUrl)
    )
      throw new J1(
        "Dapp tonconnect-manifest.json must be specified if window.location.origin is undefined. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
      );
    (this.bridgeConnectionStorage = new Ma(this.dappSettings.storage)), (t != null && t.disableAutoPauseConnection) || this.addWindowFocusAndBlurSubscriptions();
  }
  static getWallets() {
    return this.walletsList.getWallets();
  }
  get connected() {
    return this._wallet !== null;
  }
  get account() {
    var t;
    return ((t = this._wallet) === null || t === void 0 ? void 0 : t.account) || null;
  }
  get wallet() {
    return this._wallet;
  }
  set wallet(t) {
    (this._wallet = t), this.statusChangeSubscriptions.forEach((n) => n(this._wallet));
  }
  getWallets() {
    return this.walletsList.getWallets();
  }
  onStatusChange(t, n) {
    return (
      this.statusChangeSubscriptions.push(t),
      n && this.statusChangeErrorSubscriptions.push(n),
      () => {
        (this.statusChangeSubscriptions = this.statusChangeSubscriptions.filter((r) => r !== t)),
          n && (this.statusChangeErrorSubscriptions = this.statusChangeErrorSubscriptions.filter((r) => r !== n));
      }
    );
  }
  connect(t, n) {
    var r;
    if (this.connected) throw new eh();
    return (r = this.provider) === null || r === void 0 || r.closeConnection(), (this.provider = this.createProvider(t)), this.provider.connect(this.createConnectRequest(n));
  }
  restoreConnection() {
    return Fe(this, void 0, void 0, function* () {
      const [t, n] = yield Promise.all([this.bridgeConnectionStorage.storedConnectionType(), this.walletsList.getEmbeddedWallet()]);
      try {
        switch (t) {
          case "http":
            this.provider = yield Ra.fromStorage(this.dappSettings.storage);
            break;
          case "injected":
            this.provider = yield Cn.fromStorage(this.dappSettings.storage);
            break;
          default:
            if (n) this.provider = yield this.createProvider(n);
            else return;
        }
      } catch {
        yield this.bridgeConnectionStorage.removeConnection(), (this.provider = null);
        return;
      }
      return this.provider.listen(this.walletEventsListener.bind(this)), this.provider.restoreConnection();
    });
  }
  sendTransaction(t) {
    return Fe(this, void 0, void 0, function* () {
      this.checkConnection(), KS(this.wallet.device.features, { requiredMessagesNumber: t.messages.length });
      const { validUntil: n } = t,
        r = MS(t, ["validUntil"]),
        i = t.from || this.account.address,
        o = t.network || this.account.chain,
        s = yield this.provider.sendRequest(_l.convertToRpcRequest(Object.assign(Object.assign({}, r), { valid_until: n, from: i, network: o })));
      return _l.isError(s) ? _l.parseAndThrowError(s) : _l.convertFromRpcResponse(s);
    });
  }
  disconnect() {
    return Fe(this, void 0, void 0, function* () {
      if (!this.connected) throw new Nu();
      yield this.provider.disconnect(), this.onWalletDisconnected();
    });
  }
  pauseConnection() {
    var t;
    ((t = this.provider) === null || t === void 0 ? void 0 : t.type) === "http" && this.provider.pause();
  }
  unPauseConnection() {
    var t;
    return ((t = this.provider) === null || t === void 0 ? void 0 : t.type) !== "http" ? Promise.resolve() : this.provider.unPause();
  }
  addWindowFocusAndBlurSubscriptions() {
    const t = FS();
    if (t)
      try {
        t.addEventListener("visibilitychange", () => {
          t.hidden ? this.pauseConnection() : this.unPauseConnection();
        });
      } catch (n) {
        console.error("Cannot subscribe to the document.visibilitychange: ", n);
      }
  }
  createProvider(t) {
    let n;
    return (
      !Array.isArray(t) && RS(t) ? (n = new Cn(this.dappSettings.storage, t.jsBridgeKey)) : (n = new Ra(this.dappSettings.storage, t)),
      n.listen(this.walletEventsListener.bind(this)),
      n
    );
  }
  walletEventsListener(t) {
    switch (t.event) {
      case "connect":
        this.onWalletConnected(t.payload);
        break;
      case "connect_error":
        this.onWalletConnectError(t.payload);
        break;
      case "disconnect":
        this.onWalletDisconnected();
    }
  }
  onWalletConnected(t) {
    const n = t.items.find((o) => o.name === "ton_addr"),
      r = t.items.find((o) => o.name === "ton_proof");
    if (!n) throw new ot("ton_addr connection item was not found");
    const i = { device: t.device, provider: this.provider.type, account: { address: n.address, chain: n.network, walletStateInit: n.walletStateInit, publicKey: n.publicKey } };
    r && (i.connectItems = { tonProof: r }), (this.wallet = i);
  }
  onWalletConnectError(t) {
    const n = OS.parseError(t);
    if ((this.statusChangeErrorSubscriptions.forEach((r) => r(n)), console.debug(n), n instanceof kc || n instanceof Ac)) throw (console.error(n), n);
  }
  onWalletDisconnected() {
    this.wallet = null;
  }
  checkConnection() {
    if (!this.connected) throw new Nu();
  }
  createConnectRequest(t) {
    const n = [{ name: "ton_addr" }];
    return t != null && t.tonProof && n.push({ name: "ton_proof", payload: t.tonProof }), { manifestUrl: this.dappSettings.manifestUrl, items: n };
  }
}
fo.walletsList = new m0();
fo.isWalletInjected = (e) => Cn.isWalletInjected(e);
fo.isInsideWalletBrowser = (e) => Cn.isInsideWalletBrowser(e);
const GS = 17,
  qS = 128;
function sy(e, t = !1) {
  const { wc: n, hex: r } = YS(e);
  let i = GS;
  t && (i |= qS);
  const o = new Int8Array(34);
  (o[0] = i), (o[1] = n), o.set(r, 2);
  const s = new Uint8Array(36);
  return s.set(o), s.set(ZS(o), 34), X1.encode(s).replace(/\+/g, "-").replace(/\//g, "_");
}
function YS(e) {
  if (!e.includes(":")) throw new Wo(`Wrong address ${e}. Address must include ":".`);
  const t = e.split(":");
  if (t.length !== 2) throw new Wo(`Wrong address ${e}. Address must include ":" only once.`);
  const n = parseInt(t[0]);
  if (n !== 0 && n !== -1) throw new Wo(`Wrong address ${e}. WC must be eq 0 or -1, but ${n} received.`);
  const r = t[1];
  if ((r == null ? void 0 : r.length) !== 64) throw new Wo(`Wrong address ${e}. Hex part must be 64bytes length, but ${r == null ? void 0 : r.length} received.`);
  return { wc: n, hex: QS(r) };
}
function ZS(e) {
  let n = 0;
  const r = new Uint8Array(e.length + 2);
  r.set(e);
  for (let i of r) {
    let o = 128;
    for (; o > 0; ) (n <<= 1), i & o && (n += 1), (o >>= 1), n > 65535 && ((n &= 65535), (n ^= 4129));
  }
  return new Uint8Array([Math.floor(n / 256), n % 256]);
}
const g0 = {};
for (let e = 0; e <= 255; e++) {
  let t = e.toString(16);
  t.length < 2 && (t = "0" + t), (g0[t] = e);
}
function QS(e) {
  e = e.toLowerCase();
  const t = e.length;
  if (t % 2 !== 0) throw new Vu("Hex string must have length a multiple of 2: " + e);
  const n = t / 2,
    r = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    const o = i * 2,
      s = e.substring(o, o + 2);
    if (!g0.hasOwnProperty(s)) throw new Vu("Invalid hex character: " + s);
    r[i] = g0[s];
  }
  return r;
}
var v0 = { exports: {} };
(function (e, t) {
  (function (n, r) {
    var i = "1.0.36",
      o = "",
      s = "?",
      a = "function",
      l = "undefined",
      u = "object",
      c = "string",
      f = "major",
      h = "model",
      p = "name",
      g = "type",
      v = "vendor",
      P = "version",
      y = "architecture",
      w = "console",
      x = "mobile",
      T = "tablet",
      _ = "smarttv",
      O = "wearable",
      B = "embedded",
      A = 350,
      k = "Amazon",
      I = "Apple",
      M = "ASUS",
      L = "BlackBerry",
      N = "Browser",
      j = "Chrome",
      W = "Edge",
      oe = "Firefox",
      ye = "Google",
      J = "Huawei",
      ne = "LG",
      se = "Microsoft",
      pe = "Motorola",
      Oe = "Opera",
      tt = "Samsung",
      at = "Sharp",
      Pe = "Sony",
      Ye = "Xiaomi",
      tn = "Zebra",
      G = "Facebook",
      K = "Chromium OS",
      U = "Mac OS",
      q = function ($e, Qe) {
        var Le = {};
        for (var ut in $e) Qe[ut] && Qe[ut].length % 2 === 0 ? (Le[ut] = Qe[ut].concat($e[ut])) : (Le[ut] = $e[ut]);
        return Le;
      },
      Z = function ($e) {
        for (var Qe = {}, Le = 0; Le < $e.length; Le++) Qe[$e[Le].toUpperCase()] = $e[Le];
        return Qe;
      },
      ae = function ($e, Qe) {
        return typeof $e === c ? Ce(Qe).indexOf(Ce($e)) !== -1 : !1;
      },
      Ce = function ($e) {
        return $e.toLowerCase();
      },
      be = function ($e) {
        return typeof $e === c ? $e.replace(/[^\d\.]/g, o).split(".")[0] : r;
      },
      lt = function ($e, Qe) {
        if (typeof $e === c) return ($e = $e.replace(/^\s\s*/, o)), typeof Qe === l ? $e : $e.substring(0, A);
      },
      dt = function ($e, Qe) {
        for (var Le = 0, ut, nr, Wn, Xe, _e, hn; Le < Qe.length && !_e; ) {
          var Ar = Qe[Le],
            kr = Qe[Le + 1];
          for (ut = nr = 0; ut < Ar.length && !_e && Ar[ut]; )
            if (((_e = Ar[ut++].exec($e)), _e))
              for (Wn = 0; Wn < kr.length; Wn++)
                (hn = _e[++nr]),
                  (Xe = kr[Wn]),
                  typeof Xe === u && Xe.length > 0
                    ? Xe.length === 2
                      ? typeof Xe[1] == a
                        ? (this[Xe[0]] = Xe[1].call(this, hn))
                        : (this[Xe[0]] = Xe[1])
                      : Xe.length === 3
                      ? typeof Xe[1] === a && !(Xe[1].exec && Xe[1].test)
                        ? (this[Xe[0]] = hn ? Xe[1].call(this, hn, Xe[2]) : r)
                        : (this[Xe[0]] = hn ? hn.replace(Xe[1], Xe[2]) : r)
                      : Xe.length === 4 && (this[Xe[0]] = hn ? Xe[3].call(this, hn.replace(Xe[1], Xe[2])) : r)
                    : (this[Xe] = hn || r);
          Le += 2;
        }
      },
      Te = function ($e, Qe) {
        for (var Le in Qe)
          if (typeof Qe[Le] === u && Qe[Le].length > 0) {
            for (var ut = 0; ut < Qe[Le].length; ut++) if (ae(Qe[Le][ut], $e)) return Le === s ? r : Le;
          } else if (ae(Qe[Le], $e)) return Le === s ? r : Le;
        return $e;
      },
      At = { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" },
      $t = {
        ME: "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        2e3: "NT 5.0",
        XP: ["NT 5.1", "NT 5.2"],
        Vista: "NT 6.0",
        7: "NT 6.1",
        8: "NT 6.2",
        8.1: "NT 6.3",
        10: ["NT 6.4", "NT 10.0"],
        RT: "ARM",
      },
      ti = {
        browser: [
          [/\b(?:crmo|crios)\/([\w\.]+)/i],
          [P, [p, "Chrome"]],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [P, [p, "Edge"]],
          [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
          [p, P],
          [/opios[\/ ]+([\w\.]+)/i],
          [P, [p, Oe + " Mini"]],
          [/\bopr\/([\w\.]+)/i],
          [P, [p, Oe]],
          [
            /(kindle)\/([\w\.]+)/i,
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
            /(?:ms|\()(ie) ([\w\.]+)/i,
            /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
            /(heytap|ovi)browser\/([\d\.]+)/i,
            /(weibo)__([\d\.]+)/i,
          ],
          [p, P],
          [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
          [P, [p, "UC" + N]],
          [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
          [P, [p, "WeChat(Win) Desktop"]],
          [/micromessenger\/([\w\.]+)/i],
          [P, [p, "WeChat"]],
          [/konqueror\/([\w\.]+)/i],
          [P, [p, "Konqueror"]],
          [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
          [P, [p, "IE"]],
          [/ya(?:search)?browser\/([\w\.]+)/i],
          [P, [p, "Yandex"]],
          [/(avast|avg)\/([\w\.]+)/i],
          [[p, /(.+)/, "$1 Secure " + N], P],
          [/\bfocus\/([\w\.]+)/i],
          [P, [p, oe + " Focus"]],
          [/\bopt\/([\w\.]+)/i],
          [P, [p, Oe + " Touch"]],
          [/coc_coc\w+\/([\w\.]+)/i],
          [P, [p, "Coc Coc"]],
          [/dolfin\/([\w\.]+)/i],
          [P, [p, "Dolphin"]],
          [/coast\/([\w\.]+)/i],
          [P, [p, Oe + " Coast"]],
          [/miuibrowser\/([\w\.]+)/i],
          [P, [p, "MIUI " + N]],
          [/fxios\/([-\w\.]+)/i],
          [P, [p, oe]],
          [/\bqihu|(qi?ho?o?|360)browser/i],
          [[p, "360 " + N]],
          [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
          [[p, /(.+)/, "$1 " + N], P],
          [/(comodo_dragon)\/([\w\.]+)/i],
          [[p, /_/g, " "], P],
          [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
          [p, P],
          [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
          [p],
          [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
          [[p, G], P],
          [
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
            /safari (line)\/([\w\.]+)/i,
            /\b(line)\/([\w\.]+)\/iab/i,
            /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
          ],
          [p, P],
          [/\bgsa\/([\w\.]+) .*safari\//i],
          [P, [p, "GSA"]],
          [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
          [P, [p, "TikTok"]],
          [/headlesschrome(?:\/([\w\.]+)| )/i],
          [P, [p, j + " Headless"]],
          [/ wv\).+(chrome)\/([\w\.]+)/i],
          [[p, j + " WebView"], P],
          [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
          [P, [p, "Android " + N]],
          [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
          [p, P],
          [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
          [P, [p, "Mobile Safari"]],
          [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
          [P, p],
          [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
          [p, [P, Te, At]],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [p, P],
          [/(navigator|netscape\d?)\/([-\w\.]+)/i],
          [[p, "Netscape"], P],
          [/mobile vr; rv:([\w\.]+)\).+firefox/i],
          [P, [p, oe + " Reality"]],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            /(swiftfox)/i,
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            /(firefox)\/([\w\.]+)/i,
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            /(links) \(([\w\.]+)/i,
            /panasonic;(viera)/i,
          ],
          [p, P],
          [/(cobalt)\/([\w\.]+)/i],
          [p, [P, /master.|lts./, ""]],
        ],
        cpu: [
          [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
          [[y, "amd64"]],
          [/(ia32(?=;))/i],
          [[y, Ce]],
          [/((?:i[346]|x)86)[;\)]/i],
          [[y, "ia32"]],
          [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
          [[y, "arm64"]],
          [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
          [[y, "armhf"]],
          [/windows (ce|mobile); ppc;/i],
          [[y, "arm"]],
          [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
          [[y, /ower/, o, Ce]],
          [/(sun4\w)[;\)]/i],
          [[y, "sparc"]],
          [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
          [[y, Ce]],
        ],
        device: [
          [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
          [h, [v, tt], [g, T]],
          [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
          [h, [v, tt], [g, x]],
          [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
          [h, [v, I], [g, x]],
          [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
          [h, [v, I], [g, T]],
          [/(macintosh);/i],
          [h, [v, I]],
          [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
          [h, [v, at], [g, x]],
          [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
          [h, [v, J], [g, T]],
          [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
          [h, [v, J], [g, x]],
          [
            /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
            /\b; (\w+) build\/hm\1/i,
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
          ],
          [
            [h, /_/g, " "],
            [v, Ye],
            [g, x],
          ],
          [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
          [
            [h, /_/g, " "],
            [v, Ye],
            [g, T],
          ],
          [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
          [h, [v, "OPPO"], [g, x]],
          [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
          [h, [v, "Vivo"], [g, x]],
          [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
          [h, [v, "Realme"], [g, x]],
          [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
          [h, [v, pe], [g, x]],
          [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
          [h, [v, pe], [g, T]],
          [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
          [h, [v, ne], [g, T]],
          [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
          [h, [v, ne], [g, x]],
          [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
          [h, [v, "Lenovo"], [g, T]],
          [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
          [
            [h, /_/g, " "],
            [v, "Nokia"],
            [g, x],
          ],
          [/(pixel c)\b/i],
          [h, [v, ye], [g, T]],
          [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
          [h, [v, ye], [g, x]],
          [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
          [h, [v, Pe], [g, x]],
          [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
          [
            [h, "Xperia Tablet"],
            [v, Pe],
            [g, T],
          ],
          [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
          [h, [v, "OnePlus"], [g, x]],
          [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
          [h, [v, k], [g, T]],
          [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
          [
            [h, /(.+)/g, "Fire Phone $1"],
            [v, k],
            [g, x],
          ],
          [/(playbook);[-\w\),; ]+(rim)/i],
          [h, v, [g, T]],
          [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
          [h, [v, L], [g, x]],
          [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
          [h, [v, M], [g, T]],
          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
          [h, [v, M], [g, x]],
          [/(nexus 9)/i],
          [h, [v, "HTC"], [g, T]],
          [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
          [v, [h, /_/g, " "], [g, x]],
          [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
          [h, [v, "Acer"], [g, T]],
          [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
          [h, [v, "Meizu"], [g, x]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
            /(hp) ([\w ]+\w)/i,
            /(asus)-?(\w+)/i,
            /(microsoft); (lumia[\w ]+)/i,
            /(lenovo)[-_ ]?([-\w]+)/i,
            /(jolla)/i,
            /(oppo) ?([\w ]+) bui/i,
          ],
          [v, h, [g, x]],
          [
            /(kobo)\s(ereader|touch)/i,
            /(archos) (gamepad2?)/i,
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            /(kindle)\/([\w\.]+)/i,
            /(nook)[\w ]+build\/(\w+)/i,
            /(dell) (strea[kpr\d ]*[\dko])/i,
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            /(trinity)[- ]*(t\d{3}) bui/i,
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            /(vodafone) ([\w ]+)(?:\)| bui)/i,
          ],
          [v, h, [g, T]],
          [/(surface duo)/i],
          [h, [v, se], [g, T]],
          [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
          [h, [v, "Fairphone"], [g, x]],
          [/(u304aa)/i],
          [h, [v, "AT&T"], [g, x]],
          [/\bsie-(\w*)/i],
          [h, [v, "Siemens"], [g, x]],
          [/\b(rct\w+) b/i],
          [h, [v, "RCA"], [g, T]],
          [/\b(venue[\d ]{2,7}) b/i],
          [h, [v, "Dell"], [g, T]],
          [/\b(q(?:mv|ta)\w+) b/i],
          [h, [v, "Verizon"], [g, T]],
          [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
          [h, [v, "Barnes & Noble"], [g, T]],
          [/\b(tm\d{3}\w+) b/i],
          [h, [v, "NuVision"], [g, T]],
          [/\b(k88) b/i],
          [h, [v, "ZTE"], [g, T]],
          [/\b(nx\d{3}j) b/i],
          [h, [v, "ZTE"], [g, x]],
          [/\b(gen\d{3}) b.+49h/i],
          [h, [v, "Swiss"], [g, x]],
          [/\b(zur\d{3}) b/i],
          [h, [v, "Swiss"], [g, T]],
          [/\b((zeki)?tb.*\b) b/i],
          [h, [v, "Zeki"], [g, T]],
          [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
          [[v, "Dragon Touch"], h, [g, T]],
          [/\b(ns-?\w{0,9}) b/i],
          [h, [v, "Insignia"], [g, T]],
          [/\b((nxa|next)-?\w{0,9}) b/i],
          [h, [v, "NextBook"], [g, T]],
          [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
          [[v, "Voice"], h, [g, x]],
          [/\b(lvtel\-)?(v1[12]) b/i],
          [[v, "LvTel"], h, [g, x]],
          [/\b(ph-1) /i],
          [h, [v, "Essential"], [g, x]],
          [/\b(v(100md|700na|7011|917g).*\b) b/i],
          [h, [v, "Envizen"], [g, T]],
          [/\b(trio[-\w\. ]+) b/i],
          [h, [v, "MachSpeed"], [g, T]],
          [/\btu_(1491) b/i],
          [h, [v, "Rotor"], [g, T]],
          [/(shield[\w ]+) b/i],
          [h, [v, "Nvidia"], [g, T]],
          [/(sprint) (\w+)/i],
          [v, h, [g, x]],
          [/(kin\.[onetw]{3})/i],
          [
            [h, /\./g, " "],
            [v, se],
            [g, x],
          ],
          [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [h, [v, tn], [g, T]],
          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
          [h, [v, tn], [g, x]],
          [/smart-tv.+(samsung)/i],
          [v, [g, _]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [h, /^/, "SmartTV"],
            [v, tt],
            [g, _],
          ],
          [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
          [
            [v, ne],
            [g, _],
          ],
          [/(apple) ?tv/i],
          [v, [h, I + " TV"], [g, _]],
          [/crkey/i],
          [
            [h, j + "cast"],
            [v, ye],
            [g, _],
          ],
          [/droid.+aft(\w+)( bui|\))/i],
          [h, [v, k], [g, _]],
          [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
          [h, [v, at], [g, _]],
          [/(bravia[\w ]+)( bui|\))/i],
          [h, [v, Pe], [g, _]],
          [/(mitv-\w{5}) bui/i],
          [h, [v, Ye], [g, _]],
          [/Hbbtv.*(technisat) (.*);/i],
          [v, h, [g, _]],
          [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
          [
            [v, lt],
            [h, lt],
            [g, _],
          ],
          [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
          [[g, _]],
          [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
          [v, h, [g, w]],
          [/droid.+; (shield) bui/i],
          [h, [v, "Nvidia"], [g, w]],
          [/(playstation [345portablevi]+)/i],
          [h, [v, Pe], [g, w]],
          [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
          [h, [v, se], [g, w]],
          [/((pebble))app/i],
          [v, h, [g, O]],
          [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
          [h, [v, I], [g, O]],
          [/droid.+; (glass) \d/i],
          [h, [v, ye], [g, O]],
          [/droid.+; (wt63?0{2,3})\)/i],
          [h, [v, tn], [g, O]],
          [/(quest( 2| pro)?)/i],
          [h, [v, G], [g, O]],
          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
          [v, [g, B]],
          [/(aeobc)\b/i],
          [h, [v, k], [g, B]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
          [h, [g, x]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
          [h, [g, T]],
          [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
          [[g, T]],
          [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
          [[g, x]],
          [/(android[-\w\. ]{0,9});.+buil/i],
          [h, [v, "Generic"]],
        ],
        engine: [
          [/windows.+ edge\/([\w\.]+)/i],
          [P, [p, W + "HTML"]],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [P, [p, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
            /ekioh(flow)\/([\w\.]+)/i,
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            /\b(libweb)/i,
          ],
          [p, P],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [P, p],
        ],
        os: [
          [/microsoft (windows) (vista|xp)/i],
          [p, P],
          [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
          [p, [P, Te, $t]],
          [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
          [
            [p, "Windows"],
            [P, Te, $t],
          ],
          [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
          [
            [P, /_/g, "."],
            [p, "iOS"],
          ],
          [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
          [
            [p, U],
            [P, /_/g, "."],
          ],
          [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
          [P, p],
          [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
          [p, P],
          [/\(bb(10);/i],
          [P, [p, L]],
          [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
          [P, [p, "Symbian"]],
          [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
          [P, [p, oe + " OS"]],
          [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
          [P, [p, "webOS"]],
          [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
          [P, [p, "watchOS"]],
          [/crkey\/([\d\.]+)/i],
          [P, [p, j + "cast"]],
          [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
          [[p, K], P],
          [
            /panasonic;(viera)/i,
            /(netrange)mmh/i,
            /(nettv)\/(\d+\.[\w\.]+)/i,
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            /(xbox); +xbox ([^\);]+)/i,
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            /(mint)[\/\(\) ]?(\w*)/i,
            /(mageia|vectorlinux)[; ]/i,
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            /(hurd|linux) ?([\w\.]*)/i,
            /(gnu) ?([\w\.]*)/i,
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            /(haiku) (\w+)/i,
          ],
          [p, P],
          [/(sunos) ?([\w\.\d]*)/i],
          [[p, "Solaris"], P],
          [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
          [p, P],
        ],
      },
      Ht = function ($e, Qe) {
        if ((typeof $e === u && ((Qe = $e), ($e = r)), !(this instanceof Ht))) return new Ht($e, Qe).getResult();
        var Le = typeof n !== l && n.navigator ? n.navigator : r,
          ut = $e || (Le && Le.userAgent ? Le.userAgent : o),
          nr = Le && Le.userAgentData ? Le.userAgentData : r,
          Wn = Qe ? q(ti, Qe) : ti,
          Xe = Le && Le.userAgent == ut;
        return (
          (this.getBrowser = function () {
            var _e = {};
            return (_e[p] = r), (_e[P] = r), dt.call(_e, ut, Wn.browser), (_e[f] = be(_e[P])), Xe && Le && Le.brave && typeof Le.brave.isBrave == a && (_e[p] = "Brave"), _e;
          }),
          (this.getCPU = function () {
            var _e = {};
            return (_e[y] = r), dt.call(_e, ut, Wn.cpu), _e;
          }),
          (this.getDevice = function () {
            var _e = {};
            return (
              (_e[v] = r),
              (_e[h] = r),
              (_e[g] = r),
              dt.call(_e, ut, Wn.device),
              Xe && !_e[g] && nr && nr.mobile && (_e[g] = x),
              Xe && _e[h] == "Macintosh" && Le && typeof Le.standalone !== l && Le.maxTouchPoints && Le.maxTouchPoints > 2 && ((_e[h] = "iPad"), (_e[g] = T)),
              _e
            );
          }),
          (this.getEngine = function () {
            var _e = {};
            return (_e[p] = r), (_e[P] = r), dt.call(_e, ut, Wn.engine), _e;
          }),
          (this.getOS = function () {
            var _e = {};
            return (
              (_e[p] = r),
              (_e[P] = r),
              dt.call(_e, ut, Wn.os),
              Xe && !_e[p] && nr && nr.platform != "Unknown" && (_e[p] = nr.platform.replace(/chrome os/i, K).replace(/macos/i, U)),
              _e
            );
          }),
          (this.getResult = function () {
            return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
          }),
          (this.getUA = function () {
            return ut;
          }),
          (this.setUA = function (_e) {
            return (ut = typeof _e === c && _e.length > A ? lt(_e, A) : _e), this;
          }),
          this.setUA(ut),
          this
        );
      };
    (Ht.VERSION = i),
      (Ht.BROWSER = Z([p, P, f])),
      (Ht.CPU = Z([y])),
      (Ht.DEVICE = Z([h, v, g, w, x, _, T, O, B])),
      (Ht.ENGINE = Ht.OS = Z([p, P])),
      e.exports && (t = e.exports = Ht),
      (t.UAParser = Ht);
    var _n = typeof n !== l && (n.jQuery || n.Zepto);
    if (_n && !_n.ua) {
      var An = new Ht();
      (_n.ua = An.getResult()),
        (_n.ua.get = function () {
          return An.getUA();
        }),
        (_n.ua.set = function ($e) {
          An.setUA($e);
          var Qe = An.getResult();
          for (var Le in Qe) _n.ua[Le] = Qe[Le];
        });
    }
  })(typeof window == "object" ? window : ag);
})(v0, v0.exports);
var XS = v0.exports;
const JS = po(XS);
var eb = function (t) {
  return tb(t) && !nb(t);
};
function tb(e) {
  return !!e && typeof e == "object";
}
function nb(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || ob(e);
}
var rb = typeof Symbol == "function" && Symbol.for,
  ib = rb ? Symbol.for("react.element") : 60103;
function ob(e) {
  return e.$$typeof === ib;
}
function sb(e) {
  return Array.isArray(e) ? [] : {};
}
function Ia(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? cs(sb(e), e, t) : e;
}
function ab(e, t, n) {
  return e.concat(t).map(function (r) {
    return Ia(r, n);
  });
}
function lb(e, t) {
  if (!t.customMerge) return cs;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : cs;
}
function ub(e) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(e).filter(function (t) {
        return Object.propertyIsEnumerable.call(e, t);
      })
    : [];
}
function s4(e) {
  return Object.keys(e).concat(ub(e));
}
function ay(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function cb(e, t) {
  return ay(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function fb(e, t, n) {
  var r = {};
  return (
    n.isMergeableObject(e) &&
      s4(e).forEach(function (i) {
        r[i] = Ia(e[i], n);
      }),
    s4(t).forEach(function (i) {
      cb(e, i) || (ay(e, i) && n.isMergeableObject(t[i]) ? (r[i] = lb(i, n)(e[i], t[i], n)) : (r[i] = Ia(t[i], n)));
    }),
    r
  );
}
function cs(e, t, n) {
  (n = n || {}), (n.arrayMerge = n.arrayMerge || ab), (n.isMergeableObject = n.isMergeableObject || eb), (n.cloneUnlessOtherwiseSpecified = Ia);
  var r = Array.isArray(t),
    i = Array.isArray(e),
    o = r === i;
  return o ? (r ? n.arrayMerge(e, t, n) : fb(e, t, n)) : Ia(t, n);
}
cs.all = function (t, n) {
  if (!Array.isArray(t)) throw new Error("first argument should be an array");
  return t.reduce(function (r, i) {
    return cs(r, i, n);
  }, {});
};
var db = cs,
  hb = db;
const pb = po(hb);
var mb = Object.defineProperty,
  gb = Object.defineProperties,
  vb = Object.getOwnPropertyDescriptors,
  a4 = Object.getOwnPropertySymbols,
  yb = Object.prototype.hasOwnProperty,
  wb = Object.prototype.propertyIsEnumerable,
  y0 = (e, t, n) => (t in e ? mb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
  ht = (e, t) => {
    for (var n in t || (t = {})) yb.call(t, n) && y0(e, n, t[n]);
    if (a4) for (var n of a4(t)) wb.call(t, n) && y0(e, n, t[n]);
    return e;
  },
  Qn = (e, t) => gb(e, vb(t)),
  gn = (e, t, n) => (y0(e, typeof t != "symbol" ? t + "" : t, n), n),
  Ln = (e, t, n) =>
    new Promise((r, i) => {
      var o = (l) => {
          try {
            a(n.next(l));
          } catch (u) {
            i(u);
          }
        },
        s = (l) => {
          try {
            a(n.throw(l));
          } catch (u) {
            i(u);
          }
        },
        a = (l) => (l.done ? r(l.value) : Promise.resolve(l.value).then(o, s));
      a((n = n.apply(e, t)).next());
    }),
  l4;
const wt = {};
function xb(e) {
  wt.context = e;
}
const Cb = (e, t) => e === t,
  dr = Symbol("solid-proxy"),
  w0 = Symbol("solid-track"),
  Fu = { equals: Cb };
let ly = py;
const Xr = 1,
  Uu = 2,
  uy = { owned: null, cleanups: null, context: null, owner: null },
  $f = {};
var zt = null;
let oo = null,
  St = null,
  fn = null,
  zr = null,
  oh = 0;
function na(e, t) {
  const n = St,
    r = zt,
    i = e.length === 0,
    o = i ? uy : { owned: null, cleanups: null, context: null, owner: t === void 0 ? r : t },
    s = i ? e : () => e(() => Zt(() => $c(o)));
  (zt = o), (St = null);
  try {
    return Mi(s, !0);
  } finally {
    (St = n), (zt = r);
  }
}
function ze(e, t) {
  t = t ? Object.assign({}, Fu, t) : Fu;
  const n = { value: e, observers: null, observerSlots: null, comparator: t.equals || void 0 },
    r = (i) => (typeof i == "function" && (i = i(n.value)), hy(n, i));
  return [dy.bind(n), r];
}
function zu(e, t, n) {
  const r = Bc(e, t, !0, Xr);
  ws(r);
}
function He(e, t, n) {
  const r = Bc(e, t, !1, Xr);
  ws(r);
}
function hr(e, t, n) {
  ly = kb;
  const r = Bc(e, t, !1, Xr);
  (r.user = !0), zr ? zr.push(r) : ws(r);
}
function ge(e, t, n) {
  n = n ? Object.assign({}, Fu, n) : Fu;
  const r = Bc(e, t, !0, 0);
  return (r.observers = null), (r.observerSlots = null), (r.comparator = n.equals || void 0), ws(r), dy.bind(r);
}
function Sb(e, t, n) {
  let r, i, o;
  (arguments.length === 2 && typeof t == "object") || arguments.length === 1 ? ((r = !0), (i = e), (o = t || {})) : ((r = e), (i = t), (o = n || {}));
  let s = null,
    a = $f,
    l = null,
    u = !1,
    c = "initialValue" in o,
    f = typeof r == "function" && ge(r);
  const h = new Set(),
    [p, g] = (o.storage || ze)(o.initialValue),
    [v, P] = ze(void 0),
    [y, w] = ze(void 0, { equals: !1 }),
    [x, T] = ze(c ? "ready" : "unresolved");
  if (wt.context) {
    l = `${wt.context.id}${wt.context.count++}`;
    let k;
    o.ssrLoadFrom === "initial" ? (a = o.initialValue) : wt.load && (k = wt.load(l)) && (a = k[0]);
  }
  function _(k, I, M, L) {
    return s === k && ((s = null), (c = !0), (k === a || I === a) && o.onHydrated && queueMicrotask(() => o.onHydrated(L, { value: I })), (a = $f), O(I, M)), I;
  }
  function O(k, I) {
    Mi(() => {
      I === void 0 && g(() => k), T(I !== void 0 ? "errored" : "ready"), P(I);
      for (const M of h.keys()) M.decrement();
      h.clear();
    }, !1);
  }
  function B() {
    const k = Pb,
      I = p(),
      M = v();
    if (M !== void 0 && !s) throw M;
    return (
      St &&
        !St.user &&
        k &&
        zu(() => {
          y(), s && (k.resolved || h.has(k) || (k.increment(), h.add(k)));
        }),
      I
    );
  }
  function A(k = !0) {
    if (k !== !1 && u) return;
    u = !1;
    const I = f ? f() : r;
    if (I == null || I === !1) {
      _(s, Zt(p));
      return;
    }
    const M = a !== $f ? a : Zt(() => i(I, { value: p(), refetching: k }));
    return typeof M != "object" || !(M && "then" in M)
      ? (_(s, M, void 0, I), M)
      : ((s = M),
        (u = !0),
        queueMicrotask(() => (u = !1)),
        Mi(() => {
          T(c ? "refreshing" : "pending"), w();
        }, !1),
        M.then(
          (L) => _(M, L, void 0, I),
          (L) => _(M, void 0, gy(L), I)
        ));
  }
  return (
    Object.defineProperties(B, {
      state: { get: () => x() },
      error: { get: () => v() },
      loading: {
        get() {
          const k = x();
          return k === "pending" || k === "refreshing";
        },
      },
      latest: {
        get() {
          if (!c) return B();
          const k = v();
          if (k && !s) throw k;
          return p();
        },
      },
    }),
    f ? zu(() => A(!1)) : A(!1),
    [B, { refetch: A, mutate: g }]
  );
}
function cy(e) {
  return Mi(e, !1);
}
function Zt(e) {
  if (St === null) return e();
  const t = St;
  St = null;
  try {
    return e();
  } finally {
    St = t;
  }
}
function bb(e, t, n) {
  const r = Array.isArray(e);
  let i,
    o = n && n.defer;
  return (s) => {
    let a;
    if (r) {
      a = Array(e.length);
      for (let u = 0; u < e.length; u++) a[u] = e[u]();
    } else a = e();
    if (o) {
      o = !1;
      return;
    }
    const l = Zt(() => t(a, i, s));
    return (i = a), l;
  };
}
function Eb(e) {
  hr(() => Zt(e));
}
function pr(e) {
  return zt === null || (zt.cleanups === null ? (zt.cleanups = [e]) : zt.cleanups.push(e)), e;
}
function fy() {
  return St;
}
function Tb() {
  return zt;
}
function Ic(e, t) {
  const n = Symbol("context");
  return { id: n, Provider: Lb(n), defaultValue: e };
}
function Nn(e) {
  let t;
  return (t = yy(zt, e.id)) !== void 0 ? t : e.defaultValue;
}
function Oc(e) {
  const t = ge(e),
    n = ge(() => x0(t()));
  return (
    (n.toArray = () => {
      const r = n();
      return Array.isArray(r) ? r : r != null ? [r] : [];
    }),
    n
  );
}
let Pb;
function dy() {
  const e = oo;
  if (this.sources && (this.state || e))
    if (this.state === Xr || e) ws(this);
    else {
      const t = fn;
      (fn = null), Mi(() => Hu(this), !1), (fn = t);
    }
  if (St) {
    const t = this.observers ? this.observers.length : 0;
    St.sources ? (St.sources.push(this), St.sourceSlots.push(t)) : ((St.sources = [this]), (St.sourceSlots = [t])),
      this.observers ? (this.observers.push(St), this.observerSlots.push(St.sources.length - 1)) : ((this.observers = [St]), (this.observerSlots = [St.sources.length - 1]));
  }
  return this.value;
}
function hy(e, t, n) {
  let r = e.value;
  return (
    (!e.comparator || !e.comparator(r, t)) &&
      ((e.value = t),
      e.observers &&
        e.observers.length &&
        Mi(() => {
          for (let i = 0; i < e.observers.length; i += 1) {
            const o = e.observers[i],
              s = oo && oo.running;
            s && oo.disposed.has(o), ((s && !o.tState) || (!s && !o.state)) && (o.pure ? fn.push(o) : zr.push(o), o.observers && my(o)), s || (o.state = Xr);
          }
          if (fn.length > 1e6) throw ((fn = []), new Error());
        }, !1)),
    t
  );
}
function ws(e) {
  if (!e.fn) return;
  $c(e);
  const t = zt,
    n = St,
    r = oh;
  (St = zt = e), _b(e, e.value, r), (St = n), (zt = t);
}
function _b(e, t, n) {
  let r;
  try {
    r = e.fn(t);
  } catch (i) {
    e.pure && ((e.state = Xr), e.owned && e.owned.forEach($c), (e.owned = null)), vy(i);
  }
  (!e.updatedAt || e.updatedAt <= n) && (e.updatedAt != null && "observers" in e ? hy(e, r) : (e.value = r), (e.updatedAt = n));
}
function Bc(e, t, n, r = Xr, i) {
  const o = { fn: e, state: r, updatedAt: null, owned: null, sources: null, sourceSlots: null, cleanups: null, value: t, owner: zt, context: null, pure: n };
  return zt === null || (zt !== uy && (zt.owned ? zt.owned.push(o) : (zt.owned = [o]))), o;
}
function Wu(e) {
  const t = oo;
  if (e.state === 0 || t) return;
  if (e.state === Uu || t) return Hu(e);
  if (e.suspense && Zt(e.suspense.inFallback)) return e.suspense.effects.push(e);
  const n = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < oh); ) (e.state || t) && n.push(e);
  for (let r = n.length - 1; r >= 0; r--)
    if (((e = n[r]), e.state === Xr || t)) ws(e);
    else if (e.state === Uu || t) {
      const i = fn;
      (fn = null), Mi(() => Hu(e, n[0]), !1), (fn = i);
    }
}
function Mi(e, t) {
  if (fn) return e();
  let n = !1;
  t || (fn = []), zr ? (n = !0) : (zr = []), oh++;
  try {
    const r = e();
    return Ab(n), r;
  } catch (r) {
    n || (zr = null), (fn = null), vy(r);
  }
}
function Ab(e) {
  if ((fn && (py(fn), (fn = null)), e)) return;
  const t = zr;
  (zr = null), t.length && Mi(() => ly(t), !1);
}
function py(e) {
  for (let t = 0; t < e.length; t++) Wu(e[t]);
}
function kb(e) {
  let t,
    n = 0;
  for (t = 0; t < e.length; t++) {
    const r = e[t];
    r.user ? (e[n++] = r) : Wu(r);
  }
  for (wt.context && xb(), t = 0; t < n; t++) Wu(e[t]);
}
function Hu(e, t) {
  const n = oo;
  e.state = 0;
  for (let r = 0; r < e.sources.length; r += 1) {
    const i = e.sources[r];
    i.sources && (i.state === Xr || n ? i !== t && Wu(i) : (i.state === Uu || n) && Hu(i, t));
  }
}
function my(e) {
  const t = oo;
  for (let n = 0; n < e.observers.length; n += 1) {
    const r = e.observers[n];
    (!r.state || t) && ((r.state = Uu), r.pure ? fn.push(r) : zr.push(r), r.observers && my(r));
  }
}
function $c(e) {
  let t;
  if (e.sources)
    for (; e.sources.length; ) {
      const n = e.sources.pop(),
        r = e.sourceSlots.pop(),
        i = n.observers;
      if (i && i.length) {
        const o = i.pop(),
          s = n.observerSlots.pop();
        r < i.length && ((o.sourceSlots[s] = r), (i[r] = o), (n.observerSlots[r] = s));
      }
    }
  if (e.owned) {
    for (t = 0; t < e.owned.length; t++) $c(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = 0; t < e.cleanups.length; t++) e.cleanups[t]();
    e.cleanups = null;
  }
  (e.state = 0), (e.context = null);
}
function gy(e) {
  return e instanceof Error || typeof e == "string" ? e : new Error("Unknown error");
}
function vy(e) {
  throw ((e = gy(e)), e);
}
function yy(e, t) {
  return e ? (e.context && e.context[t] !== void 0 ? e.context[t] : yy(e.owner, t)) : void 0;
}
function x0(e) {
  if (typeof e == "function" && !e.length) return x0(e());
  if (Array.isArray(e)) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const r = x0(e[n]);
      Array.isArray(r) ? t.push.apply(t, r) : t.push(r);
    }
    return t;
  }
  return e;
}
function Lb(e, t) {
  return function (r) {
    let i;
    return He(() => (i = Zt(() => ((zt.context = { [e]: r.value }), Oc(() => r.children)))), void 0), i;
  };
}
const Mb = Symbol("fallback");
function u4(e) {
  for (let t = 0; t < e.length; t++) e[t]();
}
function Rb(e, t, n = {}) {
  let r = [],
    i = [],
    o = [],
    s = 0,
    a = t.length > 1 ? [] : null;
  return (
    pr(() => u4(o)),
    () => {
      let l = e() || [],
        u,
        c;
      return (
        l[w0],
        Zt(() => {
          let h = l.length,
            p,
            g,
            v,
            P,
            y,
            w,
            x,
            T,
            _;
          if (h === 0)
            s !== 0 && (u4(o), (o = []), (r = []), (i = []), (s = 0), a && (a = [])), n.fallback && ((r = [Mb]), (i[0] = na((O) => ((o[0] = O), n.fallback()))), (s = 1));
          else if (s === 0) {
            for (i = new Array(h), c = 0; c < h; c++) (r[c] = l[c]), (i[c] = na(f));
            s = h;
          } else {
            for (v = new Array(h), P = new Array(h), a && (y = new Array(h)), w = 0, x = Math.min(s, h); w < x && r[w] === l[w]; w++);
            for (x = s - 1, T = h - 1; x >= w && T >= w && r[x] === l[T]; x--, T--) (v[T] = i[x]), (P[T] = o[x]), a && (y[T] = a[x]);
            for (p = new Map(), g = new Array(T + 1), c = T; c >= w; c--) (_ = l[c]), (u = p.get(_)), (g[c] = u === void 0 ? -1 : u), p.set(_, c);
            for (u = w; u <= x; u++) (_ = r[u]), (c = p.get(_)), c !== void 0 && c !== -1 ? ((v[c] = i[u]), (P[c] = o[u]), a && (y[c] = a[u]), (c = g[c]), p.set(_, c)) : o[u]();
            for (c = w; c < h; c++) c in v ? ((i[c] = v[c]), (o[c] = P[c]), a && ((a[c] = y[c]), a[c](c))) : (i[c] = na(f));
            (i = i.slice(0, (s = h))), (r = l.slice(0));
          }
          return i;
        })
      );
      function f(h) {
        if (((o[c] = h), a)) {
          const [p, g] = ze(c);
          return (a[c] = g), t(l[c], p);
        }
        return t(l[c]);
      }
    }
  );
}
function b(e, t) {
  return Zt(() => e(t || {}));
}
function Al() {
  return !0;
}
const C0 = {
  get(e, t, n) {
    return t === dr ? n : e.get(t);
  },
  has(e, t) {
    return t === dr ? !0 : e.has(t);
  },
  set: Al,
  deleteProperty: Al,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t);
      },
      set: Al,
      deleteProperty: Al,
    };
  },
  ownKeys(e) {
    return e.keys();
  },
};
function Df(e) {
  return (e = typeof e == "function" ? e() : e) ? e : {};
}
function br(...e) {
  let t = !1;
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    (t = t || (!!i && dr in i)), (e[r] = typeof i == "function" ? ((t = !0), ge(i)) : i);
  }
  if (t)
    return new Proxy(
      {
        get(r) {
          for (let i = e.length - 1; i >= 0; i--) {
            const o = Df(e[i])[r];
            if (o !== void 0) return o;
          }
        },
        has(r) {
          for (let i = e.length - 1; i >= 0; i--) if (r in Df(e[i])) return !0;
          return !1;
        },
        keys() {
          const r = [];
          for (let i = 0; i < e.length; i++) r.push(...Object.keys(Df(e[i])));
          return [...new Set(r)];
        },
      },
      C0
    );
  const n = {};
  for (let r = e.length - 1; r >= 0; r--)
    if (e[r]) {
      const i = Object.getOwnPropertyDescriptors(e[r]);
      for (const o in i)
        o in n ||
          Object.defineProperty(n, o, {
            enumerable: !0,
            get() {
              for (let s = e.length - 1; s >= 0; s--) {
                const a = (e[s] || {})[o];
                if (a !== void 0) return a;
              }
            },
          });
    }
  return n;
}
function sh(e, ...t) {
  const n = new Set(t.flat());
  if (dr in e) {
    const i = t.map(
      (o) =>
        new Proxy(
          {
            get(s) {
              return o.includes(s) ? e[s] : void 0;
            },
            has(s) {
              return o.includes(s) && s in e;
            },
            keys() {
              return o.filter((s) => s in e);
            },
          },
          C0
        )
    );
    return (
      i.push(
        new Proxy(
          {
            get(o) {
              return n.has(o) ? void 0 : e[o];
            },
            has(o) {
              return n.has(o) ? !1 : o in e;
            },
            keys() {
              return Object.keys(e).filter((o) => !n.has(o));
            },
          },
          C0
        )
      ),
      i
    );
  }
  const r = Object.getOwnPropertyDescriptors(e);
  return (
    t.push(Object.keys(r).filter((i) => !n.has(i))),
    t.map((i) => {
      const o = {};
      for (let s = 0; s < i.length; s++) {
        const a = i[s];
        a in e &&
          Object.defineProperty(
            o,
            a,
            r[a]
              ? r[a]
              : {
                  get() {
                    return e[a];
                  },
                  set() {
                    return !0;
                  },
                  enumerable: !0,
                }
          );
      }
      return o;
    })
  );
}
function qa(e) {
  const t = "fallback" in e && { fallback: () => e.fallback };
  return ge(Rb(() => e.each, e.children, t || void 0));
}
function Ge(e) {
  let t = !1;
  const n = e.keyed,
    r = ge(() => e.when, void 0, { equals: (i, o) => (t ? i === o : !i == !o) });
  return ge(
    () => {
      const i = r();
      if (i) {
        const o = e.children,
          s = typeof o == "function" && o.length > 0;
        return (t = n || s), s ? Zt(() => o(i)) : o;
      }
      return e.fallback;
    },
    void 0,
    void 0
  );
}
function Ya(e) {
  let t = !1,
    n = !1;
  const r = (s, a) => s[0] === a[0] && (t ? s[1] === a[1] : !s[1] == !a[1]) && s[2] === a[2],
    i = Oc(() => e.children),
    o = ge(
      () => {
        let s = i();
        Array.isArray(s) || (s = [s]);
        for (let a = 0; a < s.length; a++) {
          const l = s[a].when;
          if (l) return (n = !!s[a].keyed), [a, l, s[a]];
        }
        return [-1];
      },
      void 0,
      { equals: r }
    );
  return ge(
    () => {
      const [s, a, l] = o();
      if (s < 0) return e.fallback;
      const u = l.children,
        c = typeof u == "function" && u.length > 0;
      return (t = n || c), c ? Zt(() => u(a)) : u;
    },
    void 0,
    void 0
  );
}
function Xt(e) {
  return e;
}
const Ib = [
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "indeterminate",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected",
  ],
  Ob = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...Ib]),
  Bb = new Set(["innerHTML", "textContent", "innerText", "children"]),
  $b = Object.assign(Object.create(null), { className: "class", htmlFor: "for" }),
  c4 = Object.assign(Object.create(null), {
    class: "className",
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly",
  }),
  Db = new Set([
    "beforeinput",
    "click",
    "dblclick",
    "contextmenu",
    "focusin",
    "focusout",
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pointerdown",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "touchend",
    "touchmove",
    "touchstart",
  ]),
  Nb = new Set([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "set",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ]),
  Vb = { xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace" };
function jb(e, t, n) {
  let r = n.length,
    i = t.length,
    o = r,
    s = 0,
    a = 0,
    l = t[i - 1].nextSibling,
    u = null;
  for (; s < i || a < o; ) {
    if (t[s] === n[a]) {
      s++, a++;
      continue;
    }
    for (; t[i - 1] === n[o - 1]; ) i--, o--;
    if (i === s) {
      const c = o < r ? (a ? n[a - 1].nextSibling : n[o - a]) : l;
      for (; a < o; ) e.insertBefore(n[a++], c);
    } else if (o === a) for (; s < i; ) (!u || !u.has(t[s])) && t[s].remove(), s++;
    else if (t[s] === n[o - 1] && n[a] === t[i - 1]) {
      const c = t[--i].nextSibling;
      e.insertBefore(n[a++], t[s++].nextSibling), e.insertBefore(n[--o], c), (t[i] = n[o]);
    } else {
      if (!u) {
        u = new Map();
        let f = a;
        for (; f < o; ) u.set(n[f], f++);
      }
      const c = u.get(t[s]);
      if (c != null)
        if (a < c && c < o) {
          let f = s,
            h = 1,
            p;
          for (; ++f < i && f < o && !((p = u.get(t[f])) == null || p !== c + h); ) h++;
          if (h > c - a) {
            const g = t[s];
            for (; a < c; ) e.insertBefore(n[a++], g);
          } else e.replaceChild(n[a++], t[s++]);
        } else s++;
      else t[s++].remove();
    }
  }
}
const f4 = "_$DX_DELEGATE";
function Fb(e, t, n, r = {}) {
  let i;
  return (
    na((o) => {
      (i = o), t === document ? e() : cn(t, e(), t.firstChild ? null : void 0, n);
    }, r.owner),
    () => {
      i(), (t.textContent = "");
    }
  );
}
function qe(e, t, n) {
  if (typeof window > "u") return null;
  const r = document.createElement("template");
  r.innerHTML = e;
  let i = r.content.firstChild;
  return n && (i = i.firstChild), i;
}
function Ub(e, t = window.document) {
  const n = t[f4] || (t[f4] = new Set());
  for (let r = 0, i = e.length; r < i; r++) {
    const o = e[r];
    n.has(o) || (n.add(o), t.addEventListener(o, Zb));
  }
}
function Se(e, t, n) {
  n == null ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function zb(e, t, n, r) {
  r == null ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, r);
}
function ah(e, t) {
  t == null ? e.removeAttribute("class") : (e.className = t);
}
function Wb(e, t, n, r) {
  if (r) Array.isArray(n) ? ((e[`$$${t}`] = n[0]), (e[`$$${t}Data`] = n[1])) : (e[`$$${t}`] = n);
  else if (Array.isArray(n)) {
    const i = n[0];
    e.addEventListener(t, (n[0] = (o) => i.call(e, n[1], o)));
  } else e.addEventListener(t, n);
}
function Hb(e, t, n = {}) {
  const r = Object.keys(t || {}),
    i = Object.keys(n);
  let o, s;
  for (o = 0, s = i.length; o < s; o++) {
    const a = i[o];
    !a || a === "undefined" || t[a] || (d4(e, a, !1), delete n[a]);
  }
  for (o = 0, s = r.length; o < s; o++) {
    const a = r[o],
      l = !!t[a];
    !a || a === "undefined" || n[a] === l || !l || (d4(e, a, !0), (n[a] = l));
  }
  return n;
}
function Kb(e, t, n) {
  if (!t) return n ? Se(e, "style") : t;
  const r = e.style;
  if (typeof t == "string") return (r.cssText = t);
  typeof n == "string" && (r.cssText = n = void 0), n || (n = {}), t || (t = {});
  let i, o;
  for (o in n) t[o] == null && r.removeProperty(o), delete n[o];
  for (o in t) (i = t[o]), i !== n[o] && (r.setProperty(o, i), (n[o] = i));
  return n;
}
function wy(e, t = {}, n, r) {
  const i = {};
  return r || He(() => (i.children = fs(e, t.children, i.children))), He(() => t.ref && t.ref(e)), He(() => Gb(e, t, n, !0, i, !0)), i;
}
function Ku(e, t, n) {
  return Zt(() => e(t, n));
}
function cn(e, t, n, r) {
  if ((n !== void 0 && !r && (r = []), typeof t != "function")) return fs(e, t, r, n);
  He((i) => fs(e, t(), i, n), r);
}
function Gb(e, t, n, r, i = {}, o = !1) {
  t || (t = {});
  for (const s in i)
    if (!(s in t)) {
      if (s === "children") continue;
      i[s] = h4(e, s, null, i[s], n, o);
    }
  for (const s in t) {
    if (s === "children") {
      r || fs(e, t.children);
      continue;
    }
    const a = t[s];
    i[s] = h4(e, s, a, i[s], n, o);
  }
}
function qb(e) {
  let t, n;
  return !wt.context || !(t = wt.registry.get((n = Qb()))) ? e.cloneNode(!0) : (wt.completed && wt.completed.add(t), wt.registry.delete(n), t);
}
function Yb(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (t, n) => n.toUpperCase());
}
function d4(e, t, n) {
  const r = t.trim().split(/\s+/);
  for (let i = 0, o = r.length; i < o; i++) e.classList.toggle(r[i], n);
}
function h4(e, t, n, r, i, o) {
  let s, a, l;
  if (t === "style") return Kb(e, n, r);
  if (t === "classList") return Hb(e, n, r);
  if (n === r) return r;
  if (t === "ref") o || n(e);
  else if (t.slice(0, 3) === "on:") {
    const u = t.slice(3);
    r && e.removeEventListener(u, r), n && e.addEventListener(u, n);
  } else if (t.slice(0, 10) === "oncapture:") {
    const u = t.slice(10);
    r && e.removeEventListener(u, r, !0), n && e.addEventListener(u, n, !0);
  } else if (t.slice(0, 2) === "on") {
    const u = t.slice(2).toLowerCase(),
      c = Db.has(u);
    if (!c && r) {
      const f = Array.isArray(r) ? r[0] : r;
      e.removeEventListener(u, f);
    }
    (c || n) && (Wb(e, u, n, c), c && Ub([u]));
  } else if ((l = Bb.has(t)) || (!i && (c4[t] || (a = Ob.has(t)))) || (s = e.nodeName.includes("-")))
    t === "class" || t === "className" ? ah(e, n) : s && !a && !l ? (e[Yb(t)] = n) : (e[c4[t] || t] = n);
  else {
    const u = i && t.indexOf(":") > -1 && Vb[t.split(":")[0]];
    u ? zb(e, u, t, n) : Se(e, $b[t] || t, n);
  }
  return n;
}
function Zb(e) {
  const t = `$$${e.type}`;
  let n = (e.composedPath && e.composedPath()[0]) || e.target;
  for (
    e.target !== n && Object.defineProperty(e, "target", { configurable: !0, value: n }),
      Object.defineProperty(e, "currentTarget", {
        configurable: !0,
        get() {
          return n || document;
        },
      }),
      wt.registry &&
        !wt.done &&
        ((wt.done = !0),
        document.querySelectorAll("[id^=pl-]").forEach((r) => {
          for (; r && r.nodeType !== 8 && r.nodeValue !== "pl-" + e; ) {
            let i = r.nextSibling;
            r.remove(), (r = i);
          }
          r && r.remove();
        }));
    n;

  ) {
    const r = n[t];
    if (r && !n.disabled) {
      const i = n[`${t}Data`];
      if ((i !== void 0 ? r.call(n, i, e) : r.call(n, e), e.cancelBubble)) return;
    }
    n = n._$host || n.parentNode || n.host;
  }
}
function fs(e, t, n, r, i) {
  for (wt.context && !n && (n = [...e.childNodes]); typeof n == "function"; ) n = n();
  if (t === n) return n;
  const o = typeof t,
    s = r !== void 0;
  if (((e = (s && n[0] && n[0].parentNode) || e), o === "string" || o === "number")) {
    if (wt.context) return n;
    if ((o === "number" && (t = t.toString()), s)) {
      let a = n[0];
      a && a.nodeType === 3 ? (a.data = t) : (a = document.createTextNode(t)), (n = To(e, n, r, a));
    } else n !== "" && typeof n == "string" ? (n = e.firstChild.data = t) : (n = e.textContent = t);
  } else if (t == null || o === "boolean") {
    if (wt.context) return n;
    n = To(e, n, r);
  } else {
    if (o === "function")
      return (
        He(() => {
          let a = t();
          for (; typeof a == "function"; ) a = a();
          n = fs(e, a, n, r);
        }),
        () => n
      );
    if (Array.isArray(t)) {
      const a = [],
        l = n && Array.isArray(n);
      if (S0(a, t, n, i)) return He(() => (n = fs(e, a, n, r, !0))), () => n;
      if (wt.context) {
        if (!a.length) return n;
        for (let u = 0; u < a.length; u++) if (a[u].parentNode) return (n = a);
      }
      if (a.length === 0) {
        if (((n = To(e, n, r)), s)) return n;
      } else l ? (n.length === 0 ? p4(e, a, r) : jb(e, n, a)) : (n && To(e), p4(e, a));
      n = a;
    } else if (t instanceof Node) {
      if (wt.context && t.parentNode) return (n = s ? [t] : t);
      if (Array.isArray(n)) {
        if (s) return (n = To(e, n, r, t));
        To(e, n, null, t);
      } else n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t;
    }
  }
  return n;
}
function S0(e, t, n, r) {
  let i = !1;
  for (let o = 0, s = t.length; o < s; o++) {
    let a = t[o],
      l = n && n[o];
    if (a instanceof Node) e.push(a);
    else if (!(a == null || a === !0 || a === !1))
      if (Array.isArray(a)) i = S0(e, a, l) || i;
      else if (typeof a == "function")
        if (r) {
          for (; typeof a == "function"; ) a = a();
          i = S0(e, Array.isArray(a) ? a : [a], Array.isArray(l) ? l : [l]) || i;
        } else e.push(a), (i = !0);
      else {
        const u = String(a);
        l && l.nodeType === 3 && l.data === u ? e.push(l) : e.push(document.createTextNode(u));
      }
  }
  return i;
}
function p4(e, t, n = null) {
  for (let r = 0, i = t.length; r < i; r++) e.insertBefore(t[r], n);
}
function To(e, t, n, r) {
  if (n === void 0) return (e.textContent = "");
  const i = r || document.createTextNode("");
  if (t.length) {
    let o = !1;
    for (let s = t.length - 1; s >= 0; s--) {
      const a = t[s];
      if (i !== a) {
        const l = a.parentNode === e;
        !o && !s ? (l ? e.replaceChild(i, a) : e.insertBefore(i, n)) : l && a.remove();
      } else o = !0;
    }
  } else e.insertBefore(i, n);
  return [i];
}
function Qb() {
  const e = wt.context;
  return `${e.id}${e.count++}`;
}
const Xb = "http://www.w3.org/2000/svg";
function xy(e, t = !1) {
  return t ? document.createElementNS(Xb, e) : document.createElement(e);
}
function Cy(e) {
  const { useShadow: t } = e,
    n = document.createTextNode(""),
    r = e.mount || document.body;
  function i() {
    if (wt.context) {
      const [o, s] = ze(!1);
      return queueMicrotask(() => s(!0)), () => o() && e.children;
    } else return () => e.children;
  }
  if (r instanceof HTMLHeadElement) {
    const [o, s] = ze(!1),
      a = () => s(!0);
    na((l) => cn(r, () => (o() ? l() : i()()), null)),
      pr(() => {
        wt.context ? queueMicrotask(a) : a();
      });
  } else {
    const o = xy(e.isSVG ? "g" : "div", e.isSVG),
      s = t && o.attachShadow ? o.attachShadow({ mode: "open" }) : o;
    Object.defineProperty(o, "_$host", {
      get() {
        return n.parentNode;
      },
      configurable: !0,
    }),
      cn(s, i()),
      r.appendChild(o),
      e.ref && e.ref(o),
      pr(() => r.removeChild(o));
  }
  return n;
}
function Oa(e) {
  const [t, n] = sh(e, ["component"]),
    r = ge(() => t.component);
  return ge(() => {
    const i = r();
    switch (typeof i) {
      case "function":
        return Zt(() => i(n));
      case "string":
        const o = Nb.has(i),
          s = wt.context ? qb() : xy(i, o);
        return wy(s, n, o), s;
    }
  });
}
var Et = ((e) => ((e.DARK = "DARK"), (e.LIGHT = "LIGHT"), e))(Et || {});
let Jb = { data: "" },
  eE = (e) =>
    typeof window == "object"
      ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" }))
          .firstChild
      : e || Jb,
  tE = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  nE = /\/\*[^]*?\*\/|  +/g,
  m4 = /\n+/g,
  Gi = (e, t) => {
    let n = "",
      r = "",
      i = "";
    for (let o in e) {
      let s = e[o];
      o[0] == "@"
        ? o[1] == "i"
          ? (n = o + " " + s + ";")
          : (r += o[1] == "f" ? Gi(s, o) : o + "{" + Gi(s, o[1] == "k" ? "" : t) + "}")
        : typeof s == "object"
        ? (r += Gi(s, t ? t.replace(/([^,])+/g, (a) => o.replace(/(^:.*)|([^,])+/g, (l) => (/&/.test(l) ? l.replace(/&/g, a) : a ? a + " " + l : l))) : o))
        : s != null && ((o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase()), (i += Gi.p ? Gi.p(o, s) : o + ":" + s + ";"));
    }
    return n + (t && i ? t + "{" + i + "}" : i) + r;
  },
  Mr = {},
  Sy = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + Sy(e[n]);
      return t;
    }
    return e;
  },
  rE = (e, t, n, r, i) => {
    let o = Sy(e),
      s =
        Mr[o] ||
        (Mr[o] = ((l) => {
          let u = 0,
            c = 11;
          for (; u < l.length; ) c = (101 * c + l.charCodeAt(u++)) >>> 0;
          return "go" + c;
        })(o));
    if (!Mr[s]) {
      let l =
        o !== e
          ? e
          : ((u) => {
              let c,
                f,
                h = [{}];
              for (; (c = tE.exec(u.replace(nE, ""))); )
                c[4] ? h.shift() : c[3] ? ((f = c[3].replace(m4, " ").trim()), h.unshift((h[0][f] = h[0][f] || {}))) : (h[0][c[1]] = c[2].replace(m4, " ").trim());
              return h[0];
            })(e);
      Mr[s] = Gi(i ? { ["@keyframes " + s]: l } : l, n ? "" : "." + s);
    }
    let a = n && Mr.g ? Mr.g : null;
    return (
      n && (Mr.g = Mr[s]),
      ((l, u, c, f) => {
        f ? (u.data = u.data.replace(f, l)) : u.data.indexOf(l) === -1 && (u.data = c ? l + u.data : u.data + l);
      })(Mr[s], t, r, a),
      s
    );
  },
  iE = (e, t, n) =>
    e.reduce((r, i, o) => {
      let s = t[o];
      if (s && s.call) {
        let a = s(n),
          l = (a && a.props && a.props.className) || (/^go/.test(a) && a);
        s = l ? "." + l : a && typeof a == "object" ? (a.props ? "" : Gi(a, "")) : a === !1 ? "" : a;
      }
      return r + i + (s ?? "");
    }, "");
function Zr(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return rE(n.unshift ? (n.raw ? iE(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {})) : n, eE(t.target), t.g, t.o, t.k);
}
Zr.bind({ g: 1 });
let oE = Zr.bind({ k: 1 });
const lh = Ic();
function sE(e) {
  return b(lh.Provider, {
    value: e.theme,
    get children() {
      return e.children;
    },
  });
}
function pt() {
  return Nn(lh);
}
function by(e) {
  let t = this || {};
  return (...n) => {
    const r = (i) => {
      const o = Nn(lh),
        s = br(i, { theme: o }),
        a = br(s, {
          get class() {
            const p = s.class,
              g = "class" in s && /^go[0-9]+/.test(p);
            let v = Zr.apply({ target: t.target, o: g, p: s, g: t.g }, n);
            return [p, v].filter(Boolean).join(" ");
          },
        }),
        [l, u] = sh(a, ["as", "theme"]),
        c = u,
        f = l.as || e;
      let h;
      return typeof f == "function" ? (h = f(c)) : t.g == 1 ? ((h = document.createElement(f)), wy(h, c)) : (h = Oa(br({ component: f }, c))), h;
    };
    return (r.class = (i) => Zt(() => Zr.apply({ target: t.target, p: i, g: t.g }, n))), r;
  };
}
const H = new Proxy(by, {
  get(e, t) {
    return e(t);
  },
});
function aE() {
  const e = by.call({ g: 1 }, "div").apply(null, arguments);
  return function (n) {
    return e(n), null;
  };
}
const Br = "tc-root",
  uh = "tc-disable-scroll",
  Nf = "tc-using-mouse",
  lE = () => {
    document.body.addEventListener("mousedown", () => document.body.classList.add(Nf)),
      document.body.addEventListener("keydown", (t) => {
        t.key === "Tab" && document.body.classList.remove(Nf);
      });
    const e = aE`
    ${Br} * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        -webkit-tap-highlight-color: transparent;
    }
    
    ${Br} img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }   
 
    ${Br} *:focus {
        outline: #08f auto 2px;
    }
    
    ${Br} li {
        list-style: none;
    }
    
    ${Br} button {
        outline: none;
    }
    
    body.${uh} {
        position: fixed; 
        overflow-y: scroll;
        right: 0;
        left: 0;
    }
    
    body.${Nf} ${Br} *:focus {
        outline: none;
    }
`;
    return b(e, {});
  };
function uE(e) {
  e[0] === "#" && (e = e.slice(1));
  const t = parseInt(e, 16),
    n = (t >> 16) & 255,
    r = (t >> 8) & 255,
    i = t & 255;
  return [n, r, i].join(",");
}
function Za(e, t) {
  return e[0] === "#" && (e = uE(e)), `rgba(${e}, ${t})`;
}
function Er(e) {
  return e.toString() + "px";
}
class lr extends ot {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, lr.prototype);
  }
}
function cE(e, t = "_self") {
  return window.open(e, t, "noreferrer noopener");
}
function Ri(e) {
  cE(e, "_blank");
}
function fE() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? Et.LIGHT : Et.DARK;
}
function dE(e) {
  const t = (n) => e(n.matches ? Et.DARK : Et.LIGHT);
  return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", t), () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", t);
}
function hE(e, t, n) {
  const r = new URL(e);
  return r.searchParams.append(t, n), r.toString();
}
function Xn(e, t) {
  let n;
  typeof t == "string" ? (n = t) : (n = Ty() ? t.twaReturnUrl || t.returnStrategy : "none");
  const r = hE(e, "ret", n);
  if (!La(e)) return r;
  const i = r.slice(r.lastIndexOf("&") + 1);
  return r.slice(0, r.lastIndexOf("&")) + "-" + ny(i);
}
function pE() {
  document.documentElement.scrollHeight !== document.documentElement.clientHeight &&
    ((document.body.style.top = Er(-document.documentElement.scrollTop)), document.body.classList.add(uh));
}
function mE() {
  document.body.classList.remove(uh), document.documentElement.scrollTo({ top: -parseFloat(getComputedStyle(document.body).top) }), (document.body.style.top = "auto");
}
function gE() {
  document.body.hasAttribute("ontouchstart") || document.body.setAttribute("ontouchstart", "");
}
function vE() {
  customElements.define(Br, class extends HTMLDivElement {}, { extends: "div" });
}
function yE(e) {
  e.forEach((t) => {
    const n = new window.Image();
    n.src = t;
  });
}
function ch() {
  if (typeof localStorage > "u") throw new lr("window.localStorage is undefined. localStorage is required for TonConnectUI");
}
function Qa() {
  if (typeof window < "u") return window;
}
function wE() {
  var e, t;
  const n = new JS().getResult(),
    r = (e = n.os.name) == null ? void 0 : e.toLowerCase();
  let i;
  switch (!0) {
    case r === "ios":
      i = "ios";
      break;
    case r === "android":
      i = "android";
      break;
    case r === "mac os":
      i = "macos";
      break;
    case r === "linux":
      i = "linux";
      break;
    case r == null ? void 0 : r.includes("windows"):
      i = "windows";
      break;
  }
  const o = (t = n.browser.name) == null ? void 0 : t.toLowerCase();
  let s;
  switch (!0) {
    case o === "chrome":
      s = "chrome";
      break;
    case o === "firefox":
      s = "firefox";
      break;
    case o == null ? void 0 : o.includes("safari"):
      s = "safari";
      break;
  }
  return { os: i, browser: s };
}
function Ey(e, t) {
  const n = new URL(e);
  n.searchParams.append("startattach", "tonconnect"), Ri(Xn(n.toString(), t));
}
function Ty() {
  var e;
  return !!((e = Qa()) != null && e.TelegramWebviewProxy);
}
class xE {
  constructor() {
    gn(this, "localStorage"), gn(this, "storageKey", "ton-connect-ui_wallet-info"), ch(), (this.localStorage = localStorage);
  }
  setWalletInfo(t) {
    this.localStorage.setItem(this.storageKey, JSON.stringify(t));
  }
  getWalletInfo() {
    const t = this.localStorage.getItem(this.storageKey);
    return t ? JSON.parse(t) : null;
  }
  removeWalletInfo() {
    this.localStorage.removeItem(this.storageKey);
  }
}
class CE {
  constructor() {
    gn(this, "localStorage"), gn(this, "storageKey", "ton-connect-ui_preferred-wallet"), ch(), (this.localStorage = localStorage);
  }
  setPreferredWalletAppName(t) {
    this.localStorage.setItem(this.storageKey, t);
  }
  getPreferredWalletAppName() {
    return this.localStorage.getItem(this.storageKey) || void 0;
  }
}
class SE {
  constructor() {
    gn(this, "localStorage"), gn(this, "storageKey", "ton-connect-ui_last-selected-wallet-info"), ch(), (this.localStorage = localStorage);
  }
  setLastSelectedWalletInfo(t) {
    this.localStorage.setItem(this.storageKey, JSON.stringify(t));
  }
  getLastSelectedWalletInfo() {
    const t = this.localStorage.getItem(this.storageKey);
    return t ? JSON.parse(t) : null;
  }
  removeLastSelectedWalletInfo() {
    this.localStorage.removeItem(this.storageKey);
  }
}
const [bE, b0] = ze(!1),
  E0 = new SE(),
  [EE, TE] = ze(E0.getLastSelectedWalletInfo()),
  On = (e) => {
    e ? E0.setLastSelectedWalletInfo(e) : E0.removeLastSelectedWalletInfo(), TE(e);
  },
  [qi, Ho] = ze(null),
  PE = {
    close: "Close",
    openWallet: "Open wallet",
    copyLink: "Copy Link",
    linkCopied: "Link Copied",
    copied: "Copied",
    yourWallet: "Your Wallet",
    retry: "Retry",
    get: "GET",
    mobile: "Mobile",
    browserExtension: "Browser Extension",
    desktop: "Desktop",
  },
  _E = { connectWallet: "Connect Wallet", dropdown: { copy: "Copy address", copied: "Address copied!", disconnect: "Disconnect" } },
  AE = {
    confirm: { header: "Open {{ name }} to confirm the transaction." },
    transactionSent: { header: "Transaction sent", text: "Your transaction will be processed in a few seconds." },
    transactionCanceled: { header: "Transaction canceled", text: "There will be no changes to your account." },
  },
  kE = { walletOn: "Wallet On", recent: "Recent", installed: "Installed", popular: "Popular" },
  LE = {
    loading: "Loading wallets",
    wallets: "Wallets",
    mobileUniversalModal: {
      connectYourWallet: "Connect your wallet",
      openWalletOnTelegramOrSelect: "Open Wallet on Telegram or select your wallet to connect",
      openWalletOnTelegram: "Open Wallet on Telegram",
      openLink: "Open Link",
      scan: "Scan with your mobile wallet",
    },
    desktopUniversalModal: { connectYourWallet: "Connect your wallet", scan: "Scan with your mobile wallet", availableWallets: "Available wallets" },
    mobileConnectionModal: {
      showQR: "Show QR Code",
      scanQR: "Scan the QR code below with your phone’s or {{ name }}’s camera",
      continueIn: "Continue in {{ name }}…",
      connectionDeclined: "Connection declined",
    },
    desktopConnectionModal: {
      scanQR: "Scan the QR code below with your phone’s or {{ name }}’s camera",
      continueInExtension: "Continue in {{ name }} browser extension…",
      dontHaveExtension: "Seems you don't have installed {{ name }} browser extension",
      getWallet: "Get {{ name }}",
      continueOnDesktop: "Continue in {{ name }} on desktop…",
      openWalletOnTelegram: "Open Wallet on Telegram on desktop",
      connectionDeclined: "Connection declined",
    },
    infoModal: {
      whatIsAWallet: "What is a wallet",
      secureDigitalAssets: "Secure digital assets storage",
      walletProtects: "A wallet protects and manages your digital assets including TON, tokens and collectables.",
      controlIdentity: "Control your Web3 identity",
      manageIdentity:
        "Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem.",
      effortlessCryptoTransactions: "Effortless crypto transactions",
      easilySend: "Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications.",
      getAWallet: "Get a Wallet",
    },
  },
  ME = {
    confirmTransaction: { header: "Confirm the transaction in {{ name }}", text: "It will only take a moment." },
    transactionSent: "$notifications.transactionSent",
    transactionCanceled: "$notifications.transactionCanceled",
  },
  RE = { common: PE, button: _E, notifications: AE, walletItem: kE, walletModal: LE, actionModal: ME },
  IE = {
    close: "Закрыть",
    openWallet: "Открыть кошелёк",
    copyLink: "Копировать ссылку",
    linkCopied: "Ссылка скопирована",
    copied: "Ссылка скопирована",
    yourWallet: "Ваш кошелёк",
    retry: "Повторить",
    get: "Скачать",
    mobile: "Мобильный",
    browserExtension: "Расширение",
    desktop: "Десктоп",
  },
  OE = { connectWallet: "Подключить кошелёк", dropdown: { copy: "Скопировать адрес", copied: "Адрес скопирован!", disconnect: "Отключить кошелёк" } },
  BE = {
    confirm: { header: "Откройте {{ name }}, чтобы подтвердить транзакцию." },
    transactionSent: { header: "Транзакция отправлена", text: "Ваша транзакция будет обработана через несколько секунд." },
    transactionCanceled: { header: "Транзакция отменена", text: "Состояние вашего счёта не изменится." },
  },
  $E = { walletOn: "Wallet в", recent: "Недавний", installed: "Установлен", popular: "Популярен" },
  DE = {
    loading: "Кошельки загружаются",
    wallets: "Кошельки",
    mobileUniversalModal: {
      connectYourWallet: "Подключите кошелёк",
      openWalletOnTelegramOrSelect: "Подключите Wallet в Telegram или выберете кошелёк для подключения",
      openWalletOnTelegram: "Открыть Wallet в Telegram",
      openLink: "Открыть ссылку",
      scan: "Отсканируйте камерой вашего телефона",
    },
    desktopUniversalModal: { connectYourWallet: "Подключите кошелёк", scan: "Отсканируйте QR-код камерой вашего телефона", availableWallets: "Доступные кошельки" },
    mobileConnectionModal: {
      showQR: "Показать QR-код",
      scanQR: "Отсканируйте QR-код ниже камерой в приложении {{ name }}, или камерой телефона",
      continueIn: "Продолжите в {{ name }}…",
      connectionDeclined: "Подключение отклонено",
    },
    desktopConnectionModal: {
      scanQR: "Отсканируйте QR-код ниже камерой в приложении {{ name }}, или камерой телефона",
      continueInExtension: "Откройте браузерное расширение {{ name }}",
      dontHaveExtension: "Похоже, у вас не установлено браузерное расширение {{ name }}",
      getWallet: "Скачать {{ name }}",
      continueOnDesktop: "Откройте {{ name }} на компьютере…",
      openWalletOnTelegram: "Открыть Wallet в Telegram",
      connectionDeclined: "Подключение отклонено",
    },
    infoModal: {
      whatIsAWallet: "Что такое кошелёк?",
      secureDigitalAssets: "Надежное хранилище цифровых активов",
      walletProtects: "Кошелёк защищает ваши цифровые активы, включая TON, токены и предметы коллекционирования, и управляет ими.",
      controlIdentity: "Контроль своей личности Web3",
      manageIdentity:
        "Управляйте своей цифровой идентификацией и с легкостью получайте доступ к децентрализованным приложениям. Сохраняйте контроль над своими данными и безопасно участвуйте в экосистеме блокчейна.",
      effortlessCryptoTransactions: "Простые криптотранзакции",
      easilySend: "Легко отправляйте, получайте и отслеживайте свои криптовалюты. Оптимизируйте свои операции с помощью децентрализованных приложений.",
      getAWallet: "Скачать кошелёк",
    },
  },
  NE = {
    confirmTransaction: { header: "Подтвердите действие в {{ name }}", text: "Это займет пару секунд." },
    transactionSent: "$notifications.transactionSent",
    transactionCanceled: "$notifications.transactionCanceled",
  },
  VE = { common: IE, button: OE, notifications: BE, walletItem: $E, walletModal: DE, actionModal: NE },
  jE = { en: g4(RE), ru: g4(VE) };
function g4(e) {
  const t = "$",
    n = (r) => {
      Object.entries(r).forEach(([i, o]) => {
        if (typeof o == "object" && o) return n(o);
        if (typeof o == "string") {
          if (o[0] === t) {
            const s = o.slice(1).split(".");
            let a = e;
            s.forEach((l) => {
              if (l in a) a = a[l];
              else throw new Error(`Cannot parse translations: there is no property ${l} in translation`);
            }),
              (r[i] = a);
          }
          o.slice(0, 2) === `\\${t}` && (r[i] = o.slice(1));
        }
      });
    };
  return n(e), e;
}
const Xa = Ic(),
  T0 = Symbol("store-raw"),
  Ba = Symbol("store-node"),
  FE = Symbol("store-name");
function Py(e, t) {
  let n = e[dr];
  if (!n && (Object.defineProperty(e, dr, { value: (n = new Proxy(e, WE)) }), !Array.isArray(e))) {
    const r = Object.keys(e),
      i = Object.getOwnPropertyDescriptors(e);
    for (let o = 0, s = r.length; o < s; o++) {
      const a = r[o];
      i[a].get && Object.defineProperty(e, a, { enumerable: i[a].enumerable, get: i[a].get.bind(n) });
    }
  }
  return n;
}
function Gu(e) {
  let t;
  return e != null && typeof e == "object" && (e[dr] || !(t = Object.getPrototypeOf(e)) || t === Object.prototype || Array.isArray(e));
}
function ds(e, t = new Set()) {
  let n, r, i, o;
  if ((n = e != null && e[T0])) return n;
  if (!Gu(e) || t.has(e)) return e;
  if (Array.isArray(e)) {
    Object.isFrozen(e) ? (e = e.slice(0)) : t.add(e);
    for (let s = 0, a = e.length; s < a; s++) (i = e[s]), (r = ds(i, t)) !== i && (e[s] = r);
  } else {
    Object.isFrozen(e) ? (e = Object.assign({}, e)) : t.add(e);
    const s = Object.keys(e),
      a = Object.getOwnPropertyDescriptors(e);
    for (let l = 0, u = s.length; l < u; l++) (o = s[l]), !a[o].get && ((i = e[o]), (r = ds(i, t)) !== i && (e[o] = r));
  }
  return e;
}
function fh(e) {
  let t = e[Ba];
  return t || Object.defineProperty(e, Ba, { value: (t = {}) }), t;
}
function P0(e, t, n) {
  return e[t] || (e[t] = Ay(n));
}
function UE(e, t) {
  const n = Reflect.getOwnPropertyDescriptor(e, t);
  return !n || n.get || !n.configurable || t === dr || t === Ba || t === FE || (delete n.value, delete n.writable, (n.get = () => e[dr][t])), n;
}
function _y(e) {
  if (fy()) {
    const t = fh(e);
    (t._ || (t._ = Ay()))();
  }
}
function zE(e) {
  return _y(e), Reflect.ownKeys(e);
}
function Ay(e) {
  const [t, n] = ze(e, { equals: !1, internal: !0 });
  return (t.$ = n), t;
}
const WE = {
  get(e, t, n) {
    if (t === T0) return e;
    if (t === dr) return n;
    if (t === w0) return _y(e), n;
    const r = fh(e),
      i = r.hasOwnProperty(t);
    let o = i ? r[t]() : e[t];
    if (t === Ba || t === "__proto__") return o;
    if (!i) {
      const s = Object.getOwnPropertyDescriptor(e, t);
      fy() && (typeof o != "function" || e.hasOwnProperty(t)) && !(s && s.get) && (o = P0(r, t, o)());
    }
    return Gu(o) ? Py(o) : o;
  },
  has(e, t) {
    return t === T0 || t === dr || t === w0 || t === Ba || t === "__proto__" ? !0 : (this.get(e, t, e), t in e);
  },
  set() {
    return !0;
  },
  deleteProperty() {
    return !0;
  },
  ownKeys: zE,
  getOwnPropertyDescriptor: UE,
};
function qu(e, t, n, r = !1) {
  if (!r && e[t] === n) return;
  const i = e[t],
    o = e.length;
  n === void 0 ? delete e[t] : (e[t] = n);
  let s = fh(e),
    a;
  (a = P0(s, t, i)) && a.$(() => n), Array.isArray(e) && e.length !== o && (a = P0(s, "length", o)) && a.$(e.length), (a = s._) && a.$();
}
function ky(e, t) {
  const n = Object.keys(t);
  for (let r = 0; r < n.length; r += 1) {
    const i = n[r];
    qu(e, i, t[i]);
  }
}
function HE(e, t) {
  if ((typeof t == "function" && (t = t(e)), (t = ds(t)), Array.isArray(t))) {
    if (e === t) return;
    let n = 0,
      r = t.length;
    for (; n < r; n++) {
      const i = t[n];
      e[n] !== i && qu(e, n, i);
    }
    qu(e, "length", r);
  } else ky(e, t);
}
function js(e, t, n = []) {
  let r,
    i = e;
  if (t.length > 1) {
    r = t.shift();
    const s = typeof r,
      a = Array.isArray(e);
    if (Array.isArray(r)) {
      for (let l = 0; l < r.length; l++) js(e, [r[l]].concat(t), n);
      return;
    } else if (a && s === "function") {
      for (let l = 0; l < e.length; l++) r(e[l], l) && js(e, [l].concat(t), n);
      return;
    } else if (a && s === "object") {
      const { from: l = 0, to: u = e.length - 1, by: c = 1 } = r;
      for (let f = l; f <= u; f += c) js(e, [f].concat(t), n);
      return;
    } else if (t.length > 1) {
      js(e[r], t, [r].concat(n));
      return;
    }
    (i = e[r]), (n = [r].concat(n));
  }
  let o = t[0];
  (typeof o == "function" && ((o = o(i, n)), o === i)) ||
    (r === void 0 && o == null) ||
    ((o = ds(o)), r === void 0 || (Gu(i) && Gu(o) && !Array.isArray(o)) ? ky(i, o) : qu(e, r, o));
}
function dh(...[e, t]) {
  const n = ds(e || {}),
    r = Array.isArray(n),
    i = Py(n);
  function o(...s) {
    cy(() => {
      r && s.length === 1 ? HE(n, s[0]) : js(n, s);
    });
  }
  return [i, o];
}
const Ly = {
    constant: { black: "#000000", white: "#FFFFFF" },
    connectButton: { background: "#0098EA", foreground: "#FFFFFF" },
    accent: "#0098EA",
    telegramButton: "#0098EA",
    icon: { primary: "#0F0F0F", secondary: "#7A8999", tertiary: "#C1CAD2", success: "#29CC6A", error: "#F5A73B" },
    background: { primary: "#FFFFFF", secondary: "#F1F3F5", segment: "#FFFFFF", tint: "#F1F3F5", qr: "#F1F3F5" },
    text: { primary: "#0F0F0F", secondary: "#6A7785" },
  },
  KE = {
    constant: { black: "#000000", white: "#FFFFFF" },
    connectButton: { background: "#0098EA", foreground: "#FFFFFF" },
    accent: "#E5E5EA",
    telegramButton: "#31A6F5",
    icon: { primary: "#E5E5EA", secondary: "#909099", tertiary: "#434347", success: "#29CC6A", error: "#F5A73B" },
    background: { primary: "#121214", secondary: "#18181A", segment: "#262629", tint: "#222224", qr: "#FFFFFF" },
    text: { primary: "#E5E5EA", secondary: "#7D7D85" },
  };
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function v4(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function GE(e) {
  var t, n;
  return v4(e) === !1 ? !1 : ((t = e.constructor), t === void 0 ? !0 : ((n = t.prototype), !(v4(n) === !1 || n.hasOwnProperty("isPrototypeOf") === !1)));
}
function Ti(e, t) {
  return e ? pb(t, e, { arrayMerge: (r, i, o) => i, isMergeableObject: GE }) : t;
}
const [qE, hh] = dh({ theme: Et.LIGHT, colors: Ly, borderRadius: "m" }),
  My = { [Et.LIGHT]: Ly, [Et.DARK]: KE },
  wr = { [Et.LIGHT]: void 0, [Et.DARK]: void 0 };
function Vf(e, t) {
  t && ((wr[Et.DARK] = Ti(t[Et.DARK], wr[Et.DARK])), (wr[Et.LIGHT] = Ti(t[Et.LIGHT], wr[Et.LIGHT]))), hh({ theme: e, colors: Ti(wr[e], My[e]) });
}
function YE(e) {
  hh({ borderRadius: e });
}
function ZE(e) {
  (wr[Et.DARK] = Ti(e[Et.DARK], wr[Et.DARK])), (wr[Et.LIGHT] = Ti(e[Et.LIGHT], wr[Et.LIGHT])), hh((t) => ({ colors: Ti(wr[t.theme], My[t.theme]) }));
}
const QE = H.div`
    background-color: ${(e) => e.theme.colors.background.secondary};
`,
  wo = (e) => {
    let t;
    const [n, r] = ze(null);
    return (
      hr(() => {
        const i = new window.Image();
        return (
          (i.src = e.src),
          (i.alt = e.alt || ""),
          i.setAttribute("draggable", "false"),
          e.class && i.classList.add(e.class),
          i.complete ? r(i) : (i.addEventListener("load", () => r(i)), () => i.removeEventListener("load", () => r(i)))
        );
      }),
      [
        b(Ge, {
          get when() {
            return n();
          },
          get children() {
            return n();
          },
        }),
        b(Ge, {
          get when() {
            return !n();
          },
          get children() {
            return b(QE, {
              get class() {
                return e.class;
              },
              ref(i) {
                const o = t;
                typeof o == "function" ? o(i) : (t = i);
              },
            });
          },
        }),
      ]
    );
  },
  eo = { mobile: 440, tablet: 1020 };
function Ko(e) {
  const t = Qa();
  if (!t) return e === "desktop";
  const n = t.innerWidth;
  switch (e) {
    case "desktop":
      return n > eo.tablet;
    case "tablet":
      return n > eo.mobile;
    default:
    case "mobile":
      return n <= eo.mobile;
  }
}
function Un(e) {
  switch (e) {
    case "mobile":
      return `@media (max-width: ${eo.mobile}px)`;
    case "tablet":
      return `@media (max-width: ${eo.tablet}px) (min-width: ${eo.mobile}px)`;
    default:
    case "desktop":
      return `@media (min-width: ${eo.tablet}px)`;
  }
}
const Ja = "@media (hover: none)",
  el = "@media not all and (hover: none)",
  XE = { m: "100vh", s: "8px", none: "0" },
  jf = { s: 0.02, m: 0.04 },
  JE = H.button`
    display: ${(e) => (e.leftIcon || e.rightIcon ? "flex" : "inline-block")};
    gap: ${(e) => (e.leftIcon || e.rightIcon ? "6px" : "unset")};
    align-items: ${(e) => (e.leftIcon || e.rightIcon ? "center" : "unset")};
    justify-content: ${(e) => (e.leftIcon || e.rightIcon ? "space-between" : "unset")};
    background-color: ${(e) => (e.appearance === "flat" ? "transparent" : e.appearance === "secondary" ? e.theme.colors.background.tint : Za(e.theme.colors.accent, 0.12))};
    color: ${(e) => (e.appearance === "secondary" ? e.theme.colors.text.primary : e.theme.colors.accent)};

    padding: ${(e) => (e.appearance === "flat" ? "0" : "9px 16px")};
    padding-left: ${(e) => (e.leftIcon && e.appearance !== "flat" ? "12px" : "16px")};
    padding-right: ${(e) => (e.rightIcon && e.appearance !== "flat" ? "12px" : "16px")};
    border: none;
    border-radius: ${(e) => XE[e.theme.borderRadius]};
    cursor: ${(e) => (e.disabled ? "not-allowed" : "pointer")};

    font-size: 14px;
    font-weight: 590;
    line-height: 18px;

    transition: transform 0.125s ease-in-out;

    ${el} {
        &:hover {
            transform: ${(e) => (e.disabled ? "unset" : `scale(${1 + jf[e.scale]})`)};
        }
    }

    &:active {
        transform: ${(e) => (e.disabled ? "unset" : `scale(${1 - jf[e.scale]})`)};
    }

    ${Ja} {
        &:active {
            transform: ${(e) => (e.disabled ? "unset" : `scale(${1 - jf[e.scale] * 2})`)};
        }
    }
`;
function tl(e) {
  const t = Zt(() => Object.keys(e).filter((r) => r.startsWith("data-"))),
    [n] = sh(e, t);
  return n;
}
const jt = (e) => {
  const t = tl(e);
  return b(
    JE,
    br(
      {
        get appearance() {
          return e.appearance || "primary";
        },
        get class() {
          return e.class;
        },
        onClick: (n) => {
          var r;
          return (r = e.onClick) == null ? void 0 : r.call(e, n);
        },
        onMouseEnter: (n) => {
          var r;
          return (r = e.onMouseEnter) == null ? void 0 : r.call(e, n);
        },
        onMouseLeave: (n) => {
          var r;
          return (r = e.onMouseLeave) == null ? void 0 : r.call(e, n);
        },
        ref(n) {
          const r = e.ref;
          typeof r == "function" ? r(n) : (e.ref = n);
        },
        get disabled() {
          return e.disabled;
        },
        get scale() {
          return e.scale || "m";
        },
        get leftIcon() {
          return !!e.leftIcon;
        },
        get rightIcon() {
          return !!e.rightIcon;
        },
        "data-tc-button": "true",
      },
      t,
      {
        get children() {
          return [ge(() => e.leftIcon), ge(() => e.children), ge(() => e.rightIcon)];
        },
      }
    )
  );
};
function Yu(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
const ph = (e) => {
  let t,
    n = !0;
  const [r, i] = ze(),
    [o, s] = ze(),
    a = Oc(() => e.children),
    { onBeforeEnter: l, onEnter: u, onAfterEnter: c, onBeforeExit: f, onExit: h, onAfterExit: p } = e,
    g = ge(() => {
      const y = e.name || "s";
      return {
        enterActiveClass: e.enterActiveClass || y + "-enter-active",
        enterClass: e.enterClass || y + "-enter",
        enterToClass: e.enterToClass || y + "-enter-to",
        exitActiveClass: e.exitActiveClass || y + "-exit-active",
        exitClass: e.exitClass || y + "-exit",
        exitToClass: e.exitToClass || y + "-exit-to",
      };
    });
  function v(y, w) {
    if (!n || e.appear) {
      let x = function (B) {
        y &&
          (!B || B.target === y) &&
          (y.removeEventListener("transitionend", x),
          y.removeEventListener("animationend", x),
          y.classList.remove(..._),
          y.classList.remove(...O),
          cy(() => {
            r() !== y && i(y), o() === y && s(void 0);
          }),
          c && c(y),
          e.mode === "inout" && P(y, w));
      };
      const T = g().enterClass.split(" "),
        _ = g().enterActiveClass.split(" "),
        O = g().enterToClass.split(" ");
      l && l(y),
        y.classList.add(...T),
        y.classList.add(..._),
        Yu(() => {
          y.classList.remove(...T),
            y.classList.add(...O),
            u && u(y, () => x()),
            (!u || u.length < 2) && (y.addEventListener("transitionend", x), y.addEventListener("animationend", x));
        });
    }
    w && !e.mode ? s(y) : i(y);
  }
  function P(y, w) {
    const x = g().exitClass.split(" "),
      T = g().exitActiveClass.split(" "),
      _ = g().exitToClass.split(" ");
    if (!w.parentNode) return O();
    f && f(w),
      w.classList.add(...x),
      w.classList.add(...T),
      Yu(() => {
        w.classList.remove(...x), w.classList.add(..._);
      }),
      h && h(w, () => O()),
      (!h || h.length < 2) && (w.addEventListener("transitionend", O), w.addEventListener("animationend", O));
    function O(B) {
      (!B || B.target === w) &&
        (w.removeEventListener("transitionend", O),
        w.removeEventListener("animationend", O),
        w.classList.remove(...T),
        w.classList.remove(..._),
        r() === w && i(void 0),
        p && p(w),
        e.mode === "outin" && v(y, w));
    }
  }
  return (
    zu((y) => {
      for (t = a(); typeof t == "function"; ) t = t();
      return Zt(() => (t && t !== y && (e.mode !== "outin" ? v(t, y) : n && i(t)), y && y !== t && e.mode !== "inout" && P(t, y), (n = !1), t));
    }),
    [r, o]
  );
};
function kl(e) {
  const { top: t, bottom: n, left: r, right: i, width: o, height: s } = e.getBoundingClientRect(),
    a = e.parentNode.getBoundingClientRect();
  return { top: t - a.top, bottom: n, left: r - a.left, right: i, width: o, height: s };
}
const eT = (e) => {
  const t = Oc(() => e.children),
    n = ge(() => {
      const p = e.name || "s";
      return {
        enterActiveClass: e.enterActiveClass || p + "-enter-active",
        enterClass: e.enterClass || p + "-enter",
        enterToClass: e.enterToClass || p + "-enter-to",
        exitActiveClass: e.exitActiveClass || p + "-exit-active",
        exitClass: e.exitClass || p + "-exit",
        exitToClass: e.exitToClass || p + "-exit-to",
        moveClass: e.moveClass || p + "-move",
      };
    }),
    { onBeforeEnter: r, onEnter: i, onAfterEnter: o, onBeforeExit: s, onExit: a, onAfterExit: l } = e,
    [u, c] = ze();
  let f = [],
    h = !0;
  return (
    zu(() => {
      const p = t(),
        g = [...p],
        v = new Set(p),
        P = new Set(f),
        y = n().enterClass.split(" "),
        w = n().enterActiveClass.split(" "),
        x = n().enterToClass.split(" "),
        T = n().exitClass.split(" "),
        _ = n().exitActiveClass.split(" "),
        O = n().exitToClass.split(" ");
      for (let B = 0; B < p.length; B++) {
        const A = p[B];
        if (!h && !P.has(A)) {
          let k = function (I) {
            A &&
              (!I || I.target === A) &&
              (A.removeEventListener("transitionend", k), A.removeEventListener("animationend", k), A.classList.remove(...w), A.classList.remove(...x), o && o(A));
          };
          r && r(A),
            A.classList.add(...y),
            A.classList.add(...w),
            Yu(() => {
              A.classList.remove(...y),
                A.classList.add(...x),
                i && i(A, () => k()),
                (!i || i.length < 2) && (A.addEventListener("transitionend", k), A.addEventListener("animationend", k));
            });
        }
      }
      for (let B = 0; B < f.length; B++) {
        const A = f[B];
        if (!v.has(A) && A.parentNode) {
          let k = function (I) {
            (!I || I.target === A) &&
              (A.removeEventListener("transitionend", k),
              A.removeEventListener("animationend", k),
              A.classList.remove(..._),
              A.classList.remove(...O),
              l && l(A),
              (f = f.filter((M) => M !== A)),
              c(f));
          };
          g.splice(B, 0, A),
            s && s(A),
            A.classList.add(...T),
            A.classList.add(..._),
            Yu(() => {
              A.classList.remove(...T), A.classList.add(...O);
            }),
            a && a(A, () => k()),
            (!a || a.length < 2) && (A.addEventListener("transitionend", k), A.addEventListener("animationend", k));
        }
      }
      (f = g), c(g);
    }),
    hr((p) => {
      const g = u();
      return (
        g.forEach((v) => {
          let P;
          (P = p.get(v)) ? P.new && ((P.new = !1), (P.newPos = kl(v))) : p.set(v, (P = { pos: kl(v), new: !h })),
            P.new &&
              v.addEventListener(
                "transitionend",
                () => {
                  (P.new = !1), v.parentNode && (P.newPos = kl(v));
                },
                { once: !0 }
              ),
            P.newPos && (P.pos = P.newPos),
            (P.newPos = kl(v));
        }),
        h
          ? ((h = !1), p)
          : (g.forEach((v) => {
              const P = p.get(v),
                y = P.pos,
                w = P.newPos,
                x = y.left - w.left,
                T = y.top - w.top;
              if (x || T) {
                P.moved = !0;
                const _ = v.style;
                (_.transform = `translate(${x}px,${T}px)`), (_.transitionDuration = "0s");
              }
            }),
            document.body.offsetHeight,
            g.forEach((v) => {
              const P = p.get(v);
              if (P.moved) {
                let y = function (T) {
                  (T && T.target !== v) || !v.parentNode || ((!T || /transform$/.test(T.propertyName)) && (v.removeEventListener("transitionend", y), v.classList.remove(...x)));
                };
                P.moved = !1;
                const w = v.style,
                  x = n().moveClass.split(" ");
                v.classList.add(...x), (w.transform = w.transitionDuration = ""), v.addEventListener("transitionend", y);
              }
            }),
            p)
      );
    }, new Map()),
    u
  );
};
function tT(e, t) {
  const n = (r) => {
    var i;
    return !e.contains(r.target) && ((i = t()) == null ? void 0 : i());
  };
  document.body.addEventListener("click", n), pr(() => document.body.removeEventListener("click", n));
}
function nT(e, t) {
  const n = (r) => {
    var i, o;
    r.key === "Escape" && ((i = document.activeElement) == null || i.blur(), (o = t()) == null || o());
  };
  document.body.addEventListener("keydown", n), pr(() => document.body.removeEventListener("keydown", n));
}
const rT = qe(
    '<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2122 14.3407C10.5384 14.0854 10.5959 13.614 10.3406 13.2878L6.20237 8.00003L10.3406 2.71227C10.5959 2.38607 10.5384 1.91469 10.2122 1.6594C9.88604 1.40412 9.41465 1.46161 9.15937 1.7878L4.65937 7.5378C4.44688 7.80932 4.44688 8.19074 4.65937 8.46226L9.15937 14.2123C9.41465 14.5385 9.88604 14.5959 10.2122 14.3407Z"></path></svg>',
    4,
    !0
  ),
  iT = { left: 0, top: 90, right: 180, bottom: 270 },
  Ry = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.icon.secondary,
      r = () => e.direction || "left",
      i = H("svg")`
        transform: rotate(${(o) => iT[o.svgDirection]}deg);
        transition: transform 0.1s ease-in-out;
    `;
    return b(i, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      get svgDirection() {
        return r();
      },
      get children() {
        const o = rT.cloneNode(!0);
        return He(() => Se(o, "fill", n())), o;
      },
    });
  },
  oT = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z"></path></svg>'
  ),
  sT = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = oT.cloneNode(!0),
        i = r.firstChild;
      return He(() => Se(i, "fill", n())), r;
    })();
  },
  aT = H.button`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${(e) => e.theme.colors.background.tint};
    border: none;
    cursor: pointer;

    transition: transform 0.125s ease-in-out;

    ${el} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${Ja} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
  xo = (e) => {
    const t = tl(e),
      n = () => e.icon || "close";
    return b(
      aT,
      br(
        {
          get class() {
            return e.class;
          },
          onClick: () => e.onClick(),
          "data-tc-icon-button": "true",
        },
        t,
        {
          get children() {
            return [
              b(Ge, {
                get when() {
                  return !!e.children;
                },
                get children() {
                  return e.children;
                },
              }),
              b(Ge, {
                get when() {
                  return !e.children;
                },
                get children() {
                  return b(Ya, {
                    get children() {
                      return [
                        b(Xt, {
                          get when() {
                            return n() === "close";
                          },
                          get children() {
                            return b(sT, {
                              get fill() {
                                return e.fill;
                              },
                            });
                          },
                        }),
                        b(Xt, {
                          get when() {
                            return n() === "arrow";
                          },
                          get children() {
                            return b(Ry, {
                              get fill() {
                                return e.fill;
                              },
                            });
                          },
                        }),
                        b(Xt, {
                          get when() {
                            return n() === "question";
                          },
                          get children() {
                            return b(uP, {
                              get fill() {
                                return e.fill;
                              },
                            });
                          },
                        }),
                        b(Xt, {
                          get when() {
                            return typeof n() != "string";
                          },
                          get children() {
                            return n();
                          },
                        }),
                      ];
                    },
                  });
                },
              }),
            ];
          },
        }
      )
    );
  },
  Jo = { m: "24px", s: "16px", none: "0" },
  lT = H.div`
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 0;
    overflow-y: auto;

    ${Un("mobile")} {
        padding-bottom: 0;
    }
`,
  uT = Zr`
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);
    width: fit-content;
    margin: auto;

    ${Un("mobile")} {
        width: 100%;
        height: fit-content;
        margin: auto 0 0 0;
    }
`,
  cT = H.div`
    position: relative;
    min-height: 100px;
    width: 416px;
    padding: 44px 56px 24px;

    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);

    background-color: ${(e) => e.theme.colors.background.primary};
    border-radius: ${(e) => Jo[e.theme.borderRadius]};

    ${Un("mobile")} {
        width: 100%;
    }
`,
  fT = H(xo)`
    position: absolute;
    right: 16px;
    top: 16px;
`,
  dT = H.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 16px 18px;
    border-radius: 0 0 ${(e) => Jo[e.theme.borderRadius]}
        ${(e) => Jo[e.theme.borderRadius]};
`,
  hT = H(xo)`
    background-color: ${(e) => Za(e.theme.colors.icon.secondary, 0.12)};
`,
  pT = qe("<div></div>"),
  mT = tT,
  gT = nT,
  Iy = (e) => {
    const t = pt(),
      n = tl(e);
    return (
      hr(() => {
        e.opened ? pE() : mE();
      }),
      b(ph, {
        onBeforeEnter: (r) => {
          const i = Ko("mobile") ? 200 : 100;
          r.animate([{ opacity: 0 }, { opacity: 1 }], { duration: i }),
            Ko("mobile") && r.firstElementChild.animate([{ transform: "translateY(390px)" }, { transform: "translateY(0)" }], { duration: i });
        },
        onExit: (r, i) => {
          const o = Ko("mobile") ? 200 : 100,
            s = r.animate([{ opacity: 1 }, { opacity: 0 }], { duration: o });
          if (Ko("mobile")) {
            const a = r.firstElementChild.animate([{ transform: "translateY(0)" }, { transform: "translateY(390px)" }], { duration: o });
            Promise.all([s.finished, a.finished]).then(i);
          } else s.finished.then(i);
        },
        get children() {
          return b(Ge, {
            get when() {
              return e.opened;
            },
            get children() {
              return b(
                lT,
                br({ "data-tc-modal": "true" }, n, {
                  get children() {
                    const r = pT.cloneNode(!0);
                    return (
                      Ku(gT, r, () => () => e.onClose()),
                      Ku(mT, r, () => () => e.onClose()),
                      cn(
                        r,
                        b(cT, {
                          get class() {
                            return e.class;
                          },
                          get children() {
                            return [b(fT, { icon: "close", onClick: () => e.onClose() }), ge(() => e.children)];
                          },
                        }),
                        null
                      ),
                      cn(
                        r,
                        b(Ge, {
                          get when() {
                            return e.onClickQuestion;
                          },
                          get children() {
                            return b(dT, {
                              get children() {
                                return [
                                  b(aP, {}),
                                  b(hT, {
                                    get onClick() {
                                      return e.onClickQuestion;
                                    },
                                    icon: "question",
                                  }),
                                ];
                              },
                            });
                          },
                        }),
                        null
                      ),
                      He(() =>
                        ah(
                          r,
                          Gl(
                            uT,
                            Zr`
                                border-radius: ${Jo[t.borderRadius]};
                                background-color: ${t.colors.background.tint};
                                ${Un("mobile")} {
                                    border-radius: ${Jo[t.borderRadius]}
                                        ${Jo[t.borderRadius]} 0 0;
                                }
                            `
                          )
                        )
                      ),
                      r
                    );
                  },
                })
              );
            },
          });
        },
      })
    );
  },
  vT = { m: "22px", s: "12px", none: "0" },
  yT = { m: "18px", s: "8px", none: "0" },
  wT = H.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    width: fit-content;
    justify-items: center;
    gap: 4px;

    position: relative;
    padding: 4px;
    border-radius: ${(e) => vT[e.theme.borderRadius]};

    background-color: ${(e) => e.theme.colors.background.secondary};
`,
  xT = H.div`
    position: absolute;
    top: 4px;
    left: 4px;

    height: calc(100% - 8px);
    width: calc(50% - 4px);

    border-radius: ${(e) => yT[e.theme.borderRadius]};
    background-color: ${(e) => e.theme.colors.background.segment};

    transform: ${(e) => (e.right ? "translateX(100%)" : "translateX(0)")};

    transition: transform 0.13s ease-in-out;
`,
  y4 = H.input`
    display: none;
`,
  w4 = H.label`
    padding: 9px 12px;
    z-index: 1;

    cursor: ${(e) => (e.isActive ? "default" : "pointer")};

    transition: transform 0.13s ease-in-out;

    &:hover {
        transform: ${(e) => (e.isActive ? "none" : "scale(1.025)")};
    }

    > * {
        ${(e) => (e.isActive ? "" : `color: ${e.theme.colors.text.secondary};`)}
    }
`,
  CT = (e) => {
    const t = "tabBar" + Math.floor(Math.random() * 1e4);
    return b(wT, {
      get class() {
        return e.class;
      },
      "data-tc-tab-bar": "true",
      get children() {
        return [
          b(xT, {
            get right() {
              return e.selectedTabIndex === 1;
            },
          }),
          b(w4, {
            get isActive() {
              return e.selectedTabIndex === 0;
            },
            get children() {
              return [
                b(y4, {
                  type: "radio",
                  name: t,
                  get checked() {
                    return e.selectedTabIndex === 0;
                  },
                  onInput: () => {
                    var n;
                    return (n = e.onSelectedTabIndexChange) == null ? void 0 : n.call(e, 0);
                  },
                }),
                ge(() => e.tab1),
              ];
            },
          }),
          b(w4, {
            get isActive() {
              return e.selectedTabIndex === 1;
            },
            get children() {
              return [
                b(y4, {
                  type: "radio",
                  get checked() {
                    return e.selectedTabIndex === 1;
                  },
                  name: t,
                  onInput: () => {
                    var n;
                    return (n = e.onSelectedTabIndexChange) == null ? void 0 : n.call(e, 1);
                  },
                }),
                ge(() => e.tab2),
              ];
            },
          }),
        ];
      },
    });
  },
  ST = { m: "16px", s: "12px", none: "0" },
  bT = { m: "12px", s: "8px", none: "0" },
  Oy = 256,
  _0 = 60,
  x4 = 48,
  C4 = 24,
  Xl = H.div`
    width: 52px;
    height: 52px;
    background: transparent;
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.125s ease-in-out;
`,
  ET = H.button`
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${(e) => e.theme.colors.background.qr};
    border-radius: ${(e) => ST[e.theme.borderRadius]};
    padding: ${Er(C4)} 0;
    height: ${Er(Oy + C4 * 2)};
    width: 100%;

    overflow: hidden;
    cursor: pointer;
    border: none;

    ${el} {
        &:hover {
            ${Xl.class} {
                transform: scale(1.04);
            }
        }
    }

    &:active {
        ${Xl.class} {
            transform: scale(0.96);
        }
    }

    ${Ja} {
        &:active {
            ${Xl.class} {
                transform: scale(0.92);
            }
        }
    }
`,
  TT = H.div`
    position: relative;

    width: fit-content;
    margin: 0 auto;

    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    rect {
        fill: transparent;
    }

    path {
        fill: ${(e) => e.theme.colors.constant.black};
    }
`,
  PT = H.div`
    position: absolute;
    width: ${Er(_0)};
    height: ${Er(_0)};
    background: ${(e) => e.theme.colors.background.qr};

    display: flex;
    align-items: center;
    justify-content: center;
`,
  _T = H(wo)`
    width: ${(e) => Er(e.size)};
    height: ${(e) => Er(e.size)};
    border-radius: ${(e) => bT[e.theme.borderRadius]};
    background-color: ${(e) => e.theme.colors.background.qr};
`,
  AT = H.div`
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    gap: 6px;
    align-items: center;
    border-radius: 18px;
    min-width: 126px;
    padding: 9px 16px 9px 10px;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));
    background-color: ${(e) => e.theme.colors.background.segment};
`;
var By = { exports: {} };
(function (e, t) {
  var n = (function () {
    var r = function (_, O) {
      var B = 236,
        A = 17,
        k = _,
        I = o[O],
        M = null,
        L = 0,
        N = null,
        j = [],
        W = {},
        oe = function (G, K) {
          (L = k * 4 + 17),
            (M = (function (U) {
              for (var q = new Array(U), Z = 0; Z < U; Z += 1) {
                q[Z] = new Array(U);
                for (var ae = 0; ae < U; ae += 1) q[Z][ae] = null;
              }
              return q;
            })(L)),
            ye(0, 0),
            ye(L - 7, 0),
            ye(0, L - 7),
            se(),
            ne(),
            Oe(G, K),
            k >= 7 && pe(G),
            N == null && (N = Pe(k, I, j)),
            tt(N, K);
        },
        ye = function (G, K) {
          for (var U = -1; U <= 7; U += 1)
            if (!(G + U <= -1 || L <= G + U))
              for (var q = -1; q <= 7; q += 1)
                K + q <= -1 ||
                  L <= K + q ||
                  ((0 <= U && U <= 6 && (q == 0 || q == 6)) || (0 <= q && q <= 6 && (U == 0 || U == 6)) || (2 <= U && U <= 4 && 2 <= q && q <= 4)
                    ? (M[G + U][K + q] = !0)
                    : (M[G + U][K + q] = !1));
        },
        J = function () {
          for (var G = 0, K = 0, U = 0; U < 8; U += 1) {
            oe(!0, U);
            var q = a.getLostPoint(W);
            (U == 0 || G > q) && ((G = q), (K = U));
          }
          return K;
        },
        ne = function () {
          for (var G = 8; G < L - 8; G += 1) M[G][6] == null && (M[G][6] = G % 2 == 0);
          for (var K = 8; K < L - 8; K += 1) M[6][K] == null && (M[6][K] = K % 2 == 0);
        },
        se = function () {
          for (var G = a.getPatternPosition(k), K = 0; K < G.length; K += 1)
            for (var U = 0; U < G.length; U += 1) {
              var q = G[K],
                Z = G[U];
              if (M[q][Z] == null)
                for (var ae = -2; ae <= 2; ae += 1)
                  for (var Ce = -2; Ce <= 2; Ce += 1) ae == -2 || ae == 2 || Ce == -2 || Ce == 2 || (ae == 0 && Ce == 0) ? (M[q + ae][Z + Ce] = !0) : (M[q + ae][Z + Ce] = !1);
            }
        },
        pe = function (G) {
          for (var K = a.getBCHTypeNumber(k), U = 0; U < 18; U += 1) {
            var q = !G && ((K >> U) & 1) == 1;
            M[Math.floor(U / 3)][(U % 3) + L - 8 - 3] = q;
          }
          for (var U = 0; U < 18; U += 1) {
            var q = !G && ((K >> U) & 1) == 1;
            M[(U % 3) + L - 8 - 3][Math.floor(U / 3)] = q;
          }
        },
        Oe = function (G, K) {
          for (var U = (I << 3) | K, q = a.getBCHTypeInfo(U), Z = 0; Z < 15; Z += 1) {
            var ae = !G && ((q >> Z) & 1) == 1;
            Z < 6 ? (M[Z][8] = ae) : Z < 8 ? (M[Z + 1][8] = ae) : (M[L - 15 + Z][8] = ae);
          }
          for (var Z = 0; Z < 15; Z += 1) {
            var ae = !G && ((q >> Z) & 1) == 1;
            Z < 8 ? (M[8][L - Z - 1] = ae) : Z < 9 ? (M[8][15 - Z - 1 + 1] = ae) : (M[8][15 - Z - 1] = ae);
          }
          M[L - 8][8] = !G;
        },
        tt = function (G, K) {
          for (var U = -1, q = L - 1, Z = 7, ae = 0, Ce = a.getMaskFunction(K), be = L - 1; be > 0; be -= 2)
            for (be == 6 && (be -= 1); ; ) {
              for (var lt = 0; lt < 2; lt += 1)
                if (M[q][be - lt] == null) {
                  var dt = !1;
                  ae < G.length && (dt = ((G[ae] >>> Z) & 1) == 1);
                  var Te = Ce(q, be - lt);
                  Te && (dt = !dt), (M[q][be - lt] = dt), (Z -= 1), Z == -1 && ((ae += 1), (Z = 7));
                }
              if (((q += U), q < 0 || L <= q)) {
                (q -= U), (U = -U);
                break;
              }
            }
        },
        at = function (G, K) {
          for (var U = 0, q = 0, Z = 0, ae = new Array(K.length), Ce = new Array(K.length), be = 0; be < K.length; be += 1) {
            var lt = K[be].dataCount,
              dt = K[be].totalCount - lt;
            (q = Math.max(q, lt)), (Z = Math.max(Z, dt)), (ae[be] = new Array(lt));
            for (var Te = 0; Te < ae[be].length; Te += 1) ae[be][Te] = 255 & G.getBuffer()[Te + U];
            U += lt;
            var At = a.getErrorCorrectPolynomial(dt),
              $t = u(ae[be], At.getLength() - 1),
              ti = $t.mod(At);
            Ce[be] = new Array(At.getLength() - 1);
            for (var Te = 0; Te < Ce[be].length; Te += 1) {
              var Ht = Te + ti.getLength() - Ce[be].length;
              Ce[be][Te] = Ht >= 0 ? ti.getAt(Ht) : 0;
            }
          }
          for (var _n = 0, Te = 0; Te < K.length; Te += 1) _n += K[Te].totalCount;
          for (var An = new Array(_n), $e = 0, Te = 0; Te < q; Te += 1) for (var be = 0; be < K.length; be += 1) Te < ae[be].length && ((An[$e] = ae[be][Te]), ($e += 1));
          for (var Te = 0; Te < Z; Te += 1) for (var be = 0; be < K.length; be += 1) Te < Ce[be].length && ((An[$e] = Ce[be][Te]), ($e += 1));
          return An;
        },
        Pe = function (G, K, U) {
          for (var q = c.getRSBlocks(G, K), Z = f(), ae = 0; ae < U.length; ae += 1) {
            var Ce = U[ae];
            Z.put(Ce.getMode(), 4), Z.put(Ce.getLength(), a.getLengthInBits(Ce.getMode(), G)), Ce.write(Z);
          }
          for (var be = 0, ae = 0; ae < q.length; ae += 1) be += q[ae].dataCount;
          if (Z.getLengthInBits() > be * 8) throw "code length overflow. (" + Z.getLengthInBits() + ">" + be * 8 + ")";
          for (Z.getLengthInBits() + 4 <= be * 8 && Z.put(0, 4); Z.getLengthInBits() % 8 != 0; ) Z.putBit(!1);
          for (; !(Z.getLengthInBits() >= be * 8 || (Z.put(B, 8), Z.getLengthInBits() >= be * 8)); ) Z.put(A, 8);
          return at(Z, q);
        };
      (W.addData = function (G, K) {
        K = K || "Byte";
        var U = null;
        switch (K) {
          case "Numeric":
            U = h(G);
            break;
          case "Alphanumeric":
            U = p(G);
            break;
          case "Byte":
            U = g(G);
            break;
          case "Kanji":
            U = v(G);
            break;
          default:
            throw "mode:" + K;
        }
        j.push(U), (N = null);
      }),
        (W.isDark = function (G, K) {
          if (G < 0 || L <= G || K < 0 || L <= K) throw G + "," + K;
          return M[G][K];
        }),
        (W.getModuleCount = function () {
          return L;
        }),
        (W.make = function () {
          if (k < 1) {
            for (var G = 1; G < 40; G++) {
              for (var K = c.getRSBlocks(G, I), U = f(), q = 0; q < j.length; q++) {
                var Z = j[q];
                U.put(Z.getMode(), 4), U.put(Z.getLength(), a.getLengthInBits(Z.getMode(), G)), Z.write(U);
              }
              for (var ae = 0, q = 0; q < K.length; q++) ae += K[q].dataCount;
              if (U.getLengthInBits() <= ae * 8) break;
            }
            k = G;
          }
          oe(!1, J());
        }),
        (W.createTableTag = function (G, K) {
          (G = G || 2), (K = typeof K > "u" ? G * 4 : K);
          var U = "";
          (U += '<table style="'),
            (U += " border-width: 0px; border-style: none;"),
            (U += " border-collapse: collapse;"),
            (U += " padding: 0px; margin: " + K + "px;"),
            (U += '">'),
            (U += "<tbody>");
          for (var q = 0; q < W.getModuleCount(); q += 1) {
            U += "<tr>";
            for (var Z = 0; Z < W.getModuleCount(); Z += 1)
              (U += '<td style="'),
                (U += " border-width: 0px; border-style: none;"),
                (U += " border-collapse: collapse;"),
                (U += " padding: 0px; margin: 0px;"),
                (U += " width: " + G + "px;"),
                (U += " height: " + G + "px;"),
                (U += " background-color: "),
                (U += W.isDark(q, Z) ? "#000000" : "#ffffff"),
                (U += ";"),
                (U += '"/>');
            U += "</tr>";
          }
          return (U += "</tbody>"), (U += "</table>"), U;
        }),
        (W.createSvgTag = function (G, K, U, q) {
          var Z = {};
          typeof arguments[0] == "object" && ((Z = arguments[0]), (G = Z.cellSize), (K = Z.margin), (U = Z.alt), (q = Z.title)),
            (G = G || 2),
            (K = typeof K > "u" ? G * 4 : K),
            (U = typeof U == "string" ? { text: U } : U || {}),
            (U.text = U.text || null),
            (U.id = U.text ? U.id || "qrcode-description" : null),
            (q = typeof q == "string" ? { text: q } : q || {}),
            (q.text = q.text || null),
            (q.id = q.text ? q.id || "qrcode-title" : null);
          var ae = W.getModuleCount() * G + K * 2,
            Ce,
            be,
            lt,
            dt,
            Te = "",
            At;
          for (
            At = "l" + G + ",0 0," + G + " -" + G + ",0 0,-" + G + "z ",
              Te += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',
              Te += Z.scalable ? "" : ' width="' + ae + 'px" height="' + ae + 'px"',
              Te += ' viewBox="0 0 ' + ae + " " + ae + '" ',
              Te += ' preserveAspectRatio="xMinYMin meet"',
              Te += q.text || U.text ? ' role="img" aria-labelledby="' + Ye([q.id, U.id].join(" ").trim()) + '"' : "",
              Te += ">",
              Te += q.text ? '<title id="' + Ye(q.id) + '">' + Ye(q.text) + "</title>" : "",
              Te += U.text ? '<description id="' + Ye(U.id) + '">' + Ye(U.text) + "</description>" : "",
              Te += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',
              Te += '<path d="',
              lt = 0;
            lt < W.getModuleCount();
            lt += 1
          )
            for (dt = lt * G + K, Ce = 0; Ce < W.getModuleCount(); Ce += 1) W.isDark(lt, Ce) && ((be = Ce * G + K), (Te += "M" + be + "," + dt + At));
          return (Te += '" stroke="transparent" fill="black"/>'), (Te += "</svg>"), Te;
        }),
        (W.createDataURL = function (G, K) {
          (G = G || 2), (K = typeof K > "u" ? G * 4 : K);
          var U = W.getModuleCount() * G + K * 2,
            q = K,
            Z = U - K;
          return T(U, U, function (ae, Ce) {
            if (q <= ae && ae < Z && q <= Ce && Ce < Z) {
              var be = Math.floor((ae - q) / G),
                lt = Math.floor((Ce - q) / G);
              return W.isDark(lt, be) ? 0 : 1;
            } else return 1;
          });
        }),
        (W.createImgTag = function (G, K, U) {
          (G = G || 2), (K = typeof K > "u" ? G * 4 : K);
          var q = W.getModuleCount() * G + K * 2,
            Z = "";
          return (
            (Z += "<img"),
            (Z += ' src="'),
            (Z += W.createDataURL(G, K)),
            (Z += '"'),
            (Z += ' width="'),
            (Z += q),
            (Z += '"'),
            (Z += ' height="'),
            (Z += q),
            (Z += '"'),
            U && ((Z += ' alt="'), (Z += Ye(U)), (Z += '"')),
            (Z += "/>"),
            Z
          );
        });
      var Ye = function (G) {
          for (var K = "", U = 0; U < G.length; U += 1) {
            var q = G.charAt(U);
            switch (q) {
              case "<":
                K += "&lt;";
                break;
              case ">":
                K += "&gt;";
                break;
              case "&":
                K += "&amp;";
                break;
              case '"':
                K += "&quot;";
                break;
              default:
                K += q;
                break;
            }
          }
          return K;
        },
        tn = function (G) {
          var K = 1;
          G = typeof G > "u" ? K * 2 : G;
          var U = W.getModuleCount() * K + G * 2,
            q = G,
            Z = U - G,
            ae,
            Ce,
            be,
            lt,
            dt,
            Te = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " },
            At = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " },
            $t = "";
          for (ae = 0; ae < U; ae += 2) {
            for (be = Math.floor((ae - q) / K), lt = Math.floor((ae + 1 - q) / K), Ce = 0; Ce < U; Ce += 1)
              (dt = "█"),
                q <= Ce && Ce < Z && q <= ae && ae < Z && W.isDark(be, Math.floor((Ce - q) / K)) && (dt = " "),
                q <= Ce && Ce < Z && q <= ae + 1 && ae + 1 < Z && W.isDark(lt, Math.floor((Ce - q) / K)) ? (dt += " ") : (dt += "█"),
                ($t += G < 1 && ae + 1 >= Z ? At[dt] : Te[dt]);
            $t += `
`;
          }
          return U % 2 && G > 0 ? $t.substring(0, $t.length - U - 1) + Array(U + 1).join("▀") : $t.substring(0, $t.length - 1);
        };
      return (
        (W.createASCII = function (G, K) {
          if (((G = G || 1), G < 2)) return tn(K);
          (G -= 1), (K = typeof K > "u" ? G * 2 : K);
          var U = W.getModuleCount() * G + K * 2,
            q = K,
            Z = U - K,
            ae,
            Ce,
            be,
            lt,
            dt = Array(G + 1).join("██"),
            Te = Array(G + 1).join("  "),
            At = "",
            $t = "";
          for (ae = 0; ae < U; ae += 1) {
            for (be = Math.floor((ae - q) / G), $t = "", Ce = 0; Ce < U; Ce += 1)
              (lt = 1), q <= Ce && Ce < Z && q <= ae && ae < Z && W.isDark(be, Math.floor((Ce - q) / G)) && (lt = 0), ($t += lt ? dt : Te);
            for (be = 0; be < G; be += 1)
              At +=
                $t +
                `
`;
          }
          return At.substring(0, At.length - 1);
        }),
        (W.renderTo2dContext = function (G, K) {
          K = K || 2;
          for (var U = W.getModuleCount(), q = 0; q < U; q++) for (var Z = 0; Z < U; Z++) (G.fillStyle = W.isDark(q, Z) ? "black" : "white"), G.fillRect(q * K, Z * K, K, K);
        }),
        W
      );
    };
    (r.stringToBytesFuncs = {
      default: function (_) {
        for (var O = [], B = 0; B < _.length; B += 1) {
          var A = _.charCodeAt(B);
          O.push(A & 255);
        }
        return O;
      },
    }),
      (r.stringToBytes = r.stringToBytesFuncs.default),
      (r.createStringToBytes = function (_, O) {
        var B = (function () {
            for (
              var k = w(_),
                I = function () {
                  var ne = k.read();
                  if (ne == -1) throw "eof";
                  return ne;
                },
                M = 0,
                L = {};
              ;

            ) {
              var N = k.read();
              if (N == -1) break;
              var j = I(),
                W = I(),
                oe = I(),
                ye = String.fromCharCode((N << 8) | j),
                J = (W << 8) | oe;
              (L[ye] = J), (M += 1);
            }
            if (M != O) throw M + " != " + O;
            return L;
          })(),
          A = "?".charCodeAt(0);
        return function (k) {
          for (var I = [], M = 0; M < k.length; M += 1) {
            var L = k.charCodeAt(M);
            if (L < 128) I.push(L);
            else {
              var N = B[k.charAt(M)];
              typeof N == "number" ? ((N & 255) == N ? I.push(N) : (I.push(N >>> 8), I.push(N & 255))) : I.push(A);
            }
          }
          return I;
        };
      });
    var i = { MODE_NUMBER: 1 << 0, MODE_ALPHA_NUM: 1 << 1, MODE_8BIT_BYTE: 1 << 2, MODE_KANJI: 1 << 3 },
      o = { L: 1, M: 0, Q: 3, H: 2 },
      s = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 },
      a = (function () {
        var _ = [
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
            [6, 30, 58, 86, 114, 142, 170],
          ],
          O = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
          B = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
          A = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),
          k = {},
          I = function (M) {
            for (var L = 0; M != 0; ) (L += 1), (M >>>= 1);
            return L;
          };
        return (
          (k.getBCHTypeInfo = function (M) {
            for (var L = M << 10; I(L) - I(O) >= 0; ) L ^= O << (I(L) - I(O));
            return ((M << 10) | L) ^ A;
          }),
          (k.getBCHTypeNumber = function (M) {
            for (var L = M << 12; I(L) - I(B) >= 0; ) L ^= B << (I(L) - I(B));
            return (M << 12) | L;
          }),
          (k.getPatternPosition = function (M) {
            return _[M - 1];
          }),
          (k.getMaskFunction = function (M) {
            switch (M) {
              case s.PATTERN000:
                return function (L, N) {
                  return (L + N) % 2 == 0;
                };
              case s.PATTERN001:
                return function (L, N) {
                  return L % 2 == 0;
                };
              case s.PATTERN010:
                return function (L, N) {
                  return N % 3 == 0;
                };
              case s.PATTERN011:
                return function (L, N) {
                  return (L + N) % 3 == 0;
                };
              case s.PATTERN100:
                return function (L, N) {
                  return (Math.floor(L / 2) + Math.floor(N / 3)) % 2 == 0;
                };
              case s.PATTERN101:
                return function (L, N) {
                  return ((L * N) % 2) + ((L * N) % 3) == 0;
                };
              case s.PATTERN110:
                return function (L, N) {
                  return (((L * N) % 2) + ((L * N) % 3)) % 2 == 0;
                };
              case s.PATTERN111:
                return function (L, N) {
                  return (((L * N) % 3) + ((L + N) % 2)) % 2 == 0;
                };
              default:
                throw "bad maskPattern:" + M;
            }
          }),
          (k.getErrorCorrectPolynomial = function (M) {
            for (var L = u([1], 0), N = 0; N < M; N += 1) L = L.multiply(u([1, l.gexp(N)], 0));
            return L;
          }),
          (k.getLengthInBits = function (M, L) {
            if (1 <= L && L < 10)
              switch (M) {
                case i.MODE_NUMBER:
                  return 10;
                case i.MODE_ALPHA_NUM:
                  return 9;
                case i.MODE_8BIT_BYTE:
                  return 8;
                case i.MODE_KANJI:
                  return 8;
                default:
                  throw "mode:" + M;
              }
            else if (L < 27)
              switch (M) {
                case i.MODE_NUMBER:
                  return 12;
                case i.MODE_ALPHA_NUM:
                  return 11;
                case i.MODE_8BIT_BYTE:
                  return 16;
                case i.MODE_KANJI:
                  return 10;
                default:
                  throw "mode:" + M;
              }
            else if (L < 41)
              switch (M) {
                case i.MODE_NUMBER:
                  return 14;
                case i.MODE_ALPHA_NUM:
                  return 13;
                case i.MODE_8BIT_BYTE:
                  return 16;
                case i.MODE_KANJI:
                  return 12;
                default:
                  throw "mode:" + M;
              }
            else throw "type:" + L;
          }),
          (k.getLostPoint = function (M) {
            for (var L = M.getModuleCount(), N = 0, j = 0; j < L; j += 1)
              for (var W = 0; W < L; W += 1) {
                for (var oe = 0, ye = M.isDark(j, W), J = -1; J <= 1; J += 1)
                  if (!(j + J < 0 || L <= j + J))
                    for (var ne = -1; ne <= 1; ne += 1) W + ne < 0 || L <= W + ne || (J == 0 && ne == 0) || (ye == M.isDark(j + J, W + ne) && (oe += 1));
                oe > 5 && (N += 3 + oe - 5);
              }
            for (var j = 0; j < L - 1; j += 1)
              for (var W = 0; W < L - 1; W += 1) {
                var se = 0;
                M.isDark(j, W) && (se += 1),
                  M.isDark(j + 1, W) && (se += 1),
                  M.isDark(j, W + 1) && (se += 1),
                  M.isDark(j + 1, W + 1) && (se += 1),
                  (se == 0 || se == 4) && (N += 3);
              }
            for (var j = 0; j < L; j += 1)
              for (var W = 0; W < L - 6; W += 1)
                M.isDark(j, W) && !M.isDark(j, W + 1) && M.isDark(j, W + 2) && M.isDark(j, W + 3) && M.isDark(j, W + 4) && !M.isDark(j, W + 5) && M.isDark(j, W + 6) && (N += 40);
            for (var W = 0; W < L; W += 1)
              for (var j = 0; j < L - 6; j += 1)
                M.isDark(j, W) && !M.isDark(j + 1, W) && M.isDark(j + 2, W) && M.isDark(j + 3, W) && M.isDark(j + 4, W) && !M.isDark(j + 5, W) && M.isDark(j + 6, W) && (N += 40);
            for (var pe = 0, W = 0; W < L; W += 1) for (var j = 0; j < L; j += 1) M.isDark(j, W) && (pe += 1);
            var Oe = Math.abs((100 * pe) / L / L - 50) / 5;
            return (N += Oe * 10), N;
          }),
          k
        );
      })(),
      l = (function () {
        for (var _ = new Array(256), O = new Array(256), B = 0; B < 8; B += 1) _[B] = 1 << B;
        for (var B = 8; B < 256; B += 1) _[B] = _[B - 4] ^ _[B - 5] ^ _[B - 6] ^ _[B - 8];
        for (var B = 0; B < 255; B += 1) O[_[B]] = B;
        var A = {};
        return (
          (A.glog = function (k) {
            if (k < 1) throw "glog(" + k + ")";
            return O[k];
          }),
          (A.gexp = function (k) {
            for (; k < 0; ) k += 255;
            for (; k >= 256; ) k -= 255;
            return _[k];
          }),
          A
        );
      })();
    function u(_, O) {
      if (typeof _.length > "u") throw _.length + "/" + O;
      var B = (function () {
          for (var k = 0; k < _.length && _[k] == 0; ) k += 1;
          for (var I = new Array(_.length - k + O), M = 0; M < _.length - k; M += 1) I[M] = _[M + k];
          return I;
        })(),
        A = {};
      return (
        (A.getAt = function (k) {
          return B[k];
        }),
        (A.getLength = function () {
          return B.length;
        }),
        (A.multiply = function (k) {
          for (var I = new Array(A.getLength() + k.getLength() - 1), M = 0; M < A.getLength(); M += 1)
            for (var L = 0; L < k.getLength(); L += 1) I[M + L] ^= l.gexp(l.glog(A.getAt(M)) + l.glog(k.getAt(L)));
          return u(I, 0);
        }),
        (A.mod = function (k) {
          if (A.getLength() - k.getLength() < 0) return A;
          for (var I = l.glog(A.getAt(0)) - l.glog(k.getAt(0)), M = new Array(A.getLength()), L = 0; L < A.getLength(); L += 1) M[L] = A.getAt(L);
          for (var L = 0; L < k.getLength(); L += 1) M[L] ^= l.gexp(l.glog(k.getAt(L)) + I);
          return u(M, 0).mod(k);
        }),
        A
      );
    }
    var c = (function () {
        var _ = [
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
            [11, 36, 12, 7, 37, 13],
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
            [20, 45, 15, 61, 46, 16],
          ],
          O = function (k, I) {
            var M = {};
            return (M.totalCount = k), (M.dataCount = I), M;
          },
          B = {},
          A = function (k, I) {
            switch (I) {
              case o.L:
                return _[(k - 1) * 4 + 0];
              case o.M:
                return _[(k - 1) * 4 + 1];
              case o.Q:
                return _[(k - 1) * 4 + 2];
              case o.H:
                return _[(k - 1) * 4 + 3];
              default:
                return;
            }
          };
        return (
          (B.getRSBlocks = function (k, I) {
            var M = A(k, I);
            if (typeof M > "u") throw "bad rs block @ typeNumber:" + k + "/errorCorrectionLevel:" + I;
            for (var L = M.length / 3, N = [], j = 0; j < L; j += 1) for (var W = M[j * 3 + 0], oe = M[j * 3 + 1], ye = M[j * 3 + 2], J = 0; J < W; J += 1) N.push(O(oe, ye));
            return N;
          }),
          B
        );
      })(),
      f = function () {
        var _ = [],
          O = 0,
          B = {};
        return (
          (B.getBuffer = function () {
            return _;
          }),
          (B.getAt = function (A) {
            var k = Math.floor(A / 8);
            return ((_[k] >>> (7 - (A % 8))) & 1) == 1;
          }),
          (B.put = function (A, k) {
            for (var I = 0; I < k; I += 1) B.putBit(((A >>> (k - I - 1)) & 1) == 1);
          }),
          (B.getLengthInBits = function () {
            return O;
          }),
          (B.putBit = function (A) {
            var k = Math.floor(O / 8);
            _.length <= k && _.push(0), A && (_[k] |= 128 >>> O % 8), (O += 1);
          }),
          B
        );
      },
      h = function (_) {
        var O = i.MODE_NUMBER,
          B = _,
          A = {};
        (A.getMode = function () {
          return O;
        }),
          (A.getLength = function (M) {
            return B.length;
          }),
          (A.write = function (M) {
            for (var L = B, N = 0; N + 2 < L.length; ) M.put(k(L.substring(N, N + 3)), 10), (N += 3);
            N < L.length && (L.length - N == 1 ? M.put(k(L.substring(N, N + 1)), 4) : L.length - N == 2 && M.put(k(L.substring(N, N + 2)), 7));
          });
        var k = function (M) {
            for (var L = 0, N = 0; N < M.length; N += 1) L = L * 10 + I(M.charAt(N));
            return L;
          },
          I = function (M) {
            if ("0" <= M && M <= "9") return M.charCodeAt(0) - "0".charCodeAt(0);
            throw "illegal char :" + M;
          };
        return A;
      },
      p = function (_) {
        var O = i.MODE_ALPHA_NUM,
          B = _,
          A = {};
        (A.getMode = function () {
          return O;
        }),
          (A.getLength = function (I) {
            return B.length;
          }),
          (A.write = function (I) {
            for (var M = B, L = 0; L + 1 < M.length; ) I.put(k(M.charAt(L)) * 45 + k(M.charAt(L + 1)), 11), (L += 2);
            L < M.length && I.put(k(M.charAt(L)), 6);
          });
        var k = function (I) {
          if ("0" <= I && I <= "9") return I.charCodeAt(0) - "0".charCodeAt(0);
          if ("A" <= I && I <= "Z") return I.charCodeAt(0) - "A".charCodeAt(0) + 10;
          switch (I) {
            case " ":
              return 36;
            case "$":
              return 37;
            case "%":
              return 38;
            case "*":
              return 39;
            case "+":
              return 40;
            case "-":
              return 41;
            case ".":
              return 42;
            case "/":
              return 43;
            case ":":
              return 44;
            default:
              throw "illegal char :" + I;
          }
        };
        return A;
      },
      g = function (_) {
        var O = i.MODE_8BIT_BYTE,
          B = r.stringToBytes(_),
          A = {};
        return (
          (A.getMode = function () {
            return O;
          }),
          (A.getLength = function (k) {
            return B.length;
          }),
          (A.write = function (k) {
            for (var I = 0; I < B.length; I += 1) k.put(B[I], 8);
          }),
          A
        );
      },
      v = function (_) {
        var O = i.MODE_KANJI,
          B = r.stringToBytesFuncs.SJIS;
        if (!B) throw "sjis not supported.";
        (function (I, M) {
          var L = B(I);
          if (L.length != 2 || ((L[0] << 8) | L[1]) != M) throw "sjis not supported.";
        })("友", 38726);
        var A = B(_),
          k = {};
        return (
          (k.getMode = function () {
            return O;
          }),
          (k.getLength = function (I) {
            return ~~(A.length / 2);
          }),
          (k.write = function (I) {
            for (var M = A, L = 0; L + 1 < M.length; ) {
              var N = ((255 & M[L]) << 8) | (255 & M[L + 1]);
              if (33088 <= N && N <= 40956) N -= 33088;
              else if (57408 <= N && N <= 60351) N -= 49472;
              else throw "illegal char at " + (L + 1) + "/" + N;
              (N = ((N >>> 8) & 255) * 192 + (N & 255)), I.put(N, 13), (L += 2);
            }
            if (L < M.length) throw "illegal char at " + (L + 1);
          }),
          k
        );
      },
      P = function () {
        var _ = [],
          O = {};
        return (
          (O.writeByte = function (B) {
            _.push(B & 255);
          }),
          (O.writeShort = function (B) {
            O.writeByte(B), O.writeByte(B >>> 8);
          }),
          (O.writeBytes = function (B, A, k) {
            (A = A || 0), (k = k || B.length);
            for (var I = 0; I < k; I += 1) O.writeByte(B[I + A]);
          }),
          (O.writeString = function (B) {
            for (var A = 0; A < B.length; A += 1) O.writeByte(B.charCodeAt(A));
          }),
          (O.toByteArray = function () {
            return _;
          }),
          (O.toString = function () {
            var B = "";
            B += "[";
            for (var A = 0; A < _.length; A += 1) A > 0 && (B += ","), (B += _[A]);
            return (B += "]"), B;
          }),
          O
        );
      },
      y = function () {
        var _ = 0,
          O = 0,
          B = 0,
          A = "",
          k = {},
          I = function (L) {
            A += String.fromCharCode(M(L & 63));
          },
          M = function (L) {
            if (!(L < 0)) {
              if (L < 26) return 65 + L;
              if (L < 52) return 97 + (L - 26);
              if (L < 62) return 48 + (L - 52);
              if (L == 62) return 43;
              if (L == 63) return 47;
            }
            throw "n:" + L;
          };
        return (
          (k.writeByte = function (L) {
            for (_ = (_ << 8) | (L & 255), O += 8, B += 1; O >= 6; ) I(_ >>> (O - 6)), (O -= 6);
          }),
          (k.flush = function () {
            if ((O > 0 && (I(_ << (6 - O)), (_ = 0), (O = 0)), B % 3 != 0)) for (var L = 3 - (B % 3), N = 0; N < L; N += 1) A += "=";
          }),
          (k.toString = function () {
            return A;
          }),
          k
        );
      },
      w = function (_) {
        var O = _,
          B = 0,
          A = 0,
          k = 0,
          I = {};
        I.read = function () {
          for (; k < 8; ) {
            if (B >= O.length) {
              if (k == 0) return -1;
              throw "unexpected end of file./" + k;
            }
            var L = O.charAt(B);
            if (((B += 1), L == "=")) return (k = 0), -1;
            if (L.match(/^\s$/)) continue;
            (A = (A << 6) | M(L.charCodeAt(0))), (k += 6);
          }
          var N = (A >>> (k - 8)) & 255;
          return (k -= 8), N;
        };
        var M = function (L) {
          if (65 <= L && L <= 90) return L - 65;
          if (97 <= L && L <= 122) return L - 97 + 26;
          if (48 <= L && L <= 57) return L - 48 + 52;
          if (L == 43) return 62;
          if (L == 47) return 63;
          throw "c:" + L;
        };
        return I;
      },
      x = function (_, O) {
        var B = _,
          A = O,
          k = new Array(_ * O),
          I = {};
        (I.setPixel = function (j, W, oe) {
          k[W * B + j] = oe;
        }),
          (I.write = function (j) {
            j.writeString("GIF87a"),
              j.writeShort(B),
              j.writeShort(A),
              j.writeByte(128),
              j.writeByte(0),
              j.writeByte(0),
              j.writeByte(0),
              j.writeByte(0),
              j.writeByte(0),
              j.writeByte(255),
              j.writeByte(255),
              j.writeByte(255),
              j.writeString(","),
              j.writeShort(0),
              j.writeShort(0),
              j.writeShort(B),
              j.writeShort(A),
              j.writeByte(0);
            var W = 2,
              oe = L(W);
            j.writeByte(W);
            for (var ye = 0; oe.length - ye > 255; ) j.writeByte(255), j.writeBytes(oe, ye, 255), (ye += 255);
            j.writeByte(oe.length - ye), j.writeBytes(oe, ye, oe.length - ye), j.writeByte(0), j.writeString(";");
          });
        var M = function (j) {
            var W = j,
              oe = 0,
              ye = 0,
              J = {};
            return (
              (J.write = function (ne, se) {
                if (ne >>> se) throw "length over";
                for (; oe + se >= 8; ) W.writeByte(255 & ((ne << oe) | ye)), (se -= 8 - oe), (ne >>>= 8 - oe), (ye = 0), (oe = 0);
                (ye = (ne << oe) | ye), (oe = oe + se);
              }),
              (J.flush = function () {
                oe > 0 && W.writeByte(ye);
              }),
              J
            );
          },
          L = function (j) {
            for (var W = 1 << j, oe = (1 << j) + 1, ye = j + 1, J = N(), ne = 0; ne < W; ne += 1) J.add(String.fromCharCode(ne));
            J.add(String.fromCharCode(W)), J.add(String.fromCharCode(oe));
            var se = P(),
              pe = M(se);
            pe.write(W, ye);
            var Oe = 0,
              tt = String.fromCharCode(k[Oe]);
            for (Oe += 1; Oe < k.length; ) {
              var at = String.fromCharCode(k[Oe]);
              (Oe += 1), J.contains(tt + at) ? (tt = tt + at) : (pe.write(J.indexOf(tt), ye), J.size() < 4095 && (J.size() == 1 << ye && (ye += 1), J.add(tt + at)), (tt = at));
            }
            return pe.write(J.indexOf(tt), ye), pe.write(oe, ye), pe.flush(), se.toByteArray();
          },
          N = function () {
            var j = {},
              W = 0,
              oe = {};
            return (
              (oe.add = function (ye) {
                if (oe.contains(ye)) throw "dup key:" + ye;
                (j[ye] = W), (W += 1);
              }),
              (oe.size = function () {
                return W;
              }),
              (oe.indexOf = function (ye) {
                return j[ye];
              }),
              (oe.contains = function (ye) {
                return typeof j[ye] < "u";
              }),
              oe
            );
          };
        return I;
      },
      T = function (_, O, B) {
        for (var A = x(_, O), k = 0; k < O; k += 1) for (var I = 0; I < _; I += 1) A.setPixel(I, k, B(I, k));
        var M = P();
        A.write(M);
        for (var L = y(), N = M.toByteArray(), j = 0; j < N.length; j += 1) L.writeByte(N[j]);
        return L.flush(), "data:image/gif;base64," + L;
      };
    return r;
  })();
  (function () {
    n.stringToBytesFuncs["UTF-8"] = function (r) {
      function i(o) {
        for (var s = [], a = 0; a < o.length; a++) {
          var l = o.charCodeAt(a);
          l < 128
            ? s.push(l)
            : l < 2048
            ? s.push(192 | (l >> 6), 128 | (l & 63))
            : l < 55296 || l >= 57344
            ? s.push(224 | (l >> 12), 128 | ((l >> 6) & 63), 128 | (l & 63))
            : (a++, (l = 65536 + (((l & 1023) << 10) | (o.charCodeAt(a) & 1023))), s.push(240 | (l >> 18), 128 | ((l >> 12) & 63), 128 | ((l >> 6) & 63), 128 | (l & 63)));
        }
        return s;
      }
      return i(r);
    };
  })(),
    (function (r) {
      e.exports = r();
    })(function () {
      return n;
    });
})(By);
const kT = By.exports;
function mh(e) {
  return navigator != null && navigator.clipboard ? navigator.clipboard.writeText(e) : (LT(e), Promise.resolve());
}
function LT(e) {
  const t = document.createElement("textarea");
  (t.value = e), (t.style.top = "0"), (t.style.left = "0"), (t.style.position = "fixed"), document.body.appendChild(t), t.focus(), t.select();
  try {
    document.execCommand("copy");
  } finally {
    document.body.removeChild(t);
  }
}
const MT = qe("<div></div>"),
  Dc = (e) => {
    let t, n, r;
    const [i, o] = ze(!1),
      [s, a] = ze(x4);
    hr(() => {
      const h = kT(0, "L");
      h.addData(e.sourceUrl), h.make(), (t.innerHTML = h.createSvgTag(4, 0));
      const p = t.firstElementChild.clientWidth,
        g = Math.round((Oy / p) * 1e5) / 1e5;
      if (r) {
        const v = Math.ceil(_0 / (g * 4)) * 4,
          P = Er(Math.ceil((p - v) / (2 * 4)) * 4);
        (r.style.top = P), (r.style.left = P), (r.style.height = Er(v)), (r.style.width = Er(v)), a(Math.round(x4 / g));
      }
      n.style.transform = `scale(${g})`;
    });
    let l = null;
    return b(ET, {
      get class() {
        return e.class;
      },
      onClick: () => {
        o(!0), mh(e.sourceUrl), l != null && clearTimeout(l), (l = setTimeout(() => o(!1), 1500));
      },
      get children() {
        return [
          b(TT, {
            ref(c) {
              const f = n;
              typeof f == "function" ? f(c) : (n = c);
            },
            get children() {
              return [
                (() => {
                  const c = MT.cloneNode(!0),
                    f = t;
                  return typeof f == "function" ? Ku(f, c) : (t = c), c;
                })(),
                b(Ge, {
                  get when() {
                    return e.imageUrl;
                  },
                  get children() {
                    return b(PT, {
                      ref(c) {
                        const f = r;
                        typeof f == "function" ? f(c) : (r = c);
                      },
                      get children() {
                        return b(_T, {
                          get src() {
                            return e.imageUrl;
                          },
                          alt: "",
                          get size() {
                            return s();
                          },
                        });
                      },
                    });
                  },
                }),
              ];
            },
          }),
          b(ph, {
            onBeforeEnter: (c) => {
              c.animate(
                [
                  { opacity: 0, transform: "translate(-50%, 44px)" },
                  { opacity: 1, transform: "translate(-50%, 0)" },
                ],
                { duration: 150, easing: "ease-out" }
              );
            },
            onExit: (c, f) => {
              c.animate(
                [
                  { opacity: 1, transform: "translate(-50%, 0)" },
                  { opacity: 0, transform: "translate(-50%, 44px)" },
                ],
                { duration: 150, easing: "ease-out" }
              ).finished.then(() => {
                f();
              });
            },
            get children() {
              return b(Ge, {
                get when() {
                  return i() && !e.disableCopy;
                },
                get children() {
                  return b(AT, {
                    get children() {
                      return [b(vh, { size: "xs" }), b(Vn, { translationKey: "common.linkCopied", children: "Link Copied" })];
                    },
                  });
                },
              });
            },
          }),
          b(Ge, {
            get when() {
              return !e.disableCopy;
            },
            get children() {
              return b(Xl, {
                get children() {
                  return b(Ny, {});
                },
              });
            },
          }),
        ];
      },
    });
  };
var A0 = (e, t, n) => {
    const r = t
      .trim()
      .split(".")
      .reduce((i, o) => (i ? i[o] : void 0), e);
    return r !== void 0 ? r : n;
  },
  RT = (e, t, n = /{{(.*?)}}/g) => e.replace(n, (r, i) => A0(t, i, "")),
  IT = (e = {}, t = navigator.language in e ? navigator.language : Object.keys(e)[0]) => {
    const [n, r] = ze(t),
      [i, o] = dh(e);
    return [
      (l, u, c) => {
        const f = A0(i[n()], l, c || "");
        return typeof f == "function" ? f(u) : typeof f == "string" ? RT(f, u || {}) : f;
      },
      {
        add(l, u) {
          o(l, (c) => Object.assign(c || {}, u));
        },
        locale: (l) => (l ? r(l) : n()),
        dict: (l) => A0(i, l),
      },
    ];
  },
  $y = Ic({}),
  Jr = () => Nn($y);
const OT = H.div`
    font-style: normal;
    font-weight: ${(e) => e.fontWeight};
    font-size: ${(e) => e.fontSize};
    line-height: ${(e) => e.lineHeight};

    color: ${(e) => e.color};
`,
  Vn = (e) => {
    const t = pt(),
      [n] = Jr();
    let r;
    const i = () => e.color || t.colors.text.primary,
      o = br({ fontSize: "14px", fontWeight: "510", lineHeight: "130%" }, e);
    return (
      hr(() => {
        r && o.cursor !== "unset" && getComputedStyle(r).cursor !== "pointer" && (r.style.cursor = "default");
      }),
      b(OT, {
        get fontSize() {
          return o.fontSize;
        },
        get fontWeight() {
          return o.fontWeight;
        },
        get lineHeight() {
          return o.lineHeight;
        },
        get color() {
          return i();
        },
        get class() {
          return o.class;
        },
        ref(s) {
          const a = r;
          typeof a == "function" ? a(s) : (r = s);
        },
        "data-tc-text": "true",
        get children() {
          var s;
          return ge(() => !!o.translationKey)() ? n(o.translationKey, o.translationValues, (s = o.children) == null ? void 0 : s.toString()) : o.children;
        },
      })
    );
  },
  BT = H.div`
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 0.5px solid rgba(0, 0, 0, 0.08);

        border-radius: inherit;
    }
`,
  $T = H(wo)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`,
  Dy = (e) =>
    b(BT, {
      get class() {
        return e.class;
      },
      get children() {
        return b($T, {
          get src() {
            return e.src;
          },
        });
      },
    }),
  DT = { m: "16px", s: "12px", none: "0" },
  NT = { m: "6px", s: "6px", none: "0" },
  VT = H.button`
    position: relative;
    cursor: pointer;
    border: none;
    background-color: unset;
    padding: 8px 4px;
    width: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: transform 0.125s ease-in-out;

    ${el} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${Un("mobile")} {
        padding: 8px 4px;
        width: 82px;
    }

    ${Ja} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
  jT = H(Dy)`
    width: 60px;
    height: 60px;
    border-radius: ${(e) => DT[e.theme.borderRadius]};

    margin-bottom: 8px;
`,
  FT = H(wo)`
    position: absolute;
    right: 10px;
    top: 50px;
    width: 24px;
    height: 24px;
    border-radius: ${(e) => NT[e.theme.borderRadius]};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
`,
  UT = H(Vn)`
    max-width: 90px;
    font-weight: 590;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${Un("mobile")} {
        max-width: 80px;
    }
`,
  zT = H(Vn)`
    font-weight: 510;
    max-width: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${(e) => (e.colorPrimary ? e.theme.colors.text.primary : e.theme.colors.text.secondary)};

    ${Un("mobile")} {
        max-width: 80px;
    }
`,
  Zu = (e) =>
    b(VT, {
      get class() {
        return e.class;
      },
      onClick: () => e.onClick(),
      "data-tc-wallet-item": "true",
      get children() {
        return [
          ge(() =>
            ge(() => typeof e.icon == "string")()
              ? b(jT, {
                  get src() {
                    return e.icon;
                  },
                })
              : e.icon
          ),
          ge(
            () =>
              ge(() => !!e.badgeUrl)() &&
              b(FT, {
                get src() {
                  return e.badgeUrl;
                },
              })
          ),
          b(UT, {
            get children() {
              return e.name;
            },
          }),
          ge(
            () =>
              ge(() => !!e.secondLine)() &&
              b(zT, {
                get colorPrimary() {
                  var t;
                  return (t = e.secondLineColorPrimary) != null ? t : !0;
                },
                get children() {
                  return e.secondLine;
                },
              })
          ),
        ];
      },
    }),
  WT = H.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;

    text-align: center;

    color: ${(e) => e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,
  _r = (e) => {
    const [t] = Jr();
    return b(WT, {
      get class() {
        return e.class;
      },
      "data-tc-h1": "true",
      get children() {
        var n;
        return ge(() => !!e.translationKey)() ? t(e.translationKey, e.translationValues, (n = e.children) == null ? void 0 : n.toString()) : e.children;
      },
    });
  },
  HT = H.h2`
    font-style: normal;
    font-weight: 510;
    font-size: 16px;
    line-height: 22px;

    text-align: center;

    color: ${(e) => e.theme.colors.text.secondary};

    margin-top: 0;
    margin-bottom: 32px;

    cursor: default;
`,
  Vi = (e) => {
    const [t] = Jr();
    return b(HT, {
      get class() {
        return e.class;
      },
      "data-tc-h2": "true",
      get children() {
        var n;
        return ge(() => !!e.translationKey)() ? t(e.translationKey, e.translationValues, (n = e.children) == null ? void 0 : n.toString()) : e.children;
      },
    });
  },
  KT = H.h3`
    font-style: normal;
    font-weight: 590;
    font-size: 16px;
    line-height: 20px;

    color: ${(e) => e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,
  gh = (e) => {
    const [t] = Jr();
    return b(KT, {
      "data-tc-h3": "true",
      get class() {
        return e.class;
      },
      get children() {
        var n;
        return ge(() => !!e.translationKey)() ? t(e.translationKey, e.translationValues, (n = e.children) == null ? void 0 : n.toString()) : e.children;
      },
    });
  },
  GT = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 7.5C9.33579 7.5 9 7.16421 9 6.75C9 6.33579 9.33579 6 9.75 6H21.25C21.6642 6 22 6.33579 22 6.75V18.25C22 18.6642 21.6642 19 21.25 19C20.8358 19 20.5 18.6642 20.5 18.25V8.56066L6.28033 22.7803C5.98744 23.0732 5.51256 23.0732 5.21967 22.7803C4.92678 22.4874 4.92678 22.0126 5.21967 21.7197L19.4393 7.5H9.75Z"></path></svg>'
  ),
  qT = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = GT.cloneNode(!0),
        i = r.firstChild;
      return (
        He(
          (o) => {
            const s = n(),
              a = n();
            return s !== o._v$ && Se(r, "fill", (o._v$ = s)), a !== o._v$2 && Se(i, "fill", (o._v$2 = a)), o;
          },
          { _v$: void 0, _v$2: void 0 }
        ),
        r
      );
    })();
  },
  YT = qe(
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1839 17.7069C13.6405 18.6507 13.3688 19.1226 13.0591 19.348C12.4278 19.8074 11.5723 19.8074 10.941 19.348C10.6312 19.1226 10.3595 18.6507 9.81613 17.7069L5.52066 10.2464C4.76864 8.94024 4.39263 8.28717 4.33762 7.75894C4.2255 6.68236 4.81894 5.65591 5.80788 5.21589C6.29309 5 7.04667 5 8.55383 5H15.4462C16.9534 5 17.7069 5 18.1922 5.21589C19.1811 5.65591 19.7745 6.68236 19.6624 7.75894C19.6074 8.28717 19.2314 8.94024 18.4794 10.2464L14.1839 17.7069ZM11.1 16.3412L6.56139 8.48002C6.31995 8.06185 6.19924 7.85276 6.18146 7.68365C6.14523 7.33896 6.33507 7.01015 6.65169 6.86919C6.80703 6.80002 7.04847 6.80002 7.53133 6.80002H7.53134L11.1 6.80002V16.3412ZM12.9 16.3412L17.4387 8.48002C17.6801 8.06185 17.8008 7.85276 17.8186 7.68365C17.8548 7.33896 17.665 7.01015 17.3484 6.86919C17.193 6.80002 16.9516 6.80002 16.4687 6.80002L12.9 6.80002V16.3412Z"></path></svg>'
  ),
  ZT = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = YT.cloneNode(!0),
        i = r.firstChild;
      return He(() => Se(i, "fill", n())), r;
    })();
  },
  QT = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_3783_2045)"><circle cx="8" cy="8.00098" r="8"></circle><path d="M4.75 8.50098L7 10.751L11.75 6.00098" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3783_2045"><rect width="16" height="16" fill="white" transform="translate(0 0.000976562)"></rect></clipPath></defs></svg>'
  ),
  XT = qe(
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M17.1364 9.6364C17.4879 9.28493 17.4879 8.71508 17.1364 8.36361C16.7849 8.01214 16.2151 8.01214 15.8636 8.36361L10 14.2272L8.1364 12.3636C7.78493 12.0121 7.21508 12.0121 6.86361 12.3636C6.51214 12.7151 6.51214 13.2849 6.86361 13.6364L9.36361 16.1364C9.71508 16.4879 10.2849 16.4879 10.6364 16.1364L17.1364 9.6364Z"></path></svg>'
  ),
  JT = qe(
    '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M50.9142 28.4142C51.6953 27.6332 51.6953 26.3668 50.9142 25.5858C50.1332 24.8047 48.8668 24.8047 48.0858 25.5858L30 43.6716L23.9142 37.5858C23.1332 36.8047 21.8668 36.8047 21.0858 37.5858C20.3047 38.3668 20.3047 39.6332 21.0858 40.4142L28.5858 47.9142C29.3668 48.6953 30.6332 48.6953 31.4142 47.9142L50.9142 28.4142Z"></path></svg>'
  ),
  vh = (e) => {
    const t = pt(),
      n = () => e.size || "s",
      r = () => e.fill || t.colors.icon.success;
    return ge(
      (() => {
        const i = ge(() => n() === "xs");
        return () =>
          i()
            ? (() => {
                const o = QT.cloneNode(!0),
                  s = o.firstChild,
                  a = s.firstChild,
                  l = a.nextSibling;
                return (
                  He(
                    (u) => {
                      const c = e.class,
                        f = r(),
                        h = t.colors.constant.white;
                      return c !== u._v$ && Se(o, "class", (u._v$ = c)), f !== u._v$2 && Se(a, "fill", (u._v$2 = f)), h !== u._v$3 && Se(l, "stroke", (u._v$3 = h)), u;
                    },
                    { _v$: void 0, _v$2: void 0, _v$3: void 0 }
                  ),
                  o
                );
              })()
            : (() => {
                const o = ge(() => n() === "s");
                return () =>
                  o()
                    ? (() => {
                        const s = XT.cloneNode(!0),
                          a = s.firstChild,
                          l = a.nextSibling;
                        return (
                          He(
                            (u) => {
                              const c = e.class,
                                f = r(),
                                h = t.colors.constant.white;
                              return c !== u._v$4 && Se(s, "class", (u._v$4 = c)), f !== u._v$5 && Se(a, "fill", (u._v$5 = f)), h !== u._v$6 && Se(l, "fill", (u._v$6 = h)), u;
                            },
                            { _v$4: void 0, _v$5: void 0, _v$6: void 0 }
                          ),
                          s
                        );
                      })()
                    : (() => {
                        const s = JT.cloneNode(!0),
                          a = s.firstChild,
                          l = a.nextSibling;
                        return (
                          He(
                            (u) => {
                              const c = e.class,
                                f = r(),
                                h = t.colors.constant.white;
                              return c !== u._v$7 && Se(s, "class", (u._v$7 = c)), f !== u._v$8 && Se(a, "fill", (u._v$8 = f)), h !== u._v$9 && Se(l, "fill", (u._v$9 = h)), u;
                            },
                            { _v$7: void 0, _v$8: void 0, _v$9: void 0 }
                          ),
                          s
                        );
                      })();
              })();
      })()
    );
  },
  eP = qe(
    '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M24.0858 26.9142C23.3047 26.1332 23.3047 24.8668 24.0858 24.0858C24.8668 23.3047 26.1332 23.3047 26.9142 24.0858L36 33.1716L45.0858 24.0858C45.8668 23.3047 47.1332 23.3047 47.9142 24.0858C48.6953 24.8668 48.6953 26.1332 47.9142 26.9142L38.8284 36L47.9142 45.0858C48.6953 45.8668 48.6953 47.1332 47.9142 47.9142C47.1332 48.6953 45.8668 48.6953 45.0858 47.9142L36 38.8284L26.9142 47.9142C26.1332 48.6953 24.8668 48.6953 24.0858 47.9142C23.3047 47.1332 23.3047 45.8668 24.0858 45.0858L33.1716 36L24.0858 26.9142Z"></path></svg>'
  ),
  tP = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24.001" r="22"></circle><path d="M24 24.001L31.5 16.501M24 24.001L16.5 16.501M24 24.001L16.5 31.501M24 24.001L31.5 31.501" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
  ),
  nP = qe(
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M7.86361 9.1364C7.51214 8.78493 7.51214 8.21508 7.86361 7.86361C8.21508 7.51214 8.78493 7.51214 9.1364 7.86361L12 10.7272L14.8636 7.86361C15.2151 7.51214 15.7849 7.51214 16.1364 7.86361C16.4879 8.21508 16.4879 8.78493 16.1364 9.1364L13.2728 12L16.1364 14.8636C16.4879 15.2151 16.4879 15.7849 16.1364 16.1364C15.7849 16.4879 15.2151 16.4879 14.8636 16.1364L12 13.2728L9.1364 16.1364C8.78493 16.4879 8.21508 16.4879 7.86361 16.1364C7.51214 15.7849 7.51214 15.2151 7.86361 14.8636L10.7272 12L7.86361 9.1364Z"></path></svg>'
  ),
  Nc = (e) => {
    const t = pt(),
      n = () => e.size || "m",
      r = () => e.fill || t.colors.icon.error;
    return ge(
      (() => {
        const i = ge(() => n() === "m");
        return () =>
          i()
            ? (() => {
                const o = eP.cloneNode(!0),
                  s = o.firstChild,
                  a = s.nextSibling;
                return (
                  He(
                    (l) => {
                      const u = e.class,
                        c = r(),
                        f = t.colors.constant.white;
                      return u !== l._v$ && Se(o, "class", (l._v$ = u)), c !== l._v$2 && Se(s, "fill", (l._v$2 = c)), f !== l._v$3 && Se(a, "fill", (l._v$3 = f)), l;
                    },
                    { _v$: void 0, _v$2: void 0, _v$3: void 0 }
                  ),
                  o
                );
              })()
            : (() => {
                const o = ge(() => n() === "s");
                return () =>
                  o()
                    ? (() => {
                        const s = tP.cloneNode(!0),
                          a = s.firstChild,
                          l = a.nextSibling;
                        return (
                          He(
                            (u) => {
                              const c = e.class,
                                f = r(),
                                h = t.colors.constant.white;
                              return c !== u._v$4 && Se(s, "class", (u._v$4 = c)), f !== u._v$5 && Se(a, "fill", (u._v$5 = f)), h !== u._v$6 && Se(l, "stroke", (u._v$6 = h)), u;
                            },
                            { _v$4: void 0, _v$5: void 0, _v$6: void 0 }
                          ),
                          s
                        );
                      })()
                    : (() => {
                        const s = nP.cloneNode(!0),
                          a = s.firstChild,
                          l = a.nextSibling;
                        return (
                          He(
                            (u) => {
                              const c = e.class,
                                f = r(),
                                h = t.colors.constant.white;
                              return c !== u._v$7 && Se(s, "class", (u._v$7 = c)), f !== u._v$8 && Se(a, "fill", (u._v$8 = f)), h !== u._v$9 && Se(l, "fill", (u._v$9 = h)), u;
                            },
                            { _v$7: void 0, _v$8: void 0, _v$9: void 0 }
                          ),
                          s
                        );
                      })();
              })();
      })()
    );
  },
  rP = qe(
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.55 5.85123C18.9459 7.81184 20.1094 12.1541 18.1488 15.55C16.1882 18.9459 11.8459 20.1094 8.44998 18.1488C8.01952 17.9003 7.46909 18.0478 7.22056 18.4782C6.97203 18.9087 7.11952 19.4591 7.54998 19.7076C11.8068 22.1653 17.2499 20.7068 19.7076 16.45C22.1653 12.1932 20.7068 6.75005 16.45 4.29239C12.1932 1.83472 6.75003 3.29321 4.29236 7.55001C4.04383 7.98047 4.19132 8.53091 4.62178 8.77943C5.05224 9.02796 5.60268 8.88048 5.8512 8.45001C7.81181 5.05413 12.1541 3.89062 15.55 5.85123Z"></path></svg>'
  ),
  iP = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.99951C11.5066 2.99951 3 11.5061 3 21.9995C3 32.4929 11.5066 40.9995 22 40.9995C22.8284 40.9995 23.5 41.6711 23.5 42.4995C23.5 43.3279 22.8284 43.9995 22 43.9995C9.84974 43.9995 0 34.1498 0 21.9995C0 9.84925 9.84974 -0.000488281 22 -0.000488281C34.1503 -0.000488281 44 9.84925 44 21.9995C44 22.8279 43.3284 23.4995 42.5 23.4995C41.6716 23.4995 41 22.8279 41 21.9995C41 11.5061 32.4934 2.99951 22 2.99951Z"></path></svg>'
  ),
  oP = qe(
    '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 56.7846C35.479 63.412 50.1572 59.479 56.7846 47.9999C63.412 36.5209 59.479 21.8427 48 15.2153C36.521 8.58791 21.8428 12.5209 15.2154 23.9999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
  ),
  Co = (e) => {
    const t = pt(),
      n = () => e.size || "xs",
      r = () => e.fill || t.colors.icon.tertiary,
      i = oE`
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    `,
      o = Zr`
        animation: ${i} 1s linear infinite;
    `;
    return ge(
      (() => {
        const s = ge(() => n() === "xs");
        return () =>
          s()
            ? (() => {
                const a = rP.cloneNode(!0),
                  l = a.firstChild;
                return (
                  He(
                    (u) => {
                      const c = Gl(o, e.class),
                        f = r();
                      return c !== u._v$ && Se(a, "class", (u._v$ = c)), f !== u._v$2 && Se(l, "fill", (u._v$2 = f)), u;
                    },
                    { _v$: void 0, _v$2: void 0 }
                  ),
                  a
                );
              })()
            : (() => {
                const a = ge(() => n() === "s");
                return () =>
                  a()
                    ? (() => {
                        const l = iP.cloneNode(!0),
                          u = l.firstChild;
                        return (
                          He(
                            (c) => {
                              const f = Gl(o, e.class),
                                h = r();
                              return f !== c._v$3 && Se(l, "class", (c._v$3 = f)), h !== c._v$4 && Se(u, "fill", (c._v$4 = h)), c;
                            },
                            { _v$3: void 0, _v$4: void 0 }
                          ),
                          l
                        );
                      })()
                    : (() => {
                        const l = oP.cloneNode(!0),
                          u = l.firstChild;
                        return (
                          He(
                            (c) => {
                              const f = Gl(o, e.class),
                                h = r();
                              return f !== c._v$5 && Se(l, "class", (c._v$5 = f)), h !== c._v$6 && Se(u, "stroke", (c._v$6 = h)), c;
                            },
                            { _v$5: void 0, _v$6: void 0 }
                          ),
                          l
                        );
                      })();
              })();
      })()
    );
  },
  sP = qe(
    '<svg width="158" height="28" viewBox="0 0 158 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 14.001C28 21.733 21.732 28.001 14 28.001C6.26801 28.001 0 21.733 0 14.001C0 6.26899 6.26801 0.000976562 14 0.000976562C21.732 0.000976562 28 6.26899 28 14.001ZM9.21931 8.00098H18.7801H18.7813C20.538 8.00098 21.6522 9.89966 20.7691 11.4302L14.8672 21.6576C14.4822 22.3254 13.5172 22.3254 13.1322 21.6576L7.23158 11.4302C6.34721 9.89726 7.4614 8.00098 9.21931 8.00098ZM13.1262 18.5882V9.74806H9.21811C8.78976 9.74806 8.53708 10.2029 8.74163 10.5578L11.8423 16.1035L13.1262 18.5882ZM16.1559 16.1047L19.2554 10.5566C19.4599 10.2017 19.2073 9.74685 18.7789 9.74685H14.8709V18.5906L16.1559 16.1047Z" fill="#0098EA"></path><path d="M18.7802 8.00098H9.21936C7.46145 8.00098 6.34727 9.89726 7.23164 11.4302L13.1322 21.6576C13.5173 22.3254 14.4823 22.3254 14.8673 21.6576L20.7691 11.4302C21.6523 9.89966 20.5381 8.00098 18.7814 8.00098H18.7802ZM13.1274 18.5906L11.8424 16.1035L8.74168 10.5578C8.53714 10.2029 8.78981 9.74806 9.21816 9.74806H13.1262V18.5918L13.1274 18.5906ZM19.2555 10.5566L16.156 16.1047L14.8709 18.5906V9.74685H18.779C19.2073 9.74685 19.46 10.2017 19.2555 10.5566Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51.7483 22.1967C55.7182 22.1967 58.9609 18.954 58.9609 14.9841C58.9609 11.0142 55.7182 7.77148 51.7483 7.77148C47.7588 7.77148 44.5357 11.0142 44.5357 14.9841C44.5357 18.954 47.7588 22.1967 51.7483 22.1967ZM51.7483 19.1702C49.4686 19.1702 47.6802 17.2442 47.6802 14.9841C47.6802 12.724 49.4686 10.798 51.7483 10.798C54.0084 10.798 55.7968 12.724 55.7968 14.9841C55.7968 17.2442 54.0084 19.1702 51.7483 19.1702ZM37.0698 21.9609H40.2142V10.9946H44.2843V8.00732H33V10.9946H37.0698V21.9609ZM69.9379 8.00732H73.0823V21.9609H70.3899L63.59 13.3333V21.9609H60.4652V8.00732H63.1576L69.9379 16.6153V8.00732ZM79.2259 14.9887C79.2259 10.9202 82.351 7.77539 86.4982 7.77539C89.8592 7.77539 92.5519 9.95709 93.2202 12.6891H90.7437C90.154 11.0971 88.4637 9.9964 86.4982 9.9964C83.5893 9.9964 81.5452 12.1781 81.5452 14.9887C81.5452 17.7994 83.5893 19.9811 86.4982 19.9811C88.4637 19.9811 90.154 18.8804 90.7437 17.2884H93.2202C92.5519 20.0204 89.8592 22.2021 86.4982 22.2021C82.351 22.2021 79.2259 19.0573 79.2259 14.9887ZM104.584 17.0525C104.584 19.9025 102.343 22.1628 99.4342 22.1628C96.5253 22.1628 94.2846 19.9025 94.2846 17.0525C94.2846 14.2025 96.5253 11.9422 99.4342 11.9422C102.343 11.9422 104.584 14.2025 104.584 17.0525ZM96.4663 17.0525C96.4663 18.8018 97.6849 20.158 99.4342 20.158C101.164 20.158 102.382 18.8018 102.382 17.0525C102.382 15.3032 101.164 13.947 99.4342 13.947C97.6849 13.947 96.4663 15.3032 96.4663 17.0525ZM108.626 12.1388H106.463V21.9662H108.626V17.1311C108.626 15.0281 109.726 13.9077 111.161 13.9077C112.419 13.9077 113.205 14.8512 113.205 16.4039V21.9662H115.367V16.0501C115.367 13.5539 113.893 11.9422 111.613 11.9422C110.335 11.9422 109.215 12.4926 108.626 13.4753V12.1388ZM117.839 12.1388H120.001V13.4753C120.59 12.4926 121.711 11.9422 122.988 11.9422C125.268 11.9422 126.742 13.5539 126.742 16.0501V21.9662H124.58V16.4039C124.58 14.8512 123.794 13.9077 122.536 13.9077C121.101 13.9077 120.001 15.0281 120.001 17.1311V21.9662H117.839V12.1388ZM133.558 22.1628C136.054 22.1628 137.823 20.728 138.373 18.8804H136.113C135.661 19.8238 134.717 20.2563 133.636 20.2563C131.887 20.2563 130.747 19.077 130.668 17.5832H138.491C138.688 14.2419 136.585 11.9422 133.577 11.9422C130.551 11.9422 128.526 14.1436 128.526 17.0525C128.526 20.0007 130.629 22.1628 133.558 22.1628ZM130.747 16.0501C131.042 14.5367 132.162 13.7505 133.518 13.7505C134.717 13.7505 135.838 14.4581 136.172 16.0501H130.747ZM149.851 18.3694C149.32 20.5511 147.453 22.1628 144.859 22.1628C141.871 22.1628 139.709 19.8828 139.709 17.0525C139.709 14.2222 141.871 11.9422 144.859 11.9422C147.453 11.9422 149.32 13.5539 149.851 15.7356H147.571C147.178 14.6743 146.215 13.9077 144.859 13.9077C143.109 13.9077 141.91 15.2246 141.91 17.0525C141.91 18.8804 143.109 20.1973 144.859 20.1973C146.215 20.1973 147.178 19.4307 147.571 18.3694H149.851ZM155.75 22.0645C156.418 22.0645 156.929 21.9859 157.362 21.8483V19.9221C157.047 20.0401 156.615 20.1187 156.202 20.1187C155.082 20.1187 154.551 19.6666 154.551 18.448V14.065H157.362V12.1388H154.551V9.40675H152.389V12.1388H150.345V14.065H152.389V18.8018C152.389 21.0228 153.863 22.0645 155.75 22.0645Z"></path></svg>'
  ),
  aP = () => {
    const e = pt(),
      t = () => (e.theme === Et.DARK ? e.colors.constant.white : e.colors.constant.black);
    return (() => {
      const n = sP.cloneNode(!0),
        r = n.firstChild,
        i = r.nextSibling,
        o = i.nextSibling;
      return He(() => Se(o, "fill", t())), n;
    })();
  },
  lP = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56608 4.42584C5.82527 3.32158 6.8176 2.5 8.00001 2.5C9.38072 2.5 10.5 3.61929 10.5 5C10.5 5.63026 10.3391 6.0386 10.1264 6.34455C9.90018 6.66993 9.58561 6.92478 9.18864 7.20877C9.12579 7.25372 9.05873 7.30025 8.9887 7.34883C8.27392 7.84472 7.25001 8.55507 7.25001 10V10.25C7.25001 10.6642 7.5858 11 8.00001 11C8.41422 11 8.75001 10.6642 8.75001 10.25V10C8.75001 9.36502 9.10777 9.1096 9.94554 8.51149L10.0614 8.42873C10.4769 8.13147 10.9748 7.75194 11.358 7.20076C11.7547 6.63015 12 5.91973 12 5C12 2.79086 10.2091 1 8.00001 1C6.10564 1 4.5205 2.31615 4.10577 4.08308C4.01112 4.48634 4.26129 4.88997 4.66454 4.98462C5.0678 5.07927 5.47143 4.8291 5.56608 4.42584ZM8.00001 15C8.60752 15 9.10001 14.5075 9.10001 13.9C9.10001 13.2925 8.60752 12.8 8.00001 12.8C7.39249 12.8 6.90001 13.2925 6.90001 13.9C6.90001 14.5075 7.39249 15 8.00001 15Z"></path></svg>'
  ),
  uP = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = lP.cloneNode(!0),
        i = r.firstChild;
      return He(() => Se(i, "fill", n())), r;
    })();
  },
  cP = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.98156 8.75C9.84854 11.4328 9.01206 13.5 8 13.5C6.98794 13.5 6.15146 11.4328 6.01844 8.75H9.98156ZM11.4832 8.75C11.4217 10.1155 11.1929 11.3869 10.8239 12.4017C10.7734 12.5405 10.7188 12.6789 10.6595 12.8154C12.1454 11.993 13.2103 10.5029 13.4493 8.75H11.4832ZM13.4493 7.25H11.4832C11.4217 5.88453 11.1929 4.61314 10.8239 3.5983C10.7734 3.4595 10.7188 3.32111 10.6595 3.18459C12.1454 4.00697 13.2103 5.49709 13.4493 7.25ZM9.98156 7.25H6.01844C6.15144 4.56764 6.98769 2.50062 7.99955 2.5H8C9.01206 2.5 9.84854 4.56724 9.98156 7.25ZM4.51678 7.25C4.57826 5.88453 4.80706 4.61314 5.1761 3.5983C5.22657 3.4595 5.28124 3.32111 5.3405 3.18459C3.85463 4.00697 2.78972 5.49709 2.55071 7.25H4.51678ZM2.55071 8.75C2.78972 10.5029 3.85463 11.993 5.3405 12.8154C5.28124 12.6789 5.22657 12.5405 5.1761 12.4017C4.80706 11.3869 4.57826 10.1155 4.51678 8.75H2.55071ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"></path></svg>'
  ),
  fP = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = cP.cloneNode(!0),
        i = r.firstChild;
      return He(() => Se(i, "fill", n())), r;
    })();
  },
  dP = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4.8C2.5 3.11984 2.5 2.27976 2.82698 1.63803C3.1146 1.07354 3.57354 0.614601 4.13803 0.32698C4.77976 0 5.61984 0 7.3 0H8.7C10.3802 0 11.2202 0 11.862 0.32698C12.4265 0.614601 12.8854 1.07354 13.173 1.63803C13.5 2.27976 13.5 3.11984 13.5 4.8V11.2C13.5 12.8802 13.5 13.7202 13.173 14.362C12.8854 14.9265 12.4265 15.3854 11.862 15.673C11.2202 16 10.3802 16 8.7 16H7.3C5.61984 16 4.77976 16 4.13803 15.673C3.57354 15.3854 3.1146 14.9265 2.82698 14.362C2.5 13.7202 2.5 12.8802 2.5 11.2V4.8ZM4 3.9C4 3.05992 4 2.63988 4.16349 2.31901C4.3073 2.03677 4.53677 1.8073 4.81901 1.66349C5.13988 1.5 5.55992 1.5 6.4 1.5H9.6C10.4401 1.5 10.8601 1.5 11.181 1.66349C11.4632 1.8073 11.6927 2.03677 11.8365 2.31901C12 2.63988 12 3.05992 12 3.9V12.1C12 12.9401 12 13.3601 11.8365 13.681C11.6927 13.9632 11.4632 14.1927 11.181 14.3365C10.8601 14.5 10.4401 14.5 9.6 14.5H6.4C5.55992 14.5 5.13988 14.5 4.81901 14.3365C4.53677 14.1927 4.3073 13.9632 4.16349 13.681C4 13.3601 4 12.9401 4 12.1V3.9ZM7 2.5C6.58579 2.5 6.25 2.83579 6.25 3.25C6.25 3.66421 6.58579 4 7 4H9C9.41421 4 9.75 3.66421 9.75 3.25C9.75 2.83579 9.41421 2.5 9 2.5H7Z"></path></svg>'
  ),
  hP = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = dP.cloneNode(!0),
        i = r.firstChild;
      return He(() => Se(i, "fill", n())), r;
    })();
  },
  pP = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6.8C1.5 5.11984 1.5 4.27976 1.82698 3.63803C2.1146 3.07354 2.57354 2.6146 3.13803 2.32698C3.77976 2 4.61984 2 6.3 2H9.7C11.3802 2 12.2202 2 12.862 2.32698C13.4265 2.6146 13.8854 3.07354 14.173 3.63803C14.5 4.27976 14.5 5.11984 14.5 6.8V11.5H15.25C15.6642 11.5 16 11.8358 16 12.25C16 12.6642 15.6642 13 15.25 13H0.75C0.335786 13 0 12.6642 0 12.25C0 11.8358 0.335786 11.5 0.75 11.5H1.5V6.8ZM3 11.5H13V5.9C13 5.05992 13 4.63988 12.8365 4.31901C12.6927 4.03677 12.4632 3.8073 12.181 3.66349C11.8601 3.5 11.4401 3.5 10.6 3.5H5.4C4.55992 3.5 4.13988 3.5 3.81901 3.66349C3.53677 3.8073 3.3073 4.03677 3.16349 4.31901C3 4.63988 3 5.05992 3 5.9V11.5Z"></path></svg>'
  ),
  mP = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = pP.cloneNode(!0),
        i = r.firstChild;
      return He(() => Se(i, "fill", n())), r;
    })();
  },
  gP = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1603)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 1.25049C15.5 0.836275 15.1642 0.500488 14.75 0.500488C14.3358 0.500488 14 0.836275 14 1.25049V3.67012C12.7187 2.04487 10.7318 1.00049 8.5 1.00049C4.63401 1.00049 1.5 4.1345 1.5 8.00049C1.5 11.8665 4.63401 15.0005 8.5 15.0005C11.6844 15.0005 14.3703 12.8748 15.2199 9.96661C15.3361 9.56902 15.1079 9.15254 14.7103 9.03638C14.3127 8.92023 13.8962 9.14838 13.7801 9.54597C13.1123 11.8319 11 13.5005 8.5 13.5005C5.46243 13.5005 3 11.0381 3 8.00049C3 4.96292 5.46243 2.50049 8.5 2.50049C10.321 2.50049 11.9363 3.3855 12.9377 4.75049H10.5C10.0858 4.75049 9.75 5.08627 9.75 5.50049C9.75 5.9147 10.0858 6.25049 10.5 6.25049H14.75C15.1642 6.25049 15.5 5.9147 15.5 5.50049V1.25049Z"></path></g><defs><clipPath id="clip0_3676_1603"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000488281)"></rect></clipPath></defs></svg>'
  ),
  ra = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.accent;
    return (() => {
      const r = gP.cloneNode(!0),
        i = r.firstChild,
        o = i.firstChild;
      return He(() => Se(o, "fill", n())), r;
    })();
  },
  vP = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.06119V6.75053C13 7.16474 13.3358 7.50053 13.75 7.50053C14.1642 7.50053 14.5 7.16474 14.5 6.75053V2.75053L14.5 2.72807C14.5001 2.63191 14.5003 2.49627 14.4842 2.37627C14.4638 2.22503 14.4063 1.99261 14.2071 1.79342C14.0079 1.59423 13.7755 1.5367 13.6243 1.51637C13.5043 1.50023 13.3686 1.50039 13.2725 1.50051L13.25 1.50053H9.25C8.83579 1.50053 8.5 1.83631 8.5 2.25053C8.5 2.66474 8.83579 3.00053 9.25 3.00053H11.9393L7.21967 7.7202C6.92678 8.01309 6.92678 8.48796 7.21967 8.78086C7.51256 9.07375 7.98744 9.07375 8.28033 8.78086L13 4.06119ZM5.85 1.50053H5.81903H5.81899C5.21528 1.50052 4.71702 1.50051 4.31113 1.53367C3.88956 1.56812 3.50203 1.64204 3.13803 1.82751C2.57354 2.11513 2.1146 2.57407 1.82698 3.13856C1.64151 3.50256 1.56759 3.89009 1.53315 4.31166C1.49998 4.71755 1.49999 5.21581 1.5 5.81953V5.81955V5.85053V10.1505V10.1815V10.1815C1.49999 10.7852 1.49998 11.2835 1.53315 11.6894C1.56759 12.111 1.64151 12.4985 1.82698 12.8625C2.1146 13.427 2.57354 13.8859 3.13803 14.1735C3.50203 14.359 3.88956 14.4329 4.31113 14.4674C4.71702 14.5005 5.21527 14.5005 5.81897 14.5005H5.81901H5.85H10.15H10.181H10.181C10.7847 14.5005 11.283 14.5005 11.6889 14.4674C12.1104 14.4329 12.498 14.359 12.862 14.1735C13.4265 13.8859 13.8854 13.427 14.173 12.8625C14.3585 12.4985 14.4324 12.111 14.4669 11.6894C14.5 11.2835 14.5 10.7853 14.5 10.1816V10.1815V10.1505V9.75053C14.5 9.33631 14.1642 9.00053 13.75 9.00053C13.3358 9.00053 13 9.33631 13 9.75053V10.1505C13 10.793 12.9994 11.2297 12.9718 11.5672C12.945 11.8961 12.8963 12.0642 12.8365 12.1815C12.6927 12.4638 12.4632 12.6932 12.181 12.837C12.0637 12.8968 11.8955 12.9455 11.5667 12.9724C11.2292 12.9999 10.7924 13.0005 10.15 13.0005H5.85C5.20757 13.0005 4.77085 12.9999 4.43328 12.9724C4.10447 12.9455 3.93632 12.8968 3.81902 12.837C3.53677 12.6932 3.3073 12.4638 3.16349 12.1815C3.10372 12.0642 3.05503 11.8961 3.02816 11.5672C3.00058 11.2297 3 10.793 3 10.1505V5.85053C3 5.20809 3.00058 4.77137 3.02816 4.43381C3.05503 4.10499 3.10372 3.93684 3.16349 3.81954C3.3073 3.5373 3.53677 3.30783 3.81902 3.16402C3.93632 3.10425 4.10447 3.05556 4.43328 3.02869C4.77085 3.00111 5.20757 3.00053 5.85 3.00053H6.25C6.66422 3.00053 7 2.66474 7 2.25053C7 1.83631 6.66422 1.50053 6.25 1.50053H5.85Z"></path></svg>'
  ),
  S4 = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.accent;
    return (() => {
      const r = vP.cloneNode(!0),
        i = r.firstChild;
      return He(() => Se(i, "fill", n())), r;
    })();
  },
  yP = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1274)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.82698 2.63901C1.5 3.28074 1.5 4.12082 1.5 5.80098V8.80098V9.00098V10.201C1.5 11.8811 1.5 12.7212 1.82698 13.3629C2.1146 13.9274 2.57354 14.3864 3.13803 14.674C3.77976 15.001 4.61984 15.001 6.3 15.001H11.7C13.3802 15.001 14.2202 15.001 14.862 14.674C15.4265 14.3864 15.8854 13.9274 16.173 13.3629C16.5 12.7212 16.5 11.8811 16.5 10.201V8.80098C16.5 7.12082 16.5 6.28074 16.173 5.63901C15.8854 5.07452 15.4265 4.61558 14.862 4.32796C14.743 4.26733 14.6172 4.21795 14.4805 4.17772C14.4501 3.49449 14.3722 3.02994 14.173 2.63901C13.8854 2.07452 13.4265 1.61558 12.862 1.32796C12.2202 1.00098 11.3802 1.00098 9.7 1.00098H6.3C4.61984 1.00098 3.77976 1.00098 3.13803 1.32796C2.57354 1.61558 2.1146 2.07452 1.82698 2.63901ZM12.9861 4.00942C12.9684 3.7108 12.9281 3.49982 12.8365 3.31999C12.6927 3.03775 12.4632 2.80828 12.181 2.66447C11.8601 2.50098 11.4401 2.50098 10.6 2.50098H5.4C4.55992 2.50098 4.13988 2.50098 3.81901 2.66447C3.53677 2.80828 3.3073 3.03775 3.16349 3.31999C3.03615 3.56991 3.00799 3.88 3.00177 4.40188C3.04646 4.37612 3.09189 4.35146 3.13803 4.32796C3.77976 4.00098 4.61984 4.00098 6.3 4.00098H11.7C12.1966 4.00098 12.6197 4.00098 12.9861 4.00942ZM3 7.90098V8.10098C3 8.47468 3 8.76527 3.01439 9.00098H3V11.101C3 11.9411 3 12.3611 3.16349 12.682C3.3073 12.9642 3.53677 13.1937 3.81901 13.3375C4.13988 13.501 4.55992 13.501 5.4 13.501H12.6C13.4401 13.501 13.8601 13.501 14.181 13.3375C14.4632 13.1937 14.6927 12.9642 14.8365 12.682C15 12.3611 15 11.9411 15 11.101V7.90098C15 7.0609 15 6.64086 14.8365 6.31999C14.6927 6.03775 14.4632 5.80828 14.181 5.66447C13.8601 5.50098 13.4401 5.50098 12.6 5.50098H5.4C4.55992 5.50098 4.13988 5.50098 3.81901 5.66447C3.53677 5.80828 3.3073 6.03775 3.16349 6.31999C3 6.64086 3 7.0609 3 7.90098ZM10.5 9.75098C10.5 9.33676 10.8358 9.00098 11.25 9.00098H12.75C13.1642 9.00098 13.5 9.33676 13.5 9.75098C13.5 10.1652 13.1642 10.501 12.75 10.501H11.25C10.8358 10.501 10.5 10.1652 10.5 9.75098Z"></path></g><defs><clipPath id="clip0_3676_1274"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000976562)"></rect></clipPath></defs></svg>'
  ),
  wP = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.accent;
    return (() => {
      const r = yP.cloneNode(!0),
        i = r.firstChild,
        o = i.firstChild;
      return He(() => Se(o, "fill", n())), r;
    })();
  },
  xP = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.6319 16.8719C38.3212 16.2041 36.7002 16.0478 34 16.0112V11C34 5.47715 29.5228 1 24 1C18.4772 1 14 5.47715 14 11V16.0112C11.2998 16.0478 9.6788 16.2041 8.36808 16.8719C6.86278 17.6389 5.63893 18.8628 4.87195 20.3681C4 22.0794 4 24.3196 4 28.8V32.2C4 36.6804 4 38.9206 4.87195 40.6319C5.63893 42.1372 6.86278 43.3611 8.36808 44.1281C10.0794 45 12.3196 45 16.8 45H31.2C35.6804 45 37.9206 45 39.6319 44.1281C41.1372 43.3611 42.3611 42.1372 43.1281 40.6319C44 38.9206 44 36.6804 44 32.2V28.8C44 24.3196 44 22.0794 43.1281 20.3681C42.3611 18.8628 41.1372 17.6389 39.6319 16.8719ZM31 11V16H17V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11ZM7.54497 21.73C7 22.7996 7 24.1997 7 27V34C7 36.8003 7 38.2004 7.54497 39.27C8.02433 40.2108 8.78924 40.9757 9.73005 41.455C10.7996 42 12.1997 42 15 42H33C35.8003 42 37.2004 42 38.27 41.455C39.2108 40.9757 39.9757 40.2108 40.455 39.27C41 38.2004 41 36.8003 41 34V27C41 24.1997 41 22.7996 40.455 21.73C39.9757 20.7892 39.2108 20.0243 38.27 19.545C37.2004 19 35.8003 19 33 19H15C12.1997 19 10.7996 19 9.73005 19.545C8.78924 20.0243 8.02433 20.7892 7.54497 21.73ZM24 24C23.1716 24 22.5 24.6716 22.5 25.5V29.5C22.5 30.3284 23.1716 31 24 31C24.8284 31 25.5 30.3284 25.5 29.5V25.5C25.5 24.6716 24.8284 24 24 24Z"></path></svg>'
  ),
  CP = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = xP.cloneNode(!0),
        i = r.firstChild;
      return (
        He(
          (o) => {
            const s = e.class,
              a = n();
            return s !== o._v$ && Se(r, "class", (o._v$ = s)), a !== o._v$2 && Se(i, "fill", (o._v$2 = a)), o;
          },
          { _v$: void 0, _v$2: void 0 }
        ),
        r
      );
    })();
  },
  SP = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.485 37.3849C40.894 33.9506 43 29.2212 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 29.2213 7.1061 33.9507 10.5151 37.385C13.3583 32.9438 18.3354 30 24.0001 30C29.6647 30 34.6418 32.9437 37.485 37.3849ZM35.1809 39.3635C32.9143 35.5532 28.7554 33 24.0001 33C19.2448 33 15.0858 35.5533 12.8193 39.3636C15.9564 41.6506 19.8206 43 24 43C28.1795 43 32.0437 41.6505 35.1809 39.3635ZM24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM24 24C26.7614 24 29 21.7614 29 19C29 16.2386 26.7614 14 24 14C21.2386 14 19 16.2386 19 19C19 21.7614 21.2386 24 24 24ZM24 27C28.4183 27 32 23.4183 32 19C32 14.5817 28.4183 11 24 11C19.5817 11 16 14.5817 16 19C16 23.4183 19.5817 27 24 27Z"></path></svg>'
  ),
  bP = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = SP.cloneNode(!0),
        i = r.firstChild;
      return (
        He(
          (o) => {
            const s = e.class,
              a = n();
            return s !== o._v$ && Se(r, "class", (o._v$ = s)), a !== o._v$2 && Se(i, "fill", (o._v$2 = a)), o;
          },
          { _v$: void 0, _v$2: void 0 }
        ),
        r
      );
    })();
  },
  EP = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5607 4.43934C33.9749 3.85355 33.0251 3.85355 32.4393 4.43934C31.8536 5.02513 31.8536 5.97487 32.4393 6.56066L37.8787 12H10.5C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15H37.8787L32.4393 20.4393C31.8536 21.0251 31.8536 21.9749 32.4393 22.5607C33.0251 23.1464 33.9749 23.1464 34.5607 22.5607L42.5607 14.5607C43.1464 13.9749 43.1464 13.0251 42.5607 12.4393L34.5607 4.43934ZM13.4393 25.4393C14.0251 24.8536 14.9749 24.8536 15.5607 25.4393C16.1464 26.0251 16.1464 26.9749 15.5607 27.5607L10.1213 33H37.5C38.3284 33 39 33.6716 39 34.5C39 35.3284 38.3284 36 37.5 36H10.1213L15.5607 41.4393C16.1464 42.0251 16.1464 42.9749 15.5607 43.5607C14.9749 44.1464 14.0251 44.1464 13.4393 43.5607L5.43934 35.5607C4.85355 34.9749 4.85355 34.0251 5.43934 33.4393L13.4393 25.4393Z"></path></svg>'
  ),
  TP = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = EP.cloneNode(!0),
        i = r.firstChild;
      return (
        He(
          (o) => {
            const s = e.class,
              a = n();
            return s !== o._v$ && Se(r, "class", (o._v$ = s)), a !== o._v$2 && Se(i, "fill", (o._v$2 = a)), o;
          },
          { _v$: void 0, _v$2: void 0 }
        ),
        r
      );
    })();
  },
  PP = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z"></path></svg>'
  ),
  _P = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.constant.white;
    return (() => {
      const r = PP.cloneNode(!0),
        i = r.firstChild;
      return (
        He(
          (o) => {
            const s = e.class,
              a = n();
            return s !== o._v$ && Se(r, "class", (o._v$ = s)), a !== o._v$2 && Se(i, "fill", (o._v$2 = a)), o;
          },
          { _v$: void 0, _v$2: void 0 }
        ),
        r
      );
    })();
  },
  AP = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7803 7.21967C25.0732 7.51256 25.0732 7.98744 24.7803 8.28033L11.5303 21.5303C11.2374 21.8232 10.7626 21.8232 10.4697 21.5303L4.21967 15.2803C3.92678 14.9874 3.92678 14.5126 4.21967 14.2197C4.51256 13.9268 4.98744 13.9268 5.28033 14.2197L11 19.9393L23.7197 7.21967C24.0126 6.92678 24.4874 6.92678 24.7803 7.21967Z"></path></svg>'
  ),
  kP = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = AP.cloneNode(!0),
        i = r.firstChild;
      return (
        He(
          (o) => {
            const s = e.class,
              a = n();
            return s !== o._v$ && Se(r, "class", (o._v$ = s)), a !== o._v$2 && Se(i, "fill", (o._v$2 = a)), o;
          },
          { _v$: void 0, _v$2: void 0 }
        ),
        r
      );
    })();
  },
  LP = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 10.0001C10.0016 8.02333 10.0267 6.98719 10.436 6.18404C10.8195 5.43139 11.4314 4.81947 12.184 4.43597C13.0397 4 14.1598 4 16.4 4H17.6C19.8402 4 20.9603 4 21.816 4.43597C22.5686 4.81947 23.1805 5.43139 23.564 6.18404C24 7.03969 24 8.15979 24 10.4V11.6C24 13.8402 24 14.9603 23.564 15.816C23.1805 16.5686 22.5686 17.1805 21.816 17.564C21.0128 17.9733 19.9767 17.9984 17.9999 17.9999C17.9984 19.9767 17.9733 21.0128 17.564 21.816C17.1805 22.5686 16.5686 23.1805 15.816 23.564C14.9603 24 13.8402 24 11.6 24H10.4C8.15979 24 7.03969 24 6.18404 23.564C5.43139 23.1805 4.81947 22.5686 4.43597 21.816C4 20.9603 4 19.8402 4 17.6V16.4C4 14.1598 4 13.0397 4.43597 12.184C4.81947 11.4314 5.43139 10.8195 6.18404 10.436C6.98719 10.0267 8.02333 10.0016 10.0001 10.0001ZM10 11.5H9.5C8.09987 11.5 7.3998 11.5 6.86502 11.7725C6.39462 12.0122 6.01217 12.3946 5.77248 12.865C5.5 13.3998 5.5 14.0999 5.5 15.5V18.5C5.5 19.9001 5.5 20.6002 5.77248 21.135C6.01217 21.6054 6.39462 21.9878 6.86502 22.2275C7.3998 22.5 8.09987 22.5 9.5 22.5H12.5C13.9001 22.5 14.6002 22.5 15.135 22.2275C15.6054 21.9878 15.9878 21.6054 16.2275 21.135C16.5 20.6002 16.5 19.9001 16.5 18.5V18H16.4C14.1598 18 13.0397 18 12.184 17.564C11.4314 17.1805 10.8195 16.5686 10.436 15.816C10 14.9603 10 13.8402 10 11.6V11.5ZM11.5 9.5C11.5 8.09987 11.5 7.3998 11.7725 6.86502C12.0122 6.39462 12.3946 6.01217 12.865 5.77248C13.3998 5.5 14.0999 5.5 15.5 5.5H18.5C19.9001 5.5 20.6002 5.5 21.135 5.77248C21.6054 6.01217 21.9878 6.39462 22.2275 6.86502C22.5 7.3998 22.5 8.09987 22.5 9.5V12.5C22.5 13.9001 22.5 14.6002 22.2275 15.135C21.9878 15.6054 21.6054 15.9878 21.135 16.2275C20.6002 16.5 19.9001 16.5 18.5 16.5H15.5C14.0999 16.5 13.3998 16.5 12.865 16.2275C12.3946 15.9878 12.0122 15.6054 11.7725 15.135C11.5 14.6002 11.5 13.9001 11.5 12.5V9.5Z"></path></svg>'
  ),
  Ny = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = LP.cloneNode(!0),
        i = r.firstChild;
      return (
        He(
          (o) => {
            const s = n(),
              a = n();
            return s !== o._v$ && Se(r, "fill", (o._v$ = s)), a !== o._v$2 && Se(i, "fill", (o._v$2 = a)), o;
          },
          { _v$: void 0, _v$2: void 0 }
        ),
        r
      );
    })();
  },
  MP = qe(
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.12695C1 3.07754 1 2.55284 1.19202 2.14684C1.38986 1.72856 1.7266 1.39181 2.14489 1.19397C2.55088 1.00195 3.07559 1.00195 4.125 1.00195C5.17441 1.00195 5.69912 1.00195 6.10511 1.19397C6.5234 1.39181 6.86014 1.72856 7.05798 2.14684C7.25 2.55284 7.25 3.07754 7.25 4.12695C7.25 5.17636 7.25 5.70107 7.05798 6.10706C6.86014 6.52535 6.5234 6.8621 6.10511 7.05993C5.69912 7.25195 5.17441 7.25195 4.125 7.25195C3.07559 7.25195 2.55088 7.25195 2.14489 7.05993C1.7266 6.8621 1.38986 6.52535 1.19202 6.10706C1 5.70107 1 5.17636 1 4.12695ZM2.5 3.30195C2.5 3.02193 2.5 2.88191 2.5545 2.77496C2.60243 2.68088 2.67892 2.60439 2.773 2.55645C2.87996 2.50195 3.01997 2.50195 3.3 2.50195H4.95C5.23003 2.50195 5.37004 2.50195 5.477 2.55645C5.57108 2.60439 5.64757 2.68088 5.6955 2.77496C5.75 2.88191 5.75 3.02193 5.75 3.30195V4.95195C5.75 5.23198 5.75 5.37199 5.6955 5.47895C5.64757 5.57303 5.57108 5.64952 5.477 5.69746C5.37004 5.75195 5.23003 5.75195 4.95 5.75195H3.3C3.01997 5.75195 2.87996 5.75195 2.773 5.69746C2.67892 5.64952 2.60243 5.57303 2.5545 5.47895C2.5 5.37199 2.5 5.23198 2.5 4.95195V3.30195ZM1 11.877C1 10.8275 1 10.3028 1.19202 9.89684C1.38986 9.47856 1.7266 9.14181 2.14489 8.94397C2.55088 8.75195 3.07559 8.75195 4.125 8.75195C5.17441 8.75195 5.69912 8.75195 6.10511 8.94397C6.5234 9.14181 6.86014 9.47856 7.05798 9.89684C7.25 10.3028 7.25 10.8275 7.25 11.877C7.25 12.9264 7.25 13.4511 7.05798 13.8571C6.86014 14.2753 6.5234 14.6121 6.10511 14.8099C5.69912 15.002 5.17441 15.002 4.125 15.002C3.07559 15.002 2.55088 15.002 2.14489 14.8099C1.7266 14.6121 1.38986 14.2753 1.19202 13.8571C1 13.4511 1 12.9264 1 11.877ZM2.5 11.052C2.5 10.7719 2.5 10.6319 2.5545 10.525C2.60243 10.4309 2.67892 10.3544 2.773 10.3064C2.87996 10.252 3.01997 10.252 3.3 10.252H4.95C5.23003 10.252 5.37004 10.252 5.477 10.3064C5.57108 10.3544 5.64757 10.4309 5.6955 10.525C5.75 10.6319 5.75 10.7719 5.75 11.052V12.702C5.75 12.982 5.75 13.122 5.6955 13.2289C5.64757 13.323 5.57108 13.3995 5.477 13.4475C5.37004 13.502 5.23003 13.502 4.95 13.502H3.3C3.01997 13.502 2.87996 13.502 2.773 13.4475C2.67892 13.3995 2.60243 13.323 2.5545 13.2289C2.5 13.122 2.5 12.982 2.5 12.702V11.052ZM8.94202 2.14684C8.75 2.55284 8.75 3.07754 8.75 4.12695C8.75 5.17636 8.75 5.70107 8.94202 6.10706C9.13986 6.52535 9.4766 6.8621 9.89489 7.05993C10.3009 7.25195 10.8256 7.25195 11.875 7.25195C12.9244 7.25195 13.4491 7.25195 13.8551 7.05993C14.2734 6.8621 14.6101 6.52535 14.808 6.10706C15 5.70107 15 5.17636 15 4.12695C15 3.07754 15 2.55284 14.808 2.14684C14.6101 1.72856 14.2734 1.39181 13.8551 1.19397C13.4491 1.00195 12.9244 1.00195 11.875 1.00195C10.8256 1.00195 10.3009 1.00195 9.89489 1.19397C9.4766 1.39181 9.13986 1.72856 8.94202 2.14684ZM10.3045 2.77496C10.25 2.88191 10.25 3.02193 10.25 3.30195V4.95195C10.25 5.23198 10.25 5.37199 10.3045 5.47895C10.3524 5.57303 10.4289 5.64952 10.523 5.69746C10.63 5.75195 10.77 5.75195 11.05 5.75195H12.7C12.98 5.75195 13.12 5.75195 13.227 5.69746C13.3211 5.64952 13.3976 5.57303 13.4455 5.47895C13.5 5.37199 13.5 5.23198 13.5 4.95195V3.30195C13.5 3.02193 13.5 2.88191 13.4455 2.77496C13.3976 2.68088 13.3211 2.60439 13.227 2.55645C13.12 2.50195 12.98 2.50195 12.7 2.50195H11.05C10.77 2.50195 10.63 2.50195 10.523 2.55645C10.4289 2.60439 10.3524 2.68088 10.3045 2.77496ZM8.80727 9.13518C8.75 9.26242 8.75 9.4256 8.75 9.75195C8.75 10.0783 8.75 10.2415 8.80727 10.3687C8.87245 10.5136 8.9884 10.6295 9.13323 10.6947C9.26047 10.752 9.42365 10.752 9.75 10.752C10.0764 10.752 10.2395 10.752 10.3668 10.6947C10.5116 10.6295 10.6276 10.5136 10.6927 10.3687C10.75 10.2415 10.75 10.0783 10.75 9.75195C10.75 9.4256 10.75 9.26242 10.6927 9.13518C10.6276 8.99035 10.5116 8.8744 10.3668 8.80922C10.2395 8.75195 10.0764 8.75195 9.75 8.75195C9.42365 8.75195 9.26047 8.75195 9.13323 8.80922C8.9884 8.8744 8.87245 8.99035 8.80727 9.13518ZM10.87 11.8771C10.87 11.546 10.87 11.3805 10.9289 11.2517C10.9938 11.1098 11.1077 10.9959 11.2497 10.931C11.3784 10.8721 11.5439 10.8721 11.875 10.8721C12.2061 10.8721 12.3716 10.8721 12.5003 10.931C12.6423 10.9959 12.7562 11.1098 12.8211 11.2517C12.88 11.3805 12.88 11.546 12.88 11.8771C12.88 12.2081 12.88 12.3737 12.8211 12.5024C12.7562 12.6444 12.6423 12.7583 12.5003 12.8232C12.3716 12.8821 12.2061 12.8821 11.875 12.8821C11.5439 12.8821 11.3784 12.8821 11.2497 12.8232C11.1077 12.7583 10.9938 12.6444 10.9289 12.5024C10.87 12.3737 10.87 12.2081 10.87 11.8771ZM8.80727 13.3852C8.75 13.5124 8.75 13.6756 8.75 14.002C8.75 14.3283 8.75 14.4915 8.80727 14.6187C8.87245 14.7636 8.9884 14.8795 9.13323 14.9447C9.26047 15.002 9.42365 15.002 9.75 15.002C10.0764 15.002 10.2395 15.002 10.3668 14.9447C10.5116 14.8795 10.6276 14.7636 10.6927 14.6187C10.75 14.4915 10.75 14.3283 10.75 14.002C10.75 13.6756 10.75 13.5124 10.6927 13.3852C10.6276 13.2404 10.5116 13.1244 10.3668 13.0592C10.2395 13.002 10.0764 13.002 9.75 13.002C9.42365 13.002 9.26047 13.002 9.13323 13.0592C8.9884 13.1244 8.87245 13.2404 8.80727 13.3852ZM13 9.75195C13 9.4256 13 9.26242 13.0573 9.13518C13.1224 8.99035 13.2384 8.8744 13.3832 8.80922C13.5105 8.75195 13.6736 8.75195 14 8.75195C14.3264 8.75195 14.4895 8.75195 14.6168 8.80922C14.7616 8.8744 14.8776 8.99035 14.9427 9.13518C15 9.26242 15 9.4256 15 9.75195C15 10.0783 15 10.2415 14.9427 10.3687C14.8776 10.5136 14.7616 10.6295 14.6168 10.6947C14.4895 10.752 14.3264 10.752 14 10.752C13.6736 10.752 13.5105 10.752 13.3832 10.6947C13.2384 10.6295 13.1224 10.5136 13.0573 10.3687C13 10.2415 13 10.0783 13 9.75195ZM13.0573 13.3852C13 13.5124 13 13.6756 13 14.002C13 14.3283 13 14.4915 13.0573 14.6187C13.1224 14.7636 13.2384 14.8795 13.3832 14.9447C13.5105 15.002 13.6736 15.002 14 15.002C14.3264 15.002 14.4895 15.002 14.6168 14.9447C14.7616 14.8795 14.8776 14.7636 14.9427 14.6187C15 14.4915 15 14.3283 15 14.002C15 13.6756 15 13.5124 14.9427 13.3852C14.8776 13.2404 14.7616 13.1244 14.6168 13.0592C14.4895 13.002 14.3264 13.002 14 13.002C13.6736 13.002 13.5105 13.002 13.3832 13.0592C13.2384 13.1244 13.1224 13.2404 13.0573 13.3852Z"></path></svg>'
  ),
  k0 = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = MP.cloneNode(!0),
        i = r.firstChild;
      return He(() => Se(i, "fill", n())), r;
    })();
  },
  RP = { m: "16px", s: "12px", none: "0" },
  IP = { m: "6px", s: "6px", none: "0" },
  OP = H.div`
    width: 60px;
    height: 60px;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: ${(e) => RP[e.theme.borderRadius]};
    background-color: ${(e) => e.theme.colors.background.tint};
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 4px;
`,
  BP = H(Dy)`
    width: 20px;
    height: 20px;
    border-radius: ${(e) => IP[e.theme.borderRadius]};
`,
  Vy = (e) =>
    b(Zu, {
      get name() {
        return e.labelLine1;
      },
      get secondLine() {
        return e.labelLine2;
      },
      get icon() {
        return b(OP, {
          get children() {
            return b(qa, {
              each: [0, 1, 2, 3],
              children: (t) =>
                b(BP, {
                  get src() {
                    return e.images[t];
                  },
                }),
            });
          },
        });
      },
      onClick: () => e.onClick(),
    }),
  Wr = "telegram-wallet",
  nl = { TON: "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/ton-icon-48.png", TG: "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/tg.png" },
  jy = (e) => {
    const [t] = Jr(),
      n = () => {
        if (e.wallet.appName !== Wr) {
          if ("isPreferred" in e.wallet && e.wallet.isPreferred) return t("walletItem.recent", {}, "Recent");
          if (io(e.wallet)) return t("walletItem.installed", {}, "Installed");
          if (e.wallet.name === "Tonkeeper") return t("walletItem.popular", {}, "Popular");
        }
      };
    return ge(
      (() => {
        const r = ge(() => e.wallet.appName === Wr);
        return () =>
          r()
            ? b(Zu, {
                get icon() {
                  return e.wallet.imageUrl;
                },
                get name() {
                  return t("walletItem.walletOn", {}, "Wallet On");
                },
                secondLine: "Telegram",
                get badgeUrl() {
                  return nl.TG;
                },
                onClick: () => e.onClick(),
              })
            : b(Zu, {
                get icon() {
                  return e.wallet.imageUrl;
                },
                get name() {
                  return e.wallet.name;
                },
                get secondLine() {
                  return n();
                },
                secondLineColorPrimary: !1,
                onClick: () => e.onClick(),
              });
      })()
    );
  },
  $P = H.div`
    width: 100%;
    overflow-y: auto;
    max-height: ${(e) => e.maxHeight};

    scrollbar-width: none;
    &&::-webkit-scrollbar {
        display: none;
    }

    &&::-webkit-scrollbar-track {
        background: transparent;
    }

    &&::-webkit-scrollbar-thumb {
        display: none;
    }
`,
  DP = H.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.08;
    background: ${(e) => (e.isShown ? e.theme.colors.icon.secondary : "transparent")};
    transition: background 0.15s ease-in-out;

    ${Un("mobile")} {
        width: 100%;
        margin: 0;
    }
`,
  [NP, VP] = ze(((l4 = Qa()) == null ? void 0 : l4.innerHeight) || 0);
Qa() && window.addEventListener("resize", () => VP(window.innerHeight));
const [$a, jP] = ze(Ko("mobile"));
Qa() && window.addEventListener("resize", () => jP(Ko("mobile")));
const Fy = (e) => {
    const [t, n] = ze(!1),
      r = (s) => {
        n(s.target.scrollTop > 0);
      },
      i = () => ($a() ? 150 : 200),
      o = () => (e.maxHeight !== void 0 ? `${e.maxHeight}px` : `${NP() - i()}px`);
    return [
      b(DP, {
        get isShown() {
          return t();
        },
      }),
      b($P, {
        get maxHeight() {
          return o();
        },
        onScroll: r,
        get class() {
          return e.class;
        },
        get children() {
          return e.children;
        },
      }),
    ];
  },
  FP = H.a`
    display: block;
    text-decoration: unset;
`,
  Qu = (e) =>
    b(
      FP,
      br(
        {
          get href() {
            return e.href;
          },
          get target() {
            return e.blank ? "_blank" : "_self";
          },
          get class() {
            return e.class;
          },
        },
        () => (e.blank ? { rel: "noreferrer noopener" } : {}),
        {
          get children() {
            return e.children;
          },
        }
      )
    ),
  So = Ic(),
  UP = qe(
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.76228 2.09998H10.2378C11.0458 2.09997 11.7067 2.09996 12.2438 2.14384C12.7997 2.18926 13.3017 2.28614 13.7706 2.52505C14.5045 2.89896 15.1011 3.49558 15.475 4.22941C15.7139 4.6983 15.8108 5.20038 15.8562 5.75629C15.9001 6.29337 15.9001 6.95422 15.9001 7.76227V8.1H16.2377C17.0457 8.09999 17.7066 8.09998 18.2437 8.14386C18.7996 8.18928 19.3017 8.28616 19.7705 8.52507C20.5044 8.89898 21.101 9.4956 21.4749 10.2294C21.7138 10.6983 21.8107 11.2004 21.8561 11.7563C21.9 12.2934 21.9 12.9542 21.9 13.7623V16.2377C21.9 17.0458 21.9 17.7066 21.8561 18.2437C21.8107 18.7996 21.7138 19.3017 21.4749 19.7706C21.101 20.5044 20.5044 21.101 19.7705 21.4749C19.3017 21.7138 18.7996 21.8107 18.2437 21.8561C17.7066 21.9 17.0458 21.9 16.2378 21.9H13.7623C12.9543 21.9 12.2934 21.9 11.7563 21.8561C11.2004 21.8107 10.6983 21.7138 10.2294 21.4749C9.49561 21.101 8.89898 20.5044 8.52508 19.7706C8.28616 19.3017 8.18928 18.7996 8.14386 18.2437C8.09998 17.7066 8.09999 17.0458 8.1 16.2377V15.9H7.76227C6.95426 15.9 6.29335 15.9 5.75629 15.8561C5.20038 15.8107 4.6983 15.7138 4.22941 15.4749C3.49558 15.101 2.89896 14.5044 2.52505 13.7705C2.28614 13.3017 2.18926 12.7996 2.14384 12.2437C2.09996 11.7066 2.09997 11.0458 2.09998 10.2377V7.76228C2.09997 6.95424 2.09996 6.29336 2.14384 5.75629C2.18926 5.20038 2.28614 4.6983 2.52505 4.22941C2.89896 3.49558 3.49558 2.89896 4.22941 2.52505C4.6983 2.28614 5.20038 2.18926 5.75629 2.14384C6.29336 2.09996 6.95425 2.09997 7.76228 2.09998ZM8.1 14.1V13.7623C8.09999 12.9542 8.09998 12.2934 8.14386 11.7563C8.18928 11.2004 8.28616 10.6983 8.52508 10.2294C8.89898 9.4956 9.49561 8.89898 10.2294 8.52507C10.6983 8.28616 11.2004 8.18928 11.7563 8.14386C12.2934 8.09998 12.9542 8.09999 13.7623 8.1H14.1001V7.79998C14.1001 6.94505 14.0994 6.35798 14.0622 5.90287C14.0259 5.45827 13.9593 5.21944 13.8712 5.0466C13.6699 4.65146 13.3486 4.3302 12.9535 4.12886C12.7806 4.04079 12.5418 3.97419 12.0972 3.93786C11.6421 3.90068 11.055 3.89998 10.2001 3.89998H7.79998C6.94505 3.89998 6.35798 3.90068 5.90287 3.93786C5.45827 3.97419 5.21944 4.04079 5.0466 4.12886C4.65146 4.3302 4.3302 4.65146 4.12886 5.0466C4.04079 5.21944 3.97419 5.45827 3.93786 5.90287C3.90068 6.35798 3.89998 6.94505 3.89998 7.79998V10.2C3.89998 11.0549 3.90068 11.642 3.93786 12.0971C3.97419 12.5417 4.04079 12.7805 4.12886 12.9534C4.3302 13.3485 4.65146 13.6698 5.0466 13.8711C5.21944 13.9592 5.45827 14.0258 5.90287 14.0621C6.35798 14.0993 6.94505 14.1 7.79998 14.1H8.1ZM11.0466 10.1289C11.2195 10.0408 11.4583 9.97421 11.9029 9.93788C12.358 9.9007 12.9451 9.9 13.8 9.9H16.2C17.0549 9.9 17.642 9.9007 18.0971 9.93788C18.5417 9.97421 18.7805 10.0408 18.9534 10.1289C19.3485 10.3302 19.6698 10.6515 19.8711 11.0466C19.9592 11.2195 20.0258 11.4583 20.0621 11.9029C20.0993 12.358 20.1 12.9451 20.1 13.8V16.2C20.1 17.0549 20.0993 17.642 20.0621 18.0971C20.0258 18.5417 19.9592 18.7805 19.8711 18.9534C19.6698 19.3485 19.3485 19.6698 18.9534 19.8711C18.7805 19.9592 18.5417 20.0258 18.0971 20.0621C17.642 20.0993 17.0549 20.1 16.2 20.1H13.8C12.9451 20.1 12.358 20.0993 11.9029 20.0621C11.4583 20.0258 11.2195 19.9592 11.0466 19.8711C10.6515 19.6698 10.3302 19.3485 10.1289 18.9534C10.0408 18.7805 9.97421 18.5417 9.93788 18.0971C9.9007 17.642 9.9 17.0549 9.9 16.2V13.8C9.9 12.9451 9.9007 12.358 9.93788 11.9029C9.97421 11.4583 10.0408 11.2195 10.1289 11.0466C10.3302 10.6515 10.6515 10.3302 11.0466 10.1289Z"></path></svg>'
  ),
  zP = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = UP.cloneNode(!0),
        i = r.firstChild;
      return (
        He(
          (o) => {
            const s = e.class,
              a = n();
            return s !== o._v$ && Se(r, "class", (o._v$ = s)), a !== o._v$2 && Se(i, "fill", (o._v$2 = a)), o;
          },
          { _v$: void 0, _v$2: void 0 }
        ),
        r
      );
    })();
  },
  WP = qe(
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7624 3.10001C7.95435 3.1 7.29349 3.09999 6.75642 3.14387C6.2005 3.18929 5.69842 3.28617 5.22954 3.52508C4.4957 3.89899 3.89908 4.49561 3.52517 5.22944C3.28626 5.69833 3.18938 6.20041 3.14396 6.75632C3.10008 7.2934 3.10009 7.95424 3.1001 8.76229V15.2377C3.10009 16.0458 3.10008 16.7066 3.14396 17.2437C3.18938 17.7996 3.28626 18.3017 3.52517 18.7706C3.89908 19.5044 4.4957 20.101 5.22954 20.4749C5.69842 20.7138 6.2005 20.8107 6.75642 20.8561C7.29349 20.9 7.95434 20.9 8.76239 20.9H12.0001C12.4972 20.9 12.9001 20.4971 12.9001 20C12.9001 19.503 12.4972 19.1 12.0001 19.1H8.8001C7.94517 19.1 7.3581 19.0993 6.90299 19.0621C6.45839 19.0258 6.21956 18.9592 6.04672 18.8711C5.65158 18.6698 5.33032 18.3485 5.12898 17.9534C5.04092 17.7805 4.97431 17.5417 4.93798 17.0971C4.9008 16.642 4.9001 16.0549 4.9001 15.2V8.80001C4.9001 7.94508 4.9008 7.35801 4.93798 6.9029C4.97431 6.4583 5.04092 6.21947 5.12898 6.04663C5.33032 5.65149 5.65158 5.33023 6.04672 5.12889C6.21956 5.04082 6.45839 4.97422 6.90299 4.93789C7.3581 4.90071 7.94517 4.90001 8.8001 4.90001H12.0001C12.4972 4.90001 12.9001 4.49706 12.9001 4.00001C12.9001 3.50295 12.4972 3.10001 12.0001 3.10001H8.7624Z"></path><path d="M17.6364 7.3636C17.2849 7.01212 16.7151 7.01212 16.3636 7.3636C16.0121 7.71507 16.0121 8.28492 16.3636 8.63639L18.8272 11.1H9.00001C8.50295 11.1 8.10001 11.5029 8.10001 12C8.10001 12.497 8.50295 12.9 9.00001 12.9H18.8272L16.3636 15.3636C16.0121 15.7151 16.0121 16.2849 16.3636 16.6364C16.7151 16.9879 17.2849 16.9879 17.6364 16.6364L21.6364 12.6364C21.9879 12.2849 21.9879 11.7151 21.6364 11.3636L17.6364 7.3636Z"></path></svg>'
  ),
  HP = (e) => {
    const t = pt(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = WP.cloneNode(!0),
        i = r.firstChild,
        o = i.nextSibling;
      return (
        He(
          (s) => {
            const a = n(),
              l = n();
            return a !== s._v$ && Se(i, "fill", (s._v$ = a)), l !== s._v$2 && Se(o, "fill", (s._v$2 = l)), s;
          },
          { _v$: void 0, _v$2: void 0 }
        ),
        r
      );
    })();
  },
  KP = { m: "8px", s: "4px", none: "0" },
  GP = { m: "16px", s: "8px", none: "0" },
  qP = H.div`
    width: 256px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${(e) => GP[e.theme.borderRadius]};

    background-color: ${(e) => e.theme.colors.background.primary}
           
    color: ${(e) => e.theme.colors.text.primary}
`,
  YP = H.ul`
    background-color: ${(e) => e.theme.colors.background.primary};
    padding: 8px;
`,
  b4 = H.button`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding-left: 8px;
    width: 100%;

    background-color: ${(e) => e.theme.colors.background.primary};
    border: none;
    border-radius: ${(e) => KP[e.theme.borderRadius]};
    cursor: pointer;

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${(e) => e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,
  E4 = qe("<li></li>"),
  Ff = (e) =>
    b(Vn, {
      get translationKey() {
        return e.translationKey;
      },
      fontSize: "15px",
      fontWeight: "590",
      get children() {
        return e.children;
      },
    }),
  ZP = (e) => {
    const t = Nn(So),
      [n, r] = ze(!1),
      i = () =>
        Ln(void 0, null, function* () {
          const s = sy(t.account.address, t.account.chain === $u.TESTNET);
          yield mh(s), r(!0), setTimeout(() => r(!1), 1e3);
        }),
      o = () => {
        t.disconnect(), e.onClose();
      };
    return b(qP, {
      ref(s) {
        const a = e.ref;
        typeof a == "function" ? a(s) : (e.ref = s);
      },
      get class() {
        return e.class;
      },
      "data-tc-dropdown": "true",
      get children() {
        return b(YP, {
          get children() {
            return [
              (() => {
                const s = E4.cloneNode(!0);
                return (
                  cn(
                    s,
                    b(b4, {
                      onClick: () => i(),
                      get children() {
                        return [
                          b(zP, {}),
                          b(Ge, {
                            get when() {
                              return !n();
                            },
                            get children() {
                              return b(Ff, { translationKey: "button.dropdown.copy", children: "Copy address" });
                            },
                          }),
                          b(Ge, {
                            get when() {
                              return n();
                            },
                            get children() {
                              return b(Ff, { translationKey: "button.dropdown.copied", children: "Address copied!" });
                            },
                          }),
                        ];
                      },
                    })
                  ),
                  s
                );
              })(),
              (() => {
                const s = E4.cloneNode(!0);
                return (
                  cn(
                    s,
                    b(b4, {
                      onClick: () => o(),
                      get children() {
                        return [b(HP, {}), b(Ff, { translationKey: "button.dropdown.disconnect", children: "Disconnect" })];
                      },
                    })
                  ),
                  s
                );
              })(),
            ];
          },
        });
      },
    });
  },
  QP = { m: "16px", s: "8px", none: "0" },
  XP = H.div`
    width: 256px;
    padding: 12px 16px;
    display: flex;
    gap: 9px;

    background-color: ${(e) => e.theme.colors.background.primary};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${(e) => QP[e.theme.borderRadius]};
`,
  JP = H.div`
    width: 192px;

    > h3 {
        font-size: 15px;
    }
`,
  e_ = H(Vn)`
    margin-top: 4px;
    color: ${(e) => e.theme.colors.text.secondary};
`,
  yh = (e) => {
    const t = tl(e);
    return b(
      XP,
      br(
        {
          get class() {
            return e.class;
          },
          "data-tc-notification": "true",
        },
        t,
        {
          get children() {
            return [
              b(JP, {
                get children() {
                  return [
                    b(gh, {
                      get translationKey() {
                        return e.header.translationKey;
                      },
                      get translationValues() {
                        return e.header.translationValues;
                      },
                      get children() {
                        return e.children;
                      },
                    }),
                    b(Ge, {
                      get when() {
                        return e.text;
                      },
                      get children() {
                        return b(e_, {
                          get translationKey() {
                            return e.text.translationKey;
                          },
                          get translationValues() {
                            return e.text.translationValues;
                          },
                        });
                      },
                    }),
                  ];
                },
              }),
              ge(() => e.icon),
            ];
          },
        }
      )
    );
  },
  t_ = H(Co)`
    align-self: center;
`,
  n_ = (e) => {
    const t = Nn(So),
      [n] = Jr(),
      r = () => (t.wallet && "name" in t.wallet ? t.wallet.name : n("common.yourWallet", {}, "Your wallet"));
    return b(yh, {
      get header() {
        return { translationKey: "notifications.confirm.header", translationValues: { name: r() } };
      },
      get class() {
        return e.class;
      },
      get icon() {
        return b(t_, {});
      },
      "data-tc-notification-confirm": "true",
      children: "Confirm operation in your wallet",
    });
  },
  r_ = H(Nc)`
    margin-top: 2px;
`,
  i_ = (e) =>
    b(yh, {
      header: { translationKey: "notifications.transactionCanceled.header" },
      text: { translationKey: "notifications.transactionCanceled.text" },
      get icon() {
        return b(r_, { size: "xs" });
      },
      get class() {
        return e.class;
      },
      "data-tc-notification-tx-cancelled": "true",
      children: "Transaction cancelled",
    }),
  o_ = H(vh)`
    margin-top: 2px;
`,
  s_ = (e) =>
    b(yh, {
      header: { translationKey: "notifications.transactionSent.header" },
      text: { translationKey: "notifications.transactionSent.text" },
      get icon() {
        return b(o_, {});
      },
      get class() {
        return e.class;
      },
      "data-tc-notification-tx-sent": "true",
      children: "Transaction sent",
    }),
  Uf = Zr`
    transform: translateY(-8px);
    margin-bottom: 12px;
`,
  a_ = qe('<div data-tc-list-notifications="true"></div>'),
  l_ = (e) => {
    const t = [],
      [n, r] = ze([]);
    let i = -1;
    const o = 4500;
    return (
      hr(
        bb(qi, (s) => {
          if (s && s.showNotification) {
            i++;
            const a = i;
            r((l) => l.filter((u) => u.action !== "confirm-transaction").concat({ id: a, action: s.name })), t.push(setTimeout(() => r((l) => l.filter((u) => u.id !== a)), o));
          }
        })
      ),
      pr(() => {
        t.forEach(clearTimeout);
      }),
      (() => {
        const s = a_.cloneNode(!0);
        return (
          cn(
            s,
            b(eT, {
              onBeforeEnter: (a) => {
                a.animate(
                  [
                    { opacity: 0, transform: "translateY(0)" },
                    { opacity: 1, transform: "translateY(-8px)" },
                  ],
                  { duration: 200 }
                );
              },
              onExit: (a, l) => {
                a.animate(
                  [
                    { opacity: 1, transform: "translateY(-8px)" },
                    { opacity: 0, transform: "translateY(-30px)" },
                  ],
                  { duration: 200 }
                ).finished.then(l);
              },
              get children() {
                return b(qa, {
                  get each() {
                    return n();
                  },
                  children: (a) =>
                    b(Ya, {
                      get children() {
                        return [
                          b(Xt, {
                            get when() {
                              return a.action === "transaction-sent";
                            },
                            get children() {
                              return b(s_, { class: Uf });
                            },
                          }),
                          b(Xt, {
                            get when() {
                              return a.action === "transaction-canceled";
                            },
                            get children() {
                              return b(i_, { class: Uf });
                            },
                          }),
                          b(Xt, {
                            get when() {
                              return a.action === "confirm-transaction";
                            },
                            get children() {
                              return b(n_, { class: Uf });
                            },
                          }),
                        ];
                      },
                    }),
                });
              },
            })
          ),
          He(() => ah(s, e.class)),
          s
        );
      })()
    );
  },
  Uy = H(jt)`
    background-color: ${(e) => e.theme.colors.connectButton.background};
    color: ${(e) => e.theme.colors.connectButton.foreground};
    box-shadow: ${(e) => `0 4px 24px ${Za(e.theme.colors.constant.black, 0.16)}`};
    padding: 8px 16px 8px 12px;

    display: flex;
    align-items: center;
    gap: 4px;
    height: 40px;
`,
  u_ = H(Uy)`
    padding: 12px 16px;
    min-width: 148px;
    justify-content: center;
    background-color: ${(e) => e.theme.colors.background.primary};
`,
  c_ = H(jt)`
    min-width: 148px;
    height: 40px;

    background-color: ${(e) => e.theme.colors.background.primary};
    color: ${(e) => e.theme.colors.connectButton.foreground};
    box-shadow: ${(e) => `0 4px 24px ${Za(e.theme.colors.constant.black, 0.16)}`};

    display: flex;
    align-items: center;
    justify-content: center;
`,
  f_ = H(Co)`
    height: 18px;
    width: 18px;
`,
  d_ = H.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`,
  h_ = H(ZP)`
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 12px;
`,
  p_ = H(l_)`
    > div:first-child {
        margin-top: 20px;
    }
`;
function zy(e) {
  return e.split("-")[0];
}
function m_(e) {
  return e.split("-")[1];
}
function g_(e) {
  return ["top", "bottom"].includes(zy(e)) ? "x" : "y";
}
function v_(e) {
  return e === "y" ? "height" : "width";
}
function T4(e, t, n) {
  let { reference: r, floating: i } = e;
  const o = r.x + r.width / 2 - i.width / 2,
    s = r.y + r.height / 2 - i.height / 2,
    a = g_(t),
    l = v_(a),
    u = r[l] / 2 - i[l] / 2,
    c = zy(t),
    f = a === "x";
  let h;
  switch (c) {
    case "top":
      h = { x: o, y: r.y - i.height };
      break;
    case "bottom":
      h = { x: o, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: s };
      break;
    case "left":
      h = { x: r.x - i.width, y: s };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (m_(t)) {
    case "start":
      h[a] -= u * (n && f ? -1 : 1);
      break;
    case "end":
      h[a] += u * (n && f ? -1 : 1);
      break;
  }
  return h;
}
const y_ = (e, t, n) =>
  Ln(void 0, null, function* () {
    const { placement: r = "bottom", strategy: i = "absolute", middleware: o = [], platform: s } = n,
      a = o.filter(Boolean),
      l = yield s.isRTL == null ? void 0 : s.isRTL(t);
    if ({}.NODE_ENV !== "production") {
      if (
        (s == null &&
          console.error(
            [
              "Floating UI: `platform` property was not passed to config. If you",
              "want to use Floating UI on the web, install @floating-ui/dom",
              "instead of the /core package. Otherwise, you can create your own",
              "`platform`: https://floating-ui.com/docs/platform",
            ].join(" ")
          ),
        a.filter((v) => {
          let { name: P } = v;
          return P === "autoPlacement" || P === "flip";
        }).length > 1)
      )
        throw new Error(
          [
            "Floating UI: duplicate `flip` and/or `autoPlacement` middleware",
            "detected. This will lead to an infinite loop. Ensure only one of",
            "either has been passed to the `middleware` array.",
          ].join(" ")
        );
      (!e || !t) &&
        console.error(
          [
            "Floating UI: The reference and/or floating element was not defined",
            "when `computePosition()` was called. Ensure that both elements have",
            "been created and can be measured.",
          ].join(" ")
        );
    }
    let u = yield s.getElementRects({ reference: e, floating: t, strategy: i }),
      { x: c, y: f } = T4(u, r, l),
      h = r,
      p = {},
      g = 0;
    for (let v = 0; v < a.length; v++) {
      const { name: P, fn: y } = a[v],
        {
          x: w,
          y: x,
          data: T,
          reset: _,
        } = yield y({ x: c, y: f, initialPlacement: r, placement: h, strategy: i, middlewareData: p, rects: u, platform: s, elements: { reference: e, floating: t } });
      if (
        ((c = w ?? c),
        (f = x ?? f),
        (p = Qn(ht({}, p), { [P]: ht(ht({}, p[P]), T) })),
        {}.NODE_ENV !== "production" &&
          g > 50 &&
          console.warn(
            [
              "Floating UI: The middleware lifecycle appears to be running in an",
              "infinite loop. This is usually caused by a `reset` continually",
              "being returned without a break condition.",
            ].join(" ")
          ),
        _ && g <= 50)
      ) {
        g++,
          typeof _ == "object" &&
            (_.placement && (h = _.placement),
            _.rects && (u = _.rects === !0 ? yield s.getElementRects({ reference: e, floating: t, strategy: i }) : _.rects),
            ({ x: c, y: f } = T4(u, h, l))),
          (v = -1);
        continue;
      }
    }
    return { x: c, y: f, placement: h, strategy: i, middlewareData: p };
  });
function P4(e) {
  return Qn(ht({}, e), { top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height });
}
function ei(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Tr(e) {
  return ei(e).getComputedStyle(e);
}
function Ii(e) {
  return Hy(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Ll;
function Wy() {
  if (Ll) return Ll;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? ((Ll = e.brands.map((t) => t.brand + "/" + t.version).join(" ")), Ll) : navigator.userAgent;
}
function Pr(e) {
  return e instanceof ei(e).HTMLElement;
}
function Jn(e) {
  return e instanceof ei(e).Element;
}
function Hy(e) {
  return e instanceof ei(e).Node;
}
function _4(e) {
  if (typeof ShadowRoot > "u") return !1;
  const t = ei(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Vc(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = Tr(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function w_(e) {
  return ["table", "td", "th"].includes(Ii(e));
}
function wh(e) {
  const t = /firefox/i.test(Wy()),
    n = Tr(e),
    r = n.backdropFilter || n.WebkitBackdropFilter;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (r ? r !== "none" : !1) ||
    (t && n.willChange === "filter") ||
    (t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective"].some((i) => n.willChange.includes(i)) ||
    ["paint", "layout", "strict", "content"].some((i) => {
      const o = n.contain;
      return o != null ? o.includes(i) : !1;
    })
  );
}
function Ky() {
  return !/^((?!chrome|android).)*safari/i.test(Wy());
}
function xh(e) {
  return ["html", "body", "#document"].includes(Ii(e));
}
const A4 = Math.min,
  ia = Math.max,
  k4 = Math.round,
  L0 = { x: 1, y: 1 };
function Da(e) {
  const t = !Jn(e) && e.contextElement ? e.contextElement : Jn(e) ? e : null;
  if (!t) return L0;
  const n = t.getBoundingClientRect(),
    r = Tr(t);
  if (r.boxSizing !== "border-box")
    return Pr(t) ? { x: (t.offsetWidth > 0 && k4(n.width) / t.offsetWidth) || 1, y: (t.offsetHeight > 0 && k4(n.height) / t.offsetHeight) || 1 } : L0;
  let i = n.width / parseFloat(r.width),
    o = n.height / parseFloat(r.height);
  return (!i || !Number.isFinite(i)) && (i = 1), (!o || !Number.isFinite(o)) && (o = 1), { x: i, y: o };
}
function Oi(e, t, n, r) {
  var i, o, s, a;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect();
  let u = L0;
  t && (r ? Jn(r) && (u = Da(r)) : (u = Da(e)));
  const c = Jn(e) ? ei(e) : window,
    f = !Ky() && n,
    h = (l.left + (f && (i = (o = c.visualViewport) == null ? void 0 : o.offsetLeft) != null ? i : 0)) / u.x,
    p = (l.top + (f && (s = (a = c.visualViewport) == null ? void 0 : a.offsetTop) != null ? s : 0)) / u.y,
    g = l.width / u.x,
    v = l.height / u.y;
  return { width: g, height: v, top: p, right: h + g, bottom: p + v, left: h, x: h, y: p };
}
function ji(e) {
  return ((Hy(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function jc(e) {
  return Jn(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Gy(e) {
  return Oi(ji(e)).left + jc(e).scrollLeft;
}
function x_(e, t, n) {
  const r = Pr(t),
    i = ji(t),
    o = Oi(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (r || (!r && n !== "fixed"))
    if (((Ii(t) !== "body" || Vc(i)) && (s = jc(t)), Pr(t))) {
      const l = Oi(t, !0);
      (a.x = l.x + t.clientLeft), (a.y = l.y + t.clientTop);
    } else i && (a.x = Gy(i));
  return { x: o.left + s.scrollLeft - a.x, y: o.top + s.scrollTop - a.y, width: o.width, height: o.height };
}
function Na(e) {
  if (Ii(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (_4(e) ? e.host : null) || ji(e);
  return _4(t) ? t.host : t;
}
function L4(e) {
  return !Pr(e) || Tr(e).position === "fixed" ? null : e.offsetParent;
}
function C_(e) {
  let t = Na(e);
  for (; Pr(t) && !xh(t); ) {
    if (wh(t)) return t;
    t = Na(t);
  }
  return null;
}
function M4(e) {
  const t = ei(e);
  let n = L4(e);
  for (; n && w_(n) && Tr(n).position === "static"; ) n = L4(n);
  return n && (Ii(n) === "html" || (Ii(n) === "body" && Tr(n).position === "static" && !wh(n))) ? t : n || C_(e) || t;
}
function S_(e) {
  if (Pr(e)) return { width: e.offsetWidth, height: e.offsetHeight };
  const t = Oi(e);
  return { width: t.width, height: t.height };
}
function b_(e) {
  let { rect: t, offsetParent: n, strategy: r } = e;
  const i = Pr(n),
    o = ji(n);
  if (n === o) return t;
  let s = { scrollLeft: 0, scrollTop: 0 },
    a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || (!i && r !== "fixed")) && ((Ii(n) !== "body" || Vc(o)) && (s = jc(n)), Pr(n))) {
    const u = Oi(n);
    (a = Da(n)), (l.x = u.x + n.clientLeft), (l.y = u.y + n.clientTop);
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - s.scrollLeft * a.x + l.x, y: t.y * a.y - s.scrollTop * a.y + l.y };
}
function E_(e, t) {
  const n = ei(e),
    r = ji(e),
    i = n.visualViewport;
  let o = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (i) {
    (o = i.width), (s = i.height);
    const u = Ky();
    (u || (!u && t === "fixed")) && ((a = i.offsetLeft), (l = i.offsetTop));
  }
  return { width: o, height: s, x: a, y: l };
}
function T_(e) {
  var t;
  const n = ji(e),
    r = jc(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = ia(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
    s = ia(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let a = -r.scrollLeft + Gy(e);
  const l = -r.scrollTop;
  return Tr(i || n).direction === "rtl" && (a += ia(n.clientWidth, i ? i.clientWidth : 0) - o), { width: o, height: s, x: a, y: l };
}
function qy(e) {
  const t = Na(e);
  return xh(t) ? e.ownerDocument.body : Pr(t) && Vc(t) ? t : qy(t);
}
function oa(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = qy(e),
    i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    o = ei(r);
  return i ? t.concat(o, o.visualViewport || [], Vc(r) ? r : []) : t.concat(r, oa(r));
}
function P_(e, t) {
  const n = Oi(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    o = Pr(e) ? Da(e) : { x: 1, y: 1 },
    s = e.clientWidth * o.x,
    a = e.clientHeight * o.y,
    l = i * o.x,
    u = r * o.y;
  return { top: u, left: l, right: l + s, bottom: u + a, x: l, y: u, width: s, height: a };
}
function R4(e, t, n) {
  return t === "viewport" ? P4(E_(e, n)) : Jn(t) ? P_(t, n) : P4(T_(ji(e)));
}
function __(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = oa(e).filter((a) => Jn(a) && Ii(a) !== "body"),
    i = null;
  const o = Tr(e).position === "fixed";
  let s = o ? Na(e) : e;
  for (; Jn(s) && !xh(s); ) {
    const a = Tr(s),
      l = wh(s);
    (o ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? (r = r.filter((c) => c !== s)) : (i = a), (s = Na(s));
  }
  return t.set(e, r), r;
}
function A_(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
  const s = [...(n === "clippingAncestors" ? __(t, this._c) : [].concat(n)), r],
    a = s[0],
    l = s.reduce((u, c) => {
      const f = R4(t, c, i);
      return (u.top = ia(f.top, u.top)), (u.right = A4(f.right, u.right)), (u.bottom = A4(f.bottom, u.bottom)), (u.left = ia(f.left, u.left)), u;
    }, R4(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}
const k_ = {
  getClippingRect: A_,
  convertOffsetParentRelativeRectToViewportRelativeRect: b_,
  isElement: Jn,
  getDimensions: S_,
  getOffsetParent: M4,
  getDocumentElement: ji,
  getScale: Da,
  getElementRects(e) {
    return Ln(this, null, function* () {
      let { reference: t, floating: n, strategy: r } = e;
      const i = this.getOffsetParent || M4,
        o = this.getDimensions;
      return { reference: x_(t, yield i(n), r), floating: ht({ x: 0, y: 0 }, yield o(n)) };
    });
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => Tr(e).direction === "rtl",
};
function L_(e, t, n, r) {
  r === void 0 && (r = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: s = !0, animationFrame: a = !1 } = r,
    l = i && !a,
    u = l || o ? [...(Jn(e) ? oa(e) : e.contextElement ? oa(e.contextElement) : []), ...oa(t)] : [];
  u.forEach((g) => {
    l && g.addEventListener("scroll", n, { passive: !0 }), o && g.addEventListener("resize", n);
  });
  let c = null;
  if (s) {
    let g = !0;
    (c = new ResizeObserver(() => {
      g || n(), (g = !1);
    })),
      Jn(e) && !a && c.observe(e),
      !Jn(e) && e.contextElement && !a && c.observe(e.contextElement),
      c.observe(t);
  }
  let f,
    h = a ? Oi(e) : null;
  a && p();
  function p() {
    const g = Oi(e);
    h && (g.x !== h.x || g.y !== h.y || g.width !== h.width || g.height !== h.height) && n(), (h = g), (f = requestAnimationFrame(p));
  }
  return (
    n(),
    () => {
      var g;
      u.forEach((v) => {
        l && v.removeEventListener("scroll", n), o && v.removeEventListener("resize", n);
      }),
        (g = c) == null || g.disconnect(),
        (c = null),
        a && cancelAnimationFrame(f);
    }
  );
}
const M_ = (e, t, n) => {
  const r = new Map(),
    i = ht({ platform: k_ }, n),
    o = Qn(ht({}, i.platform), { _c: r });
  return y_(e, t, Qn(ht({}, i), { platform: o }));
};
function R_(e, t, n) {
  let r = () => {
      var f;
      return (f = n == null ? void 0 : n.placement) != null ? f : "bottom";
    },
    i = () => {
      var f;
      return (f = n == null ? void 0 : n.strategy) != null ? f : "absolute";
    },
    [o, s] = ze({ x: null, y: null, placement: r(), strategy: i(), middlewareData: {} }),
    [a, l] = ze();
  hr(() => {
    let f = a();
    if (f) throw f.value;
  });
  let u = ge(() => (e(), t(), {}));
  function c() {
    let f = e(),
      h = t();
    if (f && h) {
      let p = u();
      M_(f, h, { middleware: n == null ? void 0 : n.middleware, placement: r(), strategy: i() }).then(
        (g) => {
          p === u() && s(g);
        },
        (g) => {
          l(g);
        }
      );
    }
  }
  return (
    hr(() => {
      let f = e(),
        h = t();
      if ((n == null || n.middleware, r(), i(), f && h))
        if (n != null && n.whileElementsMounted) {
          let p = n.whileElementsMounted(f, h, c);
          p && pr(p);
        } else c();
    }),
    {
      get x() {
        return o().x;
      },
      get y() {
        return o().y;
      },
      get placement() {
        return o().placement;
      },
      get strategy() {
        return o().strategy;
      },
      get middlewareData() {
        return o().middlewareData;
      },
      update: c,
    }
  );
}
const I_ = qe('<tc-root data-tc-dropdown-container="true"></tc-root>'),
  O_ = () => {
    const e = pt(),
      t = Nn(Xa),
      n = Nn(So),
      [r, i] = ze(!1),
      [o, s] = ze(t.account),
      [a, l] = ze(!0);
    let u;
    const [c, f] = ze(),
      [h, p] = ze(),
      g = R_(h, c, { whileElementsMounted: L_, placement: "bottom-end" }),
      v = () => {
        const w = o();
        if (w) {
          const x = sy(w.address, w.chain === $u.TESTNET);
          return x.slice(0, 4) + "…" + x.slice(-4);
        }
        return "";
      };
    n.connectionRestored.then(() => l(!1));
    const P = t.onStatusChange((w) => {
        if (!w) {
          i(!1), s(null);
          return;
        }
        s(w.account);
      }),
      y = (w) => {
        if (!o() || !r()) return;
        const x = h().contains(w.target),
          T = u.contains(w.target);
        !x && !T && i(!1);
      };
    return (
      Eb(() => {
        document.body.addEventListener("click", y);
      }),
      pr(() => {
        document.body.removeEventListener("click", y), P();
      }),
      b(Oa, {
        component: Br,
        get children() {
          return [
            b(Ge, {
              get when() {
                return a();
              },
              get children() {
                return b(c_, {
                  disabled: !0,
                  "data-tc-connect-button-loading": "true",
                  get children() {
                    return b(f_, {});
                  },
                });
              },
            }),
            b(Ge, {
              get when() {
                return !a();
              },
              get children() {
                return [
                  b(Ge, {
                    get when() {
                      return !o();
                    },
                    get children() {
                      return b(Uy, {
                        onClick: () => n.connectWallet(),
                        "data-tc-connect-button": "true",
                        scale: "s",
                        get children() {
                          return [
                            b(ZT, {
                              get fill() {
                                return e.colors.connectButton.foreground;
                              },
                            }),
                            b(Vn, {
                              translationKey: "button.connectWallet",
                              fontSize: "15px",
                              lineHeight: "18px",
                              fontWeight: "590",
                              get color() {
                                return e.colors.connectButton.foreground;
                              },
                              children: "Connect wallet",
                            }),
                          ];
                        },
                      });
                    },
                  }),
                  b(Ge, {
                    get when() {
                      return o();
                    },
                    get children() {
                      return b(d_, {
                        get children() {
                          return [
                            b(u_, {
                              onClick: () => i((w) => !w),
                              ref: p,
                              "data-tc-dropdown-button": "true",
                              scale: "s",
                              get children() {
                                return [
                                  b(Vn, {
                                    fontSize: "15px",
                                    fontWeight: "590",
                                    lineHeight: "18px",
                                    get children() {
                                      return v();
                                    },
                                  }),
                                  b(Ry, { direction: "bottom" }),
                                ];
                              },
                            }),
                            b(Cy, {
                              get children() {
                                const w = Zt(() => document.importNode(I_, !0));
                                return (
                                  Ku(f, w),
                                  w.style.setProperty("z-index", "999"),
                                  (w._$owner = Tb()),
                                  cn(
                                    w,
                                    b(ph, {
                                      onBeforeEnter: (x) => {
                                        x.animate(
                                          [
                                            { opacity: 0, transform: "translateY(-8px)" },
                                            { opacity: 1, transform: "translateY(0)" },
                                          ],
                                          { duration: 150 }
                                        );
                                      },
                                      onExit: (x, T) => {
                                        x.animate(
                                          [
                                            { opacity: 1, transform: "translateY(0)" },
                                            { opacity: 0, transform: "translateY(-8px)" },
                                          ],
                                          { duration: 150 }
                                        ).finished.then(T);
                                      },
                                      get children() {
                                        return b(Ge, {
                                          get when() {
                                            return r();
                                          },
                                          get children() {
                                            return b(h_, {
                                              get hidden() {
                                                return !r();
                                              },
                                              onClose: () => i(!1),
                                              ref(x) {
                                                const T = u;
                                                typeof T == "function" ? T(x) : (u = x);
                                              },
                                            });
                                          },
                                        });
                                      },
                                    }),
                                    null
                                  ),
                                  cn(w, b(p_, {}), null),
                                  He(
                                    (x) => {
                                      var T, _;
                                      const O = g.strategy,
                                        B = `${(T = g.y) != null ? T : 0}px`,
                                        A = `${(_ = g.x) != null ? _ : 0}px`;
                                      return (
                                        O !== x._v$ && w.style.setProperty("position", (x._v$ = O)),
                                        B !== x._v$2 && w.style.setProperty("top", (x._v$2 = B)),
                                        A !== x._v$3 && w.style.setProperty("left", (x._v$3 = A)),
                                        x
                                      );
                                    },
                                    { _v$: void 0, _v$2: void 0, _v$3: void 0 }
                                  ),
                                  w
                                );
                              },
                            }),
                          ];
                        },
                      });
                    },
                  }),
                ];
              },
            }),
          ];
        },
      })
    );
  },
  B_ = H(Iy)`
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 18px;
    padding-bottom: 0;

    ${Un("mobile")} {
        padding-left: 0;
        padding-right: 0;

        min-height: 364px;
    }
`,
  $_ = H(_r)`
    margin-top: 12px;

    ${Un("mobile")} {
        padding: 0 10px;
    }
`,
  D_ = H.div`
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    ${Un("mobile")} {
        height: 160px;
        align-items: center;
    }
`;
H(Vn)`
    min-width: 84px;
    text-align: center;
    font-weight: 590;
`;
H(CT)`
    margin: 0 auto 22px;
`;
const [It, Ml] = dh({ buttonRootId: null, language: "en", returnStrategy: "back", twaReturnUrl: void 0, walletsListConfiguration: {} });
function N_(e) {
  return [...new Set(e)];
}
function V_(e, t, n) {
  return t
    .map((r) => {
      const i = n.find((o) => o[e] === r[e]);
      return (n = n.filter((o) => o[e] !== r[e])), i === void 0 ? r : i;
    })
    .concat(n);
}
function j_(e) {
  return "jsBridgeKey" in e ? Qn(ht({}, e), { injected: fo.isWalletInjected(e.jsBridgeKey), embedded: fo.isInsideWalletBrowser(e.jsBridgeKey) }) : e;
}
function Yy(e, t) {
  var n;
  return t && (n = t.includeWallets) != null && n.length && (e = V_("name", e, t.includeWallets.map(j_))), e;
}
function I4(e) {
  return e.platforms.some((t) => ["macos", "linux", "windows"].includes(t));
}
function sa(e) {
  return e.platforms.some((t) => ["ios", "android"].includes(t));
}
function O4(e) {
  return e.platforms.some((t) => ["chrome", "firefox", "safari"].includes(t));
}
function Yi(e, t) {
  return t ? e.name.toLowerCase() === t.toLowerCase() || e.appName.toLowerCase() === t.toLowerCase() : !1;
}
const F_ = H.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,
  U_ = H(_r)`
    margin-bottom: 18px;
`;
H.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.12;
    background: ${(e) => (e.isShown ? e.theme.colors.icon.secondary : "transparent")};
    transition: background 0.15s ease-in-out;

    ${Un("mobile")} {
        width: 100%;
    }
`;
const z_ = H.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 92px);
    grid-template-rows: auto;
    align-content: flex-start;
    justify-content: center;
    row-gap: 8px;
    width: 100%;
    padding: 0 0 16px;
    align-self: flex-start;
    max-width: 400px;
    margin: 0 auto;

    > li {
        display: block;
        height: fit-content;
    }

    ${Un("mobile")} {
        grid-template-columns: repeat(auto-fit, 82px);
    }
`;
H(jt)`
    display: block;
    margin: 0 auto 1px;
    font-size: 15px;
`;
const W_ = H(xo)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  H_ = H(jy)`
    height: 100%;
`,
  K_ = qe("<li></li>"),
  G_ = (e) => {
    const t = () => ($a() ? void 0 : 510),
      n = () => ($a() ? e.walletsList.filter(sa) : e.walletsList);
    return b(F_, {
      "data-tc-wallets-modal-list": "true",
      get children() {
        return [
          b(W_, { icon: "arrow", onClick: () => e.onBack() }),
          b(U_, { translationKey: "walletModal.wallets", children: "Wallets" }),
          b(Fy, {
            get maxHeight() {
              return t();
            },
            get children() {
              return b(z_, {
                get children() {
                  return b(qa, {
                    get each() {
                      return n();
                    },
                    children: (r) =>
                      (() => {
                        const i = K_.cloneNode(!0);
                        return cn(i, b(H_, { wallet: r, onClick: () => e.onSelect(r) })), i;
                      })(),
                  });
                },
              });
            },
          }),
        ];
      },
    });
  },
  q_ = { m: "16px", s: "12px", none: "0" },
  Y_ = { m: "6px", s: "6px", none: "0" },
  Z_ = H.div`
    display: flex;
    flex-direction: column;
`,
  Q_ = H.div`
    flex: 1;
    margin-top: ${(e) => (e.qr ? "0" : "18px")};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,
  X_ = H(Dc)`
    margin-bottom: 24px;
`,
  J_ = H(_r)`
    max-width: 288px;
    margin: 0 auto 2px;
`,
  eA = H(Vi)`
    max-width: 288px;
    text-align: center;
    margin: 0 auto 20px;
`,
  tA = H(xo)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  Fs = H.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,
  nA = H(Fs)`
    padding-bottom: 0;
`,
  zf = H(jt)`
    margin-bottom: 24px;
`,
  rA = H(Co)`
    margin-bottom: 18px;
    margin-top: 2px;
`,
  iA = H(Nc)`
    margin-bottom: 16px;
`,
  Rl = H(Vi)`
    color: ${(e) => e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,
  oA = H(jt)`
    margin-top: -8px;
    margin-bottom: 24px;
    width: 100%;
    padding: 12px 12px 12px 20px;
    border-radius: ${(e) => q_[e.theme.borderRadius]};
    font-size: 16px;
    line-height: 20px;
`,
  sA = H(wo)`
    width: 32px;
    height: 32px;
    border-radius: ${(e) => Y_[e.theme.borderRadius]};
`,
  Kt = (e) => {
    const [t] = Jr();
    return ge(() => {
      var n;
      return t(e.translationKey, e.translationValues, (n = e.children) == null ? void 0 : n.toString());
    });
  },
  aA = (e) => {
    const [t, n] = ze("mobile"),
      [r, i] = ze(!1),
      [o, s] = ze(),
      a = Nn(Xa),
      l = a.onStatusChange(
        () => {},
        () => {
          e.wallet.appName !== Wr && i(!0);
        }
      );
    pr(l);
    const u = () => {
      s(a.connect({ universalLink: e.wallet.universalLink, bridgeUrl: e.wallet.bridgeUrl }, e.additionalRequest));
    };
    hr(() => {
      Zt(t) !== "extension" && (sa(e.wallet) || I4(e.wallet)) && u();
    });
    const c = () => {
        i(!1), t() === "extension" && u(), n("mobile"), On(Qn(ht({}, e.wallet), { openMethod: "qrcode" }));
      },
      f = () => {
        i(!1), t() === "extension" && u(), n("desktop"), On(Qn(ht({}, e.wallet), { openMethod: "universal-link" })), Ri(Xn(o(), It.returnStrategy));
      },
      h = () => {
        On(Qn(ht({}, e.wallet), { openMethod: "universal-link" })), Ri(Xn(o(), { returnStrategy: It.returnStrategy, twaReturnUrl: It.twaReturnUrl }));
      },
      p = () => {
        i(!1), n("extension"), io(e.wallet) && (On(e.wallet), a.connect({ jsBridgeKey: e.wallet.jsBridgeKey }, e.additionalRequest));
      };
    return (
      sa(e.wallet) ? c() : O4(e.wallet) ? p() : f(),
      b(Z_, {
        "data-tc-wallets-modal-connection-desktop": "true",
        get children() {
          return [
            b(tA, { icon: "arrow", onClick: () => e.onBackClick() }),
            b(J_, {
              get children() {
                return e.wallet.name;
              },
            }),
            b(Ge, {
              get when() {
                return t() === "mobile";
              },
              get children() {
                return b(eA, {
                  translationKey: "walletModal.desktopConnectionModal.scanQR",
                  get translationValues() {
                    return { name: e.wallet.name };
                  },
                  get children() {
                    return ["Scan the QR code below with your phone’s or ", ge(() => e.wallet.name), "’s camera"];
                  },
                });
              },
            }),
            b(Q_, {
              get qr() {
                return t() === "mobile";
              },
              get children() {
                return b(Ya, {
                  get children() {
                    return [
                      b(Xt, {
                        get when() {
                          return t() === "mobile";
                        },
                        get children() {
                          return b(X_, {
                            disableCopy: !1,
                            get sourceUrl() {
                              return Xn(o(), "none");
                            },
                            get imageUrl() {
                              return e.wallet.imageUrl;
                            },
                          });
                        },
                      }),
                      b(Xt, {
                        get when() {
                          return r();
                        },
                        get children() {
                          return [
                            b(iA, { size: "s" }),
                            b(Rl, { translationKey: "walletModal.desktopConnectionModal.connectionDeclined", children: "Connection declined" }),
                            b(Fs, {
                              get children() {
                                return b(jt, {
                                  get leftIcon() {
                                    return b(ra, {});
                                  },
                                  get onClick() {
                                    return t() === "extension" ? p : f;
                                  },
                                  get children() {
                                    return b(Kt, { translationKey: "common.retry", children: "Retry" });
                                  },
                                });
                              },
                            }),
                          ];
                        },
                      }),
                      b(Xt, {
                        get when() {
                          return t() === "extension";
                        },
                        get children() {
                          return [
                            b(Ge, {
                              get when() {
                                return io(e.wallet);
                              },
                              get children() {
                                return [
                                  b(rA, { size: "s" }),
                                  b(Rl, {
                                    translationKey: "walletModal.desktopConnectionModal.continueInExtension",
                                    get translationValues() {
                                      return { name: e.wallet.name };
                                    },
                                    get children() {
                                      return ["Continue in ", ge(() => e.wallet.name), " browser extension…"];
                                    },
                                  }),
                                  b(Fs, {
                                    get children() {
                                      return b(jt, {
                                        get leftIcon() {
                                          return b(ra, {});
                                        },
                                        onClick: p,
                                        get children() {
                                          return b(Kt, { translationKey: "common.retry", children: "Retry" });
                                        },
                                      });
                                    },
                                  }),
                                ];
                              },
                            }),
                            b(Ge, {
                              get when() {
                                return !io(e.wallet);
                              },
                              get children() {
                                return [
                                  b(Rl, {
                                    translationKey: "walletModal.desktopConnectionModal.dontHaveExtension",
                                    get translationValues() {
                                      return { name: e.wallet.name };
                                    },
                                    get children() {
                                      return ["Seems you don't have installed ", ge(() => e.wallet.name), " browser extension"];
                                    },
                                  }),
                                  b(Fs, {
                                    get children() {
                                      return b(Qu, {
                                        get href() {
                                          return e.wallet.aboutUrl;
                                        },
                                        blank: !0,
                                        get children() {
                                          return b(jt, {
                                            get rightIcon() {
                                              return b(S4, {});
                                            },
                                            onClick: p,
                                            get children() {
                                              return b(Kt, {
                                                translationKey: "walletModal.desktopConnectionModal.getWallet",
                                                get translationValues() {
                                                  return { name: e.wallet.name };
                                                },
                                                get children() {
                                                  return ["Get ", ge(() => e.wallet.name)];
                                                },
                                              });
                                            },
                                          });
                                        },
                                      });
                                    },
                                  }),
                                ];
                              },
                            }),
                          ];
                        },
                      }),
                      b(Xt, {
                        get when() {
                          return t() === "desktop";
                        },
                        get children() {
                          return [
                            b(Co, { size: "m" }),
                            b(Rl, {
                              translationKey: "walletModal.desktopConnectionModal.continueOnDesktop",
                              get translationValues() {
                                return { name: e.wallet.name };
                              },
                              get children() {
                                return ["Continue in ", ge(() => e.wallet.name), " on desktop…"];
                              },
                            }),
                            b(Fs, {
                              get children() {
                                return [
                                  b(jt, {
                                    get leftIcon() {
                                      return b(ra, {});
                                    },
                                    onClick: f,
                                    get children() {
                                      return b(Kt, { translationKey: "common.retry", children: "Retry" });
                                    },
                                  }),
                                  b(Qu, {
                                    get href() {
                                      return e.wallet.aboutUrl;
                                    },
                                    blank: !0,
                                    get children() {
                                      return b(jt, {
                                        get rightIcon() {
                                          return b(S4, {});
                                        },
                                        get children() {
                                          return b(Kt, {
                                            translationKey: "walletModal.desktopConnectionModal.getWallet",
                                            get translationValues() {
                                              return { name: e.wallet.name };
                                            },
                                            get children() {
                                              return ["Get ", ge(() => e.wallet.name)];
                                            },
                                          });
                                        },
                                      });
                                    },
                                  }),
                                ];
                              },
                            }),
                          ];
                        },
                      }),
                    ];
                  },
                });
              },
            }),
            b(Ge, {
              get when() {
                return e.wallet.appName === Wr;
              },
              get children() {
                return b(oA, {
                  get rightIcon() {
                    return b(sA, {
                      get src() {
                        return nl.TG;
                      },
                    });
                  },
                  scale: "s",
                  onClick: h,
                  get children() {
                    return b(Kt, { translationKey: "walletModal.desktopConnectionModal.openWalletOnTelegram", children: "Open Wallet on Telegram on desktop" });
                  },
                });
              },
            }),
            b(Ge, {
              get when() {
                return e.wallet.appName !== Wr;
              },
              get children() {
                return b(nA, {
                  get children() {
                    return [
                      b(Ge, {
                        get when() {
                          return ge(() => t() !== "mobile")() && sa(e.wallet);
                        },
                        get children() {
                          return b(zf, {
                            appearance: "secondary",
                            get leftIcon() {
                              return b(hP, {});
                            },
                            onClick: c,
                            get children() {
                              return b(Kt, { translationKey: "common.mobile", children: "Mobile" });
                            },
                          });
                        },
                      }),
                      b(Ge, {
                        get when() {
                          return ge(() => t() !== "extension")() && O4(e.wallet);
                        },
                        get children() {
                          return b(zf, {
                            appearance: "secondary",
                            get leftIcon() {
                              return b(fP, {});
                            },
                            onClick: p,
                            get children() {
                              return b(Kt, { translationKey: "common.browserExtension", children: "Browser Extension" });
                            },
                          });
                        },
                      }),
                      b(Ge, {
                        get when() {
                          return ge(() => t() !== "desktop")() && I4(e.wallet);
                        },
                        get children() {
                          return b(zf, {
                            appearance: "secondary",
                            get leftIcon() {
                              return b(mP, {});
                            },
                            onClick: f,
                            get children() {
                              return b(Kt, { translationKey: "common.desktop", children: "Desktop" });
                            },
                          });
                        },
                      }),
                    ];
                  },
                });
              },
            }),
          ];
        },
      })
    );
  },
  lA = H.div``,
  uA = H(xo)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  cA = H(_r)`
    margin-bottom: 18px;
`,
  Wf = H.div`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`,
  Hf = Zr`
    margin-bottom: 12px;
`,
  Kf = H(gh)`
    text-align: center;
    margin-bottom: 4px;
`,
  Gf = H(Vn)`
    text-align: center;
    max-width: 352px;
    color: ${(e) => e.theme.colors.text.secondary};
`,
  fA = H.div`
    padding: 16px 24px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`,
  dA = { GET_A_WALLET: "https://ton.org/wallets?filters[wallet_features][slug][$in]=dapp-auth&pagination[limit]=-1" },
  hA = (e) =>
    b(lA, {
      "data-tc-wallets-modal-info": "true",
      get children() {
        return [
          b(uA, { icon: "arrow", onClick: () => e.onBackClick() }),
          b(cA, { translationKey: "walletModal.infoModal.whatIsAWallet", children: "What is a wallet" }),
          b(Fy, {
            get children() {
              return [
                b(Wf, {
                  get children() {
                    return [
                      b(CP, { class: Hf }),
                      b(Kf, { translationKey: "walletModal.infoModal.secureDigitalAssets", children: "Secure digital assets storage" }),
                      b(Gf, {
                        translationKey: "walletModal.infoModal.walletProtects",
                        children: "A wallet protects and manages your digital assets including TON, tokens and collectables.",
                      }),
                    ];
                  },
                }),
                b(Wf, {
                  get children() {
                    return [
                      b(bP, { class: Hf }),
                      b(Kf, { translationKey: "walletModal.infoModal.controlIdentity", children: "Control your Web3 identity" }),
                      b(Gf, {
                        translationKey: "walletModal.infoModal.manageIdentity",
                        children:
                          "Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem.",
                      }),
                    ];
                  },
                }),
                b(Wf, {
                  get children() {
                    return [
                      b(TP, { class: Hf }),
                      b(Kf, { translationKey: "walletModal.infoModal.effortlessCryptoTransactions", children: "Effortless crypto transactions" }),
                      b(Gf, {
                        translationKey: "walletModal.infoModal.easilySend",
                        children: "Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications.",
                      }),
                    ];
                  },
                }),
                b(fA, {
                  get children() {
                    return b(Qu, {
                      get href() {
                        return dA.GET_A_WALLET;
                      },
                      blank: !0,
                      get children() {
                        return b(jt, {
                          get rightIcon() {
                            return b(wP, {});
                          },
                          get children() {
                            return b(Kt, { translationKey: "walletModal.infoModal.getAWallet", children: "Get a Wallet" });
                          },
                        });
                      },
                    });
                  },
                }),
              ];
            },
          }),
        ];
      },
    }),
  pA = H.div``,
  mA = H.div`
    flex: 1;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,
  gA = H(_r)`
    max-width: 262px;
    margin: 0 auto 8px;
`,
  vA = H(xo)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  yA = H.div`
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 0.5px solid ${(e) => Za(e.theme.colors.icon.secondary, 0.2)};
`,
  wA = H(wo)`
    width: 36px;
    height: 36px;
    border-radius: 10px;
`,
  xA = H(Qu)`
    margin-left: auto;
`,
  CA = H(Co)`
    margin-bottom: 18px;
    margin-top: 2px;
`,
  SA = H(Nc)`
    margin-bottom: 16px;
`,
  B4 = H(Vi)`
    color: ${(e) => e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,
  $4 = H.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,
  bA = H(_r)`
    margin-bottom: 2px;
    padding: 0 64px;
`,
  EA = H(Vi)`
    margin-bottom: 20px;
    padding: 0 64px;
    min-height: 44px;
`,
  TA = H.div`
    padding: 0 24px 24px;
`,
  PA = (e) => [
    b(bA, {
      get children() {
        return e.walletInfo.name;
      },
    }),
    b(EA, {
      translationKey: "walletModal.mobileConnectionModal.scanQR",
      get translationValues() {
        return { name: e.walletInfo.name };
      },
      get children() {
        return ["Scan the QR code below with your phone’s or ", ge(() => e.walletInfo.name), "’s camera"];
      },
    }),
    b(TA, {
      get children() {
        return b(Dc, {
          get imageUrl() {
            return e.walletInfo.imageUrl;
          },
          get sourceUrl() {
            return Xn(e.universalLink, "none");
          },
          disableCopy: !0,
        });
      },
    }),
  ],
  _A = (e) => {
    const t = pt(),
      [n, r] = ze(!1),
      [i, o] = ze(!1),
      s = Nn(Xa),
      a = s.onStatusChange(
        () => {},
        () => {
          o(!0);
        }
      ),
      l = ge(() => s.connect({ universalLink: e.wallet.universalLink, bridgeUrl: e.wallet.bridgeUrl }, e.additionalRequest)),
      u = () => {
        o(!1), On(Qn(ht({}, e.wallet), { openMethod: "universal-link" })), Ri(Xn(l(), It.returnStrategy));
      },
      c = () => {
        o(!1), r(!0), On(Qn(ht({}, e.wallet), { openMethod: "qrcode" }));
      },
      f = () => {
        r(!1), On(Qn(ht({}, e.wallet), { openMethod: "universal-link" }));
      },
      h = () => {
        n() ? f() : e.onBackClick();
      };
    return (
      pr(a),
      u(),
      b(pA, {
        "data-tc-wallets-modal-connection-mobile": "true",
        get children() {
          return [
            b(vA, { icon: "arrow", onClick: h }),
            b(Ge, {
              get when() {
                return n();
              },
              get children() {
                return b(PA, {
                  get universalLink() {
                    return l();
                  },
                  get walletInfo() {
                    return e.wallet;
                  },
                });
              },
            }),
            b(Ge, {
              get when() {
                return !n();
              },
              get children() {
                return [
                  b(gA, {
                    get children() {
                      return e.wallet.name;
                    },
                  }),
                  b(mA, {
                    get children() {
                      return [
                        b(Ge, {
                          get when() {
                            return i();
                          },
                          get children() {
                            return [
                              b(SA, { size: "s" }),
                              b(B4, { translationKey: "walletModal.mobileConnectionModal.connectionDeclined", children: "Connection declined" }),
                              b($4, {
                                get children() {
                                  return [
                                    b(jt, {
                                      get leftIcon() {
                                        return b(ra, {});
                                      },
                                      onClick: u,
                                      get children() {
                                        return b(Kt, { translationKey: "common.retry", children: "Retry" });
                                      },
                                    }),
                                    b(jt, {
                                      get leftIcon() {
                                        return b(k0, {
                                          get fill() {
                                            return t.colors.accent;
                                          },
                                        });
                                      },
                                      onClick: c,
                                      get children() {
                                        return b(Kt, { translationKey: "walletModal.mobileConnectionModal.showQR", children: "Show QR Code" });
                                      },
                                    }),
                                  ];
                                },
                              }),
                            ];
                          },
                        }),
                        b(Ge, {
                          get when() {
                            return !i();
                          },
                          get children() {
                            return [
                              b(CA, { size: "s" }),
                              b(B4, {
                                translationKey: "walletModal.mobileConnectionModal.continueIn",
                                get translationValues() {
                                  return { name: e.wallet.name };
                                },
                                get children() {
                                  return ["Continue in ", ge(() => e.wallet.name), "…"];
                                },
                              }),
                              b($4, {
                                get children() {
                                  return [
                                    b(jt, {
                                      get leftIcon() {
                                        return b(ra, {});
                                      },
                                      onClick: u,
                                      get children() {
                                        return b(Kt, { translationKey: "common.retry", children: "Retry" });
                                      },
                                    }),
                                    b(jt, {
                                      get leftIcon() {
                                        return b(k0, {
                                          get fill() {
                                            return t.colors.accent;
                                          },
                                        });
                                      },
                                      onClick: c,
                                      get children() {
                                        return b(Kt, { translationKey: "walletModal.mobileConnectionModal.showQR", children: "Show QR Code" });
                                      },
                                    }),
                                  ];
                                },
                              }),
                            ];
                          },
                        }),
                      ];
                    },
                  }),
                  b(yA, {
                    get children() {
                      return [
                        b(wA, {
                          get src() {
                            return e.wallet.imageUrl;
                          },
                        }),
                        b(gh, {
                          get children() {
                            return e.wallet.name;
                          },
                        }),
                        b(xA, {
                          get href() {
                            return e.wallet.aboutUrl;
                          },
                          blank: !0,
                          get children() {
                            return b(jt, {
                              get children() {
                                return b(Kt, { translationKey: "common.get", children: "GET" });
                              },
                            });
                          },
                        }),
                      ];
                    },
                  }),
                ];
              },
            }),
          ];
        },
      })
    );
  },
  Zy = { m: "16px", s: "12px", none: "0" },
  AA = { m: "6px", s: "6px", none: "0" },
  kA = H.ul`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: fit-content;
    max-width: 100%;
    min-width: 100%;
    height: fit-content;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 13px 24px;

    &&::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    > li {
        height: fit-content;
    }
`,
  D4 = H.li`
    width: 82px;
    min-width: 82px;
    height: 124px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 4px;

    text-align: center;
    cursor: pointer;

    transition: transform 0.1s ease-in-out;

    ${el} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${Ja} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
  LA = H.div`
    width: 1px;
    margin: 0 10px;
    height: 24px;
    position: relative;
    top: 26px;

    background-color: ${(e) => e.theme.colors.icon.secondary};
    opacity: 0.2;
`,
  N4 = H.div`
    width: 60px;
    height: 60px;
    border-radius: ${(e) => Zy[e.theme.borderRadius]};
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(e) => e.theme.colors.background.tint};
    margin-bottom: 8px;
`,
  MA = H(_r)`
    margin-top: 38px;
    margin-bottom: 4px;
    padding: 0 24px;
`,
  RA = H(Vi)`
    margin-bottom: 24px;
    padding: 0 24px;
    min-height: 44px;
`;
H(jt)`
    display: block;
    margin: 0 auto;
`;
const IA = H(jt)`
    margin: 0 24px 24px;
    width: calc(100% - 48px);
    border-radius: ${(e) => Zy[e.theme.borderRadius]};
    padding: 14px 16px 14px 14px;
    background-color: ${(e) => e.theme.colors.telegramButton};

    color: ${(e) => e.theme.colors.constant.white};
    font-weight: 590;
    font-size: 16px;
    line-height: 20px;
`,
  OA = H(wo)`
    border-radius: ${(e) => AA[e.theme.borderRadius]};
    width: 24px;
    height: 24px;
`,
  V4 = H(xo)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  BA = H(_r)`
    margin-bottom: 2px;
    padding: 0 64px;
`,
  $A = H(Vi)`
    margin-bottom: 20px;
    padding: 0 64px;
`,
  DA = H.div`
    padding: 0 24px 24px;
`,
  NA = (e) => [
    b(BA, { translationKey: "walletModal.mobileUniversalModal.connectYourWallet", children: "Connect your wallet" }),
    b($A, { translationKey: "walletModal.mobileUniversalModal.scan", children: "Scan with your mobile wallet" }),
    b(DA, {
      get children() {
        return b(Dc, {
          get imageUrl() {
            return nl.TON;
          },
          get sourceUrl() {
            return Xn(e.universalLink, "none");
          },
          disableCopy: !0,
        });
      },
    }),
  ],
  j4 = qe("<li></li>"),
  VA = qe('<div data-tc-wallets-modal-universal-mobile="true"></div>'),
  jA = (e) => {
    const [t, n] = ze(!1),
      r = It.connector,
      i = () => e.walletsList.filter((g) => sa(g) && g.appName !== Wr),
      o = () => i().length > 7,
      s = ge(() =>
        r.connect(
          e.walletsList.filter(p0).map((g) => ({ bridgeUrl: g.bridgeUrl, universalLink: g.universalLink })),
          e.additionalRequest
        )
      );
    On({ openMethod: "universal-link" });
    const [a, l] = ze(void 0),
      u = () =>
        Ln(void 0, null, function* () {
          a() !== void 0 && clearTimeout(a()), yield mh(s());
          const g = setTimeout(() => l(void 0), 1500);
          l(g);
        }),
      c = () => {
        Ri(Xn(s(), It.returnStrategy));
      },
      f = () => {
        const g = e.walletsList.find((P) => P.appName === Wr);
        if (!g || !p0(g)) throw new lr("@wallet bot not found in the wallets list");
        const v = r.connect({ bridgeUrl: g.bridgeUrl, universalLink: g.universalLink }, e.additionalRequest);
        Ri(Xn(v, { returnStrategy: It.returnStrategy, twaReturnUrl: It.twaReturnUrl }));
      },
      h = () => {
        n(!0), On({ openMethod: "qrcode" });
      },
      p = () => {
        n(!1), On({ openMethod: "universal-link" });
      };
    return (() => {
      const g = VA.cloneNode(!0);
      return (
        cn(
          g,
          b(Ge, {
            get when() {
              return t();
            },
            get children() {
              return [
                b(V4, { icon: "arrow", onClick: p }),
                b(NA, {
                  get universalLink() {
                    return s();
                  },
                }),
              ];
            },
          }),
          null
        ),
        cn(
          g,
          b(Ge, {
            get when() {
              return !t();
            },
            get children() {
              return [
                b(V4, {
                  get icon() {
                    return b(k0, {});
                  },
                  onClick: h,
                }),
                b(MA, { translationKey: "walletModal.mobileUniversalModal.connectYourWallet", children: "Connect your wallet" }),
                b(RA, { translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegramOrSelect", children: "Open Wallet on Telegram or select your wallet to connect" }),
                b(IA, {
                  get leftIcon() {
                    return b(_P, {});
                  },
                  get rightIcon() {
                    return b(OA, {
                      get src() {
                        return nl.TG;
                      },
                    });
                  },
                  onClick: f,
                  scale: "s",
                  get children() {
                    return b(Kt, { translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegram", children: "Open Wallet on Telegram" });
                  },
                }),
                b(kA, {
                  get children() {
                    return [
                      b(qa, {
                        get each() {
                          return ge(() => !!o())() ? i().slice(0, 4) : i();
                        },
                        children: (v) =>
                          (() => {
                            const P = j4.cloneNode(!0);
                            return (
                              cn(
                                P,
                                b(Zu, {
                                  get icon() {
                                    return v.imageUrl;
                                  },
                                  get name() {
                                    return v.name;
                                  },
                                  onClick: () => e.onSelect(v),
                                })
                              ),
                              P
                            );
                          })(),
                      }),
                      b(Ge, {
                        get when() {
                          return o();
                        },
                        get children() {
                          const v = j4.cloneNode(!0);
                          return (
                            cn(
                              v,
                              b(Vy, {
                                labelLine1: "View all",
                                labelLine2: "wallets",
                                get images() {
                                  return i()
                                    .slice(3, 7)
                                    .map((P) => P.imageUrl);
                                },
                                onClick: () => e.onSelectAllWallets(),
                              })
                            ),
                            v
                          );
                        },
                      }),
                      b(LA, { children: " " }),
                      b(D4, {
                        onClick: c,
                        get children() {
                          return [
                            b(N4, {
                              get children() {
                                return b(qT, {});
                              },
                            }),
                            b(Vn, { fontWeight: 590, translationKey: "walletModal.mobileUniversalModal.openLink", children: "Open Link" }),
                          ];
                        },
                      }),
                      b(D4, {
                        onClick: u,
                        get children() {
                          return [
                            b(N4, {
                              get children() {
                                return ge(() => a() !== void 0)() ? b(kP, {}) : b(Ny, {});
                              },
                            }),
                            b(Vn, {
                              fontWeight: 590,
                              get translationKey() {
                                return a() !== void 0 ? "common.copied" : "common.copyLink";
                              },
                              get children() {
                                return a() !== void 0 ? "Copied" : "Copy Link";
                              },
                            }),
                          ];
                        },
                      }),
                    ];
                  },
                }),
              ];
            },
          }),
          null
        ),
        g
      );
    })();
  },
  Qy = { m: "16px", s: "8px", none: "0" },
  FA = { m: "8px", s: "4px", none: "0" },
  UA = H.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
`,
  zA = H(Vi)`
    max-width: 320px;
    margin-top: 2px;
    margin-bottom: 20px;
`,
  WA = H(Vi)`
    margin-bottom: 16px;
`,
  HA = H(Dc)`
    margin-bottom: 24px;
`,
  KA = H.ul`
    display: flex;
`;
H.div`
    display: flex;
    gap: 16px;
    width: 100%;
`;
H(jt)`
    position: relative;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    padding: 0 16px;
    height: 56px;
    border-radius: ${(e) => Qy[e.theme.borderRadius]};

    &:hover {
        ${(e) => (e.disableEventsAnimation ? "transform: unset;" : "")}
    }

    &:active {
        ${(e) => (e.disableEventsAnimation ? "transform: unset;" : "")}
    }
`;
H.ul`
    position: absolute;
    bottom: 100%;
    left: 0;
    margin: 0;
    padding: 8px;
    width: 188px;
    transform: translateY(-16px);

    background-color: ${(e) => e.theme.colors.background.primary};
    border-radius: ${(e) => Qy[e.theme.borderRadius]};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
`;
H.li`
    padding: 8px;

    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;
    border-radius: ${(e) => FA[e.theme.borderRadius]};

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${(e) => e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`;
H(wo)`
    width: 24px;
    height: 24px;

    border-radius: 6px;
`;
H.div`
    margin-top: 23px;
    margin-bottom: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
H(Vn)`
    color: ${(e) => e.theme.colors.text.secondary};
    font-size: 16px;
`;
const GA = qe("<li></li>"),
  qA = (e) => {
    const [t, n] = ze(!1),
      r = It.connector,
      i = e.walletsList.filter(p0).map((s) => ({ bridgeUrl: s.bridgeUrl, universalLink: s.universalLink }));
    On({ openMethod: "qrcode" });
    const o = ge(() => r.connect(i, e.additionalRequest));
    return b(UA, {
      onClick: () => n(!1),
      "data-tc-wallets-modal-universal-desktop": "true",
      get children() {
        return [
          b(_r, { translationKey: "walletModal.desktopUniversalModal.connectYourWallet", children: "Connect your wallet" }),
          b(zA, { translationKey: "walletModal.desktopUniversalModal.scan", children: "Scan with your mobile wallet" }),
          b(HA, {
            get sourceUrl() {
              return Xn(o(), "none");
            },
            get disableCopy() {
              return t();
            },
            get imageUrl() {
              return nl.TON;
            },
          }),
          b(WA, { translationKey: "walletModal.desktopUniversalModal.availableWallets", children: "Available wallets" }),
          b(KA, {
            get children() {
              return [
                b(qa, {
                  get each() {
                    return e.walletsList.slice(0, 3);
                  },
                  children: (s) =>
                    (() => {
                      const a = GA.cloneNode(!0);
                      return cn(a, b(jy, { wallet: s, onClick: () => e.onSelect(s) })), a;
                    })(),
                }),
                b(Vy, {
                  labelLine1: "View all",
                  labelLine2: "wallets",
                  get images() {
                    return e.walletsList.slice(3, 7).map((s) => s.imageUrl);
                  },
                  onClick: () => e.onSelectAllWallets(),
                }),
              ];
            },
          }),
        ];
      },
    });
  },
  YA = () => {
    const { locale: e } = Jr()[1];
    hr(() => e(It.language));
    const t = Nn(Xa),
      n = Nn(So),
      [r] = Sb(() => n.getWallets()),
      [i, o] = ze(null),
      [s, a] = ze("universal"),
      [l, u] = ze(!1),
      c = ge(() => {
        if (r.state !== "ready") return null;
        let v = Yy(r(), It.walletsListConfiguration);
        const P = v.filter(io),
          y = v.filter((O) => !io(O));
        v = (P || []).concat(y);
        const w = It.preferredWalletAppName,
          x = v.find((O) => Yi(O, w)),
          T = v.filter((O) => Yi(O, w)).length >= 2;
        w && x && !T && (v = [Qn(ht({}, x), { isPreferred: !0 })].concat(v.filter((O) => !Yi(O, w))));
        const _ = v.find((O) => Yi(O, Wr));
        return _ && (v = [_].concat(v.filter((O) => !Yi(O, Wr)))), v;
      }),
      f = () => {
        var v;
        return ((v = It.connectRequestParameters) == null ? void 0 : v.state) === "loading";
      },
      h = ge(() => {
        var v;
        if (!f()) return (v = It.connectRequestParameters) == null ? void 0 : v.value;
      }),
      p = () => {
        b0(!1), o(null), u(!1);
      },
      g = t.onStatusChange((v) => {
        v && p();
      });
    return (
      pr(g),
      b(B_, {
        get opened() {
          return bE();
        },
        onClose: p,
        onClickQuestion: () => u((v) => !v),
        "data-tc-wallets-modal-container": "true",
        get children() {
          return [
            b(Ge, {
              get when() {
                return l();
              },
              get children() {
                return b(hA, { onBackClick: () => u(!1) });
              },
            }),
            b(Ge, {
              get when() {
                return !l();
              },
              get children() {
                return [
                  b(Ge, {
                    get when() {
                      return f() || !c();
                    },
                    get children() {
                      return [
                        b($_, { translationKey: "walletModal.loading", children: "Wallets list is loading" }),
                        b(D_, {
                          get children() {
                            return b(Co, { size: "m" });
                          },
                        }),
                      ];
                    },
                  }),
                  b(Ge, {
                    get when() {
                      return ge(() => !f())() && c();
                    },
                    get children() {
                      return b(Ya, {
                        get children() {
                          return [
                            b(Xt, {
                              get when() {
                                return i();
                              },
                              get children() {
                                return b(Oa, {
                                  get component() {
                                    return $a() ? _A : aA;
                                  },
                                  get wallet() {
                                    return i();
                                  },
                                  get additionalRequest() {
                                    return h();
                                  },
                                  onBackClick: () => o(null),
                                });
                              },
                            }),
                            b(Xt, {
                              get when() {
                                return s() === "universal";
                              },
                              get children() {
                                return b(Oa, {
                                  get component() {
                                    return $a() ? jA : qA;
                                  },
                                  onSelect: o,
                                  get walletsList() {
                                    return c();
                                  },
                                  get additionalRequest() {
                                    return h();
                                  },
                                  onSelectAllWallets: () => a("all-wallets"),
                                });
                              },
                            }),
                            b(Xt, {
                              get when() {
                                return s() === "all-wallets";
                              },
                              get children() {
                                return b(G_, {
                                  get walletsList() {
                                    return c();
                                  },
                                  onBack: () => a("universal"),
                                  onSelect: o,
                                });
                              },
                            }),
                          ];
                        },
                      });
                    },
                  }),
                ];
              },
            }),
          ];
        },
      })
    );
  },
  ZA = H.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8px;
`,
  QA = H(_r)`
    margin-top: 16px;
`,
  XA = H(Vn)`
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 250px;

    color: ${(e) => e.theme.colors.text.secondary};
`,
  F4 = H(jt)`
    margin-top: 32px;
`,
  Ch = (e) => {
    const t = tl(e),
      n = Nn(So);
    let r;
    n != null && n.wallet && "universalLink" in n.wallet && (n.wallet.openMethod === "universal-link" || (La(n.wallet.universalLink) && Ty())) && (r = n.wallet.universalLink);
    const i = () => {
      const o = qi(),
        s = "returnStrategy" in o ? o.returnStrategy : It.returnStrategy;
      La(r) ? Ey(r, { returnStrategy: s, twaReturnUrl: "twaReturnUrl" in o ? o.twaReturnUrl : It.twaReturnUrl }) : Ri(Xn(r, s));
    };
    return b(
      ZA,
      br(t, {
        get children() {
          return [
            ge(() => e.icon),
            b(QA, {
              get translationKey() {
                return e.headerTranslationKey;
              },
              get translationValues() {
                return e.headerTranslationValues;
              },
            }),
            b(XA, {
              get translationKey() {
                return e.textTranslationKey;
              },
              get translationValues() {
                return e.textTranslationValues;
              },
            }),
            b(Ge, {
              get when() {
                return e.showButton !== "open-wallet";
              },
              get children() {
                return b(F4, {
                  onClick: () => e.onClose(),
                  get children() {
                    return b(Kt, { translationKey: "common.close", children: "Close" });
                  },
                });
              },
            }),
            b(Ge, {
              get when() {
                return e.showButton === "open-wallet" && r;
              },
              get children() {
                return b(F4, {
                  onClick: i,
                  get children() {
                    return b(Kt, { translationKey: "common.openWallet", children: "Open wallet" });
                  },
                });
              },
            }),
          ];
        },
      })
    );
  },
  JA = (e) => {
    const t = Nn(So),
      [n] = Jr(),
      r = () => (t.wallet && "name" in t.wallet ? t.wallet.name : n("common.yourWallet", {}, "Your wallet"));
    return b(Ch, {
      headerTranslationKey: "actionModal.confirmTransaction.header",
      get headerTranslationValues() {
        return { name: r() };
      },
      textTranslationKey: "actionModal.confirmTransaction.text",
      get icon() {
        return b(Co, { size: "m" });
      },
      onClose: () => e.onClose(),
      showButton: "open-wallet",
      "data-tc-confirm-modal": "true",
    });
  },
  ek = (e) =>
    b(Ch, {
      headerTranslationKey: "actionModal.transactionCanceled.header",
      textTranslationKey: "actionModal.transactionCanceled.text",
      get icon() {
        return b(Nc, { size: "m" });
      },
      onClose: () => e.onClose(),
      "data-tc-transaction-canceled-modal": "true",
    }),
  tk = (e) =>
    b(Ch, {
      headerTranslationKey: "actionModal.transactionSent.header",
      textTranslationKey: "actionModal.transactionSent.text",
      get icon() {
        return b(vh, { size: "m" });
      },
      onClose: () => e.onClose(),
      "data-tc-transaction-sent-modal": "true",
    }),
  nk = () =>
    b(Iy, {
      get opened() {
        var e;
        return ge(() => qi() !== null)() && ((e = qi()) == null ? void 0 : e.openModal) === !0;
      },
      onClose: () => Ho(null),
      "data-tc-actions-modal-container": "true",
      get children() {
        return b(Ya, {
          get children() {
            return [
              b(Xt, {
                get when() {
                  return qi().name === "transaction-sent";
                },
                get children() {
                  return b(tk, { onClose: () => Ho(null) });
                },
              }),
              b(Xt, {
                get when() {
                  return qi().name === "transaction-canceled";
                },
                get children() {
                  return b(ek, { onClose: () => Ho(null) });
                },
              }),
              b(Xt, {
                get when() {
                  return qi().name === "confirm-transaction";
                },
                get children() {
                  return b(JA, { onClose: () => Ho(null) });
                },
              }),
            ];
          },
        });
      },
    }),
  rk = (e) => {
    const t = IT(jE, It.language);
    return (
      vE(),
      gE(),
      b($y.Provider, {
        value: t,
        get children() {
          return b(So.Provider, {
            get value() {
              return e.tonConnectUI;
            },
            get children() {
              return b(Xa.Provider, {
                get value() {
                  return It.connector;
                },
                get children() {
                  return [
                    b(lE, {}),
                    b(sE, {
                      theme: qE,
                      get children() {
                        return [
                          b(Ge, {
                            get when() {
                              return It.buttonRootId;
                            },
                            get children() {
                              return b(Cy, {
                                get mount() {
                                  return document.getElementById(It.buttonRootId);
                                },
                                get children() {
                                  return b(O_, {});
                                },
                              });
                            },
                          }),
                          b(Oa, {
                            component: Br,
                            get children() {
                              return [b(YA, {}), b(nk, {})];
                            },
                          }),
                        ];
                      },
                    }),
                  ];
                },
              });
            },
          });
        },
      })
    );
  },
  ri = {
    openWalletsModal: () => void setTimeout(() => b0(!0)),
    closeWalletsModal: () => void setTimeout(() => b0(!1)),
    setAction: (e) => void setTimeout(() => Ho(e)),
    clearAction: () => void setTimeout(() => Ho(null)),
    getSelectedWalletInfo: () => EE(),
    removeSelectedWalletInfo: () => On(null),
    renderApp: (e, t) => Fb(() => b(rk, { tonConnectUI: t }), document.getElementById(e)),
  };
class ik {
  constructor(t) {
    if (
      (gn(this, "walletInfoStorage", new xE()),
      gn(this, "preferredWalletStorage", new CE()),
      gn(this, "connector"),
      gn(this, "walletInfo", null),
      gn(this, "systemThemeChangeUnsubscribe", null),
      gn(this, "actionsConfiguration"),
      gn(this, "walletsList"),
      gn(this, "connectRequestParametersCallback"),
      gn(this, "connectionRestored", Promise.resolve(!1)),
      t && "connector" in t && t.connector)
    )
      this.connector = t.connector;
    else if (t && "manifestUrl" in t && t.manifestUrl) this.connector = new fo({ manifestUrl: t.manifestUrl });
    else throw new lr("You have to specify a `manifestUrl` or a `connector` in the options.");
    (this.walletsList = this.getWallets()), this.walletsList.then((i) => yE(N_(i.map((o) => o.imageUrl))));
    const n = this.normalizeWidgetRoot(t == null ? void 0 : t.widgetRootId);
    this.subscribeToWalletChange(),
      (t == null ? void 0 : t.restoreConnection) !== !1 &&
        (this.connectionRestored = new Promise((i) =>
          Ln(this, null, function* () {
            yield this.connector.restoreConnection(), this.connector.connected || this.walletInfoStorage.removeWalletInfo(), i(this.connector.connected);
          })
        )),
      (this.uiOptions = Ti(t, { uiPreferences: { theme: "SYSTEM" } }));
    const r = this.preferredWalletStorage.getPreferredWalletAppName();
    Ml({ connector: this.connector, preferredWalletAppName: r }), ri.renderApp(n, this);
  }
  static getWallets() {
    return fo.getWallets();
  }
  get connected() {
    return this.connector.connected;
  }
  get account() {
    return this.connector.account;
  }
  get wallet() {
    return this.connector.wallet ? ht(ht({}, this.connector.wallet), this.walletInfo) : null;
  }
  set uiOptions(t) {
    var n, r, i, o, s;
    this.checkButtonRootExist(t.buttonRootId),
      (this.actionsConfiguration = t.actionsConfiguration),
      (n = t.uiPreferences) != null && n.theme
        ? ((r = t.uiPreferences) == null ? void 0 : r.theme) !== "SYSTEM"
          ? ((i = this.systemThemeChangeUnsubscribe) == null || i.call(this), Vf(t.uiPreferences.theme, t.uiPreferences.colorsSet))
          : (Vf(fE(), t.uiPreferences.colorsSet), this.systemThemeChangeUnsubscribe || (this.systemThemeChangeUnsubscribe = dE(Vf)))
        : (o = t.uiPreferences) != null && o.colorsSet && ZE(t.uiPreferences.colorsSet),
      (s = t.uiPreferences) != null && s.borderRadius && YE(t.uiPreferences.borderRadius),
      Ml((a) => {
        var l, u;
        const c = Ti(
          ht(
            ht(
              ht(
                ht({}, t.language && { language: t.language }),
                !!((l = t.actionsConfiguration) != null && l.returnStrategy) && { returnStrategy: t.actionsConfiguration.returnStrategy }
              ),
              !!((u = t.actionsConfiguration) != null && u.twaReturnUrl) && { twaReturnUrl: t.actionsConfiguration.twaReturnUrl }
            ),
            !!t.walletsListConfiguration && { walletsListConfiguration: t.walletsListConfiguration }
          ),
          ds(a)
        );
        return t.buttonRootId !== void 0 && (c.buttonRootId = t.buttonRootId), c;
      });
  }
  setConnectRequestParameters(t) {
    var n;
    Ml({ connectRequestParameters: t }),
      ((t == null ? void 0 : t.state) === "ready" || !t) && ((n = this.connectRequestParametersCallback) == null || n.call(this, t == null ? void 0 : t.value));
  }
  getWallets() {
    return Ln(this, null, function* () {
      return this.connector.getWallets();
    });
  }
  onStatusChange(t, n) {
    return this.connector.onStatusChange(
      (r) =>
        Ln(this, null, function* () {
          if (r) {
            const i = yield this.getSelectedWalletInfo(r);
            t(ht(ht({}, r), i || this.walletInfoStorage.getWalletInfo()));
          } else t(r);
        }),
      n
    );
  }
  connectWallet() {
    return Ln(this, null, function* () {
      const n = (yield this.getWallets()).find(oy);
      if (n) {
        const r = (o) => {
            On(n), this.connector.connect({ jsBridgeKey: n.jsBridgeKey }, o);
          },
          i = It.connectRequestParameters;
        (i == null ? void 0 : i.state) === "loading" ? (this.connectRequestParametersCallback = r) : r(i == null ? void 0 : i.value);
      } else ri.openWalletsModal();
      return new Promise((r, i) => {
        const o = this.connector.onStatusChange(
          (s) =>
            Ln(this, null, function* () {
              if ((o(), s)) {
                const a = yield this.getSelectedWalletInfo(s);
                r(ht(ht({}, s), a || this.walletInfoStorage.getWalletInfo()));
              } else i(new lr("Wallet was not connected"));
            }),
          i
        );
      });
    });
  }
  disconnect() {
    return ri.clearAction(), ri.removeSelectedWalletInfo(), this.walletInfoStorage.removeWalletInfo(), this.connector.disconnect();
  }
  sendTransaction(t, n) {
    return Ln(this, null, function* () {
      if (!this.connected) throw new lr("Connect wallet to send a transaction.");
      const { notifications: r, modals: i, returnStrategy: o, twaReturnUrl: s, skipRedirectToWallet: a } = this.getModalsAndNotificationsConfiguration(n),
        l = wE().os === "ios",
        u = (a === "ios" && l) || a === "always";
      this.walletInfo &&
        "universalLink" in this.walletInfo &&
        this.walletInfo.openMethod === "universal-link" &&
        !u &&
        (La(this.walletInfo.universalLink) ? Ey(this.walletInfo.universalLink, { returnStrategy: o, twaReturnUrl: s }) : Ri(Xn(this.walletInfo.universalLink, o))),
        ri.setAction({ name: "confirm-transaction", showNotification: r.includes("before"), openModal: i.includes("before") });
      try {
        const c = yield this.connector.sendTransaction(t);
        return ri.setAction({ name: "transaction-sent", showNotification: r.includes("success"), openModal: i.includes("success") }), c;
      } catch (c) {
        throw (
          (ri.setAction({ name: "transaction-canceled", showNotification: r.includes("error"), openModal: i.includes("error") }),
          c instanceof ot ? c : (console.error(c), new lr("Unhandled error:" + c)))
        );
      }
    });
  }
  subscribeToWalletChange() {
    this.connector.onStatusChange((t) =>
      Ln(this, null, function* () {
        var n;
        t
          ? (yield this.updateWalletInfo(t), this.setPreferredWalletAppName(((n = this.walletInfo) == null ? void 0 : n.appName) || t.device.appName))
          : this.walletInfoStorage.removeWalletInfo();
      })
    );
  }
  setPreferredWalletAppName(t) {
    this.preferredWalletStorage.setPreferredWalletAppName(t), Ml({ preferredWalletAppName: t });
  }
  getSelectedWalletInfo(t) {
    return Ln(this, null, function* () {
      let n = ri.getSelectedWalletInfo();
      if (!n) return null;
      let r;
      if ("name" in n) r = n;
      else {
        const o = Yy(yield this.walletsList, It.walletsListConfiguration).find((s) => Yi(s, t.device.appName));
        if (!o) throw new lr(`Cannot find WalletInfo for the '${t.device.appName}' wallet`);
        r = ht(ht({}, o), n);
      }
      return r;
    });
  }
  updateWalletInfo(t) {
    return Ln(this, null, function* () {
      const n = yield this.getSelectedWalletInfo(t);
      if (n) {
        (this.walletInfo = n), this.walletInfoStorage.setWalletInfo(n);
        return;
      }
      const r = this.walletInfoStorage.getWalletInfo();
      if (r) {
        this.walletInfo = r;
        return;
      }
      this.walletInfo = (yield this.walletsList).find((i) => Yi(i, t.device.appName)) || null;
    });
  }
  normalizeWidgetRoot(t) {
    if (!t || !document.getElementById(t)) {
      t = "tc-widget-root";
      const n = document.createElement("div");
      (n.id = t), document.body.appendChild(n);
    }
    return t;
  }
  checkButtonRootExist(t) {
    if (t != null && !document.getElementById(t)) throw new lr(`${t} element not found in the document.`);
  }
  getModalsAndNotificationsConfiguration(t) {
    var n, r, i, o, s, a;
    const l = ["before", "success", "error"];
    let u = l;
    (n = this.actionsConfiguration) != null &&
      n.notifications &&
      ((r = this.actionsConfiguration) == null ? void 0 : r.notifications) !== "all" &&
      (u = this.actionsConfiguration.notifications),
      t != null && t.notifications && (t.notifications === "all" ? (u = l) : (u = t.notifications));
    let c = ["before"];
    (i = this.actionsConfiguration) != null && i.modals && (this.actionsConfiguration.modals === "all" ? (c = l) : (c = this.actionsConfiguration.modals)),
      t != null && t.modals && (t.modals === "all" ? (c = l) : (c = t.modals));
    const f = (t == null ? void 0 : t.returnStrategy) || ((o = this.actionsConfiguration) == null ? void 0 : o.returnStrategy) || "back",
      h = (t == null ? void 0 : t.twaReturnUrl) || ((s = this.actionsConfiguration) == null ? void 0 : s.twaReturnUrl),
      p = (t == null ? void 0 : t.skipRedirectToWallet) || ((a = this.actionsConfiguration) == null ? void 0 : a.skipRedirectToWallet) || "ios";
    return { notifications: u, modals: c, returnStrategy: f, twaReturnUrl: h, skipRedirectToWallet: p };
  }
}
var ok = Object.defineProperty,
  Xu = Object.getOwnPropertySymbols,
  Xy = Object.prototype.hasOwnProperty,
  Jy = Object.prototype.propertyIsEnumerable,
  U4 = (e, t, n) => (t in e ? ok(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
  sk = (e, t) => {
    for (var n in t || (t = {})) Xy.call(t, n) && U4(e, n, t[n]);
    if (Xu) for (var n of Xu(t)) Jy.call(t, n) && U4(e, n, t[n]);
    return e;
  },
  ak = (e, t) => {
    var n = {};
    for (var r in e) Xy.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Xu) for (var r of Xu(e)) t.indexOf(r) < 0 && Jy.call(e, r) && (n[r] = e[r]);
    return n;
  },
  e5 = { exports: {} },
  Os = {};
var z4;
function lk() {
  if (z4) return Os;
  z4 = 1;
  var e = Ct,
    t = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    r = Object.prototype.hasOwnProperty,
    i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, u) {
    var c,
      f = {},
      h = null,
      p = null;
    u !== void 0 && (h = "" + u), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (c in l) r.call(l, c) && !o.hasOwnProperty(c) && (f[c] = l[c]);
    if (a && a.defaultProps) for (c in ((l = a.defaultProps), l)) f[c] === void 0 && (f[c] = l[c]);
    return { $$typeof: t, type: a, key: h, ref: p, props: f, _owner: i.current };
  }
  return (Os.Fragment = n), (Os.jsx = s), (Os.jsxs = s), Os;
}
(function (e) {
  e.exports = lk();
})(e5);
const t5 = e5.exports.jsx;
function n5() {
  return typeof window < "u";
}
function uk() {
  return !n5();
}
const r5 = V.createContext(null);
let qf = null;
const ck = (e) => {
  var t = e,
    { children: n } = t,
    r = ak(t, ["children"]);
  return n5() && !qf && (qf = new ik(r)), t5(r5.Provider, { value: qf, children: n });
};
V.memo(ck);
class Sh extends lr {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Sh.prototype);
  }
}
class bh extends Sh {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, bh.prototype);
  }
}
function fk(e) {
  if (!e) throw new bh("You should add <TonConnectUIProvider> on the top of the app to use TonConnect");
  return !0;
}
function dk() {
  const e = V.useContext(r5),
    t = V.useCallback(
      (n) => {
        e && (e.uiOptions = n);
      },
      [e]
    );
  return uk() ? [null, () => {}] : (fk(e), [e, t]);
}
const W4 = "ton-connect-button",
  hk = ({ className: e, style: t }) => {
    const [n, r] = dk();
    return V.useEffect(() => (r({ buttonRootId: W4 }), () => r({ buttonRootId: null })), [r]), t5("div", { id: W4, className: e, style: sk({ width: "fit-content" }, t) });
  };
V.memo(hk);
const H4 = (e) => {
    let t;
    const n = new Set(),
      r = (l, u) => {
        const c = typeof l == "function" ? l(t) : l;
        if (!Object.is(c, t)) {
          const f = t;
          (t = u ?? typeof c != "object" ? c : Object.assign({}, t, c)), n.forEach((h) => h(t, f));
        }
      },
      i = () => t,
      a = {
        setState: r,
        getState: i,
        subscribe: (l) => (n.add(l), () => n.delete(l)),
        destroy: () => {
          (({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }) && "production") !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
            ),
            n.clear();
        },
      };
    return (t = e(r, i, a)), a;
  },
  pk = (e) => (e ? H4(e) : H4);
var i5 = { exports: {} },
  o5 = {},
  s5 = { exports: {} },
  a5 = {};
var hs = V;
function mk(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gk = typeof Object.is == "function" ? Object.is : mk,
  vk = hs.useState,
  yk = hs.useEffect,
  wk = hs.useLayoutEffect,
  xk = hs.useDebugValue;
function Ck(e, t) {
  var n = t(),
    r = vk({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    wk(
      function () {
        (i.value = n), (i.getSnapshot = t), Yf(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    yk(
      function () {
        return (
          Yf(i) && o({ inst: i }),
          e(function () {
            Yf(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    xk(n),
    n
  );
}
function Yf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !gk(e, n);
  } catch {
    return !0;
  }
}
function Sk(e, t) {
  return t();
}
var bk = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Sk : Ck;
a5.useSyncExternalStore = hs.useSyncExternalStore !== void 0 ? hs.useSyncExternalStore : bk;
s5.exports = a5;
var Ek = s5.exports;
var Fc = V,
  Tk = Ek;
function Pk(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _k = typeof Object.is == "function" ? Object.is : Pk,
  Ak = Tk.useSyncExternalStore,
  kk = Fc.useRef,
  Lk = Fc.useEffect,
  Mk = Fc.useMemo,
  Rk = Fc.useDebugValue;
o5.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = kk(null);
  if (o.current === null) {
    var s = { hasValue: !1, value: null };
    o.current = s;
  } else s = o.current;
  o = Mk(
    function () {
      function l(p) {
        if (!u) {
          if (((u = !0), (c = p), (p = r(p)), i !== void 0 && s.hasValue)) {
            var g = s.value;
            if (i(g, p)) return (f = g);
          }
          return (f = p);
        }
        if (((g = f), _k(c, p))) return g;
        var v = r(p);
        return i !== void 0 && i(g, v) ? g : ((c = p), (f = v));
      }
      var u = !1,
        c,
        f,
        h = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        h === null
          ? void 0
          : function () {
              return l(h());
            },
      ];
    },
    [t, n, r, i]
  );
  var a = Ak(e, o[0], o[1]);
  return (
    Lk(
      function () {
        (s.hasValue = !0), (s.value = a);
      },
      [a]
    ),
    Rk(a),
    a
  );
};
i5.exports = o5;
var Ik = i5.exports;
const Ok = po(Ik),
  { useSyncExternalStoreWithSelector: Bk } = Ok;
function $k(e, t = e.getState, n) {
  const r = Bk(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
  return V.useDebugValue(r), r;
}
const K4 = (e) => {
    (({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }) && "production") !== "production" &&
      typeof e != "function" &&
      console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
    const t = typeof e == "function" ? pk(e) : e,
      n = (r, i) => $k(t, r, i);
    return Object.assign(n, t), n;
  },
  HM = (e) => (e ? K4(e) : K4);
function G4(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function Eh(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u" ? (e[n] = t[n]) : G4(t[n]) && G4(e[n]) && Object.keys(t[n]).length > 0 && Eh(e[n], t[n]);
    });
}
const l5 = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
};
function xs() {
  const e = typeof document < "u" ? document : {};
  return Eh(e, l5), e;
}
const Dk = {
  document: l5,
  navigator: { userAgent: "" },
  location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function zn() {
  const e = typeof window < "u" ? window : {};
  return Eh(e, Dk), e;
}
function Nk(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function Vk(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function M0(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function Ju() {
  return Date.now();
}
function jk(e) {
  const t = zn();
  let n;
  return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n;
}
function Fk(e, t) {
  t === void 0 && (t = "x");
  const n = zn();
  let r, i, o;
  const s = jk(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = s.transform || s.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (o = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((o = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = o.toString().split(","))),
    t === "x" && (n.WebKitCSSMatrix ? (i = o.m41) : r.length === 16 ? (i = parseFloat(r[12])) : (i = parseFloat(r[4]))),
    t === "y" && (n.WebKitCSSMatrix ? (i = o.m42) : r.length === 16 ? (i = parseFloat(r[13])) : (i = parseFloat(r[5]))),
    i || 0
  );
}
function Il(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function Uk(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Rn() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !Uk(r)) {
      const i = Object.keys(Object(r)).filter((o) => t.indexOf(o) < 0);
      for (let o = 0, s = i.length; o < s; o += 1) {
        const a = i[o],
          l = Object.getOwnPropertyDescriptor(r, a);
        l !== void 0 &&
          l.enumerable &&
          (Il(e[a]) && Il(r[a])
            ? r[a].__swiper__
              ? (e[a] = r[a])
              : Rn(e[a], r[a])
            : !Il(e[a]) && Il(r[a])
            ? ((e[a] = {}), r[a].__swiper__ ? (e[a] = r[a]) : Rn(e[a], r[a]))
            : (e[a] = r[a]));
      }
    }
  }
  return e;
}
function Ol(e, t, n) {
  e.style.setProperty(t, n);
}
function u5(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = zn(),
    o = -t.translate;
  let s = null,
    a;
  const l = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"), i.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > o ? "next" : "prev",
    c = (h, p) => (u === "next" && h >= p) || (u === "prev" && h <= p),
    f = () => {
      (a = new Date().getTime()), s === null && (s = a);
      const h = Math.max(Math.min((a - s) / l, 1), 0),
        p = 0.5 - Math.cos(h * Math.PI) / 2;
      let g = o + p * (n - o);
      if ((c(g, n) && (g = n), t.wrapperEl.scrollTo({ [r]: g }), c(g, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: g });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(f);
    };
  f();
}
function Vr(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function ec(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function R0(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : Nk(t))), n;
}
function zk(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function Wk(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function pi(e, t) {
  return zn().getComputedStyle(e, null).getPropertyValue(t);
}
function q4(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1);
    return n;
  }
}
function Hk(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function Y4(e, t, n) {
  const r = zn();
  return n
    ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) +
        parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"))
    : e.offsetWidth;
}
let Zf;
function Kk() {
  const e = zn(),
    t = xs();
  return {
    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
    touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
  };
}
function c5() {
  return Zf || (Zf = Kk()), Zf;
}
let Qf;
function Gk(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = c5(),
    r = zn(),
    i = r.navigator.platform,
    o = t || r.navigator.userAgent,
    s = { ios: !1, android: !1 },
    a = r.screen.width,
    l = r.screen.height,
    u = o.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = o.match(/(iPad).*OS\s([\d_]+)/);
  const f = o.match(/(iPod)(.*OS\s([\d_]+))?/),
    h = !c && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    p = i === "Win32";
  let g = i === "MacIntel";
  const v = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return (
    !c && g && n.touch && v.indexOf(`${a}x${l}`) >= 0 && ((c = o.match(/(Version)\/([\d.]+)/)), c || (c = [0, 1, "13_0_0"]), (g = !1)),
    u && !p && ((s.os = "android"), (s.android = !0)),
    (c || h || f) && ((s.os = "ios"), (s.ios = !0)),
    s
  );
}
function qk(e) {
  return e === void 0 && (e = {}), Qf || (Qf = Gk(e)), Qf;
}
let Xf;
function Yk() {
  const e = zn();
  let t = !1;
  function n() {
    const r = e.navigator.userAgent.toLowerCase();
    return r.indexOf("safari") >= 0 && r.indexOf("chrome") < 0 && r.indexOf("android") < 0;
  }
  if (n()) {
    const r = String(e.navigator.userAgent);
    if (r.includes("Version/")) {
      const [i, o] = r
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((s) => Number(s));
      t = i < 16 || (i === 16 && o < 2);
    }
  }
  return { isSafari: t || n(), needPerspectiveFix: t, isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent) };
}
function Zk() {
  return Xf || (Xf = Yk()), Xf;
}
function Qk(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = zn();
  let o = null,
    s = null;
  const a = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    l = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((o = new ResizeObserver((f) => {
          s = i.requestAnimationFrame(() => {
            const { width: h, height: p } = t;
            let g = h,
              v = p;
            f.forEach((P) => {
              let { contentBoxSize: y, contentRect: w, target: x } = P;
              (x && x !== t.el) || ((g = w ? w.width : (y[0] || y).inlineSize), (v = w ? w.height : (y[0] || y).blockSize));
            }),
              (g !== h || v !== p) && a();
          });
        })),
        o.observe(t.el));
    },
    u = () => {
      s && i.cancelAnimationFrame(s), o && o.unobserve && t.el && (o.unobserve(t.el), (o = null));
    },
    c = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      l();
      return;
    }
    i.addEventListener("resize", a), i.addEventListener("orientationchange", c);
  }),
    n("destroy", () => {
      u(), i.removeEventListener("resize", a), i.removeEventListener("orientationchange", c);
    });
}
function Xk(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const o = [],
    s = zn(),
    a = function (c, f) {
      f === void 0 && (f = {});
      const h = s.MutationObserver || s.WebkitMutationObserver,
        p = new h((g) => {
          if (t.__preventObserver__) return;
          if (g.length === 1) {
            i("observerUpdate", g[0]);
            return;
          }
          const v = function () {
            i("observerUpdate", g[0]);
          };
          s.requestAnimationFrame ? s.requestAnimationFrame(v) : s.setTimeout(v, 0);
        });
      p.observe(c, {
        attributes: typeof f.attributes > "u" ? !0 : f.attributes,
        childList: typeof f.childList > "u" ? !0 : f.childList,
        characterData: typeof f.characterData > "u" ? !0 : f.characterData,
      }),
        o.push(p);
    },
    l = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = Hk(t.hostEl);
          for (let f = 0; f < c.length; f += 1) a(c[f]);
        }
        a(t.hostEl, { childList: t.params.observeSlideChildren }), a(t.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      o.forEach((c) => {
        c.disconnect();
      }),
        o.splice(0, o.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), r("init", l), r("destroy", u);
}
var Jk = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((o) => {
        r.eventsListeners[o] || (r.eventsListeners[o] = []), r.eventsListeners[o][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++) s[a] = arguments[a];
      t.apply(r, s);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, o) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) && n.eventsListeners[r].splice(o, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    return (
      typeof o[0] == "string" || Array.isArray(o[0]) ? ((t = o[0]), (n = o.slice(1, o.length)), (r = e)) : ((t = o[0].events), (n = o[0].data), (r = o[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((l) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(r, [l, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[l] &&
            e.eventsListeners[l].forEach((u) => {
              u.apply(r, n);
            });
      }),
      e
    );
  },
};
function eL() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null ? (t = e.params.width) : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null ? (n = e.params.height) : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t = t - parseInt(pi(r, "padding-left") || 0, 10) - parseInt(pi(r, "padding-right") || 0, 10)),
      (n = n - parseInt(pi(r, "padding-top") || 0, 10) - parseInt(pi(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }));
}
function tL() {
  const e = this;
  function t(I, M) {
    return parseFloat(I.getPropertyValue(e.getDirectionLabel(M)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: o, rtlTranslate: s, wrongRTL: a } = e,
    l = e.virtual && n.virtual.enabled,
    u = l ? e.virtual.slides.length : e.slides.length,
    c = Vr(i, `.${e.params.slideClass}, swiper-slide`),
    f = l ? e.virtual.slides.length : c.length;
  let h = [];
  const p = [],
    g = [];
  let v = n.slidesOffsetBefore;
  typeof v == "function" && (v = n.slidesOffsetBefore.call(e));
  let P = n.slidesOffsetAfter;
  typeof P == "function" && (P = n.slidesOffsetAfter.call(e));
  const y = e.snapGrid.length,
    w = e.slidesGrid.length;
  let x = n.spaceBetween,
    T = -v,
    _ = 0,
    O = 0;
  if (typeof o > "u") return;
  typeof x == "string" && x.indexOf("%") >= 0 ? (x = (parseFloat(x.replace("%", "")) / 100) * o) : typeof x == "string" && (x = parseFloat(x)),
    (e.virtualSize = -x),
    c.forEach((I) => {
      s ? (I.style.marginLeft = "") : (I.style.marginRight = ""), (I.style.marginBottom = ""), (I.style.marginTop = "");
    }),
    n.centeredSlides && n.cssMode && (Ol(r, "--swiper-centered-offset-before", ""), Ol(r, "--swiper-centered-offset-after", ""));
  const B = n.grid && n.grid.rows > 1 && e.grid;
  B ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
  let A;
  const k = n.slidesPerView === "auto" && n.breakpoints && Object.keys(n.breakpoints).filter((I) => typeof n.breakpoints[I].slidesPerView < "u").length > 0;
  for (let I = 0; I < f; I += 1) {
    A = 0;
    let M;
    if ((c[I] && (M = c[I]), B && e.grid.updateSlide(I, M, c), !(c[I] && pi(M, "display") === "none"))) {
      if (n.slidesPerView === "auto") {
        k && (c[I].style[e.getDirectionLabel("width")] = "");
        const L = getComputedStyle(M),
          N = M.style.transform,
          j = M.style.webkitTransform;
        if ((N && (M.style.transform = "none"), j && (M.style.webkitTransform = "none"), n.roundLengths)) A = e.isHorizontal() ? Y4(M, "width", !0) : Y4(M, "height", !0);
        else {
          const W = t(L, "width"),
            oe = t(L, "padding-left"),
            ye = t(L, "padding-right"),
            J = t(L, "margin-left"),
            ne = t(L, "margin-right"),
            se = L.getPropertyValue("box-sizing");
          if (se && se === "border-box") A = W + J + ne;
          else {
            const { clientWidth: pe, offsetWidth: Oe } = M;
            A = W + oe + ye + J + ne + (Oe - pe);
          }
        }
        N && (M.style.transform = N), j && (M.style.webkitTransform = j), n.roundLengths && (A = Math.floor(A));
      } else (A = (o - (n.slidesPerView - 1) * x) / n.slidesPerView), n.roundLengths && (A = Math.floor(A)), c[I] && (c[I].style[e.getDirectionLabel("width")] = `${A}px`);
      c[I] && (c[I].swiperSlideSize = A),
        g.push(A),
        n.centeredSlides
          ? ((T = T + A / 2 + _ / 2 + x),
            _ === 0 && I !== 0 && (T = T - o / 2 - x),
            I === 0 && (T = T - o / 2 - x),
            Math.abs(T) < 1 / 1e3 && (T = 0),
            n.roundLengths && (T = Math.floor(T)),
            O % n.slidesPerGroup === 0 && h.push(T),
            p.push(T))
          : (n.roundLengths && (T = Math.floor(T)), (O - Math.min(e.params.slidesPerGroupSkip, O)) % e.params.slidesPerGroup === 0 && h.push(T), p.push(T), (T = T + A + x)),
        (e.virtualSize += A + x),
        (_ = A),
        (O += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, o) + P),
    s && a && (n.effect === "slide" || n.effect === "coverflow") && (r.style.width = `${e.virtualSize + x}px`),
    n.setWrapperSize && (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + x}px`),
    B && e.grid.updateWrapperSize(A, h),
    !n.centeredSlides)
  ) {
    const I = [];
    for (let M = 0; M < h.length; M += 1) {
      let L = h[M];
      n.roundLengths && (L = Math.floor(L)), h[M] <= e.virtualSize - o && I.push(L);
    }
    (h = I), Math.floor(e.virtualSize - o) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - o);
  }
  if (l && n.loop) {
    const I = g[0] + x;
    if (n.slidesPerGroup > 1) {
      const M = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup),
        L = I * n.slidesPerGroup;
      for (let N = 0; N < M; N += 1) h.push(h[h.length - 1] + L);
    }
    for (let M = 0; M < e.virtual.slidesBefore + e.virtual.slidesAfter; M += 1)
      n.slidesPerGroup === 1 && h.push(h[h.length - 1] + I), p.push(p[p.length - 1] + I), (e.virtualSize += I);
  }
  if ((h.length === 0 && (h = [0]), x !== 0)) {
    const I = e.isHorizontal() && s ? "marginLeft" : e.getDirectionLabel("marginRight");
    c.filter((M, L) => (!n.cssMode || n.loop ? !0 : L !== c.length - 1)).forEach((M) => {
      M.style[I] = `${x}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let I = 0;
    g.forEach((L) => {
      I += L + (x || 0);
    }),
      (I -= x);
    const M = I - o;
    h = h.map((L) => (L <= 0 ? -v : L > M ? M + P : L));
  }
  if (n.centerInsufficientSlides) {
    let I = 0;
    if (
      (g.forEach((M) => {
        I += M + (x || 0);
      }),
      (I -= x),
      I < o)
    ) {
      const M = (o - I) / 2;
      h.forEach((L, N) => {
        h[N] = L - M;
      }),
        p.forEach((L, N) => {
          p[N] = L + M;
        });
    }
  }
  if ((Object.assign(e, { slides: c, snapGrid: h, slidesGrid: p, slidesSizesGrid: g }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)) {
    Ol(r, "--swiper-centered-offset-before", `${-h[0]}px`), Ol(r, "--swiper-centered-offset-after", `${e.size / 2 - g[g.length - 1] / 2}px`);
    const I = -e.snapGrid[0],
      M = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((L) => L + I)), (e.slidesGrid = e.slidesGrid.map((L) => L + M));
  }
  if (
    (f !== u && e.emit("slidesLengthChange"),
    h.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
    p.length !== w && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !l && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const I = `${n.containerModifierClass}backface-hidden`,
      M = e.el.classList.contains(I);
    f <= n.maxBackfaceHiddenSlides ? M || e.el.classList.add(I) : M && e.el.classList.remove(I);
  }
}
function nL(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    o;
  typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
  const s = (a) => (r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (o = 0; o < Math.ceil(t.params.slidesPerView); o += 1) {
        const a = t.activeIndex + o;
        if (a > t.slides.length && !r) break;
        n.push(s(a));
      }
  else n.push(s(t.activeIndex));
  for (o = 0; o < n.length; o += 1)
    if (typeof n[o] < "u") {
      const a = n[o].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function rL() {
  const e = this,
    t = e.slides,
    n = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0;
  for (let r = 0; r < t.length; r += 1) t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment();
}
function iL(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: o } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let s = -e;
  i && (s = e),
    r.forEach((l) => {
      l.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  let a = n.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0 ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size) : typeof a == "string" && (a = parseFloat(a));
  for (let l = 0; l < r.length; l += 1) {
    const u = r[l];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
    const f = (s + (n.centeredSlides ? t.minTranslate() : 0) - c) / (u.swiperSlideSize + a),
      h = (s - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) / (u.swiperSlideSize + a),
      p = -(s - c),
      g = p + t.slidesSizesGrid[l],
      v = p >= 0 && p <= t.size - t.slidesSizesGrid[l];
    ((p >= 0 && p < t.size - 1) || (g > 1 && g <= t.size) || (p <= 0 && g >= t.size)) &&
      (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(l), r[l].classList.add(n.slideVisibleClass)),
      v && r[l].classList.add(n.slideFullyVisibleClass),
      (u.progress = i ? -f : f),
      (u.originalProgress = i ? -h : h);
  }
}
function oL(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: o, isEnd: s, progressLoop: a } = t;
  const l = o,
    u = s;
  if (r === 0) (i = 0), (o = !0), (s = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const c = Math.abs(e - t.minTranslate()) < 1,
      f = Math.abs(e - t.maxTranslate()) < 1;
    (o = c || i <= 0), (s = f || i >= 1), c && (i = 0), f && (i = 1);
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      f = t.getSlideIndexByData(t.slides.length - 1),
      h = t.slidesGrid[c],
      p = t.slidesGrid[f],
      g = t.slidesGrid[t.slidesGrid.length - 1],
      v = Math.abs(e);
    v >= h ? (a = (v - h) / g) : (a = (v + g - p) / g), a > 1 && (a -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: a, isBeginning: o, isEnd: s }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) && t.updateSlidesProgress(e),
    o && !l && t.emit("reachBeginning toEdge"),
    s && !u && t.emit("reachEnd toEdge"),
    ((l && !o) || (u && !s)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
function sL() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    o = e.virtual && n.virtual.enabled,
    s = e.grid && n.grid && n.grid.rows > 1,
    a = (f) => Vr(r, `.${n.slideClass}${f}, swiper-slide${f}`)[0];
  t.forEach((f) => {
    f.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
  });
  let l, u, c;
  if (o)
    if (n.loop) {
      let f = i - e.virtual.slidesBefore;
      f < 0 && (f = e.virtual.slides.length + f), f >= e.virtual.slides.length && (f -= e.virtual.slides.length), (l = a(`[data-swiper-slide-index="${f}"]`));
    } else l = a(`[data-swiper-slide-index="${i}"]`);
  else s ? ((l = t.filter((f) => f.column === i)[0]), (c = t.filter((f) => f.column === i + 1)[0]), (u = t.filter((f) => f.column === i - 1)[0])) : (l = t[i]);
  l &&
    (l.classList.add(n.slideActiveClass),
    s
      ? (c && c.classList.add(n.slideNextClass), u && u.classList.add(n.slidePrevClass))
      : ((c = Wk(l, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !c && (c = t[0]),
        c && c.classList.add(n.slideNextClass),
        (u = zk(l, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !u === 0 && (u = t[t.length - 1]),
        u && u.classList.add(n.slidePrevClass))),
    e.emitSlidesClasses();
}
const Jl = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot && ((i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)), i && i.remove());
            })),
        i && i.remove();
    }
  },
  Jf = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  I0 = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const s = i,
        a = [s - t];
      a.push(...Array.from({ length: t }).map((l, u) => s + r + u)),
        e.slides.forEach((l, u) => {
          a.includes(l.column) && Jf(e, u);
        });
      return;
    }
    const o = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let s = i - t; s <= o + t; s += 1) {
        const a = ((s % n) + n) % n;
        (a < i || a > o) && Jf(e, a);
      }
    else for (let s = Math.max(i - t, 0); s <= Math.min(o + t, n - 1); s += 1) s !== i && (s > o || s < i) && Jf(e, s);
  };
function aL(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let o = 0; o < t.length; o += 1)
    typeof t[o + 1] < "u" ? (r >= t[o] && r < t[o + 1] - (t[o + 1] - t[o]) / 2 ? (i = o) : r >= t[o] && r < t[o + 1] && (i = o + 1)) : r >= t[o] && (i = o);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function lL(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: o, realIndex: s, snapIndex: a } = t;
  let l = e,
    u;
  const c = (p) => {
    let g = p - t.virtual.slidesBefore;
    return g < 0 && (g = t.virtual.slides.length + g), g >= t.virtual.slides.length && (g -= t.virtual.slides.length), g;
  };
  if ((typeof l > "u" && (l = aL(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
  else {
    const p = Math.min(i.slidesPerGroupSkip, l);
    u = p + Math.floor((l - p) / i.slidesPerGroup);
  }
  if ((u >= r.length && (u = r.length - 1), l === o && !t.params.loop)) {
    u !== a && ((t.snapIndex = u), t.emit("snapIndexChange"));
    return;
  }
  if (l === o && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(l);
    return;
  }
  const f = t.grid && i.grid && i.grid.rows > 1;
  let h;
  if (t.virtual && i.virtual.enabled && i.loop) h = c(l);
  else if (f) {
    const p = t.slides.filter((v) => v.column === l)[0];
    let g = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(g) && (g = Math.max(t.slides.indexOf(p), 0)), (h = Math.floor(g / i.grid.rows));
  } else if (t.slides[l]) {
    const p = t.slides[l].getAttribute("data-swiper-slide-index");
    p ? (h = parseInt(p, 10)) : (h = l);
  } else h = l;
  Object.assign(t, { previousSnapIndex: a, snapIndex: u, previousRealIndex: s, realIndex: h, previousIndex: o, activeIndex: l }),
    t.initialized && I0(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && (s !== h && t.emit("realIndexChange"), t.emit("slideChange"));
}
function uL(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
      !i && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (i = a);
    });
  let o = !1,
    s;
  if (i) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === i) {
        (o = !0), (s = a);
        break;
      }
  }
  if (i && o) (n.clickedSlide = i), n.virtual && n.params.virtual.enabled ? (n.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10)) : (n.clickedIndex = s);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide && n.clickedIndex !== void 0 && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide();
}
var cL = {
  updateSize: eL,
  updateSlides: tL,
  updateAutoHeight: nL,
  updateSlidesOffset: rL,
  updateSlidesProgress: iL,
  updateProgress: oL,
  updateSlidesClasses: sL,
  updateActiveIndex: lL,
  updateClickedSlide: uL,
};
function fL(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: o } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let s = Fk(o, e);
  return (s += t.cssOverflowAdjustment()), r && (s = -s), s || 0;
}
function dL(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: o, progress: s } = n;
  let a = 0,
    l = 0;
  const u = 0;
  n.isHorizontal() ? (a = r ? -e : e) : (l = e),
    i.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : l),
    i.cssMode
      ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -a : -l)
      : i.virtualTranslate || (n.isHorizontal() ? (a -= n.cssOverflowAdjustment()) : (l -= n.cssOverflowAdjustment()), (o.style.transform = `translate3d(${a}px, ${l}px, ${u}px)`));
  let c;
  const f = n.maxTranslate() - n.minTranslate();
  f === 0 ? (c = 0) : (c = (e - n.minTranslate()) / f), c !== s && n.updateProgress(e), n.emit("setTranslate", n.translate, t);
}
function hL() {
  return -this.snapGrid[0];
}
function pL() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function mL(e, t, n, r, i) {
  e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), n === void 0 && (n = !0), r === void 0 && (r = !0);
  const o = this,
    { params: s, wrapperEl: a } = o;
  if (o.animating && s.preventInteractionOnTransition) return !1;
  const l = o.minTranslate(),
    u = o.maxTranslate();
  let c;
  if ((r && e > l ? (c = l) : r && e < u ? (c = u) : (c = e), o.updateProgress(c), s.cssMode)) {
    const f = o.isHorizontal();
    if (t === 0) a[f ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!o.support.smoothScroll) return u5({ swiper: o, targetPosition: -c, side: f ? "left" : "top" }), !0;
      a.scrollTo({ [f ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (o.setTransition(0), o.setTranslate(c), n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionEnd")))
      : (o.setTransition(t),
        o.setTranslate(c),
        n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionStart")),
        o.animating ||
          ((o.animating = !0),
          o.onTranslateToWrapperTransitionEnd ||
            (o.onTranslateToWrapperTransitionEnd = function (h) {
              !o ||
                o.destroyed ||
                (h.target === this &&
                  (o.wrapperEl.removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd),
                  (o.onTranslateToWrapperTransitionEnd = null),
                  delete o.onTranslateToWrapperTransitionEnd,
                  n && o.emit("transitionEnd")));
            }),
          o.wrapperEl.addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd))),
    !0
  );
}
var gL = { getTranslate: fL, setTranslate: dL, minTranslate: hL, maxTranslate: pL, translateTo: mL };
function vL(e, t) {
  const n = this;
  n.params.cssMode || ((n.wrapperEl.style.transitionDuration = `${e}ms`), (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")), n.emit("setTransition", e, t);
}
function f5(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: o, previousIndex: s } = t;
  let a = r;
  if ((a || (o > s ? (a = "next") : o < s ? (a = "prev") : (a = "reset")), t.emit(`transition${i}`), n && o !== s)) {
    if (a === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`), a === "next" ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
  }
}
function yL(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode || (r.autoHeight && n.updateAutoHeight(), f5({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function wL(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1), !r.cssMode && (n.setTransition(0), f5({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var xL = { setTransition: vL, transitionStart: yL, transitionEnd: wL };
function CL(e, t, n, r, i) {
  e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), n === void 0 && (n = !0), typeof e == "string" && (e = parseInt(e, 10));
  const o = this;
  let s = e;
  s < 0 && (s = 0);
  const { params: a, snapGrid: l, slidesGrid: u, previousIndex: c, activeIndex: f, rtlTranslate: h, wrapperEl: p, enabled: g } = o;
  if ((o.animating && a.preventInteractionOnTransition) || (!g && !r && !i)) return !1;
  const v = Math.min(o.params.slidesPerGroupSkip, s);
  let P = v + Math.floor((s - v) / o.params.slidesPerGroup);
  P >= l.length && (P = l.length - 1);
  const y = -l[P];
  if (a.normalizeSlideIndex)
    for (let x = 0; x < u.length; x += 1) {
      const T = -Math.floor(y * 100),
        _ = Math.floor(u[x] * 100),
        O = Math.floor(u[x + 1] * 100);
      typeof u[x + 1] < "u" ? (T >= _ && T < O - (O - _) / 2 ? (s = x) : T >= _ && T < O && (s = x + 1)) : T >= _ && (s = x);
    }
  if (
    o.initialized &&
    s !== f &&
    ((!o.allowSlideNext && (h ? y > o.translate && y > o.minTranslate() : y < o.translate && y < o.minTranslate())) ||
      (!o.allowSlidePrev && y > o.translate && y > o.maxTranslate() && (f || 0) !== s))
  )
    return !1;
  s !== (c || 0) && n && o.emit("beforeSlideChangeStart"), o.updateProgress(y);
  let w;
  if ((s > f ? (w = "next") : s < f ? (w = "prev") : (w = "reset"), (h && -y === o.translate) || (!h && y === o.translate)))
    return (
      o.updateActiveIndex(s),
      a.autoHeight && o.updateAutoHeight(),
      o.updateSlidesClasses(),
      a.effect !== "slide" && o.setTranslate(y),
      w !== "reset" && (o.transitionStart(n, w), o.transitionEnd(n, w)),
      !1
    );
  if (a.cssMode) {
    const x = o.isHorizontal(),
      T = h ? y : -y;
    if (t === 0) {
      const _ = o.virtual && o.params.virtual.enabled;
      _ && ((o.wrapperEl.style.scrollSnapType = "none"), (o._immediateVirtual = !0)),
        _ && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0
          ? ((o._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              p[x ? "scrollLeft" : "scrollTop"] = T;
            }))
          : (p[x ? "scrollLeft" : "scrollTop"] = T),
        _ &&
          requestAnimationFrame(() => {
            (o.wrapperEl.style.scrollSnapType = ""), (o._immediateVirtual = !1);
          });
    } else {
      if (!o.support.smoothScroll) return u5({ swiper: o, targetPosition: T, side: x ? "left" : "top" }), !0;
      p.scrollTo({ [x ? "left" : "top"]: T, behavior: "smooth" });
    }
    return !0;
  }
  return (
    o.setTransition(t),
    o.setTranslate(y),
    o.updateActiveIndex(s),
    o.updateSlidesClasses(),
    o.emit("beforeTransitionStart", t, r),
    o.transitionStart(n, w),
    t === 0
      ? o.transitionEnd(n, w)
      : o.animating ||
        ((o.animating = !0),
        o.onSlideToWrapperTransitionEnd ||
          (o.onSlideToWrapperTransitionEnd = function (T) {
            !o ||
              o.destroyed ||
              (T.target === this &&
                (o.wrapperEl.removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd),
                (o.onSlideToWrapperTransitionEnd = null),
                delete o.onSlideToWrapperTransitionEnd,
                o.transitionEnd(n, w)));
          }),
        o.wrapperEl.addEventListener("transitionend", o.onSlideToWrapperTransitionEnd)),
    !0
  );
}
function SL(e, t, n, r) {
  e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), n === void 0 && (n = !0), typeof e == "string" && (e = parseInt(e, 10));
  const i = this,
    o = i.grid && i.params.grid && i.params.grid.rows > 1;
  let s = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) s = s + i.virtual.slidesBefore;
    else {
      let a;
      if (o) {
        const h = s * i.params.grid.rows;
        a = i.slides.filter((p) => p.getAttribute("data-swiper-slide-index") * 1 === h)[0].column;
      } else a = i.getSlideIndexByData(s);
      const l = o ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
        { centeredSlides: u } = i.params;
      let c = i.params.slidesPerView;
      c === "auto" ? (c = i.slidesPerViewDynamic()) : ((c = Math.ceil(parseFloat(i.params.slidesPerView, 10))), u && c % 2 === 0 && (c = c + 1));
      let f = l - a < c;
      if ((u && (f = f || a < Math.ceil(c / 2)), f)) {
        const h = u ? (a < i.activeIndex ? "prev" : "next") : a - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
        i.loopFix({ direction: h, slideTo: !0, activeSlideIndex: h === "next" ? a + 1 : a - l + 1, slideRealIndex: h === "next" ? i.realIndex : void 0 });
      }
      if (o) {
        const h = s * i.params.grid.rows;
        s = i.slides.filter((p) => p.getAttribute("data-swiper-slide-index") * 1 === h)[0].column;
      } else s = i.getSlideIndexByData(s);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(s, t, n, r);
    }),
    i
  );
}
function bL(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: o, animating: s } = r;
  if (!i) return r;
  let a = o.slidesPerGroup;
  o.slidesPerView === "auto" && o.slidesPerGroup === 1 && o.slidesPerGroupAuto && (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const l = r.activeIndex < o.slidesPerGroupSkip ? 1 : a,
    u = r.virtual && o.virtual.enabled;
  if (o.loop) {
    if (s && !u && o.loopPreventsSliding) return !1;
    if ((r.loopFix({ direction: "next" }), (r._clientLeft = r.wrapperEl.clientLeft), r.activeIndex === r.slides.length - 1 && o.cssMode))
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + l, e, t, n);
        }),
        !0
      );
  }
  return o.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + l, e, t, n);
}
function EL(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this,
    { params: i, snapGrid: o, slidesGrid: s, rtlTranslate: a, enabled: l, animating: u } = r;
  if (!l) return r;
  const c = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !c && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const f = a ? r.translate : -r.translate;
  function h(y) {
    return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y);
  }
  const p = h(f),
    g = o.map((y) => h(y));
  let v = o[g.indexOf(p) - 1];
  if (typeof v > "u" && i.cssMode) {
    let y;
    o.forEach((w, x) => {
      p >= w && (y = x);
    }),
      typeof y < "u" && (v = o[y > 0 ? y - 1 : y]);
  }
  let P = 0;
  if (
    (typeof v < "u" &&
      ((P = s.indexOf(v)),
      P < 0 && (P = r.activeIndex - 1),
      i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && ((P = P - r.slidesPerViewDynamic("previous", !0) + 1), (P = Math.max(P, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const y = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
    return r.slideTo(y, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(P, e, t, n);
      }),
      !0
    );
  return r.slideTo(P, e, t, n);
}
function TL(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this;
  return r.slideTo(r.activeIndex, e, t, n);
}
function PL(e, t, n, r) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  const i = this;
  let o = i.activeIndex;
  const s = Math.min(i.params.slidesPerGroupSkip, o),
    a = s + Math.floor((o - s) / i.params.slidesPerGroup),
    l = i.rtlTranslate ? i.translate : -i.translate;
  if (l >= i.snapGrid[a]) {
    const u = i.snapGrid[a],
      c = i.snapGrid[a + 1];
    l - u > (c - u) * r && (o += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[a - 1],
      c = i.snapGrid[a];
    l - u <= (c - u) * r && (o -= i.params.slidesPerGroup);
  }
  return (o = Math.max(o, 0)), (o = Math.min(o, i.slidesGrid.length - 1)), i.slideTo(o, e, t, n);
}
function _L() {
  const e = this,
    { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    o;
  const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (o = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 || i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(Vr(n, `${s}[data-swiper-slide-index="${o}"]`)[0])),
            M0(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(Vr(n, `${s}[data-swiper-slide-index="${o}"]`)[0])),
          M0(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var AL = { slideTo: CL, slideToLoop: SL, slideNext: bL, slidePrev: EL, slideReset: TL, slideToClosest: PL, slideToClickedSlide: _L };
function kL(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      Vr(r, `.${n.slideClass}, swiper-slide`).forEach((f, h) => {
        f.setAttribute("data-swiper-slide-index", h);
      });
    },
    o = t.grid && n.grid && n.grid.rows > 1,
    s = n.slidesPerGroup * (o ? n.grid.rows : 1),
    a = t.slides.length % s !== 0,
    l = o && t.slides.length % n.grid.rows !== 0,
    u = (c) => {
      for (let f = 0; f < c; f += 1) {
        const h = t.isElement ? R0("swiper-slide", [n.slideBlankClass]) : R0("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(h);
      }
    };
  if (a) {
    if (n.loopAddBlankSlides) {
      const c = s - (t.slides.length % s);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      ec(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (l) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      ec(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  t.loopFix({ slideRealIndex: e, direction: n.centeredSlides ? void 0 : "next" });
}
function LL(e) {
  let { slideRealIndex: t, slideTo: n = !0, direction: r, setTranslate: i, activeSlideIndex: o, byController: s, byMousewheel: a } = e === void 0 ? {} : e;
  const l = this;
  if (!l.params.loop) return;
  l.emit("beforeLoopFix");
  const { slides: u, allowSlidePrev: c, allowSlideNext: f, slidesEl: h, params: p } = l,
    { centeredSlides: g } = p;
  if (((l.allowSlidePrev = !0), (l.allowSlideNext = !0), l.virtual && p.virtual.enabled)) {
    n &&
      (!p.centeredSlides && l.snapIndex === 0
        ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
        : p.centeredSlides && l.snapIndex < p.slidesPerView
        ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
        : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
      (l.allowSlidePrev = c),
      (l.allowSlideNext = f),
      l.emit("loopFix");
    return;
  }
  let v = p.slidesPerView;
  v === "auto" ? (v = l.slidesPerViewDynamic()) : ((v = Math.ceil(parseFloat(p.slidesPerView, 10))), g && v % 2 === 0 && (v = v + 1));
  const P = p.slidesPerGroupAuto ? v : p.slidesPerGroup;
  let y = P;
  y % P !== 0 && (y += P - (y % P)), (y += p.loopAdditionalSlides), (l.loopedSlides = y);
  const w = l.grid && p.grid && p.grid.rows > 1;
  u.length < v + y
    ? ec(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : w && p.grid.fill === "row" && ec("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const x = [],
    T = [];
  let _ = l.activeIndex;
  typeof o > "u" ? (o = l.getSlideIndex(u.filter((N) => N.classList.contains(p.slideActiveClass))[0])) : (_ = o);
  const O = r === "next" || !r,
    B = r === "prev" || !r;
  let A = 0,
    k = 0;
  const I = w ? Math.ceil(u.length / p.grid.rows) : u.length,
    L = (w ? u[o].column : o) + (g && typeof i > "u" ? -v / 2 + 0.5 : 0);
  if (L < y) {
    A = Math.max(y - L, P);
    for (let N = 0; N < y - L; N += 1) {
      const j = N - Math.floor(N / I) * I;
      if (w) {
        const W = I - j - 1;
        for (let oe = u.length - 1; oe >= 0; oe -= 1) u[oe].column === W && x.push(oe);
      } else x.push(I - j - 1);
    }
  } else if (L + v > I - y) {
    k = Math.max(L - (I - y * 2), P);
    for (let N = 0; N < k; N += 1) {
      const j = N - Math.floor(N / I) * I;
      w
        ? u.forEach((W, oe) => {
            W.column === j && T.push(oe);
          })
        : T.push(j);
    }
  }
  if (
    ((l.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      l.__preventObserver__ = !1;
    }),
    B &&
      x.forEach((N) => {
        (u[N].swiperLoopMoveDOM = !0), h.prepend(u[N]), (u[N].swiperLoopMoveDOM = !1);
      }),
    O &&
      T.forEach((N) => {
        (u[N].swiperLoopMoveDOM = !0), h.append(u[N]), (u[N].swiperLoopMoveDOM = !1);
      }),
    l.recalcSlides(),
    p.slidesPerView === "auto"
      ? l.updateSlides()
      : w &&
        ((x.length > 0 && B) || (T.length > 0 && O)) &&
        l.slides.forEach((N, j) => {
          l.grid.updateSlide(j, N, l.slides);
        }),
    p.watchSlidesProgress && l.updateSlidesOffset(),
    n)
  ) {
    if (x.length > 0 && B) {
      if (typeof t > "u") {
        const N = l.slidesGrid[_],
          W = l.slidesGrid[_ + A] - N;
        a
          ? l.setTranslate(l.translate - W)
          : (l.slideTo(_ + A, 0, !1, !0),
            i && ((l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - W), (l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - W)));
      } else if (i) {
        const N = w ? x.length / p.grid.rows : x.length;
        l.slideTo(l.activeIndex + N, 0, !1, !0), (l.touchEventsData.currentTranslate = l.translate);
      }
    } else if (T.length > 0 && O)
      if (typeof t > "u") {
        const N = l.slidesGrid[_],
          W = l.slidesGrid[_ - k] - N;
        a
          ? l.setTranslate(l.translate - W)
          : (l.slideTo(_ - k, 0, !1, !0),
            i && ((l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - W), (l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - W)));
      } else {
        const N = w ? T.length / p.grid.rows : T.length;
        l.slideTo(l.activeIndex - N, 0, !1, !0);
      }
  }
  if (((l.allowSlidePrev = c), (l.allowSlideNext = f), l.controller && l.controller.control && !s)) {
    const N = { slideRealIndex: t, direction: r, setTranslate: i, activeSlideIndex: o, byController: !0 };
    Array.isArray(l.controller.control)
      ? l.controller.control.forEach((j) => {
          !j.destroyed && j.params.loop && j.loopFix({ ...N, slideTo: j.params.slidesPerView === p.slidesPerView ? n : !1 });
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix({ ...N, slideTo: l.controller.control.params.slidesPerView === p.slidesPerView ? n : !1 });
  }
  l.emit("loopFix");
}
function ML() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const o = typeof i.swiperSlideIndex > "u" ? i.getAttribute("data-swiper-slide-index") * 1 : i.swiperSlideIndex;
    r[o] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var RL = { loopCreate: kL, loopFix: LL, loopDestroy: ML };
function IL(e) {
  const t = this;
  if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function OL() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var BL = { setGrabCursor: IL, unsetGrabCursor: OL };
function $L(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === xs() || r === zn()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function Z4(e, t, n) {
  const r = zn(),
    { params: i } = e,
    o = i.edgeSwipeDetection,
    s = i.edgeSwipeThreshold;
  return o && (n <= s || n >= r.innerWidth - s) ? (o === "prevent" ? (t.preventDefault(), !0) : !1) : !0;
}
function DL(e) {
  const t = this,
    n = xs();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else r.type === "touchstart" && r.targetTouches.length === 1 && (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    Z4(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: o, touches: s, enabled: a } = t;
  if (!a || (!o.simulateTouch && r.pointerType === "mouse") || (t.animating && o.preventInteractionOnTransition)) return;
  !t.animating && o.cssMode && o.loop && t.loopFix();
  let l = r.target;
  if ((o.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(l)) || ("which" in r && r.which === 3) || ("button" in r && r.button > 0) || (i.isTouched && i.isMoved)) return;
  const u = !!o.noSwipingClass && o.noSwipingClass !== "",
    c = r.composedPath ? r.composedPath() : r.path;
  u && r.target && r.target.shadowRoot && c && (l = c[0]);
  const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
    h = !!(r.target && r.target.shadowRoot);
  if (o.noSwiping && (h ? $L(f, l) : l.closest(f))) {
    t.allowClick = !0;
    return;
  }
  if (o.swipeHandler && !l.closest(o.swipeHandler)) return;
  (s.currentX = r.pageX), (s.currentY = r.pageY);
  const p = s.currentX,
    g = s.currentY;
  if (!Z4(t, r, p)) return;
  Object.assign(i, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
    (s.startX = p),
    (s.startY = g),
    (i.touchStartTime = Ju()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    o.threshold > 0 && (i.allowThresholdMove = !1);
  let v = !0;
  l.matches(i.focusableElements) && ((v = !1), l.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement && n.activeElement.matches(i.focusableElements) && n.activeElement !== l && n.activeElement.blur();
  const P = v && t.allowTouchMove && o.touchStartPreventDefault;
  (o.touchStartForcePreventDefault || P) && !l.isContentEditable && r.preventDefault(),
    o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function NL(e) {
  const t = xs(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: o, rtlTranslate: s, enabled: a } = n;
  if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let l = e;
  if ((l.originalEvent && (l = l.originalEvent), l.type === "pointermove" && (r.touchId !== null || l.pointerId !== r.pointerId))) return;
  let u;
  if (l.type === "touchmove") {
    if (((u = [...l.changedTouches].filter((O) => O.identifier === r.touchId)[0]), !u || u.identifier !== r.touchId)) return;
  } else u = l;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", l);
    return;
  }
  const c = u.pageX,
    f = u.pageY;
  if (l.preventedByNestedSwiper) {
    (o.startX = c), (o.startY = f);
    return;
  }
  if (!n.allowTouchMove) {
    l.target.matches(r.focusableElements) || (n.allowClick = !1), r.isTouched && (Object.assign(o, { startX: c, startY: f, currentX: c, currentY: f }), (r.touchStartTime = Ju()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if ((f < o.startY && n.translate <= n.maxTranslate()) || (f > o.startY && n.translate >= n.minTranslate())) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if ((c < o.startX && n.translate <= n.maxTranslate()) || (c > o.startX && n.translate >= n.minTranslate())) return;
  }
  if (t.activeElement && l.target === t.activeElement && l.target.matches(r.focusableElements)) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", l), (o.previousX = o.currentX), (o.previousY = o.currentY), (o.currentX = c), (o.currentY = f);
  const h = o.currentX - o.startX,
    p = o.currentY - o.startY;
  if (n.params.threshold && Math.sqrt(h ** 2 + p ** 2) < n.params.threshold) return;
  if (typeof r.isScrolling > "u") {
    let O;
    (n.isHorizontal() && o.currentY === o.startY) || (n.isVertical() && o.currentX === o.startX)
      ? (r.isScrolling = !1)
      : h * h + p * p >= 25 && ((O = (Math.atan2(Math.abs(p), Math.abs(h)) * 180) / Math.PI), (r.isScrolling = n.isHorizontal() ? O > i.touchAngle : 90 - O > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", l), typeof r.startMoving > "u" && (o.currentX !== o.startX || o.currentY !== o.startY) && (r.startMoving = !0), r.isScrolling)
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1), !i.cssMode && l.cancelable && l.preventDefault(), i.touchMoveStopPropagation && !i.nested && l.stopPropagation();
  let g = n.isHorizontal() ? h : p,
    v = n.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
  i.oneWayMovement && ((g = Math.abs(g) * (s ? 1 : -1)), (v = Math.abs(v) * (s ? 1 : -1))), (o.diff = g), (g *= i.touchRatio), s && ((g = -g), (v = -v));
  const P = n.touchesDirection;
  (n.swipeDirection = g > 0 ? "prev" : "next"), (n.touchesDirection = v > 0 ? "prev" : "next");
  const y = n.params.loop && !i.cssMode,
    w = (n.touchesDirection === "next" && n.allowSlideNext) || (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if ((y && w && n.loopFix({ direction: n.swipeDirection }), (r.startTranslate = n.getTranslate()), n.setTransition(0), n.animating)) {
      const O = new window.CustomEvent("transitionend", { bubbles: !0, cancelable: !0 });
      n.wrapperEl.dispatchEvent(O);
    }
    (r.allowMomentumBounce = !1), i.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0), n.emit("sliderFirstMove", l);
  }
  let x;
  if ((new Date().getTime(), r.isMoved && r.allowThresholdMove && P !== n.touchesDirection && y && w && Math.abs(g) >= 1)) {
    Object.assign(o, { startX: c, startY: f, currentX: c, currentY: f, startTranslate: r.currentTranslate }), (r.loopSwapReset = !0), (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", l), (r.isMoved = !0), (r.currentTranslate = g + r.startTranslate);
  let T = !0,
    _ = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (_ = 0),
    g > 0
      ? (y &&
          w &&
          !x &&
          r.allowThresholdMove &&
          r.currentTranslate > (i.centeredSlides ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1] : n.minTranslate()) &&
          n.loopFix({ direction: "prev", setTranslate: !0, activeSlideIndex: 0 }),
        r.currentTranslate > n.minTranslate() && ((T = !1), i.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + g) ** _)))
      : g < 0 &&
        (y &&
          w &&
          !x &&
          r.allowThresholdMove &&
          r.currentTranslate < (i.centeredSlides ? n.maxTranslate() + n.slidesSizesGrid[n.slidesSizesGrid.length - 1] : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: n.slides.length - (i.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() && ((T = !1), i.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - g) ** _))),
    T && (l.preventedByNestedSwiper = !0),
    !n.allowSlideNext && n.swipeDirection === "next" && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev && n.swipeDirection === "prev" && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev && !n.allowSlideNext && (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(g) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (o.startX = o.currentX),
          (o.startY = o.currentY),
          (r.currentTranslate = r.startTranslate),
          (o.diff = n.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) || i.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function VL(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (((i = [...r.changedTouches].filter((_) => _.identifier === n.touchId)[0]), !i || i.identifier !== n.touchId)) return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(r.type) &&
    !(["pointercancel", "contextmenu"].includes(r.type) && (t.browser.isSafari || t.browser.isWebView))
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const { params: s, touches: a, rtlTranslate: l, slidesGrid: u, enabled: c } = t;
  if (!c || (!s.simulateTouch && r.pointerType === "mouse")) return;
  if ((n.allowTouchCallbacks && t.emit("touchEnd", r), (n.allowTouchCallbacks = !1), !n.isTouched)) {
    n.isMoved && s.grabCursor && t.setGrabCursor(!1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  s.grabCursor && n.isMoved && n.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
  const f = Ju(),
    h = f - n.touchStartTime;
  if (t.allowClick) {
    const _ = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((_ && _[0]) || r.target, _), t.emit("tap click", r), h < 300 && f - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = Ju()),
    M0(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched || !n.isMoved || !t.swipeDirection || (a.diff === 0 && !n.loopSwapReset) || (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let p;
  if ((s.followFinger ? (p = l ? t.translate : -t.translate) : (p = -n.currentTranslate), s.cssMode)) return;
  if (s.freeMode && s.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: p });
    return;
  }
  const g = p >= -t.maxTranslate() && !t.params.loop;
  let v = 0,
    P = t.slidesSizesGrid[0];
  for (let _ = 0; _ < u.length; _ += _ < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
    const O = _ < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    typeof u[_ + O] < "u" ? (g || (p >= u[_] && p < u[_ + O])) && ((v = _), (P = u[_ + O] - u[_])) : (g || p >= u[_]) && ((v = _), (P = u[u.length - 1] - u[u.length - 2]));
  }
  let y = null,
    w = null;
  s.rewind && (t.isBeginning ? (w = s.virtual && s.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1) : t.isEnd && (y = 0));
  const x = (p - u[v]) / P,
    T = v < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
  if (h > s.longSwipesMs) {
    if (!s.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" && (x >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? y : v + T) : t.slideTo(v)),
      t.swipeDirection === "prev" && (x > 1 - s.longSwipesRatio ? t.slideTo(v + T) : w !== null && x < 0 && Math.abs(x) > s.longSwipesRatio ? t.slideTo(w) : t.slideTo(v));
  } else {
    if (!s.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(v + T)
        : t.slideTo(v)
      : (t.swipeDirection === "next" && t.slideTo(y !== null ? y : v + T), t.swipeDirection === "prev" && t.slideTo(w !== null ? w : v));
  }
}
function Q4() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: o } = e,
    s = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
  const a = s && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !a
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !s
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
}
function jL(e) {
  const t = this;
  t.enabled &&
    (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function FL() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const o = e.maxTranslate() - e.minTranslate();
  o === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / o), i !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
function UL(e) {
  const t = this;
  Jl(t, e.target), !(t.params.cssMode || (t.params.slidesPerView !== "auto" && !t.params.autoHeight)) && t.update();
}
function zL() {
  const e = this;
  e.documentTouchHandlerProceeded || ((e.documentTouchHandlerProceeded = !0), e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const d5 = (e, t) => {
  const n = xs(),
    { params: r, el: i, wrapperEl: o, device: s } = e,
    a = !!r.nested,
    l = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  n[l]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: a }),
    i[l]("touchstart", e.onTouchStart, { passive: !1 }),
    i[l]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[l]("touchmove", e.onTouchMove, { passive: !1, capture: a }),
    n[l]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
    n[l]("touchend", e.onTouchEnd, { passive: !0 }),
    n[l]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[l]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[l]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[l]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) && i[l]("click", e.onClick, !0),
    r.cssMode && o[l]("scroll", e.onScroll),
    r.updateOnWindowResize ? e[u](s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Q4, !0) : e[u]("observerUpdate", Q4, !0),
    i[l]("load", e.onLoad, { capture: !0 });
};
function WL() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = DL.bind(e)),
    (e.onTouchMove = NL.bind(e)),
    (e.onTouchEnd = VL.bind(e)),
    (e.onDocumentTouchStart = zL.bind(e)),
    t.cssMode && (e.onScroll = FL.bind(e)),
    (e.onClick = jL.bind(e)),
    (e.onLoad = UL.bind(e)),
    d5(e, "on");
}
function HL() {
  d5(this, "off");
}
var KL = { attachEvents: WL, detachEvents: HL };
const X4 = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function GL() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    o = r.breakpoints;
  if (!o || (o && Object.keys(o).length === 0)) return;
  const s = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
  if (!s || e.currentBreakpoint === s) return;
  const l = (s in o ? o[s] : void 0) || e.originalParams,
    u = X4(e, r),
    c = X4(e, l),
    f = r.enabled;
  u && !c
    ? (i.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), e.emitContainerClasses())
    : !u &&
      c &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((l.grid.fill && l.grid.fill === "column") || (!l.grid.fill && r.grid.fill === "column")) && i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((y) => {
      if (typeof l[y] > "u") return;
      const w = r[y] && r[y].enabled,
        x = l[y] && l[y].enabled;
      w && !x && e[y].disable(), !w && x && e[y].enable();
    });
  const h = l.direction && l.direction !== r.direction,
    p = r.loop && (l.slidesPerView !== r.slidesPerView || h),
    g = r.loop;
  h && n && e.changeDirection(), Rn(e.params, l);
  const v = e.params.enabled,
    P = e.params.loop;
  Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
    f && !v ? e.disable() : !f && v && e.enable(),
    (e.currentBreakpoint = s),
    e.emit("_beforeBreakpoint", l),
    n && (p ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !g && P ? (e.loopCreate(t), e.updateSlides()) : g && !P && e.loopDestroy()),
    e.emit("breakpoint", l);
}
function qL(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = zn(),
    o = t === "window" ? i.innerHeight : n.clientHeight,
    s = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const l = parseFloat(a.substr(1));
        return { value: o * l, point: a };
      }
      return { value: a, point: a };
    });
  s.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < s.length; a += 1) {
    const { point: l, value: u } = s[a];
    t === "window" ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = l) : u <= n.clientWidth && (r = l);
  }
  return r || "max";
}
var YL = { setBreakpoint: GL, getBreakpoint: qL };
function ZL(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function QL() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: o } = e,
    s = ZL(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        { "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column" },
        { android: o.android },
        { ios: o.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...s), i.classList.add(...t), e.emitContainerClasses();
}
function XL() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
var JL = { addClasses: QL, removeClasses: XL };
function eM() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      o = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > o;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var tM = { checkOverflow: eM },
  O0 = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function nM(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      o = r[i];
    if (typeof o != "object" || o === null) {
      Rn(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0),
      !(i in e && "enabled" in o))
    ) {
      Rn(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0), e[i] || (e[i] = { enabled: !1 }), Rn(t, r);
  };
}
const ed = { eventsEmitter: Jk, update: cL, translate: gL, transition: xL, slide: AL, loop: RL, grabCursor: BL, events: KL, breakpoints: YL, checkOverflow: tM, classes: JL },
  td = {};
let Th = class Rr {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
    i.length === 1 && i[0].constructor && Object.prototype.toString.call(i[0]).slice(8, -1) === "Object" ? (n = i[0]) : ([t, n] = i),
      n || (n = {}),
      (n = Rn({}, n)),
      t && !n.el && (n.el = t);
    const s = xs();
    if (n.el && typeof n.el == "string" && s.querySelectorAll(n.el).length > 1) {
      const c = [];
      return (
        s.querySelectorAll(n.el).forEach((f) => {
          const h = Rn({}, n, { el: f });
          c.push(new Rr(h));
        }),
        c
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = c5()),
      (a.device = qk({ userAgent: n.userAgent })),
      (a.browser = Zk()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
    const l = {};
    a.modules.forEach((c) => {
      c({ params: n, swiper: a, extendParams: nM(n, l), on: a.on.bind(a), once: a.once.bind(a), off: a.off.bind(a), emit: a.emit.bind(a) });
    });
    const u = Rn({}, O0, l);
    return (
      (a.params = Rn({}, u, td, n)),
      (a.originalParams = Rn({}, a.params)),
      (a.passedParams = Rn({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((c) => {
          a.on(c, a.params.on[c]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === "horizontal";
        },
        isVertical() {
          return a.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit("_swiper"),
      a.params.init && a.init(),
      a
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = Vr(n, `.${r.slideClass}, swiper-slide`),
      o = q4(i[0]);
    return q4(t) - o;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(this.slides.filter((n) => n.getAttribute("data-swiper-slide-index") * 1 === t)[0]);
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = Vr(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled || ((t.enabled = !0), t.params.grabCursor && t.setGrabCursor(), t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled && ((t.enabled = !1), t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      s = (r.maxTranslate() - i) * t + i;
    r.translateTo(s, typeof n > "u" ? 0 : n), r.updateActiveIndex(), r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className.split(" ").filter((r) => r.indexOf("swiper") === 0 || r.indexOf(t.params.containerModifierClass) === 0);
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter((r) => r.indexOf("swiper-slide") === 0 || r.indexOf(n.params.slideClass) === 0)
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      { params: i, slides: o, slidesGrid: s, slidesSizesGrid: a, size: l, activeIndex: u } = r;
    let c = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let f = o[u] ? o[u].swiperSlideSize : 0,
        h;
      for (let p = u + 1; p < o.length; p += 1) o[p] && !h && ((f += o[p].swiperSlideSize), (c += 1), f > l && (h = !0));
      for (let p = u - 1; p >= 0; p -= 1) o[p] && !h && ((f += o[p].swiperSlideSize), (c += 1), f > l && (h = !0));
    } else if (t === "current") for (let f = u + 1; f < o.length; f += 1) (n ? s[f] + a[f] - s[u] < l : s[f] - s[u] < l) && (c += 1);
    else for (let f = u - 1; f >= 0; f -= 1) s[u] - s[f] < l && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
        s.complete && Jl(t, s);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const s = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let o;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode) i(), r.autoHeight && t.updateAutoHeight();
    else {
      if ((r.slidesPerView === "auto" || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
        const s = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        o = t.slideTo(s.length - 1, 0, !1, !0);
      } else o = t.slideTo(t.activeIndex, 0, !1, !0);
      o || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((o) => {
          t === "vertical" ? (o.style.width = "") : (o.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`), (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`), (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r)) return !1;
    (r.swiper = n), r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === "SWIPER-CONTAINER" && (n.isElement = !0);
    const i = () => `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let s = (() => (r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(i()) : Vr(r, i())[0]))();
    return (
      !s &&
        n.params.createElements &&
        ((s = R0("div", n.params.wrapperClass)),
        r.append(s),
        Vr(r, `.${n.params.slideClass}`).forEach((a) => {
          s.append(a);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: s,
        slidesEl: n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : s,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || pi(r, "direction") === "rtl",
        rtlTranslate: n.params.direction === "horizontal" && (r.dir.toLowerCase() === "rtl" || pi(r, "direction") === "rtl"),
        wrongRTL: pi(s, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(n.params.initialSlide + n.virtual.slidesBefore, 0, n.params.runCallbacksOnInit, !1, !0)
        : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((o) => {
        o.complete
          ? Jl(n, o)
          : o.addEventListener("load", (s) => {
              Jl(n, s.target);
            });
      }),
      I0(n),
      (n.initialized = !0),
      I0(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: o, wrapperEl: s, slides: a } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          o.removeAttribute("style"),
          s.removeAttribute("style"),
          a &&
            a.length &&
            a.forEach((l) => {
              l.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass),
                l.removeAttribute("style"),
                l.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((l) => {
          r.off(l);
        }),
        t !== !1 && ((r.el.swiper = null), Vk(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Rn(td, t);
  }
  static get extendedDefaults() {
    return td;
  }
  static get defaults() {
    return O0;
  }
  static installModule(t) {
    Rr.prototype.__modules__ || (Rr.prototype.__modules__ = []);
    const n = Rr.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t) ? (t.forEach((n) => Rr.installModule(n)), Rr) : (Rr.installModule(t), Rr);
  }
};
Object.keys(ed).forEach((e) => {
  Object.keys(ed[e]).forEach((t) => {
    Th.prototype[t] = ed[e][t];
  });
});
Th.use([Qk, Xk]);
const h5 = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function ho(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__;
}
function es(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u" ? (e[r] = t[r]) : ho(t[r]) && ho(e[r]) && Object.keys(t[r]).length > 0 ? (t[r].__swiper__ ? (e[r] = t[r]) : es(e[r], t[r])) : (e[r] = t[r]);
    });
}
function p5(e) {
  return e === void 0 && (e = {}), e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u";
}
function m5(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function g5(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function v5(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function rM(e) {
  return e === void 0 && (e = ""), e ? (e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}`) : "swiper-wrapper";
}
function iM(e) {
  let { swiper: t, slides: n, passedParams: r, changedParams: i, nextEl: o, prevEl: s, scrollbarEl: a, paginationEl: l } = e;
  const u = i.filter((k) => k !== "children" && k !== "direction" && k !== "wrapperClass"),
    { params: c, pagination: f, navigation: h, scrollbar: p, virtual: g, thumbs: v } = t;
  let P, y, w, x, T, _, O, B;
  i.includes("thumbs") && r.thumbs && r.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (P = !0),
    i.includes("controller") && r.controller && r.controller.control && c.controller && !c.controller.control && (y = !0),
    i.includes("pagination") && r.pagination && (r.pagination.el || l) && (c.pagination || c.pagination === !1) && f && !f.el && (w = !0),
    i.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || a) && (c.scrollbar || c.scrollbar === !1) && p && !p.el && (x = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || s) &&
      (r.navigation.nextEl || o) &&
      (c.navigation || c.navigation === !1) &&
      h &&
      !h.prevEl &&
      !h.nextEl &&
      (T = !0);
  const A = (k) => {
    t[k] &&
      (t[k].destroy(),
      k === "navigation"
        ? (t.isElement && (t[k].prevEl.remove(), t[k].nextEl.remove()), (c[k].prevEl = void 0), (c[k].nextEl = void 0), (t[k].prevEl = void 0), (t[k].nextEl = void 0))
        : (t.isElement && t[k].el.remove(), (c[k].el = void 0), (t[k].el = void 0)));
  };
  i.includes("loop") && t.isElement && (c.loop && !r.loop ? (_ = !0) : !c.loop && r.loop ? (O = !0) : (B = !0)),
    u.forEach((k) => {
      if (ho(c[k]) && ho(r[k])) Object.assign(c[k], r[k]), (k === "navigation" || k === "pagination" || k === "scrollbar") && "enabled" in r[k] && !r[k].enabled && A(k);
      else {
        const I = r[k];
        (I === !0 || I === !1) && (k === "navigation" || k === "pagination" || k === "scrollbar") ? I === !1 && A(k) : (c[k] = r[k]);
      }
    }),
    u.includes("controller") && !y && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control),
    i.includes("children") && n && g && c.virtual.enabled ? ((g.slides = n), g.update(!0)) : i.includes("virtual") && g && c.virtual.enabled && (n && (g.slides = n), g.update(!0)),
    i.includes("children") && n && c.loop && (B = !0),
    P && v.init() && v.update(!0),
    y && (t.controller.control = c.controller.control),
    w &&
      (t.isElement && (!l || typeof l == "string") && ((l = document.createElement("div")), l.classList.add("swiper-pagination"), l.part.add("pagination"), t.el.appendChild(l)),
      l && (c.pagination.el = l),
      f.init(),
      f.render(),
      f.update()),
    x &&
      (t.isElement && (!a || typeof a == "string") && ((a = document.createElement("div")), a.classList.add("swiper-scrollbar"), a.part.add("scrollbar"), t.el.appendChild(a)),
      a && (c.scrollbar.el = a),
      p.init(),
      p.updateSize(),
      p.setTranslate()),
    T &&
      (t.isElement &&
        ((!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-next"),
          (o.innerHTML = t.hostEl.constructor.nextButtonSvg),
          o.part.add("button-next"),
          t.el.appendChild(o)),
        (!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-prev"),
          (s.innerHTML = t.hostEl.constructor.prevButtonSvg),
          s.part.add("button-prev"),
          t.el.appendChild(s))),
      o && (c.navigation.nextEl = o),
      s && (c.navigation.prevEl = s),
      h.init(),
      h.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (_ || B) && t.loopDestroy(),
    (O || B) && t.loopCreate(),
    t.update();
}
function oM(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  es(n, O0), (n._emitClasses = !0), (n.init = !1);
  const o = {},
    s = h5.map((l) => l.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((l) => {
      typeof e[l] > "u" ||
        (s.indexOf(l) >= 0
          ? ho(e[l])
            ? ((n[l] = {}), (i[l] = {}), es(n[l], e[l]), es(i[l], e[l]))
            : ((n[l] = e[l]), (i[l] = e[l]))
          : l.search(/on[A-Z]/) === 0 && typeof e[l] == "function"
          ? t
            ? (r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
            : (n.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
          : (o[l] = e[l]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((l) => {
      n[l] === !0 && (n[l] = {}), n[l] === !1 && delete n[l];
    }),
    { params: n, passedParams: i, rest: o, events: r }
  );
}
function sM(e, t) {
  let { el: n, nextEl: r, prevEl: i, paginationEl: o, scrollbarEl: s, swiper: a } = e;
  p5(t) && r && i && ((a.params.navigation.nextEl = r), (a.originalParams.navigation.nextEl = r), (a.params.navigation.prevEl = i), (a.originalParams.navigation.prevEl = i)),
    m5(t) && o && ((a.params.pagination.el = o), (a.originalParams.pagination.el = o)),
    g5(t) && s && ((a.params.scrollbar.el = s), (a.originalParams.scrollbar.el = s)),
    a.init(n);
}
function aM(e, t, n, r, i) {
  const o = [];
  if (!t) return o;
  const s = (l) => {
    o.indexOf(l) < 0 && o.push(l);
  };
  if (n && r) {
    const l = r.map(i),
      u = n.map(i);
    l.join("") !== u.join("") && s("children"), r.length !== n.length && s("children");
  }
  return (
    h5
      .filter((l) => l[0] === "_")
      .map((l) => l.replace(/_/, ""))
      .forEach((l) => {
        if (l in e && l in t)
          if (ho(e[l]) && ho(t[l])) {
            const u = Object.keys(e[l]),
              c = Object.keys(t[l]);
            u.length !== c.length
              ? s(l)
              : (u.forEach((f) => {
                  e[l][f] !== t[l][f] && s(l);
                }),
                c.forEach((f) => {
                  e[l][f] !== t[l][f] && s(l);
                }));
          } else e[l] !== t[l] && s(l);
      }),
    o
  );
}
const lM = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
};
function tc() {
  return (
    (tc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tc.apply(this, arguments)
  );
}
function y5(e) {
  return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide");
}
function w5(e) {
  const t = [];
  return (
    Ct.Children.toArray(e).forEach((n) => {
      y5(n) ? t.push(n) : n.props && n.props.children && w5(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function uM(e) {
  const t = [],
    n = { "container-start": [], "container-end": [], "wrapper-start": [], "wrapper-end": [] };
  return (
    Ct.Children.toArray(e).forEach((r) => {
      if (y5(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot]) n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = w5(r.props.children);
        i.length > 0 ? i.forEach((o) => t.push(o)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function cM(e, t, n) {
  if (!n) return null;
  const r = (c) => {
      let f = c;
      return c < 0 ? (f = t.length + c) : f >= t.length && (f = f - t.length), f;
    },
    i = e.isHorizontal() ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` } : { top: `${n.offset}px` },
    { from: o, to: s } = n,
    a = e.params.loop ? -t.length : 0,
    l = e.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let c = a; c < l; c += 1) c >= o && c <= s && u.push(t[r(c)]);
  return u.map((c, f) => Ct.cloneElement(c, { swiper: e, style: i, key: `slide-${f}` }));
}
function aa(e, t) {
  return typeof window > "u" ? V.useEffect(e, t) : V.useLayoutEffect(e, t);
}
const J4 = V.createContext(null),
  fM = V.createContext(null),
  dM = V.forwardRef(function (e, t) {
    let { className: n, tag: r = "div", wrapperTag: i = "div", children: o, onSwiper: s, ...a } = e === void 0 ? {} : e,
      l = !1;
    const [u, c] = V.useState("swiper"),
      [f, h] = V.useState(null),
      [p, g] = V.useState(!1),
      v = V.useRef(!1),
      P = V.useRef(null),
      y = V.useRef(null),
      w = V.useRef(null),
      x = V.useRef(null),
      T = V.useRef(null),
      _ = V.useRef(null),
      O = V.useRef(null),
      B = V.useRef(null),
      { params: A, passedParams: k, rest: I, events: M } = oM(a),
      { slides: L, slots: N } = uM(o),
      j = () => {
        g(!p);
      };
    Object.assign(A.on, {
      _containerClasses(ne, se) {
        c(se);
      },
    });
    const W = () => {
      Object.assign(A.on, M), (l = !0);
      const ne = { ...A };
      if ((delete ne.wrapperClass, (y.current = new Th(ne)), y.current.virtual && y.current.params.virtual.enabled)) {
        y.current.virtual.slides = L;
        const se = { cache: !1, slides: L, renderExternal: h, renderExternalUpdate: !1 };
        es(y.current.params.virtual, se), es(y.current.originalParams.virtual, se);
      }
    };
    P.current || W(), y.current && y.current.on("_beforeBreakpoint", j);
    const oe = () => {
        l ||
          !M ||
          !y.current ||
          Object.keys(M).forEach((ne) => {
            y.current.on(ne, M[ne]);
          });
      },
      ye = () => {
        !M ||
          !y.current ||
          Object.keys(M).forEach((ne) => {
            y.current.off(ne, M[ne]);
          });
      };
    V.useEffect(() => () => {
      y.current && y.current.off("_beforeBreakpoint", j);
    }),
      V.useEffect(() => {
        !v.current && y.current && (y.current.emitSlidesClasses(), (v.current = !0));
      }),
      aa(() => {
        if ((t && (t.current = P.current), !!P.current))
          return (
            y.current.destroyed && W(),
            sM({ el: P.current, nextEl: T.current, prevEl: _.current, paginationEl: O.current, scrollbarEl: B.current, swiper: y.current }, A),
            s && s(y.current),
            () => {
              y.current && !y.current.destroyed && y.current.destroy(!0, !1);
            }
          );
      }, []),
      aa(() => {
        oe();
        const ne = aM(k, w.current, L, x.current, (se) => se.key);
        return (
          (w.current = k),
          (x.current = L),
          ne.length &&
            y.current &&
            !y.current.destroyed &&
            iM({ swiper: y.current, slides: L, passedParams: k, changedParams: ne, nextEl: T.current, prevEl: _.current, scrollbarEl: B.current, paginationEl: O.current }),
          () => {
            ye();
          }
        );
      }),
      aa(() => {
        lM(y.current);
      }, [f]);
    function J() {
      return A.virtual ? cM(y.current, L, f) : L.map((ne, se) => Ct.cloneElement(ne, { swiper: y.current, swiperSlideIndex: se }));
    }
    return Ct.createElement(
      r,
      tc({ ref: P, className: v5(`${u}${n ? ` ${n}` : ""}`) }, I),
      Ct.createElement(
        fM.Provider,
        { value: y.current },
        N["container-start"],
        Ct.createElement(i, { className: rM(A.wrapperClass) }, N["wrapper-start"], J(), N["wrapper-end"]),
        p5(A) &&
          Ct.createElement(
            Ct.Fragment,
            null,
            Ct.createElement("div", { ref: _, className: "swiper-button-prev" }),
            Ct.createElement("div", { ref: T, className: "swiper-button-next" })
          ),
        g5(A) && Ct.createElement("div", { ref: B, className: "swiper-scrollbar" }),
        m5(A) && Ct.createElement("div", { ref: O, className: "swiper-pagination" }),
        N["container-end"]
      )
    );
  });
dM.displayName = "Swiper";
const hM = V.forwardRef(function (e, t) {
  let { tag: n = "div", children: r, className: i = "", swiper: o, zoom: s, lazy: a, virtualIndex: l, swiperSlideIndex: u, ...c } = e === void 0 ? {} : e;
  const f = V.useRef(null),
    [h, p] = V.useState("swiper-slide"),
    [g, v] = V.useState(!1);
  function P(T, _, O) {
    _ === f.current && p(O);
  }
  aa(() => {
    if ((typeof u < "u" && (f.current.swiperSlideIndex = u), t && (t.current = f.current), !(!f.current || !o))) {
      if (o.destroyed) {
        h !== "swiper-slide" && p("swiper-slide");
        return;
      }
      return (
        o.on("_slideClass", P),
        () => {
          o && o.off("_slideClass", P);
        }
      );
    }
  }),
    aa(() => {
      o && f.current && !o.destroyed && p(o.getSlideClasses(f.current));
    }, [o]);
  const y = {
      isActive: h.indexOf("swiper-slide-active") >= 0,
      isVisible: h.indexOf("swiper-slide-visible") >= 0,
      isPrev: h.indexOf("swiper-slide-prev") >= 0,
      isNext: h.indexOf("swiper-slide-next") >= 0,
    },
    w = () => (typeof r == "function" ? r(y) : r),
    x = () => {
      v(!0);
    };
  return Ct.createElement(
    n,
    tc({ ref: f, className: v5(`${h}${i ? ` ${i}` : ""}`), "data-swiper-slide-index": l, onLoad: x }, c),
    s &&
      Ct.createElement(
        J4.Provider,
        { value: y },
        Ct.createElement(
          "div",
          { className: "swiper-zoom-container", "data-swiper-zoom": typeof s == "number" ? s : void 0 },
          w(),
          a && !g && Ct.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !s && Ct.createElement(J4.Provider, { value: y }, w(), a && !g && Ct.createElement("div", { className: "swiper-lazy-preloader" }))
  );
});
hM.displayName = "SwiperSlide";
function Ph(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function eg(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function _h(e, t, n) {
  return t && eg(e.prototype, t), n && eg(e, n), e;
}
function tg(e) {
  return +e.replace(/px/, "");
}
function pM(e) {
  var t = window.devicePixelRatio,
    n = getComputedStyle(e),
    r = tg(n.getPropertyValue("width")),
    i = tg(n.getPropertyValue("height"));
  e.setAttribute("width", (r * t).toString()), e.setAttribute("height", (i * t).toString());
}
function ir(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
    r = Math.random() * (t - e) + e;
  return Math.floor(r * Math.pow(10, n)) / Math.pow(10, n);
}
function ng(e) {
  return e[ir(0, e.length)];
}
var mM = 0.00125,
  gM = 5e-4,
  vM = 9e-4,
  yM = 1e-5,
  wM = 6,
  xM = 80,
  CM = 0.9,
  SM = 1.7,
  bM = 0.2,
  EM = 0.6,
  TM = 0.03,
  PM = 0.07,
  rg = 15,
  ig = 82,
  _M = 150,
  AM = 100,
  kM = 250,
  LM = 40,
  MM = ["#fcf403", "#62fc03", "#f4fc03", "#03e7fc", "#03fca5", "#a503fc", "#fc03ad", "#fc03c2"];
function og(e) {
  var t = 1920;
  return Math.log(e) / Math.log(t);
}
var sg = (function () {
  function e(t) {
    Ph(this, e);
    var n = t.initialPosition,
      r = t.direction,
      i = t.confettiRadius,
      o = t.confettiColors,
      s = t.emojis,
      a = t.emojiSize,
      l = t.canvasWidth,
      u = ir(CM, SM, 3),
      c = u * og(l);
    (this.confettiSpeed = { x: c, y: c }),
      (this.finalConfettiSpeedX = ir(bM, EM, 3)),
      (this.rotationSpeed = s.length ? 0.01 : ir(TM, PM, 3) * og(l)),
      (this.dragForceCoefficient = ir(gM, vM, 6)),
      (this.radius = { x: i, y: i }),
      (this.initialRadius = i),
      (this.rotationAngle = r === "left" ? ir(0, 0.2, 3) : ir(-0.2, 0, 3)),
      (this.emojiSize = a),
      (this.emojiRotationAngle = ir(0, 2 * Math.PI)),
      (this.radiusYUpdateDirection = "down");
    var f = r === "left" ? (ir(ig, rg) * Math.PI) / 180 : (ir(-rg, -ig) * Math.PI) / 180;
    (this.absCos = Math.abs(Math.cos(f))), (this.absSin = Math.abs(Math.sin(f)));
    var h = ir(-_M, 0),
      p = { x: n.x + (r === "left" ? -h : h) * this.absCos, y: n.y - h * this.absSin };
    (this.currentPosition = Object.assign({}, p)),
      (this.initialPosition = Object.assign({}, p)),
      (this.color = s.length ? null : ng(o)),
      (this.emoji = s.length ? ng(s) : null),
      (this.createdAt = new Date().getTime()),
      (this.direction = r);
  }
  return (
    _h(e, [
      {
        key: "draw",
        value: function (n) {
          var r = this.currentPosition,
            i = this.radius,
            o = this.color,
            s = this.emoji,
            a = this.rotationAngle,
            l = this.emojiRotationAngle,
            u = this.emojiSize,
            c = window.devicePixelRatio;
          o
            ? ((n.fillStyle = o), n.beginPath(), n.ellipse(r.x * c, r.y * c, i.x * c, i.y * c, a, 0, 2 * Math.PI), n.fill())
            : s && ((n.font = "".concat(u, "px serif")), n.save(), n.translate(c * r.x, c * r.y), n.rotate(l), (n.textAlign = "center"), n.fillText(s, 0, 0), n.restore());
        },
      },
      {
        key: "updatePosition",
        value: function (n, r) {
          var i = this.confettiSpeed,
            o = this.dragForceCoefficient,
            s = this.finalConfettiSpeedX,
            a = this.radiusYUpdateDirection,
            l = this.rotationSpeed,
            u = this.createdAt,
            c = this.direction,
            f = r - u;
          if (
            (i.x > s && (this.confettiSpeed.x -= o * n),
            (this.currentPosition.x += i.x * (c === "left" ? -this.absCos : this.absCos) * n),
            (this.currentPosition.y = this.initialPosition.y - i.y * this.absSin * f + (mM * Math.pow(f, 2)) / 2),
            (this.rotationSpeed -= this.emoji ? 1e-4 : yM * n),
            this.rotationSpeed < 0 && (this.rotationSpeed = 0),
            this.emoji)
          ) {
            this.emojiRotationAngle += (this.rotationSpeed * n) % (2 * Math.PI);
            return;
          }
          a === "down"
            ? ((this.radius.y -= n * l), this.radius.y <= 0 && ((this.radius.y = 0), (this.radiusYUpdateDirection = "up")))
            : ((this.radius.y += n * l), this.radius.y >= this.initialRadius && ((this.radius.y = this.initialRadius), (this.radiusYUpdateDirection = "down")));
        },
      },
      {
        key: "getIsVisibleOnCanvas",
        value: function (n) {
          return this.currentPosition.y < n + AM;
        },
      },
    ]),
    e
  );
})();
function RM() {
  var e = document.createElement("canvas");
  return (
    (e.style.position = "fixed"),
    (e.style.width = "100%"),
    (e.style.height = "100%"),
    (e.style.top = "0"),
    (e.style.left = "0"),
    (e.style.zIndex = "1000"),
    (e.style.pointerEvents = "none"),
    document.body.appendChild(e),
    e
  );
}
function IM(e) {
  var t = e.confettiRadius,
    n = t === void 0 ? wM : t,
    r = e.confettiNumber,
    i = r === void 0 ? e.confettiesNumber || (e.emojis ? LM : kM) : r,
    o = e.confettiColors,
    s = o === void 0 ? MM : o,
    a = e.emojis,
    l = a === void 0 ? e.emojies || [] : a,
    u = e.emojiSize,
    c = u === void 0 ? xM : u;
  return (
    e.emojies && console.error("emojies argument is deprecated, please use emojis instead"),
    e.confettiesNumber && console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),
    { confettiRadius: n, confettiNumber: i, confettiColors: s, emojis: l, emojiSize: c }
  );
}
var OM = (function () {
    function e(t) {
      var n = this;
      Ph(this, e),
        (this.canvasContext = t),
        (this.shapes = []),
        (this.promise = new Promise(function (r) {
          return (n.resolvePromise = r);
        }));
    }
    return (
      _h(e, [
        {
          key: "getBatchCompletePromise",
          value: function () {
            return this.promise;
          },
        },
        {
          key: "addShapes",
          value: function () {
            var n;
            (n = this.shapes).push.apply(n, arguments);
          },
        },
        {
          key: "complete",
          value: function () {
            var n;
            return this.shapes.length ? !1 : ((n = this.resolvePromise) === null || n === void 0 || n.call(this), !0);
          },
        },
        {
          key: "processShapes",
          value: function (n, r, i) {
            var o = this,
              s = n.timeDelta,
              a = n.currentTime;
            this.shapes = this.shapes.filter(function (l) {
              return l.updatePosition(s, a), l.draw(o.canvasContext), i ? l.getIsVisibleOnCanvas(r) : !0;
            });
          },
        },
      ]),
      e
    );
  })(),
  KM = (function () {
    function e() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      Ph(this, e),
        (this.activeConfettiBatches = []),
        (this.canvas = t.canvas || RM()),
        (this.canvasContext = this.canvas.getContext("2d")),
        (this.requestAnimationFrameRequested = !1),
        (this.lastUpdated = new Date().getTime()),
        (this.iterationIndex = 0),
        (this.loop = this.loop.bind(this)),
        requestAnimationFrame(this.loop);
    }
    return (
      _h(e, [
        {
          key: "loop",
          value: function () {
            (this.requestAnimationFrameRequested = !1), pM(this.canvas);
            var n = new Date().getTime(),
              r = n - this.lastUpdated,
              i = this.canvas.offsetHeight,
              o = this.iterationIndex % 10 === 0;
            (this.activeConfettiBatches = this.activeConfettiBatches.filter(function (s) {
              return s.processShapes({ timeDelta: r, currentTime: n }, i, o), o ? !s.complete() : !0;
            })),
              this.iterationIndex++,
              this.queueAnimationFrameIfNeeded(n);
          },
        },
        {
          key: "queueAnimationFrameIfNeeded",
          value: function (n) {
            this.requestAnimationFrameRequested ||
              this.activeConfettiBatches.length < 1 ||
              ((this.requestAnimationFrameRequested = !0), (this.lastUpdated = n || new Date().getTime()), requestAnimationFrame(this.loop));
          },
        },
        {
          key: "addConfetti",
          value: function () {
            for (
              var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                r = IM(n),
                i = r.confettiRadius,
                o = r.confettiNumber,
                s = r.confettiColors,
                a = r.emojis,
                l = r.emojiSize,
                u = this.canvas.getBoundingClientRect(),
                c = u.width,
                f = u.height,
                h = (f * 5) / 7,
                p = { x: 0, y: h },
                g = { x: c, y: h },
                v = new OM(this.canvasContext),
                P = 0;
              P < o / 2;
              P++
            ) {
              var y = new sg({ initialPosition: p, direction: "right", confettiRadius: i, confettiColors: s, confettiNumber: o, emojis: a, emojiSize: l, canvasWidth: c }),
                w = new sg({ initialPosition: g, direction: "left", confettiRadius: i, confettiColors: s, confettiNumber: o, emojis: a, emojiSize: l, canvasWidth: c });
              v.addShapes(y, w);
            }
            return this.activeConfettiBatches.push(v), this.queueAnimationFrameIfNeeded(), v.getBatchCompletePromise();
          },
        },
        {
          key: "clearCanvas",
          value: function () {
            this.activeConfettiBatches = [];
          },
        },
      ]),
      e
    );
  })();
export {
  UM as A,
  VM as B,
  KM as J,
  Ct as React,
  dM as S,
  fo as T,
  Y6 as a,
  HM as create,
  Gl as c,
  hM as d,
  A3 as useLocation,
  DM as useparams,
  NM as Routes,
  U8 as Route,
  Oh as client,
  BM as jsxRuntimeExports,
  zM as k,
  FM as m,
  V as reactExports,
  $M as u,
};
