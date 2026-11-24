var lm = Object.defineProperty;
var cm = (t, e, s) => e in t ? lm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var G = (t, e, s) => cm(t, typeof e != "symbol" ? e + "" : e, s);
/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function al(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const s of t.split(",")) e[s] = 1;
  return (s) => s in e;
}
const Be = {}, Ri = [], rs = () => {
}, Gd = () => !1, lo = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), co = (t) => t.startsWith("onUpdate:"), ht = Object.assign, ol = (t, e) => {
  const s = t.indexOf(e);
  s > -1 && t.splice(s, 1);
}, um = Object.prototype.hasOwnProperty, Ie = (t, e) => um.call(t, e), fe = Array.isArray, Mi = (t) => jn(t) === "[object Map]", Kd = (t) => jn(t) === "[object Set]", wc = (t) => jn(t) === "[object Date]", pe = (t) => typeof t == "function", nt = (t) => typeof t == "string", us = (t) => typeof t == "symbol", Oe = (t) => t !== null && typeof t == "object", $d = (t) => (Oe(t) || pe(t)) && pe(t.then) && pe(t.catch), Jd = Object.prototype.toString, jn = (t) => Jd.call(t), dm = (t) => jn(t).slice(8, -1), Yd = (t) => jn(t) === "[object Object]", rl = (t) => nt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, fn = /* @__PURE__ */ al(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), uo = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((s) => e[s] || (e[s] = t(s)));
}, fm = /-\w/g, wt = uo(
  (t) => t.replace(fm, (e) => e.slice(1).toUpperCase())
), hm = /\B([A-Z])/g, mi = uo(
  (t) => t.replace(hm, "-$1").toLowerCase()
), fo = uo((t) => t.charAt(0).toUpperCase() + t.slice(1)), Ho = uo(
  (t) => t ? `on${fo(t)}` : ""
), os = (t, e) => !Object.is(t, e), jo = (t, ...e) => {
  for (let s = 0; s < t.length; s++)
    t[s](...e);
}, Xd = (t, e, s, i = !1) => {
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
let Rc;
const ho = () => Rc || (Rc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ll(t) {
  if (fe(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++) {
      const i = t[s], n = nt(i) ? ym(i) : ll(i);
      if (n)
        for (const a in n)
          e[a] = n[a];
    }
    return e;
  } else if (nt(t) || Oe(t))
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
function $e(t) {
  let e = "";
  if (nt(t))
    e = t;
  else if (fe(t))
    for (let s = 0; s < t.length; s++) {
      const i = $e(t[s]);
      i && (e += i + " ");
    }
  else if (Oe(t))
    for (const s in t)
      t[s] && (e += s + " ");
  return e.trim();
}
const vm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _m = /* @__PURE__ */ al(vm);
function Qd(t) {
  return !!t || t === "";
}
function Sm(t, e) {
  if (t.length !== e.length) return !1;
  let s = !0;
  for (let i = 0; s && i < t.length; i++)
    s = cl(t[i], e[i]);
  return s;
}
function cl(t, e) {
  if (t === e) return !0;
  let s = wc(t), i = wc(e);
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
      if (r && !l || !r && l || !cl(t[o], e[o]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const Zd = (t) => !!(t && t.__v_isRef === !0), F = (t) => nt(t) ? t : t == null ? "" : fe(t) || Oe(t) && (t.toString === Jd || !pe(t.toString)) ? Zd(t) ? F(t.value) : JSON.stringify(t, ef, 2) : String(t), ef = (t, e) => Zd(e) ? ef(t, e.value) : Mi(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (s, [i, n], a) => (s[zo(i, a) + " =>"] = n, s),
    {}
  )
} : Kd(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((s) => zo(s))
} : us(e) ? zo(e) : Oe(e) && !fe(e) && !Yd(e) ? String(e) : e, zo = (t, e = "") => {
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
let dt;
class km {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && dt && (dt.active ? (this.parent = dt, this.index = (dt.scopes || (dt.scopes = [])).push(
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
      const s = dt;
      try {
        return dt = this, e();
      } finally {
        dt = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = dt, dt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (dt === this)
        dt = this.prevScope;
      else {
        let e = dt;
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
  return dt;
}
let ze;
const Vo = /* @__PURE__ */ new WeakSet();
class tf {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, dt && (dt.active ? dt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Vo.has(this) && (Vo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || nf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Mc(this), af(this);
    const e = ze, s = qt;
    ze = this, qt = !0;
    try {
      return this.fn();
    } finally {
      of(this), ze = e, qt = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        fl(e);
      this.deps = this.depsTail = void 0, Mc(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Vo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    xr(this) && this.run();
  }
  get dirty() {
    return xr(this);
  }
}
let sf = 0, hn, pn;
function nf(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = pn, pn = t;
    return;
  }
  t.next = hn, hn = t;
}
function ul() {
  sf++;
}
function dl() {
  if (--sf > 0)
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
function af(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function of(t) {
  let e, s = t.depsTail, i = s;
  for (; i; ) {
    const n = i.prevDep;
    i.version === -1 ? (i === s && (s = n), fl(i), xm(i)) : e = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = n;
  }
  t.deps = e, t.depsTail = s;
}
function xr(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (rf(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function rf(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Pn) || (t.globalVersion = Pn, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !xr(t))))
    return;
  t.flags |= 2;
  const e = t.dep, s = ze, i = qt;
  ze = t, qt = !0;
  try {
    af(t);
    const n = t.fn(t._value);
    (e.version === 0 || os(n, t._value)) && (t.flags |= 128, t._value = n, e.version++);
  } catch (n) {
    throw e.version++, n;
  } finally {
    ze = s, qt = i, of(t), t.flags &= -3;
  }
}
function fl(t, e = !1) {
  const { dep: s, prevSub: i, nextSub: n } = t;
  if (i && (i.nextSub = n, t.prevSub = void 0), n && (n.prevSub = i, t.nextSub = void 0), s.subs === t && (s.subs = i, !i && s.computed)) {
    s.computed.flags &= -5;
    for (let a = s.computed.deps; a; a = a.nextDep)
      fl(a, !0);
  }
  !e && !--s.sc && s.map && s.map.delete(s.key);
}
function xm(t) {
  const { prevDep: e, nextDep: s } = t;
  e && (e.nextDep = s, t.prevDep = void 0), s && (s.prevDep = e, t.nextDep = void 0);
}
let qt = !0;
const lf = [];
function As() {
  lf.push(qt), qt = !1;
}
function Ps() {
  const t = lf.pop();
  qt = t === void 0 ? !0 : t;
}
function Mc(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const s = ze;
    ze = void 0;
    try {
      e();
    } finally {
      ze = s;
    }
  }
}
let Pn = 0;
class Am {
  constructor(e, s) {
    this.sub = e, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class hl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!ze || !qt || ze === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== ze)
      s = this.activeLink = new Am(ze, this), ze.deps ? (s.prevDep = ze.depsTail, ze.depsTail.nextDep = s, ze.depsTail = s) : ze.deps = ze.depsTail = s, cf(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const i = s.nextDep;
      i.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = i), s.prevDep = ze.depsTail, s.nextDep = void 0, ze.depsTail.nextDep = s, ze.depsTail = s, ze.deps === s && (ze.deps = i);
    }
    return s;
  }
  trigger(e) {
    this.version++, Pn++, this.notify(e);
  }
  notify(e) {
    ul();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      dl();
    }
  }
}
function cf(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let i = e.deps; i; i = i.nextDep)
        cf(i);
    }
    const s = t.dep.subs;
    s !== t && (t.prevSub = s, s && (s.nextSub = t)), t.dep.subs = t;
  }
}
const Ar = /* @__PURE__ */ new WeakMap(), li = /* @__PURE__ */ Symbol(
  ""
), Pr = /* @__PURE__ */ Symbol(
  ""
), Cn = /* @__PURE__ */ Symbol(
  ""
);
function gt(t, e, s) {
  if (qt && ze) {
    let i = Ar.get(t);
    i || Ar.set(t, i = /* @__PURE__ */ new Map());
    let n = i.get(s);
    n || (i.set(s, n = new hl()), n.map = i, n.key = s), n.track();
  }
}
function vs(t, e, s, i, n, a) {
  const o = Ar.get(t);
  if (!o) {
    Pn++;
    return;
  }
  const r = (l) => {
    l && l.trigger();
  };
  if (ul(), e === "clear")
    o.forEach(r);
  else {
    const l = fe(t), c = l && rl(s);
    if (l && s === "length") {
      const u = Number(i);
      o.forEach((d, f) => {
        (f === "length" || f === Cn || !us(f) && f >= u) && r(d);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && r(o.get(s)), c && r(o.get(Cn)), e) {
        case "add":
          l ? c && r(o.get("length")) : (r(o.get(li)), Mi(t) && r(o.get(Pr)));
          break;
        case "delete":
          l || (r(o.get(li)), Mi(t) && r(o.get(Pr)));
          break;
        case "set":
          Mi(t) && r(o.get(li));
          break;
      }
  }
  dl();
}
function yi(t) {
  const e = /* @__PURE__ */ De(t);
  return e === t ? e : (gt(e, "iterate", Cn), /* @__PURE__ */ jt(t) ? e : e.map(Kt));
}
function po(t) {
  return gt(t = /* @__PURE__ */ De(t), "iterate", Cn), t;
}
function ns(t, e) {
  return /* @__PURE__ */ Cs(t) ? Oi(/* @__PURE__ */ ci(t) ? Kt(e) : e) : Kt(e);
}
const Pm = {
  __proto__: null,
  [Symbol.iterator]() {
    return qo(this, Symbol.iterator, (t) => ns(this, t));
  },
  concat(...t) {
    return yi(this).concat(
      ...t.map((e) => fe(e) ? yi(e) : e)
    );
  },
  entries() {
    return qo(this, "entries", (t) => (t[1] = ns(this, t[1]), t));
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
    return Go(this, "includes", t);
  },
  indexOf(...t) {
    return Go(this, "indexOf", t);
  },
  join(t) {
    return yi(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return Go(this, "lastIndexOf", t);
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
    return Dc(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Dc(this, "reduceRight", t, e);
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
    return yi(this).toReversed();
  },
  toSorted(t) {
    return yi(this).toSorted(t);
  },
  toSpliced(...t) {
    return yi(this).toSpliced(...t);
  },
  unshift(...t) {
    return Ki(this, "unshift", t);
  },
  values() {
    return qo(this, "values", (t) => ns(this, t));
  }
};
function qo(t, e, s) {
  const i = po(t), n = i[e]();
  return i !== t && !/* @__PURE__ */ jt(t) && (n._next = n.next, n.next = () => {
    const a = n._next();
    return a.done || (a.value = s(a.value)), a;
  }), n;
}
const Cm = Array.prototype;
function ds(t, e, s, i, n, a) {
  const o = po(t), r = o !== t && !/* @__PURE__ */ jt(t), l = o[e];
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
function Dc(t, e, s, i) {
  const n = po(t), a = n !== t && !/* @__PURE__ */ jt(t);
  let o = s, r = !1;
  n !== t && (a ? (r = i.length === 0, o = function(c, u, d) {
    return r && (r = !1, c = ns(t, c)), s.call(this, c, ns(t, u), d, t);
  }) : s.length > 3 && (o = function(c, u, d) {
    return s.call(this, c, u, d, t);
  }));
  const l = n[e](o, ...i);
  return r ? ns(t, l) : l;
}
function Go(t, e, s) {
  const i = /* @__PURE__ */ De(t);
  gt(i, "iterate", Cn);
  const n = i[e](...s);
  return (n === -1 || n === !1) && /* @__PURE__ */ gl(s[0]) ? (s[0] = /* @__PURE__ */ De(s[0]), i[e](...s)) : n;
}
function Ki(t, e, s = []) {
  As(), ul();
  const i = (/* @__PURE__ */ De(t))[e].apply(t, s);
  return dl(), Ps(), i;
}
const wm = /* @__PURE__ */ al("__proto__,__v_isRef,__isVue"), uf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(us)
);
function Rm(t) {
  us(t) || (t = String(t));
  const e = /* @__PURE__ */ De(this);
  return gt(e, "has", t), e.hasOwnProperty(t);
}
class df {
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
      return i === (n ? a ? Wm : mf : a ? pf : hf).get(e) || // receiver is not the reactive proxy, but has the same prototype
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
    if ((us(s) ? uf.has(s) : wm(s)) || (n || gt(e, "get", s), a))
      return r;
    if (/* @__PURE__ */ vt(r)) {
      const l = o && rl(s) ? r : r.value;
      return n && Oe(l) ? /* @__PURE__ */ wr(l) : l;
    }
    return Oe(r) ? n ? /* @__PURE__ */ wr(r) : /* @__PURE__ */ zn(r) : r;
  }
}
class ff extends df {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, s, i, n) {
    let a = e[s];
    const o = fe(e) && rl(s);
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
    return (!us(s) || !uf.has(s)) && gt(e, "has", s), i;
  }
  ownKeys(e) {
    return gt(
      e,
      "iterate",
      fe(e) ? "length" : li
    ), Reflect.ownKeys(e);
  }
}
class Mm extends df {
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
const Dm = /* @__PURE__ */ new ff(), Im = /* @__PURE__ */ new Mm(), Em = /* @__PURE__ */ new ff(!0);
const Cr = (t) => t, ua = (t) => Reflect.getPrototypeOf(t);
function Om(t, e, s) {
  return function(...i) {
    const n = this.__v_raw, a = /* @__PURE__ */ De(n), o = Mi(a), r = t === "entries" || t === Symbol.iterator && o, l = t === "keys" && o, c = n[t](...i), u = s ? Cr : e ? Oi : Kt;
    return !e && gt(
      a,
      "iterate",
      l ? Pr : li
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
function da(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Lm(t, e) {
  const s = {
    get(n) {
      const a = this.__v_raw, o = /* @__PURE__ */ De(a), r = /* @__PURE__ */ De(n);
      t || (os(n, r) && gt(o, "get", n), gt(o, "get", r));
      const { has: l } = ua(o), c = e ? Cr : t ? Oi : Kt;
      if (l.call(o, n))
        return c(a.get(n));
      if (l.call(o, r))
        return c(a.get(r));
      a !== o && a.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !t && gt(/* @__PURE__ */ De(n), "iterate", li), n.size;
    },
    has(n) {
      const a = this.__v_raw, o = /* @__PURE__ */ De(a), r = /* @__PURE__ */ De(n);
      return t || (os(n, r) && gt(o, "has", n), gt(o, "has", r)), n === r ? a.has(n) : a.has(n) || a.has(r);
    },
    forEach(n, a) {
      const o = this, r = o.__v_raw, l = /* @__PURE__ */ De(r), c = e ? Cr : t ? Oi : Kt;
      return !t && gt(l, "iterate", li), r.forEach((u, d) => n.call(a, c(u), c(d), o));
    }
  };
  return ht(
    s,
    t ? {
      add: da("add"),
      set: da("set"),
      delete: da("delete"),
      clear: da("clear")
    } : {
      add(n) {
        const a = /* @__PURE__ */ De(this), o = ua(a), r = /* @__PURE__ */ De(n), l = !e && !/* @__PURE__ */ jt(n) && !/* @__PURE__ */ Cs(n) ? r : n;
        return o.has.call(a, l) || os(n, l) && o.has.call(a, n) || os(r, l) && o.has.call(a, r) || (a.add(l), vs(a, "add", l, l)), this;
      },
      set(n, a) {
        !e && !/* @__PURE__ */ jt(a) && !/* @__PURE__ */ Cs(a) && (a = /* @__PURE__ */ De(a));
        const o = /* @__PURE__ */ De(this), { has: r, get: l } = ua(o);
        let c = r.call(o, n);
        c || (n = /* @__PURE__ */ De(n), c = r.call(o, n));
        const u = l.call(o, n);
        return o.set(n, a), c ? os(a, u) && vs(o, "set", n, a) : vs(o, "add", n, a), this;
      },
      delete(n) {
        const a = /* @__PURE__ */ De(this), { has: o, get: r } = ua(a);
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
function pl(t, e) {
  const s = Lm(t, e);
  return (i, n, a) => n === "__v_isReactive" ? !t : n === "__v_isReadonly" ? t : n === "__v_raw" ? i : Reflect.get(
    Ie(s, n) && n in i ? s : i,
    n,
    a
  );
}
const Nm = {
  get: /* @__PURE__ */ pl(!1, !1)
}, Um = {
  get: /* @__PURE__ */ pl(!1, !0)
}, Fm = {
  get: /* @__PURE__ */ pl(!0, !1)
};
const hf = /* @__PURE__ */ new WeakMap(), pf = /* @__PURE__ */ new WeakMap(), mf = /* @__PURE__ */ new WeakMap(), Wm = /* @__PURE__ */ new WeakMap();
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
function zn(t) {
  return /* @__PURE__ */ Cs(t) ? t : ml(
    t,
    !1,
    Dm,
    Nm,
    hf
  );
}
// @__NO_SIDE_EFFECTS__
function gf(t) {
  return ml(
    t,
    !1,
    Em,
    Um,
    pf
  );
}
// @__NO_SIDE_EFFECTS__
function wr(t) {
  return ml(
    t,
    !0,
    Im,
    Fm,
    mf
  );
}
function ml(t, e, s, i, n) {
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
function ci(t) {
  return /* @__PURE__ */ Cs(t) ? /* @__PURE__ */ ci(t.__v_raw) : !!(t && t.__v_isReactive);
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
function gl(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function De(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ De(e) : t;
}
function Hm(t) {
  return !Ie(t, "__v_skip") && Object.isExtensible(t) && Xd(t, "__v_skip", !0), t;
}
const Kt = (t) => Oe(t) ? /* @__PURE__ */ zn(t) : t, Oi = (t) => Oe(t) ? /* @__PURE__ */ wr(t) : t;
// @__NO_SIDE_EFFECTS__
function vt(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function re(t) {
  return bf(t, !1);
}
// @__NO_SIDE_EFFECTS__
function jm(t) {
  return bf(t, !0);
}
function bf(t, e) {
  return /* @__PURE__ */ vt(t) ? t : new zm(t, e);
}
class zm {
  constructor(e, s) {
    this.dep = new hl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? e : /* @__PURE__ */ De(e), this._value = s ? e : Kt(e), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const s = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ jt(e) || /* @__PURE__ */ Cs(e);
    e = i ? e : /* @__PURE__ */ De(e), os(e, s) && (this._rawValue = e, this._value = i ? e : Kt(e), this.dep.trigger());
  }
}
function se(t) {
  return /* @__PURE__ */ vt(t) ? t.value : t;
}
const Vm = {
  get: (t, e, s) => e === "__v_raw" ? t : se(Reflect.get(t, e, s)),
  set: (t, e, s, i) => {
    const n = t[e];
    return /* @__PURE__ */ vt(n) && !/* @__PURE__ */ vt(s) ? (n.value = s, !0) : Reflect.set(t, e, s, i);
  }
};
function yf(t) {
  return /* @__PURE__ */ ci(t) ? t : new Proxy(t, Vm);
}
class qm {
  constructor(e, s, i) {
    this.fn = e, this.setter = s, this._value = void 0, this.dep = new hl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Pn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ze !== this)
      return nf(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return rf(this), e && (e.version = this.dep.version), this._value;
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
const fa = {}, ja = /* @__PURE__ */ new WeakMap();
let ii;
function Km(t, e = !1, s = ii) {
  if (s) {
    let i = ja.get(s);
    i || ja.set(s, i = []), i.push(t);
  }
}
function $m(t, e, s = Be) {
  const { immediate: i, deep: n, once: a, scheduler: o, augmentJob: r, call: l } = s, c = (P) => n ? P : /* @__PURE__ */ jt(P) || n === !1 || n === 0 ? _s(P, 1) : _s(P);
  let u, d, f, h, y = !1, b = !1;
  if (/* @__PURE__ */ vt(t) ? (d = () => t.value, y = /* @__PURE__ */ jt(t)) : /* @__PURE__ */ ci(t) ? (d = () => c(t), y = !0) : fe(t) ? (b = !0, y = t.some((P) => /* @__PURE__ */ ci(P) || /* @__PURE__ */ jt(P)), d = () => t.map((P) => {
    if (/* @__PURE__ */ vt(P))
      return P.value;
    if (/* @__PURE__ */ ci(P))
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
    const P = ii;
    ii = u;
    try {
      return l ? l(t, 3, [h]) : t(h);
    } finally {
      ii = P;
    }
  } : d = rs, e && n) {
    const P = d, R = n === !0 ? 1 / 0 : n;
    d = () => _s(P(), R);
  }
  const m = Tm(), k = () => {
    u.stop(), m && m.active && ol(m.effects, u);
  };
  if (a && e) {
    const P = e;
    e = (...R) => {
      const W = P(...R);
      return k(), W;
    };
  }
  let x = b ? new Array(t.length).fill(fa) : fa;
  const C = (P) => {
    if (!(!(u.flags & 1) || !u.dirty && !P))
      if (e) {
        const R = u.run();
        if (P || n || y || (b ? R.some((W, N) => os(W, x[N])) : os(R, x))) {
          f && f();
          const W = ii;
          ii = u;
          try {
            const N = [
              R,
              // pass undefined as the old value when it's changed for the first time
              x === fa ? void 0 : b && x[0] === fa ? [] : x,
              h
            ];
            x = R, l ? l(e, 3, N) : (
              // @ts-expect-error
              e(...N)
            );
          } finally {
            ii = W;
          }
        }
      } else
        u.run();
  };
  return r && r(C), u = new tf(d), u.scheduler = o ? () => o(C, !1) : C, h = (P) => Km(P, !1, u), f = u.onStop = () => {
    const P = ja.get(u);
    if (P) {
      if (l)
        l(P, 4);
      else
        for (const R of P) R();
      ja.delete(u);
    }
  }, e ? i ? C(!0) : x = u.run() : o ? o(C.bind(null, !0), !0) : u.run(), k.pause = u.pause.bind(u), k.resume = u.resume.bind(u), k.stop = k, k;
}
function _s(t, e = 1 / 0, s) {
  if (e <= 0 || !Oe(t) || t.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(t) || 0) >= e))
    return t;
  if (s.set(t, e), e--, /* @__PURE__ */ vt(t))
    _s(t.value, e, s);
  else if (fe(t))
    for (let i = 0; i < t.length; i++)
      _s(t[i], e, s);
  else if (Kd(t) || Mi(t))
    t.forEach((i) => {
      _s(i, e, s);
    });
  else if (Yd(t)) {
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
function Vn(t, e, s, i) {
  try {
    return i ? t(...i) : t();
  } catch (n) {
    mo(n, e, s);
  }
}
function $t(t, e, s, i) {
  if (pe(t)) {
    const n = Vn(t, e, s, i);
    return n && $d(n) && n.catch((a) => {
      mo(a, e, s);
    }), n;
  }
  if (fe(t)) {
    const n = [];
    for (let a = 0; a < t.length; a++)
      n.push($t(t[a], e, s, i));
    return n;
  }
}
function mo(t, e, s, i = !0) {
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
      As(), Vn(a, null, 10, [
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
const Di = [];
let Ns = null, ki = 0;
const vf = /* @__PURE__ */ Promise.resolve();
let za = null;
function Ai(t) {
  const e = za || vf;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Ym(t) {
  let e = ts + 1, s = Ct.length;
  for (; e < s; ) {
    const i = e + s >>> 1, n = Ct[i], a = wn(n);
    a < t || a === t && n.flags & 2 ? e = i + 1 : s = i;
  }
  return e;
}
function bl(t) {
  if (!(t.flags & 1)) {
    const e = wn(t), s = Ct[Ct.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= wn(s) ? Ct.push(t) : Ct.splice(Ym(e), 0, t), t.flags |= 1, _f();
  }
}
function _f() {
  za || (za = vf.then(kf));
}
function Xm(t) {
  if (!fe(t))
    Ns && t.id === -1 ? Ns.splice(ki + 1, 0, t) : t.flags & 1 || (Di.push(t), t.flags |= 1);
  else
    for (let e = 0; e < t.length; e++)
      Di.push(t[e]);
  _f();
}
function Ic(t, e, s = ts + 1) {
  for (; s < Ct.length; s++) {
    const i = Ct[s];
    if (i && i.flags & 2) {
      if (t && i.id !== t.uid)
        continue;
      Ct.splice(s, 1), s--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Sf(t) {
  if (Di.length) {
    const e = [...new Set(Di)].sort(
      (s, i) => wn(s) - wn(i)
    );
    if (Di.length = 0, Ns) {
      for (let s = 0; s < e.length; s++)
        Ns.push(e[s]);
      return;
    }
    for (Ns = e, ki = 0; ki < Ns.length; ki++) {
      const s = Ns[ki];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ns = null, ki = 0;
  }
}
const wn = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function kf(t) {
  try {
    for (ts = 0; ts < Ct.length; ts++) {
      const e = Ct[ts];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Vn(
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
    ts = -1, Ct.length = 0, Sf(), za = null, (Ct.length || Di.length) && kf();
  }
}
let Ut = null, Tf = null;
function Va(t) {
  const e = Ut;
  return Ut = t, Tf = t && t.type.__scopeId || null, e;
}
function xf(t, e = Ut, s) {
  if (!e || t._n)
    return t;
  const i = (...n) => {
    i._d && Ka(-1);
    const a = Va(e), o = ui.length;
    let r;
    try {
      r = t(...n);
    } finally {
      for (let l = ui.length; l > o; l--) Jf();
      Va(a), i._d && Ka(1);
    }
    return r;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Is(t, e) {
  if (Ut === null)
    return t;
  const s = So(Ut), i = t.dirs || (t.dirs = []);
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
function Xs(t, e, s, i) {
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
function Da(t, e) {
  if (bt) {
    let s = bt.provides;
    const i = bt.parent && bt.parent.provides;
    i === s && (s = bt.provides = Object.create(i)), s[t] = e;
  }
}
function Et(t, e, s = !1) {
  const i = Xg();
  if (i || Ii) {
    let n = Ii ? Ii._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (n && t in n)
      return n[t];
    if (arguments.length > 1)
      return s && pe(e) ? e.call(i && i.proxy) : e;
  }
}
const Qm = /* @__PURE__ */ Symbol.for("v-scx"), Zm = () => Et(Qm);
function mn(t, e, s) {
  return Af(t, e, s);
}
function Af(t, e, s = Be) {
  const { immediate: i, deep: n, flush: a, once: o } = s, r = ht({}, s), l = e && i || !e && a !== "post";
  let c;
  if (Dn) {
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
  r.call = (h, y, b) => $t(h, u, y, b);
  let d = !1;
  a === "post" ? r.scheduler = (h) => {
    Dt(h, u && u.suspense);
  } : a !== "sync" && (d = !0, r.scheduler = (h, y) => {
    y ? h() : bl(h);
  }), r.augmentJob = (h) => {
    e && (h.flags |= 4), d && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const f = $m(t, e, r);
  return Dn && (c ? c.push(f) : l && f()), f;
}
function eg(t, e, s) {
  const i = this.proxy, n = nt(t) ? t.includes(".") ? Pf(i, t) : () => i[t] : t.bind(i, i);
  let a;
  pe(e) ? a = e : (a = e.handler, s = e);
  const o = qn(this), r = Af(n, a.bind(i), s);
  return o(), r;
}
function Pf(t, e) {
  const s = e.split(".");
  return () => {
    let i = t;
    for (let n = 0; n < s.length && i; n++)
      i = i[s[n]];
    return i;
  };
}
const tg = /* @__PURE__ */ Symbol("_vte"), go = (t) => t.__isTeleport, Ko = /* @__PURE__ */ Symbol("_leaveCb");
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
function Cf(t) {
  if (!vl(t))
    return go(t.type) && t.children ? sg(t.children) : t;
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
function yl(t, e) {
  if (t.shapeFlag & 6 && t.component) {
    t.transition = e;
    const s = t.component.subTree;
    yl(
      go(s.type) && Cf(s) || s,
      e
    );
  } else t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
// @__NO_SIDE_EFFECTS__
function wf(t, e) {
  return pe(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ht({ name: t.name }, e, { setup: t })
  ) : t;
}
function Rf(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Ec(t, e) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(t, e)) && !s.configurable);
}
const qa = /* @__PURE__ */ new WeakMap();
function gn(t, e, s, i, n = !1) {
  if (fe(t)) {
    t.forEach(
      (b, m) => gn(
        b,
        e && (fe(e) ? e[m] : e),
        s,
        i,
        n
      )
    );
    return;
  }
  if (bn(i) && !n) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && gn(t, e, s, i.component.subTree);
    return;
  }
  const a = i.shapeFlag & 4 ? So(i.component) : i.el, o = n ? null : a, { i: r, r: l } = t, c = e && e.r, u = r.refs === Be ? r.refs = {} : r.refs, d = r.setupState, f = /* @__PURE__ */ De(d), h = d === Be ? Gd : (b) => Ec(u, b) ? !1 : Ie(f, b), y = (b, m) => !(m && Ec(u, m));
  if (c != null && c !== l) {
    if (Oc(e), nt(c))
      u[c] = null, h(c) && (d[c] = null);
    else if (/* @__PURE__ */ vt(c)) {
      const b = e;
      y(c, b.k) && (c.value = null), b.k && (u[b.k] = null);
    }
  }
  if (pe(l))
    Vn(l, r, 12, [o, u]);
  else {
    const b = nt(l), m = /* @__PURE__ */ vt(l);
    if (b || m) {
      const k = () => {
        if (t.f) {
          const x = b ? h(l) ? d[l] : u[l] : y() || !t.k ? l.value : u[t.k];
          if (n)
            fe(x) && ol(x, a);
          else if (fe(x))
            x.includes(a) || x.push(a);
          else if (b)
            u[l] = [a], h(l) && (d[l] = u[l]);
          else {
            const C = [a];
            y(l, t.k) && (l.value = C), t.k && (u[t.k] = C);
          }
        } else b ? (u[l] = o, h(l) && (d[l] = o)) : m && (y(l, t.k) && (l.value = o), t.k && (u[t.k] = o));
      };
      if (o) {
        const x = () => {
          k(), qa.delete(t);
        };
        x.id = -1, qa.set(t, x), Dt(x, s);
      } else
        Oc(t), k();
    }
  }
}
function Oc(t) {
  const e = qa.get(t);
  e && (e.flags |= 8, qa.delete(t));
}
ho().requestIdleCallback;
ho().cancelIdleCallback;
const bn = (t) => !!t.type.__asyncLoader, vl = (t) => t.type.__isKeepAlive;
function ig(t, e) {
  Mf(t, "a", e);
}
function ng(t, e) {
  Mf(t, "da", e);
}
function Mf(t, e, s = bt) {
  const i = t.__wdc || (t.__wdc = () => {
    let n = s;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return t();
  });
  if (bo(e, i, s), s) {
    let n = s.parent;
    for (; n && n.parent; )
      vl(n.parent.vnode) && ag(i, e, s, n), n = n.parent;
  }
}
function ag(t, e, s, i) {
  const n = bo(
    e,
    t,
    i,
    !0
    /* prepend */
  );
  yo(() => {
    ol(i[e], n);
  }, s);
}
function bo(t, e, s = bt, i = !1) {
  if (s) {
    const n = s[t] || (s[t] = []), a = e.__weh || (e.__weh = (...o) => {
      As();
      const r = qn(s), l = $t(e, s, t, o);
      return r(), Ps(), l;
    });
    return i ? n.unshift(a) : n.push(a), a;
  }
}
const Rs = (t) => (e, s = bt) => {
  (!Dn || t === "sp") && bo(t, (...i) => e(...i), s);
}, og = Rs("bm"), Df = Rs("m"), rg = Rs(
  "bu"
), lg = Rs("u"), cg = Rs(
  "bum"
), yo = Rs("um"), ug = Rs(
  "sp"
), dg = Rs("rtg"), fg = Rs("rtc");
function hg(t, e = bt) {
  bo("ec", t, e);
}
const pg = "components";
function mg(t, e) {
  return bg(pg, t, !0, e) || t;
}
const gg = /* @__PURE__ */ Symbol.for("v-ndc");
function bg(t, e, s = !0, i = !1) {
  const n = Ut || bt;
  if (n) {
    const a = n.type;
    {
      const r = sb(
        a,
        !1
      );
      if (r && (r === e || r === wt(e) || r === fo(wt(e))))
        return a;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Lc(n[t] || a[t], e) || // global registration
      Lc(n.appContext[t], e)
    );
    return !o && i ? a : o;
  }
}
function Lc(t, e) {
  return t && (t[e] || t[wt(e)] || t[fo(wt(e))]);
}
function $o(t, e, s, i) {
  let n;
  const a = s, o = fe(t);
  if (o || nt(t)) {
    const r = o && /* @__PURE__ */ ci(t);
    let l = !1, c = !1;
    r && (l = !/* @__PURE__ */ jt(t), c = /* @__PURE__ */ Cs(t), t = po(t)), n = new Array(t.length);
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
const Rr = (t) => t ? Qf(t) ? So(t) : Rr(t.parent) : null, yn = (
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
    $parent: (t) => Rr(t.parent),
    $root: (t) => Rr(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Ef(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      bl(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Ai.bind(t.proxy)),
    $watch: (t) => eg.bind(t)
  })
), Jo = (t, e) => t !== Be && !t.__isScriptSetup && Ie(t, e), yg = {
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
        if (Jo(i, e))
          return o[e] = 1, i[e];
        if (n !== Be && Ie(n, e))
          return o[e] = 2, n[e];
        if (Ie(a, e))
          return o[e] = 3, a[e];
        if (s !== Be && Ie(s, e))
          return o[e] = 4, s[e];
        Mr && (o[e] = 0);
      }
    }
    const c = yn[e];
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
    return Jo(n, e) ? (n[e] = s, !0) : i !== Be && Ie(i, e) ? (i[e] = s, !0) : Ie(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (a[e] = s, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: s, ctx: i, appContext: n, props: a, type: o }
  }, r) {
    let l;
    return !!(s[r] || t !== Be && r[0] !== "$" && Ie(t, r) || Jo(e, r) || Ie(a, r) || Ie(i, r) || Ie(yn, r) || Ie(n.config.globalProperties, r) || (l = o.__cssModules) && l[r]);
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
let Mr = !0;
function vg(t) {
  const e = Ef(t), s = t.proxy, i = t.ctx;
  Mr = !1, e.beforeCreate && Uc(e.beforeCreate, t, "bc");
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
    updated: y,
    activated: b,
    deactivated: m,
    beforeDestroy: k,
    beforeUnmount: x,
    destroyed: C,
    unmounted: P,
    render: R,
    renderTracked: W,
    renderTriggered: N,
    errorCaptured: M,
    serverPrefetch: K,
    // public API
    expose: Q,
    inheritAttrs: ie,
    // assets
    components: oe,
    directives: Ae,
    filters: qe
  } = e;
  if (c && _g(c, i, null), o)
    for (const B in o) {
      const V = o[B];
      pe(V) && (i[B] = V.bind(s));
    }
  if (n) {
    const B = n.call(s, s);
    Oe(B) && (t.data = /* @__PURE__ */ zn(B));
  }
  if (Mr = !0, a)
    for (const B in a) {
      const V = a[B], le = pe(V) ? V.bind(s, s) : pe(V.get) ? V.get.bind(s, s) : rs, Pe = !pe(V) && pe(V.set) ? V.set.bind(s) : rs, Le = be({
        get: le,
        set: Pe
      });
      Object.defineProperty(i, B, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (Fe) => Le.value = Fe
      });
    }
  if (r)
    for (const B in r)
      If(r[B], i, s, B);
  if (l) {
    const B = pe(l) ? l.call(s) : l;
    Reflect.ownKeys(B).forEach((V) => {
      Da(V, B[V]);
    });
  }
  u && Uc(u, t, "c");
  function ce(B, V) {
    fe(V) ? V.forEach((le) => B(le.bind(s))) : V && B(V.bind(s));
  }
  if (ce(og, d), ce(Df, f), ce(rg, h), ce(lg, y), ce(ig, b), ce(ng, m), ce(hg, M), ce(fg, W), ce(dg, N), ce(cg, x), ce(yo, P), ce(ug, K), fe(Q))
    if (Q.length) {
      const B = t.exposed || (t.exposed = {});
      Q.forEach((V) => {
        Object.defineProperty(B, V, {
          get: () => s[V],
          set: (le) => s[V] = le,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  R && t.render === rs && (t.render = R), ie != null && (t.inheritAttrs = ie), oe && (t.components = oe), Ae && (t.directives = Ae), K && Rf(t);
}
function _g(t, e, s = rs) {
  fe(t) && (t = Dr(t));
  for (const i in t) {
    const n = t[i];
    let a;
    Oe(n) ? "default" in n ? a = Et(
      n.from || i,
      n.default,
      !0
    ) : a = Et(n.from || i) : a = Et(n), /* @__PURE__ */ vt(a) ? Object.defineProperty(e, i, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (o) => a.value = o
    }) : e[i] = a;
  }
}
function Uc(t, e, s) {
  $t(
    fe(t) ? t.map((i) => i.bind(e.proxy)) : t.bind(e.proxy),
    e,
    s
  );
}
function If(t, e, s, i) {
  let n = i.includes(".") ? Pf(s, i) : () => s[i];
  if (nt(t)) {
    const a = e[t];
    pe(a) && mn(n, a);
  } else if (pe(t))
    mn(n, t.bind(s));
  else if (Oe(t))
    if (fe(t))
      t.forEach((a) => If(a, e, s, i));
    else {
      const a = pe(t.handler) ? t.handler.bind(s) : e[t.handler];
      pe(a) && mn(n, a, t);
    }
}
function Ef(t) {
  const e = t.type, { mixins: s, extends: i } = e, {
    mixins: n,
    optionsCache: a,
    config: { optionMergeStrategies: o }
  } = t.appContext, r = a.get(e);
  let l;
  return r ? l = r : !n.length && !s && !i ? l = e : (l = {}, n.length && n.forEach(
    (c) => Ga(l, c, o, !0)
  ), Ga(l, e, o)), Oe(e) && a.set(e, l), l;
}
function Ga(t, e, s, i = !1) {
  const { mixins: n, extends: a } = e;
  a && Ga(t, a, s, !0), n && n.forEach(
    (o) => Ga(t, o, s, !0)
  );
  for (const o in e)
    if (!(i && o === "expose")) {
      const r = Sg[o] || s && s[o];
      t[o] = r ? r(t[o], e[o]) : e[o];
    }
  return t;
}
const Sg = {
  data: Fc,
  props: Wc,
  emits: Wc,
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
  provide: Fc,
  inject: kg
};
function Fc(t, e) {
  return e ? t ? function() {
    return ht(
      pe(t) ? t.call(this, this) : t,
      pe(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function kg(t, e) {
  return nn(Dr(t), Dr(e));
}
function Dr(t) {
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
function Wc(t, e) {
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
function Of() {
  return {
    app: null,
    config: {
      isNativeTag: Gd,
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
    const a = Of(), o = /* @__PURE__ */ new WeakSet(), r = [];
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
          const h = c._ceVNode || Me(i, n);
          return h.appContext = a, f === !0 ? f = "svg" : f === !1 && (f = void 0), t(h, u, f), l = !0, c._container = u, u.__vue_app__ = c, So(h.component);
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
const Pg = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${wt(e)}Modifiers`] || t[`${mi(e)}Modifiers`];
function Cg(t, e, ...s) {
  if (t.isUnmounted) return;
  const i = t.vnode.props || Be;
  let n = s;
  const a = e.startsWith("update:"), o = a && Pg(i, e.slice(7));
  o && (o.trim && (n = s.map((u) => nt(u) ? u.trim() : u)), o.number && (n = s.map(pm)));
  let r, l = i[r = Ho(e)] || // also try camelCase event handler (#2249)
  i[r = Ho(wt(e))];
  !l && a && (l = i[r = Ho(mi(e))]), l && $t(
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
function Lf(t, e, s = !1) {
  const i = s ? wg : e.emitsCache, n = i.get(t);
  if (n !== void 0)
    return n;
  const a = t.emits;
  let o = {}, r = !1;
  if (!pe(t)) {
    const l = (c) => {
      const u = Lf(c, e, !0);
      u && (r = !0, ht(o, u));
    };
    !s && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !a && !r ? (Oe(t) && i.set(t, null), null) : (fe(a) ? a.forEach((l) => o[l] = null) : ht(o, a), Oe(t) && i.set(t, o), o);
}
function vo(t, e) {
  return !t || !lo(e) ? !1 : (e = e.slice(2), e = e === "Once" ? e : e.replace(/Once$/, ""), Ie(t, e[0].toLowerCase() + e.slice(1)) || Ie(t, mi(e)) || Ie(t, e));
}
function Bc(t) {
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
    ctx: y,
    inheritAttrs: b
  } = t, m = Va(t);
  let k, x;
  try {
    if (s.shapeFlag & 4) {
      const P = n || i, R = P;
      k = as(
        c.call(
          R,
          P,
          u,
          d,
          h,
          f,
          y
        )
      ), x = r;
    } else {
      const P = e;
      k = as(
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
    ui.length = 0, mo(P, t, 1), k = Me(ws);
  }
  let C = k;
  if (x && b !== !1) {
    const P = Object.keys(x), { shapeFlag: R } = C;
    P.length && R & 7 && (a && P.some(co) && (x = Mg(
      x,
      a
    )), C = Li(C, x, !1, !0));
  }
  if (s.dirs && (C = Li(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(s.dirs) : s.dirs), s.transition) {
    const P = go(C.type) && Cf(C) || C;
    yl(P, s.transition);
  }
  return k = C, Va(m), k;
}
const Rg = (t) => {
  let e;
  for (const s in t)
    (s === "class" || s === "style" || lo(s)) && ((e || (e = {}))[s] = t[s]);
  return e;
}, Mg = (t, e) => {
  const s = {};
  for (const i in t)
    (!co(i) || !(i.slice(9) in e)) && (s[i] = t[i]);
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
      return i ? Hc(i, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (Nf(o, i, f) && !vo(c, f))
          return !0;
      }
    }
  } else
    return (n || r) && (!r || !r.$stable) ? !0 : i === o ? !1 : i ? o ? Hc(i, o, c) : !0 : !!o;
  return !1;
}
function Hc(t, e, s) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(t).length)
    return !0;
  for (let n = 0; n < i.length; n++) {
    const a = i[n];
    if (Nf(e, t, a) && !vo(s, a))
      return !0;
  }
  return !1;
}
function Nf(t, e, s) {
  const i = t[s], n = e[s];
  return s === "style" && Oe(i) && Oe(n) ? !cl(i, n) : i !== n;
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
const Uf = {}, Ff = () => Object.create(Uf), Wf = (t) => Object.getPrototypeOf(t) === Uf;
function Eg(t, e, s, i = !1) {
  const n = {}, a = Ff();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Bf(t, e, n, a);
  for (const o in t.propsOptions[0])
    o in n || (n[o] = void 0);
  s ? t.props = i ? n : /* @__PURE__ */ gf(n) : t.type.props ? t.props = n : t.props = a, t.attrs = a;
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
        if (vo(t.emitsOptions, f))
          continue;
        const h = e[f];
        if (l)
          if (Ie(a, f))
            h !== a[f] && (a[f] = h, c = !0);
          else {
            const y = wt(f);
            n[y] = Ir(
              l,
              r,
              y,
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
    Bf(t, e, n, a) && (c = !0);
    let u;
    for (const d in r)
      (!e || // for camelCase
      !Ie(e, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = mi(d)) === d || !Ie(e, u))) && (l ? s && // for camelCase
      (s[d] !== void 0 || // for kebab-case
      s[u] !== void 0) && (n[d] = Ir(
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
function Bf(t, e, s, i) {
  const [n, a] = t.propsOptions;
  let o = !1, r;
  if (e)
    for (let l in e) {
      if (fn(l))
        continue;
      const c = e[l];
      let u;
      n && Ie(n, u = wt(l)) ? !a || !a.includes(u) ? s[u] = c : (r || (r = {}))[u] = c : vo(t.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, o = !0);
    }
  if (a) {
    const l = /* @__PURE__ */ De(s), c = r || Be;
    for (let u = 0; u < a.length; u++) {
      const d = a[u];
      s[d] = Ir(
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
function Ir(t, e, s, i, n, a) {
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
          const u = qn(n);
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
    ] && (i === "" || i === mi(s)) && (i = !0));
  }
  return i;
}
const Lg = /* @__PURE__ */ new WeakMap();
function Hf(t, e, s = !1) {
  const i = s ? Lg : e.propsCache, n = i.get(t);
  if (n)
    return n;
  const a = t.props, o = {}, r = [];
  let l = !1;
  if (!pe(t)) {
    const u = (d) => {
      l = !0;
      const [f, h] = Hf(d, e, !0);
      ht(o, f), h && r.push(...h);
    };
    !s && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
  }
  if (!a && !l)
    return Oe(t) && i.set(t, Ri), Ri;
  if (fe(a))
    for (let u = 0; u < a.length; u++) {
      const d = wt(a[u]);
      jc(d) && (o[d] = Be);
    }
  else if (a)
    for (const u in a) {
      const d = wt(u);
      if (jc(d)) {
        const f = a[u], h = o[d] = fe(f) || pe(f) ? { type: f } : ht({}, f), y = h.type;
        let b = !1, m = !0;
        if (fe(y))
          for (let k = 0; k < y.length; ++k) {
            const x = y[k], C = pe(x) && x.name;
            if (C === "Boolean") {
              b = !0;
              break;
            } else C === "String" && (m = !1);
          }
        else
          b = pe(y) && y.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = b, h[
          1
          /* shouldCastTrue */
        ] = m, (b || Ie(h, "default")) && r.push(d);
      }
    }
  const c = [o, r];
  return Oe(t) && i.set(t, c), c;
}
function jc(t) {
  return t[0] !== "$" && !fn(t);
}
const _l = (t) => t === "_" || t === "_ctx" || t === "$stable", Sl = (t) => fe(t) ? t.map(as) : [as(t)], Ng = (t, e, s) => {
  if (e._n)
    return e;
  const i = xf((...n) => Sl(e(...n)), s);
  return i._c = !1, i;
}, jf = (t, e, s) => {
  const i = t._ctx;
  for (const n in t) {
    if (_l(n)) continue;
    const a = t[n];
    if (pe(a))
      e[n] = Ng(n, a, i);
    else if (a != null) {
      const o = Sl(a);
      e[n] = () => o;
    }
  }
}, zf = (t, e) => {
  const s = Sl(e);
  t.slots.default = () => s;
}, Vf = (t, e, s) => {
  for (const i in e)
    (s || !_l(i)) && (t[i] = e[i]);
}, Ug = (t, e, s) => {
  const i = t.slots = Ff();
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (Vf(i, e, s), s && Xd(i, "_", n, !0)) : jf(e, i);
  } else e && zf(t, e);
}, Fg = (t, e, s) => {
  const { vnode: i, slots: n } = t;
  let a = !0, o = Be;
  if (i.shapeFlag & 32) {
    const r = e._;
    r ? s && r === 1 ? a = !1 : Vf(n, e, s) : (a = !e.$stable, jf(e, n)), o = e;
  } else e && (zf(t, e), o = { default: 1 });
  if (a)
    for (const r in n)
      !_l(r) && o[r] == null && delete n[r];
}, Dt = zg;
function Wg(t) {
  return Bg(t);
}
function Bg(t, e) {
  const s = ho();
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
    insertStaticContent: y
  } = t, b = (v, T, A, D = null, L = null, E = null, j = void 0, q = null, z = !!T.dynamicChildren) => {
    if (v === T)
      return;
    v && !$i(v, T) && (D = O(v), Fe(v, L, E, !0), v = null), T.patchFlag === -2 && (z = !1, T.dynamicChildren = null);
    const { type: U, ref: ae, shapeFlag: $ } = T;
    switch (U) {
      case _o:
        m(v, T, A, D);
        break;
      case ws:
        k(v, T, A, D);
        break;
      case Xo:
        v == null && x(T, A, D, j);
        break;
      case Nt:
        oe(
          v,
          T,
          A,
          D,
          L,
          E,
          j,
          q,
          z
        );
        break;
      default:
        $ & 1 ? R(
          v,
          T,
          A,
          D,
          L,
          E,
          j,
          q,
          z
        ) : $ & 6 ? Ae(
          v,
          T,
          A,
          D,
          L,
          E,
          j,
          q,
          z
        ) : ($ & 64 || $ & 128) && U.process(
          v,
          T,
          A,
          D,
          L,
          E,
          j,
          q,
          z,
          Z
        );
    }
    ae != null && L ? gn(ae, v && v.ref, E, T || v, !T) : ae == null && v && v.ref != null && gn(v.ref, null, E, v, !0);
  }, m = (v, T, A, D) => {
    if (v == null)
      i(
        T.el = r(T.children),
        A,
        D
      );
    else {
      const L = T.el = v.el;
      T.children !== v.children && c(L, T.children);
    }
  }, k = (v, T, A, D) => {
    v == null ? i(
      T.el = l(T.children || ""),
      A,
      D
    ) : T.el = v.el;
  }, x = (v, T, A, D) => {
    [v.el, v.anchor] = y(
      v.children,
      T,
      A,
      D,
      v.el,
      v.anchor
    );
  }, C = ({ el: v, anchor: T }, A, D) => {
    let L;
    for (; v && v !== T; )
      L = f(v), i(v, A, D), v = L;
    i(T, A, D);
  }, P = ({ el: v, anchor: T }) => {
    let A;
    for (; v && v !== T; )
      A = f(v), n(v), v = A;
    n(T);
  }, R = (v, T, A, D, L, E, j, q, z) => {
    if (T.type === "svg" ? j = "svg" : T.type === "math" && (j = "mathml"), v == null)
      W(
        T,
        A,
        D,
        L,
        E,
        j,
        q,
        z
      );
    else {
      const U = v.el && v.el._isVueCE ? v.el : null;
      try {
        U && U._beginPatch(), K(
          v,
          T,
          L,
          E,
          j,
          q,
          z
        );
      } finally {
        U && U._endPatch();
      }
    }
  }, W = (v, T, A, D, L, E, j, q) => {
    let z, U;
    const { props: ae, shapeFlag: $, transition: ne, dirs: ue } = v;
    if (z = v.el = o(
      v.type,
      E,
      ae && ae.is,
      ae
    ), $ & 8 ? u(z, v.children) : $ & 16 && M(
      v.children,
      z,
      null,
      D,
      L,
      Yo(v, E),
      j,
      q
    ), ue && Xs(v, null, D, "created"), N(z, v, v.scopeId, j, D), ae) {
      for (const Te in ae)
        Te !== "value" && !fn(Te) && a(z, Te, null, ae[Te], E, D);
      "value" in ae && a(z, "value", null, ae.value, E), (U = ae.onVnodeBeforeMount) && Zt(U, D, v);
    }
    ue && Xs(v, null, D, "beforeMount");
    const Se = Hg(L, ne);
    Se && ne.beforeEnter(z), i(z, T, A), ((U = ae && ae.onVnodeMounted) || Se || ue) && Dt(() => {
      try {
        U && Zt(U, D, v), Se && ne.enter(z), ue && Xs(v, null, D, "mounted");
      } finally {
      }
    }, L);
  }, N = (v, T, A, D, L) => {
    if (A && h(v, A), D)
      for (let E = 0; E < D.length; E++)
        h(v, D[E]);
    if (L) {
      let E = L.subTree;
      if (T === E || $f(E.type) && (E.ssContent === T || E.ssFallback === T)) {
        const j = L.vnode;
        N(
          v,
          j,
          j.scopeId,
          j.slotScopeIds,
          L.parent
        );
      }
    }
  }, M = (v, T, A, D, L, E, j, q, z = 0) => {
    for (let U = z; U < v.length; U++) {
      const ae = v[U] = q ? bs(v[U]) : as(v[U]);
      b(
        null,
        ae,
        T,
        A,
        D,
        L,
        E,
        j,
        q
      );
    }
  }, K = (v, T, A, D, L, E, j) => {
    const q = T.el = v.el;
    let { patchFlag: z, dynamicChildren: U, dirs: ae } = T;
    z |= v.patchFlag & 16;
    const $ = v.props || Be, ne = T.props || Be;
    let ue;
    if (A && Qs(A, !1), (ue = ne.onVnodeBeforeUpdate) && Zt(ue, A, T, v), ae && Xs(T, v, A, "beforeUpdate"), A && Qs(A, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    U && (!v.dynamicChildren || v.dynamicChildren.length !== U.length) && (z = 0, j = !1, U = null), ($.innerHTML && ne.innerHTML == null || $.textContent && ne.textContent == null) && u(q, ""), U ? Q(
      v.dynamicChildren,
      U,
      q,
      A,
      D,
      Yo(T, L),
      E
    ) : j || V(
      v,
      T,
      q,
      null,
      A,
      D,
      Yo(T, L),
      E,
      !1
    ), z > 0) {
      if (z & 16)
        ie(q, $, ne, A, L);
      else if (z & 2 && $.class !== ne.class && a(q, "class", null, ne.class, L), z & 4 && a(q, "style", $.style, ne.style, L), z & 8) {
        const Se = T.dynamicProps;
        for (let Te = 0; Te < Se.length; Te++) {
          const Re = Se[Te], je = $[Re], ot = ne[Re];
          (ot !== je || Re === "value") && a(q, Re, je, ot, L, A);
        }
      }
      z & 1 && v.children !== T.children && u(q, T.children);
    } else !j && U == null && ie(q, $, ne, A, L);
    ((ue = ne.onVnodeUpdated) || ae) && Dt(() => {
      ue && Zt(ue, A, T, v), ae && Xs(T, v, A, "updated");
    }, D);
  }, Q = (v, T, A, D, L, E, j) => {
    for (let q = 0; q < T.length; q++) {
      const z = v[q], U = T[q], ae = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (z.type === Nt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !$i(z, U) || // - In the case of a component, it could contain anything.
        z.shapeFlag & 198) ? d(z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          A
        )
      );
      b(
        z,
        U,
        ae,
        null,
        D,
        L,
        E,
        j,
        !0
      );
    }
  }, ie = (v, T, A, D, L) => {
    if (T !== A) {
      if (T !== Be)
        for (const E in T)
          !fn(E) && !(E in A) && a(
            v,
            E,
            T[E],
            null,
            L,
            D
          );
      for (const E in A) {
        if (fn(E)) continue;
        const j = A[E], q = T[E];
        j !== q && E !== "value" && a(v, E, q, j, L, D);
      }
      "value" in A && a(v, "value", T.value, A.value, L);
    }
  }, oe = (v, T, A, D, L, E, j, q, z) => {
    const U = T.el = v ? v.el : r(""), ae = T.anchor = v ? v.anchor : r("");
    let { patchFlag: $, dynamicChildren: ne, slotScopeIds: ue } = T;
    ue && (q = q ? q.concat(ue) : ue), v == null ? (i(U, A, D), i(ae, A, D), M(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      T.children || [],
      A,
      ae,
      L,
      E,
      j,
      q,
      z
    )) : $ > 0 && $ & 64 && ne && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren && v.dynamicChildren.length === ne.length ? (Q(
      v.dynamicChildren,
      ne,
      A,
      L,
      E,
      j,
      q
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (T.key != null || L && T === L.subTree) && qf(
      v,
      T,
      !0
      /* shallow */
    )) : V(
      v,
      T,
      A,
      ae,
      L,
      E,
      j,
      q,
      z
    );
  }, Ae = (v, T, A, D, L, E, j, q, z) => {
    T.slotScopeIds = q, v == null ? T.shapeFlag & 512 ? L.ctx.activate(
      T,
      A,
      D,
      j,
      z
    ) : qe(
      T,
      A,
      D,
      L,
      E,
      j,
      z
    ) : ge(v, T, z);
  }, qe = (v, T, A, D, L, E, j) => {
    const q = v.component = Yg(
      v,
      D,
      L
    );
    if (vl(v) && (q.ctx.renderer = Z), Qg(q, !1, j), q.asyncDep) {
      if (L && L.registerDep(q, ce, j), !v.el) {
        const z = q.subTree = Me(ws);
        k(null, z, T, A), v.placeholder = z.el;
      }
    } else
      ce(
        q,
        v,
        T,
        A,
        L,
        E,
        j
      );
  }, ge = (v, T, A) => {
    const D = T.component = v.component;
    if (Dg(v, T, A))
      if (D.asyncDep && !D.asyncResolved) {
        B(D, T, A);
        return;
      } else
        D.next = T, D.update();
    else
      T.el = v.el, D.vnode = T;
  }, ce = (v, T, A, D, L, E, j) => {
    const q = () => {
      if (v.isMounted) {
        let { next: $, bu: ne, u: ue, parent: Se, vnode: Te } = v;
        {
          const kt = Gf(v);
          if (kt) {
            $ && ($.el = Te.el, B(v, $, j)), kt.asyncDep.then(() => {
              Dt(() => {
                v.isUnmounted || U();
              }, L);
            });
            return;
          }
        }
        let Re = $, je;
        Qs(v, !1), $ ? ($.el = Te.el, B(v, $, j)) : $ = Te, ne && jo(ne), (je = $.props && $.props.onVnodeBeforeUpdate) && Zt(je, Se, $, Te), Qs(v, !0);
        const ot = Bc(v), Wt = v.subTree;
        v.subTree = ot, b(
          Wt,
          ot,
          // parent may have changed if it's in a teleport
          d(Wt.el),
          // anchor may have changed if it's in a fragment
          O(Wt),
          v,
          L,
          E
        ), $.el = ot.el, Re === null && Ig(v, ot.el), ue && Dt(ue, L), (je = $.props && $.props.onVnodeUpdated) && Dt(
          () => Zt(je, Se, $, Te),
          L
        );
      } else {
        let $;
        const { el: ne, props: ue } = T, { bm: Se, m: Te, parent: Re, root: je, type: ot } = v, Wt = bn(T);
        Qs(v, !1), Se && jo(Se), !Wt && ($ = ue && ue.onVnodeBeforeMount) && Zt($, Re, T), Qs(v, !0);
        {
          je.ce && je.ce._hasShadowRoot() && je.ce._injectChildStyle(
            ot,
            v.parent ? v.parent.type : void 0
          );
          const kt = v.subTree = Bc(v);
          b(
            null,
            kt,
            A,
            D,
            v,
            L,
            E
          ), T.el = kt.el;
        }
        if (Te && Dt(Te, L), !Wt && ($ = ue && ue.onVnodeMounted)) {
          const kt = T;
          Dt(
            () => Zt($, Re, kt),
            L
          );
        }
        (T.shapeFlag & 256 || Re && bn(Re.vnode) && Re.vnode.shapeFlag & 256) && v.a && Dt(v.a, L), v.isMounted = !0, T = A = D = null;
      }
    };
    v.scope.on();
    const z = v.effect = new tf(q);
    v.scope.off();
    const U = v.update = z.run.bind(z), ae = v.job = z.runIfDirty.bind(z);
    ae.i = v, ae.id = v.uid, z.scheduler = () => bl(ae), Qs(v, !0), U();
  }, B = (v, T, A) => {
    T.component = v;
    const D = v.vnode.props;
    v.vnode = T, v.next = null, Og(v, T.props, D, A), Fg(v, T.children, A), As(), Ic(v), Ps();
  }, V = (v, T, A, D, L, E, j, q, z = !1) => {
    const U = v && v.children, ae = v ? v.shapeFlag : 0, $ = T.children, { patchFlag: ne, shapeFlag: ue } = T;
    if (ne > 0) {
      if (ne & 128) {
        Pe(
          U,
          $,
          A,
          D,
          L,
          E,
          j,
          q,
          z
        );
        return;
      } else if (ne & 256) {
        le(
          U,
          $,
          A,
          D,
          L,
          E,
          j,
          q,
          z
        );
        return;
      }
    }
    ue & 8 ? (ae & 16 && He(U, L, E), $ !== U && u(A, $)) : ae & 16 ? ue & 16 ? Pe(
      U,
      $,
      A,
      D,
      L,
      E,
      j,
      q,
      z
    ) : He(U, L, E, !0) : (ae & 8 && u(A, ""), ue & 16 && M(
      $,
      A,
      D,
      L,
      E,
      j,
      q,
      z
    ));
  }, le = (v, T, A, D, L, E, j, q, z) => {
    v = v || Ri, T = T || Ri;
    const U = v.length, ae = T.length, $ = Math.min(U, ae);
    let ne;
    for (ne = 0; ne < $; ne++) {
      const ue = T[ne] = z ? bs(T[ne]) : as(T[ne]);
      b(
        v[ne],
        ue,
        A,
        null,
        L,
        E,
        j,
        q,
        z
      );
    }
    U > ae ? He(
      v,
      L,
      E,
      !0,
      !1,
      $
    ) : M(
      T,
      A,
      D,
      L,
      E,
      j,
      q,
      z,
      $
    );
  }, Pe = (v, T, A, D, L, E, j, q, z) => {
    let U = 0;
    const ae = T.length;
    let $ = v.length - 1, ne = ae - 1;
    for (; U <= $ && U <= ne; ) {
      const ue = v[U], Se = T[U] = z ? bs(T[U]) : as(T[U]);
      if ($i(ue, Se))
        b(
          ue,
          Se,
          A,
          null,
          L,
          E,
          j,
          q,
          z
        );
      else
        break;
      U++;
    }
    for (; U <= $ && U <= ne; ) {
      const ue = v[$], Se = T[ne] = z ? bs(T[ne]) : as(T[ne]);
      if ($i(ue, Se))
        b(
          ue,
          Se,
          A,
          null,
          L,
          E,
          j,
          q,
          z
        );
      else
        break;
      $--, ne--;
    }
    if (U > $) {
      if (U <= ne) {
        const ue = ne + 1, Se = ue < ae ? T[ue].el : D;
        for (; U <= ne; )
          b(
            null,
            T[U] = z ? bs(T[U]) : as(T[U]),
            A,
            Se,
            L,
            E,
            j,
            q,
            z
          ), U++;
      }
    } else if (U > ne)
      for (; U <= $; )
        Fe(v[U], L, E, !0), U++;
    else {
      const ue = U, Se = U, Te = /* @__PURE__ */ new Map();
      for (U = Se; U <= ne; U++) {
        const ct = T[U] = z ? bs(T[U]) : as(T[U]);
        ct.key != null && Te.set(ct.key, U);
      }
      let Re, je = 0;
      const ot = ne - Se + 1;
      let Wt = !1, kt = 0;
      const Yt = new Array(ot);
      for (U = 0; U < ot; U++) Yt[U] = 0;
      for (U = ue; U <= $; U++) {
        const ct = v[U];
        if (je >= ot) {
          Fe(ct, L, E, !0);
          continue;
        }
        let Tt;
        if (ct.key != null)
          Tt = Te.get(ct.key);
        else
          for (Re = Se; Re <= ne; Re++)
            if (Yt[Re - Se] === 0 && $i(ct, T[Re])) {
              Tt = Re;
              break;
            }
        Tt === void 0 ? Fe(ct, L, E, !0) : (Yt[Tt - Se] = U + 1, Tt >= kt ? kt = Tt : Wt = !0, b(
          ct,
          T[Tt],
          A,
          null,
          L,
          E,
          j,
          q,
          z
        ), je++);
      }
      const $s = Wt ? jg(Yt) : Ri;
      for (Re = $s.length - 1, U = ot - 1; U >= 0; U--) {
        const ct = Se + U, Tt = T[ct], Js = T[ct + 1], Ys = ct + 1 < ae ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Js.el || Kf(Js)
        ) : D;
        Yt[U] === 0 ? b(
          null,
          Tt,
          A,
          Ys,
          L,
          E,
          j,
          q,
          z
        ) : Wt && (Re < 0 || U !== $s[Re] ? Le(Tt, A, Ys, 2) : Re--);
      }
    }
  }, Le = (v, T, A, D, L = null) => {
    const { el: E, type: j, transition: q, children: z, shapeFlag: U } = v;
    if (U & 6) {
      Le(v.component.subTree, T, A, D);
      return;
    }
    if (U & 128) {
      v.suspense.move(T, A, D);
      return;
    }
    if (U & 64) {
      j.move(v, T, A, Z);
      return;
    }
    if (j === Nt) {
      i(E, T, A);
      for (let $ = 0; $ < z.length; $++)
        Le(z[$], T, A, D);
      i(v.anchor, T, A);
      return;
    }
    if (j === Xo) {
      C(v, T, A);
      return;
    }
    if (D !== 2 && U & 1 && q)
      if (D === 0)
        q.persisted && !E[Ko] ? i(E, T, A) : (q.beforeEnter(E), i(E, T, A), Dt(() => q.enter(E), L));
      else {
        const { leave: $, delayLeave: ne, afterLeave: ue } = q, Se = () => {
          v.ctx.isUnmounted ? n(E) : i(E, T, A);
        }, Te = () => {
          const Re = E._isLeaving || !!E[Ko];
          E._isLeaving && E[Ko](
            !0
            /* cancelled */
          ), q.persisted && !Re ? Se() : $(E, () => {
            Se(), ue && ue();
          });
        };
        ne ? ne(E, Se, Te) : Te();
      }
    else
      i(E, T, A);
  }, Fe = (v, T, A, D = !1, L = !1) => {
    const {
      type: E,
      props: j,
      ref: q,
      children: z,
      dynamicChildren: U,
      shapeFlag: ae,
      patchFlag: $,
      dirs: ne,
      cacheIndex: ue,
      memo: Se
    } = v;
    if ($ === -2 && (L = !1), q != null && (As(), gn(q, null, A, v, !0), Ps()), ue != null && (T.renderCache[ue] = void 0), ae & 256) {
      T.ctx.deactivate(v);
      return;
    }
    const Te = ae & 1 && ne, Re = !bn(v);
    let je;
    if (Re && (je = j && j.onVnodeBeforeUnmount) && Zt(je, T, v), ae & 6)
      St(v.component, A, D);
    else {
      if (ae & 128) {
        v.suspense.unmount(A, D);
        return;
      }
      Te && Xs(v, null, T, "beforeUnmount"), ae & 64 ? v.type.remove(
        v,
        T,
        A,
        Z,
        D
      ) : U && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !U.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== Nt || $ > 0 && $ & 64) ? He(
        U,
        T,
        A,
        !1,
        !0
      ) : (E === Nt && $ & 384 || !L && ae & 16) && He(z, T, A), D && ke(v);
    }
    const ot = Se != null && ue == null;
    (Re && (je = j && j.onVnodeUnmounted) || Te || ot) && Dt(() => {
      je && Zt(je, T, v), Te && Xs(v, null, T, "unmounted"), ot && (v.el = null);
    }, A);
  }, ke = (v) => {
    const { type: T, el: A, anchor: D, transition: L } = v;
    if (T === Nt) {
      Ze(A, D);
      return;
    }
    if (T === Xo) {
      P(v);
      return;
    }
    const E = () => {
      n(A), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (v.shapeFlag & 1 && L && !L.persisted) {
      const { leave: j, delayLeave: q } = L, z = () => j(A, E);
      q ? q(v.el, E, z) : z();
    } else
      E();
  }, Ze = (v, T) => {
    let A;
    for (; v !== T; )
      A = f(v), n(v), v = A;
    n(T);
  }, St = (v, T, A) => {
    const { bum: D, scope: L, job: E, subTree: j, um: q, m: z, a: U } = v;
    zc(z), zc(U), D && jo(D), L.stop(), E && (E.flags |= 8, Fe(j, v, T, A)), q && Dt(q, T), Dt(() => {
      v.isUnmounted = !0;
    }, T);
  }, He = (v, T, A, D = !1, L = !1, E = 0) => {
    for (let j = E; j < v.length; j++)
      Fe(v[j], T, A, D, L);
  }, O = (v) => {
    if (v.shapeFlag & 6)
      return O(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const T = f(v.anchor || v.el), A = T && T[tg];
    return A ? f(A) : T;
  };
  let Y = !1;
  const H = (v, T, A) => {
    let D;
    v == null ? T._vnode && (Fe(T._vnode, null, null, !0), D = T._vnode.component) : b(
      T._vnode || null,
      v,
      T,
      null,
      null,
      null,
      A
    ), T._vnode = v, Y || (Y = !0, Ic(D), Sf(), Y = !1);
  }, Z = {
    p: b,
    um: Fe,
    m: Le,
    r: ke,
    mt: qe,
    mc: M,
    pc: V,
    pbc: Q,
    n: O,
    o: t
  };
  return {
    render: H,
    hydrate: void 0,
    createApp: Ag(H)
  };
}
function Yo({ type: t, props: e }, s) {
  return s === "svg" && t === "foreignObject" || s === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : s;
}
function Qs({ effect: t, job: e }, s) {
  s ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function Hg(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function qf(t, e, s = !1) {
  const i = t.children, n = e.children;
  if (fe(i) && fe(n))
    for (let a = 0; a < i.length; a++) {
      const o = i[a];
      let r = n[a];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = n[a] = bs(n[a]), r.el = o.el), !s && r.patchFlag !== -2 && qf(o, r)), r.type === _o && (r.patchFlag === -1 && (r = n[a] = bs(r)), r.el = o.el), r.type === ws && !r.el && (r.el = o.el);
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
function Gf(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Gf(e);
}
function zc(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function Kf(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? Kf(e.subTree) : null;
}
const $f = (t) => t.__isSuspense;
function zg(t, e) {
  e && e.pendingBranch ? fe(t) ? e.effects.push(...t) : e.effects.push(t) : Xm(t);
}
const Nt = /* @__PURE__ */ Symbol.for("v-fgt"), _o = /* @__PURE__ */ Symbol.for("v-txt"), ws = /* @__PURE__ */ Symbol.for("v-cmt"), Xo = /* @__PURE__ */ Symbol.for("v-stc"), ui = [];
let Ft = null;
function Je(t = !1) {
  ui.push(Ft = t ? null : []);
}
function Jf() {
  ui.pop(), Ft = ui[ui.length - 1] || null;
}
let Rn = 1;
function Ka(t, e = !1) {
  Rn += t, t < 0 && Ft && e && (Ft.hasOnce = !0);
}
function Yf(t) {
  return t.dynamicChildren = Rn > 0 ? Ft || Ri : null, Jf(), Rn > 0 && Ft && Ft.push(t), t;
}
function Qe(t, e, s, i, n, a) {
  return Yf(
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
  return Yf(
    Me(
      t,
      e,
      s,
      i,
      n,
      !0
    )
  );
}
function $a(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function $i(t, e) {
  return t.type === e.type && t.key === e.key;
}
const Xf = ({ key: t }) => t ?? null, Ia = ({
  ref: t,
  ref_key: e,
  ref_for: s
}) => (typeof t == "number" && (t = "" + t), t != null ? nt(t) || /* @__PURE__ */ vt(t) || pe(t) ? { i: Ut, r: t, k: e, f: !!s } : t : null);
function S(t, e = null, s = null, i = 0, n = null, a = t === Nt ? 0 : 1, o = !1, r = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Xf(e),
    ref: e && Ia(e),
    scopeId: Tf,
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
    ctx: Ut
  };
  return r ? (Ja(l, s), a & 128 && t.normalize(l)) : s && (l.shapeFlag |= nt(s) ? 8 : 16), Rn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ft && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ft.push(l), l;
}
const Me = qg;
function qg(t, e = null, s = null, i = 0, n = null, a = !1) {
  if ((!t || t === gg) && (t = ws), $a(t)) {
    const r = Li(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return s && Ja(r, s), Rn > 0 && !a && Ft && (r.shapeFlag & 6 ? Ft[Ft.indexOf(t)] = r : Ft.push(r)), r.patchFlag = -2, r;
  }
  if (ib(t) && (t = t.__vccOpts), e) {
    e = Gg(e);
    let { class: r, style: l } = e;
    r && !nt(r) && (e.class = $e(r)), Oe(l) && (/* @__PURE__ */ gl(l) && !fe(l) && (l = ht({}, l)), e.style = ll(l));
  }
  const o = nt(t) ? 1 : $f(t) ? 128 : go(t) ? 64 : Oe(t) ? 4 : pe(t) ? 2 : 0;
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
  return t ? /* @__PURE__ */ gl(t) || Wf(t) ? ht({}, t) : t : null;
}
function Li(t, e, s = !1, i = !1) {
  const { props: n, ref: a, patchFlag: o, children: r, transition: l } = t, c = e ? Kg(n || {}, e) : n, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: c,
    key: c && Xf(c),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && a ? fe(a) ? a.concat(Ia(e)) : [a, Ia(e)] : Ia(e)
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
    patchFlag: e && t.type !== Nt ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: t.ssContent && Li(t.ssContent),
    ssFallback: t.ssFallback && Li(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return l && i && yl(
    u,
    l.clone(u)
  ), u;
}
function Ce(t = " ", e = 0) {
  return Me(_o, null, t, e);
}
function zt(t = "", e = !1) {
  return e ? (Je(), Vg(ws, null, t)) : Me(ws, null, t);
}
function as(t) {
  return t == null || typeof t == "boolean" ? Me(ws) : fe(t) ? Me(
    Nt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : $a(t) ? bs(t) : Me(_o, null, String(t));
}
function bs(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Li(t);
}
function Ja(t, e) {
  let s = 0;
  const { shapeFlag: i } = t;
  if (e == null)
    e = null;
  else if (fe(e))
    s = 16;
  else if (typeof e == "object")
    if (i & 65) {
      const n = e.default;
      n && (n._c && (n._d = !1), Ja(t, n()), n._c && (n._d = !0));
      return;
    } else {
      s = 32;
      const n = e._;
      !n && !Wf(e) ? e._ctx = Ut : n === 3 && Ut && (Ut.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else if (pe(e)) {
    if (i & 65) {
      Ja(t, { default: e });
      return;
    }
    e = { default: e, _ctx: Ut }, s = 32;
  } else
    e = String(e), i & 64 ? (s = 16, e = [Ce(e)]) : s = 8;
  t.children = e, t.shapeFlag |= s;
}
function Kg(...t) {
  const e = {};
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    for (const n in i)
      if (n === "class")
        e.class !== i.class && (e.class = $e([e.class, i.class]));
      else if (n === "style")
        e.style = ll([e.style, i.style]);
      else if (lo(n)) {
        const a = e[n], o = i[n];
        o && a !== o && !(fe(a) && a.includes(o)) ? e[n] = a ? [].concat(a, o) : o : o == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !co(n) && (e[n] = o);
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
const $g = Of();
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
    propsOptions: Hf(i, n),
    emitsOptions: Lf(i, n),
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
const Xg = () => bt || Ut;
let Ya, Mn;
{
  const t = ho(), e = (s, i) => {
    let n;
    return (n = t[s]) || (n = t[s] = []), n.push(i), (a) => {
      n.length > 1 ? n.forEach((o) => o(a)) : n[0](a);
    };
  };
  Ya = e(
    "__VUE_INSTANCE_SETTERS__",
    (s) => bt = s
  ), Mn = e(
    "__VUE_SSR_SETTERS__",
    (s) => Dn = s
  );
}
const qn = (t) => {
  const e = bt;
  return Ya(t), t.scope.on(), () => {
    t.scope.off(), Ya(e);
  };
}, Vc = () => {
  bt && bt.scope.off(), Ya(null);
};
function Qf(t) {
  return t.vnode.shapeFlag & 4;
}
let Dn = !1;
function Qg(t, e = !1, s = !1) {
  e && Mn(e);
  const { props: i, children: n } = t.vnode, a = Qf(t);
  Eg(t, i, a, e), Ug(t, n, s || e);
  const o = a ? Zg(t, e) : void 0;
  return e && Mn(!1), o;
}
function Zg(t, e) {
  const s = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, yg);
  const { setup: i } = s;
  if (i) {
    As();
    const n = t.setupContext = i.length > 1 ? tb(t) : null, a = qn(t), o = Vn(
      i,
      t,
      0,
      [
        t.props,
        n
      ]
    ), r = $d(o);
    if (Ps(), a(), (r || t.sp) && !bn(t) && Rf(t), r) {
      if (o.then(Vc, Vc), e)
        return o.then((l) => {
          Mn(!0);
          try {
            qc(t, l, e);
          } finally {
            Mn(!1);
          }
        }).catch((l) => {
          mo(l, t, 0);
        });
      t.asyncDep = o;
    } else
      qc(t, o);
  } else
    Zf(t);
}
function qc(t, e, s) {
  pe(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Oe(e) && (t.setupState = yf(e)), Zf(t);
}
function Zf(t, e, s) {
  const i = t.type;
  t.render || (t.render = i.render || rs);
  {
    const n = qn(t);
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
function So(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(yf(Hm(t.exposed)), {
    get(e, s) {
      if (s in e)
        return e[s];
      if (s in yn)
        return yn[s](t);
    },
    has(e, s) {
      return s in e || s in yn;
    }
  })) : t.proxy;
}
function sb(t, e = !0) {
  return pe(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function ib(t) {
  return pe(t) && "__vccOpts" in t;
}
const be = (t, e) => /* @__PURE__ */ Gm(t, e, Dn);
function ss(t, e, s) {
  try {
    Ka(-1);
    const i = arguments.length;
    return i === 2 ? Oe(e) && !fe(e) ? $a(e) ? Me(t, null, [e]) : Me(t, e) : Me(t, null, e) : (i > 3 ? s = Array.prototype.slice.call(arguments, 2) : i === 3 && $a(s) && (s = [s]), Me(t, e, s));
  } finally {
    Ka(1);
  }
}
const nb = "3.5.41";
/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Er;
const Gc = typeof window < "u" && window.trustedTypes;
if (Gc)
  try {
    Er = /* @__PURE__ */ Gc.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const eh = Er ? (t) => Er.createHTML(t) : (t) => t, ab = "http://www.w3.org/2000/svg", ob = "http://www.w3.org/1998/Math/MathML", gs = typeof document < "u" ? document : null, Kc = gs && /* @__PURE__ */ gs.createElement("template"), rb = {
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
      Kc.innerHTML = eh(
        i === "svg" ? `<svg>${t}</svg>` : i === "mathml" ? `<math>${t}</math>` : t
      );
      const r = Kc.content;
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
const Xa = /* @__PURE__ */ Symbol("_vod"), th = /* @__PURE__ */ Symbol("_vsh"), Es = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(t, { value: e }, { transition: s }) {
    t[Xa] = t.style.display === "none" ? "" : t.style.display, s && e ? s.beforeEnter(t) : Ji(t, e);
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
  t.style.display = e ? t[Xa] : "none", t[th] = !e;
}
const ub = /* @__PURE__ */ Symbol(""), db = /(?:^|;)\s*display\s*:/;
function fb(t, e, s) {
  const i = t.style, n = nt(s);
  let a = !1;
  if (s && !n) {
    if (e)
      if (nt(e))
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
        !nt(e) && e ? e[o] : void 0,
        r
      ) || an(i, o, r) : an(i, o, "");
    }
  } else if (n) {
    if (e !== s) {
      const o = i[ub];
      o && (s += ";" + o), i.cssText = s, a = db.test(s);
    }
  } else e && t.removeAttribute("style");
  Xa in t && (t[Xa] = a ? i.display : "", t[th] && (i.display = "none"));
}
const $c = /\s*!important$/;
function an(t, e, s) {
  if (fe(s))
    s.forEach((i) => an(t, e, i));
  else if (s == null && (s = ""), e.startsWith("--"))
    t.setProperty(e, s);
  else {
    const i = hb(t, e);
    $c.test(s) ? t.setProperty(
      mi(i),
      s.replace($c, ""),
      "important"
    ) : t[i] = s;
  }
}
const Jc = ["Webkit", "Moz", "ms"], Qo = {};
function hb(t, e) {
  const s = Qo[e];
  if (s)
    return s;
  let i = wt(e);
  if (i !== "filter" && i in t)
    return Qo[e] = i;
  i = fo(i);
  for (let n = 0; n < Jc.length; n++) {
    const a = Jc[n] + i;
    if (a in t)
      return Qo[e] = a;
  }
  return e;
}
function pb(t, e, s, i) {
  return t.tagName === "TEXTAREA" && (e === "width" || e === "height") && nt(i) && s === i;
}
const Yc = "http://www.w3.org/1999/xlink";
function Xc(t, e, s, i, n, a = _m(e)) {
  i && e.startsWith("xlink:") ? s == null ? t.removeAttributeNS(Yc, e.slice(6, e.length)) : t.setAttributeNS(Yc, e, s) : s == null || a && !Qd(s) ? t.removeAttribute(e) : t.setAttribute(
    e,
    a ? "" : us(s) ? String(s) : s
  );
}
function Qc(t, e, s, i, n) {
  if (e === "innerHTML" || e === "textContent") {
    s != null && (t[e] = e === "innerHTML" ? eh(s) : s);
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
    r === "boolean" ? s = Qd(s) : s == null && r === "string" ? (s = "", o = !0) : r === "number" && (s = 0, o = !0);
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
const Zc = /* @__PURE__ */ Symbol("_vei");
function bb(t, e, s, i, n = null) {
  const a = t[Zc] || (t[Zc] = {}), o = a[e];
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
  return [t[2] === ":" ? t.slice(3) : mi(t.slice(2)), e];
}
let Zo = 0;
const Sb = /* @__PURE__ */ Promise.resolve(), kb = () => Zo || (Sb.then(() => Zo = 0), Zo = Date.now());
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
const eu = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, xb = (t, e, s, i, n, a) => {
  const o = n === "svg";
  e === "class" ? cb(t, i, o) : e === "style" ? fb(t, s, i) : lo(e) ? co(e) || bb(t, e, s, i, a) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Ab(t, e, i, o)) ? (Qc(t, e, i), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Xc(t, e, i, o, a, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Pb(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !nt(i))) ? Qc(t, wt(e), i, a, e) : (e === "true-value" ? t._trueValue = i : e === "false-value" && (t._falseValue = i), Xc(t, e, i, o));
};
function Ab(t, e, s, i) {
  if (i)
    return !!(e === "innerHTML" || e === "textContent" || e in t && eu(e) && pe(s));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const n = t.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return eu(e) && nt(s) ? !1 : e in t;
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
let tu;
function wb() {
  return tu || (tu = Wg(Cb));
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
  return nt(t) ? document.querySelector(t) : t;
}
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const Ti = typeof document < "u";
function sh(t) {
  return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t;
}
function Ib(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module" || t.default && sh(t.default);
}
const Ge = Object.assign;
function er(t, e) {
  const s = {};
  for (const i in e) {
    const n = e[i];
    s[i] = Jt(n) ? n.map(t) : t(n);
  }
  return s;
}
const vn = () => {
}, Jt = Array.isArray;
function su(t, e) {
  const s = {};
  for (const i in t) s[i] = i in e ? e[i] : t[i];
  return s;
}
const ih = /#/g, Eb = /&/g, Ob = /\//g, Lb = /=/g, Nb = /\?/g, nh = /\+/g, Ub = /%5B/g, Fb = /%5D/g, ah = /%5E/g, Wb = /%60/g, oh = /%7B/g, Bb = /%7C/g, rh = /%7D/g, Hb = /%20/g;
function kl(t) {
  return t == null ? "" : encodeURI("" + t).replace(Bb, "|").replace(Ub, "[").replace(Fb, "]");
}
function jb(t) {
  return kl(t).replace(oh, "{").replace(rh, "}").replace(ah, "^");
}
function Or(t) {
  return kl(t).replace(nh, "%2B").replace(Hb, "+").replace(ih, "%23").replace(Eb, "%26").replace(Wb, "`").replace(oh, "{").replace(rh, "}").replace(ah, "^");
}
function zb(t) {
  return Or(t).replace(Lb, "%3D");
}
function Vb(t) {
  return kl(t).replace(ih, "%23").replace(Nb, "%3F");
}
function qb(t) {
  return Vb(t).replace(Ob, "%2F");
}
function In(t) {
  if (t == null) return null;
  try {
    return decodeURIComponent("" + t);
  } catch {
  }
  return "" + t;
}
const Gb = /\/$/, Kb = (t) => t.replace(Gb, "");
function tr(t, e, s = "/") {
  let i, n = {}, a = "", o = "";
  const r = e.indexOf("#");
  let l = e.indexOf("?");
  return l = r >= 0 && l > r ? -1 : l, l >= 0 && (i = e.slice(0, l), a = e.slice(l, r > 0 ? r : e.length), n = t(a.slice(1))), r >= 0 && (i = i || e.slice(0, r), o = e.slice(r, e.length)), i = Xb(i ?? e, s), {
    fullPath: i + a + o,
    path: i,
    query: n,
    hash: In(o)
  };
}
function $b(t, e) {
  const s = e.query ? t(e.query) : "";
  return e.path + (s && "?") + s + (e.hash || "");
}
function Jb(t, e, s) {
  const i = e.matched.length - 1, n = s.matched.length - 1;
  return i > -1 && i === n && Ni(e.matched[i], s.matched[n]) && lh(e.params, s.params) && t(e.query) === t(s.query) && e.hash === s.hash;
}
function Ni(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e);
}
function lh(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (var s in t) if (!Yb(t[s], e[s])) return !1;
  return !0;
}
function Yb(t, e) {
  return Jt(t) ? iu(t, e) : Jt(e) ? iu(e, t) : (t == null ? void 0 : t.valueOf()) === (e == null ? void 0 : e.valueOf());
}
function iu(t, e) {
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
let Lr = /* @__PURE__ */ (function(t) {
  return t.pop = "pop", t.push = "push", t;
})({}), nu = /* @__PURE__ */ (function(t) {
  return t.back = "back", t.forward = "forward", t.unknown = "", t;
})({});
const sr = "";
function Qb(t) {
  if (!t) if (Ti) {
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
function au(t, e) {
  return (history.state ? history.state.position - e : -1) + t;
}
const Nr = /* @__PURE__ */ new Map();
function ny(t, e) {
  Nr.set(t, e);
}
function ay(t) {
  const e = Nr.get(t);
  return Nr.delete(t), e;
}
function oy(t) {
  return typeof t == "string" || t && typeof t == "object";
}
function ch(t) {
  return typeof t == "string" || typeof t == "symbol";
}
let st = /* @__PURE__ */ (function(t) {
  return t[t.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", t[t.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", t[t.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", t[t.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", t[t.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", t;
})({});
const uh = Symbol("");
st.MATCHER_NOT_FOUND + "", st.NAVIGATION_GUARD_REDIRECT + "", st.NAVIGATION_ABORTED + "", st.NAVIGATION_CANCELLED + "", st.NAVIGATION_DUPLICATED + "";
function Ui(t, e) {
  return Ge(/* @__PURE__ */ new Error(), {
    type: t,
    [uh]: !0
  }, e);
}
function fs(t, e) {
  return t instanceof Error && uh in t && (e == null || !!(t.type & e));
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
    const n = s[i].replace(nh, " "), a = n.indexOf("="), o = In(a < 0 ? n : n.slice(0, a)), r = a < 0 ? null : In(n.slice(a + 1));
    if (o in e) {
      let l = e[o];
      Jt(l) || (l = e[o] = [l]), l.push(r);
    } else e[o] = r;
  }
  return e;
}
function ou(t) {
  let e = "";
  for (let s in t) {
    const i = t[s];
    if (s = zb(s), i == null) {
      i !== void 0 && (e += (e.length ? "&" : "") + s);
      continue;
    }
    (Jt(i) ? i.map((n) => n && Or(n)) : [i && Or(i)]).forEach((n) => {
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
const dy = Symbol(""), ru = Symbol(""), ko = Symbol(""), Tl = Symbol(""), Ur = Symbol("");
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
function Us(t, e, s, i, n, a = (o) => o()) {
  const o = i && (i.enterCallbacks[n] = i.enterCallbacks[n] || []);
  return () => new Promise((r, l) => {
    const c = (f) => {
      f === !1 ? l(Ui(st.NAVIGATION_ABORTED, {
        from: s,
        to: e
      })) : f instanceof Error ? l(f) : oy(f) ? l(Ui(st.NAVIGATION_GUARD_REDIRECT, {
        from: e,
        to: f
      })) : (o && i.enterCallbacks[n] === o && typeof f == "function" && o.push(f), r());
    }, u = a(() => t.call(i && i.instances[n], e, s, c));
    let d = Promise.resolve(u);
    t.length < 3 && (d = d.then(c)), d.catch((f) => l(f));
  });
}
function ir(t, e, s, i, n = (a) => a()) {
  const a = [];
  for (const o of t)
    for (const r in o.components) {
      let l = o.components[r];
      if (!(e !== "beforeRouteEnter" && !o.instances[r]))
        if (sh(l)) {
          const c = (l.__vccOpts || l)[e];
          c && a.push(Us(c, s, i, o, r, n));
        } else {
          let c = l();
          a.push(() => c.then((u) => {
            if (!u) throw new Error(`Couldn't resolve component "${r}" at "${o.path}"`);
            const d = Ib(u) ? u.default : u;
            o.mods[r] = u, o.components[r] = d;
            const f = (d.__vccOpts || d)[e];
            return f && Us(f, s, i, o, r, n)();
          }));
        }
    }
  return a;
}
function fy(t, e) {
  const s = [], i = [], n = [], a = Math.max(e.matched.length, t.matched.length);
  for (let o = 0; o < a; o++) {
    const r = e.matched[o];
    r && (t.matched.find((c) => Ni(c, r)) ? i.push(r) : s.push(r));
    const l = t.matched[o];
    l && (e.matched.find((c) => Ni(c, l)) || n.push(l));
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
  let e = [], s = [[sr, {}]], i = 0;
  t = Qb(t);
  function n(r, l = {}) {
    i++, i !== s.length && s.splice(i), s.push([r, l]);
  }
  function a(r, l, { direction: c, delta: u }) {
    const d = {
      direction: c,
      delta: u,
      type: Lr.pop
    };
    for (const f of e) f(r, l, d);
  }
  const o = {
    location: sr,
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
      e = [], s = [[sr, {}]], i = 0;
    },
    go(r, l = !0) {
      const c = this.location, u = r < 0 ? nu.back : nu.forward;
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
let oi = /* @__PURE__ */ (function(t) {
  return t[t.Static = 0] = "Static", t[t.Param = 1] = "Param", t[t.Group = 2] = "Group", t;
})({});
var rt = /* @__PURE__ */ (function(t) {
  return t[t.Static = 0] = "Static", t[t.Param = 1] = "Param", t[t.ParamRegExp = 2] = "ParamRegExp", t[t.ParamRegExpEnd = 3] = "ParamRegExpEnd", t[t.EscapeNext = 4] = "EscapeNext", t;
})(rt || {});
const py = {
  type: oi.Static,
  value: ""
}, my = /[a-zA-Z0-9_]/;
function gy(t) {
  if (!t) return [[]];
  if (t === "/") return [[py]];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
  function e(h) {
    throw new Error(`ERR (${s})/"${c}": ${h}`);
  }
  let s = rt.Static, i = s;
  const n = [];
  let a;
  function o() {
    a && n.push(a), a = [];
  }
  let r = 0, l, c = "", u = "";
  function d() {
    c && (s === rt.Static ? a.push({
      type: oi.Static,
      value: c
    }) : s === rt.Param || s === rt.ParamRegExp || s === rt.ParamRegExpEnd ? (a.length > 1 && (l === "*" || l === "+") && e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: oi.Param,
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
    if (l = t[r++], l === "\\" && s !== rt.ParamRegExp) {
      i = s, s = rt.EscapeNext;
      continue;
    }
    switch (s) {
      case rt.Static:
        l === "/" ? (c && d(), o()) : l === ":" ? (d(), s = rt.Param) : f();
        break;
      case rt.EscapeNext:
        f(), s = i;
        break;
      case rt.Param:
        l === "(" ? s = rt.ParamRegExp : my.test(l) ? f() : (d(), s = rt.Static, l !== "*" && l !== "?" && l !== "+" && r--);
        break;
      case rt.ParamRegExp:
        l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : s = rt.ParamRegExpEnd : u += l;
        break;
      case rt.ParamRegExpEnd:
        d(), s = rt.Static, l !== "*" && l !== "?" && l !== "+" && r--, u = "";
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  return s === rt.ParamRegExp && e(`Unfinished custom RegExp for param "${c}"`), d(), o(), n;
}
const lu = "[^/]+?", by = {
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
  const s = Ge({}, by, e), i = [];
  let n = s.start ? "^" : "";
  const a = [];
  for (const c of t) {
    const u = c.length ? [] : [Pt.Root];
    s.strict && !c.length && (n += "/");
    for (let d = 0; d < c.length; d++) {
      const f = c[d];
      let h = Pt.Segment + (s.sensitive ? Pt.BonusCaseSensitive : 0);
      if (f.type === oi.Static)
        d || (n += "/"), n += f.value.replace(yy, "\\$&"), h += Pt.Static;
      else if (f.type === oi.Param) {
        const { value: y, repeatable: b, optional: m, regexp: k } = f;
        a.push({
          name: y,
          repeatable: b,
          optional: m
        });
        const x = k || lu;
        if (x !== lu) {
          h += Pt.BonusCustomRegExp;
          try {
            `${x}`;
          } catch (P) {
            throw new Error(`Invalid custom RegExp for param "${y}" (${x}): ` + P.message);
          }
        }
        let C = b ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        d || (C = m && c.length < 2 ? `(?:/${C})` : "/" + C), m && (C += "?"), n += C, h += Pt.Dynamic, m && (h += Pt.BonusOptional), b && (h += Pt.BonusRepeatable), x === ".*" && (h += Pt.BonusWildcard);
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
      const h = u[f] || "", y = a[f - 1];
      d[y.name] = h && y.repeatable ? h.split("/") : h;
    }
    return d;
  }
  function l(c) {
    let u = "", d = !1;
    for (const f of t) {
      (!d || !u.endsWith("/")) && (u += "/"), d = !1;
      for (const h of f) if (h.type === oi.Static) u += h.value;
      else if (h.type === oi.Param) {
        const { value: y, repeatable: b, optional: m } = h, k = y in c ? c[y] : "";
        if (Jt(k) && !b) throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);
        const x = Jt(k) ? k.join("/") : k;
        if (!x) if (m)
          f.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
        else throw new Error(`Missing required param "${y}"`);
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
function dh(t, e) {
  let s = 0;
  const i = t.score, n = e.score;
  for (; s < i.length && s < n.length; ) {
    const a = _y(i[s], n[s]);
    if (a) return a;
    s++;
  }
  if (Math.abs(n.length - i.length) === 1) {
    if (cu(i)) return 1;
    if (cu(n)) return -1;
  }
  return n.length - i.length;
}
function cu(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0;
}
const Sy = {
  strict: !1,
  end: !0,
  sensitive: !1
};
function ky(t, e, s) {
  const i = vy(gy(t.path), s), n = Ge(i, {
    record: t,
    parent: e,
    children: [],
    alias: []
  });
  return e && !n.record.aliasOf == !e.record.aliasOf && e.children.push(n), n;
}
function Ty(t, e) {
  const s = [], i = /* @__PURE__ */ new Map();
  e = su(Sy, e);
  function n(d) {
    return i.get(d);
  }
  function a(d, f, h) {
    const y = !h, b = du(d);
    b.aliasOf = h && h.record;
    const m = su(e, d), k = [b];
    if ("alias" in d) {
      const P = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const R of P) k.push(du(Ge({}, b, {
        components: h ? h.record.components : b.components,
        path: R,
        aliasOf: h ? h.record : b
      })));
    }
    let x, C;
    for (const P of k) {
      const { path: R } = P;
      if (f && R[0] !== "/") {
        const W = f.record.path, N = W[W.length - 1] === "/" ? "" : "/";
        P.path = f.record.path + (R && N + R);
      }
      if (x = ky(P, f, m), h ? h.alias.push(x) : (C = C || x, C !== x && C.alias.push(x), y && d.name && !fu(x) && o(d.name)), fh(x) && l(x), b.children) {
        const W = b.children;
        for (let N = 0; N < W.length; N++) a(W[N], x, h && h.children[N]);
      }
      h = h || x;
    }
    return C ? () => {
      o(C);
    } : vn;
  }
  function o(d) {
    if (ch(d)) {
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
    s.splice(f, 0, d), d.record.name && !fu(d) && i.set(d.record.name, d);
  }
  function c(d, f) {
    let h, y = {}, b, m;
    if ("name" in d && d.name) {
      if (h = i.get(d.name), !h) throw Ui(st.MATCHER_NOT_FOUND, { location: d });
      m = h.record.name, y = Ge(uu(f.params, h.keys.filter((C) => !C.optional).concat(h.parent ? h.parent.keys.filter((C) => C.optional) : []).map((C) => C.name)), d.params && uu(d.params, h.keys.map((C) => C.name))), b = h.stringify(y);
    } else if (d.path != null)
      b = d.path, h = s.find((C) => C.re.test(b)), h && (y = h.parse(b), m = h.record.name);
    else {
      if (h = f.name ? i.get(f.name) : s.find((C) => C.re.test(f.path)), !h) throw Ui(st.MATCHER_NOT_FOUND, {
        location: d,
        currentLocation: f
      });
      m = h.record.name, y = Ge({}, f.params, d.params), b = h.stringify(y);
    }
    const k = [];
    let x = h;
    for (; x; )
      k.unshift(x.record), x = x.parent;
    return {
      name: m,
      path: b,
      params: y,
      matched: k,
      meta: Ay(k)
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
function uu(t, e) {
  const s = {};
  for (const i of e) i in t && (s[i] = t[i]);
  return s;
}
function du(t) {
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
function fu(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0;
    t = t.parent;
  }
  return !1;
}
function Ay(t) {
  return t.reduce((e, s) => Ge(e, s.meta), {});
}
function Py(t, e) {
  let s = 0, i = e.length;
  for (; s !== i; ) {
    const a = s + i >> 1;
    dh(t, e[a]) < 0 ? i = a : s = a + 1;
  }
  const n = Cy(t);
  return n && (i = e.lastIndexOf(n, i - 1)), i;
}
function Cy(t) {
  let e = t;
  for (; e = e.parent; ) if (fh(e) && dh(t, e) === 0) return e;
}
function fh({ record: t }) {
  return !!(t.name || t.components && Object.keys(t.components).length || t.redirect);
}
function hu(t) {
  const e = Et(ko), s = Et(Tl), i = be(() => {
    const l = se(t.to);
    return e.resolve(l);
  }), n = be(() => {
    const { matched: l } = i.value, { length: c } = l, u = l[c - 1], d = s.matched;
    if (!u || !d.length) return -1;
    const f = d.findIndex(Ni.bind(null, u));
    if (f > -1) return f;
    const h = pu(l[c - 2]);
    return c > 1 && pu(u) === h && d[d.length - 1].path !== h ? d.findIndex(Ni.bind(null, l[c - 2])) : f;
  }), a = be(() => n.value > -1 && Iy(s.params, i.value.params)), o = be(() => n.value > -1 && n.value === s.matched.length - 1 && lh(s.params, i.value.params));
  function r(l = {}) {
    if (Dy(l)) {
      const c = e[se(t.replace) ? "replace" : "push"](se(t.to)).catch(vn);
      return t.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return {
    route: i,
    href: be(() => i.value.href),
    isActive: a,
    isExactActive: o,
    navigate: r
  };
}
function wy(t) {
  return t.length === 1 ? t[0] : t;
}
const Ry = /* @__PURE__ */ wf({
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
  useLink: hu,
  setup(t, { slots: e }) {
    const s = /* @__PURE__ */ zn(hu(t)), { options: i } = Et(ko), n = be(() => ({
      [mu(t.activeClass, i.linkActiveClass, "router-link-active")]: s.isActive,
      [mu(t.exactActiveClass, i.linkExactActiveClass, "router-link-exact-active")]: s.isExactActive
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
function pu(t) {
  return t ? t.aliasOf ? t.aliasOf.path : t.path : "";
}
const mu = (t, e, s) => t ?? e ?? s, Ey = /* @__PURE__ */ wf({
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
    const i = Et(Ur), n = be(() => t.route || i.value), a = Et(ru, 0), o = be(() => {
      let c = se(a);
      const { matched: u } = n.value;
      let d;
      for (; (d = u[c]) && !d.components; ) c++;
      return c;
    }), r = be(() => n.value.matched[o.value]);
    Da(ru, be(() => o.value + 1)), Da(dy, r), Da(Ur, n);
    const l = /* @__PURE__ */ re();
    return mn(() => [
      l.value,
      r.value,
      t.name
    ], ([c, u, d], [f, h, y]) => {
      u && (u.instances[d] = c, h && h !== u && c && c === f && (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards), u.updateGuards.size || (u.updateGuards = h.updateGuards))), c && u && (!h || !Ni(u, h) || !f) && (u.enterCallbacks[d] || []).forEach((b) => b(c));
    }, { flush: "post" }), () => {
      const c = n.value, u = t.name, d = r.value, f = d && d.components[u];
      if (!f) return gu(s.default, {
        Component: f,
        route: c
      });
      const h = d.props[u], y = h ? h === !0 ? c.params : typeof h == "function" ? h(c) : h : null, m = ss(f, Ge({}, y, e, {
        onVnodeUnmounted: (k) => {
          k.component.isUnmounted && (d.instances[u] = null);
        },
        ref: l
      }));
      return gu(s.default, {
        Component: m,
        route: c
      }) || m;
    };
  }
});
function gu(t, e) {
  if (!t) return null;
  const s = t(e);
  return s.length === 1 ? s[0] : s;
}
const Oy = Ey;
function Ly(t) {
  const e = Ty(t.routes, t), s = t.parseQuery || cy, i = t.stringifyQuery || ou, n = t.history, a = Yi(), o = Yi(), r = Yi(), l = /* @__PURE__ */ jm(Os);
  let c = Os;
  Ti && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = er.bind(null, (O) => "" + O), d = er.bind(null, qb), f = er.bind(null, In);
  function h(O, Y) {
    let H, Z;
    return ch(O) ? (H = e.getRecordMatcher(O), Z = Y) : Z = O, e.addRoute(Z, H);
  }
  function y(O) {
    const Y = e.getRecordMatcher(O);
    Y && e.removeRoute(Y);
  }
  function b() {
    return e.getRoutes().map((O) => O.record);
  }
  function m(O) {
    return !!e.getRecordMatcher(O);
  }
  function k(O, Y) {
    if (Y = Ge({}, Y || l.value), typeof O == "string") {
      const A = tr(s, O, Y.path), D = e.resolve({ path: A.path }, Y), L = n.createHref(A.fullPath);
      return Ge(A, D, {
        params: f(D.params),
        hash: In(A.hash),
        redirectedFrom: void 0,
        href: L
      });
    }
    let H;
    if (O.path != null)
      H = Ge({}, O, { path: tr(s, O.path, Y.path).path });
    else {
      const A = Ge({}, O.params);
      for (const D in A) A[D] == null && delete A[D];
      H = Ge({}, O, { params: d(A) }), Y.params = d(Y.params);
    }
    const Z = e.resolve(H, Y), ee = O.hash || "";
    Z.params = u(f(Z.params));
    const v = $b(i, Ge({}, O, {
      hash: jb(ee),
      path: Z.path
    })), T = n.createHref(v);
    return Ge({
      fullPath: v,
      hash: ee,
      query: i === ou ? uy(O.query) : O.query || {}
    }, Z, {
      redirectedFrom: void 0,
      href: T
    });
  }
  function x(O) {
    return typeof O == "string" ? tr(s, O, l.value.path) : Ge({}, O);
  }
  function C(O, Y) {
    if (c !== O) return Ui(st.NAVIGATION_CANCELLED, {
      from: Y,
      to: O
    });
  }
  function P(O) {
    return N(O);
  }
  function R(O) {
    return P(Ge(x(O), { replace: !0 }));
  }
  function W(O, Y) {
    const H = O.matched[O.matched.length - 1];
    if (H && H.redirect) {
      const { redirect: Z } = H;
      let ee = typeof Z == "function" ? Z(O, Y) : Z;
      return typeof ee == "string" && (ee = ee.includes("?") || ee.includes("#") ? ee = x(ee) : { path: ee }, ee.params = {}), Ge({
        query: O.query,
        hash: O.hash,
        params: ee.path != null ? {} : O.params
      }, ee);
    }
  }
  function N(O, Y) {
    const H = c = k(O), Z = l.value, ee = O.state, v = O.force, T = O.replace === !0, A = W(H, Z);
    if (A) return N(Ge(x(A), {
      state: typeof A == "object" ? Ge({}, ee, A.state) : ee,
      force: v,
      replace: T
    }), Y || H);
    const D = H;
    D.redirectedFrom = Y;
    let L;
    return !v && Jb(i, Z, H) && (L = Ui(st.NAVIGATION_DUPLICATED, {
      to: D,
      from: Z
    }), Le(Z, Z, !0, !1)), (L ? Promise.resolve(L) : Q(D, Z)).catch((E) => fs(E) ? fs(E, st.NAVIGATION_GUARD_REDIRECT) ? E : Pe(E) : V(E, D, Z)).then((E) => {
      if (E) {
        if (fs(E, st.NAVIGATION_GUARD_REDIRECT))
          return N(Ge({ replace: T }, x(E.to), {
            state: typeof E.to == "object" ? Ge({}, ee, E.to.state) : ee,
            force: v
          }), Y || D);
      } else E = oe(D, Z, !0, T, ee);
      return ie(D, Z, E), E;
    });
  }
  function M(O, Y) {
    const H = C(O, Y);
    return H ? Promise.reject(H) : Promise.resolve();
  }
  function K(O) {
    const Y = Ze.values().next().value;
    return Y && typeof Y.runWithContext == "function" ? Y.runWithContext(O) : O();
  }
  function Q(O, Y) {
    let H;
    const [Z, ee, v] = fy(O, Y);
    H = ir(Z.reverse(), "beforeRouteLeave", O, Y);
    for (const A of Z) A.leaveGuards.forEach((D) => {
      H.push(Us(D, O, Y));
    });
    const T = M.bind(null, O, Y);
    return H.push(T), He(H).then(() => {
      H = [];
      for (const A of a.list()) H.push(Us(A, O, Y));
      return H.push(T), He(H);
    }).then(() => {
      H = ir(ee, "beforeRouteUpdate", O, Y);
      for (const A of ee) A.updateGuards.forEach((D) => {
        H.push(Us(D, O, Y));
      });
      return H.push(T), He(H);
    }).then(() => {
      H = [];
      for (const A of v) if (A.beforeEnter) if (Jt(A.beforeEnter)) for (const D of A.beforeEnter) H.push(Us(D, O, Y));
      else H.push(Us(A.beforeEnter, O, Y));
      return H.push(T), He(H);
    }).then(() => (O.matched.forEach((A) => A.enterCallbacks = {}), H = ir(v, "beforeRouteEnter", O, Y, K), H.push(T), He(H))).then(() => {
      H = [];
      for (const A of o.list()) H.push(Us(A, O, Y));
      return H.push(T), He(H);
    }).catch((A) => fs(A, st.NAVIGATION_CANCELLED) ? A : Promise.reject(A));
  }
  function ie(O, Y, H) {
    r.list().forEach((Z) => K(() => Z(O, Y, H)));
  }
  function oe(O, Y, H, Z, ee) {
    const v = C(O, Y);
    if (v) return v;
    const T = Y === Os, A = Ti ? history.state : {};
    H && (Z || T ? n.replace(O.fullPath, Ge({ scroll: T && A && A.scroll }, ee)) : n.push(O.fullPath, ee)), l.value = O, Le(O, Y, H, T), Pe();
  }
  let Ae;
  function qe() {
    Ae || (Ae = n.listen((O, Y, H) => {
      if (!St.listening) return;
      const Z = k(O), ee = W(Z, St.currentRoute.value);
      if (ee) {
        N(Ge(ee, {
          replace: !0,
          force: !0
        }), Z).catch(vn);
        return;
      }
      c = Z;
      const v = l.value;
      Ti && ny(au(v.fullPath, H.delta), sy()), Q(Z, v).catch((T) => fs(T, st.NAVIGATION_ABORTED | st.NAVIGATION_CANCELLED) ? T : fs(T, st.NAVIGATION_GUARD_REDIRECT) ? (N(Ge(x(T.to), { force: !0 }), Z).then((A) => {
        fs(A, st.NAVIGATION_ABORTED | st.NAVIGATION_DUPLICATED) && !H.delta && H.type === Lr.pop && n.go(-1, !1);
      }).catch(vn), Promise.reject()) : (H.delta && n.go(-H.delta, !1), V(T, Z, v))).then((T) => {
        T = T || oe(Z, v, !1), T && (H.delta && !fs(T, st.NAVIGATION_CANCELLED) ? n.go(-H.delta, !1) : H.type === Lr.pop && fs(T, st.NAVIGATION_ABORTED | st.NAVIGATION_DUPLICATED) && n.go(-1, !1)), ie(Z, v, T);
      }).catch(vn);
    }));
  }
  let ge = Yi(), ce = Yi(), B;
  function V(O, Y, H) {
    Pe(O);
    const Z = ce.list();
    return Z.length ? Z.forEach((ee) => ee(O, Y, H)) : console.error(O), Promise.reject(O);
  }
  function le() {
    return B && l.value !== Os ? Promise.resolve() : new Promise((O, Y) => {
      ge.add([O, Y]);
    });
  }
  function Pe(O) {
    return B || (B = !O, qe(), ge.list().forEach(([Y, H]) => O ? H(O) : Y()), ge.reset()), O;
  }
  function Le(O, Y, H, Z) {
    const { scrollBehavior: ee } = t;
    if (!Ti || !ee) return Promise.resolve();
    const v = !H && ay(au(O.fullPath, 0)) || (Z || !H) && history.state && history.state.scroll || null;
    return Ai().then(() => ee(O, Y, v)).then((T) => T && iy(T)).catch((T) => V(T, O, Y));
  }
  const Fe = (O) => n.go(O);
  let ke;
  const Ze = /* @__PURE__ */ new Set(), St = {
    currentRoute: l,
    listening: !0,
    addRoute: h,
    removeRoute: y,
    clearRoutes: e.clearRoutes,
    hasRoute: m,
    getRoutes: b,
    resolve: k,
    options: t,
    push: P,
    replace: R,
    go: Fe,
    back: () => Fe(-1),
    forward: () => Fe(1),
    beforeEach: a.add,
    beforeResolve: o.add,
    afterEach: r.add,
    onError: ce.add,
    isReady: le,
    install(O) {
      O.component("RouterLink", My), O.component("RouterView", Oy), O.config.globalProperties.$router = St, Object.defineProperty(O.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => se(l)
      }), Ti && !ke && l.value === Os && (ke = !0, P(n.location).catch((Z) => {
      }));
      const Y = {};
      for (const Z in Os) Object.defineProperty(Y, Z, {
        get: () => l.value[Z],
        enumerable: !0
      });
      O.provide(ko, St), O.provide(Tl, /* @__PURE__ */ gf(Y)), O.provide(Ur, l);
      const H = O.unmount;
      Ze.add(O), O.unmount = function() {
        Ze.delete(O), Ze.size < 1 && (c = Os, Ae && Ae(), Ae = null, l.value = Os, ke = !1, B = !1), H();
      };
    }
  };
  function He(O) {
    return O.reduce((Y, H) => Y.then(() => K(H)), Promise.resolve());
  }
  return St;
}
function Ny() {
  return Et(ko);
}
function Uy(t) {
  return Et(Tl);
}
let Fs = [], Qa = null;
const Fr = (t) => String(t || "").replace(/\/+$/, ""), hh = (t) => {
  try {
    const e = new URL(t);
    return `${e.protocol === "https:" ? "wss:" : "ws:"}//${e.host}`;
  } catch {
    return `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${window.location.host}`;
  }
}, bu = (t) => {
  Fs = t.map((e) => Fr(e)).filter((e) => e), Fs.length === 0 && (Fs = [Fr(window.location.origin)]), Qa = hh(Fs[0]), window.__APP_API_BASES__ = Fs, window.__APP_WS_BASE__ = Qa;
}, Fy = async () => {
  var e;
  bu([window.location.origin]);
  const t = (e = document.querySelector('meta[name="apiBase"]')) == null ? void 0 : e.content;
  if (t) {
    const s = t.split(",").map((i) => i.trim()).filter(Boolean);
    s.length > 0 && bu(s);
  }
  return Fs;
}, ft = () => {
  var t;
  return Fs.length > 0 ? Fs : ((t = window.__APP_API_BASES__) == null ? void 0 : t.length) > 0 ? window.__APP_API_BASES__ : [Fr(window.location.origin)];
}, Wy = () => Qa || (window.__APP_WS_BASE__ ? window.__APP_WS_BASE__ : hh(ft()[0])), By = 1440, xi = {
  ONLINE_THRESHOLD_MS: 3e5,
  RECONNECT_INITIAL_DELAY_MS: 1e3,
  RECONNECT_MAX_DELAY_MS: 3e4,
  MAX_RECONNECT_ATTEMPTS: 10
}, vi = {
  MAX_DATA_POINTS: 500,
  ANIMATION_DURATION: 300,
  MAX_TICKS: 8,
  MAX_TICKS_HOUR: 12
}, yu = {
  LONG_RANGE_POINT_OPTIONS: [60, 120, 180, 240],
  DEFAULT_LONG_RANGE_POINTS: 120
}, xs = {
  THEME_PREFERENCE: "theme_preference",
  LANGUAGE_PREFERENCE: "language_preference",
  VIEW_PREFERENCE: "monitor_preferred_view",
  JWT_TOKEN: "jwt_token",
  TURNSTILE_TOKEN: "turnstile_token",
  TURNSTILE_VERIFIED: "turnstile_verified"
}, nr = {
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  500: "Internal Server Error"
}, Wr = xs.TURNSTILE_VERIFIED, ph = 15e3, Hy = () => "/admin", jy = () => {
  if (typeof window > "u") return;
  const t = Hy();
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
    const r = localStorage.getItem(Wr);
    r && (o["X-Turnstile-Verified"] = r);
  }
  return o;
}, gh = async (t, e = {}) => {
  const { autoRedirect: s = !0, baseUrl: i = null } = e;
  if (t.status === 401)
    return localStorage.removeItem(xs.JWT_TOKEN), s && jy(), { error: nr[401], status: 401 };
  if (t.status === 403)
    return localStorage.removeItem(xs.TURNSTILE_TOKEN), localStorage.removeItem(Wr), s && window.location.reload(), { error: nr[403], status: 403 };
  if (!t.ok) {
    let n = nr[t.status] || "Request failed", a = t.status, o = null;
    try {
      const r = await t.json();
      r.message && (o = r.message), r.error && (n = r.error), r.code && (a = r.code, !r.error && typeof r.code == "string" && (n = r.code));
    } catch {
    }
    return { error: n, code: a, status: t.status, message: o };
  }
  try {
    const n = await t.json();
    return n && n.turnstile_verified && (localStorage.setItem(Wr, n.turnstile_verified), localStorage.removeItem(xs.TURNSTILE_TOKEN)), { data: n, status: t.status };
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
}, ha = async (t, e, s, i = {}) => {
  const { includeAuth: n = !0, includeTurnstile: a = !0, autoRedirect: o = !0, baseUrl: r = null, timeoutMs: l = null } = i, c = mh(n, a, r, i), u = r || ft()[0];
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
}, ar = async (t, e, s, i = "GET", n = null) => {
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
}, Za = {
  get(t, e = {}) {
    return ha("GET", t, null, e);
  },
  post(t, e = {}, s = {}) {
    return ha("POST", t, e, s);
  },
  put(t, e = {}, s = {}) {
    return ha("PUT", t, e, s);
  },
  delete(t, e = {}) {
    return ha("DELETE", t, null, e);
  },
  async getAll(t, e = {}) {
    const s = ft();
    if (s.length === 0)
      return [{ ...await this.get(t, e), baseUrl: ft()[0] }];
    const i = s.map(
      (a) => ar(a, t, e, "GET", null)
    );
    return (await Promise.allSettled(i)).map((a, o) => {
      var r;
      return a.status === "fulfilled" ? a.value : { error: ((r = a.reason) == null ? void 0 : r.message) || "Request failed", status: 0, baseUrl: s[o] };
    });
  },
  async getAllWithProgress(t, e, s = {}) {
    const i = ft();
    if (i.length === 0) {
      const a = await this.get(t, s);
      e({ ...a, baseUrl: ft()[0] });
      return;
    }
    const n = i.map(
      (a) => ar(a, t, s, "GET", null).then((o) => {
        e({ ...o, baseUrl: a });
      }).catch((o) => {
        const r = /failed to fetch|networkerror|cors/i.test(o.message);
        e({ error: o.message, status: 0, baseUrl: a, corsError: r });
      })
    );
    await Promise.allSettled(n);
  },
  async postAll(t, e = {}, s = {}) {
    const i = ft();
    if (i.length === 0)
      return [{ ...await this.post(t, e, s), baseUrl: ft()[0] }];
    const n = i.map(
      (o) => ar(o, t, s, "POST", JSON.stringify(e))
    );
    return (await Promise.allSettled(n)).map((o) => {
      var r;
      return o.status === "fulfilled" ? o.value : { error: ((r = o.reason) == null ? void 0 : r.message) || "Request failed", status: 0, baseUrl: "" };
    });
  },
  getByIndex(t, e = 0, s = {}) {
    const i = ft(), n = i.length > 0 && i[e] !== void 0 ? i[e] : ft()[0];
    return this.get(t, { ...s, baseUrl: n });
  },
  postByIndex(t, e = {}, s = 0, i = {}) {
    const n = ft(), a = n.length > 0 && n[s] !== void 0 ? n[s] : ft()[0];
    return this.post(t, e, { ...i, baseUrl: a });
  }
}, zy = () => !!localStorage.getItem(xs.JWT_TOKEN), Pi = (t, e = null) => {
  const s = Number(t);
  if (Number.isFinite(s) && s > 0)
    return s < 1e10 ? s * 1e3 : s;
  const i = new Date(t).getTime();
  return Number.isFinite(i) && i > 0 ? i : e;
}, Vy = (t) => {
  if (!t) return "-";
  const e = new Date(t), s = (i) => String(i).padStart(2, "0");
  return `${e.getFullYear()}-${s(e.getMonth() + 1)}-${s(e.getDate())} ${s(e.getHours())}:${s(e.getMinutes())}:${s(e.getSeconds())}`;
}, Br = /* @__PURE__ */ re(""), yh = /* @__PURE__ */ re(""), vh = (t) => {
  const e = Number(t);
  return Number.isInteger(e) && e >= 0 && e <= By ? e : 0;
}, qy = (t, e = {}, s = 0, i = []) => {
  const { onUpdate: n, onStatus: a, onMessage: o, onTimeout: r } = e, c = vh(e.timeoutMinutes) * 60 * 1e3, u = e.replay !== !1, d = (t || "all").toLowerCase();
  let f = null, h = !1, y = null, b = xi.RECONNECT_INITIAL_DELAY_MS, m = 0, k = null;
  const x = 12e4;
  let C = !1;
  const P = /* @__PURE__ */ new Set(), R = (B) => {
    const V = ft();
    if (V.length > 0 && V[B])
      try {
        const le = new URL(V[B]);
        return `${le.protocol === "https:" ? "wss:" : "ws:"}//${le.host}`;
      } catch {
        return `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${window.location.host}`;
      }
    return Wy();
  }, W = () => {
    try {
      return localStorage.getItem(xs.JWT_TOKEN) || "";
    } catch {
      return "";
    }
  }, N = (B) => typeof window > "u" || !window.location ? !1 : B.host === window.location.host, M = (B, V) => {
    C = B, typeof a == "function" && a({ connected: B, reason: V || "" });
  }, K = () => {
    P.forEach((B) => clearTimeout(B)), P.clear();
  }, Q = () => {
    k && (clearTimeout(k), k = null);
  }, ie = (B, V = Date.now()) => Pi(B, V), oe = ({ serverId: B, data: V, ts: le }) => {
    if (B && V && typeof n == "function") {
      const Pe = Date.now(), Le = ie(V.sample_timestamp || V.last_updated || V.timestamp || le, Pe);
      n({
        serverId: B,
        data: {
          ...V,
          sample_timestamp: Le,
          last_updated: Pe,
          timestamp: Pe
        }
      });
    }
  }, Ae = (B) => {
    const V = [], le = Array.isArray(B.updates) ? B.updates : [];
    for (const Pe of le) {
      if (!Pe || !Pe.serverId) continue;
      const Le = [], Fe = Array.isArray(Pe.samples) ? Pe.samples : [];
      for (const ke of Fe) {
        if (!ke || typeof ke != "object") continue;
        const Ze = ke.data || ke.payload || ke.metrics;
        Ze && Le.push({
          serverId: Pe.serverId,
          ts: ie(ke.ts || ke.timestamp || Ze.last_updated || B.ts),
          data: Ze
        });
      }
      Le.sort((ke, Ze) => ke.ts - Ze.ts), Le.length > 0 && V.push(Le);
    }
    return V;
  }, qe = (B) => {
    const V = Ae(B);
    if (V.length !== 0)
      for (const le of V) {
        const Pe = le[0].ts;
        for (const Le of le) {
          const Fe = Math.max(0, Math.min(Le.ts - Pe, x)), ke = setTimeout(() => {
            P.delete(ke), oe(Le);
          }, Fe);
          P.add(ke);
        }
      }
  }, ge = () => {
    h = !1;
    let B = null;
    try {
      const V = new URL(`${R(s)}/api/ws`);
      V.searchParams.set("subscribe", d);
      const le = W();
      le && !N(V) && V.searchParams.set("token", le), B = new WebSocket(V.toString()), f = B;
    } catch {
      M(!1, "WebSocket not supported");
      return;
    }
    B.addEventListener("open", () => {
      if (B !== f || h) {
        try {
          B.close();
        } catch {
        }
        return;
      }
      b = xi.RECONNECT_INITIAL_DELAY_MS, m = 0;
      try {
        B.send(JSON.stringify({
          type: "subscribe",
          scope: d,
          ids: Array.isArray(i) ? i : []
        }));
      } catch {
      }
      M(!0, "connected"), Q(), c !== 0 && (k = setTimeout(() => {
        if (B === f) {
          k = null, h = !0, K();
          try {
            B.close(1e3, "connection lifetime exceeded");
          } catch {
          }
          typeof r == "function" && r({ durationMs: c });
        }
      }, c));
    }), B.addEventListener("message", (V) => {
      if (B !== f) return;
      let le = null;
      try {
        le = typeof V.data == "string" ? JSON.parse(V.data) : null;
      } catch {
        return;
      }
      le && (u && le.type === "batchUpdate" && qe(le), typeof o == "function" && o(le));
    }), B.addEventListener("close", (V) => {
      B === f && (f = null, Q(), M(!1, V.reason || "disconnected"), ce());
    }), B.addEventListener("error", () => {
      if (B === f) {
        M(!1, "error");
        try {
          B.close();
        } catch {
        }
      }
    });
  }, ce = () => {
    if (!h && !y) {
      if (m >= xi.MAX_RECONNECT_ATTEMPTS) {
        M(!1, "max reconnect attempts reached");
        return;
      }
      y = setTimeout(() => {
        y = null, m++;
        const B = b;
        b = Math.min(b * 2, xi.RECONNECT_MAX_DELAY_MS), setTimeout(ge, B);
      }, 50);
    }
  };
  return ge(), {
    close() {
      if (h = !0, m = xi.MAX_RECONNECT_ATTEMPTS, K(), Q(), y && (clearTimeout(y), y = null), f) {
        try {
          f.close();
        } catch {
        }
        f = null;
      }
      M(!1, "disconnected");
    },
    reconnect() {
      if (h = !1, m = 0, K(), Q(), y && (clearTimeout(y), y = null), f) {
        try {
          f.close();
        } catch {
        }
        f = null;
      }
      M(!1, "reconnecting"), ge();
    },
    get isConnected() {
      return C;
    }
  };
}, Gy = (t) => {
  const e = (t || "").toUpperCase();
  return e === "TW" ? "cn" : e.toLowerCase();
}, Ky = (t) => {
  if (t = parseFloat(t) || 0, t === 0) return "0 B";
  const e = 1024, s = ["B", "KB", "MB", "GB", "TB"], i = Math.floor(Math.log(t) / Math.log(e)), n = Math.max(0, Math.min(i, s.length - 1));
  return parseFloat((t / Math.pow(e, n)).toFixed(1)) + " " + s[n];
}, $y = (t, e = Date.now()) => {
  const s = Pi((t == null ? void 0 : t.report_timestamp) ?? (t == null ? void 0 : t.last_updated));
  return s && e - s < xi.ONLINE_THRESHOLD_MS;
}, Jy = async (t, e, s = 0) => {
  const i = await Za.getByIndex(`/api/history/all?id=${t}&hours=${e}`, s, { autoRedirect: !1 });
  if (i.error) {
    const n = new Error(i.error);
    throw n.code = i.code, n.status = i.status, n.message = i.message || i.error, n;
  }
  return Array.isArray(i.data) ? i.data : [];
}, Ci = "auto", Fi = "en", xl = Object.freeze([
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
]), Yy = Object.freeze(xl.map((t) => t.code));
Object.freeze(xl.reduce((t, e) => (t[e.code] = e, t), {}));
const or = Object.freeze(Yy.reduce((t, e) => (t[e.toLowerCase()] = e, t), {})), _h = (t, e = Ci) => {
  const s = String(t || "").trim().toLowerCase();
  return s === Ci ? Ci : or[s] ? or[s] : or[String(e || "").trim().toLowerCase()] || Ci;
}, Xy = Object.freeze(["zh", "zh-TW", "en", "ja", "id", "fr", "es"]);
Object.freeze(Xy.reduce((t, e) => (t[e.toLowerCase()] = e, t), {}));
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
}, Qy = Object.freeze({
  en: () => Promise.resolve({ default: Sh }),
  zh: () => Promise.resolve().then(() => OP),
  "zh-TW": () => Promise.resolve().then(() => NP),
  ja: () => Promise.resolve().then(() => FP),
  id: () => Promise.resolve().then(() => BP),
  fr: () => Promise.resolve().then(() => jP),
  es: () => Promise.resolve().then(() => VP)
}), kh = Object.freeze(xl.map((t) => Object.freeze({
  ...t,
  load: Qy[t.code]
}))), Th = xs.LANGUAGE_PREFERENCE;
let Zy = Ci;
const En = /* @__PURE__ */ zn({ [Fi]: Sh }), vu = /* @__PURE__ */ new Set([Fi]), pa = /* @__PURE__ */ new Map(), ev = (t) => {
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
}, tv = () => {
  if (typeof navigator > "u") return Fi;
  const t = Array.isArray(navigator.languages) && navigator.languages.length > 0 ? navigator.languages : [navigator.language];
  for (const e of t) {
    const s = ev(e);
    if (s) return s.code;
  }
  return Fi;
}, sv = (t) => {
  const e = _h(t);
  return e === Ci ? tv() : e;
}, Al = /* @__PURE__ */ re(sv(localStorage.getItem(Th) || Zy)), iv = (t) => {
  if (vu.has(t)) return Promise.resolve(!0);
  if (pa.has(t)) return pa.get(t);
  const e = kh.find((i) => i.code === t);
  if (!e || typeof e.load != "function") return Promise.resolve(!1);
  const s = e.load().then((i) => {
    const n = i == null ? void 0 : i.default;
    return !n || typeof n != "object" ? !1 : (En[t] = n, vu.add(t), !0);
  }).catch((i) => (console.error(`Failed to load language: ${t}`, i), !1)).finally(() => {
    pa.delete(t);
  });
  return pa.set(t, s), s;
}, nv = (t) => {
  var e, s;
  return ((e = En[Al.value]) == null ? void 0 : e[t]) || ((s = En[Fi]) == null ? void 0 : s[t]) || t;
}, av = async (t) => {
  const e = _h(t, "");
  return await iv(e) ? (Al.value = e, localStorage.setItem(Th, e), window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang: e } })), !0) : !1;
}, xh = () => be(() => En[Al.value] || En[Fi]), ov = { class: "footer status-bar" }, rv = ["aria-label", "tabindex"], lv = {
  key: 0,
  class: "version-update-dot",
  "aria-hidden": "true"
}, cv = {
  key: 1,
  class: "version-update-tooltip",
  role: "tooltip"
}, uv = {
  __name: "Footer",
  setup(t) {
    const e = xh(), s = be(() => String(Br.value || "").trim()), i = be(() => String(yh.value || "").trim()), n = be(() => i.value && s.value && i.value !== s.value), a = be(() => n.value ? `${e.value.workersUpdateAvailable || "New version"} V${i.value}` : "");
    return (o, r) => (Je(), Qe("footer", ov, [
      S("span", {
        class: "footer-version",
        "aria-label": a.value || void 0,
        tabindex: n.value ? 0 : void 0
      }, [
        S(
          "span",
          null,
          "V" + F(se(Br)),
          1
          /* TEXT */
        ),
        n.value ? (Je(), Qe("span", lv)) : zt("v-if", !0),
        n.value ? (Je(), Qe(
          "span",
          cv,
          F(a.value),
          1
          /* TEXT */
        )) : zt("v-if", !0)
      ], 8, rv),
      r[0] || (r[0] = S(
        "span",
        null,
        [
          Ce("Powered by "),
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
}, dv = { class: "modal-dialog live-timeout-dialog" }, fv = { class: "warning-box live-timeout-message" }, hv = { class: "modal-footer flex-justify-between" }, _u = "live-connection-timeout-title", Su = "live-connection-timeout-message", pv = {
  __name: "LiveConnectionTimeoutModal",
  props: {
    show: { type: Boolean, default: !1 },
    trans: { type: Object, required: !0 }
  },
  emits: ["close", "continue"],
  setup(t) {
    return (e, s) => t.show ? (Je(), Qe("div", {
      key: 0,
      class: "modal-overlay active",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": _u,
      "aria-describedby": Su
    }, [
      S("div", dv, [
        S("div", { class: "modal-header" }, [
          S("div", {
            id: _u,
            class: "modal-title"
          }, "$ websocket --timeout")
        ]),
        S("div", fv, [
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
        S("div", hv, [
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
}, mv = [
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
new Set(mv.map((t) => t.key));
function Xi(t) {
  return t === !1 || t === "false";
}
const gv = Object.freeze([
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
new Set(gv.map((t) => t.symbol));
const bv = (t) => {
  const e = parseFloat(t.net_rx_monthly) || 0, s = parseFloat(t.net_tx_monthly) || 0, i = t.traffic_calc_type || "total";
  return i === "dl" ? e : i === "ul" ? s : i === "max" ? Math.max(e, s) : e + s;
}, yv = "os-icons/", vv = [
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
], _n = {
  name: "Unknown",
  image: "os-unknown.svg",
  keywords: ["unknown"]
}, _v = (t) => String(t || "").toLowerCase().trim(), Ah = (t) => {
  const e = _v(t);
  if (!e) return _n;
  for (const s of vv)
    if (s.keywords.some((i) => e.includes(i)))
      return s;
  return _n;
}, ku = (t) => {
  const e = Ah(t).image;
  return e ? `${yv}${e}` : "";
}, Sv = (t) => {
  const e = Ah(t);
  if (e !== _n) return e.name;
  const s = String(t || "").trim();
  return s && s.split(/[\s/]/)[0] || _n.name;
};
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function Gn(t) {
  return t + 0.5 | 0;
}
const Ws = (t, e, s) => Math.max(Math.min(t, s), e);
function on(t) {
  return Ws(Gn(t * 2.55), 0, 255);
}
function Vs(t) {
  return Ws(Gn(t * 255), 0, 255);
}
function ys(t) {
  return Ws(Gn(t / 2.55) / 100, 0, 1);
}
function Tu(t) {
  return Ws(Gn(t * 100), 0, 100);
}
const Ht = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Hr = [..."0123456789ABCDEF"], kv = (t) => Hr[t & 15], Tv = (t) => Hr[(t & 240) >> 4] + Hr[t & 15], ma = (t) => (t & 240) >> 4 === (t & 15), xv = (t) => ma(t.r) && ma(t.g) && ma(t.b) && ma(t.a);
function Av(t) {
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
const Pv = (t, e) => t < 255 ? e(t) : "";
function Cv(t) {
  var e = xv(t) ? kv : Tv;
  return t ? "#" + e(t.r) + e(t.g) + e(t.b) + Pv(t.a, e) : void 0;
}
const wv = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Ph(t, e, s) {
  const i = e * Math.min(s, 1 - s), n = (a, o = (a + t / 30) % 12) => s - i * Math.max(Math.min(o - 3, 9 - o, 1), -1);
  return [n(0), n(8), n(4)];
}
function Rv(t, e, s) {
  const i = (n, a = (n + t / 60) % 6) => s - s * e * Math.max(Math.min(a, 4 - a, 1), 0);
  return [i(5), i(3), i(1)];
}
function Mv(t, e, s) {
  const i = Ph(t, 1, 0.5);
  let n;
  for (e + s > 1 && (n = 1 / (e + s), e *= n, s *= n), n = 0; n < 3; n++)
    i[n] *= 1 - e - s, i[n] += e;
  return i;
}
function Dv(t, e, s, i, n) {
  return t === n ? (e - s) / i + (e < s ? 6 : 0) : e === n ? (s - t) / i + 2 : (t - e) / i + 4;
}
function Pl(t) {
  const s = t.r / 255, i = t.g / 255, n = t.b / 255, a = Math.max(s, i, n), o = Math.min(s, i, n), r = (a + o) / 2;
  let l, c, u;
  return a !== o && (u = a - o, c = r > 0.5 ? u / (2 - a - o) : u / (a + o), l = Dv(s, i, n, u, a), l = l * 60 + 0.5), [l | 0, c || 0, r];
}
function Cl(t, e, s, i) {
  return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, s, i)).map(Vs);
}
function wl(t, e, s) {
  return Cl(Ph, t, e, s);
}
function Iv(t, e, s) {
  return Cl(Mv, t, e, s);
}
function Ev(t, e, s) {
  return Cl(Rv, t, e, s);
}
function Ch(t) {
  return (t % 360 + 360) % 360;
}
function Ov(t) {
  const e = wv.exec(t);
  let s = 255, i;
  if (!e)
    return;
  e[5] !== i && (s = e[6] ? on(+e[5]) : Vs(+e[5]));
  const n = Ch(+e[2]), a = +e[3] / 100, o = +e[4] / 100;
  return e[1] === "hwb" ? i = Iv(n, a, o) : e[1] === "hsv" ? i = Ev(n, a, o) : i = wl(n, a, o), {
    r: i[0],
    g: i[1],
    b: i[2],
    a: s
  };
}
function Lv(t, e) {
  var s = Pl(t);
  s[0] = Ch(s[0] + e), s = wl(s), t.r = s[0], t.g = s[1], t.b = s[2];
}
function Nv(t) {
  if (!t)
    return;
  const e = Pl(t), s = e[0], i = Tu(e[1]), n = Tu(e[2]);
  return t.a < 255 ? `hsla(${s}, ${i}%, ${n}%, ${ys(t.a)})` : `hsl(${s}, ${i}%, ${n}%)`;
}
const xu = {
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
}, Au = {
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
function Uv() {
  const t = {}, e = Object.keys(Au), s = Object.keys(xu);
  let i, n, a, o, r;
  for (i = 0; i < e.length; i++) {
    for (o = r = e[i], n = 0; n < s.length; n++)
      a = s[n], r = r.replace(a, xu[a]);
    a = parseInt(Au[o], 16), t[r] = [a >> 16 & 255, a >> 8 & 255, a & 255];
  }
  return t;
}
let ga;
function Fv(t) {
  ga || (ga = Uv(), ga.transparent = [0, 0, 0, 0]);
  const e = ga[t.toLowerCase()];
  return e && {
    r: e[0],
    g: e[1],
    b: e[2],
    a: e.length === 4 ? e[3] : 255
  };
}
const Wv = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Bv(t) {
  const e = Wv.exec(t);
  let s = 255, i, n, a;
  if (e) {
    if (e[7] !== i) {
      const o = +e[7];
      s = e[8] ? on(o) : Ws(o * 255, 0, 255);
    }
    return i = +e[1], n = +e[3], a = +e[5], i = 255 & (e[2] ? on(i) : Ws(i, 0, 255)), n = 255 & (e[4] ? on(n) : Ws(n, 0, 255)), a = 255 & (e[6] ? on(a) : Ws(a, 0, 255)), {
      r: i,
      g: n,
      b: a,
      a: s
    };
  }
}
function Hv(t) {
  return t && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${ys(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`);
}
const rr = (t) => t <= 31308e-7 ? t * 12.92 : Math.pow(t, 1 / 2.4) * 1.055 - 0.055, _i = (t) => t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
function jv(t, e, s) {
  const i = _i(ys(t.r)), n = _i(ys(t.g)), a = _i(ys(t.b));
  return {
    r: Vs(rr(i + s * (_i(ys(e.r)) - i))),
    g: Vs(rr(n + s * (_i(ys(e.g)) - n))),
    b: Vs(rr(a + s * (_i(ys(e.b)) - a))),
    a: t.a + s * (e.a - t.a)
  };
}
function ba(t, e, s) {
  if (t) {
    let i = Pl(t);
    i[e] = Math.max(0, Math.min(i[e] + i[e] * s, e === 0 ? 360 : 1)), i = wl(i), t.r = i[0], t.g = i[1], t.b = i[2];
  }
}
function wh(t, e) {
  return t && Object.assign(e || {}, t);
}
function Pu(t) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(t) ? t.length >= 3 && (e = { r: t[0], g: t[1], b: t[2], a: 255 }, t.length > 3 && (e.a = Vs(t[3]))) : (e = wh(t, { r: 0, g: 0, b: 0, a: 1 }), e.a = Vs(e.a)), e;
}
function zv(t) {
  return t.charAt(0) === "r" ? Bv(t) : Ov(t);
}
class On {
  constructor(e) {
    if (e instanceof On)
      return e;
    const s = typeof e;
    let i;
    s === "object" ? i = Pu(e) : s === "string" && (i = Av(e) || Fv(e) || zv(e)), this._rgb = i, this._valid = !!i;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var e = wh(this._rgb);
    return e && (e.a = ys(e.a)), e;
  }
  set rgb(e) {
    this._rgb = Pu(e);
  }
  rgbString() {
    return this._valid ? Hv(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Cv(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Nv(this._rgb) : void 0;
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
    return e && (this._rgb = jv(this._rgb, e._rgb, s)), this;
  }
  clone() {
    return new On(this.rgb);
  }
  alpha(e) {
    return this._rgb.a = Vs(e), this;
  }
  clearer(e) {
    const s = this._rgb;
    return s.a *= 1 - e, this;
  }
  greyscale() {
    const e = this._rgb, s = Gn(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
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
    return ba(this._rgb, 2, e), this;
  }
  darken(e) {
    return ba(this._rgb, 2, -e), this;
  }
  saturate(e) {
    return ba(this._rgb, 1, e), this;
  }
  desaturate(e) {
    return ba(this._rgb, 1, -e), this;
  }
  rotate(e) {
    return Lv(this._rgb, e), this;
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
const Vv = /* @__PURE__ */ (() => {
  let t = 0;
  return () => t++;
})();
function ye(t) {
  return t == null;
}
function Ye(t) {
  if (Array.isArray && Array.isArray(t))
    return !0;
  const e = Object.prototype.toString.call(t);
  return e.slice(0, 7) === "[object" && e.slice(-6) === "Array]";
}
function _e(t) {
  return t !== null && Object.prototype.toString.call(t) === "[object Object]";
}
function it(t) {
  return (typeof t == "number" || t instanceof Number) && isFinite(+t);
}
function Lt(t, e) {
  return it(t) ? t : e;
}
function he(t, e) {
  return typeof t > "u" ? e : t;
}
const qv = (t, e) => typeof t == "string" && t.endsWith("%") ? parseFloat(t) / 100 : +t / e, Rh = (t, e) => typeof t == "string" && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;
function Ve(t, e, s) {
  if (t && typeof t.call == "function")
    return t.apply(s, e);
}
function Ee(t, e, s, i) {
  let n, a, o;
  if (Ye(t))
    for (a = t.length, n = 0; n < a; n++)
      e.call(s, t[n], n);
  else if (_e(t))
    for (o = Object.keys(t), a = o.length, n = 0; n < a; n++)
      e.call(s, t[o[n]], o[n]);
}
function eo(t, e) {
  let s, i, n, a;
  if (!t || !e || t.length !== e.length)
    return !1;
  for (s = 0, i = t.length; s < i; ++s)
    if (n = t[s], a = e[s], n.datasetIndex !== a.datasetIndex || n.index !== a.index)
      return !1;
  return !0;
}
function to(t) {
  if (Ye(t))
    return t.map(to);
  if (_e(t)) {
    const e = /* @__PURE__ */ Object.create(null), s = Object.keys(t), i = s.length;
    let n = 0;
    for (; n < i; ++n)
      e[s[n]] = to(t[s[n]]);
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
function Gv(t, e, s, i) {
  if (!Mh(t))
    return;
  const n = e[t], a = s[t];
  _e(n) && _e(a) ? Ln(n, a, i) : e[t] = to(a);
}
function Ln(t, e, s) {
  const i = Ye(e) ? e : [
    e
  ], n = i.length;
  if (!_e(t))
    return t;
  s = s || {};
  const a = s.merger || Gv;
  let o;
  for (let r = 0; r < n; ++r) {
    if (o = i[r], !_e(o))
      continue;
    const l = Object.keys(o);
    for (let c = 0, u = l.length; c < u; ++c)
      a(l[c], t, o, s);
  }
  return t;
}
function Sn(t, e) {
  return Ln(t, e, {
    merger: Kv
  });
}
function Kv(t, e, s) {
  if (!Mh(t))
    return;
  const i = e[t], n = s[t];
  _e(i) && _e(n) ? Sn(i, n) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = to(n));
}
const Cu = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (t) => t,
  // default resolvers
  x: (t) => t.x,
  y: (t) => t.y
};
function $v(t) {
  const e = t.split("."), s = [];
  let i = "";
  for (const n of e)
    i += n, i.endsWith("\\") ? i = i.slice(0, -1) + "." : (s.push(i), i = "");
  return s;
}
function Jv(t) {
  const e = $v(t);
  return (s) => {
    for (const i of e) {
      if (i === "")
        break;
      s = s && s[i];
    }
    return s;
  };
}
function qs(t, e) {
  return (Cu[e] || (Cu[e] = Jv(e)))(t);
}
function Rl(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
const Nn = (t) => typeof t < "u", Gs = (t) => typeof t == "function", wu = (t, e) => {
  if (t.size !== e.size)
    return !1;
  for (const s of t)
    if (!e.has(s))
      return !1;
  return !0;
};
function Yv(t) {
  return t.type === "mouseup" || t.type === "click" || t.type === "contextmenu";
}
const we = Math.PI, Ke = 2 * we, Xv = Ke + we, so = Number.POSITIVE_INFINITY, Qv = we / 180, at = we / 2, Zs = we / 4, Ru = we * 2 / 3, Bs = Math.log10, ls = Math.sign;
function kn(t, e, s) {
  return Math.abs(t - e) < s;
}
function Mu(t) {
  const e = Math.round(t);
  t = kn(t, e, t / 1e3) ? e : t;
  const s = Math.pow(10, Math.floor(Bs(t))), i = t / s;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * s;
}
function Zv(t) {
  const e = [], s = Math.sqrt(t);
  let i;
  for (i = 1; i < s; i++)
    t % i === 0 && (e.push(i), e.push(t / i));
  return s === (s | 0) && e.push(s), e.sort((n, a) => n - a).pop(), e;
}
function e_(t) {
  return typeof t == "symbol" || typeof t == "object" && t !== null && !(Symbol.toPrimitive in t || "toString" in t || "valueOf" in t);
}
function Wi(t) {
  return !e_(t) && !isNaN(parseFloat(t)) && isFinite(t);
}
function t_(t, e) {
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
function Ml(t) {
  return t * (180 / we);
}
function Du(t) {
  if (!it(t))
    return;
  let e = 1, s = 0;
  for (; Math.round(t * e) / e !== t; )
    e *= 10, s++;
  return s;
}
function Ih(t, e) {
  const s = e.x - t.x, i = e.y - t.y, n = Math.sqrt(s * s + i * i);
  let a = Math.atan2(i, s);
  return a < -0.5 * we && (a += Ke), {
    angle: a,
    distance: n
  };
}
function jr(t, e) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function s_(t, e) {
  return (t - e + Xv) % Ke - we;
}
function mt(t) {
  return (t % Ke + Ke) % Ke;
}
function Un(t, e, s, i) {
  const n = mt(t), a = mt(e), o = mt(s), r = mt(a - n), l = mt(o - n), c = mt(n - a), u = mt(n - o);
  return n === a || n === o || i && a === o || r > l && c < u;
}
function ut(t, e, s) {
  return Math.max(e, Math.min(s, t));
}
function i_(t) {
  return ut(t, -32768, 32767);
}
function Ss(t, e, s, i = 1e-6) {
  return t >= Math.min(e, s) - i && t <= Math.max(e, s) + i;
}
function Dl(t, e, s) {
  s = s || ((o) => t[o] < e);
  let i = t.length - 1, n = 0, a;
  for (; i - n > 1; )
    a = n + i >> 1, s(a) ? n = a : i = a;
  return {
    lo: n,
    hi: i
  };
}
const ks = (t, e, s, i) => Dl(t, s, i ? (n) => {
  const a = t[n][e];
  return a < s || a === s && t[n + 1][e] === s;
} : (n) => t[n][e] < s), n_ = (t, e, s) => Dl(t, s, (i) => t[i][e] >= s);
function a_(t, e, s) {
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
function o_(t, e) {
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
    const i = "_onData" + Rl(s), n = t[s];
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
function Iu(t, e) {
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
const Lh = (function() {
  return typeof window > "u" ? function(t) {
    return t();
  } : window.requestAnimationFrame;
})();
function Nh(t, e) {
  let s = [], i = !1;
  return function(...n) {
    s = n, i || (i = !0, Lh.call(window, () => {
      i = !1, t.apply(e, s);
    }));
  };
}
function r_(t, e) {
  let s;
  return function(...i) {
    return e ? (clearTimeout(s), s = setTimeout(t, e, i)) : t.apply(this, i), e;
  };
}
const Il = (t) => t === "start" ? "left" : t === "end" ? "right" : "center", pt = (t, e, s) => t === "start" ? e : t === "end" ? s : (e + s) / 2, l_ = (t, e, s, i) => t === (i ? "left" : "right") ? s : t === "center" ? (e + s) / 2 : e;
function Uh(t, e, s) {
  const i = e.length;
  let n = 0, a = i;
  if (t._sorted) {
    const { iScale: o, vScale: r, _parsed: l } = t, c = t.dataset && t.dataset.options ? t.dataset.options.spanGaps : null, u = o.axis, { min: d, max: f, minDefined: h, maxDefined: y } = o.getUserBounds();
    if (h) {
      if (n = Math.min(
        // @ts-expect-error Need to type _parsed
        ks(l, u, d).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        s ? i : ks(e, u, o.getPixelForValue(d)).lo
      ), c) {
        const b = l.slice(0, n + 1).reverse().findIndex((m) => !ye(m[r.axis]));
        n -= Math.max(0, b);
      }
      n = ut(n, 0, i - 1);
    }
    if (y) {
      let b = Math.max(
        // @ts-expect-error Need to type _parsed
        ks(l, o.axis, f, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        s ? 0 : ks(e, u, o.getPixelForValue(f), !0).hi + 1
      );
      if (c) {
        const m = l.slice(b - 1).findIndex((k) => !ye(k[r.axis]));
        b += Math.max(0, m);
      }
      a = ut(b, n, i) - n;
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
const ya = (t) => t === 0 || t === 1, Eu = (t, e, s) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * Ke / s)), Ou = (t, e, s) => Math.pow(2, -10 * t) * Math.sin((t - e) * Ke / s) + 1, Tn = {
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
  easeInSine: (t) => -Math.cos(t * at) + 1,
  easeOutSine: (t) => Math.sin(t * at),
  easeInOutSine: (t) => -0.5 * (Math.cos(we * t) - 1),
  easeInExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: (t) => t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
  easeInOutExpo: (t) => ya(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
  easeInCirc: (t) => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
  easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
  easeInOutCirc: (t) => (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
  easeInElastic: (t) => ya(t) ? t : Eu(t, 0.075, 0.3),
  easeOutElastic: (t) => ya(t) ? t : Ou(t, 0.075, 0.3),
  easeInOutElastic(t) {
    return ya(t) ? t : t < 0.5 ? 0.5 * Eu(t * 2, 0.1125, 0.45) : 0.5 + 0.5 * Ou(t * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (t) => 1 - Tn.easeOutBounce(1 - t),
  easeOutBounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  },
  easeInOutBounce: (t) => t < 0.5 ? Tn.easeInBounce(t * 2) * 0.5 : Tn.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
};
function El(t) {
  if (t && typeof t == "object") {
    const e = t.toString();
    return e === "[object CanvasPattern]" || e === "[object CanvasGradient]";
  }
  return !1;
}
function Lu(t) {
  return El(t) ? t : new On(t);
}
function lr(t) {
  return El(t) ? t : new On(t).saturate(0.5).darken(0.1).hexString();
}
const c_ = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], u_ = [
  "color",
  "borderColor",
  "backgroundColor"
];
function d_(t) {
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
      properties: u_
    },
    numbers: {
      type: "number",
      properties: c_
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
function f_(t) {
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
function h_(t, e) {
  e = e || {};
  const s = t + JSON.stringify(e);
  let i = Nu.get(s);
  return i || (i = new Intl.NumberFormat(t, e), Nu.set(s, i)), i;
}
function Kn(t, e, s) {
  return h_(e, s).format(t);
}
const Wh = {
  values(t) {
    return Ye(t) ? t : "" + t;
  },
  numeric(t, e, s) {
    if (t === 0)
      return "0";
    const i = this.chart.options.locale;
    let n, a = t;
    if (s.length > 1) {
      const c = Math.max(Math.abs(s[0].value), Math.abs(s[s.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), a = p_(t, s);
    }
    const o = Bs(Math.abs(a)), r = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0), l = {
      notation: n,
      minimumFractionDigits: r,
      maximumFractionDigits: r
    };
    return Object.assign(l, this.options.ticks.format), Kn(t, i, l);
  },
  logarithmic(t, e, s) {
    if (t === 0)
      return "0";
    const i = s[e].significand || t / Math.pow(10, Math.floor(Bs(t)));
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
function p_(t, e) {
  let s = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
  return Math.abs(s) >= 1 && t !== Math.floor(t) && (s = t - Math.floor(t)), s;
}
var To = {
  formatters: Wh
};
function m_(t) {
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
      callback: To.formatters.values,
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
const hi = /* @__PURE__ */ Object.create(null), zr = /* @__PURE__ */ Object.create(null);
function xn(t, e) {
  if (!e)
    return t;
  const s = e.split(".");
  for (let i = 0, n = s.length; i < n; ++i) {
    const a = s[i];
    t = t[a] || (t[a] = /* @__PURE__ */ Object.create(null));
  }
  return t;
}
function cr(t, e, s) {
  return typeof e == "string" ? Ln(xn(t, e), s) : Ln(xn(t, ""), e);
}
class g_ {
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
    }, this.hover = {}, this.hoverBackgroundColor = (i, n) => lr(n.backgroundColor), this.hoverBorderColor = (i, n) => lr(n.borderColor), this.hoverColor = (i, n) => lr(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(e), this.apply(s);
  }
  set(e, s) {
    return cr(this, e, s);
  }
  get(e) {
    return xn(this, e);
  }
  describe(e, s) {
    return cr(zr, e, s);
  }
  override(e, s) {
    return cr(hi, e, s);
  }
  route(e, s, i, n) {
    const a = xn(this, e), o = xn(this, i), r = "_" + s;
    Object.defineProperties(a, {
      [r]: {
        value: a[s],
        writable: !0
      },
      [s]: {
        enumerable: !0,
        get() {
          const l = this[r], c = o[n];
          return _e(l) ? Object.assign({}, c, l) : he(l, c);
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
var Xe = /* @__PURE__ */ new g_({
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
  d_,
  f_,
  m_
]);
function b_(t) {
  return !t || ye(t.size) || ye(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
}
function io(t, e, s, i, n) {
  let a = e[n];
  return a || (a = e[n] = t.measureText(n).width, s.push(n)), a > i && (i = a), i;
}
function y_(t, e, s, i) {
  i = i || {};
  let n = i.data = i.data || {}, a = i.garbageCollect = i.garbageCollect || [];
  i.font !== e && (n = i.data = {}, a = i.garbageCollect = [], i.font = e), t.save(), t.font = e;
  let o = 0;
  const r = s.length;
  let l, c, u, d, f;
  for (l = 0; l < r; l++)
    if (d = s[l], d != null && !Ye(d))
      o = io(t, n, a, o, d);
    else if (Ye(d))
      for (c = 0, u = d.length; c < u; c++)
        f = d[c], f != null && !Ye(f) && (o = io(t, n, a, o, f));
  t.restore();
  const h = a.length / 2;
  if (h > s.length) {
    for (l = 0; l < h; l++)
      delete n[a[l]];
    a.splice(0, h);
  }
  return o;
}
function ei(t, e, s) {
  const i = t.currentDevicePixelRatio, n = s !== 0 ? Math.max(s / 2, 0.5) : 0;
  return Math.round((e - n) * i) / i + n;
}
function Uu(t, e) {
  !e && !t || (e = e || t.getContext("2d"), e.save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore());
}
function Vr(t, e, s, i) {
  Bh(t, e, s, i, null);
}
function Bh(t, e, s, i, n) {
  let a, o, r, l, c, u, d, f;
  const h = e.pointStyle, y = e.rotation, b = e.radius;
  let m = (y || 0) * Qv;
  if (h && typeof h == "object" && (a = h.toString(), a === "[object HTMLImageElement]" || a === "[object HTMLCanvasElement]")) {
    t.save(), t.translate(s, i), t.rotate(m), t.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height), t.restore();
    return;
  }
  if (!(isNaN(b) || b <= 0)) {
    switch (t.beginPath(), h) {
      // Default includes circle
      default:
        n ? t.ellipse(s, i, n / 2, b, 0, 0, Ke) : t.arc(s, i, b, 0, Ke), t.closePath();
        break;
      case "triangle":
        u = n ? n / 2 : b, t.moveTo(s + Math.sin(m) * u, i - Math.cos(m) * b), m += Ru, t.lineTo(s + Math.sin(m) * u, i - Math.cos(m) * b), m += Ru, t.lineTo(s + Math.sin(m) * u, i - Math.cos(m) * b), t.closePath();
        break;
      case "rectRounded":
        c = b * 0.516, l = b - c, o = Math.cos(m + Zs) * l, d = Math.cos(m + Zs) * (n ? n / 2 - c : l), r = Math.sin(m + Zs) * l, f = Math.sin(m + Zs) * (n ? n / 2 - c : l), t.arc(s - d, i - r, c, m - we, m - at), t.arc(s + f, i - o, c, m - at, m), t.arc(s + d, i + r, c, m, m + at), t.arc(s - f, i + o, c, m + at, m + we), t.closePath();
        break;
      case "rect":
        if (!y) {
          l = Math.SQRT1_2 * b, u = n ? n / 2 : l, t.rect(s - u, i - l, 2 * u, 2 * l);
          break;
        }
        m += Zs;
      /* falls through */
      case "rectRot":
        d = Math.cos(m) * (n ? n / 2 : b), o = Math.cos(m) * b, r = Math.sin(m) * b, f = Math.sin(m) * (n ? n / 2 : b), t.moveTo(s - d, i - r), t.lineTo(s + f, i - o), t.lineTo(s + d, i + r), t.lineTo(s - f, i + o), t.closePath();
        break;
      case "crossRot":
        m += Zs;
      /* falls through */
      case "cross":
        d = Math.cos(m) * (n ? n / 2 : b), o = Math.cos(m) * b, r = Math.sin(m) * b, f = Math.sin(m) * (n ? n / 2 : b), t.moveTo(s - d, i - r), t.lineTo(s + d, i + r), t.moveTo(s + f, i - o), t.lineTo(s - f, i + o);
        break;
      case "star":
        d = Math.cos(m) * (n ? n / 2 : b), o = Math.cos(m) * b, r = Math.sin(m) * b, f = Math.sin(m) * (n ? n / 2 : b), t.moveTo(s - d, i - r), t.lineTo(s + d, i + r), t.moveTo(s + f, i - o), t.lineTo(s - f, i + o), m += Zs, d = Math.cos(m) * (n ? n / 2 : b), o = Math.cos(m) * b, r = Math.sin(m) * b, f = Math.sin(m) * (n ? n / 2 : b), t.moveTo(s - d, i - r), t.lineTo(s + d, i + r), t.moveTo(s + f, i - o), t.lineTo(s - f, i + o);
        break;
      case "line":
        o = n ? n / 2 : Math.cos(m) * b, r = Math.sin(m) * b, t.moveTo(s - o, i - r), t.lineTo(s + o, i + r);
        break;
      case "dash":
        t.moveTo(s, i), t.lineTo(s + Math.cos(m) * (n ? n / 2 : b), i + Math.sin(m) * b);
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
function xo(t, e) {
  t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
}
function Ao(t) {
  t.restore();
}
function v_(t, e, s, i, n) {
  if (!e)
    return t.lineTo(s.x, s.y);
  if (n === "middle") {
    const a = (e.x + s.x) / 2;
    t.lineTo(a, e.y), t.lineTo(a, s.y);
  } else n === "after" != !!i ? t.lineTo(e.x, s.y) : t.lineTo(s.x, e.y);
  t.lineTo(s.x, s.y);
}
function __(t, e, s, i) {
  if (!e)
    return t.lineTo(s.x, s.y);
  t.bezierCurveTo(i ? e.cp1x : e.cp2x, i ? e.cp1y : e.cp2y, i ? s.cp2x : s.cp1x, i ? s.cp2y : s.cp1y, s.x, s.y);
}
function S_(t, e) {
  e.translation && t.translate(e.translation[0], e.translation[1]), ye(e.rotation) || t.rotate(e.rotation), e.color && (t.fillStyle = e.color), e.textAlign && (t.textAlign = e.textAlign), e.textBaseline && (t.textBaseline = e.textBaseline);
}
function k_(t, e, s, i, n) {
  if (n.strikethrough || n.underline) {
    const a = t.measureText(i), o = e - a.actualBoundingBoxLeft, r = e + a.actualBoundingBoxRight, l = s - a.actualBoundingBoxAscent, c = s + a.actualBoundingBoxDescent, u = n.strikethrough ? (l + c) / 2 : c;
    t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = n.decorationWidth || 2, t.moveTo(o, u), t.lineTo(r, u), t.stroke();
  }
}
function T_(t, e) {
  const s = t.fillStyle;
  t.fillStyle = e.color, t.fillRect(e.left, e.top, e.width, e.height), t.fillStyle = s;
}
function pi(t, e, s, i, n, a = {}) {
  const o = Ye(e) ? e : [
    e
  ], r = a.strokeWidth > 0 && a.strokeColor !== "";
  let l, c;
  for (t.save(), t.font = n.string, S_(t, a), l = 0; l < o.length; ++l)
    c = o[l], a.backdrop && T_(t, a.backdrop), r && (a.strokeColor && (t.strokeStyle = a.strokeColor), ye(a.strokeWidth) || (t.lineWidth = a.strokeWidth), t.strokeText(c, s, i, a.maxWidth)), t.fillText(c, s, i, a.maxWidth), k_(t, s, i, c, a), i += Number(n.lineHeight);
  t.restore();
}
function Fn(t, e) {
  const { x: s, y: i, w: n, h: a, radius: o } = e;
  t.arc(s + o.topLeft, i + o.topLeft, o.topLeft, 1.5 * we, we, !0), t.lineTo(s, i + a - o.bottomLeft), t.arc(s + o.bottomLeft, i + a - o.bottomLeft, o.bottomLeft, we, at, !0), t.lineTo(s + n - o.bottomRight, i + a), t.arc(s + n - o.bottomRight, i + a - o.bottomRight, o.bottomRight, at, 0, !0), t.lineTo(s + n, i + o.topRight), t.arc(s + n - o.topRight, i + o.topRight, o.topRight, 0, -at, !0), t.lineTo(s + o.topLeft, i);
}
const x_ = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, A_ = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function P_(t, e) {
  const s = ("" + t).match(x_);
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
const C_ = (t) => +t || 0;
function Ol(t, e) {
  const s = {}, i = _e(e), n = i ? Object.keys(e) : e, a = _e(t) ? i ? (o) => he(t[o], t[e[o]]) : (o) => t[o] : () => t;
  for (const o of n)
    s[o] = C_(a(o));
  return s;
}
function Hh(t) {
  return Ol(t, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function di(t) {
  return Ol(t, [
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
function lt(t, e) {
  t = t || {}, e = e || Xe.font;
  let s = he(t.size, e.size);
  typeof s == "string" && (s = parseInt(s, 10));
  let i = he(t.style, e.style);
  i && !("" + i).match(A_) && (console.warn('Invalid font style specified: "' + i + '"'), i = void 0);
  const n = {
    family: he(t.family, e.family),
    lineHeight: P_(he(t.lineHeight, e.lineHeight), s),
    size: s,
    style: i,
    weight: he(t.weight, e.weight),
    string: ""
  };
  return n.string = b_(n), n;
}
function rn(t, e, s, i) {
  let n, a, o;
  for (n = 0, a = t.length; n < a; ++n)
    if (o = t[n], o !== void 0 && o !== void 0)
      return o;
}
function w_(t, e, s) {
  const { min: i, max: n } = t, a = Rh(e, (n - i) / 2), o = (r, l) => s && r === 0 ? 0 : r + l;
  return {
    min: o(i, -Math.abs(a)),
    max: o(n, a)
  };
}
function Ks(t, e) {
  return Object.assign(Object.create(t), e);
}
function Ll(t, e = [
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
    override: (r) => Ll([
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
      return zh(r, l, () => N_(l, e, t, r));
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
      return Wu(r).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(r) {
      return Wu(r);
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
      return zh(a, o, () => M_(a, o, r));
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
    isScriptable: Gs(s) ? s : () => s,
    isIndexable: Gs(i) ? i : () => i
  };
}
const R_ = (t, e) => t ? t + Rl(e) : e, Nl = (t, e) => _e(e) && t !== "adapters" && (Object.getPrototypeOf(e) === null || e.constructor === Object);
function zh(t, e, s) {
  if (Object.prototype.hasOwnProperty.call(t, e) || e === "constructor")
    return t[e];
  const i = s();
  return t[e] = i, i;
}
function M_(t, e, s) {
  const { _proxy: i, _context: n, _subProxy: a, _descriptors: o } = t;
  let r = i[e];
  return Gs(r) && o.isScriptable(e) && (r = D_(e, r, t, s)), Ye(r) && r.length && (r = I_(e, r, t, o.isIndexable)), Nl(e, r) && (r = Bi(r, n, a && a[e], o)), r;
}
function D_(t, e, s, i) {
  const { _proxy: n, _context: a, _subProxy: o, _stack: r } = s;
  if (r.has(t))
    throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + t);
  r.add(t);
  let l = e(a, o || i);
  return r.delete(t), Nl(t, l) && (l = Ul(n._scopes, n, t, l)), l;
}
function I_(t, e, s, i) {
  const { _proxy: n, _context: a, _subProxy: o, _descriptors: r } = s;
  if (typeof a.index < "u" && i(t))
    return e[a.index % e.length];
  if (_e(e[0])) {
    const l = e, c = n._scopes.filter((u) => u !== l);
    e = [];
    for (const u of l) {
      const d = Ul(c, n, t, u);
      e.push(Bi(d, a, o && o[t], r));
    }
  }
  return e;
}
function Vh(t, e, s) {
  return Gs(t) ? t(e, s) : t;
}
const E_ = (t, e) => t === !0 ? e : typeof t == "string" ? qs(e, t) : void 0;
function O_(t, e, s, i, n) {
  for (const a of e) {
    const o = E_(s, a);
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
function Ul(t, e, s, i) {
  const n = e._rootScopes, a = Vh(e._fallback, s, i), o = [
    ...t,
    ...n
  ], r = /* @__PURE__ */ new Set();
  r.add(i);
  let l = Fu(r, o, s, a || s, i);
  return l === null || typeof a < "u" && a !== s && (l = Fu(r, o, a, l, i), l === null) ? !1 : Ll(Array.from(r), [
    ""
  ], n, a, () => L_(e, s, i));
}
function Fu(t, e, s, i, n) {
  for (; s; )
    s = O_(t, e, s, i, n);
  return s;
}
function L_(t, e, s) {
  const i = t._getTarget();
  e in i || (i[e] = {});
  const n = i[e];
  return Ye(n) && _e(s) ? s : n || {};
}
function N_(t, e, s, i) {
  let n;
  for (const a of e)
    if (n = qh(R_(a, t), s), typeof n < "u")
      return Nl(t, n) ? Ul(s, i, t, n) : n;
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
function Wu(t) {
  let e = t._keys;
  return e || (e = t._keys = U_(t._scopes)), e;
}
function U_(t) {
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
      r: n.parse(qs(u, a), c)
    };
  return o;
}
const F_ = Number.EPSILON || 1e-14, Hi = (t, e) => e < t.length && !t[e].skip && t[e], Kh = (t) => t === "x" ? "y" : "x";
function W_(t, e, s, i) {
  const n = t.skip ? e : t, a = e, o = s.skip ? e : s, r = jr(a, n), l = jr(o, a);
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
function B_(t, e, s) {
  const i = t.length;
  let n, a, o, r, l, c = Hi(t, 0);
  for (let u = 0; u < i - 1; ++u)
    if (l = c, c = Hi(t, u + 1), !(!l || !c)) {
      if (kn(e[u], 0, F_)) {
        s[u] = s[u + 1] = 0;
        continue;
      }
      n = s[u] / e[u], a = s[u + 1] / e[u], r = Math.pow(n, 2) + Math.pow(a, 2), !(r <= 9) && (o = 3 / Math.sqrt(r), s[u] = n * o * e[u], s[u + 1] = a * o * e[u]);
    }
}
function H_(t, e, s = "x") {
  const i = Kh(s), n = t.length;
  let a, o, r, l = Hi(t, 0);
  for (let c = 0; c < n; ++c) {
    if (o = r, r = l, l = Hi(t, c + 1), !r)
      continue;
    const u = r[s], d = r[i];
    o && (a = (u - o[s]) / 3, r[`cp1${s}`] = u - a, r[`cp1${i}`] = d - a * e[c]), l && (a = (l[s] - u) / 3, r[`cp2${s}`] = u + a, r[`cp2${i}`] = d + a * e[c]);
  }
}
function j_(t, e = "x") {
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
  B_(t, n, a), H_(t, a, e);
}
function va(t, e, s) {
  return Math.max(Math.min(t, s), e);
}
function z_(t, e) {
  let s, i, n, a, o, r = Ts(t[0], e);
  for (s = 0, i = t.length; s < i; ++s)
    o = a, a = r, r = s < i - 1 && Ts(t[s + 1], e), a && (n = t[s], o && (n.cp1x = va(n.cp1x, e.left, e.right), n.cp1y = va(n.cp1y, e.top, e.bottom)), r && (n.cp2x = va(n.cp2x, e.left, e.right), n.cp2y = va(n.cp2y, e.top, e.bottom)));
}
function V_(t, e, s, i, n) {
  let a, o, r, l;
  if (e.spanGaps && (t = t.filter((c) => !c.skip)), e.cubicInterpolationMode === "monotone")
    j_(t, n);
  else {
    let c = i ? t[t.length - 1] : t[0];
    for (a = 0, o = t.length; a < o; ++a)
      r = t[a], l = W_(c, r, t[Math.min(a + 1, o - (i ? 0 : 1)) % o], e.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, c = r;
  }
  e.capBezierPoints && z_(t, s);
}
function Fl() {
  return typeof window < "u" && typeof document < "u";
}
function Wl(t) {
  let e = t.parentNode;
  return e && e.toString() === "[object ShadowRoot]" && (e = e.host), e;
}
function no(t, e, s) {
  let i;
  return typeof t == "string" ? (i = parseInt(t, 10), t.indexOf("%") !== -1 && (i = i / 100 * e.parentNode[s])) : i = t, i;
}
const Po = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
function q_(t, e) {
  return Po(t).getPropertyValue(e);
}
const G_ = [
  "top",
  "right",
  "bottom",
  "left"
];
function fi(t, e, s) {
  const i = {};
  s = s ? "-" + s : "";
  for (let n = 0; n < 4; n++) {
    const a = G_[n];
    i[a] = parseFloat(t[e + "-" + a + s]) || 0;
  }
  return i.width = i.left + i.right, i.height = i.top + i.bottom, i;
}
const K_ = (t, e, s) => (t > 0 || e > 0) && (!s || !s.shadowRoot);
function $_(t, e) {
  const s = t.touches, i = s && s.length ? s[0] : t, { offsetX: n, offsetY: a } = i;
  let o = !1, r, l;
  if (K_(n, a, t.target))
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
function ni(t, e) {
  if ("native" in t)
    return t;
  const { canvas: s, currentDevicePixelRatio: i } = e, n = Po(s), a = n.boxSizing === "border-box", o = fi(n, "padding"), r = fi(n, "border", "width"), { x: l, y: c, box: u } = $_(t, s), d = o.left + (u && r.left), f = o.top + (u && r.top);
  let { width: h, height: y } = e;
  return a && (h -= o.width + r.width, y -= o.height + r.height), {
    x: Math.round((l - d) / h * s.width / i),
    y: Math.round((c - f) / y * s.height / i)
  };
}
function J_(t, e, s) {
  let i, n;
  if (e === void 0 || s === void 0) {
    const a = t && Wl(t);
    if (!a)
      e = t.clientWidth, s = t.clientHeight;
    else {
      const o = a.getBoundingClientRect(), r = Po(a), l = fi(r, "border", "width"), c = fi(r, "padding");
      e = o.width - c.width - l.width, s = o.height - c.height - l.height, i = no(r.maxWidth, a, "clientWidth"), n = no(r.maxHeight, a, "clientHeight");
    }
  }
  return {
    width: e,
    height: s,
    maxWidth: i || so,
    maxHeight: n || so
  };
}
const Hs = (t) => Math.round(t * 10) / 10;
function Y_(t, e, s, i) {
  const n = Po(t), a = fi(n, "margin"), o = no(n.maxWidth, t, "clientWidth") || so, r = no(n.maxHeight, t, "clientHeight") || so, l = J_(t, e, s);
  let { width: c, height: u } = l;
  if (n.boxSizing === "content-box") {
    const f = fi(n, "border", "width"), h = fi(n, "padding");
    c -= h.width + f.width, u -= h.height + f.height;
  }
  return c = Math.max(0, c - a.width), u = Math.max(0, i ? c / i : u - a.height), c = Hs(Math.min(c, o, l.maxWidth)), u = Hs(Math.min(u, r, l.maxHeight)), c && !u && (u = Hs(c / 2)), (e !== void 0 || s !== void 0) && i && l.height && u > l.height && (u = l.height, c = Hs(Math.floor(u * i))), {
    width: c,
    height: u
  };
}
function Bu(t, e, s) {
  const i = e || 1, n = Hs(t.height * i), a = Hs(t.width * i);
  t.height = Hs(t.height), t.width = Hs(t.width);
  const o = t.canvas;
  return o.style && (s || !o.style.height && !o.style.width) && (o.style.height = `${t.height}px`, o.style.width = `${t.width}px`), t.currentDevicePixelRatio !== i || o.height !== n || o.width !== a ? (t.currentDevicePixelRatio = i, o.height = n, o.width = a, t.ctx.setTransform(i, 0, 0, i, 0, 0), !0) : !1;
}
const X_ = (function() {
  let t = !1;
  try {
    const e = {
      get passive() {
        return t = !0, !1;
      }
    };
    Fl() && (window.addEventListener("test", null, e), window.removeEventListener("test", null, e));
  } catch {
  }
  return t;
})();
function Hu(t, e) {
  const s = q_(t, e), i = s && s.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function ai(t, e, s, i) {
  return {
    x: t.x + s * (e.x - t.x),
    y: t.y + s * (e.y - t.y)
  };
}
function Q_(t, e, s, i) {
  return {
    x: t.x + s * (e.x - t.x),
    y: i === "middle" ? s < 0.5 ? t.y : e.y : i === "after" ? s < 1 ? t.y : e.y : s > 0 ? e.y : t.y
  };
}
function Z_(t, e, s, i) {
  const n = {
    x: t.cp2x,
    y: t.cp2y
  }, a = {
    x: e.cp1x,
    y: e.cp1y
  }, o = ai(t, n, s), r = ai(n, a, s), l = ai(a, e, s), c = ai(o, r, s), u = ai(r, l, s);
  return ai(c, u, s);
}
const eS = function(t, e) {
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
}, tS = function() {
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
  return t ? eS(e, s) : tS();
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
    between: Un,
    compare: s_,
    normalize: mt
  } : {
    between: Ss,
    compare: (e, s) => e - s,
    normalize: (e) => e
  };
}
function ju({ start: t, end: e, count: s, loop: i, style: n }) {
  return {
    start: t % s,
    end: e % s,
    loop: i && (e - t + 1) % s === 0,
    style: n
  };
}
function sS(t, e, s) {
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
  const { property: i, start: n, end: a } = s, o = e.length, { compare: r, between: l, normalize: c } = Yh(i), { start: u, end: d, loop: f, style: h } = sS(t, e, s), y = [];
  let b = !1, m = null, k, x, C;
  const P = () => l(n, C, k) && r(n, C) !== 0, R = () => r(a, k) === 0 || l(a, C, k), W = () => b || P(), N = () => !b || R();
  for (let M = u, K = u; M <= d; ++M)
    x = e[M % o], !x.skip && (k = c(x[i]), k !== C && (b = l(k, n, a), m === null && W() && (m = r(k, n) === 0 ? M : K), m !== null && N() && (y.push(ju({
      start: m,
      end: M,
      loop: f,
      count: o,
      style: h
    })), m = null), K = M, C = k));
  return m !== null && y.push(ju({
    start: m,
    end: d,
    loop: f,
    count: o,
    style: h
  })), y;
}
function Qh(t, e) {
  const s = [], i = t.segments;
  for (let n = 0; n < i.length; n++) {
    const a = Xh(i[n], t.points, e);
    a.length && s.push(...a);
  }
  return s;
}
function iS(t, e, s, i) {
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
function nS(t, e, s, i) {
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
function aS(t, e) {
  const s = t.points, i = t.options.spanGaps, n = s.length;
  if (!n)
    return [];
  const a = !!t._loop, { start: o, end: r } = iS(s, n, a, i);
  if (i === !0)
    return zu(t, [
      {
        start: o,
        end: r,
        loop: a
      }
    ], s, e);
  const l = r < o ? r + n : r, c = !!t._fullLoop && o === 0 && r === n - 1;
  return zu(t, nS(s, o, l, c), s, e);
}
function zu(t, e, s, i) {
  return !i || !i.setContext || !s ? e : oS(t, e, s, i);
}
function oS(t, e, s, i) {
  const n = t._chart.getContext(), a = Vu(t.options), { _datasetIndex: o, options: { spanGaps: r } } = t, l = s.length, c = [];
  let u = a, d = e[0].start, f = d;
  function h(y, b, m, k) {
    const x = r ? -1 : 1;
    if (y !== b) {
      for (y += l; s[y % l].skip; )
        y -= x;
      for (; s[b % l].skip; )
        b += x;
      y % l !== b % l && (c.push({
        start: y % l,
        end: b % l,
        loop: m,
        style: k
      }), u = k, d = b % l);
    }
  }
  for (const y of e) {
    d = r ? d : y.start;
    let b = s[d % l], m;
    for (f = d + 1; f <= y.end; f++) {
      const k = s[f % l];
      m = Vu(i.setContext(Ks(n, {
        type: "segment",
        p0: b,
        p1: k,
        p0DataIndex: (f - 1) % l,
        p1DataIndex: f % l,
        datasetIndex: o
      }))), rS(m, u) && h(d, f - 1, y.loop, u), b = k, u = m;
    }
    d < f - 1 && h(d, f - 1, y.loop, u);
  }
  return c;
}
function Vu(t) {
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
function rS(t, e) {
  if (!e)
    return !1;
  const s = [], i = function(n, a) {
    return El(a) ? (s.includes(a) || s.push(a), s.indexOf(a)) : a;
  };
  return JSON.stringify(t, i) !== JSON.stringify(e, i);
}
function _a(t, e, s) {
  return t.options.clip ? t[s] : e[s];
}
function lS(t, e) {
  const { xScale: s, yScale: i } = t;
  return s && i ? {
    left: _a(s, e, "left"),
    right: _a(s, e, "right"),
    top: _a(i, e, "top"),
    bottom: _a(i, e, "bottom")
  } : e;
}
function Zh(t, e) {
  const s = e._clip;
  if (s.disabled)
    return !1;
  const i = lS(e, t.chartArea);
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
class cS {
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
    this._request || (this._running = !0, this._request = Lh.call(window, () => {
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
var ps = /* @__PURE__ */ new cS();
const qu = "transparent", uS = {
  boolean(t, e, s) {
    return s > 0.5 ? e : t;
  },
  color(t, e, s) {
    const i = Lu(t || qu), n = i.valid && Lu(e || qu);
    return n && n.valid ? n.mix(i, s).hexString() : e;
  },
  number(t, e, s) {
    return t + (e - t) * s;
  }
};
class dS {
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
    this._active = !0, this._fn = e.fn || uS[e.type || typeof o], this._easing = Tn[e.easing] || Tn.linear, this._start = Math.floor(Date.now() + (e.delay || 0)), this._duration = this._total = Math.floor(e.duration), this._loop = !!e.loop, this._target = s, this._prop = i, this._from = o, this._to = n, this._promises = void 0;
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
    if (!_e(e))
      return;
    const s = Object.keys(Xe.animation), i = this._properties;
    Object.getOwnPropertyNames(e).forEach((n) => {
      const a = e[n];
      if (!_e(a))
        return;
      const o = {};
      for (const r of s)
        o[r] = a[r];
      (Ye(a.properties) && a.properties || [
        n
      ]).forEach((r) => {
        (r === n || !i.has(r)) && i.set(r, o);
      });
    });
  }
  _animateOptions(e, s) {
    const i = s.options, n = hS(e, i);
    if (!n)
      return [];
    const a = this._createAnimations(n, i);
    return i.$shared && fS(e.options.$animations, i).then(() => {
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
      a[c] = d = new dS(f, e, c, u), n.push(d);
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
function fS(t, e) {
  const s = [], i = Object.keys(e);
  for (let n = 0; n < i.length; n++) {
    const a = t[i[n]];
    a && a.active() && s.push(a.wait());
  }
  return Promise.all(s);
}
function hS(t, e) {
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
function Gu(t, e) {
  const s = t && t.options || {}, i = s.reverse, n = s.min === void 0 ? e : 0, a = s.max === void 0 ? e : 0;
  return {
    start: i ? a : n,
    end: i ? n : a
  };
}
function pS(t, e, s) {
  if (s === !1)
    return !1;
  const i = Gu(t, s), n = Gu(e, s);
  return {
    top: n.end,
    right: i.end,
    bottom: n.start,
    left: i.start
  };
}
function mS(t) {
  let e, s, i, n;
  return _e(t) ? (e = t.top, s = t.right, i = t.bottom, n = t.left) : e = s = i = n = t, {
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
function Ku(t, e, s, i = {}) {
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
    c = t.values[l], it(c) && (a || e === 0 || ls(e) === ls(c)) && (e += c);
  }
  return !u && !i.all ? 0 : e;
}
function gS(t, e) {
  const { iScale: s, vScale: i } = e, n = s.axis === "x" ? "x" : "y", a = i.axis === "x" ? "x" : "y", o = Object.keys(t), r = new Array(o.length);
  let l, c, u;
  for (l = 0, c = o.length; l < c; ++l)
    u = o[l], r[l] = {
      [n]: u,
      [a]: t[u]
    };
  return r;
}
function ur(t, e) {
  const s = t && t.options.stacked;
  return s || s === void 0 && e.stack !== void 0;
}
function bS(t, e, s) {
  return `${t.id}.${e.id}.${s.stack || s.type}`;
}
function yS(t) {
  const { min: e, max: s, minDefined: i, maxDefined: n } = t.getUserBounds();
  return {
    min: i ? e : Number.NEGATIVE_INFINITY,
    max: n ? s : Number.POSITIVE_INFINITY
  };
}
function vS(t, e, s) {
  const i = t[e] || (t[e] = {});
  return i[s] || (i[s] = {});
}
function $u(t, e, s, i) {
  for (const n of e.getMatchingVisibleMetas(i).reverse()) {
    const a = t[n.index];
    if (s && a > 0 || !s && a < 0)
      return n.index;
  }
  return null;
}
function Ju(t, e) {
  const { chart: s, _cachedMeta: i } = t, n = s._stacks || (s._stacks = {}), { iScale: a, vScale: o, index: r } = i, l = a.axis, c = o.axis, u = bS(a, o, i), d = e.length;
  let f;
  for (let h = 0; h < d; ++h) {
    const y = e[h], { [l]: b, [c]: m } = y, k = y._stacks || (y._stacks = {});
    f = k[c] = vS(n, u, b), f[r] = m, f._top = $u(f, o, !0, i.type), f._bottom = $u(f, o, !1, i.type);
    const x = f._visualValues || (f._visualValues = {});
    x[r] = m;
  }
}
function dr(t, e) {
  const s = t.scales;
  return Object.keys(s).filter((i) => s[i].axis === e).shift();
}
function _S(t, e) {
  return Ks(t, {
    active: !1,
    dataset: void 0,
    datasetIndex: e,
    index: e,
    mode: "default",
    type: "dataset"
  });
}
function SS(t, e, s) {
  return Ks(t, {
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
const fr = (t) => t === "reset" || t === "none", Yu = (t, e) => e ? t : Object.assign({}, t), kS = (t, e, s) => t && !e.hidden && e._stacked && {
  keys: tp(s, !0),
  values: null
};
class Gt {
  constructor(e, s) {
    this.chart = e, this._ctx = e.ctx, this.index = s, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const e = this._cachedMeta;
    this.configure(), this.linkScales(), e._stacked = ur(e.vScale, e), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(e) {
    this.index !== e && Qi(this._cachedMeta), this.index = e;
  }
  linkScales() {
    const e = this.chart, s = this._cachedMeta, i = this.getDataset(), n = (d, f, h, y) => d === "x" ? f : d === "r" ? y : h, a = s.xAxisID = he(i.xAxisID, dr(e, "x")), o = s.yAxisID = he(i.yAxisID, dr(e, "y")), r = s.rAxisID = he(i.rAxisID, dr(e, "r")), l = s.indexAxis, c = s.iAxisID = n(l, a, o, r), u = s.vAxisID = n(l, o, a, r);
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
    this._data && Iu(this._data, this), e._stacked && Qi(e);
  }
  _dataCheck() {
    const e = this.getDataset(), s = e.data || (e.data = []), i = this._data;
    if (_e(s)) {
      const n = this._cachedMeta;
      this._data = gS(s, n);
    } else if (i !== s) {
      if (i) {
        Iu(i, this);
        const n = this._cachedMeta;
        Qi(n), n._parsed = [];
      }
      s && Object.isExtensible(s) && o_(s, this), this._syncList = [], this._data = s;
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
    s._stacked = ur(s.vScale, s), s.stack !== i.stack && (n = !0, Qi(s), s.stack = i.stack), this._resyncElements(e), (n || a !== s._stacked) && (Ju(this, s._parsed), s._stacked = ur(s.vScale, s));
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
      Ye(n[e]) ? f = this.parseArrayData(i, n, e, s) : _e(n[e]) ? f = this.parseObjectData(i, n, e, s) : f = this.parsePrimitiveData(i, n, e, s);
      const h = () => d[r] === null || c && d[r] < c[r];
      for (u = 0; u < s; ++u)
        i._parsed[u + e] = d = f[u], l && (h() && (l = !1), c = d);
      i._sorted = l;
    }
    o && Ju(this, f);
  }
  parsePrimitiveData(e, s, i, n) {
    const { iScale: a, vScale: o } = e, r = a.axis, l = o.axis, c = a.getLabels(), u = a === o, d = new Array(n);
    let f, h, y;
    for (f = 0, h = n; f < h; ++f)
      y = f + i, d[f] = {
        [r]: u || a.parse(c[y], y),
        [l]: o.parse(s[y], y)
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
        x: a.parse(qs(h, r), f),
        y: o.parse(qs(h, l), f)
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
    return Ku(r, o, a.index, {
      mode: i
    });
  }
  updateRangeFromParsed(e, s, i, n) {
    const a = i[s.axis];
    let o = a === null ? NaN : a;
    const r = n && i._stacks[s.axis];
    n && r && (n.values = r, o = Ku(n, a, this._cachedMeta.index)), e.min = Math.min(e.min, o), e.max = Math.max(e.max, o);
  }
  getMinMax(e, s) {
    const i = this._cachedMeta, n = i._parsed, a = i._sorted && e === i.iScale, o = n.length, r = this._getOtherScale(e), l = kS(s, i, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: u, max: d } = yS(r);
    let f, h;
    function y() {
      h = n[f];
      const b = h[r.axis];
      return !it(h[e.axis]) || u > b || d < b;
    }
    for (f = 0; f < o && !(!y() && (this.updateRangeFromParsed(c, e, h, l), a)); ++f)
      ;
    if (a) {
      for (f = o - 1; f >= 0; --f)
        if (!y()) {
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
      o = s[n][e.axis], it(o) && i.push(o);
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
    this.update(e || "default"), s._clip = mS(he(this.options.clip, pS(s.xScale, s.yScale, this.getMaxOverflow())));
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
      a = o.$context || (o.$context = SS(this.getContext(), e, o)), a.parsed = this.getParsed(e), a.raw = n.data[e], a.index = a.dataIndex = e;
    } else
      a = this.$context || (this.$context = _S(this.chart.getContext(), this.index)), a.dataset = n, a.index = a.datasetIndex = this.index;
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
      return Yu(r, l);
    const c = this.chart.config, u = c.datasetElementScopeKeys(this._type, e), d = n ? [
      `${e}Hover`,
      "hover",
      e,
      ""
    ] : [
      e,
      ""
    ], f = c.getOptionScopes(this.getDataset(), u), h = Object.keys(Xe.elements[e]), y = () => this.getContext(i, n, s), b = c.resolveNamedOptions(f, h, y, d);
    return b.$shared && (b.$shared = l, a[o] = Object.freeze(Yu(b, l))), b;
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
    return !s || fr(e) || this.chart._animationsDisabled;
  }
  _getSharedOptions(e, s) {
    const i = this.resolveDataElementOptions(e, s), n = this._sharedOptions, a = this.getSharedOptions(i), o = this.includeOptions(s, a) || a !== n;
    return this.updateSharedOptions(a, s, i), {
      sharedOptions: a,
      includeOptions: o
    };
  }
  updateElement(e, s, i, n) {
    fr(n) ? Object.assign(e, i) : this._resolveAnimations(s, n).update(e, i);
  }
  updateSharedOptions(e, s, i) {
    e && !fr(s) && this._resolveAnimations(void 0, s).update(e, i);
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
G(Gt, "defaults", {}), G(Gt, "datasetElementType", null), G(Gt, "dataElementType", null);
function TS(t, e) {
  if (!t._cache.$bar) {
    const s = t.getMatchingVisibleMetas(e);
    let i = [];
    for (let n = 0, a = s.length; n < a; n++)
      i = i.concat(s[n].controller.getAllParsedValues(t));
    t._cache.$bar = Oh(i.sort((n, a) => n - a));
  }
  return t._cache.$bar;
}
function xS(t) {
  const e = t.iScale, s = TS(e, t.type);
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
function AS(t, e, s, i) {
  const n = s.barThickness;
  let a, o;
  return ye(n) ? (a = e.min * s.categoryPercentage, o = s.barPercentage) : (a = n * i, o = 1), {
    chunk: a / i,
    ratio: o,
    start: e.pixels[t] - a / 2
  };
}
function PS(t, e, s, i) {
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
function CS(t, e, s, i) {
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
  return Ye(t) ? CS(t, e, s, i) : e[s.axis] = s.parse(t, i), e;
}
function Xu(t, e, s, i) {
  const n = t.iScale, a = t.vScale, o = n.getLabels(), r = n === a, l = [];
  let c, u, d, f;
  for (c = s, u = s + i; c < u; ++c)
    f = e[c], d = {}, d[n.axis] = r || n.parse(o[c], c), l.push(sp(f, d, a, c));
  return l;
}
function hr(t) {
  return t && t.barStart !== void 0 && t.barEnd !== void 0;
}
function wS(t, e, s) {
  return t !== 0 ? ls(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= s ? 1 : -1);
}
function RS(t) {
  let e, s, i, n, a;
  return t.horizontal ? (e = t.base > t.x, s = "left", i = "right") : (e = t.base < t.y, s = "bottom", i = "top"), e ? (n = "end", a = "start") : (n = "start", a = "end"), {
    start: s,
    end: i,
    reverse: e,
    top: n,
    bottom: a
  };
}
function MS(t, e, s, i) {
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
  const { start: o, end: r, reverse: l, top: c, bottom: u } = RS(t);
  n === "middle" && s && (t.enableBorderRadius = !0, (s._top || 0) === i ? n = c : (s._bottom || 0) === i ? n = u : (a[Qu(u, o, r, l)] = !0, n = c)), a[Qu(n, o, r, l)] = !0, t.borderSkipped = a;
}
function Qu(t, e, s, i) {
  return i ? (t = DS(t, e, s), t = Zu(t, s, e)) : t = Zu(t, e, s), t;
}
function DS(t, e, s) {
  return t === e ? s : t === s ? e : t;
}
function Zu(t, e, s) {
  return t === "start" ? e : t === "end" ? s : t;
}
function IS(t, { inflateAmount: e }, s) {
  t.inflateAmount = e === "auto" ? s === 1 ? 0.33 : 0 : e;
}
class Ea extends Gt {
  parsePrimitiveData(e, s, i, n) {
    return Xu(e, s, i, n);
  }
  parseArrayData(e, s, i, n) {
    return Xu(e, s, i, n);
  }
  parseObjectData(e, s, i, n) {
    const { iScale: a, vScale: o } = e, { xAxisKey: r = "x", yAxisKey: l = "y" } = this._parsing, c = a.axis === "x" ? r : l, u = o.axis === "x" ? r : l, d = [];
    let f, h, y, b;
    for (f = i, h = i + n; f < h; ++f)
      b = s[f], y = {}, y[a.axis] = a.parse(qs(b, c), f), d.push(sp(qs(b, u), y, o, f));
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
    const s = this._cachedMeta, { iScale: i, vScale: n } = s, a = this.getParsed(e), o = a._custom, r = hr(o) ? "[" + o.start + ", " + o.end + "]" : "" + n.getLabelForValue(a[n.axis]);
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
      const y = this.getParsed(h), b = a || ye(y[r.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(h), m = this._calculateBarIndexPixels(h, u), k = (y._stacks || {})[r.axis], x = {
        horizontal: c,
        base: b.base,
        enableBorderRadius: !k || hr(y._custom) || o === k._top || o === k._bottom,
        x: c ? b.head : m.center,
        y: c ? m.center : b.head,
        height: c ? m.size : Math.abs(b.size),
        width: c ? Math.abs(b.size) : m.size
      };
      f && (x.options = d || this.resolveDataElementOptions(h, e[h].active ? "active" : n));
      const C = x.options || e[h].options;
      MS(x, C, k, o), IS(x, C, u.ratio), this.updateElement(e[h], h, x, n);
    }
  }
  _getStacks(e, s) {
    const { iScale: i } = this._cachedMeta, n = i.getMatchingVisibleMetas(this._type).filter((u) => u.controller.options.grouped), a = i.options.stacked, o = [], r = this._cachedMeta.controller.getParsed(s), l = r && r[i.axis], c = (u) => {
      const d = u._parsed.find((h) => h[i.axis] === l), f = d && d[u.vScale.axis];
      if (ye(f) || isNaN(f))
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
      min: r || xS(s),
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
    const { _cachedMeta: { vScale: s, _stacked: i, index: n }, options: { base: a, minBarLength: o } } = this, r = a || 0, l = this.getParsed(e), c = l._custom, u = hr(c);
    let d = l[s.axis], f = 0, h = i ? this.applyStack(s, l, i) : d, y, b;
    h !== d && (f = h - d, h = d), u && (d = c.barStart, h = c.barEnd - c.barStart, d !== 0 && ls(d) !== ls(c.barEnd) && (f = 0), f += d);
    const m = !ye(a) && !u ? a : f;
    let k = s.getPixelForValue(m);
    if (this.chart.getDataVisibility(e) ? y = s.getPixelForValue(f + h) : y = k, b = y - k, Math.abs(b) < o) {
      b = wS(b, s, r) * o, d === r && (k -= b / 2);
      const x = s.getPixelForDecimal(0), C = s.getPixelForDecimal(1), P = Math.min(x, C), R = Math.max(x, C);
      k = Math.max(Math.min(k, R), P), y = k + b, i && !u && (l._stacks[s.axis]._visualValues[n] = s.getValueForPixel(y) - s.getValueForPixel(k));
    }
    if (k === s.getPixelForValue(r)) {
      const x = ls(b) * s.getLineWidthForValue(r) / 2;
      k += x, b -= x;
    }
    return {
      size: b,
      base: k,
      head: y,
      center: y + b / 2
    };
  }
  _calculateBarIndexPixels(e, s) {
    const i = s.scale, n = this.options, a = n.skipNull, o = he(n.maxBarThickness, 1 / 0);
    let r, l;
    const c = this._getAxisCount();
    if (s.grouped) {
      const u = a ? this._getStackCount(e) : s.stackCount, d = n.barThickness === "flex" ? PS(e, s, n, u * c) : AS(e, s, n, u * c), f = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, h = this._getAxis().indexOf(he(f, this.getFirstScaleIdForIndexAxis())), y = this._getStackIndex(this.index, this._cachedMeta.stack, a ? e : void 0) + h;
      r = d.start + d.chunk * y + d.chunk / 2, l = Math.min(o, d.chunk * d.ratio);
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
G(Ea, "id", "bar"), G(Ea, "defaults", {
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
}), G(Ea, "overrides", {
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
class Oa extends Gt {
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
      const h = e[f], y = !a && this.getParsed(f), b = {}, m = b[u] = a ? o.getPixelForDecimal(0.5) : o.getPixelForValue(y[u]), k = b[d] = a ? r.getBasePixel() : r.getPixelForValue(y[d]);
      b.skip = isNaN(m) || isNaN(k), c && (b.options = l || this.resolveDataElementOptions(f, h.active ? "active" : n), a && (b.options.radius = 0)), this.updateElement(h, f, b, n);
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
G(Oa, "id", "bubble"), G(Oa, "defaults", {
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
}), G(Oa, "overrides", {
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
function ES(t, e, s) {
  let i = 1, n = 1, a = 0, o = 0;
  if (e < Ke) {
    const r = t, l = r + e, c = Math.cos(r), u = Math.sin(r), d = Math.cos(l), f = Math.sin(l), h = (C, P, R) => Un(C, r, l, !0) ? 1 : Math.max(P, P * s, R, R * s), y = (C, P, R) => Un(C, r, l, !0) ? -1 : Math.min(P, P * s, R, R * s), b = h(0, c, d), m = h(at, u, f), k = y(we, c, d), x = y(we + at, u, f);
    i = (b - k) / 2, n = (m - x) / 2, a = -(b + k) / 2, o = -(m + x) / 2;
  }
  return {
    ratioX: i,
    ratioY: n,
    offsetX: a,
    offsetY: o
  };
}
class ri extends Gt {
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
      if (_e(i[e])) {
        const { key: l = "value" } = this._parsing;
        a = (c) => +qs(i[c], l);
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
    let e = Ke, s = -Ke;
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
    const s = this.chart, { chartArea: i } = s, n = this._cachedMeta, a = n.data, o = this.getMaxBorderWidth() + this.getMaxOffset(a) + this.options.spacing, r = Math.max((Math.min(i.width, i.height) - o) / 2, 0), l = Math.min(qv(this.options.cutout, r), 1), c = this._getRingWeight(this.index), { circumference: u, rotation: d } = this._getRotationExtents(), { ratioX: f, ratioY: h, offsetX: y, offsetY: b } = ES(d, u, l), m = (i.width - o) / f, k = (i.height - o) / h, x = Math.max(Math.min(m, k) / 2, 0), C = Rh(this.options.radius, x), P = Math.max(C * l, 0), R = (C - P) / this._getVisibleDatasetWeightTotal();
    this.offsetX = y * C, this.offsetY = b * C, n.total = this.calculateTotal(), this.outerRadius = C - R * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - R * c, 0), this.updateElements(a, 0, a.length, e);
  }
  _circumference(e, s) {
    const i = this.options, n = this._cachedMeta, a = this._getCircumference();
    return s && i.animation.animateRotate || !this.chart.getDataVisibility(e) || n._parsed[e] === null || n.data[e].hidden ? 0 : this.calculateCircumference(n._parsed[e] * a / Ke);
  }
  updateElements(e, s, i, n) {
    const a = n === "reset", o = this.chart, r = o.chartArea, c = o.options.animation, u = (r.left + r.right) / 2, d = (r.top + r.bottom) / 2, f = a && c.animateScale, h = f ? 0 : this.innerRadius, y = f ? 0 : this.outerRadius, { sharedOptions: b, includeOptions: m } = this._getSharedOptions(s, n);
    let k = this._getRotation(), x;
    for (x = 0; x < s; ++x)
      k += this._circumference(x, a);
    for (x = s; x < s + i; ++x) {
      const C = this._circumference(x, a), P = e[x], R = {
        x: u + this.offsetX,
        y: d + this.offsetY,
        startAngle: k,
        endAngle: k + C,
        circumference: C,
        outerRadius: y,
        innerRadius: h
      };
      m && (R.options = b || this.resolveDataElementOptions(x, P.active ? "active" : n)), k += C, this.updateElement(P, x, R, n);
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
    return s > 0 && !isNaN(e) ? Ke * (Math.abs(e) / s) : 0;
  }
  getLabelAndValue(e) {
    const s = this._cachedMeta, i = this.chart, n = i.data.labels || [], a = Kn(s._parsed[e], i.options.locale);
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
G(ri, "id", "doughnut"), G(ri, "defaults", {
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
}), G(ri, "descriptors", {
  _scriptable: (e) => e !== "spacing",
  _indexable: (e) => e !== "spacing" && !e.startsWith("borderDash") && !e.startsWith("hoverBorderDash")
}), G(ri, "overrides", {
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
class La extends Gt {
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
    const a = n === "reset", { iScale: o, vScale: r, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: u, includeOptions: d } = this._getSharedOptions(s, n), f = o.axis, h = r.axis, { spanGaps: y, segment: b } = this.options, m = Wi(y) ? y : Number.POSITIVE_INFINITY, k = this.chart._animationsDisabled || a || n === "none", x = s + i, C = e.length;
    let P = s > 0 && this.getParsed(s - 1);
    for (let R = 0; R < C; ++R) {
      const W = e[R], N = k ? W : {};
      if (R < s || R >= x) {
        N.skip = !0;
        continue;
      }
      const M = this.getParsed(R), K = ye(M[h]), Q = N[f] = o.getPixelForValue(M[f], R), ie = N[h] = a || K ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, M, l) : M[h], R);
      N.skip = isNaN(Q) || isNaN(ie) || K, N.stop = R > 0 && Math.abs(M[f] - P[f]) > m, b && (N.parsed = M, N.raw = c.data[R]), d && (N.options = u || this.resolveDataElementOptions(R, W.active ? "active" : n)), k || this.updateElement(W, R, N, n), P = M;
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
G(La, "id", "line"), G(La, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), G(La, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
class An extends Gt {
  constructor(e, s) {
    super(e, s), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(e) {
    const s = this._cachedMeta, i = this.chart, n = i.data.labels || [], a = Kn(s._parsed[e].r, i.options.locale);
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
    let h = f, y;
    const b = 360 / this.countVisibleElements();
    for (y = 0; y < s; ++y)
      h += this._computeAngle(y, n, b);
    for (y = s; y < s + i; y++) {
      const m = e[y];
      let k = h, x = h + this._computeAngle(y, n, b), C = o.getDataVisibility(y) ? c.getDistanceFromCenterForValue(this.getParsed(y).r) : 0;
      h = x, a && (l.animateScale && (C = 0), l.animateRotate && (k = x = f));
      const P = {
        x: u,
        y: d,
        innerRadius: 0,
        outerRadius: C,
        startAngle: k,
        endAngle: x,
        options: this.resolveDataElementOptions(y, m.active ? "active" : n)
      };
      this.updateElement(m, y, P, n);
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
G(An, "id", "polarArea"), G(An, "defaults", {
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
}), G(An, "overrides", {
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
class qr extends ri {
}
G(qr, "id", "pie"), G(qr, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
});
class Na extends Gt {
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
G(Na, "id", "radar"), G(Na, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
}), G(Na, "overrides", {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
});
class Ua extends Gt {
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
    const a = n === "reset", { iScale: o, vScale: r, _stacked: l, _dataset: c } = this._cachedMeta, u = this.resolveDataElementOptions(s, n), d = this.getSharedOptions(u), f = this.includeOptions(n, d), h = o.axis, y = r.axis, { spanGaps: b, segment: m } = this.options, k = Wi(b) ? b : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || a || n === "none";
    let C = s > 0 && this.getParsed(s - 1);
    for (let P = s; P < s + i; ++P) {
      const R = e[P], W = this.getParsed(P), N = x ? R : {}, M = ye(W[y]), K = N[h] = o.getPixelForValue(W[h], P), Q = N[y] = a || M ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, W, l) : W[y], P);
      N.skip = isNaN(K) || isNaN(Q) || M, N.stop = P > 0 && Math.abs(W[h] - C[h]) > k, m && (N.parsed = W, N.raw = c.data[P]), f && (N.options = d || this.resolveDataElementOptions(P, R.active ? "active" : n)), x || this.updateElement(R, P, N, n), C = W;
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
G(Ua, "id", "scatter"), G(Ua, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1
}), G(Ua, "overrides", {
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
var OS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BarController: Ea,
  BubbleController: Oa,
  DoughnutController: ri,
  LineController: La,
  PieController: qr,
  PolarAreaController: An,
  RadarController: Na,
  ScatterController: Ua
});
function ti() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Bl {
  constructor(e) {
    G(this, "options");
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
    Object.assign(Bl.prototype, e);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return ti();
  }
  parse() {
    return ti();
  }
  format() {
    return ti();
  }
  add() {
    return ti();
  }
  diff() {
    return ti();
  }
  startOf() {
    return ti();
  }
  endOf() {
    return ti();
  }
}
var LS = {
  _date: Bl
};
function NS(t, e, s, i) {
  const { controller: n, data: a, _sorted: o } = t, r = n._cachedMeta.iScale, l = t.dataset && t.dataset.options ? t.dataset.options.spanGaps : null;
  if (r && e === r.axis && e !== "r" && o && a.length) {
    const c = r._reversePixels ? n_ : ks;
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
        const { vScale: d } = n._cachedMeta, { _parsed: f } = t, h = f.slice(0, u.lo + 1).reverse().findIndex((b) => !ye(b[d.axis]));
        u.lo -= Math.max(0, h);
        const y = f.slice(u.hi).findIndex((b) => !ye(b[d.axis]));
        u.hi += Math.max(0, y);
      }
      return u;
    }
  }
  return {
    lo: 0,
    hi: a.length - 1
  };
}
function Co(t, e, s, i, n) {
  const a = t.getSortedVisibleDatasetMetas(), o = s[e];
  for (let r = 0, l = a.length; r < l; ++r) {
    const { index: c, data: u } = a[r], { lo: d, hi: f } = NS(a[r], e, o, n);
    for (let h = d; h <= f; ++h) {
      const y = u[h];
      y.skip || i(y, c, h);
    }
  }
}
function US(t) {
  const e = t.indexOf("x") !== -1, s = t.indexOf("y") !== -1;
  return function(i, n) {
    const a = e ? Math.abs(i.x - n.x) : 0, o = s ? Math.abs(i.y - n.y) : 0;
    return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2));
  };
}
function pr(t, e, s, i, n) {
  const a = [];
  return !n && !t.isPointInArea(e) || Co(t, s, e, function(r, l, c) {
    !n && !Ts(r, t.chartArea, 0) || r.inRange(e.x, e.y, i) && a.push({
      element: r,
      datasetIndex: l,
      index: c
    });
  }, !0), a;
}
function FS(t, e, s, i) {
  let n = [];
  function a(o, r, l) {
    const { startAngle: c, endAngle: u } = o.getProps([
      "startAngle",
      "endAngle"
    ], i), { angle: d } = Ih(o, {
      x: e.x,
      y: e.y
    });
    Un(d, c, u) && n.push({
      element: o,
      datasetIndex: r,
      index: l
    });
  }
  return Co(t, s, e, a), n;
}
function WS(t, e, s, i, n, a) {
  let o = [];
  const r = US(s);
  let l = Number.POSITIVE_INFINITY;
  function c(u, d, f) {
    const h = u.inRange(e.x, e.y, n);
    if (i && !h)
      return;
    const y = u.getCenterPoint(n);
    if (!(!!a || t.isPointInArea(y)) && !h)
      return;
    const m = r(e, y);
    m < l ? (o = [
      {
        element: u,
        datasetIndex: d,
        index: f
      }
    ], l = m) : m === l && o.push({
      element: u,
      datasetIndex: d,
      index: f
    });
  }
  return Co(t, s, e, c), o;
}
function mr(t, e, s, i, n, a) {
  return !a && !t.isPointInArea(e) ? [] : s === "r" && !i ? FS(t, e, s, n) : WS(t, e, s, i, n, a);
}
function ed(t, e, s, i, n) {
  const a = [], o = s === "x" ? "inXRange" : "inYRange";
  let r = !1;
  return Co(t, s, e, (l, c, u) => {
    l[o] && l[o](e[s], n) && (a.push({
      element: l,
      datasetIndex: c,
      index: u
    }), r = r || l.inRange(e.x, e.y, n));
  }), i && !r ? [] : a;
}
var BS = {
  modes: {
    index(t, e, s, i) {
      const n = ni(e, t), a = s.axis || "x", o = s.includeInvisible || !1, r = s.intersect ? pr(t, n, a, i, o) : mr(t, n, a, !1, i, o), l = [];
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
      const n = ni(e, t), a = s.axis || "xy", o = s.includeInvisible || !1;
      let r = s.intersect ? pr(t, n, a, i, o) : mr(t, n, a, !1, i, o);
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
      const n = ni(e, t), a = s.axis || "xy", o = s.includeInvisible || !1;
      return pr(t, n, a, i, o);
    },
    nearest(t, e, s, i) {
      const n = ni(e, t), a = s.axis || "xy", o = s.includeInvisible || !1;
      return mr(t, n, a, s.intersect, i, o);
    },
    x(t, e, s, i) {
      const n = ni(e, t);
      return ed(t, n, "x", s.intersect, i);
    },
    y(t, e, s, i) {
      const n = ni(e, t);
      return ed(t, n, "y", s.intersect, i);
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
function td(t, e) {
  return t.filter((s) => ip.indexOf(s.pos) === -1 && s.box.axis === e);
}
function en(t, e) {
  return t.sort((s, i) => {
    const n = e ? i : s, a = e ? s : i;
    return n.weight === a.weight ? n.index - a.index : n.weight - a.weight;
  });
}
function HS(t) {
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
function jS(t) {
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
function zS(t, e) {
  const s = jS(t), { vBoxMaxWidth: i, hBoxMaxHeight: n } = e;
  let a, o, r;
  for (a = 0, o = t.length; a < o; ++a) {
    r = t[a];
    const { fullSize: l } = r.box, c = s[r.stack], u = c && r.stackWeight / c.weight;
    r.horizontal ? (r.width = u ? u * i : l && e.availableWidth, r.height = n) : (r.width = i, r.height = u ? u * n : l && e.availableHeight);
  }
  return s;
}
function VS(t) {
  const e = HS(t), s = en(e.filter((c) => c.box.fullSize), !0), i = en(Zi(e, "left"), !0), n = en(Zi(e, "right")), a = en(Zi(e, "top"), !0), o = en(Zi(e, "bottom")), r = td(e, "x"), l = td(e, "y");
  return {
    fullSize: s,
    leftAndTop: i.concat(a),
    rightAndBottom: n.concat(l).concat(o).concat(r),
    chartArea: Zi(e, "chartArea"),
    vertical: i.concat(n).concat(l),
    horizontal: a.concat(o).concat(r)
  };
}
function sd(t, e, s, i) {
  return Math.max(t[s], e[s]) + Math.max(t[i], e[i]);
}
function np(t, e) {
  t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right);
}
function qS(t, e, s, i) {
  const { pos: n, box: a } = s, o = t.maxPadding;
  if (!_e(n)) {
    s.size && (t[n] -= s.size);
    const d = i[s.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, s.horizontal ? a.height : a.width), s.size = d.size / d.count, t[n] += s.size;
  }
  a.getPadding && np(o, a.getPadding());
  const r = Math.max(0, e.outerWidth - sd(o, t, "left", "right")), l = Math.max(0, e.outerHeight - sd(o, t, "top", "bottom")), c = r !== t.w, u = l !== t.h;
  return t.w = r, t.h = l, s.horizontal ? {
    same: c,
    other: u
  } : {
    same: u,
    other: c
  };
}
function GS(t) {
  const e = t.maxPadding;
  function s(i) {
    const n = Math.max(e[i] - t[i], 0);
    return t[i] += n, n;
  }
  t.y += s("top"), t.x += s("left"), s("right"), s("bottom");
}
function KS(t, e) {
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
    r = t[a], l = r.box, l.update(r.width || e.w, r.height || e.h, KS(r.horizontal, e));
    const { same: d, other: f } = qS(e, s, r, i);
    c |= d && n.length, u = u || f, l.fullSize || n.push(r);
  }
  return c && ln(n, e, s, i) || u;
}
function Sa(t, e, s, i, n) {
  t.top = s, t.left = e, t.right = e + i, t.bottom = s + n, t.width = i, t.height = n;
}
function id(t, e, s, i) {
  const n = s.padding;
  let { x: a, y: o } = e;
  for (const r of t) {
    const l = r.box, c = i[r.stack] || {
      placed: 0,
      weight: 1
    }, u = r.stackWeight / c.weight || 1;
    if (r.horizontal) {
      const d = e.w * u, f = c.size || l.height;
      Nn(c.start) && (o = c.start), l.fullSize ? Sa(l, n.left, o, s.outerWidth - n.right - n.left, f) : Sa(l, e.left + c.placed, o, d, f), c.start = o, c.placed += d, o = l.bottom;
    } else {
      const d = e.h * u, f = c.size || l.width;
      Nn(c.start) && (a = c.start), l.fullSize ? Sa(l, a, n.top, f, s.outerHeight - n.bottom - n.top) : Sa(l, a, e.top + c.placed, f, d), c.start = a, c.placed += d, a = l.right;
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
    const n = _t(t.options.layout.padding), a = Math.max(e - n.width, 0), o = Math.max(s - n.height, 0), r = VS(t.boxes), l = r.vertical, c = r.horizontal;
    Ee(t.boxes, (b) => {
      typeof b.beforeLayout == "function" && b.beforeLayout();
    });
    const u = l.reduce((b, m) => m.box.options && m.box.options.display === !1 ? b : b + 1, 0) || 1, d = Object.freeze({
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
    }, n), y = zS(l.concat(c), d);
    ln(r.fullSize, h, d, y), ln(l, h, d, y), ln(c, h, d, y) && ln(l, h, d, y), GS(h), id(r.leftAndTop, h, d, y), h.x += h.w, h.y += h.h, id(r.rightAndBottom, h, d, y), t.chartArea = {
      left: h.left,
      top: h.top,
      right: h.left + h.w,
      bottom: h.top + h.h,
      height: h.h,
      width: h.w
    }, Ee(r.chartArea, (b) => {
      const m = b.box;
      Object.assign(m, t.chartArea), m.update(h.w, h.h, {
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
class $S extends ap {
  acquireContext(e) {
    return e && e.getContext && e.getContext("2d") || null;
  }
  updateConfig(e) {
    e.options.animation = !1;
  }
}
const Fa = "$chartjs", JS = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, nd = (t) => t === null || t === "";
function YS(t, e) {
  const s = t.style, i = t.getAttribute("height"), n = t.getAttribute("width");
  if (t[Fa] = {
    initial: {
      height: i,
      width: n,
      style: {
        display: s.display,
        height: s.height,
        width: s.width
      }
    }
  }, s.display = s.display || "block", s.boxSizing = s.boxSizing || "border-box", nd(n)) {
    const a = Hu(t, "width");
    a !== void 0 && (t.width = a);
  }
  if (nd(i))
    if (t.style.height === "")
      t.height = t.width / (e || 2);
    else {
      const a = Hu(t, "height");
      a !== void 0 && (t.height = a);
    }
  return t;
}
const op = X_ ? {
  passive: !0
} : !1;
function XS(t, e, s) {
  t && t.addEventListener(e, s, op);
}
function QS(t, e, s) {
  t && t.canvas && t.canvas.removeEventListener(e, s, op);
}
function ZS(t, e) {
  const s = JS[t.type] || t.type, { x: i, y: n } = ni(t, e);
  return {
    type: s,
    chart: e,
    native: t,
    x: i !== void 0 ? i : null,
    y: n !== void 0 ? n : null
  };
}
function ao(t, e) {
  for (const s of t)
    if (s === e || s.contains(e))
      return !0;
}
function ek(t, e, s) {
  const i = t.canvas, n = new MutationObserver((a) => {
    let o = !1;
    for (const r of a)
      o = o || ao(r.addedNodes, i), o = o && !ao(r.removedNodes, i);
    o && s();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
function tk(t, e, s) {
  const i = t.canvas, n = new MutationObserver((a) => {
    let o = !1;
    for (const r of a)
      o = o || ao(r.removedNodes, i), o = o && !ao(r.addedNodes, i);
    o && s();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const Wn = /* @__PURE__ */ new Map();
let ad = 0;
function rp() {
  const t = window.devicePixelRatio;
  t !== ad && (ad = t, Wn.forEach((e, s) => {
    s.currentDevicePixelRatio !== t && e();
  }));
}
function sk(t, e) {
  Wn.size || window.addEventListener("resize", rp), Wn.set(t, e);
}
function ik(t) {
  Wn.delete(t), Wn.size || window.removeEventListener("resize", rp);
}
function nk(t, e, s) {
  const i = t.canvas, n = i && Wl(i);
  if (!n)
    return;
  const a = Nh((r, l) => {
    const c = n.clientWidth;
    s(r, l), c < n.clientWidth && s();
  }, window), o = new ResizeObserver((r) => {
    const l = r[0], c = l.contentRect.width, u = l.contentRect.height;
    c === 0 && u === 0 || a(c, u);
  });
  return o.observe(n), sk(t, a), o;
}
function gr(t, e, s) {
  s && s.disconnect(), e === "resize" && ik(t);
}
function ak(t, e, s) {
  const i = t.canvas, n = Nh((a) => {
    t.ctx !== null && s(ZS(a, t));
  }, t);
  return XS(i, e, n), n;
}
class ok extends ap {
  acquireContext(e, s) {
    const i = e && e.getContext && e.getContext("2d");
    return i && i.canvas === e ? (YS(e, s), i) : null;
  }
  releaseContext(e) {
    const s = e.canvas;
    if (!s[Fa])
      return !1;
    const i = s[Fa].initial;
    [
      "height",
      "width"
    ].forEach((a) => {
      const o = i[a];
      ye(o) ? s.removeAttribute(a) : s.setAttribute(a, o);
    });
    const n = i.style || {};
    return Object.keys(n).forEach((a) => {
      s.style[a] = n[a];
    }), s.width = s.width, delete s[Fa], !0;
  }
  addEventListener(e, s, i) {
    this.removeEventListener(e, s);
    const n = e.$proxies || (e.$proxies = {}), o = {
      attach: ek,
      detach: tk,
      resize: nk
    }[s] || ak;
    n[s] = o(e, s, i);
  }
  removeEventListener(e, s) {
    const i = e.$proxies || (e.$proxies = {}), n = i[s];
    if (!n)
      return;
    ({
      attach: gr,
      detach: gr,
      resize: gr
    }[s] || QS)(e, s, n), i[s] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(e, s, i, n) {
    return Y_(e, s, i, n);
  }
  isAttached(e) {
    const s = e && Wl(e);
    return !!(s && s.isConnected);
  }
}
function rk(t) {
  return !Fl() || typeof OffscreenCanvas < "u" && t instanceof OffscreenCanvas ? $S : ok;
}
var Ma;
let Ms = (Ma = class {
  constructor() {
    G(this, "x");
    G(this, "y");
    G(this, "active", !1);
    G(this, "options");
    G(this, "$animations");
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
}, G(Ma, "defaults", {}), G(Ma, "defaultRoutes"), Ma);
function lk(t, e) {
  const s = t.options.ticks, i = ck(t), n = Math.min(s.maxTicksLimit || i, i), a = s.major.enabled ? dk(e) : [], o = a.length, r = a[0], l = a[o - 1], c = [];
  if (o > n)
    return fk(e, c, a, o / n), c;
  const u = uk(a, e, n);
  if (o > 0) {
    let d, f;
    const h = o > 1 ? Math.round((l - r) / (o - 1)) : null;
    for (ka(e, c, u, ye(h) ? 0 : r - h, r), d = 0, f = o - 1; d < f; d++)
      ka(e, c, u, a[d], a[d + 1]);
    return ka(e, c, u, l, ye(h) ? e.length : l + h), c;
  }
  return ka(e, c, u), c;
}
function ck(t) {
  const e = t.options.offset, s = t._tickSize(), i = t._length / s + (e ? 0 : 1), n = t._maxLength / s;
  return Math.floor(Math.min(i, n));
}
function uk(t, e, s) {
  const i = hk(t), n = e.length / s;
  if (!i)
    return Math.max(n, 1);
  const a = Zv(i);
  for (let o = 0, r = a.length - 1; o < r; o++) {
    const l = a[o];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function dk(t) {
  const e = [];
  let s, i;
  for (s = 0, i = t.length; s < i; s++)
    t[s].major && e.push(s);
  return e;
}
function fk(t, e, s, i) {
  let n = 0, a = s[0], o;
  for (i = Math.ceil(i), o = 0; o < t.length; o++)
    o === a && (e.push(t[o]), n++, a = s[n * i]);
}
function ka(t, e, s, i, n) {
  const a = he(i, 0), o = Math.min(he(n, t.length), t.length);
  let r = 0, l, c, u;
  for (s = Math.ceil(s), n && (l = n - i, s = l / Math.floor(l / s)), u = a; u < 0; )
    r++, u = Math.round(a + r * s);
  for (c = Math.max(a, 0); c < o; c++)
    c === u && (e.push(t[c]), r++, u = Math.round(a + r * s));
}
function hk(t) {
  const e = t.length;
  let s, i;
  if (e < 2)
    return !1;
  for (i = t[0], s = 1; s < e; ++s)
    if (t[s] - t[s - 1] !== i)
      return !1;
  return i;
}
const pk = (t) => t === "left" ? "right" : t === "right" ? "left" : t, od = (t, e, s) => e === "top" || e === "left" ? t[e] + s : t[e] - s, rd = (t, e) => Math.min(e || t, t);
function ld(t, e) {
  const s = [], i = t.length / e, n = t.length;
  let a = 0;
  for (; a < n; a += i)
    s.push(t[Math.floor(a)]);
  return s;
}
function mk(t, e, s) {
  const i = t.ticks.length, n = Math.min(e, i - 1), a = t._startPixel, o = t._endPixel, r = 1e-6;
  let l = t.getPixelForTick(n), c;
  if (!(s && (i === 1 ? c = Math.max(l - a, o - l) : e === 0 ? c = (t.getPixelForTick(1) - l) / 2 : c = (l - t.getPixelForTick(n - 1)) / 2, l += n < e ? c : -c, l < a - r || l > o + r)))
    return l;
}
function gk(t, e) {
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
function cd(t, e) {
  if (!t.display)
    return 0;
  const s = lt(t.font, e), i = _t(t.padding);
  return (Ye(t.text) ? t.text.length : 1) * s.lineHeight + i.height;
}
function bk(t, e) {
  return Ks(t, {
    scale: e,
    type: "scale"
  });
}
function yk(t, e, s) {
  return Ks(t, {
    tick: s,
    index: e,
    type: "tick"
  });
}
function vk(t, e, s) {
  let i = Il(t);
  return (s && e !== "right" || !s && e === "right") && (i = pk(i)), i;
}
function _k(t, e, s, i) {
  const { top: n, left: a, bottom: o, right: r, chart: l } = t, { chartArea: c, scales: u } = l;
  let d = 0, f, h, y;
  const b = o - n, m = r - a;
  if (t.isHorizontal()) {
    if (h = pt(i, a, r), _e(s)) {
      const k = Object.keys(s)[0], x = s[k];
      y = u[k].getPixelForValue(x) + b - e;
    } else s === "center" ? y = (c.bottom + c.top) / 2 + b - e : y = od(t, s, e);
    f = r - a;
  } else {
    if (_e(s)) {
      const k = Object.keys(s)[0], x = s[k];
      h = u[k].getPixelForValue(x) - m + e;
    } else s === "center" ? h = (c.left + c.right) / 2 - m + e : h = od(t, s, e);
    y = pt(i, o, n), d = s === "left" ? -at : at;
  }
  return {
    titleX: h,
    titleY: y,
    maxWidth: f,
    rotation: d
  };
}
class gi extends Ms {
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
      minDefined: it(e),
      maxDefined: it(s)
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
    Ve(this.options.beforeUpdate, [
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
    }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = w_(this, a, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = r < this.ticks.length;
    this._convertTicksToLabels(l ? ld(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), o.display && (o.autoSkip || o.source === "auto") && (this.ticks = lk(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let e = this.options.reverse, s, i;
    this.isHorizontal() ? (s = this.left, i = this.right) : (s = this.top, i = this.bottom, e = !e), this._startPixel = s, this._endPixel = i, this._reversePixels = e, this._length = i - s, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    Ve(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    Ve(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    Ve(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(e) {
    this.chart.notifyPlugins(e, this.getContext()), Ve(this.options[e], [
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
    Ve(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(e) {
    const s = this.options.ticks;
    let i, n, a;
    for (i = 0, n = e.length; i < n; i++)
      a = e[i], a.label = Ve(s.callback, [
        a.value,
        i,
        e
      ], this);
  }
  afterTickToLabelConversion() {
    Ve(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    Ve(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const e = this.options, s = e.ticks, i = rd(this.ticks.length, e.ticks.maxTicksLimit), n = s.minRotation || 0, a = s.maxRotation;
    let o = n, r, l, c;
    if (!this._isVisible() || !s.display || n >= a || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const u = this._getLabelSizes(), d = u.widest.width, f = u.highest.height, h = ut(this.chart.width - d, 0, this.maxWidth);
    r = e.offset ? this.maxWidth / i : h / (i - 1), d + 6 > r && (r = h / (i - (e.offset ? 0.5 : 1)), l = this.maxHeight - tn(e.grid) - s.padding - cd(e.title, this.chart.options.font), c = Math.sqrt(d * d + f * f), o = Ml(Math.min(Math.asin(ut((u.highest.height + 6) / r, -1, 1)), Math.asin(ut(l / c, -1, 1)) - Math.asin(ut(f / c, -1, 1)))), o = Math.max(n, Math.min(a, o))), this.labelRotation = o;
  }
  afterCalculateLabelRotation() {
    Ve(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    Ve(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const e = {
      width: 0,
      height: 0
    }, { chart: s, options: { ticks: i, title: n, grid: a } } = this, o = this._isVisible(), r = this.isHorizontal();
    if (o) {
      const l = cd(n, s.options.font);
      if (r ? (e.width = this.maxWidth, e.height = tn(a) + l) : (e.height = this.maxHeight, e.width = tn(a) + l), i.display && this.ticks.length) {
        const { first: c, last: u, widest: d, highest: f } = this._getLabelSizes(), h = i.padding * 2, y = Vt(this.labelRotation), b = Math.cos(y), m = Math.sin(y);
        if (r) {
          const k = i.mirror ? 0 : m * d.width + b * f.height;
          e.height = Math.min(this.maxHeight, e.height + k + h);
        } else {
          const k = i.mirror ? 0 : b * d.width + m * f.height;
          e.width = Math.min(this.maxWidth, e.width + k + h);
        }
        this._calculatePadding(c, u, m, b);
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
    Ve(this.options.afterFit, [
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
      ye(e[s].label) && (e.splice(s, 1), i--, s--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let e = this._labelSizes;
    if (!e) {
      const s = this.options.ticks.sampleSize;
      let i = this.ticks;
      s < i.length && (i = ld(i, s)), this._labelSizes = e = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit);
    }
    return e;
  }
  _computeLabelSizes(e, s, i) {
    const { ctx: n, _longestTextCache: a } = this, o = [], r = [], l = Math.floor(s / rd(s, i));
    let c = 0, u = 0, d, f, h, y, b, m, k, x, C, P, R;
    for (d = 0; d < s; d += l) {
      if (y = e[d].label, b = this._resolveTickFontOptions(d), n.font = m = b.string, k = a[m] = a[m] || {
        data: {},
        gc: []
      }, x = b.lineHeight, C = P = 0, !ye(y) && !Ye(y))
        C = io(n, k.data, k.gc, C, y), P = x;
      else if (Ye(y))
        for (f = 0, h = y.length; f < h; ++f)
          R = y[f], !ye(R) && !Ye(R) && (C = io(n, k.data, k.gc, C, R), P += x);
      o.push(C), r.push(P), c = Math.max(C, c), u = Math.max(P, u);
    }
    gk(a, s);
    const W = o.indexOf(c), N = r.indexOf(u), M = (K) => ({
      width: o[K] || 0,
      height: r[K] || 0
    });
    return {
      first: M(0),
      last: M(s - 1),
      widest: M(W),
      highest: M(N),
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
    return i_(this._alignToPixels ? ei(this.chart, s, 0) : s);
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
      return i.$context || (i.$context = yk(this.getContext(), e, i));
    }
    return this.$context || (this.$context = bk(this.chart.getContext(), this));
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
    const s = this.axis, i = this.chart, n = this.options, { grid: a, position: o, border: r } = n, l = a.offset, c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), f = tn(a), h = [], y = r.setContext(this.getContext()), b = y.display ? y.width : 0, m = b / 2, k = function(ce) {
      return ei(i, ce, b);
    };
    let x, C, P, R, W, N, M, K, Q, ie, oe, Ae;
    if (o === "top")
      x = k(this.bottom), N = this.bottom - f, K = x - m, ie = k(e.top) + m, Ae = e.bottom;
    else if (o === "bottom")
      x = k(this.top), ie = e.top, Ae = k(e.bottom) - m, N = x + m, K = this.top + f;
    else if (o === "left")
      x = k(this.right), W = this.right - f, M = x - m, Q = k(e.left) + m, oe = e.right;
    else if (o === "right")
      x = k(this.left), Q = e.left, oe = k(e.right) - m, W = x + m, M = this.left + f;
    else if (s === "x") {
      if (o === "center")
        x = k((e.top + e.bottom) / 2 + 0.5);
      else if (_e(o)) {
        const ce = Object.keys(o)[0], B = o[ce];
        x = k(this.chart.scales[ce].getPixelForValue(B));
      }
      ie = e.top, Ae = e.bottom, N = x + m, K = N + f;
    } else if (s === "y") {
      if (o === "center")
        x = k((e.left + e.right) / 2);
      else if (_e(o)) {
        const ce = Object.keys(o)[0], B = o[ce];
        x = k(this.chart.scales[ce].getPixelForValue(B));
      }
      W = x - m, M = W - f, Q = e.left, oe = e.right;
    }
    const qe = he(n.ticks.maxTicksLimit, d), ge = Math.max(1, Math.ceil(d / qe));
    for (C = 0; C < d; C += ge) {
      const ce = this.getContext(C), B = a.setContext(ce), V = r.setContext(ce), le = B.lineWidth, Pe = B.color, Le = V.dash || [], Fe = V.dashOffset, ke = B.tickWidth, Ze = B.tickColor, St = B.tickBorderDash || [], He = B.tickBorderDashOffset;
      P = mk(this, C, l), P !== void 0 && (R = ei(i, P, le), c ? W = M = Q = oe = R : N = K = ie = Ae = R, h.push({
        tx1: W,
        ty1: N,
        tx2: M,
        ty2: K,
        x1: Q,
        y1: ie,
        x2: oe,
        y2: Ae,
        width: le,
        color: Pe,
        borderDash: Le,
        borderDashOffset: Fe,
        tickWidth: ke,
        tickColor: Ze,
        tickBorderDash: St,
        tickBorderDashOffset: He
      }));
    }
    return this._ticksLength = d, this._borderValue = x, h;
  }
  _computeLabelItems(e) {
    const s = this.axis, i = this.options, { position: n, ticks: a } = i, o = this.isHorizontal(), r = this.ticks, { align: l, crossAlign: c, padding: u, mirror: d } = a, f = tn(i.grid), h = f + u, y = d ? -u : h, b = -Vt(this.labelRotation), m = [];
    let k, x, C, P, R, W, N, M, K, Q, ie, oe, Ae = "middle";
    if (n === "top")
      W = this.bottom - y, N = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      W = this.top + y, N = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const ge = this._getYAxisLabelAlignment(f);
      N = ge.textAlign, R = ge.x;
    } else if (n === "right") {
      const ge = this._getYAxisLabelAlignment(f);
      N = ge.textAlign, R = ge.x;
    } else if (s === "x") {
      if (n === "center")
        W = (e.top + e.bottom) / 2 + h;
      else if (_e(n)) {
        const ge = Object.keys(n)[0], ce = n[ge];
        W = this.chart.scales[ge].getPixelForValue(ce) + h;
      }
      N = this._getXAxisLabelAlignment();
    } else if (s === "y") {
      if (n === "center")
        R = (e.left + e.right) / 2 - h;
      else if (_e(n)) {
        const ge = Object.keys(n)[0], ce = n[ge];
        R = this.chart.scales[ge].getPixelForValue(ce);
      }
      N = this._getYAxisLabelAlignment(f).textAlign;
    }
    s === "y" && (l === "start" ? Ae = "top" : l === "end" && (Ae = "bottom"));
    const qe = this._getLabelSizes();
    for (k = 0, x = r.length; k < x; ++k) {
      C = r[k], P = C.label;
      const ge = a.setContext(this.getContext(k));
      M = this.getPixelForTick(k) + a.labelOffset, K = this._resolveTickFontOptions(k), Q = K.lineHeight, ie = Ye(P) ? P.length : 1;
      const ce = ie / 2, B = ge.color, V = ge.textStrokeColor, le = ge.textStrokeWidth;
      let Pe = N;
      o ? (R = M, N === "inner" && (k === x - 1 ? Pe = this.options.reverse ? "left" : "right" : k === 0 ? Pe = this.options.reverse ? "right" : "left" : Pe = "center"), n === "top" ? c === "near" || b !== 0 ? oe = -ie * Q + Q / 2 : c === "center" ? oe = -qe.highest.height / 2 - ce * Q + Q : oe = -qe.highest.height + Q / 2 : c === "near" || b !== 0 ? oe = Q / 2 : c === "center" ? oe = qe.highest.height / 2 - ce * Q : oe = qe.highest.height - ie * Q, d && (oe *= -1), b !== 0 && !ge.showLabelBackdrop && (R += Q / 2 * Math.sin(b))) : (W = M, oe = (1 - ie) * Q / 2);
      let Le;
      if (ge.showLabelBackdrop) {
        const Fe = _t(ge.backdropPadding), ke = qe.heights[k], Ze = qe.widths[k];
        let St = oe - Fe.top, He = 0 - Fe.left;
        switch (Ae) {
          case "middle":
            St -= ke / 2;
            break;
          case "bottom":
            St -= ke;
            break;
        }
        switch (N) {
          case "center":
            He -= Ze / 2;
            break;
          case "right":
            He -= Ze;
            break;
          case "inner":
            k === x - 1 ? He -= Ze : k > 0 && (He -= Ze / 2);
            break;
        }
        Le = {
          left: He,
          top: St,
          width: Ze + Fe.width,
          height: ke + Fe.height,
          color: ge.backdropColor
        };
      }
      m.push({
        label: P,
        font: K,
        textOffset: oe,
        options: {
          rotation: b,
          color: B,
          strokeColor: V,
          strokeWidth: le,
          textAlign: Pe,
          textBaseline: Ae,
          translation: [
            R,
            W
          ],
          backdrop: Le
        }
      });
    }
    return m;
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
    this.isHorizontal() ? (c = ei(e, this.left, o) - o / 2, u = ei(e, this.right, r) + r / 2, d = f = l) : (d = ei(e, this.top, o) - o / 2, f = ei(e, this.bottom, r) + r / 2, c = u = l), s.save(), s.lineWidth = a.width, s.strokeStyle = a.color, s.beginPath(), s.moveTo(c, d), s.lineTo(u, f), s.stroke(), s.restore();
  }
  drawLabels(e) {
    if (!this.options.ticks.display)
      return;
    const i = this.ctx, n = this._computeLabelArea();
    n && xo(i, n);
    const a = this.getLabelItems(e);
    for (const o of a) {
      const r = o.options, l = o.font, c = o.label, u = o.textOffset;
      pi(i, c, 0, u, l, r);
    }
    n && Ao(i);
  }
  drawTitle() {
    const { ctx: e, options: { position: s, title: i, reverse: n } } = this;
    if (!i.display)
      return;
    const a = lt(i.font), o = _t(i.padding), r = i.align;
    let l = a.lineHeight / 2;
    s === "bottom" || s === "center" || _e(s) ? (l += o.bottom, Ye(i.text) && (l += a.lineHeight * (i.text.length - 1))) : l += o.top;
    const { titleX: c, titleY: u, maxWidth: d, rotation: f } = _k(this, l, s, r);
    pi(e, i.text, 0, 0, a, {
      color: i.color,
      maxWidth: d,
      rotation: f,
      textAlign: vk(r, s, n),
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
    return !this._isVisible() || this.draw !== gi.prototype.draw ? [
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
    return lt(s.font);
  }
  _maxDigits() {
    const e = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / e;
  }
}
class Ta {
  constructor(e, s, i) {
    this.type = e, this.scope = s, this.override = i, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(e) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, e.prototype);
  }
  register(e) {
    const s = Object.getPrototypeOf(e);
    let i;
    Tk(s) && (i = this.register(s));
    const n = this.items, a = e.id, o = this.scope + "." + a;
    if (!a)
      throw new Error("class does not have id: " + e);
    return a in n || (n[a] = e, Sk(e, o, i), this.override && Xe.override(e.id, e.overrides)), o;
  }
  get(e) {
    return this.items[e];
  }
  unregister(e) {
    const s = this.items, i = e.id, n = this.scope;
    i in s && delete s[i], n && i in Xe[n] && (delete Xe[n][i], this.override && delete hi[i]);
  }
}
function Sk(t, e, s) {
  const i = Ln(/* @__PURE__ */ Object.create(null), [
    s ? Xe.get(s) : {},
    Xe.get(e),
    t.defaults
  ]);
  Xe.set(e, i), t.defaultRoutes && kk(e, t.defaultRoutes), t.descriptors && Xe.describe(e, t.descriptors);
}
function kk(t, e) {
  Object.keys(e).forEach((s) => {
    const i = s.split("."), n = i.pop(), a = [
      t
    ].concat(i).join("."), o = e[s].split("."), r = o.pop(), l = o.join(".");
    Xe.route(a, n, l, r);
  });
}
function Tk(t) {
  return "id" in t && "defaults" in t;
}
class xk {
  constructor() {
    this.controllers = new Ta(Gt, "datasets", !0), this.elements = new Ta(Ms, "elements"), this.plugins = new Ta(Object, "plugins"), this.scales = new Ta(gi, "scales"), this._typedRegistries = [
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
    const n = Rl(e);
    Ve(i["before" + n], [], i), s[e](i), Ve(i["after" + n], [], i);
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
var is = /* @__PURE__ */ new xk();
class Ak {
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
      if (Ve(r, l, o) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    ye(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(e) {
    if (this._cache)
      return this._cache;
    const s = this._cache = this._createDescriptors(e);
    return this._notifyStateChanges(e), s;
  }
  _createDescriptors(e, s) {
    const i = e && e.config, n = he(i.options && i.options.plugins, {}), a = Pk(i);
    return n === !1 && !s ? [] : wk(e, a, n, s);
  }
  _notifyStateChanges(e) {
    const s = this._oldCache || [], i = this._cache, n = (a, o) => a.filter((r) => !o.some((l) => r.plugin.id === l.plugin.id));
    this._notify(n(s, i), e, "stop"), this._notify(n(i, s), e, "start");
  }
}
function Pk(t) {
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
function Ck(t, e) {
  return !e && t === !1 ? null : t === !0 ? {} : t;
}
function wk(t, { plugins: e, localIds: s }, i, n) {
  const a = [], o = t.getContext();
  for (const r of e) {
    const l = r.id, c = Ck(i[l], n);
    c !== null && a.push({
      plugin: r,
      options: Rk(t.config, {
        plugin: r,
        local: s[l]
      }, c, o)
    });
  }
  return a;
}
function Rk(t, { plugin: e, local: s }, i, n) {
  const a = t.pluginScopeKeys(e), o = t.getOptionScopes(i, a);
  return s && e.defaults && o.push(e.defaults), t.createResolver(o, n, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Gr(t, e) {
  const s = Xe.datasets[t] || {};
  return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || s.indexAxis || "x";
}
function Mk(t, e) {
  let s = t;
  return t === "_index_" ? s = e : t === "_value_" && (s = e === "x" ? "y" : "x"), s;
}
function Dk(t, e) {
  return t === e ? "_index_" : "_value_";
}
function ud(t) {
  if (t === "x" || t === "y" || t === "r")
    return t;
}
function Ik(t) {
  if (t === "top" || t === "bottom")
    return "x";
  if (t === "left" || t === "right")
    return "y";
}
function Kr(t, ...e) {
  if (ud(t))
    return t;
  for (const s of e) {
    const i = s.axis || Ik(s.position) || t.length > 1 && ud(t[0].toLowerCase());
    if (i)
      return i;
  }
  throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`);
}
function dd(t, e, s) {
  if (s[e + "AxisID"] === t)
    return {
      axis: e
    };
}
function Ek(t, e) {
  if (e.data && e.data.datasets) {
    const s = e.data.datasets.filter((i) => i.xAxisID === t || i.yAxisID === t);
    if (s.length)
      return dd(t, "x", s[0]) || dd(t, "y", s[0]);
  }
  return {};
}
function Ok(t, e) {
  const s = hi[t.type] || {
    scales: {}
  }, i = e.scales || {}, n = Gr(t.type, e), a = /* @__PURE__ */ Object.create(null);
  return Object.keys(i).forEach((o) => {
    const r = i[o];
    if (!_e(r))
      return console.error(`Invalid scale configuration for scale: ${o}`);
    if (r._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${o}`);
    const l = Kr(o, r, Ek(o, t), Xe.scales[r.type]), c = Dk(l, n), u = s.scales || {};
    a[o] = Sn(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      r,
      u[l],
      u[c]
    ]);
  }), t.data.datasets.forEach((o) => {
    const r = o.type || t.type, l = o.indexAxis || Gr(r, e), u = (hi[r] || {}).scales || {};
    Object.keys(u).forEach((d) => {
      const f = Mk(d, l), h = o[f + "AxisID"] || f;
      a[h] = a[h] || /* @__PURE__ */ Object.create(null), Sn(a[h], [
        {
          axis: f
        },
        i[h],
        u[d]
      ]);
    });
  }), Object.keys(a).forEach((o) => {
    const r = a[o];
    Sn(r, [
      Xe.scales[r.type],
      Xe.scale
    ]);
  }), a;
}
function lp(t) {
  const e = t.options || (t.options = {});
  e.plugins = he(e.plugins, {}), e.scales = Ok(t, e);
}
function cp(t) {
  return t = t || {}, t.datasets = t.datasets || [], t.labels = t.labels || [], t;
}
function Lk(t) {
  return t = t || {}, t.data = cp(t.data), lp(t), t;
}
const fd = /* @__PURE__ */ new Map(), up = /* @__PURE__ */ new Set();
function xa(t, e) {
  let s = fd.get(t);
  return s || (s = e(), fd.set(t, s), up.add(s)), s;
}
const sn = (t, e, s) => {
  const i = qs(e, s);
  i !== void 0 && t.add(i);
};
class Nk {
  constructor(e) {
    this._config = Lk(e), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    return xa(e, () => [
      [
        `datasets.${e}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(e, s) {
    return xa(`${e}.transition.${s}`, () => [
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
    return xa(`${e}-${s}`, () => [
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
    return xa(`${i}-plugin-${s}`, () => [
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
      e && (l.add(e), u.forEach((d) => sn(l, e, d))), u.forEach((d) => sn(l, n, d)), u.forEach((d) => sn(l, hi[a] || {}, d)), u.forEach((d) => sn(l, Xe, d)), u.forEach((d) => sn(l, zr, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), up.has(s) && o.set(s, c), c;
  }
  chartOptionScopes() {
    const { options: e, type: s } = this;
    return [
      e,
      hi[s] || {},
      Xe.datasets[s] || {},
      {
        type: s
      },
      Xe,
      zr
    ];
  }
  resolveNamedOptions(e, s, i, n = [
    ""
  ]) {
    const a = {
      $shared: !0
    }, { resolver: o, subPrefixes: r } = hd(this._resolverCache, e, n);
    let l = o;
    if (Fk(o, s)) {
      a.$shared = !1, i = Gs(i) ? i() : i;
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
    const { resolver: a } = hd(this._resolverCache, e, i);
    return _e(s) ? Bi(a, s, void 0, n) : a;
  }
}
function hd(t, e, s) {
  let i = t.get(e);
  i || (i = /* @__PURE__ */ new Map(), t.set(e, i));
  const n = s.join();
  let a = i.get(n);
  return a || (a = {
    resolver: Ll(e, s),
    subPrefixes: s.filter((r) => !r.toLowerCase().includes("hover"))
  }, i.set(n, a)), a;
}
const Uk = (t) => _e(t) && Object.getOwnPropertyNames(t).some((e) => Gs(t[e]));
function Fk(t, e) {
  const { isScriptable: s, isIndexable: i } = jh(t);
  for (const n of e) {
    const a = s(n), o = i(n), r = (o || a) && t[n];
    if (a && (Gs(r) || Uk(r)) || o && Ye(r))
      return !0;
  }
  return !1;
}
var Wk = "4.5.1";
const Bk = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function pd(t, e) {
  return t === "top" || t === "bottom" || Bk.indexOf(t) === -1 && e === "x";
}
function md(t, e) {
  return function(s, i) {
    return s[t] === i[t] ? s[e] - i[e] : s[t] - i[t];
  };
}
function gd(t) {
  const e = t.chart, s = e.options.animation;
  e.notifyPlugins("afterRender"), Ve(s && s.onComplete, [
    t
  ], e);
}
function Hk(t) {
  const e = t.chart, s = e.options.animation;
  Ve(s && s.onProgress, [
    t
  ], e);
}
function dp(t) {
  return Fl() && typeof t == "string" ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t;
}
const Wa = {}, bd = (t) => {
  const e = dp(t);
  return Object.values(Wa).filter((s) => s.canvas === e).pop();
};
function jk(t, e, s) {
  const i = Object.keys(t);
  for (const n of i) {
    const a = +n;
    if (a >= e) {
      const o = t[n];
      delete t[n], (s > 0 || a > e) && (t[a + s] = o);
    }
  }
}
function zk(t, e, s, i) {
  return !s || t.type === "mouseout" ? null : i ? e : t;
}
class Ue {
  static register(...e) {
    is.add(...e), yd();
  }
  static unregister(...e) {
    is.remove(...e), yd();
  }
  constructor(e, s) {
    const i = this.config = new Nk(s), n = dp(e), a = bd(n);
    if (a)
      throw new Error("Canvas is already in use. Chart with ID '" + a.id + "' must be destroyed before the canvas with ID '" + a.canvas.id + "' can be reused.");
    const o = i.createResolver(i.chartOptionScopes(), this.getContext());
    this.platform = new (i.platform || rk(n))(), this.platform.updateConfig(i);
    const r = this.platform.acquireContext(n, o.aspectRatio), l = r && r.canvas, c = l && l.height, u = l && l.width;
    if (this.id = Vv(), this.ctx = r, this.canvas = l, this.width = u, this.height = c, this._options = o, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Ak(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = r_((d) => this.update(d), o.resizeDelay || 0), this._dataChanges = [], Wa[this.id] = this, !r || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    ps.listen(this, "complete", gd), ps.listen(this, "progress", Hk), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: e, maintainAspectRatio: s }, width: i, height: n, _aspectRatio: a } = this;
    return ye(e) ? s && a ? a : n ? i / n : null : e;
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
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Bu(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Uu(this.canvas, this.ctx), this;
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
    this.width = o.width, this.height = o.height, this._aspectRatio = this.aspectRatio, Bu(this, r, !0) && (this.notifyPlugins("resize", {
      size: o
    }), Ve(i.onResize, [
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
      const r = s[o], l = Kr(o, r), c = l === "r", u = l === "x";
      return {
        options: r,
        dposition: c ? "chartArea" : u ? "bottom" : "left",
        dtype: c ? "radialLinear" : u ? "category" : "linear"
      };
    }))), Ee(a, (o) => {
      const r = o.options, l = r.id, c = Kr(l, r), u = he(r.type, o.dtype);
      (r.position === void 0 || pd(r.position, c) !== pd(o.dposition)) && (r.position = o.dposition), n[l] = !0;
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
    this._sortedMetasets = e.slice(0).sort(md("order", "index"));
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
      if (o.type && o.type !== r && (this._destroyDatasetMeta(i), o = this.getDatasetMeta(i)), o.type = r, o.indexAxis = a.indexAxis || Gr(r, this.options), o.order = a.order || 0, o.index = i, o.label = "" + a.label, o.visible = this.isDatasetVisible(i), o.controller)
        o.controller.updateIndex(i), o.controller.linkScales();
      else {
        const l = is.getController(r), { datasetElementType: c, dataElementType: u } = Xe.datasets[r];
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
    }), this._layers.sort(md("z", "_idx"));
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
    (!wu(s, i) || !!this._responsiveListeners !== e.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: e } = this, s = this._getUniformDataChanges() || [];
    for (const { method: i, start: n, count: a } of s) {
      const o = i === "_removeElements" ? -a : a;
      jk(e, n, o);
    }
  }
  _getUniformDataChanges() {
    const e = this._dataChanges;
    if (!e || !e.length)
      return;
    this._dataChanges = [];
    const s = this.data.datasets.length, i = (a) => new Set(e.filter((o) => o[0] === a).map((o, r) => r + "," + o.splice(1).join(","))), n = i(0);
    for (let a = 1; a < s; a++)
      if (!wu(n, i(a)))
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
        this._updateDataset(s, Gs(e) ? e({
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
    }) !== !1 && (ps.has(this) ? this.attached && !ps.running(this) && ps.start(this) : (this.draw(), gd({
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
    this.notifyPlugins("beforeDatasetDraw", i) !== !1 && (n && xo(s, n), e.controller.draw(), n && Ao(s), i.cancelable = !1, this.notifyPlugins("afterDatasetDraw", i));
  }
  isPointInArea(e) {
    return Ts(e, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(e, s, i, n) {
    const a = BS.modes[s];
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
    return this.$context || (this.$context = Ks(null, {
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
    this._stop(), this.config.clearCache(), e && (this.unbindEvents(), Uu(e, s), this.platform.releaseContext(s), this.canvas = null, this.ctx = null), delete Wa[this.id], this.notifyPlugins("afterDestroy");
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
    !eo(i, s) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, s));
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
    const { _active: n = [], options: a } = this, o = s, r = this._getActiveElements(e, n, i, o), l = Yv(e), c = zk(e, this._lastEvent, i, l);
    i && (this._lastEvent = null, Ve(a.onHover, [
      e,
      r,
      this
    ], this), l && Ve(a.onClick, [
      e,
      r,
      this
    ], this));
    const u = !eo(r, n);
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
G(Ue, "defaults", Xe), G(Ue, "instances", Wa), G(Ue, "overrides", hi), G(Ue, "registry", is), G(Ue, "version", Wk), G(Ue, "getChart", bd);
function yd() {
  return Ee(Ue.instances, (t) => t._plugins.invalidate());
}
function Vk(t, e, s) {
  const { startAngle: i, x: n, y: a, outerRadius: o, innerRadius: r, options: l } = e, { borderWidth: c, borderJoinStyle: u } = l, d = Math.min(c / o, mt(i - s));
  if (t.beginPath(), t.arc(n, a, o - c / 2, i + d / 2, s - d / 2), r > 0) {
    const f = Math.min(c / r, mt(i - s));
    t.arc(n, a, r + c / 2, s - f / 2, i + f / 2, !0);
  } else {
    const f = Math.min(c / 2, o * mt(i - s));
    if (u === "round")
      t.arc(n, a, f, s - we / 2, i + we / 2, !0);
    else if (u === "bevel") {
      const h = 2 * f * f, y = -h * Math.cos(s + we / 2) + n, b = -h * Math.sin(s + we / 2) + a, m = h * Math.cos(i + we / 2) + n, k = h * Math.sin(i + we / 2) + a;
      t.lineTo(y, b), t.lineTo(m, k);
    }
  }
  t.closePath(), t.moveTo(0, 0), t.rect(0, 0, t.canvas.width, t.canvas.height), t.clip("evenodd");
}
function qk(t, e, s) {
  const { startAngle: i, pixelMargin: n, x: a, y: o, outerRadius: r, innerRadius: l } = e;
  let c = n / r;
  t.beginPath(), t.arc(a, o, r, i - c, s + c), l > n ? (c = n / l, t.arc(a, o, l, s + c, i - c, !0)) : t.arc(a, o, n, s + at, i - at), t.closePath(), t.clip();
}
function Gk(t) {
  return Ol(t, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Kk(t, e, s, i) {
  const n = Gk(t.options.borderRadius), a = (s - e) / 2, o = Math.min(a, i * e / 2), r = (l) => {
    const c = (s - Math.min(a, l)) * i / 2;
    return ut(l, 0, Math.min(a, c));
  };
  return {
    outerStart: r(n.outerStart),
    outerEnd: r(n.outerEnd),
    innerStart: ut(n.innerStart, 0, o),
    innerEnd: ut(n.innerEnd, 0, o)
  };
}
function Si(t, e, s, i) {
  return {
    x: s + t * Math.cos(e),
    y: i + t * Math.sin(e)
  };
}
function oo(t, e, s, i, n, a) {
  const { x: o, y: r, startAngle: l, pixelMargin: c, innerRadius: u } = e, d = Math.max(e.outerRadius + i + s - c, 0), f = u > 0 ? u + i + s + c : 0;
  let h = 0;
  const y = n - l;
  if (i) {
    const ge = u > 0 ? u - i : 0, ce = d > 0 ? d - i : 0, B = (ge + ce) / 2, V = B !== 0 ? y * B / (B + i) : y;
    h = (y - V) / 2;
  }
  const b = Math.max(1e-3, y * d - s / we) / d, m = (y - b) / 2, k = l + m + h, x = n - m - h, { outerStart: C, outerEnd: P, innerStart: R, innerEnd: W } = Kk(e, f, d, x - k), N = d - C, M = d - P, K = k + C / N, Q = x - P / M, ie = f + R, oe = f + W, Ae = k + R / ie, qe = x - W / oe;
  if (t.beginPath(), a) {
    const ge = (K + Q) / 2;
    if (t.arc(o, r, d, K, ge), t.arc(o, r, d, ge, Q), P > 0) {
      const le = Si(M, Q, o, r);
      t.arc(le.x, le.y, P, Q, x + at);
    }
    const ce = Si(oe, x, o, r);
    if (t.lineTo(ce.x, ce.y), W > 0) {
      const le = Si(oe, qe, o, r);
      t.arc(le.x, le.y, W, x + at, qe + Math.PI);
    }
    const B = (x - W / f + (k + R / f)) / 2;
    if (t.arc(o, r, f, x - W / f, B, !0), t.arc(o, r, f, B, k + R / f, !0), R > 0) {
      const le = Si(ie, Ae, o, r);
      t.arc(le.x, le.y, R, Ae + Math.PI, k - at);
    }
    const V = Si(N, k, o, r);
    if (t.lineTo(V.x, V.y), C > 0) {
      const le = Si(N, K, o, r);
      t.arc(le.x, le.y, C, k - at, K);
    }
  } else {
    t.moveTo(o, r);
    const ge = Math.cos(K) * d + o, ce = Math.sin(K) * d + r;
    t.lineTo(ge, ce);
    const B = Math.cos(Q) * d + o, V = Math.sin(Q) * d + r;
    t.lineTo(B, V);
  }
  t.closePath();
}
function $k(t, e, s, i, n) {
  const { fullCircles: a, startAngle: o, circumference: r } = e;
  let l = e.endAngle;
  if (a) {
    oo(t, e, s, i, l, n);
    for (let c = 0; c < a; ++c)
      t.fill();
    isNaN(r) || (l = o + (r % Ke || Ke));
  }
  return oo(t, e, s, i, l, n), t.fill(), l;
}
function Jk(t, e, s, i, n) {
  const { fullCircles: a, startAngle: o, circumference: r, options: l } = e, { borderWidth: c, borderJoinStyle: u, borderDash: d, borderDashOffset: f, borderRadius: h } = l, y = l.borderAlign === "inner";
  if (!c)
    return;
  t.setLineDash(d || []), t.lineDashOffset = f, y ? (t.lineWidth = c * 2, t.lineJoin = u || "round") : (t.lineWidth = c, t.lineJoin = u || "bevel");
  let b = e.endAngle;
  if (a) {
    oo(t, e, s, i, b, n);
    for (let m = 0; m < a; ++m)
      t.stroke();
    isNaN(r) || (b = o + (r % Ke || Ke));
  }
  y && qk(t, e, b), l.selfJoin && b - o >= we && h === 0 && u !== "miter" && Vk(t, e, b), a || (oo(t, e, s, i, b, n), t.stroke());
}
class cn extends Ms {
  constructor(s) {
    super();
    G(this, "circumference");
    G(this, "endAngle");
    G(this, "fullCircles");
    G(this, "innerRadius");
    G(this, "outerRadius");
    G(this, "pixelMargin");
    G(this, "startAngle");
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
    ], n), h = (this.options.spacing + this.options.borderWidth) / 2, y = he(f, c - l), b = Un(o, l, c) && l !== c, m = y >= Ke || b, k = Ss(r, u + h, d + h);
    return m && k;
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
    if (this.pixelMargin = i.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = n > Ke ? Math.floor(n / Ke) : 0, n === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    s.save();
    const l = (this.startAngle + this.endAngle) / 2;
    s.translate(Math.cos(l) * a, Math.sin(l) * a);
    const c = 1 - Math.sin(Math.min(we, n || 0)), u = a * c;
    s.fillStyle = i.backgroundColor, s.strokeStyle = i.borderColor, $k(s, this, u, o, r), Jk(s, this, u, o, r), s.restore();
  }
}
G(cn, "id", "arc"), G(cn, "defaults", {
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
}), G(cn, "defaultRoutes", {
  backgroundColor: "backgroundColor"
}), G(cn, "descriptors", {
  _scriptable: !0,
  _indexable: (s) => s !== "borderDash"
});
function fp(t, e, s = e) {
  t.lineCap = he(s.borderCapStyle, e.borderCapStyle), t.setLineDash(he(s.borderDash, e.borderDash)), t.lineDashOffset = he(s.borderDashOffset, e.borderDashOffset), t.lineJoin = he(s.borderJoinStyle, e.borderJoinStyle), t.lineWidth = he(s.borderWidth, e.borderWidth), t.strokeStyle = he(s.borderColor, e.borderColor);
}
function Yk(t, e, s) {
  t.lineTo(s.x, s.y);
}
function Xk(t) {
  return t.stepped ? v_ : t.tension || t.cubicInterpolationMode === "monotone" ? __ : Yk;
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
function Qk(t, e, s, i) {
  const { points: n, options: a } = e, { count: o, start: r, loop: l, ilen: c } = hp(n, s, i), u = Xk(a);
  let { move: d = !0, reverse: f } = i || {}, h, y, b;
  for (h = 0; h <= c; ++h)
    y = n[(r + (f ? c - h : h)) % o], !y.skip && (d ? (t.moveTo(y.x, y.y), d = !1) : u(t, b, y, f, a.stepped), b = y);
  return l && (y = n[(r + (f ? c : 0)) % o], u(t, b, y, f, a.stepped)), !!l;
}
function Zk(t, e, s, i) {
  const n = e.points, { count: a, start: o, ilen: r } = hp(n, s, i), { move: l = !0, reverse: c } = i || {};
  let u = 0, d = 0, f, h, y, b, m, k;
  const x = (P) => (o + (c ? r - P : P)) % a, C = () => {
    b !== m && (t.lineTo(u, m), t.lineTo(u, b), t.lineTo(u, k));
  };
  for (l && (h = n[x(0)], t.moveTo(h.x, h.y)), f = 0; f <= r; ++f) {
    if (h = n[x(f)], h.skip)
      continue;
    const P = h.x, R = h.y, W = P | 0;
    W === y ? (R < b ? b = R : R > m && (m = R), u = (d * u + P) / ++d) : (C(), t.lineTo(P, R), y = W, d = 0, b = m = R), k = R;
  }
  C();
}
function $r(t) {
  const e = t.options, s = e.borderDash && e.borderDash.length;
  return !t._decimated && !t._loop && !e.tension && e.cubicInterpolationMode !== "monotone" && !e.stepped && !s ? Zk : Qk;
}
function eT(t) {
  return t.stepped ? Q_ : t.tension || t.cubicInterpolationMode === "monotone" ? Z_ : ai;
}
function tT(t, e, s, i) {
  let n = e._path;
  n || (n = e._path = new Path2D(), e.path(n, s, i) && n.closePath()), fp(t, e.options), t.stroke(n);
}
function sT(t, e, s, i) {
  const { segments: n, options: a } = e, o = $r(e);
  for (const r of n)
    fp(t, a, r.style), t.beginPath(), o(t, e, r, {
      start: s,
      end: s + i - 1
    }) && t.closePath(), t.stroke();
}
const iT = typeof Path2D == "function";
function nT(t, e, s, i) {
  iT && !e.options.segment ? tT(t, e, s, i) : sT(t, e, s, i);
}
class js extends Ms {
  constructor(e) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, e && Object.assign(this, e);
  }
  updateControlPoints(e, s) {
    const i = this.options;
    if ((i.tension || i.cubicInterpolationMode === "monotone") && !i.stepped && !this._pointsUpdated) {
      const n = i.spanGaps ? this._loop : this._fullLoop;
      V_(this._points, i, e, n, s), this._pointsUpdated = !0;
    }
  }
  set points(e) {
    this._points = e, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = aS(this, this.options.segment));
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
    const r = [], l = eT(i);
    let c, u;
    for (c = 0, u = o.length; c < u; ++c) {
      const { start: d, end: f } = o[c], h = a[d], y = a[f];
      if (h === y) {
        r.push(h);
        continue;
      }
      const b = Math.abs((n - h[s]) / (y[s] - h[s])), m = l(h, y, b, i.stepped);
      m[s] = e[s], r.push(m);
    }
    return r.length === 1 ? r[0] : r;
  }
  pathSegment(e, s, i) {
    return $r(this)(e, this, s, i);
  }
  path(e, s, i) {
    const n = this.segments, a = $r(this);
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
    (this.points || []).length && a.borderWidth && (e.save(), nT(e, this, i, n), e.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
G(js, "id", "line"), G(js, "defaults", {
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
}), G(js, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), G(js, "descriptors", {
  _scriptable: !0,
  _indexable: (e) => e !== "borderDash" && e !== "fill"
});
function vd(t, e, s, i) {
  const n = t.options, { [s]: a } = t.getProps([
    s
  ], i);
  return Math.abs(e - a) < n.radius + n.hitRadius;
}
class Ba extends Ms {
  constructor(s) {
    super();
    G(this, "parsed");
    G(this, "skip");
    G(this, "stop");
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
    return vd(this, s, "x", i);
  }
  inYRange(s, i) {
    return vd(this, s, "y", i);
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
    this.skip || n.radius < 0.1 || !Ts(this, i, this.size(n) / 2) || (s.strokeStyle = n.borderColor, s.lineWidth = n.borderWidth, s.fillStyle = n.backgroundColor, Vr(s, n, this.x, this.y));
  }
  getRange() {
    const s = this.options || {};
    return s.radius + s.hitRadius;
  }
}
G(Ba, "id", "point"), /**
* @type {any}
*/
G(Ba, "defaults", {
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
G(Ba, "defaultRoutes", {
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
function zs(t, e, s, i) {
  return t ? 0 : ut(e, s, i);
}
function aT(t, e, s) {
  const i = t.options.borderWidth, n = t.borderSkipped, a = Hh(i);
  return {
    t: zs(n.top, a.top, 0, s),
    r: zs(n.right, a.right, 0, e),
    b: zs(n.bottom, a.bottom, 0, s),
    l: zs(n.left, a.left, 0, e)
  };
}
function oT(t, e, s) {
  const { enableBorderRadius: i } = t.getProps([
    "enableBorderRadius"
  ]), n = t.options.borderRadius, a = di(n), o = Math.min(e, s), r = t.borderSkipped, l = i || _e(n);
  return {
    topLeft: zs(!l || r.top || r.left, a.topLeft, 0, o),
    topRight: zs(!l || r.top || r.right, a.topRight, 0, o),
    bottomLeft: zs(!l || r.bottom || r.left, a.bottomLeft, 0, o),
    bottomRight: zs(!l || r.bottom || r.right, a.bottomRight, 0, o)
  };
}
function rT(t) {
  const e = pp(t), s = e.right - e.left, i = e.bottom - e.top, n = aT(t, s / 2, i / 2), a = oT(t, s / 2, i / 2);
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
function br(t, e, s, i) {
  const n = e === null, a = s === null, r = t && !(n && a) && pp(t, i);
  return r && (n || Ss(e, r.left, r.right)) && (a || Ss(s, r.top, r.bottom));
}
function lT(t) {
  return t.topLeft || t.topRight || t.bottomLeft || t.bottomRight;
}
function cT(t, e) {
  t.rect(e.x, e.y, e.w, e.h);
}
function yr(t, e, s = {}) {
  const i = t.x !== s.x ? -e : 0, n = t.y !== s.y ? -e : 0, a = (t.x + t.w !== s.x + s.w ? e : 0) - i, o = (t.y + t.h !== s.y + s.h ? e : 0) - n;
  return {
    x: t.x + i,
    y: t.y + n,
    w: t.w + a,
    h: t.h + o,
    radius: t.radius
  };
}
class Ha extends Ms {
  constructor(e) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, e && Object.assign(this, e);
  }
  draw(e) {
    const { inflateAmount: s, options: { borderColor: i, backgroundColor: n } } = this, { inner: a, outer: o } = rT(this), r = lT(o.radius) ? Fn : cT;
    e.save(), (o.w !== a.w || o.h !== a.h) && (e.beginPath(), r(e, yr(o, s, a)), e.clip(), r(e, yr(a, -s, o)), e.fillStyle = i, e.fill("evenodd")), e.beginPath(), r(e, yr(a, s)), e.fillStyle = n, e.fill(), e.restore();
  }
  inRange(e, s, i) {
    return br(this, e, s, i);
  }
  inXRange(e, s) {
    return br(this, e, null, s);
  }
  inYRange(e, s) {
    return br(this, null, e, s);
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
G(Ha, "id", "bar"), G(Ha, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), G(Ha, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
var uT = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcElement: cn,
  BarElement: Ha,
  LineElement: js,
  PointElement: Ba
});
const Jr = [
  "rgb(54, 162, 235)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
  // grey
], _d = /* @__PURE__ */ Jr.map((t) => t.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function mp(t) {
  return Jr[t % Jr.length];
}
function gp(t) {
  return _d[t % _d.length];
}
function dT(t, e) {
  return t.borderColor = mp(e), t.backgroundColor = gp(e), ++e;
}
function fT(t, e) {
  return t.backgroundColor = t.data.map(() => mp(e++)), e;
}
function hT(t, e) {
  return t.backgroundColor = t.data.map(() => gp(e++)), e;
}
function pT(t) {
  let e = 0;
  return (s, i) => {
    const n = t.getDatasetMeta(i).controller;
    n instanceof ri ? e = fT(s, e) : n instanceof An ? e = hT(s, e) : n && (e = dT(s, e));
  };
}
function Sd(t) {
  let e;
  for (e in t)
    if (t[e].borderColor || t[e].backgroundColor)
      return !0;
  return !1;
}
function mT(t) {
  return t && (t.borderColor || t.backgroundColor);
}
function gT() {
  return Xe.borderColor !== "rgba(0,0,0,0.1)" || Xe.backgroundColor !== "rgba(0,0,0,0.1)";
}
var bT = {
  id: "colors",
  defaults: {
    enabled: !0,
    forceOverride: !1
  },
  beforeLayout(t, e, s) {
    if (!s.enabled)
      return;
    const { data: { datasets: i }, options: n } = t.config, { elements: a } = n, o = Sd(i) || mT(n) || a && Sd(a) || gT();
    if (!s.forceOverride && o)
      return;
    const r = pT(t);
    i.forEach(r);
  }
};
function yT(t, e, s, i, n) {
  const a = n.samples || i;
  if (a >= s)
    return t.slice(e, e + s);
  const o = [], r = (s - 2) / (a - 2);
  let l = 0;
  const c = e + s - 1;
  let u = e, d, f, h, y, b;
  for (o[l++] = t[u], d = 0; d < a - 2; d++) {
    let m = 0, k = 0, x;
    const C = Math.floor((d + 1) * r) + 1 + e, P = Math.min(Math.floor((d + 2) * r) + 1, s) + e, R = P - C;
    for (x = C; x < P; x++)
      m += t[x].x, k += t[x].y;
    m /= R, k /= R;
    const W = Math.floor(d * r) + 1 + e, N = Math.min(Math.floor((d + 1) * r) + 1, s) + e, { x: M, y: K } = t[u];
    for (h = y = -1, x = W; x < N; x++)
      y = 0.5 * Math.abs((M - m) * (t[x].y - K) - (M - t[x].x) * (k - K)), y > h && (h = y, f = t[x], b = x);
    o[l++] = f, u = b;
  }
  return o[l++] = t[c], o;
}
function vT(t, e, s, i) {
  let n = 0, a = 0, o, r, l, c, u, d, f, h, y, b;
  const m = [], k = e + s - 1, x = t[e].x, P = t[k].x - x;
  for (o = e; o < e + s; ++o) {
    r = t[o], l = (r.x - x) / P * i, c = r.y;
    const R = l | 0;
    if (R === u)
      c < y ? (y = c, d = o) : c > b && (b = c, f = o), n = (a * n + r.x) / ++a;
    else {
      const W = o - 1;
      if (!ye(d) && !ye(f)) {
        const N = Math.min(d, f), M = Math.max(d, f);
        N !== h && N !== W && m.push({
          ...t[N],
          x: n
        }), M !== h && M !== W && m.push({
          ...t[M],
          x: n
        });
      }
      o > 0 && W !== h && m.push(t[W]), m.push(r), u = R, a = 0, y = b = c, d = f = h = o;
    }
  }
  return m;
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
function kd(t) {
  t.data.datasets.forEach((e) => {
    bp(e);
  });
}
function _T(t, e) {
  const s = e.length;
  let i = 0, n;
  const { iScale: a } = t, { min: o, max: r, minDefined: l, maxDefined: c } = a.getUserBounds();
  return l && (i = ut(ks(e, a.axis, o).lo, 0, s - 1)), c ? n = ut(ks(e, a.axis, r).hi + 1, i, s) - i : n = s - i, {
    start: i,
    count: n
  };
}
var ST = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (t, e, s) => {
    if (!s.enabled) {
      kd(t);
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
      let { start: d, count: f } = _T(l, c);
      const h = s.threshold || 4 * i;
      if (f <= h) {
        bp(n);
        return;
      }
      ye(o) && (n._data = c, delete n.data, Object.defineProperty(n, "data", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this._decimated;
        },
        set: function(b) {
          this._data = b;
        }
      }));
      let y;
      switch (s.algorithm) {
        case "lttb":
          y = yT(c, d, f, i, s);
          break;
        case "min-max":
          y = vT(c, d, f, i);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${s.algorithm}'`);
      }
      n._decimated = y;
    });
  },
  destroy(t) {
    kd(t);
  }
};
function kT(t, e, s) {
  const i = t.segments, n = t.points, a = e.points, o = [];
  for (const r of i) {
    let { start: l, end: c } = r;
    c = wo(l, c, n);
    const u = Yr(s, n[l], n[c], r.loop);
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
      const h = Yr(s, a[f.start], a[f.end], f.loop), y = Xh(r, n, h);
      for (const b of y)
        o.push({
          source: b,
          target: f,
          start: {
            [s]: Td(u, h, "start", Math.max)
          },
          end: {
            [s]: Td(u, h, "end", Math.min)
          }
        });
    }
  }
  return o;
}
function Yr(t, e, s, i) {
  if (i)
    return;
  let n = e[t], a = s[t];
  return t === "angle" && (n = mt(n), a = mt(a)), {
    property: t,
    start: n,
    end: a
  };
}
function TT(t, e) {
  const { x: s = null, y: i = null } = t || {}, n = e.points, a = [];
  return e.segments.forEach(({ start: o, end: r }) => {
    r = wo(o, r, n);
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
function wo(t, e, s) {
  for (; e > t; e--) {
    const i = s[e];
    if (!isNaN(i.x) && !isNaN(i.y))
      break;
  }
  return e;
}
function Td(t, e, s, i) {
  return t && e ? i(t[s], e[s]) : t ? t[s] : e ? e[s] : 0;
}
function yp(t, e) {
  let s = [], i = !1;
  return Ye(t) ? (i = !0, s = t) : s = TT(t, e), s.length ? new js({
    points: s,
    options: {
      tension: 0
    },
    _loop: i,
    _fullLoop: i
  }) : null;
}
function xd(t) {
  return t && t.fill !== !1;
}
function xT(t, e, s) {
  let n = t[e].fill;
  const a = [
    e
  ];
  let o;
  if (!s)
    return n;
  for (; n !== !1 && a.indexOf(n) === -1; ) {
    if (!it(n))
      return n;
    if (o = t[n], !o)
      return !1;
    if (o.visible)
      return n;
    a.push(n), n = o.fill;
  }
  return !1;
}
function AT(t, e, s) {
  const i = RT(t);
  if (_e(i))
    return isNaN(i.value) ? !1 : i;
  let n = parseFloat(i);
  return it(n) && Math.floor(n) === n ? PT(i[0], e, n, s) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(i) >= 0 && i;
}
function PT(t, e, s, i) {
  return (t === "-" || t === "+") && (s = e + s), s === e || s < 0 || s >= i ? !1 : s;
}
function CT(t, e) {
  let s = null;
  return t === "start" ? s = e.bottom : t === "end" ? s = e.top : _e(t) ? s = e.getPixelForValue(t.value) : e.getBasePixel && (s = e.getBasePixel()), s;
}
function wT(t, e, s) {
  let i;
  return t === "start" ? i = s : t === "end" ? i = e.options.reverse ? e.min : e.max : _e(t) ? i = t.value : i = e.getBaseValue(), i;
}
function RT(t) {
  const e = t.options, s = e.fill;
  let i = he(s && s.target, s);
  return i === void 0 && (i = !!e.backgroundColor), i === !1 || i === null ? !1 : i === !0 ? "origin" : i;
}
function MT(t) {
  const { scale: e, index: s, line: i } = t, n = [], a = i.segments, o = i.points, r = DT(e, s);
  r.push(yp({
    x: null,
    y: e.bottom
  }, i));
  for (let l = 0; l < a.length; l++) {
    const c = a[l];
    for (let u = c.start; u <= c.end; u++)
      IT(n, o[u], r);
  }
  return new js({
    points: n,
    options: {}
  });
}
function DT(t, e) {
  const s = [], i = t.getMatchingVisibleMetas("line");
  for (let n = 0; n < i.length; n++) {
    const a = i[n];
    if (a.index === e)
      break;
    a.hidden || s.unshift(a.dataset);
  }
  return s;
}
function IT(t, e, s) {
  const i = [];
  for (let n = 0; n < s.length; n++) {
    const a = s[n], { first: o, last: r, point: l } = ET(a, e, "x");
    if (!(!l || o && r)) {
      if (o)
        i.unshift(l);
      else if (t.push(l), !r)
        break;
    }
  }
  t.push(...i);
}
function ET(t, e, s) {
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
      end: Ke
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
function OT(t) {
  const { chart: e, fill: s, line: i } = t;
  if (it(s))
    return LT(e, s);
  if (s === "stack")
    return MT(t);
  if (s === "shape")
    return !0;
  const n = NT(t);
  return n instanceof vp ? n : yp(n, i);
}
function LT(t, e) {
  const s = t.getDatasetMeta(e);
  return s && t.isDatasetVisible(e) ? s.dataset : null;
}
function NT(t) {
  return (t.scale || {}).getPointPositionForValue ? FT(t) : UT(t);
}
function UT(t) {
  const { scale: e = {}, fill: s } = t, i = CT(s, e);
  if (it(i)) {
    const n = e.isHorizontal();
    return {
      x: n ? i : null,
      y: n ? null : i
    };
  }
  return null;
}
function FT(t) {
  const { scale: e, fill: s } = t, i = e.options, n = e.getLabels().length, a = i.reverse ? e.max : e.min, o = wT(s, e, a), r = [];
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
function vr(t, e, s) {
  const i = OT(e), { chart: n, index: a, line: o, scale: r, axis: l } = e, c = o.options, u = c.fill, d = c.backgroundColor, { above: f = d, below: h = d } = u || {}, y = n.getDatasetMeta(a), b = Zh(n, y);
  i && o.points.length && (xo(t, s), WT(t, {
    line: o,
    target: i,
    above: f,
    below: h,
    area: s,
    scale: r,
    axis: l,
    clip: b
  }), Ao(t));
}
function WT(t, e) {
  const { line: s, target: i, above: n, below: a, area: o, scale: r, clip: l } = e, c = s._loop ? "angle" : e.axis;
  t.save();
  let u = a;
  a !== n && (c === "x" ? (Ad(t, i, o.top), _r(t, {
    line: s,
    target: i,
    color: n,
    scale: r,
    property: c,
    clip: l
  }), t.restore(), t.save(), Ad(t, i, o.bottom)) : c === "y" && (Pd(t, i, o.left), _r(t, {
    line: s,
    target: i,
    color: a,
    scale: r,
    property: c,
    clip: l
  }), t.restore(), t.save(), Pd(t, i, o.right), u = n)), _r(t, {
    line: s,
    target: i,
    color: u,
    scale: r,
    property: c,
    clip: l
  }), t.restore();
}
function Ad(t, e, s) {
  const { segments: i, points: n } = e;
  let a = !0, o = !1;
  t.beginPath();
  for (const r of i) {
    const { start: l, end: c } = r, u = n[l], d = n[wo(l, c, n)];
    a ? (t.moveTo(u.x, u.y), a = !1) : (t.lineTo(u.x, s), t.lineTo(u.x, u.y)), o = !!e.pathSegment(t, r, {
      move: o
    }), o ? t.closePath() : t.lineTo(d.x, s);
  }
  t.lineTo(e.first().x, s), t.closePath(), t.clip();
}
function Pd(t, e, s) {
  const { segments: i, points: n } = e;
  let a = !0, o = !1;
  t.beginPath();
  for (const r of i) {
    const { start: l, end: c } = r, u = n[l], d = n[wo(l, c, n)];
    a ? (t.moveTo(u.x, u.y), a = !1) : (t.lineTo(s, u.y), t.lineTo(u.x, u.y)), o = !!e.pathSegment(t, r, {
      move: o
    }), o ? t.closePath() : t.lineTo(s, d.y);
  }
  t.lineTo(s, e.first().y), t.closePath(), t.clip();
}
function _r(t, e) {
  const { line: s, target: i, property: n, color: a, scale: o, clip: r } = e, l = kT(s, i, n);
  for (const { source: c, target: u, start: d, end: f } of l) {
    const { style: { backgroundColor: h = a } = {} } = c, y = i !== !0;
    t.save(), t.fillStyle = h, BT(t, o, r, y && Yr(n, d, f)), t.beginPath();
    const b = !!s.pathSegment(t, c);
    let m;
    if (y) {
      b ? t.closePath() : Cd(t, i, f, n);
      const k = !!i.pathSegment(t, u, {
        move: b,
        reverse: !0
      });
      m = b && k, m || Cd(t, i, d, n);
    }
    t.closePath(), t.fill(m ? "evenodd" : "nonzero"), t.restore();
  }
}
function BT(t, e, s, i) {
  const n = e.chart.chartArea, { property: a, start: o, end: r } = i || {};
  if (a === "x" || a === "y") {
    let l, c, u, d;
    a === "x" ? (l = o, c = n.top, u = r, d = n.bottom) : (l = n.left, c = o, u = n.right, d = r), t.beginPath(), s && (l = Math.max(l, s.left), u = Math.min(u, s.right), c = Math.max(c, s.top), d = Math.min(d, s.bottom)), t.rect(l, c, u - l, d - c), t.clip();
  }
}
function Cd(t, e, s, i) {
  const n = e.interpolate(s, i);
  n && t.lineTo(n.x, n.y);
}
var HT = {
  id: "filler",
  afterDatasetsUpdate(t, e, s) {
    const i = (t.data.datasets || []).length, n = [];
    let a, o, r, l;
    for (o = 0; o < i; ++o)
      a = t.getDatasetMeta(o), r = a.dataset, l = null, r && r.options && r instanceof js && (l = {
        visible: t.isDatasetVisible(o),
        index: o,
        fill: AT(r, o, i),
        chart: t,
        axis: a.controller.options.indexAxis,
        scale: a.vScale,
        line: r
      }), a.$filler = l, n.push(l);
    for (o = 0; o < i; ++o)
      l = n[o], !(!l || l.fill === !1) && (l.fill = xT(n, o, s.propagate));
  },
  beforeDraw(t, e, s) {
    const i = s.drawTime === "beforeDraw", n = t.getSortedVisibleDatasetMetas(), a = t.chartArea;
    for (let o = n.length - 1; o >= 0; --o) {
      const r = n[o].$filler;
      r && (r.line.updateControlPoints(a, r.axis), i && r.fill && vr(t.ctx, r, a));
    }
  },
  beforeDatasetsDraw(t, e, s) {
    if (s.drawTime !== "beforeDatasetsDraw")
      return;
    const i = t.getSortedVisibleDatasetMetas();
    for (let n = i.length - 1; n >= 0; --n) {
      const a = i[n].$filler;
      xd(a) && vr(t.ctx, a, t.chartArea);
    }
  },
  beforeDatasetDraw(t, e, s) {
    const i = e.meta.$filler;
    !xd(i) || s.drawTime !== "beforeDatasetDraw" || vr(t.ctx, i, t.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const wd = (t, e) => {
  let { boxHeight: s = e, boxWidth: i = e } = t;
  return t.usePointStyle && (s = Math.min(s, e), i = t.pointStyleWidth || Math.min(i, e)), {
    boxWidth: i,
    boxHeight: s,
    itemHeight: Math.max(e, s)
  };
}, jT = (t, e) => t !== null && e !== null && t.datasetIndex === e.datasetIndex && t.index === e.index;
class Rd extends Ms {
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
    let s = Ve(e.generateLabels, [
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
    const i = e.labels, n = lt(i.font), a = n.size, o = this._computeTitleHeight(), { boxWidth: r, itemHeight: l } = wd(i, a);
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
    return this.legendItems.forEach((y, b) => {
      const m = i + s / 2 + a.measureText(y.text).width;
      (b === 0 || c[c.length - 1] + m + 2 * r > o) && (d += u, c[c.length - (b > 0 ? 0 : 1)] = 0, h += u, f++), l[b] = {
        left: 0,
        top: h,
        row: f,
        width: m,
        height: n
      }, c[c.length - 1] += m + r;
    }), d;
  }
  _fitCols(e, s, i, n) {
    const { ctx: a, maxHeight: o, options: { labels: { padding: r } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], u = o - e;
    let d = r, f = 0, h = 0, y = 0, b = 0;
    return this.legendItems.forEach((m, k) => {
      const { itemWidth: x, itemHeight: C } = zT(i, s, a, m, n);
      k > 0 && h + C + 2 * r > u && (d += f + r, c.push({
        width: f,
        height: h
      }), y += f + r, b++, f = h = 0), l[k] = {
        left: y,
        top: h,
        col: b,
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
      xo(e, this), this._draw(), Ao(e);
    }
  }
  _draw() {
    const { options: e, columnSizes: s, lineWidths: i, ctx: n } = this, { align: a, labels: o } = e, r = Xe.color, l = Ei(e.rtl, this.left, this.width), c = lt(o.font), { padding: u } = o, d = c.size, f = d / 2;
    let h;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: y, boxHeight: b, itemHeight: m } = wd(o, d), k = function(W, N, M) {
      if (isNaN(y) || y <= 0 || isNaN(b) || b < 0)
        return;
      n.save();
      const K = he(M.lineWidth, 1);
      if (n.fillStyle = he(M.fillStyle, r), n.lineCap = he(M.lineCap, "butt"), n.lineDashOffset = he(M.lineDashOffset, 0), n.lineJoin = he(M.lineJoin, "miter"), n.lineWidth = K, n.strokeStyle = he(M.strokeStyle, r), n.setLineDash(he(M.lineDash, [])), o.usePointStyle) {
        const Q = {
          radius: b * Math.SQRT2 / 2,
          pointStyle: M.pointStyle,
          rotation: M.rotation,
          borderWidth: K
        }, ie = l.xPlus(W, y / 2), oe = N + f;
        Bh(n, Q, ie, oe, o.pointStyleWidth && y);
      } else {
        const Q = N + Math.max((d - b) / 2, 0), ie = l.leftForLtr(W, y), oe = di(M.borderRadius);
        n.beginPath(), Object.values(oe).some((Ae) => Ae !== 0) ? Fn(n, {
          x: ie,
          y: Q,
          w: y,
          h: b,
          radius: oe
        }) : n.rect(ie, Q, y, b), n.fill(), K !== 0 && n.stroke();
      }
      n.restore();
    }, x = function(W, N, M) {
      pi(n, M.text, W, N + m / 2, c, {
        strikethrough: M.hidden,
        textAlign: l.textAlign(M.textAlign)
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
    const R = m + u;
    this.legendItems.forEach((W, N) => {
      n.strokeStyle = W.fontColor, n.fillStyle = W.fontColor;
      const M = n.measureText(W.text).width, K = l.textAlign(W.textAlign || (W.textAlign = o.textAlign)), Q = y + f + M;
      let ie = h.x, oe = h.y;
      l.setWidth(this.width), C ? N > 0 && ie + Q + u > this.right && (oe = h.y += R, h.line++, ie = h.x = pt(a, this.left + u, this.right - i[h.line])) : N > 0 && oe + R > this.bottom && (ie = h.x = ie + s[h.line].width + u, h.line++, oe = h.y = pt(a, this.top + P + u, this.bottom - s[h.line].height));
      const Ae = l.x(ie);
      if (k(Ae, oe, W), ie = l_(K, ie + y + f, C ? ie + Q : this.right, e.rtl), x(l.x(ie), oe, W), C)
        h.x += Q + u;
      else if (typeof W.text != "string") {
        const qe = c.lineHeight;
        h.y += _p(W, qe) + u;
      } else
        h.y += R;
    }), Jh(this.ctx, e.textDirection);
  }
  drawTitle() {
    const e = this.options, s = e.title, i = lt(s.font), n = _t(s.padding);
    if (!s.display)
      return;
    const a = Ei(e.rtl, this.left, this.width), o = this.ctx, r = s.position, l = i.size / 2, c = n.top + l;
    let u, d = this.left, f = this.width;
    if (this.isHorizontal())
      f = Math.max(...this.lineWidths), u = this.top + c, d = pt(e.align, d, this.right - f);
    else {
      const y = this.columnSizes.reduce((b, m) => Math.max(b, m.height), 0);
      u = c + pt(e.align, this.top, this.bottom - y - e.labels.padding - this._computeTitleHeight());
    }
    const h = pt(r, d, d + f);
    o.textAlign = a.textAlign(Il(r)), o.textBaseline = "middle", o.strokeStyle = s.color, o.fillStyle = s.color, o.font = i.string, pi(o, s.text, h, u, i);
  }
  _computeTitleHeight() {
    const e = this.options.title, s = lt(e.font), i = _t(e.padding);
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
    if (!GT(e.type, s))
      return;
    const i = this._getLegendItemAt(e.x, e.y);
    if (e.type === "mousemove" || e.type === "mouseout") {
      const n = this._hoveredItem, a = jT(n, i);
      n && !a && Ve(s.onLeave, [
        e,
        n,
        this
      ], this), this._hoveredItem = i, i && !a && Ve(s.onHover, [
        e,
        i,
        this
      ], this);
    } else i && Ve(s.onClick, [
      e,
      i,
      this
    ], this);
  }
}
function zT(t, e, s, i, n) {
  const a = VT(i, t, e, s), o = qT(n, i, e.lineHeight);
  return {
    itemWidth: a,
    itemHeight: o
  };
}
function VT(t, e, s, i) {
  let n = t.text;
  return n && typeof n != "string" && (n = n.reduce((a, o) => a.length > o.length ? a : o)), e + s.size / 2 + i.measureText(n).width;
}
function qT(t, e, s) {
  let i = t;
  return typeof e.text != "string" && (i = _p(e, s)), i;
}
function _p(t, e) {
  const s = t.text ? t.text.length : 0;
  return e * s;
}
function GT(t, e) {
  return !!((t === "mousemove" || t === "mouseout") && (e.onHover || e.onLeave) || e.onClick && (t === "click" || t === "mouseup"));
}
var KT = {
  id: "legend",
  _element: Rd,
  start(t, e, s) {
    const i = t.legend = new Rd({
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
class Hl extends Ms {
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
    const n = Ye(i.text) ? i.text.length : 1;
    this._padding = _t(i.padding);
    const a = n * lt(i.font).lineHeight + this._padding.height;
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
    const i = lt(s.font), a = i.lineHeight / 2 + this._padding.top, { titleX: o, titleY: r, maxWidth: l, rotation: c } = this._drawArgs(a);
    pi(e, s.text, 0, 0, i, {
      color: s.color,
      maxWidth: l,
      rotation: c,
      textAlign: Il(s.align),
      textBaseline: "middle",
      translation: [
        o,
        r
      ]
    });
  }
}
function $T(t, e) {
  const s = new Hl({
    ctx: t.ctx,
    options: e,
    chart: t
  });
  yt.configure(t, s, e), yt.addBox(t, s), t.titleBlock = s;
}
var JT = {
  id: "title",
  _element: Hl,
  start(t, e, s) {
    $T(t, s);
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
const Aa = /* @__PURE__ */ new WeakMap();
var YT = {
  id: "subtitle",
  start(t, e, s) {
    const i = new Hl({
      ctx: t.ctx,
      options: s,
      chart: t
    });
    yt.configure(t, i, s), yt.addBox(t, i), Aa.set(t, i);
  },
  stop(t) {
    yt.removeBox(t, Aa.get(t)), Aa.delete(t);
  },
  beforeUpdate(t, e, s) {
    const i = Aa.get(t);
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
        const c = l.getCenterPoint(), u = jr(e, c);
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
  return e && (Ye(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
}
function ms(t) {
  return (typeof t == "string" || t instanceof String) && t.indexOf(`
`) > -1 ? t.split(`
`) : t;
}
function XT(t, e) {
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
function Md(t, e) {
  const s = t.chart.ctx, { body: i, footer: n, title: a } = t, { boxWidth: o, boxHeight: r } = e, l = lt(e.bodyFont), c = lt(e.titleFont), u = lt(e.footerFont), d = a.length, f = n.length, h = i.length, y = _t(e.padding);
  let b = y.height, m = 0, k = i.reduce((P, R) => P + R.before.length + R.lines.length + R.after.length, 0);
  if (k += t.beforeBody.length + t.afterBody.length, d && (b += d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom), k) {
    const P = e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight;
    b += h * P + (k - h) * l.lineHeight + (k - 1) * e.bodySpacing;
  }
  f && (b += e.footerMarginTop + f * u.lineHeight + (f - 1) * e.footerSpacing);
  let x = 0;
  const C = function(P) {
    m = Math.max(m, s.measureText(P).width + x);
  };
  return s.save(), s.font = c.string, Ee(t.title, C), s.font = l.string, Ee(t.beforeBody.concat(t.afterBody), C), x = e.displayColors ? o + 2 + e.boxPadding : 0, Ee(i, (P) => {
    Ee(P.before, C), Ee(P.lines, C), Ee(P.after, C);
  }), x = 0, s.font = u.string, Ee(t.footer, C), s.restore(), m += y.width, {
    width: m,
    height: b
  };
}
function QT(t, e) {
  const { y: s, height: i } = e;
  return s < i / 2 ? "top" : s > t.height - i / 2 ? "bottom" : "center";
}
function ZT(t, e, s, i) {
  const { x: n, width: a } = i, o = s.caretSize + s.caretPadding;
  if (t === "left" && n + a + o > e.width || t === "right" && n - a - o < 0)
    return !0;
}
function ex(t, e, s, i) {
  const { x: n, width: a } = s, { width: o, chartArea: { left: r, right: l } } = t;
  let c = "center";
  return i === "center" ? c = n <= (r + l) / 2 ? "left" : "right" : n <= a / 2 ? c = "left" : n >= o - a / 2 && (c = "right"), ZT(c, t, e, s) && (c = "center"), c;
}
function Dd(t, e, s) {
  const i = s.yAlign || e.yAlign || QT(t, s);
  return {
    xAlign: s.xAlign || e.xAlign || ex(t, e, s, i),
    yAlign: i
  };
}
function tx(t, e) {
  let { x: s, width: i } = t;
  return e === "right" ? s -= i : e === "center" && (s -= i / 2), s;
}
function sx(t, e, s) {
  let { y: i, height: n } = t;
  return e === "top" ? i += s : e === "bottom" ? i -= n + s : i -= n / 2, i;
}
function Id(t, e, s, i) {
  const { caretSize: n, caretPadding: a, cornerRadius: o } = t, { xAlign: r, yAlign: l } = s, c = n + a, { topLeft: u, topRight: d, bottomLeft: f, bottomRight: h } = di(o);
  let y = tx(e, r);
  const b = sx(e, l, c);
  return l === "center" ? r === "left" ? y += c : r === "right" && (y -= c) : r === "left" ? y -= Math.max(u, f) + n : r === "right" && (y += Math.max(d, h) + n), {
    x: ut(y, 0, i.width - e.width),
    y: ut(b, 0, i.height - e.height)
  };
}
function Pa(t, e, s) {
  const i = _t(s.padding);
  return e === "center" ? t.x + t.width / 2 : e === "right" ? t.x + t.width - i.right : t.x + i.left;
}
function Ed(t) {
  return es([], ms(t));
}
function ix(t, e, s) {
  return Ks(t, {
    tooltip: e,
    tooltipItems: s,
    type: "tooltip"
  });
}
function Od(t, e) {
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
    return ye(s) || (e += s), e;
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
class Xr extends Ms {
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
    return this.$context || (this.$context = ix(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(e, s) {
    const { callbacks: i } = s, n = Mt(i, "beforeTitle", this, e), a = Mt(i, "title", this, e), o = Mt(i, "afterTitle", this, e);
    let r = [];
    return r = es(r, ms(n)), r = es(r, ms(a)), r = es(r, ms(o)), r;
  }
  getBeforeBody(e, s) {
    return Ed(Mt(s.callbacks, "beforeBody", this, e));
  }
  getBody(e, s) {
    const { callbacks: i } = s, n = [];
    return Ee(e, (a) => {
      const o = {
        before: [],
        lines: [],
        after: []
      }, r = Od(i, a);
      es(o.before, ms(Mt(r, "beforeLabel", this, a))), es(o.lines, Mt(r, "label", this, a)), es(o.after, ms(Mt(r, "afterLabel", this, a))), n.push(o);
    }), n;
  }
  getAfterBody(e, s) {
    return Ed(Mt(s.callbacks, "afterBody", this, e));
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
      r.push(XT(this.chart, s[l]));
    return e.filter && (r = r.filter((u, d, f) => e.filter(u, d, f, i))), e.itemSort && (r = r.sort((u, d) => e.itemSort(u, d, i))), Ee(r, (u) => {
      const d = Od(e.callbacks, u);
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
      const l = this._size = Md(this, i), c = Object.assign({}, r, l), u = Dd(this.chart, i, c), d = Id(i, c, u, this.chart);
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
    const { xAlign: n, yAlign: a } = this, { caretSize: o, cornerRadius: r } = i, { topLeft: l, topRight: c, bottomLeft: u, bottomRight: d } = di(r), { x: f, y: h } = e, { width: y, height: b } = s;
    let m, k, x, C, P, R;
    return a === "center" ? (P = h + b / 2, n === "left" ? (m = f, k = m - o, C = P + o, R = P - o) : (m = f + y, k = m + o, C = P - o, R = P + o), x = m) : (n === "left" ? k = f + Math.max(l, u) + o : n === "right" ? k = f + y - Math.max(c, d) - o : k = this.caretX, a === "top" ? (C = h, P = C - o, m = k - o, x = k + o) : (C = h + b, P = C + o, m = k + o, x = k - o), R = C), {
      x1: m,
      x2: k,
      x3: x,
      y1: C,
      y2: P,
      y3: R
    };
  }
  drawTitle(e, s, i) {
    const n = this.title, a = n.length;
    let o, r, l;
    if (a) {
      const c = Ei(i.rtl, this.x, this.width);
      for (e.x = Pa(this, i.titleAlign, i), s.textAlign = c.textAlign(i.titleAlign), s.textBaseline = "middle", o = lt(i.titleFont), r = i.titleSpacing, s.fillStyle = i.titleColor, s.font = o.string, l = 0; l < a; ++l)
        s.fillText(n[l], c.x(e.x), e.y + o.lineHeight / 2), e.y += o.lineHeight + r, l + 1 === a && (e.y += i.titleMarginBottom - r);
    }
  }
  _drawColorBox(e, s, i, n, a) {
    const o = this.labelColors[i], r = this.labelPointStyles[i], { boxHeight: l, boxWidth: c } = a, u = lt(a.bodyFont), d = Pa(this, "left", a), f = n.x(d), h = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0, y = s.y + h;
    if (a.usePointStyle) {
      const b = {
        radius: Math.min(c, l) / 2,
        pointStyle: r.pointStyle,
        rotation: r.rotation,
        borderWidth: 1
      }, m = n.leftForLtr(f, c) + c / 2, k = y + l / 2;
      e.strokeStyle = a.multiKeyBackground, e.fillStyle = a.multiKeyBackground, Vr(e, b, m, k), e.strokeStyle = o.borderColor, e.fillStyle = o.backgroundColor, Vr(e, b, m, k);
    } else {
      e.lineWidth = _e(o.borderWidth) ? Math.max(...Object.values(o.borderWidth)) : o.borderWidth || 1, e.strokeStyle = o.borderColor, e.setLineDash(o.borderDash || []), e.lineDashOffset = o.borderDashOffset || 0;
      const b = n.leftForLtr(f, c), m = n.leftForLtr(n.xPlus(f, 1), c - 2), k = di(o.borderRadius);
      Object.values(k).some((x) => x !== 0) ? (e.beginPath(), e.fillStyle = a.multiKeyBackground, Fn(e, {
        x: b,
        y,
        w: c,
        h: l,
        radius: k
      }), e.fill(), e.stroke(), e.fillStyle = o.backgroundColor, e.beginPath(), Fn(e, {
        x: m,
        y: y + 1,
        w: c - 2,
        h: l - 2,
        radius: k
      }), e.fill()) : (e.fillStyle = a.multiKeyBackground, e.fillRect(b, y, c, l), e.strokeRect(b, y, c, l), e.fillStyle = o.backgroundColor, e.fillRect(m, y + 1, c - 2, l - 2));
    }
    e.fillStyle = this.labelTextColors[i];
  }
  drawBody(e, s, i) {
    const { body: n } = this, { bodySpacing: a, bodyAlign: o, displayColors: r, boxHeight: l, boxWidth: c, boxPadding: u } = i, d = lt(i.bodyFont);
    let f = d.lineHeight, h = 0;
    const y = Ei(i.rtl, this.x, this.width), b = function(M) {
      s.fillText(M, y.x(e.x + h), e.y + f / 2), e.y += f + a;
    }, m = y.textAlign(o);
    let k, x, C, P, R, W, N;
    for (s.textAlign = o, s.textBaseline = "middle", s.font = d.string, e.x = Pa(this, m, i), s.fillStyle = i.bodyColor, Ee(this.beforeBody, b), h = r && m !== "right" ? o === "center" ? c / 2 + u : c + 2 + u : 0, P = 0, W = n.length; P < W; ++P) {
      for (k = n[P], x = this.labelTextColors[P], s.fillStyle = x, Ee(k.before, b), C = k.lines, r && C.length && (this._drawColorBox(s, e, P, y, i), f = Math.max(d.lineHeight, l)), R = 0, N = C.length; R < N; ++R)
        b(C[R]), f = d.lineHeight;
      Ee(k.after, b);
    }
    h = 0, f = d.lineHeight, Ee(this.afterBody, b), e.y -= a;
  }
  drawFooter(e, s, i) {
    const n = this.footer, a = n.length;
    let o, r;
    if (a) {
      const l = Ei(i.rtl, this.x, this.width);
      for (e.x = Pa(this, i.footerAlign, i), e.y += i.footerMarginTop, s.textAlign = l.textAlign(i.footerAlign), s.textBaseline = "middle", o = lt(i.footerFont), s.fillStyle = i.footerColor, s.font = o.string, r = 0; r < a; ++r)
        s.fillText(n[r], l.x(e.x), e.y + o.lineHeight / 2), e.y += o.lineHeight + i.footerSpacing;
    }
  }
  drawBackground(e, s, i, n) {
    const { xAlign: a, yAlign: o } = this, { x: r, y: l } = e, { width: c, height: u } = i, { topLeft: d, topRight: f, bottomLeft: h, bottomRight: y } = di(n.cornerRadius);
    s.fillStyle = n.backgroundColor, s.strokeStyle = n.borderColor, s.lineWidth = n.borderWidth, s.beginPath(), s.moveTo(r + d, l), o === "top" && this.drawCaret(e, s, i, n), s.lineTo(r + c - f, l), s.quadraticCurveTo(r + c, l, r + c, l + f), o === "center" && a === "right" && this.drawCaret(e, s, i, n), s.lineTo(r + c, l + u - y), s.quadraticCurveTo(r + c, l + u, r + c - y, l + u), o === "bottom" && this.drawCaret(e, s, i, n), s.lineTo(r + h, l + u), s.quadraticCurveTo(r, l + u, r, l + u - h), o === "center" && a === "left" && this.drawCaret(e, s, i, n), s.lineTo(r, l + d), s.quadraticCurveTo(r, l, r + d, l), s.closePath(), s.fill(), n.borderWidth > 0 && s.stroke();
  }
  _updateAnimationTarget(e) {
    const s = this.chart, i = this.$animations, n = i && i.x, a = i && i.y;
    if (n || a) {
      const o = un[e.position].call(this, this._active, this._eventPosition);
      if (!o)
        return;
      const r = this._size = Md(this, e), l = Object.assign({}, o, this._size), c = Dd(s, e, l), u = Id(e, l, c, s);
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
    }), a = !eo(i, n), o = this._positionChanged(n, s);
    (a || o) && (this._active = n, this._eventPosition = s, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(e, s, i = !0) {
    if (s && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, a = this._active || [], o = this._getActiveElements(e, a, s, i), r = this._positionChanged(o, e), l = s || !eo(o, a) || r;
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
G(Xr, "positioners", un);
var nx = {
  id: "tooltip",
  _element: Xr,
  positioners: un,
  afterInit(t, e, s) {
    s && (t.tooltip = new Xr({
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
}, ax = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Colors: bT,
  Decimation: ST,
  Filler: HT,
  Legend: KT,
  SubTitle: YT,
  Title: JT,
  Tooltip: nx
});
const ox = (t, e, s, i) => (typeof e == "string" ? (s = t.push(e) - 1, i.unshift({
  index: s,
  label: e
})) : isNaN(e) && (s = null), s);
function rx(t, e, s, i) {
  const n = t.indexOf(e);
  if (n === -1)
    return ox(t, e, s, i);
  const a = t.lastIndexOf(e);
  return n !== a ? s : n;
}
const lx = (t, e) => t === null ? null : ut(Math.round(t), 0, e);
function Ld(t) {
  const e = this.getLabels();
  return t >= 0 && t < e.length ? e[t] : t;
}
class Qr extends gi {
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
    if (ye(e))
      return null;
    const i = this.getLabels();
    return s = isFinite(s) && i[s] === e ? s : rx(i, e, he(s, e), this._addedLabels), lx(s, i.length - 1);
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
    return Ld.call(this, e);
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
G(Qr, "id", "category"), G(Qr, "defaults", {
  ticks: {
    callback: Ld
  }
});
function cx(t, e) {
  const s = [], { bounds: n, step: a, min: o, max: r, precision: l, count: c, maxTicks: u, maxDigits: d, includeBounds: f } = t, h = a || 1, y = u - 1, { min: b, max: m } = e, k = !ye(o), x = !ye(r), C = !ye(c), P = (m - b) / (d + 1);
  let R = Mu((m - b) / y / h) * h, W, N, M, K;
  if (R < 1e-14 && !k && !x)
    return [
      {
        value: b
      },
      {
        value: m
      }
    ];
  K = Math.ceil(m / R) - Math.floor(b / R), K > y && (R = Mu(K * R / y / h) * h), ye(l) || (W = Math.pow(10, l), R = Math.ceil(R * W) / W), n === "ticks" ? (N = Math.floor(b / R) * R, M = Math.ceil(m / R) * R) : (N = b, M = m), k && x && a && t_((r - o) / a, R / 1e3) ? (K = Math.round(Math.min((r - o) / R, u)), R = (r - o) / K, N = o, M = r) : C ? (N = k ? o : N, M = x ? r : M, K = c - 1, R = (M - N) / K) : (K = (M - N) / R, kn(K, Math.round(K), R / 1e3) ? K = Math.round(K) : K = Math.ceil(K));
  const Q = Math.max(Du(R), Du(N));
  W = Math.pow(10, ye(l) ? Q : l), N = Math.round(N * W) / W, M = Math.round(M * W) / W;
  let ie = 0;
  for (k && (f && N !== o ? (s.push({
    value: o
  }), N < o && ie++, kn(Math.round((N + ie * R) * W) / W, o, Nd(o, P, t)) && ie++) : N < o && ie++); ie < K; ++ie) {
    const oe = Math.round((N + ie * R) * W) / W;
    if (x && oe > r)
      break;
    s.push({
      value: oe
    });
  }
  return x && f && M !== r ? s.length && kn(s[s.length - 1].value, r, Nd(r, P, t)) ? s[s.length - 1].value = r : s.push({
    value: r
  }) : (!x || M === r) && s.push({
    value: M
  }), s;
}
function Nd(t, e, { horizontal: s, minRotation: i }) {
  const n = Vt(i), a = (s ? Math.sin(n) : Math.cos(n)) || 1e-3, o = 0.75 * e * ("" + t).length;
  return Math.min(e / a, o);
}
class ro extends gi {
  constructor(e) {
    super(e), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(e, s) {
    return ye(e) || (typeof e == "number" || e instanceof Number) && !isFinite(+e) ? null : +e;
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
    }, a = this._range || this, o = cx(n, a);
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
    return Kn(e, this.chart.options.locale, this.options.ticks.format);
  }
}
class Zr extends ro {
  determineDataLimits() {
    const { min: e, max: s } = this.getMinMax(!0);
    this.min = it(e) ? e : 0, this.max = it(s) ? s : 1, this.handleTickRangeOptions();
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
G(Zr, "id", "linear"), G(Zr, "defaults", {
  ticks: {
    callback: To.formatters.numeric
  }
});
const Bn = (t) => Math.floor(Bs(t)), si = (t, e) => Math.pow(10, Bn(t) + e);
function Ud(t) {
  return t / Math.pow(10, Bn(t)) === 1;
}
function Fd(t, e, s) {
  const i = Math.pow(10, s), n = Math.floor(t / i);
  return Math.ceil(e / i) - n;
}
function ux(t, e) {
  const s = e - t;
  let i = Bn(s);
  for (; Fd(t, e, i) > 10; )
    i++;
  for (; Fd(t, e, i) < 10; )
    i--;
  return Math.min(i, Bn(t));
}
function dx(t, { min: e, max: s }) {
  e = Lt(t.min, e);
  const i = [], n = Bn(e);
  let a = ux(e, s), o = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
  const r = Math.pow(10, a), l = n > a ? Math.pow(10, n) : 0, c = Math.round((e - l) * o) / o, u = Math.floor((e - l) / r / 10) * r * 10;
  let d = Math.floor((c - u) / Math.pow(10, a)), f = Lt(t.min, Math.round((l + u + d * Math.pow(10, a)) * o) / o);
  for (; f < s; )
    i.push({
      value: f,
      major: Ud(f),
      significand: d
    }), d >= 10 ? d = d < 15 ? 15 : 20 : d++, d >= 20 && (a++, d = 2, o = a >= 0 ? 1 : o), f = Math.round((l + u + d * Math.pow(10, a)) * o) / o;
  const h = Lt(t.max, f);
  return i.push({
    value: h,
    major: Ud(h),
    significand: d
  }), i;
}
class el extends gi {
  constructor(e) {
    super(e), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(e, s) {
    const i = ro.prototype.parse.apply(this, [
      e,
      s
    ]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return it(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: e, max: s } = this.getMinMax(!0);
    this.min = it(e) ? Math.max(0, e) : null, this.max = it(s) ? Math.max(0, s) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !it(this._userMin) && (this.min = e === si(this.min, 0) ? si(this.min, -1) : si(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: e, maxDefined: s } = this.getUserBounds();
    let i = this.min, n = this.max;
    const a = (r) => i = e ? i : r, o = (r) => n = s ? n : r;
    i === n && (i <= 0 ? (a(1), o(10)) : (a(si(i, -1)), o(si(n, 1)))), i <= 0 && a(si(n, -1)), n <= 0 && o(si(i, 1)), this.min = i, this.max = n;
  }
  buildTicks() {
    const e = this.options, s = {
      min: this._userMin,
      max: this._userMax
    }, i = dx(s, this);
    return e.bounds === "ticks" && Dh(i, this, "value"), e.reverse ? (i.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), i;
  }
  getLabelForValue(e) {
    return e === void 0 ? "0" : Kn(e, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const e = this.min;
    super.configure(), this._startValue = Bs(e), this._valueRange = Bs(this.max) - Bs(e);
  }
  getPixelForValue(e) {
    return (e === void 0 || e === 0) && (e = this.min), e === null || isNaN(e) ? NaN : this.getPixelForDecimal(e === this.min ? 0 : (Bs(e) - this._startValue) / this._valueRange);
  }
  getValueForPixel(e) {
    const s = this.getDecimalForPixel(e);
    return Math.pow(10, this._startValue + s * this._valueRange);
  }
}
G(el, "id", "logarithmic"), G(el, "defaults", {
  ticks: {
    callback: To.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function tl(t) {
  const e = t.ticks;
  if (e.display && t.display) {
    const s = _t(e.backdropPadding);
    return he(e.font && e.font.size, Xe.font.size) + s.height;
  }
  return 0;
}
function fx(t, e, s) {
  return s = Ye(s) ? s : [
    s
  ], {
    w: y_(t, e.string, s),
    h: s.length * e.lineHeight
  };
}
function Wd(t, e, s, i, n) {
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
function hx(t) {
  const e = {
    l: t.left + t._padding.left,
    r: t.right - t._padding.right,
    t: t.top + t._padding.top,
    b: t.bottom - t._padding.bottom
  }, s = Object.assign({}, e), i = [], n = [], a = t._pointLabels.length, o = t.options.pointLabels, r = o.centerPointLabels ? we / a : 0;
  for (let l = 0; l < a; l++) {
    const c = o.setContext(t.getPointLabelContext(l));
    n[l] = c.padding;
    const u = t.getPointPosition(l, t.drawingArea + n[l], r), d = lt(c.font), f = fx(t.ctx, d, t._pointLabels[l]);
    i[l] = f;
    const h = mt(t.getIndexAngle(l) + r), y = Math.round(Ml(h)), b = Wd(y, u.x, f.w, 0, 180), m = Wd(y, u.y, f.h, 90, 270);
    px(s, e, h, b, m);
  }
  t.setCenterPoint(e.l - s.l, s.r - e.r, e.t - s.t, s.b - e.b), t._pointLabelItems = bx(t, i, n);
}
function px(t, e, s, i, n) {
  const a = Math.abs(Math.sin(s)), o = Math.abs(Math.cos(s));
  let r = 0, l = 0;
  i.start < e.l ? (r = (e.l - i.start) / a, t.l = Math.min(t.l, e.l - r)) : i.end > e.r && (r = (i.end - e.r) / a, t.r = Math.max(t.r, e.r + r)), n.start < e.t ? (l = (e.t - n.start) / o, t.t = Math.min(t.t, e.t - l)) : n.end > e.b && (l = (n.end - e.b) / o, t.b = Math.max(t.b, e.b + l));
}
function mx(t, e, s) {
  const i = t.drawingArea, { extra: n, additionalAngle: a, padding: o, size: r } = s, l = t.getPointPosition(e, i + n + o, a), c = Math.round(Ml(mt(l.angle + at))), u = _x(l.y, r.h, c), d = yx(c), f = vx(l.x, r.w, d);
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
function gx(t, e) {
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
function bx(t, e, s) {
  const i = [], n = t._pointLabels.length, a = t.options, { centerPointLabels: o, display: r } = a.pointLabels, l = {
    extra: tl(a) / 2,
    additionalAngle: o ? we / n : 0
  };
  let c;
  for (let u = 0; u < n; u++) {
    l.padding = s[u], l.size = e[u];
    const d = mx(t, u, l);
    i.push(d), r === "auto" && (d.visible = gx(d, c), d.visible && (c = d));
  }
  return i;
}
function yx(t) {
  return t === 0 || t === 180 ? "center" : t < 180 ? "left" : "right";
}
function vx(t, e, s) {
  return s === "right" ? t -= e : s === "center" && (t -= e / 2), t;
}
function _x(t, e, s) {
  return s === 90 || s === 270 ? t -= e / 2 : (s > 270 || s < 90) && (t -= e), t;
}
function Sx(t, e, s) {
  const { left: i, top: n, right: a, bottom: o } = s, { backdropColor: r } = e;
  if (!ye(r)) {
    const l = di(e.borderRadius), c = _t(e.backdropPadding);
    t.fillStyle = r;
    const u = i - c.left, d = n - c.top, f = a - i + c.width, h = o - n + c.height;
    Object.values(l).some((y) => y !== 0) ? (t.beginPath(), Fn(t, {
      x: u,
      y: d,
      w: f,
      h,
      radius: l
    }), t.fill()) : t.fillRect(u, d, f, h);
  }
}
function kx(t, e) {
  const { ctx: s, options: { pointLabels: i } } = t;
  for (let n = e - 1; n >= 0; n--) {
    const a = t._pointLabelItems[n];
    if (!a.visible)
      continue;
    const o = i.setContext(t.getPointLabelContext(n));
    Sx(s, o, a);
    const r = lt(o.font), { x: l, y: c, textAlign: u } = a;
    pi(s, t._pointLabels[n], l, c + r.lineHeight / 2, r, {
      color: o.color,
      textAlign: u,
      textBaseline: "middle"
    });
  }
}
function kp(t, e, s, i) {
  const { ctx: n } = t;
  if (s)
    n.arc(t.xCenter, t.yCenter, e, 0, Ke);
  else {
    let a = t.getPointPosition(0, e);
    n.moveTo(a.x, a.y);
    for (let o = 1; o < i; o++)
      a = t.getPointPosition(o, e), n.lineTo(a.x, a.y);
  }
}
function Tx(t, e, s, i, n) {
  const a = t.ctx, o = e.circular, { color: r, lineWidth: l } = e;
  !o && !i || !r || !l || s < 0 || (a.save(), a.strokeStyle = r, a.lineWidth = l, a.setLineDash(n.dash || []), a.lineDashOffset = n.dashOffset, a.beginPath(), kp(t, s, o, i), a.closePath(), a.stroke(), a.restore());
}
function xx(t, e, s) {
  return Ks(t, {
    label: s,
    index: e,
    type: "pointLabel"
  });
}
class dn extends ro {
  constructor(e) {
    super(e), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const e = this._padding = _t(tl(this.options) / 2), s = this.width = this.maxWidth - e.width, i = this.height = this.maxHeight - e.height;
    this.xCenter = Math.floor(this.left + s / 2 + e.left), this.yCenter = Math.floor(this.top + i / 2 + e.top), this.drawingArea = Math.floor(Math.min(s, i) / 2);
  }
  determineDataLimits() {
    const { min: e, max: s } = this.getMinMax(!1);
    this.min = it(e) && !isNaN(e) ? e : 0, this.max = it(s) && !isNaN(s) ? s : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / tl(this.options));
  }
  generateTickLabels(e) {
    ro.prototype.generateTickLabels.call(this, e), this._pointLabels = this.getLabels().map((s, i) => {
      const n = Ve(this.options.pointLabels.callback, [
        s,
        i
      ], this);
      return n || n === 0 ? n : "";
    }).filter((s, i) => this.chart.getDataVisibility(i));
  }
  fit() {
    const e = this.options;
    e.display && e.pointLabels.display ? hx(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(e, s, i, n) {
    this.xCenter += Math.floor((e - s) / 2), this.yCenter += Math.floor((i - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(e, s, i, n));
  }
  getIndexAngle(e) {
    const s = Ke / (this._pointLabels.length || 1), i = this.options.startAngle || 0;
    return mt(e * s + Vt(i));
  }
  getDistanceFromCenterForValue(e) {
    if (ye(e))
      return NaN;
    const s = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - e) * s : (e - this.min) * s;
  }
  getValueForDistanceFromCenter(e) {
    if (ye(e))
      return NaN;
    const s = e / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - s : this.min + s;
  }
  getPointLabelContext(e) {
    const s = this._pointLabels || [];
    if (e >= 0 && e < s.length) {
      const i = s[e];
      return xx(this.getContext(), e, i);
    }
  }
  getPointPosition(e, s, i = 0) {
    const n = this.getIndexAngle(e) - at + i;
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
    if (s.pointLabels.display && kx(this, o), n.display && this.ticks.forEach((u, d) => {
      if (d !== 0 || d === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(u.value);
        const f = this.getContext(d), h = n.setContext(f), y = a.setContext(f);
        Tx(this, h, l, o, y);
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
      const c = i.setContext(this.getContext(l)), u = lt(c.font);
      if (a = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        e.font = u.string, o = e.measureText(r.label).width, e.fillStyle = c.backdropColor;
        const d = _t(c.backdropPadding);
        e.fillRect(-o / 2 - d.left, -a - u.size / 2 - d.top, o + d.width, u.size + d.height);
      }
      pi(e, r.label, 0, -a, u, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), e.restore();
  }
  drawTitle() {
  }
}
G(dn, "id", "radialLinear"), G(dn, "defaults", {
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
    callback: To.formatters.numeric
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
}), G(dn, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), G(dn, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const Ro = {
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
}, It = /* @__PURE__ */ Object.keys(Ro);
function Bd(t, e) {
  return t - e;
}
function Hd(t, e) {
  if (ye(e))
    return null;
  const s = t._adapter, { parser: i, round: n, isoWeekday: a } = t._parseOpts;
  let o = e;
  return typeof i == "function" && (o = i(o)), it(o) || (o = typeof i == "string" ? s.parse(o, i) : s.parse(o)), o === null ? null : (n && (o = n === "week" && (Wi(a) || a === !0) ? s.startOf(o, "isoWeek", a) : s.startOf(o, n)), +o);
}
function jd(t, e, s, i) {
  const n = It.length;
  for (let a = It.indexOf(t); a < n - 1; ++a) {
    const o = Ro[It[a]], r = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
    if (o.common && Math.ceil((s - e) / (r * o.size)) <= i)
      return It[a];
  }
  return It[n - 1];
}
function Ax(t, e, s, i, n) {
  for (let a = It.length - 1; a >= It.indexOf(s); a--) {
    const o = It[a];
    if (Ro[o].common && t._adapter.diff(n, i, o) >= e - 1)
      return o;
  }
  return It[s ? It.indexOf(s) : 0];
}
function Px(t) {
  for (let e = It.indexOf(t) + 1, s = It.length; e < s; ++e)
    if (Ro[It[e]].common)
      return It[e];
}
function zd(t, e, s) {
  if (!s)
    t[e] = !0;
  else if (s.length) {
    const { lo: i, hi: n } = Dl(s, e), a = s[i] >= e ? s[i] : s[n];
    t[a] = !0;
  }
}
function Cx(t, e, s, i) {
  const n = t._adapter, a = +n.startOf(e[0].value, i), o = e[e.length - 1].value;
  let r, l;
  for (r = a; r <= o; r = +n.add(r, 1, i))
    l = s[r], l >= 0 && (e[l].major = !0);
  return e;
}
function Vd(t, e, s) {
  const i = [], n = {}, a = e.length;
  let o, r;
  for (o = 0; o < a; ++o)
    r = e[o], n[r] = o, i.push({
      value: r,
      major: !1
    });
  return a === 0 || !s ? i : Cx(t, i, n, s);
}
class Hn extends gi {
  constructor(e) {
    super(e), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(e, s = {}) {
    const i = e.time || (e.time = {}), n = this._adapter = new LS._date(e.adapters.date);
    n.init(s), Sn(i.displayFormats, n.formats()), this._parseOpts = {
      parser: i.parser,
      round: i.round,
      isoWeekday: i.isoWeekday
    }, super.init(e), this._normalized = s.normalized;
  }
  parse(e, s) {
    return e === void 0 ? null : Hd(this, e);
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
    (!o || !r) && (l(this._getLabelBounds()), (e.bounds !== "ticks" || e.ticks.source !== "labels") && l(this.getMinMax(!1))), n = it(n) && !isNaN(n) ? n : +s.startOf(Date.now(), i), a = it(a) && !isNaN(a) ? a : +s.endOf(Date.now(), i) + 1, this.min = Math.min(n, a - 1), this.max = Math.max(n + 1, a);
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
    const a = this.min, o = this.max, r = a_(n, a, o);
    return this._unit = s.unit || (i.autoSkip ? jd(s.minUnit, this.min, this.max, this._getLabelCapacity(a)) : Ax(this, r.length, s.minUnit, this.min, this.max)), this._majorUnit = !i.major.enabled || this._unit === "year" ? void 0 : Px(this._unit), this.initOffsets(n), e.reverse && r.reverse(), Vd(this, r, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((e) => +e.value));
  }
  initOffsets(e = []) {
    let s = 0, i = 0, n, a;
    this.options.offset && e.length && (n = this.getDecimalForValue(e[0]), e.length === 1 ? s = 1 - n : s = (this.getDecimalForValue(e[1]) - n) / 2, a = this.getDecimalForValue(e[e.length - 1]), e.length === 1 ? i = a : i = (a - this.getDecimalForValue(e[e.length - 2])) / 2);
    const o = e.length < 3 ? 0.5 : 0.25;
    s = ut(s, 0, o), i = ut(i, 0, o), this._offsets = {
      start: s,
      end: i,
      factor: 1 / (s + 1 + i)
    };
  }
  _generate() {
    const e = this._adapter, s = this.min, i = this.max, n = this.options, a = n.time, o = a.unit || jd(a.minUnit, s, i, this._getLabelCapacity(s)), r = he(n.ticks.stepSize, 1), l = o === "week" ? a.isoWeekday : !1, c = Wi(l) || l === !0, u = {};
    let d = s, f, h;
    if (c && (d = +e.startOf(d, "isoWeek", l)), d = +e.startOf(d, c ? "day" : o), e.diff(i, s, o) > 1e5 * r)
      throw new Error(s + " and " + i + " are too far apart with stepSize of " + r + " " + o);
    const y = n.ticks.source === "data" && this.getDataTimestamps();
    for (f = d, h = 0; f < i; f = +e.add(f, r, o), h++)
      zd(u, f, y);
    return (f === i || n.bounds === "ticks" || h === 1) && zd(u, f, y), Object.keys(u).sort(Bd).map((b) => +b);
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
      return Ve(o, [
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
    const s = this.options.time, i = s.displayFormats, n = i[s.unit] || i.millisecond, a = this._tickFormatFunction(e, 0, Vd(this, [
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
      e.push(Hd(this, n[s]));
    return this._cache.labels = this._normalized ? e : this.normalize(e);
  }
  normalize(e) {
    return Oh(e.sort(Bd));
  }
}
G(Hn, "id", "time"), G(Hn, "defaults", {
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
function Ca(t, e, s) {
  let i = 0, n = t.length - 1, a, o, r, l;
  s ? (e >= t[i].pos && e <= t[n].pos && ({ lo: i, hi: n } = ks(t, "pos", e)), { pos: a, time: r } = t[i], { pos: o, time: l } = t[n]) : (e >= t[i].time && e <= t[n].time && ({ lo: i, hi: n } = ks(t, "time", e)), { time: a, pos: r } = t[i], { time: o, pos: l } = t[n]);
  const c = o - a;
  return c ? r + (l - r) * (e - a) / c : r;
}
class sl extends Hn {
  constructor(e) {
    super(e), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const e = this._getTimestampsForTable(), s = this._table = this.buildLookupTable(e);
    this._minPos = Ca(s, this.min), this._tableRange = Ca(s, this.max) - this._minPos, super.initOffsets(e);
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
    return (Ca(this._table, e) - this._minPos) / this._tableRange;
  }
  getValueForPixel(e) {
    const s = this._offsets, i = this.getDecimalForPixel(e) / s.factor - s.end;
    return Ca(this._table, i * this._tableRange + this._minPos, !0);
  }
}
G(sl, "id", "timeseries"), G(sl, "defaults", Hn.defaults);
var wx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  CategoryScale: Qr,
  LinearScale: Zr,
  LogarithmicScale: el,
  RadialLinearScale: dn,
  TimeScale: Hn,
  TimeSeriesScale: sl
});
const Rx = [
  OS,
  uT,
  ax,
  wx
];
Ue.register(...Rx);
const il = /* @__PURE__ */ new Set();
let Tp, xp;
function Sr() {
  const t = xp ?? window.StardewScene.resolveScene(Tp).phase === "night";
  document.body.classList.contains(t ? "night" : "light") || (document.body.classList.toggle("light", !t), document.body.classList.toggle("night", t), il.forEach((e) => e()));
}
function Mx(t) {
  const e = JSON.parse(sessionStorage.getItem("farm-detail-origin") || "null"), s = (e == null ? void 0 : e.hash) === location.hash && e.page === t.pathname + t.search ? e.scene : null;
  Tp = (s == null ? void 0 : s.place) ?? window.estateStart.visitor, xp = s ? s.phaseOverride : window.estateStart.demo ? window.estateStart.night : null, Sr(), window.setInterval(Sr, 3e4), window.addEventListener("pageshow", Sr);
}
function Dx(t) {
  il.add(t), yo(() => il.delete(t));
}
function kr(t, e = null) {
  const s = Number(t);
  return Number.isFinite(s) ? s : e;
}
function Ix(t, e, { replayCachedReport: s = !1, reportAgeMs: i = 0 } = {}) {
  const n = kr(t);
  if (n === null) return null;
  if (s) {
    const o = Math.max(0, kr(i, 0));
    return n + o;
  }
  const a = kr(e);
  return a === null ? n : Math.max(n, a);
}
const Ex = { class: "container" }, Ox = { class: "terminal-header" }, Lx = { class: "terminal-title" }, Nx = ["aria-label", "title"], Ux = {
  key: 0,
  class: "loading-state"
}, Fx = { class: "loading-text" }, Wx = { class: "nav-bar" }, Bx = {
  class: "time-selector",
  id: "time-selector"
}, Hx = ["aria-pressed", "onClick"], jx = {
  key: 0,
  class: "monitor-access"
}, zx = { role: "status" }, Vx = { class: "host-card" }, qx = { class: "host-card-header" }, Gx = { class: "host-name" }, Kx = { class: "country-os-icons" }, $x = ["src", "alt"], Jx = {
  key: 1,
  class: "flag-fallback"
}, Yx = ["src", "alt"], Xx = {
  class: "sysinfo-grid",
  id: "info-panel"
}, Qx = { class: "sysinfo-item" }, Zx = { class: "sysinfo-label" }, e0 = { class: "sysinfo-value" }, t0 = {
  key: 0,
  class: "sysinfo-item"
}, s0 = { class: "sysinfo-label" }, i0 = { class: "sysinfo-item sysinfo-wide" }, n0 = { class: "sysinfo-label" }, a0 = { class: "sysinfo-value sysinfo-small" }, o0 = {
  key: 1,
  class: "sysinfo-item"
}, r0 = { class: "sysinfo-label" }, l0 = { class: "sysinfo-value sysinfo-small" }, c0 = { class: "sysinfo-item sysinfo-wide" }, u0 = { class: "sysinfo-label" }, d0 = { class: "sysinfo-value sysinfo-small" }, f0 = {
  key: 2,
  class: "sysinfo-item"
}, h0 = { class: "sysinfo-label" }, p0 = { class: "sysinfo-value sysinfo-small" }, m0 = { class: "sysinfo-item" }, g0 = { class: "sysinfo-label" }, b0 = { class: "sysinfo-value" }, y0 = { class: "sysinfo-item" }, v0 = { class: "sysinfo-label" }, _0 = { class: "sysinfo-value highlight" }, S0 = { class: "sysinfo-item" }, k0 = { class: "sysinfo-label" }, T0 = { class: "sysinfo-value sysinfo-small" }, x0 = { class: "measure" }, A0 = { class: "measure" }, P0 = { class: "sysinfo-item" }, C0 = { class: "sysinfo-label" }, w0 = { class: "sysinfo-value sysinfo-small" }, R0 = { class: "measure" }, M0 = { class: "measure" }, D0 = {
  key: 3,
  class: "sysinfo-item"
}, I0 = { class: "sysinfo-label" }, E0 = { class: "sysinfo-value sysinfo-small" }, O0 = { class: "measure" }, L0 = { class: "measure" }, N0 = {
  key: 4,
  class: "sysinfo-item"
}, U0 = { class: "sysinfo-label" }, F0 = { class: "sysinfo-value sysinfo-small" }, W0 = { class: "sysinfo-item" }, B0 = { class: "sysinfo-label" }, H0 = { class: "sysinfo-value sysinfo-small" }, j0 = { class: "sysinfo-item" }, z0 = { class: "sysinfo-label" }, V0 = { class: "sysinfo-value sysinfo-small" }, q0 = {
  key: 1,
  class: "history-note",
  role: "status"
}, G0 = { class: "charts-container" }, K0 = { class: "chart-card-header" }, $0 = { class: "chart-title" }, J0 = { class: "chart-header-actions" }, Y0 = { class: "chart-current-value" }, X0 = { class: "chart-body" }, Q0 = { class: "chart-card-header" }, Z0 = { class: "chart-title" }, eA = { class: "chart-header-actions" }, tA = { class: "chart-current-value-container" }, sA = { class: "chart-current-value" }, iA = { class: "chart-subtitle" }, nA = { class: "chart-body" }, aA = { class: "chart-card-header" }, oA = { class: "chart-title" }, rA = { class: "chart-header-actions" }, lA = { class: "net-indicator" }, cA = { class: "net-down" }, uA = { class: "net-up" }, dA = { class: "chart-body" }, fA = { class: "chart-card-header" }, hA = { class: "chart-title" }, pA = { class: "chart-header-actions" }, mA = { class: "load-avg-row" }, gA = { class: "load-1m" }, bA = { class: "load-5m" }, yA = { class: "load-15m" }, vA = { class: "chart-body" }, _A = { class: "chart-card-header" }, SA = { class: "chart-title" }, kA = { class: "chart-header-actions" }, TA = { class: "chart-current-value-container" }, xA = { class: "chart-current-value" }, AA = { class: "chart-subtitle" }, PA = { class: "chart-body" }, CA = { class: "chart-card-header disk-io-header" }, wA = { class: "chart-title" }, RA = { class: "chart-header-actions" }, MA = { class: "ping-indicator" }, DA = { class: "net-down" }, IA = { class: "net-up" }, EA = { class: "conn-tcp" }, OA = { class: "conn-udp" }, LA = { class: "chart-body" }, NA = { class: "chart-card-header" }, UA = { class: "chart-title" }, FA = { class: "chart-header-actions" }, WA = { class: "chart-current-value" }, BA = { class: "chart-body" }, HA = { class: "chart-card-header" }, jA = { class: "chart-title" }, zA = { class: "chart-header-actions" }, VA = { class: "chart-current-value" }, qA = { class: "chart-body" }, GA = { class: "chart-card-header" }, KA = { class: "chart-title" }, $A = { class: "chart-header-actions" }, JA = { class: "chart-current-value" }, YA = { class: "chart-body" }, XA = { class: "chart-card-header" }, QA = { class: "chart-title" }, ZA = { class: "chart-header-actions" }, eP = { class: "chart-current-value" }, tP = { class: "chart-body" }, sP = { class: "chart-card-header" }, iP = { class: "chart-title" }, nP = { class: "chart-header-actions" }, aP = { class: "chart-current-value" }, oP = { class: "chart-body" }, rP = { class: "chart-card-header" }, lP = { class: "chart-title" }, cP = { class: "chart-header-actions" }, uP = { class: "net-indicator" }, dP = { class: "conn-tcp" }, fP = { class: "conn-udp" }, hP = { class: "chart-body" }, pP = { class: "chart-card-header" }, mP = { class: "chart-title" }, gP = { class: "chart-header-actions" }, bP = { class: "ping-indicator" }, yP = { class: "chart-body" }, vP = { class: "chart-card-header" }, _P = { class: "chart-title" }, SP = { class: "chart-header-actions" }, kP = { class: "ping-indicator" }, TP = { class: "chart-body" }, xP = { class: "modal-dialog" }, AP = { class: "modal-header" }, PP = { class: "modal-body-content" }, CP = { class: "modal-body-text" }, wP = { class: "modal-footer flex-justify-between" }, wa = 0.167, RP = 12e4, MP = 3e4, qd = {
  __name: "ServerDetail",
  setup(t) {
    const e = Uy(), s = Ny(), i = Et("appConfig", null), n = Et("initialServer"), a = ft()[0], o = (a === location.origin ? "" : a) + "/admin#/admin", r = window.farmText("管理后台"), l = Et("demoHistory", null), c = (p) => {
      var g;
      return ![!1, 0, "0", "false"].includes(((g = n.sysConfig) == null ? void 0 : g[p]) ?? (i == null ? void 0 : i[p]));
    }, u = /* @__PURE__ */ re("");
    let d = 0, f = e.params.id;
    f || (f = new URLSearchParams(window.location.search).get("id")), f || s.push("/");
    const h = /* @__PURE__ */ re(0), y = (p) => new URL("/" + p, ft()[h.value] || location.origin).href, b = e.query.apiIndex;
    b != null && !isNaN(parseInt(b)) && (h.value = parseInt(b));
    const m = /* @__PURE__ */ re({}), k = /* @__PURE__ */ re(wa), x = /* @__PURE__ */ re("—"), C = /* @__PURE__ */ re(null), P = /* @__PURE__ */ re(!1), R = /* @__PURE__ */ re(!1), W = /* @__PURE__ */ re(0), N = /* @__PURE__ */ re(!0), M = xh(), K = {
      props: {
        expanded: { type: Boolean, default: !1 }
      },
      emits: ["toggle"],
      setup(p, { emit: g }) {
        const _ = () => p.expanded ? M.value.collapseChart : M.value.expandChart;
        return () => ss("button", {
          type: "button",
          class: ["chart-expand-btn", { active: p.expanded }],
          title: _(),
          "aria-label": _(),
          "aria-pressed": p.expanded ? "true" : "false",
          onClick: () => g("toggle")
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
    }, Q = [
      { field: "ping_ct", lossField: "loss_ct", className: "ping-ct", datasetIndex: 0 },
      { field: "ping_cu", lossField: "loss_cu", className: "ping-cu", datasetIndex: 1 },
      { field: "ping_cm", lossField: "loss_cm", className: "ping-cm", datasetIndex: 2 },
      { field: "ping_bd", lossField: "loss_bd", className: "ping-bd", datasetIndex: 3 },
      { field: "ping_node_1", lossField: "loss_node_1", className: "ping-node-1", datasetIndex: 4 },
      { field: "ping_node_2", lossField: "loss_node_2", className: "ping-node-2", datasetIndex: 5 },
      { field: "ping_node_3", lossField: "loss_node_3", className: "ping-node-3", datasetIndex: 6 },
      { field: "ping_node_4", lossField: "loss_node_4", className: "ping-node-4", datasetIndex: 7 }
    ], ie = (p) => String((i == null ? void 0 : i[p.startsWith("node_") ? `${p}_name` : `custom_${p}_name`]) || (p === "bd" ? "BGP" : M.value[`custom${p.toUpperCase().charAt(0)}${p.slice(1)}`]) || p.toUpperCase()), oe = ["read_bps", "write_bps", "read_iops", "write_iops", "await_ms", "util"], Ae = Object.freeze(Object.fromEntries(oe.map((p) => [p, null]))), qe = (p, g) => Object.prototype.hasOwnProperty.call(p, g), ge = (p) => p && typeof p == "object" && !Array.isArray(p), ce = (p) => {
      if (p == null || p === "") return null;
      const g = Number.parseFloat(p);
      return Number.isFinite(g) ? g : null;
    }, B = (p) => ge(p) ? oe.some((g) => qe(p, g) && ce(p[g]) !== null) : !1, V = (p) => ge(p) ? B(p.disk) : !1, le = (p) => p === "disk", Pe = (p, g) => {
      if (!p || typeof p != "object" || !B(p.disk)) return null;
      const _ = qe(p.disk, g) ? p.disk[g] : null;
      return ce(_);
    }, Le = (p) => Object.fromEntries(
      oe.map((g) => [g, Pe(p, g)])
    ), Fe = (p) => (g) => Pe(g, p), ke = (p, g = "") => Z(p, 1, g), Ze = (p) => {
      const g = Number.parseFloat(p);
      if (!Number.isFinite(g)) return "0";
      const _ = Math.abs(g);
      return _ >= 1e4 ? `${(g / 1e3).toFixed(0)}k` : _ >= 1e3 ? `${(g / 1e3).toFixed(1)}k` : _ >= 100 ? g.toFixed(0) : g.toFixed(1);
    }, St = be(() => [
      { hours: wa, label: "10m" },
      { hours: 0.5, label: "30m" },
      { hours: 1, label: "1h" },
      { hours: 6, label: "6h" },
      { hours: 12, label: "12h" },
      { hours: 24, label: "24h" },
      { hours: 48, label: "2d" },
      { hours: 96, label: "4d" },
      { hours: 168, label: "7d" }
    ]), He = be(() => m.value.is_online == null ? $y(m.value) : ![!1, 0, "false", "0"].includes(m.value.is_online)), O = /* @__PURE__ */ re(!1), Y = window.farmText;
    function H(p) {
      if (typeof p != "number" && (typeof p != "string" || !p.trim())) return null;
      const g = Number(p);
      return Number.isFinite(g) && g >= 0 ? g : null;
    }
    function Z(p, g, _ = "") {
      const w = H(p);
      return w === null ? "—" : w.toFixed(g) + _;
    }
    function ee(p, g = 1, _ = "") {
      const w = H(p);
      return w === null ? "—" : Ky(w * g).replace(" ", " ") + _;
    }
    function v(p, g) {
      const _ = H(p), w = H(g);
      return _ === null || !w ? null : 100 * _ / w;
    }
    const T = be(() => Z(m.value.cpu, 1, "%")), A = (p) => {
      if (!p) return [];
      if (Array.isArray(p)) return p;
      if (typeof p == "string")
        try {
          const g = JSON.parse(p);
          return Array.isArray(g) ? g : [];
        } catch {
          return [];
        }
      return [];
    }, D = be(() => A(m.value.gpu_info)), L = be(() => {
      const p = D.value;
      return p.length === 0 ? m.value.gpu_info || "—" : p.map((g) => g.name || g.id || "GPU").join(" / ");
    }), E = be(() => {
      const p = D.value;
      if (p.length === 0) return "—";
      const g = (_) => {
        if (_ == null) return "—";
        const w = parseFloat(_);
        return Number.isNaN(w) ? "—" : `${w.toFixed(1)}%`;
      };
      return p.length === 1 ? g(p[0].info) : p.map((_) => g(_.info)).join(" / ");
    }), j = (p, g) => {
      if (!p) return null;
      const _ = parseFloat(p[g]);
      return Number.isNaN(_) ? null : _;
    }, q = be(() => D.value.some((p) => j(p, "mem_used") !== null)), z = be(() => D.value.some((p) => j(p, "sm_clock") !== null)), U = be(() => D.value.some((p) => j(p, "power") !== null)), ae = be(() => {
      const p = D.value;
      return p.length === 0 ? "—" : p.map((g) => {
        const _ = j(g, "mem_used");
        if (_ === null) return "—";
        const w = j(g, "mem_total");
        return w !== null ? `${ee(_ * 1024 * 1024)} / ${ee(w * 1024 * 1024)}` : ee(_ * 1024 * 1024);
      }).join(" / ");
    }), $ = be(() => {
      const p = D.value;
      return p.length === 0 ? "—" : p.map((g) => {
        const _ = j(g, "sm_clock");
        return _ === null ? "—" : `${Math.round(_)} MHz`;
      }).join(" / ");
    }), ne = be(() => {
      const p = D.value;
      return p.length === 0 ? "—" : p.map((g) => {
        const _ = j(g, "power");
        return _ === null ? "—" : `${_.toFixed(1)} W`;
      }).join(" / ");
    }), ue = be(() => Z(v(m.value.ram_used, m.value.ram_total), 2, "%")), Se = be(() => Z(v(m.value.disk_used, m.value.disk_total), 2, "%")), Te = be(() => V(m.value) ? Le(m.value) : Ae), Re = be(() => D.value.length > 0), je = be(() => {
      const p = /* @__PURE__ */ new Date(), g = String(m.value.expire_date || "").slice(0, 10);
      return (Date.parse(g + "T00:00:00Z") - Date.UTC(p.getFullYear(), p.getMonth(), p.getDate())) / 864e5;
    }), ot = be(() => je.value < 0), Wt = be(() => Number.isFinite(je.value) ? window.farmText(je.value < 0 ? "已过期 {n} 天" : je.value === 0 ? "今天到期" : "剩余 {n} 天", { n: Math.abs(je.value) }) : "—"), kt = /* @__PURE__ */ re(null), Yt = /* @__PURE__ */ re(null), $s = /* @__PURE__ */ re(null), ct = /* @__PURE__ */ re(null), Tt = /* @__PURE__ */ re(null), Js = /* @__PURE__ */ re(null), Ys = /* @__PURE__ */ re(null), $n = /* @__PURE__ */ re(null), Jn = /* @__PURE__ */ re(null), Yn = /* @__PURE__ */ re(null), Xn = /* @__PURE__ */ re(null), Qn = /* @__PURE__ */ re(null), Zn = /* @__PURE__ */ re(null), ea = /* @__PURE__ */ re(null), ta = /* @__PURE__ */ re(!1), sa = /* @__PURE__ */ re(!1), te = {}, ia = /* @__PURE__ */ re(!1), na = /* @__PURE__ */ re({}), zl = /* @__PURE__ */ re({}), Vl = /* @__PURE__ */ re(null), ql = /* @__PURE__ */ re(null), Gl = /* @__PURE__ */ re(null), Kl = /* @__PURE__ */ re(null), $l = /* @__PURE__ */ re(null), Jl = /* @__PURE__ */ re(null), Yl = /* @__PURE__ */ re(null), Xl = /* @__PURE__ */ re(null), Ql = /* @__PURE__ */ re(null), Zl = /* @__PURE__ */ re(null), ec = /* @__PURE__ */ re(null), tc = /* @__PURE__ */ re(null), sc = /* @__PURE__ */ re(null), ic = /* @__PURE__ */ re(null), nc = /* @__PURE__ */ re(null), ac = /* @__PURE__ */ re(null);
    let aa = !1, oc = !1, zi = 0;
    const Ne = (p) => !!na.value[p], Pp = (p) => {
      Ai(() => {
        requestAnimationFrame(() => {
          const g = te[p];
          g && (typeof g.resize == "function" && g.resize(), g.update("none"));
        });
      });
    }, Rt = (p) => {
      na.value = {
        ...na.value,
        [p]: !na.value[p]
      }, Pp(p);
    }, Cp = () => {
      sa.value || (sa.value = !0, Ai(() => {
        te.diskIo && (typeof te.diskIo.resize == "function" && te.diskIo.resize(), te.diskIo.update("none"));
      }));
    }, oa = (p) => {
      const g = V(p);
      return g && Cp(), g;
    }, wp = {
      ping_ct: Vl,
      ping_cu: ql,
      ping_cm: Gl,
      ping_bd: Kl,
      ping_node_1: $l,
      ping_node_2: Jl,
      ping_node_3: Yl,
      ping_node_4: Xl
    }, Rp = {
      loss_ct: Ql,
      loss_cu: Zl,
      loss_cm: ec,
      loss_bd: tc,
      loss_node_1: sc,
      loss_node_2: ic,
      loss_node_3: nc,
      loss_node_4: ac
    }, rc = be(() => Q.filter((p) => {
      const g = m.value[p.field];
      return g !== void 0 && !Xi(g);
    })), Mp = be(() => rc.value.length > 0), Dp = be(() => rc.value.map((p) => ({
      ...p,
      label: ie(p.field.replace("ping_", "")),
      value: wp[p.field].value
    }))), lc = be(() => Q.filter((p) => m.value[p.field] !== void 0 && !Xi(m.value[p.field]) && (zl.value[p.lossField] || Do(m.value[p.lossField])))), Ip = be(() => lc.value.map((p) => ({
      ...p,
      field: p.lossField,
      label: ie(p.field.replace("ping_", "")),
      value: Rp[p.lossField].value
    })).filter((p) => p.value !== null)), Ep = be(() => {
      const { net_rx_monthly: p, net_tx_monthly: g, traffic_calc_type: _ } = m.value;
      return _ !== "ul" && H(p) === null || _ !== "dl" && H(g) === null ? null : bv(m.value);
    }), cc = () => {
      try {
        for (const p of Object.keys(te))
          te[p] && (te[p].destroy(), te[p] = null);
      } catch {
      }
    }, Vi = (p) => {
      const g = Array.isArray(p) ? p : String(p ?? "").trim().split(/[ ,]+/);
      return [0, 1, 2].map((_) => H(g[_]));
    }, Do = (p) => !Xi(p) && p !== null && p !== void 0 && p !== "" && !Number.isNaN(parseFloat(p)), Op = be(() => lc.value.length > 0), uc = (p) => {
      if (!p) return null;
      if (typeof p == "string" && !/^\d+$/.test(p)) {
        const g = new Date(p);
        return isNaN(g.getTime()) ? null : g.getTime();
      } else {
        let g = parseInt(p);
        return isNaN(g) ? null : (g < 1e12 && (g *= 1e3), g);
      }
    }, Lp = (p) => {
      const g = uc(p);
      if (!g) return "—";
      const _ = Date.now() - g;
      if (_ < 0) return "—";
      const w = Math.floor(_ / 1e3), I = Math.floor(w / 86400), X = Math.floor(w % 86400 / 3600), J = Math.floor(w % 3600 / 60), me = String(X).padStart(2, "0"), de = String(J).padStart(2, "0");
      return I > 0 ? `${I}${I === 1 ? M.value.day : M.value.days}, ${me}:${de}` : `${me}:${de}`;
    }, Io = (p) => {
      const g = uc(p);
      return g ? Vy(g) : "—";
    }, dc = (p, g) => {
      const _ = parseInt(p.slice(1, 3), 16), w = parseInt(p.slice(3, 5), 16), I = parseInt(p.slice(5, 7), 16);
      return `rgba(${_}, ${w}, ${I}, ${g})`;
    }, Xt = (p) => {
      const g = Number((p == null ? void 0 : p.x) ?? p);
      return Number.isFinite(g) ? g : 0;
    }, Ds = (p, g) => ({
      x: String(p),
      y: g
    }), Np = (p) => {
      const g = Number(p);
      if (!Number.isFinite(g)) return String(p || "");
      const _ = new Date(g), w = (X) => String(X).padStart(2, "0"), I = `${w(_.getHours())}:${w(_.getMinutes())}`;
      return k.value <= 1 ? `${I}:${w(_.getSeconds())}` : k.value <= 3 ? I : `${w(_.getMonth() + 1)}-${w(_.getDate())} ${I}`;
    }, qi = (p) => {
      if (!p) return;
      const g = /* @__PURE__ */ new Set(), _ = [];
      for (const w of p.data.datasets || [])
        for (const I of w.data || []) {
          const X = Xt(I);
          if (!X) continue;
          const J = String(X);
          g.has(J) || (g.add(J), _.push(J));
        }
      _.sort((w, I) => Number(w) - Number(I)), p.data.labels = _;
    }, Eo = (p) => document.body.classList.contains("night") ? p : "#" + p.slice(1).match(/../g).map((g) => Math.round(parseInt(g, 16) * 0.54).toString(16).padStart(2, "0")).join(""), et = (p, g, _ = {}) => ({
      label: p,
      data: [],
      farmColor: g,
      borderColor: Eo(g),
      backgroundColor: _.fill ? dc(Eo(g), 0.05) : "transparent",
      fill: !!_.fill,
      tension: _.tension ?? 0.4,
      borderWidth: 1.5,
      pointRadius: 0,
      hoverRadius: 5,
      spanGaps: !1,
      ..._
    }), fc = ["#ff7b72", "#79c0ff", "#d2a8ff", "#7ee787", "#ffa657", "#ff7b72", "#56d4dd", "#e3b341"], Oo = ["gpu", "gpuMem", "gpuClock", "gpuPower"], hc = {
      gpu: "info",
      gpuMem: "mem_used",
      gpuClock: "sm_clock",
      gpuPower: "power"
    }, Up = (p, g) => (_) => {
      const I = A(_.gpu_info).find((X) => String(X.id) === String(p));
      return I ? j(I, hc[g]) : null;
    }, Fp = [
      { key: "cpu", ref: () => kt.value, datasets: [et("CPU", "#00d4aa", { fill: !0 })], unit: "%" },
      { key: "gpu", ref: () => Yt.value, datasets: [], unit: "%", legend: !0 },
      { key: "gpuMem", ref: () => $s.value, datasets: [], legend: !0, tickFormat: (p) => ee(p * 1024 * 1024) },
      { key: "gpuClock", ref: () => ct.value, datasets: [], unit: " MHz", legend: !0 },
      { key: "gpuPower", ref: () => Tt.value, datasets: [], unit: " W", legend: !0 },
      { key: "ram", ref: () => Js.value, datasets: [et("Memory", "#b392f0", { fill: !0 }), et("Swap", "#ffb870", { fill: !0 })], unit: "%", legend: !0 },
      { key: "disk", ref: () => Ys.value, datasets: [et("Disk", "#39d2c0", { fill: !0 })], unit: "%" },
      {
        key: "diskIo",
        ref: () => $n.value,
        datasets: [
          et("Read", "#00d4aa", { fill: !0, yAxisID: "y", formatValue: (p) => ee(p) + "/s" }),
          et("Write", "#ffb870", { fill: !0, yAxisID: "y", formatValue: (p) => ee(p) + "/s" }),
          et("Read IOPS", "#4da6ff", { yAxisID: "y1", borderDash: [5, 4], formatValue: (p) => `${ke(p)} ops/s` }),
          et("Write IOPS", "#b392f0", { yAxisID: "y1", borderDash: [5, 4], formatValue: (p) => `${ke(p)} ops/s` }),
          et("await", "#f778ba", { yAxisID: "y1", borderDash: [2, 4], formatValue: (p) => `${ke(p)} ms` }),
          et("util", "#ff7b72", { yAxisID: "y1", borderDash: [8, 4], formatValue: (p) => `${ke(p)}%` })
        ],
        legend: !0,
        tickFormat: (p) => ee(p),
        extraScales: (p) => ({
          y1: {
            beginAtZero: !0,
            position: "right",
            grid: { color: p.grid, drawBorder: !1, drawOnChartArea: !1, tickLength: 0 },
            ticks: {
              color: p.axis,
              font: { size: 9, family: "'JetBrains Mono', monospace" },
              padding: 8,
              callback: Ze
            }
          }
        })
      },
      { key: "proc", ref: () => Yn.value, datasets: [et("Processes", "#f778ba", { fill: !0 })] },
      { key: "net", ref: () => Jn.value, datasets: [et("Download", "#00d4aa", { fill: !0 }), et("Upload", "#4da6ff", { fill: !0 })], legend: !0, formatValue: (p) => ee(p) + "/s", tickFormat: (p) => ee(p) },
      { key: "conn", ref: () => Xn.value, datasets: [et("TCP", "#b392f0"), et("UDP", "#f778ba")], legend: !0 },
      { key: "ping", ref: () => Qn.value, datasets: ["ct", "cu", "cm", "bd", "node_1", "node_2", "node_3", "node_4"].map((p, g) => et(ie(p), ["#00d4aa", "#ffb870", "#4da6ff", "#b392f0", "#ff7b72", "#79c0ff", "#7ee787", "#ffa657"][g], { tension: 0.3 })), unit: " ms", legend: !0 },
      { key: "loss", ref: () => Zn.value, datasets: ["ct", "cu", "cm", "bd", "node_1", "node_2", "node_3", "node_4"].map((p, g) => et(ie(p), ["#00d4aa", "#ffb870", "#4da6ff", "#b392f0", "#ff7b72", "#79c0ff", "#7ee787", "#ffa657"][g], { tension: 0.3 })), unit: "%", legend: !0 },
      { key: "load", ref: () => ea.value, datasets: [et(M.value.load1m || "1 Min", "#00d4aa", { tension: 0.3 }), et(M.value.load5m || "5 Min", "#ffb870", { tension: 0.3 }), et(M.value.load15m || "15 Min", "#4da6ff", { tension: 0.3 })], legend: !0 }
    ], Lo = () => {
      for (const p of ["ping", "loss"]) {
        const g = te[p];
        if (g) {
          for (const _ of Q) {
            const w = g.data.datasets[_.datasetIndex];
            if (!w) continue;
            const I = m.value[_.field], X = Xi(I), J = I === void 0;
            w.disabledProbe = X, w.noDataProbe = J, (X || J) && (w.hidden = !0, typeof g.setDatasetVisibility == "function" && g.setDatasetVisibility(_.datasetIndex, !1));
          }
          g.update("none");
        }
      }
    };
    let No = "";
    const Uo = () => {
      const p = D.value, g = p.map((_) => String(_.id ?? "")).join(",");
      if (g !== No) {
        No = g;
        for (const _ of Oo) {
          const w = te[_];
          if (!w) continue;
          let I = p.map((X, J) => {
            const me = _ === "gpuMem" ? { fill: !0, formatValue: (ve) => ee(ve * 1024 * 1024) } : { fill: !0 }, de = et(X.name || `GPU ${J}`, fc[J % fc.length], me);
            return de.gpuId = String(X.id ?? J), de;
          });
          I.length === 0 && I.push(et("GPU", "#ff7b72", { fill: !0 })), w.data.datasets = I, w.update("none");
        }
      }
    }, bi = (p, g) => typeof window > "u" ? g : window.getComputedStyle(document.body).getPropertyValue(p).trim() || g, Wp = () => typeof document < "u" && document.body.classList.contains("light"), pc = () => ({
      axis: bi("--text-muted", Wp() ? "rgba(10, 14, 20, 0.8)" : "rgba(211, 218, 227, 0.8)"),
      grid: bi("--border-color", "rgba(30, 42, 58, 0.5)"),
      tooltipBg: bi("--bg-primary", "rgba(10, 14, 20, 0.95)"),
      tooltipTitle: bi("--accent-green", "#00d4aa"),
      tooltipBody: bi("--text-primary", "#d3dae3"),
      tooltipBorder: bi("--border-color", "#1e2a3a")
    }), Bp = () => {
      cc();
      const p = pc();
      Ue.defaults.font.family = getComputedStyle(document.body).fontFamily, Ue.defaults.font.size = 10, Ue.defaults.color = p.axis, Ue.defaults.plugins.tooltip.backgroundColor = p.tooltipBg, Ue.defaults.plugins.tooltip.titleColor = p.tooltipTitle, Ue.defaults.plugins.tooltip.bodyColor = p.tooltipBody, Ue.defaults.plugins.tooltip.borderColor = p.tooltipBorder, Ue.defaults.plugins.tooltip.borderWidth = 1, Ue.defaults.plugins.tooltip.titleFont = { size: 12, weight: "bold", family: Ue.defaults.font.family }, Ue.defaults.plugins.tooltip.bodyFont = { size: 11, family: Ue.defaults.font.family }, Ue.defaults.plugins.tooltip.padding = 12, Ue.defaults.plugins.tooltip.cornerRadius = 2;
      const g = (_ = "", w = !1, I = null, X = null, J = null) => {
        const me = typeof J == "function" ? J(p) : J || {};
        return {
          responsive: !0,
          maintainAspectRatio: !1,
          animation: { duration: vi.ANIMATION_DURATION, easing: "easeOutCubic" },
          interaction: { mode: "index", intersect: !1 },
          plugins: {
            legend: {
              display: w,
              position: "top",
              labels: {
                boxWidth: 10,
                padding: 12,
                font: { size: 10, family: "'JetBrains Mono', monospace" },
                usePointStyle: !0,
                color: p.axis,
                filter: (de, ve) => {
                  const xe = ve.datasets[de.datasetIndex];
                  return !(xe != null && xe.disabledProbe) && !(xe != null && xe.noDataProbe);
                }
              }
            },
            tooltip: {
              callbacks: {
                title: function(de) {
                  var ve, xe, xt;
                  if (de.length > 0 && de[0].raw) {
                    const Qt = de[0].raw.x ?? ((xt = (xe = (ve = de[0].chart) == null ? void 0 : ve.data) == null ? void 0 : xe.labels) == null ? void 0 : xt[de[0].dataIndex]);
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
                label: function(de) {
                  let ve = de.dataset.label || "";
                  ve && (ve += ": ");
                  const xe = de.parsed.y, xt = de.dataset.formatValue;
                  return xe == null ? ve += M.value.timeout : typeof xt == "function" ? ve += xt(xe) : I ? ve += I(xe) : (ve += typeof xe == "number" ? xe.toFixed(2) : xe, ve += _), "$ " + ve;
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
                maxTicksLimit: vi.MAX_TICKS,
                autoSkipPadding: 16,
                color: p.axis,
                font: { size: 9, family: "'JetBrains Mono', monospace" },
                maxRotation: 0,
                padding: 8,
                callback: function(de) {
                  return Np(this.getLabelForValue(de));
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
                callback: X || function(de) {
                  return de + _;
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
        const w = _.ref();
        w && (te[_.key] = new Ue(w.getContext("2d"), {
          type: "line",
          data: { labels: [], datasets: _.datasets.map((I) => ({ ...I })) },
          options: g(_.unit || "", _.legend, _.formatValue, _.tickFormat, _.extraScales)
        }));
      }
      Uo(), Lo();
    };
    Dx(() => {
      const p = pc();
      Ue.defaults.color = p.axis, Ue.defaults.plugins.tooltip.backgroundColor = p.tooltipBg, Ue.defaults.plugins.tooltip.titleColor = p.tooltipTitle, Ue.defaults.plugins.tooltip.bodyColor = p.tooltipBody, Ue.defaults.plugins.tooltip.borderColor = p.tooltipBorder, Object.values(te).forEach((g) => {
        if (g) {
          g.options.plugins.legend.labels && (g.options.plugins.legend.labels.color = p.axis);
          for (const _ of g.data.datasets)
            _.borderColor = Eo(_.farmColor), _.fill && (_.backgroundColor = dc(_.borderColor, 0.05));
          for (const _ of Object.values(g.options.scales || {}))
            _.title && (_.title.color = p.axis), _.ticks && (_.ticks.color = p.axis), _.grid && (_.grid.color = p.grid);
          g.update("none");
        }
      });
    });
    const Hp = (p = k.value) => {
      var I;
      if (p <= 1) return 300 * 1e3;
      const g = Number((I = C.value) == null ? void 0 : I.long_history_points), _ = yu.LONG_RANGE_POINT_OPTIONS.includes(g) ? g : yu.DEFAULT_LONG_RANGE_POINTS, w = Math.ceil(p * 60 * 60 * 1e3 / _);
      return Math.max(300 * 1e3, w * 1.9);
    }, mc = (p, g) => {
      if (!p || !g) return !1;
      const _ = Number(p.x), w = Number(g.x);
      if (!Number.isFinite(_) || !Number.isFinite(w)) return !1;
      const I = w - _, X = Hp();
      return I > X;
    }, ra = (p) => {
      if (!p || p.length < 2) return p;
      const g = [];
      for (let _ = 0; _ < p.length; _++)
        if (g.push(p[_]), _ < p.length - 1 && mc(p[_], p[_ + 1])) {
          const w = Xt(p[_]), X = Xt(p[_ + 1]) - w;
          g.push(Ds(w + X / 2, null));
        }
      return g;
    }, gc = (p, g) => {
      if (!Array.isArray(p)) return [g];
      let _ = null;
      for (let w = p.length - 1; w >= 0; w--) {
        const I = p[w];
        if (I && I.y !== null && I.y !== void 0) {
          _ = I;
          break;
        }
      }
      if (_ && mc(_, g)) {
        const w = Xt(_), I = Xt(g);
        p.push(Ds(w + (I - w) / 2, null));
      }
      return p.push(g), p;
    }, bc = (p) => {
      if (!Array.isArray(p)) return 0;
      for (let g = p.length - 1; g >= 0; g--) {
        const _ = Xt(p[g]);
        if (Number.isFinite(_)) return _;
      }
      return 0;
    }, We = (p, g, _, w) => {
      if (!p) return;
      const I = p.data.datasets[g];
      if (!I) return;
      let X = [];
      _ && _.length > 0 && (X = _.map((J) => Ds(new Date(J.timestamp).getTime(), w(J))), X.sort((J, me) => Xt(J) - Xt(me)), X = ra(X)), I.data = X, qi(p), p.update("none");
    }, Fo = (p, g) => (_) => v(_[p], _[g]), tt = (p, g = !1) => (_) => {
      const w = parseFloat(_[p]);
      return Number.isNaN(w) ? null : g || w > 0 ? w : null;
    }, jp = (p, g) => {
      if (!p) return;
      let _ = [];
      g && g.length > 0 && (_ = g.map((J) => {
        const me = Vi(J.load_avg);
        return {
          x: new Date(J.timestamp).getTime(),
          load1: me[0],
          load5: me[1],
          load15: me[2]
        };
      }), _.sort((J, me) => J.x - me.x));
      const w = _.map((J) => Ds(J.x, J.load1)), I = _.map((J) => Ds(J.x, J.load5)), X = _.map((J) => Ds(J.x, J.load15));
      p.data.datasets[0].data = ra(w), p.data.datasets[1].data = ra(I), p.data.datasets[2].data = ra(X), qi(p), p.update("none");
    }, zp = () => {
      const p = te.diskIo;
      if (p) {
        for (const g of p.data.datasets || [])
          g.data = [];
        p.data.labels = [], p.update("none");
      }
    }, yc = async (p) => {
      const g = ++d;
      try {
        const _ = l ? l(p) : await Jy(String(encodeURIComponent(f)), p, h.value);
        if (g !== d) return;
        if (u.value = _.length ? "" : M.value.noData, !_.length)
          for (const w of Object.values(te)) {
            w.data.labels = [];
            for (const I of w.data.datasets) I.data = [];
          }
        if (zi = 0, zl.value = Object.fromEntries(Q.map((w) => [
          w.lossField,
          _.some((I) => Do(I[w.lossField]))
        ])), _.length > 0) {
          zi = _.reduce((X, J) => {
            const me = new Date(J.timestamp).getTime();
            return Number.isFinite(me) ? Math.max(X, me) : X;
          }, 0), We(te.cpu, 0, _, tt("cpu", !0)), Uo();
          for (const X of Oo) {
            const J = te[X];
            if (J)
              for (let me = 0; me < J.data.datasets.length; me++) {
                const ve = J.data.datasets[me].gpuId, xe = ve ? Up(ve, X) : () => null;
                We(J, me, _, xe);
              }
          }
          We(te.ram, 0, _, Fo("ram_used", "ram_total")), We(te.ram, 1, _, Fo("swap_used", "swap_total")), We(te.disk, 0, _, Fo("disk_used", "disk_total"));
          const w = _.filter(V);
          w.length > 0 ? (oa(w[0]), oe.forEach((X, J) => {
            We(te.diskIo, J, _, Fe(X));
          })) : (zp(), sa.value = !1, V(m.value) && m.value.last_updated && xc(m.value, new Date(m.value.last_updated).getTime())), We(te.proc, 0, _, tt("processes", !0)), We(te.net, 0, _, tt("net_in_speed", !0)), We(te.net, 1, _, tt("net_out_speed", !0)), We(te.conn, 0, _, tt("tcp_conn", !0)), We(te.conn, 1, _, tt("udp_conn", !0)), We(te.ping, 0, _, tt("ping_ct", !0)), We(te.ping, 1, _, tt("ping_cu", !0)), We(te.ping, 2, _, tt("ping_cm", !0)), We(te.ping, 3, _, tt("ping_bd", !0)), We(te.ping, 4, _, tt("ping_node_1", !0)), We(te.ping, 5, _, tt("ping_node_2", !0)), We(te.ping, 6, _, tt("ping_node_3", !0)), We(te.ping, 7, _, tt("ping_node_4", !0)), We(te.loss, 0, _, tt("loss_ct", !0)), We(te.loss, 1, _, tt("loss_cu", !0)), We(te.loss, 2, _, tt("loss_cm", !0)), We(te.loss, 3, _, tt("loss_bd", !0)), We(te.loss, 4, _, tt("loss_node_1", !0)), We(te.loss, 5, _, tt("loss_node_2", !0)), We(te.loss, 6, _, tt("loss_node_3", !0)), We(te.loss, 7, _, tt("loss_node_4", !0)), jp(te.load, _);
          const I = (X, J, me = !0) => {
            const de = X.map((ve) => parseFloat(ve[J])).filter((ve) => !isNaN(ve) && (me ? ve !== 0 : !0));
            return de.length ? Math.round(de.reduce((ve, xe) => ve + xe, 0) / de.length) : null;
          };
          Vl.value = I(_, "ping_ct"), ql.value = I(_, "ping_cu"), Gl.value = I(_, "ping_cm"), Kl.value = I(_, "ping_bd"), $l.value = I(_, "ping_node_1"), Jl.value = I(_, "ping_node_2"), Yl.value = I(_, "ping_node_3"), Xl.value = I(_, "ping_node_4"), Ql.value = I(_, "loss_ct", !1), Zl.value = I(_, "loss_cu", !1), ec.value = I(_, "loss_cm", !1), tc.value = I(_, "loss_bd", !1), sc.value = I(_, "loss_node_1", !1), ic.value = I(_, "loss_node_2", !1), nc.value = I(_, "loss_node_3", !1), ac.value = I(_, "loss_node_4", !1), Lo();
        }
        Vp(p), ta.value = !0, await Ai(), requestAnimationFrame(() => {
          Object.values(te).forEach((w) => {
            w.resize(), w.update("none");
          });
        });
      } catch (_) {
        if (g !== d) return;
        if (_ && _.status === 401) {
          P.value = !0, k.value = wa, ta.value = !0;
          return;
        }
        if (_ && _.message === "databaseUpgradeRequired") {
          oc || (oc = !0, alert(nv(_.message)));
          return;
        }
        ta.value = !0, u.value = window.farmText("历史数据读取失败"), console.error("[ERROR] Load history failed:", _);
      }
    }, Vp = (p) => {
      const g = p <= 3 ? vi.MAX_TICKS : vi.MAX_TICKS_HOUR;
      Object.values(te).forEach((_) => {
        var w, I;
        (I = (w = _ == null ? void 0 : _.options) == null ? void 0 : w.scales) != null && I.x && (_.options.scales.x.ticks.maxTicksLimit = g, delete _.options.scales.x.min, delete _.options.scales.x.max), _ && (qi(_), _.update("none"));
      });
    }, Ot = (p, g, _, w, I = !1, X = !1) => {
      if (!p) return;
      const J = p.data.datasets[g];
      if (!J) return;
      const me = new Date(_).getTime(), de = bc(J.data);
      if (de && me <= de) return;
      const ve = Date.now() - k.value * 60 * 60 * 1e3;
      let xe;
      if (I) {
        const xt = parseFloat(w);
        xe = xt > 0 ? xt : null;
      } else X && !Do(w) ? xe = null : xe = H(w);
      for (J.data = gc(J.data, Ds(me, xe)); J.data.length > vi.MAX_DATA_POINTS; )
        J.data.shift();
      J.data = J.data.filter((xt) => Xt(xt) >= ve), qi(p), p.update("none");
    }, qp = ["id", "name", "region", "arch", "os", "kernel_version", "cpu_info", "cpu_cores", "gpu_info", "expire_date", "server_group", "traffic_limit", "net_rx_monthly", "net_tx_monthly", "boot_time", "timestamp", "ip_v4", "ip_v6"], vc = /* @__PURE__ */ new Set([
      "cpu",
      "ram_total",
      "ram_used",
      "swap_total",
      "swap_used",
      "net_in_speed",
      "net_out_speed",
      "disk"
    ]), Gp = /* @__PURE__ */ new Set(["last_updated", "sample_timestamp"]), Kp = (p, g) => {
      var me;
      const _ = te.load;
      if (!_) return;
      const w = Vi(g), I = new Date(p).getTime(), X = bc((me = _.data.datasets[0]) == null ? void 0 : me.data);
      if (X && I <= X) return;
      const J = Date.now() - k.value * 60 * 60 * 1e3;
      for (let de = 0; de < 3; de++) {
        for (_.data.datasets[de].data = gc(_.data.datasets[de].data, Ds(I, w[de])); _.data.datasets[de].data.length > vi.MAX_DATA_POINTS; )
          _.data.datasets[de].data.shift();
        _.data.datasets[de].data = _.data.datasets[de].data.filter((ve) => Xt(ve) >= J);
      }
      qi(_), _.update("none");
    }, _c = () => Math.abs(Number(k.value) - wa) < 1e-3;
    let la = /* @__PURE__ */ new Set();
    const Gi = () => {
      la.forEach((p) => clearTimeout(p)), la.clear();
    }, $p = (p) => !p || typeof p != "object" ? null : p.data || p.payload || p.metrics || null, Sc = (p) => {
      var w, I;
      const g = Date.now(), _ = Pi(
        ((w = p == null ? void 0 : p.data) == null ? void 0 : w.last_updated) ?? ((I = p == null ? void 0 : p.data) == null ? void 0 : I.timestamp) ?? (p == null ? void 0 : p.ts),
        g
      );
      return {
        ...p.data,
        sample_timestamp: _,
        last_updated: _,
        timestamp: g
      };
    }, kc = (p, g) => {
      const _ = setTimeout(() => {
        la.delete(_), Wo(Sc(p), {
          mergeMode: "sample",
          chartMode: "sample"
        });
      }, g);
      la.add(_);
    }, Jp = (p, g = Date.now()) => !p || String(p.serverId) !== String(f) ? [] : (Array.isArray(p.samples) ? p.samples : []).map((w) => {
      const I = $p(w);
      if (!I) return null;
      const X = Pi(
        w.ts ?? w.timestamp ?? I.sample_timestamp ?? I.last_updated ?? I.timestamp ?? p.ts ?? g,
        null
      );
      return X ? { ts: X, data: I } : null;
    }).filter(Boolean).sort((w, I) => w.ts - I.ts), Tc = (p, { messageTs: g = Date.now(), replayCachedReport: _ = !1, includeReportUpdate: w = !0 } = {}) => {
      const I = Jp(p, g);
      if (I.length === 0) return;
      const X = _c();
      if (w) {
        const Qt = I[I.length - 1];
        Wo(Sc(Qt), {
          mergeMode: X ? "report" : "all",
          chartMode: "report"
        });
      }
      if (!X) return;
      const J = Pi(p.reportTs ?? p.report_timestamp, g), me = Number(p.reportAgeMs), de = Math.max(0, Number.isFinite(me) ? me : J ? Date.now() - J : 0), ve = _ ? Ix(I[0].ts, null, { replayCachedReport: !0, reportAgeMs: de }) : I[0].ts;
      if (ve === null) return;
      let xe = null;
      const xt = [];
      for (const Qt of I)
        Qt.ts <= ve ? xe = Qt : xt.push(Qt);
      xe && kc(xe, 0);
      for (const Qt of xt) {
        const Cc = Math.max(0, Math.min(Qt.ts - ve, RP));
        kc(Qt, Cc);
      }
    }, Yp = (p) => {
      Gi();
      const g = Array.isArray(p == null ? void 0 : p.latestReportUpdates) ? p.latestReportUpdates : [];
      for (const _ of g)
        Tc(_, {
          messageTs: Date.now(),
          replayCachedReport: !0,
          includeReportUpdate: !1
        });
    }, Xp = (p, g) => {
      Ot(te.cpu, 0, g, p.cpu);
      const _ = v(p.ram_used, p.ram_total);
      Ot(te.ram, 0, g, _);
      const w = v(p.swap_used, p.swap_total);
      Ot(te.ram, 1, g, w), Ot(te.net, 0, g, p.net_in_speed), Ot(te.net, 1, g, p.net_out_speed);
    }, xc = (p, g) => {
      if (!oa(p)) return;
      const _ = Le(p);
      oe.forEach((w, I) => {
        Ot(te.diskIo, I, g, _[w]);
      });
    }, Qp = (p, g) => {
      Uo();
      const _ = A(p.gpu_info);
      for (const I of Oo) {
        const X = te[I];
        if (X)
          for (let J = 0; J < X.data.datasets.length; J++) {
            const de = X.data.datasets[J].gpuId, ve = _.find((xt) => String(xt.id) === String(de)), xe = ve ? j(ve, hc[I]) : null;
            xe == null ? Ot(X, J, g, null, !1, !0) : Ot(X, J, g, xe);
          }
      }
      const w = v(p.disk_used, p.disk_total);
      Ot(te.disk, 0, g, w), xc(p, g), Ot(te.proc, 0, g, p.processes), Ot(te.conn, 0, g, p.tcp_conn), Ot(te.conn, 1, g, p.udp_conn);
      for (const I of Q) {
        const X = (J, me, de) => {
          qe(p, me) && (Xi(p[me]) || Ot(J, I.datasetIndex, g, p[me], de, !de));
        };
        X(te.ping, I.field, !0), X(te.loss, I.lossField, !1);
      }
      Kp(g, p.load_avg);
    }, Zp = (p, g) => {
      Number.isFinite(g) && (zi && g - zi < MP || (Qp(p, g), zi = g));
    }, em = (p, g) => qp.includes(p) ? !1 : g === "sample" ? vc.has(p) || Gp.has(p) : g === "report" ? le(p) || !vc.has(p) : !0, Wo = async (p, g = {}) => {
      try {
        const {
          mergeMode: _ = "all",
          chartMode: w = "all"
        } = g;
        let I = p;
        if (!I && (I = n, !I) || !I) return;
        if (p) {
          const X = { ...m.value }, J = oa(I);
          for (const me of Object.keys(I))
            em(me, _) && (le(me) && !J || (X[me] = I[me]));
          m.value = X;
        } else
          C.value = I.sysConfig || null, m.value = I, oa(I), N.value = !1;
        if (Lo(), I.last_updated && ia.value && _c()) {
          const X = new Date(I.last_updated).getTime();
          (w === "sample" || w === "all") && Xp(I, X), (w === "report" || w === "all") && Zp(I, X);
        }
        return I.last_updated && (x.value = Io(I.last_updated)), I;
      } catch (_) {
        return console.error("[ERROR] Update status failed:", _), null;
      }
    }, tm = (p) => {
      if (Gi(), p > 24 && !zy()) {
        P.value = !0;
        return;
      }
      k.value = p, yc(p);
    }, sm = () => {
      P.value = !1, s.push({
        path: "/admin",
        query: { apiIndex: String(h.value) }
      });
    };
    let Bt = null, ca = !1;
    const Bo = async () => {
      if (aa || ia.value) return;
      if (aa = !0, await Ai(), kt.value && Yt.value && $s.value && ct.value && Tt.value && Js.value && Ys.value && $n.value && Jn.value && Yn.value && Xn.value && Qn.value && Zn.value && ea.value)
        try {
          Bp(), ia.value = !0;
        } finally {
          aa = !1;
        }
      else
        aa = !1, setTimeout(Bo, 30);
    }, Ac = () => {
      if (Bt)
        if (document.hidden)
          Gi(), Bt.close();
        else {
          if (R.value || ca)
            return;
          Bt.reconnect();
        }
    }, im = () => {
      R.value = !1, ca = !0, Bt == null || Bt.close();
    }, Pc = () => {
      R.value = !1, ca = !1, Bt == null || Bt.reconnect();
    }, nm = (p) => {
      if (!p || p.type !== "batchUpdate") return;
      const _ = (Array.isArray(p.updates) ? p.updates : []).filter((I) => I && String(I.serverId) === String(f));
      if (_.length === 0) return;
      O.value = !1, Gi();
      const w = Pi(p.ts, Date.now());
      for (const I of _)
        Tc(I, { messageTs: w });
    }, am = () => i ? Array.isArray(i.site_configs) && i.site_configs[h.value] ? i.site_configs[h.value] : h.value === 0 ? i : null : null, om = async () => {
      try {
        const p = am();
        W.value = vh(p == null ? void 0 : p.frontend_ws_timeout_minutes);
      } catch (p) {
        console.log("[INFO] Detail theme config pending...", p);
      }
    }, rm = async () => {
      const [p] = await Promise.all([
        Wo(),
        om()
      ]);
      await Bo(), await yc(k.value), Yp(p), !l && (Bt = qy(String(f), {
        replay: !1,
        timeoutMinutes: W.value,
        onMessage: nm,
        onTimeout: () => {
          R.value = !0;
        },
        onStatus: async ({ connected: g }) => {
          var w;
          if (document.hidden || R.value || ca) return;
          if (!g) {
            O.value = !0;
            return;
          }
          if (!O.value) return;
          const _ = await Za.getByIndex(
            "/api/server?id=" + encodeURIComponent(f),
            h.value,
            { autoRedirect: !1, timeoutMs: ph }
          ).catch(() => null);
          if ([401, 403, 404].includes(_ == null ? void 0 : _.status)) return location.reload();
          String((w = _ == null ? void 0 : _.data) == null ? void 0 : w.id) === String(f) && O.value && (m.value = _.data, x.value = Io(_.data.last_updated), O.value = !1);
        }
      }, h.value), document.addEventListener("visibilitychange", Ac));
    };
    return mn([kt, Yt, $s, ct, Tt, Js, Ys, $n, Jn, Yn, Xn, Qn, Zn, ea], () => {
      ia.value || Bo();
    }), Df(() => {
      rm();
    }), yo(() => {
      document.removeEventListener("visibilitychange", Ac), Bt && Bt.close(), Gi(), No = "", cc();
    }), (p, g) => {
      const _ = mg("router-link");
      return Je(), Qe("div", Ex, [
        S("header", Ox, [
          g[18] || (g[18] = S(
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
            Lx,
            F(m.value.name || se(n).name),
            1
            /* TEXT */
          ),
          S("a", {
            class: "admin-link-header",
            href: o,
            "aria-label": se(r),
            title: se(r)
          }, [...g[17] || (g[17] = [
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
          ])], 8, Nx)
        ]),
        N.value ? (Je(), Qe("div", Ux, [
          g[19] || (g[19] = S(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* CACHED */
          )),
          S(
            "div",
            Fx,
            "$ " + F(se(M).loading),
            1
            /* TEXT */
          )
        ])) : (Je(), Qe(
          Nt,
          { key: 1 },
          [
            S("div", Wx, [
              Is(S(
                "div",
                Bx,
                [
                  (Je(!0), Qe(
                    Nt,
                    null,
                    $o(St.value, (w) => (Je(), Qe("button", {
                      key: w.hours,
                      class: $e(["time-btn", { active: k.value === w.hours }]),
                      "aria-pressed": k.value === w.hours,
                      onClick: (I) => tm(w.hours)
                    }, F(w.label), 11, Hx))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                512
                /* NEED_PATCH */
              ), [
                [Es, ta.value]
              ]),
              Me(_, {
                to: "/",
                class: "back-btn"
              }, {
                default: xf(() => [
                  Ce(
                    F(se(M).back),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            O.value ? (Je(), Qe("div", jx, [
              S(
                "span",
                zx,
                F(se(Y)("连接中断，显示上次同步的数据。")),
                1
                /* TEXT */
              ),
              S(
                "button",
                {
                  type: "button",
                  onClick: Pc
                },
                F(se(Y)("重新连接")),
                1
                /* TEXT */
              )
            ])) : zt("v-if", !0),
            S("div", Vx, [
              S("div", qx, [
                S("div", Gx, [
                  g[20] || (g[20] = S(
                    "span",
                    { class: "prompt" },
                    "root@",
                    -1
                    /* CACHED */
                  )),
                  S("span", Kx, [
                    m.value.region && m.value.region !== "xx" ? (Je(), Qe("img", {
                      key: 0,
                      src: y("flags/" + se(Gy)(m.value.region) + ".svg"),
                      alt: m.value.region,
                      class: "flag-img"
                    }, null, 8, $x)) : (Je(), Qe("span", Jx, "🏳️")),
                    se(ku)(m.value.os) ? (Je(), Qe("img", {
                      key: m.value.os,
                      src: y(se(ku)(m.value.os)),
                      alt: se(Sv)(m.value.os),
                      class: "os-icon-img",
                      loading: "lazy",
                      onError: g[0] || (g[0] = (w) => w.target.hidden = !0)
                    }, null, 40, Yx)) : zt("v-if", !0)
                  ]),
                  S(
                    "span",
                    null,
                    F(m.value.name || "Loading..."),
                    1
                    /* TEXT */
                  ),
                  g[21] || (g[21] = S(
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
                    class: $e(["status-badge", { online: He.value, offline: !He.value }])
                  },
                  [
                    S(
                      "span",
                      {
                        class: $e(["pulse-dot", { online: He.value, offline: !He.value }])
                      },
                      null,
                      2
                      /* CLASS */
                    ),
                    S(
                      "span",
                      null,
                      F(He.value ? se(M).online : se(M).offline),
                      1
                      /* TEXT */
                    )
                  ],
                  2
                  /* CLASS */
                )
              ]),
              S("div", Xx, [
                S("div", Qx, [
                  S(
                    "span",
                    Zx,
                    "⏱ " + F(se(M).uptime),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    e0,
                    F(Lp(m.value.boot_time)),
                    1
                    /* TEXT */
                  )
                ]),
                c("show_expire") && m.value.expire_date ? (Je(), Qe("div", t0, [
                  S(
                    "span",
                    s0,
                    "📅 " + F(se(M).expire),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    {
                      class: $e(["sysinfo-value", { expired: ot.value }])
                    },
                    F(Wt.value),
                    3
                    /* TEXT, CLASS */
                  )
                ])) : zt("v-if", !0),
                S("div", i0, [
                  S(
                    "span",
                    n0,
                    "💻 " + F(se(M).os) + " / " + F(se(M).architecture),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    a0,
                    F(m.value.os || "—") + " / " + F(m.value.arch || "—"),
                    1
                    /* TEXT */
                  )
                ]),
                m.value.kernel_version ? (Je(), Qe("div", o0, [
                  S(
                    "span",
                    r0,
                    "🧩 " + F(se(M).kernelVersion || "Kernel"),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    l0,
                    F(m.value.kernel_version),
                    1
                    /* TEXT */
                  )
                ])) : zt("v-if", !0),
                S("div", c0, [
                  S(
                    "span",
                    u0,
                    "🔧 " + F(se(M).cpuInfo),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    d0,
                    F(m.value.cpu_info || "—") + " x " + F(m.value.cpu_cores || "—"),
                    1
                    /* TEXT */
                  )
                ]),
                Re.value ? (Je(), Qe("div", f0, [
                  S(
                    "span",
                    h0,
                    "🎮 " + F(se(M).gpuInfo || "GPU Info"),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    p0,
                    F(L.value),
                    1
                    /* TEXT */
                  )
                ])) : zt("v-if", !0),
                S("div", m0, [
                  S(
                    "span",
                    g0,
                    "💾 " + F(se(M).totalDiskRam),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    b0,
                    F(ee(m.value.disk_total, 1024 ** 2)) + " / " + F(ee(m.value.ram_total, 1024 ** 2)),
                    1
                    /* TEXT */
                  )
                ]),
                S("div", y0, [
                  S(
                    "span",
                    v0,
                    "📊 " + F(se(M).loadAvg),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    _0,
                    F(m.value.load_avg || "—"),
                    1
                    /* TEXT */
                  )
                ]),
                S("div", S0, [
                  S(
                    "span",
                    k0,
                    "🌐 " + F(se(M).totalTraffic),
                    1
                    /* TEXT */
                  ),
                  S("span", T0, [
                    S(
                      "span",
                      x0,
                      "↓ " + F(ee(m.value.net_rx)),
                      1
                      /* TEXT */
                    ),
                    g[22] || (g[22] = Ce(
                      " / ",
                      -1
                      /* CACHED */
                    )),
                    S(
                      "span",
                      A0,
                      "↑ " + F(ee(m.value.net_tx)),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                S("div", P0, [
                  S(
                    "span",
                    C0,
                    "⚡ " + F(se(M).realtimeSpeed),
                    1
                    /* TEXT */
                  ),
                  S("span", w0, [
                    S(
                      "span",
                      R0,
                      "↓ " + F(ee(m.value.net_in_speed, 1, "/s")),
                      1
                      /* TEXT */
                    ),
                    g[23] || (g[23] = Ce(
                      " / ",
                      -1
                      /* CACHED */
                    )),
                    S(
                      "span",
                      M0,
                      "↑ " + F(ee(m.value.net_out_speed, 1, "/s")),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                m.value.net_rx_monthly != null || m.value.net_tx_monthly != null ? (Je(), Qe("div", D0, [
                  S(
                    "span",
                    I0,
                    "📊 " + F(se(M).monthlyTraffic),
                    1
                    /* TEXT */
                  ),
                  S("span", E0, [
                    S(
                      "span",
                      O0,
                      "↓ " + F(ee(m.value.net_rx_monthly)),
                      1
                      /* TEXT */
                    ),
                    g[24] || (g[24] = Ce(
                      " / ",
                      -1
                      /* CACHED */
                    )),
                    S(
                      "span",
                      L0,
                      "↑ " + F(ee(m.value.net_tx_monthly)),
                      1
                      /* TEXT */
                    )
                  ])
                ])) : zt("v-if", !0),
                c("show_tf") && (m.value.net_rx_monthly != null || m.value.net_tx_monthly != null) ? (Je(), Qe("div", N0, [
                  S(
                    "span",
                    U0,
                    "📦 " + F(se(M).monthlyTrafficLimit),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    F0,
                    F(ee(Ep.value)) + " / " + F(H(m.value.traffic_limit) === 0 ? "∞" : ee(m.value.traffic_limit, 1024 ** 3)),
                    1
                    /* TEXT */
                  )
                ])) : zt("v-if", !0),
                S("div", W0, [
                  S(
                    "span",
                    B0,
                    "🕐 " + F(se(M).bootTime),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    H0,
                    F(Io(m.value.boot_time)),
                    1
                    /* TEXT */
                  )
                ]),
                S("div", j0, [
                  S(
                    "span",
                    z0,
                    "⏰ " + F(se(M).lastUpdate),
                    1
                    /* TEXT */
                  ),
                  S(
                    "span",
                    V0,
                    F(x.value),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ]),
            u.value ? (Je(), Qe(
              "p",
              q0,
              F(u.value),
              1
              /* TEXT */
            )) : zt("v-if", !0),
            S("div", G0, [
              S(
                "div",
                {
                  class: $e(["chart-card", { "full-width": Ne("cpu") }])
                },
                [
                  S("div", K0, [
                    S("span", $0, [
                      g[25] || (g[25] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Ce(
                        " " + F(se(M).cpuUsage),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", J0, [
                      S(
                        "span",
                        Y0,
                        F(T.value),
                        1
                        /* TEXT */
                      ),
                      Me(K, {
                        expanded: Ne("cpu"),
                        onToggle: g[1] || (g[1] = (w) => Rt("cpu"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", X0, [
                    S(
                      "canvas",
                      {
                        ref_key: "cpuChartRef",
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
              ),
              S(
                "div",
                {
                  class: $e(["chart-card", { "full-width": Ne("ram") }])
                },
                [
                  S("div", Q0, [
                    S("span", Z0, [
                      g[26] || (g[26] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Ce(
                        " " + F(se(M).memoryUsage),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", eA, [
                      S("div", tA, [
                        S(
                          "span",
                          sA,
                          F(ue.value),
                          1
                          /* TEXT */
                        ),
                        S(
                          "div",
                          iA,
                          F(se(M).swap) + ": " + F(H(m.value.swap_used) ?? "—") + " / " + F(H(m.value.swap_total) ?? "—") + " MiB",
                          1
                          /* TEXT */
                        )
                      ]),
                      Me(K, {
                        expanded: Ne("ram"),
                        onToggle: g[2] || (g[2] = (w) => Rt("ram"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", nA, [
                    S(
                      "canvas",
                      {
                        ref_key: "ramChartRef",
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
                  class: $e(["chart-card", { "full-width": Ne("net") }])
                },
                [
                  S("div", aA, [
                    S("span", oA, [
                      g[27] || (g[27] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Ce(
                        " " + F(se(M).networkTraffic),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", rA, [
                      S("div", lA, [
                        S(
                          "span",
                          cA,
                          "▼ " + F(ee(m.value.net_in_speed, 1, "/s")),
                          1
                          /* TEXT */
                        ),
                        S(
                          "span",
                          uA,
                          "▲ " + F(ee(m.value.net_out_speed, 1, "/s")),
                          1
                          /* TEXT */
                        )
                      ]),
                      Me(K, {
                        expanded: Ne("net"),
                        onToggle: g[3] || (g[3] = (w) => Rt("net"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", dA, [
                    S(
                      "canvas",
                      {
                        ref_key: "netChartRef",
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
              ),
              S(
                "div",
                {
                  class: $e(["chart-card", { "full-width": Ne("load") }])
                },
                [
                  S("div", fA, [
                    S("span", hA, [
                      g[28] || (g[28] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Ce(
                        " " + F(se(M).loadAvgMonitor),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", pA, [
                      S("div", mA, [
                        S("span", gA, [
                          Ce(
                            F(se(M).load1m) + " ",
                            1
                            /* TEXT */
                          ),
                          S(
                            "b",
                            null,
                            F(Z(Vi(m.value.load_avg)[0], 2)),
                            1
                            /* TEXT */
                          )
                        ]),
                        S("span", bA, [
                          Ce(
                            F(se(M).load5m) + " ",
                            1
                            /* TEXT */
                          ),
                          S(
                            "b",
                            null,
                            F(Z(Vi(m.value.load_avg)[1], 2)),
                            1
                            /* TEXT */
                          )
                        ]),
                        S("span", yA, [
                          Ce(
                            F(se(M).load15m) + " ",
                            1
                            /* TEXT */
                          ),
                          S(
                            "b",
                            null,
                            F(Z(Vi(m.value.load_avg)[2], 2)),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      Me(K, {
                        expanded: Ne("load"),
                        onToggle: g[4] || (g[4] = (w) => Rt("load"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", vA, [
                    S(
                      "canvas",
                      {
                        ref_key: "loadChartRef",
                        ref: ea
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
                  class: $e(["chart-card", { "full-width": Ne("disk") }])
                },
                [
                  S("div", _A, [
                    S("span", SA, [
                      g[29] || (g[29] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Ce(
                        " " + F(se(M).diskUsage),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", kA, [
                      S("div", TA, [
                        S(
                          "span",
                          xA,
                          F(Se.value),
                          1
                          /* TEXT */
                        ),
                        S(
                          "div",
                          AA,
                          F(se(M).used) + " " + F(ee(m.value.disk_used, 1024 ** 2)) + " / " + F(ee(m.value.disk_total, 1024 ** 2)),
                          1
                          /* TEXT */
                        )
                      ]),
                      Me(K, {
                        expanded: Ne("disk"),
                        onToggle: g[5] || (g[5] = (w) => Rt("disk"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", PA, [
                    S(
                      "canvas",
                      {
                        ref_key: "diskChartRef",
                        ref: Ys
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
                  class: $e(["chart-card", { "full-width": Ne("diskIo") }])
                },
                [
                  S("div", CA, [
                    S("span", wA, [
                      g[30] || (g[30] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Ce(
                        " " + F(se(M).diskIo || "Disk IO"),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", RA, [
                      S("div", MA, [
                        S("span", DA, [
                          g[31] || (g[31] = Ce(
                            "R ",
                            -1
                            /* CACHED */
                          )),
                          S(
                            "b",
                            null,
                            F(ee(Te.value.read_bps, 1, "/s")),
                            1
                            /* TEXT */
                          )
                        ]),
                        S("span", IA, [
                          g[32] || (g[32] = Ce(
                            "W ",
                            -1
                            /* CACHED */
                          )),
                          S(
                            "b",
                            null,
                            F(ee(Te.value.write_bps, 1, "/s")),
                            1
                            /* TEXT */
                          )
                        ]),
                        S("span", EA, [
                          g[33] || (g[33] = Ce(
                            "IOPS ",
                            -1
                            /* CACHED */
                          )),
                          S(
                            "b",
                            null,
                            F(ke(Te.value.read_iops)) + "/" + F(ke(Te.value.write_iops)),
                            1
                            /* TEXT */
                          )
                        ]),
                        S("span", OA, [
                          g[34] || (g[34] = Ce(
                            "await ",
                            -1
                            /* CACHED */
                          )),
                          S(
                            "b",
                            null,
                            F(ke(Te.value.await_ms, "ms")),
                            1
                            /* TEXT */
                          )
                        ]),
                        S("span", null, [
                          g[35] || (g[35] = Ce(
                            "util ",
                            -1
                            /* CACHED */
                          )),
                          S(
                            "b",
                            null,
                            F(ke(Te.value.util, "%")),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      Me(K, {
                        expanded: Ne("diskIo"),
                        onToggle: g[6] || (g[6] = (w) => Rt("diskIo"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", LA, [
                    S(
                      "canvas",
                      {
                        ref_key: "diskIoChartRef",
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
              ), [
                [Es, sa.value]
              ]),
              Is(S(
                "div",
                {
                  class: $e(["chart-card", { "full-width": Ne("gpu") }])
                },
                [
                  S("div", NA, [
                    S("span", UA, [
                      g[36] || (g[36] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Ce(
                        " " + F(se(M).gpuUsage || "GPU Usage"),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", FA, [
                      S(
                        "span",
                        WA,
                        F(E.value),
                        1
                        /* TEXT */
                      ),
                      Me(K, {
                        expanded: Ne("gpu"),
                        onToggle: g[7] || (g[7] = (w) => Rt("gpu"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", BA, [
                    S(
                      "canvas",
                      {
                        ref_key: "gpuChartRef",
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
                [Es, Re.value]
              ]),
              Is(S(
                "div",
                {
                  class: $e(["chart-card", { "full-width": Ne("gpuMem") }])
                },
                [
                  S("div", HA, [
                    S("span", jA, [
                      g[37] || (g[37] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Ce(
                        " " + F(se(M).gpuMemory || "GPU Memory"),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", zA, [
                      S(
                        "span",
                        VA,
                        F(ae.value),
                        1
                        /* TEXT */
                      ),
                      Me(K, {
                        expanded: Ne("gpuMem"),
                        onToggle: g[8] || (g[8] = (w) => Rt("gpuMem"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", qA, [
                    S(
                      "canvas",
                      {
                        ref_key: "gpuMemChartRef",
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
                [Es, q.value]
              ]),
              Is(S(
                "div",
                {
                  class: $e(["chart-card", { "full-width": Ne("gpuClock") }])
                },
                [
                  S("div", GA, [
                    S("span", KA, [
                      g[38] || (g[38] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Ce(
                        " " + F(se(M).gpuClock || "GPU SM Clock"),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", $A, [
                      S(
                        "span",
                        JA,
                        F($.value),
                        1
                        /* TEXT */
                      ),
                      Me(K, {
                        expanded: Ne("gpuClock"),
                        onToggle: g[9] || (g[9] = (w) => Rt("gpuClock"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", YA, [
                    S(
                      "canvas",
                      {
                        ref_key: "gpuClockChartRef",
                        ref: ct
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
              Is(S(
                "div",
                {
                  class: $e(["chart-card", { "full-width": Ne("gpuPower") }])
                },
                [
                  S("div", XA, [
                    S("span", QA, [
                      g[39] || (g[39] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Ce(
                        " " + F(se(M).gpuPower || "GPU Power"),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", ZA, [
                      S(
                        "span",
                        eP,
                        F(ne.value),
                        1
                        /* TEXT */
                      ),
                      Me(K, {
                        expanded: Ne("gpuPower"),
                        onToggle: g[10] || (g[10] = (w) => Rt("gpuPower"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", tP, [
                    S(
                      "canvas",
                      {
                        ref_key: "gpuPowerChartRef",
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
              ), [
                [Es, U.value]
              ]),
              S(
                "div",
                {
                  class: $e(["chart-card", { "full-width": Ne("proc") }])
                },
                [
                  S("div", sP, [
                    S("span", iP, [
                      g[40] || (g[40] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Ce(
                        " " + F(se(M).processes),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", nP, [
                      S(
                        "span",
                        aP,
                        F(H(m.value.processes) ?? "—"),
                        1
                        /* TEXT */
                      ),
                      Me(K, {
                        expanded: Ne("proc"),
                        onToggle: g[11] || (g[11] = (w) => Rt("proc"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", oP, [
                    S(
                      "canvas",
                      {
                        ref_key: "procChartRef",
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
              ),
              S(
                "div",
                {
                  class: $e(["chart-card", { "full-width": Ne("conn") }])
                },
                [
                  S("div", rP, [
                    S("span", lP, [
                      g[41] || (g[41] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Ce(
                        " " + F(se(M).connections),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", cP, [
                      S("div", uP, [
                        S("span", dP, [
                          g[42] || (g[42] = Ce(
                            "TCP ",
                            -1
                            /* CACHED */
                          )),
                          S(
                            "b",
                            null,
                            F(H(m.value.tcp_conn) ?? "—"),
                            1
                            /* TEXT */
                          )
                        ]),
                        S("span", fP, [
                          g[43] || (g[43] = Ce(
                            "UDP ",
                            -1
                            /* CACHED */
                          )),
                          S(
                            "b",
                            null,
                            F(H(m.value.udp_conn) ?? "—"),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      Me(K, {
                        expanded: Ne("conn"),
                        onToggle: g[12] || (g[12] = (w) => Rt("conn"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", hP, [
                    S(
                      "canvas",
                      {
                        ref_key: "connChartRef",
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
              Is(S(
                "div",
                {
                  class: $e(["chart-card", { "full-width": Ne("ping") }])
                },
                [
                  S("div", pP, [
                    S("span", mP, [
                      g[44] || (g[44] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Ce(
                        " " + F(se(M).latencyMonitor),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", gP, [
                      S("div", bP, [
                        (Je(!0), Qe(
                          Nt,
                          null,
                          $o(Dp.value, (w) => (Je(), Qe(
                            "span",
                            {
                              key: w.field,
                              class: $e(w.className)
                            },
                            [
                              Ce(
                                F(w.label) + " ",
                                1
                                /* TEXT */
                              ),
                              S(
                                "b",
                                null,
                                F(w.value !== null ? w.value + "ms" : "Timeout"),
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
                      Me(K, {
                        expanded: Ne("ping"),
                        onToggle: g[13] || (g[13] = (w) => Rt("ping"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", yP, [
                    S(
                      "canvas",
                      {
                        ref_key: "pingChartRef",
                        ref: Qn
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
                  class: $e(["chart-card", { "full-width": Ne("loss") }])
                },
                [
                  S("div", vP, [
                    S("span", _P, [
                      g[45] || (g[45] = S(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Ce(
                        " " + F(se(M).packetLoss || "Packet Loss"),
                        1
                        /* TEXT */
                      )
                    ]),
                    S("div", SP, [
                      S("div", kP, [
                        (Je(!0), Qe(
                          Nt,
                          null,
                          $o(Ip.value, (w) => (Je(), Qe(
                            "span",
                            {
                              key: w.field,
                              class: $e(w.className)
                            },
                            [
                              Ce(
                                F(w.label) + " ",
                                1
                                /* TEXT */
                              ),
                              S(
                                "b",
                                null,
                                F(w.value) + "%",
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
                      Me(K, {
                        expanded: Ne("loss"),
                        onToggle: g[14] || (g[14] = (w) => Rt("loss"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  S("div", TP, [
                    S(
                      "canvas",
                      {
                        ref_key: "lossChartRef",
                        ref: Zn
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
        Me(uv),
        S(
          "div",
          {
            id: "loginRequiredModal",
            class: $e(["modal-overlay", { active: P.value }])
          },
          [
            S("div", xP, [
              S("div", AP, [
                g[46] || (g[46] = S(
                  "div",
                  { class: "modal-title" },
                  "$ sudo login",
                  -1
                  /* CACHED */
                )),
                S("button", {
                  class: "modal-close",
                  onClick: g[15] || (g[15] = (w) => P.value = !1)
                }, "✕")
              ]),
              S("div", PP, [
                S(
                  "p",
                  CP,
                  F(se(M).loginRequired),
                  1
                  /* TEXT */
                )
              ]),
              S("div", wP, [
                S(
                  "button",
                  {
                    onClick: sm,
                    class: "btn btn-primary"
                  },
                  F(se(M).login),
                  1
                  /* TEXT */
                ),
                S(
                  "button",
                  {
                    onClick: g[16] || (g[16] = (w) => P.value = !1),
                    class: "btn"
                  },
                  F(se(M).cancel),
                  1
                  /* TEXT */
                )
              ])
            ])
          ],
          2
          /* CLASS */
        ),
        Me(pv, {
          show: R.value,
          trans: se(M),
          onClose: im,
          onContinue: Pc
        }, null, 8, ["show", "trans"])
      ]);
    };
  }
}, ji = new URL(location.href), jl = document.documentElement.dataset.cfsmMode === "live", cs = new URL(jl ? "../../" : "./index.html", ji);
cs.search = ji.search;
jl && cs.searchParams.delete("stardew_v");
Mx(cs);
const Tr = ji.hash.slice(1), Ap = () => {
  const t = JSON.parse(sessionStorage.getItem("farm-detail-origin") || "null");
  (t == null ? void 0 : t.hash) === ji.hash && t.page === cs.pathname + cs.search && history.length > 1 ? history.back() : location.replace(cs.href + "#/");
};
function nl(t) {
  const e = document.createElement("div");
  e.className = "container detail-message";
  const s = document.createElement("a");
  s.className = "back-btn", s.href = cs.href + "#/", s.textContent = window.farmText("返回"), s.onclick = (n) => {
    n.preventDefault(), Ap();
  };
  const i = document.createElement("p");
  return i.setAttribute("role", "status"), i.textContent = window.farmText(t), e.append(s, i), document.querySelector("#app").replaceChildren(e), e;
}
async function DP(t) {
  var a;
  if (jl) return null;
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
let wi = !1, Ra, Ls;
function Mo() {
  return Ra || (Ra = IP().catch(() => nl("节点不存在或暂时无法读取")).finally(() => {
    Ra = null;
  })), Ra;
}
async function IP() {
  var c;
  if (!/^\/server\/[^/?#]+(?:\?.*)?$/.test(Tr)) return location.replace(cs.href);
  history.replaceState(null, "", cs.pathname + cs.search + ji.hash);
  const t = decodeURIComponent(Tr.slice(8).split("?")[0]);
  await Fy();
  const e = { autoRedirect: !1, timeoutMs: ph };
  nl("正在读取节点数据");
  const [s, i] = await Promise.all([
    Za.getByIndex("/api/server?id=" + encodeURIComponent(t), 0, e),
    Ls ? { data: Ls } : Za.getByIndex("/api/config", 0, e).catch(() => ({})),
    av(window.farmLocale === "zh-CN" ? "zh" : window.farmLocale)
  ]);
  if (Ls = i.data, s.status === 401) {
    window.openMonitorLogin(ft()[0]);
    return;
  }
  const n = !((c = s.data) != null && c.id) && ![401, 403].includes(s.status) ? await DP(t) : null, a = (n == null ? void 0 : n.server) || s.data;
  if (!a || String(a.id) !== t) {
    wi = [401, 403].includes(s.status);
    const u = nl(wi ? "节点详情需要登录或访问验证" : "节点不存在或暂时无法读取");
    if (wi) {
      localStorage.removeItem("turnstile_verified"), Ls = Ls && { ...Ls, verified: !1 };
      const d = document.createElement("div");
      d.className = "monitor-access", u.append(d);
      const f = ft()[0] || location.origin, h = Ls || await fetch(f + "/api/config", { cache: "no-store", signal: AbortSignal.timeout(15e3) }).then((y) => y.ok ? y.json() : null).catch(() => null);
      window.showMonitorAccess(d, "auth", h, f, Mo);
    }
    return;
  }
  wi = !1;
  const o = Ls || {};
  Br.value = o.version || "", yh.value = o.last_workers_version || "", document.title = a.name + " · " + (o.site_title || document.title);
  const r = Ly({ history: hy(), routes: [
    { path: "/server/:id", component: qd },
    { path: "/", component: {}, beforeEnter() {
      return Ap(), !1;
    } },
    { path: "/admin", component: {}, beforeEnter() {
      return location.assign("/admin#/admin"), !1;
    } }
  ] });
  await r.push(Tr);
  const l = Rb(qd);
  l.use(r), l.provide("initialServer", a), l.provide("appConfig", o), l.provide("demoHistory", (n == null ? void 0 : n.history) || null), l.mount("#app");
}
window.addEventListener("hashchange", () => location.reload());
window.addEventListener("storage", (t) => {
  wi && ["jwt_token", "turnstile_verified"].includes(t.key) && t.newValue && Mo();
});
document.addEventListener("visibilitychange", () => {
  wi && !document.hidden && Mo();
});
Mo();
const EP = {
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
}, OP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EP
}, Symbol.toStringTag, { value: "Module" })), LP = {
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
}, NP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LP
}, Symbol.toStringTag, { value: "Module" })), UP = {
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
}, FP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UP
}, Symbol.toStringTag, { value: "Module" })), WP = {
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
}, BP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WP
}, Symbol.toStringTag, { value: "Module" })), HP = {
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
}, jP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HP
}, Symbol.toStringTag, { value: "Module" })), zP = {
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
}, VP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zP
}, Symbol.toStringTag, { value: "Module" }));
