(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var k;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = ca(this);

    function n(a, b) {
        if (b) a: {
            var c = ea;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    n("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.h = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.h
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    });
    n("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return fa(aa(this))
                }
            })
        }
        return a
    });

    function fa(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function ha(a) {
        return a.raw = a
    }

    function t(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (b) return b.call(a);
        if ("number" == typeof a.length) return {
            next: aa(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }

    function ia(a) {
        if (!(a instanceof Array)) {
            a = t(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }

    function ka(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var la = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) ka(d, e) && (a[e] = d[e])
        }
        return a
    };
    n("Object.assign", function(a) {
        return a || la
    });
    var oa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        pa;
    if ("function" == typeof Object.setPrototypeOf) pa = Object.setPrototypeOf;
    else {
        var qa;
        a: {
            var ra = {
                    a: !0
                },
                sa = {};
            try {
                sa.__proto__ = ra;
                qa = sa.a;
                break a
            } catch (a) {}
            qa = !1
        }
        pa = qa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ta = pa;

    function v(a, b) {
        a.prototype = oa(b.prototype);
        a.prototype.constructor = a;
        if (ta) ta(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.xa = b.prototype
    }

    function va() {
        this.v = !1;
        this.l = null;
        this.i = void 0;
        this.h = 1;
        this.m = this.s = 0;
        this.Ca = this.j = null
    }

    function wa(a) {
        if (a.v) throw new TypeError("Generator is already running");
        a.v = !0
    }
    va.prototype.ga = function(a) {
        this.i = a
    };

    function za(a, b) {
        a.j = {
            exception: b,
            pd: !0
        };
        a.h = a.s || a.m
    }
    va.prototype.return = function(a) {
        this.j = {
            return: a
        };
        this.h = this.m
    };
    va.prototype.yield = function(a, b) {
        this.h = b;
        return {
            value: a
        }
    };
    va.prototype.A = function(a) {
        this.h = a
    };

    function Aa(a, b, c) {
        a.s = b;
        void 0 != c && (a.m = c)
    }

    function Ba(a, b) {
        a.h = b;
        a.s = 0
    }

    function Ca(a) {
        a.s = 0;
        var b = a.j.exception;
        a.j = null;
        return b
    }

    function Da(a) {
        a.Ca = [a.j];
        a.s = 0;
        a.m = 0
    }

    function Ea(a) {
        var b = a.Ca.splice(0)[0];
        (b = a.j = a.j || b) ? b.pd ? a.h = a.s || a.m : void 0 != b.A && a.m < b.A ? (a.h = b.A, a.j = null) : a.h = a.m: a.h = 0
    }

    function Fa(a) {
        this.h = new va;
        this.i = a
    }

    function Ga(a, b) {
        wa(a.h);
        var c = a.h.l;
        if (c) return Ha(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.h.return);
        a.h.return(b);
        return Ia(a)
    }

    function Ha(a, b, c, d) {
        try {
            var e = b.call(a.h.l, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.h.v = !1, e;
            var f = e.value
        } catch (g) {
            return a.h.l = null, za(a.h, g), Ia(a)
        }
        a.h.l = null;
        d.call(a.h, f);
        return Ia(a)
    }

    function Ia(a) {
        for (; a.h.h;) try {
            var b = a.i(a.h);
            if (b) return a.h.v = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.h.i = void 0, za(a.h, c)
        }
        a.h.v = !1;
        if (a.h.j) {
            b = a.h.j;
            a.h.j = null;
            if (b.pd) throw b.exception;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }

    function Ja(a) {
        this.next = function(b) {
            wa(a.h);
            a.h.l ? b = Ha(a, a.h.l.next, b, a.h.ga) : (a.h.ga(b), b = Ia(a));
            return b
        };
        this.throw = function(b) {
            wa(a.h);
            a.h.l ? b = Ha(a, a.h.l["throw"], b, a.h.ga) : (za(a.h, b), b = Ia(a));
            return b
        };
        this.return = function(b) {
            return Ga(a, b)
        };
        this[Symbol.iterator] = function() {
            return this
        }
    }

    function La(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    }

    function w(a) {
        return La(new Ja(new Fa(a)))
    }

    function Ma() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    n("Reflect.setPrototypeOf", function(a) {
        return a ? a : ta ? function(b, c) {
            try {
                return ta(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    });
    n("Promise", function(a) {
        function b(g) {
            this.h = 0;
            this.j = void 0;
            this.i = [];
            this.v = !1;
            var h = this.l();
            try {
                g(h.resolve, h.reject)
            } catch (l) {
                h.reject(l)
            }
        }

        function c() {
            this.h = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.i = function(g) {
            if (null == this.h) {
                this.h = [];
                var h = this;
                this.j(function() {
                    h.m()
                })
            }
            this.h.push(g)
        };
        var e = ea.setTimeout;
        c.prototype.j = function(g) {
            e(g, 0)
        };
        c.prototype.m = function() {
            for (; this.h && this.h.length;) {
                var g = this.h;
                this.h = [];
                for (var h = 0; h < g.length; ++h) {
                    var l = g[h];
                    g[h] = null;
                    try {
                        l()
                    } catch (m) {
                        this.l(m)
                    }
                }
            }
            this.h = null
        };
        c.prototype.l = function(g) {
            this.j(function() {
                throw g;
            })
        };
        b.prototype.l = function() {
            function g(m) {
                return function(p) {
                    l || (l = !0, m.call(h, p))
                }
            }
            var h = this,
                l = !1;
            return {
                resolve: g(this.W),
                reject: g(this.m)
            }
        };
        b.prototype.W = function(g) {
            if (g === this) this.m(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.aa(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.T(g) : this.s(g)
            }
        };
        b.prototype.T = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (l) {
                this.m(l);
                return
            }
            "function" == typeof h ? this.da(h, g) : this.s(g)
        };
        b.prototype.m = function(g) {
            this.ga(2, g)
        };
        b.prototype.s = function(g) {
            this.ga(1, g)
        };
        b.prototype.ga = function(g, h) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
            this.h = g;
            this.j = h;
            2 === this.h && this.Z();
            this.Ca()
        };
        b.prototype.Z = function() {
            var g = this;
            e(function() {
                if (g.M()) {
                    var h = ea.console;
                    "undefined" !== typeof h && h.error(g.j)
                }
            }, 1)
        };
        b.prototype.M = function() {
            if (this.v) return !1;
            var g = ea.CustomEvent,
                h = ea.Event,
                l = ea.dispatchEvent;
            if ("undefined" === typeof l) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = ea.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.j;
            return l(g)
        };
        b.prototype.Ca = function() {
            if (null != this.i) {
                for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
                this.i = null
            }
        };
        var f = new c;
        b.prototype.aa = function(g) {
            var h = this.l();
            g.Yb(h.resolve, h.reject)
        };
        b.prototype.da = function(g, h) {
            var l = this.l();
            try {
                g.call(h, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        };
        b.prototype.then = function(g, h) {
            function l(y, u) {
                return "function" == typeof y ? function(z) {
                    try {
                        m(y(z))
                    } catch (D) {
                        p(D)
                    }
                } : u
            }
            var m, p, r = new b(function(y, u) {
                m = y;
                p = u
            });
            this.Yb(l(g, m), l(h, p));
            return r
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.Yb = function(g, h) {
            function l() {
                switch (m.h) {
                    case 1:
                        g(m.j);
                        break;
                    case 2:
                        h(m.j);
                        break;
                    default:
                        throw Error("Unexpected state: " + m.h);
                }
            }
            var m = this;
            null == this.i ? f.i(l) : this.i.push(l);
            this.v = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, l) {
                l(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, l) {
                for (var m = t(g), p = m.next(); !p.done; p = m.next()) d(p.value).Yb(h, l)
            })
        };
        b.all = function(g) {
            var h = t(g),
                l = h.next();
            return l.done ? d([]) : new b(function(m, p) {
                function r(z) {
                    return function(D) {
                        y[z] = D;
                        u--;
                        0 == u && m(y)
                    }
                }
                var y = [],
                    u = 0;
                do y.push(void 0), u++, d(l.value).Yb(r(y.length - 1), p), l = h.next(); while (!l.done)
            })
        };
        return b
    });
    n("WeakMap", function(a) {
        function b(l) {
            this.h = (h += Math.random() + 1).toString();
            if (l) {
                l = t(l);
                for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
            }
        }

        function c() {}

        function d(l) {
            var m = typeof l;
            return "object" === m && null !== l || "function" === m
        }

        function e(l) {
            if (!ka(l, g)) {
                var m = new c;
                ba(l, g, {
                    value: m
                })
            }
        }

        function f(l) {
            var m = Object[l];
            m && (Object[l] = function(p) {
                if (p instanceof c) return p;
                Object.isExtensible(p) && e(p);
                return m(p)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}),
                        m = Object.seal({}),
                        p = new a([
                            [l, 2],
                            [m, 3]
                        ]);
                    if (2 != p.get(l) || 3 != p.get(m)) return !1;
                    p.delete(l);
                    p.set(m, 4);
                    return !p.has(l) && 4 == p.get(m)
                } catch (r) {
                    return !1
                }
            }()) return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var h = 0;
        b.prototype.set = function(l, m) {
            if (!d(l)) throw Error("Invalid WeakMap key");
            e(l);
            if (!ka(l, g)) throw Error("WeakMap key fail: " + l);
            l[g][this.h] = m;
            return this
        };
        b.prototype.get = function(l) {
            return d(l) && ka(l, g) ? l[g][this.h] : void 0
        };
        b.prototype.has = function(l) {
            return d(l) && ka(l, g) && ka(l[g], this.h)
        };
        b.prototype.delete = function(l) {
            return d(l) && ka(l, g) && ka(l[g], this.h) ? delete l[g][this.h] : !1
        };
        return b
    });
    n("Map", function(a) {
        function b() {
            var h = {};
            return h.previous = h.next = h.head = h
        }

        function c(h, l) {
            var m = h.h;
            return fa(function() {
                if (m) {
                    for (; m.head != h.h;) m = m.previous;
                    for (; m.next != m.head;) return m = m.next, {
                        done: !1,
                        value: l(m)
                    };
                    m = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, l) {
            var m = l && typeof l;
            "object" == m || "function" == m ? f.has(l) ? m = f.get(l) : (m = "" + ++g, f.set(l, m)) : m = "p_" + l;
            var p = h.data_[m];
            if (p && ka(h.data_, m))
                for (h = 0; h < p.length; h++) {
                    var r = p[h];
                    if (l !== l && r.key !== r.key || l === r.key) return {
                        id: m,
                        list: p,
                        index: h,
                        entry: r
                    }
                }
            return {
                id: m,
                list: p,
                index: -1,
                entry: void 0
            }
        }

        function e(h) {
            this.data_ = {};
            this.h = b();
            this.size = 0;
            if (h) {
                h = t(h);
                for (var l; !(l = h.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        l = new a(t([
                            [h, "s"]
                        ]));
                    if ("s" != l.get(h) || 1 != l.size || l.get({
                            x: 4
                        }) || l.set({
                            x: 4
                        }, "t") != l || 2 != l.size) return !1;
                    var m = l.entries(),
                        p = m.next();
                    if (p.done || p.value[0] != h || "s" != p.value[1]) return !1;
                    p = m.next();
                    return p.done || 4 != p.value[0].x || "t" != p.value[1] || !m.next().done ? !1 : !0
                } catch (r) {
                    return !1
                }
            }()) return a;
        var f = new WeakMap;
        e.prototype.set = function(h, l) {
            h = 0 === h ? 0 : h;
            var m = d(this, h);
            m.list || (m.list = this.data_[m.id] = []);
            m.entry ? m.entry.value = l : (m.entry = {
                next: this.h,
                previous: this.h.previous,
                head: this.h,
                key: h,
                value: l
            }, m.list.push(m.entry), this.h.previous.next = m.entry, this.h.previous = m.entry, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.entry && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.data_[h.id], h.entry.previous.next = h.entry.next, h.entry.next.previous = h.entry.previous, h.entry.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.data_ = {};
            this.h = this.h.previous = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).entry
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).entry) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, l) {
            for (var m = this.entries(), p; !(p = m.next()).done;) p = p.value, h.call(l, p[1], p[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });

    function Na(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    n("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Na(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    n("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    n("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Na(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    n("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    n("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    n("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });

    function Oa(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    }
    n("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Oa(this, function(b, c) {
                return [b, c]
            })
        }
    });
    n("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Oa(this, function(b) {
                return b
            })
        }
    });
    n("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    n("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    n("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Oa(this, function(b, c) {
                return c
            })
        }
    });
    n("Object.setPrototypeOf", function(a) {
        return a || ta
    });
    n("Set", function(a) {
        function b(c) {
            this.h = new Map;
            if (c) {
                c = t(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(t([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return this.h.entries()
        };
        b.prototype.values = function() {
            return this.h.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    n("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ka(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    n("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    n("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    n("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Na(this, b, "includes").indexOf(b, c || 0)
        }
    });
    n("globalThis", function(a) {
        return a || ea
    });
    n("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ka(b, d) && c.push(b[d]);
            return c
        }
    });
    var Pa = Pa || {},
        x = this || self;

    function A(a, b, c) {
        a = a.split(".");
        c = c || x;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function B(a, b) {
        a = a.split(".");
        b = b || x;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function Qa(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function Ra(a) {
        var b = Qa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Sa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Ta(a) {
        return Object.prototype.hasOwnProperty.call(a, Ua) && a[Ua] || (a[Ua] = ++Va)
    }
    var Ua = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Va = 0;

    function Wa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Xa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ya(a, b, c) {
        Ya = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Wa : Xa;
        return Ya.apply(null, arguments)
    }

    function Za(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function $a(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.xa = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.base = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function ab(a) {
        return a
    };

    function bb(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, bb);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    $a(bb, Error);
    bb.prototype.name = "CustomError";

    function cb(a) {
        a = a.url;
        var b = /[?&]dsh=1(&|$)/.test(a);
        this.j = !b && /[?&]ae=1(&|$)/.test(a);
        this.l = !b && /[?&]ae=2(&|$)/.test(a);
        if ((this.h = /[?&]adurl=([^&]*)/.exec(a)) && this.h[1]) {
            try {
                var c = decodeURIComponent(this.h[1])
            } catch (d) {
                c = null
            }
            this.i = c
        }
    };

    function db() {}

    function eb(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var fb = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        gb = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        hb = Array.prototype.filter ? function(a, b) {
            return Array.prototype.filter.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        },
        ib = Array.prototype.reduce ? function(a, b, c) {
            return Array.prototype.reduce.call(a, b, c)
        } : function(a, b, c) {
            var d = c;
            gb(a, function(e, f) {
                d = b.call(void 0, d, e, f, a)
            });
            return d
        };

    function jb(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function kb(a, b) {
        b = fb(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function lb(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (Ra(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    };

    function mb(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }

    function nb(a) {
        var b = ob,
            c;
        for (c in b)
            if (a.call(void 0, b[c], c, b)) return c
    }

    function pb(a, b) {
        if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = !0
    }

    function qb(a) {
        return null !== a && "privembed" in a ? a.privembed : !1
    }

    function rb(a, b) {
        for (var c in a)
            if (!(c in b) || a[c] !== b[c]) return !1;
        for (var d in b)
            if (!(d in a)) return !1;
        return !0
    }

    function sb(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }

    function tb(a) {
        if (!a || "object" !== typeof a) return a;
        if ("function" === typeof a.clone) return a.clone();
        if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
        if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
        if (a instanceof Date) return new Date(a.getTime());
        var b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length),
            c;
        for (c in a) b[c] = tb(a[c]);
        return b
    }
    var ub = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function vb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < ub.length; f++) c = ub[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var wb;

    function xb() {
        if (void 0 === wb) {
            var a = null,
                b = x.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ab,
                        createScript: ab,
                        createScriptURL: ab
                    })
                } catch (c) {
                    x.console && x.console.error(c.message)
                }
                wb = a
            } else wb = a
        }
        return wb
    };

    function yb(a, b) {
        this.j = a === zb && b || ""
    }
    yb.prototype.i = !0;
    yb.prototype.h = function() {
        return this.j
    };

    function Ab(a) {
        return new yb(zb, a)
    }
    var zb = {};
    Ab("");
    var Bb = {};

    function Cb(a) {
        this.j = a;
        this.i = !0
    }
    Cb.prototype.toString = function() {
        return this.j.toString()
    };
    Cb.prototype.h = function() {
        return this.j.toString()
    };

    function Db(a) {
        this.j = a
    }
    Db.prototype.toString = function() {
        return this.j + ""
    };
    Db.prototype.i = !0;
    Db.prototype.h = function() {
        return this.j.toString()
    };

    function Eb(a) {
        if (a instanceof Db && a.constructor === Db) return a.j;
        Qa(a);
        return "type_error:TrustedResourceUrl"
    }
    var Fb = {};

    function Gb(a) {
        var b = xb();
        a = b ? b.createScriptURL(a) : a;
        return new Db(a, Fb)
    };
    var Hb = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };

    function Ib(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    }

    function Jb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Kb(a) {
        this.j = a
    }
    Kb.prototype.toString = function() {
        return this.j.toString()
    };
    Kb.prototype.i = !0;
    Kb.prototype.h = function() {
        return this.j.toString()
    };

    function Lb(a) {
        if (a instanceof Kb && a.constructor === Kb) return a.j;
        Qa(a);
        return "type_error:SafeUrl"
    }
    var Mb;
    try {
        new URL("s://g"), Mb = !0
    } catch (a) {
        Mb = !1
    }
    var Nb = Mb;

    function Ob(a) {
        if (a instanceof Kb) return a;
        a = "object" == typeof a && a.i ? a.h() : String(a);
        a: {
            var b = a;
            if (Nb) {
                try {
                    var c = new URL(b)
                } catch (d) {
                    b = "https:";
                    break a
                }
                b = c.protocol
            } else b: {
                c = document.createElement("a");
                try {
                    c.href = b
                } catch (d) {
                    b = void 0;
                    break b
                }
                b = c.protocol;b = ":" === b || "" === b ? "https:" : b
            }
        }
        "javascript:" !== b || (a = "about:invalid#zClosurez");
        return new Kb(a, Pb)
    }
    var Pb = {},
        Qb = new Kb("about:invalid#zClosurez", Pb);
    var Tb, Ub = B("CLOSURE_FLAGS"),
        Vb = Ub && Ub[610401301];
    Tb = null != Vb ? Vb : !1;

    function Wb() {
        var a = x.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Xb, Yb = x.navigator;
    Xb = Yb ? Yb.userAgentData || null : null;

    function Zb(a) {
        return Tb ? Xb ? Xb.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }

    function C(a) {
        return -1 != Wb().indexOf(a)
    };

    function $b() {
        return Tb ? !!Xb && 0 < Xb.brands.length : !1
    }

    function ac() {
        return $b() ? !1 : C("Opera")
    }

    function bc() {
        return $b() ? !1 : C("Trident") || C("MSIE")
    }

    function cc() {
        return $b() ? !1 : C("Edge")
    }

    function dc() {
        return $b() ? Zb("Microsoft Edge") : C("Edg/")
    }

    function ec() {
        return C("Firefox") || C("FxiOS")
    }

    function fc() {
        return C("Safari") && !(hc() || ($b() ? 0 : C("Coast")) || ac() || cc() || dc() || ($b() ? Zb("Opera") : C("OPR")) || ec() || C("Silk") || C("Android"))
    }

    function hc() {
        return $b() ? Zb("Chromium") : (C("Chrome") || C("CriOS")) && !cc() || C("Silk")
    }

    function ic() {
        return C("Android") && !(hc() || ec() || ac() || C("Silk"))
    }

    function jc(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[c.find(function(d) {
                return d in b
            })] || ""
        }
    }

    function kc(a) {
        var b = Wb();
        if ("Internet Explorer" === a) {
            if (bc())
                if ((a = /rv: *([\d\.]*)/.exec(b)) && a[1]) b = a[1];
                else {
                    a = "";
                    var c = /MSIE +([\d\.]+)/.exec(b);
                    if (c && c[1])
                        if (b = /Trident\/(\d.\d)/.exec(b), "7.0" == c[1])
                            if (b && b[1]) switch (b[1]) {
                                case "4.0":
                                    a = "8.0";
                                    break;
                                case "5.0":
                                    a = "9.0";
                                    break;
                                case "6.0":
                                    a = "10.0";
                                    break;
                                case "7.0":
                                    a = "11.0"
                            } else a = "7.0";
                            else a = c[1];
                    b = a
                }
            else b = "";
            return b
        }
        var d = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        c = [];
        for (var e; e = d.exec(b);) c.push([e[1], e[2], e[3] || void 0]);
        b = jc(c);
        switch (a) {
            case "Opera":
                if (ac()) return b(["Version", "Opera"]);
                if ($b() ? Zb("Opera") : C("OPR")) return b(["OPR"]);
                break;
            case "Microsoft Edge":
                if (cc()) return b(["Edge"]);
                if (dc()) return b(["Edg"]);
                break;
            case "Chromium":
                if (hc()) return b(["Chrome", "CriOS", "HeadlessChrome"])
        }
        return "Firefox" === a && ec() || "Safari" === a && fc() || "Android Browser" === a && ic() || "Silk" === a && C("Silk") ? (b = c[2]) && b[1] || "" : ""
    }

    function lc(a) {
        if ($b() && "Silk" !== a) {
            var b = Xb.brands.find(function(c) {
                return c.brand === a
            });
            if (!b || !b.version) return NaN;
            b = b.version.split(".")
        } else {
            b = kc(a);
            if ("" === b) return NaN;
            b = b.split(".")
        }
        return 0 === b.length ? NaN : Number(b[0])
    };

    function mc(a) {
        this.j = a;
        this.i = !0
    }
    mc.prototype.h = function() {
        return this.j.toString()
    };
    mc.prototype.toString = function() {
        return this.j.toString()
    };

    function nc(a, b) {
        b = b instanceof Kb ? b : Ob(b);
        a.href = Lb(b)
    }

    function oc(a, b) {
        a.rel = "stylesheet";
        Ib("stylesheet", "stylesheet") ? (a.href = Eb(b).toString(), (b = pc('style[nonce],link[rel="stylesheet"][nonce]', a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b)) : a.href = b instanceof Db ? Eb(b).toString() : b instanceof Kb ? Lb(b) : Lb(Ob(b))
    }

    function qc() {
        return pc("script[nonce]")
    }
    var sc = /^[\w+/_-]+[=]{0,2}$/;

    function pc(a, b) {
        b = (b || x).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && sc.test(a) ? a : "" : ""
    };

    function tc(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    };
    var uc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function vc(a) {
        return a ? decodeURI(a) : a
    }

    function wc(a, b) {
        return b.match(uc)[a] || null
    }

    function xc(a) {
        return vc(wc(3, a))
    }

    function yc(a) {
        var b = a.match(uc);
        a = b[5];
        var c = b[6];
        b = b[7];
        var d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d
    }

    function zc(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.slice(0, d), e, a.slice(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }

    function Ac(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Ac(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }

    function Bc(a, b) {
        var c = [];
        for (b = b || 0; b < a.length; b += 2) Ac(a[b], a[b + 1], c);
        return c.join("&")
    }

    function Cc(a) {
        var b = [],
            c;
        for (c in a) Ac(c, a[c], b);
        return b.join("&")
    }

    function Dc(a, b) {
        var c = 2 == arguments.length ? Bc(arguments[1], 0) : Bc(arguments, 1);
        return zc(a, c)
    }

    function Ec(a, b) {
        b = Cc(b);
        return zc(a, b)
    }

    function Fc(a, b, c) {
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        return zc(a, b + c)
    }

    function Gc(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var Hc = /#|$/,
        Ic = /[?&]($|#)/;

    function Jc(a, b) {
        for (var c = a.search(Hc), d = 0, e, f = []; 0 <= (e = Gc(a, d, b, c));) f.push(a.substring(d, e)), d = Math.min(a.indexOf("&", e) + 1 || c, c);
        f.push(a.slice(d));
        return f.join("").replace(Ic, "$1")
    };

    function Kc(a) {
        x.setTimeout(function() {
            throw a;
        }, 0)
    };

    function Lc() {
        return Tb ? !!Xb && !!Xb.platform : !1
    }

    function Mc() {
        return Lc() ? "Android" === Xb.platform : C("Android")
    }

    function Nc() {
        return C("iPhone") && !C("iPod") && !C("iPad")
    }

    function Oc() {
        return Nc() || C("iPad") || C("iPod")
    }

    function Pc() {
        return Lc() ? "macOS" === Xb.platform : C("Macintosh")
    }

    function Qc() {
        return Lc() ? "Windows" === Xb.platform : C("Windows")
    }

    function Rc() {
        return Lc() ? "Chrome OS" === Xb.platform : C("CrOS")
    }

    function Sc() {
        var a = Wb(),
            b = "";
        Qc() ? (b = /Windows (?:NT|Phone) ([0-9.]+)/, b = (a = b.exec(a)) ? a[1] : "0.0") : Oc() ? (b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, b = (a = b.exec(a)) && a[1].replace(/_/g, ".")) : Pc() ? (b = /Mac OS X ([0-9_.]+)/, b = (a = b.exec(a)) ? a[1].replace(/_/g, ".") : "10") : Ib(Wb(), "KaiOS") ? (b = /(?:KaiOS)\/(\S+)/i, b = (a = b.exec(a)) && a[1]) : Mc() ? (b = /Android\s+([^\);]+)(\)|;)/, b = (a = b.exec(a)) && a[1]) : Rc() && (b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, b = (a = b.exec(a)) && a[1]);
        a = 0;
        b = Hb(String(b || "")).split(".");
        for (var c =
                Hb("12").split("."), d = Math.max(b.length, c.length), e = 0; 0 == a && e < d; e++) {
            var f = b[e] || "",
                g = c[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                a = Jb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Jb(0 == f[2].length, 0 == g[2].length) || Jb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == a)
        }
    };

    function Tc(a) {
        Tc[" "](a);
        return a
    }
    Tc[" "] = function() {};
    var Uc = ac(),
        Vc = bc(),
        ad = C("Edge"),
        bd = C("Gecko") && !(Ib(Wb(), "WebKit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        cd = Ib(Wb(), "WebKit") && !C("Edge");
    cd && C("Mobile");
    Pc();
    Qc();
    (Lc() ? "Linux" === Xb.platform : C("Linux")) || Rc();
    var dd = x.navigator || null;
    dd && (dd.appVersion || "").indexOf("X11");
    var ed = Mc();
    Nc();
    C("iPad");
    C("iPod");
    Oc();
    Ib(Wb(), "KaiOS");

    function fd() {
        var a = x.document;
        return a ? a.documentMode : void 0
    }
    var gd;
    a: {
        var hd = "",
            id = function() {
                var a = Wb();
                if (bd) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (ad) return /Edge\/([\d\.]+)/.exec(a);
                if (Vc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (cd) return /WebKit\/(\S+)/.exec(a);
                if (Uc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        id && (hd = id ? id[1] : "");
        if (Vc) {
            var jd = fd();
            if (null != jd && jd > parseFloat(hd)) {
                gd = String(jd);
                break a
            }
        }
        gd = hd
    }
    var kd = gd,
        ld;
    if (x.document && Vc) {
        var md = fd();
        ld = md ? md : parseInt(kd, 10) || void 0
    } else ld = void 0;
    var nd = ld;
    ec();
    var od = Nc() || C("iPod"),
        pd = C("iPad");
    ic();
    hc();
    var qd = fc() && !Oc();
    var rd = {},
        sd = null;

    function td(a, b) {
        Ra(a);
        void 0 === b && (b = 0);
        if (!sd) {
            sd = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                rd[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === sd[h] && (sd[h] = g)
                }
            }
        }
        b = rd[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var l = a[f],
                m = a[f + 1];
            h = a[f + 2];
            g = b[l >> 2];
            l = b[(l & 3) << 4 | m >> 4];
            m = b[(m & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[e++] = "" + g + l + m + h
        }
        g = 0;
        h = d;
        switch (a.length -
            f) {
            case 2:
                g = a[f + 1], h = b[(g & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };
    var ud = "undefined" !== typeof Uint8Array,
        vd = !Vc && "function" === typeof btoa;
    var wd = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;

    function xd(a, b) {
        if (wd) return a[wd] |= b;
        if (void 0 !== a.Ga) return a.Ga |= b;
        Object.defineProperties(a, {
            Ga: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function yd(a, b) {
        wd ? a[wd] && (a[wd] &= ~b) : void 0 !== a.Ga && (a.Ga &= ~b)
    }

    function E(a) {
        var b;
        wd ? b = a[wd] : b = a.Ga;
        return null == b ? 0 : b
    }

    function zd(a, b) {
        wd ? a[wd] = b : void 0 !== a.Ga ? a.Ga = b : Object.defineProperties(a, {
            Ga: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return a
    }

    function Ad(a, b) {
        Object.isFrozen(a) && (a = Array.prototype.slice.call(a));
        zd(a, b);
        return a
    }

    function Bd(a) {
        xd(a, 1);
        return a
    }

    function Cd(a, b) {
        zd(b, (a | 0) & -51)
    }

    function Dd(a, b) {
        zd(b, (a | 18) & -41)
    };
    var Ed = {};

    function Fd(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var Gd, Hd = Object.freeze(zd([], 23));

    function Id(a) {
        if (E(a.V) & 2) throw Error();
    };

    function Jd(a) {
        if (null != a && "number" !== typeof a) throw Error("Value of float/double field must be a number|null|undefined, found " + typeof a + ": " + a);
        return a
    }

    function Kd(a) {
        return a.displayName || a.name || "unknown type name"
    }

    function Ld(a, b) {
        if (!(a instanceof b)) throw Error("Expected instanceof " + Kd(b) + " but got " + (a && Kd(a.constructor)));
        return a
    }

    function Md(a, b, c) {
        var d = !1;
        if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.Ic === Ed) return a;
        if (d) {
            var e = d = E(a);
            0 === e && (e |= c & 16);
            e |= c & 2;
            e !== d && zd(a, e);
            return new b(a)
        }
    };

    function Nd(a) {
        var b = a.i + a.h;
        return a.Pa || (a.Pa = a.V[b] = {})
    }

    function Od(a, b, c) {
        return -1 === b ? null : b >= a.i ? a.Pa ? a.Pa[b] : void 0 : c && a.Pa && (c = a.Pa[b], null != c) ? c : a.V[b + a.h]
    }

    function F(a, b, c, d) {
        Id(a);
        return Pd(a, b, c, d)
    }

    function Pd(a, b, c, d) {
        a.j && (a.j = void 0);
        if (b >= a.i || d) return Nd(a)[b] = c, a;
        a.V[b + a.h] = c;
        (c = a.Pa) && b in c && delete c[b];
        return a
    }

    function Td(a) {
        return void 0 !== Ud(a, Vd, 11, !1)
    }

    function Wd(a, b, c, d, e) {
        var f = Od(a, b, d);
        Array.isArray(f) || (f = Hd);
        var g = E(f);
        g & 1 || Bd(f);
        if (e) g & 2 || xd(f, 18), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            var h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && yd(f, 16) : (f = Bd(Array.prototype.slice.call(f)), Pd(a, b, f, d))
        }
        return f
    }

    function Xd(a, b, c, d) {
        Id(a);
        (c = Yd(a, c)) && c !== b && null != d && Pd(a, c, void 0, !1);
        return Pd(a, b, d)
    }

    function Yd(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != Od(a, e) && (0 !== c && Pd(a, c, void 0, !1), c = e)
        }
        return c
    }

    function Ud(a, b, c, d) {
        var e = Od(a, c, d);
        b = Md(e, b, E(a.V));
        b !== e && null != b && Pd(a, c, b, d);
        return b
    }

    function Zd(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        b = Ud(a, b, c, d);
        if (null == b) return b;
        if (!(E(a.V) & 2)) {
            var e = $d(b);
            e !== b && (b = e, Pd(a, c, b, d))
        }
        return b
    }

    function ae(a, b, c, d, e) {
        var f = !!(e & 2),
            g = Wd(a, c, 1, void 0, f);
        if (g === Hd || !(E(g) & 4)) {
            var h = g;
            g = !!(e & 2);
            var l = !!(E(h) & 2);
            f = h;
            !g && l && (h = Array.prototype.slice.call(h));
            e |= l ? 2 : 0;
            for (var m = 0, p = 0; m < h.length; m++) {
                var r = Md(h[m], b, e);
                void 0 !== r && (l = l || !!(2 & E(r.V)), h[p++] = r)
            }
            p < m && (h.length = p);
            b = h;
            e = !l;
            h = E(b);
            l = h | 5;
            e = e ? l | 8 : l & -9;
            h != e && (b = Ad(b, e));
            h = b;
            f !== h && Pd(a, c, h);
            (g || 1 === d) && Object.freeze(h);
            return h
        }
        if (3 === d) return g;
        f || (f = Object.isFrozen(g), 1 === d ? f || Object.freeze(g) : (d = E(g), b = d & -19, f && (g = Array.prototype.slice.call(g),
            d = 0, Pd(a, c, g)), d !== b && zd(g, b)));
        return g
    }

    function H(a, b, c, d) {
        Id(a);
        null != d ? Ld(d, b) : d = void 0;
        return Pd(a, c, d)
    }

    function be(a, b, c, d, e) {
        Id(a);
        null != e ? Ld(e, b) : e = void 0;
        Xd(a, c, d, e)
    }

    function ce(a, b, c, d) {
        Id(a);
        if (null != d) {
            for (var e = !!d.length, f = 0; f < d.length; f++) {
                var g = d[f];
                Ld(g, b);
                e = e && !(E(g.V) & 2)
            }
            b = E(d);
            f = b | 1;
            f = (e ? f | 8 : f & -9) | 4;
            f != b && (d = Ad(d, f))
        }
        null == d && (d = Hd);
        return Pd(a, c, d)
    }

    function de(a, b, c, d) {
        var e = E(a.V);
        if (e & 2) throw Error();
        a = ae(a, c, b, 2, e);
        c = null != d ? Ld(d, c) : new c;
        a.push(c);
        E(c.V) & 2 && yd(a, 8)
    }

    function ee(a, b, c) {
        Qa(c);
        F(a, b, c)
    }

    function fe() {
        var a = new ge;
        return F(a, 1, 1)
    }

    function he(a, b) {
        return null == a ? b : a
    }

    function ie(a, b) {
        return he(Od(a, b), "")
    };
    var je;

    function ke(a, b) {
        return le(b)
    }

    function le(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a && !Array.isArray(a) && ud && null != a && a instanceof Uint8Array) {
                    if (vd) {
                        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        a = btoa(b)
                    } else a = td(a);
                    return a
                }
        }
        return a
    };

    function me(a, b) {
        var c = a.V,
            d = c.length,
            e = [];
        xd(e, 16);
        var f = a.constructor.i;
        f && e.push(f);
        var g = a.Pa;
        if (g) {
            e.length = d;
            var h = {};
            e[d - 1] = h
        }
        var l = a.constructor;
        E(e);
        je = e;
        l = new l(e);
        je = void 0;
        a.od && (l.od = a.od.slice());
        a = g ? d - 1 : d;
        for (f = f ? 1 : 0; f < a; f++) e[f] = b(c[f]);
        if (g)
            for (var m in g) h[m] = b(g[m]);
        return l
    }

    function ne(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && E(a) & 1 ? void 0 : f && E(a) & 2 ? a : oe(a, b, c, void 0 !== d, e, f);
            else if (Fd(a)) {
                var g = {},
                    h;
                for (h in a) g[h] = ne(a[h], b, c, d, e, f);
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function oe(a, b, c, d, e, f) {
        var g = E(a);
        d = d ? !!(g & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var h = 0; h < a.length; h++) a[h] = ne(a[h], b, c, d, e, f);
        c && c(g, a);
        return a
    }

    function pe(a) {
        return a.Ic === Ed ? a.toJSON() : le(a)
    };

    function qe(a, b, c) {
        c = void 0 === c ? Dd : c;
        if (null != a) {
            if (ud && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = E(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return zd(a, d | 18), a;
                a = oe(a, qe, d & 4 ? Dd : c, !0, !1, !0);
                b = E(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            a.Ic === Ed && (E(a.V) & 2 || (a = re(a, !0), xd(a.V, 18)));
            return a
        }
    }

    function re(a, b) {
        var c = a.V,
            d = b || E(a.V) & 2 ? Dd : Cd,
            e = !!(E(c) & 16);
        return me(a, function(f) {
            return qe(f, e, d)
        })
    }

    function $d(a) {
        if (!(E(a.V) & 2)) return a;
        var b = re(a, !1);
        b.j = a;
        return b
    };

    function I(a, b, c) {
        null == a && (a = je);
        je = void 0;
        var d = this.constructor.i;
        if (null == a) {
            a = d ? [d] : [];
            var e = !0;
            zd(a, 48)
        } else {
            if (!Array.isArray(a)) throw Error();
            if (d && d !== a[0]) throw Error();
            var f = xd(a, 0) | 32;
            e = 0 !== (16 & f);
            zd(a, f)
        }
        this.h = d ? 0 : -1;
        this.V = a;
        a: {
            f = this.V.length;d = f - 1;
            if (f && (f = this.V[d], Fd(f))) {
                this.Pa = f;
                this.i = d - this.h;
                break a
            }
            void 0 !== b && -1 < b ? (this.i = Math.max(b, d + 1 - this.h), this.Pa = void 0) : this.i = Number.MAX_VALUE
        }
        if (c) {
            b = e && !0;
            e = this.i;
            var g;
            for (d = 0; d < c.length; d++)
                if (f = c[d], f < e) {
                    f += this.h;
                    var h = a[f];
                    h ? se(h, b) : a[f] = Hd
                } else g || (g = Nd(this)), (h = g[f]) ? se(h, b) : g[f] = Hd
        }
        E(this.V)
    }
    k = I.prototype;
    k.toJSON = function() {
        var a = this.V,
            b;
        Gd ? b = a : b = oe(a, pe, void 0, void 0, !1, !1);
        return b
    };
    k.serialize = function() {
        Gd = !0;
        try {
            return JSON.stringify(this.toJSON(), ke)
        } finally {
            Gd = !1
        }
    };
    k.clone = function() {
        return re(this, !1)
    };

    function se(a, b) {
        if (Array.isArray(a)) {
            var c = E(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && zd(a, c | d)
        }
    }
    k.Ic = Ed;
    k.toString = function() {
        return this.V.toString()
    };

    function te(a) {
        this.bd = a
    };

    function ue(a, b, c) {
        this.i = a;
        this.l = b;
        this.h = c || [];
        this.rb = new Map
    }
    k = ue.prototype;
    k.Td = function(a) {
        var b = Ma.apply(1, arguments),
            c = this.xc(b);
        c ? c.push(new te(a)) : this.Cd(a, b)
    };
    k.Cd = function(a) {
        var b = this.gd(Ma.apply(1, arguments));
        this.rb.set(b, [new te(a)])
    };
    k.xc = function() {
        var a = this.gd(Ma.apply(0, arguments));
        return this.rb.has(a) ? this.rb.get(a) : void 0
    };
    k.ke = function() {
        var a = this.xc(Ma.apply(0, arguments));
        return a && a.length ? a[0] : void 0
    };
    k.clear = function() {
        this.rb.clear()
    };
    k.gd = function() {
        var a = Ma.apply(0, arguments);
        return a ? a.join(",") : "key"
    };

    function ve(a, b) {
        ue.call(this, a, 3, b)
    }
    v(ve, ue);
    ve.prototype.j = function(a) {
        var b = Ma.apply(1, arguments),
            c = 0,
            d = this.ke(b);
        d && (c = d.bd);
        this.Cd(c + a, b)
    };

    function we(a, b) {
        ue.call(this, a, 2, b)
    }
    v(we, ue);
    we.prototype.record = function(a) {
        this.Td(a, Ma.apply(1, arguments))
    };

    function xe(a) {
        a && "function" == typeof a.dispose && a.dispose()
    };

    function ye(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
            var d = arguments[b];
            Ra(d) ? ye.apply(null, d) : xe(d)
        }
    };

    function J() {
        this.Ca = this.Ca;
        this.ga = this.ga
    }
    J.prototype.Ca = !1;
    J.prototype.h = function() {
        return this.Ca
    };
    J.prototype.dispose = function() {
        this.Ca || (this.Ca = !0, this.K())
    };

    function ze(a, b) {
        Ae(a, Za(xe, b))
    }

    function Ae(a, b) {
        a.Ca ? b() : (a.ga || (a.ga = []), a.ga.push(b))
    }
    J.prototype.K = function() {
        if (this.ga)
            for (; this.ga.length;) this.ga.shift()()
    };

    function Be(a, b) {
        this.type = a;
        this.h = this.target = b;
        this.defaultPrevented = this.j = !1
    }
    Be.prototype.stopPropagation = function() {
        this.j = !0
    };
    Be.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };

    function Ce(a) {
        var b = B("window.location.href");
        null == a && (a = 'Unknown Error of type "null/undefined"');
        if ("string" === typeof a) return {
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: b,
            stack: "Not available"
        };
        var c = !1;
        try {
            var d = a.lineNumber || a.line || "Not available"
        } catch (g) {
            d = "Not available", c = !0
        }
        try {
            var e = a.fileName || a.filename || a.sourceURL || x.$googDebugFname || b
        } catch (g) {
            e = "Not available", c = !0
        }
        b = De(a);
        if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
            c = a.message;
            if (null ==
                c) {
                if (a.constructor && a.constructor instanceof Function) {
                    if (a.constructor.name) c = a.constructor.name;
                    else if (c = a.constructor, Ee[c]) c = Ee[c];
                    else {
                        c = String(c);
                        if (!Ee[c]) {
                            var f = /function\s+([^\(]+)/m.exec(c);
                            Ee[c] = f ? f[1] : "[Anonymous]"
                        }
                        c = Ee[c]
                    }
                    c = 'Unknown Error of type "' + c + '"'
                } else c = "Unknown Error of unknown type";
                "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
            }
            return {
                message: c,
                name: a.name || "UnknownError",
                lineNumber: d,
                fileName: e,
                stack: b || "Not available"
            }
        }
        a.stack =
            b;
        return {
            message: a.message,
            name: a.name,
            lineNumber: a.lineNumber,
            fileName: a.fileName,
            stack: a.stack
        }
    }

    function De(a, b) {
        b || (b = {});
        b[Fe(a)] = !0;
        var c = a.stack || "";
        (a = a.cause) && !b[Fe(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += De(a, b));
        return c
    }

    function Fe(a) {
        var b = "";
        "function" === typeof a.toString && (b = "" + a);
        return b + a.stack
    }
    var Ee = {};
    var Ge = function() {
        if (!x.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            var c = function() {};
            x.addEventListener("test", c, b);
            x.removeEventListener("test", c, b)
        } catch (d) {}
        return a
    }();

    function He(a, b) {
        Be.call(this, a ? a.type : "");
        this.relatedTarget = this.h = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.i = null;
        a && this.init(a, b)
    }
    $a(He, Be);
    var Ie = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    He.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.h = b;
        if (b = a.relatedTarget) {
            if (bd) {
                a: {
                    try {
                        Tc(b.nodeName);
                        var e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY ||
            0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ie[a.pointerType] || "";
        this.state = a.state;
        this.i = a;
        a.defaultPrevented && He.xa.preventDefault.call(this)
    };
    He.prototype.stopPropagation = function() {
        He.xa.stopPropagation.call(this);
        this.i.stopPropagation ? this.i.stopPropagation() : this.i.cancelBubble = !0
    };
    He.prototype.preventDefault = function() {
        He.xa.preventDefault.call(this);
        var a = this.i;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var Je = "closure_listenable_" + (1E6 * Math.random() | 0);
    var Ke = 0;

    function Le(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.dc = e;
        this.key = ++Ke;
        this.Nb = this.Xb = !1
    }

    function Me(a) {
        a.Nb = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.dc = null
    };

    function Ne(a) {
        this.src = a;
        this.listeners = {};
        this.h = 0
    }
    Ne.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.listeners[f];
        a || (a = this.listeners[f] = [], this.h++);
        var g = Oe(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Xb = !1)) : (b = new Le(b, this.src, f, !!d, e), b.Xb = c, a.push(b));
        return b
    };
    Ne.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.listeners)) return !1;
        var e = this.listeners[a];
        b = Oe(e, b, c, d);
        return -1 < b ? (Me(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.listeners[a], this.h--), !0) : !1
    };

    function Pe(a, b) {
        var c = b.type;
        c in a.listeners && kb(a.listeners[c], b) && (Me(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.h--))
    }

    function Oe(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Nb && f.listener == b && f.capture == !!c && f.dc == d) return e
        }
        return -1
    };
    var Qe = "closure_lm_" + (1E6 * Math.random() | 0),
        Re = {},
        Se = 0;

    function Te(a, b, c, d, e) {
        if (d && d.once) Ue(a, b, c, d, e);
        else if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Te(a, b[f], c, d, e);
        else c = Ve(c), a && a[Je] ? a.listen(b, c, Sa(d) ? !!d.capture : !!d, e) : We(a, b, c, !1, d, e)
    }

    function We(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = Sa(e) ? !!e.capture : !!e,
            h = Xe(a);
        h || (a[Qe] = h = new Ne(a));
        c = h.add(b, c, d, g, f);
        if (!c.proxy) {
            d = Ye();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) Ge || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(Ze(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            Se++
        }
    }

    function Ye() {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }
        var b = $e;
        return a
    }

    function Ue(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Ue(a, b[f], c, d, e);
        else c = Ve(c), a && a[Je] ? a.l.add(String(b), c, !0, Sa(d) ? !!d.capture : !!d, e) : We(a, b, c, !0, d, e)
    }

    function af(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) af(a, b[f], c, d, e);
        else(d = Sa(d) ? !!d.capture : !!d, c = Ve(c), a && a[Je]) ? a.l.remove(String(b), c, d, e) : a && (a = Xe(a)) && (b = a.listeners[b.toString()], a = -1, b && (a = Oe(b, c, d, e)), (c = -1 < a ? b[a] : null) && bf(c))
    }

    function bf(a) {
        if ("number" !== typeof a && a && !a.Nb) {
            var b = a.src;
            if (b && b[Je]) Pe(b.l, a);
            else {
                var c = a.type,
                    d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ze(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Se--;
                (c = Xe(b)) ? (Pe(c, a), 0 == c.h && (c.src = null, b[Qe] = null)) : Me(a)
            }
        }
    }

    function Ze(a) {
        return a in Re ? Re[a] : Re[a] = "on" + a
    }

    function $e(a, b) {
        if (a.Nb) a = !0;
        else {
            b = new He(b, this);
            var c = a.listener,
                d = a.dc || a.src;
            a.Xb && bf(a);
            a = c.call(d, b)
        }
        return a
    }

    function Xe(a) {
        a = a[Qe];
        return a instanceof Ne ? a : null
    }
    var cf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Ve(a) {
        if ("function" === typeof a) return a;
        a[cf] || (a[cf] = function(b) {
            return a.handleEvent(b)
        });
        return a[cf]
    };

    function df() {
        J.call(this);
        this.l = new Ne(this);
        this.Pd = this;
        this.Da = null
    }
    $a(df, J);
    df.prototype[Je] = !0;
    k = df.prototype;
    k.addEventListener = function(a, b, c, d) {
        Te(this, a, b, c, d)
    };
    k.removeEventListener = function(a, b, c, d) {
        af(this, a, b, c, d)
    };

    function ef(a, b) {
        var c = a.Da;
        if (c) {
            var d = [];
            for (var e = 1; c; c = c.Da) d.push(c), ++e
        }
        a = a.Pd;
        c = b.type || b;
        "string" === typeof b ? b = new Be(b, a) : b instanceof Be ? b.target = b.target || a : (e = b, b = new Be(c, a), vb(b, e));
        e = !0;
        if (d)
            for (var f = d.length - 1; !b.j && 0 <= f; f--) {
                var g = b.h = d[f];
                e = ff(g, c, !0, b) && e
            }
        b.j || (g = b.h = a, e = ff(g, c, !0, b) && e, b.j || (e = ff(g, c, !1, b) && e));
        if (d)
            for (f = 0; !b.j && f < d.length; f++) g = b.h = d[f], e = ff(g, c, !1, b) && e
    }
    k.K = function() {
        df.xa.K.call(this);
        this.removeAllListeners();
        this.Da = null
    };
    k.listen = function(a, b, c, d) {
        return this.l.add(String(a), b, !1, c, d)
    };
    k.removeAllListeners = function(a) {
        if (this.l) {
            var b = this.l;
            a = a && a.toString();
            var c = 0,
                d;
            for (d in b.listeners)
                if (!a || d == a) {
                    for (var e = b.listeners[d], f = 0; f < e.length; f++) ++c, Me(e[f]);
                    delete b.listeners[d];
                    b.h--
                }
            b = c
        } else b = 0;
        return b
    };

    function ff(a, b, c, d) {
        b = a.l.listeners[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Nb && g.capture == c) {
                var h = g.listener,
                    l = g.dc || g.src;
                g.Xb && Pe(a.l, g);
                e = !1 !== h.call(l, d) && e
            }
        }
        return e && !d.defaultPrevented
    };

    function gf(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    gf.prototype.get = function() {
        if (0 < this.i) {
            this.i--;
            var a = this.h;
            this.h = a.next;
            a.next = null
        } else a = this.j();
        return a
    };

    function hf(a, b) {
        a.l(b);
        100 > a.i && (a.i++, b.next = a.h, a.h = b)
    };

    function jf(a, b) {
        return a + Math.random() * (b - a)
    };

    function pf(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    k = pf.prototype;
    k.clone = function() {
        return new pf(this.x, this.y)
    };
    k.equals = function(a) {
        return a instanceof pf && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    k.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    k.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    k.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    k.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };

    function qf(a, b) {
        this.width = a;
        this.height = b
    }
    k = qf.prototype;
    k.clone = function() {
        return new qf(this.width, this.height)
    };
    k.aspectRatio = function() {
        return this.width / this.height
    };
    k.isEmpty = function() {
        return !(this.width * this.height)
    };
    k.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    k.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    k.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    k.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };

    function rf(a) {
        var b = document;
        return "string" === typeof a ? b.getElementById(a) : a
    }

    function sf(a) {
        var b = document;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    }

    function tf(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    };
    var uf;

    function vf() {
        var a = x.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !C("Presto") && (a = function() {
            var e = sf("IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = Ya(function(l) {
                if (("*" == h || l.origin == h) && l.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !bc()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Zc;
                    c.Zc = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    Zc: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            x.setTimeout(e, 0)
        }
    };

    function wf() {
        this.i = this.h = null
    }
    wf.prototype.add = function(a, b) {
        var c = xf.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    };
    wf.prototype.remove = function() {
        var a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.i = null), a.next = null);
        return a
    };
    var xf = new gf(function() {
        return new yf
    }, function(a) {
        return a.reset()
    });

    function yf() {
        this.next = this.scope = this.fn = null
    }
    yf.prototype.set = function(a, b) {
        this.fn = a;
        this.scope = b;
        this.next = null
    };
    yf.prototype.reset = function() {
        this.next = this.scope = this.fn = null
    };
    var zf, Af = !1,
        Bf = new wf;

    function Cf(a, b) {
        zf || Df();
        Af || (zf(), Af = !0);
        Bf.add(a, b)
    }

    function Df() {
        if (x.Promise && x.Promise.resolve) {
            var a = x.Promise.resolve(void 0);
            zf = function() {
                a.then(Ef)
            }
        } else zf = function() {
            var b = Ef;
            "function" !== typeof x.setImmediate || x.Window && x.Window.prototype && !cc() && x.Window.prototype.setImmediate == x.setImmediate ? (uf || (uf = vf()), uf(b)) : x.setImmediate(b)
        }
    }

    function Ef() {
        for (var a; a = Bf.remove();) {
            try {
                a.fn.call(a.scope)
            } catch (b) {
                Kc(b)
            }
            hf(xf, a)
        }
        Af = !1
    };

    function Ff(a) {
        this.h = 0;
        this.v = void 0;
        this.l = this.i = this.j = null;
        this.m = this.s = !1;
        if (a != db) try {
            var b = this;
            a.call(void 0, function(c) {
                Gf(b, 2, c)
            }, function(c) {
                Gf(b, 3, c)
            })
        } catch (c) {
            Gf(this, 3, c)
        }
    }

    function Hf() {
        this.next = this.context = this.h = this.i = this.child = null;
        this.j = !1
    }
    Hf.prototype.reset = function() {
        this.context = this.h = this.i = this.child = null;
        this.j = !1
    };
    var If = new gf(function() {
        return new Hf
    }, function(a) {
        a.reset()
    });

    function Jf(a, b, c) {
        var d = If.get();
        d.i = a;
        d.h = b;
        d.context = c;
        return d
    }

    function Kf(a) {
        if (a instanceof Ff) return a;
        var b = new Ff(db);
        Gf(b, 2, a);
        return b
    }

    function Lf(a) {
        return new Ff(function(b, c) {
            c(a)
        })
    }

    function Mf(a, b, c) {
        Nf(a, b, c, null) || Cf(Za(b, a))
    }

    function Of(a) {
        return new Ff(function(b) {
            var c = a.length,
                d = [];
            if (c)
                for (var e = function(h, l, m) {
                        c--;
                        d[h] = l ? {
                            fulfilled: !0,
                            value: m
                        } : {
                            fulfilled: !1,
                            reason: m
                        };
                        0 == c && b(d)
                    }, f = 0, g; f < a.length; f++) g = a[f], Mf(g, Za(e, f, !0), Za(e, f, !1));
            else b(d)
        })
    }
    Ff.prototype.then = function(a, b, c) {
        return Pf(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    };
    Ff.prototype.$goog_Thenable = !0;
    k = Ff.prototype;
    k.oc = function(a, b) {
        return Pf(this, null, a, b)
    };
    k.catch = Ff.prototype.oc;
    k.cancel = function(a) {
        if (0 == this.h) {
            var b = new Qf(a);
            Cf(function() {
                Rf(this, b)
            }, this)
        }
    };

    function Rf(a, b) {
        if (0 == a.h)
            if (a.j) {
                var c = a.j;
                if (c.i) {
                    for (var d = 0, e = null, f = null, g = c.i; g && (g.j || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.h && 1 == d ? Rf(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : Sf(c), Tf(c, e, 3, b)))
                }
                a.j = null
            } else Gf(a, 3, b)
    }

    function Uf(a, b) {
        a.i || 2 != a.h && 3 != a.h || Vf(a);
        a.l ? a.l.next = b : a.i = b;
        a.l = b
    }

    function Pf(a, b, c, d) {
        var e = Jf(null, null, null);
        e.child = new Ff(function(f, g) {
            e.i = b ? function(h) {
                try {
                    var l = b.call(d, h);
                    f(l)
                } catch (m) {
                    g(m)
                }
            } : f;
            e.h = c ? function(h) {
                try {
                    var l = c.call(d, h);
                    void 0 === l && h instanceof Qf ? g(h) : f(l)
                } catch (m) {
                    g(m)
                }
            } : g
        });
        e.child.j = a;
        Uf(a, e);
        return e.child
    }
    k.Ye = function(a) {
        this.h = 0;
        Gf(this, 2, a)
    };
    k.Ze = function(a) {
        this.h = 0;
        Gf(this, 3, a)
    };

    function Gf(a, b, c) {
        0 == a.h && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.h = 1, Nf(c, a.Ye, a.Ze, a) || (a.v = c, a.h = b, a.j = null, Vf(a), 3 != b || c instanceof Qf || Wf(a, c)))
    }

    function Nf(a, b, c, d) {
        if (a instanceof Ff) return Uf(a, Jf(b || db, c || null, d)), !0;
        if (a) try {
            var e = !!a.$goog_Thenable
        } catch (g) {
            e = !1
        } else e = !1;
        if (e) return a.then(b, c, d), !0;
        if (Sa(a)) try {
            var f = a.then;
            if ("function" === typeof f) return Xf(a, f, b, c, d), !0
        } catch (g) {
            return c.call(d, g), !0
        }
        return !1
    }

    function Xf(a, b, c, d, e) {
        function f(l) {
            h || (h = !0, d.call(e, l))
        }

        function g(l) {
            h || (h = !0, c.call(e, l))
        }
        var h = !1;
        try {
            b.call(a, g, f)
        } catch (l) {
            f(l)
        }
    }

    function Vf(a) {
        a.s || (a.s = !0, Cf(a.de, a))
    }

    function Sf(a) {
        var b = null;
        a.i && (b = a.i, a.i = b.next, b.next = null);
        a.i || (a.l = null);
        return b
    }
    k.de = function() {
        for (var a; a = Sf(this);) Tf(this, a, this.h, this.v);
        this.s = !1
    };

    function Tf(a, b, c, d) {
        if (3 == c && b.h && !b.j)
            for (; a && a.m; a = a.j) a.m = !1;
        if (b.child) b.child.j = null, Yf(b, c, d);
        else try {
            b.j ? b.i.call(b.context) : Yf(b, c, d)
        } catch (e) {
            Zf.call(null, e)
        }
        hf(If, b)
    }

    function Yf(a, b, c) {
        2 == b ? a.i.call(a.context, c) : a.h && a.h.call(a.context, c)
    }

    function Wf(a, b) {
        a.m = !0;
        Cf(function() {
            a.m && Zf.call(null, b)
        })
    }
    var Zf = Kc;

    function Qf(a) {
        bb.call(this, a)
    }
    $a(Qf, bb);
    Qf.prototype.name = "cancel";

    function $f(a, b) {
        df.call(this);
        this.j = a || 1;
        this.i = b || x;
        this.m = Ya(this.Xe, this);
        this.s = Date.now()
    }
    $a($f, df);
    k = $f.prototype;
    k.enabled = !1;
    k.Ba = null;
    k.setInterval = function(a) {
        this.j = a;
        this.Ba && this.enabled ? (this.stop(), this.start()) : this.Ba && this.stop()
    };
    k.Xe = function() {
        if (this.enabled) {
            var a = Date.now() - this.s;
            0 < a && a < .8 * this.j ? this.Ba = this.i.setTimeout(this.m, this.j - a) : (this.Ba && (this.i.clearTimeout(this.Ba), this.Ba = null), ef(this, "tick"), this.enabled && (this.stop(), this.start()))
        }
    };
    k.start = function() {
        this.enabled = !0;
        this.Ba || (this.Ba = this.i.setTimeout(this.m, this.j), this.s = Date.now())
    };
    k.stop = function() {
        this.enabled = !1;
        this.Ba && (this.i.clearTimeout(this.Ba), this.Ba = null)
    };
    k.K = function() {
        $f.xa.K.call(this);
        this.stop();
        delete this.i
    };

    function ag(a, b, c) {
        if ("function" === typeof a) c && (a = Ya(a, c));
        else if (a && "function" == typeof a.handleEvent) a = Ya(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : x.setTimeout(a, b || 0)
    };

    function bg(a) {
        J.call(this);
        this.M = a;
        this.j = new Map;
        this.v = new Set;
        this.l = 0;
        this.m = 100;
        this.flushInterval = 3E4;
        this.i = new $f(this.flushInterval);
        this.i.listen("tick", this.ob, !1, this);
        ze(this, this.i);
        this.s = !1
    }
    v(bg, J);
    k = bg.prototype;
    k.sendIsolatedPayload = function(a) {
        this.s = a;
        this.m = 1
    };

    function cg(a) {
        a.i.enabled || a.i.start();
        a.l++;
        a.l >= a.m && a.ob()
    }
    k.ob = function() {
        var a = this.j.values();
        a = [].concat(ia(a)).filter(function(b) {
            return b.rb.size
        });
        a.length && this.M.flush(a, this.s);
        dg(a);
        this.l = 0;
        this.i.enabled && this.i.stop()
    };
    k.Vc = function(a) {
        var b = Ma.apply(1, arguments);
        this.j.has(a) || this.j.set(a, new ve(a, b))
    };
    k.Wc = function(a) {
        var b = Ma.apply(1, arguments);
        this.j.has(a) || this.j.set(a, new we(a, b))
    };

    function eg(a, b) {
        return a.v.has(b) ? void 0 : a.j.get(b)
    }
    k.pc = function(a) {
        this.Od.apply(this, [a, 1].concat(ia(Ma.apply(1, arguments))))
    };
    k.Od = function(a, b) {
        var c = Ma.apply(2, arguments),
            d = eg(this, a);
        d && d instanceof ve && (d.j(b, c), cg(this))
    };
    k.record = function(a, b) {
        var c = Ma.apply(2, arguments),
            d = eg(this, a);
        d && d instanceof we && (d.record(b, c), cg(this))
    };

    function dg(a) {
        for (var b = 0; b < a.length; b++) a[b].clear()
    };

    function fg(a) {
        this.h = a;
        this.h.Vc("/client_streamz/bg/fiec", {
            Kb: 3,
            Jb: "rk"
        }, {
            Kb: 2,
            Jb: "ec"
        })
    }

    function gg(a, b, c) {
        a.h.pc("/client_streamz/bg/fiec", b, c)
    }

    function hg(a) {
        this.h = a;
        this.h.Wc("/client_streamz/bg/fil", {
            Kb: 3,
            Jb: "rk"
        })
    }
    hg.prototype.record = function(a, b) {
        this.h.record("/client_streamz/bg/fil", a, b)
    };

    function ig(a) {
        this.h = a;
        this.h.Vc("/client_streamz/bg/fsc", {
            Kb: 3,
            Jb: "rk"
        })
    }

    function jg(a) {
        this.h = a;
        this.h.Wc("/client_streamz/bg/fsl", {
            Kb: 3,
            Jb: "rk"
        })
    }
    jg.prototype.record = function(a, b) {
        this.h.record("/client_streamz/bg/fsl", a, b)
    };
    var kg = {
        toString: function(a) {
            var b = [],
                c = 0;
            a -= -2147483648;
            b[c++] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a % 52);
            for (a = Math.floor(a / 52); 0 < a;) b[c++] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a % 62), a = Math.floor(a / 62);
            return b.join("")
        }
    };

    function lg(a) {
        function b() {
            c -= d;
            c -= e;
            c ^= e >>> 13;
            d -= e;
            d -= c;
            d ^= c << 8;
            e -= c;
            e -= d;
            e ^= d >>> 13;
            c -= d;
            c -= e;
            c ^= e >>> 12;
            d -= e;
            d -= c;
            d ^= c << 16;
            e -= c;
            e -= d;
            e ^= d >>> 5;
            c -= d;
            c -= e;
            c ^= e >>> 3;
            d -= e;
            d -= c;
            d ^= c << 10;
            e -= c;
            e -= d;
            e ^= d >>> 15
        }
        a = mg(a);
        for (var c = 2654435769, d = 2654435769, e = 314159265, f = a.length, g = f, h = 0; 12 <= g; g -= 12, h += 12) c += ng(a, h), d += ng(a, h + 4), e += ng(a, h + 8), b();
        e += f;
        switch (g) {
            case 11:
                e += a[h + 10] << 24;
            case 10:
                e += a[h + 9] << 16;
            case 9:
                e += a[h + 8] << 8;
            case 8:
                d += a[h + 7] << 24;
            case 7:
                d += a[h + 6] << 16;
            case 6:
                d += a[h + 5] << 8;
            case 5:
                d += a[h + 4];
            case 4:
                c += a[h + 3] << 24;
            case 3:
                c += a[h + 2] << 16;
            case 2:
                c += a[h + 1] << 8;
            case 1:
                c += a[h + 0]
        }
        b();
        return kg.toString(e)
    }

    function mg(a) {
        for (var b = [], c = 0; c < a.length; c++) b.push(a.charCodeAt(c));
        return b
    }

    function ng(a, b) {
        return a[b + 0] + (a[b + 1] << 8) + (a[b + 2] << 16) + (a[b + 3] << 24)
    };

    function og(a) {
        I.call(this, a)
    }
    v(og, I);
    var pg = [1, 2, 3];

    function qg(a) {
        I.call(this, a)
    }
    v(qg, I);
    var rg = [1, 2, 3];

    function sg(a) {
        I.call(this, a, -1, sg.h)
    }
    v(sg, I);
    sg.h = [1];

    function tg(a) {
        I.call(this, a, -1, tg.h)
    }
    v(tg, I);
    tg.h = [3, 6, 4];

    function ug(a) {
        I.call(this, a, -1, ug.h)
    }
    v(ug, I);
    ug.h = [1];

    function vg(a) {
        if (!a) return "";
        if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
        a.startsWith("blob:") && (a = a.substring(5));
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3),
            c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
        c = a.substring(0, a.indexOf("://"));
        if (!c) throw Error("URI is missing protocol: " + a);
        if ("http" !== c && "https" !== c && "chrome-extension" !==
            c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
        a = "";
        var d = b.indexOf(":");
        if (-1 != d) {
            var e = b.substring(d + 1);
            b = b.substring(0, d);
            if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
        }
        return c + "://" + b + a
    };

    function wg() {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            p = m = 0
        }

        function b(r) {
            for (var y = g, u = 0; 64 > u; u += 4) y[u / 4] = r[u] << 24 | r[u + 1] << 16 | r[u + 2] << 8 | r[u + 3];
            for (u = 16; 80 > u; u++) r = y[u - 3] ^ y[u - 8] ^ y[u - 14] ^ y[u - 16], y[u] = (r << 1 | r >>> 31) & 4294967295;
            r = e[0];
            var z = e[1],
                D = e[2],
                G = e[3],
                M = e[4];
            for (u = 0; 80 > u; u++) {
                if (40 > u)
                    if (20 > u) {
                        var P = G ^ z & (D ^ G);
                        var T = 1518500249
                    } else P = z ^ D ^ G, T = 1859775393;
                else 60 > u ? (P = z & D | G & (z | D), T = 2400959708) : (P = z ^ D ^ G, T = 3395469782);
                P = ((r << 5 | r >>> 27) & 4294967295) + P + M + T + y[u] & 4294967295;
                M = G;
                G = D;
                D = (z << 30 | z >>> 2) & 4294967295;
                z = r;
                r = P
            }
            e[0] = e[0] + r & 4294967295;
            e[1] = e[1] + z & 4294967295;
            e[2] =
                e[2] + D & 4294967295;
            e[3] = e[3] + G & 4294967295;
            e[4] = e[4] + M & 4294967295
        }

        function c(r, y) {
            if ("string" === typeof r) {
                r = unescape(encodeURIComponent(r));
                for (var u = [], z = 0, D = r.length; z < D; ++z) u.push(r.charCodeAt(z));
                r = u
            }
            y || (y = r.length);
            u = 0;
            if (0 == m)
                for (; u + 64 < y;) b(r.slice(u, u + 64)), u += 64, p += 64;
            for (; u < y;)
                if (f[m++] = r[u++], p++, 64 == m)
                    for (m = 0, b(f); u + 64 < y;) b(r.slice(u, u + 64)), u += 64, p += 64
        }

        function d() {
            var r = [],
                y = 8 * p;
            56 > m ? c(h, 56 - m) : c(h, 64 - (m - 56));
            for (var u = 63; 56 <= u; u--) f[u] = y & 255, y >>>= 8;
            b(f);
            for (u = y = 0; 5 > u; u++)
                for (var z = 24; 0 <= z; z -= 8) r[y++] = e[u] >> z & 255;
            return r
        }
        for (var e = [], f = [], g = [], h = [128], l = 1; 64 > l; ++l) h[l] = 0;
        var m, p;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            Zd: function() {
                for (var r = d(), y = "", u = 0; u < r.length; u++) y += "0123456789ABCDEF".charAt(Math.floor(r[u] / 16)) + "0123456789ABCDEF".charAt(r[u] % 16);
                return y
            }
        }
    };

    function xg(a, b, c) {
        var d = String(x.location.href);
        return d && a && b ? [b, yg(vg(d), a, c || null)].join(" ") : null
    }

    function yg(a, b, c) {
        var d = [],
            e = [];
        if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], gb(d, function(h) {
            e.push(h)
        }), zg(e.join(" "));
        var f = [],
            g = [];
        gb(c, function(h) {
            g.push(h.key);
            f.push(h.value)
        });
        c = Math.floor((new Date).getTime() / 1E3);
        e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
        gb(d, function(h) {
            e.push(h)
        });
        a = zg(e.join(" "));
        a = [c, a];
        0 == g.length || a.push(g.join(""));
        return a.join("_")
    }

    function zg(a) {
        var b = wg();
        b.update(a);
        return b.Zd().toLowerCase()
    };
    var Ag = {};

    function Bg(a) {
        this.h = a || {
            cookie: ""
        }
    }
    k = Bg.prototype;
    k.isEnabled = function() {
        if (!x.navigator.cookieEnabled) return !1;
        if (!this.isEmpty()) return !0;
        this.set("TESTCOOKIESENABLED", "1", {
            hc: 60
        });
        if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
        this.remove("TESTCOOKIESENABLED");
        return !0
    };
    k.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Mf;
            d = c.secure || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.hc
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        c = f ? ";domain=" + f : "";
        g = g ? ";path=" + g : "";
        d = d ? ";secure" : "";
        h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString();
        this.h.cookie = a + "=" + b + c + g + h + d + (null != e ? ";samesite=" +
            e : "")
    };
    k.get = function(a, b) {
        for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Hb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    k.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            hc: 0,
            path: b,
            domain: c
        });
        return d
    };
    k.Ac = function() {
        return Cg(this).keys
    };
    k.isEmpty = function() {
        return !this.h.cookie
    };
    k.clear = function() {
        for (var a = Cg(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };

    function Cg(a) {
        a = (a.h.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = Hb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    }
    var Dg = new Bg("undefined" == typeof document ? null : document);

    function Eg(a) {
        return !!Ag.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a)
    }

    function Fg(a) {
        a = void 0 === a ? !1 : a;
        var b = x.__SAPISID || x.__APISID || x.__3PSAPISID || x.__OVERRIDE_SID;
        Eg(a) && (b = b || x.__1PSAPISID);
        if (b) return !0;
        if ("undefined" !== typeof document) {
            var c = new Bg(document);
            b = c.get("SAPISID") || c.get("APISID") || c.get("__Secure-3PAPISID") || c.get("SID") || c.get("OSID");
            Eg(a) && (b = b || c.get("__Secure-1PAPISID"))
        }
        return !!b
    }

    function Gg(a, b, c, d) {
        (a = x[a]) || "undefined" === typeof document || (a = (new Bg(document)).get(b));
        return a ? xg(a, c, d) : null
    }

    function Hg(a, b) {
        b = void 0 === b ? !1 : b;
        var c = vg(String(x.location.href)),
            d = [];
        if (Fg(b)) {
            c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:");
            var e = c ? x.__SAPISID : x.__APISID;
            e || "undefined" === typeof document || (e = new Bg(document), e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID"));
            (e = e ? xg(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e);
            c && Eg(b) && ((b = Gg("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b), (a = Gg("__3PSAPISID", "__Secure-3PAPISID",
                "SAPISID3PHASH", a)) && d.push(a))
        }
        return 0 == d.length ? null : d.join(" ")
    };

    function Ig(a) {
        I.call(this, a, -1, Ig.h)
    }
    v(Ig, I);
    Ig.h = [2];

    function Jg(a) {
        this.h = this.i = this.j = a
    }
    Jg.prototype.reset = function() {
        this.h = this.i = this.j
    };
    Jg.prototype.getValue = function() {
        return this.i
    };

    function Kg() {}
    Kg.prototype.serialize = function(a) {
        var b = [];
        Lg(this, a, b);
        return b.join("")
    };

    function Lg(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), Lg(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Mg(d, c), c.push(":"), Lg(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    Mg(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) &&
                        !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var Ng = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\u000b"
        },
        Og = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function Mg(a, b) {
        b.push('"', a.replace(Og, function(c) {
            var d = Ng[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1), Ng[c] = d);
            return d
        }), '"')
    };

    function Pg() {}
    Pg.prototype.h = null;
    Pg.prototype.getOptions = function() {
        var a;
        (a = this.h) || (a = {}, Qg(this) && (a[0] = !0, a[1] = !0), a = this.h = a);
        return a
    };
    var Rg;

    function Sg() {}
    $a(Sg, Pg);

    function Tg(a) {
        return (a = Qg(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }

    function Qg(a) {
        if (!a.i && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.i = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.i
    }
    Rg = new Sg;

    function Ug(a) {
        df.call(this);
        this.headers = new Map;
        this.W = a || null;
        this.i = !1;
        this.T = this.G = null;
        this.m = this.da = "";
        this.j = this.aa = this.v = this.Z = !1;
        this.s = 0;
        this.M = null;
        this.ya = "";
        this.ka = this.la = !1
    }
    $a(Ug, df);
    var Vg = /^https?$/i,
        Wg = ["POST", "PUT"],
        Xg = [];

    function Yg(a, b, c, d, e, f, g) {
        var h = new Ug;
        Xg.push(h);
        b && h.listen("complete", b);
        h.l.add("ready", h.Yd, !0, void 0, void 0);
        f && (h.s = Math.max(0, f));
        g && (h.la = g);
        h.send(a, c, d, e)
    }
    k = Ug.prototype;
    k.Yd = function() {
        this.dispose();
        kb(Xg, this)
    };
    k.send = function(a, b, c, d) {
        if (this.G) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.da + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.da = a;
        this.m = "";
        this.Z = !1;
        this.i = !0;
        this.G = this.W ? Tg(this.W) : Tg(Rg);
        this.T = this.W ? this.W.getOptions() : Rg.getOptions();
        this.G.onreadystatechange = Ya(this.td, this);
        try {
            this.getStatus(), this.aa = !0, this.G.open(b, String(a), !0), this.aa = !1
        } catch (g) {
            this.getStatus();
            Zg(this, g);
            return
        }
        a = c || "";
        c = new Map(this.headers);
        if (d)
            if (Object.getPrototypeOf(d) ===
                Object.prototype)
                for (var e in d) c.set(e, d[e]);
            else if ("function" === typeof d.keys && "function" === typeof d.get) {
            e = t(d.keys());
            for (var f = e.next(); !f.done; f = e.next()) f = f.value, c.set(f, d.get(f))
        } else throw Error("Unknown input type for opt_headers: " + String(d));
        d = Array.from(c.keys()).find(function(g) {
            return "content-type" == g.toLowerCase()
        });
        e = x.FormData && a instanceof x.FormData;
        !(0 <= fb(Wg, b)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        b = t(c);
        for (d = b.next(); !d.done; d = b.next()) c = t(d.value), d = c.next().value, c = c.next().value, this.G.setRequestHeader(d, c);
        this.ya && (this.G.responseType = this.ya);
        "withCredentials" in this.G && this.G.withCredentials !== this.la && (this.G.withCredentials = this.la);
        try {
            $g(this), 0 < this.s && (this.ka = ah(this.G), this.getStatus(), this.ka ? (this.G.timeout = this.s, this.G.ontimeout = Ya(this.Hd,
                this)) : this.M = ag(this.Hd, this.s, this)), this.getStatus(), this.v = !0, this.G.send(a), this.v = !1
        } catch (g) {
            this.getStatus(), Zg(this, g)
        }
    };

    function ah(a) {
        return Vc && "number" === typeof a.timeout && void 0 !== a.ontimeout
    }
    k.Hd = function() {
        "undefined" != typeof Pa && this.G && (this.m = "Timed out after " + this.s + "ms, aborting", this.getStatus(), ef(this, "timeout"), this.abort(8))
    };

    function Zg(a, b) {
        a.i = !1;
        a.G && (a.j = !0, a.G.abort(), a.j = !1);
        a.m = b;
        bh(a);
        ch(a)
    }

    function bh(a) {
        a.Z || (a.Z = !0, ef(a, "complete"), ef(a, "error"))
    }
    k.abort = function() {
        this.G && this.i && (this.getStatus(), this.i = !1, this.j = !0, this.G.abort(), this.j = !1, ef(this, "complete"), ef(this, "abort"), ch(this))
    };
    k.K = function() {
        this.G && (this.i && (this.i = !1, this.j = !0, this.G.abort(), this.j = !1), ch(this, !0));
        Ug.xa.K.call(this)
    };
    k.td = function() {
        this.h() || (this.aa || this.v || this.j ? dh(this) : this.Ae())
    };
    k.Ae = function() {
        dh(this)
    };

    function dh(a) {
        if (a.i && "undefined" != typeof Pa)
            if (a.T[1] && 4 == eh(a) && 2 == a.getStatus()) a.getStatus();
            else if (a.v && 4 == eh(a)) ag(a.td, 0, a);
        else if (ef(a, "readystatechange"), a.isComplete()) {
            a.getStatus();
            a.i = !1;
            try {
                if (fh(a)) ef(a, "complete"), ef(a, "success");
                else {
                    try {
                        var b = 2 < eh(a) ? a.G.statusText : ""
                    } catch (c) {
                        b = ""
                    }
                    a.m = b + " [" + a.getStatus() + "]";
                    bh(a)
                }
            } finally {
                ch(a)
            }
        }
    }

    function ch(a, b) {
        if (a.G) {
            $g(a);
            var c = a.G,
                d = a.T[0] ? function() {} : null;
            a.G = null;
            a.T = null;
            b || ef(a, "ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }

    function $g(a) {
        a.G && a.ka && (a.G.ontimeout = null);
        a.M && (x.clearTimeout(a.M), a.M = null)
    }
    k.isActive = function() {
        return !!this.G
    };
    k.isComplete = function() {
        return 4 == eh(this)
    };

    function fh(a) {
        var b = a.getStatus();
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = wc(1, String(a.da)), !a && x.self && x.self.location && (a = x.self.location.protocol.slice(0, -1)), b = !Vg.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    }

    function eh(a) {
        return a.G ? a.G.readyState : 0
    }
    k.getStatus = function() {
        try {
            return 2 < eh(this) ? this.G.status : -1
        } catch (a) {
            return -1
        }
    };
    k.getLastError = function() {
        return "string" === typeof this.m ? this.m : String(this.m)
    };

    function gh(a) {
        I.call(this, a)
    }
    v(gh, I);

    function hh(a) {
        I.call(this, a, -1, hh.h)
    }
    v(hh, I);
    hh.h = [1];

    function Vd(a) {
        I.call(this, a)
    }
    v(Vd, I);
    var ih = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];
    new hh;

    function ge(a) {
        I.call(this, a)
    }
    v(ge, I);

    function jh(a) {
        I.call(this, a, 33, jh.h)
    }
    v(jh, I);
    jh.h = [3, 20, 27];

    function kh(a) {
        I.call(this, a, 19, kh.h)
    }
    v(kh, I);
    kh.h = [3, 5];

    function lh(a) {
        I.call(this, a, 6, lh.h)
    }
    v(lh, I);
    lh.h = [5];

    function mh(a) {
        I.call(this, a)
    }
    v(mh, I);
    var nh;
    nh = new function(a, b, c) {
        this.h = a;
        this.fieldName = b;
        this.ctor = c;
        this.isRepeated = 0;
        this.i = Zd;
        this.defaultValue = void 0
    }(175237375, {
        Ef: 0
    }, mh);

    function oh(a, b, c, d, e, f, g, h, l, m, p) {
        df.call(this);
        var r = this;
        this.componentId = "";
        this.j = [];
        this.Tb = "";
        this.Ub = this.ya = -1;
        this.Fb = !1;
        this.W = this.m = null;
        this.M = this.T = 0;
        this.Rd = 1;
        this.timeoutMillis = 0;
        this.la = !1;
        df.call(this);
        this.logSource = a;
        this.Sb = b || function() {};
        this.s = new ph(a, f);
        this.Qd = d;
        this.network = p;
        this.bufferSize = 1E3;
        this.Sd = Za(jf, 0, 1);
        this.aa = e || null;
        this.sessionIndex = c || null;
        this.da = g || !1;
        this.pageId = l || null;
        this.logger = null;
        this.withCredentials = !h;
        this.pb = f || !1;
        !this.pb && (65 <= lc("Chromium") || 45 <= lc("Firefox") || 12 <= lc("Safari") || Oc() && Sc());
        a = fe();
        qh(this.s, a);
        this.v = new Jg(1E4);
        this.i = new $f(this.v.getValue());
        ze(this, this.i);
        m = rh(this, m);
        Te(this.i, "tick", m, !1, this);
        this.Z = new $f(6E5);
        ze(this, this.Z);
        Te(this.Z, "tick", m, !1, this);
        this.da || this.Z.start();
        this.pb || (Te(document, "visibilitychange", function() {
            "hidden" === document.visibilityState && r.ka()
        }), Te(document, "pagehide", this.ka, !1, this))
    }
    v(oh, df);

    function rh(a, b) {
        return b ? function() {
            b().then(function() {
                a.flush()
            })
        } : function() {
            a.flush()
        }
    }
    oh.prototype.K = function() {
        this.ka();
        df.prototype.K.call(this)
    };

    function sh(a) {
        a.aa || (a.aa = .01 > a.Sd() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
        return a.aa
    }

    function th(a, b) {
        a.v = new Jg(1 > b ? 1 : b);
        a.i.setInterval(a.v.getValue())
    }
    oh.prototype.log = function(a) {
        a = a.clone();
        var b = this.Rd++;
        F(a, 21, b);
        this.componentId && F(a, 26, this.componentId);
        if (!Od(a, 1)) {
            b = a;
            var c = Date.now().toString();
            F(b, 1, c)
        }
        null == Od(a, 15) && F(a, 15, 60 * (new Date).getTimezoneOffset());
        this.m && (b = this.m.clone(), H(a, Ig, 16, b));
        for (; this.j.length >= this.bufferSize;) this.j.shift(), ++this.T;
        this.j.push(a);
        ef(this, new uh(a));
        this.da || this.i.enabled || this.i.start()
    };
    oh.prototype.flush = function(a, b) {
        var c = this;
        if (0 === this.j.length) a && a();
        else if (this.la) vh(this.s, 3), wh(this);
        else {
            var d = Date.now();
            if (this.Ub > d && this.ya < d) b && b("throttled");
            else {
                vh(this.s, 1);
                var e = Ah(this.s, this.j, this.T, this.M);
                d = {};
                var f = this.Sb();
                f && (d.Authorization = f);
                var g = sh(this);
                this.sessionIndex && (d["X-Goog-AuthUser"] = this.sessionIndex, g = Fc(g, "authuser", this.sessionIndex));
                this.pageId && (d["X-Goog-PageId"] = this.pageId, g = Fc(g, "pageId", this.pageId));
                if (f && this.Tb === f) b && b("stale-auth-token");
                else {
                    this.j = [];
                    this.i.enabled && this.i.stop();
                    this.T = 0;
                    var h = e.serialize(),
                        l;
                    this.W && this.W.isSupported(h.length) && (l = this.W.compress(h));
                    var m = {
                            url: g,
                            body: h,
                            Wd: 1,
                            Mc: d,
                            requestType: "POST",
                            withCredentials: this.withCredentials,
                            timeoutMillis: this.timeoutMillis
                        },
                        p = function(u) {
                            c.v.reset();
                            c.i.setInterval(c.v.getValue());
                            if (u) {
                                var z = null;
                                try {
                                    var D = JSON.parse(u.replace(")]}'\n", ""));
                                    z = new lh(D)
                                } catch (G) {}
                                z && (u = Number(he(Od(z, 1), "-1")), 0 < u && (c.ya = Date.now(), c.Ub = c.ya + u), z = nh.ctor ? nh.i(z, nh.ctor, nh.h, !0) : nh.isRepeated ?
                                    nh.i(z, nh.h, !0) : nh.i(z, nh.h, nh.defaultValue, !0)) && (z = he(Od(z, 1), -1), -1 != z && (c.Fb || th(c, z)))
                            }
                            a && a();
                            c.M = 0
                        },
                        r = function(u, z) {
                            var D = jh,
                                G = E(e.V),
                                M = !!(G & 2);
                            D = ae(e, D, 3, M ? 1 : 2, G);
                            if (!(M || E(D) & 8)) {
                                for (M = 0; M < D.length; M++) {
                                    G = D[M];
                                    var P = $d(G);
                                    G !== P && (D[M] = P)
                                }
                                xd(D, 8)
                            }
                            M = c.v;
                            M.h = Math.min(3E5, 2 * M.h);
                            M.i = Math.min(3E5, M.h + Math.round(.2 * (Math.random() - .5) * M.h));
                            c.i.setInterval(c.v.getValue());
                            401 === u && f && (c.Tb = f);
                            void 0 === z && (z = 500 <= u && 600 > u || 401 === u || 0 === u);
                            z && (c.j = D.concat(c.j), c.da || c.i.enabled || c.i.start());
                            b && b("net-send-failed", u);
                            ++c.M
                        },
                        y = function() {
                            c.network ? c.network.send(m, p, r) : c.Qd(m, p, r)
                        };
                    l ? l.then(function(u) {
                        m.Mc["Content-Encoding"] = "gzip";
                        m.Mc["Content-Type"] = "application/binary";
                        m.body = u;
                        m.Wd = 2;
                        y()
                    }, function() {
                        y()
                    }) : y()
                }
            }
        }
    };
    oh.prototype.ka = function() {
        Bh(this.s, !0);
        this.flush();
        Bh(this.s, !1)
    };

    function wh(a) {
        Ch(a, function(b, c) {
            b = Fc(b, "format", "json");
            var d = !1;
            try {
                d = window.navigator.sendBeacon(b, c.serialize())
            } catch (e) {}
            a.la && !d && (a.la = !1);
            return d
        })
    }

    function Ch(a, b) {
        if (0 !== a.j.length) {
            var c = Jc(sh(a), "format");
            c = Dc(c, "auth", a.Sb(), "authuser", a.sessionIndex || "0");
            for (var d = 0; 10 > d && a.j.length; ++d) {
                var e = a.j.slice(0, 32),
                    f = Ah(a.s, e, a.T, a.M);
                if (!b(c, f)) {
                    ++a.M;
                    break
                }
                a.T = 0;
                a.M = 0;
                a.j = a.j.slice(e.length)
            }
            a.i.enabled && a.i.stop()
        }
    }

    function uh() {
        Be.call(this, "event-logged", void 0)
    }
    v(uh, Be);

    function ph(a, b) {
        this.i = b = void 0 === b ? !1 : b;
        this.uach = this.locale = null;
        this.h = new kh;
        F(this.h, 2, a);
        b || (this.locale = document.documentElement.getAttribute("lang"));
        qh(this, new ge)
    }

    function qh(a, b) {
        H(a.h, ge, 1, b);
        Od(b, 1) || F(b, 1, 1);
        a.i || (b = Dh(a), Od(b, 5) || F(b, 5, a.locale));
        a.uach && (b = Dh(a), Zd(b, hh, 9) || H(b, hh, 9, a.uach))
    }

    function vh(a, b) {
        Td(Zd(a.h, ge, 1)) && (a = Eh(a), F(a, 1, b))
    }

    function Bh(a, b) {
        Td(Zd(a.h, ge, 1)) && (a = Eh(a), F(a, 2, b))
    }

    function Fh(a, b) {
        var c = void 0 === c ? ih : c;
        b(window, c).then(function(d) {
            a.uach = d;
            d = Dh(a);
            H(d, hh, 9, a.uach);
            return !0
        }).catch(function() {
            return !1
        })
    }

    function Dh(a) {
        a = Zd(a.h, ge, 1);
        var b = Zd(a, Vd, 11);
        b || (b = new Vd, H(a, Vd, 11, b));
        return b
    }

    function Eh(a) {
        a = Dh(a);
        var b = Zd(a, gh, 10);
        b || (b = new gh, F(b, 2, !1), H(a, gh, 10, b));
        return b
    }

    function Ah(a, b, c, d) {
        c = void 0 === c ? 0 : c;
        d = void 0 === d ? 0 : d;
        if (Td(Zd(a.h, ge, 1))) {
            var e = Eh(a);
            ee(e, 3, d)
        }
        a = a.h.clone();
        d = Date.now().toString();
        a = F(a, 4, d);
        b = ce(a, jh, 3, b);
        c && F(b, 14, c);
        return b
    };

    function Gh(a, b, c) {
        Yg(a.url, function(d) {
            d = d.target;
            if (fh(d)) {
                try {
                    var e = d.G ? d.G.responseText : ""
                } catch (f) {
                    e = ""
                }
                b(e)
            } else c(d.getStatus())
        }, a.requestType, a.body, a.Mc, a.timeoutMillis, a.withCredentials)
    };

    function Hh(a, b) {
        J.call(this);
        this.s = a;
        this.Da = b;
        this.l = "https://play.google.com/log?format=json&hasfast=true";
        this.m = !1;
        this.aa = Gh;
        this.i = ""
    }
    $a(Hh, J);

    function Ih(a, b, c, d, e, f) {
        a = void 0 === a ? -1 : a;
        b = void 0 === b ? "" : b;
        c = void 0 === c ? "" : c;
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? "" : e;
        J.call(this);
        f ? a = f : (a = new Hh(a, "0"), a.i = b, ze(this, a), "" != c && (a.l = c), d && (a.m = !0), e && (a.j = e), b = new oh(a.s, a.W ? a.W : Hg, a.Da, a.aa, a.l, a.m, !1, a.ya, void 0, void 0, a.da ? a.da : void 0), ze(a, b), a.M && qh(b.s, a.M), a.j && (c = a.j, d = Dh(b.s), F(d, 7, c)), a.Z && (b.W = a.Z), a.i && (b.componentId = a.i), a.v && ((c = a.v) ? (b.m || (b.m = new Ig), c = c.serialize(), F(b.m, 4, c)) : b.m && F(b.m, 4, void 0, !1)), a.ka && (d = a.ka, b.m || (b.m = new Ig),
            c = b.m, null == d ? d = Hd : (e = E(d), 1 !== (e & 1) && (Object.isFrozen(d) && (d = Array.prototype.slice.call(d)), zd(d, e | 1))), F(c, 2, d)), a.T && (c = a.T, b.Fb = !0, th(b, c)), a.la && Fh(b.s, a.la), a = b);
        this.i = a
    }
    v(Ih, J);
    Ih.prototype.flush = function(a) {
        var b = a || [];
        if (b.length) {
            a = new ug;
            for (var c = [], d = 0; d < b.length; d++) {
                var e = b[d],
                    f = e,
                    g = new tg;
                var h = F(g, 1, f.i);
                var l = f;
                g = [];
                for (var m = 0; m < l.h.length; m++) g.push(l.h[m].Jb);
                if (null == g) g = F(h, 3, Hd);
                else {
                    l = E(g);
                    if (!(l & 4)) {
                        if (l & 2 || Object.isFrozen(g)) g = Array.prototype.slice.call(g);
                        for (m = 0; m < g.length; m++) g[m] = g[m];
                        zd(g, l | 5)
                    }
                    g = F(h, 3, g)
                }
                h = [];
                l = [];
                m = t(f.rb.keys());
                for (var p = m.next(); !p.done; p = m.next()) l.push(p.value.split(","));
                for (m = 0; m < l.length; m++) {
                    p = l[m];
                    var r = f.l;
                    for (var y = f.xc(p) || [], u = [], z = 0; z < y.length; z++) {
                        var D = y[z];
                        D = D && D.bd;
                        var G = new qg;
                        switch (r) {
                            case 3:
                                Xd(G, 1, rg, Number(D));
                                break;
                            case 2:
                                Xd(G, 2, rg, Jd(Number(D)))
                        }
                        u.push(G)
                    }
                    r = u;
                    for (y = 0; y < r.length; y++) {
                        u = r[y];
                        z = new sg;
                        u = H(z, qg, 2, u);
                        z = p;
                        D = [];
                        G = f;
                        for (var M = [], P = 0; P < G.h.length; P++) M.push(G.h[P].Kb);
                        G = M;
                        for (M = 0; M < G.length; M++) {
                            var T = G[M],
                                da = z[M];
                            P = new og;
                            switch (T) {
                                case 3:
                                    Xd(P, 1, pg, String(da));
                                    break;
                                case 2:
                                    T = P;
                                    da = Number(da);
                                    Qa(da);
                                    Xd(T, 2, pg, da);
                                    break;
                                case 1:
                                    Xd(P, 3, pg, "true" == da)
                            }
                            D.push(P)
                        }
                        ce(u, og, 1, D);
                        h.push(u)
                    }
                }
                ce(g, sg, 4, h);
                c.push(g);
                e.clear()
            }
            ce(a, tg, 1, c);
            b = this.i;
            a instanceof jh ? b.log(a) : (c = new jh, a = a.serialize(), a = F(c, 8, a), b.log(a));
            this.i.flush()
        }
    };

    function Jh(a) {
        this.v = Kh();
        this.m = new Ih(1828);
        this.h = new bg(this.m);
        this.s = new hg(this.h);
        this.j = new ig(this.h);
        this.l = new jg(this.h);
        this.i = new fg(this.h);
        this.Ia = lg(a)
    }

    function Kh() {
        var a, b, c;
        return null != (c = null == (a = globalThis.performance) ? void 0 : null == (b = a.now) ? void 0 : b.call(a)) ? c : Date.now()
    };

    function Lh() {
        var a = this;
        this.promise = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function Mh(a) {
        function b(z, D) {
            Promise.resolve().then(function() {
                var G;
                null != (G = c.na) && G.s.record(Kh() - G.v, G.Ia);
                g.resolve({
                    Ud: z,
                    Te: D
                })
            })
        }
        var c = this;
        this.i = !1;
        var d = a.program;
        var e = a.me;
        if (a.De) {
            var f;
            this.na = null != (f = a.na) ? f : new Jh(e)
        }
        var g = new Lh;
        this.j = g.promise;
        if (x[e])
            if (x[e].a) {
                var h;
                null != (h = this.na) && gg(h.i, h.Ia, 3)
            } else {
                var l;
                null != (l = this.na) && gg(l.i, l.Ia, 2);
                var m;
                null != (m = this.na) && m.h.ob()
            }
        else {
            var p;
            null != (p = this.na) && gg(p.i, p.Ia, 1);
            var r;
            null != (r = this.na) && r.h.ob()
        }
        try {
            this.l = t((0, x[e].a)(d, b, !0)).next().value, this.Se = g.promise.then(function() {})
        } catch (z) {
            var y;
            null != (y = this.na) && gg(y.i, y.Ia, 4);
            var u;
            null != (u = this.na) && u.h.ob();
            throw z;
        }
    }
    Mh.prototype.snapshot = function(a) {
        var b = this;
        if (this.i) throw Error("Already disposed");
        var c = Kh(),
            d;
        null != (d = this.na) && d.j.h.pc("/client_streamz/bg/fsc", d.Ia);
        return this.j.then(function(e) {
            var f = e.Ud;
            return new Promise(function(g) {
                f(function(h) {
                    var l;
                    null != (l = b.na) && l.l.record(Kh() - c, l.Ia);
                    g(h)
                }, [a.cd,
                    a.Ue
                ])
            })
        })
    };
    Mh.prototype.Ed = function(a) {
        if (this.i) throw Error("Already disposed");
        var b = Kh(),
            c;
        null != (c = this.na) && c.j.h.pc("/client_streamz/bg/fsc", c.Ia);
        a = this.l([a.cd, a.Ue]);
        var d;
        null != (d = this.na) && d.l.record(Kh() - b, d.Ia);
        return a
    };
    Mh.prototype.dispose = function() {
        var a;
        null != (a = this.na) && a.h.ob();
        this.i = !0;
        this.j.then(function(b) {
            (b = b.Te) && b()
        })
    };
    Mh.prototype.h = function() {
        return this.i
    };
    var Nh = window;
    Ab("csi.gstatic.com");
    Ab("googleads.g.doubleclick.net");
    Ab("partner.googleadservices.com");
    Ab("pubads.g.doubleclick.net");
    Ab("securepubads.g.doubleclick.net");
    Ab("tpc.googlesyndication.com");
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Oh;
    try {
        new URL("s://g"), Oh = !0
    } catch (a) {
        Oh = !1
    }
    var Ph = Oh;

    function Qh(a) {
        if (a instanceof Kb) a = Lb(a);
        else {
            b: if (Ph) {
                try {
                    var b = new URL(a)
                } catch (c) {
                    b = "https:";
                    break b
                }
                b = b.protocol
            } else c: {
                b = document.createElement("a");
                try {
                    b.href = a
                } catch (c) {
                    b = void 0;
                    break c
                }
                b = b.protocol;b = ":" === b || "" === b ? "https:" : b
            }
            a = "javascript:" !== b ? a : void 0
        }
        return a
    };
    var Rh = {};

    function Sh() {}

    function Th(a) {
        this.h = a
    }
    v(Th, Sh);
    Th.prototype.toString = function() {
        return this.h
    };

    function Uh(a) {
        var b = "true".toString(),
            c = [new Th(Vh[0].toLowerCase(), Rh)];
        if (0 === c.length) throw Error("");
        if (c.map(function(d) {
                if (d instanceof Th) d = d.h;
                else throw Error("");
                return d
            }).every(function(d) {
                return 0 !== "data-loaded".indexOf(d)
            })) throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
        a.setAttribute("data-loaded", b)
    };

    function Wh() {
        throw Error("unknown trace type");
    };

    function Xh(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }

    function Yh(a, b) {
        a.src = Eb(b);
        Xh(a)
    };
    (function() {
        return ""
    }).toString().indexOf("`");

    function Zh(a) {
        this.se = a
    }

    function $h(a) {
        return new Zh(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var ai = [$h("data"), $h("http"), $h("https"), $h("mailto"), $h("ftp"), new Zh(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function bi(a) {
        var b = ci;
        if (b)
            for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && a(b[c], c, b)
    }

    function di() {
        var a = [];
        bi(function(b) {
            a.push(b)
        });
        return a
    }
    var ci = {
            bf: "allow-forms",
            cf: "allow-modals",
            df: "allow-orientation-lock",
            ef: "allow-pointer-lock",
            ff: "allow-popups",
            gf: "allow-popups-to-escape-sandbox",
            hf: "allow-presentation",
            jf: "allow-same-origin",
            kf: "allow-scripts",
            lf: "allow-top-navigation",
            mf: "allow-top-navigation-by-user-activation"
        },
        ei = eb(function() {
            return di()
        });

    function fi() {
        var a = gi(),
            b = {};
        gb(ei(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }

    function gi() {
        var a = void 0 === a ? document : a;
        return a.createElement("iframe")
    };

    function hi(a) {
        "number" == typeof a && (a = Math.round(a) + "px");
        return a
    };
    var ii = (new Date).getTime();
    var ji = "client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");
    [].concat(ia(ji), ["client_dev_set_cookie"]);
    "undefined" !== typeof TextDecoder && new TextDecoder;
    var ki = "undefined" !== typeof TextEncoder ? new TextEncoder : null,
        li = ki ? function(a) {
            return ki.encode(a)
        } : function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
            }
            a = new Uint8Array(b.length);
            for (c = 0; c < a.length; c++) a[c] = b[c];
            return a
        };

    function mi(a) {
        df.call(this);
        var b = this;
        this.v = this.j = 0;
        this.Aa = null != a ? a : {
            ma: function(e, f) {
                return setTimeout(e, f)
            },
            Fa: function(e) {
                clearTimeout(e)
            }
        };
        var c, d;
        this.i = null != (d = null == (c = window.navigator) ? void 0 : c.onLine) ? d : !0;
        this.m = function() {
            return w(function(e) {
                return e.yield(ni(b), 0)
            })
        };
        window.addEventListener("offline", this.m);
        window.addEventListener("online", this.m);
        this.v || oi(this)
    }
    v(mi, df);

    function pi() {
        var a = qi;
        mi.h || (mi.h = new mi(a));
        return mi.h
    }
    mi.prototype.dispose = function() {
        window.removeEventListener("offline", this.m);
        window.removeEventListener("online", this.m);
        this.Aa.Fa(this.v);
        delete mi.h
    };
    mi.prototype.sa = function() {
        return this.i
    };

    function oi(a) {
        a.v = a.Aa.ma(function() {
            var b;
            return w(function(c) {
                if (1 == c.h) return a.i ? (null == (b = window.navigator) ? 0 : b.onLine) ? c.A(3) : c.yield(ni(a), 3) : c.yield(ni(a), 3);
                oi(a);
                c.h = 0
            })
        }, 3E4)
    }

    function ni(a, b) {
        return a.s ? a.s : a.s = new Promise(function(c) {
            var d, e, f, g;
            return w(function(h) {
                switch (h.h) {
                    case 1:
                        return d = window.AbortController ? new window.AbortController : void 0, f = null == (e = d) ? void 0 : e.signal, g = !1, Aa(h, 2, 3), d && (a.j = a.Aa.ma(function() {
                            d.abort()
                        }, b || 2E4)), h.yield(fetch("/generate_204", {
                            method: "HEAD",
                            signal: f
                        }), 5);
                    case 5:
                        g = !0;
                    case 3:
                        Da(h);
                        a.s = void 0;
                        a.j && (a.Aa.Fa(a.j), a.j = 0);
                        g !== a.i && (a.i = g, a.i ? ef(a, "networkstatus-online") : ef(a, "networkstatus-offline"));
                        c(g);
                        Ea(h);
                        break;
                    case 2:
                        Ca(h), g = !1, h.A(3)
                }
            })
        })
    };

    function ri() {
        this.data_ = [];
        this.h = -1
    }
    ri.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && Number.isInteger(a) && this.data_[a] !== b && (this.data_[a] = b, this.h = -1)
    };
    ri.prototype.get = function(a) {
        return !!this.data_[a]
    };

    function si(a) {
        -1 === a.h && (a.h = ib(a.data_, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }, 0));
        return a.h
    };

    function ti(a, b) {
        this.h = a[x.Symbol.iterator]();
        this.i = b
    }
    ti.prototype[Symbol.iterator] = function() {
        return this
    };
    ti.prototype.next = function() {
        var a = this.h.next();
        return {
            value: a.done ? void 0 : this.i.call(void 0, a.value),
            done: a.done
        }
    };

    function ui(a, b) {
        return new ti(a, b)
    };

    function vi() {
        this.blockSize = -1
    };

    function wi() {
        this.blockSize = -1;
        this.blockSize = 64;
        this.h = [];
        this.m = [];
        this.s = [];
        this.j = [];
        this.j[0] = 128;
        for (var a = 1; a < this.blockSize; ++a) this.j[a] = 0;
        this.l = this.i = 0;
        this.reset()
    }
    $a(wi, vi);
    wi.prototype.reset = function() {
        this.h[0] = 1732584193;
        this.h[1] = 4023233417;
        this.h[2] = 2562383102;
        this.h[3] = 271733878;
        this.h[4] = 3285377520;
        this.l = this.i = 0
    };

    function xi(a, b, c) {
        c || (c = 0);
        var d = a.s;
        if ("string" === typeof b)
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.h[0];
        c = a.h[1];
        var g = a.h[2],
            h = a.h[3],
            l = a.h[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) {
                    f = h ^ c & (g ^ h);
                    var m = 1518500249
                } else f = c ^ g ^ h, m = 1859775393;
            else 60 > e ? (f = c & g | h & (c | g), m = 2400959708) :
                (f = c ^ g ^ h, m = 3395469782);
            f = (b << 5 | b >>> 27) + f + l + m + d[e] & 4294967295;
            l = h;
            h = g;
            g = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.h[0] = a.h[0] + b & 4294967295;
        a.h[1] = a.h[1] + c & 4294967295;
        a.h[2] = a.h[2] + g & 4294967295;
        a.h[3] = a.h[3] + h & 4294967295;
        a.h[4] = a.h[4] + l & 4294967295
    }
    wi.prototype.update = function(a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.blockSize, d = 0, e = this.m, f = this.i; d < b;) {
                if (0 == f)
                    for (; d <= c;) xi(this, a, d), d += this.blockSize;
                if ("string" === typeof a)
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.blockSize) {
                            xi(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.blockSize) {
                                xi(this, e);
                                f = 0;
                                break
                            }
            }
            this.i = f;
            this.l += b
        }
    };
    wi.prototype.digest = function() {
        var a = [],
            b = 8 * this.l;
        56 > this.i ? this.update(this.j, 56 - this.i) : this.update(this.j, this.blockSize - (this.i - 56));
        for (var c = this.blockSize - 1; 56 <= c; c--) this.m[c] = b & 255, b /= 256;
        xi(this, this.m);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b] = this.h[c] >> d & 255, ++b;
        return a
    };

    function yi(a) {
        return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }

    function zi(a, b) {
        "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
    }

    function Ai(a, b) {
        a.classList ? b = a.classList.contains(b) : (a = a.classList ? a.classList : yi(a).match(/\S+/g) || [], b = 0 <= fb(a, b));
        return b
    }

    function Bi() {
        var a = document.body;
        a.classList ? a.classList.remove("inverted-hdpi") : Ai(a, "inverted-hdpi") && zi(a, Array.prototype.filter.call(a.classList ? a.classList : yi(a).match(/\S+/g) || [], function(b) {
            return "inverted-hdpi" != b
        }).join(" "))
    };

    function Ci() {}
    Ci.prototype.next = function() {
        return Di
    };
    var Di = {
        done: !0,
        value: void 0
    };

    function Ei(a) {
        return {
            value: a,
            done: !1
        }
    }
    Ci.prototype.Ea = function() {
        return this
    };

    function Fi(a) {
        if (a instanceof Gi || a instanceof Hi || a instanceof Ii) return a;
        if ("function" == typeof a.next) return new Gi(function() {
            return a
        });
        if ("function" == typeof a[Symbol.iterator]) return new Gi(function() {
            return a[Symbol.iterator]()
        });
        if ("function" == typeof a.Ea) return new Gi(function() {
            return a.Ea()
        });
        throw Error("Not an iterator or iterable.");
    }

    function Gi(a) {
        this.i = a
    }
    Gi.prototype.Ea = function() {
        return new Hi(this.i())
    };
    Gi.prototype[Symbol.iterator] = function() {
        return new Ii(this.i())
    };
    Gi.prototype.h = function() {
        return new Ii(this.i())
    };

    function Hi(a) {
        this.i = a
    }
    v(Hi, Ci);
    Hi.prototype.next = function() {
        return this.i.next()
    };
    Hi.prototype[Symbol.iterator] = function() {
        return new Ii(this.i)
    };
    Hi.prototype.h = function() {
        return new Ii(this.i)
    };

    function Ii(a) {
        Gi.call(this, function() {
            return a
        });
        this.j = a
    }
    v(Ii, Gi);
    Ii.prototype.next = function() {
        return this.j.next()
    };

    function Ji(a, b) {
        this.i = {};
        this.h = [];
        this.j = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof Ji)
                for (c = a.Ac(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }
    k = Ji.prototype;
    k.Ac = function() {
        Ki(this);
        return this.h.concat()
    };
    k.has = function(a) {
        return Li(this.i, a)
    };
    k.equals = function(a, b) {
        if (this === a) return !0;
        if (this.size != a.size) return !1;
        b = b || Mi;
        Ki(this);
        for (var c, d = 0; c = this.h[d]; d++)
            if (!b(this.get(c), a.get(c))) return !1;
        return !0
    };

    function Mi(a, b) {
        return a === b
    }
    k.isEmpty = function() {
        return 0 == this.size
    };
    k.clear = function() {
        this.i = {};
        this.j = this.size = this.h.length = 0
    };
    k.remove = function(a) {
        return this.delete(a)
    };
    k.delete = function(a) {
        return Li(this.i, a) ? (delete this.i[a], --this.size, this.j++, this.h.length > 2 * this.size && Ki(this), !0) : !1
    };

    function Ki(a) {
        if (a.size != a.h.length) {
            for (var b = 0, c = 0; b < a.h.length;) {
                var d = a.h[b];
                Li(a.i, d) && (a.h[c++] = d);
                b++
            }
            a.h.length = c
        }
        if (a.size != a.h.length) {
            var e = {};
            for (c = b = 0; b < a.h.length;) d = a.h[b], Li(e, d) || (a.h[c++] = d, e[d] = 1), b++;
            a.h.length = c
        }
    }
    k.get = function(a, b) {
        return Li(this.i, a) ? this.i[a] : b
    };
    k.set = function(a, b) {
        Li(this.i, a) || (this.size += 1, this.h.push(a), this.j++);
        this.i[a] = b
    };
    k.forEach = function(a, b) {
        for (var c = this.Ac(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    k.clone = function() {
        return new Ji(this)
    };
    k.keys = function() {
        return Fi(this.Ea(!0)).h()
    };
    k.values = function() {
        return Fi(this.Ea(!1)).h()
    };
    k.entries = function() {
        var a = this;
        return ui(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    k.Ea = function(a) {
        Ki(this);
        var b = 0,
            c = this.j,
            d = this,
            e = new Ci;
        e.next = function() {
            if (c != d.j) throw Error("The map has changed since the iterator was created");
            if (b >= d.h.length) return Di;
            var f = d.h[b++];
            return Ei(a ? f : d.i[f])
        };
        return e
    };

    function Li(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function Ni(a) {
        J.call(this);
        this.s = 1;
        this.l = [];
        this.m = 0;
        this.i = [];
        this.j = {};
        this.v = !!a
    }
    $a(Ni, J);
    k = Ni.prototype;
    k.subscribe = function(a, b, c) {
        var d = this.j[a];
        d || (d = this.j[a] = []);
        var e = this.s;
        this.i[e] = a;
        this.i[e + 1] = b;
        this.i[e + 2] = c;
        this.s = e + 3;
        d.push(e);
        return e
    };

    function Oi(a, b, c, d) {
        if (b = a.j[b]) {
            var e = a.i;
            (b = b.find(function(f) {
                return e[f + 1] == c && e[f + 2] == d
            })) && a.Eb(b)
        }
    }
    k.Eb = function(a) {
        var b = this.i[a];
        if (b) {
            var c = this.j[b];
            0 != this.m ? (this.l.push(a), this.i[a + 1] = function() {}) : (c && kb(c, a), delete this.i[a], delete this.i[a + 1], delete this.i[a + 2])
        }
        return !!b
    };
    k.bb = function(a, b) {
        var c = this.j[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
            if (this.v)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    Pi(this.i[g + 1], this.i[g + 2], d)
                } else {
                    this.m++;
                    try {
                        for (e = 0, f = c.length; e < f && !this.h(); e++) g = c[e], this.i[g + 1].apply(this.i[g + 2], d)
                    } finally {
                        if (this.m--, 0 < this.l.length && 0 == this.m)
                            for (; c = this.l.pop();) this.Eb(c)
                    }
                }
            return 0 != e
        }
        return !1
    };

    function Pi(a, b, c) {
        Cf(function() {
            a.apply(b, c)
        })
    }
    k.clear = function(a) {
        if (a) {
            var b = this.j[a];
            b && (b.forEach(this.Eb, this), delete this.j[a])
        } else this.i.length = 0, this.j = {}
    };
    k.K = function() {
        Ni.xa.K.call(this);
        this.clear();
        this.l.length = 0
    };

    function Qi(a) {
        this.h = a
    }
    Qi.prototype.set = function(a, b) {
        void 0 === b ? this.h.remove(a) : this.h.set(a, (new Kg).serialize(b))
    };
    Qi.prototype.get = function(a) {
        try {
            var b = this.h.get(a)
        } catch (c) {
            return
        }
        if (null !== b) try {
            return JSON.parse(b)
        } catch (c) {
            throw "Storage: Invalid value was encountered";
        }
    };
    Qi.prototype.remove = function(a) {
        this.h.remove(a)
    };

    function Ri(a) {
        this.h = a
    }
    $a(Ri, Qi);

    function Si(a) {
        this.data = a
    }

    function Ti(a) {
        return void 0 === a || a instanceof Si ? a : new Si(a)
    }
    Ri.prototype.set = function(a, b) {
        Ri.xa.set.call(this, a, Ti(b))
    };
    Ri.prototype.i = function(a) {
        a = Ri.xa.get.call(this, a);
        if (void 0 === a || a instanceof Object) return a;
        throw "Storage: Invalid value was encountered";
    };
    Ri.prototype.get = function(a) {
        if (a = this.i(a)) {
            if (a = a.data, void 0 === a) throw "Storage: Invalid value was encountered";
        } else a = void 0;
        return a
    };

    function Ui(a) {
        this.h = a
    }
    $a(Ui, Ri);
    Ui.prototype.set = function(a, b, c) {
        if (b = Ti(b)) {
            if (c) {
                if (c < Date.now()) {
                    Ui.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = Date.now()
        }
        Ui.xa.set.call(this, a, b)
    };
    Ui.prototype.i = function(a) {
        var b = Ui.xa.i.call(this, a);
        if (b) {
            var c = b.creation,
                d = b.expiration;
            if (d && d < Date.now() || c && c > Date.now()) Ui.prototype.remove.call(this, a);
            else return b
        }
    };

    function Vi() {};

    function Wi() {}
    $a(Wi, Vi);
    Wi.prototype[Symbol.iterator] = function() {
        return Fi(this.Ea(!0)).h()
    };
    Wi.prototype.clear = function() {
        var a = Array.from(this);
        a = t(a);
        for (var b = a.next(); !b.done; b = a.next()) this.remove(b.value)
    };

    function Xi(a) {
        this.h = a
    }
    $a(Xi, Wi);
    k = Xi.prototype;
    k.isAvailable = function() {
        if (!this.h) return !1;
        try {
            return this.h.setItem("__sak", "1"), this.h.removeItem("__sak"), !0
        } catch (a) {
            return !1
        }
    };
    k.set = function(a, b) {
        try {
            this.h.setItem(a, b)
        } catch (c) {
            if (0 == this.h.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    k.get = function(a) {
        a = this.h.getItem(a);
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    k.remove = function(a) {
        this.h.removeItem(a)
    };
    k.Ea = function(a) {
        var b = 0,
            c = this.h,
            d = new Ci;
        d.next = function() {
            if (b >= c.length) return Di;
            var e = c.key(b++);
            if (a) return Ei(e);
            e = c.getItem(e);
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return Ei(e)
        };
        return d
    };
    k.clear = function() {
        this.h.clear()
    };
    k.key = function(a) {
        return this.h.key(a)
    };

    function Yi() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.h = a
    }
    $a(Yi, Xi);

    function Zi(a, b) {
        this.i = a;
        this.h = null;
        var c;
        if (c = Vc) c = !(9 <= Number(nd));
        if (c) {
            $i || ($i = new Ji);
            this.h = $i.get(a);
            this.h || (b ? this.h = document.getElementById(b) : (this.h = document.createElement("userdata"), this.h.addBehavior("#default#userData"), document.body.appendChild(this.h)), $i.set(a, this.h));
            try {
                this.h.load(this.i)
            } catch (d) {
                this.h = null
            }
        }
    }
    $a(Zi, Wi);
    var aj = {
            ".": ".2E",
            "!": ".21",
            "~": ".7E",
            "*": ".2A",
            "'": ".27",
            "(": ".28",
            ")": ".29",
            "%": "."
        },
        $i = null;

    function bj(a) {
        return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(b) {
            return aj[b]
        })
    }
    k = Zi.prototype;
    k.isAvailable = function() {
        return !!this.h
    };
    k.set = function(a, b) {
        this.h.setAttribute(bj(a), b);
        cj(this)
    };
    k.get = function(a) {
        a = this.h.getAttribute(bj(a));
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    k.remove = function(a) {
        this.h.removeAttribute(bj(a));
        cj(this)
    };
    k.Ea = function(a) {
        var b = 0,
            c = this.h.XMLDocument.documentElement.attributes,
            d = new Ci;
        d.next = function() {
            if (b >= c.length) return Di;
            var e = c[b++];
            if (a) return Ei(decodeURIComponent(e.nodeName.replace(/\./g, "%")).slice(1));
            e = e.nodeValue;
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return Ei(e)
        };
        return d
    };
    k.clear = function() {
        for (var a = this.h.XMLDocument.documentElement, b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
        cj(this)
    };

    function cj(a) {
        try {
            a.h.save(a.i)
        } catch (b) {
            throw "Storage mechanism: Quota exceeded";
        }
    };

    function dj(a, b) {
        this.i = a;
        this.h = b + "::"
    }
    $a(dj, Wi);
    dj.prototype.set = function(a, b) {
        this.i.set(this.h + a, b)
    };
    dj.prototype.get = function(a) {
        return this.i.get(this.h + a)
    };
    dj.prototype.remove = function(a) {
        this.i.remove(this.h + a)
    };
    dj.prototype.Ea = function(a) {
        var b = this.i[Symbol.iterator](),
            c = this,
            d = new Ci;
        d.next = function() {
            var e = b.next();
            if (e.done) return e;
            for (e = e.value; e.slice(0, c.h.length) != c.h;) {
                e = b.next();
                if (e.done) return e;
                e = e.value
            }
            return Ei(a ? e.slice(c.h.length) : c.i.get(e))
        };
        return d
    };
    /*

     (The MIT License)

     Copyright (C) 2014 by Vitaly Puzrin

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in
     all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.

     -----------------------------------------------------------------------------
     Ported from zlib, which is under the following license
     https://github.com/madler/zlib/blob/master/zlib.h

     zlib.h -- interface of the 'zlib' general purpose compression library
       version 1.2.8, April 28th, 2013
       Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
       This software is provided 'as-is', without any express or implied
       warranty.  In no event will the authors be held liable for any damages
       arising from the use of this software.
       Permission is granted to anyone to use this software for any purpose,
       including commercial applications, and to alter it and redistribute it
       freely, subject to the following restrictions:
       1. The origin of this software must not be misrepresented; you must not
          claim that you wrote the original software. If you use this software
          in a product, an acknowledgment in the product documentation would be
          appreciated but is not required.
       2. Altered source versions must be plainly marked as such, and must not be
          misrepresented as being the original software.
       3. This notice may not be removed or altered from any source distribution.
       Jean-loup Gailly        Mark Adler
       jloup@gzip.org          madler@alumni.caltech.edu
       The data format used by the zlib library is described by RFCs (Request for
       Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
       (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
    */
    var K = {},
        ej = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
    K.assign = function(a) {
        for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
            var c = b.shift();
            if (c) {
                if ("object" !== typeof c) throw new TypeError(c + "must be non-object");
                for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
        }
        return a
    };
    K.Pc = function(a, b) {
        if (a.length === b) return a;
        if (a.subarray) return a.subarray(0, b);
        a.length = b;
        return a
    };
    var fj = {
            qb: function(a, b, c, d, e) {
                if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
                else
                    for (var f = 0; f < d; f++) a[e + f] = b[c + f]
            },
            ed: function(a) {
                var b, c;
                var d = c = 0;
                for (b = a.length; d < b; d++) c += a[d].length;
                var e = new Uint8Array(c);
                d = c = 0;
                for (b = a.length; d < b; d++) {
                    var f = a[d];
                    e.set(f, c);
                    c += f.length
                }
                return e
            }
        },
        gj = {
            qb: function(a, b, c, d, e) {
                for (var f = 0; f < d; f++) a[e + f] = b[c + f]
            },
            ed: function(a) {
                return [].concat.apply([], a)
            }
        };
    K.Re = function() {
        ej ? (K.nb = Uint8Array, K.Ja = Uint16Array, K.Nd = Int32Array, K.assign(K, fj)) : (K.nb = Array, K.Ja = Array, K.Nd = Array, K.assign(K, gj))
    };
    K.Re();
    var hj = !0;
    try {
        new Uint8Array(1)
    } catch (a) {
        hj = !1
    }

    function ij(a) {
        var b, c, d = a.length,
            e = 0;
        for (b = 0; b < d; b++) {
            var f = a.charCodeAt(b);
            if (55296 === (f & 64512) && b + 1 < d) {
                var g = a.charCodeAt(b + 1);
                56320 === (g & 64512) && (f = 65536 + (f - 55296 << 10) + (g - 56320), b++)
            }
            e += 128 > f ? 1 : 2048 > f ? 2 : 65536 > f ? 3 : 4
        }
        var h = new K.nb(e);
        for (b = c = 0; c < e; b++) f = a.charCodeAt(b), 55296 === (f & 64512) && b + 1 < d && (g = a.charCodeAt(b + 1), 56320 === (g & 64512) && (f = 65536 + (f - 55296 << 10) + (g - 56320), b++)), 128 > f ? h[c++] = f : (2048 > f ? h[c++] = 192 | f >>> 6 : (65536 > f ? h[c++] = 224 | f >>> 12 : (h[c++] = 240 | f >>> 18, h[c++] = 128 | f >>> 12 & 63), h[c++] = 128 | f >>>
            6 & 63), h[c++] = 128 | f & 63);
        return h
    };
    var jj = {};
    jj = function(a, b, c, d) {
        var e = a & 65535 | 0;
        a = a >>> 16 & 65535 | 0;
        for (var f; 0 !== c;) {
            f = 2E3 < c ? 2E3 : c;
            c -= f;
            do e = e + b[d++] | 0, a = a + e | 0; while (--f);
            e %= 65521;
            a %= 65521
        }
        return e | a << 16 | 0
    };
    for (var kj = {}, lj, mj = [], nj = 0; 256 > nj; nj++) {
        lj = nj;
        for (var oj = 0; 8 > oj; oj++) lj = lj & 1 ? 3988292384 ^ lj >>> 1 : lj >>> 1;
        mj[nj] = lj
    }
    kj = function(a, b, c, d) {
        c = d + c;
        for (a ^= -1; d < c; d++) a = a >>> 8 ^ mj[(a ^ b[d]) & 255];
        return a ^ -1
    };
    var pj = {};
    pj = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
    };

    function qj(a) {
        for (var b = a.length; 0 <= --b;) a[b] = 0
    }
    var rj = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        sj = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        tj = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        uj = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        vj = Array(576);
    qj(vj);
    var wj = Array(60);
    qj(wj);
    var xj = Array(512);
    qj(xj);
    var yj = Array(256);
    qj(yj);
    var zj = Array(29);
    qj(zj);
    var Aj = Array(30);
    qj(Aj);

    function Bj(a, b, c, d, e) {
        this.Fd = a;
        this.ge = b;
        this.ee = c;
        this.ae = d;
        this.xe = e;
        this.kd = a && a.length
    }
    var Cj, Dj, Ej;

    function Fj(a, b) {
        this.dd = a;
        this.xb = 0;
        this.Wa = b
    }

    function Gj(a, b) {
        a.S[a.pending++] = b & 255;
        a.S[a.pending++] = b >>> 8 & 255
    }

    function Hj(a, b, c) {
        a.ba > 16 - c ? (a.ja |= b << a.ba & 65535, Gj(a, a.ja), a.ja = b >> 16 - a.ba, a.ba += c - 16) : (a.ja |= b << a.ba & 65535, a.ba += c)
    }

    function Ij(a, b, c) {
        Hj(a, c[2 * b], c[2 * b + 1])
    }

    function Jj(a, b) {
        var c = 0;
        do c |= a & 1, a >>>= 1, c <<= 1; while (0 < --b);
        return c >>> 1
    }

    function Kj(a, b, c) {
        var d = Array(16),
            e = 0,
            f;
        for (f = 1; 15 >= f; f++) d[f] = e = e + c[f - 1] << 1;
        for (c = 0; c <= b; c++) e = a[2 * c + 1], 0 !== e && (a[2 * c] = Jj(d[e]++, e))
    }

    function Lj(a) {
        var b;
        for (b = 0; 286 > b; b++) a.oa[2 * b] = 0;
        for (b = 0; 30 > b; b++) a.cb[2 * b] = 0;
        for (b = 0; 19 > b; b++) a.ea[2 * b] = 0;
        a.oa[512] = 1;
        a.Qa = a.Ab = 0;
        a.va = a.matches = 0
    }

    function Mj(a) {
        8 < a.ba ? Gj(a, a.ja) : 0 < a.ba && (a.S[a.pending++] = a.ja);
        a.ja = 0;
        a.ba = 0
    }

    function Nj(a, b, c) {
        Mj(a);
        Gj(a, c);
        Gj(a, ~c);
        K.qb(a.S, a.window, b, c, a.pending);
        a.pending += c
    }

    function Oj(a, b, c, d) {
        var e = 2 * b,
            f = 2 * c;
        return a[e] < a[f] || a[e] === a[f] && d[b] <= d[c]
    }

    function Pj(a, b, c) {
        for (var d = a.U[c], e = c << 1; e <= a.Na;) {
            e < a.Na && Oj(b, a.U[e + 1], a.U[e], a.depth) && e++;
            if (Oj(b, d, a.U[e], a.depth)) break;
            a.U[c] = a.U[e];
            c = e;
            e <<= 1
        }
        a.U[c] = d
    }

    function Qj(a, b, c) {
        var d = 0;
        if (0 !== a.va) {
            do {
                var e = a.S[a.Hb + 2 * d] << 8 | a.S[a.Hb + 2 * d + 1];
                var f = a.S[a.Fc + d];
                d++;
                if (0 === e) Ij(a, f, b);
                else {
                    var g = yj[f];
                    Ij(a, g + 256 + 1, b);
                    var h = rj[g];
                    0 !== h && (f -= zj[g], Hj(a, f, h));
                    e--;
                    g = 256 > e ? xj[e] : xj[256 + (e >>> 7)];
                    Ij(a, g, c);
                    h = sj[g];
                    0 !== h && (e -= Aj[g], Hj(a, e, h))
                }
            } while (d < a.va)
        }
        Ij(a, 256, b)
    }

    function Rj(a, b) {
        var c = b.dd,
            d = b.Wa.Fd,
            e = b.Wa.kd,
            f = b.Wa.ae,
            g, h = -1;
        a.Na = 0;
        a.ub = 573;
        for (g = 0; g < f; g++) 0 !== c[2 * g] ? (a.U[++a.Na] = h = g, a.depth[g] = 0) : c[2 * g + 1] = 0;
        for (; 2 > a.Na;) {
            var l = a.U[++a.Na] = 2 > h ? ++h : 0;
            c[2 * l] = 1;
            a.depth[l] = 0;
            a.Qa--;
            e && (a.Ab -= d[2 * l + 1])
        }
        b.xb = h;
        for (g = a.Na >> 1; 1 <= g; g--) Pj(a, c, g);
        l = f;
        do g = a.U[1], a.U[1] = a.U[a.Na--], Pj(a, c, 1), d = a.U[1], a.U[--a.ub] = g, a.U[--a.ub] = d, c[2 * l] = c[2 * g] + c[2 * d], a.depth[l] = (a.depth[g] >= a.depth[d] ? a.depth[g] : a.depth[d]) + 1, c[2 * g + 1] = c[2 * d + 1] = l, a.U[1] = l++, Pj(a, c, 1); while (2 <= a.Na);
        a.U[--a.ub] =
            a.U[1];
        g = b.dd;
        l = b.xb;
        d = b.Wa.Fd;
        e = b.Wa.kd;
        f = b.Wa.ge;
        var m = b.Wa.ee,
            p = b.Wa.xe,
            r, y = 0;
        for (r = 0; 15 >= r; r++) a.Ka[r] = 0;
        g[2 * a.U[a.ub] + 1] = 0;
        for (b = a.ub + 1; 573 > b; b++) {
            var u = a.U[b];
            r = g[2 * g[2 * u + 1] + 1] + 1;
            r > p && (r = p, y++);
            g[2 * u + 1] = r;
            if (!(u > l)) {
                a.Ka[r]++;
                var z = 0;
                u >= m && (z = f[u - m]);
                var D = g[2 * u];
                a.Qa += D * (r + z);
                e && (a.Ab += D * (d[2 * u + 1] + z))
            }
        }
        if (0 !== y) {
            do {
                for (r = p - 1; 0 === a.Ka[r];) r--;
                a.Ka[r]--;
                a.Ka[r + 1] += 2;
                a.Ka[p]--;
                y -= 2
            } while (0 < y);
            for (r = p; 0 !== r; r--)
                for (u = a.Ka[r]; 0 !== u;) d = a.U[--b], d > l || (g[2 * d + 1] !== r && (a.Qa += (r - g[2 * d + 1]) * g[2 * d], g[2 *
                    d + 1] = r), u--)
        }
        Kj(c, h, a.Ka)
    }

    function Sj(a, b, c) {
        var d, e = -1,
            f = b[1],
            g = 0,
            h = 7,
            l = 4;
        0 === f && (h = 138, l = 3);
        b[2 * (c + 1) + 1] = 65535;
        for (d = 0; d <= c; d++) {
            var m = f;
            f = b[2 * (d + 1) + 1];
            ++g < h && m === f || (g < l ? a.ea[2 * m] += g : 0 !== m ? (m !== e && a.ea[2 * m]++, a.ea[32]++) : 10 >= g ? a.ea[34]++ : a.ea[36]++, g = 0, e = m, 0 === f ? (h = 138, l = 3) : m === f ? (h = 6, l = 3) : (h = 7, l = 4))
        }
    }

    function Tj(a, b, c) {
        var d, e = -1,
            f = b[1],
            g = 0,
            h = 7,
            l = 4;
        0 === f && (h = 138, l = 3);
        for (d = 0; d <= c; d++) {
            var m = f;
            f = b[2 * (d + 1) + 1];
            if (!(++g < h && m === f)) {
                if (g < l) {
                    do Ij(a, m, a.ea); while (0 !== --g)
                } else 0 !== m ? (m !== e && (Ij(a, m, a.ea), g--), Ij(a, 16, a.ea), Hj(a, g - 3, 2)) : 10 >= g ? (Ij(a, 17, a.ea), Hj(a, g - 3, 3)) : (Ij(a, 18, a.ea), Hj(a, g - 11, 7));
                g = 0;
                e = m;
                0 === f ? (h = 138, l = 3) : m === f ? (h = 6, l = 3) : (h = 7, l = 4)
            }
        }
    }

    function Uj(a) {
        var b = 4093624447,
            c;
        for (c = 0; 31 >= c; c++, b >>>= 1)
            if (b & 1 && 0 !== a.oa[2 * c]) return 0;
        if (0 !== a.oa[18] || 0 !== a.oa[20] || 0 !== a.oa[26]) return 1;
        for (c = 32; 256 > c; c++)
            if (0 !== a.oa[2 * c]) return 1;
        return 0
    }
    var Vj = !1;

    function Wj(a, b, c) {
        a.S[a.Hb + 2 * a.va] = b >>> 8 & 255;
        a.S[a.Hb + 2 * a.va + 1] = b & 255;
        a.S[a.Fc + a.va] = c & 255;
        a.va++;
        0 === b ? a.oa[2 * c]++ : (a.matches++, b--, a.oa[2 * (yj[c] + 256 + 1)]++, a.cb[2 * (256 > b ? xj[b] : xj[256 + (b >>> 7)])]++);
        return a.va === a.Lb - 1
    };

    function Xj(a, b) {
        a.msg = pj[b];
        return b
    }

    function Yj(a) {
        for (var b = a.length; 0 <= --b;) a[b] = 0
    }

    function Zj(a) {
        var b = a.state,
            c = b.pending;
        c > a.I && (c = a.I);
        0 !== c && (K.qb(a.output, b.S, b.Mb, c, a.yb), a.yb += c, b.Mb += c, a.Qc += c, a.I -= c, b.pending -= c, 0 === b.pending && (b.Mb = 0))
    }

    function ak(a, b) {
        var c = 0 <= a.ra ? a.ra : -1,
            d = a.o - a.ra,
            e = 0;
        if (0 < a.level) {
            2 === a.F.vc && (a.F.vc = Uj(a));
            Rj(a, a.fc);
            Rj(a, a.ac);
            Sj(a, a.oa, a.fc.xb);
            Sj(a, a.cb, a.ac.xb);
            Rj(a, a.Xc);
            for (e = 18; 3 <= e && 0 === a.ea[2 * uj[e] + 1]; e--);
            a.Qa += 3 * (e + 1) + 14;
            var f = a.Qa + 3 + 7 >>> 3;
            var g = a.Ab + 3 + 7 >>> 3;
            g <= f && (f = g)
        } else f = g = d + 5;
        if (d + 4 <= f && -1 !== c) Hj(a, b ? 1 : 0, 3), Nj(a, c, d);
        else if (4 === a.strategy || g === f) Hj(a, 2 + (b ? 1 : 0), 3), Qj(a, vj, wj);
        else {
            Hj(a, 4 + (b ? 1 : 0), 3);
            c = a.fc.xb + 1;
            d = a.ac.xb + 1;
            e += 1;
            Hj(a, c - 257, 5);
            Hj(a, d - 1, 5);
            Hj(a, e - 4, 4);
            for (f = 0; f < e; f++) Hj(a, a.ea[2 *
                uj[f] + 1], 3);
            Tj(a, a.oa, c - 1);
            Tj(a, a.cb, d - 1);
            Qj(a, a.oa, a.cb)
        }
        Lj(a);
        b && Mj(a);
        a.ra = a.o;
        Zj(a.F)
    }

    function N(a, b) {
        a.S[a.pending++] = b
    }

    function bk(a, b) {
        a.S[a.pending++] = b >>> 8 & 255;
        a.S[a.pending++] = b & 255
    }

    function ck(a, b) {
        var c = a.qd,
            d = a.o,
            e = a.ta,
            f = a.sd,
            g = a.o > a.ha - 262 ? a.o - (a.ha - 262) : 0,
            h = a.window,
            l = a.Xa,
            m = a.Ha,
            p = a.o + 258,
            r = h[d + e - 1],
            y = h[d + e];
        a.ta >= a.jd && (c >>= 2);
        f > a.u && (f = a.u);
        do {
            var u = b;
            if (h[u + e] === y && h[u + e - 1] === r && h[u] === h[d] && h[++u] === h[d + 1]) {
                d += 2;
                for (u++; h[++d] === h[++u] && h[++d] === h[++u] && h[++d] === h[++u] && h[++d] === h[++u] && h[++d] === h[++u] && h[++d] === h[++u] && h[++d] === h[++u] && h[++d] === h[++u] && d < p;);
                u = 258 - (p - d);
                d = p - 258;
                if (u > e) {
                    a.wb = b;
                    e = u;
                    if (u >= f) break;
                    r = h[d + e - 1];
                    y = h[d + e]
                }
            }
        } while ((b = m[b & l]) > g && 0 !== --c);
        return e <=
            a.u ? e : a.u
    }

    function dk(a) {
        var b = a.ha,
            c;
        do {
            var d = a.Ld - a.u - a.o;
            if (a.o >= b + (b - 262)) {
                K.qb(a.window, a.window, b, b, 0);
                a.wb -= b;
                a.o -= b;
                a.ra -= b;
                var e = c = a.ec;
                do {
                    var f = a.head[--e];
                    a.head[e] = f >= b ? f - b : 0
                } while (--c);
                e = c = b;
                do f = a.Ha[--e], a.Ha[e] = f >= b ? f - b : 0; while (--c);
                d += b
            }
            if (0 === a.F.ia) break;
            e = a.F;
            c = a.window;
            f = a.o + a.u;
            var g = e.ia;
            g > d && (g = d);
            0 === g ? c = 0 : (e.ia -= g, K.qb(c, e.input, e.gb, g, f), 1 === e.state.wrap ? e.D = jj(e.D, c, g, f) : 2 === e.state.wrap && (e.D = kj(e.D, c, g, f)), e.gb += g, e.kb += g, c = g);
            a.u += c;
            if (3 <= a.u + a.qa)
                for (d = a.o - a.qa, a.H = a.window[d],
                    a.H = (a.H << a.Ma ^ a.window[d + 1]) & a.La; a.qa && !(a.H = (a.H << a.Ma ^ a.window[d + 3 - 1]) & a.La, a.Ha[d & a.Xa] = a.head[a.H], a.head[a.H] = d, d++, a.qa--, 3 > a.u + a.qa););
        } while (262 > a.u && 0 !== a.F.ia)
    }

    function ek(a, b) {
        for (var c;;) {
            if (262 > a.u) {
                dk(a);
                if (262 > a.u && 0 === b) return 1;
                if (0 === a.u) break
            }
            c = 0;
            3 <= a.u && (a.H = (a.H << a.Ma ^ a.window[a.o + 3 - 1]) & a.La, c = a.Ha[a.o & a.Xa] = a.head[a.H], a.head[a.H] = a.o);
            0 !== c && a.o - c <= a.ha - 262 && (a.J = ck(a, c));
            if (3 <= a.J)
                if (c = Wj(a, a.o - a.wb, a.J - 3), a.u -= a.J, a.J <= a.Gc && 3 <= a.u) {
                    a.J--;
                    do a.o++, a.H = (a.H << a.Ma ^ a.window[a.o + 3 - 1]) & a.La, a.Ha[a.o & a.Xa] = a.head[a.H], a.head[a.H] = a.o; while (0 !== --a.J);
                    a.o++
                } else a.o += a.J, a.J = 0, a.H = a.window[a.o], a.H = (a.H << a.Ma ^ a.window[a.o + 1]) & a.La;
            else c = Wj(a, 0,
                a.window[a.o]), a.u--, a.o++;
            if (c && (ak(a, !1), 0 === a.F.I)) return 1
        }
        a.qa = 2 > a.o ? a.o : 2;
        return 4 === b ? (ak(a, !0), 0 === a.F.I ? 3 : 4) : a.va && (ak(a, !1), 0 === a.F.I) ? 1 : 2
    }

    function fk(a, b) {
        for (var c, d;;) {
            if (262 > a.u) {
                dk(a);
                if (262 > a.u && 0 === b) return 1;
                if (0 === a.u) break
            }
            c = 0;
            3 <= a.u && (a.H = (a.H << a.Ma ^ a.window[a.o + 3 - 1]) & a.La, c = a.Ha[a.o & a.Xa] = a.head[a.H], a.head[a.H] = a.o);
            a.ta = a.J;
            a.vd = a.wb;
            a.J = 2;
            0 !== c && a.ta < a.Gc && a.o - c <= a.ha - 262 && (a.J = ck(a, c), 5 >= a.J && (1 === a.strategy || 3 === a.J && 4096 < a.o - a.wb) && (a.J = 2));
            if (3 <= a.ta && a.J <= a.ta) {
                d = a.o + a.u - 3;
                c = Wj(a, a.o - 1 - a.vd, a.ta - 3);
                a.u -= a.ta - 1;
                a.ta -= 2;
                do ++a.o <= d && (a.H = (a.H << a.Ma ^ a.window[a.o + 3 - 1]) & a.La, a.Ha[a.o & a.Xa] = a.head[a.H], a.head[a.H] = a.o);
                while (0 !== --a.ta);
                a.eb = 0;
                a.J = 2;
                a.o++;
                if (c && (ak(a, !1), 0 === a.F.I)) return 1
            } else if (a.eb) {
                if ((c = Wj(a, 0, a.window[a.o - 1])) && ak(a, !1), a.o++, a.u--, 0 === a.F.I) return 1
            } else a.eb = 1, a.o++, a.u--
        }
        a.eb && (Wj(a, 0, a.window[a.o - 1]), a.eb = 0);
        a.qa = 2 > a.o ? a.o : 2;
        return 4 === b ? (ak(a, !0), 0 === a.F.I ? 3 : 4) : a.va && (ak(a, !1), 0 === a.F.I) ? 1 : 2
    }

    function gk(a, b) {
        for (var c, d, e, f = a.window;;) {
            if (258 >= a.u) {
                dk(a);
                if (258 >= a.u && 0 === b) return 1;
                if (0 === a.u) break
            }
            a.J = 0;
            if (3 <= a.u && 0 < a.o && (d = a.o - 1, c = f[d], c === f[++d] && c === f[++d] && c === f[++d])) {
                for (e = a.o + 258; c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && d < e;);
                a.J = 258 - (e - d);
                a.J > a.u && (a.J = a.u)
            }
            3 <= a.J ? (c = Wj(a, 1, a.J - 3), a.u -= a.J, a.o += a.J, a.J = 0) : (c = Wj(a, 0, a.window[a.o]), a.u--, a.o++);
            if (c && (ak(a, !1), 0 === a.F.I)) return 1
        }
        a.qa = 0;
        return 4 === b ? (ak(a, !0), 0 === a.F.I ? 3 : 4) :
            a.va && (ak(a, !1), 0 === a.F.I) ? 1 : 2
    }

    function hk(a, b) {
        for (var c;;) {
            if (0 === a.u && (dk(a), 0 === a.u)) {
                if (0 === b) return 1;
                break
            }
            a.J = 0;
            c = Wj(a, 0, a.window[a.o]);
            a.u--;
            a.o++;
            if (c && (ak(a, !1), 0 === a.F.I)) return 1
        }
        a.qa = 0;
        return 4 === b ? (ak(a, !0), 0 === a.F.I ? 3 : 4) : a.va && (ak(a, !1), 0 === a.F.I) ? 1 : 2
    }

    function ik(a, b, c, d, e) {
        this.ne = a;
        this.we = b;
        this.ze = c;
        this.ue = d;
        this.je = e
    }
    var jk;
    jk = [new ik(0, 0, 0, 0, function(a, b) {
            var c = 65535;
            for (c > a.wa - 5 && (c = a.wa - 5);;) {
                if (1 >= a.u) {
                    dk(a);
                    if (0 === a.u && 0 === b) return 1;
                    if (0 === a.u) break
                }
                a.o += a.u;
                a.u = 0;
                var d = a.ra + c;
                if (0 === a.o || a.o >= d)
                    if (a.u = a.o - d, a.o = d, ak(a, !1), 0 === a.F.I) return 1;
                if (a.o - a.ra >= a.ha - 262 && (ak(a, !1), 0 === a.F.I)) return 1
            }
            a.qa = 0;
            if (4 === b) return ak(a, !0), 0 === a.F.I ? 3 : 4;
            a.o > a.ra && ak(a, !1);
            return 1
        }),
        new ik(4, 4, 8, 4, ek), new ik(4, 5, 16, 8, ek), new ik(4, 6, 32, 32, ek), new ik(4, 4, 16, 16, fk), new ik(8, 16, 32, 32, fk), new ik(8, 16, 128, 128, fk), new ik(8, 32, 128, 256, fk), new ik(32, 128, 258, 1024, fk), new ik(32, 258, 258, 4096, fk)
    ];

    function kk() {
        this.F = null;
        this.status = 0;
        this.S = null;
        this.wrap = this.pending = this.Mb = this.wa = 0;
        this.B = null;
        this.za = 0;
        this.method = 8;
        this.vb = -1;
        this.Xa = this.Sc = this.ha = 0;
        this.window = null;
        this.Ld = 0;
        this.head = this.Ha = null;
        this.sd = this.jd = this.strategy = this.level = this.Gc = this.qd = this.ta = this.u = this.wb = this.o = this.eb = this.vd = this.J = this.ra = this.Ma = this.La = this.Bc = this.ec = this.H = 0;
        this.oa = new K.Ja(1146);
        this.cb = new K.Ja(122);
        this.ea = new K.Ja(78);
        Yj(this.oa);
        Yj(this.cb);
        Yj(this.ea);
        this.Xc = this.ac = this.fc =
            null;
        this.Ka = new K.Ja(16);
        this.U = new K.Ja(573);
        Yj(this.U);
        this.ub = this.Na = 0;
        this.depth = new K.Ja(573);
        Yj(this.depth);
        this.ba = this.ja = this.qa = this.matches = this.Ab = this.Qa = this.Hb = this.va = this.Lb = this.Fc = 0
    }

    function lk(a, b) {
        if (!a || !a.state || 5 < b || 0 > b) return a ? Xj(a, -2) : -2;
        var c = a.state;
        if (!a.output || !a.input && 0 !== a.ia || 666 === c.status && 4 !== b) return Xj(a, 0 === a.I ? -5 : -2);
        c.F = a;
        var d = c.vb;
        c.vb = b;
        if (42 === c.status)
            if (2 === c.wrap) a.D = 0, N(c, 31), N(c, 139), N(c, 8), c.B ? (N(c, (c.B.text ? 1 : 0) + (c.B.Ua ? 2 : 0) + (c.B.Ta ? 4 : 0) + (c.B.name ? 8 : 0) + (c.B.comment ? 16 : 0)), N(c, c.B.time & 255), N(c, c.B.time >> 8 & 255), N(c, c.B.time >> 16 & 255), N(c, c.B.time >> 24 & 255), N(c, 9 === c.level ? 2 : 2 <= c.strategy || 2 > c.level ? 4 : 0), N(c, c.B.os & 255), c.B.Ta && c.B.Ta.length &&
                (N(c, c.B.Ta.length & 255), N(c, c.B.Ta.length >> 8 & 255)), c.B.Ua && (a.D = kj(a.D, c.S, c.pending, 0)), c.za = 0, c.status = 69) : (N(c, 0), N(c, 0), N(c, 0), N(c, 0), N(c, 0), N(c, 9 === c.level ? 2 : 2 <= c.strategy || 2 > c.level ? 4 : 0), N(c, 3), c.status = 113);
            else {
                var e = 8 + (c.Sc - 8 << 4) << 8;
                e |= (2 <= c.strategy || 2 > c.level ? 0 : 6 > c.level ? 1 : 6 === c.level ? 2 : 3) << 6;
                0 !== c.o && (e |= 32);
                c.status = 113;
                bk(c, e + (31 - e % 31));
                0 !== c.o && (bk(c, a.D >>> 16), bk(c, a.D & 65535));
                a.D = 1
            }
        if (69 === c.status)
            if (c.B.Ta) {
                for (e = c.pending; c.za < (c.B.Ta.length & 65535) && (c.pending !== c.wa || (c.B.Ua &&
                        c.pending > e && (a.D = kj(a.D, c.S, c.pending - e, e)), Zj(a), e = c.pending, c.pending !== c.wa));) N(c, c.B.Ta[c.za] & 255), c.za++;
                c.B.Ua && c.pending > e && (a.D = kj(a.D, c.S, c.pending - e, e));
                c.za === c.B.Ta.length && (c.za = 0, c.status = 73)
            } else c.status = 73;
        if (73 === c.status)
            if (c.B.name) {
                e = c.pending;
                do {
                    if (c.pending === c.wa && (c.B.Ua && c.pending > e && (a.D = kj(a.D, c.S, c.pending - e, e)), Zj(a), e = c.pending, c.pending === c.wa)) {
                        var f = 1;
                        break
                    }
                    f = c.za < c.B.name.length ? c.B.name.charCodeAt(c.za++) & 255 : 0;
                    N(c, f)
                } while (0 !== f);
                c.B.Ua && c.pending > e && (a.D = kj(a.D,
                    c.S, c.pending - e, e));
                0 === f && (c.za = 0, c.status = 91)
            } else c.status = 91;
        if (91 === c.status)
            if (c.B.comment) {
                e = c.pending;
                do {
                    if (c.pending === c.wa && (c.B.Ua && c.pending > e && (a.D = kj(a.D, c.S, c.pending - e, e)), Zj(a), e = c.pending, c.pending === c.wa)) {
                        f = 1;
                        break
                    }
                    f = c.za < c.B.comment.length ? c.B.comment.charCodeAt(c.za++) & 255 : 0;
                    N(c, f)
                } while (0 !== f);
                c.B.Ua && c.pending > e && (a.D = kj(a.D, c.S, c.pending - e, e));
                0 === f && (c.status = 103)
            } else c.status = 103;
        103 === c.status && (c.B.Ua ? (c.pending + 2 > c.wa && Zj(a), c.pending + 2 <= c.wa && (N(c, a.D & 255), N(c, a.D >>
            8 & 255), a.D = 0, c.status = 113)) : c.status = 113);
        if (0 !== c.pending) {
            if (Zj(a), 0 === a.I) return c.vb = -1, 0
        } else if (0 === a.ia && (b << 1) - (4 < b ? 9 : 0) <= (d << 1) - (4 < d ? 9 : 0) && 4 !== b) return Xj(a, -5);
        if (666 === c.status && 0 !== a.ia) return Xj(a, -5);
        if (0 !== a.ia || 0 !== c.u || 0 !== b && 666 !== c.status) {
            d = 2 === c.strategy ? hk(c, b) : 3 === c.strategy ? gk(c, b) : jk[c.level].je(c, b);
            if (3 === d || 4 === d) c.status = 666;
            if (1 === d || 3 === d) return 0 === a.I && (c.vb = -1), 0;
            if (2 === d && (1 === b ? (Hj(c, 2, 3), Ij(c, 256, vj), 16 === c.ba ? (Gj(c, c.ja), c.ja = 0, c.ba = 0) : 8 <= c.ba && (c.S[c.pending++] =
                    c.ja & 255, c.ja >>= 8, c.ba -= 8)) : 5 !== b && (Hj(c, 0, 3), Nj(c, 0, 0), 3 === b && (Yj(c.head), 0 === c.u && (c.o = 0, c.ra = 0, c.qa = 0))), Zj(a), 0 === a.I)) return c.vb = -1, 0
        }
        if (4 !== b) return 0;
        if (0 >= c.wrap) return 1;
        2 === c.wrap ? (N(c, a.D & 255), N(c, a.D >> 8 & 255), N(c, a.D >> 16 & 255), N(c, a.D >> 24 & 255), N(c, a.kb & 255), N(c, a.kb >> 8 & 255), N(c, a.kb >> 16 & 255), N(c, a.kb >> 24 & 255)) : (bk(c, a.D >>> 16), bk(c, a.D & 65535));
        Zj(a);
        0 < c.wrap && (c.wrap = -c.wrap);
        return 0 !== c.pending ? 0 : 1
    };
    var mk = {};
    mk = function() {
        this.input = null;
        this.kb = this.ia = this.gb = 0;
        this.output = null;
        this.Qc = this.I = this.yb = 0;
        this.msg = "";
        this.state = null;
        this.vc = 2;
        this.D = 0
    };
    var nk = Object.prototype.toString;

    function ok(a) {
        if (!(this instanceof ok)) return new ok(a);
        a = this.options = K.assign({
            level: -1,
            method: 8,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: 0,
            to: ""
        }, a || {});
        a.raw && 0 < a.windowBits ? a.windowBits = -a.windowBits : a.gzip && 0 < a.windowBits && 16 > a.windowBits && (a.windowBits += 16);
        this.err = 0;
        this.msg = "";
        this.ended = !1;
        this.chunks = [];
        this.F = new mk;
        this.F.I = 0;
        var b = this.F;
        var c = a.level,
            d = a.method,
            e = a.windowBits,
            f = a.memLevel,
            g = a.strategy;
        if (b) {
            var h = 1; - 1 === c && (c = 6);
            0 > e ? (h = 0, e = -e) : 15 < e && (h = 2, e -= 16);
            if (1 > f || 9 <
                f || 8 !== d || 8 > e || 15 < e || 0 > c || 9 < c || 0 > g || 4 < g) b = Xj(b, -2);
            else {
                8 === e && (e = 9);
                var l = new kk;
                b.state = l;
                l.F = b;
                l.wrap = h;
                l.B = null;
                l.Sc = e;
                l.ha = 1 << l.Sc;
                l.Xa = l.ha - 1;
                l.Bc = f + 7;
                l.ec = 1 << l.Bc;
                l.La = l.ec - 1;
                l.Ma = ~~((l.Bc + 3 - 1) / 3);
                l.window = new K.nb(2 * l.ha);
                l.head = new K.Ja(l.ec);
                l.Ha = new K.Ja(l.ha);
                l.Lb = 1 << f + 6;
                l.wa = 4 * l.Lb;
                l.S = new K.nb(l.wa);
                l.Hb = 1 * l.Lb;
                l.Fc = 3 * l.Lb;
                l.level = c;
                l.strategy = g;
                l.method = d;
                if (b && b.state) {
                    b.kb = b.Qc = 0;
                    b.vc = 2;
                    c = b.state;
                    c.pending = 0;
                    c.Mb = 0;
                    0 > c.wrap && (c.wrap = -c.wrap);
                    c.status = c.wrap ? 42 : 113;
                    b.D = 2 === c.wrap ?
                        0 : 1;
                    c.vb = 0;
                    if (!Vj) {
                        d = Array(16);
                        for (f = g = 0; 28 > f; f++)
                            for (zj[f] = g, e = 0; e < 1 << rj[f]; e++) yj[g++] = f;
                        yj[g - 1] = f;
                        for (f = g = 0; 16 > f; f++)
                            for (Aj[f] = g, e = 0; e < 1 << sj[f]; e++) xj[g++] = f;
                        for (g >>= 7; 30 > f; f++)
                            for (Aj[f] = g << 7, e = 0; e < 1 << sj[f] - 7; e++) xj[256 + g++] = f;
                        for (e = 0; 15 >= e; e++) d[e] = 0;
                        for (e = 0; 143 >= e;) vj[2 * e + 1] = 8, e++, d[8]++;
                        for (; 255 >= e;) vj[2 * e + 1] = 9, e++, d[9]++;
                        for (; 279 >= e;) vj[2 * e + 1] = 7, e++, d[7]++;
                        for (; 287 >= e;) vj[2 * e + 1] = 8, e++, d[8]++;
                        Kj(vj, 287, d);
                        for (e = 0; 30 > e; e++) wj[2 * e + 1] = 5, wj[2 * e] = Jj(e, 5);
                        Cj = new Bj(vj, rj, 257, 286, 15);
                        Dj = new Bj(wj,
                            sj, 0, 30, 15);
                        Ej = new Bj([], tj, 0, 19, 7);
                        Vj = !0
                    }
                    c.fc = new Fj(c.oa, Cj);
                    c.ac = new Fj(c.cb, Dj);
                    c.Xc = new Fj(c.ea, Ej);
                    c.ja = 0;
                    c.ba = 0;
                    Lj(c);
                    c = 0
                } else c = Xj(b, -2);
                0 === c && (b = b.state, b.Ld = 2 * b.ha, Yj(b.head), b.Gc = jk[b.level].we, b.jd = jk[b.level].ne, b.sd = jk[b.level].ze, b.qd = jk[b.level].ue, b.o = 0, b.ra = 0, b.u = 0, b.qa = 0, b.J = b.ta = 2, b.eb = 0, b.H = 0);
                b = c
            }
        } else b = -2;
        if (0 !== b) throw Error(pj[b]);
        a.header && (b = this.F) && b.state && 2 === b.state.wrap && (b.state.B = a.header);
        if (a.dictionary) {
            var m;
            "string" === typeof a.dictionary ? m = ij(a.dictionary) :
                "[object ArrayBuffer]" === nk.call(a.dictionary) ? m = new Uint8Array(a.dictionary) : m = a.dictionary;
            a = this.F;
            f = m;
            g = f.length;
            if (a && a.state)
                if (m = a.state, b = m.wrap, 2 === b || 1 === b && 42 !== m.status || m.u) b = -2;
                else {
                    1 === b && (a.D = jj(a.D, f, g, 0));
                    m.wrap = 0;
                    g >= m.ha && (0 === b && (Yj(m.head), m.o = 0, m.ra = 0, m.qa = 0), c = new K.nb(m.ha), K.qb(c, f, g - m.ha, m.ha, 0), f = c, g = m.ha);
                    c = a.ia;
                    d = a.gb;
                    e = a.input;
                    a.ia = g;
                    a.gb = 0;
                    a.input = f;
                    for (dk(m); 3 <= m.u;) {
                        f = m.o;
                        g = m.u - 2;
                        do m.H = (m.H << m.Ma ^ m.window[f + 3 - 1]) & m.La, m.Ha[f & m.Xa] = m.head[m.H], m.head[m.H] = f, f++; while (--g);
                        m.o = f;
                        m.u = 2;
                        dk(m)
                    }
                    m.o += m.u;
                    m.ra = m.o;
                    m.qa = m.u;
                    m.u = 0;
                    m.J = m.ta = 2;
                    m.eb = 0;
                    a.gb = d;
                    a.input = e;
                    a.ia = c;
                    m.wrap = b;
                    b = 0
                }
            else b = -2;
            if (0 !== b) throw Error(pj[b]);
            this.xf = !0
        }
    }
    ok.prototype.push = function(a, b) {
        var c = this.F,
            d = this.options.chunkSize;
        if (this.ended) return !1;
        var e = b === ~~b ? b : !0 === b ? 4 : 0;
        "string" === typeof a ? c.input = ij(a) : "[object ArrayBuffer]" === nk.call(a) ? c.input = new Uint8Array(a) : c.input = a;
        c.gb = 0;
        c.ia = c.input.length;
        do {
            0 === c.I && (c.output = new K.nb(d), c.yb = 0, c.I = d);
            a = lk(c, e);
            if (1 !== a && 0 !== a) return pk(this, a), this.ended = !0, !1;
            if (0 === c.I || 0 === c.ia && (4 === e || 2 === e))
                if ("string" === this.options.to) {
                    var f = K.Pc(c.output, c.yb);
                    b = f;
                    f = f.length;
                    if (65537 > f && (b.subarray && hj || !b.subarray)) b =
                        String.fromCharCode.apply(null, K.Pc(b, f));
                    else {
                        for (var g = "", h = 0; h < f; h++) g += String.fromCharCode(b[h]);
                        b = g
                    }
                    this.chunks.push(b)
                } else b = K.Pc(c.output, c.yb), this.chunks.push(b)
        } while ((0 < c.ia || 0 === c.I) && 1 !== a);
        if (4 === e) return (c = this.F) && c.state ? (d = c.state.status, 42 !== d && 69 !== d && 73 !== d && 91 !== d && 103 !== d && 113 !== d && 666 !== d ? a = Xj(c, -2) : (c.state = null, a = 113 === d ? Xj(c, -3) : 0)) : a = -2, pk(this, a), this.ended = !0, 0 === a;
        2 === e && (pk(this, 0), c.I = 0);
        return !0
    };

    function pk(a, b) {
        0 === b && (a.result = "string" === a.options.to ? a.chunks.join("") : K.ed(a.chunks));
        a.chunks = [];
        a.err = b;
        a.msg = a.F.msg
    }

    function qk(a) {
        var b = b || {};
        b.gzip = !0;
        b = new ok(b);
        b.push(a, !0);
        if (b.err) throw b.msg || pj[b.err];
        return b.result
    };

    function rk(a) {
        return Gb(null === a ? "null" : void 0 === a ? "undefined" : a)
    };

    function sk(a) {
        this.name = a
    };
    var tk = new sk("rawColdConfigGroup");
    var uk = new sk("rawHotConfigGroup");
    var vk = new sk("commandExecutorCommand");

    function wk(a) {
        I.call(this, a)
    }
    v(wk, I);

    function xk(a) {
        I.call(this, a)
    }
    v(xk, I);

    function yk(a) {
        I.call(this, a, -1, yk.h)
    }
    v(yk, I);
    yk.h = [2];

    function zk(a) {
        I.call(this, a, -1, zk.h)
    }
    v(zk, I);
    zk.prototype.getPlayerType = function() {
        return he(Od(this, 36), 0)
    };
    zk.prototype.setHomeGroupInfo = function(a) {
        return H(this, yk, 81, a)
    };
    zk.prototype.clearLocationPlayabilityToken = function() {
        return F(this, 89, void 0, !1)
    };
    zk.h = [9, 66, 24, 32, 86, 100, 101];

    function Ak(a) {
        I.call(this, a)
    }
    v(Ak, I);
    Ak.prototype.getKey = function() {
        return ie(this, 1)
    };
    Ak.prototype.getValue = function() {
        return ie(this, 2 === Yd(this, Bk) ? 2 : -1)
    };
    var Bk = [2, 3, 4, 5, 6];

    function Ck(a) {
        I.call(this, a, -1, Ck.h)
    }
    v(Ck, I);
    Ck.h = [15, 26, 28];

    function Dk(a) {
        I.call(this, a, -1, Dk.h)
    }
    v(Dk, I);
    Dk.h = [5];

    function Ek(a) {
        I.call(this, a)
    }
    v(Ek, I);

    function Fk(a) {
        I.call(this, a, -1, Fk.h)
    }
    v(Fk, I);
    Fk.prototype.setSafetyMode = function(a) {
        return F(this, 5, a)
    };
    Fk.h = [12];

    function Gk(a) {
        I.call(this, a, -1, Gk.h)
    }
    v(Gk, I);
    Gk.h = [12];
    var Hk = new sk("continuationCommand");
    var Ik = new sk("signalAction");
    var Jk = new sk("webCommandMetadata");
    var Kk = new sk("signalServiceEndpoint");
    var Lk = {
        rf: "EMBEDDED_PLAYER_MODE_UNKNOWN",
        nf: "EMBEDDED_PLAYER_MODE_DEFAULT",
        qf: "EMBEDDED_PLAYER_MODE_PFP",
        pf: "EMBEDDED_PLAYER_MODE_PFL"
    };
    var Mk = new sk("feedbackEndpoint");
    var Nk = {
        wf: "WEB_DISPLAY_MODE_UNKNOWN",
        sf: "WEB_DISPLAY_MODE_BROWSER",
        uf: "WEB_DISPLAY_MODE_MINIMAL_UI",
        vf: "WEB_DISPLAY_MODE_STANDALONE",
        tf: "WEB_DISPLAY_MODE_FULLSCREEN"
    };

    function Ok(a) {
        I.call(this, a)
    }
    v(Ok, I);
    Ok.prototype.getKey = function() {
        return ie(this, 1)
    };
    Ok.prototype.getValue = function() {
        return ie(this, 2)
    };

    function Pk(a) {
        I.call(this, a, -1, Pk.h)
    }
    v(Pk, I);
    Pk.h = [4, 5];

    function Qk(a) {
        I.call(this, a)
    }
    v(Qk, I);
    Qk.prototype.getLineNumber = function() {
        return he(Od(this, 2), 0)
    };
    Qk.prototype.getColumnNumber = function() {
        return he(Od(this, 3), 0)
    };

    function Rk(a) {
        I.call(this, a)
    }
    v(Rk, I);
    var Sk = [2, 3, 4, 5];

    function Tk(a) {
        I.call(this, a)
    }
    v(Tk, I);
    Tk.prototype.getMessage = function() {
        return ie(this, 1)
    };
    Tk.prototype.getLevel = function() {
        return he(Od(this, 2), 0)
    };

    function Uk(a) {
        I.call(this, a)
    }
    v(Uk, I);

    function Vk(a) {
        I.call(this, a)
    }
    v(Vk, I);

    function ll(a) {
        I.call(this, a, -1, ll.h)
    }
    v(ll, I);
    ll.h = [10, 17];

    function ml(a) {
        I.call(this, a)
    }
    v(ml, I);

    function nl(a) {
        I.call(this, a)
    }
    v(nl, I);

    function ol(a) {
        I.call(this, a)
    }
    v(ol, I);

    function pl(a) {
        I.call(this, a)
    }
    v(pl, I);

    function ql(a) {
        I.call(this, a)
    }
    v(ql, I);

    function rl(a) {
        var b = new ql;
        return F(b, 1, a)
    }
    ql.prototype.getId = function() {
        return ie(this, 2)
    };

    function sl(a, b) {
        return F(a, 2, b)
    };

    function tl(a) {
        I.call(this, a)
    }
    v(tl, I);

    function ul(a) {
        I.call(this, a, -1, ul.h)
    }
    v(ul, I);
    ul.prototype.getPlayerType = function() {
        return he(Od(this, 7), 0)
    };
    ul.prototype.setVideoId = function(a) {
        return F(this, 19, a)
    };

    function vl(a, b) {
        de(a, 68, ql, b)
    }
    ul.h = [112, 83, 68];

    function wl(a) {
        I.call(this, a)
    }
    v(wl, I);

    function xl(a) {
        I.call(this, a)
    }
    v(xl, I);

    function yl(a) {
        I.call(this, a)
    }
    v(yl, I);

    function zl(a) {
        I.call(this, a, 475)
    }
    v(zl, I);
    var Al = [2, 3, 5, 6, 7, 11, 13, 20, 21, 22, 23, 24, 28, 32, 37, 45, 59, 72, 73, 74, 76, 78, 79, 80, 85, 91, 97, 100, 102, 105, 111, 117, 119, 126, 127, 136, 146, 148, 151, 156, 157, 158, 159, 163, 164, 168, 176, 177, 178, 179, 184, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 208, 209, 215, 219, 222, 225, 226, 227, 229, 232, 233, 234, 240, 241, 244, 247, 248, 249, 251, 254, 255, 256, 257, 258, 259, 260, 261, 266, 270, 272, 278, 288, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 320, 321, 323, 324, 327, 328, 330, 331, 332, 334, 337, 338, 340, 344, 348, 350, 351, 352, 353, 354,
        355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375, 378, 380, 381, 383, 388, 389, 402, 403, 410, 411, 412, 413, 414, 415, 416, 417, 418, 423, 424, 425, 426, 427, 429, 430, 431, 439, 441, 444, 448, 458, 469, 471, 473, 474
    ];

    function Bl(a) {
        I.call(this, a)
    }
    v(Bl, I);

    function Cl(a) {
        I.call(this, a)
    }
    v(Cl, I);
    Cl.prototype.setVideoId = function(a) {
        return Xd(this, 1, Dl, a)
    };
    Cl.prototype.getPlaylistId = function() {
        var a = 2 === Yd(this, Dl) ? 2 : -1;
        return Od(this, a)
    };
    var Dl = [1, 2];

    function El(a) {
        I.call(this, a, -1, El.h)
    }
    v(El, I);
    El.h = [3];
    var Fl = new sk("webPlayerShareEntityServiceEndpoint");
    var Gl = new sk("playlistEditEndpoint");
    var Hl = new sk("modifyChannelNotificationPreferenceEndpoint");
    var Il = new sk("unsubscribeEndpoint");
    var Jl = new sk("subscribeEndpoint");

    function Kl() {
        var a = Ll;
        B("yt.ads.biscotti.getId_") || A("yt.ads.biscotti.getId_", a)
    }

    function Ml(a) {
        A("yt.ads.biscotti.lastId_", a)
    };

    function Nl(a, b) {
        1 < b.length ? a[b[0]] = b[1] : 1 === b.length && Object.assign(a, b[0])
    };
    var Ol = x.window,
        Pl, Ql, Rl = (null == Ol ? void 0 : null == (Pl = Ol.yt) ? void 0 : Pl.config_) || (null == Ol ? void 0 : null == (Ql = Ol.ytcfg) ? void 0 : Ql.data_) || {};
    A("yt.config_", Rl);

    function Sl() {
        Nl(Rl, arguments)
    }

    function O(a, b) {
        return a in Rl ? Rl[a] : b
    }

    function Tl() {
        var a = Rl.EXPERIMENT_FLAGS;
        return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0
    };
    var Ul = [];

    function Vl(a) {
        Ul.forEach(function(b) {
            return b(a)
        })
    }

    function Wl(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                Xl(b)
            }
        } : a
    }

    function Xl(a) {
        var b = B("yt.logging.errors.log");
        b ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0) : (b = O("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]), Sl("ERRORS", b));
        Vl(a)
    }

    function Yl(a, b, c, d, e) {
        var f = B("yt.logging.errors.log");
        f ? f(a, "WARNING", b, c, d, void 0, e) : (f = O("ERRORS", []), f.push([a, "WARNING", b, c, d, void 0, e]), Sl("ERRORS", f))
    };
    var Zl = /^[\w.]*$/,
        $l = {
            q: !0,
            search_query: !0
        };

    function am(a, b) {
        b = a.split(b);
        for (var c = {}, d = 0, e = b.length; d < e; d++) {
            var f = b[d].split("=");
            if (1 == f.length && f[0] || 2 == f.length) try {
                var g = bm(f[0] || ""),
                    h = bm(f[1] || "");
                g in c ? Array.isArray(c[g]) ? lb(c[g], h) : c[g] = [c[g], h] : c[g] = h
            } catch (r) {
                var l = r,
                    m = f[0],
                    p = String(am);
                l.args = [{
                    key: m,
                    value: f[1],
                    query: a,
                    method: cm == p ? "unchanged" : p
                }];
                $l.hasOwnProperty(m) || Yl(l)
            }
        }
        return c
    }
    var cm = String(am);

    function dm(a) {
        var b = [];
        mb(a, function(c, d) {
            var e = encodeURIComponent(String(d)),
                f;
            Array.isArray(c) ? f = c : f = [c];
            gb(f, function(g) {
                "" == g ? b.push(e) : b.push(e + "=" + encodeURIComponent(String(g)))
            })
        });
        return b.join("&")
    }

    function em(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        return am(a, "&")
    }

    function fm(a) {
        return -1 != a.indexOf("?") ? (a = (a || "").split("#")[0], a = a.split("?", 2), em(1 < a.length ? a[1] : a[0])) : {}
    }

    function gm(a, b, c) {
        var d = a.split("#", 2);
        a = d[0];
        d = 1 < d.length ? "#" + d[1] : "";
        var e = a.split("?", 2);
        a = e[0];
        e = em(e[1] || "");
        for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
        return Ec(a, e) + d
    }

    function hm(a) {
        if (!b) var b = window.location.href;
        var c = wc(1, a),
            d = xc(a);
        c && d ? (a = a.match(uc), b = b.match(uc), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? xc(b) == d && (Number(wc(4, b)) || null) == (Number(wc(4, a)) || null) : !0;
        return a
    }

    function bm(a) {
        return a && a.match(Zl) ? a : decodeURIComponent(a.replace(/\+/g, " "))
    };

    function im(a) {
        var b = jm;
        a = void 0 === a ? B("yt.ads.biscotti.lastId_") || "" : a;
        var c = Object,
            d = c.assign,
            e = {};
        e.dt = ii;
        e.flash = "0";
        a: {
            try {
                var f = b.h.top.location.href
            } catch (ma) {
                f = 2;
                break a
            }
            f = f ? f === b.i.location.href ? 0 : 1 : 2
        }
        e = (e.frm = f, e);
        try {
            e.u_tz = -(new Date).getTimezoneOffset();
            var g = void 0 === g ? Nh : g;
            try {
                var h = g.history.length
            } catch (ma) {
                h = 0
            }
            e.u_his = h;
            var l;
            e.u_h = null == (l = Nh.screen) ? void 0 : l.height;
            var m;
            e.u_w = null == (m = Nh.screen) ? void 0 : m.width;
            var p;
            e.u_ah = null == (p = Nh.screen) ? void 0 : p.availHeight;
            var r;
            e.u_aw =
                null == (r = Nh.screen) ? void 0 : r.availWidth;
            var y;
            e.u_cd = null == (y = Nh.screen) ? void 0 : y.colorDepth
        } catch (ma) {}
        h = b.h;
        try {
            var u = h.screenX;
            var z = h.screenY
        } catch (ma) {}
        try {
            var D = h.outerWidth;
            var G = h.outerHeight
        } catch (ma) {}
        try {
            var M = h.innerWidth;
            var P = h.innerHeight
        } catch (ma) {}
        try {
            var T = h.screenLeft;
            var da = h.screenTop
        } catch (ma) {}
        try {
            M = h.innerWidth, P = h.innerHeight
        } catch (ma) {}
        try {
            var Z = h.screen.availWidth;
            var na = h.screen.availTop
        } catch (ma) {}
        u = [T, da, u, z, Z, na, D, G, M, P];
        try {
            var Ka = (b.h.top || window).document,
                xa = "CSS1Compat" ==
                Ka.compatMode ? Ka.documentElement : Ka.body;
            var ya = (new qf(xa.clientWidth, xa.clientHeight)).round()
        } catch (ma) {
            ya = new qf(-12245933, -12245933)
        }
        Ka = ya;
        ya = {};
        var ua = void 0 === ua ? x : ua;
        xa = new ri;
        "SVGElement" in ua && "createElementNS" in ua.document && xa.set(0);
        z = fi();
        z["allow-top-navigation-by-user-activation"] && xa.set(1);
        z["allow-popups-to-escape-sandbox"] && xa.set(2);
        ua.crypto && ua.crypto.subtle && xa.set(3);
        "TextDecoder" in ua && "TextEncoder" in ua && xa.set(4);
        ua = si(xa);
        ya.bc = ua;
        ya.bih = Ka.height;
        ya.biw = Ka.width;
        ya.brdim =
            u.join();
        b = b.i;
        b = (ya.vis = b.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""] || 0, ya.wgl = !!Nh.WebGLRenderingContext, ya);
        c = d.call(c, e, b);
        c.ca_type = "image";
        a && (c.bid = a);
        return c
    }
    var jm = new function() {
        var a = window.document;
        this.h = window;
        this.i = a
    };
    A("yt.ads_.signals_.getAdSignalsString", function(a) {
        return dm(im(a))
    });
    Date.now();
    navigator.userAgent.indexOf(" (CrKey ");

    function R(a) {
        a = km(a);
        return "string" === typeof a && "false" === a ? !1 : !!a
    }

    function lm(a, b) {
        a = km(a);
        return void 0 === a && void 0 !== b ? b : Number(a || 0)
    }

    function mm() {
        return O("EXPERIMENTS_TOKEN", "")
    }

    function km(a) {
        var b = O("EXPERIMENTS_FORCED_FLAGS", {}) || {};
        return void 0 !== b[a] ? b[a] : O("EXPERIMENT_FLAGS", {})[a]
    }

    function nm() {
        for (var a = [], b = O("EXPERIMENTS_FORCED_FLAGS", {}), c = t(Object.keys(b)), d = c.next(); !d.done; d = c.next()) d = d.value, a.push({
            key: d,
            value: String(b[d])
        });
        c = O("EXPERIMENT_FLAGS", {});
        var e = t(Object.keys(c));
        for (d = e.next(); !d.done; d = e.next()) d = d.value, d.startsWith("force_") && void 0 === b[d] && a.push({
            key: d,
            value: String(c[d])
        });
        return a
    };
    var om = "XMLHttpRequest" in x ? function() {
        return new XMLHttpRequest
    } : null;

    function pm() {
        if (!om) return null;
        var a = om();
        return "open" in a ? a : null
    }

    function qm(a) {
        switch (a && "status" in a ? a.status : -1) {
            case 200:
            case 201:
            case 202:
            case 203:
            case 204:
            case 205:
            case 206:
            case 304:
                return !0;
            default:
                return !1
        }
    };

    function rm(a, b) {
        "function" === typeof a && (a = Wl(a));
        return window.setTimeout(a, b)
    };
    var sm = {
            Authorization: "AUTHORIZATION",
            "X-Goog-EOM-Visitor-Id": "EOM_VISITOR_DATA",
            "X-Goog-Visitor-Id": "SANDBOXED_VISITOR_ID",
            "X-Youtube-Domain-Admin-State": "DOMAIN_ADMIN_STATE",
            "X-Youtube-Chrome-Connected": "CHROME_CONNECTED_HEADER",
            "X-YouTube-Client-Name": "INNERTUBE_CONTEXT_CLIENT_NAME",
            "X-YouTube-Client-Version": "INNERTUBE_CONTEXT_CLIENT_VERSION",
            "X-YouTube-Delegation-Context": "INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
            "X-YouTube-Device": "DEVICE",
            "X-Youtube-Identity-Token": "ID_TOKEN",
            "X-YouTube-Page-CL": "PAGE_CL",
            "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
            "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM",
            "X-Goog-AuthUser": "SESSION_INDEX",
            "X-Goog-PageId": "DELEGATED_SESSION_ID"
        },
        tm = "app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(ji)),
        um = !1;

    function wm(a, b) {
        b = void 0 === b ? {} : b;
        var c = hm(a),
            d = R("web_ajax_ignore_global_headers_if_set"),
            e;
        for (e in sm) {
            var f = O(sm[e]);
            "X-Goog-Visitor-Id" !== e || f || (f = O("VISITOR_DATA"));
            !f || !c && xc(a) || d && void 0 !== b[e] || !(R("move_vss_away_from_login_info_cookie") || "X-Goog-AuthUser" !== e && "X-Goog-PageId" !== e) || (b[e] = f)
        }
        R("move_vss_away_from_login_info_cookie") && c && O("SESSION_INDEX") && (b["X-Yt-Auth-Test"] = "test");
        "X-Goog-EOM-Visitor-Id" in b && "X-Goog-Visitor-Id" in b && delete b["X-Goog-Visitor-Id"];
        if (c || !xc(a)) b["X-YouTube-Utc-Offset"] =
            String(-(new Date).getTimezoneOffset());
        if (c || !xc(a)) {
            try {
                var g = (new Intl.DateTimeFormat).resolvedOptions().timeZone
            } catch (h) {}
            g && (b["X-YouTube-Time-Zone"] = g)
        }
        document.location.hostname.endsWith("youtubeeducation.com") || !c && xc(a) || (b["X-YouTube-Ad-Signals"] = dm(im()));
        return b
    }

    function xm(a) {
        var b = window.location.search,
            c = xc(a);
        R("debug_handle_relative_url_for_query_forward_killswitch") || !c && hm(a) && (c = document.location.hostname);
        var d = vc(wc(5, a));
        d = (c = c && (c.endsWith("youtube.com") || c.endsWith("youtube-nocookie.com"))) && d && d.startsWith("/api/");
        if (!c || d) return a;
        var e = em(b),
            f = {};
        gb(tm, function(g) {
            e[g] && (f[g] = e[g])
        });
        return gm(a, f || {}, !1)
    }

    function ym(a, b) {
        var c = b.format || "JSON";
        a = zm(a, b);
        var d = Am(a, b),
            e = !1,
            f = Bm(a, function(l) {
                if (!e) {
                    e = !0;
                    h && window.clearTimeout(h);
                    var m = qm(l),
                        p = null,
                        r = 400 <= l.status && 500 > l.status,
                        y = 500 <= l.status && 600 > l.status;
                    if (m || r || y) p = Cm(a, c, l, b.convertToSafeHtml);
                    if (m) a: if (l && 204 == l.status) m = !0;
                        else {
                            switch (c) {
                                case "XML":
                                    m = 0 == parseInt(p && p.return_code, 10);
                                    break a;
                                case "RAW":
                                    m = !0;
                                    break a
                            }
                            m = !!p
                        }
                    p = p || {};
                    r = b.context || x;
                    m ? b.onSuccess && b.onSuccess.call(r, l, p) : b.onError && b.onError.call(r, l, p);
                    b.onFinish && b.onFinish.call(r,
                        l, p)
                }
            }, b.method, d, b.headers, b.responseType, b.withCredentials);
        d = b.timeout || 0;
        if (b.onTimeout && 0 < d) {
            var g = b.onTimeout;
            var h = rm(function() {
                e || (e = !0, f.abort(), window.clearTimeout(h), g.call(b.context || x, f))
            }, d)
        }
        return f
    }

    function zm(a, b) {
        b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var c = O("XSRF_FIELD_NAME");
        if (b = b.urlParams) b[c] && delete b[c], a = gm(a, b || {}, !0);
        return a
    }

    function Am(a, b) {
        var c = O("XSRF_FIELD_NAME"),
            d = O("XSRF_TOKEN"),
            e = b.postBody || "",
            f = b.postParams,
            g = O("XSRF_FIELD_NAME"),
            h;
        b.headers && (h = b.headers["Content-Type"]);
        b.excludeXsrf || xc(a) && !b.withCredentials && xc(a) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
        (R("ajax_parse_query_data_only_when_filled") && f && 0 < Object.keys(f).length || f) && "string" === typeof e && (e = em(e), vb(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ?
            JSON.stringify(e) : Cc(e));
        if (!(a = e) && (a = f)) {
            a: {
                for (var l in f) {
                    f = !1;
                    break a
                }
                f = !0
            }
            a = !f
        }!um && a && "POST" != b.method && (um = !0, Xl(Error("AJAX request with postData should use POST")));
        return e
    }

    function Cm(a, b, c, d) {
        var e = null;
        switch (b) {
            case "JSON":
                try {
                    var f = c.responseText
                } catch (g) {
                    throw d = Error("Error reading responseText"), d.params = a, Yl(d), g;
                }
                a = c.getResponseHeader("Content-Type") || "";
                f && 0 <= a.indexOf("json") && (")]}'\n" === f.substring(0, 5) && (f = f.substring(5)), e = JSON.parse(f));
                break;
            case "XML":
                if (a = (a = c.responseXML) ? Dm(a) : null) e = {}, gb(a.getElementsByTagName("*"), function(g) {
                    e[g.tagName] = Em(g)
                })
        }
        d && Fm(e);
        return e
    }

    function Fm(a) {
        if (Sa(a))
            for (var b in a) {
                var c;
                (c = "html_content" == b) || (c = b.length - 5, c = 0 <= c && b.indexOf("_html", c) == c);
                if (c) {
                    c = b;
                    var d = a[b],
                        e = xb();
                    d = e ? e.createHTML(d) : d;
                    a[c] = new mc(d)
                } else Fm(a[b])
            }
    }

    function Dm(a) {
        return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
    }

    function Em(a) {
        var b = "";
        gb(a.childNodes, function(c) {
            b += c.nodeValue
        });
        return b
    }

    function Gm(a, b) {
        b.method = "POST";
        b.postParams || (b.postParams = {});
        return ym(a, b)
    }

    function Bm(a, b, c, d, e, f, g) {
        function h() {
            4 == (l && "readyState" in l ? l.readyState : 0) && b && Wl(b)(l)
        }
        c = void 0 === c ? "GET" : c;
        d = void 0 === d ? "" : d;
        var l = pm();
        if (!l) return null;
        "onloadend" in l ? l.addEventListener("loadend", h, !1) : l.onreadystatechange = h;
        R("debug_forward_web_query_parameters") && (a = xm(a));
        l.open(c, a, !0);
        f && (l.responseType = f);
        g && (l.withCredentials = !0);
        c = "POST" == c && (void 0 === window.FormData || !(d instanceof FormData));
        if (e = wm(a, e))
            for (var m in e) l.setRequestHeader(m, e[m]), "content-type" == m.toLowerCase() && (c = !1);
        c && l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        l.send(d);
        return l
    };
    var Hm = [{
        Hc: function(a) {
            return "Cannot read property '" + a.key + "'"
        },
        ic: {
            Error: [{
                regexp: /(Permission denied) to access property "([^']+)"/,
                groups: ["reason", "key"]
            }],
            TypeError: [{
                regexp: /Cannot read property '([^']+)' of (null|undefined)/,
                groups: ["key", "value"]
            }, {
                regexp: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
                groups: ["value", "key"]
            }, {
                regexp: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
                groups: ["value", "key"]
            }, {
                regexp: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
                groups: ["key"]
            }, {
                regexp: /Unable to get property '([^']+)' of (undefined or null) reference/,
                groups: ["key", "value"]
            }, {
                regexp: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
                groups: ["value", "base", "key"]
            }]
        }
    }, {
        Hc: function(a) {
            return "Cannot call '" + a.key + "'"
        },
        ic: {
            TypeError: [{
                regexp: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
                groups: ["base", "key"]
            }, {
                regexp: /([^ ]+) called on (null or undefined)/,
                groups: ["key", "value"]
            }, {
                regexp: /Object (.*) has no method '([^ ]+)'/,
                groups: ["base", "key"]
            }, {
                regexp: /Object doesn't support property or method '([^ ]+)'/,
                groups: ["key"]
            }, {
                regexp: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
                groups: ["key"]
            }, {
                regexp: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
                groups: ["key"]
            }]
        }
    }, {
        Hc: function(a) {
            return a.key + " is not defined"
        },
        ic: {
            ReferenceError: [{
                regexp: /(.*) is not defined/,
                groups: ["key"]
            }, {
                regexp: /Can't find variable: (.*)/,
                groups: ["key"]
            }]
        }
    }];
    var Jm = {
        Va: [],
        Sa: [{
            callback: Im,
            weight: 500
        }]
    };

    function Im(a) {
        if ("JavaException" === a.name) return !0;
        a = a.stack;
        return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
    };

    function Km() {
        this.Sa = [];
        this.Va = []
    }
    var Lm;

    function Mm() {
        if (!Lm) {
            var a = Lm = new Km;
            a.Va.length = 0;
            a.Sa.length = 0;
            Jm.Va && a.Va.push.apply(a.Va, Jm.Va);
            Jm.Sa && a.Sa.push.apply(a.Sa, Jm.Sa)
        }
        return Lm
    };
    var Nm = new Ni;

    function Om(a) {
        function b() {
            return a.charCodeAt(d++)
        }
        var c = a.length,
            d = 0;
        do {
            var e = Pm(b);
            if (Infinity === e) break;
            var f = e >> 3;
            switch (e & 7) {
                case 0:
                    e = Pm(b);
                    if (2 === f) return e;
                    break;
                case 1:
                    if (2 === f) return;
                    d += 8;
                    break;
                case 2:
                    e = Pm(b);
                    if (2 === f) return a.substr(d, e);
                    d += e;
                    break;
                case 5:
                    if (2 === f) return;
                    d += 4;
                    break;
                default:
                    return
            }
        } while (d < c)
    }

    function Pm(a) {
        var b = a(),
            c = b & 127;
        if (128 > b) return c;
        b = a();
        c |= (b & 127) << 7;
        if (128 > b) return c;
        b = a();
        c |= (b & 127) << 14;
        if (128 > b) return c;
        b = a();
        return 128 > b ? c | (b & 127) << 21 : Infinity
    };

    function Qm(a, b, c, d) {
        if (a)
            if (Array.isArray(a)) {
                var e = d;
                for (d = 0; d < a.length && !(a[d] && (e += Rm(d, a[d], b, c), 500 < e)); d++);
                d = e
            } else if ("object" === typeof a)
            for (e in a) {
                if (a[e]) {
                    var f = a[e];
                    var g = b;
                    var h = c;
                    g = "string" !== typeof f || "clickTrackingParams" !== e && "trackingParams" !== e ? 0 : (f = Om(atob(f.replace(/-/g, "+").replace(/_/g, "/")))) ? Rm(e + ".ve", f, g, h) : 0;
                    d += g;
                    d += Rm(e, a[e], b, c);
                    if (500 < d) break
                }
            } else c[b] = Sm(a), d += c[b].length;
        else c[b] = Sm(a), d += c[b].length;
        return d
    }

    function Rm(a, b, c, d) {
        c += "." + a;
        a = Sm(b);
        d[c] = a;
        return c.length + a.length
    }

    function Sm(a) {
        try {
            return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
        } catch (b) {
            return "unable to serialize " + typeof a + " (" + b.message + ")"
        }
    };

    function Tm() {
        this.Ve = !0
    }

    function Um() {
        Tm.h || (Tm.h = new Tm);
        return Tm.h
    }

    function Vm(a, b) {
        a = {};
        var c = Hg([]);
        c && (a.Authorization = c, c = b = null == b ? void 0 : b.sessionIndex, void 0 === c && (c = Number(O("SESSION_INDEX", 0)), c = isNaN(c) ? 0 : c), R("voice_search_auth_header_removal") || (a["X-Goog-AuthUser"] = c.toString()), "INNERTUBE_HOST_OVERRIDE" in Rl || (a["X-Origin"] = window.location.origin), void 0 === b && "DELEGATED_SESSION_ID" in Rl && (a["X-Goog-PageId"] = O("DELEGATED_SESSION_ID")));
        return a
    };
    var Wm = {
        identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
    };

    function Xm(a) {
        var b = this;
        this.i = void 0;
        this.h = !1;
        a.addEventListener("beforeinstallprompt", function(c) {
            c.preventDefault();
            b.i = c
        });
        a.addEventListener("appinstalled", function() {
            b.h = !0
        }, {
            once: !0
        })
    }

    function Ym() {
        if (!x.matchMedia) return "WEB_DISPLAY_MODE_UNKNOWN";
        try {
            return x.matchMedia("(display-mode: standalone)").matches ? "WEB_DISPLAY_MODE_STANDALONE" : x.matchMedia("(display-mode: minimal-ui)").matches ? "WEB_DISPLAY_MODE_MINIMAL_UI" : x.matchMedia("(display-mode: fullscreen)").matches ? "WEB_DISPLAY_MODE_FULLSCREEN" : x.matchMedia("(display-mode: browser)").matches ? "WEB_DISPLAY_MODE_BROWSER" : "WEB_DISPLAY_MODE_UNKNOWN"
        } catch (a) {
            return "WEB_DISPLAY_MODE_UNKNOWN"
        }
    };

    function Zm(a, b, c, d, e) {
        Dg.set("" + a, b, {
            hc: c,
            path: "/",
            domain: void 0 === d ? "youtube.com" : d,
            secure: void 0 === e ? !1 : e
        })
    }

    function $m(a, b, c) {
        Dg.remove("" + a, void 0 === b ? "/" : b, void 0 === c ? "youtube.com" : c)
    }

    function an() {
        if (!Dg.isEnabled()) return !1;
        if (!Dg.isEmpty()) return !0;
        Dg.set("TESTCOOKIESENABLED", "1", {
            hc: 60
        });
        if ("1" !== Dg.get("TESTCOOKIESENABLED")) return !1;
        Dg.remove("TESTCOOKIESENABLED");
        return !0
    };
    var bn = B("ytglobal.prefsUserPrefsPrefs_") || {};
    A("ytglobal.prefsUserPrefsPrefs_", bn);

    function cn() {
        this.h = O("ALT_PREF_COOKIE_NAME", "PREF");
        this.i = O("ALT_PREF_COOKIE_DOMAIN", "youtube.com");
        var a = Dg.get("" + this.h, void 0);
        a && this.parse(a)
    }
    var dn;

    function en() {
        dn || (dn = new cn);
        return dn
    }
    k = cn.prototype;
    k.get = function(a, b) {
        fn(a);
        gn(a);
        a = void 0 !== bn[a] ? bn[a].toString() : null;
        return null != a ? a : b ? b : ""
    };
    k.set = function(a, b) {
        fn(a);
        gn(a);
        if (null == b) throw Error("ExpectedNotNull");
        bn[a] = b.toString()
    };

    function hn(a) {
        return !!((jn("f" + (Math.floor(a / 31) + 1)) || 0) & 1 << a % 31)
    }
    k.remove = function(a) {
        fn(a);
        gn(a);
        delete bn[a]
    };
    k.clear = function() {
        for (var a in bn) delete bn[a]
    };

    function gn(a) {
        if (/^f([1-9][0-9]*)$/.test(a)) throw Error("ExpectedRegexMatch: " + a);
    }

    function fn(a) {
        if (!/^\w+$/.test(a)) throw Error("ExpectedRegexMismatch: " + a);
    }

    function jn(a) {
        a = void 0 !== bn[a] ? bn[a].toString() : null;
        return null != a && /^[A-Fa-f0-9]+$/.test(a) ? parseInt(a, 16) : null
    }
    k.parse = function(a) {
        a = decodeURIComponent(a).split("&");
        for (var b = 0; b < a.length; b++) {
            var c = a[b].split("="),
                d = c[0];
            (c = c[1]) && (bn[d] = c.toString())
        }
    };
    var kn = {
            bluetooth: "CONN_DISCO",
            cellular: "CONN_CELLULAR_UNKNOWN",
            ethernet: "CONN_WIFI",
            none: "CONN_NONE",
            wifi: "CONN_WIFI",
            wimax: "CONN_CELLULAR_4G",
            other: "CONN_UNKNOWN",
            unknown: "CONN_UNKNOWN",
            "slow-2g": "CONN_CELLULAR_2G",
            "2g": "CONN_CELLULAR_2G",
            "3g": "CONN_CELLULAR_3G",
            "4g": "CONN_CELLULAR_4G"
        },
        ln = {
            CONN_DEFAULT: 0,
            CONN_UNKNOWN: 1,
            CONN_NONE: 2,
            CONN_WIFI: 3,
            CONN_CELLULAR_2G: 4,
            CONN_CELLULAR_3G: 5,
            CONN_CELLULAR_4G: 6,
            CONN_CELLULAR_UNKNOWN: 7,
            CONN_DISCO: 8,
            CONN_CELLULAR_5G: 9,
            CONN_WIFI_METERED: 10,
            CONN_CELLULAR_5G_SA: 11,
            CONN_CELLULAR_5G_NSA: 12,
            CONN_INVALID: 31
        },
        mn = {
            EFFECTIVE_CONNECTION_TYPE_UNKNOWN: 0,
            EFFECTIVE_CONNECTION_TYPE_OFFLINE: 1,
            EFFECTIVE_CONNECTION_TYPE_SLOW_2G: 2,
            EFFECTIVE_CONNECTION_TYPE_2G: 3,
            EFFECTIVE_CONNECTION_TYPE_3G: 4,
            EFFECTIVE_CONNECTION_TYPE_4G: 5
        },
        nn = {
            "slow-2g": "EFFECTIVE_CONNECTION_TYPE_SLOW_2G",
            "2g": "EFFECTIVE_CONNECTION_TYPE_2G",
            "3g": "EFFECTIVE_CONNECTION_TYPE_3G",
            "4g": "EFFECTIVE_CONNECTION_TYPE_4G"
        };

    function on() {
        var a = x.navigator;
        return a ? a.connection : void 0
    }

    function pn() {
        var a = on();
        if (a) {
            var b = kn[a.type || "unknown"] || "CONN_UNKNOWN";
            a = kn[a.effectiveType || "unknown"] || "CONN_UNKNOWN";
            "CONN_CELLULAR_UNKNOWN" === b && "CONN_UNKNOWN" !== a && (b = a);
            if ("CONN_UNKNOWN" !== b) return b;
            if ("CONN_UNKNOWN" !== a) return a
        }
    }

    function qn() {
        var a = on();
        if (null != a && a.effectiveType) return nn.hasOwnProperty(a.effectiveType) ? nn[a.effectiveType] : "EFFECTIVE_CONNECTION_TYPE_UNKNOWN"
    };

    function rn(a) {
        var b = Ma.apply(1, arguments);
        var c = Error.call(this, a);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.args = [].concat(ia(b))
    }
    v(rn, Error);

    function sn() {
        try {
            return tn(), !0
        } catch (a) {
            return !1
        }
    }

    function tn(a) {
        if (void 0 !== O("DATASYNC_ID")) return O("DATASYNC_ID");
        throw new rn("Datasync ID not set", void 0 === a ? "unknown" : a);
    };

    function un() {}

    function vn(a, b) {
        return wn(a, 0, b)
    }
    un.prototype.ma = function(a, b) {
        return wn(a, 1, b)
    };

    function xn(a) {
        var b = B("yt.scheduler.instance.addImmediateJob");
        b ? b(a) : a()
    };

    function yn() {
        un.apply(this, arguments)
    }
    v(yn, un);

    function zn() {
        yn.h || (yn.h = new yn);
        return yn.h
    }

    function wn(a, b, c) {
        void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
        var d = B("yt.scheduler.instance.addJob");
        return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : rm(a, c || 0)
    }
    yn.prototype.Fa = function(a) {
        if (void 0 === a || !Number.isNaN(Number(a))) {
            var b = B("yt.scheduler.instance.cancelJob");
            b ? b(a) : window.clearTimeout(a)
        }
    };
    yn.prototype.start = function() {
        var a = B("yt.scheduler.instance.start");
        a && a()
    };
    yn.prototype.pause = function() {
        var a = B("yt.scheduler.instance.pause");
        a && a()
    };
    var qi = zn();

    function An(a) {
        var b = new Yi;
        (b = b.isAvailable() ? a ? new dj(b, a) : b : null) || (a = new Zi(a || "UserDataSharedStore"), b = a.isAvailable() ? a : null);
        this.h = (a = b) ? new Ui(a) : null;
        this.i = document.domain || window.location.hostname
    }
    An.prototype.set = function(a, b, c, d) {
        c = c || 31104E3;
        this.remove(a);
        if (this.h) try {
            this.h.set(a, b, Date.now() + 1E3 * c);
            return
        } catch (f) {}
        var e = "";
        if (d) try {
            e = escape((new Kg).serialize(b))
        } catch (f) {
            return
        } else e = escape(b);
        Zm(a, e, c, this.i)
    };
    An.prototype.get = function(a, b) {
        var c = void 0,
            d = !this.h;
        if (!d) try {
            c = this.h.get(a)
        } catch (e) {
            d = !0
        }
        if (d && (c = Dg.get("" + a, void 0)) && (c = unescape(c), b)) try {
            c = JSON.parse(c)
        } catch (e) {
            this.remove(a), c = void 0
        }
        return c
    };
    An.prototype.remove = function(a) {
        this.h && this.h.remove(a);
        $m(a, "/", this.i)
    };
    var Bn = function() {
        var a;
        return function() {
            a || (a = new An("ytidb"));
            return a
        }
    }();

    function Cn() {
        var a;
        return null == (a = Bn()) ? void 0 : a.get("LAST_RESULT_ENTRY_KEY", !0)
    };
    var Dn = [],
        En, Fn = !1;

    function Gn() {
        var a = {};
        for (En = new Hn(void 0 === a.handleError ? In : a.handleError, void 0 === a.logEvent ? Jn : a.logEvent); 0 < Dn.length;) switch (a = Dn.shift(), a.type) {
            case "ERROR":
                En.handleError(a.payload);
                break;
            case "EVENT":
                En.logEvent(a.eventType, a.payload)
        }
    }

    function Kn(a) {
        Fn || (En ? En.handleError(a) : (Dn.push({
            type: "ERROR",
            payload: a
        }), 10 < Dn.length && Dn.shift()))
    }

    function Ln(a, b) {
        Fn || (En ? En.logEvent(a, b) : (Dn.push({
            type: "EVENT",
            eventType: a,
            payload: b
        }), 10 < Dn.length && Dn.shift()))
    };

    function Mn(a) {
        if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
    }

    function Nn(a) {
        return a.substr(0, a.indexOf(":")) || a
    };
    var On = od || pd;

    function Pn(a) {
        var b = Wb();
        return b ? 0 <= b.toLowerCase().indexOf(a) : !1
    };
    var Qn = {},
        Rn = (Qn.AUTH_INVALID = "No user identifier specified.", Qn.EXPLICIT_ABORT = "Transaction was explicitly aborted.", Qn.IDB_NOT_SUPPORTED = "IndexedDB is not supported.", Qn.MISSING_INDEX = "Index not created.", Qn.MISSING_OBJECT_STORES = "Object stores not created.", Qn.DB_DELETED_BY_MISSING_OBJECT_STORES = "Database is deleted because expected object stores were not created.", Qn.DB_REOPENED_BY_MISSING_OBJECT_STORES = "Database is reopened because expected object stores were not created.", Qn.UNKNOWN_ABORT = "Transaction was aborted for unknown reasons.",
            Qn.QUOTA_EXCEEDED = "The current transaction exceeded its quota limitations.", Qn.QUOTA_MAYBE_EXCEEDED = "The current transaction may have failed because of exceeding quota limitations.", Qn.EXECUTE_TRANSACTION_ON_CLOSED_DB = "Can't start a transaction on a closed database", Qn.INCOMPATIBLE_DB_VERSION = "The binary is incompatible with the database version", Qn),
        Sn = {},
        Tn = (Sn.AUTH_INVALID = "ERROR", Sn.EXECUTE_TRANSACTION_ON_CLOSED_DB = "WARNING", Sn.EXPLICIT_ABORT = "IGNORED", Sn.IDB_NOT_SUPPORTED = "ERROR", Sn.MISSING_INDEX =
            "WARNING", Sn.MISSING_OBJECT_STORES = "ERROR", Sn.DB_DELETED_BY_MISSING_OBJECT_STORES = "WARNING", Sn.DB_REOPENED_BY_MISSING_OBJECT_STORES = "WARNING", Sn.QUOTA_EXCEEDED = "WARNING", Sn.QUOTA_MAYBE_EXCEEDED = "WARNING", Sn.UNKNOWN_ABORT = "WARNING", Sn.INCOMPATIBLE_DB_VERSION = "WARNING", Sn),
        Un = {},
        Vn = (Un.AUTH_INVALID = !1, Un.EXECUTE_TRANSACTION_ON_CLOSED_DB = !1, Un.EXPLICIT_ABORT = !1, Un.IDB_NOT_SUPPORTED = !1, Un.MISSING_INDEX = !1, Un.MISSING_OBJECT_STORES = !1, Un.DB_DELETED_BY_MISSING_OBJECT_STORES = !1, Un.DB_REOPENED_BY_MISSING_OBJECT_STORES = !1, Un.QUOTA_EXCEEDED = !1, Un.QUOTA_MAYBE_EXCEEDED = !0, Un.UNKNOWN_ABORT = !0, Un.INCOMPATIBLE_DB_VERSION = !1, Un);

    function Wn(a, b, c, d, e) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? Rn[a] : c;
        d = void 0 === d ? Tn[a] : d;
        e = void 0 === e ? Vn[a] : e;
        rn.call(this, c, Object.assign({}, {
            name: "YtIdbKnownError",
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            type: a
        }, b));
        this.type = a;
        this.message = c;
        this.level = d;
        this.h = e;
        Object.setPrototypeOf(this, Wn.prototype)
    }
    v(Wn, rn);

    function Xn(a, b) {
        Wn.call(this, "MISSING_OBJECT_STORES", {
            expectedObjectStores: b,
            foundObjectStores: a
        }, Rn.MISSING_OBJECT_STORES);
        Object.setPrototypeOf(this, Xn.prototype)
    }
    v(Xn, Wn);

    function Yn(a, b) {
        var c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.index = a;
        this.objectStore = b;
        Object.setPrototypeOf(this, Yn.prototype)
    }
    v(Yn, Error);
    var Zn = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

    function $n(a, b, c, d) {
        b = Nn(b);
        var e = a instanceof Error ? a : Error("Unexpected error: " + a);
        if (e instanceof Wn) return e;
        a = {
            objectStoreNames: c,
            dbName: b,
            dbVersion: d
        };
        if ("QuotaExceededError" === e.name) return new Wn("QUOTA_EXCEEDED", a);
        if (qd && "UnknownError" === e.name) return new Wn("QUOTA_MAYBE_EXCEEDED", a);
        if (e instanceof Yn) return new Wn("MISSING_INDEX", Object.assign({}, a, {
            objectStore: e.objectStore,
            index: e.index
        }));
        if ("InvalidStateError" === e.name && Zn.some(function(f) {
                return e.message.includes(f)
            })) return new Wn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
            a);
        if ("AbortError" === e.name) return new Wn("UNKNOWN_ABORT", a, e.message);
        e.args = [Object.assign({}, a, {
            name: "IdbError",
            ud: e.name
        })];
        e.level = "WARNING";
        return e
    }

    function ao(a, b, c) {
        var d = Cn();
        return new Wn("IDB_NOT_SUPPORTED", {
            context: {
                caller: a,
                publicName: b,
                version: c,
                hasSucceededOnce: null == d ? void 0 : d.hasSucceededOnce
            }
        })
    };

    function bo(a) {
        if (!a) throw Error();
        throw a;
    }

    function co(a) {
        return a
    }

    function eo(a) {
        this.h = a
    }

    function fo(a) {
        function b(e) {
            if ("PENDING" === d.state.status) {
                d.state = {
                    status: "REJECTED",
                    reason: e
                };
                e = t(d.i);
                for (var f = e.next(); !f.done; f = e.next()) f = f.value, f()
            }
        }

        function c(e) {
            if ("PENDING" === d.state.status) {
                d.state = {
                    status: "FULFILLED",
                    value: e
                };
                e = t(d.h);
                for (var f = e.next(); !f.done; f = e.next()) f = f.value, f()
            }
        }
        var d = this;
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.i = [];
        a = a.h;
        try {
            a(c, b)
        } catch (e) {
            b(e)
        }
    }
    fo.all = function(a) {
        return new fo(new eo(function(b, c) {
            var d = [],
                e = a.length;
            0 === e && b(d);
            for (var f = {
                    lb: 0
                }; f.lb < a.length; f = {
                    lb: f.lb
                }, ++f.lb) fo.resolve(a[f.lb]).then(function(g) {
                return function(h) {
                    d[g.lb] = h;
                    e--;
                    0 === e && b(d)
                }
            }(f)).catch(function(g) {
                c(g)
            })
        }))
    };
    fo.resolve = function(a) {
        return new fo(new eo(function(b, c) {
            a instanceof fo ? a.then(b, c) : b(a)
        }))
    };
    fo.reject = function(a) {
        return new fo(new eo(function(b, c) {
            c(a)
        }))
    };
    fo.prototype.then = function(a, b) {
        var c = this,
            d = null != a ? a : co,
            e = null != b ? b : bo;
        return new fo(new eo(function(f, g) {
            "PENDING" === c.state.status ? (c.h.push(function() {
                go(c, c, d, f, g)
            }), c.i.push(function() {
                ho(c, c, e, f, g)
            })) : "FULFILLED" === c.state.status ? go(c, c, d, f, g) : "REJECTED" === c.state.status && ho(c, c, e, f, g)
        }))
    };
    fo.prototype.catch = function(a) {
        return this.then(void 0, a)
    };

    function go(a, b, c, d, e) {
        try {
            if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
            var f = c(a.state.value);
            f instanceof fo ? io(a, b, f, d, e) : d(f)
        } catch (g) {
            e(g)
        }
    }

    function ho(a, b, c, d, e) {
        try {
            if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
            var f = c(a.state.reason);
            f instanceof fo ? io(a, b, f, d, e) : d(f)
        } catch (g) {
            e(g)
        }
    }

    function io(a, b, c, d, e) {
        b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(function(f) {
            f instanceof fo ? io(a, b, f, d, e) : d(f)
        }, function(f) {
            e(f)
        })
    };

    function jo(a, b, c) {
        function d() {
            c(a.error);
            f()
        }

        function e() {
            b(a.result);
            f()
        }

        function f() {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", d)
            } catch (g) {}
        }
        a.addEventListener("success", e);
        a.addEventListener("error", d)
    }

    function ko(a) {
        return new Promise(function(b, c) {
            jo(a, b, c)
        })
    }

    function lo(a) {
        return new fo(new eo(function(b, c) {
            jo(a, b, c)
        }))
    };

    function mo(a, b) {
        return new fo(new eo(function(c, d) {
            function e() {
                var f = a ? b(a) : null;
                f ? f.then(function(g) {
                    a = g;
                    e()
                }, d) : c()
            }
            e()
        }))
    };
    var no = window,
        S = no.ytcsi && no.ytcsi.now ? no.ytcsi.now : no.performance && no.performance.timing && no.performance.now && no.performance.timing.navigationStart ? function() {
            return no.performance.timing.navigationStart + no.performance.now()
        } : function() {
            return (new Date).getTime()
        };

    function oo(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(S());
        this.i = !1
    }
    k = oo.prototype;
    k.add = function(a, b, c) {
        return po(this, [a], {
            mode: "readwrite",
            fa: !0
        }, function(d) {
            return d.objectStore(a).add(b, c)
        })
    };
    k.clear = function(a) {
        return po(this, [a], {
            mode: "readwrite",
            fa: !0
        }, function(b) {
            return b.objectStore(a).clear()
        })
    };
    k.close = function() {
        this.h.close();
        var a;
        (null == (a = this.options) ? 0 : a.closed) && this.options.closed()
    };
    k.count = function(a, b) {
        return po(this, [a], {
            mode: "readonly",
            fa: !0
        }, function(c) {
            return c.objectStore(a).count(b)
        })
    };

    function qo(a, b, c) {
        a = a.h.createObjectStore(b, c);
        return new ro(a)
    }
    k.delete = function(a, b) {
        return po(this, [a], {
            mode: "readwrite",
            fa: !0
        }, function(c) {
            return c.objectStore(a).delete(b)
        })
    };
    k.get = function(a, b) {
        return po(this, [a], {
            mode: "readonly",
            fa: !0
        }, function(c) {
            return c.objectStore(a).get(b)
        })
    };

    function so(a, b, c) {
        return po(a, [b], {
            mode: "readwrite",
            fa: !0
        }, function(d) {
            d = d.objectStore(b);
            return lo(d.h.put(c, void 0))
        })
    }
    k.objectStoreNames = function() {
        return Array.from(this.h.objectStoreNames)
    };

    function po(a, b, c, d) {
        var e, f, g, h, l, m, p, r, y, u, z, D;
        return w(function(G) {
            switch (G.h) {
                case 1:
                    var M = {
                        mode: "readonly",
                        fa: !1,
                        tag: "IDB_TRANSACTION_TAG_UNKNOWN"
                    };
                    "string" === typeof c ? M.mode = c : Object.assign(M, c);
                    e = M;
                    a.transactionCount++;
                    f = e.fa ? 3 : 1;
                    g = 0;
                case 2:
                    if (h) {
                        G.A(3);
                        break
                    }
                    g++;
                    l = Math.round(S());
                    Aa(G, 4);
                    m = a.h.transaction(b, e.mode);
                    M = G.yield;
                    var P = new to(m);
                    P = uo(P, d);
                    return M.call(G, P, 6);
                case 6:
                    return p = G.i, r = Math.round(S()), vo(a, l, r, g, void 0, b.join(), e), G.return(p);
                case 4:
                    y = Ca(G);
                    u = Math.round(S());
                    z = $n(y,
                        a.h.name, b.join(), a.h.version);
                    if ((D = z instanceof Wn && !z.h) || g >= f) vo(a, l, u, g, z, b.join(), e), h = z;
                    G.A(2);
                    break;
                case 3:
                    return G.return(Promise.reject(h))
            }
        })
    }

    function vo(a, b, c, d, e, f, g) {
        b = c - b;
        e ? (e instanceof Wn && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && Ln("QUOTA_EXCEEDED", {
            dbName: Nn(a.h.name),
            objectStoreNames: f,
            transactionCount: a.transactionCount,
            transactionMode: g.mode
        }), e instanceof Wn && "UNKNOWN_ABORT" === e.type && (c -= a.j, 0 > c && c >= Math.pow(2, 31) && (c = 0), Ln("TRANSACTION_UNEXPECTEDLY_ABORTED", {
            objectStoreNames: f,
            transactionDuration: b,
            transactionCount: a.transactionCount,
            dbDuration: c
        }), a.i = !0), wo(a, !1, d, f, b, g.tag), Kn(e)) : wo(a, !0, d, f, b, g.tag)
    }

    function wo(a, b, c, d, e, f) {
        Ln("TRANSACTION_ENDED", {
            objectStoreNames: d,
            connectionHasUnknownAbortedTransaction: a.i,
            duration: e,
            isSuccessful: b,
            tryCount: c,
            tag: void 0 === f ? "IDB_TRANSACTION_TAG_UNKNOWN" : f
        })
    }
    k.getName = function() {
        return this.h.name
    };

    function ro(a) {
        this.h = a
    }
    k = ro.prototype;
    k.add = function(a, b) {
        return lo(this.h.add(a, b))
    };
    k.autoIncrement = function() {
        return this.h.autoIncrement
    };
    k.clear = function() {
        return lo(this.h.clear()).then(function() {})
    };

    function xo(a, b, c) {
        a.h.createIndex(b, c, {
            unique: !1
        })
    }
    k.count = function(a) {
        return lo(this.h.count(a))
    };

    function yo(a, b) {
        return zo(a, {
            query: b
        }, function(c) {
            return c.delete().then(function() {
                return c.continue()
            })
        }).then(function() {})
    }
    k.delete = function(a) {
        return a instanceof IDBKeyRange ? yo(this, a) : lo(this.h.delete(a))
    };
    k.get = function(a) {
        return lo(this.h.get(a))
    };
    k.index = function(a) {
        try {
            return new Ao(this.h.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new Yn(a, this.h.name);
            throw b;
        }
    };
    k.getName = function() {
        return this.h.name
    };
    k.keyPath = function() {
        return this.h.keyPath
    };

    function zo(a, b, c) {
        a = a.h.openCursor(b.query, b.direction);
        return Bo(a).then(function(d) {
            return mo(d, c)
        })
    }

    function to(a) {
        var b = this;
        this.h = a;
        this.i = new Map;
        this.aborted = !1;
        this.done = new Promise(function(c, d) {
            b.h.addEventListener("complete", function() {
                c()
            });
            b.h.addEventListener("error", function(e) {
                e.currentTarget === e.target && d(b.h.error)
            });
            b.h.addEventListener("abort", function() {
                var e = b.h.error;
                if (e) d(e);
                else if (!b.aborted) {
                    e = Wn;
                    for (var f = b.h.objectStoreNames, g = [], h = 0; h < f.length; h++) {
                        var l = f.item(h);
                        if (null === l) throw Error("Invariant: item in DOMStringList is null");
                        g.push(l)
                    }
                    e = new e("UNKNOWN_ABORT", {
                        objectStoreNames: g.join(),
                        dbName: b.h.db.name,
                        mode: b.h.mode
                    });
                    d(e)
                }
            })
        })
    }

    function uo(a, b) {
        var c = new Promise(function(d, e) {
            try {
                b(a).then(function(f) {
                    d(f)
                }).catch(e)
            } catch (f) {
                e(f), a.abort()
            }
        });
        return Promise.all([c, a.done]).then(function(d) {
            return t(d).next().value
        })
    }
    to.prototype.abort = function() {
        this.h.abort();
        this.aborted = !0;
        throw new Wn("EXPLICIT_ABORT");
    };
    to.prototype.objectStore = function(a) {
        a = this.h.objectStore(a);
        var b = this.i.get(a);
        b || (b = new ro(a), this.i.set(a, b));
        return b
    };

    function Ao(a) {
        this.h = a
    }
    k = Ao.prototype;
    k.count = function(a) {
        return lo(this.h.count(a))
    };
    k.delete = function(a) {
        return Co(this, {
            query: a
        }, function(b) {
            return b.delete().then(function() {
                return b.continue()
            })
        })
    };
    k.get = function(a) {
        return lo(this.h.get(a))
    };
    k.getKey = function(a) {
        return lo(this.h.getKey(a))
    };
    k.keyPath = function() {
        return this.h.keyPath
    };
    k.unique = function() {
        return this.h.unique
    };

    function Co(a, b, c) {
        a = a.h.openCursor(void 0 === b.query ? null : b.query, void 0 === b.direction ? "next" : b.direction);
        return Bo(a).then(function(d) {
            return mo(d, c)
        })
    }

    function Do(a, b) {
        this.request = a;
        this.cursor = b
    }

    function Bo(a) {
        return lo(a).then(function(b) {
            return b ? new Do(a, b) : null
        })
    }
    k = Do.prototype;
    k.advance = function(a) {
        this.cursor.advance(a);
        return Bo(this.request)
    };
    k.continue = function(a) {
        this.cursor.continue(a);
        return Bo(this.request)
    };
    k.delete = function() {
        return lo(this.cursor.delete()).then(function() {})
    };
    k.getKey = function() {
        return this.cursor.key
    };
    k.getValue = function() {
        return this.cursor.value
    };
    k.update = function(a) {
        return lo(this.cursor.update(a))
    };

    function Eo(a, b, c) {
        return new Promise(function(d, e) {
            function f() {
                y || (y = new oo(g.result, {
                    closed: r
                }));
                return y
            }
            var g = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
            var h = c.Vd,
                l = c.blocking,
                m = c.We,
                p = c.upgrade,
                r = c.closed,
                y;
            g.addEventListener("upgradeneeded", function(u) {
                try {
                    if (null === u.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                    if (null === g.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                    u.dataLoss && "none" !== u.dataLoss && Ln("IDB_DATA_CORRUPTED", {
                        reason: u.dataLossMessage || "unknown reason",
                        dbName: Nn(a)
                    });
                    var z = f(),
                        D = new to(g.transaction);
                    p && p(z, function(G) {
                        return u.oldVersion < G && u.newVersion >= G
                    }, D);
                    D.done.catch(function(G) {
                        e(G)
                    })
                } catch (G) {
                    e(G)
                }
            });
            g.addEventListener("success", function() {
                var u = g.result;
                l && u.addEventListener("versionchange", function() {
                    l(f())
                });
                u.addEventListener("close", function() {
                    Ln("IDB_UNEXPECTEDLY_CLOSED", {
                        dbName: Nn(a),
                        dbVersion: u.version
                    });
                    m && m()
                });
                d(f())
            });
            g.addEventListener("error", function() {
                e(g.error)
            });
            h && g.addEventListener("blocked", function() {
                h()
            })
        })
    }

    function Fo(a, b, c) {
        c = void 0 === c ? {} : c;
        return Eo(a, b, c)
    }

    function Go(a, b) {
        b = void 0 === b ? {} : b;
        var c, d, e, f;
        return w(function(g) {
            if (1 == g.h) return Aa(g, 2), c = self.indexedDB.deleteDatabase(a), d = b, (e = d.Vd) && c.addEventListener("blocked", function() {
                e()
            }), g.yield(ko(c), 4);
            if (2 != g.h) return Ba(g, 0);
            f = Ca(g);
            throw $n(f, a, "", -1);
        })
    };

    function Ho(a, b) {
        this.name = a;
        this.options = b;
        this.j = !0;
        this.m = this.l = 0
    }
    Ho.prototype.i = function(a, b, c) {
        c = void 0 === c ? {} : c;
        return Fo(a, b, c)
    };
    Ho.prototype.delete = function(a) {
        a = void 0 === a ? {} : a;
        return Go(this.name, a)
    };

    function Io(a, b) {
        return new Wn("INCOMPATIBLE_DB_VERSION", {
            dbName: a.name,
            oldVersion: a.options.version,
            newVersion: b
        })
    }

    function Jo(a, b) {
        if (!b) throw ao("openWithToken", Nn(a.name));
        return a.open()
    }
    Ho.prototype.open = function() {
        function a() {
            var f, g, h, l, m, p, r, y, u, z;
            return w(function(D) {
                switch (D.h) {
                    case 1:
                        return g = null != (f = Error().stack) ? f : "", Aa(D, 2), D.yield(c.i(c.name, c.options.version, e), 4);
                    case 4:
                        h = D.i;
                        for (var G = c.options, M = [], P = t(Object.keys(G.zb)), T = P.next(); !T.done; T = P.next()) {
                            T = T.value;
                            var da = G.zb[T],
                                Z = void 0 === da.Ee ? Number.MAX_VALUE : da.Ee;
                            !(h.h.version >= da.Gb) || h.h.version >= Z || h.h.objectStoreNames.contains(T) || M.push(T)
                        }
                        l = M;
                        if (0 === l.length) {
                            D.A(5);
                            break
                        }
                        m = Object.keys(c.options.zb);
                        p = h.objectStoreNames();
                        if (c.m < lm("ytidb_reopen_db_retries", 0)) return c.m++, h.close(), Kn(new Wn("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                            dbName: c.name,
                            expectedObjectStores: m,
                            foundObjectStores: p
                        })), D.return(a());
                        if (!(c.l < lm("ytidb_remake_db_retries", 1))) {
                            D.A(6);
                            break
                        }
                        c.l++;
                        return D.yield(c.delete(), 7);
                    case 7:
                        return Kn(new Wn("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                            dbName: c.name,
                            expectedObjectStores: m,
                            foundObjectStores: p
                        })), D.return(a());
                    case 6:
                        throw new Xn(p, m);
                    case 5:
                        return D.return(h);
                    case 2:
                        r = Ca(D);
                        if (r instanceof DOMException ?
                            "VersionError" !== r.name : "DOMError" in self && r instanceof DOMError ? "VersionError" !== r.name : !(r instanceof Object && "message" in r) || "An attempt was made to open a database using a lower version than the existing version." !== r.message) {
                            D.A(8);
                            break
                        }
                        return D.yield(c.i(c.name, void 0, Object.assign({}, e, {
                            upgrade: void 0
                        })), 9);
                    case 9:
                        y = D.i;
                        u = y.h.version;
                        if (void 0 !== c.options.version && u > c.options.version + 1) throw y.close(), c.j = !1, Io(c, u);
                        return D.return(y);
                    case 8:
                        throw b(), r instanceof Error && !R("ytidb_async_stack_killswitch") &&
                            (r.stack = r.stack + "\n" + g.substring(g.indexOf("\n") + 1)), $n(r, c.name, "", null != (z = c.options.version) ? z : -1);
                }
            })
        }

        function b() {
            c.h === d && (c.h = void 0)
        }
        var c = this;
        if (!this.j) throw Io(this);
        if (this.h) return this.h;
        var d, e = {
            blocking: function(f) {
                f.close()
            },
            closed: b,
            We: b,
            upgrade: this.options.upgrade
        };
        return this.h = d = a()
    };
    var Ko = new Ho("YtIdbMeta", {
        zb: {
            databases: {
                Gb: 1
            }
        },
        upgrade: function(a, b) {
            b(1) && qo(a, "databases", {
                keyPath: "actualName"
            })
        }
    });

    function Lo(a, b) {
        var c;
        return w(function(d) {
            if (1 == d.h) return d.yield(Jo(Ko, b), 2);
            c = d.i;
            return d.return(po(c, ["databases"], {
                fa: !0,
                mode: "readwrite"
            }, function(e) {
                var f = e.objectStore("databases");
                return f.get(a.actualName).then(function(g) {
                    if (g ? a.actualName !== g.actualName || a.publicName !== g.publicName || a.userIdentifier !== g.userIdentifier : 1) return lo(f.h.put(a, void 0)).then(function() {})
                })
            }))
        })
    }

    function Mo(a, b) {
        var c;
        return w(function(d) {
            if (1 == d.h) return a ? d.yield(Jo(Ko, b), 2) : d.return();
            c = d.i;
            return d.return(c.delete("databases", a))
        })
    }

    function No(a, b) {
        var c, d;
        return w(function(e) {
            return 1 == e.h ? (c = [], e.yield(Jo(Ko, b), 2)) : 3 != e.h ? (d = e.i, e.yield(po(d, ["databases"], {
                fa: !0,
                mode: "readonly"
            }, function(f) {
                c.length = 0;
                return zo(f.objectStore("databases"), {}, function(g) {
                    a(g.getValue()) && c.push(g.getValue());
                    return g.continue()
                })
            }), 3)) : e.return(c)
        })
    }

    function Oo(a) {
        return No(function(b) {
            return "LogsDatabaseV2" === b.publicName && void 0 !== b.userIdentifier
        }, a)
    }

    function Po(a, b, c) {
        return No(function(d) {
            return c ? void 0 !== d.userIdentifier && !a.includes(d.userIdentifier) && c.includes(d.publicName) : void 0 !== d.userIdentifier && !a.includes(d.userIdentifier)
        }, b)
    }

    function Qo(a) {
        var b, c;
        return w(function(d) {
            if (1 == d.h) return b = tn("YtIdbMeta hasAnyMeta other"), d.yield(No(function(e) {
                return void 0 !== e.userIdentifier && e.userIdentifier !== b
            }, a), 2);
            c = d.i;
            return d.return(0 < c.length)
        })
    };
    var Ro, So = new function() {}(new function() {});

    function To() {
        var a, b, c, d;
        return w(function(e) {
            switch (e.h) {
                case 1:
                    a = Cn();
                    if (null == (b = a) ? 0 : b.hasSucceededOnce) return e.return(!0);
                    var f;
                    if (f = On) f = /WebKit\/([0-9]+)/.exec(Wb()), f = !!(f && 600 <= parseInt(f[1], 10));
                    f && (f = /WebKit\/([0-9]+)/.exec(Wb()), f = !(f && 602 <= parseInt(f[1], 10)));
                    if (f || ad) return e.return(!1);
                    try {
                        if (c = self, !(c.indexedDB && c.IDBIndex && c.IDBKeyRange && c.IDBObjectStore)) return e.return(!1)
                    } catch (g) {
                        return e.return(!1)
                    }
                    if (!("IDBTransaction" in self && "objectStoreNames" in IDBTransaction.prototype)) return e.return(!1);
                    Aa(e, 2);
                    d = {
                        actualName: "yt-idb-test-do-not-use",
                        publicName: "yt-idb-test-do-not-use",
                        userIdentifier: void 0
                    };
                    return e.yield(Lo(d, So), 4);
                case 4:
                    return e.yield(Mo("yt-idb-test-do-not-use", So), 5);
                case 5:
                    return e.return(!0);
                case 2:
                    return Ca(e), e.return(!1)
            }
        })
    }

    function Uo() {
        if (void 0 !== Ro) return Ro;
        Fn = !0;
        return Ro = To().then(function(a) {
            Fn = !1;
            var b;
            if (null != (b = Bn()) && b.h) {
                var c;
                b = {
                    hasSucceededOnce: (null == (c = Cn()) ? void 0 : c.hasSucceededOnce) || a
                };
                var d;
                null == (d = Bn()) || d.set("LAST_RESULT_ENTRY_KEY", b, 2592E3, !0)
            }
            return a
        })
    }

    function Vo() {
        return B("ytglobal.idbToken_") || void 0
    }

    function Wo() {
        var a = Vo();
        return a ? Promise.resolve(a) : Uo().then(function(b) {
            (b = b ? So : void 0) && A("ytglobal.idbToken_", b);
            return b
        })
    };
    var Xo = 0;

    function Yo(a, b) {
        Xo || (Xo = qi.ma(function() {
            var c, d, e, f, g;
            return w(function(h) {
                switch (h.h) {
                    case 1:
                        return h.yield(Wo(), 2);
                    case 2:
                        c = h.i;
                        if (!c) return h.return();
                        d = !0;
                        Aa(h, 3);
                        return h.yield(Po(a, c, b), 5);
                    case 5:
                        e = h.i;
                        if (!e.length) {
                            d = !1;
                            h.A(6);
                            break
                        }
                        f = e[0];
                        return h.yield(Go(f.actualName), 7);
                    case 7:
                        return h.yield(Mo(f.actualName, c), 6);
                    case 6:
                        Ba(h, 4);
                        break;
                    case 3:
                        g = Ca(h), Kn(g), d = !1;
                    case 4:
                        qi.Fa(Xo), Xo = 0, d && Yo(a, b), h.h = 0
                }
            })
        }))
    }

    function Zo() {
        var a;
        return w(function(b) {
            return 1 == b.h ? b.yield(Wo(), 2) : (a = b.i) ? b.return(Qo(a)) : b.return(!1)
        })
    }
    new Lh;

    function $o(a) {
        if (!sn()) throw a = new Wn("AUTH_INVALID", {
            dbName: a
        }), Kn(a), a;
        var b = tn();
        return {
            actualName: a + ":" + b,
            publicName: a,
            userIdentifier: b
        }
    }

    function ap(a, b, c, d) {
        var e, f, g, h, l, m;
        return w(function(p) {
            switch (p.h) {
                case 1:
                    return f = null != (e = Error().stack) ? e : "", p.yield(Wo(), 2);
                case 2:
                    g = p.i;
                    if (!g) throw h = ao("openDbImpl", a, b), R("ytidb_async_stack_killswitch") || (h.stack = h.stack + "\n" + f.substring(f.indexOf("\n") + 1)), Kn(h), h;
                    Mn(a);
                    l = c ? {
                        actualName: a,
                        publicName: a,
                        userIdentifier: void 0
                    } : $o(a);
                    Aa(p, 3);
                    return p.yield(Lo(l, g), 5);
                case 5:
                    return p.yield(Fo(l.actualName, b, d), 6);
                case 6:
                    return p.return(p.i);
                case 3:
                    return m = Ca(p), Aa(p, 7), p.yield(Mo(l.actualName,
                        g), 9);
                case 9:
                    Ba(p, 8);
                    break;
                case 7:
                    Ca(p);
                case 8:
                    throw m;
            }
        })
    }

    function bp(a, b, c) {
        c = void 0 === c ? {} : c;
        return ap(a, b, !1, c)
    }

    function cp(a, b, c) {
        c = void 0 === c ? {} : c;
        return ap(a, b, !0, c)
    }

    function dp(a, b) {
        b = void 0 === b ? {} : b;
        var c, d;
        return w(function(e) {
            if (1 == e.h) return e.yield(Wo(), 2);
            if (3 != e.h) {
                c = e.i;
                if (!c) return e.return();
                Mn(a);
                d = $o(a);
                return e.yield(Go(d.actualName, b), 3)
            }
            return e.yield(Mo(d.actualName, c), 0)
        })
    }

    function ep(a, b, c) {
        a = a.map(function(d) {
            return w(function(e) {
                return 1 == e.h ? e.yield(Go(d.actualName, b), 2) : e.yield(Mo(d.actualName, c), 0)
            })
        });
        return Promise.all(a).then(function() {})
    }

    function fp() {
        var a = void 0 === a ? {} : a;
        var b, c;
        return w(function(d) {
            if (1 == d.h) return d.yield(Wo(), 2);
            if (3 != d.h) {
                b = d.i;
                if (!b) return d.return();
                Mn("LogsDatabaseV2");
                return d.yield(Oo(b), 3)
            }
            c = d.i;
            return d.yield(ep(c, a, b), 0)
        })
    }

    function gp(a, b) {
        b = void 0 === b ? {} : b;
        var c;
        return w(function(d) {
            if (1 == d.h) return d.yield(Wo(), 2);
            if (3 != d.h) {
                c = d.i;
                if (!c) return d.return();
                Mn(a);
                return d.yield(Go(a, b), 3)
            }
            return d.yield(Mo(a, c), 0)
        })
    };

    function hp(a, b) {
        Ho.call(this, a, b);
        this.options = b;
        Mn(a)
    }
    v(hp, Ho);

    function ip(a, b) {
        var c;
        return function() {
            c || (c = new hp(a, b));
            return c
        }
    }
    hp.prototype.i = function(a, b, c) {
        c = void 0 === c ? {} : c;
        return (this.options.nc ? cp : bp)(a, b, Object.assign({}, c))
    };
    hp.prototype.delete = function(a) {
        a = void 0 === a ? {} : a;
        return (this.options.nc ? gp : dp)(this.name, a)
    };

    function jp(a, b) {
        return ip(a, b)
    };
    var kp = {},
        lp = jp("ytGcfConfig", {
            zb: (kp.coldConfigStore = {
                Gb: 1
            }, kp.hotConfigStore = {
                Gb: 1
            }, kp),
            nc: !1,
            upgrade: function(a, b) {
                b(1) && (xo(qo(a, "hotConfigStore", {
                    keyPath: "key",
                    autoIncrement: !0
                }), "hotTimestampIndex", "timestamp"), xo(qo(a, "coldConfigStore", {
                    keyPath: "key",
                    autoIncrement: !0
                }), "coldTimestampIndex", "timestamp"))
            },
            version: 1
        });

    function mp(a) {
        return Jo(lp(), a)
    }

    function np(a, b, c) {
        var d, e, f;
        return w(function(g) {
            switch (g.h) {
                case 1:
                    return d = {
                        config: a,
                        hashData: b,
                        timestamp: S()
                    }, g.yield(mp(c), 2);
                case 2:
                    return e = g.i, g.yield(e.clear("hotConfigStore"), 3);
                case 3:
                    return g.yield(so(e, "hotConfigStore", d), 4);
                case 4:
                    return f = g.i, g.return(f)
            }
        })
    }

    function op(a, b, c, d) {
        var e, f, g;
        return w(function(h) {
            switch (h.h) {
                case 1:
                    return e = {
                        config: a,
                        hashData: b,
                        configData: c,
                        timestamp: S()
                    }, h.yield(mp(d), 2);
                case 2:
                    return f = h.i, h.yield(f.clear("coldConfigStore"), 3);
                case 3:
                    return h.yield(so(f, "coldConfigStore", e), 4);
                case 4:
                    return g = h.i, h.return(g)
            }
        })
    }

    function pp(a) {
        var b, c;
        return w(function(d) {
            return 1 == d.h ? d.yield(mp(a), 2) : 3 != d.h ? (b = d.i, c = void 0, d.yield(po(b, ["coldConfigStore"], {
                mode: "readwrite",
                fa: !0
            }, function(e) {
                return Co(e.objectStore("coldConfigStore").index("coldTimestampIndex"), {
                    direction: "prev"
                }, function(f) {
                    c = f.getValue()
                })
            }), 3)) : d.return(c)
        })
    }

    function qp(a) {
        var b, c;
        return w(function(d) {
            return 1 == d.h ? d.yield(mp(a), 2) : 3 != d.h ? (b = d.i, c = void 0, d.yield(po(b, ["hotConfigStore"], {
                mode: "readwrite",
                fa: !0
            }, function(e) {
                return Co(e.objectStore("hotConfigStore").index("hotTimestampIndex"), {
                    direction: "prev"
                }, function(f) {
                    c = f.getValue()
                })
            }), 3)) : d.return(c)
        })
    };

    function rp() {
        J.apply(this, arguments);
        this.i = []
    }
    v(rp, J);
    rp.prototype.K = function() {
        this.i.length = 0;
        J.prototype.K.call(this)
    };

    function sp() {
        this.h = 0;
        this.i = new rp
    }

    function tp(a, b, c) {
        var d, e, f;
        return w(function(g) {
            switch (g.h) {
                case 1:
                    if (!R("update_log_event_config")) {
                        g.A(0);
                        break
                    }
                    c && (a.j = c, A("yt.gcf.config.hotConfigGroup", a.j));
                    a.hotHashData = b;
                    A("yt.gcf.config.hotHashData", a.hotHashData);
                    d = Vo();
                    if (!d) {
                        g.A(3);
                        break
                    }
                    if (c) {
                        g.A(4);
                        break
                    }
                    return g.yield(qp(d), 5);
                case 5:
                    e = g.i, c = null == (f = e) ? void 0 : f.config;
                case 4:
                    return g.yield(np(c, b, d), 3);
                case 3:
                    if (c)
                        for (var h = c, l = t(a.i.i), m = l.next(); !m.done; m = l.next()) m = m.value, m(h);
                    g.h = 0
            }
        })
    }

    function up(a, b, c) {
        var d, e, f, g;
        return w(function(h) {
            if (1 == h.h) {
                if (!R("update_log_event_config")) return h.A(0);
                a.coldHashData = b;
                A("yt.gcf.config.coldHashData", a.coldHashData);
                return (d = Vo()) ? c ? h.A(4) : h.yield(pp(d), 5) : h.A(0)
            }
            4 != h.h && (e = h.i, c = null == (f = e) ? void 0 : f.config);
            if (!c) return h.A(0);
            g = c.configData;
            return h.yield(op(c, b, g, d), 0)
        })
    };

    function vp() {
        return "INNERTUBE_API_KEY" in Rl && "INNERTUBE_API_VERSION" in Rl
    }

    function wp() {
        return {
            innertubeApiKey: O("INNERTUBE_API_KEY"),
            innertubeApiVersion: O("INNERTUBE_API_VERSION"),
            Cc: O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
            ld: O("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
            oe: O("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
            innertubeContextClientVersion: O("INNERTUBE_CONTEXT_CLIENT_VERSION"),
            nd: O("INNERTUBE_CONTEXT_HL"),
            md: O("INNERTUBE_CONTEXT_GL"),
            pe: O("INNERTUBE_HOST_OVERRIDE") || "",
            re: !!O("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
            qe: !!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
            appInstallData: O("SERIALIZED_CLIENT_CONFIG_DATA")
        }
    }

    function xp(a) {
        var b = {
            client: {
                hl: a.nd,
                gl: a.md,
                clientName: a.ld,
                clientVersion: a.innertubeContextClientVersion,
                configInfo: a.Cc
            }
        };
        navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
        var c = x.devicePixelRatio;
        c && 1 != c && (b.client.screenDensityFloat = String(c));
        c = mm();
        "" !== c && (b.client.experimentsToken = c);
        c = nm();
        0 < c.length && (b.request = {
            internalExperimentFlags: c
        });
        yp(a, void 0, b);
        zp(void 0, b);
        Ap(void 0, b);
        Bp(a, void 0, b);
        Cp(void 0, b);
        R("start_sending_config_hash") && Dp(void 0, b);
        O("DELEGATED_SESSION_ID") &&
            !R("pageid_as_header_web") && (b.user = {
                onBehalfOfUser: O("DELEGATED_SESSION_ID")
            });
        a = Object;
        c = a.assign;
        for (var d = b.client, e = {}, f = t(Object.entries(em(O("DEVICE", "")))), g = f.next(); !g.done; g = f.next()) {
            var h = t(g.value);
            g = h.next().value;
            h = h.next().value;
            "cbrand" === g ? e.deviceMake = h : "cmodel" === g ? e.deviceModel = h : "cbr" === g ? e.browserName = h : "cbrver" === g ? e.browserVersion = h : "cos" === g ? e.osName = h : "cosver" === g ? e.osVersion = h : "cplatform" === g && (e.platform = h)
        }
        b.client = c.call(a, d, e);
        return b
    }

    function Ep(a) {
        var b = new Gk,
            c = new zk;
        F(c, 1, a.nd);
        F(c, 2, a.md);
        F(c, 16, a.oe);
        F(c, 17, a.innertubeContextClientVersion);
        if (a.Cc) {
            var d = a.Cc,
                e = new wk;
            d.coldConfigData && F(e, 1, d.coldConfigData);
            d.appInstallData && F(e, 6, d.appInstallData);
            d.coldHashData && F(e, 3, d.coldHashData);
            d.hotHashData && F(e, 5, d.hotHashData);
            H(c, wk, 62, e)
        }(d = x.devicePixelRatio) && 1 != d && F(c, 65, Jd(d));
        d = mm();
        "" !== d && F(c, 54, d);
        d = nm();
        if (0 < d.length) {
            e = new Ck;
            for (var f = 0; f < d.length; f++) {
                var g = new Ak;
                F(g, 1, d[f].key);
                Xd(g, 2, Bk, d[f].value);
                de(e, 15,
                    Ak, g)
            }
            H(b, Ck, 5, e)
        }
        yp(a, c);
        zp(b);
        Ap(c);
        Bp(a, c);
        Cp(c);
        R("start_sending_config_hash") && Dp(c);
        O("DELEGATED_SESSION_ID") && !R("pageid_as_header_web") && (a = new Fk, F(a, 3, O("DELEGATED_SESSION_ID")));
        a = t(Object.entries(em(O("DEVICE", ""))));
        for (d = a.next(); !d.done; d = a.next()) e = t(d.value), d = e.next().value, e = e.next().value, "cbrand" === d ? F(c, 12, e) : "cmodel" === d ? F(c, 13, e) : "cbr" === d ? F(c, 87, e) : "cbrver" === d ? F(c, 88, e) : "cos" === d ? F(c, 18, e) : "cosver" === d ? F(c, 19, e) : "cplatform" === d && F(c, 42, e);
        H(b, zk, 1, c);
        return b
    }

    function yp(a, b, c) {
        a = a.ld;
        if ("WEB" === a || "MWEB" === a || 1 === a || 2 === a)
            if (b) {
                c = Zd(b, xk, 96) || new xk;
                var d = Ym();
                d = Object.keys(Nk).indexOf(d);
                d = -1 === d ? null : d;
                null !== d && F(c, 3, d);
                H(b, xk, 96, c)
            } else c && (c.client.mainAppWebInfo = null != (d = c.client.mainAppWebInfo) ? d : {}, c.client.mainAppWebInfo.webDisplayMode = Ym())
    }

    function zp(a, b) {
        var c = B("yt.embedded_player.embed_url");
        c && (a ? (b = Zd(a, Dk, 7) || new Dk, F(b, 4, c), H(a, Dk, 7, b)) : b && (b.thirdParty = {
            embedUrl: c
        }))
    }

    function Ap(a, b) {
        var c;
        if (R("web_log_memory_total_kbytes") && (null == (c = x.navigator) ? 0 : c.deviceMemory)) {
            var d;
            c = null == (d = x.navigator) ? void 0 : d.deviceMemory;
            a ? F(a, 95, 1E6 * c) : b && (b.client.memoryTotalKbytes = "" + 1E6 * c)
        }
    }

    function Bp(a, b, c) {
        if (a.appInstallData)
            if (b) {
                var d;
                c = null != (d = Zd(b, wk, 62)) ? d : new wk;
                F(c, 6, a.appInstallData);
                H(b, wk, 62, c)
            } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
    }

    function Cp(a, b) {
        var c = pn();
        c && (a ? F(a, 61, ln[c]) : b && (b.client.connectionType = c));
        R("web_log_effective_connection_type") && (c = qn()) && (a ? F(a, 94, mn[c]) : b && (b.client.effectiveConnectionType = c))
    }

    function Fp(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = {};
        O("EOM_VISITOR_DATA") ? d = {
            "X-Goog-EOM-Visitor-Id": O("EOM_VISITOR_DATA")
        } : d = {
            "X-Goog-Visitor-Id": c.visitorData || O("VISITOR_DATA", "")
        };
        if (b && b.includes("www.youtube-nocookie.com")) return d;
        b = c.authorization || O("AUTHORIZATION");
        b || (a ? b = "Bearer " + B("gapi.auth.getToken")().yf : (a = Vm(Um()), R("pageid_as_header_web") || delete a["X-Goog-PageId"], d = Object.assign({}, d, a)));
        b && (d.Authorization = b);
        return d
    }

    function Dp(a, b) {
        if (!sp.h) {
            var c = new sp;
            sp.h = c
        }
        c = sp.h;
        var d = S() - c.h;
        if (0 !== c.h && d < lm("send_config_hash_timer")) c = void 0;
        else {
            d = B("yt.gcf.config.coldConfigData");
            var e = B("yt.gcf.config.hotHashData"),
                f = B("yt.gcf.config.coldHashData");
            d && e && f && (c.h = S());
            c = {
                coldConfigData: d,
                hotHashData: e,
                coldHashData: f
            }
        }
        if (e = c)
            if (c = e.coldConfigData, d = e.coldHashData, e = e.hotHashData, c && d && e)
                if (a) {
                    var g;
                    b = null != (g = Zd(a, wk, 62)) ? g : new wk;
                    F(b, 1, c);
                    F(b, 3, d);
                    F(b, 5, e);
                    H(a, wk, 62, b)
                } else b && (b.client.configInfo = b.client.configInfo || {}, b.client.configInfo.coldConfigData = c, b.client.configInfo.coldHashData = d, b.client.configInfo.hotHashData = e)
    };

    function Gp(a, b) {
        this.version = a;
        this.args = b
    }
    Gp.prototype.serialize = function() {
        return {
            version: this.version,
            args: this.args
        }
    };

    function Hp() {
        this.topic = "aft-recorded"
    }
    Hp.prototype.toString = function() {
        return this.topic
    };
    var Ip = B("ytPubsub2Pubsub2Instance") || new Ni;
    Ni.prototype.subscribe = Ni.prototype.subscribe;
    Ni.prototype.unsubscribeByKey = Ni.prototype.Eb;
    Ni.prototype.publish = Ni.prototype.bb;
    Ni.prototype.clear = Ni.prototype.clear;
    A("ytPubsub2Pubsub2Instance", Ip);
    A("ytPubsub2Pubsub2SubscribedKeys", B("ytPubsub2Pubsub2SubscribedKeys") || {});
    A("ytPubsub2Pubsub2TopicToKeys", B("ytPubsub2Pubsub2TopicToKeys") || {});
    A("ytPubsub2Pubsub2IsAsync", B("ytPubsub2Pubsub2IsAsync") || {});
    A("ytPubsub2Pubsub2SkipSubKey", null);

    function Jp(a, b) {
        var c = B("ytPubsub2Pubsub2Instance");
        c && c.publish.call(c, a.toString(), a, b)
    };

    function Kp(a, b, c) {
        c = void 0 === c ? {
            sampleRate: .1
        } : c;
        Math.random() < Math.min(.02, c.sampleRate / 100) && Jp("meta_logging_csi_event", {
            timerName: a,
            Sf: b
        })
    };
    var Lp = lm("max_body_size_to_compress", 5E5),
        Mp = lm("min_body_size_to_compress", 500),
        Np = !0,
        Op = 0,
        Pp = 0,
        Qp = lm("compression_performance_threshold", 250),
        Rp = lm("slow_compressions_before_abandon_count", 10);

    function Sp(a, b, c, d) {
        var e = S(),
            f = {
                startTime: e,
                ticks: {},
                infos: {}
            };
        if (Np) try {
            var g = Tp(b);
            if (null == g || !(g > Lp || g < Mp)) {
                var h = qk(li(b)),
                    l = S();
                f.ticks.gelc = l;
                Pp++;
                R("disable_compression_due_to_performance_degredation") && l - e >= Qp && (Op++, R("abandon_compression_after_N_slow_zips") ? Pp === lm("compression_disable_point") && Op > Rp && (Np = !1) : Np = !1);
                Up(f);
                c.headers || (c.headers = {});
                c.headers["Content-Encoding"] = "gzip";
                c.postBody = h;
                c.postParams = void 0
            }
            d(a, c)
        } catch (m) {
            Yl(m), d(a, c)
        } else d(a, c)
    }

    function Vp(a) {
        var b = void 0 === b ? !1 : b;
        var c = S(),
            d = {
                startTime: c,
                ticks: {},
                infos: {}
            };
        if (Np) {
            if (!a.body) return a;
            try {
                var e = "string" === typeof a.body ? a.body : JSON.stringify(a.body),
                    f = Tp(e);
                if (null != f && (f > Lp || f < Mp)) return a;
                var g = qk(li(e)),
                    h = S();
                d.ticks.gelc = h;
                if (b) {
                    Pp++;
                    if (R("disable_compression_due_to_performance_degredation") && h - c >= Qp)
                        if (Op++, R("abandon_compression_after_N_slow_zips")) {
                            b = Op / Pp;
                            var l = Rp / lm("compression_disable_point");
                            0 < Pp && 0 === Pp % lm("compression_disable_point") && b >= l && (Np = !1)
                        } else Np = !1;
                    Up(d)
                }
                a.headers = Object.assign({}, {
                    "Content-Encoding": "gzip"
                }, a.headers || {});
                a.body = g;
                return a
            } catch (m) {
                return Yl(m), a
            }
        } else return a
    }

    function Tp(a) {
        try {
            return (new Blob(a.split(""))).size
        } catch (b) {
            return Yl(b), null
        }
    }

    function Up(a) {
        R("gel_compression_csi_killswitch") || !R("log_gel_compression_latency") && !R("log_gel_compression_latency_lr") || Kp("gel_compression", a, {
            sampleRate: .1
        })
    };

    function Wp(a) {
        a = Object.assign({}, a);
        delete a.Authorization;
        var b = Hg();
        if (b) {
            var c = new wi;
            c.update(O("INNERTUBE_API_KEY"));
            c.update(b);
            a.hash = td(c.digest(), 3)
        }
        return a
    };
    var Xp;

    function Yp() {
        Xp || (Xp = new An("yt.innertube"));
        return Xp
    }

    function Zp(a, b, c, d) {
        if (d) return null;
        d = Yp().get("nextId", !0) || 1;
        var e = Yp().get("requests", !0) || {};
        e[d] = {
            method: a,
            request: b,
            authState: Wp(c),
            requestTime: Math.round(S())
        };
        Yp().set("nextId", d + 1, 86400, !0);
        Yp().set("requests", e, 86400, !0);
        return d
    }

    function $p(a) {
        var b = Yp().get("requests", !0) || {};
        delete b[a];
        Yp().set("requests", b, 86400, !0)
    }

    function aq(a) {
        var b = Yp().get("requests", !0);
        if (b) {
            for (var c in b) {
                var d = b[c];
                if (!(6E4 > Math.round(S()) - d.requestTime)) {
                    var e = d.authState,
                        f = Wp(Fp(!1));
                    rb(e, f) && (e = d.request, "requestTimeMs" in e && (e.requestTimeMs = Math.round(S())), bq(a, d.method, e, {}));
                    delete b[c]
                }
            }
            Yp().set("requests", b, 86400, !0)
        }
    };

    function cq(a) {
        this.Wb = this.h = !1;
        this.potentialEsfErrorCounter = this.i = 0;
        this.handleError = function() {};
        this.tb = function() {};
        this.now = Date.now;
        this.Ib = !1;
        var b;
        this.Gd = null != (b = a.Gd) ? b : 100;
        var c;
        this.Ad = null != (c = a.Ad) ? c : 1;
        var d;
        this.yd = null != (d = a.yd) ? d : 2592E6;
        var e;
        this.wd = null != (e = a.wd) ? e : 12E4;
        var f;
        this.zd = null != (f = a.zd) ? f : 5E3;
        var g;
        this.P = null != (g = a.P) ? g : void 0;
        this.cc = !!a.cc;
        var h;
        this.Zb = null != (h = a.Zb) ? h : .1;
        var l;
        this.jc = null != (l = a.jc) ? l : 10;
        a.handleError && (this.handleError = a.handleError);
        a.tb && (this.tb = a.tb);
        a.Ib && (this.Ib = a.Ib);
        a.Wb && (this.Wb = a.Wb);
        this.R = a.R;
        this.Aa = a.Aa;
        this.Y = a.Y;
        this.X = a.X;
        this.Ra = a.Ra;
        this.Kc =
            a.Kc;
        this.Jc = a.Jc;
        dq(this) && (!this.R || this.R("networkless_logging")) && eq(this)
    }

    function eq(a) {
        dq(a) && !a.Ib && (a.h = !0, a.cc && Math.random() <= a.Zb && a.Y.Xd(a.P), fq(a), a.X.sa() && a.Ob(), a.X.listen(a.Kc, a.Ob.bind(a)), a.X.listen(a.Jc, a.Yc.bind(a)))
    }
    k = cq.prototype;
    k.writeThenSend = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        if (dq(this) && this.h) {
            var d = {
                url: a,
                options: b,
                timestamp: this.now(),
                status: "NEW",
                sendCount: 0
            };
            this.Y.set(d, this.P).then(function(e) {
                d.id = e;
                c.X.sa() && gq(c, d)
            }).catch(function(e) {
                gq(c, d);
                hq(c, e)
            })
        } else this.Ra(a, b)
    };
    k.sendThenWrite = function(a, b, c) {
        var d = this;
        b = void 0 === b ? {} : b;
        if (dq(this) && this.h) {
            var e = {
                url: a,
                options: b,
                timestamp: this.now(),
                status: "NEW",
                sendCount: 0
            };
            this.R && this.R("nwl_skip_retry") && (e.skipRetry = c);
            if (this.X.sa() || this.R && this.R("nwl_aggressive_send_then_write") && !e.skipRetry) {
                if (!e.skipRetry) {
                    var f = b.onError ? b.onError : function() {};
                    b.onError = function(g, h) {
                        return w(function(l) {
                            if (1 == l.h) return l.yield(d.Y.set(e, d.P).catch(function(m) {
                                hq(d, m)
                            }), 2);
                            f(g, h);
                            l.h = 0
                        })
                    }
                }
                this.Ra(a, b, e.skipRetry)
            } else this.Y.set(e, this.P).catch(function(g) {
                d.Ra(a, b, e.skipRetry);
                hq(d, g)
            })
        } else this.Ra(a, b, this.R && this.R("nwl_skip_retry") && c)
    };
    k.sendAndWrite = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        if (dq(this) && this.h) {
            var d = {
                    url: a,
                    options: b,
                    timestamp: this.now(),
                    status: "NEW",
                    sendCount: 0
                },
                e = !1,
                f = b.onSuccess ? b.onSuccess : function() {};
            d.options.onSuccess = function(g, h) {
                void 0 !== d.id ? c.Y.sb(d.id, c.P) : e = !0;
                c.X.fb && c.R && c.R("vss_network_hint") && c.X.fb(!0);
                f(g, h)
            };
            this.Ra(d.url, d.options);
            this.Y.set(d, this.P).then(function(g) {
                d.id = g;
                e && c.Y.sb(d.id, c.P)
            }).catch(function(g) {
                hq(c, g)
            })
        } else this.Ra(a, b)
    };
    k.Ob = function() {
        var a = this;
        if (!dq(this)) throw ao("throttleSend");
        this.i || (this.i = this.Aa.ma(function() {
            var b;
            return w(function(c) {
                if (1 == c.h) return c.yield(a.Y.hd("NEW", a.P), 2);
                if (3 != c.h) return b = c.i, b ? c.yield(gq(a, b), 3) : (a.Yc(), c.return());
                a.i && (a.i = 0, a.Ob());
                c.h = 0
            })
        }, this.Gd))
    };
    k.Yc = function() {
        this.Aa.Fa(this.i);
        this.i = 0
    };

    function gq(a, b) {
        var c, d;
        return w(function(e) {
            switch (e.h) {
                case 1:
                    if (!dq(a)) throw c = ao("immediateSend"), c;
                    if (void 0 === b.id) {
                        e.A(2);
                        break
                    }
                    return e.yield(a.Y.te(b.id, a.P), 3);
                case 3:
                    (d = e.i) || a.tb(Error("The request cannot be found in the database."));
                case 2:
                    if (iq(a, b, a.yd)) {
                        e.A(4);
                        break
                    }
                    a.tb(Error("Networkless Logging: Stored logs request expired age limit"));
                    if (void 0 === b.id) {
                        e.A(5);
                        break
                    }
                    return e.yield(a.Y.sb(b.id, a.P), 5);
                case 5:
                    return e.return();
                case 4:
                    b.skipRetry || (b = jq(a, b));
                    if (!b) {
                        e.A(0);
                        break
                    }
                    if (!b.skipRetry ||
                        void 0 === b.id) {
                        e.A(8);
                        break
                    }
                    return e.yield(a.Y.sb(b.id, a.P), 8);
                case 8:
                    a.Ra(b.url, b.options, !!b.skipRetry), e.h = 0
            }
        })
    }

    function jq(a, b) {
        if (!dq(a)) throw ao("updateRequestHandlers");
        var c = b.options.onError ? b.options.onError : function() {};
        b.options.onError = function(e, f) {
            var g, h, l, m;
            return w(function(p) {
                switch (p.h) {
                    case 1:
                        g = kq(f);
                        (h = lq(f)) && a.R && a.R("web_enable_error_204") && a.handleError(Error("Request failed due to compression"), b.url, f);
                        if (!(a.R && a.R("nwl_consider_error_code") && g || a.R && !a.R("nwl_consider_error_code") && a.potentialEsfErrorCounter <= a.jc)) {
                            p.A(2);
                            break
                        }
                        if (!a.X.mc) {
                            p.A(3);
                            break
                        }
                        return p.yield(a.X.mc(), 3);
                    case 3:
                        if (a.X.sa()) {
                            p.A(2);
                            break
                        }
                        c(e, f);
                        if (!a.R || !a.R("nwl_consider_error_code") || void 0 === (null == (l = b) ? void 0 : l.id)) {
                            p.A(6);
                            break
                        }
                        return p.yield(a.Y.Nc(b.id, a.P, !1), 6);
                    case 6:
                        return p.return();
                    case 2:
                        if (a.R && a.R("nwl_consider_error_code") && !g && a.potentialEsfErrorCounter > a.jc) return p.return();
                        a.potentialEsfErrorCounter++;
                        if (void 0 === (null == (m = b) ? void 0 : m.id)) {
                            p.A(8);
                            break
                        }
                        return b.sendCount < a.Ad ? p.yield(a.Y.Nc(b.id, a.P, !0, h ? !1 : void 0), 12) : p.yield(a.Y.sb(b.id, a.P), 8);
                    case 12:
                        a.Aa.ma(function() {
                            a.X.sa() && a.Ob()
                        }, a.zd);
                    case 8:
                        c(e, f), p.h = 0
                }
            })
        };
        var d = b.options.onSuccess ? b.options.onSuccess : function() {};
        b.options.onSuccess = function(e, f) {
            var g;
            return w(function(h) {
                if (1 == h.h) return void 0 === (null == (g = b) ? void 0 : g.id) ? h.A(2) : h.yield(a.Y.sb(b.id, a.P), 2);
                a.X.fb && a.R && a.R("vss_network_hint") && a.X.fb(!0);
                d(e, f);
                h.h = 0
            })
        };
        return b
    }

    function iq(a, b, c) {
        b = b.timestamp;
        return a.now() - b >= c ? !1 : !0
    }

    function fq(a) {
        if (!dq(a)) throw ao("retryQueuedRequests");
        a.Y.hd("QUEUED", a.P).then(function(b) {
            b && !iq(a, b, a.wd) ? a.Aa.ma(function() {
                return w(function(c) {
                    if (1 == c.h) return void 0 === b.id ? c.A(2) : c.yield(a.Y.Nc(b.id, a.P), 2);
                    fq(a);
                    c.h = 0
                })
            }) : a.X.sa() && a.Ob()
        })
    }

    function hq(a, b) {
        a.Md && !a.X.sa() ? a.Md(b) : a.handleError(b)
    }

    function dq(a) {
        return !!a.P || a.Wb
    }

    function kq(a) {
        var b;
        return (a = null == a ? void 0 : null == (b = a.error) ? void 0 : b.code) && 400 <= a && 599 >= a ? !1 : !0
    }

    function lq(a) {
        var b;
        a = null == a ? void 0 : null == (b = a.error) ? void 0 : b.code;
        return !(400 !== a && 415 !== a)
    };
    var mq;

    function nq() {
        if (mq) return mq();
        var a = {};
        mq = jp("LogsDatabaseV2", {
            zb: (a.LogsRequestsStore = {
                Gb: 2
            }, a),
            nc: !1,
            upgrade: function(b, c, d) {
                c(2) && qo(b, "LogsRequestsStore", {
                    keyPath: "id",
                    autoIncrement: !0
                });
                c(3);
                c(5) && (d = d.objectStore("LogsRequestsStore"), d.h.indexNames.contains("newRequest") && d.h.deleteIndex("newRequest"), xo(d, "newRequestV2", ["status", "interface", "timestamp"]));
                c(7) && b.h.objectStoreNames.contains("sapisid") && b.h.deleteObjectStore("sapisid");
                c(9) && b.h.objectStoreNames.contains("SWHealthLog") && b.h.deleteObjectStore("SWHealthLog")
            },
            version: 9
        });
        return mq()
    };

    function oq(a) {
        return Jo(nq(), a)
    }

    function pq(a, b) {
        var c, d, e, f;
        return w(function(g) {
            if (1 == g.h) return c = {
                startTime: S(),
                infos: {
                    transactionType: "YT_IDB_TRANSACTION_TYPE_WRITE"
                },
                ticks: {}
            }, g.yield(oq(b), 2);
            if (3 != g.h) return d = g.i, e = Object.assign({}, a, {
                options: JSON.parse(JSON.stringify(a.options)),
                interface: O("INNERTUBE_CONTEXT_CLIENT_NAME", 0)
            }), g.yield(so(d, "LogsRequestsStore", e), 3);
            f = g.i;
            c.ticks.tc = S();
            qq(c);
            return g.return(f)
        })
    }

    function rq(a, b) {
        var c, d, e, f, g, h, l;
        return w(function(m) {
            if (1 == m.h) return c = {
                startTime: S(),
                infos: {
                    transactionType: "YT_IDB_TRANSACTION_TYPE_READ"
                },
                ticks: {}
            }, m.yield(oq(b), 2);
            if (3 != m.h) return d = m.i, e = O("INNERTUBE_CONTEXT_CLIENT_NAME", 0), f = [a, e, 0], g = [a, e, S()], h = IDBKeyRange.bound(f, g), l = void 0, m.yield(po(d, ["LogsRequestsStore"], {
                mode: "readwrite",
                fa: !0
            }, function(p) {
                return Co(p.objectStore("LogsRequestsStore").index("newRequestV2"), {
                    query: h,
                    direction: "prev"
                }, function(r) {
                    r.getValue() && (l = r.getValue(), "NEW" ===
                        a && (l.status = "QUEUED", r.update(l)))
                })
            }), 3);
            c.ticks.tc = S();
            qq(c);
            return m.return(l)
        })
    }

    function sq(a, b) {
        var c;
        return w(function(d) {
            if (1 == d.h) return d.yield(oq(b), 2);
            c = d.i;
            return d.return(po(c, ["LogsRequestsStore"], {
                mode: "readwrite",
                fa: !0
            }, function(e) {
                var f = e.objectStore("LogsRequestsStore");
                return f.get(a).then(function(g) {
                    if (g) return g.status = "QUEUED", lo(f.h.put(g, void 0)).then(function() {
                        return g
                    })
                })
            }))
        })
    }

    function tq(a, b, c, d) {
        c = void 0 === c ? !0 : c;
        var e;
        return w(function(f) {
            if (1 == f.h) return f.yield(oq(b), 2);
            e = f.i;
            return f.return(po(e, ["LogsRequestsStore"], {
                mode: "readwrite",
                fa: !0
            }, function(g) {
                var h = g.objectStore("LogsRequestsStore");
                return h.get(a).then(function(l) {
                    return l ? (l.status = "NEW", c && (l.sendCount += 1), void 0 !== d && (l.options.compress = d), lo(h.h.put(l, void 0)).then(function() {
                        return l
                    })) : fo.resolve(void 0)
                })
            }))
        })
    }

    function uq(a, b) {
        var c;
        return w(function(d) {
            if (1 == d.h) return d.yield(oq(b), 2);
            c = d.i;
            return d.return(c.delete("LogsRequestsStore", a))
        })
    }

    function vq(a) {
        var b, c;
        return w(function(d) {
            if (1 == d.h) return d.yield(oq(a), 2);
            b = d.i;
            c = S() - 2592E6;
            return d.yield(po(b, ["LogsRequestsStore"], {
                mode: "readwrite",
                fa: !0
            }, function(e) {
                return zo(e.objectStore("LogsRequestsStore"), {}, function(f) {
                    if (f.getValue().timestamp <= c) return f.delete().then(function() {
                        return f.continue()
                    })
                })
            }), 0)
        })
    }

    function wq() {
        w(function(a) {
            return a.yield(fp(), 0)
        })
    }

    function qq(a) {
        R("nwl_csi_killswitch") || Kp("networkless_performance", a, {
            sampleRate: 1
        })
    };
    var xq = {},
        yq = jp("ServiceWorkerLogsDatabase", {
            zb: (xq.SWHealthLog = {
                Gb: 1
            }, xq),
            nc: !0,
            upgrade: function(a, b) {
                b(1) && xo(qo(a, "SWHealthLog", {
                    keyPath: "id",
                    autoIncrement: !0
                }), "swHealthNewRequest", ["interface", "timestamp"])
            },
            version: 1
        });

    function zq(a) {
        return Jo(yq(), a)
    }

    function Aq(a) {
        var b, c;
        w(function(d) {
            if (1 == d.h) return d.yield(zq(a), 2);
            b = d.i;
            c = S() - 2592E6;
            return d.yield(po(b, ["SWHealthLog"], {
                mode: "readwrite",
                fa: !0
            }, function(e) {
                return zo(e.objectStore("SWHealthLog"), {}, function(f) {
                    if (f.getValue().timestamp <= c) return f.delete().then(function() {
                        return f.continue()
                    })
                })
            }), 0)
        })
    }

    function Bq(a) {
        var b;
        return w(function(c) {
            if (1 == c.h) return c.yield(zq(a), 2);
            b = c.i;
            return c.yield(b.clear("SWHealthLog"), 0)
        })
    };
    var Cq = {},
        Dq = 0;

    function Eq(a) {
        var b = new Image,
            c = "" + Dq++;
        Cq[c] = b;
        b.onload = b.onerror = function() {
            delete Cq[c]
        };
        b.src = a
    };

    function Fq() {
        this.h = new Map;
        this.i = !1
    }

    function Gq() {
        if (!Fq.h) {
            var a = B("yt.networkRequestMonitor.instance") || new Fq;
            A("yt.networkRequestMonitor.instance", a);
            Fq.h = a
        }
        return Fq.h
    }
    Fq.prototype.requestComplete = function(a, b) {
        b && (this.i = !0);
        a = this.removeParams(a);
        this.h.get(a) || this.h.set(a, b)
    };
    Fq.prototype.isEndpointCFR = function(a) {
        a = this.removeParams(a);
        return (a = this.h.get(a)) ? !1 : !1 === a && this.i ? !0 : null
    };
    Fq.prototype.removeParams = function(a) {
        return a.split("?")[0]
    };
    Fq.prototype.removeParams = Fq.prototype.removeParams;
    Fq.prototype.isEndpointCFR = Fq.prototype.isEndpointCFR;
    Fq.prototype.requestComplete = Fq.prototype.requestComplete;
    Fq.getInstance = Gq;
    var Hq;

    function Iq() {
        Hq || (Hq = new An("yt.offline"));
        return Hq
    }

    function Jq(a) {
        if (R("offline_error_handling")) {
            var b = Iq().get("errors", !0) || {};
            b[a.message] = {
                name: a.name,
                stack: a.stack
            };
            a.level && (b[a.message].level = a.level);
            Iq().set("errors", b, 2592E3, !0)
        }
    };

    function Kq() {
        df.call(this);
        var a = this;
        this.j = !1;
        this.i = pi();
        this.i.listen("networkstatus-online", function() {
            if (a.j && R("offline_error_handling")) {
                var b = Iq().get("errors", !0);
                if (b) {
                    for (var c in b)
                        if (b[c]) {
                            var d = new rn(c, "sent via offline_errors");
                            d.name = b[c].name;
                            d.stack = b[c].stack;
                            d.level = b[c].level;
                            Xl(d)
                        }
                    Iq().set("errors", {}, 2592E3, !0)
                }
            }
        })
    }
    v(Kq, df);

    function Lq() {
        if (!Kq.h) {
            var a = B("yt.networkStatusManager.instance") || new Kq;
            A("yt.networkStatusManager.instance", a);
            Kq.h = a
        }
        return Kq.h
    }
    k = Kq.prototype;
    k.sa = function() {
        return this.i.sa()
    };
    k.fb = function(a) {
        this.i.i = a
    };
    k.le = function() {
        var a = window.navigator.onLine;
        return void 0 === a ? !0 : a
    };
    k.be = function() {
        this.j = !0
    };
    k.listen = function(a, b) {
        return this.i.listen(a, b)
    };
    k.mc = function(a) {
        a = ni(this.i, a);
        a.then(function(b) {
            R("use_cfr_monitor") && Gq().requestComplete("generate_204", b)
        });
        return a
    };
    Kq.prototype.sendNetworkCheckRequest = Kq.prototype.mc;
    Kq.prototype.listen = Kq.prototype.listen;
    Kq.prototype.enableErrorFlushing = Kq.prototype.be;
    Kq.prototype.getWindowStatus = Kq.prototype.le;
    Kq.prototype.networkStatusHint = Kq.prototype.fb;
    Kq.prototype.isNetworkAvailable = Kq.prototype.sa;
    Kq.getInstance = Lq;

    function Mq(a) {
        a = void 0 === a ? {} : a;
        df.call(this);
        var b = this;
        this.i = this.s = 0;
        this.j = Lq();
        var c = B("yt.networkStatusManager.instance.listen").bind(this.j);
        c && (a.lc ? (this.lc = a.lc, c("networkstatus-online", function() {
            Nq(b, "publicytnetworkstatus-online")
        }), c("networkstatus-offline", function() {
            Nq(b, "publicytnetworkstatus-offline")
        })) : (c("networkstatus-online", function() {
            ef(b, "publicytnetworkstatus-online")
        }), c("networkstatus-offline", function() {
            ef(b, "publicytnetworkstatus-offline")
        })))
    }
    v(Mq, df);
    Mq.prototype.sa = function() {
        var a = B("yt.networkStatusManager.instance.isNetworkAvailable");
        return a ? a.bind(this.j)() : !0
    };
    Mq.prototype.fb = function(a) {
        var b = B("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);
        b && b(a)
    };
    Mq.prototype.mc = function(a) {
        var b = this,
            c;
        return w(function(d) {
            c = B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);
            return R("skip_network_check_if_cfr") && Gq().isEndpointCFR("generate_204") ? d.return(new Promise(function(e) {
                var f;
                b.fb((null == (f = window.navigator) ? void 0 : f.onLine) || !0);
                e(b.sa())
            })) : c ? d.return(c(a)) : d.return(!0)
        })
    };

    function Nq(a, b) {
        a.lc ? a.i ? (qi.Fa(a.s), a.s = qi.ma(function() {
            a.m !== b && (ef(a, b), a.m = b, a.i = S())
        }, a.lc - (S() - a.i))) : (ef(a, b), a.m = b, a.i = S()) : ef(a, b)
    };
    var Vq;

    function Zq() {
        var a = cq.call;
        Vq || (Vq = new Mq({
            Hf: !0,
            Cf: !0
        }));
        a.call(cq, this, {
            Y: {
                Xd: vq,
                sb: uq,
                hd: rq,
                te: sq,
                Nc: tq,
                set: pq
            },
            X: Vq,
            handleError: function(b, c, d) {
                var e, f = null == d ? void 0 : null == (e = d.error) ? void 0 : e.code;
                if (400 === f || 415 === f) {
                    var g;
                    Yl(new rn(b.message, c, null == d ? void 0 : null == (g = d.error) ? void 0 : g.code), void 0, void 0, void 0, !0)
                } else Xl(b)
            },
            tb: Yl,
            Ra: rr,
            now: S,
            Md: Jq,
            Aa: zn(),
            Kc: "publicytnetworkstatus-online",
            Jc: "publicytnetworkstatus-offline",
            cc: !0,
            Zb: .1,
            jc: lm("potential_esf_error_limit", 10),
            R: R,
            Ib: !(sn() && sr())
        });
        this.j = new Lh;
        R("networkless_immediately_drop_all_requests") && wq();
        gp("LogsDatabaseV2")
    }
    v(Zq, cq);

    function tr() {
        var a = B("yt.networklessRequestController.instance");
        a || (a = new Zq, A("yt.networklessRequestController.instance", a), R("networkless_logging") && Wo().then(function(b) {
            a.P = b;
            eq(a);
            a.j.resolve();
            a.cc && Math.random() <= a.Zb && a.P && Aq(a.P);
            R("networkless_immediately_drop_sw_health_store") && ur(a)
        }));
        return a
    }
    Zq.prototype.writeThenSend = function(a, b) {
        b || (b = {});
        sn() || (this.h = !1);
        cq.prototype.writeThenSend.call(this, a, b)
    };
    Zq.prototype.sendThenWrite = function(a, b, c) {
        b || (b = {});
        sn() || (this.h = !1);
        cq.prototype.sendThenWrite.call(this, a, b, c)
    };
    Zq.prototype.sendAndWrite = function(a, b) {
        b || (b = {});
        sn() || (this.h = !1);
        cq.prototype.sendAndWrite.call(this, a, b)
    };
    Zq.prototype.awaitInitialization = function() {
        return this.j.promise
    };

    function ur(a) {
        var b;
        w(function(c) {
            if (!a.P) throw b = ao("clearSWHealthLogsDb"), b;
            return c.return(Bq(a.P).catch(function(d) {
                a.handleError(d)
            }))
        })
    }

    function rr(a, b, c) {
        b = R("web_fp_via_jspb") ? Object.assign({}, b) : b;
        R("use_cfr_monitor") && vr(a, b);
        if (R("use_request_time_ms_header")) b.headers && (b.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(S())));
        else {
            var d;
            if (null == (d = b.postParams) ? 0 : d.requestTimeMs) b.postParams.requestTimeMs = Math.round(S())
        }
        if (c && 0 === Object.keys(b).length) {
            var e = void 0 === e ? "" : e;
            var f = void 0 === f ? !1 : f;
            if (a)
                if (e) Bm(a, void 0, "POST", e);
                else if (O("USE_NET_AJAX_FOR_PING_TRANSPORT", !1)) Bm(a, void 0, "GET", "", void 0, void 0, f);
            else {
                b: {
                    try {
                        var g =
                            new cb({
                                url: a
                            });
                        if (g.j && g.i || g.l) {
                            var h = vc(wc(5, a)),
                                l;
                            if (!(l = !h || !h.endsWith("/aclk"))) {
                                var m = a.search(Hc),
                                    p = Gc(a, 0, "ri", m);
                                if (0 > p) var r = null;
                                else {
                                    var y = a.indexOf("&", p);
                                    if (0 > y || y > m) y = m;
                                    r = decodeURIComponent(a.slice(p + 3, -1 !== y ? y : 0).replace(/\+/g, " "))
                                }
                                l = "1" !== r
                            }
                            var u = !l;
                            break b
                        }
                    } catch (D) {}
                    u = !1
                }
                if (u) {
                    b: {
                        try {
                            if (window.navigator && window.navigator.sendBeacon && window.navigator.sendBeacon(a, "")) {
                                var z = !0;
                                break b
                            }
                        } catch (D) {}
                        z = !1
                    }
                    c = z ? !0 : !1
                }
                else c = !1;c || Eq(a)
            }
        } else b.compress ? b.postBody ? ("string" !== typeof b.postBody &&
            (b.postBody = JSON.stringify(b.postBody)), Sp(a, b.postBody, b, ym)) : Sp(a, JSON.stringify(b.postParams), b, Gm) : ym(a, b)
    }

    function vr(a, b) {
        var c = b.onError ? b.onError : function() {};
        b.onError = function(e, f) {
            Gq().requestComplete(a, !1);
            c(e, f)
        };
        var d = b.onSuccess ? b.onSuccess : function() {};
        b.onSuccess = function(e, f) {
            Gq().requestComplete(a, !0);
            d(e, f)
        }
    }

    function sr() {
        return "www.youtube-nocookie.com" !== xc(document.location.toString())
    };
    var wr = !1,
        xr = x.ytNetworklessLoggingInitializationOptions || {
            isNwlInitialized: wr
        };
    A("ytNetworklessLoggingInitializationOptions", xr);

    function yr() {
        var a;
        w(function(b) {
            if (1 == b.h) return b.yield(Wo(), 2);
            a = b.i;
            if (!a || !sn() && !R("nwl_init_require_datasync_id_killswitch") || !sr()) return b.A(0);
            wr = !0;
            xr.isNwlInitialized = wr;
            return b.yield(tr().awaitInitialization(), 0)
        })
    };

    function zr(a) {
        var b = this;
        this.config_ = null;
        a ? this.config_ = a : vp() && (this.config_ = wp());
        vn(function() {
            aq(b)
        }, 5E3)
    }
    zr.prototype.isReady = function() {
        !this.config_ && vp() && (this.config_ = wp());
        return !!this.config_
    };

    function bq(a, b, c, d) {
        function e(z) {
            z = void 0 === z ? !1 : z;
            var D;
            if (d.retry && "www.youtube-nocookie.com" != h && (z || R("skip_ls_gel_retry") || "application/json" !== g.headers["Content-Type"] || (D = Zp(b, c, m, l)), D)) {
                var G = g.onSuccess,
                    M = g.onFetchSuccess;
                g.onSuccess = function(T, da) {
                    $p(D);
                    G(T, da)
                };
                c.onFetchSuccess = function(T, da) {
                    $p(D);
                    M(T, da)
                }
            }
            try {
                if (z && d.retry && !d.rd.bypassNetworkless) g.method = "POST", d.rd.writeThenSend ? tr().writeThenSend(u, g) : tr().sendAndWrite(u, g);
                else if (d.compress)
                    if (g.postBody) {
                        var P = g.postBody;
                        "string" !== typeof P && (P = JSON.stringify(g.postBody));
                        Sp(u, P, g, ym)
                    } else Sp(u, JSON.stringify(g.postParams), g, Gm);
                else R("web_all_payloads_via_jspb") ? ym(u, g) : Gm(u, g)
            } catch (T) {
                if ("InvalidAccessError" == T.name) D && ($p(D), D = 0), Yl(Error("An extension is blocking network request."));
                else throw T;
            }
            D && vn(function() {
                aq(a)
            }, 5E3)
        }!O("VISITOR_DATA") && "visitor_id" !== b && .01 > Math.random() && Yl(new rn("Missing VISITOR_DATA when sending innertube request.", b, c, d));
        if (!a.isReady()) {
            var f = new rn("innertube xhrclient not ready", b, c, d);
            Xl(f);
            throw f;
        }
        var g = {
            headers: d.headers || {},
            method: "POST",
            postParams: c,
            postBody: d.postBody,
            postBodyFormat: d.postBodyFormat || "JSON",
            onTimeout: function() {
                d.onTimeout()
            },
            onFetchTimeout: d.onTimeout,
            onSuccess: function(z, D) {
                if (d.onSuccess) d.onSuccess(D)
            },
            onFetchSuccess: function(z) {
                if (d.onSuccess) d.onSuccess(z)
            },
            onError: function(z, D) {
                if (d.onError) d.onError(D)
            },
            onFetchError: function(z) {
                if (d.onError) d.onError(z)
            },
            timeout: d.timeout,
            withCredentials: !0,
            compress: d.compress
        };
        g.headers["Content-Type"] || (g.headers["Content-Type"] = "application/json");
        var h = "";
        (f = a.config_.pe) && (h = f);
        var l = a.config_.re || !1,
            m = Fp(l, h, d);
        Object.assign(g.headers, m);
        (f = g.headers.Authorization) && !h && l && (g.headers["x-origin"] = window.location.origin);
        var p = "/youtubei/" + a.config_.innertubeApiVersion + "/" + b,
            r = {
                alt: "json"
            },
            y = a.config_.qe && f;
        y = y && f.startsWith("Bearer");
        y || (r.key = a.config_.innertubeApiKey);
        var u = gm("" + h + p, r || {}, !0);
        (B("ytNetworklessLoggingInitializationOptions") ?
            xr.isNwlInitialized : wr) ? Uo().then(function(z) {
            e(z)
        }): e(!1)
    };
    var Ar = 0,
        Br = cd ? "webkit" : bd ? "moz" : Vc ? "ms" : Uc ? "o" : "";
    A("ytDomDomGetNextId", B("ytDomDomGetNextId") || function() {
        return ++Ar
    });
    var Cr = {
        stopImmediatePropagation: 1,
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        screenX: 1,
        screenY: 1,
        scale: 1,
        rotation: 1,
        webkitMovementX: 1,
        webkitMovementY: 1
    };

    function Dr(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null;
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.rotation = this.clientY = this.clientX = 0;
        this.scale = 1;
        this.changedTouches = this.touches = null;
        try {
            if (a = a || window.event) {
                this.event = a;
                for (var b in a) b in Cr || (this[b] = a[b]);
                this.scale = a.scale;
                this.rotation = a.rotation;
                var c = a.target || a.srcElement;
                c && 3 == c.nodeType && (c = c.parentNode);
                this.target = c;
                var d = a.relatedTarget;
                if (d) try {
                    d = d.nodeName ? d : null
                } catch (e) {
                    d = null
                } else "mouseover" == this.type ? d = a.fromElement : "mouseout" == this.type && (d = a.toElement);
                this.relatedTarget = d;
                this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
                this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
                this.keyCode = a.keyCode ? a.keyCode : a.which;
                this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
                this.altKey = a.altKey;
                this.ctrlKey = a.ctrlKey;
                this.shiftKey = a.shiftKey;
                this.metaKey = a.metaKey;
                this.h = a.pageX;
                this.i = a.pageY
            }
        } catch (e) {}
    }

    function Er(a) {
        if (document.body && document.documentElement) {
            var b = document.body.scrollTop + document.documentElement.scrollTop;
            a.h = a.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft);
            a.i = a.clientY + b
        }
    }
    Dr.prototype.preventDefault = function() {
        this.event && (this.event.returnValue = !1, this.event.preventDefault && this.event.preventDefault())
    };
    Dr.prototype.stopPropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopPropagation && this.event.stopPropagation())
    };
    Dr.prototype.stopImmediatePropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopImmediatePropagation && this.event.stopImmediatePropagation())
    };
    var ob = x.ytEventsEventsListeners || {};
    A("ytEventsEventsListeners", ob);
    var Fr = x.ytEventsEventsCounter || {
        count: 0
    };
    A("ytEventsEventsCounter", Fr);

    function Gr(a, b, c, d) {
        d = void 0 === d ? {} : d;
        a.addEventListener && ("mouseenter" != b || "onmouseenter" in document ? "mouseleave" != b || "onmouseenter" in document ? "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll") : b = "mouseout" : b = "mouseover");
        return nb(function(e) {
            var f = "boolean" === typeof e[4] && e[4] == !!d,
                g = Sa(e[4]) && Sa(d) && rb(e[4], d);
            return !!e.length && e[0] == a && e[1] == b && e[2] == c && (f || g)
        })
    }
    var Hr = eb(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "capture", {
                get: function() {
                    a = !0
                }
            });
            window.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function Ir(a, b, c, d) {
        d = void 0 === d ? {} : d;
        if (!a || !a.addEventListener && !a.attachEvent) return "";
        var e = Gr(a, b, c, d);
        if (e) return e;
        e = ++Fr.count + "";
        var f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document);
        var g = f ? function(h) {
            h = new Dr(h);
            if (!tf(h.relatedTarget, function(l) {
                    return l == a
                })) return h.currentTarget = a, h.type = b, c.call(a, h)
        } : function(h) {
            h = new Dr(h);
            h.currentTarget = a;
            return c.call(a, h)
        };
        g = Wl(g);
        a.addEventListener ? ("mouseenter" == b && f ? b = "mouseover" : "mouseleave" == b && f ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll"), Hr() || "boolean" === typeof d ? a.addEventListener(b, g, d) : a.addEventListener(b, g, !!d.capture)) : a.attachEvent("on" + b, g);
        ob[e] = [a, b, c, g, d];
        return e
    }

    function Jr(a) {
        a && ("string" == typeof a && (a = [a]), gb(a, function(b) {
            if (b in ob) {
                var c = ob[b],
                    d = c[0],
                    e = c[1],
                    f = c[3];
                c = c[4];
                d.removeEventListener ? Hr() || "boolean" === typeof c ? d.removeEventListener(e, f, c) : d.removeEventListener(e, f, !!c.capture) : d.detachEvent && d.detachEvent("on" + e, f);
                delete ob[b]
            }
        }))
    };

    function Kr(a) {
        this.M = a;
        this.i = null;
        this.m = 0;
        this.v = null;
        this.s = 0;
        this.j = [];
        for (a = 0; 4 > a; a++) this.j.push(0);
        this.l = 0;
        this.W = Ir(window, "mousemove", Ya(this.Z, this));
        a = Ya(this.T, this);
        "function" === typeof a && (a = Wl(a));
        this.aa = window.setInterval(a, 25)
    }
    $a(Kr, J);
    Kr.prototype.Z = function(a) {
        void 0 === a.h && Er(a);
        var b = a.h;
        void 0 === a.i && Er(a);
        this.i = new pf(b, a.i)
    };
    Kr.prototype.T = function() {
        if (this.i) {
            var a = S();
            if (0 != this.m) {
                var b = this.v,
                    c = this.i,
                    d = b.x - c.x;
                b = b.y - c.y;
                d = Math.sqrt(d * d + b * b) / (a - this.m);
                this.j[this.l] = .5 < Math.abs((d - this.s) / this.s) ? 1 : 0;
                for (c = b = 0; 4 > c; c++) b += this.j[c] || 0;
                3 <= b && this.M();
                this.s = d
            }
            this.m = a;
            this.v = this.i;
            this.l = (this.l + 1) % 4
        }
    };
    Kr.prototype.K = function() {
        window.clearInterval(this.aa);
        Jr(this.W)
    };
    var Lr = new Set([174, 173, 175]),
        Mr = {};

    function Nr(a) {
        var b = void 0 === a ? {} : a;
        a = void 0 === b.Be ? !1 : b.Be;
        b = void 0 === b.ce ? !0 : b.ce;
        if (null == B("_lact", window)) {
            var c = parseInt(O("LACT"), 10);
            c = isFinite(c) ? Date.now() - Math.max(c, 0) : -1;
            A("_lact", c, window);
            A("_fact", c, window); - 1 == c && Or();
            Ir(document, "keydown", Or);
            Ir(document, "keyup", Or);
            Ir(document, "mousedown", Or);
            Ir(document, "mouseup", Or);
            a ? Ir(window, "touchmove", function() {
                Pr("touchmove", 200)
            }, {
                passive: !0
            }) : (Ir(window, "resize", function() {
                Pr("resize", 200)
            }), b && Ir(window, "scroll", function() {
                Pr("scroll",
                    200)
            }));
            new Kr(function() {
                Pr("mouse", 100)
            });
            Ir(document, "touchstart", Or, {
                passive: !0
            });
            Ir(document, "touchend", Or, {
                passive: !0
            })
        }
    }

    function Pr(a, b) {
        Mr[a] || (Mr[a] = !0, qi.ma(function() {
            Or();
            Mr[a] = !1
        }, b))
    }

    function Or(a) {
        var b;
        if (null != (b = B("experiment.flags", window)) && b.enable_lact_reset_by_volume_buttons || !Lr.has(null == a ? void 0 : a.keyCode)) null == B("_lact", window) && Nr(), a = Date.now(), A("_lact", a, window), -1 == B("_fact", window) && A("_fact", a, window), (a = B("ytglobal.ytUtilActivityCallback_")) && a()
    }

    function Qr() {
        var a = B("_lact", window);
        return null == a ? -1 : Math.max(Date.now() - a, 0)
    };
    var Rr = x.ytPubsubPubsubInstance || new Ni,
        Sr = x.ytPubsubPubsubSubscribedKeys || {},
        Tr = x.ytPubsubPubsubTopicToKeys || {},
        Ur = x.ytPubsubPubsubIsSynchronous || {};

    function Vr(a, b) {
        var c = Wr();
        if (c && b) {
            var d = c.subscribe(a, function() {
                var e = arguments;
                var f = function() {
                    Sr[d] && b.apply && "function" == typeof b.apply && b.apply(window, e)
                };
                try {
                    Ur[a] ? f() : rm(f, 0)
                } catch (g) {
                    Xl(g)
                }
            }, void 0);
            Sr[d] = !0;
            Tr[a] || (Tr[a] = []);
            Tr[a].push(d);
            return d
        }
        return 0
    }

    function Xr(a) {
        var b = Wr();
        b && ("number" === typeof a ? a = [a] : "string" === typeof a && (a = [parseInt(a, 10)]), gb(a, function(c) {
            b.unsubscribeByKey(c);
            delete Sr[c]
        }))
    }

    function Yr(a, b) {
        var c = Wr();
        c && c.publish.apply(c, arguments)
    }

    function Zr(a) {
        var b = Wr();
        if (b)
            if (b.clear(a), a) $r(a);
            else
                for (var c in Tr) $r(c)
    }

    function Wr() {
        return x.ytPubsubPubsubInstance
    }

    function $r(a) {
        Tr[a] && (a = Tr[a], gb(a, function(b) {
            Sr[b] && delete Sr[b]
        }), a.length = 0)
    }
    Ni.prototype.subscribe = Ni.prototype.subscribe;
    Ni.prototype.unsubscribeByKey = Ni.prototype.Eb;
    Ni.prototype.publish = Ni.prototype.bb;
    Ni.prototype.clear = Ni.prototype.clear;
    A("ytPubsubPubsubInstance", Rr);
    A("ytPubsubPubsubTopicToKeys", Tr);
    A("ytPubsubPubsubIsSynchronous", Ur);
    A("ytPubsubPubsubSubscribedKeys", Sr);
    var as = Symbol("injectionDeps");

    function bs(a) {
        this.name = a
    }
    bs.prototype.toString = function() {
        return "InjectionToken(" + this.name + ")"
    };

    function cs(a) {
        this.key = a
    }

    function ds() {
        this.h = new Map;
        this.i = new Map
    }
    ds.prototype.resolve = function(a) {
        return a instanceof cs ? es(this, a.key, [], !0) : es(this, a, [])
    };

    function es(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        if (-1 < c.indexOf(b)) throw Error("Deps cycle for: " + b);
        if (a.i.has(b)) return a.i.get(b);
        if (!a.h.has(b)) {
            if (d) return;
            throw Error("No provider for: " + b);
        }
        d = a.h.get(b);
        c.push(b);
        if (void 0 !== d.Jd) var e = d.Jd;
        else if (d.af) e = d[as] ? gs(a, d[as], c) : [], e = d.af.apply(d, ia(e));
        else if (d.Id) {
            e = d.Id;
            var f = e[as] ? gs(a, e[as], c) : [];
            e = new(Function.prototype.bind.apply(e, [null].concat(ia(f))))
        } else throw Error("Could not resolve providers for: " + b);
        c.pop();
        d.Qf || a.i.set(b, e);
        return e
    }

    function gs(a, b, c) {
        return b ? b.map(function(d) {
            return d instanceof cs ? es(a, d.key, c, !0) : es(a, d, c)
        }) : []
    };
    var hs;

    function is() {
        hs || (hs = new ds);
        return hs
    };

    function js() {
        this.store = {};
        this.h = {}
    }
    js.prototype.storePayload = function(a, b) {
        a = ks(a);
        this.store[a] ? this.store[a].push(b) : (this.h = {}, this.store[a] = [b]);
        return a
    };
    js.prototype.smartExtractMatchingEntries = function(a) {
        if (!a.keys.length) return [];
        for (var b = ls(this, a.keys.splice(0, 1)[0]), c = [], d = 0; d < b.length; d++) this.store[b[d]] && a.sizeLimit && (this.store[b[d]].length <= a.sizeLimit ? (c.push.apply(c, ia(this.store[b[d]])), delete this.store[b[d]]) : c.push.apply(c, ia(this.store[b[d]].splice(0, a.sizeLimit))));
        (null == a ? 0 : a.sizeLimit) && c.length < (null == a ? void 0 : a.sizeLimit) && (a.sizeLimit -= c.length, c.push.apply(c, ia(this.smartExtractMatchingEntries(a))));
        return c
    };
    js.prototype.extractMatchingEntries = function(a) {
        a = ls(this, a);
        for (var b = [], c = 0; c < a.length; c++) this.store[a[c]] && (b.push.apply(b, ia(this.store[a[c]])), delete this.store[a[c]]);
        return b
    };
    js.prototype.getSequenceCount = function(a) {
        a = ls(this, a);
        for (var b = 0, c = 0; c < a.length; c++) {
            var d = void 0;
            b += (null == (d = this.store[a[c]]) ? void 0 : d.length) || 0
        }
        return b
    };

    function ls(a, b) {
        var c = ks(b);
        if (a.h[c]) return a.h[c];
        var d = Object.keys(a.store) || [];
        if (1 >= d.length && ks(b) === d[0]) return d;
        for (var e = [], f = 0; f < d.length; f++) {
            var g = d[f].split("/");
            if (ms(b.auth, g[0])) {
                var h = b.isJspb;
                ms(void 0 === h ? "undefined" : h ? "true" : "false", g[1]) && ms(b.cttAuthInfo, g[2]) && (h = b.tier, h = void 0 === h ? "undefined" : JSON.stringify(h), ms(h, g[3]) && e.push(d[f]))
            }
        }
        return a.h[c] = e
    }

    function ms(a, b) {
        return void 0 === a || "undefined" === a ? !0 : a === b
    }
    js.prototype.getSequenceCount = js.prototype.getSequenceCount;
    js.prototype.extractMatchingEntries = js.prototype.extractMatchingEntries;
    js.prototype.smartExtractMatchingEntries = js.prototype.smartExtractMatchingEntries;
    js.prototype.storePayload = js.prototype.storePayload;

    function ks(a) {
        return [void 0 === a.auth ? "undefined" : a.auth, void 0 === a.isJspb ? "undefined" : a.isJspb, void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo, void 0 === a.tier ? "undefined" : a.tier].join("/")
    };

    function ns(a, b) {
        if (a) return a[b.name]
    };
    var ps = lm("initial_gel_batch_timeout", 2E3),
        qs = lm("gel_queue_timeout_max_ms", 6E4),
        rs = Math.pow(2, 16) - 1,
        ss = void 0;

    function ts() {
        this.j = this.h = this.i = 0
    }
    var us = new ts,
        vs = new ts,
        ws, xs = !0,
        ys = x.ytLoggingTransportTokensToCttTargetIds_ || {};
    A("ytLoggingTransportTokensToCttTargetIds_", ys);
    var zs = x.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
    A("ytLoggingTransportTokensToJspbCttTargetIds_", zs);
    var As = {};

    function Bs() {
        var a = B("yt.logging.ims");
        a || (a = new js, A("yt.logging.ims", a));
        return a
    }

    function Cs(a, b) {
        if ("log_event" === a.endpoint) {
            Ds(a);
            var c = Es(a);
            As[c] = !0;
            var d = {
                cttAuthInfo: c,
                isJspb: !1
            };
            Bs().storePayload(d, a.payload);
            Fs(b, c, !1, d)
        }
    }

    function Gs(a, b) {
        if ("log_event" === a.endpoint) {
            Ds(void 0, a);
            var c = Es(a, !0);
            As[c] = !0;
            var d = {
                cttAuthInfo: c,
                isJspb: !0
            };
            Bs().storePayload(d, a.payload.toJSON());
            Fs(b, c, !0, d)
        }
    }

    function Fs(a, b, c, d) {
        c = void 0 === c ? !1 : c;
        a && (ss = new a);
        a = lm("tvhtml5_logging_max_batch_ads_fork") || lm("web_logging_max_batch") || 100;
        var e = S(),
            f = c ? vs.j : us.j,
            g = 0;
        d && (g = Bs().getSequenceCount(d));
        g >= a ? ws || (ws = Hs(function() {
            Is({
                writeThenSend: !0
            }, R("flush_only_full_queue") ? b : void 0, c);
            ws = void 0
        }, 0)) : 10 <= e - f && (Js(c), c ? vs.j = e : us.j = e)
    }

    function Ks(a, b) {
        if ("log_event" === a.endpoint) {
            Ds(a);
            var c = Es(a),
                d = new Map;
            d.set(c, [a.payload]);
            b && (ss = new b);
            return new Ff(function(e, f) {
                ss && ss.isReady() ? Ls(d, ss, e, f, {
                    bypassNetworkless: !0
                }, !0) : e()
            })
        }
    }

    function Ms(a, b) {
        if ("log_event" === a.endpoint) {
            Ds(void 0, a);
            var c = Es(a, !0),
                d = new Map;
            d.set(c, [a.payload.toJSON()]);
            b && (ss = new b);
            return new Ff(function(e) {
                ss && ss.isReady() ? Ns(d, ss, e, {
                    bypassNetworkless: !0
                }, !0) : e()
            })
        }
    }

    function Es(a, b) {
        var c = "";
        if (a.dangerousLogToVisitorSession) c = "visitorOnlyApprovedKey";
        else if (a.cttAuthInfo) {
            if (void 0 === b ? 0 : b) {
                b = a.cttAuthInfo.token;
                c = a.cttAuthInfo;
                var d = new Cl;
                c.videoId ? d.setVideoId(c.videoId) : c.playlistId && Xd(d, 2, Dl, c.playlistId);
                zs[b] = d
            } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), ys[a.cttAuthInfo.token] = c;
            c = a.cttAuthInfo.token
        }
        return c
    }

    function Is(a, b, c) {
        a = void 0 === a ? {} : a;
        c = void 0 === c ? !1 : c;
        new Ff(function(d, e) {
            c ? (Os(vs.i), Os(vs.h), vs.h = 0) : (Os(us.i), Os(us.h), us.h = 0);
            if (ss && ss.isReady()) {
                var f = a,
                    g = c,
                    h = ss;
                f = void 0 === f ? {} : f;
                g = void 0 === g ? !1 : g;
                var l = new Map,
                    m = new Map;
                if (void 0 !== b) g ? (e = Bs().extractMatchingEntries({
                    isJspb: g,
                    cttAuthInfo: b
                }), l.set(b, e), Ns(l, h, d, f)) : (l = Bs().extractMatchingEntries({
                    isJspb: g,
                    cttAuthInfo: b
                }), m.set(b, l), Ls(m, h, d, e, f));
                else if (g) {
                    e = t(Object.keys(As));
                    for (g = e.next(); !g.done; g = e.next()) m = g.value, g = Bs().extractMatchingEntries({
                        isJspb: !0,
                        cttAuthInfo: m
                    }), 0 < g.length && l.set(m, g), delete As[m];
                    Ns(l, h, d, f)
                } else {
                    l = t(Object.keys(As));
                    for (g = l.next(); !g.done; g = l.next()) {
                        g = g.value;
                        var p = Bs().extractMatchingEntries({
                            isJspb: !1,
                            cttAuthInfo: g
                        });
                        0 < p.length && m.set(g, p);
                        delete As[g]
                    }
                    Ls(m, h, d, e, f)
                }
            } else Js(c), d()
        })
    }

    function Js(a) {
        a = void 0 === a ? !1 : a;
        if (R("web_gel_timeout_cap") && (!a && !us.h || a && !vs.h)) {
            var b = Hs(function() {
                Is({
                    writeThenSend: !0
                }, void 0, a)
            }, qs);
            a ? vs.h = b : us.h = b
        }
        Os(a ? vs.i : us.i);
        b = O("LOGGING_BATCH_TIMEOUT", lm("web_gel_debounce_ms", 1E4));
        R("shorten_initial_gel_batch_timeout") && xs && (b = ps);
        b = Hs(function() {
            Is({
                writeThenSend: !0
            }, void 0, a)
        }, b);
        a ? vs.i = b : us.i = b
    }

    function Ls(a, b, c, d, e, f) {
        e = void 0 === e ? {} : e;
        var g = Math.round(S()),
            h = a.size,
            l = {};
        a = t(a);
        for (var m = a.next(); !m.done; l = {
                Pb: l.Pb,
                Ya: l.Ya,
                Cb: l.Cb,
                Rb: l.Rb,
                Qb: l.Qb
            }, m = a.next()) {
            var p = t(m.value);
            m = p.next().value;
            p = p.next().value;
            l.Ya = tb({
                context: xp(b.config_ || wp())
            });
            if (!Ra(p) && !R("throw_err_when_logevent_malformed_killswitch")) {
                d();
                break
            }
            l.Ya.events = p;
            (p = ys[m]) && Ps(l.Ya, m, p);
            delete ys[m];
            l.Cb = "visitorOnlyApprovedKey" === m;
            Qs(l.Ya, g, l.Cb);
            Rs(e);
            l.Rb = function(r) {
                R("update_log_event_config") && qi.ma(function() {
                    return w(function(y) {
                        return y.yield(Ss(r),
                            0)
                    })
                });
                h--;
                h || c()
            };
            l.Pb = 0;
            l.Qb = function(r) {
                return function() {
                    r.Pb++;
                    if (e.bypassNetworkless && 1 === r.Pb) try {
                        bq(b, "log_event", r.Ya, Ts({
                            writeThenSend: !0
                        }, r.Cb, r.Rb, r.Qb, f)), xs = !1
                    } catch (y) {
                        Xl(y), d()
                    }
                    h--;
                    h || c()
                }
            }(l);
            try {
                bq(b, "log_event", l.Ya, Ts(e, l.Cb, l.Rb, l.Qb, f)), xs = !1
            } catch (r) {
                Xl(r), d()
            }
        }
    }

    function Ns(a, b, c, d, e) {
        d = void 0 === d ? {} : d;
        var f = Math.round(S()),
            g = a.size,
            h = new Map([].concat(ia(a)));
        h = t(h);
        for (var l = h.next(); !l.done; l = h.next()) {
            var m = t(l.value).next().value,
                p = a.get(m);
            l = new El;
            var r = Ep(b.config_ || wp());
            H(l, Gk, 1, r);
            p = p ? Us(p) : [];
            p = t(p);
            for (r = p.next(); !r.done; r = p.next()) de(l, 3, zl, r.value);
            (p = zs[m]) && Vs(l, m, p);
            delete zs[m];
            m = "visitorOnlyApprovedKey" === m;
            Ws(l, f, m);
            Rs(d);
            p = {
                startTime: S(),
                ticks: {},
                infos: {}
            };
            l = l.serialize();
            p.ticks.geljspc = S();
            R("log_jspb_serialize_latency") && Kp("gel_jspb_serialize",
                p, {
                    sampleRate: .1
                });
            m = Ts(d, m, function(y) {
                R("update_log_event_config") && qi.ma(function() {
                    return w(function(u) {
                        return u.yield(Ss(y), 0)
                    })
                });
                g--;
                g || c()
            }, function() {
                g--;
                g || c()
            }, e);
            m.headers["Content-Type"] = "application/json+protobuf";
            m.postBodyFormat = "JSPB";
            m.postBody = l;
            bq(b, "log_event", "", m);
            xs = !1
        }
    }

    function Rs(a) {
        R("always_send_and_write") && (a.writeThenSend = !1)
    }

    function Ts(a, b, c, d, e) {
        a = {
            retry: !0,
            onSuccess: c,
            onError: d,
            rd: a,
            dangerousLogToVisitorSession: b,
            zf: !!e,
            headers: {},
            postBodyFormat: "",
            postBody: "",
            compress: R("compress_gel") || R("compress_gel_lr")
        };
        Xs() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(S())));
        return a
    }

    function Qs(a, b, c) {
        Xs() || (a.requestTimeMs = String(b));
        R("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
        !c && (b = O("EVENT_ID")) && (c = Ys(), a.serializedClientEventId = {
            serializedEventId: b,
            clientCounter: String(c)
        })
    }

    function Ws(a, b, c) {
        Xs() || F(a, 2, b);
        if (!c && (b = O("EVENT_ID"))) {
            c = Ys();
            var d = new Bl;
            F(d, 1, b);
            F(d, 2, c);
            H(a, Bl, 5, d)
        }
    }

    function Ys() {
        var a = O("BATCH_CLIENT_COUNTER") || 0;
        a || (a = Math.floor(Math.random() * rs / 2));
        a++;
        a > rs && (a = 1);
        Sl("BATCH_CLIENT_COUNTER", a);
        return a
    }

    function Ps(a, b, c) {
        if (c.videoId) var d = "VIDEO";
        else if (c.playlistId) d = "PLAYLIST";
        else return;
        a.credentialTransferTokenTargetId = c;
        a.context = a.context || {};
        a.context.user = a.context.user || {};
        a.context.user.credentialTransferTokens = [{
            token: b,
            scope: d
        }]
    }

    function Vs(a, b, c) {
        var d = 1 === Yd(c, Dl) ? 1 : -1;
        if (Od(c, d)) d = 1;
        else if (c.getPlaylistId()) d = 2;
        else return;
        H(a, Cl, 4, c);
        a = Zd(a, Gk, 1) || new Gk;
        c = Zd(a, Fk, 3) || new Fk;
        var e = new Ek;
        F(e, 2, b);
        F(e, 1, d);
        de(c, 12, Ek, e);
        H(a, Fk, 3, c)
    }

    function Us(a) {
        for (var b = [], c = 0; c < a.length; c++) try {
            b.push(new zl(a[c]))
        } catch (d) {
            Xl(new rn("Transport failed to deserialize " + String(a[c])))
        }
        return b
    }

    function Ds(a, b) {
        if (B("yt.logging.transport.enableScrapingForTest")) {
            var c = B("yt.logging.transport.scrapedPayloadsForTesting"),
                d = B("yt.logging.transport.payloadToScrape");
            b && (b = B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)()) && c.push(b);
            if (d && 1 <= d.length)
                for (b = 0; b < d.length; b++)
                    if (a && a.payload[d[b]]) {
                        var e = void 0;
                        c.push((null == (e = a) ? void 0 : e.payload)[d[b]])
                    }
            A("yt.logging.transport.scrapedPayloadsForTesting", c)
        }
    }

    function Xs() {
        return R("use_request_time_ms_header") || R("lr_use_request_time_ms_header")
    }

    function Hs(a, b) {
        return R("transport_use_scheduler") ? vn(a, b) : rm(a, b)
    }

    function Os(a) {
        R("transport_use_scheduler") ? qi.Fa(a) : window.clearTimeout(a)
    }

    function Ss(a) {
        var b, c, d, e, f, g, h, l, m, p;
        return w(function(r) {
            return 1 == r.h ? (d = null == (b = a) ? void 0 : null == (c = b.responseContext) ? void 0 : c.globalConfigGroup, e = ns(d, uk), g = null == (f = d) ? void 0 : f.hotHashData, h = ns(d, tk), m = null == (l = d) ? void 0 : l.coldHashData, (p = is().resolve(new cs(sp))) ? g ? e ? r.yield(tp(p, g, e), 2) : r.yield(tp(p, g), 2) : r.A(2) : r.return()) : m ? h ? r.yield(up(p, m, h), 0) : r.yield(up(p, m), 0) : r.A(0)
        })
    };
    var Zs = x.ytLoggingGelSequenceIdObj_ || {};
    A("ytLoggingGelSequenceIdObj_", Zs);

    function $s(a) {
        Is(void 0, void 0, void 0 === a ? !1 : a)
    }

    function at(a) {
        Zs[a] = a in Zs ? Zs[a] + 1 : 0;
        return Zs[a]
    };
    var bt = [];

    function Jn(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = zr;
        O("ytLoggingEventsDefaultDisabled", !1) && zr === zr && (d = null);
        if (R("web_all_payloads_via_jspb")) c.timestamp || (c.timestamp = S()), bt.push({
            payloadName: a,
            payload: b,
            options: c
        });
        else {
            c = void 0 === c ? {} : c;
            var e = {},
                f = Math.round(c.timestamp || S());
            e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
            e[a] = b;
            R("enable_unknown_lact_fix_on_html5") && Nr();
            a = Qr();
            e.context = {
                lastActivityMs: String(c.timestamp || !isFinite(a) ? -1 : a)
            };
            R("log_sequence_info_on_gel_web") && c.sequenceGroup && (a = e.context,
                b = c.sequenceGroup, b = {
                    index: at(b),
                    groupKey: b
                }, a.sequence = b, c.endOfSequence && delete Zs[c.sequenceGroup]);
            (c.sendIsolatedPayload ? Ks : Cs)({
                endpoint: "log_event",
                payload: e,
                cttAuthInfo: c.cttAuthInfo,
                dangerousLogToVisitorSession: c.dangerousLogToVisitorSession
            }, d)
        }
    };
    var ct = x.ytLoggingGelSequenceIdObj_ || {};
    A("ytLoggingGelSequenceIdObj_", ct);

    function dt(a, b) {
        b = void 0 === b ? {} : b;
        var c = !1;
        O("ytLoggingEventsDefaultDisabled", !1) && (c = !0);
        c = c ? null : zr;
        b = void 0 === b ? {} : b;
        var d = Math.round(b.timestamp || S());
        F(a, 1, d < Number.MAX_SAFE_INTEGER ? d : 0);
        var e = Qr();
        d = new yl;
        F(d, 1, b.timestamp || !isFinite(e) ? -1 : e);
        if (R("log_sequence_info_on_gel_web") && b.sequenceGroup) {
            e = b.sequenceGroup;
            var f = at(e),
                g = new xl;
            F(g, 2, f);
            F(g, 1, e);
            H(d, xl, 3, g);
            b.endOfSequence && delete ct[b.sequenceGroup]
        }
        H(a, yl, 33, d);
        (b.sendIsolatedPayload ? Ms : Gs)({
            endpoint: "log_event",
            payload: a,
            cttAuthInfo: b.cttAuthInfo,
            dangerousLogToVisitorSession: b.dangerousLogToVisitorSession
        }, c)
    };
    var et = new Set,
        ft = 0,
        gt = 0,
        ht = 0,
        jt = [],
        kt = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

    function In(a) {
        lt(a)
    }

    function mt(a) {
        lt(a, "WARNING")
    }

    function lt(a, b, c, d, e, f, g) {
        f = void 0 === f ? {} : f;
        f.name = c || O("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
        f.version = d || O("INNERTUBE_CONTEXT_CLIENT_VERSION");
        var h = f,
            l = void 0 === b ? "ERROR" : b,
            m = void 0 === g ? !1 : g;
        l = void 0 === l ? "ERROR" : l;
        m = void 0 === m ? !1 : m;
        if (a) {
            a.hasOwnProperty("level") && a.level && (l = a.level);
            if (R("console_log_js_exceptions")) {
                var p = [];
                p.push("Name: " + a.name);
                p.push("Message: " + a.message);
                a.hasOwnProperty("params") && p.push("Error Params: " + JSON.stringify(a.params));
                a.hasOwnProperty("args") && p.push("Error args: " +
                    JSON.stringify(a.args));
                p.push("File name: " + a.fileName);
                p.push("Stacktrace: " + a.stack);
                var r = p.join("\n");
                window.console.log(r, a)
            }
            if (!(5 <= ft)) {
                var y = jt,
                    u = Ce(a),
                    z = u.message || "Unknown Error",
                    D = u.name || "UnknownError",
                    G = u.stack || a.i || "Not available";
                if (G.startsWith(D + ": " + z)) {
                    var M = G.split("\n");
                    M.shift();
                    G = M.join("\n")
                }
                var P = u.lineNumber || "Not available",
                    T = u.fileName || "Not available",
                    da = G,
                    Z = 0;
                if (a.hasOwnProperty("args") && a.args && a.args.length)
                    for (var na = 0; na < a.args.length && !(Z = Qm(a.args[na], "params." +
                            na, h, Z), 500 <= Z); na++);
                else if (a.hasOwnProperty("params") && a.params) {
                    var Ka = a.params;
                    if ("object" === typeof a.params)
                        for (var xa in Ka) {
                            if (Ka[xa]) {
                                var ya = "params." + xa,
                                    ua = Sm(Ka[xa]);
                                h[ya] = ua;
                                Z += ya.length + ua.length;
                                if (500 < Z) break
                            }
                        } else h.params = Sm(Ka)
                }
                if (y.length)
                    for (var ma = 0; ma < y.length && !(Z = Qm(y[ma], "params.context." + ma, h, Z), 500 <= Z); ma++);
                navigator.vendor && !h.hasOwnProperty("vendor") && (h["device.vendor"] = navigator.vendor);
                var L = {
                        message: z,
                        name: D,
                        lineNumber: P,
                        fileName: T,
                        stack: da,
                        params: h,
                        sampleWeight: 1
                    },
                    kf = Number(a.columnNumber);
                isNaN(kf) || (L.lineNumber = L.lineNumber + ":" + kf);
                if ("IGNORED" === a.level) var Wc = 0;
                else a: {
                    for (var lf = Mm(), ja = t(lf.Va), mf = ja.next(); !mf.done; mf = ja.next()) {
                        var xh = mf.value;
                        if (L.message && L.message.match(xh.If)) {
                            Wc = xh.weight;
                            break a
                        }
                    }
                    for (var Oq = t(lf.Sa), Wk = Oq.next(); !Wk.done; Wk = Oq.next()) {
                        var Pq = Wk.value;
                        if (Pq.callback(L)) {
                            Wc = Pq.weight;
                            break a
                        }
                    }
                    Wc = 1
                }
                L.sampleWeight = Wc;
                for (var Qq = t(Hm), Xk = Qq.next(); !Xk.done; Xk = Qq.next()) {
                    var Yk = Xk.value;
                    if (Yk.ic[L.name])
                        for (var Rq = t(Yk.ic[L.name]),
                                Zk = Rq.next(); !Zk.done; Zk = Rq.next()) {
                            var Sq = Zk.value,
                                yh = L.message.match(Sq.regexp);
                            if (yh) {
                                L.params["params.error.original"] = yh[0];
                                for (var $k = Sq.groups, Tq = {}, Qd = 0; Qd < $k.length; Qd++) Tq[$k[Qd]] = yh[Qd + 1], L.params["params.error." + $k[Qd]] = yh[Qd + 1];
                                L.message = Yk.Hc(Tq);
                                break
                            }
                        }
                }
                L.params || (L.params = {});
                var Uq = Mm();
                L.params["params.errorServiceSignature"] = "msg=" + Uq.Va.length + "&cb=" + Uq.Sa.length;
                L.params["params.serviceWorker"] = "false";
                x.document && x.document.querySelectorAll && (L.params["params.fscripts"] = String(document.querySelectorAll("script:not([nonce])").length));
                Ab("sample").constructor !== yb && (L.params["params.fconst"] = "true");
                window.yterr && "function" === typeof window.yterr && window.yterr(L);
                if (0 !== L.sampleWeight && !et.has(L.message)) {
                    if (m && R("web_enable_error_204")) nt(void 0 === l ? "ERROR" : l, L);
                    else {
                        var Xc = l;
                        Xc = void 0 === Xc ? "ERROR" : Xc;
                        if ("ERROR" === Xc) {
                            Nm.bb("handleError", L);
                            if (R("record_app_crashed_web") && 0 === ht && 1 === L.sampleWeight)
                                if (ht++, R("errors_via_jspb")) {
                                    var ax = new ml;
                                    var Wq = F(ax, 1, 1);
                                    if (!R("report_client_error_with_app_crash_ks")) {
                                        var bx = new ll,
                                            cx = new Vk,
                                            dx = new Uk,
                                            ex = new Tk;
                                        var fx = F(ex, 1, L.message);
                                        var gx = H(dx, Tk, 3, fx);
                                        var hx = H(cx, Uk, 5, gx);
                                        var ix = H(bx, Vk, 9, hx);
                                        H(Wq, ll, 4, ix)
                                    }
                                    var Xq = new zl;
                                    be(Xq, ml, 20, Al, Wq);
                                    dt(Xq)
                                } else {
                                    var Yq = {
                                        appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                                    };
                                    R("report_client_error_with_app_crash_ks") || (Yq.systemHealth = {
                                        crashData: {
                                            clientError: {
                                                logMessage: {
                                                    message: L.message
                                                }
                                            }
                                        }
                                    });
                                    Jn("appCrashed", Yq)
                                }
                            gt++
                        } else "WARNING" === Xc && Nm.bb("handleWarning", L);
                        if (R("kevlar_gel_error_routing")) a: {
                            var nf = Xc;
                            if (R("errors_via_jspb")) {
                                if (ot()) var $q = void 0;
                                else {
                                    var Rd =
                                        new Qk;
                                    F(Rd, 1, L.stack);
                                    L.fileName && F(Rd, 4, L.fileName);
                                    var Rb = L.lineNumber && L.lineNumber.split ? L.lineNumber.split(":") : [];
                                    0 !== Rb.length && (1 !== Rb.length || isNaN(Number(Rb[0])) ? 2 !== Rb.length || isNaN(Number(Rb[0])) || isNaN(Number(Rb[1])) || (ee(Rd, 2, Number(Rb[0])), ee(Rd, 3, Number(Rb[1]))) : ee(Rd, 2, Number(Rb[0])));
                                    var Yc = new Tk;
                                    F(Yc, 1, L.message);
                                    F(Yc, 3, L.name);
                                    ee(Yc, 6, L.sampleWeight);
                                    "ERROR" === nf ? F(Yc, 2, 2) : "WARNING" === nf ? F(Yc, 2, 1) : F(Yc, 2, 0);
                                    var al = new Rk;
                                    F(al, 1, !0);
                                    be(al, Qk, 3, Sk, Rd);
                                    var rc = new Pk;
                                    F(rc, 3, window.location.href);
                                    for (var ar = O("FEXP_EXPERIMENTS", []), bl = 0; bl < ar.length; bl++) {
                                        var jx = ar[bl];
                                        Id(rc);
                                        Wd(rc, 5, 2, !1, !1).push(jx)
                                    }
                                    var cl = O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
                                    if (!Tl() && cl)
                                        for (var br = t(Object.keys(cl)), Zc = br.next(); !Zc.done; Zc = br.next()) {
                                            var cr = Zc.value,
                                                dl = new Ok;
                                            F(dl, 1, cr);
                                            F(dl, 2, String(cl[cr]));
                                            de(rc, 4, Ok, dl)
                                        }
                                    var el = L.params;
                                    if (el) {
                                        var dr = t(Object.keys(el));
                                        for (Zc = dr.next(); !Zc.done; Zc = dr.next()) {
                                            var er = Zc.value,
                                                fl = new Ok;
                                            F(fl, 1, "client." + er);
                                            F(fl, 2, String(el[er]));
                                            de(rc, 4, Ok, fl)
                                        }
                                    }
                                    var fr = O("SERVER_NAME"),
                                        gr = O("SERVER_VERSION");
                                    if (fr && gr) {
                                        var gl = new Ok;
                                        F(gl, 1, "server.name");
                                        F(gl, 2, fr);
                                        de(rc, 4, Ok, gl);
                                        var hl = new Ok;
                                        F(hl, 1, "server.version");
                                        F(hl, 2, gr);
                                        de(rc, 4, Ok, hl)
                                    }
                                    var zh = new Uk;
                                    H(zh, Pk, 1, rc);
                                    H(zh, Rk, 2, al);
                                    H(zh, Tk, 3, Yc);
                                    $q = zh
                                }
                                var hr = $q;
                                if (!hr) break a;
                                var ir = new zl;
                                be(ir, Uk, 163, Al, hr);
                                dt(ir)
                            } else {
                                if (ot()) var jr = void 0;
                                else {
                                    var of = {
                                        stackTrace: L.stack
                                    };
                                    L.fileName && ( of .filename = L.fileName);
                                    var Sb = L.lineNumber && L.lineNumber.split ? L.lineNumber.split(":") : [];
                                    0 !== Sb.length && (1 !== Sb.length || isNaN(Number(Sb[0])) ?
                                        2 !== Sb.length || isNaN(Number(Sb[0])) || isNaN(Number(Sb[1])) || ( of .lineNumber = Number(Sb[0]), of .columnNumber = Number(Sb[1])) : of .lineNumber = Number(Sb[0]));
                                    var il = {
                                        level: "ERROR_LEVEL_UNKNOWN",
                                        message: L.message,
                                        errorClassName: L.name,
                                        sampleWeight: L.sampleWeight
                                    };
                                    "ERROR" === nf ? il.level = "ERROR_LEVEL_ERROR" : "WARNING" === nf && (il.level = "ERROR_LEVEL_WARNNING");
                                    var kx = {
                                            isObfuscated: !0,
                                            browserStackInfo: of
                                        },
                                        Sd = {
                                            pageUrl: window.location.href,
                                            kvPairs: []
                                        };
                                    O("FEXP_EXPERIMENTS") && (Sd.experimentIds = O("FEXP_EXPERIMENTS"));
                                    var jl =
                                        O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
                                    if (!Tl() && jl)
                                        for (var kr = t(Object.keys(jl)), $c = kr.next(); !$c.done; $c = kr.next()) {
                                            var lr = $c.value;
                                            Sd.kvPairs.push({
                                                key: lr,
                                                value: String(jl[lr])
                                            })
                                        }
                                    var kl = L.params;
                                    if (kl) {
                                        var mr = t(Object.keys(kl));
                                        for ($c = mr.next(); !$c.done; $c = mr.next()) {
                                            var nr = $c.value;
                                            Sd.kvPairs.push({
                                                key: "client." + nr,
                                                value: String(kl[nr])
                                            })
                                        }
                                    }
                                    var or = O("SERVER_NAME"),
                                        pr = O("SERVER_VERSION");
                                    or && pr && (Sd.kvPairs.push({
                                        key: "server.name",
                                        value: or
                                    }), Sd.kvPairs.push({
                                        key: "server.version",
                                        value: pr
                                    }));
                                    jr = {
                                        errorMetadata: Sd,
                                        stackTrace: kx,
                                        logMessage: il
                                    }
                                }
                                var qr = jr;
                                if (!qr) break a;
                                Jn("clientError", qr)
                            }
                            if ("ERROR" === nf || R("errors_flush_gel_always_killswitch")) b: {
                                if (R("web_fp_via_jspb") && ($s(!0), !R("web_fp_via_jspb_and_json"))) break b;$s()
                            }
                        }
                        R("suppress_error_204_logging") || nt(Xc, L)
                    }
                    try {
                        et.add(L.message)
                    } catch (Sy) {}
                    ft++
                }
            }
        }
    }

    function ot() {
        for (var a = t(kt), b = a.next(); !b.done; b = a.next())
            if (Pn(b.value.toLowerCase())) return !0;
        return !1
    }

    function nt(a, b) {
        var c = b.params || {};
        a = {
            urlParams: {
                a: "logerror",
                t: "jserror",
                type: b.name,
                msg: b.message.substr(0, 250),
                line: b.lineNumber,
                level: a,
                "client.name": c.name
            },
            postParams: {
                url: O("PAGE_NAME", window.location.href),
                file: b.fileName
            },
            method: "POST"
        };
        c.version && (a["client.version"] = c.version);
        if (a.postParams) {
            b.stack && (a.postParams.stack = b.stack);
            b = t(Object.keys(c));
            for (var d = b.next(); !d.done; d = b.next()) d = d.value, a.postParams["client." + d] = c[d];
            if (c = O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))
                for (b = t(Object.keys(c)),
                    d = b.next(); !d.done; d = b.next()) d = d.value, a.postParams[d] = c[d];
            c = O("SERVER_NAME");
            b = O("SERVER_VERSION");
            c && b && (a.postParams["server.name"] = c, a.postParams["server.version"] = b)
        }
        ym(O("ECATCHER_REPORT_HOST", "") + "/error_204", a)
    };

    function pt() {
        this.register = new Map
    }

    function qt(a) {
        a = t(a.register.values());
        for (var b = a.next(); !b.done; b = a.next()) b.value.Lf("ABORTED")
    }
    pt.prototype.clear = function() {
        qt(this);
        this.register.clear()
    };
    var rt = new pt;
    var st = Date.now().toString();

    function tt() {
        a: {
            if (window.crypto && window.crypto.getRandomValues) try {
                var a = Array(16),
                    b = new Uint8Array(16);
                window.crypto.getRandomValues(b);
                for (var c = 0; c < a.length; c++) a[c] = b[c];
                var d = a;
                break a
            } catch (e) {}
            d = Array(16);
            for (a = 0; 16 > a; a++) {
                b = Date.now();
                for (c = 0; c < b % 23; c++) d[a] = Math.random();
                d[a] = Math.floor(256 * Math.random())
            }
            if (st)
                for (a = 1, b = 0; b < st.length; b++) d[a % 16] = d[a % 16] ^ d[(a - 1) % 16] / 4 ^ st.charCodeAt(b), a++
        }
        a = [];
        for (b = 0; b < d.length; b++) a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b] & 63));
        return a.join("")
    };
    var ut = x.ytLoggingDocDocumentNonce_;
    ut || (ut = tt(), A("ytLoggingDocDocumentNonce_", ut));
    var vt = ut;

    function wt(a) {
        a = void 0 === a ? 0 : a;
        return 0 === a ? "client-screen-nonce" : "client-screen-nonce." + a
    }

    function xt(a) {
        a = void 0 === a ? 0 : a;
        return 0 === a ? "ROOT_VE_TYPE" : "ROOT_VE_TYPE." + a
    }
    A("yt_logging_screen.getRootVeType", function(a) {
        return O(xt(void 0 === a ? 0 : a))
    });

    function zt() {
        var a = O("csn-to-ctt-auth-info");
        a || (a = {}, Sl("csn-to-ctt-auth-info", a));
        return a
    }

    function At(a) {
        a = O(wt(void 0 === a ? 0 : a));
        if (!a && !O("USE_CSN_FALLBACK", !0)) return null;
        a || (a = "UNDEFINED_CSN");
        return a ? a : null
    }
    A("yt_logging_screen.getCurrentCsn", At);

    function Bt(a, b, c) {
        var d = zt();
        (c = At(c)) && delete d[c];
        b && (d[a] = b)
    }
    A("yt_logging_screen.getCttAuthInfo", function(a) {
        return zt()[a]
    });
    A("yt_logging_screen.setCurrentScreen", function(a, b, c, d) {
        c = void 0 === c ? 0 : c;
        if (a !== O(wt(c)) || b !== O(xt(c)))
            if (Bt(a, d, c), Sl(wt(c), a), Sl(xt(c), b), b = function() {
                    setTimeout(function() {
                        if (a)
                            if (R("web_time_via_jspb")) {
                                var e = new ol;
                                F(e, 1, vt);
                                F(e, 2, a);
                                var f = new zl;
                                be(f, ol, 111, Al, e);
                                dt(f)
                            } else Jn("foregroundHeartbeatScreenAssociated", {
                                clientDocumentNonce: vt,
                                clientScreenNonce: a
                            })
                    }, 0)
                }, "requestAnimationFrame" in window) try {
                window.requestAnimationFrame(b)
            } catch (e) {
                b()
            } else b()
    });
    var Ct = window.yt && window.yt.msgs_ || window.ytcfg && window.ytcfg.msgs || {};
    A("yt.msgs_", Ct);

    function Dt(a) {
        Nl(Ct, arguments)
    };

    function Et() {
        var a = sb(Ft),
            b;
        return (new Ff(function(c, d) {
            a.onSuccess = function(e) {
                qm(e) ? c(new Gt(e)) : d(new Ht("Request failed, status=" + (e && "status" in e ? e.status : -1), "net.badstatus", e))
            };
            a.onError = function(e) {
                d(new Ht("Unknown request error", "net.unknown", e))
            };
            a.onTimeout = function(e) {
                d(new Ht("Request timed out", "net.timeout", e))
            };
            b = ym("//googleads.g.doubleclick.net/pagead/id", a)
        })).oc(function(c) {
            c instanceof Qf && b.abort();
            return Lf(c)
        })
    }

    function Ht(a, b, c) {
        bb.call(this, a + ", errorCode=" + b);
        this.errorCode = b;
        this.xhr = c;
        this.name = "PromiseAjaxError"
    }
    v(Ht, bb);

    function Gt(a) {
        this.xhr = a
    };

    function It() {
        this.h = 0;
        this.i = null
    }
    It.prototype.then = function(a, b, c) {
        return 1 === this.h && a ? (a = a.call(c, this.i)) && "function" === typeof a.then ? a : Jt(a) : 2 === this.h && b ? (a = b.call(c, this.i)) && "function" === typeof a.then ? a : Kt(a) : this
    };
    It.prototype.getValue = function() {
        return this.i
    };
    It.prototype.isRejected = function() {
        return 2 == this.h
    };
    It.prototype.$goog_Thenable = !0;

    function Kt(a) {
        var b = new It;
        a = void 0 === a ? null : a;
        b.h = 2;
        b.i = void 0 === a ? null : a;
        return b
    }

    function Jt(a) {
        var b = new It;
        a = void 0 === a ? null : a;
        b.h = 1;
        b.i = void 0 === a ? null : a;
        return b
    };

    function Lt(a, b) {
        var c = void 0 === c ? {} : c;
        a = {
            method: void 0 === b ? "POST" : b,
            mode: hm(a) ? "same-origin" : "cors",
            credentials: hm(a) ? "same-origin" : "include"
        };
        b = {};
        for (var d = t(Object.keys(c)), e = d.next(); !e.done; e = d.next()) e = e.value, c[e] && (b[e] = c[e]);
        0 < Object.keys(b).length && (a.headers = b);
        return a
    };

    function Mt() {
        return Fg() || (od || pd) && Pn("applewebkit") && !Pn("version") && (!Pn("safari") || Pn("gsa/")) || ed && Pn("version/") ? !0 : O("EOM_VISITOR_DATA") ? !1 : !0
    };

    function Nt(a) {
        a: {
            var b = "EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com") && (b = "EMBEDDED_PLAYER_MODE_PFL");
            var c = a.raw_embedded_player_response;
            if (!c && (a = a.embedded_player_response)) try {
                c = JSON.parse(a)
            } catch (e) {
                break a
            }
            if (c) b: for (var d in Lk)
                if (Lk[d] == c.embeddedPlayerMode) {
                    b = Lk[d];
                    break b
                }
        }
        return "EMBEDDED_PLAYER_MODE_PFL" === b
    };

    function Ot(a) {
        bb.call(this, a.message || a.description || a.name);
        this.isMissing = a instanceof Pt;
        this.isTimeout = a instanceof Ht && "net.timeout" == a.errorCode;
        this.isCanceled = a instanceof Qf
    }
    v(Ot, bb);
    Ot.prototype.name = "BiscottiError";

    function Pt() {
        bb.call(this, "Biscotti ID is missing from server")
    }
    v(Pt, bb);
    Pt.prototype.name = "BiscottiMissingError";
    var Ft = {
            format: "RAW",
            method: "GET",
            timeout: 5E3,
            withCredentials: !0
        },
        Qt = null;

    function Rt() {
        if (R("disable_biscotti_fetch_entirely_for_all_web_clients")) return Error("Biscotti id fetching has been disabled entirely.");
        if (!Mt()) return Error("User has not consented - not fetching biscotti id.");
        var a = O("PLAYER_VARS", {});
        if ("1" == qb(a)) return Error("Biscotti ID is not available in private embed mode");
        if (Nt(a)) return Error("Biscotti id fetching has been disabled for pfl.")
    }

    function Ll() {
        var a = Rt();
        if (void 0 !== a) return Lf(a);
        Qt || (Qt = Et().then(St).oc(function(b) {
            return Tt(2, b)
        }));
        return Qt
    }

    function St(a) {
        a = a.xhr.responseText;
        if (0 != a.lastIndexOf(")]}'", 0)) throw new Pt;
        a = JSON.parse(a.substr(4));
        if (1 < (a.type || 1)) throw new Pt;
        a = a.id;
        Ml(a);
        Qt = Jt(a);
        Ut(18E5, 2);
        return a
    }

    function Tt(a, b) {
        b = new Ot(b);
        Ml("");
        Qt = Kt(b);
        0 < a && Ut(12E4, a - 1);
        throw b;
    }

    function Ut(a, b) {
        rm(function() {
            Et().then(St, function(c) {
                return Tt(b, c)
            }).oc(db)
        }, a)
    }

    function Vt() {
        try {
            var a = B("yt.ads.biscotti.getId_");
            return a ? a() : Ll()
        } catch (b) {
            return Lf(b)
        }
    };

    function Wt(a) {
        if ("1" != qb(O("PLAYER_VARS", {}))) {
            a && Kl();
            try {
                Vt().then(function() {}, function() {}), rm(Wt, 18E5)
            } catch (b) {
                Xl(b)
            }
        }
    };

    function Xt() {
        var a = en(),
            b = hn(119),
            c = 1 < window.devicePixelRatio;
        if (document.body && Ai(document.body, "exp-invert-logo"))
            if (c && !Ai(document.body, "inverted-hdpi")) {
                var d = document.body;
                if (d.classList) d.classList.add("inverted-hdpi");
                else if (!Ai(d, "inverted-hdpi")) {
                    var e = yi(d);
                    zi(d, e + (0 < e.length ? " inverted-hdpi" : "inverted-hdpi"))
                }
            } else !c && Ai(document.body, "inverted-hdpi") && Bi();
        if (b != c) {
            b = "f" + (Math.floor(119 / 31) + 1);
            d = jn(b) || 0;
            d = c ? d | 67108864 : d & -67108865;
            0 === d ? delete bn[b] : (c = d.toString(16), bn[b] = c.toString());
            c = !0;
            R("web_secure_pref_cookie_killswitch") && (c = !1);
            b = a.h;
            d = [];
            for (f in bn) bn.hasOwnProperty(f) && d.push(f + "=" + encodeURIComponent(String(bn[f])));
            var f = d.join("&");
            Zm(b, f, 63072E3, a.i, c)
        }
    };
    var Yt = new Map([
        ["dark", "USER_INTERFACE_THEME_DARK"],
        ["light", "USER_INTERFACE_THEME_LIGHT"]
    ]);

    function Zt() {
        var a = void 0 === a ? window.location.href : a;
        if (R("kevlar_disable_theme_param")) return null;
        vc(wc(5, a));
        try {
            var b = fm(a).theme;
            return Yt.get(b) || null
        } catch (c) {}
        return null
    };

    function $t() {
        this.h = {};
        if (this.i = an()) {
            var a = Dg.get("CONSISTENCY", void 0);
            a && au(this, {
                encryptedTokenJarContents: a
            })
        }
    }
    $t.prototype.handleResponse = function(a, b) {
        if (!b) throw Error("request needs to be passed into ConsistencyService");
        var c, d;
        b = (null == (c = b.Oa.context) ? void 0 : null == (d = c.request) ? void 0 : d.consistencyTokenJars) || [];
        var e;
        if (a = null == (e = a.responseContext) ? void 0 : e.consistencyTokenJar) {
            e = t(b);
            for (c = e.next(); !c.done; c = e.next()) delete this.h[c.value.encryptedTokenJarContents];
            au(this, a)
        }
    };

    function au(a, b) {
        if (b.encryptedTokenJarContents && (a.h[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds)) {
            var c = Number(b.expirationSeconds);
            setTimeout(function() {
                delete a.h[b.encryptedTokenJarContents]
            }, 1E3 * c);
            a.i && Zm("CONSISTENCY", b.encryptedTokenJarContents, c, void 0, !0)
        }
    };
    var bu = window.location.hostname.split(".").slice(-2).join(".");

    function cu() {
        var a = O("LOCATION_PLAYABILITY_TOKEN");
        "TVHTML5" === O("INNERTUBE_CLIENT_NAME") && (this.h = du(this)) && (a = this.h.get("yt-location-playability-token"));
        a && (this.locationPlayabilityToken = a, this.i = void 0)
    }
    var eu;

    function fu() {
        eu = B("yt.clientLocationService.instance");
        eu || (eu = new cu, A("yt.clientLocationService.instance", eu));
        return eu
    }
    k = cu.prototype;
    k.setLocationOnInnerTubeContext = function(a) {
        a.client || (a.client = {});
        this.i ? (a.client.locationInfo || (a.client.locationInfo = {}), a.client.locationInfo.latitudeE7 = Math.floor(1E7 * this.i.coords.latitude), a.client.locationInfo.longitudeE7 = Math.floor(1E7 * this.i.coords.longitude), a.client.locationInfo.horizontalAccuracyMeters = Math.round(this.i.coords.accuracy), a.client.locationInfo.forceLocationPlayabilityTokenRefresh = !0) : this.locationPlayabilityToken && (a.client.locationPlayabilityToken = this.locationPlayabilityToken)
    };
    k.handleResponse = function(a) {
        var b;
        a = null == (b = a.responseContext) ? void 0 : b.locationPlayabilityToken;
        void 0 !== a && (this.locationPlayabilityToken = a, this.i = void 0, "TVHTML5" === O("INNERTUBE_CLIENT_NAME") ? (this.h = du(this)) && this.h.set("yt-location-playability-token", a, 15552E3) : Zm("YT_CL", JSON.stringify({
            loctok: a
        }), 15552E3, bu, !0))
    };

    function du(a) {
        return void 0 === a.h ? new An("yt-client-location") : a.h
    }
    k.clearLocationPlayabilityToken = function(a) {
        "TVHTML5" === a ? (this.h = du(this)) && this.h.remove("yt-location-playability-token") : $m("YT_CL")
    };
    k.getCurrentPositionFromGeolocation = function() {
        var a = this;
        if (!(navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition)) return Promise.reject(Error("Geolocation unsupported"));
        var b = !1,
            c = 1E4;
        "MWEB" === O("INNERTUBE_CLIENT_NAME") && (b = !0, c = 15E3);
        return new Promise(function(d, e) {
            navigator.geolocation.getCurrentPosition(function(f) {
                a.i = f;
                d(f)
            }, function(f) {
                e(f)
            }, {
                enableHighAccuracy: b,
                maximumAge: 0,
                timeout: c
            })
        })
    };
    k.createUnpluggedLocationInfo = function(a) {
        var b = {};
        a = a.coords;
        if (null == a ? 0 : a.latitude) b.latitudeE7 = Math.floor(1E7 * a.latitude);
        if (null == a ? 0 : a.longitude) b.longitudeE7 = Math.floor(1E7 * a.longitude);
        if (null == a ? 0 : a.accuracy) b.locationRadiusMeters = Math.round(a.accuracy);
        return b
    };

    function gu(a, b) {
        if (!a) return !1;
        var c, d = null == (c = ns(a, Kk)) ? void 0 : c.signal;
        if (d && b.jb) return !!b.jb[d];
        var e;
        if ((c = null == (e = ns(a, Hk)) ? void 0 : e.request) && b.uc) return !!b.uc[c];
        for (var f in a)
            if (b.sc[f]) return !0;
        return !1
    }

    function hu(a, b) {
        var c, d = null == (c = ns(a, Kk)) ? void 0 : c.signal;
        if (d && b.jb && (c = b.jb[d])) return c();
        var e;
        if ((c = null == (e = ns(a, Hk)) ? void 0 : e.request) && b.uc && (e = b.uc[c])) return e();
        for (var f in a)
            if (b.sc[f] && (a = b.sc[f])) return a()
    };

    function iu(a) {
        return function() {
            return new a
        }
    };
    var ju = {},
        ku = (ju.WEB_UNPLUGGED = "^unplugged/", ju.WEB_UNPLUGGED_ONBOARDING = "^unplugged/", ju.WEB_UNPLUGGED_OPS = "^unplugged/", ju.WEB_UNPLUGGED_PUBLIC = "^unplugged/", ju.WEB_CREATOR = "^creator/", ju.WEB_KIDS = "^kids/", ju.WEB_EXPERIMENTS = "^experiments/", ju.WEB_MUSIC = "^music/", ju.WEB_REMIX = "^music/", ju.WEB_MUSIC_EMBEDDED_PLAYER = "^music/", ju.WEB_MUSIC_EMBEDDED_PLAYER = "^main_app/|^sfv/", ju);

    function lu(a) {
        var b = void 0 === b ? "UNKNOWN_INTERFACE" : b;
        if (1 === a.length) return a[0];
        var c = ku[b];
        if (c) {
            var d = new RegExp(c),
                e = t(a);
            for (c = e.next(); !c.done; c = e.next())
                if (c = c.value, d.exec(c)) return c
        }
        var f = [];
        Object.entries(ku).forEach(function(g) {
            var h = t(g);
            g = h.next().value;
            h = h.next().value;
            b !== g && f.push(h)
        });
        d = new RegExp(f.join("|"));
        a.sort(function(g, h) {
            return g.length - h.length
        });
        e = t(a);
        for (c = e.next(); !c.done; c = e.next())
            if (c = c.value, !d.exec(c)) return c;
        return a[0]
    };

    function mu() {}
    mu.prototype.m = function(a, b, c) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? Wm : c;
        var d = a.clickTrackingParams,
            e = this.l,
            f = !1;
        f = void 0 === f ? !1 : f;
        e = void 0 === e ? !1 : e;
        var g = O("INNERTUBE_CONTEXT");
        if (g) {
            g = tb(g);
            R("web_no_tracking_params_in_shell_killswitch") || delete g.clickTracking;
            g.client || (g.client = {});
            var h = g.client;
            "MWEB" === h.clientName && (h.clientFormFactor = O("IS_TABLET") ? "LARGE_FORM_FACTOR" : "SMALL_FORM_FACTOR");
            h.screenWidthPoints = window.innerWidth;
            h.screenHeightPoints = window.innerHeight;
            h.screenPixelDensity = Math.round(window.devicePixelRatio ||
                1);
            h.screenDensityFloat = window.devicePixelRatio || 1;
            h.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
            var l = void 0 === l ? !1 : l;
            en();
            var m = "USER_INTERFACE_THEME_LIGHT";
            hn(165) ? m = "USER_INTERFACE_THEME_DARK" : hn(174) ? m = "USER_INTERFACE_THEME_LIGHT" : !R("kevlar_legacy_browsers") && window.matchMedia && window.matchMedia("(prefers-color-scheme)").matches && window.matchMedia("(prefers-color-scheme: dark)").matches && (m = "USER_INTERFACE_THEME_DARK");
            l = l ? m : Zt() || m;
            h.userInterfaceTheme = l;
            if (!f) {
                if (l = pn()) h.connectionType =
                    l;
                R("web_log_effective_connection_type") && (l = qn()) && (g.client.effectiveConnectionType = l)
            }
            var p;
            if (R("web_log_memory_total_kbytes") && (null == (p = x.navigator) ? 0 : p.deviceMemory)) {
                var r;
                p = null == (r = x.navigator) ? void 0 : r.deviceMemory;
                g.client.memoryTotalKbytes = "" + 1E6 * p
            }
            r = fm(x.location.href);
            !R("web_populate_internal_geo_killswitch") && r.internalcountrycode && (h.internalGeo = r.internalcountrycode);
            "MWEB" === h.clientName || "WEB" === h.clientName ? (h.mainAppWebInfo = {
                    graftUrl: x.location.href
                }, R("kevlar_woffle") && Xm.h &&
                (r = Xm.h, h.mainAppWebInfo.pwaInstallabilityStatus = !r.h && r.i ? "PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED" : "PWA_INSTALLABILITY_STATUS_UNKNOWN"), h.mainAppWebInfo.webDisplayMode = Ym(), h.mainAppWebInfo.isWebNativeShareAvailable = navigator && void 0 !== navigator.share) : "TVHTML5" === h.clientName && (!R("web_lr_app_quality_killswitch") && (r = O("LIVING_ROOM_APP_QUALITY")) && (h.tvAppInfo = Object.assign(h.tvAppInfo || {}, {
                appQuality: r
            })), r = O("LIVING_ROOM_CERTIFICATION_SCOPE")) && (h.tvAppInfo = Object.assign(h.tvAppInfo || {}, {
                certificationScope: r
            }));
            if (!R("web_populate_time_zone_itc_killswitch")) {
                b: {
                    if ("undefined" !== typeof Intl) try {
                        var y = (new Intl.DateTimeFormat).resolvedOptions().timeZone;
                        break b
                    } catch (na) {}
                    y = void 0
                }
                y && (h.timeZone = y)
            }(y = mm()) ? h.experimentsToken = y: delete h.experimentsToken;
            y = nm();
            $t.h || ($t.h = new $t);
            h = $t.h.h;
            r = [];
            p = 0;
            for (var u in h) r[p++] = h[u];
            g.request = Object.assign({}, g.request, {
                internalExperimentFlags: y,
                consistencyTokenJars: r
            });
            !R("web_prequest_context_killswitch") && (u = O("INNERTUBE_CONTEXT_PREQUEST_CONTEXT")) && (g.request.externalPrequestContext =
                u);
            y = en();
            u = hn(58);
            y = y.get("gsml", "");
            g.user = Object.assign({}, g.user);
            u && (g.user.enableSafetyMode = u);
            y && (g.user.lockedSafetyMode = !0);
            R("warm_op_csn_cleanup") ? e && (f = At()) && (g.clientScreenNonce = f) : !f && (f = At()) && (g.clientScreenNonce = f);
            d && (g.clickTracking = {
                clickTrackingParams: d
            });
            if (d = B("yt.mdx.remote.remoteClient_")) g.remoteClient = d;
            fu().setLocationOnInnerTubeContext(g);
            try {
                var z = im(),
                    D = z.bid;
                delete z.bid;
                g.adSignalsInfo = {
                    params: [],
                    bid: D
                };
                var G = t(Object.entries(z));
                for (var M = G.next(); !M.done; M = G.next()) {
                    var P =
                        t(M.value),
                        T = P.next().value,
                        da = P.next().value;
                    z = T;
                    D = da;
                    d = void 0;
                    null == (d = g.adSignalsInfo.params) || d.push({
                        key: z,
                        value: "" + D
                    })
                }
            } catch (na) {
                lt(na)
            }
            G = g
        } else lt(Error("Error: No InnerTubeContext shell provided in ytconfig.")), G = {};
        G = {
            context: G
        };
        if (M = this.h(a)) {
            this.i(G, M, b);
            var Z;
            b = "/youtubei/v1/" + lu(this.j());
            (M = null == (Z = ns(a.commandMetadata, Jk)) ? void 0 : Z.apiUrl) && (b = M);
            Z = b;
            (b = O("INNERTUBE_HOST_OVERRIDE")) && (Z = String(b) + String(yc(Z)));
            b = {};
            b.key = O("INNERTUBE_API_KEY");
            R("json_condensed_response") && (b.prettyPrint =
                "false");
            Z = gm(Z, b || {}, !1);
            a = Object.assign({}, {
                command: a
            }, void 0);
            a = {
                input: Z,
                hb: Lt(Z),
                Oa: G,
                config: a
            };
            a.config.Vb ? a.config.Vb.identity = c : a.config.Vb = {
                identity: c
            };
            return a
        }
        lt(new rn("Error: Failed to create Request from Command.", a))
    };
    ea.Object.defineProperties(mu.prototype, {
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !1
            }
        }
    });

    function nu() {}
    v(nu, mu);
    nu.prototype.m = function() {
        return {
            input: "/getDatasyncIdsEndpoint",
            hb: Lt("/getDatasyncIdsEndpoint", "GET"),
            Oa: {}
        }
    };
    nu.prototype.j = function() {
        return []
    };
    nu.prototype.h = function() {};
    nu.prototype.i = function() {};
    var ou = {},
        pu = (ou.GET_DATASYNC_IDS = iu(nu), ou);

    function qu(a) {
        var b = Ma.apply(1, arguments);
        if (!ru(a) || b.some(function(d) {
                return !ru(d)
            })) throw Error("Only objects may be merged.");
        b = t(b);
        for (var c = b.next(); !c.done; c = b.next()) su(a, c.value);
        return a
    }

    function su(a, b) {
        for (var c in b)
            if (ru(b[c])) {
                if (c in a && !ru(a[c])) throw Error("Cannot merge an object into a non-object.");
                c in a || (a[c] = {});
                su(a[c], b[c])
            } else if (tu(b[c])) {
            if (c in a && !tu(a[c])) throw Error("Cannot merge an array into a non-array.");
            c in a || (a[c] = []);
            uu(a[c], b[c])
        } else a[c] = b[c];
        return a
    }

    function uu(a, b) {
        b = t(b);
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, ru(c) ? a.push(su({}, c)) : tu(c) ? a.push(uu([], c)) : a.push(c);
        return a
    }

    function ru(a) {
        return "object" === typeof a && !Array.isArray(a)
    }

    function tu(a) {
        return "object" === typeof a && Array.isArray(a)
    };

    function vu(a) {
        var b;
        (b = B("ytcsi." + (a || "") + "data_")) || (b = {
            tick: {},
            info: {}
        }, A("ytcsi." + (a || "") + "data_", b));
        return b
    }

    function wu() {
        var a = vu();
        a.info || (a.info = {});
        return a.info
    }

    function xu(a) {
        a = vu(a);
        a.metadata || (a.metadata = {});
        return a.metadata
    }

    function yu(a) {
        a = vu(a);
        a.tick || (a.tick = {});
        return a.tick
    }

    function zu(a) {
        a = vu(a);
        if (a.gel) {
            var b = a.gel;
            b.gelInfos || (b.gelInfos = {});
            b.gelTicks || (b.gelTicks = {})
        } else a.gel = {
            gelTicks: {},
            gelInfos: {}
        };
        return a.gel
    }

    function Au(a) {
        a = zu(a);
        a.gelInfos || (a.gelInfos = {});
        return a.gelInfos
    }

    function Bu(a) {
        var b = vu(a).nonce;
        b || (b = tt(), vu(a).nonce = b);
        return b
    };

    function Cu() {
        var a = B("ytcsi.debug");
        a || (a = [], A("ytcsi.debug", a), A("ytcsi.reference", {}));
        return a
    }

    function Du(a) {
        a = a || "";
        var b = B("ytcsi.reference");
        b || (Cu(), b = B("ytcsi.reference"));
        if (b[a]) return b[a];
        var c = Cu(),
            d = {
                timerName: a,
                info: {},
                tick: {},
                span: {},
                jspbInfo: []
            };
        c.push(d);
        return b[a] = d
    };
    var U = {},
        Eu = (U.auto_search = "LATENCY_ACTION_AUTO_SEARCH", U.ad_to_ad = "LATENCY_ACTION_AD_TO_AD", U.ad_to_video = "LATENCY_ACTION_AD_TO_VIDEO", U["analytics.explore"] = "LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE", U.app_startup = "LATENCY_ACTION_APP_STARTUP", U["artist.analytics"] = "LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS", U["artist.events"] = "LATENCY_ACTION_CREATOR_ARTIST_CONCERTS", U["artist.presskit"] = "LATENCY_ACTION_CREATOR_ARTIST_PROFILE", U["asset.claimed_videos"] = "LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
            U["asset.composition"] = "LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION", U["asset.embeds"] = "LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS", U["asset.issues"] = "LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES", U["asset.licenses"] = "LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES", U["asset.metadata"] = "LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA", U["asset.ownership"] = "LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP", U["asset.policy"] = "LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY", U["asset.references"] = "LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",
            U["asset.sound_recordings"] = "LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS", U["song.analytics"] = "LATENCY_ACTION_CREATOR_SONG_ANALYTICS", U.browse = "LATENCY_ACTION_BROWSE", U.cast_splash = "LATENCY_ACTION_CAST_SPLASH", U.channels = "LATENCY_ACTION_CHANNELS", U.creator_channel_dashboard = "LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD", U["channel.analytics"] = "LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS", U["channel.comments"] = "LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS", U["channel.content"] = "LATENCY_ACTION_CREATOR_POST_LIST",
            U["channel.content.promotions"] = "LATENCY_ACTION_CREATOR_PROMOTION_LIST", U["channel.copyright"] = "LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT", U["channel.editing"] = "LATENCY_ACTION_CREATOR_CHANNEL_EDITING", U["channel.monetization"] = "LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION", U["channel.music"] = "LATENCY_ACTION_CREATOR_CHANNEL_MUSIC", U["channel.music_storefront"] = "LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT", U["channel.playlists"] = "LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS", U["channel.translations"] =
            "LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS", U["channel.videos"] = "LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS", U["channel.live_streaming"] = "LATENCY_ACTION_CREATOR_LIVE_STREAMING", U.chips = "LATENCY_ACTION_CHIPS", U["dialog.copyright_strikes"] = "LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES", U["dialog.video_copyright"] = "LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT", U["dialog.uploads"] = "LATENCY_ACTION_CREATOR_DIALOG_UPLOADS", U.direct_playback = "LATENCY_ACTION_DIRECT_PLAYBACK", U.embed = "LATENCY_ACTION_EMBED",
            U.entity_key_serialization_perf = "LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF", U.entity_key_deserialization_perf = "LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF", U.explore = "LATENCY_ACTION_EXPLORE", U.home = "LATENCY_ACTION_HOME", U.library = "LATENCY_ACTION_LIBRARY", U.live = "LATENCY_ACTION_LIVE", U.live_pagination = "LATENCY_ACTION_LIVE_PAGINATION", U.onboarding = "LATENCY_ACTION_ONBOARDING", U.owner = "LATENCY_ACTION_CREATOR_CMS_DASHBOARD", U["owner.allowlist"] = "LATENCY_ACTION_CREATOR_CMS_ALLOWLIST", U["owner.analytics"] =
            "LATENCY_ACTION_CREATOR_CMS_ANALYTICS", U["owner.art_tracks"] = "LATENCY_ACTION_CREATOR_CMS_ART_TRACKS", U["owner.assets"] = "LATENCY_ACTION_CREATOR_CMS_ASSETS", U["owner.asset_groups"] = "LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS", U["owner.campaigns"] = "LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS", U["owner.channels"] = "LATENCY_ACTION_CREATOR_CMS_CHANNELS", U["owner.claimed_videos"] = "LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS", U["owner.claims"] = "LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING", U["owner.claims.manual"] = "LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
            U["owner.delivery"] = "LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY", U["owner.issues"] = "LATENCY_ACTION_CREATOR_CMS_ISSUES", U["owner.licenses"] = "LATENCY_ACTION_CREATOR_CMS_LICENSES", U["owner.pitch_music"] = "LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC", U["owner.policies"] = "LATENCY_ACTION_CREATOR_CMS_POLICIES", U["owner.releases"] = "LATENCY_ACTION_CREATOR_CMS_RELEASES", U["owner.reports"] = "LATENCY_ACTION_CREATOR_CMS_REPORTS", U["owner.videos"] = "LATENCY_ACTION_CREATOR_CMS_VIDEOS", U.parent_profile_settings = "LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
            U.parent_tools_collection = "LATENCY_ACTION_PARENT_TOOLS_COLLECTION", U.parent_tools_dashboard = "LATENCY_ACTION_PARENT_TOOLS_DASHBOARD", U.player_att = "LATENCY_ACTION_PLAYER_ATTESTATION", U["post.comments"] = "LATENCY_ACTION_CREATOR_POST_COMMENTS", U["post.edit"] = "LATENCY_ACTION_CREATOR_POST_EDIT", U.prebuffer = "LATENCY_ACTION_PREBUFFER", U.prefetch = "LATENCY_ACTION_PREFETCH", U.profile_settings = "LATENCY_ACTION_KIDS_PROFILE_SETTINGS", U.profile_switcher = "LATENCY_ACTION_LOGIN", U.reel_watch = "LATENCY_ACTION_REEL_WATCH",
            U.results = "LATENCY_ACTION_RESULTS", U["promotion.edit"] = "LATENCY_ACTION_CREATOR_PROMOTION_EDIT", U.search_ui = "LATENCY_ACTION_SEARCH_UI", U.search_suggest = "LATENCY_ACTION_SUGGEST", U.search_zero_state = "LATENCY_ACTION_SEARCH_ZERO_STATE", U.secret_code = "LATENCY_ACTION_KIDS_SECRET_CODE", U.seek = "LATENCY_ACTION_PLAYER_SEEK", U.settings = "LATENCY_ACTION_SETTINGS", U.store = "LATENCY_ACTION_STORE", U.tenx = "LATENCY_ACTION_TENX", U.video_to_ad = "LATENCY_ACTION_VIDEO_TO_AD", U.watch = "LATENCY_ACTION_WATCH", U.watch_it_again =
            "LATENCY_ACTION_KIDS_WATCH_IT_AGAIN", U["watch,watch7"] = "LATENCY_ACTION_WATCH", U["watch,watch7_html5"] = "LATENCY_ACTION_WATCH", U["watch,watch7ad"] = "LATENCY_ACTION_WATCH", U["watch,watch7ad_html5"] = "LATENCY_ACTION_WATCH", U.wn_comments = "LATENCY_ACTION_LOAD_COMMENTS", U.ww_rqs = "LATENCY_ACTION_WHO_IS_WATCHING", U["video.analytics"] = "LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS", U["video.claims"] = "LATENCY_ACTION_CREATOR_VIDEO_CLAIMS", U["video.comments"] = "LATENCY_ACTION_CREATOR_VIDEO_COMMENTS", U["video.copyright"] =
            "LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT", U["video.edit"] = "LATENCY_ACTION_CREATOR_VIDEO_EDIT", U["video.editor"] = "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR", U["video.editor_async"] = "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC", U["video.live_settings"] = "LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS", U["video.live_streaming"] = "LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING", U["video.monetization"] = "LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION", U["video.policy"] = "LATENCY_ACTION_CREATOR_VIDEO_POLICY", U["video.rights_management"] =
            "LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT", U["video.translations"] = "LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS", U.voice_assistant = "LATENCY_ACTION_VOICE_ASSISTANT", U.cast_load_by_entity_to_watch = "LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH", U.networkless_performance = "LATENCY_ACTION_NETWORKLESS_PERFORMANCE", U.gel_compression = "LATENCY_ACTION_GEL_COMPRESSION", U.gel_jspb_serialize = "LATENCY_ACTION_GEL_JSPB_SERIALIZE", U),
        V = {},
        Fu = (V.ad_allowed = "adTypesAllowed", V.yt_abt = "adBreakType", V.ad_cpn = "adClientPlaybackNonce",
            V.ad_docid = "adVideoId", V.yt_ad_an = "adNetworks", V.ad_at = "adType", V.aida = "appInstallDataAgeMs", V.browse_id = "browseId", V.p = "httpProtocol", V.t = "transportProtocol", V.cs = "commandSource", V.cpn = "clientPlaybackNonce", V.ccs = "creatorInfo.creatorCanaryState", V.ctop = "creatorInfo.topEntityType", V.csn = "clientScreenNonce", V.docid = "videoId", V.GetHome_rid = "requestIds", V.GetSearch_rid = "requestIds", V.GetPlayer_rid = "requestIds", V.GetWatchNext_rid = "requestIds", V.GetBrowse_rid = "requestIds", V.GetLibrary_rid = "requestIds",
            V.is_continuation = "isContinuation", V.is_nav = "isNavigation", V.b_p = "kabukiInfo.browseParams", V.is_prefetch = "kabukiInfo.isPrefetch", V.is_secondary_nav = "kabukiInfo.isSecondaryNav", V.nav_type = "kabukiInfo.navigationType", V.prev_browse_id = "kabukiInfo.prevBrowseId", V.query_source = "kabukiInfo.querySource", V.voz_type = "kabukiInfo.vozType", V.yt_lt = "loadType", V.mver = "creatorInfo.measurementVersion", V.yt_ad = "isMonetized", V.nr = "webInfo.navigationReason", V.nrsu = "navigationRequestedSameUrl", V.pnt = "performanceNavigationTiming",
            V.prt = "playbackRequiresTap", V.plt = "playerInfo.playbackType", V.pis = "playerInfo.playerInitializedState", V.paused = "playerInfo.isPausedOnLoad", V.yt_pt = "playerType", V.fmt = "playerInfo.itag", V.yt_pl = "watchInfo.isPlaylist", V.yt_pre = "playerInfo.preloadType", V.yt_ad_pr = "prerollAllowed", V.pa = "previousAction", V.yt_red = "isRedSubscriber", V.rce = "mwebInfo.responseContentEncoding", V.rc = "resourceInfo.resourceCache", V.scrh = "screenHeight", V.scrw = "screenWidth", V.st = "serverTimeMs", V.ssdm = "shellStartupDurationMs", V.br_trs =
            "tvInfo.bedrockTriggerState", V.kebqat = "kabukiInfo.earlyBrowseRequestInfo.abandonmentType", V.kebqa = "kabukiInfo.earlyBrowseRequestInfo.adopted", V.label = "tvInfo.label", V.is_mdx = "tvInfo.isMdx", V.preloaded = "tvInfo.isPreloaded", V.aac_type = "tvInfo.authAccessCredentialType", V.upg_player_vis = "playerInfo.visibilityState", V.query = "unpluggedInfo.query", V.upg_chip_ids_string = "unpluggedInfo.upgChipIdsString", V.yt_vst = "videoStreamType", V.vph = "viewportHeight", V.vpw = "viewportWidth", V.yt_vis = "isVisible", V.rcl = "mwebInfo.responseContentLength",
            V.GetSettings_rid = "requestIds", V.GetTrending_rid = "requestIds", V.GetMusicSearchSuggestions_rid = "requestIds", V.REQUEST_ID = "requestIds", V),
        Gu = "isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
        Hu = {},
        Iu = (Hu.ccs = "CANARY_STATE_",
            Hu.mver = "MEASUREMENT_VERSION_", Hu.pis = "PLAYER_INITIALIZED_STATE_", Hu.yt_pt = "LATENCY_PLAYER_", Hu.pa = "LATENCY_ACTION_", Hu.ctop = "TOP_ENTITY_TYPE_", Hu.yt_vst = "VIDEO_STREAM_TYPE_", Hu),
        Ju = "all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");

    function Ku(a) {
        return Eu[a] || "LATENCY_ACTION_UNKNOWN"
    }

    function Lu(a, b, c) {
        c = zu(c);
        if (c.gelInfos) c.gelInfos[a] = !0;
        else {
            var d = {};
            c.gelInfos = (d[a] = !0, d)
        }
        if (a.match("_rid")) {
            var e = a.split("_rid")[0];
            a = "REQUEST_ID"
        }
        if (a in Fu) {
            c = Fu[a];
            0 <= fb(Gu, c) && (b = !!b);
            a in Iu && "string" === typeof b && (b = Iu[a] + b.toUpperCase());
            a = b;
            b = c.split(".");
            for (var f = d = {}, g = 0; g < b.length - 1; g++) {
                var h = b[g];
                f[h] = {};
                f = f[h]
            }
            f[b[b.length - 1]] = "requestIds" === c ? [{
                id: a,
                endpoint: e
            }] : a;
            return qu({}, d)
        }
        0 <= fb(Ju, a) || mt(new rn("Unknown label logged with GEL CSI", a))
    };
    var W = {
        LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING: 179,
        LATENCY_ACTION_KIDS_PROFILE_SWITCHER: 90,
        LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER: 100,
        LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC: 46,
        LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR: 37,
        LATENCY_ACTION_SPINNER_DISPLAYED: 14,
        LATENCY_ACTION_PLAYABILITY_CHECK: 10,
        LATENCY_ACTION_PROCESS: 9,
        LATENCY_ACTION_APP_STARTUP: 5,
        LATENCY_ACTION_MINI_APP_PLAY: 249,
        LATENCY_ACTION_DMA_CONSENT_FLOW: 247,
        LATENCY_ACTION_GEL_FETCH: 248,
        LATENCY_ACTION_GEL_JSPB_SERIALIZE: 243,
        LATENCY_ACTION_GEL_COMPRESSION: 215,
        LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE: 204,
        LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC: 203,
        LATENCY_ACTION_COMMERCE_TRANSACTION: 184,
        LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC: 173,
        LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC: 172,
        LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC: 171,
        LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC: 170,
        LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC: 169,
        LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC: 168,
        LATENCY_ACTION_GET_OFFERS_RPC: 167,
        LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC: 166,
        LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC: 165,
        LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC: 164,
        LATENCY_ACTION_GET_OFFER_DETAILS_RPC: 163,
        LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC: 162,
        LATENCY_ACTION_GET_TIP_MODULE_RPC: 161,
        LATENCY_ACTION_HANDLE_TRANSACTION_RPC: 160,
        LATENCY_ACTION_COMPLETE_TRANSACTION_RPC: 159,
        LATENCY_ACTION_GET_CART_RPC: 158,
        LATENCY_ACTION_THUMBNAIL_FETCH: 156,
        LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK: 154,
        LATENCY_ACTION_SHARE_VIDEO: 153,
        LATENCY_ACTION_AD_TO_VIDEO_INT: 152,
        LATENCY_ACTION_ABANDONED_BROWSE: 151,
        LATENCY_ACTION_PLAYER_ROTATION: 150,
        LATENCY_ACTION_GENERIC_WEB_VIEW: 183,
        LATENCY_ACTION_SHOPPING_IN_APP: 124,
        LATENCY_ACTION_PLAYER_ATTESTATION: 121,
        LATENCY_ACTION_PLAYER_SEEK: 119,
        LATENCY_ACTION_SUPER_STICKER_BUY_FLOW: 114,
        LATENCY_ACTION_DOWNLOADS_DATA_ACCESS: 180,
        LATENCY_ACTION_BLOCKS_PERFORMANCE: 148,
        LATENCY_ACTION_ASSISTANT_QUERY: 138,
        LATENCY_ACTION_ASSISTANT_SETTINGS: 137,
        LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF: 129,
        LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF: 128,
        LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN: 244,
        LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE: 127,
        LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION: 123,
        LATENCY_ACTION_NETWORKLESS_PERFORMANCE: 122,
        LATENCY_ACTION_DOWNLOADS_EXPANSION: 133,
        LATENCY_ACTION_ENTITY_TRANSFORM: 131,
        LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER: 96,
        LATENCY_ACTION_EMBEDS_SET_VIDEO: 95,
        LATENCY_ACTION_SETTINGS: 93,
        LATENCY_ACTION_ABANDONED_STARTUP: 81,
        LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY: 80,
        LATENCY_ACTION_MEDIA_BROWSER_SEARCH: 79,
        LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE: 78,
        LATENCY_ACTION_WHO_IS_WATCHING: 77,
        LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH: 76,
        LATENCY_ACTION_LITE_SWITCH_ACCOUNT: 73,
        LATENCY_ACTION_ELEMENTS_PERFORMANCE: 70,
        LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION: 69,
        LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION: 65,
        LATENCY_ACTION_OFFLINE_STORE_START: 61,
        LATENCY_ACTION_REEL_EDITOR: 58,
        LATENCY_ACTION_CHANNEL_SUBSCRIBE: 56,
        LATENCY_ACTION_CHANNEL_PREVIEW: 55,
        LATENCY_ACTION_PREFETCH: 52,
        LATENCY_ACTION_ABANDONED_WATCH: 45,
        LATENCY_ACTION_LOAD_COMMENT_REPLIES: 26,
        LATENCY_ACTION_LOAD_COMMENTS: 25,
        LATENCY_ACTION_EDIT_COMMENT: 24,
        LATENCY_ACTION_NEW_COMMENT: 23,
        LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING: 19,
        LATENCY_ACTION_EMBED: 18,
        LATENCY_ACTION_MDX_LAUNCH: 15,
        LATENCY_ACTION_RESOLVE_URL: 13,
        LATENCY_ACTION_CAST_SPLASH: 149,
        LATENCY_ACTION_MDX_CONNECT_TO_SESSION: 190,
        LATENCY_ACTION_MDX_STREAM_TRANSFER: 178,
        LATENCY_ACTION_MDX_CAST: 120,
        LATENCY_ACTION_MDX_COMMAND: 12,
        LATENCY_ACTION_MOBILE_LIVE_NAV_MDE: 231,
        LATENCY_ACTION_REEL_SELECT_SEGMENT: 136,
        LATENCY_ACTION_ACCELERATED_EFFECTS: 145,
        LATENCY_ACTION_SHORTS_LOAD_PROJECT: 234,
        LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING: 229,
        LATENCY_ACTION_EDIT_AUDIO_GEN: 182,
        LATENCY_ACTION_UPLOAD_AUDIO_MIXER: 147,
        LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING: 157,
        LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING: 146,
        LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK: 130,
        LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD: 125,
        LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD: 240,
        LATENCY_ACTION_SHORTS_VIDEO_INGESTION: 155,
        LATENCY_ACTION_SHORTS_GALLERY: 107,
        LATENCY_ACTION_SHORTS_TRIM: 105,
        LATENCY_ACTION_SHORTS_EDIT: 104,
        LATENCY_ACTION_SHORTS_CAMERA: 103,
        LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT: 239,
        LATENCY_ACTION_CREATION_MODES_MODE_SWITCH: 236,
        LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT: 235,
        LATENCY_ACTION_SWITCH_CAMERA: 246,
        LATENCY_ACTION_OPEN_CAMERA: 245,
        LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME: 242,
        LATENCY_ACTION_MEDIA_ENGINE_EXPORT: 241,
        LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA: 233,
        LATENCY_ACTION_PRODUCER_EXPORT_PROJECT: 193,
        LATENCY_ACTION_PRODUCER_EDITOR: 192,
        LATENCY_ACTION_PARENT_TOOLS_DASHBOARD: 102,
        LATENCY_ACTION_PARENT_TOOLS_COLLECTION: 101,
        LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL: 238,
        LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL: 237,
        LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS: 116,
        LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS: 115,
        LATENCY_ACTION_MUSIC_ALBUM_DETAIL: 72,
        LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL: 71,
        LATENCY_ACTION_STORE: 175,
        LATENCY_ACTION_CHIPS: 68,
        LATENCY_ACTION_SEARCH_ZERO_STATE: 67,
        LATENCY_ACTION_LIVE_PAGINATION: 117,
        LATENCY_ACTION_LIVE: 20,
        LATENCY_ACTION_PREBUFFER: 40,
        LATENCY_ACTION_TENX: 39,
        LATENCY_ACTION_KIDS_PROFILE_SETTINGS: 94,
        LATENCY_ACTION_KIDS_WATCH_IT_AGAIN: 92,
        LATENCY_ACTION_KIDS_SECRET_CODE: 91,
        LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS: 89,
        LATENCY_ACTION_KIDS_ONBOARDING: 88,
        LATENCY_ACTION_KIDS_VOICE_SEARCH: 82,
        LATENCY_ACTION_KIDS_CURATED_COLLECTION: 62,
        LATENCY_ACTION_KIDS_LIBRARY: 53,
        LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS: 38,
        LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT: 219,
        LATENCY_ACTION_CREATOR_VIDEO_POLICY: 217,
        LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION: 74,
        LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING: 141,
        LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS: 142,
        LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC: 51,
        LATENCY_ACTION_CREATOR_VIDEO_EDITOR: 50,
        LATENCY_ACTION_CREATOR_VIDEO_EDIT: 36,
        LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT: 218,
        LATENCY_ACTION_CREATOR_VIDEO_COMMENTS: 34,
        LATENCY_ACTION_CREATOR_VIDEO_CLAIMS: 216,
        LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS: 33,
        LATENCY_ACTION_CREATOR_SONG_ANALYTICS: 176,
        LATENCY_ACTION_CREATOR_PROMOTION_LIST: 186,
        LATENCY_ACTION_CREATOR_PROMOTION_EDIT: 185,
        LATENCY_ACTION_CREATOR_POST_LIST: 112,
        LATENCY_ACTION_CREATOR_POST_EDIT: 110,
        LATENCY_ACTION_CREATOR_POST_COMMENTS: 111,
        LATENCY_ACTION_CREATOR_LIVE_STREAMING: 108,
        LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT: 174,
        LATENCY_ACTION_CREATOR_DIALOG_UPLOADS: 86,
        LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES: 87,
        LATENCY_ACTION_CREATOR_CMS_VIDEOS: 202,
        LATENCY_ACTION_CREATOR_CMS_REPORTS: 201,
        LATENCY_ACTION_CREATOR_CMS_RELEASES: 226,
        LATENCY_ACTION_CREATOR_CMS_POLICIES: 225,
        LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC: 224,
        LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING: 200,
        LATENCY_ACTION_CREATOR_CMS_LICENSES: 223,
        LATENCY_ACTION_CREATOR_CMS_ISSUES: 191,
        LATENCY_ACTION_CREATOR_CMS_DASHBOARD: 199,
        LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY: 198,
        LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS: 197,
        LATENCY_ACTION_CREATOR_CMS_CHANNELS: 196,
        LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS: 222,
        LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS: 214,
        LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES: 209,
        LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY: 208,
        LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP: 207,
        LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA: 205,
        LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES: 212,
        LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES: 206,
        LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS: 221,
        LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS: 210,
        LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION: 213,
        LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS: 211,
        LATENCY_ACTION_CREATOR_CMS_ASSETS: 195,
        LATENCY_ACTION_CREATOR_CMS_ART_TRACKS: 220,
        LATENCY_ACTION_CREATOR_CMS_ANALYTICS: 194,
        LATENCY_ACTION_CREATOR_CMS_ALLOWLIST: 227,
        LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS: 32,
        LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS: 48,
        LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS: 139,
        LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT: 177,
        LATENCY_ACTION_CREATOR_CHANNEL_MUSIC: 99,
        LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION: 43,
        LATENCY_ACTION_CREATOR_CHANNEL_EDITING: 113,
        LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD: 49,
        LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT: 44,
        LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS: 66,
        LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS: 31,
        LATENCY_ACTION_CREATOR_ARTIST_PROFILE: 85,
        LATENCY_ACTION_CREATOR_ARTIST_CONCERTS: 84,
        LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS: 83,
        LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE: 140,
        LATENCY_ACTION_EXPERIMENTAL_WATCH_UI: 181,
        LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS: 228,
        LATENCY_ACTION_STORYBOARD_THUMBNAILS: 118,
        LATENCY_ACTION_SEARCH_THUMBNAILS: 59,
        LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD: 54,
        LATENCY_ACTION_VOICE_ASSISTANT: 47,
        LATENCY_ACTION_SEARCH_UI: 35,
        LATENCY_ACTION_SUGGEST: 30,
        LATENCY_ACTION_AUTO_SEARCH: 126,
        LATENCY_ACTION_DOWNLOADS: 98,
        LATENCY_ACTION_EXPLORE: 75,
        LATENCY_ACTION_VIDEO_LIST: 63,
        LATENCY_ACTION_HOME_RESUME: 60,
        LATENCY_ACTION_SUBSCRIPTIONS_LIST: 57,
        LATENCY_ACTION_THUMBNAIL_LOAD: 42,
        LATENCY_ACTION_FIRST_THUMBNAIL_LOAD: 29,
        LATENCY_ACTION_SUBSCRIPTIONS_FEED: 109,
        LATENCY_ACTION_SUBSCRIPTIONS: 28,
        LATENCY_ACTION_TRENDING: 27,
        LATENCY_ACTION_LIBRARY: 21,
        LATENCY_ACTION_VIDEO_THUMBNAIL: 8,
        LATENCY_ACTION_SHOW_MORE: 7,
        LATENCY_ACTION_VIDEO_PREVIEW: 6,
        LATENCY_ACTION_AD_TO_AD: 22,
        LATENCY_ACTION_VIDEO_TO_AD: 17,
        LATENCY_ACTION_AD_TO_VIDEO: 16,
        LATENCY_ACTION_DIRECT_PLAYBACK: 132,
        LATENCY_ACTION_PREBUFFER_VIDEO: 144,
        LATENCY_ACTION_PREFETCH_VIDEO: 143,
        LATENCY_ACTION_STARTUP: 106,
        LATENCY_ACTION_INLINE_TO_WATCH: 232,
        LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH: 230,
        LATENCY_ACTION_ONBOARDING: 135,
        LATENCY_ACTION_LOGIN: 97,
        LATENCY_ACTION_REEL_WATCH: 41,
        LATENCY_ACTION_WATCH: 3,
        LATENCY_ACTION_RESULTS: 2,
        LATENCY_ACTION_CHANNELS: 4,
        LATENCY_ACTION_HOME: 1,
        LATENCY_ACTION_BROWSE: 11,
        LATENCY_ACTION_USER_ACTION: 189,
        LATENCY_ACTION_INFRASTRUCTURE: 188,
        LATENCY_ACTION_PAGE_NAVIGATION: 187,
        LATENCY_ACTION_UNKNOWN: 0
    };
    W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING] = "LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";
    W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER] = "LATENCY_ACTION_KIDS_PROFILE_SWITCHER";
    W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER] = "LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";
    W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC] = "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";
    W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR] = "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";
    W[W.LATENCY_ACTION_SPINNER_DISPLAYED] = "LATENCY_ACTION_SPINNER_DISPLAYED";
    W[W.LATENCY_ACTION_PLAYABILITY_CHECK] = "LATENCY_ACTION_PLAYABILITY_CHECK";
    W[W.LATENCY_ACTION_PROCESS] = "LATENCY_ACTION_PROCESS";
    W[W.LATENCY_ACTION_APP_STARTUP] = "LATENCY_ACTION_APP_STARTUP";
    W[W.LATENCY_ACTION_MINI_APP_PLAY] = "LATENCY_ACTION_MINI_APP_PLAY";
    W[W.LATENCY_ACTION_DMA_CONSENT_FLOW] = "LATENCY_ACTION_DMA_CONSENT_FLOW";
    W[W.LATENCY_ACTION_GEL_FETCH] = "LATENCY_ACTION_GEL_FETCH";
    W[W.LATENCY_ACTION_GEL_JSPB_SERIALIZE] = "LATENCY_ACTION_GEL_JSPB_SERIALIZE";
    W[W.LATENCY_ACTION_GEL_COMPRESSION] = "LATENCY_ACTION_GEL_COMPRESSION";
    W[W.LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE] = "LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE";
    W[W.LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC] = "LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC";
    W[W.LATENCY_ACTION_COMMERCE_TRANSACTION] = "LATENCY_ACTION_COMMERCE_TRANSACTION";
    W[W.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC] = "LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";
    W[W.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC] = "LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";
    W[W.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC] = "LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";
    W[W.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC] = "LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";
    W[W.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC] = "LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";
    W[W.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC] = "LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";
    W[W.LATENCY_ACTION_GET_OFFERS_RPC] = "LATENCY_ACTION_GET_OFFERS_RPC";
    W[W.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC] = "LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";
    W[W.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC] = "LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";
    W[W.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC] = "LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";
    W[W.LATENCY_ACTION_GET_OFFER_DETAILS_RPC] = "LATENCY_ACTION_GET_OFFER_DETAILS_RPC";
    W[W.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC] = "LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";
    W[W.LATENCY_ACTION_GET_TIP_MODULE_RPC] = "LATENCY_ACTION_GET_TIP_MODULE_RPC";
    W[W.LATENCY_ACTION_HANDLE_TRANSACTION_RPC] = "LATENCY_ACTION_HANDLE_TRANSACTION_RPC";
    W[W.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC] = "LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";
    W[W.LATENCY_ACTION_GET_CART_RPC] = "LATENCY_ACTION_GET_CART_RPC";
    W[W.LATENCY_ACTION_THUMBNAIL_FETCH] = "LATENCY_ACTION_THUMBNAIL_FETCH";
    W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK] = "LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";
    W[W.LATENCY_ACTION_SHARE_VIDEO] = "LATENCY_ACTION_SHARE_VIDEO";
    W[W.LATENCY_ACTION_AD_TO_VIDEO_INT] = "LATENCY_ACTION_AD_TO_VIDEO_INT";
    W[W.LATENCY_ACTION_ABANDONED_BROWSE] = "LATENCY_ACTION_ABANDONED_BROWSE";
    W[W.LATENCY_ACTION_PLAYER_ROTATION] = "LATENCY_ACTION_PLAYER_ROTATION";
    W[W.LATENCY_ACTION_GENERIC_WEB_VIEW] = "LATENCY_ACTION_GENERIC_WEB_VIEW";
    W[W.LATENCY_ACTION_SHOPPING_IN_APP] = "LATENCY_ACTION_SHOPPING_IN_APP";
    W[W.LATENCY_ACTION_PLAYER_ATTESTATION] = "LATENCY_ACTION_PLAYER_ATTESTATION";
    W[W.LATENCY_ACTION_PLAYER_SEEK] = "LATENCY_ACTION_PLAYER_SEEK";
    W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW] = "LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";
    W[W.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS] = "LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";
    W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE] = "LATENCY_ACTION_BLOCKS_PERFORMANCE";
    W[W.LATENCY_ACTION_ASSISTANT_QUERY] = "LATENCY_ACTION_ASSISTANT_QUERY";
    W[W.LATENCY_ACTION_ASSISTANT_SETTINGS] = "LATENCY_ACTION_ASSISTANT_SETTINGS";
    W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF] = "LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";
    W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF] = "LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";
    W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN] = "LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN";
    W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE] = "LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";
    W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION] = "LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";
    W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE] = "LATENCY_ACTION_NETWORKLESS_PERFORMANCE";
    W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION] = "LATENCY_ACTION_DOWNLOADS_EXPANSION";
    W[W.LATENCY_ACTION_ENTITY_TRANSFORM] = "LATENCY_ACTION_ENTITY_TRANSFORM";
    W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER] = "LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";
    W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO] = "LATENCY_ACTION_EMBEDS_SET_VIDEO";
    W[W.LATENCY_ACTION_SETTINGS] = "LATENCY_ACTION_SETTINGS";
    W[W.LATENCY_ACTION_ABANDONED_STARTUP] = "LATENCY_ACTION_ABANDONED_STARTUP";
    W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY] = "LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";
    W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH] = "LATENCY_ACTION_MEDIA_BROWSER_SEARCH";
    W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE] = "LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";
    W[W.LATENCY_ACTION_WHO_IS_WATCHING] = "LATENCY_ACTION_WHO_IS_WATCHING";
    W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH] = "LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";
    W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT] = "LATENCY_ACTION_LITE_SWITCH_ACCOUNT";
    W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE] = "LATENCY_ACTION_ELEMENTS_PERFORMANCE";
    W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION] = "LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";
    W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION] = "LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";
    W[W.LATENCY_ACTION_OFFLINE_STORE_START] = "LATENCY_ACTION_OFFLINE_STORE_START";
    W[W.LATENCY_ACTION_REEL_EDITOR] = "LATENCY_ACTION_REEL_EDITOR";
    W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE] = "LATENCY_ACTION_CHANNEL_SUBSCRIBE";
    W[W.LATENCY_ACTION_CHANNEL_PREVIEW] = "LATENCY_ACTION_CHANNEL_PREVIEW";
    W[W.LATENCY_ACTION_PREFETCH] = "LATENCY_ACTION_PREFETCH";
    W[W.LATENCY_ACTION_ABANDONED_WATCH] = "LATENCY_ACTION_ABANDONED_WATCH";
    W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES] = "LATENCY_ACTION_LOAD_COMMENT_REPLIES";
    W[W.LATENCY_ACTION_LOAD_COMMENTS] = "LATENCY_ACTION_LOAD_COMMENTS";
    W[W.LATENCY_ACTION_EDIT_COMMENT] = "LATENCY_ACTION_EDIT_COMMENT";
    W[W.LATENCY_ACTION_NEW_COMMENT] = "LATENCY_ACTION_NEW_COMMENT";
    W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING] = "LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";
    W[W.LATENCY_ACTION_EMBED] = "LATENCY_ACTION_EMBED";
    W[W.LATENCY_ACTION_MDX_LAUNCH] = "LATENCY_ACTION_MDX_LAUNCH";
    W[W.LATENCY_ACTION_RESOLVE_URL] = "LATENCY_ACTION_RESOLVE_URL";
    W[W.LATENCY_ACTION_CAST_SPLASH] = "LATENCY_ACTION_CAST_SPLASH";
    W[W.LATENCY_ACTION_MDX_CONNECT_TO_SESSION] = "LATENCY_ACTION_MDX_CONNECT_TO_SESSION";
    W[W.LATENCY_ACTION_MDX_STREAM_TRANSFER] = "LATENCY_ACTION_MDX_STREAM_TRANSFER";
    W[W.LATENCY_ACTION_MDX_CAST] = "LATENCY_ACTION_MDX_CAST";
    W[W.LATENCY_ACTION_MDX_COMMAND] = "LATENCY_ACTION_MDX_COMMAND";
    W[W.LATENCY_ACTION_MOBILE_LIVE_NAV_MDE] = "LATENCY_ACTION_MOBILE_LIVE_NAV_MDE";
    W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT] = "LATENCY_ACTION_REEL_SELECT_SEGMENT";
    W[W.LATENCY_ACTION_ACCELERATED_EFFECTS] = "LATENCY_ACTION_ACCELERATED_EFFECTS";
    W[W.LATENCY_ACTION_SHORTS_LOAD_PROJECT] = "LATENCY_ACTION_SHORTS_LOAD_PROJECT";
    W[W.LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING] = "LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING";
    W[W.LATENCY_ACTION_EDIT_AUDIO_GEN] = "LATENCY_ACTION_EDIT_AUDIO_GEN";
    W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER] = "LATENCY_ACTION_UPLOAD_AUDIO_MIXER";
    W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING] = "LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";
    W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING] = "LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";
    W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK] = "LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";
    W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD] = "LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";
    W[W.LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD] = "LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD";
    W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION] = "LATENCY_ACTION_SHORTS_VIDEO_INGESTION";
    W[W.LATENCY_ACTION_SHORTS_GALLERY] = "LATENCY_ACTION_SHORTS_GALLERY";
    W[W.LATENCY_ACTION_SHORTS_TRIM] = "LATENCY_ACTION_SHORTS_TRIM";
    W[W.LATENCY_ACTION_SHORTS_EDIT] = "LATENCY_ACTION_SHORTS_EDIT";
    W[W.LATENCY_ACTION_SHORTS_CAMERA] = "LATENCY_ACTION_SHORTS_CAMERA";
    W[W.LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT] = "LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT";
    W[W.LATENCY_ACTION_CREATION_MODES_MODE_SWITCH] = "LATENCY_ACTION_CREATION_MODES_MODE_SWITCH";
    W[W.LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT] = "LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT";
    W[W.LATENCY_ACTION_SWITCH_CAMERA] = "LATENCY_ACTION_SWITCH_CAMERA";
    W[W.LATENCY_ACTION_OPEN_CAMERA] = "LATENCY_ACTION_OPEN_CAMERA";
    W[W.LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME] = "LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME";
    W[W.LATENCY_ACTION_MEDIA_ENGINE_EXPORT] = "LATENCY_ACTION_MEDIA_ENGINE_EXPORT";
    W[W.LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA] = "LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA";
    W[W.LATENCY_ACTION_PRODUCER_EXPORT_PROJECT] = "LATENCY_ACTION_PRODUCER_EXPORT_PROJECT";
    W[W.LATENCY_ACTION_PRODUCER_EDITOR] = "LATENCY_ACTION_PRODUCER_EDITOR";
    W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD] = "LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";
    W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION] = "LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
    W[W.LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL] = "LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL";
    W[W.LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL] = "LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL";
    W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS] = "LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";
    W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS] = "LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";
    W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL] = "LATENCY_ACTION_MUSIC_ALBUM_DETAIL";
    W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL] = "LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";
    W[W.LATENCY_ACTION_STORE] = "LATENCY_ACTION_STORE";
    W[W.LATENCY_ACTION_CHIPS] = "LATENCY_ACTION_CHIPS";
    W[W.LATENCY_ACTION_SEARCH_ZERO_STATE] = "LATENCY_ACTION_SEARCH_ZERO_STATE";
    W[W.LATENCY_ACTION_LIVE_PAGINATION] = "LATENCY_ACTION_LIVE_PAGINATION";
    W[W.LATENCY_ACTION_LIVE] = "LATENCY_ACTION_LIVE";
    W[W.LATENCY_ACTION_PREBUFFER] = "LATENCY_ACTION_PREBUFFER";
    W[W.LATENCY_ACTION_TENX] = "LATENCY_ACTION_TENX";
    W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS] = "LATENCY_ACTION_KIDS_PROFILE_SETTINGS";
    W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN] = "LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";
    W[W.LATENCY_ACTION_KIDS_SECRET_CODE] = "LATENCY_ACTION_KIDS_SECRET_CODE";
    W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS] = "LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
    W[W.LATENCY_ACTION_KIDS_ONBOARDING] = "LATENCY_ACTION_KIDS_ONBOARDING";
    W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH] = "LATENCY_ACTION_KIDS_VOICE_SEARCH";
    W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION] = "LATENCY_ACTION_KIDS_CURATED_COLLECTION";
    W[W.LATENCY_ACTION_KIDS_LIBRARY] = "LATENCY_ACTION_KIDS_LIBRARY";
    W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS] = "LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";
    W[W.LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT] = "LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT";
    W[W.LATENCY_ACTION_CREATOR_VIDEO_POLICY] = "LATENCY_ACTION_CREATOR_VIDEO_POLICY";
    W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION] = "LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";
    W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING] = "LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";
    W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS] = "LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";
    W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC] = "LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";
    W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR] = "LATENCY_ACTION_CREATOR_VIDEO_EDITOR";
    W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT] = "LATENCY_ACTION_CREATOR_VIDEO_EDIT";
    W[W.LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT] = "LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT";
    W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS] = "LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";
    W[W.LATENCY_ACTION_CREATOR_VIDEO_CLAIMS] = "LATENCY_ACTION_CREATOR_VIDEO_CLAIMS";
    W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS] = "LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";
    W[W.LATENCY_ACTION_CREATOR_SONG_ANALYTICS] = "LATENCY_ACTION_CREATOR_SONG_ANALYTICS";
    W[W.LATENCY_ACTION_CREATOR_PROMOTION_LIST] = "LATENCY_ACTION_CREATOR_PROMOTION_LIST";
    W[W.LATENCY_ACTION_CREATOR_PROMOTION_EDIT] = "LATENCY_ACTION_CREATOR_PROMOTION_EDIT";
    W[W.LATENCY_ACTION_CREATOR_POST_LIST] = "LATENCY_ACTION_CREATOR_POST_LIST";
    W[W.LATENCY_ACTION_CREATOR_POST_EDIT] = "LATENCY_ACTION_CREATOR_POST_EDIT";
    W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS] = "LATENCY_ACTION_CREATOR_POST_COMMENTS";
    W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING] = "LATENCY_ACTION_CREATOR_LIVE_STREAMING";
    W[W.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT] = "LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";
    W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS] = "LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";
    W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES] = "LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
    W[W.LATENCY_ACTION_CREATOR_CMS_VIDEOS] = "LATENCY_ACTION_CREATOR_CMS_VIDEOS";
    W[W.LATENCY_ACTION_CREATOR_CMS_REPORTS] = "LATENCY_ACTION_CREATOR_CMS_REPORTS";
    W[W.LATENCY_ACTION_CREATOR_CMS_RELEASES] = "LATENCY_ACTION_CREATOR_CMS_RELEASES";
    W[W.LATENCY_ACTION_CREATOR_CMS_POLICIES] = "LATENCY_ACTION_CREATOR_CMS_POLICIES";
    W[W.LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC] = "LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC";
    W[W.LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING] = "LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING";
    W[W.LATENCY_ACTION_CREATOR_CMS_LICENSES] = "LATENCY_ACTION_CREATOR_CMS_LICENSES";
    W[W.LATENCY_ACTION_CREATOR_CMS_ISSUES] = "LATENCY_ACTION_CREATOR_CMS_ISSUES";
    W[W.LATENCY_ACTION_CREATOR_CMS_DASHBOARD] = "LATENCY_ACTION_CREATOR_CMS_DASHBOARD";
    W[W.LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY] = "LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY";
    W[W.LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS] = "LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS";
    W[W.LATENCY_ACTION_CREATOR_CMS_CHANNELS] = "LATENCY_ACTION_CREATOR_CMS_CHANNELS";
    W[W.LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS] = "LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS";
    W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS] = "LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS";
    W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES] = "LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES";
    W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY] = "LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY";
    W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP] = "LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP";
    W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA] = "LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA";
    W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES] = "LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES";
    W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES] = "LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES";
    W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS] = "LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS";
    W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS] = "LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS";
    W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION] = "LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION";
    W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS] = "LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS";
    W[W.LATENCY_ACTION_CREATOR_CMS_ASSETS] = "LATENCY_ACTION_CREATOR_CMS_ASSETS";
    W[W.LATENCY_ACTION_CREATOR_CMS_ART_TRACKS] = "LATENCY_ACTION_CREATOR_CMS_ART_TRACKS";
    W[W.LATENCY_ACTION_CREATOR_CMS_ANALYTICS] = "LATENCY_ACTION_CREATOR_CMS_ANALYTICS";
    W[W.LATENCY_ACTION_CREATOR_CMS_ALLOWLIST] = "LATENCY_ACTION_CREATOR_CMS_ALLOWLIST";
    W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS] = "LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";
    W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS] = "LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";
    W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS] = "LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";
    W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT] = "LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";
    W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC] = "LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";
    W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION] = "LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
    W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING] = "LATENCY_ACTION_CREATOR_CHANNEL_EDITING";
    W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD] = "LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";
    W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT] = "LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";
    W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS] = "LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";
    W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS] = "LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";
    W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE] = "LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
    W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS] = "LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";
    W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS] = "LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";
    W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE] = "LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";
    W[W.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI] = "LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";
    W[W.LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS] = "LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS";
    W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS] = "LATENCY_ACTION_STORYBOARD_THUMBNAILS";
    W[W.LATENCY_ACTION_SEARCH_THUMBNAILS] = "LATENCY_ACTION_SEARCH_THUMBNAILS";
    W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD] = "LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";
    W[W.LATENCY_ACTION_VOICE_ASSISTANT] = "LATENCY_ACTION_VOICE_ASSISTANT";
    W[W.LATENCY_ACTION_SEARCH_UI] = "LATENCY_ACTION_SEARCH_UI";
    W[W.LATENCY_ACTION_SUGGEST] = "LATENCY_ACTION_SUGGEST";
    W[W.LATENCY_ACTION_AUTO_SEARCH] = "LATENCY_ACTION_AUTO_SEARCH";
    W[W.LATENCY_ACTION_DOWNLOADS] = "LATENCY_ACTION_DOWNLOADS";
    W[W.LATENCY_ACTION_EXPLORE] = "LATENCY_ACTION_EXPLORE";
    W[W.LATENCY_ACTION_VIDEO_LIST] = "LATENCY_ACTION_VIDEO_LIST";
    W[W.LATENCY_ACTION_HOME_RESUME] = "LATENCY_ACTION_HOME_RESUME";
    W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST] = "LATENCY_ACTION_SUBSCRIPTIONS_LIST";
    W[W.LATENCY_ACTION_THUMBNAIL_LOAD] = "LATENCY_ACTION_THUMBNAIL_LOAD";
    W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD] = "LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";
    W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED] = "LATENCY_ACTION_SUBSCRIPTIONS_FEED";
    W[W.LATENCY_ACTION_SUBSCRIPTIONS] = "LATENCY_ACTION_SUBSCRIPTIONS";
    W[W.LATENCY_ACTION_TRENDING] = "LATENCY_ACTION_TRENDING";
    W[W.LATENCY_ACTION_LIBRARY] = "LATENCY_ACTION_LIBRARY";
    W[W.LATENCY_ACTION_VIDEO_THUMBNAIL] = "LATENCY_ACTION_VIDEO_THUMBNAIL";
    W[W.LATENCY_ACTION_SHOW_MORE] = "LATENCY_ACTION_SHOW_MORE";
    W[W.LATENCY_ACTION_VIDEO_PREVIEW] = "LATENCY_ACTION_VIDEO_PREVIEW";
    W[W.LATENCY_ACTION_AD_TO_AD] = "LATENCY_ACTION_AD_TO_AD";
    W[W.LATENCY_ACTION_VIDEO_TO_AD] = "LATENCY_ACTION_VIDEO_TO_AD";
    W[W.LATENCY_ACTION_AD_TO_VIDEO] = "LATENCY_ACTION_AD_TO_VIDEO";
    W[W.LATENCY_ACTION_DIRECT_PLAYBACK] = "LATENCY_ACTION_DIRECT_PLAYBACK";
    W[W.LATENCY_ACTION_PREBUFFER_VIDEO] = "LATENCY_ACTION_PREBUFFER_VIDEO";
    W[W.LATENCY_ACTION_PREFETCH_VIDEO] = "LATENCY_ACTION_PREFETCH_VIDEO";
    W[W.LATENCY_ACTION_STARTUP] = "LATENCY_ACTION_STARTUP";
    W[W.LATENCY_ACTION_INLINE_TO_WATCH] = "LATENCY_ACTION_INLINE_TO_WATCH";
    W[W.LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH] = "LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH";
    W[W.LATENCY_ACTION_ONBOARDING] = "LATENCY_ACTION_ONBOARDING";
    W[W.LATENCY_ACTION_LOGIN] = "LATENCY_ACTION_LOGIN";
    W[W.LATENCY_ACTION_REEL_WATCH] = "LATENCY_ACTION_REEL_WATCH";
    W[W.LATENCY_ACTION_WATCH] = "LATENCY_ACTION_WATCH";
    W[W.LATENCY_ACTION_RESULTS] = "LATENCY_ACTION_RESULTS";
    W[W.LATENCY_ACTION_CHANNELS] = "LATENCY_ACTION_CHANNELS";
    W[W.LATENCY_ACTION_HOME] = "LATENCY_ACTION_HOME";
    W[W.LATENCY_ACTION_BROWSE] = "LATENCY_ACTION_BROWSE";
    W[W.LATENCY_ACTION_USER_ACTION] = "LATENCY_ACTION_USER_ACTION";
    W[W.LATENCY_ACTION_INFRASTRUCTURE] = "LATENCY_ACTION_INFRASTRUCTURE";
    W[W.LATENCY_ACTION_PAGE_NAVIGATION] = "LATENCY_ACTION_PAGE_NAVIGATION";
    W[W.LATENCY_ACTION_UNKNOWN] = "LATENCY_ACTION_UNKNOWN";
    var Mu = {
        LATENCY_NETWORK_MOBILE: 2,
        LATENCY_NETWORK_WIFI: 1,
        LATENCY_NETWORK_UNKNOWN: 0
    };
    Mu[Mu.LATENCY_NETWORK_MOBILE] = "LATENCY_NETWORK_MOBILE";
    Mu[Mu.LATENCY_NETWORK_WIFI] = "LATENCY_NETWORK_WIFI";
    Mu[Mu.LATENCY_NETWORK_UNKNOWN] = "LATENCY_NETWORK_UNKNOWN";
    var X = {
        CONN_INVALID: 31,
        CONN_CELLULAR_5G_NSA: 12,
        CONN_CELLULAR_5G_SA: 11,
        CONN_WIFI_METERED: 10,
        CONN_CELLULAR_5G: 9,
        CONN_DISCO: 8,
        CONN_CELLULAR_UNKNOWN: 7,
        CONN_CELLULAR_4G: 6,
        CONN_CELLULAR_3G: 5,
        CONN_CELLULAR_2G: 4,
        CONN_WIFI: 3,
        CONN_NONE: 2,
        CONN_UNKNOWN: 1,
        CONN_DEFAULT: 0
    };
    X[X.CONN_INVALID] = "CONN_INVALID";
    X[X.CONN_CELLULAR_5G_NSA] = "CONN_CELLULAR_5G_NSA";
    X[X.CONN_CELLULAR_5G_SA] = "CONN_CELLULAR_5G_SA";
    X[X.CONN_WIFI_METERED] = "CONN_WIFI_METERED";
    X[X.CONN_CELLULAR_5G] = "CONN_CELLULAR_5G";
    X[X.CONN_DISCO] = "CONN_DISCO";
    X[X.CONN_CELLULAR_UNKNOWN] = "CONN_CELLULAR_UNKNOWN";
    X[X.CONN_CELLULAR_4G] = "CONN_CELLULAR_4G";
    X[X.CONN_CELLULAR_3G] = "CONN_CELLULAR_3G";
    X[X.CONN_CELLULAR_2G] = "CONN_CELLULAR_2G";
    X[X.CONN_WIFI] = "CONN_WIFI";
    X[X.CONN_NONE] = "CONN_NONE";
    X[X.CONN_UNKNOWN] = "CONN_UNKNOWN";
    X[X.CONN_DEFAULT] = "CONN_DEFAULT";
    var Y = {
        DETAILED_NETWORK_TYPE_NR_NSA: 126,
        DETAILED_NETWORK_TYPE_NR_SA: 125,
        DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED: 124,
        DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT: 123,
        DETAILED_NETWORK_TYPE_DISCONNECTED: 122,
        DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN: 121,
        DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN: 120,
        DETAILED_NETWORK_TYPE_WIMAX: 119,
        DETAILED_NETWORK_TYPE_ETHERNET: 118,
        DETAILED_NETWORK_TYPE_BLUETOOTH: 117,
        DETAILED_NETWORK_TYPE_WIFI: 116,
        DETAILED_NETWORK_TYPE_LTE: 115,
        DETAILED_NETWORK_TYPE_HSPAP: 114,
        DETAILED_NETWORK_TYPE_EHRPD: 113,
        DETAILED_NETWORK_TYPE_EVDO_B: 112,
        DETAILED_NETWORK_TYPE_UMTS: 111,
        DETAILED_NETWORK_TYPE_IDEN: 110,
        DETAILED_NETWORK_TYPE_HSUPA: 109,
        DETAILED_NETWORK_TYPE_HSPA: 108,
        DETAILED_NETWORK_TYPE_HSDPA: 107,
        DETAILED_NETWORK_TYPE_EVDO_A: 106,
        DETAILED_NETWORK_TYPE_EVDO_0: 105,
        DETAILED_NETWORK_TYPE_CDMA: 104,
        DETAILED_NETWORK_TYPE_1_X_RTT: 103,
        DETAILED_NETWORK_TYPE_GPRS: 102,
        DETAILED_NETWORK_TYPE_EDGE: 101,
        DETAILED_NETWORK_TYPE_UNKNOWN: 0
    };
    Y[Y.DETAILED_NETWORK_TYPE_NR_NSA] = "DETAILED_NETWORK_TYPE_NR_NSA";
    Y[Y.DETAILED_NETWORK_TYPE_NR_SA] = "DETAILED_NETWORK_TYPE_NR_SA";
    Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED] = "DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";
    Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT] = "DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";
    Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED] = "DETAILED_NETWORK_TYPE_DISCONNECTED";
    Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN] = "DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";
    Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN] = "DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
    Y[Y.DETAILED_NETWORK_TYPE_WIMAX] = "DETAILED_NETWORK_TYPE_WIMAX";
    Y[Y.DETAILED_NETWORK_TYPE_ETHERNET] = "DETAILED_NETWORK_TYPE_ETHERNET";
    Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH] = "DETAILED_NETWORK_TYPE_BLUETOOTH";
    Y[Y.DETAILED_NETWORK_TYPE_WIFI] = "DETAILED_NETWORK_TYPE_WIFI";
    Y[Y.DETAILED_NETWORK_TYPE_LTE] = "DETAILED_NETWORK_TYPE_LTE";
    Y[Y.DETAILED_NETWORK_TYPE_HSPAP] = "DETAILED_NETWORK_TYPE_HSPAP";
    Y[Y.DETAILED_NETWORK_TYPE_EHRPD] = "DETAILED_NETWORK_TYPE_EHRPD";
    Y[Y.DETAILED_NETWORK_TYPE_EVDO_B] = "DETAILED_NETWORK_TYPE_EVDO_B";
    Y[Y.DETAILED_NETWORK_TYPE_UMTS] = "DETAILED_NETWORK_TYPE_UMTS";
    Y[Y.DETAILED_NETWORK_TYPE_IDEN] = "DETAILED_NETWORK_TYPE_IDEN";
    Y[Y.DETAILED_NETWORK_TYPE_HSUPA] = "DETAILED_NETWORK_TYPE_HSUPA";
    Y[Y.DETAILED_NETWORK_TYPE_HSPA] = "DETAILED_NETWORK_TYPE_HSPA";
    Y[Y.DETAILED_NETWORK_TYPE_HSDPA] = "DETAILED_NETWORK_TYPE_HSDPA";
    Y[Y.DETAILED_NETWORK_TYPE_EVDO_A] = "DETAILED_NETWORK_TYPE_EVDO_A";
    Y[Y.DETAILED_NETWORK_TYPE_EVDO_0] = "DETAILED_NETWORK_TYPE_EVDO_0";
    Y[Y.DETAILED_NETWORK_TYPE_CDMA] = "DETAILED_NETWORK_TYPE_CDMA";
    Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT] = "DETAILED_NETWORK_TYPE_1_X_RTT";
    Y[Y.DETAILED_NETWORK_TYPE_GPRS] = "DETAILED_NETWORK_TYPE_GPRS";
    Y[Y.DETAILED_NETWORK_TYPE_EDGE] = "DETAILED_NETWORK_TYPE_EDGE";
    Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN] = "DETAILED_NETWORK_TYPE_UNKNOWN";
    var Nu = {
        LATENCY_PLAYER_RTSP: 7,
        LATENCY_PLAYER_HTML5_INLINE: 6,
        LATENCY_PLAYER_HTML5_FULLSCREEN: 5,
        LATENCY_PLAYER_HTML5: 4,
        LATENCY_PLAYER_FRAMEWORK: 3,
        LATENCY_PLAYER_FLASH: 2,
        LATENCY_PLAYER_EXO: 1,
        LATENCY_PLAYER_UNKNOWN: 0
    };
    Nu[Nu.LATENCY_PLAYER_RTSP] = "LATENCY_PLAYER_RTSP";
    Nu[Nu.LATENCY_PLAYER_HTML5_INLINE] = "LATENCY_PLAYER_HTML5_INLINE";
    Nu[Nu.LATENCY_PLAYER_HTML5_FULLSCREEN] = "LATENCY_PLAYER_HTML5_FULLSCREEN";
    Nu[Nu.LATENCY_PLAYER_HTML5] = "LATENCY_PLAYER_HTML5";
    Nu[Nu.LATENCY_PLAYER_FRAMEWORK] = "LATENCY_PLAYER_FRAMEWORK";
    Nu[Nu.LATENCY_PLAYER_FLASH] = "LATENCY_PLAYER_FLASH";
    Nu[Nu.LATENCY_PLAYER_EXO] = "LATENCY_PLAYER_EXO";
    Nu[Nu.LATENCY_PLAYER_UNKNOWN] = "LATENCY_PLAYER_UNKNOWN";
    var Ou = {
        LATENCY_AD_BREAK_TYPE_POSTROLL: 3,
        LATENCY_AD_BREAK_TYPE_MIDROLL: 2,
        LATENCY_AD_BREAK_TYPE_PREROLL: 1,
        LATENCY_AD_BREAK_TYPE_UNKNOWN: 0
    };
    Ou[Ou.LATENCY_AD_BREAK_TYPE_POSTROLL] = "LATENCY_AD_BREAK_TYPE_POSTROLL";
    Ou[Ou.LATENCY_AD_BREAK_TYPE_MIDROLL] = "LATENCY_AD_BREAK_TYPE_MIDROLL";
    Ou[Ou.LATENCY_AD_BREAK_TYPE_PREROLL] = "LATENCY_AD_BREAK_TYPE_PREROLL";
    Ou[Ou.LATENCY_AD_BREAK_TYPE_UNKNOWN] = "LATENCY_AD_BREAK_TYPE_UNKNOWN";
    var Pu = {
        LATENCY_ACTION_ERROR_STARTUP_TIMEOUT: 1,
        LATENCY_ACTION_ERROR_UNSPECIFIED: 0
    };
    Pu[Pu.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT] = "LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";
    Pu[Pu.LATENCY_ACTION_ERROR_UNSPECIFIED] = "LATENCY_ACTION_ERROR_UNSPECIFIED";
    var Qu = {
        LIVE_STREAM_MODE_WINDOW: 5,
        LIVE_STREAM_MODE_POST: 4,
        LIVE_STREAM_MODE_LP: 3,
        LIVE_STREAM_MODE_LIVE: 2,
        LIVE_STREAM_MODE_DVR: 1,
        LIVE_STREAM_MODE_UNKNOWN: 0
    };
    Qu[Qu.LIVE_STREAM_MODE_WINDOW] = "LIVE_STREAM_MODE_WINDOW";
    Qu[Qu.LIVE_STREAM_MODE_POST] = "LIVE_STREAM_MODE_POST";
    Qu[Qu.LIVE_STREAM_MODE_LP] = "LIVE_STREAM_MODE_LP";
    Qu[Qu.LIVE_STREAM_MODE_LIVE] = "LIVE_STREAM_MODE_LIVE";
    Qu[Qu.LIVE_STREAM_MODE_DVR] = "LIVE_STREAM_MODE_DVR";
    Qu[Qu.LIVE_STREAM_MODE_UNKNOWN] = "LIVE_STREAM_MODE_UNKNOWN";
    var Ru = {
        VIDEO_STREAM_TYPE_VOD: 3,
        VIDEO_STREAM_TYPE_DVR: 2,
        VIDEO_STREAM_TYPE_LIVE: 1,
        VIDEO_STREAM_TYPE_UNSPECIFIED: 0
    };
    Ru[Ru.VIDEO_STREAM_TYPE_VOD] = "VIDEO_STREAM_TYPE_VOD";
    Ru[Ru.VIDEO_STREAM_TYPE_DVR] = "VIDEO_STREAM_TYPE_DVR";
    Ru[Ru.VIDEO_STREAM_TYPE_LIVE] = "VIDEO_STREAM_TYPE_LIVE";
    Ru[Ru.VIDEO_STREAM_TYPE_UNSPECIFIED] = "VIDEO_STREAM_TYPE_UNSPECIFIED";
    var Su = {
        YT_IDB_TRANSACTION_TYPE_READ: 2,
        YT_IDB_TRANSACTION_TYPE_WRITE: 1,
        YT_IDB_TRANSACTION_TYPE_UNKNOWN: 0
    };
    Su[Su.YT_IDB_TRANSACTION_TYPE_READ] = "YT_IDB_TRANSACTION_TYPE_READ";
    Su[Su.YT_IDB_TRANSACTION_TYPE_WRITE] = "YT_IDB_TRANSACTION_TYPE_WRITE";
    Su[Su.YT_IDB_TRANSACTION_TYPE_UNKNOWN] = "YT_IDB_TRANSACTION_TYPE_UNKNOWN";
    var Tu = {
        PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN: 2,
        PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT: 1,
        PLAYER_ROTATION_TYPE_UNKNOWN: 0
    };
    Tu[Tu.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN] = "PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
    Tu[Tu.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT] = "PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";
    Tu[Tu.PLAYER_ROTATION_TYPE_UNKNOWN] = "PLAYER_ROTATION_TYPE_UNKNOWN";
    var Uu = "actionVisualElement spinnerInfo cacheAttempts resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo inlineToWatchInfo mediaEngineMetadata miniAppInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo transcodingContext creationModesContext cameraMetadata producerMediaAssetMetadata".split(" ");

    function Vu(a, b) {
        Gp.call(this, 1, arguments);
        this.timer = b
    }
    v(Vu, Gp);
    var Wu = new Hp;
    var Xu = x.ytLoggingLatencyUsageStats_ || {};
    A("ytLoggingLatencyUsageStats_", Xu);

    function Yu() {
        this.h = 0
    }

    function Zu() {
        Yu.h || (Yu.h = new Yu);
        return Yu.h
    }
    Yu.prototype.tick = function(a, b, c, d) {
        $u(this, "tick_" + a + "_" + b) || (c = {
            timestamp: c,
            cttAuthInfo: d
        }, R("web_csi_via_jspb") ? (d = new wl, F(d, 1, a), F(d, 2, b), a = new zl, be(a, wl, 5, Al, d), dt(a, c)) : Jn("latencyActionTicked", {
            tickName: a,
            clientActionNonce: b
        }, c))
    };
    Yu.prototype.info = function(a, b, c) {
        var d = Object.keys(a).join("");
        $u(this, "info_" + d + "_" + b) || (a = Object.assign({}, a), a.clientActionNonce = b, Jn("latencyActionInfo", a, {
            cttAuthInfo: c
        }))
    };
    Yu.prototype.jspbInfo = function(a, b, c) {
        for (var d = "", e = 0; e < a.toJSON().length; e++) void 0 !== a.toJSON()[e] && (d = 0 === e ? d.concat("" + e) : d.concat("_" + e));
        $u(this, "info_" + d + "_" + b) || (F(a, 2, b), b = {
            cttAuthInfo: c
        }, c = new zl, be(c, ul, 7, Al, a), dt(c, b))
    };
    Yu.prototype.span = function(a, b, c) {
        var d = Object.keys(a).join("");
        $u(this, "span_" + d + "_" + b) || (a.clientActionNonce = b, Jn("latencyActionSpan", a, {
            cttAuthInfo: c
        }))
    };

    function $u(a, b) {
        Xu[b] = Xu[b] || {
            count: 0
        };
        var c = Xu[b];
        c.count++;
        c.time = S();
        a.h || (a.h = vn(function() {
            var d = S(),
                e;
            for (e in Xu) Xu[e] && 6E4 < d - Xu[e].time && delete Xu[e];
            a && (a.h = 0)
        }, 5E3));
        return 5 < c.count ? (6 === c.count && 1 > 1E5 * Math.random() && (c = new rn("CSI data exceeded logging limit with key", b.split("_")), 0 <= b.indexOf("plev") || mt(c)), !0) : !1
    };
    var av = window;

    function bv() {
        this.timing = {};
        this.clearResourceTimings = function() {};
        this.webkitClearResourceTimings = function() {};
        this.mozClearResourceTimings = function() {};
        this.msClearResourceTimings = function() {};
        this.oClearResourceTimings = function() {}
    }

    function cv() {
        var a;
        if (R("csi_use_performance_navigation_timing") || R("csi_use_performance_navigation_timing_tvhtml5")) {
            var b, c, d, e = null == dv ? void 0 : null == (a = dv.getEntriesByType) ? void 0 : null == (b = a.call(dv, "navigation")) ? void 0 : null == (c = b[0]) ? void 0 : null == (d = c.toJSON) ? void 0 : d.call(c);
            e ? (e.requestStart = ev(e.requestStart), e.responseEnd = ev(e.responseEnd), e.redirectStart = ev(e.redirectStart), e.redirectEnd = ev(e.redirectEnd), e.domainLookupEnd = ev(e.domainLookupEnd), e.connectStart = ev(e.connectStart), e.connectEnd =
                ev(e.connectEnd), e.responseStart = ev(e.responseStart), e.secureConnectionStart = ev(e.secureConnectionStart), e.domainLookupStart = ev(e.domainLookupStart), e.isPerformanceNavigationTiming = !0, a = e) : a = dv.timing
        } else a = dv.timing;
        return a
    }

    function ev(a) {
        return Math.round(fv() + a)
    }

    function fv() {
        return (R("csi_use_time_origin") || R("csi_use_time_origin_tvhtml5")) && dv.timeOrigin ? Math.floor(dv.timeOrigin) : dv.timing.navigationStart
    }
    var dv = av.performance || av.mozPerformance || av.msPerformance || av.webkitPerformance || new bv;
    var gv = !1,
        hv = {
            'script[name="scheduler/scheduler"]': "sj",
            'script[name="player/base"]': "pj",
            'link[rel="stylesheet"][name="www-player"]': "pc",
            'link[rel="stylesheet"][name="player/www-player"]': "pc",
            'script[name="desktop_polymer/desktop_polymer"]': "dpj",
            'link[rel="import"][name="desktop_polymer"]': "dph",
            'script[name="mobile-c3"]': "mcj",
            'link[rel="stylesheet"][name="mobile-c3"]': "mcc",
            'script[name="player-plasma-ias-phone/base"]': "mcppj",
            'script[name="player-plasma-ias-tablet/base"]': "mcptj",
            'link[rel="stylesheet"][name="mobile-polymer-player-ias"]': "mcpc",
            'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]': "mcpsc",
            'script[name="mobile_blazer_core_mod"]': "mbcj",
            'link[rel="stylesheet"][name="mobile_blazer_css"]': "mbc",
            'script[name="mobile_blazer_logged_in_users_mod"]': "mbliuj",
            'script[name="mobile_blazer_logged_out_users_mod"]': "mblouj",
            'script[name="mobile_blazer_noncore_mod"]': "mbnj",
            "#player_css": "mbpc",
            'script[name="mobile_blazer_desktopplayer_mod"]': "mbpj",
            'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]': "mbtc",
            'script[name="mobile_blazer_watch_mod"]': "mbwj"
        };
    Ya(dv.clearResourceTimings || dv.webkitClearResourceTimings || dv.mozClearResourceTimings || dv.msClearResourceTimings || dv.oClearResourceTimings || db, dv);

    function iv(a, b, c, d) {
        if (null !== b) {
            if ("yt_lt" === a) {
                var e = "string" === typeof b ? b : "" + b;
                xu(c).loadType = e
            }(a = Lu(a, b, c)) && jv(a, c, d)
        }
    }

    function jv(a, b, c) {
        if (!R("web_csi_via_jspb") || (void 0 === c ? 0 : c)) c = Du(b || ""), qu(c.info, a), a.loadType && (c = a.loadType, xu(b).loadType = c), qu(Au(b), a), c = Bu(b), b = vu(b).cttAuthInfo, Zu().info(a, c, b);
        else {
            c = new ul;
            var d = Object.keys(a);
            a = Object.values(a);
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                try {
                    switch (f) {
                        case "actionType":
                            F(c, 1, W[a[e]]);
                            break;
                        case "clientActionNonce":
                            F(c, 2, a[e]);
                            break;
                        case "clientScreenNonce":
                            F(c, 4, a[e]);
                            break;
                        case "loadType":
                            F(c, 3, a[e]);
                            break;
                        case "isPrewarmedLaunch":
                            F(c, 92, a[e]);
                            break;
                        case "isFirstInstall":
                            F(c,
                                55, a[e]);
                            break;
                        case "networkType":
                            F(c, 5, Mu[a[e]]);
                            break;
                        case "connectionType":
                            F(c, 26, X[a[e]]);
                            break;
                        case "detailedConnectionType":
                            F(c, 27, Y[a[e]]);
                            break;
                        case "isVisible":
                            F(c, 6, a[e]);
                            break;
                        case "playerType":
                            F(c, 7, Nu[a[e]]);
                            break;
                        case "clientPlaybackNonce":
                            F(c, 8, a[e]);
                            break;
                        case "adClientPlaybackNonce":
                            F(c, 28, a[e]);
                            break;
                        case "previousCpn":
                            F(c, 77, a[e]);
                            break;
                        case "targetCpn":
                            F(c, 76, a[e]);
                            break;
                        case "isMonetized":
                            F(c, 9, a[e]);
                            break;
                        case "isPrerollAllowed":
                            F(c, 16, a[e]);
                            break;
                        case "isPrerollShown":
                            F(c, 17,
                                a[e]);
                            break;
                        case "adType":
                            F(c, 12, a[e]);
                            break;
                        case "adTypesAllowed":
                            F(c, 36, a[e]);
                            break;
                        case "adNetworks":
                            F(c, 37, a[e]);
                            break;
                        case "previousAction":
                            F(c, 13, W[a[e]]);
                            break;
                        case "isRedSubscriber":
                            F(c, 14, a[e]);
                            break;
                        case "serverTimeMs":
                            ee(c, 15, a[e]);
                            break;
                        case "videoId":
                            c.setVideoId(a[e]);
                            break;
                        case "adVideoId":
                            F(c, 20, a[e]);
                            break;
                        case "targetVideoId":
                            F(c, 78, a[e]);
                            break;
                        case "adBreakType":
                            F(c, 21, Ou[a[e]]);
                            break;
                        case "isNavigation":
                            F(c, 25, a[e]);
                            break;
                        case "viewportHeight":
                            ee(c, 29, a[e]);
                            break;
                        case "viewportWidth":
                            ee(c,
                                30, a[e]);
                            break;
                        case "screenHeight":
                            ee(c, 84, a[e]);
                            break;
                        case "screenWidth":
                            ee(c, 85, a[e]);
                            break;
                        case "browseId":
                            F(c, 31, a[e]);
                            break;
                        case "isCacheHit":
                            F(c, 32, a[e]);
                            break;
                        case "httpProtocol":
                            F(c, 33, a[e]);
                            break;
                        case "transportProtocol":
                            F(c, 34, a[e]);
                            break;
                        case "searchQuery":
                            F(c, 41, a[e]);
                            break;
                        case "isContinuation":
                            F(c, 42, a[e]);
                            break;
                        case "availableProcessors":
                            ee(c, 43, a[e]);
                            break;
                        case "sdk":
                            F(c, 44, a[e]);
                            break;
                        case "isLocalStream":
                            F(c, 45, a[e]);
                            break;
                        case "navigationRequestedSameUrl":
                            F(c, 64, a[e]);
                            break;
                        case "shellStartupDurationMs":
                            ee(c,
                                70, a[e]);
                            break;
                        case "appInstallDataAgeMs":
                            ee(c, 73, a[e]);
                            break;
                        case "latencyActionError":
                            F(c, 71, Pu[a[e]]);
                            break;
                        case "actionStep":
                            ee(c, 79, a[e]);
                            break;
                        case "jsHeapSizeLimit":
                            F(c, 80, a[e]);
                            break;
                        case "totalJsHeapSize":
                            F(c, 81, a[e]);
                            break;
                        case "usedJsHeapSize":
                            F(c, 82, a[e]);
                            break;
                        case "sourceVideoDurationMs":
                            F(c, 90, a[e]);
                            break;
                        case "videoOutputFrames":
                            F(c, 93, a[e]);
                            break;
                        case "isResume":
                            F(c, 104, a[e]);
                            break;
                        case "debugTicksExcluded":
                            F(c, 105, a[e]);
                            break;
                        case "abandonedPing":
                            F(c, 113, a[e]);
                            break;
                        case "adPrebufferedTimeSecs":
                            ee(c,
                                39, a[e]);
                            break;
                        case "isLivestream":
                            F(c, 47, a[e]);
                            break;
                        case "liveStreamMode":
                            F(c, 91, Qu[a[e]]);
                            break;
                        case "adCpn2":
                            F(c, 48, a[e]);
                            break;
                        case "adDaiDriftMillis":
                            F(c, 49, a[e]);
                            break;
                        case "videoStreamType":
                            F(c, 53, Ru[a[e]]);
                            break;
                        case "playbackRequiresTap":
                            F(c, 56, a[e]);
                            break;
                        case "performanceNavigationTiming":
                            F(c, 67, a[e]);
                            break;
                        case "transactionType":
                            F(c, 74, Su[a[e]]);
                            break;
                        case "playerRotationType":
                            F(c, 101, Tu[a[e]]);
                            break;
                        case "allowedPreroll":
                            F(c, 10, a[e]);
                            break;
                        case "shownPreroll":
                            F(c, 11, a[e]);
                            break;
                        case "getHomeRequestId":
                            F(c,
                                57, a[e]);
                            break;
                        case "getSearchRequestId":
                            F(c, 60, a[e]);
                            break;
                        case "getPlayerRequestId":
                            F(c, 61, a[e]);
                            break;
                        case "getWatchNextRequestId":
                            F(c, 62, a[e]);
                            break;
                        case "getBrowseRequestId":
                            F(c, 63, a[e]);
                            break;
                        case "getLibraryRequestId":
                            F(c, 66, a[e]);
                            break;
                        case "isTransformerEnabledForFeature":
                            F(c, 106, a[e]);
                            break;
                        case "sourceVideoFrameCount":
                            F(c, 109, a[e]);
                            break;
                        default:
                            Uu.includes(f) && Xl(new rn("Codegen laipb translator asked to translate message field", "" + f))
                    }
                } catch (g) {
                    Xl(Error("Codegen laipb translator failed to set " +
                        f))
                }
            }
            kv(c, b)
        }
    }

    function kv(a, b) {
        var c = ie(a, 3);
        c && (xu(b).loadType = c);
        Du(b || "").jspbInfo.push(a);
        c = Bu(b);
        b = vu(b).cttAuthInfo;
        Zu().jspbInfo(a, c, b)
    }

    function lv(a, b, c) {
        if (!b && "_" !== a[0]) {
            var d = a;
            dv.mark && (0 == d.lastIndexOf("mark_", 0) || (d = "mark_" + d), c && (d += " (" + c + ")"), dv.mark(d))
        }
        d = Du(c || "");
        d.tick[a] = b || S();
        if (d.callback && d.callback[a]) {
            d = t(d.callback[a]);
            for (var e = d.next(); !e.done; e = d.next()) e = e.value, e()
        }
        d = zu(c);
        d.gelTicks && (d.gelTicks[a] = !0);
        e = yu(c);
        d = b || S();
        R("log_repeated_ytcsi_ticks") ? a in e || (e[a] = d) : e[a] = d;
        e = Bu(c);
        var f = vu(c).cttAuthInfo;
        "_start" === a ? (a = Zu(), $u(a, "baseline_" + e) || (b = {
            timestamp: b,
            cttAuthInfo: f
        }, R("web_csi_via_jspb") ? (a = new pl,
            F(a, 1, e), e = new zl, be(e, pl, 6, Al, a), dt(e, b)) : Jn("latencyActionBaselined", {
            clientActionNonce: e
        }, b))) : Zu().tick(a, e, b, f);
        mv(c);
        return d
    }

    function nv() {
        var a = document;
        if ("visibilityState" in a) a = a.visibilityState;
        else {
            var b = Br + "VisibilityState";
            a = b in a ? a[b] : void 0
        }
        switch (a) {
            case "hidden":
                return 0;
            case "visible":
                return 1;
            case "prerender":
                return 2;
            case "unloaded":
                return 3;
            default:
                return -1
        }
    }

    function ov(a) {
        var b = cv(),
            c = fv(),
            d = O("CSI_START_TIMESTAMP_MILLIS", 0);
        0 < d && !R("embeds_web_enable_csi_start_override_killswitch") && (c = d);
        c && (lv("srt", b.responseStart), 1 !== a.prerender && lv("_start", c, void 0));
        a = pv();
        0 < a && lv("fpt", a);
        a = cv();
        a.isPerformanceNavigationTiming && jv({
            performanceNavigationTiming: !0
        });
        lv("nreqs", a.requestStart, void 0);
        lv("nress", a.responseStart, void 0);
        lv("nrese", a.responseEnd, void 0);
        0 < a.redirectEnd - a.redirectStart && (lv("nrs", a.redirectStart, void 0), lv("nre", a.redirectEnd, void 0));
        0 < a.domainLookupEnd - a.domainLookupStart && (lv("ndnss", a.domainLookupStart, void 0), lv("ndnse", a.domainLookupEnd, void 0));
        0 < a.connectEnd - a.connectStart && (lv("ntcps", a.connectStart, void 0), lv("ntcpe", a.connectEnd, void 0));
        a.secureConnectionStart >= fv() && 0 < a.connectEnd - a.secureConnectionStart && (lv("nstcps", a.secureConnectionStart, void 0), lv("ntcpe", a.connectEnd, void 0));
        dv && "getEntriesByType" in dv && qv()
    }

    function rv(a, b) {
        a = document.querySelector(a);
        if (!a) return !1;
        var c = "",
            d = a.nodeName;
        "SCRIPT" === d ? (c = a.src, c || (c = a.getAttribute("data-timing-href")) && (c = window.location.protocol + c)) : "LINK" === d && (c = a.href);
        qc() && a.setAttribute("nonce", qc());
        return c ? (a = dv.getEntriesByName(c)) && a[0] && (a = a[0], c = fv(), lv("rsf_" + b, c + Math.round(a.fetchStart)), lv("rse_" + b, c + Math.round(a.responseEnd)), void 0 !== a.transferSize && 0 === a.transferSize) ? !0 : !1 : !1
    }

    function sv() {
        var a = [];
        if (document.querySelector && dv && dv.getEntriesByName)
            for (var b in hv)
                if (hv.hasOwnProperty(b)) {
                    var c = hv[b];
                    rv(b, c) && a.push(c)
                }
        return a
    }

    function qv() {
        var a = window.location.protocol,
            b = dv.getEntriesByType("resource");
        b = hb(b, function(c) {
            return 0 === c.name.indexOf(a + "//fonts.gstatic.com/s/")
        });
        (b = ib(b, function(c, d) {
            return d.duration > c.duration ? d : c
        }, {
            duration: 0
        })) && 0 < b.startTime && 0 < b.responseEnd && (lv("wffs", ev(b.startTime)), lv("wffe", ev(b.responseEnd)))
    }

    function tv(a) {
        var b = uv("aft", a);
        if (b) return b;
        b = O((a || "") + "TIMING_AFT_KEYS", ["ol"]);
        for (var c = b.length, d = 0; d < c; d++) {
            var e = uv(b[d], a);
            if (e) return e
        }
        return NaN
    }

    function uv(a, b) {
        if (a = yu(b)[a]) return "number" === typeof a ? a : a[a.length - 1]
    }

    function mv(a) {
        var b = uv("_start", a),
            c = tv(a);
        b && c && !gv && (Jp(Wu, new Vu(Math.round(c - b), a)), gv = !0)
    }

    function vv(a, b) {
        for (var c = t(Object.keys(b)), d = c.next(); !d.done; d = c.next())
            if (d = d.value, !Object.keys(a).includes(d) || "object" === typeof b[d] && !vv(a[d], b[d])) return !1;
        return !0
    }

    function pv() {
        if (dv.getEntriesByType) {
            var a = dv.getEntriesByType("paint");
            if (a = jb(a, function(b) {
                    return "first-paint" === b.name
                })) return ev(a.startTime)
        }
        a = dv.timing;
        return a.ye ? Math.max(0, a.ye) : 0
    };

    function wv(a, b) {
        Wl(function() {
            Du("").info.actionType = a;
            b && Sl("TIMING_AFT_KEYS", b);
            Sl("TIMING_ACTION", a);
            if (R("web_csi_via_jspb")) {
                var c = O("TIMING_INFO", {}),
                    d = new ul;
                c = t(Object.entries(c));
                for (var e = c.next(); !e.done; e = c.next()) {
                    var f = t(e.value);
                    e = f.next().value;
                    f = f.next().value;
                    switch (e) {
                        case "GetBrowse_rid":
                            vl(d, sl(rl(e), String(f)));
                            break;
                        case "GetGuide_rid":
                            vl(d, sl(rl(e), String(f)));
                            break;
                        case "GetHome_rid":
                            vl(d, sl(rl(e), String(f)));
                            break;
                        case "GetPlayer_rid":
                            vl(d, sl(rl(e), String(f)));
                            break;
                        case "GetSearch_rid":
                            vl(d,
                                sl(rl(e), String(f)));
                            break;
                        case "GetSettings_rid":
                            vl(d, sl(rl(e), String(f)));
                            break;
                        case "GetTrending_rid":
                            vl(d, sl(rl(e), String(f)));
                            break;
                        case "GetWatchNext_rid":
                            vl(d, sl(rl(e), String(f)));
                            break;
                        case "yt_red":
                            F(d, 14, !!f);
                            break;
                        case "yt_ad":
                            F(d, 9, !!f)
                    }
                }
                kv(d);
                d = new ul;
                d = F(d, 25, !0);
                d = F(d, 1, W[Ku(O("TIMING_ACTION"))]);
                (c = O("PREVIOUS_ACTION")) && F(d, 13, W[Ku(c)]);
                (c = O("CLIENT_PROTOCOL")) && F(d, 33, c);
                (c = O("CLIENT_TRANSPORT")) && F(d, 34, c);
                (c = At()) && "UNDEFINED_CSN" !== c && F(d, 4, c);
                c = nv();
                1 !== c && -1 !== c || F(d, 6, !0);
                c = wu();
                xu();
                F(d, 3, "cold");
                ov(c);
                c = sv();
                if (0 < c.length)
                    for (c = t(c), e = c.next(); !e.done; e = c.next()) e = e.value, f = new tl, F(f, 1, e), de(d, 83, tl, f);
                kv(d)
            } else {
                d = O("TIMING_INFO", {});
                for (c in d) d.hasOwnProperty(c) && iv(c, d[c]);
                d = {
                    isNavigation: !0,
                    actionType: Ku(O("TIMING_ACTION"))
                };
                if (c = O("PREVIOUS_ACTION")) d.previousAction = Ku(c);
                if (c = O("CLIENT_PROTOCOL")) d.httpProtocol = c;
                if (c = O("CLIENT_TRANSPORT")) d.transportProtocol = c;
                (c = At()) && "UNDEFINED_CSN" !== c && (d.clientScreenNonce = c);
                c = nv();
                if (1 === c || -1 === c) d.isVisible = !0;
                xu();
                wu();
                d.loadType = "cold";
                ov(wu());
                c = sv();
                if (0 < c.length)
                    for (d.resourceInfo = [], c = t(c), e = c.next(); !e.done; e = c.next()) d.resourceInfo.push({
                        resourceCache: e.value
                    });
                jv(d)
            }
            d = wu();
            c = Au();
            if ("cold" === xu().loadType && ("cold" === d.yt_lt || "cold" === c.loadType)) {
                e = yu();
                f = zu();
                f = f.gelTicks ? f.gelTicks : f.gelTicks = {};
                for (var g in e)
                    if (!(g in f))
                        if ("number" === typeof e[g]) lv(g, uv(g));
                        else if (R("log_repeated_ytcsi_ticks"))
                    for (var h = t(e[g]), l = h.next(); !l.done; l = h.next()) l = l.value, lv(g.slice(1), l);
                g = {};
                e = !1;
                f = t(Object.keys(d));
                for (h = f.next(); !h.done; h = f.next()) h = h.value, (h = Lu(h, d[h])) && !vv(Au(), h) && (qu(c, h), qu(g, h), e = !0);
                e && jv(g)
            }
            A("ytglobal.timingready_", !0);
            g = O("TIMING_ACTION");
            B("ytglobal.timingready_") && g && xv() && tv() && mv()
        })()
    }

    function yv(a, b, c, d) {
        Wl(iv)(a, b, c, d)
    }

    function zv(a, b, c) {
        return Wl(lv)(a, b, c)
    }

    function xv() {
        return Wl(function() {
            return "_start" in yu()
        })()
    }

    function Av() {
        Wl(function() {
            var a = Bu();
            requestAnimationFrame(function() {
                setTimeout(function() {
                    a === Bu() && zv("ol", void 0, void 0)
                }, 0)
            })
        })()
    }
    var Bv = window;
    Bv.ytcsi && (Bv.ytcsi.info = yv, Bv.ytcsi.tick = zv);
    var Cv = "tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),
        Dv = ["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];

    function Ev(a, b, c, d) {
        this.j = a;
        this.X = b;
        this.m = c;
        this.l = d;
        this.i = void 0;
        this.h = new Map;
        a.jb || (a.jb = {});
        a.jb = Object.assign({}, pu, a.jb)
    }

    function Fv(a, b, c, d) {
        if (void 0 !== Ev.h) {
            if (d = Ev.h, a = [a !== d.j, b !== d.X, c !== d.m, !1, !1, void 0 !== d.i], a.some(function(e) {
                    return e
                })) throw new rn("InnerTubeTransportService is already initialized", a);
        } else Ev.h = new Ev(a, b, c, d)
    }

    function Gv(a) {
        var b = {
            signalServiceEndpoint: {
                signal: "GET_DATASYNC_IDS"
            }
        };
        var c = void 0 === c ? Wm : c;
        var d = hu(b, a.j);
        if (!d) return Lf(new rn("Error: No request builder found for command.", b));
        var e = d.m(b, void 0, c);
        return e ? new Ff(function(f) {
            var g, h, l;
            return w(function(m) {
                if (1 == m.h) {
                    h = "cors" === (null == (g = e.hb) ? void 0 : g.mode) ? "cors" : void 0;
                    if (a.m.Ve) {
                        var p = e.config,
                            r;
                        p = null == p ? void 0 : null == (r = p.Vb) ? void 0 : r.sessionIndex;
                        r = Vm(0, {
                            sessionIndex: p
                        });
                        l = Object.assign({}, Hv(h), r);
                        return m.A(2)
                    }
                    return m.yield(Iv(e.config,
                        h), 3)
                }
                2 != m.h && (l = m.i);
                f(Jv(a, e, l));
                m.h = 0
            })
        }) : Lf(new rn("Error: Failed to build request for command.", b))
    }

    function Kv(a, b, c) {
        var d;
        if (b && !(null == b ? 0 : null == (d = b.Nf) ? 0 : d.Rf) && a.l) {
            d = t(Cv);
            for (var e = d.next(); !e.done; e = d.next()) e = e.value, a.l[e] && a.l[e].handleResponse(b, c)
        }
    }

    function Jv(a, b, c) {
        var d, e, f, g, h, l, m, p, r, y, u, z, D, G, M, P, T, da, Z, na, Ka, xa, ya, ua, ma, L, kf, Wc, lf;
        return w(function(ja) {
            switch (ja.h) {
                case 1:
                    ja.A(2);
                    break;
                case 3:
                    if ((d = ja.i) && !d.isExpired()) return ja.return(Promise.resolve(d.h()));
                case 2:
                    if (!(null == (e = b) ? 0 : null == (f = e.Oa) ? 0 : f.context)) {
                        ja.A(4);
                        break
                    }
                    g = b.Oa.context;
                    if (!R("web_async_context_processor")) {
                        h = t([]);
                        for (l = h.next(); !l.done; l = h.next()) m = l.value, m.Kf(g);
                        ja.A(4);
                        break
                    }
                    return ja.yield([].reduce(function(mf, xh) {
                            return mf.then(function() {
                                return xh.Jf(g)
                            })
                        },
                        Promise.resolve()), 4);
                case 4:
                    if (null == (p = a.i) || !p.Of(b.input, b.Oa)) {
                        ja.A(7);
                        break
                    }
                    return ja.yield(a.i.Gf(b.input, b.Oa), 8);
                case 8:
                    return r = ja.i, R("kevlar_process_local_innertube_responses_killswitch") || Kv(a, r, b), ja.return(r);
                case 7:
                    return (z = null == (u = b.config) ? void 0 : u.Ia) && a.h.has(z) && R("web_memoize_inflight_requests") ? y = a.h.get(z) : (D = JSON.stringify(b.Oa), P = null != (M = null == (G = b.hb) ? void 0 : G.headers) ? M : {}, b.hb = Object.assign({}, b.hb, {
                        headers: Object.assign({}, P, c)
                    }), T = Object.assign({}, b.hb), "POST" === b.hb.method && (T = Object.assign({},
                        T, {
                            body: D
                        })), (null == (da = b.config) ? 0 : da.Fe) && zv(b.config.Fe), Z = function() {
                        return a.X.fetch(b.input, T, b.config)
                    }, y = Z(), z && a.h.set(z, y)), ja.yield(y, 9);
                case 9:
                    if ((na = ja.i) && "error" in na && (null == (Ka = na) ? 0 : null == (xa = Ka.error) ? 0 : xa.details))
                        for (ya = na.error.details, ua = t(ya), ma = ua.next(); !ma.done; ma = ua.next()) L = ma.value, (kf = L["@type"]) && -1 < Dv.indexOf(kf) && (delete L["@type"], na = L);
                    z && a.h.has(z) && a.h.delete(z);
                    (null == (Wc = b.config) ? 0 : Wc.Ge) && zv(b.config.Ge);
                    if (na || null == (lf = a.i) || !lf.Af(b.input, b.Oa)) {
                        ja.A(10);
                        break
                    }
                    return ja.yield(a.i.Ff(b.input, b.Oa), 11);
                case 11:
                    na = ja.i;
                case 10:
                    return Kv(a, na, b), ja.return(na || void 0)
            }
        })
    }

    function Iv(a, b) {
        var c, d, e, f;
        return w(function(g) {
            if (1 == g.h) {
                e = null == (c = a) ? void 0 : null == (d = c.Vb) ? void 0 : d.sessionIndex;
                var h = g.yield;
                var l = Kf(Vm(0, {
                    sessionIndex: e
                }));
                return h.call(g, l, 2)
            }
            f = g.i;
            return g.return(Promise.resolve(Object.assign({}, Hv(b), f)))
        })
    }

    function Hv(a) {
        var b = {
            "Content-Type": "application/json"
        };
        O("EOM_VISITOR_DATA") ? b["X-Goog-EOM-Visitor-Id"] = O("EOM_VISITOR_DATA") : O("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = O("VISITOR_DATA"));
        b["X-Youtube-Bootstrap-Logged-In"] = O("LOGGED_IN", !1);
        "cors" !== a && ((a = O("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = O("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a = O("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a), (a = O("DOMAIN_ADMIN_STATE")) &&
            (b["X-Youtube-Domain-Admin-State"] = a));
        return b
    };
    var Lv = new bs("INNERTUBE_TRANSPORT_TOKEN");
    var Mv = ["share/get_web_player_share_panel"],
        Nv = ["feedback"],
        Ov = ["notification/modify_channel_preference"],
        Pv = ["browse/edit_playlist"],
        Qv = ["subscription/subscribe"],
        Rv = ["subscription/unsubscribe"];

    function Sv() {}
    v(Sv, mu);
    Sv.prototype.j = function() {
        return Qv
    };
    Sv.prototype.h = function(a) {
        return ns(a, Jl) || void 0
    };
    Sv.prototype.i = function(a, b, c) {
        c = void 0 === c ? {} : c;
        b.channelIds && (a.channelIds = b.channelIds);
        b.siloName && (a.siloName = b.siloName);
        b.params && (a.params = b.params);
        c.botguardResponse && (a.botguardResponse = c.botguardResponse);
        c.feature && (a.clientFeature = c.feature)
    };
    ea.Object.defineProperties(Sv.prototype, {
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !0
            }
        }
    });

    function Tv() {}
    v(Tv, mu);
    Tv.prototype.j = function() {
        return Rv
    };
    Tv.prototype.h = function(a) {
        return ns(a, Il) || void 0
    };
    Tv.prototype.i = function(a, b) {
        b.channelIds && (a.channelIds = b.channelIds);
        b.siloName && (a.siloName = b.siloName);
        b.params && (a.params = b.params)
    };
    ea.Object.defineProperties(Tv.prototype, {
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !0
            }
        }
    });

    function Uv() {}
    v(Uv, mu);
    Uv.prototype.j = function() {
        return Nv
    };
    Uv.prototype.h = function(a) {
        return ns(a, Mk) || void 0
    };
    Uv.prototype.i = function(a, b, c) {
        a.feedbackTokens = [];
        b.feedbackToken && a.feedbackTokens.push(b.feedbackToken);
        if (b = b.cpn || c.cpn) a.feedbackContext = {
            cpn: b
        };
        a.isFeedbackTokenUnencrypted = !!c.is_feedback_token_unencrypted;
        a.shouldMerge = !1;
        c.extra_feedback_tokens && (a.shouldMerge = !0, a.feedbackTokens = a.feedbackTokens.concat(c.extra_feedback_tokens))
    };
    ea.Object.defineProperties(Uv.prototype, {
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !0
            }
        }
    });

    function Vv() {}
    v(Vv, mu);
    Vv.prototype.j = function() {
        return Ov
    };
    Vv.prototype.h = function(a) {
        return ns(a, Hl) || void 0
    };
    Vv.prototype.i = function(a, b) {
        b.params && (a.params = b.params);
        b.secondaryParams && (a.secondaryParams = b.secondaryParams)
    };

    function Wv() {}
    v(Wv, mu);
    Wv.prototype.j = function() {
        return Pv
    };
    Wv.prototype.h = function(a) {
        return ns(a, Gl) || void 0
    };
    Wv.prototype.i = function(a, b) {
        b.actions && (a.actions = b.actions);
        b.params && (a.params = b.params);
        b.playlistId && (a.playlistId = b.playlistId)
    };

    function Xv() {}
    v(Xv, mu);
    Xv.prototype.j = function() {
        return Mv
    };
    Xv.prototype.h = function(a) {
        return ns(a, Fl)
    };
    Xv.prototype.i = function(a, b, c) {
        c = void 0 === c ? {} : c;
        b.serializedShareEntity && (a.serializedSharedEntity = b.serializedShareEntity);
        c.includeListId && (a.includeListId = !0)
    };
    var Yv = new bs("NETWORK_SLI_TOKEN");

    function Zv(a) {
        this.h = a
    }
    Zv.prototype.fetch = function(a, b) {
        var c = this,
            d, e, f;
        return w(function(g) {
            c.h && (d = vc(wc(5, Jc(a, "key"))) || "/UNKNOWN_PATH", c.h.start(d));
            e = b;
            R("wug_networking_gzip_request") && (e = Vp(b));
            f = new window.Request(a, e);
            return R("web_fetch_promise_cleanup_killswitch") ? g.return(Promise.resolve(fetch(f).then(function(h) {
                return c.handleResponse(h)
            }).catch(function(h) {
                mt(h)
            }))) : g.return(fetch(f).then(function(h) {
                return c.handleResponse(h)
            }).catch(function(h) {
                mt(h)
            }))
        })
    };
    Zv.prototype.handleResponse = function(a) {
        var b = a.text().then(function(c) {
            return JSON.parse(c.replace(")]}'", ""))
        });
        a.redirected || a.ok ? this.h && this.h.success() : (this.h && this.h.Df(), b = b.then(function(c) {
            mt(new rn("Error: API fetch failed", a.status, a.url, c));
            return Object.assign({}, c, {
                errorMetadata: {
                    status: a.status
                }
            })
        }));
        return b
    };
    Zv[as] = [new cs(Yv)];
    var $v = new bs("NETWORK_MANAGER_TOKEN");
    var aw;

    function bw() {
        var a = cw,
            b = dw,
            c = ew;
        this.l = fw;
        this.navigate = a;
        this.i = b;
        this.j = c;
        this.h = new Set
    }

    function gw(a, b, c) {
        if (hw(b)) iw(a, b, c);
        else {
            var d = a.l(b, c);
            if (null == c ? 0 : c.qc) d.qc = c.qc;
            0 === d.type ? a.navigate ? jw(d.command) ? kw(a, d.command) || (b = a.navigate(d) || [], Of(b).then(function() {
                    a.h.delete(d.command)
                })) : lt(Error("Error: Command handler page requests need to specify a url.")) : lt(Error("Error: Command handler navigate function was called but not set.")) : 1 === d.type ? a.i ? kw(a, d.command) || (b = a.i(d), Of(b).then(function() {
                    a.h.delete(d.command)
                })) : lt(Error("Error: Command handler handle service request function was called but not set.")) :
                2 === d.type && (a.j ? a.j(d) : lt(Error("Error: Command handler send action was called but not set.")))
        }
    }

    function kw(a, b) {
        if (a.h.has(b)) return !0;
        a.h.add(b);
        return !1
    }

    function hw(a) {
        var b = !!ns(a, vk),
            c;
        a = "CLIENT_SIGNAL" === (null == (c = ns(a, Kk)) ? void 0 : c.signal);
        return b || a
    }

    function iw(a, b, c) {
        var d = ns(b, vk);
        if (d) var e = (null == d ? void 0 : d.commands) || [];
        else {
            var f;
            if ("CLIENT_SIGNAL" === (null == (f = ns(b, Kk)) ? void 0 : f.signal)) {
                var g;
                e = (null == (g = ns(b, Kk)) ? void 0 : g.actions) || []
            }
        }
        if (e)
            for (b = t(e), e = b.next(); !e.done; e = b.next()) {
                e = e.value;
                try {
                    gw(a, e, c)
                } catch (h) {
                    h instanceof Error && lt(h)
                }
            } else lt(Error("Could not handle the meta command."))
    }

    function jw(a) {
        var b;
        return !(null == (b = ns(null == a ? void 0 : a.commandMetadata, Jk)) || !b.url)
    };

    function lw() {
        var a, b, c;
        return w(function(d) {
            if (1 == d.h) return a = is().resolve(Lv), a ? d.yield(Gv(a), 2) : (mt(Error("InnertubeTransportService unavailable in fetchDatasyncIds")), d.return(void 0));
            if (b = d.i) {
                if (b.errorMetadata) return mt(Error("Datasync IDs fetch responded with " + b.errorMetadata.status + ": " + b.error)), d.return(void 0);
                c = b.Bf;
                return d.return(c)
            }
            mt(Error("Network request to get Datasync IDs failed."));
            return d.return(void 0)
        })
    };
    var mw = x.caches,
        nw;

    function ow(a) {
        var b = a.indexOf(":");
        return -1 === b ? {
            ud: a
        } : {
            ud: a.substring(0, b),
            datasyncId: a.substring(b + 1)
        }
    }

    function pw() {
        return w(function(a) {
            if (void 0 !== nw) return a.return(nw);
            nw = new Promise(function(b) {
                var c;
                return w(function(d) {
                    switch (d.h) {
                        case 1:
                            return Aa(d, 2), d.yield(mw.open("test-only"), 4);
                        case 4:
                            return d.yield(mw.delete("test-only"), 5);
                        case 5:
                            Ba(d, 3);
                            break;
                        case 2:
                            if (c = Ca(d), c instanceof Error && "SecurityError" === c.name) return b(!1), d.return();
                        case 3:
                            b("caches" in window), d.h = 0
                    }
                })
            });
            return a.return(nw)
        })
    }

    function qw(a) {
        var b, c, d, e, f, g, h;
        w(function(l) {
            if (1 == l.h) return l.yield(pw(), 2);
            if (3 != l.h) {
                if (!l.i) return l.return(!1);
                b = [];
                return l.yield(mw.keys(), 3)
            }
            c = l.i;
            d = t(c);
            for (e = d.next(); !e.done; e = d.next()) f = e.value, g = ow(f), h = g.datasyncId, !h || a.includes(h) || b.push(mw.delete(f));
            return l.return(Promise.all(b).then(function(m) {
                return m.some(function(p) {
                    return p
                })
            }))
        })
    }

    function rw() {
        var a, b, c, d, e, f, g;
        return w(function(h) {
            if (1 == h.h) return h.yield(pw(), 2);
            if (3 != h.h) {
                if (!h.i) return h.return(!1);
                a = tn("cache contains other");
                return h.yield(mw.keys(), 3)
            }
            b = h.i;
            c = t(b);
            for (d = c.next(); !d.done; d = c.next())
                if (e = d.value, f = ow(e), (g = f.datasyncId) && g !== a) return h.return(!0);
            return h.return(!1)
        })
    };

    function sw() {
        try {
            return !!self.localStorage
        } catch (a) {
            return !1
        }
    };

    function tw(a) {
        a = a.match(/(.*)::.*::.*/);
        if (null !== a) return a[1]
    }

    function uw(a) {
        if (sw()) {
            var b = Object.keys(window.localStorage);
            b = t(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = tw(c);
                void 0 === d || a.includes(d) || self.localStorage.removeItem(c)
            }
        }
    }

    function vw() {
        if (!sw()) return !1;
        var a = tn(),
            b = Object.keys(window.localStorage);
        b = t(b);
        for (var c = b.next(); !c.done; c = b.next())
            if (c = tw(c.value), void 0 !== c && c !== a) return !0;
        return !1
    };

    function ww() {
        lw().then(function(a) {
            a && (Yo(a), qw(a), uw(a))
        })
    }

    function xw() {
        var a = new Mq;
        qi.ma(function() {
            var b, c, d, e;
            return w(function(f) {
                switch (f.h) {
                    case 1:
                        if (R("ytidb_clear_optimizations_killswitch")) {
                            f.A(2);
                            break
                        }
                        b = tn("clear");
                        if (b.startsWith("V") && b.endsWith("||")) {
                            var g = [b];
                            Yo(g);
                            qw(g);
                            uw(g);
                            return f.return()
                        }
                        c = vw();
                        return f.yield(rw(), 3);
                    case 3:
                        return d = f.i, f.yield(Zo(), 4);
                    case 4:
                        if (e = f.i, !c && !d && !e) return f.return();
                    case 2:
                        a.sa() ? ww() : a.l.add("publicytnetworkstatus-online", ww, !0, void 0, void 0), f.h = 0
                }
            })
        })
    };
    var Vh = ha(["data-"]);

    function yw(a) {
        a && (a.dataset ? a.dataset[zw("loaded")] = "true" : Uh(a))
    }

    function Aw(a, b) {
        return a ? a.dataset ? a.dataset[zw(b)] : a.getAttribute("data-" + b) : null
    }
    var Bw = {};

    function zw(a) {
        return Bw[a] || (Bw[a] = String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        }))
    };
    var Cw = /\.vflset|-vfl[a-zA-Z0-9_+=-]+/,
        Dw = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;

    function Ew(a, b, c) {
        c = void 0 === c ? null : c;
        if (window.spf && spf.script) {
            c = "";
            if (a) {
                var d = a.indexOf("jsbin/"),
                    e = a.lastIndexOf(".js"),
                    f = d + 6; - 1 < d && -1 < e && e > f && (c = a.substring(f, e), c = c.replace(Cw, ""), c = c.replace(Dw, ""), c = c.replace("debug-", ""), c = c.replace("tracing-", ""))
            }
            spf.script.load(a, c, b)
        } else Fw(a, b, c)
    }

    function Fw(a, b, c) {
        c = void 0 === c ? null : c;
        var d = Gw(a),
            e = document.getElementById(d),
            f = e && Aw(e, "loaded"),
            g = e && !f;
        f ? b && b() : (b && (f = Vr(d, b), b = "" + Ta(b), Hw[b] = f), g || (e = Iw(a, d, function() {
            if (!Aw(e, "loaded")) {
                yw(e);
                Yr(d);
                var h = Za(Zr, d);
                rm(h, 0)
            }
        }, c)))
    }

    function Iw(a, b, c, d) {
        d = void 0 === d ? null : d;
        var e = sf("SCRIPT");
        e.id = b;
        e.onload = function() {
            c && setTimeout(c, 0)
        };
        e.onreadystatechange = function() {
            switch (e.readyState) {
                case "loaded":
                case "complete":
                    e.onload()
            }
        };
        d && e.setAttribute("nonce", d);
        Yh(e, rk(a));
        a = document.getElementsByTagName("head")[0] || document.body;
        a.insertBefore(e, a.firstChild);
        return e
    }

    function Jw(a) {
        a = Gw(a);
        var b = document.getElementById(a);
        b && (Zr(a), b.parentNode.removeChild(b))
    }

    function Kw(a, b) {
        a && b && (a = "" + Ta(b), (a = Hw[a]) && Xr(a))
    }

    function Gw(a) {
        var b = document.createElement("a");
        nc(b, a);
        a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
        return "js-" + tc(a)
    }
    var Hw = {};
    var Lw = [],
        Mw = !1;

    function Nw() {
        if (!R("disable_biscotti_fetch_for_ad_blocker_detection") && !R("disable_biscotti_fetch_entirely_for_all_web_clients") && Mt()) {
            var a = O("PLAYER_VARS", {});
            if ("1" != qb(a) && !Nt(a)) {
                var b = function() {
                    Mw = !0;
                    "google_ad_status" in window ? Sl("DCLKSTAT", 1) : Sl("DCLKSTAT", 2)
                };
                try {
                    Ew("//static.doubleclick.net/instream/ad_status.js", b)
                } catch (c) {}
                Lw.push(qi.ma(function() {
                    if (!(Mw || "google_ad_status" in window)) {
                        try {
                            Kw("//static.doubleclick.net/instream/ad_status.js", b)
                        } catch (c) {}
                        Mw = !0;
                        Sl("DCLKSTAT", 3)
                    }
                }, 5E3))
            }
        }
    }

    function Ow() {
        var a = Number(O("DCLKSTAT", 0));
        return isNaN(a) ? 0 : a
    };
    var Pw = window;

    function Qw() {
        var a, b;
        return "h5vcc" in Pw && (null == (a = Pw.h5vcc.traceEvent) ? 0 : a.traceBegin) && (null == (b = Pw.h5vcc.traceEvent) ? 0 : b.traceEnd) ? 1 : "performance" in Pw && Pw.performance.mark && Pw.performance.measure ? 2 : 0
    }

    function Rw(a) {
        switch (Qw()) {
            case 1:
                Pw.h5vcc.traceEvent.traceBegin("YTLR", a);
                break;
            case 2:
                Pw.performance.mark(a + "-start");
                break;
            case 0:
                break;
            default:
                Wh()
        }
    }

    function Sw(a) {
        switch (Qw()) {
            case 1:
                Pw.h5vcc.traceEvent.traceEnd("YTLR", a);
                break;
            case 2:
                var b = a + "-start",
                    c = a + "-end";
                Pw.performance.mark(c);
                Pw.performance.measure(a, b, c);
                break;
            case 0:
                break;
            default:
                Wh()
        }
    };
    var Tw = R("web_enable_lifecycle_monitoring") && 0 !== Qw();

    function Uw(a) {
        var b = this;
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? zn() : d;
        this.j = c;
        this.scheduler = d;
        this.i = new Lh;
        this.h = a;
        for (a = {
                Za: 0
            }; a.Za < this.h.length; a = {
                Db: a.Db,
                Za: a.Za
            }, a.Za++) a.Db = this.h[a.Za], c = function(e) {
            return function() {
                e.Db.Ec();
                b.h[e.Za].kc = !0;
                b.h.every(function(f) {
                    return !0 === f.kc
                }) && b.i.resolve()
            }
        }(a), d = this.getPriority(a.Db), d = wn(c, d), this.h[a.Za] = Object.assign({}, a.Db, {
            Ec: c,
            jobId: d
        })
    }

    function Vw(a) {
        var b = Array.from(a.h.keys()).sort(function(d, e) {
            return a.getPriority(a.h[e]) - a.getPriority(a.h[d])
        });
        b = t(b);
        for (var c = b.next(); !c.done; c = b.next()) c = a.h[c.value], void 0 === c.jobId || c.kc || (a.scheduler.Fa(c.jobId), wn(c.Ec, 10))
    }
    Uw.prototype.cancel = function() {
        for (var a = t(this.h), b = a.next(); !b.done; b = a.next()) b = b.value, void 0 === b.jobId || b.kc || this.scheduler.Fa(b.jobId), b.kc = !0;
        this.i.resolve()
    };
    Uw.prototype.getPriority = function(a) {
        var b;
        return null != (b = a.priority) ? b : this.j
    };

    function Ww(a) {
        this.state = a;
        this.plugins = [];
        this.s = void 0;
        this.v = {};
        Tw && Rw(this.state)
    }
    k = Ww.prototype;
    k.install = function(a) {
        this.plugins.push(a);
        return this
    };
    k.uninstall = function() {
        var a = this;
        Ma.apply(0, arguments).forEach(function(b) {
            b = a.plugins.indexOf(b); - 1 < b && a.plugins.splice(b, 1)
        })
    };
    k.transition = function(a, b) {
        var c = this;
        Tw && Sw(this.state);
        var d = this.transitions.find(function(f) {
            return Array.isArray(f.from) ? f.from.find(function(g) {
                return g === c.state && f.to === a
            }) : f.from === c.state && f.to === a
        });
        if (d) {
            this.j && (Vw(this.j), this.j = void 0);
            Xw(this, a, b);
            this.state = a;
            Tw && Rw(this.state);
            d = d.action.bind(this);
            var e = this.plugins.filter(function(f) {
                return f[a]
            }).map(function(f) {
                return f[a]
            });
            d(Yw(this, e), b)
        } else throw Error("no transition specified from " + this.state + " to " + a);
    };

    function Yw(a, b) {
        var c = b.filter(function(e) {
                return 10 === Zw(a, e)
            }),
            d = b.filter(function(e) {
                return 10 !== Zw(a, e)
            });
        return a.v.Pf ? function() {
            var e = Ma.apply(0, arguments);
            return w(function(f) {
                if (1 == f.h) return f.yield(a.He.apply(a, [c].concat(ia(e))), 2);
                a.Dd.apply(a, [d].concat(ia(e)));
                f.h = 0
            })
        } : function() {
            var e = Ma.apply(0, arguments);
            a.Ie.apply(a, [c].concat(ia(e)));
            a.Dd.apply(a, [d].concat(ia(e)))
        }
    }
    k.Ie = function(a) {
        var b = Ma.apply(1, arguments);
        zn();
        for (var c = {}, d = t(a), e = d.next(); !e.done; c = {
                mb: c.mb
            }, e = d.next()) c.mb = e.value, xn(function(f) {
            return function() {
                $w(f.mb.name);
                f.mb.callback.apply(f.mb, ia(b));
                lx(f.mb.name)
            }
        }(c))
    };
    k.He = function(a) {
        var b = Ma.apply(1, arguments),
            c, d, e, f;
        return w(function(g) {
            1 == g.h && (zn(), c = {}, d = t(a), e = d.next());
            if (3 != g.h) {
                if (e.done) return g.A(0);
                c.ab = e.value;
                c.Bb = void 0;
                f = function(h) {
                    return function() {
                        $w(h.ab.name);
                        var l = h.ab.callback.apply(h.ab, ia(b));
                        "function" === typeof(null == l ? void 0 : l.then) ? h.Bb = l.then(function() {
                            lx(h.ab.name)
                        }): lx(h.ab.name)
                    }
                }(c);
                xn(f);
                return c.Bb ? g.yield(c.Bb, 3) : g.A(3)
            }
            c = {
                ab: c.ab,
                Bb: c.Bb
            };
            e = d.next();
            return g.A(2)
        })
    };
    k.Dd = function(a) {
        var b = Ma.apply(1, arguments),
            c = this,
            d = a.map(function(e) {
                return {
                    Ec: function() {
                        $w(e.name);
                        e.callback.apply(e, ia(b));
                        lx(e.name)
                    },
                    priority: Zw(c, e)
                }
            });
        d.length && (this.j = new Uw(d))
    };

    function Zw(a, b) {
        var c, d;
        return null != (d = null != (c = a.s) ? c : b.priority) ? d : 0
    }

    function $w(a) {
        Tw && a && Rw(a)
    }

    function lx(a) {
        Tw && a && Sw(a)
    }

    function Xw(a, b, c) {
        Tw && console.groupCollapsed && console.groupEnd && (console.groupCollapsed("[" + a.constructor.name + "] '" + a.state + "' to '" + b + "'"), console.log("with message: ", c), console.groupEnd())
    }
    ea.Object.defineProperties(Ww.prototype, {
        currentState: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.state
            }
        }
    });

    function mx(a) {
        Ww.call(this, void 0 === a ? "document_active" : a);
        var b = this;
        this.s = 10;
        this.h = new Map;
        this.transitions = [{
                from: "document_active",
                to: "document_disposed_preventable",
                action: this.ga
            }, {
                from: "document_active",
                to: "document_disposed",
                action: this.l
            }, {
                from: "document_disposed_preventable",
                to: "document_disposed",
                action: this.l
            }, {
                from: "document_disposed_preventable",
                to: "flush_logs",
                action: this.m
            }, {
                from: "document_disposed_preventable",
                to: "document_active",
                action: this.i
            }, {
                from: "document_disposed",
                to: "flush_logs",
                action: this.m
            }, {
                from: "document_disposed",
                to: "document_active",
                action: this.i
            }, {
                from: "document_disposed",
                to: "document_disposed",
                action: function() {}
            },
            {
                from: "flush_logs",
                to: "document_active",
                action: this.i
            }
        ];
        window.addEventListener("pagehide", function(c) {
            b.transition("document_disposed", {
                event: c
            })
        });
        window.addEventListener("beforeunload", function(c) {
            b.transition("document_disposed_preventable", {
                event: c
            })
        })
    }
    v(mx, Ww);
    mx.prototype.ga = function(a, b) {
        if (!this.h.get("document_disposed_preventable")) {
            a(null == b ? void 0 : b.event);
            var c, d;
            if ((null == b ? 0 : null == (c = b.event) ? 0 : c.defaultPrevented) || (null == b ? 0 : null == (d = b.event) ? 0 : d.returnValue)) {
                b.event.returnValue || (b.event.returnValue = !0);
                b.event.defaultPrevented || b.event.preventDefault();
                this.h = new Map;
                this.transition("document_active");
                return
            }
        }
        this.h.set("document_disposed_preventable", !0);
        this.h.get("document_disposed") ? this.transition("flush_logs") : this.transition("document_disposed")
    };
    mx.prototype.l = function(a, b) {
        this.h.get("document_disposed") ? this.transition("document_active") : (a(null == b ? void 0 : b.event), this.h.set("document_disposed", !0), this.transition("flush_logs"))
    };
    mx.prototype.m = function(a, b) {
        a(null == b ? void 0 : b.event);
        this.transition("document_active")
    };
    mx.prototype.i = function() {
        this.h = new Map
    };

    function nx(a) {
        Ww.call(this, void 0 === a ? "document_visibility_unknown" : a);
        var b = this;
        this.transitions = [{
            from: "document_visibility_unknown",
            to: "document_visible",
            action: this.i
        }, {
            from: "document_visibility_unknown",
            to: "document_hidden",
            action: this.h
        }, {
            from: "document_visibility_unknown",
            to: "document_foregrounded",
            action: this.m
        }, {
            from: "document_visibility_unknown",
            to: "document_backgrounded",
            action: this.l
        }, {
            from: "document_visible",
            to: "document_hidden",
            action: this.h
        }, {
            from: "document_visible",
            to: "document_foregrounded",
            action: this.m
        }, {
            from: "document_visible",
            to: "document_visible",
            action: this.i
        }, {
            from: "document_foregrounded",
            to: "document_visible",
            action: this.i
        }, {
            from: "document_foregrounded",
            to: "document_hidden",
            action: this.h
        }, {
            from: "document_foregrounded",
            to: "document_foregrounded",
            action: this.m
        }, {
            from: "document_hidden",
            to: "document_visible",
            action: this.i
        }, {
            from: "document_hidden",
            to: "document_backgrounded",
            action: this.l
        }, {
            from: "document_hidden",
            to: "document_hidden",
            action: this.h
        }, {
            from: "document_backgrounded",
            to: "document_hidden",
            action: this.h
        }, {
            from: "document_backgrounded",
            to: "document_backgrounded",
            action: this.l
        }, {
            from: "document_backgrounded",
            to: "document_visible",
            action: this.i
        }];
        document.addEventListener("visibilitychange", function(c) {
            "visible" === document.visibilityState ? b.transition("document_visible", {
                event: c
            }) : b.transition("document_hidden", {
                event: c
            })
        });
        R("visibility_lifecycles_dynamic_backgrounding") && (window.addEventListener("blur", function(c) {
            b.transition("document_backgrounded", {
                event: c
            })
        }), window.addEventListener("focus", function(c) {
            b.transition("document_foregrounded", {
                event: c
            })
        }))
    }
    v(nx, Ww);
    nx.prototype.i = function(a, b) {
        a(null == b ? void 0 : b.event);
        R("visibility_lifecycles_dynamic_backgrounding") && this.transition("document_foregrounded")
    };
    nx.prototype.h = function(a, b) {
        a(null == b ? void 0 : b.event);
        R("visibility_lifecycles_dynamic_backgrounding") && this.transition("document_backgrounded")
    };
    nx.prototype.l = function(a, b) {
        a(null == b ? void 0 : b.event)
    };
    nx.prototype.m = function(a, b) {
        a(null == b ? void 0 : b.event)
    };

    function ox() {
        this.j = new mx;
        this.l = new nx
    }
    ox.prototype.install = function() {
        var a = Ma.apply(0, arguments),
            b = this;
        a.forEach(function(c) {
            b.j.install(c)
        });
        a.forEach(function(c) {
            b.l.install(c)
        })
    };

    function px() {
        ox.call(this);
        var a = {};
        this.install((a.document_disposed = {
            callback: this.h
        }, a));
        a = {};
        this.install((a.flush_logs = {
            callback: this.i
        }, a))
    }
    v(px, ox);
    px.prototype.i = function() {
        if (R("web_fp_via_jspb")) {
            var a = new nl,
                b = At();
            b && F(a, 1, b);
            b = new zl;
            be(b, nl, 380, Al, a);
            dt(b);
            R("web_fp_via_jspb_and_json") && Jn("finalPayload", {
                csn: At()
            })
        } else Jn("finalPayload", {
            csn: At()
        })
    };
    px.prototype.h = function() {
        qt(rt)
    };

    function qx() {}

    function rx() {
        var a = B("ytglobal.storage_");
        a || (a = new qx, A("ytglobal.storage_", a));
        return a
    }
    qx.prototype.estimate = function() {
        var a, b, c;
        return w(function(d) {
            a = navigator;
            return (null == (b = a.storage) ? 0 : b.estimate) ? d.return(a.storage.estimate()) : (null == (c = a.webkitTemporaryStorage) ? 0 : c.queryUsageAndQuota) ? d.return(sx()) : d.return()
        })
    };

    function sx() {
        var a = navigator;
        return new Promise(function(b, c) {
            var d;
            null != (d = a.webkitTemporaryStorage) && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota(function(e, f) {
                b({
                    usage: e,
                    quota: f
                })
            }, function(e) {
                c(e)
            }) : c(Error("webkitTemporaryStorage is not supported."))
        })
    }
    A("ytglobal.storageClass_", qx);

    function Hn(a, b) {
        var c = this;
        this.handleError = a;
        this.h = b;
        this.i = !1;
        void 0 === self.document || self.addEventListener("beforeunload", function() {
            c.i = !0
        });
        this.j = Math.random() <= lm("ytidb_transaction_ended_event_rate_limit_session", .2)
    }
    Hn.prototype.logEvent = function(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                R("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.h("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                R("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                tx(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.j && Math.random() <= lm("ytidb_transaction_ended_event_rate_limit_transaction", .1) && this.h("idbTransactionEnded",
                    b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a = Object.assign({}, b, {
                    hasWindowUnloaded: this.i
                }), this.h("idbTransactionAborted", a)
        }
    };

    function tx(a, b) {
        rx().estimate().then(function(c) {
            c = Object.assign({}, b, {
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                deviceStorageUsageMbytes: ux(null == c ? void 0 : c.usage),
                deviceStorageQuotaMbytes: ux(null == c ? void 0 : c.quota)
            });
            a.h("idbQuotaExceeded", c)
        })
    }

    function ux(a) {
        return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
    };

    function vx(a) {
        this.args = void 0 === a ? null : a;
        this.returnValue = []
    };
    var wx = new Map;

    function xx(a, b) {
        if (!a) return null;
        a = Object.keys(a);
        a = t(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = c.toLowerCase();
            if (-1 < d.indexOf(b, d.length - b.length)) return c
        }
        return null
    };

    function yx(a, b, c) {
        var d;
        d || (d = {
            bubbles: !0,
            cancelable: !1,
            composed: !0
        });
        null !== c && void 0 !== c && (d.detail = c);
        b = new CustomEvent(b, d);
        a.dispatchEvent(b)
    };

    function zx(a, b) {
        b = new vx(b);
        yx(a, "yt-action", b);
        return b.returnValue
    }

    function Ax(a, b, c, d) {
        b && b.length && b.forEach(function(e) {
            var f = xx(e, "action") || xx(e, "command") || xx(e, "endpoint");
            if (f) {
                var g = "yt" + f;
                var h = wx.get(g);
                h ? g = h : (f = "yt-" + f.replace(/([A-Z])/g, "-$1").toLowerCase(), wx.set(g, f), g = f);
                ns(e, Ik) && (g += "-" + ns(e, Ik).signal.toLowerCase().replace(/_/g, "-"))
            } else g = null;
            g && (R("handle_service_request_actions") && e.commandMetadata && e.commandMetadata.webCommandMetadata && e.commandMetadata.webCommandMetadata.sendPost ? c && R("use_source_element_if_present_for_actions") ? Bx(c, [e]) :
                Bx(a, [e]) : zx(a, [e, c, d]))
        })
    }

    function Bx(a, b) {
        var c = [a];
        b && c.push.apply(c, b);
        b = zx(a, c);
        return 0 < b.length && (b = b[0], yx(a, "yt-service-request-sent", b), b && b.ajaxPromise) ? (b.ajaxPromise.then(function(d) {
            yx(a, "yt-service-request-completed", d)
        }, function(d) {
            yx(a, "yt-service-request-error", {
                error: d,
                params: c
            })
        }, a), b.ajaxPromise) : Kf()
    };

    function fw(a, b, c) {
        b = void 0 === b ? {} : b;
        var d, e = null == (d = ns(a.commandMetadata, Jk)) ? void 0 : d.url;
        d = b.form || {};
        !c || d.element || d.skipDefaultElement || (b.form = b.form || {}, b.form.element = c);
        if (e && "/service_ajax" !== e) return {
            type: 0,
            command: a,
            form: b.form
        };
        if (R("kevlar_service_command_check")) {
            if (c = is().resolve(Lv), gu(a, c.j)) return Object.assign({}, {
                type: 1,
                command: a
            }, b)
        } else {
            var f;
            if (null == (f = ns(a.commandMetadata, Jk)) ? 0 : f.apiUrl) return Object.assign({}, {
                type: 1,
                command: a
            }, b)
        }
        return {
            type: 2,
            command: a,
            form: b.form
        }
    }

    function dw(a) {
        if (a.form) {
            var b = a.form,
                c = Object.assign({}, b);
            b = b.element;
            c = (delete c.element, c);
            if (b) return [Bx(b, [a.command, c, a.qc])]
        }
        return []
    }

    function ew(a) {
        if (a.form) {
            var b = a.form,
                c = Object.assign({}, b);
            b = b.element;
            c = (delete c.element, c);
            b && Ax(b, [a.command], b, c)
        }
    };

    function Cx(a, b, c) {
        J.call(this);
        var d = this;
        c = c || O("POST_MESSAGE_ORIGIN") || window.document.location.protocol + "//" + window.document.location.hostname;
        this.j = b || null;
        this.targetOrigin = "*";
        this.l = c;
        this.sessionId = null;
        this.channel = "widget";
        this.M = !!a;
        this.v = function(e) {
            a: if (!("*" != d.l && e.origin != d.l || d.j && e.source != d.j || "string" !== typeof e.data)) {
                try {
                    var f = JSON.parse(e.data)
                } catch (g) {
                    break a
                }
                if (!(null == f || d.M && (d.sessionId && d.sessionId != f.id || d.channel && d.channel != f.channel)) && f) switch (f.event) {
                    case "listening":
                        "null" !=
                        e.origin && (d.l = d.targetOrigin = e.origin);
                        d.j = e.source;
                        d.sessionId = f.id;
                        d.i && (d.i(), d.i = null);
                        break;
                    case "command":
                        d.m && (!d.s || 0 <= fb(d.s, f.func)) && d.m(f.func, f.args, e.origin)
                }
            }
        };
        this.s = this.i = this.m = null;
        window.addEventListener("message", this.v)
    }
    v(Cx, J);
    Cx.prototype.sendMessage = function(a, b) {
        if (b = b || this.j) {
            this.sessionId && (a.id = this.sessionId);
            this.channel && (a.channel = this.channel);
            try {
                var c = JSON.stringify(a);
                b.postMessage(c, this.targetOrigin)
            } catch (d) {
                Yl(d)
            }
        }
    };
    Cx.prototype.K = function() {
        window.removeEventListener("message", this.v);
        J.prototype.K.call(this)
    };

    function Dx() {
        this.i = [];
        this.isReady = !1;
        this.j = {};
        var a = this.h = new Cx(!!O("WIDGET_ID_ENFORCE")),
            b = this.Ce.bind(this);
        a.m = b;
        a.s = null;
        this.h.channel = "widget";
        if (a = O("WIDGET_ID")) this.h.sessionId = a
    }
    k = Dx.prototype;
    k.Ce = function(a, b, c) {
        "addEventListener" === a && b ? this.Dc(b[0], c) : this.Tc(a, b, c)
    };
    k.Tc = function() {};
    k.wc = function(a) {
        var b = this;
        return function(c) {
            return b.sendMessage(a, c)
        }
    };
    k.Dc = function(a, b) {
        this.j[a] || "onReady" === a || (this.addEventListener(a, this.wc(a, b)), this.j[a] = !0)
    };
    k.addEventListener = function() {};
    k.he = function() {
        this.isReady = !0;
        this.sendMessage("initialDelivery", this.zc());
        this.sendMessage("onReady");
        gb(this.i, this.Bd, this);
        this.i = []
    };
    k.zc = function() {
        return null
    };

    function Ex(a, b) {
        a.sendMessage("infoDelivery", b)
    }
    k.Bd = function(a) {
        this.isReady ? this.h.sendMessage(a) : this.i.push(a)
    };
    k.sendMessage = function(a, b) {
        this.Bd({
            event: a,
            info: void 0 === b ? null : b
        })
    };
    k.dispose = function() {
        this.h = null
    };
    var Fx = {},
        Gx = (Fx["api.invalidparam"] = 2, Fx.auth = 150, Fx["drm.auth"] = 150, Fx["heartbeat.net"] = 150, Fx["heartbeat.servererror"] = 150, Fx["heartbeat.stop"] = 150, Fx["html5.unsupportedads"] = 5, Fx["fmt.noneavailable"] = 5, Fx["fmt.decode"] = 5, Fx["fmt.unplayable"] = 5, Fx["html5.missingapi"] = 5, Fx["html5.unsupportedlive"] = 5, Fx["drm.unavailable"] = 5, Fx["mrm.blocked"] = 151, Fx);
    var Hx = new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));

    function Ix(a) {
        return (0 === a.search("cue") || 0 === a.search("load")) && "loadModule" !== a
    }

    function Jx(a, b, c) {
        if ("string" === typeof a) return {
            videoId: a,
            startSeconds: b,
            suggestedQuality: c
        };
        b = {};
        c = t(Hx);
        for (var d = c.next(); !d.done; d = c.next()) d = d.value, a[d] && (b[d] = a[d]);
        return b
    }

    function Kx(a, b, c, d) {
        if (Sa(a) && !Array.isArray(a)) {
            b = "playlist list listType index startSeconds suggestedQuality".split(" ");
            c = {};
            for (d = 0; d < b.length; d++) {
                var e = b[d];
                a[e] && (c[e] = a[e])
            }
            return c
        }
        b = {
            index: b,
            startSeconds: c,
            suggestedQuality: d
        };
        "string" === typeof a && 16 === a.length ? b.list = "PL" + a : b.playlist = a;
        return b
    };

    function Lx(a) {
        Dx.call(this);
        this.listeners = [];
        this.l = !1;
        this.api = a;
        this.addEventListener("onReady", this.onReady.bind(this));
        this.addEventListener("onVideoProgress", this.Oe.bind(this));
        this.addEventListener("onVolumeChange", this.Pe.bind(this));
        this.addEventListener("onApiChange", this.Je.bind(this));
        this.addEventListener("onPlaybackQualityChange", this.Le.bind(this));
        this.addEventListener("onPlaybackRateChange", this.Me.bind(this));
        this.addEventListener("onStateChange", this.Ne.bind(this));
        this.addEventListener("onWebglSettingsChanged",
            this.Qe.bind(this))
    }
    v(Lx, Dx);
    k = Lx.prototype;
    k.Tc = function(a, b, c) {
        if (this.api.isExternalMethodAvailable(a, c)) {
            b = b || [];
            if (0 < b.length && Ix(a)) {
                var d = b;
                if (Sa(d[0]) && !Array.isArray(d[0])) var e = d[0];
                else switch (e = {}, a) {
                    case "loadVideoById":
                    case "cueVideoById":
                        e = Jx(d[0], void 0 !== d[1] ? Number(d[1]) : void 0, d[2]);
                        break;
                    case "loadVideoByUrl":
                    case "cueVideoByUrl":
                        e = d[0];
                        "string" === typeof e && (e = {
                            mediaContentUrl: e,
                            startSeconds: void 0 !== d[1] ? Number(d[1]) : void 0,
                            suggestedQuality: d[2]
                        });
                        b: {
                            if ((d = e.mediaContentUrl) && (d = /\/([ve]|embed)\/([^#?]+)/.exec(d)) && d[2]) {
                                d =
                                    d[2];
                                break b
                            }
                            d = null
                        }
                        e.videoId = d;
                        e = Jx(e);
                        break;
                    case "loadPlaylist":
                    case "cuePlaylist":
                        e = Kx(d[0], d[1], d[2], d[3])
                }
                b.length = 1;
                b[0] = e
            }
            this.api.handleExternalCall(a, b, c);
            Ix(a) && Ex(this, this.zc())
        }
    };
    k.Dc = function(a, b) {
        "onReady" === a ? this.api.logApiCall(a + " invocation", b) : "onError" === a && this.l && (this.api.logApiCall(a + " invocation", b, this.errorCode), this.errorCode = void 0);
        this.api.logApiCall(a + " registration", b);
        Dx.prototype.Dc.call(this, a, b)
    };
    k.wc = function(a, b) {
        var c = this,
            d = Dx.prototype.wc.call(this, a, b);
        return function(e) {
            "onError" === a ? c.api.logApiCall(a + " invocation", b, e) : c.api.logApiCall(a + " invocation", b);
            d(e)
        }
    };
    k.onReady = function() {
        var a = this.he.bind(this);
        this.h.i = a;
        a = this.api.getVideoData();
        if (!a.isPlayable) {
            this.l = !0;
            a = a.errorCode;
            var b = void 0 === b ? 5 : b;
            this.errorCode = a ? Gx[a] || b : b;
            this.sendMessage("onError", this.errorCode.toString())
        }
    };
    k.addEventListener = function(a, b) {
        this.listeners.push({
            eventType: a,
            listener: b
        });
        this.api.addEventListener(a, b)
    };
    k.zc = function() {
        if (!this.api) return null;
        var a = this.api.getApiInterface();
        kb(a, "getVideoData");
        for (var b = {
                apiInterface: a
            }, c = 0, d = a.length; c < d; c++) {
            var e = a[c];
            if (0 === e.search("get") || 0 === e.search("is")) {
                var f = 0;
                0 === e.search("get") ? f = 3 : 0 === e.search("is") && (f = 2);
                f = e.charAt(f).toLowerCase() + e.substr(f + 1);
                try {
                    var g = this.api[e]();
                    b[f] = g
                } catch (h) {}
            }
        }
        b.videoData = this.api.getVideoData();
        b.currentTimeLastUpdated_ = Date.now() / 1E3;
        return b
    };
    k.Ne = function(a) {
        a = {
            playerState: a,
            currentTime: this.api.getCurrentTime(),
            duration: this.api.getDuration(),
            videoData: this.api.getVideoData(),
            videoStartBytes: 0,
            videoBytesTotal: this.api.getVideoBytesTotal(),
            videoLoadedFraction: this.api.getVideoLoadedFraction(),
            playbackQuality: this.api.getPlaybackQuality(),
            availableQualityLevels: this.api.getAvailableQualityLevels(),
            currentTimeLastUpdated_: Date.now() / 1E3,
            playbackRate: this.api.getPlaybackRate(),
            mediaReferenceTime: this.api.getMediaReferenceTime()
        };
        this.api.getVideoUrl &&
            (a.videoUrl = this.api.getVideoUrl());
        this.api.getVideoContentRect && (a.videoContentRect = this.api.getVideoContentRect());
        this.api.getProgressState && (a.progressState = this.api.getProgressState());
        this.api.getPlaylist && (a.playlist = this.api.getPlaylist());
        this.api.getPlaylistIndex && (a.playlistIndex = this.api.getPlaylistIndex());
        this.api.getStoryboardFormat && (a.storyboardFormat = this.api.getStoryboardFormat());
        Ex(this, a)
    };
    k.Le = function(a) {
        Ex(this, {
            playbackQuality: a
        })
    };
    k.Me = function(a) {
        Ex(this, {
            playbackRate: a
        })
    };
    k.Je = function() {
        for (var a = this.api.getOptions(), b = {
                namespaces: a
            }, c = 0, d = a.length; c < d; c++) {
            var e = a[c],
                f = this.api.getOptions(e);
            a.join(", ");
            b[e] = {
                options: f
            };
            for (var g = 0, h = f.length; g < h; g++) {
                var l = f[g],
                    m = this.api.getOption(e, l);
                b[e][l] = m
            }
        }
        this.sendMessage("apiInfoDelivery", b)
    };
    k.Pe = function() {
        Ex(this, {
            muted: this.api.isMuted(),
            volume: this.api.getVolume()
        })
    };
    k.Oe = function(a) {
        a = {
            currentTime: a,
            videoBytesLoaded: this.api.getVideoBytesLoaded(),
            videoLoadedFraction: this.api.getVideoLoadedFraction(),
            currentTimeLastUpdated_: Date.now() / 1E3,
            playbackRate: this.api.getPlaybackRate(),
            mediaReferenceTime: this.api.getMediaReferenceTime()
        };
        this.api.getProgressState && (a.progressState = this.api.getProgressState());
        Ex(this, a)
    };
    k.Qe = function() {
        var a = {
            sphericalProperties: this.api.getSphericalProperties()
        };
        Ex(this, a)
    };
    k.dispose = function() {
        Dx.prototype.dispose.call(this);
        for (var a = 0; a < this.listeners.length; a++) {
            var b = this.listeners[a];
            this.api.removeEventListener(b.eventType, b.listener)
        }
        this.listeners = []
    };

    function Mx(a) {
        J.call(this);
        this.i = {};
        this.started = !1;
        this.connection = a;
        this.connection.subscribe("command", this.xd, this)
    }
    v(Mx, J);
    k = Mx.prototype;
    k.start = function() {
        this.started || this.h() || (this.started = !0, this.connection.ib("RECEIVING"))
    };
    k.ib = function(a, b) {
        this.started && !this.h() && this.connection.ib(a, b)
    };
    k.xd = function(a, b, c) {
        if (this.started && !this.h()) {
            var d = b || {};
            switch (a) {
                case "addEventListener":
                    "string" === typeof d.event && this.addListener(d.event);
                    break;
                case "removeEventListener":
                    "string" === typeof d.event && this.removeListener(d.event);
                    break;
                default:
                    this.api.isReady() && this.api.isExternalMethodAvailable(a, c || null) && (b = Nx(a, b || {}), c = this.api.handleExternalCall(a, b, c || null), (c = Ox(a, c)) && this.ib(a, c))
            }
        }
    };
    k.addListener = function(a) {
        if (!(a in this.i)) {
            var b = this.Ke.bind(this, a);
            this.i[a] = b;
            this.addEventListener(a, b)
        }
    };
    k.Ke = function(a, b) {
        this.started && !this.h() && this.connection.ib(a, this.yc(a, b))
    };
    k.yc = function(a, b) {
        if (null != b) return {
            value: b
        }
    };
    k.removeListener = function(a) {
        a in this.i && (this.removeEventListener(a, this.i[a]), delete this.i[a])
    };
    k.K = function() {
        var a = this.connection;
        a.h() || Oi(a.i, "command", this.xd, this);
        this.connection = null;
        for (var b in this.i) this.i.hasOwnProperty(b) && this.removeListener(b);
        J.prototype.K.call(this)
    };

    function Px(a, b) {
        Mx.call(this, b);
        this.api = a;
        this.start()
    }
    v(Px, Mx);
    Px.prototype.addEventListener = function(a, b) {
        this.api.addEventListener(a, b)
    };
    Px.prototype.removeEventListener = function(a, b) {
        this.api.removeEventListener(a, b)
    };

    function Nx(a, b) {
        switch (a) {
            case "loadVideoById":
                return a = Jx(b), [a];
            case "cueVideoById":
                return a = Jx(b), [a];
            case "loadVideoByPlayerVars":
                return [b];
            case "cueVideoByPlayerVars":
                return [b];
            case "loadPlaylist":
                return a = Kx(b), [a];
            case "cuePlaylist":
                return a = Kx(b), [a];
            case "seekTo":
                return [b.seconds, b.allowSeekAhead];
            case "playVideoAt":
                return [b.index];
            case "setVolume":
                return [b.volume];
            case "setPlaybackQuality":
                return [b.suggestedQuality];
            case "setPlaybackRate":
                return [b.suggestedRate];
            case "setLoop":
                return [b.loopPlaylists];
            case "setShuffle":
                return [b.shufflePlaylist];
            case "getOptions":
                return [b.module];
            case "getOption":
                return [b.module, b.option];
            case "setOption":
                return [b.module, b.option, b.value];
            case "handleGlobalKeyDown":
                return [b.keyCode, b.shiftKey, b.ctrlKey, b.altKey, b.metaKey, b.key, b.code]
        }
        return []
    }

    function Ox(a, b) {
        switch (a) {
            case "isMuted":
                return {
                    muted: b
                };
            case "getVolume":
                return {
                    volume: b
                };
            case "getPlaybackRate":
                return {
                    playbackRate: b
                };
            case "getAvailablePlaybackRates":
                return {
                    availablePlaybackRates: b
                };
            case "getVideoLoadedFraction":
                return {
                    videoLoadedFraction: b
                };
            case "getPlayerState":
                return {
                    playerState: b
                };
            case "getCurrentTime":
                return {
                    currentTime: b
                };
            case "getPlaybackQuality":
                return {
                    playbackQuality: b
                };
            case "getAvailableQualityLevels":
                return {
                    availableQualityLevels: b
                };
            case "getDuration":
                return {
                    duration: b
                };
            case "getVideoUrl":
                return {
                    videoUrl: b
                };
            case "getVideoEmbedCode":
                return {
                    videoEmbedCode: b
                };
            case "getPlaylist":
                return {
                    playlist: b
                };
            case "getPlaylistIndex":
                return {
                    playlistIndex: b
                };
            case "getOptions":
                return {
                    options: b
                };
            case "getOption":
                return {
                    option: b
                }
        }
    }
    Px.prototype.yc = function(a, b) {
        switch (a) {
            case "onReady":
                return;
            case "onStateChange":
                return {
                    playerState: b
                };
            case "onPlaybackQualityChange":
                return {
                    playbackQuality: b
                };
            case "onPlaybackRateChange":
                return {
                    playbackRate: b
                };
            case "onError":
                return {
                    errorCode: b
                }
        }
        return Mx.prototype.yc.call(this, a, b)
    };
    Px.prototype.K = function() {
        Mx.prototype.K.call(this);
        delete this.api
    };

    function Qx(a) {
        a = void 0 === a ? !1 : a;
        J.call(this);
        this.i = new Ni(a);
        ze(this, this.i)
    }
    $a(Qx, J);
    Qx.prototype.subscribe = function(a, b, c) {
        return this.h() ? 0 : this.i.subscribe(a, b, c)
    };
    Qx.prototype.m = function(a, b) {
        this.h() || this.i.bb.apply(this.i, arguments)
    };

    function Rx(a, b, c) {
        Qx.call(this);
        this.l = a;
        this.j = b;
        this.id = c
    }
    v(Rx, Qx);
    Rx.prototype.ib = function(a, b) {
        this.h() || this.l.ib(this.j, this.id, a, b)
    };
    Rx.prototype.K = function() {
        this.j = this.l = null;
        Qx.prototype.K.call(this)
    };

    function Sx(a, b, c) {
        J.call(this);
        this.i = a;
        this.origin = c;
        this.j = Ir(window, "message", this.l.bind(this));
        this.connection = new Rx(this, a, b);
        ze(this, this.connection)
    }
    v(Sx, J);
    Sx.prototype.ib = function(a, b, c, d) {
        this.h() || a !== this.i || (a = {
            id: b,
            command: c
        }, d && (a.data = d), this.i.postMessage(JSON.stringify(a), this.origin))
    };
    Sx.prototype.l = function(a) {
        if (!this.h() && a.origin === this.origin) {
            var b = a.data;
            if ("string" === typeof b) {
                try {
                    b = JSON.parse(b)
                } catch (d) {
                    return
                }
                if (b.command) {
                    var c = this.connection;
                    c.h() || c.m("command", b.command, b.data, a.origin)
                }
            }
        }
    };
    Sx.prototype.K = function() {
        Jr(this.j);
        this.i = null;
        J.prototype.K.call(this)
    };

    function Tx() {
        this.state = 1;
        this.h = null
    }
    k = Tx.prototype;
    k.initialize = function(a, b, c) {
        if (a.program) {
            var d, e = null != (d = a.interpreterUrl) ? d : null;
            if (a.interpreterSafeScript) {
                d = a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue || "";
                var f = xb();
                d = f ? f.createScript(d) : d;
                d = new Cb(d, Bb)
            } else d = null != (f = a.interpreterScript) ? f : null;
            a.interpreterSafeUrl && (e = a.interpreterSafeUrl, Ab("From proto message. b/166824318"), e = Gb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue || "").toString());
            Ux(this, d, e, a.program, b, c)
        } else mt(Error("Cannot initialize botguard without program"))
    };

    function Ux(a, b, c, d, e, f) {
        var g = void 0 === g ? "trayride" : g;
        c ? (a.state = 2, Ew(c, function() {
            window[g] ? Vx(a, d, g, e) : (a.state = 3, Jw(c), mt(new rn("Unable to load Botguard", "from " + c)))
        }, f)) : b ? (f = sf("SCRIPT"), b instanceof Cb ? (b instanceof Cb && b.constructor === Cb ? b = b.j : (Qa(b), b = "type_error:SafeScript"), f.textContent = b, Xh(f)) : f.textContent = b, f.nonce = qc(), document.head.appendChild(f), document.head.removeChild(f), window[g] ? Vx(a, d, g, e) : (a.state = 4, mt(new rn("Unable to load Botguard from JS")))) : mt(new rn("Unable to load VM; no url or JS provided"))
    }

    function Vx(a, b, c, d) {
        a.state = 5;
        try {
            var e = new Mh({
                program: b,
                me: c,
                De: R("att_web_record_metrics")
            });
            e.Se.then(function() {
                a.state = 6;
                d && d(b)
            });
            a.Oc(e)
        } catch (f) {
            a.state = 7, f instanceof Error && mt(f)
        }
    }
    k.invoke = function(a) {
        a = void 0 === a ? {} : a;
        return this.Rc() ? this.Kd({
            cd: a
        }) : null
    };
    k.dispose = function() {
        this.Uc()
    };
    k.Uc = function() {
        this.Oc(null);
        this.state = 8
    };
    k.Rc = function() {
        return !!this.h
    };
    k.Kd = function(a) {
        return this.h.Ed(a)
    };
    k.Oc = function(a) {
        xe(this.h);
        this.h = a
    };

    function Wx() {
        var a = B("yt.abuse.playerAttLoader");
        return a && ["bgvma", "bgvmb", "bgvmc"].every(function(b) {
            return b in a
        }) ? a : null
    };

    function Xx() {
        Tx.apply(this, arguments)
    }
    v(Xx, Tx);
    Xx.prototype.Uc = function() {
        this.state = 8
    };
    Xx.prototype.Oc = function(a) {
        var b;
        null == (b = Wx()) || b.bgvma();
        a ? (b = {
            bgvma: a.dispose.bind(a),
            bgvmb: a.snapshot.bind(a),
            bgvmc: a.Ed.bind(a)
        }, A("yt.abuse.playerAttLoader", b), A("yt.abuse.playerAttLoaderRun", function(c) {
            return a.snapshot(c)
        })) : (A("yt.abuse.playerAttLoader", null), A("yt.abuse.playerAttLoaderRun", null))
    };
    Xx.prototype.Rc = function() {
        return !!Wx()
    };
    Xx.prototype.Kd = function(a) {
        return Wx().bgvmc(a)
    };
    var Yx = new Xx;

    function Zx() {
        return Yx.Rc()
    }

    function $x(a) {
        a = void 0 === a ? {} : a;
        return Yx.invoke(a)
    };

    function ay(a) {
        a = a || {};
        var b = {},
            c = {};
        this.url = a.url || "";
        this.args = a.args || sb(b);
        this.assets = a.assets || {};
        this.attrs = a.attrs || sb(c);
        this.fallback = a.fallback || null;
        this.fallbackMessage = a.fallbackMessage || null;
        this.html5 = !!a.html5;
        this.disable = a.disable || {};
        this.loaded = !!a.loaded;
        this.messages = a.messages || {}
    }
    ay.prototype.clone = function() {
        var a = new ay,
            b;
        for (b in this)
            if (this.hasOwnProperty(b)) {
                var c = this[b];
                "object" == Qa(c) ? a[b] = sb(c) : a[b] = c
            }
        return a
    };
    var by = /cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;

    function cy(a) {
        a = a || "";
        if (window.spf) {
            var b = a.match(by);
            spf.style.load(a, b ? b[1] : "", void 0)
        } else dy(a)
    }

    function dy(a) {
        var b = ey(a),
            c = document.getElementById(b),
            d = c && Aw(c, "loaded");
        d || c && !d || (c = fy(a, b, function() {
            if (!Aw(c, "loaded")) {
                yw(c);
                Yr(b);
                var e = Za(Zr, b);
                rm(e, 0)
            }
        }))
    }

    function fy(a, b, c) {
        var d = document.createElement("link");
        d.id = b;
        d.onload = function() {
            c && setTimeout(c, 0)
        };
        a = rk(a);
        oc(d, a);
        (document.getElementsByTagName("head")[0] || document.body).appendChild(d);
        return d
    }

    function ey(a) {
        var b = sf("A");
        nc(b, new Kb(a, Pb));
        a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
        return "css-" + tc(a)
    };

    function gy() {
        J.call(this);
        this.i = []
    }
    v(gy, J);
    gy.prototype.K = function() {
        for (; this.i.length;) {
            var a = this.i.pop();
            a.target.removeEventListener(a.name, a.callback, void 0)
        }
        J.prototype.K.call(this)
    };

    function hy() {
        gy.apply(this, arguments)
    }
    v(hy, gy);

    function iy(a, b, c, d, e) {
        J.call(this);
        var f = this;
        this.v = b;
        this.webPlayerContextConfig = d;
        this.Sb = e;
        this.ya = !1;
        this.api = {};
        this.ka = this.s = null;
        this.W = new Ni;
        this.i = {};
        this.aa = this.Da = this.elementId = this.pb = this.config = null;
        this.Z = !1;
        this.l = this.M = null;
        this.la = {};
        this.Tb = ["onReady"];
        this.lastError = null;
        this.Fb = NaN;
        this.T = {};
        this.Ub = new hy(this);
        this.da = 0;
        this.j = this.m = a;
        ze(this, this.W);
        jy(this);
        ky(this);
        ze(this, this.Ub);
        c ? this.da = rm(function() {
            f.loadNewVideoConfig(c)
        }, 0) : d && (ly(this), my(this))
    }
    v(iy, J);
    k = iy.prototype;
    k.getId = function() {
        return this.v
    };
    k.loadNewVideoConfig = function(a) {
        if (!this.h()) {
            this.da && (window.clearTimeout(this.da), this.da = 0);
            var b = a || {};
            b instanceof ay || (b = new ay(b));
            this.config = b;
            this.setConfig(a);
            my(this);
            this.isReady() && ny(this)
        }
    };

    function ly(a) {
        var b;
        a.webPlayerContextConfig ? b = a.webPlayerContextConfig.rootElementId : b = a.config.attrs.id;
        a.elementId = b || a.elementId;
        "video-player" === a.elementId && (a.elementId = a.v, a.webPlayerContextConfig ? a.webPlayerContextConfig.rootElementId = a.v : a.config.attrs.id = a.v);
        var c;
        (null == (c = a.j) ? void 0 : c.id) === a.elementId && (a.elementId += "-player", a.webPlayerContextConfig ? a.webPlayerContextConfig.rootElementId = a.elementId : a.config.attrs.id = a.elementId)
    }
    k.setConfig = function(a) {
        this.pb = a;
        this.config = oy(a);
        ly(this);
        if (!this.Da) {
            var b;
            this.Da = py(this, (null == (b = this.config.args) ? void 0 : b.jsapicallback) || "onYouTubePlayerReady")
        }
        this.config.args ? this.config.args.jsapicallback = null : this.config.args = {
            jsapicallback: null
        };
        var c;
        if (null == (c = this.config) ? 0 : c.attrs) a = this.config.attrs, (b = a.width) && this.j && (this.j.style.width = hi(Number(b) || b)), (a = a.height) && this.j && (this.j.style.height = hi(Number(a) || a))
    };

    function ny(a) {
        if (a.config && !0 !== a.config.loaded)
            if (a.config.loaded = !0, !a.config.args || "0" !== a.config.args.autoplay && 0 !== a.config.args.autoplay && !1 !== a.config.args.autoplay) {
                var b;
                a.api.loadVideoByPlayerVars(null != (b = a.config.args) ? b : null)
            } else a.api.cueVideoByPlayerVars(a.config.args)
    }

    function qy(a) {
        var b = !0,
            c = ry(a);
        c && a.config && (a = sy(a), b = Aw(c, "version") === a);
        return b && !!B("yt.player.Application.create")
    }

    function my(a) {
        if (!a.h() && !a.Z) {
            var b = qy(a);
            if (b && "html5" === (ry(a) ? "html5" : null)) a.aa = "html5", a.isReady() || ty(a);
            else if (uy(a), a.aa = "html5", b && a.l && a.m) a.m.appendChild(a.l), ty(a);
            else {
                a.config && (a.config.loaded = !0);
                var c = !1;
                a.M = function() {
                    c = !0;
                    var d = vy(a, "player_bootstrap_method") ? B("yt.player.Application.createAlternate") || B("yt.player.Application.create") : B("yt.player.Application.create");
                    var e = a.config ? oy(a.config) : void 0;
                    d && d(a.m, e, a.webPlayerContextConfig, a.Sb);
                    ty(a)
                };
                a.Z = !0;
                b ? a.M() : (Ew(sy(a), a.M), (b = wy(a)) && cy(b), xy(a) && !c && A("yt.player.Application.create", null))
            }
        }
    }

    function ry(a) {
        var b = rf(a.elementId);
        !b && a.j && a.j.querySelector && (b = a.j.querySelector("#" + a.elementId));
        return b
    }

    function ty(a) {
        if (!a.h()) {
            var b = ry(a),
                c = !1;
            b && b.getApiInterface && b.getApiInterface() && (c = !0);
            if (c) {
                a.Z = !1;
                if (!vy(a, "html5_remove_not_servable_check_killswitch")) {
                    var d;
                    if ((null == b ? 0 : b.isNotServable) && a.config && (null == b ? 0 : b.isNotServable(null == (d = a.config.args) ? void 0 : d.video_id))) return
                }
                yy(a)
            } else a.Fb = rm(function() {
                ty(a)
            }, 50)
        }
    }

    function yy(a) {
        jy(a);
        a.ya = !0;
        var b = ry(a);
        if (b) {
            a.s = zy(a, b, "addEventListener");
            a.ka = zy(a, b, "removeEventListener");
            var c = b.getApiInterface();
            c = c.concat(b.getInternalApiInterface());
            for (var d = a.api, e = 0; e < c.length; e++) {
                var f = c[e];
                d[f] || (d[f] = zy(a, b, f))
            }
        }
        for (var g in a.i) a.i.hasOwnProperty(g) && a.s && a.s(g, a.i[g]);
        ny(a);
        a.Da && a.Da(a.api);
        a.W.bb("onReady", a.api)
    }

    function zy(a, b, c) {
        var d = b[c];
        return function() {
            var e = Ma.apply(0, arguments);
            try {
                return a.lastError = null, d.apply(b, e)
            } catch (f) {
                "sendAbandonmentPing" !== c && (f.params = c, a.lastError = f, mt(f))
            }
        }
    }

    function jy(a) {
        a.ya = !1;
        if (a.ka)
            for (var b in a.i) a.i.hasOwnProperty(b) && a.ka(b, a.i[b]);
        for (var c in a.T) a.T.hasOwnProperty(c) && window.clearTimeout(Number(c));
        a.T = {};
        a.s = null;
        a.ka = null;
        b = a.api;
        for (var d in b) b.hasOwnProperty(d) && (b[d] = null);
        b.addEventListener = function(e, f) {
            a.addEventListener(e, f)
        };
        b.removeEventListener = function(e, f) {
            a.removeEventListener(e, f)
        };
        b.destroy = function() {
            a.dispose()
        };
        b.getLastError = function() {
            return a.getLastError()
        };
        b.getPlayerType = function() {
            return a.getPlayerType()
        };
        b.getCurrentVideoConfig = function() {
            return a.pb
        };
        b.loadNewVideoConfig = function(e) {
            a.loadNewVideoConfig(e)
        };
        b.isReady = function() {
            return a.isReady()
        }
    }
    k.isReady = function() {
        return this.ya
    };

    function ky(a) {
        a.addEventListener("WATCH_LATER_VIDEO_ADDED", function(b) {
            Yr("WATCH_LATER_VIDEO_ADDED", b)
        });
        a.addEventListener("WATCH_LATER_VIDEO_REMOVED", function(b) {
            Yr("WATCH_LATER_VIDEO_REMOVED", b)
        })
    }
    k.addEventListener = function(a, b) {
        var c = this,
            d = py(this, b);
        d && (0 <= fb(this.Tb, a) || this.i[a] || (b = Ay(this, a), this.s && this.s(a, b)), this.W.subscribe(a, d), "onReady" === a && this.isReady() && rm(function() {
            d(c.api)
        }, 0))
    };
    k.removeEventListener = function(a, b) {
        this.h() || (b = py(this, b)) && Oi(this.W, a, b)
    };

    function py(a, b) {
        var c = b;
        if ("string" === typeof b) {
            if (a.la[b]) return a.la[b];
            c = function() {
                var d = Ma.apply(0, arguments),
                    e = B(b);
                if (e) try {
                    e.apply(x, d)
                } catch (f) {
                    lt(f)
                }
            };
            a.la[b] = c
        }
        return c ? c : null
    }

    function Ay(a, b) {
        var c = "ytPlayer" + b + a.v;
        a.i[b] = c;
        x[c] = function(d) {
            var e = rm(function() {
                if (!a.h()) {
                    try {
                        a.W.bb(b, null != d ? d : void 0)
                    } catch (h) {
                        mt(new rn("PlayerProxy error when creating global callback", {
                            error: h,
                            event: b,
                            playerId: a.v,
                            data: d
                        }))
                    }
                    var f = a.T,
                        g = String(e);
                    g in f && delete f[g]
                }
            }, 0);
            pb(a.T, String(e))
        };
        return c
    }
    k.getPlayerType = function() {
        return this.aa || (ry(this) ? "html5" : null)
    };
    k.getLastError = function() {
        return this.lastError
    };

    function uy(a) {
        a.cancel();
        jy(a);
        a.aa = null;
        a.config && (a.config.loaded = !1);
        var b = ry(a);
        b && (qy(a) || !xy(a) ? a.l = b : (b && b.destroy && b.destroy(), a.l = null));
        if (a.m)
            for (a = a.m; b = a.firstChild;) a.removeChild(b)
    }
    k.cancel = function() {
        this.M && Kw(sy(this), this.M);
        window.clearTimeout(this.Fb);
        this.Z = !1
    };
    k.K = function() {
        uy(this);
        if (this.l && this.config && this.l.destroy) try {
            this.l.destroy()
        } catch (b) {
            lt(b)
        }
        this.la = null;
        for (var a in this.i) this.i.hasOwnProperty(a) && (x[this.i[a]] = null);
        this.pb = this.config = this.api = null;
        delete this.m;
        delete this.j;
        J.prototype.K.call(this)
    };

    function xy(a) {
        var b, c;
        a = null == (b = a.config) ? void 0 : null == (c = b.args) ? void 0 : c.fflags;
        return !!a && -1 !== a.indexOf("player_destroy_old_version=true")
    }

    function sy(a) {
        return a.webPlayerContextConfig ? a.webPlayerContextConfig.jsUrl : (a = a.config.assets) ? a.js : ""
    }

    function wy(a) {
        return a.webPlayerContextConfig ? a.webPlayerContextConfig.cssUrl : (a = a.config.assets) ? a.css : ""
    }

    function vy(a, b) {
        if (a.webPlayerContextConfig) var c = a.webPlayerContextConfig.serializedExperimentFlags;
        else {
            var d;
            if (null == (d = a.config) ? 0 : d.args) c = a.config.args.fflags
        }
        return "true" === am(c || "", "&")[b]
    }

    function oy(a) {
        for (var b = {}, c = t(Object.keys(a)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a[d];
            b[d] = "object" === typeof e ? sb(e) : e
        }
        return b
    };
    var By = {},
        Cy = "player_uid_" + (1E9 * Math.random() >>> 0);

    function Dy(a, b) {
        var c = "player",
            d = !1;
        d = void 0 === d ? !0 : d;
        c = "string" === typeof c ? rf(c) : c;
        var e = Cy + "_" + Ta(c),
            f = By[e];
        if (f && d) return Ey(a, b) ? f.api.loadVideoByPlayerVars(a.args || null) : f.loadNewVideoConfig(a), f.api;
        f = new iy(c, e, a, b, void 0);
        By[e] = f;
        Yr("player-added", f.api);
        Ae(f, function() {
            delete By[f.getId()]
        });
        return f.api
    }

    function Ey(a, b) {
        return b && b.serializedExperimentFlags ? b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true") : a && a.args && a.args.fflags ? a.args.fflags.includes("web_player_remove_playerproxy=true") : !1
    };
    var Fy = null,
        Gy = null,
        Hy = null;

    function Iy() {
        Jy()
    }

    function Ky() {
        Jy()
    }

    function Jy() {
        var a = Fy.getVideoData(1);
        a = a.title ? a.title + " - YouTube" : "YouTube";
        document.title !== a && (document.title = a)
    }

    function cw(a) {
        var b, c;
        if (a = null == (b = a.command) ? void 0 : null == (c = b.urlEndpoint) ? void 0 : c.url) b = window, c = Qh(a), void 0 !== c && b.open(c, void 0, void 0);
        return []
    }

    function Ly() {
        Fy && Fy.sendAbandonmentPing && Fy.sendAbandonmentPing();
        O("PL_ATT") && Yx.dispose();
        for (var a = qi, b = 0, c = Lw.length; b < c; b++) a.Fa(Lw[b]);
        Lw.length = 0;
        Jw("//static.doubleclick.net/instream/ad_status.js");
        Mw = !1;
        Sl("DCLKSTAT", 0);
        ye(Hy, Gy);
        Fy && (Fy.removeEventListener("onVideoDataChange", Iy), Fy.destroy())
    };

    function My(a, b, c) {
        a = "ST-" + tc(a).toString(36);
        b = b ? Cc(b) : "";
        c = c || 5;
        Mt() && Zm(a, b, c)
    };

    function Ny(a, b, c) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? !1 : c;
        var d = O("EVENT_ID");
        d && (b.ei || (b.ei = d));
        if (b) {
            d = a;
            var e = void 0 === e ? !0 : e;
            var f = O("VALID_SESSION_TEMPDATA_DOMAINS", []),
                g = xc(window.location.href);
            g && f.push(g);
            g = xc(d);
            if (0 <= fb(f, g) || !g && 0 == d.lastIndexOf("/", 0))
                if (R("autoescape_tempdata_url") && (f = document.createElement("a"), nc(f, d), d = f.href), d && (d = yc(d), f = d.indexOf("#"), d = 0 > f ? d : d.slice(0, f)))
                    if (e && !b.csn && (b.itct || b.ved) && (b = Object.assign({
                            csn: At()
                        }, b)), h) {
                        var h = parseInt(h, 10);
                        isFinite(h) && 0 < h &&
                            My(d, b, h)
                    } else My(d, b)
        }
        if (c) return !1;
        if ((window.ytspf || {}).enabled) spf.navigate(a);
        else {
            var l = void 0 === l ? {} : l;
            var m = void 0 === m ? "" : m;
            var p = void 0 === p ? window : p;
            c = p.location;
            a = Ec(a, l) + m;
            var r = void 0 === r ? ai : r;
            a: {
                r = void 0 === r ? ai : r;
                for (l = 0; l < r.length; ++l)
                    if (m = r[l], m instanceof Zh && m.se(a)) {
                        r = new Kb(a, Pb);
                        break a
                    }
                r = void 0
            }
            r = Qh(r || Qb);
            void 0 !== r && (c.href = r)
        }
        return !0
    };
    A("yt.setConfig", Sl);
    A("yt.config.set", Sl);
    A("yt.setMsg", Dt);
    A("yt.msgs.set", Dt);
    A("yt.logging.errors.log", lt);
    A("writeEmbed", function() {
        var a = O("PLAYER_CONFIG");
        if (!a) {
            var b = O("PLAYER_VARS");
            b && (a = {
                args: b
            })
        }
        Wt(!0);
        "gvn" === a.args.ps && (document.body.style.backgroundColor = "transparent");
        a.attrs || (a.attrs = {
            width: "100%",
            height: "100%",
            id: "video-player"
        });
        var c = document.referrer;
        b = O("POST_MESSAGE_ORIGIN");
        window !== window.top && c && c !== document.URL && (a.args.loaderUrl = c);
        wv("embed", ["ol"]);
        c = O("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;
        if (!c.serializedForcedExperimentIds) {
            var d = fm(window.location.href);
            d.forced_experiments && (c.serializedForcedExperimentIds = d.forced_experiments)
        }
        var e;
        (null == (e = a.args) ? 0 : e.autoplay) && wv("watch", ["pbs", "pbu", "pbp"]);
        Fy = Dy(a, c);
        R("embeds_enable_server_driven_watch_again_on_youtube") && !bw.h && (bw.h = new bw);
        Fy.addEventListener("onVideoDataChange", Iy);
        Fy.addEventListener("onReady", Ky);
        R("embeds_enable_server_driven_watch_again_on_youtube") && Fy.addEventListener("innertubeCommand", function(f) {
            gw(bw.h, f)
        });
        a = O("POST_MESSAGE_ID", "player");
        O("ENABLE_JS_API") ? Hy = new Lx(Fy) : O("ENABLE_POST_API") && "string" === typeof a && "string" === typeof b && (Gy = new Sx(window.parent, a, b), Hy = new Px(Fy, Gy.connection));
        Nw();
        R("ytidb_create_logger_embed_killswitch") || Gn();
        a = {};
        px.h || (px.h = new px);
        px.h.install((a.flush_logs = {
            callback: function() {
                Is()
            }
        }, a));
        yr();
        R("ytidb_clear_embedded_player") && qi.ma(function() {
            var f, g;
            if (!aw) {
                var h = is(),
                    l = {
                        Lc: $v,
                        Id: Zv
                    };
                h.h.set(l.Lc, l);
                l = {
                    sc: {
                        feedbackEndpoint: iu(Uv),
                        modifyChannelNotificationPreferenceEndpoint: iu(Vv),
                        playlistEditEndpoint: iu(Wv),
                        subscribeEndpoint: iu(Sv),
                        unsubscribeEndpoint: iu(Tv),
                        webPlayerShareEntityServiceEndpoint: iu(Xv)
                    }
                };
                var m = fu(),
                    p = {};
                m && (p.client_location = m);
                void 0 === f && (f = Um());
                void 0 === g && (g = h.resolve($v));
                Fv(l, g, f, p);
                f = {
                    Lc: Lv,
                    Jd: Ev.h
                };
                h.h.set(f.Lc, f);
                aw = h.resolve(Lv)
            }
            xw()
        })
    });
    var Oy = Wl(function() {
            Av();
            Xt()
        }),
        Py = Wl(function(a) {
            a.persisted || (Av(), Xt())
        }),
        Qy = Wl(function(a) {
            R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch") ? Ly() : a.persisted || Ly()
        }),
        Ry = Wl(Ly);
    window.addEventListener ? (window.addEventListener("load", Oy), window.addEventListener("pageshow", Py), window.addEventListener("pagehide", Qy)) : window.attachEvent && (window.attachEvent("onload", Oy), window.attachEvent("onunload", Ry));
    A("yt.abuse.player.botguardInitialized", B("yt.abuse.player.botguardInitialized") || Zx);
    A("yt.abuse.player.invokeBotguard", B("yt.abuse.player.invokeBotguard") || $x);
    A("yt.abuse.dclkstatus.checkDclkStatus", B("yt.abuse.dclkstatus.checkDclkStatus") || Ow);
    A("yt.player.exports.navigate", B("yt.player.exports.navigate") || Ny);
    A("yt.util.activity.init", B("yt.util.activity.init") || Nr);
    A("yt.util.activity.getTimeSinceActive", B("yt.util.activity.getTimeSinceActive") || Qr);
    A("yt.util.activity.setTimestamp", B("yt.util.activity.setTimestamp") || Or);
}).call(this);