var lm = Object.defineProperty;
var cm = (t, e, s) => e in t ? lm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var V = (t, e, s) => cm(t, typeof e != "symbol" ? e + "" : e, s);
/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function nl(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const s of t.split(",")) e[s] = 1;
  return (s) => s in e;
}
const Be = {}, wi = [], rs = () => {
}, qd = () => !1, oo = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), ro = (t) => t.startsWith("onUpdate:"), ht = Object.assign, al = (t, e) => {
  const s = t.indexOf(e);
  s > -1 && t.splice(s, 1);
}, um = Object.prototype.hasOwnProperty, Ie = (t, e) => um.call(t, e), fe = Array.isArray, Ri = (t) => Hn(t) === "[object Map]", Gd = (t) => Hn(t) === "[object Set]", Cc = (t) => Hn(t) === "[object Date]", pe = (t) => typeof t == "function", at = (t) => typeof t == "string", us = (t) => typeof t == "symbol", Oe = (t) => t !== null && typeof t == "object", Kd = (t) => (Oe(t) || pe(t)) && pe(t.then) && pe(t.catch), $d = Object.prototype.toString, Hn = (t) => $d.call(t), dm = (t) => Hn(t).slice(8, -1), Jd = (t) => Hn(t) === "[object Object]", ol = (t) => at(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, fn = /* @__PURE__ */ nl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), lo = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((s) => e[s] || (e[s] = t(s)));
}, fm = /-\w/g, wt = lo(
  (t) => t.replace(fm, (e) => e.slice(1).toUpperCase())
), hm = /\B([A-Z])/g, pi = lo(
  (t) => t.replace(hm, "-$1").toLowerCase()
), co = lo((t) => t.charAt(0).toUpperCase() + t.slice(1)), Wo = lo(
  (t) => t ? `on${co(t)}` : ""
), os = (t, e) => !Object.is(t, e), Bo = (t, ...e) => {
  for (let s = 0; s < t.length; s++)
    t[s](...e);
}, Yd = (t, e, s, i = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: s
  });
}, pm = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let wc;
const uo = () => wc || (wc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function rl(t) {
  if (fe(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++) {
      const i = t[s], n = at(i) ? ym(i) : rl(i);
      if (n)
        for (const a in n)
          e[a] = n[a];
    }
    return e;
  } else if (at(t) || Oe(t))
    return t;
}
const mm = /;(?![^(]*\))/g, gm = /:([^]+)/, bm = /\/\*[^]*?\*\//g;
function ym(t) {
  const e = {};
  return t.replace(bm, "").split(mm).forEach((s) => {
    if (s) {
      const i = s.split(gm);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
}
function Ke(t) {
  let e = "";
  if (at(t))
    e = t;
  else if (fe(t))
    for (let s = 0; s < t.length; s++) {
      const i = Ke(t[s]);
      i && (e += i + " ");
    }
  else if (Oe(t))
    for (const s in t)
      t[s] && (e += s + " ");
  return e.trim();
}
const vm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _m = /* @__PURE__ */ nl(vm);
function Xd(t) {
  return !!t || t === "";
}
function Sm(t, e) {
  if (t.length !== e.length) return !1;
  let s = !0;
  for (let i = 0; s && i < t.length; i++)
    s = ll(t[i], e[i]);
  return s;
}
function ll(t, e) {
  if (t === e) return !0;
  let s = Cc(t), i = Cc(e);
  if (s || i)
    return s && i ? t.getTime() === e.getTime() : !1;
  if (s = us(t), i = us(e), s || i)
    return t === e;
  if (s = fe(t), i = fe(e), s || i)
    return s && i ? Sm(t, e) : !1;
  if (s = Oe(t), i = Oe(e), s || i) {
    if (!s || !i)
      return !1;
    const n = Object.keys(t).length, a = Object.keys(e).length;
    if (n !== a)
      return !1;
    for (const o in t) {
      const r = t.hasOwnProperty(o), l = e.hasOwnProperty(o);
      if (r && !l || !r && l || !ll(t[o], e[o]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const Qd = (t) => !!(t && t.__v_isRef === !0), F = (t) => at(t) ? t : t == null ? "" : fe(t) || Oe(t) && (t.toString === $d || !pe(t.toString)) ? Qd(t) ? F(t.value) : JSON.stringify(t, Zd, 2) : String(t), Zd = (t, e) => Qd(e) ? Zd(t, e.value) : Ri(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (s, [i, n], a) => (s[Ho(i, a) + " =>"] = n, s),
    {}
  )
} : Gd(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((s) => Ho(s))
} : us(e) ? Ho(e) : Oe(e) && !fe(e) && !Jd(e) ? String(e) : e, Ho = (t, e = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    us(t) ? `Symbol(${(s = t.description) != null ? s : e})` : t
  );
};
/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ft;
class km {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && ft && (ft.active ? (this.parent = ft, this.index = (ft.scopes || (ft.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, s;
      if (this.scopes) {
        const i = this.scopes.slice();
        for (e = 0, s = i.length; e < s; e++)
          i[e].pause();
      }
      for (e = 0, s = this.effects.length; e < s; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, s;
      if (this.scopes) {
        const n = this.scopes.slice();
        for (e = 0, s = n.length; e < s; e++)
          n[e].resume();
      }
      const i = this.effects.slice();
      for (e = 0, s = i.length; e < s; e++)
        i[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const s = ft;
      try {
        return ft = this, e();
      } finally {
        ft = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ft, ft = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ft === this)
        ft = this.prevScope;
      else {
        let e = ft;
        for (; e; ) {
          if (e.prevScope === this) {
            e.prevScope = this.prevScope;
            break;
          }
          e = e.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let s, i;
      for (s = 0, i = this.effects.length; s < i; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, i = this.cleanups.length; s < i; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        const n = this.scopes.slice();
        for (s = 0, i = n.length; s < i; s++)
          n[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const n = this.parent.scopes.pop();
        n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Tm() {
  return ft;
}
let je;
const jo = /* @__PURE__ */ new WeakSet();
class ef {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ft && (ft.active ? ft.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, jo.has(this) && (jo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || sf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Rc(this), nf(this);
    const e = je, s = qt;
    je = this, qt = !0;
    try {
      return this.fn();
    } finally {
      af(this), je = e, qt = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        dl(e);
      this.deps = this.depsTail = void 0, Rc(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? jo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    kr(this) && this.run();
  }
  get dirty() {
    return kr(this);
  }
}
let tf = 0, hn, pn;
function sf(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = pn, pn = t;
    return;
  }
  t.next = hn, hn = t;
}
function cl() {
  tf++;
}
function ul() {
  if (--tf > 0)
    return;
  if (pn) {
    let e = pn;
    for (pn = void 0; e; ) {
      const s = e.next;
      e.next = void 0, e.flags &= -9, e = s;
    }
  }
  let t;
  for (; hn; ) {
    let e = hn;
    for (hn = void 0; e; ) {
      const s = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (i) {
          t || (t = i);
        }
      e = s;
    }
  }
  if (t) throw t;
}
function nf(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function af(t) {
  let e, s = t.depsTail, i = s;
  for (; i; ) {
    const n = i.prevDep;
    i.version === -1 ? (i === s && (s = n), dl(i), xm(i)) : e = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = n;
  }
  t.deps = e, t.depsTail = s;
}
function kr(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (of(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function of(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === An) || (t.globalVersion = An, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !kr(t))))
    return;
  t.flags |= 2;
  const e = t.dep, s = je, i = qt;
  je = t, qt = !0;
  try {
    nf(t);
    const n = t.fn(t._value);
    (e.version === 0 || os(n, t._value)) && (t.flags |= 128, t._value = n, e.version++);
  } catch (n) {
    throw e.version++, n;
  } finally {
    je = s, qt = i, af(t), t.flags &= -3;
  }
}
function dl(t, e = !1) {
  const { dep: s, prevSub: i, nextSub: n } = t;
  if (i && (i.nextSub = n, t.prevSub = void 0), n && (n.prevSub = i, t.nextSub = void 0), s.subs === t && (s.subs = i, !i && s.computed)) {
    s.computed.flags &= -5;
    for (let a = s.computed.deps; a; a = a.nextDep)
      dl(a, !0);
  }
  !e && !--s.sc && s.map && s.map.delete(s.key);
}
function xm(t) {
  const { prevDep: e, nextDep: s } = t;
  e && (e.nextDep = s, t.prevDep = void 0), s && (s.prevDep = e, t.nextDep = void 0);
}
let qt = !0;
const rf = [];
function As() {
  rf.push(qt), qt = !1;
}
function Ps() {
  const t = rf.pop();
  qt = t === void 0 ? !0 : t;
}
function Rc(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const s = je;
    je = void 0;
    try {
      e();
    } finally {
      je = s;
    }
  }
}
let An = 0;
class Am {
  constructor(e, s) {
    this.sub = e, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class fl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!je || !qt || je === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== je)
      s = this.activeLink = new Am(je, this), je.deps ? (s.prevDep = je.depsTail, je.depsTail.nextDep = s, je.depsTail = s) : je.deps = je.depsTail = s, lf(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const i = s.nextDep;
      i.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = i), s.prevDep = je.depsTail, s.nextDep = void 0, je.depsTail.nextDep = s, je.depsTail = s, je.deps === s && (je.deps = i);
    }
    return s;
  }
  trigger(e) {
    this.version++, An++, this.notify(e);
  }
  notify(e) {
    cl();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      ul();
    }
  }
}
function lf(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let i = e.deps; i; i = i.nextDep)
        lf(i);
    }
    const s = t.dep.subs;
    s !== t && (t.prevSub = s, s && (s.nextSub = t)), t.dep.subs = t;
  }
}
const Tr = /* @__PURE__ */ new WeakMap(), ri = /* @__PURE__ */ Symbol(
  ""
), xr = /* @__PURE__ */ Symbol(
  ""
), Pn = /* @__PURE__ */ Symbol(
  ""
);
function gt(t, e, s) {
  if (qt && je) {
    let i = Tr.get(t);
    i || Tr.set(t, i = /* @__PURE__ */ new Map());
    let n = i.get(s);
    n || (i.set(s, n = new fl()), n.map = i, n.key = s), n.track();
  }
}
function vs(t, e, s, i, n, a) {
  const o = Tr.get(t);
  if (!o) {
    An++;
    return;
  }
  const r = (l) => {
    l && l.trigger();
  };
  if (cl(), e === "clear")
    o.forEach(r);
  else {
    const l = fe(t), c = l && ol(s);
    if (l && s === "length") {
      const u = Number(i);
      o.forEach((d, f) => {
        (f === "length" || f === Pn || !us(f) && f >= u) && r(d);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && r(o.get(s)), c && r(o.get(Pn)), e) {
        case "add":
          l ? c && r(o.get("length")) : (r(o.get(ri)), Ri(t) && r(o.get(xr)));
          break;
        case "delete":
          l || (r(o.get(ri)), Ri(t) && r(o.get(xr)));
          break;
        case "set":
          Ri(t) && r(o.get(ri));
          break;
      }
  }
  ul();
}
function bi(t) {
  const e = /* @__PURE__ */ De(t);
  return e === t ? e : (gt(e, "iterate", Pn), /* @__PURE__ */ jt(t) ? e : e.map(Kt));
}
function fo(t) {
  return gt(t = /* @__PURE__ */ De(t), "iterate", Pn), t;
}
function ns(t, e) {
  return /* @__PURE__ */ Cs(t) ? Oi(/* @__PURE__ */ li(t) ? Kt(e) : e) : Kt(e);
}
const Pm = {
  __proto__: null,
  [Symbol.iterator]() {
    return zo(this, Symbol.iterator, (t) => ns(this, t));
  },
  concat(...t) {
    return bi(this).concat(
      ...t.map((e) => fe(e) ? bi(e) : e)
    );
  },
  entries() {
    return zo(this, "entries", (t) => (t[1] = ns(this, t[1]), t));
  },
  every(t, e) {
    return ds(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return ds(
      this,
      "filter",
      t,
      e,
      (s) => s.map((i) => ns(this, i)),
      arguments
    );
  },
  find(t, e) {
    return ds(
      this,
      "find",
      t,
      e,
      (s) => ns(this, s),
      arguments
    );
  },
  findIndex(t, e) {
    return ds(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return ds(
      this,
      "findLast",
      t,
      e,
      (s) => ns(this, s),
      arguments
    );
  },
  findLastIndex(t, e) {
    return ds(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return ds(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return Vo(this, "includes", t);
  },
  indexOf(...t) {
    return Vo(this, "indexOf", t);
  },
  join(t) {
    return bi(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return Vo(this, "lastIndexOf", t);
  },
  map(t, e) {
    return ds(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return Ki(this, "pop");
  },
  push(...t) {
    return Ki(this, "push", t);
  },
  reduce(t, ...e) {
    return Mc(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Mc(this, "reduceRight", t, e);
  },
  shift() {
    return Ki(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return ds(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return Ki(this, "splice", t);
  },
  toReversed() {
    return bi(this).toReversed();
  },
  toSorted(t) {
    return bi(this).toSorted(t);
  },
  toSpliced(...t) {
    return bi(this).toSpliced(...t);
  },
  unshift(...t) {
    return Ki(this, "unshift", t);
  },
  values() {
    return zo(this, "values", (t) => ns(this, t));
  }
};
function zo(t, e, s) {
  const i = fo(t), n = i[e]();
  return i !== t && !/* @__PURE__ */ jt(t) && (n._next = n.next, n.next = () => {
    const a = n._next();
    return a.done || (a.value = s(a.value)), a;
  }), n;
}
const Cm = Array.prototype;
function ds(t, e, s, i, n, a) {
  const o = fo(t), r = o !== t && !/* @__PURE__ */ jt(t), l = o[e];
  if (l !== Cm[e]) {
    const d = l.apply(t, a);
    return r ? Kt(d) : d;
  }
  let c = s;
  o !== t && (r ? c = function(d, f) {
    return s.call(this, ns(t, d), f, t);
  } : s.length > 2 && (c = function(d, f) {
    return s.call(this, d, f, t);
  }));
  const u = l.call(o, c, i);
  return r && n ? n(u) : u;
}
function Mc(t, e, s, i) {
  const n = fo(t), a = n !== t && !/* @__PURE__ */ jt(t);
  let o = s, r = !1;
  n !== t && (a ? (r = i.length === 0, o = function(c, u, d) {
    return r && (r = !1, c = ns(t, c)), s.call(this, c, ns(t, u), d, t);
  }) : s.length > 3 && (o = function(c, u, d) {
    return s.call(this, c, u, d, t);
  }));
  const l = n[e](o, ...i);
  return r ? ns(t, l) : l;
}
function Vo(t, e, s) {
  const i = /* @__PURE__ */ De(t);
  gt(i, "iterate", Pn);
  const n = i[e](...s);
  return (n === -1 || n === !1) && /* @__PURE__ */ ml(s[0]) ? (s[0] = /* @__PURE__ */ De(s[0]), i[e](...s)) : n;
}
function Ki(t, e, s = []) {
  As(), cl();
  const i = (/* @__PURE__ */ De(t))[e].apply(t, s);
  return ul(), Ps(), i;
}
const wm = /* @__PURE__ */ nl("__proto__,__v_isRef,__isVue"), cf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(us)
);
function Rm(t) {
  us(t) || (t = String(t));
  const e = /* @__PURE__ */ De(this);
  return gt(e, "has", t), e.hasOwnProperty(t);
}
class uf {
  constructor(e = !1, s = !1) {
    this._isReadonly = e, this._isShallow = s;
  }
  get(e, s, i) {
    if (s === "__v_skip") return e.__v_skip;
    const n = this._isReadonly, a = this._isShallow;
    if (s === "__v_isReactive")
      return !n;
    if (s === "__v_isReadonly")
      return n;
    if (s === "__v_isShallow")
      return a;
    if (s === "__v_raw")
      return i === (n ? a ? Wm : pf : a ? hf : ff).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
    const o = fe(e);
    if (!n) {
      let l;
      if (o && (l = Pm[s]))
        return l;
      if (s === "hasOwnProperty")
        return Rm;
    }
    const r = Reflect.get(
      e,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ vt(e) ? e : i
    );
    if ((us(s) ? cf.has(s) : wm(s)) || (n || gt(e, "get", s), a))
      return r;
    if (/* @__PURE__ */ vt(r)) {
      const l = o && ol(s) ? r : r.value;
      return n && Oe(l) ? /* @__PURE__ */ Pr(l) : l;
    }
    return Oe(r) ? n ? /* @__PURE__ */ Pr(r) : /* @__PURE__ */ jn(r) : r;
  }
}
class df extends uf {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, s, i, n) {
    let a = e[s];
    const o = fe(e) && ol(s);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Cs(a);
      if (!/* @__PURE__ */ jt(i) && !/* @__PURE__ */ Cs(i) && (a = /* @__PURE__ */ De(a), i = /* @__PURE__ */ De(i)), !o && /* @__PURE__ */ vt(a) && !/* @__PURE__ */ vt(i))
        return c || (a.value = i), !0;
    }
    const r = o ? Number(s) < e.length : Ie(e, s), l = Reflect.set(
      e,
      s,
      i,
      /* @__PURE__ */ vt(e) ? e : n
    );
    return e === /* @__PURE__ */ De(n) && l && (r ? os(i, a) && vs(e, "set", s, i) : vs(e, "add", s, i)), l;
  }
  deleteProperty(e, s) {
    const i = Ie(e, s);
    e[s];
    const n = Reflect.deleteProperty(e, s);
    return n && i && vs(e, "delete", s, void 0), n;
  }
  has(e, s) {
    const i = Reflect.has(e, s);
    return (!us(s) || !cf.has(s)) && gt(e, "has", s), i;
  }
  ownKeys(e) {
    return gt(
      e,
      "iterate",
      fe(e) ? "length" : ri
    ), Reflect.ownKeys(e);
  }
}
class Mm extends uf {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, s) {
    return !0;
  }
  deleteProperty(e, s) {
    return !0;
  }
}
const Dm = /* @__PURE__ */ new df(), Im = /* @__PURE__ */ new Mm(), Em = /* @__PURE__ */ new df(!0);
const Ar = (t) => t, ra = (t) => Reflect.getPrototypeOf(t);
function Om(t, e, s) {
  return function(...i) {
    const n = this.__v_raw, a = /* @__PURE__ */ De(n), o = Ri(a), r = t === "entries" || t === Symbol.iterator && o, l = t === "keys" && o, c = n[t](...i), u = s ? Ar : e ? Oi : Kt;
    return !e && gt(
      a,
      "iterate",
      l ? xr : ri
    ), ht(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: f } = c.next();
          return f ? { value: d, done: f } : {
            value: r ? [u(d[0]), u(d[1])] : u(d),
            done: f
          };
        }
      }
    );
  };
}
function la(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Nm(t, e) {
  const s = {
    get(n) {
      const a = this.__v_raw, o = /* @__PURE__ */ De(a), r = /* @__PURE__ */ De(n);
      t || (os(n, r) && gt(o, "get", n), gt(o, "get", r));
      const { has: l } = ra(o), c = e ? Ar : t ? Oi : Kt;
      if (l.call(o, n))
        return c(a.get(n));
      if (l.call(o, r))
        return c(a.get(r));
      a !== o && a.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !t && gt(/* @__PURE__ */ De(n), "iterate", ri), n.size;
    },
    has(n) {
      const a = this.__v_raw, o = /* @__PURE__ */ De(a), r = /* @__PURE__ */ De(n);
      return t || (os(n, r) && gt(o, "has", n), gt(o, "has", r)), n === r ? a.has(n) : a.has(n) || a.has(r);
    },
    forEach(n, a) {
      const o = this, r = o.__v_raw, l = /* @__PURE__ */ De(r), c = e ? Ar : t ? Oi : Kt;
      return !t && gt(l, "iterate", ri), r.forEach((u, d) => n.call(a, c(u), c(d), o));
    }
  };
  return ht(
    s,
    t ? {
      add: la("add"),
      set: la("set"),
      delete: la("delete"),
      clear: la("clear")
    } : {
      add(n) {
        const a = /* @__PURE__ */ De(this), o = ra(a), r = /* @__PURE__ */ De(n), l = !e && !/* @__PURE__ */ jt(n) && !/* @__PURE__ */ Cs(n) ? r : n;
        return o.has.call(a, l) || os(n, l) && o.has.call(a, n) || os(r, l) && o.has.call(a, r) || (a.add(l), vs(a, "add", l, l)), this;
      },
      set(n, a) {
        !e && !/* @__PURE__ */ jt(a) && !/* @__PURE__ */ Cs(a) && (a = /* @__PURE__ */ De(a));
        const o = /* @__PURE__ */ De(this), { has: r, get: l } = ra(o);
        let c = r.call(o, n);
        c || (n = /* @__PURE__ */ De(n), c = r.call(o, n));
        const u = l.call(o, n);
        return o.set(n, a), c ? os(a, u) && vs(o, "set", n, a) : vs(o, "add", n, a), this;
      },
      delete(n) {
        const a = /* @__PURE__ */ De(this), { has: o, get: r } = ra(a);
        let l = o.call(a, n);
        l || (n = /* @__PURE__ */ De(n), l = o.call(a, n)), r && r.call(a, n);
        const c = a.delete(n);
        return l && vs(a, "delete", n, void 0), c;
      },
      clear() {
        const n = /* @__PURE__ */ De(this), a = n.size !== 0, o = n.clear();
        return a && vs(
          n,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((n) => {
    s[n] = Om(n, t, e);
  }), s;
}
function hl(t, e) {
  const s = Nm(t, e);
  return (i, n, a) => n === "__v_isReactive" ? !t : n === "__v_isReadonly" ? t : n === "__v_raw" ? i : Reflect.get(
    Ie(s, n) && n in i ? s : i,
    n,
    a
  );
}
const Lm = {
  get: /* @__PURE__ */ hl(!1, !1)
}, Um = {
  get: /* @__PURE__ */ hl(!1, !0)
}, Fm = {
  get: /* @__PURE__ */ hl(!0, !1)
};
const ff = /* @__PURE__ */ new WeakMap(), hf = /* @__PURE__ */ new WeakMap(), pf = /* @__PURE__ */ new WeakMap(), Wm = /* @__PURE__ */ new WeakMap();
function Bm(t) {
  switch (t) {
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
}
// @__NO_SIDE_EFFECTS__
function jn(t) {
  return /* @__PURE__ */ Cs(t) ? t : pl(
    t,
    !1,
    Dm,
    Lm,
    ff
  );
}
// @__NO_SIDE_EFFECTS__
function mf(t) {
  return pl(
    t,
    !1,
    Em,
    Um,
    hf
  );
}
// @__NO_SIDE_EFFECTS__
function Pr(t) {
  return pl(
    t,
    !0,
    Im,
    Fm,
    pf
  );
}
function pl(t, e, s, i, n) {
  if (!Oe(t) || t.__v_raw && !(e && t.__v_isReactive) || t.__v_skip || !Object.isExtensible(t))
    return t;
  const a = n.get(t);
  if (a)
    return a;
  const o = Bm(dm(t));
  if (o === 0)
    return t;
  const r = new Proxy(
    t,
    o === 2 ? i : s
  );
  return n.set(t, r), r;
}
// @__NO_SIDE_EFFECTS__
function li(t) {
  return /* @__PURE__ */ Cs(t) ? /* @__PURE__ */ li(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Cs(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function jt(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ml(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function De(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ De(e) : t;
}
function Hm(t) {
  return !Ie(t, "__v_skip") && Object.isExtensible(t) && Yd(t, "__v_skip", !0), t;
}
const Kt = (t) => Oe(t) ? /* @__PURE__ */ jn(t) : t, Oi = (t) => Oe(t) ? /* @__PURE__ */ Pr(t) : t;
// @__NO_SIDE_EFFECTS__
function vt(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function oe(t) {
  return gf(t, !1);
}
// @__NO_SIDE_EFFECTS__
function jm(t) {
  return gf(t, !0);
}
function gf(t, e) {
  return /* @__PURE__ */ vt(t) ? t : new zm(t, e);
}
class zm {
  constructor(e, s) {
    this.dep = new fl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? e : /* @__PURE__ */ De(e), this._value = s ? e : Kt(e), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const s = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ jt(e) || /* @__PURE__ */ Cs(e);
    e = i ? e : /* @__PURE__ */ De(e), os(e, s) && (this._rawValue = e, this._value = i ? e : Kt(e), this.dep.trigger());
  }
}
function te(t) {
  return /* @__PURE__ */ vt(t) ? t.value : t;
}
const Vm = {
  get: (t, e, s) => e === "__v_raw" ? t : te(Reflect.get(t, e, s)),
  set: (t, e, s, i) => {
    const n = t[e];
    return /* @__PURE__ */ vt(n) && !/* @__PURE__ */ vt(s) ? (n.value = s, !0) : Reflect.set(t, e, s, i);
  }
};
function bf(t) {
  return /* @__PURE__ */ li(t) ? t : new Proxy(t, Vm);
}
class qm {
  constructor(e, s, i) {
    this.fn = e, this.setter = s, this._value = void 0, this.dep = new fl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = An - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    je !== this)
      return sf(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return of(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function Gm(t, e, s = !1) {
  let i, n;
  return pe(t) ? i = t : (i = t.get, n = t.set), new qm(i, n, s);
}
const ca = {}, Ba = /* @__PURE__ */ new WeakMap();
let si;
function Km(t, e = !1, s = si) {
  if (s) {
    let i = Ba.get(s);
    i || Ba.set(s, i = []), i.push(t);
  }
}
function $m(t, e, s = Be) {
  const { immediate: i, deep: n, once: a, scheduler: o, augmentJob: r, call: l } = s, c = (P) => n ? P : /* @__PURE__ */ jt(P) || n === !1 || n === 0 ? _s(P, 1) : _s(P);
  let u, d, f, h, m = !1, g = !1;
  if (/* @__PURE__ */ vt(t) ? (d = () => t.value, m = /* @__PURE__ */ jt(t)) : /* @__PURE__ */ li(t) ? (d = () => c(t), m = !0) : fe(t) ? (g = !0, m = t.some((P) => /* @__PURE__ */ li(P) || /* @__PURE__ */ jt(P)), d = () => t.map((P) => {
    if (/* @__PURE__ */ vt(P))
      return P.value;
    if (/* @__PURE__ */ li(P))
      return c(P);
    if (pe(P))
      return l ? l(P, 2) : P();
  })) : pe(t) ? e ? d = l ? () => l(t, 2) : t : d = () => {
    if (f) {
      As();
      try {
        f();
      } finally {
        Ps();
      }
    }
    const P = si;
    si = u;
    try {
      return l ? l(t, 3, [h]) : t(h);
    } finally {
      si = P;
    }
  } : d = rs, e && n) {
    const P = d, M = n === !0 ? 1 / 0 : n;
    d = () => _s(P(), M);
  }
  const v = Tm(), T = () => {
    u.stop(), v && v.active && al(v.effects, u);
  };
  if (a && e) {
    const P = e;
    e = (...M) => {
      const w = P(...M);
      return T(), w;
    };
  }
  let x = g ? new Array(t.length).fill(ca) : ca;
  const C = (P) => {
    if (!(!(u.flags & 1) || !u.dirty && !P))
      if (e) {
        const M = u.run();
        if (P || n || m || (g ? M.some((w, O) => os(w, x[O])) : os(M, x))) {
          f && f();
          const w = si;
          si = u;
          try {
            const O = [
              M,
              // pass undefined as the old value when it's changed for the first time
              x === ca ? void 0 : g && x[0] === ca ? [] : x,
              h
            ];
            x = M, l ? l(e, 3, O) : (
              // @ts-expect-error
              e(...O)
            );
          } finally {
            si = w;
          }
        }
      } else
        u.run();
  };
  return r && r(C), u = new ef(d), u.scheduler = o ? () => o(C, !1) : C, h = (P) => Km(P, !1, u), f = u.onStop = () => {
    const P = Ba.get(u);
    if (P) {
      if (l)
        l(P, 4);
      else
        for (const M of P) M();
      Ba.delete(u);
    }
  }, e ? i ? C(!0) : x = u.run() : o ? o(C.bind(null, !0), !0) : u.run(), T.pause = u.pause.bind(u), T.resume = u.resume.bind(u), T.stop = T, T;
}
function _s(t, e = 1 / 0, s) {
  if (e <= 0 || !Oe(t) || t.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(t) || 0) >= e))
    return t;
  if (s.set(t, e), e--, /* @__PURE__ */ vt(t))
    _s(t.value, e, s);
  else if (fe(t))
    for (let i = 0; i < t.length; i++)
      _s(t[i], e, s);
  else if (Gd(t) || Ri(t))
    t.forEach((i) => {
      _s(i, e, s);
    });
  else if (Jd(t)) {
    for (const i in t)
      _s(t[i], e, s);
    for (const i of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, i) && _s(t[i], e, s);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function zn(t, e, s, i) {
  try {
    return i ? t(...i) : t();
  } catch (n) {
    ho(n, e, s);
  }
}
function $t(t, e, s, i) {
  if (pe(t)) {
    const n = zn(t, e, s, i);
    return n && Kd(n) && n.catch((a) => {
      ho(a, e, s);
    }), n;
  }
  if (fe(t)) {
    const n = [];
    for (let a = 0; a < t.length; a++)
      n.push($t(t[a], e, s, i));
    return n;
  }
}
function ho(t, e, s, i = !0) {
  const n = e ? e.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = e && e.appContext.config || Be;
  if (e) {
    let r = e.parent;
    const l = e.proxy, c = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](t, l, c) === !1)
            return;
      }
      r = r.parent;
    }
    if (a) {
      As(), zn(a, null, 10, [
        t,
        l,
        c
      ]), Ps();
      return;
    }
  }
  Jm(t, s, n, i, o);
}
function Jm(t, e, s, i = !0, n = !1) {
  if (n)
    throw t;
  console.error(t);
}
const Ct = [];
let ts = -1;
const Mi = [];
let Ns = null, Si = 0;
const yf = /* @__PURE__ */ Promise.resolve();
let Ha = null;
function xi(t) {
  const e = Ha || yf;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Ym(t) {
  let e = ts + 1, s = Ct.length;
  for (; e < s; ) {
    const i = e + s >>> 1, n = Ct[i], a = Cn(n);
    a < t || a === t && n.flags & 2 ? e = i + 1 : s = i;
  }
  return e;
}
function gl(t) {
  if (!(t.flags & 1)) {
    const e = Cn(t), s = Ct[Ct.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Cn(s) ? Ct.push(t) : Ct.splice(Ym(e), 0, t), t.flags |= 1, vf();
  }
}
function vf() {
  Ha || (Ha = yf.then(Sf));
}
function Xm(t) {
  if (!fe(t))
    Ns && t.id === -1 ? Ns.splice(Si + 1, 0, t) : t.flags & 1 || (Mi.push(t), t.flags |= 1);
  else
    for (let e = 0; e < t.length; e++)
      Mi.push(t[e]);
  vf();
}
function Dc(t, e, s = ts + 1) {
  for (; s < Ct.length; s++) {
    const i = Ct[s];
    if (i && i.flags & 2) {
      if (t && i.id !== t.uid)
        continue;
      Ct.splice(s, 1), s--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function _f(t) {
  if (Mi.length) {
    const e = [...new Set(Mi)].sort(
      (s, i) => Cn(s) - Cn(i)
    );
    if (Mi.length = 0, Ns) {
      for (let s = 0; s < e.length; s++)
        Ns.push(e[s]);
      return;
    }
    for (Ns = e, Si = 0; Si < Ns.length; Si++) {
      const s = Ns[Si];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ns = null, Si = 0;
  }
}
const Cn = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Sf(t) {
  try {
    for (ts = 0; ts < Ct.length; ts++) {
      const e = Ct[ts];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), zn(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; ts < Ct.length; ts++) {
      const e = Ct[ts];
      e && (e.flags &= -2);
    }
    ts = -1, Ct.length = 0, _f(), Ha = null, (Ct.length || Mi.length) && Sf();
  }
}
let Ft = null, kf = null;
function ja(t) {
  const e = Ft;
  return Ft = t, kf = t && t.type.__scopeId || null, e;
}
function Tf(t, e = Ft, s) {
  if (!e || t._n)
    return t;
  const i = (...n) => {
    i._d && qa(-1);
    const a = ja(e), o = ci.length;
    let r;
    try {
      r = t(...n);
    } finally {
      for (let l = ci.length; l > o; l--) $f();
      ja(a), i._d && qa(1);
    }
    return r;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Is(t, e) {
  if (Ft === null)
    return t;
  const s = vo(Ft), i = t.dirs || (t.dirs = []);
  for (let n = 0; n < e.length; n++) {
    let [a, o, r, l = Be] = e[n];
    a && (pe(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && _s(o), i.push({
      dir: a,
      instance: s,
      value: o,
      oldValue: void 0,
      arg: r,
      modifiers: l
    }));
  }
  return t;
}
function Ys(t, e, s, i) {
  const n = t.dirs, a = e && e.dirs;
  for (let o = 0; o < n.length; o++) {
    const r = n[o];
    a && (r.oldValue = a[o].value);
    let l = r.dir[i];
    l && (As(), $t(l, s, 8, [
      t.el,
      r,
      t,
      e
    ]), Ps());
  }
}
function Ra(t, e) {
  if (bt) {
    let s = bt.provides;
    const i = bt.parent && bt.parent.provides;
    i === s && (s = bt.provides = Object.create(i)), s[t] = e;
  }
}
function Ot(t, e, s = !1) {
  const i = Xg();
  if (i || Ii) {
    let n = Ii ? Ii._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (n && t in n)
      return n[t];
    if (arguments.length > 1)
      return s && pe(e) ? e.call(i && i.proxy) : e;
  }
}
const Qm = /* @__PURE__ */ Symbol.for("v-scx"), Zm = () => Ot(Qm);
function Di(t, e, s) {
  return xf(t, e, s);
}
function xf(t, e, s = Be) {
  const { immediate: i, deep: n, flush: a, once: o } = s, r = ht({}, s), l = e && i || !e && a !== "post";
  let c;
  if (Mn) {
    if (a === "sync") {
      const h = Zm();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = rs, h.resume = rs, h.pause = rs, h;
    }
  }
  const u = bt;
  r.call = (h, m, g) => $t(h, u, m, g);
  let d = !1;
  a === "post" ? r.scheduler = (h) => {
    Dt(h, u && u.suspense);
  } : a !== "sync" && (d = !0, r.scheduler = (h, m) => {
    m ? h() : gl(h);
  }), r.augmentJob = (h) => {
    e && (h.flags |= 4), d && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const f = $m(t, e, r);
  return Mn && (c ? c.push(f) : l && f()), f;
}
function eg(t, e, s) {
  const i = this.proxy, n = at(t) ? t.includes(".") ? Af(i, t) : () => i[t] : t.bind(i, i);
  let a;
  pe(e) ? a = e : (a = e.handler, s = e);
  const o = Vn(this), r = xf(n, a.bind(i), s);
  return o(), r;
}
function Af(t, e) {
  const s = e.split(".");
  return () => {
    let i = t;
    for (let n = 0; n < s.length && i; n++)
      i = i[s[n]];
    return i;
  };
}
const tg = /* @__PURE__ */ Symbol("_vte"), po = (t) => t.__isTeleport, qo = /* @__PURE__ */ Symbol("_leaveCb");
function sg(t) {
  let e = t[0];
  if (t.length > 1) {
    for (const s of t)
      if (s.type !== ws) {
        e = s;
        break;
      }
  }
  return e;
}
function Pf(t) {
  if (!yl(t))
    return po(t.type) && t.children ? sg(t.children) : t;
  if (t.component)
    return t.component.subTree;
  const { shapeFlag: e, children: s } = t;
  if (s) {
    if (e & 16)
      return s[0];
    if (e & 32 && pe(s.default))
      return s.default();
  }
}
function bl(t, e) {
  if (t.shapeFlag & 6 && t.component) {
    t.transition = e;
    const s = t.component.subTree;
    bl(
      po(s.type) && Pf(s) || s,
      e
    );
  } else t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
// @__NO_SIDE_EFFECTS__
function Cf(t, e) {
  return pe(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ht({ name: t.name }, e, { setup: t })
  ) : t;
}
function wf(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Ic(t, e) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(t, e)) && !s.configurable);
}
const za = /* @__PURE__ */ new WeakMap();
function mn(t, e, s, i, n = !1) {
  if (fe(t)) {
    t.forEach(
      (g, v) => mn(
        g,
        e && (fe(e) ? e[v] : e),
        s,
        i,
        n
      )
    );
    return;
  }
  if (gn(i) && !n) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && mn(t, e, s, i.component.subTree);
    return;
  }
  const a = i.shapeFlag & 4 ? vo(i.component) : i.el, o = n ? null : a, { i: r, r: l } = t, c = e && e.r, u = r.refs === Be ? r.refs = {} : r.refs, d = r.setupState, f = /* @__PURE__ */ De(d), h = d === Be ? qd : (g) => Ic(u, g) ? !1 : Ie(f, g), m = (g, v) => !(v && Ic(u, v));
  if (c != null && c !== l) {
    if (Ec(e), at(c))
      u[c] = null, h(c) && (d[c] = null);
    else if (/* @__PURE__ */ vt(c)) {
      const g = e;
      m(c, g.k) && (c.value = null), g.k && (u[g.k] = null);
    }
  }
  if (pe(l))
    zn(l, r, 12, [o, u]);
  else {
    const g = at(l), v = /* @__PURE__ */ vt(l);
    if (g || v) {
      const T = () => {
        if (t.f) {
          const x = g ? h(l) ? d[l] : u[l] : m() || !t.k ? l.value : u[t.k];
          if (n)
            fe(x) && al(x, a);
          else if (fe(x))
            x.includes(a) || x.push(a);
          else if (g)
            u[l] = [a], h(l) && (d[l] = u[l]);
          else {
            const C = [a];
            m(l, t.k) && (l.value = C), t.k && (u[t.k] = C);
          }
        } else g ? (u[l] = o, h(l) && (d[l] = o)) : v && (m(l, t.k) && (l.value = o), t.k && (u[t.k] = o));
      };
      if (o) {
        const x = () => {
          T(), za.delete(t);
        };
        x.id = -1, za.set(t, x), Dt(x, s);
      } else
        Ec(t), T();
    }
  }
}
function Ec(t) {
  const e = za.get(t);
  e && (e.flags |= 8, za.delete(t));
}
uo().requestIdleCallback;
uo().cancelIdleCallback;
const gn = (t) => !!t.type.__asyncLoader, yl = (t) => t.type.__isKeepAlive;
function ig(t, e) {
  Rf(t, "a", e);
}
function ng(t, e) {
  Rf(t, "da", e);
}
function Rf(t, e, s = bt) {
  const i = t.__wdc || (t.__wdc = () => {
    let n = s;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return t();
  });
  if (mo(e, i, s), s) {
    let n = s.parent;
    for (; n && n.parent; )
      yl(n.parent.vnode) && ag(i, e, s, n), n = n.parent;
  }
}
function ag(t, e, s, i) {
  const n = mo(
    e,
    t,
    i,
    !0
    /* prepend */
  );
  go(() => {
    al(i[e], n);
  }, s);
}
function mo(t, e, s = bt, i = !1) {
  if (s) {
    const n = s[t] || (s[t] = []), a = e.__weh || (e.__weh = (...o) => {
      As();
      const r = Vn(s), l = $t(e, s, t, o);
      return r(), Ps(), l;
    });
    return i ? n.unshift(a) : n.push(a), a;
  }
}
const Rs = (t) => (e, s = bt) => {
  (!Mn || t === "sp") && mo(t, (...i) => e(...i), s);
}, og = Rs("bm"), Mf = Rs("m"), rg = Rs(
  "bu"
), lg = Rs("u"), cg = Rs(
  "bum"
), go = Rs("um"), ug = Rs(
  "sp"
), dg = Rs("rtg"), fg = Rs("rtc");
function hg(t, e = bt) {
  mo("ec", t, e);
}
const pg = "components";
function mg(t, e) {
  return bg(pg, t, !0, e) || t;
}
const gg = /* @__PURE__ */ Symbol.for("v-ndc");
function bg(t, e, s = !0, i = !1) {
  const n = Ft || bt;
  if (n) {
    const a = n.type;
    {
      const r = sb(
        a,
        !1
      );
      if (r && (r === e || r === wt(e) || r === co(wt(e))))
        return a;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Oc(n[t] || a[t], e) || // global registration
      Oc(n.appContext[t], e)
    );
    return !o && i ? a : o;
  }
}
function Oc(t, e) {
  return t && (t[e] || t[wt(e)] || t[co(wt(e))]);
}
function Go(t, e, s, i) {
  let n;
  const a = s, o = fe(t);
  if (o || at(t)) {
    const r = o && /* @__PURE__ */ li(t);
    let l = !1, c = !1;
    r && (l = !/* @__PURE__ */ jt(t), c = /* @__PURE__ */ Cs(t), t = fo(t)), n = new Array(t.length);
    for (let u = 0, d = t.length; u < d; u++)
      n[u] = e(
        l ? c ? Oi(Kt(t[u])) : Kt(t[u]) : t[u],
        u,
        void 0,
        a
      );
  } else if (typeof t == "number") {
    n = new Array(t);
    for (let r = 0; r < t; r++)
      n[r] = e(r + 1, r, void 0, a);
  } else if (Oe(t))
    if (t[Symbol.iterator])
      n = Array.from(
        t,
        (r, l) => e(r, l, void 0, a)
      );
    else {
      const r = Object.keys(t);
      n = new Array(r.length);
      for (let l = 0, c = r.length; l < c; l++) {
        const u = r[l];
        n[l] = e(t[u], u, l, a);
      }
    }
  else
    n = [];
  return n;
}
const Cr = (t) => t ? Xf(t) ? vo(t) : Cr(t.parent) : null, bn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ht(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Cr(t.parent),
    $root: (t) => Cr(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => If(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      gl(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = xi.bind(t.proxy)),
    $watch: (t) => eg.bind(t)
  })
), Ko = (t, e) => t !== Be && !t.__isScriptSetup && Ie(t, e), yg = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: s, setupState: i, data: n, props: a, accessCache: o, type: r, appContext: l } = t;
    if (e[0] !== "$") {
      const f = o[e];
      if (f !== void 0)
        switch (f) {
          case 1:
            return i[e];
          case 2:
            return n[e];
          case 4:
            return s[e];
          case 3:
            return a[e];
        }
      else {
        if (Ko(i, e))
          return o[e] = 1, i[e];
        if (n !== Be && Ie(n, e))
          return o[e] = 2, n[e];
        if (Ie(a, e))
          return o[e] = 3, a[e];
        if (s !== Be && Ie(s, e))
          return o[e] = 4, s[e];
        wr && (o[e] = 0);
      }
    }
    const c = bn[e];
    let u, d;
    if (c)
      return e === "$attrs" && gt(t.attrs, "get", ""), c(t);
    if (
      // css module (injected by vue-loader)
      (u = r.__cssModules) && (u = u[e])
    )
      return u;
    if (s !== Be && Ie(s, e))
      return o[e] = 4, s[e];
    if (
      // global properties
      d = l.config.globalProperties, Ie(d, e)
    )
      return d[e];
  },
  set({ _: t }, e, s) {
    const { data: i, setupState: n, ctx: a } = t;
    return Ko(n, e) ? (n[e] = s, !0) : i !== Be && Ie(i, e) ? (i[e] = s, !0) : Ie(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (a[e] = s, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: s, ctx: i, appContext: n, props: a, type: o }
  }, r) {
    let l;
    return !!(s[r] || t !== Be && r[0] !== "$" && Ie(t, r) || Ko(e, r) || Ie(a, r) || Ie(i, r) || Ie(bn, r) || Ie(n.config.globalProperties, r) || (l = o.__cssModules) && l[r]);
  },
  defineProperty(t, e, s) {
    return s.get != null ? t._.accessCache[e] = 0 : Ie(s, "value") && this.set(t, e, s.value, null), Reflect.defineProperty(t, e, s);
  }
};
function Nc(t) {
  return fe(t) ? t.reduce(
    (e, s) => (e[s] = null, e),
    {}
  ) : t;
}
let wr = !0;
function vg(t) {
  const e = If(t), s = t.proxy, i = t.ctx;
  wr = !1, e.beforeCreate && Lc(e.beforeCreate, t, "bc");
  const {
    // state
    data: n,
    computed: a,
    methods: o,
    watch: r,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: f,
    beforeUpdate: h,
    updated: m,
    activated: g,
    deactivated: v,
    beforeDestroy: T,
    beforeUnmount: x,
    destroyed: C,
    unmounted: P,
    render: M,
    renderTracked: w,
    renderTriggered: O,
    errorCaptured: W,
    serverPrefetch: J,
    // public API
    expose: Q,
    inheritAttrs: ie,
    // assets
    components: ce,
    directives: xe,
    filters: Ge
  } = e;
  if (c && _g(c, i, null), o)
    for (const H in o) {
      const q = o[H];
      pe(q) && (i[H] = q.bind(s));
    }
  if (n) {
    const H = n.call(s, s);
    Oe(H) && (t.data = /* @__PURE__ */ jn(H));
  }
  if (wr = !0, a)
    for (const H in a) {
      const q = a[H], le = pe(q) ? q.bind(s, s) : pe(q.get) ? q.get.bind(s, s) : rs, Re = !pe(q) && pe(q.set) ? q.set.bind(s) : rs, ke = de({
        get: le,
        set: Re
      });
      Object.defineProperty(i, H, {
        enumerable: !0,
        configurable: !0,
        get: () => ke.value,
        set: (Ue) => ke.value = Ue
      });
    }
  if (r)
    for (const H in r)
      Df(r[H], i, s, H);
  if (l) {
    const H = pe(l) ? l.call(s) : l;
    Reflect.ownKeys(H).forEach((q) => {
      Ra(q, H[q]);
    });
  }
  u && Lc(u, t, "c");
  function re(H, q) {
    fe(q) ? q.forEach((le) => H(le.bind(s))) : q && H(q.bind(s));
  }
  if (re(og, d), re(Mf, f), re(rg, h), re(lg, m), re(ig, g), re(ng, v), re(hg, W), re(fg, w), re(dg, O), re(cg, x), re(go, P), re(ug, J), fe(Q))
    if (Q.length) {
      const H = t.exposed || (t.exposed = {});
      Q.forEach((q) => {
        Object.defineProperty(H, q, {
          get: () => s[q],
          set: (le) => s[q] = le,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  M && t.render === rs && (t.render = M), ie != null && (t.inheritAttrs = ie), ce && (t.components = ce), xe && (t.directives = xe), J && wf(t);
}
function _g(t, e, s = rs) {
  fe(t) && (t = Rr(t));
  for (const i in t) {
    const n = t[i];
    let a;
    Oe(n) ? "default" in n ? a = Ot(
      n.from || i,
      n.default,
      !0
    ) : a = Ot(n.from || i) : a = Ot(n), /* @__PURE__ */ vt(a) ? Object.defineProperty(e, i, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (o) => a.value = o
    }) : e[i] = a;
  }
}
function Lc(t, e, s) {
  $t(
    fe(t) ? t.map((i) => i.bind(e.proxy)) : t.bind(e.proxy),
    e,
    s
  );
}
function Df(t, e, s, i) {
  let n = i.includes(".") ? Af(s, i) : () => s[i];
  if (at(t)) {
    const a = e[t];
    pe(a) && Di(n, a);
  } else if (pe(t))
    Di(n, t.bind(s));
  else if (Oe(t))
    if (fe(t))
      t.forEach((a) => Df(a, e, s, i));
    else {
      const a = pe(t.handler) ? t.handler.bind(s) : e[t.handler];
      pe(a) && Di(n, a, t);
    }
}
function If(t) {
  const e = t.type, { mixins: s, extends: i } = e, {
    mixins: n,
    optionsCache: a,
    config: { optionMergeStrategies: o }
  } = t.appContext, r = a.get(e);
  let l;
  return r ? l = r : !n.length && !s && !i ? l = e : (l = {}, n.length && n.forEach(
    (c) => Va(l, c, o, !0)
  ), Va(l, e, o)), Oe(e) && a.set(e, l), l;
}
function Va(t, e, s, i = !1) {
  const { mixins: n, extends: a } = e;
  a && Va(t, a, s, !0), n && n.forEach(
    (o) => Va(t, o, s, !0)
  );
  for (const o in e)
    if (!(i && o === "expose")) {
      const r = Sg[o] || s && s[o];
      t[o] = r ? r(t[o], e[o]) : e[o];
    }
  return t;
}
const Sg = {
  data: Uc,
  props: Fc,
  emits: Fc,
  // objects
  methods: nn,
  computed: nn,
  // lifecycle
  beforeCreate: At,
  created: At,
  beforeMount: At,
  mounted: At,
  beforeUpdate: At,
  updated: At,
  beforeDestroy: At,
  beforeUnmount: At,
  destroyed: At,
  unmounted: At,
  activated: At,
  deactivated: At,
  errorCaptured: At,
  serverPrefetch: At,
  // assets
  components: nn,
  directives: nn,
  // watch
  watch: Tg,
  // provide / inject
  provide: Uc,
  inject: kg
};
function Uc(t, e) {
  return e ? t ? function() {
    return ht(
      pe(t) ? t.call(this, this) : t,
      pe(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function kg(t, e) {
  return nn(Rr(t), Rr(e));
}
function Rr(t) {
  if (fe(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++)
      e[t[s]] = t[s];
    return e;
  }
  return t;
}
function At(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function nn(t, e) {
  return t ? ht(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Fc(t, e) {
  return t ? fe(t) && fe(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : ht(
    /* @__PURE__ */ Object.create(null),
    Nc(t),
    Nc(e ?? {})
  ) : e;
}
function Tg(t, e) {
  if (!t) return e;
  if (!e) return t;
  const s = ht(/* @__PURE__ */ Object.create(null), t);
  for (const i in e)
    s[i] = At(t[i], e[i]);
  return s;
}
function Ef() {
  return {
    app: null,
    config: {
      isNativeTag: qd,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let xg = 0;
function Ag(t, e) {
  return function(i, n = null) {
    pe(i) || (i = ht({}, i)), n != null && !Oe(n) && (n = null);
    const a = Ef(), o = /* @__PURE__ */ new WeakSet(), r = [];
    let l = !1;
    const c = a.app = {
      _uid: xg++,
      _component: i,
      _props: n,
      _container: null,
      _context: a,
      _instance: null,
      version: nb,
      get config() {
        return a.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return o.has(u) || (u && pe(u.install) ? (o.add(u), u.install(c, ...d)) : pe(u) && (o.add(u), u(c, ...d))), c;
      },
      mixin(u) {
        return a.mixins.includes(u) || a.mixins.push(u), c;
      },
      component(u, d) {
        return d ? (a.components[u] = d, c) : a.components[u];
      },
      directive(u, d) {
        return d ? (a.directives[u] = d, c) : a.directives[u];
      },
      mount(u, d, f) {
        if (!l) {
          const h = c._ceVNode || Ce(i, n);
          return h.appContext = a, f === !0 ? f = "svg" : f === !1 && (f = void 0), t(h, u, f), l = !0, c._container = u, u.__vue_app__ = c, vo(h.component);
        }
      },
      onUnmount(u) {
        r.push(u);
      },
      unmount() {
        l && ($t(
          r,
          c._instance,
          16
        ), t(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return a.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = Ii;
        Ii = c;
        try {
          return u();
        } finally {
          Ii = d;
        }
      }
    };
    return c;
  };
}
let Ii = null;
const Pg = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${wt(e)}Modifiers`] || t[`${pi(e)}Modifiers`];
function Cg(t, e, ...s) {
  if (t.isUnmounted) return;
  const i = t.vnode.props || Be;
  let n = s;
  const a = e.startsWith("update:"), o = a && Pg(i, e.slice(7));
  o && (o.trim && (n = s.map((u) => at(u) ? u.trim() : u)), o.number && (n = s.map(pm)));
  let r, l = i[r = Wo(e)] || // also try camelCase event handler (#2249)
  i[r = Wo(wt(e))];
  !l && a && (l = i[r = Wo(pi(e))]), l && $t(
    l,
    t,
    6,
    n
  );
  const c = i[r + "Once"];
  if (c) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[r])
      return;
    t.emitted[r] = !0, $t(
      c,
      t,
      6,
      n
    );
  }
}
const wg = /* @__PURE__ */ new WeakMap();
function Of(t, e, s = !1) {
  const i = s ? wg : e.emitsCache, n = i.get(t);
  if (n !== void 0)
    return n;
  const a = t.emits;
  let o = {}, r = !1;
  if (!pe(t)) {
    const l = (c) => {
      const u = Of(c, e, !0);
      u && (r = !0, ht(o, u));
    };
    !s && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !a && !r ? (Oe(t) && i.set(t, null), null) : (fe(a) ? a.forEach((l) => o[l] = null) : ht(o, a), Oe(t) && i.set(t, o), o);
}
function bo(t, e) {
  return !t || !oo(e) ? !1 : (e = e.slice(2), e = e === "Once" ? e : e.replace(/Once$/, ""), Ie(t, e[0].toLowerCase() + e.slice(1)) || Ie(t, pi(e)) || Ie(t, e));
}
function Wc(t) {
  const {
    type: e,
    vnode: s,
    proxy: i,
    withProxy: n,
    propsOptions: [a],
    slots: o,
    attrs: r,
    emit: l,
    render: c,
    renderCache: u,
    props: d,
    data: f,
    setupState: h,
    ctx: m,
    inheritAttrs: g
  } = t, v = ja(t);
  let T, x;
  try {
    if (s.shapeFlag & 4) {
      const P = n || i, M = P;
      T = as(
        c.call(
          M,
          P,
          u,
          d,
          h,
          f,
          m
        )
      ), x = r;
    } else {
      const P = e;
      T = as(
        P.length > 1 ? P(
          d,
          { attrs: r, slots: o, emit: l }
        ) : P(
          d,
          null
        )
      ), x = e.props ? r : Rg(r);
    }
  } catch (P) {
    ci.length = 0, ho(P, t, 1), T = Ce(ws);
  }
  let C = T;
  if (x && g !== !1) {
    const P = Object.keys(x), { shapeFlag: M } = C;
    P.length && M & 7 && (a && P.some(ro) && (x = Mg(
      x,
      a
    )), C = Ni(C, x, !1, !0));
  }
  if (s.dirs && (C = Ni(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(s.dirs) : s.dirs), s.transition) {
    const P = po(C.type) && Pf(C) || C;
    bl(P, s.transition);
  }
  return T = C, ja(v), T;
}
const Rg = (t) => {
  let e;
  for (const s in t)
    (s === "class" || s === "style" || oo(s)) && ((e || (e = {}))[s] = t[s]);
  return e;
}, Mg = (t, e) => {
  const s = {};
  for (const i in t)
    (!ro(i) || !(i.slice(9) in e)) && (s[i] = t[i]);
  return s;
};
function Dg(t, e, s) {
  const { props: i, children: n, component: a } = t, { props: o, children: r, patchFlag: l } = e, c = a.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (s && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Bc(i, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (Nf(o, i, f) && !bo(c, f))
          return !0;
      }
    }
  } else
    return (n || r) && (!r || !r.$stable) ? !0 : i === o ? !1 : i ? o ? Bc(i, o, c) : !0 : !!o;
  return !1;
}
function Bc(t, e, s) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(t).length)
    return !0;
  for (let n = 0; n < i.length; n++) {
    const a = i[n];
    if (Nf(e, t, a) && !bo(s, a))
      return !0;
  }
  return !1;
}
function Nf(t, e, s) {
  const i = t[s], n = e[s];
  return s === "style" && Oe(i) && Oe(n) ? !ll(i, n) : i !== n;
}
function Ig({ vnode: t, parent: e, suspense: s }, i) {
  for (; e; ) {
    const n = e.subTree;
    if (n.suspense && n.suspense.activeBranch === t && (n.suspense.vnode.el = n.el = i, t = n), n === t)
      (t = e.vnode).el = i, e = e.parent;
    else
      break;
  }
  s && s.activeBranch === t && (s.vnode.el = i);
}
const Lf = {}, Uf = () => Object.create(Lf), Ff = (t) => Object.getPrototypeOf(t) === Lf;
function Eg(t, e, s, i = !1) {
  const n = {}, a = Uf();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Wf(t, e, n, a);
  for (const o in t.propsOptions[0])
    o in n || (n[o] = void 0);
  s ? t.props = i ? n : /* @__PURE__ */ mf(n) : t.type.props ? t.props = n : t.props = a, t.attrs = a;
}
function Og(t, e, s, i) {
  const {
    props: n,
    attrs: a,
    vnode: { patchFlag: o }
  } = t, r = /* @__PURE__ */ De(n), [l] = t.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = t.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (bo(t.emitsOptions, f))
          continue;
        const h = e[f];
        if (l)
          if (Ie(a, f))
            h !== a[f] && (a[f] = h, c = !0);
          else {
            const m = wt(f);
            n[m] = Mr(
              l,
              r,
              m,
              h,
              t,
              !1
            );
          }
        else
          h !== a[f] && (a[f] = h, c = !0);
      }
    }
  } else {
    Wf(t, e, n, a) && (c = !0);
    let u;
    for (const d in r)
      (!e || // for camelCase
      !Ie(e, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = pi(d)) === d || !Ie(e, u))) && (l ? s && // for camelCase
      (s[d] !== void 0 || // for kebab-case
      s[u] !== void 0) && (n[d] = Mr(
        l,
        r,
        d,
        void 0,
        t,
        !0
      )) : delete n[d]);
    if (a !== r)
      for (const d in a)
        (!e || !Ie(e, d)) && (delete a[d], c = !0);
  }
  c && vs(t.attrs, "set", "");
}
function Wf(t, e, s, i) {
  const [n, a] = t.propsOptions;
  let o = !1, r;
  if (e)
    for (let l in e) {
      if (fn(l))
        continue;
      const c = e[l];
      let u;
      n && Ie(n, u = wt(l)) ? !a || !a.includes(u) ? s[u] = c : (r || (r = {}))[u] = c : bo(t.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, o = !0);
    }
  if (a) {
    const l = /* @__PURE__ */ De(s), c = r || Be;
    for (let u = 0; u < a.length; u++) {
      const d = a[u];
      s[d] = Mr(
        n,
        l,
        d,
        c[d],
        t,
        !Ie(c, d)
      );
    }
  }
  return o;
}
function Mr(t, e, s, i, n, a) {
  const o = t[s];
  if (o != null) {
    const r = Ie(o, "default");
    if (r && i === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && pe(l)) {
        const { propsDefaults: c } = n;
        if (s in c)
          i = c[s];
        else {
          const u = Vn(n);
          i = c[s] = l.call(
            null,
            e
          ), u();
        }
      } else
        i = l;
      n.ce && n.ce._setProp(s, i);
    }
    o[
      0
      /* shouldCast */
    ] && (a && !r ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === pi(s)) && (i = !0));
  }
  return i;
}
const Ng = /* @__PURE__ */ new WeakMap();
function Bf(t, e, s = !1) {
  const i = s ? Ng : e.propsCache, n = i.get(t);
  if (n)
    return n;
  const a = t.props, o = {}, r = [];
  let l = !1;
  if (!pe(t)) {
    const u = (d) => {
      l = !0;
      const [f, h] = Bf(d, e, !0);
      ht(o, f), h && r.push(...h);
    };
    !s && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
  }
  if (!a && !l)
    return Oe(t) && i.set(t, wi), wi;
  if (fe(a))
    for (let u = 0; u < a.length; u++) {
      const d = wt(a[u]);
      Hc(d) && (o[d] = Be);
    }
  else if (a)
    for (const u in a) {
      const d = wt(u);
      if (Hc(d)) {
        const f = a[u], h = o[d] = fe(f) || pe(f) ? { type: f } : ht({}, f), m = h.type;
        let g = !1, v = !0;
        if (fe(m))
          for (let T = 0; T < m.length; ++T) {
            const x = m[T], C = pe(x) && x.name;
            if (C === "Boolean") {
              g = !0;
              break;
            } else C === "String" && (v = !1);
          }
        else
          g = pe(m) && m.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = g, h[
          1
          /* shouldCastTrue */
        ] = v, (g || Ie(h, "default")) && r.push(d);
      }
    }
  const c = [o, r];
  return Oe(t) && i.set(t, c), c;
}
function Hc(t) {
  return t[0] !== "$" && !fn(t);
}
const vl = (t) => t === "_" || t === "_ctx" || t === "$stable", _l = (t) => fe(t) ? t.map(as) : [as(t)], Lg = (t, e, s) => {
  if (e._n)
    return e;
  const i = Tf((...n) => _l(e(...n)), s);
  return i._c = !1, i;
}, Hf = (t, e, s) => {
  const i = t._ctx;
  for (const n in t) {
    if (vl(n)) continue;
    const a = t[n];
    if (pe(a))
      e[n] = Lg(n, a, i);
    else if (a != null) {
      const o = _l(a);
      e[n] = () => o;
    }
  }
}, jf = (t, e) => {
  const s = _l(e);
  t.slots.default = () => s;
}, zf = (t, e, s) => {
  for (const i in e)
    (s || !vl(i)) && (t[i] = e[i]);
}, Ug = (t, e, s) => {
  const i = t.slots = Uf();
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (zf(i, e, s), s && Yd(i, "_", n, !0)) : Hf(e, i);
  } else e && jf(t, e);
}, Fg = (t, e, s) => {
  const { vnode: i, slots: n } = t;
  let a = !0, o = Be;
  if (i.shapeFlag & 32) {
    const r = e._;
    r ? s && r === 1 ? a = !1 : zf(n, e, s) : (a = !e.$stable, Hf(e, n)), o = e;
  } else e && (jf(t, e), o = { default: 1 });
  if (a)
    for (const r in n)
      !vl(r) && o[r] == null && delete n[r];
}, Dt = zg;
function Wg(t) {
  return Bg(t);
}
function Bg(t, e) {
  const s = uo();
  s.__VUE__ = !0;
  const {
    insert: i,
    remove: n,
    patchProp: a,
    createElement: o,
    createText: r,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: d,
    nextSibling: f,
    setScopeId: h = rs,
    insertStaticContent: m
  } = t, g = (y, k, A, N = null, L = null, E = null, G = void 0, z = null, j = !!k.dynamicChildren) => {
    if (y === k)
      return;
    y && !$i(y, k) && (N = D(y), Ue(y, L, E, !0), y = null), k.patchFlag === -2 && (j = !1, k.dynamicChildren = null);
    const { type: U, ref: ae, shapeFlag: $ } = k;
    switch (U) {
      case yo:
        v(y, k, A, N);
        break;
      case ws:
        T(y, k, A, N);
        break;
      case Jo:
        y == null && x(k, A, N, G);
        break;
      case Ut:
        ce(
          y,
          k,
          A,
          N,
          L,
          E,
          G,
          z,
          j
        );
        break;
      default:
        $ & 1 ? M(
          y,
          k,
          A,
          N,
          L,
          E,
          G,
          z,
          j
        ) : $ & 6 ? xe(
          y,
          k,
          A,
          N,
          L,
          E,
          G,
          z,
          j
        ) : ($ & 64 || $ & 128) && U.process(
          y,
          k,
          A,
          N,
          L,
          E,
          G,
          z,
          j,
          Z
        );
    }
    ae != null && L ? mn(ae, y && y.ref, E, k || y, !k) : ae == null && y && y.ref != null && mn(y.ref, null, E, y, !0);
  }, v = (y, k, A, N) => {
    if (y == null)
      i(
        k.el = r(k.children),
        A,
        N
      );
    else {
      const L = k.el = y.el;
      k.children !== y.children && c(L, k.children);
    }
  }, T = (y, k, A, N) => {
    y == null ? i(
      k.el = l(k.children || ""),
      A,
      N
    ) : k.el = y.el;
  }, x = (y, k, A, N) => {
    [y.el, y.anchor] = m(
      y.children,
      k,
      A,
      N,
      y.el,
      y.anchor
    );
  }, C = ({ el: y, anchor: k }, A, N) => {
    let L;
    for (; y && y !== k; )
      L = f(y), i(y, A, N), y = L;
    i(k, A, N);
  }, P = ({ el: y, anchor: k }) => {
    let A;
    for (; y && y !== k; )
      A = f(y), n(y), y = A;
    n(k);
  }, M = (y, k, A, N, L, E, G, z, j) => {
    if (k.type === "svg" ? G = "svg" : k.type === "math" && (G = "mathml"), y == null)
      w(
        k,
        A,
        N,
        L,
        E,
        G,
        z,
        j
      );
    else {
      const U = y.el && y.el._isVueCE ? y.el : null;
      try {
        U && U._beginPatch(), J(
          y,
          k,
          L,
          E,
          G,
          z,
          j
        );
      } finally {
        U && U._endPatch();
      }
    }
  }, w = (y, k, A, N, L, E, G, z) => {
    let j, U;
    const { props: ae, shapeFlag: $, transition: se, dirs: ne } = y;
    if (j = y.el = o(
      y.type,
      E,
      ae && ae.is,
      ae
    ), $ & 8 ? u(j, y.children) : $ & 16 && W(
      y.children,
      j,
      null,
      N,
      L,
      $o(y, E),
      G,
      z
    ), ne && Ys(y, null, N, "created"), O(j, y, y.scopeId, G, N), ae) {
      for (const Ae in ae)
        Ae !== "value" && !fn(Ae) && a(j, Ae, null, ae[Ae], E, N);
      "value" in ae && a(j, "value", null, ae.value, E), (U = ae.onVnodeBeforeMount) && Zt(U, N, y);
    }
    ne && Ys(y, null, N, "beforeMount");
    const ve = Hg(L, se);
    ve && se.beforeEnter(j), i(j, k, A), ((U = ae && ae.onVnodeMounted) || ve || ne) && Dt(() => {
      try {
        U && Zt(U, N, y), ve && se.enter(j), ne && Ys(y, null, N, "mounted");
      } finally {
      }
    }, L);
  }, O = (y, k, A, N, L) => {
    if (A && h(y, A), N)
      for (let E = 0; E < N.length; E++)
        h(y, N[E]);
    if (L) {
      let E = L.subTree;
      if (k === E || Kf(E.type) && (E.ssContent === k || E.ssFallback === k)) {
        const G = L.vnode;
        O(
          y,
          G,
          G.scopeId,
          G.slotScopeIds,
          L.parent
        );
      }
    }
  }, W = (y, k, A, N, L, E, G, z, j = 0) => {
    for (let U = j; U < y.length; U++) {
      const ae = y[U] = z ? bs(y[U]) : as(y[U]);
      g(
        null,
        ae,
        k,
        A,
        N,
        L,
        E,
        G,
        z
      );
    }
  }, J = (y, k, A, N, L, E, G) => {
    const z = k.el = y.el;
    let { patchFlag: j, dynamicChildren: U, dirs: ae } = k;
    j |= y.patchFlag & 16;
    const $ = y.props || Be, se = k.props || Be;
    let ne;
    if (A && Xs(A, !1), (ne = se.onVnodeBeforeUpdate) && Zt(ne, A, k, y), ae && Ys(k, y, A, "beforeUpdate"), A && Xs(A, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    U && (!y.dynamicChildren || y.dynamicChildren.length !== U.length) && (j = 0, G = !1, U = null), ($.innerHTML && se.innerHTML == null || $.textContent && se.textContent == null) && u(z, ""), U ? Q(
      y.dynamicChildren,
      U,
      z,
      A,
      N,
      $o(k, L),
      E
    ) : G || q(
      y,
      k,
      z,
      null,
      A,
      N,
      $o(k, L),
      E,
      !1
    ), j > 0) {
      if (j & 16)
        ie(z, $, se, A, L);
      else if (j & 2 && $.class !== se.class && a(z, "class", null, se.class, L), j & 4 && a(z, "style", $.style, se.style, L), j & 8) {
        const ve = k.dynamicProps;
        for (let Ae = 0; Ae < ve.length; Ae++) {
          const Me = ve[Ae], Ze = $[Me], et = se[Me];
          (et !== Ze || Me === "value") && a(z, Me, Ze, et, L, A);
        }
      }
      j & 1 && y.children !== k.children && u(z, k.children);
    } else !G && U == null && ie(z, $, se, A, L);
    ((ne = se.onVnodeUpdated) || ae) && Dt(() => {
      ne && Zt(ne, A, k, y), ae && Ys(k, y, A, "updated");
    }, N);
  }, Q = (y, k, A, N, L, E, G) => {
    for (let z = 0; z < k.length; z++) {
      const j = y[z], U = k[z], ae = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        j.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (j.type === Ut || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !$i(j, U) || // - In the case of a component, it could contain anything.
        j.shapeFlag & 198) ? d(j.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          A
        )
      );
      g(
        j,
        U,
        ae,
        null,
        N,
        L,
        E,
        G,
        !0
      );
    }
  }, ie = (y, k, A, N, L) => {
    if (k !== A) {
      if (k !== Be)
        for (const E in k)
          !fn(E) && !(E in A) && a(
            y,
            E,
            k[E],
            null,
            L,
            N
          );
      for (const E in A) {
        if (fn(E)) continue;
        const G = A[E], z = k[E];
        G !== z && E !== "value" && a(y, E, z, G, L, N);
      }
      "value" in A && a(y, "value", k.value, A.value, L);
    }
  }, ce = (y, k, A, N, L, E, G, z, j) => {
    const U = k.el = y ? y.el : r(""), ae = k.anchor = y ? y.anchor : r("");
    let { patchFlag: $, dynamicChildren: se, slotScopeIds: ne } = k;
    ne && (z = z ? z.concat(ne) : ne), y == null ? (i(U, A, N), i(ae, A, N), W(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      k.children || [],
      A,
      ae,
      L,
      E,
      G,
      z,
      j
    )) : $ > 0 && $ & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    y.dynamicChildren && y.dynamicChildren.length === se.length ? (Q(
      y.dynamicChildren,
      se,
      A,
      L,
      E,
      G,
      z
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (k.key != null || L && k === L.subTree) && Vf(
      y,
      k,
      !0
      /* shallow */
    )) : q(
      y,
      k,
      A,
      ae,
      L,
      E,
      G,
      z,
      j
    );
  }, xe = (y, k, A, N, L, E, G, z, j) => {
    k.slotScopeIds = z, y == null ? k.shapeFlag & 512 ? L.ctx.activate(
      k,
      A,
      N,
      G,
      j
    ) : Ge(
      k,
      A,
      N,
      L,
      E,
      G,
      j
    ) : ge(y, k, j);
  }, Ge = (y, k, A, N, L, E, G) => {
    const z = y.component = Yg(
      y,
      N,
      L
    );
    if (yl(y) && (z.ctx.renderer = Z), Qg(z, !1, G), z.asyncDep) {
      if (L && L.registerDep(z, re, G), !y.el) {
        const j = z.subTree = Ce(ws);
        T(null, j, k, A), y.placeholder = j.el;
      }
    } else
      re(
        z,
        y,
        k,
        A,
        L,
        E,
        G
      );
  }, ge = (y, k, A) => {
    const N = k.component = y.component;
    if (Dg(y, k, A))
      if (N.asyncDep && !N.asyncResolved) {
        H(N, k, A);
        return;
      } else
        N.next = k, N.update();
    else
      k.el = y.el, N.vnode = k;
  }, re = (y, k, A, N, L, E, G) => {
    const z = () => {
      if (y.isMounted) {
        let { next: $, bu: se, u: ne, parent: ve, vnode: Ae } = y;
        {
          const kt = qf(y);
          if (kt) {
            $ && ($.el = Ae.el, H(y, $, G)), kt.asyncDep.then(() => {
              Dt(() => {
                y.isUnmounted || U();
              }, L);
            });
            return;
          }
        }
        let Me = $, Ze;
        Xs(y, !1), $ ? ($.el = Ae.el, H(y, $, G)) : $ = Ae, se && Bo(se), (Ze = $.props && $.props.onVnodeBeforeUpdate) && Zt(Ze, ve, $, Ae), Xs(y, !0);
        const et = Wc(y), St = y.subTree;
        y.subTree = et, g(
          St,
          et,
          // parent may have changed if it's in a teleport
          d(St.el),
          // anchor may have changed if it's in a fragment
          D(St),
          y,
          L,
          E
        ), $.el = et.el, Me === null && Ig(y, et.el), ne && Dt(ne, L), (Ze = $.props && $.props.onVnodeUpdated) && Dt(
          () => Zt(Ze, ve, $, Ae),
          L
        );
      } else {
        let $;
        const { el: se, props: ne } = k, { bm: ve, m: Ae, parent: Me, root: Ze, type: et } = y, St = gn(k);
        Xs(y, !1), ve && Bo(ve), !St && ($ = ne && ne.onVnodeBeforeMount) && Zt($, Me, k), Xs(y, !0);
        {
          Ze.ce && Ze.ce._hasShadowRoot() && Ze.ce._injectChildStyle(
            et,
            y.parent ? y.parent.type : void 0
          );
          const kt = y.subTree = Wc(y);
          g(
            null,
            kt,
            A,
            N,
            y,
            L,
            E
          ), k.el = kt.el;
        }
        if (Ae && Dt(Ae, L), !St && ($ = ne && ne.onVnodeMounted)) {
          const kt = k;
          Dt(
            () => Zt($, Me, kt),
            L
          );
        }
        (k.shapeFlag & 256 || Me && gn(Me.vnode) && Me.vnode.shapeFlag & 256) && y.a && Dt(y.a, L), y.isMounted = !0, k = A = N = null;
      }
    };
    y.scope.on();
    const j = y.effect = new ef(z);
    y.scope.off();
    const U = y.update = j.run.bind(j), ae = y.job = j.runIfDirty.bind(j);
    ae.i = y, ae.id = y.uid, j.scheduler = () => gl(ae), Xs(y, !0), U();
  }, H = (y, k, A) => {
    k.component = y;
    const N = y.vnode.props;
    y.vnode = k, y.next = null, Og(y, k.props, N, A), Fg(y, k.children, A), As(), Dc(y), Ps();
  }, q = (y, k, A, N, L, E, G, z, j = !1) => {
    const U = y && y.children, ae = y ? y.shapeFlag : 0, $ = k.children, { patchFlag: se, shapeFlag: ne } = k;
    if (se > 0) {
      if (se & 128) {
        Re(
          U,
          $,
          A,
          N,
          L,
          E,
          G,
          z,
          j
        );
        return;
      } else if (se & 256) {
        le(
          U,
          $,
          A,
          N,
          L,
          E,
          G,
          z,
          j
        );
        return;
      }
    }
    ne & 8 ? (ae & 16 && Xe(U, L, E), $ !== U && u(A, $)) : ae & 16 ? ne & 16 ? Re(
      U,
      $,
      A,
      N,
      L,
      E,
      G,
      z,
      j
    ) : Xe(U, L, E, !0) : (ae & 8 && u(A, ""), ne & 16 && W(
      $,
      A,
      N,
      L,
      E,
      G,
      z,
      j
    ));
  }, le = (y, k, A, N, L, E, G, z, j) => {
    y = y || wi, k = k || wi;
    const U = y.length, ae = k.length, $ = Math.min(U, ae);
    let se;
    for (se = 0; se < $; se++) {
      const ne = k[se] = j ? bs(k[se]) : as(k[se]);
      g(
        y[se],
        ne,
        A,
        null,
        L,
        E,
        G,
        z,
        j
      );
    }
    U > ae ? Xe(
      y,
      L,
      E,
      !0,
      !1,
      $
    ) : W(
      k,
      A,
      N,
      L,
      E,
      G,
      z,
      j,
      $
    );
  }, Re = (y, k, A, N, L, E, G, z, j) => {
    let U = 0;
    const ae = k.length;
    let $ = y.length - 1, se = ae - 1;
    for (; U <= $ && U <= se; ) {
      const ne = y[U], ve = k[U] = j ? bs(k[U]) : as(k[U]);
      if ($i(ne, ve))
        g(
          ne,
          ve,
          A,
          null,
          L,
          E,
          G,
          z,
          j
        );
      else
        break;
      U++;
    }
    for (; U <= $ && U <= se; ) {
      const ne = y[$], ve = k[se] = j ? bs(k[se]) : as(k[se]);
      if ($i(ne, ve))
        g(
          ne,
          ve,
          A,
          null,
          L,
          E,
          G,
          z,
          j
        );
      else
        break;
      $--, se--;
    }
    if (U > $) {
      if (U <= se) {
        const ne = se + 1, ve = ne < ae ? k[ne].el : N;
        for (; U <= se; )
          g(
            null,
            k[U] = j ? bs(k[U]) : as(k[U]),
            A,
            ve,
            L,
            E,
            G,
            z,
            j
          ), U++;
      }
    } else if (U > se)
      for (; U <= $; )
        Ue(y[U], L, E, !0), U++;
    else {
      const ne = U, ve = U, Ae = /* @__PURE__ */ new Map();
      for (U = ve; U <= se; U++) {
        const ut = k[U] = j ? bs(k[U]) : as(k[U]);
        ut.key != null && Ae.set(ut.key, U);
      }
      let Me, Ze = 0;
      const et = se - ve + 1;
      let St = !1, kt = 0;
      const Yt = new Array(et);
      for (U = 0; U < et; U++) Yt[U] = 0;
      for (U = ne; U <= $; U++) {
        const ut = y[U];
        if (Ze >= et) {
          Ue(ut, L, E, !0);
          continue;
        }
        let Tt;
        if (ut.key != null)
          Tt = Ae.get(ut.key);
        else
          for (Me = ve; Me <= se; Me++)
            if (Yt[Me - ve] === 0 && $i(ut, k[Me])) {
              Tt = Me;
              break;
            }
        Tt === void 0 ? Ue(ut, L, E, !0) : (Yt[Tt - ve] = U + 1, Tt >= kt ? kt = Tt : St = !0, g(
          ut,
          k[Tt],
          A,
          null,
          L,
          E,
          G,
          z,
          j
        ), Ze++);
      }
      const Ks = St ? jg(Yt) : wi;
      for (Me = Ks.length - 1, U = et - 1; U >= 0; U--) {
        const ut = ve + U, Tt = k[ut], $s = k[ut + 1], Js = ut + 1 < ae ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          $s.el || Gf($s)
        ) : N;
        Yt[U] === 0 ? g(
          null,
          Tt,
          A,
          Js,
          L,
          E,
          G,
          z,
          j
        ) : St && (Me < 0 || U !== Ks[Me] ? ke(Tt, A, Js, 2) : Me--);
      }
    }
  }, ke = (y, k, A, N, L = null) => {
    const { el: E, type: G, transition: z, children: j, shapeFlag: U } = y;
    if (U & 6) {
      ke(y.component.subTree, k, A, N);
      return;
    }
    if (U & 128) {
      y.suspense.move(k, A, N);
      return;
    }
    if (U & 64) {
      G.move(y, k, A, Z);
      return;
    }
    if (G === Ut) {
      i(E, k, A);
      for (let $ = 0; $ < j.length; $++)
        ke(j[$], k, A, N);
      i(y.anchor, k, A);
      return;
    }
    if (G === Jo) {
      C(y, k, A);
      return;
    }
    if (N !== 2 && U & 1 && z)
      if (N === 0)
        z.persisted && !E[qo] ? i(E, k, A) : (z.beforeEnter(E), i(E, k, A), Dt(() => z.enter(E), L));
      else {
        const { leave: $, delayLeave: se, afterLeave: ne } = z, ve = () => {
          y.ctx.isUnmounted ? n(E) : i(E, k, A);
        }, Ae = () => {
          const Me = E._isLeaving || !!E[qo];
          E._isLeaving && E[qo](
            !0
            /* cancelled */
          ), z.persisted && !Me ? ve() : $(E, () => {
            ve(), ne && ne();
          });
        };
        se ? se(E, ve, Ae) : Ae();
      }
    else
      i(E, k, A);
  }, Ue = (y, k, A, N = !1, L = !1) => {
    const {
      type: E,
      props: G,
      ref: z,
      children: j,
      dynamicChildren: U,
      shapeFlag: ae,
      patchFlag: $,
      dirs: se,
      cacheIndex: ne,
      memo: ve
    } = y;
    if ($ === -2 && (L = !1), z != null && (As(), mn(z, null, A, y, !0), Ps()), ne != null && (k.renderCache[ne] = void 0), ae & 256) {
      k.ctx.deactivate(y);
      return;
    }
    const Ae = ae & 1 && se, Me = !gn(y);
    let Ze;
    if (Me && (Ze = G && G.onVnodeBeforeUnmount) && Zt(Ze, k, y), ae & 6)
      rt(y.component, A, N);
    else {
      if (ae & 128) {
        y.suspense.unmount(A, N);
        return;
      }
      Ae && Ys(y, null, k, "beforeUnmount"), ae & 64 ? y.type.remove(
        y,
        k,
        A,
        Z,
        N
      ) : U && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !U.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== Ut || $ > 0 && $ & 64) ? Xe(
        U,
        k,
        A,
        !1,
        !0
      ) : (E === Ut && $ & 384 || !L && ae & 16) && Xe(j, k, A), N && Fe(y);
    }
    const et = ve != null && ne == null;
    (Me && (Ze = G && G.onVnodeUnmounted) || Ae || et) && Dt(() => {
      Ze && Zt(Ze, k, y), Ae && Ys(y, null, k, "unmounted"), et && (y.el = null);
    }, A);
  }, Fe = (y) => {
    const { type: k, el: A, anchor: N, transition: L } = y;
    if (k === Ut) {
      He(A, N);
      return;
    }
    if (k === Jo) {
      P(y);
      return;
    }
    const E = () => {
      n(A), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (y.shapeFlag & 1 && L && !L.persisted) {
      const { leave: G, delayLeave: z } = L, j = () => G(A, E);
      z ? z(y.el, E, j) : j();
    } else
      E();
  }, He = (y, k) => {
    let A;
    for (; y !== k; )
      A = f(y), n(y), y = A;
    n(k);
  }, rt = (y, k, A) => {
    const { bum: N, scope: L, job: E, subTree: G, um: z, m: j, a: U } = y;
    jc(j), jc(U), N && Bo(N), L.stop(), E && (E.flags |= 8, Ue(G, y, k, A)), z && Dt(z, k), Dt(() => {
      y.isUnmounted = !0;
    }, k);
  }, Xe = (y, k, A, N = !1, L = !1, E = 0) => {
    for (let G = E; G < y.length; G++)
      Ue(y[G], k, A, N, L);
  }, D = (y) => {
    if (y.shapeFlag & 6)
      return D(y.component.subTree);
    if (y.shapeFlag & 128)
      return y.suspense.next();
    const k = f(y.anchor || y.el), A = k && k[tg];
    return A ? f(A) : k;
  };
  let K = !1;
  const B = (y, k, A) => {
    let N;
    y == null ? k._vnode && (Ue(k._vnode, null, null, !0), N = k._vnode.component) : g(
      k._vnode || null,
      y,
      k,
      null,
      null,
      null,
      A
    ), k._vnode = y, K || (K = !0, Dc(N), _f(), K = !1);
  }, Z = {
    p: g,
    um: Ue,
    m: ke,
    r: Fe,
    mt: Ge,
    mc: W,
    pc: q,
    pbc: Q,
    n: D,
    o: t
  };
  return {
    render: B,
    hydrate: void 0,
    createApp: Ag(B)
  };
}
function $o({ type: t, props: e }, s) {
  return s === "svg" && t === "foreignObject" || s === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : s;
}
function Xs({ effect: t, job: e }, s) {
  s ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function Hg(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Vf(t, e, s = !1) {
  const i = t.children, n = e.children;
  if (fe(i) && fe(n))
    for (let a = 0; a < i.length; a++) {
      const o = i[a];
      let r = n[a];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = n[a] = bs(n[a]), r.el = o.el), !s && r.patchFlag !== -2 && Vf(o, r)), r.type === yo && (r.patchFlag === -1 && (r = n[a] = bs(r)), r.el = o.el), r.type === ws && !r.el && (r.el = o.el);
    }
}
function jg(t) {
  const e = t.slice(), s = [0];
  let i, n, a, o, r;
  const l = t.length;
  for (i = 0; i < l; i++) {
    const c = t[i];
    if (c !== 0) {
      if (n = s[s.length - 1], t[n] < c) {
        e[i] = n, s.push(i);
        continue;
      }
      for (a = 0, o = s.length - 1; a < o; )
        r = a + o >> 1, t[s[r]] < c ? a = r + 1 : o = r;
      c < t[s[a]] && (a > 0 && (e[i] = s[a - 1]), s[a] = i);
    }
  }
  for (a = s.length, o = s[a - 1]; a-- > 0; )
    s[a] = o, o = e[o];
  return s;
}
function qf(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : qf(e);
}
function jc(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function Gf(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? Gf(e.subTree) : null;
}
const Kf = (t) => t.__isSuspense;
function zg(t, e) {
  e && e.pendingBranch ? fe(t) ? e.effects.push(...t) : e.effects.push(t) : Xm(t);
}
const Ut = /* @__PURE__ */ Symbol.for("v-fgt"), yo = /* @__PURE__ */ Symbol.for("v-txt"), ws = /* @__PURE__ */ Symbol.for("v-cmt"), Jo = /* @__PURE__ */ Symbol.for("v-stc"), ci = [];
let Wt = null;
function $e(t = !1) {
  ci.push(Wt = t ? null : []);
}
function $f() {
  ci.pop(), Wt = ci[ci.length - 1] || null;
}
let wn = 1;
function qa(t, e = !1) {
  wn += t, t < 0 && Wt && e && (Wt.hasOnce = !0);
}
function Jf(t) {
  return t.dynamicChildren = wn > 0 ? Wt || wi : null, $f(), wn > 0 && Wt && Wt.push(t), t;
}
function Qe(t, e, s, i, n, a) {
  return Jf(
    S(
      t,
      e,
      s,
      i,
      n,
      a,
      !0
    )
  );
}
function Vg(t, e, s, i, n) {
  return Jf(
    Ce(
      t,
      e,
      s,
      i,
      n,
      !0
    )
  );
}
function Ga(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function $i(t, e) {
  return t.type === e.type && t.key === e.key;
}
const Yf = ({ key: t }) => t ?? null, Ma = ({
  ref: t,
  ref_key: e,
  ref_for: s
}) => (typeof t == "number" && (t = "" + t), t != null ? at(t) || /* @__PURE__ */ vt(t) || pe(t) ? { i: Ft, r: t, k: e, f: !!s } : t : null);
function S(t, e = null, s = null, i = 0, n = null, a = t === Ut ? 0 : 1, o = !1, r = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Yf(e),
    ref: e && Ma(e),
    scopeId: kf,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: a,
    patchFlag: i,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: Ft
  };
  return r ? (Ka(l, s), a & 128 && t.normalize(l)) : s && (l.shapeFlag |= at(s) ? 8 : 16), wn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Wt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Wt.push(l), l;
}
const Ce = qg;
function qg(t, e = null, s = null, i = 0, n = null, a = !1) {
  if ((!t || t === gg) && (t = ws), Ga(t)) {
    const r = Ni(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return s && Ka(r, s), wn > 0 && !a && Wt && (r.shapeFlag & 6 ? Wt[Wt.indexOf(t)] = r : Wt.push(r)), r.patchFlag = -2, r;
  }
  if (ib(t) && (t = t.__vccOpts), e) {
    e = Gg(e);
    let { class: r, style: l } = e;
    r && !at(r) && (e.class = Ke(r)), Oe(l) && (/* @__PURE__ */ ml(l) && !fe(l) && (l = ht({}, l)), e.style = rl(l));
  }
  const o = at(t) ? 1 : Kf(t) ? 128 : po(t) ? 64 : Oe(t) ? 4 : pe(t) ? 2 : 0;
  return S(
    t,
    e,
    s,
    i,
    n,
    o,
    a,
    !0
  );
}
function Gg(t) {
  return t ? /* @__PURE__ */ ml(t) || Ff(t) ? ht({}, t) : t : null;
}
function Ni(t, e, s = !1, i = !1) {
  const { props: n, ref: a, patchFlag: o, children: r, transition: l } = t, c = e ? Kg(n || {}, e) : n, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: c,
    key: c && Yf(c),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && a ? fe(a) ? a.concat(Ma(e)) : [a, Ma(e)] : Ma(e)
    ) : a,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: r,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== Ut ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Ni(t.ssContent),
    ssFallback: t.ssFallback && Ni(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return l && i && bl(
    u,
    l.clone(u)
  ), u;
}
function Pe(t = " ", e = 0) {
  return Ce(yo, null, t, e);
}
function zt(t = "", e = !1) {
  return e ? ($e(), Vg(ws, null, t)) : Ce(ws, null, t);
}
function as(t) {
  return t == null || typeof t == "boolean" ? Ce(ws) : fe(t) ? Ce(
    Ut,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : Ga(t) ? bs(t) : Ce(yo, null, String(t));
}
function bs(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Ni(t);
}
function Ka(t, e) {
  let s = 0;
  const { shapeFlag: i } = t;
  if (e == null)
    e = null;
  else if (fe(e))
    s = 16;
  else if (typeof e == "object")
    if (i & 65) {
      const n = e.default;
      n && (n._c && (n._d = !1), Ka(t, n()), n._c && (n._d = !0));
      return;
    } else {
      s = 32;
      const n = e._;
      !n && !Ff(e) ? e._ctx = Ft : n === 3 && Ft && (Ft.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else if (pe(e)) {
    if (i & 65) {
      Ka(t, { default: e });
      return;
    }
    e = { default: e, _ctx: Ft }, s = 32;
  } else
    e = String(e), i & 64 ? (s = 16, e = [Pe(e)]) : s = 8;
  t.children = e, t.shapeFlag |= s;
}
function Kg(...t) {
  const e = {};
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    for (const n in i)
      if (n === "class")
        e.class !== i.class && (e.class = Ke([e.class, i.class]));
      else if (n === "style")
        e.style = rl([e.style, i.style]);
      else if (oo(n)) {
        const a = e[n], o = i[n];
        o && a !== o && !(fe(a) && a.includes(o)) ? e[n] = a ? [].concat(a, o) : o : o == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ro(n) && (e[n] = o);
      } else n !== "" && (e[n] = i[n]);
  }
  return e;
}
function Zt(t, e, s, i = null) {
  $t(t, e, 7, [
    s,
    i
  ]);
}
const $g = Ef();
let Jg = 0;
function Yg(t, e, s) {
  const i = t.type, n = (e ? e.appContext : t.appContext) || $g, a = {
    uid: Jg++,
    vnode: t,
    type: i,
    parent: e,
    appContext: n,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new km(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(n.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Bf(i, n),
    emitsOptions: Of(i, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Be,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Be,
    data: Be,
    props: Be,
    attrs: Be,
    slots: Be,
    refs: Be,
    setupState: Be,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return a.ctx = { _: a }, a.root = e ? e.root : a, a.emit = Cg.bind(null, a), t.ce && t.ce(a), a;
}
let bt = null;
const Xg = () => bt || Ft;
let $a, Rn;
{
  const t = uo(), e = (s, i) => {
    let n;
    return (n = t[s]) || (n = t[s] = []), n.push(i), (a) => {
      n.length > 1 ? n.forEach((o) => o(a)) : n[0](a);
    };
  };
  $a = e(
    "__VUE_INSTANCE_SETTERS__",
    (s) => bt = s
  ), Rn = e(
    "__VUE_SSR_SETTERS__",
    (s) => Mn = s
  );
}
const Vn = (t) => {
  const e = bt;
  return $a(t), t.scope.on(), () => {
    t.scope.off(), $a(e);
  };
}, zc = () => {
  bt && bt.scope.off(), $a(null);
};
function Xf(t) {
  return t.vnode.shapeFlag & 4;
}
let Mn = !1;
function Qg(t, e = !1, s = !1) {
  e && Rn(e);
  const { props: i, children: n } = t.vnode, a = Xf(t);
  Eg(t, i, a, e), Ug(t, n, s || e);
  const o = a ? Zg(t, e) : void 0;
  return e && Rn(!1), o;
}
function Zg(t, e) {
  const s = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, yg);
  const { setup: i } = s;
  if (i) {
    As();
    const n = t.setupContext = i.length > 1 ? tb(t) : null, a = Vn(t), o = zn(
      i,
      t,
      0,
      [
        t.props,
        n
      ]
    ), r = Kd(o);
    if (Ps(), a(), (r || t.sp) && !gn(t) && wf(t), r) {
      if (o.then(zc, zc), e)
        return o.then((l) => {
          Rn(!0);
          try {
            Vc(t, l, e);
          } finally {
            Rn(!1);
          }
        }).catch((l) => {
          ho(l, t, 0);
        });
      t.asyncDep = o;
    } else
      Vc(t, o);
  } else
    Qf(t);
}
function Vc(t, e, s) {
  pe(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Oe(e) && (t.setupState = bf(e)), Qf(t);
}
function Qf(t, e, s) {
  const i = t.type;
  t.render || (t.render = i.render || rs);
  {
    const n = Vn(t);
    As();
    try {
      vg(t);
    } finally {
      Ps(), n();
    }
  }
}
const eb = {
  get(t, e) {
    return gt(t, "get", ""), t[e];
  }
};
function tb(t) {
  const e = (s) => {
    t.exposed = s || {};
  };
  return {
    attrs: new Proxy(t.attrs, eb),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function vo(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(bf(Hm(t.exposed)), {
    get(e, s) {
      if (s in e)
        return e[s];
      if (s in bn)
        return bn[s](t);
    },
    has(e, s) {
      return s in e || s in bn;
    }
  })) : t.proxy;
}
function sb(t, e = !0) {
  return pe(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function ib(t) {
  return pe(t) && "__vccOpts" in t;
}
const de = (t, e) => /* @__PURE__ */ Gm(t, e, Mn);
function ss(t, e, s) {
  try {
    qa(-1);
    const i = arguments.length;
    return i === 2 ? Oe(e) && !fe(e) ? Ga(e) ? Ce(t, null, [e]) : Ce(t, e) : Ce(t, null, e) : (i > 3 ? s = Array.prototype.slice.call(arguments, 2) : i === 3 && Ga(s) && (s = [s]), Ce(t, e, s));
  } finally {
    qa(1);
  }
}
const nb = "3.5.41";
/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Dr;
const qc = typeof window < "u" && window.trustedTypes;
if (qc)
  try {
    Dr = /* @__PURE__ */ qc.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const Zf = Dr ? (t) => Dr.createHTML(t) : (t) => t, ab = "http://www.w3.org/2000/svg", ob = "http://www.w3.org/1998/Math/MathML", gs = typeof document < "u" ? document : null, Gc = gs && /* @__PURE__ */ gs.createElement("template"), rb = {
  insert: (t, e, s) => {
    e.insertBefore(t, s || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, s, i) => {
    const n = e === "svg" ? gs.createElementNS(ab, t) : e === "mathml" ? gs.createElementNS(ob, t) : s ? gs.createElement(t, { is: s }) : gs.createElement(t);
    return t === "select" && i && i.multiple != null && n.setAttribute("multiple", i.multiple), n;
  },
  createText: (t) => gs.createTextNode(t),
  createComment: (t) => gs.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => gs.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, s, i, n, a) {
    const o = s ? s.previousSibling : e.lastChild;
    if (n && (n === a || n.nextSibling))
      for (; e.insertBefore(n.cloneNode(!0), s), !(n === a || !(n = n.nextSibling)); )
        ;
    else {
      Gc.innerHTML = Zf(
        i === "svg" ? `<svg>${t}</svg>` : i === "mathml" ? `<math>${t}</math>` : t
      );
      const r = Gc.content;
      if (i === "svg" || i === "mathml") {
        const l = r.firstChild;
        for (; l.firstChild; )
          r.appendChild(l.firstChild);
        r.removeChild(l);
      }
      e.insertBefore(r, s);
    }
    return [
      // first
      o ? o.nextSibling : e.firstChild,
      // last
      s ? s.previousSibling : e.lastChild
    ];
  }
}, lb = /* @__PURE__ */ Symbol("_vtc");
function cb(t, e, s) {
  const i = t[lb];
  i && (e = (e ? [e, ...i] : [...i]).join(" ")), e == null ? t.removeAttribute("class") : s ? t.setAttribute("class", e) : t.className = e;
}
const Ja = /* @__PURE__ */ Symbol("_vod"), eh = /* @__PURE__ */ Symbol("_vsh"), Es = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(t, { value: e }, { transition: s }) {
    t[Ja] = t.style.display === "none" ? "" : t.style.display, s && e ? s.beforeEnter(t) : Ji(t, e);
  },
  mounted(t, { value: e }, { transition: s }) {
    s && e && s.enter(t);
  },
  updated(t, { value: e, oldValue: s }, { transition: i }) {
    !e != !s && (i ? e ? (i.beforeEnter(t), Ji(t, !0), i.enter(t)) : i.leave(t, () => {
      Ji(t, !1);
    }) : Ji(t, e));
  },
  beforeUnmount(t, { value: e }) {
    Ji(t, e);
  }
};
function Ji(t, e) {
  t.style.display = e ? t[Ja] : "none", t[eh] = !e;
}
const ub = /* @__PURE__ */ Symbol(""), db = /(?:^|;)\s*display\s*:/;
function fb(t, e, s) {
  const i = t.style, n = at(s);
  let a = !1;
  if (s && !n) {
    if (e)
      if (at(e))
        for (const o of e.split(";")) {
          const r = o.slice(0, o.indexOf(":")).trim();
          s[r] == null && an(i, r, "");
        }
      else
        for (const o in e)
          s[o] == null && an(i, o, "");
    for (const o in s) {
      o === "display" && (a = !0);
      const r = s[o];
      r != null ? pb(
        t,
        o,
        !at(e) && e ? e[o] : void 0,
        r
      ) || an(i, o, r) : an(i, o, "");
    }
  } else if (n) {
    if (e !== s) {
      const o = i[ub];
      o && (s += ";" + o), i.cssText = s, a = db.test(s);
    }
  } else e && t.removeAttribute("style");
  Ja in t && (t[Ja] = a ? i.display : "", t[eh] && (i.display = "none"));
}
const Kc = /\s*!important$/;
function an(t, e, s) {
  if (fe(s))
    s.forEach((i) => an(t, e, i));
  else if (s == null && (s = ""), e.startsWith("--"))
    t.setProperty(e, s);
  else {
    const i = hb(t, e);
    Kc.test(s) ? t.setProperty(
      pi(i),
      s.replace(Kc, ""),
      "important"
    ) : t[i] = s;
  }
}
const $c = ["Webkit", "Moz", "ms"], Yo = {};
function hb(t, e) {
  const s = Yo[e];
  if (s)
    return s;
  let i = wt(e);
  if (i !== "filter" && i in t)
    return Yo[e] = i;
  i = co(i);
  for (let n = 0; n < $c.length; n++) {
    const a = $c[n] + i;
    if (a in t)
      return Yo[e] = a;
  }
  return e;
}
function pb(t, e, s, i) {
  return t.tagName === "TEXTAREA" && (e === "width" || e === "height") && at(i) && s === i;
}
const Jc = "http://www.w3.org/1999/xlink";
function Yc(t, e, s, i, n, a = _m(e)) {
  i && e.startsWith("xlink:") ? s == null ? t.removeAttributeNS(Jc, e.slice(6, e.length)) : t.setAttributeNS(Jc, e, s) : s == null || a && !Xd(s) ? t.removeAttribute(e) : t.setAttribute(
    e,
    a ? "" : us(s) ? String(s) : s
  );
}
function Xc(t, e, s, i, n) {
  if (e === "innerHTML" || e === "textContent") {
    s != null && (t[e] = e === "innerHTML" ? Zf(s) : s);
    return;
  }
  const a = t.tagName;
  if (e === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const r = a === "OPTION" ? t.getAttribute("value") || "" : t.value, l = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(s);
    (r !== l || !("_value" in t)) && (t.value = l), s == null && t.removeAttribute(e), t._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const r = typeof t[e];
    r === "boolean" ? s = Xd(s) : s == null && r === "string" ? (s = "", o = !0) : r === "number" && (s = 0, o = !0);
  }
  try {
    t[e] = s;
  } catch {
  }
  o && t.removeAttribute(n || e);
}
function mb(t, e, s, i) {
  t.addEventListener(e, s, i);
}
function gb(t, e, s, i) {
  t.removeEventListener(e, s, i);
}
const Qc = /* @__PURE__ */ Symbol("_vei");
function bb(t, e, s, i, n = null) {
  const a = t[Qc] || (t[Qc] = {}), o = a[e];
  if (i && o)
    o.value = i;
  else {
    const [r, l] = _b(e);
    if (i) {
      const c = a[e] = Tb(
        i,
        n
      );
      mb(t, r, c, l);
    } else o && (gb(t, r, o, l), a[e] = void 0);
  }
}
const yb = /(Once|Passive|Capture)$/, vb = /^on:?(?:Once|Passive|Capture)$/;
function _b(t) {
  let e, s;
  for (; (s = t.match(yb)) && !vb.test(t); )
    e || (e = {}), t = t.slice(0, t.length - s[1].length), e[s[1].toLowerCase()] = !0;
  return [t[2] === ":" ? t.slice(3) : pi(t.slice(2)), e];
}
let Xo = 0;
const Sb = /* @__PURE__ */ Promise.resolve(), kb = () => Xo || (Sb.then(() => Xo = 0), Xo = Date.now());
function Tb(t, e) {
  const s = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= s.attached)
      return;
    const n = s.value;
    if (fe(n)) {
      const a = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        a.call(i), i._stopped = !0;
      };
      const o = n.slice(), r = [i];
      for (let l = 0; l < o.length && !i._stopped; l++) {
        const c = o[l];
        c && $t(
          c,
          e,
          5,
          r
        );
      }
    } else
      $t(
        n,
        e,
        5,
        [i]
      );
  };
  return s.value = t, s.attached = kb(), s;
}
const Zc = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, xb = (t, e, s, i, n, a) => {
  const o = n === "svg";
  e === "class" ? cb(t, i, o) : e === "style" ? fb(t, s, i) : oo(e) ? ro(e) || bb(t, e, s, i, a) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Ab(t, e, i, o)) ? (Xc(t, e, i), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Yc(t, e, i, o, a, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Pb(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !at(i))) ? Xc(t, wt(e), i, a, e) : (e === "true-value" ? t._trueValue = i : e === "false-value" && (t._falseValue = i), Yc(t, e, i, o));
};
function Ab(t, e, s, i) {
  if (i)
    return !!(e === "innerHTML" || e === "textContent" || e in t && Zc(e) && pe(s));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const n = t.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return Zc(e) && at(s) ? !1 : e in t;
}
function Pb(t, e) {
  const s = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!s)
    return !1;
  const i = wt(e);
  return Array.isArray(s) ? s.some((n) => wt(n) === i) : Object.keys(s).some((n) => wt(n) === i);
}
const Cb = /* @__PURE__ */ ht({ patchProp: xb }, rb);
let eu;
function wb() {
  return eu || (eu = Wg(Cb));
}
const Rb = ((...t) => {
  const e = wb().createApp(...t), { mount: s } = e;
  return e.mount = (i) => {
    const n = Db(i);
    if (!n) return;
    const a = e._component;
    !pe(a) && !a.render && !a.template && (a.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const o = s(n, !1, Mb(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), o;
  }, e;
});
function Mb(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Db(t) {
  return at(t) ? document.querySelector(t) : t;
}
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const ki = typeof document < "u";
function th(t) {
  return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t;
}
function Ib(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module" || t.default && th(t.default);
}
const Ve = Object.assign;
function Qo(t, e) {
  const s = {};
  for (const i in e) {
    const n = e[i];
    s[i] = Jt(n) ? n.map(t) : t(n);
  }
  return s;
}
const yn = () => {
}, Jt = Array.isArray;
function tu(t, e) {
  const s = {};
  for (const i in t) s[i] = i in e ? e[i] : t[i];
  return s;
}
const sh = /#/g, Eb = /&/g, Ob = /\//g, Nb = /=/g, Lb = /\?/g, ih = /\+/g, Ub = /%5B/g, Fb = /%5D/g, nh = /%5E/g, Wb = /%60/g, ah = /%7B/g, Bb = /%7C/g, oh = /%7D/g, Hb = /%20/g;
function Sl(t) {
  return t == null ? "" : encodeURI("" + t).replace(Bb, "|").replace(Ub, "[").replace(Fb, "]");
}
function jb(t) {
  return Sl(t).replace(ah, "{").replace(oh, "}").replace(nh, "^");
}
function Ir(t) {
  return Sl(t).replace(ih, "%2B").replace(Hb, "+").replace(sh, "%23").replace(Eb, "%26").replace(Wb, "`").replace(ah, "{").replace(oh, "}").replace(nh, "^");
}
function zb(t) {
  return Ir(t).replace(Nb, "%3D");
}
function Vb(t) {
  return Sl(t).replace(sh, "%23").replace(Lb, "%3F");
}
function qb(t) {
  return Vb(t).replace(Ob, "%2F");
}
function Dn(t) {
  if (t == null) return null;
  try {
    return decodeURIComponent("" + t);
  } catch {
  }
  return "" + t;
}
const Gb = /\/$/, Kb = (t) => t.replace(Gb, "");
function Zo(t, e, s = "/") {
  let i, n = {}, a = "", o = "";
  const r = e.indexOf("#");
  let l = e.indexOf("?");
  return l = r >= 0 && l > r ? -1 : l, l >= 0 && (i = e.slice(0, l), a = e.slice(l, r > 0 ? r : e.length), n = t(a.slice(1))), r >= 0 && (i = i || e.slice(0, r), o = e.slice(r, e.length)), i = Xb(i ?? e, s), {
    fullPath: i + a + o,
    path: i,
    query: n,
    hash: Dn(o)
  };
}
function $b(t, e) {
  const s = e.query ? t(e.query) : "";
  return e.path + (s && "?") + s + (e.hash || "");
}
function Jb(t, e, s) {
  const i = e.matched.length - 1, n = s.matched.length - 1;
  return i > -1 && i === n && Li(e.matched[i], s.matched[n]) && rh(e.params, s.params) && t(e.query) === t(s.query) && e.hash === s.hash;
}
function Li(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e);
}
function rh(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (var s in t) if (!Yb(t[s], e[s])) return !1;
  return !0;
}
function Yb(t, e) {
  return Jt(t) ? su(t, e) : Jt(e) ? su(e, t) : (t == null ? void 0 : t.valueOf()) === (e == null ? void 0 : e.valueOf());
}
function su(t, e) {
  return Jt(e) ? t.length === e.length && t.every((s, i) => s === e[i]) : t.length === 1 && t[0] === e;
}
function Xb(t, e) {
  if (t.startsWith("/")) return t;
  if (!t) return e;
  const s = e.split("/"), i = t.split("/"), n = i[i.length - 1];
  (n === ".." || n === ".") && i.push("");
  let a = s.length - 1, o, r;
  for (o = 0; o < i.length; o++)
    if (r = i[o], r !== ".")
      if (r === "..")
        a > 1 && a--;
      else break;
  return s.slice(0, a).join("/") + "/" + i.slice(o).join("/");
}
const Os = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
let Er = /* @__PURE__ */ (function(t) {
  return t.pop = "pop", t.push = "push", t;
})({}), iu = /* @__PURE__ */ (function(t) {
  return t.back = "back", t.forward = "forward", t.unknown = "", t;
})({});
const er = "";
function Qb(t) {
  if (!t) if (ki) {
    const e = document.querySelector("base");
    t = e && e.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^\/]+/, "");
  } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), Kb(t);
}
const Zb = /^[^#]+#/;
function ey(t, e) {
  return t.replace(Zb, "#") + e;
}
function ty(t, e) {
  const s = document.documentElement.getBoundingClientRect(), i = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: i.left - s.left - (e.left || 0),
    top: i.top - s.top - (e.top || 0)
  };
}
const sy = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function iy(t) {
  let e;
  if ("el" in t) {
    const s = t.el, i = typeof s == "string" && s.startsWith("#"), n = typeof s == "string" ? i ? document.getElementById(s.slice(1)) : document.querySelector(s) : s;
    if (!n)
      return;
    e = ty(n, t);
  } else e = t;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.scrollX, e.top != null ? e.top : window.scrollY);
}
function nu(t, e) {
  return (history.state ? history.state.position - e : -1) + t;
}
const Or = /* @__PURE__ */ new Map();
function ny(t, e) {
  Or.set(t, e);
}
function ay(t) {
  const e = Or.get(t);
  return Or.delete(t), e;
}
function oy(t) {
  return typeof t == "string" || t && typeof t == "object";
}
function lh(t) {
  return typeof t == "string" || typeof t == "symbol";
}
let it = /* @__PURE__ */ (function(t) {
  return t[t.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", t[t.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", t[t.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", t[t.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", t[t.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", t;
})({});
const ch = Symbol("");
it.MATCHER_NOT_FOUND + "", it.NAVIGATION_GUARD_REDIRECT + "", it.NAVIGATION_ABORTED + "", it.NAVIGATION_CANCELLED + "", it.NAVIGATION_DUPLICATED + "";
function Ui(t, e) {
  return Ve(/* @__PURE__ */ new Error(), {
    type: t,
    [ch]: !0
  }, e);
}
function fs(t, e) {
  return t instanceof Error && ch in t && (e == null || !!(t.type & e));
}
const ry = [
  "params",
  "query",
  "hash"
];
function ly(t) {
  if (typeof t == "string") return t;
  if (t.path != null) return t.path;
  const e = {};
  for (const s of ry) s in t && (e[s] = t[s]);
  return JSON.stringify(e, null, 2);
}
function cy(t) {
  const e = {};
  if (t === "" || t === "?") return e;
  const s = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let i = 0; i < s.length; ++i) {
    const n = s[i].replace(ih, " "), a = n.indexOf("="), o = Dn(a < 0 ? n : n.slice(0, a)), r = a < 0 ? null : Dn(n.slice(a + 1));
    if (o in e) {
      let l = e[o];
      Jt(l) || (l = e[o] = [l]), l.push(r);
    } else e[o] = r;
  }
  return e;
}
function au(t) {
  let e = "";
  for (let s in t) {
    const i = t[s];
    if (s = zb(s), i == null) {
      i !== void 0 && (e += (e.length ? "&" : "") + s);
      continue;
    }
    (Jt(i) ? i.map((n) => n && Ir(n)) : [i && Ir(i)]).forEach((n) => {
      n !== void 0 && (e += (e.length ? "&" : "") + s, n != null && (e += "=" + n));
    });
  }
  return e;
}
function uy(t) {
  const e = {};
  for (const s in t) {
    const i = t[s];
    i !== void 0 && (e[s] = Jt(i) ? i.map((n) => n == null ? null : "" + n) : i == null ? i : "" + i);
  }
  return e;
}
const dy = Symbol(""), ou = Symbol(""), _o = Symbol(""), kl = Symbol(""), Nr = Symbol("");
function Yi() {
  let t = [];
  function e(i) {
    return t.push(i), () => {
      const n = t.indexOf(i);
      n > -1 && t.splice(n, 1);
    };
  }
  function s() {
    t = [];
  }
  return {
    add: e,
    list: () => t.slice(),
    reset: s
  };
}
function Ls(t, e, s, i, n, a = (o) => o()) {
  const o = i && (i.enterCallbacks[n] = i.enterCallbacks[n] || []);
  return () => new Promise((r, l) => {
    const c = (f) => {
      f === !1 ? l(Ui(it.NAVIGATION_ABORTED, {
        from: s,
        to: e
      })) : f instanceof Error ? l(f) : oy(f) ? l(Ui(it.NAVIGATION_GUARD_REDIRECT, {
        from: e,
        to: f
      })) : (o && i.enterCallbacks[n] === o && typeof f == "function" && o.push(f), r());
    }, u = a(() => t.call(i && i.instances[n], e, s, c));
    let d = Promise.resolve(u);
    t.length < 3 && (d = d.then(c)), d.catch((f) => l(f));
  });
}
function tr(t, e, s, i, n = (a) => a()) {
  const a = [];
  for (const o of t)
    for (const r in o.components) {
      let l = o.components[r];
      if (!(e !== "beforeRouteEnter" && !o.instances[r]))
        if (th(l)) {
          const c = (l.__vccOpts || l)[e];
          c && a.push(Ls(c, s, i, o, r, n));
        } else {
          let c = l();
          a.push(() => c.then((u) => {
            if (!u) throw new Error(`Couldn't resolve component "${r}" at "${o.path}"`);
            const d = Ib(u) ? u.default : u;
            o.mods[r] = u, o.components[r] = d;
            const f = (d.__vccOpts || d)[e];
            return f && Ls(f, s, i, o, r, n)();
          }));
        }
    }
  return a;
}
function fy(t, e) {
  const s = [], i = [], n = [], a = Math.max(e.matched.length, t.matched.length);
  for (let o = 0; o < a; o++) {
    const r = e.matched[o];
    r && (t.matched.find((c) => Li(c, r)) ? i.push(r) : s.push(r));
    const l = t.matched[o];
    l && (e.matched.find((c) => Li(c, l)) || n.push(l));
  }
  return [
    s,
    i,
    n
  ];
}
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
function hy(t = "") {
  let e = [], s = [[er, {}]], i = 0;
  t = Qb(t);
  function n(r, l = {}) {
    i++, i !== s.length && s.splice(i), s.push([r, l]);
  }
  function a(r, l, { direction: c, delta: u }) {
    const d = {
      direction: c,
      delta: u,
      type: Er.pop
    };
    for (const f of e) f(r, l, d);
  }
  const o = {
    location: er,
    state: {},
    base: t,
    createHref: ey.bind(null, t),
    replace(r, l) {
      s.splice(i--, 1), n(r, l);
    },
    push(r, l) {
      n(r, l);
    },
    listen(r) {
      return e.push(r), () => {
        const l = e.indexOf(r);
        l > -1 && e.splice(l, 1);
      };
    },
    destroy() {
      e = [], s = [[er, {}]], i = 0;
    },
    go(r, l = !0) {
      const c = this.location, u = r < 0 ? iu.back : iu.forward;
      i = Math.max(0, Math.min(i + r, s.length - 1)), l && a(this.location, c, {
        direction: u,
        delta: r
      });
    }
  };
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => s[i][0]
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => s[i][1]
  }), o;
}
let ai = /* @__PURE__ */ (function(t) {
  return t[t.Static = 0] = "Static", t[t.Param = 1] = "Param", t[t.Group = 2] = "Group", t;
})({});
var lt = /* @__PURE__ */ (function(t) {
  return t[t.Static = 0] = "Static", t[t.Param = 1] = "Param", t[t.ParamRegExp = 2] = "ParamRegExp", t[t.ParamRegExpEnd = 3] = "ParamRegExpEnd", t[t.EscapeNext = 4] = "EscapeNext", t;
})(lt || {});
const py = {
  type: ai.Static,
  value: ""
}, my = /[a-zA-Z0-9_]/;
function gy(t) {
  if (!t) return [[]];
  if (t === "/") return [[py]];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
  function e(h) {
    throw new Error(`ERR (${s})/"${c}": ${h}`);
  }
  let s = lt.Static, i = s;
  const n = [];
  let a;
  function o() {
    a && n.push(a), a = [];
  }
  let r = 0, l, c = "", u = "";
  function d() {
    c && (s === lt.Static ? a.push({
      type: ai.Static,
      value: c
    }) : s === lt.Param || s === lt.ParamRegExp || s === lt.ParamRegExpEnd ? (a.length > 1 && (l === "*" || l === "+") && e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: ai.Param,
      value: c,
      regexp: u,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : e("Invalid state to consume buffer"), c = "");
  }
  function f() {
    c += l;
  }
  for (; r < t.length; ) {
    if (l = t[r++], l === "\\" && s !== lt.ParamRegExp) {
      i = s, s = lt.EscapeNext;
      continue;
    }
    switch (s) {
      case lt.Static:
        l === "/" ? (c && d(), o()) : l === ":" ? (d(), s = lt.Param) : f();
        break;
      case lt.EscapeNext:
        f(), s = i;
        break;
      case lt.Param:
        l === "(" ? s = lt.ParamRegExp : my.test(l) ? f() : (d(), s = lt.Static, l !== "*" && l !== "?" && l !== "+" && r--);
        break;
      case lt.ParamRegExp:
        l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : s = lt.ParamRegExpEnd : u += l;
        break;
      case lt.ParamRegExpEnd:
        d(), s = lt.Static, l !== "*" && l !== "?" && l !== "+" && r--, u = "";
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  return s === lt.ParamRegExp && e(`Unfinished custom RegExp for param "${c}"`), d(), o(), n;
}
const ru = "[^/]+?", by = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
};
var Pt = /* @__PURE__ */ (function(t) {
  return t[t._multiplier = 10] = "_multiplier", t[t.Root = 90] = "Root", t[t.Segment = 40] = "Segment", t[t.SubSegment = 30] = "SubSegment", t[t.Static = 40] = "Static", t[t.Dynamic = 20] = "Dynamic", t[t.BonusCustomRegExp = 10] = "BonusCustomRegExp", t[t.BonusWildcard = -50] = "BonusWildcard", t[t.BonusRepeatable = -20] = "BonusRepeatable", t[t.BonusOptional = -8] = "BonusOptional", t[t.BonusStrict = 0.7000000000000001] = "BonusStrict", t[t.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", t;
})(Pt || {});
const yy = /[.+*?^${}()[\]/\\]/g;
function vy(t, e) {
  const s = Ve({}, by, e), i = [];
  let n = s.start ? "^" : "";
  const a = [];
  for (const c of t) {
    const u = c.length ? [] : [Pt.Root];
    s.strict && !c.length && (n += "/");
    for (let d = 0; d < c.length; d++) {
      const f = c[d];
      let h = Pt.Segment + (s.sensitive ? Pt.BonusCaseSensitive : 0);
      if (f.type === ai.Static)
        d || (n += "/"), n += f.value.replace(yy, "\\$&"), h += Pt.Static;
      else if (f.type === ai.Param) {
        const { value: m, repeatable: g, optional: v, regexp: T } = f;
        a.push({
          name: m,
          repeatable: g,
          optional: v
        });
        const x = T || ru;
        if (x !== ru) {
          h += Pt.BonusCustomRegExp;
          try {
            `${x}`;
          } catch (P) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${x}): ` + P.message);
          }
        }
        let C = g ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        d || (C = v && c.length < 2 ? `(?:/${C})` : "/" + C), v && (C += "?"), n += C, h += Pt.Dynamic, v && (h += Pt.BonusOptional), g && (h += Pt.BonusRepeatable), x === ".*" && (h += Pt.BonusWildcard);
      }
      u.push(h);
    }
    i.push(u);
  }
  if (s.strict && s.end) {
    const c = i.length - 1;
    i[c][i[c].length - 1] += Pt.BonusStrict;
  }
  s.strict || (n += "/?"), s.end ? n += "$" : s.strict && !n.endsWith("/") && (n += "(?:/|$)");
  const o = new RegExp(n, s.sensitive ? "" : "i");
  function r(c) {
    const u = c.match(o), d = {};
    if (!u) return null;
    for (let f = 1; f < u.length; f++) {
      const h = u[f] || "", m = a[f - 1];
      d[m.name] = h && m.repeatable ? h.split("/") : h;
    }
    return d;
  }
  function l(c) {
    let u = "", d = !1;
    for (const f of t) {
      (!d || !u.endsWith("/")) && (u += "/"), d = !1;
      for (const h of f) if (h.type === ai.Static) u += h.value;
      else if (h.type === ai.Param) {
        const { value: m, repeatable: g, optional: v } = h, T = m in c ? c[m] : "";
        if (Jt(T) && !g) throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
        const x = Jt(T) ? T.join("/") : T;
        if (!x) if (v)
          f.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
        else throw new Error(`Missing required param "${m}"`);
        u += x;
      }
    }
    return u || "/";
  }
  return {
    re: o,
    score: i,
    keys: a,
    parse: r,
    stringify: l
  };
}
function _y(t, e) {
  let s = 0;
  for (; s < t.length && s < e.length; ) {
    const i = e[s] - t[s];
    if (i) return i;
    s++;
  }
  return t.length < e.length ? t.length === 1 && t[0] === Pt.Static + Pt.Segment ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === Pt.Static + Pt.Segment ? 1 : -1 : 0;
}
function uh(t, e) {
  let s = 0;
  const i = t.score, n = e.score;
  for (; s < i.length && s < n.length; ) {
    const a = _y(i[s], n[s]);
    if (a) return a;
    s++;
  }
  if (Math.abs(n.length - i.length) === 1) {
    if (lu(i)) return 1;
    if (lu(n)) return -1;
  }
  return n.length - i.length;
}
function lu(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0;
}
const Sy = {
  strict: !1,
  end: !0,
  sensitive: !1
};
function ky(t, e, s) {
  const i = vy(gy(t.path), s), n = Ve(i, {
    record: t,
    parent: e,
    children: [],
    alias: []
  });
  return e && !n.record.aliasOf == !e.record.aliasOf && e.children.push(n), n;
}
function Ty(t, e) {
  const s = [], i = /* @__PURE__ */ new Map();
  e = tu(Sy, e);
  function n(d) {
    return i.get(d);
  }
  function a(d, f, h) {
    const m = !h, g = uu(d);
    g.aliasOf = h && h.record;
    const v = tu(e, d), T = [g];
    if ("alias" in d) {
      const P = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const M of P) T.push(uu(Ve({}, g, {
        components: h ? h.record.components : g.components,
        path: M,
        aliasOf: h ? h.record : g
      })));
    }
    let x, C;
    for (const P of T) {
      const { path: M } = P;
      if (f && M[0] !== "/") {
        const w = f.record.path, O = w[w.length - 1] === "/" ? "" : "/";
        P.path = f.record.path + (M && O + M);
      }
      if (x = ky(P, f, v), h ? h.alias.push(x) : (C = C || x, C !== x && C.alias.push(x), m && d.name && !du(x) && o(d.name)), dh(x) && l(x), g.children) {
        const w = g.children;
        for (let O = 0; O < w.length; O++) a(w[O], x, h && h.children[O]);
      }
      h = h || x;
    }
    return C ? () => {
      o(C);
    } : yn;
  }
  function o(d) {
    if (lh(d)) {
      const f = i.get(d);
      f && (i.delete(d), s.splice(s.indexOf(f), 1), f.children.forEach(o), f.alias.forEach(o));
    } else {
      const f = s.indexOf(d);
      f > -1 && (s.splice(f, 1), d.record.name && i.delete(d.record.name), d.children.forEach(o), d.alias.forEach(o));
    }
  }
  function r() {
    return s;
  }
  function l(d) {
    const f = Py(d, s);
    s.splice(f, 0, d), d.record.name && !du(d) && i.set(d.record.name, d);
  }
  function c(d, f) {
    let h, m = {}, g, v;
    if ("name" in d && d.name) {
      if (h = i.get(d.name), !h) throw Ui(it.MATCHER_NOT_FOUND, { location: d });
      v = h.record.name, m = Ve(cu(f.params, h.keys.filter((C) => !C.optional).concat(h.parent ? h.parent.keys.filter((C) => C.optional) : []).map((C) => C.name)), d.params && cu(d.params, h.keys.map((C) => C.name))), g = h.stringify(m);
    } else if (d.path != null)
      g = d.path, h = s.find((C) => C.re.test(g)), h && (m = h.parse(g), v = h.record.name);
    else {
      if (h = f.name ? i.get(f.name) : s.find((C) => C.re.test(f.path)), !h) throw Ui(it.MATCHER_NOT_FOUND, {
        location: d,
        currentLocation: f
      });
      v = h.record.name, m = Ve({}, f.params, d.params), g = h.stringify(m);
    }
    const T = [];
    let x = h;
    for (; x; )
      T.unshift(x.record), x = x.parent;
    return {
      name: v,
      path: g,
      params: m,
      matched: T,
      meta: Ay(T)
    };
  }
  t.forEach((d) => a(d));
  function u() {
    s.length = 0, i.clear();
  }
  return {
    addRoute: a,
    resolve: c,
    removeRoute: o,
    clearRoutes: u,
    getRoutes: r,
    getRecordMatcher: n
  };
}
function cu(t, e) {
  const s = {};
  for (const i of e) i in t && (s[i] = t[i]);
  return s;
}
function uu(t) {
  const e = {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: t.aliasOf,
    beforeEnter: t.beforeEnter,
    props: xy(t),
    children: t.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in t ? t.components || null : t.component && { default: t.component }
  };
  return Object.defineProperty(e, "mods", { value: {} }), e;
}
function xy(t) {
  const e = {}, s = t.props || !1;
  if ("component" in t) e.default = s;
  else for (const i in t.components) e[i] = typeof s == "object" ? s[i] : s;
  return e;
}
function du(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0;
    t = t.parent;
  }
  return !1;
}
function Ay(t) {
  return t.reduce((e, s) => Ve(e, s.meta), {});
}
function Py(t, e) {
  let s = 0, i = e.length;
  for (; s !== i; ) {
    const a = s + i >> 1;
    uh(t, e[a]) < 0 ? i = a : s = a + 1;
  }
  const n = Cy(t);
  return n && (i = e.lastIndexOf(n, i - 1)), i;
}
function Cy(t) {
  let e = t;
  for (; e = e.parent; ) if (dh(e) && uh(t, e) === 0) return e;
}
function dh({ record: t }) {
  return !!(t.name || t.components && Object.keys(t.components).length || t.redirect);
}
function fu(t) {
  const e = Ot(_o), s = Ot(kl), i = de(() => {
    const l = te(t.to);
    return e.resolve(l);
  }), n = de(() => {
    const { matched: l } = i.value, { length: c } = l, u = l[c - 1], d = s.matched;
    if (!u || !d.length) return -1;
    const f = d.findIndex(Li.bind(null, u));
    if (f > -1) return f;
    const h = hu(l[c - 2]);
    return c > 1 && hu(u) === h && d[d.length - 1].path !== h ? d.findIndex(Li.bind(null, l[c - 2])) : f;
  }), a = de(() => n.value > -1 && Iy(s.params, i.value.params)), o = de(() => n.value > -1 && n.value === s.matched.length - 1 && rh(s.params, i.value.params));
  function r(l = {}) {
    if (Dy(l)) {
      const c = e[te(t.replace) ? "replace" : "push"](te(t.to)).catch(yn);
      return t.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return {
    route: i,
    href: de(() => i.value.href),
    isActive: a,
    isExactActive: o,
    navigate: r
  };
}
function wy(t) {
  return t.length === 1 ? t[0] : t;
}
const Ry = /* @__PURE__ */ Cf({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    },
    viewTransition: Boolean
  },
  useLink: fu,
  setup(t, { slots: e }) {
    const s = /* @__PURE__ */ jn(fu(t)), { options: i } = Ot(_o), n = de(() => ({
      [pu(t.activeClass, i.linkActiveClass, "router-link-active")]: s.isActive,
      [pu(t.exactActiveClass, i.linkExactActiveClass, "router-link-exact-active")]: s.isExactActive
    }));
    return () => {
      const a = e.default && wy(e.default(s));
      return t.custom ? a : ss("a", {
        "aria-current": s.isExactActive ? t.ariaCurrentValue : null,
        href: s.href,
        onClick: s.navigate,
        class: n.value
      }, a);
    };
  }
}), My = Ry;
function Dy(t) {
  if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e)) return;
    }
    return t.preventDefault && t.preventDefault(), !0;
  }
}
function Iy(t, e) {
  for (const s in e) {
    const i = e[s], n = t[s];
    if (typeof i == "string") {
      if (i !== n) return !1;
    } else if (!Jt(n) || n.length !== i.length || i.some((a, o) => a.valueOf() !== n[o].valueOf())) return !1;
  }
  return !0;
}
function hu(t) {
  return t ? t.aliasOf ? t.aliasOf.path : t.path : "";
}
const pu = (t, e, s) => t ?? e ?? s, Ey = /* @__PURE__ */ Cf({
  name: "RouterView",
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: { MODE: 3 },
  setup(t, { attrs: e, slots: s }) {
    const i = Ot(Nr), n = de(() => t.route || i.value), a = Ot(ou, 0), o = de(() => {
      let c = te(a);
      const { matched: u } = n.value;
      let d;
      for (; (d = u[c]) && !d.components; ) c++;
      return c;
    }), r = de(() => n.value.matched[o.value]);
    Ra(ou, de(() => o.value + 1)), Ra(dy, r), Ra(Nr, n);
    const l = /* @__PURE__ */ oe();
    return Di(() => [
      l.value,
      r.value,
      t.name
    ], ([c, u, d], [f, h, m]) => {
      u && (u.instances[d] = c, h && h !== u && c && c === f && (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards), u.updateGuards.size || (u.updateGuards = h.updateGuards))), c && u && (!h || !Li(u, h) || !f) && (u.enterCallbacks[d] || []).forEach((g) => g(c));
    }, { flush: "post" }), () => {
      const c = n.value, u = t.name, d = r.value, f = d && d.components[u];
      if (!f) return mu(s.default, {
        Component: f,
        route: c
      });
      const h = d.props[u], m = h ? h === !0 ? c.params : typeof h == "function" ? h(c) : h : null, v = ss(f, Ve({}, m, e, {
        onVnodeUnmounted: (T) => {
          T.component.isUnmounted && (d.instances[u] = null);
        },
        ref: l
      }));
      return mu(s.default, {
        Component: v,
        route: c
      }) || v;
    };
  }
});
function mu(t, e) {
  if (!t) return null;
  const s = t(e);
  return s.length === 1 ? s[0] : s;
}
const Oy = Ey;
function Ny(t) {
  const e = Ty(t.routes, t), s = t.parseQuery || cy, i = t.stringifyQuery || au, n = t.history, a = Yi(), o = Yi(), r = Yi(), l = /* @__PURE__ */ jm(Os);
  let c = Os;
  ki && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = Qo.bind(null, (D) => "" + D), d = Qo.bind(null, qb), f = Qo.bind(null, Dn);
  function h(D, K) {
    let B, Z;
    return lh(D) ? (B = e.getRecordMatcher(D), Z = K) : Z = D, e.addRoute(Z, B);
  }
  function m(D) {
    const K = e.getRecordMatcher(D);
    K && e.removeRoute(K);
  }
  function g() {
    return e.getRoutes().map((D) => D.record);
  }
  function v(D) {
    return !!e.getRecordMatcher(D);
  }
  function T(D, K) {
    if (K = Ve({}, K || l.value), typeof D == "string") {
      const A = Zo(s, D, K.path), N = e.resolve({ path: A.path }, K), L = n.createHref(A.fullPath);
      return Ve(A, N, {
        params: f(N.params),
        hash: Dn(A.hash),
        redirectedFrom: void 0,
        href: L
      });
    }
    let B;
    if (D.path != null)
      B = Ve({}, D, { path: Zo(s, D.path, K.path).path });
    else {
      const A = Ve({}, D.params);
      for (const N in A) A[N] == null && delete A[N];
      B = Ve({}, D, { params: d(A) }), K.params = d(K.params);
    }
    const Z = e.resolve(B, K), ye = D.hash || "";
    Z.params = u(f(Z.params));
    const y = $b(i, Ve({}, D, {
      hash: jb(ye),
      path: Z.path
    })), k = n.createHref(y);
    return Ve({
      fullPath: y,
      hash: ye,
      query: i === au ? uy(D.query) : D.query || {}
    }, Z, {
      redirectedFrom: void 0,
      href: k
    });
  }
  function x(D) {
    return typeof D == "string" ? Zo(s, D, l.value.path) : Ve({}, D);
  }
  function C(D, K) {
    if (c !== D) return Ui(it.NAVIGATION_CANCELLED, {
      from: K,
      to: D
    });
  }
  function P(D) {
    return O(D);
  }
  function M(D) {
    return P(Ve(x(D), { replace: !0 }));
  }
  function w(D, K) {
    const B = D.matched[D.matched.length - 1];
    if (B && B.redirect) {
      const { redirect: Z } = B;
      let ye = typeof Z == "function" ? Z(D, K) : Z;
      return typeof ye == "string" && (ye = ye.includes("?") || ye.includes("#") ? ye = x(ye) : { path: ye }, ye.params = {}), Ve({
        query: D.query,
        hash: D.hash,
        params: ye.path != null ? {} : D.params
      }, ye);
    }
  }
  function O(D, K) {
    const B = c = T(D), Z = l.value, ye = D.state, y = D.force, k = D.replace === !0, A = w(B, Z);
    if (A) return O(Ve(x(A), {
      state: typeof A == "object" ? Ve({}, ye, A.state) : ye,
      force: y,
      replace: k
    }), K || B);
    const N = B;
    N.redirectedFrom = K;
    let L;
    return !y && Jb(i, Z, B) && (L = Ui(it.NAVIGATION_DUPLICATED, {
      to: N,
      from: Z
    }), ke(Z, Z, !0, !1)), (L ? Promise.resolve(L) : Q(N, Z)).catch((E) => fs(E) ? fs(E, it.NAVIGATION_GUARD_REDIRECT) ? E : Re(E) : q(E, N, Z)).then((E) => {
      if (E) {
        if (fs(E, it.NAVIGATION_GUARD_REDIRECT))
          return O(Ve({ replace: k }, x(E.to), {
            state: typeof E.to == "object" ? Ve({}, ye, E.to.state) : ye,
            force: y
          }), K || N);
      } else E = ce(N, Z, !0, k, ye);
      return ie(N, Z, E), E;
    });
  }
  function W(D, K) {
    const B = C(D, K);
    return B ? Promise.reject(B) : Promise.resolve();
  }
  function J(D) {
    const K = He.values().next().value;
    return K && typeof K.runWithContext == "function" ? K.runWithContext(D) : D();
  }
  function Q(D, K) {
    let B;
    const [Z, ye, y] = fy(D, K);
    B = tr(Z.reverse(), "beforeRouteLeave", D, K);
    for (const A of Z) A.leaveGuards.forEach((N) => {
      B.push(Ls(N, D, K));
    });
    const k = W.bind(null, D, K);
    return B.push(k), Xe(B).then(() => {
      B = [];
      for (const A of a.list()) B.push(Ls(A, D, K));
      return B.push(k), Xe(B);
    }).then(() => {
      B = tr(ye, "beforeRouteUpdate", D, K);
      for (const A of ye) A.updateGuards.forEach((N) => {
        B.push(Ls(N, D, K));
      });
      return B.push(k), Xe(B);
    }).then(() => {
      B = [];
      for (const A of y) if (A.beforeEnter) if (Jt(A.beforeEnter)) for (const N of A.beforeEnter) B.push(Ls(N, D, K));
      else B.push(Ls(A.beforeEnter, D, K));
      return B.push(k), Xe(B);
    }).then(() => (D.matched.forEach((A) => A.enterCallbacks = {}), B = tr(y, "beforeRouteEnter", D, K, J), B.push(k), Xe(B))).then(() => {
      B = [];
      for (const A of o.list()) B.push(Ls(A, D, K));
      return B.push(k), Xe(B);
    }).catch((A) => fs(A, it.NAVIGATION_CANCELLED) ? A : Promise.reject(A));
  }
  function ie(D, K, B) {
    r.list().forEach((Z) => J(() => Z(D, K, B)));
  }
  function ce(D, K, B, Z, ye) {
    const y = C(D, K);
    if (y) return y;
    const k = K === Os, A = ki ? history.state : {};
    B && (Z || k ? n.replace(D.fullPath, Ve({ scroll: k && A && A.scroll }, ye)) : n.push(D.fullPath, ye)), l.value = D, ke(D, K, B, k), Re();
  }
  let xe;
  function Ge() {
    xe || (xe = n.listen((D, K, B) => {
      if (!rt.listening) return;
      const Z = T(D), ye = w(Z, rt.currentRoute.value);
      if (ye) {
        O(Ve(ye, {
          replace: !0,
          force: !0
        }), Z).catch(yn);
        return;
      }
      c = Z;
      const y = l.value;
      ki && ny(nu(y.fullPath, B.delta), sy()), Q(Z, y).catch((k) => fs(k, it.NAVIGATION_ABORTED | it.NAVIGATION_CANCELLED) ? k : fs(k, it.NAVIGATION_GUARD_REDIRECT) ? (O(Ve(x(k.to), { force: !0 }), Z).then((A) => {
        fs(A, it.NAVIGATION_ABORTED | it.NAVIGATION_DUPLICATED) && !B.delta && B.type === Er.pop && n.go(-1, !1);
      }).catch(yn), Promise.reject()) : (B.delta && n.go(-B.delta, !1), q(k, Z, y))).then((k) => {
        k = k || ce(Z, y, !1), k && (B.delta && !fs(k, it.NAVIGATION_CANCELLED) ? n.go(-B.delta, !1) : B.type === Er.pop && fs(k, it.NAVIGATION_ABORTED | it.NAVIGATION_DUPLICATED) && n.go(-1, !1)), ie(Z, y, k);
      }).catch(yn);
    }));
  }
  let ge = Yi(), re = Yi(), H;
  function q(D, K, B) {
    Re(D);
    const Z = re.list();
    return Z.length ? Z.forEach((ye) => ye(D, K, B)) : console.error(D), Promise.reject(D);
  }
  function le() {
    return H && l.value !== Os ? Promise.resolve() : new Promise((D, K) => {
      ge.add([D, K]);
    });
  }
  function Re(D) {
    return H || (H = !D, Ge(), ge.list().forEach(([K, B]) => D ? B(D) : K()), ge.reset()), D;
  }
  function ke(D, K, B, Z) {
    const { scrollBehavior: ye } = t;
    if (!ki || !ye) return Promise.resolve();
    const y = !B && ay(nu(D.fullPath, 0)) || (Z || !B) && history.state && history.state.scroll || null;
    return xi().then(() => ye(D, K, y)).then((k) => k && iy(k)).catch((k) => q(k, D, K));
  }
  const Ue = (D) => n.go(D);
  let Fe;
  const He = /* @__PURE__ */ new Set(), rt = {
    currentRoute: l,
    listening: !0,
    addRoute: h,
    removeRoute: m,
    clearRoutes: e.clearRoutes,
    hasRoute: v,
    getRoutes: g,
    resolve: T,
    options: t,
    push: P,
    replace: M,
    go: Ue,
    back: () => Ue(-1),
    forward: () => Ue(1),
    beforeEach: a.add,
    beforeResolve: o.add,
    afterEach: r.add,
    onError: re.add,
    isReady: le,
    install(D) {
      D.component("RouterLink", My), D.component("RouterView", Oy), D.config.globalProperties.$router = rt, Object.defineProperty(D.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => te(l)
      }), ki && !Fe && l.value === Os && (Fe = !0, P(n.location).catch((Z) => {
      }));
      const K = {};
      for (const Z in Os) Object.defineProperty(K, Z, {
        get: () => l.value[Z],
        enumerable: !0
      });
      D.provide(_o, rt), D.provide(kl, /* @__PURE__ */ mf(K)), D.provide(Nr, l);
      const B = D.unmount;
      He.add(D), D.unmount = function() {
        He.delete(D), He.size < 1 && (c = Os, xe && xe(), xe = null, l.value = Os, Fe = !1, H = !1), B();
      };
    }
  };
  function Xe(D) {
    return D.reduce((K, B) => K.then(() => J(B)), Promise.resolve());
  }
  return rt;
}
function Ly() {
  return Ot(_o);
}
function Uy(t) {
  return Ot(kl);
}
let Us = [], Ya = null, Lr = !1;
const Ur = (t) => String(t || "").replace(/\/+$/, ""), fh = (t) => {
  try {
    const e = new URL(t);
    return `${e.protocol === "https:" ? "wss:" : "ws:"}//${e.host}`;
  } catch {
    return `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${window.location.host}`;
  }
}, gu = (t) => {
  Us = t.map((e) => Ur(e)).filter((e) => e), Us.length === 0 && (Us = [Ur(window.location.origin)]), Ya = fh(Us[0]), window.__APP_API_BASES__ = Us, window.__APP_WS_BASE__ = Ya;
}, Fy = async () => {
  var e;
  Lr = !1, gu([window.location.origin]);
  const t = (e = document.querySelector('meta[name="apiBase"]')) == null ? void 0 : e.content;
  if (t) {
    const s = t.split(",").map((i) => i.trim()).filter(Boolean);
    s.length > 0 && (Lr = !0, gu(s));
  }
  return Us;
}, It = () => {
  var t;
  return Us.length > 0 ? Us : ((t = window.__APP_API_BASES__) == null ? void 0 : t.length) > 0 ? window.__APP_API_BASES__ : [Ur(window.location.origin)];
}, Wy = () => Ya || (window.__APP_WS_BASE__ ? window.__APP_WS_BASE__ : fh(It()[0])), By = () => Lr, hh = (t) => {
  const e = String(t || "").replace(/^\/+/, "");
  return e ? `./${e}` : "./";
}, Hy = 1440, Ti = {
  ONLINE_THRESHOLD_MS: 3e5,
  RECONNECT_INITIAL_DELAY_MS: 1e3,
  RECONNECT_MAX_DELAY_MS: 3e4,
  MAX_RECONNECT_ATTEMPTS: 10
}, yi = {
  MAX_DATA_POINTS: 500,
  ANIMATION_DURATION: 300,
  MAX_TICKS: 8,
  MAX_TICKS_HOUR: 12
}, bu = {
  LONG_RANGE_POINT_OPTIONS: [60, 120, 180, 240],
  DEFAULT_LONG_RANGE_POINTS: 120
}, xs = {
  THEME_PREFERENCE: "theme_preference",
  LANGUAGE_PREFERENCE: "language_preference",
  VIEW_PREFERENCE: "monitor_preferred_view",
  JWT_TOKEN: "jwt_token",
  TURNSTILE_TOKEN: "turnstile_token",
  TURNSTILE_VERIFIED: "turnstile_verified"
}, sr = {
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  500: "Internal Server Error"
}, Fr = xs.TURNSTILE_VERIFIED, ph = 15e3, jy = () => "/admin", zy = () => {
  if (typeof window > "u") return;
  const t = jy();
  if (window.location.pathname === t || window.location.pathname.startsWith(`${t}/`)) {
    window.location.reload();
    return;
  }
  window.location.assign(t);
}, mh = (t = !0, e = !0, s = null, i = {}) => {
  const {
    includeTurnstileToken: n = e,
    includeTurnstileVerified: a = !0
  } = i, o = {
    "Content-Type": "application/json"
  };
  if (t) {
    const r = localStorage.getItem(xs.JWT_TOKEN);
    r && (o.Authorization = "Bearer " + r);
  }
  if (e && n) {
    const r = localStorage.getItem(xs.TURNSTILE_TOKEN);
    r && (o["X-Turnstile-Token"] = r);
  }
  if (a) {
    const r = localStorage.getItem(Fr);
    r && (o["X-Turnstile-Verified"] = r);
  }
  return o;
}, gh = async (t, e = {}) => {
  const { autoRedirect: s = !0, baseUrl: i = null } = e;
  if (t.status === 401)
    return localStorage.removeItem(xs.JWT_TOKEN), s && zy(), { error: sr[401], status: 401 };
  if (t.status === 403)
    return localStorage.removeItem(xs.TURNSTILE_TOKEN), localStorage.removeItem(Fr), s && window.location.reload(), { error: sr[403], status: 403 };
  if (!t.ok) {
    let n = sr[t.status] || "Request failed", a = t.status, o = null;
    try {
      const r = await t.json();
      r.message && (o = r.message), r.error && (n = r.error), r.code && (a = r.code, !r.error && typeof r.code == "string" && (n = r.code));
    } catch {
    }
    return { error: n, code: a, status: t.status, message: o };
  }
  try {
    const n = await t.json();
    return n && n.turnstile_verified && (localStorage.setItem(Fr, n.turnstile_verified), localStorage.removeItem(xs.TURNSTILE_TOKEN)), { data: n, status: t.status };
  } catch {
    return { data: null, status: t.status };
  }
}, bh = async (t, e, s = null) => {
  if (!s)
    return fetch(t, e);
  const i = new AbortController(), n = setTimeout(() => i.abort(), s);
  try {
    return await fetch(t, { ...e, signal: i.signal });
  } finally {
    clearTimeout(n);
  }
}, ua = async (t, e, s, i = {}) => {
  const { includeAuth: n = !0, includeTurnstile: a = !0, autoRedirect: o = !0, baseUrl: r = null, timeoutMs: l = null } = i, c = mh(n, a, r, i), u = r || It()[0];
  try {
    const d = await bh(`${u}${e}`, {
      method: t,
      headers: c,
      body: s != null ? JSON.stringify(s) : void 0,
      credentials: "include"
    }, l);
    return { ...await gh(d, { autoRedirect: o, baseUrl: u }), baseUrl: u };
  } catch (d) {
    return d.name === "AbortError" ? { error: "timeout", status: 0, baseUrl: u, timeout: !0 } : { error: d.message || "Network error", status: 0, baseUrl: u };
  }
}, ir = async (t, e, s, i = "GET", n = null) => {
  const { includeAuth: a = !0, includeTurnstile: o = !0, autoRedirect: r = !0, timeoutMs: l = null } = s, c = mh(a, o, t, s);
  try {
    const u = await bh(`${t}${e}`, {
      method: i,
      headers: c,
      body: n,
      credentials: "include"
    }, l);
    return { ...await gh(u, { autoRedirect: r, baseUrl: t }), baseUrl: t };
  } catch (u) {
    if (u.name === "AbortError")
      return { error: "timeout", status: 0, baseUrl: t, timeout: !0 };
    throw u;
  }
}, Xa = {
  get(t, e = {}) {
    return ua("GET", t, null, e);
  },
  post(t, e = {}, s = {}) {
    return ua("POST", t, e, s);
  },
  put(t, e = {}, s = {}) {
    return ua("PUT", t, e, s);
  },
  delete(t, e = {}) {
    return ua("DELETE", t, null, e);
  },
  async getAll(t, e = {}) {
    const s = It();
    if (s.length === 0)
      return [{ ...await this.get(t, e), baseUrl: It()[0] }];
    const i = s.map(
      (a) => ir(a, t, e, "GET", null)
    );
    return (await Promise.allSettled(i)).map((a, o) => {
      var r;
      return a.status === "fulfilled" ? a.value : { error: ((r = a.reason) == null ? void 0 : r.message) || "Request failed", status: 0, baseUrl: s[o] };
    });
  },
  async getAllWithProgress(t, e, s = {}) {
    const i = It();
    if (i.length === 0) {
      const a = await this.get(t, s);
      e({ ...a, baseUrl: It()[0] });
      return;
    }
    const n = i.map(
      (a) => ir(a, t, s, "GET", null).then((o) => {
        e({ ...o, baseUrl: a });
      }).catch((o) => {
        const r = /failed to fetch|networkerror|cors/i.test(o.message);
        e({ error: o.message, status: 0, baseUrl: a, corsError: r });
      })
    );
    await Promise.allSettled(n);
  },
  async postAll(t, e = {}, s = {}) {
    const i = It();
    if (i.length === 0)
      return [{ ...await this.post(t, e, s), baseUrl: It()[0] }];
    const n = i.map(
      (o) => ir(o, t, s, "POST", JSON.stringify(e))
    );
    return (await Promise.allSettled(n)).map((o) => {
      var r;
      return o.status === "fulfilled" ? o.value : { error: ((r = o.reason) == null ? void 0 : r.message) || "Request failed", status: 0, baseUrl: "" };
    });
  },
  getByIndex(t, e = 0, s = {}) {
    const i = It(), n = i.length > 0 && i[e] !== void 0 ? i[e] : It()[0];
    return this.get(t, { ...s, baseUrl: n });
  },
  postByIndex(t, e = {}, s = 0, i = {}) {
    const n = It(), a = n.length > 0 && n[s] !== void 0 ? n[s] : It()[0];
    return this.post(t, e, { ...i, baseUrl: a });
  }
}, Vy = () => !!localStorage.getItem(xs.JWT_TOKEN), Ai = (t, e = null) => {
  const s = Number(t);
  if (Number.isFinite(s) && s > 0)
    return s < 1e10 ? s * 1e3 : s;
  const i = new Date(t).getTime();
  return Number.isFinite(i) && i > 0 ? i : e;
}, qy = (t) => {
  if (!t) return "-";
  const e = new Date(t), s = (i) => String(i).padStart(2, "0");
  return `${e.getFullYear()}-${s(e.getMonth() + 1)}-${s(e.getDate())} ${s(e.getHours())}:${s(e.getMinutes())}:${s(e.getSeconds())}`;
}, Wr = /* @__PURE__ */ oe(""), yh = /* @__PURE__ */ oe(""), vh = (t) => {
  const e = Number(t);
  return Number.isInteger(e) && e >= 0 && e <= Hy ? e : 0;
}, Gy = (t, e = {}, s = 0, i = []) => {
  const { onUpdate: n, onStatus: a, onMessage: o, onTimeout: r } = e, c = vh(e.timeoutMinutes) * 60 * 1e3, u = e.replay !== !1, d = (t || "all").toLowerCase();
  let f = null, h = !1, m = null, g = Ti.RECONNECT_INITIAL_DELAY_MS, v = 0, T = null;
  const x = 12e4;
  let C = !1;
  const P = /* @__PURE__ */ new Set(), M = (H) => {
    const q = It();
    if (q.length > 0 && q[H])
      try {
        const le = new URL(q[H]);
        return `${le.protocol === "https:" ? "wss:" : "ws:"}//${le.host}`;
      } catch {
        return `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${window.location.host}`;
      }
    return Wy();
  }, w = () => {
    try {
      return localStorage.getItem(xs.JWT_TOKEN) || "";
    } catch {
      return "";
    }
  }, O = (H) => typeof window > "u" || !window.location ? !1 : H.host === window.location.host, W = (H, q) => {
    C = H, typeof a == "function" && a({ connected: H, reason: q || "" });
  }, J = () => {
    P.forEach((H) => clearTimeout(H)), P.clear();
  }, Q = () => {
    T && (clearTimeout(T), T = null);
  }, ie = (H, q = Date.now()) => Ai(H, q), ce = ({ serverId: H, data: q, ts: le }) => {
    if (H && q && typeof n == "function") {
      const Re = Date.now(), ke = ie(q.sample_timestamp || q.last_updated || q.timestamp || le, Re);
      n({
        serverId: H,
        data: {
          ...q,
          sample_timestamp: ke,
          last_updated: Re,
          timestamp: Re
        }
      });
    }
  }, xe = (H) => {
    const q = [], le = Array.isArray(H.updates) ? H.updates : [];
    for (const Re of le) {
      if (!Re || !Re.serverId) continue;
      const ke = [], Ue = Array.isArray(Re.samples) ? Re.samples : [];
      for (const Fe of Ue) {
        if (!Fe || typeof Fe != "object") continue;
        const He = Fe.data || Fe.payload || Fe.metrics;
        He && ke.push({
          serverId: Re.serverId,
          ts: ie(Fe.ts || Fe.timestamp || He.last_updated || H.ts),
          data: He
        });
      }
      ke.sort((Fe, He) => Fe.ts - He.ts), ke.length > 0 && q.push(ke);
    }
    return q;
  }, Ge = (H) => {
    const q = xe(H);
    if (q.length !== 0)
      for (const le of q) {
        const Re = le[0].ts;
        for (const ke of le) {
          const Ue = Math.max(0, Math.min(ke.ts - Re, x)), Fe = setTimeout(() => {
            P.delete(Fe), ce(ke);
          }, Ue);
          P.add(Fe);
        }
      }
  }, ge = () => {
    h = !1;
    let H = null;
    try {
      const q = new URL(`${M(s)}/api/ws`);
      q.searchParams.set("subscribe", d);
      const le = w();
      le && !O(q) && q.searchParams.set("token", le), H = new WebSocket(q.toString()), f = H;
    } catch {
      W(!1, "WebSocket not supported");
      return;
    }
    H.addEventListener("open", () => {
      if (H !== f || h) {
        try {
          H.close();
        } catch {
        }
        return;
      }
      g = Ti.RECONNECT_INITIAL_DELAY_MS, v = 0;
      try {
        H.send(JSON.stringify({
          type: "subscribe",
          scope: d,
          ids: Array.isArray(i) ? i : []
        }));
      } catch {
      }
      W(!0, "connected"), Q(), c !== 0 && (T = setTimeout(() => {
        if (H === f) {
          T = null, h = !0, J();
          try {
            H.close(1e3, "connection lifetime exceeded");
          } catch {
          }
          typeof r == "function" && r({ durationMs: c });
        }
      }, c));
    }), H.addEventListener("message", (q) => {
      if (H !== f) return;
      let le = null;
      try {
        le = typeof q.data == "string" ? JSON.parse(q.data) : null;
      } catch {
        return;
      }
      le && (u && le.type === "batchUpdate" && Ge(le), typeof o == "function" && o(le));
    }), H.addEventListener("close", (q) => {
      H === f && (f = null, Q(), W(!1, q.reason || "disconnected"), re());
    }), H.addEventListener("error", () => {
      if (H === f) {
        W(!1, "error");
        try {
          H.close();
        } catch {
        }
      }
    });
  }, re = () => {
    if (!h && !m) {
      if (v >= Ti.MAX_RECONNECT_ATTEMPTS) {
        W(!1, "max reconnect attempts reached");
        return;
      }
      m = setTimeout(() => {
        m = null, v++;
        const H = g;
        g = Math.min(g * 2, Ti.RECONNECT_MAX_DELAY_MS), setTimeout(ge, H);
      }, 50);
    }
  };
  return ge(), {
    close() {
      if (h = !0, v = Ti.MAX_RECONNECT_ATTEMPTS, J(), Q(), m && (clearTimeout(m), m = null), f) {
        try {
          f.close();
        } catch {
        }
        f = null;
      }
      W(!1, "disconnected");
    },
    reconnect() {
      if (h = !1, v = 0, J(), Q(), m && (clearTimeout(m), m = null), f) {
        try {
          f.close();
        } catch {
        }
        f = null;
      }
      W(!1, "reconnecting"), ge();
    },
    get isConnected() {
      return C;
    }
  };
}, Ky = (t) => {
  const e = (t || "").toUpperCase();
  return e === "TW" ? "cn" : e.toLowerCase();
}, $y = (t) => {
  if (t = parseFloat(t) || 0, t === 0) return "0 B";
  const e = 1024, s = ["B", "KB", "MB", "GB", "TB"], i = Math.floor(Math.log(t) / Math.log(e)), n = Math.max(0, Math.min(i, s.length - 1));
  return parseFloat((t / Math.pow(e, n)).toFixed(1)) + " " + s[n];
}, Jy = (t, e = Date.now()) => {
  const s = Ai((t == null ? void 0 : t.report_timestamp) ?? (t == null ? void 0 : t.last_updated));
  return s && e - s < Ti.ONLINE_THRESHOLD_MS;
}, Yy = async (t, e, s = 0) => {
  const i = await Xa.getByIndex(`/api/history/all?id=${t}&hours=${e}`, s, { autoRedirect: !1 });
  if (i.error) {
    const n = new Error(i.error);
    throw n.code = i.code, n.status = i.status, n.message = i.message || i.error, n;
  }
  return Array.isArray(i.data) ? i.data : [];
}, Pi = "auto", Fi = "en", Tl = Object.freeze([
  Object.freeze({
    code: "zh",
    nativeLabel: "简体中文",
    browserAliases: Object.freeze(["zh", "cmn", "yue", "wuu"])
  }),
  Object.freeze({
    code: "zh-TW",
    nativeLabel: "繁體中文",
    browserAliases: Object.freeze(["zh-tw", "zh-hk", "zh-mo", "zh-hant"])
  }),
  Object.freeze({
    code: "en",
    nativeLabel: "English",
    browserAliases: Object.freeze(["en"])
  }),
  Object.freeze({
    code: "ja",
    nativeLabel: "日本語",
    browserAliases: Object.freeze(["ja"])
  }),
  Object.freeze({
    code: "id",
    nativeLabel: "Indonesia",
    browserAliases: Object.freeze(["id", "in"])
  }),
  Object.freeze({
    code: "fr",
    nativeLabel: "Français",
    browserAliases: Object.freeze(["fr"])
  }),
  Object.freeze({
    code: "es",
    nativeLabel: "Español",
    browserAliases: Object.freeze(["es"])
  })
]), Xy = Object.freeze(Tl.map((t) => t.code));
Object.freeze(Tl.reduce((t, e) => (t[e.code] = e, t), {}));
const nr = Object.freeze(Xy.reduce((t, e) => (t[e.toLowerCase()] = e, t), {})), _h = (t, e = Pi) => {
  const s = String(t || "").trim().toLowerCase();
  return s === Pi ? Pi : nr[s] ? nr[s] : nr[String(e || "").trim().toLowerCase()] || Pi;
}, Qy = Object.freeze(["zh", "zh-TW", "en", "ja", "id", "fr", "es"]);
Object.freeze(Qy.reduce((t, e) => (t[e.toLowerCase()] = e, t), {}));
const Sh = {
  passkeyRateLimited: "Too many attempts. Please wait and try again.",
  passkeyBrowserPrompt: "Waiting for browser interaction…",
  passkeyPreparing: "Preparing passkey…",
  passkeyVerifying: "Verifying passkey…",
  passkeyPasswordInvalid: "Incorrect administrator password.",
  passkeyOptionsFailed: "Could not start registration. Check your connection and login.",
  passkeyVerifyFailed: "The browser returned a credential, but server verification failed. Try again.",
  passkeyAlreadyRegistered: "This security key is already registered for this site.",
  passkeyUserVerificationRequired: "The security key must support user verification. Set its FIDO2 PIN and try again.",
  passkeyDeviceFailed: "Verification did not complete: it may have been cancelled, timed out, or the key did not meet the requirements. Check the connection and PIN.",
  passkeyLogin: "Sign in with a passkey",
  passkeyTitle: "Passkeys",
  passkeyDescription: "Use a security key, iCloud Keychain or Windows Hello. Add a backup key to avoid losing access.",
  passkeySameOrigin: "Passkeys require a supported browser and a secure connection to this Worker’s own domain.",
  passkeyEmpty: "No passkeys added yet.",
  passkeyName: "Name",
  passkeyNamePlaceholder: "For example: YubiKey or iPhone",
  passkeyPassword: "Current administrator password",
  passkeyPasswordHint: "Enter your password to add or remove a passkey.",
  passkeyPasswordRequired: "Enter your current administrator password first.",
  passkeyAdd: "Add passkey",
  passkeyDelete: "Remove",
  passkeyDeleteConfirm: "Remove this passkey?",
  passkeyAdded: "Passkey added.",
  passkeyDeleted: "Passkey removed.",
  passkeyFailed: "Passkey operation failed or was cancelled. Check your password and try again.",
  theme: "Theme",
  themeAuto: "Follow System",
  themeDark: "Dark",
  themeLight: "Light",
  language: "Lang",
  languageAuto: "Auto",
  barChart: "BAR CHART",
  ringChart: "RING CHART",
  expandChart: "Expand chart",
  collapseChart: "Collapse chart",
  table: "TABLE",
  map: "MAP",
  admin: "Admin",
  all: "All",
  totalServers: "Total Servers",
  totalTraffic: "Total Traffic",
  realtimeSpeed: "Real-time Speed",
  remainingValue: "Remaining Value",
  totalValue: "Total Value",
  monthlyAverageCost: "Monthly Avg",
  configuredPrices: "Priced",
  todayExchangeRates: "Today Rates",
  exchangeRateBase: "Base",
  exchangeRateSource: "Rate Source",
  financeMissingExpire: "No Expiry",
  financeRateNetwork: "live API",
  financeRateCache: "today cache",
  financeRateStaleCache: "cached fallback",
  financeRateDefault: "built-in fallback",
  realtime: "Real-time",
  liveConnectionTimeoutTitle: "Real-time connection ended",
  liveConnectionTimeoutMessage: "The real-time connection reached its time limit and was closed. Continue receiving live updates?",
  continueConnection: "Continue",
  online: "Online",
  offline: "Offline",
  noServer: "No servers available, please add in",
  noServerSuffix: "",
  backToAdmin: "Admin Panel",
  back: "cd ..",
  hostname: "HOSTNAME",
  region: "REGION CODE",
  regionPlaceholder: "Leave blank for auto-detect",
  osArch: "OS/ARCH",
  ram: "RAM",
  disk: "DISK",
  use: "USE",
  dl: "DL",
  ul: "UL",
  rx: "RX",
  tx: "TX",
  update: "UPDATE",
  noData: "No data available",
  ago: "ago",
  uptime: "Uptime",
  architecture: "Architecture",
  os: "OS",
  kernelVersion: "Kernel",
  cpuModel: "CPU Model",
  cpuInfo: "CPU Info",
  loadAvg: "Load Average",
  bootTime: "Boot Time",
  totalDiskRam: "Total Disk / RAM",
  trafficIn: "Traffic In",
  trafficOut: "Traffic Out",
  traffic: "TRAFFIC",
  lastReport: "Last Report",
  cpuUsage: "CPU Usage",
  gpuInfo: "GPU Info",
  gpuUsage: "GPU Usage",
  gpuMemory: "GPU Memory",
  gpuClock: "GPU SM Clock",
  gpuPower: "GPU Power",
  memoryUsage: "Memory Usage",
  diskUsage: "Disk Usage",
  diskIo: "Disk IO",
  networkTraffic: "Network",
  processes: "Processes",
  connections: "Connections",
  latencyMonitor: "Latency Monitor",
  packetLoss: "Packet Loss",
  databaseUpgradeRequired: "Please go to Admin Panel and click Upgrade Database",
  swap: "Swap",
  used: "Used",
  lastUpdate: "Last update",
  workersUpdateAvailable: "New version",
  autoRefresh: "Auto-refresh",
  seconds: "s",
  timeout: "TIMEOUT",
  loadAvgMonitor: "Load Average Monitor",
  load1m: "1 Min",
  load5m: "5 Min",
  load15m: "15 Min",
  apiEndpoint: "API Endpoint",
  switchingSite: "Switching site...",
  username: "Username",
  password: "Password",
  login: "Login",
  missingCredentials: "Please enter username and password",
  invalidCredentials: "Invalid username or password",
  adminPanel: "Admin Panel",
  sudoStatus: "sudo systemctl status",
  refresh: "REFRESH",
  logout: "Logout",
  dashboard: "DASHBOARD",
  total: "Total",
  avgCpu: "Avg CPU",
  servers: "Servers",
  settings: "Settings",
  clickToCopy: "Click",
  installCommand: "Copy install command to deploy agent on target server",
  collectIntervalHint: "When the collect interval is 0, sampling follows the report interval.",
  serverName: "Server name",
  group: "Group",
  tags: "Tags",
  note: "Note",
  tagsPlaceholder: "Separated by comma",
  notePlaceholder: "Internal note, only shown in Admin",
  addServer: "ADD SERVER",
  batchDelete: "BATCH DELETE",
  toggleAll: "TOGGLE ALL",
  refreshCache: "REFRESH CACHE",
  cacheCleared: "Server list cache cleared",
  price: "PRICE",
  free: "Free",
  currency: "Currency",
  billingCycle: "Billing Cycle",
  autoRenewal: "Auto Renewal",
  expire: "Remaining Time",
  expireDays: "d",
  day: "day",
  days: "days",
  month: "month",
  expired: "EXPIRED",
  agentVersion: "AGENT VERSION",
  status: "STATUS",
  actions: "ACTIONS",
  noServers: "No servers configured",
  dragSort: "Drag to reorder",
  copy: "Copy",
  edit: "Edit",
  delete: "Delete",
  custom: "Custom",
  siteTitle: "Site Title",
  appearance: "Appearance",
  bgImage: "Background Image",
  mobileBgImage: "Mobile Background Image",
  remoteImageTip: "For remote images, add the image origin to the CSP Static Domains whitelist.",
  favicon: "Favicon",
  upload: "UPLOAD",
  customHead: "Custom <head>",
  customScript: "Custom Script (footer)",
  themeOptions: "Theme Options JSON",
  mikusThemeToggle: "Enable Mikus mode",
  themeOptionsTip: 'Third-party theme custom options. Must be a JSON object, for example {"mikus":1} enables the Mikus frontend layer.',
  cspStatic: "CSP Static Domains Whitelist",
  cspStaticTip: "Allowed static file domains, e.g. https://unpkg.com,https://cdn.jsdelivr.net",
  cspApi: "CSP API Domains Whitelist",
  cspApiTip: "Allowed API domains, e.g. https://api.example.com",
  cspWarning: "When adding third-party CSS/JS, ensure the source is trustworthy. Before using, it is recommended to send the JS source code to AI to analyze security. Once confirmed, host the resources on your own GitHub repository and use CDN to call. It is recommended to host resources on your own GitHub repository and use CDN to call. Incorrect usage may bring serious security risks. External resources need to be added to the CSP Static Domains whitelist above.",
  cspInvalidDomain: "Invalid CSP domain format. Use https:// origins only, without paths or query strings.",
  displayMode: "Default Display Mode",
  displayModeBar: "Bar Chart",
  displayModeRing: "Ring Chart",
  displayModeTable: "Table",
  defaultTheme: "Default Appearance",
  defaultLanguage: "Default Language",
  displayOptions: "Display Options",
  autoDiscovery: "Auto Discovery",
  autoDiscoveryTip: "When enabled, an agent that reports without a server ID will be created automatically. New servers may take up to 2 minutes to appear on the dashboard. See the README for details.",
  autoAdd: "AUTO ADD",
  autoAddDisabledTip: "Auto discovery is off. Enable it in Settings → Site Settings → Auto Discovery.",
  autoAddNamePlaceholder: "Leave blank to use the public IP",
  wssReportEnabled: "Agent WSS Reporting",
  customUserAgent: "Custom User-Agent",
  customUserAgentTip: "User-Agent used by agent report requests and allowed by the Cloudflare domain security rule. Requires agent v1.1.1 or later.",
  customUserAgentDocs: "See README",
  customUserAgentInvalid: "Only letters, digits, spaces and . _ - / , : ; ( ) + = @ # * ? ~ are allowed, max 100 characters",
  appPassword: "App Access Password",
  appPasswordTip: "Third-party apps and iOS widgets can send this password in the X-App-Password header to view private sites and hidden servers. Leave blank to disable.",
  appPasswordPlaceholder: "16-32 characters, blank to disable",
  appPasswordInvalid: "Must be 16-32 ASCII characters (letters, digits or symbols) without spaces",
  wssReportTip: "Enabling WSS reduces Workers requests and increases real-time performance, but enabling it 24 hours a day can use 85% of Durable Objects duration regardless of server count. Recommended to enable when no other projects are using Durable Objects.",
  wssReportHours: "Active Hours",
  wssReportHoursTip: "The panel shows local hours. Settings are saved as UTC hours, and agents use HTTP reporting outside the selected hours.",
  localTime: "Local time",
  hoursSelected: "hours selected",
  agentWssMinVersion: "Agent v1.0.10+ required",
  selectAll: "Select all",
  clear: "Clear",
  frontendWsTimeoutMinutes: "Frontend WSS Timeout (minutes)",
  frontendWsTimeoutMinutesTip: "Close the real-time frontend connection after this many minutes. 0 disables the timeout.",
  invalidFrontendWsTimeoutMinutes: "Frontend WSS timeout must be an integer from 0 to 1440 minutes.",
  publicAccess: "Public Access",
  showPrice: "Show Price",
  showExpire: "Show Expiration",
  showTf: "Show Traffic Quota",
  showThreeNetDetails: "Show Node Details on Home",
  longHistoryPoints: "Long-range History Points",
  longHistoryPointsTip: "Number of samples returned for queries longer than 1 hour. More points provide finer detail but read more rows.",
  historyPointCount: "{points} points",
  notifications: "Notifications",
  offlineAlert: "Offline Alert",
  expireReminder: "Expiration Reminder",
  disabled: "Disabled",
  enable: "Enable",
  enabled: "Enabled",
  notifyOffline: "Offline notification delay",
  notifyOfflineMinutes: "After {minutes} min offline",
  notifyExpireDays: "Notify within {days} days before expiration",
  expireReminderCustomPlaceholder: "Days before expiration (1-365)",
  resourceAlert: "Resource Load Alert",
  resourceAlertWindow: "Alert Window",
  resourceAlertWindowMinutes: "{minutes} min window",
  resourceAlertAddRule: "Add Rule",
  resourceAlertEmpty: "No resource load alert rules configured",
  resourceAlertRule: "Rule",
  resourceAlertRuleName: "Name",
  resourceAlertRuleNamePlaceholder: "e.g. High CPU",
  resourceAlertMetric: "Monitor Item",
  resourceAlertThreshold: "Threshold",
  resourceAlertServers: "Servers",
  resourceAlertInterval: "Interval",
  resourceAlertIntervalMinutes: "{minutes} min",
  resourceAlertMode: "Trigger Mode",
  resourceAlertModeContinuous: "All window samples exceed threshold",
  resourceAlertModeAverage: "Window average exceeds threshold",
  resourceAlertCpu: "CPU threshold (%)",
  resourceAlertRam: "RAM threshold (%)",
  resourceAlertNetIn: "Download threshold (Mbps)",
  resourceAlertNetOut: "Upload threshold (Mbps)",
  resourceAlertNetTotal: "Total network threshold (Mbps)",
  resourceAlertTip: "Note: Due to CF Workers limitations, too many rules may cause notification delays or losses.",
  telegramToken: "Telegram / WeChat / Feishu / DingTalk / Bark / Server酱 / WxPusher / Gotify / OneBot",
  chatId: "Chat ID",
  notificationChannel: "Notification Channel",
  builtinNotification: "Built-in Channel",
  customWebhook: "Custom Webhook",
  smtpNotification: "SMTP Email",
  smtpHost: "SMTP Host",
  smtpPort: "Port",
  smtpPortTip: "Cloudflare Workers blocks port 25. Use 465 (implicit TLS) or 587 (STARTTLS).",
  smtpSecure: "Encryption",
  smtpSecureAuto: "Auto (by port)",
  smtpSecureTls: "Implicit TLS (465)",
  smtpUser: "Username",
  smtpPassword: "Password",
  smtpFrom: "From",
  smtpTo: "Recipients",
  smtpInvalidEmail: "Enter a valid email address, e.g. user@example.com",
  smtpToRequired: "At least one recipient email is required",
  smtpFieldRequired: "This field is required",
  smtpPortInvalid: "Invalid port (1-65535, port 25 is blocked by Cloudflare Workers)",
  smtpSecureRequired: "Ports other than 465/587 require an explicit encryption method",
  smtpConfigInvalid: "SMTP configuration is incomplete, please check the SMTP settings",
  smtpTip: "Sends plain-text email via cloudflare:sockets (port 25 is blocked by Cloudflare Workers). QQ / 163 require an SMTP authorization code, not the login password.",
  webhookUrl: "Webhook URL",
  webhookMethod: "Method",
  webhookFormat: "Body Format",
  webhookHeaders: "Headers",
  webhookBody: "Body",
  webhookParams: "Query Params",
  notificationTemplate: "Notification Template",
  notificationLanguage: "Notification Language",
  notificationLanguageTip: "Language of alert messages sent to Telegram and other channels. Custom templates and webhook bodies are not translated.",
  notificationTimezone: "Notification Timezone",
  notificationTimezoneTip: "Used only for notification output times and expiration reminder schedule. Use an IANA timezone such as Asia/Shanghai.",
  expireNotificationTime: "Expiration Reminder Time",
  expireNotificationTimeTip: "Check expiration status and send reminders daily at the selected hour in the notification timezone. Use 0-23.",
  invalidNotificationTimezone: "Notification timezone must be a valid IANA timezone, for example Asia/Shanghai.",
  invalidExpireNotificationTime: "Expiration notification time must be an integer from 0 to 23.",
  invalidExpireReminder: "Expiration reminder must be an integer from 0 to 365 days.",
  saveConfig: "SAVE CONFIGURATION",
  saveHint: "Changes only take effect after saving",
  saving: "SAVING...",
  hostnameLabel: "Hostname",
  groupName: "Group Name",
  expirationDate: "Expiration Date",
  trafficLimit: "Traffic Limit",
  autoUpdate: "Auto Update",
  autoUpdateRiskTitle: "Auto-update Risk",
  autoUpdateRiskDesc: "Please ensure the security of the server where the agent is installed. After enabling auto-update, please copy the install command to the server and execute it.",
  autoUpdateRiskConfirm: "Enable Auto-update",
  autoUpdateRiskCancel: "Cancel",
  hideFromPublic: "Hide from Public",
  cancel: "CANCEL",
  save: "SAVE",
  dangerWarning: "Danger Warning",
  deleteConfirm: "This will remove all server data from monitoring panel",
  recommendUninstall: "Recommend running uninstall command on target server first to stop agent",
  clickToCopyCmd: "Click copy button to copy uninstall command",
  confirmDelete: "Confirm Delete",
  cancelAction: "Cancel",
  default: "Default",
  editConf: "Edit Configuration",
  deleteConf: "Delete Configuration",
  errorInvalidUsername: "[ERROR] Invalid username or password",
  serverUpdateFailedDbNotReady: '[ERROR] Update failed. Please go to Database Management and click "Upgrade Database" to migrate the new field.',
  configSaved: "[OK] Configuration saved! Reloading...",
  saveFailed: "[ERROR] Save failed: ",
  saveFailedUnknown: "[ERROR] Save failed: Unknown error",
  addFailed: "[ERROR] Add failed",
  serverAdded: "Server added",
  serverUpdated: "Server updated",
  batchEdit: "Batch Edit",
  batchEditSuccess: "[OK] Batch edited {count} servers",
  noBatchEditFields: "Please select fields to update",
  selectServersToEdit: "Please select servers to edit",
  basicInfo: "Basic Info",
  billing: "Billing",
  deleteFailed: "[ERROR] Delete failed",
  selectServers: "[WARN] Please select servers to delete",
  confirmDeleteServers: "[?] Delete ",
  irreversible: " selected servers? This action is irreversible.",
  imageSizeWarning: "[WARN] Image size > 800KB, consider using external URL",
  enterServerName: "[WARN] Please enter a server name",
  loginRequired: "Please log in to view historical data longer than 1 day",
  loginRequiredTitle: "Login Required",
  verificationFailed: "Verification failed",
  refreshToRetry: "Please refresh the page to try again",
  verificationError: "Verification error",
  turnstileNotSupported: "Turnstile Not Supported",
  turnstileNotSupportedDesc: "Turnstile is enabled on one of the remote endpoints. Please disable it on the remote site to use this dashboard.",
  turnstileSiteKeyMismatch: "Turnstile Site Key Mismatch",
  turnstileSiteKeyMismatchDesc: "Multiple sites have Turnstile enabled but use different site keys. Use the same Turnstile widget for all enabled sites.",
  dbManagement: "Database Management",
  upgradeDatabase: "Upgrade Database",
  clearHistory: "Clear History Data",
  upgradeDesc: "Update database schema to latest version",
  clearHistoryDesc: "Delete all monitoring history while keeping servers and settings",
  dangerOperation: "Dangerous Operation",
  clearHistoryWarning: "This operation will delete all monitoring history. Server list and settings will be kept. This action is irreversible!",
  confirmClear: "Confirm Clear",
  operationSuccess: "Operation successful",
  operationFailed: "Operation failed",
  invalidServerName: "Invalid server name",
  invalidPingNodeFormat: "Use domain, IPv4, IPv6, or host:port. IPv6 with a port must use [address]:port; port must be 1-65535.",
  invalidNetworkInterface: "Network interface names are invalid. Use comma-separated names, for example eth0,ens3.",
  invalidThemeOptionsFormat: 'Theme options must be a valid JSON object, for example {"a":1,"b":2}.',
  invalidTrafficCorrection: "Traffic correction must be a number from 0 to 1,000,000 GB",
  invalidServerId: "Invalid server ID",
  missingSortData: "Missing sort data",
  invalidSortId: "Sort data contains invalid ID",
  selectServersToDelete: "Please select servers to delete",
  invalidServerIdInList: "Contains invalid server ID",
  unknownAction: "Unknown action",
  cloudflareTokenRequired: "Please configure Cloudflare Token first",
  cloudflareAccountIdRequired: "Please configure Cloudflare Account ID first",
  upgrading: "Upgrading...",
  clearing: "Clearing...",
  collectInterval: "Collect Interval (seconds)",
  reportInterval: "Report Interval (seconds)",
  wssReportInterval: "WSS Report Interval (seconds)",
  connectionMode: "Connection Mode",
  connectionModeAuto: "Auto (WSS + POST fallback)",
  connectionModeHttp: "HTTP POST only",
  pingMode: "Ping Mode",
  pingModeIcmpRootHint: "ICMP is supported only when the agent is installed as root.",
  wssReportDisabledConnectionHint: "WSS reporting is disabled globally, please enable it in settings.",
  targetOs: "Target System",
  installMode: "Installation User",
  installModeCurrentUser: "Current user",
  installModeCfsmUser: "Dedicated cfsm user",
  nonRootInstallTip: "A dedicated cfsm user is supported only on systemd Linux.",
  nonRootInstallRunStep: "install as the cfsm user",
  nonRootInstallSudoRequired: "Required for non-root installation setup.",
  dedicatedUserSystemdRequired: "Alpine/OpenRC or other unsupported systems require systemd. Select Current user.",
  uninstallMode: "Installation User",
  uninstallModeCurrentUser: "Current user",
  uninstallModeCfsmUser: "Dedicated cfsm user",
  nonRootUninstallUserMissing: "The cfsm user does not exist; select Current user or verify the original installation user.",
  dedicatedUserUninstallUnsupported: "Unsupported systems require systemd. Select Current user.",
  httpsRequired: "Current protocol is HTTP, please use HTTPS to copy the installation command.",
  copied: "Copied!",
  close: "Close",
  agentVersionSelect: "Agent Version",
  agentVersionShell: "Shell Version",
  agentVersionGo: "Go Version",
  installVersionPlaceholder: "Latest version by default",
  ghProxy: "Third-party GitHub Proxy",
  ghProxyTip: "Third-party proxies can see or modify downloaded installation files and may introduce security risks.",
  installInstance: "Instance name",
  installInstanceTip: "Leave empty to use the default instance. Set a name to install multiple independent instances on the same machine; service names and config paths get an instance suffix. Only letters, digits, underscores and hyphens are allowed.",
  installInstancePlaceholder: "Default instance",
  uninstallAllInstances: "Uninstall all instances",
  uninstallAllInstancesTip: "When checked, uninstalls every instance on this machine (equivalent to --all) and ignores the instance name.",
  instanceNameInvalid: "Instance names allow only letters, digits, underscores and hyphens, up to 32 characters; other characters are ignored",
  installVersionTip: "Get the latest version from https://github.com/huilang-me/cfsm-agent/releases",
  dockerVersionTip: "Docker image tag, defaults to latest",
  ghProxyPlaceholder: "Direct",
  pingNodes: "Ping Nodes",
  customCt: "Telecom",
  customCu: "Union Telecom",
  customCm: "Mobile Telecom",
  jwtSecretTip: "JWT secret is used to generate and verify login tokens. Use a random string of at least 32 characters.",
  jwtSecretMinLength: "JWT Secret must be at least 32 characters long",
  jwtSecretNoWhitespace: "JWT Secret should not contain whitespace",
  adminLoginSettings: "Admin Login Settings",
  changePassword: "Change Password",
  cancelPasswordChange: "Cancel Password Change",
  confirmPassword: "Confirm Password",
  apiSecretTip: "The API_SECRET for server reporting still uses the environment variable, regardless of password settings here.",
  passwordRequired: "No admin password is configured. Please set one before saving.",
  passwordMismatch: "Passwords do not match",
  usernameRequired: "Username is required",
  securitySettings: "Security Settings",
  enableTurnstile: "Enable Turnstile CAPTCHA (Global)",
  enableTurnstileLogin: "Enable Turnstile CAPTCHA for Login",
  turnstileLoginTip: "When enabled, Turnstile verification is only required during login.",
  turnstileSiteKey: "Site Key",
  turnstileSiteKeyPlaceholder: "Turnstile Site Key",
  turnstileSecretKey: "Secret Key",
  turnstileSecretKeyPlaceholder: "Turnstile Secret Key",
  turnstileTip: "Cloudflare Turnstile provides bot protection. Get keys from Cloudflare Dashboard.",
  jwtSettings: "JWT Settings",
  jwtSecret: "JWT Secret",
  monthlyTraffic: "Monthly Traffic",
  monthlyTrafficLimit: "Traffic Limit",
  trafficResetDay: "Traffic Reset Day",
  trafficResetDayTip: 'Dynamic configurations (except "Auto-Update Switch") take effect automatically in about 4 minutes; the Auto-Update Switch requires re-copying and executing the command.',
  trafficAlertPercent: "Traffic Alert Threshold",
  trafficAlertPercentTip: "Per-server threshold percentage; leave empty = follow global setting, 0 = disable alert for this server. Sends one notification per billing cycle; re-arms after traffic reset or when threshold/limit changes. Only applies when a traffic limit is set.",
  trafficAlertThreshold: "Monthly Traffic Alert Threshold",
  trafficAlertThresholdTip: "Global default: notify once when a server's monthly traffic reaches this percentage of its traffic limit. 0 = off. Servers with their own threshold override this; a server set to 0 disables its alert.",
  networkInterface: "Network Interfaces",
  networkInterfaceHint: "e.g. eth0,ens3",
  rxCorrection: "Download Correction",
  txCorrection: "Upload Correction",
  correctionHint: "If only one side is set, the other side is overwritten as 0.",
  pingNodeTip: "Override global default nodes, set 0 to not use the node.",
  serverLevel: "server",
  trafficCalcType: "Traffic Calculation Type",
  trafficCalcTotal: "Upload + Download",
  trafficCalcUl: "Upload Only",
  trafficCalcDl: "Download Only",
  trafficCalcMax: "Max of Both",
  cloudflareSettings: "Cloudflare Settings",
  cloudflareAccountIdPlaceholder: "e.g. f81d307be4628170a3878394435c9c8b",
  cloudflareTokenPlaceholder: "Cloudflare API Token",
  cloudflareTokenTip: "Requires Account Analytics Read permission to query usage.",
  queryD1Quota: "Query CF Account Usage",
  d1UsageQueried: "CF Account Usage query succeeded. Remember to save.",
  d1UsageDate: "Usage Date",
  d1RowsRead: "Rows Read",
  d1RowsWritten: "Rows Written",
  workersRequests: "Workers Requests",
  durableObjectsRequests: "DO Billable Requests (est.)",
  durableObjectsHttpRequests: "DO HTTP Requests",
  durableObjectsHibernationWakeups: "DO Hibernation Wake-ups",
  durableObjectsInboundWebSocketMessages: "DO Inbound WebSocket Messages",
  durableObjectsOutboundWebSocketMessages: "DO Outbound WebSocket Messages",
  billingRatioOneToOne: "1:1 billed",
  billingRatioWebSocketIncoming: "20:1 billed",
  billingRatioNotBilled: "not billed",
  rawRequests: "raw",
  durableObjectsDuration: "DO Duration (GB-s)",
  durableObjectsDurationTip: "Wss connection uptime affects the usage. A 24‑hour persistent connection uses about 85% steadily, and this does not scale with the number of servers.",
  todayUsage: "Today Usage",
  yesterdayUsage: "Yesterday Usage",
  secondsAgo: "secs ago",
  minutesAgo: "mins ago",
  hoursAgo: "hurs ago",
  daysAgo: "days ago",
  loginSuccessful: "Login successful",
  updateSuccess: "Update Success",
  serverDeleted: "Server deleted",
  sortOrderSaved: "Sort order saved",
  batchDeleted: "Servers deleted",
  databaseRebuiltSuccess: "History data cleared successfully",
  databaseRebuiltFailed: "Failed to clear history data",
  databaseUpgradeSuccess: "Database upgrade successful",
  databaseUpgradeFailed: "Database upgrade failed",
  dbColumnsAdded: "Database columns missing, added missing columns. Please click save again.",
  serverUpdateFailed: "Server update failed",
  adminDisabled: "Admin Panel Disabled",
  adminDisabledDesc: "Admin panel is disabled when using multi-site mode.",
  backToDashboard: "Back to Dashboard",
  validationError: "Validation Error",
  turnstileSiteKeyRequired: "Turnstile Site Key is required when Turnstile is enabled",
  turnstileSecretKeyRequired: "Turnstile Secret Key is required when Turnstile is enabled",
  tgBotTokenRequired: "Telegram Bot Token is required when notifications are enabled",
  notificationWebhookUrlRequired: "Webhook URL is required when custom webhook is enabled",
  disableOfflineNotify: "Disable Offline Notification",
  disableNodeNotify: "Disable This Node Notifications",
  sendTestNotification: "Send Test",
  testNotificationSent: "Test notification sent successfully. Remember to save.",
  testNotificationFailed: "Failed to send test notification",
  saveSuccess: "Settings saved successfully",
  serverEdited: "Server updated successfully",
  serversDeleted: "Servers deleted successfully",
  corsBlocked: "site blocks cross-origin access, please fix.",
  exportServers: "Export",
  importServers: "Import",
  settingsImported: "Site and appearance settings imported (site/appearance)",
  importSettingsNote: "Credentials, JWT, Turnstile, custom UA, alert rules, CSP and the index flag are not exported or imported. Import overwrites the current site settings.",
  serversExported: "Servers exported successfully",
  serversExportFailed: "Failed to export servers",
  serversImported: "Servers imported successfully",
  noServersImported: "No servers were imported",
  noServersToImport: "No server data to import",
  importing: "Importing...",
  exporting: "Exporting...",
  importResult: "Import Result",
  importedCount: "Imported",
  skippedCount: "Skipped",
  skippedIds: "Skipped IDs",
  selectJsonFile: "Select a JSON file to import",
  themeStore: "Theme Store",
  donation: "Support",
  donationTitle: "Buy Me a Bubble Tea",
  donationDesc: "If CFSM has been useful to you, send a little donation token to support continued maintenance.",
  donationToken: "Every token becomes energy for more code, fixes, and late-night monitoring.",
  donationThanks: "Thanks for keeping this little project running!",
  donationWechat: "WeChat Scan to support",
  donationQrAlt: "WeChat appreciation QR code",
  themeStoreLoading: "Loading themes",
  themeStoreLoadFailed: "Failed to load theme store",
  themeStoreNetworkError: "Unable to load the theme store. Please check network access to raw.githubusercontent.com and api.github.com. Suggest changing nodes and retrying.",
  themeLoadVersions: "Click to Load Versions",
  themeLoadingVersions: "Loading Versions...",
  themeStoreCreateTitle: "Build your own theme",
  themeStoreCreateDesc: "A theme is just a static site. Generate index.html and assets/ with the dev guide or the AI prompt, push it to GitHub, then submit it to the store — it shows up right here.",
  themeStoreDevDoc: "Dev guide",
  themeStoreAiPrompt: "AI prompt",
  themeStoreSubmit: "Submit theme",
  themeStoreWarning: "Third-party themes are not verified",
  themeStoreWarningDesc: "Third-party themes may contain malicious code. Please review the source code or trust the author before using. CFSM is not responsible for any damage caused by third-party themes.",
  currentTheme: "Current Theme",
  builtinTheme: "Built-in theme",
  filterMore: "MORE",
  noSamples: "No samples",
  expand: "Expand",
  collapse: "Collapse",
  mikusThemeTagBuiltin: "Built-in",
  mikusThemeTagSakura: "Sakura",
  mikusThemeDescription: "Built-in Mikus mode. Switches back to the default theme and enables Mikus colors, loading screens, and sakura effects.",
  useBuiltinTheme: "Use Built-in",
  customThemeUrl: "Custom Theme URL",
  customThemeUrlDesc: "Paste a GitHub theme tree URL. Use a commit ID to pin the version, e.g. https://github.com/Author/theme/tree/commitid.",
  applyCustomTheme: "Apply Custom",
  switchTheme: "Switch Theme",
  themeApplied: "Theme switched successfully",
  themeApplyFailed: "Failed to switch theme",
  themeUrlUnavailable: "Theme URL is unavailable for this version",
  invalidThemeUrl: "Invalid theme URL",
  invalidUserAgent: "Invalid custom User-Agent: only letters, digits, spaces and . _ - / , : ; ( ) + = @ # * ? ~ are allowed, max 100 characters",
  invalidAppPassword: "Invalid app access password: must be 16-32 ASCII characters without spaces",
  version: "Version",
  changelog: "Changelog",
  preview: "Preview",
  demo: "Demo",
  view: "View",
  threeNetPanelCount: "Panel Lines on Home",
  themeConfigInvalidCount: "Please enter a value between 0 and 8",
  themeConfigLoginRequired: "Please log in to the admin panel before changing theme config",
  themeConfigReset: "Reset",
  colorPresetTitle: "Color Style",
  colorPresetDefault: "Default",
  colorPresetOcean: "Ocean Blue",
  colorPresetAurora: "Aurora Green",
  colorPresetNebula: "Nebula Purple",
  colorPresetSunset: "Sunset Orange",
  colorPresetSakura: "Sakura Pink",
  colorPresetForest: "Forest Green",
  colorPresetGraphite: "Graphite"
}, Zy = Object.freeze({
  en: () => Promise.resolve({ default: Sh }),
  zh: () => Promise.resolve().then(() => LP),
  "zh-TW": () => Promise.resolve().then(() => FP),
  ja: () => Promise.resolve().then(() => BP),
  id: () => Promise.resolve().then(() => jP),
  fr: () => Promise.resolve().then(() => VP),
  es: () => Promise.resolve().then(() => GP)
}), kh = Object.freeze(Tl.map((t) => Object.freeze({
  ...t,
  load: Zy[t.code]
}))), Th = xs.LANGUAGE_PREFERENCE;
let ev = Pi;
const In = /* @__PURE__ */ jn({ [Fi]: Sh }), yu = /* @__PURE__ */ new Set([Fi]), da = /* @__PURE__ */ new Map(), tv = (t) => {
  var n;
  const e = String(t || "").trim().toLowerCase().replace(/_/g, "-");
  if (!e) return null;
  let s = null, i = 0;
  for (const a of kh) {
    const o = (n = a.browserAliases) != null && n.length ? a.browserAliases : [a.code.toLowerCase()];
    for (const r of o)
      r.length > i && (e === r || e.startsWith(`${r}-`)) && (s = a, i = r.length);
  }
  return s;
}, sv = () => {
  if (typeof navigator > "u") return Fi;
  const t = Array.isArray(navigator.languages) && navigator.languages.length > 0 ? navigator.languages : [navigator.language];
  for (const e of t) {
    const s = tv(e);
    if (s) return s.code;
  }
  return Fi;
}, iv = (t) => {
  const e = _h(t);
  return e === Pi ? sv() : e;
}, xl = /* @__PURE__ */ oe(iv(localStorage.getItem(Th) || ev)), nv = (t) => {
  if (yu.has(t)) return Promise.resolve(!0);
  if (da.has(t)) return da.get(t);
  const e = kh.find((i) => i.code === t);
  if (!e || typeof e.load != "function") return Promise.resolve(!1);
  const s = e.load().then((i) => {
    const n = i == null ? void 0 : i.default;
    return !n || typeof n != "object" ? !1 : (In[t] = n, yu.add(t), !0);
  }).catch((i) => (console.error(`Failed to load language: ${t}`, i), !1)).finally(() => {
    da.delete(t);
  });
  return da.set(t, s), s;
}, av = (t) => {
  var e, s;
  return ((e = In[xl.value]) == null ? void 0 : e[t]) || ((s = In[Fi]) == null ? void 0 : s[t]) || t;
}, ov = async (t) => {
  const e = _h(t, "");
  return await nv(e) ? (xl.value = e, localStorage.setItem(Th, e), window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang: e } })), !0) : !1;
}, xh = () => de(() => In[xl.value] || In[Fi]), rv = { class: "footer status-bar" }, lv = ["aria-label", "tabindex"], cv = {
  key: 0,
  class: "version-update-dot",
  "aria-hidden": "true"
}, uv = {
  key: 1,
  class: "version-update-tooltip",
  role: "tooltip"
}, dv = {
  __name: "Footer",
  setup(t) {
    const e = xh(), s = de(() => String(Wr.value || "").trim()), i = de(() => String(yh.value || "").trim()), n = de(() => i.value && s.value && i.value !== s.value), a = de(() => n.value ? `${e.value.workersUpdateAvailable || "New version"} V${i.value}` : "");
    return (o, r) => ($e(), Qe("footer", rv, [
      S("span", {
        class: "footer-version",
        "aria-label": a.value || void 0,
        tabindex: n.value ? 0 : void 0
      }, [
        S(
          "span",
          null,
          "V" + F(te(Wr)),
          1
          /* TEXT */
        ),
        n.value ? ($e(), Qe("span", cv)) : zt("v-if", !0),
        n.value ? ($e(), Qe(
          "span",
          uv,
          F(a.value),
          1
          /* TEXT */
        )) : zt("v-if", !0)
      ], 8, lv),
      r[0] || (r[0] = S(
        "span",
        null,
        [
          Pe("Powered by "),
          S("a", {
            href: "https://github.com/huilang-me/CF-Server-Monitor",
            target: "_blank"
          }, "CF-Server-Monitor")
        ],
        -1
        /* CACHED */
      ))
    ]));
  }
}, fv = "os-icons/", hv = [
  {
    name: "AlmaLinux",
    image: "os-alma.svg",
    keywords: ["alma", "almalinux"]
  },
  {
    name: "Alpine Linux",
    image: "os-alpine.webp",
    keywords: ["alpine", "alpine linux"]
  },
  {
    name: "CentOS",
    image: "os-centos.svg",
    keywords: ["centos", "cent os"]
  },
  {
    name: "Debian",
    image: "os-debian.svg",
    keywords: ["debian", "debian gnu/linux", "deb"]
  },
  {
    name: "Ubuntu",
    image: "os-ubuntu.svg",
    keywords: ["ubuntu", "elementary"]
  },
  {
    name: "macOS",
    image: "os-macos.svg",
    keywords: ["macos", "mac os", "darwin", "os x"]
  },
  {
    name: "Windows",
    image: "os-windows.svg",
    keywords: ["windows", "win32", "win64", "win10", "win11", "win server", "microsoft"]
  },
  {
    name: "Arch Linux",
    image: "os-arch.svg",
    keywords: ["arch", "archlinux", "arch linux"]
  },
  {
    name: "Kali Linux",
    image: "os-kail.svg",
    keywords: ["kail", "kali", "kali linux"]
  },
  {
    name: "iStoreOS",
    image: "os-istore.png",
    keywords: ["istore", "istoreos", "istore os"]
  },
  {
    name: "OpenWrt",
    image: "os-openwrt.svg",
    keywords: ["openwrt", "open wrt", "open-wrt", "qwrt", "kwrt"]
  },
  {
    name: "ImmortalWrt",
    image: "os-openwrt.svg",
    keywords: ["immortalwrt", "immortal", "emmortal"]
  },
  {
    name: "NixOS",
    image: "os-nix.svg",
    keywords: ["nixos", "nix os", "nix"]
  },
  {
    name: "Rocky Linux",
    image: "os-rocky.svg",
    keywords: ["rocky", "rocky linux"]
  },
  {
    name: "Fedora",
    image: "os-fedora.svg",
    keywords: ["fedora"]
  },
  {
    name: "openSUSE",
    image: "os-openSUSE.svg",
    keywords: ["opensuse", "open suse", "suse"]
  },
  {
    name: "Gentoo",
    image: "os-gentoo.svg",
    keywords: ["gentoo"]
  },
  {
    name: "Red Hat",
    image: "os-redhat.svg",
    keywords: ["redhat", "rhel", "red hat"]
  },
  {
    name: "Linux Mint",
    image: "os-mint.svg",
    keywords: ["mint", "linux mint"]
  },
  {
    name: "Manjaro",
    image: "os-manjaro-.svg",
    keywords: ["manjaro"]
  },
  {
    name: "Armbian",
    image: "os-armbian.png",
    keywords: ["armbox", "armbian"]
  },
  {
    name: "Synology DSM",
    image: "os-synology.ico",
    keywords: ["synology", "dsm", "synology dsm"]
  },
  {
    name: "Proxmox VE",
    image: "os-proxmox.ico",
    keywords: ["proxmox", "proxmox ve", "pve"]
  },
  {
    name: "Alibaba Cloud Linux",
    image: "os-alibaba.svg",
    keywords: ["alibaba", "aliyun", "alinux", "anolis", "openanolis", "阿里", "龙蜥"]
  },
  {
    name: "OpenCloudOS",
    image: "os-opencloud.svg",
    keywords: ["opencloud", "opencloudos", "opencloud os"]
  },
  {
    name: "Oracle Linux",
    image: "os-oracle.svg",
    keywords: ["oracle", "oracle linux"]
  }
], vn = {
  name: "Unknown",
  image: "os-unknown.svg",
  keywords: ["unknown"]
}, pv = (t) => String(t || "").toLowerCase().trim(), Ah = (t) => {
  const e = pv(t);
  if (!e) return vn;
  for (const s of hv)
    if (s.keywords.some((i) => e.includes(i)))
      return s;
  return vn;
}, mv = (t) => {
  const e = Ah(t).image;
  return e ? `${fv}${e}` : "";
}, gv = (t) => {
  const e = Ah(t);
  if (e !== vn) return e.name;
  const s = String(t || "").trim();
  return s && s.split(/[\s/]/)[0] || vn.name;
}, bv = ["src", "alt", "aria-label"], vu = {
  __name: "OsIcon",
  props: {
    os: { type: String, default: "" }
  },
  setup(t) {
    const e = t, s = /* @__PURE__ */ oe(!1), i = de(() => mv(e.os)), n = de(() => gv(e.os)), a = de(() => i.value ? hh(i.value) : "");
    return Di(() => e.os, () => {
      s.value = !1;
    }), (o, r) => a.value && !s.value ? ($e(), Qe("img", {
      key: 0,
      class: "os-icon-img",
      src: a.value,
      alt: n.value,
      "aria-label": n.value,
      loading: "lazy",
      onError: r[0] || (r[0] = (l) => s.value = !0)
    }, null, 40, bv)) : zt("v-if", !0);
  }
}, yv = { class: "modal-dialog live-timeout-dialog" }, vv = { class: "warning-box live-timeout-message" }, _v = { class: "modal-footer flex-justify-between" }, _u = "live-connection-timeout-title", Su = "live-connection-timeout-message", Sv = {
  __name: "LiveConnectionTimeoutModal",
  props: {
    show: { type: Boolean, default: !1 },
    trans: { type: Object, required: !0 }
  },
  emits: ["close", "continue"],
  setup(t) {
    return (e, s) => t.show ? ($e(), Qe("div", {
      key: 0,
      class: "modal-overlay active",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": _u,
      "aria-describedby": Su
    }, [
      S("div", yv, [
        S("div", { class: "modal-header" }, [
          S("div", {
            id: _u,
            class: "modal-title"
          }, "$ websocket --timeout")
        ]),
        S("div", vv, [
          s[2] || (s[2] = S(
            "span",
            {
              class: "live-timeout-icon",
              "aria-hidden": "true"
            },
            "[!]",
            -1
            /* CACHED */
          )),
          S("div", null, [
            S(
              "strong",
              null,
              F(t.trans.liveConnectionTimeoutTitle),
              1
              /* TEXT */
            ),
            S(
              "p",
              { id: Su },
              F(t.trans.liveConnectionTimeoutMessage),
              1
              /* TEXT */
            )
          ])
        ]),
        S("div", _v, [
          S(
            "button",
            {
              type: "button",
              class: "btn",
              onClick: s[0] || (s[0] = (i) => e.$emit("close"))
            },
            F(t.trans.close),
            1
            /* TEXT */
          ),
          S(
            "button",
            {
              type: "button",
              class: "btn btn-primary",
              autofocus: "",
              onClick: s[1] || (s[1] = (i) => e.$emit("continue"))
            },
            F(t.trans.continueConnection),
            1
            /* TEXT */
          )
        ])
      ])
    ])) : zt("v-if", !0);
  }
}, kv = [
  {
    key: "default",
    labelKey: "colorPresetDefault",
    dark: { accent_primary: "#00d4aa", accent_secondary: "#4da6ff", bg_primary: "#0a0e14", bg_card: "#151b26", text_primary: "#d3dae3", border: "#1e2a3a" },
    light: { accent_primary: "#1a7f5a", accent_secondary: "#2563eb", bg_primary: "#f5f5f0", bg_card: "#fafaf5", text_primary: "#2c2c2c", border: "#d4d4c8" }
  },
  {
    key: "ocean",
    labelKey: "colorPresetOcean",
    dark: { accent_primary: "#38bdf8", accent_secondary: "#818cf8", bg_primary: "#08131f", bg_card: "#0f2033", text_primary: "#d9e8f7", border: "#1c3449" },
    light: { accent_primary: "#0369a1", accent_secondary: "#4f46e5", bg_primary: "#f0f6fb", bg_card: "#f9fcff", text_primary: "#173247", border: "#cfe1ef" }
  },
  {
    key: "aurora",
    labelKey: "colorPresetAurora",
    dark: { accent_primary: "#34d399", accent_secondary: "#6ee7b7", bg_primary: "#08130f", bg_card: "#0e231a", text_primary: "#d5f2e4", border: "#1a3b2c" },
    light: { accent_primary: "#047857", accent_secondary: "#0f766e", bg_primary: "#f0f8f4", bg_card: "#f9fdfa", text_primary: "#153a2b", border: "#cbe6d8" }
  },
  {
    key: "nebula",
    labelKey: "colorPresetNebula",
    dark: { accent_primary: "#c4b5fd", accent_secondary: "#f0abfc", bg_primary: "#0d0916", bg_card: "#1a1329", text_primary: "#e8dff7", border: "#2e2245" },
    light: { accent_primary: "#6d28d9", accent_secondary: "#be185d", bg_primary: "#f7f4fc", bg_card: "#fcfaff", text_primary: "#31204a", border: "#ded2ef" }
  },
  {
    key: "sunset",
    labelKey: "colorPresetSunset",
    dark: { accent_primary: "#fbbf24", accent_secondary: "#fb7185", bg_primary: "#150d08", bg_card: "#251811", text_primary: "#f7e6d6", border: "#3f2a1d" },
    light: { accent_primary: "#b45309", accent_secondary: "#be123c", bg_primary: "#fdf8f2", bg_card: "#fffcf8", text_primary: "#3d2818", border: "#ecdcc9" }
  },
  {
    key: "sakura",
    labelKey: "colorPresetSakura",
    dark: { accent_primary: "#f9a8d4", accent_secondary: "#a5b4fc", bg_primary: "#150b12", bg_card: "#261721", text_primary: "#f8e2ec", border: "#3f2432" },
    light: { accent_primary: "#be185d", accent_secondary: "#6d28d9", bg_primary: "#fdf5f9", bg_card: "#fffafc", text_primary: "#3d1f2e", border: "#f0d9e4" }
  },
  {
    key: "forest",
    labelKey: "colorPresetForest",
    dark: { accent_primary: "#a3e635", accent_secondary: "#22d3ee", bg_primary: "#0b1209", bg_card: "#162013", text_primary: "#dcefd1", border: "#2a3a22" },
    light: { accent_primary: "#3f6212", accent_secondary: "#0e7490", bg_primary: "#f5f9f0", bg_card: "#fbfdf8", text_primary: "#23331a", border: "#d8e5ca" }
  },
  {
    key: "graphite",
    labelKey: "colorPresetGraphite",
    dark: { accent_primary: "#94a3b8", accent_secondary: "#60a5fa", bg_primary: "#0d1014", bg_card: "#171c23", text_primary: "#dde3ea", border: "#2a323d" },
    light: { accent_primary: "#475569", accent_secondary: "#1d4ed8", bg_primary: "#f4f5f7", bg_card: "#fafbfc", text_primary: "#242b33", border: "#d7dce3" }
  }
];
new Set(kv.map((t) => t.key));
function Xi(t) {
  return t === !1 || t === "false";
}
const Tv = Object.freeze([
  { symbol: "$", nameZh: "美元", nameEn: "US Dollar", nameEs: "Dólar estadounidense" },
  { symbol: "¥", nameZh: "人民币", nameEn: "Chinese Yuan", nameEs: "Yuan chino" },
  { symbol: "€", nameZh: "欧元", nameEn: "Euro", nameEs: "Euro" },
  { symbol: "£", nameZh: "英镑", nameEn: "British Pound", nameEs: "Libra esterlina" },
  { symbol: "¥JPY", nameZh: "日元", nameEn: "Japanese Yen", nameEs: "Yen japonés" },
  { symbol: "HK$", nameZh: "港币", nameEn: "Hong Kong Dollar", nameEs: "Dólar de Hong Kong" },
  { symbol: "A$", nameZh: "澳元", nameEn: "Australian Dollar", nameEs: "Dólar australiano" },
  { symbol: "C$", nameZh: "加拿大元", nameEn: "Canadian Dollar", nameEs: "Dólar canadiense" },
  { symbol: "S$", nameZh: "新加坡元", nameEn: "Singapore Dollar", nameEs: "Dólar de Singapur" },
  { symbol: "NZ$", nameZh: "新西兰元", nameEn: "New Zealand Dollar", nameEs: "Dólar neozelandés" },
  { symbol: "₣", nameZh: "瑞士法郎", nameEn: "Swiss Franc", nameEs: "Franco suizo" },
  { symbol: "₩", nameZh: "韩元", nameEn: "Korean Won", nameEs: "Won surcoreano" },
  { symbol: "₹", nameZh: "印度卢比", nameEn: "Indian Rupee", nameEs: "Rupia india" },
  { symbol: "฿", nameZh: "泰铢", nameEn: "Thai Baht", nameEs: "Baht tailandés" },
  { symbol: "₫", nameZh: "越南盾", nameEn: "Vietnamese Dong", nameEs: "Dong vietnamita" },
  { symbol: "₱", nameZh: "菲律宾比索", nameEn: "Philippine Peso", nameEs: "Peso filipino" },
  { symbol: "Rp", nameZh: "印尼盾", nameEn: "Indonesian Rupiah", nameEs: "Rupia indonesia" },
  { symbol: "RM", nameZh: "马来西亚林吉特", nameEn: "Malaysian Ringgit", nameEs: "Ringgit malayo" },
  { symbol: "₺", nameZh: "土耳其里拉", nameEn: "Turkish Lira", nameEs: "Lira turca" },
  { symbol: "₪", nameZh: "以色列新谢克尔", nameEn: "Israeli Shekel", nameEs: "Séquel israelí" },
  { symbol: "৳", nameZh: "孟加拉塔卡", nameEn: "Bangladeshi Taka", nameEs: "Taka bangladesí" },
  { symbol: "₨", nameZh: "巴基斯坦卢比", nameEn: "Pakistani Rupee", nameEs: "Rupia pakistaní" },
  { symbol: "LKR", nameZh: "斯里兰卡卢比", nameEn: "Sri Lankan Rupee", nameEs: "Rupia de Sri Lanka" },
  { symbol: "₮", nameZh: "蒙古图格里克", nameEn: "Mongolian Tugrik", nameEs: "Tugrik mongol" },
  { symbol: "₽", nameZh: "卢布", nameEn: "Russian Ruble", nameEs: "Rublo ruso" },
  { symbol: "R$", nameZh: "巴西雷亚尔", nameEn: "Brazilian Real", nameEs: "Real brasileño" },
  { symbol: "kr", nameZh: "克朗", nameEn: "Krona (SEK/NOK/DKK)", nameEs: "Corona (SEK/NOK/DKK)" },
  { symbol: "zł", nameZh: "波兰兹罗提", nameEn: "Polish Zloty", nameEs: "Esloti polaco" },
  { symbol: "₴", nameZh: "乌克兰格里夫纳", nameEn: "Ukrainian Hryvnia", nameEs: "Grivna ucraniana" },
  { symbol: "₸", nameZh: "哈萨克坦戈", nameEn: "Kazakhstani Tenge", nameEs: "Tenge kazajo" },
  { symbol: "R", nameZh: "南非兰特", nameEn: "South African Rand", nameEs: "Rand sudafricano" },
  { symbol: "₦", nameZh: "尼日利亚奈拉", nameEn: "Nigerian Naira", nameEs: "Naira nigeriano" },
  { symbol: "EGP", nameZh: "埃及镑", nameEn: "Egyptian Pound", nameEs: "Libra egipcia" },
  { symbol: "د.إ", nameZh: "阿联酋迪拉姆", nameEn: "UAE Dirham", nameEs: "Dírham de los EAU" },
  { symbol: "﷼", nameZh: "沙特里亚尔", nameEn: "Saudi Riyal", nameEs: "Riyal saudí" },
  { symbol: "Q", nameZh: "危地马拉格查尔", nameEn: "Guatemalan Quetzal", nameEs: "Quetzal guatemalteco" }
]);
new Set(Tv.map((t) => t.symbol));
const xv = (t) => {
  const e = parseFloat(t.net_rx_monthly) || 0, s = parseFloat(t.net_tx_monthly) || 0, i = t.traffic_calc_type || "total";
  return i === "dl" ? e : i === "ul" ? s : i === "max" ? Math.max(e, s) : e + s;
};
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function qn(t) {
  return t + 0.5 | 0;
}
const Fs = (t, e, s) => Math.max(Math.min(t, s), e);
function on(t) {
  return Fs(qn(t * 2.55), 0, 255);
}
function zs(t) {
  return Fs(qn(t * 255), 0, 255);
}
function ys(t) {
  return Fs(qn(t / 2.55) / 100, 0, 1);
}
function ku(t) {
  return Fs(qn(t * 100), 0, 100);
}
const Ht = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Br = [..."0123456789ABCDEF"], Av = (t) => Br[t & 15], Pv = (t) => Br[(t & 240) >> 4] + Br[t & 15], fa = (t) => (t & 240) >> 4 === (t & 15), Cv = (t) => fa(t.r) && fa(t.g) && fa(t.b) && fa(t.a);
function wv(t) {
  var e = t.length, s;
  return t[0] === "#" && (e === 4 || e === 5 ? s = {
    r: 255 & Ht[t[1]] * 17,
    g: 255 & Ht[t[2]] * 17,
    b: 255 & Ht[t[3]] * 17,
    a: e === 5 ? Ht[t[4]] * 17 : 255
  } : (e === 7 || e === 9) && (s = {
    r: Ht[t[1]] << 4 | Ht[t[2]],
    g: Ht[t[3]] << 4 | Ht[t[4]],
    b: Ht[t[5]] << 4 | Ht[t[6]],
    a: e === 9 ? Ht[t[7]] << 4 | Ht[t[8]] : 255
  })), s;
}
const Rv = (t, e) => t < 255 ? e(t) : "";
function Mv(t) {
  var e = Cv(t) ? Av : Pv;
  return t ? "#" + e(t.r) + e(t.g) + e(t.b) + Rv(t.a, e) : void 0;
}
const Dv = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Ph(t, e, s) {
  const i = e * Math.min(s, 1 - s), n = (a, o = (a + t / 30) % 12) => s - i * Math.max(Math.min(o - 3, 9 - o, 1), -1);
  return [n(0), n(8), n(4)];
}
function Iv(t, e, s) {
  const i = (n, a = (n + t / 60) % 6) => s - s * e * Math.max(Math.min(a, 4 - a, 1), 0);
  return [i(5), i(3), i(1)];
}
function Ev(t, e, s) {
  const i = Ph(t, 1, 0.5);
  let n;
  for (e + s > 1 && (n = 1 / (e + s), e *= n, s *= n), n = 0; n < 3; n++)
    i[n] *= 1 - e - s, i[n] += e;
  return i;
}
function Ov(t, e, s, i, n) {
  return t === n ? (e - s) / i + (e < s ? 6 : 0) : e === n ? (s - t) / i + 2 : (t - e) / i + 4;
}
function Al(t) {
  const s = t.r / 255, i = t.g / 255, n = t.b / 255, a = Math.max(s, i, n), o = Math.min(s, i, n), r = (a + o) / 2;
  let l, c, u;
  return a !== o && (u = a - o, c = r > 0.5 ? u / (2 - a - o) : u / (a + o), l = Ov(s, i, n, u, a), l = l * 60 + 0.5), [l | 0, c || 0, r];
}
function Pl(t, e, s, i) {
  return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, s, i)).map(zs);
}
function Cl(t, e, s) {
  return Pl(Ph, t, e, s);
}
function Nv(t, e, s) {
  return Pl(Ev, t, e, s);
}
function Lv(t, e, s) {
  return Pl(Iv, t, e, s);
}
function Ch(t) {
  return (t % 360 + 360) % 360;
}
function Uv(t) {
  const e = Dv.exec(t);
  let s = 255, i;
  if (!e)
    return;
  e[5] !== i && (s = e[6] ? on(+e[5]) : zs(+e[5]));
  const n = Ch(+e[2]), a = +e[3] / 100, o = +e[4] / 100;
  return e[1] === "hwb" ? i = Nv(n, a, o) : e[1] === "hsv" ? i = Lv(n, a, o) : i = Cl(n, a, o), {
    r: i[0],
    g: i[1],
    b: i[2],
    a: s
  };
}
function Fv(t, e) {
  var s = Al(t);
  s[0] = Ch(s[0] + e), s = Cl(s), t.r = s[0], t.g = s[1], t.b = s[2];
}
function Wv(t) {
  if (!t)
    return;
  const e = Al(t), s = e[0], i = ku(e[1]), n = ku(e[2]);
  return t.a < 255 ? `hsla(${s}, ${i}%, ${n}%, ${ys(t.a)})` : `hsl(${s}, ${i}%, ${n}%)`;
}
const Tu = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, xu = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function Bv() {
  const t = {}, e = Object.keys(xu), s = Object.keys(Tu);
  let i, n, a, o, r;
  for (i = 0; i < e.length; i++) {
    for (o = r = e[i], n = 0; n < s.length; n++)
      a = s[n], r = r.replace(a, Tu[a]);
    a = parseInt(xu[o], 16), t[r] = [a >> 16 & 255, a >> 8 & 255, a & 255];
  }
  return t;
}
let ha;
function Hv(t) {
  ha || (ha = Bv(), ha.transparent = [0, 0, 0, 0]);
  const e = ha[t.toLowerCase()];
  return e && {
    r: e[0],
    g: e[1],
    b: e[2],
    a: e.length === 4 ? e[3] : 255
  };
}
const jv = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function zv(t) {
  const e = jv.exec(t);
  let s = 255, i, n, a;
  if (e) {
    if (e[7] !== i) {
      const o = +e[7];
      s = e[8] ? on(o) : Fs(o * 255, 0, 255);
    }
    return i = +e[1], n = +e[3], a = +e[5], i = 255 & (e[2] ? on(i) : Fs(i, 0, 255)), n = 255 & (e[4] ? on(n) : Fs(n, 0, 255)), a = 255 & (e[6] ? on(a) : Fs(a, 0, 255)), {
      r: i,
      g: n,
      b: a,
      a: s
    };
  }
}
function Vv(t) {
  return t && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${ys(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`);
}
const ar = (t) => t <= 31308e-7 ? t * 12.92 : Math.pow(t, 1 / 2.4) * 1.055 - 0.055, vi = (t) => t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
function qv(t, e, s) {
  const i = vi(ys(t.r)), n = vi(ys(t.g)), a = vi(ys(t.b));
  return {
    r: zs(ar(i + s * (vi(ys(e.r)) - i))),
    g: zs(ar(n + s * (vi(ys(e.g)) - n))),
    b: zs(ar(a + s * (vi(ys(e.b)) - a))),
    a: t.a + s * (e.a - t.a)
  };
}
function pa(t, e, s) {
  if (t) {
    let i = Al(t);
    i[e] = Math.max(0, Math.min(i[e] + i[e] * s, e === 0 ? 360 : 1)), i = Cl(i), t.r = i[0], t.g = i[1], t.b = i[2];
  }
}
function wh(t, e) {
  return t && Object.assign(e || {}, t);
}
function Au(t) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(t) ? t.length >= 3 && (e = { r: t[0], g: t[1], b: t[2], a: 255 }, t.length > 3 && (e.a = zs(t[3]))) : (e = wh(t, { r: 0, g: 0, b: 0, a: 1 }), e.a = zs(e.a)), e;
}
function Gv(t) {
  return t.charAt(0) === "r" ? zv(t) : Uv(t);
}
class En {
  constructor(e) {
    if (e instanceof En)
      return e;
    const s = typeof e;
    let i;
    s === "object" ? i = Au(e) : s === "string" && (i = wv(e) || Hv(e) || Gv(e)), this._rgb = i, this._valid = !!i;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var e = wh(this._rgb);
    return e && (e.a = ys(e.a)), e;
  }
  set rgb(e) {
    this._rgb = Au(e);
  }
  rgbString() {
    return this._valid ? Vv(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Mv(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Wv(this._rgb) : void 0;
  }
  mix(e, s) {
    if (e) {
      const i = this.rgb, n = e.rgb;
      let a;
      const o = s === a ? 0.5 : s, r = 2 * o - 1, l = i.a - n.a, c = ((r * l === -1 ? r : (r + l) / (1 + r * l)) + 1) / 2;
      a = 1 - c, i.r = 255 & c * i.r + a * n.r + 0.5, i.g = 255 & c * i.g + a * n.g + 0.5, i.b = 255 & c * i.b + a * n.b + 0.5, i.a = o * i.a + (1 - o) * n.a, this.rgb = i;
    }
    return this;
  }
  interpolate(e, s) {
    return e && (this._rgb = qv(this._rgb, e._rgb, s)), this;
  }
  clone() {
    return new En(this.rgb);
  }
  alpha(e) {
    return this._rgb.a = zs(e), this;
  }
  clearer(e) {
    const s = this._rgb;
    return s.a *= 1 - e, this;
  }
  greyscale() {
    const e = this._rgb, s = qn(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
    return e.r = e.g = e.b = s, this;
  }
  opaquer(e) {
    const s = this._rgb;
    return s.a *= 1 + e, this;
  }
  negate() {
    const e = this._rgb;
    return e.r = 255 - e.r, e.g = 255 - e.g, e.b = 255 - e.b, this;
  }
  lighten(e) {
    return pa(this._rgb, 2, e), this;
  }
  darken(e) {
    return pa(this._rgb, 2, -e), this;
  }
  saturate(e) {
    return pa(this._rgb, 1, e), this;
  }
  desaturate(e) {
    return pa(this._rgb, 1, -e), this;
  }
  rotate(e) {
    return Fv(this._rgb, e), this;
  }
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function hs() {
}
const Kv = /* @__PURE__ */ (() => {
  let t = 0;
  return () => t++;
})();
function be(t) {
  return t == null;
}
function Je(t) {
  if (Array.isArray && Array.isArray(t))
    return !0;
  const e = Object.prototype.toString.call(t);
  return e.slice(0, 7) === "[object" && e.slice(-6) === "Array]";
}
function Se(t) {
  return t !== null && Object.prototype.toString.call(t) === "[object Object]";
}
function nt(t) {
  return (typeof t == "number" || t instanceof Number) && isFinite(+t);
}
function Lt(t, e) {
  return nt(t) ? t : e;
}
function he(t, e) {
  return typeof t > "u" ? e : t;
}
const $v = (t, e) => typeof t == "string" && t.endsWith("%") ? parseFloat(t) / 100 : +t / e, Rh = (t, e) => typeof t == "string" && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;
function ze(t, e, s) {
  if (t && typeof t.call == "function")
    return t.apply(s, e);
}
function Ee(t, e, s, i) {
  let n, a, o;
  if (Je(t))
    for (a = t.length, n = 0; n < a; n++)
      e.call(s, t[n], n);
  else if (Se(t))
    for (o = Object.keys(t), a = o.length, n = 0; n < a; n++)
      e.call(s, t[o[n]], o[n]);
}
function Qa(t, e) {
  let s, i, n, a;
  if (!t || !e || t.length !== e.length)
    return !1;
  for (s = 0, i = t.length; s < i; ++s)
    if (n = t[s], a = e[s], n.datasetIndex !== a.datasetIndex || n.index !== a.index)
      return !1;
  return !0;
}
function Za(t) {
  if (Je(t))
    return t.map(Za);
  if (Se(t)) {
    const e = /* @__PURE__ */ Object.create(null), s = Object.keys(t), i = s.length;
    let n = 0;
    for (; n < i; ++n)
      e[s[n]] = Za(t[s[n]]);
    return e;
  }
  return t;
}
function Mh(t) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(t) === -1;
}
function Jv(t, e, s, i) {
  if (!Mh(t))
    return;
  const n = e[t], a = s[t];
  Se(n) && Se(a) ? On(n, a, i) : e[t] = Za(a);
}
function On(t, e, s) {
  const i = Je(e) ? e : [
    e
  ], n = i.length;
  if (!Se(t))
    return t;
  s = s || {};
  const a = s.merger || Jv;
  let o;
  for (let r = 0; r < n; ++r) {
    if (o = i[r], !Se(o))
      continue;
    const l = Object.keys(o);
    for (let c = 0, u = l.length; c < u; ++c)
      a(l[c], t, o, s);
  }
  return t;
}
function _n(t, e) {
  return On(t, e, {
    merger: Yv
  });
}
function Yv(t, e, s) {
  if (!Mh(t))
    return;
  const i = e[t], n = s[t];
  Se(i) && Se(n) ? _n(i, n) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = Za(n));
}
const Pu = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (t) => t,
  // default resolvers
  x: (t) => t.x,
  y: (t) => t.y
};
function Xv(t) {
  const e = t.split("."), s = [];
  let i = "";
  for (const n of e)
    i += n, i.endsWith("\\") ? i = i.slice(0, -1) + "." : (s.push(i), i = "");
  return s;
}
function Qv(t) {
  const e = Xv(t);
  return (s) => {
    for (const i of e) {
      if (i === "")
        break;
      s = s && s[i];
    }
    return s;
  };
}
function Vs(t, e) {
  return (Pu[e] || (Pu[e] = Qv(e)))(t);
}
function wl(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
const Nn = (t) => typeof t < "u", qs = (t) => typeof t == "function", Cu = (t, e) => {
  if (t.size !== e.size)
    return !1;
  for (const s of t)
    if (!e.has(s))
      return !1;
  return !0;
};
function Zv(t) {
  return t.type === "mouseup" || t.type === "click" || t.type === "contextmenu";
}
const we = Math.PI, qe = 2 * we, e_ = qe + we, eo = Number.POSITIVE_INFINITY, t_ = we / 180, ot = we / 2, Qs = we / 4, wu = we * 2 / 3, Ws = Math.log10, ls = Math.sign;
function Sn(t, e, s) {
  return Math.abs(t - e) < s;
}
function Ru(t) {
  const e = Math.round(t);
  t = Sn(t, e, t / 1e3) ? e : t;
  const s = Math.pow(10, Math.floor(Ws(t))), i = t / s;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * s;
}
function s_(t) {
  const e = [], s = Math.sqrt(t);
  let i;
  for (i = 1; i < s; i++)
    t % i === 0 && (e.push(i), e.push(t / i));
  return s === (s | 0) && e.push(s), e.sort((n, a) => n - a).pop(), e;
}
function i_(t) {
  return typeof t == "symbol" || typeof t == "object" && t !== null && !(Symbol.toPrimitive in t || "toString" in t || "valueOf" in t);
}
function Wi(t) {
  return !i_(t) && !isNaN(parseFloat(t)) && isFinite(t);
}
function n_(t, e) {
  const s = Math.round(t);
  return s - e <= t && s + e >= t;
}
function Dh(t, e, s) {
  let i, n, a;
  for (i = 0, n = t.length; i < n; i++)
    a = t[i][s], isNaN(a) || (e.min = Math.min(e.min, a), e.max = Math.max(e.max, a));
}
function Vt(t) {
  return t * (we / 180);
}
function Rl(t) {
  return t * (180 / we);
}
function Mu(t) {
  if (!nt(t))
    return;
  let e = 1, s = 0;
  for (; Math.round(t * e) / e !== t; )
    e *= 10, s++;
  return s;
}
function Ih(t, e) {
  const s = e.x - t.x, i = e.y - t.y, n = Math.sqrt(s * s + i * i);
  let a = Math.atan2(i, s);
  return a < -0.5 * we && (a += qe), {
    angle: a,
    distance: n
  };
}
function Hr(t, e) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function a_(t, e) {
  return (t - e + e_) % qe - we;
}
function mt(t) {
  return (t % qe + qe) % qe;
}
function Ln(t, e, s, i) {
  const n = mt(t), a = mt(e), o = mt(s), r = mt(a - n), l = mt(o - n), c = mt(n - a), u = mt(n - o);
  return n === a || n === o || i && a === o || r > l && c < u;
}
function dt(t, e, s) {
  return Math.max(e, Math.min(s, t));
}
function o_(t) {
  return dt(t, -32768, 32767);
}
function Ss(t, e, s, i = 1e-6) {
  return t >= Math.min(e, s) - i && t <= Math.max(e, s) + i;
}
function Ml(t, e, s) {
  s = s || ((o) => t[o] < e);
  let i = t.length - 1, n = 0, a;
  for (; i - n > 1; )
    a = n + i >> 1, s(a) ? n = a : i = a;
  return {
    lo: n,
    hi: i
  };
}
const ks = (t, e, s, i) => Ml(t, s, i ? (n) => {
  const a = t[n][e];
  return a < s || a === s && t[n + 1][e] === s;
} : (n) => t[n][e] < s), r_ = (t, e, s) => Ml(t, s, (i) => t[i][e] >= s);
function l_(t, e, s) {
  let i = 0, n = t.length;
  for (; i < n && t[i] < e; )
    i++;
  for (; n > i && t[n - 1] > s; )
    n--;
  return i > 0 || n < t.length ? t.slice(i, n) : t;
}
const Eh = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function c_(t, e) {
  if (t._chartjs) {
    t._chartjs.listeners.push(e);
    return;
  }
  Object.defineProperty(t, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        e
      ]
    }
  }), Eh.forEach((s) => {
    const i = "_onData" + wl(s), n = t[s];
    Object.defineProperty(t, s, {
      configurable: !0,
      enumerable: !1,
      value(...a) {
        const o = n.apply(this, a);
        return t._chartjs.listeners.forEach((r) => {
          typeof r[i] == "function" && r[i](...a);
        }), o;
      }
    });
  });
}
function Du(t, e) {
  const s = t._chartjs;
  if (!s)
    return;
  const i = s.listeners, n = i.indexOf(e);
  n !== -1 && i.splice(n, 1), !(i.length > 0) && (Eh.forEach((a) => {
    delete t[a];
  }), delete t._chartjs);
}
function Oh(t) {
  const e = new Set(t);
  return e.size === t.length ? t : Array.from(e);
}
const Nh = (function() {
  return typeof window > "u" ? function(t) {
    return t();
  } : window.requestAnimationFrame;
})();
function Lh(t, e) {
  let s = [], i = !1;
  return function(...n) {
    s = n, i || (i = !0, Nh.call(window, () => {
      i = !1, t.apply(e, s);
    }));
  };
}
function u_(t, e) {
  let s;
  return function(...i) {
    return e ? (clearTimeout(s), s = setTimeout(t, e, i)) : t.apply(this, i), e;
  };
}
const Dl = (t) => t === "start" ? "left" : t === "end" ? "right" : "center", pt = (t, e, s) => t === "start" ? e : t === "end" ? s : (e + s) / 2, d_ = (t, e, s, i) => t === (i ? "left" : "right") ? s : t === "center" ? (e + s) / 2 : e;
function Uh(t, e, s) {
  const i = e.length;
  let n = 0, a = i;
  if (t._sorted) {
    const { iScale: o, vScale: r, _parsed: l } = t, c = t.dataset && t.dataset.options ? t.dataset.options.spanGaps : null, u = o.axis, { min: d, max: f, minDefined: h, maxDefined: m } = o.getUserBounds();
    if (h) {
      if (n = Math.min(
        // @ts-expect-error Need to type _parsed
        ks(l, u, d).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        s ? i : ks(e, u, o.getPixelForValue(d)).lo
      ), c) {
        const g = l.slice(0, n + 1).reverse().findIndex((v) => !be(v[r.axis]));
        n -= Math.max(0, g);
      }
      n = dt(n, 0, i - 1);
    }
    if (m) {
      let g = Math.max(
        // @ts-expect-error Need to type _parsed
        ks(l, o.axis, f, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        s ? 0 : ks(e, u, o.getPixelForValue(f), !0).hi + 1
      );
      if (c) {
        const v = l.slice(g - 1).findIndex((T) => !be(T[r.axis]));
        g += Math.max(0, v);
      }
      a = dt(g, n, i) - n;
    } else
      a = i - n;
  }
  return {
    start: n,
    count: a
  };
}
function Fh(t) {
  const { xScale: e, yScale: s, _scaleRanges: i } = t, n = {
    xmin: e.min,
    xmax: e.max,
    ymin: s.min,
    ymax: s.max
  };
  if (!i)
    return t._scaleRanges = n, !0;
  const a = i.xmin !== e.min || i.xmax !== e.max || i.ymin !== s.min || i.ymax !== s.max;
  return Object.assign(i, n), a;
}
const ma = (t) => t === 0 || t === 1, Iu = (t, e, s) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * qe / s)), Eu = (t, e, s) => Math.pow(2, -10 * t) * Math.sin((t - e) * qe / s) + 1, kn = {
  linear: (t) => t,
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => -t * (t - 2),
  easeInOutQuad: (t) => (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
  easeInCubic: (t) => t * t * t,
  easeOutCubic: (t) => (t -= 1) * t * t + 1,
  easeInOutCubic: (t) => (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
  easeInQuart: (t) => t * t * t * t,
  easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
  easeInOutQuart: (t) => (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
  easeInQuint: (t) => t * t * t * t * t,
  easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
  easeInOutQuint: (t) => (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
  easeInSine: (t) => -Math.cos(t * ot) + 1,
  easeOutSine: (t) => Math.sin(t * ot),
  easeInOutSine: (t) => -0.5 * (Math.cos(we * t) - 1),
  easeInExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: (t) => t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
  easeInOutExpo: (t) => ma(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
  easeInCirc: (t) => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
  easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
  easeInOutCirc: (t) => (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
  easeInElastic: (t) => ma(t) ? t : Iu(t, 0.075, 0.3),
  easeOutElastic: (t) => ma(t) ? t : Eu(t, 0.075, 0.3),
  easeInOutElastic(t) {
    return ma(t) ? t : t < 0.5 ? 0.5 * Iu(t * 2, 0.1125, 0.45) : 0.5 + 0.5 * Eu(t * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(t) {
    return t * t * ((1.70158 + 1) * t - 1.70158);
  },
  easeOutBack(t) {
    return (t -= 1) * t * ((1.70158 + 1) * t + 1.70158) + 1;
  },
  easeInOutBack(t) {
    let e = 1.70158;
    return (t /= 0.5) < 1 ? 0.5 * (t * t * (((e *= 1.525) + 1) * t - e)) : 0.5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
  },
  easeInBounce: (t) => 1 - kn.easeOutBounce(1 - t),
  easeOutBounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  },
  easeInOutBounce: (t) => t < 0.5 ? kn.easeInBounce(t * 2) * 0.5 : kn.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
};
function Il(t) {
  if (t && typeof t == "object") {
    const e = t.toString();
    return e === "[object CanvasPattern]" || e === "[object CanvasGradient]";
  }
  return !1;
}
function Ou(t) {
  return Il(t) ? t : new En(t);
}
function or(t) {
  return Il(t) ? t : new En(t).saturate(0.5).darken(0.1).hexString();
}
const f_ = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], h_ = [
  "color",
  "borderColor",
  "backgroundColor"
];
function p_(t) {
  t.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), t.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (e) => e !== "onProgress" && e !== "onComplete" && e !== "fn"
  }), t.set("animations", {
    colors: {
      type: "color",
      properties: h_
    },
    numbers: {
      type: "number",
      properties: f_
    }
  }), t.describe("animations", {
    _fallback: "animation"
  }), t.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (e) => e | 0
        }
      }
    }
  });
}
function m_(t) {
  t.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const Nu = /* @__PURE__ */ new Map();
function g_(t, e) {
  e = e || {};
  const s = t + JSON.stringify(e);
  let i = Nu.get(s);
  return i || (i = new Intl.NumberFormat(t, e), Nu.set(s, i)), i;
}
function Gn(t, e, s) {
  return g_(e, s).format(t);
}
const Wh = {
  values(t) {
    return Je(t) ? t : "" + t;
  },
  numeric(t, e, s) {
    if (t === 0)
      return "0";
    const i = this.chart.options.locale;
    let n, a = t;
    if (s.length > 1) {
      const c = Math.max(Math.abs(s[0].value), Math.abs(s[s.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), a = b_(t, s);
    }
    const o = Ws(Math.abs(a)), r = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0), l = {
      notation: n,
      minimumFractionDigits: r,
      maximumFractionDigits: r
    };
    return Object.assign(l, this.options.ticks.format), Gn(t, i, l);
  },
  logarithmic(t, e, s) {
    if (t === 0)
      return "0";
    const i = s[e].significand || t / Math.pow(10, Math.floor(Ws(t)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(i) || e > 0.8 * s.length ? Wh.numeric.call(this, t, e, s) : "";
  }
};
function b_(t, e) {
  let s = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
  return Math.abs(s) >= 1 && t !== Math.floor(t) && (s = t - Math.floor(t)), s;
}
var So = {
  formatters: Wh
};
function y_(t) {
  t.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (e, s) => s.lineWidth,
      tickColor: (e, s) => s.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: So.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), t.route("scale.ticks", "color", "", "color"), t.route("scale.grid", "color", "", "borderColor"), t.route("scale.border", "color", "", "borderColor"), t.route("scale.title", "color", "", "color"), t.describe("scale", {
    _fallback: !1,
    _scriptable: (e) => !e.startsWith("before") && !e.startsWith("after") && e !== "callback" && e !== "parser",
    _indexable: (e) => e !== "borderDash" && e !== "tickBorderDash" && e !== "dash"
  }), t.describe("scales", {
    _fallback: "scale"
  }), t.describe("scale.ticks", {
    _scriptable: (e) => e !== "backdropPadding" && e !== "callback",
    _indexable: (e) => e !== "backdropPadding"
  });
}
const fi = /* @__PURE__ */ Object.create(null), jr = /* @__PURE__ */ Object.create(null);
function Tn(t, e) {
  if (!e)
    return t;
  const s = e.split(".");
  for (let i = 0, n = s.length; i < n; ++i) {
    const a = s[i];
    t = t[a] || (t[a] = /* @__PURE__ */ Object.create(null));
  }
  return t;
}
function rr(t, e, s) {
  return typeof e == "string" ? On(Tn(t, e), s) : On(Tn(t, ""), e);
}
class v_ {
  constructor(e, s) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (i, n) => or(n.backgroundColor), this.hoverBorderColor = (i, n) => or(n.borderColor), this.hoverColor = (i, n) => or(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(e), this.apply(s);
  }
  set(e, s) {
    return rr(this, e, s);
  }
  get(e) {
    return Tn(this, e);
  }
  describe(e, s) {
    return rr(jr, e, s);
  }
  override(e, s) {
    return rr(fi, e, s);
  }
  route(e, s, i, n) {
    const a = Tn(this, e), o = Tn(this, i), r = "_" + s;
    Object.defineProperties(a, {
      [r]: {
        value: a[s],
        writable: !0
      },
      [s]: {
        enumerable: !0,
        get() {
          const l = this[r], c = o[n];
          return Se(l) ? Object.assign({}, c, l) : he(l, c);
        },
        set(l) {
          this[r] = l;
        }
      }
    });
  }
  apply(e) {
    e.forEach((s) => s(this));
  }
}
var Ye = /* @__PURE__ */ new v_({
  _scriptable: (t) => !t.startsWith("on"),
  _indexable: (t) => t !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  p_,
  m_,
  y_
]);
function __(t) {
  return !t || be(t.size) || be(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
}
function to(t, e, s, i, n) {
  let a = e[n];
  return a || (a = e[n] = t.measureText(n).width, s.push(n)), a > i && (i = a), i;
}
function S_(t, e, s, i) {
  i = i || {};
  let n = i.data = i.data || {}, a = i.garbageCollect = i.garbageCollect || [];
  i.font !== e && (n = i.data = {}, a = i.garbageCollect = [], i.font = e), t.save(), t.font = e;
  let o = 0;
  const r = s.length;
  let l, c, u, d, f;
  for (l = 0; l < r; l++)
    if (d = s[l], d != null && !Je(d))
      o = to(t, n, a, o, d);
    else if (Je(d))
      for (c = 0, u = d.length; c < u; c++)
        f = d[c], f != null && !Je(f) && (o = to(t, n, a, o, f));
  t.restore();
  const h = a.length / 2;
  if (h > s.length) {
    for (l = 0; l < h; l++)
      delete n[a[l]];
    a.splice(0, h);
  }
  return o;
}
function Zs(t, e, s) {
  const i = t.currentDevicePixelRatio, n = s !== 0 ? Math.max(s / 2, 0.5) : 0;
  return Math.round((e - n) * i) / i + n;
}
function Lu(t, e) {
  !e && !t || (e = e || t.getContext("2d"), e.save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore());
}
function zr(t, e, s, i) {
  Bh(t, e, s, i, null);
}
function Bh(t, e, s, i, n) {
  let a, o, r, l, c, u, d, f;
  const h = e.pointStyle, m = e.rotation, g = e.radius;
  let v = (m || 0) * t_;
  if (h && typeof h == "object" && (a = h.toString(), a === "[object HTMLImageElement]" || a === "[object HTMLCanvasElement]")) {
    t.save(), t.translate(s, i), t.rotate(v), t.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height), t.restore();
    return;
  }
  if (!(isNaN(g) || g <= 0)) {
    switch (t.beginPath(), h) {
      // Default includes circle
      default:
        n ? t.ellipse(s, i, n / 2, g, 0, 0, qe) : t.arc(s, i, g, 0, qe), t.closePath();
        break;
      case "triangle":
        u = n ? n / 2 : g, t.moveTo(s + Math.sin(v) * u, i - Math.cos(v) * g), v += wu, t.lineTo(s + Math.sin(v) * u, i - Math.cos(v) * g), v += wu, t.lineTo(s + Math.sin(v) * u, i - Math.cos(v) * g), t.closePath();
        break;
      case "rectRounded":
        c = g * 0.516, l = g - c, o = Math.cos(v + Qs) * l, d = Math.cos(v + Qs) * (n ? n / 2 - c : l), r = Math.sin(v + Qs) * l, f = Math.sin(v + Qs) * (n ? n / 2 - c : l), t.arc(s - d, i - r, c, v - we, v - ot), t.arc(s + f, i - o, c, v - ot, v), t.arc(s + d, i + r, c, v, v + ot), t.arc(s - f, i + o, c, v + ot, v + we), t.closePath();
        break;
      case "rect":
        if (!m) {
          l = Math.SQRT1_2 * g, u = n ? n / 2 : l, t.rect(s - u, i - l, 2 * u, 2 * l);
          break;
        }
        v += Qs;
      /* falls through */
      case "rectRot":
        d = Math.cos(v) * (n ? n / 2 : g), o = Math.cos(v) * g, r = Math.sin(v) * g, f = Math.sin(v) * (n ? n / 2 : g), t.moveTo(s - d, i - r), t.lineTo(s + f, i - o), t.lineTo(s + d, i + r), t.lineTo(s - f, i + o), t.closePath();
        break;
      case "crossRot":
        v += Qs;
      /* falls through */
      case "cross":
        d = Math.cos(v) * (n ? n / 2 : g), o = Math.cos(v) * g, r = Math.sin(v) * g, f = Math.sin(v) * (n ? n / 2 : g), t.moveTo(s - d, i - r), t.lineTo(s + d, i + r), t.moveTo(s + f, i - o), t.lineTo(s - f, i + o);
        break;
      case "star":
        d = Math.cos(v) * (n ? n / 2 : g), o = Math.cos(v) * g, r = Math.sin(v) * g, f = Math.sin(v) * (n ? n / 2 : g), t.moveTo(s - d, i - r), t.lineTo(s + d, i + r), t.moveTo(s + f, i - o), t.lineTo(s - f, i + o), v += Qs, d = Math.cos(v) * (n ? n / 2 : g), o = Math.cos(v) * g, r = Math.sin(v) * g, f = Math.sin(v) * (n ? n / 2 : g), t.moveTo(s - d, i - r), t.lineTo(s + d, i + r), t.moveTo(s + f, i - o), t.lineTo(s - f, i + o);
        break;
      case "line":
        o = n ? n / 2 : Math.cos(v) * g, r = Math.sin(v) * g, t.moveTo(s - o, i - r), t.lineTo(s + o, i + r);
        break;
      case "dash":
        t.moveTo(s, i), t.lineTo(s + Math.cos(v) * (n ? n / 2 : g), i + Math.sin(v) * g);
        break;
      case !1:
        t.closePath();
        break;
    }
    t.fill(), e.borderWidth > 0 && t.stroke();
  }
}
function Ts(t, e, s) {
  return s = s || 0.5, !e || t && t.x > e.left - s && t.x < e.right + s && t.y > e.top - s && t.y < e.bottom + s;
}
function ko(t, e) {
  t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
}
function To(t) {
  t.restore();
}
function k_(t, e, s, i, n) {
  if (!e)
    return t.lineTo(s.x, s.y);
  if (n === "middle") {
    const a = (e.x + s.x) / 2;
    t.lineTo(a, e.y), t.lineTo(a, s.y);
  } else n === "after" != !!i ? t.lineTo(e.x, s.y) : t.lineTo(s.x, e.y);
  t.lineTo(s.x, s.y);
}
function T_(t, e, s, i) {
  if (!e)
    return t.lineTo(s.x, s.y);
  t.bezierCurveTo(i ? e.cp1x : e.cp2x, i ? e.cp1y : e.cp2y, i ? s.cp2x : s.cp1x, i ? s.cp2y : s.cp1y, s.x, s.y);
}
function x_(t, e) {
  e.translation && t.translate(e.translation[0], e.translation[1]), be(e.rotation) || t.rotate(e.rotation), e.color && (t.fillStyle = e.color), e.textAlign && (t.textAlign = e.textAlign), e.textBaseline && (t.textBaseline = e.textBaseline);
}
function A_(t, e, s, i, n) {
  if (n.strikethrough || n.underline) {
    const a = t.measureText(i), o = e - a.actualBoundingBoxLeft, r = e + a.actualBoundingBoxRight, l = s - a.actualBoundingBoxAscent, c = s + a.actualBoundingBoxDescent, u = n.strikethrough ? (l + c) / 2 : c;
    t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = n.decorationWidth || 2, t.moveTo(o, u), t.lineTo(r, u), t.stroke();
  }
}
function P_(t, e) {
  const s = t.fillStyle;
  t.fillStyle = e.color, t.fillRect(e.left, e.top, e.width, e.height), t.fillStyle = s;
}
function hi(t, e, s, i, n, a = {}) {
  const o = Je(e) ? e : [
    e
  ], r = a.strokeWidth > 0 && a.strokeColor !== "";
  let l, c;
  for (t.save(), t.font = n.string, x_(t, a), l = 0; l < o.length; ++l)
    c = o[l], a.backdrop && P_(t, a.backdrop), r && (a.strokeColor && (t.strokeStyle = a.strokeColor), be(a.strokeWidth) || (t.lineWidth = a.strokeWidth), t.strokeText(c, s, i, a.maxWidth)), t.fillText(c, s, i, a.maxWidth), A_(t, s, i, c, a), i += Number(n.lineHeight);
  t.restore();
}
function Un(t, e) {
  const { x: s, y: i, w: n, h: a, radius: o } = e;
  t.arc(s + o.topLeft, i + o.topLeft, o.topLeft, 1.5 * we, we, !0), t.lineTo(s, i + a - o.bottomLeft), t.arc(s + o.bottomLeft, i + a - o.bottomLeft, o.bottomLeft, we, ot, !0), t.lineTo(s + n - o.bottomRight, i + a), t.arc(s + n - o.bottomRight, i + a - o.bottomRight, o.bottomRight, ot, 0, !0), t.lineTo(s + n, i + o.topRight), t.arc(s + n - o.topRight, i + o.topRight, o.topRight, 0, -ot, !0), t.lineTo(s + o.topLeft, i);
}
const C_ = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, w_ = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function R_(t, e) {
  const s = ("" + t).match(C_);
  if (!s || s[1] === "normal")
    return e * 1.2;
  switch (t = +s[2], s[3]) {
    case "px":
      return t;
    case "%":
      t /= 100;
      break;
  }
  return e * t;
}
const M_ = (t) => +t || 0;
function El(t, e) {
  const s = {}, i = Se(e), n = i ? Object.keys(e) : e, a = Se(t) ? i ? (o) => he(t[o], t[e[o]]) : (o) => t[o] : () => t;
  for (const o of n)
    s[o] = M_(a(o));
  return s;
}
function Hh(t) {
  return El(t, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function ui(t) {
  return El(t, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function _t(t) {
  const e = Hh(t);
  return e.width = e.left + e.right, e.height = e.top + e.bottom, e;
}
function ct(t, e) {
  t = t || {}, e = e || Ye.font;
  let s = he(t.size, e.size);
  typeof s == "string" && (s = parseInt(s, 10));
  let i = he(t.style, e.style);
  i && !("" + i).match(w_) && (console.warn('Invalid font style specified: "' + i + '"'), i = void 0);
  const n = {
    family: he(t.family, e.family),
    lineHeight: R_(he(t.lineHeight, e.lineHeight), s),
    size: s,
    style: i,
    weight: he(t.weight, e.weight),
    string: ""
  };
  return n.string = __(n), n;
}
function rn(t, e, s, i) {
  let n, a, o;
  for (n = 0, a = t.length; n < a; ++n)
    if (o = t[n], o !== void 0 && o !== void 0)
      return o;
}
function D_(t, e, s) {
  const { min: i, max: n } = t, a = Rh(e, (n - i) / 2), o = (r, l) => s && r === 0 ? 0 : r + l;
  return {
    min: o(i, -Math.abs(a)),
    max: o(n, a)
  };
}
function Gs(t, e) {
  return Object.assign(Object.create(t), e);
}
function Ol(t, e = [
  ""
], s, i, n = () => t[0]) {
  const a = s || t;
  typeof i > "u" && (i = qh("_fallback", t));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: t,
    _rootScopes: a,
    _fallback: i,
    _getTarget: n,
    override: (r) => Ol([
      r,
      ...t
    ], e, a, i)
  };
  return new Proxy(o, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(r, l) {
      return delete r[l], delete r._keys, delete t[0][l], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(r, l) {
      return zh(r, l, () => W_(l, e, t, r));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(r, l) {
      return Reflect.getOwnPropertyDescriptor(r._scopes[0], l);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(r, l) {
      return Fu(r).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(r) {
      return Fu(r);
    },
    /**
    * A trap for setting property values.
    */
    set(r, l, c) {
      const u = r._storage || (r._storage = n());
      return r[l] = u[l] = c, delete r._keys, !0;
    }
  });
}
function Bi(t, e, s, i) {
  const n = {
    _cacheable: !1,
    _proxy: t,
    _context: e,
    _subProxy: s,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: jh(t, i),
    setContext: (a) => Bi(t, a, s, i),
    override: (a) => Bi(t.override(a), e, s, i)
  };
  return new Proxy(n, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, o) {
      return delete a[o], delete t[o], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(a, o, r) {
      return zh(a, o, () => E_(a, o, r));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(a, o) {
      return a._descriptors.allKeys ? Reflect.has(t, o) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(t, o);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t);
    },
    /**
    * A trap for the in operator.
    */
    has(a, o) {
      return Reflect.has(t, o);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(t);
    },
    /**
    * A trap for setting property values.
    */
    set(a, o, r) {
      return t[o] = r, delete a[o], !0;
    }
  });
}
function jh(t, e = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: s = e.scriptable, _indexable: i = e.indexable, _allKeys: n = e.allKeys } = t;
  return {
    allKeys: n,
    scriptable: s,
    indexable: i,
    isScriptable: qs(s) ? s : () => s,
    isIndexable: qs(i) ? i : () => i
  };
}
const I_ = (t, e) => t ? t + wl(e) : e, Nl = (t, e) => Se(e) && t !== "adapters" && (Object.getPrototypeOf(e) === null || e.constructor === Object);
function zh(t, e, s) {
  if (Object.prototype.hasOwnProperty.call(t, e) || e === "constructor")
    return t[e];
  const i = s();
  return t[e] = i, i;
}
function E_(t, e, s) {
  const { _proxy: i, _context: n, _subProxy: a, _descriptors: o } = t;
  let r = i[e];
  return qs(r) && o.isScriptable(e) && (r = O_(e, r, t, s)), Je(r) && r.length && (r = N_(e, r, t, o.isIndexable)), Nl(e, r) && (r = Bi(r, n, a && a[e], o)), r;
}
function O_(t, e, s, i) {
  const { _proxy: n, _context: a, _subProxy: o, _stack: r } = s;
  if (r.has(t))
    throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + t);
  r.add(t);
  let l = e(a, o || i);
  return r.delete(t), Nl(t, l) && (l = Ll(n._scopes, n, t, l)), l;
}
function N_(t, e, s, i) {
  const { _proxy: n, _context: a, _subProxy: o, _descriptors: r } = s;
  if (typeof a.index < "u" && i(t))
    return e[a.index % e.length];
  if (Se(e[0])) {
    const l = e, c = n._scopes.filter((u) => u !== l);
    e = [];
    for (const u of l) {
      const d = Ll(c, n, t, u);
      e.push(Bi(d, a, o && o[t], r));
    }
  }
  return e;
}
function Vh(t, e, s) {
  return qs(t) ? t(e, s) : t;
}
const L_ = (t, e) => t === !0 ? e : typeof t == "string" ? Vs(e, t) : void 0;
function U_(t, e, s, i, n) {
  for (const a of e) {
    const o = L_(s, a);
    if (o) {
      t.add(o);
      const r = Vh(o._fallback, s, n);
      if (typeof r < "u" && r !== s && r !== i)
        return r;
    } else if (o === !1 && typeof i < "u" && s !== i)
      return null;
  }
  return !1;
}
function Ll(t, e, s, i) {
  const n = e._rootScopes, a = Vh(e._fallback, s, i), o = [
    ...t,
    ...n
  ], r = /* @__PURE__ */ new Set();
  r.add(i);
  let l = Uu(r, o, s, a || s, i);
  return l === null || typeof a < "u" && a !== s && (l = Uu(r, o, a, l, i), l === null) ? !1 : Ol(Array.from(r), [
    ""
  ], n, a, () => F_(e, s, i));
}
function Uu(t, e, s, i, n) {
  for (; s; )
    s = U_(t, e, s, i, n);
  return s;
}
function F_(t, e, s) {
  const i = t._getTarget();
  e in i || (i[e] = {});
  const n = i[e];
  return Je(n) && Se(s) ? s : n || {};
}
function W_(t, e, s, i) {
  let n;
  for (const a of e)
    if (n = qh(I_(a, t), s), typeof n < "u")
      return Nl(t, n) ? Ll(s, i, t, n) : n;
}
function qh(t, e) {
  for (const s of e) {
    if (!s)
      continue;
    const i = s[t];
    if (typeof i < "u")
      return i;
  }
}
function Fu(t) {
  let e = t._keys;
  return e || (e = t._keys = B_(t._scopes)), e;
}
function B_(t) {
  const e = /* @__PURE__ */ new Set();
  for (const s of t)
    for (const i of Object.keys(s).filter((n) => !n.startsWith("_")))
      e.add(i);
  return Array.from(e);
}
function Gh(t, e, s, i) {
  const { iScale: n } = t, { key: a = "r" } = this._parsing, o = new Array(i);
  let r, l, c, u;
  for (r = 0, l = i; r < l; ++r)
    c = r + s, u = e[c], o[r] = {
      r: n.parse(Vs(u, a), c)
    };
  return o;
}
const H_ = Number.EPSILON || 1e-14, Hi = (t, e) => e < t.length && !t[e].skip && t[e], Kh = (t) => t === "x" ? "y" : "x";
function j_(t, e, s, i) {
  const n = t.skip ? e : t, a = e, o = s.skip ? e : s, r = Hr(a, n), l = Hr(o, a);
  let c = r / (r + l), u = l / (r + l);
  c = isNaN(c) ? 0 : c, u = isNaN(u) ? 0 : u;
  const d = i * c, f = i * u;
  return {
    previous: {
      x: a.x - d * (o.x - n.x),
      y: a.y - d * (o.y - n.y)
    },
    next: {
      x: a.x + f * (o.x - n.x),
      y: a.y + f * (o.y - n.y)
    }
  };
}
function z_(t, e, s) {
  const i = t.length;
  let n, a, o, r, l, c = Hi(t, 0);
  for (let u = 0; u < i - 1; ++u)
    if (l = c, c = Hi(t, u + 1), !(!l || !c)) {
      if (Sn(e[u], 0, H_)) {
        s[u] = s[u + 1] = 0;
        continue;
      }
      n = s[u] / e[u], a = s[u + 1] / e[u], r = Math.pow(n, 2) + Math.pow(a, 2), !(r <= 9) && (o = 3 / Math.sqrt(r), s[u] = n * o * e[u], s[u + 1] = a * o * e[u]);
    }
}
function V_(t, e, s = "x") {
  const i = Kh(s), n = t.length;
  let a, o, r, l = Hi(t, 0);
  for (let c = 0; c < n; ++c) {
    if (o = r, r = l, l = Hi(t, c + 1), !r)
      continue;
    const u = r[s], d = r[i];
    o && (a = (u - o[s]) / 3, r[`cp1${s}`] = u - a, r[`cp1${i}`] = d - a * e[c]), l && (a = (l[s] - u) / 3, r[`cp2${s}`] = u + a, r[`cp2${i}`] = d + a * e[c]);
  }
}
function q_(t, e = "x") {
  const s = Kh(e), i = t.length, n = Array(i).fill(0), a = Array(i);
  let o, r, l, c = Hi(t, 0);
  for (o = 0; o < i; ++o)
    if (r = l, l = c, c = Hi(t, o + 1), !!l) {
      if (c) {
        const u = c[e] - l[e];
        n[o] = u !== 0 ? (c[s] - l[s]) / u : 0;
      }
      a[o] = r ? c ? ls(n[o - 1]) !== ls(n[o]) ? 0 : (n[o - 1] + n[o]) / 2 : n[o - 1] : n[o];
    }
  z_(t, n, a), V_(t, a, e);
}
function ga(t, e, s) {
  return Math.max(Math.min(t, s), e);
}
function G_(t, e) {
  let s, i, n, a, o, r = Ts(t[0], e);
  for (s = 0, i = t.length; s < i; ++s)
    o = a, a = r, r = s < i - 1 && Ts(t[s + 1], e), a && (n = t[s], o && (n.cp1x = ga(n.cp1x, e.left, e.right), n.cp1y = ga(n.cp1y, e.top, e.bottom)), r && (n.cp2x = ga(n.cp2x, e.left, e.right), n.cp2y = ga(n.cp2y, e.top, e.bottom)));
}
function K_(t, e, s, i, n) {
  let a, o, r, l;
  if (e.spanGaps && (t = t.filter((c) => !c.skip)), e.cubicInterpolationMode === "monotone")
    q_(t, n);
  else {
    let c = i ? t[t.length - 1] : t[0];
    for (a = 0, o = t.length; a < o; ++a)
      r = t[a], l = j_(c, r, t[Math.min(a + 1, o - (i ? 0 : 1)) % o], e.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, c = r;
  }
  e.capBezierPoints && G_(t, s);
}
function Ul() {
  return typeof window < "u" && typeof document < "u";
}
function Fl(t) {
  let e = t.parentNode;
  return e && e.toString() === "[object ShadowRoot]" && (e = e.host), e;
}
function so(t, e, s) {
  let i;
  return typeof t == "string" ? (i = parseInt(t, 10), t.indexOf("%") !== -1 && (i = i / 100 * e.parentNode[s])) : i = t, i;
}
const xo = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
function $_(t, e) {
  return xo(t).getPropertyValue(e);
}
const J_ = [
  "top",
  "right",
  "bottom",
  "left"
];
function di(t, e, s) {
  const i = {};
  s = s ? "-" + s : "";
  for (let n = 0; n < 4; n++) {
    const a = J_[n];
    i[a] = parseFloat(t[e + "-" + a + s]) || 0;
  }
  return i.width = i.left + i.right, i.height = i.top + i.bottom, i;
}
const Y_ = (t, e, s) => (t > 0 || e > 0) && (!s || !s.shadowRoot);
function X_(t, e) {
  const s = t.touches, i = s && s.length ? s[0] : t, { offsetX: n, offsetY: a } = i;
  let o = !1, r, l;
  if (Y_(n, a, t.target))
    r = n, l = a;
  else {
    const c = e.getBoundingClientRect();
    r = i.clientX - c.left, l = i.clientY - c.top, o = !0;
  }
  return {
    x: r,
    y: l,
    box: o
  };
}
function ii(t, e) {
  if ("native" in t)
    return t;
  const { canvas: s, currentDevicePixelRatio: i } = e, n = xo(s), a = n.boxSizing === "border-box", o = di(n, "padding"), r = di(n, "border", "width"), { x: l, y: c, box: u } = X_(t, s), d = o.left + (u && r.left), f = o.top + (u && r.top);
  let { width: h, height: m } = e;
  return a && (h -= o.width + r.width, m -= o.height + r.height), {
    x: Math.round((l - d) / h * s.width / i),
    y: Math.round((c - f) / m * s.height / i)
  };
}
function Q_(t, e, s) {
  let i, n;
  if (e === void 0 || s === void 0) {
    const a = t && Fl(t);
    if (!a)
      e = t.clientWidth, s = t.clientHeight;
    else {
      const o = a.getBoundingClientRect(), r = xo(a), l = di(r, "border", "width"), c = di(r, "padding");
      e = o.width - c.width - l.width, s = o.height - c.height - l.height, i = so(r.maxWidth, a, "clientWidth"), n = so(r.maxHeight, a, "clientHeight");
    }
  }
  return {
    width: e,
    height: s,
    maxWidth: i || eo,
    maxHeight: n || eo
  };
}
const Bs = (t) => Math.round(t * 10) / 10;
function Z_(t, e, s, i) {
  const n = xo(t), a = di(n, "margin"), o = so(n.maxWidth, t, "clientWidth") || eo, r = so(n.maxHeight, t, "clientHeight") || eo, l = Q_(t, e, s);
  let { width: c, height: u } = l;
  if (n.boxSizing === "content-box") {
    const f = di(n, "border", "width"), h = di(n, "padding");
    c -= h.width + f.width, u -= h.height + f.height;
  }
  return c = Math.max(0, c - a.width), u = Math.max(0, i ? c / i : u - a.height), c = Bs(Math.min(c, o, l.maxWidth)), u = Bs(Math.min(u, r, l.maxHeight)), c && !u && (u = Bs(c / 2)), (e !== void 0 || s !== void 0) && i && l.height && u > l.height && (u = l.height, c = Bs(Math.floor(u * i))), {
    width: c,
    height: u
  };
}
function Wu(t, e, s) {
  const i = e || 1, n = Bs(t.height * i), a = Bs(t.width * i);
  t.height = Bs(t.height), t.width = Bs(t.width);
  const o = t.canvas;
  return o.style && (s || !o.style.height && !o.style.width) && (o.style.height = `${t.height}px`, o.style.width = `${t.width}px`), t.currentDevicePixelRatio !== i || o.height !== n || o.width !== a ? (t.currentDevicePixelRatio = i, o.height = n, o.width = a, t.ctx.setTransform(i, 0, 0, i, 0, 0), !0) : !1;
}
const eS = (function() {
  let t = !1;
  try {
    const e = {
      get passive() {
        return t = !0, !1;
      }
    };
    Ul() && (window.addEventListener("test", null, e), window.removeEventListener("test", null, e));
  } catch {
  }
  return t;
})();
function Bu(t, e) {
  const s = $_(t, e), i = s && s.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function ni(t, e, s, i) {
  return {
    x: t.x + s * (e.x - t.x),
    y: t.y + s * (e.y - t.y)
  };
}
function tS(t, e, s, i) {
  return {
    x: t.x + s * (e.x - t.x),
    y: i === "middle" ? s < 0.5 ? t.y : e.y : i === "after" ? s < 1 ? t.y : e.y : s > 0 ? e.y : t.y
  };
}
function sS(t, e, s, i) {
  const n = {
    x: t.cp2x,
    y: t.cp2y
  }, a = {
    x: e.cp1x,
    y: e.cp1y
  }, o = ni(t, n, s), r = ni(n, a, s), l = ni(a, e, s), c = ni(o, r, s), u = ni(r, l, s);
  return ni(c, u, s);
}
const iS = function(t, e) {
  return {
    x(s) {
      return t + t + e - s;
    },
    setWidth(s) {
      e = s;
    },
    textAlign(s) {
      return s === "center" ? s : s === "right" ? "left" : "right";
    },
    xPlus(s, i) {
      return s - i;
    },
    leftForLtr(s, i) {
      return s - i;
    }
  };
}, nS = function() {
  return {
    x(t) {
      return t;
    },
    setWidth(t) {
    },
    textAlign(t) {
      return t;
    },
    xPlus(t, e) {
      return t + e;
    },
    leftForLtr(t, e) {
      return t;
    }
  };
};
function Ei(t, e, s) {
  return t ? iS(e, s) : nS();
}
function $h(t, e) {
  let s, i;
  (e === "ltr" || e === "rtl") && (s = t.canvas.style, i = [
    s.getPropertyValue("direction"),
    s.getPropertyPriority("direction")
  ], s.setProperty("direction", e, "important"), t.prevTextDirection = i);
}
function Jh(t, e) {
  e !== void 0 && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]));
}
function Yh(t) {
  return t === "angle" ? {
    between: Ln,
    compare: a_,
    normalize: mt
  } : {
    between: Ss,
    compare: (e, s) => e - s,
    normalize: (e) => e
  };
}
function Hu({ start: t, end: e, count: s, loop: i, style: n }) {
  return {
    start: t % s,
    end: e % s,
    loop: i && (e - t + 1) % s === 0,
    style: n
  };
}
function aS(t, e, s) {
  const { property: i, start: n, end: a } = s, { between: o, normalize: r } = Yh(i), l = e.length;
  let { start: c, end: u, loop: d } = t, f, h;
  if (d) {
    for (c += l, u += l, f = 0, h = l; f < h && o(r(e[c % l][i]), n, a); ++f)
      c--, u--;
    c %= l, u %= l;
  }
  return u < c && (u += l), {
    start: c,
    end: u,
    loop: d,
    style: t.style
  };
}
function Xh(t, e, s) {
  if (!s)
    return [
      t
    ];
  const { property: i, start: n, end: a } = s, o = e.length, { compare: r, between: l, normalize: c } = Yh(i), { start: u, end: d, loop: f, style: h } = aS(t, e, s), m = [];
  let g = !1, v = null, T, x, C;
  const P = () => l(n, C, T) && r(n, C) !== 0, M = () => r(a, T) === 0 || l(a, C, T), w = () => g || P(), O = () => !g || M();
  for (let W = u, J = u; W <= d; ++W)
    x = e[W % o], !x.skip && (T = c(x[i]), T !== C && (g = l(T, n, a), v === null && w() && (v = r(T, n) === 0 ? W : J), v !== null && O() && (m.push(Hu({
      start: v,
      end: W,
      loop: f,
      count: o,
      style: h
    })), v = null), J = W, C = T));
  return v !== null && m.push(Hu({
    start: v,
    end: d,
    loop: f,
    count: o,
    style: h
  })), m;
}
function Qh(t, e) {
  const s = [], i = t.segments;
  for (let n = 0; n < i.length; n++) {
    const a = Xh(i[n], t.points, e);
    a.length && s.push(...a);
  }
  return s;
}
function oS(t, e, s, i) {
  let n = 0, a = e - 1;
  if (s && !i)
    for (; n < e && !t[n].skip; )
      n++;
  for (; n < e && t[n].skip; )
    n++;
  for (n %= e, s && (a += n); a > n && t[a % e].skip; )
    a--;
  return a %= e, {
    start: n,
    end: a
  };
}
function rS(t, e, s, i) {
  const n = t.length, a = [];
  let o = e, r = t[e], l;
  for (l = e + 1; l <= s; ++l) {
    const c = t[l % n];
    c.skip || c.stop ? r.skip || (i = !1, a.push({
      start: e % n,
      end: (l - 1) % n,
      loop: i
    }), e = o = c.stop ? l : null) : (o = l, r.skip && (e = l)), r = c;
  }
  return o !== null && a.push({
    start: e % n,
    end: o % n,
    loop: i
  }), a;
}
function lS(t, e) {
  const s = t.points, i = t.options.spanGaps, n = s.length;
  if (!n)
    return [];
  const a = !!t._loop, { start: o, end: r } = oS(s, n, a, i);
  if (i === !0)
    return ju(t, [
      {
        start: o,
        end: r,
        loop: a
      }
    ], s, e);
  const l = r < o ? r + n : r, c = !!t._fullLoop && o === 0 && r === n - 1;
  return ju(t, rS(s, o, l, c), s, e);
}
function ju(t, e, s, i) {
  return !i || !i.setContext || !s ? e : cS(t, e, s, i);
}
function cS(t, e, s, i) {
  const n = t._chart.getContext(), a = zu(t.options), { _datasetIndex: o, options: { spanGaps: r } } = t, l = s.length, c = [];
  let u = a, d = e[0].start, f = d;
  function h(m, g, v, T) {
    const x = r ? -1 : 1;
    if (m !== g) {
      for (m += l; s[m % l].skip; )
        m -= x;
      for (; s[g % l].skip; )
        g += x;
      m % l !== g % l && (c.push({
        start: m % l,
        end: g % l,
        loop: v,
        style: T
      }), u = T, d = g % l);
    }
  }
  for (const m of e) {
    d = r ? d : m.start;
    let g = s[d % l], v;
    for (f = d + 1; f <= m.end; f++) {
      const T = s[f % l];
      v = zu(i.setContext(Gs(n, {
        type: "segment",
        p0: g,
        p1: T,
        p0DataIndex: (f - 1) % l,
        p1DataIndex: f % l,
        datasetIndex: o
      }))), uS(v, u) && h(d, f - 1, m.loop, u), g = T, u = v;
    }
    d < f - 1 && h(d, f - 1, m.loop, u);
  }
  return c;
}
function zu(t) {
  return {
    backgroundColor: t.backgroundColor,
    borderCapStyle: t.borderCapStyle,
    borderDash: t.borderDash,
    borderDashOffset: t.borderDashOffset,
    borderJoinStyle: t.borderJoinStyle,
    borderWidth: t.borderWidth,
    borderColor: t.borderColor
  };
}
function uS(t, e) {
  if (!e)
    return !1;
  const s = [], i = function(n, a) {
    return Il(a) ? (s.includes(a) || s.push(a), s.indexOf(a)) : a;
  };
  return JSON.stringify(t, i) !== JSON.stringify(e, i);
}
function ba(t, e, s) {
  return t.options.clip ? t[s] : e[s];
}
function dS(t, e) {
  const { xScale: s, yScale: i } = t;
  return s && i ? {
    left: ba(s, e, "left"),
    right: ba(s, e, "right"),
    top: ba(i, e, "top"),
    bottom: ba(i, e, "bottom")
  } : e;
}
function Zh(t, e) {
  const s = e._clip;
  if (s.disabled)
    return !1;
  const i = dS(e, t.chartArea);
  return {
    left: s.left === !1 ? 0 : i.left - (s.left === !0 ? 0 : s.left),
    right: s.right === !1 ? t.width : i.right + (s.right === !0 ? 0 : s.right),
    top: s.top === !1 ? 0 : i.top - (s.top === !0 ? 0 : s.top),
    bottom: s.bottom === !1 ? t.height : i.bottom + (s.bottom === !0 ? 0 : s.bottom)
  };
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
class fS {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(e, s, i, n) {
    const a = s.listeners[n], o = s.duration;
    a.forEach((r) => r({
      chart: e,
      initial: s.initial,
      numSteps: o,
      currentStep: Math.min(i - s.start, o)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = Nh.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(e = Date.now()) {
    let s = 0;
    this._charts.forEach((i, n) => {
      if (!i.running || !i.items.length)
        return;
      const a = i.items;
      let o = a.length - 1, r = !1, l;
      for (; o >= 0; --o)
        l = a[o], l._active ? (l._total > i.duration && (i.duration = l._total), l.tick(e), r = !0) : (a[o] = a[a.length - 1], a.pop());
      r && (n.draw(), this._notify(n, i, e, "progress")), a.length || (i.running = !1, this._notify(n, i, e, "complete"), i.initial = !1), s += a.length;
    }), this._lastDate = e, s === 0 && (this._running = !1);
  }
  _getAnims(e) {
    const s = this._charts;
    let i = s.get(e);
    return i || (i = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, s.set(e, i)), i;
  }
  listen(e, s, i) {
    this._getAnims(e).listeners[s].push(i);
  }
  add(e, s) {
    !s || !s.length || this._getAnims(e).items.push(...s);
  }
  has(e) {
    return this._getAnims(e).items.length > 0;
  }
  start(e) {
    const s = this._charts.get(e);
    s && (s.running = !0, s.start = Date.now(), s.duration = s.items.reduce((i, n) => Math.max(i, n._duration), 0), this._refresh());
  }
  running(e) {
    if (!this._running)
      return !1;
    const s = this._charts.get(e);
    return !(!s || !s.running || !s.items.length);
  }
  stop(e) {
    const s = this._charts.get(e);
    if (!s || !s.items.length)
      return;
    const i = s.items;
    let n = i.length - 1;
    for (; n >= 0; --n)
      i[n].cancel();
    s.items = [], this._notify(e, s, Date.now(), "complete");
  }
  remove(e) {
    return this._charts.delete(e);
  }
}
var ps = /* @__PURE__ */ new fS();
const Vu = "transparent", hS = {
  boolean(t, e, s) {
    return s > 0.5 ? e : t;
  },
  color(t, e, s) {
    const i = Ou(t || Vu), n = i.valid && Ou(e || Vu);
    return n && n.valid ? n.mix(i, s).hexString() : e;
  },
  number(t, e, s) {
    return t + (e - t) * s;
  }
};
class pS {
  constructor(e, s, i, n) {
    const a = s[i];
    n = rn([
      e.to,
      n,
      a,
      e.from
    ]);
    const o = rn([
      e.from,
      a,
      n
    ]);
    this._active = !0, this._fn = e.fn || hS[e.type || typeof o], this._easing = kn[e.easing] || kn.linear, this._start = Math.floor(Date.now() + (e.delay || 0)), this._duration = this._total = Math.floor(e.duration), this._loop = !!e.loop, this._target = s, this._prop = i, this._from = o, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(e, s, i) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], a = i - this._start, o = this._duration - a;
      this._start = i, this._duration = Math.floor(Math.max(o, e.duration)), this._total += a, this._loop = !!e.loop, this._to = rn([
        e.to,
        s,
        n,
        e.from
      ]), this._from = rn([
        e.from,
        n,
        s
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(e) {
    const s = e - this._start, i = this._duration, n = this._prop, a = this._from, o = this._loop, r = this._to;
    let l;
    if (this._active = a !== r && (o || s < i), !this._active) {
      this._target[n] = r, this._notify(!0);
      return;
    }
    if (s < 0) {
      this._target[n] = a;
      return;
    }
    l = s / i % 2, l = o && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[n] = this._fn(a, r, l);
  }
  wait() {
    const e = this._promises || (this._promises = []);
    return new Promise((s, i) => {
      e.push({
        res: s,
        rej: i
      });
    });
  }
  _notify(e) {
    const s = e ? "res" : "rej", i = this._promises || [];
    for (let n = 0; n < i.length; n++)
      i[n][s]();
  }
}
class ep {
  constructor(e, s) {
    this._chart = e, this._properties = /* @__PURE__ */ new Map(), this.configure(s);
  }
  configure(e) {
    if (!Se(e))
      return;
    const s = Object.keys(Ye.animation), i = this._properties;
    Object.getOwnPropertyNames(e).forEach((n) => {
      const a = e[n];
      if (!Se(a))
        return;
      const o = {};
      for (const r of s)
        o[r] = a[r];
      (Je(a.properties) && a.properties || [
        n
      ]).forEach((r) => {
        (r === n || !i.has(r)) && i.set(r, o);
      });
    });
  }
  _animateOptions(e, s) {
    const i = s.options, n = gS(e, i);
    if (!n)
      return [];
    const a = this._createAnimations(n, i);
    return i.$shared && mS(e.options.$animations, i).then(() => {
      e.options = i;
    }, () => {
    }), a;
  }
  _createAnimations(e, s) {
    const i = this._properties, n = [], a = e.$animations || (e.$animations = {}), o = Object.keys(s), r = Date.now();
    let l;
    for (l = o.length - 1; l >= 0; --l) {
      const c = o[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        n.push(...this._animateOptions(e, s));
        continue;
      }
      const u = s[c];
      let d = a[c];
      const f = i.get(c);
      if (d)
        if (f && d.active()) {
          d.update(f, u, r);
          continue;
        } else
          d.cancel();
      if (!f || !f.duration) {
        e[c] = u;
        continue;
      }
      a[c] = d = new pS(f, e, c, u), n.push(d);
    }
    return n;
  }
  update(e, s) {
    if (this._properties.size === 0) {
      Object.assign(e, s);
      return;
    }
    const i = this._createAnimations(e, s);
    if (i.length)
      return ps.add(this._chart, i), !0;
  }
}
function mS(t, e) {
  const s = [], i = Object.keys(e);
  for (let n = 0; n < i.length; n++) {
    const a = t[i[n]];
    a && a.active() && s.push(a.wait());
  }
  return Promise.all(s);
}
function gS(t, e) {
  if (!e)
    return;
  let s = t.options;
  if (!s) {
    t.options = e;
    return;
  }
  return s.$shared && (t.options = s = Object.assign({}, s, {
    $shared: !1,
    $animations: {}
  })), s;
}
function qu(t, e) {
  const s = t && t.options || {}, i = s.reverse, n = s.min === void 0 ? e : 0, a = s.max === void 0 ? e : 0;
  return {
    start: i ? a : n,
    end: i ? n : a
  };
}
function bS(t, e, s) {
  if (s === !1)
    return !1;
  const i = qu(t, s), n = qu(e, s);
  return {
    top: n.end,
    right: i.end,
    bottom: n.start,
    left: i.start
  };
}
function yS(t) {
  let e, s, i, n;
  return Se(t) ? (e = t.top, s = t.right, i = t.bottom, n = t.left) : e = s = i = n = t, {
    top: e,
    right: s,
    bottom: i,
    left: n,
    disabled: t === !1
  };
}
function tp(t, e) {
  const s = [], i = t._getSortedDatasetMetas(e);
  let n, a;
  for (n = 0, a = i.length; n < a; ++n)
    s.push(i[n].index);
  return s;
}
function Gu(t, e, s, i = {}) {
  const n = t.keys, a = i.mode === "single";
  let o, r, l, c;
  if (e === null)
    return;
  let u = !1;
  for (o = 0, r = n.length; o < r; ++o) {
    if (l = +n[o], l === s) {
      if (u = !0, i.all)
        continue;
      break;
    }
    c = t.values[l], nt(c) && (a || e === 0 || ls(e) === ls(c)) && (e += c);
  }
  return !u && !i.all ? 0 : e;
}
function vS(t, e) {
  const { iScale: s, vScale: i } = e, n = s.axis === "x" ? "x" : "y", a = i.axis === "x" ? "x" : "y", o = Object.keys(t), r = new Array(o.length);
  let l, c, u;
  for (l = 0, c = o.length; l < c; ++l)
    u = o[l], r[l] = {
      [n]: u,
      [a]: t[u]
    };
  return r;
}
function lr(t, e) {
  const s = t && t.options.stacked;
  return s || s === void 0 && e.stack !== void 0;
}
function _S(t, e, s) {
  return `${t.id}.${e.id}.${s.stack || s.type}`;
}
function SS(t) {
  const { min: e, max: s, minDefined: i, maxDefined: n } = t.getUserBounds();
  return {
    min: i ? e : Number.NEGATIVE_INFINITY,
    max: n ? s : Number.POSITIVE_INFINITY
  };
}
function kS(t, e, s) {
  const i = t[e] || (t[e] = {});
  return i[s] || (i[s] = {});
}
function Ku(t, e, s, i) {
  for (const n of e.getMatchingVisibleMetas(i).reverse()) {
    const a = t[n.index];
    if (s && a > 0 || !s && a < 0)
      return n.index;
  }
  return null;
}
function $u(t, e) {
  const { chart: s, _cachedMeta: i } = t, n = s._stacks || (s._stacks = {}), { iScale: a, vScale: o, index: r } = i, l = a.axis, c = o.axis, u = _S(a, o, i), d = e.length;
  let f;
  for (let h = 0; h < d; ++h) {
    const m = e[h], { [l]: g, [c]: v } = m, T = m._stacks || (m._stacks = {});
    f = T[c] = kS(n, u, g), f[r] = v, f._top = Ku(f, o, !0, i.type), f._bottom = Ku(f, o, !1, i.type);
    const x = f._visualValues || (f._visualValues = {});
    x[r] = v;
  }
}
function cr(t, e) {
  const s = t.scales;
  return Object.keys(s).filter((i) => s[i].axis === e).shift();
}
function TS(t, e) {
  return Gs(t, {
    active: !1,
    dataset: void 0,
    datasetIndex: e,
    index: e,
    mode: "default",
    type: "dataset"
  });
}
function xS(t, e, s) {
  return Gs(t, {
    active: !1,
    dataIndex: e,
    parsed: void 0,
    raw: void 0,
    element: s,
    index: e,
    mode: "default",
    type: "data"
  });
}
function Qi(t, e) {
  const s = t.controller.index, i = t.vScale && t.vScale.axis;
  if (i) {
    e = e || t._parsed;
    for (const n of e) {
      const a = n._stacks;
      if (!a || a[i] === void 0 || a[i][s] === void 0)
        return;
      delete a[i][s], a[i]._visualValues !== void 0 && a[i]._visualValues[s] !== void 0 && delete a[i]._visualValues[s];
    }
  }
}
const ur = (t) => t === "reset" || t === "none", Ju = (t, e) => e ? t : Object.assign({}, t), AS = (t, e, s) => t && !e.hidden && e._stacked && {
  keys: tp(s, !0),
  values: null
};
class Gt {
  constructor(e, s) {
    this.chart = e, this._ctx = e.ctx, this.index = s, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const e = this._cachedMeta;
    this.configure(), this.linkScales(), e._stacked = lr(e.vScale, e), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(e) {
    this.index !== e && Qi(this._cachedMeta), this.index = e;
  }
  linkScales() {
    const e = this.chart, s = this._cachedMeta, i = this.getDataset(), n = (d, f, h, m) => d === "x" ? f : d === "r" ? m : h, a = s.xAxisID = he(i.xAxisID, cr(e, "x")), o = s.yAxisID = he(i.yAxisID, cr(e, "y")), r = s.rAxisID = he(i.rAxisID, cr(e, "r")), l = s.indexAxis, c = s.iAxisID = n(l, a, o, r), u = s.vAxisID = n(l, o, a, r);
    s.xScale = this.getScaleForId(a), s.yScale = this.getScaleForId(o), s.rScale = this.getScaleForId(r), s.iScale = this.getScaleForId(c), s.vScale = this.getScaleForId(u);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(e) {
    return this.chart.scales[e];
  }
  _getOtherScale(e) {
    const s = this._cachedMeta;
    return e === s.iScale ? s.vScale : s.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const e = this._cachedMeta;
    this._data && Du(this._data, this), e._stacked && Qi(e);
  }
  _dataCheck() {
    const e = this.getDataset(), s = e.data || (e.data = []), i = this._data;
    if (Se(s)) {
      const n = this._cachedMeta;
      this._data = vS(s, n);
    } else if (i !== s) {
      if (i) {
        Du(i, this);
        const n = this._cachedMeta;
        Qi(n), n._parsed = [];
      }
      s && Object.isExtensible(s) && c_(s, this), this._syncList = [], this._data = s;
    }
  }
  addElements() {
    const e = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (e.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(e) {
    const s = this._cachedMeta, i = this.getDataset();
    let n = !1;
    this._dataCheck();
    const a = s._stacked;
    s._stacked = lr(s.vScale, s), s.stack !== i.stack && (n = !0, Qi(s), s.stack = i.stack), this._resyncElements(e), (n || a !== s._stacked) && ($u(this, s._parsed), s._stacked = lr(s.vScale, s));
  }
  configure() {
    const e = this.chart.config, s = e.datasetScopeKeys(this._type), i = e.getOptionScopes(this.getDataset(), s, !0);
    this.options = e.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(e, s) {
    const { _cachedMeta: i, _data: n } = this, { iScale: a, _stacked: o } = i, r = a.axis;
    let l = e === 0 && s === n.length ? !0 : i._sorted, c = e > 0 && i._parsed[e - 1], u, d, f;
    if (this._parsing === !1)
      i._parsed = n, i._sorted = !0, f = n;
    else {
      Je(n[e]) ? f = this.parseArrayData(i, n, e, s) : Se(n[e]) ? f = this.parseObjectData(i, n, e, s) : f = this.parsePrimitiveData(i, n, e, s);
      const h = () => d[r] === null || c && d[r] < c[r];
      for (u = 0; u < s; ++u)
        i._parsed[u + e] = d = f[u], l && (h() && (l = !1), c = d);
      i._sorted = l;
    }
    o && $u(this, f);
  }
  parsePrimitiveData(e, s, i, n) {
    const { iScale: a, vScale: o } = e, r = a.axis, l = o.axis, c = a.getLabels(), u = a === o, d = new Array(n);
    let f, h, m;
    for (f = 0, h = n; f < h; ++f)
      m = f + i, d[f] = {
        [r]: u || a.parse(c[m], m),
        [l]: o.parse(s[m], m)
      };
    return d;
  }
  parseArrayData(e, s, i, n) {
    const { xScale: a, yScale: o } = e, r = new Array(n);
    let l, c, u, d;
    for (l = 0, c = n; l < c; ++l)
      u = l + i, d = s[u], r[l] = {
        x: a.parse(d[0], u),
        y: o.parse(d[1], u)
      };
    return r;
  }
  parseObjectData(e, s, i, n) {
    const { xScale: a, yScale: o } = e, { xAxisKey: r = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(n);
    let u, d, f, h;
    for (u = 0, d = n; u < d; ++u)
      f = u + i, h = s[f], c[u] = {
        x: a.parse(Vs(h, r), f),
        y: o.parse(Vs(h, l), f)
      };
    return c;
  }
  getParsed(e) {
    return this._cachedMeta._parsed[e];
  }
  getDataElement(e) {
    return this._cachedMeta.data[e];
  }
  applyStack(e, s, i) {
    const n = this.chart, a = this._cachedMeta, o = s[e.axis], r = {
      keys: tp(n, !0),
      values: s._stacks[e.axis]._visualValues
    };
    return Gu(r, o, a.index, {
      mode: i
    });
  }
  updateRangeFromParsed(e, s, i, n) {
    const a = i[s.axis];
    let o = a === null ? NaN : a;
    const r = n && i._stacks[s.axis];
    n && r && (n.values = r, o = Gu(n, a, this._cachedMeta.index)), e.min = Math.min(e.min, o), e.max = Math.max(e.max, o);
  }
  getMinMax(e, s) {
    const i = this._cachedMeta, n = i._parsed, a = i._sorted && e === i.iScale, o = n.length, r = this._getOtherScale(e), l = AS(s, i, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: u, max: d } = SS(r);
    let f, h;
    function m() {
      h = n[f];
      const g = h[r.axis];
      return !nt(h[e.axis]) || u > g || d < g;
    }
    for (f = 0; f < o && !(!m() && (this.updateRangeFromParsed(c, e, h, l), a)); ++f)
      ;
    if (a) {
      for (f = o - 1; f >= 0; --f)
        if (!m()) {
          this.updateRangeFromParsed(c, e, h, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(e) {
    const s = this._cachedMeta._parsed, i = [];
    let n, a, o;
    for (n = 0, a = s.length; n < a; ++n)
      o = s[n][e.axis], nt(o) && i.push(o);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(e) {
    const s = this._cachedMeta, i = s.iScale, n = s.vScale, a = this.getParsed(e);
    return {
      label: i ? "" + i.getLabelForValue(a[i.axis]) : "",
      value: n ? "" + n.getLabelForValue(a[n.axis]) : ""
    };
  }
  _update(e) {
    const s = this._cachedMeta;
    this.update(e || "default"), s._clip = yS(he(this.options.clip, bS(s.xScale, s.yScale, this.getMaxOverflow())));
  }
  update(e) {
  }
  draw() {
    const e = this._ctx, s = this.chart, i = this._cachedMeta, n = i.data || [], a = s.chartArea, o = [], r = this._drawStart || 0, l = this._drawCount || n.length - r, c = this.options.drawActiveElementsOnTop;
    let u;
    for (i.dataset && i.dataset.draw(e, a, r, l), u = r; u < r + l; ++u) {
      const d = n[u];
      d.hidden || (d.active && c ? o.push(d) : d.draw(e, a));
    }
    for (u = 0; u < o.length; ++u)
      o[u].draw(e, a);
  }
  getStyle(e, s) {
    const i = s ? "active" : "default";
    return e === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(e || 0, i);
  }
  getContext(e, s, i) {
    const n = this.getDataset();
    let a;
    if (e >= 0 && e < this._cachedMeta.data.length) {
      const o = this._cachedMeta.data[e];
      a = o.$context || (o.$context = xS(this.getContext(), e, o)), a.parsed = this.getParsed(e), a.raw = n.data[e], a.index = a.dataIndex = e;
    } else
      a = this.$context || (this.$context = TS(this.chart.getContext(), this.index)), a.dataset = n, a.index = a.datasetIndex = this.index;
    return a.active = !!s, a.mode = i, a;
  }
  resolveDatasetElementOptions(e) {
    return this._resolveElementOptions(this.datasetElementType.id, e);
  }
  resolveDataElementOptions(e, s) {
    return this._resolveElementOptions(this.dataElementType.id, s, e);
  }
  _resolveElementOptions(e, s = "default", i) {
    const n = s === "active", a = this._cachedDataOpts, o = e + "-" + s, r = a[o], l = this.enableOptionSharing && Nn(i);
    if (r)
      return Ju(r, l);
    const c = this.chart.config, u = c.datasetElementScopeKeys(this._type, e), d = n ? [
      `${e}Hover`,
      "hover",
      e,
      ""
    ] : [
      e,
      ""
    ], f = c.getOptionScopes(this.getDataset(), u), h = Object.keys(Ye.elements[e]), m = () => this.getContext(i, n, s), g = c.resolveNamedOptions(f, h, m, d);
    return g.$shared && (g.$shared = l, a[o] = Object.freeze(Ju(g, l))), g;
  }
  _resolveAnimations(e, s, i) {
    const n = this.chart, a = this._cachedDataOpts, o = `animation-${s}`, r = a[o];
    if (r)
      return r;
    let l;
    if (n.options.animation !== !1) {
      const u = this.chart.config, d = u.datasetAnimationScopeKeys(this._type, s), f = u.getOptionScopes(this.getDataset(), d);
      l = u.createResolver(f, this.getContext(e, i, s));
    }
    const c = new ep(n, l && l.animations);
    return l && l._cacheable && (a[o] = Object.freeze(c)), c;
  }
  getSharedOptions(e) {
    if (e.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, e));
  }
  includeOptions(e, s) {
    return !s || ur(e) || this.chart._animationsDisabled;
  }
  _getSharedOptions(e, s) {
    const i = this.resolveDataElementOptions(e, s), n = this._sharedOptions, a = this.getSharedOptions(i), o = this.includeOptions(s, a) || a !== n;
    return this.updateSharedOptions(a, s, i), {
      sharedOptions: a,
      includeOptions: o
    };
  }
  updateElement(e, s, i, n) {
    ur(n) ? Object.assign(e, i) : this._resolveAnimations(s, n).update(e, i);
  }
  updateSharedOptions(e, s, i) {
    e && !ur(s) && this._resolveAnimations(void 0, s).update(e, i);
  }
  _setStyle(e, s, i, n) {
    e.active = n;
    const a = this.getStyle(s, n);
    this._resolveAnimations(s, i, n).update(e, {
      options: !n && this.getSharedOptions(a) || a
    });
  }
  removeHoverStyle(e, s, i) {
    this._setStyle(e, i, "active", !1);
  }
  setHoverStyle(e, s, i) {
    this._setStyle(e, i, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", !0);
  }
  _resyncElements(e) {
    const s = this._data, i = this._cachedMeta.data;
    for (const [r, l, c] of this._syncList)
      this[r](l, c);
    this._syncList = [];
    const n = i.length, a = s.length, o = Math.min(a, n);
    o && this.parse(0, o), a > n ? this._insertElements(n, a - n, e) : a < n && this._removeElements(a, n - a);
  }
  _insertElements(e, s, i = !0) {
    const n = this._cachedMeta, a = n.data, o = e + s;
    let r;
    const l = (c) => {
      for (c.length += s, r = c.length - 1; r >= o; r--)
        c[r] = c[r - s];
    };
    for (l(a), r = e; r < o; ++r)
      a[r] = new this.dataElementType();
    this._parsing && l(n._parsed), this.parse(e, s), i && this.updateElements(a, e, s, "reset");
  }
  updateElements(e, s, i, n) {
  }
  _removeElements(e, s) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const n = i._parsed.splice(e, s);
      i._stacked && Qi(i, n);
    }
    i.data.splice(e, s);
  }
  _sync(e) {
    if (this._parsing)
      this._syncList.push(e);
    else {
      const [s, i, n] = e;
      this[s](i, n);
    }
    this.chart._dataChanges.push([
      this.index,
      ...e
    ]);
  }
  _onDataPush() {
    const e = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - e,
      e
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(e, s) {
    s && this._sync([
      "_removeElements",
      e,
      s
    ]);
    const i = arguments.length - 2;
    i && this._sync([
      "_insertElements",
      e,
      i
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
V(Gt, "defaults", {}), V(Gt, "datasetElementType", null), V(Gt, "dataElementType", null);
function PS(t, e) {
  if (!t._cache.$bar) {
    const s = t.getMatchingVisibleMetas(e);
    let i = [];
    for (let n = 0, a = s.length; n < a; n++)
      i = i.concat(s[n].controller.getAllParsedValues(t));
    t._cache.$bar = Oh(i.sort((n, a) => n - a));
  }
  return t._cache.$bar;
}
function CS(t) {
  const e = t.iScale, s = PS(e, t.type);
  let i = e._length, n, a, o, r;
  const l = () => {
    o === 32767 || o === -32768 || (Nn(r) && (i = Math.min(i, Math.abs(o - r) || i)), r = o);
  };
  for (n = 0, a = s.length; n < a; ++n)
    o = e.getPixelForValue(s[n]), l();
  for (r = void 0, n = 0, a = e.ticks.length; n < a; ++n)
    o = e.getPixelForTick(n), l();
  return i;
}
function wS(t, e, s, i) {
  const n = s.barThickness;
  let a, o;
  return be(n) ? (a = e.min * s.categoryPercentage, o = s.barPercentage) : (a = n * i, o = 1), {
    chunk: a / i,
    ratio: o,
    start: e.pixels[t] - a / 2
  };
}
function RS(t, e, s, i) {
  const n = e.pixels, a = n[t];
  let o = t > 0 ? n[t - 1] : null, r = t < n.length - 1 ? n[t + 1] : null;
  const l = s.categoryPercentage;
  o === null && (o = a - (r === null ? e.end - e.start : r - a)), r === null && (r = a + a - o);
  const c = a - (a - Math.min(o, r)) / 2 * l;
  return {
    chunk: Math.abs(r - o) / 2 * l / i,
    ratio: s.barPercentage,
    start: c
  };
}
function MS(t, e, s, i) {
  const n = s.parse(t[0], i), a = s.parse(t[1], i), o = Math.min(n, a), r = Math.max(n, a);
  let l = o, c = r;
  Math.abs(o) > Math.abs(r) && (l = r, c = o), e[s.axis] = c, e._custom = {
    barStart: l,
    barEnd: c,
    start: n,
    end: a,
    min: o,
    max: r
  };
}
function sp(t, e, s, i) {
  return Je(t) ? MS(t, e, s, i) : e[s.axis] = s.parse(t, i), e;
}
function Yu(t, e, s, i) {
  const n = t.iScale, a = t.vScale, o = n.getLabels(), r = n === a, l = [];
  let c, u, d, f;
  for (c = s, u = s + i; c < u; ++c)
    f = e[c], d = {}, d[n.axis] = r || n.parse(o[c], c), l.push(sp(f, d, a, c));
  return l;
}
function dr(t) {
  return t && t.barStart !== void 0 && t.barEnd !== void 0;
}
function DS(t, e, s) {
  return t !== 0 ? ls(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= s ? 1 : -1);
}
function IS(t) {
  let e, s, i, n, a;
  return t.horizontal ? (e = t.base > t.x, s = "left", i = "right") : (e = t.base < t.y, s = "bottom", i = "top"), e ? (n = "end", a = "start") : (n = "start", a = "end"), {
    start: s,
    end: i,
    reverse: e,
    top: n,
    bottom: a
  };
}
function ES(t, e, s, i) {
  let n = e.borderSkipped;
  const a = {};
  if (!n) {
    t.borderSkipped = a;
    return;
  }
  if (n === !0) {
    t.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    };
    return;
  }
  const { start: o, end: r, reverse: l, top: c, bottom: u } = IS(t);
  n === "middle" && s && (t.enableBorderRadius = !0, (s._top || 0) === i ? n = c : (s._bottom || 0) === i ? n = u : (a[Xu(u, o, r, l)] = !0, n = c)), a[Xu(n, o, r, l)] = !0, t.borderSkipped = a;
}
function Xu(t, e, s, i) {
  return i ? (t = OS(t, e, s), t = Qu(t, s, e)) : t = Qu(t, e, s), t;
}
function OS(t, e, s) {
  return t === e ? s : t === s ? e : t;
}
function Qu(t, e, s) {
  return t === "start" ? e : t === "end" ? s : t;
}
function NS(t, { inflateAmount: e }, s) {
  t.inflateAmount = e === "auto" ? s === 1 ? 0.33 : 0 : e;
}
class Da extends Gt {
  parsePrimitiveData(e, s, i, n) {
    return Yu(e, s, i, n);
  }
  parseArrayData(e, s, i, n) {
    return Yu(e, s, i, n);
  }
  parseObjectData(e, s, i, n) {
    const { iScale: a, vScale: o } = e, { xAxisKey: r = "x", yAxisKey: l = "y" } = this._parsing, c = a.axis === "x" ? r : l, u = o.axis === "x" ? r : l, d = [];
    let f, h, m, g;
    for (f = i, h = i + n; f < h; ++f)
      g = s[f], m = {}, m[a.axis] = a.parse(Vs(g, c), f), d.push(sp(Vs(g, u), m, o, f));
    return d;
  }
  updateRangeFromParsed(e, s, i, n) {
    super.updateRangeFromParsed(e, s, i, n);
    const a = i._custom;
    a && s === this._cachedMeta.vScale && (e.min = Math.min(e.min, a.min), e.max = Math.max(e.max, a.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(e) {
    const s = this._cachedMeta, { iScale: i, vScale: n } = s, a = this.getParsed(e), o = a._custom, r = dr(o) ? "[" + o.start + ", " + o.end + "]" : "" + n.getLabelForValue(a[n.axis]);
    return {
      label: "" + i.getLabelForValue(a[i.axis]),
      value: r
    };
  }
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
    const e = this._cachedMeta;
    e.stack = this.getDataset().stack;
  }
  update(e) {
    const s = this._cachedMeta;
    this.updateElements(s.data, 0, s.data.length, e);
  }
  updateElements(e, s, i, n) {
    const a = n === "reset", { index: o, _cachedMeta: { vScale: r } } = this, l = r.getBasePixel(), c = r.isHorizontal(), u = this._getRuler(), { sharedOptions: d, includeOptions: f } = this._getSharedOptions(s, n);
    for (let h = s; h < s + i; h++) {
      const m = this.getParsed(h), g = a || be(m[r.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(h), v = this._calculateBarIndexPixels(h, u), T = (m._stacks || {})[r.axis], x = {
        horizontal: c,
        base: g.base,
        enableBorderRadius: !T || dr(m._custom) || o === T._top || o === T._bottom,
        x: c ? g.head : v.center,
        y: c ? v.center : g.head,
        height: c ? v.size : Math.abs(g.size),
        width: c ? Math.abs(g.size) : v.size
      };
      f && (x.options = d || this.resolveDataElementOptions(h, e[h].active ? "active" : n));
      const C = x.options || e[h].options;
      ES(x, C, T, o), NS(x, C, u.ratio), this.updateElement(e[h], h, x, n);
    }
  }
  _getStacks(e, s) {
    const { iScale: i } = this._cachedMeta, n = i.getMatchingVisibleMetas(this._type).filter((u) => u.controller.options.grouped), a = i.options.stacked, o = [], r = this._cachedMeta.controller.getParsed(s), l = r && r[i.axis], c = (u) => {
      const d = u._parsed.find((h) => h[i.axis] === l), f = d && d[u.vScale.axis];
      if (be(f) || isNaN(f))
        return !0;
    };
    for (const u of n)
      if (!(s !== void 0 && c(u)) && ((a === !1 || o.indexOf(u.stack) === -1 || a === void 0 && u.stack === void 0) && o.push(u.stack), u.index === e))
        break;
    return o.length || o.push(void 0), o;
  }
  _getStackCount(e) {
    return this._getStacks(void 0, e).length;
  }
  _getAxisCount() {
    return this._getAxis().length;
  }
  getFirstScaleIdForIndexAxis() {
    const e = this.chart.scales, s = this.chart.options.indexAxis;
    return Object.keys(e).filter((i) => e[i].axis === s).shift();
  }
  _getAxis() {
    const e = {}, s = this.getFirstScaleIdForIndexAxis();
    for (const i of this.chart.data.datasets)
      e[he(this.chart.options.indexAxis === "x" ? i.xAxisID : i.yAxisID, s)] = !0;
    return Object.keys(e);
  }
  _getStackIndex(e, s, i) {
    const n = this._getStacks(e, i), a = s !== void 0 ? n.indexOf(s) : -1;
    return a === -1 ? n.length - 1 : a;
  }
  _getRuler() {
    const e = this.options, s = this._cachedMeta, i = s.iScale, n = [];
    let a, o;
    for (a = 0, o = s.data.length; a < o; ++a)
      n.push(i.getPixelForValue(this.getParsed(a)[i.axis], a));
    const r = e.barThickness;
    return {
      min: r || CS(s),
      pixels: n,
      start: i._startPixel,
      end: i._endPixel,
      stackCount: this._getStackCount(),
      scale: i,
      grouped: e.grouped,
      ratio: r ? 1 : e.categoryPercentage * e.barPercentage
    };
  }
  _calculateBarValuePixels(e) {
    const { _cachedMeta: { vScale: s, _stacked: i, index: n }, options: { base: a, minBarLength: o } } = this, r = a || 0, l = this.getParsed(e), c = l._custom, u = dr(c);
    let d = l[s.axis], f = 0, h = i ? this.applyStack(s, l, i) : d, m, g;
    h !== d && (f = h - d, h = d), u && (d = c.barStart, h = c.barEnd - c.barStart, d !== 0 && ls(d) !== ls(c.barEnd) && (f = 0), f += d);
    const v = !be(a) && !u ? a : f;
    let T = s.getPixelForValue(v);
    if (this.chart.getDataVisibility(e) ? m = s.getPixelForValue(f + h) : m = T, g = m - T, Math.abs(g) < o) {
      g = DS(g, s, r) * o, d === r && (T -= g / 2);
      const x = s.getPixelForDecimal(0), C = s.getPixelForDecimal(1), P = Math.min(x, C), M = Math.max(x, C);
      T = Math.max(Math.min(T, M), P), m = T + g, i && !u && (l._stacks[s.axis]._visualValues[n] = s.getValueForPixel(m) - s.getValueForPixel(T));
    }
    if (T === s.getPixelForValue(r)) {
      const x = ls(g) * s.getLineWidthForValue(r) / 2;
      T += x, g -= x;
    }
    return {
      size: g,
      base: T,
      head: m,
      center: m + g / 2
    };
  }
  _calculateBarIndexPixels(e, s) {
    const i = s.scale, n = this.options, a = n.skipNull, o = he(n.maxBarThickness, 1 / 0);
    let r, l;
    const c = this._getAxisCount();
    if (s.grouped) {
      const u = a ? this._getStackCount(e) : s.stackCount, d = n.barThickness === "flex" ? RS(e, s, n, u * c) : wS(e, s, n, u * c), f = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, h = this._getAxis().indexOf(he(f, this.getFirstScaleIdForIndexAxis())), m = this._getStackIndex(this.index, this._cachedMeta.stack, a ? e : void 0) + h;
      r = d.start + d.chunk * m + d.chunk / 2, l = Math.min(o, d.chunk * d.ratio);
    } else
      r = i.getPixelForValue(this.getParsed(e)[i.axis], e), l = Math.min(o, s.min * s.ratio);
    return {
      base: r - l / 2,
      head: r + l / 2,
      center: r,
      size: l
    };
  }
  draw() {
    const e = this._cachedMeta, s = e.vScale, i = e.data, n = i.length;
    let a = 0;
    for (; a < n; ++a)
      this.getParsed(a)[s.axis] !== null && !i[a].hidden && i[a].draw(this._ctx);
  }
}
V(Da, "id", "bar"), V(Da, "defaults", {
  datasetElementType: !1,
  dataElementType: "bar",
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: !0,
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "base",
        "width",
        "height"
      ]
    }
  }
}), V(Da, "overrides", {
  scales: {
    _index_: {
      type: "category",
      offset: !0,
      grid: {
        offset: !0
      }
    },
    _value_: {
      type: "linear",
      beginAtZero: !0
    }
  }
});
class Ia extends Gt {
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
  }
  parsePrimitiveData(e, s, i, n) {
    const a = super.parsePrimitiveData(e, s, i, n);
    for (let o = 0; o < a.length; o++)
      a[o]._custom = this.resolveDataElementOptions(o + i).radius;
    return a;
  }
  parseArrayData(e, s, i, n) {
    const a = super.parseArrayData(e, s, i, n);
    for (let o = 0; o < a.length; o++) {
      const r = s[i + o];
      a[o]._custom = he(r[2], this.resolveDataElementOptions(o + i).radius);
    }
    return a;
  }
  parseObjectData(e, s, i, n) {
    const a = super.parseObjectData(e, s, i, n);
    for (let o = 0; o < a.length; o++) {
      const r = s[i + o];
      a[o]._custom = he(r && r.r && +r.r, this.resolveDataElementOptions(o + i).radius);
    }
    return a;
  }
  getMaxOverflow() {
    const e = this._cachedMeta.data;
    let s = 0;
    for (let i = e.length - 1; i >= 0; --i)
      s = Math.max(s, e[i].size(this.resolveDataElementOptions(i)) / 2);
    return s > 0 && s;
  }
  getLabelAndValue(e) {
    const s = this._cachedMeta, i = this.chart.data.labels || [], { xScale: n, yScale: a } = s, o = this.getParsed(e), r = n.getLabelForValue(o.x), l = a.getLabelForValue(o.y), c = o._custom;
    return {
      label: i[e] || "",
      value: "(" + r + ", " + l + (c ? ", " + c : "") + ")"
    };
  }
  update(e) {
    const s = this._cachedMeta.data;
    this.updateElements(s, 0, s.length, e);
  }
  updateElements(e, s, i, n) {
    const a = n === "reset", { iScale: o, vScale: r } = this._cachedMeta, { sharedOptions: l, includeOptions: c } = this._getSharedOptions(s, n), u = o.axis, d = r.axis;
    for (let f = s; f < s + i; f++) {
      const h = e[f], m = !a && this.getParsed(f), g = {}, v = g[u] = a ? o.getPixelForDecimal(0.5) : o.getPixelForValue(m[u]), T = g[d] = a ? r.getBasePixel() : r.getPixelForValue(m[d]);
      g.skip = isNaN(v) || isNaN(T), c && (g.options = l || this.resolveDataElementOptions(f, h.active ? "active" : n), a && (g.options.radius = 0)), this.updateElement(h, f, g, n);
    }
  }
  resolveDataElementOptions(e, s) {
    const i = this.getParsed(e);
    let n = super.resolveDataElementOptions(e, s);
    n.$shared && (n = Object.assign({}, n, {
      $shared: !1
    }));
    const a = n.radius;
    return s !== "active" && (n.radius = 0), n.radius += he(i && i._custom, a), n;
  }
}
V(Ia, "id", "bubble"), V(Ia, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "borderWidth",
        "radius"
      ]
    }
  }
}), V(Ia, "overrides", {
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
function LS(t, e, s) {
  let i = 1, n = 1, a = 0, o = 0;
  if (e < qe) {
    const r = t, l = r + e, c = Math.cos(r), u = Math.sin(r), d = Math.cos(l), f = Math.sin(l), h = (C, P, M) => Ln(C, r, l, !0) ? 1 : Math.max(P, P * s, M, M * s), m = (C, P, M) => Ln(C, r, l, !0) ? -1 : Math.min(P, P * s, M, M * s), g = h(0, c, d), v = h(ot, u, f), T = m(we, c, d), x = m(we + ot, u, f);
    i = (g - T) / 2, n = (v - x) / 2, a = -(g + T) / 2, o = -(v + x) / 2;
  }
  return {
    ratioX: i,
    ratioY: n,
    offsetX: a,
    offsetY: o
  };
}
class oi extends Gt {
  constructor(e, s) {
    super(e, s), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(e, s) {
    const i = this.getDataset().data, n = this._cachedMeta;
    if (this._parsing === !1)
      n._parsed = i;
    else {
      let a = (l) => +i[l];
      if (Se(i[e])) {
        const { key: l = "value" } = this._parsing;
        a = (c) => +Vs(i[c], l);
      }
      let o, r;
      for (o = e, r = e + s; o < r; ++o)
        n._parsed[o] = a(o);
    }
  }
  _getRotation() {
    return Vt(this.options.rotation - 90);
  }
  _getCircumference() {
    return Vt(this.options.circumference);
  }
  _getRotationExtents() {
    let e = qe, s = -qe;
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
        const n = this.chart.getDatasetMeta(i).controller, a = n._getRotation(), o = n._getCircumference();
        e = Math.min(e, a), s = Math.max(s, a + o);
      }
    return {
      rotation: e,
      circumference: s - e
    };
  }
  update(e) {
    const s = this.chart, { chartArea: i } = s, n = this._cachedMeta, a = n.data, o = this.getMaxBorderWidth() + this.getMaxOffset(a) + this.options.spacing, r = Math.max((Math.min(i.width, i.height) - o) / 2, 0), l = Math.min($v(this.options.cutout, r), 1), c = this._getRingWeight(this.index), { circumference: u, rotation: d } = this._getRotationExtents(), { ratioX: f, ratioY: h, offsetX: m, offsetY: g } = LS(d, u, l), v = (i.width - o) / f, T = (i.height - o) / h, x = Math.max(Math.min(v, T) / 2, 0), C = Rh(this.options.radius, x), P = Math.max(C * l, 0), M = (C - P) / this._getVisibleDatasetWeightTotal();
    this.offsetX = m * C, this.offsetY = g * C, n.total = this.calculateTotal(), this.outerRadius = C - M * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - M * c, 0), this.updateElements(a, 0, a.length, e);
  }
  _circumference(e, s) {
    const i = this.options, n = this._cachedMeta, a = this._getCircumference();
    return s && i.animation.animateRotate || !this.chart.getDataVisibility(e) || n._parsed[e] === null || n.data[e].hidden ? 0 : this.calculateCircumference(n._parsed[e] * a / qe);
  }
  updateElements(e, s, i, n) {
    const a = n === "reset", o = this.chart, r = o.chartArea, c = o.options.animation, u = (r.left + r.right) / 2, d = (r.top + r.bottom) / 2, f = a && c.animateScale, h = f ? 0 : this.innerRadius, m = f ? 0 : this.outerRadius, { sharedOptions: g, includeOptions: v } = this._getSharedOptions(s, n);
    let T = this._getRotation(), x;
    for (x = 0; x < s; ++x)
      T += this._circumference(x, a);
    for (x = s; x < s + i; ++x) {
      const C = this._circumference(x, a), P = e[x], M = {
        x: u + this.offsetX,
        y: d + this.offsetY,
        startAngle: T,
        endAngle: T + C,
        circumference: C,
        outerRadius: m,
        innerRadius: h
      };
      v && (M.options = g || this.resolveDataElementOptions(x, P.active ? "active" : n)), T += C, this.updateElement(P, x, M, n);
    }
  }
  calculateTotal() {
    const e = this._cachedMeta, s = e.data;
    let i = 0, n;
    for (n = 0; n < s.length; n++) {
      const a = e._parsed[n];
      a !== null && !isNaN(a) && this.chart.getDataVisibility(n) && !s[n].hidden && (i += Math.abs(a));
    }
    return i;
  }
  calculateCircumference(e) {
    const s = this._cachedMeta.total;
    return s > 0 && !isNaN(e) ? qe * (Math.abs(e) / s) : 0;
  }
  getLabelAndValue(e) {
    const s = this._cachedMeta, i = this.chart, n = i.data.labels || [], a = Gn(s._parsed[e], i.options.locale);
    return {
      label: n[e] || "",
      value: a
    };
  }
  getMaxBorderWidth(e) {
    let s = 0;
    const i = this.chart;
    let n, a, o, r, l;
    if (!e) {
      for (n = 0, a = i.data.datasets.length; n < a; ++n)
        if (i.isDatasetVisible(n)) {
          o = i.getDatasetMeta(n), e = o.data, r = o.controller;
          break;
        }
    }
    if (!e)
      return 0;
    for (n = 0, a = e.length; n < a; ++n)
      l = r.resolveDataElementOptions(n), l.borderAlign !== "inner" && (s = Math.max(s, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return s;
  }
  getMaxOffset(e) {
    let s = 0;
    for (let i = 0, n = e.length; i < n; ++i) {
      const a = this.resolveDataElementOptions(i);
      s = Math.max(s, a.offset || 0, a.hoverOffset || 0);
    }
    return s;
  }
  _getRingWeightOffset(e) {
    let s = 0;
    for (let i = 0; i < e; ++i)
      this.chart.isDatasetVisible(i) && (s += this._getRingWeight(i));
    return s;
  }
  _getRingWeight(e) {
    return Math.max(he(this.chart.data.datasets[e].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
V(oi, "id", "doughnut"), V(oi, "defaults", {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !1
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing"
      ]
    }
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r"
}), V(oi, "descriptors", {
  _scriptable: (e) => e !== "spacing",
  _indexable: (e) => e !== "spacing" && !e.startsWith("borderDash") && !e.startsWith("hoverBorderDash")
}), V(oi, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(e) {
          const s = e.data, { labels: { pointStyle: i, textAlign: n, color: a, useBorderRadius: o, borderRadius: r } } = e.legend.options;
          return s.labels.length && s.datasets.length ? s.labels.map((l, c) => {
            const d = e.getDatasetMeta(0).controller.getStyle(c);
            return {
              text: l,
              fillStyle: d.backgroundColor,
              fontColor: a,
              hidden: !e.getDataVisibility(c),
              lineDash: d.borderDash,
              lineDashOffset: d.borderDashOffset,
              lineJoin: d.borderJoinStyle,
              lineWidth: d.borderWidth,
              strokeStyle: d.borderColor,
              textAlign: n,
              pointStyle: i,
              borderRadius: o && (r || d.borderRadius),
              index: c
            };
          }) : [];
        }
      },
      onClick(e, s, i) {
        i.chart.toggleDataVisibility(s.index), i.chart.update();
      }
    }
  }
});
class Ea extends Gt {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(e) {
    const s = this._cachedMeta, { dataset: i, data: n = [], _dataset: a } = s, o = this.chart._animationsDisabled;
    let { start: r, count: l } = Uh(s, n, o);
    this._drawStart = r, this._drawCount = l, Fh(s) && (r = 0, l = n.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!a._decimated, i.points = n;
    const c = this.resolveDatasetElementOptions(e);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(i, void 0, {
      animated: !o,
      options: c
    }, e), this.updateElements(n, r, l, e);
  }
  updateElements(e, s, i, n) {
    const a = n === "reset", { iScale: o, vScale: r, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: u, includeOptions: d } = this._getSharedOptions(s, n), f = o.axis, h = r.axis, { spanGaps: m, segment: g } = this.options, v = Wi(m) ? m : Number.POSITIVE_INFINITY, T = this.chart._animationsDisabled || a || n === "none", x = s + i, C = e.length;
    let P = s > 0 && this.getParsed(s - 1);
    for (let M = 0; M < C; ++M) {
      const w = e[M], O = T ? w : {};
      if (M < s || M >= x) {
        O.skip = !0;
        continue;
      }
      const W = this.getParsed(M), J = be(W[h]), Q = O[f] = o.getPixelForValue(W[f], M), ie = O[h] = a || J ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, W, l) : W[h], M);
      O.skip = isNaN(Q) || isNaN(ie) || J, O.stop = M > 0 && Math.abs(W[f] - P[f]) > v, g && (O.parsed = W, O.raw = c.data[M]), d && (O.options = u || this.resolveDataElementOptions(M, w.active ? "active" : n)), T || this.updateElement(w, M, O, n), P = W;
    }
  }
  getMaxOverflow() {
    const e = this._cachedMeta, s = e.dataset, i = s.options && s.options.borderWidth || 0, n = e.data || [];
    if (!n.length)
      return i;
    const a = n[0].size(this.resolveDataElementOptions(0)), o = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(i, a, o) / 2;
  }
  draw() {
    const e = this._cachedMeta;
    e.dataset.updateControlPoints(this.chart.chartArea, e.iScale.axis), super.draw();
  }
}
V(Ea, "id", "line"), V(Ea, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), V(Ea, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
class xn extends Gt {
  constructor(e, s) {
    super(e, s), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(e) {
    const s = this._cachedMeta, i = this.chart, n = i.data.labels || [], a = Gn(s._parsed[e].r, i.options.locale);
    return {
      label: n[e] || "",
      value: a
    };
  }
  parseObjectData(e, s, i, n) {
    return Gh.bind(this)(e, s, i, n);
  }
  update(e) {
    const s = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(s, 0, s.length, e);
  }
  getMinMax() {
    const e = this._cachedMeta, s = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    return e.data.forEach((i, n) => {
      const a = this.getParsed(n).r;
      !isNaN(a) && this.chart.getDataVisibility(n) && (a < s.min && (s.min = a), a > s.max && (s.max = a));
    }), s;
  }
  _updateRadius() {
    const e = this.chart, s = e.chartArea, i = e.options, n = Math.min(s.right - s.left, s.bottom - s.top), a = Math.max(n / 2, 0), o = Math.max(i.cutoutPercentage ? a / 100 * i.cutoutPercentage : 1, 0), r = (a - o) / e.getVisibleDatasetCount();
    this.outerRadius = a - r * this.index, this.innerRadius = this.outerRadius - r;
  }
  updateElements(e, s, i, n) {
    const a = n === "reset", o = this.chart, l = o.options.animation, c = this._cachedMeta.rScale, u = c.xCenter, d = c.yCenter, f = c.getIndexAngle(0) - 0.5 * we;
    let h = f, m;
    const g = 360 / this.countVisibleElements();
    for (m = 0; m < s; ++m)
      h += this._computeAngle(m, n, g);
    for (m = s; m < s + i; m++) {
      const v = e[m];
      let T = h, x = h + this._computeAngle(m, n, g), C = o.getDataVisibility(m) ? c.getDistanceFromCenterForValue(this.getParsed(m).r) : 0;
      h = x, a && (l.animateScale && (C = 0), l.animateRotate && (T = x = f));
      const P = {
        x: u,
        y: d,
        innerRadius: 0,
        outerRadius: C,
        startAngle: T,
        endAngle: x,
        options: this.resolveDataElementOptions(m, v.active ? "active" : n)
      };
      this.updateElement(v, m, P, n);
    }
  }
  countVisibleElements() {
    const e = this._cachedMeta;
    let s = 0;
    return e.data.forEach((i, n) => {
      !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && s++;
    }), s;
  }
  _computeAngle(e, s, i) {
    return this.chart.getDataVisibility(e) ? Vt(this.resolveDataElementOptions(e, s).angle || i) : 0;
  }
}
V(xn, "id", "polarArea"), V(xn, "defaults", {
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !0
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius"
      ]
    }
  },
  indexAxis: "r",
  startAngle: 0
}), V(xn, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(e) {
          const s = e.data;
          if (s.labels.length && s.datasets.length) {
            const { labels: { pointStyle: i, color: n } } = e.legend.options;
            return s.labels.map((a, o) => {
              const l = e.getDatasetMeta(0).controller.getStyle(o);
              return {
                text: a,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                fontColor: n,
                lineWidth: l.borderWidth,
                pointStyle: i,
                hidden: !e.getDataVisibility(o),
                index: o
              };
            });
          }
          return [];
        }
      },
      onClick(e, s, i) {
        i.chart.toggleDataVisibility(s.index), i.chart.update();
      }
    }
  },
  scales: {
    r: {
      type: "radialLinear",
      angleLines: {
        display: !1
      },
      beginAtZero: !0,
      grid: {
        circular: !0
      },
      pointLabels: {
        display: !1
      },
      startAngle: 0
    }
  }
});
class Vr extends oi {
}
V(Vr, "id", "pie"), V(Vr, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
});
class Oa extends Gt {
  getLabelAndValue(e) {
    const s = this._cachedMeta.vScale, i = this.getParsed(e);
    return {
      label: s.getLabels()[e],
      value: "" + s.getLabelForValue(i[s.axis])
    };
  }
  parseObjectData(e, s, i, n) {
    return Gh.bind(this)(e, s, i, n);
  }
  update(e) {
    const s = this._cachedMeta, i = s.dataset, n = s.data || [], a = s.iScale.getLabels();
    if (i.points = n, e !== "resize") {
      const o = this.resolveDatasetElementOptions(e);
      this.options.showLine || (o.borderWidth = 0);
      const r = {
        _loop: !0,
        _fullLoop: a.length === n.length,
        options: o
      };
      this.updateElement(i, void 0, r, e);
    }
    this.updateElements(n, 0, n.length, e);
  }
  updateElements(e, s, i, n) {
    const a = this._cachedMeta.rScale, o = n === "reset";
    for (let r = s; r < s + i; r++) {
      const l = e[r], c = this.resolveDataElementOptions(r, l.active ? "active" : n), u = a.getPointPositionForValue(r, this.getParsed(r).r), d = o ? a.xCenter : u.x, f = o ? a.yCenter : u.y, h = {
        x: d,
        y: f,
        angle: u.angle,
        skip: isNaN(d) || isNaN(f),
        options: c
      };
      this.updateElement(l, r, h, n);
    }
  }
}
V(Oa, "id", "radar"), V(Oa, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
}), V(Oa, "overrides", {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
});
class Na extends Gt {
  getLabelAndValue(e) {
    const s = this._cachedMeta, i = this.chart.data.labels || [], { xScale: n, yScale: a } = s, o = this.getParsed(e), r = n.getLabelForValue(o.x), l = a.getLabelForValue(o.y);
    return {
      label: i[e] || "",
      value: "(" + r + ", " + l + ")"
    };
  }
  update(e) {
    const s = this._cachedMeta, { data: i = [] } = s, n = this.chart._animationsDisabled;
    let { start: a, count: o } = Uh(s, i, n);
    if (this._drawStart = a, this._drawCount = o, Fh(s) && (a = 0, o = i.length), this.options.showLine) {
      this.datasetElementType || this.addElements();
      const { dataset: r, _dataset: l } = s;
      r._chart = this.chart, r._datasetIndex = this.index, r._decimated = !!l._decimated, r.points = i;
      const c = this.resolveDatasetElementOptions(e);
      c.segment = this.options.segment, this.updateElement(r, void 0, {
        animated: !n,
        options: c
      }, e);
    } else this.datasetElementType && (delete s.dataset, this.datasetElementType = !1);
    this.updateElements(i, a, o, e);
  }
  addElements() {
    const { showLine: e } = this.options;
    !this.datasetElementType && e && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements();
  }
  updateElements(e, s, i, n) {
    const a = n === "reset", { iScale: o, vScale: r, _stacked: l, _dataset: c } = this._cachedMeta, u = this.resolveDataElementOptions(s, n), d = this.getSharedOptions(u), f = this.includeOptions(n, d), h = o.axis, m = r.axis, { spanGaps: g, segment: v } = this.options, T = Wi(g) ? g : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || a || n === "none";
    let C = s > 0 && this.getParsed(s - 1);
    for (let P = s; P < s + i; ++P) {
      const M = e[P], w = this.getParsed(P), O = x ? M : {}, W = be(w[m]), J = O[h] = o.getPixelForValue(w[h], P), Q = O[m] = a || W ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, w, l) : w[m], P);
      O.skip = isNaN(J) || isNaN(Q) || W, O.stop = P > 0 && Math.abs(w[h] - C[h]) > T, v && (O.parsed = w, O.raw = c.data[P]), f && (O.options = d || this.resolveDataElementOptions(P, M.active ? "active" : n)), x || this.updateElement(M, P, O, n), C = w;
    }
    this.updateSharedOptions(d, n, u);
  }
  getMaxOverflow() {
    const e = this._cachedMeta, s = e.data || [];
    if (!this.options.showLine) {
      let r = 0;
      for (let l = s.length - 1; l >= 0; --l)
        r = Math.max(r, s[l].size(this.resolveDataElementOptions(l)) / 2);
      return r > 0 && r;
    }
    const i = e.dataset, n = i.options && i.options.borderWidth || 0;
    if (!s.length)
      return n;
    const a = s[0].size(this.resolveDataElementOptions(0)), o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
    return Math.max(n, a, o) / 2;
  }
}
V(Na, "id", "scatter"), V(Na, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1
}), V(Na, "overrides", {
  interaction: {
    mode: "point"
  },
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
var US = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BarController: Da,
  BubbleController: Ia,
  DoughnutController: oi,
  LineController: Ea,
  PieController: Vr,
  PolarAreaController: xn,
  RadarController: Oa,
  ScatterController: Na
});
function ei() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Wl {
  constructor(e) {
    V(this, "options");
    this.options = e || {};
  }
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(e) {
    Object.assign(Wl.prototype, e);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return ei();
  }
  parse() {
    return ei();
  }
  format() {
    return ei();
  }
  add() {
    return ei();
  }
  diff() {
    return ei();
  }
  startOf() {
    return ei();
  }
  endOf() {
    return ei();
  }
}
var FS = {
  _date: Wl
};
function WS(t, e, s, i) {
  const { controller: n, data: a, _sorted: o } = t, r = n._cachedMeta.iScale, l = t.dataset && t.dataset.options ? t.dataset.options.spanGaps : null;
  if (r && e === r.axis && e !== "r" && o && a.length) {
    const c = r._reversePixels ? r_ : ks;
    if (i) {
      if (n._sharedOptions) {
        const u = a[0], d = typeof u.getRange == "function" && u.getRange(e);
        if (d) {
          const f = c(a, e, s - d), h = c(a, e, s + d);
          return {
            lo: f.lo,
            hi: h.hi
          };
        }
      }
    } else {
      const u = c(a, e, s);
      if (l) {
        const { vScale: d } = n._cachedMeta, { _parsed: f } = t, h = f.slice(0, u.lo + 1).reverse().findIndex((g) => !be(g[d.axis]));
        u.lo -= Math.max(0, h);
        const m = f.slice(u.hi).findIndex((g) => !be(g[d.axis]));
        u.hi += Math.max(0, m);
      }
      return u;
    }
  }
  return {
    lo: 0,
    hi: a.length - 1
  };
}
function Ao(t, e, s, i, n) {
  const a = t.getSortedVisibleDatasetMetas(), o = s[e];
  for (let r = 0, l = a.length; r < l; ++r) {
    const { index: c, data: u } = a[r], { lo: d, hi: f } = WS(a[r], e, o, n);
    for (let h = d; h <= f; ++h) {
      const m = u[h];
      m.skip || i(m, c, h);
    }
  }
}
function BS(t) {
  const e = t.indexOf("x") !== -1, s = t.indexOf("y") !== -1;
  return function(i, n) {
    const a = e ? Math.abs(i.x - n.x) : 0, o = s ? Math.abs(i.y - n.y) : 0;
    return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2));
  };
}
function fr(t, e, s, i, n) {
  const a = [];
  return !n && !t.isPointInArea(e) || Ao(t, s, e, function(r, l, c) {
    !n && !Ts(r, t.chartArea, 0) || r.inRange(e.x, e.y, i) && a.push({
      element: r,
      datasetIndex: l,
      index: c
    });
  }, !0), a;
}
function HS(t, e, s, i) {
  let n = [];
  function a(o, r, l) {
    const { startAngle: c, endAngle: u } = o.getProps([
      "startAngle",
      "endAngle"
    ], i), { angle: d } = Ih(o, {
      x: e.x,
      y: e.y
    });
    Ln(d, c, u) && n.push({
      element: o,
      datasetIndex: r,
      index: l
    });
  }
  return Ao(t, s, e, a), n;
}
function jS(t, e, s, i, n, a) {
  let o = [];
  const r = BS(s);
  let l = Number.POSITIVE_INFINITY;
  function c(u, d, f) {
    const h = u.inRange(e.x, e.y, n);
    if (i && !h)
      return;
    const m = u.getCenterPoint(n);
    if (!(!!a || t.isPointInArea(m)) && !h)
      return;
    const v = r(e, m);
    v < l ? (o = [
      {
        element: u,
        datasetIndex: d,
        index: f
      }
    ], l = v) : v === l && o.push({
      element: u,
      datasetIndex: d,
      index: f
    });
  }
  return Ao(t, s, e, c), o;
}
function hr(t, e, s, i, n, a) {
  return !a && !t.isPointInArea(e) ? [] : s === "r" && !i ? HS(t, e, s, n) : jS(t, e, s, i, n, a);
}
function Zu(t, e, s, i, n) {
  const a = [], o = s === "x" ? "inXRange" : "inYRange";
  let r = !1;
  return Ao(t, s, e, (l, c, u) => {
    l[o] && l[o](e[s], n) && (a.push({
      element: l,
      datasetIndex: c,
      index: u
    }), r = r || l.inRange(e.x, e.y, n));
  }), i && !r ? [] : a;
}
var zS = {
  modes: {
    index(t, e, s, i) {
      const n = ii(e, t), a = s.axis || "x", o = s.includeInvisible || !1, r = s.intersect ? fr(t, n, a, i, o) : hr(t, n, a, !1, i, o), l = [];
      return r.length ? (t.getSortedVisibleDatasetMetas().forEach((c) => {
        const u = r[0].index, d = c.data[u];
        d && !d.skip && l.push({
          element: d,
          datasetIndex: c.index,
          index: u
        });
      }), l) : [];
    },
    dataset(t, e, s, i) {
      const n = ii(e, t), a = s.axis || "xy", o = s.includeInvisible || !1;
      let r = s.intersect ? fr(t, n, a, i, o) : hr(t, n, a, !1, i, o);
      if (r.length > 0) {
        const l = r[0].datasetIndex, c = t.getDatasetMeta(l).data;
        r = [];
        for (let u = 0; u < c.length; ++u)
          r.push({
            element: c[u],
            datasetIndex: l,
            index: u
          });
      }
      return r;
    },
    point(t, e, s, i) {
      const n = ii(e, t), a = s.axis || "xy", o = s.includeInvisible || !1;
      return fr(t, n, a, i, o);
    },
    nearest(t, e, s, i) {
      const n = ii(e, t), a = s.axis || "xy", o = s.includeInvisible || !1;
      return hr(t, n, a, s.intersect, i, o);
    },
    x(t, e, s, i) {
      const n = ii(e, t);
      return Zu(t, n, "x", s.intersect, i);
    },
    y(t, e, s, i) {
      const n = ii(e, t);
      return Zu(t, n, "y", s.intersect, i);
    }
  }
};
const ip = [
  "left",
  "top",
  "right",
  "bottom"
];
function Zi(t, e) {
  return t.filter((s) => s.pos === e);
}
function ed(t, e) {
  return t.filter((s) => ip.indexOf(s.pos) === -1 && s.box.axis === e);
}
function en(t, e) {
  return t.sort((s, i) => {
    const n = e ? i : s, a = e ? s : i;
    return n.weight === a.weight ? n.index - a.index : n.weight - a.weight;
  });
}
function VS(t) {
  const e = [];
  let s, i, n, a, o, r;
  for (s = 0, i = (t || []).length; s < i; ++s)
    n = t[s], { position: a, options: { stack: o, stackWeight: r = 1 } } = n, e.push({
      index: s,
      box: n,
      pos: a,
      horizontal: n.isHorizontal(),
      weight: n.weight,
      stack: o && a + o,
      stackWeight: r
    });
  return e;
}
function qS(t) {
  const e = {};
  for (const s of t) {
    const { stack: i, pos: n, stackWeight: a } = s;
    if (!i || !ip.includes(n))
      continue;
    const o = e[i] || (e[i] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    o.count++, o.weight += a;
  }
  return e;
}
function GS(t, e) {
  const s = qS(t), { vBoxMaxWidth: i, hBoxMaxHeight: n } = e;
  let a, o, r;
  for (a = 0, o = t.length; a < o; ++a) {
    r = t[a];
    const { fullSize: l } = r.box, c = s[r.stack], u = c && r.stackWeight / c.weight;
    r.horizontal ? (r.width = u ? u * i : l && e.availableWidth, r.height = n) : (r.width = i, r.height = u ? u * n : l && e.availableHeight);
  }
  return s;
}
function KS(t) {
  const e = VS(t), s = en(e.filter((c) => c.box.fullSize), !0), i = en(Zi(e, "left"), !0), n = en(Zi(e, "right")), a = en(Zi(e, "top"), !0), o = en(Zi(e, "bottom")), r = ed(e, "x"), l = ed(e, "y");
  return {
    fullSize: s,
    leftAndTop: i.concat(a),
    rightAndBottom: n.concat(l).concat(o).concat(r),
    chartArea: Zi(e, "chartArea"),
    vertical: i.concat(n).concat(l),
    horizontal: a.concat(o).concat(r)
  };
}
function td(t, e, s, i) {
  return Math.max(t[s], e[s]) + Math.max(t[i], e[i]);
}
function np(t, e) {
  t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right);
}
function $S(t, e, s, i) {
  const { pos: n, box: a } = s, o = t.maxPadding;
  if (!Se(n)) {
    s.size && (t[n] -= s.size);
    const d = i[s.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, s.horizontal ? a.height : a.width), s.size = d.size / d.count, t[n] += s.size;
  }
  a.getPadding && np(o, a.getPadding());
  const r = Math.max(0, e.outerWidth - td(o, t, "left", "right")), l = Math.max(0, e.outerHeight - td(o, t, "top", "bottom")), c = r !== t.w, u = l !== t.h;
  return t.w = r, t.h = l, s.horizontal ? {
    same: c,
    other: u
  } : {
    same: u,
    other: c
  };
}
function JS(t) {
  const e = t.maxPadding;
  function s(i) {
    const n = Math.max(e[i] - t[i], 0);
    return t[i] += n, n;
  }
  t.y += s("top"), t.x += s("left"), s("right"), s("bottom");
}
function YS(t, e) {
  const s = e.maxPadding;
  function i(n) {
    const a = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return n.forEach((o) => {
      a[o] = Math.max(e[o], s[o]);
    }), a;
  }
  return i(t ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function ln(t, e, s, i) {
  const n = [];
  let a, o, r, l, c, u;
  for (a = 0, o = t.length, c = 0; a < o; ++a) {
    r = t[a], l = r.box, l.update(r.width || e.w, r.height || e.h, YS(r.horizontal, e));
    const { same: d, other: f } = $S(e, s, r, i);
    c |= d && n.length, u = u || f, l.fullSize || n.push(r);
  }
  return c && ln(n, e, s, i) || u;
}
function ya(t, e, s, i, n) {
  t.top = s, t.left = e, t.right = e + i, t.bottom = s + n, t.width = i, t.height = n;
}
function sd(t, e, s, i) {
  const n = s.padding;
  let { x: a, y: o } = e;
  for (const r of t) {
    const l = r.box, c = i[r.stack] || {
      placed: 0,
      weight: 1
    }, u = r.stackWeight / c.weight || 1;
    if (r.horizontal) {
      const d = e.w * u, f = c.size || l.height;
      Nn(c.start) && (o = c.start), l.fullSize ? ya(l, n.left, o, s.outerWidth - n.right - n.left, f) : ya(l, e.left + c.placed, o, d, f), c.start = o, c.placed += d, o = l.bottom;
    } else {
      const d = e.h * u, f = c.size || l.width;
      Nn(c.start) && (a = c.start), l.fullSize ? ya(l, a, n.top, f, s.outerHeight - n.bottom - n.top) : ya(l, a, e.top + c.placed, f, d), c.start = a, c.placed += d, a = l.right;
    }
  }
  e.x = a, e.y = o;
}
var yt = {
  addBox(t, e) {
    t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
      return [
        {
          z: 0,
          draw(s) {
            e.draw(s);
          }
        }
      ];
    }, t.boxes.push(e);
  },
  removeBox(t, e) {
    const s = t.boxes ? t.boxes.indexOf(e) : -1;
    s !== -1 && t.boxes.splice(s, 1);
  },
  configure(t, e, s) {
    e.fullSize = s.fullSize, e.position = s.position, e.weight = s.weight;
  },
  update(t, e, s, i) {
    if (!t)
      return;
    const n = _t(t.options.layout.padding), a = Math.max(e - n.width, 0), o = Math.max(s - n.height, 0), r = KS(t.boxes), l = r.vertical, c = r.horizontal;
    Ee(t.boxes, (g) => {
      typeof g.beforeLayout == "function" && g.beforeLayout();
    });
    const u = l.reduce((g, v) => v.box.options && v.box.options.display === !1 ? g : g + 1, 0) || 1, d = Object.freeze({
      outerWidth: e,
      outerHeight: s,
      padding: n,
      availableWidth: a,
      availableHeight: o,
      vBoxMaxWidth: a / 2 / u,
      hBoxMaxHeight: o / 2
    }), f = Object.assign({}, n);
    np(f, _t(i));
    const h = Object.assign({
      maxPadding: f,
      w: a,
      h: o,
      x: n.left,
      y: n.top
    }, n), m = GS(l.concat(c), d);
    ln(r.fullSize, h, d, m), ln(l, h, d, m), ln(c, h, d, m) && ln(l, h, d, m), JS(h), sd(r.leftAndTop, h, d, m), h.x += h.w, h.y += h.h, sd(r.rightAndBottom, h, d, m), t.chartArea = {
      left: h.left,
      top: h.top,
      right: h.left + h.w,
      bottom: h.top + h.h,
      height: h.h,
      width: h.w
    }, Ee(r.chartArea, (g) => {
      const v = g.box;
      Object.assign(v, t.chartArea), v.update(h.w, h.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class ap {
  acquireContext(e, s) {
  }
  releaseContext(e) {
    return !1;
  }
  addEventListener(e, s, i) {
  }
  removeEventListener(e, s, i) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(e, s, i, n) {
    return s = Math.max(0, s || e.width), i = i || e.height, {
      width: s,
      height: Math.max(0, n ? Math.floor(s / n) : i)
    };
  }
  isAttached(e) {
    return !0;
  }
  updateConfig(e) {
  }
}
class XS extends ap {
  acquireContext(e) {
    return e && e.getContext && e.getContext("2d") || null;
  }
  updateConfig(e) {
    e.options.animation = !1;
  }
}
const La = "$chartjs", QS = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, id = (t) => t === null || t === "";
function ZS(t, e) {
  const s = t.style, i = t.getAttribute("height"), n = t.getAttribute("width");
  if (t[La] = {
    initial: {
      height: i,
      width: n,
      style: {
        display: s.display,
        height: s.height,
        width: s.width
      }
    }
  }, s.display = s.display || "block", s.boxSizing = s.boxSizing || "border-box", id(n)) {
    const a = Bu(t, "width");
    a !== void 0 && (t.width = a);
  }
  if (id(i))
    if (t.style.height === "")
      t.height = t.width / (e || 2);
    else {
      const a = Bu(t, "height");
      a !== void 0 && (t.height = a);
    }
  return t;
}
const op = eS ? {
  passive: !0
} : !1;
function ek(t, e, s) {
  t && t.addEventListener(e, s, op);
}
function tk(t, e, s) {
  t && t.canvas && t.canvas.removeEventListener(e, s, op);
}
function sk(t, e) {
  const s = QS[t.type] || t.type, { x: i, y: n } = ii(t, e);
  return {
    type: s,
    chart: e,
    native: t,
    x: i !== void 0 ? i : null,
    y: n !== void 0 ? n : null
  };
}
function io(t, e) {
  for (const s of t)
    if (s === e || s.contains(e))
      return !0;
}
function ik(t, e, s) {
  const i = t.canvas, n = new MutationObserver((a) => {
    let o = !1;
    for (const r of a)
      o = o || io(r.addedNodes, i), o = o && !io(r.removedNodes, i);
    o && s();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
function nk(t, e, s) {
  const i = t.canvas, n = new MutationObserver((a) => {
    let o = !1;
    for (const r of a)
      o = o || io(r.removedNodes, i), o = o && !io(r.addedNodes, i);
    o && s();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const Fn = /* @__PURE__ */ new Map();
let nd = 0;
function rp() {
  const t = window.devicePixelRatio;
  t !== nd && (nd = t, Fn.forEach((e, s) => {
    s.currentDevicePixelRatio !== t && e();
  }));
}
function ak(t, e) {
  Fn.size || window.addEventListener("resize", rp), Fn.set(t, e);
}
function ok(t) {
  Fn.delete(t), Fn.size || window.removeEventListener("resize", rp);
}
function rk(t, e, s) {
  const i = t.canvas, n = i && Fl(i);
  if (!n)
    return;
  const a = Lh((r, l) => {
    const c = n.clientWidth;
    s(r, l), c < n.clientWidth && s();
  }, window), o = new ResizeObserver((r) => {
    const l = r[0], c = l.contentRect.width, u = l.contentRect.height;
    c === 0 && u === 0 || a(c, u);
  });
  return o.observe(n), ak(t, a), o;
}
function pr(t, e, s) {
  s && s.disconnect(), e === "resize" && ok(t);
}
function lk(t, e, s) {
  const i = t.canvas, n = Lh((a) => {
    t.ctx !== null && s(sk(a, t));
  }, t);
  return ek(i, e, n), n;
}
class ck extends ap {
  acquireContext(e, s) {
    const i = e && e.getContext && e.getContext("2d");
    return i && i.canvas === e ? (ZS(e, s), i) : null;
  }
  releaseContext(e) {
    const s = e.canvas;
    if (!s[La])
      return !1;
    const i = s[La].initial;
    [
      "height",
      "width"
    ].forEach((a) => {
      const o = i[a];
      be(o) ? s.removeAttribute(a) : s.setAttribute(a, o);
    });
    const n = i.style || {};
    return Object.keys(n).forEach((a) => {
      s.style[a] = n[a];
    }), s.width = s.width, delete s[La], !0;
  }
  addEventListener(e, s, i) {
    this.removeEventListener(e, s);
    const n = e.$proxies || (e.$proxies = {}), o = {
      attach: ik,
      detach: nk,
      resize: rk
    }[s] || lk;
    n[s] = o(e, s, i);
  }
  removeEventListener(e, s) {
    const i = e.$proxies || (e.$proxies = {}), n = i[s];
    if (!n)
      return;
    ({
      attach: pr,
      detach: pr,
      resize: pr
    }[s] || tk)(e, s, n), i[s] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(e, s, i, n) {
    return Z_(e, s, i, n);
  }
  isAttached(e) {
    const s = e && Fl(e);
    return !!(s && s.isConnected);
  }
}
function uk(t) {
  return !Ul() || typeof OffscreenCanvas < "u" && t instanceof OffscreenCanvas ? XS : ck;
}
var wa;
let Ms = (wa = class {
  constructor() {
    V(this, "x");
    V(this, "y");
    V(this, "active", !1);
    V(this, "options");
    V(this, "$animations");
  }
  tooltipPosition(e) {
    const { x: s, y: i } = this.getProps([
      "x",
      "y"
    ], e);
    return {
      x: s,
      y: i
    };
  }
  hasValue() {
    return Wi(this.x) && Wi(this.y);
  }
  getProps(e, s) {
    const i = this.$animations;
    if (!s || !i)
      return this;
    const n = {};
    return e.forEach((a) => {
      n[a] = i[a] && i[a].active() ? i[a]._to : this[a];
    }), n;
  }
}, V(wa, "defaults", {}), V(wa, "defaultRoutes"), wa);
function dk(t, e) {
  const s = t.options.ticks, i = fk(t), n = Math.min(s.maxTicksLimit || i, i), a = s.major.enabled ? pk(e) : [], o = a.length, r = a[0], l = a[o - 1], c = [];
  if (o > n)
    return mk(e, c, a, o / n), c;
  const u = hk(a, e, n);
  if (o > 0) {
    let d, f;
    const h = o > 1 ? Math.round((l - r) / (o - 1)) : null;
    for (va(e, c, u, be(h) ? 0 : r - h, r), d = 0, f = o - 1; d < f; d++)
      va(e, c, u, a[d], a[d + 1]);
    return va(e, c, u, l, be(h) ? e.length : l + h), c;
  }
  return va(e, c, u), c;
}
function fk(t) {
  const e = t.options.offset, s = t._tickSize(), i = t._length / s + (e ? 0 : 1), n = t._maxLength / s;
  return Math.floor(Math.min(i, n));
}
function hk(t, e, s) {
  const i = gk(t), n = e.length / s;
  if (!i)
    return Math.max(n, 1);
  const a = s_(i);
  for (let o = 0, r = a.length - 1; o < r; o++) {
    const l = a[o];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function pk(t) {
  const e = [];
  let s, i;
  for (s = 0, i = t.length; s < i; s++)
    t[s].major && e.push(s);
  return e;
}
function mk(t, e, s, i) {
  let n = 0, a = s[0], o;
  for (i = Math.ceil(i), o = 0; o < t.length; o++)
    o === a && (e.push(t[o]), n++, a = s[n * i]);
}
function va(t, e, s, i, n) {
  const a = he(i, 0), o = Math.min(he(n, t.length), t.length);
  let r = 0, l, c, u;
  for (s = Math.ceil(s), n && (l = n - i, s = l / Math.floor(l / s)), u = a; u < 0; )
    r++, u = Math.round(a + r * s);
  for (c = Math.max(a, 0); c < o; c++)
    c === u && (e.push(t[c]), r++, u = Math.round(a + r * s));
}
function gk(t) {
  const e = t.length;
  let s, i;
  if (e < 2)
    return !1;
  for (i = t[0], s = 1; s < e; ++s)
    if (t[s] - t[s - 1] !== i)
      return !1;
  return i;
}
const bk = (t) => t === "left" ? "right" : t === "right" ? "left" : t, ad = (t, e, s) => e === "top" || e === "left" ? t[e] + s : t[e] - s, od = (t, e) => Math.min(e || t, t);
function rd(t, e) {
  const s = [], i = t.length / e, n = t.length;
  let a = 0;
  for (; a < n; a += i)
    s.push(t[Math.floor(a)]);
  return s;
}
function yk(t, e, s) {
  const i = t.ticks.length, n = Math.min(e, i - 1), a = t._startPixel, o = t._endPixel, r = 1e-6;
  let l = t.getPixelForTick(n), c;
  if (!(s && (i === 1 ? c = Math.max(l - a, o - l) : e === 0 ? c = (t.getPixelForTick(1) - l) / 2 : c = (l - t.getPixelForTick(n - 1)) / 2, l += n < e ? c : -c, l < a - r || l > o + r)))
    return l;
}
function vk(t, e) {
  Ee(t, (s) => {
    const i = s.gc, n = i.length / 2;
    let a;
    if (n > e) {
      for (a = 0; a < n; ++a)
        delete s.data[i[a]];
      i.splice(0, n);
    }
  });
}
function tn(t) {
  return t.drawTicks ? t.tickLength : 0;
}
function ld(t, e) {
  if (!t.display)
    return 0;
  const s = ct(t.font, e), i = _t(t.padding);
  return (Je(t.text) ? t.text.length : 1) * s.lineHeight + i.height;
}
function _k(t, e) {
  return Gs(t, {
    scale: e,
    type: "scale"
  });
}
function Sk(t, e, s) {
  return Gs(t, {
    tick: s,
    index: e,
    type: "tick"
  });
}
function kk(t, e, s) {
  let i = Dl(t);
  return (s && e !== "right" || !s && e === "right") && (i = bk(i)), i;
}
function Tk(t, e, s, i) {
  const { top: n, left: a, bottom: o, right: r, chart: l } = t, { chartArea: c, scales: u } = l;
  let d = 0, f, h, m;
  const g = o - n, v = r - a;
  if (t.isHorizontal()) {
    if (h = pt(i, a, r), Se(s)) {
      const T = Object.keys(s)[0], x = s[T];
      m = u[T].getPixelForValue(x) + g - e;
    } else s === "center" ? m = (c.bottom + c.top) / 2 + g - e : m = ad(t, s, e);
    f = r - a;
  } else {
    if (Se(s)) {
      const T = Object.keys(s)[0], x = s[T];
      h = u[T].getPixelForValue(x) - v + e;
    } else s === "center" ? h = (c.left + c.right) / 2 - v + e : h = ad(t, s, e);
    m = pt(i, o, n), d = s === "left" ? -ot : ot;
  }
  return {
    titleX: h,
    titleY: m,
    maxWidth: f,
    rotation: d
  };
}
class mi extends Ms {
  constructor(e) {
    super(), this.id = e.id, this.type = e.type, this.options = void 0, this.ctx = e.ctx, this.chart = e.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(e) {
    this.options = e.setContext(this.getContext()), this.axis = e.axis, this._userMin = this.parse(e.min), this._userMax = this.parse(e.max), this._suggestedMin = this.parse(e.suggestedMin), this._suggestedMax = this.parse(e.suggestedMax);
  }
  parse(e, s) {
    return e;
  }
  getUserBounds() {
    let { _userMin: e, _userMax: s, _suggestedMin: i, _suggestedMax: n } = this;
    return e = Lt(e, Number.POSITIVE_INFINITY), s = Lt(s, Number.NEGATIVE_INFINITY), i = Lt(i, Number.POSITIVE_INFINITY), n = Lt(n, Number.NEGATIVE_INFINITY), {
      min: Lt(e, i),
      max: Lt(s, n),
      minDefined: nt(e),
      maxDefined: nt(s)
    };
  }
  getMinMax(e) {
    let { min: s, max: i, minDefined: n, maxDefined: a } = this.getUserBounds(), o;
    if (n && a)
      return {
        min: s,
        max: i
      };
    const r = this.getMatchingVisibleMetas();
    for (let l = 0, c = r.length; l < c; ++l)
      o = r[l].controller.getMinMax(this, e), n || (s = Math.min(s, o.min)), a || (i = Math.max(i, o.max));
    return s = a && s > i ? i : s, i = n && s > i ? s : i, {
      min: Lt(s, Lt(i, s)),
      max: Lt(i, Lt(s, i))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const e = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || [];
  }
  getLabelItems(e = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(e));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    ze(this.options.beforeUpdate, [
      this
    ]);
  }
  update(e, s, i) {
    const { beginAtZero: n, grace: a, ticks: o } = this.options, r = o.sampleSize;
    this.beforeUpdate(), this.maxWidth = e, this.maxHeight = s, this._margins = i = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = D_(this, a, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = r < this.ticks.length;
    this._convertTicksToLabels(l ? rd(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), o.display && (o.autoSkip || o.source === "auto") && (this.ticks = dk(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let e = this.options.reverse, s, i;
    this.isHorizontal() ? (s = this.left, i = this.right) : (s = this.top, i = this.bottom, e = !e), this._startPixel = s, this._endPixel = i, this._reversePixels = e, this._length = i - s, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    ze(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    ze(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    ze(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(e) {
    this.chart.notifyPlugins(e, this.getContext()), ze(this.options[e], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    ze(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(e) {
    const s = this.options.ticks;
    let i, n, a;
    for (i = 0, n = e.length; i < n; i++)
      a = e[i], a.label = ze(s.callback, [
        a.value,
        i,
        e
      ], this);
  }
  afterTickToLabelConversion() {
    ze(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    ze(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const e = this.options, s = e.ticks, i = od(this.ticks.length, e.ticks.maxTicksLimit), n = s.minRotation || 0, a = s.maxRotation;
    let o = n, r, l, c;
    if (!this._isVisible() || !s.display || n >= a || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const u = this._getLabelSizes(), d = u.widest.width, f = u.highest.height, h = dt(this.chart.width - d, 0, this.maxWidth);
    r = e.offset ? this.maxWidth / i : h / (i - 1), d + 6 > r && (r = h / (i - (e.offset ? 0.5 : 1)), l = this.maxHeight - tn(e.grid) - s.padding - ld(e.title, this.chart.options.font), c = Math.sqrt(d * d + f * f), o = Rl(Math.min(Math.asin(dt((u.highest.height + 6) / r, -1, 1)), Math.asin(dt(l / c, -1, 1)) - Math.asin(dt(f / c, -1, 1)))), o = Math.max(n, Math.min(a, o))), this.labelRotation = o;
  }
  afterCalculateLabelRotation() {
    ze(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    ze(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const e = {
      width: 0,
      height: 0
    }, { chart: s, options: { ticks: i, title: n, grid: a } } = this, o = this._isVisible(), r = this.isHorizontal();
    if (o) {
      const l = ld(n, s.options.font);
      if (r ? (e.width = this.maxWidth, e.height = tn(a) + l) : (e.height = this.maxHeight, e.width = tn(a) + l), i.display && this.ticks.length) {
        const { first: c, last: u, widest: d, highest: f } = this._getLabelSizes(), h = i.padding * 2, m = Vt(this.labelRotation), g = Math.cos(m), v = Math.sin(m);
        if (r) {
          const T = i.mirror ? 0 : v * d.width + g * f.height;
          e.height = Math.min(this.maxHeight, e.height + T + h);
        } else {
          const T = i.mirror ? 0 : g * d.width + v * f.height;
          e.width = Math.min(this.maxWidth, e.width + T + h);
        }
        this._calculatePadding(c, u, v, g);
      }
    }
    this._handleMargins(), r ? (this.width = this._length = s.width - this._margins.left - this._margins.right, this.height = e.height) : (this.width = e.width, this.height = this._length = s.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(e, s, i, n) {
    const { ticks: { align: a, padding: o }, position: r } = this.options, l = this.labelRotation !== 0, c = r !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const u = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let f = 0, h = 0;
      l ? c ? (f = n * e.width, h = i * s.height) : (f = i * e.height, h = n * s.width) : a === "start" ? h = s.width : a === "end" ? f = e.width : a !== "inner" && (f = e.width / 2, h = s.width / 2), this.paddingLeft = Math.max((f - u + o) * this.width / (this.width - u), 0), this.paddingRight = Math.max((h - d + o) * this.width / (this.width - d), 0);
    } else {
      let u = s.height / 2, d = e.height / 2;
      a === "start" ? (u = 0, d = e.height) : a === "end" && (u = s.height, d = 0), this.paddingTop = u + o, this.paddingBottom = d + o;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    ze(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: e, position: s } = this.options;
    return s === "top" || s === "bottom" || e === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(e) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(e);
    let s, i;
    for (s = 0, i = e.length; s < i; s++)
      be(e[s].label) && (e.splice(s, 1), i--, s--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let e = this._labelSizes;
    if (!e) {
      const s = this.options.ticks.sampleSize;
      let i = this.ticks;
      s < i.length && (i = rd(i, s)), this._labelSizes = e = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit);
    }
    return e;
  }
  _computeLabelSizes(e, s, i) {
    const { ctx: n, _longestTextCache: a } = this, o = [], r = [], l = Math.floor(s / od(s, i));
    let c = 0, u = 0, d, f, h, m, g, v, T, x, C, P, M;
    for (d = 0; d < s; d += l) {
      if (m = e[d].label, g = this._resolveTickFontOptions(d), n.font = v = g.string, T = a[v] = a[v] || {
        data: {},
        gc: []
      }, x = g.lineHeight, C = P = 0, !be(m) && !Je(m))
        C = to(n, T.data, T.gc, C, m), P = x;
      else if (Je(m))
        for (f = 0, h = m.length; f < h; ++f)
          M = m[f], !be(M) && !Je(M) && (C = to(n, T.data, T.gc, C, M), P += x);
      o.push(C), r.push(P), c = Math.max(C, c), u = Math.max(P, u);
    }
    vk(a, s);
    const w = o.indexOf(c), O = r.indexOf(u), W = (J) => ({
      width: o[J] || 0,
      height: r[J] || 0
    });
    return {
      first: W(0),
      last: W(s - 1),
      widest: W(w),
      highest: W(O),
      widths: o,
      heights: r
    };
  }
  getLabelForValue(e) {
    return e;
  }
  getPixelForValue(e, s) {
    return NaN;
  }
  getValueForPixel(e) {
  }
  getPixelForTick(e) {
    const s = this.ticks;
    return e < 0 || e > s.length - 1 ? null : this.getPixelForValue(s[e].value);
  }
  getPixelForDecimal(e) {
    this._reversePixels && (e = 1 - e);
    const s = this._startPixel + e * this._length;
    return o_(this._alignToPixels ? Zs(this.chart, s, 0) : s);
  }
  getDecimalForPixel(e) {
    const s = (e - this._startPixel) / this._length;
    return this._reversePixels ? 1 - s : s;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: e, max: s } = this;
    return e < 0 && s < 0 ? s : e > 0 && s > 0 ? e : 0;
  }
  getContext(e) {
    const s = this.ticks || [];
    if (e >= 0 && e < s.length) {
      const i = s[e];
      return i.$context || (i.$context = Sk(this.getContext(), e, i));
    }
    return this.$context || (this.$context = _k(this.chart.getContext(), this));
  }
  _tickSize() {
    const e = this.options.ticks, s = Vt(this.labelRotation), i = Math.abs(Math.cos(s)), n = Math.abs(Math.sin(s)), a = this._getLabelSizes(), o = e.autoSkipPadding || 0, r = a ? a.widest.width + o : 0, l = a ? a.highest.height + o : 0;
    return this.isHorizontal() ? l * i > r * n ? r / i : l / n : l * n < r * i ? l / i : r / n;
  }
  _isVisible() {
    const e = this.options.display;
    return e !== "auto" ? !!e : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(e) {
    const s = this.axis, i = this.chart, n = this.options, { grid: a, position: o, border: r } = n, l = a.offset, c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), f = tn(a), h = [], m = r.setContext(this.getContext()), g = m.display ? m.width : 0, v = g / 2, T = function(re) {
      return Zs(i, re, g);
    };
    let x, C, P, M, w, O, W, J, Q, ie, ce, xe;
    if (o === "top")
      x = T(this.bottom), O = this.bottom - f, J = x - v, ie = T(e.top) + v, xe = e.bottom;
    else if (o === "bottom")
      x = T(this.top), ie = e.top, xe = T(e.bottom) - v, O = x + v, J = this.top + f;
    else if (o === "left")
      x = T(this.right), w = this.right - f, W = x - v, Q = T(e.left) + v, ce = e.right;
    else if (o === "right")
      x = T(this.left), Q = e.left, ce = T(e.right) - v, w = x + v, W = this.left + f;
    else if (s === "x") {
      if (o === "center")
        x = T((e.top + e.bottom) / 2 + 0.5);
      else if (Se(o)) {
        const re = Object.keys(o)[0], H = o[re];
        x = T(this.chart.scales[re].getPixelForValue(H));
      }
      ie = e.top, xe = e.bottom, O = x + v, J = O + f;
    } else if (s === "y") {
      if (o === "center")
        x = T((e.left + e.right) / 2);
      else if (Se(o)) {
        const re = Object.keys(o)[0], H = o[re];
        x = T(this.chart.scales[re].getPixelForValue(H));
      }
      w = x - v, W = w - f, Q = e.left, ce = e.right;
    }
    const Ge = he(n.ticks.maxTicksLimit, d), ge = Math.max(1, Math.ceil(d / Ge));
    for (C = 0; C < d; C += ge) {
      const re = this.getContext(C), H = a.setContext(re), q = r.setContext(re), le = H.lineWidth, Re = H.color, ke = q.dash || [], Ue = q.dashOffset, Fe = H.tickWidth, He = H.tickColor, rt = H.tickBorderDash || [], Xe = H.tickBorderDashOffset;
      P = yk(this, C, l), P !== void 0 && (M = Zs(i, P, le), c ? w = W = Q = ce = M : O = J = ie = xe = M, h.push({
        tx1: w,
        ty1: O,
        tx2: W,
        ty2: J,
        x1: Q,
        y1: ie,
        x2: ce,
        y2: xe,
        width: le,
        color: Re,
        borderDash: ke,
        borderDashOffset: Ue,
        tickWidth: Fe,
        tickColor: He,
        tickBorderDash: rt,
        tickBorderDashOffset: Xe
      }));
    }
    return this._ticksLength = d, this._borderValue = x, h;
  }
  _computeLabelItems(e) {
    const s = this.axis, i = this.options, { position: n, ticks: a } = i, o = this.isHorizontal(), r = this.ticks, { align: l, crossAlign: c, padding: u, mirror: d } = a, f = tn(i.grid), h = f + u, m = d ? -u : h, g = -Vt(this.labelRotation), v = [];
    let T, x, C, P, M, w, O, W, J, Q, ie, ce, xe = "middle";
    if (n === "top")
      w = this.bottom - m, O = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      w = this.top + m, O = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const ge = this._getYAxisLabelAlignment(f);
      O = ge.textAlign, M = ge.x;
    } else if (n === "right") {
      const ge = this._getYAxisLabelAlignment(f);
      O = ge.textAlign, M = ge.x;
    } else if (s === "x") {
      if (n === "center")
        w = (e.top + e.bottom) / 2 + h;
      else if (Se(n)) {
        const ge = Object.keys(n)[0], re = n[ge];
        w = this.chart.scales[ge].getPixelForValue(re) + h;
      }
      O = this._getXAxisLabelAlignment();
    } else if (s === "y") {
      if (n === "center")
        M = (e.left + e.right) / 2 - h;
      else if (Se(n)) {
        const ge = Object.keys(n)[0], re = n[ge];
        M = this.chart.scales[ge].getPixelForValue(re);
      }
      O = this._getYAxisLabelAlignment(f).textAlign;
    }
    s === "y" && (l === "start" ? xe = "top" : l === "end" && (xe = "bottom"));
    const Ge = this._getLabelSizes();
    for (T = 0, x = r.length; T < x; ++T) {
      C = r[T], P = C.label;
      const ge = a.setContext(this.getContext(T));
      W = this.getPixelForTick(T) + a.labelOffset, J = this._resolveTickFontOptions(T), Q = J.lineHeight, ie = Je(P) ? P.length : 1;
      const re = ie / 2, H = ge.color, q = ge.textStrokeColor, le = ge.textStrokeWidth;
      let Re = O;
      o ? (M = W, O === "inner" && (T === x - 1 ? Re = this.options.reverse ? "left" : "right" : T === 0 ? Re = this.options.reverse ? "right" : "left" : Re = "center"), n === "top" ? c === "near" || g !== 0 ? ce = -ie * Q + Q / 2 : c === "center" ? ce = -Ge.highest.height / 2 - re * Q + Q : ce = -Ge.highest.height + Q / 2 : c === "near" || g !== 0 ? ce = Q / 2 : c === "center" ? ce = Ge.highest.height / 2 - re * Q : ce = Ge.highest.height - ie * Q, d && (ce *= -1), g !== 0 && !ge.showLabelBackdrop && (M += Q / 2 * Math.sin(g))) : (w = W, ce = (1 - ie) * Q / 2);
      let ke;
      if (ge.showLabelBackdrop) {
        const Ue = _t(ge.backdropPadding), Fe = Ge.heights[T], He = Ge.widths[T];
        let rt = ce - Ue.top, Xe = 0 - Ue.left;
        switch (xe) {
          case "middle":
            rt -= Fe / 2;
            break;
          case "bottom":
            rt -= Fe;
            break;
        }
        switch (O) {
          case "center":
            Xe -= He / 2;
            break;
          case "right":
            Xe -= He;
            break;
          case "inner":
            T === x - 1 ? Xe -= He : T > 0 && (Xe -= He / 2);
            break;
        }
        ke = {
          left: Xe,
          top: rt,
          width: He + Ue.width,
          height: Fe + Ue.height,
          color: ge.backdropColor
        };
      }
      v.push({
        label: P,
        font: J,
        textOffset: ce,
        options: {
          rotation: g,
          color: H,
          strokeColor: q,
          strokeWidth: le,
          textAlign: Re,
          textBaseline: xe,
          translation: [
            M,
            w
          ],
          backdrop: ke
        }
      });
    }
    return v;
  }
  _getXAxisLabelAlignment() {
    const { position: e, ticks: s } = this.options;
    if (-Vt(this.labelRotation))
      return e === "top" ? "left" : "right";
    let n = "center";
    return s.align === "start" ? n = "left" : s.align === "end" ? n = "right" : s.align === "inner" && (n = "inner"), n;
  }
  _getYAxisLabelAlignment(e) {
    const { position: s, ticks: { crossAlign: i, mirror: n, padding: a } } = this.options, o = this._getLabelSizes(), r = e + a, l = o.widest.width;
    let c, u;
    return s === "left" ? n ? (u = this.right + a, i === "near" ? c = "left" : i === "center" ? (c = "center", u += l / 2) : (c = "right", u += l)) : (u = this.right - r, i === "near" ? c = "right" : i === "center" ? (c = "center", u -= l / 2) : (c = "left", u = this.left)) : s === "right" ? n ? (u = this.left + a, i === "near" ? c = "right" : i === "center" ? (c = "center", u -= l / 2) : (c = "left", u -= l)) : (u = this.left + r, i === "near" ? c = "left" : i === "center" ? (c = "center", u += l / 2) : (c = "right", u = this.right)) : c = "right", {
      textAlign: c,
      x: u
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const e = this.chart, s = this.options.position;
    if (s === "left" || s === "right")
      return {
        top: 0,
        left: this.left,
        bottom: e.height,
        right: this.right
      };
    if (s === "top" || s === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: e.width
      };
  }
  drawBackground() {
    const { ctx: e, options: { backgroundColor: s }, left: i, top: n, width: a, height: o } = this;
    s && (e.save(), e.fillStyle = s, e.fillRect(i, n, a, o), e.restore());
  }
  getLineWidthForValue(e) {
    const s = this.options.grid;
    if (!this._isVisible() || !s.display)
      return 0;
    const n = this.ticks.findIndex((a) => a.value === e);
    return n >= 0 ? s.setContext(this.getContext(n)).lineWidth : 0;
  }
  drawGrid(e) {
    const s = this.options.grid, i = this.ctx, n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(e));
    let a, o;
    const r = (l, c, u) => {
      !u.width || !u.color || (i.save(), i.lineWidth = u.width, i.strokeStyle = u.color, i.setLineDash(u.borderDash || []), i.lineDashOffset = u.borderDashOffset, i.beginPath(), i.moveTo(l.x, l.y), i.lineTo(c.x, c.y), i.stroke(), i.restore());
    };
    if (s.display)
      for (a = 0, o = n.length; a < o; ++a) {
        const l = n[a];
        s.drawOnChartArea && r({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), s.drawTicks && r({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: e, ctx: s, options: { border: i, grid: n } } = this, a = i.setContext(this.getContext()), o = i.display ? a.width : 0;
    if (!o)
      return;
    const r = n.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, u, d, f;
    this.isHorizontal() ? (c = Zs(e, this.left, o) - o / 2, u = Zs(e, this.right, r) + r / 2, d = f = l) : (d = Zs(e, this.top, o) - o / 2, f = Zs(e, this.bottom, r) + r / 2, c = u = l), s.save(), s.lineWidth = a.width, s.strokeStyle = a.color, s.beginPath(), s.moveTo(c, d), s.lineTo(u, f), s.stroke(), s.restore();
  }
  drawLabels(e) {
    if (!this.options.ticks.display)
      return;
    const i = this.ctx, n = this._computeLabelArea();
    n && ko(i, n);
    const a = this.getLabelItems(e);
    for (const o of a) {
      const r = o.options, l = o.font, c = o.label, u = o.textOffset;
      hi(i, c, 0, u, l, r);
    }
    n && To(i);
  }
  drawTitle() {
    const { ctx: e, options: { position: s, title: i, reverse: n } } = this;
    if (!i.display)
      return;
    const a = ct(i.font), o = _t(i.padding), r = i.align;
    let l = a.lineHeight / 2;
    s === "bottom" || s === "center" || Se(s) ? (l += o.bottom, Je(i.text) && (l += a.lineHeight * (i.text.length - 1))) : l += o.top;
    const { titleX: c, titleY: u, maxWidth: d, rotation: f } = Tk(this, l, s, r);
    hi(e, i.text, 0, 0, a, {
      color: i.color,
      maxWidth: d,
      rotation: f,
      textAlign: kk(r, s, n),
      textBaseline: "middle",
      translation: [
        c,
        u
      ]
    });
  }
  draw(e) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(e), this.drawBorder(), this.drawTitle(), this.drawLabels(e));
  }
  _layers() {
    const e = this.options, s = e.ticks && e.ticks.z || 0, i = he(e.grid && e.grid.z, -1), n = he(e.border && e.border.z, 0);
    return !this._isVisible() || this.draw !== mi.prototype.draw ? [
      {
        z: s,
        draw: (a) => {
          this.draw(a);
        }
      }
    ] : [
      {
        z: i,
        draw: (a) => {
          this.drawBackground(), this.drawGrid(a), this.drawTitle();
        }
      },
      {
        z: n,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: s,
        draw: (a) => {
          this.drawLabels(a);
        }
      }
    ];
  }
  getMatchingVisibleMetas(e) {
    const s = this.chart.getSortedVisibleDatasetMetas(), i = this.axis + "AxisID", n = [];
    let a, o;
    for (a = 0, o = s.length; a < o; ++a) {
      const r = s[a];
      r[i] === this.id && (!e || r.type === e) && n.push(r);
    }
    return n;
  }
  _resolveTickFontOptions(e) {
    const s = this.options.ticks.setContext(this.getContext(e));
    return ct(s.font);
  }
  _maxDigits() {
    const e = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / e;
  }
}
class _a {
  constructor(e, s, i) {
    this.type = e, this.scope = s, this.override = i, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(e) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, e.prototype);
  }
  register(e) {
    const s = Object.getPrototypeOf(e);
    let i;
    Pk(s) && (i = this.register(s));
    const n = this.items, a = e.id, o = this.scope + "." + a;
    if (!a)
      throw new Error("class does not have id: " + e);
    return a in n || (n[a] = e, xk(e, o, i), this.override && Ye.override(e.id, e.overrides)), o;
  }
  get(e) {
    return this.items[e];
  }
  unregister(e) {
    const s = this.items, i = e.id, n = this.scope;
    i in s && delete s[i], n && i in Ye[n] && (delete Ye[n][i], this.override && delete fi[i]);
  }
}
function xk(t, e, s) {
  const i = On(/* @__PURE__ */ Object.create(null), [
    s ? Ye.get(s) : {},
    Ye.get(e),
    t.defaults
  ]);
  Ye.set(e, i), t.defaultRoutes && Ak(e, t.defaultRoutes), t.descriptors && Ye.describe(e, t.descriptors);
}
function Ak(t, e) {
  Object.keys(e).forEach((s) => {
    const i = s.split("."), n = i.pop(), a = [
      t
    ].concat(i).join("."), o = e[s].split("."), r = o.pop(), l = o.join(".");
    Ye.route(a, n, l, r);
  });
}
function Pk(t) {
  return "id" in t && "defaults" in t;
}
class Ck {
  constructor() {
    this.controllers = new _a(Gt, "datasets", !0), this.elements = new _a(Ms, "elements"), this.plugins = new _a(Object, "plugins"), this.scales = new _a(mi, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...e) {
    this._each("register", e);
  }
  remove(...e) {
    this._each("unregister", e);
  }
  addControllers(...e) {
    this._each("register", e, this.controllers);
  }
  addElements(...e) {
    this._each("register", e, this.elements);
  }
  addPlugins(...e) {
    this._each("register", e, this.plugins);
  }
  addScales(...e) {
    this._each("register", e, this.scales);
  }
  getController(e) {
    return this._get(e, this.controllers, "controller");
  }
  getElement(e) {
    return this._get(e, this.elements, "element");
  }
  getPlugin(e) {
    return this._get(e, this.plugins, "plugin");
  }
  getScale(e) {
    return this._get(e, this.scales, "scale");
  }
  removeControllers(...e) {
    this._each("unregister", e, this.controllers);
  }
  removeElements(...e) {
    this._each("unregister", e, this.elements);
  }
  removePlugins(...e) {
    this._each("unregister", e, this.plugins);
  }
  removeScales(...e) {
    this._each("unregister", e, this.scales);
  }
  _each(e, s, i) {
    [
      ...s
    ].forEach((n) => {
      const a = i || this._getRegistryForType(n);
      i || a.isForType(n) || a === this.plugins && n.id ? this._exec(e, a, n) : Ee(n, (o) => {
        const r = i || this._getRegistryForType(o);
        this._exec(e, r, o);
      });
    });
  }
  _exec(e, s, i) {
    const n = wl(e);
    ze(i["before" + n], [], i), s[e](i), ze(i["after" + n], [], i);
  }
  _getRegistryForType(e) {
    for (let s = 0; s < this._typedRegistries.length; s++) {
      const i = this._typedRegistries[s];
      if (i.isForType(e))
        return i;
    }
    return this.plugins;
  }
  _get(e, s, i) {
    const n = s.get(e);
    if (n === void 0)
      throw new Error('"' + e + '" is not a registered ' + i + ".");
    return n;
  }
}
var is = /* @__PURE__ */ new Ck();
class wk {
  constructor() {
    this._init = void 0;
  }
  notify(e, s, i, n) {
    if (s === "beforeInit" && (this._init = this._createDescriptors(e, !0), this._notify(this._init, e, "install")), this._init === void 0)
      return;
    const a = n ? this._descriptors(e).filter(n) : this._descriptors(e), o = this._notify(a, e, s, i);
    return s === "afterDestroy" && (this._notify(a, e, "stop"), this._notify(this._init, e, "uninstall"), this._init = void 0), o;
  }
  _notify(e, s, i, n) {
    n = n || {};
    for (const a of e) {
      const o = a.plugin, r = o[i], l = [
        s,
        n,
        a.options
      ];
      if (ze(r, l, o) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    be(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(e) {
    if (this._cache)
      return this._cache;
    const s = this._cache = this._createDescriptors(e);
    return this._notifyStateChanges(e), s;
  }
  _createDescriptors(e, s) {
    const i = e && e.config, n = he(i.options && i.options.plugins, {}), a = Rk(i);
    return n === !1 && !s ? [] : Dk(e, a, n, s);
  }
  _notifyStateChanges(e) {
    const s = this._oldCache || [], i = this._cache, n = (a, o) => a.filter((r) => !o.some((l) => r.plugin.id === l.plugin.id));
    this._notify(n(s, i), e, "stop"), this._notify(n(i, s), e, "start");
  }
}
function Rk(t) {
  const e = {}, s = [], i = Object.keys(is.plugins.items);
  for (let a = 0; a < i.length; a++)
    s.push(is.getPlugin(i[a]));
  const n = t.plugins || [];
  for (let a = 0; a < n.length; a++) {
    const o = n[a];
    s.indexOf(o) === -1 && (s.push(o), e[o.id] = !0);
  }
  return {
    plugins: s,
    localIds: e
  };
}
function Mk(t, e) {
  return !e && t === !1 ? null : t === !0 ? {} : t;
}
function Dk(t, { plugins: e, localIds: s }, i, n) {
  const a = [], o = t.getContext();
  for (const r of e) {
    const l = r.id, c = Mk(i[l], n);
    c !== null && a.push({
      plugin: r,
      options: Ik(t.config, {
        plugin: r,
        local: s[l]
      }, c, o)
    });
  }
  return a;
}
function Ik(t, { plugin: e, local: s }, i, n) {
  const a = t.pluginScopeKeys(e), o = t.getOptionScopes(i, a);
  return s && e.defaults && o.push(e.defaults), t.createResolver(o, n, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function qr(t, e) {
  const s = Ye.datasets[t] || {};
  return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || s.indexAxis || "x";
}
function Ek(t, e) {
  let s = t;
  return t === "_index_" ? s = e : t === "_value_" && (s = e === "x" ? "y" : "x"), s;
}
function Ok(t, e) {
  return t === e ? "_index_" : "_value_";
}
function cd(t) {
  if (t === "x" || t === "y" || t === "r")
    return t;
}
function Nk(t) {
  if (t === "top" || t === "bottom")
    return "x";
  if (t === "left" || t === "right")
    return "y";
}
function Gr(t, ...e) {
  if (cd(t))
    return t;
  for (const s of e) {
    const i = s.axis || Nk(s.position) || t.length > 1 && cd(t[0].toLowerCase());
    if (i)
      return i;
  }
  throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`);
}
function ud(t, e, s) {
  if (s[e + "AxisID"] === t)
    return {
      axis: e
    };
}
function Lk(t, e) {
  if (e.data && e.data.datasets) {
    const s = e.data.datasets.filter((i) => i.xAxisID === t || i.yAxisID === t);
    if (s.length)
      return ud(t, "x", s[0]) || ud(t, "y", s[0]);
  }
  return {};
}
function Uk(t, e) {
  const s = fi[t.type] || {
    scales: {}
  }, i = e.scales || {}, n = qr(t.type, e), a = /* @__PURE__ */ Object.create(null);
  return Object.keys(i).forEach((o) => {
    const r = i[o];
    if (!Se(r))
      return console.error(`Invalid scale configuration for scale: ${o}`);
    if (r._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${o}`);
    const l = Gr(o, r, Lk(o, t), Ye.scales[r.type]), c = Ok(l, n), u = s.scales || {};
    a[o] = _n(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      r,
      u[l],
      u[c]
    ]);
  }), t.data.datasets.forEach((o) => {
    const r = o.type || t.type, l = o.indexAxis || qr(r, e), u = (fi[r] || {}).scales || {};
    Object.keys(u).forEach((d) => {
      const f = Ek(d, l), h = o[f + "AxisID"] || f;
      a[h] = a[h] || /* @__PURE__ */ Object.create(null), _n(a[h], [
        {
          axis: f
        },
        i[h],
        u[d]
      ]);
    });
  }), Object.keys(a).forEach((o) => {
    const r = a[o];
    _n(r, [
      Ye.scales[r.type],
      Ye.scale
    ]);
  }), a;
}
function lp(t) {
  const e = t.options || (t.options = {});
  e.plugins = he(e.plugins, {}), e.scales = Uk(t, e);
}
function cp(t) {
  return t = t || {}, t.datasets = t.datasets || [], t.labels = t.labels || [], t;
}
function Fk(t) {
  return t = t || {}, t.data = cp(t.data), lp(t), t;
}
const dd = /* @__PURE__ */ new Map(), up = /* @__PURE__ */ new Set();
function Sa(t, e) {
  let s = dd.get(t);
  return s || (s = e(), dd.set(t, s), up.add(s)), s;
}
const sn = (t, e, s) => {
  const i = Vs(e, s);
  i !== void 0 && t.add(i);
};
class Wk {
  constructor(e) {
    this._config = Fk(e), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(e) {
    this._config.type = e;
  }
  get data() {
    return this._config.data;
  }
  set data(e) {
    this._config.data = cp(e);
  }
  get options() {
    return this._config.options;
  }
  set options(e) {
    this._config.options = e;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const e = this._config;
    this.clearCache(), lp(e);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(e) {
    return Sa(e, () => [
      [
        `datasets.${e}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(e, s) {
    return Sa(`${e}.transition.${s}`, () => [
      [
        `datasets.${e}.transitions.${s}`,
        `transitions.${s}`
      ],
      [
        `datasets.${e}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(e, s) {
    return Sa(`${e}-${s}`, () => [
      [
        `datasets.${e}.elements.${s}`,
        `datasets.${e}`,
        `elements.${s}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(e) {
    const s = e.id, i = this.type;
    return Sa(`${i}-plugin-${s}`, () => [
      [
        `plugins.${s}`,
        ...e.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(e, s) {
    const i = this._scopeCache;
    let n = i.get(e);
    return (!n || s) && (n = /* @__PURE__ */ new Map(), i.set(e, n)), n;
  }
  getOptionScopes(e, s, i) {
    const { options: n, type: a } = this, o = this._cachedScopes(e, i), r = o.get(s);
    if (r)
      return r;
    const l = /* @__PURE__ */ new Set();
    s.forEach((u) => {
      e && (l.add(e), u.forEach((d) => sn(l, e, d))), u.forEach((d) => sn(l, n, d)), u.forEach((d) => sn(l, fi[a] || {}, d)), u.forEach((d) => sn(l, Ye, d)), u.forEach((d) => sn(l, jr, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), up.has(s) && o.set(s, c), c;
  }
  chartOptionScopes() {
    const { options: e, type: s } = this;
    return [
      e,
      fi[s] || {},
      Ye.datasets[s] || {},
      {
        type: s
      },
      Ye,
      jr
    ];
  }
  resolveNamedOptions(e, s, i, n = [
    ""
  ]) {
    const a = {
      $shared: !0
    }, { resolver: o, subPrefixes: r } = fd(this._resolverCache, e, n);
    let l = o;
    if (Hk(o, s)) {
      a.$shared = !1, i = qs(i) ? i() : i;
      const c = this.createResolver(e, i, r);
      l = Bi(o, i, c);
    }
    for (const c of s)
      a[c] = l[c];
    return a;
  }
  createResolver(e, s, i = [
    ""
  ], n) {
    const { resolver: a } = fd(this._resolverCache, e, i);
    return Se(s) ? Bi(a, s, void 0, n) : a;
  }
}
function fd(t, e, s) {
  let i = t.get(e);
  i || (i = /* @__PURE__ */ new Map(), t.set(e, i));
  const n = s.join();
  let a = i.get(n);
  return a || (a = {
    resolver: Ol(e, s),
    subPrefixes: s.filter((r) => !r.toLowerCase().includes("hover"))
  }, i.set(n, a)), a;
}
const Bk = (t) => Se(t) && Object.getOwnPropertyNames(t).some((e) => qs(t[e]));
function Hk(t, e) {
  const { isScriptable: s, isIndexable: i } = jh(t);
  for (const n of e) {
    const a = s(n), o = i(n), r = (o || a) && t[n];
    if (a && (qs(r) || Bk(r)) || o && Je(r))
      return !0;
  }
  return !1;
}
var jk = "4.5.1";
const zk = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function hd(t, e) {
  return t === "top" || t === "bottom" || zk.indexOf(t) === -1 && e === "x";
}
function pd(t, e) {
  return function(s, i) {
    return s[t] === i[t] ? s[e] - i[e] : s[t] - i[t];
  };
}
function md(t) {
  const e = t.chart, s = e.options.animation;
  e.notifyPlugins("afterRender"), ze(s && s.onComplete, [
    t
  ], e);
}
function Vk(t) {
  const e = t.chart, s = e.options.animation;
  ze(s && s.onProgress, [
    t
  ], e);
}
function dp(t) {
  return Ul() && typeof t == "string" ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t;
}
const Ua = {}, gd = (t) => {
  const e = dp(t);
  return Object.values(Ua).filter((s) => s.canvas === e).pop();
};
function qk(t, e, s) {
  const i = Object.keys(t);
  for (const n of i) {
    const a = +n;
    if (a >= e) {
      const o = t[n];
      delete t[n], (s > 0 || a > e) && (t[a + s] = o);
    }
  }
}
function Gk(t, e, s, i) {
  return !s || t.type === "mouseout" ? null : i ? e : t;
}
class Le {
  static register(...e) {
    is.add(...e), bd();
  }
  static unregister(...e) {
    is.remove(...e), bd();
  }
  constructor(e, s) {
    const i = this.config = new Wk(s), n = dp(e), a = gd(n);
    if (a)
      throw new Error("Canvas is already in use. Chart with ID '" + a.id + "' must be destroyed before the canvas with ID '" + a.canvas.id + "' can be reused.");
    const o = i.createResolver(i.chartOptionScopes(), this.getContext());
    this.platform = new (i.platform || uk(n))(), this.platform.updateConfig(i);
    const r = this.platform.acquireContext(n, o.aspectRatio), l = r && r.canvas, c = l && l.height, u = l && l.width;
    if (this.id = Kv(), this.ctx = r, this.canvas = l, this.width = u, this.height = c, this._options = o, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new wk(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = u_((d) => this.update(d), o.resizeDelay || 0), this._dataChanges = [], Ua[this.id] = this, !r || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    ps.listen(this, "complete", md), ps.listen(this, "progress", Vk), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: e, maintainAspectRatio: s }, width: i, height: n, _aspectRatio: a } = this;
    return be(e) ? s && a ? a : n ? i / n : null : e;
  }
  get data() {
    return this.config.data;
  }
  set data(e) {
    this.config.data = e;
  }
  get options() {
    return this._options;
  }
  set options(e) {
    this.config.options = e;
  }
  get registry() {
    return is;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Wu(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Lu(this.canvas, this.ctx), this;
  }
  stop() {
    return ps.stop(this), this;
  }
  resize(e, s) {
    ps.running(this) ? this._resizeBeforeDraw = {
      width: e,
      height: s
    } : this._resize(e, s);
  }
  _resize(e, s) {
    const i = this.options, n = this.canvas, a = i.maintainAspectRatio && this.aspectRatio, o = this.platform.getMaximumSize(n, e, s, a), r = i.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = o.width, this.height = o.height, this._aspectRatio = this.aspectRatio, Wu(this, r, !0) && (this.notifyPlugins("resize", {
      size: o
    }), ze(i.onResize, [
      this,
      o
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const s = this.options.scales || {};
    Ee(s, (i, n) => {
      i.id = n;
    });
  }
  buildOrUpdateScales() {
    const e = this.options, s = e.scales, i = this.scales, n = Object.keys(i).reduce((o, r) => (o[r] = !1, o), {});
    let a = [];
    s && (a = a.concat(Object.keys(s).map((o) => {
      const r = s[o], l = Gr(o, r), c = l === "r", u = l === "x";
      return {
        options: r,
        dposition: c ? "chartArea" : u ? "bottom" : "left",
        dtype: c ? "radialLinear" : u ? "category" : "linear"
      };
    }))), Ee(a, (o) => {
      const r = o.options, l = r.id, c = Gr(l, r), u = he(r.type, o.dtype);
      (r.position === void 0 || hd(r.position, c) !== hd(o.dposition)) && (r.position = o.dposition), n[l] = !0;
      let d = null;
      if (l in i && i[l].type === u)
        d = i[l];
      else {
        const f = is.getScale(u);
        d = new f({
          id: l,
          type: u,
          ctx: this.ctx,
          chart: this
        }), i[d.id] = d;
      }
      d.init(r, e);
    }), Ee(n, (o, r) => {
      o || delete i[r];
    }), Ee(i, (o) => {
      yt.configure(this, o, o.options), yt.addBox(this, o);
    });
  }
  _updateMetasets() {
    const e = this._metasets, s = this.data.datasets.length, i = e.length;
    if (e.sort((n, a) => n.index - a.index), i > s) {
      for (let n = s; n < i; ++n)
        this._destroyDatasetMeta(n);
      e.splice(s, i - s);
    }
    this._sortedMetasets = e.slice(0).sort(pd("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: e, data: { datasets: s } } = this;
    e.length > s.length && delete this._stacks, e.forEach((i, n) => {
      s.filter((a) => a === i._dataset).length === 0 && this._destroyDatasetMeta(n);
    });
  }
  buildOrUpdateControllers() {
    const e = [], s = this.data.datasets;
    let i, n;
    for (this._removeUnreferencedMetasets(), i = 0, n = s.length; i < n; i++) {
      const a = s[i];
      let o = this.getDatasetMeta(i);
      const r = a.type || this.config.type;
      if (o.type && o.type !== r && (this._destroyDatasetMeta(i), o = this.getDatasetMeta(i)), o.type = r, o.indexAxis = a.indexAxis || qr(r, this.options), o.order = a.order || 0, o.index = i, o.label = "" + a.label, o.visible = this.isDatasetVisible(i), o.controller)
        o.controller.updateIndex(i), o.controller.linkScales();
      else {
        const l = is.getController(r), { datasetElementType: c, dataElementType: u } = Ye.datasets[r];
        Object.assign(l, {
          dataElementType: is.getElement(u),
          datasetElementType: c && is.getElement(c)
        }), o.controller = new l(this, i), e.push(o.controller);
      }
    }
    return this._updateMetasets(), e;
  }
  _resetElements() {
    Ee(this.data.datasets, (e, s) => {
      this.getDatasetMeta(s).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(e) {
    const s = this.config;
    s.update();
    const i = this._options = s.createResolver(s.chartOptionScopes(), this.getContext()), n = this._animationsDisabled = !i.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: e,
      cancelable: !0
    }) === !1)
      return;
    const a = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let o = 0;
    for (let c = 0, u = this.data.datasets.length; c < u; c++) {
      const { controller: d } = this.getDatasetMeta(c), f = !n && a.indexOf(d) === -1;
      d.buildOrUpdateElements(f), o = Math.max(+d.getMaxOverflow(), o);
    }
    o = this._minPadding = i.layout.autoPadding ? o : 0, this._updateLayout(o), n || Ee(a, (c) => {
      c.reset();
    }), this._updateDatasets(e), this.notifyPlugins("afterUpdate", {
      mode: e
    }), this._layers.sort(pd("z", "_idx"));
    const { _active: r, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : r.length && this._updateHoverStyles(r, r, !0), this.render();
  }
  _updateScales() {
    Ee(this.scales, (e) => {
      yt.removeBox(this, e);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const e = this.options, s = new Set(Object.keys(this._listeners)), i = new Set(e.events);
    (!Cu(s, i) || !!this._responsiveListeners !== e.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: e } = this, s = this._getUniformDataChanges() || [];
    for (const { method: i, start: n, count: a } of s) {
      const o = i === "_removeElements" ? -a : a;
      qk(e, n, o);
    }
  }
  _getUniformDataChanges() {
    const e = this._dataChanges;
    if (!e || !e.length)
      return;
    this._dataChanges = [];
    const s = this.data.datasets.length, i = (a) => new Set(e.filter((o) => o[0] === a).map((o, r) => r + "," + o.splice(1).join(","))), n = i(0);
    for (let a = 1; a < s; a++)
      if (!Cu(n, i(a)))
        return;
    return Array.from(n).map((a) => a.split(",")).map((a) => ({
      method: a[1],
      start: +a[2],
      count: +a[3]
    }));
  }
  _updateLayout(e) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    yt.update(this, this.width, this.height, e);
    const s = this.chartArea, i = s.width <= 0 || s.height <= 0;
    this._layers = [], Ee(this.boxes, (n) => {
      i && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()));
    }, this), this._layers.forEach((n, a) => {
      n._idx = a;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(e) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: e,
      cancelable: !0
    }) !== !1) {
      for (let s = 0, i = this.data.datasets.length; s < i; ++s)
        this.getDatasetMeta(s).controller.configure();
      for (let s = 0, i = this.data.datasets.length; s < i; ++s)
        this._updateDataset(s, qs(e) ? e({
          datasetIndex: s
        }) : e);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: e
      });
    }
  }
  _updateDataset(e, s) {
    const i = this.getDatasetMeta(e), n = {
      meta: i,
      index: e,
      mode: s,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (i.controller._update(s), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (ps.has(this) ? this.attached && !ps.running(this) && ps.start(this) : (this.draw(), md({
      chart: this
    })));
  }
  draw() {
    let e;
    if (this._resizeBeforeDraw) {
      const { width: i, height: n } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(i, n);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const s = this._layers;
    for (e = 0; e < s.length && s[e].z <= 0; ++e)
      s[e].draw(this.chartArea);
    for (this._drawDatasets(); e < s.length; ++e)
      s[e].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(e) {
    const s = this._sortedMetasets, i = [];
    let n, a;
    for (n = 0, a = s.length; n < a; ++n) {
      const o = s[n];
      (!e || o.visible) && i.push(o);
    }
    return i;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const e = this.getSortedVisibleDatasetMetas();
    for (let s = e.length - 1; s >= 0; --s)
      this._drawDataset(e[s]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(e) {
    const s = this.ctx, i = {
      meta: e,
      index: e.index,
      cancelable: !0
    }, n = Zh(this, e);
    this.notifyPlugins("beforeDatasetDraw", i) !== !1 && (n && ko(s, n), e.controller.draw(), n && To(s), i.cancelable = !1, this.notifyPlugins("afterDatasetDraw", i));
  }
  isPointInArea(e) {
    return Ts(e, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(e, s, i, n) {
    const a = zS.modes[s];
    return typeof a == "function" ? a(this, e, i, n) : [];
  }
  getDatasetMeta(e) {
    const s = this.data.datasets[e], i = this._metasets;
    let n = i.filter((a) => a && a._dataset === s).pop();
    return n || (n = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: s && s.order || 0,
      index: e,
      _dataset: s,
      _parsed: [],
      _sorted: !1
    }, i.push(n)), n;
  }
  getContext() {
    return this.$context || (this.$context = Gs(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(e) {
    const s = this.data.datasets[e];
    if (!s)
      return !1;
    const i = this.getDatasetMeta(e);
    return typeof i.hidden == "boolean" ? !i.hidden : !s.hidden;
  }
  setDatasetVisibility(e, s) {
    const i = this.getDatasetMeta(e);
    i.hidden = !s;
  }
  toggleDataVisibility(e) {
    this._hiddenIndices[e] = !this._hiddenIndices[e];
  }
  getDataVisibility(e) {
    return !this._hiddenIndices[e];
  }
  _updateVisibility(e, s, i) {
    const n = i ? "show" : "hide", a = this.getDatasetMeta(e), o = a.controller._resolveAnimations(void 0, n);
    Nn(s) ? (a.data[s].hidden = !i, this.update()) : (this.setDatasetVisibility(e, i), o.update(a, {
      visible: i
    }), this.update((r) => r.datasetIndex === e ? n : void 0));
  }
  hide(e, s) {
    this._updateVisibility(e, s, !1);
  }
  show(e, s) {
    this._updateVisibility(e, s, !0);
  }
  _destroyDatasetMeta(e) {
    const s = this._metasets[e];
    s && s.controller && s.controller._destroy(), delete this._metasets[e];
  }
  _stop() {
    let e, s;
    for (this.stop(), ps.remove(this), e = 0, s = this.data.datasets.length; e < s; ++e)
      this._destroyDatasetMeta(e);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: e, ctx: s } = this;
    this._stop(), this.config.clearCache(), e && (this.unbindEvents(), Lu(e, s), this.platform.releaseContext(s), this.canvas = null, this.ctx = null), delete Ua[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...e) {
    return this.canvas.toDataURL(...e);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const e = this._listeners, s = this.platform, i = (a, o) => {
      s.addEventListener(this, a, o), e[a] = o;
    }, n = (a, o, r) => {
      a.offsetX = o, a.offsetY = r, this._eventHandler(a);
    };
    Ee(this.options.events, (a) => i(a, n));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const e = this._responsiveListeners, s = this.platform, i = (l, c) => {
      s.addEventListener(this, l, c), e[l] = c;
    }, n = (l, c) => {
      e[l] && (s.removeEventListener(this, l, c), delete e[l]);
    }, a = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let o;
    const r = () => {
      n("attach", r), this.attached = !0, this.resize(), i("resize", a), i("detach", o);
    };
    o = () => {
      this.attached = !1, n("resize", a), this._stop(), this._resize(0, 0), i("attach", r);
    }, s.isAttached(this.canvas) ? r() : o();
  }
  unbindEvents() {
    Ee(this._listeners, (e, s) => {
      this.platform.removeEventListener(this, s, e);
    }), this._listeners = {}, Ee(this._responsiveListeners, (e, s) => {
      this.platform.removeEventListener(this, s, e);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(e, s, i) {
    const n = i ? "set" : "remove";
    let a, o, r, l;
    for (s === "dataset" && (a = this.getDatasetMeta(e[0].datasetIndex), a.controller["_" + n + "DatasetHoverStyle"]()), r = 0, l = e.length; r < l; ++r) {
      o = e[r];
      const c = o && this.getDatasetMeta(o.datasetIndex).controller;
      c && c[n + "HoverStyle"](o.element, o.datasetIndex, o.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e) {
    const s = this._active || [], i = e.map(({ datasetIndex: a, index: o }) => {
      const r = this.getDatasetMeta(a);
      if (!r)
        throw new Error("No dataset found at index " + a);
      return {
        datasetIndex: a,
        element: r.data[o],
        index: o
      };
    });
    !Qa(i, s) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, s));
  }
  notifyPlugins(e, s, i) {
    return this._plugins.notify(this, e, s, i);
  }
  isPluginEnabled(e) {
    return this._plugins._cache.filter((s) => s.plugin.id === e).length === 1;
  }
  _updateHoverStyles(e, s, i) {
    const n = this.options.hover, a = (l, c) => l.filter((u) => !c.some((d) => u.datasetIndex === d.datasetIndex && u.index === d.index)), o = a(s, e), r = i ? e : a(e, s);
    o.length && this.updateHoverStyle(o, n.mode, !1), r.length && n.mode && this.updateHoverStyle(r, n.mode, !0);
  }
  _eventHandler(e, s) {
    const i = {
      event: e,
      replay: s,
      cancelable: !0,
      inChartArea: this.isPointInArea(e)
    }, n = (o) => (o.options.events || this.options.events).includes(e.native.type);
    if (this.notifyPlugins("beforeEvent", i, n) === !1)
      return;
    const a = this._handleEvent(e, s, i.inChartArea);
    return i.cancelable = !1, this.notifyPlugins("afterEvent", i, n), (a || i.changed) && this.render(), this;
  }
  _handleEvent(e, s, i) {
    const { _active: n = [], options: a } = this, o = s, r = this._getActiveElements(e, n, i, o), l = Zv(e), c = Gk(e, this._lastEvent, i, l);
    i && (this._lastEvent = null, ze(a.onHover, [
      e,
      r,
      this
    ], this), l && ze(a.onClick, [
      e,
      r,
      this
    ], this));
    const u = !Qa(r, n);
    return (u || s) && (this._active = r, this._updateHoverStyles(r, n, s)), this._lastEvent = c, u;
  }
  _getActiveElements(e, s, i, n) {
    if (e.type === "mouseout")
      return [];
    if (!i)
      return s;
    const a = this.options.hover;
    return this.getElementsAtEventForMode(e, a.mode, a, n);
  }
}
V(Le, "defaults", Ye), V(Le, "instances", Ua), V(Le, "overrides", fi), V(Le, "registry", is), V(Le, "version", jk), V(Le, "getChart", gd);
function bd() {
  return Ee(Le.instances, (t) => t._plugins.invalidate());
}
function Kk(t, e, s) {
  const { startAngle: i, x: n, y: a, outerRadius: o, innerRadius: r, options: l } = e, { borderWidth: c, borderJoinStyle: u } = l, d = Math.min(c / o, mt(i - s));
  if (t.beginPath(), t.arc(n, a, o - c / 2, i + d / 2, s - d / 2), r > 0) {
    const f = Math.min(c / r, mt(i - s));
    t.arc(n, a, r + c / 2, s - f / 2, i + f / 2, !0);
  } else {
    const f = Math.min(c / 2, o * mt(i - s));
    if (u === "round")
      t.arc(n, a, f, s - we / 2, i + we / 2, !0);
    else if (u === "bevel") {
      const h = 2 * f * f, m = -h * Math.cos(s + we / 2) + n, g = -h * Math.sin(s + we / 2) + a, v = h * Math.cos(i + we / 2) + n, T = h * Math.sin(i + we / 2) + a;
      t.lineTo(m, g), t.lineTo(v, T);
    }
  }
  t.closePath(), t.moveTo(0, 0), t.rect(0, 0, t.canvas.width, t.canvas.height), t.clip("evenodd");
}
function $k(t, e, s) {
  const { startAngle: i, pixelMargin: n, x: a, y: o, outerRadius: r, innerRadius: l } = e;
  let c = n / r;
  t.beginPath(), t.arc(a, o, r, i - c, s + c), l > n ? (c = n / l, t.arc(a, o, l, s + c, i - c, !0)) : t.arc(a, o, n, s + ot, i - ot), t.closePath(), t.clip();
}
function Jk(t) {
  return El(t, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Yk(t, e, s, i) {
  const n = Jk(t.options.borderRadius), a = (s - e) / 2, o = Math.min(a, i * e / 2), r = (l) => {
    const c = (s - Math.min(a, l)) * i / 2;
    return dt(l, 0, Math.min(a, c));
  };
  return {
    outerStart: r(n.outerStart),
    outerEnd: r(n.outerEnd),
    innerStart: dt(n.innerStart, 0, o),
    innerEnd: dt(n.innerEnd, 0, o)
  };
}
function _i(t, e, s, i) {
  return {
    x: s + t * Math.cos(e),
    y: i + t * Math.sin(e)
  };
}
function no(t, e, s, i, n, a) {
  const { x: o, y: r, startAngle: l, pixelMargin: c, innerRadius: u } = e, d = Math.max(e.outerRadius + i + s - c, 0), f = u > 0 ? u + i + s + c : 0;
  let h = 0;
  const m = n - l;
  if (i) {
    const ge = u > 0 ? u - i : 0, re = d > 0 ? d - i : 0, H = (ge + re) / 2, q = H !== 0 ? m * H / (H + i) : m;
    h = (m - q) / 2;
  }
  const g = Math.max(1e-3, m * d - s / we) / d, v = (m - g) / 2, T = l + v + h, x = n - v - h, { outerStart: C, outerEnd: P, innerStart: M, innerEnd: w } = Yk(e, f, d, x - T), O = d - C, W = d - P, J = T + C / O, Q = x - P / W, ie = f + M, ce = f + w, xe = T + M / ie, Ge = x - w / ce;
  if (t.beginPath(), a) {
    const ge = (J + Q) / 2;
    if (t.arc(o, r, d, J, ge), t.arc(o, r, d, ge, Q), P > 0) {
      const le = _i(W, Q, o, r);
      t.arc(le.x, le.y, P, Q, x + ot);
    }
    const re = _i(ce, x, o, r);
    if (t.lineTo(re.x, re.y), w > 0) {
      const le = _i(ce, Ge, o, r);
      t.arc(le.x, le.y, w, x + ot, Ge + Math.PI);
    }
    const H = (x - w / f + (T + M / f)) / 2;
    if (t.arc(o, r, f, x - w / f, H, !0), t.arc(o, r, f, H, T + M / f, !0), M > 0) {
      const le = _i(ie, xe, o, r);
      t.arc(le.x, le.y, M, xe + Math.PI, T - ot);
    }
    const q = _i(O, T, o, r);
    if (t.lineTo(q.x, q.y), C > 0) {
      const le = _i(O, J, o, r);
      t.arc(le.x, le.y, C, T - ot, J);
    }
  } else {
    t.moveTo(o, r);
    const ge = Math.cos(J) * d + o, re = Math.sin(J) * d + r;
    t.lineTo(ge, re);
    const H = Math.cos(Q) * d + o, q = Math.sin(Q) * d + r;
    t.lineTo(H, q);
  }
  t.closePath();
}
function Xk(t, e, s, i, n) {
  const { fullCircles: a, startAngle: o, circumference: r } = e;
  let l = e.endAngle;
  if (a) {
    no(t, e, s, i, l, n);
    for (let c = 0; c < a; ++c)
      t.fill();
    isNaN(r) || (l = o + (r % qe || qe));
  }
  return no(t, e, s, i, l, n), t.fill(), l;
}
function Qk(t, e, s, i, n) {
  const { fullCircles: a, startAngle: o, circumference: r, options: l } = e, { borderWidth: c, borderJoinStyle: u, borderDash: d, borderDashOffset: f, borderRadius: h } = l, m = l.borderAlign === "inner";
  if (!c)
    return;
  t.setLineDash(d || []), t.lineDashOffset = f, m ? (t.lineWidth = c * 2, t.lineJoin = u || "round") : (t.lineWidth = c, t.lineJoin = u || "bevel");
  let g = e.endAngle;
  if (a) {
    no(t, e, s, i, g, n);
    for (let v = 0; v < a; ++v)
      t.stroke();
    isNaN(r) || (g = o + (r % qe || qe));
  }
  m && $k(t, e, g), l.selfJoin && g - o >= we && h === 0 && u !== "miter" && Kk(t, e, g), a || (no(t, e, s, i, g, n), t.stroke());
}
class cn extends Ms {
  constructor(s) {
    super();
    V(this, "circumference");
    V(this, "endAngle");
    V(this, "fullCircles");
    V(this, "innerRadius");
    V(this, "outerRadius");
    V(this, "pixelMargin");
    V(this, "startAngle");
    this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, s && Object.assign(this, s);
  }
  inRange(s, i, n) {
    const a = this.getProps([
      "x",
      "y"
    ], n), { angle: o, distance: r } = Ih(a, {
      x: s,
      y: i
    }), { startAngle: l, endAngle: c, innerRadius: u, outerRadius: d, circumference: f } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], n), h = (this.options.spacing + this.options.borderWidth) / 2, m = he(f, c - l), g = Ln(o, l, c) && l !== c, v = m >= qe || g, T = Ss(r, u + h, d + h);
    return v && T;
  }
  getCenterPoint(s) {
    const { x: i, y: n, startAngle: a, endAngle: o, innerRadius: r, outerRadius: l } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], s), { offset: c, spacing: u } = this.options, d = (a + o) / 2, f = (r + l + u + c) / 2;
    return {
      x: i + Math.cos(d) * f,
      y: n + Math.sin(d) * f
    };
  }
  tooltipPosition(s) {
    return this.getCenterPoint(s);
  }
  draw(s) {
    const { options: i, circumference: n } = this, a = (i.offset || 0) / 4, o = (i.spacing || 0) / 2, r = i.circular;
    if (this.pixelMargin = i.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = n > qe ? Math.floor(n / qe) : 0, n === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    s.save();
    const l = (this.startAngle + this.endAngle) / 2;
    s.translate(Math.cos(l) * a, Math.sin(l) * a);
    const c = 1 - Math.sin(Math.min(we, n || 0)), u = a * c;
    s.fillStyle = i.backgroundColor, s.strokeStyle = i.borderColor, Xk(s, this, u, o, r), Qk(s, this, u, o, r), s.restore();
  }
}
V(cn, "id", "arc"), V(cn, "defaults", {
  borderAlign: "center",
  borderColor: "#fff",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0,
  selfJoin: !1
}), V(cn, "defaultRoutes", {
  backgroundColor: "backgroundColor"
}), V(cn, "descriptors", {
  _scriptable: !0,
  _indexable: (s) => s !== "borderDash"
});
function fp(t, e, s = e) {
  t.lineCap = he(s.borderCapStyle, e.borderCapStyle), t.setLineDash(he(s.borderDash, e.borderDash)), t.lineDashOffset = he(s.borderDashOffset, e.borderDashOffset), t.lineJoin = he(s.borderJoinStyle, e.borderJoinStyle), t.lineWidth = he(s.borderWidth, e.borderWidth), t.strokeStyle = he(s.borderColor, e.borderColor);
}
function Zk(t, e, s) {
  t.lineTo(s.x, s.y);
}
function eT(t) {
  return t.stepped ? k_ : t.tension || t.cubicInterpolationMode === "monotone" ? T_ : Zk;
}
function hp(t, e, s = {}) {
  const i = t.length, { start: n = 0, end: a = i - 1 } = s, { start: o, end: r } = e, l = Math.max(n, o), c = Math.min(a, r), u = n < o && a < o || n > r && a > r;
  return {
    count: i,
    start: l,
    loop: e.loop,
    ilen: c < l && !u ? i + c - l : c - l
  };
}
function tT(t, e, s, i) {
  const { points: n, options: a } = e, { count: o, start: r, loop: l, ilen: c } = hp(n, s, i), u = eT(a);
  let { move: d = !0, reverse: f } = i || {}, h, m, g;
  for (h = 0; h <= c; ++h)
    m = n[(r + (f ? c - h : h)) % o], !m.skip && (d ? (t.moveTo(m.x, m.y), d = !1) : u(t, g, m, f, a.stepped), g = m);
  return l && (m = n[(r + (f ? c : 0)) % o], u(t, g, m, f, a.stepped)), !!l;
}
function sT(t, e, s, i) {
  const n = e.points, { count: a, start: o, ilen: r } = hp(n, s, i), { move: l = !0, reverse: c } = i || {};
  let u = 0, d = 0, f, h, m, g, v, T;
  const x = (P) => (o + (c ? r - P : P)) % a, C = () => {
    g !== v && (t.lineTo(u, v), t.lineTo(u, g), t.lineTo(u, T));
  };
  for (l && (h = n[x(0)], t.moveTo(h.x, h.y)), f = 0; f <= r; ++f) {
    if (h = n[x(f)], h.skip)
      continue;
    const P = h.x, M = h.y, w = P | 0;
    w === m ? (M < g ? g = M : M > v && (v = M), u = (d * u + P) / ++d) : (C(), t.lineTo(P, M), m = w, d = 0, g = v = M), T = M;
  }
  C();
}
function Kr(t) {
  const e = t.options, s = e.borderDash && e.borderDash.length;
  return !t._decimated && !t._loop && !e.tension && e.cubicInterpolationMode !== "monotone" && !e.stepped && !s ? sT : tT;
}
function iT(t) {
  return t.stepped ? tS : t.tension || t.cubicInterpolationMode === "monotone" ? sS : ni;
}
function nT(t, e, s, i) {
  let n = e._path;
  n || (n = e._path = new Path2D(), e.path(n, s, i) && n.closePath()), fp(t, e.options), t.stroke(n);
}
function aT(t, e, s, i) {
  const { segments: n, options: a } = e, o = Kr(e);
  for (const r of n)
    fp(t, a, r.style), t.beginPath(), o(t, e, r, {
      start: s,
      end: s + i - 1
    }) && t.closePath(), t.stroke();
}
const oT = typeof Path2D == "function";
function rT(t, e, s, i) {
  oT && !e.options.segment ? nT(t, e, s, i) : aT(t, e, s, i);
}
class Hs extends Ms {
  constructor(e) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, e && Object.assign(this, e);
  }
  updateControlPoints(e, s) {
    const i = this.options;
    if ((i.tension || i.cubicInterpolationMode === "monotone") && !i.stepped && !this._pointsUpdated) {
      const n = i.spanGaps ? this._loop : this._fullLoop;
      K_(this._points, i, e, n, s), this._pointsUpdated = !0;
    }
  }
  set points(e) {
    this._points = e, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = lS(this, this.options.segment));
  }
  first() {
    const e = this.segments, s = this.points;
    return e.length && s[e[0].start];
  }
  last() {
    const e = this.segments, s = this.points, i = e.length;
    return i && s[e[i - 1].end];
  }
  interpolate(e, s) {
    const i = this.options, n = e[s], a = this.points, o = Qh(this, {
      property: s,
      start: n,
      end: n
    });
    if (!o.length)
      return;
    const r = [], l = iT(i);
    let c, u;
    for (c = 0, u = o.length; c < u; ++c) {
      const { start: d, end: f } = o[c], h = a[d], m = a[f];
      if (h === m) {
        r.push(h);
        continue;
      }
      const g = Math.abs((n - h[s]) / (m[s] - h[s])), v = l(h, m, g, i.stepped);
      v[s] = e[s], r.push(v);
    }
    return r.length === 1 ? r[0] : r;
  }
  pathSegment(e, s, i) {
    return Kr(this)(e, this, s, i);
  }
  path(e, s, i) {
    const n = this.segments, a = Kr(this);
    let o = this._loop;
    s = s || 0, i = i || this.points.length - s;
    for (const r of n)
      o &= a(e, this, r, {
        start: s,
        end: s + i - 1
      });
    return !!o;
  }
  draw(e, s, i, n) {
    const a = this.options || {};
    (this.points || []).length && a.borderWidth && (e.save(), rT(e, this, i, n), e.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
V(Hs, "id", "line"), V(Hs, "defaults", {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0
}), V(Hs, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), V(Hs, "descriptors", {
  _scriptable: !0,
  _indexable: (e) => e !== "borderDash" && e !== "fill"
});
function yd(t, e, s, i) {
  const n = t.options, { [s]: a } = t.getProps([
    s
  ], i);
  return Math.abs(e - a) < n.radius + n.hitRadius;
}
class Fa extends Ms {
  constructor(s) {
    super();
    V(this, "parsed");
    V(this, "skip");
    V(this, "stop");
    this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, s && Object.assign(this, s);
  }
  inRange(s, i, n) {
    const a = this.options, { x: o, y: r } = this.getProps([
      "x",
      "y"
    ], n);
    return Math.pow(s - o, 2) + Math.pow(i - r, 2) < Math.pow(a.hitRadius + a.radius, 2);
  }
  inXRange(s, i) {
    return yd(this, s, "x", i);
  }
  inYRange(s, i) {
    return yd(this, s, "y", i);
  }
  getCenterPoint(s) {
    const { x: i, y: n } = this.getProps([
      "x",
      "y"
    ], s);
    return {
      x: i,
      y: n
    };
  }
  size(s) {
    s = s || this.options || {};
    let i = s.radius || 0;
    i = Math.max(i, i && s.hoverRadius || 0);
    const n = i && s.borderWidth || 0;
    return (i + n) * 2;
  }
  draw(s, i) {
    const n = this.options;
    this.skip || n.radius < 0.1 || !Ts(this, i, this.size(n) / 2) || (s.strokeStyle = n.borderColor, s.lineWidth = n.borderWidth, s.fillStyle = n.backgroundColor, zr(s, n, this.x, this.y));
  }
  getRange() {
    const s = this.options || {};
    return s.radius + s.hitRadius;
  }
}
V(Fa, "id", "point"), /**
* @type {any}
*/
V(Fa, "defaults", {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
}), /**
* @type {any}
*/
V(Fa, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function pp(t, e) {
  const { x: s, y: i, base: n, width: a, height: o } = t.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], e);
  let r, l, c, u, d;
  return t.horizontal ? (d = o / 2, r = Math.min(s, n), l = Math.max(s, n), c = i - d, u = i + d) : (d = a / 2, r = s - d, l = s + d, c = Math.min(i, n), u = Math.max(i, n)), {
    left: r,
    top: c,
    right: l,
    bottom: u
  };
}
function js(t, e, s, i) {
  return t ? 0 : dt(e, s, i);
}
function lT(t, e, s) {
  const i = t.options.borderWidth, n = t.borderSkipped, a = Hh(i);
  return {
    t: js(n.top, a.top, 0, s),
    r: js(n.right, a.right, 0, e),
    b: js(n.bottom, a.bottom, 0, s),
    l: js(n.left, a.left, 0, e)
  };
}
function cT(t, e, s) {
  const { enableBorderRadius: i } = t.getProps([
    "enableBorderRadius"
  ]), n = t.options.borderRadius, a = ui(n), o = Math.min(e, s), r = t.borderSkipped, l = i || Se(n);
  return {
    topLeft: js(!l || r.top || r.left, a.topLeft, 0, o),
    topRight: js(!l || r.top || r.right, a.topRight, 0, o),
    bottomLeft: js(!l || r.bottom || r.left, a.bottomLeft, 0, o),
    bottomRight: js(!l || r.bottom || r.right, a.bottomRight, 0, o)
  };
}
function uT(t) {
  const e = pp(t), s = e.right - e.left, i = e.bottom - e.top, n = lT(t, s / 2, i / 2), a = cT(t, s / 2, i / 2);
  return {
    outer: {
      x: e.left,
      y: e.top,
      w: s,
      h: i,
      radius: a
    },
    inner: {
      x: e.left + n.l,
      y: e.top + n.t,
      w: s - n.l - n.r,
      h: i - n.t - n.b,
      radius: {
        topLeft: Math.max(0, a.topLeft - Math.max(n.t, n.l)),
        topRight: Math.max(0, a.topRight - Math.max(n.t, n.r)),
        bottomLeft: Math.max(0, a.bottomLeft - Math.max(n.b, n.l)),
        bottomRight: Math.max(0, a.bottomRight - Math.max(n.b, n.r))
      }
    }
  };
}
function mr(t, e, s, i) {
  const n = e === null, a = s === null, r = t && !(n && a) && pp(t, i);
  return r && (n || Ss(e, r.left, r.right)) && (a || Ss(s, r.top, r.bottom));
}
function dT(t) {
  return t.topLeft || t.topRight || t.bottomLeft || t.bottomRight;
}
function fT(t, e) {
  t.rect(e.x, e.y, e.w, e.h);
}
function gr(t, e, s = {}) {
  const i = t.x !== s.x ? -e : 0, n = t.y !== s.y ? -e : 0, a = (t.x + t.w !== s.x + s.w ? e : 0) - i, o = (t.y + t.h !== s.y + s.h ? e : 0) - n;
  return {
    x: t.x + i,
    y: t.y + n,
    w: t.w + a,
    h: t.h + o,
    radius: t.radius
  };
}
class Wa extends Ms {
  constructor(e) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, e && Object.assign(this, e);
  }
  draw(e) {
    const { inflateAmount: s, options: { borderColor: i, backgroundColor: n } } = this, { inner: a, outer: o } = uT(this), r = dT(o.radius) ? Un : fT;
    e.save(), (o.w !== a.w || o.h !== a.h) && (e.beginPath(), r(e, gr(o, s, a)), e.clip(), r(e, gr(a, -s, o)), e.fillStyle = i, e.fill("evenodd")), e.beginPath(), r(e, gr(a, s)), e.fillStyle = n, e.fill(), e.restore();
  }
  inRange(e, s, i) {
    return mr(this, e, s, i);
  }
  inXRange(e, s) {
    return mr(this, e, null, s);
  }
  inYRange(e, s) {
    return mr(this, null, e, s);
  }
  getCenterPoint(e) {
    const { x: s, y: i, base: n, horizontal: a } = this.getProps([
      "x",
      "y",
      "base",
      "horizontal"
    ], e);
    return {
      x: a ? (s + n) / 2 : s,
      y: a ? i : (i + n) / 2
    };
  }
  getRange(e) {
    return e === "x" ? this.width / 2 : this.height / 2;
  }
}
V(Wa, "id", "bar"), V(Wa, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), V(Wa, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
var hT = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcElement: cn,
  BarElement: Wa,
  LineElement: Hs,
  PointElement: Fa
});
const $r = [
  "rgb(54, 162, 235)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
  // grey
], vd = /* @__PURE__ */ $r.map((t) => t.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function mp(t) {
  return $r[t % $r.length];
}
function gp(t) {
  return vd[t % vd.length];
}
function pT(t, e) {
  return t.borderColor = mp(e), t.backgroundColor = gp(e), ++e;
}
function mT(t, e) {
  return t.backgroundColor = t.data.map(() => mp(e++)), e;
}
function gT(t, e) {
  return t.backgroundColor = t.data.map(() => gp(e++)), e;
}
function bT(t) {
  let e = 0;
  return (s, i) => {
    const n = t.getDatasetMeta(i).controller;
    n instanceof oi ? e = mT(s, e) : n instanceof xn ? e = gT(s, e) : n && (e = pT(s, e));
  };
}
function _d(t) {
  let e;
  for (e in t)
    if (t[e].borderColor || t[e].backgroundColor)
      return !0;
  return !1;
}
function yT(t) {
  return t && (t.borderColor || t.backgroundColor);
}
function vT() {
  return Ye.borderColor !== "rgba(0,0,0,0.1)" || Ye.backgroundColor !== "rgba(0,0,0,0.1)";
}
var _T = {
  id: "colors",
  defaults: {
    enabled: !0,
    forceOverride: !1
  },
  beforeLayout(t, e, s) {
    if (!s.enabled)
      return;
    const { data: { datasets: i }, options: n } = t.config, { elements: a } = n, o = _d(i) || yT(n) || a && _d(a) || vT();
    if (!s.forceOverride && o)
      return;
    const r = bT(t);
    i.forEach(r);
  }
};
function ST(t, e, s, i, n) {
  const a = n.samples || i;
  if (a >= s)
    return t.slice(e, e + s);
  const o = [], r = (s - 2) / (a - 2);
  let l = 0;
  const c = e + s - 1;
  let u = e, d, f, h, m, g;
  for (o[l++] = t[u], d = 0; d < a - 2; d++) {
    let v = 0, T = 0, x;
    const C = Math.floor((d + 1) * r) + 1 + e, P = Math.min(Math.floor((d + 2) * r) + 1, s) + e, M = P - C;
    for (x = C; x < P; x++)
      v += t[x].x, T += t[x].y;
    v /= M, T /= M;
    const w = Math.floor(d * r) + 1 + e, O = Math.min(Math.floor((d + 1) * r) + 1, s) + e, { x: W, y: J } = t[u];
    for (h = m = -1, x = w; x < O; x++)
      m = 0.5 * Math.abs((W - v) * (t[x].y - J) - (W - t[x].x) * (T - J)), m > h && (h = m, f = t[x], g = x);
    o[l++] = f, u = g;
  }
  return o[l++] = t[c], o;
}
function kT(t, e, s, i) {
  let n = 0, a = 0, o, r, l, c, u, d, f, h, m, g;
  const v = [], T = e + s - 1, x = t[e].x, P = t[T].x - x;
  for (o = e; o < e + s; ++o) {
    r = t[o], l = (r.x - x) / P * i, c = r.y;
    const M = l | 0;
    if (M === u)
      c < m ? (m = c, d = o) : c > g && (g = c, f = o), n = (a * n + r.x) / ++a;
    else {
      const w = o - 1;
      if (!be(d) && !be(f)) {
        const O = Math.min(d, f), W = Math.max(d, f);
        O !== h && O !== w && v.push({
          ...t[O],
          x: n
        }), W !== h && W !== w && v.push({
          ...t[W],
          x: n
        });
      }
      o > 0 && w !== h && v.push(t[w]), v.push(r), u = M, a = 0, m = g = c, d = f = h = o;
    }
  }
  return v;
}
function bp(t) {
  if (t._decimated) {
    const e = t._data;
    delete t._decimated, delete t._data, Object.defineProperty(t, "data", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: e
    });
  }
}
function Sd(t) {
  t.data.datasets.forEach((e) => {
    bp(e);
  });
}
function TT(t, e) {
  const s = e.length;
  let i = 0, n;
  const { iScale: a } = t, { min: o, max: r, minDefined: l, maxDefined: c } = a.getUserBounds();
  return l && (i = dt(ks(e, a.axis, o).lo, 0, s - 1)), c ? n = dt(ks(e, a.axis, r).hi + 1, i, s) - i : n = s - i, {
    start: i,
    count: n
  };
}
var xT = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (t, e, s) => {
    if (!s.enabled) {
      Sd(t);
      return;
    }
    const i = t.width;
    t.data.datasets.forEach((n, a) => {
      const { _data: o, indexAxis: r } = n, l = t.getDatasetMeta(a), c = o || n.data;
      if (rn([
        r,
        t.options.indexAxis
      ]) === "y" || !l.controller.supportsDecimation)
        return;
      const u = t.scales[l.xAxisID];
      if (u.type !== "linear" && u.type !== "time" || t.options.parsing)
        return;
      let { start: d, count: f } = TT(l, c);
      const h = s.threshold || 4 * i;
      if (f <= h) {
        bp(n);
        return;
      }
      be(o) && (n._data = c, delete n.data, Object.defineProperty(n, "data", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this._decimated;
        },
        set: function(g) {
          this._data = g;
        }
      }));
      let m;
      switch (s.algorithm) {
        case "lttb":
          m = ST(c, d, f, i, s);
          break;
        case "min-max":
          m = kT(c, d, f, i);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${s.algorithm}'`);
      }
      n._decimated = m;
    });
  },
  destroy(t) {
    Sd(t);
  }
};
function AT(t, e, s) {
  const i = t.segments, n = t.points, a = e.points, o = [];
  for (const r of i) {
    let { start: l, end: c } = r;
    c = Po(l, c, n);
    const u = Jr(s, n[l], n[c], r.loop);
    if (!e.segments) {
      o.push({
        source: r,
        target: u,
        start: n[l],
        end: n[c]
      });
      continue;
    }
    const d = Qh(e, u);
    for (const f of d) {
      const h = Jr(s, a[f.start], a[f.end], f.loop), m = Xh(r, n, h);
      for (const g of m)
        o.push({
          source: g,
          target: f,
          start: {
            [s]: kd(u, h, "start", Math.max)
          },
          end: {
            [s]: kd(u, h, "end", Math.min)
          }
        });
    }
  }
  return o;
}
function Jr(t, e, s, i) {
  if (i)
    return;
  let n = e[t], a = s[t];
  return t === "angle" && (n = mt(n), a = mt(a)), {
    property: t,
    start: n,
    end: a
  };
}
function PT(t, e) {
  const { x: s = null, y: i = null } = t || {}, n = e.points, a = [];
  return e.segments.forEach(({ start: o, end: r }) => {
    r = Po(o, r, n);
    const l = n[o], c = n[r];
    i !== null ? (a.push({
      x: l.x,
      y: i
    }), a.push({
      x: c.x,
      y: i
    })) : s !== null && (a.push({
      x: s,
      y: l.y
    }), a.push({
      x: s,
      y: c.y
    }));
  }), a;
}
function Po(t, e, s) {
  for (; e > t; e--) {
    const i = s[e];
    if (!isNaN(i.x) && !isNaN(i.y))
      break;
  }
  return e;
}
function kd(t, e, s, i) {
  return t && e ? i(t[s], e[s]) : t ? t[s] : e ? e[s] : 0;
}
function yp(t, e) {
  let s = [], i = !1;
  return Je(t) ? (i = !0, s = t) : s = PT(t, e), s.length ? new Hs({
    points: s,
    options: {
      tension: 0
    },
    _loop: i,
    _fullLoop: i
  }) : null;
}
function Td(t) {
  return t && t.fill !== !1;
}
function CT(t, e, s) {
  let n = t[e].fill;
  const a = [
    e
  ];
  let o;
  if (!s)
    return n;
  for (; n !== !1 && a.indexOf(n) === -1; ) {
    if (!nt(n))
      return n;
    if (o = t[n], !o)
      return !1;
    if (o.visible)
      return n;
    a.push(n), n = o.fill;
  }
  return !1;
}
function wT(t, e, s) {
  const i = IT(t);
  if (Se(i))
    return isNaN(i.value) ? !1 : i;
  let n = parseFloat(i);
  return nt(n) && Math.floor(n) === n ? RT(i[0], e, n, s) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(i) >= 0 && i;
}
function RT(t, e, s, i) {
  return (t === "-" || t === "+") && (s = e + s), s === e || s < 0 || s >= i ? !1 : s;
}
function MT(t, e) {
  let s = null;
  return t === "start" ? s = e.bottom : t === "end" ? s = e.top : Se(t) ? s = e.getPixelForValue(t.value) : e.getBasePixel && (s = e.getBasePixel()), s;
}
function DT(t, e, s) {
  let i;
  return t === "start" ? i = s : t === "end" ? i = e.options.reverse ? e.min : e.max : Se(t) ? i = t.value : i = e.getBaseValue(), i;
}
function IT(t) {
  const e = t.options, s = e.fill;
  let i = he(s && s.target, s);
  return i === void 0 && (i = !!e.backgroundColor), i === !1 || i === null ? !1 : i === !0 ? "origin" : i;
}
function ET(t) {
  const { scale: e, index: s, line: i } = t, n = [], a = i.segments, o = i.points, r = OT(e, s);
  r.push(yp({
    x: null,
    y: e.bottom
  }, i));
  for (let l = 0; l < a.length; l++) {
    const c = a[l];
    for (let u = c.start; u <= c.end; u++)
      NT(n, o[u], r);
  }
  return new Hs({
    points: n,
    options: {}
  });
}
function OT(t, e) {
  const s = [], i = t.getMatchingVisibleMetas("line");
  for (let n = 0; n < i.length; n++) {
    const a = i[n];
    if (a.index === e)
      break;
    a.hidden || s.unshift(a.dataset);
  }
  return s;
}
function NT(t, e, s) {
  const i = [];
  for (let n = 0; n < s.length; n++) {
    const a = s[n], { first: o, last: r, point: l } = LT(a, e, "x");
    if (!(!l || o && r)) {
      if (o)
        i.unshift(l);
      else if (t.push(l), !r)
        break;
    }
  }
  t.push(...i);
}
function LT(t, e, s) {
  const i = t.interpolate(e, s);
  if (!i)
    return {};
  const n = i[s], a = t.segments, o = t.points;
  let r = !1, l = !1;
  for (let c = 0; c < a.length; c++) {
    const u = a[c], d = o[u.start][s], f = o[u.end][s];
    if (Ss(n, d, f)) {
      r = n === d, l = n === f;
      break;
    }
  }
  return {
    first: r,
    last: l,
    point: i
  };
}
class vp {
  constructor(e) {
    this.x = e.x, this.y = e.y, this.radius = e.radius;
  }
  pathSegment(e, s, i) {
    const { x: n, y: a, radius: o } = this;
    return s = s || {
      start: 0,
      end: qe
    }, e.arc(n, a, o, s.end, s.start, !0), !i.bounds;
  }
  interpolate(e) {
    const { x: s, y: i, radius: n } = this, a = e.angle;
    return {
      x: s + Math.cos(a) * n,
      y: i + Math.sin(a) * n,
      angle: a
    };
  }
}
function UT(t) {
  const { chart: e, fill: s, line: i } = t;
  if (nt(s))
    return FT(e, s);
  if (s === "stack")
    return ET(t);
  if (s === "shape")
    return !0;
  const n = WT(t);
  return n instanceof vp ? n : yp(n, i);
}
function FT(t, e) {
  const s = t.getDatasetMeta(e);
  return s && t.isDatasetVisible(e) ? s.dataset : null;
}
function WT(t) {
  return (t.scale || {}).getPointPositionForValue ? HT(t) : BT(t);
}
function BT(t) {
  const { scale: e = {}, fill: s } = t, i = MT(s, e);
  if (nt(i)) {
    const n = e.isHorizontal();
    return {
      x: n ? i : null,
      y: n ? null : i
    };
  }
  return null;
}
function HT(t) {
  const { scale: e, fill: s } = t, i = e.options, n = e.getLabels().length, a = i.reverse ? e.max : e.min, o = DT(s, e, a), r = [];
  if (i.grid.circular) {
    const l = e.getPointPositionForValue(0, a);
    return new vp({
      x: l.x,
      y: l.y,
      radius: e.getDistanceFromCenterForValue(o)
    });
  }
  for (let l = 0; l < n; ++l)
    r.push(e.getPointPositionForValue(l, o));
  return r;
}
function br(t, e, s) {
  const i = UT(e), { chart: n, index: a, line: o, scale: r, axis: l } = e, c = o.options, u = c.fill, d = c.backgroundColor, { above: f = d, below: h = d } = u || {}, m = n.getDatasetMeta(a), g = Zh(n, m);
  i && o.points.length && (ko(t, s), jT(t, {
    line: o,
    target: i,
    above: f,
    below: h,
    area: s,
    scale: r,
    axis: l,
    clip: g
  }), To(t));
}
function jT(t, e) {
  const { line: s, target: i, above: n, below: a, area: o, scale: r, clip: l } = e, c = s._loop ? "angle" : e.axis;
  t.save();
  let u = a;
  a !== n && (c === "x" ? (xd(t, i, o.top), yr(t, {
    line: s,
    target: i,
    color: n,
    scale: r,
    property: c,
    clip: l
  }), t.restore(), t.save(), xd(t, i, o.bottom)) : c === "y" && (Ad(t, i, o.left), yr(t, {
    line: s,
    target: i,
    color: a,
    scale: r,
    property: c,
    clip: l
  }), t.restore(), t.save(), Ad(t, i, o.right), u = n)), yr(t, {
    line: s,
    target: i,
    color: u,
    scale: r,
    property: c,
    clip: l
  }), t.restore();
}
function xd(t, e, s) {
  const { segments: i, points: n } = e;
  let a = !0, o = !1;
  t.beginPath();
  for (const r of i) {
    const { start: l, end: c } = r, u = n[l], d = n[Po(l, c, n)];
    a ? (t.moveTo(u.x, u.y), a = !1) : (t.lineTo(u.x, s), t.lineTo(u.x, u.y)), o = !!e.pathSegment(t, r, {
      move: o
    }), o ? t.closePath() : t.lineTo(d.x, s);
  }
  t.lineTo(e.first().x, s), t.closePath(), t.clip();
}
function Ad(t, e, s) {
  const { segments: i, points: n } = e;
  let a = !0, o = !1;
  t.beginPath();
  for (const r of i) {
    const { start: l, end: c } = r, u = n[l], d = n[Po(l, c, n)];
    a ? (t.moveTo(u.x, u.y), a = !1) : (t.lineTo(s, u.y), t.lineTo(u.x, u.y)), o = !!e.pathSegment(t, r, {
      move: o
    }), o ? t.closePath() : t.lineTo(s, d.y);
  }
  t.lineTo(s, e.first().y), t.closePath(), t.clip();
}
function yr(t, e) {
  const { line: s, target: i, property: n, color: a, scale: o, clip: r } = e, l = AT(s, i, n);
  for (const { source: c, target: u, start: d, end: f } of l) {
    const { style: { backgroundColor: h = a } = {} } = c, m = i !== !0;
    t.save(), t.fillStyle = h, zT(t, o, r, m && Jr(n, d, f)), t.beginPath();
    const g = !!s.pathSegment(t, c);
    let v;
    if (m) {
      g ? t.closePath() : Pd(t, i, f, n);
      const T = !!i.pathSegment(t, u, {
        move: g,
        reverse: !0
      });
      v = g && T, v || Pd(t, i, d, n);
    }
    t.closePath(), t.fill(v ? "evenodd" : "nonzero"), t.restore();
  }
}
function zT(t, e, s, i) {
  const n = e.chart.chartArea, { property: a, start: o, end: r } = i || {};
  if (a === "x" || a === "y") {
    let l, c, u, d;
    a === "x" ? (l = o, c = n.top, u = r, d = n.bottom) : (l = n.left, c = o, u = n.right, d = r), t.beginPath(), s && (l = Math.max(l, s.left), u = Math.min(u, s.right), c = Math.max(c, s.top), d = Math.min(d, s.bottom)), t.rect(l, c, u - l, d - c), t.clip();
  }
}
function Pd(t, e, s, i) {
  const n = e.interpolate(s, i);
  n && t.lineTo(n.x, n.y);
}
var VT = {
  id: "filler",
  afterDatasetsUpdate(t, e, s) {
    const i = (t.data.datasets || []).length, n = [];
    let a, o, r, l;
    for (o = 0; o < i; ++o)
      a = t.getDatasetMeta(o), r = a.dataset, l = null, r && r.options && r instanceof Hs && (l = {
        visible: t.isDatasetVisible(o),
        index: o,
        fill: wT(r, o, i),
        chart: t,
        axis: a.controller.options.indexAxis,
        scale: a.vScale,
        line: r
      }), a.$filler = l, n.push(l);
    for (o = 0; o < i; ++o)
      l = n[o], !(!l || l.fill === !1) && (l.fill = CT(n, o, s.propagate));
  },
  beforeDraw(t, e, s) {
    const i = s.drawTime === "beforeDraw", n = t.getSortedVisibleDatasetMetas(), a = t.chartArea;
    for (let o = n.length - 1; o >= 0; --o) {
      const r = n[o].$filler;
      r && (r.line.updateControlPoints(a, r.axis), i && r.fill && br(t.ctx, r, a));
    }
  },
  beforeDatasetsDraw(t, e, s) {
    if (s.drawTime !== "beforeDatasetsDraw")
      return;
    const i = t.getSortedVisibleDatasetMetas();
    for (let n = i.length - 1; n >= 0; --n) {
      const a = i[n].$filler;
      Td(a) && br(t.ctx, a, t.chartArea);
    }
  },
  beforeDatasetDraw(t, e, s) {
    const i = e.meta.$filler;
    !Td(i) || s.drawTime !== "beforeDatasetDraw" || br(t.ctx, i, t.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const Cd = (t, e) => {
  let { boxHeight: s = e, boxWidth: i = e } = t;
  return t.usePointStyle && (s = Math.min(s, e), i = t.pointStyleWidth || Math.min(i, e)), {
    boxWidth: i,
    boxHeight: s,
    itemHeight: Math.max(e, s)
  };
}, qT = (t, e) => t !== null && e !== null && t.datasetIndex === e.datasetIndex && t.index === e.index;
class wd extends Ms {
  constructor(e) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = e.chart, this.options = e.options, this.ctx = e.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(e, s, i) {
    this.maxWidth = e, this.maxHeight = s, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const e = this.options.labels || {};
    let s = ze(e.generateLabels, [
      this.chart
    ], this) || [];
    e.filter && (s = s.filter((i) => e.filter(i, this.chart.data))), e.sort && (s = s.sort((i, n) => e.sort(i, n, this.chart.data))), this.options.reverse && s.reverse(), this.legendItems = s;
  }
  fit() {
    const { options: e, ctx: s } = this;
    if (!e.display) {
      this.width = this.height = 0;
      return;
    }
    const i = e.labels, n = ct(i.font), a = n.size, o = this._computeTitleHeight(), { boxWidth: r, itemHeight: l } = Cd(i, a);
    let c, u;
    s.font = n.string, this.isHorizontal() ? (c = this.maxWidth, u = this._fitRows(o, a, r, l) + 10) : (u = this.maxHeight, c = this._fitCols(o, n, r, l) + 10), this.width = Math.min(c, e.maxWidth || this.maxWidth), this.height = Math.min(u, e.maxHeight || this.maxHeight);
  }
  _fitRows(e, s, i, n) {
    const { ctx: a, maxWidth: o, options: { labels: { padding: r } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], u = n + r;
    let d = e;
    a.textAlign = "left", a.textBaseline = "middle";
    let f = -1, h = -u;
    return this.legendItems.forEach((m, g) => {
      const v = i + s / 2 + a.measureText(m.text).width;
      (g === 0 || c[c.length - 1] + v + 2 * r > o) && (d += u, c[c.length - (g > 0 ? 0 : 1)] = 0, h += u, f++), l[g] = {
        left: 0,
        top: h,
        row: f,
        width: v,
        height: n
      }, c[c.length - 1] += v + r;
    }), d;
  }
  _fitCols(e, s, i, n) {
    const { ctx: a, maxHeight: o, options: { labels: { padding: r } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], u = o - e;
    let d = r, f = 0, h = 0, m = 0, g = 0;
    return this.legendItems.forEach((v, T) => {
      const { itemWidth: x, itemHeight: C } = GT(i, s, a, v, n);
      T > 0 && h + C + 2 * r > u && (d += f + r, c.push({
        width: f,
        height: h
      }), m += f + r, g++, f = h = 0), l[T] = {
        left: m,
        top: h,
        col: g,
        width: x,
        height: C
      }, f = Math.max(f, x), h += C + r;
    }), d += f, c.push({
      width: f,
      height: h
    }), d;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const e = this._computeTitleHeight(), { legendHitBoxes: s, options: { align: i, labels: { padding: n }, rtl: a } } = this, o = Ei(a, this.left, this.width);
    if (this.isHorizontal()) {
      let r = 0, l = pt(i, this.left + n, this.right - this.lineWidths[r]);
      for (const c of s)
        r !== c.row && (r = c.row, l = pt(i, this.left + n, this.right - this.lineWidths[r])), c.top += this.top + e + n, c.left = o.leftForLtr(o.x(l), c.width), l += c.width + n;
    } else {
      let r = 0, l = pt(i, this.top + e + n, this.bottom - this.columnSizes[r].height);
      for (const c of s)
        c.col !== r && (r = c.col, l = pt(i, this.top + e + n, this.bottom - this.columnSizes[r].height)), c.top = l, c.left += this.left + n, c.left = o.leftForLtr(o.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const e = this.ctx;
      ko(e, this), this._draw(), To(e);
    }
  }
  _draw() {
    const { options: e, columnSizes: s, lineWidths: i, ctx: n } = this, { align: a, labels: o } = e, r = Ye.color, l = Ei(e.rtl, this.left, this.width), c = ct(o.font), { padding: u } = o, d = c.size, f = d / 2;
    let h;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: m, boxHeight: g, itemHeight: v } = Cd(o, d), T = function(w, O, W) {
      if (isNaN(m) || m <= 0 || isNaN(g) || g < 0)
        return;
      n.save();
      const J = he(W.lineWidth, 1);
      if (n.fillStyle = he(W.fillStyle, r), n.lineCap = he(W.lineCap, "butt"), n.lineDashOffset = he(W.lineDashOffset, 0), n.lineJoin = he(W.lineJoin, "miter"), n.lineWidth = J, n.strokeStyle = he(W.strokeStyle, r), n.setLineDash(he(W.lineDash, [])), o.usePointStyle) {
        const Q = {
          radius: g * Math.SQRT2 / 2,
          pointStyle: W.pointStyle,
          rotation: W.rotation,
          borderWidth: J
        }, ie = l.xPlus(w, m / 2), ce = O + f;
        Bh(n, Q, ie, ce, o.pointStyleWidth && m);
      } else {
        const Q = O + Math.max((d - g) / 2, 0), ie = l.leftForLtr(w, m), ce = ui(W.borderRadius);
        n.beginPath(), Object.values(ce).some((xe) => xe !== 0) ? Un(n, {
          x: ie,
          y: Q,
          w: m,
          h: g,
          radius: ce
        }) : n.rect(ie, Q, m, g), n.fill(), J !== 0 && n.stroke();
      }
      n.restore();
    }, x = function(w, O, W) {
      hi(n, W.text, w, O + v / 2, c, {
        strikethrough: W.hidden,
        textAlign: l.textAlign(W.textAlign)
      });
    }, C = this.isHorizontal(), P = this._computeTitleHeight();
    C ? h = {
      x: pt(a, this.left + u, this.right - i[0]),
      y: this.top + u + P,
      line: 0
    } : h = {
      x: this.left + u,
      y: pt(a, this.top + P + u, this.bottom - s[0].height),
      line: 0
    }, $h(this.ctx, e.textDirection);
    const M = v + u;
    this.legendItems.forEach((w, O) => {
      n.strokeStyle = w.fontColor, n.fillStyle = w.fontColor;
      const W = n.measureText(w.text).width, J = l.textAlign(w.textAlign || (w.textAlign = o.textAlign)), Q = m + f + W;
      let ie = h.x, ce = h.y;
      l.setWidth(this.width), C ? O > 0 && ie + Q + u > this.right && (ce = h.y += M, h.line++, ie = h.x = pt(a, this.left + u, this.right - i[h.line])) : O > 0 && ce + M > this.bottom && (ie = h.x = ie + s[h.line].width + u, h.line++, ce = h.y = pt(a, this.top + P + u, this.bottom - s[h.line].height));
      const xe = l.x(ie);
      if (T(xe, ce, w), ie = d_(J, ie + m + f, C ? ie + Q : this.right, e.rtl), x(l.x(ie), ce, w), C)
        h.x += Q + u;
      else if (typeof w.text != "string") {
        const Ge = c.lineHeight;
        h.y += _p(w, Ge) + u;
      } else
        h.y += M;
    }), Jh(this.ctx, e.textDirection);
  }
  drawTitle() {
    const e = this.options, s = e.title, i = ct(s.font), n = _t(s.padding);
    if (!s.display)
      return;
    const a = Ei(e.rtl, this.left, this.width), o = this.ctx, r = s.position, l = i.size / 2, c = n.top + l;
    let u, d = this.left, f = this.width;
    if (this.isHorizontal())
      f = Math.max(...this.lineWidths), u = this.top + c, d = pt(e.align, d, this.right - f);
    else {
      const m = this.columnSizes.reduce((g, v) => Math.max(g, v.height), 0);
      u = c + pt(e.align, this.top, this.bottom - m - e.labels.padding - this._computeTitleHeight());
    }
    const h = pt(r, d, d + f);
    o.textAlign = a.textAlign(Dl(r)), o.textBaseline = "middle", o.strokeStyle = s.color, o.fillStyle = s.color, o.font = i.string, hi(o, s.text, h, u, i);
  }
  _computeTitleHeight() {
    const e = this.options.title, s = ct(e.font), i = _t(e.padding);
    return e.display ? s.lineHeight + i.height : 0;
  }
  _getLegendItemAt(e, s) {
    let i, n, a;
    if (Ss(e, this.left, this.right) && Ss(s, this.top, this.bottom)) {
      for (a = this.legendHitBoxes, i = 0; i < a.length; ++i)
        if (n = a[i], Ss(e, n.left, n.left + n.width) && Ss(s, n.top, n.top + n.height))
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(e) {
    const s = this.options;
    if (!JT(e.type, s))
      return;
    const i = this._getLegendItemAt(e.x, e.y);
    if (e.type === "mousemove" || e.type === "mouseout") {
      const n = this._hoveredItem, a = qT(n, i);
      n && !a && ze(s.onLeave, [
        e,
        n,
        this
      ], this), this._hoveredItem = i, i && !a && ze(s.onHover, [
        e,
        i,
        this
      ], this);
    } else i && ze(s.onClick, [
      e,
      i,
      this
    ], this);
  }
}
function GT(t, e, s, i, n) {
  const a = KT(i, t, e, s), o = $T(n, i, e.lineHeight);
  return {
    itemWidth: a,
    itemHeight: o
  };
}
function KT(t, e, s, i) {
  let n = t.text;
  return n && typeof n != "string" && (n = n.reduce((a, o) => a.length > o.length ? a : o)), e + s.size / 2 + i.measureText(n).width;
}
function $T(t, e, s) {
  let i = t;
  return typeof e.text != "string" && (i = _p(e, s)), i;
}
function _p(t, e) {
  const s = t.text ? t.text.length : 0;
  return e * s;
}
function JT(t, e) {
  return !!((t === "mousemove" || t === "mouseout") && (e.onHover || e.onLeave) || e.onClick && (t === "click" || t === "mouseup"));
}
var YT = {
  id: "legend",
  _element: wd,
  start(t, e, s) {
    const i = t.legend = new wd({
      ctx: t.ctx,
      options: s,
      chart: t
    });
    yt.configure(t, i, s), yt.addBox(t, i);
  },
  stop(t) {
    yt.removeBox(t, t.legend), delete t.legend;
  },
  beforeUpdate(t, e, s) {
    const i = t.legend;
    yt.configure(t, i, s), i.options = s;
  },
  afterUpdate(t) {
    const e = t.legend;
    e.buildLabels(), e.adjustHitBoxes();
  },
  afterEvent(t, e) {
    e.replay || t.legend.handleEvent(e.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(t, e, s) {
      const i = e.datasetIndex, n = s.chart;
      n.isDatasetVisible(i) ? (n.hide(i), e.hidden = !0) : (n.show(i), e.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (t) => t.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(t) {
        const e = t.data.datasets, { labels: { usePointStyle: s, pointStyle: i, textAlign: n, color: a, useBorderRadius: o, borderRadius: r } } = t.legend.options;
        return t._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(s ? 0 : void 0), u = _t(c.borderWidth);
          return {
            text: e[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: a,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (u.width + u.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: i || c.pointStyle,
            rotation: c.rotation,
            textAlign: n || c.textAlign,
            borderRadius: o && (r || c.borderRadius),
            datasetIndex: l.index
          };
        }, this);
      }
    },
    title: {
      color: (t) => t.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (t) => !t.startsWith("on"),
    labels: {
      _scriptable: (t) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(t)
    }
  }
};
class Bl extends Ms {
  constructor(e) {
    super(), this.chart = e.chart, this.options = e.options, this.ctx = e.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(e, s) {
    const i = this.options;
    if (this.left = 0, this.top = 0, !i.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = e, this.height = this.bottom = s;
    const n = Je(i.text) ? i.text.length : 1;
    this._padding = _t(i.padding);
    const a = n * ct(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = a : this.width = a;
  }
  isHorizontal() {
    const e = this.options.position;
    return e === "top" || e === "bottom";
  }
  _drawArgs(e) {
    const { top: s, left: i, bottom: n, right: a, options: o } = this, r = o.align;
    let l = 0, c, u, d;
    return this.isHorizontal() ? (u = pt(r, i, a), d = s + e, c = a - i) : (o.position === "left" ? (u = i + e, d = pt(r, n, s), l = we * -0.5) : (u = a - e, d = pt(r, s, n), l = we * 0.5), c = n - s), {
      titleX: u,
      titleY: d,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const e = this.ctx, s = this.options;
    if (!s.display)
      return;
    const i = ct(s.font), a = i.lineHeight / 2 + this._padding.top, { titleX: o, titleY: r, maxWidth: l, rotation: c } = this._drawArgs(a);
    hi(e, s.text, 0, 0, i, {
      color: s.color,
      maxWidth: l,
      rotation: c,
      textAlign: Dl(s.align),
      textBaseline: "middle",
      translation: [
        o,
        r
      ]
    });
  }
}
function XT(t, e) {
  const s = new Bl({
    ctx: t.ctx,
    options: e,
    chart: t
  });
  yt.configure(t, s, e), yt.addBox(t, s), t.titleBlock = s;
}
var QT = {
  id: "title",
  _element: Bl,
  start(t, e, s) {
    XT(t, s);
  },
  stop(t) {
    const e = t.titleBlock;
    yt.removeBox(t, e), delete t.titleBlock;
  },
  beforeUpdate(t, e, s) {
    const i = t.titleBlock;
    yt.configure(t, i, s), i.options = s;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const ka = /* @__PURE__ */ new WeakMap();
var ZT = {
  id: "subtitle",
  start(t, e, s) {
    const i = new Bl({
      ctx: t.ctx,
      options: s,
      chart: t
    });
    yt.configure(t, i, s), yt.addBox(t, i), ka.set(t, i);
  },
  stop(t) {
    yt.removeBox(t, ka.get(t)), ka.delete(t);
  },
  beforeUpdate(t, e, s) {
    const i = ka.get(t);
    yt.configure(t, i, s), i.options = s;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "normal"
    },
    fullSize: !0,
    padding: 0,
    position: "top",
    text: "",
    weight: 1500
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const un = {
  average(t) {
    if (!t.length)
      return !1;
    let e, s, i = /* @__PURE__ */ new Set(), n = 0, a = 0;
    for (e = 0, s = t.length; e < s; ++e) {
      const r = t[e].element;
      if (r && r.hasValue()) {
        const l = r.tooltipPosition();
        i.add(l.x), n += l.y, ++a;
      }
    }
    return a === 0 || i.size === 0 ? !1 : {
      x: [
        ...i
      ].reduce((r, l) => r + l) / i.size,
      y: n / a
    };
  },
  nearest(t, e) {
    if (!t.length)
      return !1;
    let s = e.x, i = e.y, n = Number.POSITIVE_INFINITY, a, o, r;
    for (a = 0, o = t.length; a < o; ++a) {
      const l = t[a].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), u = Hr(e, c);
        u < n && (n = u, r = l);
      }
    }
    if (r) {
      const l = r.tooltipPosition();
      s = l.x, i = l.y;
    }
    return {
      x: s,
      y: i
    };
  }
};
function es(t, e) {
  return e && (Je(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
}
function ms(t) {
  return (typeof t == "string" || t instanceof String) && t.indexOf(`
`) > -1 ? t.split(`
`) : t;
}
function ex(t, e) {
  const { element: s, datasetIndex: i, index: n } = e, a = t.getDatasetMeta(i).controller, { label: o, value: r } = a.getLabelAndValue(n);
  return {
    chart: t,
    label: o,
    parsed: a.getParsed(n),
    raw: t.data.datasets[i].data[n],
    formattedValue: r,
    dataset: a.getDataset(),
    dataIndex: n,
    datasetIndex: i,
    element: s
  };
}
function Rd(t, e) {
  const s = t.chart.ctx, { body: i, footer: n, title: a } = t, { boxWidth: o, boxHeight: r } = e, l = ct(e.bodyFont), c = ct(e.titleFont), u = ct(e.footerFont), d = a.length, f = n.length, h = i.length, m = _t(e.padding);
  let g = m.height, v = 0, T = i.reduce((P, M) => P + M.before.length + M.lines.length + M.after.length, 0);
  if (T += t.beforeBody.length + t.afterBody.length, d && (g += d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom), T) {
    const P = e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight;
    g += h * P + (T - h) * l.lineHeight + (T - 1) * e.bodySpacing;
  }
  f && (g += e.footerMarginTop + f * u.lineHeight + (f - 1) * e.footerSpacing);
  let x = 0;
  const C = function(P) {
    v = Math.max(v, s.measureText(P).width + x);
  };
  return s.save(), s.font = c.string, Ee(t.title, C), s.font = l.string, Ee(t.beforeBody.concat(t.afterBody), C), x = e.displayColors ? o + 2 + e.boxPadding : 0, Ee(i, (P) => {
    Ee(P.before, C), Ee(P.lines, C), Ee(P.after, C);
  }), x = 0, s.font = u.string, Ee(t.footer, C), s.restore(), v += m.width, {
    width: v,
    height: g
  };
}
function tx(t, e) {
  const { y: s, height: i } = e;
  return s < i / 2 ? "top" : s > t.height - i / 2 ? "bottom" : "center";
}
function sx(t, e, s, i) {
  const { x: n, width: a } = i, o = s.caretSize + s.caretPadding;
  if (t === "left" && n + a + o > e.width || t === "right" && n - a - o < 0)
    return !0;
}
function ix(t, e, s, i) {
  const { x: n, width: a } = s, { width: o, chartArea: { left: r, right: l } } = t;
  let c = "center";
  return i === "center" ? c = n <= (r + l) / 2 ? "left" : "right" : n <= a / 2 ? c = "left" : n >= o - a / 2 && (c = "right"), sx(c, t, e, s) && (c = "center"), c;
}
function Md(t, e, s) {
  const i = s.yAlign || e.yAlign || tx(t, s);
  return {
    xAlign: s.xAlign || e.xAlign || ix(t, e, s, i),
    yAlign: i
  };
}
function nx(t, e) {
  let { x: s, width: i } = t;
  return e === "right" ? s -= i : e === "center" && (s -= i / 2), s;
}
function ax(t, e, s) {
  let { y: i, height: n } = t;
  return e === "top" ? i += s : e === "bottom" ? i -= n + s : i -= n / 2, i;
}
function Dd(t, e, s, i) {
  const { caretSize: n, caretPadding: a, cornerRadius: o } = t, { xAlign: r, yAlign: l } = s, c = n + a, { topLeft: u, topRight: d, bottomLeft: f, bottomRight: h } = ui(o);
  let m = nx(e, r);
  const g = ax(e, l, c);
  return l === "center" ? r === "left" ? m += c : r === "right" && (m -= c) : r === "left" ? m -= Math.max(u, f) + n : r === "right" && (m += Math.max(d, h) + n), {
    x: dt(m, 0, i.width - e.width),
    y: dt(g, 0, i.height - e.height)
  };
}
function Ta(t, e, s) {
  const i = _t(s.padding);
  return e === "center" ? t.x + t.width / 2 : e === "right" ? t.x + t.width - i.right : t.x + i.left;
}
function Id(t) {
  return es([], ms(t));
}
function ox(t, e, s) {
  return Gs(t, {
    tooltip: e,
    tooltipItems: s,
    type: "tooltip"
  });
}
function Ed(t, e) {
  const s = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return s ? t.override(s) : t;
}
const Sp = {
  beforeTitle: hs,
  title(t) {
    if (t.length > 0) {
      const e = t[0], s = e.chart.data.labels, i = s ? s.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return e.dataset.label || "";
      if (e.label)
        return e.label;
      if (i > 0 && e.dataIndex < i)
        return s[e.dataIndex];
    }
    return "";
  },
  afterTitle: hs,
  beforeBody: hs,
  beforeLabel: hs,
  label(t) {
    if (this && this.options && this.options.mode === "dataset")
      return t.label + ": " + t.formattedValue || t.formattedValue;
    let e = t.dataset.label || "";
    e && (e += ": ");
    const s = t.formattedValue;
    return be(s) || (e += s), e;
  },
  labelColor(t) {
    const s = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
    return {
      borderColor: s.borderColor,
      backgroundColor: s.backgroundColor,
      borderWidth: s.borderWidth,
      borderDash: s.borderDash,
      borderDashOffset: s.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(t) {
    const s = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
    return {
      pointStyle: s.pointStyle,
      rotation: s.rotation
    };
  },
  afterLabel: hs,
  afterBody: hs,
  beforeFooter: hs,
  footer: hs,
  afterFooter: hs
};
function Mt(t, e, s, i) {
  const n = t[e].call(s, i);
  return typeof n > "u" ? Sp[e].call(s, i) : n;
}
class Yr extends Ms {
  constructor(e) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = e.chart, this.options = e.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(e) {
    this.options = e, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const e = this._cachedAnimations;
    if (e)
      return e;
    const s = this.chart, i = this.options.setContext(this.getContext()), n = i.enabled && s.options.animation && i.animations, a = new ep(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(a)), a;
  }
  getContext() {
    return this.$context || (this.$context = ox(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(e, s) {
    const { callbacks: i } = s, n = Mt(i, "beforeTitle", this, e), a = Mt(i, "title", this, e), o = Mt(i, "afterTitle", this, e);
    let r = [];
    return r = es(r, ms(n)), r = es(r, ms(a)), r = es(r, ms(o)), r;
  }
  getBeforeBody(e, s) {
    return Id(Mt(s.callbacks, "beforeBody", this, e));
  }
  getBody(e, s) {
    const { callbacks: i } = s, n = [];
    return Ee(e, (a) => {
      const o = {
        before: [],
        lines: [],
        after: []
      }, r = Ed(i, a);
      es(o.before, ms(Mt(r, "beforeLabel", this, a))), es(o.lines, Mt(r, "label", this, a)), es(o.after, ms(Mt(r, "afterLabel", this, a))), n.push(o);
    }), n;
  }
  getAfterBody(e, s) {
    return Id(Mt(s.callbacks, "afterBody", this, e));
  }
  getFooter(e, s) {
    const { callbacks: i } = s, n = Mt(i, "beforeFooter", this, e), a = Mt(i, "footer", this, e), o = Mt(i, "afterFooter", this, e);
    let r = [];
    return r = es(r, ms(n)), r = es(r, ms(a)), r = es(r, ms(o)), r;
  }
  _createItems(e) {
    const s = this._active, i = this.chart.data, n = [], a = [], o = [];
    let r = [], l, c;
    for (l = 0, c = s.length; l < c; ++l)
      r.push(ex(this.chart, s[l]));
    return e.filter && (r = r.filter((u, d, f) => e.filter(u, d, f, i))), e.itemSort && (r = r.sort((u, d) => e.itemSort(u, d, i))), Ee(r, (u) => {
      const d = Ed(e.callbacks, u);
      n.push(Mt(d, "labelColor", this, u)), a.push(Mt(d, "labelPointStyle", this, u)), o.push(Mt(d, "labelTextColor", this, u));
    }), this.labelColors = n, this.labelPointStyles = a, this.labelTextColors = o, this.dataPoints = r, r;
  }
  update(e, s) {
    const i = this.options.setContext(this.getContext()), n = this._active;
    let a, o = [];
    if (!n.length)
      this.opacity !== 0 && (a = {
        opacity: 0
      });
    else {
      const r = un[i.position].call(this, n, this._eventPosition);
      o = this._createItems(i), this.title = this.getTitle(o, i), this.beforeBody = this.getBeforeBody(o, i), this.body = this.getBody(o, i), this.afterBody = this.getAfterBody(o, i), this.footer = this.getFooter(o, i);
      const l = this._size = Rd(this, i), c = Object.assign({}, r, l), u = Md(this.chart, i, c), d = Dd(i, c, u, this.chart);
      this.xAlign = u.xAlign, this.yAlign = u.yAlign, a = {
        opacity: 1,
        x: d.x,
        y: d.y,
        width: l.width,
        height: l.height,
        caretX: r.x,
        caretY: r.y
      };
    }
    this._tooltipItems = o, this.$context = void 0, a && this._resolveAnimations().update(this, a), e && i.external && i.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: s
    });
  }
  drawCaret(e, s, i, n) {
    const a = this.getCaretPosition(e, i, n);
    s.lineTo(a.x1, a.y1), s.lineTo(a.x2, a.y2), s.lineTo(a.x3, a.y3);
  }
  getCaretPosition(e, s, i) {
    const { xAlign: n, yAlign: a } = this, { caretSize: o, cornerRadius: r } = i, { topLeft: l, topRight: c, bottomLeft: u, bottomRight: d } = ui(r), { x: f, y: h } = e, { width: m, height: g } = s;
    let v, T, x, C, P, M;
    return a === "center" ? (P = h + g / 2, n === "left" ? (v = f, T = v - o, C = P + o, M = P - o) : (v = f + m, T = v + o, C = P - o, M = P + o), x = v) : (n === "left" ? T = f + Math.max(l, u) + o : n === "right" ? T = f + m - Math.max(c, d) - o : T = this.caretX, a === "top" ? (C = h, P = C - o, v = T - o, x = T + o) : (C = h + g, P = C + o, v = T + o, x = T - o), M = C), {
      x1: v,
      x2: T,
      x3: x,
      y1: C,
      y2: P,
      y3: M
    };
  }
  drawTitle(e, s, i) {
    const n = this.title, a = n.length;
    let o, r, l;
    if (a) {
      const c = Ei(i.rtl, this.x, this.width);
      for (e.x = Ta(this, i.titleAlign, i), s.textAlign = c.textAlign(i.titleAlign), s.textBaseline = "middle", o = ct(i.titleFont), r = i.titleSpacing, s.fillStyle = i.titleColor, s.font = o.string, l = 0; l < a; ++l)
        s.fillText(n[l], c.x(e.x), e.y + o.lineHeight / 2), e.y += o.lineHeight + r, l + 1 === a && (e.y += i.titleMarginBottom - r);
    }
  }
  _drawColorBox(e, s, i, n, a) {
    const o = this.labelColors[i], r = this.labelPointStyles[i], { boxHeight: l, boxWidth: c } = a, u = ct(a.bodyFont), d = Ta(this, "left", a), f = n.x(d), h = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0, m = s.y + h;
    if (a.usePointStyle) {
      const g = {
        radius: Math.min(c, l) / 2,
        pointStyle: r.pointStyle,
        rotation: r.rotation,
        borderWidth: 1
      }, v = n.leftForLtr(f, c) + c / 2, T = m + l / 2;
      e.strokeStyle = a.multiKeyBackground, e.fillStyle = a.multiKeyBackground, zr(e, g, v, T), e.strokeStyle = o.borderColor, e.fillStyle = o.backgroundColor, zr(e, g, v, T);
    } else {
      e.lineWidth = Se(o.borderWidth) ? Math.max(...Object.values(o.borderWidth)) : o.borderWidth || 1, e.strokeStyle = o.borderColor, e.setLineDash(o.borderDash || []), e.lineDashOffset = o.borderDashOffset || 0;
      const g = n.leftForLtr(f, c), v = n.leftForLtr(n.xPlus(f, 1), c - 2), T = ui(o.borderRadius);
      Object.values(T).some((x) => x !== 0) ? (e.beginPath(), e.fillStyle = a.multiKeyBackground, Un(e, {
        x: g,
        y: m,
        w: c,
        h: l,
        radius: T
      }), e.fill(), e.stroke(), e.fillStyle = o.backgroundColor, e.beginPath(), Un(e, {
        x: v,
        y: m + 1,
        w: c - 2,
        h: l - 2,
        radius: T
      }), e.fill()) : (e.fillStyle = a.multiKeyBackground, e.fillRect(g, m, c, l), e.strokeRect(g, m, c, l), e.fillStyle = o.backgroundColor, e.fillRect(v, m + 1, c - 2, l - 2));
    }
    e.fillStyle = this.labelTextColors[i];
  }
  drawBody(e, s, i) {
    const { body: n } = this, { bodySpacing: a, bodyAlign: o, displayColors: r, boxHeight: l, boxWidth: c, boxPadding: u } = i, d = ct(i.bodyFont);
    let f = d.lineHeight, h = 0;
    const m = Ei(i.rtl, this.x, this.width), g = function(W) {
      s.fillText(W, m.x(e.x + h), e.y + f / 2), e.y += f + a;
    }, v = m.textAlign(o);
    let T, x, C, P, M, w, O;
    for (s.textAlign = o, s.textBaseline = "middle", s.font = d.string, e.x = Ta(this, v, i), s.fillStyle = i.bodyColor, Ee(this.beforeBody, g), h = r && v !== "right" ? o === "center" ? c / 2 + u : c + 2 + u : 0, P = 0, w = n.length; P < w; ++P) {
      for (T = n[P], x = this.labelTextColors[P], s.fillStyle = x, Ee(T.before, g), C = T.lines, r && C.length && (this._drawColorBox(s, e, P, m, i), f = Math.max(d.lineHeight, l)), M = 0, O = C.length; M < O; ++M)
        g(C[M]), f = d.lineHeight;
      Ee(T.after, g);
    }
    h = 0, f = d.lineHeight, Ee(this.afterBody, g), e.y -= a;
  }
  drawFooter(e, s, i) {
    const n = this.footer, a = n.length;
    let o, r;
    if (a) {
      const l = Ei(i.rtl, this.x, this.width);
      for (e.x = Ta(this, i.footerAlign, i), e.y += i.footerMarginTop, s.textAlign = l.textAlign(i.footerAlign), s.textBaseline = "middle", o = ct(i.footerFont), s.fillStyle = i.footerColor, s.font = o.string, r = 0; r < a; ++r)
        s.fillText(n[r], l.x(e.x), e.y + o.lineHeight / 2), e.y += o.lineHeight + i.footerSpacing;
    }
  }
  drawBackground(e, s, i, n) {
    const { xAlign: a, yAlign: o } = this, { x: r, y: l } = e, { width: c, height: u } = i, { topLeft: d, topRight: f, bottomLeft: h, bottomRight: m } = ui(n.cornerRadius);
    s.fillStyle = n.backgroundColor, s.strokeStyle = n.borderColor, s.lineWidth = n.borderWidth, s.beginPath(), s.moveTo(r + d, l), o === "top" && this.drawCaret(e, s, i, n), s.lineTo(r + c - f, l), s.quadraticCurveTo(r + c, l, r + c, l + f), o === "center" && a === "right" && this.drawCaret(e, s, i, n), s.lineTo(r + c, l + u - m), s.quadraticCurveTo(r + c, l + u, r + c - m, l + u), o === "bottom" && this.drawCaret(e, s, i, n), s.lineTo(r + h, l + u), s.quadraticCurveTo(r, l + u, r, l + u - h), o === "center" && a === "left" && this.drawCaret(e, s, i, n), s.lineTo(r, l + d), s.quadraticCurveTo(r, l, r + d, l), s.closePath(), s.fill(), n.borderWidth > 0 && s.stroke();
  }
  _updateAnimationTarget(e) {
    const s = this.chart, i = this.$animations, n = i && i.x, a = i && i.y;
    if (n || a) {
      const o = un[e.position].call(this, this._active, this._eventPosition);
      if (!o)
        return;
      const r = this._size = Rd(this, e), l = Object.assign({}, o, this._size), c = Md(s, e, l), u = Dd(e, l, c, s);
      (n._to !== u.x || a._to !== u.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = r.width, this.height = r.height, this.caretX = o.x, this.caretY = o.y, this._resolveAnimations().update(this, u));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(e) {
    const s = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i)
      return;
    this._updateAnimationTarget(s);
    const n = {
      width: this.width,
      height: this.height
    }, a = {
      x: this.x,
      y: this.y
    };
    i = Math.abs(i) < 1e-3 ? 0 : i;
    const o = _t(s.padding), r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    s.enabled && r && (e.save(), e.globalAlpha = i, this.drawBackground(a, e, n, s), $h(e, s.textDirection), a.y += o.top, this.drawTitle(a, e, s), this.drawBody(a, e, s), this.drawFooter(a, e, s), Jh(e, s.textDirection), e.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e, s) {
    const i = this._active, n = e.map(({ datasetIndex: r, index: l }) => {
      const c = this.chart.getDatasetMeta(r);
      if (!c)
        throw new Error("Cannot find a dataset at index " + r);
      return {
        datasetIndex: r,
        element: c.data[l],
        index: l
      };
    }), a = !Qa(i, n), o = this._positionChanged(n, s);
    (a || o) && (this._active = n, this._eventPosition = s, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(e, s, i = !0) {
    if (s && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, a = this._active || [], o = this._getActiveElements(e, a, s, i), r = this._positionChanged(o, e), l = s || !Qa(o, a) || r;
    return l && (this._active = o, (n.enabled || n.external) && (this._eventPosition = {
      x: e.x,
      y: e.y
    }, this.update(!0, s))), l;
  }
  _getActiveElements(e, s, i, n) {
    const a = this.options;
    if (e.type === "mouseout")
      return [];
    if (!n)
      return s.filter((r) => this.chart.data.datasets[r.datasetIndex] && this.chart.getDatasetMeta(r.datasetIndex).controller.getParsed(r.index) !== void 0);
    const o = this.chart.getElementsAtEventForMode(e, a.mode, a, i);
    return a.reverse && o.reverse(), o;
  }
  _positionChanged(e, s) {
    const { caretX: i, caretY: n, options: a } = this, o = un[a.position].call(this, e, s);
    return o !== !1 && (i !== o.x || n !== o.y);
  }
}
V(Yr, "positioners", un);
var rx = {
  id: "tooltip",
  _element: Yr,
  positioners: un,
  afterInit(t, e, s) {
    s && (t.tooltip = new Yr({
      chart: t,
      options: s
    }));
  },
  beforeUpdate(t, e, s) {
    t.tooltip && t.tooltip.initialize(s);
  },
  reset(t, e, s) {
    t.tooltip && t.tooltip.initialize(s);
  },
  afterDraw(t) {
    const e = t.tooltip;
    if (e && e._willRender()) {
      const s = {
        tooltip: e
      };
      if (t.notifyPlugins("beforeTooltipDraw", {
        ...s,
        cancelable: !0
      }) === !1)
        return;
      e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", s);
    }
  },
  afterEvent(t, e) {
    if (t.tooltip) {
      const s = e.replay;
      t.tooltip.handleEvent(e.event, s, e.inChartArea) && (e.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (t, e) => e.bodyFont.size,
    boxWidth: (t, e) => e.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: Sp
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (t) => t !== "filter" && t !== "itemSort" && t !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
}, lx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Colors: _T,
  Decimation: xT,
  Filler: VT,
  Legend: YT,
  SubTitle: ZT,
  Title: QT,
  Tooltip: rx
});
const cx = (t, e, s, i) => (typeof e == "string" ? (s = t.push(e) - 1, i.unshift({
  index: s,
  label: e
})) : isNaN(e) && (s = null), s);
function ux(t, e, s, i) {
  const n = t.indexOf(e);
  if (n === -1)
    return cx(t, e, s, i);
  const a = t.lastIndexOf(e);
  return n !== a ? s : n;
}
const dx = (t, e) => t === null ? null : dt(Math.round(t), 0, e);
function Od(t) {
  const e = this.getLabels();
  return t >= 0 && t < e.length ? e[t] : t;
}
class Xr extends mi {
  constructor(e) {
    super(e), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(e) {
    const s = this._addedLabels;
    if (s.length) {
      const i = this.getLabels();
      for (const { index: n, label: a } of s)
        i[n] === a && i.splice(n, 1);
      this._addedLabels = [];
    }
    super.init(e);
  }
  parse(e, s) {
    if (be(e))
      return null;
    const i = this.getLabels();
    return s = isFinite(s) && i[s] === e ? s : ux(i, e, he(s, e), this._addedLabels), dx(s, i.length - 1);
  }
  determineDataLimits() {
    const { minDefined: e, maxDefined: s } = this.getUserBounds();
    let { min: i, max: n } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (e || (i = 0), s || (n = this.getLabels().length - 1)), this.min = i, this.max = n;
  }
  buildTicks() {
    const e = this.min, s = this.max, i = this.options.offset, n = [];
    let a = this.getLabels();
    a = e === 0 && s === a.length - 1 ? a : a.slice(e, s + 1), this._valueRange = Math.max(a.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? 0.5 : 0);
    for (let o = e; o <= s; o++)
      n.push({
        value: o
      });
    return n;
  }
  getLabelForValue(e) {
    return Od.call(this, e);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(e) {
    return typeof e != "number" && (e = this.parse(e)), e === null ? NaN : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
  }
  getPixelForTick(e) {
    const s = this.ticks;
    return e < 0 || e > s.length - 1 ? null : this.getPixelForValue(s[e].value);
  }
  getValueForPixel(e) {
    return Math.round(this._startValue + this.getDecimalForPixel(e) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
V(Xr, "id", "category"), V(Xr, "defaults", {
  ticks: {
    callback: Od
  }
});
function fx(t, e) {
  const s = [], { bounds: n, step: a, min: o, max: r, precision: l, count: c, maxTicks: u, maxDigits: d, includeBounds: f } = t, h = a || 1, m = u - 1, { min: g, max: v } = e, T = !be(o), x = !be(r), C = !be(c), P = (v - g) / (d + 1);
  let M = Ru((v - g) / m / h) * h, w, O, W, J;
  if (M < 1e-14 && !T && !x)
    return [
      {
        value: g
      },
      {
        value: v
      }
    ];
  J = Math.ceil(v / M) - Math.floor(g / M), J > m && (M = Ru(J * M / m / h) * h), be(l) || (w = Math.pow(10, l), M = Math.ceil(M * w) / w), n === "ticks" ? (O = Math.floor(g / M) * M, W = Math.ceil(v / M) * M) : (O = g, W = v), T && x && a && n_((r - o) / a, M / 1e3) ? (J = Math.round(Math.min((r - o) / M, u)), M = (r - o) / J, O = o, W = r) : C ? (O = T ? o : O, W = x ? r : W, J = c - 1, M = (W - O) / J) : (J = (W - O) / M, Sn(J, Math.round(J), M / 1e3) ? J = Math.round(J) : J = Math.ceil(J));
  const Q = Math.max(Mu(M), Mu(O));
  w = Math.pow(10, be(l) ? Q : l), O = Math.round(O * w) / w, W = Math.round(W * w) / w;
  let ie = 0;
  for (T && (f && O !== o ? (s.push({
    value: o
  }), O < o && ie++, Sn(Math.round((O + ie * M) * w) / w, o, Nd(o, P, t)) && ie++) : O < o && ie++); ie < J; ++ie) {
    const ce = Math.round((O + ie * M) * w) / w;
    if (x && ce > r)
      break;
    s.push({
      value: ce
    });
  }
  return x && f && W !== r ? s.length && Sn(s[s.length - 1].value, r, Nd(r, P, t)) ? s[s.length - 1].value = r : s.push({
    value: r
  }) : (!x || W === r) && s.push({
    value: W
  }), s;
}
function Nd(t, e, { horizontal: s, minRotation: i }) {
  const n = Vt(i), a = (s ? Math.sin(n) : Math.cos(n)) || 1e-3, o = 0.75 * e * ("" + t).length;
  return Math.min(e / a, o);
}
class ao extends mi {
  constructor(e) {
    super(e), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(e, s) {
    return be(e) || (typeof e == "number" || e instanceof Number) && !isFinite(+e) ? null : +e;
  }
  handleTickRangeOptions() {
    const { beginAtZero: e } = this.options, { minDefined: s, maxDefined: i } = this.getUserBounds();
    let { min: n, max: a } = this;
    const o = (l) => n = s ? n : l, r = (l) => a = i ? a : l;
    if (e) {
      const l = ls(n), c = ls(a);
      l < 0 && c < 0 ? r(0) : l > 0 && c > 0 && o(0);
    }
    if (n === a) {
      let l = a === 0 ? 1 : Math.abs(a * 0.05);
      r(a + l), e || o(n - l);
    }
    this.min = n, this.max = a;
  }
  getTickLimit() {
    const e = this.options.ticks;
    let { maxTicksLimit: s, stepSize: i } = e, n;
    return i ? (n = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), s = s || 11), s && (n = Math.min(s, n)), n;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const e = this.options, s = e.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const n = {
      maxTicks: i,
      bounds: e.bounds,
      min: e.min,
      max: e.max,
      precision: s.precision,
      step: s.stepSize,
      count: s.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: s.minRotation || 0,
      includeBounds: s.includeBounds !== !1
    }, a = this._range || this, o = fx(n, a);
    return e.bounds === "ticks" && Dh(o, this, "value"), e.reverse ? (o.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), o;
  }
  configure() {
    const e = this.ticks;
    let s = this.min, i = this.max;
    if (super.configure(), this.options.offset && e.length) {
      const n = (i - s) / Math.max(e.length - 1, 1) / 2;
      s -= n, i += n;
    }
    this._startValue = s, this._endValue = i, this._valueRange = i - s;
  }
  getLabelForValue(e) {
    return Gn(e, this.chart.options.locale, this.options.ticks.format);
  }
}
class Qr extends ao {
  determineDataLimits() {
    const { min: e, max: s } = this.getMinMax(!0);
    this.min = nt(e) ? e : 0, this.max = nt(s) ? s : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const e = this.isHorizontal(), s = e ? this.width : this.height, i = Vt(this.options.ticks.minRotation), n = (e ? Math.sin(i) : Math.cos(i)) || 1e-3, a = this._resolveTickFontOptions(0);
    return Math.ceil(s / Math.min(40, a.lineHeight / n));
  }
  getPixelForValue(e) {
    return e === null ? NaN : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
  }
  getValueForPixel(e) {
    return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
  }
}
V(Qr, "id", "linear"), V(Qr, "defaults", {
  ticks: {
    callback: So.formatters.numeric
  }
});
const Wn = (t) => Math.floor(Ws(t)), ti = (t, e) => Math.pow(10, Wn(t) + e);
function Ld(t) {
  return t / Math.pow(10, Wn(t)) === 1;
}
function Ud(t, e, s) {
  const i = Math.pow(10, s), n = Math.floor(t / i);
  return Math.ceil(e / i) - n;
}
function hx(t, e) {
  const s = e - t;
  let i = Wn(s);
  for (; Ud(t, e, i) > 10; )
    i++;
  for (; Ud(t, e, i) < 10; )
    i--;
  return Math.min(i, Wn(t));
}
function px(t, { min: e, max: s }) {
  e = Lt(t.min, e);
  const i = [], n = Wn(e);
  let a = hx(e, s), o = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
  const r = Math.pow(10, a), l = n > a ? Math.pow(10, n) : 0, c = Math.round((e - l) * o) / o, u = Math.floor((e - l) / r / 10) * r * 10;
  let d = Math.floor((c - u) / Math.pow(10, a)), f = Lt(t.min, Math.round((l + u + d * Math.pow(10, a)) * o) / o);
  for (; f < s; )
    i.push({
      value: f,
      major: Ld(f),
      significand: d
    }), d >= 10 ? d = d < 15 ? 15 : 20 : d++, d >= 20 && (a++, d = 2, o = a >= 0 ? 1 : o), f = Math.round((l + u + d * Math.pow(10, a)) * o) / o;
  const h = Lt(t.max, f);
  return i.push({
    value: h,
    major: Ld(h),
    significand: d
  }), i;
}
class Zr extends mi {
  constructor(e) {
    super(e), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(e, s) {
    const i = ao.prototype.parse.apply(this, [
      e,
      s
    ]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return nt(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: e, max: s } = this.getMinMax(!0);
    this.min = nt(e) ? Math.max(0, e) : null, this.max = nt(s) ? Math.max(0, s) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !nt(this._userMin) && (this.min = e === ti(this.min, 0) ? ti(this.min, -1) : ti(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: e, maxDefined: s } = this.getUserBounds();
    let i = this.min, n = this.max;
    const a = (r) => i = e ? i : r, o = (r) => n = s ? n : r;
    i === n && (i <= 0 ? (a(1), o(10)) : (a(ti(i, -1)), o(ti(n, 1)))), i <= 0 && a(ti(n, -1)), n <= 0 && o(ti(i, 1)), this.min = i, this.max = n;
  }
  buildTicks() {
    const e = this.options, s = {
      min: this._userMin,
      max: this._userMax
    }, i = px(s, this);
    return e.bounds === "ticks" && Dh(i, this, "value"), e.reverse ? (i.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), i;
  }
  getLabelForValue(e) {
    return e === void 0 ? "0" : Gn(e, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const e = this.min;
    super.configure(), this._startValue = Ws(e), this._valueRange = Ws(this.max) - Ws(e);
  }
  getPixelForValue(e) {
    return (e === void 0 || e === 0) && (e = this.min), e === null || isNaN(e) ? NaN : this.getPixelForDecimal(e === this.min ? 0 : (Ws(e) - this._startValue) / this._valueRange);
  }
  getValueForPixel(e) {
    const s = this.getDecimalForPixel(e);
    return Math.pow(10, this._startValue + s * this._valueRange);
  }
}
V(Zr, "id", "logarithmic"), V(Zr, "defaults", {
  ticks: {
    callback: So.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function el(t) {
  const e = t.ticks;
  if (e.display && t.display) {
    const s = _t(e.backdropPadding);
    return he(e.font && e.font.size, Ye.font.size) + s.height;
  }
  return 0;
}
function mx(t, e, s) {
  return s = Je(s) ? s : [
    s
  ], {
    w: S_(t, e.string, s),
    h: s.length * e.lineHeight
  };
}
function Fd(t, e, s, i, n) {
  return t === i || t === n ? {
    start: e - s / 2,
    end: e + s / 2
  } : t < i || t > n ? {
    start: e - s,
    end: e
  } : {
    start: e,
    end: e + s
  };
}
function gx(t) {
  const e = {
    l: t.left + t._padding.left,
    r: t.right - t._padding.right,
    t: t.top + t._padding.top,
    b: t.bottom - t._padding.bottom
  }, s = Object.assign({}, e), i = [], n = [], a = t._pointLabels.length, o = t.options.pointLabels, r = o.centerPointLabels ? we / a : 0;
  for (let l = 0; l < a; l++) {
    const c = o.setContext(t.getPointLabelContext(l));
    n[l] = c.padding;
    const u = t.getPointPosition(l, t.drawingArea + n[l], r), d = ct(c.font), f = mx(t.ctx, d, t._pointLabels[l]);
    i[l] = f;
    const h = mt(t.getIndexAngle(l) + r), m = Math.round(Rl(h)), g = Fd(m, u.x, f.w, 0, 180), v = Fd(m, u.y, f.h, 90, 270);
    bx(s, e, h, g, v);
  }
  t.setCenterPoint(e.l - s.l, s.r - e.r, e.t - s.t, s.b - e.b), t._pointLabelItems = _x(t, i, n);
}
function bx(t, e, s, i, n) {
  const a = Math.abs(Math.sin(s)), o = Math.abs(Math.cos(s));
  let r = 0, l = 0;
  i.start < e.l ? (r = (e.l - i.start) / a, t.l = Math.min(t.l, e.l - r)) : i.end > e.r && (r = (i.end - e.r) / a, t.r = Math.max(t.r, e.r + r)), n.start < e.t ? (l = (e.t - n.start) / o, t.t = Math.min(t.t, e.t - l)) : n.end > e.b && (l = (n.end - e.b) / o, t.b = Math.max(t.b, e.b + l));
}
function yx(t, e, s) {
  const i = t.drawingArea, { extra: n, additionalAngle: a, padding: o, size: r } = s, l = t.getPointPosition(e, i + n + o, a), c = Math.round(Rl(mt(l.angle + ot))), u = Tx(l.y, r.h, c), d = Sx(c), f = kx(l.x, r.w, d);
  return {
    visible: !0,
    x: l.x,
    y: u,
    textAlign: d,
    left: f,
    top: u,
    right: f + r.w,
    bottom: u + r.h
  };
}
function vx(t, e) {
  if (!e)
    return !0;
  const { left: s, top: i, right: n, bottom: a } = t;
  return !(Ts({
    x: s,
    y: i
  }, e) || Ts({
    x: s,
    y: a
  }, e) || Ts({
    x: n,
    y: i
  }, e) || Ts({
    x: n,
    y: a
  }, e));
}
function _x(t, e, s) {
  const i = [], n = t._pointLabels.length, a = t.options, { centerPointLabels: o, display: r } = a.pointLabels, l = {
    extra: el(a) / 2,
    additionalAngle: o ? we / n : 0
  };
  let c;
  for (let u = 0; u < n; u++) {
    l.padding = s[u], l.size = e[u];
    const d = yx(t, u, l);
    i.push(d), r === "auto" && (d.visible = vx(d, c), d.visible && (c = d));
  }
  return i;
}
function Sx(t) {
  return t === 0 || t === 180 ? "center" : t < 180 ? "left" : "right";
}
function kx(t, e, s) {
  return s === "right" ? t -= e : s === "center" && (t -= e / 2), t;
}
function Tx(t, e, s) {
  return s === 90 || s === 270 ? t -= e / 2 : (s > 270 || s < 90) && (t -= e), t;
}
function xx(t, e, s) {
  const { left: i, top: n, right: a, bottom: o } = s, { backdropColor: r } = e;
  if (!be(r)) {
    const l = ui(e.borderRadius), c = _t(e.backdropPadding);
    t.fillStyle = r;
    const u = i - c.left, d = n - c.top, f = a - i + c.width, h = o - n + c.height;
    Object.values(l).some((m) => m !== 0) ? (t.beginPath(), Un(t, {
      x: u,
      y: d,
      w: f,
      h,
      radius: l
    }), t.fill()) : t.fillRect(u, d, f, h);
  }
}
function Ax(t, e) {
  const { ctx: s, options: { pointLabels: i } } = t;
  for (let n = e - 1; n >= 0; n--) {
    const a = t._pointLabelItems[n];
    if (!a.visible)
      continue;
    const o = i.setContext(t.getPointLabelContext(n));
    xx(s, o, a);
    const r = ct(o.font), { x: l, y: c, textAlign: u } = a;
    hi(s, t._pointLabels[n], l, c + r.lineHeight / 2, r, {
      color: o.color,
      textAlign: u,
      textBaseline: "middle"
    });
  }
}
function kp(t, e, s, i) {
  const { ctx: n } = t;
  if (s)
    n.arc(t.xCenter, t.yCenter, e, 0, qe);
  else {
    let a = t.getPointPosition(0, e);
    n.moveTo(a.x, a.y);
    for (let o = 1; o < i; o++)
      a = t.getPointPosition(o, e), n.lineTo(a.x, a.y);
  }
}
function Px(t, e, s, i, n) {
  const a = t.ctx, o = e.circular, { color: r, lineWidth: l } = e;
  !o && !i || !r || !l || s < 0 || (a.save(), a.strokeStyle = r, a.lineWidth = l, a.setLineDash(n.dash || []), a.lineDashOffset = n.dashOffset, a.beginPath(), kp(t, s, o, i), a.closePath(), a.stroke(), a.restore());
}
function Cx(t, e, s) {
  return Gs(t, {
    label: s,
    index: e,
    type: "pointLabel"
  });
}
class dn extends ao {
  constructor(e) {
    super(e), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const e = this._padding = _t(el(this.options) / 2), s = this.width = this.maxWidth - e.width, i = this.height = this.maxHeight - e.height;
    this.xCenter = Math.floor(this.left + s / 2 + e.left), this.yCenter = Math.floor(this.top + i / 2 + e.top), this.drawingArea = Math.floor(Math.min(s, i) / 2);
  }
  determineDataLimits() {
    const { min: e, max: s } = this.getMinMax(!1);
    this.min = nt(e) && !isNaN(e) ? e : 0, this.max = nt(s) && !isNaN(s) ? s : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / el(this.options));
  }
  generateTickLabels(e) {
    ao.prototype.generateTickLabels.call(this, e), this._pointLabels = this.getLabels().map((s, i) => {
      const n = ze(this.options.pointLabels.callback, [
        s,
        i
      ], this);
      return n || n === 0 ? n : "";
    }).filter((s, i) => this.chart.getDataVisibility(i));
  }
  fit() {
    const e = this.options;
    e.display && e.pointLabels.display ? gx(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(e, s, i, n) {
    this.xCenter += Math.floor((e - s) / 2), this.yCenter += Math.floor((i - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(e, s, i, n));
  }
  getIndexAngle(e) {
    const s = qe / (this._pointLabels.length || 1), i = this.options.startAngle || 0;
    return mt(e * s + Vt(i));
  }
  getDistanceFromCenterForValue(e) {
    if (be(e))
      return NaN;
    const s = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - e) * s : (e - this.min) * s;
  }
  getValueForDistanceFromCenter(e) {
    if (be(e))
      return NaN;
    const s = e / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - s : this.min + s;
  }
  getPointLabelContext(e) {
    const s = this._pointLabels || [];
    if (e >= 0 && e < s.length) {
      const i = s[e];
      return Cx(this.getContext(), e, i);
    }
  }
  getPointPosition(e, s, i = 0) {
    const n = this.getIndexAngle(e) - ot + i;
    return {
      x: Math.cos(n) * s + this.xCenter,
      y: Math.sin(n) * s + this.yCenter,
      angle: n
    };
  }
  getPointPositionForValue(e, s) {
    return this.getPointPosition(e, this.getDistanceFromCenterForValue(s));
  }
  getBasePosition(e) {
    return this.getPointPositionForValue(e || 0, this.getBaseValue());
  }
  getPointLabelPosition(e) {
    const { left: s, top: i, right: n, bottom: a } = this._pointLabelItems[e];
    return {
      left: s,
      top: i,
      right: n,
      bottom: a
    };
  }
  drawBackground() {
    const { backgroundColor: e, grid: { circular: s } } = this.options;
    if (e) {
      const i = this.ctx;
      i.save(), i.beginPath(), kp(this, this.getDistanceFromCenterForValue(this._endValue), s, this._pointLabels.length), i.closePath(), i.fillStyle = e, i.fill(), i.restore();
    }
  }
  drawGrid() {
    const e = this.ctx, s = this.options, { angleLines: i, grid: n, border: a } = s, o = this._pointLabels.length;
    let r, l, c;
    if (s.pointLabels.display && Ax(this, o), n.display && this.ticks.forEach((u, d) => {
      if (d !== 0 || d === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(u.value);
        const f = this.getContext(d), h = n.setContext(f), m = a.setContext(f);
        Px(this, h, l, o, m);
      }
    }), i.display) {
      for (e.save(), r = o - 1; r >= 0; r--) {
        const u = i.setContext(this.getPointLabelContext(r)), { color: d, lineWidth: f } = u;
        !f || !d || (e.lineWidth = f, e.strokeStyle = d, e.setLineDash(u.borderDash), e.lineDashOffset = u.borderDashOffset, l = this.getDistanceFromCenterForValue(s.reverse ? this.min : this.max), c = this.getPointPosition(r, l), e.beginPath(), e.moveTo(this.xCenter, this.yCenter), e.lineTo(c.x, c.y), e.stroke());
      }
      e.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const e = this.ctx, s = this.options, i = s.ticks;
    if (!i.display)
      return;
    const n = this.getIndexAngle(0);
    let a, o;
    e.save(), e.translate(this.xCenter, this.yCenter), e.rotate(n), e.textAlign = "center", e.textBaseline = "middle", this.ticks.forEach((r, l) => {
      if (l === 0 && this.min >= 0 && !s.reverse)
        return;
      const c = i.setContext(this.getContext(l)), u = ct(c.font);
      if (a = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        e.font = u.string, o = e.measureText(r.label).width, e.fillStyle = c.backdropColor;
        const d = _t(c.backdropPadding);
        e.fillRect(-o / 2 - d.left, -a - u.size / 2 - d.top, o + d.width, u.size + d.height);
      }
      hi(e, r.label, 0, -a, u, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), e.restore();
  }
  drawTitle() {
  }
}
V(dn, "id", "radialLinear"), V(dn, "defaults", {
  display: !0,
  animate: !0,
  position: "chartArea",
  angleLines: {
    display: !0,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0
  },
  grid: {
    circular: !1
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: !0,
    callback: So.formatters.numeric
  },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: {
      size: 10
    },
    callback(e) {
      return e;
    },
    padding: 5,
    centerPointLabels: !1
  }
}), V(dn, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), V(dn, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const Co = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, Et = /* @__PURE__ */ Object.keys(Co);
function Wd(t, e) {
  return t - e;
}
function Bd(t, e) {
  if (be(e))
    return null;
  const s = t._adapter, { parser: i, round: n, isoWeekday: a } = t._parseOpts;
  let o = e;
  return typeof i == "function" && (o = i(o)), nt(o) || (o = typeof i == "string" ? s.parse(o, i) : s.parse(o)), o === null ? null : (n && (o = n === "week" && (Wi(a) || a === !0) ? s.startOf(o, "isoWeek", a) : s.startOf(o, n)), +o);
}
function Hd(t, e, s, i) {
  const n = Et.length;
  for (let a = Et.indexOf(t); a < n - 1; ++a) {
    const o = Co[Et[a]], r = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
    if (o.common && Math.ceil((s - e) / (r * o.size)) <= i)
      return Et[a];
  }
  return Et[n - 1];
}
function wx(t, e, s, i, n) {
  for (let a = Et.length - 1; a >= Et.indexOf(s); a--) {
    const o = Et[a];
    if (Co[o].common && t._adapter.diff(n, i, o) >= e - 1)
      return o;
  }
  return Et[s ? Et.indexOf(s) : 0];
}
function Rx(t) {
  for (let e = Et.indexOf(t) + 1, s = Et.length; e < s; ++e)
    if (Co[Et[e]].common)
      return Et[e];
}
function jd(t, e, s) {
  if (!s)
    t[e] = !0;
  else if (s.length) {
    const { lo: i, hi: n } = Ml(s, e), a = s[i] >= e ? s[i] : s[n];
    t[a] = !0;
  }
}
function Mx(t, e, s, i) {
  const n = t._adapter, a = +n.startOf(e[0].value, i), o = e[e.length - 1].value;
  let r, l;
  for (r = a; r <= o; r = +n.add(r, 1, i))
    l = s[r], l >= 0 && (e[l].major = !0);
  return e;
}
function zd(t, e, s) {
  const i = [], n = {}, a = e.length;
  let o, r;
  for (o = 0; o < a; ++o)
    r = e[o], n[r] = o, i.push({
      value: r,
      major: !1
    });
  return a === 0 || !s ? i : Mx(t, i, n, s);
}
class Bn extends mi {
  constructor(e) {
    super(e), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(e, s = {}) {
    const i = e.time || (e.time = {}), n = this._adapter = new FS._date(e.adapters.date);
    n.init(s), _n(i.displayFormats, n.formats()), this._parseOpts = {
      parser: i.parser,
      round: i.round,
      isoWeekday: i.isoWeekday
    }, super.init(e), this._normalized = s.normalized;
  }
  parse(e, s) {
    return e === void 0 ? null : Bd(this, e);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const e = this.options, s = this._adapter, i = e.time.unit || "day";
    let { min: n, max: a, minDefined: o, maxDefined: r } = this.getUserBounds();
    function l(c) {
      !o && !isNaN(c.min) && (n = Math.min(n, c.min)), !r && !isNaN(c.max) && (a = Math.max(a, c.max));
    }
    (!o || !r) && (l(this._getLabelBounds()), (e.bounds !== "ticks" || e.ticks.source !== "labels") && l(this.getMinMax(!1))), n = nt(n) && !isNaN(n) ? n : +s.startOf(Date.now(), i), a = nt(a) && !isNaN(a) ? a : +s.endOf(Date.now(), i) + 1, this.min = Math.min(n, a - 1), this.max = Math.max(n + 1, a);
  }
  _getLabelBounds() {
    const e = this.getLabelTimestamps();
    let s = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
    return e.length && (s = e[0], i = e[e.length - 1]), {
      min: s,
      max: i
    };
  }
  buildTicks() {
    const e = this.options, s = e.time, i = e.ticks, n = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
    e.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
    const a = this.min, o = this.max, r = l_(n, a, o);
    return this._unit = s.unit || (i.autoSkip ? Hd(s.minUnit, this.min, this.max, this._getLabelCapacity(a)) : wx(this, r.length, s.minUnit, this.min, this.max)), this._majorUnit = !i.major.enabled || this._unit === "year" ? void 0 : Rx(this._unit), this.initOffsets(n), e.reverse && r.reverse(), zd(this, r, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((e) => +e.value));
  }
  initOffsets(e = []) {
    let s = 0, i = 0, n, a;
    this.options.offset && e.length && (n = this.getDecimalForValue(e[0]), e.length === 1 ? s = 1 - n : s = (this.getDecimalForValue(e[1]) - n) / 2, a = this.getDecimalForValue(e[e.length - 1]), e.length === 1 ? i = a : i = (a - this.getDecimalForValue(e[e.length - 2])) / 2);
    const o = e.length < 3 ? 0.5 : 0.25;
    s = dt(s, 0, o), i = dt(i, 0, o), this._offsets = {
      start: s,
      end: i,
      factor: 1 / (s + 1 + i)
    };
  }
  _generate() {
    const e = this._adapter, s = this.min, i = this.max, n = this.options, a = n.time, o = a.unit || Hd(a.minUnit, s, i, this._getLabelCapacity(s)), r = he(n.ticks.stepSize, 1), l = o === "week" ? a.isoWeekday : !1, c = Wi(l) || l === !0, u = {};
    let d = s, f, h;
    if (c && (d = +e.startOf(d, "isoWeek", l)), d = +e.startOf(d, c ? "day" : o), e.diff(i, s, o) > 1e5 * r)
      throw new Error(s + " and " + i + " are too far apart with stepSize of " + r + " " + o);
    const m = n.ticks.source === "data" && this.getDataTimestamps();
    for (f = d, h = 0; f < i; f = +e.add(f, r, o), h++)
      jd(u, f, m);
    return (f === i || n.bounds === "ticks" || h === 1) && jd(u, f, m), Object.keys(u).sort(Wd).map((g) => +g);
  }
  getLabelForValue(e) {
    const s = this._adapter, i = this.options.time;
    return i.tooltipFormat ? s.format(e, i.tooltipFormat) : s.format(e, i.displayFormats.datetime);
  }
  format(e, s) {
    const n = this.options.time.displayFormats, a = this._unit, o = s || n[a];
    return this._adapter.format(e, o);
  }
  _tickFormatFunction(e, s, i, n) {
    const a = this.options, o = a.ticks.callback;
    if (o)
      return ze(o, [
        e,
        s,
        i
      ], this);
    const r = a.time.displayFormats, l = this._unit, c = this._majorUnit, u = l && r[l], d = c && r[c], f = i[s], h = c && d && f && f.major;
    return this._adapter.format(e, n || (h ? d : u));
  }
  generateTickLabels(e) {
    let s, i, n;
    for (s = 0, i = e.length; s < i; ++s)
      n = e[s], n.label = this._tickFormatFunction(n.value, s, e);
  }
  getDecimalForValue(e) {
    return e === null ? NaN : (e - this.min) / (this.max - this.min);
  }
  getPixelForValue(e) {
    const s = this._offsets, i = this.getDecimalForValue(e);
    return this.getPixelForDecimal((s.start + i) * s.factor);
  }
  getValueForPixel(e) {
    const s = this._offsets, i = this.getDecimalForPixel(e) / s.factor - s.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(e) {
    const s = this.options.ticks, i = this.ctx.measureText(e).width, n = Vt(this.isHorizontal() ? s.maxRotation : s.minRotation), a = Math.cos(n), o = Math.sin(n), r = this._resolveTickFontOptions(0).size;
    return {
      w: i * a + r * o,
      h: i * o + r * a
    };
  }
  _getLabelCapacity(e) {
    const s = this.options.time, i = s.displayFormats, n = i[s.unit] || i.millisecond, a = this._tickFormatFunction(e, 0, zd(this, [
      e
    ], this._majorUnit), n), o = this._getLabelSize(a), r = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
    return r > 0 ? r : 1;
  }
  getDataTimestamps() {
    let e = this._cache.data || [], s, i;
    if (e.length)
      return e;
    const n = this.getMatchingVisibleMetas();
    if (this._normalized && n.length)
      return this._cache.data = n[0].controller.getAllParsedValues(this);
    for (s = 0, i = n.length; s < i; ++s)
      e = e.concat(n[s].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(e);
  }
  getLabelTimestamps() {
    const e = this._cache.labels || [];
    let s, i;
    if (e.length)
      return e;
    const n = this.getLabels();
    for (s = 0, i = n.length; s < i; ++s)
      e.push(Bd(this, n[s]));
    return this._cache.labels = this._normalized ? e : this.normalize(e);
  }
  normalize(e) {
    return Oh(e.sort(Wd));
  }
}
V(Bn, "id", "time"), V(Bn, "defaults", {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: !1,
    major: {
      enabled: !1
    }
  }
});
function xa(t, e, s) {
  let i = 0, n = t.length - 1, a, o, r, l;
  s ? (e >= t[i].pos && e <= t[n].pos && ({ lo: i, hi: n } = ks(t, "pos", e)), { pos: a, time: r } = t[i], { pos: o, time: l } = t[n]) : (e >= t[i].time && e <= t[n].time && ({ lo: i, hi: n } = ks(t, "time", e)), { time: a, pos: r } = t[i], { time: o, pos: l } = t[n]);
  const c = o - a;
  return c ? r + (l - r) * (e - a) / c : r;
}
class tl extends Bn {
  constructor(e) {
    super(e), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const e = this._getTimestampsForTable(), s = this._table = this.buildLookupTable(e);
    this._minPos = xa(s, this.min), this._tableRange = xa(s, this.max) - this._minPos, super.initOffsets(e);
  }
  buildLookupTable(e) {
    const { min: s, max: i } = this, n = [], a = [];
    let o, r, l, c, u;
    for (o = 0, r = e.length; o < r; ++o)
      c = e[o], c >= s && c <= i && n.push(c);
    if (n.length < 2)
      return [
        {
          time: s,
          pos: 0
        },
        {
          time: i,
          pos: 1
        }
      ];
    for (o = 0, r = n.length; o < r; ++o)
      u = n[o + 1], l = n[o - 1], c = n[o], Math.round((u + l) / 2) !== c && a.push({
        time: c,
        pos: o / (r - 1)
      });
    return a;
  }
  _generate() {
    const e = this.min, s = this.max;
    let i = super.getDataTimestamps();
    return (!i.includes(e) || !i.length) && i.splice(0, 0, e), (!i.includes(s) || i.length === 1) && i.push(s), i.sort((n, a) => n - a);
  }
  _getTimestampsForTable() {
    let e = this._cache.all || [];
    if (e.length)
      return e;
    const s = this.getDataTimestamps(), i = this.getLabelTimestamps();
    return s.length && i.length ? e = this.normalize(s.concat(i)) : e = s.length ? s : i, e = this._cache.all = e, e;
  }
  getDecimalForValue(e) {
    return (xa(this._table, e) - this._minPos) / this._tableRange;
  }
  getValueForPixel(e) {
    const s = this._offsets, i = this.getDecimalForPixel(e) / s.factor - s.end;
    return xa(this._table, i * this._tableRange + this._minPos, !0);
  }
}
V(tl, "id", "timeseries"), V(tl, "defaults", Bn.defaults);
var Dx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  CategoryScale: Xr,
  LinearScale: Qr,
  LogarithmicScale: Zr,
  RadialLinearScale: dn,
  TimeScale: Bn,
  TimeSeriesScale: tl
});
const Ix = [
  US,
  hT,
  lx,
  Dx
];
Le.register(...Ix);
const sl = /* @__PURE__ */ new Set();
let Tp, xp;
function vr() {
  const t = xp ?? window.StardewScene.resolveScene(Tp).phase === "night";
  document.body.classList.contains(t ? "night" : "light") || (document.body.classList.toggle("light", !t), document.body.classList.toggle("night", t), sl.forEach((e) => e()));
}
function Ex(t) {
  const e = JSON.parse(sessionStorage.getItem("farm-detail-origin") || "null"), s = (e == null ? void 0 : e.hash) === location.hash && e.page === t.pathname + t.search ? e.scene : null;
  Tp = (s == null ? void 0 : s.place) ?? window.estateStart.visitor, xp = s ? s.phaseOverride : window.estateStart.demo ? window.estateStart.night : null, vr(), window.setInterval(vr, 3e4), window.addEventListener("pageshow", vr);
}
function Ox(t) {
  sl.add(t), go(() => sl.delete(t));
}
function _r(t, e = null) {
  const s = Number(t);
  return Number.isFinite(s) ? s : e;
}
function Nx(t, e, { replayCachedReport: s = !1, reportAgeMs: i = 0 } = {}) {
  const n = _r(t);
  if (n === null) return null;
  if (s) {
    const o = Math.max(0, _r(i, 0));
    return n + o;
  }
  const a = _r(e);
  return a === null ? n : Math.max(n, a);
}
const Lx = { class: "container" }, Ux = { class: "terminal-header" }, Fx = { class: "terminal-title" }, Wx = ["href", "aria-label", "title"], Bx = {
  key: 0,
  class: "loading-state"
}, Hx = { class: "loading-text" }, jx = { class: "nav-bar" }, zx = {
  class: "time-selector",
  id: "time-selector"
}, Vx = ["aria-pressed", "onClick"], qx = {
  key: 0,
  class: "monitor-access"
}, Gx = { role: "status" }, Kx = { class: "host-card" }, $x = { class: "host-card-header" }, Jx = { class: "host-name" }, Yx = {
  key: 0,
  class: "country-os-icons"
}, Xx = ["src", "alt"], Qx = {
  key: 1,
  class: "country-os-icons"
}, Zx = {
  class: "sysinfo-grid",
  id: "info-panel"
}, e0 = { class: "sysinfo-item" }, t0 = { class: "sysinfo-label" }, s0 = { class: "sysinfo-value" }, i0 = {
  key: 0,
  class: "sysinfo-item"
}, n0 = { class: "sysinfo-label" }, a0 = { class: "sysinfo-item sysinfo-wide" }, o0 = { class: "sysinfo-label" }, r0 = { class: "sysinfo-value sysinfo-small" }, l0 = {
  key: 1,
  class: "sysinfo-item"
}, c0 = { class: "sysinfo-label" }, u0 = { class: "sysinfo-value sysinfo-small" }, d0 = { class: "sysinfo-item sysinfo-wide" }, f0 = { class: "sysinfo-label" }, h0 = { class: "sysinfo-value sysinfo-small" }, p0 = {
  key: 2,
  class: "sysinfo-item"
}, m0 = { class: "sysinfo-label" }, g0 = { class: "sysinfo-value sysinfo-small" }, b0 = { class: "sysinfo-item" }, y0 = { class: "sysinfo-label" }, v0 = { class: "sysinfo-value" }, _0 = { class: "sysinfo-item" }, S0 = { class: "sysinfo-label" }, k0 = { class: "sysinfo-value highlight" }, T0 = { class: "sysinfo-item" }, x0 = { class: "sysinfo-label" }, A0 = { class: "sysinfo-value sysinfo-small" }, P0 = { class: "measure" }, C0 = { class: "measure" }, w0 = { class: "sysinfo-item" }, R0 = { class: "sysinfo-label" }, M0 = { class: "sysinfo-value sysinfo-small" }, D0 = { class: "measure" }, I0 = { class: "measure" }, E0 = {
  key: 3,
  class: "sysinfo-item"
}, O0 = { class: "sysinfo-label" }, N0 = { class: "sysinfo-value sysinfo-small" }, L0 = { class: "measure" }, U0 = { class: "measure" }, F0 = {
  key: 4,
  class: "sysinfo-item"
}, W0 = { class: "sysinfo-label" }, B0 = { class: "sysinfo-value sysinfo-small" }, H0 = { class: "sysinfo-item" }, j0 = { class: "sysinfo-label" }, z0 = { class: "sysinfo-value sysinfo-small" }, V0 = { class: "sysinfo-item" }, q0 = { class: "sysinfo-label" }, G0 = { class: "sysinfo-value sysinfo-small" }, K0 = {
  key: 1,
  class: "history-note",
  role: "status"
}, $0 = { class: "charts-container" }, J0 = { class: "chart-card-header" }, Y0 = { class: "chart-title" }, X0 = { class: "chart-header-actions" }, Q0 = { class: "chart-current-value" }, Z0 = { class: "chart-body" }, eA = { class: "chart-card-header" }, tA = { class: "chart-title" }, sA = { class: "chart-header-actions" }, iA = { class: "chart-current-value-container" }, nA = { class: "chart-current-value" }, aA = { class: "chart-subtitle" }, oA = { class: "chart-body" }, rA = { class: "chart-card-header" }, lA = { class: "chart-title" }, cA = { class: "chart-header-actions" }, uA = { class: "net-indicator" }, dA = { class: "net-down" }, fA = { class: "net-up" }, hA = { class: "chart-body" }, pA = { class: "chart-card-header" }, mA = { class: "chart-title" }, gA = { class: "chart-header-actions" }, bA = { class: "load-avg-row" }, yA = { class: "load-1m" }, vA = { class: "load-5m" }, _A = { class: "load-15m" }, SA = { class: "chart-body" }, kA = { class: "chart-card-header" }, TA = { class: "chart-title" }, xA = { class: "chart-header-actions" }, AA = { class: "chart-current-value-container" }, PA = { class: "chart-current-value" }, CA = { class: "chart-subtitle" }, wA = { class: "chart-body" }, RA = { class: "chart-card-header disk-io-header" }, MA = { class: "chart-title" }, DA = { class: "chart-header-actions" }, IA = { class: "ping-indicator" }, EA = { class: "net-down" }, OA = { class: "net-up" }, NA = { class: "conn-tcp" }, LA = { class: "conn-udp" }, UA = { class: "chart-body" }, FA = { class: "chart-card-header" }, WA = { class: "chart-title" }, BA = { class: "chart-header-actions" }, HA = { class: "chart-current-value" }, jA = { class: "chart-body" }, zA = { class: "chart-card-header" }, VA = { class: "chart-title" }, qA = { class: "chart-header-actions" }, GA = { class: "chart-current-value" }, KA = { class: "chart-body" }, $A = { class: "chart-card-header" }, JA = { class: "chart-title" }, YA = { class: "chart-header-actions" }, XA = { class: "chart-current-value" }, QA = { class: "chart-body" }, ZA = { class: "chart-card-header" }, eP = { class: "chart-title" }, tP = { class: "chart-header-actions" }, sP = { class: "chart-current-value" }, iP = { class: "chart-body" }, nP = { class: "chart-card-header" }, aP = { class: "chart-title" }, oP = { class: "chart-header-actions" }, rP = { class: "chart-current-value" }, lP = { class: "chart-body" }, cP = { class: "chart-card-header" }, uP = { class: "chart-title" }, dP = { class: "chart-header-actions" }, fP = { class: "net-indicator" }, hP = { class: "conn-tcp" }, pP = { class: "conn-udp" }, mP = { class: "chart-body" }, gP = { class: "chart-card-header" }, bP = { class: "chart-title" }, yP = { class: "chart-header-actions" }, vP = { class: "ping-indicator" }, _P = { class: "chart-body" }, SP = { class: "chart-card-header" }, kP = { class: "chart-title" }, TP = { class: "chart-header-actions" }, xP = { class: "ping-indicator" }, AP = { class: "chart-body" }, PP = { class: "modal-dialog" }, CP = { class: "modal-header" }, wP = { class: "modal-body-content" }, RP = { class: "modal-body-text" }, MP = { class: "modal-footer flex-justify-between" }, Aa = 0.167, DP = 12e4, IP = 3e4, Vd = {
  __name: "ServerDetail",
  setup(t) {
    const e = Uy(), s = Ly(), i = Ot("appConfig", null), n = Ot("initialServer"), a = By() ? "/#/admin" : "/admin#/admin", o = window.farmText("管理后台"), r = Ot("demoHistory", null), l = (p) => {
      var b;
      return ![!1, 0, "0", "false"].includes(((b = n.sysConfig) == null ? void 0 : b[p]) ?? (i == null ? void 0 : i[p]));
    }, c = /* @__PURE__ */ oe("");
    let u = 0, d = e.params.id;
    d || (d = new URLSearchParams(window.location.search).get("id")), d || s.push("/");
    const f = /* @__PURE__ */ oe(0), h = e.query.apiIndex;
    h != null && !isNaN(parseInt(h)) && (f.value = parseInt(h));
    const m = /* @__PURE__ */ oe({}), g = /* @__PURE__ */ oe(Aa), v = /* @__PURE__ */ oe("—"), T = /* @__PURE__ */ oe(null), x = /* @__PURE__ */ oe(!1), C = /* @__PURE__ */ oe(!1), P = /* @__PURE__ */ oe(0), M = /* @__PURE__ */ oe(!0), w = xh(), O = {
      props: {
        expanded: { type: Boolean, default: !1 }
      },
      emits: ["toggle"],
      setup(p, { emit: b }) {
        const _ = () => p.expanded ? w.value.collapseChart : w.value.expandChart;
        return () => ss("button", {
          type: "button",
          class: ["chart-expand-btn", { active: p.expanded }],
          title: _(),
          "aria-label": _(),
          "aria-pressed": p.expanded ? "true" : "false",
          onClick: () => b("toggle")
        }, [
          ss("svg", {
            viewBox: "0 0 24 24",
            width: "16",
            height: "16",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, p.expanded ? [
            ss("polyline", { points: "4 14 10 14 10 20" }),
            ss("polyline", { points: "20 10 14 10 14 4" })
          ] : [
            ss("polyline", { points: "15 3 21 3 21 9" }),
            ss("polyline", { points: "9 21 3 21 3 15" }),
            ss("line", { x1: "21", y1: "3", x2: "14", y2: "10" }),
            ss("line", { x1: "3", y1: "21", x2: "10", y2: "14" })
          ])
        ]);
      }
    }, W = [
      { field: "ping_ct", lossField: "loss_ct", className: "ping-ct", datasetIndex: 0 },
      { field: "ping_cu", lossField: "loss_cu", className: "ping-cu", datasetIndex: 1 },
      { field: "ping_cm", lossField: "loss_cm", className: "ping-cm", datasetIndex: 2 },
      { field: "ping_bd", lossField: "loss_bd", className: "ping-bd", datasetIndex: 3 },
      { field: "ping_node_1", lossField: "loss_node_1", className: "ping-node-1", datasetIndex: 4 },
      { field: "ping_node_2", lossField: "loss_node_2", className: "ping-node-2", datasetIndex: 5 },
      { field: "ping_node_3", lossField: "loss_node_3", className: "ping-node-3", datasetIndex: 6 },
      { field: "ping_node_4", lossField: "loss_node_4", className: "ping-node-4", datasetIndex: 7 }
    ], J = (p) => String((i == null ? void 0 : i[p.startsWith("node_") ? `${p}_name` : `custom_${p}_name`]) || (p === "bd" ? "BGP" : w.value[`custom${p.toUpperCase().charAt(0)}${p.slice(1)}`]) || p.toUpperCase()), Q = ["read_bps", "write_bps", "read_iops", "write_iops", "await_ms", "util"], ie = Object.freeze(Object.fromEntries(Q.map((p) => [p, null]))), ce = (p, b) => Object.prototype.hasOwnProperty.call(p, b), xe = (p) => p && typeof p == "object" && !Array.isArray(p), Ge = (p) => {
      if (p == null || p === "") return null;
      const b = Number.parseFloat(p);
      return Number.isFinite(b) ? b : null;
    }, ge = (p) => xe(p) ? Q.some((b) => ce(p, b) && Ge(p[b]) !== null) : !1, re = (p) => xe(p) ? ge(p.disk) : !1, H = (p) => p === "disk", q = (p, b) => {
      if (!p || typeof p != "object" || !ge(p.disk)) return null;
      const _ = ce(p.disk, b) ? p.disk[b] : null;
      return Ge(_);
    }, le = (p) => Object.fromEntries(
      Q.map((b) => [b, q(p, b)])
    ), Re = (p) => (b) => q(b, p), ke = (p, b = "") => K(p, 1, b), Ue = (p) => {
      const b = Number.parseFloat(p);
      if (!Number.isFinite(b)) return "0";
      const _ = Math.abs(b);
      return _ >= 1e4 ? `${(b / 1e3).toFixed(0)}k` : _ >= 1e3 ? `${(b / 1e3).toFixed(1)}k` : _ >= 100 ? b.toFixed(0) : b.toFixed(1);
    }, Fe = de(() => [
      { hours: Aa, label: "10m" },
      { hours: 0.5, label: "30m" },
      { hours: 1, label: "1h" },
      { hours: 6, label: "6h" },
      { hours: 12, label: "12h" },
      { hours: 24, label: "24h" },
      { hours: 48, label: "2d" },
      { hours: 96, label: "4d" },
      { hours: 168, label: "7d" }
    ]), He = de(() => m.value.is_online == null ? Jy(m.value) : ![!1, 0, "false", "0"].includes(m.value.is_online)), rt = /* @__PURE__ */ oe(!1), Xe = window.farmText;
    function D(p) {
      if (typeof p != "number" && (typeof p != "string" || !p.trim())) return null;
      const b = Number(p);
      return Number.isFinite(b) && b >= 0 ? b : null;
    }
    function K(p, b, _ = "") {
      const R = D(p);
      return R === null ? "—" : R.toFixed(b) + _;
    }
    function B(p, b = 1, _ = "") {
      const R = D(p);
      return R === null ? "—" : $y(R * b).replace(" ", " ") + _;
    }
    function Z(p, b) {
      const _ = D(p), R = D(b);
      return _ === null || !R ? null : 100 * _ / R;
    }
    const ye = de(() => K(m.value.cpu, 1, "%")), y = (p) => {
      if (!p) return [];
      if (Array.isArray(p)) return p;
      if (typeof p == "string")
        try {
          const b = JSON.parse(p);
          return Array.isArray(b) ? b : [];
        } catch {
          return [];
        }
      return [];
    }, k = de(() => y(m.value.gpu_info)), A = de(() => {
      const p = k.value;
      return p.length === 0 ? m.value.gpu_info || "—" : p.map((b) => b.name || b.id || "GPU").join(" / ");
    }), N = de(() => {
      const p = k.value;
      if (p.length === 0) return "—";
      const b = (_) => {
        if (_ == null) return "—";
        const R = parseFloat(_);
        return Number.isNaN(R) ? "—" : `${R.toFixed(1)}%`;
      };
      return p.length === 1 ? b(p[0].info) : p.map((_) => b(_.info)).join(" / ");
    }), L = (p, b) => {
      if (!p) return null;
      const _ = parseFloat(p[b]);
      return Number.isNaN(_) ? null : _;
    }, E = de(() => k.value.some((p) => L(p, "mem_used") !== null)), G = de(() => k.value.some((p) => L(p, "sm_clock") !== null)), z = de(() => k.value.some((p) => L(p, "power") !== null)), j = de(() => {
      const p = k.value;
      return p.length === 0 ? "—" : p.map((b) => {
        const _ = L(b, "mem_used");
        if (_ === null) return "—";
        const R = L(b, "mem_total");
        return R !== null ? `${B(_ * 1024 * 1024)} / ${B(R * 1024 * 1024)}` : B(_ * 1024 * 1024);
      }).join(" / ");
    }), U = de(() => {
      const p = k.value;
      return p.length === 0 ? "—" : p.map((b) => {
        const _ = L(b, "sm_clock");
        return _ === null ? "—" : `${Math.round(_)} MHz`;
      }).join(" / ");
    }), ae = de(() => {
      const p = k.value;
      return p.length === 0 ? "—" : p.map((b) => {
        const _ = L(b, "power");
        return _ === null ? "—" : `${_.toFixed(1)} W`;
      }).join(" / ");
    }), $ = de(() => K(Z(m.value.ram_used, m.value.ram_total), 2, "%")), se = de(() => K(Z(m.value.disk_used, m.value.disk_total), 2, "%")), ne = de(() => re(m.value) ? le(m.value) : ie), ve = de(() => k.value.length > 0), Ae = de(() => {
      const p = /* @__PURE__ */ new Date(), b = String(m.value.expire_date || "").slice(0, 10);
      return (Date.parse(b + "T00:00:00Z") - Date.UTC(p.getFullYear(), p.getMonth(), p.getDate())) / 864e5;
    }), Me = de(() => Ae.value < 0), Ze = de(() => Number.isFinite(Ae.value) ? window.farmText(Ae.value < 0 ? "已过期 {n} 天" : Ae.value === 0 ? "今天到期" : "剩余 {n} 天", { n: Math.abs(Ae.value) }) : "—"), et = /* @__PURE__ */ oe(null), St = /* @__PURE__ */ oe(null), kt = /* @__PURE__ */ oe(null), Yt = /* @__PURE__ */ oe(null), Ks = /* @__PURE__ */ oe(null), ut = /* @__PURE__ */ oe(null), Tt = /* @__PURE__ */ oe(null), $s = /* @__PURE__ */ oe(null), Js = /* @__PURE__ */ oe(null), Kn = /* @__PURE__ */ oe(null), $n = /* @__PURE__ */ oe(null), Jn = /* @__PURE__ */ oe(null), Yn = /* @__PURE__ */ oe(null), Xn = /* @__PURE__ */ oe(null), Qn = /* @__PURE__ */ oe(!1), Zn = /* @__PURE__ */ oe(!1), ee = {}, ea = /* @__PURE__ */ oe(!1), ta = /* @__PURE__ */ oe({}), jl = /* @__PURE__ */ oe({}), zl = /* @__PURE__ */ oe(null), Vl = /* @__PURE__ */ oe(null), ql = /* @__PURE__ */ oe(null), Gl = /* @__PURE__ */ oe(null), Kl = /* @__PURE__ */ oe(null), $l = /* @__PURE__ */ oe(null), Jl = /* @__PURE__ */ oe(null), Yl = /* @__PURE__ */ oe(null), Xl = /* @__PURE__ */ oe(null), Ql = /* @__PURE__ */ oe(null), Zl = /* @__PURE__ */ oe(null), ec = /* @__PURE__ */ oe(null), tc = /* @__PURE__ */ oe(null), sc = /* @__PURE__ */ oe(null), ic = /* @__PURE__ */ oe(null), nc = /* @__PURE__ */ oe(null);
    let sa = !1, ac = !1, zi = 0;
    const Ne = (p) => !!ta.value[p], Pp = (p) => {
      xi(() => {
        requestAnimationFrame(() => {
          const b = ee[p];
          b && (typeof b.resize == "function" && b.resize(), b.update("none"));
        });
      });
    }, Rt = (p) => {
      ta.value = {
        ...ta.value,
        [p]: !ta.value[p]
      }, Pp(p);
    }, Cp = () => {
      Zn.value || (Zn.value = !0, xi(() => {
        ee.diskIo && (typeof ee.diskIo.resize == "function" && ee.diskIo.resize(), ee.diskIo.update("none"));
      }));
    }, ia = (p) => {
      const b = re(p);
      return b && Cp(), b;
    }, wp = {
      ping_ct: zl,
      ping_cu: Vl,
      ping_cm: ql,
      ping_bd: Gl,
      ping_node_1: Kl,
      ping_node_2: $l,
      ping_node_3: Jl,
      ping_node_4: Yl
    }, Rp = {
      loss_ct: Xl,
      loss_cu: Ql,
      loss_cm: Zl,
      loss_bd: ec,
      loss_node_1: tc,
      loss_node_2: sc,
      loss_node_3: ic,
      loss_node_4: nc
    }, oc = de(() => W.filter((p) => {
      const b = m.value[p.field];
      return b !== void 0 && !Xi(b);
    })), Mp = de(() => oc.value.length > 0), Dp = de(() => oc.value.map((p) => ({
      ...p,
      label: J(p.field.replace("ping_", "")),
      value: wp[p.field].value
    }))), rc = de(() => W.filter((p) => m.value[p.field] !== void 0 && !Xi(m.value[p.field]) && (jl.value[p.lossField] || Ro(m.value[p.lossField])))), Ip = de(() => rc.value.map((p) => ({
      ...p,
      field: p.lossField,
      label: J(p.field.replace("ping_", "")),
      value: Rp[p.lossField].value
    })).filter((p) => p.value !== null)), Ep = de(() => {
      const { net_rx_monthly: p, net_tx_monthly: b, traffic_calc_type: _ } = m.value;
      return _ !== "ul" && D(p) === null || _ !== "dl" && D(b) === null ? null : xv(m.value);
    }), lc = () => {
      try {
        for (const p of Object.keys(ee))
          ee[p] && (ee[p].destroy(), ee[p] = null);
      } catch {
      }
    }, Vi = (p) => {
      const b = Array.isArray(p) ? p : String(p ?? "").trim().split(/[ ,]+/);
      return [0, 1, 2].map((_) => D(b[_]));
    }, Ro = (p) => !Xi(p) && p !== null && p !== void 0 && p !== "" && !Number.isNaN(parseFloat(p)), Op = de(() => rc.value.length > 0), cc = (p) => {
      if (!p) return null;
      if (typeof p == "string" && !/^\d+$/.test(p)) {
        const b = new Date(p);
        return isNaN(b.getTime()) ? null : b.getTime();
      } else {
        let b = parseInt(p);
        return isNaN(b) ? null : (b < 1e12 && (b *= 1e3), b);
      }
    }, Np = (p) => {
      const b = cc(p);
      if (!b) return "—";
      const _ = Date.now() - b;
      if (_ < 0) return "—";
      const R = Math.floor(_ / 1e3), I = Math.floor(R / 86400), X = Math.floor(R % 86400 / 3600), Y = Math.floor(R % 3600 / 60), me = String(X).padStart(2, "0"), ue = String(Y).padStart(2, "0");
      return I > 0 ? `${I}${I === 1 ? w.value.day : w.value.days}, ${me}:${ue}` : `${me}:${ue}`;
    }, Mo = (p) => {
      const b = cc(p);
      return b ? qy(b) : "—";
    }, uc = (p, b) => {
      const _ = parseInt(p.slice(1, 3), 16), R = parseInt(p.slice(3, 5), 16), I = parseInt(p.slice(5, 7), 16);
      return `rgba(${_}, ${R}, ${I}, ${b})`;
    }, Xt = (p) => {
      const b = Number((p == null ? void 0 : p.x) ?? p);
      return Number.isFinite(b) ? b : 0;
    }, Ds = (p, b) => ({
      x: String(p),
      y: b
    }), Lp = (p) => {
      const b = Number(p);
      if (!Number.isFinite(b)) return String(p || "");
      const _ = new Date(b), R = (X) => String(X).padStart(2, "0"), I = `${R(_.getHours())}:${R(_.getMinutes())}`;
      return g.value <= 1 ? `${I}:${R(_.getSeconds())}` : g.value <= 3 ? I : `${R(_.getMonth() + 1)}-${R(_.getDate())} ${I}`;
    }, qi = (p) => {
      if (!p) return;
      const b = /* @__PURE__ */ new Set(), _ = [];
      for (const R of p.data.datasets || [])
        for (const I of R.data || []) {
          const X = Xt(I);
          if (!X) continue;
          const Y = String(X);
          b.has(Y) || (b.add(Y), _.push(Y));
        }
      _.sort((R, I) => Number(R) - Number(I)), p.data.labels = _;
    }, Do = (p) => document.body.classList.contains("night") ? p : "#" + p.slice(1).match(/../g).map((b) => Math.round(parseInt(b, 16) * 0.54).toString(16).padStart(2, "0")).join(""), tt = (p, b, _ = {}) => ({
      label: p,
      data: [],
      farmColor: b,
      borderColor: Do(b),
      backgroundColor: _.fill ? uc(Do(b), 0.05) : "transparent",
      fill: !!_.fill,
      tension: _.tension ?? 0.4,
      borderWidth: 1.5,
      pointRadius: 0,
      hoverRadius: 5,
      spanGaps: !1,
      ..._
    }), dc = ["#ff7b72", "#79c0ff", "#d2a8ff", "#7ee787", "#ffa657", "#ff7b72", "#56d4dd", "#e3b341"], Io = ["gpu", "gpuMem", "gpuClock", "gpuPower"], fc = {
      gpu: "info",
      gpuMem: "mem_used",
      gpuClock: "sm_clock",
      gpuPower: "power"
    }, Up = (p, b) => (_) => {
      const I = y(_.gpu_info).find((X) => String(X.id) === String(p));
      return I ? L(I, fc[b]) : null;
    }, Fp = [
      { key: "cpu", ref: () => et.value, datasets: [tt("CPU", "#00d4aa", { fill: !0 })], unit: "%" },
      { key: "gpu", ref: () => St.value, datasets: [], unit: "%", legend: !0 },
      { key: "gpuMem", ref: () => kt.value, datasets: [], legend: !0, tickFormat: (p) => B(p * 1024 * 1024) },
      { key: "gpuClock", ref: () => Yt.value, datasets: [], unit: " MHz", legend: !0 },
      { key: "gpuPower", ref: () => Ks.value, datasets: [], unit: " W", legend: !0 },
      { key: "ram", ref: () => ut.value, datasets: [tt("Memory", "#b392f0", { fill: !0 }), tt("Swap", "#ffb870", { fill: !0 })], unit: "%", legend: !0 },
      { key: "disk", ref: () => Tt.value, datasets: [tt("Disk", "#39d2c0", { fill: !0 })], unit: "%" },
      {
        key: "diskIo",
        ref: () => $s.value,
        datasets: [
          tt("Read", "#00d4aa", { fill: !0, yAxisID: "y", formatValue: (p) => B(p) + "/s" }),
          tt("Write", "#ffb870", { fill: !0, yAxisID: "y", formatValue: (p) => B(p) + "/s" }),
          tt("Read IOPS", "#4da6ff", { yAxisID: "y1", borderDash: [5, 4], formatValue: (p) => `${ke(p)} ops/s` }),
          tt("Write IOPS", "#b392f0", { yAxisID: "y1", borderDash: [5, 4], formatValue: (p) => `${ke(p)} ops/s` }),
          tt("await", "#f778ba", { yAxisID: "y1", borderDash: [2, 4], formatValue: (p) => `${ke(p)} ms` }),
          tt("util", "#ff7b72", { yAxisID: "y1", borderDash: [8, 4], formatValue: (p) => `${ke(p)}%` })
        ],
        legend: !0,
        tickFormat: (p) => B(p),
        extraScales: (p) => ({
          y1: {
            beginAtZero: !0,
            position: "right",
            grid: { color: p.grid, drawBorder: !1, drawOnChartArea: !1, tickLength: 0 },
            ticks: {
              color: p.axis,
              font: { size: 9, family: "'JetBrains Mono', monospace" },
              padding: 8,
              callback: Ue
            }
          }
        })
      },
      { key: "proc", ref: () => Kn.value, datasets: [tt("Processes", "#f778ba", { fill: !0 })] },
      { key: "net", ref: () => Js.value, datasets: [tt("Download", "#00d4aa", { fill: !0 }), tt("Upload", "#4da6ff", { fill: !0 })], legend: !0, formatValue: (p) => B(p) + "/s", tickFormat: (p) => B(p) },
      { key: "conn", ref: () => $n.value, datasets: [tt("TCP", "#b392f0"), tt("UDP", "#f778ba")], legend: !0 },
      { key: "ping", ref: () => Jn.value, datasets: ["ct", "cu", "cm", "bd", "node_1", "node_2", "node_3", "node_4"].map((p, b) => tt(J(p), ["#00d4aa", "#ffb870", "#4da6ff", "#b392f0", "#ff7b72", "#79c0ff", "#7ee787", "#ffa657"][b], { tension: 0.3 })), unit: " ms", legend: !0 },
      { key: "loss", ref: () => Yn.value, datasets: ["ct", "cu", "cm", "bd", "node_1", "node_2", "node_3", "node_4"].map((p, b) => tt(J(p), ["#00d4aa", "#ffb870", "#4da6ff", "#b392f0", "#ff7b72", "#79c0ff", "#7ee787", "#ffa657"][b], { tension: 0.3 })), unit: "%", legend: !0 },
      { key: "load", ref: () => Xn.value, datasets: [tt(w.value.load1m || "1 Min", "#00d4aa", { tension: 0.3 }), tt(w.value.load5m || "5 Min", "#ffb870", { tension: 0.3 }), tt(w.value.load15m || "15 Min", "#4da6ff", { tension: 0.3 })], legend: !0 }
    ], Eo = () => {
      for (const p of ["ping", "loss"]) {
        const b = ee[p];
        if (b) {
          for (const _ of W) {
            const R = b.data.datasets[_.datasetIndex];
            if (!R) continue;
            const I = m.value[_.field], X = Xi(I), Y = I === void 0;
            R.disabledProbe = X, R.noDataProbe = Y, (X || Y) && (R.hidden = !0, typeof b.setDatasetVisibility == "function" && b.setDatasetVisibility(_.datasetIndex, !1));
          }
          b.update("none");
        }
      }
    };
    let Oo = "";
    const No = () => {
      const p = k.value, b = p.map((_) => String(_.id ?? "")).join(",");
      if (b !== Oo) {
        Oo = b;
        for (const _ of Io) {
          const R = ee[_];
          if (!R) continue;
          let I = p.map((X, Y) => {
            const me = _ === "gpuMem" ? { fill: !0, formatValue: (_e) => B(_e * 1024 * 1024) } : { fill: !0 }, ue = tt(X.name || `GPU ${Y}`, dc[Y % dc.length], me);
            return ue.gpuId = String(X.id ?? Y), ue;
          });
          I.length === 0 && I.push(tt("GPU", "#ff7b72", { fill: !0 })), R.data.datasets = I, R.update("none");
        }
      }
    }, gi = (p, b) => typeof window > "u" ? b : window.getComputedStyle(document.body).getPropertyValue(p).trim() || b, Wp = () => typeof document < "u" && document.body.classList.contains("light"), hc = () => ({
      axis: gi("--text-muted", Wp() ? "rgba(10, 14, 20, 0.8)" : "rgba(211, 218, 227, 0.8)"),
      grid: gi("--border-color", "rgba(30, 42, 58, 0.5)"),
      tooltipBg: gi("--bg-primary", "rgba(10, 14, 20, 0.95)"),
      tooltipTitle: gi("--accent-green", "#00d4aa"),
      tooltipBody: gi("--text-primary", "#d3dae3"),
      tooltipBorder: gi("--border-color", "#1e2a3a")
    }), Bp = () => {
      lc();
      const p = hc();
      Le.defaults.font.family = getComputedStyle(document.body).fontFamily, Le.defaults.font.size = 10, Le.defaults.color = p.axis, Le.defaults.plugins.tooltip.backgroundColor = p.tooltipBg, Le.defaults.plugins.tooltip.titleColor = p.tooltipTitle, Le.defaults.plugins.tooltip.bodyColor = p.tooltipBody, Le.defaults.plugins.tooltip.borderColor = p.tooltipBorder, Le.defaults.plugins.tooltip.borderWidth = 1, Le.defaults.plugins.tooltip.titleFont = { size: 12, weight: "bold", family: Le.defaults.font.family }, Le.defaults.plugins.tooltip.bodyFont = { size: 11, family: Le.defaults.font.family }, Le.defaults.plugins.tooltip.padding = 12, Le.defaults.plugins.tooltip.cornerRadius = 2;
      const b = (_ = "", R = !1, I = null, X = null, Y = null) => {
        const me = typeof Y == "function" ? Y(p) : Y || {};
        return {
          responsive: !0,
          maintainAspectRatio: !1,
          animation: { duration: yi.ANIMATION_DURATION, easing: "easeOutCubic" },
          interaction: { mode: "index", intersect: !1 },
          plugins: {
            legend: {
              display: R,
              position: "top",
              labels: {
                boxWidth: 10,
                padding: 12,
                font: { size: 10, family: "'JetBrains Mono', monospace" },
                usePointStyle: !0,
                color: p.axis,
                filter: (ue, _e) => {
                  const Te = _e.datasets[ue.datasetIndex];
                  return !(Te != null && Te.disabledProbe) && !(Te != null && Te.noDataProbe);
                }
              }
            },
            tooltip: {
              callbacks: {
                title: function(ue) {
                  var _e, Te, xt;
                  if (ue.length > 0 && ue[0].raw) {
                    const Qt = ue[0].raw.x ?? ((xt = (Te = (_e = ue[0].chart) == null ? void 0 : _e.data) == null ? void 0 : Te.labels) == null ? void 0 : xt[ue[0].dataIndex]);
                    return "> " + new Date(Number(Qt)).toLocaleString(void 0, {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: !1
                    });
                  }
                  return "";
                },
                label: function(ue) {
                  let _e = ue.dataset.label || "";
                  _e && (_e += ": ");
                  const Te = ue.parsed.y, xt = ue.dataset.formatValue;
                  return Te == null ? _e += w.value.timeout : typeof xt == "function" ? _e += xt(Te) : I ? _e += I(Te) : (_e += typeof Te == "number" ? Te.toFixed(2) : Te, _e += _), "$ " + _e;
                }
              }
            }
          },
          scales: {
            x: {
              type: "category",
              title: {
                display: !1,
                text: "",
                color: p.axis,
                font: { size: 10, family: "'JetBrains Mono', monospace" }
              },
              ticks: {
                maxTicksLimit: yi.MAX_TICKS,
                autoSkipPadding: 16,
                color: p.axis,
                font: { size: 9, family: "'JetBrains Mono', monospace" },
                maxRotation: 0,
                padding: 8,
                callback: function(ue) {
                  return Lp(this.getLabelForValue(ue));
                }
              },
              grid: { color: p.grid, drawBorder: !1, tickLength: 0 }
            },
            y: {
              beginAtZero: !0,
              grid: { color: p.grid, drawBorder: !1, tickLength: 0 },
              ticks: {
                color: p.axis,
                font: { size: 9, family: "'JetBrains Mono', monospace" },
                padding: 8,
                callback: X || function(ue) {
                  return ue + _;
                }
              }
            },
            ...me
          },
          elements: {
            point: { radius: 0, hoverRadius: 5, hitRadius: 10, borderWidth: 0, hoverBorderWidth: 2, hoverBorderColor: "#fff" },
            line: { tension: 0.4, borderWidth: 1.5, fill: !1, spanGaps: !1 }
          }
        };
      };
      for (const _ of Fp) {
        const R = _.ref();
        R && (ee[_.key] = new Le(R.getContext("2d"), {
          type: "line",
          data: { labels: [], datasets: _.datasets.map((I) => ({ ...I })) },
          options: b(_.unit || "", _.legend, _.formatValue, _.tickFormat, _.extraScales)
        }));
      }
      No(), Eo();
    };
    Ox(() => {
      const p = hc();
      Le.defaults.color = p.axis, Le.defaults.plugins.tooltip.backgroundColor = p.tooltipBg, Le.defaults.plugins.tooltip.titleColor = p.tooltipTitle, Le.defaults.plugins.tooltip.bodyColor = p.tooltipBody, Le.defaults.plugins.tooltip.borderColor = p.tooltipBorder, Object.values(ee).forEach((b) => {
        if (b) {
          b.options.plugins.legend.labels && (b.options.plugins.legend.labels.color = p.axis);
          for (const _ of b.data.datasets)
            _.borderColor = Do(_.farmColor), _.fill && (_.backgroundColor = uc(_.borderColor, 0.05));
          for (const _ of Object.values(b.options.scales || {}))
            _.title && (_.title.color = p.axis), _.ticks && (_.ticks.color = p.axis), _.grid && (_.grid.color = p.grid);
          b.update("none");
        }
      });
    });
    const Hp = (p = g.value) => {
      var I;
      if (p <= 1) return 300 * 1e3;
      const b = Number((I = T.value) == null ? void 0 : I.long_history_points), _ = bu.LONG_RANGE_POINT_OPTIONS.includes(b) ? b : bu.DEFAULT_LONG_RANGE_POINTS, R = Math.ceil(p * 60 * 60 * 1e3 / _);
      return Math.max(300 * 1e3, R * 1.9);
    }, pc = (p, b) => {
      if (!p || !b) return !1;
      const _ = Number(p.x), R = Number(b.x);
      if (!Number.isFinite(_) || !Number.isFinite(R)) return !1;
      const I = R - _, X = Hp();
      return I > X;
    }, na = (p) => {
      if (!p || p.length < 2) return p;
      const b = [];
      for (let _ = 0; _ < p.length; _++)
        if (b.push(p[_]), _ < p.length - 1 && pc(p[_], p[_ + 1])) {
          const R = Xt(p[_]), X = Xt(p[_ + 1]) - R;
          b.push(Ds(R + X / 2, null));
        }
      return b;
    }, mc = (p, b) => {
      if (!Array.isArray(p)) return [b];
      let _ = null;
      for (let R = p.length - 1; R >= 0; R--) {
        const I = p[R];
        if (I && I.y !== null && I.y !== void 0) {
          _ = I;
          break;
        }
      }
      if (_ && pc(_, b)) {
        const R = Xt(_), I = Xt(b);
        p.push(Ds(R + (I - R) / 2, null));
      }
      return p.push(b), p;
    }, gc = (p) => {
      if (!Array.isArray(p)) return 0;
      for (let b = p.length - 1; b >= 0; b--) {
        const _ = Xt(p[b]);
        if (Number.isFinite(_)) return _;
      }
      return 0;
    }, We = (p, b, _, R) => {
      if (!p) return;
      const I = p.data.datasets[b];
      if (!I) return;
      let X = [];
      _ && _.length > 0 && (X = _.map((Y) => Ds(new Date(Y.timestamp).getTime(), R(Y))), X.sort((Y, me) => Xt(Y) - Xt(me)), X = na(X)), I.data = X, qi(p), p.update("none");
    }, Lo = (p, b) => (_) => Z(_[p], _[b]), st = (p, b = !1) => (_) => {
      const R = parseFloat(_[p]);
      return Number.isNaN(R) ? null : b || R > 0 ? R : null;
    }, jp = (p, b) => {
      if (!p) return;
      let _ = [];
      b && b.length > 0 && (_ = b.map((Y) => {
        const me = Vi(Y.load_avg);
        return {
          x: new Date(Y.timestamp).getTime(),
          load1: me[0],
          load5: me[1],
          load15: me[2]
        };
      }), _.sort((Y, me) => Y.x - me.x));
      const R = _.map((Y) => Ds(Y.x, Y.load1)), I = _.map((Y) => Ds(Y.x, Y.load5)), X = _.map((Y) => Ds(Y.x, Y.load15));
      p.data.datasets[0].data = na(R), p.data.datasets[1].data = na(I), p.data.datasets[2].data = na(X), qi(p), p.update("none");
    }, zp = () => {
      const p = ee.diskIo;
      if (p) {
        for (const b of p.data.datasets || [])
          b.data = [];
        p.data.labels = [], p.update("none");
      }
    }, bc = async (p) => {
      const b = ++u;
      try {
        const _ = r ? r(p) : await Yy(String(encodeURIComponent(d)), p, f.value);
        if (b !== u) return;
        if (c.value = _.length ? "" : w.value.noData, !_.length)
          for (const R of Object.values(ee)) {
            R.data.labels = [];
            for (const I of R.data.datasets) I.data = [];
          }
        if (zi = 0, jl.value = Object.fromEntries(W.map((R) => [
          R.lossField,
          _.some((I) => Ro(I[R.lossField]))
        ])), _.length > 0) {
          zi = _.reduce((X, Y) => {
            const me = new Date(Y.timestamp).getTime();
            return Number.isFinite(me) ? Math.max(X, me) : X;
          }, 0), We(ee.cpu, 0, _, st("cpu", !0)), No();
          for (const X of Io) {
            const Y = ee[X];
            if (Y)
              for (let me = 0; me < Y.data.datasets.length; me++) {
                const _e = Y.data.datasets[me].gpuId, Te = _e ? Up(_e, X) : () => null;
                We(Y, me, _, Te);
              }
          }
          We(ee.ram, 0, _, Lo("ram_used", "ram_total")), We(ee.ram, 1, _, Lo("swap_used", "swap_total")), We(ee.disk, 0, _, Lo("disk_used", "disk_total"));
          const R = _.filter(re);
          R.length > 0 ? (ia(R[0]), Q.forEach((X, Y) => {
            We(ee.diskIo, Y, _, Re(X));
          })) : (zp(), Zn.value = !1, re(m.value) && m.value.last_updated && Tc(m.value, new Date(m.value.last_updated).getTime())), We(ee.proc, 0, _, st("processes", !0)), We(ee.net, 0, _, st("net_in_speed", !0)), We(ee.net, 1, _, st("net_out_speed", !0)), We(ee.conn, 0, _, st("tcp_conn", !0)), We(ee.conn, 1, _, st("udp_conn", !0)), We(ee.ping, 0, _, st("ping_ct", !0)), We(ee.ping, 1, _, st("ping_cu", !0)), We(ee.ping, 2, _, st("ping_cm", !0)), We(ee.ping, 3, _, st("ping_bd", !0)), We(ee.ping, 4, _, st("ping_node_1", !0)), We(ee.ping, 5, _, st("ping_node_2", !0)), We(ee.ping, 6, _, st("ping_node_3", !0)), We(ee.ping, 7, _, st("ping_node_4", !0)), We(ee.loss, 0, _, st("loss_ct", !0)), We(ee.loss, 1, _, st("loss_cu", !0)), We(ee.loss, 2, _, st("loss_cm", !0)), We(ee.loss, 3, _, st("loss_bd", !0)), We(ee.loss, 4, _, st("loss_node_1", !0)), We(ee.loss, 5, _, st("loss_node_2", !0)), We(ee.loss, 6, _, st("loss_node_3", !0)), We(ee.loss, 7, _, st("loss_node_4", !0)), jp(ee.load, _);
          const I = (X, Y, me = !0) => {
            const ue = X.map((_e) => parseFloat(_e[Y])).filter((_e) => !isNaN(_e) && (me ? _e !== 0 : !0));
            return ue.length ? Math.round(ue.reduce((_e, Te) => _e + Te, 0) / ue.length) : null;
          };
          zl.value = I(_, "ping_ct"), Vl.value = I(_, "ping_cu"), ql.value = I(_, "ping_cm"), Gl.value = I(_, "ping_bd"), Kl.value = I(_, "ping_node_1"), $l.value = I(_, "ping_node_2"), Jl.value = I(_, "ping_node_3"), Yl.value = I(_, "ping_node_4"), Xl.value = I(_, "loss_ct", !1), Ql.value = I(_, "loss_cu", !1), Zl.value = I(_, "loss_cm", !1), ec.value = I(_, "loss_bd", !1), tc.value = I(_, "loss_node_1", !1), sc.value = I(_, "loss_node_2", !1), ic.value = I(_, "loss_node_3", !1), nc.value = I(_, "loss_node_4", !1), Eo();
        }
        Vp(p), Qn.value = !0, await xi(), requestAnimationFrame(() => {
          Object.values(ee).forEach((R) => {
            R.resize(), R.update("none");
          });
        });
      } catch (_) {
        if (b !== u) return;
        if (_ && _.status === 401) {
          x.value = !0, g.value = Aa, Qn.value = !0;
          return;
        }
        if (_ && _.message === "databaseUpgradeRequired") {
          ac || (ac = !0, alert(av(_.message)));
          return;
        }
        Qn.value = !0, c.value = window.farmText("历史数据读取失败"), console.error("[ERROR] Load history failed:", _);
      }
    }, Vp = (p) => {
      const b = p <= 3 ? yi.MAX_TICKS : yi.MAX_TICKS_HOUR;
      Object.values(ee).forEach((_) => {
        var R, I;
        (I = (R = _ == null ? void 0 : _.options) == null ? void 0 : R.scales) != null && I.x && (_.options.scales.x.ticks.maxTicksLimit = b, delete _.options.scales.x.min, delete _.options.scales.x.max), _ && (qi(_), _.update("none"));
      });
    }, Nt = (p, b, _, R, I = !1, X = !1) => {
      if (!p) return;
      const Y = p.data.datasets[b];
      if (!Y) return;
      const me = new Date(_).getTime(), ue = gc(Y.data);
      if (ue && me <= ue) return;
      const _e = Date.now() - g.value * 60 * 60 * 1e3;
      let Te;
      if (I) {
        const xt = parseFloat(R);
        Te = xt > 0 ? xt : null;
      } else X && !Ro(R) ? Te = null : Te = D(R);
      for (Y.data = mc(Y.data, Ds(me, Te)); Y.data.length > yi.MAX_DATA_POINTS; )
        Y.data.shift();
      Y.data = Y.data.filter((xt) => Xt(xt) >= _e), qi(p), p.update("none");
    }, qp = ["id", "name", "region", "arch", "os", "kernel_version", "cpu_info", "cpu_cores", "gpu_info", "expire_date", "server_group", "traffic_limit", "net_rx_monthly", "net_tx_monthly", "boot_time", "timestamp", "ip_v4", "ip_v6"], yc = /* @__PURE__ */ new Set([
      "cpu",
      "ram_total",
      "ram_used",
      "swap_total",
      "swap_used",
      "net_in_speed",
      "net_out_speed",
      "disk"
    ]), Gp = /* @__PURE__ */ new Set(["last_updated", "sample_timestamp"]), Kp = (p, b) => {
      var me;
      const _ = ee.load;
      if (!_) return;
      const R = Vi(b), I = new Date(p).getTime(), X = gc((me = _.data.datasets[0]) == null ? void 0 : me.data);
      if (X && I <= X) return;
      const Y = Date.now() - g.value * 60 * 60 * 1e3;
      for (let ue = 0; ue < 3; ue++) {
        for (_.data.datasets[ue].data = mc(_.data.datasets[ue].data, Ds(I, R[ue])); _.data.datasets[ue].data.length > yi.MAX_DATA_POINTS; )
          _.data.datasets[ue].data.shift();
        _.data.datasets[ue].data = _.data.datasets[ue].data.filter((_e) => Xt(_e) >= Y);
      }
      qi(_), _.update("none");
    }, vc = () => Math.abs(Number(g.value) - Aa) < 1e-3;
    let aa = /* @__PURE__ */ new Set();
    const Gi = () => {
      aa.forEach((p) => clearTimeout(p)), aa.clear();
    }, $p = (p) => !p || typeof p != "object" ? null : p.data || p.payload || p.metrics || null, _c = (p) => {
      var R, I;
      const b = Date.now(), _ = Ai(
        ((R = p == null ? void 0 : p.data) == null ? void 0 : R.last_updated) ?? ((I = p == null ? void 0 : p.data) == null ? void 0 : I.timestamp) ?? (p == null ? void 0 : p.ts),
        b
      );
      return {
        ...p.data,
        sample_timestamp: _,
        last_updated: _,
        timestamp: b
      };
    }, Sc = (p, b) => {
      const _ = setTimeout(() => {
        aa.delete(_), Uo(_c(p), {
          mergeMode: "sample",
          chartMode: "sample"
        });
      }, b);
      aa.add(_);
    }, Jp = (p, b = Date.now()) => !p || String(p.serverId) !== String(d) ? [] : (Array.isArray(p.samples) ? p.samples : []).map((R) => {
      const I = $p(R);
      if (!I) return null;
      const X = Ai(
        R.ts ?? R.timestamp ?? I.sample_timestamp ?? I.last_updated ?? I.timestamp ?? p.ts ?? b,
        null
      );
      return X ? { ts: X, data: I } : null;
    }).filter(Boolean).sort((R, I) => R.ts - I.ts), kc = (p, { messageTs: b = Date.now(), replayCachedReport: _ = !1, includeReportUpdate: R = !0 } = {}) => {
      const I = Jp(p, b);
      if (I.length === 0) return;
      const X = vc();
      if (R) {
        const Qt = I[I.length - 1];
        Uo(_c(Qt), {
          mergeMode: X ? "report" : "all",
          chartMode: "report"
        });
      }
      if (!X) return;
      const Y = Ai(p.reportTs ?? p.report_timestamp, b), me = Number(p.reportAgeMs), ue = Math.max(0, Number.isFinite(me) ? me : Y ? Date.now() - Y : 0), _e = _ ? Nx(I[0].ts, null, { replayCachedReport: !0, reportAgeMs: ue }) : I[0].ts;
      if (_e === null) return;
      let Te = null;
      const xt = [];
      for (const Qt of I)
        Qt.ts <= _e ? Te = Qt : xt.push(Qt);
      Te && Sc(Te, 0);
      for (const Qt of xt) {
        const Pc = Math.max(0, Math.min(Qt.ts - _e, DP));
        Sc(Qt, Pc);
      }
    }, Yp = (p) => {
      Gi();
      const b = Array.isArray(p == null ? void 0 : p.latestReportUpdates) ? p.latestReportUpdates : [];
      for (const _ of b)
        kc(_, {
          messageTs: Date.now(),
          replayCachedReport: !0,
          includeReportUpdate: !1
        });
    }, Xp = (p, b) => {
      Nt(ee.cpu, 0, b, p.cpu);
      const _ = Z(p.ram_used, p.ram_total);
      Nt(ee.ram, 0, b, _);
      const R = Z(p.swap_used, p.swap_total);
      Nt(ee.ram, 1, b, R), Nt(ee.net, 0, b, p.net_in_speed), Nt(ee.net, 1, b, p.net_out_speed);
    }, Tc = (p, b) => {
      if (!ia(p)) return;
      const _ = le(p);
      Q.forEach((R, I) => {
        Nt(ee.diskIo, I, b, _[R]);
      });
    }, Qp = (p, b) => {
      No();
      const _ = y(p.gpu_info);
      for (const I of Io) {
        const X = ee[I];
        if (X)
          for (let Y = 0; Y < X.data.datasets.length; Y++) {
            const ue = X.data.datasets[Y].gpuId, _e = _.find((xt) => String(xt.id) === String(ue)), Te = _e ? L(_e, fc[I]) : null;
            Te == null ? Nt(X, Y, b, null, !1, !0) : Nt(X, Y, b, Te);
          }
      }
      const R = Z(p.disk_used, p.disk_total);
      Nt(ee.disk, 0, b, R), Tc(p, b), Nt(ee.proc, 0, b, p.processes), Nt(ee.conn, 0, b, p.tcp_conn), Nt(ee.conn, 1, b, p.udp_conn);
      for (const I of W) {
        const X = (Y, me, ue) => {
          ce(p, me) && (Xi(p[me]) || Nt(Y, I.datasetIndex, b, p[me], ue, !ue));
        };
        X(ee.ping, I.field, !0), X(ee.loss, I.lossField, !1);
      }
      Kp(b, p.load_avg);
    }, Zp = (p, b) => {
      Number.isFinite(b) && (zi && b - zi < IP || (Qp(p, b), zi = b));
    }, em = (p, b) => qp.includes(p) ? !1 : b === "sample" ? yc.has(p) || Gp.has(p) : b === "report" ? H(p) || !yc.has(p) : !0, Uo = async (p, b = {}) => {
      try {
        const {
          mergeMode: _ = "all",
          chartMode: R = "all"
        } = b;
        let I = p;
        if (!I && (I = n, !I) || !I) return;
        if (p) {
          const X = { ...m.value }, Y = ia(I);
          for (const me of Object.keys(I))
            em(me, _) && (H(me) && !Y || (X[me] = I[me]));
          m.value = X;
        } else
          T.value = I.sysConfig || null, m.value = I, ia(I), M.value = !1;
        if (Eo(), I.last_updated && ea.value && vc()) {
          const X = new Date(I.last_updated).getTime();
          (R === "sample" || R === "all") && Xp(I, X), (R === "report" || R === "all") && Zp(I, X);
        }
        return I.last_updated && (v.value = Mo(I.last_updated)), I;
      } catch (_) {
        return console.error("[ERROR] Update status failed:", _), null;
      }
    }, tm = (p) => {
      if (Gi(), p > 24 && !Vy()) {
        x.value = !0;
        return;
      }
      g.value = p, bc(p);
    }, sm = () => {
      x.value = !1, s.push({
        path: "/admin",
        query: { apiIndex: String(f.value) }
      });
    };
    let Bt = null, oa = !1;
    const Fo = async () => {
      if (sa || ea.value) return;
      if (sa = !0, await xi(), et.value && St.value && kt.value && Yt.value && Ks.value && ut.value && Tt.value && $s.value && Js.value && Kn.value && $n.value && Jn.value && Yn.value && Xn.value)
        try {
          Bp(), ea.value = !0;
        } finally {
          sa = !1;
        }
      else
        sa = !1, setTimeout(Fo, 30);
    }, xc = () => {
      if (Bt)
        if (document.hidden)
          Gi(), Bt.close();
        else {
          if (C.value || oa)
            return;
          Bt.reconnect();
        }
    }, im = () => {
      C.value = !1, oa = !0, Bt == null || Bt.close();
    }, Ac = () => {
      C.value = !1, oa = !1, Bt == null || Bt.reconnect();
    }, nm = (p) => {
      if (!p || p.type !== "batchUpdate") return;
      const _ = (Array.isArray(p.updates) ? p.updates : []).filter((I) => I && String(I.serverId) === String(d));
      if (_.length === 0) return;
      rt.value = !1, Gi();
      const R = Ai(p.ts, Date.now());
      for (const I of _)
        kc(I, { messageTs: R });
    }, am = () => i ? Array.isArray(i.site_configs) && i.site_configs[f.value] ? i.site_configs[f.value] : f.value === 0 ? i : null : null, om = async () => {
      try {
        const p = am();
        P.value = vh(p == null ? void 0 : p.frontend_ws_timeout_minutes);
      } catch (p) {
        console.log("[INFO] Detail theme config pending...", p);
      }
    }, rm = async () => {
      const [p] = await Promise.all([
        Uo(),
        om()
      ]);
      await Fo(), await bc(g.value), Yp(p), !r && (Bt = Gy(String(d), {
        replay: !1,
        timeoutMinutes: P.value,
        onMessage: nm,
        onTimeout: () => {
          C.value = !0;
        },
        onStatus: async ({ connected: b }) => {
          var R;
          if (document.hidden || C.value || oa) return;
          if (!b) {
            rt.value = !0;
            return;
          }
          if (!rt.value) return;
          const _ = await Xa.getByIndex(
            "/api/server?id=" + encodeURIComponent(d),
            f.value,
            { autoRedirect: !1, timeoutMs: ph }
          ).catch(() => null);
          if ([401, 403, 404].includes(_ == null ? void 0 : _.status)) return location.reload();
          String((R = _ == null ? void 0 : _.data) == null ? void 0 : R.id) === String(d) && rt.value && (m.value = _.data, v.value = Mo(_.data.last_updated), rt.value = !1);
        }
      }, f.value), document.addEventListener("visibilitychange", xc));
    };
    return Di([et, St, kt, Yt, Ks, ut, Tt, $s, Js, Kn, $n, Jn, Yn, Xn], () => {
      ea.value || Fo();
    }), Mf(() => {
      rm();
    }), go(() => {
      document.removeEventListener("visibilitychange", xc), Bt && Bt.close(), Gi(), Oo = "", lc();
    }), (p, b) => {
      const _ = mg("router-link");
      return $e(), Qe("div", Lx, [
        S("header", Ux, [
          b[17] || (b[17] = S(
            "div",
            {
              class: "terminal-dots",
              "aria-hidden": "true"
            },
            [
              S("span", { class: "terminal-dot red" }),
              S("span", { class: "terminal-dot yellow" }),
              S("span", { class: "terminal-dot green" })
            ],
            -1
            /* CACHED */
          )),
          S(
            "h1",
            Fx,
            F(m.value.name || te(n).name),
            1
            /* TEXT */
          ),
          S("a", {
            class: "admin-link-header",
            href: te(a),
            "aria-label": te(o),
            title: te(o)
          }, [...b[16] || (b[16] = [
            S(
              "svg",
              {
                viewBox: "0 0 24 24",
                width: "20",
                height: "20",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.8",
                "stroke-linejoin": "round",
                "aria-hidden": "true"
              },
              [
                S("path", { d: "m10 3-.6 2.1-1.6.9-2.1-.5-2 3.5 1.5 1.6v2.8L3.7 15l2 3.5 2.1-.5 1.6.9.6 2.1h4l.6-2.1 1.6-.9 2.1.5 2-3.5-1.5-1.6v-2.8L20.3 9l-2-3.5-2.1.5-1.6-.9L14 3z" }),
                S("circle", {
                  cx: "12",
                  cy: "12",
                  r: "3.1"
                })
              ],
              -1
              /* CACHED */
            )
          ])], 8, Wx)
        ]),
        M.value ? ($e(), Qe("div", Bx, [
          b[18] || (b[18] = S(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* CACHED */
          )),
          S(
            "div",
            Hx,
            "$ " + F(te(w).loading),
            1
            /* TEXT */
          )
        ])) : ($e(), Qe(
          Ut,
          { key: 1 },
          [
            S("div", jx, [
              Is(S(
                "div",
                zx,
                [
                  ($e(!0), Qe(
                    Ut,
                    null,
                    Go(Fe.value, (R) => ($e(), Qe("button", {
                      key: R.hours,
                      class: Ke(["time-btn", { active: g.value === R.hours }]),
                      "aria-pressed": g.value === R.hours,
                      onClick: (I) => tm(R.hours)
                    }, F(R.label), 11, Vx))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                512
                /* NEED_PATCH */
              ), [
                [Es, Qn.value]
              ]),
              Ce(_, {
                to: "/",
                class: "back-btn"
              }, {
                default: Tf(() => [
                  Pe(
                    F(te(w).back),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            rt.value ? ($e(), Qe("div", qx, [
              S(
                "span",
                Gx,
                F(te(Xe)("连接中断，显示上次同步的数据。")),
                1
                /* TEXT */
              ),
              S(
                "button",
                {
                  type: "button",
                  onClick: Ac
                },
                F(te(Xe)("重新连接")),
                1
                /* TEXT */
              )
            ])) : zt("v-if", !0),
            S("div", Kx, [
              S("div", $x, [
                S("div", Jx, [
                  b[20] || (b[20] = S(
                    "span",
                    { class: "prompt" },
                    "root@",
                    -1
                    /* CACHED */
                  )),
                  m.value.region && m.value.region !== "xx" ? ($e(), Qe("span", Yx, [
                    S("img", {
                      src: te(hh)("flags/" + te(Ky)(m.value.region) + ".svg"),
                      alt: m.value.region,
                      class: "flag-img"
                    }, null, 8, Xx),
                    Ce(vu, {
                      os: m.value.os
                    }, null, 8, ["os"])
                  ])) : ($e(), Qe("span", Qx, [
                    b[19] || (b[19] = S(
                      "span",
                      { class: "flag-fallback" },
                      "🏳️",
                      -1
                      /* CACHED */
                    )),
                    Ce(vu, {
                      os: m.value.os
                    }, null, 8, ["os"])
                  ])),
                  S(
                    "span",
                    null,
                    F(m.value.name || "Loading..."),
                    1
                    /* TEXT */
                  ),
                  b[21] || (b[21] = S(
                    "span",
                    { style: { color: "var(--text-muted)" } },
                    ":~#",
                    -1
                    /* CACHED */
                  ))
                ]),
                S(
                  "span",
                  {
                    class: Ke(["status-badge", { online: He.value, offline: !He.value }])
                  },
                  [
                    S(
                      "span",
                      {
                        class: Ke(["pulse-dot", { online: He.value, offline: !He.value }])
                      },
                      null,
                      2
                      /* CLASS */
                    ),
                    S(
                      "span",
                      null,
                      F(He.value ? te(w).online : te(w).offline),
                      1
                      /* TEXT */
                    )
                  ],
                  2
                  /* CLASS */
                )
              ]),
              S("div", Zx, [
                S("div", e0, [
                  S(
                    "span",
                    t0,
                    "⏱ " + F(te(w).uptime),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    s0,
                    F(Np(m.value.boot_time)),
                    1
                    /* TEXT */
                  )
                ]),
                l("show_expire") && m.value.expire_date ? ($e(), Qe("div", i0, [
                  S(
                    "span",
                    n0,
                    "📅 " + F(te(w).expire),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    {
                      class: Ke(["sysinfo-value", { expired: Me.value }])
                    },
                    F(Ze.value),
                    3
                    /* TEXT, CLASS */
                  )
                ])) : zt("v-if", !0),
                S("div", a0, [
                  S(
                    "span",
                    o0,
                    "💻 " + F(te(w).os) + " / " + F(te(w).architecture),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    r0,
                    F(m.value.os || "—") + " / " + F(m.value.arch || "—"),
                    1
                    /* TEXT */
                  )
                ]),
                m.value.kernel_version ? ($e(), Qe("div", l0, [
                  S(
                    "span",
                    c0,
                    "🧩 " + F(te(w).kernelVersion || "Kernel"),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    u0,
                    F(m.value.kernel_version),
                    1
                    /* TEXT */
                  )
                ])) : zt("v-if", !0),
                S("div", d0, [
                  S(
                    "span",
                    f0,
                    "🔧 " + F(te(w).cpuInfo),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    h0,
                    F(m.value.cpu_info || "—") + " x " + F(m.value.cpu_cores || "—"),
                    1
                    /* TEXT */
                  )
                ]),
                ve.value ? ($e(), Qe("div", p0, [
                  S(
                    "span",
                    m0,
                    "🎮 " + F(te(w).gpuInfo || "GPU Info"),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    g0,
                    F(A.value),
                    1
                    /* TEXT */
                  )
                ])) : zt("v-if", !0),
                S("div", b0, [
                  S(
                    "span",
                    y0,
                    "💾 " + F(te(w).totalDiskRam),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    v0,
                    F(B(m.value.disk_total, 1024 ** 2)) + " / " + F(B(m.value.ram_total, 1024 ** 2)),
                    1
                    /* TEXT */
                  )
                ]),
                S("div", _0, [
                  S(
                    "span",
                    S0,
                    "📊 " + F(te(w).loadAvg),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    k0,
                    F(m.value.load_avg || "—"),
                    1
                    /* TEXT */
                  )
                ]),
                S("div", T0, [
                  S(
                    "span",
                    x0,
                    "🌐 " + F(te(w).totalTraffic),
                    1
                    /* TEXT */
                  ),
                  S("span", A0, [
                    S(
                      "span",
                      P0,
                      "↓ " + F(B(m.value.net_rx)),
                      1
                      /* TEXT */
                    ),
                    b[22] || (b[22] = Pe(
                      " / ",
                      -1
                      /* CACHED */
                    )),
                    S(
                      "span",
                      C0,
                      "↑ " + F(B(m.value.net_tx)),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                S("div", w0, [
                  S(
                    "span",
                    R0,
                    "⚡ " + F(te(w).realtimeSpeed),
                    1
                    /* TEXT */
                  ),
                  S("span", M0, [
                    S(
                      "span",
                      D0,
                      "↓ " + F(B(m.value.net_in_speed, 1, "/s")),
                      1
                      /* TEXT */
                    ),
                    b[23] || (b[23] = Pe(
                      " / ",
                      -1
                      /* CACHED */
                    )),
                    S(
                      "span",
                      I0,
                      "↑ " + F(B(m.value.net_out_speed, 1, "/s")),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                m.value.net_rx_monthly != null || m.value.net_tx_monthly != null ? ($e(), Qe("div", E0, [
                  S(
                    "span",
                    O0,
                    "📊 " + F(te(w).monthlyTraffic),
                    1
                    /* TEXT */
                  ),
                  S("span", N0, [
                    S(
                      "span",
                      L0,
                      "↓ " + F(B(m.value.net_rx_monthly)),
                      1
                      /* TEXT */
                    ),
                    b[24] || (b[24] = Pe(
                      " / ",
                      -1
                      /* CACHED */
                    )),
                    S(
                      "span",
                      U0,
                      "↑ " + F(B(m.value.net_tx_monthly)),
                      1
                      /* TEXT */
                    )
                  ])
                ])) : zt("v-if", !0),
                l("show_tf") && (m.value.net_rx_monthly != null || m.value.net_tx_monthly != null) ? ($e(), Qe("div", F0, [
                  S(
                    "span",
                    W0,
                    "📦 " + F(te(w).monthlyTrafficLimit),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    B0,
                    F(B(Ep.value)) + " / " + F(D(m.value.traffic_limit) === 0 ? "∞" : B(m.value.traffic_limit, 1024 ** 3)),
                    1
                    /* TEXT */
                  )
                ])) : zt("v-if", !0),
                S("div", H0, [
                  S(
                    "span",
                    j0,
                    "🕐 " + F(te(w).bootTime),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    z0,
                    F(Mo(m.value.boot_time)),
                    1
                    /* TEXT */
                  )
                ]),
                S("div", V0, [
                  S(
                    "span",
                    q0,
                    "⏰ " + F(te(w).lastUpdate),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    G0,
                    F(v.value),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ]),
            c.value ? ($e(), Qe(
              "p",
              K0,
              F(c.value),
              1
              /* TEXT */
            )) : zt("v-if", !0),
            S("div", $0, [
              S(
                "div",
                {
                  class: Ke(["chart-card", { "full-width": Ne("cpu") }])
                },
                [
                  S("div", J0, [
                    S("span", Y0, [
                      b[25] || (b[25] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Pe(
                        " " + F(te(w).cpuUsage),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", X0, [
                      S(
                        "span",
                        Q0,
                        F(ye.value),
                        1
                        /* TEXT */
                      ),
                      Ce(O, {
                        expanded: Ne("cpu"),
                        onToggle: b[0] || (b[0] = (R) => Rt("cpu"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", Z0, [
                    S(
                      "canvas",
                      {
                        ref_key: "cpuChartRef",
                        ref: et
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    )
                  ])
                ],
                2
                /* CLASS */
              ),
              S(
                "div",
                {
                  class: Ke(["chart-card", { "full-width": Ne("ram") }])
                },
                [
                  S("div", eA, [
                    S("span", tA, [
                      b[26] || (b[26] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Pe(
                        " " + F(te(w).memoryUsage),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", sA, [
                      S("div", iA, [
                        S(
                          "span",
                          nA,
                          F($.value),
                          1
                          /* TEXT */
                        ),
                        S(
                          "div",
                          aA,
                          F(te(w).swap) + ": " + F(D(m.value.swap_used) ?? "—") + " / " + F(D(m.value.swap_total) ?? "—") + " MiB",
                          1
                          /* TEXT */
                        )
                      ]),
                      Ce(O, {
                        expanded: Ne("ram"),
                        onToggle: b[1] || (b[1] = (R) => Rt("ram"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", oA, [
                    S(
                      "canvas",
                      {
                        ref_key: "ramChartRef",
                        ref: ut
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    )
                  ])
                ],
                2
                /* CLASS */
              ),
              S(
                "div",
                {
                  class: Ke(["chart-card", { "full-width": Ne("net") }])
                },
                [
                  S("div", rA, [
                    S("span", lA, [
                      b[27] || (b[27] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Pe(
                        " " + F(te(w).networkTraffic),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", cA, [
                      S("div", uA, [
                        S(
                          "span",
                          dA,
                          "▼ " + F(B(m.value.net_in_speed, 1, "/s")),
                          1
                          /* TEXT */
                        ),
                        S(
                          "span",
                          fA,
                          "▲ " + F(B(m.value.net_out_speed, 1, "/s")),
                          1
                          /* TEXT */
                        )
                      ]),
                      Ce(O, {
                        expanded: Ne("net"),
                        onToggle: b[2] || (b[2] = (R) => Rt("net"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", hA, [
                    S(
                      "canvas",
                      {
                        ref_key: "netChartRef",
                        ref: Js
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    )
                  ])
                ],
                2
                /* CLASS */
              ),
              S(
                "div",
                {
                  class: Ke(["chart-card", { "full-width": Ne("load") }])
                },
                [
                  S("div", pA, [
                    S("span", mA, [
                      b[28] || (b[28] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Pe(
                        " " + F(te(w).loadAvgMonitor),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", gA, [
                      S("div", bA, [
                        S("span", yA, [
                          Pe(
                            F(te(w).load1m) + " ",
                            1
                            /* TEXT */
                          ),
                          S(
                            "b",
                            null,
                            F(K(Vi(m.value.load_avg)[0], 2)),
                            1
                            /* TEXT */
                          )
                        ]),
                        S("span", vA, [
                          Pe(
                            F(te(w).load5m) + " ",
                            1
                            /* TEXT */
                          ),
                          S(
                            "b",
                            null,
                            F(K(Vi(m.value.load_avg)[1], 2)),
                            1
                            /* TEXT */
                          )
                        ]),
                        S("span", _A, [
                          Pe(
                            F(te(w).load15m) + " ",
                            1
                            /* TEXT */
                          ),
                          S(
                            "b",
                            null,
                            F(K(Vi(m.value.load_avg)[2], 2)),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      Ce(O, {
                        expanded: Ne("load"),
                        onToggle: b[3] || (b[3] = (R) => Rt("load"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", SA, [
                    S(
                      "canvas",
                      {
                        ref_key: "loadChartRef",
                        ref: Xn
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    )
                  ])
                ],
                2
                /* CLASS */
              ),
              S(
                "div",
                {
                  class: Ke(["chart-card", { "full-width": Ne("disk") }])
                },
                [
                  S("div", kA, [
                    S("span", TA, [
                      b[29] || (b[29] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Pe(
                        " " + F(te(w).diskUsage),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", xA, [
                      S("div", AA, [
                        S(
                          "span",
                          PA,
                          F(se.value),
                          1
                          /* TEXT */
                        ),
                        S(
                          "div",
                          CA,
                          F(te(w).used) + " " + F(B(m.value.disk_used, 1024 ** 2)) + " / " + F(B(m.value.disk_total, 1024 ** 2)),
                          1
                          /* TEXT */
                        )
                      ]),
                      Ce(O, {
                        expanded: Ne("disk"),
                        onToggle: b[4] || (b[4] = (R) => Rt("disk"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", wA, [
                    S(
                      "canvas",
                      {
                        ref_key: "diskChartRef",
                        ref: Tt
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    )
                  ])
                ],
                2
                /* CLASS */
              ),
              Is(S(
                "div",
                {
                  class: Ke(["chart-card", { "full-width": Ne("diskIo") }])
                },
                [
                  S("div", RA, [
                    S("span", MA, [
                      b[30] || (b[30] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Pe(
                        " " + F(te(w).diskIo || "Disk IO"),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", DA, [
                      S("div", IA, [
                        S("span", EA, [
                          b[31] || (b[31] = Pe(
                            "R ",
                            -1
                            /* CACHED */
                          )),
                          S(
                            "b",
                            null,
                            F(B(ne.value.read_bps, 1, "/s")),
                            1
                            /* TEXT */
                          )
                        ]),
                        S("span", OA, [
                          b[32] || (b[32] = Pe(
                            "W ",
                            -1
                            /* CACHED */
                          )),
                          S(
                            "b",
                            null,
                            F(B(ne.value.write_bps, 1, "/s")),
                            1
                            /* TEXT */
                          )
                        ]),
                        S("span", NA, [
                          b[33] || (b[33] = Pe(
                            "IOPS ",
                            -1
                            /* CACHED */
                          )),
                          S(
                            "b",
                            null,
                            F(ke(ne.value.read_iops)) + "/" + F(ke(ne.value.write_iops)),
                            1
                            /* TEXT */
                          )
                        ]),
                        S("span", LA, [
                          b[34] || (b[34] = Pe(
                            "await ",
                            -1
                            /* CACHED */
                          )),
                          S(
                            "b",
                            null,
                            F(ke(ne.value.await_ms, "ms")),
                            1
                            /* TEXT */
                          )
                        ]),
                        S("span", null, [
                          b[35] || (b[35] = Pe(
                            "util ",
                            -1
                            /* CACHED */
                          )),
                          S(
                            "b",
                            null,
                            F(ke(ne.value.util, "%")),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      Ce(O, {
                        expanded: Ne("diskIo"),
                        onToggle: b[5] || (b[5] = (R) => Rt("diskIo"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", UA, [
                    S(
                      "canvas",
                      {
                        ref_key: "diskIoChartRef",
                        ref: $s
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    )
                  ])
                ],
                2
                /* CLASS */
              ), [
                [Es, Zn.value]
              ]),
              Is(S(
                "div",
                {
                  class: Ke(["chart-card", { "full-width": Ne("gpu") }])
                },
                [
                  S("div", FA, [
                    S("span", WA, [
                      b[36] || (b[36] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Pe(
                        " " + F(te(w).gpuUsage || "GPU Usage"),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", BA, [
                      S(
                        "span",
                        HA,
                        F(N.value),
                        1
                        /* TEXT */
                      ),
                      Ce(O, {
                        expanded: Ne("gpu"),
                        onToggle: b[6] || (b[6] = (R) => Rt("gpu"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", jA, [
                    S(
                      "canvas",
                      {
                        ref_key: "gpuChartRef",
                        ref: St
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    )
                  ])
                ],
                2
                /* CLASS */
              ), [
                [Es, ve.value]
              ]),
              Is(S(
                "div",
                {
                  class: Ke(["chart-card", { "full-width": Ne("gpuMem") }])
                },
                [
                  S("div", zA, [
                    S("span", VA, [
                      b[37] || (b[37] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Pe(
                        " " + F(te(w).gpuMemory || "GPU Memory"),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", qA, [
                      S(
                        "span",
                        GA,
                        F(j.value),
                        1
                        /* TEXT */
                      ),
                      Ce(O, {
                        expanded: Ne("gpuMem"),
                        onToggle: b[7] || (b[7] = (R) => Rt("gpuMem"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", KA, [
                    S(
                      "canvas",
                      {
                        ref_key: "gpuMemChartRef",
                        ref: kt
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    )
                  ])
                ],
                2
                /* CLASS */
              ), [
                [Es, E.value]
              ]),
              Is(S(
                "div",
                {
                  class: Ke(["chart-card", { "full-width": Ne("gpuClock") }])
                },
                [
                  S("div", $A, [
                    S("span", JA, [
                      b[38] || (b[38] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Pe(
                        " " + F(te(w).gpuClock || "GPU SM Clock"),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", YA, [
                      S(
                        "span",
                        XA,
                        F(U.value),
                        1
                        /* TEXT */
                      ),
                      Ce(O, {
                        expanded: Ne("gpuClock"),
                        onToggle: b[8] || (b[8] = (R) => Rt("gpuClock"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", QA, [
                    S(
                      "canvas",
                      {
                        ref_key: "gpuClockChartRef",
                        ref: Yt
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    )
                  ])
                ],
                2
                /* CLASS */
              ), [
                [Es, G.value]
              ]),
              Is(S(
                "div",
                {
                  class: Ke(["chart-card", { "full-width": Ne("gpuPower") }])
                },
                [
                  S("div", ZA, [
                    S("span", eP, [
                      b[39] || (b[39] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Pe(
                        " " + F(te(w).gpuPower || "GPU Power"),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", tP, [
                      S(
                        "span",
                        sP,
                        F(ae.value),
                        1
                        /* TEXT */
                      ),
                      Ce(O, {
                        expanded: Ne("gpuPower"),
                        onToggle: b[9] || (b[9] = (R) => Rt("gpuPower"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", iP, [
                    S(
                      "canvas",
                      {
                        ref_key: "gpuPowerChartRef",
                        ref: Ks
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    )
                  ])
                ],
                2
                /* CLASS */
              ), [
                [Es, z.value]
              ]),
              S(
                "div",
                {
                  class: Ke(["chart-card", { "full-width": Ne("proc") }])
                },
                [
                  S("div", nP, [
                    S("span", aP, [
                      b[40] || (b[40] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Pe(
                        " " + F(te(w).processes),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", oP, [
                      S(
                        "span",
                        rP,
                        F(D(m.value.processes) ?? "—"),
                        1
                        /* TEXT */
                      ),
                      Ce(O, {
                        expanded: Ne("proc"),
                        onToggle: b[10] || (b[10] = (R) => Rt("proc"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", lP, [
                    S(
                      "canvas",
                      {
                        ref_key: "procChartRef",
                        ref: Kn
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    )
                  ])
                ],
                2
                /* CLASS */
              ),
              S(
                "div",
                {
                  class: Ke(["chart-card", { "full-width": Ne("conn") }])
                },
                [
                  S("div", cP, [
                    S("span", uP, [
                      b[41] || (b[41] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Pe(
                        " " + F(te(w).connections),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", dP, [
                      S("div", fP, [
                        S("span", hP, [
                          b[42] || (b[42] = Pe(
                            "TCP ",
                            -1
                            /* CACHED */
                          )),
                          S(
                            "b",
                            null,
                            F(D(m.value.tcp_conn) ?? "—"),
                            1
                            /* TEXT */
                          )
                        ]),
                        S("span", pP, [
                          b[43] || (b[43] = Pe(
                            "UDP ",
                            -1
                            /* CACHED */
                          )),
                          S(
                            "b",
                            null,
                            F(D(m.value.udp_conn) ?? "—"),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      Ce(O, {
                        expanded: Ne("conn"),
                        onToggle: b[11] || (b[11] = (R) => Rt("conn"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", mP, [
                    S(
                      "canvas",
                      {
                        ref_key: "connChartRef",
                        ref: $n
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    )
                  ])
                ],
                2
                /* CLASS */
              ),
              Is(S(
                "div",
                {
                  class: Ke(["chart-card", { "full-width": Ne("ping") }])
                },
                [
                  S("div", gP, [
                    S("span", bP, [
                      b[44] || (b[44] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Pe(
                        " " + F(te(w).latencyMonitor),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", yP, [
                      S("div", vP, [
                        ($e(!0), Qe(
                          Ut,
                          null,
                          Go(Dp.value, (R) => ($e(), Qe(
                            "span",
                            {
                              key: R.field,
                              class: Ke(R.className)
                            },
                            [
                              Pe(
                                F(R.label) + " ",
                                1
                                /* TEXT */
                              ),
                              S(
                                "b",
                                null,
                                F(R.value !== null ? R.value + "ms" : "Timeout"),
                                1
                                /* TEXT */
                              )
                            ],
                            2
                            /* CLASS */
                          ))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      Ce(O, {
                        expanded: Ne("ping"),
                        onToggle: b[12] || (b[12] = (R) => Rt("ping"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", _P, [
                    S(
                      "canvas",
                      {
                        ref_key: "pingChartRef",
                        ref: Jn
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    )
                  ])
                ],
                2
                /* CLASS */
              ), [
                [Es, Mp.value]
              ]),
              Is(S(
                "div",
                {
                  class: Ke(["chart-card", { "full-width": Ne("loss") }])
                },
                [
                  S("div", SP, [
                    S("span", kP, [
                      b[45] || (b[45] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Pe(
                        " " + F(te(w).packetLoss || "Packet Loss"),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", TP, [
                      S("div", xP, [
                        ($e(!0), Qe(
                          Ut,
                          null,
                          Go(Ip.value, (R) => ($e(), Qe(
                            "span",
                            {
                              key: R.field,
                              class: Ke(R.className)
                            },
                            [
                              Pe(
                                F(R.label) + " ",
                                1
                                /* TEXT */
                              ),
                              S(
                                "b",
                                null,
                                F(R.value) + "%",
                                1
                                /* TEXT */
                              )
                            ],
                            2
                            /* CLASS */
                          ))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      Ce(O, {
                        expanded: Ne("loss"),
                        onToggle: b[13] || (b[13] = (R) => Rt("loss"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", AP, [
                    S(
                      "canvas",
                      {
                        ref_key: "lossChartRef",
                        ref: Yn
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    )
                  ])
                ],
                2
                /* CLASS */
              ), [
                [Es, Op.value]
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        )),
        Ce(dv),
        S(
          "div",
          {
            id: "loginRequiredModal",
            class: Ke(["modal-overlay", { active: x.value }])
          },
          [
            S("div", PP, [
              S("div", CP, [
                b[46] || (b[46] = S(
                  "div",
                  { class: "modal-title" },
                  "$ sudo login",
                  -1
                  /* CACHED */
                )),
                S("button", {
                  class: "modal-close",
                  onClick: b[14] || (b[14] = (R) => x.value = !1)
                }, "✕")
              ]),
              S("div", wP, [
                S(
                  "p",
                  RP,
                  F(te(w).loginRequired),
                  1
                  /* TEXT */
                )
              ]),
              S("div", MP, [
                S(
                  "button",
                  {
                    onClick: sm,
                    class: "btn btn-primary"
                  },
                  F(te(w).login),
                  1
                  /* TEXT */
                ),
                S(
                  "button",
                  {
                    onClick: b[15] || (b[15] = (R) => x.value = !1),
                    class: "btn"
                  },
                  F(te(w).cancel),
                  1
                  /* TEXT */
                )
              ])
            ])
          ],
          2
          /* CLASS */
        ),
        Ce(Sv, {
          show: C.value,
          trans: te(w),
          onClose: im,
          onContinue: Ac
        }, null, 8, ["show", "trans"])
      ]);
    };
  }
}, ji = new URL(location.href), Hl = document.documentElement.dataset.cfsmMode === "live", cs = new URL(Hl ? "../../" : "./index.html", ji);
cs.search = ji.search;
Hl && cs.searchParams.delete("stardew_v");
Ex(cs);
const Sr = ji.hash.slice(1), Ap = () => {
  const t = JSON.parse(sessionStorage.getItem("farm-detail-origin") || "null");
  (t == null ? void 0 : t.hash) === ji.hash && t.page === cs.pathname + cs.search && history.length > 1 ? history.back() : location.replace(cs.href + "#/");
};
function il(t) {
  const e = document.createElement("div");
  e.className = "container detail-message";
  const s = document.createElement("a");
  s.className = "back-btn", s.href = cs.href + "#/", s.textContent = window.farmText("返回"), s.onclick = (n) => {
    n.preventDefault(), Ap();
  };
  const i = document.createElement("p");
  return i.setAttribute("role", "status"), i.textContent = window.farmText(t), e.append(s, i), document.querySelector("#app").replaceChildren(e), e;
}
async function EP(t) {
  var a;
  if (Hl) return null;
  const e = document.createElement("script");
  e.src = new URL("cfsm-adapter.js", ji).href, await new Promise((o, r) => {
    e.onload = o, e.onerror = r, document.head.append(e);
  });
  const s = window.cfsmAdapter, i = s.getNodes().find((o) => o.id === t && o.demo);
  if (!i) return null;
  const n = s.getMockServerDetail(t, i);
  return {
    server: {
      id: t,
      name: t,
      region: n.location.regionCode,
      os: n.os,
      arch: n.arch,
      cpu: i.cpu,
      cpu_info: n.cpuModel,
      cpu_cores: n.cores,
      kernel_version: n.kernel,
      is_online: i.online,
      ram_used: n.ramUsedMB,
      ram_total: n.ramTotalMB,
      swap_used: n.swapUsedMB,
      swap_total: n.swapTotalMB,
      disk_used: n.diskUsedMB,
      disk_total: n.diskTotalMB,
      tcp_conn: n.tcpConn,
      udp_conn: n.udpConn,
      processes: n.processes,
      load_avg: (a = i.load) == null ? void 0 : a.join(" "),
      expire_date: n.expireDate,
      last_updated: i.online ? Date.now() : null
    },
    history: (o) => n.history.filter((r) => r.ts >= Date.now() - o * 36e5).map((r) => ({ timestamp: new Date(r.ts).toISOString(), cpu: r.cpu }))
  };
}
let Ci = !1, Pa, Ca;
function wo() {
  return Pa || (Pa = OP().catch(() => il("节点不存在或暂时无法读取")).finally(() => {
    Pa = null;
  })), Pa;
}
async function OP() {
  var c;
  if (!/^\/server\/[^/?#]+(?:\?.*)?$/.test(Sr)) return location.replace(cs.href);
  history.replaceState(null, "", cs.pathname + cs.search + ji.hash);
  const t = decodeURIComponent(Sr.slice(8).split("?")[0]);
  await Fy();
  const e = { autoRedirect: !1, timeoutMs: ph };
  il("正在读取节点数据");
  const [s, i] = await Promise.all([
    Xa.getByIndex("/api/server?id=" + encodeURIComponent(t), 0, e),
    Ca ? { data: Ca } : Xa.getByIndex("/api/config", 0, e).catch(() => ({})),
    ov(window.farmLocale === "zh-CN" ? "zh" : window.farmLocale)
  ]);
  Ca = i.data;
  const n = !((c = s.data) != null && c.id) && ![401, 403].includes(s.status) ? await EP(t) : null, a = (n == null ? void 0 : n.server) || s.data;
  if (!a || String(a.id) !== t) {
    Ci = [401, 403].includes(s.status);
    const u = il(Ci ? "节点详情需要登录或访问验证" : "节点不存在或暂时无法读取");
    if (Ci) {
      const d = document.createElement("div");
      d.className = "monitor-access", u.append(d);
      const f = It()[0] || location.origin, h = i.data || await fetch(f + "/api/config", { cache: "no-store", signal: AbortSignal.timeout(15e3) }).then((m) => m.ok ? m.json() : null).catch(() => null);
      window.showMonitorAccess(d, "auth", h, f, wo);
    }
    return;
  }
  Ci = !1;
  const o = Ca || {};
  Wr.value = o.version || "", yh.value = o.last_workers_version || "", document.title = a.name + " · " + (o.site_title || document.title);
  const r = Ny({ history: hy(), routes: [
    { path: "/server/:id", component: Vd },
    { path: "/", component: {}, beforeEnter() {
      return Ap(), !1;
    } },
    { path: "/admin", component: {}, beforeEnter() {
      return location.assign("/admin#/admin"), !1;
    } }
  ] });
  await r.push(Sr);
  const l = Rb(Vd);
  l.use(r), l.provide("initialServer", a), l.provide("appConfig", o), l.provide("demoHistory", (n == null ? void 0 : n.history) || null), l.mount("#app");
}
window.addEventListener("hashchange", () => location.reload());
window.addEventListener("storage", (t) => {
  Ci && ["jwt_token", "turnstile_verified"].includes(t.key) && t.newValue && wo();
});
document.addEventListener("visibilitychange", () => {
  Ci && !document.hidden && wo();
});
wo();
const NP = {
  passkeyRateLimited: "尝试次数过多，请稍后再试。",
  passkeyBrowserPrompt: "等待浏览器交互，请在弹窗中完成验证…",
  passkeyPreparing: "正在准备 Passkey…",
  passkeyVerifying: "正在验证 Passkey…",
  passkeyPasswordInvalid: "管理员密码不正确。",
  passkeyOptionsFailed: "无法开始注册，请检查网络和登录状态。",
  passkeyVerifyFailed: "浏览器已返回凭证，但服务器验证失败，请重试。",
  passkeyAlreadyRegistered: "此安全密钥已绑定当前站点。",
  passkeyUserVerificationRequired: "安全密钥需支持用户验证，请先设置 FIDO2 PIN 后重试。",
  passkeyDeviceFailed: "验证未完成：可能已取消、超时或密钥不符合要求。请检查连接、PIN 并重试。",
  passkeyLogin: "使用 Passkey 登录",
  passkeyTitle: "Passkey 通行密钥",
  passkeyDescription: "支持安全密钥、iCloud 钥匙串和 Windows Hello。建议添加备用密钥，以免无法登录。",
  passkeySameOrigin: "请使用支持 Passkey 的浏览器，通过此 Worker 自身的 HTTPS 域名访问。",
  passkeyEmpty: "尚未添加通行密钥。",
  passkeyName: "名称",
  passkeyNamePlaceholder: "例如：YubiKey 或 iPhone",
  passkeyPassword: "当前管理员密码",
  passkeyPasswordHint: "添加或删除通行密钥前，请输入当前管理员密码。",
  passkeyPasswordRequired: "请先输入当前管理员密码。",
  passkeyAdd: "添加 Passkey",
  passkeyDelete: "删除",
  passkeyDeleteConfirm: "确定删除此通行密钥？",
  passkeyAdded: "通行密钥已添加。",
  passkeyDeleted: "通行密钥已删除。",
  passkeyFailed: "操作失败或已取消，请检查密码后重试。",
  collectInterval: "采集间隔（秒）",
  theme: "主题",
  themeAuto: "跟随系统",
  themeDark: "深色",
  themeLight: "浅色",
  language: "语言",
  languageAuto: "自动",
  barChart: "条形图",
  ringChart: "环形图",
  expandChart: "放大图表",
  collapseChart: "收起图表",
  table: "列表",
  map: "地图",
  admin: "管理",
  all: "全部",
  totalServers: "服务器总数",
  totalTraffic: "总流量",
  realtimeSpeed: "实时速度",
  remainingValue: "剩余价值",
  totalValue: "总价值",
  monthlyAverageCost: "月均支出",
  configuredPrices: "已计价",
  todayExchangeRates: "今日汇率",
  exchangeRateBase: "基准",
  exchangeRateSource: "汇率来源",
  financeMissingExpire: "无到期日",
  financeRateNetwork: "实时 API",
  financeRateCache: "今日缓存",
  financeRateStaleCache: "缓存回退",
  financeRateDefault: "内置回退",
  realtime: "实时",
  liveConnectionTimeoutTitle: "实时连接已超时",
  liveConnectionTimeoutMessage: "实时连接已达到时限并断开，是否继续接收实时更新？",
  continueConnection: "继续",
  online: "在线",
  offline: "离线",
  noServer: "暂无服务器，请在",
  noServerSuffix: " 中添加",
  backToAdmin: "后台管理",
  back: "返回",
  hostname: "主机名",
  region: "地区代码",
  regionPlaceholder: "留空自动获取",
  osArch: "系统/架构",
  ram: "内存",
  disk: "磁盘",
  use: "用量",
  dl: "下载",
  ul: "上传",
  rx: "入站",
  tx: "出站",
  update: "更新",
  noData: "暂无数据",
  ago: "前",
  uptime: "运行时间",
  architecture: "架构",
  os: "操作系统",
  kernelVersion: "内核版本",
  cpuModel: "CPU 型号",
  cpuInfo: "CPU 信息",
  loadAvg: "负载均值",
  bootTime: "启动时间",
  totalDiskRam: "总磁盘 / 内存",
  trafficIn: "入站流量",
  trafficOut: "出站流量",
  traffic: "流量",
  lastReport: "最后报告",
  cpuUsage: "CPU 使用率",
  gpuInfo: "GPU 信息",
  gpuUsage: "GPU 使用率",
  gpuMemory: "GPU 显存",
  gpuClock: "GPU SM 频率",
  gpuPower: "GPU 功率",
  memoryUsage: "内存使用率",
  diskUsage: "磁盘使用率",
  diskIo: "磁盘 IO",
  networkTraffic: "网络",
  processes: "进程",
  connections: "连接数",
  latencyMonitor: "延迟",
  packetLoss: "丢包率",
  databaseUpgradeRequired: "请进入后台点击升级数据库",
  swap: "交换分区",
  used: "已用",
  lastUpdate: "最后更新",
  workersUpdateAvailable: "新版",
  autoRefresh: "自动刷新",
  seconds: "秒",
  timeout: "超时",
  loadAvgMonitor: "负载监控",
  load1m: "1分钟",
  load5m: "5分钟",
  load15m: "15分钟",
  apiEndpoint: "站点",
  switchingSite: "正在切换站点...",
  username: "用户名",
  password: "密码",
  login: "登录",
  missingCredentials: "请输入用户名和密码",
  invalidCredentials: "用户名或密码错误",
  adminPanel: "管理面板",
  sudoStatus: "系统状态",
  refresh: "刷新",
  logout: "退出",
  dashboard: "仪表盘",
  total: "总数",
  avgCpu: "平均 CPU",
  servers: "服务器",
  settings: "设置",
  clickToCopy: "点击",
  installCommand: "复制安装命令，在目标服务器上执行即可完成探针部署",
  collectIntervalHint: "采集间隔为0时按上报间隔采样",
  serverName: "服务器名称",
  group: "分组",
  tags: "标签",
  note: "备注",
  tagsPlaceholder: "英文逗号隔开",
  notePlaceholder: "内部备注，仅在管理端显示",
  addServer: "添加服务器",
  batchDelete: "批量删除",
  toggleAll: "全选/取消",
  refreshCache: "刷新缓存",
  cacheCleared: "服务器列表缓存已清除",
  price: "价格",
  free: "免费",
  currency: "货币",
  billingCycle: "计费周期",
  autoRenewal: "自动续费",
  expire: "剩余时间",
  expireDays: "天",
  day: "天",
  days: "天",
  month: "月",
  expired: "已到期",
  agentVersion: "探针版本",
  status: "状态",
  actions: "操作",
  noServers: "暂无服务器配置",
  dragSort: "拖拽排序",
  copy: "复制",
  edit: "编辑",
  delete: "删除",
  custom: "自定义",
  siteTitle: "站点标题",
  appearance: "外观",
  bgImage: "背景图片",
  mobileBgImage: "手机背景图片",
  remoteImageTip: "使用远程图片时，需要将图片域名添加到 CSP 静态文件域名白名单。",
  favicon: "网站图标",
  upload: "上传",
  customHead: "自定义 <head>",
  customScript: "自定义脚本 (页脚)",
  themeOptions: "主题自定义配置 JSON",
  mikusThemeToggle: "开启 Mikus 模式",
  themeOptionsTip: '第三方主题自定义配置，必须是 JSON object，例如 {"mikus":1} 可开启 Mikus 前端主题层。',
  cspStatic: "CSP 静态文件域名白名单",
  cspStaticTip: "允许的静态文件域名，多个用英文逗号隔开，如 https://unpkg.com,https://cdn.jsdelivr.net",
  cspApi: "CSP API 域名白名单",
  cspApiTip: "允许的 API 域名，多个用英文逗号隔开，如 https://api.example.com",
  cspWarning: "添加第三方 CSS/JS 时，请确保来源安全可靠。使用前建议将js源码发给AI完整分析安全后，确认无问题后再托管在自己 GitHub 仓库中，通过 CDN 调用。使用不当可能带来严重安全风险。外部资源需要添加到上方的 CSP 静态文件域名白名单中。",
  cspInvalidDomain: "CSP 域名格式无效，请填写 https:// origin，不要包含路径或查询参数",
  displayMode: "默认展示方式",
  displayModeBar: "条形图",
  displayModeRing: "环形图",
  displayModeTable: "列表",
  defaultTheme: "默认外观",
  defaultLanguage: "默认语言",
  displayOptions: "显示选项",
  autoDiscovery: "自动发现",
  autoDiscoveryTip: "开启后，未绑定服务器 ID 的 Agent 上报时会自动创建服务器。新建的服务器最多延迟约 2 分钟才会出现在首页。具体参考 README。",
  autoAdd: "自动添加",
  autoAddDisabledTip: "自动发现未开启，请在「设置 → 站点设置」中开启自动发现",
  autoAddNamePlaceholder: "留空则使用公网 IP",
  wssReportEnabled: "Agent WSS 上报",
  customUserAgent: "自定义 UA",
  customUserAgentTip: "Agent 上报请求使用的 User-Agent，用于 Cloudflare 域名安全规则的放行。Agent 需 v1.1.1 及以上版本才支持。",
  customUserAgentDocs: "详见 README",
  customUserAgentInvalid: "仅支持字母、数字、空格和 . _ - / , : ; ( ) + = @ # * ? ~，长度不超过 100",
  appPassword: "App 访问口令",
  appPasswordTip: "第三方 App、iOS 小组件在请求头 X-App-Password 中携带此口令后，可查看私有站点与隐藏服务器。留空不启用。",
  appPasswordPlaceholder: "16-32 位，留空不启用",
  appPasswordInvalid: "需为 16-32 位英文字符（字母、数字或符号），不能包含空格",
  wssReportTip: "开启 WSS 可减少 Workers 请求量，增加实时性；24 小时开启会占用 85% Durable Objects 时长消耗（和服务器数量无关），无其他项目占用的情况下，建议开启。",
  wssReportHours: "WSS 开启时段",
  wssReportHoursTip: "面板按本地时区显示小时，设置保存为 UTC 小时；未选中时段 Agent 自动使用 HTTP 上报。",
  localTime: "本地时间",
  hoursSelected: "小时已选",
  agentWssMinVersion: "Agent 必须升级到 v1.0.10+",
  selectAll: "全选",
  clear: "清空",
  frontendWsTimeoutMinutes: "前端 WSS 超时（分钟）",
  frontendWsTimeoutMinutesTip: "前端实时连接达到该时长后断开并提示；0 表示不超时。",
  invalidFrontendWsTimeoutMinutes: "前端 WSS 超时必须是 0 到 1440 之间的整数分钟。",
  publicAccess: "公开访问",
  showPrice: "显示价格",
  showExpire: "显示到期时间",
  showTf: "显示流量配额",
  showThreeNetDetails: "首页显示节点详情",
  longHistoryPoints: "长时历史数据点数",
  longHistoryPointsTip: "查询超过 1 小时时返回的采样点数。点数越多，细节越丰富，但读取行数也越多。",
  historyPointCount: "{points} 个点",
  notifications: "通知",
  offlineAlert: "离线告警",
  expireReminder: "到期提醒",
  disabled: "禁用",
  enable: "开启",
  enabled: "启用",
  notifyOffline: "离线通知延迟",
  notifyOfflineMinutes: "离线 {minutes} 分钟后通知",
  notifyExpireDays: "到期前{days}天内通知",
  expireReminderCustomPlaceholder: "到期前提醒天数（1-365）",
  resourceAlert: "资源负载告警",
  resourceAlertWindow: "告警时间窗口",
  resourceAlertWindowMinutes: "{minutes} 分钟窗口",
  resourceAlertAddRule: "添加规则",
  resourceAlertEmpty: "未配置资源负载告警规则",
  resourceAlertRule: "规则",
  resourceAlertRuleName: "名称",
  resourceAlertRuleNamePlaceholder: "例如：CPU 过高",
  resourceAlertMetric: "监控项",
  resourceAlertThreshold: "阈值",
  resourceAlertServers: "服务器",
  resourceAlertInterval: "间隔",
  resourceAlertIntervalMinutes: "{minutes} 分钟",
  resourceAlertMode: "触发方式",
  resourceAlertModeContinuous: "窗口样本均超过阈值",
  resourceAlertModeAverage: "窗口平均值超过阈值",
  resourceAlertCpu: "CPU 阈值 (%)",
  resourceAlertRam: "RAM 阈值 (%)",
  resourceAlertNetIn: "下行阈值 (Mbps)",
  resourceAlertNetOut: "上行阈值 (Mbps)",
  resourceAlertNetTotal: "总网速阈值 (Mbps)",
  resourceAlertTip: "受CF Workers限制,数量过多可能导致通知延迟或丢失。",
  telegramToken: "Telegram / 企业微信 / 飞书 / 钉钉 / Bark / Server酱 / WxPusher / Gotify / OneBot",
  chatId: "聊天 ID",
  notificationChannel: "通知渠道",
  builtinNotification: "内置渠道",
  customWebhook: "自定义 Webhook",
  smtpNotification: "SMTP 邮件",
  smtpHost: "SMTP 服务器",
  smtpPort: "端口",
  smtpPortTip: "Cloudflare Workers 封禁 25 端口，请使用 465（隐式 TLS）或 587（STARTTLS）。",
  smtpSecure: "加密方式",
  smtpSecureAuto: "自动（按端口）",
  smtpSecureTls: "隐式 TLS (465)",
  smtpUser: "用户名",
  smtpPassword: "密码",
  smtpFrom: "发件人",
  smtpTo: "收件人",
  smtpInvalidEmail: "请输入合法的邮箱地址，例如 user@example.com",
  smtpToRequired: "至少需要一个收件人邮箱",
  smtpFieldRequired: "此项为必填",
  smtpPortInvalid: "端口无效（1-65535，Cloudflare Workers 封禁 25 端口）",
  smtpSecureRequired: "非 465/587 端口必须显式选择加密方式",
  smtpConfigInvalid: "SMTP 配置不完整，请检查 SMTP 通知设置",
  smtpTip: "通过 cloudflare:sockets 发送纯文本邮件（Cloudflare Workers 不支持 25 端口）。QQ / 163 需填写 SMTP 授权码而非登录密码。",
  webhookUrl: "Webhook URL",
  webhookMethod: "请求方法",
  webhookFormat: "Body 格式",
  webhookHeaders: "请求头",
  webhookBody: "请求体",
  webhookParams: "查询参数",
  notificationTemplate: "通知模板",
  notificationLanguage: "通知语言",
  notificationLanguageTip: "发送到 Telegram 等渠道的告警消息语言。自定义模板和 Webhook 内容不会被翻译。",
  notificationTimezone: "通知时区",
  notificationTimezoneTip: "仅用于通知输出时间和到期提醒计划。请填写 IANA 时区，例如 Asia/Shanghai。",
  expireNotificationTime: "到期提醒时间",
  expireNotificationTimeTip: "每天按通知时区在所选小时检查到期状态并发送提醒，取值 0-23。",
  invalidNotificationTimezone: "通知时区必须是有效 IANA 时区，例如 Asia/Shanghai。",
  invalidExpireNotificationTime: "到期通知时间必须是 0 到 23 的整数。",
  invalidExpireReminder: "到期提醒天数必须是 0 到 365 的整数。",
  saveConfig: "保存配置",
  saveHint: "修改后需保存才会生效",
  saving: "保存中...",
  hostnameLabel: "主机名",
  groupName: "分组名称",
  expirationDate: "到期时间",
  trafficLimit: "流量限制",
  autoUpdate: "自动更新",
  autoUpdateRiskTitle: "自动更新风险提示",
  autoUpdateRiskDesc: "请确保安全的情况下开启，修改后需要重新复制命令执行。",
  autoUpdateRiskConfirm: "确认开启",
  autoUpdateRiskCancel: "取消",
  hideFromPublic: "隐藏",
  cancel: "取消",
  save: "保存",
  dangerWarning: "危险操作警告",
  deleteConfirm: "此操作将从监控面板中移除该服务器的所有数据",
  recommendUninstall: "建议先在目标服务器上执行卸载命令，以停止探针服务",
  clickToCopyCmd: "点击左侧复制按钮即可复制卸载命令",
  confirmDelete: "确认删除",
  cancelAction: "取消",
  default: "默认",
  editConf: "编辑配置",
  deleteConf: "删除配置",
  errorInvalidUsername: "[错误] 用户名或密码无效",
  serverUpdateFailedDbNotReady: '[错误] 更新失败，请到数据库管理中点击"升级数据库"以迁移新字段。',
  configSaved: "[成功] 配置已保存！正在刷新...",
  saveFailed: "[错误] 保存失败：",
  saveFailedUnknown: "[错误] 保存失败：未知错误",
  addFailed: "[错误] 添加失败",
  serverAdded: "服务器已添加",
  serverUpdated: "服务器信息已更新",
  batchEdit: "批量编辑",
  batchEditSuccess: "[成功] 已批量编辑 {count} 台服务器",
  noBatchEditFields: "请选择要更新的字段",
  selectServersToEdit: "请选择要编辑的服务器",
  basicInfo: "基础信息",
  billing: "账单信息",
  deleteFailed: "[错误] 删除失败",
  selectServers: "[警告] 请选择要删除的服务器",
  confirmDeleteServers: "[?] 确定要删除 ",
  irreversible: " 个选中的服务器吗？此操作不可撤销。",
  imageSizeWarning: "[警告] 图片大小超过 800KB，建议使用外部链接",
  enterServerName: "[警告] 请输入服务器名称",
  loginRequired: "请先登录以查看1天以上的历史数据",
  loginRequiredTitle: "需要登录",
  verificationFailed: "验证失败",
  refreshToRetry: "请刷新页面重试",
  verificationError: "验证错误",
  turnstileNotSupported: "不支持 Turnstile",
  turnstileNotSupportedDesc: "检测到其中一个远程端点开启了 Turnstile，请在该站点关闭后继续使用。",
  turnstileSiteKeyMismatch: "Turnstile 站点密钥不一致",
  turnstileSiteKeyMismatchDesc: "多个站点已启用 Turnstile，但站点密钥不一致。请为所有启用的站点使用同一个 Turnstile 组件。",
  dbManagement: "数据库管理",
  upgradeDatabase: "升级数据库",
  clearHistory: "清空历史数据",
  upgradeDesc: "更新数据库结构到最新版本，没有异常则无需操作",
  clearHistoryDesc: "删除所有监控历史，保留服务器列表和系统设置",
  dangerOperation: "危险操作",
  clearHistoryWarning: "此操作将删除所有监控历史记录，服务器列表和系统设置会保留，此操作不可撤销！",
  confirmClear: "确认清空",
  operationSuccess: "操作成功",
  operationFailed: "操作失败",
  invalidServerName: "服务器名称无效",
  invalidPingNodeFormat: "请输入域名、IPv4、IPv6 或 host:port；IPv6 加端口请使用 [地址]:端口，端口范围 1-65535。",
  invalidNetworkInterface: "网卡名称格式无效，请用英文逗号分隔，例如 eth0,ens3。",
  invalidThemeOptionsFormat: '主题自定义配置必须是合法 JSON object，例如 {"a":1,"b":2}。',
  invalidTrafficCorrection: "流量校正必须是 0 到 1,000,000 GB 之间的数字",
  invalidServerId: "服务器 ID 无效",
  missingSortData: "缺少排序数据",
  invalidSortId: "排序数据包含无效 ID",
  selectServersToDelete: "请选择要删除的服务器",
  invalidServerIdInList: "包含无效的服务器 ID",
  unknownAction: "未知操作",
  cloudflareTokenRequired: "请先配置 Cloudflare Token",
  cloudflareAccountIdRequired: "请先配置 Cloudflare 用户 ID / Account ID",
  upgrading: "升级中...",
  clearing: "清空中...",
  reportInterval: "上报间隔（秒）",
  wssReportInterval: "WSS 上报间隔（秒）",
  connectionMode: "连接模式",
  connectionModeAuto: "自动（WSS + POST 兜底）",
  connectionModeHttp: "仅 HTTP POST",
  pingMode: "Ping 模式",
  pingModeIcmpRootHint: "ICMP 必须以 root 安装才支持。",
  wssReportDisabledConnectionHint: "WSS 上报已全局关闭，请在设置中开启。",
  targetOs: "目标系统",
  installMode: "安装用户",
  installModeCurrentUser: "当前用户",
  installModeCfsmUser: "专用 cfsm 用户",
  nonRootInstallTip: "专用 cfsm 用户仅适用于 systemd Linux。",
  nonRootInstallRunStep: "以 cfsm 用户权限安装",
  nonRootInstallSudoRequired: "需要 root 权限或 sudo。",
  dedicatedUserSystemdRequired: "Alpine/OpenRC 等不支持systemd的系统请选择当前用户。",
  uninstallMode: "安装用户",
  uninstallModeCurrentUser: "当前用户",
  uninstallModeCfsmUser: "专用 cfsm 用户",
  nonRootUninstallUserMissing: "cfsm 用户不存在，请选择当前用户或确认原安装用户。",
  dedicatedUserUninstallUnsupported: "不支持systemd的系统请选择当前用户。",
  httpsRequired: "当前使用的是 HTTP，请使用 HTTPS 访问后再复制安装命令。",
  copied: "已复制！",
  close: "关闭",
  agentVersionSelect: "探针版本",
  agentVersionShell: "Shell 版本",
  agentVersionGo: "Go 版本",
  installVersionPlaceholder: "默认最新版",
  ghProxy: "第三方 GitHub 代理",
  ghProxyTip: "第三方代理可能查看或篡改下载的安装文件，存在安全风险。",
  installInstance: "实例名",
  installInstanceTip: "留空使用默认实例；填写后可在同一台机器安装多个独立实例，服务名与配置路径会带实例后缀。仅支持字母、数字、下划线和短横线。",
  installInstancePlaceholder: "默认实例",
  uninstallAllInstances: "卸载全部实例",
  uninstallAllInstancesTip: "勾选后卸载本机所有实例（等价于 --all），此时忽略实例名。",
  instanceNameInvalid: "实例名仅支持字母、数字、下划线和短横线，最多 32 个字符，其他字符会被忽略",
  installVersionTip: "通过 https://github.com/huilang-me/cfsm-agent/releases 获取版本号",
  dockerVersionTip: "Docker 镜像标签（tag），默认 latest",
  ghProxyPlaceholder: "海外直连即可",
  pingNodes: "Ping节点",
  customCt: "电信",
  customCu: "联通",
  customCm: "移动",
  jwtSecretTip: "JWT密钥用于生成和验证登录token。使用至少32个字符的随机字符串。",
  jwtSecretMinLength: "JWT Secret至少需要32个字符",
  jwtSecretNoWhitespace: "JWT Secret不应包含空格",
  adminLoginSettings: "管理员登录设置",
  changePassword: "修改密码",
  cancelPasswordChange: "取消修改密码",
  confirmPassword: "确认密码",
  apiSecretTip: "服务器上报使用的 API_SECRET 仍使用环境变量，不受此处密码设置影响。",
  passwordRequired: "尚未配置管理员密码，请先设置密码再保存。",
  passwordMismatch: "两次输入的密码不一致",
  usernameRequired: "用户名不能为空",
  securitySettings: "安全设置",
  enableTurnstile: "启用 Turnstile 人机验证码（全局）",
  enableTurnstileLogin: "登录时启用 Turnstile 人机验证码",
  turnstileLoginTip: "开启后，仅在提交账号密码登录时出现并验证。",
  turnstileSiteKey: "站点密钥",
  turnstileSiteKeyPlaceholder: "Turnstile 站点密钥",
  turnstileSecretKey: "密钥",
  turnstileSecretKeyPlaceholder: "Turnstile 密钥",
  turnstileTip: "Cloudflare Turnstile 提供机器人保护。从 Cloudflare 控制台获取密钥。",
  jwtSettings: "JWT 设置",
  jwtSecret: "JWT 密钥",
  monthlyTraffic: "月流量",
  monthlyTrafficLimit: "月流量限制",
  trafficResetDay: "流量重置日",
  trafficResetDayTip: "动态配置（除“自动更新开关”外）约4分钟自动生效；自动更新开关需重新复制命令执行。",
  trafficAlertPercent: "月流量告警阈值",
  trafficAlertPercentTip: "逐台阈值百分比；留空=跟随全局设置，0=该服务器关闭告警。每账期仅通知一次，流量重置或阈值/限额变更后重新可触发。仅在设置了流量限制时生效。",
  trafficAlertThreshold: "月流量告警阈值",
  trafficAlertThresholdTip: "全局默认：当某服务器当月流量达到其流量限制的该百分比时通知一次；0=关闭。设置了逐台阈值的服务器优先于全局；逐台设为 0 则关闭该服务器告警。",
  networkInterface: "统计网卡",
  networkInterfaceHint: "例如 eth0,ens3，留空自动汇总",
  rxCorrection: "下行流量校正",
  txCorrection: "上行流量校正",
  correctionHint: "流量校正只填一项时另一项按 0 覆盖清空",
  pingNodeTip: "覆盖全局默认节点，设0表示不使用该节点",
  serverLevel: "服务器级",
  trafficCalcType: "月流量计算类型",
  trafficCalcTotal: "上行+下行",
  trafficCalcUl: "仅上行",
  trafficCalcDl: "仅下行",
  trafficCalcMax: "取最大",
  cloudflareSettings: "Cloudflare 设置",
  cloudflareAccountIdPlaceholder: "例如 f81d307be4628170a3878394435c9c8b",
  cloudflareTokenPlaceholder: "Cloudflare API Token",
  cloudflareTokenTip: "查询用量需要 账户分析读取 权限。",
  queryD1Quota: "查询CF账户用量",
  d1UsageQueried: "CF账户用量查询成功，注意保存",
  d1UsageDate: "统计日期",
  d1RowsRead: "已读取行数",
  d1RowsWritten: "已写入行数",
  workersRequests: "Workers 请求数",
  durableObjectsRequests: "DO 计费请求数（估算）",
  durableObjectsHttpRequests: "DO HTTP 请求",
  durableObjectsHibernationWakeups: "DO Hibernation 唤醒",
  durableObjectsInboundWebSocketMessages: "DO Inbound WebSocket 消息",
  durableObjectsOutboundWebSocketMessages: "DO Outbound WebSocket 消息",
  billingRatioOneToOne: "1:1 计费",
  billingRatioWebSocketIncoming: "20:1 计费",
  billingRatioNotBilled: "不计费",
  rawRequests: "原始",
  durableObjectsDuration: "DO 时长 (GB-s)",
  durableObjectsDurationTip: "和Wss开启时长有关，24小时开启固定占用85%左右，不受服务器台数影响。",
  todayUsage: "当日消耗",
  yesterdayUsage: "昨天消耗",
  secondsAgo: "秒前",
  minutesAgo: "分钟前",
  hoursAgo: "小时前",
  daysAgo: "天前",
  loginSuccessful: "登录成功",
  updateSuccess: "更新成功",
  serverDeleted: "服务器已删除",
  sortOrderSaved: "排序已保存",
  batchDeleted: "已删除服务器",
  databaseRebuiltSuccess: "历史数据清空成功",
  databaseRebuiltFailed: "历史数据清空失败",
  databaseUpgradeSuccess: "数据库更新成功",
  databaseUpgradeFailed: "数据库更新失败",
  dbColumnsAdded: "数据库字段缺失，已添加缺失字段，请再次点击保存",
  serverUpdateFailed: "服务器更新失败",
  adminDisabled: "管理面板已禁用",
  adminDisabledDesc: "使用多站点模式时，管理面板已禁用。",
  backToDashboard: "返回仪表盘",
  validationError: "验证错误",
  turnstileSiteKeyRequired: "启用 Turnstile 时必须填写站点密钥",
  turnstileSecretKeyRequired: "启用 Turnstile 时必须填写密钥",
  tgBotTokenRequired: "启用通知时必须填写 Telegram Bot Token",
  notificationWebhookUrlRequired: "启用自定义 Webhook 时必须填写 Webhook URL",
  disableOfflineNotify: "关闭离线通知",
  disableNodeNotify: "关闭该节点通知",
  sendTestNotification: "发送测试",
  testNotificationSent: "测试通知发送成功，注意保存",
  testNotificationFailed: "测试通知发送失败",
  saveSuccess: "设置保存成功",
  serverEdited: "服务器更新成功",
  serversDeleted: "服务器批量删除成功",
  corsBlocked: "站点禁止跨域访问，请修复。",
  exportServers: "导出",
  importServers: "导入",
  settingsImported: "站点与外观设置已导入（站点/外观）",
  importSettingsNote: "账号密码、JWT、Turnstile、自定义 UA、告警规则、CSP、索引标记不参与导出导入；导入会覆盖当前站点设置。",
  serversExported: "服务器导出成功",
  serversExportFailed: "服务器导出失败",
  serversImported: "服务器导入成功",
  noServersImported: "未导入任何服务器",
  noServersToImport: "没有可导入的服务器数据",
  importing: "导入中...",
  exporting: "导出中...",
  importResult: "导入结果",
  importedCount: "已导入",
  skippedCount: "已跳过",
  skippedIds: "跳过的 ID",
  selectJsonFile: "选择要导入的 JSON 文件",
  themeStore: "主题商店",
  donation: "捐赠支持",
  donationTitle: "请我喝杯奶茶吧",
  donationDesc: "如果 CFSM 对你有帮助，欢迎捐赠一点 token，给我买杯奶茶，支持项目继续维护。",
  donationToken: "每一份支持都会变成继续写代码、修 bug 和熬夜监控的能量！",
  donationThanks: "谢谢你，让这个小项目一直有动力更新～",
  donationWechat: "微信扫码支持",
  donationQrAlt: "微信赞赏码",
  themeStoreLoading: "加载主题列表",
  themeStoreLoadFailed: "主题商店加载失败",
  themeStoreNetworkError: "无法加载主题商店。请检查当前网络是否可以访问 raw.githubusercontent.com 和 api.github.com。建议更换节点后重试。",
  themeLoadVersions: "点击加载版本",
  themeLoadingVersions: "加载版本中...",
  themeStoreCreateTitle: "制作你自己的主题",
  themeStoreCreateDesc: "主题就是纯静态站点：按开发文档或 AI 提示词生成 index.html 与 assets/，推到 GitHub，提交到主题商店，就会出现在这里。",
  themeStoreDevDoc: "开发文档",
  themeStoreAiPrompt: "AI 提示词",
  themeStoreSubmit: "提交主题",
  themeStoreWarning: "以下为第三方主题，未经验证",
  themeStoreWarningDesc: "第三方主题可能包含恶意代码，请在确认来源可靠或审核源码后再使用。使用第三方主题造成的任何后果由使用者自行承担。",
  currentTheme: "当前主题",
  builtinTheme: "内置主题",
  filterMore: "更多",
  noSamples: "无样本",
  expand: "展开",
  collapse: "收起",
  mikusThemeTagBuiltin: "内置",
  mikusThemeTagSakura: "樱花",
  mikusThemeDescription: "内置 Mikus 模式，启用后切回默认主题，并开启 Mikus 配色、加载页与樱花动效。",
  useBuiltinTheme: "使用内置主题",
  customThemeUrl: "自定义主题 URL",
  customThemeUrlDesc: "粘贴自定义第三方 GitHub 主题构建产物地址，建议使用 commit id 固定版本，例如 https://github.com/Author/theme/tree/commitid",
  applyCustomTheme: "应用自定义",
  switchTheme: "切换主题",
  themeApplied: "主题切换成功",
  themeApplyFailed: "主题切换失败",
  themeUrlUnavailable: "当前版本缺少可用主题 URL",
  invalidThemeUrl: "主题 URL 格式无效",
  invalidUserAgent: "自定义 UA 含非法字符，仅支持字母、数字、空格与 . _ - / , : ; ( ) + = @ # * ? ~，长度不超过 100",
  invalidAppPassword: "App 访问口令不合法：需为 16-32 位英文字符（字母、数字或符号），且不能包含空格",
  version: "版本",
  changelog: "更新日志",
  preview: "预览",
  demo: "演示",
  view: "查看",
  threeNetPanelCount: "首页面板显示线路数",
  themeConfigInvalidCount: "请输入 0 到 8 之间的数字",
  themeConfigLoginRequired: "请先登录管理后台再修改主题配置",
  themeConfigReset: "重置",
  colorPresetTitle: "配色风格",
  colorPresetDefault: "默认",
  colorPresetOcean: "海洋蓝",
  colorPresetAurora: "极光绿",
  colorPresetNebula: "星云紫",
  colorPresetSunset: "暖阳橙",
  colorPresetSakura: "樱花粉",
  colorPresetForest: "森林绿",
  colorPresetGraphite: "石墨灰"
}, LP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: NP
}, Symbol.toStringTag, { value: "Module" })), UP = {
  passkeyRateLimited: "嘗試次數過多，請稍後再試。",
  passkeyBrowserPrompt: "等待瀏覽器互動，請在彈出視窗中完成驗證…",
  passkeyPreparing: "正在準備 Passkey…",
  passkeyVerifying: "正在驗證 Passkey…",
  passkeyPasswordInvalid: "管理員密碼不正確。",
  passkeyOptionsFailed: "無法開始註冊，請檢查網路和登入狀態。",
  passkeyVerifyFailed: "瀏覽器已返回憑證，但伺服器驗證失敗，請重試。",
  passkeyAlreadyRegistered: "此安全金鑰已綁定目前網站。",
  passkeyUserVerificationRequired: "安全金鑰需支援使用者驗證，請先設定 FIDO2 PIN 後重試。",
  passkeyDeviceFailed: "驗證未完成：可能已取消、逾時或金鑰不符合要求。請檢查連線、PIN 並重試。",
  passkeyLogin: "使用 Passkey 登入",
  passkeyTitle: "Passkey 通行密鑰",
  passkeyDescription: "支援安全金鑰、iCloud 鑰匙圈及 Windows Hello。建議新增備用金鑰，以免無法登入。",
  passkeySameOrigin: "請使用支援 Passkey 的瀏覽器，透過此 Worker 自身的 HTTPS 網域存取。",
  passkeyEmpty: "尚未新增通行密鑰。",
  passkeyName: "名稱",
  passkeyNamePlaceholder: "例如：YubiKey 或 iPhone",
  passkeyPassword: "目前管理員密碼",
  passkeyPasswordHint: "新增或刪除通行密鑰前，請輸入目前管理員密碼。",
  passkeyPasswordRequired: "請先輸入目前管理員密碼。",
  passkeyAdd: "新增 Passkey",
  passkeyDelete: "刪除",
  passkeyDeleteConfirm: "確定刪除此通行密鑰？",
  passkeyAdded: "通行密鑰已新增。",
  passkeyDeleted: "通行密鑰已刪除。",
  passkeyFailed: "操作失敗或已取消，請檢查密碼後重試。",
  collectInterval: "採集間隔（秒）",
  theme: "主題",
  themeAuto: "跟隨系統",
  themeDark: "深色",
  themeLight: "淺色",
  language: "語言",
  languageAuto: "自動",
  barChart: "長條圖",
  ringChart: "環狀圖",
  expandChart: "放大圖表",
  collapseChart: "收起圖表",
  table: "清單",
  map: "地圖",
  admin: "管理",
  all: "全部",
  totalServers: "伺服器總數",
  totalTraffic: "總流量",
  realtimeSpeed: "即時速度",
  remainingValue: "剩餘價值",
  totalValue: "總價值",
  monthlyAverageCost: "每月平均支出",
  configuredPrices: "已計價",
  todayExchangeRates: "今日匯率",
  exchangeRateBase: "基準",
  exchangeRateSource: "匯率來源",
  financeMissingExpire: "無到期日",
  financeRateNetwork: "即時 API",
  financeRateCache: "今日快取",
  financeRateStaleCache: "快取回退",
  financeRateDefault: "內建回退",
  realtime: "即時",
  liveConnectionTimeoutTitle: "即時連線已逾時",
  liveConnectionTimeoutMessage: "即時連線已達到時限並中斷，是否繼續接收即時更新？",
  continueConnection: "繼續",
  online: "線上",
  offline: "離線",
  noServer: "尚無伺服器，請在",
  noServerSuffix: " 中新增",
  backToAdmin: "後台管理",
  back: "返回",
  hostname: "主機名稱",
  region: "地區代碼",
  regionPlaceholder: "留空自動取得",
  osArch: "系統/架構",
  ram: "記憶體",
  disk: "磁碟",
  use: "用量",
  dl: "下載",
  ul: "上傳",
  rx: "入站",
  tx: "出站",
  update: "更新",
  noData: "尚無資料",
  ago: "前",
  uptime: "運作時間",
  architecture: "架構",
  os: "作業系統",
  kernelVersion: "核心版本",
  cpuModel: "CPU 型號",
  cpuInfo: "CPU 資訊",
  loadAvg: "平均負載",
  bootTime: "開機時間",
  totalDiskRam: "總磁碟 / 記憶體",
  trafficIn: "入站流量",
  trafficOut: "出站流量",
  traffic: "流量",
  lastReport: "最後回報",
  cpuUsage: "CPU 使用率",
  gpuInfo: "GPU 資訊",
  gpuUsage: "GPU 使用率",
  gpuMemory: "GPU 記憶體",
  gpuClock: "GPU SM 頻率",
  gpuPower: "GPU 功耗",
  memoryUsage: "記憶體使用率",
  diskUsage: "磁碟使用率",
  diskIo: "磁碟 IO",
  networkTraffic: "網路",
  processes: "處理程序",
  connections: "連線數",
  latencyMonitor: "延遲",
  packetLoss: "封包遺失率",
  databaseUpgradeRequired: "請進入後台點選升級資料庫",
  swap: "置換空間",
  used: "已用",
  lastUpdate: "最後更新",
  workersUpdateAvailable: "新版",
  autoRefresh: "自動重新整理",
  seconds: "秒",
  timeout: "逾時",
  loadAvgMonitor: "負載監控",
  load1m: "1分鐘",
  load5m: "5分鐘",
  load15m: "15分鐘",
  apiEndpoint: "站台",
  switchingSite: "正在切換站台...",
  username: "使用者名稱",
  password: "密碼",
  login: "登入",
  missingCredentials: "請輸入使用者名稱和密碼",
  invalidCredentials: "使用者名稱或密碼錯誤",
  adminPanel: "管理面板",
  sudoStatus: "系統狀態",
  refresh: "重新整理",
  logout: "登出",
  dashboard: "儀表板",
  total: "總數",
  avgCpu: "平均 CPU",
  servers: "伺服器",
  settings: "設定",
  clickToCopy: "點選",
  installCommand: "複製安裝指令，在目標伺服器上執行即可完成探針部署",
  collectIntervalHint: "採集間隔為 0 時依回報間隔取樣",
  serverName: "伺服器名稱",
  group: "群組",
  tags: "標籤",
  note: "備註",
  tagsPlaceholder: "以英文逗號隔開",
  notePlaceholder: "內部備註，僅在管理端顯示",
  addServer: "新增伺服器",
  batchDelete: "批次刪除",
  toggleAll: "全選/取消",
  refreshCache: "重新整理快取",
  cacheCleared: "伺服器清單快取已清除",
  price: "價格",
  free: "免費",
  currency: "貨幣",
  billingCycle: "計費週期",
  autoRenewal: "自動續約",
  expire: "剩餘時間",
  expireDays: "天",
  day: "天",
  days: "天",
  month: "個月",
  expired: "已到期",
  agentVersion: "探針版本",
  status: "狀態",
  actions: "操作",
  noServers: "尚無伺服器設定",
  dragSort: "拖曳排序",
  copy: "複製",
  edit: "編輯",
  delete: "刪除",
  custom: "自訂",
  siteTitle: "站台標題",
  appearance: "外觀",
  bgImage: "背景圖片",
  mobileBgImage: "手機背景圖片",
  remoteImageTip: "使用遠端圖片時，需要將圖片網域加入 CSP 靜態檔案網域白名單。",
  favicon: "網站圖示",
  upload: "上傳",
  customHead: "自訂 <head>",
  customScript: "自訂腳本 (頁尾)",
  themeOptions: "主題自訂設定 JSON",
  mikusThemeToggle: "開啟 Mikus 模式",
  themeOptionsTip: '第三方主題自訂設定，必須是 JSON object，例如 {"mikus":1} 可開啟 Mikus 前端主題層。',
  cspStatic: "CSP 靜態檔案網域白名單",
  cspStaticTip: "允許的靜態檔案網域，多個以英文逗號隔開，如 https://unpkg.com,https://cdn.jsdelivr.net",
  cspApi: "CSP API 網域白名單",
  cspApiTip: "允許的 API 網域，多個以英文逗號隔開，如 https://api.example.com",
  cspWarning: "新增第三方 CSS/JS 時，請確保來源安全可靠。使用前建議將 js 原始碼交給 AI 完整分析安全性，確認無問題後再託管在自己的 GitHub 儲存庫中，透過 CDN 呼叫。使用不當可能帶來嚴重安全風險。外部資源需要加入上方的 CSP 靜態檔案網域白名單中。",
  cspInvalidDomain: "CSP 網域格式無效，請填寫 https:// origin，不要包含路徑或查詢參數",
  displayMode: "預設顯示方式",
  displayModeBar: "長條圖",
  displayModeRing: "環狀圖",
  displayModeTable: "清單",
  defaultTheme: "預設外觀",
  defaultLanguage: "預設語言",
  displayOptions: "顯示選項",
  autoDiscovery: "自動探索",
  autoDiscoveryTip: "開啟後，未綁定伺服器 ID 的 Agent 回報時會自動建立伺服器。新建的伺服器最多延遲約 2 分鐘才會出現在首頁。詳情請參考 README。",
  autoAdd: "自動新增",
  autoAddDisabledTip: "自動探索未開啟，請在「設定 → 站台設定」中開啟自動探索",
  autoAddNamePlaceholder: "留空則使用公網 IP",
  wssReportEnabled: "Agent WSS 回報",
  customUserAgent: "自訂 UA",
  customUserAgentTip: "Agent 回報請求使用的 User-Agent，用於 Cloudflare 域名安全規則的放行。Agent 需 v1.1.1 以上版本才支援。",
  customUserAgentDocs: "詳見 README",
  customUserAgentInvalid: "僅支援字母、數字、空格與 . _ - / , : ; ( ) + = @ # * ? ~，長度不超過 100",
  appPassword: "App 存取口令",
  appPasswordTip: "第三方 App、iOS 小工具在請求標頭 X-App-Password 中攜帶此口令後，可查看私有站點與隱藏伺服器。留空不啟用。",
  appPasswordPlaceholder: "16-32 位，留空不啟用",
  appPasswordInvalid: "需為 16-32 位英文字元（字母、數字或符號），不能包含空格",
  wssReportTip: "開啟 WSS 可減少 Workers 請求量，提升即時性；24 小時開啟會佔用 85% Durable Objects 時數消耗（與伺服器數量無關），在沒有其他專案佔用的情況下，建議開啟。",
  wssReportHours: "WSS 開啟時段",
  wssReportHoursTip: "面板依本機時區顯示小時，設定儲存為 UTC 小時；未選取的時段 Agent 會自動改用 HTTP 回報。",
  localTime: "本機時間",
  hoursSelected: "小時已選",
  agentWssMinVersion: "Agent 必須升級到 v1.0.10+",
  selectAll: "全選",
  clear: "清空",
  frontendWsTimeoutMinutes: "前端 WSS 逾時（分鐘）",
  frontendWsTimeoutMinutesTip: "前端即時連線達到該時長後中斷並提示；0 表示不逾時。",
  invalidFrontendWsTimeoutMinutes: "前端 WSS 逾時必須是 0 到 1440 之間的整數分鐘。",
  publicAccess: "公開存取",
  showPrice: "顯示價格",
  showExpire: "顯示到期時間",
  showTf: "顯示流量配額",
  showThreeNetDetails: "首頁顯示節點詳情",
  longHistoryPoints: "長時歷史資料點數",
  longHistoryPointsTip: "查詢超過 1 小時時回傳的取樣點數。點數越多，細節越豐富，但讀取列數也越多。",
  historyPointCount: "{points} 個點",
  notifications: "通知",
  offlineAlert: "離線告警",
  expireReminder: "到期提醒",
  disabled: "停用",
  enable: "開啟",
  enabled: "啟用",
  notifyOffline: "離線通知延遲",
  notifyOfflineMinutes: "離線 {minutes} 分鐘後通知",
  notifyExpireDays: "到期前{days}天內通知",
  expireReminderCustomPlaceholder: "到期前提醒天數（1-365）",
  resourceAlert: "資源負載告警",
  resourceAlertWindow: "告警時間視窗",
  resourceAlertWindowMinutes: "{minutes} 分鐘視窗",
  resourceAlertAddRule: "新增規則",
  resourceAlertEmpty: "尚未設定資源負載告警規則",
  resourceAlertRule: "規則",
  resourceAlertRuleName: "名稱",
  resourceAlertRuleNamePlaceholder: "例如：CPU 過高",
  resourceAlertMetric: "監控項目",
  resourceAlertThreshold: "臨界值",
  resourceAlertServers: "伺服器",
  resourceAlertInterval: "間隔",
  resourceAlertIntervalMinutes: "{minutes} 分鐘",
  resourceAlertMode: "觸發方式",
  resourceAlertModeContinuous: "視窗樣本均超過臨界值",
  resourceAlertModeAverage: "視窗平均值超過臨界值",
  resourceAlertCpu: "CPU 臨界值 (%)",
  resourceAlertRam: "RAM 臨界值 (%)",
  resourceAlertNetIn: "下行臨界值 (Mbps)",
  resourceAlertNetOut: "上行臨界值 (Mbps)",
  resourceAlertNetTotal: "總網速臨界值 (Mbps)",
  resourceAlertTip: "受 CF Workers 限制，數量過多可能導致通知延遲或遺失。",
  telegramToken: "Telegram / 企業微信 / 飛書 / 釘釘 / Bark / Server酱 / WxPusher / Gotify / OneBot",
  chatId: "聊天 ID",
  notificationChannel: "通知管道",
  builtinNotification: "內建管道",
  customWebhook: "自訂 Webhook",
  smtpNotification: "SMTP 郵件",
  smtpHost: "SMTP 伺服器",
  smtpPort: "連接埠",
  smtpPortTip: "Cloudflare Workers 封鎖 25 連接埠，請使用 465（隱式 TLS）或 587（STARTTLS）。",
  smtpSecure: "加密方式",
  smtpSecureAuto: "自動（依連接埠）",
  smtpSecureTls: "隱式 TLS (465)",
  smtpUser: "使用者名稱",
  smtpPassword: "密碼",
  smtpFrom: "寄件者",
  smtpTo: "收件者",
  smtpInvalidEmail: "請輸入合法的電子郵件地址，例如 user@example.com",
  smtpToRequired: "至少需要一個收件者電子郵件",
  smtpFieldRequired: "此欄位為必填",
  smtpPortInvalid: "連接埠無效（1-65535，Cloudflare Workers 封鎖 25 連接埠）",
  smtpSecureRequired: "非 465/587 連接埠必須明確選擇加密方式",
  smtpConfigInvalid: "SMTP 設定不完整，請檢查 SMTP 通知設定",
  smtpTip: "透過 cloudflare:sockets 傳送純文字郵件（Cloudflare Workers 不支援 25 連接埠）。QQ / 163 需填寫 SMTP 授權碼而非登入密碼。",
  webhookUrl: "Webhook URL",
  webhookMethod: "請求方法",
  webhookFormat: "Body 格式",
  webhookHeaders: "請求標頭",
  webhookBody: "請求內容",
  webhookParams: "查詢參數",
  notificationTemplate: "通知範本",
  notificationLanguage: "通知語言",
  notificationLanguageTip: "傳送到 Telegram 等管道的告警訊息語言。自訂範本和 Webhook 內容不會被翻譯。",
  notificationTimezone: "通知時區",
  notificationTimezoneTip: "僅用於通知輸出時間和到期提醒排程。請填寫 IANA 時區，例如 Asia/Shanghai。",
  expireNotificationTime: "到期提醒時間",
  expireNotificationTimeTip: "每天依通知時區在所選小時檢查到期狀態並傳送提醒，取值 0-23。",
  invalidNotificationTimezone: "通知時區必須是有效的 IANA 時區，例如 Asia/Shanghai。",
  invalidExpireNotificationTime: "到期通知時間必須是 0 到 23 的整數。",
  invalidExpireReminder: "到期提醒天數必須是 0 到 365 的整數。",
  saveConfig: "儲存設定",
  saveHint: "修改後需儲存才會生效",
  saving: "儲存中...",
  hostnameLabel: "主機名稱",
  groupName: "群組名稱",
  expirationDate: "到期時間",
  trafficLimit: "流量限制",
  autoUpdate: "自動更新",
  autoUpdateRiskTitle: "自動更新風險提示",
  autoUpdateRiskDesc: "請在確保安全的情況下開啟，修改後需要重新複製指令執行。",
  autoUpdateRiskConfirm: "確認開啟",
  autoUpdateRiskCancel: "取消",
  hideFromPublic: "隱藏",
  cancel: "取消",
  save: "儲存",
  dangerWarning: "危險操作警告",
  deleteConfirm: "此操作將從監控面板中移除該伺服器的所有資料",
  recommendUninstall: "建議先在目標伺服器上執行解除安裝指令，以停止探針服務",
  clickToCopyCmd: "點選左側複製按鈕即可複製解除安裝指令",
  confirmDelete: "確認刪除",
  cancelAction: "取消",
  default: "預設",
  editConf: "編輯設定",
  deleteConf: "刪除設定",
  errorInvalidUsername: "[錯誤] 使用者名稱或密碼無效",
  serverUpdateFailedDbNotReady: "[錯誤] 更新失敗，請到資料庫管理中點選「升級資料庫」以遷移新欄位。",
  configSaved: "[成功] 設定已儲存！正在重新整理...",
  saveFailed: "[錯誤] 儲存失敗：",
  saveFailedUnknown: "[錯誤] 儲存失敗：未知錯誤",
  addFailed: "[錯誤] 新增失敗",
  serverAdded: "伺服器已新增",
  serverUpdated: "伺服器資訊已更新",
  batchEdit: "批次編輯",
  batchEditSuccess: "[成功] 已批次編輯 {count} 台伺服器",
  noBatchEditFields: "請選擇要更新的欄位",
  selectServersToEdit: "請選擇要編輯的伺服器",
  basicInfo: "基本資訊",
  billing: "帳單資訊",
  deleteFailed: "[錯誤] 刪除失敗",
  selectServers: "[警告] 請選擇要刪除的伺服器",
  confirmDeleteServers: "[?] 確定要刪除 ",
  irreversible: " 個選取的伺服器嗎？此操作無法復原。",
  imageSizeWarning: "[警告] 圖片大小超過 800KB，建議使用外部連結",
  enterServerName: "[警告] 請輸入伺服器名稱",
  loginRequired: "請先登入以查看 1 天以上的歷史資料",
  loginRequiredTitle: "需要登入",
  verificationFailed: "驗證失敗",
  refreshToRetry: "請重新整理頁面後重試",
  verificationError: "驗證錯誤",
  turnstileNotSupported: "不支援 Turnstile",
  turnstileNotSupportedDesc: "偵測到其中一個遠端端點已開啟 Turnstile，請在該站台關閉後繼續使用。",
  turnstileSiteKeyMismatch: "Turnstile 網站金鑰不一致",
  turnstileSiteKeyMismatchDesc: "多個站台已啟用 Turnstile，但網站金鑰不一致。請為所有啟用的站台使用同一個 Turnstile 元件。",
  dbManagement: "資料庫管理",
  upgradeDatabase: "升級資料庫",
  clearHistory: "清空歷史資料",
  upgradeDesc: "更新資料庫結構到最新版本，沒有異常則無需操作",
  clearHistoryDesc: "刪除所有監控歷史，保留伺服器清單和系統設定",
  dangerOperation: "危險操作",
  clearHistoryWarning: "此操作將刪除所有監控歷史紀錄，伺服器清單和系統設定會保留，此操作無法復原！",
  confirmClear: "確認清空",
  operationSuccess: "操作成功",
  operationFailed: "操作失敗",
  invalidServerName: "伺服器名稱無效",
  invalidPingNodeFormat: "請輸入網域、IPv4、IPv6 或 host:port；IPv6 加連接埠請使用 [位址]:連接埠，連接埠範圍 1-65535。",
  invalidNetworkInterface: "網路卡名稱格式無效，請用英文逗號分隔，例如 eth0,ens3。",
  invalidThemeOptionsFormat: '主題自訂設定必須是合法 JSON object，例如 {"a":1,"b":2}。',
  invalidTrafficCorrection: "流量校正必須是 0 到 1,000,000 GB 之間的數字",
  invalidServerId: "伺服器 ID 無效",
  missingSortData: "缺少排序資料",
  invalidSortId: "排序資料包含無效 ID",
  selectServersToDelete: "請選擇要刪除的伺服器",
  invalidServerIdInList: "包含無效的伺服器 ID",
  unknownAction: "未知操作",
  cloudflareTokenRequired: "請先設定 Cloudflare Token",
  cloudflareAccountIdRequired: "請先設定 Cloudflare 使用者 ID / Account ID",
  upgrading: "升級中...",
  clearing: "清空中...",
  reportInterval: "回報間隔（秒）",
  wssReportInterval: "WSS 回報間隔（秒）",
  connectionMode: "連線模式",
  connectionModeAuto: "自動（WSS + POST 備援）",
  connectionModeHttp: "僅 HTTP POST",
  pingMode: "Ping 模式",
  pingModeIcmpRootHint: "ICMP 必須以 root 安裝才支援。",
  wssReportDisabledConnectionHint: "WSS 回報已全域關閉，請在設定中開啟。",
  targetOs: "目標系統",
  installMode: "安裝使用者",
  installModeCurrentUser: "目前使用者",
  installModeCfsmUser: "專用 cfsm 使用者",
  nonRootInstallTip: "專用 cfsm 使用者僅適用於 systemd Linux。",
  nonRootInstallRunStep: "以 cfsm 使用者權限安裝",
  nonRootInstallSudoRequired: "需要 root 權限或 sudo。",
  dedicatedUserSystemdRequired: "Alpine/OpenRC 等不支援 systemd 的系統請選擇目前使用者。",
  uninstallMode: "安裝使用者",
  uninstallModeCurrentUser: "目前使用者",
  uninstallModeCfsmUser: "專用 cfsm 使用者",
  nonRootUninstallUserMissing: "cfsm 使用者不存在，請選擇目前使用者或確認原安裝使用者。",
  dedicatedUserUninstallUnsupported: "不支援 systemd 的系統請選擇目前使用者。",
  httpsRequired: "目前使用的是 HTTP，請改用 HTTPS 存取後再複製安裝指令。",
  copied: "已複製！",
  close: "關閉",
  agentVersionSelect: "探針版本",
  agentVersionShell: "Shell 版本",
  agentVersionGo: "Go 版本",
  installVersionPlaceholder: "預設最新版",
  ghProxy: "第三方 GitHub 代理",
  ghProxyTip: "第三方代理可能檢視或竄改下載的安裝檔案，存在安全風險。",
  installInstance: "實例名稱",
  installInstanceTip: "留空使用預設實例；填寫後可在同一台機器安裝多個獨立實例，服務名稱與設定路徑會附上實例後綴。僅支援字母、數字、底線與連字號。",
  installInstancePlaceholder: "預設實例",
  uninstallAllInstances: "卸載全部實例",
  uninstallAllInstancesTip: "勾選後卸載本機所有實例（等同 --all），此時會忽略實例名稱。",
  instanceNameInvalid: "實例名稱僅支援字母、數字、底線與連字號，最多 32 個字元，其他字元會被忽略",
  installVersionTip: "透過 https://github.com/huilang-me/cfsm-agent/releases 取得版本號",
  dockerVersionTip: "Docker 映像標籤（tag），預設 latest",
  ghProxyPlaceholder: "海外直連即可",
  pingNodes: "Ping 節點",
  customCt: "電信",
  customCu: "聯通",
  customCm: "移動",
  jwtSecretTip: "JWT 金鑰用於產生和驗證登入 token。請使用至少 32 個字元的隨機字串。",
  jwtSecretMinLength: "JWT Secret 至少需要 32 個字元",
  jwtSecretNoWhitespace: "JWT Secret 不應包含空格",
  adminLoginSettings: "管理員登入設定",
  changePassword: "修改密碼",
  cancelPasswordChange: "取消修改密碼",
  confirmPassword: "確認密碼",
  apiSecretTip: "伺服器回報使用的 API_SECRET 仍使用環境變數，不受此處密碼設定影響。",
  passwordRequired: "尚未設定管理員密碼，請先設定密碼再儲存。",
  passwordMismatch: "兩次輸入的密碼不一致",
  usernameRequired: "使用者名稱不能為空",
  securitySettings: "安全設定",
  enableTurnstile: "啟用 Turnstile 人機驗證碼（全域）",
  enableTurnstileLogin: "登入時啟用 Turnstile 人機驗證碼",
  turnstileLoginTip: "開啟後，僅在提交帳號密碼登入時出現並驗證。",
  turnstileSiteKey: "網站金鑰",
  turnstileSiteKeyPlaceholder: "Turnstile 網站金鑰",
  turnstileSecretKey: "金鑰",
  turnstileSecretKeyPlaceholder: "Turnstile 金鑰",
  turnstileTip: "Cloudflare Turnstile 提供機器人防護。請從 Cloudflare 控制台取得金鑰。",
  jwtSettings: "JWT 設定",
  jwtSecret: "JWT 金鑰",
  monthlyTraffic: "月流量",
  monthlyTrafficLimit: "月流量限制",
  trafficResetDay: "流量重置日",
  trafficResetDayTip: "動態設定（除「自動更新開關」外）約 4 分鐘自動生效；自動更新開關需重新複製指令執行。",
  trafficAlertPercent: "月流量告警臨界值",
  trafficAlertPercentTip: "逐台臨界值百分比；留空=跟隨全域設定，0=該伺服器關閉告警。每帳期僅通知一次，流量重置或臨界值/限額變更後可重新觸發。僅在設定了流量限制時生效。",
  trafficAlertThreshold: "月流量告警臨界值",
  trafficAlertThresholdTip: "全域預設：當某伺服器當月流量達到其流量限制的該百分比時通知一次；0=關閉。設定了逐台臨界值的伺服器優先於全域；逐台設為 0 則關閉該伺服器告警。",
  networkInterface: "統計網路卡",
  networkInterfaceHint: "例如 eth0,ens3，留空自動彙總",
  rxCorrection: "下行流量校正",
  txCorrection: "上行流量校正",
  correctionHint: "流量校正只填一項時另一項按 0 覆蓋清空",
  pingNodeTip: "覆寫全域預設節點，設 0 表示不使用該節點",
  serverLevel: "伺服器層級",
  trafficCalcType: "月流量計算類型",
  trafficCalcTotal: "上行+下行",
  trafficCalcUl: "僅上行",
  trafficCalcDl: "僅下行",
  trafficCalcMax: "取最大",
  cloudflareSettings: "Cloudflare 設定",
  cloudflareAccountIdPlaceholder: "例如 f81d307be4628170a3878394435c9c8b",
  cloudflareTokenPlaceholder: "Cloudflare API Token",
  cloudflareTokenTip: "查詢用量需要「帳戶分析讀取」權限。",
  queryD1Quota: "查詢 CF 帳戶用量",
  d1UsageQueried: "CF 帳戶用量查詢成功，請記得儲存",
  d1UsageDate: "統計日期",
  d1RowsRead: "已讀取列數",
  d1RowsWritten: "已寫入列數",
  workersRequests: "Workers 請求數",
  durableObjectsRequests: "DO 計費請求數（估算）",
  durableObjectsHttpRequests: "DO HTTP 請求",
  durableObjectsHibernationWakeups: "DO Hibernation 喚醒",
  durableObjectsInboundWebSocketMessages: "DO Inbound WebSocket 訊息",
  durableObjectsOutboundWebSocketMessages: "DO Outbound WebSocket 訊息",
  billingRatioOneToOne: "1:1 計費",
  billingRatioWebSocketIncoming: "20:1 計費",
  billingRatioNotBilled: "不計費",
  rawRequests: "原始",
  durableObjectsDuration: "DO 時長 (GB-s)",
  durableObjectsDurationTip: "與 WSS 開啟時長有關，24 小時開啟固定佔用約 85%，不受伺服器台數影響。",
  todayUsage: "當日消耗",
  yesterdayUsage: "昨日消耗",
  secondsAgo: "秒前",
  minutesAgo: "分鐘前",
  hoursAgo: "小時前",
  daysAgo: "天前",
  loginSuccessful: "登入成功",
  updateSuccess: "更新成功",
  serverDeleted: "伺服器已刪除",
  sortOrderSaved: "排序已儲存",
  batchDeleted: "已刪除伺服器",
  databaseRebuiltSuccess: "歷史資料清空成功",
  databaseRebuiltFailed: "歷史資料清空失敗",
  databaseUpgradeSuccess: "資料庫更新成功",
  databaseUpgradeFailed: "資料庫更新失敗",
  dbColumnsAdded: "資料庫欄位遺漏，已新增遺漏欄位，請再次點選儲存",
  serverUpdateFailed: "伺服器更新失敗",
  adminDisabled: "管理面板已停用",
  adminDisabledDesc: "使用多站台模式時，管理面板已停用。",
  backToDashboard: "返回儀表板",
  validationError: "驗證錯誤",
  turnstileSiteKeyRequired: "啟用 Turnstile 時必須填寫網站金鑰",
  turnstileSecretKeyRequired: "啟用 Turnstile 時必須填寫金鑰",
  tgBotTokenRequired: "啟用通知時必須填寫 Telegram Bot Token",
  notificationWebhookUrlRequired: "啟用自訂 Webhook 時必須填寫 Webhook URL",
  disableOfflineNotify: "關閉離線通知",
  disableNodeNotify: "關閉該節點通知",
  sendTestNotification: "傳送測試",
  testNotificationSent: "測試通知傳送成功，請記得儲存",
  testNotificationFailed: "測試通知傳送失敗",
  saveSuccess: "設定儲存成功",
  serverEdited: "伺服器更新成功",
  serversDeleted: "伺服器批次刪除成功",
  corsBlocked: "站台禁止跨網域存取，請修正。",
  exportServers: "匯出",
  importServers: "匯入",
  settingsImported: "站點與外觀設定已匯入（站點/外觀）",
  importSettingsNote: "帳號密碼、JWT、Turnstile、自訂 UA、告警規則、CSP、索引標記不參與匯出匯入；匯入會覆蓋目前站點設定。",
  serversExported: "伺服器匯出成功",
  serversExportFailed: "伺服器匯出失敗",
  serversImported: "伺服器匯入成功",
  noServersImported: "未匯入任何伺服器",
  noServersToImport: "沒有可匯入的伺服器資料",
  importing: "匯入中...",
  exporting: "匯出中...",
  importResult: "匯入結果",
  importedCount: "已匯入",
  skippedCount: "已略過",
  skippedIds: "略過的 ID",
  selectJsonFile: "選擇要匯入的 JSON 檔案",
  themeStore: "主題商店",
  donation: "捐贈支持",
  donationTitle: "請我喝杯奶茶吧",
  donationDesc: "如果 CFSM 對你有幫助，歡迎捐贈一點 token，給我買杯奶茶，支持專案繼續維護。",
  donationToken: "每一份支持都會變成繼續寫程式、修 bug 和熬夜監控的能量！",
  donationThanks: "謝謝你，讓這個小專案一直有動力更新～",
  donationWechat: "微信掃碼支持",
  donationQrAlt: "微信贊賞碼",
  themeStoreLoading: "載入主題清單",
  themeStoreLoadFailed: "主題商店載入失敗",
  themeStoreNetworkError: "無法載入主題商店。請檢查目前網路是否可以存取 raw.githubusercontent.com 和 api.github.com。建議更換節點後重試。",
  themeLoadVersions: "點選載入版本",
  themeLoadingVersions: "載入版本中...",
  themeStoreCreateTitle: "製作你自己的主題",
  themeStoreCreateDesc: "主題就是純靜態網站：依開發文件或 AI 提示詞產生 index.html 與 assets/，推到 GitHub，提交到主題商店，就會出現在這裡。",
  themeStoreDevDoc: "開發文件",
  themeStoreAiPrompt: "AI 提示詞",
  themeStoreSubmit: "提交主題",
  themeStoreWarning: "以下為第三方主題，未經驗證",
  themeStoreWarningDesc: "第三方主題可能包含惡意程式碼，請在確認來源可靠或審核原始碼後再使用。使用第三方主題造成的任何後果由使用者自行承擔。",
  currentTheme: "目前主題",
  builtinTheme: "內建主題",
  filterMore: "更多",
  noSamples: "無樣本",
  expand: "展開",
  collapse: "收合",
  mikusThemeTagBuiltin: "內建",
  mikusThemeTagSakura: "櫻花",
  mikusThemeDescription: "內建 Mikus 模式，啟用後切回預設主題，並開啟 Mikus 配色、載入頁與櫻花動效。",
  useBuiltinTheme: "使用內建主題",
  customThemeUrl: "自訂主題 URL",
  customThemeUrlDesc: "貼上自訂第三方 GitHub 主題建置產物位址，建議使用 commit id 固定版本，例如 https://github.com/Author/theme/tree/commitid",
  applyCustomTheme: "套用自訂",
  switchTheme: "切換主題",
  themeApplied: "主題切換成功",
  themeApplyFailed: "主題切換失敗",
  themeUrlUnavailable: "目前版本缺少可用的主題 URL",
  invalidThemeUrl: "主題 URL 格式無效",
  invalidUserAgent: "自訂 UA 含非法字元，僅支援字母、數字、空格與 . _ - / , : ; ( ) + = @ # * ? ~，長度不超過 100",
  invalidAppPassword: "App 存取口令不合法：需為 16-32 位英文字元（字母、數字或符號），且不能包含空格",
  version: "版本",
  changelog: "更新日誌",
  preview: "預覽",
  demo: "示範",
  view: "檢視",
  threeNetPanelCount: "首頁面板顯示線路數",
  themeConfigInvalidCount: "請輸入 0 到 8 之間的數字",
  themeConfigLoginRequired: "請先登入管理後台再修改主題設定",
  themeConfigReset: "重設",
  colorPresetTitle: "配色風格",
  colorPresetDefault: "預設",
  colorPresetOcean: "海洋藍",
  colorPresetAurora: "極光綠",
  colorPresetNebula: "星雲紫",
  colorPresetSunset: "暖陽橙",
  colorPresetSakura: "櫻花粉",
  colorPresetForest: "森林綠",
  colorPresetGraphite: "石墨灰"
}, FP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UP
}, Symbol.toStringTag, { value: "Module" })), WP = {
  passkeyRateLimited: "試行回数が多すぎます。しばらくしてからもう一度お試しください。",
  passkeyBrowserPrompt: "ブラウザーの画面で認証を完了してください…",
  passkeyPreparing: "パスキーを準備中…",
  passkeyVerifying: "パスキーを確認中…",
  passkeyPasswordInvalid: "管理者パスワードが正しくありません。",
  passkeyOptionsFailed: "登録を開始できません。接続とログイン状態を確認してください。",
  passkeyVerifyFailed: "ブラウザーから認証情報が返されましたが、サーバーでの検証に失敗しました。",
  passkeyAlreadyRegistered: "このセキュリティキーはすでに登録されています。",
  passkeyUserVerificationRequired: "キーはユーザー検証に対応する必要があります。FIDO2 PINを設定して再試行してください。",
  passkeyDeviceFailed: "検証が完了しませんでした。キャンセル、タイムアウト、またはキーの要件不適合が考えられます。接続とPINを確認してください。",
  passkeyLogin: "パスキーでログイン",
  passkeyTitle: "パスキー",
  passkeyDescription: "セキュリティキー、iCloudキーチェーン、Windows Helloに対応。予備キーの追加を推奨します。",
  passkeySameOrigin: "対応ブラウザで、このWorker自身のHTTPSドメインからアクセスしてください。",
  passkeyEmpty: "パスキーはまだ登録されていません。",
  passkeyName: "名前",
  passkeyNamePlaceholder: "例：YubiKey、iPhone",
  passkeyPassword: "現在の管理者パスワード",
  passkeyPasswordHint: "追加・削除には現在の管理者パスワードを入力してください。",
  passkeyPasswordRequired: "先に管理者パスワードを入力してください。",
  passkeyAdd: "パスキーを追加",
  passkeyDelete: "削除",
  passkeyDeleteConfirm: "このパスキーを削除しますか？",
  passkeyAdded: "パスキーを追加しました。",
  passkeyDeleted: "パスキーを削除しました。",
  passkeyFailed: "操作が失敗またはキャンセルされました。パスワードを確認して再試行してください。",
  theme: "テーマ",
  themeAuto: "システムに従う",
  themeDark: "ダーク",
  themeLight: "ライト",
  language: "言語",
  languageAuto: "自動",
  barChart: "棒グラフ",
  ringChart: "リンググラフ",
  expandChart: "グラフを拡大",
  collapseChart: "グラフを縮小",
  table: "テーブル",
  map: "マップ",
  admin: "管理",
  all: "すべて",
  totalServers: "サーバー総数",
  totalTraffic: "総トラフィック",
  realtimeSpeed: "リアルタイム速度",
  remainingValue: "残存価値",
  totalValue: "総額",
  monthlyAverageCost: "月平均",
  configuredPrices: "価格設定済み",
  todayExchangeRates: "本日のレート",
  exchangeRateBase: "基準",
  exchangeRateSource: "レート取得元",
  financeMissingExpire: "期限なし",
  financeRateNetwork: "ライブ API",
  financeRateCache: "当日キャッシュ",
  financeRateStaleCache: "キャッシュ代替",
  financeRateDefault: "内蔵フォールバック",
  realtime: "リアルタイム",
  liveConnectionTimeoutTitle: "リアルタイム接続が終了しました",
  liveConnectionTimeoutMessage: "リアルタイム接続が時間制限に達したため切断されました。ライブ更新の受信を続けますか？",
  continueConnection: "続行",
  online: "オンライン",
  offline: "オフライン",
  noServer: "サーバーがありません。",
  noServerSuffix: "で追加してください。",
  backToAdmin: "管理パネル",
  back: "cd ..",
  hostname: "ホスト名",
  region: "リージョンコード",
  regionPlaceholder: "空欄で自動検出",
  osArch: "OS/ARCH",
  ram: "RAM",
  disk: "DISK",
  use: "使用率",
  dl: "DL",
  ul: "UL",
  rx: "RX",
  tx: "TX",
  update: "更新",
  noData: "データなし",
  ago: "前",
  uptime: "稼働時間",
  architecture: "アーキテクチャ",
  os: "OS",
  kernelVersion: "カーネル",
  cpuModel: "CPU モデル",
  cpuInfo: "CPU 情報",
  loadAvg: "平均負荷",
  bootTime: "起動時刻",
  totalDiskRam: "ディスク / メモリ合計",
  trafficIn: "受信トラフィック",
  trafficOut: "送信トラフィック",
  traffic: "トラフィック",
  lastReport: "最終レポート",
  cpuUsage: "CPU 使用率",
  gpuInfo: "GPU 情報",
  gpuUsage: "GPU 使用率",
  gpuMemory: "GPU メモリ",
  gpuClock: "GPU SM クロック",
  gpuPower: "GPU 電力",
  memoryUsage: "メモリ使用率",
  diskUsage: "ディスク使用率",
  diskIo: "ディスク IO",
  networkTraffic: "ネットワーク",
  processes: "プロセス",
  connections: "接続数",
  latencyMonitor: "レイテンシモニター",
  packetLoss: "パケットロス",
  databaseUpgradeRequired: "管理パネルで「データベースをアップグレード」をクリックしてください",
  swap: "スワップ",
  used: "使用中",
  lastUpdate: "最終更新",
  workersUpdateAvailable: "新しいバージョン",
  autoRefresh: "自動更新",
  seconds: "秒",
  timeout: "タイムアウト",
  loadAvgMonitor: "平均負荷モニター",
  load1m: "1 分",
  load5m: "5 分",
  load15m: "15 分",
  apiEndpoint: "API エンドポイント",
  switchingSite: "サイトを切り替えています...",
  username: "ユーザー名",
  password: "パスワード",
  login: "ログイン",
  missingCredentials: "ユーザー名とパスワードを入力してください",
  invalidCredentials: "ユーザー名またはパスワードが正しくありません",
  adminPanel: "管理パネル",
  sudoStatus: "sudo systemctl status",
  refresh: "更新",
  logout: "ログアウト",
  dashboard: "ダッシュボード",
  total: "合計",
  avgCpu: "平均 CPU",
  servers: "サーバー",
  settings: "設定",
  clickToCopy: "クリック",
  installCommand: "インストールコマンドをコピーして対象サーバーにエージェントを導入",
  collectIntervalHint: "収集間隔が 0 の場合、サンプリングはレポート間隔に従います。",
  serverName: "サーバー名",
  group: "グループ",
  tags: "タグ",
  note: "メモ",
  tagsPlaceholder: "カンマ区切り",
  notePlaceholder: "内部メモ（管理パネルでのみ表示）",
  addServer: "サーバー追加",
  batchDelete: "一括削除",
  toggleAll: "全選択切替",
  refreshCache: "キャッシュ更新",
  cacheCleared: "サーバーリストのキャッシュをクリアしました",
  price: "価格",
  free: "無料",
  currency: "通貨",
  billingCycle: "課金サイクル",
  autoRenewal: "自動更新",
  expire: "残り時間",
  expireDays: "日",
  day: "日",
  days: "日",
  month: "か月",
  expired: "期限切れ",
  agentVersion: "エージェント版",
  status: "ステータス",
  actions: "操作",
  noServers: "サーバーが設定されていません",
  dragSort: "ドラッグで並び替え",
  copy: "コピー",
  edit: "編集",
  delete: "削除",
  custom: "カスタム",
  siteTitle: "サイトタイトル",
  appearance: "外観",
  bgImage: "背景画像",
  mobileBgImage: "モバイル背景画像",
  remoteImageTip: "外部画像を使用する場合は、画像のドメインを CSP 静的ドメインホワイトリストに追加してください。",
  favicon: "ファビコン",
  upload: "アップロード",
  customHead: "カスタム <head>",
  customScript: "カスタムスクリプト（フッター）",
  themeOptions: "テーマオプション JSON",
  mikusThemeToggle: "Mikus モードを有効化",
  themeOptionsTip: 'サードパーティテーマのカスタムオプション。JSON オブジェクトである必要があります。例えば {"mikus":1} で Mikus フロントエンドレイヤーが有効になります。',
  cspStatic: "CSP 静的ドメインホワイトリスト",
  cspStaticTip: "許可する静的ファイルドメイン。例: https://unpkg.com,https://cdn.jsdelivr.net",
  cspApi: "CSP API ドメインホワイトリスト",
  cspApiTip: "許可する API ドメイン。例: https://api.example.com",
  cspWarning: "サードパーティの CSS/JS を追加する際は、提供元が信頼できることを確認してください。使用前に JS のソースコードを AI に送って安全性を分析することを推奨します。確認後は、リソースを自身の GitHub リポジトリにホストし、CDN 経由で読み込んでください。誤った使用は重大なセキュリティリスクを招く可能性があります。外部リソースは上記の CSP 静的ドメインホワイトリストに追加する必要があります。",
  cspInvalidDomain: "CSP ドメインの形式が正しくありません。パスやクエリを含まない https:// のオリジンのみ使用できます。",
  displayMode: "デフォルト表示モード",
  displayModeBar: "棒グラフ",
  displayModeRing: "リンググラフ",
  displayModeTable: "テーブル",
  defaultTheme: "デフォルト外観",
  defaultLanguage: "デフォルト言語",
  displayOptions: "表示オプション",
  autoDiscovery: "自動検出",
  autoDiscoveryTip: "有効にすると、サーバー ID なしでレポートするエージェントが自動的に作成されます。新しいサーバーがダッシュボードに表示されるまで最大 2 分かかる場合があります。詳細は README を参照してください。",
  autoAdd: "自動追加",
  autoAddDisabledTip: "自動検出は無効です。設定 → サイト設定 → 自動検出 で有効にしてください。",
  autoAddNamePlaceholder: "空欄の場合はパブリック IP を使用",
  wssReportEnabled: "エージェント WSS レポート",
  customUserAgent: "カスタム UA",
  customUserAgentTip: "エージェントのレポート要求で使う User-Agent です。Cloudflare のドメインセキュリティルールの許可に使用します。エージェント v1.1.1 以降が必要です。",
  customUserAgentDocs: "README を参照",
  customUserAgentInvalid: "英数字・スペースと . _ - / , : ; ( ) + = @ # * ? ~ のみ使用可能、100 文字以内",
  appPassword: "アプリ用アクセスパスワード",
  appPasswordTip: "サードパーティ製アプリや iOS ウィジェットが X-App-Password ヘッダーにこのパスワードを付けると、非公開サイトと非表示サーバーを閲覧できます。空欄で無効になります。",
  appPasswordPlaceholder: "16〜32 文字、空欄で無効",
  appPasswordInvalid: "スペースを含まない 16〜32 文字の半角英数字・記号で入力してください",
  wssReportTip: "WSS を有効にすると Workers リクエストが減り、リアルタイム性が向上しますが、24 時間有効にするとサーバー数に関係なく Durable Objects の実行時間の約 85% を消費します。他のプロジェクトが Durable Objects を使用していない場合に有効化を推奨します。",
  wssReportHours: "有効時間帯",
  wssReportHoursTip: "パネルには現地時刻が表示されます。設定は UTC 時刻で保存され、選択した時間帯以外はエージェントが HTTP レポートを使用します。",
  localTime: "現地時刻",
  hoursSelected: "時間を選択",
  agentWssMinVersion: "エージェント v1.0.10 以上が必要",
  selectAll: "すべて選択",
  clear: "クリア",
  frontendWsTimeoutMinutes: "フロントエンド WSS タイムアウト（分）",
  frontendWsTimeoutMinutesTip: "この分数を超えるとフロントエンドのリアルタイム接続を切断します。0 でタイムアウト無効。",
  invalidFrontendWsTimeoutMinutes: "フロントエンド WSS タイムアウトは 0〜1440 分の整数である必要があります。",
  publicAccess: "公開アクセス",
  showPrice: "価格を表示",
  showExpire: "有効期限を表示",
  showTf: "トラフィック上限を表示",
  showThreeNetDetails: "ホームでノード詳細を表示",
  longHistoryPoints: "長期履歴ポイント数",
  longHistoryPointsTip: "1 時間を超えるクエリで返すサンプル数。ポイントを増やすと詳細になりますが、読み取る行数も増えます。",
  historyPointCount: "{points} ポイント",
  notifications: "通知",
  offlineAlert: "オフライン通知",
  expireReminder: "有効期限リマインダー",
  disabled: "無効",
  enable: "有効化",
  enabled: "有効",
  notifyOffline: "オフライン通知の遅延",
  notifyOfflineMinutes: "{minutes} 分オフライン後に通知",
  notifyExpireDays: "有効期限の {days} 日前に通知",
  expireReminderCustomPlaceholder: "有効期限の何日前か（1-365）",
  resourceAlert: "リソース負荷アラート",
  resourceAlertWindow: "アラート期間",
  resourceAlertWindowMinutes: "{minutes} 分間",
  resourceAlertAddRule: "ルール追加",
  resourceAlertEmpty: "リソース負荷アラートのルールが設定されていません",
  resourceAlertRule: "ルール",
  resourceAlertRuleName: "名前",
  resourceAlertRuleNamePlaceholder: "例: CPU 高負荷",
  resourceAlertMetric: "監視項目",
  resourceAlertThreshold: "しきい値",
  resourceAlertServers: "サーバー",
  resourceAlertInterval: "間隔",
  resourceAlertIntervalMinutes: "{minutes} 分",
  resourceAlertMode: "発動モード",
  resourceAlertModeContinuous: "期間内のすべてのサンプルがしきい値を超過",
  resourceAlertModeAverage: "期間内の平均がしきい値を超過",
  resourceAlertCpu: "CPU しきい値 (%)",
  resourceAlertRam: "RAM しきい値 (%)",
  resourceAlertNetIn: "ダウンロードしきい値 (Mbps)",
  resourceAlertNetOut: "アップロードしきい値 (Mbps)",
  resourceAlertNetTotal: "ネットワーク合計しきい値 (Mbps)",
  resourceAlertTip: "注意: CF Workers の制限により、ルールが多すぎると通知の遅延や欠落が発生する場合があります。",
  telegramToken: "Telegram / WeChat / Feishu / DingTalk / Bark / Server酱 / WxPusher / Gotify / OneBot",
  chatId: "Chat ID",
  notificationChannel: "通知チャネル",
  builtinNotification: "内蔵チャネル",
  customWebhook: "カスタム Webhook",
  smtpNotification: "SMTP メール",
  smtpHost: "SMTP ホスト",
  smtpPort: "ポート",
  smtpPortTip: "Cloudflare Workers はポート 25 をブロックします。465（暗黙的 TLS）または 587（STARTTLS）を使用してください。",
  smtpSecure: "暗号化",
  smtpSecureAuto: "自動（ポートによる）",
  smtpSecureTls: "暗黙的 TLS (465)",
  smtpUser: "ユーザー名",
  smtpPassword: "パスワード",
  smtpFrom: "送信元",
  smtpTo: "宛先",
  smtpInvalidEmail: "有効なメールアドレスを入力してください。例: user@example.com",
  smtpToRequired: "少なくとも 1 つの宛先メールアドレスが必要です",
  smtpFieldRequired: "この項目は必須です",
  smtpPortInvalid: "ポートが正しくありません（1-65535、ポート 25 は Cloudflare Workers によりブロックされています）",
  smtpSecureRequired: "465/587 以外のポートでは暗号化方式を明示する必要があります",
  smtpConfigInvalid: "SMTP 設定が不完全です。SMTP 設定を確認してください",
  smtpTip: "cloudflare:sockets 経由でプレーンテキストメールを送信します（ポート 25 は Cloudflare Workers によりブロックされています）。QQ / 163 はログインパスワードではなく SMTP 認証コードが必要です。",
  webhookUrl: "Webhook URL",
  webhookMethod: "メソッド",
  webhookFormat: "ボディ形式",
  webhookHeaders: "ヘッダー",
  webhookBody: "ボディ",
  webhookParams: "クエリパラメータ",
  notificationTemplate: "通知テンプレート",
  notificationLanguage: "通知言語",
  notificationLanguageTip: "Telegram などのチャネルに送信されるアラートメッセージの言語。カスタムテンプレートと Webhook ボディは翻訳されません。",
  notificationTimezone: "通知タイムゾーン",
  notificationTimezoneTip: "通知の出力時刻と有効期限リマインダーのスケジュールにのみ使用されます。Asia/Shanghai のような IANA タイムゾーンを使用してください。",
  expireNotificationTime: "有効期限リマインダー時刻",
  expireNotificationTimeTip: "通知タイムゾーンで指定した時刻に毎日、有効期限を確認してリマインダーを送信します。0〜23 を使用してください。",
  invalidNotificationTimezone: "通知タイムゾーンは有効な IANA タイムゾーンである必要があります。例: Asia/Shanghai",
  invalidExpireNotificationTime: "有効期限通知の時刻は 0〜23 の整数である必要があります。",
  invalidExpireReminder: "有効期限リマインダーは 0〜365 日の整数である必要があります。",
  saveConfig: "設定を保存",
  saveHint: "変更は保存後にのみ反映されます",
  saving: "保存中...",
  hostnameLabel: "ホスト名",
  groupName: "グループ名",
  expirationDate: "有効期限",
  trafficLimit: "トラフィック上限",
  autoUpdate: "自動更新",
  autoUpdateRiskTitle: "自動更新のリスク",
  autoUpdateRiskDesc: "エージェントを導入したサーバーの安全性を確保してください。自動更新を有効にした後、インストールコマンドをコピーしてサーバー上で実行してください。",
  autoUpdateRiskConfirm: "自動更新を有効化",
  autoUpdateRiskCancel: "キャンセル",
  hideFromPublic: "公開ページで非表示",
  cancel: "キャンセル",
  save: "保存",
  dangerWarning: "危険な操作",
  deleteConfirm: "監視パネルからこのサーバーのすべてのデータが削除されます",
  recommendUninstall: "先に対象サーバーでアンインストールコマンドを実行してエージェントを停止することを推奨します",
  clickToCopyCmd: "コピーボタンをクリックしてアンインストールコマンドをコピー",
  confirmDelete: "削除を確認",
  cancelAction: "キャンセル",
  default: "デフォルト",
  editConf: "設定を編集",
  deleteConf: "設定を削除",
  errorInvalidUsername: "[ERROR] ユーザー名またはパスワードが正しくありません",
  serverUpdateFailedDbNotReady: "[ERROR] 更新に失敗しました。データベース管理で「データベースをアップグレード」をクリックして新しいフィールドを移行してください。",
  configSaved: "[OK] 設定を保存しました！再読み込み中...",
  saveFailed: "[ERROR] 保存に失敗しました: ",
  saveFailedUnknown: "[ERROR] 保存に失敗しました: 不明なエラー",
  addFailed: "[ERROR] 追加に失敗しました",
  serverAdded: "サーバーを追加しました",
  serverUpdated: "サーバーを更新しました",
  batchEdit: "一括編集",
  batchEditSuccess: "[OK] {count} 台のサーバーを一括編集しました",
  noBatchEditFields: "更新する項目を選択してください",
  selectServersToEdit: "編集するサーバーを選択してください",
  basicInfo: "基本情報",
  billing: "課金",
  deleteFailed: "[ERROR] 削除に失敗しました",
  selectServers: "[WARN] 削除するサーバーを選択してください",
  confirmDeleteServers: "[?] 選択した ",
  irreversible: " 台のサーバーを削除しますか？この操作は元に戻せません。",
  imageSizeWarning: "[WARN] 画像サイズが 800KB を超えています。外部 URL の使用を検討してください",
  enterServerName: "[WARN] サーバー名を入力してください",
  loginRequired: "1 日を超える履歴データを表示するにはログインしてください",
  loginRequiredTitle: "ログインが必要です",
  verificationFailed: "検証に失敗しました",
  refreshToRetry: "ページを更新して再試行してください",
  verificationError: "検証エラー",
  turnstileNotSupported: "Turnstile 非対応",
  turnstileNotSupportedDesc: "リモートエンドポイントの 1 つで Turnstile が有効になっています。このダッシュボードを使用するには、リモートサイトで無効にしてください。",
  turnstileSiteKeyMismatch: "Turnstile サイトキーの不一致",
  turnstileSiteKeyMismatchDesc: "複数のサイトで Turnstile が有効ですが、サイトキーが異なります。有効なすべてのサイトで同じ Turnstile ウィジェットを使用してください。",
  dbManagement: "データベース管理",
  upgradeDatabase: "データベースをアップグレード",
  clearHistory: "履歴データを削除",
  upgradeDesc: "データベーススキーマを最新バージョンに更新",
  clearHistoryDesc: "サーバーと設定を保持したまま、すべての監視履歴を削除",
  dangerOperation: "危険な操作",
  clearHistoryWarning: "この操作はすべての監視履歴を削除します。サーバーリストと設定は保持されます。この操作は元に戻せません！",
  confirmClear: "削除を確認",
  operationSuccess: "操作に成功しました",
  operationFailed: "操作に失敗しました",
  invalidServerName: "サーバー名が正しくありません",
  invalidPingNodeFormat: "ドメイン、IPv4、IPv6、または host:port を使用してください。ポート付き IPv6 は [address]:port の形式が必要です。ポートは 1-65535 です。",
  invalidNetworkInterface: "ネットワークインターフェース名が正しくありません。カンマ区切りで指定してください。例: eth0,ens3",
  invalidThemeOptionsFormat: 'テーマオプションは有効な JSON オブジェクトである必要があります。例: {"a":1,"b":2}',
  invalidTrafficCorrection: "トラフィック補正値は 0〜1,000,000 GB の数値である必要があります",
  invalidServerId: "サーバー ID が正しくありません",
  missingSortData: "並び替えデータがありません",
  invalidSortId: "並び替えデータに無効な ID が含まれています",
  selectServersToDelete: "削除するサーバーを選択してください",
  invalidServerIdInList: "無効なサーバー ID が含まれています",
  unknownAction: "不明な操作",
  cloudflareTokenRequired: "先に Cloudflare Token を設定してください",
  cloudflareAccountIdRequired: "先に Cloudflare Account ID を設定してください",
  upgrading: "アップグレード中...",
  clearing: "削除中...",
  collectInterval: "収集間隔（秒）",
  reportInterval: "レポート間隔（秒）",
  wssReportInterval: "WSS レポート間隔（秒）",
  connectionMode: "接続モード",
  connectionModeAuto: "自動（WSS + POST フォールバック）",
  connectionModeHttp: "HTTP POST のみ",
  pingMode: "Ping モード",
  pingModeIcmpRootHint: "ICMP はエージェントが root でインストールされている場合のみサポートされます。",
  wssReportDisabledConnectionHint: "WSS レポートは全体で無効になっています。設定で有効にしてください。",
  targetOs: "対象システム",
  installMode: "インストールユーザー",
  installModeCurrentUser: "現在のユーザー",
  installModeCfsmUser: "専用 cfsm ユーザー",
  nonRootInstallTip: "専用 cfsm ユーザーは systemd の Linux でのみサポートされ。",
  nonRootInstallRunStep: "cfsm ユーザーとしてインストール",
  nonRootInstallSudoRequired: "非 root インストールの設定に必要です。",
  dedicatedUserSystemdRequired: "Alpine/OpenRC などの非対応システムでは systemd が必要です。「現在のユーザー」を選択してください。",
  uninstallMode: "インストールユーザー",
  uninstallModeCurrentUser: "現在のユーザー",
  uninstallModeCfsmUser: "専用 cfsm ユーザー",
  nonRootUninstallUserMissing: "cfsm ユーザーが存在しません。「現在のユーザー」を選択するか、元のインストールユーザーを確認してください。",
  dedicatedUserUninstallUnsupported: "非対応システムでは systemd が必要です。「現在のユーザー」を選択してください。",
  httpsRequired: "現在のプロトコルは HTTP です。インストールコマンドをコピーするには HTTPS を使用してください。",
  copied: "コピーしました！",
  close: "閉じる",
  agentVersionSelect: "エージェント版",
  agentVersionShell: "Shell 版",
  agentVersionGo: "Go 版",
  installVersionPlaceholder: "デフォルトで最新版",
  ghProxy: "サードパーティ GitHub プロキシ",
  ghProxyTip: "サードパーティのプロキシはダウンロードしたインストールファイルを閲覧・改変できる可能性があり、セキュリティリスクを招く場合があります。",
  installInstance: "インスタンス名",
  installInstanceTip: "空欄の場合は既定インスタンスを使用します。名前を指定すると同じマシンに複数の独立したインスタンスをインストールでき、サービス名と設定パスにサフィックスが付きます。使用できるのは英字、数字、アンダースコア、ハイフンのみです。",
  installInstancePlaceholder: "既定インスタンス",
  uninstallAllInstances: "すべてのインスタンスをアンインストール",
  uninstallAllInstancesTip: "チェックするとこのマシンのすべてのインスタンスをアンインストールし（--all と同等）、インスタンス名は無視されます。",
  instanceNameInvalid: "インスタンス名に使用できるのは英字、数字、アンダースコア、ハイフンのみで、最大 32 文字です。他の文字は無視されます",
  installVersionTip: "最新版は https://github.com/huilang-me/cfsm-agent/releases から取得してください",
  dockerVersionTip: "Docker イメージタグ。デフォルトは latest",
  ghProxyPlaceholder: "直接接続",
  pingNodes: "Ping ノード",
  customCt: "電信",
  customCu: "聯通",
  customCm: "移動",
  jwtSecretTip: "JWT シークレットはログイントークンの生成と検証に使用されます。32 文字以上のランダムな文字列を使用してください。",
  jwtSecretMinLength: "JWT Secret は 32 文字以上である必要があります",
  jwtSecretNoWhitespace: "JWT Secret に空白を含めないでください",
  adminLoginSettings: "管理者ログイン設定",
  changePassword: "パスワード変更",
  cancelPasswordChange: "パスワード変更をキャンセル",
  confirmPassword: "パスワード確認",
  apiSecretTip: "サーバーレポート用の API_SECRET は、ここのパスワード設定に関係なく環境変数を使用します。",
  passwordRequired: "管理者パスワードが設定されていません。保存する前に設定してください。",
  passwordMismatch: "パスワードが一致しません",
  usernameRequired: "ユーザー名は必須です",
  securitySettings: "セキュリティ設定",
  enableTurnstile: "Turnstile CAPTCHA を有効化（全体）",
  enableTurnstileLogin: "ログイン時に Turnstile CAPTCHA を有効化",
  turnstileLoginTip: "有効にすると、Turnstile 検証はログイン時のみ必要になります。",
  turnstileSiteKey: "Site Key",
  turnstileSiteKeyPlaceholder: "Turnstile Site Key",
  turnstileSecretKey: "Secret Key",
  turnstileSecretKeyPlaceholder: "Turnstile Secret Key",
  turnstileTip: "Cloudflare Turnstile はボット対策を提供します。キーは Cloudflare ダッシュボードから取得してください。",
  jwtSettings: "JWT 設定",
  jwtSecret: "JWT Secret",
  monthlyTraffic: "月間トラフィック",
  monthlyTrafficLimit: "トラフィック上限",
  trafficResetDay: "トラフィックリセット日",
  trafficResetDayTip: "動的設定（「自動更新スイッチ」を除く）は約 4 分で自動的に反映されます。自動更新スイッチはコマンドを再コピーして実行する必要があります。",
  trafficAlertPercent: "トラフィック警告しきい値",
  trafficAlertPercentTip: "サーバーごとのしきい値（%）。空欄 = 全体設定に従う、0 = このサーバーの通知を無効化。課金サイクルごとに 1 回通知し、トラフィックのリセット後、またはしきい値/上限の変更後に再び有効になります。トラフィック上限が設定されている場合のみ適用されます。",
  trafficAlertThreshold: "月間トラフィック警告しきい値",
  trafficAlertThresholdTip: "全体のデフォルト: サーバーの月間トラフィックが上限のこの割合に達したときに 1 回通知します。0 = オフ。独自のしきい値を持つサーバーはこれを上書きし、0 に設定したサーバーは通知が無効になります。",
  networkInterface: "ネットワークインターフェース",
  networkInterfaceHint: "例: eth0,ens3",
  rxCorrection: "ダウンロード補正",
  txCorrection: "アップロード補正",
  correctionHint: "片方のみ設定した場合、もう片方は 0 で上書きされます。",
  pingNodeTip: "全体のデフォルトノードを上書きします。0 に設定するとそのノードを使用しません。",
  serverLevel: "サーバー",
  trafficCalcType: "トラフィック計算方式",
  trafficCalcTotal: "アップロード + ダウンロード",
  trafficCalcUl: "アップロードのみ",
  trafficCalcDl: "ダウンロードのみ",
  trafficCalcMax: "両方の最大値",
  cloudflareSettings: "Cloudflare 設定",
  cloudflareAccountIdPlaceholder: "例: f81d307be4628170a3878394435c9c8b",
  cloudflareTokenPlaceholder: "Cloudflare API Token",
  cloudflareTokenTip: "使用量を照会するには Account Analytics Read 権限が必要です。",
  queryD1Quota: "CF アカウント使用量を照会",
  d1UsageQueried: "CF アカウント使用量の照会に成功しました。保存を忘れずに。",
  d1UsageDate: "使用量の日付",
  d1RowsRead: "読み取り行数",
  d1RowsWritten: "書き込み行数",
  workersRequests: "Workers リクエスト",
  durableObjectsRequests: "DO 課金対象リクエスト（推定）",
  durableObjectsHttpRequests: "DO HTTP リクエスト",
  durableObjectsHibernationWakeups: "DO ハイバネーション復帰",
  durableObjectsInboundWebSocketMessages: "DO 受信 WebSocket メッセージ",
  durableObjectsOutboundWebSocketMessages: "DO 送信 WebSocket メッセージ",
  billingRatioOneToOne: "1:1 課金",
  billingRatioWebSocketIncoming: "20:1 課金",
  billingRatioNotBilled: "課金なし",
  rawRequests: "実数",
  durableObjectsDuration: "DO 実行時間 (GB-s)",
  durableObjectsDurationTip: "WSS 接続の稼働時間が使用量に影響します。24 時間の常時接続では約 85% を安定的に消費し、これはサーバー数に比例しません。",
  todayUsage: "本日の使用量",
  yesterdayUsage: "昨日の使用量",
  secondsAgo: "秒前",
  minutesAgo: "分前",
  hoursAgo: "時間前",
  daysAgo: "日前",
  loginSuccessful: "ログインに成功しました",
  updateSuccess: "更新に成功しました",
  serverDeleted: "サーバーを削除しました",
  sortOrderSaved: "並び順を保存しました",
  batchDeleted: "サーバーを削除しました",
  databaseRebuiltSuccess: "履歴データを削除しました",
  databaseRebuiltFailed: "履歴データの削除に失敗しました",
  databaseUpgradeSuccess: "データベースのアップグレードに成功しました",
  databaseUpgradeFailed: "データベースのアップグレードに失敗しました",
  dbColumnsAdded: "データベースの列が不足しています。不足している列を追加しました。もう一度保存をクリックしてください。",
  serverUpdateFailed: "サーバーの更新に失敗しました",
  adminDisabled: "管理パネルは無効です",
  adminDisabledDesc: "マルチサイトモードでは管理パネルは無効になります。",
  backToDashboard: "ダッシュボードに戻る",
  validationError: "検証エラー",
  turnstileSiteKeyRequired: "Turnstile を有効にする場合、Site Key は必須です",
  turnstileSecretKeyRequired: "Turnstile を有効にする場合、Secret Key は必須です",
  tgBotTokenRequired: "通知を有効にする場合、Telegram Bot Token は必須です",
  notificationWebhookUrlRequired: "カスタム Webhook を有効にする場合、Webhook URL は必須です",
  disableOfflineNotify: "オフライン通知を無効化",
  disableNodeNotify: "このノードの通知を無効化",
  sendTestNotification: "テスト送信",
  testNotificationSent: "テスト通知を送信しました。保存を忘れずに。",
  testNotificationFailed: "テスト通知の送信に失敗しました",
  saveSuccess: "設定を保存しました",
  serverEdited: "サーバーを更新しました",
  serversDeleted: "サーバーを削除しました",
  corsBlocked: "サイトがクロスオリジンアクセスをブロックしています。修正してください。",
  exportServers: "エクスポート",
  importServers: "インポート",
  settingsImported: "サイト設定と外観設定をインポートしました（サイト/外観）",
  importSettingsNote: "認証情報、JWT、Turnstile、カスタム UA、アラートルール、CSP、インデックスフラグはエクスポート/インポートされません。インポートは現在の設定を上書きします。",
  serversExported: "サーバーのエクスポートに成功しました",
  serversExportFailed: "サーバーのエクスポートに失敗しました",
  serversImported: "サーバーのインポートに成功しました",
  noServersImported: "インポートされたサーバーはありません",
  noServersToImport: "インポートするサーバーデータがありません",
  importing: "インポート中...",
  exporting: "エクスポート中...",
  importResult: "インポート結果",
  importedCount: "インポート済み",
  skippedCount: "スキップ",
  skippedIds: "スキップされた ID",
  selectJsonFile: "インポートする JSON ファイルを選択",
  themeStore: "テーマストア",
  donation: "支援",
  donationTitle: "ミルクティーを奢る",
  donationDesc: "CFSM がお役に立ったなら、少額の寄付で継続的なメンテナンスを支援してください。",
  donationToken: "すべての寄付が、より多くのコード、修正、深夜の監視の力になります。",
  donationThanks: "この小さなプロジェクトを支えてくれてありがとうございます！",
  donationWechat: "WeChat でスキャンして支援",
  donationQrAlt: "WeChat 投げ銭 QR コード",
  themeStoreLoading: "テーマを読み込み中",
  themeStoreLoadFailed: "テーマストアの読み込みに失敗しました",
  themeStoreNetworkError: "テーマストアを読み込めません。raw.githubusercontent.com と api.github.com へのネットワークアクセスを確認してください。ノードを変更して再試行することを推奨します。",
  themeLoadVersions: "クリックしてバージョンを読み込む",
  themeLoadingVersions: "バージョンを読み込み中...",
  themeStoreCreateTitle: "自分のテーマを作る",
  themeStoreCreateDesc: "テーマは静的サイトです。開発ドキュメントか AI プロンプトで index.html と assets/ を作り、GitHub に push してストアに登録すると、ここに並びます。",
  themeStoreDevDoc: "開発ドキュメント",
  themeStoreAiPrompt: "AI プロンプト",
  themeStoreSubmit: "テーマを登録",
  themeStoreWarning: "サードパーティテーマは検証されていません",
  themeStoreWarningDesc: "サードパーティテーマには悪意のあるコードが含まれる可能性があります。使用前にソースコードを確認するか、作者を信頼してください。サードパーティテーマによる損害について CFSM は責任を負いません。",
  currentTheme: "現在のテーマ",
  builtinTheme: "内蔵テーマ",
  filterMore: "もっと見る",
  noSamples: "サンプルなし",
  expand: "展開",
  collapse: "折りたたむ",
  mikusThemeTagBuiltin: "内蔵",
  mikusThemeTagSakura: "桜",
  mikusThemeDescription: "内蔵の Mikus モード。デフォルトテーマに戻り、Mikus の配色、ローディング画面、桜のエフェクトを有効にします。",
  useBuiltinTheme: "内蔵を使用",
  customThemeUrl: "カスタムテーマ URL",
  customThemeUrlDesc: "GitHub のテーマツリー URL を貼り付けてください。コミット ID を使うとバージョンを固定できます。例: https://github.com/Author/theme/tree/commitid",
  applyCustomTheme: "カスタムを適用",
  switchTheme: "テーマ切替",
  themeApplied: "テーマを切り替えました",
  themeApplyFailed: "テーマの切り替えに失敗しました",
  themeUrlUnavailable: "このバージョンではテーマ URL を利用できません",
  invalidThemeUrl: "テーマ URL が正しくありません",
  invalidUserAgent: "カスタム UA に使用できない文字が含まれています。英数字・スペースと . _ - / , : ; ( ) + = @ # * ? ~ のみ、100 文字以内",
  invalidAppPassword: "アプリ用アクセスパスワードが不正です。スペースを含まない 16〜32 文字の半角英数字・記号で入力してください",
  version: "バージョン",
  changelog: "変更履歴",
  preview: "プレビュー",
  demo: "デモ",
  view: "表示",
  threeNetPanelCount: "ホームのパネル表示回線数",
  themeConfigInvalidCount: "0 から 8 までの数値を入力してください",
  themeConfigLoginRequired: "テーマ設定を変更する前に管理画面にログインしてください",
  themeConfigReset: "リセット",
  colorPresetTitle: "カラースタイル",
  colorPresetDefault: "デフォルト",
  colorPresetOcean: "オーシャンブルー",
  colorPresetAurora: "オーロラグリーン",
  colorPresetNebula: "ネビュラパープル",
  colorPresetSunset: "サンセットオレンジ",
  colorPresetSakura: "サクラピンク",
  colorPresetForest: "フォレストグリーン",
  colorPresetGraphite: "グラファイト"
}, BP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WP
}, Symbol.toStringTag, { value: "Module" })), HP = {
  passkeyRateLimited: "Terlalu banyak percobaan. Tunggu sebentar dan coba lagi.",
  passkeyBrowserPrompt: "Menunggu interaksi di browser…",
  passkeyPreparing: "Menyiapkan passkey…",
  passkeyVerifying: "Memverifikasi passkey…",
  passkeyPasswordInvalid: "Kata sandi administrator salah.",
  passkeyOptionsFailed: "Tidak dapat memulai pendaftaran. Periksa koneksi dan sesi masuk.",
  passkeyVerifyFailed: "Browser mengembalikan kredensial, tetapi verifikasi server gagal.",
  passkeyAlreadyRegistered: "Kunci keamanan ini sudah terdaftar di situs ini.",
  passkeyUserVerificationRequired: "Kunci harus mendukung verifikasi pengguna. Atur PIN FIDO2 lalu coba lagi.",
  passkeyDeviceFailed: "Verifikasi tidak selesai: mungkin dibatalkan, habis waktu, atau kunci tidak memenuhi persyaratan. Periksa koneksi dan PIN.",
  passkeyLogin: "Masuk dengan passkey",
  passkeyTitle: "Passkey",
  passkeyDescription: "Gunakan kunci keamanan, Rantai Kunci iCloud, atau Windows Hello. Tambahkan kunci cadangan.",
  passkeySameOrigin: "Gunakan browser yang mendukung dan domain HTTPS milik Worker ini.",
  passkeyEmpty: "Belum ada passkey.",
  passkeyName: "Nama",
  passkeyNamePlaceholder: "Contoh: YubiKey atau iPhone",
  passkeyPassword: "Kata sandi administrator saat ini",
  passkeyPasswordHint: "Masukkan kata sandi untuk menambah atau menghapus passkey.",
  passkeyPasswordRequired: "Masukkan kata sandi administrator terlebih dahulu.",
  passkeyAdd: "Tambah passkey",
  passkeyDelete: "Hapus",
  passkeyDeleteConfirm: "Hapus passkey ini?",
  passkeyAdded: "Passkey ditambahkan.",
  passkeyDeleted: "Passkey dihapus.",
  passkeyFailed: "Operasi gagal atau dibatalkan. Periksa kata sandi dan coba lagi.",
  theme: "Tema",
  themeAuto: "Ikuti Sistem",
  themeDark: "Gelap",
  themeLight: "Terang",
  language: "Bahasa",
  languageAuto: "Otomatis",
  barChart: "DIAGRAM BATANG",
  ringChart: "DIAGRAM CINCIN",
  expandChart: "Perbesar grafik",
  collapseChart: "Perkecil grafik",
  table: "TABEL",
  map: "PETA",
  admin: "Admin",
  all: "Semua",
  totalServers: "Total Server",
  totalTraffic: "Total Trafik",
  realtimeSpeed: "Kecepatan Real-time",
  remainingValue: "Nilai Tersisa",
  totalValue: "Total Nilai",
  monthlyAverageCost: "Rata-rata Bulanan",
  configuredPrices: "Berharga",
  todayExchangeRates: "Kurs Hari Ini",
  exchangeRateBase: "Dasar",
  exchangeRateSource: "Sumber Kurs",
  financeMissingExpire: "Tanpa Kedaluwarsa",
  financeRateNetwork: "API langsung",
  financeRateCache: "cache hari ini",
  financeRateStaleCache: "cache cadangan",
  financeRateDefault: "cadangan bawaan",
  realtime: "Real-time",
  liveConnectionTimeoutTitle: "Koneksi real-time berakhir",
  liveConnectionTimeoutMessage: "Koneksi real-time mencapai batas waktu dan ditutup. Lanjutkan menerima pembaruan langsung?",
  continueConnection: "Lanjutkan",
  online: "Online",
  offline: "Offline",
  noServer: "Belum ada server, silakan tambahkan di",
  noServerSuffix: "",
  backToAdmin: "Panel Admin",
  back: "cd ..",
  hostname: "HOSTNAME",
  region: "KODE REGION",
  regionPlaceholder: "Kosongkan untuk deteksi otomatis",
  osArch: "OS/ARSITEKTUR",
  ram: "RAM",
  disk: "DISK",
  use: "PEMAKAIAN",
  dl: "DL",
  ul: "UL",
  rx: "RX",
  tx: "TX",
  update: "PERBARUI",
  noData: "Tidak ada data",
  ago: "lalu",
  uptime: "Uptime",
  architecture: "Arsitektur",
  os: "OS",
  kernelVersion: "Kernel",
  cpuModel: "Model CPU",
  cpuInfo: "Info CPU",
  loadAvg: "Rata-rata Beban",
  bootTime: "Waktu Boot",
  totalDiskRam: "Total Disk / RAM",
  trafficIn: "Trafik Masuk",
  trafficOut: "Trafik Keluar",
  traffic: "TRAFIK",
  lastReport: "Laporan Terakhir",
  cpuUsage: "Penggunaan CPU",
  gpuInfo: "Info GPU",
  gpuUsage: "Penggunaan GPU",
  gpuMemory: "Memori GPU",
  gpuClock: "Clock SM GPU",
  gpuPower: "Daya GPU",
  memoryUsage: "Penggunaan Memori",
  diskUsage: "Penggunaan Disk",
  diskIo: "IO Disk",
  networkTraffic: "Jaringan",
  processes: "Proses",
  connections: "Koneksi",
  latencyMonitor: "Monitor Latensi",
  packetLoss: "Packet Loss",
  databaseUpgradeRequired: "Buka Panel Admin lalu klik Tingkatkan Database",
  swap: "Swap",
  used: "Terpakai",
  lastUpdate: "Pembaruan terakhir",
  workersUpdateAvailable: "Versi baru",
  autoRefresh: "Auto-refresh",
  seconds: "dtk",
  timeout: "TIMEOUT",
  loadAvgMonitor: "Monitor Rata-rata Beban",
  load1m: "1 Menit",
  load5m: "5 Menit",
  load15m: "15 Menit",
  apiEndpoint: "Endpoint API",
  switchingSite: "Mengganti situs...",
  username: "Nama Pengguna",
  password: "Kata Sandi",
  login: "Masuk",
  missingCredentials: "Masukkan nama pengguna dan kata sandi",
  invalidCredentials: "Nama pengguna atau kata sandi salah",
  adminPanel: "Panel Admin",
  sudoStatus: "sudo systemctl status",
  refresh: "SEGARKAN",
  logout: "Keluar",
  dashboard: "DASBOR",
  total: "Total",
  avgCpu: "Rata-rata CPU",
  servers: "Server",
  settings: "Pengaturan",
  clickToCopy: "Klik",
  installCommand: "Salin perintah instalasi untuk memasang agent di server target",
  collectIntervalHint: "Bila interval pengumpulan 0, pengambilan sampel mengikuti interval laporan.",
  serverName: "Nama server",
  group: "Grup",
  tags: "Tag",
  note: "Catatan",
  tagsPlaceholder: "Dipisahkan koma",
  notePlaceholder: "Catatan internal, hanya tampil di Admin",
  addServer: "TAMBAH SERVER",
  batchDelete: "HAPUS MASSAL",
  toggleAll: "AKTIFKAN SEMUA",
  refreshCache: "SEGARKAN CACHE",
  cacheCleared: "Cache daftar server dibersihkan",
  price: "HARGA",
  free: "Gratis",
  currency: "Mata Uang",
  billingCycle: "Siklus Penagihan",
  autoRenewal: "Perpanjangan Otomatis",
  expire: "Sisa Waktu",
  expireDays: "h",
  day: "hari",
  days: "hari",
  month: "bulan",
  expired: "KEDALUWARSA",
  agentVersion: "VERSI AGENT",
  status: "STATUS",
  actions: "AKSI",
  noServers: "Belum ada server dikonfigurasi",
  dragSort: "Seret untuk mengurutkan",
  copy: "Salin",
  edit: "Edit",
  delete: "Hapus",
  custom: "Kustom",
  siteTitle: "Judul Situs",
  appearance: "Tampilan",
  bgImage: "Gambar Latar",
  mobileBgImage: "Gambar Latar Seluler",
  remoteImageTip: "Untuk gambar remote, tambahkan origin gambar ke whitelist Domain Statis CSP.",
  favicon: "Favicon",
  upload: "UNGGAH",
  customHead: "Custom <head>",
  customScript: "Skrip Kustom (footer)",
  themeOptions: "JSON Opsi Tema",
  mikusThemeToggle: "Aktifkan mode Mikus",
  themeOptionsTip: 'Opsi kustom tema pihak ketiga. Harus berupa objek JSON, misalnya {"mikus":1} mengaktifkan lapisan frontend Mikus.',
  cspStatic: "Whitelist Domain Statis CSP",
  cspStaticTip: "Domain file statis yang diizinkan, mis. https://unpkg.com,https://cdn.jsdelivr.net",
  cspApi: "Whitelist Domain API CSP",
  cspApiTip: "Domain API yang diizinkan, mis. https://api.example.com",
  cspWarning: "Saat menambahkan CSS/JS pihak ketiga, pastikan sumbernya tepercaya. Sebelum dipakai, disarankan mengirim kode sumber JS ke AI untuk menganalisis keamanannya. Setelah dikonfirmasi, host sumber daya di repositori GitHub Anda sendiri dan panggil melalui CDN. Penggunaan yang salah dapat menimbulkan risiko keamanan serius. Sumber daya eksternal perlu ditambahkan ke whitelist Domain Statis CSP di atas.",
  cspInvalidDomain: "Format domain CSP tidak valid. Gunakan hanya origin https://, tanpa path atau query string.",
  displayMode: "Mode Tampilan Default",
  displayModeBar: "Diagram Batang",
  displayModeRing: "Diagram Cincin",
  displayModeTable: "Tabel",
  defaultTheme: "Tampilan Default",
  defaultLanguage: "Bahasa Default",
  displayOptions: "Opsi Tampilan",
  autoDiscovery: "Penemuan Otomatis",
  autoDiscoveryTip: "Bila diaktifkan, agent yang melapor tanpa ID server akan dibuat otomatis. Server baru mungkin butuh hingga 2 menit untuk muncul di dasbor. Lihat README untuk detail.",
  autoAdd: "TAMBAH OTOMATIS",
  autoAddDisabledTip: "Penemuan otomatis nonaktif. Aktifkan di Pengaturan → Pengaturan Situs → Penemuan Otomatis.",
  autoAddNamePlaceholder: "Kosongkan untuk memakai IP publik",
  wssReportEnabled: "Pelaporan WSS Agent",
  customUserAgent: "UA Kustom",
  customUserAgentTip: "User-Agent yang dipakai permintaan laporan agent dan diizinkan oleh aturan keamanan domain Cloudflare. Memerlukan agent v1.1.1 atau lebih baru.",
  customUserAgentDocs: "Lihat README",
  customUserAgentInvalid: "Hanya huruf, angka, spasi dan . _ - / , : ; ( ) + = @ # * ? ~ yang diizinkan, maksimal 100 karakter",
  appPassword: "Kata Sandi Akses Aplikasi",
  appPasswordTip: "Aplikasi pihak ketiga dan widget iOS dapat mengirim kata sandi ini di header X-App-Password untuk melihat situs privat dan server tersembunyi. Kosongkan untuk menonaktifkan.",
  appPasswordPlaceholder: "16-32 karakter, kosongkan untuk menonaktifkan",
  appPasswordInvalid: "Harus 16-32 karakter ASCII (huruf, angka, atau simbol) tanpa spasi",
  wssReportTip: "Mengaktifkan WSS mengurangi permintaan Workers dan meningkatkan performa real-time, tetapi mengaktifkannya 24 jam sehari dapat memakai 85% durasi Durable Objects berapa pun jumlah server. Disarankan diaktifkan bila tidak ada proyek lain yang memakai Durable Objects.",
  wssReportHours: "Jam Aktif",
  wssReportHoursTip: "Panel menampilkan jam lokal. Pengaturan disimpan sebagai jam UTC, dan agent memakai pelaporan HTTP di luar jam yang dipilih.",
  localTime: "Waktu lokal",
  hoursSelected: "jam dipilih",
  agentWssMinVersion: "Perlu Agent v1.0.10+",
  selectAll: "Pilih semua",
  clear: "Bersihkan",
  frontendWsTimeoutMinutes: "Timeout WSS Frontend (menit)",
  frontendWsTimeoutMinutesTip: "Tutup koneksi frontend real-time setelah sekian menit. 0 menonaktifkan timeout.",
  invalidFrontendWsTimeoutMinutes: "Timeout WSS frontend harus bilangan bulat 0 hingga 1440 menit.",
  publicAccess: "Akses Publik",
  showPrice: "Tampilkan Harga",
  showExpire: "Tampilkan Kedaluwarsa",
  showTf: "Tampilkan Kuota Trafik",
  showThreeNetDetails: "Tampilkan Detail Node di Beranda",
  longHistoryPoints: "Poin Riwayat Jangka Panjang",
  longHistoryPointsTip: "Jumlah sampel yang dikembalikan untuk kueri lebih dari 1 jam. Semakin banyak poin semakin detail, tetapi semakin banyak baris dibaca.",
  historyPointCount: "{points} poin",
  notifications: "Notifikasi",
  offlineAlert: "Peringatan Offline",
  expireReminder: "Pengingat Kedaluwarsa",
  disabled: "Nonaktif",
  enable: "Aktifkan",
  enabled: "Aktif",
  notifyOffline: "Jeda notifikasi offline",
  notifyOfflineMinutes: "Setelah offline {minutes} menit",
  notifyExpireDays: "Beri tahu dalam {days} hari sebelum kedaluwarsa",
  expireReminderCustomPlaceholder: "Hari sebelum kedaluwarsa (1-365)",
  resourceAlert: "Peringatan Beban Sumber Daya",
  resourceAlertWindow: "Jendela Peringatan",
  resourceAlertWindowMinutes: "jendela {minutes} menit",
  resourceAlertAddRule: "Tambah Aturan",
  resourceAlertEmpty: "Belum ada aturan peringatan beban sumber daya",
  resourceAlertRule: "Aturan",
  resourceAlertRuleName: "Nama",
  resourceAlertRuleNamePlaceholder: "mis. CPU Tinggi",
  resourceAlertMetric: "Item Monitor",
  resourceAlertThreshold: "Ambang Batas",
  resourceAlertServers: "Server",
  resourceAlertInterval: "Interval",
  resourceAlertIntervalMinutes: "{minutes} menit",
  resourceAlertMode: "Mode Pemicu",
  resourceAlertModeContinuous: "Semua sampel jendela melebihi ambang",
  resourceAlertModeAverage: "Rata-rata jendela melebihi ambang",
  resourceAlertCpu: "Ambang CPU (%)",
  resourceAlertRam: "Ambang RAM (%)",
  resourceAlertNetIn: "Ambang unduh (Mbps)",
  resourceAlertNetOut: "Ambang unggah (Mbps)",
  resourceAlertNetTotal: "Ambang total jaringan (Mbps)",
  resourceAlertTip: "Catatan: Karena keterbatasan CF Workers, terlalu banyak aturan dapat menyebabkan notifikasi tertunda atau hilang.",
  telegramToken: "Telegram / WeChat / Feishu / DingTalk / Bark / Server酱 / WxPusher / Gotify / OneBot",
  chatId: "Chat ID",
  notificationChannel: "Saluran Notifikasi",
  builtinNotification: "Saluran Bawaan",
  customWebhook: "Webhook Kustom",
  smtpNotification: "Email SMTP",
  smtpHost: "Host SMTP",
  smtpPort: "Port",
  smtpPortTip: "Cloudflare Workers memblokir port 25. Gunakan 465 (TLS implisit) atau 587 (STARTTLS).",
  smtpSecure: "Enkripsi",
  smtpSecureAuto: "Otomatis (port)",
  smtpSecureTls: "TLS Implisit (465)",
  smtpUser: "Nama Pengguna",
  smtpPassword: "Kata Sandi",
  smtpFrom: "Dari",
  smtpTo: "Penerima",
  smtpInvalidEmail: "Masukkan alamat email yang valid, mis. user@example.com",
  smtpToRequired: "Setidaknya satu email penerima diperlukan",
  smtpFieldRequired: "Kolom ini wajib diisi",
  smtpPortInvalid: "Port tidak valid (1-65535, port 25 diblokir oleh Cloudflare Workers)",
  smtpSecureRequired: "Port selain 465/587 memerlukan metode enkripsi eksplisit",
  smtpConfigInvalid: "Konfigurasi SMTP tidak lengkap, periksa pengaturan SMTP",
  smtpTip: "Mengirim email teks biasa melalui cloudflare:sockets (port 25 diblokir oleh Cloudflare Workers). QQ / 163 memerlukan kode otorisasi SMTP, bukan kata sandi login.",
  webhookUrl: "URL Webhook",
  webhookMethod: "Metode",
  webhookFormat: "Format Body",
  webhookHeaders: "Header",
  webhookBody: "Body",
  webhookParams: "Parameter Query",
  notificationTemplate: "Template Notifikasi",
  notificationLanguage: "Bahasa Notifikasi",
  notificationLanguageTip: "Bahasa pesan peringatan yang dikirim ke Telegram dan saluran lain. Template kustom dan body webhook tidak diterjemahkan.",
  notificationTimezone: "Zona Waktu Notifikasi",
  notificationTimezoneTip: "Hanya dipakai untuk waktu keluaran notifikasi dan jadwal pengingat kedaluwarsa. Gunakan zona waktu IANA seperti Asia/Shanghai.",
  expireNotificationTime: "Waktu Pengingat Kedaluwarsa",
  expireNotificationTimeTip: "Periksa status kedaluwarsa dan kirim pengingat setiap hari pada jam yang dipilih di zona waktu notifikasi. Gunakan 0-23.",
  invalidNotificationTimezone: "Zona waktu notifikasi harus zona waktu IANA yang valid, misalnya Asia/Shanghai.",
  invalidExpireNotificationTime: "Waktu notifikasi kedaluwarsa harus bilangan bulat 0 hingga 23.",
  invalidExpireReminder: "Pengingat kedaluwarsa harus bilangan bulat 0 hingga 365 hari.",
  saveConfig: "SIMPAN KONFIGURASI",
  saveHint: "Perubahan hanya berlaku setelah disimpan",
  saving: "MENYIMPAN...",
  hostnameLabel: "Hostname",
  groupName: "Nama Grup",
  expirationDate: "Tanggal Kedaluwarsa",
  trafficLimit: "Batas Trafik",
  autoUpdate: "Pembaruan Otomatis",
  autoUpdateRiskTitle: "Risiko Pembaruan Otomatis",
  autoUpdateRiskDesc: "Pastikan keamanan server tempat agent dipasang. Setelah mengaktifkan pembaruan otomatis, salin perintah instalasi ke server lalu jalankan.",
  autoUpdateRiskConfirm: "Aktifkan Pembaruan Otomatis",
  autoUpdateRiskCancel: "Batal",
  hideFromPublic: "Sembunyikan dari Publik",
  cancel: "BATAL",
  save: "SIMPAN",
  dangerWarning: "Peringatan Bahaya",
  deleteConfirm: "Ini akan menghapus semua data server dari panel pemantauan",
  recommendUninstall: "Disarankan jalankan perintah uninstall di server target lebih dulu untuk menghentikan agent",
  clickToCopyCmd: "Klik tombol salin untuk menyalin perintah uninstall",
  confirmDelete: "Konfirmasi Hapus",
  cancelAction: "Batal",
  default: "Default",
  editConf: "Edit Konfigurasi",
  deleteConf: "Hapus Konfigurasi",
  errorInvalidUsername: "[ERROR] Nama pengguna atau kata sandi salah",
  serverUpdateFailedDbNotReady: '[ERROR] Pembaruan gagal. Buka Manajemen Database lalu klik "Tingkatkan Database" untuk memigrasi kolom baru.',
  configSaved: "[OK] Konfigurasi tersimpan! Memuat ulang...",
  saveFailed: "[ERROR] Gagal menyimpan: ",
  saveFailedUnknown: "[ERROR] Gagal menyimpan: Kesalahan tidak diketahui",
  addFailed: "[ERROR] Gagal menambahkan",
  serverAdded: "Server ditambahkan",
  serverUpdated: "Server diperbarui",
  batchEdit: "Edit Massal",
  batchEditSuccess: "[OK] {count} server berhasil diedit massal",
  noBatchEditFields: "Pilih kolom yang akan diperbarui",
  selectServersToEdit: "Pilih server yang akan diedit",
  basicInfo: "Info Dasar",
  billing: "Penagihan",
  deleteFailed: "[ERROR] Gagal menghapus",
  selectServers: "[WARN] Pilih server yang akan dihapus",
  confirmDeleteServers: "[?] Hapus ",
  irreversible: " server terpilih? Tindakan ini tidak dapat dibatalkan.",
  imageSizeWarning: "[WARN] Ukuran gambar > 800KB, pertimbangkan memakai URL eksternal",
  enterServerName: "[WARN] Masukkan nama server",
  loginRequired: "Silakan masuk untuk melihat data historis lebih dari 1 hari",
  loginRequiredTitle: "Perlu Login",
  verificationFailed: "Verifikasi gagal",
  refreshToRetry: "Segarkan halaman untuk mencoba lagi",
  verificationError: "Kesalahan verifikasi",
  turnstileNotSupported: "Turnstile Tidak Didukung",
  turnstileNotSupportedDesc: "Turnstile diaktifkan pada salah satu endpoint remote. Nonaktifkan di situs remote untuk memakai dasbor ini.",
  turnstileSiteKeyMismatch: "Site Key Turnstile Tidak Cocok",
  turnstileSiteKeyMismatchDesc: "Beberapa situs mengaktifkan Turnstile tetapi memakai site key berbeda. Gunakan widget Turnstile yang sama untuk semua situs yang diaktifkan.",
  dbManagement: "Manajemen Database",
  upgradeDatabase: "Tingkatkan Database",
  clearHistory: "Hapus Data Riwayat",
  upgradeDesc: "Perbarui skema database ke versi terbaru",
  clearHistoryDesc: "Hapus semua riwayat pemantauan sambil mempertahankan server dan pengaturan",
  dangerOperation: "Operasi Berbahaya",
  clearHistoryWarning: "Operasi ini akan menghapus semua riwayat pemantauan. Daftar server dan pengaturan tetap disimpan. Tindakan ini tidak dapat dibatalkan!",
  confirmClear: "Konfirmasi Hapus",
  operationSuccess: "Operasi berhasil",
  operationFailed: "Operasi gagal",
  invalidServerName: "Nama server tidak valid",
  invalidPingNodeFormat: "Gunakan domain, IPv4, IPv6, atau host:port. IPv6 dengan port harus memakai [alamat]:port; port harus 1-65535.",
  invalidNetworkInterface: "Nama antarmuka jaringan tidak valid. Gunakan nama dipisah koma, misalnya eth0,ens3.",
  invalidThemeOptionsFormat: 'Opsi tema harus objek JSON yang valid, misalnya {"a":1,"b":2}.',
  invalidTrafficCorrection: "Koreksi trafik harus angka 0 hingga 1.000.000 GB",
  invalidServerId: "ID server tidak valid",
  missingSortData: "Data urutan tidak ada",
  invalidSortId: "Data urutan berisi ID tidak valid",
  selectServersToDelete: "Pilih server yang akan dihapus",
  invalidServerIdInList: "Berisi ID server tidak valid",
  unknownAction: "Tindakan tidak dikenal",
  cloudflareTokenRequired: "Konfigurasikan Cloudflare Token terlebih dahulu",
  cloudflareAccountIdRequired: "Konfigurasikan Cloudflare Account ID terlebih dahulu",
  upgrading: "Meningkatkan...",
  clearing: "Menghapus...",
  collectInterval: "Interval Pengumpulan (detik)",
  reportInterval: "Interval Laporan (detik)",
  wssReportInterval: "Interval Laporan WSS (detik)",
  connectionMode: "Mode Koneksi",
  connectionModeAuto: "Otomatis (WSS + POST cadangan)",
  connectionModeHttp: "Hanya HTTP POST",
  pingMode: "Mode Ping",
  pingModeIcmpRootHint: "ICMP hanya didukung bila agent dipasang sebagai root.",
  wssReportDisabledConnectionHint: "Pelaporan WSS dinonaktifkan secara global, aktifkan di pengaturan.",
  targetOs: "Sistem Target",
  installMode: "Pengguna Instalasi",
  installModeCurrentUser: "Pengguna saat ini",
  installModeCfsmUser: "Pengguna khusus cfsm",
  nonRootInstallTip: "Pengguna khusus cfsm hanya didukung di Linux systemd.",
  nonRootInstallRunStep: "instal sebagai pengguna cfsm",
  nonRootInstallSudoRequired: "Diperlukan untuk penyiapan instalasi non-root.",
  dedicatedUserSystemdRequired: "Alpine/OpenRC atau sistem lain yang tidak didukung memerlukan systemd. Pilih Pengguna saat ini.",
  uninstallMode: "Pengguna Instalasi",
  uninstallModeCurrentUser: "Pengguna saat ini",
  uninstallModeCfsmUser: "Pengguna khusus cfsm",
  nonRootUninstallUserMissing: "Pengguna cfsm tidak ada; pilih Pengguna saat ini atau verifikasi pengguna instalasi awal.",
  dedicatedUserUninstallUnsupported: "Sistem yang tidak didukung memerlukan systemd. Pilih Pengguna saat ini.",
  httpsRequired: "Protokol saat ini HTTP, gunakan HTTPS untuk menyalin perintah instalasi.",
  copied: "Tersalin!",
  close: "Tutup",
  agentVersionSelect: "Versi Agent",
  agentVersionShell: "Versi Shell",
  agentVersionGo: "Versi Go",
  installVersionPlaceholder: "Default versi terbaru",
  ghProxy: "Proxy GitHub Pihak Ketiga",
  ghProxyTip: "Proxy pihak ketiga dapat melihat atau memodifikasi file instalasi yang diunduh dan berpotensi menimbulkan risiko keamanan.",
  installInstance: "Nama instansi",
  installInstanceTip: "Biarkan kosong untuk memakai instansi bawaan. Isi nama untuk memasang beberapa instansi mandiri di satu mesin; nama layanan dan jalur konfigurasi akan mendapat akhiran. Hanya huruf, angka, garis bawah, dan tanda hubung yang diperbolehkan.",
  installInstancePlaceholder: "Instansi bawaan",
  uninstallAllInstances: "Hapus semua instansi",
  uninstallAllInstancesTip: "Jika dicentang, semua instansi di mesin ini akan dihapus (setara dengan --all) dan nama instansi diabaikan.",
  instanceNameInvalid: "Nama instansi hanya boleh berisi huruf, angka, garis bawah, dan tanda hubung, maksimal 32 karakter; karakter lain diabaikan",
  installVersionTip: "Dapatkan versi terbaru dari https://github.com/huilang-me/cfsm-agent/releases",
  dockerVersionTip: "Tag image Docker, default ke latest",
  ghProxyPlaceholder: "Langsung",
  pingNodes: "Node Ping",
  customCt: "Telecom",
  customCu: "Union Telecom",
  customCm: "Mobile Telecom",
  jwtSecretTip: "Rahasia JWT dipakai untuk membuat dan memverifikasi token login. Gunakan string acak minimal 32 karakter.",
  jwtSecretMinLength: "JWT Secret harus minimal 32 karakter",
  jwtSecretNoWhitespace: "JWT Secret tidak boleh mengandung spasi",
  adminLoginSettings: "Pengaturan Login Admin",
  changePassword: "Ubah Kata Sandi",
  cancelPasswordChange: "Batal Ubah Kata Sandi",
  confirmPassword: "Konfirmasi Kata Sandi",
  apiSecretTip: "API_SECRET untuk pelaporan server tetap memakai variabel lingkungan, terlepas dari pengaturan kata sandi di sini.",
  passwordRequired: "Belum ada kata sandi admin. Tetapkan kata sandi sebelum menyimpan.",
  passwordMismatch: "Kata sandi tidak cocok",
  usernameRequired: "Nama pengguna wajib diisi",
  securitySettings: "Pengaturan Keamanan",
  enableTurnstile: "Aktifkan CAPTCHA Turnstile (Global)",
  enableTurnstileLogin: "Aktifkan CAPTCHA Turnstile untuk Login",
  turnstileLoginTip: "Bila diaktifkan, verifikasi Turnstile hanya diperlukan saat login.",
  turnstileSiteKey: "Site Key",
  turnstileSiteKeyPlaceholder: "Site Key Turnstile",
  turnstileSecretKey: "Secret Key",
  turnstileSecretKeyPlaceholder: "Secret Key Turnstile",
  turnstileTip: "Cloudflare Turnstile menyediakan perlindungan bot. Dapatkan key dari Cloudflare Dashboard.",
  jwtSettings: "Pengaturan JWT",
  jwtSecret: "JWT Secret",
  monthlyTraffic: "Trafik Bulanan",
  monthlyTrafficLimit: "Batas Trafik",
  trafficResetDay: "Hari Reset Trafik",
  trafficResetDayTip: 'Konfigurasi dinamis (kecuali "Sakelar Pembaruan Otomatis") berlaku otomatis dalam sekitar 4 menit; Sakelar Pembaruan Otomatis perlu menyalin ulang dan menjalankan perintah.',
  trafficAlertPercent: "Ambang Peringatan Trafik",
  trafficAlertPercentTip: "Persentase ambang per server; kosong = ikuti pengaturan global, 0 = nonaktifkan peringatan untuk server ini. Mengirim satu notifikasi per siklus penagihan; aktif kembali setelah reset trafik atau saat ambang/batas berubah. Hanya berlaku bila batas trafik ditetapkan.",
  trafficAlertThreshold: "Ambang Peringatan Trafik Bulanan",
  trafficAlertThresholdTip: "Default global: beri tahu sekali saat trafik bulanan server mencapai persentase ini dari batas trafiknya. 0 = nonaktif. Server dengan ambang sendiri akan menimpanya; server yang diset 0 menonaktifkan peringatannya.",
  networkInterface: "Antarmuka Jaringan",
  networkInterfaceHint: "mis. eth0,ens3",
  rxCorrection: "Koreksi Unduh",
  txCorrection: "Koreksi Unggah",
  correctionHint: "Jika hanya satu sisi diisi, sisi lain akan ditimpa menjadi 0.",
  pingNodeTip: "Timpa node default global, set 0 agar node tidak dipakai.",
  serverLevel: "server",
  trafficCalcType: "Jenis Perhitungan Trafik",
  trafficCalcTotal: "Unggah + Unduh",
  trafficCalcUl: "Hanya Unggah",
  trafficCalcDl: "Hanya Unduh",
  trafficCalcMax: "Maksimum Keduanya",
  cloudflareSettings: "Pengaturan Cloudflare",
  cloudflareAccountIdPlaceholder: "mis. f81d307be4628170a3878394435c9c8b",
  cloudflareTokenPlaceholder: "Cloudflare API Token",
  cloudflareTokenTip: "Memerlukan izin Account Analytics Read untuk kueri penggunaan.",
  queryD1Quota: "Kueri Penggunaan Akun CF",
  d1UsageQueried: "Kueri penggunaan akun CF berhasil. Jangan lupa simpan.",
  d1UsageDate: "Tanggal Penggunaan",
  d1RowsRead: "Baris Dibaca",
  d1RowsWritten: "Baris Ditulis",
  workersRequests: "Permintaan Workers",
  durableObjectsRequests: "Permintaan Ditagih DO (perkiraan)",
  durableObjectsHttpRequests: "Permintaan HTTP DO",
  durableObjectsHibernationWakeups: "Bangun dari Hibernasi DO",
  durableObjectsInboundWebSocketMessages: "Pesan WebSocket Masuk DO",
  durableObjectsOutboundWebSocketMessages: "Pesan WebSocket Keluar DO",
  billingRatioOneToOne: "ditagih 1:1",
  billingRatioWebSocketIncoming: "ditagih 20:1",
  billingRatioNotBilled: "tidak ditagih",
  rawRequests: "mentah",
  durableObjectsDuration: "Durasi DO (GB-s)",
  durableObjectsDurationTip: "Uptime koneksi WSS memengaruhi penggunaan. Koneksi persisten 24 jam memakai sekitar 85% secara stabil, dan ini tidak bertambah seiring jumlah server.",
  todayUsage: "Penggunaan Hari Ini",
  yesterdayUsage: "Penggunaan Kemarin",
  secondsAgo: "detik lalu",
  minutesAgo: "menit lalu",
  hoursAgo: "jam lalu",
  daysAgo: "hari lalu",
  loginSuccessful: "Login berhasil",
  updateSuccess: "Pembaruan Berhasil",
  serverDeleted: "Server dihapus",
  sortOrderSaved: "Urutan tersimpan",
  batchDeleted: "Server dihapus",
  databaseRebuiltSuccess: "Riwayat data berhasil dibersihkan",
  databaseRebuiltFailed: "Gagal membersihkan riwayat data",
  databaseUpgradeSuccess: "Peningkatan database berhasil",
  databaseUpgradeFailed: "Peningkatan database gagal",
  dbColumnsAdded: "Kolom database tidak ada, kolom yang hilang telah ditambahkan. Silakan klik simpan lagi.",
  serverUpdateFailed: "Pembaruan server gagal",
  adminDisabled: "Panel Admin Dinonaktifkan",
  adminDisabledDesc: "Panel admin dinonaktifkan saat memakai mode multi-situs.",
  backToDashboard: "Kembali ke Dasbor",
  validationError: "Kesalahan Validasi",
  turnstileSiteKeyRequired: "Site Key Turnstile wajib diisi bila Turnstile diaktifkan",
  turnstileSecretKeyRequired: "Secret Key Turnstile wajib diisi bila Turnstile diaktifkan",
  tgBotTokenRequired: "Telegram Bot Token wajib diisi bila notifikasi diaktifkan",
  notificationWebhookUrlRequired: "URL Webhook wajib diisi bila webhook kustom diaktifkan",
  disableOfflineNotify: "Nonaktifkan Notifikasi Offline",
  disableNodeNotify: "Nonaktifkan Notifikasi Node Ini",
  sendTestNotification: "Kirim Uji",
  testNotificationSent: "Notifikasi uji berhasil dikirim. Jangan lupa simpan.",
  testNotificationFailed: "Gagal mengirim notifikasi uji",
  saveSuccess: "Pengaturan berhasil disimpan",
  serverEdited: "Server berhasil diperbarui",
  serversDeleted: "Server berhasil dihapus",
  corsBlocked: "situs memblokir akses lintas origin, harap perbaiki.",
  exportServers: "Ekspor",
  importServers: "Impor",
  settingsImported: "Pengaturan situs dan tampilan diimpor (situs/tampilan)",
  importSettingsNote: "Kredensial, JWT, Turnstile, UA kustom, aturan alert, CSP, dan penanda indeks tidak diekspor/diimpor. Impor menimpa pengaturan situs saat ini.",
  serversExported: "Server berhasil diekspor",
  serversExportFailed: "Gagal mengekspor server",
  serversImported: "Server berhasil diimpor",
  noServersImported: "Tidak ada server yang diimpor",
  noServersToImport: "Tidak ada data server untuk diimpor",
  importing: "Mengimpor...",
  exporting: "Mengekspor...",
  importResult: "Hasil Impor",
  importedCount: "Diimpor",
  skippedCount: "Dilewati",
  skippedIds: "ID Dilewati",
  selectJsonFile: "Pilih file JSON untuk diimpor",
  themeStore: "Toko Tema",
  donation: "Dukungan",
  donationTitle: "Traktir Saya Bubble Tea",
  donationDesc: "Jika CFSM bermanfaat bagi Anda, kirim sedikit token donasi untuk mendukung pemeliharaan berkelanjutan.",
  donationToken: "Setiap token menjadi energi untuk lebih banyak kode, perbaikan, dan pemantauan larut malam.",
  donationThanks: "Terima kasih telah menjaga proyek kecil ini tetap berjalan!",
  donationWechat: "Pindai WeChat untuk mendukung",
  donationQrAlt: "Kode QR apresiasi WeChat",
  themeStoreLoading: "Memuat tema",
  themeStoreLoadFailed: "Gagal memuat toko tema",
  themeStoreNetworkError: "Tidak dapat memuat toko tema. Periksa akses jaringan ke raw.githubusercontent.com dan api.github.com. Disarankan mengganti node lalu coba lagi.",
  themeLoadVersions: "Klik untuk Memuat Versi",
  themeLoadingVersions: "Memuat Versi...",
  themeStoreCreateTitle: "Buat tema sendiri",
  themeStoreCreateDesc: "Tema hanyalah situs statis. Buat index.html dan assets/ dengan panduan pengembangan atau prompt AI, dorong ke GitHub, lalu kirim ke toko tema — tema akan muncul di sini.",
  themeStoreDevDoc: "Panduan",
  themeStoreAiPrompt: "Prompt AI",
  themeStoreSubmit: "Kirim tema",
  themeStoreWarning: "Tema pihak ketiga tidak terverifikasi",
  themeStoreWarningDesc: "Tema pihak ketiga mungkin mengandung kode berbahaya. Tinjau kode sumber atau percayai penulis sebelum memakainya. CFSM tidak bertanggung jawab atas kerusakan akibat tema pihak ketiga.",
  currentTheme: "Tema Saat Ini",
  builtinTheme: "Tema bawaan",
  filterMore: "LAINNYA",
  noSamples: "Tidak ada sampel",
  expand: "Perluas",
  collapse: "Ciutkan",
  mikusThemeTagBuiltin: "Bawaan",
  mikusThemeTagSakura: "Sakura",
  mikusThemeDescription: "Mode Mikus bawaan. Beralih kembali ke tema default dan mengaktifkan warna Mikus, layar pemuatan, dan efek sakura.",
  useBuiltinTheme: "Pakai Bawaan",
  customThemeUrl: "URL Tema Kustom",
  customThemeUrlDesc: "Tempel URL tree tema GitHub. Gunakan commit ID untuk mengunci versi, mis. https://github.com/Author/theme/tree/commitid.",
  applyCustomTheme: "Terapkan Kustom",
  switchTheme: "Ganti Tema",
  themeApplied: "Tema berhasil diganti",
  themeApplyFailed: "Gagal mengganti tema",
  themeUrlUnavailable: "URL tema tidak tersedia untuk versi ini",
  invalidThemeUrl: "URL tema tidak valid",
  invalidUserAgent: "UA kustom tidak valid: hanya huruf, angka, spasi dan . _ - / , : ; ( ) + = @ # * ? ~ yang diizinkan, maksimal 100 karakter",
  invalidAppPassword: "Kata sandi akses aplikasi tidak valid: harus 16-32 karakter ASCII tanpa spasi",
  version: "Versi",
  changelog: "Catatan Perubahan",
  preview: "Pratinjau",
  demo: "Demo",
  view: "Lihat",
  threeNetPanelCount: "Jumlah Jaringan Panel (Beranda)",
  themeConfigInvalidCount: "Masukkan nilai antara 0 dan 8",
  themeConfigLoginRequired: "Silakan masuk ke panel admin sebelum mengubah konfigurasi tema",
  themeConfigReset: "Atur Ulang",
  colorPresetTitle: "Gaya Warna",
  colorPresetDefault: "Default",
  colorPresetOcean: "Biru Laut",
  colorPresetAurora: "Hijau Aurora",
  colorPresetNebula: "Ungu Nebula",
  colorPresetSunset: "Oranye Senja",
  colorPresetSakura: "Pink Sakura",
  colorPresetForest: "Hijau Hutan",
  colorPresetGraphite: "Grafit"
}, jP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HP
}, Symbol.toStringTag, { value: "Module" })), zP = {
  passkeyRateLimited: "Trop de tentatives. Patientez avant de réessayer.",
  passkeyBrowserPrompt: "En attente d’une interaction dans le navigateur…",
  passkeyPreparing: "Préparation de la clé d’accès…",
  passkeyVerifying: "Vérification de la clé d’accès…",
  passkeyPasswordInvalid: "Mot de passe administrateur incorrect.",
  passkeyOptionsFailed: "Impossible de commencer l’enregistrement. Vérifiez la connexion et la session.",
  passkeyVerifyFailed: "Le navigateur a renvoyé un identifiant, mais sa vérification par le serveur a échoué.",
  passkeyAlreadyRegistered: "Cette clé est déjà enregistrée sur ce site.",
  passkeyUserVerificationRequired: "La clé doit prendre en charge la vérification de l’utilisateur. Définissez son PIN FIDO2 puis réessayez.",
  passkeyDeviceFailed: "La vérification n’a pas abouti : elle a pu être annulée, expirer ou la clé ne répond pas aux exigences. Vérifiez la connexion et le PIN.",
  passkeyLogin: "Se connecter avec une clé d’accès",
  passkeyTitle: "Clés d’accès",
  passkeyDescription: "Utilisez une clé de sécurité, le trousseau iCloud ou Windows Hello. Ajoutez une clé de secours.",
  passkeySameOrigin: "Utilisez un navigateur compatible et le domaine HTTPS propre à ce Worker.",
  passkeyEmpty: "Aucune clé d’accès enregistrée.",
  passkeyName: "Nom",
  passkeyNamePlaceholder: "Par exemple : YubiKey ou iPhone",
  passkeyPassword: "Mot de passe administrateur actuel",
  passkeyPasswordHint: "Saisissez le mot de passe pour ajouter ou supprimer une clé.",
  passkeyPasswordRequired: "Saisissez d’abord le mot de passe administrateur.",
  passkeyAdd: "Ajouter une clé",
  passkeyDelete: "Supprimer",
  passkeyDeleteConfirm: "Supprimer cette clé d’accès ?",
  passkeyAdded: "Clé ajoutée.",
  passkeyDeleted: "Clé supprimée.",
  passkeyFailed: "Opération échouée ou annulée. Vérifiez le mot de passe et réessayez.",
  theme: "Thème",
  themeAuto: "Suivre le système",
  themeDark: "Sombre",
  themeLight: "Clair",
  language: "Langue",
  languageAuto: "Auto",
  barChart: "BARRES",
  ringChart: "ANNEAU",
  expandChart: "Agrandir le graphique",
  collapseChart: "Réduire le graphique",
  table: "TABLEAU",
  map: "CARTE",
  admin: "Admin",
  all: "Tous",
  totalServers: "Total serveurs",
  totalTraffic: "Trafic total",
  realtimeSpeed: "Débit temps réel",
  remainingValue: "Valeur restante",
  totalValue: "Valeur totale",
  monthlyAverageCost: "Moy. mensuelle",
  configuredPrices: "Tarifés",
  todayExchangeRates: "Taux du jour",
  exchangeRateBase: "Base",
  exchangeRateSource: "Source du taux",
  financeMissingExpire: "Sans expiration",
  financeRateNetwork: "API en direct",
  financeRateCache: "cache du jour",
  financeRateStaleCache: "cache de secours",
  financeRateDefault: "secours intégré",
  realtime: "Temps réel",
  liveConnectionTimeoutTitle: "Connexion temps réel terminée",
  liveConnectionTimeoutMessage: "La connexion temps réel a atteint sa limite de durée et a été fermée. Continuer à recevoir les mises à jour en direct ?",
  continueConnection: "Continuer",
  online: "En ligne",
  offline: "Hors ligne",
  noServer: "Aucun serveur disponible. Ouvrez l’",
  noServerSuffix: ".",
  backToAdmin: "Administration",
  back: "cd ..",
  hostname: "NOM D’HÔTE",
  region: "CODE RÉGION",
  regionPlaceholder: "Laisser vide pour détection auto",
  osArch: "OS/ARCH",
  ram: "RAM",
  disk: "DISQUE",
  use: "USAGE",
  dl: "DL",
  ul: "UL",
  rx: "RX",
  tx: "TX",
  update: "MISE À JOUR",
  noData: "Aucune donnée disponible",
  ago: "auparavant",
  uptime: "Uptime",
  architecture: "Architecture",
  os: "OS",
  kernelVersion: "Noyau",
  cpuModel: "Modèle CPU",
  cpuInfo: "Infos CPU",
  loadAvg: "Charge moyenne",
  bootTime: "Démarrage",
  totalDiskRam: "Disque / RAM totaux",
  trafficIn: "Trafic entrant",
  trafficOut: "Trafic sortant",
  traffic: "TRAFIC",
  lastReport: "Dernier rapport",
  cpuUsage: "Utilisation CPU",
  gpuInfo: "Infos GPU",
  gpuUsage: "Utilisation GPU",
  gpuMemory: "Mémoire GPU",
  gpuClock: "Fréquence SM GPU",
  gpuPower: "Puissance GPU",
  memoryUsage: "Utilisation mémoire",
  diskUsage: "Usage disque",
  diskIo: "E/S disque",
  networkTraffic: "Réseau",
  processes: "Processus",
  connections: "Connexions",
  latencyMonitor: "Latence",
  packetLoss: "Perte de paquets",
  databaseUpgradeRequired: "Veuillez ouvrir le panneau d’administration et cliquer sur Mettre à jour la base",
  swap: "Swap",
  used: "Utilisé",
  lastUpdate: "Dernière mise à jour",
  workersUpdateAvailable: "Nouvelle version",
  autoRefresh: "Actualisation auto",
  seconds: "s",
  timeout: "DÉLAI",
  loadAvgMonitor: "Charge système",
  load1m: "1 min",
  load5m: "5 min",
  load15m: "15 min",
  apiEndpoint: "Point d’accès API",
  switchingSite: "Changement de site...",
  username: "Utilisateur",
  password: "Mot de passe",
  login: "Connexion",
  missingCredentials: "Veuillez saisir le nom d’utilisateur et le mot de passe",
  invalidCredentials: "Nom d’utilisateur ou mot de passe invalide",
  adminPanel: "Administration",
  sudoStatus: "sudo systemctl status",
  refresh: "ACTUALISER",
  logout: "Déconnexion",
  dashboard: "TABLEAU DE BORD",
  total: "Total",
  avgCpu: "CPU moy.",
  servers: "Serveurs",
  settings: "Paramètres",
  clickToCopy: "Cliquer",
  installCommand: "Copiez la commande d’installation pour déployer l’agent sur le serveur cible",
  collectIntervalHint: "Lorsque l’intervalle de collecte est 0, l’échantillonnage suit l’intervalle de rapport.",
  serverName: "Nom du serveur",
  group: "Groupe",
  tags: "Étiquettes",
  note: "Note",
  tagsPlaceholder: "Séparées par des virgules",
  notePlaceholder: "Note interne, visible seulement dans l’admin",
  addServer: "AJOUTER SERVEUR",
  batchDelete: "SUPPR. EN LOT",
  toggleAll: "TOUT BASCULER",
  refreshCache: "VIDER LE CACHE",
  cacheCleared: "Cache de la liste des serveurs vidé",
  price: "PRIX",
  free: "Gratuit",
  currency: "Devise",
  billingCycle: "Cycle de facturation",
  autoRenewal: "Renouvellement auto",
  expire: "Temps restant",
  expireDays: "j",
  day: "jour",
  days: "jours",
  month: "mois",
  expired: "EXPIRÉ",
  agentVersion: "VERSION AGENT",
  status: "STATUT",
  actions: "ACTIONS",
  noServers: "Aucun serveur configuré",
  dragSort: "Glisser pour réordonner",
  copy: "Copier",
  edit: "Modifier",
  delete: "Supprimer",
  custom: "Personnalisé",
  siteTitle: "Titre du site",
  appearance: "Apparence",
  bgImage: "Image d’arrière-plan",
  mobileBgImage: "Image d’arrière-plan mobile",
  remoteImageTip: "Pour les images distantes, ajoutez l’origine de l’image à la liste blanche des domaines statiques CSP.",
  favicon: "Favicon",
  upload: "TÉLÉVERSER",
  customHead: "En-tête personnalisé <head>",
  customScript: "Script personnalisé (pied de page)",
  themeOptions: "Options de thème JSON",
  mikusThemeToggle: "Activer le mode Mikus",
  themeOptionsTip: 'Options personnalisées du thème tiers. Doit être un objet JSON, par exemple {"mikus":1} active la couche frontend Mikus.',
  cspStatic: "Liste blanche des domaines statiques CSP",
  cspStaticTip: "Domaines de fichiers statiques autorisés, ex. https://unpkg.com,https://cdn.jsdelivr.net",
  cspApi: "Liste blanche des domaines API CSP",
  cspApiTip: "Domaines API autorisés, ex. https://api.example.com",
  cspWarning: "Lors de l’ajout de CSS/JS tiers, assurez-vous que la source est fiable. Avant utilisation, il est recommandé de soumettre le code source JS à une IA pour analyser sa sécurité. Après confirmation, hébergez les ressources sur votre propre dépôt GitHub et appelez-les via CDN. Il est recommandé d’héberger les ressources sur votre propre dépôt GitHub et de les appeler via CDN. Un usage incorrect peut entraîner de graves risques de sécurité. Les ressources externes doivent être ajoutées à la liste blanche des domaines statiques CSP ci-dessus.",
  cspInvalidDomain: "Format de domaine CSP invalide. Utilisez uniquement des origines https://, sans chemin ni paramètres de requête.",
  displayMode: "Mode d’affichage par défaut",
  displayModeBar: "Barres",
  displayModeRing: "Anneau",
  displayModeTable: "Tableau",
  defaultTheme: "Apparence par défaut",
  defaultLanguage: "Langue par défaut",
  displayOptions: "Options d’affichage",
  autoDiscovery: "Découverte automatique",
  autoDiscoveryTip: "Lorsque activé, un agent qui se signale sans ID de serveur est créé automatiquement. Les nouveaux serveurs peuvent mettre jusqu’à 2 minutes pour apparaître sur le tableau de bord. Voir le README pour les détails.",
  autoAdd: "AJOUT AUTO",
  autoAddDisabledTip: "La découverte automatique est désactivée. Activez-la dans Paramètres → Paramètres du site → Découverte automatique.",
  autoAddNamePlaceholder: "Laisser vide pour utiliser l’IP publique",
  wssReportEnabled: "Rapport WSS de l’agent",
  customUserAgent: "User-Agent personnalisé",
  customUserAgentTip: "User-Agent utilisé par les requêtes de rapport de l’agent, autorisé par la règle de sécurité de domaine Cloudflare. Nécessite l’agent v1.1.1 ou supérieur.",
  customUserAgentDocs: "Voir le README",
  customUserAgentInvalid: "Seuls les lettres, chiffres, espaces et . _ - / , : ; ( ) + = @ # * ? ~ sont autorisés, 100 caractères max",
  appPassword: "Mot de passe d’accès applicatif",
  appPasswordTip: "Les applications tierces et les widgets iOS peuvent envoyer ce mot de passe dans l’en-tête X-App-Password pour voir les sites privés et les serveurs masqués. Laisser vide pour désactiver.",
  appPasswordPlaceholder: "16-32 caractères, vide pour désactiver",
  appPasswordInvalid: "Doit contenir 16-32 caractères ASCII (lettres, chiffres ou symboles) sans espaces",
  wssReportTip: "Activer WSS réduit les requêtes Workers et améliore le temps réel, mais une activation 24 h/24 peut consommer 85 % de la durée des Durable Objects quel que soit le nombre de serveurs. Recommandé si aucun autre projet n’utilise les Durable Objects.",
  wssReportHours: "Heures actives",
  wssReportHoursTip: "Le panneau affiche les heures locales. Les réglages sont enregistrés en heures UTC et les agents utilisent le rapport HTTP en dehors des heures choisies.",
  localTime: "Heure locale",
  hoursSelected: "heures sélectionnées",
  agentWssMinVersion: "Agent v1.0.10+ requis",
  selectAll: "Tout cocher",
  clear: "Effacer",
  frontendWsTimeoutMinutes: "Délai WSS frontend (minutes)",
  frontendWsTimeoutMinutesTip: "Ferme la connexion temps réel du frontend après ce nombre de minutes. 0 désactive le délai.",
  invalidFrontendWsTimeoutMinutes: "Le délai WSS frontend doit être un entier de 0 à 1440 minutes.",
  publicAccess: "Accès public",
  showPrice: "Afficher le prix",
  showExpire: "Afficher l’expiration",
  showTf: "Afficher le quota de trafic",
  showThreeNetDetails: "Afficher les détails des nœuds à l’accueil",
  longHistoryPoints: "Points d’historique longue durée",
  longHistoryPointsTip: "Nombre d’échantillons renvoyés pour les requêtes de plus d’une heure. Plus de points donnent plus de détail mais lisent plus de lignes.",
  historyPointCount: "{points} points",
  notifications: "Notifications",
  offlineAlert: "Alerte hors ligne",
  expireReminder: "Rappel d’expiration",
  disabled: "Désactivé",
  enable: "Activer",
  enabled: "Activé",
  notifyOffline: "Délai de notification hors ligne",
  notifyOfflineMinutes: "Après {minutes} min hors ligne",
  notifyExpireDays: "Notifier {days} jours avant l’expiration",
  expireReminderCustomPlaceholder: "Jours avant expiration (1-365)",
  resourceAlert: "Alerte de charge",
  resourceAlertWindow: "Fenêtre d’alerte",
  resourceAlertWindowMinutes: "fenêtre de {minutes} min",
  resourceAlertAddRule: "Ajouter règle",
  resourceAlertEmpty: "Aucune règle d’alerte de charge configurée",
  resourceAlertRule: "Règle",
  resourceAlertRuleName: "Nom",
  resourceAlertRuleNamePlaceholder: "ex. CPU élevé",
  resourceAlertMetric: "Élément surveillé",
  resourceAlertThreshold: "Seuil",
  resourceAlertServers: "Serveurs",
  resourceAlertInterval: "Intervalle",
  resourceAlertIntervalMinutes: "{minutes} min",
  resourceAlertMode: "Déclenchement",
  resourceAlertModeContinuous: "Tous les échantillons de la fenêtre dépassent le seuil",
  resourceAlertModeAverage: "La moyenne de la fenêtre dépasse le seuil",
  resourceAlertCpu: "Seuil CPU (%)",
  resourceAlertRam: "Seuil RAM (%)",
  resourceAlertNetIn: "Seuil descendant (Mbps)",
  resourceAlertNetOut: "Seuil montant (Mbps)",
  resourceAlertNetTotal: "Seuil réseau total (Mbps)",
  resourceAlertTip: "Remarque : en raison des limites de CF Workers, trop de règles peuvent retarder ou perdre des notifications.",
  telegramToken: "Telegram / WeChat / Feishu / DingTalk / Bark / Server酱 / WxPusher / Gotify / OneBot",
  chatId: "Chat ID",
  notificationChannel: "Canal de notification",
  builtinNotification: "Canal intégré",
  customWebhook: "Webhook personnalisé",
  smtpNotification: "E-mail SMTP",
  smtpHost: "Hôte SMTP",
  smtpPort: "Port",
  smtpPortTip: "Cloudflare Workers bloque le port 25. Utilisez 465 (TLS implicite) ou 587 (STARTTLS).",
  smtpSecure: "Chiffrement",
  smtpSecureAuto: "Auto (selon le port)",
  smtpSecureTls: "TLS implicite (465)",
  smtpUser: "Utilisateur",
  smtpPassword: "Mot de passe",
  smtpFrom: "Expéditeur",
  smtpTo: "Destinataires",
  smtpInvalidEmail: "Saisissez une adresse e-mail valide, ex. user@example.com",
  smtpToRequired: "Au moins une adresse destinataire est requise",
  smtpFieldRequired: "Ce champ est obligatoire",
  smtpPortInvalid: "Port invalide (1-65535, le port 25 est bloqué par Cloudflare Workers)",
  smtpSecureRequired: "Les ports autres que 465/587 nécessitent un mode de chiffrement explicite",
  smtpConfigInvalid: "La configuration SMTP est incomplète, vérifiez les paramètres SMTP",
  smtpTip: "Envoie un e-mail en texte brut via cloudflare:sockets (le port 25 est bloqué par Cloudflare Workers). QQ / 163 nécessitent un code d’autorisation SMTP, pas le mot de passe de connexion.",
  webhookUrl: "URL du Webhook",
  webhookMethod: "Méthode",
  webhookFormat: "Format du corps",
  webhookHeaders: "En-têtes",
  webhookBody: "Corps",
  webhookParams: "Paramètres requête",
  notificationTemplate: "Modèle de notification",
  notificationLanguage: "Langue des notifications",
  notificationLanguageTip: "Langue des messages d’alerte envoyés à Telegram et aux autres canaux. Les modèles personnalisés et les corps de webhook ne sont pas traduits.",
  notificationTimezone: "Fuseau des notifications",
  notificationTimezoneTip: "Utilisé uniquement pour l’heure des notifications et la planification des rappels d’expiration. Utilisez un fuseau IANA comme Asia/Shanghai.",
  expireNotificationTime: "Heure du rappel d’expiration",
  expireNotificationTimeTip: "Vérifie l’expiration et envoie les rappels chaque jour à l’heure choisie dans le fuseau des notifications. Utilisez 0-23.",
  invalidNotificationTimezone: "Le fuseau des notifications doit être un fuseau IANA valide, par exemple Asia/Shanghai.",
  invalidExpireNotificationTime: "L’heure de notification d’expiration doit être un entier de 0 à 23.",
  invalidExpireReminder: "Le rappel d’expiration doit être un entier de 0 à 365 jours.",
  saveConfig: "ENREGISTRER",
  saveHint: "Les modifications ne prennent effet qu’après enregistrement",
  saving: "ENREGISTREMENT...",
  hostnameLabel: "Nom d’hôte",
  groupName: "Nom du groupe",
  expirationDate: "Date d’expiration",
  trafficLimit: "Limite de trafic",
  autoUpdate: "Mise à jour auto",
  autoUpdateRiskTitle: "Risque de mise à jour auto",
  autoUpdateRiskDesc: "Assurez-vous de la sécurité du serveur où l’agent est installé. Après activation, copiez la commande d’installation sur le serveur et exécutez-la.",
  autoUpdateRiskConfirm: "Activer la mise à jour auto",
  autoUpdateRiskCancel: "Annuler",
  hideFromPublic: "Masquer au public",
  cancel: "ANNULER",
  save: "ENREGISTRER",
  dangerWarning: "Avertissement de danger",
  deleteConfirm: "Cela supprimera toutes les données du serveur du panneau de surveillance",
  recommendUninstall: "Il est recommandé d’exécuter d’abord la commande de désinstallation sur le serveur cible pour arrêter l’agent",
  clickToCopyCmd: "Cliquez sur le bouton copier pour copier la commande de désinstallation",
  confirmDelete: "Confirmer",
  cancelAction: "Annuler",
  default: "Par défaut",
  editConf: "Modifier la configuration",
  deleteConf: "Supprimer la configuration",
  errorInvalidUsername: "[ERREUR] Nom d’utilisateur ou mot de passe invalide",
  serverUpdateFailedDbNotReady: "[ERREUR] Échec de la mise à jour. Allez dans Gestion de la base et cliquez sur « Mettre à jour la base » pour migrer le nouveau champ.",
  configSaved: "[OK] Configuration enregistrée ! Rechargement...",
  saveFailed: "[ERREUR] Échec de l’enregistrement : ",
  saveFailedUnknown: "[ERREUR] Échec de l’enregistrement : erreur inconnue",
  addFailed: "[ERREUR] Échec de l’ajout",
  serverAdded: "Serveur ajouté",
  serverUpdated: "Serveur mis à jour",
  batchEdit: "Édition en lot",
  batchEditSuccess: "[OK] {count} serveurs modifiés en lot",
  noBatchEditFields: "Veuillez sélectionner les champs à mettre à jour",
  selectServersToEdit: "Veuillez sélectionner les serveurs à modifier",
  basicInfo: "Infos de base",
  billing: "Facturation",
  deleteFailed: "[ERREUR] Échec de la suppression",
  selectServers: "[ATTENTION] Veuillez sélectionner les serveurs à supprimer",
  confirmDeleteServers: "[?] Supprimer ",
  irreversible: " serveurs sélectionnés ? Cette action est irréversible.",
  imageSizeWarning: "[ATTENTION] Image > 800 Ko, envisagez une URL externe",
  enterServerName: "[ATTENTION] Veuillez saisir un nom de serveur",
  loginRequired: "Connectez-vous pour voir l’historique de plus d’un jour",
  loginRequiredTitle: "Connexion requise",
  verificationFailed: "Échec de la vérification",
  refreshToRetry: "Veuillez actualiser la page pour réessayer",
  verificationError: "Erreur de vérification",
  turnstileNotSupported: "Turnstile non pris en charge",
  turnstileNotSupportedDesc: "Turnstile est activé sur l’un des points d’accès distants. Désactivez-le sur le site distant pour utiliser ce tableau de bord.",
  turnstileSiteKeyMismatch: "Clé de site Turnstile incompatible",
  turnstileSiteKeyMismatchDesc: "Plusieurs sites ont Turnstile activé mais utilisent des clés de site différentes. Utilisez le même widget Turnstile pour tous les sites activés.",
  dbManagement: "Gestion de la base",
  upgradeDatabase: "Mettre à jour la base",
  clearHistory: "Effacer l’historique",
  upgradeDesc: "Met le schéma de la base à jour vers la dernière version",
  clearHistoryDesc: "Supprime tout l’historique de surveillance en conservant les serveurs et les réglages",
  dangerOperation: "Opération dangereuse",
  clearHistoryWarning: "Cette opération supprimera tout l’historique de surveillance. La liste des serveurs et les réglages seront conservés. Cette action est irréversible !",
  confirmClear: "Confirmer l’effacement",
  operationSuccess: "Opération réussie",
  operationFailed: "Échec de l’opération",
  invalidServerName: "Nom de serveur invalide",
  invalidPingNodeFormat: "Utilisez un domaine, une IPv4, une IPv6 ou hôte:port. Une IPv6 avec port doit utiliser [adresse]:port ; le port doit être 1-65535.",
  invalidNetworkInterface: "Les noms d’interface réseau sont invalides. Utilisez des noms séparés par des virgules, par exemple eth0,ens3.",
  invalidThemeOptionsFormat: 'Les options de thème doivent être un objet JSON valide, par exemple {"a":1,"b":2}.',
  invalidTrafficCorrection: "La correction de trafic doit être un nombre de 0 à 1 000 000 Go",
  invalidServerId: "ID de serveur invalide",
  missingSortData: "Données de tri manquantes",
  invalidSortId: "Les données de tri contiennent un ID invalide",
  selectServersToDelete: "Veuillez sélectionner les serveurs à supprimer",
  invalidServerIdInList: "Contient un ID de serveur invalide",
  unknownAction: "Action inconnue",
  cloudflareTokenRequired: "Veuillez d’abord configurer le Token Cloudflare",
  cloudflareAccountIdRequired: "Veuillez d’abord configurer l’Account ID Cloudflare",
  upgrading: "Mise à jour...",
  clearing: "Effacement...",
  collectInterval: "Intervalle de collecte (secondes)",
  reportInterval: "Intervalle de rapport (secondes)",
  wssReportInterval: "Intervalle de rapport WSS (secondes)",
  connectionMode: "Mode de connexion",
  connectionModeAuto: "Auto (WSS + repli POST)",
  connectionModeHttp: "HTTP POST uniquement",
  pingMode: "Mode ping",
  pingModeIcmpRootHint: "ICMP n’est pris en charge que si l’agent est installé en root.",
  wssReportDisabledConnectionHint: "Le rapport WSS est désactivé globalement, activez-le dans les paramètres.",
  targetOs: "Système cible",
  installMode: "Utilisateur d’installation",
  installModeCurrentUser: "Utilisateur actuel",
  installModeCfsmUser: "Utilisateur cfsm dédié",
  nonRootInstallTip: "Un utilisateur cfsm dédié n’est pris en charge que sur Linux systemd.",
  nonRootInstallRunStep: "installer en tant qu’utilisateur cfsm",
  nonRootInstallSudoRequired: "Requis pour la mise en place d’une installation non root.",
  dedicatedUserSystemdRequired: "Alpine/OpenRC ou d’autres systèmes non pris en charge nécessitent systemd. Sélectionnez Utilisateur actuel.",
  uninstallMode: "Utilisateur d’installation",
  uninstallModeCurrentUser: "Utilisateur actuel",
  uninstallModeCfsmUser: "Utilisateur cfsm dédié",
  nonRootUninstallUserMissing: "L’utilisateur cfsm n’existe pas ; sélectionnez Utilisateur actuel ou vérifiez l’utilisateur d’installation d’origine.",
  dedicatedUserUninstallUnsupported: "Les systèmes non pris en charge nécessitent systemd. Sélectionnez Utilisateur actuel.",
  httpsRequired: "Le protocole actuel est HTTP, utilisez HTTPS pour copier la commande d’installation.",
  copied: "Copié !",
  close: "Fermer",
  agentVersionSelect: "Version de l’agent",
  agentVersionShell: "Version Shell",
  agentVersionGo: "Version Go",
  installVersionPlaceholder: "Dernière version par défaut",
  ghProxy: "Proxy GitHub tiers",
  ghProxyTip: "Les proxys tiers peuvent voir ou modifier les fichiers d’installation téléchargés et introduire des risques de sécurité.",
  installInstance: "Nom de l’instance",
  installInstanceTip: "Laissez vide pour utiliser l’instance par défaut. Définissez un nom pour installer plusieurs instances indépendantes sur la même machine ; les noms de service et les chemins de configuration porteront un suffixe. Seules les lettres, les chiffres, les tirets bas et les tirets sont autorisés.",
  installInstancePlaceholder: "Instance par défaut",
  uninstallAllInstances: "Désinstaller toutes les instances",
  uninstallAllInstancesTip: "Si cette case est cochée, toutes les instances de cette machine sont désinstallées (équivalent à --all) et le nom de l’instance est ignoré.",
  instanceNameInvalid: "Les noms d’instance n’autorisent que les lettres, les chiffres, les tirets bas et les tirets, jusqu’à 32 caractères ; les autres caractères sont ignorés",
  installVersionTip: "Obtenez la dernière version sur https://github.com/huilang-me/cfsm-agent/releases",
  dockerVersionTip: "Tag d’image Docker, « latest » par défaut",
  ghProxyPlaceholder: "Direct",
  pingNodes: "Nœuds ping",
  customCt: "Télécom",
  customCu: "Unicom",
  customCm: "Mobile",
  jwtSecretTip: "Le secret JWT sert à générer et vérifier les jetons de connexion. Utilisez une chaîne aléatoire d’au moins 32 caractères.",
  jwtSecretMinLength: "Le secret JWT doit contenir au moins 32 caractères",
  jwtSecretNoWhitespace: "Le secret JWT ne doit pas contenir d’espaces",
  adminLoginSettings: "Paramètres de connexion admin",
  changePassword: "Changer le mot de passe",
  cancelPasswordChange: "Annuler le changement de mot de passe",
  confirmPassword: "Confirmer le mot de passe",
  apiSecretTip: "L’API_SECRET pour le rapport des serveurs utilise toujours la variable d’environnement, quel que soit le mot de passe défini ici.",
  passwordRequired: "Aucun mot de passe admin n’est configuré. Veuillez en définir un avant d’enregistrer.",
  passwordMismatch: "Mots de passe différents",
  usernameRequired: "Le nom d’utilisateur est requis",
  securitySettings: "Paramètres de sécurité",
  enableTurnstile: "Activer le CAPTCHA Turnstile (global)",
  enableTurnstileLogin: "Activer le CAPTCHA Turnstile à la connexion",
  turnstileLoginTip: "Lorsque activé, la vérification Turnstile n’est requise que lors de la connexion.",
  turnstileSiteKey: "Clé de site",
  turnstileSiteKeyPlaceholder: "Clé de site Turnstile",
  turnstileSecretKey: "Clé secrète",
  turnstileSecretKeyPlaceholder: "Clé secrète Turnstile",
  turnstileTip: "Cloudflare Turnstile fournit une protection anti-robots. Obtenez les clés dans le tableau de bord Cloudflare.",
  jwtSettings: "Paramètres JWT",
  jwtSecret: "Secret JWT",
  monthlyTraffic: "Trafic mensuel",
  monthlyTrafficLimit: "Limite de trafic",
  trafficResetDay: "Jour de réinitialisation",
  trafficResetDayTip: "Les configurations dynamiques (sauf « Interrupteur de mise à jour auto ») prennent effet automatiquement en 4 minutes environ ; l’interrupteur de mise à jour auto nécessite de recopier et réexécuter la commande.",
  trafficAlertPercent: "Seuil d’alerte de trafic",
  trafficAlertPercentTip: "Pourcentage de seuil par serveur ; laisser vide = suivre le réglage global, 0 = désactiver l’alerte pour ce serveur. Envoie une notification par cycle de facturation ; se réarme après réinitialisation du trafic ou changement de seuil/de limite. Ne s’applique que si une limite de trafic est définie.",
  trafficAlertThreshold: "Seuil d’alerte de trafic mensuel",
  trafficAlertThresholdTip: "Valeur globale par défaut : notifier une fois lorsque le trafic mensuel d’un serveur atteint ce pourcentage de sa limite. 0 = désactivé. Les serveurs avec leur propre seuil le remplacent ; un serveur à 0 désactive son alerte.",
  networkInterface: "Interfaces réseau",
  networkInterfaceHint: "ex. eth0,ens3",
  rxCorrection: "Correction descendante",
  txCorrection: "Correction montante",
  correctionHint: "Si un seul côté est défini, l’autre est remplacé par 0.",
  pingNodeTip: "Remplace les nœuds globaux par défaut, mettre 0 pour ne pas utiliser le nœud.",
  serverLevel: "serveur",
  trafficCalcType: "Type de calcul du trafic",
  trafficCalcTotal: "Montant + descendant",
  trafficCalcUl: "Montant uniquement",
  trafficCalcDl: "Descendant uniquement",
  trafficCalcMax: "Maximum des deux",
  cloudflareSettings: "Paramètres Cloudflare",
  cloudflareAccountIdPlaceholder: "ex. f81d307be4628170a3878394435c9c8b",
  cloudflareTokenPlaceholder: "Token API Cloudflare",
  cloudflareTokenTip: "Nécessite la permission Account Analytics Read pour interroger l’utilisation.",
  queryD1Quota: "Interroger l’utilisation du compte CF",
  d1UsageQueried: "Requête d’utilisation du compte CF réussie. N’oubliez pas d’enregistrer.",
  d1UsageDate: "Date d’utilisation",
  d1RowsRead: "Lignes lues",
  d1RowsWritten: "Lignes écrites",
  workersRequests: "Requêtes Workers",
  durableObjectsRequests: "Requêtes facturables DO (est.)",
  durableObjectsHttpRequests: "Requêtes HTTP DO",
  durableObjectsHibernationWakeups: "Réveils d’hibernation DO",
  durableObjectsInboundWebSocketMessages: "Messages WebSocket entrants DO",
  durableObjectsOutboundWebSocketMessages: "Messages WebSocket sortants DO",
  billingRatioOneToOne: "facturé 1:1",
  billingRatioWebSocketIncoming: "facturé 20:1",
  billingRatioNotBilled: "non facturé",
  rawRequests: "brut",
  durableObjectsDuration: "Durée DO (GB-s)",
  durableObjectsDurationTip: "La durée de connexion WSS influence l’utilisation. Une connexion persistante de 24 h consomme environ 85 % en continu, sans évoluer avec le nombre de serveurs.",
  todayUsage: "Usage aujourd’hui",
  yesterdayUsage: "Utilisation hier",
  secondsAgo: "s",
  minutesAgo: "min",
  hoursAgo: "h",
  daysAgo: "j",
  loginSuccessful: "Connexion réussie",
  updateSuccess: "Mise à jour réussie",
  serverDeleted: "Serveur supprimé",
  sortOrderSaved: "Ordre enregistré",
  batchDeleted: "Serveurs supprimés",
  databaseRebuiltSuccess: "Historique effacé avec succès",
  databaseRebuiltFailed: "Échec de l’effacement de l’historique",
  databaseUpgradeSuccess: "Mise à jour de la base réussie",
  databaseUpgradeFailed: "Échec de la mise à jour de la base",
  dbColumnsAdded: "Colonnes manquantes dans la base, colonnes ajoutées. Veuillez cliquer à nouveau sur enregistrer.",
  serverUpdateFailed: "Échec mise à jour serveur",
  adminDisabled: "Panneau admin désactivé",
  adminDisabledDesc: "Le panneau d’administration est désactivé en mode multi-site.",
  backToDashboard: "Retour au tableau de bord",
  validationError: "Erreur de validation",
  turnstileSiteKeyRequired: "La clé de site Turnstile est requise lorsque Turnstile est activé",
  turnstileSecretKeyRequired: "La clé secrète Turnstile est requise lorsque Turnstile est activé",
  tgBotTokenRequired: "Le token du bot Telegram est requis lorsque les notifications sont activées",
  notificationWebhookUrlRequired: "L’URL du Webhook est requise lorsque le webhook personnalisé est activé",
  disableOfflineNotify: "Désactiver la notification hors ligne",
  disableNodeNotify: "Désactiver les notifications de ce nœud",
  sendTestNotification: "Envoyer un test",
  testNotificationSent: "Notification de test envoyée. N’oubliez pas d’enregistrer.",
  testNotificationFailed: "Échec de l’envoi de la notification de test",
  saveSuccess: "Paramètres enregistrés",
  serverEdited: "Serveur mis à jour",
  serversDeleted: "Serveurs supprimés",
  corsBlocked: "le site bloque l’accès cross-origin, veuillez corriger.",
  exportServers: "Exporter",
  importServers: "Importer",
  settingsImported: "Réglages du site et de l’apparence importés (site/apparence)",
  importSettingsNote: "Identifiants, JWT, Turnstile, UA personnalisé, règles d’alerte, CSP et l’indicateur d’index ne sont ni exportés ni importés. L’import écrase les réglages actuels.",
  serversExported: "Serveurs exportés avec succès",
  serversExportFailed: "Échec de l’exportation des serveurs",
  serversImported: "Serveurs importés avec succès",
  noServersImported: "Aucun serveur importé",
  noServersToImport: "Aucune donnée de serveur à importer",
  importing: "Importation...",
  exporting: "Exportation...",
  importResult: "Résultat import",
  importedCount: "Importés",
  skippedCount: "Ignorés",
  skippedIds: "ID ignorés",
  selectJsonFile: "Sélectionnez un fichier JSON à importer",
  themeStore: "Boutique de thèmes",
  donation: "Soutenir",
  donationTitle: "Offrez-moi un bubble tea",
  donationDesc: "Si CFSM vous a été utile, envoyez un petit don pour soutenir la maintenance continue.",
  donationToken: "Chaque don devient de l’énergie pour plus de code, de correctifs et de surveillance nocturne.",
  donationThanks: "Merci de faire vivre ce petit projet !",
  donationWechat: "Scanner avec WeChat pour soutenir",
  donationQrAlt: "QR code d’appréciation WeChat",
  themeStoreLoading: "Chargement des thèmes",
  themeStoreLoadFailed: "Échec du chargement de la boutique de thèmes",
  themeStoreNetworkError: "Impossible de charger la boutique de thèmes. Vérifiez l’accès réseau à raw.githubusercontent.com et api.github.com. Essayez de changer de nœud et de réessayer.",
  themeLoadVersions: "Cliquer pour charger les versions",
  themeLoadingVersions: "Chargement des versions...",
  themeStoreCreateTitle: "Créez votre propre thème",
  themeStoreCreateDesc: "Un thème n’est qu’un site statique. Générez index.html et assets/ avec le guide de développement ou le prompt IA, poussez-le sur GitHub puis proposez-le à la boutique : il apparaîtra ici.",
  themeStoreDevDoc: "Guide de développement",
  themeStoreAiPrompt: "Prompt IA",
  themeStoreSubmit: "Proposer un thème",
  themeStoreWarning: "Les thèmes tiers ne sont pas vérifiés",
  themeStoreWarningDesc: "Les thèmes tiers peuvent contenir du code malveillant. Veuillez examiner le code source ou faire confiance à l’auteur avant utilisation. CFSM n’est pas responsable des dommages causés par des thèmes tiers.",
  currentTheme: "Thème actuel",
  builtinTheme: "Thème intégré",
  filterMore: "PLUS",
  noSamples: "Aucune donnée",
  expand: "Développer",
  collapse: "Réduire",
  mikusThemeTagBuiltin: "Intégré",
  mikusThemeTagSakura: "Sakura",
  mikusThemeDescription: "Mode Mikus intégré. Revient au thème par défaut et active les couleurs Mikus, les écrans de chargement et les effets sakura.",
  useBuiltinTheme: "Utiliser l’intégré",
  customThemeUrl: "URL de thème personnalisé",
  customThemeUrlDesc: "Collez une URL d’arborescence GitHub. Utilisez un ID de commit pour figer la version, ex. https://github.com/Author/theme/tree/commitid.",
  applyCustomTheme: "Appliquer",
  switchTheme: "Changer de thème",
  themeApplied: "Thème changé avec succès",
  themeApplyFailed: "Échec du changement de thème",
  themeUrlUnavailable: "L’URL du thème n’est pas disponible pour cette version",
  invalidThemeUrl: "URL de thème invalide",
  invalidUserAgent: "User-Agent personnalisé invalide : seuls les lettres, chiffres, espaces et . _ - / , : ; ( ) + = @ # * ? ~ sont autorisés, 100 caractères max",
  invalidAppPassword: "Mot de passe d’accès applicatif invalide : 16-32 caractères ASCII sans espaces",
  version: "Version",
  changelog: "Nouveautés",
  preview: "Aperçu",
  demo: "Démo",
  view: "Voir",
  threeNetPanelCount: "Lignes du panneau (accueil)",
  themeConfigInvalidCount: "Veuillez saisir une valeur entre 0 et 8",
  themeConfigLoginRequired: "Veuillez vous connecter à l’administration avant de modifier la configuration du thème",
  themeConfigReset: "Réinitialiser",
  colorPresetTitle: "Style de couleurs",
  colorPresetDefault: "Par défaut",
  colorPresetOcean: "Bleu océan",
  colorPresetAurora: "Vert aurore",
  colorPresetNebula: "Violet nébuleuse",
  colorPresetSunset: "Orange coucher de soleil",
  colorPresetSakura: "Rose cerisier",
  colorPresetForest: "Vert forêt",
  colorPresetGraphite: "Graphite"
}, VP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zP
}, Symbol.toStringTag, { value: "Module" })), qP = {
  passkeyRateLimited: "Demasiados intentos. Espera un momento y vuelve a intentarlo.",
  passkeyBrowserPrompt: "Esperando la interacción en el navegador…",
  passkeyPreparing: "Preparando clave de acceso…",
  passkeyVerifying: "Verificando clave de acceso…",
  passkeyPasswordInvalid: "Contraseña de administrador incorrecta.",
  passkeyOptionsFailed: "No se pudo iniciar el registro. Comprueba la conexión y la sesión.",
  passkeyVerifyFailed: "El navegador devolvió una credencial, pero el servidor no pudo verificarla.",
  passkeyAlreadyRegistered: "Esta llave ya está registrada en este sitio.",
  passkeyUserVerificationRequired: "La llave debe admitir verificación de usuario. Configura su PIN FIDO2 e inténtalo de nuevo.",
  passkeyDeviceFailed: "La verificación no terminó: pudo cancelarse, agotar el tiempo o no cumplir los requisitos. Comprueba la conexión y el PIN.",
  passkeyLogin: "Iniciar sesión con una clave de acceso",
  passkeyTitle: "Claves de acceso",
  passkeyDescription: "Usa una llave de seguridad, el llavero de iCloud o Windows Hello. Añade una clave de respaldo.",
  passkeySameOrigin: "Usa un navegador compatible y el dominio HTTPS propio de este Worker.",
  passkeyEmpty: "Aún no hay claves de acceso.",
  passkeyName: "Nombre",
  passkeyNamePlaceholder: "Por ejemplo: YubiKey o iPhone",
  passkeyPassword: "Contraseña actual de administrador",
  passkeyPasswordHint: "Introduce la contraseña para añadir o eliminar una clave.",
  passkeyPasswordRequired: "Introduce primero la contraseña de administrador.",
  passkeyAdd: "Añadir clave",
  passkeyDelete: "Eliminar",
  passkeyDeleteConfirm: "¿Eliminar esta clave de acceso?",
  passkeyAdded: "Clave añadida.",
  passkeyDeleted: "Clave eliminada.",
  passkeyFailed: "La operación falló o se canceló. Comprueba la contraseña y vuelve a intentarlo.",
  theme: "Tema",
  themeAuto: "Seguir al sistema",
  themeDark: "Oscuro",
  themeLight: "Claro",
  language: "Idioma",
  languageAuto: "Auto",
  barChart: "BARRAS",
  ringChart: "ANILLOS",
  expandChart: "Ampliar gráfico",
  collapseChart: "Contraer gráfico",
  table: "TABLA",
  map: "MAPA",
  admin: "Admin",
  all: "Todos",
  totalServers: "Total de servidores",
  totalTraffic: "Tráfico total",
  realtimeSpeed: "Velocidad en tiempo real",
  remainingValue: "Valor restante",
  totalValue: "Valor total",
  monthlyAverageCost: "Prom. mensual",
  configuredPrices: "Con precio",
  todayExchangeRates: "Tipos de cambio de hoy",
  exchangeRateBase: "Base",
  exchangeRateSource: "Fuente del tipo de cambio",
  financeMissingExpire: "Sin vencimiento",
  financeRateNetwork: "API en vivo",
  financeRateCache: "caché de hoy",
  financeRateStaleCache: "caché de respaldo",
  financeRateDefault: "respaldo integrado",
  realtime: "Tiempo real",
  liveConnectionTimeoutTitle: "Conexión en tiempo real finalizada",
  liveConnectionTimeoutMessage: "La conexión en tiempo real alcanzó su límite de tiempo y se cerró. ¿Seguir recibiendo actualizaciones en vivo?",
  continueConnection: "Continuar",
  online: "En línea",
  offline: "Desconectado",
  noServer: "No hay servidores disponibles, agrégalos en",
  noServerSuffix: "",
  backToAdmin: "Panel de administración",
  back: "cd ..",
  hostname: "HOSTNAME",
  region: "CÓDIGO DE REGIÓN",
  regionPlaceholder: "Déjalo vacío para detectarlo automáticamente",
  osArch: "SO/ARQ",
  ram: "RAM",
  disk: "DISK",
  use: "USO",
  dl: "DESC",
  ul: "SUB",
  rx: "RX",
  tx: "TX",
  update: "ACTUALIZ.",
  noData: "No hay datos disponibles",
  ago: "atrás",
  uptime: "Tiempo activo",
  architecture: "Arquitectura",
  os: "SO",
  kernelVersion: "Kernel",
  cpuModel: "Modelo de CPU",
  cpuInfo: "Info de CPU",
  loadAvg: "Carga promedio",
  bootTime: "Hora de arranque",
  totalDiskRam: "Disco / RAM total",
  trafficIn: "Tráfico entrante",
  trafficOut: "Tráfico saliente",
  traffic: "TRÁFICO",
  lastReport: "Último reporte",
  cpuUsage: "Uso de CPU",
  gpuInfo: "Info de GPU",
  gpuUsage: "Uso de GPU",
  gpuMemory: "Memoria de GPU",
  gpuClock: "Reloj SM de GPU",
  gpuPower: "Potencia de GPU",
  memoryUsage: "Uso de memoria",
  diskUsage: "Uso de disco",
  diskIo: "E/S de disco",
  networkTraffic: "Red",
  processes: "Procesos",
  connections: "Conexiones",
  latencyMonitor: "Monitor de latencia",
  packetLoss: "Pérdida de paquetes",
  databaseUpgradeRequired: "Ve al Panel de administración y haz clic en Actualizar base de datos",
  swap: "Swap",
  used: "Usado",
  lastUpdate: "Última actualización",
  workersUpdateAvailable: "Nueva versión",
  autoRefresh: "Autoactualizar",
  seconds: "s",
  timeout: "TIEMPO AGOTADO",
  loadAvgMonitor: "Monitor de carga promedio",
  load1m: "1 min",
  load5m: "5 min",
  load15m: "15 min",
  apiEndpoint: "Endpoint de API",
  switchingSite: "Cambiando de sitio...",
  username: "Usuario",
  password: "Contraseña",
  login: "Iniciar sesión",
  missingCredentials: "Ingresa el usuario y la contraseña",
  invalidCredentials: "Usuario o contraseña inválidos",
  adminPanel: "Panel de administración",
  sudoStatus: "sudo systemctl status",
  refresh: "ACTUALIZAR",
  logout: "Cerrar sesión",
  dashboard: "PANEL",
  total: "Total",
  avgCpu: "CPU prom.",
  servers: "Servidores",
  settings: "Configuración",
  clickToCopy: "Haz clic en",
  installCommand: "Copia el comando de instalación para desplegar el agente en el servidor de destino",
  collectIntervalHint: "Cuando el intervalo de recolección es 0, se muestrea según el intervalo de reporte.",
  serverName: "Nombre del servidor",
  group: "Grupo",
  tags: "Etiquetas",
  note: "Nota",
  tagsPlaceholder: "Separadas por comas",
  notePlaceholder: "Nota interna, solo visible en Admin",
  addServer: "AGREGAR SERVIDOR",
  batchDelete: "ELIMINAR EN LOTE",
  toggleAll: "ALTERNAR TODO",
  refreshCache: "ACTUALIZAR CACHÉ",
  cacheCleared: "Caché de la lista de servidores borrada",
  price: "PRECIO",
  free: "Gratis",
  currency: "Moneda",
  billingCycle: "Ciclo de facturación",
  autoRenewal: "Renovación automática",
  expire: "Tiempo restante",
  expireDays: "d",
  day: "día",
  days: "días",
  month: "mes",
  expired: "VENCIDO",
  agentVersion: "VERSIÓN DEL AGENTE",
  status: "ESTADO",
  actions: "ACCIONES",
  noServers: "No hay servidores configurados",
  dragSort: "Arrastra para reordenar",
  copy: "Copiar",
  edit: "Editar",
  delete: "Eliminar",
  custom: "Personalizado",
  siteTitle: "Título del sitio",
  appearance: "Apariencia",
  bgImage: "Imagen de fondo",
  mobileBgImage: "Imagen de fondo para móvil",
  remoteImageTip: "Para imágenes remotas, agrega el origen de la imagen a la lista blanca de dominios estáticos de CSP.",
  favicon: "Favicon",
  upload: "SUBIR",
  customHead: "<head> personalizado",
  customScript: "Script personalizado (pie de página)",
  themeOptions: "Opciones del tema JSON",
  mikusThemeToggle: "Activar modo Mikus",
  themeOptionsTip: 'Opciones personalizadas para temas de terceros. Debe ser un objeto JSON; por ejemplo, {"mikus":1} activa la capa frontend de Mikus.',
  cspStatic: "Lista blanca de dominios estáticos de CSP",
  cspStaticTip: "Dominios permitidos para archivos estáticos, p. ej. https://unpkg.com,https://cdn.jsdelivr.net",
  cspApi: "Lista blanca de dominios de API de CSP",
  cspApiTip: "Dominios de API permitidos, p. ej. https://api.example.com",
  cspWarning: "Al agregar CSS/JS de terceros, asegúrate de que la fuente sea confiable. Antes de usarlo, se recomienda enviar el código fuente JS a una IA para analizar su seguridad. Una vez confirmado, aloja los recursos en tu propio repositorio de GitHub y cárgalos mediante un CDN. Se recomienda alojar los recursos en tu propio repositorio de GitHub y cargarlos mediante un CDN. Un uso incorrecto puede implicar riesgos de seguridad graves. Los recursos externos deben agregarse a la lista blanca de dominios estáticos de CSP de arriba.",
  cspInvalidDomain: "Formato de dominio CSP inválido. Usa solo orígenes https://, sin rutas ni parámetros de consulta.",
  displayMode: "Modo de visualización predeterminado",
  displayModeBar: "Gráfico de barras",
  displayModeRing: "Gráfico de anillos",
  displayModeTable: "Tabla",
  defaultTheme: "Apariencia predeterminada",
  defaultLanguage: "Idioma predeterminado",
  displayOptions: "Opciones de visualización",
  autoDiscovery: "Descubrimiento automático",
  autoDiscoveryTip: "Al activarlo, un agente que reporte sin ID de servidor se creará automáticamente. Los servidores nuevos pueden tardar hasta 2 minutos en aparecer en el panel. Consulta el README para más detalles.",
  autoAdd: "AGREGAR AUTO",
  autoAddDisabledTip: "El descubrimiento automático está desactivado. Actívalo en Configuración → Ajustes del sitio.",
  autoAddNamePlaceholder: "Vacío para usar la IP pública",
  wssReportEnabled: "Reporte WSS del agente",
  customUserAgent: "User-Agent personalizado",
  customUserAgentTip: "User-Agent que usan las solicitudes de reporte del agente y que la regla de seguridad de dominio de Cloudflare permite. Requiere el agente v1.1.1 o superior.",
  customUserAgentDocs: "Ver README",
  customUserAgentInvalid: "Solo se permiten letras, dígitos, espacios y . _ - / , : ; ( ) + = @ # * ? ~, máximo 100 caracteres",
  appPassword: "Contraseña de acceso para apps",
  appPasswordTip: "Las apps de terceros y los widgets de iOS pueden enviar esta contraseña en la cabecera X-App-Password para ver sitios privados y servidores ocultos. Déjalo vacío para desactivarlo.",
  appPasswordPlaceholder: "16-32 caracteres, vacío para desactivar",
  appPasswordInvalid: "Debe tener 16-32 caracteres ASCII (letras, dígitos o símbolos) sin espacios",
  wssReportTip: "Activar WSS reduce las solicitudes a Workers y mejora el tiempo real, pero tenerlo activo las 24 horas puede consumir el 85% de la duración de Durable Objects, sin importar la cantidad de servidores. Se recomienda activarlo cuando ningún otro proyecto use Durable Objects.",
  wssReportHours: "Horas activas",
  wssReportHoursTip: "El panel muestra las horas locales. La configuración se guarda en horas UTC y, fuera de las horas seleccionadas, los agentes reportan por HTTP.",
  localTime: "Hora local",
  hoursSelected: "horas seleccionadas",
  agentWssMinVersion: "Requiere Agent v1.0.10+",
  selectAll: "Seleccionar todo",
  clear: "Limpiar",
  frontendWsTimeoutMinutes: "Tiempo límite de WSS del frontend (minutos)",
  frontendWsTimeoutMinutesTip: "Cierra la conexión en tiempo real del frontend después de esta cantidad de minutos. 0 desactiva el tiempo límite.",
  invalidFrontendWsTimeoutMinutes: "El tiempo límite de WSS del frontend debe ser un número entero de 0 a 1440 minutos.",
  publicAccess: "Acceso público",
  showPrice: "Mostrar precio",
  showExpire: "Mostrar vencimiento",
  showTf: "Mostrar cuota de tráfico",
  showThreeNetDetails: "Mostrar detalles de nodos en el inicio",
  longHistoryPoints: "Puntos de historial de largo plazo",
  longHistoryPointsTip: "Cantidad de muestras devueltas en consultas de más de 1 hora. Más puntos dan más detalle, pero leen más filas.",
  historyPointCount: "{points} puntos",
  notifications: "Notificaciones",
  offlineAlert: "Alerta de desconexión",
  expireReminder: "Recordatorio de vencimiento",
  disabled: "Desactivado",
  enable: "Activar",
  enabled: "Activado",
  notifyOffline: "Retraso de notificación de desconexión",
  notifyOfflineMinutes: "Tras {minutes} min desconectado",
  notifyExpireDays: "Notificar dentro de los {days} días previos al vencimiento",
  expireReminderCustomPlaceholder: "Días antes del vencimiento (1-365)",
  resourceAlert: "Alerta de carga de recursos",
  resourceAlertWindow: "Ventana de alerta",
  resourceAlertWindowMinutes: "Ventana de {minutes} min",
  resourceAlertAddRule: "Agregar regla",
  resourceAlertEmpty: "No hay reglas de alerta de carga de recursos configuradas",
  resourceAlertRule: "Regla",
  resourceAlertRuleName: "Nombre",
  resourceAlertRuleNamePlaceholder: "p. ej. CPU alta",
  resourceAlertMetric: "Elemento monitoreado",
  resourceAlertThreshold: "Umbral",
  resourceAlertServers: "Servidores",
  resourceAlertInterval: "Intervalo",
  resourceAlertIntervalMinutes: "{minutes} min",
  resourceAlertMode: "Modo de activación",
  resourceAlertModeContinuous: "Todas las muestras de la ventana superan el umbral",
  resourceAlertModeAverage: "El promedio de la ventana supera el umbral",
  resourceAlertCpu: "Umbral de CPU (%)",
  resourceAlertRam: "Umbral de RAM (%)",
  resourceAlertNetIn: "Umbral de descarga (Mbps)",
  resourceAlertNetOut: "Umbral de subida (Mbps)",
  resourceAlertNetTotal: "Umbral de red total (Mbps)",
  resourceAlertTip: "Nota: por las limitaciones de CF Workers, demasiadas reglas pueden causar retrasos o pérdidas de notificaciones.",
  telegramToken: "Telegram / WeChat / Feishu / DingTalk / Bark / Server酱 / WxPusher / Gotify / OneBot",
  chatId: "Chat ID",
  notificationChannel: "Canal de notificación",
  builtinNotification: "Canal integrado",
  customWebhook: "Webhook personalizado",
  smtpNotification: "Correo SMTP",
  smtpHost: "Host SMTP",
  smtpPort: "Puerto",
  smtpPortTip: "Cloudflare Workers bloquea el puerto 25. Usa 465 (TLS implícito) o 587 (STARTTLS).",
  smtpSecure: "Cifrado",
  smtpSecureAuto: "Auto (según puerto)",
  smtpSecureTls: "TLS implícito (465)",
  smtpUser: "Usuario",
  smtpPassword: "Contraseña",
  smtpFrom: "Remitente",
  smtpTo: "Destinatarios",
  smtpInvalidEmail: "Ingresa un correo electrónico válido, p. ej. user@example.com",
  smtpToRequired: "Se requiere al menos un correo de destinatario",
  smtpFieldRequired: "Este campo es obligatorio",
  smtpPortInvalid: "Puerto inválido (1-65535; Cloudflare Workers bloquea el puerto 25)",
  smtpSecureRequired: "Los puertos distintos de 465/587 requieren un método de cifrado explícito",
  smtpConfigInvalid: "La configuración SMTP está incompleta; revisa los ajustes de SMTP",
  smtpTip: "Envía correos de texto plano mediante cloudflare:sockets (Cloudflare Workers bloquea el puerto 25). QQ / 163 requieren un código de autorización SMTP, no la contraseña de inicio de sesión.",
  webhookUrl: "Webhook URL",
  webhookMethod: "Método",
  webhookFormat: "Formato del cuerpo",
  webhookHeaders: "Encabezados",
  webhookBody: "Cuerpo",
  webhookParams: "Parámetros de consulta",
  notificationTemplate: "Plantilla de notificación",
  notificationLanguage: "Idioma de notificaciones",
  notificationLanguageTip: "Idioma de los mensajes de alerta enviados a Telegram y otros canales. Las plantillas personalizadas y los cuerpos de webhook no se traducen.",
  notificationTimezone: "Zona horaria de notificaciones",
  notificationTimezoneTip: "Se usa solo para las horas mostradas en las notificaciones y el horario de los recordatorios de vencimiento. Usa una zona horaria IANA como Asia/Shanghai.",
  expireNotificationTime: "Hora del recordatorio de vencimiento",
  expireNotificationTimeTip: "Revisa el estado de vencimiento y envía recordatorios todos los días a la hora seleccionada, en la zona horaria de notificaciones. Usa 0-23.",
  invalidNotificationTimezone: "La zona horaria de notificaciones debe ser una zona horaria IANA válida, por ejemplo Asia/Shanghai.",
  invalidExpireNotificationTime: "La hora de notificación de vencimiento debe ser un número entero de 0 a 23.",
  invalidExpireReminder: "El recordatorio de vencimiento debe ser un número entero de 0 a 365 días.",
  saveConfig: "GUARDAR CONFIGURACIÓN",
  saveHint: "Los cambios solo se aplican al guardar",
  saving: "GUARDANDO...",
  hostnameLabel: "Hostname",
  groupName: "Nombre del grupo",
  expirationDate: "Fecha de vencimiento",
  trafficLimit: "Límite de tráfico",
  autoUpdate: "Actualización automática",
  autoUpdateRiskTitle: "Riesgo de la actualización automática",
  autoUpdateRiskDesc: "Asegúrate de que el servidor donde está instalado el agente sea seguro. Después de activar la actualización automática, copia el comando de instalación en el servidor y ejecútalo.",
  autoUpdateRiskConfirm: "Activar actualización automática",
  autoUpdateRiskCancel: "Cancelar",
  hideFromPublic: "Ocultar al público",
  cancel: "CANCELAR",
  save: "GUARDAR",
  dangerWarning: "Advertencia de peligro",
  deleteConfirm: "Esto eliminará todos los datos del servidor del panel de monitoreo",
  recommendUninstall: "Se recomienda ejecutar primero el comando de desinstalación en el servidor de destino para detener el agente",
  clickToCopyCmd: "Haz clic en el botón de copiar para copiar el comando de desinstalación",
  confirmDelete: "Confirmar eliminación",
  cancelAction: "Cancelar",
  default: "Predeterminado",
  editConf: "Editar configuración",
  deleteConf: "Eliminar configuración",
  errorInvalidUsername: "[ERROR] Usuario o contraseña inválidos",
  serverUpdateFailedDbNotReady: '[ERROR] Falló la actualización. Ve a Gestión de base de datos y haz clic en "Actualizar base de datos" para migrar el nuevo campo.',
  configSaved: "[OK] ¡Configuración guardada! Recargando...",
  saveFailed: "[ERROR] Error al guardar: ",
  saveFailedUnknown: "[ERROR] Error al guardar: error desconocido",
  addFailed: "[ERROR] Error al agregar",
  serverAdded: "Servidor agregado",
  serverUpdated: "Servidor actualizado",
  batchEdit: "Edición en lote",
  batchEditSuccess: "[OK] Se editaron {count} servidores en lote",
  noBatchEditFields: "Selecciona los campos que quieres actualizar",
  selectServersToEdit: "Selecciona los servidores que quieres editar",
  basicInfo: "Información básica",
  billing: "Facturación",
  deleteFailed: "[ERROR] Error al eliminar",
  selectServers: "[WARN] Selecciona los servidores que quieres eliminar",
  confirmDeleteServers: "[?] ¿Eliminar ",
  irreversible: " servidores seleccionados? Esta acción es irreversible.",
  imageSizeWarning: "[WARN] La imagen pesa más de 800KB; considera usar una URL externa",
  enterServerName: "[WARN] Ingresa un nombre de servidor",
  loginRequired: "Inicia sesión para ver datos históricos de más de 1 día",
  loginRequiredTitle: "Inicio de sesión requerido",
  verificationFailed: "Falló la verificación",
  refreshToRetry: "Actualiza la página para intentarlo de nuevo",
  verificationError: "Error de verificación",
  turnstileNotSupported: "Turnstile no compatible",
  turnstileNotSupportedDesc: "Turnstile está activado en uno de los endpoints remotos. Desactívalo en el sitio remoto para usar este panel.",
  turnstileSiteKeyMismatch: "Las Site Keys de Turnstile no coinciden",
  turnstileSiteKeyMismatchDesc: "Varios sitios tienen Turnstile activado, pero usan Site Keys distintas. Usa el mismo widget de Turnstile en todos los sitios activados.",
  dbManagement: "Gestión de base de datos",
  upgradeDatabase: "Actualizar base de datos",
  clearHistory: "Borrar datos históricos",
  upgradeDesc: "Actualiza el esquema de la base de datos a la versión más reciente",
  clearHistoryDesc: "Elimina todo el historial de monitoreo y conserva los servidores y la configuración",
  dangerOperation: "Operación peligrosa",
  clearHistoryWarning: "Esta operación eliminará todo el historial de monitoreo. La lista de servidores y la configuración se conservarán. ¡Esta acción es irreversible!",
  confirmClear: "Confirmar borrado",
  operationSuccess: "Operación exitosa",
  operationFailed: "Falló la operación",
  invalidServerName: "Nombre de servidor inválido",
  invalidPingNodeFormat: "Usa un dominio, IPv4, IPv6 o host:port. Una IPv6 con puerto debe usar [dirección]:puerto; el puerto debe estar entre 1 y 65535.",
  invalidNetworkInterface: "Los nombres de interfaz de red no son válidos. Usa nombres separados por comas, por ejemplo eth0,ens3.",
  invalidThemeOptionsFormat: 'Las opciones del tema deben ser un objeto JSON válido, por ejemplo {"a":1,"b":2}.',
  invalidTrafficCorrection: "La corrección de tráfico debe ser un número de 0 a 1,000,000 GB",
  invalidServerId: "ID de servidor inválido",
  missingSortData: "Faltan datos de ordenamiento",
  invalidSortId: "Los datos de ordenamiento contienen un ID inválido",
  selectServersToDelete: "Selecciona los servidores que quieres eliminar",
  invalidServerIdInList: "Contiene un ID de servidor inválido",
  unknownAction: "Acción desconocida",
  cloudflareTokenRequired: "Configura primero el Token de Cloudflare",
  cloudflareAccountIdRequired: "Configura primero el Account ID de Cloudflare",
  upgrading: "Actualizando...",
  clearing: "Borrando...",
  collectInterval: "Intervalo de recolección (segundos)",
  reportInterval: "Intervalo de reporte (segundos)",
  wssReportInterval: "Intervalo de reporte WSS (segundos)",
  connectionMode: "Modo de conexión",
  connectionModeAuto: "Auto (WSS + respaldo POST)",
  connectionModeHttp: "Solo HTTP POST",
  pingMode: "Modo de Ping",
  pingModeIcmpRootHint: "ICMP solo es compatible cuando el agente se instala como root.",
  wssReportDisabledConnectionHint: "El reporte WSS está desactivado globalmente; actívalo en la configuración.",
  targetOs: "Sistema de destino",
  installMode: "Usuario de instalación",
  installModeCurrentUser: "Usuario actual",
  installModeCfsmUser: "Usuario cfsm dedicado",
  nonRootInstallTip: "El usuario cfsm dedicado solo es compatible con Linux con systemd.",
  nonRootInstallRunStep: "instalar como el usuario cfsm",
  nonRootInstallSudoRequired: "Necesario para preparar la instalación sin root.",
  dedicatedUserSystemdRequired: "Alpine/OpenRC y otros sistemas no compatibles requieren systemd. Selecciona Usuario actual.",
  uninstallMode: "Usuario de instalación",
  uninstallModeCurrentUser: "Usuario actual",
  uninstallModeCfsmUser: "Usuario cfsm dedicado",
  nonRootUninstallUserMissing: "El usuario cfsm no existe; selecciona Usuario actual o verifica el usuario de la instalación original.",
  dedicatedUserUninstallUnsupported: "Los sistemas no compatibles requieren systemd. Selecciona Usuario actual.",
  httpsRequired: "El protocolo actual es HTTP; usa HTTPS para copiar el comando de instalación.",
  copied: "¡Copiado!",
  close: "Cerrar",
  agentVersionSelect: "Versión del agente",
  agentVersionShell: "Versión Shell",
  agentVersionGo: "Versión Go",
  installVersionPlaceholder: "Última versión por defecto",
  ghProxy: "Proxy de GitHub de terceros",
  ghProxyTip: "Los proxies de terceros pueden ver o modificar los archivos de instalación descargados y representar riesgos de seguridad.",
  installInstance: "Nombre de instancia",
  installInstanceTip: "Déjalo vacío para usar la instancia predeterminada. Indica un nombre para instalar varias instancias independientes en la misma máquina; los nombres de servicio y las rutas de configuración incluirán el sufijo. Solo se permiten letras, dígitos, guiones bajos y guiones.",
  installInstancePlaceholder: "Instancia predeterminada",
  uninstallAllInstances: "Desinstalar todas las instancias",
  uninstallAllInstancesTip: "Si se marca, desinstala todas las instancias de esta máquina (equivalente a --all) e ignora el nombre de instancia.",
  instanceNameInvalid: "Los nombres de instancia solo permiten letras, dígitos, guiones bajos y guiones, hasta 32 caracteres; se ignoran los demás caracteres",
  installVersionTip: "Obtén la última versión en https://github.com/huilang-me/cfsm-agent/releases",
  dockerVersionTip: "Tag de la imagen Docker; por defecto, latest",
  ghProxyPlaceholder: "Directo",
  pingNodes: "Nodos de Ping",
  customCt: "Telecom",
  customCu: "Unicom",
  customCm: "Mobile",
  jwtSecretTip: "El secreto JWT se usa para generar y verificar los tokens de inicio de sesión. Usa una cadena aleatoria de al menos 32 caracteres.",
  jwtSecretMinLength: "El JWT Secret debe tener al menos 32 caracteres",
  jwtSecretNoWhitespace: "El JWT Secret no debe contener espacios en blanco",
  adminLoginSettings: "Configuración de inicio de sesión de admin",
  changePassword: "Cambiar contraseña",
  cancelPasswordChange: "Cancelar cambio de contraseña",
  confirmPassword: "Confirmar contraseña",
  apiSecretTip: "El API_SECRET para los reportes de servidores sigue usando la variable de entorno, sin importar la contraseña configurada aquí.",
  passwordRequired: "No hay contraseña de admin configurada. Define una antes de guardar.",
  passwordMismatch: "Las contraseñas no coinciden",
  usernameRequired: "El usuario es obligatorio",
  securitySettings: "Configuración de seguridad",
  enableTurnstile: "Activar captcha Turnstile (global)",
  enableTurnstileLogin: "Activar captcha Turnstile en el inicio de sesión",
  turnstileLoginTip: "Si se activa, la verificación de Turnstile solo se pide al iniciar sesión.",
  turnstileSiteKey: "Site Key",
  turnstileSiteKeyPlaceholder: "Site Key de Turnstile",
  turnstileSecretKey: "Secret Key",
  turnstileSecretKeyPlaceholder: "Secret Key de Turnstile",
  turnstileTip: "Cloudflare Turnstile ofrece protección contra bots. Obtén las claves en el Dashboard de Cloudflare.",
  jwtSettings: "Configuración de JWT",
  jwtSecret: "JWT Secret",
  monthlyTraffic: "Tráfico mensual",
  monthlyTrafficLimit: "Límite de tráfico",
  trafficResetDay: "Día de reinicio del tráfico",
  trafficResetDayTip: 'Las configuraciones dinámicas (excepto el "Interruptor de actualización automática") se aplican automáticamente en unos 4 minutos; el Interruptor de actualización automática requiere volver a copiar y ejecutar el comando.',
  trafficAlertPercent: "Umbral de alerta de tráfico",
  trafficAlertPercentTip: "Porcentaje de umbral por servidor; vacío = usar la configuración global, 0 = desactivar la alerta para este servidor. Envía una notificación por ciclo de facturación; se reactiva tras el reinicio del tráfico o cuando cambia el umbral o el límite. Solo aplica si hay un límite de tráfico configurado.",
  trafficAlertThreshold: "Umbral de alerta de tráfico mensual",
  trafficAlertThresholdTip: "Valor global predeterminado: notifica una vez cuando el tráfico mensual de un servidor alcanza este porcentaje de su límite de tráfico. 0 = desactivado. Los servidores con umbral propio lo reemplazan; un servidor configurado en 0 desactiva su alerta.",
  networkInterface: "Interfaces de red",
  networkInterfaceHint: "p. ej. eth0,ens3",
  rxCorrection: "Corrección de descarga",
  txCorrection: "Corrección de subida",
  correctionHint: "Si solo se define un lado, el otro se sobrescribe con 0.",
  pingNodeTip: "Reemplaza los nodos globales predeterminados; usa 0 para no usar el nodo.",
  serverLevel: "servidor",
  trafficCalcType: "Tipo de cálculo de tráfico",
  trafficCalcTotal: "Subida + descarga",
  trafficCalcUl: "Solo subida",
  trafficCalcDl: "Solo descarga",
  trafficCalcMax: "Máximo de ambos",
  cloudflareSettings: "Configuración de Cloudflare",
  cloudflareAccountIdPlaceholder: "p. ej. f81d307be4628170a3878394435c9c8b",
  cloudflareTokenPlaceholder: "Cloudflare API Token",
  cloudflareTokenTip: "Requiere el permiso Account Analytics Read para consultar el uso.",
  queryD1Quota: "Consultar uso de la cuenta CF",
  d1UsageQueried: "Consulta de uso de la cuenta CF exitosa. No olvides guardar.",
  d1UsageDate: "Fecha de uso",
  d1RowsRead: "Filas leídas",
  d1RowsWritten: "Filas escritas",
  workersRequests: "Solicitudes de Workers",
  durableObjectsRequests: "Solicitudes facturables DO (est.)",
  durableObjectsHttpRequests: "Solicitudes HTTP DO",
  durableObjectsHibernationWakeups: "Reactivaciones de hibernación DO",
  durableObjectsInboundWebSocketMessages: "Mensajes WebSocket entrantes DO",
  durableObjectsOutboundWebSocketMessages: "Mensajes WebSocket salientes DO",
  billingRatioOneToOne: "facturado 1:1",
  billingRatioWebSocketIncoming: "facturado 20:1",
  billingRatioNotBilled: "no facturado",
  rawRequests: "sin procesar",
  durableObjectsDuration: "Duración DO (GB-s)",
  durableObjectsDurationTip: "El tiempo activo de la conexión Wss afecta el uso. Una conexión persistente de 24 horas usa de forma constante cerca del 85%, y esto no depende de la cantidad de servidores.",
  todayUsage: "Uso de hoy",
  yesterdayUsage: "Uso de ayer",
  secondsAgo: "s atrás",
  minutesAgo: "min atrás",
  hoursAgo: "h atrás",
  daysAgo: "días atrás",
  loginSuccessful: "Inicio de sesión exitoso",
  updateSuccess: "Actualización exitosa",
  serverDeleted: "Servidor eliminado",
  sortOrderSaved: "Orden guardado",
  batchDeleted: "Servidores eliminados",
  databaseRebuiltSuccess: "Datos históricos borrados correctamente",
  databaseRebuiltFailed: "No se pudieron borrar los datos históricos",
  databaseUpgradeSuccess: "Base de datos actualizada correctamente",
  databaseUpgradeFailed: "Falló la actualización de la base de datos",
  dbColumnsAdded: "Faltaban columnas en la base de datos y se agregaron. Haz clic en guardar de nuevo.",
  serverUpdateFailed: "Falló la actualización del servidor",
  adminDisabled: "Panel de administración desactivado",
  adminDisabledDesc: "El panel de administración se desactiva al usar el modo multisitio.",
  backToDashboard: "Volver al panel",
  validationError: "Error de validación",
  turnstileSiteKeyRequired: "La Site Key de Turnstile es obligatoria cuando Turnstile está activado",
  turnstileSecretKeyRequired: "La Secret Key de Turnstile es obligatoria cuando Turnstile está activado",
  tgBotTokenRequired: "El Bot Token de Telegram es obligatorio cuando las notificaciones están activadas",
  notificationWebhookUrlRequired: "La Webhook URL es obligatoria cuando el webhook personalizado está activado",
  disableOfflineNotify: "Desactivar notificación de desconexión",
  disableNodeNotify: "Desactivar notificaciones de este nodo",
  sendTestNotification: "Enviar prueba",
  testNotificationSent: "Notificación de prueba enviada correctamente. No olvides guardar.",
  testNotificationFailed: "No se pudo enviar la notificación de prueba",
  saveSuccess: "Configuración guardada correctamente",
  serverEdited: "Servidor actualizado correctamente",
  serversDeleted: "Servidores eliminados correctamente",
  corsBlocked: "el sitio bloquea el acceso entre orígenes; corrígelo.",
  exportServers: "Exportar",
  importServers: "Importar",
  settingsImported: "Ajustes de sitio y apariencia importados (sitio/apariencia)",
  importSettingsNote: "Credenciales, JWT, Turnstile, UA personalizado, reglas de alerta, CSP y la marca de índices no se exportan ni se importan. La importación sobrescribe los ajustes actuales.",
  serversExported: "Servidores exportados correctamente",
  serversExportFailed: "No se pudieron exportar los servidores",
  serversImported: "Servidores importados correctamente",
  noServersImported: "No se importó ningún servidor",
  noServersToImport: "No hay datos de servidores para importar",
  importing: "Importando...",
  exporting: "Exportando...",
  importResult: "Resultado de la importación",
  importedCount: "Importados",
  skippedCount: "Omitidos",
  skippedIds: "IDs omitidos",
  selectJsonFile: "Selecciona un archivo JSON para importar",
  themeStore: "Tienda de temas",
  donation: "Apoyar",
  donationTitle: "Invítame un bubble tea",
  donationDesc: "Si CFSM te ha sido útil, envía una pequeña donación para apoyar su mantenimiento.",
  donationToken: "Cada aporte se convierte en energía para más código, más correcciones y más noches de monitoreo.",
  donationThanks: "¡Gracias por mantener vivo este pequeño proyecto!",
  donationWechat: "Escanea con WeChat para apoyar",
  donationQrAlt: "Código QR de apoyo en WeChat",
  themeStoreLoading: "Cargando temas",
  themeStoreLoadFailed: "No se pudo cargar la tienda de temas",
  themeStoreNetworkError: "No se pudo cargar la tienda de temas. Verifica el acceso de red a raw.githubusercontent.com y api.github.com. Prueba cambiar de nodo y vuelve a intentarlo.",
  themeLoadVersions: "Haz clic para cargar versiones",
  themeLoadingVersions: "Cargando versiones...",
  themeStoreCreateTitle: "Crea tu propio tema",
  themeStoreCreateDesc: "Un tema es solo un sitio estático. Genera index.html y assets/ con la guía de desarrollo o el prompt de IA, súbelo a GitHub y envíalo a la tienda: aparecerá aquí mismo.",
  themeStoreDevDoc: "Guía de desarrollo",
  themeStoreAiPrompt: "Prompt de IA",
  themeStoreSubmit: "Enviar tema",
  themeStoreWarning: "Los temas de terceros no están verificados",
  themeStoreWarningDesc: "Los temas de terceros pueden contener código malicioso. Revisa el código fuente o asegúrate de confiar en el autor antes de usarlos. CFSM no se hace responsable de ningún daño causado por temas de terceros.",
  currentTheme: "Tema actual",
  builtinTheme: "Tema integrado",
  filterMore: "MÁS",
  noSamples: "Sin muestras",
  expand: "Expandir",
  collapse: "Contraer",
  mikusThemeTagBuiltin: "Integrado",
  mikusThemeTagSakura: "Sakura",
  mikusThemeDescription: "Modo Mikus integrado. Vuelve al tema predeterminado y activa los colores, las pantallas de carga y los efectos de sakura de Mikus.",
  useBuiltinTheme: "Usar integrado",
  customThemeUrl: "URL de tema personalizado",
  customThemeUrlDesc: "Pega la URL del árbol de un tema en GitHub. Usa un ID de commit para fijar la versión, p. ej. https://github.com/Author/theme/tree/commitid.",
  applyCustomTheme: "Aplicar personalizado",
  switchTheme: "Cambiar tema",
  themeApplied: "Tema cambiado correctamente",
  themeApplyFailed: "No se pudo cambiar el tema",
  themeUrlUnavailable: "La URL del tema no está disponible para esta versión",
  invalidThemeUrl: "URL de tema inválida",
  invalidUserAgent: "User-Agent personalizado no válido: solo se permiten letras, dígitos, espacios y . _ - / , : ; ( ) + = @ # * ? ~, máximo 100 caracteres",
  invalidAppPassword: "Contraseña de acceso para apps no válida: debe tener 16-32 caracteres ASCII sin espacios",
  version: "Versión",
  changelog: "Registro de cambios",
  preview: "Vista previa",
  demo: "Demo",
  view: "Ver",
  threeNetPanelCount: "Líneas del panel (inicio)",
  themeConfigInvalidCount: "Introduzca un valor entre 0 y 8",
  themeConfigLoginRequired: "Inicie sesión en el panel de administración antes de cambiar la configuración del tema",
  themeConfigReset: "Restablecer",
  colorPresetTitle: "Estilo de color",
  colorPresetDefault: "Predeterminado",
  colorPresetOcean: "Azul océano",
  colorPresetAurora: "Verde aurora",
  colorPresetNebula: "Violeta nebulosa",
  colorPresetSunset: "Naranja atardecer",
  colorPresetSakura: "Rosa cerezo",
  colorPresetForest: "Verde bosque",
  colorPresetGraphite: "Grafito"
}, GP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qP
}, Symbol.toStringTag, { value: "Module" }));
