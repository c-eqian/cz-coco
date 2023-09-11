import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// ../node_modules/.pnpm/co-utils-vue@1.11.2-rc.3/node_modules/co-utils-vue/dist/index.js
var require_dist = __commonJS({
  "../node_modules/.pnpm/co-utils-vue@1.11.2-rc.3/node_modules/co-utils-vue/dist/index.js"(exports) {
    function e(t2) {
      return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
        return typeof e2;
      } : function(e2) {
        return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
      }, e(t2);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    function t(e2) {
      return e2.replace(/^[a-z]/, function(e3) {
        return e3.toUpperCase();
      });
    }
    function n(e2) {
      return e2.replace(/^[A-z]/, function(e3) {
        return e3.toLowerCase();
      });
    }
    var o = function(e2) {
      if (!a(e2))
        throw Error("".concat(e2, " 不是正确的15或18位身份证格式"));
      return { birth: "".concat(e2.substring(6, 10), "-").concat(e2.substring(10, 12), "-").concat(e2.substring(12, 14)), gender: parseInt(e2.substring(16, 17), 10) % 2 == 1 ? "男" : "女" };
    };
    var r = function(e2) {
      return null === e2 ? "[object Null]" : toString.call(e2);
    };
    var c = function(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, n2 = 2 >= arguments.length || void 0 === arguments[2] || arguments[2];
      if (!f(e2))
        return e2;
      var o2 = Math.pow(10, t2);
      return n2 ? Math.round(e2 * o2) / o2 : Math.floor(e2 * o2) / o2;
    };
    var s = function(e2) {
      var t2 = +e2, n2 = t2 % 1;
      return n2 ? t2 - n2 : t2;
    };
    var i = function(e2) {
      return /^1[3,4,5,6,7,8,9][0-9]{9}$/.test(e2);
    };
    var a = function(e2) {
      return /^[1-9]\d{5}(19|20)\d{2}((0[1-9]|1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(e2);
    };
    var u = function(t2) {
      return "object" === e(t2) && null !== t2;
    };
    var l = function(e2) {
      return "number" == typeof e2 || u(e2) && "[object Number]" === r(e2);
    };
    var f = function(e2) {
      return l(e2) ? l(e2) : /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/.test(e2);
    };
    var p = function(t2) {
      var n2 = e(t2);
      return "string" === n2 || "object" === n2 && null !== t2 && !Array.isArray(t2) && "[object String]" === r(t2);
    };
    var d = function(e2) {
      return "function" == typeof e2;
    };
    function h(e2, t2) {
      return e2 in t2;
    }
    var v = function(e2) {
      return function e3(t2) {
        var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /* @__PURE__ */ new WeakMap();
        if (u(t2))
          return t2;
        if (n2.has(t2))
          return n2.get(t2);
        var o2 = Array.isArray(t2) ? [] : {};
        n2.set(t2, o2);
        var r2 = Object.getOwnPropertySymbols(t2);
        for (var c2 in r2.length && r2.forEach(function(c3) {
          h(c3, r2) && (o2[c3] = u(t2[c3]) ? e3(t2[c3], n2) : t2[c3]);
        }), t2)
          Object.prototype.hasOwnProperty.call(t2, c2) && (o2[c2] = u(t2[c2]) ? e3(t2[c2], n2) : t2[c2]);
        return o2;
      }(e2);
    };
    function y(e2, t2) {
      (null == t2 || t2 > e2.length) && (t2 = e2.length);
      for (var n2 = 0, o2 = Array(t2); t2 > n2; n2++)
        o2[n2] = e2[n2];
      return o2;
    }
    function m(e2, t2) {
      if (e2) {
        if ("string" == typeof e2)
          return y(e2, t2);
        var n2 = Object.prototype.toString.call(e2).slice(8, -1);
        return "Object" === n2 && e2.constructor && (n2 = e2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? y(e2, t2) : void 0;
      }
    }
    function g(e2, t2) {
      return function(e3) {
        if (Array.isArray(e3))
          return e3;
      }(e2) || function(e3, t3) {
        var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
        if (null != n2) {
          var o2, r2, c2 = [], s2 = true, i2 = false;
          try {
            for (n2 = n2.call(e3); !(s2 = (o2 = n2.next()).done) && (c2.push(o2.value), !t3 || c2.length !== t3); s2 = true)
              ;
          } catch (e4) {
            i2 = true, r2 = e4;
          } finally {
            try {
              s2 || null == n2.return || n2.return();
            } finally {
              if (i2)
                throw r2;
            }
          }
          return c2;
        }
      }(e2, t2) || m(e2, t2) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    var _ = function(e2) {
      var t2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd";
      if (!e2)
        return "".concat(e2);
      if ("string" == typeof e2) {
        var o2 = e2.match(/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/);
        if (o2) {
          var r2 = g(o2, 7), c2 = r2[1], s2 = r2[2], i2 = r2[3], a2 = r2[4], u2 = r2[5], l2 = r2[6];
          t2 = new Date(Number(c2), Number(s2) - 1, Number(i2), Number(a2), Number(u2), Number(l2));
        } else
          t2 = new Date(e2);
      } else
        t2 = new Date(e2);
      var f2 = { yyyy: "".concat(t2.getFullYear()), yy: "".concat(t2.getFullYear() % 100), YYYY: "".concat(t2.getFullYear()), YY: "".concat(t2.getFullYear() % 100), M: "".concat(t2.getMonth() + 1), d: "".concat(t2.getDate()), H: "".concat(t2.getHours()), m: "".concat(t2.getMinutes()), s: "".concat(t2.getSeconds()), MM: "".concat(t2.getMonth() + 101).substring(1), dd: "".concat(t2.getDate() + 100).substring(1), HH: "".concat(t2.getHours() + 100).substring(1), mm: "".concat(t2.getMinutes() + 100).substring(1), ss: "".concat(t2.getSeconds() + 100).substring(1) };
      return n2.replace(/(yyyy|YYYY|YY|yy)|MM?|dd?|HH?|mm?|ss?/g, function() {
        for (var e3 = arguments.length, t3 = Array(e3), n3 = 0; e3 > n3; n3++)
          t3[n3] = arguments[n3];
        return f2[t3[0]];
      });
    };
    function b(e2, t2) {
      var n2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
      if (!n2) {
        if (Array.isArray(e2) || (n2 = function(e3, t3) {
          if (!e3)
            return;
          if ("string" == typeof e3)
            return w(e3, t3);
          var n3 = Object.prototype.toString.call(e3).slice(8, -1);
          "Object" === n3 && e3.constructor && (n3 = e3.constructor.name);
          if ("Map" === n3 || "Set" === n3)
            return Array.from(e3);
          if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
            return w(e3, t3);
        }(e2)) || t2 && e2 && "number" == typeof e2.length) {
          n2 && (e2 = n2);
          var o2 = 0, r2 = function() {
          };
          return { s: r2, n: function() {
            return e2.length > o2 ? { done: false, value: e2[o2++] } : { done: true };
          }, e: function(e3) {
            throw e3;
          }, f: r2 };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var c2, s2 = true, i2 = false;
      return { s: function() {
        n2 = n2.call(e2);
      }, n: function() {
        var e3 = n2.next();
        return s2 = e3.done, e3;
      }, e: function(e3) {
        i2 = true, c2 = e3;
      }, f: function() {
        try {
          s2 || null == n2.return || n2.return();
        } finally {
          if (i2)
            throw c2;
        }
      } };
    }
    function w(e2, t2) {
      (null == t2 || t2 > e2.length) && (t2 = e2.length);
      for (var n2 = 0, o2 = Array(t2); t2 > n2; n2++)
        o2[n2] = e2[n2];
      return o2;
    }
    function E(e2, t2) {
      const n2 = /* @__PURE__ */ Object.create(null), o2 = e2.split(",");
      for (let e3 = 0; o2.length > e3; e3++)
        n2[o2[e3]] = true;
      return t2 ? (e3) => !!n2[e3.toLowerCase()] : (e3) => !!n2[e3];
    }
    var O = true ? Object.freeze({}) : {};
    Object.freeze([]);
    var x = () => {
    };
    var S = Object.assign;
    var C = Object.prototype.hasOwnProperty;
    var T = (e2, t2) => C.call(e2, t2);
    var j = Array.isArray;
    var V = (e2) => "[object Map]" === I(e2);
    var D = (e2) => "function" == typeof e2;
    var R = (e2) => "string" == typeof e2;
    var A = (e2) => "symbol" == typeof e2;
    var F = (e2) => null !== e2 && "object" == typeof e2;
    var M = Object.prototype.toString;
    var I = (e2) => M.call(e2);
    var P = (e2) => I(e2).slice(8, -1);
    var $ = (e2) => R(e2) && "NaN" !== e2 && "-" !== e2[0] && "" + parseInt(e2, 10) === e2;
    var B = ((e2) => {
      const t2 = /* @__PURE__ */ Object.create(null);
      return (n2) => t2[n2] || (t2[n2] = e2(n2));
    })((e2) => e2.charAt(0).toUpperCase() + e2.slice(1));
    var z = (e2, t2) => !Object.is(e2, t2);
    var H;
    var W = () => H || (H = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    var K = RegExp("\\/\\*.*?\\*\\/", "gs");
    function G(e2, ...t2) {
      console.warn("[Vue warn] " + e2, ...t2);
    }
    var J = (e2) => {
      const t2 = new Set(e2);
      return t2.w = 0, t2.n = 0, t2;
    };
    var X = (e2) => (e2.w & ne) > 0;
    var Q = (e2) => (e2.n & ne) > 0;
    var ee = /* @__PURE__ */ new WeakMap();
    var te = 0;
    var ne = 1;
    var oe;
    var re = Symbol(true ? "iterate" : "");
    var ce = Symbol(true ? "Map key iterate" : "");
    var se = class {
      constructor(e2, t2 = null, n2) {
        this.fn = e2, this.scheduler = t2, this.active = true, this.deps = [], this.parent = void 0, function(e3, t3) {
          t3 && t3.active && t3.effects.push(e3);
        }(this, n2);
      }
      run() {
        if (!this.active)
          return this.fn();
        let e2 = oe, t2 = ae;
        for (; e2; ) {
          if (e2 === this)
            return;
          e2 = e2.parent;
        }
        try {
          return this.parent = oe, oe = this, ae = true, ne = 1 << ++te, te > 30 ? ie(this) : (({ deps: e3 }) => {
            if (e3.length)
              for (let t3 = 0; e3.length > t3; t3++)
                e3[t3].w |= ne;
          })(this), this.fn();
        } finally {
          te > 30 || ((e3) => {
            const { deps: t3 } = e3;
            if (t3.length) {
              let n2 = 0;
              for (let o2 = 0; t3.length > o2; o2++) {
                const r2 = t3[o2];
                X(r2) && !Q(r2) ? r2.delete(e3) : t3[n2++] = r2, r2.w &= ~ne, r2.n &= ~ne;
              }
              t3.length = n2;
            }
          })(this), ne = 1 << --te, oe = this.parent, ae = t2, this.parent = void 0, this.deferStop && this.stop();
        }
      }
      stop() {
        oe === this ? this.deferStop = true : this.active && (ie(this), this.onStop && this.onStop(), this.active = false);
      }
    };
    function ie(e2) {
      const { deps: t2 } = e2;
      if (t2.length) {
        for (let n2 = 0; t2.length > n2; n2++)
          t2[n2].delete(e2);
        t2.length = 0;
      }
    }
    var ae = true;
    var ue = [];
    function le() {
      ue.push(ae), ae = false;
    }
    function fe() {
      const e2 = ue.pop();
      ae = void 0 === e2 || e2;
    }
    function pe(e2, t2, n2) {
      if (ae && oe) {
        let o2 = ee.get(e2);
        o2 || ee.set(e2, o2 = /* @__PURE__ */ new Map());
        let r2 = o2.get(n2);
        r2 || o2.set(n2, r2 = J());
        de(r2, true ? { effect: oe, target: e2, type: t2, key: n2 } : void 0);
      }
    }
    function de(e2, t2) {
      let n2 = false;
      te > 30 ? n2 = !e2.has(oe) : Q(e2) || (e2.n |= ne, n2 = !X(e2)), n2 && (e2.add(oe), oe.deps.push(e2), oe.onTrack && oe.onTrack(S({ effect: oe }, t2)));
    }
    function he(e2, t2, n2, o2, r2, c2) {
      const s2 = ee.get(e2);
      if (!s2)
        return;
      let i2 = [];
      if ("clear" === t2)
        i2 = [...s2.values()];
      else if ("length" === n2 && j(e2)) {
        const e3 = Number(o2);
        s2.forEach((t3, n3) => {
          "length" !== n3 && e3 > n3 || i2.push(t3);
        });
      } else
        switch (void 0 !== n2 && i2.push(s2.get(n2)), t2) {
          case "add":
            j(e2) ? $(n2) && i2.push(s2.get("length")) : (i2.push(s2.get(re)), V(e2) && i2.push(s2.get(ce)));
            break;
          case "delete":
            j(e2) || (i2.push(s2.get(re)), V(e2) && i2.push(s2.get(ce)));
            break;
          case "set":
            V(e2) && i2.push(s2.get(re));
        }
      const a2 = true ? { target: e2, type: t2, key: n2, newValue: o2, oldValue: r2, oldTarget: c2 } : void 0;
      if (1 === i2.length)
        i2[0] && (true ? ve(i2[0], a2) : ve(i2[0]));
      else {
        const e3 = [];
        for (const t3 of i2)
          t3 && e3.push(...t3);
        true ? ve(J(e3), a2) : ve(J(e3));
      }
    }
    function ve(e2, t2) {
      const n2 = j(e2) ? e2 : [...e2];
      for (const e3 of n2)
        e3.computed && ye(e3, t2);
      for (const e3 of n2)
        e3.computed || ye(e3, t2);
    }
    function ye(e2, t2) {
      (e2 !== oe || e2.allowRecurse) && (e2.onTrigger && e2.onTrigger(S({ effect: e2 }, t2)), e2.scheduler ? e2.scheduler() : e2.run());
    }
    var me = E("__proto__,__v_isRef,__isVue");
    var ge = new Set(Object.getOwnPropertyNames(Symbol).filter((e2) => "arguments" !== e2 && "caller" !== e2).map((e2) => Symbol[e2]).filter(A));
    var _e = Ne();
    var be = Ne(true);
    var we = Ne(true, true);
    var Ee = Oe();
    function Oe() {
      const e2 = {};
      return ["includes", "indexOf", "lastIndexOf"].forEach((t2) => {
        e2[t2] = function(...e3) {
          const n2 = lt(this);
          for (let e4 = 0, t3 = this.length; t3 > e4; e4++)
            pe(n2, "get", e4 + "");
          const o2 = n2[t2](...e3);
          return -1 === o2 || false === o2 ? n2[t2](...e3.map(lt)) : o2;
        };
      }), ["push", "pop", "shift", "unshift", "splice"].forEach((t2) => {
        e2[t2] = function(...e3) {
          le();
          const n2 = lt(this)[t2].apply(this, e3);
          return fe(), n2;
        };
      }), e2;
    }
    function xe(e2) {
      const t2 = lt(this);
      return pe(t2, "has", e2), t2.hasOwnProperty(e2);
    }
    function Ne(e2 = false, t2 = false) {
      return function(n2, o2, r2) {
        if ("__v_isReactive" === o2)
          return !e2;
        if ("__v_isReadonly" === o2)
          return e2;
        if ("__v_isShallow" === o2)
          return t2;
        if ("__v_raw" === o2 && r2 === (e2 ? t2 ? tt : et : t2 ? Qe : Xe).get(n2))
          return n2;
        const c2 = j(n2);
        if (!e2) {
          if (c2 && T(Ee, o2))
            return Reflect.get(Ee, o2, r2);
          if ("hasOwnProperty" === o2)
            return xe;
        }
        const s2 = Reflect.get(n2, o2, r2);
        return (A(o2) ? ge.has(o2) : me(o2)) ? s2 : (e2 || pe(n2, "get", o2), t2 ? s2 : yt(s2) ? c2 && $(o2) ? s2 : s2.value : F(s2) ? e2 ? ot(s2) : nt(s2) : s2);
      };
    }
    function ke(e2 = false) {
      return function(t2, n2, o2, r2) {
        let c2 = t2[n2];
        if (it(c2) && yt(c2) && !yt(o2))
          return false;
        if (!e2 && (at(o2) || it(o2) || (c2 = lt(c2), o2 = lt(o2)), !j(t2) && yt(c2) && !yt(o2)))
          return c2.value = o2, true;
        const s2 = j(t2) && $(n2) ? t2.length > Number(n2) : T(t2, n2), i2 = Reflect.set(t2, n2, o2, r2);
        return t2 === lt(r2) && (s2 ? z(o2, c2) && he(t2, "set", n2, o2, c2) : he(t2, "add", n2, o2)), i2;
      };
    }
    var Se = { get: _e, set: ke(), deleteProperty: function(e2, t2) {
      const n2 = T(e2, t2), o2 = e2[t2], r2 = Reflect.deleteProperty(e2, t2);
      return r2 && n2 && he(e2, "delete", t2, void 0, o2), r2;
    }, has: function(e2, t2) {
      const n2 = Reflect.has(e2, t2);
      return A(t2) && ge.has(t2) || pe(e2, "has", t2), n2;
    }, ownKeys: function(e2) {
      return pe(e2, "iterate", j(e2) ? "length" : re), Reflect.ownKeys(e2);
    } };
    var Ce = { get: be, set: (e2, t2) => (G(`Set operation on key "${t2 + ""}" failed: target is readonly.`, e2), true), deleteProperty: (e2, t2) => (G(`Delete operation on key "${t2 + ""}" failed: target is readonly.`, e2), true) };
    var Te = S({}, Ce, { get: we });
    var je = (e2) => e2;
    var Ve = (e2) => Reflect.getPrototypeOf(e2);
    function De(e2, t2, n2 = false, o2 = false) {
      const r2 = lt(e2 = e2.__v_raw), c2 = lt(t2);
      n2 || (t2 !== c2 && pe(r2, "get", t2), pe(r2, "get", c2));
      const { has: s2 } = Ve(r2), i2 = o2 ? je : n2 ? dt : pt;
      return s2.call(r2, t2) ? i2(e2.get(t2)) : s2.call(r2, c2) ? i2(e2.get(c2)) : void (e2 !== r2 && e2.get(t2));
    }
    function Re(e2, t2 = false) {
      const n2 = this.__v_raw, o2 = lt(n2), r2 = lt(e2);
      return t2 || (e2 !== r2 && pe(o2, "has", e2), pe(o2, "has", r2)), e2 === r2 ? n2.has(e2) : n2.has(e2) || n2.has(r2);
    }
    function Ae(e2, t2 = false) {
      return e2 = e2.__v_raw, !t2 && pe(lt(e2), "iterate", re), Reflect.get(e2, "size", e2);
    }
    function Fe(e2) {
      e2 = lt(e2);
      const t2 = lt(this);
      return Ve(t2).has.call(t2, e2) || (t2.add(e2), he(t2, "add", e2, e2)), this;
    }
    function Me(e2, t2) {
      t2 = lt(t2);
      const n2 = lt(this), { has: o2, get: r2 } = Ve(n2);
      let c2 = o2.call(n2, e2);
      c2 ? Je(n2, o2, e2) : (e2 = lt(e2), c2 = o2.call(n2, e2));
      const s2 = r2.call(n2, e2);
      return n2.set(e2, t2), c2 ? z(t2, s2) && he(n2, "set", e2, t2, s2) : he(n2, "add", e2, t2), this;
    }
    function Ie(e2) {
      const t2 = lt(this), { has: n2, get: o2 } = Ve(t2);
      let r2 = n2.call(t2, e2);
      r2 ? Je(t2, n2, e2) : (e2 = lt(e2), r2 = n2.call(t2, e2));
      const c2 = o2 ? o2.call(t2, e2) : void 0, s2 = t2.delete(e2);
      return r2 && he(t2, "delete", e2, void 0, c2), s2;
    }
    function Pe() {
      const e2 = lt(this), t2 = 0 !== e2.size, n2 = true ? V(e2) ? new Map(e2) : new Set(e2) : void 0, o2 = e2.clear();
      return t2 && he(e2, "clear", void 0, void 0, n2), o2;
    }
    function $e(e2, t2) {
      return function(n2, o2) {
        const r2 = this, c2 = r2.__v_raw, s2 = lt(c2), i2 = t2 ? je : e2 ? dt : pt;
        return !e2 && pe(s2, "iterate", re), c2.forEach((e3, t3) => n2.call(o2, i2(e3), i2(t3), r2));
      };
    }
    function Be(e2, t2, n2) {
      return function(...o2) {
        const r2 = this.__v_raw, c2 = lt(r2), s2 = V(c2), i2 = "entries" === e2 || e2 === Symbol.iterator && s2, a2 = "keys" === e2 && s2, u2 = r2[e2](...o2), l2 = n2 ? je : t2 ? dt : pt;
        return !t2 && pe(c2, "iterate", a2 ? ce : re), { next() {
          const { value: e3, done: t3 } = u2.next();
          return t3 ? { value: e3, done: t3 } : { value: i2 ? [l2(e3[0]), l2(e3[1])] : l2(e3), done: t3 };
        }, [Symbol.iterator]() {
          return this;
        } };
      };
    }
    function ze(e2) {
      return function(...t2) {
        if (true) {
          const n2 = t2[0] ? `on key "${t2[0]}" ` : "";
          console.warn(`${B(e2)} operation ${n2}failed: target is readonly.`, lt(this));
        }
        return "delete" !== e2 && this;
      };
    }
    function He() {
      const e2 = { get(e3) {
        return De(this, e3);
      }, get size() {
        return Ae(this);
      }, has: Re, add: Fe, set: Me, delete: Ie, clear: Pe, forEach: $e(false, false) }, t2 = { get(e3) {
        return De(this, e3, false, true);
      }, get size() {
        return Ae(this);
      }, has: Re, add: Fe, set: Me, delete: Ie, clear: Pe, forEach: $e(false, true) }, n2 = { get(e3) {
        return De(this, e3, true);
      }, get size() {
        return Ae(this, true);
      }, has(e3) {
        return Re.call(this, e3, true);
      }, add: ze("add"), set: ze("set"), delete: ze("delete"), clear: ze("clear"), forEach: $e(true, false) }, o2 = { get(e3) {
        return De(this, e3, true, true);
      }, get size() {
        return Ae(this, true);
      }, has(e3) {
        return Re.call(this, e3, true);
      }, add: ze("add"), set: ze("set"), delete: ze("delete"), clear: ze("clear"), forEach: $e(true, true) };
      return ["keys", "values", "entries", Symbol.iterator].forEach((r2) => {
        e2[r2] = Be(r2, false, false), n2[r2] = Be(r2, true, false), t2[r2] = Be(r2, false, true), o2[r2] = Be(r2, true, true);
      }), [e2, n2, t2, o2];
    }
    var [We, Ue, Ye, qe] = He();
    function Ke(e2, t2) {
      const n2 = t2 ? e2 ? qe : Ye : e2 ? Ue : We;
      return (t3, o2, r2) => "__v_isReactive" === o2 ? !e2 : "__v_isReadonly" === o2 ? e2 : "__v_raw" === o2 ? t3 : Reflect.get(T(n2, o2) && o2 in t3 ? n2 : t3, o2, r2);
    }
    var Le = { get: Ke(false, false) };
    var Ze = { get: Ke(true, false) };
    var Ge = { get: Ke(true, true) };
    function Je(e2, t2, n2) {
      const o2 = lt(n2);
      if (o2 !== n2 && t2.call(e2, o2)) {
        const t3 = P(e2);
        console.warn(`Reactive ${t3} contains both the raw and reactive versions of the same object${"Map" === t3 ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
      }
    }
    var Xe = /* @__PURE__ */ new WeakMap();
    var Qe = /* @__PURE__ */ new WeakMap();
    var et = /* @__PURE__ */ new WeakMap();
    var tt = /* @__PURE__ */ new WeakMap();
    function nt(e2) {
      return it(e2) ? e2 : ct(e2, false, Se, Le, Xe);
    }
    function ot(e2) {
      return ct(e2, true, Ce, Ze, et);
    }
    function rt(e2) {
      return ct(e2, true, Te, Ge, tt);
    }
    function ct(e2, t2, n2, o2, r2) {
      if (!F(e2))
        return console.warn("value cannot be made reactive: " + (e2 + "")), e2;
      if (e2.__v_raw && (!t2 || !e2.__v_isReactive))
        return e2;
      const c2 = r2.get(e2);
      if (c2)
        return c2;
      const s2 = (i2 = e2).__v_skip || !Object.isExtensible(i2) ? 0 : function(e3) {
        switch (e3) {
          case "Object":
          case "Array":
            return 1;
          case "Map":
          case "Set":
          case "WeakMap":
          case "WeakSet":
            return 2;
          default:
            return 0;
        }
      }(P(i2));
      var i2;
      if (0 === s2)
        return e2;
      const a2 = new Proxy(e2, 2 === s2 ? o2 : n2);
      return r2.set(e2, a2), a2;
    }
    function st(e2) {
      return it(e2) ? st(e2.__v_raw) : !(!e2 || !e2.__v_isReactive);
    }
    function it(e2) {
      return !(!e2 || !e2.__v_isReadonly);
    }
    function at(e2) {
      return !(!e2 || !e2.__v_isShallow);
    }
    function lt(e2) {
      const t2 = e2 && e2.__v_raw;
      return t2 ? lt(t2) : e2;
    }
    function ft(e2) {
      return ((e3, t2, n2) => {
        Object.defineProperty(e3, t2, { configurable: true, enumerable: false, value: n2 });
      })(e2, "__v_skip", true), e2;
    }
    var pt = (e2) => F(e2) ? nt(e2) : e2;
    var dt = (e2) => F(e2) ? ot(e2) : e2;
    function ht(e2) {
      ae && oe && (e2 = lt(e2), true ? de(e2.dep || (e2.dep = J()), { target: e2, type: "get", key: "value" }) : de(e2.dep || (e2.dep = J())));
    }
    function vt(e2, t2) {
      const n2 = (e2 = lt(e2)).dep;
      n2 && (true ? ve(n2, { target: e2, type: "set", key: "value", newValue: t2 }) : ve(n2));
    }
    function yt(e2) {
      return !(!e2 || true !== e2.__v_isRef);
    }
    function mt(e2) {
      return function(e3, t2) {
        if (yt(e3))
          return e3;
        return new gt(e3, t2);
      }(e2, false);
    }
    var gt = class {
      constructor(e2, t2) {
        this.__v_isShallow = t2, this.dep = void 0, this.__v_isRef = true, this._rawValue = t2 ? e2 : lt(e2), this._value = t2 ? e2 : pt(e2);
      }
      get value() {
        return ht(this), this._value;
      }
      set value(e2) {
        const t2 = this.__v_isShallow || at(e2) || it(e2);
        e2 = t2 ? e2 : lt(e2), z(e2, this._rawValue) && (this._rawValue = e2, this._value = t2 ? e2 : pt(e2), vt(this, e2));
      }
    };
    function _t(e2) {
      return yt(e2) ? e2.value : e2;
    }
    var bt = { get: (e2, t2, n2) => _t(Reflect.get(e2, t2, n2)), set: (e2, t2, n2, o2) => {
      const r2 = e2[t2];
      return yt(r2) && !yt(n2) ? (r2.value = n2, true) : Reflect.set(e2, t2, n2, o2);
    } };
    var wt = class {
      constructor(e2) {
        this.dep = void 0, this.__v_isRef = true;
        const { get: t2, set: n2 } = e2(() => ht(this), () => vt(this));
        this._get = t2, this._set = n2;
      }
      get value() {
        return this._get();
      }
      set value(e2) {
        this._set(e2);
      }
    };
    function Et(e2) {
      return new wt(e2);
    }
    var Ot = class {
      constructor(e2, t2, n2, o2) {
        this._setter = t2, this.dep = void 0, this.__v_isRef = true, this.__v_isReadonly = false, this._dirty = true, this.effect = new se(e2, () => {
          this._dirty || (this._dirty = true, vt(this));
        }), this.effect.computed = this, this.effect.active = this._cacheable = !o2, this.__v_isReadonly = n2;
      }
      get value() {
        const e2 = lt(this);
        return ht(e2), !e2._dirty && e2._cacheable || (e2._dirty = false, e2._value = e2.effect.run()), e2._value;
      }
      set value(e2) {
        this._setter(e2);
      }
    };
    var xt = [];
    function Nt(e2, ...t2) {
      if ("production" !== false)
        return;
      le();
      const n2 = xt.length ? xt[xt.length - 1].component : null, o2 = n2 && n2.appContext.config.warnHandler, r2 = function() {
        let e3 = xt[xt.length - 1];
        if (!e3)
          return [];
        const t3 = [];
        for (; e3; ) {
          const n3 = t3[0];
          n3 && n3.vnode === e3 ? n3.recurseCount++ : t3.push({ vnode: e3, recurseCount: 0 });
          const o3 = e3.component && e3.component.parent;
          e3 = o3 && o3.vnode;
        }
        return t3;
      }();
      if (o2)
        Tt(o2, n2, 11, [e2 + t2.join(""), n2 && n2.proxy, r2.map(({ vnode: e3 }) => `at <${$n(n2, e3.type)}>`).join("\n"), r2]);
      else {
        const n3 = ["[Vue warn]: " + e2, ...t2];
        r2.length && n3.push("\n", ...function(e3) {
          const t3 = [];
          return e3.forEach((e4, n4) => {
            t3.push(...0 === n4 ? [] : ["\n"], ...function({ vnode: e5, recurseCount: t4 }) {
              const n5 = t4 > 0 ? `... (${t4} recursive calls)` : "", o3 = " at <" + $n(e5.component, e5.type, !!e5.component && null == e5.component.parent), r3 = ">" + n5;
              return e5.props ? [o3, ...kt(e5.props), r3] : [o3 + r3];
            }(e4));
          }), t3;
        }(r2)), console.warn(...n3);
      }
      fe();
    }
    function kt(e2) {
      const t2 = [], n2 = Object.keys(e2);
      return n2.slice(0, 3).forEach((n3) => {
        t2.push(...St(n3, e2[n3]));
      }), n2.length > 3 && t2.push(" ..."), t2;
    }
    function St(e2, t2, n2) {
      return R(t2) ? (t2 = JSON.stringify(t2), n2 ? t2 : [`${e2}=${t2}`]) : "number" == typeof t2 || "boolean" == typeof t2 || null == t2 ? n2 ? t2 : [`${e2}=${t2}`] : yt(t2) ? (t2 = St(e2, lt(t2.value), true), n2 ? t2 : [e2 + "=Ref<", t2, ">"]) : D(t2) ? [`${e2}=fn${t2.name ? `<${t2.name}>` : ""}`] : (t2 = lt(t2), n2 ? t2 : [e2 + "=", t2]);
    }
    var Ct = { sp: "serverPrefetch hook", bc: "beforeCreate hook", c: "created hook", bm: "beforeMount hook", m: "mounted hook", bu: "beforeUpdate hook", u: "updated", bum: "beforeUnmount hook", um: "unmounted hook", a: "activated hook", da: "deactivated hook", ec: "errorCaptured hook", rtc: "renderTracked hook", rtg: "renderTriggered hook", 0: "setup function", 1: "render function", 2: "watcher getter", 3: "watcher callback", 4: "watcher cleanup function", 5: "native event handler", 6: "component event handler", 7: "vnode hook", 8: "directive hook", 9: "transition hook", 10: "app errorHandler", 11: "app warnHandler", 12: "ref function", 13: "async component loader", 14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core" };
    function Tt(e2, t2, n2, o2) {
      let r2;
      try {
        r2 = o2 ? e2(...o2) : e2();
      } catch (e3) {
        Vt(e3, t2, n2);
      }
      return r2;
    }
    function jt(e2, t2, n2, o2) {
      if (D(e2)) {
        const c3 = Tt(e2, t2, n2, o2);
        return c3 && (F(r2 = c3) && D(r2.then) && D(r2.catch)) && c3.catch((e3) => {
          Vt(e3, t2, n2);
        }), c3;
      }
      var r2;
      const c2 = [];
      for (let r3 = 0; e2.length > r3; r3++)
        c2.push(jt(e2[r3], t2, n2, o2));
      return c2;
    }
    function Vt(e2, t2, n2, o2 = true) {
      const r2 = t2 ? t2.vnode : null;
      if (t2) {
        let o3 = t2.parent;
        const r3 = t2.proxy, c2 = true ? Ct[n2] : n2;
        for (; o3; ) {
          const t3 = o3.ec;
          if (t3) {
            for (let n3 = 0; t3.length > n3; n3++)
              if (false === t3[n3](e2, r3, c2))
                return;
          }
          o3 = o3.parent;
        }
        const s2 = t2.appContext.config.errorHandler;
        if (s2)
          return void Tt(s2, null, 10, [e2, r3, c2]);
      }
      !function(e3, t3, n3, o3 = true) {
        if (true) {
          const r3 = Ct[t3];
          if (n3 && xt.push(n3), Nt("Unhandled error" + (r3 ? " during execution of " + r3 : "")), n3 && xt.pop(), o3)
            throw e3;
          console.error(e3);
        } else
          console.error(e3);
      }(e2, n2, r2, o2);
    }
    var Dt = false;
    var Rt = false;
    var At = [];
    var Ft = 0;
    var Mt = [];
    var It = null;
    var Pt = 0;
    var $t = Promise.resolve();
    var Bt = null;
    function zt(e2) {
      const t2 = Bt || $t;
      return e2 ? t2.then(this ? e2.bind(this) : e2) : t2;
    }
    function Ht(e2) {
      At.length && At.includes(e2, Dt && e2.allowRecurse ? Ft + 1 : Ft) || (null == e2.id ? At.push(e2) : At.splice(function(e3) {
        let t2 = Ft + 1, n2 = At.length;
        for (; n2 > t2; ) {
          const o2 = t2 + n2 >>> 1;
          e3 > Yt(At[o2]) ? t2 = o2 + 1 : n2 = o2;
        }
        return t2;
      }(e2.id), 0, e2), Wt());
    }
    function Wt() {
      Dt || Rt || (Rt = true, Bt = $t.then(Kt));
    }
    function Ut(e2) {
      j(e2) ? Mt.push(...e2) : It && It.includes(e2, e2.allowRecurse ? Pt + 1 : Pt) || Mt.push(e2), Wt();
    }
    var Yt = (e2) => null == e2.id ? 1 / 0 : e2.id;
    var qt = (e2, t2) => {
      const n2 = Yt(e2) - Yt(t2);
      if (0 === n2) {
        if (e2.pre && !t2.pre)
          return -1;
        if (t2.pre && !e2.pre)
          return 1;
      }
      return n2;
    };
    function Kt(e2) {
      Rt = false, Dt = true, e2 = e2 || /* @__PURE__ */ new Map(), At.sort(qt);
      const t2 = true ? (t3) => Lt(e2, t3) : x;
      try {
        for (Ft = 0; At.length > Ft; Ft++) {
          const e3 = At[Ft];
          if (e3 && false !== e3.active) {
            if (t2(e3))
              continue;
            Tt(e3, null, 14);
          }
        }
      } finally {
        Ft = 0, At.length = 0, function(e3) {
          if (Mt.length) {
            const t3 = [...new Set(Mt)];
            if (Mt.length = 0, It)
              return void It.push(...t3);
            for (It = t3, e3 = e3 || /* @__PURE__ */ new Map(), It.sort((e4, t4) => Yt(e4) - Yt(t4)), Pt = 0; It.length > Pt; Pt++)
              Lt(e3, It[Pt]) || It[Pt]();
            It = null, Pt = 0;
          }
        }(e2), Dt = false, Bt = null, (At.length || Mt.length) && Kt(e2);
      }
    }
    function Lt(e2, t2) {
      if (e2.has(t2)) {
        const n2 = e2.get(t2);
        if (n2 > 100) {
          const e3 = t2.ownerInstance, n3 = e3 && Pn(e3.type);
          return Nt(`Maximum recursive updates exceeded${n3 ? ` in component <${n3}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), true;
        }
        e2.set(t2, n2 + 1);
      } else
        e2.set(t2, 1);
    }
    var Zt = /* @__PURE__ */ new Set();
    W().__VUE_HMR_RUNTIME__ = { createRecord: Qt(function(e2, t2) {
      if (Gt.has(e2))
        return false;
      return Gt.set(e2, { initialDef: Jt(t2), instances: /* @__PURE__ */ new Set() }), true;
    }), rerender: Qt(function(e2, t2) {
      const n2 = Gt.get(e2);
      if (!n2)
        return;
      n2.initialDef.render = t2, [...n2.instances].forEach((e3) => {
        t2 && (e3.render = t2, Jt(e3.type).render = t2), e3.renderCache = [], e3.update();
      });
    }), reload: Qt(function(e2, t2) {
      const n2 = Gt.get(e2);
      if (!n2)
        return;
      t2 = Jt(t2), Xt(n2.initialDef, t2);
      const o2 = [...n2.instances];
      for (const e3 of o2) {
        const o3 = Jt(e3.type);
        Zt.has(o3) || (o3 !== n2.initialDef && Xt(o3, t2), Zt.add(o3)), e3.appContext.propsCache.delete(e3.type), e3.appContext.emitsCache.delete(e3.type), e3.appContext.optionsCache.delete(e3.type), e3.ceReload ? (Zt.add(o3), e3.ceReload(t2.styles), Zt.delete(o3)) : e3.parent ? Ht(e3.parent.update) : e3.appContext.reload ? e3.appContext.reload() : "undefined" != typeof window ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
      }
      Ut(() => {
        for (const e3 of o2)
          Zt.delete(Jt(e3.type));
      });
    }) };
    var Gt = /* @__PURE__ */ new Map();
    function Jt(e2) {
      return Bn(e2) ? e2.__vccOpts : e2;
    }
    function Xt(e2, t2) {
      S(e2, t2);
      for (const n2 in e2)
        "__file" === n2 || n2 in t2 || delete e2[n2];
    }
    function Qt(e2) {
      return (t2, n2) => {
        try {
          return e2(t2, n2);
        } catch (e3) {
          console.error(e3), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
        }
      };
    }
    function en(e2, t2) {
      return nn(e2, null, t2);
    }
    var tn = {};
    function nn(e2, t2, { immediate: n2, deep: o2, flush: r2, onTrack: c2, onTrigger: s2 } = O) {
      var i2;
      t2 || (void 0 !== n2 && Nt('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), void 0 !== o2 && Nt('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
      const a2 = (e3) => {
        Nt("Invalid watch source: ", e3, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
      }, u2 = void 0 === (null == (i2 = Rn) ? void 0 : i2.scope) ? Rn : null;
      let l2, f2, p2 = false, d2 = false;
      if (yt(e2) ? (l2 = () => e2.value, p2 = at(e2)) : st(e2) ? (l2 = () => e2, o2 = true) : j(e2) ? (d2 = true, p2 = e2.some((e3) => st(e3) || at(e3)), l2 = () => e2.map((e3) => yt(e3) ? e3.value : st(e3) ? rn(e3) : D(e3) ? Tt(e3, u2, 2) : void a2(e3))) : D(e2) ? l2 = t2 ? () => Tt(e2, u2, 2) : () => {
        if (!u2 || !u2.isUnmounted)
          return f2 && f2(), jt(e2, u2, 3, [v2]);
      } : (l2 = x, a2(e2)), t2 && o2) {
        const e3 = l2;
        l2 = () => rn(e3());
      }
      let h2, v2 = (e3) => {
        f2 = _2.onStop = () => {
          Tt(e3, u2, 4);
        };
      };
      if (Mn) {
        if (v2 = x, t2 ? n2 && jt(t2, u2, 3, [l2(), d2 ? [] : void 0, v2]) : l2(), "sync" !== r2)
          return x;
        {
          const e3 = Wn();
          h2 = e3.__watcherHandles || (e3.__watcherHandles = []);
        }
      }
      let y2 = d2 ? Array(e2.length).fill(tn) : tn;
      const m2 = () => {
        if (_2.active)
          if (t2) {
            const e3 = _2.run();
            (o2 || p2 || (d2 ? e3.some((e4, t3) => z(e4, y2[t3])) : z(e3, y2))) && (f2 && f2(), jt(t2, u2, 3, [e3, y2 === tn ? void 0 : d2 && y2[0] === tn ? [] : y2, v2]), y2 = e3);
          } else
            _2.run();
      };
      let g2;
      m2.allowRecurse = !!t2, "sync" === r2 ? g2 = m2 : "post" === r2 ? g2 = () => _n(m2, u2 && u2.suspense) : (m2.pre = true, u2 && (m2.id = u2.uid), g2 = () => Ht(m2));
      const _2 = new se(l2, g2);
      _2.onTrack = c2, _2.onTrigger = s2, t2 ? n2 ? m2() : y2 = _2.run() : "post" === r2 ? _n(_2.run.bind(_2), u2 && u2.suspense) : _2.run();
      const b2 = () => {
        _2.stop(), u2 && u2.scope && ((e3, t3) => {
          const n3 = e3.indexOf(t3);
          n3 > -1 && e3.splice(n3, 1);
        })(u2.scope.effects, _2);
      };
      return h2 && h2.push(b2), b2;
    }
    function on(e2, t2, n2) {
      const o2 = this.proxy, r2 = R(e2) ? e2.includes(".") ? function(e3, t3) {
        const n3 = t3.split(".");
        return () => {
          let t4 = e3;
          for (let e4 = 0; n3.length > e4 && t4; e4++)
            t4 = t4[n3[e4]];
          return t4;
        };
      }(o2, e2) : () => o2[e2] : e2.bind(o2, o2);
      let c2;
      D(t2) ? c2 = t2 : (c2 = t2.handler, n2 = t2);
      const s2 = Rn;
      An(this);
      const i2 = nn(r2, c2.bind(o2), n2);
      return s2 ? An(s2) : Fn(), i2;
    }
    function rn(e2, t2) {
      if (!F(e2) || e2.__v_skip)
        return e2;
      if ((t2 = t2 || /* @__PURE__ */ new Set()).has(e2))
        return e2;
      if (t2.add(e2), yt(e2))
        rn(e2.value, t2);
      else if (j(e2))
        for (let n2 = 0; e2.length > n2; n2++)
          rn(e2[n2], t2);
      else if ("[object Set]" === I(e2) || V(e2))
        e2.forEach((e3) => {
          rn(e3, t2);
        });
      else if (((e3) => "[object Object]" === I(e3))(e2))
        for (const n2 in e2)
          rn(e2[n2], t2);
      return e2;
    }
    var cn = Symbol.for("v-ndc");
    var sn = (e2) => e2 ? 4 & e2.vnode.shapeFlag ? function(e3) {
      if (e3.exposed)
        return e3.exposeProxy || (e3.exposeProxy = new Proxy(st(t2 = ft(e3.exposed)) ? t2 : new Proxy(t2, bt), { get: (t3, n2) => n2 in t3 ? t3[n2] : n2 in an ? an[n2](e3) : void 0, has: (e4, t3) => t3 in e4 || t3 in an }));
      var t2;
    }(e2) || e2.proxy : sn(e2.parent) : null;
    var an = S(/* @__PURE__ */ Object.create(null), { $: (e2) => e2, $el: (e2) => e2.vnode.el, $data: (e2) => e2.data, $props: (e2) => true ? rt(e2.props) : e2.props, $attrs: (e2) => true ? rt(e2.attrs) : e2.attrs, $slots: (e2) => true ? rt(e2.slots) : e2.slots, $refs: (e2) => true ? rt(e2.refs) : e2.refs, $parent: (e2) => sn(e2.parent), $root: (e2) => sn(e2.root), $emit: (e2) => e2.emit, $options: (e2) => __VUE_OPTIONS_API__ ? function(e3) {
      const t2 = e3.type, { mixins: n2, extends: o2 } = t2, { mixins: r2, optionsCache: c2, config: { optionMergeStrategies: s2 } } = e3.appContext, i2 = c2.get(t2);
      let a2;
      i2 ? a2 = i2 : r2.length || n2 || o2 ? (a2 = {}, r2.length && r2.forEach((e4) => pn(a2, e4, s2, true)), pn(a2, t2, s2)) : a2 = t2;
      F(t2) && c2.set(t2, a2);
      return a2;
    }(e2) : e2.type, $forceUpdate: (e2) => e2.f || (e2.f = () => Ht(e2.update)), $nextTick: (e2) => e2.n || (e2.n = zt.bind(e2.proxy)), $watch: (e2) => __VUE_OPTIONS_API__ ? on.bind(e2) : x });
    var un = (e2, t2) => e2 !== O && !e2.__isScriptSetup && T(e2, t2);
    function ln(e2) {
      return j(e2) ? e2.reduce((e3, t2) => (e3[t2] = null, e3), {}) : e2;
    }
    ({ get({ _: e2 }, t2) {
      const { ctx: n2, setupState: o2, data: r2, props: c2, accessCache: s2, type: i2, appContext: a2 } = e2;
      if ("__isVue" === t2)
        return true;
      let u2;
      if ("$" !== t2[0]) {
        const i3 = s2[t2];
        if (void 0 !== i3)
          switch (i3) {
            case 1:
              return o2[t2];
            case 2:
              return r2[t2];
            case 4:
              return n2[t2];
            case 3:
              return c2[t2];
          }
        else {
          if (un(o2, t2))
            return s2[t2] = 1, o2[t2];
          if (r2 !== O && T(r2, t2))
            return s2[t2] = 2, r2[t2];
          if ((u2 = e2.propsOptions[0]) && T(u2, t2))
            return s2[t2] = 3, c2[t2];
          if (n2 !== O && T(n2, t2))
            return s2[t2] = 4, n2[t2];
          __VUE_OPTIONS_API__ && !fn || (s2[t2] = 0);
        }
      }
      const l2 = an[t2];
      let f2, p2;
      return l2 ? ("$attrs" === t2 ? (pe(e2, "get", t2), process) : "$slots" === t2 && pe(e2, "get", t2), l2(e2)) : (f2 = i2.__cssModules) && (f2 = f2[t2]) ? f2 : n2 !== O && T(n2, t2) ? (s2[t2] = 4, n2[t2]) : (p2 = a2.config.globalProperties, T(p2, t2) ? p2[t2] : void process);
    }, set({ _: e2 }, t2, n2) {
      const { data: o2, setupState: r2, ctx: c2 } = e2;
      return un(r2, t2) ? (r2[t2] = n2, true) : r2.__isScriptSetup && T(r2, t2) ? (Nt(`Cannot mutate <script setup> binding "${t2}" from Options API.`), false) : o2 !== O && T(o2, t2) ? (o2[t2] = n2, true) : T(e2.props, t2) ? (Nt(`Attempting to mutate prop "${t2}". Props are readonly.`), false) : "$" === t2[0] && t2.slice(1) in e2 ? (Nt(`Attempting to mutate public property "${t2}". Properties starting with $ are reserved and readonly.`), false) : (t2 in e2.appContext.config.globalProperties ? Object.defineProperty(c2, t2, { enumerable: true, configurable: true, value: n2 }) : c2[t2] = n2, true);
    }, has({ _: { data: e2, setupState: t2, accessCache: n2, ctx: o2, appContext: r2, propsOptions: c2 } }, s2) {
      let i2;
      return !!n2[s2] || e2 !== O && T(e2, s2) || un(t2, s2) || (i2 = c2[0]) && T(i2, s2) || T(o2, s2) || T(an, s2) || T(r2.config.globalProperties, s2);
    }, defineProperty(e2, t2, n2) {
      return null != n2.get ? e2._.accessCache[t2] = 0 : T(n2, "value") && this.set(e2, t2, n2.value, null), Reflect.defineProperty(e2, t2, n2);
    } }).ownKeys = (e2) => (Nt("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e2));
    var fn = true;
    function pn(e2, t2, n2, o2 = false) {
      const { mixins: r2, extends: c2 } = t2;
      c2 && pn(e2, c2, n2, true), r2 && r2.forEach((t3) => pn(e2, t3, n2, true));
      for (const r3 in t2)
        if (o2 && "expose" === r3)
          Nt('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
        else {
          const o3 = dn[r3] || n2 && n2[r3];
          e2[r3] = o3 ? o3(e2[r3], t2[r3]) : t2[r3];
        }
      return e2;
    }
    var dn = { data: hn, props: gn, emits: gn, methods: mn, computed: mn, beforeCreate: yn, created: yn, beforeMount: yn, mounted: yn, beforeUpdate: yn, updated: yn, beforeDestroy: yn, beforeUnmount: yn, destroyed: yn, unmounted: yn, activated: yn, deactivated: yn, errorCaptured: yn, serverPrefetch: yn, components: mn, directives: mn, watch: function(e2, t2) {
      if (!e2)
        return t2;
      if (!t2)
        return e2;
      const n2 = S(/* @__PURE__ */ Object.create(null), e2);
      for (const o2 in t2)
        n2[o2] = yn(e2[o2], t2[o2]);
      return n2;
    }, provide: hn, inject: function(e2, t2) {
      return mn(vn(e2), vn(t2));
    } };
    function hn(e2, t2) {
      return t2 ? e2 ? function() {
        return S(D(e2) ? e2.call(this, this) : e2, D(t2) ? t2.call(this, this) : t2);
      } : t2 : e2;
    }
    function vn(e2) {
      if (j(e2)) {
        const t2 = {};
        for (let n2 = 0; e2.length > n2; n2++)
          t2[e2[n2]] = e2[n2];
        return t2;
      }
      return e2;
    }
    function yn(e2, t2) {
      return e2 ? [...new Set([].concat(e2, t2))] : t2;
    }
    function mn(e2, t2) {
      return e2 ? S(/* @__PURE__ */ Object.create(null), e2, t2) : t2;
    }
    function gn(e2, t2) {
      return e2 ? j(e2) && j(t2) ? [.../* @__PURE__ */ new Set([...e2, ...t2])] : S(/* @__PURE__ */ Object.create(null), ln(e2), ln(null != t2 ? t2 : {})) : t2;
    }
    var _n = function(e2, t2) {
      t2 && t2.pendingBranch ? j(e2) ? t2.effects.push(...e2) : t2.effects.push(e2) : Ut(e2);
    };
    var bn = Symbol.for("v-fgt");
    var wn = Symbol.for("v-txt");
    var En = Symbol.for("v-cmt");
    var Vn;
    var Dn;
    var Rn = null;
    (Dn = W().__VUE_INSTANCE_SETTERS__) || (Dn = W().__VUE_INSTANCE_SETTERS__ = []), Dn.push((e2) => Rn = e2), Vn = (e2) => {
      Dn.length > 1 ? Dn.forEach((t2) => t2(e2)) : Dn[0](e2);
    };
    var An = (e2) => {
      Vn(e2), e2.scope.on();
    };
    var Fn = () => {
      Rn && Rn.scope.off(), Vn(null);
    };
    var Mn = false;
    var In = /(?:^|[-_])(\w)/g;
    function Pn(e2, t2 = true) {
      return D(e2) ? e2.displayName || e2.name : e2.name || t2 && e2.__name;
    }
    function $n(e2, t2, n2 = false) {
      let o2 = Pn(t2);
      if (!o2 && t2.__file) {
        const e3 = t2.__file.match(/([^/\\]+)\.\w+$/);
        e3 && (o2 = e3[1]);
      }
      if (!o2 && e2 && e2.parent) {
        const n3 = (e3) => {
          for (const n4 in e3)
            if (e3[n4] === t2)
              return n4;
        };
        o2 = n3(e2.components || e2.parent.type.components) || n3(e2.appContext.components);
      }
      return o2 ? o2.replace(In, (e3) => e3.toUpperCase()).replace(/[-_]/g, "") : n2 ? "App" : "Anonymous";
    }
    function Bn(e2) {
      return D(e2) && "__vccOpts" in e2;
    }
    var zn = (e2, t2) => function(e3, t3, n2 = false) {
      let o2, r2;
      const c2 = D(e3);
      c2 ? (o2 = e3, r2 = true ? () => {
        console.warn("Write operation failed: computed value is readonly");
      } : x) : (o2 = e3.get, r2 = e3.set);
      const s2 = new Ot(o2, r2, c2 || !r2, n2);
      return t3 && !n2 && (s2.effect.onTrack = t3.onTrack, s2.effect.onTrigger = t3.onTrigger), s2;
    }(e2, t2, Mn);
    var Hn = Symbol.for("v-scx");
    var Wn = () => {
      {
        const e2 = function(e3, t2, n2 = false) {
          const o2 = Rn || null;
          if (o2) {
            const r2 = o2 ? null == o2.parent ? o2.vnode.appContext && o2.vnode.appContext.provides : o2.parent.provides : null._context.provides;
            if (r2 && e3 in r2)
              return r2[e3];
            if (arguments.length > 1)
              return n2 && D(t2) ? t2.call(o2 && o2.proxy) : t2;
            Nt(`injection "${e3 + ""}" not found.`);
          } else
            Nt("inject() can only be used inside setup() or functional components.");
        }(Hn);
        return e2 || Nt("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e2;
      }
    };
    function Un(e2) {
      return !(!e2 || !e2.__v_isShallow);
    }
    (function() {
      if ("production" !== false || "undefined" == typeof window)
        return;
      const e2 = { style: "color:#3ba776" }, t2 = { style: "color:#0b1bc9" }, n2 = { style: "color:#b62e24" }, o2 = { style: "color:#9d288c" }, r2 = { header: (t3) => F(t3) ? t3.__isVue ? ["div", e2, "VueInstance"] : yt(t3) ? ["div", {}, ["span", e2, l2(t3)], "<", i2(t3.value), ">"] : st(t3) ? ["div", {}, ["span", e2, Un(t3) ? "ShallowReactive" : "Reactive"], "<", i2(t3), ">" + (it(t3) ? " (readonly)" : "")] : it(t3) ? ["div", {}, ["span", e2, Un(t3) ? "ShallowReadonly" : "Readonly"], "<", i2(t3), ">"] : null : null, hasBody: (e3) => e3 && e3.__isVue, body(e3) {
        if (e3 && e3.__isVue)
          return ["div", {}, ...c2(e3.$)];
      } };
      function c2(e3) {
        const t3 = [];
        e3.type.props && e3.props && t3.push(s2("props", lt(e3.props))), e3.setupState !== O && t3.push(s2("setup", e3.setupState)), e3.data !== O && t3.push(s2("data", lt(e3.data)));
        const n3 = a2(e3, "computed");
        n3 && t3.push(s2("computed", n3));
        const r3 = a2(e3, "inject");
        return r3 && t3.push(s2("injected", r3)), t3.push(["div", {}, ["span", { style: o2.style + ";opacity:0.66" }, "$ (internal): "], ["object", { object: e3 }]]), t3;
      }
      function s2(e3, t3) {
        return t3 = S({}, t3), Object.keys(t3).length ? ["div", { style: "line-height:1.25em;margin-bottom:0.6em" }, ["div", { style: "color:#476582" }, e3], ["div", { style: "padding-left:1.25em" }, ...Object.keys(t3).map((e4) => ["div", {}, ["span", o2, e4 + ": "], i2(t3[e4], false)])]] : ["span", {}];
      }
      function i2(e3, r3 = true) {
        return "number" == typeof e3 ? ["span", t2, e3] : "string" == typeof e3 ? ["span", n2, JSON.stringify(e3)] : "boolean" == typeof e3 ? ["span", o2, e3] : F(e3) ? ["object", { object: r3 ? lt(e3) : e3 }] : ["span", n2, e3 + ""];
      }
      function a2(e3, t3) {
        const n3 = e3.type;
        if (D(n3))
          return;
        const o3 = {};
        for (const r3 in e3.ctx)
          u2(n3, r3, t3) && (o3[r3] = e3.ctx[r3]);
        return o3;
      }
      function u2(e3, t3, n3) {
        const o3 = e3[n3];
        return !!(j(o3) && o3.includes(t3) || F(o3) && t3 in o3) || !(!e3.extends || !u2(e3.extends, t3, n3)) || !(!e3.mixins || !e3.mixins.some((e4) => u2(e4, t3, n3))) || void 0;
      }
      function l2(e3) {
        return Un(e3) ? "ShallowRef" : e3.effect ? "ComputedRef" : "Ref";
      }
      window.devtoolsFormatters ? window.devtoolsFormatters.push(r2) : window.devtoolsFormatters = [r2];
    })();
    var Yn = function(e2) {
      if (!e2.startsWith("Cz"))
        return e2;
      var t2 = e2.toLowerCase();
      return "".concat("cz", "-").concat(t2.replace("cz", ""));
    };
    var qn = mt(2e3);
    var Kn = mt(1);
    var Ln = function(e2, t2, n2, o2, r2) {
      var c2 = "".concat(e2, "-").concat(t2);
      return n2 && (c2 += "-".concat(n2)), o2 && (c2 += "__".concat(o2)), r2 && (c2 += "--".concat(r2)), c2;
    };
    function Zn(e2) {
      return function(e3) {
        if (Array.isArray(e3))
          return y(e3);
      }(e2) || function(e3) {
        if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
          return Array.from(e3);
      }(e2) || m(e2) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function Gn(e2, t2) {
      for (var n2 = 0; t2.length > n2; n2++) {
        var o2 = t2[n2];
        o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, o2.key, o2);
      }
    }
    exports.CoSocket = function() {
      function e2(t3) {
        !function(e3, t4) {
          if (!(e3 instanceof t4))
            throw new TypeError("Cannot call a class as a function");
        }(this, e2), Object.defineProperty(this, "ws", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "reconnectTimer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "reconnectCount", { enumerable: true, configurable: true, writable: true, value: 10 }), Object.defineProperty(this, "heartTimeOut", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "ServerHeartbeatTimeout", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "defaultOptions", { enumerable: true, configurable: true, writable: true, value: { url: null, heartTime: 5e3, heartMessage: "ping", isReconnect: true, isOpenHeart: true, reconnectTime: 5e3, reconnectCount: 5, openCallBack: function(e3) {
          console.log("openCallBack", e3);
        }, closeCallBack: function(e3) {
          console.log("closeCallBack", e3);
        }, messageCallBack: function(e3) {
          console.log("messageCallBack", e3);
        }, errorCallBack: function(e3) {
          console.log("errorCallBack", e3);
        } } }), Object.assign(this.defaultOptions, t3), this.createConnect();
      }
      var t2, n2, o2;
      return t2 = e2, (n2 = [{ key: "createConnect", value: function() {
        if (!("WebSocket" in window))
          throw Error("当前浏览器不支持 WebSocket");
        if (!this.defaultOptions.url)
          throw Error("url未定义， 无法使用");
        this.ws = this.defaultOptions.protocols ? new WebSocket(this.defaultOptions.url, this.defaultOptions.protocols) : new WebSocket(this.defaultOptions.url), this.onopen(this.defaultOptions.openCallBack), this.onclose(this.defaultOptions.closeCallBack), this.onmessage(this.defaultOptions.messageCallBack);
      } }, { key: "onopen", value: function(e3) {
        var t3 = this;
        this.ws.onopen = function(n3) {
          clearTimeout(t3.reconnectTimer), t3.defaultOptions.reconnectCount = t3.reconnectCount, t3.reset(), t3.start(function() {
            t3.send(t3.defaultOptions.heartMessage);
          }), "function" != typeof e3 ? "function" == typeof t3.defaultOptions.openCallBack && t3.defaultOptions.openCallBack(n3) : e3(n3);
        };
      } }, { key: "onclose", value: function(e3) {
        var t3 = this;
        this.ws.onclose = function(n3) {
          t3.reset(), t3.defaultOptions.isReconnect && t3.onReconnect(), "function" != typeof e3 ? "function" == typeof t3.defaultOptions.closeCallBack && t3.defaultOptions.closeCallBack(n3) : e3(n3);
        };
      } }, { key: "onerror", value: function(e3) {
        var t3 = this;
        this.ws.onerror = function(n3) {
          "function" != typeof e3 ? "function" == typeof t3.defaultOptions.errorCallBack && t3.defaultOptions.errorCallBack(n3) : e3(n3);
        };
      } }, { key: "onmessage", value: function(e3) {
        var t3 = this;
        this.ws.onmessage = function(n3) {
          if (n3.data === t3.defaultOptions.heartMessage)
            t3.reset(), t3.start(function() {
              t3.send(t3.defaultOptions.heartMessage);
            });
          else {
            if ("function" == typeof e3)
              return void e3(n3.data);
            "function" == typeof t3.defaultOptions.messageCallBack && t3.defaultOptions.messageCallBack(n3.data);
          }
        };
      } }, { key: "send", value: function(e3) {
        if (this.ws.readyState !== this.ws.OPEN)
          throw Error("未连接服务器，无法发送");
        this.ws.send(e3);
      } }, { key: "close", value: function(e3, t3) {
        this.destroy(e3, t3);
      } }, { key: "onReconnect", value: function() {
        var e3 = this;
        this.defaultOptions.reconnectCount && this.defaultOptions.reconnectCount > 0 || -1 === this.defaultOptions.reconnectCount ? this.reconnectTimer = setTimeout(function() {
          e3.createConnect(), -1 !== e3.defaultOptions.reconnectCount && (e3.defaultOptions.reconnectCount = e3.defaultOptions.reconnectCount - 1);
        }, this.defaultOptions.reconnectTime) : (this.reconnectTimer && clearTimeout(this.reconnectTimer), this.defaultOptions.reconnectCount = this.reconnectCount);
      } }, { key: "destroy", value: function(e3, t3) {
        this.reset(), this.reconnectTimer && clearTimeout(this.reconnectTimer), this.defaultOptions.isReconnect = false, this.ws.close(e3, t3);
      } }, { key: "reset", value: function() {
        this.heartTimeOut && clearTimeout(this.heartTimeOut), this.ServerHeartbeatTimeout && clearTimeout(this.ServerHeartbeatTimeout);
      } }, { key: "start", value: function(e3) {
        var t3 = this;
        this.defaultOptions.isOpenHeart && (this.heartTimeOut = setTimeout(function(n3) {
          e3(n3), t3.ServerHeartbeatTimeout = setTimeout(function(n4) {
            e3(n4), t3.reset(), t3.start(e3);
          }, t3.defaultOptions.heartTime);
        }, this.defaultOptions.heartTime));
      } }]) && Gn(t2.prototype, n2), o2 && Gn(t2, o2), Object.defineProperty(t2, "prototype", { writable: false }), e2;
    }(), exports.beforeDate = function(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", o2 = _(e2, "yyyy-MM-dd HH:mm:ss"), r2 = new Date(o2).getTime(), c2 = 0;
      if (t2) {
        var s2 = _(t2, "yyyy-MM-dd HH:mm:ss");
        c2 = new Date(s2).getTime();
      } else
        c2 = (/* @__PURE__ */ new Date()).getTime();
      var i2 = 1e3, a2 = 60 * i2, u2 = 60 * a2, l2 = 24 * u2, f2 = 7 * l2, p2 = 30 * l2, d2 = 12 * p2, h2 = c2 - r2;
      return 0 > h2 ? n2 : 1 > h2 / d2 ? 1 > h2 / p2 ? 1 > h2 / f2 ? 1 > h2 / l2 ? 1 > h2 / u2 ? 1 > h2 / a2 ? "".concat(parseInt("".concat(h2 / i2), 10), "秒前") : "".concat(parseInt("".concat(h2 / a2), 10), "分钟前") : "".concat(parseInt("".concat(h2 / u2), 10), "小时前") : "".concat(parseInt("".concat(h2 / l2), 10), "天前") : "".concat(parseInt("".concat(h2 / f2), 10), "周前") : "".concat(parseInt("".concat(h2 / p2), 10), "个月前") : "".concat(parseInt("".concat(h2 / d2), 10), "年前");
    }, exports.camelize = function(e2) {
      return e2.replace(/-(\w)/g, function(e3, t2) {
        return t2.toUpperCase();
      });
    }, exports.camelizeToKebabCase = function(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
      return (e2 = n(e2)).replace(/[A-Z]/g, function(e3) {
        return t2 + e3.toLowerCase();
      });
    }, exports.cloneDeep = v, exports.desIdCard = function(e2) {
      return a(e2) ? e2.replace(/^(.{6})(?:\d+)(.{4})$/, "$1****$2") : e2;
    }, exports.desPhone = function(e2) {
      return i(e2) ? e2.replace(/^(.{3})(?:\d+)(.{4})$/, "$1****$2") : e2;
    }, exports.firstLetterToLowerCase = n, exports.firstLetterToUpperCase = t, exports.formatBytes = function(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      if (0 === e2)
        return "0 Bytes";
      var n2 = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], o2 = 1024, r2 = 0 > t2 ? 0 : t2, c2 = Math.floor(Math.log(e2) / Math.log(o2));
      return n2.length > c2 ? parseFloat((e2 / Math.pow(o2, c2)).toFixed(r2)) + " " + n2[c2] : "Number too large";
    }, exports.formatDate = _, exports.formatPriceToThousand = function(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ",", o2 = 3 >= arguments.length || void 0 === arguments[3] || arguments[3];
      if (f(+e2) && isFinite(+e2)) {
        f(t2) && isFinite(t2) || (t2 = 2);
        for (var r2 = "".concat(c(+e2, t2, o2)).split("."), s2 = /(-?\d+)(\d{3})/; s2.test(r2[0]); )
          r2[0] = r2[0].replace(s2, "$1" + n2 + "$2");
        return Math.abs(t2) > (r2[1] || "").length && (r2[1] = r2[1] || "", r2[1] += Array(Math.abs(t2) - r2[1].length + 1).join("0")), r2.join(".");
      }
      return "00.00";
    }, exports.getAge = function(e2) {
      a(e2) && (e2 = o(e2).birth);
      var t2 = g(_(e2, "yyyy/MM/dd").split("/"), 3), n2 = t2[0], r2 = t2[1], c2 = t2[2], s2 = /* @__PURE__ */ new Date(), i2 = s2.getFullYear(), u2 = s2.getMonth() + 1, l2 = s2.getDate();
      if ("".concat(i2) === n2)
        return 0;
      var f2 = i2 - parseInt(n2, 10);
      return f2 > 0 ? parseInt(u2 + "", 10) === parseInt(r2, 10) ? 0 > l2 - parseInt(c2, 10) ? f2 - 1 : f2 : 0 > u2 - parseInt(r2, 10) ? f2 - 1 : f2 : -1;
    }, exports.getCardInfo = o, exports.getNextGlobalId = function() {
      return Kn.value + 1;
    }, exports.getNextGlobalZIndex = function() {
      return qn.value + 1;
    }, exports.getTag = r, exports.isFullscreen = function() {
      var e2 = false;
      return (document.fullscreenEnabled || document.msFullscreenEnabled) && void 0 === (e2 = window.fullScreen || document.webkitIsFullScreen) && (e2 = false), e2;
    }, exports.isFunction = d, exports.isIdCard = a, exports.isNumber = l, exports.isNumeric = f, exports.isObjectLike = u, exports.isPhone = i, exports.isString = p, exports.isValidKey = h, exports.passwordStrengthLevel = function(e2) {
      return e2.length >= 8 && /[a-z]/.test(e2) && /[A-Z]/.test(e2) && /\d/.test(e2) && /[!@#$%^&*()\-=_+[\]{}|;:',.<>/?]/.test(e2) ? 12 > e2.length ? 2 : 3 : 1;
    }, exports.setGlobalZIndex = function(e2) {
      qn.value = e2;
    }, exports.toFixedFix = c, exports.toInteger = s, exports.useChunk = function(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (t2 !== 1 / 0 && t2 !== -1 / 0 || (t2 = t2 === 1 / 0 ? 1 : -1), !Array.isArray(e2) || !f(t2))
        return [];
      var n2 = s(+t2);
      if (1 > Math.max(n2, 0))
        return [];
      for (var o2 = Array(Math.ceil(e2.length / t2)), r2 = 0, c2 = 0; e2.length > r2; )
        o2[c2++] = e2.slice(r2, r2 += t2);
      return o2;
    }, exports.useComponentNameFormat = Yn, exports.useCreateComponentName = function(e2) {
      var n2 = t("Cz"), o2 = t(e2);
      return "".concat(n2).concat(o2);
    }, exports.useDebounce = function(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3, n2 = null;
      return function() {
        for (var o2 = this, r2 = arguments.length, c2 = Array(r2), s2 = 0; r2 > s2; s2++)
          c2[s2] = arguments[s2];
        null != n2 && (clearTimeout(n2), n2 = null), n2 = setTimeout(function() {
          e2.call.apply(e2, [o2].concat(c2));
        }, t2);
      };
    }, exports.useDebounceRef = function(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3, n2 = null;
      return null === t2 ? mt(e2) : Et(function(o2, r2) {
        return { get: function() {
          return o2(), e2;
        }, set: function(o3) {
          n2 && clearTimeout(n2), n2 = null, n2 = setTimeout(function() {
            e2 = o3, r2();
          }, t2);
        } };
      });
    }, exports.useDeepOmit = function(e2, t2) {
      return function e3(t3, n2) {
        if (Array.isArray(t3))
          return t3.map(function(t4) {
            return e3(t4, n2);
          });
        if (u(t3)) {
          var o2 = {};
          for (var r2 in t3)
            t3.hasOwnProperty(r2) && !n2.includes(r2) && (o2[r2] = e3(t3[r2], n2));
          return o2;
        }
        return t3;
      }(v(e2), t2);
    }, exports.useEmptyObject = function(e2, t2) {
      var n2 = function(e3) {
        return "string" == typeof e3 ? "" : "number" == typeof e3 ? 0 : "boolean" != typeof e3 && (Array.isArray(e3) ? [] : null);
      };
      return function t3(o2, r2) {
        var c2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : /* @__PURE__ */ new WeakSet();
        if (c2.has(o2))
          return e2;
        var s2 = {};
        c2.add(o2);
        var i2 = Object.keys(o2);
        return i2.forEach(function(e3) {
          var i3, a2 = o2[e3];
          s2[e3] = u(a2) ? t3(a2, null == r2 ? void 0 : r2[e3], c2) : null !== (i3 = null == r2 ? void 0 : r2[e3]) && void 0 !== i3 ? i3 : n2(a2);
        }), s2;
      }(e2, t2);
    }, exports.useExitFullScreen = function() {
      try {
        return document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen(), true;
      } catch (e2) {
        console.error(e2);
      }
      return false;
    }, exports.useFormValueWatcher = function(e2, t2) {
      return function e3(t3, n2) {
        if (p(t3) || l(t3)) {
          if ((p(n2) || l(n2)) && (Number.isNaN(+t3) ? t3 : +t3) !== (Number.isNaN(+n2) ? n2 : +n2))
            return true;
        } else if ("[object Date]" === toString.call(t3)) {
          if ("[object Date]" !== toString.call(n2) || t3 !== n2)
            return true;
        } else if ("[object Boolean]" === toString.call(t3)) {
          if ("[object Boolean]" !== toString.call(n2) || t3 !== n2)
            return true;
        } else if (Array.isArray(t3) || "[object Object]" === toString.call(t3)) {
          if (Array.isArray(t3)) {
            if (!Array.isArray(n2))
              return true;
            if (t3.length !== n2.length)
              return true;
          }
          if ("[object Object]" === toString.call(t3) && "[object Object]" !== toString.call(n2))
            return true;
          for (var o2 in t3)
            if (e3(t3[o2], n2[o2]))
              return true;
        }
        return false;
      }(e2, t2);
    }, exports.useLabelByVal = function(e2, t2, n2) {
      var o2 = Object.assign({}, { valueKey: "value", labelKey: "label" }, n2);
      return (e2.find(function(e3) {
        return e3[o2.valueKey] + "" == t2 + "";
      }) || {})[o2.labelKey] || "";
    }, exports.useMerge = function e2(t2) {
      for (var n2 = arguments.length, o2 = Array(n2 > 1 ? n2 - 1 : 0), r2 = 1; n2 > r2; r2++)
        o2[r2 - 1] = arguments[r2];
      if (!o2.length)
        return t2;
      var c2 = o2.shift();
      if (c2 && u(c2))
        for (var s2 in c2)
          c2.hasOwnProperty(s2) && (c2[s2] && u(c2[s2]) && !Array.isArray(c2[s2]) ? (t2[s2] && u(t2[s2]) || (t2[s2] = {}), e2(t2[s2], c2[s2])) : t2[s2] = c2[s2]);
      return e2.apply(void 0, [t2].concat(o2));
    }, exports.useNamespace = function(e2) {
      var t2 = zn(function() {
        return "cz";
      });
      return { namespace: t2, b: function() {
        var n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return Ln(_t(t2), e2, n2, "", "");
      }, e: function(n2) {
        return n2 ? Ln(_t(t2), e2, "", n2, "") : "";
      }, m: function(n2) {
        return n2 ? Ln(_t(t2), e2, "", "", n2) : "";
      }, be: function(n2, o2) {
        return n2 && o2 ? Ln(_t(t2), e2, n2, o2, "") : "";
      }, em: function(n2, o2) {
        return n2 && o2 ? Ln(_t(t2), e2, "", n2, o2) : "";
      }, bm: function(n2, o2) {
        return n2 && o2 ? Ln(_t(t2), e2, n2, "", o2) : "";
      }, bem: function(n2, o2, r2) {
        return n2 && o2 && r2 ? Ln(_t(t2), e2, n2, o2, r2) : "";
      }, is: function(e3) {
        var t3 = 1 > (arguments.length > 1 ? arguments.length - 1 : 0) || (arguments.length > 1 ? arguments[1] : void 0);
        return e3 && t3 ? "".concat("is-").concat(e3) : "";
      } };
    }, exports.useOmit = function(e2, t2) {
      var n2 = {}, o2 = new Set(t2);
      for (var r2 in e2)
        o2.has(r2) || (n2[r2] = e2[r2]);
      return n2;
    }, exports.usePick = function(e2, t2) {
      return t2.reduce(function(t3, n2) {
        return Object.prototype.hasOwnProperty.call(e2, n2) && (t3[n2] = e2[n2]), t3;
      }, {});
    }, exports.useSFCWithInstall = function(e2) {
      return e2.install = function(t2) {
        t2.component(e2.name, e2), t2.component(Yn(e2.name), e2);
      }, e2;
    }, exports.useSFCWithInstallFunction = function(e2, t2) {
      return e2.install = function(n2) {
        e2._context = n2._context, n2.config.globalProperties[t2] = e2;
      }, e2;
    }, exports.useSort = function(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = mt([]);
      return en(function() {
        var o2 = t2.key, r2 = t2.compareFn, c2 = Zn(e2.value);
        o2 ? c2.sort(function(e3, n3) {
          var c3 = e3[o2], s2 = n3[o2];
          return r2 ? r2(e3, n3) : "number" == typeof c3 && "number" == typeof s2 ? "asc" === t2.sortOrder ? c3 - s2 : s2 - c3 : "asc" === t2.sortOrder ? (c3 + "").localeCompare(s2 + "") : (s2 + "").localeCompare(c3 + "");
        }) : r2 && c2.sort(r2), n2.value = c2;
      }), n2;
    }, exports.useSortByKey = function(e2, t2) {
      return e2.sort(function(e3, n2) {
        if (d(null == t2 ? void 0 : t2.compareFn))
          return t2.compareFn ? null == t2 ? void 0 : t2.compareFn(e3, n2) : 0;
        var o2 = u(e3) ? e3[t2.key] : e3, r2 = u(n2) ? n2[t2.key] : n2;
        return f(o2) && f(r2) ? "asc" === t2.order ? +o2 - +r2 : +r2 - +o2 : p(o2) && p(r2) ? "asc" === t2.order ? o2.localeCompare(r2) : r2.localeCompare(o2) : 0;
      });
    }, exports.useSpiderEffects = function(e2) {
      var t2 = Object.assign({ zIndex: -1, opacity: 0.5, color: "0,0,0", count: 99 }, e2);
      function n2(e3, t3, n3) {
        return e3.getAttribute(t3) || n3;
      }
      function o2(e3) {
        return document.getElementsByTagName(e3);
      }
      function r2() {
        s2 = u2.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, i2 = u2.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      }
      function c2() {
        var e3, t3, n3, o3, r3, u3;
        null == p2 || p2.clearRect(0, 0, s2, i2), y2.forEach(function(c3, f3) {
          for (c3.x += c3.xa, c3.y += c3.ya, c3.xa *= c3.x > s2 || 0 > c3.x ? -1 : 1, c3.ya *= c3.y > i2 || 0 > c3.y ? -1 : 1, null == p2 || p2.fillRect(c3.x - 0.5, c3.y - 0.5, 1, 1), t3 = f3 + 1; a2.length > t3; t3++)
            null !== (e3 = a2[t3]).x && null !== e3.y && (e3.max > (u3 = (o3 = c3.x - e3.x) * o3 + (r3 = c3.y - e3.y) * r3) && (e3 === v2 && u3 >= e3.max / 2 && (c3.x -= 0.03 * o3, c3.y -= 0.03 * r3), n3 = (e3.max - u3) / e3.max, null == p2 || p2.beginPath(), p2.lineWidth = n3 / 2, p2.strokeStyle = "rgba(" + l2.c + "," + (n3 + 0.2) + ")", null == p2 || p2.moveTo(c3.x, c3.y), null == p2 || p2.lineTo(e3.x, e3.y), null == p2 || p2.stroke()));
        }), d2(c2);
      }
      var s2, i2, a2, u2 = document.createElement("canvas"), l2 = function() {
        var e3 = o2("script"), r3 = e3.length, c3 = e3[r3 - 1];
        return { l: r3, z: n2(c3, "zIndex", t2.zIndex), o: n2(c3, "opacity", t2.opacity), c: n2(c3, "color", t2.color), n: n2(c3, "count", t2.count) };
      }(), f2 = "c_n" + l2.l, p2 = u2.getContext("2d"), d2 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e3) {
        window.setTimeout(e3, 1e3 / 45);
      }, h2 = Math.random, v2 = { x: null, y: null, max: 2e4 };
      u2.id = f2, u2.style.cssText = "position:fixed;top:0;left:0;z-index:" + l2.z + ";opacity:" + l2.o, o2("body")[0].appendChild(u2), r2(), window.onresize = r2, window.onmousemove = function(e3) {
        e3 = e3 || window.event, v2.x = e3.clientX, v2.y = e3.clientY;
      }, window.onmouseout = function() {
        v2.x = null, v2.y = null;
      };
      for (var y2 = [], m2 = 0; l2.n > m2; m2++) {
        var g2 = h2() * s2, _2 = h2() * i2, b2 = 2 * h2() - 1, w2 = 2 * h2() - 1;
        y2.push({ x: g2, y: _2, xa: b2, ya: w2, max: 6e3 });
      }
      return a2 = y2.concat([v2]), setTimeout(function() {
        c2();
      }, 100), function() {
        var e3;
        null === (e3 = o2("body")[0]) || void 0 === e3 || e3.removeChild(u2);
      };
    }, exports.useToFullScreen = function() {
      try {
        return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || (document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.msRequestFullscreen ? document.documentElement.msRequestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)), true;
      } catch (e2) {
        console.error(e2);
      }
      return false;
    }, exports.useTransformList = function(e2) {
      var t2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { children: "children" }, o2 = n2.children, r2 = void 0 === o2 ? "children" : o2, c2 = [], s2 = function e3(t3) {
        var n3 = Object.assign({}, t3);
        if (delete n3[r2], c2.push(n3), t3[r2] && t3[r2].length) {
          var o3, s3 = b(t3[r2]);
          try {
            for (s3.s(); !(o3 = s3.n()).done; ) {
              e3(o3.value);
            }
          } catch (e4) {
            s3.e(e4);
          } finally {
            s3.f();
          }
        }
      }, i2 = b(e2);
      try {
        for (i2.s(); !(t2 = i2.n()).done; ) {
          var a2 = t2.value;
          s2(a2);
        }
      } catch (e3) {
        i2.e(e3);
      } finally {
        i2.f();
      }
      return c2;
    }, exports.useTransformTree = function e2(t2) {
      var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { parent: "parent", key: "id", pid: null }, o2 = [];
      return n2.key = n2.key || "id", n2.parent = n2.parent || "parent", n2.pid = void 0 === n2.pid ? null : n2.pid, t2.forEach(function(r2) {
        if (r2[n2.parent] === n2.pid) {
          var c2 = e2(t2.filter(function(e3) {
            var t3;
            return e3[null !== (t3 = n2.parent) && void 0 !== t3 ? t3 : "parent"] !== n2.pid;
          }), { parent: n2.parent, key: n2.key, pid: r2[n2.key] });
          o2.push(Object.assign(Object.assign({}, r2), c2.length ? { children: c2 } : { children: [] }));
        }
      }), o2;
    };
  }
});
export default require_dist();
//# sourceMappingURL=co-utils-vue.js.map
