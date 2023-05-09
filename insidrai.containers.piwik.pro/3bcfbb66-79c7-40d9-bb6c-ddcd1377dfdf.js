/**
 * All rights reserved to Piwik PRO, Poland, since 2015
 */

! function() {
    "use strict";

    function u(t, e) {
        if (t !== e) throw new TypeError("Cannot instantiate an arrow function")
    }
    var s = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function t(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var r, e = function(t) {
            return t && t.Math == Math && t
        },
        f = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof s && s) || function() {
            return this
        }() || Function("return this")(),
        n = function(t) {
            try {
                return !!t()
            } catch (e) {
                return !0
            }
        },
        h = !n(function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }),
        i = {}.propertyIsEnumerable,
        p = {
            f: (r = Object.getOwnPropertyDescriptor) && !i.call({
                1: 2
            }, 1) ? function(t) {
                t = r(this, t);
                return !!t && t.enumerable
            } : i
        },
        o = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        a = {}.toString,
        c = function(t) {
            return a.call(t).slice(8, -1)
        },
        l = "".split,
        S = n(function() {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function(t) {
            return "String" == c(t) ? l.call(t, "") : Object(t)
        } : Object,
        d = function(t) {
            if (t == undefined) throw TypeError("Can't call method on " + t);
            return t
        },
        g = function(t) {
            return S(d(t))
        },
        y = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        },
        v = function(t, e) {
            if (!y(t)) return t;
            var n, r;
            if (e && "function" == typeof(n = t.toString) && !y(r = n.call(t))) return r;
            if ("function" == typeof(n = t.valueOf) && !y(r = n.call(t))) return r;
            if (!e && "function" == typeof(n = t.toString) && !y(r = n.call(t))) return r;
            throw TypeError("Can't convert object to primitive value")
        },
        w = function(t) {
            return Object(d(t))
        },
        m = {}.hasOwnProperty,
        b = function(t, e) {
            return m.call(w(t), e)
        },
        O = f.document,
        x = y(O) && y(O.createElement),
        C = !h && !n(function() {
            return 7 != Object.defineProperty(x ? O.createElement("div") : {}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        T = Object.getOwnPropertyDescriptor,
        E = {
            f: h ? T : function r(t, e) {
                if (t = g(t), e = v(e, !0), C) try {
                    return T(t, e)
                } catch (n) {}
                if (b(t, e)) return o(!p.f.call(t, e), t[e])
            }
        },
        j = function(t) {
            if (!y(t)) throw TypeError(String(t) + " is not an object");
            return t
        },
        L = Object.defineProperty,
        A = {
            f: h ? L : function At(t, e, n) {
                if (j(t), e = v(e, !0), j(n), C) try {
                    return L(t, e, n)
                } catch (r) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (t[e] = n.value), t
            }
        },
        D = h ? function(t, e, n) {
            return A.f(t, e, o(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        },
        k = function(t, e) {
            try {
                D(f, t, e)
            } catch (n) {
                f[t] = e
            }
            return e
        },
        I = "__core-js_shared__",
        M = f[I] || k(I, {}),
        P = Function.toString;
    "function" != typeof M.inspectSource && (M.inspectSource = function(t) {
        return P.call(t)
    });
    var R, F, N, _, W, z, G, U, V, B = M.inspectSource,
        H = f.WeakMap,
        e = "function" == typeof H && /native code/.test(B(H)),
        i = t(function(t) {
            (t.exports = function(t, e) {
                return M[t] || (M[t] = e !== undefined ? e : {})
            })("versions", []).push({
                version: "3.12.1",
                mode: "global",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
            })
        }),
        q = 0,
        J = Math.random(),
        K = function(t) {
            return "Symbol(" + String(t === undefined ? "" : t) + ")_" + (++q + J).toString(36)
        },
        Y = i("keys"),
        Q = {},
        X = "Object already initialized",
        I = f.WeakMap;
    G = e || M.state ? (R = M.state || (M.state = new I), F = R.get, N = R.has, _ = R.set, W = function(t, e) {
        if (N.call(R, t)) throw new TypeError(X);
        return e.facade = t, _.call(R, t, e), e
    }, z = function(t) {
        return F.call(R, t) || {}
    }, function(t) {
        return N.call(R, t)
    }) : (U = Y[V = "state"] || (Y[V] = K(V)), Q[U] = !0, W = function(t, e) {
        if (b(t, U)) throw new TypeError(X);
        return e.facade = t, D(t, U, e), e
    }, z = function(t) {
        return b(t, U) ? t[U] : {}
    }, function(t) {
        return b(t, U)
    });
    var Z = {
            set: W,
            get: z,
            has: G,
            enforce: function(t) {
                return G(t) ? z(t) : W(t, {})
            },
            getterFor: function(n) {
                return function(t) {
                    var e;
                    if (!y(t) || (e = z(t)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
                    return e
                }
            }
        },
        $ = t(function(t) {
            var e = Z.get,
                c = Z.enforce,
                u = String(String).split("String");
            (t.exports = function(t, e, n, r) {
                var i = !!r && !!r.unsafe,
                    o = !!r && !!r.enumerable,
                    a = !!r && !!r.noTargetGet;
                "function" == typeof n && ("string" != typeof e || b(n, "name") || D(n, "name", e), (r = c(n)).source || (r.source = u.join("string" == typeof e ? e : ""))), t !== f ? (i ? !a && t[e] && (o = !0) : delete t[e], o ? t[e] = n : D(t, e, n)) : o ? t[e] = n : k(e, n)
            })(Function.prototype, "toString", function a() {
                return "function" == typeof this && e(this).source || B(this)
            })
        }),
        tt = f,
        et = function(t) {
            return "function" == typeof t ? t : undefined
        },
        H = function(t, e) {
            return arguments.length < 2 ? et(tt[t]) || et(f[t]) : tt[t] && tt[t][e] || f[t] && f[t][e]
        },
        nt = Math.ceil,
        rt = Math.floor,
        it = function(t) {
            return isNaN(t = +t) ? 0 : (0 < t ? rt : nt)(t)
        },
        ot = Math.min,
        at = function(t) {
            return 0 < t ? ot(it(t), 9007199254740991) : 0
        },
        ct = Math.max,
        ut = Math.min,
        st = function(t, e) {
            t = it(t);
            return t < 0 ? ct(t + e, 0) : ut(t, e)
        },
        e = function(c) {
            return function(t, e, n) {
                var r, i = g(t),
                    o = at(i.length),
                    a = st(n, o);
                if (c && e != e) {
                    for (; a < o;)
                        if ((r = i[a++]) != r) return !0
                } else
                    for (; a < o; a++)
                        if ((c || a in i) && i[a] === e) return c || a || 0;
                return !c && -1
            }
        },
        ft = {
            includes: e(!0),
            indexOf: e(!1)
        }.indexOf,
        lt = function(t, e) {
            var n, r = g(t),
                i = 0,
                o = [];
            for (n in r) !b(Q, n) && b(r, n) && o.push(n);
            for (; e.length > i;) b(r, n = e[i++]) && (~ft(o, n) || o.push(n));
            return o
        },
        ht = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        pt = ht.concat("length", "prototype"),
        dt = {
            f: Object.getOwnPropertyNames || function(t) {
                return lt(t, pt)
            }
        },
        gt = {
            f: Object.getOwnPropertySymbols
        },
        yt = H("Reflect", "ownKeys") || function yt(t) {
            var e = dt.f(j(t)),
                n = gt.f;
            return n ? e.concat(n(t)) : e
        },
        vt = /#|\.prototype\./,
        I = function(t, e) {
            t = bt[mt(t)];
            return t == wt || t != St && ("function" == typeof e ? n(e) : !!e)
        },
        mt = I.normalize = function(t) {
            return String(t).replace(vt, ".").toLowerCase()
        },
        bt = I.data = {},
        St = I.NATIVE = "N",
        wt = I.POLYFILL = "P",
        Ot = I,
        xt = E.f,
        e = function(t, e) {
            var n, r, i, o = t.target,
                a = t.global,
                c = t.stat,
                u = a ? f : c ? f[o] || k(o, {}) : (f[o] || {}).prototype;
            if (u)
                for (n in e) {
                    if (r = e[n], i = t.noTargetGet ? (i = xt(u, n)) && i.value : u[n], !Ot(a ? n : o + (c ? "." : "#") + n, t.forced) && i !== undefined) {
                        if (typeof r == typeof i) continue;
                        ! function(t, e) {
                            for (var n = yt(e), r = A.f, i = E.f, o = 0; o < n.length; o++) {
                                var a = n[o];
                                b(t, a) || r(t, a, i(e, a))
                            }
                        }(r, i)
                    }(t.sham || i && i.sham) && D(r, "sham", !0), $(u, n, r, t)
                }
        },
        Ct = function(t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t
        },
        Tt = [].slice,
        Et = {};
    e({
        target: "Function",
        proto: !0
    }, {
        bind: Function.bind || function(e) {
            var n = Ct(this),
                r = Tt.call(arguments, 1),
                i = function() {
                    var t = r.concat(Tt.call(arguments));
                    return this instanceof i ? function(t, e, n) {
                        if (!(e in Et)) {
                            for (var r = [], i = 0; i < e; i++) r[i] = "a[" + i + "]";
                            Et[e] = Function("C,a", "return new C(" + r.join(",") + ")")
                        }
                        return Et[e](t, n)
                    }(n, t.length, t) : n.apply(e, t)
                };
            return y(n.prototype) && (i.prototype = n.prototype), i
        }
    });
    var jt = Object.keys || function Y(t) {
            return lt(t, ht)
        },
        Lt = Object.assign,
        At = Object.defineProperty,
        I = !Lt || n(function() {
            if (h && 1 !== Lt({
                    b: 1
                }, Lt(At({}, "a", {
                    enumerable: !0,
                    get: function() {
                        At(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return 1;
            var t = {},
                e = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return t[n] = 7, r.split("").forEach(function(t) {
                e[t] = t
            }), 7 != Lt({}, t)[n] || jt(Lt({}, e)).join("") != r
        }) ? function(t, e) {
            for (var n = w(t), r = arguments.length, i = 1, o = gt.f, a = p.f; i < r;)
                for (var c, u = S(arguments[i++]), s = o ? jt(u).concat(o(u)) : jt(u), f = s.length, l = 0; l < f;) c = s[l++], h && !a.call(u, c) || (n[c] = u[c]);
            return n
        } : Lt;
    e({
        target: "Object",
        stat: !0,
        forced: Object.assign !== I
    }, {
        assign: I
    });
    var Dt = "ppms_webstorage",
        kt = {
            enableLocalStorage: !0
        },
        It = Array.isArray || function It(t) {
            return "Array" == c(t)
        },
        Mt = function(t, e, n) {
            e = v(e);
            e in t ? A.f(t, e, o(0, n)) : t[e] = n
        },
        I = H("navigator", "userAgent") || "",
        H = f.process,
        H = H && H.versions,
        H = H && H.v8;
    H ? Gt = (Wt = H.split("."))[0] < 4 ? 1 : Wt[0] + Wt[1] : I && (!(Wt = I.match(/Edge\/(\d+)/)) || 74 <= Wt[1]) && (Wt = I.match(/Chrome\/(\d+)/)) && (Gt = Wt[1]);
    var Pt = Gt && +Gt,
        Rt = !!Object.getOwnPropertySymbols && !n(function() {
            return !String(Symbol()) || !Symbol.sham && Pt && Pt < 41
        }),
        I = Rt && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Ft = i("wks"),
        Nt = f.Symbol,
        _t = I ? Nt : Nt && Nt.withoutSetter || K,
        Wt = function(t) {
            return b(Ft, t) && (Rt || "string" == typeof Ft[t]) || (Rt && b(Nt, t) ? Ft[t] = Nt[t] : Ft[t] = _t("Symbol." + t)), Ft[t]
        },
        zt = Wt("species"),
        Gt = function(e) {
            return 51 <= Pt || !n(function() {
                var t = [];
                return (t.constructor = {})[zt] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== t[e](Boolean).foo
            })
        },
        i = Gt("slice"),
        Ut = Wt("species"),
        Vt = [].slice,
        Bt = Math.max;
    e({
        target: "Array",
        proto: !0,
        forced: !i
    }, {
        slice: function Tt(t, e) {
            var n, r, i, o = g(this),
                a = at(o.length),
                c = st(t, a),
                u = st(e === undefined ? a : e, a);
            if (It(o) && ((n = "function" == typeof(n = o.constructor) && (n === Array || It(n.prototype)) || y(n) && null === (n = n[Ut]) ? undefined : n) === Array || n === undefined)) return Vt.call(o, c, u);
            for (r = new(n === undefined ? Array : n)(Bt(u - c, 0)), i = 0; c < u; c++, i++) c in o && Mt(r, i, o[c]);
            return r.length = i, r
        }
    });
    var I = Date.prototype,
        Ht = "Invalid Date",
        i = "toString",
        qt = I[i],
        Jt = I.getTime;
    new Date(NaN) + "" != Ht && $(I, i, function a() {
        var t = Jt.call(this);
        return t == t ? qt.call(this) : Ht
    });
    var Kt = Wt("species"),
        Yt = function(t, e) {
            var n;
            return new((n = It(t) && ("function" == typeof(n = t.constructor) && (n === Array || It(n.prototype)) || y(n) && null === (n = n[Kt])) ? undefined : n) === undefined ? Array : n)(0 === e ? 0 : e)
        },
        Qt = Wt("isConcatSpreadable"),
        Xt = 9007199254740991,
        Zt = "Maximum allowed index exceeded",
        i = 51 <= Pt || !n(function() {
            var t = [];
            return t[Qt] = !1, t.concat()[0] !== t
        }),
        Wt = Gt("concat");
    e({
        target: "Array",
        proto: !0,
        forced: !i || !Wt
    }, {
        concat: function(t) {
            for (var e, n, r, i = w(this), o = Yt(i, 0), a = 0, c = -1, u = arguments.length; c < u; c++)
                if (function(t) {
                        if (!y(t)) return !1;
                        var e = t[Qt];
                        return e !== undefined ? !!e : It(t)
                    }(r = -1 === c ? i : arguments[c])) {
                    if (n = at(r.length), Xt < a + n) throw TypeError(Zt);
                    for (e = 0; e < n; e++, a++) e in r && Mt(o, a, r[e])
                } else {
                    if (Xt <= a) throw TypeError(Zt);
                    Mt(o, a++, r)
                }
            return o.length = a, o
        }
    });
    var $t = [].push,
        Wt = function(h) {
            var p = 1 == h,
                d = 2 == h,
                g = 3 == h,
                y = 4 == h,
                v = 6 == h,
                m = 7 == h,
                b = 5 == h || v;
            return function(t, e, n, r) {
                for (var i, o, a = w(t), c = S(a), u = function(r, i, t) {
                        if (Ct(r), i === undefined) return r;
                        switch (t) {
                            case 0:
                                return function() {
                                    return r.call(i)
                                };
                            case 1:
                                return function(t) {
                                    return r.call(i, t)
                                };
                            case 2:
                                return function(t, e) {
                                    return r.call(i, t, e)
                                };
                            case 3:
                                return function(t, e, n) {
                                    return r.call(i, t, e, n)
                                }
                        }
                        return function() {
                            return r.apply(i, arguments)
                        }
                    }(e, n, 3), s = at(c.length), f = 0, r = r || Yt, l = p ? r(t, s) : d || m ? r(t, 0) : undefined; f < s; f++)
                    if ((b || f in c) && (o = u(i = c[f], f, a), h))
                        if (p) l[f] = o;
                        else if (o) switch (h) {
                    case 3:
                        return !0;
                    case 5:
                        return i;
                    case 6:
                        return f;
                    case 2:
                        $t.call(l, i)
                } else switch (h) {
                    case 4:
                        return !1;
                    case 7:
                        $t.call(l, i)
                }
                return v ? -1 : g || y ? y : l
            }
        },
        Wt = {
            forEach: Wt(0),
            map: Wt(1),
            filter: Wt(2),
            some: Wt(3),
            every: Wt(4),
            find: Wt(5),
            findIndex: Wt(6),
            filterOut: Wt(7)
        },
        te = Wt.filter;
    e({
        target: "Array",
        proto: !0,
        forced: !Gt("filter")
    }, {
        filter: function(t) {
            return te(this, t, 1 < arguments.length ? arguments[1] : undefined)
        }
    });
    var ee, ne = function ne(t) {
            var c = this;
            this.getAll = function() {
                return u(this, c), this.getInternalStorage()
            }.bind(this), this.set = function(t, e, n) {
                var r = this;
                u(this, c), this.remove(t, n);
                var i = function i(t) {
                    var e = this;
                    u(this, r);
                    var n = function(t) {
                        return u(this, e), 1 < t.length && "/" === t[t.length - 1] ? n(t.slice(0, -1)) : t
                    }.bind(this);
                    return t === undefined ? "/" : "" === t ? n(this.window.location.pathname) : t
                }.bind(this);
                n.expires && n.expires.getTime() < (new Date).getTime() || (n = [].concat(this.getInternalStorage(), [{
                    key: t,
                    value: e,
                    options: {
                        expires: n.expires.toUTCString(),
                        path: i(n.path),
                        domain: n.domain,
                        secure: n.secure,
                        sameSite: n.sameSite
                    }
                }]), this.setInternalStorage(n))
            }.bind(this), this.remove = function(r, t) {
                var i = this;
                u(this, c);
                var e = this.getInternalStorage(),
                    o = t ? t.domain : undefined,
                    a = t && "undefined" != typeof t.path ? t.path : "/",
                    e = e.filter(function(t) {
                        u(this, i);
                        var e = t.key === r,
                            n = t.options.domain === o,
                            t = t.options.path === a;
                        return !(e && n && t)
                    }.bind(this));
                this.setInternalStorage(e)
            }.bind(this), this.getInternalStorage = function() {
                var t;
                u(this, c);
                try {
                    t = JSON.parse(localStorage.getItem(Dt) || "[]")
                } catch (e) {
                    return localStorage.removeItem(Dt), []
                }
                return t
            }.bind(this), this.setInternalStorage = function(t) {
                u(this, c), localStorage.setItem(Dt, JSON.stringify(t))
            }.bind(this), this.removeExpired = function() {
                var e = this;
                u(this, c);
                var t = this.getInternalStorage().filter(function(t) {
                    return u(this, e), new Date(t.options.expires) >= new Date
                }.bind(this));
                this.setInternalStorage(t)
            }.bind(this), this.window = t, this.removeExpired()
        },
        re = t(function(t, e) {
            var r = s && s.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };

            function i(t, e) {
                if (!e) return "";
                t = "; " + t;
                return !0 === e ? t : t + "=" + e
            }

            function o(t, e, n) {
                return encodeURIComponent(t).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/\(/g, "%28").replace(/\)/g, "%29") + "=" + encodeURIComponent(e).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + ("number" == typeof(e = n).expires && ((n = new Date).setMilliseconds(n.getMilliseconds() + 864e5 * e.expires), e.expires = n), i("Expires", e.expires ? e.expires.toUTCString() : "") + i("Domain", e.domain) + i("Path", e.path) + i("Secure", e.secure) + i("SameSite", e.sameSite))
            }

            function n(t) {
                for (var e = {}, n = t ? t.split("; ") : [], r = /(%[\dA-F]{2})+/gi, i = 0; i < n.length; i++) {
                    var o = n[i].split("="),
                        a = o.slice(1).join("=");
                    '"' === a.charAt(0) && (a = a.slice(1, -1));
                    try {
                        e[o[0].replace(r, decodeURIComponent)] = a.replace(r, decodeURIComponent)
                    } catch (c) {}
                }
                return e
            }

            function a() {
                return n(document.cookie)
            }

            function c(t, e, n) {
                document.cookie = o(t, e, r({
                    path: "/"
                }, n))
            }
            e.__esModule = !0, e.encode = o, e.parse = n, e.getAll = a, e.get = function(t) {
                return a()[t]
            }, e.set = c, e.remove = function(t, e) {
                c(t, "", r(r({}, e), {
                    expires: -1
                }))
            }
        });
    (ee = re) && ee.__esModule && Object.prototype.hasOwnProperty.call(ee, "default") && ee["default"];
    re.encode, re.parse;
    var ie = re.getAll,
        oe = re.get,
        ae = re.set,
        ce = re.remove,
        ue = function ue() {
            var e = this;
            this.get = function(t) {
                u(this, e);
                t = oe(t);
                return t !== undefined ? t : null
            }.bind(this), this.getAll = function() {
                return u(this, e), ie()
            }.bind(this)
        },
        se = function se() {
            var i = this;
            this.set = function(t, e, n) {
                u(this, i);
                var r = n && n.path || "/";
                ae(t, e, Object.assign({}, n, {
                    path: r
                }))
            }.bind(this), this.remove = function(t, e) {
                u(this, i), ce(t, e || {})
            }.bind(this)
        },
        fe = function fe(t) {
            var e = this;
            this.getCookieReader = function() {
                return u(this, e), this.cookieReader
            }.bind(this), this.getDocumentCookieWriter = function() {
                return u(this, e), this.documentCookieWriter
            }.bind(this), this.getLocalStorage = function() {
                return u(this, e), this.localStorage
            }.bind(this), this.cookieReader = new ue, this.documentCookieWriter = new se, this.localStorage = t.enableLocalStorage ? new ne(window) : null
        };
    e({
        target: "Date",
        stat: !0
    }, {
        now: function() {
            return (new Date).getTime()
        }
    });
    var le, he, pe = function pe() {
            var n = this;
            this.getExpirationDate = function(t) {
                u(this, n);
                var e = t.maxAge,
                    t = t.expires;
                return void 0 !== e && void 0 !== t ? this.maxAgeToDate(e) < t ? this.maxAgeToDate(e) : t : void 0 !== e && void 0 === t ? this.maxAgeToDate(e) : void 0 === e && void 0 !== t ? t : null
            }.bind(this), this.maxAgeToDate = function(t) {
                return u(this, n), new Date(Date.now() + 1e3 * t)
            }.bind(this)
        },
        de = Wt.forEach,
        ge = !!(he = []["forEach"]) && n(function() {
            he.call(null, le || function() {
                throw 1
            }, 1)
        }) ? [].forEach : function(t) {
            return de(this, t, 1 < arguments.length ? arguments[1] : undefined)
        };
    e({
        target: "Array",
        proto: !0,
        forced: [].forEach != ge
    }, {
        forEach: ge
    });
    for (var ye in {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }) {
        var ve = f[ye],
            ve = ve && ve.prototype;
        if (ve && ve.forEach !== ge) try {
            D(ve, "forEach", ge)
        } catch (be) {
            ve.forEach = ge
        }
    }
    var me = function me(t, e) {
        var n = this;
        this.initialize = function() {
            var e = this;
            u(this, n), this.localStorage && this.localStorage.getAll().forEach(function(t) {
                u(this, e), this.cookieWriter.set(t.key, t.value, Object.assign({}, t.options, {
                    expires: new Date(t.options.expires)
                }))
            }.bind(this))
        }.bind(this), this.localStorage = t, this.cookieWriter = e
    };
    window.ppmsWebStorage = function(t) {
        var o = this;
        this.get = function(t) {
            return u(this, o), this.serviceContainer.getCookieReader().get(t)
        }.bind(this), this.getAll = function() {
            return u(this, o), this.serviceContainer.getCookieReader().getAll()
        }.bind(this), this.set = function(t, e, n) {
            u(this, o);
            var r = this.serviceContainer.getLocalStorage(),
                i = (new pe).getExpirationDate({
                    maxAge: n && n.maxAge,
                    expires: n && n.expires
                });
            this.serviceContainer.getDocumentCookieWriter().set(t, e, Object.assign({}, n, {
                expires: i || undefined
            })), r && i && r.set(t, e, Object.assign({}, n, {
                expires: i
            }))
        }.bind(this), this.remove = function(t, e) {
            u(this, o);
            var n = this.serviceContainer.getLocalStorage();
            this.serviceContainer.getDocumentCookieWriter().remove(t, e), n && n.remove(t, e)
        }.bind(this), this.configuration = t || kt, this.serviceContainer = new fe(this.configuration), this.initializer = new me(this.serviceContainer.getLocalStorage(), this.serviceContainer.getDocumentCookieWriter()), this.initializer.initialize()
    }
}();
(function(stg, initial) {
    stg = window.sevenTag = stg || {};
    stg.tagTree = initial.tagTree;
    stg.debugOptions = initial.debugOptions;
    stg.variables = initial.variables;
    stg.configuration = initial.configuration;
    stg.privacy = initial.privacy;
    stg.consentSettings = initial.consentSettings;
    stg.consentTemplatesSettings = initial.consentTemplatesSettings;
}(window.sevenTag, {
    "debugOptions": {
        "containerName": "",
        "containerDate": "2023-02-09T18:07:29+00:00",
        "version": "d38e85b7-74a5-485c-ab69-ba5ac079a3e5",
        "storeDate": "2023-04-03T11:06:17+00:00",
        "enabled": false
    },
    "variables": [{
        "name": "View within session",
        "type": {
            "collector_name": "cookie"
        },
        "value": "firstVisit",
        "options": []
    }, {
        "name": "External referrer",
        "type": {
            "collector_name": "url"
        },
        "value": "externalReferrer",
        "options": []
    }, {
        "name": "Form Name",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "elementName",
        "options": []
    }, {
        "name": "History state",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "newHistoryState",
        "options": []
    }, {
        "name": "Page Hostname",
        "type": {
            "collector_name": "url"
        },
        "value": "hostname",
        "options": []
    }, {
        "name": "Traffic source",
        "type": {
            "collector_name": "url"
        },
        "value": "trafficSource",
        "options": []
    }, {
        "name": "Old history fragment",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "oldHistoryFragment",
        "options": []
    }, {
        "name": "Form ID",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "elementId",
        "options": []
    }, {
        "name": "Page Url",
        "type": {
            "collector_name": "url"
        },
        "value": "href",
        "options": []
    }, {
        "name": "Form Classes",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "elementClasses",
        "options": []
    }, {
        "name": "History source",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "historySource",
        "options": []
    }, {
        "name": "Page Path",
        "type": {
            "collector_name": "url"
        },
        "value": "pathname",
        "options": []
    }, {
        "name": "Consents",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "consents",
        "options": []
    }, {
        "name": "Click Classes",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "elementClasses",
        "options": []
    }, {
        "name": "Click Element",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "elementSelector",
        "options": []
    }, {
        "name": "Old history state",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "oldHistoryState",
        "options": []
    }, {
        "name": "Leave content",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "edge",
        "options": []
    }, {
        "name": "Click ID",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "elementId",
        "options": []
    }, {
        "name": "Page Scroll",
        "type": {
            "collector_name": "document"
        },
        "value": "pageScroll",
        "options": []
    }, {
        "name": "Found Elements",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "foundElements",
        "options": []
    }, {
        "name": "Referrer",
        "type": {
            "collector_name": "document"
        },
        "value": "referrer",
        "options": []
    }, {
        "name": "Click Url",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "elementUrl",
        "options": []
    }, {
        "name": "Returning Visitor",
        "type": {
            "collector_name": "cookie"
        },
        "value": "returningVisitor",
        "options": []
    }, {
        "name": "History fragment",
        "type": {
            "collector_name": "url"
        },
        "value": "hash",
        "options": []
    }, {
        "name": "Campaign",
        "type": {
            "collector_name": "url"
        },
        "value": "campaign",
        "options": []
    }, {
        "name": "Event",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "event",
        "options": []
    }, {
        "name": "Form Url",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "elementUrl",
        "options": []
    }, {
        "name": "Time on website",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "timeOnWebsite",
        "options": []
    }, {
        "name": "Piwik PRO Anonymization",
        "type": {
            "collector_name": "piwik_anonymization"
        },
        "value": "piwik_anonymization",
        "options": []
    }, {
        "name": "SPA tracking: document title",
        "type": {
            "collector_name": "document"
        },
        "value": "title",
        "options": []
    }],
    "tagTree": [{
        "id": "3bcfbb66-79c7-40d9-bb6c-ddcd1377dfdf",
        "name": "Piwik PRO",
        "code": "<script type=\"text/javascript\">\n    var _paq = _paq || [];\n    (function () {\n        var trackAnonymously = {{ Piwik PRO Anonymization }}('analytics');\n        if (trackAnonymously) {\n            _paq.push(['setUserIsAnonymous', 1]);\n            _paq.push(['setVisitorCookieTimeout', 1800]);\n        }\n    }());\n</script>\n\n<script type=\"text/javascript\">\n    var _paq = _paq || [];\n    _paq.push(['setTrackingSource', 'jstc_tm']);\n    _paq.push(['enableLinkTracking']);\n    _paq.push(['setDomains', ['www.insidr.ai']]);\n    _paq.push(['enableHeartBeatTimer']);\n    _paq.push(['trackPageView']);\n    _paq.push(['enableJSErrorTracking']);\n    (function(p,i,w,ik) {\n        var g=ik.createElement('script'),s=ik.getElementsByTagName('script')[0];\n        _paq.push(['setTrackerUrl', p]);\n        _paq.push(['setSiteId', w]);\n        g.type='text/javascript';g.async=true;g.defer=true;g.src=i;s.parentNode.insertBefore(g,s);\n    })('https://insidrai.piwik.pro/ppms.php','https://insidrai.containers.piwik.pro/ppms.js','3bcfbb66\\u002D79c7\\u002D40d9\\u002Dbb6c\\u002Dddcd1377dfdf',document)\n</script>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": false,
        "triggers": [{
            "id": "85828c7a-fa23-410d-82c7-2c5725ca39a9",
            "relation": "3bcfbb66-79c7-40d9-bb6c-ddcd1377dfdf_85828c7a-fa23-410d-82c7-2c5725ca39a9",
            "name": "All page views",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": {
            "link_tracking": true,
            "js_error_tracking": true,
            "track_page_view": true,
            "tracker_js_url": "https://insidrai.containers.piwik.pro/ppms.js",
            "tracker_php_url": "https://insidrai.piwik.pro/ppms.php",
            "tracker_site_id": "3bcfbb66-79c7-40d9-bb6c-ddcd1377dfdf",
            "tracker_domains": ["https://www.insidr.ai"],
            "strict_privacy_mode": false,
            "heart_beat_timer": {
                "enabled": true
            }
        },
        "consentType": "not_require_consent"
    }, {
        "id": "9b4e9840-a9b6-4068-bb53-3f4523ad624f",
        "name": "Piwik PRO Deanonymization",
        "code": "<script type=\"text/javascript\">\n    var _paq = window._paq || [];\n    (function () {\n        var consents = {{ Consents }};\n        var consentType = 'analytics';\n        _paq.push(['setVisitorCookieTimeout', 33955200]);\n        if (typeof consents !== 'undefined' &&\n            consents.hasOwnProperty('current_state') &&\n            consents.current_state.hasOwnProperty(consentType) &&\n            consents.current_state[consentType] === 1 &&\n            consents.hasOwnProperty('previous_state') &&\n            consents.previous_state.hasOwnProperty(consentType) &&\n            consents.previous_state[consentType] !== 1\n        ) {\n            _paq.push(['deanonymizeUser']);\n        }\n    }());\n</script>\n",
        "priority": 0,
        "createdAt": {
            "date": "2023-02-09 18:07:29.000000",
            "timezone_type": 3,
            "timezone": "UTC"
        },
        "updatedAt": {
            "date": "2023-02-09 18:07:29.000000",
            "timezone_type": 3,
            "timezone": "UTC"
        },
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": false,
        "template": "piwik",
        "templateOptions": [],
        "isActive": true,
        "type": "async",
        "isPiwikPRO": true,
        "tagId": "9b4e9840-a9b6-4068-bb53-3f4523ad624f",
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "consentType": "analytics",
        "triggers": [{
            "id": "85828c7a-fa23-410d-82c7-2c5725ca39a9",
            "relation": "9b4e9840-a9b6-4068-bb53-3f4523ad624f_85828c7a-fa23-410d-82c7-2c5725ca39a9",
            "name": "All page views",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }]
        }]
    }, {
        "id": "6579f6d9-1455-495c-9405-254e7f170101",
        "name": "Consent decision",
        "code": "<script>\n    var _paq = window._paq || [];\n\n    (function() {\n        var consents = {{ Consents }};\n        var previousConsents = consents.previous_state;\n        var previousConsentDecisions = [];\n        var currentConsents = consents.current_state;\n        var currentConsentDecisions = [];\n        var consentType;\n\n        function includes(array, value) {\n            for (var i = 0; i < array.length; i++) {\n                if (array[i] === value) {\n                    return true;\n                }\n            }\n            return false;\n        }\n\n        function every(array, value) {\n            for (var i = 0; i < array.length; i++) {\n                if (array[i] !== value) {\n                    return false;\n                }\n            }\n            return true;\n        }\n\n        function getConsentScope(consentDecisions) {\n            if (every(consentDecisions, 1)) {\n                return 'full_consent';\n            }\n\n            if (every(consentDecisions, 0)) {\n                return 'no_consent';\n            }\n\n            return 'any_consent';\n        }\n\n        function getConsentDecision(consents, consentType) {\n            var consentDecision = consents[consentType];\n            if (typeof consentDecision !== 'undefined') {\n                return consentDecision;\n            }\n\n            return 'null';\n        }\n\n        for (consentType in previousConsents) {\n            previousConsentDecisions.push(previousConsents[consentType]);\n        }\n\n        for (consentType in currentConsents) {\n            currentConsentDecisions.push(currentConsents[consentType]);\n        }\n\n        var consentAction = includes(previousConsentDecisions, -1) ? 'first_consent' : 'changed_consent';\n        var consentScope = getConsentScope(currentConsentDecisions);\n\n        _paq.push(['setCustomVariable', 1, getConsentDecision(currentConsents, 'analytics'), getConsentDecision(currentConsents, 'ab_testing_and_personalization'), 'page']);\n        _paq.push(['setCustomVariable', 2, getConsentDecision(currentConsents, 'conversion_tracking'), getConsentDecision(currentConsents, 'marketing_automation'), 'page']);\n        _paq.push(['setCustomVariable', 3, getConsentDecision(currentConsents, 'remarketing'), getConsentDecision(currentConsents, 'user_feedback'), 'page']);\n        _paq.push(['setCustomVariable', 4, getConsentDecision(currentConsents, 'custom_consent'), 'null', 'page']);\n        _paq.push(['trackEvent', 'consent_decision', consentScope, consentAction]);\n\n        for (var i = 1; i <= 5; i++) {\n            _paq.push(['deleteCustomVariable', i, 'page']);\n        }\n    })()\n</script>\n",
        "consentType": "not_require_consent",
        "template": "consent_insights",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": false,
        "triggers": [{
            "id": "e7f66ed3-43fe-4662-8d75-db6f50f2383e",
            "relation": "6579f6d9-1455-495c-9405-254e7f170101_e7f66ed3-43fe-4662-8d75-db6f50f2383e",
            "name": "Consent decision made",
            "conditions": [{
                "id": "707aa6c4-6a2c-4478-b81a-b236d20fe8cb",
                "relation": "6579f6d9-1455-495c-9405-254e7f170101_e7f66ed3-43fe-4662-8d75-db6f50f2383e_707aa6c4-6a2c-4478-b81a-b236d20fe8cb",
                "variable": "Event",
                "action": "contains",
                "value": "stg.consentDecisionMade",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": []
    }, {
        "id": "988b26ad-ebe2-42fa-a695-371ce5259459",
        "name": "Click: Agree to all",
        "code": "<script>\n    var _paq = _paq || [];\n    _paq.push([\"trackEvent\", 'consent_form_click', 'agree_to_all']);\n</script>\n",
        "consentType": "not_require_consent",
        "template": "consent_insights",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": false,
        "triggers": [{
            "id": "22a9cea3-0423-4643-aaf6-7ede28772b14",
            "relation": "988b26ad-ebe2-42fa-a695-371ce5259459_22a9cea3-0423-4643-aaf6-7ede28772b14",
            "name": "Click: Agree to all",
            "conditions": [{
                "id": "1dc6efb9-95fd-40fb-b307-b2b964b7e717",
                "relation": "988b26ad-ebe2-42fa-a695-371ce5259459_22a9cea3-0423-4643-aaf6-7ede28772b14_1dc6efb9-95fd-40fb-b307-b2b964b7e717",
                "variable": "Event",
                "action": "contains",
                "value": "stg.agreeToAllClicked",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": []
    }, {
        "id": "a82c335e-4896-48c6-9885-4e4f7ead04f8",
        "name": "Click: Close",
        "code": "<script>\n    var _paq = _paq || [];\n    _paq.push([\"trackEvent\", 'consent_form_click', 'close']);\n</script>\n",
        "consentType": "not_require_consent",
        "template": "consent_insights",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": false,
        "triggers": [{
            "id": "3a673c4f-0a28-48d9-96ed-dc8d4956fd4c",
            "relation": "a82c335e-4896-48c6-9885-4e4f7ead04f8_3a673c4f-0a28-48d9-96ed-dc8d4956fd4c",
            "name": "Click: Close",
            "conditions": [{
                "id": "fdb0ef5f-4981-4e60-9ed3-2de7de893202",
                "relation": "a82c335e-4896-48c6-9885-4e4f7ead04f8_3a673c4f-0a28-48d9-96ed-dc8d4956fd4c_fdb0ef5f-4981-4e60-9ed3-2de7de893202",
                "variable": "Event",
                "action": "contains",
                "value": "stg.closeButtonClicked",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": []
    }, {
        "id": "86f2ed31-9782-49b6-9c2e-989e78a51ed8",
        "name": "Click: Reject all",
        "code": "<script>\n    var _paq = _paq || [];\n    _paq.push([\"trackEvent\", 'consent_form_click', 'reject_all']);\n</script>\n",
        "consentType": "not_require_consent",
        "template": "consent_insights",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": false,
        "triggers": [{
            "id": "40e7b5d6-c8cd-4f92-9b5e-82fd6136fefe",
            "relation": "86f2ed31-9782-49b6-9c2e-989e78a51ed8_40e7b5d6-c8cd-4f92-9b5e-82fd6136fefe",
            "name": "Click: Reject all",
            "conditions": [{
                "id": "61aef87f-7de2-4e24-a42e-0bd5a626732e",
                "relation": "86f2ed31-9782-49b6-9c2e-989e78a51ed8_40e7b5d6-c8cd-4f92-9b5e-82fd6136fefe_61aef87f-7de2-4e24-a42e-0bd5a626732e",
                "variable": "Event",
                "action": "contains",
                "value": "stg.rejectAllClicked",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": []
    }, {
        "id": "d10463e1-0e75-4ebb-a922-f8ccdbf886b6",
        "name": "Click: Save choices",
        "code": "<script>\n    var _paq = _paq || [];\n    _paq.push([\"trackEvent\", 'consent_form_click', 'save_choices']);\n</script>\n",
        "consentType": "not_require_consent",
        "template": "consent_insights",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": false,
        "triggers": [{
            "id": "79efb39f-71f3-4f50-80ec-fc2c9fd9a60f",
            "relation": "d10463e1-0e75-4ebb-a922-f8ccdbf886b6_79efb39f-71f3-4f50-80ec-fc2c9fd9a60f",
            "name": "Click: Save choices",
            "conditions": [{
                "id": "dea23e71-83d4-46ce-8b6d-088c073a02e0",
                "relation": "d10463e1-0e75-4ebb-a922-f8ccdbf886b6_79efb39f-71f3-4f50-80ec-fc2c9fd9a60f_dea23e71-83d4-46ce-8b6d-088c073a02e0",
                "variable": "Event",
                "action": "contains",
                "value": "stg.saveChoicesClicked",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": []
    }, {
        "id": "a7d16374-4f6b-4ef2-95d7-25d2e37201aa",
        "name": "Impression: Popup",
        "code": "<script>\n    var _paq = _paq || [];\n    _paq.push([\"trackEvent\", 'consent_form_impression', 'popup']);\n</script>\n",
        "consentType": "not_require_consent",
        "template": "consent_insights",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": false,
        "triggers": [{
            "id": "fa8aaf82-4bcc-4f13-ba4a-e75302a854e2",
            "relation": "a7d16374-4f6b-4ef2-95d7-25d2e37201aa_fa8aaf82-4bcc-4f13-ba4a-e75302a854e2",
            "name": "Impression: Popup",
            "conditions": [{
                "id": "13590231-e1a1-4027-9eb3-1c490a67a826",
                "relation": "a7d16374-4f6b-4ef2-95d7-25d2e37201aa_fa8aaf82-4bcc-4f13-ba4a-e75302a854e2_13590231-e1a1-4027-9eb3-1c490a67a826",
                "variable": "Event",
                "action": "contains",
                "value": "stg.consentFormViewMain",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": []
    }, {
        "id": "552983e4-6071-4903-8bfa-f5fd5202bb1a",
        "name": "Impression: Privacy settings",
        "code": "<script>\n    var _paq = _paq || [];\n    _paq.push([\"trackEvent\", 'consent_form_impression', 'privacy_settings']);\n</script>\n",
        "consentType": "not_require_consent",
        "template": "consent_insights",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": false,
        "triggers": [{
            "id": "ebee0d87-e383-4857-b09b-e7470e4a8645",
            "relation": "552983e4-6071-4903-8bfa-f5fd5202bb1a_ebee0d87-e383-4857-b09b-e7470e4a8645",
            "name": "Impression: Privacy settings",
            "conditions": [{
                "id": "53817989-b3f5-4cb4-afe5-a1b9e7b625b6",
                "relation": "552983e4-6071-4903-8bfa-f5fd5202bb1a_ebee0d87-e383-4857-b09b-e7470e4a8645_53817989-b3f5-4cb4-afe5-a1b9e7b625b6",
                "variable": "Event",
                "action": "contains",
                "value": "stg.consentFormViewPrivacyPolicy",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": []
    }, {
        "id": "e63bdacb-1746-4be7-a62c-12db6b3f12f4",
        "name": "Impression: Reminder",
        "code": "<script>\n    var _paq = _paq || [];\n    _paq.push([\"trackEvent\", 'consent_form_impression', 'reminder']);\n</script>\n",
        "consentType": "not_require_consent",
        "template": "consent_insights",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": false,
        "triggers": [{
            "id": "b8359280-76ee-47cf-995e-bf08a91afc53",
            "relation": "e63bdacb-1746-4be7-a62c-12db6b3f12f4_b8359280-76ee-47cf-995e-bf08a91afc53",
            "name": "Impression: Reminder",
            "conditions": [{
                "id": "93f4048b-77cb-458a-bf37-77ff73364d86",
                "relation": "e63bdacb-1746-4be7-a62c-12db6b3f12f4_b8359280-76ee-47cf-995e-bf08a91afc53_93f4048b-77cb-458a-bf37-77ff73364d86",
                "variable": "Event",
                "action": "contains",
                "value": "stg.consentFormViewReminder",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": []
    }, {
        "id": "5b50277d-eb98-454c-a366-58880283ba33",
        "name": "Page scroll: 25%",
        "code": "        <script type=\"text/javascript\">\n    var _paq = _paq || [];\n\n        _paq.push(['trackEvent', 'built-in page scroll', '25%']);\n</script>\n",
        "consentType": "not_require_consent",
        "template": "automatic_scroll_tracking",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": false,
        "triggers": [{
            "id": "a707e294-09d7-4b33-b39b-7422fb8bf537",
            "relation": "5b50277d-eb98-454c-a366-58880283ba33_a707e294-09d7-4b33-b39b-7422fb8bf537",
            "name": "Page scroll: 25%",
            "conditions": [{
                "id": "0846de4f-0853-4fdc-8fda-4d156d42198b",
                "relation": "5b50277d-eb98-454c-a366-58880283ba33_a707e294-09d7-4b33-b39b-7422fb8bf537_0846de4f-0853-4fdc-8fda-4d156d42198b",
                "variable": "Event",
                "action": "equals",
                "value": "stg.scroll",
                "options": []
            }, {
                "id": "e1213b5b-e554-4393-b0d5-624865a5ef39",
                "relation": "5b50277d-eb98-454c-a366-58880283ba33_a707e294-09d7-4b33-b39b-7422fb8bf537_e1213b5b-e554-4393-b0d5-624865a5ef39",
                "variable": "Page Scroll",
                "action": "once_per_page_view",
                "value": 25,
                "options": {
                    "unit": "percentage"
                }
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": []
    }, {
        "id": "43f6fd25-3d0b-4ed9-8ed7-eea48ee25d2a",
        "name": "Page scroll: 50%",
        "code": "        <script type=\"text/javascript\">\n    var _paq = _paq || [];\n\n        _paq.push(['trackEvent', 'built-in page scroll', '50%']);\n</script>\n",
        "consentType": "not_require_consent",
        "template": "automatic_scroll_tracking",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": false,
        "triggers": [{
            "id": "e10e8bca-8a58-4348-82c9-26ad158cf112",
            "relation": "43f6fd25-3d0b-4ed9-8ed7-eea48ee25d2a_e10e8bca-8a58-4348-82c9-26ad158cf112",
            "name": "Page scroll: 50%",
            "conditions": [{
                "id": "0421885d-cc81-4e01-bf57-b7c7ad11ce90",
                "relation": "43f6fd25-3d0b-4ed9-8ed7-eea48ee25d2a_e10e8bca-8a58-4348-82c9-26ad158cf112_0421885d-cc81-4e01-bf57-b7c7ad11ce90",
                "variable": "Event",
                "action": "equals",
                "value": "stg.scroll",
                "options": []
            }, {
                "id": "0c7a60e9-f75a-476f-95e7-7d2cdbec6073",
                "relation": "43f6fd25-3d0b-4ed9-8ed7-eea48ee25d2a_e10e8bca-8a58-4348-82c9-26ad158cf112_0c7a60e9-f75a-476f-95e7-7d2cdbec6073",
                "variable": "Page Scroll",
                "action": "once_per_page_view",
                "value": 50,
                "options": {
                    "unit": "percentage"
                }
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": []
    }, {
        "id": "4f300dd2-307f-459f-9b11-f4b11180d1ea",
        "name": "Page scroll: 75%",
        "code": "        <script type=\"text/javascript\">\n    var _paq = _paq || [];\n\n        _paq.push(['trackEvent', 'built-in page scroll', '75%']);\n</script>\n",
        "consentType": "not_require_consent",
        "template": "automatic_scroll_tracking",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": false,
        "triggers": [{
            "id": "3e82207f-e9d1-411c-ba5b-16bd9de639f0",
            "relation": "4f300dd2-307f-459f-9b11-f4b11180d1ea_3e82207f-e9d1-411c-ba5b-16bd9de639f0",
            "name": "Page scroll: 75%",
            "conditions": [{
                "id": "13a419de-e7eb-4966-9abe-1837de376b1d",
                "relation": "4f300dd2-307f-459f-9b11-f4b11180d1ea_3e82207f-e9d1-411c-ba5b-16bd9de639f0_13a419de-e7eb-4966-9abe-1837de376b1d",
                "variable": "Event",
                "action": "equals",
                "value": "stg.scroll",
                "options": []
            }, {
                "id": "e14ecc0b-3c9a-4c2b-b929-2843bb7e73f2",
                "relation": "4f300dd2-307f-459f-9b11-f4b11180d1ea_3e82207f-e9d1-411c-ba5b-16bd9de639f0_e14ecc0b-3c9a-4c2b-b929-2843bb7e73f2",
                "variable": "Page Scroll",
                "action": "once_per_page_view",
                "value": 75,
                "options": {
                    "unit": "percentage"
                }
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": []
    }, {
        "id": "778d74e0-6b0f-4b2b-b543-9dd115a54c95",
        "name": "Page scroll: 100%",
        "code": "        <script type=\"text/javascript\">\n    var _paq = _paq || [];\n\n        _paq.push(['trackEvent', 'built-in page scroll', '100%']);\n</script>\n",
        "consentType": "not_require_consent",
        "template": "automatic_scroll_tracking",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": false,
        "triggers": [{
            "id": "3aa30c23-3a7d-4d58-9951-415d5f621c34",
            "relation": "778d74e0-6b0f-4b2b-b543-9dd115a54c95_3aa30c23-3a7d-4d58-9951-415d5f621c34",
            "name": "Page scroll: 100%",
            "conditions": [{
                "id": "9902a1f1-5b68-44e9-9a55-fdf3a0146006",
                "relation": "778d74e0-6b0f-4b2b-b543-9dd115a54c95_3aa30c23-3a7d-4d58-9951-415d5f621c34_9902a1f1-5b68-44e9-9a55-fdf3a0146006",
                "variable": "Event",
                "action": "equals",
                "value": "stg.scroll",
                "options": []
            }, {
                "id": "f70b45f2-1c6b-4553-bec1-29c07dab4248",
                "relation": "778d74e0-6b0f-4b2b-b543-9dd115a54c95_3aa30c23-3a7d-4d58-9951-415d5f621c34_f70b45f2-1c6b-4553-bec1-29c07dab4248",
                "variable": "Page Scroll",
                "action": "once_per_page_view",
                "value": 100,
                "options": {
                    "unit": "percentage"
                }
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": []
    }, {
        "id": "a9931342-0458-4467-a3df-2dc4f7b61811",
        "name": "SPA tracking: page view",
        "code": "<script type=\"text/javascript\">\n    var _paq = _paq || [];\n    _paq.push(['setCustomUrl', {{ Page Url }}]);\n    _paq.push(['setDocumentTitle', {{ SPA tracking: document title }}]);\n            _paq.push(['trackPageView']);\n</script>\n",
        "consentType": "not_require_consent",
        "template": "spa_tracking",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": false,
        "triggers": [{
            "id": "a0f23bb2-b3a8-4f8e-bb90-833910f71acb",
            "relation": "a9931342-0458-4467-a3df-2dc4f7b61811_a0f23bb2-b3a8-4f8e-bb90-833910f71acb",
            "name": "SPA tracking: history change",
            "conditions": [{
                "id": "08af68ef-5b0d-4595-8762-bfbfb9cbd847",
                "relation": "a9931342-0458-4467-a3df-2dc4f7b61811_a0f23bb2-b3a8-4f8e-bb90-833910f71acb_08af68ef-5b0d-4595-8762-bfbfb9cbd847",
                "variable": "Event",
                "action": "equals",
                "value": "stg.debouncedHistory",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": []
    }],
    "configuration": {
        "audience_manager_enabled": false,
        "cookies_enabled": true,
        "app_cookies_enabled": true,
        "main_domain": "insidrai.piwik.pro",
        "id": "3bcfbb66-79c7-40d9-bb6c-ddcd1377dfdf",
        "protocol": "https",
        "host": "insidrai.containers.piwik.pro",
        "cdp_enabled": false,
        "delay": 500,
        "data_layer_name": "dataLayer",
        "use_secure_cookies": false,
        "consent_manager_privacy_templates_url": "https://insidrai.containers.piwik.pro/3bcfbb66-79c7-40d9-bb6c-ddcd1377dfdf/privacy-templates.json",
        "consent_manager_privacy_widgets_url": "https://insidrai.containers.piwik.pro/3bcfbb66-79c7-40d9-bb6c-ddcd1377dfdf/privacy-widgets.json"
    },
    "privacy": {
        "enabled": false
    },
    "consentSettings": {
        "user_mode_enabled": false,
        "data_anonymization_mode": "session_cookie_id",
        "cookie_expiration_period": 31536000,
        "cookie_domains": [],
        "consent_enabled": false,
        "data_anonymization_enabled": true,
        "location_recognition_enabled": true,
        "cookie_domains_enabled": false,
        "cookie_stale_period": -1
    },
    "consentTemplatesSettings": {
        "default_language": "en",
        "powered_by_enabled": true,
        "languages": {
            "en": {
                "en": "English"
            }
        },
        "consent_form_variant": "bottom_bar",
        "reminder_enabled": true,
        "reminder_widget_variant": "corner_button"
    }
}));
/*! For license information please see container.async.js.LICENSE.txt */
! function() {
    var e = {
            808: function(e) {
                var t;
                t = function() {
                    return function(e) {
                        var t = {};

                        function n(r) {
                            if (t[r]) return t[r].exports;
                            var i = t[r] = {
                                exports: {},
                                id: r,
                                loaded: !1
                            };
                            return e[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
                        }
                        return n.m = e, n.c = t, n.p = "", n(0)
                    }([function(e, t, n) {
                        "use strict";
                        var r, i = (r = n(1)) && r.__esModule ? r : {
                            default: r
                        };
                        e.exports = i.default
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                            }
                            return e
                        };
                        t.default = h;
                        var i, o = (i = n(2)) && i.__esModule ? i : {
                                default: i
                            },
                            a = function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                return t.default = e, t
                            }(n(4));

                        function s() {}
                        var c = {
                                afterAsync: s,
                                afterDequeue: s,
                                afterStreamStart: s,
                                afterWrite: s,
                                autoFix: !0,
                                beforeEnqueue: s,
                                beforeWriteToken: function(e) {
                                    return e
                                },
                                beforeWrite: function(e) {
                                    return e
                                },
                                done: s,
                                error: function(e) {
                                    throw new Error(e.msg)
                                },
                                releaseAsync: !1
                            },
                            u = 0,
                            l = [],
                            d = null;

                        function p() {
                            var e = l.shift();
                            if (e) {
                                var t = a.last(e);
                                t.afterDequeue(), e.stream = f.apply(void 0, e), t.afterStreamStart()
                            }
                        }

                        function f(e, t, n) {
                            (d = new o.default(e, n)).id = u++, d.name = n.name || d.id, h.streams[d.name] = d;
                            var i = e.ownerDocument,
                                a = {
                                    close: i.close,
                                    open: i.open,
                                    write: i.write,
                                    writeln: i.writeln
                                };

                            function c(e) {
                                e = n.beforeWrite(e), d.write(e), n.afterWrite(e)
                            }
                            r(i, {
                                close: s,
                                open: s,
                                write: function() {
                                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    return c(t.join(""))
                                },
                                writeln: function() {
                                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    return c(t.join("") + "\n")
                                }
                            });
                            var l = d.win.onerror || s;
                            return d.win.onerror = function(e, t, r) {
                                n.error({
                                    msg: e + " - " + t + ": " + r
                                }), l.apply(d.win, [e, t, r])
                            }, d.write(t, (function() {
                                r(i, a), d.win.onerror = l, n.done(), d = null, p()
                            })), d
                        }

                        function h(e, t, n) {
                            if (a.isFunction(n)) n = {
                                done: n
                            };
                            else if ("clear" === n) return l = [], d = null, void(u = 0);
                            n = a.defaults(n, c);
                            var r = [e = /^#/.test(e) ? window.document.getElementById(e.substr(1)) : e.jquery ? e[0] : e, t, n];
                            return e.postscribe = {
                                cancel: function() {
                                    r.stream ? r.stream.abort() : r[1] = s
                                }
                            }, n.beforeEnqueue(r), l.push(r), d || p(), e.postscribe
                        }
                        r(h, {
                            streams: {},
                            queue: l,
                            WriteStream: o.default
                        })
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r, i = Object.assign || function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                                }
                                return e
                            },
                            o = (r = n(3)) && r.__esModule ? r : {
                                default: r
                            },
                            a = function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                return t.default = e, t
                            }(n(4));

                        function s(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }
                        var c = "data-ps-",
                            u = "ps-style",
                            l = "ps-script";

                        function d(e, t) {
                            var n = c + t,
                                r = e.getAttribute(n);
                            return a.existy(r) ? String(r) : r
                        }

                        function p(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                r = c + t;
                            a.existy(n) && "" !== n ? e.setAttribute(r, n) : e.removeAttribute(r)
                        }
                        var f = function() {
                            function e(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                s(this, e), this.root = t, this.options = n, this.doc = t.ownerDocument, this.win = this.doc.defaultView || this.doc.parentWindow, this.parser = new o.default("", {
                                    autoFix: n.autoFix
                                }), this.actuals = [t], this.proxyHistory = "", this.proxyRoot = this.doc.createElement(t.nodeName), this.scriptStack = [], this.writeQueue = [], p(this.proxyRoot, "proxyof", 0)
                            }
                            return e.prototype.write = function() {
                                var e;
                                for ((e = this.writeQueue).push.apply(e, arguments); !this.deferredRemote && this.writeQueue.length;) {
                                    var t = this.writeQueue.shift();
                                    a.isFunction(t) ? this._callFunction(t) : this._writeImpl(t)
                                }
                            }, e.prototype._callFunction = function(e) {
                                var t = {
                                    type: "function",
                                    value: e.name || e.toString()
                                };
                                this._onScriptStart(t), e.call(this.win, this.doc), this._onScriptDone(t)
                            }, e.prototype._writeImpl = function(e) {
                                this.parser.append(e);
                                for (var t = void 0, n = void 0, r = void 0, i = [];
                                    (t = this.parser.readToken()) && !(n = a.isScript(t)) && !(r = a.isStyle(t));)(t = this.options.beforeWriteToken(t)) && i.push(t);
                                i.length > 0 && this._writeStaticTokens(i), n && this._handleScriptToken(t), r && this._handleStyleToken(t)
                            }, e.prototype._writeStaticTokens = function(e) {
                                var t = this._buildChunk(e);
                                return t.actual ? (t.html = this.proxyHistory + t.actual, this.proxyHistory += t.proxy, this.proxyRoot.innerHTML = t.html, this._walkChunk(), t) : null
                            }, e.prototype._buildChunk = function(e) {
                                for (var t = this.actuals.length, n = [], r = [], i = [], o = e.length, a = 0; a < o; a++) {
                                    var s = e[a],
                                        c = s.toString();
                                    if (n.push(c), s.attrs) {
                                        if (!/^noscript$/i.test(s.tagName)) {
                                            var d = t++;
                                            r.push(c.replace(/(\/?>)/, " data-ps-id=" + d + " $1")), s.attrs.id !== l && s.attrs.id !== u && i.push("atomicTag" === s.type ? "" : "<" + s.tagName + " data-ps-proxyof=" + d + (s.unary ? " />" : ">"))
                                        }
                                    } else r.push(c), i.push("endTag" === s.type ? c : "")
                                }
                                return {
                                    tokens: e,
                                    raw: n.join(""),
                                    actual: r.join(""),
                                    proxy: i.join("")
                                }
                            }, e.prototype._walkChunk = function() {
                                for (var e = void 0, t = [this.proxyRoot]; a.existy(e = t.shift());) {
                                    var n = 1 === e.nodeType;
                                    if (!n || !d(e, "proxyof")) {
                                        n && (this.actuals[d(e, "id")] = e, p(e, "id"));
                                        var r = e.parentNode && d(e.parentNode, "proxyof");
                                        r && this.actuals[r].appendChild(e)
                                    }
                                    t.unshift.apply(t, a.toArray(e.childNodes))
                                }
                            }, e.prototype._handleScriptToken = function(e) {
                                var t = this,
                                    n = this.parser.clear();
                                n && this.writeQueue.unshift(n), e.src = e.attrs.src || e.attrs.SRC, (e = this.options.beforeWriteToken(e)) && (e.src && this.scriptStack.length ? this.deferredRemote = e : this._onScriptStart(e), this._writeScriptToken(e, (function() {
                                    t._onScriptDone(e)
                                })))
                            }, e.prototype._handleStyleToken = function(e) {
                                var t = this.parser.clear();
                                t && this.writeQueue.unshift(t), e.type = e.attrs.type || e.attrs.TYPE || "text/css", (e = this.options.beforeWriteToken(e)) && this._writeStyleToken(e), t && this.write()
                            }, e.prototype._writeStyleToken = function(e) {
                                var t = this._buildStyle(e);
                                this._insertCursor(t, u), e.content && (t.styleSheet && !t.sheet ? t.styleSheet.cssText = e.content : t.appendChild(this.doc.createTextNode(e.content)))
                            }, e.prototype._buildStyle = function(e) {
                                var t = this.doc.createElement(e.tagName);
                                return t.setAttribute("type", e.type), a.eachKey(e.attrs, (function(e, n) {
                                    t.setAttribute(e, n)
                                })), t
                            }, e.prototype._insertCursor = function(e, t) {
                                this._writeImpl('<span id="' + t + '"/>');
                                var n = this.doc.getElementById(t);
                                n && n.parentNode.replaceChild(e, n)
                            }, e.prototype._onScriptStart = function(e) {
                                e.outerWrites = this.writeQueue, this.writeQueue = [], this.scriptStack.unshift(e)
                            }, e.prototype._onScriptDone = function(e) {
                                e === this.scriptStack[0] ? (this.scriptStack.shift(), this.write.apply(this, e.outerWrites), !this.scriptStack.length && this.deferredRemote && (this._onScriptStart(this.deferredRemote), this.deferredRemote = null)) : this.options.error({
                                    msg: "Bad script nesting or script finished twice"
                                })
                            }, e.prototype._writeScriptToken = function(e, t) {
                                var n = this._buildScript(e),
                                    r = this._shouldRelease(n),
                                    i = this.options.afterAsync;
                                e.src && (n.src = e.src, this._scriptLoadHandler(n, r ? i : function() {
                                    t(), i()
                                }));
                                try {
                                    this._insertCursor(n, l), n.src && !r || t()
                                } catch (e) {
                                    this.options.error(e), t()
                                }
                            }, e.prototype._buildScript = function(e) {
                                var t = this.doc.createElement(e.tagName);
                                return a.eachKey(e.attrs, (function(e, n) {
                                    t.setAttribute(e, n)
                                })), e.content && (t.text = e.content), t
                            }, e.prototype._scriptLoadHandler = function(e, t) {
                                function n() {
                                    e = e.onload = e.onreadystatechange = e.onerror = null
                                }
                                var r = this.options.error;

                                function o() {
                                    n(), null != t && t(), t = null
                                }

                                function a(e) {
                                    n(), r(e), null != t && t(), t = null
                                }

                                function s(e, t) {
                                    var n = e["on" + t];
                                    null != n && (e["_on" + t] = n)
                                }
                                s(e, "load"), s(e, "error"), i(e, {
                                    onload: function() {
                                        if (e._onload) try {
                                            e._onload.apply(this, Array.prototype.slice.call(arguments, 0))
                                        } catch (t) {
                                            a({
                                                msg: "onload handler failed " + t + " @ " + e.src
                                            })
                                        }
                                        o()
                                    },
                                    onerror: function() {
                                        if (e._onerror) try {
                                            e._onerror.apply(this, Array.prototype.slice.call(arguments, 0))
                                        } catch (t) {
                                            return void a({
                                                msg: "onerror handler failed " + t + " @ " + e.src
                                            })
                                        }
                                        a({
                                            msg: "remote script failed " + e.src
                                        })
                                    },
                                    onreadystatechange: function() {
                                        /^(loaded|complete)$/.test(e.readyState) && o()
                                    }
                                })
                            }, e.prototype._shouldRelease = function(e) {
                                return !/^script$/i.test(e.nodeName) || !!(this.options.releaseAsync && e.src && e.hasAttribute("async"))
                            }, e
                        }();
                        t.default = f
                    }, function(e, t, n) {
                        var r;
                        r = function() {
                            return function(e) {
                                var t = {};

                                function n(r) {
                                    if (t[r]) return t[r].exports;
                                    var i = t[r] = {
                                        exports: {},
                                        id: r,
                                        loaded: !1
                                    };
                                    return e[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
                                }
                                return n.m = e, n.c = t, n.p = "", n(0)
                            }([function(e, t, n) {
                                "use strict";
                                var r, i = (r = n(1)) && r.__esModule ? r : {
                                    default: r
                                };
                                e.exports = i.default
                            }, function(e, t, n) {
                                "use strict";
                                t.__esModule = !0;
                                var r, i = c(n(2)),
                                    o = c(n(3)),
                                    a = (r = n(6)) && r.__esModule ? r : {
                                        default: r
                                    },
                                    s = n(5);

                                function c(e) {
                                    if (e && e.__esModule) return e;
                                    var t = {};
                                    if (null != e)
                                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                    return t.default = e, t
                                }

                                function u(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }
                                var l = {
                                        comment: /^<!--/,
                                        endTag: /^<\//,
                                        atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                        startTag: /^</,
                                        chars: /^[^<]/
                                    },
                                    d = function() {
                                        function e() {
                                            var t = this,
                                                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            u(this, e), this.stream = n;
                                            var o = !1,
                                                s = {};
                                            for (var c in i) i.hasOwnProperty(c) && (r.autoFix && (s[c + "Fix"] = !0), o = o || s[c + "Fix"]);
                                            o ? (this._readToken = (0, a.default)(this, s, (function() {
                                                return t._readTokenImpl()
                                            })), this._peekToken = (0, a.default)(this, s, (function() {
                                                return t._peekTokenImpl()
                                            }))) : (this._readToken = this._readTokenImpl, this._peekToken = this._peekTokenImpl)
                                        }
                                        return e.prototype.append = function(e) {
                                            this.stream += e
                                        }, e.prototype.prepend = function(e) {
                                            this.stream = e + this.stream
                                        }, e.prototype._readTokenImpl = function() {
                                            var e = this._peekTokenImpl();
                                            if (e) return this.stream = this.stream.slice(e.length), e
                                        }, e.prototype._peekTokenImpl = function() {
                                            for (var e in l)
                                                if (l.hasOwnProperty(e) && l[e].test(this.stream)) {
                                                    var t = o[e](this.stream);
                                                    if (t) return "startTag" === t.type && /script|style/i.test(t.tagName) ? null : (t.text = this.stream.substr(0, t.length), t)
                                                }
                                        }, e.prototype.peekToken = function() {
                                            return this._peekToken()
                                        }, e.prototype.readToken = function() {
                                            return this._readToken()
                                        }, e.prototype.readTokens = function(e) {
                                            for (var t = void 0; t = this.readToken();)
                                                if (e[t.type] && !1 === e[t.type](t)) return
                                        }, e.prototype.clear = function() {
                                            var e = this.stream;
                                            return this.stream = "", e
                                        }, e.prototype.rest = function() {
                                            return this.stream
                                        }, e
                                    }();
                                for (var p in t.default = d, d.tokenToString = function(e) {
                                        return e.toString()
                                    }, d.escapeAttributes = function(e) {
                                        var t = {};
                                        for (var n in e) e.hasOwnProperty(n) && (t[n] = (0, s.escapeQuotes)(e[n], null));
                                        return t
                                    }, d.supports = i, i) i.hasOwnProperty(p) && (d.browserHasFlaw = d.browserHasFlaw || !i[p] && p)
                            }, function(e, t) {
                                "use strict";
                                t.__esModule = !0;
                                var n = !1,
                                    r = !1,
                                    i = window.document.createElement("div");
                                try {
                                    var o = "<P><I></P></I>";
                                    i.innerHTML = o, t.tagSoup = n = i.innerHTML !== o
                                } catch (e) {
                                    t.tagSoup = n = !1
                                }
                                try {
                                    i.innerHTML = "<P><i><P></P></i></P>", t.selfClose = r = 2 === i.childNodes.length
                                } catch (e) {
                                    t.selfClose = r = !1
                                }
                                i = null, t.tagSoup = n, t.selfClose = r
                            }, function(e, t, n) {
                                "use strict";
                                t.__esModule = !0;
                                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                };
                                t.comment = function(e) {
                                    var t = e.indexOf("--\x3e");
                                    if (t >= 0) return new i.CommentToken(e.substr(4, t - 1), t + 3)
                                }, t.chars = function(e) {
                                    var t = e.indexOf("<");
                                    return new i.CharsToken(t >= 0 ? t : e.length)
                                }, t.startTag = a, t.atomicTag = function(e) {
                                    var t = a(e);
                                    if (t) {
                                        var n = e.slice(t.length);
                                        if (n.match(new RegExp("</\\s*" + t.tagName + "\\s*>", "i"))) {
                                            var r = n.match(new RegExp("([\\s\\S]*?)</\\s*" + t.tagName + "\\s*>", "i"));
                                            if (r) return new i.AtomicTagToken(t.tagName, r[0].length + t.length, t.attrs, t.booleanAttrs, r[1])
                                        }
                                    }
                                }, t.endTag = function(e) {
                                    var t = e.match(o.endTag);
                                    if (t) return new i.EndTagToken(t[1], t[0].length)
                                };
                                var i = n(4),
                                    o = {
                                        startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                        endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                        attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                        fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i
                                    };

                                function a(e) {
                                    var t, n, a;
                                    if (-1 !== e.indexOf(">")) {
                                        var s = e.match(o.startTag);
                                        if (s) {
                                            var c = (t = {}, n = {}, a = s[2], s[2].replace(o.attr, (function(e, r) {
                                                arguments[2] || arguments[3] || arguments[4] || arguments[5] ? arguments[5] ? (t[arguments[5]] = "", n[arguments[5]] = !0) : t[r] = arguments[2] || arguments[3] || arguments[4] || o.fillAttr.test(r) && r || "" : t[r] = "", a = a.replace(e, "")
                                            })), {
                                                v: new i.StartTagToken(s[1], s[0].length, t, n, !!s[3], a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""))
                                            });
                                            if ("object" === (void 0 === c ? "undefined" : r(c))) return c.v
                                        }
                                    }
                                }
                            }, function(e, t, n) {
                                "use strict";
                                t.__esModule = !0, t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = void 0;
                                var r = n(5);

                                function i(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }
                                t.Token = function e(t, n) {
                                    i(this, e), this.type = t, this.length = n, this.text = ""
                                }, t.CommentToken = function() {
                                    function e(t, n) {
                                        i(this, e), this.type = "comment", this.length = n || (t ? t.length : 0), this.text = "", this.content = t
                                    }
                                    return e.prototype.toString = function() {
                                        return "\x3c!--" + this.content
                                    }, e
                                }(), t.CharsToken = function() {
                                    function e(t) {
                                        i(this, e), this.type = "chars", this.length = t, this.text = ""
                                    }
                                    return e.prototype.toString = function() {
                                        return this.text
                                    }, e
                                }();
                                var o = t.TagToken = function() {
                                    function e(t, n, r, o, a) {
                                        i(this, e), this.type = t, this.length = r, this.text = "", this.tagName = n, this.attrs = o, this.booleanAttrs = a, this.unary = !1, this.html5Unary = !1
                                    }
                                    return e.formatTag = function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                            n = "<" + e.tagName;
                                        for (var i in e.attrs)
                                            if (e.attrs.hasOwnProperty(i)) {
                                                n += " " + i;
                                                var o = e.attrs[i];
                                                void 0 !== e.booleanAttrs && void 0 !== e.booleanAttrs[i] || (n += '="' + (0, r.escapeQuotes)(o) + '"')
                                            }
                                        return e.rest && (n += " " + e.rest), e.unary && !e.html5Unary ? n += "/>" : n += ">", null != t && (n += t + "</" + e.tagName + ">"), n
                                    }, e
                                }();
                                t.StartTagToken = function() {
                                    function e(t, n, r, o, a, s) {
                                        i(this, e), this.type = "startTag", this.length = n, this.text = "", this.tagName = t, this.attrs = r, this.booleanAttrs = o, this.html5Unary = !1, this.unary = a, this.rest = s
                                    }
                                    return e.prototype.toString = function() {
                                        return o.formatTag(this)
                                    }, e
                                }(), t.AtomicTagToken = function() {
                                    function e(t, n, r, o, a) {
                                        i(this, e), this.type = "atomicTag", this.length = n, this.text = "", this.tagName = t, this.attrs = r, this.booleanAttrs = o, this.unary = !1, this.html5Unary = !1, this.content = a
                                    }
                                    return e.prototype.toString = function() {
                                        return o.formatTag(this, this.content)
                                    }, e
                                }(), t.EndTagToken = function() {
                                    function e(t, n) {
                                        i(this, e), this.type = "endTag", this.length = n, this.text = "", this.tagName = t
                                    }
                                    return e.prototype.toString = function() {
                                        return "</" + this.tagName + ">"
                                    }, e
                                }()
                            }, function(e, t) {
                                "use strict";
                                t.__esModule = !0, t.escapeQuotes = function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                                    return e ? e.replace(/([^"]*)"/g, (function(e, t) {
                                        return /\\/.test(t) ? t + '"' : t + '\\"'
                                    })) : t
                                }
                            }, function(e, t) {
                                "use strict";
                                t.__esModule = !0, t.default = function(e, t, n) {
                                    var a = function() {
                                            var e = [];
                                            return e.last = function() {
                                                return this[this.length - 1]
                                            }, e.lastTagNameEq = function(e) {
                                                var t = this.last();
                                                return t && t.tagName && t.tagName.toUpperCase() === e.toUpperCase()
                                            }, e.containsTagName = function(e) {
                                                for (var t, n = 0; t = this[n]; n++)
                                                    if (t.tagName === e) return !0;
                                                return !1
                                            }, e
                                        }(),
                                        s = {
                                            startTag: function(n) {
                                                var i = n.tagName;
                                                "TR" === i.toUpperCase() && a.lastTagNameEq("TABLE") ? (e.prepend("<TBODY>"), c()) : t.selfCloseFix && r.test(i) && a.containsTagName(i) ? a.lastTagNameEq(i) ? o(e, a) : (e.prepend("</" + n.tagName + ">"), c()) : n.unary || a.push(n)
                                            },
                                            endTag: function(r) {
                                                a.last() ? t.tagSoupFix && !a.lastTagNameEq(r.tagName) ? o(e, a) : a.pop() : t.tagSoupFix && (n(), c())
                                            }
                                        };

                                    function c() {
                                        var t = function(e, t) {
                                            var n = e.stream,
                                                r = i(t());
                                            return e.stream = n, r
                                        }(e, n);
                                        t && s[t.type] && s[t.type](t)
                                    }
                                    return function() {
                                        return c(), i(n())
                                    }
                                };
                                var n = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                    r = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;

                                function i(e) {
                                    return e && "startTag" === e.type && (e.unary = n.test(e.tagName) || e.unary, e.html5Unary = !/\/>$/.test(e.text)), e
                                }

                                function o(e, t) {
                                    var n = t.pop();
                                    e.prepend("</" + n.tagName + ">")
                                }
                            }])
                        }, e.exports = r()
                    }, function(e, t) {
                        "use strict";
                        t.__esModule = !0;
                        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        };

                        function r(e) {
                            return null != e
                        }

                        function i(e, t, n) {
                            var r = void 0,
                                i = e && e.length || 0;
                            for (r = 0; r < i; r++) t.call(n, e[r], r)
                        }

                        function o(e, t, n) {
                            for (var r in e) e.hasOwnProperty(r) && t.call(n, r, e[r])
                        }

                        function a(e, t) {
                            return !(!e || "startTag" !== e.type && "atomicTag" !== e.type || !("tagName" in e) || !~e.tagName.toLowerCase().indexOf(t))
                        }
                        t.existy = r, t.isFunction = function(e) {
                            return "function" == typeof e
                        }, t.each = i, t.eachKey = o, t.defaults = function(e, t) {
                            return e = e || {}, o(t, (function(t, n) {
                                r(e[t]) || (e[t] = n)
                            })), e
                        }, t.toArray = function(e) {
                            try {
                                return Array.prototype.slice.call(e)
                            } catch (o) {
                                var t = (r = [], i(e, (function(e) {
                                    r.push(e)
                                })), {
                                    v: r
                                });
                                if ("object" === (void 0 === t ? "undefined" : n(t))) return t.v
                            }
                            var r
                        }, t.last = function(e) {
                            return e[e.length - 1]
                        }, t.isTag = a, t.isScript = function(e) {
                            return a(e, "script")
                        }, t.isStyle = function(e) {
                            return a(e, "style")
                        }
                    }])
                }, e.exports = t()
            },
            932: function(e, t, n) {
                (function() {
                    "use strict";
                    var t = this;

                    function n(e) {
                        return "string" == typeof e
                    }

                    function r(e, t, n) {
                        return e.call.apply(e.bind, arguments)
                    }

                    function i(e, t, n) {
                        if (!e) throw Error();
                        if (2 < arguments.length) {
                            var r = Array.prototype.slice.call(arguments, 2);
                            return function() {
                                var n = Array.prototype.slice.call(arguments);
                                return Array.prototype.unshift.apply(n, r), e.apply(t, n)
                            }
                        }
                        return function() {
                            return e.apply(t, arguments)
                        }
                    }

                    function o(e, t, n) {
                        return (o = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? r : i).apply(null, arguments)
                    }

                    function a(e) {
                        var t = se;

                        function n() {}
                        n.prototype = t.prototype, e.G = t.prototype, e.prototype = new n, e.prototype.constructor = e, e.F = function(e, n, r) {
                            for (var i = Array(arguments.length - 2), o = 2; o < arguments.length; o++) i[o - 2] = arguments[o];
                            return t.prototype[n].apply(e, i)
                        }
                    }
                    var s = String.prototype.trim ? function(e) {
                        return e.trim()
                    } : function(e) {
                        return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                    };

                    function c(e, t) {
                        return -1 != e.indexOf(t)
                    }

                    function u(e, t) {
                        return e < t ? -1 : e > t ? 1 : 0
                    }
                    var l, d = Array.prototype.indexOf ? function(e, t, n) {
                            return Array.prototype.indexOf.call(e, t, n)
                        } : function(e, t, r) {
                            if (r = null == r ? 0 : 0 > r ? Math.max(0, e.length + r) : r, n(e)) return n(t) && 1 == t.length ? e.indexOf(t, r) : -1;
                            for (; r < e.length; r++)
                                if (r in e && e[r] === t) return r;
                            return -1
                        },
                        p = Array.prototype.forEach ? function(e, t, n) {
                            Array.prototype.forEach.call(e, t, n)
                        } : function(e, t, r) {
                            for (var i = e.length, o = n(e) ? e.split("") : e, a = 0; a < i; a++) a in o && t.call(r, o[a], a, e)
                        },
                        f = Array.prototype.filter ? function(e, t, n) {
                            return Array.prototype.filter.call(e, t, n)
                        } : function(e, t, r) {
                            for (var i = e.length, o = [], a = 0, s = n(e) ? e.split("") : e, c = 0; c < i; c++)
                                if (c in s) {
                                    var u = s[c];
                                    t.call(r, u, c, e) && (o[a++] = u)
                                }
                            return o
                        },
                        h = Array.prototype.reduce ? function(e, t, n, r) {
                            return r && (t = o(t, r)), Array.prototype.reduce.call(e, t, n)
                        } : function(e, t, n, r) {
                            var i = n;
                            return p(e, (function(n, o) {
                                i = t.call(r, i, n, o, e)
                            })), i
                        },
                        g = Array.prototype.some ? function(e, t, n) {
                            return Array.prototype.some.call(e, t, n)
                        } : function(e, t, r) {
                            for (var i = e.length, o = n(e) ? e.split("") : e, a = 0; a < i; a++)
                                if (a in o && t.call(r, o[a], a, e)) return !0;
                            return !1
                        };

                    function v(e, t, n) {
                        return 2 >= arguments.length ? Array.prototype.slice.call(e, t) : Array.prototype.slice.call(e, t, n)
                    }
                    e: {
                        var m = t.navigator;
                        if (m) {
                            var y = m.userAgent;
                            if (y) {
                                l = y;
                                break e
                            }
                        }
                        l = ""
                    }
                    var b, w, C = c(l, "Opera") || c(l, "OPR"),
                        S = c(l, "Trident") || c(l, "MSIE"),
                        _ = c(l, "Edge"),
                        E = c(l, "Gecko") && !(c(l.toLowerCase(), "webkit") && !c(l, "Edge")) && !(c(l, "Trident") || c(l, "MSIE")) && !c(l, "Edge"),
                        T = c(l.toLowerCase(), "webkit") && !c(l, "Edge");

                    function k() {
                        var e = t.document;
                        return e ? e.documentMode : void 0
                    }
                    e: {
                        var A = "",
                            O = (w = l, E ? /rv\:([^\);]+)(\)|;)/.exec(w) : _ ? /Edge\/([\d\.]+)/.exec(w) : S ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(w) : T ? /WebKit\/(\S+)/.exec(w) : C ? /(?:Version)[ \/]?(\S+)/.exec(w) : void 0);
                        if (O && (A = O ? O[1] : ""), S) {
                            var R = k();
                            if (null != R && R > parseFloat(A)) {
                                b = String(R);
                                break e
                            }
                        }
                        b = A
                    }
                    var P = {};

                    function L(e) {
                        if (!P[e]) {
                            for (var t = 0, n = s(String(b)).split("."), r = s(String(e)).split("."), i = Math.max(n.length, r.length), o = 0; 0 == t && o < i; o++) {
                                var a = n[o] || "",
                                    c = r[o] || "",
                                    l = /(\d*)(\D*)/g,
                                    d = /(\d*)(\D*)/g;
                                do {
                                    var p = l.exec(a) || ["", "", ""],
                                        f = d.exec(c) || ["", "", ""];
                                    if (0 == p[0].length && 0 == f[0].length) break;
                                    t = u(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || u(0 == p[2].length, 0 == f[2].length) || u(p[2], f[2])
                                } while (0 == t)
                            }
                            P[e] = 0 <= t
                        }
                    }
                    var x = t.document,
                        D = x && S ? k() || ("CSS1Compat" == x.compatMode ? parseInt(b, 10) : 5) : void 0,
                        N = S && !(9 <= Number(D)),
                        F = S && !(8 <= Number(D));

                    function I(e, t, n, r) {
                        this.a = e, this.nodeName = n, this.nodeValue = r, this.nodeType = 2, this.parentNode = this.ownerElement = t
                    }

                    function j(e, t) {
                        var n = F && "href" == t.nodeName ? e.getAttribute(t.nodeName, 2) : t.nodeValue;
                        return new I(t, e, t.nodeName, n)
                    }

                    function V(e) {
                        var t = null;
                        if (1 == (n = e.nodeType) && (t = null == (t = null == (t = e.textContent) || null == t ? e.innerText : t) || null == t ? "" : t), "string" != typeof t)
                            if (N && "title" == e.nodeName.toLowerCase() && 1 == n) t = e.text;
                            else if (9 == n || 1 == n) {
                            e = 9 == n ? e.documentElement : e.firstChild;
                            var n = 0,
                                r = [];
                            for (t = ""; e;) {
                                do {
                                    1 != e.nodeType && (t += e.nodeValue), N && "title" == e.nodeName.toLowerCase() && (t += e.text), r[n++] = e
                                } while (e = e.firstChild);
                                for (; n && !(e = r[--n].nextSibling););
                            }
                        } else t = e.nodeValue;
                        return "" + t
                    }

                    function M(e, t, n) {
                        if (null === t) return !0;
                        try {
                            if (!e.getAttribute) return !1
                        } catch (e) {
                            return !1
                        }
                        return F && "class" == t && (t = "className"), null == n ? !!e.getAttribute(t) : e.getAttribute(t, 2) == n
                    }

                    function B(e, t, r, i, o) {
                        return (N ? H : W).call(null, e, t, n(r) ? r : null, n(i) ? i : null, o || new Q)
                    }

                    function H(e, t, n, r, i) {
                        if (e instanceof Fe || 8 == e.b || n && null === e.b) {
                            var o = t.all;
                            if (!o) return i;
                            if ("*" != (e = K(e)) && !(o = t.getElementsByTagName(e))) return i;
                            if (n) {
                                for (var a = [], s = 0; t = o[s++];) M(t, n, r) && a.push(t);
                                o = a
                            }
                            for (s = 0; t = o[s++];) "*" == e && "!" == t.tagName || te(i, t);
                            return i
                        }
                        return z(e, t, n, r, i), i
                    }

                    function W(e, t, n, r, i) {
                        return t.getElementsByName && r && "name" == n && !S ? (t = t.getElementsByName(r), p(t, (function(t) {
                            e.a(t) && te(i, t)
                        }))) : t.getElementsByClassName && r && "class" == n ? (t = t.getElementsByClassName(r), p(t, (function(t) {
                            t.className == r && e.a(t) && te(i, t)
                        }))) : e instanceof ke ? z(e, t, n, r, i) : t.getElementsByTagName && (t = t.getElementsByTagName(e.f()), p(t, (function(e) {
                            M(e, n, r) && te(i, e)
                        }))), i
                    }

                    function q(e, t, n, r, i) {
                        var o;
                        if ((e instanceof Fe || 8 == e.b || n && null === e.b) && (o = t.childNodes)) {
                            var a = K(e);
                            return "*" == a || (o = f(o, (function(e) {
                                return e.tagName && e.tagName.toLowerCase() == a
                            })), o) ? (n && (o = f(o, (function(e) {
                                return M(e, n, r)
                            }))), p(o, (function(e) {
                                "*" == a && ("!" == e.tagName || "*" == a && 1 != e.nodeType) || te(i, e)
                            })), i) : i
                        }
                        return U(e, t, n, r, i)
                    }

                    function U(e, t, n, r, i) {
                        for (t = t.firstChild; t; t = t.nextSibling) M(t, n, r) && e.a(t) && te(i, t);
                        return i
                    }

                    function z(e, t, n, r, i) {
                        for (t = t.firstChild; t; t = t.nextSibling) M(t, n, r) && e.a(t) && te(i, t), z(e, t, n, r, i)
                    }

                    function K(e) {
                        if (e instanceof ke) {
                            if (8 == e.b) return "!";
                            if (null === e.b) return "*"
                        }
                        return e.f()
                    }

                    function $(e, t) {
                        if (!e || !t) return !1;
                        if (e.contains && 1 == t.nodeType) return e == t || e.contains(t);
                        if (void 0 !== e.compareDocumentPosition) return e == t || !!(16 & e.compareDocumentPosition(t));
                        for (; t && e != t;) t = t.parentNode;
                        return t == e
                    }

                    function G(e, n) {
                        if (e == n) return 0;
                        if (e.compareDocumentPosition) return 2 & e.compareDocumentPosition(n) ? 1 : -1;
                        if (S && !(9 <= Number(D))) {
                            if (9 == e.nodeType) return -1;
                            if (9 == n.nodeType) return 1
                        }
                        if ("sourceIndex" in e || e.parentNode && "sourceIndex" in e.parentNode) {
                            var r = 1 == e.nodeType,
                                i = 1 == n.nodeType;
                            if (r && i) return e.sourceIndex - n.sourceIndex;
                            var o = e.parentNode,
                                a = n.parentNode;
                            return o == a ? J(e, n) : !r && $(o, n) ? -1 * Y(e, n) : !i && $(a, e) ? Y(n, e) : (r ? e.sourceIndex : o.sourceIndex) - (i ? n.sourceIndex : a.sourceIndex)
                        }
                        return (r = (i = 9 == e.nodeType ? e : e.ownerDocument || e.document).createRange()).selectNode(e), r.collapse(!0), (i = i.createRange()).selectNode(n), i.collapse(!0), r.compareBoundaryPoints(t.Range.START_TO_END, i)
                    }

                    function Y(e, t) {
                        var n = e.parentNode;
                        if (n == t) return -1;
                        for (var r = t; r.parentNode != n;) r = r.parentNode;
                        return J(r, e)
                    }

                    function J(e, t) {
                        for (var n = t; n = n.previousSibling;)
                            if (n == e) return -1;
                        return 1
                    }

                    function Q() {
                        this.b = this.a = null, this.l = 0
                    }

                    function X(e) {
                        this.node = e, this.a = this.b = null
                    }

                    function Z(e, t) {
                        if (!e.a) return t;
                        if (!t.a) return e;
                        for (var n = e.a, r = t.a, i = null, o = null, a = 0; n && r;) {
                            o = n.node;
                            var s = r.node;
                            o == s || o instanceof I && s instanceof I && o.a == s.a ? (o = n, n = n.a, r = r.a) : 0 < G(n.node, r.node) ? (o = r, r = r.a) : (o = n, n = n.a), (o.b = i) ? i.a = o : e.a = o, i = o, a++
                        }
                        for (o = n || r; o;) o.b = i, i = i.a = o, a++, o = o.a;
                        return e.b = i, e.l = a, e
                    }

                    function ee(e, t) {
                        var n = new X(t);
                        n.a = e.a, e.b ? e.a.b = n : e.a = e.b = n, e.a = n, e.l++
                    }

                    function te(e, t) {
                        var n = new X(t);
                        n.b = e.b, e.a ? e.b.a = n : e.a = e.b = n, e.b = n, e.l++
                    }

                    function ne(e) {
                        return (e = e.a) ? e.node : null
                    }

                    function re(e) {
                        return (e = ne(e)) ? V(e) : ""
                    }

                    function ie(e, t) {
                        return new oe(e, !!t)
                    }

                    function oe(e, t) {
                        this.f = e, this.b = (this.c = t) ? e.b : e.a, this.a = null
                    }

                    function ae(e) {
                        var t = e.b;
                        if (null == t) return null;
                        var n = e.a = t;
                        return e.b = e.c ? t.b : t.a, n.node
                    }

                    function se(e) {
                        this.i = e, this.b = this.g = !1, this.f = null
                    }

                    function ce(e) {
                        return "\n  " + e.toString().split("\n").join("\n  ")
                    }

                    function ue(e, t) {
                        e.g = t
                    }

                    function le(e, t) {
                        e.b = t
                    }

                    function de(e, t) {
                        var n = e.a(t);
                        return n instanceof Q ? +re(n) : +n
                    }

                    function pe(e, t) {
                        var n = e.a(t);
                        return n instanceof Q ? re(n) : "" + n
                    }

                    function fe(e, t) {
                        var n = e.a(t);
                        return n instanceof Q ? !!n.l : !!n
                    }

                    function he(e, t, n) {
                        se.call(this, e.i), this.c = e, this.h = t, this.o = n, this.g = t.g || n.g, this.b = t.b || n.b, this.c == be && (n.b || n.g || 4 == n.i || 0 == n.i || !t.f ? t.b || t.g || 4 == t.i || 0 == t.i || !n.f || (this.f = {
                            name: n.f.name,
                            s: t
                        }) : this.f = {
                            name: t.f.name,
                            s: n
                        })
                    }

                    function ge(e, t, n, r, i) {
                        var o;
                        if (t = t.a(r), n = n.a(r), t instanceof Q && n instanceof Q) {
                            for (r = ae(t = ie(t)); r; r = ae(t))
                                for (o = ae(i = ie(n)); o; o = ae(i))
                                    if (e(V(r), V(o))) return !0;
                            return !1
                        }
                        if (t instanceof Q || n instanceof Q) {
                            t instanceof Q ? (i = t, r = n) : (i = n, r = t);
                            for (var a = typeof r, s = ae(o = ie(i)); s; s = ae(o)) {
                                switch (a) {
                                    case "number":
                                        s = +V(s);
                                        break;
                                    case "boolean":
                                        s = !!V(s);
                                        break;
                                    case "string":
                                        s = V(s);
                                        break;
                                    default:
                                        throw Error("Illegal primitive type for comparison.")
                                }
                                if (i == t && e(s, r) || i == n && e(r, s)) return !0
                            }
                            return !1
                        }
                        return i ? "boolean" == typeof t || "boolean" == typeof n ? e(!!t, !!n) : "number" == typeof t || "number" == typeof n ? e(+t, +n) : e(t, n) : e(+t, +n)
                    }

                    function ve(e, t, n, r) {
                        this.a = e, this.w = t, this.i = n, this.m = r
                    }!E && !S || S && 9 <= Number(D) || E && L("1.9.1"), S && L("9"), a(he), he.prototype.a = function(e) {
                        return this.c.m(this.h, this.o, e)
                    }, he.prototype.toString = function() {
                        return "Binary Expression: " + this.c + ce(this.h) + ce(this.o)
                    }, ve.prototype.toString = function() {
                        return this.a
                    };
                    var me = {};

                    function ye(e, t, n, r) {
                        if (me.hasOwnProperty(e)) throw Error("Binary operator already created: " + e);
                        return e = new ve(e, t, n, r), me[e.toString()] = e
                    }
                    ye("div", 6, 1, (function(e, t, n) {
                        return de(e, n) / de(t, n)
                    })), ye("mod", 6, 1, (function(e, t, n) {
                        return de(e, n) % de(t, n)
                    })), ye("*", 6, 1, (function(e, t, n) {
                        return de(e, n) * de(t, n)
                    })), ye("+", 5, 1, (function(e, t, n) {
                        return de(e, n) + de(t, n)
                    })), ye("-", 5, 1, (function(e, t, n) {
                        return de(e, n) - de(t, n)
                    })), ye("<", 4, 2, (function(e, t, n) {
                        return ge((function(e, t) {
                            return e < t
                        }), e, t, n)
                    })), ye(">", 4, 2, (function(e, t, n) {
                        return ge((function(e, t) {
                            return e > t
                        }), e, t, n)
                    })), ye("<=", 4, 2, (function(e, t, n) {
                        return ge((function(e, t) {
                            return e <= t
                        }), e, t, n)
                    })), ye(">=", 4, 2, (function(e, t, n) {
                        return ge((function(e, t) {
                            return e >= t
                        }), e, t, n)
                    }));
                    var be = ye("=", 3, 2, (function(e, t, n) {
                        return ge((function(e, t) {
                            return e == t
                        }), e, t, n, !0)
                    }));

                    function we(e, t, n) {
                        this.a = e, this.b = t || 1, this.f = n || 1
                    }

                    function Ce(e, t) {
                        if (t.a.length && 4 != e.i) throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");
                        se.call(this, e.i), this.c = e, this.h = t, this.g = e.g, this.b = e.b
                    }

                    function Se(e, t) {
                        if (t.length < e.A) throw Error("Function " + e.j + " expects at least" + e.A + " arguments, " + t.length + " given");
                        if (null !== e.v && t.length > e.v) throw Error("Function " + e.j + " expects at most " + e.v + " arguments, " + t.length + " given");
                        e.B && p(t, (function(t, n) {
                            if (4 != t.i) throw Error("Argument " + n + " to function " + e.j + " is not of type Nodeset: " + t)
                        })), se.call(this, e.i), this.h = e, this.c = t, ue(this, e.g || g(t, (function(e) {
                            return e.g
                        }))), le(this, e.D && !t.length || e.C && !!t.length || g(t, (function(e) {
                            return e.b
                        })))
                    }

                    function _e(e, t, n, r, i, o, a, s, c) {
                        this.j = e, this.i = t, this.g = n, this.D = r, this.C = i, this.m = o, this.A = a, this.v = void 0 !== s ? s : a, this.B = !!c
                    }
                    ye("!=", 3, 2, (function(e, t, n) {
                        return ge((function(e, t) {
                            return e != t
                        }), e, t, n, !0)
                    })), ye("and", 2, 2, (function(e, t, n) {
                        return fe(e, n) && fe(t, n)
                    })), ye("or", 1, 2, (function(e, t, n) {
                        return fe(e, n) || fe(t, n)
                    })), a(Ce), Ce.prototype.a = function(e) {
                        return e = this.c.a(e), We(this.h, e)
                    }, Ce.prototype.toString = function() {
                        return "Filter:" + ce(this.c) + ce(this.h)
                    }, a(Se), Se.prototype.a = function(e) {
                        return this.h.m.apply(null, function(e) {
                            return Array.prototype.concat.apply(Array.prototype, arguments)
                        }(e, this.c))
                    }, Se.prototype.toString = function() {
                        var e = "Function: " + this.h;
                        if (this.c.length) {
                            var t = h(this.c, (function(e, t) {
                                return e + ce(t)
                            }), "Arguments:");
                            e += ce(t)
                        }
                        return e
                    }, _e.prototype.toString = function() {
                        return this.j
                    };
                    var Ee = {};

                    function Te(e, t, n, r, i, o, a, s) {
                        if (Ee.hasOwnProperty(e)) throw Error("Function already created: " + e + ".");
                        Ee[e] = new _e(e, t, n, r, !1, i, o, a, s)
                    }

                    function ke(e, t) {
                        switch (this.h = e, this.c = void 0 !== t ? t : null, this.b = null, e) {
                            case "comment":
                                this.b = 8;
                                break;
                            case "text":
                                this.b = 3;
                                break;
                            case "processing-instruction":
                                this.b = 7;
                                break;
                            case "node":
                                break;
                            default:
                                throw Error("Unexpected argument")
                        }
                    }

                    function Ae(e) {
                        return "comment" == e || "text" == e || "processing-instruction" == e || "node" == e
                    }

                    function Oe(e) {
                        this.b = e, this.a = 0
                    }
                    Te("boolean", 2, !1, !1, (function(e, t) {
                        return fe(t, e)
                    }), 1), Te("ceiling", 1, !1, !1, (function(e, t) {
                        return Math.ceil(de(t, e))
                    }), 1), Te("concat", 3, !1, !1, (function(e, t) {
                        return h(v(arguments, 1), (function(t, n) {
                            return t + pe(n, e)
                        }), "")
                    }), 2, null), Te("contains", 2, !1, !1, (function(e, t, n) {
                        return c(pe(t, e), pe(n, e))
                    }), 2), Te("count", 1, !1, !1, (function(e, t) {
                        return t.a(e).l
                    }), 1, 1, !0), Te("false", 2, !1, !1, (function() {
                        return !1
                    }), 0), Te("floor", 1, !1, !1, (function(e, t) {
                        return Math.floor(de(t, e))
                    }), 1), Te("id", 4, !1, !1, (function(e, t) {
                        var r = 9 == (i = e.a).nodeType ? i : i.ownerDocument,
                            i = pe(t, e).split(/\s+/),
                            o = [];
                        p(i, (function(e) {
                            !(e = function(e) {
                                if (N) {
                                    var t = r.all[e];
                                    if (t) {
                                        if (t.nodeType && e == t.id) return t;
                                        if (t.length) return function(e, t) {
                                            var r;
                                            e: {
                                                r = e.length;
                                                for (var i = n(e) ? e.split("") : e, o = 0; o < r; o++)
                                                    if (o in i && t.call(void 0, i[o], o, e)) {
                                                        r = o;
                                                        break e
                                                    }
                                                r = -1
                                            }
                                            return 0 > r ? null : n(e) ? e.charAt(r) : e[r]
                                        }(t, (function(t) {
                                            return e == t.id
                                        }))
                                    }
                                    return null
                                }
                                return r.getElementById(e)
                            }(e)) || 0 <= d(o, e) || o.push(e)
                        })), o.sort(G);
                        var a = new Q;
                        return p(o, (function(e) {
                            te(a, e)
                        })), a
                    }), 1), Te("lang", 2, !1, !1, (function() {
                        return !1
                    }), 1), Te("last", 1, !0, !1, (function(e) {
                        if (1 != arguments.length) throw Error("Function last expects ()");
                        return e.f
                    }), 0), Te("local-name", 3, !1, !0, (function(e, t) {
                        var n = t ? ne(t.a(e)) : e.a;
                        return n ? n.localName || n.nodeName.toLowerCase() : ""
                    }), 0, 1, !0), Te("name", 3, !1, !0, (function(e, t) {
                        var n = t ? ne(t.a(e)) : e.a;
                        return n ? n.nodeName.toLowerCase() : ""
                    }), 0, 1, !0), Te("namespace-uri", 3, !0, !1, (function() {
                        return ""
                    }), 0, 1, !0), Te("normalize-space", 3, !1, !0, (function(e, t) {
                        return (t ? pe(t, e) : V(e.a)).replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
                    }), 0, 1), Te("not", 2, !1, !1, (function(e, t) {
                        return !fe(t, e)
                    }), 1), Te("number", 1, !1, !0, (function(e, t) {
                        return t ? de(t, e) : +V(e.a)
                    }), 0, 1), Te("position", 1, !0, !1, (function(e) {
                        return e.b
                    }), 0), Te("round", 1, !1, !1, (function(e, t) {
                        return Math.round(de(t, e))
                    }), 1), Te("starts-with", 2, !1, !1, (function(e, t, n) {
                        return t = pe(t, e), e = pe(n, e), 0 == t.lastIndexOf(e, 0)
                    }), 2), Te("string", 3, !1, !0, (function(e, t) {
                        return t ? pe(t, e) : V(e.a)
                    }), 0, 1), Te("string-length", 1, !1, !0, (function(e, t) {
                        return (t ? pe(t, e) : V(e.a)).length
                    }), 0, 1), Te("substring", 3, !1, !1, (function(e, t, n, r) {
                        if (n = de(n, e), isNaN(n) || 1 / 0 == n || -1 / 0 == n) return "";
                        if (r = r ? de(r, e) : 1 / 0, isNaN(r) || -1 / 0 === r) return "";
                        n = Math.round(n) - 1;
                        var i = Math.max(n, 0);
                        return e = pe(t, e), 1 / 0 == r ? e.substring(i) : e.substring(i, n + Math.round(r))
                    }), 2, 3), Te("substring-after", 3, !1, !1, (function(e, t, n) {
                        return t = pe(t, e), e = pe(n, e), -1 == (n = t.indexOf(e)) ? "" : t.substring(n + e.length)
                    }), 2), Te("substring-before", 3, !1, !1, (function(e, t, n) {
                        return t = pe(t, e), e = pe(n, e), -1 == (e = t.indexOf(e)) ? "" : t.substring(0, e)
                    }), 2), Te("sum", 1, !1, !1, (function(e, t) {
                        for (var n = ie(t.a(e)), r = 0, i = ae(n); i; i = ae(n)) r += +V(i);
                        return r
                    }), 1, 1, !0), Te("translate", 3, !1, !1, (function(e, t, n, r) {
                        t = pe(t, e), n = pe(n, e);
                        var i = pe(r, e);
                        for (e = {}, r = 0; r < n.length; r++) {
                            var o = n.charAt(r);
                            o in e || (e[o] = i.charAt(r))
                        }
                        for (n = "", r = 0; r < t.length; r++) n += (o = t.charAt(r)) in e ? e[o] : o;
                        return n
                    }), 3), Te("true", 2, !1, !1, (function() {
                        return !0
                    }), 0), ke.prototype.a = function(e) {
                        return null === this.b || this.b == e.nodeType
                    }, ke.prototype.f = function() {
                        return this.h
                    }, ke.prototype.toString = function() {
                        var e = "Kind Test: " + this.h;
                        return null === this.c || (e += ce(this.c)), e
                    };
                    var Re = /\$?(?:(?![0-9-\.])(?:\*|[\w-\.]+):)?(?![0-9-\.])(?:\*|[\w-\.]+)|\/\/|\.\.|::|\d+(?:\.\d*)?|\.\d+|"[^"]*"|'[^']*'|[!<>]=|\s+|./g,
                        Pe = /^\s/;

                    function Le(e, t) {
                        return e.b[e.a + (t || 0)]
                    }

                    function xe(e) {
                        return e.b[e.a++]
                    }

                    function De(e) {
                        return e.b.length <= e.a
                    }

                    function Ne(e) {
                        se.call(this, 3), this.c = e.substring(1, e.length - 1)
                    }

                    function Fe(e, t) {
                        var n;
                        this.j = e.toLowerCase(), n = "*" == this.j ? "*" : "http://www.w3.org/1999/xhtml", this.c = t ? t.toLowerCase() : n
                    }

                    function Ie(e, t) {
                        if (se.call(this, e.i), this.h = e, this.c = t, this.g = e.g, this.b = e.b, 1 == this.c.length) {
                            var n = this.c[0];
                            n.u || n.c != $e || "*" != (n = n.o).f() && (this.f = {
                                name: n.f(),
                                s: null
                            })
                        }
                    }

                    function je() {
                        se.call(this, 4)
                    }

                    function Ve() {
                        se.call(this, 4)
                    }

                    function Me(e) {
                        return "/" == e || "//" == e
                    }

                    function Be(e) {
                        se.call(this, 4), this.c = e, ue(this, g(this.c, (function(e) {
                            return e.g
                        }))), le(this, g(this.c, (function(e) {
                            return e.b
                        })))
                    }

                    function He(e, t) {
                        this.a = e, this.b = !!t
                    }

                    function We(e, t, n) {
                        for (n = n || 0; n < e.a.length; n++)
                            for (var r, i = e.a[n], o = ie(t), a = t.l, s = 0; r = ae(o); s++) {
                                var c = e.b ? a - s : s + 1;
                                if ("number" == typeof(r = i.a(new we(r, c, a)))) c = c == r;
                                else if ("string" == typeof r || "boolean" == typeof r) c = !!r;
                                else {
                                    if (!(r instanceof Q)) throw Error("Predicate.evaluate returned an unexpected type.");
                                    c = 0 < r.l
                                }
                                if (!c) {
                                    if (r = (c = o).f, !(l = c.a)) throw Error("Next must be called at least once before remove.");
                                    var u = l.b,
                                        l = l.a;
                                    u ? u.a = l : r.a = l, l ? l.b = u : r.b = u, r.l--, c.a = null
                                }
                            }
                        return t
                    }

                    function qe(e, t, n, r) {
                        se.call(this, 4), this.c = e, this.o = t, this.h = n || new He([]), this.u = !!r, t = 0 < (t = this.h).a.length ? t.a[0].f : null, e.b && t && (e = t.name, e = N ? e.toLowerCase() : e, this.f = {
                            name: e,
                            s: t.s
                        });
                        e: {
                            for (e = this.h, t = 0; t < e.a.length; t++)
                                if ((n = e.a[t]).g || 1 == n.i || 0 == n.i) {
                                    e = !0;
                                    break e
                                }
                            e = !1
                        }
                        this.g = e
                    }

                    function Ue(e, t, n, r) {
                        this.j = e, this.f = t, this.a = n, this.b = r
                    }
                    a(Ne), Ne.prototype.a = function() {
                        return this.c
                    }, Ne.prototype.toString = function() {
                        return "Literal: " + this.c
                    }, Fe.prototype.a = function(e) {
                        var t = e.nodeType;
                        return !(1 != t && 2 != t || (t = void 0 !== e.localName ? e.localName : e.nodeName, "*" != this.j && this.j != t.toLowerCase() || "*" != this.c && this.c != (e.namespaceURI ? e.namespaceURI.toLowerCase() : "http://www.w3.org/1999/xhtml")))
                    }, Fe.prototype.f = function() {
                        return this.j
                    }, Fe.prototype.toString = function() {
                        return "Name Test: " + ("http://www.w3.org/1999/xhtml" == this.c ? "" : this.c + ":") + this.j
                    }, a(Ie), a(je), je.prototype.a = function(e) {
                        var t = new Q;
                        return 9 == (e = e.a).nodeType ? te(t, e) : te(t, e.ownerDocument), t
                    }, je.prototype.toString = function() {
                        return "Root Helper Expression"
                    }, a(Ve), Ve.prototype.a = function(e) {
                        var t = new Q;
                        return te(t, e.a), t
                    }, Ve.prototype.toString = function() {
                        return "Context Helper Expression"
                    }, Ie.prototype.a = function(e) {
                        var t = this.h.a(e);
                        if (!(t instanceof Q)) throw Error("Filter expression must evaluate to nodeset.");
                        for (var n = 0, r = (e = this.c).length; n < r && t.l; n++) {
                            var i, o = e[n],
                                a = ie(t, o.c.a);
                            if (o.g || o.c != Je)
                                if (o.g || o.c != Xe)
                                    for (i = ae(a), t = o.a(new we(i)); null != (i = ae(a));) t = Z(t, i = o.a(new we(i)));
                                else i = ae(a), t = o.a(new we(i));
                            else {
                                for (i = ae(a);
                                    (t = ae(a)) && (!i.contains || i.contains(t)) && 8 & t.compareDocumentPosition(i); i = t);
                                t = o.a(new we(i))
                            }
                        }
                        return t
                    }, Ie.prototype.toString = function() {
                        var e;
                        if (e = "Path Expression:" + ce(this.h), this.c.length) {
                            var t = h(this.c, (function(e, t) {
                                return e + ce(t)
                            }), "Steps:");
                            e += ce(t)
                        }
                        return e
                    }, a(Be), Be.prototype.a = function(e) {
                        var t = new Q;
                        return p(this.c, (function(n) {
                            if (!((n = n.a(e)) instanceof Q)) throw Error("Path expression must evaluate to NodeSet.");
                            t = Z(t, n)
                        })), t
                    }, Be.prototype.toString = function() {
                        return h(this.c, (function(e, t) {
                            return e + ce(t)
                        }), "Union Expression:")
                    }, He.prototype.toString = function() {
                        return h(this.a, (function(e, t) {
                            return e + ce(t)
                        }), "Predicates:")
                    }, a(qe), qe.prototype.a = function(e) {
                        var t = e.a,
                            n = null,
                            r = null,
                            i = null,
                            o = 0;
                        if ((n = this.f) && (r = n.name, i = n.s ? pe(n.s, e) : null, o = 1), this.u)
                            if (this.g || this.c != Ge)
                                if (t = ae(e = ie(new qe(Ye, new ke("node")).a(e))))
                                    for (n = this.m(t, r, i, o); null != (t = ae(e));) n = Z(n, this.m(t, r, i, o));
                                else n = new Q;
                        else n = B(this.o, t, r, i), n = We(this.h, n, o);
                        else n = this.m(e.a, r, i, o);
                        return n
                    }, qe.prototype.m = function(e, t, n, r) {
                        return e = this.c.f(this.o, e, t, n), We(this.h, e, r)
                    }, qe.prototype.toString = function() {
                        var e;
                        if (e = "Step:" + ce("Operator: " + (this.u ? "//" : "/")), this.c.j && (e += ce("Axis: " + this.c)), e += ce(this.o), this.h.a.length) {
                            var t = h(this.h.a, (function(e, t) {
                                return e + ce(t)
                            }), "Predicates:");
                            e += ce(t)
                        }
                        return e
                    }, Ue.prototype.toString = function() {
                        return this.j
                    };
                    var ze = {};

                    function Ke(e, t, n, r) {
                        if (ze.hasOwnProperty(e)) throw Error("Axis already created: " + e);
                        return t = new Ue(e, t, n, !!r), ze[e] = t
                    }
                    Ke("ancestor", (function(e, t) {
                        for (var n = new Q, r = t; r = r.parentNode;) e.a(r) && ee(n, r);
                        return n
                    }), !0), Ke("ancestor-or-self", (function(e, t) {
                        var n = new Q,
                            r = t;
                        do {
                            e.a(r) && ee(n, r)
                        } while (r = r.parentNode);
                        return n
                    }), !0);
                    var $e = Ke("attribute", (function(e, t) {
                            var n = new Q;
                            if ("style" == (o = e.f()) && N && t.style) return te(n, new I(t.style, t, "style", t.style.cssText)), n;
                            var r = t.attributes;
                            if (r)
                                if (e instanceof ke && null === e.b || "*" == o)
                                    for (var i, o = 0; i = r[o]; o++) N ? i.nodeValue && te(n, j(t, i)) : te(n, i);
                                else(i = r.getNamedItem(o)) && (N ? i.nodeValue && te(n, j(t, i)) : te(n, i));
                            return n
                        }), !1),
                        Ge = Ke("child", (function(e, t, r, i, o) {
                            return (N ? q : U).call(null, e, t, n(r) ? r : null, n(i) ? i : null, o || new Q)
                        }), !1, !0);
                    Ke("descendant", B, !1, !0);
                    var Ye = Ke("descendant-or-self", (function(e, t, n, r) {
                            var i = new Q;
                            return M(t, n, r) && e.a(t) && te(i, t), B(e, t, n, r, i)
                        }), !1, !0),
                        Je = Ke("following", (function(e, t, n, r) {
                            var i = new Q;
                            do {
                                for (var o = t; o = o.nextSibling;) M(o, n, r) && e.a(o) && te(i, o), i = B(e, o, n, r, i)
                            } while (t = t.parentNode);
                            return i
                        }), !1, !0);
                    Ke("following-sibling", (function(e, t) {
                        for (var n = new Q, r = t; r = r.nextSibling;) e.a(r) && te(n, r);
                        return n
                    }), !1), Ke("namespace", (function() {
                        return new Q
                    }), !1);
                    var Qe = Ke("parent", (function(e, t) {
                            var n = new Q;
                            if (9 == t.nodeType) return n;
                            if (2 == t.nodeType) return te(n, t.ownerElement), n;
                            var r = t.parentNode;
                            return e.a(r) && te(n, r), n
                        }), !1),
                        Xe = Ke("preceding", (function(e, t, n, r) {
                            var i = new Q,
                                o = [];
                            do {
                                o.unshift(t)
                            } while (t = t.parentNode);
                            for (var a = 1, s = o.length; a < s; a++) {
                                var c = [];
                                for (t = o[a]; t = t.previousSibling;) c.unshift(t);
                                for (var u = 0, l = c.length; u < l; u++) M(t = c[u], n, r) && e.a(t) && te(i, t), i = B(e, t, n, r, i)
                            }
                            return i
                        }), !0, !0);
                    Ke("preceding-sibling", (function(e, t) {
                        for (var n = new Q, r = t; r = r.previousSibling;) e.a(r) && ee(n, r);
                        return n
                    }), !0);
                    var Ze = Ke("self", (function(e, t) {
                        var n = new Q;
                        return e.a(t) && te(n, t), n
                    }), !1);

                    function et(e) {
                        se.call(this, 1), this.c = e, this.g = e.g, this.b = e.b
                    }

                    function tt(e) {
                        se.call(this, 1), this.c = e
                    }

                    function nt(e, t) {
                        this.a = e, this.b = t
                    }

                    function rt(e) {
                        for (var t, n = [];;) {
                            it(e, "Missing right hand side of binary expression."), t = dt(e);
                            var r = xe(e.a);
                            if (!r) break;
                            var i = (r = me[r] || null) && r.w;
                            if (!i) {
                                e.a.a--;
                                break
                            }
                            for (; n.length && i <= n[n.length - 1].w;) t = new he(n.pop(), n.pop(), t);
                            n.push(t, r)
                        }
                        for (; n.length;) t = new he(n.pop(), n.pop(), t);
                        return t
                    }

                    function it(e, t) {
                        if (De(e.a)) throw Error(t)
                    }

                    function ot(e, t) {
                        var n = xe(e.a);
                        if (n != t) throw Error("Bad token, expected: " + t + " got: " + n)
                    }

                    function at(e) {
                        if (")" != (e = xe(e.a))) throw Error("Bad token: " + e)
                    }

                    function st(e) {
                        if (2 > (e = xe(e.a)).length) throw Error("Unclosed literal string");
                        return new Ne(e)
                    }

                    function ct(e) {
                        var t, n, r = [];
                        if (Me(Le(e.a))) {
                            if (t = xe(e.a), n = Le(e.a), "/" == t && (De(e.a) || "." != n && ".." != n && "@" != n && "*" != n && !/(?![0-9])[\w]/.test(n))) return new je;
                            n = new je, it(e, "Missing next location step."), t = ut(e, t), r.push(t)
                        } else {
                            e: {
                                switch (n = (t = Le(e.a)).charAt(0)) {
                                    case "$":
                                        throw Error("Variable reference not allowed in HTML XPath");
                                    case "(":
                                        xe(e.a), t = rt(e), it(e, 'unclosed "("'), ot(e, ")");
                                        break;
                                    case '"':
                                    case "'":
                                        t = st(e);
                                        break;
                                    default:
                                        if (isNaN(+t)) {
                                            if (Ae(t) || !/(?![0-9])[\w]/.test(n) || "(" != Le(e.a, 1)) {
                                                t = null;
                                                break e
                                            }
                                            for (t = xe(e.a), t = Ee[t] || null, xe(e.a), n = [];
                                                ")" != Le(e.a) && (it(e, "Missing function argument list."), n.push(rt(e)), "," == Le(e.a));) xe(e.a);
                                            it(e, "Unclosed function argument list."), at(e), t = new Se(t, n)
                                        } else t = new tt(+xe(e.a))
                                }
                                "[" == Le(e.a) && (t = new Ce(t, n = new He(lt(e))))
                            }
                            if (t) {
                                if (!Me(Le(e.a))) return t;
                                n = t
                            } else t = ut(e, "/"),
                            n = new Ve,
                            r.push(t)
                        }
                        for (; Me(Le(e.a));) t = xe(e.a), it(e, "Missing next location step."), t = ut(e, t), r.push(t);
                        return new Ie(n, r)
                    }

                    function ut(e, t) {
                        var n, r, i, o;
                        if ("/" != t && "//" != t) throw Error('Step op should be "/" or "//"');
                        if ("." == Le(e.a)) return r = new qe(Ze, new ke("node")), xe(e.a), r;
                        if (".." == Le(e.a)) return r = new qe(Qe, new ke("node")), xe(e.a), r;
                        if ("@" == Le(e.a)) o = $e, xe(e.a), it(e, "Missing attribute name");
                        else if ("::" == Le(e.a, 1)) {
                            if (!/(?![0-9])[\w]/.test(Le(e.a).charAt(0))) throw Error("Bad token: " + xe(e.a));
                            if (n = xe(e.a), !(o = ze[n] || null)) throw Error("No axis with name: " + n);
                            xe(e.a), it(e, "Missing node name")
                        } else o = Ge;
                        if (n = Le(e.a), !/(?![0-9])[\w\*]/.test(n.charAt(0))) throw Error("Bad token: " + xe(e.a));
                        if ("(" == Le(e.a, 1)) {
                            if (!Ae(n)) throw Error("Invalid node type: " + n);
                            if (!Ae(n = xe(e.a))) throw Error("Invalid type name: " + n);
                            ot(e, "("), it(e, "Bad nodetype");
                            var a = null;
                            '"' != (i = Le(e.a).charAt(0)) && "'" != i || (a = st(e)), it(e, "Bad nodetype"), at(e), n = new ke(n, a)
                        } else if (-1 == (i = (n = xe(e.a)).indexOf(":"))) n = new Fe(n);
                        else {
                            var s;
                            if ("*" == (a = n.substring(0, i))) s = "*";
                            else if (!(s = e.b(a))) throw Error("Namespace prefix not declared: " + a);
                            n = new Fe(n = n.substr(i + 1), s)
                        }
                        return i = new He(lt(e), o.a), r || new qe(o, n, i, "//" == t)
                    }

                    function lt(e) {
                        for (var t = [];
                            "[" == Le(e.a);) {
                            xe(e.a), it(e, "Missing predicate expression.");
                            var n = rt(e);
                            t.push(n), it(e, "Unclosed predicate expression."), ot(e, "]")
                        }
                        return t
                    }

                    function dt(e) {
                        if ("-" == Le(e.a)) return xe(e.a), new et(dt(e));
                        var t = ct(e);
                        if ("|" != Le(e.a)) e = t;
                        else {
                            for (t = [t];
                                "|" == xe(e.a);) it(e, "Missing next union location path."), t.push(ct(e));
                            e.a.a--, e = new Be(t)
                        }
                        return e
                    }

                    function pt(e) {
                        switch (e.nodeType) {
                            case 1:
                                return function(e, t) {
                                    var n = Array.prototype.slice.call(arguments, 1);
                                    return function() {
                                        var t = n.slice();
                                        return t.push.apply(t, arguments), e.apply(this, t)
                                    }
                                }(ht, e);
                            case 9:
                                return pt(e.documentElement);
                            case 11:
                            case 10:
                            case 6:
                            case 12:
                                return ft;
                            default:
                                return e.parentNode ? pt(e.parentNode) : ft
                        }
                    }

                    function ft() {
                        return null
                    }

                    function ht(e, t) {
                        if (e.prefix == t) return e.namespaceURI || "http://www.w3.org/1999/xhtml";
                        var n = e.getAttributeNode("xmlns:" + t);
                        return n && n.specified ? n.value || null : e.parentNode && 9 != e.parentNode.nodeType ? ht(e.parentNode, t) : null
                    }

                    function gt(e, t) {
                        if (!e.length) throw Error("Empty XPath expression.");
                        var n = function(e) {
                            e = e.match(Re);
                            for (var t = 0; t < e.length; t++) Pe.test(e[t]) && e.splice(t, 1);
                            return new Oe(e)
                        }(e);
                        if (De(n)) throw Error("Invalid XPath expression.");
                        t ? "function" == function(e) {
                            var t = typeof e;
                            if ("object" == t) {
                                if (!e) return "null";
                                if (e instanceof Array) return "array";
                                if (e instanceof Object) return t;
                                var n = Object.prototype.toString.call(e);
                                if ("[object Window]" == n) return "object";
                                if ("[object Array]" == n || "number" == typeof e.length && void 0 !== e.splice && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("splice")) return "array";
                                if ("[object Function]" == n || void 0 !== e.call && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("call")) return "function"
                            } else if ("function" == t && void 0 === e.call) return "object";
                            return t
                        }(t) || (t = o(t.lookupNamespaceURI, t)) : t = function() {
                            return null
                        };
                        var r = rt(new nt(n, t));
                        if (!De(n)) throw Error("Bad token: " + xe(n));
                        this.evaluate = function(e, t) {
                            return new vt(r.a(new we(e)), t)
                        }
                    }

                    function vt(e, t) {
                        if (0 == t)
                            if (e instanceof Q) t = 4;
                            else if ("string" == typeof e) t = 2;
                        else if ("number" == typeof e) t = 1;
                        else {
                            if ("boolean" != typeof e) throw Error("Unexpected evaluation result.");
                            t = 3
                        }
                        if (2 != t && 1 != t && 3 != t && !(e instanceof Q)) throw Error("value could not be converted to the specified type");
                        var n;
                        switch (this.resultType = t, t) {
                            case 2:
                                this.stringValue = e instanceof Q ? re(e) : "" + e;
                                break;
                            case 1:
                                this.numberValue = e instanceof Q ? +re(e) : +e;
                                break;
                            case 3:
                                this.booleanValue = e instanceof Q ? 0 < e.l : !!e;
                                break;
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                var r = ie(e);
                                n = [];
                                for (var i = ae(r); i; i = ae(r)) n.push(i instanceof I ? i.a : i);
                                this.snapshotLength = e.l, this.invalidIteratorState = !1;
                                break;
                            case 8:
                            case 9:
                                r = ne(e), this.singleNodeValue = r instanceof I ? r.a : r;
                                break;
                            default:
                                throw Error("Unknown XPathResult type.")
                        }
                        var o = 0;
                        this.iterateNext = function() {
                            if (4 != t && 5 != t) throw Error("iterateNext called with wrong result type");
                            return o >= n.length ? null : n[o++]
                        }, this.snapshotItem = function(e) {
                            if (6 != t && 7 != t) throw Error("snapshotItem called with wrong result type");
                            return e >= n.length || 0 > e ? null : n[e]
                        }
                    }

                    function mt(e) {
                        this.lookupNamespaceURI = pt(e)
                    }

                    function yt(e, n) {
                        var r = e || t,
                            i = r.Document && r.Document.prototype || r.document;
                        i.evaluate && !n || (r.XPathResult = vt, i.evaluate = function(e, t, n, r) {
                            return new gt(e, n).evaluate(t, r)
                        }, i.createExpression = function(e, t) {
                            return new gt(e, t)
                        }, i.createNSResolver = function(e) {
                            return new mt(e)
                        })
                    }
                    a(et), et.prototype.a = function(e) {
                        return -de(this.c, e)
                    }, et.prototype.toString = function() {
                        return "Unary Expression: -" + ce(this.c)
                    }, a(tt), tt.prototype.a = function() {
                        return this.c
                    }, tt.prototype.toString = function() {
                        return "Number: " + this.c
                    }, vt.ANY_TYPE = 0, vt.NUMBER_TYPE = 1, vt.STRING_TYPE = 2, vt.BOOLEAN_TYPE = 3, vt.UNORDERED_NODE_ITERATOR_TYPE = 4, vt.ORDERED_NODE_ITERATOR_TYPE = 5, vt.UNORDERED_NODE_SNAPSHOT_TYPE = 6, vt.ORDERED_NODE_SNAPSHOT_TYPE = 7, vt.ANY_UNORDERED_NODE_TYPE = 8, vt.FIRST_ORDERED_NODE_TYPE = 9;
                    var bt, wt = ["wgxpath", "install"],
                        Ct = t;
                    wt[0] in Ct || !Ct.execScript || Ct.execScript("var " + wt[0]);
                    for (; wt.length && (bt = wt.shift());) wt.length || void 0 === yt ? Ct = Ct[bt] ? Ct[bt] : Ct[bt] = {} : Ct[bt] = yt;
                    e.exports.install = yt, e.exports.XPathResultType = {
                        ANY_TYPE: 0,
                        NUMBER_TYPE: 1,
                        STRING_TYPE: 2,
                        BOOLEAN_TYPE: 3,
                        UNORDERED_NODE_ITERATOR_TYPE: 4,
                        ORDERED_NODE_ITERATOR_TYPE: 5,
                        UNORDERED_NODE_SNAPSHOT_TYPE: 6,
                        ORDERED_NODE_SNAPSHOT_TYPE: 7,
                        ANY_UNORDERED_NODE_TYPE: 8,
                        FIRST_ORDERED_NODE_TYPE: 9
                    }
                }).call(n.g)
            }
        },
        t = {};

    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var o = t[r] = {
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.exports
    }
    n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            var e, t = n(932),
                r = ".",
                i = "function",
                o = "string",
                a = "__global__",
                s = "Provider",
                c = 0,
                u = Array.prototype.slice,
                l = function(t, n) {
                    var r = t[n];
                    if (void 0 === r && e.config.strict) throw new Error("Bottle was unable to resolve a service.  `" + n + "` is undefined.");
                    return r
                },
                d = function(t) {
                    var n;
                    return this.nested[t] || (n = e.pop(), this.nested[t] = n, this.factory(t, (function() {
                        return n.container
                    }))), this.nested[t]
                },
                p = function(e) {
                    return e.split(r).reduce(l, this)
                },
                f = function(e, t) {
                    return t(e)
                },
                h = function(e, t) {
                    return (e[t] || []).concat(e.__global__ || [])
                },
                g = function(e, t) {
                    var n, r, i, o, a;
                    return this.id, i = this.container, o = this.decorators, a = this.middlewares, n = e + s, (r = Object.create(null))[n] = {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            var e = new t;
                            return delete i[n], i[n] = e, e
                        }
                    }, r[e] = {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            var t, r = i[n];
                            return r && (t = h(o, e).reduce(f, r.$get(i)), delete i[n], delete i[e]), void 0 === t ? t : function(e, t, n, r) {
                                var i = {
                                    configurable: !0,
                                    enumerable: !0
                                };
                                return e.length ? i.get = function() {
                                    var t = 0,
                                        r = function(i) {
                                            if (i) throw i;
                                            e[t] && e[t++](n, r)
                                        };
                                    return r(), n
                                } : (i.value = n, i.writable = !0), Object.defineProperty(r, t, i), r[t]
                            }(h(a, e), e, t, i)
                        }
                    }, Object.defineProperties(i, r), this
                },
                v = function(e, t) {
                    var n, i;
                    return n = e.split(r), this.providerMap[e] && 1 === n.length && !this.container[e + s] ? console.error(e + " provider already instantiated.") : (this.originalProviders[e] = t, this.providerMap[e] = !0, i = n.shift(), n.length ? (d.call(this, i).provider(n.join(r), t), this) : g.call(this, i, t))
                },
                m = function(e, t) {
                    return v.call(this, e, (function() {
                        this.$get = t
                    }))
                },
                y = function(e, t, n) {
                    var r = arguments.length > 3 ? u.call(arguments, 3) : [],
                        i = this;
                    return m.call(this, e, (function() {
                        var e = t,
                            o = r.map(p, i.container);
                        return n ? new(t.bind.apply(t, [null].concat(o))) : e.apply(null, o)
                    }))
                },
                b = function(e, t) {
                    Object.defineProperty(this, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: t,
                        writable: !0
                    })
                },
                w = function(e, t) {
                    var n = e[t];
                    return n || b.call(e, t, n = {}), n
                },
                C = function(e, t) {
                    Object.defineProperty(this, e, {
                        configurable: !1,
                        enumerable: !0,
                        value: t,
                        writable: !1
                    })
                },
                S = function(e, t) {
                    var n, o;
                    return typeof e === i && (t = e, e = a), o = (n = e.split(r)).shift(), n.length ? d.call(this, o).decorator(n.join(r), t) : (this.decorators[o] || (this.decorators[o] = []), this.decorators[o].push(t)), this
                },
                _ = function(e) {
                    return !/^\$(?:decorator|register|list)$|Provider$/.test(e)
                },
                E = function(e) {
                    return Object.keys(e || this.container || {}).filter(_)
                },
                T = {},
                k = function(e) {
                    var t = void 0 === e.$value ? e : e.$value;
                    return this[e.$type || "service"].apply(this, [e.$name, t].concat(e.$inject || []))
                },
                A = function(e) {
                    delete this.providerMap[e], delete this.container[e], delete this.container[e + s]
                };
            (e = function e(t) {
                if (!(this instanceof e)) return e.pop(t);
                this.id = c++, this.decorators = {}, this.middlewares = {}, this.nested = {}, this.providerMap = {}, this.originalProviders = {}, this.deferred = [], this.container = {
                    $decorator: S.bind(this),
                    $register: k.bind(this),
                    $list: E.bind(this)
                }
            }).prototype = {
                constant: function(e, t) {
                    var n = e.split(r);
                    return e = n.pop(), C.call(n.reduce(w, this.container), e, t), this
                },
                decorator: S,
                defer: function(e) {
                    return this.deferred.push(e), this
                },
                digest: function(e) {
                    return (e || []).map(p, this.container)
                },
                factory: m,
                instanceFactory: function(e, t) {
                    return m.call(this, e, (function(e) {
                        return {
                            instance: t.bind(t, e)
                        }
                    }))
                },
                list: E,
                middleware: function(e, t) {
                    var n, o;
                    return typeof e === i && (t = e, e = a), o = (n = e.split(r)).shift(), n.length ? d.call(this, o).middleware(n.join(r), t) : (this.middlewares[o] || (this.middlewares[o] = []), this.middlewares[o].push(t)), this
                },
                provider: v,
                resetProviders: function(e) {
                    var t = this.originalProviders,
                        n = Array.isArray(e);
                    Object.keys(this.originalProviders).forEach((function(i) {
                        if (!n || -1 !== e.indexOf(i)) {
                            var o = i.split(r);
                            o.length > 1 && o.forEach(A, d.call(this, o[0])), A.call(this, i), this.provider(i, t[i])
                        }
                    }), this)
                },
                register: k,
                resolve: function(e) {
                    return this.deferred.forEach((function(t) {
                        t(e)
                    })), this
                },
                service: function(e, t) {
                    return y.apply(this, [e, t, !0].concat(u.call(arguments, 2)))
                },
                serviceFactory: function(e, t) {
                    return y.apply(this, [e, t, !1].concat(u.call(arguments, 2)))
                },
                value: function(e, t) {
                    var n;
                    return n = e.split(r), e = n.pop(), b.call(n.reduce(w, this.container), e, t), this
                }
            }, e.pop = function(t) {
                var n;
                return typeof t === o ? ((n = T[t]) || (T[t] = n = new e, n.constant("BOTTLE_NAME", t)), n) : new e
            }, e.clear = function(e) {
                typeof e === o ? delete T[e] : T = {}
            }, e.list = E, e.config = {
                strict: !1
            };
            var O = e;
            O.config = {
                strict: !0
            };
            var R, P, L = new O,
                x = function(e, t) {
                    L.value(e, t)
                },
                D = function(e, t) {
                    var n, r = null !== (n = t.dependencies) && void 0 !== n ? n : [];
                    L.service.apply(L, function(e, t, n) {
                        if (n || 2 === arguments.length)
                            for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                        return e.concat(r || Array.prototype.slice.call(t))
                    }([e, t], r, !1))
                },
                N = function(e) {
                    return L.container[e]
                },
                F = function() {
                    function e(e, t) {
                        var n = this;
                        this.globalObject = e, this.httpClient = t, this.send = function(e, t, r) {
                            var i = n.globalObject.configuration.id,
                                o = n.globalObject.configuration.protocol,
                                a = n.globalObject.configuration.main_domain;
                            n.httpClient.sendRequest({
                                url: "".concat(o, "://").concat(a, "/api/cdp/profiles/public/v1/app/").concat(i, "/profile/").concat(e, "/audiences"),
                                method: "GET",
                                json: !0
                            }, (function(e) {
                                n.isArrayOfStrings(e) ? t(e) : r(new Error("Invalid audience membership data"))
                            }), (function(e, n) {
                                404 !== n ? r(new Error("Cannot fetch audience membership data")) : t(void 0)
                            }))
                        }, this.isArrayOfStrings = function(e) {
                            return Array.isArray(e) && e.every((function(e) {
                                return "string" == typeof e
                            }))
                        }
                    }
                    return e.dependencies = ["globalObject", "HttpClient"], e
                }(),
                I = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                    return e.concat(r || Array.prototype.slice.call(t))
                },
                j = function() {
                    function e(e) {
                        var t = this;
                        this.tagTree = e, this.areAudienceConditionsPresent = function() {
                            return t.tagTree.map((function(e) {
                                return e.triggers
                            })).reduce((function(e, t) {
                                return I(I([], e, !0), t, !0)
                            }), []).map((function(e) {
                                return e.conditions
                            })).reduce((function(e, t) {
                                return I(I([], e, !0), t, !0)
                            }), []).filter((function(e) {
                                return t.isAudiencesFetchedCondition(e) || t.isAudienceMembershipCondition(e)
                            })).length > 0
                        }, this.isAudiencesFetchedCondition = function(e) {
                            return "Event" === e.variable && "equals" === e.action && "stg.audiencesFetched" === e.value
                        }, this.isAudienceMembershipCondition = function(e) {
                            return "visitor_belongs_to" === e.action || "visitor_not_belongs_to" === e.action
                        }
                    }
                    return e.dependencies = ["tagTree"], e
                }(),
                V = function() {
                    function e(e) {
                        var t = this;
                        this.builtinEventsEmitterCollection = e, this.start = function() {
                            t.builtinEventsEmitterCollection.getEmitters().forEach((function(e) {
                                e.start()
                            }))
                        }
                    }
                    return e.dependencies = ["BuiltinEventsEmitterCollection"], e
                }(),
                M = function() {
                    function e(e, t, n, r, i, o, a, s, c, u, l, d, p) {
                        var f = this;
                        this.emitters = [], this.getEmitters = function() {
                            return f.emitters
                        };
                        var h = e.getMetadata(),
                            g = h.cdpEnabled,
                            v = h.hasAudienceConditions;
                        this.emitters.push(t, n, r, i, o, a, s, c, u, l, d), g && v && this.emitters.push(p)
                    }
                    return e.dependencies = ["MetadataProvider", "ClickEventEmitter", "PageViewEventEmitter", "PageLoadEventEmitter", "DomReadyEventEmitter", "TimerEventEmitter", "LeaveContentEventEmitter", "FormSubmitEventEmitter", "PageScrollEventEmitter", "ElementPresenceEventEmitter", "HistoryEventEmitter", "DebouncedHistoryEventEmitter", "AudiencesFetchedEventEmitter"], e
                }(),
                B = function() {
                    function e(e, t) {
                        var n = this;
                        this.dataLayer = e, this.audienceMembershipProvider = t, this.start = function() {
                            n.audienceMembershipProvider.init(n.onResponseReceived)
                        }, this.onResponseReceived = function(e) {
                            n.dataLayer.push({
                                event: "stg.audiencesFetched",
                                audiences: e
                            })
                        }
                    }
                    return e.dependencies = ["dataLayer", "AudienceMembershipProvider"], e
                }(),
                H = function() {
                    function e(e, t, n, r) {
                        var i = this;
                        this.document = e, this.dataLayer = t, this.globalObject = n, this.clickCallbackFactory = r, this.MIDDLE_MOUSE_BUTTON = 1, this.start = function() {
                            i.document.addEventListener("click", i.listener), i.document.addEventListener("mousedown", (function(e) {
                                e.button === i.MIDDLE_MOUSE_BUTTON && i.listener(e)
                            }))
                        }, this.listener = function(e) {
                            if (null === e.target || !i.isHtmlElement(e.target) && !i.isSvgElement(e.target)) throw new Error("Event target is not a valid element");
                            var t = i.findClickedElement(e.target);
                            i.dataLayer.push(i.createDataLayerEvent(e, t))
                        }, this.findClickedElement = function(e) {
                            for (var t = e, n = 0; n < 20; n += 1)
                                if (t) {
                                    if (i.isAnchorElement(t)) return t;
                                    t = t.parentElement
                                }
                            return e
                        }, this.createDataLayerEvent = function(e, t) {
                            var n, r, o = !e.defaultPrevented,
                                a = i.isAnchorElement(t) || i.isAreaElement(t);
                            return {
                                event: "stg.click",
                                simulateDefault: o,
                                element: t,
                                elementId: null !== (n = t.getAttribute("id")) && void 0 !== n ? n : "",
                                elementClasses: null !== (r = t.getAttribute("class")) && void 0 !== r ? r : "",
                                elementUrl: a ? t.href : void 0,
                                eventCallbackTimeout: i.globalObject.configuration.delay,
                                eventCallback: i.clickCallbackFactory.create(e, t, o)
                            }
                        }, this.isHtmlElement = function(e) {
                            return e instanceof HTMLElement
                        }, this.isSvgElement = function(e) {
                            return e instanceof SVGElement
                        }, this.isAnchorElement = function(e) {
                            return e instanceof HTMLAnchorElement
                        }, this.isAreaElement = function(e) {
                            return e instanceof HTMLAreaElement
                        }
                    }
                    return e.dependencies = ["Document", "dataLayer", "globalObject", "ClickCallbackFactory"], e
                }(),
                W = "pushState",
                q = "replaceState",
                U = "popstate",
                z = "hashchange",
                K = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.window = e, this.dataLayer = t, this.historyEventFactory = n, this.lastEvent = null, this.currentEvent = null, this.currentTimeoutHandler = void 0, this.start = function() {
                            r.handlePushState(), r.handleReplaceState(), r.handlePopState(), r.handleHashChange()
                        }, this.handlePushState = function() {
                            var e = r.window.history.pushState.bind(r.window.history);
                            r.window.history.pushState = function() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                var i = e.apply(void 0, t);
                                return r.handleEvent(W), i
                            }
                        }, this.handleReplaceState = function() {
                            var e = r.window.history.replaceState.bind(r.window.history);
                            r.window.history.replaceState = function() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                var i = e.apply(void 0, t);
                                return r.handleEvent(q), i
                            }
                        }, this.handlePopState = function() {
                            r.window.addEventListener(U, (function() {
                                r.handleEvent(U)
                            }))
                        }, this.handleHashChange = function() {
                            r.window.addEventListener(z, (function() {
                                r.handleEvent(z)
                            }))
                        }, this.handleEvent = function(e) {
                            clearTimeout(r.currentTimeoutHandler), r.currentEvent = r.historyEventFactory.getEvent("stg.debouncedHistory", r.lastEvent, e), r.currentTimeoutHandler = setTimeout((function() {
                                if (null === r.currentEvent) throw new Error("History event is null");
                                r.currentEvent.oldUrl !== r.currentEvent.newUrl && r.dataLayer.push(r.currentEvent), r.lastEvent = r.currentEvent, r.currentEvent = null
                            }), 1e3)
                        }
                    }
                    return e.dependencies = ["Window", "dataLayer", "HistoryEventFactory"], e
                }(),
                $ = function() {
                    function e(e, t) {
                        var n = this;
                        this.document = e, this.dataLayer = t, this.start = function() {
                            var e = n.document.readyState;
                            "interactive" === e || "complete" === e ? n.emit() : n.document.addEventListener("DOMContentLoaded", n.emit)
                        }, this.emit = function() {
                            n.dataLayer.push({
                                event: "stg.domReady"
                            })
                        }
                    }
                    return e.dependencies = ["Document", "dataLayer"], e
                }(),
                G = function(e) {
                    return e.filter((function(e, t, n) {
                        return n.indexOf(e) === t
                    }))
                },
                Y = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                    return e.concat(r || Array.prototype.slice.call(t))
                },
                J = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.tagTree = e, this.document = t, this.dataLayer = n, this.start = function() {
                            var e = r.getSelectors();
                            0 !== e.length && (r.checkElementPresence(e), new MutationObserver((function() {
                                r.checkElementPresence(e)
                            })).observe(r.document.body, {
                                childList: !0,
                                subtree: !0
                            }))
                        }, this.checkElementPresence = function(e) {
                            e.forEach((function(e) {
                                r.document.querySelectorAll("".concat(e, ":not([data-pp-element-found])")).length > 0 && r.pushElementPresenceEvent(e)
                            }))
                        }, this.pushElementPresenceEvent = function(e) {
                            r.dataLayer.push({
                                event: "stg.elementPresence",
                                foundElements: e
                            })
                        }, this.getSelectors = function() {
                            return G(r.tagTree.map((function(e) {
                                return e.triggers
                            })).reduce((function(e, t) {
                                return Y(Y([], e, !0), t, !0)
                            }), []).map((function(e) {
                                return e.conditions
                            })).reduce((function(e, t) {
                                return Y(Y([], e, !0), t, !0)
                            }), []).filter((function(e) {
                                return "Found Elements" === e.variable
                            })).map((function(e) {
                                return e.value
                            })))
                        }
                    }
                    return e.dependencies = ["tagTree", "Document", "dataLayer"], e
                }(),
                Q = "pushState",
                X = "replaceState",
                Z = "popstate",
                ee = "hashchange",
                te = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.window = e, this.dataLayer = t, this.historyEventFactory = n, this.lastEvent = null, this.start = function() {
                            r.handlePushState(), r.handleReplaceState(), r.handlePopState(), r.handleHashChange()
                        }, this.handlePushState = function() {
                            var e = r.window.history.pushState.bind(r.window.history);
                            r.window.history.pushState = function() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                var i = e.apply(void 0, t);
                                return r.handleEvent(Q), i
                            }
                        }, this.handleReplaceState = function() {
                            var e = r.window.history.replaceState.bind(r.window.history);
                            r.window.history.replaceState = function() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                var i = e.apply(void 0, t);
                                return r.handleEvent(X), i
                            }
                        }, this.handlePopState = function() {
                            r.window.addEventListener(Z, (function() {
                                r.handleEvent(Z)
                            }))
                        }, this.handleHashChange = function() {
                            r.window.addEventListener(ee, (function() {
                                null !== r.lastEvent && r.lastEvent.historySource === Z && r.lastEvent.newUrl === r.window.location.href || r.handleEvent(ee)
                            }))
                        }, this.handleEvent = function(e) {
                            var t = r.historyEventFactory.getEvent("stg.history", r.lastEvent, e);
                            r.dataLayer.push(t), r.lastEvent = t
                        }
                    }
                    return e.dependencies = ["Window", "dataLayer", "HistoryEventFactory"], e
                }(),
                ne = function() {
                    function e(e, t) {
                        var n = this;
                        this.document = e, this.dataLayer = t, this.start = function() {
                            n.document.addEventListener("mouseout", n.listener)
                        }, this.listener = function(e) {
                            e.relatedTarget || n.dataLayer.push({
                                event: "stg.leaveContent",
                                edge: e.clientY < 10 ? "top" : "any"
                            })
                        }
                    }
                    return e.dependencies = ["Document", "dataLayer"], e
                }(),
                re = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.document = e, this.window = t, this.dataLayer = n, this.start = function() {
                            "complete" === r.document.readyState ? r.emit() : r.window.addEventListener("load", r.emit)
                        }, this.emit = function() {
                            r.dataLayer.push({
                                event: "stg.pageLoad"
                            })
                        }
                    }
                    return e.dependencies = ["Document", "Window", "dataLayer"], e
                }(),
                ie = function() {
                    function e(e, t) {
                        var n = this;
                        this.document = e, this.dataLayer = t, this.start = function() {
                            n.document.documentElement.scrollTop > 0 && n.emit(), n.document.addEventListener("scroll", n.throttle(n.emit, 200))
                        }, this.emit = function() {
                            n.dataLayer.push({
                                event: "stg.scroll"
                            })
                        }, this.throttle = function(e, t) {
                            var n, r = null,
                                i = 0;
                            return function() {
                                var o = (new Date).getTime();
                                i || (i = o);
                                var a = t - (o - i);
                                return a <= 0 || a > t ? (r && (clearTimeout(r), r = null), i = o, n = e()) : r || (r = setTimeout((function() {
                                    i = 0, r = null, n = e()
                                }), a)), n
                            }
                        }
                    }
                    return e.dependencies = ["Document", "dataLayer"], e
                }(),
                oe = function() {
                    function e(e) {
                        var t = this;
                        this.dataLayer = e, this.start = function() {
                            t.dataLayer.push({
                                event: "stg.pageView"
                            })
                        }
                    }
                    return e.dependencies = ["dataLayer"], e
                }(),
                ae = function() {
                    function e(e) {
                        var t = this;
                        this.dataLayer = e, this.intervals = [3, 5, 15, 30, 60, 120, 300], this.start = function() {
                            t.intervals.forEach(t.addListener)
                        }, this.addListener = function(e) {
                            setTimeout((function() {
                                t.dataLayer.push({
                                    event: "stg.timer",
                                    timeOnWebsite: "".concat(e, " sec"),
                                    skipExtendSession: !0
                                })
                            }), 1e3 * e)
                        }
                    }
                    return e.dependencies = ["dataLayer"], e
                }(),
                se = function() {
                    function e(e, t) {
                        var n = this;
                        this.window = e, this.globalObject = t, this.MIDDLE_MOUSE_BUTTON = 1, this.DISABLE_DELAY_ATTRIBUTE = "data-disable-delay", this.create = function(e, t, r) {
                            return function(i, o) {
                                if (n.isAnchorElement(t) || n.isAreaElement(t))
                                    if (o) e.preventDefault();
                                    else if (r && !n.openLinkInNewPage(e) && n.hasHref(t) && !n.hasRelAr(t) && !n.hasDataDisableDelay(t) && i) {
                                    var a = n.getTargetAttribute(t),
                                        s = n.getTargetWindow(a);
                                    s && (e.preventDefault(), n.window.setTimeout((function() {
                                        s.location.href = t.href
                                    }), n.globalObject.configuration.delay))
                                }
                            }
                        }, this.hasHref = function(e) {
                            return Boolean(e.href)
                        }, this.hasRelAr = function(e) {
                            var t;
                            return "ar" === (null !== (t = e.getAttribute("rel")) && void 0 !== t ? t : "").toLowerCase()
                        }, this.hasDataDisableDelay = function(e) {
                            return e.hasAttribute(n.DISABLE_DELAY_ATTRIBUTE)
                        }, this.openLinkInNewPage = function(e) {
                            return e.button === n.MIDDLE_MOUSE_BUTTON || e.shiftKey || e.ctrlKey || e.metaKey
                        }, this.getTargetWindow = function(e) {
                            switch (e) {
                                case "_self":
                                    return n.window.self;
                                case "_parent":
                                    return n.window.parent;
                                case "_top":
                                    return n.window.top;
                                default:
                                    return null
                            }
                        }, this.getTargetAttribute = function(e) {
                            return e.target || "_self"
                        }, this.isAnchorElement = function(e) {
                            return e instanceof HTMLAnchorElement
                        }, this.isAreaElement = function(e) {
                            return e instanceof HTMLAreaElement
                        }
                    }
                    return e.dependencies = ["Window", "globalObject"], e
                }(),
                ce = function() {
                    function e(e) {
                        var t = this;
                        this.window = e, this.getEvent = function(e, n, r) {
                            return {
                                event: e,
                                historySource: r,
                                oldUrl: null !== n ? n.newUrl : null,
                                newUrl: t.window.location.href,
                                oldHistoryFragment: null !== n ? n.newHistoryFragment : void 0,
                                newHistoryFragment: t.getHistoryFragment(),
                                oldHistoryState: null !== n ? n.newHistoryState : null,
                                newHistoryState: t.getHistoryState()
                            }
                        }
                    }
                    return e.prototype.getHistoryState = function() {
                        try {
                            return this.window.history.state
                        } catch (e) {
                            return null
                        }
                    }, e.prototype.getHistoryFragment = function() {
                        return this.window.location.hash.split("#")[1]
                    }, e.dependencies = ["Window"], e
                }(),
                ue = function() {
                    return ue = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, ue.apply(this, arguments)
                },
                le = function() {
                    var e = this;
                    this.changePageViewConditions = function(t) {
                        return function(n) {
                            return ue(ue({}, n), {
                                triggers: n.triggers.map((function(n) {
                                    return ue(ue({}, n), {
                                        conditions: n.conditions.map((function(n) {
                                            return e.isPageViewCondition(n) ? {
                                                variable: "Event",
                                                action: "equals",
                                                value: t
                                            } : n
                                        }))
                                    })
                                }))
                            })
                        }
                    }, this.isAllowedByCondition = function(e) {
                        return function(t) {
                            var n = function(t) {
                                return "Event" === t.variable && t.value === e
                            };
                            return t.triggers.filter((function(e) {
                                return e.conditions.filter(n).length > 0
                            })).length > 0
                        }
                    }, this.isPageViewCondition = function(e) {
                        return "Event" === e.variable && "equals" === e.action && -1 !== ["stg.pageView", "stg.pageLoad", "stg.domReady"].indexOf(e.value)
                    }
                },
                de = (R = function(e, t) {
                    return R = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }, R(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    R(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                pe = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.name = "ApiCommandError", n
                    }
                    return de(t, e), t
                }(Error),
                fe = function(e) {
                    var t = this;
                    this.window = e, this.dependencies = ["Window"], this.assertOnSuccess = function(e) {
                        if ("function" != typeof e) {
                            var n = "You have to specify onSuccess callback: ppms.cm.api('".concat(t.getCommandName(), "', onSuccess, onFailure)");
                            throw new pe(n)
                        }
                    }, this.handleError = function(e, n) {
                        if (!(n instanceof Error)) throw new Error("error is not an instance of Error");
                        if ("function" != typeof e)
                            if ("ApiCommandError" !== n.name) {
                                var r = n.message;
                                n.message = "Failed to execute ".concat(t.getCommandName(), " onSuccess callback: ").concat(r), t.reportError(n)
                            } else t.reportError(n);
                        else e(n)
                    }, this.reportError = function(e) {
                        var n;
                        t.window._paq = null !== (n = t.window._paq) && void 0 !== n ? n : [], console.error(e), t.window._paq.push(["trackError", e])
                    }
                },
                he = function() {
                    var e = function(t, n) {
                        return e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, e(t, n)
                    };
                    return function(t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                ge = function(e) {
                    function t(t, n) {
                        var r = e.call(this, n) || this;
                        return r.consentStorage = t, r.window = n, r.create = function() {
                            return function(e, t) {
                                try {
                                    r.assertOnSuccess(e), e({
                                        consents: r.consentStorage.getConsents()
                                    })
                                } catch (e) {
                                    r.handleError(t, e)
                                }
                            }
                        }, r.getCommandName = function() {
                            return "getComplianceSettings"
                        }, r
                    }
                    return he(t, e), t.dependencies = ["ConsentStorage", "Window"], t
                }(fe),
                ve = function() {
                    var e = function(t, n) {
                        return e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, e(t, n)
                    };
                    return function(t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                me = function(e) {
                    function t(t, n) {
                        var r = e.call(this, n) || this;
                        return r.consentTypesProvider = t, r.window = n, r.create = function() {
                            return function(e, t) {
                                try {
                                    r.assertOnSuccess(e), e(r.consentTypesProvider.getAll())
                                } catch (e) {
                                    r.handleError(t, e)
                                }
                            }
                        }, r.getCommandName = function() {
                            return "getComplianceTypes"
                        }, r
                    }
                    return ve(t, e), t.dependencies = ["ConsentTypesProvider", "Window"], t
                }(fe),
                ye = function() {
                    var e = function(t, n) {
                        return e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, e(t, n)
                    };
                    return function(t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                be = function(e) {
                    function t(t, n) {
                        var r = e.call(this, n) || this;
                        return r.consentTypesProvider = t, r.window = n, r.create = function() {
                            return function(e, t) {
                                try {
                                    r.assertOnSuccess(e), e(r.consentTypesProvider.getNew())
                                } catch (e) {
                                    r.handleError(t, e)
                                }
                            }
                        }, r.getCommandName = function() {
                            return "getNewComplianceTypes"
                        }, r
                    }
                    return ye(t, e), t.dependencies = ["ConsentTypesProvider", "Window"], t
                }(fe),
                we = function() {
                    var e = function(t, n) {
                        return e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, e(t, n)
                    };
                    return function(t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                Ce = function(e) {
                    function t(t, n, r, i, o) {
                        var a = e.call(this, t) || this;
                        return a.window = t, a.appId = n, a.consentTypesProvider = r, a.consentForm = i, a.consentSettings = o, a.create = function() {
                            return function(e, t) {
                                try {
                                    try {
                                        var n = a.consentTypesProvider.getAll();
                                        n.length > 0 && !a.consentSettings.user_mode_enabled && a.consentForm.render(n)
                                    } catch (e) {
                                        a.handleRenderError(e)
                                    }
                                    "function" == typeof e && e("ppms_cm_consent_popup_".concat(a.appId), a.consentTypesProvider.getAll(), a.consentTypesProvider.getAgreedTypes())
                                } catch (e) {
                                    a.handleError(t, e)
                                }
                            }
                        }, a.handleRenderError = function(e) {
                            if (e instanceof Error) throw new pe("Failed to render consent popup: ".concat(e.message))
                        }, a.getCommandName = function() {
                            return "openConsentForm"
                        }, a
                    }
                    return we(t, e), t.dependencies = ["Window", "appId", "ConsentTypesProvider", "ConsentForm", "consentSettings"], t
                }(fe),
                Se = function() {
                    var e = function(t, n) {
                        return e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, e(t, n)
                    };
                    return function(t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                _e = function(e) {
                    function t(t, n, r, i, o, a) {
                        var s = e.call(this, a) || this;
                        return s.appId = t, s.containerConfiguration = n, s.httpClient = r, s.document = i, s.visitorIdStorage = o, s.window = a, s.create = function() {
                            return function(e, t, n) {
                                try {
                                    s.validateRequestDataPresence(e), s.validateRequestData(e), s.assertOnSuccess(t);
                                    var r = s.createPayload(e);
                                    s.send(r, t, n)
                                } catch (e) {
                                    s.handleError(n, e)
                                }
                            }
                        }, s.validateRequestDataPresence = function(e) {
                            if ("object" != typeof e || null === e) throw new pe("Invalid data subject request")
                        }, s.validateRequestData = function(e) {
                            if (!("content" in e) || !("email" in e) || !("type" in e)) throw new pe("Invalid data subject request")
                        }, s.createPayload = function(e) {
                            return {
                                visitorId: s.visitorIdStorage.getVisitorId(),
                                websiteId: s.appId,
                                hostname: s.window.location.hostname,
                                event: e.type,
                                email: e.email,
                                userRequestedInfo: e.content,
                                cookies: s.document.cookie
                            }
                        }, s.handleCollectSuccess = function(e, t) {
                            try {
                                e()
                            } catch (e) {
                                s.handleError(t, e)
                            }
                        }, s.handleCollectError = function(e, t) {
                            try {
                                if (e.target instanceof XMLHttpRequest) {
                                    var n = e.target.status,
                                        r = e.target.statusText;
                                    throw new pe("Failed to send data subject request: ".concat(r ? "".concat(n, " ").concat(r) : n))
                                }
                                throw new pe("Failed to send data subject request: unknown error")
                            } catch (e) {
                                s.handleError(t, e)
                            }
                        }, s.send = function(e, t, n) {
                            s.httpClient.sendRequest({
                                url: "".concat(s.containerConfiguration.protocol, "://").concat(s.containerConfiguration.main_domain, "/consent/collect"),
                                method: "POST",
                                json: !0,
                                body: JSON.stringify(e)
                            }, (function() {
                                return s.handleCollectSuccess(t, n)
                            }), (function(e) {
                                return s.handleCollectError(e, n)
                            }))
                        }, s.getCommandName = function() {
                            return "sendDataRequest"
                        }, s
                    }
                    return Se(t, e), t.dependencies = ["appId", "containerConfiguration", "HttpClient", "Document", "VisitorIdStorage", "Window"], t
                }(fe),
                Ee = new Uint8Array(16);

            function Te() {
                if (!P && !(P = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return P(Ee)
            }
            for (var ke = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Ae = function(e) {
                    return "string" == typeof e && ke.test(e)
                }, Oe = [], Re = 0; Re < 256; ++Re) Oe.push((Re + 256).toString(16).substr(1));
            var Pe = function(e, t, n) {
                    var r = (e = e || {}).random || (e.rng || Te)();
                    if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
                        n = n || 0;
                        for (var i = 0; i < 16; ++i) t[n + i] = r[i];
                        return t
                    }
                    return function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = (Oe[e[t + 0]] + Oe[e[t + 1]] + Oe[e[t + 2]] + Oe[e[t + 3]] + "-" + Oe[e[t + 4]] + Oe[e[t + 5]] + "-" + Oe[e[t + 6]] + Oe[e[t + 7]] + "-" + Oe[e[t + 8]] + Oe[e[t + 9]] + "-" + Oe[e[t + 10]] + Oe[e[t + 11]] + Oe[e[t + 12]] + Oe[e[t + 13]] + Oe[e[t + 14]] + Oe[e[t + 15]]).toLowerCase();
                        if (!Ae(n)) throw TypeError("Stringified UUID is invalid");
                        return n
                    }(r)
                },
                Le = function() {
                    var e = function(t, n) {
                        return e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, e(t, n)
                    };
                    return function(t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                xe = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                    return e.concat(r || Array.prototype.slice.call(t))
                },
                De = function(e) {
                    function t(t, n, r, i, o, a, s) {
                        var c = e.call(this, s) || this;
                        return c.consentStorage = t, c.visitorIdStorage = n, c.tagHolder = r, c.forcedPageViewConditionHandler = i, c.dataLayer = o, c.tagTree = a, c.window = s, c.create = function() {
                            return function(e, t, n) {
                                try {
                                    c.validateSettingsPresence(e), c.validateConsentSettingsPresence(e), c.validateConsentSettings(e), c.assertOnSuccess(t), c.consentStorage.setConsents(e.consents), c.pushConsentsWereSentEvent(), c.pushConsentDecisionMadeEvent(), c.setVisitorId(), t()
                                } catch (e) {
                                    c.handleError(n, e)
                                }
                            }
                        }, c.validateSettingsPresence = function(e) {
                            if ("object" != typeof e || null === e || !("consents" in e)) throw new pe("Cannot retrieve consent settings property")
                        }, c.validateConsentSettingsPresence = function(e) {
                            var t = e.consents;
                            if ("object" != typeof t || null === t || 0 === Object.keys(t).length) throw new pe("Consent settings object is empty")
                        }, c.validateConsentStatusPresence = function(e) {
                            if ("object" != typeof e || null === e || !("status" in e)) throw new pe("Consent status should be specified")
                        }, c.validateConsentStatusValue = function(e) {
                            if (0 !== e.status && 1 !== e.status) throw new pe("Unknown consent value: ".concat(String(e.status)))
                        }, c.validateConsentSettings = function(e) {
                            for (var t in e.consents) {
                                var n = e.consents[t];
                                c.validateConsentStatusPresence(n), c.validateConsentStatusValue(n)
                            }
                        }, c.pushConsentsWereSentEvent = function() {
                            c.dataLayer.push({
                                event: "stg.consentsWereSent"
                            })
                        }, c.pushConsentDecisionMadeEvent = function() {
                            var e = c.tagHolder.getAll();
                            c.tagHolder.removeAll(), c.dataLayer.push({
                                event: "stg.consentDecisionMade",
                                tagTree: xe(xe([], e.map(c.forcedPageViewConditionHandler.changePageViewConditions("stg.consentDecisionMade")), !0), c.tagTree.filter(c.forcedPageViewConditionHandler.isAllowedByCondition("stg.consentDecisionMade")), !0)
                            })
                        }, c.setVisitorId = function() {
                            null === c.visitorIdStorage.getVisitorId() && c.visitorIdStorage.setVisitorId(Pe())
                        }, c.getCommandName = function() {
                            return "setComplianceSettings"
                        }, c
                    }
                    return Le(t, e), t.dependencies = ["ConsentStorage", "VisitorIdStorage", "TagHolder", "ForcedPageViewConditionHandler", "dataLayer", "tagTree", "Window"], t
                }(fe),
                Ne = function() {
                    return Ne = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, Ne.apply(this, arguments)
                },
                Fe = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                Ie = function() {
                    var e = function(t, n) {
                        return e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, e(t, n)
                    };
                    return function(t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                je = "No consents provided",
                Ve = function(e) {
                    function t(t, n, r, i) {
                        var o = e.call(this, i) || this;
                        return o.consentStorage = t, o.visitorIdStorage = n, o.consentTypesProvider = r, o.window = i, o.create = function() {
                            return function(e, t, n) {
                                try {
                                    if (o.isArray(e)) o.handleSettingsArray(e, t);
                                    else {
                                        if (!o.isObject(e)) throw new pe(je);
                                        o.handleSettingsObject(e, t)
                                    }
                                } catch (e) {
                                    o.handleError(n, e)
                                }
                            }
                        }, o.setInitialConsents = function(e) {
                            var t = e.map((function(e) {
                                return {
                                    consentType: e,
                                    status: -1
                                }
                            })).map((function(e) {
                                var t = e.consentType,
                                    n = Fe(e, ["consentType"]);
                                return Ne({
                                    consentType: t
                                }, n)
                            })).reduce((function(e, t) {
                                var n, r = t.consentType,
                                    i = Fe(t, ["consentType"]);
                                return Ne(Ne({}, e), ((n = {})[r] = Ne({}, i), n))
                            }), {});
                            o.consentStorage.setConsents(t)
                        }, o.handleSettingsArray = function(e, t) {
                            o.validateSettingsArray(e), o.assertOnSuccess(t), o.setVisitorId(), o.setInitialConsents(e), t(e)
                        }, o.handleSettingsObject = function(e, t) {
                            o.validateSettingsObject(e), o.assertOnSuccess(t), o.setVisitorId(), o.setInitialConsents(e.consents), t(e.consents)
                        }, o.validateConsentType = function(e, t) {
                            if ("string" != typeof t || -1 === e.indexOf(t)) throw new pe("Unknown consent type - ".concat(String(t)))
                        }, o.validateSettingsArray = function(e) {
                            if (0 === e.length) throw new pe(je);
                            var t = o.consentTypesProvider.getAll();
                            e.forEach((function(e) {
                                o.validateConsentType(t, e)
                            }))
                        }, o.validateSettingsObject = function(e) {
                            if (!e.consents || !o.isArray(e.consents)) throw new pe(je);
                            o.validateSettingsArray(e.consents)
                        }, o.isArray = function(e) {
                            return Array.isArray(e)
                        }, o.isObject = function(e) {
                            return "object" == typeof e
                        }, o.setVisitorId = function() {
                            null === o.visitorIdStorage.getVisitorId() && o.visitorIdStorage.setVisitorId(Pe())
                        }, o.getCommandName = function() {
                            return "setInitialComplianceSettings"
                        }, o
                    }
                    return Ie(t, e), t.dependencies = ["ConsentStorage", "VisitorIdStorage", "ConsentTypesProvider", "Window"], t
                }(fe),
                Me = function() {
                    var e = function(t, n) {
                        return e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, e(t, n)
                    };
                    return function(t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                Be = function(e) {
                    function t(t, n) {
                        var r = e.call(this, n) || this;
                        return r.dataLayer = t, r.window = n, r.create = function() {
                            return function(e, t) {
                                try {
                                    r.dataLayer.push({
                                        event: "stg.agreeToAllClicked"
                                    }), "function" == typeof e && e()
                                } catch (e) {
                                    r.handleError(t, e)
                                }
                            }
                        }, r.getCommandName = function() {
                            return "trackAgreeToAllClick"
                        }, r
                    }
                    return Me(t, e), t.dependencies = ["dataLayer", "Window"], t
                }(fe),
                He = function() {
                    var e = function(t, n) {
                        return e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, e(t, n)
                    };
                    return function(t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                We = function(e) {
                    function t(t, n) {
                        var r = e.call(this, n) || this;
                        return r.dataLayer = t, r.window = n, r.create = function() {
                            return function(e, t) {
                                try {
                                    r.dataLayer.push({
                                        event: "stg.closeButtonClicked"
                                    }), "function" == typeof e && e()
                                } catch (e) {
                                    r.handleError(t, e)
                                }
                            }
                        }, r.getCommandName = function() {
                            return "trackCloseButtonClick"
                        }, r
                    }
                    return He(t, e), t.dependencies = ["dataLayer", "Window"], t
                }(fe),
                qe = function() {
                    var e = function(t, n) {
                        return e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, e(t, n)
                    };
                    return function(t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                Ue = function(e) {
                    function t(t, n) {
                        var r = e.call(this, n) || this;
                        return r.dataLayer = t, r.window = n, r.create = function() {
                            return function(e, t) {
                                try {
                                    r.dataLayer.push({
                                        event: "stg.consentFormViewMain"
                                    }), "function" == typeof e && e()
                                } catch (e) {
                                    r.handleError(t, e)
                                }
                            }
                        }, r.getCommandName = function() {
                            return "trackMainFormView"
                        }, r
                    }
                    return qe(t, e), t.dependencies = ["dataLayer", "Window"], t
                }(fe),
                ze = function() {
                    var e = function(t, n) {
                        return e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, e(t, n)
                    };
                    return function(t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                Ke = function(e) {
                    function t(t, n) {
                        var r = e.call(this, n) || this;
                        return r.dataLayer = t, r.window = n, r.create = function() {
                            return function(e, t) {
                                try {
                                    r.dataLayer.push({
                                        event: "stg.consentFormViewPrivacyPolicy"
                                    }), "function" == typeof e && e()
                                } catch (e) {
                                    r.handleError(t, e)
                                }
                            }
                        }, r.getCommandName = function() {
                            return "trackPrivacyPolicyLinkView"
                        }, r
                    }
                    return ze(t, e), t.dependencies = ["dataLayer", "Window"], t
                }(fe),
                $e = function() {
                    var e = function(t, n) {
                        return e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, e(t, n)
                    };
                    return function(t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                Ge = function(e) {
                    function t(t, n) {
                        var r = e.call(this, n) || this;
                        return r.dataLayer = t, r.window = n, r.create = function() {
                            return function(e, t) {
                                try {
                                    r.dataLayer.push({
                                        event: "stg.rejectAllClicked"
                                    }), "function" == typeof e && e()
                                } catch (e) {
                                    r.handleError(t, e)
                                }
                            }
                        }, r.getCommandName = function() {
                            return "trackRejectAllClick"
                        }, r
                    }
                    return $e(t, e), t.dependencies = ["dataLayer", "Window"], t
                }(fe),
                Ye = function() {
                    var e = function(t, n) {
                        return e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, e(t, n)
                    };
                    return function(t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                Je = function(e) {
                    function t(t, n) {
                        var r = e.call(this, n) || this;
                        return r.dataLayer = t, r.window = n, r.create = function() {
                            return function(e, t) {
                                try {
                                    r.dataLayer.push({
                                        event: "stg.consentFormViewReminder"
                                    }), "function" == typeof e && e()
                                } catch (e) {
                                    r.handleError(t, e)
                                }
                            }
                        }, r.getCommandName = function() {
                            return "trackReminderWidgetView"
                        }, r
                    }
                    return Ye(t, e), t.dependencies = ["dataLayer", "Window"], t
                }(fe),
                Qe = function() {
                    var e = function(t, n) {
                        return e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, e(t, n)
                    };
                    return function(t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                Xe = function(e) {
                    function t(t, n) {
                        var r = e.call(this, n) || this;
                        return r.dataLayer = t, r.window = n, r.create = function() {
                            return function(e, t) {
                                try {
                                    r.dataLayer.push({
                                        event: "stg.saveChoicesClicked"
                                    }), "function" == typeof e && e()
                                } catch (e) {
                                    r.handleError(t, e)
                                }
                            }
                        }, r.getCommandName = function() {
                            return "trackSaveChoicesClick"
                        }, r
                    }
                    return Qe(t, e), t.dependencies = ["dataLayer", "Window"], t
                }(fe),
                Ze = function() {
                    return Ze = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, Ze.apply(this, arguments)
                },
                et = "ppms.cm:",
                tt = function() {
                    function e(e) {
                        var t = this;
                        this.dataLayer = e, this.dequeue = function(e) {
                            t.dataLayer.filter(t.isObject).filter(t.isConsentManagerApiEvent).map(t.removePrefix).forEach((function(t) {
                                var n = t.event,
                                    r = t.parameters;
                                e.apply(void 0, function(e, t, n) {
                                    if (n || 2 === arguments.length)
                                        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                                    return e.concat(r || Array.prototype.slice.call(t))
                                }([n], r, !1))
                            }))
                        }, this.isObject = function(e) {
                            return "object" == typeof e && null !== e
                        }, this.isConsentManagerApiEvent = function(e) {
                            if ("event" in e) {
                                var t = e.event;
                                if ("string" == typeof t) return 0 === t.indexOf(et)
                            }
                            return !1
                        }, this.removePrefix = function(e) {
                            return Ze(Ze({}, e), {
                                event: e.event.replace(et, "")
                            })
                        }
                    }
                    return e.dependencies = ["dataLayer"], e
                }(),
                nt = function() {
                    function e(e) {
                        var t = this;
                        this.window = e, this.openConsentForm = function(e, n) {
                            t.window.ppms.cm.api("openConsentForm", e, n)
                        }, this.getNewComplianceTypes = function(e, n) {
                            t.window.ppms.cm.api("getNewComplianceTypes", e, n)
                        }, this.setInitialComplianceSettings = function(e, n) {
                            t.window.ppms.cm.api("setInitialComplianceSettings", e, n)
                        }, this.setComplianceSettings = function(e, n, r) {
                            t.window.ppms.cm.api("setComplianceSettings", e, n, r)
                        }, this.getComplianceTypes = function(e, n) {
                            t.window.ppms.cm.api("getComplianceTypes", e, n)
                        }, this.getComplianceSettings = function(e, n) {
                            t.window.ppms.cm.api("getComplianceSettings", e, n)
                        }, this.sendDataRequest = function(e, n, r) {
                            t.window.ppms.cm.api("sendDataRequest", e, n, r)
                        }, this.trackAgreeToAllClick = function() {
                            t.window.ppms.cm.api("trackAgreeToAllClick")
                        }, this.trackCloseButtonClick = function() {
                            t.window.ppms.cm.api("trackCloseButtonClick")
                        }, this.trackMainFormView = function() {
                            t.window.ppms.cm.api("trackMainFormView")
                        }, this.trackPrivacyPolicyLinkView = function() {
                            t.window.ppms.cm.api("trackPrivacyPolicyLinkView")
                        }, this.trackRejectAllClick = function() {
                            t.window.ppms.cm.api("trackRejectAllClick")
                        }, this.trackReminderWidgetView = function() {
                            t.window.ppms.cm.api("trackReminderWidgetView")
                        }, this.trackSaveChoicesClick = function() {
                            t.window.ppms.cm.api("trackSaveChoicesClick")
                        }
                    }
                    return e.dependencies = ["Window"], e
                }(),
                rt = function() {
                    function e(e, t, n, r, i, o, a, s, c, u, l, d, p, f, h, g) {
                        var v = this;
                        this.window = e, this.getComplianceSettingsFactory = t, this.getComplianceTypesFactory = n, this.getNewComplianceTypesFactory = r, this.openConsentFormFactory = i, this.sendDataRequestFactory = o, this.setComplianceSettingsFactory = a, this.setInitialComplianceSettingsFactory = s, this.trackAgreeToAllClickFactory = c, this.trackCloseButtonClickFactory = u, this.trackMainFormViewFactory = l, this.trackPrivacyPolicyLinkViewFactory = d, this.trackRejectAllClickFactory = p, this.trackReminderWidgetViewFactory = f, this.trackSaveChoicesClickFactory = h, this.dequeuer = g, this.commands = {}, this.initialize = function() {
                            v.isApiAlreadyDeclared(v.window) ? v.window.ppms.cm.api = v.execute : v.declareApi(v.window), v.registerAllCommands(), v.dequeuer.dequeue(v.execute)
                        }, this.registerAllCommands = function() {
                            v.register("getComplianceSettings", v.getComplianceSettingsFactory.create()), v.register("getComplianceTypes", v.getComplianceTypesFactory.create()), v.register("getNewComplianceTypes", v.getNewComplianceTypesFactory.create()), v.register("openConsentForm", v.openConsentFormFactory.create()), v.register("sendDataRequest", v.sendDataRequestFactory.create()), v.register("setComplianceSettings", v.setComplianceSettingsFactory.create()), v.register("setInitialComplianceSettings", v.setInitialComplianceSettingsFactory.create()), v.register("trackAgreeToAllClick", v.trackAgreeToAllClickFactory.create()), v.register("trackCloseButtonClick", v.trackCloseButtonClickFactory.create()), v.register("trackMainFormView", v.trackMainFormViewFactory.create()), v.register("trackPrivacyPolicyLinkView", v.trackPrivacyPolicyLinkViewFactory.create()), v.register("trackRejectAllClick", v.trackRejectAllClickFactory.create()), v.register("trackReminderWidgetView", v.trackReminderWidgetViewFactory.create()), v.register("trackSaveChoicesClick", v.trackSaveChoicesClickFactory.create())
                        }, this.register = function(e, t) {
                            v.commands[e] = t
                        }, this.execute = function(e) {
                            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                            var r = v.commands[e];
                            void 0 === r && console.error("".concat(e, ": not implemented")), r.apply(void 0, t)
                        }, this.declareApi = function(e) {
                            Object.defineProperty(e, "ppms", {
                                enumerable: !0,
                                value: {
                                    cm: {
                                        api: v.execute
                                    }
                                }
                            })
                        }, this.isApiAlreadyDeclared = function(e) {
                            return "ppms" in e && "cm" in e.ppms && "api" in e.ppms.cm
                        }
                    }
                    return e.dependencies = ["Window", "GetComplianceSettingsFactory", "GetComplianceTypesFactory", "GetNewComplianceTypesFactory", "OpenConsentFormFactory", "SendDataRequestFactory", "SetComplianceSettingsFactory", "SetInitialComplianceSettingsFactory", "TrackAgreeToAllClickFactory", "TrackCloseButtonClickFactory", "TrackMainFormViewFactory", "TrackPrivacyPolicyLinkViewFactory", "TrackRejectAllClickFactory", "TrackReminderWidgetViewFactory", "TrackSaveChoicesClickFactory", "Dequeuer"], e
                }(),
                it = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.appId = e, this.document = t, this.consentTemplatesSettings = n, this.preventClosing = function() {
                            var e = r.consentTemplatesSettings.consent_form_variant;
                            "bottom_bar" === e && r.addStyleToConsentForm("\n#ppms_cm_consent_popup_#appId# {\n  height: 100vh !important;\n  width: 100% !important;\n  background-color: rgba(0, 0, 0, .8) !important;\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  z-index: 2147483647 !important;\n}".replace("#appId#", r.appId)), "modal" === e && r.addStyleToConsentForm("#ppms_cm_popup_overlay { z-index: 2147483647 !important; }"), r.addStyleToConsentForm("#ppms_cm_close-popup { display: none !important; }"), r.addStyleToConsentForm("body { overflow: hidden !important; }")
                        }, this.addStyleToConsentForm = function(e) {
                            var t = "ppms_cm_consent_popup_".concat(r.appId, "_styles"),
                                n = r.document.getElementById(t);
                            n && (n.innerHTML = n.innerHTML + " ".concat(e))
                        }
                    }
                    return e.dependencies = ["appId", "Document", "consentTemplatesSettings"], e
                }(),
                ot = function() {
                    function e(e, t) {
                        var n = this;
                        this.staleCheckpointStorage = e, this.consentSettings = t, this.isConsentStale = function() {
                            var e = n.staleCheckpointStorage.getStaleCheckpoint();
                            if (null === e) return !1;
                            var t = n.consentSettings.cookie_stale_period;
                            if (-1 === t) return !1;
                            var r = 1e3 * t,
                                i = new Date(e.getTime() + r);
                            return new Date >= i
                        }
                    }
                    return e.dependencies = ["StaleCheckpointStorage", "consentSettings"], e
                }(),
                at = function() {
                    return at = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, at.apply(this, arguments)
                },
                st = function() {
                    function e(e, t) {
                        var n = this;
                        this.tagTree = e, this.consentStorage = t, this.getAll = function() {
                            return n.unique(n.tagTree.map((function(e) {
                                return e.consentType
                            }))).filter((function(e) {
                                return "not_require_consent" !== e
                            }))
                        }, this.getNew = function() {
                            var e = n.getAll(),
                                t = n.getConsentTypesFromCookie();
                            return e.filter((function(e) {
                                return -1 === t.indexOf(e)
                            }))
                        }, this.getConsentTypesFromCookie = function() {
                            var e = n.consentStorage.getConsents();
                            return Object.keys(e)
                        }, this.getAgreedTypes = function() {
                            return n.getEntries().filter((function(e) {
                                return 1 === e.status
                            })).map((function(e) {
                                return e.consentType
                            }))
                        }, this.getRejectedTypes = function() {
                            return n.getEntries().filter((function(e) {
                                return 0 === e.status
                            })).map((function(e) {
                                return e.consentType
                            }))
                        }, this.getUndecidedTypes = function() {
                            return n.getEntries().filter((function(e) {
                                return -1 === e.status
                            })).map((function(e) {
                                return e.consentType
                            }))
                        }, this.getEntries = function() {
                            return function(e) {
                                var t = [];
                                for (var n in e) {
                                    var r = e[n];
                                    if (void 0 === r) throw new Error("Invalid consent value");
                                    t.push(at({
                                        consentType: n
                                    }, r))
                                }
                                return t
                            }(n.consentStorage.getConsents())
                        }, this.unique = function(e) {
                            return e.filter((function(e, t, n) {
                                return n.indexOf(e) === t
                            }))
                        }
                    }
                    return e.dependencies = ["tagTree", "ConsentStorage"], e
                }();
            O.config = {
                strict: !0
            };
            var ct, ut = new O,
                lt = function(e, t) {
                    ut.value(e, t)
                },
                dt = function(e, t) {
                    var n, r = null !== (n = t.dependencies) && void 0 !== n ? n : [];
                    ut.service.apply(ut, function(e, t, n) {
                        if (n || 2 === arguments.length)
                            for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                        return e.concat(r || Array.prototype.slice.call(t))
                    }([e, t], r, !1))
                },
                pt = function() {
                    function e(e, t) {
                        var n = this;
                        this.window = e, this.consentSettings = t, this.resolve = function() {
                            var e = n.window.location.hostname,
                                t = n.getDomains();
                            if (n.hasExactMatch(t)) return {
                                domain: e,
                                isWildcard: !1
                            };
                            var r = t.filter((function(e) {
                                return 0 === e.indexOf("*.")
                            })).filter((function(t) {
                                var r = e === t.substring(2),
                                    i = n.endsWith(e, ".".concat(t.substring(2)));
                                return r || i
                            }));
                            return 0 === r.length ? {
                                domain: e,
                                isWildcard: !1
                            } : {
                                domain: n.findLongestString(r).substring(2),
                                isWildcard: !0
                            }
                        }, this.hasExactMatch = function(e) {
                            return -1 !== e.indexOf(n.window.location.hostname)
                        }, this.findLongestString = function(e) {
                            if (0 === e.length) throw new Error("Provided list is empty. Cannot find shortest element.");
                            return e.sort((function(e, t) {
                                return t.length - e.length
                            }))[0]
                        }, this.endsWith = function(e, t) {
                            return -1 !== e.indexOf(t, e.length - t.length)
                        }, this.getDomains = function() {
                            return n.consentSettings.cookie_domains
                        }
                    }
                    return e.dependencies = ["Window", "consentSettings"], e
                }(),
                ft = function() {
                    function e(e, t) {
                        var n = this;
                        this.document = e, this.styleElementManipulator = t, this.handleClose = function(e) {
                            n.removeElementById(e), n.styleElementManipulator.removeStyleElement("".concat(e, "_styles"))
                        }, this.removeElementById = function(e) {
                            var t, r = n.document.getElementById(e);
                            null === (t = null == r ? void 0 : r.parentNode) || void 0 === t || t.removeChild(r)
                        }
                    }
                    return e.dependencies = ["Document", "StyleElementManipulator"], e
                }(),
                ht = function() {
                    function e(e, t, n, r, i, o) {
                        var a = this;
                        this.templateKeeper = e, this.publicApiCommandExecutor = t, this.templateWrapper = n, this.appId = r, this.closeHandler = i, this.reminderCookie = o, this.render = function() {
                            var e = a.templateKeeper.getTemplate("reminder_widget");
                            a.templateWrapper.render(e, "ppms_cm_consent_bar_".concat(a.appId), "ppms_cm_bar-close-icon"), a.addOpenPopupButtonListener(), a.addCloseButtonListener()
                        }, this.addCloseButtonListener = function() {
                            var e = document.getElementById("ppms_cm_bar-close-icon");
                            e && e.addEventListener("click", a.saveClosedState)
                        }, this.saveClosedState = function() {
                            a.reminderCookie.setCookie(!0)
                        }, this.addOpenPopupButtonListener = function() {
                            var e = document.querySelector("#ppms_cm_open-popup");
                            e && e.addEventListener("click", (function() {
                                a.publicApiCommandExecutor.openConsentForm(), a.publicApiCommandExecutor.trackReminderWidgetView(), a.closeHandler.handleClose("ppms_cm_consent_bar_".concat(a.appId))
                            }))
                        }
                    }
                    return e.dependencies = ["TemplateKeeper", "PublicApiCommandExecutor", "TemplateWrapper", "appId", "CloseHandler", "ReminderCookie"], e
                }();
            ! function(e) {
                e.agreeToAll = "agree-to-all", e.rejectAll = "reject-to-all", e.save = "save"
            }(ct || (ct = {}));
            var gt, vt = function() {
                    function e(e, t, n, r, i, o, a, s, c, u, l, d, p) {
                        var f = this;
                        this.appId = e, this.simpleConsentFormRenderer = t, this.extendedConsentFormRenderer = n, this.consentTypesProvider = r, this.document = i, this.publicApiCommandExecutor = o, this.closeHandler = a, this.simpleConsentFormRecognizer = s, this.successNoteRecognizer = c, this.successNoteRenderer = u, this.staleCheckpointStorage = l, this.consentTemplatesSettings = d, this.consentFormBlocker = p, this.render = function(e) {
                            if (null === f.document.getElementById("ppms_cm_consent_popup_".concat(f.appId))) {
                                var t = f.simpleConsentFormRecognizer.recognize();
                                if (t.applies) f.simpleConsentFormRenderer.render(t.consentType, f.onSave, f.onClose);
                                else {
                                    var n = f.consentTypesProvider.getAgreedTypes();
                                    f.extendedConsentFormRenderer.render(e, n, f.onSave, f.onClose)
                                }
                                f.staleCheckpointStorage.setStaleCheckpoint(), f.consentTemplatesSettings.reminder_enabled && "consent_form_with_blocked_content" === f.consentTemplatesSettings.reminder_widget_variant && f.consentFormBlocker.preventClosing()
                            }
                        }, this.onSave = function(e, t) {
                            f.publicApiCommandExecutor.setComplianceSettings({
                                consents: t
                            }, (function() {
                                switch (f.closeHandler.handleClose("ppms_cm_consent_popup_".concat(f.appId)), f.successNoteRecognizer.recognize().applies && f.successNoteRenderer.render(), e) {
                                    case ct.save:
                                        return void f.publicApiCommandExecutor.trackSaveChoicesClick();
                                    case ct.agreeToAll:
                                        return void f.publicApiCommandExecutor.trackAgreeToAllClick();
                                    case ct.rejectAll:
                                        return void f.publicApiCommandExecutor.trackRejectAllClick()
                                }
                            }), (function() {
                                f.closeHandler.handleClose("ppms_cm_consent_popup_".concat(f.appId))
                            }))
                        }, this.onClose = function() {
                            f.publicApiCommandExecutor.trackCloseButtonClick()
                        }
                    }
                    return e.dependencies = ["appId", "SimpleConsentFormRenderer", "ExtendedConsentFormRenderer", "ConsentTypesProvider", "Document", "PublicApiCommandExecutor", "CloseHandler", "SimpleConsentFormRecognizer", "SuccessNoteRecognizer", "SuccessNoteRenderer", "StaleCheckpointStorage", "consentTemplatesSettings", "ConsentFormBlocker"], e
                }(),
                mt = function() {
                    function e(e) {
                        var t = this;
                        this.consentBarRenderer = e, this.render = function() {
                            t.consentBarRenderer.render()
                        }
                    }
                    return e.dependencies = ["ConsentBarRenderer"], e
                }(),
                yt = "ppms_cm_data_subject",
                bt = "ppms_cm_data_subject_widget_styles",
                wt = "ppms_cm_data_subject_widget__hidden",
                Ct = "ppms_cm_data_subject_widget__wrapper",
                St = "ppms_cm_data_subject_failed_styles",
                _t = "ppms_cm_data_subject_success_styles",
                Et = "ppms_cm_data_subject_note",
                Tt = function() {
                    function e(e, t, n, r, i) {
                        var o = this;
                        this.window = e, this.document = t, this.templateKeeper = n, this.styleElementManipulator = r, this.publicApiCommandExecutor = i, this.render = function() {
                            o.setupNewWidget(), o.setupMutationObserver(o.setupNewWidget)
                        }, this.setupNewWidget = function() {
                            var e = o.document.getElementById(yt);
                            if (null === e) return o.removeStaleStyleElement(), void delete o.window.sendUserDataSubjectRequest;
                            if (!e.getAttribute("data-listener-attached")) {
                                e.setAttribute("data-listener-attached", "true");
                                var t = o.templateKeeper.getTemplate("data_subject_request");
                                o.styleElementManipulator.addStyleElement(t.styles, bt), Object.defineProperty(o.window, "sendUserDataSubjectRequest", {
                                    configurable: !0,
                                    value: function(e) {
                                        if (!o.isSubmittedDataValid(e)) return !1;
                                        var t = {
                                            content: e.message.value,
                                            email: e.email.value,
                                            type: e.event.value
                                        };
                                        return o.publicApiCommandExecutor.sendDataRequest(t, o.onSuccess, o.onError), !1
                                    }
                                })
                            }
                        }, this.setupMutationObserver = function(e) {
                            new MutationObserver(e).observe(o.document.body, {
                                childList: !0,
                                attributes: !1,
                                subtree: !0
                            })
                        }, this.showDataSubjectRequestWidget = function() {
                            var e = o.document.getElementById(yt);
                            e && (e.classList.remove(wt), e.classList.add(Ct))
                        }, this.hideDataSubjectRequestWidget = function() {
                            var e = o.document.getElementById(yt);
                            e && (e.classList.add(wt), e.classList.remove(Ct))
                        }, this.resetForm = function() {
                            var e = o.document.getElementById("ppms_cm_data_subject_form");
                            e && e instanceof HTMLFormElement && e.reset()
                        }, this.showSuccessNote = function() {
                            var e, t = o.templateKeeper.getTemplate("data_subject_request_confirmation_note"),
                                n = o.document.getElementById(yt),
                                r = o.document.createElement("div");
                            r.setAttribute("id", Et), r.innerHTML = t.html, null === (e = null == n ? void 0 : n.parentNode) || void 0 === e || e.insertBefore(r, n), o.styleElementManipulator.addStyleElement(t.styles, _t)
                        }, this.showFailureNote = function() {
                            var e, t = o.templateKeeper.getTemplate("data_subject_request_failure_note"),
                                n = o.document.getElementById(yt),
                                r = o.document.createElement("div");
                            r.setAttribute("id", Et), r.innerHTML = t.html, null === (e = null == n ? void 0 : n.parentNode) || void 0 === e || e.insertBefore(r, n), o.styleElementManipulator.addStyleElement(t.styles, St)
                        }, this.removeSuccessNote = function() {
                            var e, t = o.document.getElementById(Et);
                            t && (null === (e = t.parentNode) || void 0 === e || e.removeChild(t)), o.styleElementManipulator.removeStyleElement(_t)
                        }, this.removeFailureNote = function() {
                            var e, t = o.document.getElementById(Et);
                            t && (null === (e = t.parentNode) || void 0 === e || e.removeChild(t)), o.styleElementManipulator.removeStyleElement(St)
                        }, this.onSuccess = function() {
                            o.hideDataSubjectRequestWidget(), o.showSuccessNote();
                            var e = o.document.querySelector(".".concat("show-data-subject"));
                            e && e.addEventListener("click", (function() {
                                o.removeSuccessNote(), o.showDataSubjectRequestWidget(), o.resetForm()
                            }))
                        }, this.onError = function() {
                            o.hideDataSubjectRequestWidget(), o.showFailureNote();
                            var e = o.document.querySelector(".".concat("try-again-data-subject"));
                            e && e.addEventListener("click", (function() {
                                o.removeFailureNote(), o.showDataSubjectRequestWidget()
                            }))
                        }, this.isSubmittedDataValid = function(e) {
                            return "event" in e && "email" in e && "message" in e
                        }, this.removeStaleStyleElement = function() {
                            null !== o.document.getElementById(bt) && o.styleElementManipulator.removeStyleElement(bt)
                        }
                    }
                    return e.dependencies = ["Window", "Document", "TemplateKeeper", "StyleElementManipulator", "PublicApiCommandExecutor"], e
                }(),
                kt = "expanded",
                At = function() {
                    var e = this;
                    this.addExpander = function(t) {
                        var n = t.querySelector("#ppms_cm_popup_wrapper");
                        if (null === n) throw new Error("CM popup not found");
                        var r = t.querySelectorAll("[data-content-expander]");
                        0 !== r.length && e.addClickListenerToAllExpandableItems(r, n)
                    }, this.addClickListenerToAllExpandableItems = function(t, n) {
                        t.forEach((function(r) {
                            r.addEventListener("click", e.itemOnClick(t, n))
                        }))
                    }, this.itemOnClick = function(e, t) {
                        return function() {
                            e.forEach((function(e) {
                                e.classList.toggle(kt)
                            })), t.classList.toggle(kt)
                        }
                    }
                },
                Ot = "bottom",
                Rt = ".ppms_cm_consent_switcher",
                Pt = ".ppms_cm_card_section",
                Lt = "checked",
                xt = function() {
                    function e(e, t, n, r, i) {
                        var o = this;
                        this.appId = e, this.templateKeeper = t, this.expandableHandler = n, this.languagePicker = r, this.templateWrapper = i, this.render = function(e, t, n, r) {
                            var i = o.getTemplate();
                            o.templateWrapper.render(i, "ppms_cm_consent_popup_".concat(o.appId), "ppms_cm_close-popup", r);
                            var a = document.getElementById("ppms_cm_consent_popup_".concat(o.appId));
                            if (!a) throw new Error("CM popup not found");
                            o.languagePicker.start(document.body), o.expandableHandler.addExpander(a), o.removeUnusedConsents(a, e, Pt), o.removeUnusedConsents(a, e, ".ppms_cm_consent_item"), o.setAgreedConsents(a, t), o.addSwitcherListeners(a), o.addButtonListener(a, n, "#ppms_cm_save-choices", ct.save), o.addButtonListener(a, n, "#ppms_cm_agree-to-all", ct.agreeToAll), o.addButtonListener(a, n, "#ppms_cm_reject-all", ct.rejectAll),
                                function(e) {
                                    var t = e.querySelector("#ppms_cm_popup_wrapper");
                                    if (!t) throw new Error("CM popup wrapper not found");
                                    t.addEventListener("scroll", (function() {
                                        0 === t.scrollTop ? t.classList.add("top") : t.classList.remove("top"), t.scrollHeight - t.scrollTop <= t.clientHeight ? t.classList.add(Ot) : t.classList.remove(Ot)
                                    }))
                                }(a)
                        }, this.getTemplate = function() {
                            return o.templateKeeper.getTemplate("extended_consent_form")
                        }, this.addClickListenerToSwitcher = function(e) {
                            e.addEventListener("click", (function() {
                                e.classList.toggle(Lt)
                            }))
                        }, this.addSwitcherListeners = function(e) {
                            e.querySelectorAll(Rt).forEach(o.addClickListenerToSwitcher)
                        }, this.setAllSwitchersTo = function(e, t) {
                            e.querySelectorAll(Rt).forEach((function(e) {
                                t ? e.classList.add(Lt) : e.classList.remove(Lt)
                            }))
                        }, this.setAgreedConsents = function(e, t) {
                            e.querySelectorAll(Pt).forEach((function(e) {
                                var n = e.getAttribute("data-consent-type");
                                if (null === n) throw new Error("Missing consent type data");
                                if (-1 !== t.indexOf(n)) {
                                    var r = e.querySelector(Rt);
                                    r && r.classList.add(Lt)
                                }
                            }))
                        }, this.removeUnusedConsents = function(e, t, n) {
                            e.querySelectorAll(n).forEach((function(e) {
                                var n, r = e.getAttribute("data-consent-type");
                                if (null === r) throw new Error("Missing consent type data"); - 1 === t.indexOf(r) && (null === (n = e.parentNode) || void 0 === n || n.removeChild(e))
                            }))
                        }, this.getConsents = function(e) {
                            var t = {};
                            return e.querySelectorAll(Pt).forEach((function(e) {
                                var n = e.getAttribute("data-consent-type");
                                if (null === n) throw new Error("Missing consent type data");
                                var r = e.querySelector(Rt);
                                if (null === r) throw new Error("Unable to read consent status");
                                t[n] = {
                                    status: r.classList.contains(Lt) ? 1 : 0,
                                    updatedAt: (new Date).toISOString()
                                }
                            })), t
                        }, this.addButtonListener = function(e, t, n, r) {
                            e.querySelectorAll(n).forEach((function(n) {
                                n.addEventListener("click", (function() {
                                    n.classList.contains("disabled") || (r === ct.agreeToAll && o.setAllSwitchersTo(e, !0), r === ct.rejectAll && o.setAllSwitchersTo(e, !1), t(r, o.getConsents(e)))
                                }))
                            }))
                        }
                    }
                    return e.dependencies = ["appId", "TemplateKeeper", "ExpandableHandler", "LanguagePicker", "TemplateWrapper"], e
                }(),
                Dt = "ppms_cm_privacy_settings_styles",
                Nt = function() {
                    function e(e, t, n, r) {
                        var i = this;
                        this.templateKeeper = e, this.document = t, this.publicApiCommandExecutor = n, this.styleElementManipulator = r, this.render = function() {
                            i.setupNewWidget(), i.setupMutationObserver(i.setupNewWidget)
                        }, this.setupNewWidget = function() {
                            var e = i.document.getElementById("ppms_cm_privacy_settings");
                            null !== e ? null === e.getAttribute("data-listener-attached") && (e.setAttribute("data-listener-attached", "true"), i.addWidgetStyles(), i.addButtonListener()) : i.removeStaleStyleElement()
                        }, this.setupMutationObserver = function(e) {
                            new MutationObserver(e).observe(i.document.body, {
                                childList: !0,
                                attributes: !1,
                                subtree: !0
                            })
                        }, this.addButtonListener = function() {
                            var e = i.document.getElementById("ppms_cm_privacy_settings_button");
                            if (!e) throw new Error("Open consent form button not found");
                            e.addEventListener("click", (function() {
                                i.publicApiCommandExecutor.openConsentForm(), i.publicApiCommandExecutor.trackPrivacyPolicyLinkView()
                            }))
                        }, this.addWidgetStyles = function() {
                            var e = i.templateKeeper.getTemplate("consent_form_link").styles;
                            i.styleElementManipulator.addStyleElement(e, Dt)
                        }, this.removeStaleStyleElement = function() {
                            null !== i.document.getElementById(Dt) && i.styleElementManipulator.removeStyleElement(Dt)
                        }
                    }
                    return e.dependencies = ["TemplateKeeper", "Document", "PublicApiCommandExecutor", "StyleElementManipulator"], e
                }(),
                Ft = function() {
                    function e(e, t) {
                        var n = this;
                        this.templateKeeper = e, this.consentTypesProvider = t, this.recognize = function() {
                            var e = n.getSimpleTemplateConfiguration();
                            if (!e.enabled) return {
                                applies: !1
                            };
                            var t = n.consentTypesProvider.getAll();
                            return 1 !== t.length || t[0] !== e.consentType ? {
                                applies: !1
                            } : {
                                applies: !0,
                                consentType: e.consentType
                            }
                        }, this.getSimpleTemplateConfiguration = function() {
                            var e = n.templateKeeper.getTemplate("simple_consent_form").configuration;
                            return Array.isArray(e) ? {
                                enabled: !1
                            } : "enabled" in e && "consentType" in e ? {
                                enabled: e.enabled,
                                consentType: e.consentType
                            } : {
                                enabled: !1
                            }
                        }
                    }
                    return e.dependencies = ["TemplateKeeper", "ConsentTypesProvider"], e
                }(),
                It = function() {
                    function e(e, t, n, r) {
                        var i = this;
                        this.appId = e, this.templateKeeper = t, this.languagePicker = n, this.templateWrapper = r, this.render = function(e, t, n) {
                            var r = i.getTemplate();
                            i.templateWrapper.render(r, "ppms_cm_consent_popup_".concat(i.appId), "ppms_cm_close-popup", n);
                            var o = document.getElementById("ppms_cm_consent_popup_".concat(i.appId));
                            if (!o) throw new Error("CM popup not found");
                            i.languagePicker.start(document.body), i.addAgreeButtonListener(o, t, e), i.addDisagreeButtonListener(o, t, e)
                        }, this.getTemplate = function() {
                            return i.templateKeeper.getTemplate("simple_consent_form")
                        }, this.createConsents = function(e, t) {
                            var n;
                            return (n = {})[e] = {
                                status: t,
                                updatedAt: (new Date).toISOString()
                            }, n
                        }, this.addAgreeButtonListener = function(e, t, n) {
                            var r = e.querySelector("#ppms_cm_agree-to-all");
                            r && r.addEventListener("click", (function() {
                                t(ct.agreeToAll, i.createConsents(n, 1))
                            }))
                        }, this.addDisagreeButtonListener = function(e, t, n) {
                            var r = e.querySelector("#ppms_cm_disagree");
                            r && r.addEventListener("click", (function() {
                                t(ct.rejectAll, i.createConsents(n, 0))
                            }))
                        }
                    }
                    return e.dependencies = ["appId", "TemplateKeeper", "LanguagePicker", "TemplateWrapper"], e
                }(),
                jt = function() {
                    function e(e) {
                        var t = this;
                        this.templateKeeper = e, this.recognize = function() {
                            if (!t.templateKeeper.hasTemplate("extended_consent_form_success_note")) return {
                                applies: !1
                            };
                            var e = t.templateKeeper.getTemplate("extended_consent_form_success_note");
                            return {
                                applies: "enabled" in e.configuration && Boolean(e.configuration.enabled)
                            }
                        }
                    }
                    return e.dependencies = ["TemplateKeeper"], e
                }(),
                Vt = function() {
                    function e(e, t, n, r) {
                        var i = this;
                        this.appId = e, this.templateKeeper = t, this.templateWrapper = n, this.closeHandler = r, this.render = function() {
                            var e = i.templateKeeper.getTemplate("extended_consent_form_success_note");
                            i.templateWrapper.render(e, "ppms_cm_consent_popup_".concat(i.appId), "ppms_cm_close_popup_id");
                            var t = document.getElementById("ppms_cm_consent_popup_".concat(i.appId));
                            if (!t) throw new Error("CM popup not found");
                            i.addCloseButtonListener(t)
                        }, this.addCloseButtonListener = function(e) {
                            var t = e.querySelector("#ppms_consent_form_success_note_button");
                            t && t.addEventListener("click", i.close)
                        }, this.close = function() {
                            i.closeHandler.handleClose("ppms_cm_consent_popup_".concat(i.appId))
                        }
                    }
                    return e.dependencies = ["appId", "TemplateKeeper", "TemplateWrapper", "CloseHandler"], e
                }(),
                Mt = function() {
                    function e(e, t, n, r, i, o) {
                        var a = this;
                        this.window = e, this.document = t, this.consentTemplatesSettings = n, this.closeHandler = r, this.mobileDetector = i, this.styleElementManipulator = o, this.render = function(e, t, n, r) {
                            var i = a.document.createElement("div");
                            i.innerHTML = e.html, i.id = t, a.document.body.appendChild(i), a.styleElementManipulator.addStyleElement(e.styles, "".concat(t, "_styles")), a.isIE() && a.addIEClasses(i), a.mobileDetector.isMobile() && a.addMobileClasses(i), a.isPoweredByEnabled() || a.hidePoweredBy(i);
                            var o = i.querySelector("#".concat(n));
                            o && o.addEventListener("click", (function() {
                                a.closeHandler.handleClose(t), "function" == typeof r && r()
                            }))
                        }, this.addIEClasses = function(e) {
                            e.classList.add("ie11")
                        }, this.isIE = function() {
                            var e = a.window.navigator,
                                t = e.userAgent,
                                n = e.appVersion;
                            return -1 !== t.indexOf("MSIE") || !(!n || -1 === n.indexOf("Trident/"))
                        }, this.addMobileClasses = function(e) {
                            var t = a.mobileDetector.isSmallMobile() ? "mobile-sm" : "mobile-lg",
                                n = e.querySelector('[id*="overlay"]');
                            n && n.classList.add(t)
                        }, this.isPoweredByEnabled = function() {
                            return a.consentTemplatesSettings.powered_by_enabled
                        }, this.hidePoweredBy = function(e) {
                            var t, n = e.querySelector(".ppms_cm_footer");
                            null === (t = null == n ? void 0 : n.parentNode) || void 0 === t || t.removeChild(n)
                        }
                    }
                    return e.dependencies = ["Window", "Document", "consentTemplatesSettings", "CloseHandler", "MobileDetector", "StyleElementManipulator"], e
                }(),
                Bt = function() {
                    function e(e, t, n, r) {
                        var i = this;
                        this.closeHandler = e, this.languageStorage = t, this.appId = n, this.publicApiCommandExecutor = r, this.setNewLanguage = function(e) {
                            i.closeHandler.handleClose("ppms_cm_consent_popup_".concat(i.appId)), i.languageStorage.setLanguage(e), i.publicApiCommandExecutor.openConsentForm()
                        }
                    }
                    return e.dependencies = ["CloseHandler", "LanguageStorage", "appId", "PublicApiCommandExecutor"], e
                }(),
                Ht = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.window = e, this.consentTemplatesSettings = t, this.languageStorage = n, this.getLanguage = function() {
                            var e = r.languageStorage.getLanguage(),
                                t = r.getAvailableLanguages();
                            if (null !== e && r.findExactMatch(e, t)) return e;
                            var n = r.getBrowserLanguages();
                            return 0 === n.length ? r.getDefaultLanguage() : r.findBrowserLanguageMatch(n, t) || r.getDefaultLanguage()
                        }, this.findBrowserLanguageMatch = function(e, t) {
                            for (var n = 0, i = e; n < i.length; n++) {
                                var o = i[n];
                                if (r.findExactMatch(o, t)) return o;
                                var a = o.substring(0, 2),
                                    s = r.findDialects(a, t);
                                if (s.length > 0) return s[0]
                            }
                        }, this.findExactMatch = function(e, t) {
                            return -1 !== t.indexOf(e)
                        }, this.findDialects = function(e, t) {
                            return t.filter((function(t) {
                                return t.substring(0, 2) === e
                            }))
                        }, this.getDefaultLanguage = function() {
                            return r.consentTemplatesSettings.default_language
                        }, this.getAvailableLanguages = function() {
                            var e = r.consentTemplatesSettings.languages;
                            return Object.keys(e)
                        }, this.getNormalizedBrowserLanguages = function() {
                            if (r.window.navigator.languages) return r.window.navigator.languages;
                            var e = r.window.navigator.userLanguage;
                            return e ? [e] : [r.window.navigator.language]
                        }, this.getBrowserLanguages = function() {
                            return r.getNormalizedBrowserLanguages().map((function(e) {
                                return e.replace("-", "_")
                            }))
                        }
                    }
                    return e.dependencies = ["Window", "consentTemplatesSettings", "LanguageStorage"], e
                }(),
                Wt = "ppms_cm_language_select_extendable_item",
                qt = "ppms_cm_language_select_extendable_id",
                Ut = "expanded",
                zt = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.consentTemplatesSettings = e, this.languageDetector = t, this.changeLanguageHandler = n, this.start = function(e) {
                            var t, n = e.querySelector("#".concat("ppms_cm_language_select_btn_id"));
                            if (!n || !r.isHtmlElement(n)) throw new Error("Language picker not found");
                            r.getLanguagesCount() < 2 ? null === (t = n.parentElement) || void 0 === t || t.removeChild(n) : (r.replaceButtonText(n), r.replaceLanguages(e), r.addButtonListeners(e, n), r.addOptionsListeners(e, n), r.addNativeSelect(n))
                        }, this.getCurrentLanguageName = function() {
                            var e = r.languageDetector.getLanguage();
                            return r.consentTemplatesSettings.languages[e][e]
                        }, this.replaceButtonText = function(e) {
                            var t = r.getCurrentLanguageName();
                            e.childNodes.item(0).textContent = t
                        }, this.replaceLanguages = function(e) {
                            var t = e.querySelector("#".concat(qt));
                            if (null === t || !r.isHtmlElement(t)) throw new Error("Element #".concat(qt, " not found"));
                            var n = t.children[0].cloneNode(!0);
                            t.innerHTML = "";
                            for (var i = r.getAvailableLanguages(), o = 0; o < i.length; o += 1) {
                                var a = n.cloneNode(!0),
                                    s = a.id;
                                a.setAttribute("id", s.replace(/_\d+$/, "_".concat(o))), a.setAttribute("data-value", i[o].id), a.innerText = i[o].name, t.appendChild(a)
                            }
                        }, this.addButtonListeners = function(e, t) {
                            t.addEventListener("blur", r.blur(t)), t.addEventListener("mousedown", (function() {
                                return r.toggle(t)
                            })), t.addEventListener("focus", (function() {
                                return r.open(t)
                            })), t.addEventListener("keydown", r.buttonKeydownListener(e, t))
                        }, this.isHtmlElement = function(e) {
                            return e instanceof HTMLElement
                        }, this.isOpened = function(e) {
                            return e.classList.contains(Ut)
                        }, this.open = function(e) {
                            e.classList.add(Ut)
                        }, this.close = function(e) {
                            e.classList.remove(Ut)
                        }, this.toggle = function(e) {
                            e.classList.toggle(Ut)
                        }, this.blur = function(e) {
                            return function(t) {
                                var n = t.relatedTarget;
                                if (n) {
                                    if (!r.isHtmlElement(n)) throw new Error("relatedTarget is not an HTML element");
                                    n.className && "ppms_cm_language_select_extendable_item" !== n.className && r.close(e)
                                } else r.close(e)
                            }
                        }, this.addOptionsListeners = function(e, t) {
                            r.getOptions(e).forEach((function(n) {
                                return r.addOptionListeners(e, t, n)
                            }))
                        }, this.addNativeSelect = function(e) {
                            var t = e.parentElement;
                            if (!t) throw new Error("Parent of #".concat(e.id, " not found"));
                            var n = document.createElement("select");
                            n.setAttribute("aria-hidden", "true"), r.getAvailableLanguages().forEach((function(e) {
                                var t = document.createElement("option");
                                t.value = e.id, t.innerText = e.name, e.id === r.languageDetector.getLanguage() && t.setAttribute("selected", "true"), n.appendChild(t)
                            })), t.appendChild(n), n.addEventListener("change", r.choose)
                        }, this.buttonKeydownListener = function(e, t) {
                            return function(n) {
                                switch (n.code || n.key || n.keyCode) {
                                    case "ArrowDown":
                                    case "Down":
                                    case 40:
                                        n.preventDefault(), r.open(t), r.focusFirstOption(e);
                                        break;
                                    case "Tab":
                                    case 9:
                                        n.shiftKey ? r.close(t) : r.isOpened(t) && (n.preventDefault(), r.focusFirstOption(e));
                                        break;
                                    case "Enter":
                                    case 13:
                                    case "Space":
                                    case "Spacebar":
                                    case " ":
                                    case 32:
                                        n.preventDefault(), r.toggle(t)
                                }
                            }
                        }, this.getAvailableLanguages = function() {
                            var e = r.languageDetector.getLanguage(),
                                t = r.consentTemplatesSettings.languages[e],
                                n = [];
                            for (var i in t) n.push({
                                id: i,
                                name: t[i]
                            });
                            return n
                        }, this.focusFirstOption = function(e) {
                            var t = e.querySelector(".".concat(Wt));
                            if (null === t || !r.isHtmlElement(t)) throw new Error("Language picker options not found");
                            t.focus()
                        }, this.focusLastOption = function(e) {
                            var t = e.getElementsByClassName(Wt);
                            if (0 === t.length) throw new Error("Language picker options not found");
                            var n = t[t.length - 1];
                            r.isHtmlElement(n) && n.focus()
                        }, this.getOptions = function(e) {
                            return e.querySelectorAll(".".concat(Wt))
                        }, this.setLanguage = function(e) {
                            r.changeLanguageHandler.setNewLanguage(e)
                        }, this.choose = function(e) {
                            var t = e.target;
                            if (null === t) throw new Error("Event target is null");
                            if (r.isHtmlElement(t)) {
                                var n = t.getAttribute("data-value");
                                n && r.setLanguage(n)
                            }
                            "value" in t && r.setLanguage(t.value)
                        }, this.optionKeydownListener = function(e, t) {
                            return function(n) {
                                switch (n.code || n.key || n.keyCode) {
                                    case "Enter":
                                    case 13:
                                    case "Space":
                                    case "Spacebar":
                                    case " ":
                                    case 32:
                                        n.preventDefault(), r.choose(n);
                                        break;
                                    case "ArrowUp":
                                    case "Up":
                                    case 38:
                                        n.preventDefault(), r.focusPreviousOption(e, t);
                                        break;
                                    case "ArrowDown":
                                    case "Down":
                                    case 40:
                                        n.preventDefault(), r.focusNextOption(e, t)
                                }
                            }
                        }, this.addOptionListeners = function(e, t, n) {
                            if (!r.isHtmlElement(n)) throw new Error("Option is not an HTML element");
                            n.addEventListener("blur", r.blur(t)), n.addEventListener("mousedown", r.choose), n.addEventListener("keydown", r.optionKeydownListener(e, n))
                        }, this.focusPreviousOption = function(e, t) {
                            var n = t.previousElementSibling;
                            n ? n.focus() : r.focusLastOption(e)
                        }, this.focusNextOption = function(e, t) {
                            var n = t.nextElementSibling;
                            n ? n.focus() : r.focusFirstOption(e)
                        }, this.getLanguagesCount = function() {
                            return Object.keys(r.consentTemplatesSettings.languages).length
                        }
                    }
                    return e.dependencies = ["consentTemplatesSettings", "LanguageDetector", "ChangeLanguageHandler"], e
                }(),
                Kt = function() {
                    function e(e) {
                        var t = this;
                        this.window = e, this.isSmallMobile = function() {
                            return t.isScreenNarrowerThanOrEqual(320)
                        }, this.isLargeMobile = function() {
                            return t.isScreenNarrowerThanOrEqual(480) && !t.isScreenNarrowerThanOrEqual(320)
                        }, this.isMobile = function() {
                            return t.isSmallMobile() || t.isLargeMobile()
                        }, this.isScreenNarrowerThanOrEqual = function(e) {
                            return t.window.matchMedia("only screen and (max-width: ".concat(e, "px)")).matches
                        }
                    }
                    return e.dependencies = ["Window"], e
                }(),
                $t = function() {
                    function e(e, t, n, r, i) {
                        var o = this;
                        this.consentTemplatesSettings = e, this.api = t, this.consentBarRenderer = n, this.cornerButtonRenderer = r, this.reminderCookie = i, this.handleReminder = function() {
                            if (o.consentTemplatesSettings.reminder_enabled) switch (o.consentTemplatesSettings.reminder_widget_variant) {
                                case "consent_form":
                                    return void o.handleConsentForm();
                                case "consent_form_with_blocked_content":
                                    return void o.handleConsentFormWithBlockedContent();
                                case "consent_bar":
                                    return void o.handleConsentBar();
                                case "corner_button":
                                    return void o.handleCornerButton()
                            }
                        }, this.handleConsentForm = function() {
                            o.api.openConsentForm()
                        }, this.handleConsentFormWithBlockedContent = function() {
                            o.api.openConsentForm()
                        }, this.handleConsentBar = function() {
                            o.wasReminderClosed() || o.consentBarRenderer.render()
                        }, this.handleCornerButton = function() {
                            o.wasReminderClosed() || o.cornerButtonRenderer.render()
                        }, this.wasReminderClosed = function() {
                            var e = o.reminderCookie.getParsedCookie();
                            return null !== e && e.status
                        }
                    }
                    return e.dependencies = ["consentTemplatesSettings", "PublicApiCommandExecutor", "ConsentBarRenderer", "CornerButtonRenderer", "ReminderCookie"], e
                }(),
                Gt = function() {
                    return Gt = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, Gt.apply(this, arguments)
                },
                Yt = function() {
                    function e(e, t, n, r) {
                        var i = this;
                        this.appId = e, this.cookieReader = t, this.cookieWriter = n, this.consentSettings = r, this.getParsedCookie = function() {
                            return i.cookieReader.read("ppms_privacy_".concat(i.appId))
                        }, this.setCookie = function(e) {
                            var t = i.getParsedCookie(),
                                n = Gt(Gt({}, null !== t ? t : {}), e);
                            i.cookieWriter.write(i.getCookieName(), n, i.getMaxAge())
                        }, this.getMaxAge = function() {
                            return i.consentSettings.cookie_expiration_period
                        }, this.getCookieName = function() {
                            return "ppms_privacy_".concat(i.appId)
                        }
                    }
                    return e.dependencies = ["appId", "CookieReader", "CookieWriter", "consentSettings"], e
                }(),
                Jt = function() {
                    return Jt = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, Jt.apply(this, arguments)
                },
                Qt = function() {
                    function e(e, t) {
                        var n = this;
                        this.consentCookie = e, this.variableUpdater = t, this.getConsents = function() {
                            var e, t, r = null !== (t = null === (e = n.consentCookie.getParsedCookie()) || void 0 === e ? void 0 : e.consents) && void 0 !== t ? t : {};
                            return delete r.intro, r
                        }, this.setConsents = function(e) {
                            var t = n.getConsents();
                            n.consentCookie.setCookie({
                                consents: Jt(Jt({}, t), e)
                            });
                            var r = n.getConsents();
                            n.variableUpdater.update(t, r)
                        }
                    }
                    return e.dependencies = ["ConsentCookie", "VariableUpdater"], e
                }(),
                Xt = function() {
                    function e(e, t) {
                        var n = this;
                        this.cookieStorage = e, this.domainResolver = t, this.read = function(e) {
                            var t = n.getCookiesOfName(e).map((function(e) {
                                return n.decode(e.value)
                            })).filter((function(e) {
                                return null !== e
                            })).filter((function(e) {
                                return n.isDomainScopeCookie(e)
                            })).filter((function(e) {
                                return n.domainMatches(e)
                            }));
                            return t.length > 0 ? t[0] : null
                        }, this.domainMatches = function(e) {
                            return e.domain.pattern === (n.domainResolver.resolve().isWildcard ? "*.".concat(n.domainResolver.resolve().domain) : n.domainResolver.resolve().domain)
                        }, this.isDomainScopeCookie = function(e) {
                            return "object" == typeof e && null !== e && "domain" in e
                        }, this.decode = function(e) {
                            try {
                                return JSON.parse(decodeURIComponent(e))
                            } catch (e) {
                                return null
                            }
                        }, this.getCookiesOfName = function(e) {
                            return n.cookieStorage.getCookieString().split("; ").map((function(e) {
                                var t = e.split("=");
                                return {
                                    key: t[0],
                                    value: t[1]
                                }
                            })).filter((function(t) {
                                return t.key === e
                            }))
                        }
                    }
                    return e.dependencies = ["CookieStorage", "DomainResolver"], e
                }(),
                Zt = function() {
                    return Zt = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, Zt.apply(this, arguments)
                },
                en = function() {
                    function e(e, t) {
                        var n = this;
                        this.cookieStorage = e, this.domainResolver = t, this.write = function(e, t, r) {
                            var i = n.domainResolver.resolve(),
                                o = Zt(Zt({}, t), {
                                    domain: {
                                        normalized: i.domain,
                                        isWildcard: i.isWildcard,
                                        pattern: i.isWildcard ? "*.".concat(i.domain) : i.domain
                                    }
                                });
                            n.cookieStorage.set(e, JSON.stringify(o), {
                                maxAge: r,
                                domain: i.isWildcard ? i.domain : void 0
                            })
                        }
                    }
                    return e.dependencies = ["CookieStorage", "DomainResolver"], e
                }(),
                tn = function() {
                    function e(e) {
                        var t = this;
                        this.consentCookie = e, this.getLanguage = function() {
                            var e, n;
                            return null !== (n = null === (e = t.consentCookie.getParsedCookie()) || void 0 === e ? void 0 : e.language) && void 0 !== n ? n : null
                        }, this.setLanguage = function(e) {
                            return t.consentCookie.setCookie({
                                language: e
                            })
                        }
                    }
                    return e.dependencies = ["ConsentCookie"], e
                }(),
                nn = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.appId = e, this.cookieReader = t, this.cookieWriter = n, this.getParsedCookie = function() {
                            return r.cookieReader.read(r.getCookieName())
                        }, this.setCookie = function(e) {
                            r.cookieWriter.write(r.getCookieName(), {
                                status: e
                            })
                        }, this.getCookieName = function() {
                            return "ppms_privacy_bar_".concat(r.appId)
                        }
                    }
                    return e.dependencies = ["appId", "CookieReader", "CookieWriter"], e
                }(),
                rn = function() {
                    function e(e) {
                        var t = this;
                        this.consentCookie = e, this.setStaleCheckpoint = function() {
                            t.consentCookie.setCookie({
                                staleCheckpoint: (new Date).toISOString()
                            })
                        }, this.getStaleCheckpoint = function() {
                            var e, n = null === (e = t.consentCookie.getParsedCookie()) || void 0 === e ? void 0 : e.staleCheckpoint;
                            return n ? new Date(n) : null
                        }
                    }
                    return e.dependencies = ["ConsentCookie"], e
                }(),
                on = function() {
                    function e(e) {
                        var t = this;
                        this.consentCookie = e, this.getVisitorId = function() {
                            var e, n;
                            return null !== (n = null === (e = t.consentCookie.getParsedCookie()) || void 0 === e ? void 0 : e.visitorId) && void 0 !== n ? n : null
                        }, this.setVisitorId = function(e) {
                            return t.consentCookie.setCookie({
                                visitorId: e
                            })
                        }
                    }
                    return e.dependencies = ["ConsentCookie"], e
                }(),
                an = function() {
                    function e(e, t) {
                        var n = this;
                        this.document = e, this.nonceToken = t, this.addStyleElement = function(e, t) {
                            if (n.document.getElementById(t)) throw new Error("Element #".concat(t, " already exists"));
                            var r = e.replace("<style>", "").replace("</style>", ""),
                                i = n.document.createElement("style");
                            i.id = t, i.innerHTML = r, n.nonceToken && (i.nonce = n.nonceToken), n.document.body.appendChild(i)
                        }, this.removeStyleElement = function(e) {
                            var t, r = n.document.getElementById(e);
                            r && (null === (t = r.parentNode) || void 0 === t || t.removeChild(r))
                        }
                    }
                    return e.dependencies = ["Document", "nonceToken"], e
                }(),
                sn = function() {
                    function e(e) {
                        var t = this;
                        this.consentTypesProvider = e, this.heldTags = [], this.preventTagFromBeingResolved = function(e) {
                            return "not_require_consent" !== e.consentType && -1 === t.consentTypesProvider.getAgreedTypes().indexOf(e.consentType) && (0 === t.heldTags.filter((function(t) {
                                return t.id === e.id
                            })).length && t.heldTags.push(e), !0)
                        }, this.getAll = function() {
                            return t.heldTags
                        }, this.removeAll = function() {
                            t.heldTags = []
                        }
                    }
                    return e.dependencies = ["ConsentTypesProvider"], e
                }(),
                cn = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.consentSettings = e, this.containerConfiguration = t, this.httpClient = n, this.download = function(e) {
                            r.httpClient.sendRequest({
                                url: r.getUrl(),
                                method: "GET",
                                json: !0
                            }, (function(t) {
                                return r.onSuccess(t, e)
                            }), r.onError)
                        }, this.onSuccess = function(e, t) {
                            if (!r.isValidTemplatesResponse(e)) throw new Error("Consent templates are invalid");
                            t(e)
                        }, this.isValidTemplatesResponse = function(e) {
                            if (!r.isObject(e)) return !1;
                            for (var t in e) {
                                var n = e[t];
                                if (!r.isObject(n)) return !1;
                                for (var i in n) {
                                    var o = n[i];
                                    if (!r.isObject(o)) return !1;
                                    if (!("html" in o) || !("styles" in o)) return !1
                                }
                            }
                            return !0
                        }, this.isObject = function(e) {
                            return "object" == typeof e && null !== e && !Array.isArray(e)
                        }, this.onError = function(e) {
                            if (e.target instanceof XMLHttpRequest) {
                                var t = e.target.status,
                                    n = e.target.statusText;
                                throw new pe("Cannot fetch templates: ".concat(n ? "".concat(t, " ").concat(n) : t))
                            }
                            throw new pe("Cannot fetch templates: unknown error")
                        }, this.getUrl = function() {
                            return r.consentSettings.user_mode_enabled ? r.containerConfiguration.consent_manager_privacy_widgets_url : r.containerConfiguration.consent_manager_privacy_templates_url
                        }
                    }
                    return e.dependencies = ["consentSettings", "containerConfiguration", "HttpClient"], e
                }(),
                un = function() {
                    function e(e) {
                        var t = this;
                        this.languageDetector = e, this.templates = void 0, this.getTemplate = function(e) {
                            if (void 0 === t.templates) throw new Error("No templates");
                            var n = t.languageDetector.getLanguage(),
                                r = t.templates[n];
                            if (void 0 === r) throw new Error("No templates for language ".concat(n));
                            var i = r[e];
                            if (void 0 === i) throw new Error("Template ".concat(e, " not found"));
                            return i
                        }, this.hasTemplate = function(e) {
                            try {
                                return t.getTemplate(e), !0
                            } catch (e) {
                                return !1
                            }
                        }, this.setTemplates = function(e) {
                            t.templates = e
                        }
                    }
                    return e.dependencies = ["LanguageDetector"], e
                }(),
                ln = function(e) {
                    var t = {};
                    for (var n in e) {
                        var r = e[n];
                        void 0 !== r && void 0 !== r.status && (t[n] = r.status)
                    }
                    return t
                },
                dn = function() {
                    function e(e, t) {
                        var n = this;
                        this.dataLayer = e, this.languageDetector = t, this.init = function(e) {
                            n.dataLayer.unshift(n.getValue({}, e))
                        }, this.update = function(e, t) {
                            n.dataLayer.push(n.getValue(e, t))
                        }, this.getValue = function(e, t) {
                            return {
                                Consents: {
                                    previous_state: ln(e),
                                    current_state: ln(t),
                                    consent_form_language: n.languageDetector.getLanguage()
                                },
                                "Piwik PRO Anonymization": function(e) {
                                    var n;
                                    return 1 !== (null === (n = t[e]) || void 0 === n ? void 0 : n.status)
                                }
                            }
                        }
                    }
                    return e.dependencies = ["dataLayer", "LanguageDetector"], e
                }(),
                pn = function() {
                    function e(e, t) {
                        var n = this;
                        this.privacyHandler = e, this.tagHolder = t, this.handlePrivacy = function() {
                            n.privacyHandler.handle()
                        }, this.preventTagFromBeingResolved = function(e) {
                            return n.tagHolder.preventTagFromBeingResolved(e)
                        }
                    }
                    return e.dependencies = ["PrivacyHandler", "TagHolder"], e
                }(),
                fn = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                    return e.concat(r || Array.prototype.slice.call(t))
                },
                hn = function() {
                    function e(e, t, n, r, i, o, a, s, c, u, l, d, p, f) {
                        var h = this;
                        this.consentSettings = e, this.api = t, this.templateDownloader = n, this.templateKeeper = r, this.privacyPolicyWidgetRenderer = i, this.dataSubjectRequestRenderer = o, this.publicApiCommandExecutor = a, this.consentTypesProvider = s, this.reminderHandler = c, this.consentStorage = u, this.visitorIdStorage = l, this.variableUpdater = d, this.staleConsentsDetector = p, this.consentForm = f, this.handle = function() {
                            h.variableUpdater.init(h.consentStorage.getConsents()), h.api.initialize(), h.templateDownloader.download(h.onDownloaded)
                        }, this.setVisitorId = function() {
                            null === h.visitorIdStorage.getVisitorId() && h.visitorIdStorage.setVisitorId(Pe())
                        }, this.onDownloaded = function(e) {
                            h.templateKeeper.setTemplates(e), h.privacyPolicyWidgetRenderer.render(), h.dataSubjectRequestRenderer.render(), h.consentSettings.user_mode_enabled || h.handleDefaultMode()
                        }, this.handleDefaultMode = function() {
                            h.setVisitorId(), h.publicApiCommandExecutor.getNewComplianceTypes((function(e) {
                                if (e.length > 0) h.handleNewTypes(e);
                                else {
                                    var t = h.staleConsentsDetector.isConsentStale(),
                                        n = h.consentTypesProvider.getUndecidedTypes(),
                                        r = n.length > 0,
                                        i = h.consentTypesProvider.getRejectedTypes(),
                                        o = i.length > 0;
                                    t && (r || o) ? h.consentForm.render(fn(fn([], n, !0), i, !0)) : r && h.reminderHandler.handleReminder()
                                }
                            }))
                        }, this.handleNewTypes = function(e) {
                            h.publicApiCommandExecutor.setInitialComplianceSettings(e, (function() {
                                h.consentForm.render(e), h.publicApiCommandExecutor.trackMainFormView()
                            }))
                        }
                    }
                    return e.dependencies = ["consentSettings", "PublicApiExposer", "TemplateDownloader", "TemplateKeeper", "PrivacyPolicyWidgetRenderer", "DataSubjectRequestRenderer", "PublicApiCommandExecutor", "ConsentTypesProvider", "ReminderHandler", "ConsentStorage", "VisitorIdStorage", "VariableUpdater", "StaleConsentsDetector", "ConsentForm"], e
                }(),
                gn = function(e) {
                    lt("Window", window), lt("Document", window.document), lt("tagTree", e.tagTree), lt("dataLayer", e.dataLayer), lt("appId", e.appId), lt("containerConfiguration", e.containerConfiguration), lt("consentSettings", e.consentSettings), lt("consentTemplatesSettings", e.consentTemplatesSettings), lt("CookieStorage", e.cookieStorage), lt("nonceToken", e.nonceToken), lt("HttpClient", e.httpClient), dt("ContainerAwareConsentManagerPlugin", pn), dt("ConsentStorage", Qt), dt("PrivacyHandler", hn), dt("PublicApiExposer", rt), dt("GetComplianceSettingsFactory", ge), dt("GetComplianceTypesFactory", me), dt("GetNewComplianceTypesFactory", be), dt("OpenConsentFormFactory", Ce), dt("SendDataRequestFactory", _e), dt("SetComplianceSettingsFactory", De), dt("SetInitialComplianceSettingsFactory", Ve), dt("TrackAgreeToAllClickFactory", Be), dt("TrackCloseButtonClickFactory", We), dt("TrackMainFormViewFactory", Ue), dt("TrackPrivacyPolicyLinkViewFactory", Ke), dt("TrackRejectAllClickFactory", Ge), dt("TrackReminderWidgetViewFactory", Je), dt("TrackSaveChoicesClickFactory", Xe), dt("ExtendedConsentFormRenderer", xt), dt("SimpleConsentFormRenderer", It), dt("TemplateKeeper", un), dt("LanguageDetector", Ht), dt("LanguagePicker", zt), dt("TagHolder", sn), dt("TemplateDownloader", cn), dt("ConsentTypesProvider", st), dt("CloseHandler", ft), dt("ExpandableHandler", At), dt("PrivacyPolicyWidgetRenderer", Nt), dt("ForcedPageViewConditionHandler", le), dt("DataSubjectRequestRenderer", Tt), dt("StyleElementManipulator", an), dt("ChangeLanguageHandler", Bt), dt("PublicApiCommandExecutor", nt), dt("ReminderHandler", $t), dt("ConsentBarRenderer", ht), dt("CornerButtonRenderer", mt), dt("TemplateWrapper", Mt), dt("MobileDetector", Kt), dt("SimpleConsentFormRecognizer", Ft), dt("ConsentForm", vt), dt("DomainResolver", pt), dt("ConsentCookie", Yt), dt("ReminderCookie", nn), dt("CookieReader", Xt), dt("CookieWriter", en), dt("SuccessNoteRenderer", Vt), dt("SuccessNoteRecognizer", jt), dt("VariableUpdater", dn), dt("LanguageStorage", tn), dt("VisitorIdStorage", on), dt("StaleCheckpointStorage", rn), dt("StaleConsentsDetector", ot), dt("Dequeuer", tt), dt("ConsentFormBlocker", it);
                    var t, n = (t = "ContainerAwareConsentManagerPlugin", ut.container[t]);
                    return n.handlePrivacy(), {
                        preventTagFromBeingResolved: function(e) {
                            return n.preventTagFromBeingResolved(e)
                        },
                        supports: function() {
                            return {
                                tagPrevention: !0
                            }
                        }
                    }
                },
                vn = function(e) {
                    return {
                        preventTagFromBeingResolved: function(t) {
                            return !!t.disableInDebugMode && "1" === e.cookieStorage.get("stg_debug")
                        },
                        supports: function() {
                            return {
                                tagPrevention: !0
                            }
                        }
                    }
                },
                mn = function(e) {
                    return function(t) {
                        return {
                            preventTagFromBeingResolved: function(t) {
                                return !!(t.respectVisitorsPrivacy && (e.navigator.doNotTrack && "1" === e.navigator.doNotTrack || e.doNotTrack && "1" === e.doNotTrack))
                            },
                            supports: function() {
                                return {
                                    tagPrevention: !0
                                }
                            }
                        }
                    }
                }(window),
                yn = function(e) {
                    return {
                        preventTagFromBeingResolved: function(t) {
                            if (!t.respectVisitorsPrivacy) return !1;
                            var n = e.cookieStorage.get("_stg_optout"),
                                r = e.cookieStorage.get("_stg_opt_out_simulate");
                            return "true" === n || "true" === r
                        },
                        supports: function() {
                            return {
                                tagPrevention: !0
                            }
                        }
                    }
                },
                bn = function() {
                    function e(e, t, n, r, i, o, a, s, c) {
                        var u = this;
                        this.dataLayer = e, this.dataLayerPushOverrider = t, this.builtinEventsEmitter = n, this.containerDebugger = r, this.pluginsRegistry = i, this.globalObject = o, this.variablesDatabase = a, this.lastInteractionState = s, this.variablesCookiesHandler = c, this.init = function() {
                            u.variablesDatabase.start(), u.variablesDatabase.createVariablesIdNameMap(), u.variablesCookiesHandler.createCookieAllowanceMap(), u.exposeVariableAccess(), u.lastInteractionState.createCookieSnapshot(), u.containerDebugger.start(), u.pluginsRegistry.register(mn), u.pluginsRegistry.register(yn), u.pluginsRegistry.register(vn), u.isConsentManagerEnabled() ? u.pluginsRegistry.register(gn) : u.pushAnonymizationVariable(), u.builtinEventsEmitter.start(), u.dataLayerPushOverrider.override()
                        }, this.isConsentManagerEnabled = function() {
                            return u.globalObject.consentSettings.consent_enabled
                        }, this.exposeVariableAccess = function() {
                            Object.defineProperty(u.globalObject, "getVariableValue", {
                                value: function(e, t) {
                                    return u.variablesDatabase.getByName(e, t)
                                },
                                enumerable: !0
                            })
                        }, this.pushAnonymizationVariable = function() {
                            u.dataLayer.unshift({
                                "Piwik PRO Anonymization": function() {
                                    return !1
                                }
                            })
                        }
                    }
                    return e.dependencies = ["dataLayer", "DataLayerPushOverrider", "BuiltinEventsEmitter", "Debugger", "PluginsRegistry", "globalObject", "VariablesDatabase", "LastInteractionState", "VariablesCookiesHandler"], e
                }(),
                wn = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                    return e.concat(r || Array.prototype.slice.call(t))
                },
                Cn = function() {
                    function e(e, t) {
                        var n = this;
                        this.window = e, this.globalObject = t, this.getTagTree = function() {
                            return void 0 !== n.window.sevenTagSync ? wn(wn([], n.window.sevenTagSync.tagTree, !0), n.globalObject.tagTree, !0) : n.globalObject.tagTree
                        }
                    }
                    return e.dependencies = ["Window", "globalObject"], e
                }(),
                Sn = n(808),
                _n = n.n(Sn),
                En = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.variableReplacer = e, this.htmlDocument = t, this.nonceTokenProvider = n, this.render = function(e, t) {
                            var n = r.getCodeWithReplacedVariables(e, t);
                            if (e.documentWrite) _n()(r.htmlDocument.body, n);
                            else {
                                var i = r.htmlDocument.createElement("div");
                                i.innerHTML = n, Array.prototype.slice.call(i.childNodes).forEach(r.renderNode)
                            }
                        }, this.renderNode = function(e) {
                            r.isElementNode(e) ? r.isScriptElement(e) ? r.renderScriptElement(e) : r.isStyleElement(e) ? r.renderStyleElement(e) : r.htmlDocument.body.appendChild(r.rewriteNestedScriptElements(e)) : r.renderNotElementNode(e)
                        }, this.rewriteNestedScriptElements = function(e) {
                            var t = e.getElementsByTagName("script");
                            return Array.prototype.slice.call(t).forEach((function(e) {
                                e.parentElement && e.parentElement.replaceChild(r.rewriteScriptElement(e), e)
                            })), e
                        }, this.renderNotElementNode = function(e) {
                            r.htmlDocument.body.appendChild(e)
                        }, this.renderScriptElement = function(e) {
                            r.htmlDocument.body.appendChild(r.rewriteScriptElement(e))
                        }, this.renderStyleElement = function(e) {
                            var t = r.nonceTokenProvider.getToken();
                            null !== t && e.setAttribute("nonce", t), r.htmlDocument.body.appendChild(e)
                        }, this.getCodeWithReplacedVariables = function(e, t) {
                            return r.variableReplacer.replaceInHtml(e.code, t)
                        }, this.isScriptElement = function(e) {
                            return "script" === e.tagName.toLowerCase()
                        }, this.isStyleElement = function(e) {
                            return "style" === e.tagName.toLowerCase()
                        }, this.rewriteScriptElement = function(e) {
                            var t = r.htmlDocument.createElement("script"),
                                n = e.getAttribute("id"),
                                i = e.getAttribute("src");
                            null !== n && (t.id = n), null !== i && (t.src = i), t.type = "text/javascript", t.defer = !1, t.text = e.innerHTML;
                            var o = r.nonceTokenProvider.getToken();
                            return o && (t.nonce = o), t
                        }, this.isElementNode = function(e) {
                            return 1 === e.nodeType
                        }
                    }
                    return e.dependencies = ["VariableReplacer", "Document", "NonceTokenProvider"], e
                }(),
                Tn = [5, 10, 30, 60],
                kn = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.window = e, this.audienceRequest = t, this.dataLayerEventConsumer = n, this.currentIntervalIndex = 0, this.init = function(e) {
                            var t;
                            r.window._paq = null !== (t = r.window._paq) && void 0 !== t ? t : [], r.onUpdate = e, r.dataLayerEventConsumer.addListener((function(e) {
                                r.isConsentDecisionMadeEvent(e) && setTimeout((function() {
                                    r.pushJstcCallback()
                                }), 1e3)
                            })), r.window._paq.push([r.onJstcReady])
                        }, this.onJstcReady = function() {
                            r.pushJstcCallback(), r.enqueueNextCall()
                        }, this.isConsentDecisionMadeEvent = function(e) {
                            return "object" == typeof e && null !== e && "event" in e && "stg.consentDecisionMade" === e.event
                        }, this.enqueueNextCall = function() {
                            var e = 1e3 * Tn[r.currentIntervalIndex];
                            setTimeout((function() {
                                r.pushJstcCallback(), r.currentIntervalIndex < Tn.length - 1 && (r.currentIntervalIndex += 1), r.enqueueNextCall()
                            }), e)
                        }, this.pushJstcCallback = function() {
                            var e, t, n;
                            r.assertOnUpdate(r.onUpdate), r.window._paq = null !== (e = r.window._paq) && void 0 !== e ? e : [], r.window._paq.push([(t = r.audienceRequest.send, n = r.onUpdate, function() {
                                var e = this.getVisitorId();
                                "" !== e && t(e, n, (function(e) {
                                    throw e
                                }))
                            })])
                        }, this.assertOnUpdate = function(e) {
                            if (void 0 === e) throw new Error("AudienceMembershipProvider update function was not set. Was init method called?");
                            return e
                        }
                    }
                    return e.dependencies = ["Window", "AudiencesRequest", "DataLayerEventConsumer"], e
                }(),
                An = function(e, t) {
                    var n = e.substring(1);
                    if (!n) return "";
                    for (var r = 0, i = n.split("&"); r < i.length; r++) {
                        var o = i[r].split("="),
                            a = o[0],
                            s = o[1];
                        if (a === t && void 0 !== s) return s
                    }
                    return ""
                },
                On = [{
                    name: "utm_campaign",
                    cookieName: "stg_utm_campaign"
                }, {
                    name: "pk_campaign",
                    cookieName: "stg_pk_campaign"
                }],
                Rn = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.window = e, this.cookieStorage = t, this.variablesCookiesHandler = n, this.setCampaignCookie = function() {
                            if (!r.anyCampaignCookieExists() && r.shouldCreateCampaignCookie())
                                for (var e = 0, t = On; e < t.length; e++) {
                                    var n = t[e],
                                        i = r.getCampaignFromQueryString(n.name);
                                    if (null !== i) return void r.cookieStorage.set(n.cookieName, i)
                                }
                        }, this.shouldCreateCampaignCookie = function() {
                            return r.variablesCookiesHandler.shouldCreateCookie("stg_utm_campaign") && r.variablesCookiesHandler.shouldCreateCookie("stg_pk_campaign")
                        }, this.anyCampaignCookieExists = function() {
                            return On.map((function(e) {
                                return e.cookieName
                            })).map((function(e) {
                                return r.cookieStorage.get(e)
                            })).filter((function(e) {
                                return null !== e
                            })).length > 0
                        }, this.getCampaignFromQueryString = function(e) {
                            var t = An(r.window.location.search, e);
                            return "" === t ? null : t
                        }
                    }
                    return e.dependencies = ["Window", "CookieStorage", "VariablesCookiesHandler"], e
                }(),
                Pn = function() {
                    return Pn = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, Pn.apply(this, arguments)
                },
                Ln = function() {
                    function e(e, t) {
                        var n = this;
                        this.variablesDatabase = e, this.conditionsResolverCollection = t, this.resolve = function(e, t) {
                            return Pn(Pn({}, e), {
                                resolved: n.isFulfilled(e, t)
                            })
                        }, this.isFulfilled = function(e, t) {
                            for (var r, i, o = null !== (r = n.variablesDatabase.getByName(e.variable, t)) && void 0 !== r ? r : n.variablesDatabase.getById(e.variable, t), a = n.variablesDatabase.getByName("Event", t), s = 0, c = n.conditionsResolverCollection.getResolvers(); s < c.length; s++) {
                                var u = c[s];
                                if (u.accepts(e, a)) {
                                    i = u;
                                    break
                                }
                            }
                            return void 0 !== i && i.isFulfilled(e, o)
                        }
                    }
                    return e.dependencies = ["VariablesDatabase", "ConditionResolverCollection"], e
                }(),
                xn = function() {
                    function e(e, t, n, r, i, o, a, s, c, u, l, d, p, f, h, g, v, m, y, b, w, C, S, _, E) {
                        var T = this;
                        this.resolvers = [], this.getResolvers = function() {
                            return T.resolvers
                        }, this.resolvers.push(e, t, n, r, i, o, a, s, c, u, l, d, p, f, h, g, v, m, y, b, w, C, S, _, E)
                    }
                    return e.dependencies = ["ContainsConditionActionResolver", "DoesNotContainConditionActionResolver", "EqualsConditionActionResolver", "DoesNotEqualConditionActionResolver", "IsTrueConditionActionResolver", "IsFalseConditionActionResolver", "IsSetConditionActionResolver", "IsNotSetConditionActionResolver", "IsEmptyConditionActionResolver", "IsNotEmptyConditionActionResolver", "StartsWithConditionActionResolver", "EndsWithConditionActionResolver", "DoesNotStartWithConditionActionResolver", "DoesNotEndWithConditionActionResolver", "RegexpConditionActionResolver", "DoesNotRegexpConditionActionResolver", "MatchesClickTriggerConditionsResolver", "PageLeaveTriggerConditionsResolver", "PageViewTriggerConditionsResolver", "PageScrollTriggerConditionsResolver", "TimerTriggerConditionsResolver", "ElementPresenceTriggerResolver", "IsAChildOfClickTriggerConditionsResolver", "AudienceMembershipConditionsResolver", "AudiencesFetchedConditionsResolver"], e
                }(),
                Dn = function() {
                    this.isFulfilled = function(e, t) {
                        if (!Array.isArray(t)) return !1;
                        var n = -1 !== t.indexOf(e.value);
                        return "visitor_belongs_to" === e.action ? n : "visitor_not_belongs_to" === e.action && !n
                    }, this.accepts = function(e) {
                        var t = "CDP Audience" === e.variable,
                            n = "visitor_belongs_to" === e.action || "visitor_not_belongs_to" === e.action;
                        return t && n
                    }
                },
                Nn = function() {
                    this.isFulfilled = function(e) {
                        return "each_time" === e.action || "once_per_page_view" === e.action || "once_per_session" === e.action
                    }, this.accepts = function(e, t) {
                        var n = "stg.audiencesFetched" === t,
                            r = "Event" === e.variable,
                            i = "once_per_session" === e.action || "once_per_page_view" === e.action || "each_time" === e.action;
                        return n && r && i
                    }
                },
                Fn = function() {
                    this.isFulfilled = function(e, t) {
                        return ("string" == typeof t || "number" == typeof t || "bigint" == typeof t || "boolean" == typeof t) && -1 !== String(t).indexOf(e.value)
                    }, this.accepts = function(e) {
                        return "contains" === e.action
                    }
                },
                In = function() {
                    this.isFulfilled = function(e, t) {
                        return ("string" == typeof t || "number" == typeof t || "bigint" == typeof t || "boolean" == typeof t) && -1 === String(t).indexOf(e.value)
                    }, this.accepts = function(e) {
                        return "does_not_contain" === e.action
                    }
                },
                jn = function() {
                    this.isFulfilled = function(e, t) {
                        if ("string" != typeof t && "number" != typeof t && "bigint" != typeof t && "boolean" != typeof t) return !1;
                        var n = String(t);
                        return -1 === n.indexOf(e.value, n.length - e.value.length)
                    }, this.accepts = function(e) {
                        return "does_not_end_with" === e.action
                    }
                },
                Vn = function() {
                    this.isFulfilled = function(e, t) {
                        return ("string" == typeof t || "number" == typeof t || "bigint" == typeof t || "boolean" == typeof t) && e.value !== String(t)
                    }, this.accepts = function(e) {
                        return "does_not_equal" === e.action
                    }
                },
                Mn = function() {
                    this.isFulfilled = function(e, t) {
                        if ("string" != typeof t && "number" != typeof t && "bigint" != typeof t && "boolean" != typeof t) return !1;
                        try {
                            return !new RegExp(e.value).test(String(t))
                        } catch (e) {
                            return !1
                        }
                    }, this.accepts = function(e) {
                        return "does_not_regexp" === e.action
                    }
                },
                Bn = function() {
                    this.isFulfilled = function(e, t) {
                        return ("string" == typeof t || "number" == typeof t || "bigint" == typeof t || "boolean" == typeof t) && 0 !== String(t).lastIndexOf(e.value, 0)
                    }, this.accepts = function(e) {
                        return "does_not_start_with" === e.action
                    }
                },
                Hn = function() {
                    this.accepts = function(e) {
                        var t = "Found Elements" === e.variable,
                            n = "once_per_session" === e.action || "once_per_page_view" === e.action || "each_time" === e.action;
                        return t && n
                    }, this.isFulfilled = function(e, t) {
                        if ("string" != typeof t) return !1;
                        var n = t === e.value;
                        return ("each_time" === e.action || "once_per_page_view" === e.action || "once_per_session" === e.action) && n
                    }
                },
                Wn = function() {
                    this.isFulfilled = function(e, t) {
                        if ("string" != typeof t && "number" != typeof t && "bigint" != typeof t && "boolean" != typeof t) return !1;
                        var n = String(t);
                        return -1 !== n.indexOf(e.value, n.length - e.value.length)
                    }, this.accepts = function(e) {
                        return "ends_with" === e.action
                    }
                },
                qn = function() {
                    this.isFulfilled = function(e, t) {
                        return ("string" == typeof t || "number" == typeof t || "bigint" == typeof t || "boolean" == typeof t) && e.value === String(t)
                    }, this.accepts = function(e) {
                        return "equals" === e.action
                    }
                },
                Un = function(e) {
                    return function(t) {
                        var n;
                        try {
                            n = e.querySelectorAll(t)
                        } catch (e) {
                            return null
                        }
                        return n
                    }
                },
                zn = function(e) {
                    return function(t) {
                        var n, r = [];
                        try {
                            n = e.evaluate(t, e, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)
                        } catch (e) {
                            return null
                        }
                        for (var i = 0; i < n.snapshotLength; i += 1) {
                            var o = n.snapshotItem(i);
                            null !== o && r.push(o)
                        }
                        return r
                    }
                },
                Kn = function() {
                    function e(e) {
                        var t = this;
                        this.document = e, this.isFulfilled = function(e, n) {
                            if ("object" != typeof n || null === n) return !1;
                            var r = e.options && "selector_type" in e.options ? e.options.selector_type : void 0;
                            if (void 0 === r) return !1;
                            var i = e.value,
                                o = t.getElementsBySelector(i, r);
                            if (null === o) return !1;
                            var a = t.hasAParentMatchingSelector(o, n);
                            return "is_a_child_of" === e.action ? a : "is_not_a_child_of" === e.action && !a
                        }, this.accepts = function(e) {
                            var t = "Click Element" === e.variable,
                                n = "is_a_child_of" === e.action || "is_not_a_child_of" === e.action;
                            return t && n
                        }, this.getElementsBySelector = function(e, n) {
                            return "css" === n ? Un(t.document)(e) : zn(t.document)(e)
                        }, this.isElementMatchingSelector = function(e, t) {
                            for (var n = 0, r = Array.prototype.slice.call(e); n < r.length; n++)
                                if (r[n] === t) return !0;
                            return !1
                        }, this.hasAParentMatchingSelector = function(e, n) {
                            if (!t.isNode(n)) return !1;
                            for (var r = n, i = 0; i < 100; i += 1)
                                if (r) {
                                    if (t.isElementMatchingSelector(e, r)) return !0;
                                    r = r.parentElement
                                }
                            return !1
                        }, this.isNode = function(e) {
                            return e instanceof HTMLElement
                        }
                    }
                    return e.dependencies = ["Document"], e
                }(),
                $n = function() {
                    this.isFulfilled = function(e, t) {
                        return null == t || (Array.isArray(t) ? 0 === t.length : "object" == typeof t ? 0 === Object.keys(t).length : "string" == typeof t && 0 === t.length)
                    }, this.accepts = function(e) {
                        return "is_empty" === e.action
                    }
                },
                Gn = function() {
                    this.isFulfilled = function(e, t) {
                        return !1 === t
                    }, this.accepts = function(e) {
                        return "is_false" === e.action
                    }
                },
                Yn = function() {
                    this.isFulfilled = function(e, t) {
                        return null != t && (Array.isArray(t) ? t.length > 0 : "object" == typeof t ? Object.keys(t).length > 0 : "string" != typeof t || t.length > 0)
                    }, this.accepts = function(e) {
                        return "is_not_empty" === e.action
                    }
                },
                Jn = function() {
                    this.isFulfilled = function(e, t) {
                        return null == t
                    }, this.accepts = function(e) {
                        return "is_not_set" === e.action
                    }
                },
                Qn = function() {
                    this.isFulfilled = function(e, t) {
                        return null != t
                    }, this.accepts = function(e) {
                        return "is_set" === e.action
                    }
                },
                Xn = function() {
                    this.isFulfilled = function(e, t) {
                        return !0 === t
                    }, this.accepts = function(e) {
                        return "is_true" === e.action
                    }
                },
                Zn = function() {
                    function e(e) {
                        var t = this;
                        this.document = e, this.isFulfilled = function(e, n) {
                            if ("object" != typeof n || null === n) return !1;
                            var r = e.options && "selector_type" in e.options ? e.options.selector_type : void 0;
                            if (void 0 === r) return !1;
                            var i = e.value,
                                o = t.getElementsBySelector(i, r);
                            if (null === o) return !1;
                            var a = t.isElementMatchingSelector(o, n);
                            return "matches" === e.action ? a : "does_not_match" === e.action && !a
                        }, this.accepts = function(e) {
                            var t = "Click Element" === e.variable,
                                n = "matches" === e.action || "does_not_match" === e.action;
                            return t && n
                        }, this.getElementsBySelector = function(e, n) {
                            return "css" === n ? Un(t.document)(e) : zn(t.document)(e)
                        }, this.isElementMatchingSelector = function(e, t) {
                            for (var n = 0, r = Array.prototype.slice.call(e); n < r.length; n++)
                                if (r[n] === t) return !0;
                            return !1
                        }
                    }
                    return e.dependencies = ["Document"], e
                }(),
                er = function() {
                    this.isFulfilled = function(e, t) {
                        return !("any" !== e.value && e.value !== t || "each_time" !== e.action && "once_per_page_view" !== e.action && "once_per_session" !== e.action)
                    }, this.accepts = function(e) {
                        var t = "Leave content" === e.variable,
                            n = "once_per_session" === e.action || "once_per_page_view" === e.action || "each_time" === e.action;
                        return t && n
                    }
                },
                tr = function() {
                    var e = this;
                    this.scrollConditionsFired = {}, this.isFulfilled = function(t, n) {
                        if (!e.isPageScrollVariable(n)) return !1;
                        if ("string" != typeof t.relation) return !1;
                        var r = e.hasScrolledTo(t, n);
                        return "each_time" === t.action ? r ? !e.scrollConditionsFired[t.relation] && (e.scrollConditionsFired[t.relation] = !0, !0) : (e.scrollConditionsFired[t.relation] = !1, !1) : !("once_per_page_view" !== t.action || !r) || !("once_per_session" !== t.action || !r)
                    }, this.accepts = function(e, t) {
                        var n = "stg.scroll" === t,
                            r = "Page Scroll" === e.variable,
                            i = "once_per_session" === e.action || "once_per_page_view" === e.action || "each_time" === e.action;
                        return n && r && i
                    }, this.hasScrolledTo = function(e, t) {
                        return e.options && "unit" in e.options && "percentage" !== e.options.unit ? t.px >= parseInt(e.value, 10) : t["%"] >= parseInt(e.value, 10)
                    }, this.isPageScrollVariable = function(e) {
                        return "object" == typeof e && null !== e && "px" in e && "%" in e
                    }
                },
                nr = function() {
                    function e(e) {
                        var t = this;
                        this.lastInteractionState = e, this.isFulfilled = function(e) {
                            var n = parseInt(e.value, 10),
                                r = t.lastInteractionState.isFirstVisit(n);
                            return "is_first_visit" === e.action ? r : "is_not_first_visit" === e.action && !r
                        }, this.accepts = function(e) {
                            var t = "View within session" === e.variable,
                                n = "is_first_visit" === e.action || "is_not_first_visit" === e.action;
                            return t && n
                        }
                    }
                    return e.dependencies = ["LastInteractionState"], e
                }(),
                rr = function() {
                    this.isFulfilled = function(e, t) {
                        if ("string" != typeof t && "number" != typeof t && "bigint" != typeof t && "boolean" != typeof t) return !1;
                        try {
                            return new RegExp(e.value).test(String(t))
                        } catch (e) {
                            return !1
                        }
                    }, this.accepts = function(e) {
                        return "regexp" === e.action
                    }
                },
                ir = function() {
                    this.isFulfilled = function(e, t) {
                        return ("string" == typeof t || "number" == typeof t || "bigint" == typeof t || "boolean" == typeof t) && 0 === String(t).lastIndexOf(e.value, 0)
                    }, this.accepts = function(e) {
                        return "starts_with" === e.action
                    }
                },
                or = function() {
                    this.isFulfilled = function(e, t) {
                        if ("string" != typeof t) return !1;
                        var n = t.split(" ")[0];
                        return parseInt(n, 10) === parseInt(e.value, 10)
                    }, this.accepts = function(e) {
                        var t = "Time on website" === e.variable,
                            n = "once_per_session" === e.action;
                        return t && n
                    }
                },
                ar = function() {
                    function e(e) {
                        var t = this;
                        this.document = e, this.token = null, this.getToken = function() {
                            if (null !== t.token) return t.token;
                            for (var e = t.document.getElementsByTagName("script"), n = 0, r = Array.prototype.slice.call(e); n < r.length; n++) {
                                var i = r[n],
                                    o = t.retrieveNonceValue(i);
                                if (null !== o) return t.token = o, t.token
                            }
                            return null
                        }, this.retrieveNonceValue = function(e) {
                            var t = e.nonce,
                                n = e.getAttribute("nonce");
                            return "string" == typeof t && "" !== t ? t : "string" == typeof n && "" !== n ? n : null
                        }
                    }
                    return e.dependencies = ["Document"], e
                }(),
                sr = function() {
                    function e(e, t, n, r) {
                        var i = this;
                        this.document = e, this.dataLayer = t, this.globalObject = n, this.formSubmitCallbackFactory = r, this.submitter = null, this.start = function() {
                            i.document.addEventListener("click", i.clickListener), i.document.addEventListener("submit", i.submitListener)
                        }, this.clickListener = function(e) {
                            var t = e.target;
                            i.isSubmitElement(t) && (i.submitter = {
                                element: t,
                                x: e.pageX - t.offsetLeft,
                                y: e.pageY - t.offsetTop
                            })
                        }, this.submitListener = function(e) {
                            if (!i.hasFormTarget(e)) throw new Error("Target is not a form element");
                            var t = !e.defaultPrevented;
                            i.dataLayer.push({
                                event: "stg.formSubmit",
                                simulateDefault: t,
                                element: e.target,
                                elementId: e.target.id,
                                elementClasses: e.target.className,
                                elementUrl: e.target.action,
                                elementName: e.target.getAttribute("name"),
                                eventCallbackTimeout: i.globalObject.configuration.delay,
                                eventCallback: i.formSubmitCallbackFactory.create(e, t, i.submitter)
                            }), i.submitter = null
                        }, this.hasFormTarget = function(e) {
                            return e.target instanceof HTMLFormElement
                        }, this.isSubmitElement = function(e) {
                            var t = e.tagName.toLowerCase(),
                                n = e.getAttribute("type");
                            return "submit" === n || "input" === t && "image" === n
                        }
                    }
                    return e.dependencies = ["Document", "dataLayer", "globalObject", "FormSubmitCallbackFactory"], e
                }();
            ! function(e) {
                e[e.function = 0] = "function", e[e.array = 1] = "array", e[e.object = 2] = "object", e[e.unsupported = 3] = "unsupported"
            }(gt || (gt = {}));
            var cr, ur = function() {
                    function e(e, t, n, r) {
                        var i = this;
                        this.functionEventConsumer = e, this.arrayEventConsumer = t, this.objectEventConsumer = n, this.variablesDatabase = r, this.eventId = 0, this.listeners = [], this.consume = function(e) {
                            switch (i.eventId += 1, i.variablesDatabase.prepareNewEventScope(i.eventId), i.getEventType(e)) {
                                case gt.function:
                                    i.functionEventConsumer.consume(e, i.eventId);
                                    break;
                                case gt.array:
                                    i.arrayEventConsumer.consume(e, i.eventId);
                                    break;
                                case gt.object:
                                    i.objectEventConsumer.consume(e, i.eventId);
                                    break;
                                default:
                                    throw new Error("Unsupported event")
                            }
                            i.listeners.forEach((function(t) {
                                t(e)
                            }))
                        }, this.addListener = function(e) {
                            i.listeners.push(e)
                        }, this.getEventType = function(e) {
                            return "function" == typeof e ? gt.function : Array.isArray(e) ? gt.array : i.isObjectEvent(e) ? gt.object : gt.unsupported
                        }, this.isObjectEvent = function(e) {
                            return "object" == typeof e && null !== e
                        }
                    }
                    return e.dependencies = ["FunctionEventConsumer", "ArrayEventConsumer", "ObjectEventConsumer", "VariablesDatabase"], e
                }(),
                lr = function(e, t) {
                    for (var n = e, r = function(e, t, n) {
                            if (n || 2 === arguments.length)
                                for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                            return e.concat(r || Array.prototype.slice.call(t))
                        }([], t, !0); r.length > 0;) {
                        var i = r.shift();
                        if (void 0 === n[i]) return;
                        n = n[i]
                    }
                    return n
                },
                dr = function() {
                    function e(e) {
                        var t = this;
                        this.variablesDatabase = e, this.consume = function(e, n) {
                            var r = e[0],
                                i = e.slice(1);
                            if ("string" != typeof r || "" === r) throw new Error("Invalid property path - must be a non-empty string");
                            var o = r.split(".");
                            t.callFunctionFromVariables(o, i, n)
                        }, this.callFunctionFromVariables = function(e, n, r) {
                            var i = t.variablesDatabase.getAll(r),
                                o = lr(i, e);
                            "function" == typeof o && o.call.apply(o, function(e, t, n) {
                                if (n || 2 === arguments.length)
                                    for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                                return e.concat(r || Array.prototype.slice.call(t))
                            }([void 0], n, !1))
                        }
                    }
                    return e.dependencies = ["VariablesDatabase"], e
                }(),
                pr = function() {
                    function e(e) {
                        var t = this;
                        this.variablesDatabase = e, this.consume = function(e, n) {
                            var r = t.variablesDatabase.getAll(n);
                            e.apply(r)
                        }
                    }
                    return e.dependencies = ["VariablesDatabase"], e
                }(),
                fr = function() {
                    function e(e, t, n, r, i, o, a, s, c) {
                        var u = this;
                        this.tagTreeResolver = e, this.tagRenderer = t, this.containerDebugger = n, this.tagTree = r, this.eventVariableSetter = i, this.lastInteractionState = o, this.campaignCookieSetter = a, this.returningVisitor = s, this.trafficSourceCookieSetter = c, this.consume = function(e, t) {
                            u.campaignCookieSetter.setCampaignCookie(), u.trafficSourceCookieSetter.setTrafficSourceCookie();
                            var n = "tagTree" in e ? e.tagTree : u.tagTree;
                            u.eventVariableSetter.setFromDataLayerEvent(e, t);
                            var r = u.tagTreeResolver.resolve(n, t),
                                i = r.filter((function(e) {
                                    return e.resolved
                                })),
                                o = i.length > 0;
                            i.forEach((function(e) {
                                u.tagRenderer.render(e, t)
                            })), u.containerDebugger.notify(e, r, t), u.handleEventCallback(e, o), !0 !== e.skipExtendSession && "stg.start" !== e.event && "stg.pageView.sync" !== e.event && (u.lastInteractionState.commitInteraction(), u.returningVisitor.setReturningVisitorCookie(), u.trafficSourceCookieSetter.extendTrafficSourceCookie())
                        }, this.handleEventCallback = function(e, t) {
                            if (void 0 !== e.eventCallback) {
                                if ("function" != typeof e.eventCallback) throw new Error("Event callback must be a function");
                                var n = u.containerDebugger.isPreventPageReloadEnabled();
                                e.eventCallback(t, n)
                            }
                        }
                    }
                    return e.dependencies = ["TagTreeResolver", "TagRenderer", "Debugger", "tagTree", "EventVariableSetter", "LastInteractionState", "CampaignCookieSetter", "ReturningVisitor", "TrafficSourceCookieSetter"], e
                }(),
                hr = function() {
                    function e(e, t) {
                        var n = this;
                        this.dataLayerEventConsumer = e, this.dataLayer = t, this.override = function() {
                            var e = function(e) {
                                    for (var t = 0, r = e; t < r.length; t++) {
                                        var i = r[t];
                                        n.dataLayerEventConsumer.consume(i)
                                    }
                                },
                                t = n.dataLayer.push;
                            n.dataLayer.push = function() {
                                for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                                for (var o = t.apply(n.dataLayer, r); n.dataLayer.length > 300;) n.dataLayer.shift();
                                return e(r), o
                            }, n.processEventsPushedBeforeOverride()
                        }, this.processEventsPushedBeforeOverride = function() {
                            for (var e = n.dataLayer.filter((function(e) {
                                    return !n.isObject(e) || "stg.pageView.sync" !== e.event
                                })); e.length > 0;) {
                                var t = e.shift();
                                n.dataLayerEventConsumer.consume(t)
                            }
                        }, this.isObject = function(e) {
                            return "object" == typeof e && null !== e
                        }
                    }
                    return e.dependencies = ["DataLayerEventConsumer", "dataLayer"], e
                }(),
                gr = function() {
                    function e(e, t) {
                        var n = this;
                        this.globalObject = e, this.document = t, this.create = function(e, t, r) {
                            return function(i, o) {
                                o ? e.preventDefault() : t && i && (e.preventDefault(), null !== r && (n.removeSubmitterFields(), n.addSubmitterFields(e.target, r)), n.submitFormWithDelay(e.target))
                            }
                        }, this.submitFormWithDelay = function(e) {
                            setTimeout((function() {
                                Object.getPrototypeOf(e).submit.apply(e)
                            }), n.globalObject.configuration.delay)
                        }, this.removeSubmitterFields = function() {
                            n.document.querySelectorAll("input[data-pp-synthetic-input]").forEach((function(e) {
                                var t;
                                null === (t = e.parentElement) || void 0 === t || t.removeChild(e)
                            }))
                        }, this.addSubmitterFieldsForImage = function(e, t) {
                            var r = t.element.getAttribute("name"),
                                i = n.document.createElement("input");
                            i.type = "hidden", i.name = r ? "".concat(r, ".x") : "x", i.value = t.x.toString(), i.setAttribute("data-pp-synthetic-input", "");
                            var o = n.document.createElement("input");
                            o.type = "hidden", o.name = r ? "".concat(r, ".y") : "y", o.value = t.y.toString(), o.setAttribute("data-pp-synthetic-input", ""), e.appendChild(i), e.appendChild(o)
                        }, this.addSubmitterFieldsForButton = function(e, t) {
                            var r, i, o = t.element.getAttribute("name");
                            if (null !== o) {
                                var a = n.document.createElement("input");
                                a.type = "hidden", a.id = null !== (r = t.element.getAttribute("id")) && void 0 !== r ? r : "", a.name = o, a.value = null !== (i = t.element.getAttribute("value")) && void 0 !== i ? i : "Submit", a.setAttribute("data-pp-synthetic-input", ""), e.appendChild(a)
                            }
                        }, this.addSubmitterFields = function(e, t) {
                            var r;
                            switch (null === (r = t.element.getAttribute("type")) || void 0 === r ? void 0 : r.toLowerCase()) {
                                case "image":
                                    n.addSubmitterFieldsForImage(e, t);
                                    break;
                                case "submit":
                                    n.addSubmitterFieldsForButton(e, t)
                            }
                        }
                    }
                    return e.dependencies = ["globalObject", "Document"], e
                }(),
                vr = function() {
                    return vr = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, vr.apply(this, arguments)
                },
                mr = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                    return e.concat(r || Array.prototype.slice.call(t))
                },
                yr = function() {
                    function e(e, t, n, r, i) {
                        var o = this;
                        this.globalObject = e, this.window = t, this.variablesDatabase = n, this.cookieStorage = r, this.nonceTokenProvider = i, this.stack = [], this.listeners = [], this.simulateOptOut = !1, this.start = function() {
                            o.handleSyncEvent(), o.addFieldsToGlobalObject()
                        }, this.isPreventPageReloadEnabled = function() {
                            var e;
                            return Boolean(null === (e = o.globalObject.debugger) || void 0 === e ? void 0 : e.breakpoints.enabled)
                        }, this.notify = function(e, t, n) {
                            var r = o.variablesDatabase.getAll(n),
                                i = [];
                            for (var a in r) i.push([a, r[a]]);
                            var s = {
                                dataLayerElement: e,
                                tags: t,
                                variableCollection: i.map((function(e) {
                                    return {
                                        name: e[0],
                                        value: e[1]
                                    }
                                })).reduce((function(e, t) {
                                    var n;
                                    return vr(vr({}, e), ((n = {})[t.name] = t, n))
                                }), {})
                            };
                            "stg.pageView.sync" !== e.event ? o.push(s) : Object.defineProperty(o.window, "syncEvent", {
                                value: s,
                                configurable: !0
                            })
                        }, this.close = function() {
                            var e = o.window.location.search.substring(1).split("&").filter(Boolean).filter((function(e) {
                                return "_stg_debug" !== e
                            }));
                            e.push("_stg_disable_debug"), o.window.location.search = "?".concat(e.join("&"))
                        }, this.push = function(e) {
                            o.stack.push(e), o.listeners.forEach((function(t) {
                                t(e)
                            }))
                        }, this.hasConsentBeenGiven = function(e) {
                            var t = o.cookieStorage.get("ppms_privacy_".concat(o.globalObject.configuration.id));
                            if (null === t) return !1;
                            try {
                                var n = JSON.parse(t).consents[e];
                                return !!n && 1 === n.status
                            } catch (e) {
                                return !1
                            }
                        }, this.addFieldsToGlobalObject = function() {
                            Object.defineProperties(o.globalObject, {
                                on: {
                                    value: function(e, t) {
                                        if ("bootstrap" !== e) throw new Error("Debugger called on(".concat(e, ") which is not supported"));
                                        t()
                                    },
                                    enumerable: !0
                                },
                                $injector: {
                                    value: {
                                        get: function(e) {
                                            if ("NONCE_TOKEN" === e) return o.nonceTokenProvider.getToken();
                                            throw new Error("Debugger called $injector.get(".concat(e, ") which is not supported"))
                                        }
                                    },
                                    enumerable: !0
                                },
                                $optOut: {
                                    value: {
                                        setDebuggerSimulateOptOut: function(e) {
                                            o.simulateOptOut = e
                                        },
                                        hasGlobalOptOut: function() {
                                            return !1
                                        },
                                        hasDomainOptOut: function() {
                                            return "true" === o.cookieStorage.get("_stg_optout")
                                        },
                                        hasDebuggerOptOut: function() {
                                            return o.simulateOptOut
                                        },
                                        isEnabled: function() {
                                            return "true" === o.cookieStorage.get("_stg_optout") || o.simulateOptOut
                                        }
                                    },
                                    enumerable: !0
                                },
                                debugger: {
                                    value: {
                                        breakpoints: {
                                            enabled: !1
                                        },
                                        isEnabled: function() {
                                            return !0
                                        },
                                        stack: o.stack,
                                        addListener: function(e) {
                                            o.listeners.push(e)
                                        },
                                        close: o.close
                                    },
                                    enumerable: !0
                                },
                                $privacyComplianceEnabled: {
                                    value: o.globalObject.consentSettings.consent_enabled,
                                    enumerable: !0
                                },
                                $privacyComplianceTypeRecognizer: {
                                    value: {
                                        recognize: function(e) {
                                            return "consentType" in e ? e.consentType : e.complianceType
                                        },
                                        isTracking: function(e) {
                                            return "consentType" in e ? "not_require_consent" !== e.consentType && !o.hasConsentBeenGiven(e.consentType) : "not_require_consent" !== e.complianceType && !o.hasConsentBeenGiven(e.complianceType)
                                        }
                                    },
                                    enumerable: !0
                                },
                                $doNotTrack: {
                                    value: {
                                        isEnabled: function() {
                                            return "1" === o.window.navigator.doNotTrack || "1" === o.window.doNotTrack
                                        }
                                    }
                                },
                                $privacyComplianceConsentRegistry: {
                                    value: {
                                        findById: function(e) {
                                            return {
                                                isAllowed: function() {
                                                    return "not_require_consent" === e || o.hasConsentBeenGiven(e)
                                                }
                                            }
                                        }
                                    },
                                    enumerable: !0
                                }
                            }), o.window.sevenTagSync && (Object.defineProperty(o.globalObject, "tagTreeSync", {
                                value: !0,
                                enumerable: !0
                            }), o.globalObject.tagTree = mr(mr([], o.window.sevenTagSync.tagTree, !0), o.globalObject.tagTree, !0))
                        }, this.handleSyncEvent = function() {
                            var e = o.window.syncEvent;
                            e && (o.stack.push(e), delete o.window.syncEvent)
                        }
                    }
                    return e.dependencies = ["globalObject", "Window", "VariablesDatabase", "CookieStorage", "NonceTokenProvider"], e
                }(),
                br = function() {
                    this.sendRequest = function(e, t, n) {
                        var r = e.method,
                            i = e.url,
                            o = e.json,
                            a = e.body,
                            s = new XMLHttpRequest;
                        s.open(r, i, !0), "post" === r.toLowerCase() && o && s.setRequestHeader("Content-Type", "application/json"), s.onload = function(e) {
                            200 === s.status ? t(o ? JSON.parse(s.response) : s.response) : n(e, s.status)
                        }, s.onerror = function(e) {
                            return n(e, s.status)
                        }, s.ontimeout = function(e) {
                            return n(e, s.status)
                        }, s.send(a)
                    }
                },
                wr = function() {
                    function e(e, t) {
                        var n = this;
                        this.globalObject = e, this.audienceConditionsFinder = t, this.generate = function() {
                            return {
                                hasAudienceConditions: n.audienceConditionsFinder.areAudienceConditionsPresent(),
                                cdpEnabled: n.globalObject.configuration.cdp_enabled
                            }
                        }
                    }
                    return e.dependencies = ["globalObject", "AudienceConditionsFinder"], e
                }(),
                Cr = function() {
                    function e(e) {
                        var t = this;
                        this.metadataGenerator = e, this.metadata = null, this.getMetadata = function() {
                            return null === t.metadata && (t.metadata = t.metadataGenerator.generate()), t.metadata
                        }
                    }
                    return e.dependencies = ["MetadataGenerator"], e
                }(),
                Sr = "stg_fired_",
                _r = function() {
                    function e(e) {
                        var t = this;
                        this.cookieStorage = e, this.setFired = function(e) {
                            t.cookieStorage.set("".concat(Sr).concat(e), (new Date).toUTCString())
                        }, this.wasFired = function(e) {
                            return null !== t.cookieStorage.get("".concat(Sr).concat(e))
                        }
                    }
                    return e.dependencies = ["CookieStorage"], e
                }(),
                Er = function() {
                    var e = this;
                    this.record = {}, this.setFired = function(t) {
                        e.record[t] = !0
                    }, this.wasFired = function(t) {
                        return t in e.record
                    }
                },
                Tr = "stg_last_interaction",
                kr = function() {
                    function e(e, t) {
                        var n = this;
                        this.cookieStorage = e, this.variablesCookiesHandler = t, this.lastInteractionCookieSnapshot = null, this.createCookieSnapshot = function() {
                            var e = n.cookieStorage.get(Tr);
                            n.lastInteractionCookieSnapshot = null === e ? null : new Date(e)
                        }, this.isFirstVisit = function(e) {
                            if (null === n.lastInteractionCookieSnapshot) return !0;
                            var t = 60 * e;
                            return !!(n.getSecondsSinceLastInteractionSnapshot() > t)
                        }, this.getSecondsSinceLastInteraction = function() {
                            var e = n.getLastInteractionDate();
                            return null === e ? -1 : ((new Date).getTime() - e.getTime()) / 1e3
                        }, this.commitInteraction = function() {
                            n.shouldCreateLastInteractionCookie() && n.cookieStorage.set(Tr, (new Date).toUTCString(), {
                                maxAge: 31536e3
                            })
                        }, this.getLastInteractionDate = function() {
                            var e = n.cookieStorage.get(Tr);
                            return e ? new Date(e) : null
                        }, this.getSecondsSinceLastInteractionSnapshot = function() {
                            return null === n.lastInteractionCookieSnapshot ? -1 : ((new Date).getTime() - n.lastInteractionCookieSnapshot.getTime()) / 1e3
                        }, this.shouldCreateLastInteractionCookie = function() {
                            return n.variablesCookiesHandler.shouldCreateCookie(Tr)
                        }
                    }
                    return e.dependencies = ["CookieStorage", "VariablesCookiesHandler"], e
                }(),
                Ar = function() {
                    function e(e, t, n, r, i, o) {
                        var a = this;
                        this.globalObject = e, this.dataLayer = t, this.cookieStorage = n, this.tagTreeProvider = r, this.nonceTokenProvider = i, this.httpClient = o, this.tagPreventionPlugins = [], this.register = function(e) {
                            var t = e(a.getContext());
                            t.supports().tagPrevention && a.tagPreventionPlugins.push(t)
                        }, this.getTagPreventingPlugins = function() {
                            return a.tagPreventionPlugins
                        }, this.getContext = function() {
                            return {
                                tagTree: a.tagTreeProvider.getTagTree(),
                                consentSettings: a.globalObject.consentSettings,
                                consentTemplatesSettings: a.globalObject.consentTemplatesSettings,
                                containerConfiguration: a.globalObject.configuration,
                                appId: a.globalObject.configuration.id,
                                dataLayer: a.dataLayer,
                                cookieStorage: a.cookieStorage,
                                nonceToken: a.nonceTokenProvider.getToken(),
                                httpClient: a.httpClient
                            }
                        }
                    }
                    return e.dependencies = ["globalObject", "dataLayer", "CookieStorage", "TagTreeProvider", "NonceTokenProvider", "HttpClient"], e
                }(),
                Or = "stg_returning_visitor",
                Rr = function() {
                    function e(e, t) {
                        var n = this;
                        this.cookieStorage = e, this.variablesCookiesHandler = t, this.isVisitorReturning = function() {
                            return n.returningVisitorCookieExists() && n.lastInteractionWasMoreThan30MinutesAgo()
                        }, this.setReturningVisitorCookie = function() {
                            !n.isVisitorReturning() && n.shouldCreateReturningVisitorCookie() && n.cookieStorage.set(Or, (new Date).toUTCString(), {
                                maxAge: 31536e3
                            })
                        }, this.shouldCreateReturningVisitorCookie = function() {
                            return n.variablesCookiesHandler.shouldCreateCookie(Or)
                        }, this.returningVisitorCookieExists = function() {
                            return null !== n.cookieStorage.get(Or)
                        }, this.lastInteractionWasMoreThan30MinutesAgo = function() {
                            var e = n.cookieStorage.get(Or);
                            if (null === e) throw new Error("Cookie ".concat(Or, " does not exist"));
                            var t = new Date,
                                r = new Date(e);
                            return (t.getTime() - r.getTime()) / 1e3 > 1800
                        }
                    }
                    return e.dependencies = ["CookieStorage", "VariablesCookiesHandler"], e
                }(),
                Pr = function() {
                    return Pr = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, Pr.apply(this, arguments)
                },
                Lr = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.window = e, this.document = t, this.globalObject = n, this.get = function(e) {
                            return r.webStorage.get(e)
                        }, this.getAll = function() {
                            return r.webStorage.getAll()
                        }, this.getCookieString = function() {
                            return r.document.cookie
                        }, this.set = function(e, t, n) {
                            return r.webStorage.set(e, t, Pr(Pr({}, n), {
                                sameSite: "lax",
                                secure: r.globalObject.configuration.use_secure_cookies
                            }))
                        }, this.remove = function(e, t) {
                            return r.webStorage.remove(e, t)
                        };
                        var i = this.window.ppmsWebStorage,
                            o = this.window.ppmsWebStorageConfiguration;
                        if ("function" != typeof i) throw new Error("WebStorage not found");
                        this.webStorage = new i(o), Object.defineProperty(this.globalObject, "$webStorage", {
                            value: this.webStorage,
                            writable: !1,
                            enumerable: !0
                        })
                    }
                    return e.dependencies = ["Window", "Document", "globalObject"], e
                }(),
                xr = function() {
                    return xr = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, xr.apply(this, arguments)
                },
                Dr = function() {
                    function e(e, t) {
                        var n = this;
                        this.triggerResolver = e, this.pluginsRegistry = t, this.resolve = function(e, t) {
                            var r = n.resolvePlugins(e),
                                i = n.resolveScheduler(e);
                            if (r || !i) return xr(xr({}, e), {
                                resolved: !1
                            });
                            var o = n.resolveTriggers(e.triggers, t),
                                a = o.some((function(e) {
                                    return e.resolved
                                }));
                            return xr(xr({}, e), {
                                triggers: o,
                                resolved: a
                            })
                        }, this.resolveTriggers = function(e, t) {
                            for (var r = [], i = 0, o = e; i < o.length; i++) {
                                var a = o[i];
                                r.push(n.triggerResolver.resolve(a, t))
                            }
                            return r
                        }, this.resolveScheduler = function(e) {
                            return !e.scheduler.enabled || e.scheduler.resolved
                        }, this.resolvePlugins = function(e) {
                            for (var t, r = 0, i = n.pluginsRegistry.getTagPreventingPlugins(); r < i.length; r++) {
                                var o = i[r];
                                if (null === (t = o.preventTagFromBeingResolved) || void 0 === t ? void 0 : t.call(o, e)) return !0
                            }
                            return !1
                        }
                    }
                    return e.dependencies = ["TriggerResolver", "PluginsRegistry"], e
                }(),
                Nr = function() {
                    function e(e) {
                        var t = this;
                        this.tagResolver = e, this.resolve = function(e, n) {
                            return e.map((function(e) {
                                return t.tagResolver.resolve(e, n)
                            }))
                        }
                    }
                    return e.dependencies = ["TagResolver"], e
                }(),
                Fr = "stg_traffic_source_priority",
                Ir = function() {
                    function e(e) {
                        var t = this;
                        this.cookieStorage = e, this.set = function(e) {
                            var n = 0 === e ? "undefined" : e.toString();
                            t.cookieStorage.set(Fr, n, {
                                maxAge: 1800
                            })
                        }, this.extend = function() {
                            var e = t.cookieStorage.get(Fr);
                            null !== e && t.cookieStorage.set(Fr, e, {
                                maxAge: 1800
                            })
                        }, this.get = function() {
                            var e = t.cookieStorage.get(Fr);
                            return "undefined" === e || null === e ? 0 : parseInt(e, 10)
                        }
                    }
                    return e.dependencies = ["CookieStorage"], e
                }(),
                jr = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.trafficSourceRecognizer = e, this.trafficSourceCookie = t, this.variablesCookiesHandler = n, this.setTrafficSourceCookie = function() {
                            if (r.shouldCreateTrafficSourceCookie()) {
                                var e = r.trafficSourceRecognizer.recognize();
                                e > r.trafficSourceCookie.get() && r.trafficSourceCookie.set(e)
                            }
                        }, this.extendTrafficSourceCookie = function() {
                            r.shouldCreateTrafficSourceCookie() && r.trafficSourceCookie.extend()
                        }, this.shouldCreateTrafficSourceCookie = function() {
                            return r.variablesCookiesHandler.shouldCreateCookie("stg_traffic_source_priority")
                        }
                    }
                    return e.dependencies = ["TrafficSourceRecognizer", "TrafficSourceCookie", "VariablesCookiesHandler"], e
                }(),
                Vr = function(e) {
                    var t = e.replace(/(https?:\/\/)?(\/\/)?/i, ""),
                        n = t.indexOf(":");
                    if (-1 !== n) return t.substring(0, n);
                    var r = t.indexOf("?"),
                        i = -1 !== r ? t.substring(0, r) : t;
                    return -1 !== i.indexOf("/") ? i.split("/")[0] : i
                },
                Mr = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.document = e, this.window = t, this.campaignVariableResolver = n, this.recognize = function() {
                            return r.isCampaign() ? 5 : r.isOrganicSearch() ? 4 : r.isSocial() ? 3 : r.isWebsite() ? 2 : r.isDirect() ? 1 : 0
                        }, this.isCampaign = function() {
                            return void 0 !== r.campaignVariableResolver.resolve()
                        }, this.isOrganicSearch = function() {
                            if (!r.document.referrer) return !1;
                            for (var e = Vr(r.document.referrer), t = 0, n = ["google.", "yahoo.", "bing."]; t < n.length; t++)
                                if (new RegExp(n[t]).test(e)) return !0;
                            return !1
                        }, this.isSocial = function() {
                            if (!r.document.referrer) return !1;
                            for (var e = Vr(r.document.referrer), t = 0, n = ["facebook.", "twitter.", "linkedin.", "youtube."]; t < n.length; t++)
                                if (new RegExp(n[t]).test(e)) return !0;
                            return !1
                        }, this.isWebsite = function() {
                            return !!r.document.referrer && Vr(r.document.referrer) !== r.window.location.hostname
                        }, this.isDirect = function() {
                            return "" === r.document.referrer
                        }
                    }
                    return e.dependencies = ["Document", "Window", "CampaignVariableResolver"], e
                }(),
                Br = function() {
                    return Br = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, Br.apply(this, arguments)
                },
                Hr = function() {
                    function e(e, t, n, r) {
                        var i = this;
                        this.conditionResolver = e, this.cookieFiredState = t, this.memoryFiredState = n, this.document = r, this.resolve = function(e, t) {
                            return i.hasOncePerPageViewCondition(e) ? i.resolveOncePerPageViewTrigger(e, t) : i.hasOncePerSessionCondition(e) ? i.resolveOncePerSessionTrigger(e, t) : i.resolveTrigger(e, t)
                        }, this.resolveOncePerPageViewTrigger = function(e, t) {
                            if (i.memoryFiredState.wasFired(e.relation)) return Br(Br({}, e), {
                                resolved: !1
                            });
                            for (var n = [], r = 0, o = e.conditions; r < o.length; r++) {
                                var a = o[r];
                                n.push(i.conditionResolver.resolve(a, t))
                            }
                            var s = n.every((function(e) {
                                return e.resolved
                            }));
                            if (s) {
                                var c = i.isElementPresenceTrigger(e);
                                i.memoryFiredState.setFired(e.relation), c && i.addElementPresenceDataAttributes(e)
                            }
                            return Br(Br({}, e), {
                                conditions: n,
                                resolved: s
                            })
                        }, this.resolveOncePerSessionTrigger = function(e, t) {
                            if (i.cookieFiredState.wasFired(e.relation)) return Br(Br({}, e), {
                                resolved: !1
                            });
                            for (var n = [], r = 0, o = e.conditions; r < o.length; r++) {
                                var a = o[r];
                                n.push(i.conditionResolver.resolve(a, t))
                            }
                            var s = n.every((function(e) {
                                return e.resolved
                            }));
                            if (s) {
                                var c = i.isElementPresenceTrigger(e);
                                i.cookieFiredState.setFired(e.relation), c && i.addElementPresenceDataAttributes(e)
                            }
                            return Br(Br({}, e), {
                                conditions: n,
                                resolved: s
                            })
                        }, this.resolveTrigger = function(e, t) {
                            for (var n = [], r = 0, o = e.conditions; r < o.length; r++) {
                                var a = o[r];
                                n.push(i.conditionResolver.resolve(a, t))
                            }
                            var s = n.every((function(e) {
                                return e.resolved
                            }));
                            return s && i.isElementPresenceTrigger(e) && i.addElementPresenceDataAttributes(e), Br(Br({}, e), {
                                conditions: n,
                                resolved: s
                            })
                        }, this.hasOncePerPageViewCondition = function(e) {
                            return e.conditions.filter((function(e) {
                                return "once_per_page_view" === e.action
                            })).length > 0
                        }, this.hasOncePerSessionCondition = function(e) {
                            return e.conditions.filter((function(e) {
                                return "once_per_session" === e.action
                            })).length > 0
                        }, this.isElementPresenceTrigger = function(e) {
                            return e.conditions.filter((function(e) {
                                return "Event" === e.variable && "stg.elementPresence" === e.value
                            })).length > 0
                        }, this.addElementPresenceDataAttributes = function(e) {
                            var t = e.conditions.filter((function(e) {
                                return "Found Elements" === e.variable
                            }))[0].value;
                            i.document.querySelectorAll(t).forEach((function(e) {
                                e.setAttribute("data-pp-element-found", "")
                            }))
                        }
                    }
                    return e.dependencies = ["ConditionResolver", "CookieFiredState", "MemoryFiredState", "Document"], e
                }(),
                Wr = function() {
                    function e(e) {
                        var t = this;
                        this.cookieStorage = e, this.resolve = function() {
                            for (var e = 0, n = On; e < n.length; e++) {
                                var r = n[e],
                                    i = t.cookieStorage.get(r.cookieName);
                                if (null !== i) return i
                            }
                        }
                    }
                    return e.dependencies = ["CookieStorage"], e
                }(),
                qr = ["Consents", "Piwik PRO Anonymization"],
                Ur = function() {
                    function e(e, t, n, r) {
                        var i = this;
                        this.globalObject = e, this.variableCollector = t, this.variablesDatabase = n, this.variablesGraphResolver = r, this.setFromDataLayerEvent = function(e, t) {
                            i.isBuiltinEvent(e) || i.setVariablesFromEvent(e, t), i.setVariablesFromSetup(e, t)
                        }, this.isBuiltinEvent = function(e) {
                            return "string" == typeof e.event && 0 === e.event.indexOf("stg.")
                        }, this.setVariablesFromSetup = function(e, t) {
                            i.variablesGraphResolver.resolve(i.globalObject.variables.filter((function(e) {
                                return -1 === qr.indexOf(e.name)
                            }))).forEach((function(n) {
                                var r = i.variableCollector.resolve(n, e, t);
                                r.resolved && i.variablesDatabase.set(n.name, r.value, t)
                            }))
                        }, this.setVariablesFromEvent = function(e, t) {
                            var n = e;
                            for (var r in n) {
                                var o = [r, n[r]],
                                    a = o[0],
                                    s = o[1];
                                "event" !== a && i.variablesDatabase.set(a, s, t)
                            }
                        }
                    }
                    return e.dependencies = ["globalObject", "VariableCollector", "VariablesDatabase", "VariablesGraphResolver"], e
                }(),
                zr = "stg_externalReferrer",
                Kr = function() {
                    function e(e, t, n, r) {
                        var i = this;
                        this.window = e, this.document = t, this.cookieStorage = n, this.variablesCookiesHandler = r, this.resolve = function() {
                            var e;
                            if (i.hasReferrer()) return i.isReferrerExternal() && i.shouldCreateExternalReferrerCookie() && i.cookieStorage.set(zr, i.document.referrer), null !== (e = i.cookieStorage.get(zr)) && void 0 !== e ? e : void 0;
                            i.cookieStorage.remove(zr)
                        }, this.isReferrerExternal = function() {
                            return Vr(i.document.referrer) !== i.window.location.hostname
                        }, this.shouldCreateExternalReferrerCookie = function() {
                            return i.variablesCookiesHandler.shouldCreateCookie(zr)
                        }, this.hasReferrer = function() {
                            return "" !== i.document.referrer
                        }
                    }
                    return e.dependencies = ["Window", "Document", "CookieStorage", "VariablesCookiesHandler"], e
                }(),
                $r = function() {
                    function e(e) {
                        var t = this;
                        this.document = e, this.resolve = function() {
                            return {
                                px: t.getScrollPositionPx(),
                                "%": t.getPageScrollPercentage()
                            }
                        }, this.getScrollPositionPx = function() {
                            return t.document.documentElement.scrollTop
                        }, this.getPageScrollPercentage = function() {
                            var e = t.document.documentElement.clientHeight,
                                n = t.document.documentElement.scrollHeight,
                                r = Math.max(n - e, 1),
                                i = t.getScrollPositionPx() / r * 100;
                            return Math.min(Math.ceil(i), 100)
                        }
                    }
                    return e.dependencies = ["Document"], e
                }(),
                Gr = function() {
                    function e(e) {
                        var t = this;
                        this.trafficSourceCookie = e, this.resolve = function() {
                            switch (t.trafficSourceCookie.get()) {
                                case 5:
                                    return "campaign";
                                case 4:
                                    return "organic_search";
                                case 3:
                                    return "social";
                                case 2:
                                    return "website";
                                case 1:
                                    return "direct";
                                default:
                                    return
                            }
                        }
                    }
                    return e.dependencies = ["TrafficSourceCookie"], e
                }(),
                Yr = function() {
                    function e(e, t) {
                        var n = this;
                        this.window = e, this.variableCollectorCollection = t, this.resolve = function(e, t, r) {
                            var i = n.variableCollectorCollection.getCollectors().filter((function(t) {
                                return t.accepts(e)
                            }))[0];
                            try {
                                if (void 0 === i) throw new Error("No collector found for variable");
                                return i.resolve(e, t, r)
                            } catch (t) {
                                return n.reportError(e.name, t), {
                                    resolved: !1
                                }
                            }
                        }, this.reportError = function(e, t) {
                            var r, i = n.hasMessage(t) ? t.message : "Unknown reason";
                            console.error("Failed to evaluate variable - ".concat(e, ": ").concat(i)), n.window._paq = null !== (r = n.window._paq) && void 0 !== r ? r : [], n.window._paq.push(["trackError", t])
                        }, this.hasMessage = function(e) {
                            return "object" == typeof e && null !== e && "message" in e
                        }
                    }
                    return e.dependencies = ["Window", "VariableCollectorCollection"], e
                }();
            ! function(e) {
                e.anonymization = "piwik_anonymization", e.cdpAudience = "cdp_audience", e.consents = "consents", e.constant = "constant", e.cookie = "cookie", e.customJavaScript = "custom_javascript", e.dataLayer = "data_layer", e.document = "document", e.domElement = "dom_element", e.lookupTable = "lookup_table", e.random = "random", e.url = "url"
            }(cr || (cr = {}));
            var Jr = function() {
                    this.accepts = function(e) {
                        return e.type.collector_name === cr.cdpAudience
                    }, this.resolve = function(e, t) {
                        return "stg.audiencesFetched" !== t.event ? {
                            resolved: !1
                        } : {
                            resolved: !0,
                            value: t.audiences
                        }
                    }
                },
                Qr = /^[+-]?(\d*\.\d+|\d+\.\d*|\d+e[+-]?\d+|\d+\.\d*e[+-]?\d+|\d*\.\d+e[+-]?\d+)$/i,
                Xr = /^[+-]?\d+$/i,
                Zr = /^(true|false)$/i,
                ei = function() {
                    function e(e) {
                        var t = this;
                        this.variableReplacer = e, this.accepts = function(e) {
                            return e.type.collector_name === cr.constant
                        }, this.resolve = function(e, n, r) {
                            var i = t.variableReplacer.replaceInVariable(e.value, r);
                            return t.isFloatString(i) ? t.resolveFloatString(i) : t.isIntegerString(i) ? t.resolveIntegerString(i) : t.isBooleanString(i) ? t.resolveBooleanString(i) : {
                                resolved: !0,
                                value: i
                            }
                        }, this.resolveFloatString = function(e) {
                            var t = parseFloat(e);
                            return t !== Number.POSITIVE_INFINITY && t !== Number.NEGATIVE_INFINITY || (t = e), {
                                resolved: !0,
                                value: t
                            }
                        }, this.resolveIntegerString = function(e) {
                            var t = parseInt(e, 10);
                            return (t > 9007199254740991 || t < -9007199254740991) && (t = e), {
                                resolved: !0,
                                value: t
                            }
                        }, this.resolveBooleanString = function(e) {
                            return {
                                resolved: !0,
                                value: "true" === e.toLowerCase()
                            }
                        }, this.isIntegerString = function(e) {
                            return Xr.test(e)
                        }, this.isFloatString = function(e) {
                            return Qr.test(e)
                        }, this.isBooleanString = function(e) {
                            return Zr.test(e)
                        }
                    }
                    return e.dependencies = ["VariableReplacer"], e
                }(),
                ti = function() {
                    function e(e, t, n, r) {
                        var i = this;
                        this.cookieStorage = e, this.lastInteractionState = t, this.returningVisitor = n, this.variableReplacer = r, this.accepts = function(e) {
                            return e.type.collector_name === cr.cookie
                        }, this.resolve = function(e, t, n) {
                            return e.value ? {
                                resolved: !0,
                                value: i.resolveCookieVariable(e, n)
                            } : {
                                resolved: !1
                            }
                        }, this.resolveCookieVariable = function(e, t) {
                            return "View within session" === e.name && "firstVisit" === e.value ? i.resolveViewWithinSession() : "Returning Visitor" === e.name && "returningVisitor" === e.value ? i.resolveReturningVisitor() : i.resolveCustomCookieVariable(i.variableReplacer.replaceInVariable(e.value, t))
                        }, this.resolveViewWithinSession = function() {
                            return i.lastInteractionState.getSecondsSinceLastInteraction()
                        }, this.resolveReturningVisitor = function() {
                            return i.returningVisitor.isVisitorReturning()
                        }, this.resolveCustomCookieVariable = function(e) {
                            var t;
                            return null !== (t = i.cookieStorage.get(e)) && void 0 !== t ? t : void 0
                        }
                    }
                    return e.dependencies = ["CookieStorage", "LastInteractionState", "ReturningVisitor", "VariableReplacer"], e
                }(),
                ni = /(function[ \n]*\(\)[ \n]*{(.|\n)*})|(\(\)[ \n]*=>[ \n]*{(.|\n)*})/,
                ri = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.variableReplacer = e, this.nonceTokenProvider = t, this.window = n, this.resolve = function(e, t, n) {
                            return {
                                resolved: !0,
                                value: r.getValue(e.value, n)
                            }
                        }, this.getValue = function(e, t) {
                            var n = r.nonceTokenProvider.getToken();
                            return n ? r.getValueWithScriptElement(e, t, n) : r.getValueWithEval(e, t)
                        }, this.getValueWithScriptElement = function(e, t, n) {
                            var i, o = r.getVariableCode(e, t),
                                a = document.createElement("script"),
                                s = "window.sevenTagVariableResult = (".concat(o, ")()");
                            return a.text = s, a.nonce = n, document.head.appendChild(a), null === (i = a.parentNode) || void 0 === i || i.removeChild(a), r.window.sevenTagVariableResult
                        }, this.getValueWithEval = function(e, t) {
                            var n = r.getVariableCode(e, t),
                                i = (0, eval)("(".concat(n, ")"));
                            return "function" == typeof i ? i.call(void 0) : i
                        }, this.accepts = function(e) {
                            return e.type.collector_name === cr.customJavaScript
                        }, this.getVariableCode = function(e, t) {
                            var n = e.match(ni);
                            if (null === n) throw new Error("Function declaration not found in custom variable body");
                            return r.variableReplacer.replaceInScript(n[0], t)
                        }
                    }
                    return e.dependencies = ["VariableReplacer", "NonceTokenProvider", "Window"], e
                }(),
                ii = function() {
                    function e(e) {
                        var t = this;
                        this.variableReplacer = e, this.resolve = function(e, n, r) {
                            var i, o, a, s, c;
                            return null !== (c = null !== (s = null !== (a = null !== (o = null !== (i = t.resolveOtherVariables(e, n)) && void 0 !== i ? i : t.resolveFormVariables(e, n)) && void 0 !== o ? o : t.resolveClickVariables(e, n)) && void 0 !== a ? a : t.resolveHistoryVariables(e, n)) && void 0 !== s ? s : t.resolveCustomDataLayerVariable(e, n, r)) && void 0 !== c ? c : {
                                resolved: !1
                            }
                        }, this.accepts = function(e) {
                            return e.type.collector_name === cr.dataLayer
                        }, this.resolveOtherVariables = function(e, t) {
                            if ("event" === e.value || "timeOnWebsite" === e.value || "edge" === e.value || "foundElements" === e.value) return {
                                resolved: !0,
                                value: t[e.value]
                            }
                        }, this.resolveFormVariables = function(e, t) {
                            if ("Form ID" === e.name || "Form Url" === e.name || "Form Classes" === e.name || "Form Name" === e.name) return {
                                resolved: "stg.formSubmit" === t.event,
                                value: t[e.value]
                            }
                        }, this.resolveHistoryVariables = function(e, t) {
                            if ("History source" === e.name || "Old history fragment" === e.name || "History state" === e.name || "Old history state" === e.name) return {
                                resolved: "stg.history" === t.event || "stg.debouncedHistory" === t.event,
                                value: t[e.value]
                            }
                        }, this.resolveClickVariables = function(e, t) {
                            return "Click ID" === e.name || "Click Url" === e.name || "Click Classes" === e.name ? {
                                resolved: "stg.click" === t.event,
                                value: t[e.value]
                            } : "Click Element" === e.name ? {
                                resolved: "stg.click" === t.event,
                                value: t.element
                            } : void 0
                        }, this.resolveCustomDataLayerVariable = function(e, n, r) {
                            var i = t.variableReplacer.replaceInVariable(e.value, r);
                            if (i in n) return {
                                resolved: !0,
                                value: n[i]
                            }
                        }
                    }
                    return e.dependencies = ["VariableReplacer"], e
                }(),
                oi = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.document = e, this.pageScrollVariableResolver = t, this.variableReplacer = n, this.resolve = function(e, t, n) {
                            var i;
                            if ("Page Scroll" === e.name) return {
                                resolved: !0,
                                value: r.pageScrollVariableResolver.resolve()
                            };
                            var o = r.variableReplacer.replaceInVariable(e.value, n).split(".");
                            return {
                                resolved: !0,
                                value: null !== (i = lr(r.document, o)) && void 0 !== i ? i : ""
                            }
                        }, this.accepts = function(e) {
                            return e.type.collector_name === cr.document
                        }
                    }
                    return e.dependencies = ["Document", "PageScrollVariableResolver", "VariableReplacer"], e
                }(),
                ai = function() {
                    function e(e, t) {
                        var n = this;
                        this.document = e, this.variableReplacer = t, this.accepts = function(e) {
                            return e.type.collector_name === cr.domElement
                        }, this.resolve = function(e, t, r) {
                            var i = n.variableReplacer.replaceInVariable(e.value, r),
                                o = "selector_type" in e.options ? e.options.selector_type : void 0;
                            if (!o || !i) return {
                                resolved: !1
                            };
                            var a = "extract_text_content" in e.options && e.options.extract_text_content,
                                s = n.getElementsBySelector(i, o);
                            return {
                                resolved: !0,
                                value: a ? n.extractText(s) : n.hasFoundAtLeastOneElement(s)
                            }
                        }, this.hasFoundAtLeastOneElement = function(e) {
                            return !!e && e.length > 0
                        }, this.extractText = function(e) {
                            if (!e) return "";
                            var t = [];
                            return e.forEach((function(e) {
                                t.push.apply(t, n.getNodeText(e))
                            })), t.length ? t.join(" ") : ""
                        }, this.getNodeText = function(e) {
                            var t = [];
                            if (e.nodeType === Node.TEXT_NODE) {
                                var r = e.nodeValue ? e.nodeValue.trim() : "";
                                r.length > 0 && t.push(r)
                            }
                            return e.childNodes.forEach((function(e) {
                                t.push.apply(t, n.getNodeText(e))
                            })), t
                        }, this.getElementsBySelector = function(e, t) {
                            switch (t) {
                                case "element_id":
                                    return function(e) {
                                        return function(t) {
                                            var n = e.getElementById(t);
                                            return n ? [n] : null
                                        }
                                    }(n.document)(e);
                                case "css":
                                    return Un(n.document)(e);
                                case "xpath":
                                    return zn(n.document)(e)
                            }
                        }
                    }
                    return e.dependencies = ["Document", "VariableReplacer"], e
                }(),
                si = /^{{((?:.(?!}}))*.)}}$/,
                ci = function() {
                    function e(e, t) {
                        var n = this;
                        this.variablesDatabase = e, this.variableReplacer = t, this.accepts = function(e) {
                            return e.type.collector_name === cr.lookupTable
                        }, this.resolve = function(e, t, r) {
                            return {
                                resolved: !0,
                                value: n.resolveLookupTable(e, r)
                            }
                        }, this.getVariableName = function(e) {
                            return e.replace("{{", "").replace("}}", "").trim()
                        }, this.getVariableValueByReference = function(e, t) {
                            var r = n.getVariableName(e);
                            return n.variablesDatabase.getByName(r, t)
                        }, this.sourceStringIsVariableReference = function(e) {
                            return si.test(e)
                        }, this.evaluateSourceString = function(e, t) {
                            return n.sourceStringIsVariableReference(e) ? n.getVariableValueByReference(e, t) : n.variableReplacer.replaceInVariable(e, t)
                        }, this.replaceVariablesInInputs = function(e, t) {
                            return e.map((function(e) {
                                return n.variableReplacer.replaceInVariable(e.input, t)
                            }))
                        }, this.findMatch = function(e, t, r) {
                            var i = n.getVariableValueByReference(e, r),
                                o = String(i),
                                a = !1,
                                s = -1;
                            return n.replaceVariablesInInputs(t, r).forEach((function(e, t) {
                                o === e && (a = !0, s = t)
                            })), {
                                matchFound: a,
                                indexOfFoundMatch: s
                            }
                        }, this.resolveLookupTable = function(e, t) {
                            var r = "mapping" in e.options ? e.options.mapping : [],
                                i = "default_value" in e.options ? e.options.default_value : null;
                            if (0 !== r.length || null !== i) {
                                if (0 === r.length && null !== i) return n.evaluateSourceString(i, t);
                                var o = n.findMatch(e.value, r, t),
                                    a = o.matchFound,
                                    s = o.indexOfFoundMatch;
                                if (a) {
                                    var c = r[s].output;
                                    return n.evaluateSourceString(c, t)
                                }
                                return null !== i ? n.evaluateSourceString(i, t) : void 0
                            }
                        }
                    }
                    return e.dependencies = ["VariablesDatabase", "VariableReplacer"], e
                }(),
                ui = function() {
                    this.accepts = function(e) {
                        return e.type.collector_name === cr.random
                    }, this.resolve = function() {
                        return {
                            resolved: !0,
                            value: Math.random()
                        }
                    }
                },
                li = function() {
                    function e(e, t, n, r, i) {
                        var o = this;
                        this.window = e, this.externalReferrerVariableResolver = t, this.campaignVariableResolver = n, this.trafficSourceVariableResolver = r, this.variableReplacer = i, this.accepts = function(e) {
                            return e.type.collector_name === cr.url
                        }, this.resolve = function(e, t, n) {
                            return {
                                resolved: !0,
                                value: o.resolveUrlVariable(e, n)
                            }
                        }, this.resolveUrlVariable = function(e, t) {
                            switch (e.value) {
                                case "href":
                                    return o.resolvePageUrl();
                                case "hostname":
                                    return o.resolvePageHostname();
                                case "pathname":
                                    return o.resolvePagePath();
                                case "trafficSource":
                                    return o.resolveTrafficSource();
                                case "externalReferrer":
                                    return o.resolveExternalReferrer();
                                case "campaign":
                                    return o.resolveCampaign();
                                case "hash":
                                    return o.resolveHistoryFragment();
                                case "parameter":
                                    return o.resolveParameter(e, t);
                                case "query":
                                    return o.resolveQuery();
                                case "protocol":
                                    return o.resolveProtocol();
                                default:
                                    return e.value
                            }
                        }, this.resolvePageUrl = function() {
                            return o.window.location.href
                        }, this.resolvePageHostname = function() {
                            return o.window.location.hostname
                        }, this.resolvePagePath = function() {
                            return o.window.location.pathname
                        }, this.resolveTrafficSource = function() {
                            return o.trafficSourceVariableResolver.resolve()
                        }, this.resolveExternalReferrer = function() {
                            return o.externalReferrerVariableResolver.resolve()
                        }, this.resolveCampaign = function() {
                            return o.campaignVariableResolver.resolve()
                        }, this.resolveHistoryFragment = function() {
                            return o.window.location.hash.split("#")[1]
                        }, this.resolveParameter = function(e, t) {
                            if (!("parameter_name" in e.options) || "string" != typeof e.options.parameter_name) return "";
                            var n = o.variableReplacer.replaceInVariable(e.options.parameter_name, t);
                            return An(o.window.location.search, n)
                        }, this.resolveQuery = function() {
                            return o.window.location.search.substring(1)
                        }, this.resolveProtocol = function() {
                            return o.window.location.protocol.substring(0, o.window.location.protocol.length - 1)
                        }
                    }
                    return e.dependencies = ["Window", "ExternalReferrerVariableResolver", "CampaignVariableResolver", "TrafficSourceVariableResolver", "VariableReplacer"], e
                }(),
                di = function() {
                    function e(e, t, n, r, i, o, a, s, c, u) {
                        var l = this;
                        this.collectors = [], this.getCollectors = function() {
                            return l.collectors
                        }, this.collectors.push(e, t, n, r, i, o, a, s, c, u)
                    }
                    return e.dependencies = ["DataLayerVariableCollector", "DocumentVariableCollector", "DomElementVariableCollector", "CustomJsVariableCollector", "CookieVariableCollector", "ConstantVariableCollector", "RandomNumberVariableCollector", "UrlVariableCollector", "LookupTableVariableCollector", "CdpAudienceVariableCollector"], e
                }(),
                pi = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                    return e.concat(r || Array.prototype.slice.call(t))
                },
                fi = /{{((?:.(?!}}))*.)}}/g,
                hi = function() {
                    var e = this;
                    this.getDependencies = function(t) {
                        if (!t.value) return [];
                        var n = e.getDependenciesFromSourceString(t.value),
                            r = "parameter_name" in t.options ? e.getDependenciesFromSourceString(t.options.parameter_name) : [],
                            i = "mapping" in t.options ? e.getDependenciesFromLookupTableMapping(t.options.mapping) : [],
                            o = "default_value" in t.options && null !== t.options.default_value ? e.getDependenciesFromSourceString(t.options.default_value) : [];
                        return G(pi(pi(pi(pi([], n, !0), r, !0), i, !0), o, !0)).map(e.strip)
                    }, this.getDependenciesFromSourceString = function(e) {
                        var t;
                        return null !== (t = e.match(fi)) && void 0 !== t ? t : []
                    }, this.getDependenciesFromLookupTableMapping = function(t) {
                        return t.map((function(t) {
                            var n = e.getDependenciesFromSourceString(t.input),
                                r = e.getDependenciesFromSourceString(t.output);
                            return pi(pi([], n, !0), r, !0)
                        })).reduce((function(e, t) {
                            return pi(pi([], e, !0), t, !0)
                        }), [])
                    }, this.strip = function(e) {
                        return e.replace("{{", "").replace("}}", "").trim()
                    }
                },
                gi = /{{((?:.(?!}}))*.)}}/g,
                vi = /"[^"\\]*(?:\\.[^"\\]*)*"/g,
                mi = /'[^'\\]*(?:\\.[^'\\]*)*'/g,
                yi = /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
                bi = function() {
                    function e(e, t) {
                        var n = this;
                        this.globalObjectName = e, this.variablesDatabase = t, this.replaceInScript = function(e, t) {
                            return e.replace(vi, n.replacerVariable(t)).replace(mi, n.replacerVariable(t)).replace(gi, n.replacerScriptCode(t, !1))
                        }, this.replaceInHtml = function(e, t) {
                            return e.replace(yi, n.replacerScriptTag(t)).replace(gi, n.replacerHtml(t))
                        }, this.replaceInVariable = function(e, t) {
                            return e.replace(gi, n.replacerHtml(t))
                        }, this.replacerScriptTag = function(e) {
                            return function(t, r) {
                                return t.replace(vi, n.replacerVariable(e)).replace(mi, n.replacerVariable(e)).replace(gi, n.replacerScriptCode(e, !1))
                            }
                        }, this.replacerVariable = function(e) {
                            return function(t, r) {
                                return t.replace(gi, n.replacerScriptCode(e, !0))
                            }
                        }, this.replacerScriptCode = function(e, t) {
                            return function(r, i) {
                                var o = n.variablesDatabase.getAll(e),
                                    a = i.trim(),
                                    s = a.replace(/'/g, "\\'"),
                                    c = o[a];
                                if (n.isObjectOrFunction(c)) return "(function() { return window.".concat(n.globalObjectName, ".getVariableValue('").concat(s, "', ").concat(e, ") })()");
                                if ("string" != typeof c) return String(c);
                                var u = n.sanitizeJsValue(c);
                                return t ? u : "'".concat(u, "'")
                            }
                        }, this.replacerHtml = function(e) {
                            return function(t, r) {
                                var i = n.variablesDatabase.getAll(e),
                                    o = r.trim(),
                                    a = i[o];
                                if ("object" == typeof a) return JSON.stringify(a);
                                var s = String(i[o]);
                                return n.sanitizeHtmlValue(s)
                            }
                        }, this.sanitizeJsValue = function(e) {
                            return e.replace(/\\/g, "\\\\").replace(/\//g, "\\/").replace(/"/g, "\\x22").replace(/'/g, "\\x27").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0").replace(/</g, "\\x3c").replace(/>/g, "\\x3e")
                        }, this.sanitizeHtmlValue = function(e) {
                            return e.replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;").replace(/>/g, "&#62;").replace(/&/g, "&#38;")
                        }, this.isObjectOrFunction = function(e) {
                            return "object" == typeof e && null !== e || "function" == typeof e
                        }
                    }
                    return e.dependencies = ["GlobalObjectName", "VariablesDatabase"], e
                }(),
                wi = function() {
                    function e(e, t) {
                        var n = this;
                        this.globalObject = e, this.variablesUsageDetector = t, this.cookieAllowanceMap = {
                            stg_returning_visitor: null,
                            stg_externalReferrer: null,
                            stg_utm_campaign: null,
                            stg_pk_campaign: null,
                            stg_traffic_source_priority: null,
                            stg_last_interaction: null
                        }, this.createCookieAllowanceMap = function() {
                            var e = n.globalObject.configuration.app_cookies_enabled,
                                t = n.globalObject.configuration.cookies_enabled;
                            !n.globalObject.consentSettings.consent_enabled && t && e ? n.allowAllVariablesCookies() : n.allowVariablesCookiesUsedInTriggers()
                        }, this.shouldCreateCookie = function(e) {
                            return n.cookieAllowanceMap[e]
                        }, this.allowAllVariablesCookies = function() {
                            Object.keys(n.cookieAllowanceMap).forEach((function(e) {
                                n.cookieAllowanceMap[e] = !0
                            }))
                        }, this.allowVariablesCookiesUsedInTriggers = function() {
                            n.variablesUsageDetector.detect(), n.cookieAllowanceMap.stg_returning_visitor = n.variablesUsageDetector.isVariableUsedInAnyTrigger("Returning Visitor"), n.cookieAllowanceMap.stg_externalReferrer = n.variablesUsageDetector.isVariableUsedInAnyTrigger("External referrer"), n.cookieAllowanceMap.stg_utm_campaign = n.variablesUsageDetector.isVariableUsedInAnyTrigger("Campaign"), n.cookieAllowanceMap.stg_pk_campaign = n.variablesUsageDetector.isVariableUsedInAnyTrigger("Campaign"), n.cookieAllowanceMap.stg_traffic_source_priority = n.variablesUsageDetector.isVariableUsedInAnyTrigger("Traffic source"), n.cookieAllowanceMap.stg_last_interaction = n.variablesUsageDetector.isVariableUsedInAnyTrigger("View within session")
                        }
                    }
                    return e.dependencies = ["globalObject", "VariablesUsageDetector"], e
                }(),
                Ci = function() {
                    return Ci = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, Ci.apply(this, arguments)
                },
                Si = function() {
                    function e(e) {
                        var t = this;
                        this.globalObject = e, this.variables = {}, this.variablesIdNameMap = {}, this.start = function() {
                            t.variables[0] = t.globalObject.variables.reduce((function(e, t) {
                                var n, r = t.name;
                                return Ci(Ci({}, e), ((n = {})[r] = void 0, n))
                            }), {})
                        }, this.prepareNewEventScope = function(e) {
                            t.variables[e] = Ci({}, t.variables[e - 1])
                        }, this.set = function(e, n, r) {
                            t.variables[r][e] = n
                        }, this.getByName = function(e, n) {
                            if (n in t.variables) return t.variables[n][e]
                        }, this.getById = function(e, n) {
                            var r = t.variablesIdNameMap[e];
                            if (r && n in t.variables) return t.variables[n][r]
                        }, this.getAll = function(e) {
                            return t.variables[e]
                        }, this.createVariablesIdNameMap = function() {
                            t.globalObject.variables.map((function(e) {
                                e.id && (t.variablesIdNameMap[e.id] = e.name)
                            }))
                        }
                    }
                    return e.dependencies = ["globalObject"], e
                }(),
                _i = function() {
                    function e(e) {
                        var t = this;
                        this.variableDependencyFinder = e, this.resolve = function(e) {
                            for (var n = [], r = t.mapToNamesWithDependencies(e), i = 0; n.length < r.length;) {
                                if ((i += 1) > 50) throw new Error("Circular variable reference detected");
                                t.pushResolvableVariables(r, n)
                            }
                            return n.map((function(n) {
                                return t.findVariableByName(e, n)
                            }))
                        }, this.pushResolvableVariables = function(e, n) {
                            e.forEach((function(e) {
                                var r = e.name,
                                    i = e.deps;
                                t.alreadySorted(n, r) || t.hasUnresolvedDependencies(n, i) || n.push(r)
                            }))
                        }, this.mapToNamesWithDependencies = function(e) {
                            return e.map((function(n) {
                                return {
                                    name: n.name,
                                    deps: t.getDependenciesWithoutUnknown(n, e)
                                }
                            }))
                        }, this.findVariableByName = function(e, t) {
                            return e.filter((function(e) {
                                return e.name === t
                            }))[0]
                        }, this.getDependenciesWithoutUnknown = function(e, n) {
                            var r = n.map((function(e) {
                                return e.name
                            }));
                            return t.variableDependencyFinder.getDependencies(e).filter((function(e) {
                                return -1 !== r.indexOf(e)
                            }))
                        }, this.hasUnresolvedDependencies = function(e, t) {
                            return t.some((function(t) {
                                return -1 === e.indexOf(t)
                            }))
                        }, this.alreadySorted = function(e, t) {
                            return -1 !== e.indexOf(t)
                        }
                    }
                    return e.dependencies = ["VariableDependencyFinder"], e
                }(),
                Ei = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                    return e.concat(r || Array.prototype.slice.call(t))
                },
                Ti = function() {
                    function e(e) {
                        var t = this;
                        this.tagTree = e, this.variablesUsageMap = {
                            "Returning Visitor": null,
                            "External referrer": null,
                            Campaign: null,
                            "Traffic source": null,
                            "View within session": null
                        }, this.detect = function() {
                            var e = Object.keys(t.variablesUsageMap),
                                n = G(t.tagTree.map((function(e) {
                                    return e.triggers
                                })).reduce((function(e, t) {
                                    return Ei(Ei([], e, !0), t, !0)
                                }), []).map((function(e) {
                                    return e.conditions
                                })).reduce((function(e, t) {
                                    return Ei(Ei([], e, !0), t, !0)
                                }), []).filter((function(t) {
                                    return -1 !== e.indexOf(t.variable)
                                })).map((function(e) {
                                    return e.variable
                                })));
                            e.forEach((function(e) {
                                t.variablesUsageMap[e] = -1 !== n.indexOf(e)
                            }))
                        }, this.isVariableUsedInAnyTrigger = function(e) {
                            return t.variablesUsageMap[e]
                        }
                    }
                    return e.dependencies = ["tagTree"], e
                }();
            t.install(),
                function() {
                    if ("ppasAsyncContainerRegistered" in window && !0 === window.ppasAsyncContainerRegistered) throw new Error("Attempting to initialize a second container. Multiple PPAS async containers on one page are not supported. Make sure container code is added to the site only once.");
                    Object.defineProperty(window, "ppasAsyncContainerRegistered", {
                        value: !0,
                        configurable: !0
                    }), x("GlobalObjectName", "sevenTag"), D("BuiltinEventsEmitterCollection", M), D("ClickCallbackFactory", se), D("ClickEventEmitter", H), D("PageViewEventEmitter", oe), D("PageLoadEventEmitter", re), D("DomReadyEventEmitter", $), D("TimerEventEmitter", ae), D("PageScrollEventEmitter", ie), D("BuiltinEventsEmitter", V), D("LeaveContentEventEmitter", ne), D("HistoryEventFactory", ce), D("HistoryEventEmitter", te), D("DebouncedHistoryEventEmitter", K), D("ElementPresenceEventEmitter", J), D("AudiencesFetchedEventEmitter", B), D("AudienceConditionsFinder", j), D("AudiencesRequest", F), D("TagTreeProvider", Cn), D("TagRenderer", En), D("Initializer", bn)
                }(),
                function() {
                    x("Window", window), x("Document", window.document);
                    var e = N("GlobalObjectName");
                    x("globalObject", window[e]);
                    var t = N("globalObject");
                    x("tagTree", t.tagTree), x("consentSettings", t.consentSettings), x("consentTemplatesSettings", t.consentTemplatesSettings);
                    var n = t.configuration.data_layer_name;
                    n in window || Object.defineProperty(window, n, {
                        value: [],
                        enumerable: !0,
                        writable: !0
                    }), x("dataLayer", window[n]), D("DataLayerPushOverrider", hr), D("PluginsRegistry", Ar), D("DataLayerEventConsumer", ur), D("TagResolver", Dr), D("TagTreeResolver", Nr), D("TriggerResolver", Hr), D("ConditionResolver", Ln), D("VariablesDatabase", Si), D("ConditionResolverCollection", xn), D("VariableReplacer", bi), D("ContainsConditionActionResolver", Fn), D("DoesNotContainConditionActionResolver", In), D("EqualsConditionActionResolver", qn), D("DoesNotEqualConditionActionResolver", Vn), D("IsTrueConditionActionResolver", Xn), D("IsFalseConditionActionResolver", Gn), D("IsSetConditionActionResolver", Qn), D("IsNotSetConditionActionResolver", Jn), D("IsEmptyConditionActionResolver", $n), D("IsNotEmptyConditionActionResolver", Yn), D("StartsWithConditionActionResolver", ir), D("DoesNotStartWithConditionActionResolver", Bn), D("EndsWithConditionActionResolver", Wn), D("DoesNotEndWithConditionActionResolver", jn), D("RegexpConditionActionResolver", rr), D("DoesNotRegexpConditionActionResolver", Mn), D("MatchesClickTriggerConditionsResolver", Zn), D("VariableCollector", Yr), D("VariableCollectorCollection", di), D("DataLayerVariableCollector", ii), D("DocumentVariableCollector", oi), D("DomElementVariableCollector", ai), D("LookupTableVariableCollector", ci), D("EventVariableSetter", Ur), D("ExternalReferrerVariableResolver", Kr), D("PageScrollVariableResolver", $r), D("CustomJsVariableCollector", ri), D("VariableDependencyFinder", hi), D("VariablesGraphResolver", _i), D("VariablesUsageDetector", Ti), D("VariablesCookiesHandler", wi), D("PageLeaveTriggerConditionsResolver", er), D("PageScrollTriggerConditionsResolver", tr), D("CookieVariableCollector", ti), D("ConstantVariableCollector", ei), D("RandomNumberVariableCollector", ui), D("UrlVariableCollector", li), D("MemoryFiredState", Er), D("LastInteractionState", kr), D("CookieFiredState", _r), D("PageViewTriggerConditionsResolver", nr), D("FormSubmitEventEmitter", sr), D("FormSubmitCallbackFactory", gr), D("TimerTriggerConditionsResolver", or), D("CookieStorage", Lr), D("ObjectEventConsumer", fr), D("ArrayEventConsumer", dr), D("FunctionEventConsumer", pr), D("CampaignVariableResolver", Wr), D("CampaignCookieSetter", Rn), D("ReturningVisitor", Rr), D("NonceTokenProvider", ar), D("ElementPresenceTriggerResolver", Hn), D("Debugger", yr), D("TrafficSourceRecognizer", Mr), D("TrafficSourceCookie", Ir), D("TrafficSourceCookieSetter", jr), D("TrafficSourceVariableResolver", Gr), D("IsAChildOfClickTriggerConditionsResolver", Kn), D("AudienceMembershipConditionsResolver", Dn), D("AudiencesFetchedConditionsResolver", Nn), D("HttpClient", br), D("AudienceMembershipProvider", kn), D("CdpAudienceVariableCollector", Jr), D("MetadataGenerator", wr), D("MetadataProvider", Cr)
                }(), N("Initializer").init()
        }()
}();