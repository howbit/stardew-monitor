var ig = Object.defineProperty;
var ng = (t, e, s) => e in t ? ig(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var K = (t, e, s) => ng(t, typeof e != "symbol" ? e + "" : e, s);
/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Pl(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const s of t.split(",")) e[s] = 1;
  return (s) => s in e;
}
const ze = {}, Hi = [], fs = () => {
}, wf = () => !1, wo = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Ro = (t) => t.startsWith("onUpdate:"), ft = Object.assign, wl = (t, e) => {
  const s = t.indexOf(e);
  s > -1 && t.splice(s, 1);
}, ag = Object.prototype.hasOwnProperty, Oe = (t, e) => ag.call(t, e), he = Array.isArray, ji = (t) => la(t) === "[object Map]", Rf = (t) => la(t) === "[object Set]", Yc = (t) => la(t) === "[object Date]", ge = (t) => typeof t == "function", tt = (t) => typeof t == "string", ps = (t) => typeof t == "symbol", Ne = (t) => t !== null && typeof t == "object", Mf = (t) => (Ne(t) || ge(t)) && ge(t.then) && ge(t.catch), Df = Object.prototype.toString, la = (t) => Df.call(t), og = (t) => la(t).slice(8, -1), If = (t) => la(t) === "[object Object]", Rl = (t) => tt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Rn = /* @__PURE__ */ Pl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Mo = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((s) => e[s] || (e[s] = t(s)));
}, rg = /-\w/g, It = Mo(
  (t) => t.replace(rg, (e) => e.slice(1).toUpperCase())
), lg = /\B([A-Z])/g, Ai = Mo(
  (t) => t.replace(lg, "-$1").toLowerCase()
), Do = Mo((t) => t.charAt(0).toUpperCase() + t.slice(1)), ar = Mo(
  (t) => t ? `on${Do(t)}` : ""
), ds = (t, e) => !Object.is(t, e), qa = (t, ...e) => {
  for (let s = 0; s < t.length; s++)
    t[s](...e);
}, Ef = (t, e, s, i = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: s
  });
}, Ml = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, cg = (t) => {
  const e = tt(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let Xc;
const Io = () => Xc || (Xc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vn(t) {
  if (he(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++) {
      const i = t[s], n = tt(i) ? hg(i) : Vn(i);
      if (n)
        for (const a in n)
          e[a] = n[a];
    }
    return e;
  } else if (tt(t) || Ne(t))
    return t;
}
const ug = /;(?![^(]*\))/g, dg = /:([^]+)/, fg = /\/\*[^]*?\*\//g;
function hg(t) {
  const e = {};
  return t.replace(fg, "").split(ug).forEach((s) => {
    if (s) {
      const i = s.split(dg);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
}
function We(t) {
  let e = "";
  if (tt(t))
    e = t;
  else if (he(t))
    for (let s = 0; s < t.length; s++) {
      const i = We(t[s]);
      i && (e += i + " ");
    }
  else if (Ne(t))
    for (const s in t)
      t[s] && (e += s + " ");
  return e.trim();
}
const pg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", mg = /* @__PURE__ */ Pl(pg);
function Of(t) {
  return !!t || t === "";
}
function gg(t, e) {
  if (t.length !== e.length) return !1;
  let s = !0;
  for (let i = 0; s && i < t.length; i++)
    s = Dl(t[i], e[i]);
  return s;
}
function Dl(t, e) {
  if (t === e) return !0;
  let s = Yc(t), i = Yc(e);
  if (s || i)
    return s && i ? t.getTime() === e.getTime() : !1;
  if (s = ps(t), i = ps(e), s || i)
    return t === e;
  if (s = he(t), i = he(e), s || i)
    return s && i ? gg(t, e) : !1;
  if (s = Ne(t), i = Ne(e), s || i) {
    if (!s || !i)
      return !1;
    const n = Object.keys(t).length, a = Object.keys(e).length;
    if (n !== a)
      return !1;
    for (const o in t) {
      const r = t.hasOwnProperty(o), l = e.hasOwnProperty(o);
      if (r && !l || !r && l || !Dl(t[o], e[o]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const Nf = (t) => !!(t && t.__v_isRef === !0), F = (t) => tt(t) ? t : t == null ? "" : he(t) || Ne(t) && (t.toString === Df || !ge(t.toString)) ? Nf(t) ? F(t.value) : JSON.stringify(t, Lf, 2) : String(t), Lf = (t, e) => Nf(e) ? Lf(t, e.value) : ji(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (s, [i, n], a) => (s[or(i, a) + " =>"] = n, s),
    {}
  )
} : Rf(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((s) => or(s))
} : ps(e) ? or(e) : Ne(e) && !he(e) && !If(e) ? String(e) : e, or = (t, e = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ps(t) ? `Symbol(${(s = t.description) != null ? s : e})` : t
  );
};
/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let mt;
class bg {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && mt && (mt.active ? (this.parent = mt, this.index = (mt.scopes || (mt.scopes = [])).push(
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
      const s = mt;
      try {
        return mt = this, e();
      } finally {
        mt = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = mt, mt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (mt === this)
        mt = this.prevScope;
      else {
        let e = mt;
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
function yg() {
  return mt;
}
let Ge;
const rr = /* @__PURE__ */ new WeakSet();
class Uf {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, mt && (mt.active ? mt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, rr.has(this) && (rr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Wf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Qc(this), Bf(this);
    const e = Ge, s = Xt;
    Ge = this, Xt = !0;
    try {
      return this.fn();
    } finally {
      Hf(this), Ge = e, Xt = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        Ol(e);
      this.deps = this.depsTail = void 0, Qc(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? rr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    jr(this) && this.run();
  }
  get dirty() {
    return jr(this);
  }
}
let Ff = 0, Mn, Dn;
function Wf(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = Dn, Dn = t;
    return;
  }
  t.next = Mn, Mn = t;
}
function Il() {
  Ff++;
}
function El() {
  if (--Ff > 0)
    return;
  if (Dn) {
    let e = Dn;
    for (Dn = void 0; e; ) {
      const s = e.next;
      e.next = void 0, e.flags &= -9, e = s;
    }
  }
  let t;
  for (; Mn; ) {
    let e = Mn;
    for (Mn = void 0; e; ) {
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
function Bf(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Hf(t) {
  let e, s = t.depsTail, i = s;
  for (; i; ) {
    const n = i.prevDep;
    i.version === -1 ? (i === s && (s = n), Ol(i), vg(i)) : e = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = n;
  }
  t.deps = e, t.depsTail = s;
}
function jr(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (jf(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function jf(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === zn) || (t.globalVersion = zn, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !jr(t))))
    return;
  t.flags |= 2;
  const e = t.dep, s = Ge, i = Xt;
  Ge = t, Xt = !0;
  try {
    Bf(t);
    const n = t.fn(t._value);
    (e.version === 0 || ds(n, t._value)) && (t.flags |= 128, t._value = n, e.version++);
  } catch (n) {
    throw e.version++, n;
  } finally {
    Ge = s, Xt = i, Hf(t), t.flags &= -3;
  }
}
function Ol(t, e = !1) {
  const { dep: s, prevSub: i, nextSub: n } = t;
  if (i && (i.nextSub = n, t.prevSub = void 0), n && (n.prevSub = i, t.nextSub = void 0), s.subs === t && (s.subs = i, !i && s.computed)) {
    s.computed.flags &= -5;
    for (let a = s.computed.deps; a; a = a.nextDep)
      Ol(a, !0);
  }
  !e && !--s.sc && s.map && s.map.delete(s.key);
}
function vg(t) {
  const { prevDep: e, nextDep: s } = t;
  e && (e.nextDep = s, t.prevDep = void 0), s && (s.prevDep = e, t.nextDep = void 0);
}
let Xt = !0;
const Vf = [];
function Ms() {
  Vf.push(Xt), Xt = !1;
}
function Ds() {
  const t = Vf.pop();
  Xt = t === void 0 ? !0 : t;
}
function Qc(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const s = Ge;
    Ge = void 0;
    try {
      e();
    } finally {
      Ge = s;
    }
  }
}
let zn = 0;
class _g {
  constructor(e, s) {
    this.sub = e, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Nl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!Ge || !Xt || Ge === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== Ge)
      s = this.activeLink = new _g(Ge, this), Ge.deps ? (s.prevDep = Ge.depsTail, Ge.depsTail.nextDep = s, Ge.depsTail = s) : Ge.deps = Ge.depsTail = s, zf(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const i = s.nextDep;
      i.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = i), s.prevDep = Ge.depsTail, s.nextDep = void 0, Ge.depsTail.nextDep = s, Ge.depsTail = s, Ge.deps === s && (Ge.deps = i);
    }
    return s;
  }
  trigger(e) {
    this.version++, zn++, this.notify(e);
  }
  notify(e) {
    Il();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      El();
    }
  }
}
function zf(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let i = e.deps; i; i = i.nextDep)
        zf(i);
    }
    const s = t.dep.subs;
    s !== t && (t.prevSub = s, s && (s.nextSub = t)), t.dep.subs = t;
  }
}
const Vr = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ Symbol(
  ""
), zr = /* @__PURE__ */ Symbol(
  ""
), qn = /* @__PURE__ */ Symbol(
  ""
);
function yt(t, e, s) {
  if (Xt && Ge) {
    let i = Vr.get(t);
    i || Vr.set(t, i = /* @__PURE__ */ new Map());
    let n = i.get(s);
    n || (i.set(s, n = new Nl()), n.map = i, n.key = s), n.track();
  }
}
function As(t, e, s, i, n, a) {
  const o = Vr.get(t);
  if (!o) {
    zn++;
    return;
  }
  const r = (l) => {
    l && l.trigger();
  };
  if (Il(), e === "clear")
    o.forEach(r);
  else {
    const l = he(t), c = l && Rl(s);
    if (l && s === "length") {
      const u = Number(i);
      o.forEach((d, f) => {
        (f === "length" || f === qn || !ps(f) && f >= u) && r(d);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && r(o.get(s)), c && r(o.get(qn)), e) {
        case "add":
          l ? c && r(o.get("length")) : (r(o.get(bi)), ji(t) && r(o.get(zr)));
          break;
        case "delete":
          l || (r(o.get(bi)), ji(t) && r(o.get(zr)));
          break;
        case "set":
          ji(t) && r(o.get(bi));
          break;
      }
  }
  El();
}
function Ri(t) {
  const e = /* @__PURE__ */ Ee(t);
  return e === t ? e : (yt(e, "iterate", qn), /* @__PURE__ */ Kt(t) ? e : e.map(es));
}
function Eo(t) {
  return yt(t = /* @__PURE__ */ Ee(t), "iterate", qn), t;
}
function cs(t, e) {
  return /* @__PURE__ */ Is(t) ? $i(/* @__PURE__ */ yi(t) ? es(e) : e) : es(e);
}
const kg = {
  __proto__: null,
  [Symbol.iterator]() {
    return lr(this, Symbol.iterator, (t) => cs(this, t));
  },
  concat(...t) {
    return Ri(this).concat(
      ...t.map((e) => he(e) ? Ri(e) : e)
    );
  },
  entries() {
    return lr(this, "entries", (t) => (t[1] = cs(this, t[1]), t));
  },
  every(t, e) {
    return ms(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return ms(
      this,
      "filter",
      t,
      e,
      (s) => s.map((i) => cs(this, i)),
      arguments
    );
  },
  find(t, e) {
    return ms(
      this,
      "find",
      t,
      e,
      (s) => cs(this, s),
      arguments
    );
  },
  findIndex(t, e) {
    return ms(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return ms(
      this,
      "findLast",
      t,
      e,
      (s) => cs(this, s),
      arguments
    );
  },
  findLastIndex(t, e) {
    return ms(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return ms(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return cr(this, "includes", t);
  },
  indexOf(...t) {
    return cr(this, "indexOf", t);
  },
  join(t) {
    return Ri(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return cr(this, "lastIndexOf", t);
  },
  map(t, e) {
    return ms(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return on(this, "pop");
  },
  push(...t) {
    return on(this, "push", t);
  },
  reduce(t, ...e) {
    return Zc(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Zc(this, "reduceRight", t, e);
  },
  shift() {
    return on(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return ms(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return on(this, "splice", t);
  },
  toReversed() {
    return Ri(this).toReversed();
  },
  toSorted(t) {
    return Ri(this).toSorted(t);
  },
  toSpliced(...t) {
    return Ri(this).toSpliced(...t);
  },
  unshift(...t) {
    return on(this, "unshift", t);
  },
  values() {
    return lr(this, "values", (t) => cs(this, t));
  }
};
function lr(t, e, s) {
  const i = Eo(t), n = i[e]();
  return i !== t && !/* @__PURE__ */ Kt(t) && (n._next = n.next, n.next = () => {
    const a = n._next();
    return a.done || (a.value = s(a.value)), a;
  }), n;
}
const Sg = Array.prototype;
function ms(t, e, s, i, n, a) {
  const o = Eo(t), r = o !== t && !/* @__PURE__ */ Kt(t), l = o[e];
  if (l !== Sg[e]) {
    const d = l.apply(t, a);
    return r ? es(d) : d;
  }
  let c = s;
  o !== t && (r ? c = function(d, f) {
    return s.call(this, cs(t, d), f, t);
  } : s.length > 2 && (c = function(d, f) {
    return s.call(this, d, f, t);
  }));
  const u = l.call(o, c, i);
  return r && n ? n(u) : u;
}
function Zc(t, e, s, i) {
  const n = Eo(t), a = n !== t && !/* @__PURE__ */ Kt(t);
  let o = s, r = !1;
  n !== t && (a ? (r = i.length === 0, o = function(c, u, d) {
    return r && (r = !1, c = cs(t, c)), s.call(this, c, cs(t, u), d, t);
  }) : s.length > 3 && (o = function(c, u, d) {
    return s.call(this, c, u, d, t);
  }));
  const l = n[e](o, ...i);
  return r ? cs(t, l) : l;
}
function cr(t, e, s) {
  const i = /* @__PURE__ */ Ee(t);
  yt(i, "iterate", qn);
  const n = i[e](...s);
  return (n === -1 || n === !1) && /* @__PURE__ */ Fl(s[0]) ? (s[0] = /* @__PURE__ */ Ee(s[0]), i[e](...s)) : n;
}
function on(t, e, s = []) {
  Ms(), Il();
  const i = (/* @__PURE__ */ Ee(t))[e].apply(t, s);
  return El(), Ds(), i;
}
const Tg = /* @__PURE__ */ Pl("__proto__,__v_isRef,__isVue"), qf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(ps)
);
function xg(t) {
  ps(t) || (t = String(t));
  const e = /* @__PURE__ */ Ee(this);
  return yt(e, "has", t), e.hasOwnProperty(t);
}
class Gf {
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
      return i === (n ? a ? Og : Yf : a ? Jf : $f).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
    const o = he(e);
    if (!n) {
      let l;
      if (o && (l = kg[s]))
        return l;
      if (s === "hasOwnProperty")
        return xg;
    }
    const r = Reflect.get(
      e,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ kt(e) ? e : i
    );
    if ((ps(s) ? qf.has(s) : Tg(s)) || (n || yt(e, "get", s), a))
      return r;
    if (/* @__PURE__ */ kt(r)) {
      const l = o && Rl(s) ? r : r.value;
      return n && Ne(l) ? /* @__PURE__ */ Gr(l) : l;
    }
    return Ne(r) ? n ? /* @__PURE__ */ Gr(r) : /* @__PURE__ */ ca(r) : r;
  }
}
class Kf extends Gf {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, s, i, n) {
    let a = e[s];
    const o = he(e) && Rl(s);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Is(a);
      if (!/* @__PURE__ */ Kt(i) && !/* @__PURE__ */ Is(i) && (a = /* @__PURE__ */ Ee(a), i = /* @__PURE__ */ Ee(i)), !o && /* @__PURE__ */ kt(a) && !/* @__PURE__ */ kt(i))
        return c || (a.value = i), !0;
    }
    const r = o ? Number(s) < e.length : Oe(e, s), l = Reflect.set(
      e,
      s,
      i,
      /* @__PURE__ */ kt(e) ? e : n
    );
    return e === /* @__PURE__ */ Ee(n) && l && (r ? ds(i, a) && As(e, "set", s, i) : As(e, "add", s, i)), l;
  }
  deleteProperty(e, s) {
    const i = Oe(e, s);
    e[s];
    const n = Reflect.deleteProperty(e, s);
    return n && i && As(e, "delete", s, void 0), n;
  }
  has(e, s) {
    const i = Reflect.has(e, s);
    return (!ps(s) || !qf.has(s)) && yt(e, "has", s), i;
  }
  ownKeys(e) {
    return yt(
      e,
      "iterate",
      he(e) ? "length" : bi
    ), Reflect.ownKeys(e);
  }
}
class Ag extends Gf {
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
const Cg = /* @__PURE__ */ new Kf(), Pg = /* @__PURE__ */ new Ag(), wg = /* @__PURE__ */ new Kf(!0);
const qr = (t) => t, Sa = (t) => Reflect.getPrototypeOf(t);
function Rg(t, e, s) {
  return function(...i) {
    const n = this.__v_raw, a = /* @__PURE__ */ Ee(n), o = ji(a), r = t === "entries" || t === Symbol.iterator && o, l = t === "keys" && o, c = n[t](...i), u = s ? qr : e ? $i : es;
    return !e && yt(
      a,
      "iterate",
      l ? zr : bi
    ), ft(
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
function Ta(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Mg(t, e) {
  const s = {
    get(n) {
      const a = this.__v_raw, o = /* @__PURE__ */ Ee(a), r = /* @__PURE__ */ Ee(n);
      t || (ds(n, r) && yt(o, "get", n), yt(o, "get", r));
      const { has: l } = Sa(o), c = e ? qr : t ? $i : es;
      if (l.call(o, n))
        return c(a.get(n));
      if (l.call(o, r))
        return c(a.get(r));
      a !== o && a.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !t && yt(/* @__PURE__ */ Ee(n), "iterate", bi), n.size;
    },
    has(n) {
      const a = this.__v_raw, o = /* @__PURE__ */ Ee(a), r = /* @__PURE__ */ Ee(n);
      return t || (ds(n, r) && yt(o, "has", n), yt(o, "has", r)), n === r ? a.has(n) : a.has(n) || a.has(r);
    },
    forEach(n, a) {
      const o = this, r = o.__v_raw, l = /* @__PURE__ */ Ee(r), c = e ? qr : t ? $i : es;
      return !t && yt(l, "iterate", bi), r.forEach((u, d) => n.call(a, c(u), c(d), o));
    }
  };
  return ft(
    s,
    t ? {
      add: Ta("add"),
      set: Ta("set"),
      delete: Ta("delete"),
      clear: Ta("clear")
    } : {
      add(n) {
        const a = /* @__PURE__ */ Ee(this), o = Sa(a), r = /* @__PURE__ */ Ee(n), l = !e && !/* @__PURE__ */ Kt(n) && !/* @__PURE__ */ Is(n) ? r : n;
        return o.has.call(a, l) || ds(n, l) && o.has.call(a, n) || ds(r, l) && o.has.call(a, r) || (a.add(l), As(a, "add", l, l)), this;
      },
      set(n, a) {
        !e && !/* @__PURE__ */ Kt(a) && !/* @__PURE__ */ Is(a) && (a = /* @__PURE__ */ Ee(a));
        const o = /* @__PURE__ */ Ee(this), { has: r, get: l } = Sa(o);
        let c = r.call(o, n);
        c || (n = /* @__PURE__ */ Ee(n), c = r.call(o, n));
        const u = l.call(o, n);
        return o.set(n, a), c ? ds(a, u) && As(o, "set", n, a) : As(o, "add", n, a), this;
      },
      delete(n) {
        const a = /* @__PURE__ */ Ee(this), { has: o, get: r } = Sa(a);
        let l = o.call(a, n);
        l || (n = /* @__PURE__ */ Ee(n), l = o.call(a, n)), r && r.call(a, n);
        const c = a.delete(n);
        return l && As(a, "delete", n, void 0), c;
      },
      clear() {
        const n = /* @__PURE__ */ Ee(this), a = n.size !== 0, o = n.clear();
        return a && As(
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
    s[n] = Rg(n, t, e);
  }), s;
}
function Ll(t, e) {
  const s = Mg(t, e);
  return (i, n, a) => n === "__v_isReactive" ? !t : n === "__v_isReadonly" ? t : n === "__v_raw" ? i : Reflect.get(
    Oe(s, n) && n in i ? s : i,
    n,
    a
  );
}
const Dg = {
  get: /* @__PURE__ */ Ll(!1, !1)
}, Ig = {
  get: /* @__PURE__ */ Ll(!1, !0)
}, Eg = {
  get: /* @__PURE__ */ Ll(!0, !1)
};
const $f = /* @__PURE__ */ new WeakMap(), Jf = /* @__PURE__ */ new WeakMap(), Yf = /* @__PURE__ */ new WeakMap(), Og = /* @__PURE__ */ new WeakMap();
function Ng(t) {
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
function ca(t) {
  return /* @__PURE__ */ Is(t) ? t : Ul(
    t,
    !1,
    Cg,
    Dg,
    $f
  );
}
// @__NO_SIDE_EFFECTS__
function Xf(t) {
  return Ul(
    t,
    !1,
    wg,
    Ig,
    Jf
  );
}
// @__NO_SIDE_EFFECTS__
function Gr(t) {
  return Ul(
    t,
    !0,
    Pg,
    Eg,
    Yf
  );
}
function Ul(t, e, s, i, n) {
  if (!Ne(t) || t.__v_raw && !(e && t.__v_isReactive) || t.__v_skip || !Object.isExtensible(t))
    return t;
  const a = n.get(t);
  if (a)
    return a;
  const o = Ng(og(t));
  if (o === 0)
    return t;
  const r = new Proxy(
    t,
    o === 2 ? i : s
  );
  return n.set(t, r), r;
}
// @__NO_SIDE_EFFECTS__
function yi(t) {
  return /* @__PURE__ */ Is(t) ? /* @__PURE__ */ yi(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Is(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Kt(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Fl(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ee(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ Ee(e) : t;
}
function Lg(t) {
  return !Oe(t, "__v_skip") && Object.isExtensible(t) && Ef(t, "__v_skip", !0), t;
}
const es = (t) => Ne(t) ? /* @__PURE__ */ ca(t) : t, $i = (t) => Ne(t) ? /* @__PURE__ */ Gr(t) : t;
// @__NO_SIDE_EFFECTS__
function kt(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ie(t) {
  return Qf(t, !1);
}
// @__NO_SIDE_EFFECTS__
function Ug(t) {
  return Qf(t, !0);
}
function Qf(t, e) {
  return /* @__PURE__ */ kt(t) ? t : new Fg(t, e);
}
class Fg {
  constructor(e, s) {
    this.dep = new Nl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? e : /* @__PURE__ */ Ee(e), this._value = s ? e : es(e), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const s = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Kt(e) || /* @__PURE__ */ Is(e);
    e = i ? e : /* @__PURE__ */ Ee(e), ds(e, s) && (this._rawValue = e, this._value = i ? e : es(e), this.dep.trigger());
  }
}
function V(t) {
  return /* @__PURE__ */ kt(t) ? t.value : t;
}
const Wg = {
  get: (t, e, s) => e === "__v_raw" ? t : V(Reflect.get(t, e, s)),
  set: (t, e, s, i) => {
    const n = t[e];
    return /* @__PURE__ */ kt(n) && !/* @__PURE__ */ kt(s) ? (n.value = s, !0) : Reflect.set(t, e, s, i);
  }
};
function Zf(t) {
  return /* @__PURE__ */ yi(t) ? t : new Proxy(t, Wg);
}
class Bg {
  constructor(e, s, i) {
    this.fn = e, this.setter = s, this._value = void 0, this.dep = new Nl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = zn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ge !== this)
      return Wf(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return jf(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function Hg(t, e, s = !1) {
  let i, n;
  return ge(t) ? i = t : (i = t.get, n = t.set), new Bg(i, n, s);
}
const xa = {}, oo = /* @__PURE__ */ new WeakMap();
let ui;
function jg(t, e = !1, s = ui) {
  if (s) {
    let i = oo.get(s);
    i || oo.set(s, i = []), i.push(t);
  }
}
function Vg(t, e, s = ze) {
  const { immediate: i, deep: n, once: a, scheduler: o, augmentJob: r, call: l } = s, c = (k) => n ? k : /* @__PURE__ */ Kt(k) || n === !1 || n === 0 ? Cs(k, 1) : Cs(k);
  let u, d, f, h, m = !1, g = !1;
  if (/* @__PURE__ */ kt(t) ? (d = () => t.value, m = /* @__PURE__ */ Kt(t)) : /* @__PURE__ */ yi(t) ? (d = () => c(t), m = !0) : he(t) ? (g = !0, m = t.some((k) => /* @__PURE__ */ yi(k) || /* @__PURE__ */ Kt(k)), d = () => t.map((k) => {
    if (/* @__PURE__ */ kt(k))
      return k.value;
    if (/* @__PURE__ */ yi(k))
      return c(k);
    if (ge(k))
      return l ? l(k, 2) : k();
  })) : ge(t) ? e ? d = l ? () => l(t, 2) : t : d = () => {
    if (f) {
      Ms();
      try {
        f();
      } finally {
        Ds();
      }
    }
    const k = ui;
    ui = u;
    try {
      return l ? l(t, 3, [h]) : t(h);
    } finally {
      ui = k;
    }
  } : d = fs, e && n) {
    const k = d, P = n === !0 ? 1 / 0 : n;
    d = () => Cs(k(), P);
  }
  const v = yg(), S = () => {
    u.stop(), v && v.active && wl(v.effects, u);
  };
  if (a && e) {
    const k = e;
    e = (...P) => {
      const D = k(...P);
      return S(), D;
    };
  }
  let x = g ? new Array(t.length).fill(xa) : xa;
  const C = (k) => {
    if (!(!(u.flags & 1) || !u.dirty && !k))
      if (e) {
        const P = u.run();
        if (k || n || m || (g ? P.some((D, R) => ds(D, x[R])) : ds(P, x))) {
          f && f();
          const D = ui;
          ui = u;
          try {
            const R = [
              P,
              // pass undefined as the old value when it's changed for the first time
              x === xa ? void 0 : g && x[0] === xa ? [] : x,
              h
            ];
            x = P, l ? l(e, 3, R) : (
              // @ts-expect-error
              e(...R)
            );
          } finally {
            ui = D;
          }
        }
      } else
        u.run();
  };
  return r && r(C), u = new Uf(d), u.scheduler = o ? () => o(C, !1) : C, h = (k) => jg(k, !1, u), f = u.onStop = () => {
    const k = oo.get(u);
    if (k) {
      if (l)
        l(k, 4);
      else
        for (const P of k) P();
      oo.delete(u);
    }
  }, e ? i ? C(!0) : x = u.run() : o ? o(C.bind(null, !0), !0) : u.run(), S.pause = u.pause.bind(u), S.resume = u.resume.bind(u), S.stop = S, S;
}
function Cs(t, e = 1 / 0, s) {
  if (e <= 0 || !Ne(t) || t.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(t) || 0) >= e))
    return t;
  if (s.set(t, e), e--, /* @__PURE__ */ kt(t))
    Cs(t.value, e, s);
  else if (he(t))
    for (let i = 0; i < t.length; i++)
      Cs(t[i], e, s);
  else if (Rf(t) || ji(t))
    t.forEach((i) => {
      Cs(i, e, s);
    });
  else if (If(t)) {
    for (const i in t)
      Cs(t[i], e, s);
    for (const i of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, i) && Cs(t[i], e, s);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ua(t, e, s, i) {
  try {
    return i ? t(...i) : t();
  } catch (n) {
    Oo(n, e, s);
  }
}
function $t(t, e, s, i) {
  if (ge(t)) {
    const n = ua(t, e, s, i);
    return n && Mf(n) && n.catch((a) => {
      Oo(a, e, s);
    }), n;
  }
  if (he(t)) {
    const n = [];
    for (let a = 0; a < t.length; a++)
      n.push($t(t[a], e, s, i));
    return n;
  }
}
function Oo(t, e, s, i = !0) {
  const n = e ? e.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = e && e.appContext.config || ze;
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
      Ms(), ua(a, null, 10, [
        t,
        l,
        c
      ]), Ds();
      return;
    }
  }
  zg(t, s, n, i, o);
}
function zg(t, e, s, i = !0, n = !1) {
  if (n)
    throw t;
  console.error(t);
}
const Mt = [];
let rs = -1;
const Vi = [];
let Bs = null, Oi = 0;
const eh = /* @__PURE__ */ Promise.resolve();
let ro = null;
function Fi(t) {
  const e = ro || eh;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function qg(t) {
  let e = rs + 1, s = Mt.length;
  for (; e < s; ) {
    const i = e + s >>> 1, n = Mt[i], a = Gn(n);
    a < t || a === t && n.flags & 2 ? e = i + 1 : s = i;
  }
  return e;
}
function Wl(t) {
  if (!(t.flags & 1)) {
    const e = Gn(t), s = Mt[Mt.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Gn(s) ? Mt.push(t) : Mt.splice(qg(e), 0, t), t.flags |= 1, th();
  }
}
function th() {
  ro || (ro = eh.then(ih));
}
function Gg(t) {
  if (!he(t))
    Bs && t.id === -1 ? Bs.splice(Oi + 1, 0, t) : t.flags & 1 || (Vi.push(t), t.flags |= 1);
  else
    for (let e = 0; e < t.length; e++)
      Vi.push(t[e]);
  th();
}
function eu(t, e, s = rs + 1) {
  for (; s < Mt.length; s++) {
    const i = Mt[s];
    if (i && i.flags & 2) {
      if (t && i.id !== t.uid)
        continue;
      Mt.splice(s, 1), s--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function sh(t) {
  if (Vi.length) {
    const e = [...new Set(Vi)].sort(
      (s, i) => Gn(s) - Gn(i)
    );
    if (Vi.length = 0, Bs) {
      for (let s = 0; s < e.length; s++)
        Bs.push(e[s]);
      return;
    }
    for (Bs = e, Oi = 0; Oi < Bs.length; Oi++) {
      const s = Bs[Oi];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Bs = null, Oi = 0;
  }
}
const Gn = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function ih(t) {
  try {
    for (rs = 0; rs < Mt.length; rs++) {
      const e = Mt[rs];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), ua(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; rs < Mt.length; rs++) {
      const e = Mt[rs];
      e && (e.flags &= -2);
    }
    rs = -1, Mt.length = 0, sh(), ro = null, (Mt.length || Vi.length) && ih();
  }
}
let Ht = null, nh = null;
function lo(t) {
  const e = Ht;
  return Ht = t, nh = t && t.type.__scopeId || null, e;
}
function Bl(t, e = Ht, s) {
  if (!e || t._n)
    return t;
  const i = (...n) => {
    i._d && ho(-1);
    const a = lo(e), o = _i.length;
    let r;
    try {
      r = t(...n);
    } finally {
      for (let l = _i.length; l > o; l--) Eh();
      lo(a), i._d && ho(1);
    }
    return r;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function vs(t, e) {
  if (Ht === null)
    return t;
  const s = Bo(Ht), i = t.dirs || (t.dirs = []);
  for (let n = 0; n < e.length; n++) {
    let [a, o, r, l = ze] = e[n];
    a && (ge(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && Cs(o), i.push({
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
function si(t, e, s, i) {
  const n = t.dirs, a = e && e.dirs;
  for (let o = 0; o < n.length; o++) {
    const r = n[o];
    a && (r.oldValue = a[o].value);
    let l = r.dir[i];
    l && (Ms(), $t(l, s, 8, [
      t.el,
      r,
      t,
      e
    ]), Ds());
  }
}
function Ga(t, e) {
  if (vt) {
    let s = vt.provides;
    const i = vt.parent && vt.parent.provides;
    i === s && (s = vt.provides = Object.create(i)), s[t] = e;
  }
}
function Et(t, e, s = !1) {
  const i = Uh();
  if (i || qi) {
    let n = qi ? qi._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (n && t in n)
      return n[t];
    if (arguments.length > 1)
      return s && ge(e) ? e.call(i && i.proxy) : e;
  }
}
const Kg = /* @__PURE__ */ Symbol.for("v-scx"), $g = () => Et(Kg);
function zi(t, e, s) {
  return ah(t, e, s);
}
function ah(t, e, s = ze) {
  const { immediate: i, deep: n, flush: a, once: o } = s, r = ft({}, s), l = e && i || !e && a !== "post";
  let c;
  if (Yn) {
    if (a === "sync") {
      const h = $g();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = fs, h.resume = fs, h.pause = fs, h;
    }
  }
  const u = vt;
  r.call = (h, m, g) => $t(h, u, m, g);
  let d = !1;
  a === "post" ? r.scheduler = (h) => {
    wt(h, u && u.suspense);
  } : a !== "sync" && (d = !0, r.scheduler = (h, m) => {
    m ? h() : Wl(h);
  }), r.augmentJob = (h) => {
    e && (h.flags |= 4), d && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const f = Vg(t, e, r);
  return Yn && (c ? c.push(f) : l && f()), f;
}
function Jg(t, e, s) {
  const i = this.proxy, n = tt(t) ? t.includes(".") ? oh(i, t) : () => i[t] : t.bind(i, i);
  let a;
  ge(e) ? a = e : (a = e.handler, s = e);
  const o = ha(this), r = ah(n, a.bind(i), s);
  return o(), r;
}
function oh(t, e) {
  const s = e.split(".");
  return () => {
    let i = t;
    for (let n = 0; n < s.length && i; n++)
      i = i[s[n]];
    return i;
  };
}
const Ws = /* @__PURE__ */ new WeakMap(), rh = /* @__PURE__ */ Symbol("_vte"), No = (t) => t.__isTeleport, hi = (t) => t && (t.disabled || t.disabled === ""), Yg = (t) => t && (t.defer || t.defer === ""), tu = (t) => typeof SVGElement < "u" && t instanceof SVGElement, su = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, Kr = (t, e) => {
  const s = t && t.to;
  return tt(s) ? e ? e(s) : null : s;
}, Xg = {
  name: "Teleport",
  __isTeleport: !0,
  process(t, e, s, i, n, a, o, r, l, c) {
    const {
      mc: u,
      pc: d,
      pbc: f,
      o: { insert: h, querySelector: m, createText: g, createComment: v, parentNode: S }
    } = c, x = hi(e.props);
    let { dynamicChildren: C } = e;
    const k = (R, O, N) => {
      R.shapeFlag & 16 && u(
        R.children,
        O,
        N,
        n,
        a,
        o,
        r,
        l
      );
    }, P = (R = e) => {
      const O = hi(R.props), N = R.target = Kr(R.props, m), z = $r(N, R, g, h);
      N && (o !== "svg" && tu(N) ? o = "svg" : o !== "mathml" && su(N) && (o = "mathml"), n && n.isCE && (n.ce._teleportTargets || (n.ce._teleportTargets = /* @__PURE__ */ new Set())).add(N), O || (k(R, N, z), bn(R, !1)));
    }, D = (R) => {
      const O = () => {
        if (Ws.get(R) === O) {
          if (Ws.delete(R), hi(R.props)) {
            const N = S(R.el) || s;
            k(R, N, R.anchor), bn(R, !0);
          }
          P(R);
        }
      };
      Ws.set(R, O), wt(O, a);
    };
    if (t == null) {
      const R = e.el = g(""), O = e.anchor = g("");
      if (h(R, s, i), h(O, s, i), Yg(e.props) || a && a.pendingBranch) {
        D(e);
        return;
      }
      x && (k(e, s, O), bn(e, !0)), P();
    } else {
      e.el = t.el;
      const R = e.anchor = t.anchor, O = Ws.get(t);
      if (O) {
        O.flags |= 8, Ws.delete(t), D(e);
        return;
      }
      e.targetStart = t.targetStart;
      const N = e.target = t.target, z = e.targetAnchor = t.targetAnchor, J = hi(t.props), B = J ? s : N, ae = J ? R : z;
      if (o === "svg" || tu(N) ? o = "svg" : (o === "mathml" || su(N)) && (o = "mathml"), C ? (f(
        t.dynamicChildren,
        C,
        B,
        n,
        a,
        o,
        r
      ), Vl(t, e, !0)) : l || d(
        t,
        e,
        B,
        ae,
        n,
        a,
        o,
        r,
        !1
      ), x)
        J ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : Aa(
          e,
          s,
          R,
          c,
          1
        );
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const be = Kr(e.props, m);
        be && (e.target = be, Aa(
          e,
          be,
          null,
          c,
          0
        ));
      } else J && Aa(
        e,
        N,
        z,
        c,
        1
      );
      bn(e, x);
    }
  },
  remove(t, e, s, { um: i, o: { remove: n } }, a) {
    const {
      shapeFlag: o,
      children: r,
      anchor: l,
      targetStart: c,
      targetAnchor: u,
      target: d,
      props: f
    } = t, h = hi(f), m = a || !h, g = Ws.get(t);
    if (g && (g.flags |= 8, Ws.delete(t)), d && (n(c), n(u)), a && n(l), !g && (h || d) && o & 16)
      for (let v = 0; v < r.length; v++) {
        const S = r[v];
        i(
          S,
          e,
          s,
          m,
          !!S.dynamicChildren
        );
      }
  },
  move: Aa,
  hydrate: Qg
};
function Aa(t, e, s, { o: { insert: i }, m: n }, a = 2) {
  a === 0 && i(t.targetAnchor, e, s);
  const { el: o, anchor: r, shapeFlag: l, children: c, props: u } = t, d = a === 2;
  if (d && i(o, e, s), !Ws.has(t) && (!d || hi(u)) && l & 16)
    for (let f = 0; f < c.length; f++)
      n(
        c[f],
        e,
        s,
        2
      );
  d && i(r, e, s);
}
function Qg(t, e, s, i, n, a, {
  o: { nextSibling: o, parentNode: r, querySelector: l, insert: c, createText: u }
}, d) {
  function f(v, S) {
    let x = S;
    for (; x; ) {
      if (x && x.nodeType === 8) {
        if (x.data === "teleport start anchor")
          e.targetStart = x;
        else if (x.data === "teleport anchor") {
          e.targetAnchor = x, v._lpa = e.targetAnchor && o(e.targetAnchor);
          break;
        }
      }
      x = o(x);
    }
  }
  function h(v, S) {
    S.anchor = d(
      o(v),
      S,
      r(v),
      s,
      i,
      n,
      a
    );
  }
  const m = e.target = Kr(
    e.props,
    l
  ), g = hi(e.props);
  if (m) {
    const v = m._lpa || m.firstChild;
    e.shapeFlag & 16 && (g ? (h(t, e), f(m, v), e.targetAnchor || $r(
      m,
      e,
      u,
      c,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      r(t) === m ? t : null
    )) : (e.anchor = o(t), f(m, v), e.targetAnchor || $r(m, e, u, c), d(
      v && o(v),
      e,
      m,
      s,
      i,
      n,
      a
    ))), bn(e, g);
  } else g && e.shapeFlag & 16 && (h(t, e), e.targetStart = t, e.targetAnchor = o(t));
  return e.anchor && o(e.anchor);
}
const Zg = Xg;
function bn(t, e) {
  const s = t.ctx;
  if (s && s.ut) {
    let i, n;
    for (e ? (i = t.el, n = t.anchor) : (i = t.targetStart, n = t.targetAnchor); i && i !== n; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", s.uid), i = i.nextSibling;
    s.ut();
  }
}
function $r(t, e, s, i, n = null) {
  const a = e.targetStart = s(""), o = e.targetAnchor = s("");
  return a[rh] = o, t && (i(a, t, n), i(o, t, n)), o;
}
const Gt = /* @__PURE__ */ Symbol("_leaveCb"), rn = /* @__PURE__ */ Symbol("_enterCb");
function eb() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return da(() => {
    t.isMounted = !0;
  }), gh(() => {
    t.isUnmounting = !0;
  }), t;
}
const zt = [Function, Array], lh = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: zt,
  onEnter: zt,
  onAfterEnter: zt,
  onEnterCancelled: zt,
  // leave
  onBeforeLeave: zt,
  onLeave: zt,
  onAfterLeave: zt,
  onLeaveCancelled: zt,
  // appear
  onBeforeAppear: zt,
  onAppear: zt,
  onAfterAppear: zt,
  onAppearCancelled: zt
}, ch = (t) => {
  const e = t.subTree;
  return e.component ? ch(e.component) : e;
}, tb = {
  name: "BaseTransition",
  props: lh,
  setup(t, { slots: e }) {
    const s = Uh(), i = eb();
    return () => {
      const n = e.default && fh(e.default(), !0), a = n && n.length ? uh(n) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        s.subTree ? Lt() : void 0
      );
      if (!a)
        return;
      const o = /* @__PURE__ */ Ee(t), { mode: r } = o;
      if (i.isLeaving)
        return ur(a);
      const l = co(a);
      if (!l)
        return ur(a);
      let c = Jr(
        l,
        o,
        i,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (d) => c = d
      );
      l.type !== Dt && Kn(l, c);
      let u = s.subTree && co(s.subTree);
      if (u && u.type !== Dt && !pi(u, l) && ch(s).type !== Dt) {
        let d = Jr(
          u,
          o,
          i,
          s
        );
        if (Kn(u, d), r === "out-in" && l.type !== Dt)
          return i.isLeaving = !0, d.afterLeave = () => {
            i.isLeaving = !1, s.job.flags & 8 || s.update(), delete d.afterLeave, u = void 0;
          }, ur(a);
        r === "in-out" && l.type !== Dt ? d.delayLeave = (f, h, m) => {
          const g = dh(
            i,
            u
          );
          g[String(u.key)] = u, f[Gt] = () => {
            h(), f[Gt] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            m(), delete c.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return a;
    };
  }
};
function uh(t) {
  let e = t[0];
  if (t.length > 1) {
    for (const s of t)
      if (s.type !== Dt) {
        e = s;
        break;
      }
  }
  return e;
}
const sb = tb;
function dh(t, e) {
  const { leavingVNodes: s } = t;
  let i = s.get(e.type);
  return i || (i = /* @__PURE__ */ Object.create(null), s.set(e.type, i)), i;
}
function Jr(t, e, s, i, n) {
  const {
    appear: a,
    mode: o,
    persisted: r = !1,
    onBeforeEnter: l,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: f,
    onLeave: h,
    onAfterLeave: m,
    onLeaveCancelled: g,
    onBeforeAppear: v,
    onAppear: S,
    onAfterAppear: x,
    onAppearCancelled: C
  } = e, k = String(t.key), P = dh(s, t), D = (N, z) => {
    N && $t(
      N,
      i,
      9,
      z
    );
  }, R = (N, z) => {
    const J = z[1];
    D(N, z), he(N) ? N.every((B) => B.length <= 1) && J() : N.length <= 1 && J();
  }, O = {
    mode: o,
    persisted: r,
    beforeEnter(N) {
      let z = l;
      if (!s.isMounted)
        if (a)
          z = v || l;
        else
          return;
      N[Gt] && N[Gt](
        !0
        /* cancelled */
      );
      const J = P[k];
      J && pi(t, J) && J.el[Gt] && J.el[Gt](), D(z, [N]);
    },
    enter(N) {
      if (P[k] === t) return;
      let z = c, J = u, B = d;
      if (!s.isMounted)
        if (a)
          z = S || c, J = x || u, B = C || d;
        else
          return;
      let ae = !1;
      N[rn] = (fe) => {
        ae || (ae = !0, fe ? D(B, [N]) : D(J, [N]), O.delayedLeave && O.delayedLeave(), N[rn] = void 0);
      };
      const be = N[rn].bind(null, !1);
      z ? R(z, [N, be]) : be();
    },
    leave(N, z) {
      const J = String(t.key);
      if (N[rn] && N[rn](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return z();
      D(f, [N]);
      let B = !1;
      N[Gt] = (be) => {
        B || (B = !0, z(), be ? D(g, [N]) : D(m, [N]), N[Gt] = void 0, P[J] === t && delete P[J]);
      };
      const ae = N[Gt].bind(null, !1);
      P[J] = t, h ? R(h, [N, ae]) : ae();
    },
    clone(N) {
      const z = Jr(
        N,
        e,
        s,
        i,
        n
      );
      return n && n(z), z;
    }
  };
  return O;
}
function ur(t) {
  if (Lo(t))
    return t = Ys(t), t.children = null, t;
}
function co(t) {
  if (!Lo(t))
    return No(t.type) && t.children ? uh(t.children) : t;
  if (t.component)
    return t.component.subTree;
  const { shapeFlag: e, children: s } = t;
  if (s) {
    if (e & 16)
      return s[0];
    if (e & 32 && ge(s.default))
      return s.default();
  }
}
function Kn(t, e) {
  if (t.shapeFlag & 6 && t.component) {
    t.transition = e;
    const s = t.component.subTree;
    Kn(
      No(s.type) && co(s) || s,
      e
    );
  } else t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function fh(t, e = !1, s) {
  let i = [], n = 0;
  for (let a = 0; a < t.length; a++) {
    let o = t[a];
    const r = s == null ? o.key : String(s) + String(o.key != null ? o.key : a);
    o.type === ut ? (o.patchFlag & 128 && n++, i = i.concat(
      fh(o.children, e, r)
    )) : (e || o.type !== Dt) && i.push(r != null ? Ys(o, { key: r }) : o);
  }
  if (n > 1)
    for (let a = 0; a < i.length; a++)
      i[a].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function hh(t, e) {
  return ge(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ft({ name: t.name }, e, { setup: t })
  ) : t;
}
function ph(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function iu(t, e) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(t, e)) && !s.configurable);
}
const uo = /* @__PURE__ */ new WeakMap();
function In(t, e, s, i, n = !1) {
  if (he(t)) {
    t.forEach(
      (g, v) => In(
        g,
        e && (he(e) ? e[v] : e),
        s,
        i,
        n
      )
    );
    return;
  }
  if (En(i) && !n) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && In(t, e, s, i.component.subTree);
    return;
  }
  const a = i.shapeFlag & 4 ? Bo(i.component) : i.el, o = n ? null : a, { i: r, r: l } = t, c = e && e.r, u = r.refs === ze ? r.refs = {} : r.refs, d = r.setupState, f = /* @__PURE__ */ Ee(d), h = d === ze ? wf : (g) => iu(u, g) ? !1 : Oe(f, g), m = (g, v) => !(v && iu(u, v));
  if (c != null && c !== l) {
    if (nu(e), tt(c))
      u[c] = null, h(c) && (d[c] = null);
    else if (/* @__PURE__ */ kt(c)) {
      const g = e;
      m(c, g.k) && (c.value = null), g.k && (u[g.k] = null);
    }
  }
  if (ge(l))
    ua(l, r, 12, [o, u]);
  else {
    const g = tt(l), v = /* @__PURE__ */ kt(l);
    if (g || v) {
      const S = () => {
        if (t.f) {
          const x = g ? h(l) ? d[l] : u[l] : m() || !t.k ? l.value : u[t.k];
          if (n)
            he(x) && wl(x, a);
          else if (he(x))
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
          S(), uo.delete(t);
        };
        x.id = -1, uo.set(t, x), wt(x, s);
      } else
        nu(t), S();
    }
  }
}
function nu(t) {
  const e = uo.get(t);
  e && (e.flags |= 8, uo.delete(t));
}
Io().requestIdleCallback;
Io().cancelIdleCallback;
const En = (t) => !!t.type.__asyncLoader, Lo = (t) => t.type.__isKeepAlive;
function ib(t, e) {
  mh(t, "a", e);
}
function nb(t, e) {
  mh(t, "da", e);
}
function mh(t, e, s = vt) {
  const i = t.__wdc || (t.__wdc = () => {
    let n = s;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return t();
  });
  if (Uo(e, i, s), s) {
    let n = s.parent;
    for (; n && n.parent; )
      Lo(n.parent.vnode) && ab(i, e, s, n), n = n.parent;
  }
}
function ab(t, e, s, i) {
  const n = Uo(
    e,
    t,
    i,
    !0
    /* prepend */
  );
  fa(() => {
    wl(i[e], n);
  }, s);
}
function Uo(t, e, s = vt, i = !1) {
  if (s) {
    const n = s[t] || (s[t] = []), a = e.__weh || (e.__weh = (...o) => {
      Ms();
      const r = ha(s), l = $t(e, s, t, o);
      return r(), Ds(), l;
    });
    return i ? n.unshift(a) : n.push(a), a;
  }
}
const Es = (t) => (e, s = vt) => {
  (!Yn || t === "sp") && Uo(t, (...i) => e(...i), s);
}, ob = Es("bm"), da = Es("m"), rb = Es(
  "bu"
), lb = Es("u"), gh = Es(
  "bum"
), fa = Es("um"), cb = Es(
  "sp"
), ub = Es("rtg"), db = Es("rtc");
function fb(t, e = vt) {
  Uo("ec", t, e);
}
const hb = "components";
function pb(t, e) {
  return gb(hb, t, !0, e) || t;
}
const mb = /* @__PURE__ */ Symbol.for("v-ndc");
function gb(t, e, s = !0, i = !1) {
  const n = Ht || vt;
  if (n) {
    const a = n.type;
    {
      const r = Zb(
        a,
        !1
      );
      if (r && (r === e || r === It(e) || r === Do(It(e))))
        return a;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      au(n[t] || a[t], e) || // global registration
      au(n.appContext[t], e)
    );
    return !o && i ? a : o;
  }
}
function au(t, e) {
  return t && (t[e] || t[It(e)] || t[Do(It(e))]);
}
function vi(t, e, s, i) {
  let n;
  const a = s, o = he(t);
  if (o || tt(t)) {
    const r = o && /* @__PURE__ */ yi(t);
    let l = !1, c = !1;
    r && (l = !/* @__PURE__ */ Kt(t), c = /* @__PURE__ */ Is(t), t = Eo(t)), n = new Array(t.length);
    for (let u = 0, d = t.length; u < d; u++)
      n[u] = e(
        l ? c ? $i(es(t[u])) : es(t[u]) : t[u],
        u,
        void 0,
        a
      );
  } else if (typeof t == "number") {
    n = new Array(t);
    for (let r = 0; r < t; r++)
      n[r] = e(r + 1, r, void 0, a);
  } else if (Ne(t))
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
const Yr = (t) => t ? Fh(t) ? Bo(t) : Yr(t.parent) : null, On = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ft(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Yr(t.parent),
    $root: (t) => Yr(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => yh(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      Wl(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Fi.bind(t.proxy)),
    $watch: (t) => Jg.bind(t)
  })
), dr = (t, e) => t !== ze && !t.__isScriptSetup && Oe(t, e), bb = {
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
        if (dr(i, e))
          return o[e] = 1, i[e];
        if (n !== ze && Oe(n, e))
          return o[e] = 2, n[e];
        if (Oe(a, e))
          return o[e] = 3, a[e];
        if (s !== ze && Oe(s, e))
          return o[e] = 4, s[e];
        Xr && (o[e] = 0);
      }
    }
    const c = On[e];
    let u, d;
    if (c)
      return e === "$attrs" && yt(t.attrs, "get", ""), c(t);
    if (
      // css module (injected by vue-loader)
      (u = r.__cssModules) && (u = u[e])
    )
      return u;
    if (s !== ze && Oe(s, e))
      return o[e] = 4, s[e];
    if (
      // global properties
      d = l.config.globalProperties, Oe(d, e)
    )
      return d[e];
  },
  set({ _: t }, e, s) {
    const { data: i, setupState: n, ctx: a } = t;
    return dr(n, e) ? (n[e] = s, !0) : i !== ze && Oe(i, e) ? (i[e] = s, !0) : Oe(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (a[e] = s, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: s, ctx: i, appContext: n, props: a, type: o }
  }, r) {
    let l;
    return !!(s[r] || t !== ze && r[0] !== "$" && Oe(t, r) || dr(e, r) || Oe(a, r) || Oe(i, r) || Oe(On, r) || Oe(n.config.globalProperties, r) || (l = o.__cssModules) && l[r]);
  },
  defineProperty(t, e, s) {
    return s.get != null ? t._.accessCache[e] = 0 : Oe(s, "value") && this.set(t, e, s.value, null), Reflect.defineProperty(t, e, s);
  }
};
function ou(t) {
  return he(t) ? t.reduce(
    (e, s) => (e[s] = null, e),
    {}
  ) : t;
}
let Xr = !0;
function yb(t) {
  const e = yh(t), s = t.proxy, i = t.ctx;
  Xr = !1, e.beforeCreate && ru(e.beforeCreate, t, "bc");
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
    beforeDestroy: S,
    beforeUnmount: x,
    destroyed: C,
    unmounted: k,
    render: P,
    renderTracked: D,
    renderTriggered: R,
    errorCaptured: O,
    serverPrefetch: N,
    // public API
    expose: z,
    inheritAttrs: J,
    // assets
    components: B,
    directives: ae,
    filters: be
  } = e;
  if (c && vb(c, i, null), o)
    for (const j in o) {
      const $ = o[j];
      ge($) && (i[j] = $.bind(s));
    }
  if (n) {
    const j = n.call(s, s);
    Ne(j) && (t.data = /* @__PURE__ */ ca(j));
  }
  if (Xr = !0, a)
    for (const j in a) {
      const $ = a[j], oe = ge($) ? $.bind(s, s) : ge($.get) ? $.get.bind(s, s) : fs, De = !ge($) && ge($.set) ? $.set.bind(s) : fs, He = pe({
        get: oe,
        set: De
      });
      Object.defineProperty(i, j, {
        enumerable: !0,
        configurable: !0,
        get: () => He.value,
        set: (Ie) => He.value = Ie
      });
    }
  if (r)
    for (const j in r)
      bh(r[j], i, s, j);
  if (l) {
    const j = ge(l) ? l.call(s) : l;
    Reflect.ownKeys(j).forEach(($) => {
      Ga($, j[$]);
    });
  }
  u && ru(u, t, "c");
  function ce(j, $) {
    he($) ? $.forEach((oe) => j(oe.bind(s))) : $ && j($.bind(s));
  }
  if (ce(ob, d), ce(da, f), ce(rb, h), ce(lb, m), ce(ib, g), ce(nb, v), ce(fb, O), ce(db, D), ce(ub, R), ce(gh, x), ce(fa, k), ce(cb, N), he(z))
    if (z.length) {
      const j = t.exposed || (t.exposed = {});
      z.forEach(($) => {
        Object.defineProperty(j, $, {
          get: () => s[$],
          set: (oe) => s[$] = oe,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  P && t.render === fs && (t.render = P), J != null && (t.inheritAttrs = J), B && (t.components = B), ae && (t.directives = ae), N && ph(t);
}
function vb(t, e, s = fs) {
  he(t) && (t = Qr(t));
  for (const i in t) {
    const n = t[i];
    let a;
    Ne(n) ? "default" in n ? a = Et(
      n.from || i,
      n.default,
      !0
    ) : a = Et(n.from || i) : a = Et(n), /* @__PURE__ */ kt(a) ? Object.defineProperty(e, i, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (o) => a.value = o
    }) : e[i] = a;
  }
}
function ru(t, e, s) {
  $t(
    he(t) ? t.map((i) => i.bind(e.proxy)) : t.bind(e.proxy),
    e,
    s
  );
}
function bh(t, e, s, i) {
  let n = i.includes(".") ? oh(s, i) : () => s[i];
  if (tt(t)) {
    const a = e[t];
    ge(a) && zi(n, a);
  } else if (ge(t))
    zi(n, t.bind(s));
  else if (Ne(t))
    if (he(t))
      t.forEach((a) => bh(a, e, s, i));
    else {
      const a = ge(t.handler) ? t.handler.bind(s) : e[t.handler];
      ge(a) && zi(n, a, t);
    }
}
function yh(t) {
  const e = t.type, { mixins: s, extends: i } = e, {
    mixins: n,
    optionsCache: a,
    config: { optionMergeStrategies: o }
  } = t.appContext, r = a.get(e);
  let l;
  return r ? l = r : !n.length && !s && !i ? l = e : (l = {}, n.length && n.forEach(
    (c) => fo(l, c, o, !0)
  ), fo(l, e, o)), Ne(e) && a.set(e, l), l;
}
function fo(t, e, s, i = !1) {
  const { mixins: n, extends: a } = e;
  a && fo(t, a, s, !0), n && n.forEach(
    (o) => fo(t, o, s, !0)
  );
  for (const o in e)
    if (!(i && o === "expose")) {
      const r = _b[o] || s && s[o];
      t[o] = r ? r(t[o], e[o]) : e[o];
    }
  return t;
}
const _b = {
  data: lu,
  props: cu,
  emits: cu,
  // objects
  methods: yn,
  computed: yn,
  // lifecycle
  beforeCreate: Pt,
  created: Pt,
  beforeMount: Pt,
  mounted: Pt,
  beforeUpdate: Pt,
  updated: Pt,
  beforeDestroy: Pt,
  beforeUnmount: Pt,
  destroyed: Pt,
  unmounted: Pt,
  activated: Pt,
  deactivated: Pt,
  errorCaptured: Pt,
  serverPrefetch: Pt,
  // assets
  components: yn,
  directives: yn,
  // watch
  watch: Sb,
  // provide / inject
  provide: lu,
  inject: kb
};
function lu(t, e) {
  return e ? t ? function() {
    return ft(
      ge(t) ? t.call(this, this) : t,
      ge(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function kb(t, e) {
  return yn(Qr(t), Qr(e));
}
function Qr(t) {
  if (he(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++)
      e[t[s]] = t[s];
    return e;
  }
  return t;
}
function Pt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function yn(t, e) {
  return t ? ft(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function cu(t, e) {
  return t ? he(t) && he(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : ft(
    /* @__PURE__ */ Object.create(null),
    ou(t),
    ou(e ?? {})
  ) : e;
}
function Sb(t, e) {
  if (!t) return e;
  if (!e) return t;
  const s = ft(/* @__PURE__ */ Object.create(null), t);
  for (const i in e)
    s[i] = Pt(t[i], e[i]);
  return s;
}
function vh() {
  return {
    app: null,
    config: {
      isNativeTag: wf,
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
let Tb = 0;
function xb(t, e) {
  return function(i, n = null) {
    ge(i) || (i = ft({}, i)), n != null && !Ne(n) && (n = null);
    const a = vh(), o = /* @__PURE__ */ new WeakSet(), r = [];
    let l = !1;
    const c = a.app = {
      _uid: Tb++,
      _component: i,
      _props: n,
      _container: null,
      _context: a,
      _instance: null,
      version: ty,
      get config() {
        return a.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return o.has(u) || (u && ge(u.install) ? (o.add(u), u.install(c, ...d)) : ge(u) && (o.add(u), u(c, ...d))), c;
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
          return h.appContext = a, f === !0 ? f = "svg" : f === !1 && (f = void 0), t(h, u, f), l = !0, c._container = u, u.__vue_app__ = c, Bo(h.component);
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
        const d = qi;
        qi = c;
        try {
          return u();
        } finally {
          qi = d;
        }
      }
    };
    return c;
  };
}
let qi = null;
const Ab = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${It(e)}Modifiers`] || t[`${Ai(e)}Modifiers`];
function Cb(t, e, ...s) {
  if (t.isUnmounted) return;
  const i = t.vnode.props || ze;
  let n = s;
  const a = e.startsWith("update:"), o = a && Ab(i, e.slice(7));
  o && (o.trim && (n = s.map((u) => tt(u) ? u.trim() : u)), o.number && (n = s.map(Ml)));
  let r, l = i[r = ar(e)] || // also try camelCase event handler (#2249)
  i[r = ar(It(e))];
  !l && a && (l = i[r = ar(Ai(e))]), l && $t(
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
const Pb = /* @__PURE__ */ new WeakMap();
function _h(t, e, s = !1) {
  const i = s ? Pb : e.emitsCache, n = i.get(t);
  if (n !== void 0)
    return n;
  const a = t.emits;
  let o = {}, r = !1;
  if (!ge(t)) {
    const l = (c) => {
      const u = _h(c, e, !0);
      u && (r = !0, ft(o, u));
    };
    !s && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !a && !r ? (Ne(t) && i.set(t, null), null) : (he(a) ? a.forEach((l) => o[l] = null) : ft(o, a), Ne(t) && i.set(t, o), o);
}
function Fo(t, e) {
  return !t || !wo(e) ? !1 : (e = e.slice(2), e = e === "Once" ? e : e.replace(/Once$/, ""), Oe(t, e[0].toLowerCase() + e.slice(1)) || Oe(t, Ai(e)) || Oe(t, e));
}
function uu(t) {
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
  } = t, v = lo(t);
  let S, x;
  try {
    if (s.shapeFlag & 4) {
      const k = n || i, P = k;
      S = us(
        c.call(
          P,
          k,
          u,
          d,
          h,
          f,
          m
        )
      ), x = r;
    } else {
      const k = e;
      S = us(
        k.length > 1 ? k(
          d,
          { attrs: r, slots: o, emit: l }
        ) : k(
          d,
          null
        )
      ), x = e.props ? r : wb(r);
    }
  } catch (k) {
    _i.length = 0, Oo(k, t, 1), S = Ce(Dt);
  }
  let C = S;
  if (x && g !== !1) {
    const k = Object.keys(x), { shapeFlag: P } = C;
    k.length && P & 7 && (a && k.some(Ro) && (x = Rb(
      x,
      a
    )), C = Ys(C, x, !1, !0));
  }
  if (s.dirs && (C = Ys(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(s.dirs) : s.dirs), s.transition) {
    const k = No(C.type) && co(C) || C;
    Kn(k, s.transition);
  }
  return S = C, lo(v), S;
}
const wb = (t) => {
  let e;
  for (const s in t)
    (s === "class" || s === "style" || wo(s)) && ((e || (e = {}))[s] = t[s]);
  return e;
}, Rb = (t, e) => {
  const s = {};
  for (const i in t)
    (!Ro(i) || !(i.slice(9) in e)) && (s[i] = t[i]);
  return s;
};
function Mb(t, e, s) {
  const { props: i, children: n, component: a } = t, { props: o, children: r, patchFlag: l } = e, c = a.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (s && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? du(i, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (kh(o, i, f) && !Fo(c, f))
          return !0;
      }
    }
  } else
    return (n || r) && (!r || !r.$stable) ? !0 : i === o ? !1 : i ? o ? du(i, o, c) : !0 : !!o;
  return !1;
}
function du(t, e, s) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(t).length)
    return !0;
  for (let n = 0; n < i.length; n++) {
    const a = i[n];
    if (kh(e, t, a) && !Fo(s, a))
      return !0;
  }
  return !1;
}
function kh(t, e, s) {
  const i = t[s], n = e[s];
  return s === "style" && Ne(i) && Ne(n) ? !Dl(i, n) : i !== n;
}
function Db({ vnode: t, parent: e, suspense: s }, i) {
  for (; e; ) {
    const n = e.subTree;
    if (n.suspense && n.suspense.activeBranch === t && (n.suspense.vnode.el = n.el = i, t = n), n === t)
      (t = e.vnode).el = i, e = e.parent;
    else
      break;
  }
  s && s.activeBranch === t && (s.vnode.el = i);
}
const Sh = {}, Th = () => Object.create(Sh), xh = (t) => Object.getPrototypeOf(t) === Sh;
function Ib(t, e, s, i = !1) {
  const n = {}, a = Th();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Ah(t, e, n, a);
  for (const o in t.propsOptions[0])
    o in n || (n[o] = void 0);
  s ? t.props = i ? n : /* @__PURE__ */ Xf(n) : t.type.props ? t.props = n : t.props = a, t.attrs = a;
}
function Eb(t, e, s, i) {
  const {
    props: n,
    attrs: a,
    vnode: { patchFlag: o }
  } = t, r = /* @__PURE__ */ Ee(n), [l] = t.propsOptions;
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
        if (Fo(t.emitsOptions, f))
          continue;
        const h = e[f];
        if (l)
          if (Oe(a, f))
            h !== a[f] && (a[f] = h, c = !0);
          else {
            const m = It(f);
            n[m] = Zr(
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
    Ah(t, e, n, a) && (c = !0);
    let u;
    for (const d in r)
      (!e || // for camelCase
      !Oe(e, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Ai(d)) === d || !Oe(e, u))) && (l ? s && // for camelCase
      (s[d] !== void 0 || // for kebab-case
      s[u] !== void 0) && (n[d] = Zr(
        l,
        r,
        d,
        void 0,
        t,
        !0
      )) : delete n[d]);
    if (a !== r)
      for (const d in a)
        (!e || !Oe(e, d)) && (delete a[d], c = !0);
  }
  c && As(t.attrs, "set", "");
}
function Ah(t, e, s, i) {
  const [n, a] = t.propsOptions;
  let o = !1, r;
  if (e)
    for (let l in e) {
      if (Rn(l))
        continue;
      const c = e[l];
      let u;
      n && Oe(n, u = It(l)) ? !a || !a.includes(u) ? s[u] = c : (r || (r = {}))[u] = c : Fo(t.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, o = !0);
    }
  if (a) {
    const l = /* @__PURE__ */ Ee(s), c = r || ze;
    for (let u = 0; u < a.length; u++) {
      const d = a[u];
      s[d] = Zr(
        n,
        l,
        d,
        c[d],
        t,
        !Oe(c, d)
      );
    }
  }
  return o;
}
function Zr(t, e, s, i, n, a) {
  const o = t[s];
  if (o != null) {
    const r = Oe(o, "default");
    if (r && i === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && ge(l)) {
        const { propsDefaults: c } = n;
        if (s in c)
          i = c[s];
        else {
          const u = ha(n);
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
    ] && (i === "" || i === Ai(s)) && (i = !0));
  }
  return i;
}
const Ob = /* @__PURE__ */ new WeakMap();
function Ch(t, e, s = !1) {
  const i = s ? Ob : e.propsCache, n = i.get(t);
  if (n)
    return n;
  const a = t.props, o = {}, r = [];
  let l = !1;
  if (!ge(t)) {
    const u = (d) => {
      l = !0;
      const [f, h] = Ch(d, e, !0);
      ft(o, f), h && r.push(...h);
    };
    !s && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
  }
  if (!a && !l)
    return Ne(t) && i.set(t, Hi), Hi;
  if (he(a))
    for (let u = 0; u < a.length; u++) {
      const d = It(a[u]);
      fu(d) && (o[d] = ze);
    }
  else if (a)
    for (const u in a) {
      const d = It(u);
      if (fu(d)) {
        const f = a[u], h = o[d] = he(f) || ge(f) ? { type: f } : ft({}, f), m = h.type;
        let g = !1, v = !0;
        if (he(m))
          for (let S = 0; S < m.length; ++S) {
            const x = m[S], C = ge(x) && x.name;
            if (C === "Boolean") {
              g = !0;
              break;
            } else C === "String" && (v = !1);
          }
        else
          g = ge(m) && m.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = g, h[
          1
          /* shouldCastTrue */
        ] = v, (g || Oe(h, "default")) && r.push(d);
      }
    }
  const c = [o, r];
  return Ne(t) && i.set(t, c), c;
}
function fu(t) {
  return t[0] !== "$" && !Rn(t);
}
const Hl = (t) => t === "_" || t === "_ctx" || t === "$stable", jl = (t) => he(t) ? t.map(us) : [us(t)], Nb = (t, e, s) => {
  if (e._n)
    return e;
  const i = Bl((...n) => jl(e(...n)), s);
  return i._c = !1, i;
}, Ph = (t, e, s) => {
  const i = t._ctx;
  for (const n in t) {
    if (Hl(n)) continue;
    const a = t[n];
    if (ge(a))
      e[n] = Nb(n, a, i);
    else if (a != null) {
      const o = jl(a);
      e[n] = () => o;
    }
  }
}, wh = (t, e) => {
  const s = jl(e);
  t.slots.default = () => s;
}, Rh = (t, e, s) => {
  for (const i in e)
    (s || !Hl(i)) && (t[i] = e[i]);
}, Lb = (t, e, s) => {
  const i = t.slots = Th();
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (Rh(i, e, s), s && Ef(i, "_", n, !0)) : Ph(e, i);
  } else e && wh(t, e);
}, Ub = (t, e, s) => {
  const { vnode: i, slots: n } = t;
  let a = !0, o = ze;
  if (i.shapeFlag & 32) {
    const r = e._;
    r ? s && r === 1 ? a = !1 : Rh(n, e, s) : (a = !e.$stable, Ph(e, n)), o = e;
  } else e && (wh(t, e), o = { default: 1 });
  if (a)
    for (const r in n)
      !Hl(r) && o[r] == null && delete n[r];
}, wt = jb;
function Fb(t) {
  return Wb(t);
}
function Wb(t, e) {
  const s = Io();
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
    setScopeId: h = fs,
    insertStaticContent: m
  } = t, g = (_, A, w, L = null, W = null, E = null, Y = void 0, q = null, G = !!A.dynamicChildren) => {
    if (_ === A)
      return;
    _ && !pi(_, A) && (L = U(_), Ie(_, W, E, !0), _ = null), A.patchFlag === -2 && (G = !1, A.dynamicChildren = null);
    const { type: H, ref: le, shapeFlag: Q } = A;
    switch (H) {
      case Wo:
        v(_, A, w, L);
        break;
      case Dt:
        S(_, A, w, L);
        break;
      case Ka:
        _ == null && x(A, w, L, Y);
        break;
      case ut:
        B(
          _,
          A,
          w,
          L,
          W,
          E,
          Y,
          q,
          G
        );
        break;
      default:
        Q & 1 ? P(
          _,
          A,
          w,
          L,
          W,
          E,
          Y,
          q,
          G
        ) : Q & 6 ? ae(
          _,
          A,
          w,
          L,
          W,
          E,
          Y,
          q,
          G
        ) : (Q & 64 || Q & 128) && H.process(
          _,
          A,
          w,
          L,
          W,
          E,
          Y,
          q,
          G,
          re
        );
    }
    le != null && W ? In(le, _ && _.ref, E, A || _, !A) : le == null && _ && _.ref != null && In(_.ref, null, E, _, !0);
  }, v = (_, A, w, L) => {
    if (_ == null)
      i(
        A.el = r(A.children),
        w,
        L
      );
    else {
      const W = A.el = _.el;
      A.children !== _.children && c(W, A.children);
    }
  }, S = (_, A, w, L) => {
    _ == null ? i(
      A.el = l(A.children || ""),
      w,
      L
    ) : A.el = _.el;
  }, x = (_, A, w, L) => {
    [_.el, _.anchor] = m(
      _.children,
      A,
      w,
      L,
      _.el,
      _.anchor
    );
  }, C = ({ el: _, anchor: A }, w, L) => {
    let W;
    for (; _ && _ !== A; )
      W = f(_), i(_, w, L), _ = W;
    i(A, w, L);
  }, k = ({ el: _, anchor: A }) => {
    let w;
    for (; _ && _ !== A; )
      w = f(_), n(_), _ = w;
    n(A);
  }, P = (_, A, w, L, W, E, Y, q, G) => {
    if (A.type === "svg" ? Y = "svg" : A.type === "math" && (Y = "mathml"), _ == null)
      D(
        A,
        w,
        L,
        W,
        E,
        Y,
        q,
        G
      );
    else {
      const H = _.el && _.el._isVueCE ? _.el : null;
      try {
        H && H._beginPatch(), N(
          _,
          A,
          W,
          E,
          Y,
          q,
          G
        );
      } finally {
        H && H._endPatch();
      }
    }
  }, D = (_, A, w, L, W, E, Y, q) => {
    let G, H;
    const { props: le, shapeFlag: Q, transition: ne, dirs: ue } = _;
    if (G = _.el = o(
      _.type,
      E,
      le && le.is,
      le
    ), Q & 8 ? u(G, _.children) : Q & 16 && O(
      _.children,
      G,
      null,
      L,
      W,
      fr(_, E),
      Y,
      q
    ), ue && si(_, null, L, "created"), R(G, _, _.scopeId, Y, L), le) {
      for (const Re in le)
        Re !== "value" && !Rn(Re) && a(G, Re, null, le[Re], E, L);
      "value" in le && a(G, "value", null, le.value, E), (H = le.onVnodeBeforeMount) && as(H, L, _);
    }
    ue && si(_, null, L, "beforeMount");
    const _e = Bb(W, ne);
    _e && ne.beforeEnter(G), i(G, A, w), ((H = le && le.onVnodeMounted) || _e || ue) && wt(() => {
      try {
        H && as(H, L, _), _e && ne.enter(G), ue && si(_, null, L, "mounted");
      } finally {
      }
    }, W);
  }, R = (_, A, w, L, W) => {
    if (w && h(_, w), L)
      for (let E = 0; E < L.length; E++)
        h(_, L[E]);
    if (W) {
      let E = W.subTree;
      if (A === E || Ih(E.type) && (E.ssContent === A || E.ssFallback === A)) {
        const Y = W.vnode;
        R(
          _,
          Y,
          Y.scopeId,
          Y.slotScopeIds,
          W.parent
        );
      }
    }
  }, O = (_, A, w, L, W, E, Y, q, G = 0) => {
    for (let H = G; H < _.length; H++) {
      const le = _[H] = q ? Ts(_[H]) : us(_[H]);
      g(
        null,
        le,
        A,
        w,
        L,
        W,
        E,
        Y,
        q
      );
    }
  }, N = (_, A, w, L, W, E, Y) => {
    const q = A.el = _.el;
    let { patchFlag: G, dynamicChildren: H, dirs: le } = A;
    G |= _.patchFlag & 16;
    const Q = _.props || ze, ne = A.props || ze;
    let ue;
    if (w && ii(w, !1), (ue = ne.onVnodeBeforeUpdate) && as(ue, w, A, _), le && si(A, _, w, "beforeUpdate"), w && ii(w, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    H && (!_.dynamicChildren || _.dynamicChildren.length !== H.length) && (G = 0, Y = !1, H = null), (Q.innerHTML && ne.innerHTML == null || Q.textContent && ne.textContent == null) && u(q, ""), H ? z(
      _.dynamicChildren,
      H,
      q,
      w,
      L,
      fr(A, W),
      E
    ) : Y || $(
      _,
      A,
      q,
      null,
      w,
      L,
      fr(A, W),
      E,
      !1
    ), G > 0) {
      if (G & 16)
        J(q, Q, ne, w, W);
      else if (G & 2 && Q.class !== ne.class && a(q, "class", null, ne.class, W), G & 4 && a(q, "style", Q.style, ne.style, W), G & 8) {
        const _e = A.dynamicProps;
        for (let Re = 0; Re < _e.length; Re++) {
          const we = _e[Re], $e = Q[we], it = ne[we];
          (it !== $e || we === "value") && a(q, we, $e, it, W, w);
        }
      }
      G & 1 && _.children !== A.children && u(q, A.children);
    } else !Y && H == null && J(q, Q, ne, w, W);
    ((ue = ne.onVnodeUpdated) || le) && wt(() => {
      ue && as(ue, w, A, _), le && si(A, _, w, "updated");
    }, L);
  }, z = (_, A, w, L, W, E, Y) => {
    for (let q = 0; q < A.length; q++) {
      const G = _[q], H = A[q], le = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        G.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (G.type === ut || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !pi(G, H) || // - In the case of a component, it could contain anything.
        G.shapeFlag & 198) ? d(G.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
        )
      );
      g(
        G,
        H,
        le,
        null,
        L,
        W,
        E,
        Y,
        !0
      );
    }
  }, J = (_, A, w, L, W) => {
    if (A !== w) {
      if (A !== ze)
        for (const E in A)
          !Rn(E) && !(E in w) && a(
            _,
            E,
            A[E],
            null,
            W,
            L
          );
      for (const E in w) {
        if (Rn(E)) continue;
        const Y = w[E], q = A[E];
        Y !== q && E !== "value" && a(_, E, q, Y, W, L);
      }
      "value" in w && a(_, "value", A.value, w.value, W);
    }
  }, B = (_, A, w, L, W, E, Y, q, G) => {
    const H = A.el = _ ? _.el : r(""), le = A.anchor = _ ? _.anchor : r("");
    let { patchFlag: Q, dynamicChildren: ne, slotScopeIds: ue } = A;
    ue && (q = q ? q.concat(ue) : ue), _ == null ? (i(H, w, L), i(le, w, L), O(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      A.children || [],
      w,
      le,
      W,
      E,
      Y,
      q,
      G
    )) : Q > 0 && Q & 64 && ne && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren && _.dynamicChildren.length === ne.length ? (z(
      _.dynamicChildren,
      ne,
      w,
      W,
      E,
      Y,
      q
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (A.key != null || W && A === W.subTree) && Vl(
      _,
      A,
      !0
      /* shallow */
    )) : $(
      _,
      A,
      w,
      le,
      W,
      E,
      Y,
      q,
      G
    );
  }, ae = (_, A, w, L, W, E, Y, q, G) => {
    A.slotScopeIds = q, _ == null ? A.shapeFlag & 512 ? W.ctx.activate(
      A,
      w,
      L,
      Y,
      G
    ) : be(
      A,
      w,
      L,
      W,
      E,
      Y,
      G
    ) : fe(_, A, G);
  }, be = (_, A, w, L, W, E, Y) => {
    const q = _.component = $b(
      _,
      L,
      W
    );
    if (Lo(_) && (q.ctx.renderer = re), Jb(q, !1, Y), q.asyncDep) {
      if (W && W.registerDep(q, ce, Y), !_.el) {
        const G = q.subTree = Ce(Dt);
        S(null, G, A, w), _.placeholder = G.el;
      }
    } else
      ce(
        q,
        _,
        A,
        w,
        W,
        E,
        Y
      );
  }, fe = (_, A, w) => {
    const L = A.component = _.component;
    if (Mb(_, A, w))
      if (L.asyncDep && !L.asyncResolved) {
        j(L, A, w);
        return;
      } else
        L.next = A, L.update();
    else
      A.el = _.el, L.vnode = A;
  }, ce = (_, A, w, L, W, E, Y) => {
    const q = () => {
      if (_.isMounted) {
        let { next: Q, bu: ne, u: ue, parent: _e, vnode: Re } = _;
        {
          const xt = Mh(_);
          if (xt) {
            Q && (Q.el = Re.el, j(_, Q, Y)), xt.asyncDep.then(() => {
              wt(() => {
                _.isUnmounted || H();
              }, W);
            });
            return;
          }
        }
        let we = Q, $e;
        ii(_, !1), Q ? (Q.el = Re.el, j(_, Q, Y)) : Q = Re, ne && qa(ne), ($e = Q.props && Q.props.onVnodeBeforeUpdate) && as($e, _e, Q, Re), ii(_, !0);
        const it = uu(_), Tt = _.subTree;
        _.subTree = it, g(
          Tt,
          it,
          // parent may have changed if it's in a teleport
          d(Tt.el),
          // anchor may have changed if it's in a fragment
          U(Tt),
          _,
          W,
          E
        ), Q.el = it.el, we === null && Db(_, it.el), ue && wt(ue, W), ($e = Q.props && Q.props.onVnodeUpdated) && wt(
          () => as($e, _e, Q, Re),
          W
        );
      } else {
        let Q;
        const { el: ne, props: ue } = A, { bm: _e, m: Re, parent: we, root: $e, type: it } = _, Tt = En(A);
        ii(_, !1), _e && qa(_e), !Tt && (Q = ue && ue.onVnodeBeforeMount) && as(Q, we, A), ii(_, !0);
        {
          $e.ce && $e.ce._hasShadowRoot() && $e.ce._injectChildStyle(
            it,
            _.parent ? _.parent.type : void 0
          );
          const xt = _.subTree = uu(_);
          g(
            null,
            xt,
            w,
            L,
            _,
            W,
            E
          ), A.el = xt.el;
        }
        if (Re && wt(Re, W), !Tt && (Q = ue && ue.onVnodeMounted)) {
          const xt = A;
          wt(
            () => as(Q, we, xt),
            W
          );
        }
        (A.shapeFlag & 256 || we && En(we.vnode) && we.vnode.shapeFlag & 256) && _.a && wt(_.a, W), _.isMounted = !0, A = w = L = null;
      }
    };
    _.scope.on();
    const G = _.effect = new Uf(q);
    _.scope.off();
    const H = _.update = G.run.bind(G), le = _.job = G.runIfDirty.bind(G);
    le.i = _, le.id = _.uid, G.scheduler = () => Wl(le), ii(_, !0), H();
  }, j = (_, A, w) => {
    A.component = _;
    const L = _.vnode.props;
    _.vnode = A, _.next = null, Eb(_, A.props, L, w), Ub(_, A.children, w), Ms(), eu(_), Ds();
  }, $ = (_, A, w, L, W, E, Y, q, G = !1) => {
    const H = _ && _.children, le = _ ? _.shapeFlag : 0, Q = A.children, { patchFlag: ne, shapeFlag: ue } = A;
    if (ne > 0) {
      if (ne & 128) {
        De(
          H,
          Q,
          w,
          L,
          W,
          E,
          Y,
          q,
          G
        );
        return;
      } else if (ne & 256) {
        oe(
          H,
          Q,
          w,
          L,
          W,
          E,
          Y,
          q,
          G
        );
        return;
      }
    }
    ue & 8 ? (le & 16 && st(H, W, E), Q !== H && u(w, Q)) : le & 16 ? ue & 16 ? De(
      H,
      Q,
      w,
      L,
      W,
      E,
      Y,
      q,
      G
    ) : st(H, W, E, !0) : (le & 8 && u(w, ""), ue & 16 && O(
      Q,
      w,
      L,
      W,
      E,
      Y,
      q,
      G
    ));
  }, oe = (_, A, w, L, W, E, Y, q, G) => {
    _ = _ || Hi, A = A || Hi;
    const H = _.length, le = A.length, Q = Math.min(H, le);
    let ne;
    for (ne = 0; ne < Q; ne++) {
      const ue = A[ne] = G ? Ts(A[ne]) : us(A[ne]);
      g(
        _[ne],
        ue,
        w,
        null,
        W,
        E,
        Y,
        q,
        G
      );
    }
    H > le ? st(
      _,
      W,
      E,
      !0,
      !1,
      Q
    ) : O(
      A,
      w,
      L,
      W,
      E,
      Y,
      q,
      G,
      Q
    );
  }, De = (_, A, w, L, W, E, Y, q, G) => {
    let H = 0;
    const le = A.length;
    let Q = _.length - 1, ne = le - 1;
    for (; H <= Q && H <= ne; ) {
      const ue = _[H], _e = A[H] = G ? Ts(A[H]) : us(A[H]);
      if (pi(ue, _e))
        g(
          ue,
          _e,
          w,
          null,
          W,
          E,
          Y,
          q,
          G
        );
      else
        break;
      H++;
    }
    for (; H <= Q && H <= ne; ) {
      const ue = _[Q], _e = A[ne] = G ? Ts(A[ne]) : us(A[ne]);
      if (pi(ue, _e))
        g(
          ue,
          _e,
          w,
          null,
          W,
          E,
          Y,
          q,
          G
        );
      else
        break;
      Q--, ne--;
    }
    if (H > Q) {
      if (H <= ne) {
        const ue = ne + 1, _e = ue < le ? A[ue].el : L;
        for (; H <= ne; )
          g(
            null,
            A[H] = G ? Ts(A[H]) : us(A[H]),
            w,
            _e,
            W,
            E,
            Y,
            q,
            G
          ), H++;
      }
    } else if (H > ne)
      for (; H <= Q; )
        Ie(_[H], W, E, !0), H++;
    else {
      const ue = H, _e = H, Re = /* @__PURE__ */ new Map();
      for (H = _e; H <= ne; H++) {
        const ht = A[H] = G ? Ts(A[H]) : us(A[H]);
        ht.key != null && Re.set(ht.key, H);
      }
      let we, $e = 0;
      const it = ne - _e + 1;
      let Tt = !1, xt = 0;
      const ss = new Array(it);
      for (H = 0; H < it; H++) ss[H] = 0;
      for (H = ue; H <= Q; H++) {
        const ht = _[H];
        if ($e >= it) {
          Ie(ht, W, E, !0);
          continue;
        }
        let At;
        if (ht.key != null)
          At = Re.get(ht.key);
        else
          for (we = _e; we <= ne; we++)
            if (ss[we - _e] === 0 && pi(ht, A[we])) {
              At = we;
              break;
            }
        At === void 0 ? Ie(ht, W, E, !0) : (ss[At - _e] = H + 1, At >= xt ? xt = At : Tt = !0, g(
          ht,
          A[At],
          w,
          null,
          W,
          E,
          Y,
          q,
          G
        ), $e++);
      }
      const ei = Tt ? Hb(ss) : Hi;
      for (we = ei.length - 1, H = it - 1; H >= 0; H--) {
        const ht = _e + H, At = A[ht], ti = A[ht + 1], se = ht + 1 < le ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ti.el || Dh(ti)
        ) : L;
        ss[H] === 0 ? g(
          null,
          At,
          w,
          se,
          W,
          E,
          Y,
          q,
          G
        ) : Tt && (we < 0 || H !== ei[we] ? He(At, w, se, 2) : we--);
      }
    }
  }, He = (_, A, w, L, W = null) => {
    const { el: E, type: Y, transition: q, children: G, shapeFlag: H } = _;
    if (H & 6) {
      He(_.component.subTree, A, w, L);
      return;
    }
    if (H & 128) {
      _.suspense.move(A, w, L);
      return;
    }
    if (H & 64) {
      Y.move(_, A, w, re);
      return;
    }
    if (Y === ut) {
      i(E, A, w);
      for (let Q = 0; Q < G.length; Q++)
        He(G[Q], A, w, L);
      i(_.anchor, A, w);
      return;
    }
    if (Y === Ka) {
      C(_, A, w);
      return;
    }
    if (L !== 2 && H & 1 && q)
      if (L === 0)
        q.persisted && !E[Gt] ? i(E, A, w) : (q.beforeEnter(E), i(E, A, w), wt(() => q.enter(E), W));
      else {
        const { leave: Q, delayLeave: ne, afterLeave: ue } = q, _e = () => {
          _.ctx.isUnmounted ? n(E) : i(E, A, w);
        }, Re = () => {
          const we = E._isLeaving || !!E[Gt];
          E._isLeaving && E[Gt](
            !0
            /* cancelled */
          ), q.persisted && !we ? _e() : Q(E, () => {
            _e(), ue && ue();
          });
        };
        ne ? ne(E, _e, Re) : Re();
      }
    else
      i(E, A, w);
  }, Ie = (_, A, w, L = !1, W = !1) => {
    const {
      type: E,
      props: Y,
      ref: q,
      children: G,
      dynamicChildren: H,
      shapeFlag: le,
      patchFlag: Q,
      dirs: ne,
      cacheIndex: ue,
      memo: _e
    } = _;
    if (Q === -2 && (W = !1), q != null && (Ms(), In(q, null, w, _, !0), Ds()), ue != null && (A.renderCache[ue] = void 0), le & 256) {
      A.ctx.deactivate(_);
      return;
    }
    const Re = le & 1 && ne, we = !En(_);
    let $e;
    if (we && ($e = Y && Y.onVnodeBeforeUnmount) && as($e, A, _), le & 6)
      Qe(_.component, w, L);
    else {
      if (le & 128) {
        _.suspense.unmount(w, L);
        return;
      }
      Re && si(_, null, A, "beforeUnmount"), le & 64 ? _.type.remove(
        _,
        A,
        w,
        re,
        L
      ) : H && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !H.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== ut || Q > 0 && Q & 64) ? st(
        H,
        A,
        w,
        !1,
        !0
      ) : (E === ut && Q & 384 || !W && le & 16) && st(G, A, w), L && je(_);
    }
    const it = _e != null && ue == null;
    (we && ($e = Y && Y.onVnodeUnmounted) || Re || it) && wt(() => {
      $e && as($e, A, _), Re && si(_, null, A, "unmounted"), it && (_.el = null);
    }, w);
  }, je = (_) => {
    const { type: A, el: w, anchor: L, transition: W } = _;
    if (A === ut) {
      Xe(w, L);
      return;
    }
    if (A === Ka) {
      k(_);
      return;
    }
    const E = () => {
      n(w), W && !W.persisted && W.afterLeave && W.afterLeave();
    };
    if (_.shapeFlag & 1 && W && !W.persisted) {
      const { leave: Y, delayLeave: q } = W, G = () => Y(w, E);
      q ? q(_.el, E, G) : G();
    } else
      E();
  }, Xe = (_, A) => {
    let w;
    for (; _ !== A; )
      w = f(_), n(_), _ = w;
    n(A);
  }, Qe = (_, A, w) => {
    const { bum: L, scope: W, job: E, subTree: Y, um: q, m: G, a: H } = _;
    hu(G), hu(H), L && qa(L), W.stop(), E && (E.flags |= 8, Ie(Y, _, A, w)), q && wt(q, A), wt(() => {
      _.isUnmounted = !0;
    }, A);
  }, st = (_, A, w, L = !1, W = !1, E = 0) => {
    for (let Y = E; Y < _.length; Y++)
      Ie(_[Y], A, w, L, W);
  }, U = (_) => {
    if (_.shapeFlag & 6)
      return U(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const A = f(_.anchor || _.el), w = A && A[rh];
    return w ? f(w) : A;
  };
  let X = !1;
  const Z = (_, A, w) => {
    let L;
    _ == null ? A._vnode && (Ie(A._vnode, null, null, !0), L = A._vnode.component) : g(
      A._vnode || null,
      _,
      A,
      null,
      null,
      null,
      w
    ), A._vnode = _, X || (X = !0, eu(L), sh(), X = !1);
  }, re = {
    p: g,
    um: Ie,
    m: He,
    r: je,
    mt: be,
    mc: O,
    pc: $,
    pbc: z,
    n: U,
    o: t
  };
  return {
    render: Z,
    hydrate: void 0,
    createApp: xb(Z)
  };
}
function fr({ type: t, props: e }, s) {
  return s === "svg" && t === "foreignObject" || s === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : s;
}
function ii({ effect: t, job: e }, s) {
  s ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function Bb(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Vl(t, e, s = !1) {
  const i = t.children, n = e.children;
  if (he(i) && he(n))
    for (let a = 0; a < i.length; a++) {
      const o = i[a];
      let r = n[a];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = n[a] = Ts(n[a]), r.el = o.el), !s && r.patchFlag !== -2 && Vl(o, r)), r.type === Wo && (r.patchFlag === -1 && (r = n[a] = Ts(r)), r.el = o.el), r.type === Dt && !r.el && (r.el = o.el);
    }
}
function Hb(t) {
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
function Mh(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Mh(e);
}
function hu(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function Dh(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? Dh(e.subTree) : null;
}
const Ih = (t) => t.__isSuspense;
function jb(t, e) {
  e && e.pendingBranch ? he(t) ? e.effects.push(...t) : e.effects.push(t) : Gg(t);
}
const ut = /* @__PURE__ */ Symbol.for("v-fgt"), Wo = /* @__PURE__ */ Symbol.for("v-txt"), Dt = /* @__PURE__ */ Symbol.for("v-cmt"), Ka = /* @__PURE__ */ Symbol.for("v-stc"), _i = [];
let jt = null;
function ve(t = !1) {
  _i.push(jt = t ? null : []);
}
function Eh() {
  _i.pop(), jt = _i[_i.length - 1] || null;
}
let $n = 1;
function ho(t, e = !1) {
  $n += t, t < 0 && jt && e && (jt.hasOnce = !0);
}
function Oh(t) {
  return t.dynamicChildren = $n > 0 ? jt || Hi : null, Eh(), $n > 0 && jt && jt.push(t), t;
}
function ke(t, e, s, i, n, a) {
  return Oh(
    y(
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
function zl(t, e, s, i, n) {
  return Oh(
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
function po(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function pi(t, e) {
  return t.type === e.type && t.key === e.key;
}
const Nh = ({ key: t }) => t ?? null, $a = ({
  ref: t,
  ref_key: e,
  ref_for: s
}) => (typeof t == "number" && (t = "" + t), t != null ? tt(t) || /* @__PURE__ */ kt(t) || ge(t) ? { i: Ht, r: t, k: e, f: !!s } : t : null);
function y(t, e = null, s = null, i = 0, n = null, a = t === ut ? 0 : 1, o = !1, r = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Nh(e),
    ref: e && $a(e),
    scopeId: nh,
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
    ctx: Ht
  };
  return r ? (mo(l, s), a & 128 && t.normalize(l)) : s && (l.shapeFlag |= tt(s) ? 8 : 16), $n > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  jt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && jt.push(l), l;
}
const Ce = Vb;
function Vb(t, e = null, s = null, i = 0, n = null, a = !1) {
  if ((!t || t === mb) && (t = Dt), po(t)) {
    const r = Ys(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return s && mo(r, s), $n > 0 && !a && jt && (r.shapeFlag & 6 ? jt[jt.indexOf(t)] = r : jt.push(r)), r.patchFlag = -2, r;
  }
  if (ey(t) && (t = t.__vccOpts), e) {
    e = zb(e);
    let { class: r, style: l } = e;
    r && !tt(r) && (e.class = We(r)), Ne(l) && (/* @__PURE__ */ Fl(l) && !he(l) && (l = ft({}, l)), e.style = Vn(l));
  }
  const o = tt(t) ? 1 : Ih(t) ? 128 : No(t) ? 64 : Ne(t) ? 4 : ge(t) ? 2 : 0;
  return y(
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
function zb(t) {
  return t ? /* @__PURE__ */ Fl(t) || xh(t) ? ft({}, t) : t : null;
}
function Ys(t, e, s = !1, i = !1) {
  const { props: n, ref: a, patchFlag: o, children: r, transition: l } = t, c = e ? qb(n || {}, e) : n, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: c,
    key: c && Nh(c),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && a ? he(a) ? a.concat($a(e)) : [a, $a(e)] : $a(e)
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
    patchFlag: e && t.type !== ut ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: t.ssContent && Ys(t.ssContent),
    ssFallback: t.ssFallback && Ys(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return l && i && Kn(
    u,
    l.clone(u)
  ), u;
}
function Le(t = " ", e = 0) {
  return Ce(Wo, null, t, e);
}
function Lh(t, e) {
  const s = Ce(Ka, null, t);
  return s.staticCount = e, s;
}
function Lt(t = "", e = !1) {
  return e ? (ve(), zl(Dt, null, t)) : Ce(Dt, null, t);
}
function us(t) {
  return t == null || typeof t == "boolean" ? Ce(Dt) : he(t) ? Ce(
    ut,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : po(t) ? Ts(t) : Ce(Wo, null, String(t));
}
function Ts(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Ys(t);
}
function mo(t, e) {
  let s = 0;
  const { shapeFlag: i } = t;
  if (e == null)
    e = null;
  else if (he(e))
    s = 16;
  else if (typeof e == "object")
    if (i & 65) {
      const n = e.default;
      n && (n._c && (n._d = !1), mo(t, n()), n._c && (n._d = !0));
      return;
    } else {
      s = 32;
      const n = e._;
      !n && !xh(e) ? e._ctx = Ht : n === 3 && Ht && (Ht.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else if (ge(e)) {
    if (i & 65) {
      mo(t, { default: e });
      return;
    }
    e = { default: e, _ctx: Ht }, s = 32;
  } else
    e = String(e), i & 64 ? (s = 16, e = [Le(e)]) : s = 8;
  t.children = e, t.shapeFlag |= s;
}
function qb(...t) {
  const e = {};
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    for (const n in i)
      if (n === "class")
        e.class !== i.class && (e.class = We([e.class, i.class]));
      else if (n === "style")
        e.style = Vn([e.style, i.style]);
      else if (wo(n)) {
        const a = e[n], o = i[n];
        o && a !== o && !(he(a) && a.includes(o)) ? e[n] = a ? [].concat(a, o) : o : o == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ro(n) && (e[n] = o);
      } else n !== "" && (e[n] = i[n]);
  }
  return e;
}
function as(t, e, s, i = null) {
  $t(t, e, 7, [
    s,
    i
  ]);
}
const Gb = vh();
let Kb = 0;
function $b(t, e, s) {
  const i = t.type, n = (e ? e.appContext : t.appContext) || Gb, a = {
    uid: Kb++,
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
    scope: new bg(
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
    propsOptions: Ch(i, n),
    emitsOptions: _h(i, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ze,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: ze,
    data: ze,
    props: ze,
    attrs: ze,
    slots: ze,
    refs: ze,
    setupState: ze,
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
  return a.ctx = { _: a }, a.root = e ? e.root : a, a.emit = Cb.bind(null, a), t.ce && t.ce(a), a;
}
let vt = null;
const Uh = () => vt || Ht;
let go, Jn;
{
  const t = Io(), e = (s, i) => {
    let n;
    return (n = t[s]) || (n = t[s] = []), n.push(i), (a) => {
      n.length > 1 ? n.forEach((o) => o(a)) : n[0](a);
    };
  };
  go = e(
    "__VUE_INSTANCE_SETTERS__",
    (s) => vt = s
  ), Jn = e(
    "__VUE_SSR_SETTERS__",
    (s) => Yn = s
  );
}
const ha = (t) => {
  const e = vt;
  return go(t), t.scope.on(), () => {
    t.scope.off(), go(e);
  };
}, pu = () => {
  vt && vt.scope.off(), go(null);
};
function Fh(t) {
  return t.vnode.shapeFlag & 4;
}
let Yn = !1;
function Jb(t, e = !1, s = !1) {
  e && Jn(e);
  const { props: i, children: n } = t.vnode, a = Fh(t);
  Ib(t, i, a, e), Lb(t, n, s || e);
  const o = a ? Yb(t, e) : void 0;
  return e && Jn(!1), o;
}
function Yb(t, e) {
  const s = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, bb);
  const { setup: i } = s;
  if (i) {
    Ms();
    const n = t.setupContext = i.length > 1 ? Qb(t) : null, a = ha(t), o = ua(
      i,
      t,
      0,
      [
        t.props,
        n
      ]
    ), r = Mf(o);
    if (Ds(), a(), (r || t.sp) && !En(t) && ph(t), r) {
      if (o.then(pu, pu), e)
        return o.then((l) => {
          Jn(!0);
          try {
            mu(t, l, e);
          } finally {
            Jn(!1);
          }
        }).catch((l) => {
          Oo(l, t, 0);
        });
      t.asyncDep = o;
    } else
      mu(t, o);
  } else
    Wh(t);
}
function mu(t, e, s) {
  ge(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Ne(e) && (t.setupState = Zf(e)), Wh(t);
}
function Wh(t, e, s) {
  const i = t.type;
  t.render || (t.render = i.render || fs);
  {
    const n = ha(t);
    Ms();
    try {
      yb(t);
    } finally {
      Ds(), n();
    }
  }
}
const Xb = {
  get(t, e) {
    return yt(t, "get", ""), t[e];
  }
};
function Qb(t) {
  const e = (s) => {
    t.exposed = s || {};
  };
  return {
    attrs: new Proxy(t.attrs, Xb),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Bo(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Zf(Lg(t.exposed)), {
    get(e, s) {
      if (s in e)
        return e[s];
      if (s in On)
        return On[s](t);
    },
    has(e, s) {
      return s in e || s in On;
    }
  })) : t.proxy;
}
function Zb(t, e = !0) {
  return ge(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function ey(t) {
  return ge(t) && "__vccOpts" in t;
}
const pe = (t, e) => /* @__PURE__ */ Hg(t, e, Yn);
function Jt(t, e, s) {
  try {
    ho(-1);
    const i = arguments.length;
    return i === 2 ? Ne(e) && !he(e) ? po(e) ? Ce(t, null, [e]) : Ce(t, e) : Ce(t, null, e) : (i > 3 ? s = Array.prototype.slice.call(arguments, 2) : i === 3 && po(s) && (s = [s]), Ce(t, e, s));
  } finally {
    ho(1);
  }
}
const ty = "3.5.41";
/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let el;
const gu = typeof window < "u" && window.trustedTypes;
if (gu)
  try {
    el = /* @__PURE__ */ gu.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const Bh = el ? (t) => el.createHTML(t) : (t) => t, sy = "http://www.w3.org/2000/svg", iy = "http://www.w3.org/1998/Math/MathML", Ss = typeof document < "u" ? document : null, bu = Ss && /* @__PURE__ */ Ss.createElement("template"), ny = {
  insert: (t, e, s) => {
    e.insertBefore(t, s || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, s, i) => {
    const n = e === "svg" ? Ss.createElementNS(sy, t) : e === "mathml" ? Ss.createElementNS(iy, t) : s ? Ss.createElement(t, { is: s }) : Ss.createElement(t);
    return t === "select" && i && i.multiple != null && n.setAttribute("multiple", i.multiple), n;
  },
  createText: (t) => Ss.createTextNode(t),
  createComment: (t) => Ss.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => Ss.querySelector(t),
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
      bu.innerHTML = Bh(
        i === "svg" ? `<svg>${t}</svg>` : i === "mathml" ? `<math>${t}</math>` : t
      );
      const r = bu.content;
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
}, Ls = "transition", ln = "animation", Xn = /* @__PURE__ */ Symbol("_vtc"), Hh = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, ay = /* @__PURE__ */ ft(
  {},
  lh,
  Hh
), oy = (t) => (t.displayName = "Transition", t.props = ay, t), ry = /* @__PURE__ */ oy(
  (t, { slots: e }) => Jt(sb, ly(t), e)
), ni = (t, e = []) => {
  he(t) ? t.forEach((s) => s(...e)) : t && t(...e);
}, yu = (t) => t ? he(t) ? t.some((e) => e.length > 1) : t.length > 1 : !1;
function ly(t) {
  const e = {};
  for (const B in t)
    B in Hh || (e[B] = t[B]);
  if (t.css === !1)
    return e;
  const {
    name: s = "v",
    type: i,
    duration: n,
    enterFromClass: a = `${s}-enter-from`,
    enterActiveClass: o = `${s}-enter-active`,
    enterToClass: r = `${s}-enter-to`,
    appearFromClass: l = a,
    appearActiveClass: c = o,
    appearToClass: u = r,
    leaveFromClass: d = `${s}-leave-from`,
    leaveActiveClass: f = `${s}-leave-active`,
    leaveToClass: h = `${s}-leave-to`
  } = t, m = cy(n), g = m && m[0], v = m && m[1], {
    onBeforeEnter: S,
    onEnter: x,
    onEnterCancelled: C,
    onLeave: k,
    onLeaveCancelled: P,
    onBeforeAppear: D = S,
    onAppear: R = x,
    onAppearCancelled: O = C
  } = e, N = (B, ae, be, fe) => {
    B._enterCancelled = fe, ai(B, ae ? u : r), ai(B, ae ? c : o), be && be();
  }, z = (B, ae) => {
    B._isLeaving = !1, ai(B, d), ai(B, h), ai(B, f), ae && ae();
  }, J = (B) => (ae, be) => {
    const fe = B ? R : x, ce = () => N(ae, B, be);
    ni(fe, [ae, ce]), vu(() => {
      ai(ae, B ? l : a), gs(ae, B ? u : r), yu(fe) || _u(ae, i, g, ce);
    });
  };
  return ft(e, {
    onBeforeEnter(B) {
      ni(S, [B]), gs(B, a), gs(B, o);
    },
    onBeforeAppear(B) {
      ni(D, [B]), gs(B, l), gs(B, c);
    },
    onEnter: J(!1),
    onAppear: J(!0),
    onLeave(B, ae) {
      B._isLeaving = !0;
      const be = () => z(B, ae);
      gs(B, d), B._enterCancelled ? (gs(B, f), Tu(B)) : (Tu(B), gs(B, f)), vu(() => {
        B._isLeaving && (ai(B, d), gs(B, h), yu(k) || _u(B, i, v, be));
      }), ni(k, [B, be]);
    },
    onEnterCancelled(B) {
      N(B, !1, void 0, !0), ni(C, [B]);
    },
    onAppearCancelled(B) {
      N(B, !0, void 0, !0), ni(O, [B]);
    },
    onLeaveCancelled(B) {
      z(B), ni(P, [B]);
    }
  });
}
function cy(t) {
  if (t == null)
    return null;
  if (Ne(t))
    return [hr(t.enter), hr(t.leave)];
  {
    const e = hr(t);
    return [e, e];
  }
}
function hr(t) {
  return cg(t);
}
function gs(t, e) {
  e.split(/\s+/).forEach((s) => s && t.classList.add(s)), (t[Xn] || (t[Xn] = /* @__PURE__ */ new Set())).add(e);
}
function ai(t, e) {
  e.split(/\s+/).forEach((i) => i && t.classList.remove(i));
  const s = t[Xn];
  s && (s.delete(e), s.size || (t[Xn] = void 0));
}
function vu(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let uy = 0;
function _u(t, e, s, i) {
  const n = t._endId = ++uy, a = () => {
    n === t._endId && i();
  };
  if (s != null)
    return setTimeout(a, s);
  const { type: o, timeout: r, propCount: l } = dy(t, e);
  if (!o)
    return i();
  const c = o + "end";
  let u = 0;
  const d = () => {
    t.removeEventListener(c, f), a();
  }, f = (h) => {
    h.target === t && ++u >= l && d();
  };
  setTimeout(() => {
    u < l && d();
  }, r + 1), t.addEventListener(c, f);
}
function dy(t, e) {
  const s = window.getComputedStyle(t), i = (m) => (s[m] || "").split(", "), n = i(`${Ls}Delay`), a = i(`${Ls}Duration`), o = ku(n, a), r = i(`${ln}Delay`), l = i(`${ln}Duration`), c = ku(r, l);
  let u = null, d = 0, f = 0;
  e === Ls ? o > 0 && (u = Ls, d = o, f = a.length) : e === ln ? c > 0 && (u = ln, d = c, f = l.length) : (d = Math.max(o, c), u = d > 0 ? o > c ? Ls : ln : null, f = u ? u === Ls ? a.length : l.length : 0);
  const h = u === Ls && /\b(?:transform|all)(?:,|$)/.test(
    i(`${Ls}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: f,
    hasTransform: h
  };
}
function ku(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max(...e.map((s, i) => Su(s) + Su(t[i])));
}
function Su(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function Tu(t) {
  return (t ? t.ownerDocument : document).body.offsetHeight;
}
function fy(t, e, s) {
  const i = t[Xn];
  i && (e = (e ? [e, ...i] : [...i]).join(" ")), e == null ? t.removeAttribute("class") : s ? t.setAttribute("class", e) : t.className = e;
}
const bo = /* @__PURE__ */ Symbol("_vod"), jh = /* @__PURE__ */ Symbol("_vsh"), Us = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(t, { value: e }, { transition: s }) {
    t[bo] = t.style.display === "none" ? "" : t.style.display, s && e ? s.beforeEnter(t) : cn(t, e);
  },
  mounted(t, { value: e }, { transition: s }) {
    s && e && s.enter(t);
  },
  updated(t, { value: e, oldValue: s }, { transition: i }) {
    !e != !s && (i ? e ? (i.beforeEnter(t), cn(t, !0), i.enter(t)) : i.leave(t, () => {
      cn(t, !1);
    }) : cn(t, e));
  },
  beforeUnmount(t, { value: e }) {
    cn(t, e);
  }
};
function cn(t, e) {
  t.style.display = e ? t[bo] : "none", t[jh] = !e;
}
const hy = /* @__PURE__ */ Symbol(""), py = /(?:^|;)\s*display\s*:/;
function my(t, e, s) {
  const i = t.style, n = tt(s);
  let a = !1;
  if (s && !n) {
    if (e)
      if (tt(e))
        for (const o of e.split(";")) {
          const r = o.slice(0, o.indexOf(":")).trim();
          s[r] == null && vn(i, r, "");
        }
      else
        for (const o in e)
          s[o] == null && vn(i, o, "");
    for (const o in s) {
      o === "display" && (a = !0);
      const r = s[o];
      r != null ? by(
        t,
        o,
        !tt(e) && e ? e[o] : void 0,
        r
      ) || vn(i, o, r) : vn(i, o, "");
    }
  } else if (n) {
    if (e !== s) {
      const o = i[hy];
      o && (s += ";" + o), i.cssText = s, a = py.test(s);
    }
  } else e && t.removeAttribute("style");
  bo in t && (t[bo] = a ? i.display : "", t[jh] && (i.display = "none"));
}
const xu = /\s*!important$/;
function vn(t, e, s) {
  if (he(s))
    s.forEach((i) => vn(t, e, i));
  else if (s == null && (s = ""), e.startsWith("--"))
    t.setProperty(e, s);
  else {
    const i = gy(t, e);
    xu.test(s) ? t.setProperty(
      Ai(i),
      s.replace(xu, ""),
      "important"
    ) : t[i] = s;
  }
}
const Au = ["Webkit", "Moz", "ms"], pr = {};
function gy(t, e) {
  const s = pr[e];
  if (s)
    return s;
  let i = It(e);
  if (i !== "filter" && i in t)
    return pr[e] = i;
  i = Do(i);
  for (let n = 0; n < Au.length; n++) {
    const a = Au[n] + i;
    if (a in t)
      return pr[e] = a;
  }
  return e;
}
function by(t, e, s, i) {
  return t.tagName === "TEXTAREA" && (e === "width" || e === "height") && tt(i) && s === i;
}
const Cu = "http://www.w3.org/1999/xlink";
function Pu(t, e, s, i, n, a = mg(e)) {
  i && e.startsWith("xlink:") ? s == null ? t.removeAttributeNS(Cu, e.slice(6, e.length)) : t.setAttributeNS(Cu, e, s) : s == null || a && !Of(s) ? t.removeAttribute(e) : t.setAttribute(
    e,
    a ? "" : ps(s) ? String(s) : s
  );
}
function wu(t, e, s, i, n) {
  if (e === "innerHTML" || e === "textContent") {
    s != null && (t[e] = e === "innerHTML" ? Bh(s) : s);
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
    r === "boolean" ? s = Of(s) : s == null && r === "string" ? (s = "", o = !0) : r === "number" && (s = 0, o = !0);
  }
  try {
    t[e] = s;
  } catch {
  }
  o && t.removeAttribute(n || e);
}
function Ni(t, e, s, i) {
  t.addEventListener(e, s, i);
}
function yy(t, e, s, i) {
  t.removeEventListener(e, s, i);
}
const Ru = /* @__PURE__ */ Symbol("_vei");
function vy(t, e, s, i, n = null) {
  const a = t[Ru] || (t[Ru] = {}), o = a[e];
  if (i && o)
    o.value = i;
  else {
    const [r, l] = Sy(e);
    if (i) {
      const c = a[e] = Ay(
        i,
        n
      );
      Ni(t, r, c, l);
    } else o && (yy(t, r, o, l), a[e] = void 0);
  }
}
const _y = /(Once|Passive|Capture)$/, ky = /^on:?(?:Once|Passive|Capture)$/;
function Sy(t) {
  let e, s;
  for (; (s = t.match(_y)) && !ky.test(t); )
    e || (e = {}), t = t.slice(0, t.length - s[1].length), e[s[1].toLowerCase()] = !0;
  return [t[2] === ":" ? t.slice(3) : Ai(t.slice(2)), e];
}
let mr = 0;
const Ty = /* @__PURE__ */ Promise.resolve(), xy = () => mr || (Ty.then(() => mr = 0), mr = Date.now());
function Ay(t, e) {
  const s = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= s.attached)
      return;
    const n = s.value;
    if (he(n)) {
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
  return s.value = t, s.attached = xy(), s;
}
const Mu = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, Cy = (t, e, s, i, n, a) => {
  const o = n === "svg";
  e === "class" ? fy(t, i, o) : e === "style" ? my(t, s, i) : wo(e) ? Ro(e) || vy(t, e, s, i, a) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Py(t, e, i, o)) ? (wu(t, e, i), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Pu(t, e, i, o, a, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (wy(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !tt(i))) ? wu(t, It(e), i, a, e) : (e === "true-value" ? t._trueValue = i : e === "false-value" && (t._falseValue = i), Pu(t, e, i, o));
};
function Py(t, e, s, i) {
  if (i)
    return !!(e === "innerHTML" || e === "textContent" || e in t && Mu(e) && ge(s));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const n = t.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return Mu(e) && tt(s) ? !1 : e in t;
}
function wy(t, e) {
  const s = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!s)
    return !1;
  const i = It(e);
  return Array.isArray(s) ? s.some((n) => It(n) === i) : Object.keys(s).some((n) => It(n) === i);
}
const Du = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return he(e) ? (s) => qa(e, s) : e;
};
function Ry(t) {
  t.target.composing = !0;
}
function Iu(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const Ca = /* @__PURE__ */ Symbol("_assign"), Pa = /* @__PURE__ */ Symbol("_initialValue");
function gr(t, e, s) {
  return e && (t = t.trim()), s && (t = Ml(t)), t;
}
const My = {
  created(t, { modifiers: { lazy: e, trim: s, number: i } }, n) {
    t.parentNode && (t.type === "text" ? t[Pa] = t.defaultValue.replace(/[\r\n]/g, "") : t.type === "textarea" && (t[Pa] = t.defaultValue.replace(/\r\n?/g, `
`))), t[Ca] = Du(n);
    const a = i || n.props && n.props.type === "number";
    Ni(t, e ? "change" : "input", (o) => {
      o.target.composing || t[Ca](gr(t.value, s, a));
    }), (s || a) && Ni(t, "change", () => {
      t.value = gr(t.value, s, a);
    }), e || (Ni(t, "compositionstart", Ry), Ni(t, "compositionend", Iu), Ni(t, "change", Iu));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e, modifiers: { trim: s, number: i } }) {
    const n = e ?? "", a = t[Pa];
    delete t[Pa], a !== void 0 && (t.type === "text" || t.type === "textarea") && t.value !== a ? t[Ca](gr(t.value, s, i)) : t.value = n;
  },
  beforeUpdate(t, { value: e, oldValue: s, modifiers: { lazy: i, trim: n, number: a } }, o) {
    if (t[Ca] = Du(o), t.composing) return;
    const r = (a || t.type === "number") && !/^0\d/.test(t.value) ? Ml(t.value) : t.value, l = e ?? "";
    if (r === l)
      return;
    const c = t.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === t && t.type !== "range" && (i && e === s || n && t.value.trim() === l) || (t.value = l);
  }
}, Dy = /* @__PURE__ */ ft({ patchProp: Cy }, ny);
let Eu;
function Iy() {
  return Eu || (Eu = Fb(Dy));
}
const Ey = ((...t) => {
  const e = Iy().createApp(...t), { mount: s } = e;
  return e.mount = (i) => {
    const n = Ny(i);
    if (!n) return;
    const a = e._component;
    !ge(a) && !a.render && !a.template && (a.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const o = s(n, !1, Oy(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), o;
  }, e;
});
function Oy(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Ny(t) {
  return tt(t) ? document.querySelector(t) : t;
}
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const Li = typeof document < "u";
function Vh(t) {
  return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t;
}
function Ly(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module" || t.default && Vh(t.default);
}
const Je = Object.assign;
function br(t, e) {
  const s = {};
  for (const i in e) {
    const n = e[i];
    s[i] = ts(n) ? n.map(t) : t(n);
  }
  return s;
}
const Nn = () => {
}, ts = Array.isArray;
function Ou(t, e) {
  const s = {};
  for (const i in t) s[i] = i in e ? e[i] : t[i];
  return s;
}
const zh = /#/g, Uy = /&/g, Fy = /\//g, Wy = /=/g, By = /\?/g, qh = /\+/g, Hy = /%5B/g, jy = /%5D/g, Gh = /%5E/g, Vy = /%60/g, Kh = /%7B/g, zy = /%7C/g, $h = /%7D/g, qy = /%20/g;
function ql(t) {
  return t == null ? "" : encodeURI("" + t).replace(zy, "|").replace(Hy, "[").replace(jy, "]");
}
function Gy(t) {
  return ql(t).replace(Kh, "{").replace($h, "}").replace(Gh, "^");
}
function tl(t) {
  return ql(t).replace(qh, "%2B").replace(qy, "+").replace(zh, "%23").replace(Uy, "%26").replace(Vy, "`").replace(Kh, "{").replace($h, "}").replace(Gh, "^");
}
function Ky(t) {
  return tl(t).replace(Wy, "%3D");
}
function $y(t) {
  return ql(t).replace(zh, "%23").replace(By, "%3F");
}
function Jy(t) {
  return $y(t).replace(Fy, "%2F");
}
function Qn(t) {
  if (t == null) return null;
  try {
    return decodeURIComponent("" + t);
  } catch {
  }
  return "" + t;
}
const Yy = /\/$/, Xy = (t) => t.replace(Yy, "");
function yr(t, e, s = "/") {
  let i, n = {}, a = "", o = "";
  const r = e.indexOf("#");
  let l = e.indexOf("?");
  return l = r >= 0 && l > r ? -1 : l, l >= 0 && (i = e.slice(0, l), a = e.slice(l, r > 0 ? r : e.length), n = t(a.slice(1))), r >= 0 && (i = i || e.slice(0, r), o = e.slice(r, e.length)), i = tv(i ?? e, s), {
    fullPath: i + a + o,
    path: i,
    query: n,
    hash: Qn(o)
  };
}
function Qy(t, e) {
  const s = e.query ? t(e.query) : "";
  return e.path + (s && "?") + s + (e.hash || "");
}
function Zy(t, e, s) {
  const i = e.matched.length - 1, n = s.matched.length - 1;
  return i > -1 && i === n && Ji(e.matched[i], s.matched[n]) && Jh(e.params, s.params) && t(e.query) === t(s.query) && e.hash === s.hash;
}
function Ji(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e);
}
function Jh(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (var s in t) if (!ev(t[s], e[s])) return !1;
  return !0;
}
function ev(t, e) {
  return ts(t) ? Nu(t, e) : ts(e) ? Nu(e, t) : (t == null ? void 0 : t.valueOf()) === (e == null ? void 0 : e.valueOf());
}
function Nu(t, e) {
  return ts(e) ? t.length === e.length && t.every((s, i) => s === e[i]) : t.length === 1 && t[0] === e;
}
function tv(t, e) {
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
const Fs = {
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
let sl = /* @__PURE__ */ (function(t) {
  return t.pop = "pop", t.push = "push", t;
})({}), Lu = /* @__PURE__ */ (function(t) {
  return t.back = "back", t.forward = "forward", t.unknown = "", t;
})({});
const vr = "";
function sv(t) {
  if (!t) if (Li) {
    const e = document.querySelector("base");
    t = e && e.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^\/]+/, "");
  } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), Xy(t);
}
const iv = /^[^#]+#/;
function nv(t, e) {
  return t.replace(iv, "#") + e;
}
function av(t, e) {
  const s = document.documentElement.getBoundingClientRect(), i = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: i.left - s.left - (e.left || 0),
    top: i.top - s.top - (e.top || 0)
  };
}
const ov = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function rv(t) {
  let e;
  if ("el" in t) {
    const s = t.el, i = typeof s == "string" && s.startsWith("#"), n = typeof s == "string" ? i ? document.getElementById(s.slice(1)) : document.querySelector(s) : s;
    if (!n)
      return;
    e = av(n, t);
  } else e = t;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.scrollX, e.top != null ? e.top : window.scrollY);
}
function Uu(t, e) {
  return (history.state ? history.state.position - e : -1) + t;
}
const il = /* @__PURE__ */ new Map();
function lv(t, e) {
  il.set(t, e);
}
function cv(t) {
  const e = il.get(t);
  return il.delete(t), e;
}
function uv(t) {
  return typeof t == "string" || t && typeof t == "object";
}
function Yh(t) {
  return typeof t == "string" || typeof t == "symbol";
}
let ot = /* @__PURE__ */ (function(t) {
  return t[t.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", t[t.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", t[t.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", t[t.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", t[t.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", t;
})({});
const Xh = Symbol("");
ot.MATCHER_NOT_FOUND + "", ot.NAVIGATION_GUARD_REDIRECT + "", ot.NAVIGATION_ABORTED + "", ot.NAVIGATION_CANCELLED + "", ot.NAVIGATION_DUPLICATED + "";
function Yi(t, e) {
  return Je(/* @__PURE__ */ new Error(), {
    type: t,
    [Xh]: !0
  }, e);
}
function bs(t, e) {
  return t instanceof Error && Xh in t && (e == null || !!(t.type & e));
}
const dv = [
  "params",
  "query",
  "hash"
];
function fv(t) {
  if (typeof t == "string") return t;
  if (t.path != null) return t.path;
  const e = {};
  for (const s of dv) s in t && (e[s] = t[s]);
  return JSON.stringify(e, null, 2);
}
function hv(t) {
  const e = {};
  if (t === "" || t === "?") return e;
  const s = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let i = 0; i < s.length; ++i) {
    const n = s[i].replace(qh, " "), a = n.indexOf("="), o = Qn(a < 0 ? n : n.slice(0, a)), r = a < 0 ? null : Qn(n.slice(a + 1));
    if (o in e) {
      let l = e[o];
      ts(l) || (l = e[o] = [l]), l.push(r);
    } else e[o] = r;
  }
  return e;
}
function Fu(t) {
  let e = "";
  for (let s in t) {
    const i = t[s];
    if (s = Ky(s), i == null) {
      i !== void 0 && (e += (e.length ? "&" : "") + s);
      continue;
    }
    (ts(i) ? i.map((n) => n && tl(n)) : [i && tl(i)]).forEach((n) => {
      n !== void 0 && (e += (e.length ? "&" : "") + s, n != null && (e += "=" + n));
    });
  }
  return e;
}
function pv(t) {
  const e = {};
  for (const s in t) {
    const i = t[s];
    i !== void 0 && (e[s] = ts(i) ? i.map((n) => n == null ? null : "" + n) : i == null ? i : "" + i);
  }
  return e;
}
const mv = Symbol(""), Wu = Symbol(""), Ho = Symbol(""), Gl = Symbol(""), nl = Symbol("");
function un() {
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
function Hs(t, e, s, i, n, a = (o) => o()) {
  const o = i && (i.enterCallbacks[n] = i.enterCallbacks[n] || []);
  return () => new Promise((r, l) => {
    const c = (f) => {
      f === !1 ? l(Yi(ot.NAVIGATION_ABORTED, {
        from: s,
        to: e
      })) : f instanceof Error ? l(f) : uv(f) ? l(Yi(ot.NAVIGATION_GUARD_REDIRECT, {
        from: e,
        to: f
      })) : (o && i.enterCallbacks[n] === o && typeof f == "function" && o.push(f), r());
    }, u = a(() => t.call(i && i.instances[n], e, s, c));
    let d = Promise.resolve(u);
    t.length < 3 && (d = d.then(c)), d.catch((f) => l(f));
  });
}
function _r(t, e, s, i, n = (a) => a()) {
  const a = [];
  for (const o of t)
    for (const r in o.components) {
      let l = o.components[r];
      if (!(e !== "beforeRouteEnter" && !o.instances[r]))
        if (Vh(l)) {
          const c = (l.__vccOpts || l)[e];
          c && a.push(Hs(c, s, i, o, r, n));
        } else {
          let c = l();
          a.push(() => c.then((u) => {
            if (!u) throw new Error(`Couldn't resolve component "${r}" at "${o.path}"`);
            const d = Ly(u) ? u.default : u;
            o.mods[r] = u, o.components[r] = d;
            const f = (d.__vccOpts || d)[e];
            return f && Hs(f, s, i, o, r, n)();
          }));
        }
    }
  return a;
}
function gv(t, e) {
  const s = [], i = [], n = [], a = Math.max(e.matched.length, t.matched.length);
  for (let o = 0; o < a; o++) {
    const r = e.matched[o];
    r && (t.matched.find((c) => Ji(c, r)) ? i.push(r) : s.push(r));
    const l = t.matched[o];
    l && (e.matched.find((c) => Ji(c, l)) || n.push(l));
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
function bv(t = "") {
  let e = [], s = [[vr, {}]], i = 0;
  t = sv(t);
  function n(r, l = {}) {
    i++, i !== s.length && s.splice(i), s.push([r, l]);
  }
  function a(r, l, { direction: c, delta: u }) {
    const d = {
      direction: c,
      delta: u,
      type: sl.pop
    };
    for (const f of e) f(r, l, d);
  }
  const o = {
    location: vr,
    state: {},
    base: t,
    createHref: nv.bind(null, t),
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
      e = [], s = [[vr, {}]], i = 0;
    },
    go(r, l = !0) {
      const c = this.location, u = r < 0 ? Lu.back : Lu.forward;
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
let mi = /* @__PURE__ */ (function(t) {
  return t[t.Static = 0] = "Static", t[t.Param = 1] = "Param", t[t.Group = 2] = "Group", t;
})({});
var ct = /* @__PURE__ */ (function(t) {
  return t[t.Static = 0] = "Static", t[t.Param = 1] = "Param", t[t.ParamRegExp = 2] = "ParamRegExp", t[t.ParamRegExpEnd = 3] = "ParamRegExpEnd", t[t.EscapeNext = 4] = "EscapeNext", t;
})(ct || {});
const yv = {
  type: mi.Static,
  value: ""
}, vv = /[a-zA-Z0-9_]/;
function _v(t) {
  if (!t) return [[]];
  if (t === "/") return [[yv]];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
  function e(h) {
    throw new Error(`ERR (${s})/"${c}": ${h}`);
  }
  let s = ct.Static, i = s;
  const n = [];
  let a;
  function o() {
    a && n.push(a), a = [];
  }
  let r = 0, l, c = "", u = "";
  function d() {
    c && (s === ct.Static ? a.push({
      type: mi.Static,
      value: c
    }) : s === ct.Param || s === ct.ParamRegExp || s === ct.ParamRegExpEnd ? (a.length > 1 && (l === "*" || l === "+") && e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: mi.Param,
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
    if (l = t[r++], l === "\\" && s !== ct.ParamRegExp) {
      i = s, s = ct.EscapeNext;
      continue;
    }
    switch (s) {
      case ct.Static:
        l === "/" ? (c && d(), o()) : l === ":" ? (d(), s = ct.Param) : f();
        break;
      case ct.EscapeNext:
        f(), s = i;
        break;
      case ct.Param:
        l === "(" ? s = ct.ParamRegExp : vv.test(l) ? f() : (d(), s = ct.Static, l !== "*" && l !== "?" && l !== "+" && r--);
        break;
      case ct.ParamRegExp:
        l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : s = ct.ParamRegExpEnd : u += l;
        break;
      case ct.ParamRegExpEnd:
        d(), s = ct.Static, l !== "*" && l !== "?" && l !== "+" && r--, u = "";
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  return s === ct.ParamRegExp && e(`Unfinished custom RegExp for param "${c}"`), d(), o(), n;
}
const Bu = "[^/]+?", kv = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
};
var Rt = /* @__PURE__ */ (function(t) {
  return t[t._multiplier = 10] = "_multiplier", t[t.Root = 90] = "Root", t[t.Segment = 40] = "Segment", t[t.SubSegment = 30] = "SubSegment", t[t.Static = 40] = "Static", t[t.Dynamic = 20] = "Dynamic", t[t.BonusCustomRegExp = 10] = "BonusCustomRegExp", t[t.BonusWildcard = -50] = "BonusWildcard", t[t.BonusRepeatable = -20] = "BonusRepeatable", t[t.BonusOptional = -8] = "BonusOptional", t[t.BonusStrict = 0.7000000000000001] = "BonusStrict", t[t.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", t;
})(Rt || {});
const Sv = /[.+*?^${}()[\]/\\]/g;
function Tv(t, e) {
  const s = Je({}, kv, e), i = [];
  let n = s.start ? "^" : "";
  const a = [];
  for (const c of t) {
    const u = c.length ? [] : [Rt.Root];
    s.strict && !c.length && (n += "/");
    for (let d = 0; d < c.length; d++) {
      const f = c[d];
      let h = Rt.Segment + (s.sensitive ? Rt.BonusCaseSensitive : 0);
      if (f.type === mi.Static)
        d || (n += "/"), n += f.value.replace(Sv, "\\$&"), h += Rt.Static;
      else if (f.type === mi.Param) {
        const { value: m, repeatable: g, optional: v, regexp: S } = f;
        a.push({
          name: m,
          repeatable: g,
          optional: v
        });
        const x = S || Bu;
        if (x !== Bu) {
          h += Rt.BonusCustomRegExp;
          try {
            `${x}`;
          } catch (k) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${x}): ` + k.message);
          }
        }
        let C = g ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        d || (C = v && c.length < 2 ? `(?:/${C})` : "/" + C), v && (C += "?"), n += C, h += Rt.Dynamic, v && (h += Rt.BonusOptional), g && (h += Rt.BonusRepeatable), x === ".*" && (h += Rt.BonusWildcard);
      }
      u.push(h);
    }
    i.push(u);
  }
  if (s.strict && s.end) {
    const c = i.length - 1;
    i[c][i[c].length - 1] += Rt.BonusStrict;
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
      for (const h of f) if (h.type === mi.Static) u += h.value;
      else if (h.type === mi.Param) {
        const { value: m, repeatable: g, optional: v } = h, S = m in c ? c[m] : "";
        if (ts(S) && !g) throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
        const x = ts(S) ? S.join("/") : S;
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
function xv(t, e) {
  let s = 0;
  for (; s < t.length && s < e.length; ) {
    const i = e[s] - t[s];
    if (i) return i;
    s++;
  }
  return t.length < e.length ? t.length === 1 && t[0] === Rt.Static + Rt.Segment ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === Rt.Static + Rt.Segment ? 1 : -1 : 0;
}
function Qh(t, e) {
  let s = 0;
  const i = t.score, n = e.score;
  for (; s < i.length && s < n.length; ) {
    const a = xv(i[s], n[s]);
    if (a) return a;
    s++;
  }
  if (Math.abs(n.length - i.length) === 1) {
    if (Hu(i)) return 1;
    if (Hu(n)) return -1;
  }
  return n.length - i.length;
}
function Hu(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0;
}
const Av = {
  strict: !1,
  end: !0,
  sensitive: !1
};
function Cv(t, e, s) {
  const i = Tv(_v(t.path), s), n = Je(i, {
    record: t,
    parent: e,
    children: [],
    alias: []
  });
  return e && !n.record.aliasOf == !e.record.aliasOf && e.children.push(n), n;
}
function Pv(t, e) {
  const s = [], i = /* @__PURE__ */ new Map();
  e = Ou(Av, e);
  function n(d) {
    return i.get(d);
  }
  function a(d, f, h) {
    const m = !h, g = Vu(d);
    g.aliasOf = h && h.record;
    const v = Ou(e, d), S = [g];
    if ("alias" in d) {
      const k = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const P of k) S.push(Vu(Je({}, g, {
        components: h ? h.record.components : g.components,
        path: P,
        aliasOf: h ? h.record : g
      })));
    }
    let x, C;
    for (const k of S) {
      const { path: P } = k;
      if (f && P[0] !== "/") {
        const D = f.record.path, R = D[D.length - 1] === "/" ? "" : "/";
        k.path = f.record.path + (P && R + P);
      }
      if (x = Cv(k, f, v), h ? h.alias.push(x) : (C = C || x, C !== x && C.alias.push(x), m && d.name && !zu(x) && o(d.name)), Zh(x) && l(x), g.children) {
        const D = g.children;
        for (let R = 0; R < D.length; R++) a(D[R], x, h && h.children[R]);
      }
      h = h || x;
    }
    return C ? () => {
      o(C);
    } : Nn;
  }
  function o(d) {
    if (Yh(d)) {
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
    const f = Mv(d, s);
    s.splice(f, 0, d), d.record.name && !zu(d) && i.set(d.record.name, d);
  }
  function c(d, f) {
    let h, m = {}, g, v;
    if ("name" in d && d.name) {
      if (h = i.get(d.name), !h) throw Yi(ot.MATCHER_NOT_FOUND, { location: d });
      v = h.record.name, m = Je(ju(f.params, h.keys.filter((C) => !C.optional).concat(h.parent ? h.parent.keys.filter((C) => C.optional) : []).map((C) => C.name)), d.params && ju(d.params, h.keys.map((C) => C.name))), g = h.stringify(m);
    } else if (d.path != null)
      g = d.path, h = s.find((C) => C.re.test(g)), h && (m = h.parse(g), v = h.record.name);
    else {
      if (h = f.name ? i.get(f.name) : s.find((C) => C.re.test(f.path)), !h) throw Yi(ot.MATCHER_NOT_FOUND, {
        location: d,
        currentLocation: f
      });
      v = h.record.name, m = Je({}, f.params, d.params), g = h.stringify(m);
    }
    const S = [];
    let x = h;
    for (; x; )
      S.unshift(x.record), x = x.parent;
    return {
      name: v,
      path: g,
      params: m,
      matched: S,
      meta: Rv(S)
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
function ju(t, e) {
  const s = {};
  for (const i of e) i in t && (s[i] = t[i]);
  return s;
}
function Vu(t) {
  const e = {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: t.aliasOf,
    beforeEnter: t.beforeEnter,
    props: wv(t),
    children: t.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in t ? t.components || null : t.component && { default: t.component }
  };
  return Object.defineProperty(e, "mods", { value: {} }), e;
}
function wv(t) {
  const e = {}, s = t.props || !1;
  if ("component" in t) e.default = s;
  else for (const i in t.components) e[i] = typeof s == "object" ? s[i] : s;
  return e;
}
function zu(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0;
    t = t.parent;
  }
  return !1;
}
function Rv(t) {
  return t.reduce((e, s) => Je(e, s.meta), {});
}
function Mv(t, e) {
  let s = 0, i = e.length;
  for (; s !== i; ) {
    const a = s + i >> 1;
    Qh(t, e[a]) < 0 ? i = a : s = a + 1;
  }
  const n = Dv(t);
  return n && (i = e.lastIndexOf(n, i - 1)), i;
}
function Dv(t) {
  let e = t;
  for (; e = e.parent; ) if (Zh(e) && Qh(t, e) === 0) return e;
}
function Zh({ record: t }) {
  return !!(t.name || t.components && Object.keys(t.components).length || t.redirect);
}
function qu(t) {
  const e = Et(Ho), s = Et(Gl), i = pe(() => {
    const l = V(t.to);
    return e.resolve(l);
  }), n = pe(() => {
    const { matched: l } = i.value, { length: c } = l, u = l[c - 1], d = s.matched;
    if (!u || !d.length) return -1;
    const f = d.findIndex(Ji.bind(null, u));
    if (f > -1) return f;
    const h = Gu(l[c - 2]);
    return c > 1 && Gu(u) === h && d[d.length - 1].path !== h ? d.findIndex(Ji.bind(null, l[c - 2])) : f;
  }), a = pe(() => n.value > -1 && Lv(s.params, i.value.params)), o = pe(() => n.value > -1 && n.value === s.matched.length - 1 && Jh(s.params, i.value.params));
  function r(l = {}) {
    if (Nv(l)) {
      const c = e[V(t.replace) ? "replace" : "push"](V(t.to)).catch(Nn);
      return t.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return {
    route: i,
    href: pe(() => i.value.href),
    isActive: a,
    isExactActive: o,
    navigate: r
  };
}
function Iv(t) {
  return t.length === 1 ? t[0] : t;
}
const Ev = /* @__PURE__ */ hh({
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
  useLink: qu,
  setup(t, { slots: e }) {
    const s = /* @__PURE__ */ ca(qu(t)), { options: i } = Et(Ho), n = pe(() => ({
      [Ku(t.activeClass, i.linkActiveClass, "router-link-active")]: s.isActive,
      [Ku(t.exactActiveClass, i.linkExactActiveClass, "router-link-exact-active")]: s.isExactActive
    }));
    return () => {
      const a = e.default && Iv(e.default(s));
      return t.custom ? a : Jt("a", {
        "aria-current": s.isExactActive ? t.ariaCurrentValue : null,
        href: s.href,
        onClick: s.navigate,
        class: n.value
      }, a);
    };
  }
}), Ov = Ev;
function Nv(t) {
  if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e)) return;
    }
    return t.preventDefault && t.preventDefault(), !0;
  }
}
function Lv(t, e) {
  for (const s in e) {
    const i = e[s], n = t[s];
    if (typeof i == "string") {
      if (i !== n) return !1;
    } else if (!ts(n) || n.length !== i.length || i.some((a, o) => a.valueOf() !== n[o].valueOf())) return !1;
  }
  return !0;
}
function Gu(t) {
  return t ? t.aliasOf ? t.aliasOf.path : t.path : "";
}
const Ku = (t, e, s) => t ?? e ?? s, Uv = /* @__PURE__ */ hh({
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
    const i = Et(nl), n = pe(() => t.route || i.value), a = Et(Wu, 0), o = pe(() => {
      let c = V(a);
      const { matched: u } = n.value;
      let d;
      for (; (d = u[c]) && !d.components; ) c++;
      return c;
    }), r = pe(() => n.value.matched[o.value]);
    Ga(Wu, pe(() => o.value + 1)), Ga(mv, r), Ga(nl, n);
    const l = /* @__PURE__ */ ie();
    return zi(() => [
      l.value,
      r.value,
      t.name
    ], ([c, u, d], [f, h, m]) => {
      u && (u.instances[d] = c, h && h !== u && c && c === f && (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards), u.updateGuards.size || (u.updateGuards = h.updateGuards))), c && u && (!h || !Ji(u, h) || !f) && (u.enterCallbacks[d] || []).forEach((g) => g(c));
    }, { flush: "post" }), () => {
      const c = n.value, u = t.name, d = r.value, f = d && d.components[u];
      if (!f) return $u(s.default, {
        Component: f,
        route: c
      });
      const h = d.props[u], m = h ? h === !0 ? c.params : typeof h == "function" ? h(c) : h : null, v = Jt(f, Je({}, m, e, {
        onVnodeUnmounted: (S) => {
          S.component.isUnmounted && (d.instances[u] = null);
        },
        ref: l
      }));
      return $u(s.default, {
        Component: v,
        route: c
      }) || v;
    };
  }
});
function $u(t, e) {
  if (!t) return null;
  const s = t(e);
  return s.length === 1 ? s[0] : s;
}
const Fv = Uv;
function Wv(t) {
  const e = Pv(t.routes, t), s = t.parseQuery || hv, i = t.stringifyQuery || Fu, n = t.history, a = un(), o = un(), r = un(), l = /* @__PURE__ */ Ug(Fs);
  let c = Fs;
  Li && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = br.bind(null, (U) => "" + U), d = br.bind(null, Jy), f = br.bind(null, Qn);
  function h(U, X) {
    let Z, re;
    return Yh(U) ? (Z = e.getRecordMatcher(U), re = X) : re = U, e.addRoute(re, Z);
  }
  function m(U) {
    const X = e.getRecordMatcher(U);
    X && e.removeRoute(X);
  }
  function g() {
    return e.getRoutes().map((U) => U.record);
  }
  function v(U) {
    return !!e.getRecordMatcher(U);
  }
  function S(U, X) {
    if (X = Je({}, X || l.value), typeof U == "string") {
      const w = yr(s, U, X.path), L = e.resolve({ path: w.path }, X), W = n.createHref(w.fullPath);
      return Je(w, L, {
        params: f(L.params),
        hash: Qn(w.hash),
        redirectedFrom: void 0,
        href: W
      });
    }
    let Z;
    if (U.path != null)
      Z = Je({}, U, { path: yr(s, U.path, X.path).path });
    else {
      const w = Je({}, U.params);
      for (const L in w) w[L] == null && delete w[L];
      Z = Je({}, U, { params: d(w) }), X.params = d(X.params);
    }
    const re = e.resolve(Z, X), Te = U.hash || "";
    re.params = u(f(re.params));
    const _ = Qy(i, Je({}, U, {
      hash: Gy(Te),
      path: re.path
    })), A = n.createHref(_);
    return Je({
      fullPath: _,
      hash: Te,
      query: i === Fu ? pv(U.query) : U.query || {}
    }, re, {
      redirectedFrom: void 0,
      href: A
    });
  }
  function x(U) {
    return typeof U == "string" ? yr(s, U, l.value.path) : Je({}, U);
  }
  function C(U, X) {
    if (c !== U) return Yi(ot.NAVIGATION_CANCELLED, {
      from: X,
      to: U
    });
  }
  function k(U) {
    return R(U);
  }
  function P(U) {
    return k(Je(x(U), { replace: !0 }));
  }
  function D(U, X) {
    const Z = U.matched[U.matched.length - 1];
    if (Z && Z.redirect) {
      const { redirect: re } = Z;
      let Te = typeof re == "function" ? re(U, X) : re;
      return typeof Te == "string" && (Te = Te.includes("?") || Te.includes("#") ? Te = x(Te) : { path: Te }, Te.params = {}), Je({
        query: U.query,
        hash: U.hash,
        params: Te.path != null ? {} : U.params
      }, Te);
    }
  }
  function R(U, X) {
    const Z = c = S(U), re = l.value, Te = U.state, _ = U.force, A = U.replace === !0, w = D(Z, re);
    if (w) return R(Je(x(w), {
      state: typeof w == "object" ? Je({}, Te, w.state) : Te,
      force: _,
      replace: A
    }), X || Z);
    const L = Z;
    L.redirectedFrom = X;
    let W;
    return !_ && Zy(i, re, Z) && (W = Yi(ot.NAVIGATION_DUPLICATED, {
      to: L,
      from: re
    }), He(re, re, !0, !1)), (W ? Promise.resolve(W) : z(L, re)).catch((E) => bs(E) ? bs(E, ot.NAVIGATION_GUARD_REDIRECT) ? E : De(E) : $(E, L, re)).then((E) => {
      if (E) {
        if (bs(E, ot.NAVIGATION_GUARD_REDIRECT))
          return R(Je({ replace: A }, x(E.to), {
            state: typeof E.to == "object" ? Je({}, Te, E.to.state) : Te,
            force: _
          }), X || L);
      } else E = B(L, re, !0, A, Te);
      return J(L, re, E), E;
    });
  }
  function O(U, X) {
    const Z = C(U, X);
    return Z ? Promise.reject(Z) : Promise.resolve();
  }
  function N(U) {
    const X = Xe.values().next().value;
    return X && typeof X.runWithContext == "function" ? X.runWithContext(U) : U();
  }
  function z(U, X) {
    let Z;
    const [re, Te, _] = gv(U, X);
    Z = _r(re.reverse(), "beforeRouteLeave", U, X);
    for (const w of re) w.leaveGuards.forEach((L) => {
      Z.push(Hs(L, U, X));
    });
    const A = O.bind(null, U, X);
    return Z.push(A), st(Z).then(() => {
      Z = [];
      for (const w of a.list()) Z.push(Hs(w, U, X));
      return Z.push(A), st(Z);
    }).then(() => {
      Z = _r(Te, "beforeRouteUpdate", U, X);
      for (const w of Te) w.updateGuards.forEach((L) => {
        Z.push(Hs(L, U, X));
      });
      return Z.push(A), st(Z);
    }).then(() => {
      Z = [];
      for (const w of _) if (w.beforeEnter) if (ts(w.beforeEnter)) for (const L of w.beforeEnter) Z.push(Hs(L, U, X));
      else Z.push(Hs(w.beforeEnter, U, X));
      return Z.push(A), st(Z);
    }).then(() => (U.matched.forEach((w) => w.enterCallbacks = {}), Z = _r(_, "beforeRouteEnter", U, X, N), Z.push(A), st(Z))).then(() => {
      Z = [];
      for (const w of o.list()) Z.push(Hs(w, U, X));
      return Z.push(A), st(Z);
    }).catch((w) => bs(w, ot.NAVIGATION_CANCELLED) ? w : Promise.reject(w));
  }
  function J(U, X, Z) {
    r.list().forEach((re) => N(() => re(U, X, Z)));
  }
  function B(U, X, Z, re, Te) {
    const _ = C(U, X);
    if (_) return _;
    const A = X === Fs, w = Li ? history.state : {};
    Z && (re || A ? n.replace(U.fullPath, Je({ scroll: A && w && w.scroll }, Te)) : n.push(U.fullPath, Te)), l.value = U, He(U, X, Z, A), De();
  }
  let ae;
  function be() {
    ae || (ae = n.listen((U, X, Z) => {
      if (!Qe.listening) return;
      const re = S(U), Te = D(re, Qe.currentRoute.value);
      if (Te) {
        R(Je(Te, {
          replace: !0,
          force: !0
        }), re).catch(Nn);
        return;
      }
      c = re;
      const _ = l.value;
      Li && lv(Uu(_.fullPath, Z.delta), ov()), z(re, _).catch((A) => bs(A, ot.NAVIGATION_ABORTED | ot.NAVIGATION_CANCELLED) ? A : bs(A, ot.NAVIGATION_GUARD_REDIRECT) ? (R(Je(x(A.to), { force: !0 }), re).then((w) => {
        bs(w, ot.NAVIGATION_ABORTED | ot.NAVIGATION_DUPLICATED) && !Z.delta && Z.type === sl.pop && n.go(-1, !1);
      }).catch(Nn), Promise.reject()) : (Z.delta && n.go(-Z.delta, !1), $(A, re, _))).then((A) => {
        A = A || B(re, _, !1), A && (Z.delta && !bs(A, ot.NAVIGATION_CANCELLED) ? n.go(-Z.delta, !1) : Z.type === sl.pop && bs(A, ot.NAVIGATION_ABORTED | ot.NAVIGATION_DUPLICATED) && n.go(-1, !1)), J(re, _, A);
      }).catch(Nn);
    }));
  }
  let fe = un(), ce = un(), j;
  function $(U, X, Z) {
    De(U);
    const re = ce.list();
    return re.length ? re.forEach((Te) => Te(U, X, Z)) : console.error(U), Promise.reject(U);
  }
  function oe() {
    return j && l.value !== Fs ? Promise.resolve() : new Promise((U, X) => {
      fe.add([U, X]);
    });
  }
  function De(U) {
    return j || (j = !U, be(), fe.list().forEach(([X, Z]) => U ? Z(U) : X()), fe.reset()), U;
  }
  function He(U, X, Z, re) {
    const { scrollBehavior: Te } = t;
    if (!Li || !Te) return Promise.resolve();
    const _ = !Z && cv(Uu(U.fullPath, 0)) || (re || !Z) && history.state && history.state.scroll || null;
    return Fi().then(() => Te(U, X, _)).then((A) => A && rv(A)).catch((A) => $(A, U, X));
  }
  const Ie = (U) => n.go(U);
  let je;
  const Xe = /* @__PURE__ */ new Set(), Qe = {
    currentRoute: l,
    listening: !0,
    addRoute: h,
    removeRoute: m,
    clearRoutes: e.clearRoutes,
    hasRoute: v,
    getRoutes: g,
    resolve: S,
    options: t,
    push: k,
    replace: P,
    go: Ie,
    back: () => Ie(-1),
    forward: () => Ie(1),
    beforeEach: a.add,
    beforeResolve: o.add,
    afterEach: r.add,
    onError: ce.add,
    isReady: oe,
    install(U) {
      U.component("RouterLink", Ov), U.component("RouterView", Fv), U.config.globalProperties.$router = Qe, Object.defineProperty(U.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => V(l)
      }), Li && !je && l.value === Fs && (je = !0, k(n.location).catch((re) => {
      }));
      const X = {};
      for (const re in Fs) Object.defineProperty(X, re, {
        get: () => l.value[re],
        enumerable: !0
      });
      U.provide(Ho, Qe), U.provide(Gl, /* @__PURE__ */ Xf(X)), U.provide(nl, l);
      const Z = U.unmount;
      Xe.add(U), U.unmount = function() {
        Xe.delete(U), Xe.size < 1 && (c = Fs, ae && ae(), ae = null, l.value = Fs, je = !1, j = !1), Z();
      };
    }
  };
  function st(U) {
    return U.reduce((X, Z) => X.then(() => N(Z)), Promise.resolve());
  }
  return Qe;
}
function Bv() {
  return Et(Ho);
}
function ep(t) {
  return Et(Gl);
}
const Hv = "Cloudflare Server Monitor", jv = 1440, Ui = {
  ONLINE_THRESHOLD_MS: 3e5,
  RECONNECT_INITIAL_DELAY_MS: 1e3,
  RECONNECT_MAX_DELAY_MS: 3e4,
  MAX_RECONNECT_ATTEMPTS: 10
}, Mi = {
  MAX_DATA_POINTS: 500,
  ANIMATION_DURATION: 300,
  MAX_TICKS: 8,
  MAX_TICKS_HOUR: 12
}, Ju = {
  LONG_RANGE_POINT_OPTIONS: [60, 120, 180, 240],
  DEFAULT_LONG_RANGE_POINTS: 120
}, Qt = {
  THEME_PREFERENCE: "theme_preference",
  LANGUAGE_PREFERENCE: "language_preference",
  VIEW_PREFERENCE: "monitor_preferred_view",
  JWT_TOKEN: "jwt_token",
  TURNSTILE_TOKEN: "turnstile_token",
  TURNSTILE_VERIFIED: "turnstile_verified"
}, Wi = "auto", Xi = "en", Kl = Object.freeze([
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
]), Vv = Object.freeze(Kl.map((t) => t.code));
Object.freeze(Kl.reduce((t, e) => (t[e.code] = e, t), {}));
const kr = Object.freeze(Vv.reduce((t, e) => (t[e.toLowerCase()] = e, t), {})), tp = (t, e = Wi) => {
  const s = String(t || "").trim().toLowerCase();
  return s === Wi ? Wi : kr[s] ? kr[s] : kr[String(e || "").trim().toLowerCase()] || Wi;
}, zv = Object.freeze(["zh", "zh-TW", "en", "ja", "id", "fr", "es"]);
Object.freeze(zv.reduce((t, e) => (t[e.toLowerCase()] = e, t), {}));
const sp = {
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
}, qv = Object.freeze({
  en: () => Promise.resolve({ default: sp }),
  zh: () => Promise.resolve().then(() => kw),
  "zh-TW": () => Promise.resolve().then(() => Tw),
  ja: () => Promise.resolve().then(() => Aw),
  id: () => Promise.resolve().then(() => Pw),
  fr: () => Promise.resolve().then(() => Rw),
  es: () => Promise.resolve().then(() => Dw)
}), $l = Object.freeze(Kl.map((t) => Object.freeze({
  ...t,
  load: qv[t.code]
}))), ip = Qt.LANGUAGE_PREFERENCE;
let Gv = Wi;
const Zn = /* @__PURE__ */ ca({ [Xi]: sp }), Yu = /* @__PURE__ */ new Set([Xi]), wa = /* @__PURE__ */ new Map(), Kv = (t) => {
  var n;
  const e = String(t || "").trim().toLowerCase().replace(/_/g, "-");
  if (!e) return null;
  let s = null, i = 0;
  for (const a of $l) {
    const o = (n = a.browserAliases) != null && n.length ? a.browserAliases : [a.code.toLowerCase()];
    for (const r of o)
      r.length > i && (e === r || e.startsWith(`${r}-`)) && (s = a, i = r.length);
  }
  return s;
}, $v = () => {
  if (typeof navigator > "u") return Xi;
  const t = Array.isArray(navigator.languages) && navigator.languages.length > 0 ? navigator.languages : [navigator.language];
  for (const e of t) {
    const s = Kv(e);
    if (s) return s.code;
  }
  return Xi;
}, Jv = (t) => {
  const e = tp(t);
  return e === Wi ? $v() : e;
}, jo = /* @__PURE__ */ ie(Jv(localStorage.getItem(ip) || Gv)), Yv = (t) => {
  if (Yu.has(t)) return Promise.resolve(!0);
  if (wa.has(t)) return wa.get(t);
  const e = $l.find((i) => i.code === t);
  if (!e || typeof e.load != "function") return Promise.resolve(!1);
  const s = e.load().then((i) => {
    const n = i == null ? void 0 : i.default;
    return !n || typeof n != "object" ? !1 : (Zn[t] = n, Yu.add(t), !0);
  }).catch((i) => (console.error(`Failed to load language: ${t}`, i), !1)).finally(() => {
    wa.delete(t);
  });
  return wa.set(t, s), s;
}, np = (t) => {
  var e, s;
  return ((e = Zn[jo.value]) == null ? void 0 : e[t]) || ((s = Zn[Xi]) == null ? void 0 : s[t]) || t;
}, ap = async (t) => {
  const e = tp(t, "");
  return await Yv(e) ? (jo.value = e, localStorage.setItem(ip, e), window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang: e } })), !0) : !1;
}, Xv = () => jo.value, Jl = () => pe(() => Zn[jo.value] || Zn[Xi]), Xu = Qt.THEME_PREFERENCE, op = [], _n = /* @__PURE__ */ ie("auto");
let Qv = "auto";
const Qu = (t, e = "auto") => {
  const s = String(t || "").trim().toLowerCase();
  return s === "dark" || s === "light" || s === "auto" ? s : e === "dark" || e === "light" ? e : "auto";
}, Zv = () => typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : "dark", e_ = (t) => t === "auto" ? Zv() : t, Ja = (t) => {
  const e = e_(t);
  document.body.classList.remove("dark", "light"), e !== "dark" && document.body.classList.add(e), op.forEach((s) => s(e));
};
let Di = null, Sr = null;
const t_ = () => {
  Di || typeof window > "u" || !window.matchMedia || (Di = window.matchMedia("(prefers-color-scheme: dark)"), Sr = () => {
    _n.value === "auto" && Ja("auto");
  }, Di.addEventListener ? Di.addEventListener("change", Sr) : Di.addListener && Di.addListener(Sr));
};
t_();
const rp = () => {
  const t = () => Qu(localStorage.getItem(Xu), Qv), e = (a) => {
    const o = Qu(a);
    localStorage.setItem(Xu, o), _n.value = o, Ja(o);
  }, s = () => {
    const a = ["dark", "light", "auto"], r = (a.indexOf(_n.value) + 1) % a.length;
    return e(a[r]), a[r];
  }, i = () => {
    const a = t();
    _n.value = a, Ja(a);
  }, n = (a) => {
    op.push(a);
  };
  return da(() => {
    i();
  }), {
    currentTheme: _n,
    setTheme: e,
    getPreferredTheme: t,
    applyTheme: Ja,
    toggleTheme: s,
    initTheme: i,
    onThemeChange: n
  };
};
let js = [], yo = null, al = !1;
const ol = (t) => String(t || "").replace(/\/+$/, ""), lp = (t) => {
  try {
    const e = new URL(t);
    return `${e.protocol === "https:" ? "wss:" : "ws:"}//${e.host}`;
  } catch {
    return `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${window.location.host}`;
  }
}, Zu = (t) => {
  js = t.map((e) => ol(e)).filter((e) => e), js.length === 0 && (js = [ol(window.location.origin)]), yo = lp(js[0]), window.__APP_API_BASES__ = js, window.__APP_WS_BASE__ = yo;
}, s_ = async () => {
  var e;
  al = !1, Zu([window.location.origin]);
  const t = (e = document.querySelector('meta[name="apiBase"]')) == null ? void 0 : e.content;
  if (t) {
    const s = t.split(",").map((i) => i.trim()).filter(Boolean);
    s.length > 0 && (al = !0, Zu(s));
  }
  return js;
}, Wt = () => {
  var t;
  return js.length > 0 ? js : ((t = window.__APP_API_BASES__) == null ? void 0 : t.length) > 0 ? window.__APP_API_BASES__ : [ol(window.location.origin)];
}, i_ = () => yo || (window.__APP_WS_BASE__ ? window.__APP_WS_BASE__ : lp(Wt()[0])), n_ = () => al, cp = (t) => {
  const e = String(t || "").replace(/^\/+/, "");
  return e ? `./${e}` : "./";
}, Tr = {
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  500: "Internal Server Error"
}, rl = Qt.TURNSTILE_VERIFIED, a_ = 15e3, o_ = () => "/admin", r_ = () => {
  if (typeof window > "u") return;
  const t = o_();
  if (window.location.pathname === t || window.location.pathname.startsWith(`${t}/`)) {
    window.location.reload();
    return;
  }
  window.location.assign(t);
}, up = (t = !0, e = !0, s = null, i = {}) => {
  const {
    includeTurnstileToken: n = e,
    includeTurnstileVerified: a = !0
  } = i, o = {
    "Content-Type": "application/json"
  };
  if (t) {
    const r = localStorage.getItem(Qt.JWT_TOKEN);
    r && (o.Authorization = "Bearer " + r);
  }
  if (e && n) {
    const r = localStorage.getItem(Qt.TURNSTILE_TOKEN);
    r && (o["X-Turnstile-Token"] = r);
  }
  if (a) {
    const r = localStorage.getItem(rl);
    r && (o["X-Turnstile-Verified"] = r);
  }
  return o;
}, dp = async (t, e = {}) => {
  const { autoRedirect: s = !0, baseUrl: i = null } = e;
  if (t.status === 401)
    return localStorage.removeItem(Qt.JWT_TOKEN), s && r_(), { error: Tr[401], status: 401 };
  if (t.status === 403)
    return localStorage.removeItem(Qt.TURNSTILE_TOKEN), localStorage.removeItem(rl), s && window.location.reload(), { error: Tr[403], status: 403 };
  if (!t.ok) {
    let n = Tr[t.status] || "Request failed", a = t.status, o = null;
    try {
      const r = await t.json();
      r.message && (o = r.message), r.error && (n = r.error), r.code && (a = r.code, !r.error && typeof r.code == "string" && (n = r.code));
    } catch {
    }
    return { error: n, code: a, status: t.status, message: o };
  }
  try {
    const n = await t.json();
    return n && n.turnstile_verified && (localStorage.setItem(rl, n.turnstile_verified), localStorage.removeItem(Qt.TURNSTILE_TOKEN)), { data: n, status: t.status };
  } catch {
    return { data: null, status: t.status };
  }
}, fp = async (t, e, s = null) => {
  if (!s)
    return fetch(t, e);
  const i = new AbortController(), n = setTimeout(() => i.abort(), s);
  try {
    return await fetch(t, { ...e, signal: i.signal });
  } finally {
    clearTimeout(n);
  }
}, Ra = async (t, e, s, i = {}) => {
  const { includeAuth: n = !0, includeTurnstile: a = !0, autoRedirect: o = !0, baseUrl: r = null, timeoutMs: l = null } = i, c = up(n, a, r, i), u = r || Wt()[0];
  try {
    const d = await fp(`${u}${e}`, {
      method: t,
      headers: c,
      body: s != null ? JSON.stringify(s) : void 0,
      credentials: "include"
    }, l);
    return { ...await dp(d, { autoRedirect: o, baseUrl: u }), baseUrl: u };
  } catch (d) {
    return d.name === "AbortError" ? { error: "timeout", status: 0, baseUrl: u, timeout: !0 } : { error: d.message || "Network error", status: 0, baseUrl: u };
  }
}, xr = async (t, e, s, i = "GET", n = null) => {
  const { includeAuth: a = !0, includeTurnstile: o = !0, autoRedirect: r = !0, timeoutMs: l = null } = s, c = up(a, o, t, s);
  try {
    const u = await fp(`${t}${e}`, {
      method: i,
      headers: c,
      body: n,
      credentials: "include"
    }, l);
    return { ...await dp(u, { autoRedirect: r, baseUrl: t }), baseUrl: t };
  } catch (u) {
    if (u.name === "AbortError")
      return { error: "timeout", status: 0, baseUrl: t, timeout: !0 };
    throw u;
  }
}, Ln = {
  get(t, e = {}) {
    return Ra("GET", t, null, e);
  },
  post(t, e = {}, s = {}) {
    return Ra("POST", t, e, s);
  },
  put(t, e = {}, s = {}) {
    return Ra("PUT", t, e, s);
  },
  delete(t, e = {}) {
    return Ra("DELETE", t, null, e);
  },
  async getAll(t, e = {}) {
    const s = Wt();
    if (s.length === 0)
      return [{ ...await this.get(t, e), baseUrl: Wt()[0] }];
    const i = s.map(
      (a) => xr(a, t, e, "GET", null)
    );
    return (await Promise.allSettled(i)).map((a, o) => {
      var r;
      return a.status === "fulfilled" ? a.value : { error: ((r = a.reason) == null ? void 0 : r.message) || "Request failed", status: 0, baseUrl: s[o] };
    });
  },
  async getAllWithProgress(t, e, s = {}) {
    const i = Wt();
    if (i.length === 0) {
      const a = await this.get(t, s);
      e({ ...a, baseUrl: Wt()[0] });
      return;
    }
    const n = i.map(
      (a) => xr(a, t, s, "GET", null).then((o) => {
        e({ ...o, baseUrl: a });
      }).catch((o) => {
        const r = /failed to fetch|networkerror|cors/i.test(o.message);
        e({ error: o.message, status: 0, baseUrl: a, corsError: r });
      })
    );
    await Promise.allSettled(n);
  },
  async postAll(t, e = {}, s = {}) {
    const i = Wt();
    if (i.length === 0)
      return [{ ...await this.post(t, e, s), baseUrl: Wt()[0] }];
    const n = i.map(
      (o) => xr(o, t, s, "POST", JSON.stringify(e))
    );
    return (await Promise.allSettled(n)).map((o) => {
      var r;
      return o.status === "fulfilled" ? o.value : { error: ((r = o.reason) == null ? void 0 : r.message) || "Request failed", status: 0, baseUrl: "" };
    });
  },
  getByIndex(t, e = 0, s = {}) {
    const i = Wt(), n = i.length > 0 && i[e] !== void 0 ? i[e] : Wt()[0];
    return this.get(t, { ...s, baseUrl: n });
  },
  postByIndex(t, e = {}, s = 0, i = {}) {
    const n = Wt(), a = n.length > 0 && n[s] !== void 0 ? n[s] : Wt()[0];
    return this.post(t, e, { ...i, baseUrl: a });
  }
}, l_ = () => !!localStorage.getItem(Qt.JWT_TOKEN), Gi = (t) => t && typeof t == "object" && !Array.isArray(t) ? t : {}, ll = "mikus-global-sakura-background", c_ = 15, u_ = 10, d_ = (t, e) => {
  const s = Gi(t);
  if (!Object.prototype.hasOwnProperty.call(s, e)) return !1;
  const i = s[e];
  if (i == null) return !1;
  if (typeof i == "boolean") return i;
  if (typeof i == "number") return i !== 0;
  if (typeof i == "string") {
    const n = i.trim().toLowerCase();
    return n ? !["0", "false", "off", "no", "disable", "disabled"].includes(n) : !1;
  }
  return !0;
}, f_ = (t) => d_(t, "mikus"), Ya = 3, kn = 8, Sn = 0, h_ = (t) => {
  const e = Number(Gi(t).three_net_panel_count);
  return Number.isInteger(e) && e >= Sn && e <= kn ? e : Ya;
}, p_ = [
  { key: "accent_primary", cssVar: "--accent-green" },
  { key: "accent_secondary", cssVar: "--accent-blue" },
  { key: "bg_primary", cssVar: "--bg-primary" },
  { key: "bg_card", cssVar: "--bg-card-solid" },
  { key: "text_primary", cssVar: "--text-primary" },
  { key: "border", cssVar: "--border-color" }
], ed = "cfsm-custom-colors", vo = [
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
], m_ = new Set(vo.map((t) => t.key)), hp = (t) => {
  const e = Gi(t).color_preset;
  return m_.has(e) ? e : "default";
}, g_ = (t) => vo.find((e) => e.key === t) || vo[0], b_ = (t) => [
  parseInt(t.slice(1, 3), 16),
  parseInt(t.slice(3, 5), 16),
  parseInt(t.slice(5, 7), 16)
].join(", "), Ar = (t) => {
  if (typeof document > "u" || !document.head) return;
  const e = hp(t), s = (n) => {
    if (e === "default") return "";
    const a = g_(e)[n], o = p_.map(({ key: r, cssVar: l }) => `    ${l}: ${a[r]} !important;`);
    return o.push(`    --bg-card: rgba(${b_(a.bg_card)}, 0.6) !important;`), o.join(`
`);
  };
  let i = document.getElementById(ed);
  i || (i = document.createElement("style"), i.id = ed, document.head.appendChild(i)), i.textContent = [
    "body:not(.light) {",
    s("dark"),
    "}",
    "body.light {",
    s("light"),
    "}"
  ].join(`
`);
}, y_ = () => {
  if (typeof document > "u" || !document.body || document.getElementById(ll)) return;
  const t = document.createElement("div");
  t.id = ll, t.className = "mikus-global-sakura", t.setAttribute("aria-hidden", "true");
  const s = (typeof window < "u" ? window.innerWidth : 1024) <= 768 ? u_ : c_;
  for (let i = 0; i < s; i += 1) {
    const n = document.createElement("span");
    n.className = "mikus-background-petal", t.appendChild(n);
  }
  document.body.insertBefore(t, document.body.firstChild);
}, v_ = () => {
  var t;
  typeof document > "u" || (t = document.getElementById(ll)) == null || t.remove();
}, __ = (t) => {
  if (typeof document > "u") return;
  const e = !!t;
  document.body.classList.toggle("mikus-theme", e), e ? y_() : v_();
}, pp = (t) => {
  __(f_(t));
}, k_ = {
  key: 0,
  class: "theme-config-overlay"
}, S_ = {
  class: "theme-config-drawer",
  role: "dialog",
  "aria-modal": "true"
}, T_ = { class: "drawer-header" }, x_ = ["aria-label"], A_ = { class: "drawer-body" }, C_ = { class: "drawer-section" }, P_ = {
  class: "theme-config-label",
  for: "three-net-panel-count"
}, w_ = { class: "theme-config-stepper" }, R_ = ["disabled"], M_ = ["min", "max"], D_ = ["disabled"], I_ = { class: "drawer-section" }, E_ = { class: "drawer-section-title" }, O_ = { class: "preset-grid" }, N_ = ["onClick"], L_ = {
  class: "preset-swatches",
  title: "Dark"
}, U_ = {
  class: "preset-swatches",
  title: "Light"
}, F_ = { class: "preset-name" }, W_ = {
  key: 0,
  class: "theme-config-error"
}, B_ = {
  key: 1,
  class: "theme-config-saved"
}, H_ = { class: "drawer-footer" }, j_ = ["disabled"], V_ = {
  __name: "ThemeConfigButton",
  setup(t) {
    const e = Jl(), s = Et("appConfig", null), i = /* @__PURE__ */ ie(!1), n = /* @__PURE__ */ ie(Ya), a = /* @__PURE__ */ ie("default"), o = /* @__PURE__ */ ie(!1), r = /* @__PURE__ */ ie(""), l = /* @__PURE__ */ ie(""), c = (C) => {
      typeof document > "u" || !document.body || document.body.classList.toggle("theme-config-open", C);
    }, u = (C, k) => [
      C[k].accent_primary,
      C[k].accent_secondary,
      C[k].bg_card,
      C[k].text_primary
    ], d = () => ({
      ...Gi(s == null ? void 0 : s.theme_options),
      three_net_panel_count: n.value === "" ? Ya : Number(n.value),
      color_preset: a.value
    }), f = () => {
      if (!i.value) return;
      const C = d();
      Ar(C), window.dispatchEvent(new CustomEvent("theme-options-changed", { detail: C }));
    }, h = () => {
      n.value = h_(s == null ? void 0 : s.theme_options), a.value = hp(s == null ? void 0 : s.theme_options), r.value = "", l.value = "", i.value = !0, c(!0);
    }, m = () => {
      if (o.value) return;
      i.value = !1, c(!1);
      const C = Gi(s == null ? void 0 : s.theme_options);
      Ar(C), window.dispatchEvent(new CustomEvent("theme-options-changed", { detail: C }));
    }, g = (C) => {
      a.value = C, f();
    }, v = (C) => {
      const k = Number(n.value) + C;
      Number.isFinite(k) && (n.value = Math.max(Sn, Math.min(kn, Math.trunc(k))), f());
    }, S = () => {
      n.value = Ya, a.value = "default", r.value = "", l.value = "", f();
    }, x = async () => {
      var R;
      if (o.value) return;
      r.value = "", l.value = "";
      const C = Number(n.value);
      if (n.value === "" || !Number.isInteger(C) || C < Sn || C > kn) {
        r.value = e.value.themeConfigInvalidCount;
        return;
      }
      if (!localStorage.getItem(Qt.JWT_TOKEN)) {
        r.value = e.value.themeConfigLoginRequired;
        return;
      }
      const k = d();
      o.value = !0;
      const P = await Ln.post("/api/theme_options", { theme_options: k }, { autoRedirect: !1 });
      if (o.value = !1, P.error) {
        r.value = P.status === 401 ? e.value.themeConfigLoginRequired : `${e.value.saveFailed}${P.error}`;
        return;
      }
      const D = Gi(((R = P.data) == null ? void 0 : R.theme_options) || k);
      s && (s.theme_options = D), pp(D), Ar(D), window.dispatchEvent(new CustomEvent("theme-options-changed", { detail: D })), m();
    };
    return fa(() => c(!1)), (C, k) => (ve(), ke(
      ut,
      null,
      [
        y("button", {
          type: "button",
          class: "admin-link-header theme-config-btn",
          "aria-label": "Theme Config",
          title: "Theme Config",
          onClick: h
        }, [...k[3] || (k[3] = [
          Lh('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="1" x2="7" y1="14" y2="14"></line><line x1="9" x2="15" y1="8" y2="8"></line><line x1="17" x2="23" y1="16" y2="16"></line></svg>', 1)
        ])]),
        (ve(), zl(Zg, { to: "body" }, [
          Ce(ry, { name: "theme-config-drawer" }, {
            default: Bl(() => [
              i.value ? (ve(), ke("div", k_, [
                y("div", S_, [
                  y("div", T_, [
                    k[4] || (k[4] = y(
                      "div",
                      { class: "modal-title" },
                      "$ Theme Config",
                      -1
                      /* CACHED */
                    )),
                    y("button", {
                      type: "button",
                      class: "modal-close",
                      "aria-label": V(e).close,
                      onClick: m
                    }, "✕", 8, x_)
                  ]),
                  y("div", A_, [
                    y("section", C_, [
                      y(
                        "label",
                        P_,
                        F(V(e).threeNetPanelCount),
                        1
                        /* TEXT */
                      ),
                      y("div", w_, [
                        y("button", {
                          type: "button",
                          class: "btn",
                          disabled: n.value <= V(Sn),
                          onClick: k[0] || (k[0] = (P) => v(-1))
                        }, "−", 8, R_),
                        vs(y("input", {
                          id: "three-net-panel-count",
                          "onUpdate:modelValue": k[1] || (k[1] = (P) => n.value = P),
                          class: "form-input theme-config-input",
                          type: "number",
                          min: V(Sn),
                          max: V(kn),
                          step: "1",
                          onInput: f
                        }, null, 40, M_), [
                          [
                            My,
                            n.value,
                            void 0,
                            { number: !0 }
                          ]
                        ]),
                        y("button", {
                          type: "button",
                          class: "btn",
                          disabled: n.value >= V(kn),
                          onClick: k[2] || (k[2] = (P) => v(1))
                        }, "+", 8, D_)
                      ])
                    ]),
                    y("section", I_, [
                      y(
                        "h3",
                        E_,
                        F(V(e).colorPresetTitle),
                        1
                        /* TEXT */
                      ),
                      y("div", O_, [
                        (ve(!0), ke(
                          ut,
                          null,
                          vi(V(vo), (P) => (ve(), ke("button", {
                            key: P.key,
                            type: "button",
                            class: We(["preset-card", { active: a.value === P.key }]),
                            onClick: (D) => g(P.key)
                          }, [
                            y("span", L_, [
                              (ve(!0), ke(
                                ut,
                                null,
                                vi(u(P, "dark"), (D, R) => (ve(), ke(
                                  "span",
                                  {
                                    key: "dark-" + R,
                                    style: Vn({ background: D })
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                ))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ]),
                            y("span", U_, [
                              (ve(!0), ke(
                                ut,
                                null,
                                vi(u(P, "light"), (D, R) => (ve(), ke(
                                  "span",
                                  {
                                    key: "light-" + R,
                                    style: Vn({ background: D })
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                ))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ]),
                            y(
                              "span",
                              F_,
                              F(V(e)[P.labelKey]),
                              1
                              /* TEXT */
                            )
                          ], 10, N_))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ]),
                    r.value ? (ve(), ke(
                      "p",
                      W_,
                      F(r.value),
                      1
                      /* TEXT */
                    )) : l.value ? (ve(), ke(
                      "p",
                      B_,
                      F(l.value),
                      1
                      /* TEXT */
                    )) : Lt("v-if", !0)
                  ]),
                  y("div", H_, [
                    y(
                      "button",
                      {
                        type: "button",
                        class: "btn",
                        onClick: S
                      },
                      F(V(e).themeConfigReset),
                      1
                      /* TEXT */
                    ),
                    y(
                      "button",
                      {
                        type: "button",
                        class: "btn",
                        onClick: m
                      },
                      F(V(e).cancel),
                      1
                      /* TEXT */
                    ),
                    y("button", {
                      type: "button",
                      class: "btn btn-primary",
                      disabled: o.value,
                      onClick: x
                    }, F(o.value ? V(e).saving : V(e).save), 9, j_)
                  ])
                ])
              ])) : Lt("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          })
        ]))
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
}, z_ = { class: "terminal-header" }, q_ = { class: "terminal-title" }, G_ = { class: "terminal-header-controls" }, K_ = { class: "lang-select-wrapper" }, $_ = ["value", "disabled", "aria-label"], J_ = ["value"], Y_ = { class: "theme-toggle-wrapper" }, X_ = { class: "theme-toggle" }, Q_ = {
  key: 1,
  href: "/#/",
  class: "admin-link-header"
}, Z_ = ["href"], ek = {
  __name: "TerminalHeader",
  props: {
    title: {
      type: String,
      default: Hv
    }
  },
  setup(t) {
    const { currentTheme: e, setTheme: s } = rp(), i = /* @__PURE__ */ ie(Xv()), n = $l, a = /* @__PURE__ */ ie(!1), o = ep(), r = /* @__PURE__ */ ie(o.path === "/admin"), l = pe(() => n_() ? "/#/admin" : "/admin#/admin"), c = async (d) => {
      const f = d.target.value;
      if (f === i.value) return;
      a.value = !0;
      const h = await ap(f);
      a.value = !1, h || (d.target.value = i.value);
    }, u = (d) => {
      i.value = d.detail.lang;
    };
    return da(() => {
      window.addEventListener("languageChanged", u);
    }), fa(() => {
      window.removeEventListener("languageChanged", u);
    }), (d, f) => (ve(), ke("div", z_, [
      f[10] || (f[10] = y(
        "div",
        { class: "terminal-dots" },
        [
          y("span", { class: "terminal-dot red" }),
          y("span", { class: "terminal-dot yellow" }),
          y("span", { class: "terminal-dot green" })
        ],
        -1
        /* CACHED */
      )),
      y(
        "div",
        q_,
        F(t.title),
        1
        /* TEXT */
      ),
      y("div", G_, [
        y("div", K_, [
          f[3] || (f[3] = y(
            "svg",
            {
              class: "lang-select-icon",
              xmlns: "http://www.w3.org/2000/svg",
              width: "14",
              height: "14",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            },
            [
              y("circle", {
                cx: "12",
                cy: "12",
                r: "10"
              }),
              y("path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }),
              y("path", { d: "M2 12h20" })
            ],
            -1
            /* CACHED */
          )),
          y("select", {
            class: "lang-select",
            value: i.value,
            disabled: a.value,
            "aria-label": V(np)("language"),
            onChange: c
          }, [
            (ve(!0), ke(
              ut,
              null,
              vi(V(n), (h) => (ve(), ke("option", {
                key: h.code,
                value: h.code
              }, F(h.nativeLabel), 9, J_))),
              128
              /* KEYED_FRAGMENT */
            ))
          ], 40, $_),
          f[4] || (f[4] = y(
            "svg",
            {
              class: "lang-select-chevron",
              xmlns: "http://www.w3.org/2000/svg",
              width: "12",
              height: "12",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            },
            [
              y("polyline", { points: "6 9 12 15 18 9" })
            ],
            -1
            /* CACHED */
          ))
        ]),
        y("div", Y_, [
          y("div", X_, [
            y(
              "button",
              {
                class: We(["theme-btn", { active: V(e) === "auto" }]),
                onClick: f[0] || (f[0] = (h) => V(s)("auto")),
                "aria-label": "Auto - Follow System"
              },
              [...f[5] || (f[5] = [
                y(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "lucide lucide-monitor"
                  },
                  [
                    y("rect", {
                      width: "20",
                      height: "14",
                      x: "2",
                      y: "3",
                      rx: "2"
                    }),
                    y("line", {
                      x1: "8",
                      x2: "16",
                      y1: "21",
                      y2: "21"
                    }),
                    y("line", {
                      x1: "12",
                      x2: "12",
                      y1: "17",
                      y2: "21"
                    })
                  ],
                  -1
                  /* CACHED */
                )
              ])],
              2
              /* CLASS */
            ),
            y(
              "button",
              {
                class: We(["theme-btn", { active: V(e) === "dark" }]),
                onClick: f[1] || (f[1] = (h) => V(s)("dark")),
                "aria-label": "Dark Mode"
              },
              [...f[6] || (f[6] = [
                y(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "lucide lucide-moon"
                  },
                  [
                    y("path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" })
                  ],
                  -1
                  /* CACHED */
                )
              ])],
              2
              /* CLASS */
            ),
            y(
              "button",
              {
                class: We(["theme-btn", { active: V(e) === "light" }]),
                onClick: f[2] || (f[2] = (h) => V(s)("light")),
                "aria-label": "Light Mode"
              },
              [...f[7] || (f[7] = [
                Lh('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>', 1)
              ])],
              2
              /* CLASS */
            )
          ])
        ]),
        r.value ? Lt("v-if", !0) : (ve(), zl(V_, { key: 0 })),
        r.value ? (ve(), ke("a", Q_, [...f[8] || (f[8] = [
          y(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "lucide lucide-home"
            },
            [
              y("path", { d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" })
            ],
            -1
            /* CACHED */
          )
        ])])) : (ve(), ke("a", {
          key: 2,
          href: l.value,
          class: "admin-link-header"
        }, [...f[9] || (f[9] = [
          y(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "lucide lucide-settings"
            },
            [
              y("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }),
              y("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              })
            ],
            -1
            /* CACHED */
          )
        ])], 8, Z_))
      ])
    ]));
  }
}, Bi = (t, e = null) => {
  const s = Number(t);
  if (Number.isFinite(s) && s > 0)
    return s < 1e10 ? s * 1e3 : s;
  const i = new Date(t).getTime();
  return Number.isFinite(i) && i > 0 ? i : e;
}, tk = (t) => {
  if (!t) return "-";
  const e = new Date(t), s = (i) => String(i).padStart(2, "0");
  return `${e.getFullYear()}-${s(e.getMonth() + 1)}-${s(e.getDate())} ${s(e.getHours())}:${s(e.getMinutes())}:${s(e.getSeconds())}`;
}, cl = /* @__PURE__ */ ie(""), mp = /* @__PURE__ */ ie(""), gp = (t) => {
  const e = Number(t);
  return Number.isInteger(e) && e >= 0 && e <= jv ? e : 0;
}, sk = (t, e = {}, s = 0, i = []) => {
  const { onUpdate: n, onStatus: a, onMessage: o, onTimeout: r } = e, c = gp(e.timeoutMinutes) * 60 * 1e3, u = e.replay !== !1, d = (t || "all").toLowerCase();
  let f = null, h = !1, m = null, g = Ui.RECONNECT_INITIAL_DELAY_MS, v = 0, S = null;
  const x = 12e4;
  let C = !1;
  const k = /* @__PURE__ */ new Set(), P = (j) => {
    const $ = Wt();
    if ($.length > 0 && $[j])
      try {
        const oe = new URL($[j]);
        return `${oe.protocol === "https:" ? "wss:" : "ws:"}//${oe.host}`;
      } catch {
        return `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${window.location.host}`;
      }
    return i_();
  }, D = () => {
    try {
      return localStorage.getItem(Qt.JWT_TOKEN) || "";
    } catch {
      return "";
    }
  }, R = (j) => typeof window > "u" || !window.location ? !1 : j.host === window.location.host, O = (j, $) => {
    C = j, typeof a == "function" && a({ connected: j, reason: $ || "" });
  }, N = () => {
    k.forEach((j) => clearTimeout(j)), k.clear();
  }, z = () => {
    S && (clearTimeout(S), S = null);
  }, J = (j, $ = Date.now()) => Bi(j, $), B = ({ serverId: j, data: $, ts: oe }) => {
    if (j && $ && typeof n == "function") {
      const De = Date.now(), He = J($.sample_timestamp || $.last_updated || $.timestamp || oe, De);
      n({
        serverId: j,
        data: {
          ...$,
          sample_timestamp: He,
          last_updated: De,
          timestamp: De
        }
      });
    }
  }, ae = (j) => {
    const $ = [], oe = Array.isArray(j.updates) ? j.updates : [];
    for (const De of oe) {
      if (!De || !De.serverId) continue;
      const He = [], Ie = Array.isArray(De.samples) ? De.samples : [];
      for (const je of Ie) {
        if (!je || typeof je != "object") continue;
        const Xe = je.data || je.payload || je.metrics;
        Xe && He.push({
          serverId: De.serverId,
          ts: J(je.ts || je.timestamp || Xe.last_updated || j.ts),
          data: Xe
        });
      }
      He.sort((je, Xe) => je.ts - Xe.ts), He.length > 0 && $.push(He);
    }
    return $;
  }, be = (j) => {
    const $ = ae(j);
    if ($.length !== 0)
      for (const oe of $) {
        const De = oe[0].ts;
        for (const He of oe) {
          const Ie = Math.max(0, Math.min(He.ts - De, x)), je = setTimeout(() => {
            k.delete(je), B(He);
          }, Ie);
          k.add(je);
        }
      }
  }, fe = () => {
    h = !1;
    let j = null;
    try {
      const $ = new URL(`${P(s)}/api/ws`);
      $.searchParams.set("subscribe", d);
      const oe = D();
      oe && !R($) && $.searchParams.set("token", oe), j = new WebSocket($.toString()), f = j;
    } catch {
      O(!1, "WebSocket not supported");
      return;
    }
    j.addEventListener("open", () => {
      if (j !== f || h) {
        try {
          j.close();
        } catch {
        }
        return;
      }
      g = Ui.RECONNECT_INITIAL_DELAY_MS, v = 0;
      try {
        j.send(JSON.stringify({
          type: "subscribe",
          scope: d,
          ids: Array.isArray(i) ? i : []
        }));
      } catch {
      }
      O(!0, "connected"), z(), c !== 0 && (S = setTimeout(() => {
        if (j === f) {
          S = null, h = !0, N();
          try {
            j.close(1e3, "connection lifetime exceeded");
          } catch {
          }
          typeof r == "function" && r({ durationMs: c });
        }
      }, c));
    }), j.addEventListener("message", ($) => {
      if (j !== f) return;
      let oe = null;
      try {
        oe = typeof $.data == "string" ? JSON.parse($.data) : null;
      } catch {
        return;
      }
      oe && (u && oe.type === "batchUpdate" && be(oe), typeof o == "function" && o(oe));
    }), j.addEventListener("close", ($) => {
      j === f && (f = null, z(), O(!1, $.reason || "disconnected"), ce());
    }), j.addEventListener("error", () => {
      if (j === f) {
        O(!1, "error");
        try {
          j.close();
        } catch {
        }
      }
    });
  }, ce = () => {
    if (!h && !m) {
      if (v >= Ui.MAX_RECONNECT_ATTEMPTS) {
        O(!1, "max reconnect attempts reached");
        return;
      }
      m = setTimeout(() => {
        m = null, v++;
        const j = g;
        g = Math.min(g * 2, Ui.RECONNECT_MAX_DELAY_MS), setTimeout(fe, j);
      }, 50);
    }
  };
  return fe(), {
    close() {
      if (h = !0, v = Ui.MAX_RECONNECT_ATTEMPTS, N(), z(), m && (clearTimeout(m), m = null), f) {
        try {
          f.close();
        } catch {
        }
        f = null;
      }
      O(!1, "disconnected");
    },
    reconnect() {
      if (h = !1, v = 0, N(), z(), m && (clearTimeout(m), m = null), f) {
        try {
          f.close();
        } catch {
        }
        f = null;
      }
      O(!1, "reconnecting"), fe();
    },
    get isConnected() {
      return C;
    }
  };
}, ik = (t) => {
  const e = (t || "").toUpperCase();
  return e === "TW" ? "cn" : e.toLowerCase();
}, qe = (t) => {
  if (t = parseFloat(t) || 0, t === 0) return "0 B";
  const e = 1024, s = ["B", "KB", "MB", "GB", "TB"], i = Math.floor(Math.log(t) / Math.log(e)), n = Math.max(0, Math.min(i, s.length - 1));
  return parseFloat((t / Math.pow(e, n)).toFixed(1)) + " " + s[n];
}, nk = (t, e = Date.now()) => {
  const s = Bi((t == null ? void 0 : t.report_timestamp) ?? (t == null ? void 0 : t.last_updated));
  return s && e - s < Ui.ONLINE_THRESHOLD_MS;
}, ak = async (t, e, s = 0) => {
  const i = await Ln.getByIndex(`/api/history/all?id=${t}&hours=${e}`, s, { autoRedirect: !1 });
  if (i.error) {
    const n = new Error(i.error);
    throw n.code = i.code, n.status = i.status, n.message = i.message || i.error, n;
  }
  return Array.isArray(i.data) ? i.data : [];
}, ok = { class: "footer status-bar" }, rk = ["aria-label", "tabindex"], lk = {
  key: 0,
  class: "version-update-dot",
  "aria-hidden": "true"
}, ck = {
  key: 1,
  class: "version-update-tooltip",
  role: "tooltip"
}, uk = {
  __name: "Footer",
  setup(t) {
    const e = Jl(), s = pe(() => String(cl.value || "").trim()), i = pe(() => String(mp.value || "").trim()), n = pe(() => i.value && s.value && i.value !== s.value), a = pe(() => n.value ? `${e.value.workersUpdateAvailable || "New version"} V${i.value}` : "");
    return (o, r) => (ve(), ke("footer", ok, [
      y("span", {
        class: "footer-version",
        "aria-label": a.value || void 0,
        tabindex: n.value ? 0 : void 0
      }, [
        y(
          "span",
          null,
          "V" + F(V(cl)),
          1
          /* TEXT */
        ),
        n.value ? (ve(), ke("span", lk)) : Lt("v-if", !0),
        n.value ? (ve(), ke(
          "span",
          ck,
          F(a.value),
          1
          /* TEXT */
        )) : Lt("v-if", !0)
      ], 8, rk),
      r[0] || (r[0] = y(
        "span",
        null,
        [
          Le("Powered by "),
          y("a", {
            href: "https://github.com/huilang-me/CF-Server-Monitor",
            target: "_blank"
          }, "CF-Server-Monitor")
        ],
        -1
        /* CACHED */
      ))
    ]));
  }
}, dk = "os-icons/", fk = [
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
], Un = {
  name: "Unknown",
  image: "os-unknown.svg",
  keywords: ["unknown"]
}, hk = (t) => String(t || "").toLowerCase().trim(), bp = (t) => {
  const e = hk(t);
  if (!e) return Un;
  for (const s of fk)
    if (s.keywords.some((i) => e.includes(i)))
      return s;
  return Un;
}, pk = (t) => {
  const e = bp(t).image;
  return e ? `${dk}${e}` : "";
}, mk = (t) => {
  const e = bp(t);
  if (e !== Un) return e.name;
  const s = String(t || "").trim();
  return s && s.split(/[\s/]/)[0] || Un.name;
}, gk = ["src", "alt", "aria-label"], td = {
  __name: "OsIcon",
  props: {
    os: { type: String, default: "" }
  },
  setup(t) {
    const e = t, s = /* @__PURE__ */ ie(!1), i = pe(() => pk(e.os)), n = pe(() => mk(e.os)), a = pe(() => i.value ? cp(i.value) : "");
    return zi(() => e.os, () => {
      s.value = !1;
    }), (o, r) => a.value && !s.value ? (ve(), ke("img", {
      key: 0,
      class: "os-icon-img",
      src: a.value,
      alt: n.value,
      "aria-label": n.value,
      loading: "lazy",
      onError: r[0] || (r[0] = (l) => s.value = !0)
    }, null, 40, gk)) : Lt("v-if", !0);
  }
}, bk = { class: "modal-dialog live-timeout-dialog" }, yk = { class: "warning-box live-timeout-message" }, vk = { class: "modal-footer flex-justify-between" }, sd = "live-connection-timeout-title", id = "live-connection-timeout-message", _k = {
  __name: "LiveConnectionTimeoutModal",
  props: {
    show: { type: Boolean, default: !1 },
    trans: { type: Object, required: !0 }
  },
  emits: ["close", "continue"],
  setup(t) {
    return (e, s) => t.show ? (ve(), ke("div", {
      key: 0,
      class: "modal-overlay active",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": sd,
      "aria-describedby": id
    }, [
      y("div", bk, [
        y("div", { class: "modal-header" }, [
          y("div", {
            id: sd,
            class: "modal-title"
          }, "$ websocket --timeout")
        ]),
        y("div", yk, [
          s[2] || (s[2] = y(
            "span",
            {
              class: "live-timeout-icon",
              "aria-hidden": "true"
            },
            "[!]",
            -1
            /* CACHED */
          )),
          y("div", null, [
            y(
              "strong",
              null,
              F(t.trans.liveConnectionTimeoutTitle),
              1
              /* TEXT */
            ),
            y(
              "p",
              { id },
              F(t.trans.liveConnectionTimeoutMessage),
              1
              /* TEXT */
            )
          ])
        ]),
        y("div", vk, [
          y(
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
          y(
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
    ])) : Lt("v-if", !0);
  }
};
function dn(t) {
  return t === !1 || t === "false";
}
const kk = Object.freeze([
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
new Set(kk.map((t) => t.symbol));
const Sk = (t) => {
  const e = parseFloat(t.net_rx_monthly) || 0, s = parseFloat(t.net_tx_monthly) || 0, i = t.traffic_calc_type || "total";
  return i === "dl" ? e : i === "ul" ? s : i === "max" ? Math.max(e, s) : e + s;
};
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function pa(t) {
  return t + 0.5 | 0;
}
const Vs = (t, e, s) => Math.max(Math.min(t, s), e);
function Tn(t) {
  return Vs(pa(t * 2.55), 0, 255);
}
function $s(t) {
  return Vs(pa(t * 255), 0, 255);
}
function xs(t) {
  return Vs(pa(t / 2.55) / 100, 0, 1);
}
function nd(t) {
  return Vs(pa(t * 100), 0, 100);
}
const qt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, ul = [..."0123456789ABCDEF"], Tk = (t) => ul[t & 15], xk = (t) => ul[(t & 240) >> 4] + ul[t & 15], Ma = (t) => (t & 240) >> 4 === (t & 15), Ak = (t) => Ma(t.r) && Ma(t.g) && Ma(t.b) && Ma(t.a);
function Ck(t) {
  var e = t.length, s;
  return t[0] === "#" && (e === 4 || e === 5 ? s = {
    r: 255 & qt[t[1]] * 17,
    g: 255 & qt[t[2]] * 17,
    b: 255 & qt[t[3]] * 17,
    a: e === 5 ? qt[t[4]] * 17 : 255
  } : (e === 7 || e === 9) && (s = {
    r: qt[t[1]] << 4 | qt[t[2]],
    g: qt[t[3]] << 4 | qt[t[4]],
    b: qt[t[5]] << 4 | qt[t[6]],
    a: e === 9 ? qt[t[7]] << 4 | qt[t[8]] : 255
  })), s;
}
const Pk = (t, e) => t < 255 ? e(t) : "";
function wk(t) {
  var e = Ak(t) ? Tk : xk;
  return t ? "#" + e(t.r) + e(t.g) + e(t.b) + Pk(t.a, e) : void 0;
}
const Rk = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function yp(t, e, s) {
  const i = e * Math.min(s, 1 - s), n = (a, o = (a + t / 30) % 12) => s - i * Math.max(Math.min(o - 3, 9 - o, 1), -1);
  return [n(0), n(8), n(4)];
}
function Mk(t, e, s) {
  const i = (n, a = (n + t / 60) % 6) => s - s * e * Math.max(Math.min(a, 4 - a, 1), 0);
  return [i(5), i(3), i(1)];
}
function Dk(t, e, s) {
  const i = yp(t, 1, 0.5);
  let n;
  for (e + s > 1 && (n = 1 / (e + s), e *= n, s *= n), n = 0; n < 3; n++)
    i[n] *= 1 - e - s, i[n] += e;
  return i;
}
function Ik(t, e, s, i, n) {
  return t === n ? (e - s) / i + (e < s ? 6 : 0) : e === n ? (s - t) / i + 2 : (t - e) / i + 4;
}
function Yl(t) {
  const s = t.r / 255, i = t.g / 255, n = t.b / 255, a = Math.max(s, i, n), o = Math.min(s, i, n), r = (a + o) / 2;
  let l, c, u;
  return a !== o && (u = a - o, c = r > 0.5 ? u / (2 - a - o) : u / (a + o), l = Ik(s, i, n, u, a), l = l * 60 + 0.5), [l | 0, c || 0, r];
}
function Xl(t, e, s, i) {
  return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, s, i)).map($s);
}
function Ql(t, e, s) {
  return Xl(yp, t, e, s);
}
function Ek(t, e, s) {
  return Xl(Dk, t, e, s);
}
function Ok(t, e, s) {
  return Xl(Mk, t, e, s);
}
function vp(t) {
  return (t % 360 + 360) % 360;
}
function Nk(t) {
  const e = Rk.exec(t);
  let s = 255, i;
  if (!e)
    return;
  e[5] !== i && (s = e[6] ? Tn(+e[5]) : $s(+e[5]));
  const n = vp(+e[2]), a = +e[3] / 100, o = +e[4] / 100;
  return e[1] === "hwb" ? i = Ek(n, a, o) : e[1] === "hsv" ? i = Ok(n, a, o) : i = Ql(n, a, o), {
    r: i[0],
    g: i[1],
    b: i[2],
    a: s
  };
}
function Lk(t, e) {
  var s = Yl(t);
  s[0] = vp(s[0] + e), s = Ql(s), t.r = s[0], t.g = s[1], t.b = s[2];
}
function Uk(t) {
  if (!t)
    return;
  const e = Yl(t), s = e[0], i = nd(e[1]), n = nd(e[2]);
  return t.a < 255 ? `hsla(${s}, ${i}%, ${n}%, ${xs(t.a)})` : `hsl(${s}, ${i}%, ${n}%)`;
}
const ad = {
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
}, od = {
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
function Fk() {
  const t = {}, e = Object.keys(od), s = Object.keys(ad);
  let i, n, a, o, r;
  for (i = 0; i < e.length; i++) {
    for (o = r = e[i], n = 0; n < s.length; n++)
      a = s[n], r = r.replace(a, ad[a]);
    a = parseInt(od[o], 16), t[r] = [a >> 16 & 255, a >> 8 & 255, a & 255];
  }
  return t;
}
let Da;
function Wk(t) {
  Da || (Da = Fk(), Da.transparent = [0, 0, 0, 0]);
  const e = Da[t.toLowerCase()];
  return e && {
    r: e[0],
    g: e[1],
    b: e[2],
    a: e.length === 4 ? e[3] : 255
  };
}
const Bk = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Hk(t) {
  const e = Bk.exec(t);
  let s = 255, i, n, a;
  if (e) {
    if (e[7] !== i) {
      const o = +e[7];
      s = e[8] ? Tn(o) : Vs(o * 255, 0, 255);
    }
    return i = +e[1], n = +e[3], a = +e[5], i = 255 & (e[2] ? Tn(i) : Vs(i, 0, 255)), n = 255 & (e[4] ? Tn(n) : Vs(n, 0, 255)), a = 255 & (e[6] ? Tn(a) : Vs(a, 0, 255)), {
      r: i,
      g: n,
      b: a,
      a: s
    };
  }
}
function jk(t) {
  return t && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${xs(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`);
}
const Cr = (t) => t <= 31308e-7 ? t * 12.92 : Math.pow(t, 1 / 2.4) * 1.055 - 0.055, Ii = (t) => t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
function Vk(t, e, s) {
  const i = Ii(xs(t.r)), n = Ii(xs(t.g)), a = Ii(xs(t.b));
  return {
    r: $s(Cr(i + s * (Ii(xs(e.r)) - i))),
    g: $s(Cr(n + s * (Ii(xs(e.g)) - n))),
    b: $s(Cr(a + s * (Ii(xs(e.b)) - a))),
    a: t.a + s * (e.a - t.a)
  };
}
function Ia(t, e, s) {
  if (t) {
    let i = Yl(t);
    i[e] = Math.max(0, Math.min(i[e] + i[e] * s, e === 0 ? 360 : 1)), i = Ql(i), t.r = i[0], t.g = i[1], t.b = i[2];
  }
}
function _p(t, e) {
  return t && Object.assign(e || {}, t);
}
function rd(t) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(t) ? t.length >= 3 && (e = { r: t[0], g: t[1], b: t[2], a: 255 }, t.length > 3 && (e.a = $s(t[3]))) : (e = _p(t, { r: 0, g: 0, b: 0, a: 1 }), e.a = $s(e.a)), e;
}
function zk(t) {
  return t.charAt(0) === "r" ? Hk(t) : Nk(t);
}
class ea {
  constructor(e) {
    if (e instanceof ea)
      return e;
    const s = typeof e;
    let i;
    s === "object" ? i = rd(e) : s === "string" && (i = Ck(e) || Wk(e) || zk(e)), this._rgb = i, this._valid = !!i;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var e = _p(this._rgb);
    return e && (e.a = xs(e.a)), e;
  }
  set rgb(e) {
    this._rgb = rd(e);
  }
  rgbString() {
    return this._valid ? jk(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? wk(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Uk(this._rgb) : void 0;
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
    return e && (this._rgb = Vk(this._rgb, e._rgb, s)), this;
  }
  clone() {
    return new ea(this.rgb);
  }
  alpha(e) {
    return this._rgb.a = $s(e), this;
  }
  clearer(e) {
    const s = this._rgb;
    return s.a *= 1 - e, this;
  }
  greyscale() {
    const e = this._rgb, s = pa(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
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
    return Ia(this._rgb, 2, e), this;
  }
  darken(e) {
    return Ia(this._rgb, 2, -e), this;
  }
  saturate(e) {
    return Ia(this._rgb, 1, e), this;
  }
  desaturate(e) {
    return Ia(this._rgb, 1, -e), this;
  }
  rotate(e) {
    return Lk(this._rgb, e), this;
  }
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function ys() {
}
const qk = /* @__PURE__ */ (() => {
  let t = 0;
  return () => t++;
})();
function Se(t) {
  return t == null;
}
function Ze(t) {
  if (Array.isArray && Array.isArray(t))
    return !0;
  const e = Object.prototype.toString.call(t);
  return e.slice(0, 7) === "[object" && e.slice(-6) === "Array]";
}
function Ae(t) {
  return t !== null && Object.prototype.toString.call(t) === "[object Object]";
}
function rt(t) {
  return (typeof t == "number" || t instanceof Number) && isFinite(+t);
}
function Bt(t, e) {
  return rt(t) ? t : e;
}
function me(t, e) {
  return typeof t > "u" ? e : t;
}
const Gk = (t, e) => typeof t == "string" && t.endsWith("%") ? parseFloat(t) / 100 : +t / e, kp = (t, e) => typeof t == "string" && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;
function Ke(t, e, s) {
  if (t && typeof t.call == "function")
    return t.apply(s, e);
}
function Ue(t, e, s, i) {
  let n, a, o;
  if (Ze(t))
    for (a = t.length, n = 0; n < a; n++)
      e.call(s, t[n], n);
  else if (Ae(t))
    for (o = Object.keys(t), a = o.length, n = 0; n < a; n++)
      e.call(s, t[o[n]], o[n]);
}
function _o(t, e) {
  let s, i, n, a;
  if (!t || !e || t.length !== e.length)
    return !1;
  for (s = 0, i = t.length; s < i; ++s)
    if (n = t[s], a = e[s], n.datasetIndex !== a.datasetIndex || n.index !== a.index)
      return !1;
  return !0;
}
function ko(t) {
  if (Ze(t))
    return t.map(ko);
  if (Ae(t)) {
    const e = /* @__PURE__ */ Object.create(null), s = Object.keys(t), i = s.length;
    let n = 0;
    for (; n < i; ++n)
      e[s[n]] = ko(t[s[n]]);
    return e;
  }
  return t;
}
function Sp(t) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(t) === -1;
}
function Kk(t, e, s, i) {
  if (!Sp(t))
    return;
  const n = e[t], a = s[t];
  Ae(n) && Ae(a) ? ta(n, a, i) : e[t] = ko(a);
}
function ta(t, e, s) {
  const i = Ze(e) ? e : [
    e
  ], n = i.length;
  if (!Ae(t))
    return t;
  s = s || {};
  const a = s.merger || Kk;
  let o;
  for (let r = 0; r < n; ++r) {
    if (o = i[r], !Ae(o))
      continue;
    const l = Object.keys(o);
    for (let c = 0, u = l.length; c < u; ++c)
      a(l[c], t, o, s);
  }
  return t;
}
function Fn(t, e) {
  return ta(t, e, {
    merger: $k
  });
}
function $k(t, e, s) {
  if (!Sp(t))
    return;
  const i = e[t], n = s[t];
  Ae(i) && Ae(n) ? Fn(i, n) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = ko(n));
}
const ld = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (t) => t,
  // default resolvers
  x: (t) => t.x,
  y: (t) => t.y
};
function Jk(t) {
  const e = t.split("."), s = [];
  let i = "";
  for (const n of e)
    i += n, i.endsWith("\\") ? i = i.slice(0, -1) + "." : (s.push(i), i = "");
  return s;
}
function Yk(t) {
  const e = Jk(t);
  return (s) => {
    for (const i of e) {
      if (i === "")
        break;
      s = s && s[i];
    }
    return s;
  };
}
function Xs(t, e) {
  return (ld[e] || (ld[e] = Yk(e)))(t);
}
function Zl(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
const sa = (t) => typeof t < "u", Qs = (t) => typeof t == "function", cd = (t, e) => {
  if (t.size !== e.size)
    return !1;
  for (const s of t)
    if (!e.has(s))
      return !1;
  return !0;
};
function Xk(t) {
  return t.type === "mouseup" || t.type === "click" || t.type === "contextmenu";
}
const Me = Math.PI, Ye = 2 * Me, Qk = Ye + Me, So = Number.POSITIVE_INFINITY, Zk = Me / 180, lt = Me / 2, oi = Me / 4, ud = Me * 2 / 3, zs = Math.log10, hs = Math.sign;
function Wn(t, e, s) {
  return Math.abs(t - e) < s;
}
function dd(t) {
  const e = Math.round(t);
  t = Wn(t, e, t / 1e3) ? e : t;
  const s = Math.pow(10, Math.floor(zs(t))), i = t / s;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * s;
}
function eS(t) {
  const e = [], s = Math.sqrt(t);
  let i;
  for (i = 1; i < s; i++)
    t % i === 0 && (e.push(i), e.push(t / i));
  return s === (s | 0) && e.push(s), e.sort((n, a) => n - a).pop(), e;
}
function tS(t) {
  return typeof t == "symbol" || typeof t == "object" && t !== null && !(Symbol.toPrimitive in t || "toString" in t || "valueOf" in t);
}
function Qi(t) {
  return !tS(t) && !isNaN(parseFloat(t)) && isFinite(t);
}
function sS(t, e) {
  const s = Math.round(t);
  return s - e <= t && s + e >= t;
}
function Tp(t, e, s) {
  let i, n, a;
  for (i = 0, n = t.length; i < n; i++)
    a = t[i][s], isNaN(a) || (e.min = Math.min(e.min, a), e.max = Math.max(e.max, a));
}
function Yt(t) {
  return t * (Me / 180);
}
function ec(t) {
  return t * (180 / Me);
}
function fd(t) {
  if (!rt(t))
    return;
  let e = 1, s = 0;
  for (; Math.round(t * e) / e !== t; )
    e *= 10, s++;
  return s;
}
function xp(t, e) {
  const s = e.x - t.x, i = e.y - t.y, n = Math.sqrt(s * s + i * i);
  let a = Math.atan2(i, s);
  return a < -0.5 * Me && (a += Ye), {
    angle: a,
    distance: n
  };
}
function dl(t, e) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function iS(t, e) {
  return (t - e + Qk) % Ye - Me;
}
function bt(t) {
  return (t % Ye + Ye) % Ye;
}
function ia(t, e, s, i) {
  const n = bt(t), a = bt(e), o = bt(s), r = bt(a - n), l = bt(o - n), c = bt(n - a), u = bt(n - o);
  return n === a || n === o || i && a === o || r > l && c < u;
}
function pt(t, e, s) {
  return Math.max(e, Math.min(s, t));
}
function nS(t) {
  return pt(t, -32768, 32767);
}
function Ps(t, e, s, i = 1e-6) {
  return t >= Math.min(e, s) - i && t <= Math.max(e, s) + i;
}
function tc(t, e, s) {
  s = s || ((o) => t[o] < e);
  let i = t.length - 1, n = 0, a;
  for (; i - n > 1; )
    a = n + i >> 1, s(a) ? n = a : i = a;
  return {
    lo: n,
    hi: i
  };
}
const ws = (t, e, s, i) => tc(t, s, i ? (n) => {
  const a = t[n][e];
  return a < s || a === s && t[n + 1][e] === s;
} : (n) => t[n][e] < s), aS = (t, e, s) => tc(t, s, (i) => t[i][e] >= s);
function oS(t, e, s) {
  let i = 0, n = t.length;
  for (; i < n && t[i] < e; )
    i++;
  for (; n > i && t[n - 1] > s; )
    n--;
  return i > 0 || n < t.length ? t.slice(i, n) : t;
}
const Ap = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function rS(t, e) {
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
  }), Ap.forEach((s) => {
    const i = "_onData" + Zl(s), n = t[s];
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
function hd(t, e) {
  const s = t._chartjs;
  if (!s)
    return;
  const i = s.listeners, n = i.indexOf(e);
  n !== -1 && i.splice(n, 1), !(i.length > 0) && (Ap.forEach((a) => {
    delete t[a];
  }), delete t._chartjs);
}
function Cp(t) {
  const e = new Set(t);
  return e.size === t.length ? t : Array.from(e);
}
const Pp = (function() {
  return typeof window > "u" ? function(t) {
    return t();
  } : window.requestAnimationFrame;
})();
function wp(t, e) {
  let s = [], i = !1;
  return function(...n) {
    s = n, i || (i = !0, Pp.call(window, () => {
      i = !1, t.apply(e, s);
    }));
  };
}
function lS(t, e) {
  let s;
  return function(...i) {
    return e ? (clearTimeout(s), s = setTimeout(t, e, i)) : t.apply(this, i), e;
  };
}
const sc = (t) => t === "start" ? "left" : t === "end" ? "right" : "center", gt = (t, e, s) => t === "start" ? e : t === "end" ? s : (e + s) / 2, cS = (t, e, s, i) => t === (i ? "left" : "right") ? s : t === "center" ? (e + s) / 2 : e;
function Rp(t, e, s) {
  const i = e.length;
  let n = 0, a = i;
  if (t._sorted) {
    const { iScale: o, vScale: r, _parsed: l } = t, c = t.dataset && t.dataset.options ? t.dataset.options.spanGaps : null, u = o.axis, { min: d, max: f, minDefined: h, maxDefined: m } = o.getUserBounds();
    if (h) {
      if (n = Math.min(
        // @ts-expect-error Need to type _parsed
        ws(l, u, d).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        s ? i : ws(e, u, o.getPixelForValue(d)).lo
      ), c) {
        const g = l.slice(0, n + 1).reverse().findIndex((v) => !Se(v[r.axis]));
        n -= Math.max(0, g);
      }
      n = pt(n, 0, i - 1);
    }
    if (m) {
      let g = Math.max(
        // @ts-expect-error Need to type _parsed
        ws(l, o.axis, f, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        s ? 0 : ws(e, u, o.getPixelForValue(f), !0).hi + 1
      );
      if (c) {
        const v = l.slice(g - 1).findIndex((S) => !Se(S[r.axis]));
        g += Math.max(0, v);
      }
      a = pt(g, n, i) - n;
    } else
      a = i - n;
  }
  return {
    start: n,
    count: a
  };
}
function Mp(t) {
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
const Ea = (t) => t === 0 || t === 1, pd = (t, e, s) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * Ye / s)), md = (t, e, s) => Math.pow(2, -10 * t) * Math.sin((t - e) * Ye / s) + 1, Bn = {
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
  easeInSine: (t) => -Math.cos(t * lt) + 1,
  easeOutSine: (t) => Math.sin(t * lt),
  easeInOutSine: (t) => -0.5 * (Math.cos(Me * t) - 1),
  easeInExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: (t) => t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
  easeInOutExpo: (t) => Ea(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
  easeInCirc: (t) => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
  easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
  easeInOutCirc: (t) => (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
  easeInElastic: (t) => Ea(t) ? t : pd(t, 0.075, 0.3),
  easeOutElastic: (t) => Ea(t) ? t : md(t, 0.075, 0.3),
  easeInOutElastic(t) {
    return Ea(t) ? t : t < 0.5 ? 0.5 * pd(t * 2, 0.1125, 0.45) : 0.5 + 0.5 * md(t * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (t) => 1 - Bn.easeOutBounce(1 - t),
  easeOutBounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  },
  easeInOutBounce: (t) => t < 0.5 ? Bn.easeInBounce(t * 2) * 0.5 : Bn.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
};
function ic(t) {
  if (t && typeof t == "object") {
    const e = t.toString();
    return e === "[object CanvasPattern]" || e === "[object CanvasGradient]";
  }
  return !1;
}
function gd(t) {
  return ic(t) ? t : new ea(t);
}
function Pr(t) {
  return ic(t) ? t : new ea(t).saturate(0.5).darken(0.1).hexString();
}
const uS = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], dS = [
  "color",
  "borderColor",
  "backgroundColor"
];
function fS(t) {
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
      properties: dS
    },
    numbers: {
      type: "number",
      properties: uS
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
function hS(t) {
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
const bd = /* @__PURE__ */ new Map();
function pS(t, e) {
  e = e || {};
  const s = t + JSON.stringify(e);
  let i = bd.get(s);
  return i || (i = new Intl.NumberFormat(t, e), bd.set(s, i)), i;
}
function ma(t, e, s) {
  return pS(e, s).format(t);
}
const Dp = {
  values(t) {
    return Ze(t) ? t : "" + t;
  },
  numeric(t, e, s) {
    if (t === 0)
      return "0";
    const i = this.chart.options.locale;
    let n, a = t;
    if (s.length > 1) {
      const c = Math.max(Math.abs(s[0].value), Math.abs(s[s.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), a = mS(t, s);
    }
    const o = zs(Math.abs(a)), r = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0), l = {
      notation: n,
      minimumFractionDigits: r,
      maximumFractionDigits: r
    };
    return Object.assign(l, this.options.ticks.format), ma(t, i, l);
  },
  logarithmic(t, e, s) {
    if (t === 0)
      return "0";
    const i = s[e].significand || t / Math.pow(10, Math.floor(zs(t)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(i) || e > 0.8 * s.length ? Dp.numeric.call(this, t, e, s) : "";
  }
};
function mS(t, e) {
  let s = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
  return Math.abs(s) >= 1 && t !== Math.floor(t) && (s = t - Math.floor(t)), s;
}
var Vo = {
  formatters: Dp
};
function gS(t) {
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
      callback: Vo.formatters.values,
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
const Ti = /* @__PURE__ */ Object.create(null), fl = /* @__PURE__ */ Object.create(null);
function Hn(t, e) {
  if (!e)
    return t;
  const s = e.split(".");
  for (let i = 0, n = s.length; i < n; ++i) {
    const a = s[i];
    t = t[a] || (t[a] = /* @__PURE__ */ Object.create(null));
  }
  return t;
}
function wr(t, e, s) {
  return typeof e == "string" ? ta(Hn(t, e), s) : ta(Hn(t, ""), e);
}
class bS {
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
    }, this.hover = {}, this.hoverBackgroundColor = (i, n) => Pr(n.backgroundColor), this.hoverBorderColor = (i, n) => Pr(n.borderColor), this.hoverColor = (i, n) => Pr(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(e), this.apply(s);
  }
  set(e, s) {
    return wr(this, e, s);
  }
  get(e) {
    return Hn(this, e);
  }
  describe(e, s) {
    return wr(fl, e, s);
  }
  override(e, s) {
    return wr(Ti, e, s);
  }
  route(e, s, i, n) {
    const a = Hn(this, e), o = Hn(this, i), r = "_" + s;
    Object.defineProperties(a, {
      [r]: {
        value: a[s],
        writable: !0
      },
      [s]: {
        enumerable: !0,
        get() {
          const l = this[r], c = o[n];
          return Ae(l) ? Object.assign({}, c, l) : me(l, c);
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
var et = /* @__PURE__ */ new bS({
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
  fS,
  hS,
  gS
]);
function yS(t) {
  return !t || Se(t.size) || Se(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
}
function To(t, e, s, i, n) {
  let a = e[n];
  return a || (a = e[n] = t.measureText(n).width, s.push(n)), a > i && (i = a), i;
}
function vS(t, e, s, i) {
  i = i || {};
  let n = i.data = i.data || {}, a = i.garbageCollect = i.garbageCollect || [];
  i.font !== e && (n = i.data = {}, a = i.garbageCollect = [], i.font = e), t.save(), t.font = e;
  let o = 0;
  const r = s.length;
  let l, c, u, d, f;
  for (l = 0; l < r; l++)
    if (d = s[l], d != null && !Ze(d))
      o = To(t, n, a, o, d);
    else if (Ze(d))
      for (c = 0, u = d.length; c < u; c++)
        f = d[c], f != null && !Ze(f) && (o = To(t, n, a, o, f));
  t.restore();
  const h = a.length / 2;
  if (h > s.length) {
    for (l = 0; l < h; l++)
      delete n[a[l]];
    a.splice(0, h);
  }
  return o;
}
function ri(t, e, s) {
  const i = t.currentDevicePixelRatio, n = s !== 0 ? Math.max(s / 2, 0.5) : 0;
  return Math.round((e - n) * i) / i + n;
}
function yd(t, e) {
  !e && !t || (e = e || t.getContext("2d"), e.save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore());
}
function hl(t, e, s, i) {
  Ip(t, e, s, i, null);
}
function Ip(t, e, s, i, n) {
  let a, o, r, l, c, u, d, f;
  const h = e.pointStyle, m = e.rotation, g = e.radius;
  let v = (m || 0) * Zk;
  if (h && typeof h == "object" && (a = h.toString(), a === "[object HTMLImageElement]" || a === "[object HTMLCanvasElement]")) {
    t.save(), t.translate(s, i), t.rotate(v), t.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height), t.restore();
    return;
  }
  if (!(isNaN(g) || g <= 0)) {
    switch (t.beginPath(), h) {
      // Default includes circle
      default:
        n ? t.ellipse(s, i, n / 2, g, 0, 0, Ye) : t.arc(s, i, g, 0, Ye), t.closePath();
        break;
      case "triangle":
        u = n ? n / 2 : g, t.moveTo(s + Math.sin(v) * u, i - Math.cos(v) * g), v += ud, t.lineTo(s + Math.sin(v) * u, i - Math.cos(v) * g), v += ud, t.lineTo(s + Math.sin(v) * u, i - Math.cos(v) * g), t.closePath();
        break;
      case "rectRounded":
        c = g * 0.516, l = g - c, o = Math.cos(v + oi) * l, d = Math.cos(v + oi) * (n ? n / 2 - c : l), r = Math.sin(v + oi) * l, f = Math.sin(v + oi) * (n ? n / 2 - c : l), t.arc(s - d, i - r, c, v - Me, v - lt), t.arc(s + f, i - o, c, v - lt, v), t.arc(s + d, i + r, c, v, v + lt), t.arc(s - f, i + o, c, v + lt, v + Me), t.closePath();
        break;
      case "rect":
        if (!m) {
          l = Math.SQRT1_2 * g, u = n ? n / 2 : l, t.rect(s - u, i - l, 2 * u, 2 * l);
          break;
        }
        v += oi;
      /* falls through */
      case "rectRot":
        d = Math.cos(v) * (n ? n / 2 : g), o = Math.cos(v) * g, r = Math.sin(v) * g, f = Math.sin(v) * (n ? n / 2 : g), t.moveTo(s - d, i - r), t.lineTo(s + f, i - o), t.lineTo(s + d, i + r), t.lineTo(s - f, i + o), t.closePath();
        break;
      case "crossRot":
        v += oi;
      /* falls through */
      case "cross":
        d = Math.cos(v) * (n ? n / 2 : g), o = Math.cos(v) * g, r = Math.sin(v) * g, f = Math.sin(v) * (n ? n / 2 : g), t.moveTo(s - d, i - r), t.lineTo(s + d, i + r), t.moveTo(s + f, i - o), t.lineTo(s - f, i + o);
        break;
      case "star":
        d = Math.cos(v) * (n ? n / 2 : g), o = Math.cos(v) * g, r = Math.sin(v) * g, f = Math.sin(v) * (n ? n / 2 : g), t.moveTo(s - d, i - r), t.lineTo(s + d, i + r), t.moveTo(s + f, i - o), t.lineTo(s - f, i + o), v += oi, d = Math.cos(v) * (n ? n / 2 : g), o = Math.cos(v) * g, r = Math.sin(v) * g, f = Math.sin(v) * (n ? n / 2 : g), t.moveTo(s - d, i - r), t.lineTo(s + d, i + r), t.moveTo(s + f, i - o), t.lineTo(s - f, i + o);
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
function Rs(t, e, s) {
  return s = s || 0.5, !e || t && t.x > e.left - s && t.x < e.right + s && t.y > e.top - s && t.y < e.bottom + s;
}
function zo(t, e) {
  t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
}
function qo(t) {
  t.restore();
}
function _S(t, e, s, i, n) {
  if (!e)
    return t.lineTo(s.x, s.y);
  if (n === "middle") {
    const a = (e.x + s.x) / 2;
    t.lineTo(a, e.y), t.lineTo(a, s.y);
  } else n === "after" != !!i ? t.lineTo(e.x, s.y) : t.lineTo(s.x, e.y);
  t.lineTo(s.x, s.y);
}
function kS(t, e, s, i) {
  if (!e)
    return t.lineTo(s.x, s.y);
  t.bezierCurveTo(i ? e.cp1x : e.cp2x, i ? e.cp1y : e.cp2y, i ? s.cp2x : s.cp1x, i ? s.cp2y : s.cp1y, s.x, s.y);
}
function SS(t, e) {
  e.translation && t.translate(e.translation[0], e.translation[1]), Se(e.rotation) || t.rotate(e.rotation), e.color && (t.fillStyle = e.color), e.textAlign && (t.textAlign = e.textAlign), e.textBaseline && (t.textBaseline = e.textBaseline);
}
function TS(t, e, s, i, n) {
  if (n.strikethrough || n.underline) {
    const a = t.measureText(i), o = e - a.actualBoundingBoxLeft, r = e + a.actualBoundingBoxRight, l = s - a.actualBoundingBoxAscent, c = s + a.actualBoundingBoxDescent, u = n.strikethrough ? (l + c) / 2 : c;
    t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = n.decorationWidth || 2, t.moveTo(o, u), t.lineTo(r, u), t.stroke();
  }
}
function xS(t, e) {
  const s = t.fillStyle;
  t.fillStyle = e.color, t.fillRect(e.left, e.top, e.width, e.height), t.fillStyle = s;
}
function xi(t, e, s, i, n, a = {}) {
  const o = Ze(e) ? e : [
    e
  ], r = a.strokeWidth > 0 && a.strokeColor !== "";
  let l, c;
  for (t.save(), t.font = n.string, SS(t, a), l = 0; l < o.length; ++l)
    c = o[l], a.backdrop && xS(t, a.backdrop), r && (a.strokeColor && (t.strokeStyle = a.strokeColor), Se(a.strokeWidth) || (t.lineWidth = a.strokeWidth), t.strokeText(c, s, i, a.maxWidth)), t.fillText(c, s, i, a.maxWidth), TS(t, s, i, c, a), i += Number(n.lineHeight);
  t.restore();
}
function na(t, e) {
  const { x: s, y: i, w: n, h: a, radius: o } = e;
  t.arc(s + o.topLeft, i + o.topLeft, o.topLeft, 1.5 * Me, Me, !0), t.lineTo(s, i + a - o.bottomLeft), t.arc(s + o.bottomLeft, i + a - o.bottomLeft, o.bottomLeft, Me, lt, !0), t.lineTo(s + n - o.bottomRight, i + a), t.arc(s + n - o.bottomRight, i + a - o.bottomRight, o.bottomRight, lt, 0, !0), t.lineTo(s + n, i + o.topRight), t.arc(s + n - o.topRight, i + o.topRight, o.topRight, 0, -lt, !0), t.lineTo(s + o.topLeft, i);
}
const AS = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, CS = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function PS(t, e) {
  const s = ("" + t).match(AS);
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
const wS = (t) => +t || 0;
function nc(t, e) {
  const s = {}, i = Ae(e), n = i ? Object.keys(e) : e, a = Ae(t) ? i ? (o) => me(t[o], t[e[o]]) : (o) => t[o] : () => t;
  for (const o of n)
    s[o] = wS(a(o));
  return s;
}
function Ep(t) {
  return nc(t, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function ki(t) {
  return nc(t, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function St(t) {
  const e = Ep(t);
  return e.width = e.left + e.right, e.height = e.top + e.bottom, e;
}
function dt(t, e) {
  t = t || {}, e = e || et.font;
  let s = me(t.size, e.size);
  typeof s == "string" && (s = parseInt(s, 10));
  let i = me(t.style, e.style);
  i && !("" + i).match(CS) && (console.warn('Invalid font style specified: "' + i + '"'), i = void 0);
  const n = {
    family: me(t.family, e.family),
    lineHeight: PS(me(t.lineHeight, e.lineHeight), s),
    size: s,
    style: i,
    weight: me(t.weight, e.weight),
    string: ""
  };
  return n.string = yS(n), n;
}
function xn(t, e, s, i) {
  let n, a, o;
  for (n = 0, a = t.length; n < a; ++n)
    if (o = t[n], o !== void 0 && o !== void 0)
      return o;
}
function RS(t, e, s) {
  const { min: i, max: n } = t, a = kp(e, (n - i) / 2), o = (r, l) => s && r === 0 ? 0 : r + l;
  return {
    min: o(i, -Math.abs(a)),
    max: o(n, a)
  };
}
function Zs(t, e) {
  return Object.assign(Object.create(t), e);
}
function ac(t, e = [
  ""
], s, i, n = () => t[0]) {
  const a = s || t;
  typeof i > "u" && (i = Up("_fallback", t));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: t,
    _rootScopes: a,
    _fallback: i,
    _getTarget: n,
    override: (r) => ac([
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
      return Np(r, l, () => US(l, e, t, r));
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
      return _d(r).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(r) {
      return _d(r);
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
function Zi(t, e, s, i) {
  const n = {
    _cacheable: !1,
    _proxy: t,
    _context: e,
    _subProxy: s,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Op(t, i),
    setContext: (a) => Zi(t, a, s, i),
    override: (a) => Zi(t.override(a), e, s, i)
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
      return Np(a, o, () => DS(a, o, r));
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
function Op(t, e = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: s = e.scriptable, _indexable: i = e.indexable, _allKeys: n = e.allKeys } = t;
  return {
    allKeys: n,
    scriptable: s,
    indexable: i,
    isScriptable: Qs(s) ? s : () => s,
    isIndexable: Qs(i) ? i : () => i
  };
}
const MS = (t, e) => t ? t + Zl(e) : e, oc = (t, e) => Ae(e) && t !== "adapters" && (Object.getPrototypeOf(e) === null || e.constructor === Object);
function Np(t, e, s) {
  if (Object.prototype.hasOwnProperty.call(t, e) || e === "constructor")
    return t[e];
  const i = s();
  return t[e] = i, i;
}
function DS(t, e, s) {
  const { _proxy: i, _context: n, _subProxy: a, _descriptors: o } = t;
  let r = i[e];
  return Qs(r) && o.isScriptable(e) && (r = IS(e, r, t, s)), Ze(r) && r.length && (r = ES(e, r, t, o.isIndexable)), oc(e, r) && (r = Zi(r, n, a && a[e], o)), r;
}
function IS(t, e, s, i) {
  const { _proxy: n, _context: a, _subProxy: o, _stack: r } = s;
  if (r.has(t))
    throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + t);
  r.add(t);
  let l = e(a, o || i);
  return r.delete(t), oc(t, l) && (l = rc(n._scopes, n, t, l)), l;
}
function ES(t, e, s, i) {
  const { _proxy: n, _context: a, _subProxy: o, _descriptors: r } = s;
  if (typeof a.index < "u" && i(t))
    return e[a.index % e.length];
  if (Ae(e[0])) {
    const l = e, c = n._scopes.filter((u) => u !== l);
    e = [];
    for (const u of l) {
      const d = rc(c, n, t, u);
      e.push(Zi(d, a, o && o[t], r));
    }
  }
  return e;
}
function Lp(t, e, s) {
  return Qs(t) ? t(e, s) : t;
}
const OS = (t, e) => t === !0 ? e : typeof t == "string" ? Xs(e, t) : void 0;
function NS(t, e, s, i, n) {
  for (const a of e) {
    const o = OS(s, a);
    if (o) {
      t.add(o);
      const r = Lp(o._fallback, s, n);
      if (typeof r < "u" && r !== s && r !== i)
        return r;
    } else if (o === !1 && typeof i < "u" && s !== i)
      return null;
  }
  return !1;
}
function rc(t, e, s, i) {
  const n = e._rootScopes, a = Lp(e._fallback, s, i), o = [
    ...t,
    ...n
  ], r = /* @__PURE__ */ new Set();
  r.add(i);
  let l = vd(r, o, s, a || s, i);
  return l === null || typeof a < "u" && a !== s && (l = vd(r, o, a, l, i), l === null) ? !1 : ac(Array.from(r), [
    ""
  ], n, a, () => LS(e, s, i));
}
function vd(t, e, s, i, n) {
  for (; s; )
    s = NS(t, e, s, i, n);
  return s;
}
function LS(t, e, s) {
  const i = t._getTarget();
  e in i || (i[e] = {});
  const n = i[e];
  return Ze(n) && Ae(s) ? s : n || {};
}
function US(t, e, s, i) {
  let n;
  for (const a of e)
    if (n = Up(MS(a, t), s), typeof n < "u")
      return oc(t, n) ? rc(s, i, t, n) : n;
}
function Up(t, e) {
  for (const s of e) {
    if (!s)
      continue;
    const i = s[t];
    if (typeof i < "u")
      return i;
  }
}
function _d(t) {
  let e = t._keys;
  return e || (e = t._keys = FS(t._scopes)), e;
}
function FS(t) {
  const e = /* @__PURE__ */ new Set();
  for (const s of t)
    for (const i of Object.keys(s).filter((n) => !n.startsWith("_")))
      e.add(i);
  return Array.from(e);
}
function Fp(t, e, s, i) {
  const { iScale: n } = t, { key: a = "r" } = this._parsing, o = new Array(i);
  let r, l, c, u;
  for (r = 0, l = i; r < l; ++r)
    c = r + s, u = e[c], o[r] = {
      r: n.parse(Xs(u, a), c)
    };
  return o;
}
const WS = Number.EPSILON || 1e-14, en = (t, e) => e < t.length && !t[e].skip && t[e], Wp = (t) => t === "x" ? "y" : "x";
function BS(t, e, s, i) {
  const n = t.skip ? e : t, a = e, o = s.skip ? e : s, r = dl(a, n), l = dl(o, a);
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
function HS(t, e, s) {
  const i = t.length;
  let n, a, o, r, l, c = en(t, 0);
  for (let u = 0; u < i - 1; ++u)
    if (l = c, c = en(t, u + 1), !(!l || !c)) {
      if (Wn(e[u], 0, WS)) {
        s[u] = s[u + 1] = 0;
        continue;
      }
      n = s[u] / e[u], a = s[u + 1] / e[u], r = Math.pow(n, 2) + Math.pow(a, 2), !(r <= 9) && (o = 3 / Math.sqrt(r), s[u] = n * o * e[u], s[u + 1] = a * o * e[u]);
    }
}
function jS(t, e, s = "x") {
  const i = Wp(s), n = t.length;
  let a, o, r, l = en(t, 0);
  for (let c = 0; c < n; ++c) {
    if (o = r, r = l, l = en(t, c + 1), !r)
      continue;
    const u = r[s], d = r[i];
    o && (a = (u - o[s]) / 3, r[`cp1${s}`] = u - a, r[`cp1${i}`] = d - a * e[c]), l && (a = (l[s] - u) / 3, r[`cp2${s}`] = u + a, r[`cp2${i}`] = d + a * e[c]);
  }
}
function VS(t, e = "x") {
  const s = Wp(e), i = t.length, n = Array(i).fill(0), a = Array(i);
  let o, r, l, c = en(t, 0);
  for (o = 0; o < i; ++o)
    if (r = l, l = c, c = en(t, o + 1), !!l) {
      if (c) {
        const u = c[e] - l[e];
        n[o] = u !== 0 ? (c[s] - l[s]) / u : 0;
      }
      a[o] = r ? c ? hs(n[o - 1]) !== hs(n[o]) ? 0 : (n[o - 1] + n[o]) / 2 : n[o - 1] : n[o];
    }
  HS(t, n, a), jS(t, a, e);
}
function Oa(t, e, s) {
  return Math.max(Math.min(t, s), e);
}
function zS(t, e) {
  let s, i, n, a, o, r = Rs(t[0], e);
  for (s = 0, i = t.length; s < i; ++s)
    o = a, a = r, r = s < i - 1 && Rs(t[s + 1], e), a && (n = t[s], o && (n.cp1x = Oa(n.cp1x, e.left, e.right), n.cp1y = Oa(n.cp1y, e.top, e.bottom)), r && (n.cp2x = Oa(n.cp2x, e.left, e.right), n.cp2y = Oa(n.cp2y, e.top, e.bottom)));
}
function qS(t, e, s, i, n) {
  let a, o, r, l;
  if (e.spanGaps && (t = t.filter((c) => !c.skip)), e.cubicInterpolationMode === "monotone")
    VS(t, n);
  else {
    let c = i ? t[t.length - 1] : t[0];
    for (a = 0, o = t.length; a < o; ++a)
      r = t[a], l = BS(c, r, t[Math.min(a + 1, o - (i ? 0 : 1)) % o], e.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, c = r;
  }
  e.capBezierPoints && zS(t, s);
}
function lc() {
  return typeof window < "u" && typeof document < "u";
}
function cc(t) {
  let e = t.parentNode;
  return e && e.toString() === "[object ShadowRoot]" && (e = e.host), e;
}
function xo(t, e, s) {
  let i;
  return typeof t == "string" ? (i = parseInt(t, 10), t.indexOf("%") !== -1 && (i = i / 100 * e.parentNode[s])) : i = t, i;
}
const Go = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
function GS(t, e) {
  return Go(t).getPropertyValue(e);
}
const KS = [
  "top",
  "right",
  "bottom",
  "left"
];
function Si(t, e, s) {
  const i = {};
  s = s ? "-" + s : "";
  for (let n = 0; n < 4; n++) {
    const a = KS[n];
    i[a] = parseFloat(t[e + "-" + a + s]) || 0;
  }
  return i.width = i.left + i.right, i.height = i.top + i.bottom, i;
}
const $S = (t, e, s) => (t > 0 || e > 0) && (!s || !s.shadowRoot);
function JS(t, e) {
  const s = t.touches, i = s && s.length ? s[0] : t, { offsetX: n, offsetY: a } = i;
  let o = !1, r, l;
  if ($S(n, a, t.target))
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
function di(t, e) {
  if ("native" in t)
    return t;
  const { canvas: s, currentDevicePixelRatio: i } = e, n = Go(s), a = n.boxSizing === "border-box", o = Si(n, "padding"), r = Si(n, "border", "width"), { x: l, y: c, box: u } = JS(t, s), d = o.left + (u && r.left), f = o.top + (u && r.top);
  let { width: h, height: m } = e;
  return a && (h -= o.width + r.width, m -= o.height + r.height), {
    x: Math.round((l - d) / h * s.width / i),
    y: Math.round((c - f) / m * s.height / i)
  };
}
function YS(t, e, s) {
  let i, n;
  if (e === void 0 || s === void 0) {
    const a = t && cc(t);
    if (!a)
      e = t.clientWidth, s = t.clientHeight;
    else {
      const o = a.getBoundingClientRect(), r = Go(a), l = Si(r, "border", "width"), c = Si(r, "padding");
      e = o.width - c.width - l.width, s = o.height - c.height - l.height, i = xo(r.maxWidth, a, "clientWidth"), n = xo(r.maxHeight, a, "clientHeight");
    }
  }
  return {
    width: e,
    height: s,
    maxWidth: i || So,
    maxHeight: n || So
  };
}
const qs = (t) => Math.round(t * 10) / 10;
function XS(t, e, s, i) {
  const n = Go(t), a = Si(n, "margin"), o = xo(n.maxWidth, t, "clientWidth") || So, r = xo(n.maxHeight, t, "clientHeight") || So, l = YS(t, e, s);
  let { width: c, height: u } = l;
  if (n.boxSizing === "content-box") {
    const f = Si(n, "border", "width"), h = Si(n, "padding");
    c -= h.width + f.width, u -= h.height + f.height;
  }
  return c = Math.max(0, c - a.width), u = Math.max(0, i ? c / i : u - a.height), c = qs(Math.min(c, o, l.maxWidth)), u = qs(Math.min(u, r, l.maxHeight)), c && !u && (u = qs(c / 2)), (e !== void 0 || s !== void 0) && i && l.height && u > l.height && (u = l.height, c = qs(Math.floor(u * i))), {
    width: c,
    height: u
  };
}
function kd(t, e, s) {
  const i = e || 1, n = qs(t.height * i), a = qs(t.width * i);
  t.height = qs(t.height), t.width = qs(t.width);
  const o = t.canvas;
  return o.style && (s || !o.style.height && !o.style.width) && (o.style.height = `${t.height}px`, o.style.width = `${t.width}px`), t.currentDevicePixelRatio !== i || o.height !== n || o.width !== a ? (t.currentDevicePixelRatio = i, o.height = n, o.width = a, t.ctx.setTransform(i, 0, 0, i, 0, 0), !0) : !1;
}
const QS = (function() {
  let t = !1;
  try {
    const e = {
      get passive() {
        return t = !0, !1;
      }
    };
    lc() && (window.addEventListener("test", null, e), window.removeEventListener("test", null, e));
  } catch {
  }
  return t;
})();
function Sd(t, e) {
  const s = GS(t, e), i = s && s.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function fi(t, e, s, i) {
  return {
    x: t.x + s * (e.x - t.x),
    y: t.y + s * (e.y - t.y)
  };
}
function ZS(t, e, s, i) {
  return {
    x: t.x + s * (e.x - t.x),
    y: i === "middle" ? s < 0.5 ? t.y : e.y : i === "after" ? s < 1 ? t.y : e.y : s > 0 ? e.y : t.y
  };
}
function e0(t, e, s, i) {
  const n = {
    x: t.cp2x,
    y: t.cp2y
  }, a = {
    x: e.cp1x,
    y: e.cp1y
  }, o = fi(t, n, s), r = fi(n, a, s), l = fi(a, e, s), c = fi(o, r, s), u = fi(r, l, s);
  return fi(c, u, s);
}
const t0 = function(t, e) {
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
}, s0 = function() {
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
function Ki(t, e, s) {
  return t ? t0(e, s) : s0();
}
function Bp(t, e) {
  let s, i;
  (e === "ltr" || e === "rtl") && (s = t.canvas.style, i = [
    s.getPropertyValue("direction"),
    s.getPropertyPriority("direction")
  ], s.setProperty("direction", e, "important"), t.prevTextDirection = i);
}
function Hp(t, e) {
  e !== void 0 && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]));
}
function jp(t) {
  return t === "angle" ? {
    between: ia,
    compare: iS,
    normalize: bt
  } : {
    between: Ps,
    compare: (e, s) => e - s,
    normalize: (e) => e
  };
}
function Td({ start: t, end: e, count: s, loop: i, style: n }) {
  return {
    start: t % s,
    end: e % s,
    loop: i && (e - t + 1) % s === 0,
    style: n
  };
}
function i0(t, e, s) {
  const { property: i, start: n, end: a } = s, { between: o, normalize: r } = jp(i), l = e.length;
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
function Vp(t, e, s) {
  if (!s)
    return [
      t
    ];
  const { property: i, start: n, end: a } = s, o = e.length, { compare: r, between: l, normalize: c } = jp(i), { start: u, end: d, loop: f, style: h } = i0(t, e, s), m = [];
  let g = !1, v = null, S, x, C;
  const k = () => l(n, C, S) && r(n, C) !== 0, P = () => r(a, S) === 0 || l(a, C, S), D = () => g || k(), R = () => !g || P();
  for (let O = u, N = u; O <= d; ++O)
    x = e[O % o], !x.skip && (S = c(x[i]), S !== C && (g = l(S, n, a), v === null && D() && (v = r(S, n) === 0 ? O : N), v !== null && R() && (m.push(Td({
      start: v,
      end: O,
      loop: f,
      count: o,
      style: h
    })), v = null), N = O, C = S));
  return v !== null && m.push(Td({
    start: v,
    end: d,
    loop: f,
    count: o,
    style: h
  })), m;
}
function zp(t, e) {
  const s = [], i = t.segments;
  for (let n = 0; n < i.length; n++) {
    const a = Vp(i[n], t.points, e);
    a.length && s.push(...a);
  }
  return s;
}
function n0(t, e, s, i) {
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
function a0(t, e, s, i) {
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
function o0(t, e) {
  const s = t.points, i = t.options.spanGaps, n = s.length;
  if (!n)
    return [];
  const a = !!t._loop, { start: o, end: r } = n0(s, n, a, i);
  if (i === !0)
    return xd(t, [
      {
        start: o,
        end: r,
        loop: a
      }
    ], s, e);
  const l = r < o ? r + n : r, c = !!t._fullLoop && o === 0 && r === n - 1;
  return xd(t, a0(s, o, l, c), s, e);
}
function xd(t, e, s, i) {
  return !i || !i.setContext || !s ? e : r0(t, e, s, i);
}
function r0(t, e, s, i) {
  const n = t._chart.getContext(), a = Ad(t.options), { _datasetIndex: o, options: { spanGaps: r } } = t, l = s.length, c = [];
  let u = a, d = e[0].start, f = d;
  function h(m, g, v, S) {
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
        style: S
      }), u = S, d = g % l);
    }
  }
  for (const m of e) {
    d = r ? d : m.start;
    let g = s[d % l], v;
    for (f = d + 1; f <= m.end; f++) {
      const S = s[f % l];
      v = Ad(i.setContext(Zs(n, {
        type: "segment",
        p0: g,
        p1: S,
        p0DataIndex: (f - 1) % l,
        p1DataIndex: f % l,
        datasetIndex: o
      }))), l0(v, u) && h(d, f - 1, m.loop, u), g = S, u = v;
    }
    d < f - 1 && h(d, f - 1, m.loop, u);
  }
  return c;
}
function Ad(t) {
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
function l0(t, e) {
  if (!e)
    return !1;
  const s = [], i = function(n, a) {
    return ic(a) ? (s.includes(a) || s.push(a), s.indexOf(a)) : a;
  };
  return JSON.stringify(t, i) !== JSON.stringify(e, i);
}
function Na(t, e, s) {
  return t.options.clip ? t[s] : e[s];
}
function c0(t, e) {
  const { xScale: s, yScale: i } = t;
  return s && i ? {
    left: Na(s, e, "left"),
    right: Na(s, e, "right"),
    top: Na(i, e, "top"),
    bottom: Na(i, e, "bottom")
  } : e;
}
function qp(t, e) {
  const s = e._clip;
  if (s.disabled)
    return !1;
  const i = c0(e, t.chartArea);
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
class u0 {
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
    this._request || (this._running = !0, this._request = Pp.call(window, () => {
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
var _s = /* @__PURE__ */ new u0();
const Cd = "transparent", d0 = {
  boolean(t, e, s) {
    return s > 0.5 ? e : t;
  },
  color(t, e, s) {
    const i = gd(t || Cd), n = i.valid && gd(e || Cd);
    return n && n.valid ? n.mix(i, s).hexString() : e;
  },
  number(t, e, s) {
    return t + (e - t) * s;
  }
};
class f0 {
  constructor(e, s, i, n) {
    const a = s[i];
    n = xn([
      e.to,
      n,
      a,
      e.from
    ]);
    const o = xn([
      e.from,
      a,
      n
    ]);
    this._active = !0, this._fn = e.fn || d0[e.type || typeof o], this._easing = Bn[e.easing] || Bn.linear, this._start = Math.floor(Date.now() + (e.delay || 0)), this._duration = this._total = Math.floor(e.duration), this._loop = !!e.loop, this._target = s, this._prop = i, this._from = o, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(e, s, i) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], a = i - this._start, o = this._duration - a;
      this._start = i, this._duration = Math.floor(Math.max(o, e.duration)), this._total += a, this._loop = !!e.loop, this._to = xn([
        e.to,
        s,
        n,
        e.from
      ]), this._from = xn([
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
class Gp {
  constructor(e, s) {
    this._chart = e, this._properties = /* @__PURE__ */ new Map(), this.configure(s);
  }
  configure(e) {
    if (!Ae(e))
      return;
    const s = Object.keys(et.animation), i = this._properties;
    Object.getOwnPropertyNames(e).forEach((n) => {
      const a = e[n];
      if (!Ae(a))
        return;
      const o = {};
      for (const r of s)
        o[r] = a[r];
      (Ze(a.properties) && a.properties || [
        n
      ]).forEach((r) => {
        (r === n || !i.has(r)) && i.set(r, o);
      });
    });
  }
  _animateOptions(e, s) {
    const i = s.options, n = p0(e, i);
    if (!n)
      return [];
    const a = this._createAnimations(n, i);
    return i.$shared && h0(e.options.$animations, i).then(() => {
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
      a[c] = d = new f0(f, e, c, u), n.push(d);
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
      return _s.add(this._chart, i), !0;
  }
}
function h0(t, e) {
  const s = [], i = Object.keys(e);
  for (let n = 0; n < i.length; n++) {
    const a = t[i[n]];
    a && a.active() && s.push(a.wait());
  }
  return Promise.all(s);
}
function p0(t, e) {
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
function Pd(t, e) {
  const s = t && t.options || {}, i = s.reverse, n = s.min === void 0 ? e : 0, a = s.max === void 0 ? e : 0;
  return {
    start: i ? a : n,
    end: i ? n : a
  };
}
function m0(t, e, s) {
  if (s === !1)
    return !1;
  const i = Pd(t, s), n = Pd(e, s);
  return {
    top: n.end,
    right: i.end,
    bottom: n.start,
    left: i.start
  };
}
function g0(t) {
  let e, s, i, n;
  return Ae(t) ? (e = t.top, s = t.right, i = t.bottom, n = t.left) : e = s = i = n = t, {
    top: e,
    right: s,
    bottom: i,
    left: n,
    disabled: t === !1
  };
}
function Kp(t, e) {
  const s = [], i = t._getSortedDatasetMetas(e);
  let n, a;
  for (n = 0, a = i.length; n < a; ++n)
    s.push(i[n].index);
  return s;
}
function wd(t, e, s, i = {}) {
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
    c = t.values[l], rt(c) && (a || e === 0 || hs(e) === hs(c)) && (e += c);
  }
  return !u && !i.all ? 0 : e;
}
function b0(t, e) {
  const { iScale: s, vScale: i } = e, n = s.axis === "x" ? "x" : "y", a = i.axis === "x" ? "x" : "y", o = Object.keys(t), r = new Array(o.length);
  let l, c, u;
  for (l = 0, c = o.length; l < c; ++l)
    u = o[l], r[l] = {
      [n]: u,
      [a]: t[u]
    };
  return r;
}
function Rr(t, e) {
  const s = t && t.options.stacked;
  return s || s === void 0 && e.stack !== void 0;
}
function y0(t, e, s) {
  return `${t.id}.${e.id}.${s.stack || s.type}`;
}
function v0(t) {
  const { min: e, max: s, minDefined: i, maxDefined: n } = t.getUserBounds();
  return {
    min: i ? e : Number.NEGATIVE_INFINITY,
    max: n ? s : Number.POSITIVE_INFINITY
  };
}
function _0(t, e, s) {
  const i = t[e] || (t[e] = {});
  return i[s] || (i[s] = {});
}
function Rd(t, e, s, i) {
  for (const n of e.getMatchingVisibleMetas(i).reverse()) {
    const a = t[n.index];
    if (s && a > 0 || !s && a < 0)
      return n.index;
  }
  return null;
}
function Md(t, e) {
  const { chart: s, _cachedMeta: i } = t, n = s._stacks || (s._stacks = {}), { iScale: a, vScale: o, index: r } = i, l = a.axis, c = o.axis, u = y0(a, o, i), d = e.length;
  let f;
  for (let h = 0; h < d; ++h) {
    const m = e[h], { [l]: g, [c]: v } = m, S = m._stacks || (m._stacks = {});
    f = S[c] = _0(n, u, g), f[r] = v, f._top = Rd(f, o, !0, i.type), f._bottom = Rd(f, o, !1, i.type);
    const x = f._visualValues || (f._visualValues = {});
    x[r] = v;
  }
}
function Mr(t, e) {
  const s = t.scales;
  return Object.keys(s).filter((i) => s[i].axis === e).shift();
}
function k0(t, e) {
  return Zs(t, {
    active: !1,
    dataset: void 0,
    datasetIndex: e,
    index: e,
    mode: "default",
    type: "dataset"
  });
}
function S0(t, e, s) {
  return Zs(t, {
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
function fn(t, e) {
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
const Dr = (t) => t === "reset" || t === "none", Dd = (t, e) => e ? t : Object.assign({}, t), T0 = (t, e, s) => t && !e.hidden && e._stacked && {
  keys: Kp(s, !0),
  values: null
};
class Zt {
  constructor(e, s) {
    this.chart = e, this._ctx = e.ctx, this.index = s, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const e = this._cachedMeta;
    this.configure(), this.linkScales(), e._stacked = Rr(e.vScale, e), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(e) {
    this.index !== e && fn(this._cachedMeta), this.index = e;
  }
  linkScales() {
    const e = this.chart, s = this._cachedMeta, i = this.getDataset(), n = (d, f, h, m) => d === "x" ? f : d === "r" ? m : h, a = s.xAxisID = me(i.xAxisID, Mr(e, "x")), o = s.yAxisID = me(i.yAxisID, Mr(e, "y")), r = s.rAxisID = me(i.rAxisID, Mr(e, "r")), l = s.indexAxis, c = s.iAxisID = n(l, a, o, r), u = s.vAxisID = n(l, o, a, r);
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
    this._data && hd(this._data, this), e._stacked && fn(e);
  }
  _dataCheck() {
    const e = this.getDataset(), s = e.data || (e.data = []), i = this._data;
    if (Ae(s)) {
      const n = this._cachedMeta;
      this._data = b0(s, n);
    } else if (i !== s) {
      if (i) {
        hd(i, this);
        const n = this._cachedMeta;
        fn(n), n._parsed = [];
      }
      s && Object.isExtensible(s) && rS(s, this), this._syncList = [], this._data = s;
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
    s._stacked = Rr(s.vScale, s), s.stack !== i.stack && (n = !0, fn(s), s.stack = i.stack), this._resyncElements(e), (n || a !== s._stacked) && (Md(this, s._parsed), s._stacked = Rr(s.vScale, s));
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
      Ze(n[e]) ? f = this.parseArrayData(i, n, e, s) : Ae(n[e]) ? f = this.parseObjectData(i, n, e, s) : f = this.parsePrimitiveData(i, n, e, s);
      const h = () => d[r] === null || c && d[r] < c[r];
      for (u = 0; u < s; ++u)
        i._parsed[u + e] = d = f[u], l && (h() && (l = !1), c = d);
      i._sorted = l;
    }
    o && Md(this, f);
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
        x: a.parse(Xs(h, r), f),
        y: o.parse(Xs(h, l), f)
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
      keys: Kp(n, !0),
      values: s._stacks[e.axis]._visualValues
    };
    return wd(r, o, a.index, {
      mode: i
    });
  }
  updateRangeFromParsed(e, s, i, n) {
    const a = i[s.axis];
    let o = a === null ? NaN : a;
    const r = n && i._stacks[s.axis];
    n && r && (n.values = r, o = wd(n, a, this._cachedMeta.index)), e.min = Math.min(e.min, o), e.max = Math.max(e.max, o);
  }
  getMinMax(e, s) {
    const i = this._cachedMeta, n = i._parsed, a = i._sorted && e === i.iScale, o = n.length, r = this._getOtherScale(e), l = T0(s, i, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: u, max: d } = v0(r);
    let f, h;
    function m() {
      h = n[f];
      const g = h[r.axis];
      return !rt(h[e.axis]) || u > g || d < g;
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
      o = s[n][e.axis], rt(o) && i.push(o);
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
    this.update(e || "default"), s._clip = g0(me(this.options.clip, m0(s.xScale, s.yScale, this.getMaxOverflow())));
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
      a = o.$context || (o.$context = S0(this.getContext(), e, o)), a.parsed = this.getParsed(e), a.raw = n.data[e], a.index = a.dataIndex = e;
    } else
      a = this.$context || (this.$context = k0(this.chart.getContext(), this.index)), a.dataset = n, a.index = a.datasetIndex = this.index;
    return a.active = !!s, a.mode = i, a;
  }
  resolveDatasetElementOptions(e) {
    return this._resolveElementOptions(this.datasetElementType.id, e);
  }
  resolveDataElementOptions(e, s) {
    return this._resolveElementOptions(this.dataElementType.id, s, e);
  }
  _resolveElementOptions(e, s = "default", i) {
    const n = s === "active", a = this._cachedDataOpts, o = e + "-" + s, r = a[o], l = this.enableOptionSharing && sa(i);
    if (r)
      return Dd(r, l);
    const c = this.chart.config, u = c.datasetElementScopeKeys(this._type, e), d = n ? [
      `${e}Hover`,
      "hover",
      e,
      ""
    ] : [
      e,
      ""
    ], f = c.getOptionScopes(this.getDataset(), u), h = Object.keys(et.elements[e]), m = () => this.getContext(i, n, s), g = c.resolveNamedOptions(f, h, m, d);
    return g.$shared && (g.$shared = l, a[o] = Object.freeze(Dd(g, l))), g;
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
    const c = new Gp(n, l && l.animations);
    return l && l._cacheable && (a[o] = Object.freeze(c)), c;
  }
  getSharedOptions(e) {
    if (e.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, e));
  }
  includeOptions(e, s) {
    return !s || Dr(e) || this.chart._animationsDisabled;
  }
  _getSharedOptions(e, s) {
    const i = this.resolveDataElementOptions(e, s), n = this._sharedOptions, a = this.getSharedOptions(i), o = this.includeOptions(s, a) || a !== n;
    return this.updateSharedOptions(a, s, i), {
      sharedOptions: a,
      includeOptions: o
    };
  }
  updateElement(e, s, i, n) {
    Dr(n) ? Object.assign(e, i) : this._resolveAnimations(s, n).update(e, i);
  }
  updateSharedOptions(e, s, i) {
    e && !Dr(s) && this._resolveAnimations(void 0, s).update(e, i);
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
      i._stacked && fn(i, n);
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
K(Zt, "defaults", {}), K(Zt, "datasetElementType", null), K(Zt, "dataElementType", null);
function x0(t, e) {
  if (!t._cache.$bar) {
    const s = t.getMatchingVisibleMetas(e);
    let i = [];
    for (let n = 0, a = s.length; n < a; n++)
      i = i.concat(s[n].controller.getAllParsedValues(t));
    t._cache.$bar = Cp(i.sort((n, a) => n - a));
  }
  return t._cache.$bar;
}
function A0(t) {
  const e = t.iScale, s = x0(e, t.type);
  let i = e._length, n, a, o, r;
  const l = () => {
    o === 32767 || o === -32768 || (sa(r) && (i = Math.min(i, Math.abs(o - r) || i)), r = o);
  };
  for (n = 0, a = s.length; n < a; ++n)
    o = e.getPixelForValue(s[n]), l();
  for (r = void 0, n = 0, a = e.ticks.length; n < a; ++n)
    o = e.getPixelForTick(n), l();
  return i;
}
function C0(t, e, s, i) {
  const n = s.barThickness;
  let a, o;
  return Se(n) ? (a = e.min * s.categoryPercentage, o = s.barPercentage) : (a = n * i, o = 1), {
    chunk: a / i,
    ratio: o,
    start: e.pixels[t] - a / 2
  };
}
function P0(t, e, s, i) {
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
function w0(t, e, s, i) {
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
function $p(t, e, s, i) {
  return Ze(t) ? w0(t, e, s, i) : e[s.axis] = s.parse(t, i), e;
}
function Id(t, e, s, i) {
  const n = t.iScale, a = t.vScale, o = n.getLabels(), r = n === a, l = [];
  let c, u, d, f;
  for (c = s, u = s + i; c < u; ++c)
    f = e[c], d = {}, d[n.axis] = r || n.parse(o[c], c), l.push($p(f, d, a, c));
  return l;
}
function Ir(t) {
  return t && t.barStart !== void 0 && t.barEnd !== void 0;
}
function R0(t, e, s) {
  return t !== 0 ? hs(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= s ? 1 : -1);
}
function M0(t) {
  let e, s, i, n, a;
  return t.horizontal ? (e = t.base > t.x, s = "left", i = "right") : (e = t.base < t.y, s = "bottom", i = "top"), e ? (n = "end", a = "start") : (n = "start", a = "end"), {
    start: s,
    end: i,
    reverse: e,
    top: n,
    bottom: a
  };
}
function D0(t, e, s, i) {
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
  const { start: o, end: r, reverse: l, top: c, bottom: u } = M0(t);
  n === "middle" && s && (t.enableBorderRadius = !0, (s._top || 0) === i ? n = c : (s._bottom || 0) === i ? n = u : (a[Ed(u, o, r, l)] = !0, n = c)), a[Ed(n, o, r, l)] = !0, t.borderSkipped = a;
}
function Ed(t, e, s, i) {
  return i ? (t = I0(t, e, s), t = Od(t, s, e)) : t = Od(t, e, s), t;
}
function I0(t, e, s) {
  return t === e ? s : t === s ? e : t;
}
function Od(t, e, s) {
  return t === "start" ? e : t === "end" ? s : t;
}
function E0(t, { inflateAmount: e }, s) {
  t.inflateAmount = e === "auto" ? s === 1 ? 0.33 : 0 : e;
}
class Xa extends Zt {
  parsePrimitiveData(e, s, i, n) {
    return Id(e, s, i, n);
  }
  parseArrayData(e, s, i, n) {
    return Id(e, s, i, n);
  }
  parseObjectData(e, s, i, n) {
    const { iScale: a, vScale: o } = e, { xAxisKey: r = "x", yAxisKey: l = "y" } = this._parsing, c = a.axis === "x" ? r : l, u = o.axis === "x" ? r : l, d = [];
    let f, h, m, g;
    for (f = i, h = i + n; f < h; ++f)
      g = s[f], m = {}, m[a.axis] = a.parse(Xs(g, c), f), d.push($p(Xs(g, u), m, o, f));
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
    const s = this._cachedMeta, { iScale: i, vScale: n } = s, a = this.getParsed(e), o = a._custom, r = Ir(o) ? "[" + o.start + ", " + o.end + "]" : "" + n.getLabelForValue(a[n.axis]);
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
      const m = this.getParsed(h), g = a || Se(m[r.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(h), v = this._calculateBarIndexPixels(h, u), S = (m._stacks || {})[r.axis], x = {
        horizontal: c,
        base: g.base,
        enableBorderRadius: !S || Ir(m._custom) || o === S._top || o === S._bottom,
        x: c ? g.head : v.center,
        y: c ? v.center : g.head,
        height: c ? v.size : Math.abs(g.size),
        width: c ? Math.abs(g.size) : v.size
      };
      f && (x.options = d || this.resolveDataElementOptions(h, e[h].active ? "active" : n));
      const C = x.options || e[h].options;
      D0(x, C, S, o), E0(x, C, u.ratio), this.updateElement(e[h], h, x, n);
    }
  }
  _getStacks(e, s) {
    const { iScale: i } = this._cachedMeta, n = i.getMatchingVisibleMetas(this._type).filter((u) => u.controller.options.grouped), a = i.options.stacked, o = [], r = this._cachedMeta.controller.getParsed(s), l = r && r[i.axis], c = (u) => {
      const d = u._parsed.find((h) => h[i.axis] === l), f = d && d[u.vScale.axis];
      if (Se(f) || isNaN(f))
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
      e[me(this.chart.options.indexAxis === "x" ? i.xAxisID : i.yAxisID, s)] = !0;
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
      min: r || A0(s),
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
    const { _cachedMeta: { vScale: s, _stacked: i, index: n }, options: { base: a, minBarLength: o } } = this, r = a || 0, l = this.getParsed(e), c = l._custom, u = Ir(c);
    let d = l[s.axis], f = 0, h = i ? this.applyStack(s, l, i) : d, m, g;
    h !== d && (f = h - d, h = d), u && (d = c.barStart, h = c.barEnd - c.barStart, d !== 0 && hs(d) !== hs(c.barEnd) && (f = 0), f += d);
    const v = !Se(a) && !u ? a : f;
    let S = s.getPixelForValue(v);
    if (this.chart.getDataVisibility(e) ? m = s.getPixelForValue(f + h) : m = S, g = m - S, Math.abs(g) < o) {
      g = R0(g, s, r) * o, d === r && (S -= g / 2);
      const x = s.getPixelForDecimal(0), C = s.getPixelForDecimal(1), k = Math.min(x, C), P = Math.max(x, C);
      S = Math.max(Math.min(S, P), k), m = S + g, i && !u && (l._stacks[s.axis]._visualValues[n] = s.getValueForPixel(m) - s.getValueForPixel(S));
    }
    if (S === s.getPixelForValue(r)) {
      const x = hs(g) * s.getLineWidthForValue(r) / 2;
      S += x, g -= x;
    }
    return {
      size: g,
      base: S,
      head: m,
      center: m + g / 2
    };
  }
  _calculateBarIndexPixels(e, s) {
    const i = s.scale, n = this.options, a = n.skipNull, o = me(n.maxBarThickness, 1 / 0);
    let r, l;
    const c = this._getAxisCount();
    if (s.grouped) {
      const u = a ? this._getStackCount(e) : s.stackCount, d = n.barThickness === "flex" ? P0(e, s, n, u * c) : C0(e, s, n, u * c), f = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, h = this._getAxis().indexOf(me(f, this.getFirstScaleIdForIndexAxis())), m = this._getStackIndex(this.index, this._cachedMeta.stack, a ? e : void 0) + h;
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
K(Xa, "id", "bar"), K(Xa, "defaults", {
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
}), K(Xa, "overrides", {
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
class Qa extends Zt {
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
      a[o]._custom = me(r[2], this.resolveDataElementOptions(o + i).radius);
    }
    return a;
  }
  parseObjectData(e, s, i, n) {
    const a = super.parseObjectData(e, s, i, n);
    for (let o = 0; o < a.length; o++) {
      const r = s[i + o];
      a[o]._custom = me(r && r.r && +r.r, this.resolveDataElementOptions(o + i).radius);
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
      const h = e[f], m = !a && this.getParsed(f), g = {}, v = g[u] = a ? o.getPixelForDecimal(0.5) : o.getPixelForValue(m[u]), S = g[d] = a ? r.getBasePixel() : r.getPixelForValue(m[d]);
      g.skip = isNaN(v) || isNaN(S), c && (g.options = l || this.resolveDataElementOptions(f, h.active ? "active" : n), a && (g.options.radius = 0)), this.updateElement(h, f, g, n);
    }
  }
  resolveDataElementOptions(e, s) {
    const i = this.getParsed(e);
    let n = super.resolveDataElementOptions(e, s);
    n.$shared && (n = Object.assign({}, n, {
      $shared: !1
    }));
    const a = n.radius;
    return s !== "active" && (n.radius = 0), n.radius += me(i && i._custom, a), n;
  }
}
K(Qa, "id", "bubble"), K(Qa, "defaults", {
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
}), K(Qa, "overrides", {
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
function O0(t, e, s) {
  let i = 1, n = 1, a = 0, o = 0;
  if (e < Ye) {
    const r = t, l = r + e, c = Math.cos(r), u = Math.sin(r), d = Math.cos(l), f = Math.sin(l), h = (C, k, P) => ia(C, r, l, !0) ? 1 : Math.max(k, k * s, P, P * s), m = (C, k, P) => ia(C, r, l, !0) ? -1 : Math.min(k, k * s, P, P * s), g = h(0, c, d), v = h(lt, u, f), S = m(Me, c, d), x = m(Me + lt, u, f);
    i = (g - S) / 2, n = (v - x) / 2, a = -(g + S) / 2, o = -(v + x) / 2;
  }
  return {
    ratioX: i,
    ratioY: n,
    offsetX: a,
    offsetY: o
  };
}
class gi extends Zt {
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
      if (Ae(i[e])) {
        const { key: l = "value" } = this._parsing;
        a = (c) => +Xs(i[c], l);
      }
      let o, r;
      for (o = e, r = e + s; o < r; ++o)
        n._parsed[o] = a(o);
    }
  }
  _getRotation() {
    return Yt(this.options.rotation - 90);
  }
  _getCircumference() {
    return Yt(this.options.circumference);
  }
  _getRotationExtents() {
    let e = Ye, s = -Ye;
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
    const s = this.chart, { chartArea: i } = s, n = this._cachedMeta, a = n.data, o = this.getMaxBorderWidth() + this.getMaxOffset(a) + this.options.spacing, r = Math.max((Math.min(i.width, i.height) - o) / 2, 0), l = Math.min(Gk(this.options.cutout, r), 1), c = this._getRingWeight(this.index), { circumference: u, rotation: d } = this._getRotationExtents(), { ratioX: f, ratioY: h, offsetX: m, offsetY: g } = O0(d, u, l), v = (i.width - o) / f, S = (i.height - o) / h, x = Math.max(Math.min(v, S) / 2, 0), C = kp(this.options.radius, x), k = Math.max(C * l, 0), P = (C - k) / this._getVisibleDatasetWeightTotal();
    this.offsetX = m * C, this.offsetY = g * C, n.total = this.calculateTotal(), this.outerRadius = C - P * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - P * c, 0), this.updateElements(a, 0, a.length, e);
  }
  _circumference(e, s) {
    const i = this.options, n = this._cachedMeta, a = this._getCircumference();
    return s && i.animation.animateRotate || !this.chart.getDataVisibility(e) || n._parsed[e] === null || n.data[e].hidden ? 0 : this.calculateCircumference(n._parsed[e] * a / Ye);
  }
  updateElements(e, s, i, n) {
    const a = n === "reset", o = this.chart, r = o.chartArea, c = o.options.animation, u = (r.left + r.right) / 2, d = (r.top + r.bottom) / 2, f = a && c.animateScale, h = f ? 0 : this.innerRadius, m = f ? 0 : this.outerRadius, { sharedOptions: g, includeOptions: v } = this._getSharedOptions(s, n);
    let S = this._getRotation(), x;
    for (x = 0; x < s; ++x)
      S += this._circumference(x, a);
    for (x = s; x < s + i; ++x) {
      const C = this._circumference(x, a), k = e[x], P = {
        x: u + this.offsetX,
        y: d + this.offsetY,
        startAngle: S,
        endAngle: S + C,
        circumference: C,
        outerRadius: m,
        innerRadius: h
      };
      v && (P.options = g || this.resolveDataElementOptions(x, k.active ? "active" : n)), S += C, this.updateElement(k, x, P, n);
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
    return s > 0 && !isNaN(e) ? Ye * (Math.abs(e) / s) : 0;
  }
  getLabelAndValue(e) {
    const s = this._cachedMeta, i = this.chart, n = i.data.labels || [], a = ma(s._parsed[e], i.options.locale);
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
    return Math.max(me(this.chart.data.datasets[e].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
K(gi, "id", "doughnut"), K(gi, "defaults", {
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
}), K(gi, "descriptors", {
  _scriptable: (e) => e !== "spacing",
  _indexable: (e) => e !== "spacing" && !e.startsWith("borderDash") && !e.startsWith("hoverBorderDash")
}), K(gi, "overrides", {
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
class Za extends Zt {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(e) {
    const s = this._cachedMeta, { dataset: i, data: n = [], _dataset: a } = s, o = this.chart._animationsDisabled;
    let { start: r, count: l } = Rp(s, n, o);
    this._drawStart = r, this._drawCount = l, Mp(s) && (r = 0, l = n.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!a._decimated, i.points = n;
    const c = this.resolveDatasetElementOptions(e);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(i, void 0, {
      animated: !o,
      options: c
    }, e), this.updateElements(n, r, l, e);
  }
  updateElements(e, s, i, n) {
    const a = n === "reset", { iScale: o, vScale: r, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: u, includeOptions: d } = this._getSharedOptions(s, n), f = o.axis, h = r.axis, { spanGaps: m, segment: g } = this.options, v = Qi(m) ? m : Number.POSITIVE_INFINITY, S = this.chart._animationsDisabled || a || n === "none", x = s + i, C = e.length;
    let k = s > 0 && this.getParsed(s - 1);
    for (let P = 0; P < C; ++P) {
      const D = e[P], R = S ? D : {};
      if (P < s || P >= x) {
        R.skip = !0;
        continue;
      }
      const O = this.getParsed(P), N = Se(O[h]), z = R[f] = o.getPixelForValue(O[f], P), J = R[h] = a || N ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, O, l) : O[h], P);
      R.skip = isNaN(z) || isNaN(J) || N, R.stop = P > 0 && Math.abs(O[f] - k[f]) > v, g && (R.parsed = O, R.raw = c.data[P]), d && (R.options = u || this.resolveDataElementOptions(P, D.active ? "active" : n)), S || this.updateElement(D, P, R, n), k = O;
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
K(Za, "id", "line"), K(Za, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), K(Za, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
class jn extends Zt {
  constructor(e, s) {
    super(e, s), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(e) {
    const s = this._cachedMeta, i = this.chart, n = i.data.labels || [], a = ma(s._parsed[e].r, i.options.locale);
    return {
      label: n[e] || "",
      value: a
    };
  }
  parseObjectData(e, s, i, n) {
    return Fp.bind(this)(e, s, i, n);
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
    const a = n === "reset", o = this.chart, l = o.options.animation, c = this._cachedMeta.rScale, u = c.xCenter, d = c.yCenter, f = c.getIndexAngle(0) - 0.5 * Me;
    let h = f, m;
    const g = 360 / this.countVisibleElements();
    for (m = 0; m < s; ++m)
      h += this._computeAngle(m, n, g);
    for (m = s; m < s + i; m++) {
      const v = e[m];
      let S = h, x = h + this._computeAngle(m, n, g), C = o.getDataVisibility(m) ? c.getDistanceFromCenterForValue(this.getParsed(m).r) : 0;
      h = x, a && (l.animateScale && (C = 0), l.animateRotate && (S = x = f));
      const k = {
        x: u,
        y: d,
        innerRadius: 0,
        outerRadius: C,
        startAngle: S,
        endAngle: x,
        options: this.resolveDataElementOptions(m, v.active ? "active" : n)
      };
      this.updateElement(v, m, k, n);
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
    return this.chart.getDataVisibility(e) ? Yt(this.resolveDataElementOptions(e, s).angle || i) : 0;
  }
}
K(jn, "id", "polarArea"), K(jn, "defaults", {
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
}), K(jn, "overrides", {
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
class pl extends gi {
}
K(pl, "id", "pie"), K(pl, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
});
class eo extends Zt {
  getLabelAndValue(e) {
    const s = this._cachedMeta.vScale, i = this.getParsed(e);
    return {
      label: s.getLabels()[e],
      value: "" + s.getLabelForValue(i[s.axis])
    };
  }
  parseObjectData(e, s, i, n) {
    return Fp.bind(this)(e, s, i, n);
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
K(eo, "id", "radar"), K(eo, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
}), K(eo, "overrides", {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
});
class to extends Zt {
  getLabelAndValue(e) {
    const s = this._cachedMeta, i = this.chart.data.labels || [], { xScale: n, yScale: a } = s, o = this.getParsed(e), r = n.getLabelForValue(o.x), l = a.getLabelForValue(o.y);
    return {
      label: i[e] || "",
      value: "(" + r + ", " + l + ")"
    };
  }
  update(e) {
    const s = this._cachedMeta, { data: i = [] } = s, n = this.chart._animationsDisabled;
    let { start: a, count: o } = Rp(s, i, n);
    if (this._drawStart = a, this._drawCount = o, Mp(s) && (a = 0, o = i.length), this.options.showLine) {
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
    const a = n === "reset", { iScale: o, vScale: r, _stacked: l, _dataset: c } = this._cachedMeta, u = this.resolveDataElementOptions(s, n), d = this.getSharedOptions(u), f = this.includeOptions(n, d), h = o.axis, m = r.axis, { spanGaps: g, segment: v } = this.options, S = Qi(g) ? g : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || a || n === "none";
    let C = s > 0 && this.getParsed(s - 1);
    for (let k = s; k < s + i; ++k) {
      const P = e[k], D = this.getParsed(k), R = x ? P : {}, O = Se(D[m]), N = R[h] = o.getPixelForValue(D[h], k), z = R[m] = a || O ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, D, l) : D[m], k);
      R.skip = isNaN(N) || isNaN(z) || O, R.stop = k > 0 && Math.abs(D[h] - C[h]) > S, v && (R.parsed = D, R.raw = c.data[k]), f && (R.options = d || this.resolveDataElementOptions(k, P.active ? "active" : n)), x || this.updateElement(P, k, R, n), C = D;
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
K(to, "id", "scatter"), K(to, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1
}), K(to, "overrides", {
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
var N0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BarController: Xa,
  BubbleController: Qa,
  DoughnutController: gi,
  LineController: Za,
  PieController: pl,
  PolarAreaController: jn,
  RadarController: eo,
  ScatterController: to
});
function li() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class uc {
  constructor(e) {
    K(this, "options");
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
    Object.assign(uc.prototype, e);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return li();
  }
  parse() {
    return li();
  }
  format() {
    return li();
  }
  add() {
    return li();
  }
  diff() {
    return li();
  }
  startOf() {
    return li();
  }
  endOf() {
    return li();
  }
}
var L0 = {
  _date: uc
};
function U0(t, e, s, i) {
  const { controller: n, data: a, _sorted: o } = t, r = n._cachedMeta.iScale, l = t.dataset && t.dataset.options ? t.dataset.options.spanGaps : null;
  if (r && e === r.axis && e !== "r" && o && a.length) {
    const c = r._reversePixels ? aS : ws;
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
        const { vScale: d } = n._cachedMeta, { _parsed: f } = t, h = f.slice(0, u.lo + 1).reverse().findIndex((g) => !Se(g[d.axis]));
        u.lo -= Math.max(0, h);
        const m = f.slice(u.hi).findIndex((g) => !Se(g[d.axis]));
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
function Ko(t, e, s, i, n) {
  const a = t.getSortedVisibleDatasetMetas(), o = s[e];
  for (let r = 0, l = a.length; r < l; ++r) {
    const { index: c, data: u } = a[r], { lo: d, hi: f } = U0(a[r], e, o, n);
    for (let h = d; h <= f; ++h) {
      const m = u[h];
      m.skip || i(m, c, h);
    }
  }
}
function F0(t) {
  const e = t.indexOf("x") !== -1, s = t.indexOf("y") !== -1;
  return function(i, n) {
    const a = e ? Math.abs(i.x - n.x) : 0, o = s ? Math.abs(i.y - n.y) : 0;
    return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2));
  };
}
function Er(t, e, s, i, n) {
  const a = [];
  return !n && !t.isPointInArea(e) || Ko(t, s, e, function(r, l, c) {
    !n && !Rs(r, t.chartArea, 0) || r.inRange(e.x, e.y, i) && a.push({
      element: r,
      datasetIndex: l,
      index: c
    });
  }, !0), a;
}
function W0(t, e, s, i) {
  let n = [];
  function a(o, r, l) {
    const { startAngle: c, endAngle: u } = o.getProps([
      "startAngle",
      "endAngle"
    ], i), { angle: d } = xp(o, {
      x: e.x,
      y: e.y
    });
    ia(d, c, u) && n.push({
      element: o,
      datasetIndex: r,
      index: l
    });
  }
  return Ko(t, s, e, a), n;
}
function B0(t, e, s, i, n, a) {
  let o = [];
  const r = F0(s);
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
  return Ko(t, s, e, c), o;
}
function Or(t, e, s, i, n, a) {
  return !a && !t.isPointInArea(e) ? [] : s === "r" && !i ? W0(t, e, s, n) : B0(t, e, s, i, n, a);
}
function Nd(t, e, s, i, n) {
  const a = [], o = s === "x" ? "inXRange" : "inYRange";
  let r = !1;
  return Ko(t, s, e, (l, c, u) => {
    l[o] && l[o](e[s], n) && (a.push({
      element: l,
      datasetIndex: c,
      index: u
    }), r = r || l.inRange(e.x, e.y, n));
  }), i && !r ? [] : a;
}
var H0 = {
  modes: {
    index(t, e, s, i) {
      const n = di(e, t), a = s.axis || "x", o = s.includeInvisible || !1, r = s.intersect ? Er(t, n, a, i, o) : Or(t, n, a, !1, i, o), l = [];
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
      const n = di(e, t), a = s.axis || "xy", o = s.includeInvisible || !1;
      let r = s.intersect ? Er(t, n, a, i, o) : Or(t, n, a, !1, i, o);
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
      const n = di(e, t), a = s.axis || "xy", o = s.includeInvisible || !1;
      return Er(t, n, a, i, o);
    },
    nearest(t, e, s, i) {
      const n = di(e, t), a = s.axis || "xy", o = s.includeInvisible || !1;
      return Or(t, n, a, s.intersect, i, o);
    },
    x(t, e, s, i) {
      const n = di(e, t);
      return Nd(t, n, "x", s.intersect, i);
    },
    y(t, e, s, i) {
      const n = di(e, t);
      return Nd(t, n, "y", s.intersect, i);
    }
  }
};
const Jp = [
  "left",
  "top",
  "right",
  "bottom"
];
function hn(t, e) {
  return t.filter((s) => s.pos === e);
}
function Ld(t, e) {
  return t.filter((s) => Jp.indexOf(s.pos) === -1 && s.box.axis === e);
}
function pn(t, e) {
  return t.sort((s, i) => {
    const n = e ? i : s, a = e ? s : i;
    return n.weight === a.weight ? n.index - a.index : n.weight - a.weight;
  });
}
function j0(t) {
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
function V0(t) {
  const e = {};
  for (const s of t) {
    const { stack: i, pos: n, stackWeight: a } = s;
    if (!i || !Jp.includes(n))
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
function z0(t, e) {
  const s = V0(t), { vBoxMaxWidth: i, hBoxMaxHeight: n } = e;
  let a, o, r;
  for (a = 0, o = t.length; a < o; ++a) {
    r = t[a];
    const { fullSize: l } = r.box, c = s[r.stack], u = c && r.stackWeight / c.weight;
    r.horizontal ? (r.width = u ? u * i : l && e.availableWidth, r.height = n) : (r.width = i, r.height = u ? u * n : l && e.availableHeight);
  }
  return s;
}
function q0(t) {
  const e = j0(t), s = pn(e.filter((c) => c.box.fullSize), !0), i = pn(hn(e, "left"), !0), n = pn(hn(e, "right")), a = pn(hn(e, "top"), !0), o = pn(hn(e, "bottom")), r = Ld(e, "x"), l = Ld(e, "y");
  return {
    fullSize: s,
    leftAndTop: i.concat(a),
    rightAndBottom: n.concat(l).concat(o).concat(r),
    chartArea: hn(e, "chartArea"),
    vertical: i.concat(n).concat(l),
    horizontal: a.concat(o).concat(r)
  };
}
function Ud(t, e, s, i) {
  return Math.max(t[s], e[s]) + Math.max(t[i], e[i]);
}
function Yp(t, e) {
  t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right);
}
function G0(t, e, s, i) {
  const { pos: n, box: a } = s, o = t.maxPadding;
  if (!Ae(n)) {
    s.size && (t[n] -= s.size);
    const d = i[s.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, s.horizontal ? a.height : a.width), s.size = d.size / d.count, t[n] += s.size;
  }
  a.getPadding && Yp(o, a.getPadding());
  const r = Math.max(0, e.outerWidth - Ud(o, t, "left", "right")), l = Math.max(0, e.outerHeight - Ud(o, t, "top", "bottom")), c = r !== t.w, u = l !== t.h;
  return t.w = r, t.h = l, s.horizontal ? {
    same: c,
    other: u
  } : {
    same: u,
    other: c
  };
}
function K0(t) {
  const e = t.maxPadding;
  function s(i) {
    const n = Math.max(e[i] - t[i], 0);
    return t[i] += n, n;
  }
  t.y += s("top"), t.x += s("left"), s("right"), s("bottom");
}
function $0(t, e) {
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
function An(t, e, s, i) {
  const n = [];
  let a, o, r, l, c, u;
  for (a = 0, o = t.length, c = 0; a < o; ++a) {
    r = t[a], l = r.box, l.update(r.width || e.w, r.height || e.h, $0(r.horizontal, e));
    const { same: d, other: f } = G0(e, s, r, i);
    c |= d && n.length, u = u || f, l.fullSize || n.push(r);
  }
  return c && An(n, e, s, i) || u;
}
function La(t, e, s, i, n) {
  t.top = s, t.left = e, t.right = e + i, t.bottom = s + n, t.width = i, t.height = n;
}
function Fd(t, e, s, i) {
  const n = s.padding;
  let { x: a, y: o } = e;
  for (const r of t) {
    const l = r.box, c = i[r.stack] || {
      placed: 0,
      weight: 1
    }, u = r.stackWeight / c.weight || 1;
    if (r.horizontal) {
      const d = e.w * u, f = c.size || l.height;
      sa(c.start) && (o = c.start), l.fullSize ? La(l, n.left, o, s.outerWidth - n.right - n.left, f) : La(l, e.left + c.placed, o, d, f), c.start = o, c.placed += d, o = l.bottom;
    } else {
      const d = e.h * u, f = c.size || l.width;
      sa(c.start) && (a = c.start), l.fullSize ? La(l, a, n.top, f, s.outerHeight - n.bottom - n.top) : La(l, a, e.top + c.placed, f, d), c.start = a, c.placed += d, a = l.right;
    }
  }
  e.x = a, e.y = o;
}
var _t = {
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
    const n = St(t.options.layout.padding), a = Math.max(e - n.width, 0), o = Math.max(s - n.height, 0), r = q0(t.boxes), l = r.vertical, c = r.horizontal;
    Ue(t.boxes, (g) => {
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
    Yp(f, St(i));
    const h = Object.assign({
      maxPadding: f,
      w: a,
      h: o,
      x: n.left,
      y: n.top
    }, n), m = z0(l.concat(c), d);
    An(r.fullSize, h, d, m), An(l, h, d, m), An(c, h, d, m) && An(l, h, d, m), K0(h), Fd(r.leftAndTop, h, d, m), h.x += h.w, h.y += h.h, Fd(r.rightAndBottom, h, d, m), t.chartArea = {
      left: h.left,
      top: h.top,
      right: h.left + h.w,
      bottom: h.top + h.h,
      height: h.h,
      width: h.w
    }, Ue(r.chartArea, (g) => {
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
class Xp {
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
class J0 extends Xp {
  acquireContext(e) {
    return e && e.getContext && e.getContext("2d") || null;
  }
  updateConfig(e) {
    e.options.animation = !1;
  }
}
const so = "$chartjs", Y0 = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Wd = (t) => t === null || t === "";
function X0(t, e) {
  const s = t.style, i = t.getAttribute("height"), n = t.getAttribute("width");
  if (t[so] = {
    initial: {
      height: i,
      width: n,
      style: {
        display: s.display,
        height: s.height,
        width: s.width
      }
    }
  }, s.display = s.display || "block", s.boxSizing = s.boxSizing || "border-box", Wd(n)) {
    const a = Sd(t, "width");
    a !== void 0 && (t.width = a);
  }
  if (Wd(i))
    if (t.style.height === "")
      t.height = t.width / (e || 2);
    else {
      const a = Sd(t, "height");
      a !== void 0 && (t.height = a);
    }
  return t;
}
const Qp = QS ? {
  passive: !0
} : !1;
function Q0(t, e, s) {
  t && t.addEventListener(e, s, Qp);
}
function Z0(t, e, s) {
  t && t.canvas && t.canvas.removeEventListener(e, s, Qp);
}
function eT(t, e) {
  const s = Y0[t.type] || t.type, { x: i, y: n } = di(t, e);
  return {
    type: s,
    chart: e,
    native: t,
    x: i !== void 0 ? i : null,
    y: n !== void 0 ? n : null
  };
}
function Ao(t, e) {
  for (const s of t)
    if (s === e || s.contains(e))
      return !0;
}
function tT(t, e, s) {
  const i = t.canvas, n = new MutationObserver((a) => {
    let o = !1;
    for (const r of a)
      o = o || Ao(r.addedNodes, i), o = o && !Ao(r.removedNodes, i);
    o && s();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
function sT(t, e, s) {
  const i = t.canvas, n = new MutationObserver((a) => {
    let o = !1;
    for (const r of a)
      o = o || Ao(r.removedNodes, i), o = o && !Ao(r.addedNodes, i);
    o && s();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const aa = /* @__PURE__ */ new Map();
let Bd = 0;
function Zp() {
  const t = window.devicePixelRatio;
  t !== Bd && (Bd = t, aa.forEach((e, s) => {
    s.currentDevicePixelRatio !== t && e();
  }));
}
function iT(t, e) {
  aa.size || window.addEventListener("resize", Zp), aa.set(t, e);
}
function nT(t) {
  aa.delete(t), aa.size || window.removeEventListener("resize", Zp);
}
function aT(t, e, s) {
  const i = t.canvas, n = i && cc(i);
  if (!n)
    return;
  const a = wp((r, l) => {
    const c = n.clientWidth;
    s(r, l), c < n.clientWidth && s();
  }, window), o = new ResizeObserver((r) => {
    const l = r[0], c = l.contentRect.width, u = l.contentRect.height;
    c === 0 && u === 0 || a(c, u);
  });
  return o.observe(n), iT(t, a), o;
}
function Nr(t, e, s) {
  s && s.disconnect(), e === "resize" && nT(t);
}
function oT(t, e, s) {
  const i = t.canvas, n = wp((a) => {
    t.ctx !== null && s(eT(a, t));
  }, t);
  return Q0(i, e, n), n;
}
class rT extends Xp {
  acquireContext(e, s) {
    const i = e && e.getContext && e.getContext("2d");
    return i && i.canvas === e ? (X0(e, s), i) : null;
  }
  releaseContext(e) {
    const s = e.canvas;
    if (!s[so])
      return !1;
    const i = s[so].initial;
    [
      "height",
      "width"
    ].forEach((a) => {
      const o = i[a];
      Se(o) ? s.removeAttribute(a) : s.setAttribute(a, o);
    });
    const n = i.style || {};
    return Object.keys(n).forEach((a) => {
      s.style[a] = n[a];
    }), s.width = s.width, delete s[so], !0;
  }
  addEventListener(e, s, i) {
    this.removeEventListener(e, s);
    const n = e.$proxies || (e.$proxies = {}), o = {
      attach: tT,
      detach: sT,
      resize: aT
    }[s] || oT;
    n[s] = o(e, s, i);
  }
  removeEventListener(e, s) {
    const i = e.$proxies || (e.$proxies = {}), n = i[s];
    if (!n)
      return;
    ({
      attach: Nr,
      detach: Nr,
      resize: Nr
    }[s] || Z0)(e, s, n), i[s] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(e, s, i, n) {
    return XS(e, s, i, n);
  }
  isAttached(e) {
    const s = e && cc(e);
    return !!(s && s.isConnected);
  }
}
function lT(t) {
  return !lc() || typeof OffscreenCanvas < "u" && t instanceof OffscreenCanvas ? J0 : rT;
}
var za;
let Os = (za = class {
  constructor() {
    K(this, "x");
    K(this, "y");
    K(this, "active", !1);
    K(this, "options");
    K(this, "$animations");
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
    return Qi(this.x) && Qi(this.y);
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
}, K(za, "defaults", {}), K(za, "defaultRoutes"), za);
function cT(t, e) {
  const s = t.options.ticks, i = uT(t), n = Math.min(s.maxTicksLimit || i, i), a = s.major.enabled ? fT(e) : [], o = a.length, r = a[0], l = a[o - 1], c = [];
  if (o > n)
    return hT(e, c, a, o / n), c;
  const u = dT(a, e, n);
  if (o > 0) {
    let d, f;
    const h = o > 1 ? Math.round((l - r) / (o - 1)) : null;
    for (Ua(e, c, u, Se(h) ? 0 : r - h, r), d = 0, f = o - 1; d < f; d++)
      Ua(e, c, u, a[d], a[d + 1]);
    return Ua(e, c, u, l, Se(h) ? e.length : l + h), c;
  }
  return Ua(e, c, u), c;
}
function uT(t) {
  const e = t.options.offset, s = t._tickSize(), i = t._length / s + (e ? 0 : 1), n = t._maxLength / s;
  return Math.floor(Math.min(i, n));
}
function dT(t, e, s) {
  const i = pT(t), n = e.length / s;
  if (!i)
    return Math.max(n, 1);
  const a = eS(i);
  for (let o = 0, r = a.length - 1; o < r; o++) {
    const l = a[o];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function fT(t) {
  const e = [];
  let s, i;
  for (s = 0, i = t.length; s < i; s++)
    t[s].major && e.push(s);
  return e;
}
function hT(t, e, s, i) {
  let n = 0, a = s[0], o;
  for (i = Math.ceil(i), o = 0; o < t.length; o++)
    o === a && (e.push(t[o]), n++, a = s[n * i]);
}
function Ua(t, e, s, i, n) {
  const a = me(i, 0), o = Math.min(me(n, t.length), t.length);
  let r = 0, l, c, u;
  for (s = Math.ceil(s), n && (l = n - i, s = l / Math.floor(l / s)), u = a; u < 0; )
    r++, u = Math.round(a + r * s);
  for (c = Math.max(a, 0); c < o; c++)
    c === u && (e.push(t[c]), r++, u = Math.round(a + r * s));
}
function pT(t) {
  const e = t.length;
  let s, i;
  if (e < 2)
    return !1;
  for (i = t[0], s = 1; s < e; ++s)
    if (t[s] - t[s - 1] !== i)
      return !1;
  return i;
}
const mT = (t) => t === "left" ? "right" : t === "right" ? "left" : t, Hd = (t, e, s) => e === "top" || e === "left" ? t[e] + s : t[e] - s, jd = (t, e) => Math.min(e || t, t);
function Vd(t, e) {
  const s = [], i = t.length / e, n = t.length;
  let a = 0;
  for (; a < n; a += i)
    s.push(t[Math.floor(a)]);
  return s;
}
function gT(t, e, s) {
  const i = t.ticks.length, n = Math.min(e, i - 1), a = t._startPixel, o = t._endPixel, r = 1e-6;
  let l = t.getPixelForTick(n), c;
  if (!(s && (i === 1 ? c = Math.max(l - a, o - l) : e === 0 ? c = (t.getPixelForTick(1) - l) / 2 : c = (l - t.getPixelForTick(n - 1)) / 2, l += n < e ? c : -c, l < a - r || l > o + r)))
    return l;
}
function bT(t, e) {
  Ue(t, (s) => {
    const i = s.gc, n = i.length / 2;
    let a;
    if (n > e) {
      for (a = 0; a < n; ++a)
        delete s.data[i[a]];
      i.splice(0, n);
    }
  });
}
function mn(t) {
  return t.drawTicks ? t.tickLength : 0;
}
function zd(t, e) {
  if (!t.display)
    return 0;
  const s = dt(t.font, e), i = St(t.padding);
  return (Ze(t.text) ? t.text.length : 1) * s.lineHeight + i.height;
}
function yT(t, e) {
  return Zs(t, {
    scale: e,
    type: "scale"
  });
}
function vT(t, e, s) {
  return Zs(t, {
    tick: s,
    index: e,
    type: "tick"
  });
}
function _T(t, e, s) {
  let i = sc(t);
  return (s && e !== "right" || !s && e === "right") && (i = mT(i)), i;
}
function kT(t, e, s, i) {
  const { top: n, left: a, bottom: o, right: r, chart: l } = t, { chartArea: c, scales: u } = l;
  let d = 0, f, h, m;
  const g = o - n, v = r - a;
  if (t.isHorizontal()) {
    if (h = gt(i, a, r), Ae(s)) {
      const S = Object.keys(s)[0], x = s[S];
      m = u[S].getPixelForValue(x) + g - e;
    } else s === "center" ? m = (c.bottom + c.top) / 2 + g - e : m = Hd(t, s, e);
    f = r - a;
  } else {
    if (Ae(s)) {
      const S = Object.keys(s)[0], x = s[S];
      h = u[S].getPixelForValue(x) - v + e;
    } else s === "center" ? h = (c.left + c.right) / 2 - v + e : h = Hd(t, s, e);
    m = gt(i, o, n), d = s === "left" ? -lt : lt;
  }
  return {
    titleX: h,
    titleY: m,
    maxWidth: f,
    rotation: d
  };
}
class Ci extends Os {
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
    return e = Bt(e, Number.POSITIVE_INFINITY), s = Bt(s, Number.NEGATIVE_INFINITY), i = Bt(i, Number.POSITIVE_INFINITY), n = Bt(n, Number.NEGATIVE_INFINITY), {
      min: Bt(e, i),
      max: Bt(s, n),
      minDefined: rt(e),
      maxDefined: rt(s)
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
      min: Bt(s, Bt(i, s)),
      max: Bt(i, Bt(s, i))
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
    Ke(this.options.beforeUpdate, [
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
    }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = RS(this, a, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = r < this.ticks.length;
    this._convertTicksToLabels(l ? Vd(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), o.display && (o.autoSkip || o.source === "auto") && (this.ticks = cT(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let e = this.options.reverse, s, i;
    this.isHorizontal() ? (s = this.left, i = this.right) : (s = this.top, i = this.bottom, e = !e), this._startPixel = s, this._endPixel = i, this._reversePixels = e, this._length = i - s, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    Ke(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    Ke(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    Ke(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(e) {
    this.chart.notifyPlugins(e, this.getContext()), Ke(this.options[e], [
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
    Ke(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(e) {
    const s = this.options.ticks;
    let i, n, a;
    for (i = 0, n = e.length; i < n; i++)
      a = e[i], a.label = Ke(s.callback, [
        a.value,
        i,
        e
      ], this);
  }
  afterTickToLabelConversion() {
    Ke(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    Ke(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const e = this.options, s = e.ticks, i = jd(this.ticks.length, e.ticks.maxTicksLimit), n = s.minRotation || 0, a = s.maxRotation;
    let o = n, r, l, c;
    if (!this._isVisible() || !s.display || n >= a || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const u = this._getLabelSizes(), d = u.widest.width, f = u.highest.height, h = pt(this.chart.width - d, 0, this.maxWidth);
    r = e.offset ? this.maxWidth / i : h / (i - 1), d + 6 > r && (r = h / (i - (e.offset ? 0.5 : 1)), l = this.maxHeight - mn(e.grid) - s.padding - zd(e.title, this.chart.options.font), c = Math.sqrt(d * d + f * f), o = ec(Math.min(Math.asin(pt((u.highest.height + 6) / r, -1, 1)), Math.asin(pt(l / c, -1, 1)) - Math.asin(pt(f / c, -1, 1)))), o = Math.max(n, Math.min(a, o))), this.labelRotation = o;
  }
  afterCalculateLabelRotation() {
    Ke(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    Ke(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const e = {
      width: 0,
      height: 0
    }, { chart: s, options: { ticks: i, title: n, grid: a } } = this, o = this._isVisible(), r = this.isHorizontal();
    if (o) {
      const l = zd(n, s.options.font);
      if (r ? (e.width = this.maxWidth, e.height = mn(a) + l) : (e.height = this.maxHeight, e.width = mn(a) + l), i.display && this.ticks.length) {
        const { first: c, last: u, widest: d, highest: f } = this._getLabelSizes(), h = i.padding * 2, m = Yt(this.labelRotation), g = Math.cos(m), v = Math.sin(m);
        if (r) {
          const S = i.mirror ? 0 : v * d.width + g * f.height;
          e.height = Math.min(this.maxHeight, e.height + S + h);
        } else {
          const S = i.mirror ? 0 : g * d.width + v * f.height;
          e.width = Math.min(this.maxWidth, e.width + S + h);
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
    Ke(this.options.afterFit, [
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
      Se(e[s].label) && (e.splice(s, 1), i--, s--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let e = this._labelSizes;
    if (!e) {
      const s = this.options.ticks.sampleSize;
      let i = this.ticks;
      s < i.length && (i = Vd(i, s)), this._labelSizes = e = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit);
    }
    return e;
  }
  _computeLabelSizes(e, s, i) {
    const { ctx: n, _longestTextCache: a } = this, o = [], r = [], l = Math.floor(s / jd(s, i));
    let c = 0, u = 0, d, f, h, m, g, v, S, x, C, k, P;
    for (d = 0; d < s; d += l) {
      if (m = e[d].label, g = this._resolveTickFontOptions(d), n.font = v = g.string, S = a[v] = a[v] || {
        data: {},
        gc: []
      }, x = g.lineHeight, C = k = 0, !Se(m) && !Ze(m))
        C = To(n, S.data, S.gc, C, m), k = x;
      else if (Ze(m))
        for (f = 0, h = m.length; f < h; ++f)
          P = m[f], !Se(P) && !Ze(P) && (C = To(n, S.data, S.gc, C, P), k += x);
      o.push(C), r.push(k), c = Math.max(C, c), u = Math.max(k, u);
    }
    bT(a, s);
    const D = o.indexOf(c), R = r.indexOf(u), O = (N) => ({
      width: o[N] || 0,
      height: r[N] || 0
    });
    return {
      first: O(0),
      last: O(s - 1),
      widest: O(D),
      highest: O(R),
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
    return nS(this._alignToPixels ? ri(this.chart, s, 0) : s);
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
      return i.$context || (i.$context = vT(this.getContext(), e, i));
    }
    return this.$context || (this.$context = yT(this.chart.getContext(), this));
  }
  _tickSize() {
    const e = this.options.ticks, s = Yt(this.labelRotation), i = Math.abs(Math.cos(s)), n = Math.abs(Math.sin(s)), a = this._getLabelSizes(), o = e.autoSkipPadding || 0, r = a ? a.widest.width + o : 0, l = a ? a.highest.height + o : 0;
    return this.isHorizontal() ? l * i > r * n ? r / i : l / n : l * n < r * i ? l / i : r / n;
  }
  _isVisible() {
    const e = this.options.display;
    return e !== "auto" ? !!e : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(e) {
    const s = this.axis, i = this.chart, n = this.options, { grid: a, position: o, border: r } = n, l = a.offset, c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), f = mn(a), h = [], m = r.setContext(this.getContext()), g = m.display ? m.width : 0, v = g / 2, S = function(ce) {
      return ri(i, ce, g);
    };
    let x, C, k, P, D, R, O, N, z, J, B, ae;
    if (o === "top")
      x = S(this.bottom), R = this.bottom - f, N = x - v, J = S(e.top) + v, ae = e.bottom;
    else if (o === "bottom")
      x = S(this.top), J = e.top, ae = S(e.bottom) - v, R = x + v, N = this.top + f;
    else if (o === "left")
      x = S(this.right), D = this.right - f, O = x - v, z = S(e.left) + v, B = e.right;
    else if (o === "right")
      x = S(this.left), z = e.left, B = S(e.right) - v, D = x + v, O = this.left + f;
    else if (s === "x") {
      if (o === "center")
        x = S((e.top + e.bottom) / 2 + 0.5);
      else if (Ae(o)) {
        const ce = Object.keys(o)[0], j = o[ce];
        x = S(this.chart.scales[ce].getPixelForValue(j));
      }
      J = e.top, ae = e.bottom, R = x + v, N = R + f;
    } else if (s === "y") {
      if (o === "center")
        x = S((e.left + e.right) / 2);
      else if (Ae(o)) {
        const ce = Object.keys(o)[0], j = o[ce];
        x = S(this.chart.scales[ce].getPixelForValue(j));
      }
      D = x - v, O = D - f, z = e.left, B = e.right;
    }
    const be = me(n.ticks.maxTicksLimit, d), fe = Math.max(1, Math.ceil(d / be));
    for (C = 0; C < d; C += fe) {
      const ce = this.getContext(C), j = a.setContext(ce), $ = r.setContext(ce), oe = j.lineWidth, De = j.color, He = $.dash || [], Ie = $.dashOffset, je = j.tickWidth, Xe = j.tickColor, Qe = j.tickBorderDash || [], st = j.tickBorderDashOffset;
      k = gT(this, C, l), k !== void 0 && (P = ri(i, k, oe), c ? D = O = z = B = P : R = N = J = ae = P, h.push({
        tx1: D,
        ty1: R,
        tx2: O,
        ty2: N,
        x1: z,
        y1: J,
        x2: B,
        y2: ae,
        width: oe,
        color: De,
        borderDash: He,
        borderDashOffset: Ie,
        tickWidth: je,
        tickColor: Xe,
        tickBorderDash: Qe,
        tickBorderDashOffset: st
      }));
    }
    return this._ticksLength = d, this._borderValue = x, h;
  }
  _computeLabelItems(e) {
    const s = this.axis, i = this.options, { position: n, ticks: a } = i, o = this.isHorizontal(), r = this.ticks, { align: l, crossAlign: c, padding: u, mirror: d } = a, f = mn(i.grid), h = f + u, m = d ? -u : h, g = -Yt(this.labelRotation), v = [];
    let S, x, C, k, P, D, R, O, N, z, J, B, ae = "middle";
    if (n === "top")
      D = this.bottom - m, R = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      D = this.top + m, R = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const fe = this._getYAxisLabelAlignment(f);
      R = fe.textAlign, P = fe.x;
    } else if (n === "right") {
      const fe = this._getYAxisLabelAlignment(f);
      R = fe.textAlign, P = fe.x;
    } else if (s === "x") {
      if (n === "center")
        D = (e.top + e.bottom) / 2 + h;
      else if (Ae(n)) {
        const fe = Object.keys(n)[0], ce = n[fe];
        D = this.chart.scales[fe].getPixelForValue(ce) + h;
      }
      R = this._getXAxisLabelAlignment();
    } else if (s === "y") {
      if (n === "center")
        P = (e.left + e.right) / 2 - h;
      else if (Ae(n)) {
        const fe = Object.keys(n)[0], ce = n[fe];
        P = this.chart.scales[fe].getPixelForValue(ce);
      }
      R = this._getYAxisLabelAlignment(f).textAlign;
    }
    s === "y" && (l === "start" ? ae = "top" : l === "end" && (ae = "bottom"));
    const be = this._getLabelSizes();
    for (S = 0, x = r.length; S < x; ++S) {
      C = r[S], k = C.label;
      const fe = a.setContext(this.getContext(S));
      O = this.getPixelForTick(S) + a.labelOffset, N = this._resolveTickFontOptions(S), z = N.lineHeight, J = Ze(k) ? k.length : 1;
      const ce = J / 2, j = fe.color, $ = fe.textStrokeColor, oe = fe.textStrokeWidth;
      let De = R;
      o ? (P = O, R === "inner" && (S === x - 1 ? De = this.options.reverse ? "left" : "right" : S === 0 ? De = this.options.reverse ? "right" : "left" : De = "center"), n === "top" ? c === "near" || g !== 0 ? B = -J * z + z / 2 : c === "center" ? B = -be.highest.height / 2 - ce * z + z : B = -be.highest.height + z / 2 : c === "near" || g !== 0 ? B = z / 2 : c === "center" ? B = be.highest.height / 2 - ce * z : B = be.highest.height - J * z, d && (B *= -1), g !== 0 && !fe.showLabelBackdrop && (P += z / 2 * Math.sin(g))) : (D = O, B = (1 - J) * z / 2);
      let He;
      if (fe.showLabelBackdrop) {
        const Ie = St(fe.backdropPadding), je = be.heights[S], Xe = be.widths[S];
        let Qe = B - Ie.top, st = 0 - Ie.left;
        switch (ae) {
          case "middle":
            Qe -= je / 2;
            break;
          case "bottom":
            Qe -= je;
            break;
        }
        switch (R) {
          case "center":
            st -= Xe / 2;
            break;
          case "right":
            st -= Xe;
            break;
          case "inner":
            S === x - 1 ? st -= Xe : S > 0 && (st -= Xe / 2);
            break;
        }
        He = {
          left: st,
          top: Qe,
          width: Xe + Ie.width,
          height: je + Ie.height,
          color: fe.backdropColor
        };
      }
      v.push({
        label: k,
        font: N,
        textOffset: B,
        options: {
          rotation: g,
          color: j,
          strokeColor: $,
          strokeWidth: oe,
          textAlign: De,
          textBaseline: ae,
          translation: [
            P,
            D
          ],
          backdrop: He
        }
      });
    }
    return v;
  }
  _getXAxisLabelAlignment() {
    const { position: e, ticks: s } = this.options;
    if (-Yt(this.labelRotation))
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
    this.isHorizontal() ? (c = ri(e, this.left, o) - o / 2, u = ri(e, this.right, r) + r / 2, d = f = l) : (d = ri(e, this.top, o) - o / 2, f = ri(e, this.bottom, r) + r / 2, c = u = l), s.save(), s.lineWidth = a.width, s.strokeStyle = a.color, s.beginPath(), s.moveTo(c, d), s.lineTo(u, f), s.stroke(), s.restore();
  }
  drawLabels(e) {
    if (!this.options.ticks.display)
      return;
    const i = this.ctx, n = this._computeLabelArea();
    n && zo(i, n);
    const a = this.getLabelItems(e);
    for (const o of a) {
      const r = o.options, l = o.font, c = o.label, u = o.textOffset;
      xi(i, c, 0, u, l, r);
    }
    n && qo(i);
  }
  drawTitle() {
    const { ctx: e, options: { position: s, title: i, reverse: n } } = this;
    if (!i.display)
      return;
    const a = dt(i.font), o = St(i.padding), r = i.align;
    let l = a.lineHeight / 2;
    s === "bottom" || s === "center" || Ae(s) ? (l += o.bottom, Ze(i.text) && (l += a.lineHeight * (i.text.length - 1))) : l += o.top;
    const { titleX: c, titleY: u, maxWidth: d, rotation: f } = kT(this, l, s, r);
    xi(e, i.text, 0, 0, a, {
      color: i.color,
      maxWidth: d,
      rotation: f,
      textAlign: _T(r, s, n),
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
    const e = this.options, s = e.ticks && e.ticks.z || 0, i = me(e.grid && e.grid.z, -1), n = me(e.border && e.border.z, 0);
    return !this._isVisible() || this.draw !== Ci.prototype.draw ? [
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
    return dt(s.font);
  }
  _maxDigits() {
    const e = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / e;
  }
}
class Fa {
  constructor(e, s, i) {
    this.type = e, this.scope = s, this.override = i, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(e) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, e.prototype);
  }
  register(e) {
    const s = Object.getPrototypeOf(e);
    let i;
    xT(s) && (i = this.register(s));
    const n = this.items, a = e.id, o = this.scope + "." + a;
    if (!a)
      throw new Error("class does not have id: " + e);
    return a in n || (n[a] = e, ST(e, o, i), this.override && et.override(e.id, e.overrides)), o;
  }
  get(e) {
    return this.items[e];
  }
  unregister(e) {
    const s = this.items, i = e.id, n = this.scope;
    i in s && delete s[i], n && i in et[n] && (delete et[n][i], this.override && delete Ti[i]);
  }
}
function ST(t, e, s) {
  const i = ta(/* @__PURE__ */ Object.create(null), [
    s ? et.get(s) : {},
    et.get(e),
    t.defaults
  ]);
  et.set(e, i), t.defaultRoutes && TT(e, t.defaultRoutes), t.descriptors && et.describe(e, t.descriptors);
}
function TT(t, e) {
  Object.keys(e).forEach((s) => {
    const i = s.split("."), n = i.pop(), a = [
      t
    ].concat(i).join("."), o = e[s].split("."), r = o.pop(), l = o.join(".");
    et.route(a, n, l, r);
  });
}
function xT(t) {
  return "id" in t && "defaults" in t;
}
class AT {
  constructor() {
    this.controllers = new Fa(Zt, "datasets", !0), this.elements = new Fa(Os, "elements"), this.plugins = new Fa(Object, "plugins"), this.scales = new Fa(Ci, "scales"), this._typedRegistries = [
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
      i || a.isForType(n) || a === this.plugins && n.id ? this._exec(e, a, n) : Ue(n, (o) => {
        const r = i || this._getRegistryForType(o);
        this._exec(e, r, o);
      });
    });
  }
  _exec(e, s, i) {
    const n = Zl(e);
    Ke(i["before" + n], [], i), s[e](i), Ke(i["after" + n], [], i);
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
var ls = /* @__PURE__ */ new AT();
class CT {
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
      if (Ke(r, l, o) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    Se(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(e) {
    if (this._cache)
      return this._cache;
    const s = this._cache = this._createDescriptors(e);
    return this._notifyStateChanges(e), s;
  }
  _createDescriptors(e, s) {
    const i = e && e.config, n = me(i.options && i.options.plugins, {}), a = PT(i);
    return n === !1 && !s ? [] : RT(e, a, n, s);
  }
  _notifyStateChanges(e) {
    const s = this._oldCache || [], i = this._cache, n = (a, o) => a.filter((r) => !o.some((l) => r.plugin.id === l.plugin.id));
    this._notify(n(s, i), e, "stop"), this._notify(n(i, s), e, "start");
  }
}
function PT(t) {
  const e = {}, s = [], i = Object.keys(ls.plugins.items);
  for (let a = 0; a < i.length; a++)
    s.push(ls.getPlugin(i[a]));
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
function wT(t, e) {
  return !e && t === !1 ? null : t === !0 ? {} : t;
}
function RT(t, { plugins: e, localIds: s }, i, n) {
  const a = [], o = t.getContext();
  for (const r of e) {
    const l = r.id, c = wT(i[l], n);
    c !== null && a.push({
      plugin: r,
      options: MT(t.config, {
        plugin: r,
        local: s[l]
      }, c, o)
    });
  }
  return a;
}
function MT(t, { plugin: e, local: s }, i, n) {
  const a = t.pluginScopeKeys(e), o = t.getOptionScopes(i, a);
  return s && e.defaults && o.push(e.defaults), t.createResolver(o, n, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function ml(t, e) {
  const s = et.datasets[t] || {};
  return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || s.indexAxis || "x";
}
function DT(t, e) {
  let s = t;
  return t === "_index_" ? s = e : t === "_value_" && (s = e === "x" ? "y" : "x"), s;
}
function IT(t, e) {
  return t === e ? "_index_" : "_value_";
}
function qd(t) {
  if (t === "x" || t === "y" || t === "r")
    return t;
}
function ET(t) {
  if (t === "top" || t === "bottom")
    return "x";
  if (t === "left" || t === "right")
    return "y";
}
function gl(t, ...e) {
  if (qd(t))
    return t;
  for (const s of e) {
    const i = s.axis || ET(s.position) || t.length > 1 && qd(t[0].toLowerCase());
    if (i)
      return i;
  }
  throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`);
}
function Gd(t, e, s) {
  if (s[e + "AxisID"] === t)
    return {
      axis: e
    };
}
function OT(t, e) {
  if (e.data && e.data.datasets) {
    const s = e.data.datasets.filter((i) => i.xAxisID === t || i.yAxisID === t);
    if (s.length)
      return Gd(t, "x", s[0]) || Gd(t, "y", s[0]);
  }
  return {};
}
function NT(t, e) {
  const s = Ti[t.type] || {
    scales: {}
  }, i = e.scales || {}, n = ml(t.type, e), a = /* @__PURE__ */ Object.create(null);
  return Object.keys(i).forEach((o) => {
    const r = i[o];
    if (!Ae(r))
      return console.error(`Invalid scale configuration for scale: ${o}`);
    if (r._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${o}`);
    const l = gl(o, r, OT(o, t), et.scales[r.type]), c = IT(l, n), u = s.scales || {};
    a[o] = Fn(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      r,
      u[l],
      u[c]
    ]);
  }), t.data.datasets.forEach((o) => {
    const r = o.type || t.type, l = o.indexAxis || ml(r, e), u = (Ti[r] || {}).scales || {};
    Object.keys(u).forEach((d) => {
      const f = DT(d, l), h = o[f + "AxisID"] || f;
      a[h] = a[h] || /* @__PURE__ */ Object.create(null), Fn(a[h], [
        {
          axis: f
        },
        i[h],
        u[d]
      ]);
    });
  }), Object.keys(a).forEach((o) => {
    const r = a[o];
    Fn(r, [
      et.scales[r.type],
      et.scale
    ]);
  }), a;
}
function em(t) {
  const e = t.options || (t.options = {});
  e.plugins = me(e.plugins, {}), e.scales = NT(t, e);
}
function tm(t) {
  return t = t || {}, t.datasets = t.datasets || [], t.labels = t.labels || [], t;
}
function LT(t) {
  return t = t || {}, t.data = tm(t.data), em(t), t;
}
const Kd = /* @__PURE__ */ new Map(), sm = /* @__PURE__ */ new Set();
function Wa(t, e) {
  let s = Kd.get(t);
  return s || (s = e(), Kd.set(t, s), sm.add(s)), s;
}
const gn = (t, e, s) => {
  const i = Xs(e, s);
  i !== void 0 && t.add(i);
};
class UT {
  constructor(e) {
    this._config = LT(e), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = tm(e);
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
    this.clearCache(), em(e);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(e) {
    return Wa(e, () => [
      [
        `datasets.${e}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(e, s) {
    return Wa(`${e}.transition.${s}`, () => [
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
    return Wa(`${e}-${s}`, () => [
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
    return Wa(`${i}-plugin-${s}`, () => [
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
      e && (l.add(e), u.forEach((d) => gn(l, e, d))), u.forEach((d) => gn(l, n, d)), u.forEach((d) => gn(l, Ti[a] || {}, d)), u.forEach((d) => gn(l, et, d)), u.forEach((d) => gn(l, fl, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), sm.has(s) && o.set(s, c), c;
  }
  chartOptionScopes() {
    const { options: e, type: s } = this;
    return [
      e,
      Ti[s] || {},
      et.datasets[s] || {},
      {
        type: s
      },
      et,
      fl
    ];
  }
  resolveNamedOptions(e, s, i, n = [
    ""
  ]) {
    const a = {
      $shared: !0
    }, { resolver: o, subPrefixes: r } = $d(this._resolverCache, e, n);
    let l = o;
    if (WT(o, s)) {
      a.$shared = !1, i = Qs(i) ? i() : i;
      const c = this.createResolver(e, i, r);
      l = Zi(o, i, c);
    }
    for (const c of s)
      a[c] = l[c];
    return a;
  }
  createResolver(e, s, i = [
    ""
  ], n) {
    const { resolver: a } = $d(this._resolverCache, e, i);
    return Ae(s) ? Zi(a, s, void 0, n) : a;
  }
}
function $d(t, e, s) {
  let i = t.get(e);
  i || (i = /* @__PURE__ */ new Map(), t.set(e, i));
  const n = s.join();
  let a = i.get(n);
  return a || (a = {
    resolver: ac(e, s),
    subPrefixes: s.filter((r) => !r.toLowerCase().includes("hover"))
  }, i.set(n, a)), a;
}
const FT = (t) => Ae(t) && Object.getOwnPropertyNames(t).some((e) => Qs(t[e]));
function WT(t, e) {
  const { isScriptable: s, isIndexable: i } = Op(t);
  for (const n of e) {
    const a = s(n), o = i(n), r = (o || a) && t[n];
    if (a && (Qs(r) || FT(r)) || o && Ze(r))
      return !0;
  }
  return !1;
}
var BT = "4.5.1";
const HT = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Jd(t, e) {
  return t === "top" || t === "bottom" || HT.indexOf(t) === -1 && e === "x";
}
function Yd(t, e) {
  return function(s, i) {
    return s[t] === i[t] ? s[e] - i[e] : s[t] - i[t];
  };
}
function Xd(t) {
  const e = t.chart, s = e.options.animation;
  e.notifyPlugins("afterRender"), Ke(s && s.onComplete, [
    t
  ], e);
}
function jT(t) {
  const e = t.chart, s = e.options.animation;
  Ke(s && s.onProgress, [
    t
  ], e);
}
function im(t) {
  return lc() && typeof t == "string" ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t;
}
const io = {}, Qd = (t) => {
  const e = im(t);
  return Object.values(io).filter((s) => s.canvas === e).pop();
};
function VT(t, e, s) {
  const i = Object.keys(t);
  for (const n of i) {
    const a = +n;
    if (a >= e) {
      const o = t[n];
      delete t[n], (s > 0 || a > e) && (t[a + s] = o);
    }
  }
}
function zT(t, e, s, i) {
  return !s || t.type === "mouseout" ? null : i ? e : t;
}
class Be {
  static register(...e) {
    ls.add(...e), Zd();
  }
  static unregister(...e) {
    ls.remove(...e), Zd();
  }
  constructor(e, s) {
    const i = this.config = new UT(s), n = im(e), a = Qd(n);
    if (a)
      throw new Error("Canvas is already in use. Chart with ID '" + a.id + "' must be destroyed before the canvas with ID '" + a.canvas.id + "' can be reused.");
    const o = i.createResolver(i.chartOptionScopes(), this.getContext());
    this.platform = new (i.platform || lT(n))(), this.platform.updateConfig(i);
    const r = this.platform.acquireContext(n, o.aspectRatio), l = r && r.canvas, c = l && l.height, u = l && l.width;
    if (this.id = qk(), this.ctx = r, this.canvas = l, this.width = u, this.height = c, this._options = o, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new CT(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = lS((d) => this.update(d), o.resizeDelay || 0), this._dataChanges = [], io[this.id] = this, !r || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    _s.listen(this, "complete", Xd), _s.listen(this, "progress", jT), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: e, maintainAspectRatio: s }, width: i, height: n, _aspectRatio: a } = this;
    return Se(e) ? s && a ? a : n ? i / n : null : e;
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
    return ls;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : kd(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return yd(this.canvas, this.ctx), this;
  }
  stop() {
    return _s.stop(this), this;
  }
  resize(e, s) {
    _s.running(this) ? this._resizeBeforeDraw = {
      width: e,
      height: s
    } : this._resize(e, s);
  }
  _resize(e, s) {
    const i = this.options, n = this.canvas, a = i.maintainAspectRatio && this.aspectRatio, o = this.platform.getMaximumSize(n, e, s, a), r = i.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = o.width, this.height = o.height, this._aspectRatio = this.aspectRatio, kd(this, r, !0) && (this.notifyPlugins("resize", {
      size: o
    }), Ke(i.onResize, [
      this,
      o
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const s = this.options.scales || {};
    Ue(s, (i, n) => {
      i.id = n;
    });
  }
  buildOrUpdateScales() {
    const e = this.options, s = e.scales, i = this.scales, n = Object.keys(i).reduce((o, r) => (o[r] = !1, o), {});
    let a = [];
    s && (a = a.concat(Object.keys(s).map((o) => {
      const r = s[o], l = gl(o, r), c = l === "r", u = l === "x";
      return {
        options: r,
        dposition: c ? "chartArea" : u ? "bottom" : "left",
        dtype: c ? "radialLinear" : u ? "category" : "linear"
      };
    }))), Ue(a, (o) => {
      const r = o.options, l = r.id, c = gl(l, r), u = me(r.type, o.dtype);
      (r.position === void 0 || Jd(r.position, c) !== Jd(o.dposition)) && (r.position = o.dposition), n[l] = !0;
      let d = null;
      if (l in i && i[l].type === u)
        d = i[l];
      else {
        const f = ls.getScale(u);
        d = new f({
          id: l,
          type: u,
          ctx: this.ctx,
          chart: this
        }), i[d.id] = d;
      }
      d.init(r, e);
    }), Ue(n, (o, r) => {
      o || delete i[r];
    }), Ue(i, (o) => {
      _t.configure(this, o, o.options), _t.addBox(this, o);
    });
  }
  _updateMetasets() {
    const e = this._metasets, s = this.data.datasets.length, i = e.length;
    if (e.sort((n, a) => n.index - a.index), i > s) {
      for (let n = s; n < i; ++n)
        this._destroyDatasetMeta(n);
      e.splice(s, i - s);
    }
    this._sortedMetasets = e.slice(0).sort(Yd("order", "index"));
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
      if (o.type && o.type !== r && (this._destroyDatasetMeta(i), o = this.getDatasetMeta(i)), o.type = r, o.indexAxis = a.indexAxis || ml(r, this.options), o.order = a.order || 0, o.index = i, o.label = "" + a.label, o.visible = this.isDatasetVisible(i), o.controller)
        o.controller.updateIndex(i), o.controller.linkScales();
      else {
        const l = ls.getController(r), { datasetElementType: c, dataElementType: u } = et.datasets[r];
        Object.assign(l, {
          dataElementType: ls.getElement(u),
          datasetElementType: c && ls.getElement(c)
        }), o.controller = new l(this, i), e.push(o.controller);
      }
    }
    return this._updateMetasets(), e;
  }
  _resetElements() {
    Ue(this.data.datasets, (e, s) => {
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
    o = this._minPadding = i.layout.autoPadding ? o : 0, this._updateLayout(o), n || Ue(a, (c) => {
      c.reset();
    }), this._updateDatasets(e), this.notifyPlugins("afterUpdate", {
      mode: e
    }), this._layers.sort(Yd("z", "_idx"));
    const { _active: r, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : r.length && this._updateHoverStyles(r, r, !0), this.render();
  }
  _updateScales() {
    Ue(this.scales, (e) => {
      _t.removeBox(this, e);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const e = this.options, s = new Set(Object.keys(this._listeners)), i = new Set(e.events);
    (!cd(s, i) || !!this._responsiveListeners !== e.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: e } = this, s = this._getUniformDataChanges() || [];
    for (const { method: i, start: n, count: a } of s) {
      const o = i === "_removeElements" ? -a : a;
      VT(e, n, o);
    }
  }
  _getUniformDataChanges() {
    const e = this._dataChanges;
    if (!e || !e.length)
      return;
    this._dataChanges = [];
    const s = this.data.datasets.length, i = (a) => new Set(e.filter((o) => o[0] === a).map((o, r) => r + "," + o.splice(1).join(","))), n = i(0);
    for (let a = 1; a < s; a++)
      if (!cd(n, i(a)))
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
    _t.update(this, this.width, this.height, e);
    const s = this.chartArea, i = s.width <= 0 || s.height <= 0;
    this._layers = [], Ue(this.boxes, (n) => {
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
        this._updateDataset(s, Qs(e) ? e({
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
    }) !== !1 && (_s.has(this) ? this.attached && !_s.running(this) && _s.start(this) : (this.draw(), Xd({
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
    }, n = qp(this, e);
    this.notifyPlugins("beforeDatasetDraw", i) !== !1 && (n && zo(s, n), e.controller.draw(), n && qo(s), i.cancelable = !1, this.notifyPlugins("afterDatasetDraw", i));
  }
  isPointInArea(e) {
    return Rs(e, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(e, s, i, n) {
    const a = H0.modes[s];
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
    return this.$context || (this.$context = Zs(null, {
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
    sa(s) ? (a.data[s].hidden = !i, this.update()) : (this.setDatasetVisibility(e, i), o.update(a, {
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
    for (this.stop(), _s.remove(this), e = 0, s = this.data.datasets.length; e < s; ++e)
      this._destroyDatasetMeta(e);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: e, ctx: s } = this;
    this._stop(), this.config.clearCache(), e && (this.unbindEvents(), yd(e, s), this.platform.releaseContext(s), this.canvas = null, this.ctx = null), delete io[this.id], this.notifyPlugins("afterDestroy");
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
    Ue(this.options.events, (a) => i(a, n));
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
    Ue(this._listeners, (e, s) => {
      this.platform.removeEventListener(this, s, e);
    }), this._listeners = {}, Ue(this._responsiveListeners, (e, s) => {
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
    !_o(i, s) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, s));
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
    const { _active: n = [], options: a } = this, o = s, r = this._getActiveElements(e, n, i, o), l = Xk(e), c = zT(e, this._lastEvent, i, l);
    i && (this._lastEvent = null, Ke(a.onHover, [
      e,
      r,
      this
    ], this), l && Ke(a.onClick, [
      e,
      r,
      this
    ], this));
    const u = !_o(r, n);
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
K(Be, "defaults", et), K(Be, "instances", io), K(Be, "overrides", Ti), K(Be, "registry", ls), K(Be, "version", BT), K(Be, "getChart", Qd);
function Zd() {
  return Ue(Be.instances, (t) => t._plugins.invalidate());
}
function qT(t, e, s) {
  const { startAngle: i, x: n, y: a, outerRadius: o, innerRadius: r, options: l } = e, { borderWidth: c, borderJoinStyle: u } = l, d = Math.min(c / o, bt(i - s));
  if (t.beginPath(), t.arc(n, a, o - c / 2, i + d / 2, s - d / 2), r > 0) {
    const f = Math.min(c / r, bt(i - s));
    t.arc(n, a, r + c / 2, s - f / 2, i + f / 2, !0);
  } else {
    const f = Math.min(c / 2, o * bt(i - s));
    if (u === "round")
      t.arc(n, a, f, s - Me / 2, i + Me / 2, !0);
    else if (u === "bevel") {
      const h = 2 * f * f, m = -h * Math.cos(s + Me / 2) + n, g = -h * Math.sin(s + Me / 2) + a, v = h * Math.cos(i + Me / 2) + n, S = h * Math.sin(i + Me / 2) + a;
      t.lineTo(m, g), t.lineTo(v, S);
    }
  }
  t.closePath(), t.moveTo(0, 0), t.rect(0, 0, t.canvas.width, t.canvas.height), t.clip("evenodd");
}
function GT(t, e, s) {
  const { startAngle: i, pixelMargin: n, x: a, y: o, outerRadius: r, innerRadius: l } = e;
  let c = n / r;
  t.beginPath(), t.arc(a, o, r, i - c, s + c), l > n ? (c = n / l, t.arc(a, o, l, s + c, i - c, !0)) : t.arc(a, o, n, s + lt, i - lt), t.closePath(), t.clip();
}
function KT(t) {
  return nc(t, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function $T(t, e, s, i) {
  const n = KT(t.options.borderRadius), a = (s - e) / 2, o = Math.min(a, i * e / 2), r = (l) => {
    const c = (s - Math.min(a, l)) * i / 2;
    return pt(l, 0, Math.min(a, c));
  };
  return {
    outerStart: r(n.outerStart),
    outerEnd: r(n.outerEnd),
    innerStart: pt(n.innerStart, 0, o),
    innerEnd: pt(n.innerEnd, 0, o)
  };
}
function Ei(t, e, s, i) {
  return {
    x: s + t * Math.cos(e),
    y: i + t * Math.sin(e)
  };
}
function Co(t, e, s, i, n, a) {
  const { x: o, y: r, startAngle: l, pixelMargin: c, innerRadius: u } = e, d = Math.max(e.outerRadius + i + s - c, 0), f = u > 0 ? u + i + s + c : 0;
  let h = 0;
  const m = n - l;
  if (i) {
    const fe = u > 0 ? u - i : 0, ce = d > 0 ? d - i : 0, j = (fe + ce) / 2, $ = j !== 0 ? m * j / (j + i) : m;
    h = (m - $) / 2;
  }
  const g = Math.max(1e-3, m * d - s / Me) / d, v = (m - g) / 2, S = l + v + h, x = n - v - h, { outerStart: C, outerEnd: k, innerStart: P, innerEnd: D } = $T(e, f, d, x - S), R = d - C, O = d - k, N = S + C / R, z = x - k / O, J = f + P, B = f + D, ae = S + P / J, be = x - D / B;
  if (t.beginPath(), a) {
    const fe = (N + z) / 2;
    if (t.arc(o, r, d, N, fe), t.arc(o, r, d, fe, z), k > 0) {
      const oe = Ei(O, z, o, r);
      t.arc(oe.x, oe.y, k, z, x + lt);
    }
    const ce = Ei(B, x, o, r);
    if (t.lineTo(ce.x, ce.y), D > 0) {
      const oe = Ei(B, be, o, r);
      t.arc(oe.x, oe.y, D, x + lt, be + Math.PI);
    }
    const j = (x - D / f + (S + P / f)) / 2;
    if (t.arc(o, r, f, x - D / f, j, !0), t.arc(o, r, f, j, S + P / f, !0), P > 0) {
      const oe = Ei(J, ae, o, r);
      t.arc(oe.x, oe.y, P, ae + Math.PI, S - lt);
    }
    const $ = Ei(R, S, o, r);
    if (t.lineTo($.x, $.y), C > 0) {
      const oe = Ei(R, N, o, r);
      t.arc(oe.x, oe.y, C, S - lt, N);
    }
  } else {
    t.moveTo(o, r);
    const fe = Math.cos(N) * d + o, ce = Math.sin(N) * d + r;
    t.lineTo(fe, ce);
    const j = Math.cos(z) * d + o, $ = Math.sin(z) * d + r;
    t.lineTo(j, $);
  }
  t.closePath();
}
function JT(t, e, s, i, n) {
  const { fullCircles: a, startAngle: o, circumference: r } = e;
  let l = e.endAngle;
  if (a) {
    Co(t, e, s, i, l, n);
    for (let c = 0; c < a; ++c)
      t.fill();
    isNaN(r) || (l = o + (r % Ye || Ye));
  }
  return Co(t, e, s, i, l, n), t.fill(), l;
}
function YT(t, e, s, i, n) {
  const { fullCircles: a, startAngle: o, circumference: r, options: l } = e, { borderWidth: c, borderJoinStyle: u, borderDash: d, borderDashOffset: f, borderRadius: h } = l, m = l.borderAlign === "inner";
  if (!c)
    return;
  t.setLineDash(d || []), t.lineDashOffset = f, m ? (t.lineWidth = c * 2, t.lineJoin = u || "round") : (t.lineWidth = c, t.lineJoin = u || "bevel");
  let g = e.endAngle;
  if (a) {
    Co(t, e, s, i, g, n);
    for (let v = 0; v < a; ++v)
      t.stroke();
    isNaN(r) || (g = o + (r % Ye || Ye));
  }
  m && GT(t, e, g), l.selfJoin && g - o >= Me && h === 0 && u !== "miter" && qT(t, e, g), a || (Co(t, e, s, i, g, n), t.stroke());
}
class Cn extends Os {
  constructor(s) {
    super();
    K(this, "circumference");
    K(this, "endAngle");
    K(this, "fullCircles");
    K(this, "innerRadius");
    K(this, "outerRadius");
    K(this, "pixelMargin");
    K(this, "startAngle");
    this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, s && Object.assign(this, s);
  }
  inRange(s, i, n) {
    const a = this.getProps([
      "x",
      "y"
    ], n), { angle: o, distance: r } = xp(a, {
      x: s,
      y: i
    }), { startAngle: l, endAngle: c, innerRadius: u, outerRadius: d, circumference: f } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], n), h = (this.options.spacing + this.options.borderWidth) / 2, m = me(f, c - l), g = ia(o, l, c) && l !== c, v = m >= Ye || g, S = Ps(r, u + h, d + h);
    return v && S;
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
    if (this.pixelMargin = i.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = n > Ye ? Math.floor(n / Ye) : 0, n === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    s.save();
    const l = (this.startAngle + this.endAngle) / 2;
    s.translate(Math.cos(l) * a, Math.sin(l) * a);
    const c = 1 - Math.sin(Math.min(Me, n || 0)), u = a * c;
    s.fillStyle = i.backgroundColor, s.strokeStyle = i.borderColor, JT(s, this, u, o, r), YT(s, this, u, o, r), s.restore();
  }
}
K(Cn, "id", "arc"), K(Cn, "defaults", {
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
}), K(Cn, "defaultRoutes", {
  backgroundColor: "backgroundColor"
}), K(Cn, "descriptors", {
  _scriptable: !0,
  _indexable: (s) => s !== "borderDash"
});
function nm(t, e, s = e) {
  t.lineCap = me(s.borderCapStyle, e.borderCapStyle), t.setLineDash(me(s.borderDash, e.borderDash)), t.lineDashOffset = me(s.borderDashOffset, e.borderDashOffset), t.lineJoin = me(s.borderJoinStyle, e.borderJoinStyle), t.lineWidth = me(s.borderWidth, e.borderWidth), t.strokeStyle = me(s.borderColor, e.borderColor);
}
function XT(t, e, s) {
  t.lineTo(s.x, s.y);
}
function QT(t) {
  return t.stepped ? _S : t.tension || t.cubicInterpolationMode === "monotone" ? kS : XT;
}
function am(t, e, s = {}) {
  const i = t.length, { start: n = 0, end: a = i - 1 } = s, { start: o, end: r } = e, l = Math.max(n, o), c = Math.min(a, r), u = n < o && a < o || n > r && a > r;
  return {
    count: i,
    start: l,
    loop: e.loop,
    ilen: c < l && !u ? i + c - l : c - l
  };
}
function ZT(t, e, s, i) {
  const { points: n, options: a } = e, { count: o, start: r, loop: l, ilen: c } = am(n, s, i), u = QT(a);
  let { move: d = !0, reverse: f } = i || {}, h, m, g;
  for (h = 0; h <= c; ++h)
    m = n[(r + (f ? c - h : h)) % o], !m.skip && (d ? (t.moveTo(m.x, m.y), d = !1) : u(t, g, m, f, a.stepped), g = m);
  return l && (m = n[(r + (f ? c : 0)) % o], u(t, g, m, f, a.stepped)), !!l;
}
function ex(t, e, s, i) {
  const n = e.points, { count: a, start: o, ilen: r } = am(n, s, i), { move: l = !0, reverse: c } = i || {};
  let u = 0, d = 0, f, h, m, g, v, S;
  const x = (k) => (o + (c ? r - k : k)) % a, C = () => {
    g !== v && (t.lineTo(u, v), t.lineTo(u, g), t.lineTo(u, S));
  };
  for (l && (h = n[x(0)], t.moveTo(h.x, h.y)), f = 0; f <= r; ++f) {
    if (h = n[x(f)], h.skip)
      continue;
    const k = h.x, P = h.y, D = k | 0;
    D === m ? (P < g ? g = P : P > v && (v = P), u = (d * u + k) / ++d) : (C(), t.lineTo(k, P), m = D, d = 0, g = v = P), S = P;
  }
  C();
}
function bl(t) {
  const e = t.options, s = e.borderDash && e.borderDash.length;
  return !t._decimated && !t._loop && !e.tension && e.cubicInterpolationMode !== "monotone" && !e.stepped && !s ? ex : ZT;
}
function tx(t) {
  return t.stepped ? ZS : t.tension || t.cubicInterpolationMode === "monotone" ? e0 : fi;
}
function sx(t, e, s, i) {
  let n = e._path;
  n || (n = e._path = new Path2D(), e.path(n, s, i) && n.closePath()), nm(t, e.options), t.stroke(n);
}
function ix(t, e, s, i) {
  const { segments: n, options: a } = e, o = bl(e);
  for (const r of n)
    nm(t, a, r.style), t.beginPath(), o(t, e, r, {
      start: s,
      end: s + i - 1
    }) && t.closePath(), t.stroke();
}
const nx = typeof Path2D == "function";
function ax(t, e, s, i) {
  nx && !e.options.segment ? sx(t, e, s, i) : ix(t, e, s, i);
}
class Gs extends Os {
  constructor(e) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, e && Object.assign(this, e);
  }
  updateControlPoints(e, s) {
    const i = this.options;
    if ((i.tension || i.cubicInterpolationMode === "monotone") && !i.stepped && !this._pointsUpdated) {
      const n = i.spanGaps ? this._loop : this._fullLoop;
      qS(this._points, i, e, n, s), this._pointsUpdated = !0;
    }
  }
  set points(e) {
    this._points = e, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = o0(this, this.options.segment));
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
    const i = this.options, n = e[s], a = this.points, o = zp(this, {
      property: s,
      start: n,
      end: n
    });
    if (!o.length)
      return;
    const r = [], l = tx(i);
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
    return bl(this)(e, this, s, i);
  }
  path(e, s, i) {
    const n = this.segments, a = bl(this);
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
    (this.points || []).length && a.borderWidth && (e.save(), ax(e, this, i, n), e.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
K(Gs, "id", "line"), K(Gs, "defaults", {
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
}), K(Gs, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), K(Gs, "descriptors", {
  _scriptable: !0,
  _indexable: (e) => e !== "borderDash" && e !== "fill"
});
function ef(t, e, s, i) {
  const n = t.options, { [s]: a } = t.getProps([
    s
  ], i);
  return Math.abs(e - a) < n.radius + n.hitRadius;
}
class no extends Os {
  constructor(s) {
    super();
    K(this, "parsed");
    K(this, "skip");
    K(this, "stop");
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
    return ef(this, s, "x", i);
  }
  inYRange(s, i) {
    return ef(this, s, "y", i);
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
    this.skip || n.radius < 0.1 || !Rs(this, i, this.size(n) / 2) || (s.strokeStyle = n.borderColor, s.lineWidth = n.borderWidth, s.fillStyle = n.backgroundColor, hl(s, n, this.x, this.y));
  }
  getRange() {
    const s = this.options || {};
    return s.radius + s.hitRadius;
  }
}
K(no, "id", "point"), /**
* @type {any}
*/
K(no, "defaults", {
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
K(no, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function om(t, e) {
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
function Ks(t, e, s, i) {
  return t ? 0 : pt(e, s, i);
}
function ox(t, e, s) {
  const i = t.options.borderWidth, n = t.borderSkipped, a = Ep(i);
  return {
    t: Ks(n.top, a.top, 0, s),
    r: Ks(n.right, a.right, 0, e),
    b: Ks(n.bottom, a.bottom, 0, s),
    l: Ks(n.left, a.left, 0, e)
  };
}
function rx(t, e, s) {
  const { enableBorderRadius: i } = t.getProps([
    "enableBorderRadius"
  ]), n = t.options.borderRadius, a = ki(n), o = Math.min(e, s), r = t.borderSkipped, l = i || Ae(n);
  return {
    topLeft: Ks(!l || r.top || r.left, a.topLeft, 0, o),
    topRight: Ks(!l || r.top || r.right, a.topRight, 0, o),
    bottomLeft: Ks(!l || r.bottom || r.left, a.bottomLeft, 0, o),
    bottomRight: Ks(!l || r.bottom || r.right, a.bottomRight, 0, o)
  };
}
function lx(t) {
  const e = om(t), s = e.right - e.left, i = e.bottom - e.top, n = ox(t, s / 2, i / 2), a = rx(t, s / 2, i / 2);
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
function Lr(t, e, s, i) {
  const n = e === null, a = s === null, r = t && !(n && a) && om(t, i);
  return r && (n || Ps(e, r.left, r.right)) && (a || Ps(s, r.top, r.bottom));
}
function cx(t) {
  return t.topLeft || t.topRight || t.bottomLeft || t.bottomRight;
}
function ux(t, e) {
  t.rect(e.x, e.y, e.w, e.h);
}
function Ur(t, e, s = {}) {
  const i = t.x !== s.x ? -e : 0, n = t.y !== s.y ? -e : 0, a = (t.x + t.w !== s.x + s.w ? e : 0) - i, o = (t.y + t.h !== s.y + s.h ? e : 0) - n;
  return {
    x: t.x + i,
    y: t.y + n,
    w: t.w + a,
    h: t.h + o,
    radius: t.radius
  };
}
class ao extends Os {
  constructor(e) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, e && Object.assign(this, e);
  }
  draw(e) {
    const { inflateAmount: s, options: { borderColor: i, backgroundColor: n } } = this, { inner: a, outer: o } = lx(this), r = cx(o.radius) ? na : ux;
    e.save(), (o.w !== a.w || o.h !== a.h) && (e.beginPath(), r(e, Ur(o, s, a)), e.clip(), r(e, Ur(a, -s, o)), e.fillStyle = i, e.fill("evenodd")), e.beginPath(), r(e, Ur(a, s)), e.fillStyle = n, e.fill(), e.restore();
  }
  inRange(e, s, i) {
    return Lr(this, e, s, i);
  }
  inXRange(e, s) {
    return Lr(this, e, null, s);
  }
  inYRange(e, s) {
    return Lr(this, null, e, s);
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
K(ao, "id", "bar"), K(ao, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), K(ao, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
var dx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcElement: Cn,
  BarElement: ao,
  LineElement: Gs,
  PointElement: no
});
const yl = [
  "rgb(54, 162, 235)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
  // grey
], tf = /* @__PURE__ */ yl.map((t) => t.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function rm(t) {
  return yl[t % yl.length];
}
function lm(t) {
  return tf[t % tf.length];
}
function fx(t, e) {
  return t.borderColor = rm(e), t.backgroundColor = lm(e), ++e;
}
function hx(t, e) {
  return t.backgroundColor = t.data.map(() => rm(e++)), e;
}
function px(t, e) {
  return t.backgroundColor = t.data.map(() => lm(e++)), e;
}
function mx(t) {
  let e = 0;
  return (s, i) => {
    const n = t.getDatasetMeta(i).controller;
    n instanceof gi ? e = hx(s, e) : n instanceof jn ? e = px(s, e) : n && (e = fx(s, e));
  };
}
function sf(t) {
  let e;
  for (e in t)
    if (t[e].borderColor || t[e].backgroundColor)
      return !0;
  return !1;
}
function gx(t) {
  return t && (t.borderColor || t.backgroundColor);
}
function bx() {
  return et.borderColor !== "rgba(0,0,0,0.1)" || et.backgroundColor !== "rgba(0,0,0,0.1)";
}
var yx = {
  id: "colors",
  defaults: {
    enabled: !0,
    forceOverride: !1
  },
  beforeLayout(t, e, s) {
    if (!s.enabled)
      return;
    const { data: { datasets: i }, options: n } = t.config, { elements: a } = n, o = sf(i) || gx(n) || a && sf(a) || bx();
    if (!s.forceOverride && o)
      return;
    const r = mx(t);
    i.forEach(r);
  }
};
function vx(t, e, s, i, n) {
  const a = n.samples || i;
  if (a >= s)
    return t.slice(e, e + s);
  const o = [], r = (s - 2) / (a - 2);
  let l = 0;
  const c = e + s - 1;
  let u = e, d, f, h, m, g;
  for (o[l++] = t[u], d = 0; d < a - 2; d++) {
    let v = 0, S = 0, x;
    const C = Math.floor((d + 1) * r) + 1 + e, k = Math.min(Math.floor((d + 2) * r) + 1, s) + e, P = k - C;
    for (x = C; x < k; x++)
      v += t[x].x, S += t[x].y;
    v /= P, S /= P;
    const D = Math.floor(d * r) + 1 + e, R = Math.min(Math.floor((d + 1) * r) + 1, s) + e, { x: O, y: N } = t[u];
    for (h = m = -1, x = D; x < R; x++)
      m = 0.5 * Math.abs((O - v) * (t[x].y - N) - (O - t[x].x) * (S - N)), m > h && (h = m, f = t[x], g = x);
    o[l++] = f, u = g;
  }
  return o[l++] = t[c], o;
}
function _x(t, e, s, i) {
  let n = 0, a = 0, o, r, l, c, u, d, f, h, m, g;
  const v = [], S = e + s - 1, x = t[e].x, k = t[S].x - x;
  for (o = e; o < e + s; ++o) {
    r = t[o], l = (r.x - x) / k * i, c = r.y;
    const P = l | 0;
    if (P === u)
      c < m ? (m = c, d = o) : c > g && (g = c, f = o), n = (a * n + r.x) / ++a;
    else {
      const D = o - 1;
      if (!Se(d) && !Se(f)) {
        const R = Math.min(d, f), O = Math.max(d, f);
        R !== h && R !== D && v.push({
          ...t[R],
          x: n
        }), O !== h && O !== D && v.push({
          ...t[O],
          x: n
        });
      }
      o > 0 && D !== h && v.push(t[D]), v.push(r), u = P, a = 0, m = g = c, d = f = h = o;
    }
  }
  return v;
}
function cm(t) {
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
function nf(t) {
  t.data.datasets.forEach((e) => {
    cm(e);
  });
}
function kx(t, e) {
  const s = e.length;
  let i = 0, n;
  const { iScale: a } = t, { min: o, max: r, minDefined: l, maxDefined: c } = a.getUserBounds();
  return l && (i = pt(ws(e, a.axis, o).lo, 0, s - 1)), c ? n = pt(ws(e, a.axis, r).hi + 1, i, s) - i : n = s - i, {
    start: i,
    count: n
  };
}
var Sx = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (t, e, s) => {
    if (!s.enabled) {
      nf(t);
      return;
    }
    const i = t.width;
    t.data.datasets.forEach((n, a) => {
      const { _data: o, indexAxis: r } = n, l = t.getDatasetMeta(a), c = o || n.data;
      if (xn([
        r,
        t.options.indexAxis
      ]) === "y" || !l.controller.supportsDecimation)
        return;
      const u = t.scales[l.xAxisID];
      if (u.type !== "linear" && u.type !== "time" || t.options.parsing)
        return;
      let { start: d, count: f } = kx(l, c);
      const h = s.threshold || 4 * i;
      if (f <= h) {
        cm(n);
        return;
      }
      Se(o) && (n._data = c, delete n.data, Object.defineProperty(n, "data", {
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
          m = vx(c, d, f, i, s);
          break;
        case "min-max":
          m = _x(c, d, f, i);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${s.algorithm}'`);
      }
      n._decimated = m;
    });
  },
  destroy(t) {
    nf(t);
  }
};
function Tx(t, e, s) {
  const i = t.segments, n = t.points, a = e.points, o = [];
  for (const r of i) {
    let { start: l, end: c } = r;
    c = $o(l, c, n);
    const u = vl(s, n[l], n[c], r.loop);
    if (!e.segments) {
      o.push({
        source: r,
        target: u,
        start: n[l],
        end: n[c]
      });
      continue;
    }
    const d = zp(e, u);
    for (const f of d) {
      const h = vl(s, a[f.start], a[f.end], f.loop), m = Vp(r, n, h);
      for (const g of m)
        o.push({
          source: g,
          target: f,
          start: {
            [s]: af(u, h, "start", Math.max)
          },
          end: {
            [s]: af(u, h, "end", Math.min)
          }
        });
    }
  }
  return o;
}
function vl(t, e, s, i) {
  if (i)
    return;
  let n = e[t], a = s[t];
  return t === "angle" && (n = bt(n), a = bt(a)), {
    property: t,
    start: n,
    end: a
  };
}
function xx(t, e) {
  const { x: s = null, y: i = null } = t || {}, n = e.points, a = [];
  return e.segments.forEach(({ start: o, end: r }) => {
    r = $o(o, r, n);
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
function $o(t, e, s) {
  for (; e > t; e--) {
    const i = s[e];
    if (!isNaN(i.x) && !isNaN(i.y))
      break;
  }
  return e;
}
function af(t, e, s, i) {
  return t && e ? i(t[s], e[s]) : t ? t[s] : e ? e[s] : 0;
}
function um(t, e) {
  let s = [], i = !1;
  return Ze(t) ? (i = !0, s = t) : s = xx(t, e), s.length ? new Gs({
    points: s,
    options: {
      tension: 0
    },
    _loop: i,
    _fullLoop: i
  }) : null;
}
function of(t) {
  return t && t.fill !== !1;
}
function Ax(t, e, s) {
  let n = t[e].fill;
  const a = [
    e
  ];
  let o;
  if (!s)
    return n;
  for (; n !== !1 && a.indexOf(n) === -1; ) {
    if (!rt(n))
      return n;
    if (o = t[n], !o)
      return !1;
    if (o.visible)
      return n;
    a.push(n), n = o.fill;
  }
  return !1;
}
function Cx(t, e, s) {
  const i = Mx(t);
  if (Ae(i))
    return isNaN(i.value) ? !1 : i;
  let n = parseFloat(i);
  return rt(n) && Math.floor(n) === n ? Px(i[0], e, n, s) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(i) >= 0 && i;
}
function Px(t, e, s, i) {
  return (t === "-" || t === "+") && (s = e + s), s === e || s < 0 || s >= i ? !1 : s;
}
function wx(t, e) {
  let s = null;
  return t === "start" ? s = e.bottom : t === "end" ? s = e.top : Ae(t) ? s = e.getPixelForValue(t.value) : e.getBasePixel && (s = e.getBasePixel()), s;
}
function Rx(t, e, s) {
  let i;
  return t === "start" ? i = s : t === "end" ? i = e.options.reverse ? e.min : e.max : Ae(t) ? i = t.value : i = e.getBaseValue(), i;
}
function Mx(t) {
  const e = t.options, s = e.fill;
  let i = me(s && s.target, s);
  return i === void 0 && (i = !!e.backgroundColor), i === !1 || i === null ? !1 : i === !0 ? "origin" : i;
}
function Dx(t) {
  const { scale: e, index: s, line: i } = t, n = [], a = i.segments, o = i.points, r = Ix(e, s);
  r.push(um({
    x: null,
    y: e.bottom
  }, i));
  for (let l = 0; l < a.length; l++) {
    const c = a[l];
    for (let u = c.start; u <= c.end; u++)
      Ex(n, o[u], r);
  }
  return new Gs({
    points: n,
    options: {}
  });
}
function Ix(t, e) {
  const s = [], i = t.getMatchingVisibleMetas("line");
  for (let n = 0; n < i.length; n++) {
    const a = i[n];
    if (a.index === e)
      break;
    a.hidden || s.unshift(a.dataset);
  }
  return s;
}
function Ex(t, e, s) {
  const i = [];
  for (let n = 0; n < s.length; n++) {
    const a = s[n], { first: o, last: r, point: l } = Ox(a, e, "x");
    if (!(!l || o && r)) {
      if (o)
        i.unshift(l);
      else if (t.push(l), !r)
        break;
    }
  }
  t.push(...i);
}
function Ox(t, e, s) {
  const i = t.interpolate(e, s);
  if (!i)
    return {};
  const n = i[s], a = t.segments, o = t.points;
  let r = !1, l = !1;
  for (let c = 0; c < a.length; c++) {
    const u = a[c], d = o[u.start][s], f = o[u.end][s];
    if (Ps(n, d, f)) {
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
class dm {
  constructor(e) {
    this.x = e.x, this.y = e.y, this.radius = e.radius;
  }
  pathSegment(e, s, i) {
    const { x: n, y: a, radius: o } = this;
    return s = s || {
      start: 0,
      end: Ye
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
function Nx(t) {
  const { chart: e, fill: s, line: i } = t;
  if (rt(s))
    return Lx(e, s);
  if (s === "stack")
    return Dx(t);
  if (s === "shape")
    return !0;
  const n = Ux(t);
  return n instanceof dm ? n : um(n, i);
}
function Lx(t, e) {
  const s = t.getDatasetMeta(e);
  return s && t.isDatasetVisible(e) ? s.dataset : null;
}
function Ux(t) {
  return (t.scale || {}).getPointPositionForValue ? Wx(t) : Fx(t);
}
function Fx(t) {
  const { scale: e = {}, fill: s } = t, i = wx(s, e);
  if (rt(i)) {
    const n = e.isHorizontal();
    return {
      x: n ? i : null,
      y: n ? null : i
    };
  }
  return null;
}
function Wx(t) {
  const { scale: e, fill: s } = t, i = e.options, n = e.getLabels().length, a = i.reverse ? e.max : e.min, o = Rx(s, e, a), r = [];
  if (i.grid.circular) {
    const l = e.getPointPositionForValue(0, a);
    return new dm({
      x: l.x,
      y: l.y,
      radius: e.getDistanceFromCenterForValue(o)
    });
  }
  for (let l = 0; l < n; ++l)
    r.push(e.getPointPositionForValue(l, o));
  return r;
}
function Fr(t, e, s) {
  const i = Nx(e), { chart: n, index: a, line: o, scale: r, axis: l } = e, c = o.options, u = c.fill, d = c.backgroundColor, { above: f = d, below: h = d } = u || {}, m = n.getDatasetMeta(a), g = qp(n, m);
  i && o.points.length && (zo(t, s), Bx(t, {
    line: o,
    target: i,
    above: f,
    below: h,
    area: s,
    scale: r,
    axis: l,
    clip: g
  }), qo(t));
}
function Bx(t, e) {
  const { line: s, target: i, above: n, below: a, area: o, scale: r, clip: l } = e, c = s._loop ? "angle" : e.axis;
  t.save();
  let u = a;
  a !== n && (c === "x" ? (rf(t, i, o.top), Wr(t, {
    line: s,
    target: i,
    color: n,
    scale: r,
    property: c,
    clip: l
  }), t.restore(), t.save(), rf(t, i, o.bottom)) : c === "y" && (lf(t, i, o.left), Wr(t, {
    line: s,
    target: i,
    color: a,
    scale: r,
    property: c,
    clip: l
  }), t.restore(), t.save(), lf(t, i, o.right), u = n)), Wr(t, {
    line: s,
    target: i,
    color: u,
    scale: r,
    property: c,
    clip: l
  }), t.restore();
}
function rf(t, e, s) {
  const { segments: i, points: n } = e;
  let a = !0, o = !1;
  t.beginPath();
  for (const r of i) {
    const { start: l, end: c } = r, u = n[l], d = n[$o(l, c, n)];
    a ? (t.moveTo(u.x, u.y), a = !1) : (t.lineTo(u.x, s), t.lineTo(u.x, u.y)), o = !!e.pathSegment(t, r, {
      move: o
    }), o ? t.closePath() : t.lineTo(d.x, s);
  }
  t.lineTo(e.first().x, s), t.closePath(), t.clip();
}
function lf(t, e, s) {
  const { segments: i, points: n } = e;
  let a = !0, o = !1;
  t.beginPath();
  for (const r of i) {
    const { start: l, end: c } = r, u = n[l], d = n[$o(l, c, n)];
    a ? (t.moveTo(u.x, u.y), a = !1) : (t.lineTo(s, u.y), t.lineTo(u.x, u.y)), o = !!e.pathSegment(t, r, {
      move: o
    }), o ? t.closePath() : t.lineTo(s, d.y);
  }
  t.lineTo(s, e.first().y), t.closePath(), t.clip();
}
function Wr(t, e) {
  const { line: s, target: i, property: n, color: a, scale: o, clip: r } = e, l = Tx(s, i, n);
  for (const { source: c, target: u, start: d, end: f } of l) {
    const { style: { backgroundColor: h = a } = {} } = c, m = i !== !0;
    t.save(), t.fillStyle = h, Hx(t, o, r, m && vl(n, d, f)), t.beginPath();
    const g = !!s.pathSegment(t, c);
    let v;
    if (m) {
      g ? t.closePath() : cf(t, i, f, n);
      const S = !!i.pathSegment(t, u, {
        move: g,
        reverse: !0
      });
      v = g && S, v || cf(t, i, d, n);
    }
    t.closePath(), t.fill(v ? "evenodd" : "nonzero"), t.restore();
  }
}
function Hx(t, e, s, i) {
  const n = e.chart.chartArea, { property: a, start: o, end: r } = i || {};
  if (a === "x" || a === "y") {
    let l, c, u, d;
    a === "x" ? (l = o, c = n.top, u = r, d = n.bottom) : (l = n.left, c = o, u = n.right, d = r), t.beginPath(), s && (l = Math.max(l, s.left), u = Math.min(u, s.right), c = Math.max(c, s.top), d = Math.min(d, s.bottom)), t.rect(l, c, u - l, d - c), t.clip();
  }
}
function cf(t, e, s, i) {
  const n = e.interpolate(s, i);
  n && t.lineTo(n.x, n.y);
}
var jx = {
  id: "filler",
  afterDatasetsUpdate(t, e, s) {
    const i = (t.data.datasets || []).length, n = [];
    let a, o, r, l;
    for (o = 0; o < i; ++o)
      a = t.getDatasetMeta(o), r = a.dataset, l = null, r && r.options && r instanceof Gs && (l = {
        visible: t.isDatasetVisible(o),
        index: o,
        fill: Cx(r, o, i),
        chart: t,
        axis: a.controller.options.indexAxis,
        scale: a.vScale,
        line: r
      }), a.$filler = l, n.push(l);
    for (o = 0; o < i; ++o)
      l = n[o], !(!l || l.fill === !1) && (l.fill = Ax(n, o, s.propagate));
  },
  beforeDraw(t, e, s) {
    const i = s.drawTime === "beforeDraw", n = t.getSortedVisibleDatasetMetas(), a = t.chartArea;
    for (let o = n.length - 1; o >= 0; --o) {
      const r = n[o].$filler;
      r && (r.line.updateControlPoints(a, r.axis), i && r.fill && Fr(t.ctx, r, a));
    }
  },
  beforeDatasetsDraw(t, e, s) {
    if (s.drawTime !== "beforeDatasetsDraw")
      return;
    const i = t.getSortedVisibleDatasetMetas();
    for (let n = i.length - 1; n >= 0; --n) {
      const a = i[n].$filler;
      of(a) && Fr(t.ctx, a, t.chartArea);
    }
  },
  beforeDatasetDraw(t, e, s) {
    const i = e.meta.$filler;
    !of(i) || s.drawTime !== "beforeDatasetDraw" || Fr(t.ctx, i, t.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const uf = (t, e) => {
  let { boxHeight: s = e, boxWidth: i = e } = t;
  return t.usePointStyle && (s = Math.min(s, e), i = t.pointStyleWidth || Math.min(i, e)), {
    boxWidth: i,
    boxHeight: s,
    itemHeight: Math.max(e, s)
  };
}, Vx = (t, e) => t !== null && e !== null && t.datasetIndex === e.datasetIndex && t.index === e.index;
class df extends Os {
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
    let s = Ke(e.generateLabels, [
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
    const i = e.labels, n = dt(i.font), a = n.size, o = this._computeTitleHeight(), { boxWidth: r, itemHeight: l } = uf(i, a);
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
    return this.legendItems.forEach((v, S) => {
      const { itemWidth: x, itemHeight: C } = zx(i, s, a, v, n);
      S > 0 && h + C + 2 * r > u && (d += f + r, c.push({
        width: f,
        height: h
      }), m += f + r, g++, f = h = 0), l[S] = {
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
    const e = this._computeTitleHeight(), { legendHitBoxes: s, options: { align: i, labels: { padding: n }, rtl: a } } = this, o = Ki(a, this.left, this.width);
    if (this.isHorizontal()) {
      let r = 0, l = gt(i, this.left + n, this.right - this.lineWidths[r]);
      for (const c of s)
        r !== c.row && (r = c.row, l = gt(i, this.left + n, this.right - this.lineWidths[r])), c.top += this.top + e + n, c.left = o.leftForLtr(o.x(l), c.width), l += c.width + n;
    } else {
      let r = 0, l = gt(i, this.top + e + n, this.bottom - this.columnSizes[r].height);
      for (const c of s)
        c.col !== r && (r = c.col, l = gt(i, this.top + e + n, this.bottom - this.columnSizes[r].height)), c.top = l, c.left += this.left + n, c.left = o.leftForLtr(o.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const e = this.ctx;
      zo(e, this), this._draw(), qo(e);
    }
  }
  _draw() {
    const { options: e, columnSizes: s, lineWidths: i, ctx: n } = this, { align: a, labels: o } = e, r = et.color, l = Ki(e.rtl, this.left, this.width), c = dt(o.font), { padding: u } = o, d = c.size, f = d / 2;
    let h;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: m, boxHeight: g, itemHeight: v } = uf(o, d), S = function(D, R, O) {
      if (isNaN(m) || m <= 0 || isNaN(g) || g < 0)
        return;
      n.save();
      const N = me(O.lineWidth, 1);
      if (n.fillStyle = me(O.fillStyle, r), n.lineCap = me(O.lineCap, "butt"), n.lineDashOffset = me(O.lineDashOffset, 0), n.lineJoin = me(O.lineJoin, "miter"), n.lineWidth = N, n.strokeStyle = me(O.strokeStyle, r), n.setLineDash(me(O.lineDash, [])), o.usePointStyle) {
        const z = {
          radius: g * Math.SQRT2 / 2,
          pointStyle: O.pointStyle,
          rotation: O.rotation,
          borderWidth: N
        }, J = l.xPlus(D, m / 2), B = R + f;
        Ip(n, z, J, B, o.pointStyleWidth && m);
      } else {
        const z = R + Math.max((d - g) / 2, 0), J = l.leftForLtr(D, m), B = ki(O.borderRadius);
        n.beginPath(), Object.values(B).some((ae) => ae !== 0) ? na(n, {
          x: J,
          y: z,
          w: m,
          h: g,
          radius: B
        }) : n.rect(J, z, m, g), n.fill(), N !== 0 && n.stroke();
      }
      n.restore();
    }, x = function(D, R, O) {
      xi(n, O.text, D, R + v / 2, c, {
        strikethrough: O.hidden,
        textAlign: l.textAlign(O.textAlign)
      });
    }, C = this.isHorizontal(), k = this._computeTitleHeight();
    C ? h = {
      x: gt(a, this.left + u, this.right - i[0]),
      y: this.top + u + k,
      line: 0
    } : h = {
      x: this.left + u,
      y: gt(a, this.top + k + u, this.bottom - s[0].height),
      line: 0
    }, Bp(this.ctx, e.textDirection);
    const P = v + u;
    this.legendItems.forEach((D, R) => {
      n.strokeStyle = D.fontColor, n.fillStyle = D.fontColor;
      const O = n.measureText(D.text).width, N = l.textAlign(D.textAlign || (D.textAlign = o.textAlign)), z = m + f + O;
      let J = h.x, B = h.y;
      l.setWidth(this.width), C ? R > 0 && J + z + u > this.right && (B = h.y += P, h.line++, J = h.x = gt(a, this.left + u, this.right - i[h.line])) : R > 0 && B + P > this.bottom && (J = h.x = J + s[h.line].width + u, h.line++, B = h.y = gt(a, this.top + k + u, this.bottom - s[h.line].height));
      const ae = l.x(J);
      if (S(ae, B, D), J = cS(N, J + m + f, C ? J + z : this.right, e.rtl), x(l.x(J), B, D), C)
        h.x += z + u;
      else if (typeof D.text != "string") {
        const be = c.lineHeight;
        h.y += fm(D, be) + u;
      } else
        h.y += P;
    }), Hp(this.ctx, e.textDirection);
  }
  drawTitle() {
    const e = this.options, s = e.title, i = dt(s.font), n = St(s.padding);
    if (!s.display)
      return;
    const a = Ki(e.rtl, this.left, this.width), o = this.ctx, r = s.position, l = i.size / 2, c = n.top + l;
    let u, d = this.left, f = this.width;
    if (this.isHorizontal())
      f = Math.max(...this.lineWidths), u = this.top + c, d = gt(e.align, d, this.right - f);
    else {
      const m = this.columnSizes.reduce((g, v) => Math.max(g, v.height), 0);
      u = c + gt(e.align, this.top, this.bottom - m - e.labels.padding - this._computeTitleHeight());
    }
    const h = gt(r, d, d + f);
    o.textAlign = a.textAlign(sc(r)), o.textBaseline = "middle", o.strokeStyle = s.color, o.fillStyle = s.color, o.font = i.string, xi(o, s.text, h, u, i);
  }
  _computeTitleHeight() {
    const e = this.options.title, s = dt(e.font), i = St(e.padding);
    return e.display ? s.lineHeight + i.height : 0;
  }
  _getLegendItemAt(e, s) {
    let i, n, a;
    if (Ps(e, this.left, this.right) && Ps(s, this.top, this.bottom)) {
      for (a = this.legendHitBoxes, i = 0; i < a.length; ++i)
        if (n = a[i], Ps(e, n.left, n.left + n.width) && Ps(s, n.top, n.top + n.height))
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(e) {
    const s = this.options;
    if (!Kx(e.type, s))
      return;
    const i = this._getLegendItemAt(e.x, e.y);
    if (e.type === "mousemove" || e.type === "mouseout") {
      const n = this._hoveredItem, a = Vx(n, i);
      n && !a && Ke(s.onLeave, [
        e,
        n,
        this
      ], this), this._hoveredItem = i, i && !a && Ke(s.onHover, [
        e,
        i,
        this
      ], this);
    } else i && Ke(s.onClick, [
      e,
      i,
      this
    ], this);
  }
}
function zx(t, e, s, i, n) {
  const a = qx(i, t, e, s), o = Gx(n, i, e.lineHeight);
  return {
    itemWidth: a,
    itemHeight: o
  };
}
function qx(t, e, s, i) {
  let n = t.text;
  return n && typeof n != "string" && (n = n.reduce((a, o) => a.length > o.length ? a : o)), e + s.size / 2 + i.measureText(n).width;
}
function Gx(t, e, s) {
  let i = t;
  return typeof e.text != "string" && (i = fm(e, s)), i;
}
function fm(t, e) {
  const s = t.text ? t.text.length : 0;
  return e * s;
}
function Kx(t, e) {
  return !!((t === "mousemove" || t === "mouseout") && (e.onHover || e.onLeave) || e.onClick && (t === "click" || t === "mouseup"));
}
var $x = {
  id: "legend",
  _element: df,
  start(t, e, s) {
    const i = t.legend = new df({
      ctx: t.ctx,
      options: s,
      chart: t
    });
    _t.configure(t, i, s), _t.addBox(t, i);
  },
  stop(t) {
    _t.removeBox(t, t.legend), delete t.legend;
  },
  beforeUpdate(t, e, s) {
    const i = t.legend;
    _t.configure(t, i, s), i.options = s;
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
          const c = l.controller.getStyle(s ? 0 : void 0), u = St(c.borderWidth);
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
class dc extends Os {
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
    const n = Ze(i.text) ? i.text.length : 1;
    this._padding = St(i.padding);
    const a = n * dt(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = a : this.width = a;
  }
  isHorizontal() {
    const e = this.options.position;
    return e === "top" || e === "bottom";
  }
  _drawArgs(e) {
    const { top: s, left: i, bottom: n, right: a, options: o } = this, r = o.align;
    let l = 0, c, u, d;
    return this.isHorizontal() ? (u = gt(r, i, a), d = s + e, c = a - i) : (o.position === "left" ? (u = i + e, d = gt(r, n, s), l = Me * -0.5) : (u = a - e, d = gt(r, s, n), l = Me * 0.5), c = n - s), {
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
    const i = dt(s.font), a = i.lineHeight / 2 + this._padding.top, { titleX: o, titleY: r, maxWidth: l, rotation: c } = this._drawArgs(a);
    xi(e, s.text, 0, 0, i, {
      color: s.color,
      maxWidth: l,
      rotation: c,
      textAlign: sc(s.align),
      textBaseline: "middle",
      translation: [
        o,
        r
      ]
    });
  }
}
function Jx(t, e) {
  const s = new dc({
    ctx: t.ctx,
    options: e,
    chart: t
  });
  _t.configure(t, s, e), _t.addBox(t, s), t.titleBlock = s;
}
var Yx = {
  id: "title",
  _element: dc,
  start(t, e, s) {
    Jx(t, s);
  },
  stop(t) {
    const e = t.titleBlock;
    _t.removeBox(t, e), delete t.titleBlock;
  },
  beforeUpdate(t, e, s) {
    const i = t.titleBlock;
    _t.configure(t, i, s), i.options = s;
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
const Ba = /* @__PURE__ */ new WeakMap();
var Xx = {
  id: "subtitle",
  start(t, e, s) {
    const i = new dc({
      ctx: t.ctx,
      options: s,
      chart: t
    });
    _t.configure(t, i, s), _t.addBox(t, i), Ba.set(t, i);
  },
  stop(t) {
    _t.removeBox(t, Ba.get(t)), Ba.delete(t);
  },
  beforeUpdate(t, e, s) {
    const i = Ba.get(t);
    _t.configure(t, i, s), i.options = s;
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
const Pn = {
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
        const c = l.getCenterPoint(), u = dl(e, c);
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
function os(t, e) {
  return e && (Ze(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
}
function ks(t) {
  return (typeof t == "string" || t instanceof String) && t.indexOf(`
`) > -1 ? t.split(`
`) : t;
}
function Qx(t, e) {
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
function ff(t, e) {
  const s = t.chart.ctx, { body: i, footer: n, title: a } = t, { boxWidth: o, boxHeight: r } = e, l = dt(e.bodyFont), c = dt(e.titleFont), u = dt(e.footerFont), d = a.length, f = n.length, h = i.length, m = St(e.padding);
  let g = m.height, v = 0, S = i.reduce((k, P) => k + P.before.length + P.lines.length + P.after.length, 0);
  if (S += t.beforeBody.length + t.afterBody.length, d && (g += d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom), S) {
    const k = e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight;
    g += h * k + (S - h) * l.lineHeight + (S - 1) * e.bodySpacing;
  }
  f && (g += e.footerMarginTop + f * u.lineHeight + (f - 1) * e.footerSpacing);
  let x = 0;
  const C = function(k) {
    v = Math.max(v, s.measureText(k).width + x);
  };
  return s.save(), s.font = c.string, Ue(t.title, C), s.font = l.string, Ue(t.beforeBody.concat(t.afterBody), C), x = e.displayColors ? o + 2 + e.boxPadding : 0, Ue(i, (k) => {
    Ue(k.before, C), Ue(k.lines, C), Ue(k.after, C);
  }), x = 0, s.font = u.string, Ue(t.footer, C), s.restore(), v += m.width, {
    width: v,
    height: g
  };
}
function Zx(t, e) {
  const { y: s, height: i } = e;
  return s < i / 2 ? "top" : s > t.height - i / 2 ? "bottom" : "center";
}
function eA(t, e, s, i) {
  const { x: n, width: a } = i, o = s.caretSize + s.caretPadding;
  if (t === "left" && n + a + o > e.width || t === "right" && n - a - o < 0)
    return !0;
}
function tA(t, e, s, i) {
  const { x: n, width: a } = s, { width: o, chartArea: { left: r, right: l } } = t;
  let c = "center";
  return i === "center" ? c = n <= (r + l) / 2 ? "left" : "right" : n <= a / 2 ? c = "left" : n >= o - a / 2 && (c = "right"), eA(c, t, e, s) && (c = "center"), c;
}
function hf(t, e, s) {
  const i = s.yAlign || e.yAlign || Zx(t, s);
  return {
    xAlign: s.xAlign || e.xAlign || tA(t, e, s, i),
    yAlign: i
  };
}
function sA(t, e) {
  let { x: s, width: i } = t;
  return e === "right" ? s -= i : e === "center" && (s -= i / 2), s;
}
function iA(t, e, s) {
  let { y: i, height: n } = t;
  return e === "top" ? i += s : e === "bottom" ? i -= n + s : i -= n / 2, i;
}
function pf(t, e, s, i) {
  const { caretSize: n, caretPadding: a, cornerRadius: o } = t, { xAlign: r, yAlign: l } = s, c = n + a, { topLeft: u, topRight: d, bottomLeft: f, bottomRight: h } = ki(o);
  let m = sA(e, r);
  const g = iA(e, l, c);
  return l === "center" ? r === "left" ? m += c : r === "right" && (m -= c) : r === "left" ? m -= Math.max(u, f) + n : r === "right" && (m += Math.max(d, h) + n), {
    x: pt(m, 0, i.width - e.width),
    y: pt(g, 0, i.height - e.height)
  };
}
function Ha(t, e, s) {
  const i = St(s.padding);
  return e === "center" ? t.x + t.width / 2 : e === "right" ? t.x + t.width - i.right : t.x + i.left;
}
function mf(t) {
  return os([], ks(t));
}
function nA(t, e, s) {
  return Zs(t, {
    tooltip: e,
    tooltipItems: s,
    type: "tooltip"
  });
}
function gf(t, e) {
  const s = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return s ? t.override(s) : t;
}
const hm = {
  beforeTitle: ys,
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
  afterTitle: ys,
  beforeBody: ys,
  beforeLabel: ys,
  label(t) {
    if (this && this.options && this.options.mode === "dataset")
      return t.label + ": " + t.formattedValue || t.formattedValue;
    let e = t.dataset.label || "";
    e && (e += ": ");
    const s = t.formattedValue;
    return Se(s) || (e += s), e;
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
  afterLabel: ys,
  afterBody: ys,
  beforeFooter: ys,
  footer: ys,
  afterFooter: ys
};
function Nt(t, e, s, i) {
  const n = t[e].call(s, i);
  return typeof n > "u" ? hm[e].call(s, i) : n;
}
class _l extends Os {
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
    const s = this.chart, i = this.options.setContext(this.getContext()), n = i.enabled && s.options.animation && i.animations, a = new Gp(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(a)), a;
  }
  getContext() {
    return this.$context || (this.$context = nA(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(e, s) {
    const { callbacks: i } = s, n = Nt(i, "beforeTitle", this, e), a = Nt(i, "title", this, e), o = Nt(i, "afterTitle", this, e);
    let r = [];
    return r = os(r, ks(n)), r = os(r, ks(a)), r = os(r, ks(o)), r;
  }
  getBeforeBody(e, s) {
    return mf(Nt(s.callbacks, "beforeBody", this, e));
  }
  getBody(e, s) {
    const { callbacks: i } = s, n = [];
    return Ue(e, (a) => {
      const o = {
        before: [],
        lines: [],
        after: []
      }, r = gf(i, a);
      os(o.before, ks(Nt(r, "beforeLabel", this, a))), os(o.lines, Nt(r, "label", this, a)), os(o.after, ks(Nt(r, "afterLabel", this, a))), n.push(o);
    }), n;
  }
  getAfterBody(e, s) {
    return mf(Nt(s.callbacks, "afterBody", this, e));
  }
  getFooter(e, s) {
    const { callbacks: i } = s, n = Nt(i, "beforeFooter", this, e), a = Nt(i, "footer", this, e), o = Nt(i, "afterFooter", this, e);
    let r = [];
    return r = os(r, ks(n)), r = os(r, ks(a)), r = os(r, ks(o)), r;
  }
  _createItems(e) {
    const s = this._active, i = this.chart.data, n = [], a = [], o = [];
    let r = [], l, c;
    for (l = 0, c = s.length; l < c; ++l)
      r.push(Qx(this.chart, s[l]));
    return e.filter && (r = r.filter((u, d, f) => e.filter(u, d, f, i))), e.itemSort && (r = r.sort((u, d) => e.itemSort(u, d, i))), Ue(r, (u) => {
      const d = gf(e.callbacks, u);
      n.push(Nt(d, "labelColor", this, u)), a.push(Nt(d, "labelPointStyle", this, u)), o.push(Nt(d, "labelTextColor", this, u));
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
      const r = Pn[i.position].call(this, n, this._eventPosition);
      o = this._createItems(i), this.title = this.getTitle(o, i), this.beforeBody = this.getBeforeBody(o, i), this.body = this.getBody(o, i), this.afterBody = this.getAfterBody(o, i), this.footer = this.getFooter(o, i);
      const l = this._size = ff(this, i), c = Object.assign({}, r, l), u = hf(this.chart, i, c), d = pf(i, c, u, this.chart);
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
    const { xAlign: n, yAlign: a } = this, { caretSize: o, cornerRadius: r } = i, { topLeft: l, topRight: c, bottomLeft: u, bottomRight: d } = ki(r), { x: f, y: h } = e, { width: m, height: g } = s;
    let v, S, x, C, k, P;
    return a === "center" ? (k = h + g / 2, n === "left" ? (v = f, S = v - o, C = k + o, P = k - o) : (v = f + m, S = v + o, C = k - o, P = k + o), x = v) : (n === "left" ? S = f + Math.max(l, u) + o : n === "right" ? S = f + m - Math.max(c, d) - o : S = this.caretX, a === "top" ? (C = h, k = C - o, v = S - o, x = S + o) : (C = h + g, k = C + o, v = S + o, x = S - o), P = C), {
      x1: v,
      x2: S,
      x3: x,
      y1: C,
      y2: k,
      y3: P
    };
  }
  drawTitle(e, s, i) {
    const n = this.title, a = n.length;
    let o, r, l;
    if (a) {
      const c = Ki(i.rtl, this.x, this.width);
      for (e.x = Ha(this, i.titleAlign, i), s.textAlign = c.textAlign(i.titleAlign), s.textBaseline = "middle", o = dt(i.titleFont), r = i.titleSpacing, s.fillStyle = i.titleColor, s.font = o.string, l = 0; l < a; ++l)
        s.fillText(n[l], c.x(e.x), e.y + o.lineHeight / 2), e.y += o.lineHeight + r, l + 1 === a && (e.y += i.titleMarginBottom - r);
    }
  }
  _drawColorBox(e, s, i, n, a) {
    const o = this.labelColors[i], r = this.labelPointStyles[i], { boxHeight: l, boxWidth: c } = a, u = dt(a.bodyFont), d = Ha(this, "left", a), f = n.x(d), h = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0, m = s.y + h;
    if (a.usePointStyle) {
      const g = {
        radius: Math.min(c, l) / 2,
        pointStyle: r.pointStyle,
        rotation: r.rotation,
        borderWidth: 1
      }, v = n.leftForLtr(f, c) + c / 2, S = m + l / 2;
      e.strokeStyle = a.multiKeyBackground, e.fillStyle = a.multiKeyBackground, hl(e, g, v, S), e.strokeStyle = o.borderColor, e.fillStyle = o.backgroundColor, hl(e, g, v, S);
    } else {
      e.lineWidth = Ae(o.borderWidth) ? Math.max(...Object.values(o.borderWidth)) : o.borderWidth || 1, e.strokeStyle = o.borderColor, e.setLineDash(o.borderDash || []), e.lineDashOffset = o.borderDashOffset || 0;
      const g = n.leftForLtr(f, c), v = n.leftForLtr(n.xPlus(f, 1), c - 2), S = ki(o.borderRadius);
      Object.values(S).some((x) => x !== 0) ? (e.beginPath(), e.fillStyle = a.multiKeyBackground, na(e, {
        x: g,
        y: m,
        w: c,
        h: l,
        radius: S
      }), e.fill(), e.stroke(), e.fillStyle = o.backgroundColor, e.beginPath(), na(e, {
        x: v,
        y: m + 1,
        w: c - 2,
        h: l - 2,
        radius: S
      }), e.fill()) : (e.fillStyle = a.multiKeyBackground, e.fillRect(g, m, c, l), e.strokeRect(g, m, c, l), e.fillStyle = o.backgroundColor, e.fillRect(v, m + 1, c - 2, l - 2));
    }
    e.fillStyle = this.labelTextColors[i];
  }
  drawBody(e, s, i) {
    const { body: n } = this, { bodySpacing: a, bodyAlign: o, displayColors: r, boxHeight: l, boxWidth: c, boxPadding: u } = i, d = dt(i.bodyFont);
    let f = d.lineHeight, h = 0;
    const m = Ki(i.rtl, this.x, this.width), g = function(O) {
      s.fillText(O, m.x(e.x + h), e.y + f / 2), e.y += f + a;
    }, v = m.textAlign(o);
    let S, x, C, k, P, D, R;
    for (s.textAlign = o, s.textBaseline = "middle", s.font = d.string, e.x = Ha(this, v, i), s.fillStyle = i.bodyColor, Ue(this.beforeBody, g), h = r && v !== "right" ? o === "center" ? c / 2 + u : c + 2 + u : 0, k = 0, D = n.length; k < D; ++k) {
      for (S = n[k], x = this.labelTextColors[k], s.fillStyle = x, Ue(S.before, g), C = S.lines, r && C.length && (this._drawColorBox(s, e, k, m, i), f = Math.max(d.lineHeight, l)), P = 0, R = C.length; P < R; ++P)
        g(C[P]), f = d.lineHeight;
      Ue(S.after, g);
    }
    h = 0, f = d.lineHeight, Ue(this.afterBody, g), e.y -= a;
  }
  drawFooter(e, s, i) {
    const n = this.footer, a = n.length;
    let o, r;
    if (a) {
      const l = Ki(i.rtl, this.x, this.width);
      for (e.x = Ha(this, i.footerAlign, i), e.y += i.footerMarginTop, s.textAlign = l.textAlign(i.footerAlign), s.textBaseline = "middle", o = dt(i.footerFont), s.fillStyle = i.footerColor, s.font = o.string, r = 0; r < a; ++r)
        s.fillText(n[r], l.x(e.x), e.y + o.lineHeight / 2), e.y += o.lineHeight + i.footerSpacing;
    }
  }
  drawBackground(e, s, i, n) {
    const { xAlign: a, yAlign: o } = this, { x: r, y: l } = e, { width: c, height: u } = i, { topLeft: d, topRight: f, bottomLeft: h, bottomRight: m } = ki(n.cornerRadius);
    s.fillStyle = n.backgroundColor, s.strokeStyle = n.borderColor, s.lineWidth = n.borderWidth, s.beginPath(), s.moveTo(r + d, l), o === "top" && this.drawCaret(e, s, i, n), s.lineTo(r + c - f, l), s.quadraticCurveTo(r + c, l, r + c, l + f), o === "center" && a === "right" && this.drawCaret(e, s, i, n), s.lineTo(r + c, l + u - m), s.quadraticCurveTo(r + c, l + u, r + c - m, l + u), o === "bottom" && this.drawCaret(e, s, i, n), s.lineTo(r + h, l + u), s.quadraticCurveTo(r, l + u, r, l + u - h), o === "center" && a === "left" && this.drawCaret(e, s, i, n), s.lineTo(r, l + d), s.quadraticCurveTo(r, l, r + d, l), s.closePath(), s.fill(), n.borderWidth > 0 && s.stroke();
  }
  _updateAnimationTarget(e) {
    const s = this.chart, i = this.$animations, n = i && i.x, a = i && i.y;
    if (n || a) {
      const o = Pn[e.position].call(this, this._active, this._eventPosition);
      if (!o)
        return;
      const r = this._size = ff(this, e), l = Object.assign({}, o, this._size), c = hf(s, e, l), u = pf(e, l, c, s);
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
    const o = St(s.padding), r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    s.enabled && r && (e.save(), e.globalAlpha = i, this.drawBackground(a, e, n, s), Bp(e, s.textDirection), a.y += o.top, this.drawTitle(a, e, s), this.drawBody(a, e, s), this.drawFooter(a, e, s), Hp(e, s.textDirection), e.restore());
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
    }), a = !_o(i, n), o = this._positionChanged(n, s);
    (a || o) && (this._active = n, this._eventPosition = s, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(e, s, i = !0) {
    if (s && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, a = this._active || [], o = this._getActiveElements(e, a, s, i), r = this._positionChanged(o, e), l = s || !_o(o, a) || r;
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
    const { caretX: i, caretY: n, options: a } = this, o = Pn[a.position].call(this, e, s);
    return o !== !1 && (i !== o.x || n !== o.y);
  }
}
K(_l, "positioners", Pn);
var aA = {
  id: "tooltip",
  _element: _l,
  positioners: Pn,
  afterInit(t, e, s) {
    s && (t.tooltip = new _l({
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
    callbacks: hm
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
}, oA = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Colors: yx,
  Decimation: Sx,
  Filler: jx,
  Legend: $x,
  SubTitle: Xx,
  Title: Yx,
  Tooltip: aA
});
const rA = (t, e, s, i) => (typeof e == "string" ? (s = t.push(e) - 1, i.unshift({
  index: s,
  label: e
})) : isNaN(e) && (s = null), s);
function lA(t, e, s, i) {
  const n = t.indexOf(e);
  if (n === -1)
    return rA(t, e, s, i);
  const a = t.lastIndexOf(e);
  return n !== a ? s : n;
}
const cA = (t, e) => t === null ? null : pt(Math.round(t), 0, e);
function bf(t) {
  const e = this.getLabels();
  return t >= 0 && t < e.length ? e[t] : t;
}
class kl extends Ci {
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
    if (Se(e))
      return null;
    const i = this.getLabels();
    return s = isFinite(s) && i[s] === e ? s : lA(i, e, me(s, e), this._addedLabels), cA(s, i.length - 1);
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
    return bf.call(this, e);
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
K(kl, "id", "category"), K(kl, "defaults", {
  ticks: {
    callback: bf
  }
});
function uA(t, e) {
  const s = [], { bounds: n, step: a, min: o, max: r, precision: l, count: c, maxTicks: u, maxDigits: d, includeBounds: f } = t, h = a || 1, m = u - 1, { min: g, max: v } = e, S = !Se(o), x = !Se(r), C = !Se(c), k = (v - g) / (d + 1);
  let P = dd((v - g) / m / h) * h, D, R, O, N;
  if (P < 1e-14 && !S && !x)
    return [
      {
        value: g
      },
      {
        value: v
      }
    ];
  N = Math.ceil(v / P) - Math.floor(g / P), N > m && (P = dd(N * P / m / h) * h), Se(l) || (D = Math.pow(10, l), P = Math.ceil(P * D) / D), n === "ticks" ? (R = Math.floor(g / P) * P, O = Math.ceil(v / P) * P) : (R = g, O = v), S && x && a && sS((r - o) / a, P / 1e3) ? (N = Math.round(Math.min((r - o) / P, u)), P = (r - o) / N, R = o, O = r) : C ? (R = S ? o : R, O = x ? r : O, N = c - 1, P = (O - R) / N) : (N = (O - R) / P, Wn(N, Math.round(N), P / 1e3) ? N = Math.round(N) : N = Math.ceil(N));
  const z = Math.max(fd(P), fd(R));
  D = Math.pow(10, Se(l) ? z : l), R = Math.round(R * D) / D, O = Math.round(O * D) / D;
  let J = 0;
  for (S && (f && R !== o ? (s.push({
    value: o
  }), R < o && J++, Wn(Math.round((R + J * P) * D) / D, o, yf(o, k, t)) && J++) : R < o && J++); J < N; ++J) {
    const B = Math.round((R + J * P) * D) / D;
    if (x && B > r)
      break;
    s.push({
      value: B
    });
  }
  return x && f && O !== r ? s.length && Wn(s[s.length - 1].value, r, yf(r, k, t)) ? s[s.length - 1].value = r : s.push({
    value: r
  }) : (!x || O === r) && s.push({
    value: O
  }), s;
}
function yf(t, e, { horizontal: s, minRotation: i }) {
  const n = Yt(i), a = (s ? Math.sin(n) : Math.cos(n)) || 1e-3, o = 0.75 * e * ("" + t).length;
  return Math.min(e / a, o);
}
class Po extends Ci {
  constructor(e) {
    super(e), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(e, s) {
    return Se(e) || (typeof e == "number" || e instanceof Number) && !isFinite(+e) ? null : +e;
  }
  handleTickRangeOptions() {
    const { beginAtZero: e } = this.options, { minDefined: s, maxDefined: i } = this.getUserBounds();
    let { min: n, max: a } = this;
    const o = (l) => n = s ? n : l, r = (l) => a = i ? a : l;
    if (e) {
      const l = hs(n), c = hs(a);
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
    }, a = this._range || this, o = uA(n, a);
    return e.bounds === "ticks" && Tp(o, this, "value"), e.reverse ? (o.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), o;
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
    return ma(e, this.chart.options.locale, this.options.ticks.format);
  }
}
class Sl extends Po {
  determineDataLimits() {
    const { min: e, max: s } = this.getMinMax(!0);
    this.min = rt(e) ? e : 0, this.max = rt(s) ? s : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const e = this.isHorizontal(), s = e ? this.width : this.height, i = Yt(this.options.ticks.minRotation), n = (e ? Math.sin(i) : Math.cos(i)) || 1e-3, a = this._resolveTickFontOptions(0);
    return Math.ceil(s / Math.min(40, a.lineHeight / n));
  }
  getPixelForValue(e) {
    return e === null ? NaN : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
  }
  getValueForPixel(e) {
    return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
  }
}
K(Sl, "id", "linear"), K(Sl, "defaults", {
  ticks: {
    callback: Vo.formatters.numeric
  }
});
const oa = (t) => Math.floor(zs(t)), ci = (t, e) => Math.pow(10, oa(t) + e);
function vf(t) {
  return t / Math.pow(10, oa(t)) === 1;
}
function _f(t, e, s) {
  const i = Math.pow(10, s), n = Math.floor(t / i);
  return Math.ceil(e / i) - n;
}
function dA(t, e) {
  const s = e - t;
  let i = oa(s);
  for (; _f(t, e, i) > 10; )
    i++;
  for (; _f(t, e, i) < 10; )
    i--;
  return Math.min(i, oa(t));
}
function fA(t, { min: e, max: s }) {
  e = Bt(t.min, e);
  const i = [], n = oa(e);
  let a = dA(e, s), o = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
  const r = Math.pow(10, a), l = n > a ? Math.pow(10, n) : 0, c = Math.round((e - l) * o) / o, u = Math.floor((e - l) / r / 10) * r * 10;
  let d = Math.floor((c - u) / Math.pow(10, a)), f = Bt(t.min, Math.round((l + u + d * Math.pow(10, a)) * o) / o);
  for (; f < s; )
    i.push({
      value: f,
      major: vf(f),
      significand: d
    }), d >= 10 ? d = d < 15 ? 15 : 20 : d++, d >= 20 && (a++, d = 2, o = a >= 0 ? 1 : o), f = Math.round((l + u + d * Math.pow(10, a)) * o) / o;
  const h = Bt(t.max, f);
  return i.push({
    value: h,
    major: vf(h),
    significand: d
  }), i;
}
class Tl extends Ci {
  constructor(e) {
    super(e), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(e, s) {
    const i = Po.prototype.parse.apply(this, [
      e,
      s
    ]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return rt(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: e, max: s } = this.getMinMax(!0);
    this.min = rt(e) ? Math.max(0, e) : null, this.max = rt(s) ? Math.max(0, s) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !rt(this._userMin) && (this.min = e === ci(this.min, 0) ? ci(this.min, -1) : ci(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: e, maxDefined: s } = this.getUserBounds();
    let i = this.min, n = this.max;
    const a = (r) => i = e ? i : r, o = (r) => n = s ? n : r;
    i === n && (i <= 0 ? (a(1), o(10)) : (a(ci(i, -1)), o(ci(n, 1)))), i <= 0 && a(ci(n, -1)), n <= 0 && o(ci(i, 1)), this.min = i, this.max = n;
  }
  buildTicks() {
    const e = this.options, s = {
      min: this._userMin,
      max: this._userMax
    }, i = fA(s, this);
    return e.bounds === "ticks" && Tp(i, this, "value"), e.reverse ? (i.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), i;
  }
  getLabelForValue(e) {
    return e === void 0 ? "0" : ma(e, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const e = this.min;
    super.configure(), this._startValue = zs(e), this._valueRange = zs(this.max) - zs(e);
  }
  getPixelForValue(e) {
    return (e === void 0 || e === 0) && (e = this.min), e === null || isNaN(e) ? NaN : this.getPixelForDecimal(e === this.min ? 0 : (zs(e) - this._startValue) / this._valueRange);
  }
  getValueForPixel(e) {
    const s = this.getDecimalForPixel(e);
    return Math.pow(10, this._startValue + s * this._valueRange);
  }
}
K(Tl, "id", "logarithmic"), K(Tl, "defaults", {
  ticks: {
    callback: Vo.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function xl(t) {
  const e = t.ticks;
  if (e.display && t.display) {
    const s = St(e.backdropPadding);
    return me(e.font && e.font.size, et.font.size) + s.height;
  }
  return 0;
}
function hA(t, e, s) {
  return s = Ze(s) ? s : [
    s
  ], {
    w: vS(t, e.string, s),
    h: s.length * e.lineHeight
  };
}
function kf(t, e, s, i, n) {
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
function pA(t) {
  const e = {
    l: t.left + t._padding.left,
    r: t.right - t._padding.right,
    t: t.top + t._padding.top,
    b: t.bottom - t._padding.bottom
  }, s = Object.assign({}, e), i = [], n = [], a = t._pointLabels.length, o = t.options.pointLabels, r = o.centerPointLabels ? Me / a : 0;
  for (let l = 0; l < a; l++) {
    const c = o.setContext(t.getPointLabelContext(l));
    n[l] = c.padding;
    const u = t.getPointPosition(l, t.drawingArea + n[l], r), d = dt(c.font), f = hA(t.ctx, d, t._pointLabels[l]);
    i[l] = f;
    const h = bt(t.getIndexAngle(l) + r), m = Math.round(ec(h)), g = kf(m, u.x, f.w, 0, 180), v = kf(m, u.y, f.h, 90, 270);
    mA(s, e, h, g, v);
  }
  t.setCenterPoint(e.l - s.l, s.r - e.r, e.t - s.t, s.b - e.b), t._pointLabelItems = yA(t, i, n);
}
function mA(t, e, s, i, n) {
  const a = Math.abs(Math.sin(s)), o = Math.abs(Math.cos(s));
  let r = 0, l = 0;
  i.start < e.l ? (r = (e.l - i.start) / a, t.l = Math.min(t.l, e.l - r)) : i.end > e.r && (r = (i.end - e.r) / a, t.r = Math.max(t.r, e.r + r)), n.start < e.t ? (l = (e.t - n.start) / o, t.t = Math.min(t.t, e.t - l)) : n.end > e.b && (l = (n.end - e.b) / o, t.b = Math.max(t.b, e.b + l));
}
function gA(t, e, s) {
  const i = t.drawingArea, { extra: n, additionalAngle: a, padding: o, size: r } = s, l = t.getPointPosition(e, i + n + o, a), c = Math.round(ec(bt(l.angle + lt))), u = kA(l.y, r.h, c), d = vA(c), f = _A(l.x, r.w, d);
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
function bA(t, e) {
  if (!e)
    return !0;
  const { left: s, top: i, right: n, bottom: a } = t;
  return !(Rs({
    x: s,
    y: i
  }, e) || Rs({
    x: s,
    y: a
  }, e) || Rs({
    x: n,
    y: i
  }, e) || Rs({
    x: n,
    y: a
  }, e));
}
function yA(t, e, s) {
  const i = [], n = t._pointLabels.length, a = t.options, { centerPointLabels: o, display: r } = a.pointLabels, l = {
    extra: xl(a) / 2,
    additionalAngle: o ? Me / n : 0
  };
  let c;
  for (let u = 0; u < n; u++) {
    l.padding = s[u], l.size = e[u];
    const d = gA(t, u, l);
    i.push(d), r === "auto" && (d.visible = bA(d, c), d.visible && (c = d));
  }
  return i;
}
function vA(t) {
  return t === 0 || t === 180 ? "center" : t < 180 ? "left" : "right";
}
function _A(t, e, s) {
  return s === "right" ? t -= e : s === "center" && (t -= e / 2), t;
}
function kA(t, e, s) {
  return s === 90 || s === 270 ? t -= e / 2 : (s > 270 || s < 90) && (t -= e), t;
}
function SA(t, e, s) {
  const { left: i, top: n, right: a, bottom: o } = s, { backdropColor: r } = e;
  if (!Se(r)) {
    const l = ki(e.borderRadius), c = St(e.backdropPadding);
    t.fillStyle = r;
    const u = i - c.left, d = n - c.top, f = a - i + c.width, h = o - n + c.height;
    Object.values(l).some((m) => m !== 0) ? (t.beginPath(), na(t, {
      x: u,
      y: d,
      w: f,
      h,
      radius: l
    }), t.fill()) : t.fillRect(u, d, f, h);
  }
}
function TA(t, e) {
  const { ctx: s, options: { pointLabels: i } } = t;
  for (let n = e - 1; n >= 0; n--) {
    const a = t._pointLabelItems[n];
    if (!a.visible)
      continue;
    const o = i.setContext(t.getPointLabelContext(n));
    SA(s, o, a);
    const r = dt(o.font), { x: l, y: c, textAlign: u } = a;
    xi(s, t._pointLabels[n], l, c + r.lineHeight / 2, r, {
      color: o.color,
      textAlign: u,
      textBaseline: "middle"
    });
  }
}
function pm(t, e, s, i) {
  const { ctx: n } = t;
  if (s)
    n.arc(t.xCenter, t.yCenter, e, 0, Ye);
  else {
    let a = t.getPointPosition(0, e);
    n.moveTo(a.x, a.y);
    for (let o = 1; o < i; o++)
      a = t.getPointPosition(o, e), n.lineTo(a.x, a.y);
  }
}
function xA(t, e, s, i, n) {
  const a = t.ctx, o = e.circular, { color: r, lineWidth: l } = e;
  !o && !i || !r || !l || s < 0 || (a.save(), a.strokeStyle = r, a.lineWidth = l, a.setLineDash(n.dash || []), a.lineDashOffset = n.dashOffset, a.beginPath(), pm(t, s, o, i), a.closePath(), a.stroke(), a.restore());
}
function AA(t, e, s) {
  return Zs(t, {
    label: s,
    index: e,
    type: "pointLabel"
  });
}
class wn extends Po {
  constructor(e) {
    super(e), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const e = this._padding = St(xl(this.options) / 2), s = this.width = this.maxWidth - e.width, i = this.height = this.maxHeight - e.height;
    this.xCenter = Math.floor(this.left + s / 2 + e.left), this.yCenter = Math.floor(this.top + i / 2 + e.top), this.drawingArea = Math.floor(Math.min(s, i) / 2);
  }
  determineDataLimits() {
    const { min: e, max: s } = this.getMinMax(!1);
    this.min = rt(e) && !isNaN(e) ? e : 0, this.max = rt(s) && !isNaN(s) ? s : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / xl(this.options));
  }
  generateTickLabels(e) {
    Po.prototype.generateTickLabels.call(this, e), this._pointLabels = this.getLabels().map((s, i) => {
      const n = Ke(this.options.pointLabels.callback, [
        s,
        i
      ], this);
      return n || n === 0 ? n : "";
    }).filter((s, i) => this.chart.getDataVisibility(i));
  }
  fit() {
    const e = this.options;
    e.display && e.pointLabels.display ? pA(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(e, s, i, n) {
    this.xCenter += Math.floor((e - s) / 2), this.yCenter += Math.floor((i - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(e, s, i, n));
  }
  getIndexAngle(e) {
    const s = Ye / (this._pointLabels.length || 1), i = this.options.startAngle || 0;
    return bt(e * s + Yt(i));
  }
  getDistanceFromCenterForValue(e) {
    if (Se(e))
      return NaN;
    const s = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - e) * s : (e - this.min) * s;
  }
  getValueForDistanceFromCenter(e) {
    if (Se(e))
      return NaN;
    const s = e / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - s : this.min + s;
  }
  getPointLabelContext(e) {
    const s = this._pointLabels || [];
    if (e >= 0 && e < s.length) {
      const i = s[e];
      return AA(this.getContext(), e, i);
    }
  }
  getPointPosition(e, s, i = 0) {
    const n = this.getIndexAngle(e) - lt + i;
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
      i.save(), i.beginPath(), pm(this, this.getDistanceFromCenterForValue(this._endValue), s, this._pointLabels.length), i.closePath(), i.fillStyle = e, i.fill(), i.restore();
    }
  }
  drawGrid() {
    const e = this.ctx, s = this.options, { angleLines: i, grid: n, border: a } = s, o = this._pointLabels.length;
    let r, l, c;
    if (s.pointLabels.display && TA(this, o), n.display && this.ticks.forEach((u, d) => {
      if (d !== 0 || d === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(u.value);
        const f = this.getContext(d), h = n.setContext(f), m = a.setContext(f);
        xA(this, h, l, o, m);
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
      const c = i.setContext(this.getContext(l)), u = dt(c.font);
      if (a = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        e.font = u.string, o = e.measureText(r.label).width, e.fillStyle = c.backdropColor;
        const d = St(c.backdropPadding);
        e.fillRect(-o / 2 - d.left, -a - u.size / 2 - d.top, o + d.width, u.size + d.height);
      }
      xi(e, r.label, 0, -a, u, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), e.restore();
  }
  drawTitle() {
  }
}
K(wn, "id", "radialLinear"), K(wn, "defaults", {
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
    callback: Vo.formatters.numeric
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
}), K(wn, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), K(wn, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const Jo = {
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
}, Ut = /* @__PURE__ */ Object.keys(Jo);
function Sf(t, e) {
  return t - e;
}
function Tf(t, e) {
  if (Se(e))
    return null;
  const s = t._adapter, { parser: i, round: n, isoWeekday: a } = t._parseOpts;
  let o = e;
  return typeof i == "function" && (o = i(o)), rt(o) || (o = typeof i == "string" ? s.parse(o, i) : s.parse(o)), o === null ? null : (n && (o = n === "week" && (Qi(a) || a === !0) ? s.startOf(o, "isoWeek", a) : s.startOf(o, n)), +o);
}
function xf(t, e, s, i) {
  const n = Ut.length;
  for (let a = Ut.indexOf(t); a < n - 1; ++a) {
    const o = Jo[Ut[a]], r = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
    if (o.common && Math.ceil((s - e) / (r * o.size)) <= i)
      return Ut[a];
  }
  return Ut[n - 1];
}
function CA(t, e, s, i, n) {
  for (let a = Ut.length - 1; a >= Ut.indexOf(s); a--) {
    const o = Ut[a];
    if (Jo[o].common && t._adapter.diff(n, i, o) >= e - 1)
      return o;
  }
  return Ut[s ? Ut.indexOf(s) : 0];
}
function PA(t) {
  for (let e = Ut.indexOf(t) + 1, s = Ut.length; e < s; ++e)
    if (Jo[Ut[e]].common)
      return Ut[e];
}
function Af(t, e, s) {
  if (!s)
    t[e] = !0;
  else if (s.length) {
    const { lo: i, hi: n } = tc(s, e), a = s[i] >= e ? s[i] : s[n];
    t[a] = !0;
  }
}
function wA(t, e, s, i) {
  const n = t._adapter, a = +n.startOf(e[0].value, i), o = e[e.length - 1].value;
  let r, l;
  for (r = a; r <= o; r = +n.add(r, 1, i))
    l = s[r], l >= 0 && (e[l].major = !0);
  return e;
}
function Cf(t, e, s) {
  const i = [], n = {}, a = e.length;
  let o, r;
  for (o = 0; o < a; ++o)
    r = e[o], n[r] = o, i.push({
      value: r,
      major: !1
    });
  return a === 0 || !s ? i : wA(t, i, n, s);
}
class ra extends Ci {
  constructor(e) {
    super(e), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(e, s = {}) {
    const i = e.time || (e.time = {}), n = this._adapter = new L0._date(e.adapters.date);
    n.init(s), Fn(i.displayFormats, n.formats()), this._parseOpts = {
      parser: i.parser,
      round: i.round,
      isoWeekday: i.isoWeekday
    }, super.init(e), this._normalized = s.normalized;
  }
  parse(e, s) {
    return e === void 0 ? null : Tf(this, e);
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
    (!o || !r) && (l(this._getLabelBounds()), (e.bounds !== "ticks" || e.ticks.source !== "labels") && l(this.getMinMax(!1))), n = rt(n) && !isNaN(n) ? n : +s.startOf(Date.now(), i), a = rt(a) && !isNaN(a) ? a : +s.endOf(Date.now(), i) + 1, this.min = Math.min(n, a - 1), this.max = Math.max(n + 1, a);
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
    const a = this.min, o = this.max, r = oS(n, a, o);
    return this._unit = s.unit || (i.autoSkip ? xf(s.minUnit, this.min, this.max, this._getLabelCapacity(a)) : CA(this, r.length, s.minUnit, this.min, this.max)), this._majorUnit = !i.major.enabled || this._unit === "year" ? void 0 : PA(this._unit), this.initOffsets(n), e.reverse && r.reverse(), Cf(this, r, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((e) => +e.value));
  }
  initOffsets(e = []) {
    let s = 0, i = 0, n, a;
    this.options.offset && e.length && (n = this.getDecimalForValue(e[0]), e.length === 1 ? s = 1 - n : s = (this.getDecimalForValue(e[1]) - n) / 2, a = this.getDecimalForValue(e[e.length - 1]), e.length === 1 ? i = a : i = (a - this.getDecimalForValue(e[e.length - 2])) / 2);
    const o = e.length < 3 ? 0.5 : 0.25;
    s = pt(s, 0, o), i = pt(i, 0, o), this._offsets = {
      start: s,
      end: i,
      factor: 1 / (s + 1 + i)
    };
  }
  _generate() {
    const e = this._adapter, s = this.min, i = this.max, n = this.options, a = n.time, o = a.unit || xf(a.minUnit, s, i, this._getLabelCapacity(s)), r = me(n.ticks.stepSize, 1), l = o === "week" ? a.isoWeekday : !1, c = Qi(l) || l === !0, u = {};
    let d = s, f, h;
    if (c && (d = +e.startOf(d, "isoWeek", l)), d = +e.startOf(d, c ? "day" : o), e.diff(i, s, o) > 1e5 * r)
      throw new Error(s + " and " + i + " are too far apart with stepSize of " + r + " " + o);
    const m = n.ticks.source === "data" && this.getDataTimestamps();
    for (f = d, h = 0; f < i; f = +e.add(f, r, o), h++)
      Af(u, f, m);
    return (f === i || n.bounds === "ticks" || h === 1) && Af(u, f, m), Object.keys(u).sort(Sf).map((g) => +g);
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
      return Ke(o, [
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
    const s = this.options.ticks, i = this.ctx.measureText(e).width, n = Yt(this.isHorizontal() ? s.maxRotation : s.minRotation), a = Math.cos(n), o = Math.sin(n), r = this._resolveTickFontOptions(0).size;
    return {
      w: i * a + r * o,
      h: i * o + r * a
    };
  }
  _getLabelCapacity(e) {
    const s = this.options.time, i = s.displayFormats, n = i[s.unit] || i.millisecond, a = this._tickFormatFunction(e, 0, Cf(this, [
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
      e.push(Tf(this, n[s]));
    return this._cache.labels = this._normalized ? e : this.normalize(e);
  }
  normalize(e) {
    return Cp(e.sort(Sf));
  }
}
K(ra, "id", "time"), K(ra, "defaults", {
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
function ja(t, e, s) {
  let i = 0, n = t.length - 1, a, o, r, l;
  s ? (e >= t[i].pos && e <= t[n].pos && ({ lo: i, hi: n } = ws(t, "pos", e)), { pos: a, time: r } = t[i], { pos: o, time: l } = t[n]) : (e >= t[i].time && e <= t[n].time && ({ lo: i, hi: n } = ws(t, "time", e)), { time: a, pos: r } = t[i], { time: o, pos: l } = t[n]);
  const c = o - a;
  return c ? r + (l - r) * (e - a) / c : r;
}
class Al extends ra {
  constructor(e) {
    super(e), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const e = this._getTimestampsForTable(), s = this._table = this.buildLookupTable(e);
    this._minPos = ja(s, this.min), this._tableRange = ja(s, this.max) - this._minPos, super.initOffsets(e);
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
    return (ja(this._table, e) - this._minPos) / this._tableRange;
  }
  getValueForPixel(e) {
    const s = this._offsets, i = this.getDecimalForPixel(e) / s.factor - s.end;
    return ja(this._table, i * this._tableRange + this._minPos, !0);
  }
}
K(Al, "id", "timeseries"), K(Al, "defaults", ra.defaults);
var RA = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  CategoryScale: kl,
  LinearScale: Sl,
  LogarithmicScale: Tl,
  RadialLinearScale: wn,
  TimeScale: ra,
  TimeSeriesScale: Al
});
const MA = [
  N0,
  dx,
  oA,
  RA
];
Be.register(...MA);
function Br(t, e = null) {
  const s = Number(t);
  return Number.isFinite(s) ? s : e;
}
function DA(t, e, { replayCachedReport: s = !1, reportAgeMs: i = 0 } = {}) {
  const n = Br(t);
  if (n === null) return null;
  if (s) {
    const o = Math.max(0, Br(i, 0));
    return n + o;
  }
  const a = Br(e);
  return a === null ? n : Math.max(n, a);
}
const IA = { class: "container" }, EA = {
  key: 0,
  class: "loading-state"
}, OA = { class: "loading-text" }, NA = { class: "nav-bar" }, LA = {
  class: "time-selector",
  id: "time-selector"
}, UA = ["onClick"], FA = { class: "host-card" }, WA = { class: "host-card-header" }, BA = { class: "host-name" }, HA = {
  key: 0,
  class: "country-os-icons"
}, jA = ["src", "alt"], VA = {
  key: 1,
  class: "country-os-icons"
}, zA = {
  class: "sysinfo-grid",
  id: "info-panel"
}, qA = { class: "sysinfo-item" }, GA = { class: "sysinfo-label" }, KA = { class: "sysinfo-value" }, $A = {
  key: 0,
  class: "sysinfo-item"
}, JA = { class: "sysinfo-label" }, YA = { class: "sysinfo-item" }, XA = { class: "sysinfo-label" }, QA = { class: "sysinfo-value sysinfo-small" }, ZA = {
  key: 1,
  class: "sysinfo-item"
}, eC = { class: "sysinfo-label" }, tC = { class: "sysinfo-value sysinfo-small" }, sC = { class: "sysinfo-item" }, iC = { class: "sysinfo-label" }, nC = { class: "sysinfo-value sysinfo-small" }, aC = {
  key: 2,
  class: "sysinfo-item"
}, oC = { class: "sysinfo-label" }, rC = { class: "sysinfo-value sysinfo-small" }, lC = { class: "sysinfo-item" }, cC = { class: "sysinfo-label" }, uC = { class: "sysinfo-value" }, dC = { class: "sysinfo-item" }, fC = { class: "sysinfo-label" }, hC = { class: "sysinfo-value highlight" }, pC = { class: "sysinfo-item" }, mC = { class: "sysinfo-label" }, gC = { class: "sysinfo-value sysinfo-small" }, bC = { class: "sysinfo-item" }, yC = { class: "sysinfo-label" }, vC = { class: "sysinfo-value sysinfo-small" }, _C = {
  key: 3,
  class: "sysinfo-item"
}, kC = { class: "sysinfo-label" }, SC = { class: "sysinfo-value sysinfo-small" }, TC = {
  key: 4,
  class: "sysinfo-item"
}, xC = { class: "sysinfo-label" }, AC = { class: "sysinfo-value sysinfo-small" }, CC = { class: "sysinfo-item" }, PC = { class: "sysinfo-label" }, wC = { class: "sysinfo-value sysinfo-small" }, RC = { class: "sysinfo-item" }, MC = { class: "sysinfo-label" }, DC = { class: "sysinfo-value sysinfo-small" }, IC = {
  key: 0,
  class: "history-note",
  role: "status"
}, EC = { class: "charts-container" }, OC = { class: "chart-card-header" }, NC = { class: "chart-title" }, LC = { class: "chart-header-actions" }, UC = { class: "chart-current-value" }, FC = { class: "chart-body" }, WC = { class: "chart-card-header" }, BC = { class: "chart-title" }, HC = { class: "chart-header-actions" }, jC = { class: "chart-current-value-container" }, VC = { class: "chart-current-value" }, zC = { class: "chart-subtitle" }, qC = { class: "chart-body" }, GC = { class: "chart-card-header" }, KC = { class: "chart-title" }, $C = { class: "chart-header-actions" }, JC = { class: "net-indicator" }, YC = { class: "net-down" }, XC = { class: "net-up" }, QC = { class: "chart-body" }, ZC = { class: "chart-card-header" }, eP = { class: "chart-title" }, tP = { class: "chart-header-actions" }, sP = { class: "load-avg-row" }, iP = { class: "load-1m" }, nP = { class: "load-5m" }, aP = { class: "load-15m" }, oP = { class: "chart-body" }, rP = { class: "chart-card-header" }, lP = { class: "chart-title" }, cP = { class: "chart-header-actions" }, uP = { class: "chart-current-value-container" }, dP = { class: "chart-current-value" }, fP = { class: "chart-subtitle" }, hP = { class: "chart-body" }, pP = { class: "chart-card-header disk-io-header" }, mP = { class: "chart-title" }, gP = { class: "chart-header-actions" }, bP = { class: "ping-indicator" }, yP = { class: "net-down" }, vP = { class: "net-up" }, _P = { class: "conn-tcp" }, kP = { class: "conn-udp" }, SP = { class: "chart-body" }, TP = { class: "chart-card-header" }, xP = { class: "chart-title" }, AP = { class: "chart-header-actions" }, CP = { class: "chart-current-value" }, PP = { class: "chart-body" }, wP = { class: "chart-card-header" }, RP = { class: "chart-title" }, MP = { class: "chart-header-actions" }, DP = { class: "chart-current-value" }, IP = { class: "chart-body" }, EP = { class: "chart-card-header" }, OP = { class: "chart-title" }, NP = { class: "chart-header-actions" }, LP = { class: "chart-current-value" }, UP = { class: "chart-body" }, FP = { class: "chart-card-header" }, WP = { class: "chart-title" }, BP = { class: "chart-header-actions" }, HP = { class: "chart-current-value" }, jP = { class: "chart-body" }, VP = { class: "chart-card-header" }, zP = { class: "chart-title" }, qP = { class: "chart-header-actions" }, GP = { class: "chart-current-value" }, KP = { class: "chart-body" }, $P = { class: "chart-card-header" }, JP = { class: "chart-title" }, YP = { class: "chart-header-actions" }, XP = { class: "net-indicator" }, QP = { class: "conn-tcp" }, ZP = { class: "conn-udp" }, ew = { class: "chart-body" }, tw = { class: "chart-card-header" }, sw = { class: "chart-title" }, iw = { class: "chart-header-actions" }, nw = { class: "ping-indicator" }, aw = { class: "chart-body" }, ow = { class: "chart-card-header" }, rw = { class: "chart-title" }, lw = { class: "chart-header-actions" }, cw = { class: "ping-indicator" }, uw = { class: "chart-body" }, dw = { class: "modal-dialog" }, fw = { class: "modal-header" }, hw = { class: "modal-body-content" }, pw = { class: "modal-body-text" }, mw = { class: "modal-footer flex-justify-between" }, Va = 0.167, gw = 12e4, bw = 3e4, Pf = {
  __name: "ServerDetail",
  setup(t) {
    const e = ep(), s = Bv(), i = Et("appConfig", null), n = Et("initialServer"), a = Et("demoHistory", null), o = (p) => {
      var b;
      return ![!1, 0, "0", "false"].includes(((b = n.sysConfig) == null ? void 0 : b[p]) ?? (i == null ? void 0 : i[p]));
    }, r = /* @__PURE__ */ ie("");
    let l = 0, c = e.params.id;
    c || (c = new URLSearchParams(window.location.search).get("id")), c || s.push("/");
    const u = /* @__PURE__ */ ie(0), d = e.query.apiIndex;
    d != null && !isNaN(parseInt(d)) && (u.value = parseInt(d));
    const f = /* @__PURE__ */ ie({}), h = /* @__PURE__ */ ie(Va), m = /* @__PURE__ */ ie(""), g = /* @__PURE__ */ ie(null), v = /* @__PURE__ */ ie(!1), S = /* @__PURE__ */ ie(!1), x = /* @__PURE__ */ ie(0), C = /* @__PURE__ */ ie(!0), k = Jl(), P = {
      props: {
        expanded: { type: Boolean, default: !1 }
      },
      emits: ["toggle"],
      setup(p, { emit: b }) {
        const T = () => p.expanded ? k.value.collapseChart : k.value.expandChart;
        return () => Jt("button", {
          type: "button",
          class: ["chart-expand-btn", { active: p.expanded }],
          title: T(),
          "aria-label": T(),
          "aria-pressed": p.expanded ? "true" : "false",
          onClick: () => b("toggle")
        }, [
          Jt("svg", {
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
            Jt("polyline", { points: "4 14 10 14 10 20" }),
            Jt("polyline", { points: "20 10 14 10 14 4" })
          ] : [
            Jt("polyline", { points: "15 3 21 3 21 9" }),
            Jt("polyline", { points: "9 21 3 21 3 15" }),
            Jt("line", { x1: "21", y1: "3", x2: "14", y2: "10" }),
            Jt("line", { x1: "3", y1: "21", x2: "10", y2: "14" })
          ])
        ]);
      }
    }, D = [
      { field: "ping_ct", lossField: "loss_ct", className: "ping-ct", datasetIndex: 0 },
      { field: "ping_cu", lossField: "loss_cu", className: "ping-cu", datasetIndex: 1 },
      { field: "ping_cm", lossField: "loss_cm", className: "ping-cm", datasetIndex: 2 },
      { field: "ping_bd", lossField: "loss_bd", className: "ping-bd", datasetIndex: 3 },
      { field: "ping_node_1", lossField: "loss_node_1", className: "ping-node-1", datasetIndex: 4 },
      { field: "ping_node_2", lossField: "loss_node_2", className: "ping-node-2", datasetIndex: 5 },
      { field: "ping_node_3", lossField: "loss_node_3", className: "ping-node-3", datasetIndex: 6 },
      { field: "ping_node_4", lossField: "loss_node_4", className: "ping-node-4", datasetIndex: 7 }
    ], R = (p) => String((i == null ? void 0 : i[p.startsWith("node_") ? `${p}_name` : `custom_${p}_name`]) || (p === "bd" ? "BGP" : k.value[`custom${p.toUpperCase().charAt(0)}${p.slice(1)}`]) || p.toUpperCase()), O = ["read_bps", "write_bps", "read_iops", "write_iops", "await_ms", "util"], N = Object.freeze(Object.fromEntries(O.map((p) => [p, 0]))), z = (p, b) => Object.prototype.hasOwnProperty.call(p, b), J = (p) => p && typeof p == "object" && !Array.isArray(p), B = (p) => {
      if (p == null || p === "") return null;
      const b = Number.parseFloat(p);
      return Number.isFinite(b) ? b : null;
    }, ae = (p) => J(p) ? O.some((b) => z(p, b) && B(p[b]) !== null) : !1, be = (p) => J(p) ? ae(p.disk) : !1, fe = (p) => p === "disk", ce = (p, b) => {
      if (!p || typeof p != "object" || !ae(p.disk)) return 0;
      const T = z(p.disk, b) ? p.disk[b] : null;
      return B(T) ?? 0;
    }, j = (p) => Object.fromEntries(
      O.map((b) => [b, ce(p, b)])
    ), $ = (p) => (b) => ce(b, p), oe = (p) => {
      const b = Number.parseFloat(p);
      return Number.isFinite(b) ? b.toFixed(1) : "0.0";
    }, De = (p) => {
      const b = Number.parseFloat(p);
      if (!Number.isFinite(b)) return "0";
      const T = Math.abs(b);
      return T >= 1e4 ? `${(b / 1e3).toFixed(0)}k` : T >= 1e3 ? `${(b / 1e3).toFixed(1)}k` : T >= 100 ? b.toFixed(0) : b.toFixed(1);
    }, He = pe(() => [
      { hours: Va, label: "10m" },
      { hours: 0.5, label: "30m" },
      { hours: 1, label: "1h" },
      { hours: 6, label: "6h" },
      { hours: 12, label: "12h" },
      { hours: 24, label: "24h" },
      { hours: 48, label: "2d" },
      { hours: 96, label: "4d" },
      { hours: 168, label: "7d" }
    ]), Ie = pe(() => nk(f.value)), je = pe(() => (parseFloat(f.value.cpu) || 0).toFixed(1)), Xe = (p) => {
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
    }, Qe = pe(() => Xe(f.value.gpu_info)), st = pe(() => {
      const p = Qe.value;
      return p.length === 0 ? f.value.gpu_info || "N/A" : p.map((b) => b.name || b.id || "GPU").join(" / ");
    }), U = pe(() => {
      const p = Qe.value;
      if (p.length === 0) return "0.0%";
      const b = (T) => {
        if (T == null) return "N/A";
        const M = parseFloat(T);
        return Number.isNaN(M) ? "N/A" : `${M.toFixed(1)}%`;
      };
      return p.length === 1 ? b(p[0].info) : p.map((T) => b(T.info)).join(" / ");
    }), X = (p, b) => {
      if (!p) return null;
      const T = parseFloat(p[b]);
      return Number.isNaN(T) ? null : T;
    }, Z = pe(() => Qe.value.some((p) => X(p, "mem_used") !== null)), re = pe(() => Qe.value.some((p) => X(p, "sm_clock") !== null)), Te = pe(() => Qe.value.some((p) => X(p, "power") !== null)), _ = pe(() => {
      const p = Qe.value;
      return p.length === 0 ? "N/A" : p.map((b) => {
        const T = X(b, "mem_used");
        if (T === null) return "N/A";
        const M = X(b, "mem_total");
        return M !== null ? `${qe(T * 1024 * 1024)} / ${qe(M * 1024 * 1024)}` : qe(T * 1024 * 1024);
      }).join(" / ");
    }), A = pe(() => {
      const p = Qe.value;
      return p.length === 0 ? "N/A" : p.map((b) => {
        const T = X(b, "sm_clock");
        return T === null ? "N/A" : `${Math.round(T)} MHz`;
      }).join(" / ");
    }), w = pe(() => {
      const p = Qe.value;
      return p.length === 0 ? "N/A" : p.map((b) => {
        const T = X(b, "power");
        return T === null ? "N/A" : `${T.toFixed(1)} W`;
      }).join(" / ");
    }), L = pe(() => f.value.ram_total > 0 ? (f.value.ram_used / f.value.ram_total * 100).toFixed(2) : "0.00"), W = pe(() => f.value.disk_total > 0 ? (f.value.disk_used / f.value.disk_total * 100).toFixed(2) : "0.00"), E = pe(() => be(f.value) ? j(f.value) : N), Y = pe(() => Qe.value.length > 0), q = pe(() => {
      const p = /* @__PURE__ */ new Date(), b = String(f.value.expire_date || "").slice(0, 10);
      return (Date.parse(b + "T00:00:00Z") - Date.UTC(p.getFullYear(), p.getMonth(), p.getDate())) / 864e5;
    }), G = pe(() => q.value < 0), H = pe(() => Number.isFinite(q.value) ? window.farmText(q.value < 0 ? "已过期 {n} 天" : q.value === 0 ? "今天到期" : "剩余 {n} 天", { n: Math.abs(q.value) }) : "—"), le = /* @__PURE__ */ ie(null), Q = /* @__PURE__ */ ie(null), ne = /* @__PURE__ */ ie(null), ue = /* @__PURE__ */ ie(null), _e = /* @__PURE__ */ ie(null), Re = /* @__PURE__ */ ie(null), we = /* @__PURE__ */ ie(null), $e = /* @__PURE__ */ ie(null), it = /* @__PURE__ */ ie(null), Tt = /* @__PURE__ */ ie(null), xt = /* @__PURE__ */ ie(null), ss = /* @__PURE__ */ ie(null), ei = /* @__PURE__ */ ie(null), ht = /* @__PURE__ */ ie(null), At = /* @__PURE__ */ ie(!1), ti = /* @__PURE__ */ ie(!1), se = {}, ga = /* @__PURE__ */ ie(!1), ba = /* @__PURE__ */ ie({}), fc = /* @__PURE__ */ ie({}), hc = /* @__PURE__ */ ie(null), pc = /* @__PURE__ */ ie(null), mc = /* @__PURE__ */ ie(null), gc = /* @__PURE__ */ ie(null), bc = /* @__PURE__ */ ie(null), yc = /* @__PURE__ */ ie(null), vc = /* @__PURE__ */ ie(null), _c = /* @__PURE__ */ ie(null), kc = /* @__PURE__ */ ie(null), Sc = /* @__PURE__ */ ie(null), Tc = /* @__PURE__ */ ie(null), xc = /* @__PURE__ */ ie(null), Ac = /* @__PURE__ */ ie(null), Cc = /* @__PURE__ */ ie(null), Pc = /* @__PURE__ */ ie(null), wc = /* @__PURE__ */ ie(null);
    let ya = !1, Rc = !1, tn = 0;
    const Fe = (p) => !!ba.value[p], bm = (p) => {
      Fi(() => {
        requestAnimationFrame(() => {
          const b = se[p];
          b && (typeof b.resize == "function" && b.resize(), b.update("none"));
        });
      });
    }, Ot = (p) => {
      ba.value = {
        ...ba.value,
        [p]: !ba.value[p]
      }, bm(p);
    }, ym = () => {
      ti.value || (ti.value = !0, Fi(() => {
        se.diskIo && (typeof se.diskIo.resize == "function" && se.diskIo.resize(), se.diskIo.update("none"));
      }));
    }, va = (p) => {
      const b = be(p);
      return b && ym(), b;
    }, vm = {
      ping_ct: hc,
      ping_cu: pc,
      ping_cm: mc,
      ping_bd: gc,
      ping_node_1: bc,
      ping_node_2: yc,
      ping_node_3: vc,
      ping_node_4: _c
    }, _m = {
      loss_ct: kc,
      loss_cu: Sc,
      loss_cm: Tc,
      loss_bd: xc,
      loss_node_1: Ac,
      loss_node_2: Cc,
      loss_node_3: Pc,
      loss_node_4: wc
    }, Mc = pe(() => D.filter((p) => {
      const b = f.value[p.field];
      return b !== void 0 && !dn(b);
    })), km = pe(() => Mc.value.length > 0), Sm = pe(() => Mc.value.map((p) => ({
      ...p,
      label: R(p.field.replace("ping_", "")),
      value: vm[p.field].value
    }))), Dc = pe(() => D.filter((p) => f.value[p.field] !== void 0 && !dn(f.value[p.field]) && (fc.value[p.lossField] || Yo(f.value[p.lossField])))), Tm = pe(() => Dc.value.map((p) => ({
      ...p,
      field: p.lossField,
      label: R(p.field.replace("ping_", "")),
      value: _m[p.lossField].value
    })).filter((p) => p.value !== null)), xm = pe(() => Sk(f.value)), Ic = () => {
      try {
        for (const p of Object.keys(se))
          se[p] && (se[p].destroy(), se[p] = null);
      } catch {
      }
    }, sn = (p) => {
      if (!p) return [0, 0, 0];
      const b = String(p).trim().split(/\s+/), T = parseFloat(b[0]) || 0, M = parseFloat(b[1]) || 0, I = parseFloat(b[2]) || 0;
      return [T, M, I];
    }, Yo = (p) => !dn(p) && p !== null && p !== void 0 && p !== "" && !Number.isNaN(parseFloat(p)), Am = pe(() => Dc.value.length > 0), Ec = (p) => {
      if (!p) return null;
      if (typeof p == "string" && !/^\d+$/.test(p)) {
        const b = new Date(p);
        return isNaN(b.getTime()) ? null : b.getTime();
      } else {
        let b = parseInt(p);
        return isNaN(b) ? null : (b < 1e12 && (b *= 1e3), b);
      }
    }, Cm = (p) => {
      const b = Ec(p);
      if (!b) return "N/A";
      const T = Date.now() - b;
      if (T < 0) return "N/A";
      const M = Math.floor(T / 1e3), I = Math.floor(M / 86400), te = Math.floor(M % 86400 / 3600), ee = Math.floor(M % 3600 / 60), ye = String(te).padStart(2, "0"), de = String(ee).padStart(2, "0");
      return I > 0 ? `${I}${I === 1 ? k.value.day : k.value.days}, ${ye}:${de}` : `${ye}:${de}`;
    }, Oc = (p) => {
      const b = Ec(p);
      return b ? tk(b) : "N/A";
    }, Pm = (p, b) => {
      const T = parseInt(p.slice(1, 3), 16), M = parseInt(p.slice(3, 5), 16), I = parseInt(p.slice(5, 7), 16);
      return `rgba(${T}, ${M}, ${I}, ${b})`;
    }, is = (p) => {
      const b = Number((p == null ? void 0 : p.x) ?? p);
      return Number.isFinite(b) ? b : 0;
    }, Ns = (p, b) => ({
      x: String(p),
      y: b
    }), wm = (p) => {
      const b = Number(p);
      if (!Number.isFinite(b)) return String(p || "");
      const T = new Date(b), M = (te) => String(te).padStart(2, "0"), I = `${M(T.getHours())}:${M(T.getMinutes())}`;
      return h.value <= 1 ? `${I}:${M(T.getSeconds())}` : h.value <= 3 ? I : `${M(T.getMonth() + 1)}-${M(T.getDate())} ${I}`;
    }, nn = (p) => {
      if (!p) return;
      const b = /* @__PURE__ */ new Set(), T = [];
      for (const M of p.data.datasets || [])
        for (const I of M.data || []) {
          const te = is(I);
          if (!te) continue;
          const ee = String(te);
          b.has(ee) || (b.add(ee), T.push(ee));
        }
      T.sort((M, I) => Number(M) - Number(I)), p.data.labels = T;
    }, nt = (p, b, T = {}) => ({
      label: p,
      data: [],
      borderColor: b,
      backgroundColor: T.fill ? Pm(b, 0.05) : "transparent",
      fill: !!T.fill,
      tension: T.tension ?? 0.4,
      borderWidth: 1.5,
      pointRadius: 0,
      hoverRadius: 5,
      spanGaps: !1,
      ...T
    }), Nc = ["#ff7b72", "#79c0ff", "#d2a8ff", "#7ee787", "#ffa657", "#ff7b72", "#56d4dd", "#e3b341"], Xo = ["gpu", "gpuMem", "gpuClock", "gpuPower"], Lc = {
      gpu: "info",
      gpuMem: "mem_used",
      gpuClock: "sm_clock",
      gpuPower: "power"
    }, Rm = (p, b) => (T) => {
      const I = Xe(T.gpu_info).find((te) => String(te.id) === String(p));
      return I ? X(I, Lc[b]) : null;
    }, Mm = [
      { key: "cpu", ref: () => le.value, datasets: [nt("CPU", "#00d4aa", { fill: !0 })], unit: "%" },
      { key: "gpu", ref: () => Q.value, datasets: [], unit: "%", legend: !0 },
      { key: "gpuMem", ref: () => ne.value, datasets: [], legend: !0, tickFormat: (p) => qe(p * 1024 * 1024) },
      { key: "gpuClock", ref: () => ue.value, datasets: [], unit: " MHz", legend: !0 },
      { key: "gpuPower", ref: () => _e.value, datasets: [], unit: " W", legend: !0 },
      { key: "ram", ref: () => Re.value, datasets: [nt("Memory", "#b392f0", { fill: !0 }), nt("Swap", "#ffb870", { fill: !0 })], unit: "%", legend: !0 },
      { key: "disk", ref: () => we.value, datasets: [nt("Disk", "#39d2c0", { fill: !0 })], unit: "%" },
      {
        key: "diskIo",
        ref: () => $e.value,
        datasets: [
          nt("Read", "#00d4aa", { fill: !0, yAxisID: "y", formatValue: (p) => qe(p) + "/s" }),
          nt("Write", "#ffb870", { fill: !0, yAxisID: "y", formatValue: (p) => qe(p) + "/s" }),
          nt("Read IOPS", "#4da6ff", { yAxisID: "y1", borderDash: [5, 4], formatValue: (p) => `${oe(p)} ops/s` }),
          nt("Write IOPS", "#b392f0", { yAxisID: "y1", borderDash: [5, 4], formatValue: (p) => `${oe(p)} ops/s` }),
          nt("await", "#f778ba", { yAxisID: "y1", borderDash: [2, 4], formatValue: (p) => `${oe(p)} ms` }),
          nt("util", "#ff7b72", { yAxisID: "y1", borderDash: [8, 4], formatValue: (p) => `${oe(p)}%` })
        ],
        legend: !0,
        tickFormat: (p) => qe(p),
        extraScales: (p) => ({
          y1: {
            beginAtZero: !0,
            position: "right",
            grid: { color: p.grid, drawBorder: !1, drawOnChartArea: !1, tickLength: 0 },
            ticks: {
              color: p.axis,
              font: { size: 9, family: "'JetBrains Mono', monospace" },
              padding: 8,
              callback: De
            }
          }
        })
      },
      { key: "proc", ref: () => Tt.value, datasets: [nt("Processes", "#f778ba", { fill: !0 })] },
      { key: "net", ref: () => it.value, datasets: [nt("Download", "#00d4aa", { fill: !0 }), nt("Upload", "#4da6ff", { fill: !0 })], legend: !0, formatValue: (p) => qe(p) + "/s", tickFormat: (p) => qe(p) },
      { key: "conn", ref: () => xt.value, datasets: [nt("TCP", "#b392f0"), nt("UDP", "#f778ba")], legend: !0 },
      { key: "ping", ref: () => ss.value, datasets: ["ct", "cu", "cm", "bd", "node_1", "node_2", "node_3", "node_4"].map((p, b) => nt(R(p), ["#00d4aa", "#ffb870", "#4da6ff", "#b392f0", "#ff7b72", "#79c0ff", "#7ee787", "#ffa657"][b], { tension: 0.3 })), unit: " ms", legend: !0 },
      { key: "loss", ref: () => ei.value, datasets: ["ct", "cu", "cm", "bd", "node_1", "node_2", "node_3", "node_4"].map((p, b) => nt(R(p), ["#00d4aa", "#ffb870", "#4da6ff", "#b392f0", "#ff7b72", "#79c0ff", "#7ee787", "#ffa657"][b], { tension: 0.3 })), unit: "%", legend: !0 },
      { key: "load", ref: () => ht.value, datasets: [nt(k.value.load1m || "1 Min", "#00d4aa", { tension: 0.3 }), nt(k.value.load5m || "5 Min", "#ffb870", { tension: 0.3 }), nt(k.value.load15m || "15 Min", "#4da6ff", { tension: 0.3 })], legend: !0 }
    ], Qo = () => {
      for (const p of ["ping", "loss"]) {
        const b = se[p];
        if (b) {
          for (const T of D) {
            const M = b.data.datasets[T.datasetIndex];
            if (!M) continue;
            const I = f.value[T.field], te = dn(I), ee = I === void 0;
            M.disabledProbe = te, M.noDataProbe = ee, (te || ee) && (M.hidden = !0, typeof b.setDatasetVisibility == "function" && b.setDatasetVisibility(T.datasetIndex, !1));
          }
          b.update("none");
        }
      }
    };
    let Zo = "";
    const er = () => {
      const p = Qe.value, b = p.map((T) => String(T.id ?? "")).join(",");
      if (b !== Zo) {
        Zo = b;
        for (const T of Xo) {
          const M = se[T];
          if (!M) continue;
          let I = p.map((te, ee) => {
            const ye = T === "gpuMem" ? { fill: !0, formatValue: (xe) => qe(xe * 1024 * 1024) } : { fill: !0 }, de = nt(te.name || `GPU ${ee}`, Nc[ee % Nc.length], ye);
            return de.gpuId = String(te.id ?? ee), de;
          });
          I.length === 0 && I.push(nt("GPU", "#ff7b72", { fill: !0 })), M.data.datasets = I, M.update("none");
        }
      }
    }, wi = (p, b) => typeof window > "u" ? b : window.getComputedStyle(document.body).getPropertyValue(p).trim() || b, Dm = () => typeof document < "u" && document.body.classList.contains("light"), Uc = () => ({
      axis: wi("--text-muted", Dm() ? "rgba(10, 14, 20, 0.8)" : "rgba(211, 218, 227, 0.8)"),
      grid: wi("--border-color", "rgba(30, 42, 58, 0.5)"),
      tooltipBg: wi("--bg-primary", "rgba(10, 14, 20, 0.95)"),
      tooltipTitle: wi("--accent-green", "#00d4aa"),
      tooltipBody: wi("--text-primary", "#d3dae3"),
      tooltipBorder: wi("--border-color", "#1e2a3a")
    }), Im = () => {
      Ic();
      const p = Uc();
      Be.defaults.font.family = getComputedStyle(document.body).fontFamily, Be.defaults.font.size = 10, Be.defaults.color = p.axis, Be.defaults.plugins.tooltip.backgroundColor = p.tooltipBg, Be.defaults.plugins.tooltip.titleColor = p.tooltipTitle, Be.defaults.plugins.tooltip.bodyColor = p.tooltipBody, Be.defaults.plugins.tooltip.borderColor = p.tooltipBorder, Be.defaults.plugins.tooltip.borderWidth = 1, Be.defaults.plugins.tooltip.titleFont = { size: 12, weight: "bold", family: Be.defaults.font.family }, Be.defaults.plugins.tooltip.bodyFont = { size: 11, family: Be.defaults.font.family }, Be.defaults.plugins.tooltip.padding = 12, Be.defaults.plugins.tooltip.cornerRadius = 2;
      const b = (T = "", M = !1, I = null, te = null, ee = null) => {
        const ye = typeof ee == "function" ? ee(p) : ee || {};
        return {
          responsive: !0,
          maintainAspectRatio: !1,
          animation: { duration: Mi.ANIMATION_DURATION, easing: "easeOutCubic" },
          interaction: { mode: "index", intersect: !1 },
          plugins: {
            legend: {
              display: M,
              position: "top",
              labels: {
                boxWidth: 10,
                padding: 12,
                font: { size: 10, family: "'JetBrains Mono', monospace" },
                usePointStyle: !0,
                color: p.axis,
                filter: (de, xe) => {
                  const Pe = xe.datasets[de.datasetIndex];
                  return !(Pe != null && Pe.disabledProbe) && !(Pe != null && Pe.noDataProbe);
                }
              }
            },
            tooltip: {
              callbacks: {
                title: function(de) {
                  var xe, Pe, Ct;
                  if (de.length > 0 && de[0].raw) {
                    const ns = de[0].raw.x ?? ((Ct = (Pe = (xe = de[0].chart) == null ? void 0 : xe.data) == null ? void 0 : Pe.labels) == null ? void 0 : Ct[de[0].dataIndex]);
                    return "> " + new Date(Number(ns)).toLocaleString(void 0, {
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
                  let xe = de.dataset.label || "";
                  xe && (xe += ": ");
                  const Pe = de.parsed.y, Ct = de.dataset.formatValue;
                  return Pe == null ? xe += k.value.timeout : typeof Ct == "function" ? xe += Ct(Pe) : I ? xe += I(Pe) : (xe += typeof Pe == "number" ? Pe.toFixed(2) : Pe, xe += T), "$ " + xe;
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
                maxTicksLimit: Mi.MAX_TICKS,
                autoSkipPadding: 16,
                color: p.axis,
                font: { size: 9, family: "'JetBrains Mono', monospace" },
                maxRotation: 0,
                padding: 8,
                callback: function(de) {
                  return wm(this.getLabelForValue(de));
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
                callback: te || function(de) {
                  return de + T;
                }
              }
            },
            ...ye
          },
          elements: {
            point: { radius: 0, hoverRadius: 5, hitRadius: 10, borderWidth: 0, hoverBorderWidth: 2, hoverBorderColor: "#fff" },
            line: { tension: 0.4, borderWidth: 1.5, fill: !1, spanGaps: !1 }
          }
        };
      };
      for (const T of Mm) {
        const M = T.ref();
        M && (se[T.key] = new Be(M.getContext("2d"), {
          type: "line",
          data: { labels: [], datasets: T.datasets.map((I) => ({ ...I })) },
          options: b(T.unit || "", T.legend, T.formatValue, T.tickFormat, T.extraScales)
        }));
      }
      er(), Qo();
    }, Em = () => {
      const p = Uc();
      Be.defaults.color = p.axis, Be.defaults.plugins.tooltip.backgroundColor = p.tooltipBg, Be.defaults.plugins.tooltip.titleColor = p.tooltipTitle, Be.defaults.plugins.tooltip.bodyColor = p.tooltipBody, Be.defaults.plugins.tooltip.borderColor = p.tooltipBorder, Object.values(se).forEach((b) => {
        if (b) {
          b.options.plugins.legend.labels && (b.options.plugins.legend.labels.color = p.axis);
          for (const T of Object.values(b.options.scales || {}))
            T.title && (T.title.color = p.axis), T.ticks && (T.ticks.color = p.axis), T.grid && (T.grid.color = p.grid);
          b.update("none");
        }
      });
    }, { onThemeChange: Om } = rp();
    Om(Em);
    const Nm = (p = h.value) => {
      var I;
      if (p <= 1) return 300 * 1e3;
      const b = Number((I = g.value) == null ? void 0 : I.long_history_points), T = Ju.LONG_RANGE_POINT_OPTIONS.includes(b) ? b : Ju.DEFAULT_LONG_RANGE_POINTS, M = Math.ceil(p * 60 * 60 * 1e3 / T);
      return Math.max(300 * 1e3, M * 1.9);
    }, Fc = (p, b) => {
      if (!p || !b) return !1;
      const T = Number(p.x), M = Number(b.x);
      if (!Number.isFinite(T) || !Number.isFinite(M)) return !1;
      const I = M - T, te = Nm();
      return I > te;
    }, _a = (p) => {
      if (!p || p.length < 2) return p;
      const b = [];
      for (let T = 0; T < p.length; T++)
        if (b.push(p[T]), T < p.length - 1 && Fc(p[T], p[T + 1])) {
          const M = is(p[T]), te = is(p[T + 1]) - M;
          b.push(Ns(M + te / 2, null));
        }
      return b;
    }, Wc = (p, b) => {
      if (!Array.isArray(p)) return [b];
      let T = null;
      for (let M = p.length - 1; M >= 0; M--) {
        const I = p[M];
        if (I && I.y !== null && I.y !== void 0) {
          T = I;
          break;
        }
      }
      if (T && Fc(T, b)) {
        const M = is(T), I = is(b);
        p.push(Ns(M + (I - M) / 2, null));
      }
      return p.push(b), p;
    }, Bc = (p) => {
      if (!Array.isArray(p)) return 0;
      for (let b = p.length - 1; b >= 0; b--) {
        const T = is(p[b]);
        if (Number.isFinite(T)) return T;
      }
      return 0;
    }, Ve = (p, b, T, M) => {
      if (!p) return;
      const I = p.data.datasets[b];
      if (!I) return;
      let te = [];
      T && T.length > 0 && (te = T.map((ee) => Ns(new Date(ee.timestamp).getTime(), M(ee))), te.sort((ee, ye) => is(ee) - is(ye)), te = _a(te)), I.data = te, nn(p), p.update("none");
    }, tr = (p, b) => (T) => {
      const M = parseFloat(T[b]) || 0;
      return M === 0 ? 0 : parseFloat(T[p]) / M * 100;
    }, at = (p, b = !1) => (T) => {
      const M = parseFloat(T[p]);
      return Number.isNaN(M) ? null : b || M > 0 ? M : null;
    }, Lm = (p, b) => {
      if (!p) return;
      let T = [];
      b && b.length > 0 && (T = b.map((ee) => {
        const ye = ee.load_avg || "0 0 0", de = sn(ye);
        return {
          x: new Date(ee.timestamp).getTime(),
          load1: de[0],
          load5: de[1],
          load15: de[2]
        };
      }), T.sort((ee, ye) => ee.x - ye.x));
      const M = T.map((ee) => Ns(ee.x, ee.load1)), I = T.map((ee) => Ns(ee.x, ee.load5)), te = T.map((ee) => Ns(ee.x, ee.load15));
      p.data.datasets[0].data = _a(M), p.data.datasets[1].data = _a(I), p.data.datasets[2].data = _a(te), nn(p), p.update("none");
    }, Um = () => {
      const p = se.diskIo;
      if (p) {
        for (const b of p.data.datasets || [])
          b.data = [];
        p.data.labels = [], p.update("none");
      }
    }, Hc = async (p) => {
      const b = ++l;
      try {
        const T = a ? a(p) : await ak(String(encodeURIComponent(c)), p, u.value);
        if (b !== l) return;
        if (r.value = T.length ? "" : k.value.noData, !T.length)
          for (const M of Object.values(se)) {
            M.data.labels = [];
            for (const I of M.data.datasets) I.data = [];
          }
        if (tn = 0, fc.value = Object.fromEntries(D.map((M) => [
          M.lossField,
          T.some((I) => Yo(I[M.lossField]))
        ])), T.length > 0) {
          tn = T.reduce((te, ee) => {
            const ye = new Date(ee.timestamp).getTime();
            return Number.isFinite(ye) ? Math.max(te, ye) : te;
          }, 0), Ve(se.cpu, 0, T, at("cpu", !0)), er();
          for (const te of Xo) {
            const ee = se[te];
            if (ee)
              for (let ye = 0; ye < ee.data.datasets.length; ye++) {
                const xe = ee.data.datasets[ye].gpuId, Pe = xe ? Rm(xe, te) : () => null;
                Ve(ee, ye, T, Pe);
              }
          }
          Ve(se.ram, 0, T, tr("ram_used", "ram_total")), Ve(se.ram, 1, T, tr("swap_used", "swap_total")), Ve(se.disk, 0, T, tr("disk_used", "disk_total"));
          const M = T.filter(be);
          M.length > 0 ? (va(M[0]), O.forEach((te, ee) => {
            Ve(se.diskIo, ee, M, $(te));
          })) : (Um(), ti.value = !1, be(f.value) && f.value.last_updated && Kc(f.value, new Date(f.value.last_updated).getTime())), Ve(se.proc, 0, T, at("processes")), Ve(se.net, 0, T, at("net_in_speed", !0)), Ve(se.net, 1, T, at("net_out_speed", !0)), Ve(se.conn, 0, T, at("tcp_conn", !0)), Ve(se.conn, 1, T, at("udp_conn", !0)), Ve(se.ping, 0, T, at("ping_ct", !0)), Ve(se.ping, 1, T, at("ping_cu", !0)), Ve(se.ping, 2, T, at("ping_cm", !0)), Ve(se.ping, 3, T, at("ping_bd", !0)), Ve(se.ping, 4, T, at("ping_node_1", !0)), Ve(se.ping, 5, T, at("ping_node_2", !0)), Ve(se.ping, 6, T, at("ping_node_3", !0)), Ve(se.ping, 7, T, at("ping_node_4", !0)), Ve(se.loss, 0, T, at("loss_ct", !0)), Ve(se.loss, 1, T, at("loss_cu", !0)), Ve(se.loss, 2, T, at("loss_cm", !0)), Ve(se.loss, 3, T, at("loss_bd", !0)), Ve(se.loss, 4, T, at("loss_node_1", !0)), Ve(se.loss, 5, T, at("loss_node_2", !0)), Ve(se.loss, 6, T, at("loss_node_3", !0)), Ve(se.loss, 7, T, at("loss_node_4", !0)), Lm(se.load, T);
          const I = (te, ee, ye = !0) => {
            const de = te.map((xe) => parseFloat(xe[ee])).filter((xe) => !isNaN(xe) && (ye ? xe !== 0 : !0));
            return de.length ? Math.round(de.reduce((xe, Pe) => xe + Pe, 0) / de.length) : null;
          };
          hc.value = I(T, "ping_ct"), pc.value = I(T, "ping_cu"), mc.value = I(T, "ping_cm"), gc.value = I(T, "ping_bd"), bc.value = I(T, "ping_node_1"), yc.value = I(T, "ping_node_2"), vc.value = I(T, "ping_node_3"), _c.value = I(T, "ping_node_4"), kc.value = I(T, "loss_ct", !1), Sc.value = I(T, "loss_cu", !1), Tc.value = I(T, "loss_cm", !1), xc.value = I(T, "loss_bd", !1), Ac.value = I(T, "loss_node_1", !1), Cc.value = I(T, "loss_node_2", !1), Pc.value = I(T, "loss_node_3", !1), wc.value = I(T, "loss_node_4", !1), Qo();
        }
        Fm(p), At.value = !0, await Fi(), requestAnimationFrame(() => {
          Object.values(se).forEach((M) => {
            M.resize(), M.update("none");
          });
        });
      } catch (T) {
        if (b !== l) return;
        if (T && T.status === 401) {
          v.value = !0, h.value = Va, At.value = !0;
          return;
        }
        if (T && T.message === "databaseUpgradeRequired") {
          Rc || (Rc = !0, alert(np(T.message)));
          return;
        }
        At.value = !0, r.value = window.farmText("历史数据读取失败"), console.error("[ERROR] Load history failed:", T);
      }
    }, Fm = (p) => {
      const b = p <= 3 ? Mi.MAX_TICKS : Mi.MAX_TICKS_HOUR;
      Object.values(se).forEach((T) => {
        var M, I;
        (I = (M = T == null ? void 0 : T.options) == null ? void 0 : M.scales) != null && I.x && (T.options.scales.x.ticks.maxTicksLimit = b, delete T.options.scales.x.min, delete T.options.scales.x.max), T && (nn(T), T.update("none"));
      });
    }, Ft = (p, b, T, M, I = !1, te = !1) => {
      if (!p) return;
      const ee = p.data.datasets[b];
      if (!ee) return;
      const ye = new Date(T).getTime(), de = Bc(ee.data);
      if (de && ye <= de) return;
      const xe = Date.now() - h.value * 60 * 60 * 1e3;
      let Pe;
      if (I) {
        const Ct = parseFloat(M);
        Pe = Ct > 0 ? Ct : null;
      } else te && !Yo(M) ? Pe = null : Pe = parseFloat(M) || 0;
      for (ee.data = Wc(ee.data, Ns(ye, Pe)); ee.data.length > Mi.MAX_DATA_POINTS; )
        ee.data.shift();
      ee.data = ee.data.filter((Ct) => is(Ct) >= xe), nn(p), p.update("none");
    }, Wm = ["id", "name", "region", "arch", "os", "kernel_version", "cpu_info", "cpu_cores", "gpu_info", "expire_date", "server_group", "traffic_limit", "net_rx_monthly", "net_tx_monthly", "boot_time", "timestamp", "ip_v4", "ip_v6"], jc = /* @__PURE__ */ new Set([
      "cpu",
      "ram_total",
      "ram_used",
      "swap_total",
      "swap_used",
      "net_in_speed",
      "net_out_speed",
      "disk"
    ]), Bm = /* @__PURE__ */ new Set(["last_updated", "sample_timestamp"]), Hm = (p, b) => {
      var ye;
      const T = se.load;
      if (!T) return;
      const M = sn(b), I = new Date(p).getTime(), te = Bc((ye = T.data.datasets[0]) == null ? void 0 : ye.data);
      if (te && I <= te) return;
      const ee = Date.now() - h.value * 60 * 60 * 1e3;
      for (let de = 0; de < 3; de++) {
        for (T.data.datasets[de].data = Wc(T.data.datasets[de].data, Ns(I, M[de])); T.data.datasets[de].data.length > Mi.MAX_DATA_POINTS; )
          T.data.datasets[de].data.shift();
        T.data.datasets[de].data = T.data.datasets[de].data.filter((xe) => is(xe) >= ee);
      }
      nn(T), T.update("none");
    }, Vc = () => Math.abs(Number(h.value) - Va) < 1e-3;
    let ka = /* @__PURE__ */ new Set();
    const an = () => {
      ka.forEach((p) => clearTimeout(p)), ka.clear();
    }, jm = (p) => !p || typeof p != "object" ? null : p.data || p.payload || p.metrics || null, zc = (p) => {
      var M, I;
      const b = Date.now(), T = Bi(
        ((M = p == null ? void 0 : p.data) == null ? void 0 : M.last_updated) ?? ((I = p == null ? void 0 : p.data) == null ? void 0 : I.timestamp) ?? (p == null ? void 0 : p.ts),
        b
      );
      return {
        ...p.data,
        sample_timestamp: T,
        last_updated: T,
        timestamp: b
      };
    }, qc = (p, b) => {
      const T = setTimeout(() => {
        ka.delete(T), sr(zc(p), {
          mergeMode: "sample",
          chartMode: "sample"
        });
      }, b);
      ka.add(T);
    }, Vm = (p, b = Date.now()) => !p || String(p.serverId) !== String(c) ? [] : (Array.isArray(p.samples) ? p.samples : []).map((M) => {
      const I = jm(M);
      if (!I) return null;
      const te = Bi(
        M.ts ?? M.timestamp ?? I.sample_timestamp ?? I.last_updated ?? I.timestamp ?? p.ts ?? b,
        null
      );
      return te ? { ts: te, data: I } : null;
    }).filter(Boolean).sort((M, I) => M.ts - I.ts), Gc = (p, { messageTs: b = Date.now(), replayCachedReport: T = !1, includeReportUpdate: M = !0 } = {}) => {
      const I = Vm(p, b);
      if (I.length === 0) return;
      const te = Vc();
      if (M) {
        const ns = I[I.length - 1];
        sr(zc(ns), {
          mergeMode: te ? "report" : "all",
          chartMode: "report"
        });
      }
      if (!te) return;
      const ee = Bi(p.reportTs ?? p.report_timestamp, b), ye = Number(p.reportAgeMs), de = Math.max(0, Number.isFinite(ye) ? ye : ee ? Date.now() - ee : 0), xe = T ? DA(I[0].ts, null, { replayCachedReport: !0, reportAgeMs: de }) : I[0].ts;
      if (xe === null) return;
      let Pe = null;
      const Ct = [];
      for (const ns of I)
        ns.ts <= xe ? Pe = ns : Ct.push(ns);
      Pe && qc(Pe, 0);
      for (const ns of Ct) {
        const Jc = Math.max(0, Math.min(ns.ts - xe, gw));
        qc(ns, Jc);
      }
    }, zm = (p) => {
      an();
      const b = Array.isArray(p == null ? void 0 : p.latestReportUpdates) ? p.latestReportUpdates : [];
      for (const T of b)
        Gc(T, {
          messageTs: Date.now(),
          replayCachedReport: !0,
          includeReportUpdate: !1
        });
    }, qm = (p, b) => {
      Ft(se.cpu, 0, b, p.cpu);
      const T = parseFloat(p.ram_total) > 0 ? parseFloat(p.ram_used) / parseFloat(p.ram_total) * 100 : 0;
      Ft(se.ram, 0, b, T);
      const M = parseFloat(p.swap_total) > 0 ? parseFloat(p.swap_used) / parseFloat(p.swap_total) * 100 : 0;
      Ft(se.ram, 1, b, M), Ft(se.net, 0, b, p.net_in_speed), Ft(se.net, 1, b, p.net_out_speed);
    }, Kc = (p, b) => {
      if (!va(p)) return;
      const T = j(p);
      O.forEach((M, I) => {
        Ft(se.diskIo, I, b, T[M]);
      });
    }, Gm = (p, b) => {
      er();
      const T = Xe(p.gpu_info);
      for (const I of Xo) {
        const te = se[I];
        if (te)
          for (let ee = 0; ee < te.data.datasets.length; ee++) {
            const de = te.data.datasets[ee].gpuId, xe = T.find((Ct) => String(Ct.id) === String(de)), Pe = xe ? X(xe, Lc[I]) : null;
            Pe == null ? Ft(te, ee, b, null, !1, !0) : Ft(te, ee, b, Pe);
          }
      }
      const M = parseFloat(p.disk_total) > 0 ? parseFloat(p.disk_used) / parseFloat(p.disk_total) * 100 : 0;
      Ft(se.disk, 0, b, M), Kc(p, b), Ft(se.proc, 0, b, p.processes), Ft(se.conn, 0, b, p.tcp_conn), Ft(se.conn, 1, b, p.udp_conn);
      for (const I of D) {
        const te = (ee, ye, de) => {
          z(p, ye) && (dn(p[ye]) || Ft(ee, I.datasetIndex, b, p[ye], de, !de));
        };
        te(se.ping, I.field, !0), te(se.loss, I.lossField, !1);
      }
      Hm(b, p.load_avg);
    }, Km = (p, b) => {
      Number.isFinite(b) && (tn && b - tn < bw || (Gm(p, b), tn = b));
    }, $m = (p, b) => Wm.includes(p) ? !1 : b === "sample" ? jc.has(p) || Bm.has(p) : b === "report" ? fe(p) || !jc.has(p) : !0, sr = async (p, b = {}) => {
      try {
        const {
          mergeMode: T = "all",
          chartMode: M = "all"
        } = b;
        let I = p;
        if (!I && (I = n, !I) || !I) return;
        if (p) {
          const te = { ...f.value }, ee = va(I);
          for (const ye of Object.keys(I))
            $m(ye, T) && (fe(ye) && !ee || (te[ye] = I[ye]));
          f.value = te;
        } else
          g.value = I.sysConfig || null, f.value = I, va(I), C.value = !1;
        if (Qo(), I.last_updated && ga.value && Vc()) {
          const te = new Date(I.last_updated).getTime();
          (M === "sample" || M === "all") && qm(I, te), (M === "report" || M === "all") && Km(I, te);
        }
        return I.last_updated && (m.value = Oc(I.last_updated)), I;
      } catch (T) {
        return console.error("[ERROR] Update status failed:", T), null;
      }
    }, Jm = (p) => {
      if (an(), p > 24 && !l_()) {
        v.value = !0;
        return;
      }
      h.value = p, Hc(p);
    }, Ym = () => {
      v.value = !1, s.push({
        path: "/admin",
        query: { apiIndex: String(u.value) }
      });
    };
    let Vt = null, ir = !1;
    const nr = async () => {
      if (ya || ga.value) return;
      if (ya = !0, await Fi(), le.value && Q.value && ne.value && ue.value && _e.value && Re.value && we.value && $e.value && it.value && Tt.value && xt.value && ss.value && ei.value && ht.value)
        try {
          Im(), ga.value = !0;
        } finally {
          ya = !1;
        }
      else
        ya = !1, setTimeout(nr, 30);
    }, $c = () => {
      if (Vt)
        if (document.hidden)
          an(), Vt.close();
        else {
          if (S.value || ir)
            return;
          Vt.reconnect();
        }
    }, Xm = () => {
      S.value = !1, ir = !0, Vt == null || Vt.close();
    }, Qm = () => {
      S.value = !1, ir = !1, Vt == null || Vt.reconnect();
    }, Zm = (p) => {
      if (!p || p.type !== "batchUpdate") return;
      const T = (Array.isArray(p.updates) ? p.updates : []).filter((I) => I && String(I.serverId) === String(c));
      if (T.length === 0) return;
      an();
      const M = Bi(p.ts, Date.now());
      for (const I of T)
        Gc(I, { messageTs: M });
    }, eg = () => i ? Array.isArray(i.site_configs) && i.site_configs[u.value] ? i.site_configs[u.value] : u.value === 0 ? i : null : null, tg = async () => {
      try {
        const p = eg();
        x.value = gp(p == null ? void 0 : p.frontend_ws_timeout_minutes), p && Object.prototype.hasOwnProperty.call(p, "theme_options") && pp(p.theme_options);
      } catch (p) {
        console.log("[INFO] Detail theme config pending...", p);
      }
    }, sg = async () => {
      const [p] = await Promise.all([
        sr(),
        tg()
      ]);
      await nr(), await Hc(h.value), zm(p), !a && (Vt = sk(String(c), {
        replay: !1,
        timeoutMinutes: x.value,
        onMessage: Zm,
        onTimeout: () => {
          S.value = !0;
        },
        onStatus: ({ connected: b }) => {
        }
      }, u.value), document.addEventListener("visibilitychange", $c));
    };
    return zi([le, Q, ne, ue, _e, Re, we, $e, it, Tt, xt, ss, ei, ht], () => {
      ga.value || nr();
    }), da(() => {
      sg();
    }), fa(() => {
      document.removeEventListener("visibilitychange", $c), Vt && Vt.close(), an(), Zo = "", Ic();
    }), (p, b) => {
      const T = pb("router-link");
      return ve(), ke("div", IA, [
        Ce(ek, {
          title: f.value.name || "Loading..."
        }, null, 8, ["title"]),
        C.value ? (ve(), ke("div", EA, [
          b[16] || (b[16] = y(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* CACHED */
          )),
          y(
            "div",
            OA,
            "$ " + F(V(k).loading),
            1
            /* TEXT */
          )
        ])) : (ve(), ke(
          ut,
          { key: 1 },
          [
            y("div", NA, [
              Ce(T, {
                to: "/",
                class: "back-btn"
              }, {
                default: Bl(() => [
                  b[17] || (b[17] = y(
                    "svg",
                    {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    },
                    [
                      y("polyline", { points: "15 18 9 12 15 6" })
                    ],
                    -1
                    /* CACHED */
                  )),
                  Le(
                    " " + F(V(k).back),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              vs(y(
                "div",
                LA,
                [
                  (ve(!0), ke(
                    ut,
                    null,
                    vi(He.value, (M) => (ve(), ke("button", {
                      key: M.hours,
                      class: We(["time-btn", { active: h.value === M.hours }]),
                      onClick: (I) => Jm(M.hours)
                    }, F(M.label), 11, UA))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                512
                /* NEED_PATCH */
              ), [
                [Us, At.value]
              ])
            ]),
            y("div", FA, [
              y("div", WA, [
                y("div", BA, [
                  b[19] || (b[19] = y(
                    "span",
                    { class: "prompt" },
                    "root@",
                    -1
                    /* CACHED */
                  )),
                  f.value.region && f.value.region !== "xx" ? (ve(), ke("span", HA, [
                    y("img", {
                      src: V(cp)("flags/" + V(ik)(f.value.region) + ".svg"),
                      alt: f.value.region,
                      class: "flag-img"
                    }, null, 8, jA),
                    Ce(td, {
                      os: f.value.os
                    }, null, 8, ["os"])
                  ])) : (ve(), ke("span", VA, [
                    b[18] || (b[18] = y(
                      "span",
                      { class: "flag-fallback" },
                      "🏳️",
                      -1
                      /* CACHED */
                    )),
                    Ce(td, {
                      os: f.value.os
                    }, null, 8, ["os"])
                  ])),
                  y(
                    "span",
                    null,
                    F(f.value.name || "Loading..."),
                    1
                    /* TEXT */
                  ),
                  b[20] || (b[20] = y(
                    "span",
                    { style: { color: "var(--text-muted)" } },
                    ":~#",
                    -1
                    /* CACHED */
                  ))
                ]),
                y(
                  "span",
                  {
                    class: We(["status-badge", { online: Ie.value, offline: !Ie.value }])
                  },
                  [
                    y(
                      "span",
                      {
                        class: We(["pulse-dot", { online: Ie.value, offline: !Ie.value }])
                      },
                      null,
                      2
                      /* CLASS */
                    ),
                    y(
                      "span",
                      null,
                      F(Ie.value ? V(k).online : V(k).offline),
                      1
                      /* TEXT */
                    )
                  ],
                  2
                  /* CLASS */
                )
              ]),
              y("div", zA, [
                y("div", qA, [
                  y(
                    "span",
                    GA,
                    "⏱ " + F(V(k).uptime),
                    1
                    /* TEXT */
                  ),
                  y(
                    "span",
                    KA,
                    F(Cm(f.value.boot_time)),
                    1
                    /* TEXT */
                  )
                ]),
                o("show_expire") && f.value.expire_date ? (ve(), ke("div", $A, [
                  y(
                    "span",
                    JA,
                    "📅 " + F(V(k).expire),
                    1
                    /* TEXT */
                  ),
                  y(
                    "span",
                    {
                      class: We(["sysinfo-value", { expired: G.value }])
                    },
                    F(H.value),
                    3
                    /* TEXT, CLASS */
                  )
                ])) : Lt("v-if", !0),
                y("div", YA, [
                  y(
                    "span",
                    XA,
                    "💻 " + F(V(k).os) + " / " + F(V(k).architecture),
                    1
                    /* TEXT */
                  ),
                  y(
                    "span",
                    QA,
                    F(f.value.os || "N/A") + " / " + F(f.value.arch || "N/A"),
                    1
                    /* TEXT */
                  )
                ]),
                f.value.kernel_version ? (ve(), ke("div", ZA, [
                  y(
                    "span",
                    eC,
                    "🧩 " + F(V(k).kernelVersion || "Kernel"),
                    1
                    /* TEXT */
                  ),
                  y(
                    "span",
                    tC,
                    F(f.value.kernel_version),
                    1
                    /* TEXT */
                  )
                ])) : Lt("v-if", !0),
                y("div", sC, [
                  y(
                    "span",
                    iC,
                    "🔧 " + F(V(k).cpuInfo),
                    1
                    /* TEXT */
                  ),
                  y(
                    "span",
                    nC,
                    F(f.value.cpu_info || "N/A") + " x " + F(f.value.cpu_cores || "N/A"),
                    1
                    /* TEXT */
                  )
                ]),
                Y.value ? (ve(), ke("div", aC, [
                  y(
                    "span",
                    oC,
                    "🎮 " + F(V(k).gpuInfo || "GPU Info"),
                    1
                    /* TEXT */
                  ),
                  y(
                    "span",
                    rC,
                    F(st.value),
                    1
                    /* TEXT */
                  )
                ])) : Lt("v-if", !0),
                y("div", lC, [
                  y(
                    "span",
                    cC,
                    "💾 " + F(V(k).totalDiskRam),
                    1
                    /* TEXT */
                  ),
                  y(
                    "span",
                    uC,
                    F(V(qe)(f.value.disk_total * 1024 * 1024)) + " / " + F(V(qe)(f.value.ram_total * 1024 * 1024)),
                    1
                    /* TEXT */
                  )
                ]),
                y("div", dC, [
                  y(
                    "span",
                    fC,
                    "📊 " + F(V(k).loadAvg),
                    1
                    /* TEXT */
                  ),
                  y(
                    "span",
                    hC,
                    F(f.value.load_avg || "0.00 0.00 0.00"),
                    1
                    /* TEXT */
                  )
                ]),
                y("div", pC, [
                  y(
                    "span",
                    mC,
                    "🌐 " + F(V(k).totalTraffic),
                    1
                    /* TEXT */
                  ),
                  y(
                    "span",
                    gC,
                    "↓ " + F(V(qe)(f.value.net_rx)) + " / ↑ " + F(V(qe)(f.value.net_tx)),
                    1
                    /* TEXT */
                  )
                ]),
                y("div", bC, [
                  y(
                    "span",
                    yC,
                    "⚡ " + F(V(k).realtimeSpeed),
                    1
                    /* TEXT */
                  ),
                  y(
                    "span",
                    vC,
                    "↓ " + F(V(qe)(f.value.net_in_speed)) + "/s / ↑ " + F(V(qe)(f.value.net_out_speed)) + "/s",
                    1
                    /* TEXT */
                  )
                ]),
                f.value.net_rx_monthly != null || f.value.net_tx_monthly != null ? (ve(), ke("div", _C, [
                  y(
                    "span",
                    kC,
                    "📊 " + F(V(k).monthlyTraffic),
                    1
                    /* TEXT */
                  ),
                  y(
                    "span",
                    SC,
                    "↓ " + F(V(qe)(f.value.net_rx_monthly)) + " / ↑ " + F(V(qe)(f.value.net_tx_monthly)),
                    1
                    /* TEXT */
                  )
                ])) : Lt("v-if", !0),
                o("show_tf") && (f.value.net_rx_monthly != null || f.value.net_tx_monthly != null) ? (ve(), ke("div", TC, [
                  y(
                    "span",
                    xC,
                    "📦 " + F(V(k).monthlyTrafficLimit),
                    1
                    /* TEXT */
                  ),
                  y(
                    "span",
                    AC,
                    F(V(qe)(xm.value)) + " / " + F(f.value.traffic_limit ? V(qe)(f.value.traffic_limit * 1024 * 1024 * 1024) : "Unlimited"),
                    1
                    /* TEXT */
                  )
                ])) : Lt("v-if", !0),
                y("div", CC, [
                  y(
                    "span",
                    PC,
                    "🕐 " + F(V(k).bootTime),
                    1
                    /* TEXT */
                  ),
                  y(
                    "span",
                    wC,
                    F(Oc(f.value.boot_time)),
                    1
                    /* TEXT */
                  )
                ]),
                y("div", RC, [
                  y(
                    "span",
                    MC,
                    "⏰ " + F(V(k).lastUpdate),
                    1
                    /* TEXT */
                  ),
                  y(
                    "span",
                    DC,
                    F(m.value),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ]),
            r.value ? (ve(), ke(
              "p",
              IC,
              F(r.value),
              1
              /* TEXT */
            )) : Lt("v-if", !0),
            y("div", EC, [
              y(
                "div",
                {
                  class: We(["chart-card", { "full-width": Fe("cpu") }])
                },
                [
                  y("div", OC, [
                    y("span", NC, [
                      b[21] || (b[21] = y(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Le(
                        " " + F(V(k).cpuUsage),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", LC, [
                      y(
                        "span",
                        UC,
                        F(je.value) + "%",
                        1
                        /* TEXT */
                      ),
                      Ce(P, {
                        expanded: Fe("cpu"),
                        onToggle: b[0] || (b[0] = (M) => Ot("cpu"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  y("div", FC, [
                    y(
                      "canvas",
                      {
                        ref_key: "cpuChartRef",
                        ref: le
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
              y(
                "div",
                {
                  class: We(["chart-card", { "full-width": Fe("ram") }])
                },
                [
                  y("div", WC, [
                    y("span", BC, [
                      b[22] || (b[22] = y(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Le(
                        " " + F(V(k).memoryUsage),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", HC, [
                      y("div", jC, [
                        y(
                          "span",
                          VC,
                          F(L.value) + "%",
                          1
                          /* TEXT */
                        ),
                        y(
                          "div",
                          zC,
                          F(V(k).swap) + ": " + F(f.value.swap_used || "0") + " / " + F(f.value.swap_total || "0") + " MiB",
                          1
                          /* TEXT */
                        )
                      ]),
                      Ce(P, {
                        expanded: Fe("ram"),
                        onToggle: b[1] || (b[1] = (M) => Ot("ram"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  y("div", qC, [
                    y(
                      "canvas",
                      {
                        ref_key: "ramChartRef",
                        ref: Re
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
              y(
                "div",
                {
                  class: We(["chart-card", { "full-width": Fe("net") }])
                },
                [
                  y("div", GC, [
                    y("span", KC, [
                      b[23] || (b[23] = y(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Le(
                        " " + F(V(k).networkTraffic),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", $C, [
                      y("div", JC, [
                        y(
                          "span",
                          YC,
                          "▼ " + F(V(qe)(f.value.net_in_speed)) + "/s",
                          1
                          /* TEXT */
                        ),
                        y(
                          "span",
                          XC,
                          "▲ " + F(V(qe)(f.value.net_out_speed)) + "/s",
                          1
                          /* TEXT */
                        )
                      ]),
                      Ce(P, {
                        expanded: Fe("net"),
                        onToggle: b[2] || (b[2] = (M) => Ot("net"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  y("div", QC, [
                    y(
                      "canvas",
                      {
                        ref_key: "netChartRef",
                        ref: it
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
              y(
                "div",
                {
                  class: We(["chart-card", { "full-width": Fe("load") }])
                },
                [
                  y("div", ZC, [
                    y("span", eP, [
                      b[24] || (b[24] = y(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Le(
                        " " + F(V(k).loadAvgMonitor),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", tP, [
                      y("div", sP, [
                        y("span", iP, [
                          Le(
                            F(V(k).load1m) + " ",
                            1
                            /* TEXT */
                          ),
                          y(
                            "b",
                            null,
                            F((sn(f.value.load_avg)[0] || 0).toFixed(2)),
                            1
                            /* TEXT */
                          )
                        ]),
                        y("span", nP, [
                          Le(
                            F(V(k).load5m) + " ",
                            1
                            /* TEXT */
                          ),
                          y(
                            "b",
                            null,
                            F((sn(f.value.load_avg)[1] || 0).toFixed(2)),
                            1
                            /* TEXT */
                          )
                        ]),
                        y("span", aP, [
                          Le(
                            F(V(k).load15m) + " ",
                            1
                            /* TEXT */
                          ),
                          y(
                            "b",
                            null,
                            F((sn(f.value.load_avg)[2] || 0).toFixed(2)),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      Ce(P, {
                        expanded: Fe("load"),
                        onToggle: b[3] || (b[3] = (M) => Ot("load"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  y("div", oP, [
                    y(
                      "canvas",
                      {
                        ref_key: "loadChartRef",
                        ref: ht
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
              y(
                "div",
                {
                  class: We(["chart-card", { "full-width": Fe("disk") }])
                },
                [
                  y("div", rP, [
                    y("span", lP, [
                      b[25] || (b[25] = y(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Le(
                        " " + F(V(k).diskUsage),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", cP, [
                      y("div", uP, [
                        y(
                          "span",
                          dP,
                          F(W.value) + "%",
                          1
                          /* TEXT */
                        ),
                        y(
                          "div",
                          fP,
                          F(V(k).used) + " " + F(V(qe)(f.value.disk_used * 1024 * 1024)) + " / " + F(V(qe)(f.value.disk_total * 1024 * 1024)),
                          1
                          /* TEXT */
                        )
                      ]),
                      Ce(P, {
                        expanded: Fe("disk"),
                        onToggle: b[4] || (b[4] = (M) => Ot("disk"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  y("div", hP, [
                    y(
                      "canvas",
                      {
                        ref_key: "diskChartRef",
                        ref: we
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
              vs(y(
                "div",
                {
                  class: We(["chart-card", { "full-width": Fe("diskIo") }])
                },
                [
                  y("div", pP, [
                    y("span", mP, [
                      b[26] || (b[26] = y(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Le(
                        " " + F(V(k).diskIo || "Disk IO"),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", gP, [
                      y("div", bP, [
                        y("span", yP, [
                          b[27] || (b[27] = Le(
                            "R ",
                            -1
                            /* CACHED */
                          )),
                          y(
                            "b",
                            null,
                            F(V(qe)(E.value.read_bps)) + "/s",
                            1
                            /* TEXT */
                          )
                        ]),
                        y("span", vP, [
                          b[28] || (b[28] = Le(
                            "W ",
                            -1
                            /* CACHED */
                          )),
                          y(
                            "b",
                            null,
                            F(V(qe)(E.value.write_bps)) + "/s",
                            1
                            /* TEXT */
                          )
                        ]),
                        y("span", _P, [
                          b[29] || (b[29] = Le(
                            "IOPS ",
                            -1
                            /* CACHED */
                          )),
                          y(
                            "b",
                            null,
                            F(oe(E.value.read_iops)) + "/" + F(oe(E.value.write_iops)),
                            1
                            /* TEXT */
                          )
                        ]),
                        y("span", kP, [
                          b[30] || (b[30] = Le(
                            "await ",
                            -1
                            /* CACHED */
                          )),
                          y(
                            "b",
                            null,
                            F(oe(E.value.await_ms)) + "ms",
                            1
                            /* TEXT */
                          )
                        ]),
                        y("span", null, [
                          b[31] || (b[31] = Le(
                            "util ",
                            -1
                            /* CACHED */
                          )),
                          y(
                            "b",
                            null,
                            F(oe(E.value.util)) + "%",
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      Ce(P, {
                        expanded: Fe("diskIo"),
                        onToggle: b[5] || (b[5] = (M) => Ot("diskIo"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  y("div", SP, [
                    y(
                      "canvas",
                      {
                        ref_key: "diskIoChartRef",
                        ref: $e
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
                [Us, ti.value]
              ]),
              vs(y(
                "div",
                {
                  class: We(["chart-card", { "full-width": Fe("gpu") }])
                },
                [
                  y("div", TP, [
                    y("span", xP, [
                      b[32] || (b[32] = y(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Le(
                        " " + F(V(k).gpuUsage || "GPU Usage"),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", AP, [
                      y(
                        "span",
                        CP,
                        F(U.value),
                        1
                        /* TEXT */
                      ),
                      Ce(P, {
                        expanded: Fe("gpu"),
                        onToggle: b[6] || (b[6] = (M) => Ot("gpu"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  y("div", PP, [
                    y(
                      "canvas",
                      {
                        ref_key: "gpuChartRef",
                        ref: Q
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
                [Us, Y.value]
              ]),
              vs(y(
                "div",
                {
                  class: We(["chart-card", { "full-width": Fe("gpuMem") }])
                },
                [
                  y("div", wP, [
                    y("span", RP, [
                      b[33] || (b[33] = y(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Le(
                        " " + F(V(k).gpuMemory || "GPU Memory"),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", MP, [
                      y(
                        "span",
                        DP,
                        F(_.value),
                        1
                        /* TEXT */
                      ),
                      Ce(P, {
                        expanded: Fe("gpuMem"),
                        onToggle: b[7] || (b[7] = (M) => Ot("gpuMem"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  y("div", IP, [
                    y(
                      "canvas",
                      {
                        ref_key: "gpuMemChartRef",
                        ref: ne
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
                [Us, Z.value]
              ]),
              vs(y(
                "div",
                {
                  class: We(["chart-card", { "full-width": Fe("gpuClock") }])
                },
                [
                  y("div", EP, [
                    y("span", OP, [
                      b[34] || (b[34] = y(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Le(
                        " " + F(V(k).gpuClock || "GPU SM Clock"),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", NP, [
                      y(
                        "span",
                        LP,
                        F(A.value),
                        1
                        /* TEXT */
                      ),
                      Ce(P, {
                        expanded: Fe("gpuClock"),
                        onToggle: b[8] || (b[8] = (M) => Ot("gpuClock"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  y("div", UP, [
                    y(
                      "canvas",
                      {
                        ref_key: "gpuClockChartRef",
                        ref: ue
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
                [Us, re.value]
              ]),
              vs(y(
                "div",
                {
                  class: We(["chart-card", { "full-width": Fe("gpuPower") }])
                },
                [
                  y("div", FP, [
                    y("span", WP, [
                      b[35] || (b[35] = y(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Le(
                        " " + F(V(k).gpuPower || "GPU Power"),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", BP, [
                      y(
                        "span",
                        HP,
                        F(w.value),
                        1
                        /* TEXT */
                      ),
                      Ce(P, {
                        expanded: Fe("gpuPower"),
                        onToggle: b[9] || (b[9] = (M) => Ot("gpuPower"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  y("div", jP, [
                    y(
                      "canvas",
                      {
                        ref_key: "gpuPowerChartRef",
                        ref: _e
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
                [Us, Te.value]
              ]),
              y(
                "div",
                {
                  class: We(["chart-card", { "full-width": Fe("proc") }])
                },
                [
                  y("div", VP, [
                    y("span", zP, [
                      b[36] || (b[36] = y(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Le(
                        " " + F(V(k).processes),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", qP, [
                      y(
                        "span",
                        GP,
                        F(f.value.processes || "0"),
                        1
                        /* TEXT */
                      ),
                      Ce(P, {
                        expanded: Fe("proc"),
                        onToggle: b[10] || (b[10] = (M) => Ot("proc"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  y("div", KP, [
                    y(
                      "canvas",
                      {
                        ref_key: "procChartRef",
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
              y(
                "div",
                {
                  class: We(["chart-card", { "full-width": Fe("conn") }])
                },
                [
                  y("div", $P, [
                    y("span", JP, [
                      b[37] || (b[37] = y(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Le(
                        " " + F(V(k).connections),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", YP, [
                      y("div", XP, [
                        y("span", QP, [
                          b[38] || (b[38] = Le(
                            "TCP ",
                            -1
                            /* CACHED */
                          )),
                          y(
                            "b",
                            null,
                            F(f.value.tcp_conn || "0"),
                            1
                            /* TEXT */
                          )
                        ]),
                        y("span", ZP, [
                          b[39] || (b[39] = Le(
                            "UDP ",
                            -1
                            /* CACHED */
                          )),
                          y(
                            "b",
                            null,
                            F(f.value.udp_conn || "0"),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      Ce(P, {
                        expanded: Fe("conn"),
                        onToggle: b[11] || (b[11] = (M) => Ot("conn"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  y("div", ew, [
                    y(
                      "canvas",
                      {
                        ref_key: "connChartRef",
                        ref: xt
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
              vs(y(
                "div",
                {
                  class: We(["chart-card", { "full-width": Fe("ping") }])
                },
                [
                  y("div", tw, [
                    y("span", sw, [
                      b[40] || (b[40] = y(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Le(
                        " " + F(V(k).latencyMonitor),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", iw, [
                      y("div", nw, [
                        (ve(!0), ke(
                          ut,
                          null,
                          vi(Sm.value, (M) => (ve(), ke(
                            "span",
                            {
                              key: M.field,
                              class: We(M.className)
                            },
                            [
                              Le(
                                F(M.label) + " ",
                                1
                                /* TEXT */
                              ),
                              y(
                                "b",
                                null,
                                F(M.value !== null ? M.value + "ms" : "Timeout"),
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
                      Ce(P, {
                        expanded: Fe("ping"),
                        onToggle: b[12] || (b[12] = (M) => Ot("ping"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  y("div", aw, [
                    y(
                      "canvas",
                      {
                        ref_key: "pingChartRef",
                        ref: ss
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
                [Us, km.value]
              ]),
              vs(y(
                "div",
                {
                  class: We(["chart-card", { "full-width": Fe("loss") }])
                },
                [
                  y("div", ow, [
                    y("span", rw, [
                      b[41] || (b[41] = y(
                        "span",
                        { class: "chart-title-icon" },
                        "▸",
                        -1
                        /* CACHED */
                      )),
                      Le(
                        " " + F(V(k).packetLoss || "Packet Loss"),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", lw, [
                      y("div", cw, [
                        (ve(!0), ke(
                          ut,
                          null,
                          vi(Tm.value, (M) => (ve(), ke(
                            "span",
                            {
                              key: M.field,
                              class: We(M.className)
                            },
                            [
                              Le(
                                F(M.label) + " ",
                                1
                                /* TEXT */
                              ),
                              y(
                                "b",
                                null,
                                F(M.value) + "%",
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
                      Ce(P, {
                        expanded: Fe("loss"),
                        onToggle: b[13] || (b[13] = (M) => Ot("loss"))
                      }, null, 8, ["expanded"])
                    ])
                  ]),
                  y("div", uw, [
                    y(
                      "canvas",
                      {
                        ref_key: "lossChartRef",
                        ref: ei
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
                [Us, Am.value]
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        )),
        Ce(uk),
        y(
          "div",
          {
            id: "loginRequiredModal",
            class: We(["modal-overlay", { active: v.value }])
          },
          [
            y("div", dw, [
              y("div", fw, [
                b[42] || (b[42] = y(
                  "div",
                  { class: "modal-title" },
                  "$ sudo login",
                  -1
                  /* CACHED */
                )),
                y("button", {
                  class: "modal-close",
                  onClick: b[14] || (b[14] = (M) => v.value = !1)
                }, "✕")
              ]),
              y("div", hw, [
                y(
                  "p",
                  pw,
                  F(V(k).loginRequired),
                  1
                  /* TEXT */
                )
              ]),
              y("div", mw, [
                y(
                  "button",
                  {
                    onClick: Ym,
                    class: "btn btn-primary"
                  },
                  F(V(k).login),
                  1
                  /* TEXT */
                ),
                y(
                  "button",
                  {
                    onClick: b[15] || (b[15] = (M) => v.value = !1),
                    class: "btn"
                  },
                  F(V(k).cancel),
                  1
                  /* TEXT */
                )
              ])
            ])
          ],
          2
          /* CLASS */
        ),
        Ce(_k, {
          show: S.value,
          trans: V(k),
          onClose: Xm,
          onContinue: Qm
        }, null, 8, ["show", "trans"])
      ]);
    };
  }
}, Pi = new URL(location.href), mm = Pi.pathname.startsWith("/assets/stardew-"), Js = new URL(mm ? "/" : "./index.html", Pi);
Js.search = Pi.search;
const Hr = Pi.hash.slice(1), gm = () => {
  const t = JSON.parse(sessionStorage.getItem("farm-detail-origin") || "null");
  (t == null ? void 0 : t.hash) === Pi.hash && t.page === Js.pathname + Js.search && history.length > 1 ? history.back() : location.replace(Js.href + "#/");
};
function Cl(t) {
  const e = document.createElement("div");
  e.className = "container detail-message";
  const s = document.createElement("a");
  s.className = "back-btn", s.href = Js.href + "#/", s.textContent = window.farmText("返回"), s.onclick = (n) => {
    n.preventDefault(), gm();
  };
  const i = document.createElement("p");
  i.setAttribute("role", "status"), i.textContent = window.farmText(t), e.append(s, i), document.querySelector("#app").replaceChildren(e);
}
async function yw(t) {
  var a;
  if (mm) return null;
  const e = document.createElement("script");
  e.src = new URL("cfsm-adapter.js", Pi).href, await new Promise((o, r) => {
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
async function vw() {
  var u, d;
  if (!/^\/server\/[^/?#]+(?:\?.*)?$/.test(Hr)) return location.replace(Js.href);
  history.replaceState(null, "", Js.pathname + Js.search + Pi.hash), window.addEventListener("hashchange", () => location.reload());
  const t = decodeURIComponent(Hr.slice(8).split("?")[0]);
  await s_();
  const e = { autoRedirect: !1, timeoutMs: a_ };
  Cl("正在读取节点数据");
  const [s, i, n] = await Promise.all([
    Ln.getByIndex("/api/server?id=" + encodeURIComponent(t), 0, e),
    Ln.getByIndex("/api/config", 0, e).catch(() => ({})),
    Ln.getByIndex("/api/servers", 0, e).catch(() => ({})),
    ap(window.farmLocale === "zh-CN" ? "zh" : window.farmLocale)
  ]), a = !((u = s.data) != null && u.id) && ![401, 403].includes(s.status) ? await yw(t) : null, o = (a == null ? void 0 : a.server) || s.data;
  if (!o || String(o.id) !== t) {
    Cl([401, 403].includes(s.status) ? "节点详情需要登录或访问验证" : "节点不存在或暂时无法读取");
    return;
  }
  const r = { ...i.data, ...(d = n.data) == null ? void 0 : d.sysConfig };
  cl.value = r.version || "", mp.value = r.last_workers_version || "", document.title = o.name + " · " + (r.site_title || "星谷哨站");
  const l = Wv({ history: bv(), routes: [
    { path: "/server/:id", component: Pf },
    { path: "/", component: {}, beforeEnter() {
      return gm(), !1;
    } },
    { path: "/admin", component: {}, beforeEnter() {
      return location.assign("/admin#/admin"), !1;
    } }
  ] });
  await l.push(Hr);
  const c = Ey(Pf);
  c.use(l), c.provide("initialServer", o), c.provide("appConfig", r), c.provide("demoHistory", (a == null ? void 0 : a.history) || null), c.mount("#app");
}
vw().catch(() => Cl("节点不存在或暂时无法读取"));
const _w = {
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
}, kw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _w
}, Symbol.toStringTag, { value: "Module" })), Sw = {
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
}, Tw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sw
}, Symbol.toStringTag, { value: "Module" })), xw = {
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
}, Aw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xw
}, Symbol.toStringTag, { value: "Module" })), Cw = {
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
}, Pw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cw
}, Symbol.toStringTag, { value: "Module" })), ww = {
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
}, Rw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ww
}, Symbol.toStringTag, { value: "Module" })), Mw = {
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
}, Dw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mw
}, Symbol.toStringTag, { value: "Module" }));
