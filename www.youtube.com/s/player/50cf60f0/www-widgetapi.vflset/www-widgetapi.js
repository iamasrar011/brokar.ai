(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var q;

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

    function ea(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var fa = ea(this);

    function t(a, b) {
        if (b) a: {
            var c = fa;a = a.split(".");
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
    t("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    });
    t("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = fa[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ha(aa(this))
                }
            })
        }
        return a
    });

    function ha(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function u(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (b) return b.call(a);
        if ("number" == typeof a.length) return {
            next: aa(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }

    function ia(a) {
        if (!(a instanceof Array)) {
            a = u(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }

    function la(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var ma = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) la(d, e) && (a[e] = d[e])
        }
        return a
    };
    t("Object.assign", function(a) {
        return a || ma
    });
    var na = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        oa;
    if ("function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                    a: !0
                },
                ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {}
            pa = !1
        }
        oa = pa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sa = oa;

    function v(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (sa) sa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.ma = b.prototype
    }

    function ta() {
        this.G = !1;
        this.l = null;
        this.h = void 0;
        this.g = 1;
        this.u = this.o = 0;
        this.W = this.i = null
    }

    function ua(a) {
        if (a.G) throw new TypeError("Generator is already running");
        a.G = !0
    }
    ta.prototype.M = function(a) {
        this.h = a
    };

    function va(a, b) {
        a.i = {
            Zb: b,
            lc: !0
        };
        a.g = a.o || a.u
    }
    ta.prototype.return = function(a) {
        this.i = {
            return: a
        };
        this.g = this.u
    };

    function w(a, b, c) {
        a.g = c;
        return {
            value: b
        }
    }
    ta.prototype.C = function(a) {
        this.g = a
    };

    function wa(a, b, c) {
        a.o = b;
        void 0 != c && (a.u = c)
    }

    function xa(a, b) {
        a.g = b;
        a.o = 0
    }

    function Aa(a) {
        a.o = 0;
        var b = a.i.Zb;
        a.i = null;
        return b
    }

    function Ba(a) {
        a.W = [a.i];
        a.o = 0;
        a.u = 0
    }

    function Ca(a) {
        var b = a.W.splice(0)[0];
        (b = a.i = a.i || b) ? b.lc ? a.g = a.o || a.u : void 0 != b.C && a.u < b.C ? (a.g = b.C, a.i = null) : a.g = a.u: a.g = 0
    }

    function Da(a) {
        this.g = new ta;
        this.h = a
    }

    function Ea(a, b) {
        ua(a.g);
        var c = a.g.l;
        if (c) return Fa(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.g.return);
        a.g.return(b);
        return Ga(a)
    }

    function Fa(a, b, c, d) {
        try {
            var e = b.call(a.g.l, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.g.G = !1, e;
            var f = e.value
        } catch (g) {
            return a.g.l = null, va(a.g, g), Ga(a)
        }
        a.g.l = null;
        d.call(a.g, f);
        return Ga(a)
    }

    function Ga(a) {
        for (; a.g.g;) try {
            var b = a.h(a.g);
            if (b) return a.g.G = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.g.h = void 0, va(a.g, c)
        }
        a.g.G = !1;
        if (a.g.i) {
            b = a.g.i;
            a.g.i = null;
            if (b.lc) throw b.Zb;
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

    function Ha(a) {
        this.next = function(b) {
            ua(a.g);
            a.g.l ? b = Fa(a, a.g.l.next, b, a.g.M) : (a.g.M(b), b = Ga(a));
            return b
        };
        this.throw = function(b) {
            ua(a.g);
            a.g.l ? b = Fa(a, a.g.l["throw"], b, a.g.M) : (va(a.g, b), b = Ga(a));
            return b
        };
        this.return = function(b) {
            return Ea(a, b)
        };
        this[Symbol.iterator] = function() {
            return this
        }
    }

    function Ia(a) {
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

    function x(a) {
        return Ia(new Ha(new Da(a)))
    }

    function Ka() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    t("Reflect.setPrototypeOf", function(a) {
        return a ? a : sa ? function(b, c) {
            try {
                return sa(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    });
    t("Promise", function(a) {
        function b(g) {
            this.g = 0;
            this.i = void 0;
            this.h = [];
            this.G = !1;
            var h = this.l();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.g = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.h = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.i(function() {
                    h.u()
                })
            }
            this.g.push(g)
        };
        var e = fa.setTimeout;
        c.prototype.i = function(g) {
            e(g, 0)
        };
        c.prototype.u = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.l(l)
                    }
                }
            }
            this.g = null
        };
        c.prototype.l = function(g) {
            this.i(function() {
                throw g;
            })
        };
        b.prototype.l = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.Db),
                reject: g(this.u)
            }
        };
        b.prototype.Db = function(g) {
            if (g === this) this.u(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.Dc(g);
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
                h ? this.Cb(g) : this.o(g)
            }
        };
        b.prototype.Cb = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.u(k);
                return
            }
            "function" == typeof h ? this.Ec(h, g) : this.o(g)
        };
        b.prototype.u = function(g) {
            this.M(2, g)
        };
        b.prototype.o = function(g) {
            this.M(1, g)
        };
        b.prototype.M = function(g, h) {
            if (0 != this.g) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.i = h;
            2 === this.g && this.Eb();
            this.W()
        };
        b.prototype.Eb = function() {
            var g = this;
            e(function() {
                if (g.La()) {
                    var h = fa.console;
                    "undefined" !== typeof h && h.error(g.i)
                }
            }, 1)
        };
        b.prototype.La = function() {
            if (this.G) return !1;
            var g = fa.CustomEvent,
                h = fa.Event,
                k = fa.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = fa.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.i;
            return k(g)
        };
        b.prototype.W = function() {
            if (null != this.h) {
                for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
                this.h = null
            }
        };
        var f = new c;
        b.prototype.Dc = function(g) {
            var h = this.l();
            g.qb(h.resolve, h.reject)
        };
        b.prototype.Ec = function(g, h) {
            var k = this.l();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(r, p) {
                return "function" == typeof r ? function(y) {
                    try {
                        l(r(y))
                    } catch (A) {
                        m(A)
                    }
                } : p
            }
            var l, m, n = new b(function(r, p) {
                l = r;
                m = p
            });
            this.qb(k(g, l), k(h, m));
            return n
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.qb = function(g, h) {
            function k() {
                switch (l.g) {
                    case 1:
                        g(l.i);
                        break;
                    case 2:
                        h(l.i);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.g);
                }
            }
            var l = this;
            null == this.h ? f.h(k) : this.h.push(k);
            this.G = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = u(g), m = l.next(); !m.done; m = l.next()) d(m.value).qb(h, k)
            })
        };
        b.all = function(g) {
            var h = u(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function n(y) {
                    return function(A) {
                        r[y] = A;
                        p--;
                        0 == p && l(r)
                    }
                }
                var r = [],
                    p = 0;
                do r.push(void 0), p++, d(k.value).qb(n(r.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return b
    });
    t("WeakMap", function(a) {
        function b(k) {
            this.g = (h += Math.random() + 1).toString();
            if (k) {
                k = u(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        }

        function c() {}

        function d(k) {
            var l = typeof k;
            return "object" === l && null !== k || "function" === l
        }

        function e(k) {
            if (!la(k, g)) {
                var l = new c;
                ba(k, g, {
                    value: l
                })
            }
        }

        function f(k) {
            var l = Object[k];
            l && (Object[k] = function(m) {
                if (m instanceof c) return m;
                Object.isExtensible(m) && e(m);
                return l(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        l = Object.seal({}),
                        m = new a([
                            [k, 2],
                            [l, 3]
                        ]);
                    if (2 != m.get(k) || 3 != m.get(l)) return !1;
                    m.delete(k);
                    m.set(l, 4);
                    return !m.has(k) && 4 == m.get(l)
                } catch (n) {
                    return !1
                }
            }()) return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var h = 0;
        b.prototype.set = function(k, l) {
            if (!d(k)) throw Error("Invalid WeakMap key");
            e(k);
            if (!la(k, g)) throw Error("WeakMap key fail: " + k);
            k[g][this.g] = l;
            return this
        };
        b.prototype.get = function(k) {
            return d(k) && la(k, g) ? k[g][this.g] : void 0
        };
        b.prototype.has = function(k) {
            return d(k) && la(k, g) && la(k[g], this.g)
        };
        b.prototype.delete = function(k) {
            return d(k) && la(k, g) && la(k[g], this.g) ? delete k[g][this.g] : !1
        };
        return b
    });
    t("Map", function(a) {
        function b() {
            var h = {};
            return h.previous = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.g;
            return ha(function() {
                if (l) {
                    for (; l.head != h.g;) l = l.previous;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.data_[l];
            if (m && la(h.data_, l))
                for (h = 0; h < m.length; h++) {
                    var n = m[h];
                    if (k !== k && n.key !== n.key || k === n.key) return {
                        id: l,
                        list: m,
                        index: h,
                        entry: n
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                entry: void 0
            }
        }

        function e(h) {
            this.data_ = {};
            this.g = b();
            this.size = 0;
            if (h) {
                h = u(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(u([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var f = new WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.data_[l.id] = []);
            l.entry ? l.entry.value = k : (l.entry = {
                next: this.g,
                previous: this.g.previous,
                head: this.g,
                key: h,
                value: k
            }, l.list.push(l.entry), this.g.previous.next = l.entry, this.g.previous = l.entry, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.entry && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.data_[h.id], h.entry.previous.next = h.entry.next, h.entry.next.previous = h.entry.previous, h.entry.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.data_ = {};
            this.g = this.g.previous = b();
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
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });

    function La(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    t("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = La(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    t("Array.prototype.find", function(a) {
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
    t("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = La(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    t("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    t("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    t("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });

    function Ma(a, b) {
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
    t("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ma(this, function(b, c) {
                return [b, c]
            })
        }
    });
    t("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ma(this, function(b) {
                return b
            })
        }
    });
    t("Array.from", function(a) {
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
    t("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    t("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ma(this, function(b, c) {
                return c
            })
        }
    });
    t("Object.setPrototypeOf", function(a) {
        return a || sa
    });
    t("Set", function(a) {
        function b(c) {
            this.g = new Map;
            if (c) {
                c = u(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(u([c]));
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
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return this.g.entries()
        };
        b.prototype.values = function() {
            return this.g.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    t("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) la(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    t("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    t("Array.prototype.includes", function(a) {
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
    t("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== La(this, b, "includes").indexOf(b, c || 0)
        }
    });
    var z = this || self;

    function B(a, b, c) {
        a = a.split(".");
        c = c || z;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function C(a, b) {
        a = a.split(".");
        b = b || z;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function Na(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function Oa(a) {
        var b = Na(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Pa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Qa(a) {
        return Object.prototype.hasOwnProperty.call(a, Ra) && a[Ra] || (a[Ra] = ++Sa)
    }
    var Ra = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Sa = 0;

    function Ta(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ua(a, b, c) {
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

    function Xa(a, b, c) {
        Xa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ta : Ua;
        return Xa.apply(null, arguments)
    }

    function D(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.ma = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Jd = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Ya(a) {
        return a
    };

    function Za(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Za);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    D(Za, Error);
    Za.prototype.name = "CustomError";

    function $a(a) {
        a = a.url;
        var b = /[?&]dsh=1(&|$)/.test(a);
        this.i = !b && /[?&]ae=1(&|$)/.test(a);
        this.l = !b && /[?&]ae=2(&|$)/.test(a);
        if ((this.g = /[?&]adurl=([^&]*)/.exec(a)) && this.g[1]) {
            try {
                var c = decodeURIComponent(this.g[1])
            } catch (d) {
                c = null
            }
            this.h = c
        }
    };

    function ab() {}

    function bb(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var cb = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        db = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        eb = Array.prototype.reduce ? function(a, b, c) {
            return Array.prototype.reduce.call(a, b, c)
        } : function(a, b, c) {
            var d = c;
            db(a, function(e, f) {
                d = b.call(void 0, d, e, f, a)
            });
            return d
        };

    function fb(a, b) {
        b = cb(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function gb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function hb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function ib(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (Oa(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    };

    function jb(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }

    function kb(a) {
        var b = lb,
            c;
        for (c in b)
            if (a.call(void 0, b[c], c, b)) return c
    }

    function mb(a, b) {
        for (var c in a)
            if (!(c in b) || a[c] !== b[c]) return !1;
        for (var d in b)
            if (!(d in a)) return !1;
        return !0
    }

    function nb(a) {
        if (!a || "object" !== typeof a) return a;
        if ("function" === typeof a.clone) return a.clone();
        if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
        if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
        if (a instanceof Date) return new Date(a.getTime());
        var b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length),
            c;
        for (c in a) b[c] = nb(a[c]);
        return b
    }
    var ob = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function pb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < ob.length; f++) c = ob[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var qb;

    function rb() {}

    function sb(a) {
        return new rb(tb, a)
    }
    var tb = {};
    sb("");
    var ub = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        vb = /&/g,
        wb = /</g,
        xb = />/g,
        yb = /"/g,
        zb = /'/g,
        Ab = /\x00/g,
        Bb = /[\x00&<>"']/;

    function Cb(a) {
        this.g = a
    }
    Cb.prototype.toString = function() {
        return this.g.toString()
    };
    var Db = {},
        Jb = new Cb("about:invalid#zClosurez", Db);
    var Kb, Lb = C("CLOSURE_FLAGS"),
        Mb = Lb && Lb[610401301];
    Kb = null != Mb ? Mb : !1;

    function Nb() {
        var a = z.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Ob, Pb = z.navigator;
    Ob = Pb ? Pb.userAgentData || null : null;

    function Qb(a) {
        return Kb ? Ob ? Ob.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }

    function E(a) {
        return -1 != Nb().indexOf(a)
    };

    function Rb() {
        return Kb ? !!Ob && 0 < Ob.brands.length : !1
    }

    function Sb() {
        return Rb() ? !1 : E("Trident") || E("MSIE")
    }

    function Tb() {
        return Rb() ? Qb("Chromium") : (E("Chrome") || E("CriOS")) && !(Rb() ? 0 : E("Edge")) || E("Silk")
    };

    function Ub(a) {
        this.g = a
    }
    Ub.prototype.toString = function() {
        return this.g.toString()
    };

    function Vb(a) {
        Bb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(vb, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(wb, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(xb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(yb, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(zb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Ab, "&#0;")));
        return a
    };
    var Wb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Xb(a) {
        return a ? decodeURI(a) : a
    }

    function Yb(a) {
        return Xb(a.match(Wb)[3] || null)
    }

    function Zb(a) {
        var b = a.match(Wb);
        a = b[1];
        var c = b[2],
            d = b[3];
        b = b[4];
        var e = "";
        a && (e += a + ":");
        d && (e += "//", c && (e += c + "@"), e += d, b && (e += ":" + b));
        return e
    }

    function $b(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) $b(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }

    function ac(a) {
        var b = [],
            c;
        for (c in a) $b(c, a[c], b);
        return b.join("&")
    }
    var bc = /#|$/;

    function cc(a, b) {
        var c = a.search(bc);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };

    function dc(a) {
        z.setTimeout(function() {
            throw a;
        }, 0)
    };

    function ec() {
        return E("iPhone") && !E("iPod") && !E("iPad")
    };

    function fc(a) {
        fc[" "](a);
        return a
    }
    fc[" "] = function() {};
    var gc = Rb() ? !1 : E("Opera"),
        hc = Sb(),
        ic = E("Edge"),
        nc = E("Gecko") && !(-1 != Nb().toLowerCase().indexOf("webkit") && !E("Edge")) && !(E("Trident") || E("MSIE")) && !E("Edge"),
        oc = -1 != Nb().toLowerCase().indexOf("webkit") && !E("Edge");

    function pc() {
        var a = z.document;
        return a ? a.documentMode : void 0
    }
    var qc;
    a: {
        var rc = "",
            sc = function() {
                var a = Nb();
                if (nc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (ic) return /Edge\/([\d\.]+)/.exec(a);
                if (hc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (oc) return /WebKit\/(\S+)/.exec(a);
                if (gc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        sc && (rc = sc ? sc[1] : "");
        if (hc) {
            var tc = pc();
            if (null != tc && tc > parseFloat(rc)) {
                qc = String(tc);
                break a
            }
        }
        qc = rc
    }
    var uc = qc,
        vc;
    if (z.document && hc) {
        var wc = pc();
        vc = wc ? wc : parseInt(uc, 10) || void 0
    } else vc = void 0;
    var xc = vc;
    var yc = ec() || E("iPod"),
        zc = E("iPad");
    !E("Android") || Tb();
    Tb();
    var Ac = E("Safari") && !(Tb() || (Rb() ? 0 : E("Coast")) || (Rb() ? 0 : E("Opera")) || (Rb() ? 0 : E("Edge")) || (Rb() ? Qb("Microsoft Edge") : E("Edg/")) || (Rb() ? Qb("Opera") : E("OPR")) || E("Firefox") || E("FxiOS") || E("Silk") || E("Android")) && !(ec() || E("iPad") || E("iPod"));
    var Bc = {},
        Cc = null;

    function Dc(a, b) {
        Oa(a);
        void 0 === b && (b = 0);
        if (!Cc) {
            Cc = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Bc[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Cc[h] && (Cc[h] = g)
                }
            }
        }
        b = Bc[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var k = a[f],
                l = a[f + 1];
            h = a[f + 2];
            g = b[k >> 2];
            k = b[(k & 3) << 4 | l >> 4];
            l = b[(l & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[e++] = "" + g + k + l + h
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
    var Ec = "undefined" !== typeof Uint8Array,
        Fc = !hc && "function" === typeof btoa;
    var Gc = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;

    function Hc(a, b) {
        if (Gc) return a[Gc] |= b;
        if (void 0 !== a.ja) return a.ja |= b;
        Object.defineProperties(a, {
            ja: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function Ic(a, b) {
        Gc ? a[Gc] && (a[Gc] &= ~b) : void 0 !== a.ja && (a.ja &= ~b)
    }

    function F(a) {
        var b;
        Gc ? b = a[Gc] : b = a.ja;
        return null == b ? 0 : b
    }

    function Jc(a, b) {
        Gc ? a[Gc] = b : void 0 !== a.ja ? a.ja = b : Object.defineProperties(a, {
            ja: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return a
    }

    function Kc(a, b) {
        Object.isFrozen(a) && (a = Array.prototype.slice.call(a));
        Jc(a, b);
        return a
    }

    function Lc(a) {
        Hc(a, 1);
        return a
    }

    function Mc(a, b) {
        Jc(b, (a | 0) & -51)
    }

    function Nc(a, b) {
        Jc(b, (a | 18) & -41)
    };
    var Oc = {};

    function Pc(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var Rc, Sc = Object.freeze(Jc([], 23));

    function Tc(a) {
        if (F(a.L) & 2) throw Error();
    };

    function Uc(a) {
        return a.displayName || a.name || "unknown type name"
    }

    function Vc(a, b) {
        if (!(a instanceof b)) throw Error("Expected instanceof " + Uc(b) + " but got " + (a && Uc(a.constructor)));
        return a
    }

    function Wc(a, b, c) {
        var d = !1;
        if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.Nb === Oc) return a;
        if (d) {
            var e = d = F(a);
            0 === e && (e |= c & 16);
            e |= c & 2;
            e !== d && Jc(a, e);
            return new b(a)
        }
    };

    function Xc(a) {
        var b = a.h + a.g;
        return a.sa || (a.sa = a.L[b] = {})
    }

    function Yc(a, b, c) {
        return -1 === b ? null : b >= a.h ? a.sa ? a.sa[b] : void 0 : c && a.sa && (c = a.sa[b], null != c) ? c : a.L[b + a.g]
    }

    function G(a, b, c) {
        Tc(a);
        return Zc(a, b, c)
    }

    function Zc(a, b, c, d) {
        a.i && (a.i = void 0);
        if (b >= a.h || d) return Xc(a)[b] = c, a;
        a.L[b + a.g] = c;
        (c = a.sa) && b in c && delete c[b];
        return a
    }

    function $c(a, b, c, d, e) {
        var f = Yc(a, b, d);
        Array.isArray(f) || (f = Sc);
        var g = F(f);
        g & 1 || Lc(f);
        if (e) g & 2 || Hc(f, 18), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            var h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && Ic(f, 16) : (f = Lc(Array.prototype.slice.call(f)), Zc(a, b, f, d))
        }
        return f
    }

    function ad(a, b, c, d) {
        Tc(a);
        (c = bd(a, c)) && c !== b && null != d && Zc(a, c, void 0, !1);
        Zc(a, b, d)
    }

    function bd(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != Yc(a, e) && (0 !== c && Zc(a, c, void 0, !1), c = e)
        }
        return c
    }

    function cd(a, b, c) {
        var d = void 0 === d ? !1 : d;
        var e = Yc(a, c, d);
        b = Wc(e, b, F(a.L));
        b !== e && null != b && Zc(a, c, b, d);
        e = b;
        if (null == e) return e;
        if (!(F(a.L) & 2)) {
            b = e;
            if (F(b.L) & 2) {
                var f = dd(b, !1);
                f.i = b;
                b = f
            }
            b !== e && (e = b, Zc(a, c, e, d))
        }
        return e
    }

    function H(a, b, c, d) {
        Tc(a);
        null != d ? Vc(d, b) : d = void 0;
        return Zc(a, c, d)
    }

    function ed(a, b, c, d, e) {
        Tc(a);
        null != e ? Vc(e, b) : e = void 0;
        ad(a, c, d, e)
    }

    function fd(a, b, c, d) {
        var e = F(a.L);
        if (e & 2) throw Error();
        var f = !!(e & 2),
            g = $c(a, b, 1, void 0, f);
        if (g !== Sc && F(g) & 4) {
            if (!f) {
                f = Object.isFrozen(g);
                var h = F(g);
                e = h & -19;
                f && (g = Array.prototype.slice.call(g), h = 0, Zc(a, b, g));
                h !== e && Jc(g, e)
            }
            a = g
        } else {
            h = g;
            g = !!(e & 2);
            var k = !!(F(h) & 2);
            f = h;
            !g && k && (h = Array.prototype.slice.call(h));
            e |= k ? 2 : 0;
            for (var l = 0, m = 0; l < h.length; l++) {
                var n = Wc(h[l], c, e);
                void 0 !== n && (k || (k = !!(2 & F(n.L))), h[m++] = n)
            }
            m < l && (h.length = m);
            k = !k;
            e = F(h);
            l = e | 5;
            k = k ? l | 8 : l & -9;
            e != k && (h = Kc(h, k));
            f !== h && Zc(a, b, h);
            g && Object.freeze(h);
            a = h
        }
        c = null != d ? Vc(d, c) : new c;
        a.push(c);
        F(c.L) & 2 && Ic(a, 8)
    }

    function gd(a, b) {
        a = Yc(a, b);
        return null == a ? "" : a
    }

    function kd(a, b) {
        var c = bd(a, ld) === b;
        return Yc(a, c ? b : -1)
    };
    var md;

    function nd(a, b) {
        return od(b)
    }

    function od(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a && !Array.isArray(a) && Ec && null != a && a instanceof Uint8Array) {
                    if (Fc) {
                        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        a = btoa(b)
                    } else a = Dc(a);
                    return a
                }
        }
        return a
    };

    function pd(a, b) {
        var c = a.L,
            d = c.length,
            e = [];
        Hc(e, 16);
        var f = a.constructor.h;
        f && e.push(f);
        var g = a.sa;
        if (g) {
            e.length = d;
            var h = {};
            e[d - 1] = h
        }
        var k = a.constructor;
        F(e);
        md = e;
        k = new k(e);
        md = void 0;
        a.kc && (k.kc = a.kc.slice());
        a = g ? d - 1 : d;
        for (f = f ? 1 : 0; f < a; f++) e[f] = b(c[f]);
        if (g)
            for (var l in g) h[l] = b(g[l]);
        return k
    }

    function qd(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && F(a) & 1 ? void 0 : f && F(a) & 2 ? a : rd(a, b, c, void 0 !== d, e, f);
            else if (Pc(a)) {
                var g = {},
                    h;
                for (h in a) g[h] = qd(a[h], b, c, d, e, f);
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function rd(a, b, c, d, e, f) {
        var g = F(a);
        d = d ? !!(g & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var h = 0; h < a.length; h++) a[h] = qd(a[h], b, c, d, e, f);
        c && c(g, a);
        return a
    }

    function sd(a) {
        return a.Nb === Oc ? a.toJSON() : od(a)
    };

    function td(a, b, c) {
        c = void 0 === c ? Nc : c;
        if (null != a) {
            if (Ec && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = F(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return Jc(a, d | 18), a;
                a = rd(a, td, d & 4 ? Nc : c, !0, !1, !0);
                b = F(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            a.Nb === Oc && (F(a.L) & 2 || (a = dd(a, !0), Hc(a.L, 18)));
            return a
        }
    }

    function dd(a, b) {
        var c = a.L,
            d = b || F(a.L) & 2 ? Nc : Mc,
            e = !!(F(c) & 16);
        return pd(a, function(f) {
            return td(f, e, d)
        })
    };

    function J(a, b, c) {
        null == a && (a = md);
        md = void 0;
        var d = this.constructor.h;
        if (null == a) {
            a = d ? [d] : [];
            var e = !0;
            Jc(a, 48)
        } else {
            if (!Array.isArray(a)) throw Error();
            if (d && d !== a[0]) throw Error();
            var f = Hc(a, 0) | 32;
            e = 0 !== (16 & f);
            Jc(a, f)
        }
        this.g = d ? 0 : -1;
        this.L = a;
        a: {
            f = this.L.length;d = f - 1;
            if (f && (f = this.L[d], Pc(f))) {
                this.sa = f;
                this.h = d - this.g;
                break a
            }
            void 0 !== b && -1 < b ? (this.h = Math.max(b, d + 1 - this.g), this.sa = void 0) : this.h = Number.MAX_VALUE
        }
        if (c) {
            b = e && !0;
            e = this.h;
            var g;
            for (d = 0; d < c.length; d++)
                if (f = c[d], f < e) {
                    f += this.g;
                    var h = a[f];
                    h ? ud(h, b) : a[f] = Sc
                } else g || (g = Xc(this)), (h = g[f]) ? ud(h, b) : g[f] = Sc
        }
        F(this.L)
    }
    J.prototype.toJSON = function() {
        var a = this.L,
            b;
        Rc ? b = a : b = rd(a, sd, void 0, void 0, !1, !1);
        return b
    };

    function vd(a) {
        Rc = !0;
        try {
            return JSON.stringify(a.toJSON(), nd)
        } finally {
            Rc = !1
        }
    }
    J.prototype.clone = function() {
        return dd(this, !1)
    };

    function ud(a, b) {
        if (Array.isArray(a)) {
            var c = F(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && Jc(a, c | d)
        }
    }
    J.prototype.Nb = Oc;
    J.prototype.toString = function() {
        return this.L.toString()
    };
    var wd = window;
    sb("csi.gstatic.com");
    sb("googleads.g.doubleclick.net");
    sb("partner.googleadservices.com");
    sb("pubads.g.doubleclick.net");
    sb("securepubads.g.doubleclick.net");
    sb("tpc.googlesyndication.com");

    function xd(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    q = xd.prototype;
    q.clone = function() {
        return new xd(this.x, this.y)
    };
    q.equals = function(a) {
        return a instanceof xd && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    q.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    q.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    q.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function yd(a, b) {
        this.width = a;
        this.height = b
    }
    q = yd.prototype;
    q.clone = function() {
        return new yd(this.width, this.height)
    };
    q.aspectRatio = function() {
        return this.width / this.height
    };
    q.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    q.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    q.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function zd() {
        var a = document;
        var b = "IFRAME";
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Ad(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    };

    function Bd(a) {
        var b = C("window.location.href");
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
            var e = a.fileName || a.filename || a.sourceURL || z.$googDebugFname || b
        } catch (g) {
            e = "Not available", c = !0
        }
        b = Cd(a);
        if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
            c = a.message;
            if (null ==
                c) {
                if (a.constructor && a.constructor instanceof Function) {
                    if (a.constructor.name) c = a.constructor.name;
                    else if (c = a.constructor, Dd[c]) c = Dd[c];
                    else {
                        c = String(c);
                        if (!Dd[c]) {
                            var f = /function\s+([^\(]+)/m.exec(c);
                            Dd[c] = f ? f[1] : "[Anonymous]"
                        }
                        c = Dd[c]
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

    function Cd(a, b) {
        b || (b = {});
        b[Ed(a)] = !0;
        var c = a.stack || "";
        (a = a.cause) && !b[Ed(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += Cd(a, b));
        return c
    }

    function Ed(a) {
        var b = "";
        "function" === typeof a.toString && (b = "" + a);
        return b + a.stack
    }
    var Dd = {};
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Fd;
    try {
        new URL("s://g"), Fd = !0
    } catch (a) {
        Fd = !1
    }
    var Gd = Fd;

    function Hd(a, b) {
        a.removeAttribute("srcdoc");
        var c = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");
        a.setAttribute("sandbox", "");
        for (var d = 0; d < c.length; d++) a.sandbox.supports && !a.sandbox.supports(c[d]) || a.sandbox.add(c[d]);
        if (b instanceof Cb) b instanceof Cb && b.constructor === Cb ? b = b.g : (Na(b), b = "type_error:SafeUrl");
        else {
            b: if (Gd) {
                try {
                    var e = new URL(b)
                } catch (f) {
                    c = "https:";
                    break b
                }
                c = e.protocol
            } else c: {
                c = document.createElement("a");
                try {
                    c.href = b
                } catch (f) {
                    c = void 0;
                    break c
                }
                c = c.protocol;c = ":" === c || "" === c ? "https:" : c
            }
            b = "javascript:" !== c ? b : void 0
        }
        void 0 !== b && (a.src = b)
    };

    function Id(a) {
        this.ad = a
    }

    function Jd(a) {
        return new Id(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var Kd = [Jd("data"), Jd("http"), Jd("https"), Jd("mailto"), Jd("ftp"), new Id(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function Ld(a, b) {
        b = void 0 === b ? Kd : b;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof Id && d.ad(a)) return new Cb(a, Db)
        }
    }

    function Md(a) {
        var b = void 0 === b ? Kd : b;
        return Ld(a, b) || Jb
    };

    function Nd(a) {
        var b = Od;
        if (b)
            for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && a(b[c], c, b)
    }

    function Pd() {
        var a = [];
        Nd(function(b) {
            a.push(b)
        });
        return a
    }
    var Od = {
            qd: "allow-forms",
            rd: "allow-modals",
            sd: "allow-orientation-lock",
            td: "allow-pointer-lock",
            ud: "allow-popups",
            vd: "allow-popups-to-escape-sandbox",
            wd: "allow-presentation",
            xd: "allow-same-origin",
            yd: "allow-scripts",
            zd: "allow-top-navigation",
            Ad: "allow-top-navigation-by-user-activation"
        },
        Qd = bb(function() {
            return Pd()
        });

    function Rd() {
        var a = Sd(),
            b = {};
        db(Qd(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }

    function Sd() {
        var a = void 0 === a ? document : a;
        return a.createElement("iframe")
    };
    var Td = (new Date).getTime();

    function Ud(a) {
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
    var Vd = "client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");
    ia(Vd);

    function Wd() {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            m = l = 0
        }

        function b(n) {
            for (var r = g, p = 0; 64 > p; p += 4) r[p / 4] = n[p] << 24 | n[p + 1] << 16 | n[p + 2] << 8 | n[p + 3];
            for (p = 16; 80 > p; p++) n = r[p - 3] ^ r[p - 8] ^ r[p - 14] ^ r[p - 16], r[p] = (n << 1 | n >>> 31) & 4294967295;
            n = e[0];
            var y = e[1],
                A = e[2],
                I = e[3],
                O = e[4];
            for (p = 0; 80 > p; p++) {
                if (40 > p)
                    if (20 > p) {
                        var T = I ^ y & (A ^ I);
                        var Q = 1518500249
                    } else T = y ^ A ^ I, Q = 1859775393;
                else 60 > p ? (T = y & A | I & (y | A), Q = 2400959708) : (T = y ^ A ^ I, Q = 3395469782);
                T = ((n << 5 | n >>> 27) & 4294967295) + T + O + Q + r[p] & 4294967295;
                O = I;
                I = A;
                A = (y << 30 | y >>> 2) & 4294967295;
                y = n;
                n = T
            }
            e[0] = e[0] + n & 4294967295;
            e[1] = e[1] + y & 4294967295;
            e[2] =
                e[2] + A & 4294967295;
            e[3] = e[3] + I & 4294967295;
            e[4] = e[4] + O & 4294967295
        }

        function c(n, r) {
            if ("string" === typeof n) {
                n = unescape(encodeURIComponent(n));
                for (var p = [], y = 0, A = n.length; y < A; ++y) p.push(n.charCodeAt(y));
                n = p
            }
            r || (r = n.length);
            p = 0;
            if (0 == l)
                for (; p + 64 < r;) b(n.slice(p, p + 64)), p += 64, m += 64;
            for (; p < r;)
                if (f[l++] = n[p++], m++, 64 == l)
                    for (l = 0, b(f); p + 64 < r;) b(n.slice(p, p + 64)), p += 64, m += 64
        }

        function d() {
            var n = [],
                r = 8 * m;
            56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
            for (var p = 63; 56 <= p; p--) f[p] = r & 255, r >>>= 8;
            b(f);
            for (p = r = 0; 5 > p; p++)
                for (var y = 24; 0 <= y; y -= 8) n[r++] = e[p] >> y & 255;
            return n
        }
        for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
        var l, m;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            Kc: function() {
                for (var n = d(), r = "", p = 0; p < n.length; p++) r += "0123456789ABCDEF".charAt(Math.floor(n[p] / 16)) + "0123456789ABCDEF".charAt(n[p] % 16);
                return r
            }
        }
    };

    function Xd(a, b, c) {
        var d = String(z.location.href);
        return d && a && b ? [b, Yd(Ud(d), a, c || null)].join(" ") : null
    }

    function Yd(a, b, c) {
        var d = [],
            e = [];
        if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], db(d, function(h) {
            e.push(h)
        }), Zd(e.join(" "));
        var f = [],
            g = [];
        db(c, function(h) {
            g.push(h.key);
            f.push(h.value)
        });
        c = Math.floor((new Date).getTime() / 1E3);
        e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
        db(d, function(h) {
            e.push(h)
        });
        a = Zd(e.join(" "));
        a = [c, a];
        0 == g.length || a.push(g.join(""));
        return a.join("_")
    }

    function Zd(a) {
        var b = Wd();
        b.update(a);
        return b.Kc().toLowerCase()
    };
    var $d = {};

    function ae(a) {
        this.g = a || {
            cookie: ""
        }
    }
    q = ae.prototype;
    q.isEnabled = function() {
        if (!z.navigator.cookieEnabled) return !1;
        if (this.g.cookie) return !0;
        this.set("TESTCOOKIESENABLED", "1", {
            Kb: 60
        });
        if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
        this.remove("TESTCOOKIESENABLED");
        return !0
    };
    q.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Rd;
            d = c.secure || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Kb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        c = f ? ";domain=" + f : "";
        g = g ? ";path=" + g : "";
        d = d ? ";secure" : "";
        h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString();
        this.g.cookie = a + "=" + b + c + g + h + d + (null != e ? ";samesite=" +
            e : "")
    };
    q.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = ub(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    q.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            Kb: 0,
            path: b,
            domain: c
        });
        return d
    };
    q.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = ub(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };
    var be = new ae("undefined" == typeof document ? null : document);

    function ce(a) {
        return !!$d.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a)
    }

    function de(a, b, c, d) {
        (a = z[a]) || "undefined" === typeof document || (a = (new ae(document)).get(b));
        return a ? Xd(a, c, d) : null
    }

    function ee(a) {
        var b = void 0 === b ? !1 : b;
        var c = Ud(String(z.location.href)),
            d = [];
        var e = b;
        e = void 0 === e ? !1 : e;
        var f = z.__SAPISID || z.__APISID || z.__3PSAPISID || z.__OVERRIDE_SID;
        ce(e) && (f = f || z.__1PSAPISID);
        if (f) e = !0;
        else {
            if ("undefined" !== typeof document) {
                var g = new ae(document);
                f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID") || g.get("SID") || g.get("OSID");
                ce(e) && (f = f || g.get("__Secure-1PAPISID"))
            }
            e = !!f
        }
        e && (e = (c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:")) ?
            z.__SAPISID : z.__APISID, e || "undefined" === typeof document || (e = new ae(document), e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID")), (e = e ? Xd(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e), c && ce(b) && ((b = de("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b), (a = de("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a)));
        return 0 == d.length ? null : d.join(" ")
    };
    "undefined" !== typeof TextDecoder && new TextDecoder;
    var fe = "undefined" !== typeof TextEncoder ? new TextEncoder : null,
        ge = fe ? function(a) {
            return fe.encode(a)
        } : function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
            }
            a = new Uint8Array(b.length);
            for (c = 0; c < a.length; c++) a[c] = b[c];
            return a
        };

    function he() {
        this.i = this.i;
        this.u = this.u
    }
    he.prototype.i = !1;
    he.prototype.dispose = function() {
        this.i || (this.i = !0, this.xa())
    };
    he.prototype.xa = function() {
        if (this.u)
            for (; this.u.length;) this.u.shift()()
    };

    function ie(a, b) {
        this.type = a;
        this.g = this.target = b;
        this.defaultPrevented = this.i = !1
    }
    ie.prototype.stopPropagation = function() {
        this.i = !0
    };
    ie.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var je = function() {
        if (!z.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            var c = function() {};
            z.addEventListener("test", c, b);
            z.removeEventListener("test", c, b)
        } catch (d) {}
        return a
    }();

    function ke(a, b) {
        ie.call(this, a ? a.type : "");
        this.relatedTarget = this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.h = null;
        a && this.init(a, b)
    }
    D(ke, ie);
    var le = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    ke.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.g = b;
        if (b = a.relatedTarget) {
            if (nc) {
                a: {
                    try {
                        fc(b.nodeName);
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
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : le[a.pointerType] || "";
        this.state = a.state;
        this.h = a;
        a.defaultPrevented && ke.ma.preventDefault.call(this)
    };
    ke.prototype.stopPropagation = function() {
        ke.ma.stopPropagation.call(this);
        this.h.stopPropagation ? this.h.stopPropagation() : this.h.cancelBubble = !0
    };
    ke.prototype.preventDefault = function() {
        ke.ma.preventDefault.call(this);
        var a = this.h;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var me = "closure_listenable_" + (1E6 * Math.random() | 0);
    var ne = 0;

    function oe(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.ub = e;
        this.key = ++ne;
        this.ib = this.pb = !1
    }

    function pe(a) {
        a.ib = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.ub = null
    };

    function qe(a) {
        this.src = a;
        this.listeners = {};
        this.g = 0
    }
    qe.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.listeners[f];
        a || (a = this.listeners[f] = [], this.g++);
        var g = re(a, b, d, e); - 1 < g ? (b = a[g], c || (b.pb = !1)) : (b = new oe(b, this.src, f, !!d, e), b.pb = c, a.push(b));
        return b
    };
    qe.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.listeners)) return !1;
        var e = this.listeners[a];
        b = re(e, b, c, d);
        return -1 < b ? (pe(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.listeners[a], this.g--), !0) : !1
    };

    function ue(a, b) {
        var c = b.type;
        c in a.listeners && fb(a.listeners[c], b) && (pe(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.g--))
    }

    function re(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.ib && f.listener == b && f.capture == !!c && f.ub == d) return e
        }
        return -1
    };
    var ve = "closure_lm_" + (1E6 * Math.random() | 0),
        we = {},
        xe = 0;

    function ye(a, b, c, d, e) {
        if (d && d.once) ze(a, b, c, d, e);
        else if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) ye(a, b[f], c, d, e);
        else c = Ae(c), a && a[me] ? a.Ga(b, c, Pa(d) ? !!d.capture : !!d, e) : Be(a, b, c, !1, d, e)
    }

    function Be(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = Pa(e) ? !!e.capture : !!e,
            h = Ce(a);
        h || (a[ve] = h = new qe(a));
        c = h.add(b, c, d, g, f);
        if (!c.proxy) {
            d = De();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) je || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(Ee(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            xe++
        }
    }

    function De() {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }
        var b = Fe;
        return a
    }

    function ze(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) ze(a, b[f], c, d, e);
        else c = Ae(c), a && a[me] ? a.g.add(String(b), c, !0, Pa(d) ? !!d.capture : !!d, e) : Be(a, b, c, !0, d, e)
    }

    function Ge(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Ge(a, b[f], c, d, e);
        else(d = Pa(d) ? !!d.capture : !!d, c = Ae(c), a && a[me]) ? a.g.remove(String(b), c, d, e) : a && (a = Ce(a)) && (b = a.listeners[b.toString()], a = -1, b && (a = re(b, c, d, e)), (c = -1 < a ? b[a] : null) && He(c))
    }

    function He(a) {
        if ("number" !== typeof a && a && !a.ib) {
            var b = a.src;
            if (b && b[me]) ue(b.g, a);
            else {
                var c = a.type,
                    d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ee(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                xe--;
                (c = Ce(b)) ? (ue(c, a), 0 == c.g && (c.src = null, b[ve] = null)) : pe(a)
            }
        }
    }

    function Ee(a) {
        return a in we ? we[a] : we[a] = "on" + a
    }

    function Fe(a, b) {
        if (a.ib) a = !0;
        else {
            b = new ke(b, this);
            var c = a.listener,
                d = a.ub || a.src;
            a.pb && He(a);
            a = c.call(d, b)
        }
        return a
    }

    function Ce(a) {
        a = a[ve];
        return a instanceof qe ? a : null
    }
    var Ie = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Ae(a) {
        if ("function" === typeof a) return a;
        a[Ie] || (a[Ie] = function(b) {
            return a.handleEvent(b)
        });
        return a[Ie]
    };

    function Je() {
        he.call(this);
        this.g = new qe(this);
        this.La = this;
        this.M = null
    }
    D(Je, he);
    Je.prototype[me] = !0;
    Je.prototype.addEventListener = function(a, b, c, d) {
        ye(this, a, b, c, d)
    };
    Je.prototype.removeEventListener = function(a, b, c, d) {
        Ge(this, a, b, c, d)
    };

    function Ke(a, b) {
        var c = a.M;
        if (c) {
            var d = [];
            for (var e = 1; c; c = c.M) d.push(c), ++e
        }
        a = a.La;
        c = b.type || b;
        "string" === typeof b ? b = new ie(b, a) : b instanceof ie ? b.target = b.target || a : (e = b, b = new ie(c, a), pb(b, e));
        e = !0;
        if (d)
            for (var f = d.length - 1; !b.i && 0 <= f; f--) {
                var g = b.g = d[f];
                e = Le(g, c, !0, b) && e
            }
        b.i || (g = b.g = a, e = Le(g, c, !0, b) && e, b.i || (e = Le(g, c, !1, b) && e));
        if (d)
            for (f = 0; !b.i && f < d.length; f++) g = b.g = d[f], e = Le(g, c, !1, b) && e
    }
    Je.prototype.xa = function() {
        Je.ma.xa.call(this);
        if (this.g) {
            var a = this.g,
                b = 0,
                c;
            for (c in a.listeners) {
                for (var d = a.listeners[c], e = 0; e < d.length; e++) ++b, pe(d[e]);
                delete a.listeners[c];
                a.g--
            }
        }
        this.M = null
    };
    Je.prototype.Ga = function(a, b, c, d) {
        return this.g.add(String(a), b, !1, c, d)
    };

    function Le(a, b, c, d) {
        b = a.g.listeners[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.ib && g.capture == c) {
                var h = g.listener,
                    k = g.ub || g.src;
                g.pb && ue(a.g, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && !d.defaultPrevented
    };

    function Me(a) {
        Je.call(this);
        var b = this;
        this.W = this.l = 0;
        this.fa = null != a ? a : {
            ha: function(e, f) {
                return setTimeout(e, f)
            },
            Oa: function(e) {
                clearTimeout(e)
            }
        };
        var c, d;
        this.h = null != (d = null == (c = window.navigator) ? void 0 : c.onLine) ? d : !0;
        this.o = function() {
            return x(function(e) {
                return w(e, Ne(b), 0)
            })
        };
        window.addEventListener("offline", this.o);
        window.addEventListener("online", this.o);
        this.W || Oe(this)
    }
    v(Me, Je);

    function Pe() {
        var a = Qe;
        Me.g || (Me.g = new Me(a));
        return Me.g
    }
    Me.prototype.dispose = function() {
        window.removeEventListener("offline", this.o);
        window.removeEventListener("online", this.o);
        this.fa.Oa(this.W);
        delete Me.g
    };
    Me.prototype.ba = function() {
        return this.h
    };

    function Oe(a) {
        a.W = a.fa.ha(function() {
            var b;
            return x(function(c) {
                if (1 == c.g) return a.h ? (null == (b = window.navigator) ? 0 : b.onLine) ? c.C(3) : w(c, Ne(a), 3) : w(c, Ne(a), 3);
                Oe(a);
                c.g = 0
            })
        }, 3E4)
    }

    function Ne(a, b) {
        return a.G ? a.G : a.G = new Promise(function(c) {
            var d, e, f, g;
            return x(function(h) {
                switch (h.g) {
                    case 1:
                        return d = window.AbortController ? new window.AbortController : void 0, f = null == (e = d) ? void 0 : e.signal, g = !1, wa(h, 2, 3), d && (a.l = a.fa.ha(function() {
                            d.abort()
                        }, b || 2E4)), w(h, fetch("/generate_204", {
                            method: "HEAD",
                            signal: f
                        }), 5);
                    case 5:
                        g = !0;
                    case 3:
                        Ba(h);
                        a.G = void 0;
                        a.l && (a.fa.Oa(a.l), a.l = 0);
                        g !== a.h && (a.h = g, a.h ? Ke(a, "networkstatus-online") : Ke(a, "networkstatus-offline"));
                        c(g);
                        Ca(h);
                        break;
                    case 2:
                        Aa(h), g = !1, h.C(3)
                }
            })
        })
    };

    function Re() {
        this.data_ = [];
        this.g = -1
    }
    Re.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && Number.isInteger(a) && this.data_[a] !== b && (this.data_[a] = b, this.g = -1)
    };
    Re.prototype.get = function(a) {
        return !!this.data_[a]
    };

    function Se(a) {
        -1 === a.g && (a.g = eb(a.data_, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }, 0));
        return a.g
    };

    function Te(a) {
        J.call(this, a)
    }
    v(Te, J);

    function Ue(a) {
        J.call(this, a, -1, Ue.g)
    }
    v(Ue, J);

    function Ve(a, b) {
        return G(a, 2, b)
    }

    function We(a, b) {
        return G(a, 3, b)
    }

    function Xe(a, b) {
        return G(a, 4, b)
    }

    function Ye(a, b) {
        return G(a, 5, b)
    }

    function Ze(a, b) {
        return G(a, 9, b)
    }

    function $e(a, b) {
        Tc(a);
        if (null != b) {
            for (var c = !!b.length, d = 0; d < b.length; d++) {
                var e = b[d];
                Vc(e, Te);
                c = c && !(F(e.L) & 2)
            }
            d = F(b);
            e = d | 1;
            e = (c ? e | 8 : e & -9) | 4;
            e != d && (b = Kc(b, e))
        }
        null == b && (b = Sc);
        return Zc(a, 10, b)
    }

    function af(a, b) {
        return G(a, 11, b)
    }

    function bf(a, b) {
        return G(a, 1, b)
    }

    function cf(a, b) {
        return G(a, 7, b)
    }
    Ue.g = [10, 6];
    var df = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function ef(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function ff(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function gf() {
        var a = window;
        if (!ff(a)) return null;
        var b = ef(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(df).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function hf(a) {
        var b;
        return af($e(Ye(Ve(bf(Xe(cf(Ze(We(new Ue, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new Te;
            d = G(d, 1, c.brand);
            return G(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function jf() {
        var a, b;
        return null != (b = null == (a = gf()) ? void 0 : a.then(function(c) {
            return hf(c)
        })) ? b : null
    };

    function kf(a, b) {
        this.i = a;
        this.l = b;
        this.h = 0;
        this.g = null
    }
    kf.prototype.get = function() {
        if (0 < this.h) {
            this.h--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.i();
        return a
    };

    function lf(a, b) {
        a.l(b);
        100 > a.h && (a.h++, b.next = a.g, a.g = b)
    };
    var mf;

    function nf() {
        var a = z.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !E("Presto") && (a = function() {
            var e = zd();
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = Xa(function(k) {
                if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !Sb()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Wb;
                    c.Wb = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    Wb: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            z.setTimeout(e, 0)
        }
    };

    function of () {
        this.h = this.g = null
    } of .prototype.add = function(a, b) {
        var c = pf.get();
        c.set(a, b);
        this.h ? this.h.next = c : this.g = c;
        this.h = c
    }; of .prototype.remove = function() {
        var a = null;
        this.g && (a = this.g, this.g = this.g.next, this.g || (this.h = null), a.next = null);
        return a
    };
    var pf = new kf(function() {
        return new qf
    }, function(a) {
        return a.reset()
    });

    function qf() {
        this.next = this.scope = this.g = null
    }
    qf.prototype.set = function(a, b) {
        this.g = a;
        this.scope = b;
        this.next = null
    };
    qf.prototype.reset = function() {
        this.next = this.scope = this.g = null
    };
    var rf, sf = !1,
        tf = new of ;

    function uf(a, b) {
        rf || vf();
        sf || (rf(), sf = !0);
        tf.add(a, b)
    }

    function vf() {
        if (z.Promise && z.Promise.resolve) {
            var a = z.Promise.resolve(void 0);
            rf = function() {
                a.then(wf)
            }
        } else rf = function() {
            var b = wf;
            "function" !== typeof z.setImmediate || z.Window && z.Window.prototype && (Rb() || !E("Edge")) && z.Window.prototype.setImmediate == z.setImmediate ? (mf || (mf = nf()), mf(b)) : z.setImmediate(b)
        }
    }

    function wf() {
        for (var a; a = tf.remove();) {
            try {
                a.g.call(a.scope)
            } catch (b) {
                dc(b)
            }
            lf(pf, a)
        }
        sf = !1
    };

    function xf(a, b) {
        this.g = a[z.Symbol.iterator]();
        this.h = b
    }
    xf.prototype[Symbol.iterator] = function() {
        return this
    };
    xf.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.h.call(void 0, a.value),
            done: a.done
        }
    };

    function yf(a, b) {
        return new xf(a, b)
    };

    function zf() {
        this.blockSize = -1
    };

    function Af() {
        this.blockSize = -1;
        this.blockSize = 64;
        this.g = [];
        this.u = [];
        this.o = [];
        this.i = [];
        this.i[0] = 128;
        for (var a = 1; a < this.blockSize; ++a) this.i[a] = 0;
        this.l = this.h = 0;
        this.reset()
    }
    D(Af, zf);
    Af.prototype.reset = function() {
        this.g[0] = 1732584193;
        this.g[1] = 4023233417;
        this.g[2] = 2562383102;
        this.g[3] = 271733878;
        this.g[4] = 3285377520;
        this.l = this.h = 0
    };

    function Bf(a, b, c) {
        c || (c = 0);
        var d = a.o;
        if ("string" === typeof b)
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.g[0];
        c = a.g[1];
        var g = a.g[2],
            h = a.g[3],
            k = a.g[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) {
                    f = h ^ c & (g ^ h);
                    var l = 1518500249
                } else f = c ^ g ^ h, l = 1859775393;
            else 60 > e ? (f = c & g | h & (c | g), l = 2400959708) :
                (f = c ^ g ^ h, l = 3395469782);
            f = (b << 5 | b >>> 27) + f + k + l + d[e] & 4294967295;
            k = h;
            h = g;
            g = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.g[0] = a.g[0] + b & 4294967295;
        a.g[1] = a.g[1] + c & 4294967295;
        a.g[2] = a.g[2] + g & 4294967295;
        a.g[3] = a.g[3] + h & 4294967295;
        a.g[4] = a.g[4] + k & 4294967295
    }
    Af.prototype.update = function(a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.blockSize, d = 0, e = this.u, f = this.h; d < b;) {
                if (0 == f)
                    for (; d <= c;) Bf(this, a, d), d += this.blockSize;
                if ("string" === typeof a)
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.blockSize) {
                            Bf(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.blockSize) {
                                Bf(this, e);
                                f = 0;
                                break
                            }
            }
            this.h = f;
            this.l += b
        }
    };
    Af.prototype.digest = function() {
        var a = [],
            b = 8 * this.l;
        56 > this.h ? this.update(this.i, 56 - this.h) : this.update(this.i, this.blockSize - (this.h - 56));
        for (var c = this.blockSize - 1; 56 <= c; c--) this.u[c] = b & 255, b /= 256;
        Bf(this, this.u);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b] = this.g[c] >> d & 255, ++b;
        return a
    };

    function Cf() {}
    Cf.prototype.next = function() {
        return Df
    };
    var Df = {
        done: !0,
        value: void 0
    };

    function Ef(a) {
        return {
            value: a,
            done: !1
        }
    }
    Cf.prototype.ga = function() {
        return this
    };

    function Ff(a) {
        if (a instanceof Gf || a instanceof Hf || a instanceof If) return a;
        if ("function" == typeof a.next) return new Gf(function() {
            return a
        });
        if ("function" == typeof a[Symbol.iterator]) return new Gf(function() {
            return a[Symbol.iterator]()
        });
        if ("function" == typeof a.ga) return new Gf(function() {
            return a.ga()
        });
        throw Error("Not an iterator or iterable.");
    }

    function Gf(a) {
        this.h = a
    }
    Gf.prototype.ga = function() {
        return new Hf(this.h())
    };
    Gf.prototype[Symbol.iterator] = function() {
        return new If(this.h())
    };
    Gf.prototype.g = function() {
        return new If(this.h())
    };

    function Hf(a) {
        this.h = a
    }
    v(Hf, Cf);
    Hf.prototype.next = function() {
        return this.h.next()
    };
    Hf.prototype[Symbol.iterator] = function() {
        return new If(this.h)
    };
    Hf.prototype.g = function() {
        return new If(this.h)
    };

    function If(a) {
        Gf.call(this, function() {
            return a
        });
        this.i = a
    }
    v(If, Gf);
    If.prototype.next = function() {
        return this.i.next()
    };

    function Jf(a, b) {
        this.h = {};
        this.g = [];
        this.i = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof Jf)
                for (c = Kf(a), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }

    function Kf(a) {
        Lf(a);
        return a.g.concat()
    }
    q = Jf.prototype;
    q.has = function(a) {
        return Mf(this.h, a)
    };
    q.equals = function(a, b) {
        if (this === a) return !0;
        if (this.size != a.size) return !1;
        b = b || Nf;
        Lf(this);
        for (var c, d = 0; c = this.g[d]; d++)
            if (!b(this.get(c), a.get(c))) return !1;
        return !0
    };

    function Nf(a, b) {
        return a === b
    }
    q.clear = function() {
        this.h = {};
        this.i = this.size = this.g.length = 0
    };
    q.remove = function(a) {
        return this.delete(a)
    };
    q.delete = function(a) {
        return Mf(this.h, a) ? (delete this.h[a], --this.size, this.i++, this.g.length > 2 * this.size && Lf(this), !0) : !1
    };

    function Lf(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                Mf(a.h, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length;) d = a.g[b], Mf(e, d) || (a.g[c++] = d, e[d] = 1), b++;
            a.g.length = c
        }
    }
    q.get = function(a, b) {
        return Mf(this.h, a) ? this.h[a] : b
    };
    q.set = function(a, b) {
        Mf(this.h, a) || (this.size += 1, this.g.push(a), this.i++);
        this.h[a] = b
    };
    q.forEach = function(a, b) {
        for (var c = Kf(this), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    q.clone = function() {
        return new Jf(this)
    };
    q.keys = function() {
        return Ff(this.ga(!0)).g()
    };
    q.values = function() {
        return Ff(this.ga(!1)).g()
    };
    q.entries = function() {
        var a = this;
        return yf(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    q.ga = function(a) {
        Lf(this);
        var b = 0,
            c = this.i,
            d = this,
            e = new Cf;
        e.next = function() {
            if (c != d.i) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) return Df;
            var f = d.g[b++];
            return Ef(a ? f : d.h[f])
        };
        return e
    };

    function Mf(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Of = z.JSON.stringify;

    function Pf() {
        var a = this;
        this.promise = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function Qf(a) {
        this.g = 0;
        this.G = void 0;
        this.l = this.h = this.i = null;
        this.u = this.o = !1;
        if (a != ab) try {
            var b = this;
            a.call(void 0, function(c) {
                Rf(b, 2, c)
            }, function(c) {
                Rf(b, 3, c)
            })
        } catch (c) {
            Rf(this, 3, c)
        }
    }

    function Sf() {
        this.next = this.context = this.h = this.i = this.g = null;
        this.l = !1
    }
    Sf.prototype.reset = function() {
        this.context = this.h = this.i = this.g = null;
        this.l = !1
    };
    var Tf = new kf(function() {
        return new Sf
    }, function(a) {
        a.reset()
    });

    function Uf(a, b, c) {
        var d = Tf.get();
        d.i = a;
        d.h = b;
        d.context = c;
        return d
    }
    Qf.prototype.then = function(a, b, c) {
        return Vf(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    };
    Qf.prototype.$goog_Thenable = !0;
    Qf.prototype.cancel = function(a) {
        if (0 == this.g) {
            var b = new Wf(a);
            uf(function() {
                Xf(this, b)
            }, this)
        }
    };

    function Xf(a, b) {
        if (0 == a.g)
            if (a.i) {
                var c = a.i;
                if (c.h) {
                    for (var d = 0, e = null, f = null, g = c.h; g && (g.l || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.g && 1 == d ? Xf(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : Yf(c), Zf(c, e, 3, b)))
                }
                a.i = null
            } else Rf(a, 3, b)
    }

    function $f(a, b) {
        a.h || 2 != a.g && 3 != a.g || ag(a);
        a.l ? a.l.next = b : a.h = b;
        a.l = b
    }

    function Vf(a, b, c, d) {
        var e = Uf(null, null, null);
        e.g = new Qf(function(f, g) {
            e.i = b ? function(h) {
                try {
                    var k = b.call(d, h);
                    f(k)
                } catch (l) {
                    g(l)
                }
            } : f;
            e.h = c ? function(h) {
                try {
                    var k = c.call(d, h);
                    void 0 === k && h instanceof Wf ? g(h) : f(k)
                } catch (l) {
                    g(l)
                }
            } : g
        });
        e.g.i = a;
        $f(a, e);
        return e.g
    }
    Qf.prototype.W = function(a) {
        this.g = 0;
        Rf(this, 2, a)
    };
    Qf.prototype.La = function(a) {
        this.g = 0;
        Rf(this, 3, a)
    };

    function Rf(a, b, c) {
        if (0 == a.g) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.g = 1;
            a: {
                var d = c,
                    e = a.W,
                    f = a.La;
                if (d instanceof Qf) {
                    $f(d, Uf(e || ab, f || null, a));
                    var g = !0
                } else {
                    if (d) try {
                        var h = !!d.$goog_Thenable
                    } catch (l) {
                        h = !1
                    } else h = !1;
                    if (h) d.then(e, f, a), g = !0;
                    else {
                        if (Pa(d)) try {
                            var k = d.then;
                            if ("function" === typeof k) {
                                bg(d, k, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (l) {
                            f.call(a, l);
                            g = !0;
                            break a
                        }
                        g = !1
                    }
                }
            }
            g || (a.G = c, a.g = b, a.i = null, ag(a), 3 != b || c instanceof Wf || cg(a, c))
        }
    }

    function bg(a, b, c, d, e) {
        function f(k) {
            h || (h = !0, d.call(e, k))
        }

        function g(k) {
            h || (h = !0, c.call(e, k))
        }
        var h = !1;
        try {
            b.call(a, g, f)
        } catch (k) {
            f(k)
        }
    }

    function ag(a) {
        a.o || (a.o = !0, uf(a.M, a))
    }

    function Yf(a) {
        var b = null;
        a.h && (b = a.h, a.h = b.next, b.next = null);
        a.h || (a.l = null);
        return b
    }
    Qf.prototype.M = function() {
        for (var a; a = Yf(this);) Zf(this, a, this.g, this.G);
        this.o = !1
    };

    function Zf(a, b, c, d) {
        if (3 == c && b.h && !b.l)
            for (; a && a.u; a = a.i) a.u = !1;
        if (b.g) b.g.i = null, dg(b, c, d);
        else try {
            b.l ? b.i.call(b.context) : dg(b, c, d)
        } catch (e) {
            eg.call(null, e)
        }
        lf(Tf, b)
    }

    function dg(a, b, c) {
        2 == b ? a.i.call(a.context, c) : a.h && a.h.call(a.context, c)
    }

    function cg(a, b) {
        a.u = !0;
        uf(function() {
            a.u && eg.call(null, b)
        })
    }
    var eg = dc;

    function Wf(a) {
        Za.call(this, a)
    }
    D(Wf, Za);
    Wf.prototype.name = "cancel";

    function K(a) {
        he.call(this);
        this.G = 1;
        this.l = [];
        this.o = 0;
        this.g = [];
        this.h = {};
        this.M = !!a
    }
    D(K, he);
    q = K.prototype;
    q.subscribe = function(a, b, c) {
        var d = this.h[a];
        d || (d = this.h[a] = []);
        var e = this.G;
        this.g[e] = a;
        this.g[e + 1] = b;
        this.g[e + 2] = c;
        this.G = e + 3;
        d.push(e);
        return e
    };

    function fg(a, b, c) {
        var d = gg;
        if (a = d.h[a]) {
            var e = d.g;
            (a = a.find(function(f) {
                return e[f + 1] == b && e[f + 2] == c
            })) && d.kb(a)
        }
    }
    q.kb = function(a) {
        var b = this.g[a];
        if (b) {
            var c = this.h[b];
            0 != this.o ? (this.l.push(a), this.g[a + 1] = function() {}) : (c && fb(c, a), delete this.g[a], delete this.g[a + 1], delete this.g[a + 2])
        }
        return !!b
    };
    q.Xa = function(a, b) {
        var c = this.h[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
            if (this.M)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    hg(this.g[g + 1], this.g[g + 2], d)
                } else {
                    this.o++;
                    try {
                        for (e = 0, f = c.length; e < f && !this.i; e++) g = c[e], this.g[g + 1].apply(this.g[g + 2], d)
                    } finally {
                        if (this.o--, 0 < this.l.length && 0 == this.o)
                            for (; c = this.l.pop();) this.kb(c)
                    }
                }
            return 0 != e
        }
        return !1
    };

    function hg(a, b, c) {
        uf(function() {
            a.apply(b, c)
        })
    }
    q.clear = function(a) {
        if (a) {
            var b = this.h[a];
            b && (b.forEach(this.kb, this), delete this.h[a])
        } else this.g.length = 0, this.h = {}
    };
    q.xa = function() {
        K.ma.xa.call(this);
        this.clear();
        this.l.length = 0
    };

    function ig(a) {
        this.g = a
    }
    ig.prototype.set = function(a, b) {
        void 0 === b ? this.g.remove(a) : this.g.set(a, Of(b))
    };
    ig.prototype.get = function(a) {
        try {
            var b = this.g.get(a)
        } catch (c) {
            return
        }
        if (null !== b) try {
            return JSON.parse(b)
        } catch (c) {
            throw "Storage: Invalid value was encountered";
        }
    };
    ig.prototype.remove = function(a) {
        this.g.remove(a)
    };

    function jg(a) {
        this.g = a
    }
    D(jg, ig);

    function kg(a) {
        this.data = a
    }

    function lg(a) {
        return void 0 === a || a instanceof kg ? a : new kg(a)
    }
    jg.prototype.set = function(a, b) {
        jg.ma.set.call(this, a, lg(b))
    };
    jg.prototype.h = function(a) {
        a = jg.ma.get.call(this, a);
        if (void 0 === a || a instanceof Object) return a;
        throw "Storage: Invalid value was encountered";
    };
    jg.prototype.get = function(a) {
        if (a = this.h(a)) {
            if (a = a.data, void 0 === a) throw "Storage: Invalid value was encountered";
        } else a = void 0;
        return a
    };

    function mg(a) {
        this.g = a
    }
    D(mg, jg);
    mg.prototype.set = function(a, b, c) {
        if (b = lg(b)) {
            if (c) {
                if (c < Date.now()) {
                    mg.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = Date.now()
        }
        mg.ma.set.call(this, a, b)
    };
    mg.prototype.h = function(a) {
        var b = mg.ma.h.call(this, a);
        if (b) {
            var c = b.creation,
                d = b.expiration;
            if (d && d < Date.now() || c && c > Date.now()) mg.prototype.remove.call(this, a);
            else return b
        }
    };

    function ng() {};

    function og() {}
    D(og, ng);
    og.prototype[Symbol.iterator] = function() {
        return Ff(this.ga(!0)).g()
    };
    og.prototype.clear = function() {
        var a = Array.from(this);
        a = u(a);
        for (var b = a.next(); !b.done; b = a.next()) this.remove(b.value)
    };

    function pg(a) {
        this.g = a
    }
    D(pg, og);
    q = pg.prototype;
    q.set = function(a, b) {
        try {
            this.g.setItem(a, b)
        } catch (c) {
            if (0 == this.g.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    q.get = function(a) {
        a = this.g.getItem(a);
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    q.remove = function(a) {
        this.g.removeItem(a)
    };
    q.ga = function(a) {
        var b = 0,
            c = this.g,
            d = new Cf;
        d.next = function() {
            if (b >= c.length) return Df;
            var e = c.key(b++);
            if (a) return Ef(e);
            e = c.getItem(e);
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return Ef(e)
        };
        return d
    };
    q.clear = function() {
        this.g.clear()
    };
    q.key = function(a) {
        return this.g.key(a)
    };

    function qg() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.g = a
    }
    D(qg, pg);

    function rg(a, b) {
        this.h = a;
        this.g = null;
        var c;
        if (c = hc) c = !(9 <= Number(xc));
        if (c) {
            sg || (sg = new Jf);
            this.g = sg.get(a);
            this.g || (b ? this.g = document.getElementById(b) : (this.g = document.createElement("userdata"), this.g.addBehavior("#default#userData"), document.body.appendChild(this.g)), sg.set(a, this.g));
            try {
                this.g.load(this.h)
            } catch (d) {
                this.g = null
            }
        }
    }
    D(rg, og);
    var tg = {
            ".": ".2E",
            "!": ".21",
            "~": ".7E",
            "*": ".2A",
            "'": ".27",
            "(": ".28",
            ")": ".29",
            "%": "."
        },
        sg = null;

    function ug(a) {
        return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(b) {
            return tg[b]
        })
    }
    q = rg.prototype;
    q.set = function(a, b) {
        this.g.setAttribute(ug(a), b);
        vg(this)
    };
    q.get = function(a) {
        a = this.g.getAttribute(ug(a));
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    q.remove = function(a) {
        this.g.removeAttribute(ug(a));
        vg(this)
    };
    q.ga = function(a) {
        var b = 0,
            c = this.g.XMLDocument.documentElement.attributes,
            d = new Cf;
        d.next = function() {
            if (b >= c.length) return Df;
            var e = c[b++];
            if (a) return Ef(decodeURIComponent(e.nodeName.replace(/\./g, "%")).slice(1));
            e = e.nodeValue;
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return Ef(e)
        };
        return d
    };
    q.clear = function() {
        for (var a = this.g.XMLDocument.documentElement, b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
        vg(this)
    };

    function vg(a) {
        try {
            a.g.save(a.h)
        } catch (b) {
            throw "Storage mechanism: Quota exceeded";
        }
    };

    function wg(a, b) {
        this.h = a;
        this.g = b + "::"
    }
    D(wg, og);
    wg.prototype.set = function(a, b) {
        this.h.set(this.g + a, b)
    };
    wg.prototype.get = function(a) {
        return this.h.get(this.g + a)
    };
    wg.prototype.remove = function(a) {
        this.h.remove(this.g + a)
    };
    wg.prototype.ga = function(a) {
        var b = this.h[Symbol.iterator](),
            c = this,
            d = new Cf;
        d.next = function() {
            var e = b.next();
            if (e.done) return e;
            for (e = e.value; e.slice(0, c.g.length) != c.g;) {
                e = b.next();
                if (e.done) return e;
                e = e.value
            }
            return Ef(a ? e.slice(c.g.length) : c.h.get(e))
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
    var M = {},
        xg = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
    M.assign = function(a) {
        for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
            var c = b.shift();
            if (c) {
                if ("object" !== typeof c) throw new TypeError(c + "must be non-object");
                for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
        }
        return a
    };
    M.Rb = function(a, b) {
        if (a.length === b) return a;
        if (a.subarray) return a.subarray(0, b);
        a.length = b;
        return a
    };
    var yg = {
            Na: function(a, b, c, d, e) {
                if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
                else
                    for (var f = 0; f < d; f++) a[e + f] = b[c + f]
            },
            ac: function(a) {
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
        zg = {
            Na: function(a, b, c, d, e) {
                for (var f = 0; f < d; f++) a[e + f] = b[c + f]
            },
            ac: function(a) {
                return [].concat.apply([], a)
            }
        };
    M.kd = function() {
        xg ? (M.Ma = Uint8Array, M.na = Uint16Array, M.Cc = Int32Array, M.assign(M, yg)) : (M.Ma = Array, M.na = Array, M.Cc = Array, M.assign(M, zg))
    };
    M.kd();
    var Ag = !0;
    try {
        new Uint8Array(1)
    } catch (a) {
        Ag = !1
    }

    function Bg(a) {
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
        var h = new M.Ma(e);
        for (b = c = 0; c < e; b++) f = a.charCodeAt(b), 55296 === (f & 64512) && b + 1 < d && (g = a.charCodeAt(b + 1), 56320 === (g & 64512) && (f = 65536 + (f - 55296 << 10) + (g - 56320), b++)), 128 > f ? h[c++] = f : (2048 > f ? h[c++] = 192 | f >>> 6 : (65536 > f ? h[c++] = 224 | f >>> 12 : (h[c++] = 240 | f >>> 18, h[c++] = 128 | f >>> 12 & 63), h[c++] = 128 | f >>>
            6 & 63), h[c++] = 128 | f & 63);
        return h
    };
    var Cg = {};
    Cg = function(a, b, c, d) {
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
    for (var Dg = {}, Eg, Fg = [], Gg = 0; 256 > Gg; Gg++) {
        Eg = Gg;
        for (var Hg = 0; 8 > Hg; Hg++) Eg = Eg & 1 ? 3988292384 ^ Eg >>> 1 : Eg >>> 1;
        Fg[Gg] = Eg
    }
    Dg = function(a, b, c, d) {
        c = d + c;
        for (a ^= -1; d < c; d++) a = a >>> 8 ^ Fg[(a ^ b[d]) & 255];
        return a ^ -1
    };
    var Ig = {};
    Ig = {
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

    function Jg(a) {
        for (var b = a.length; 0 <= --b;) a[b] = 0
    }
    var Kg = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        eh = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        fh = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        gh = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        hh = Array(576);
    Jg(hh);
    var ih = Array(60);
    Jg(ih);
    var jh = Array(512);
    Jg(jh);
    var kh = Array(256);
    Jg(kh);
    var lh = Array(29);
    Jg(lh);
    var mh = Array(30);
    Jg(mh);

    function nh(a, b, c, d, e) {
        this.xc = a;
        this.Pc = b;
        this.Oc = c;
        this.Lc = d;
        this.ed = e;
        this.ec = a && a.length
    }
    var oh, ph, qh;

    function rh(a, b) {
        this.Yb = a;
        this.Ua = 0;
        this.Ba = b
    }

    function sh(a, b) {
        a.J[a.pending++] = b & 255;
        a.J[a.pending++] = b >>> 8 & 255
    }

    function N(a, b, c) {
        a.O > 16 - c ? (a.U |= b << a.O & 65535, sh(a, a.U), a.U = b >> 16 - a.O, a.O += c - 16) : (a.U |= b << a.O & 65535, a.O += c)
    }

    function th(a, b, c) {
        N(a, c[2 * b], c[2 * b + 1])
    }

    function uh(a, b) {
        var c = 0;
        do c |= a & 1, a >>>= 1, c <<= 1; while (0 < --b);
        return c >>> 1
    }

    function vh(a, b, c) {
        var d = Array(16),
            e = 0,
            f;
        for (f = 1; 15 >= f; f++) d[f] = e = e + c[f - 1] << 1;
        for (c = 0; c <= b; c++) e = a[2 * c + 1], 0 !== e && (a[2 * c] = uh(d[e]++, e))
    }

    function wh(a) {
        var b;
        for (b = 0; 286 > b; b++) a.X[2 * b] = 0;
        for (b = 0; 30 > b; b++) a.Fa[2 * b] = 0;
        for (b = 0; 19 > b; b++) a.R[2 * b] = 0;
        a.X[512] = 1;
        a.ta = a.Ya = 0;
        a.ca = a.matches = 0
    }

    function xh(a) {
        8 < a.O ? sh(a, a.U) : 0 < a.O && (a.J[a.pending++] = a.U);
        a.U = 0;
        a.O = 0
    }

    function yh(a, b, c) {
        xh(a);
        sh(a, c);
        sh(a, ~c);
        M.Na(a.J, a.window, b, c, a.pending);
        a.pending += c
    }

    function zh(a, b, c, d) {
        var e = 2 * b,
            f = 2 * c;
        return a[e] < a[f] || a[e] === a[f] && d[b] <= d[c]
    }

    function Ah(a, b, c) {
        for (var d = a.K[c], e = c << 1; e <= a.ra;) {
            e < a.ra && zh(b, a.K[e + 1], a.K[e], a.depth) && e++;
            if (zh(b, d, a.K[e], a.depth)) break;
            a.K[c] = a.K[e];
            c = e;
            e <<= 1
        }
        a.K[c] = d
    }

    function Bh(a, b, c) {
        var d = 0;
        if (0 !== a.ca) {
            do {
                var e = a.J[a.bb + 2 * d] << 8 | a.J[a.bb + 2 * d + 1];
                var f = a.J[a.Jb + d];
                d++;
                if (0 === e) th(a, f, b);
                else {
                    var g = kh[f];
                    th(a, g + 256 + 1, b);
                    var h = Kg[g];
                    0 !== h && (f -= lh[g], N(a, f, h));
                    e--;
                    g = 256 > e ? jh[e] : jh[256 + (e >>> 7)];
                    th(a, g, c);
                    h = eh[g];
                    0 !== h && (e -= mh[g], N(a, e, h))
                }
            } while (d < a.ca)
        }
        th(a, 256, b)
    }

    function Ch(a, b) {
        var c = b.Yb,
            d = b.Ba.xc,
            e = b.Ba.ec,
            f = b.Ba.Lc,
            g, h = -1;
        a.ra = 0;
        a.Ra = 573;
        for (g = 0; g < f; g++) 0 !== c[2 * g] ? (a.K[++a.ra] = h = g, a.depth[g] = 0) : c[2 * g + 1] = 0;
        for (; 2 > a.ra;) {
            var k = a.K[++a.ra] = 2 > h ? ++h : 0;
            c[2 * k] = 1;
            a.depth[k] = 0;
            a.ta--;
            e && (a.Ya -= d[2 * k + 1])
        }
        b.Ua = h;
        for (g = a.ra >> 1; 1 <= g; g--) Ah(a, c, g);
        k = f;
        do g = a.K[1], a.K[1] = a.K[a.ra--], Ah(a, c, 1), d = a.K[1], a.K[--a.Ra] = g, a.K[--a.Ra] = d, c[2 * k] = c[2 * g] + c[2 * d], a.depth[k] = (a.depth[g] >= a.depth[d] ? a.depth[g] : a.depth[d]) + 1, c[2 * g + 1] = c[2 * d + 1] = k, a.K[1] = k++, Ah(a, c, 1); while (2 <= a.ra);
        a.K[--a.Ra] =
            a.K[1];
        g = b.Yb;
        k = b.Ua;
        d = b.Ba.xc;
        e = b.Ba.ec;
        f = b.Ba.Pc;
        var l = b.Ba.Oc,
            m = b.Ba.ed,
            n, r = 0;
        for (n = 0; 15 >= n; n++) a.oa[n] = 0;
        g[2 * a.K[a.Ra] + 1] = 0;
        for (b = a.Ra + 1; 573 > b; b++) {
            var p = a.K[b];
            n = g[2 * g[2 * p + 1] + 1] + 1;
            n > m && (n = m, r++);
            g[2 * p + 1] = n;
            if (!(p > k)) {
                a.oa[n]++;
                var y = 0;
                p >= l && (y = f[p - l]);
                var A = g[2 * p];
                a.ta += A * (n + y);
                e && (a.Ya += A * (d[2 * p + 1] + y))
            }
        }
        if (0 !== r) {
            do {
                for (n = m - 1; 0 === a.oa[n];) n--;
                a.oa[n]--;
                a.oa[n + 1] += 2;
                a.oa[m]--;
                r -= 2
            } while (0 < r);
            for (n = m; 0 !== n; n--)
                for (p = a.oa[n]; 0 !== p;) d = a.K[--b], d > k || (g[2 * d + 1] !== n && (a.ta += (n - g[2 * d + 1]) * g[2 * d], g[2 *
                    d + 1] = n), p--)
        }
        vh(c, h, a.oa)
    }

    function Dh(a, b, c) {
        var d, e = -1,
            f = b[1],
            g = 0,
            h = 7,
            k = 4;
        0 === f && (h = 138, k = 3);
        b[2 * (c + 1) + 1] = 65535;
        for (d = 0; d <= c; d++) {
            var l = f;
            f = b[2 * (d + 1) + 1];
            ++g < h && l === f || (g < k ? a.R[2 * l] += g : 0 !== l ? (l !== e && a.R[2 * l]++, a.R[32]++) : 10 >= g ? a.R[34]++ : a.R[36]++, g = 0, e = l, 0 === f ? (h = 138, k = 3) : l === f ? (h = 6, k = 3) : (h = 7, k = 4))
        }
    }

    function Eh(a, b, c) {
        var d, e = -1,
            f = b[1],
            g = 0,
            h = 7,
            k = 4;
        0 === f && (h = 138, k = 3);
        for (d = 0; d <= c; d++) {
            var l = f;
            f = b[2 * (d + 1) + 1];
            if (!(++g < h && l === f)) {
                if (g < k) {
                    do th(a, l, a.R); while (0 !== --g)
                } else 0 !== l ? (l !== e && (th(a, l, a.R), g--), th(a, 16, a.R), N(a, g - 3, 2)) : 10 >= g ? (th(a, 17, a.R), N(a, g - 3, 3)) : (th(a, 18, a.R), N(a, g - 11, 7));
                g = 0;
                e = l;
                0 === f ? (h = 138, k = 3) : l === f ? (h = 6, k = 3) : (h = 7, k = 4)
            }
        }
    }

    function Fh(a) {
        var b = 4093624447,
            c;
        for (c = 0; 31 >= c; c++, b >>>= 1)
            if (b & 1 && 0 !== a.X[2 * c]) return 0;
        if (0 !== a.X[18] || 0 !== a.X[20] || 0 !== a.X[26]) return 1;
        for (c = 32; 256 > c; c++)
            if (0 !== a.X[2 * c]) return 1;
        return 0
    }
    var Gh = !1;

    function Hh(a, b, c) {
        a.J[a.bb + 2 * a.ca] = b >>> 8 & 255;
        a.J[a.bb + 2 * a.ca + 1] = b & 255;
        a.J[a.Jb + a.ca] = c & 255;
        a.ca++;
        0 === b ? a.X[2 * c]++ : (a.matches++, b--, a.X[2 * (kh[c] + 256 + 1)]++, a.Fa[2 * (256 > b ? jh[b] : jh[256 + (b >>> 7)])]++);
        return a.ca === a.fb - 1
    };

    function Ih(a, b) {
        a.msg = Ig[b];
        return b
    }

    function Jh(a) {
        for (var b = a.length; 0 <= --b;) a[b] = 0
    }

    function Kh(a) {
        var b = a.state,
            c = b.pending;
        c > a.D && (c = a.D);
        0 !== c && (M.Na(a.gb, b.J, b.hb, c, a.Va), a.Va += c, b.hb += c, a.Sb += c, a.D -= c, b.pending -= c, 0 === b.pending && (b.hb = 0))
    }

    function P(a, b) {
        var c = 0 <= a.Z ? a.Z : -1,
            d = a.j - a.Z,
            e = 0;
        if (0 < a.level) {
            2 === a.A.Gb && (a.A.Gb = Fh(a));
            Ch(a, a.wb);
            Ch(a, a.sb);
            Dh(a, a.X, a.wb.Ua);
            Dh(a, a.Fa, a.sb.Ua);
            Ch(a, a.Ub);
            for (e = 18; 3 <= e && 0 === a.R[2 * gh[e] + 1]; e--);
            a.ta += 3 * (e + 1) + 14;
            var f = a.ta + 3 + 7 >>> 3;
            var g = a.Ya + 3 + 7 >>> 3;
            g <= f && (f = g)
        } else f = g = d + 5;
        if (d + 4 <= f && -1 !== c) N(a, b ? 1 : 0, 3), yh(a, c, d);
        else if (4 === a.strategy || g === f) N(a, 2 + (b ? 1 : 0), 3), Bh(a, hh, ih);
        else {
            N(a, 4 + (b ? 1 : 0), 3);
            c = a.wb.Ua + 1;
            d = a.sb.Ua + 1;
            e += 1;
            N(a, c - 257, 5);
            N(a, d - 1, 5);
            N(a, e - 4, 4);
            for (f = 0; f < e; f++) N(a, a.R[2 * gh[f] + 1],
                3);
            Eh(a, a.X, c - 1);
            Eh(a, a.Fa, d - 1);
            Bh(a, a.X, a.Fa)
        }
        wh(a);
        b && xh(a);
        a.Z = a.j;
        Kh(a.A)
    }

    function R(a, b) {
        a.J[a.pending++] = b
    }

    function Lh(a, b) {
        a.J[a.pending++] = b >>> 8 & 255;
        a.J[a.pending++] = b & 255
    }

    function Mh(a, b) {
        var c = a.mc,
            d = a.j,
            e = a.aa,
            f = a.oc,
            g = a.j > a.S - 262 ? a.j - (a.S - 262) : 0,
            h = a.window,
            k = a.Ca,
            l = a.la,
            m = a.j + 258,
            n = h[d + e - 1],
            r = h[d + e];
        a.aa >= a.dc && (c >>= 2);
        f > a.m && (f = a.m);
        do {
            var p = b;
            if (h[p + e] === r && h[p + e - 1] === n && h[p] === h[d] && h[++p] === h[d + 1]) {
                d += 2;
                for (p++; h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && d < m;);
                p = 258 - (m - d);
                d = m - 258;
                if (p > e) {
                    a.Ta = b;
                    e = p;
                    if (p >= f) break;
                    n = h[d + e - 1];
                    r = h[d + e]
                }
            }
        } while ((b = l[b & k]) > g && 0 !== --c);
        return e <=
            a.m ? e : a.m
    }

    function Nh(a) {
        var b = a.S,
            c;
        do {
            var d = a.Ac - a.m - a.j;
            if (a.j >= b + (b - 262)) {
                M.Na(a.window, a.window, b, b, 0);
                a.Ta -= b;
                a.j -= b;
                a.Z -= b;
                var e = c = a.vb;
                do {
                    var f = a.head[--e];
                    a.head[e] = f >= b ? f - b : 0
                } while (--c);
                e = c = b;
                do f = a.la[--e], a.la[e] = f >= b ? f - b : 0; while (--c);
                d += b
            }
            if (0 === a.A.T) break;
            e = a.A;
            c = a.window;
            f = a.j + a.m;
            var g = e.T;
            g > d && (g = d);
            0 === g ? c = 0 : (e.T -= g, M.Na(c, e.input, e.Ja, g, f), 1 === e.state.wrap ? e.v = Cg(e.v, c, g, f) : 2 === e.state.wrap && (e.v = Dg(e.v, c, g, f)), e.Ja += g, e.Ka += g, c = g);
            a.m += c;
            if (3 <= a.m + a.Y)
                for (d = a.j - a.Y, a.B = a.window[d], a.B =
                    (a.B << a.qa ^ a.window[d + 1]) & a.pa; a.Y && !(a.B = (a.B << a.qa ^ a.window[d + 3 - 1]) & a.pa, a.la[d & a.Ca] = a.head[a.B], a.head[a.B] = d, d++, a.Y--, 3 > a.m + a.Y););
        } while (262 > a.m && 0 !== a.A.T)
    }

    function Oh(a, b) {
        for (var c;;) {
            if (262 > a.m) {
                Nh(a);
                if (262 > a.m && 0 === b) return 1;
                if (0 === a.m) break
            }
            c = 0;
            3 <= a.m && (a.B = (a.B << a.qa ^ a.window[a.j + 3 - 1]) & a.pa, c = a.la[a.j & a.Ca] = a.head[a.B], a.head[a.B] = a.j);
            0 !== c && a.j - c <= a.S - 262 && (a.F = Mh(a, c));
            if (3 <= a.F)
                if (c = Hh(a, a.j - a.Ta, a.F - 3), a.m -= a.F, a.F <= a.Lb && 3 <= a.m) {
                    a.F--;
                    do a.j++, a.B = (a.B << a.qa ^ a.window[a.j + 3 - 1]) & a.pa, a.la[a.j & a.Ca] = a.head[a.B], a.head[a.B] = a.j; while (0 !== --a.F);
                    a.j++
                } else a.j += a.F, a.F = 0, a.B = a.window[a.j], a.B = (a.B << a.qa ^ a.window[a.j + 1]) & a.pa;
            else c = Hh(a, 0, a.window[a.j]),
                a.m--, a.j++;
            if (c && (P(a, !1), 0 === a.A.D)) return 1
        }
        a.Y = 2 > a.j ? a.j : 2;
        return 4 === b ? (P(a, !0), 0 === a.A.D ? 3 : 4) : a.ca && (P(a, !1), 0 === a.A.D) ? 1 : 2
    }

    function Ph(a, b) {
        for (var c, d;;) {
            if (262 > a.m) {
                Nh(a);
                if (262 > a.m && 0 === b) return 1;
                if (0 === a.m) break
            }
            c = 0;
            3 <= a.m && (a.B = (a.B << a.qa ^ a.window[a.j + 3 - 1]) & a.pa, c = a.la[a.j & a.Ca] = a.head[a.B], a.head[a.B] = a.j);
            a.aa = a.F;
            a.qc = a.Ta;
            a.F = 2;
            0 !== c && a.aa < a.Lb && a.j - c <= a.S - 262 && (a.F = Mh(a, c), 5 >= a.F && (1 === a.strategy || 3 === a.F && 4096 < a.j - a.Ta) && (a.F = 2));
            if (3 <= a.aa && a.F <= a.aa) {
                d = a.j + a.m - 3;
                c = Hh(a, a.j - 1 - a.qc, a.aa - 3);
                a.m -= a.aa - 1;
                a.aa -= 2;
                do ++a.j <= d && (a.B = (a.B << a.qa ^ a.window[a.j + 3 - 1]) & a.pa, a.la[a.j & a.Ca] = a.head[a.B], a.head[a.B] = a.j); while (0 !==
                    --a.aa);
                a.Ha = 0;
                a.F = 2;
                a.j++;
                if (c && (P(a, !1), 0 === a.A.D)) return 1
            } else if (a.Ha) {
                if ((c = Hh(a, 0, a.window[a.j - 1])) && P(a, !1), a.j++, a.m--, 0 === a.A.D) return 1
            } else a.Ha = 1, a.j++, a.m--
        }
        a.Ha && (Hh(a, 0, a.window[a.j - 1]), a.Ha = 0);
        a.Y = 2 > a.j ? a.j : 2;
        return 4 === b ? (P(a, !0), 0 === a.A.D ? 3 : 4) : a.ca && (P(a, !1), 0 === a.A.D) ? 1 : 2
    }

    function Qh(a, b) {
        for (var c, d, e, f = a.window;;) {
            if (258 >= a.m) {
                Nh(a);
                if (258 >= a.m && 0 === b) return 1;
                if (0 === a.m) break
            }
            a.F = 0;
            if (3 <= a.m && 0 < a.j && (d = a.j - 1, c = f[d], c === f[++d] && c === f[++d] && c === f[++d])) {
                for (e = a.j + 258; c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && d < e;);
                a.F = 258 - (e - d);
                a.F > a.m && (a.F = a.m)
            }
            3 <= a.F ? (c = Hh(a, 1, a.F - 3), a.m -= a.F, a.j += a.F, a.F = 0) : (c = Hh(a, 0, a.window[a.j]), a.m--, a.j++);
            if (c && (P(a, !1), 0 === a.A.D)) return 1
        }
        a.Y = 0;
        return 4 === b ? (P(a, !0), 0 === a.A.D ? 3 : 4) : a.ca &&
            (P(a, !1), 0 === a.A.D) ? 1 : 2
    }

    function Rh(a, b) {
        for (var c;;) {
            if (0 === a.m && (Nh(a), 0 === a.m)) {
                if (0 === b) return 1;
                break
            }
            a.F = 0;
            c = Hh(a, 0, a.window[a.j]);
            a.m--;
            a.j++;
            if (c && (P(a, !1), 0 === a.A.D)) return 1
        }
        a.Y = 0;
        return 4 === b ? (P(a, !0), 0 === a.A.D ? 3 : 4) : a.ca && (P(a, !1), 0 === a.A.D) ? 1 : 2
    }

    function Sh(a, b, c, d, e) {
        this.Sc = a;
        this.dd = b;
        this.gd = c;
        this.cd = d;
        this.Qc = e
    }
    var Th;
    Th = [new Sh(0, 0, 0, 0, function(a, b) {
            var c = 65535;
            for (c > a.da - 5 && (c = a.da - 5);;) {
                if (1 >= a.m) {
                    Nh(a);
                    if (0 === a.m && 0 === b) return 1;
                    if (0 === a.m) break
                }
                a.j += a.m;
                a.m = 0;
                var d = a.Z + c;
                if (0 === a.j || a.j >= d)
                    if (a.m = a.j - d, a.j = d, P(a, !1), 0 === a.A.D) return 1;
                if (a.j - a.Z >= a.S - 262 && (P(a, !1), 0 === a.A.D)) return 1
            }
            a.Y = 0;
            if (4 === b) return P(a, !0), 0 === a.A.D ? 3 : 4;
            a.j > a.Z && P(a, !1);
            return 1
        }),
        new Sh(4, 4, 8, 4, Oh), new Sh(4, 5, 16, 8, Oh), new Sh(4, 6, 32, 32, Oh), new Sh(4, 4, 16, 16, Ph), new Sh(8, 16, 32, 32, Ph), new Sh(8, 16, 128, 128, Ph), new Sh(8, 32, 128, 256, Ph), new Sh(32, 128, 258, 1024, Ph), new Sh(32, 258, 258, 4096, Ph)
    ];

    function Uh() {
        this.A = null;
        this.status = 0;
        this.J = null;
        this.wrap = this.pending = this.hb = this.da = 0;
        this.s = null;
        this.ea = 0;
        this.method = 8;
        this.Sa = -1;
        this.Ca = this.Tb = this.S = 0;
        this.window = null;
        this.Ac = 0;
        this.head = this.la = null;
        this.oc = this.dc = this.strategy = this.level = this.Lb = this.mc = this.aa = this.m = this.Ta = this.j = this.Ha = this.qc = this.F = this.Z = this.qa = this.pa = this.Hb = this.vb = this.B = 0;
        this.X = new M.na(1146);
        this.Fa = new M.na(122);
        this.R = new M.na(78);
        Jh(this.X);
        Jh(this.Fa);
        Jh(this.R);
        this.Ub = this.sb = this.wb = null;
        this.oa =
            new M.na(16);
        this.K = new M.na(573);
        Jh(this.K);
        this.Ra = this.ra = 0;
        this.depth = new M.na(573);
        Jh(this.depth);
        this.O = this.U = this.Y = this.matches = this.Ya = this.ta = this.bb = this.ca = this.fb = this.Jb = 0
    }

    function Vh(a, b) {
        if (!a || !a.state || 5 < b || 0 > b) return a ? Ih(a, -2) : -2;
        var c = a.state;
        if (!a.gb || !a.input && 0 !== a.T || 666 === c.status && 4 !== b) return Ih(a, 0 === a.D ? -5 : -2);
        c.A = a;
        var d = c.Sa;
        c.Sa = b;
        if (42 === c.status)
            if (2 === c.wrap) a.v = 0, R(c, 31), R(c, 139), R(c, 8), c.s ? (R(c, (c.s.text ? 1 : 0) + (c.s.za ? 2 : 0) + (c.s.ya ? 4 : 0) + (c.s.name ? 8 : 0) + (c.s.comment ? 16 : 0)), R(c, c.s.time & 255), R(c, c.s.time >> 8 & 255), R(c, c.s.time >> 16 & 255), R(c, c.s.time >> 24 & 255), R(c, 9 === c.level ? 2 : 2 <= c.strategy || 2 > c.level ? 4 : 0), R(c, c.s.Pd & 255), c.s.ya && c.s.ya.length && (R(c,
                c.s.ya.length & 255), R(c, c.s.ya.length >> 8 & 255)), c.s.za && (a.v = Dg(a.v, c.J, c.pending, 0)), c.ea = 0, c.status = 69) : (R(c, 0), R(c, 0), R(c, 0), R(c, 0), R(c, 0), R(c, 9 === c.level ? 2 : 2 <= c.strategy || 2 > c.level ? 4 : 0), R(c, 3), c.status = 113);
            else {
                var e = 8 + (c.Tb - 8 << 4) << 8;
                e |= (2 <= c.strategy || 2 > c.level ? 0 : 6 > c.level ? 1 : 6 === c.level ? 2 : 3) << 6;
                0 !== c.j && (e |= 32);
                c.status = 113;
                Lh(c, e + (31 - e % 31));
                0 !== c.j && (Lh(c, a.v >>> 16), Lh(c, a.v & 65535));
                a.v = 1
            }
        if (69 === c.status)
            if (c.s.ya) {
                for (e = c.pending; c.ea < (c.s.ya.length & 65535) && (c.pending !== c.da || (c.s.za && c.pending >
                        e && (a.v = Dg(a.v, c.J, c.pending - e, e)), Kh(a), e = c.pending, c.pending !== c.da));) R(c, c.s.ya[c.ea] & 255), c.ea++;
                c.s.za && c.pending > e && (a.v = Dg(a.v, c.J, c.pending - e, e));
                c.ea === c.s.ya.length && (c.ea = 0, c.status = 73)
            } else c.status = 73;
        if (73 === c.status)
            if (c.s.name) {
                e = c.pending;
                do {
                    if (c.pending === c.da && (c.s.za && c.pending > e && (a.v = Dg(a.v, c.J, c.pending - e, e)), Kh(a), e = c.pending, c.pending === c.da)) {
                        var f = 1;
                        break
                    }
                    f = c.ea < c.s.name.length ? c.s.name.charCodeAt(c.ea++) & 255 : 0;
                    R(c, f)
                } while (0 !== f);
                c.s.za && c.pending > e && (a.v = Dg(a.v, c.J, c.pending -
                    e, e));
                0 === f && (c.ea = 0, c.status = 91)
            } else c.status = 91;
        if (91 === c.status)
            if (c.s.comment) {
                e = c.pending;
                do {
                    if (c.pending === c.da && (c.s.za && c.pending > e && (a.v = Dg(a.v, c.J, c.pending - e, e)), Kh(a), e = c.pending, c.pending === c.da)) {
                        f = 1;
                        break
                    }
                    f = c.ea < c.s.comment.length ? c.s.comment.charCodeAt(c.ea++) & 255 : 0;
                    R(c, f)
                } while (0 !== f);
                c.s.za && c.pending > e && (a.v = Dg(a.v, c.J, c.pending - e, e));
                0 === f && (c.status = 103)
            } else c.status = 103;
        103 === c.status && (c.s.za ? (c.pending + 2 > c.da && Kh(a), c.pending + 2 <= c.da && (R(c, a.v & 255), R(c, a.v >> 8 & 255), a.v = 0,
            c.status = 113)) : c.status = 113);
        if (0 !== c.pending) {
            if (Kh(a), 0 === a.D) return c.Sa = -1, 0
        } else if (0 === a.T && (b << 1) - (4 < b ? 9 : 0) <= (d << 1) - (4 < d ? 9 : 0) && 4 !== b) return Ih(a, -5);
        if (666 === c.status && 0 !== a.T) return Ih(a, -5);
        if (0 !== a.T || 0 !== c.m || 0 !== b && 666 !== c.status) {
            d = 2 === c.strategy ? Rh(c, b) : 3 === c.strategy ? Qh(c, b) : Th[c.level].Qc(c, b);
            if (3 === d || 4 === d) c.status = 666;
            if (1 === d || 3 === d) return 0 === a.D && (c.Sa = -1), 0;
            if (2 === d && (1 === b ? (N(c, 2, 3), th(c, 256, hh), 16 === c.O ? (sh(c, c.U), c.U = 0, c.O = 0) : 8 <= c.O && (c.J[c.pending++] = c.U & 255, c.U >>= 8, c.O -=
                    8)) : 5 !== b && (N(c, 0, 3), yh(c, 0, 0), 3 === b && (Jh(c.head), 0 === c.m && (c.j = 0, c.Z = 0, c.Y = 0))), Kh(a), 0 === a.D)) return c.Sa = -1, 0
        }
        if (4 !== b) return 0;
        if (0 >= c.wrap) return 1;
        2 === c.wrap ? (R(c, a.v & 255), R(c, a.v >> 8 & 255), R(c, a.v >> 16 & 255), R(c, a.v >> 24 & 255), R(c, a.Ka & 255), R(c, a.Ka >> 8 & 255), R(c, a.Ka >> 16 & 255), R(c, a.Ka >> 24 & 255)) : (Lh(c, a.v >>> 16), Lh(c, a.v & 65535));
        Kh(a);
        0 < c.wrap && (c.wrap = -c.wrap);
        return 0 !== c.pending ? 0 : 1
    };
    var Wh = {};
    Wh = function() {
        this.input = null;
        this.Ka = this.T = this.Ja = 0;
        this.gb = null;
        this.Sb = this.D = this.Va = 0;
        this.msg = "";
        this.state = null;
        this.Gb = 2;
        this.v = 0
    };
    var Xh = Object.prototype.toString;

    function Yh(a) {
        if (!(this instanceof Yh)) return new Yh(a);
        a = this.options = M.assign({
            level: -1,
            method: 8,
            chunkSize: 16384,
            Da: 15,
            fd: 8,
            strategy: 0,
            zc: ""
        }, a || {});
        a.raw && 0 < a.Da ? a.Da = -a.Da : a.Tc && 0 < a.Da && 16 > a.Da && (a.Da += 16);
        this.err = 0;
        this.msg = "";
        this.ended = !1;
        this.chunks = [];
        this.A = new Wh;
        this.A.D = 0;
        var b = this.A;
        var c = a.level,
            d = a.method,
            e = a.Da,
            f = a.fd,
            g = a.strategy;
        if (b) {
            var h = 1; - 1 === c && (c = 6);
            0 > e ? (h = 0, e = -e) : 15 < e && (h = 2, e -= 16);
            if (1 > f || 9 < f || 8 !== d || 8 > e || 15 < e || 0 > c || 9 < c || 0 > g || 4 < g) b = Ih(b, -2);
            else {
                8 === e && (e = 9);
                var k = new Uh;
                b.state = k;
                k.A = b;
                k.wrap = h;
                k.s = null;
                k.Tb = e;
                k.S = 1 << k.Tb;
                k.Ca = k.S - 1;
                k.Hb = f + 7;
                k.vb = 1 << k.Hb;
                k.pa = k.vb - 1;
                k.qa = ~~((k.Hb + 3 - 1) / 3);
                k.window = new M.Ma(2 * k.S);
                k.head = new M.na(k.vb);
                k.la = new M.na(k.S);
                k.fb = 1 << f + 6;
                k.da = 4 * k.fb;
                k.J = new M.Ma(k.da);
                k.bb = 1 * k.fb;
                k.Jb = 3 * k.fb;
                k.level = c;
                k.strategy = g;
                k.method = d;
                if (b && b.state) {
                    b.Ka = b.Sb = 0;
                    b.Gb = 2;
                    c = b.state;
                    c.pending = 0;
                    c.hb = 0;
                    0 > c.wrap && (c.wrap = -c.wrap);
                    c.status = c.wrap ? 42 : 113;
                    b.v = 2 === c.wrap ? 0 : 1;
                    c.Sa = 0;
                    if (!Gh) {
                        d = Array(16);
                        for (f = g = 0; 28 > f; f++)
                            for (lh[f] = g, e = 0; e < 1 << Kg[f]; e++) kh[g++] =
                                f;
                        kh[g - 1] = f;
                        for (f = g = 0; 16 > f; f++)
                            for (mh[f] = g, e = 0; e < 1 << eh[f]; e++) jh[g++] = f;
                        for (g >>= 7; 30 > f; f++)
                            for (mh[f] = g << 7, e = 0; e < 1 << eh[f] - 7; e++) jh[256 + g++] = f;
                        for (e = 0; 15 >= e; e++) d[e] = 0;
                        for (e = 0; 143 >= e;) hh[2 * e + 1] = 8, e++, d[8]++;
                        for (; 255 >= e;) hh[2 * e + 1] = 9, e++, d[9]++;
                        for (; 279 >= e;) hh[2 * e + 1] = 7, e++, d[7]++;
                        for (; 287 >= e;) hh[2 * e + 1] = 8, e++, d[8]++;
                        vh(hh, 287, d);
                        for (e = 0; 30 > e; e++) ih[2 * e + 1] = 5, ih[2 * e] = uh(e, 5);
                        oh = new nh(hh, Kg, 257, 286, 15);
                        ph = new nh(ih, eh, 0, 30, 15);
                        qh = new nh([], fh, 0, 19, 7);
                        Gh = !0
                    }
                    c.wb = new rh(c.X, oh);
                    c.sb = new rh(c.Fa, ph);
                    c.Ub = new rh(c.R,
                        qh);
                    c.U = 0;
                    c.O = 0;
                    wh(c);
                    c = 0
                } else c = Ih(b, -2);
                0 === c && (b = b.state, b.Ac = 2 * b.S, Jh(b.head), b.Lb = Th[b.level].dd, b.dc = Th[b.level].Sc, b.oc = Th[b.level].gd, b.mc = Th[b.level].cd, b.j = 0, b.Z = 0, b.m = 0, b.Y = 0, b.F = b.aa = 2, b.Ha = 0, b.B = 0);
                b = c
            }
        } else b = -2;
        if (0 !== b) throw Error(Ig[b]);
        a.header && (b = this.A) && b.state && 2 === b.state.wrap && (b.state.s = a.header);
        if (a.cb) {
            var l;
            "string" === typeof a.cb ? l = Bg(a.cb) : "[object ArrayBuffer]" === Xh.call(a.cb) ? l = new Uint8Array(a.cb) : l = a.cb;
            a = this.A;
            f = l;
            g = f.length;
            if (a && a.state)
                if (l = a.state, b = l.wrap,
                    2 === b || 1 === b && 42 !== l.status || l.m) b = -2;
                else {
                    1 === b && (a.v = Cg(a.v, f, g, 0));
                    l.wrap = 0;
                    g >= l.S && (0 === b && (Jh(l.head), l.j = 0, l.Z = 0, l.Y = 0), c = new M.Ma(l.S), M.Na(c, f, g - l.S, l.S, 0), f = c, g = l.S);
                    c = a.T;
                    d = a.Ja;
                    e = a.input;
                    a.T = g;
                    a.Ja = 0;
                    a.input = f;
                    for (Nh(l); 3 <= l.m;) {
                        f = l.j;
                        g = l.m - 2;
                        do l.B = (l.B << l.qa ^ l.window[f + 3 - 1]) & l.pa, l.la[f & l.Ca] = l.head[l.B], l.head[l.B] = f, f++; while (--g);
                        l.j = f;
                        l.m = 2;
                        Nh(l)
                    }
                    l.j += l.m;
                    l.Z = l.j;
                    l.Y = l.m;
                    l.m = 0;
                    l.F = l.aa = 2;
                    l.Ha = 0;
                    a.Ja = d;
                    a.input = e;
                    a.T = c;
                    l.wrap = b;
                    b = 0
                }
            else b = -2;
            if (0 !== b) throw Error(Ig[b]);
            this.Gd = !0
        }
    }
    Yh.prototype.push = function(a, b) {
        var c = this.A,
            d = this.options.chunkSize;
        if (this.ended) return !1;
        var e = b === ~~b ? b : !0 === b ? 4 : 0;
        "string" === typeof a ? c.input = Bg(a) : "[object ArrayBuffer]" === Xh.call(a) ? c.input = new Uint8Array(a) : c.input = a;
        c.Ja = 0;
        c.T = c.input.length;
        do {
            0 === c.D && (c.gb = new M.Ma(d), c.Va = 0, c.D = d);
            a = Vh(c, e);
            if (1 !== a && 0 !== a) return Zh(this, a), this.ended = !0, !1;
            if (0 === c.D || 0 === c.T && (4 === e || 2 === e))
                if ("string" === this.options.zc) {
                    var f = M.Rb(c.gb, c.Va);
                    b = f;
                    f = f.length;
                    if (65537 > f && (b.subarray && Ag || !b.subarray)) b =
                        String.fromCharCode.apply(null, M.Rb(b, f));
                    else {
                        for (var g = "", h = 0; h < f; h++) g += String.fromCharCode(b[h]);
                        b = g
                    }
                    this.chunks.push(b)
                } else b = M.Rb(c.gb, c.Va), this.chunks.push(b)
        } while ((0 < c.T || 0 === c.D) && 1 !== a);
        if (4 === e) return (c = this.A) && c.state ? (d = c.state.status, 42 !== d && 69 !== d && 73 !== d && 91 !== d && 103 !== d && 113 !== d && 666 !== d ? a = Ih(c, -2) : (c.state = null, a = 113 === d ? Ih(c, -3) : 0)) : a = -2, Zh(this, a), this.ended = !0, 0 === a;
        2 === e && (Zh(this, 0), c.D = 0);
        return !0
    };

    function Zh(a, b) {
        0 === b && (a.result = "string" === a.options.zc ? a.chunks.join("") : M.ac(a.chunks));
        a.chunks = [];
        a.err = b;
        a.msg = a.A.msg
    };

    function $h(a) {
        this.name = a
    };
    var ai = new $h("rawColdConfigGroup");
    var bi = new $h("rawHotConfigGroup");

    function ci(a) {
        J.call(this, a)
    }
    v(ci, J);

    function di(a) {
        J.call(this, a)
    }
    v(di, J);

    function ei(a) {
        J.call(this, a, -1, ei.g)
    }
    v(ei, J);
    ei.g = [2];

    function fi(a) {
        J.call(this, a, -1, fi.g)
    }
    v(fi, J);
    fi.prototype.getPlayerType = function() {
        var a = Yc(this, 36);
        return null == a ? 0 : a
    };
    fi.prototype.setHomeGroupInfo = function(a) {
        return H(this, ei, 81, a)
    };
    fi.g = [9, 66, 24, 32, 86, 100, 101];

    function gi(a) {
        J.call(this, a)
    }
    v(gi, J);
    gi.prototype.getKey = function() {
        return gd(this, 1)
    };
    gi.prototype.ia = function() {
        return gd(this, 2 === bd(this, hi) ? 2 : -1)
    };
    var hi = [2, 3, 4, 5, 6];

    function ii(a) {
        J.call(this, a, -1, ii.g)
    }
    v(ii, J);
    ii.g = [15, 26, 28];

    function ji(a) {
        J.call(this, a, -1, ji.g)
    }
    v(ji, J);
    ji.g = [5];

    function ki(a) {
        J.call(this, a)
    }
    v(ki, J);

    function li(a) {
        J.call(this, a, -1, li.g)
    }
    v(li, J);
    li.prototype.setSafetyMode = function(a) {
        return G(this, 5, a)
    };
    li.g = [12];

    function mi(a) {
        J.call(this, a, -1, mi.g)
    }
    v(mi, J);
    mi.g = [12];
    var ni = {
        Fd: "WEB_DISPLAY_MODE_UNKNOWN",
        Bd: "WEB_DISPLAY_MODE_BROWSER",
        Dd: "WEB_DISPLAY_MODE_MINIMAL_UI",
        Ed: "WEB_DISPLAY_MODE_STANDALONE",
        Cd: "WEB_DISPLAY_MODE_FULLSCREEN"
    };

    function oi(a) {
        J.call(this, a)
    }
    v(oi, J);
    oi.prototype.getKey = function() {
        return gd(this, 1)
    };
    oi.prototype.ia = function() {
        return gd(this, 2)
    };

    function pi(a) {
        J.call(this, a, -1, pi.g)
    }
    v(pi, J);
    pi.g = [4, 5];

    function qi(a) {
        J.call(this, a)
    }
    v(qi, J);

    function ri(a) {
        J.call(this, a)
    }
    v(ri, J);
    var si = [2, 3, 4, 5];

    function ti(a) {
        J.call(this, a)
    }
    v(ti, J);

    function ui(a) {
        J.call(this, a)
    }
    v(ui, J);

    function vi(a) {
        J.call(this, a)
    }
    v(vi, J);

    function wi(a) {
        J.call(this, a, -1, wi.g)
    }
    v(wi, J);
    wi.g = [10, 17];

    function xi(a) {
        J.call(this, a)
    }
    v(xi, J);

    function yi(a) {
        J.call(this, a)
    }
    v(yi, J);

    function zi(a) {
        J.call(this, a)
    }
    v(zi, J);

    function Ai(a) {
        J.call(this, a, 475)
    }
    v(Ai, J);
    var Bi = [2, 3, 5, 6, 7, 11, 13, 20, 21, 22, 23, 24, 28, 32, 37, 45, 59, 72, 73, 74, 76, 78, 79, 80, 85, 91, 97, 100, 102, 105, 111, 117, 119, 126, 127, 136, 146, 148, 151, 156, 157, 158, 159, 163, 164, 168, 176, 177, 178, 179, 184, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 208, 209, 215, 219, 222, 225, 226, 227, 229, 232, 233, 234, 240, 241, 244, 247, 248, 249, 251, 254, 255, 256, 257, 258, 259, 260, 261, 266, 270, 272, 278, 288, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 320, 321, 323, 324, 327, 328, 330, 331, 332, 334, 337, 338, 340, 344, 348, 350, 351, 352, 353, 354,
        355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375, 378, 380, 381, 383, 388, 389, 402, 403, 410, 411, 412, 413, 414, 415, 416, 417, 418, 423, 424, 425, 426, 427, 429, 430, 431, 439, 441, 444, 448, 458, 469, 471, 473, 474
    ];

    function Ci(a) {
        J.call(this, a)
    }
    v(Ci, J);

    function Di(a) {
        J.call(this, a)
    }
    v(Di, J);
    Di.prototype.getPlaylistId = function() {
        return kd(this, 2)
    };
    var ld = [1, 2];

    function Ei(a) {
        J.call(this, a, -1, Ei.g)
    }
    v(Ei, J);
    Ei.g = [3];
    var Fi = z.window,
        Gi, Hi, Ii = (null == Fi ? void 0 : null == (Gi = Fi.yt) ? void 0 : Gi.config_) || (null == Fi ? void 0 : null == (Hi = Fi.ytcfg) ? void 0 : Hi.data_) || {};
    B("yt.config_", Ii);

    function Ji() {
        var a = arguments;
        1 < a.length ? Ii[a[0]] = a[1] : 1 === a.length && Object.assign(Ii, a[0])
    }

    function S(a, b) {
        return a in Ii ? Ii[a] : b
    }

    function Ki() {
        return S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")
    }

    function Li() {
        var a = Ii.EXPERIMENT_FLAGS;
        return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0
    };
    var Mi = [];

    function Ni(a) {
        Mi.forEach(function(b) {
            return b(a)
        })
    }

    function Oi(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                Pi(b)
            }
        } : a
    }

    function Pi(a) {
        var b = C("yt.logging.errors.log");
        b ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0) : (b = S("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]), Ji("ERRORS", b));
        Ni(a)
    }

    function Qi(a, b, c, d, e) {
        var f = C("yt.logging.errors.log");
        f ? f(a, "WARNING", b, c, d, void 0, e) : (f = S("ERRORS", []), f.push([a, "WARNING", b, c, d, void 0, e]), Ji("ERRORS", f))
    };

    function U(a) {
        a = Ri(a);
        return "string" === typeof a && "false" === a ? !1 : !!a
    }

    function Si(a, b) {
        a = Ri(a);
        return void 0 === a && void 0 !== b ? b : Number(a || 0)
    }

    function Ri(a) {
        var b = S("EXPERIMENTS_FORCED_FLAGS", {}) || {};
        return void 0 !== b[a] ? b[a] : S("EXPERIMENT_FLAGS", {})[a]
    }

    function Ti() {
        for (var a = [], b = S("EXPERIMENTS_FORCED_FLAGS", {}), c = u(Object.keys(b)), d = c.next(); !d.done; d = c.next()) d = d.value, a.push({
            key: d,
            value: String(b[d])
        });
        c = S("EXPERIMENT_FLAGS", {});
        var e = u(Object.keys(c));
        for (d = e.next(); !d.done; d = e.next()) d = d.value, d.startsWith("force_") && void 0 === b[d] && a.push({
            key: d,
            value: String(c[d])
        });
        return a
    };
    var Ui = 0;
    B("ytDomDomGetNextId", C("ytDomDomGetNextId") || function() {
        return ++Ui
    });
    var Vi = {
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

    function Wi(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null;
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.clientY = this.clientX = 0;
        this.changedTouches = this.touches = null;
        try {
            if (a = a || window.event) {
                this.event = a;
                for (var b in a) b in Vi || (this[b] = a[b]);
                var c = a.target || a.srcElement;
                c && 3 == c.nodeType && (c = c.parentNode);
                this.target = c;
                var d = a.relatedTarget;
                if (d) try {
                    d = d.nodeName ? d : null
                } catch (e) {
                    d = null
                } else "mouseover" ==
                    this.type ? d = a.fromElement : "mouseout" == this.type && (d = a.toElement);
                this.relatedTarget = d;
                this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
                this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
                this.keyCode = a.keyCode ? a.keyCode : a.which;
                this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
                this.altKey = a.altKey;
                this.ctrlKey = a.ctrlKey;
                this.shiftKey = a.shiftKey;
                this.metaKey = a.metaKey;
                this.g = a.pageX;
                this.h = a.pageY
            }
        } catch (e) {}
    }

    function Xi(a) {
        if (document.body && document.documentElement) {
            var b = document.body.scrollTop + document.documentElement.scrollTop;
            a.g = a.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft);
            a.h = a.clientY + b
        }
    }
    Wi.prototype.preventDefault = function() {
        this.event && (this.event.returnValue = !1, this.event.preventDefault && this.event.preventDefault())
    };
    Wi.prototype.stopPropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopPropagation && this.event.stopPropagation())
    };
    Wi.prototype.stopImmediatePropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopImmediatePropagation && this.event.stopImmediatePropagation())
    };
    var lb = z.ytEventsEventsListeners || {};
    B("ytEventsEventsListeners", lb);
    var Yi = z.ytEventsEventsCounter || {
        count: 0
    };
    B("ytEventsEventsCounter", Yi);

    function Zi(a, b, c, d) {
        d = void 0 === d ? {} : d;
        a.addEventListener && ("mouseenter" != b || "onmouseenter" in document ? "mouseleave" != b || "onmouseenter" in document ? "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll") : b = "mouseout" : b = "mouseover");
        return kb(function(e) {
            var f = "boolean" === typeof e[4] && e[4] == !!d,
                g = Pa(e[4]) && Pa(d) && mb(e[4], d);
            return !!e.length && e[0] == a && e[1] == b && e[2] == c && (f || g)
        })
    }

    function $i(a) {
        a && ("string" == typeof a && (a = [a]), db(a, function(b) {
            if (b in lb) {
                var c = lb[b],
                    d = c[0],
                    e = c[1],
                    f = c[3];
                c = c[4];
                d.removeEventListener ? aj() || "boolean" === typeof c ? d.removeEventListener(e, f, c) : d.removeEventListener(e, f, !!c.capture) : d.detachEvent && d.detachEvent("on" + e, f);
                delete lb[b]
            }
        }))
    }
    var aj = bb(function() {
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

    function bj(a, b, c, d) {
        d = void 0 === d ? {} : d;
        if (!a || !a.addEventListener && !a.attachEvent) return "";
        var e = Zi(a, b, c, d);
        if (e) return e;
        e = ++Yi.count + "";
        var f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document);
        var g = f ? function(h) {
            h = new Wi(h);
            if (!Ad(h.relatedTarget, function(k) {
                    return k == a
                })) return h.currentTarget = a, h.type = b, c.call(a, h)
        } : function(h) {
            h = new Wi(h);
            h.currentTarget = a;
            return c.call(a, h)
        };
        g = Oi(g);
        a.addEventListener ? ("mouseenter" == b && f ? b = "mouseover" : "mouseleave" == b && f ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll"), aj() || "boolean" === typeof d ? a.addEventListener(b, g, d) : a.addEventListener(b, g, !!d.capture)) : a.attachEvent("on" + b, g);
        lb[e] = [a, b, c, g, d];
        return e
    };

    function cj(a, b) {
        "function" === typeof a && (a = Oi(a));
        return window.setTimeout(a, b)
    }

    function dj(a, b) {
        "function" === typeof a && (a = Oi(a));
        return window.setInterval(a, b)
    };
    var ej = /^[\w.]*$/,
        fj = {
            q: !0,
            search_query: !0
        };

    function gj(a, b) {
        b = a.split(b);
        for (var c = {}, d = 0, e = b.length; d < e; d++) {
            var f = b[d].split("=");
            if (1 == f.length && f[0] || 2 == f.length) try {
                var g = hj(f[0] || ""),
                    h = hj(f[1] || "");
                g in c ? Array.isArray(c[g]) ? ib(c[g], h) : c[g] = [c[g], h] : c[g] = h
            } catch (n) {
                var k = n,
                    l = f[0],
                    m = String(gj);
                k.args = [{
                    key: l,
                    value: f[1],
                    query: a,
                    method: ij == m ? "unchanged" : m
                }];
                fj.hasOwnProperty(l) || Qi(k)
            }
        }
        return c
    }
    var ij = String(gj);

    function jj(a) {
        var b = [];
        jb(a, function(c, d) {
            var e = encodeURIComponent(String(d)),
                f;
            Array.isArray(c) ? f = c : f = [c];
            db(f, function(g) {
                "" == g ? b.push(e) : b.push(e + "=" + encodeURIComponent(String(g)))
            })
        });
        return b.join("&")
    }

    function kj(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        return gj(a, "&")
    }

    function lj(a, b, c) {
        var d = a.split("#", 2);
        a = d[0];
        d = 1 < d.length ? "#" + d[1] : "";
        var e = a.split("?", 2);
        a = e[0];
        e = kj(e[1] || "");
        for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
        b = a;
        a = ac(e);
        a ? (c = b.indexOf("#"), 0 > c && (c = b.length), f = b.indexOf("?"), 0 > f || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.slice(0, f), e, b.slice(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
        return a + d
    }

    function mj(a) {
        if (!b) var b = window.location.href;
        var c = a.match(Wb)[1] || null,
            d = Yb(a);
        c && d ? (a = a.match(Wb), b = b.match(Wb), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Yb(b) == d && (Number(b.match(Wb)[4] || null) || null) == (Number(a.match(Wb)[4] || null) || null) : !0;
        return a
    }

    function hj(a) {
        return a && a.match(ej) ? a : decodeURIComponent(a.replace(/\+/g, " "))
    };

    function nj(a) {
        var b = oj;
        a = void 0 === a ? C("yt.ads.biscotti.lastId_") || "" : a;
        var c = Object,
            d = c.assign,
            e = {};
        e.dt = Td;
        e.flash = "0";
        a: {
            try {
                var f = b.g.top.location.href
            } catch (ca) {
                f = 2;
                break a
            }
            f = f ? f === b.h.location.href ? 0 : 1 : 2
        }
        e = (e.frm = f, e);
        try {
            e.u_tz = -(new Date).getTimezoneOffset();
            var g = void 0 === g ? wd : g;
            try {
                var h = g.history.length
            } catch (ca) {
                h = 0
            }
            e.u_his = h;
            var k;
            e.u_h = null == (k = wd.screen) ? void 0 : k.height;
            var l;
            e.u_w = null == (l = wd.screen) ? void 0 : l.width;
            var m;
            e.u_ah = null == (m = wd.screen) ? void 0 : m.availHeight;
            var n;
            e.u_aw =
                null == (n = wd.screen) ? void 0 : n.availWidth;
            var r;
            e.u_cd = null == (r = wd.screen) ? void 0 : r.colorDepth
        } catch (ca) {}
        h = b.g;
        try {
            var p = h.screenX;
            var y = h.screenY
        } catch (ca) {}
        try {
            var A = h.outerWidth;
            var I = h.outerHeight
        } catch (ca) {}
        try {
            var O = h.innerWidth;
            var T = h.innerHeight
        } catch (ca) {}
        try {
            var Q = h.screenLeft;
            var ya = h.screenTop
        } catch (ca) {}
        try {
            O = h.innerWidth, T = h.innerHeight
        } catch (ca) {}
        try {
            var Qc = h.screen.availWidth;
            var Ja = h.screen.availTop
        } catch (ca) {}
        p = [Q, ya, p, y, Qc, Ja, A, I, O, T];
        y = b.g.top;
        try {
            var za = (y || window).document,
                da =
                "CSS1Compat" == za.compatMode ? za.documentElement : za.body;
            var ja = (new yd(da.clientWidth, da.clientHeight)).round()
        } catch (ca) {
            ja = new yd(-12245933, -12245933)
        }
        za = ja;
        ja = {};
        var ka = void 0 === ka ? z : ka;
        da = new Re;
        "SVGElement" in ka && "createElementNS" in ka.document && da.set(0);
        y = Rd();
        y["allow-top-navigation-by-user-activation"] && da.set(1);
        y["allow-popups-to-escape-sandbox"] && da.set(2);
        ka.crypto && ka.crypto.subtle && da.set(3);
        "TextDecoder" in ka && "TextEncoder" in ka && da.set(4);
        ka = Se(da);
        ja.bc = ka;
        ja.bih = za.height;
        ja.biw =
            za.width;
        ja.brdim = p.join();
        b = b.h;
        b = (ja.vis = b.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""] || 0, ja.wgl = !!wd.WebGLRenderingContext, ja);
        c = d.call(c, e, b);
        c.ca_type = "image";
        a && (c.bid = a);
        return c
    }
    var oj = new function() {
        var a = window.document;
        this.g = window;
        this.h = a
    };
    B("yt.ads_.signals_.getAdSignalsString", function(a) {
        return jj(nj(a))
    });
    Date.now();
    var pj = "XMLHttpRequest" in z ? function() {
        return new XMLHttpRequest
    } : null;

    function qj() {
        if (!pj) return null;
        var a = pj();
        return "open" in a ? a : null
    };
    var rj = {
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
        sj = "app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Vd)),
        tj = !1;

    function uj(a, b) {
        b = void 0 === b ? {} : b;
        var c = mj(a),
            d = U("web_ajax_ignore_global_headers_if_set"),
            e;
        for (e in rj) {
            var f = S(rj[e]);
            "X-Goog-Visitor-Id" !== e || f || (f = S("VISITOR_DATA"));
            !f || !c && Yb(a) || d && void 0 !== b[e] || !(U("move_vss_away_from_login_info_cookie") || "X-Goog-AuthUser" !== e && "X-Goog-PageId" !== e) || (b[e] = f)
        }
        U("move_vss_away_from_login_info_cookie") && c && S("SESSION_INDEX") && (b["X-Yt-Auth-Test"] = "test");
        "X-Goog-EOM-Visitor-Id" in b && "X-Goog-Visitor-Id" in b && delete b["X-Goog-Visitor-Id"];
        if (c || !Yb(a)) b["X-YouTube-Utc-Offset"] =
            String(-(new Date).getTimezoneOffset());
        if (c || !Yb(a)) {
            try {
                var g = (new Intl.DateTimeFormat).resolvedOptions().timeZone
            } catch (h) {}
            g && (b["X-YouTube-Time-Zone"] = g)
        }
        document.location.hostname.endsWith("youtubeeducation.com") || !c && Yb(a) || (b["X-YouTube-Ad-Signals"] = jj(nj()));
        return b
    }

    function vj(a) {
        var b = window.location.search,
            c = Yb(a);
        U("debug_handle_relative_url_for_query_forward_killswitch") || !c && mj(a) && (c = document.location.hostname);
        var d = Xb(a.match(Wb)[5] || null);
        d = (c = c && (c.endsWith("youtube.com") || c.endsWith("youtube-nocookie.com"))) && d && d.startsWith("/api/");
        if (!c || d) return a;
        var e = kj(b),
            f = {};
        db(sj, function(g) {
            e[g] && (f[g] = e[g])
        });
        return lj(a, f || {}, !1)
    }

    function wj(a, b) {
        var c = b.format || "JSON";
        a = xj(a, b);
        var d = yj(a, b),
            e = !1,
            f = zj(a, function(k) {
                if (!e) {
                    e = !0;
                    h && window.clearTimeout(h);
                    a: switch (k && "status" in k ? k.status : -1) {
                        case 200:
                        case 201:
                        case 202:
                        case 203:
                        case 204:
                        case 205:
                        case 206:
                        case 304:
                            var l = !0;
                            break a;
                        default:
                            l = !1
                    }
                    var m = null,
                        n = 400 <= k.status && 500 > k.status,
                        r = 500 <= k.status && 600 > k.status;
                    if (l || n || r) m = Aj(a, c, k, b.convertToSafeHtml);
                    if (l) a: if (k && 204 == k.status) l = !0;
                        else {
                            switch (c) {
                                case "XML":
                                    l = 0 == parseInt(m && m.return_code, 10);
                                    break a;
                                case "RAW":
                                    l = !0;
                                    break a
                            }
                            l = !!m
                        }
                    m = m || {};
                    n = b.context || z;
                    l ? b.onSuccess && b.onSuccess.call(n, k, m) : b.onError && b.onError.call(n, k, m);
                    b.onFinish && b.onFinish.call(n, k, m)
                }
            }, b.method, d, b.headers, b.responseType, b.withCredentials);
        d = b.timeout || 0;
        if (b.onTimeout && 0 < d) {
            var g = b.onTimeout;
            var h = cj(function() {
                e || (e = !0, f.abort(), window.clearTimeout(h), g.call(b.context || z, f))
            }, d)
        }
        return f
    }

    function xj(a, b) {
        b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var c = S("XSRF_FIELD_NAME");
        if (b = b.urlParams) b[c] && delete b[c], a = lj(a, b || {}, !0);
        return a
    }

    function yj(a, b) {
        var c = S("XSRF_FIELD_NAME"),
            d = S("XSRF_TOKEN"),
            e = b.postBody || "",
            f = b.postParams;
        var g = S("XSRF_FIELD_NAME");
        var h;
        b.headers && (h = b.headers["Content-Type"]);
        b.excludeXsrf || Yb(a) && !b.withCredentials && Yb(a) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
        (U("ajax_parse_query_data_only_when_filled") && f && 0 < Object.keys(f).length || f) && "string" === typeof e && (e = kj(e), pb(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ?
            JSON.stringify(e) : ac(e));
        if (!(a = e) && (a = f)) {
            a: {
                for (var k in f) {
                    f = !1;
                    break a
                }
                f = !0
            }
            a = !f
        }!tj && a && "POST" != b.method && (tj = !0, Pi(Error("AJAX request with postData should use POST")));
        return e
    }

    function Aj(a, b, c, d) {
        var e = null;
        switch (b) {
            case "JSON":
                try {
                    var f = c.responseText
                } catch (g) {
                    throw d = Error("Error reading responseText"), d.params = a, Qi(d), g;
                }
                a = c.getResponseHeader("Content-Type") || "";
                f && 0 <= a.indexOf("json") && (")]}'\n" === f.substring(0, 5) && (f = f.substring(5)), e = JSON.parse(f));
                break;
            case "XML":
                if (a = (a = c.responseXML) ? Bj(a) : null) e = {}, db(a.getElementsByTagName("*"), function(g) {
                    e[g.tagName] = Cj(g)
                })
        }
        d && Dj(e);
        return e
    }

    function Dj(a) {
        if (Pa(a))
            for (var b in a) {
                var c;
                (c = "html_content" == b) || (c = b.length - 5, c = 0 <= c && b.indexOf("_html", c) == c);
                if (c) {
                    c = b;
                    var d = a[b];
                    if (void 0 === qb) {
                        var e = null;
                        var f = z.trustedTypes;
                        if (f && f.createPolicy) {
                            try {
                                e = f.createPolicy("goog#html", {
                                    createHTML: Ya,
                                    createScript: Ya,
                                    createScriptURL: Ya
                                })
                            } catch (g) {
                                z.console && z.console.error(g.message)
                            }
                            qb = e
                        } else qb = e
                    }
                    d = (e = qb) ? e.createHTML(d) : d;
                    a[c] = new Ub(d)
                } else Dj(a[b])
            }
    }

    function Bj(a) {
        return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
    }

    function Cj(a) {
        var b = "";
        db(a.childNodes, function(c) {
            b += c.nodeValue
        });
        return b
    }

    function Ej(a, b) {
        b.method = "POST";
        b.postParams || (b.postParams = {});
        return wj(a, b)
    }

    function zj(a, b, c, d, e, f, g) {
        function h() {
            4 == (k && "readyState" in k ? k.readyState : 0) && b && Oi(b)(k)
        }
        c = void 0 === c ? "GET" : c;
        d = void 0 === d ? "" : d;
        var k = qj();
        if (!k) return null;
        "onloadend" in k ? k.addEventListener("loadend", h, !1) : k.onreadystatechange = h;
        U("debug_forward_web_query_parameters") && (a = vj(a));
        k.open(c, a, !0);
        f && (k.responseType = f);
        g && (k.withCredentials = !0);
        c = "POST" == c && (void 0 === window.FormData || !(d instanceof FormData));
        if (e = uj(a, e))
            for (var l in e) k.setRequestHeader(l, e[l]), "content-type" == l.toLowerCase() && (c = !1);
        c && k.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        k.send(d);
        return k
    };
    var Fj = [{
        Mb: function(a) {
            return "Cannot read property '" + a.key + "'"
        },
        xb: {
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
        Mb: function(a) {
            return "Cannot call '" + a.key + "'"
        },
        xb: {
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
        Mb: function(a) {
            return a.key + " is not defined"
        },
        xb: {
            ReferenceError: [{
                regexp: /(.*) is not defined/,
                groups: ["key"]
            }, {
                regexp: /Can't find variable: (.*)/,
                groups: ["key"]
            }]
        }
    }];
    var Hj = {
        Aa: [],
        wa: [{
            Ic: Gj,
            weight: 500
        }]
    };

    function Gj(a) {
        if ("JavaException" === a.name) return !0;
        a = a.stack;
        return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
    };

    function Ij() {
        this.wa = [];
        this.Aa = []
    }
    var Jj;

    function Kj() {
        if (!Jj) {
            var a = Jj = new Ij;
            a.Aa.length = 0;
            a.wa.length = 0;
            Hj.Aa && a.Aa.push.apply(a.Aa, Hj.Aa);
            Hj.wa && a.wa.push.apply(a.wa, Hj.wa)
        }
        return Jj
    };
    var Lj = new K;

    function Mj(a) {
        function b() {
            return a.charCodeAt(d++)
        }
        var c = a.length,
            d = 0;
        do {
            var e = Nj(b);
            if (Infinity === e) break;
            var f = e >> 3;
            switch (e & 7) {
                case 0:
                    e = Nj(b);
                    if (2 === f) return e;
                    break;
                case 1:
                    if (2 === f) return;
                    d += 8;
                    break;
                case 2:
                    e = Nj(b);
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

    function Nj(a) {
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

    function Oj(a, b, c, d) {
        if (a)
            if (Array.isArray(a)) {
                var e = d;
                for (d = 0; d < a.length && !(a[d] && (e += Pj(d, a[d], b, c), 500 < e)); d++);
                d = e
            } else if ("object" === typeof a)
            for (e in a) {
                if (a[e]) {
                    var f = a[e];
                    var g = b;
                    var h = c;
                    g = "string" !== typeof f || "clickTrackingParams" !== e && "trackingParams" !== e ? 0 : (f = Mj(atob(f.replace(/-/g, "+").replace(/_/g, "/")))) ? Pj(e + ".ve", f, g, h) : 0;
                    d += g;
                    d += Pj(e, a[e], b, c);
                    if (500 < d) break
                }
            } else c[b] = Qj(a), d += c[b].length;
        else c[b] = Qj(a), d += c[b].length;
        return d
    }

    function Pj(a, b, c, d) {
        c += "." + a;
        a = Qj(b);
        d[c] = a;
        return c.length + a.length
    }

    function Qj(a) {
        try {
            return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
        } catch (b) {
            return "unable to serialize " + typeof a + " (" + b.message + ")"
        }
    };

    function Rj() {};

    function Sj() {
        if (!z.matchMedia) return "WEB_DISPLAY_MODE_UNKNOWN";
        try {
            return z.matchMedia("(display-mode: standalone)").matches ? "WEB_DISPLAY_MODE_STANDALONE" : z.matchMedia("(display-mode: minimal-ui)").matches ? "WEB_DISPLAY_MODE_MINIMAL_UI" : z.matchMedia("(display-mode: fullscreen)").matches ? "WEB_DISPLAY_MODE_FULLSCREEN" : z.matchMedia("(display-mode: browser)").matches ? "WEB_DISPLAY_MODE_BROWSER" : "WEB_DISPLAY_MODE_UNKNOWN"
        } catch (a) {
            return "WEB_DISPLAY_MODE_UNKNOWN"
        }
    };
    B("ytglobal.prefsUserPrefsPrefs_", C("ytglobal.prefsUserPrefsPrefs_") || {});
    var Tj = {
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
        Uj = {
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
        Vj = {
            EFFECTIVE_CONNECTION_TYPE_UNKNOWN: 0,
            EFFECTIVE_CONNECTION_TYPE_OFFLINE: 1,
            EFFECTIVE_CONNECTION_TYPE_SLOW_2G: 2,
            EFFECTIVE_CONNECTION_TYPE_2G: 3,
            EFFECTIVE_CONNECTION_TYPE_3G: 4,
            EFFECTIVE_CONNECTION_TYPE_4G: 5
        },
        Wj = {
            "slow-2g": "EFFECTIVE_CONNECTION_TYPE_SLOW_2G",
            "2g": "EFFECTIVE_CONNECTION_TYPE_2G",
            "3g": "EFFECTIVE_CONNECTION_TYPE_3G",
            "4g": "EFFECTIVE_CONNECTION_TYPE_4G"
        };

    function Xj() {
        var a = z.navigator;
        return a ? a.connection : void 0
    };

    function Yj(a) {
        var b = Ka.apply(1, arguments);
        var c = Error.call(this, a);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.args = [].concat(ia(b))
    }
    v(Yj, Error);

    function Zj() {
        try {
            return ak(), !0
        } catch (a) {
            return !1
        }
    }

    function ak() {
        if (void 0 !== S("DATASYNC_ID")) return S("DATASYNC_ID");
        throw new Yj("Datasync ID not set", "unknown");
    };

    function bk() {}

    function ck(a, b) {
        return dk(a, 0, b)
    }
    bk.prototype.ha = function(a, b) {
        return dk(a, 1, b)
    };

    function ek() {
        bk.apply(this, arguments)
    }
    v(ek, bk);

    function fk() {
        ek.g || (ek.g = new ek);
        return ek.g
    }

    function dk(a, b, c) {
        void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
        var d = C("yt.scheduler.instance.addJob");
        return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : cj(a, c || 0)
    }
    ek.prototype.Oa = function(a) {
        if (void 0 === a || !Number.isNaN(Number(a))) {
            var b = C("yt.scheduler.instance.cancelJob");
            b ? b(a) : window.clearTimeout(a)
        }
    };
    ek.prototype.start = function() {
        var a = C("yt.scheduler.instance.start");
        a && a()
    };
    var Qe = fk();

    function gk(a) {
        var b = new qg;
        if (b.g) try {
            b.g.setItem("__sak", "1");
            b.g.removeItem("__sak");
            var c = !0
        } catch (d) {
            c = !1
        } else c = !1;
        (b = c ? a ? new wg(b, a) : b : null) || (a = new rg(a || "UserDataSharedStore"), b = a.g ? a : null);
        this.g = (a = b) ? new mg(a) : null;
        this.h = document.domain || window.location.hostname
    }
    gk.prototype.set = function(a, b, c, d) {
        c = c || 31104E3;
        this.remove(a);
        if (this.g) try {
            this.g.set(a, b, Date.now() + 1E3 * c);
            return
        } catch (f) {}
        var e = "";
        if (d) try {
            e = escape(Of(b))
        } catch (f) {
            return
        } else e = escape(b);
        b = this.h;
        be.set("" + a, e, {
            Kb: c,
            path: "/",
            domain: void 0 === b ? "youtube.com" : b,
            secure: !1
        })
    };
    gk.prototype.get = function(a, b) {
        var c = void 0,
            d = !this.g;
        if (!d) try {
            c = this.g.get(a)
        } catch (e) {
            d = !0
        }
        if (d && (c = be.get("" + a, void 0)) && (c = unescape(c), b)) try {
            c = JSON.parse(c)
        } catch (e) {
            this.remove(a), c = void 0
        }
        return c
    };
    gk.prototype.remove = function(a) {
        this.g && this.g.remove(a);
        var b = this.h;
        be.remove("" + a, "/", void 0 === b ? "youtube.com" : b)
    };
    var hk = function() {
        var a;
        return function() {
            a || (a = new gk("ytidb"));
            return a
        }
    }();

    function ik() {
        var a;
        return null == (a = hk()) ? void 0 : a.get("LAST_RESULT_ENTRY_KEY", !0)
    };
    var jk = [],
        kk = !1;

    function lk(a) {
        kk || (jk.push({
            type: "ERROR",
            payload: a
        }), 10 < jk.length && jk.shift())
    }

    function mk(a, b) {
        kk || (jk.push({
            type: "EVENT",
            eventType: a,
            payload: b
        }), 10 < jk.length && jk.shift())
    };

    function nk(a) {
        if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
    }

    function ok(a) {
        return a.substr(0, a.indexOf(":")) || a
    };
    var pk = yc || zc;
    var qk = {},
        rk = (qk.AUTH_INVALID = "No user identifier specified.", qk.EXPLICIT_ABORT = "Transaction was explicitly aborted.", qk.IDB_NOT_SUPPORTED = "IndexedDB is not supported.", qk.MISSING_INDEX = "Index not created.", qk.MISSING_OBJECT_STORES = "Object stores not created.", qk.DB_DELETED_BY_MISSING_OBJECT_STORES = "Database is deleted because expected object stores were not created.", qk.DB_REOPENED_BY_MISSING_OBJECT_STORES = "Database is reopened because expected object stores were not created.", qk.UNKNOWN_ABORT = "Transaction was aborted for unknown reasons.",
            qk.QUOTA_EXCEEDED = "The current transaction exceeded its quota limitations.", qk.QUOTA_MAYBE_EXCEEDED = "The current transaction may have failed because of exceeding quota limitations.", qk.EXECUTE_TRANSACTION_ON_CLOSED_DB = "Can't start a transaction on a closed database", qk.INCOMPATIBLE_DB_VERSION = "The binary is incompatible with the database version", qk),
        sk = {},
        tk = (sk.AUTH_INVALID = "ERROR", sk.EXECUTE_TRANSACTION_ON_CLOSED_DB = "WARNING", sk.EXPLICIT_ABORT = "IGNORED", sk.IDB_NOT_SUPPORTED = "ERROR", sk.MISSING_INDEX =
            "WARNING", sk.MISSING_OBJECT_STORES = "ERROR", sk.DB_DELETED_BY_MISSING_OBJECT_STORES = "WARNING", sk.DB_REOPENED_BY_MISSING_OBJECT_STORES = "WARNING", sk.QUOTA_EXCEEDED = "WARNING", sk.QUOTA_MAYBE_EXCEEDED = "WARNING", sk.UNKNOWN_ABORT = "WARNING", sk.INCOMPATIBLE_DB_VERSION = "WARNING", sk),
        uk = {},
        vk = (uk.AUTH_INVALID = !1, uk.EXECUTE_TRANSACTION_ON_CLOSED_DB = !1, uk.EXPLICIT_ABORT = !1, uk.IDB_NOT_SUPPORTED = !1, uk.MISSING_INDEX = !1, uk.MISSING_OBJECT_STORES = !1, uk.DB_DELETED_BY_MISSING_OBJECT_STORES = !1, uk.DB_REOPENED_BY_MISSING_OBJECT_STORES = !1, uk.QUOTA_EXCEEDED = !1, uk.QUOTA_MAYBE_EXCEEDED = !0, uk.UNKNOWN_ABORT = !0, uk.INCOMPATIBLE_DB_VERSION = !1, uk);

    function W(a, b, c, d, e) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? rk[a] : c;
        d = void 0 === d ? tk[a] : d;
        e = void 0 === e ? vk[a] : e;
        Yj.call(this, c, Object.assign({}, {
            name: "YtIdbKnownError",
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            type: a
        }, b));
        this.type = a;
        this.message = c;
        this.level = d;
        this.g = e;
        Object.setPrototypeOf(this, W.prototype)
    }
    v(W, Yj);

    function wk(a, b) {
        W.call(this, "MISSING_OBJECT_STORES", {
            expectedObjectStores: b,
            foundObjectStores: a
        }, rk.MISSING_OBJECT_STORES);
        Object.setPrototypeOf(this, wk.prototype)
    }
    v(wk, W);

    function xk(a, b) {
        var c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.index = a;
        this.objectStore = b;
        Object.setPrototypeOf(this, xk.prototype)
    }
    v(xk, Error);
    var yk = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

    function zk(a, b, c, d) {
        b = ok(b);
        var e = a instanceof Error ? a : Error("Unexpected error: " + a);
        if (e instanceof W) return e;
        a = {
            objectStoreNames: c,
            dbName: b,
            dbVersion: d
        };
        if ("QuotaExceededError" === e.name) return new W("QUOTA_EXCEEDED", a);
        if (Ac && "UnknownError" === e.name) return new W("QUOTA_MAYBE_EXCEEDED", a);
        if (e instanceof xk) return new W("MISSING_INDEX", Object.assign({}, a, {
            objectStore: e.objectStore,
            index: e.index
        }));
        if ("InvalidStateError" === e.name && yk.some(function(f) {
                return e.message.includes(f)
            })) return new W("EXECUTE_TRANSACTION_ON_CLOSED_DB",
            a);
        if ("AbortError" === e.name) return new W("UNKNOWN_ABORT", a, e.message);
        e.args = [Object.assign({}, a, {
            name: "IdbError",
            Od: e.name
        })];
        e.level = "WARNING";
        return e
    }

    function Ak(a, b, c) {
        var d = ik();
        return new W("IDB_NOT_SUPPORTED", {
            context: {
                caller: a,
                publicName: b,
                version: c,
                hasSucceededOnce: null == d ? void 0 : d.hasSucceededOnce
            }
        })
    };

    function Bk(a) {
        if (!a) throw Error();
        throw a;
    }

    function Ck(a) {
        return a
    }

    function Dk(a) {
        this.g = a
    }

    function Ek(a) {
        function b(e) {
            if ("PENDING" === d.state.status) {
                d.state = {
                    status: "REJECTED",
                    reason: e
                };
                e = u(d.h);
                for (var f = e.next(); !f.done; f = e.next()) f = f.value, f()
            }
        }

        function c(e) {
            if ("PENDING" === d.state.status) {
                d.state = {
                    status: "FULFILLED",
                    value: e
                };
                e = u(d.g);
                for (var f = e.next(); !f.done; f = e.next()) f = f.value, f()
            }
        }
        var d = this;
        this.state = {
            status: "PENDING"
        };
        this.g = [];
        this.h = [];
        a = a.g;
        try {
            a(c, b)
        } catch (e) {
            b(e)
        }
    }
    Ek.resolve = function(a) {
        return new Ek(new Dk(function(b, c) {
            a instanceof Ek ? a.then(b, c) : b(a)
        }))
    };
    Ek.reject = function(a) {
        return new Ek(new Dk(function(b, c) {
            c(a)
        }))
    };
    Ek.prototype.then = function(a, b) {
        var c = this,
            d = null != a ? a : Ck,
            e = null != b ? b : Bk;
        return new Ek(new Dk(function(f, g) {
            "PENDING" === c.state.status ? (c.g.push(function() {
                Fk(c, c, d, f, g)
            }), c.h.push(function() {
                Gk(c, c, e, f, g)
            })) : "FULFILLED" === c.state.status ? Fk(c, c, d, f, g) : "REJECTED" === c.state.status && Gk(c, c, e, f, g)
        }))
    };

    function Hk(a, b) {
        a.then(void 0, b)
    }

    function Fk(a, b, c, d, e) {
        try {
            if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
            var f = c(a.state.value);
            f instanceof Ek ? Ik(a, b, f, d, e) : d(f)
        } catch (g) {
            e(g)
        }
    }

    function Gk(a, b, c, d, e) {
        try {
            if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
            var f = c(a.state.reason);
            f instanceof Ek ? Ik(a, b, f, d, e) : d(f)
        } catch (g) {
            e(g)
        }
    }

    function Ik(a, b, c, d, e) {
        b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(function(f) {
            f instanceof Ek ? Ik(a, b, f, d, e) : d(f)
        }, function(f) {
            e(f)
        })
    };

    function Jk(a, b, c) {
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

    function Kk(a) {
        return new Promise(function(b, c) {
            Jk(a, b, c)
        })
    }

    function Lk(a) {
        return new Ek(new Dk(function(b, c) {
            Jk(a, b, c)
        }))
    };

    function Mk(a, b) {
        return new Ek(new Dk(function(c, d) {
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
    var Nk = window,
        X = Nk.ytcsi && Nk.ytcsi.now ? Nk.ytcsi.now : Nk.performance && Nk.performance.timing && Nk.performance.now && Nk.performance.timing.navigationStart ? function() {
            return Nk.performance.timing.navigationStart + Nk.performance.now()
        } : function() {
            return (new Date).getTime()
        };

    function Ok(a, b) {
        this.g = a;
        this.options = b;
        this.transactionCount = 0;
        this.i = Math.round(X());
        this.h = !1
    }
    q = Ok.prototype;
    q.add = function(a, b, c) {
        return Pk(this, [a], {
            mode: "readwrite",
            V: !0
        }, function(d) {
            return d.objectStore(a).add(b, c)
        })
    };
    q.clear = function(a) {
        return Pk(this, [a], {
            mode: "readwrite",
            V: !0
        }, function(b) {
            return b.objectStore(a).clear()
        })
    };
    q.close = function() {
        this.g.close();
        var a;
        (null == (a = this.options) ? 0 : a.closed) && this.options.closed()
    };

    function Qk(a, b, c) {
        a = a.g.createObjectStore(b, c);
        return new Rk(a)
    }
    q.delete = function(a, b) {
        return Pk(this, [a], {
            mode: "readwrite",
            V: !0
        }, function(c) {
            return c.objectStore(a).delete(b)
        })
    };
    q.get = function(a, b) {
        return Pk(this, [a], {
            mode: "readonly",
            V: !0
        }, function(c) {
            return c.objectStore(a).get(b)
        })
    };

    function Sk(a, b, c) {
        return Pk(a, [b], {
            mode: "readwrite",
            V: !0
        }, function(d) {
            d = d.objectStore(b);
            return Lk(d.g.put(c, void 0))
        })
    }
    q.objectStoreNames = function() {
        return Array.from(this.g.objectStoreNames)
    };

    function Pk(a, b, c, d) {
        var e, f, g, h, k, l, m, n, r, p, y, A;
        return x(function(I) {
            switch (I.g) {
                case 1:
                    var O = {
                        mode: "readonly",
                        V: !1,
                        tag: "IDB_TRANSACTION_TAG_UNKNOWN"
                    };
                    "string" === typeof c ? O.mode = c : Object.assign(O, c);
                    e = O;
                    a.transactionCount++;
                    f = e.V ? 3 : 1;
                    g = 0;
                case 2:
                    if (h) {
                        I.C(3);
                        break
                    }
                    g++;
                    k = Math.round(X());
                    wa(I, 4);
                    l = a.g.transaction(b, e.mode);
                    O = new Tk(l);
                    O = Uk(O, d);
                    return w(I, O, 6);
                case 6:
                    return m = I.h, n = Math.round(X()), Vk(a, k, n, g, void 0, b.join(), e), I.return(m);
                case 4:
                    r = Aa(I);
                    p = Math.round(X());
                    y = zk(r, a.g.name, b.join(), a.g.version);
                    if ((A = y instanceof W && !y.g) || g >= f) Vk(a, k, p, g, y, b.join(), e), h = y;
                    I.C(2);
                    break;
                case 3:
                    return I.return(Promise.reject(h))
            }
        })
    }

    function Vk(a, b, c, d, e, f, g) {
        b = c - b;
        e ? (e instanceof W && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && mk("QUOTA_EXCEEDED", {
            dbName: ok(a.g.name),
            objectStoreNames: f,
            transactionCount: a.transactionCount,
            transactionMode: g.mode
        }), e instanceof W && "UNKNOWN_ABORT" === e.type && (c -= a.i, 0 > c && c >= Math.pow(2, 31) && (c = 0), mk("TRANSACTION_UNEXPECTEDLY_ABORTED", {
            objectStoreNames: f,
            transactionDuration: b,
            transactionCount: a.transactionCount,
            dbDuration: c
        }), a.h = !0), Wk(a, !1, d, f, b, g.tag), lk(e)) : Wk(a, !0, d, f, b, g.tag)
    }

    function Wk(a, b, c, d, e, f) {
        mk("TRANSACTION_ENDED", {
            objectStoreNames: d,
            connectionHasUnknownAbortedTransaction: a.h,
            duration: e,
            isSuccessful: b,
            tryCount: c,
            tag: void 0 === f ? "IDB_TRANSACTION_TAG_UNKNOWN" : f
        })
    }
    q.getName = function() {
        return this.g.name
    };

    function Rk(a) {
        this.g = a
    }
    q = Rk.prototype;
    q.add = function(a, b) {
        return Lk(this.g.add(a, b))
    };
    q.autoIncrement = function() {
        return this.g.autoIncrement
    };
    q.clear = function() {
        return Lk(this.g.clear()).then(function() {})
    };

    function Xk(a, b, c) {
        a.g.createIndex(b, c, {
            unique: !1
        })
    }

    function Yk(a, b) {
        return Zk(a, {
            query: b
        }, function(c) {
            return c.delete().then(function() {
                return c.continue()
            })
        }).then(function() {})
    }
    q.delete = function(a) {
        return a instanceof IDBKeyRange ? Yk(this, a) : Lk(this.g.delete(a))
    };
    q.get = function(a) {
        return Lk(this.g.get(a))
    };
    q.index = function(a) {
        try {
            return new $k(this.g.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new xk(a, this.g.name);
            throw b;
        }
    };
    q.getName = function() {
        return this.g.name
    };
    q.keyPath = function() {
        return this.g.keyPath
    };

    function Zk(a, b, c) {
        a = a.g.openCursor(b.query, b.direction);
        return al(a).then(function(d) {
            return Mk(d, c)
        })
    }

    function Tk(a) {
        var b = this;
        this.g = a;
        this.i = new Map;
        this.h = !1;
        this.done = new Promise(function(c, d) {
            b.g.addEventListener("complete", function() {
                c()
            });
            b.g.addEventListener("error", function(e) {
                e.currentTarget === e.target && d(b.g.error)
            });
            b.g.addEventListener("abort", function() {
                var e = b.g.error;
                if (e) d(e);
                else if (!b.h) {
                    e = W;
                    for (var f = b.g.objectStoreNames, g = [], h = 0; h < f.length; h++) {
                        var k = f.item(h);
                        if (null === k) throw Error("Invariant: item in DOMStringList is null");
                        g.push(k)
                    }
                    e = new e("UNKNOWN_ABORT", {
                        objectStoreNames: g.join(),
                        dbName: b.g.db.name,
                        mode: b.g.mode
                    });
                    d(e)
                }
            })
        })
    }

    function Uk(a, b) {
        var c = new Promise(function(d, e) {
            try {
                Hk(b(a).then(function(f) {
                    d(f)
                }), e)
            } catch (f) {
                e(f), a.abort()
            }
        });
        return Promise.all([c, a.done]).then(function(d) {
            return u(d).next().value
        })
    }
    Tk.prototype.abort = function() {
        this.g.abort();
        this.h = !0;
        throw new W("EXPLICIT_ABORT");
    };
    Tk.prototype.objectStore = function(a) {
        a = this.g.objectStore(a);
        var b = this.i.get(a);
        b || (b = new Rk(a), this.i.set(a, b));
        return b
    };

    function $k(a) {
        this.g = a
    }
    q = $k.prototype;
    q.delete = function(a) {
        return bl(this, {
            query: a
        }, function(b) {
            return b.delete().then(function() {
                return b.continue()
            })
        })
    };
    q.get = function(a) {
        return Lk(this.g.get(a))
    };
    q.getKey = function(a) {
        return Lk(this.g.getKey(a))
    };
    q.keyPath = function() {
        return this.g.keyPath
    };
    q.unique = function() {
        return this.g.unique
    };

    function bl(a, b, c) {
        a = a.g.openCursor(void 0 === b.query ? null : b.query, void 0 === b.direction ? "next" : b.direction);
        return al(a).then(function(d) {
            return Mk(d, c)
        })
    }

    function cl(a, b) {
        this.request = a;
        this.cursor = b
    }

    function al(a) {
        return Lk(a).then(function(b) {
            return b ? new cl(a, b) : null
        })
    }
    q = cl.prototype;
    q.advance = function(a) {
        this.cursor.advance(a);
        return al(this.request)
    };
    q.continue = function(a) {
        this.cursor.continue(a);
        return al(this.request)
    };
    q.delete = function() {
        return Lk(this.cursor.delete()).then(function() {})
    };
    q.getKey = function() {
        return this.cursor.key
    };
    q.ia = function() {
        return this.cursor.value
    };
    q.update = function(a) {
        return Lk(this.cursor.update(a))
    };

    function dl(a, b, c) {
        return new Promise(function(d, e) {
            function f() {
                r || (r = new Ok(g.result, {
                    closed: n
                }));
                return r
            }
            var g = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
            var h = c.Gc,
                k = c.Hc,
                l = c.ld,
                m = c.upgrade,
                n = c.closed,
                r;
            g.addEventListener("upgradeneeded", function(p) {
                try {
                    if (null === p.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                    if (null === g.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                    p.dataLoss && "none" !== p.dataLoss && mk("IDB_DATA_CORRUPTED", {
                        reason: p.dataLossMessage || "unknown reason",
                        dbName: ok(a)
                    });
                    var y = f(),
                        A = new Tk(g.transaction);
                    m &&
                        m(y, function(I) {
                            return p.oldVersion < I && p.newVersion >= I
                        }, A);
                    A.done.catch(function(I) {
                        e(I)
                    })
                } catch (I) {
                    e(I)
                }
            });
            g.addEventListener("success", function() {
                var p = g.result;
                k && p.addEventListener("versionchange", function() {
                    k(f())
                });
                p.addEventListener("close", function() {
                    mk("IDB_UNEXPECTEDLY_CLOSED", {
                        dbName: ok(a),
                        dbVersion: p.version
                    });
                    l && l()
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

    function el(a, b, c) {
        c = void 0 === c ? {} : c;
        return dl(a, b, c)
    }

    function fl(a, b) {
        b = void 0 === b ? {} : b;
        var c, d, e, f;
        return x(function(g) {
            if (1 == g.g) return wa(g, 2), c = self.indexedDB.deleteDatabase(a), d = b, (e = d.Gc) && c.addEventListener("blocked", function() {
                e()
            }), w(g, Kk(c), 4);
            if (2 != g.g) return xa(g, 0);
            f = Aa(g);
            throw zk(f, a, "", -1);
        })
    };

    function Rl(a, b) {
        this.name = a;
        this.options = b;
        this.i = !0;
        this.u = this.l = 0
    }
    Rl.prototype.h = function(a, b, c) {
        c = void 0 === c ? {} : c;
        return el(a, b, c)
    };
    Rl.prototype.delete = function(a) {
        a = void 0 === a ? {} : a;
        return fl(this.name, a)
    };

    function Sl(a, b) {
        return new W("INCOMPATIBLE_DB_VERSION", {
            dbName: a.name,
            oldVersion: a.options.version,
            newVersion: b
        })
    }

    function Tl(a, b) {
        if (!b) throw Ak("openWithToken", ok(a.name));
        return Ul(a)
    }

    function Ul(a) {
        function b() {
            var f, g, h, k, l, m, n, r, p, y;
            return x(function(A) {
                switch (A.g) {
                    case 1:
                        return g = null != (f = Error().stack) ? f : "", wa(A, 2), w(A, a.h(a.name, a.options.version, d), 4);
                    case 4:
                        h = A.h;
                        for (var I = a.options, O = [], T = u(Object.keys(I.Wa)), Q = T.next(); !Q.done; Q = T.next()) {
                            Q = Q.value;
                            var ya = I.Wa[Q],
                                Qc = void 0 === ya.jd ? Number.MAX_VALUE : ya.jd;
                            !(h.g.version >= ya.ab) || h.g.version >= Qc || h.g.objectStoreNames.contains(Q) || O.push(Q)
                        }
                        k = O;
                        if (0 === k.length) {
                            A.C(5);
                            break
                        }
                        l = Object.keys(a.options.Wa);
                        m = h.objectStoreNames();
                        if (a.u < Si("ytidb_reopen_db_retries", 0)) return a.u++, h.close(), lk(new W("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                            dbName: a.name,
                            expectedObjectStores: l,
                            foundObjectStores: m
                        })), A.return(b());
                        if (!(a.l < Si("ytidb_remake_db_retries", 1))) {
                            A.C(6);
                            break
                        }
                        a.l++;
                        return w(A, a.delete(), 7);
                    case 7:
                        return lk(new W("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                            dbName: a.name,
                            expectedObjectStores: l,
                            foundObjectStores: m
                        })), A.return(b());
                    case 6:
                        throw new wk(m, l);
                    case 5:
                        return A.return(h);
                    case 2:
                        n = Aa(A);
                        if (n instanceof DOMException ?
                            "VersionError" !== n.name : "DOMError" in self && n instanceof DOMError ? "VersionError" !== n.name : !(n instanceof Object && "message" in n) || "An attempt was made to open a database using a lower version than the existing version." !== n.message) {
                            A.C(8);
                            break
                        }
                        return w(A, a.h(a.name, void 0, Object.assign({}, d, {
                            upgrade: void 0
                        })), 9);
                    case 9:
                        r = A.h;
                        p = r.g.version;
                        if (void 0 !== a.options.version && p > a.options.version + 1) throw r.close(), a.i = !1, Sl(a, p);
                        return A.return(r);
                    case 8:
                        throw c(), n instanceof Error && !U("ytidb_async_stack_killswitch") &&
                            (n.stack = n.stack + "\n" + g.substring(g.indexOf("\n") + 1)), zk(n, a.name, "", null != (y = a.options.version) ? y : -1);
                }
            })
        }

        function c() {
            a.g === e && (a.g = void 0)
        }
        if (!a.i) throw Sl(a);
        if (a.g) return a.g;
        var d = {
            Hc: function(f) {
                f.close()
            },
            closed: c,
            ld: c,
            upgrade: a.options.upgrade
        };
        var e = b();
        a.g = e;
        return a.g
    };
    var Vl = new Rl("YtIdbMeta", {
        Wa: {
            databases: {
                ab: 1
            }
        },
        upgrade: function(a, b) {
            b(1) && Qk(a, "databases", {
                keyPath: "actualName"
            })
        }
    });

    function Wl(a, b) {
        var c;
        return x(function(d) {
            if (1 == d.g) return w(d, Tl(Vl, b), 2);
            c = d.h;
            return d.return(Pk(c, ["databases"], {
                V: !0,
                mode: "readwrite"
            }, function(e) {
                var f = e.objectStore("databases");
                return f.get(a.actualName).then(function(g) {
                    if (g ? a.actualName !== g.actualName || a.publicName !== g.publicName || a.userIdentifier !== g.userIdentifier : 1) return Lk(f.g.put(a, void 0)).then(function() {})
                })
            }))
        })
    }

    function Xl(a, b) {
        var c;
        return x(function(d) {
            if (1 == d.g) return a ? w(d, Tl(Vl, b), 2) : d.return();
            c = d.h;
            return d.return(c.delete("databases", a))
        })
    }

    function Yl(a, b) {
        var c, d;
        return x(function(e) {
            return 1 == e.g ? (c = [], w(e, Tl(Vl, b), 2)) : 3 != e.g ? (d = e.h, w(e, Pk(d, ["databases"], {
                V: !0,
                mode: "readonly"
            }, function(f) {
                c.length = 0;
                return Zk(f.objectStore("databases"), {}, function(g) {
                    a(g.ia()) && c.push(g.ia());
                    return g.continue()
                })
            }), 3)) : e.return(c)
        })
    }

    function Zl(a) {
        return Yl(function(b) {
            return "LogsDatabaseV2" === b.publicName && void 0 !== b.userIdentifier
        }, a)
    };
    var $l, am = new function() {}(new function() {});

    function bm() {
        var a, b, c, d;
        return x(function(e) {
            switch (e.g) {
                case 1:
                    a = ik();
                    if (null == (b = a) ? 0 : b.hasSucceededOnce) return e.return(!0);
                    var f;
                    if (f = pk) f = /WebKit\/([0-9]+)/.exec(Nb()), f = !!(f && 600 <= parseInt(f[1], 10));
                    f && (f = /WebKit\/([0-9]+)/.exec(Nb()), f = !(f && 602 <= parseInt(f[1], 10)));
                    if (f || ic) return e.return(!1);
                    try {
                        if (c = self, !(c.indexedDB && c.IDBIndex && c.IDBKeyRange && c.IDBObjectStore)) return e.return(!1)
                    } catch (g) {
                        return e.return(!1)
                    }
                    if (!("IDBTransaction" in self && "objectStoreNames" in IDBTransaction.prototype)) return e.return(!1);
                    wa(e, 2);
                    d = {
                        actualName: "yt-idb-test-do-not-use",
                        publicName: "yt-idb-test-do-not-use",
                        userIdentifier: void 0
                    };
                    return w(e, Wl(d, am), 4);
                case 4:
                    return w(e, Xl("yt-idb-test-do-not-use", am), 5);
                case 5:
                    return e.return(!0);
                case 2:
                    return Aa(e), e.return(!1)
            }
        })
    }

    function cm() {
        if (void 0 !== $l) return $l;
        kk = !0;
        return $l = bm().then(function(a) {
            kk = !1;
            var b;
            if (null != (b = hk()) && b.g) {
                var c;
                b = {
                    hasSucceededOnce: (null == (c = ik()) ? void 0 : c.hasSucceededOnce) || a
                };
                var d;
                null == (d = hk()) || d.set("LAST_RESULT_ENTRY_KEY", b, 2592E3, !0)
            }
            return a
        })
    }

    function dm() {
        return C("ytglobal.idbToken_") || void 0
    }

    function em() {
        var a = dm();
        return a ? Promise.resolve(a) : cm().then(function(b) {
            (b = b ? am : void 0) && B("ytglobal.idbToken_", b);
            return b
        })
    };
    new Pf;

    function fm(a) {
        if (!Zj()) throw a = new W("AUTH_INVALID", {
            dbName: a
        }), lk(a), a;
        var b = ak();
        return {
            actualName: a + ":" + b,
            publicName: a,
            userIdentifier: b
        }
    }

    function gm(a, b, c, d) {
        var e, f, g, h, k, l;
        return x(function(m) {
            switch (m.g) {
                case 1:
                    return f = null != (e = Error().stack) ? e : "", w(m, em(), 2);
                case 2:
                    g = m.h;
                    if (!g) throw h = Ak("openDbImpl", a, b), U("ytidb_async_stack_killswitch") || (h.stack = h.stack + "\n" + f.substring(f.indexOf("\n") + 1)), lk(h), h;
                    nk(a);
                    k = c ? {
                        actualName: a,
                        publicName: a,
                        userIdentifier: void 0
                    } : fm(a);
                    wa(m, 3);
                    return w(m, Wl(k, g), 5);
                case 5:
                    return w(m, el(k.actualName, b, d), 6);
                case 6:
                    return m.return(m.h);
                case 3:
                    return l = Aa(m), wa(m, 7), w(m, Xl(k.actualName, g), 9);
                case 9:
                    xa(m,
                        8);
                    break;
                case 7:
                    Aa(m);
                case 8:
                    throw l;
            }
        })
    }

    function hm(a, b, c) {
        c = void 0 === c ? {} : c;
        return gm(a, b, !1, c)
    }

    function im(a, b, c) {
        c = void 0 === c ? {} : c;
        return gm(a, b, !0, c)
    }

    function jm(a, b) {
        b = void 0 === b ? {} : b;
        var c, d;
        return x(function(e) {
            if (1 == e.g) return w(e, em(), 2);
            if (3 != e.g) {
                c = e.h;
                if (!c) return e.return();
                nk(a);
                d = fm(a);
                return w(e, fl(d.actualName, b), 3)
            }
            return w(e, Xl(d.actualName, c), 0)
        })
    }

    function km(a, b, c) {
        a = a.map(function(d) {
            return x(function(e) {
                return 1 == e.g ? w(e, fl(d.actualName, b), 2) : w(e, Xl(d.actualName, c), 0)
            })
        });
        return Promise.all(a).then(function() {})
    }

    function lm() {
        var a = void 0 === a ? {} : a;
        var b, c;
        return x(function(d) {
            if (1 == d.g) return w(d, em(), 2);
            if (3 != d.g) {
                b = d.h;
                if (!b) return d.return();
                nk("LogsDatabaseV2");
                return w(d, Zl(b), 3)
            }
            c = d.h;
            return w(d, km(c, a, b), 0)
        })
    }

    function mm(a, b) {
        b = void 0 === b ? {} : b;
        var c;
        return x(function(d) {
            if (1 == d.g) return w(d, em(), 2);
            if (3 != d.g) {
                c = d.h;
                if (!c) return d.return();
                nk(a);
                return w(d, fl(a, b), 3)
            }
            return w(d, Xl(a, c), 0)
        })
    };

    function nm(a, b) {
        Rl.call(this, a, b);
        this.options = b;
        nk(a)
    }
    v(nm, Rl);

    function om(a, b) {
        var c;
        return function() {
            c || (c = new nm(a, b));
            return c
        }
    }
    nm.prototype.h = function(a, b, c) {
        c = void 0 === c ? {} : c;
        return (this.options.Bb ? im : hm)(a, b, Object.assign({}, c))
    };
    nm.prototype.delete = function(a) {
        a = void 0 === a ? {} : a;
        return (this.options.Bb ? mm : jm)(this.name, a)
    };

    function pm(a, b) {
        return om(a, b)
    };
    var qm = {},
        rm = pm("ytGcfConfig", {
            Wa: (qm.coldConfigStore = {
                ab: 1
            }, qm.hotConfigStore = {
                ab: 1
            }, qm),
            Bb: !1,
            upgrade: function(a, b) {
                b(1) && (Xk(Qk(a, "hotConfigStore", {
                    keyPath: "key",
                    autoIncrement: !0
                }), "hotTimestampIndex", "timestamp"), Xk(Qk(a, "coldConfigStore", {
                    keyPath: "key",
                    autoIncrement: !0
                }), "coldTimestampIndex", "timestamp"))
            },
            version: 1
        });

    function sm(a) {
        return Tl(rm(), a)
    }

    function tm(a, b, c) {
        var d, e, f;
        return x(function(g) {
            switch (g.g) {
                case 1:
                    return d = {
                        config: a,
                        hashData: b,
                        timestamp: X()
                    }, w(g, sm(c), 2);
                case 2:
                    return e = g.h, w(g, e.clear("hotConfigStore"), 3);
                case 3:
                    return w(g, Sk(e, "hotConfigStore", d), 4);
                case 4:
                    return f = g.h, g.return(f)
            }
        })
    }

    function um(a, b, c, d) {
        var e, f, g;
        return x(function(h) {
            switch (h.g) {
                case 1:
                    return e = {
                        config: a,
                        hashData: b,
                        configData: c,
                        timestamp: X()
                    }, w(h, sm(d), 2);
                case 2:
                    return f = h.h, w(h, f.clear("coldConfigStore"), 3);
                case 3:
                    return w(h, Sk(f, "coldConfigStore", e), 4);
                case 4:
                    return g = h.h, h.return(g)
            }
        })
    }

    function vm(a) {
        var b, c;
        return x(function(d) {
            return 1 == d.g ? w(d, sm(a), 2) : 3 != d.g ? (b = d.h, c = void 0, w(d, Pk(b, ["coldConfigStore"], {
                mode: "readwrite",
                V: !0
            }, function(e) {
                return bl(e.objectStore("coldConfigStore").index("coldTimestampIndex"), {
                    direction: "prev"
                }, function(f) {
                    c = f.ia()
                })
            }), 3)) : d.return(c)
        })
    }

    function wm(a) {
        var b, c;
        return x(function(d) {
            return 1 == d.g ? w(d, sm(a), 2) : 3 != d.g ? (b = d.h, c = void 0, w(d, Pk(b, ["hotConfigStore"], {
                mode: "readwrite",
                V: !0
            }, function(e) {
                return bl(e.objectStore("hotConfigStore").index("hotTimestampIndex"), {
                    direction: "prev"
                }, function(f) {
                    c = f.ia()
                })
            }), 3)) : d.return(c)
        })
    };

    function xm() {
        he.apply(this, arguments);
        this.g = []
    }
    v(xm, he);
    xm.prototype.xa = function() {
        this.g.length = 0;
        he.prototype.xa.call(this)
    };

    function ym() {
        this.g = 0;
        this.h = new xm
    }

    function zm(a, b, c) {
        var d, e, f;
        return x(function(g) {
            switch (g.g) {
                case 1:
                    if (!U("update_log_event_config")) {
                        g.C(0);
                        break
                    }
                    c && (a.i = c, B("yt.gcf.config.hotConfigGroup", a.i));
                    a.hotHashData = b;
                    B("yt.gcf.config.hotHashData", a.hotHashData);
                    d = dm();
                    if (!d) {
                        g.C(3);
                        break
                    }
                    if (c) {
                        g.C(4);
                        break
                    }
                    return w(g, wm(d), 5);
                case 5:
                    e = g.h, c = null == (f = e) ? void 0 : f.config;
                case 4:
                    return w(g, tm(c, b, d), 3);
                case 3:
                    if (c)
                        for (var h = c, k = u(a.h.g), l = k.next(); !l.done; l = k.next()) l = l.value, l(h);
                    g.g = 0
            }
        })
    }

    function Am(a, b, c) {
        var d, e, f, g;
        return x(function(h) {
            if (1 == h.g) {
                if (!U("update_log_event_config")) return h.C(0);
                a.coldHashData = b;
                B("yt.gcf.config.coldHashData", a.coldHashData);
                return (d = dm()) ? c ? h.C(4) : w(h, vm(d), 5) : h.C(0)
            }
            4 != h.g && (e = h.h, c = null == (f = e) ? void 0 : f.config);
            if (!c) return h.C(0);
            g = c.configData;
            return w(h, um(c, b, g, d), 0)
        })
    };

    function Bm() {
        return "INNERTUBE_API_KEY" in Ii && "INNERTUBE_API_VERSION" in Ii
    }

    function Cm() {
        return {
            Uc: S("INNERTUBE_API_KEY"),
            Vc: S("INNERTUBE_API_VERSION"),
            Ib: S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
            fc: S("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
            Wc: S("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
            hc: S("INNERTUBE_CONTEXT_CLIENT_VERSION"),
            jc: S("INNERTUBE_CONTEXT_HL"),
            ic: S("INNERTUBE_CONTEXT_GL"),
            Xc: S("INNERTUBE_HOST_OVERRIDE") || "",
            Zc: !!S("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
            Yc: !!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
            appInstallData: S("SERIALIZED_CLIENT_CONFIG_DATA")
        }
    }

    function Dm(a) {
        var b = {
            client: {
                hl: a.jc,
                gl: a.ic,
                clientName: a.fc,
                clientVersion: a.hc,
                configInfo: a.Ib
            }
        };
        navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
        var c = z.devicePixelRatio;
        c && 1 != c && (b.client.screenDensityFloat = String(c));
        c = S("EXPERIMENTS_TOKEN", "");
        "" !== c && (b.client.experimentsToken = c);
        c = Ti();
        0 < c.length && (b.request = {
            internalExperimentFlags: c
        });
        Em(a, void 0, b);
        Fm(void 0, b);
        Gm(void 0, b);
        Hm(a, void 0, b);
        Im(void 0, b);
        U("start_sending_config_hash") && Jm(void 0, b);
        S("DELEGATED_SESSION_ID") &&
            !U("pageid_as_header_web") && (b.user = {
                onBehalfOfUser: S("DELEGATED_SESSION_ID")
            });
        a = Object;
        c = a.assign;
        for (var d = b.client, e = {}, f = u(Object.entries(kj(S("DEVICE", "")))), g = f.next(); !g.done; g = f.next()) {
            var h = u(g.value);
            g = h.next().value;
            h = h.next().value;
            "cbrand" === g ? e.deviceMake = h : "cmodel" === g ? e.deviceModel = h : "cbr" === g ? e.browserName = h : "cbrver" === g ? e.browserVersion = h : "cos" === g ? e.osName = h : "cosver" === g ? e.osVersion = h : "cplatform" === g && (e.platform = h)
        }
        b.client = c.call(a, d, e);
        return b
    }

    function Km(a) {
        var b = new mi,
            c = new fi;
        G(c, 1, a.jc);
        G(c, 2, a.ic);
        G(c, 16, a.Wc);
        G(c, 17, a.hc);
        if (a.Ib) {
            var d = a.Ib,
                e = new ci;
            d.coldConfigData && G(e, 1, d.coldConfigData);
            d.appInstallData && G(e, 6, d.appInstallData);
            d.coldHashData && G(e, 3, d.coldHashData);
            d.hotHashData && G(e, 5, d.hotHashData);
            H(c, ci, 62, e)
        }
        if ((d = z.devicePixelRatio) && 1 != d) {
            if (null != d && "number" !== typeof d) throw Error("Value of float/double field must be a number|null|undefined, found " + typeof d + ": " + d);
            G(c, 65, d)
        }
        d = S("EXPERIMENTS_TOKEN", "");
        "" !== d && G(c,
            54, d);
        d = Ti();
        if (0 < d.length) {
            e = new ii;
            for (var f = 0; f < d.length; f++) {
                var g = new gi;
                G(g, 1, d[f].key);
                ad(g, 2, hi, d[f].value);
                fd(e, 15, gi, g)
            }
            H(b, ii, 5, e)
        }
        Em(a, c);
        Fm(b);
        Gm(c);
        Hm(a, c);
        Im(c);
        U("start_sending_config_hash") && Jm(c);
        S("DELEGATED_SESSION_ID") && !U("pageid_as_header_web") && (a = new li, G(a, 3, S("DELEGATED_SESSION_ID")));
        a = u(Object.entries(kj(S("DEVICE", ""))));
        for (d = a.next(); !d.done; d = a.next()) e = u(d.value), d = e.next().value, e = e.next().value, "cbrand" === d ? G(c, 12, e) : "cmodel" === d ? G(c, 13, e) : "cbr" === d ? G(c, 87, e) : "cbrver" ===
            d ? G(c, 88, e) : "cos" === d ? G(c, 18, e) : "cosver" === d ? G(c, 19, e) : "cplatform" === d && G(c, 42, e);
        H(b, fi, 1, c);
        return b
    }

    function Em(a, b, c) {
        a = a.fc;
        if ("WEB" === a || "MWEB" === a || 1 === a || 2 === a)
            if (b) {
                c = cd(b, di, 96) || new di;
                var d = Sj();
                d = Object.keys(ni).indexOf(d);
                d = -1 === d ? null : d;
                null !== d && G(c, 3, d);
                H(b, di, 96, c)
            } else c && (c.client.mainAppWebInfo = null != (d = c.client.mainAppWebInfo) ? d : {}, c.client.mainAppWebInfo.webDisplayMode = Sj())
    }

    function Fm(a, b) {
        var c = C("yt.embedded_player.embed_url");
        c && (a ? (b = cd(a, ji, 7) || new ji, G(b, 4, c), H(a, ji, 7, b)) : b && (b.thirdParty = {
            embedUrl: c
        }))
    }

    function Gm(a, b) {
        var c;
        if (U("web_log_memory_total_kbytes") && (null == (c = z.navigator) ? 0 : c.deviceMemory)) {
            var d;
            c = null == (d = z.navigator) ? void 0 : d.deviceMemory;
            a ? G(a, 95, 1E6 * c) : b && (b.client.memoryTotalKbytes = "" + 1E6 * c)
        }
    }

    function Hm(a, b, c) {
        if (a.appInstallData)
            if (b) {
                var d;
                c = null != (d = cd(b, ci, 62)) ? d : new ci;
                G(c, 6, a.appInstallData);
                H(b, ci, 62, c)
            } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
    }

    function Im(a, b) {
        a: {
            var c = Xj();
            if (c) {
                var d = Tj[c.type || "unknown"] || "CONN_UNKNOWN";
                c = Tj[c.effectiveType || "unknown"] || "CONN_UNKNOWN";
                "CONN_CELLULAR_UNKNOWN" === d && "CONN_UNKNOWN" !== c && (d = c);
                if ("CONN_UNKNOWN" !== d) break a;
                if ("CONN_UNKNOWN" !== c) {
                    d = c;
                    break a
                }
            }
            d = void 0
        }
        d && (a ? G(a, 61, Uj[d]) : b && (b.client.connectionType = d));U("web_log_effective_connection_type") && (d = Xj(), d = null != d && d.effectiveType ? Wj.hasOwnProperty(d.effectiveType) ? Wj[d.effectiveType] : "EFFECTIVE_CONNECTION_TYPE_UNKNOWN" : void 0, d && (a ? G(a, 94, Vj[d]) :
            b && (b.client.effectiveConnectionType = d)))
    }

    function Lm(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = {};
        S("EOM_VISITOR_DATA") ? d = {
            "X-Goog-EOM-Visitor-Id": S("EOM_VISITOR_DATA")
        } : d = {
            "X-Goog-Visitor-Id": c.visitorData || S("VISITOR_DATA", "")
        };
        if (b && b.includes("www.youtube-nocookie.com")) return d;
        b = c.Id || S("AUTHORIZATION");
        if (!b)
            if (a) b = "Bearer " + C("gapi.auth.getToken")().Hd;
            else {
                Rj.g || (Rj.g = new Rj);
                a = {};
                if (c = ee([])) a.Authorization = c, c = void 0, void 0 === c && (c = Number(S("SESSION_INDEX", 0)), c = isNaN(c) ? 0 : c), U("voice_search_auth_header_removal") || (a["X-Goog-AuthUser"] =
                    c.toString()), "INNERTUBE_HOST_OVERRIDE" in Ii || (a["X-Origin"] = window.location.origin), "DELEGATED_SESSION_ID" in Ii && (a["X-Goog-PageId"] = S("DELEGATED_SESSION_ID"));
                U("pageid_as_header_web") || delete a["X-Goog-PageId"];
                d = Object.assign({}, d, a)
            }
        b && (d.Authorization = b);
        return d
    }

    function Jm(a, b) {
        if (!ym.g) {
            var c = new ym;
            ym.g = c
        }
        c = ym.g;
        var d = X() - c.g;
        if (0 !== c.g && d < Si("send_config_hash_timer")) c = void 0;
        else {
            d = C("yt.gcf.config.coldConfigData");
            var e = C("yt.gcf.config.hotHashData"),
                f = C("yt.gcf.config.coldHashData");
            d && e && f && (c.g = X());
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
                    b = null != (g = cd(a, ci, 62)) ? g : new ci;
                    G(b, 1, c);
                    G(b, 3, d);
                    G(b, 5, e);
                    H(a, ci, 62, b)
                } else b && (b.client.configInfo = b.client.configInfo || {}, b.client.configInfo.coldConfigData = c, b.client.configInfo.coldHashData = d, b.client.configInfo.hotHashData = e)
    };
    var Mm = C("ytPubsub2Pubsub2Instance") || new K;
    K.prototype.subscribe = K.prototype.subscribe;
    K.prototype.unsubscribeByKey = K.prototype.kb;
    K.prototype.publish = K.prototype.Xa;
    K.prototype.clear = K.prototype.clear;
    B("ytPubsub2Pubsub2Instance", Mm);
    B("ytPubsub2Pubsub2SubscribedKeys", C("ytPubsub2Pubsub2SubscribedKeys") || {});
    B("ytPubsub2Pubsub2TopicToKeys", C("ytPubsub2Pubsub2TopicToKeys") || {});
    B("ytPubsub2Pubsub2IsAsync", C("ytPubsub2Pubsub2IsAsync") || {});
    B("ytPubsub2Pubsub2SkipSubKey", null);

    function Nm(a, b, c) {
        c = void 0 === c ? {
            sampleRate: .1
        } : c;
        Math.random() < Math.min(.02, c.sampleRate / 100) && (a = {
            Ud: a,
            Td: b
        }, (b = C("ytPubsub2Pubsub2Instance")) && b.publish.call(b, "meta_logging_csi_event".toString(), "meta_logging_csi_event", a))
    };
    var Om = Si("max_body_size_to_compress", 5E5),
        Pm = Si("min_body_size_to_compress", 500),
        Qm = !0,
        Rm = 0,
        Sm = 0,
        Tm = Si("compression_performance_threshold", 250),
        Um = Si("slow_compressions_before_abandon_count", 10);

    function Vm(a, b, c, d) {
        var e = X(),
            f = {
                startTime: e,
                ticks: {},
                infos: {}
            };
        if (Qm) try {
            try {
                var g = (new Blob(b.split(""))).size
            } catch (r) {
                Qi(r), g = null
            }
            if (null == g || !(g > Om || g < Pm)) {
                var h = ge(b);
                var k = k || {};
                k.Tc = !0;
                var l = new Yh(k);
                l.push(h, !0);
                if (l.err) throw l.msg || Ig[l.err];
                var m = l.result;
                var n = X();
                f.ticks.gelc = n;
                Sm++;
                U("disable_compression_due_to_performance_degredation") && n - e >= Tm && (Rm++, U("abandon_compression_after_N_slow_zips") ? Sm === Si("compression_disable_point") && Rm > Um && (Qm = !1) : Qm = !1);
                U("gel_compression_csi_killswitch") ||
                    !U("log_gel_compression_latency") && !U("log_gel_compression_latency_lr") || Nm("gel_compression", f, {
                        sampleRate: .1
                    });
                c.headers || (c.headers = {});
                c.headers["Content-Encoding"] = "gzip";
                c.postBody = m;
                c.postParams = void 0
            }
            d(a, c)
        } catch (r) {
            Qi(r), d(a, c)
        } else d(a, c)
    };

    function Wm(a) {
        a = Object.assign({}, a);
        delete a.Authorization;
        var b = ee();
        if (b) {
            var c = new Af;
            c.update(S("INNERTUBE_API_KEY"));
            c.update(b);
            a.hash = Dc(c.digest(), 3)
        }
        return a
    };
    var Xm;

    function Ym() {
        Xm || (Xm = new gk("yt.innertube"));
        return Xm
    }

    function Zm(a, b, c, d) {
        if (d) return null;
        d = Ym().get("nextId", !0) || 1;
        var e = Ym().get("requests", !0) || {};
        e[d] = {
            method: a,
            request: b,
            authState: Wm(c),
            requestTime: Math.round(X())
        };
        Ym().set("nextId", d + 1, 86400, !0);
        Ym().set("requests", e, 86400, !0);
        return d
    }

    function $m(a) {
        var b = Ym().get("requests", !0) || {};
        delete b[a];
        Ym().set("requests", b, 86400, !0)
    }

    function an(a) {
        var b = Ym().get("requests", !0);
        if (b) {
            for (var c in b) {
                var d = b[c];
                if (!(6E4 > Math.round(X()) - d.requestTime)) {
                    var e = d.authState,
                        f = Wm(Lm(!1));
                    mb(e, f) && (e = d.request, "requestTimeMs" in e && (e.requestTimeMs = Math.round(X())), bn(a, d.method, e, {}));
                    delete b[c]
                }
            }
            Ym().set("requests", b, 86400, !0)
        }
    };

    function cn(a) {
        this.ob = this.g = !1;
        this.potentialEsfErrorCounter = this.h = 0;
        this.handleError = function() {};
        this.Qa = function() {};
        this.now = Date.now;
        this.eb = !1;
        var b;
        this.yc = null != (b = a.yc) ? b : 100;
        var c;
        this.wc = null != (c = a.wc) ? c : 1;
        var d;
        this.uc = null != (d = a.uc) ? d : 2592E6;
        var e;
        this.sc = null != (e = a.sc) ? e : 12E4;
        var f;
        this.vc = null != (f = a.vc) ? f : 5E3;
        var g;
        this.H = null != (g = a.H) ? g : void 0;
        this.tb = !!a.tb;
        var h;
        this.rb = null != (h = a.rb) ? h : .1;
        var k;
        this.yb = null != (k = a.yb) ? k : 10;
        a.handleError && (this.handleError = a.handleError);
        a.Qa && (this.Qa = a.Qa);
        a.eb && (this.eb = a.eb);
        a.ob && (this.ob = a.ob);
        this.I = a.I;
        this.fa = a.fa;
        this.N = a.N;
        this.P = a.P;
        this.va = a.va;
        this.Pb =
            a.Pb;
        this.Ob = a.Ob;
        dn(this) && (!this.I || this.I("networkless_logging")) && en(this)
    }

    function en(a) {
        dn(a) && !a.eb && (a.g = !0, a.tb && Math.random() <= a.rb && a.N.Jc(a.H), fn(a), a.P.ba() && a.jb(), a.P.Ga(a.Pb, a.jb.bind(a)), a.P.Ga(a.Ob, a.Vb.bind(a)))
    }
    q = cn.prototype;
    q.writeThenSend = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        if (dn(this) && this.g) {
            var d = {
                url: a,
                options: b,
                timestamp: this.now(),
                status: "NEW",
                sendCount: 0
            };
            this.N.set(d, this.H).then(function(e) {
                d.id = e;
                c.P.ba() && gn(c, d)
            }).catch(function(e) {
                gn(c, d);
                hn(c, e)
            })
        } else this.va(a, b)
    };
    q.sendThenWrite = function(a, b, c) {
        var d = this;
        b = void 0 === b ? {} : b;
        if (dn(this) && this.g) {
            var e = {
                url: a,
                options: b,
                timestamp: this.now(),
                status: "NEW",
                sendCount: 0
            };
            this.I && this.I("nwl_skip_retry") && (e.skipRetry = c);
            if (this.P.ba() || this.I && this.I("nwl_aggressive_send_then_write") && !e.skipRetry) {
                if (!e.skipRetry) {
                    var f = b.onError ? b.onError : function() {};
                    b.onError = function(g, h) {
                        return x(function(k) {
                            if (1 == k.g) return w(k, d.N.set(e, d.H).catch(function(l) {
                                hn(d, l)
                            }), 2);
                            f(g, h);
                            k.g = 0
                        })
                    }
                }
                this.va(a, b, e.skipRetry)
            } else this.N.set(e, this.H).catch(function(g) {
                d.va(a, b, e.skipRetry);
                hn(d, g)
            })
        } else this.va(a, b, this.I && this.I("nwl_skip_retry") && c)
    };
    q.sendAndWrite = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        if (dn(this) && this.g) {
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
                void 0 !== d.id ? c.N.Pa(d.id, c.H) : e = !0;
                c.P.Ia && c.I && c.I("vss_network_hint") && c.P.Ia(!0);
                f(g, h)
            };
            this.va(d.url, d.options);
            this.N.set(d, this.H).then(function(g) {
                d.id = g;
                e && c.N.Pa(d.id, c.H)
            }).catch(function(g) {
                hn(c, g)
            })
        } else this.va(a, b)
    };
    q.jb = function() {
        var a = this;
        if (!dn(this)) throw Ak("throttleSend");
        this.h || (this.h = this.fa.ha(function() {
            var b;
            return x(function(c) {
                if (1 == c.g) return w(c, a.N.cc("NEW", a.H), 2);
                if (3 != c.g) return b = c.h, b ? w(c, gn(a, b), 3) : (a.Vb(), c.return());
                a.h && (a.h = 0, a.jb());
                c.g = 0
            })
        }, this.yc))
    };
    q.Vb = function() {
        this.fa.Oa(this.h);
        this.h = 0
    };

    function gn(a, b) {
        var c, d;
        return x(function(e) {
            switch (e.g) {
                case 1:
                    if (!dn(a)) throw c = Ak("immediateSend"), c;
                    if (void 0 === b.id) {
                        e.C(2);
                        break
                    }
                    return w(e, a.N.bd(b.id, a.H), 3);
                case 3:
                    (d = e.h) || a.Qa(Error("The request cannot be found in the database."));
                case 2:
                    if (jn(a, b, a.uc)) {
                        e.C(4);
                        break
                    }
                    a.Qa(Error("Networkless Logging: Stored logs request expired age limit"));
                    if (void 0 === b.id) {
                        e.C(5);
                        break
                    }
                    return w(e, a.N.Pa(b.id, a.H), 5);
                case 5:
                    return e.return();
                case 4:
                    b.skipRetry || (b = kn(a, b));
                    if (!b) {
                        e.C(0);
                        break
                    }
                    if (!b.skipRetry ||
                        void 0 === b.id) {
                        e.C(8);
                        break
                    }
                    return w(e, a.N.Pa(b.id, a.H), 8);
                case 8:
                    a.va(b.url, b.options, !!b.skipRetry), e.g = 0
            }
        })
    }

    function kn(a, b) {
        if (!dn(a)) throw Ak("updateRequestHandlers");
        var c = b.options.onError ? b.options.onError : function() {};
        b.options.onError = function(e, f) {
            var g, h, k, l;
            return x(function(m) {
                switch (m.g) {
                    case 1:
                        g = ln(f);
                        (h = mn(f)) && a.I && a.I("web_enable_error_204") && a.handleError(Error("Request failed due to compression"), b.url, f);
                        if (!(a.I && a.I("nwl_consider_error_code") && g || a.I && !a.I("nwl_consider_error_code") && a.potentialEsfErrorCounter <= a.yb)) {
                            m.C(2);
                            break
                        }
                        if (!a.P.Ab) {
                            m.C(3);
                            break
                        }
                        return w(m, a.P.Ab(), 3);
                    case 3:
                        if (a.P.ba()) {
                            m.C(2);
                            break
                        }
                        c(e, f);
                        if (!a.I || !a.I("nwl_consider_error_code") || void 0 === (null == (k = b) ? void 0 : k.id)) {
                            m.C(6);
                            break
                        }
                        return w(m, a.N.Qb(b.id, a.H, !1), 6);
                    case 6:
                        return m.return();
                    case 2:
                        if (a.I && a.I("nwl_consider_error_code") && !g && a.potentialEsfErrorCounter > a.yb) return m.return();
                        a.potentialEsfErrorCounter++;
                        if (void 0 === (null == (l = b) ? void 0 : l.id)) {
                            m.C(8);
                            break
                        }
                        return b.sendCount < a.wc ? w(m, a.N.Qb(b.id, a.H, !0, h ? !1 : void 0), 12) : w(m, a.N.Pa(b.id, a.H), 8);
                    case 12:
                        a.fa.ha(function() {
                            a.P.ba() && a.jb()
                        }, a.vc);
                    case 8:
                        c(e, f), m.g = 0
                }
            })
        };
        var d = b.options.onSuccess ? b.options.onSuccess : function() {};
        b.options.onSuccess = function(e, f) {
            var g;
            return x(function(h) {
                if (1 == h.g) return void 0 === (null == (g = b) ? void 0 : g.id) ? h.C(2) : w(h, a.N.Pa(b.id, a.H), 2);
                a.P.Ia && a.I && a.I("vss_network_hint") && a.P.Ia(!0);
                d(e, f);
                h.g = 0
            })
        };
        return b
    }

    function jn(a, b, c) {
        b = b.timestamp;
        return a.now() - b >= c ? !1 : !0
    }

    function fn(a) {
        if (!dn(a)) throw Ak("retryQueuedRequests");
        a.N.cc("QUEUED", a.H).then(function(b) {
            b && !jn(a, b, a.sc) ? a.fa.ha(function() {
                return x(function(c) {
                    if (1 == c.g) return void 0 === b.id ? c.C(2) : w(c, a.N.Qb(b.id, a.H), 2);
                    fn(a);
                    c.g = 0
                })
            }) : a.P.ba() && a.jb()
        })
    }

    function hn(a, b) {
        a.Bc && !a.P.ba() ? a.Bc(b) : a.handleError(b)
    }

    function dn(a) {
        return !!a.H || a.ob
    }

    function ln(a) {
        var b;
        return (a = null == a ? void 0 : null == (b = a.error) ? void 0 : b.code) && 400 <= a && 599 >= a ? !1 : !0
    }

    function mn(a) {
        var b;
        a = null == a ? void 0 : null == (b = a.error) ? void 0 : b.code;
        return !(400 !== a && 415 !== a)
    };
    var nn;

    function on() {
        if (nn) return nn();
        var a = {};
        nn = pm("LogsDatabaseV2", {
            Wa: (a.LogsRequestsStore = {
                ab: 2
            }, a),
            Bb: !1,
            upgrade: function(b, c, d) {
                c(2) && Qk(b, "LogsRequestsStore", {
                    keyPath: "id",
                    autoIncrement: !0
                });
                c(3);
                c(5) && (d = d.objectStore("LogsRequestsStore"), d.g.indexNames.contains("newRequest") && d.g.deleteIndex("newRequest"), Xk(d, "newRequestV2", ["status", "interface", "timestamp"]));
                c(7) && b.g.objectStoreNames.contains("sapisid") && b.g.deleteObjectStore("sapisid");
                c(9) && b.g.objectStoreNames.contains("SWHealthLog") && b.g.deleteObjectStore("SWHealthLog")
            },
            version: 9
        });
        return nn()
    };

    function pn(a) {
        return Tl(on(), a)
    }

    function qn(a, b) {
        var c, d, e, f;
        return x(function(g) {
            if (1 == g.g) return c = {
                startTime: X(),
                infos: {
                    transactionType: "YT_IDB_TRANSACTION_TYPE_WRITE"
                },
                ticks: {}
            }, w(g, pn(b), 2);
            if (3 != g.g) return d = g.h, e = Object.assign({}, a, {
                options: JSON.parse(JSON.stringify(a.options)),
                interface: S("INNERTUBE_CONTEXT_CLIENT_NAME", 0)
            }), w(g, Sk(d, "LogsRequestsStore", e), 3);
            f = g.h;
            c.ticks.tc = X();
            rn(c);
            return g.return(f)
        })
    }

    function sn(a, b) {
        var c, d, e, f, g, h, k;
        return x(function(l) {
            if (1 == l.g) return c = {
                startTime: X(),
                infos: {
                    transactionType: "YT_IDB_TRANSACTION_TYPE_READ"
                },
                ticks: {}
            }, w(l, pn(b), 2);
            if (3 != l.g) return d = l.h, e = S("INNERTUBE_CONTEXT_CLIENT_NAME", 0), f = [a, e, 0], g = [a, e, X()], h = IDBKeyRange.bound(f, g), k = void 0, w(l, Pk(d, ["LogsRequestsStore"], {
                mode: "readwrite",
                V: !0
            }, function(m) {
                return bl(m.objectStore("LogsRequestsStore").index("newRequestV2"), {
                    query: h,
                    direction: "prev"
                }, function(n) {
                    n.ia() && (k = n.ia(), "NEW" === a && (k.status = "QUEUED",
                        n.update(k)))
                })
            }), 3);
            c.ticks.tc = X();
            rn(c);
            return l.return(k)
        })
    }

    function tn(a, b) {
        var c;
        return x(function(d) {
            if (1 == d.g) return w(d, pn(b), 2);
            c = d.h;
            return d.return(Pk(c, ["LogsRequestsStore"], {
                mode: "readwrite",
                V: !0
            }, function(e) {
                var f = e.objectStore("LogsRequestsStore");
                return f.get(a).then(function(g) {
                    if (g) return g.status = "QUEUED", Lk(f.g.put(g, void 0)).then(function() {
                        return g
                    })
                })
            }))
        })
    }

    function un(a, b, c, d) {
        c = void 0 === c ? !0 : c;
        var e;
        return x(function(f) {
            if (1 == f.g) return w(f, pn(b), 2);
            e = f.h;
            return f.return(Pk(e, ["LogsRequestsStore"], {
                mode: "readwrite",
                V: !0
            }, function(g) {
                var h = g.objectStore("LogsRequestsStore");
                return h.get(a).then(function(k) {
                    return k ? (k.status = "NEW", c && (k.sendCount += 1), void 0 !== d && (k.options.compress = d), Lk(h.g.put(k, void 0)).then(function() {
                        return k
                    })) : Ek.resolve(void 0)
                })
            }))
        })
    }

    function vn(a, b) {
        var c;
        return x(function(d) {
            if (1 == d.g) return w(d, pn(b), 2);
            c = d.h;
            return d.return(c.delete("LogsRequestsStore", a))
        })
    }

    function wn(a) {
        var b, c;
        return x(function(d) {
            if (1 == d.g) return w(d, pn(a), 2);
            b = d.h;
            c = X() - 2592E6;
            return w(d, Pk(b, ["LogsRequestsStore"], {
                mode: "readwrite",
                V: !0
            }, function(e) {
                return Zk(e.objectStore("LogsRequestsStore"), {}, function(f) {
                    if (f.ia().timestamp <= c) return f.delete().then(function() {
                        return f.continue()
                    })
                })
            }), 0)
        })
    }

    function xn() {
        x(function(a) {
            return w(a, lm(), 0)
        })
    }

    function rn(a) {
        U("nwl_csi_killswitch") || Nm("networkless_performance", a, {
            sampleRate: 1
        })
    };
    var yn = {},
        zn = pm("ServiceWorkerLogsDatabase", {
            Wa: (yn.SWHealthLog = {
                ab: 1
            }, yn),
            Bb: !0,
            upgrade: function(a, b) {
                b(1) && Xk(Qk(a, "SWHealthLog", {
                    keyPath: "id",
                    autoIncrement: !0
                }), "swHealthNewRequest", ["interface", "timestamp"])
            },
            version: 1
        });

    function An(a) {
        return Tl(zn(), a)
    }

    function Bn(a) {
        var b, c;
        x(function(d) {
            if (1 == d.g) return w(d, An(a), 2);
            b = d.h;
            c = X() - 2592E6;
            return w(d, Pk(b, ["SWHealthLog"], {
                mode: "readwrite",
                V: !0
            }, function(e) {
                return Zk(e.objectStore("SWHealthLog"), {}, function(f) {
                    if (f.ia().timestamp <= c) return f.delete().then(function() {
                        return f.continue()
                    })
                })
            }), 0)
        })
    }

    function Cn(a) {
        var b;
        return x(function(c) {
            if (1 == c.g) return w(c, An(a), 2);
            b = c.h;
            return w(c, b.clear("SWHealthLog"), 0)
        })
    };
    var Dn = {},
        En = 0;

    function Fn(a) {
        var b = new Image,
            c = "" + En++;
        Dn[c] = b;
        b.onload = b.onerror = function() {
            delete Dn[c]
        };
        b.src = a
    };

    function Gn() {
        this.g = new Map;
        this.h = !1
    }

    function Hn() {
        if (!Gn.g) {
            var a = C("yt.networkRequestMonitor.instance") || new Gn;
            B("yt.networkRequestMonitor.instance", a);
            Gn.g = a
        }
        return Gn.g
    }
    Gn.prototype.requestComplete = function(a, b) {
        b && (this.h = !0);
        a = this.removeParams(a);
        this.g.get(a) || this.g.set(a, b)
    };
    Gn.prototype.isEndpointCFR = function(a) {
        a = this.removeParams(a);
        return (a = this.g.get(a)) ? !1 : !1 === a && this.h ? !0 : null
    };
    Gn.prototype.removeParams = function(a) {
        return a.split("?")[0]
    };
    Gn.prototype.removeParams = Gn.prototype.removeParams;
    Gn.prototype.isEndpointCFR = Gn.prototype.isEndpointCFR;
    Gn.prototype.requestComplete = Gn.prototype.requestComplete;
    Gn.getInstance = Hn;
    var In;

    function Jn() {
        In || (In = new gk("yt.offline"));
        return In
    }

    function Kn(a) {
        if (U("offline_error_handling")) {
            var b = Jn().get("errors", !0) || {};
            b[a.message] = {
                name: a.name,
                stack: a.stack
            };
            a.level && (b[a.message].level = a.level);
            Jn().set("errors", b, 2592E3, !0)
        }
    };

    function Y() {
        Je.call(this);
        var a = this;
        this.l = !1;
        this.h = Pe();
        this.h.Ga("networkstatus-online", function() {
            if (a.l && U("offline_error_handling")) {
                var b = Jn().get("errors", !0);
                if (b) {
                    for (var c in b)
                        if (b[c]) {
                            var d = new Yj(c, "sent via offline_errors");
                            d.name = b[c].name;
                            d.stack = b[c].stack;
                            d.level = b[c].level;
                            Pi(d)
                        }
                    Jn().set("errors", {}, 2592E3, !0)
                }
            }
        })
    }
    v(Y, Je);

    function Ln() {
        if (!Y.g) {
            var a = C("yt.networkStatusManager.instance") || new Y;
            B("yt.networkStatusManager.instance", a);
            Y.g = a
        }
        return Y.g
    }
    q = Y.prototype;
    q.ba = function() {
        return this.h.ba()
    };
    q.Ia = function(a) {
        this.h.h = a
    };
    q.Rc = function() {
        var a = window.navigator.onLine;
        return void 0 === a ? !0 : a
    };
    q.Mc = function() {
        this.l = !0
    };
    q.Ga = function(a, b) {
        return this.h.Ga(a, b)
    };
    q.Ab = function(a) {
        a = Ne(this.h, a);
        a.then(function(b) {
            U("use_cfr_monitor") && Hn().requestComplete("generate_204", b)
        });
        return a
    };
    Y.prototype.sendNetworkCheckRequest = Y.prototype.Ab;
    Y.prototype.listen = Y.prototype.Ga;
    Y.prototype.enableErrorFlushing = Y.prototype.Mc;
    Y.prototype.getWindowStatus = Y.prototype.Rc;
    Y.prototype.networkStatusHint = Y.prototype.Ia;
    Y.prototype.isNetworkAvailable = Y.prototype.ba;
    Y.getInstance = Ln;

    function Mn(a) {
        a = void 0 === a ? {} : a;
        Je.call(this);
        var b = this;
        this.h = this.G = 0;
        this.l = Ln();
        var c = C("yt.networkStatusManager.instance.listen").bind(this.l);
        c && (a.zb ? (this.zb = a.zb, c("networkstatus-online", function() {
            Nn(b, "publicytnetworkstatus-online")
        }), c("networkstatus-offline", function() {
            Nn(b, "publicytnetworkstatus-offline")
        })) : (c("networkstatus-online", function() {
            Ke(b, "publicytnetworkstatus-online")
        }), c("networkstatus-offline", function() {
            Ke(b, "publicytnetworkstatus-offline")
        })))
    }
    v(Mn, Je);
    Mn.prototype.ba = function() {
        var a = C("yt.networkStatusManager.instance.isNetworkAvailable");
        return a ? a.bind(this.l)() : !0
    };
    Mn.prototype.Ia = function(a) {
        var b = C("yt.networkStatusManager.instance.networkStatusHint").bind(this.l);
        b && b(a)
    };
    Mn.prototype.Ab = function(a) {
        var b = this,
            c;
        return x(function(d) {
            c = C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.l);
            return U("skip_network_check_if_cfr") && Hn().isEndpointCFR("generate_204") ? d.return(new Promise(function(e) {
                var f;
                b.Ia((null == (f = window.navigator) ? void 0 : f.onLine) || !0);
                e(b.ba())
            })) : c ? d.return(c(a)) : d.return(!0)
        })
    };

    function Nn(a, b) {
        a.zb ? a.h ? (Qe.Oa(a.G), a.G = Qe.ha(function() {
            a.o !== b && (Ke(a, b), a.o = b, a.h = X())
        }, a.zb - (X() - a.h))) : (Ke(a, b), a.o = b, a.h = X()) : Ke(a, b)
    };
    var On;

    function Pn() {
        var a = cn.call;
        On || (On = new Mn({
            Md: !0,
            Ld: !0
        }));
        a.call(cn, this, {
            N: {
                Jc: wn,
                Pa: vn,
                cc: sn,
                bd: tn,
                Qb: un,
                set: qn
            },
            P: On,
            handleError: function(b, c, d) {
                var e, f = null == d ? void 0 : null == (e = d.error) ? void 0 : e.code;
                if (400 === f || 415 === f) {
                    var g;
                    Qi(new Yj(b.message, c, null == d ? void 0 : null == (g = d.error) ? void 0 : g.code), void 0, void 0, void 0, !0)
                } else Pi(b)
            },
            Qa: Qi,
            va: Qn,
            now: X,
            Bc: Kn,
            fa: fk(),
            Pb: "publicytnetworkstatus-online",
            Ob: "publicytnetworkstatus-offline",
            tb: !0,
            rb: .1,
            yb: Si("potential_esf_error_limit", 10),
            I: U,
            eb: !(Zj() && "www.youtube-nocookie.com" !== Yb(document.location.toString()))
        });
        this.i = new Pf;
        U("networkless_immediately_drop_all_requests") && xn();
        mm("LogsDatabaseV2")
    }
    v(Pn, cn);

    function Rn() {
        var a = C("yt.networklessRequestController.instance");
        a || (a = new Pn, B("yt.networklessRequestController.instance", a), U("networkless_logging") && em().then(function(b) {
            a.H = b;
            en(a);
            a.i.resolve();
            a.tb && Math.random() <= a.rb && a.H && Bn(a.H);
            U("networkless_immediately_drop_sw_health_store") && Sn(a)
        }));
        return a
    }
    Pn.prototype.writeThenSend = function(a, b) {
        b || (b = {});
        Zj() || (this.g = !1);
        cn.prototype.writeThenSend.call(this, a, b)
    };
    Pn.prototype.sendThenWrite = function(a, b, c) {
        b || (b = {});
        Zj() || (this.g = !1);
        cn.prototype.sendThenWrite.call(this, a, b, c)
    };
    Pn.prototype.sendAndWrite = function(a, b) {
        b || (b = {});
        Zj() || (this.g = !1);
        cn.prototype.sendAndWrite.call(this, a, b)
    };
    Pn.prototype.awaitInitialization = function() {
        return this.i.promise
    };

    function Sn(a) {
        var b;
        x(function(c) {
            if (!a.H) throw b = Ak("clearSWHealthLogsDb"), b;
            return c.return(Cn(a.H).catch(function(d) {
                a.handleError(d)
            }))
        })
    }

    function Qn(a, b, c) {
        b = U("web_fp_via_jspb") ? Object.assign({}, b) : b;
        U("use_cfr_monitor") && Tn(a, b);
        if (U("use_request_time_ms_header")) b.headers && (b.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(X())));
        else {
            var d;
            if (null == (d = b.postParams) ? 0 : d.requestTimeMs) b.postParams.requestTimeMs = Math.round(X())
        }
        if (c && 0 === Object.keys(b).length) {
            var e = void 0 === e ? "" : e;
            var f = void 0 === f ? !1 : f;
            if (a)
                if (e) zj(a, void 0, "POST", e);
                else if (S("USE_NET_AJAX_FOR_PING_TRANSPORT", !1)) zj(a, void 0, "GET", "", void 0, void 0, f);
            else {
                b: {
                    try {
                        var g =
                            new $a({
                                url: a
                            });
                        if (g.i && g.h || g.l) {
                            var h = Xb(a.match(Wb)[5] || null);
                            var k = !(!h || !h.endsWith("/aclk") || "1" !== cc(a, "ri"));
                            break b
                        }
                    } catch (m) {}
                    k = !1
                }
                if (k) {
                    b: {
                        try {
                            if (window.navigator && window.navigator.sendBeacon && window.navigator.sendBeacon(a, "")) {
                                var l = !0;
                                break b
                            }
                        } catch (m) {}
                        l = !1
                    }
                    c = l ? !0 : !1
                }
                else c = !1;c || Fn(a)
            }
        } else b.compress ? b.postBody ? ("string" !== typeof b.postBody && (b.postBody = JSON.stringify(b.postBody)), Vm(a, b.postBody, b, wj)) : Vm(a, JSON.stringify(b.postParams), b, Ej) : wj(a, b)
    }

    function Tn(a, b) {
        var c = b.onError ? b.onError : function() {};
        b.onError = function(e, f) {
            Hn().requestComplete(a, !1);
            c(e, f)
        };
        var d = b.onSuccess ? b.onSuccess : function() {};
        b.onSuccess = function(e, f) {
            Hn().requestComplete(a, !0);
            d(e, f)
        }
    };
    var Un = z.ytNetworklessLoggingInitializationOptions || {
        isNwlInitialized: !1
    };
    B("ytNetworklessLoggingInitializationOptions", Un);

    function Vn(a) {
        var b = this;
        this.config_ = null;
        a ? this.config_ = a : Bm() && (this.config_ = Cm());
        ck(function() {
            an(b)
        }, 5E3)
    }
    Vn.prototype.isReady = function() {
        !this.config_ && Bm() && (this.config_ = Cm());
        return !!this.config_
    };

    function bn(a, b, c, d) {
        function e(y) {
            y = void 0 === y ? !1 : y;
            var A;
            if (d.retry && "www.youtube-nocookie.com" != h && (y || U("skip_ls_gel_retry") || "application/json" !== g.headers["Content-Type"] || (A = Zm(b, c, l, k)), A)) {
                var I = g.onSuccess,
                    O = g.onFetchSuccess;
                g.onSuccess = function(Q, ya) {
                    $m(A);
                    I(Q, ya)
                };
                c.onFetchSuccess = function(Q, ya) {
                    $m(A);
                    O(Q, ya)
                }
            }
            try {
                if (y && d.retry && !d.nc.bypassNetworkless) g.method = "POST", d.nc.writeThenSend ? Rn().writeThenSend(p, g) : Rn().sendAndWrite(p, g);
                else if (d.compress)
                    if (g.postBody) {
                        var T = g.postBody;
                        "string" !== typeof T && (T = JSON.stringify(g.postBody));
                        Vm(p, T, g, wj)
                    } else Vm(p, JSON.stringify(g.postParams), g, Ej);
                else U("web_all_payloads_via_jspb") ? wj(p, g) : Ej(p, g)
            } catch (Q) {
                if ("InvalidAccessError" == Q.name) A && ($m(A), A = 0), Qi(Error("An extension is blocking network request."));
                else throw Q;
            }
            A && ck(function() {
                an(a)
            }, 5E3)
        }!S("VISITOR_DATA") && "visitor_id" !== b && .01 > Math.random() && Qi(new Yj("Missing VISITOR_DATA when sending innertube request.", b, c, d));
        if (!a.isReady()) {
            var f = new Yj("innertube xhrclient not ready", b, c, d);
            Pi(f);
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
            onSuccess: function(y, A) {
                if (d.onSuccess) d.onSuccess(A)
            },
            onFetchSuccess: function(y) {
                if (d.onSuccess) d.onSuccess(y)
            },
            onError: function(y, A) {
                if (d.onError) d.onError(A)
            },
            onFetchError: function(y) {
                if (d.onError) d.onError(y)
            },
            timeout: d.timeout,
            withCredentials: !0,
            compress: d.compress
        };
        g.headers["Content-Type"] || (g.headers["Content-Type"] = "application/json");
        var h = "";
        (f = a.config_.Xc) && (h = f);
        var k = a.config_.Zc || !1,
            l = Lm(k, h, d);
        Object.assign(g.headers, l);
        (f = g.headers.Authorization) && !h && k && (g.headers["x-origin"] = window.location.origin);
        var m = "/youtubei/" + a.config_.Vc + "/" + b,
            n = {
                alt: "json"
            },
            r = a.config_.Yc && f;
        r = r && f.startsWith("Bearer");
        r || (n.key = a.config_.Uc);
        var p = lj("" + h + m, n || {}, !0);
        C("ytNetworklessLoggingInitializationOptions") &&
            Un.isNwlInitialized ? cm().then(function(y) {
                e(y)
            }) : e(!1)
    };

    function Wn(a) {
        this.W = a;
        this.g = null;
        this.o = 0;
        this.M = null;
        this.G = 0;
        this.h = [];
        for (a = 0; 4 > a; a++) this.h.push(0);
        this.l = 0;
        this.Cb = bj(window, "mousemove", Xa(this.Db, this));
        this.Eb = dj(Xa(this.La, this), 25)
    }
    D(Wn, he);
    Wn.prototype.Db = function(a) {
        void 0 === a.g && Xi(a);
        var b = a.g;
        void 0 === a.h && Xi(a);
        this.g = new xd(b, a.h)
    };
    Wn.prototype.La = function() {
        if (this.g) {
            var a = X();
            if (0 != this.o) {
                var b = this.M,
                    c = this.g,
                    d = b.x - c.x;
                b = b.y - c.y;
                d = Math.sqrt(d * d + b * b) / (a - this.o);
                this.h[this.l] = .5 < Math.abs((d - this.G) / this.G) ? 1 : 0;
                for (c = b = 0; 4 > c; c++) b += this.h[c] || 0;
                3 <= b && this.W();
                this.G = d
            }
            this.o = a;
            this.M = this.g;
            this.l = (this.l + 1) % 4
        }
    };
    Wn.prototype.xa = function() {
        window.clearInterval(this.Eb);
        $i(this.Cb)
    };
    var Xn = new Set([174, 173, 175]),
        Yn = {};

    function Zn() {
        var a = {},
            b = void 0 === a.hd ? !1 : a.hd;
        a = void 0 === a.Nc ? !0 : a.Nc;
        if (null == C("_lact", window)) {
            var c = parseInt(S("LACT"), 10);
            c = isFinite(c) ? Date.now() - Math.max(c, 0) : -1;
            B("_lact", c, window);
            B("_fact", c, window); - 1 == c && $n();
            bj(document, "keydown", $n);
            bj(document, "keyup", $n);
            bj(document, "mousedown", $n);
            bj(document, "mouseup", $n);
            b ? bj(window, "touchmove", function() {
                ao("touchmove", 200)
            }, {
                passive: !0
            }) : (bj(window, "resize", function() {
                ao("resize", 200)
            }), a && bj(window, "scroll", function() {
                ao("scroll", 200)
            }));
            new Wn(function() {
                ao("mouse", 100)
            });
            bj(document, "touchstart", $n, {
                passive: !0
            });
            bj(document, "touchend", $n, {
                passive: !0
            })
        }
    }

    function ao(a, b) {
        Yn[a] || (Yn[a] = !0, Qe.ha(function() {
            $n();
            Yn[a] = !1
        }, b))
    }

    function $n(a) {
        var b;
        if (null != (b = C("experiment.flags", window)) && b.enable_lact_reset_by_volume_buttons || !Xn.has(null == a ? void 0 : a.keyCode)) null == C("_lact", window) && Zn(), a = Date.now(), B("_lact", a, window), -1 == C("_fact", window) && B("_fact", a, window), (a = C("ytglobal.ytUtilActivityCallback_")) && a()
    }

    function bo() {
        var a = C("_lact", window);
        return null == a ? -1 : Math.max(Date.now() - a, 0)
    };
    var co = z.ytPubsubPubsubInstance || new K,
        eo = z.ytPubsubPubsubSubscribedKeys || {},
        fo = z.ytPubsubPubsubTopicToKeys || {},
        go = z.ytPubsubPubsubIsSynchronous || {};
    K.prototype.subscribe = K.prototype.subscribe;
    K.prototype.unsubscribeByKey = K.prototype.kb;
    K.prototype.publish = K.prototype.Xa;
    K.prototype.clear = K.prototype.clear;
    B("ytPubsubPubsubInstance", co);
    B("ytPubsubPubsubTopicToKeys", fo);
    B("ytPubsubPubsubIsSynchronous", go);
    B("ytPubsubPubsubSubscribedKeys", eo);
    var ho = Symbol("injectionDeps");

    function io() {
        this.key = ym
    }

    function jo() {
        this.h = new Map;
        this.g = new Map
    }
    jo.prototype.resolve = function(a) {
        return a instanceof io ? ko(this, a.key, [], !0) : ko(this, a, [])
    };

    function ko(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        if (-1 < c.indexOf(b)) throw Error("Deps cycle for: " + b);
        if (a.g.has(b)) return a.g.get(b);
        if (!a.h.has(b)) {
            if (d) return;
            throw Error("No provider for: " + b);
        }
        d = a.h.get(b);
        c.push(b);
        if (void 0 !== d.od) var e = d.od;
        else if (d.nd) e = d[ho] ? lo(a, d[ho], c) : [], e = d.nd.apply(d, ia(e));
        else if (d.md) {
            e = d.md;
            var f = e[ho] ? lo(a, e[ho], c) : [];
            e = new(Function.prototype.bind.apply(e, [null].concat(ia(f))))
        } else throw Error("Could not resolve providers for: " + b);
        c.pop();
        d.Sd || a.g.set(b, e);
        return e
    }

    function lo(a, b, c) {
        return b ? b.map(function(d) {
            return d instanceof io ? ko(a, d.key, c, !0) : ko(a, d, c)
        }) : []
    };
    var mo;

    function no() {
        this.store = {};
        this.g = {}
    }
    no.prototype.storePayload = function(a, b) {
        a = oo(a);
        this.store[a] ? this.store[a].push(b) : (this.g = {}, this.store[a] = [b]);
        return a
    };
    no.prototype.smartExtractMatchingEntries = function(a) {
        if (!a.keys.length) return [];
        for (var b = po(this, a.keys.splice(0, 1)[0]), c = [], d = 0; d < b.length; d++) this.store[b[d]] && a.sizeLimit && (this.store[b[d]].length <= a.sizeLimit ? (c.push.apply(c, ia(this.store[b[d]])), delete this.store[b[d]]) : c.push.apply(c, ia(this.store[b[d]].splice(0, a.sizeLimit))));
        (null == a ? 0 : a.sizeLimit) && c.length < (null == a ? void 0 : a.sizeLimit) && (a.sizeLimit -= c.length, c.push.apply(c, ia(this.smartExtractMatchingEntries(a))));
        return c
    };
    no.prototype.extractMatchingEntries = function(a) {
        a = po(this, a);
        for (var b = [], c = 0; c < a.length; c++) this.store[a[c]] && (b.push.apply(b, ia(this.store[a[c]])), delete this.store[a[c]]);
        return b
    };
    no.prototype.getSequenceCount = function(a) {
        a = po(this, a);
        for (var b = 0, c = 0; c < a.length; c++) {
            var d = void 0;
            b += (null == (d = this.store[a[c]]) ? void 0 : d.length) || 0
        }
        return b
    };

    function po(a, b) {
        var c = oo(b);
        if (a.g[c]) return a.g[c];
        var d = Object.keys(a.store) || [];
        if (1 >= d.length && oo(b) === d[0]) return d;
        for (var e = [], f = 0; f < d.length; f++) {
            var g = d[f].split("/");
            if (qo(b.auth, g[0])) {
                var h = b.isJspb;
                qo(void 0 === h ? "undefined" : h ? "true" : "false", g[1]) && qo(b.cttAuthInfo, g[2]) && (h = b.tier, h = void 0 === h ? "undefined" : JSON.stringify(h), qo(h, g[3]) && e.push(d[f]))
            }
        }
        return a.g[c] = e
    }

    function qo(a, b) {
        return void 0 === a || "undefined" === a ? !0 : a === b
    }
    no.prototype.getSequenceCount = no.prototype.getSequenceCount;
    no.prototype.extractMatchingEntries = no.prototype.extractMatchingEntries;
    no.prototype.smartExtractMatchingEntries = no.prototype.smartExtractMatchingEntries;
    no.prototype.storePayload = no.prototype.storePayload;

    function oo(a) {
        return [void 0 === a.auth ? "undefined" : a.auth, void 0 === a.isJspb ? "undefined" : a.isJspb, void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo, void 0 === a.tier ? "undefined" : a.tier].join("/")
    };
    var ro = Si("initial_gel_batch_timeout", 2E3),
        so = Si("gel_queue_timeout_max_ms", 6E4),
        to = Math.pow(2, 16) - 1,
        uo = void 0;

    function vo() {
        this.i = this.g = this.h = 0
    }
    var wo = new vo,
        xo = new vo,
        yo, zo = !0,
        Ao = z.ytLoggingTransportTokensToCttTargetIds_ || {};
    B("ytLoggingTransportTokensToCttTargetIds_", Ao);
    var Bo = z.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
    B("ytLoggingTransportTokensToJspbCttTargetIds_", Bo);
    var Co = {};

    function Do() {
        var a = C("yt.logging.ims");
        a || (a = new no, B("yt.logging.ims", a));
        return a
    }

    function Eo(a, b) {
        if ("log_event" === a.endpoint) {
            Fo(a);
            var c = Go(a);
            Co[c] = !0;
            var d = {
                cttAuthInfo: c,
                isJspb: !1
            };
            Do().storePayload(d, a.payload);
            Ho(b, c, !1, d)
        }
    }

    function Io(a, b) {
        if ("log_event" === a.endpoint) {
            Fo(void 0, a);
            var c = Go(a, !0);
            Co[c] = !0;
            var d = {
                cttAuthInfo: c,
                isJspb: !0
            };
            Do().storePayload(d, a.payload.toJSON());
            Ho(b, c, !0, d)
        }
    }

    function Ho(a, b, c, d) {
        c = void 0 === c ? !1 : c;
        a && (uo = new a);
        a = Si("tvhtml5_logging_max_batch_ads_fork") || Si("web_logging_max_batch") || 100;
        var e = X(),
            f = c ? xo.i : wo.i,
            g = 0;
        d && (g = Do().getSequenceCount(d));
        g >= a ? yo || (yo = Jo(function() {
            Ko({
                writeThenSend: !0
            }, U("flush_only_full_queue") ? b : void 0, c);
            yo = void 0
        }, 0)) : 10 <= e - f && (Lo(c), c ? xo.i = e : wo.i = e)
    }

    function Mo(a, b) {
        if ("log_event" === a.endpoint) {
            Fo(a);
            var c = Go(a),
                d = new Map;
            d.set(c, [a.payload]);
            b && (uo = new b);
            return new Qf(function(e, f) {
                uo && uo.isReady() ? No(d, uo, e, f, {
                    bypassNetworkless: !0
                }, !0) : e()
            })
        }
    }

    function Oo(a, b) {
        if ("log_event" === a.endpoint) {
            Fo(void 0, a);
            var c = Go(a, !0),
                d = new Map;
            d.set(c, [a.payload.toJSON()]);
            b && (uo = new b);
            return new Qf(function(e) {
                uo && uo.isReady() ? Po(d, uo, e, {
                    bypassNetworkless: !0
                }, !0) : e()
            })
        }
    }

    function Go(a, b) {
        var c = "";
        if (a.dangerousLogToVisitorSession) c = "visitorOnlyApprovedKey";
        else if (a.cttAuthInfo) {
            if (void 0 === b ? 0 : b) {
                b = a.cttAuthInfo.token;
                c = a.cttAuthInfo;
                var d = new Di;
                c.videoId ? ad(d, 1, ld, c.videoId) : c.playlistId && ad(d, 2, ld, c.playlistId);
                Bo[b] = d
            } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), Ao[a.cttAuthInfo.token] = c;
            c = a.cttAuthInfo.token
        }
        return c
    }

    function Ko(a, b, c) {
        a = void 0 === a ? {} : a;
        c = void 0 === c ? !1 : c;
        new Qf(function(d, e) {
            c ? (Qo(xo.h), Qo(xo.g), xo.g = 0) : (Qo(wo.h), Qo(wo.g), wo.g = 0);
            if (uo && uo.isReady()) {
                var f = a,
                    g = c,
                    h = uo;
                f = void 0 === f ? {} : f;
                g = void 0 === g ? !1 : g;
                var k = new Map,
                    l = new Map;
                if (void 0 !== b) g ? (e = Do().extractMatchingEntries({
                    isJspb: g,
                    cttAuthInfo: b
                }), k.set(b, e), Po(k, h, d, f)) : (k = Do().extractMatchingEntries({
                    isJspb: g,
                    cttAuthInfo: b
                }), l.set(b, k), No(l, h, d, e, f));
                else if (g) {
                    e = u(Object.keys(Co));
                    for (g = e.next(); !g.done; g = e.next()) l = g.value, g = Do().extractMatchingEntries({
                        isJspb: !0,
                        cttAuthInfo: l
                    }), 0 < g.length && k.set(l, g), delete Co[l];
                    Po(k, h, d, f)
                } else {
                    k = u(Object.keys(Co));
                    for (g = k.next(); !g.done; g = k.next()) {
                        g = g.value;
                        var m = Do().extractMatchingEntries({
                            isJspb: !1,
                            cttAuthInfo: g
                        });
                        0 < m.length && l.set(g, m);
                        delete Co[g]
                    }
                    No(l, h, d, e, f)
                }
            } else Lo(c), d()
        })
    }

    function Lo(a) {
        a = void 0 === a ? !1 : a;
        if (U("web_gel_timeout_cap") && (!a && !wo.g || a && !xo.g)) {
            var b = Jo(function() {
                Ko({
                    writeThenSend: !0
                }, void 0, a)
            }, so);
            a ? xo.g = b : wo.g = b
        }
        Qo(a ? xo.h : wo.h);
        b = S("LOGGING_BATCH_TIMEOUT", Si("web_gel_debounce_ms", 1E4));
        U("shorten_initial_gel_batch_timeout") && zo && (b = ro);
        b = Jo(function() {
            Ko({
                writeThenSend: !0
            }, void 0, a)
        }, b);
        a ? xo.h = b : wo.h = b
    }

    function No(a, b, c, d, e, f) {
        e = void 0 === e ? {} : e;
        var g = Math.round(X()),
            h = a.size,
            k = {};
        a = u(a);
        for (var l = a.next(); !l.done; k = {
                lb: k.lb,
                Ea: k.Ea,
                Za: k.Za,
                nb: k.nb,
                mb: k.mb
            }, l = a.next()) {
            var m = u(l.value);
            l = m.next().value;
            m = m.next().value;
            k.Ea = nb({
                context: Dm(b.config_ || Cm())
            });
            if (!Oa(m) && !U("throw_err_when_logevent_malformed_killswitch")) {
                d();
                break
            }
            k.Ea.events = m;
            (m = Ao[l]) && Ro(k.Ea, l, m);
            delete Ao[l];
            k.Za = "visitorOnlyApprovedKey" === l;
            So(k.Ea, g, k.Za);
            To(e);
            k.nb = function(n) {
                U("update_log_event_config") && Qe.ha(function() {
                    return x(function(r) {
                        return w(r,
                            Uo(n), 0)
                    })
                });
                h--;
                h || c()
            };
            k.lb = 0;
            k.mb = function(n) {
                return function() {
                    n.lb++;
                    if (e.bypassNetworkless && 1 === n.lb) try {
                        bn(b, "log_event", n.Ea, Vo({
                            writeThenSend: !0
                        }, n.Za, n.nb, n.mb, f)), zo = !1
                    } catch (r) {
                        Pi(r), d()
                    }
                    h--;
                    h || c()
                }
            }(k);
            try {
                bn(b, "log_event", k.Ea, Vo(e, k.Za, k.nb, k.mb, f)), zo = !1
            } catch (n) {
                Pi(n), d()
            }
        }
    }

    function Po(a, b, c, d, e) {
        d = void 0 === d ? {} : d;
        var f = Math.round(X()),
            g = a.size,
            h = new Map([].concat(ia(a)));
        h = u(h);
        for (var k = h.next(); !k.done; k = h.next()) {
            var l = u(k.value).next().value,
                m = a.get(l);
            k = new Ei;
            var n = Km(b.config_ || Cm());
            H(k, mi, 1, n);
            m = m ? Wo(m) : [];
            m = u(m);
            for (n = m.next(); !n.done; n = m.next()) fd(k, 3, Ai, n.value);
            (m = Bo[l]) && Xo(k, l, m);
            delete Bo[l];
            l = "visitorOnlyApprovedKey" === l;
            Yo(k, f, l);
            To(d);
            m = {
                startTime: X(),
                ticks: {},
                infos: {}
            };
            k = vd(k);
            m.ticks.geljspc = X();
            U("log_jspb_serialize_latency") && Nm("gel_jspb_serialize",
                m, {
                    sampleRate: .1
                });
            l = Vo(d, l, function(r) {
                U("update_log_event_config") && Qe.ha(function() {
                    return x(function(p) {
                        return w(p, Uo(r), 0)
                    })
                });
                g--;
                g || c()
            }, function() {
                g--;
                g || c()
            }, e);
            l.headers["Content-Type"] = "application/json+protobuf";
            l.postBodyFormat = "JSPB";
            l.postBody = k;
            bn(b, "log_event", "", l);
            zo = !1
        }
    }

    function To(a) {
        U("always_send_and_write") && (a.writeThenSend = !1)
    }

    function Vo(a, b, c, d, e) {
        a = {
            retry: !0,
            onSuccess: c,
            onError: d,
            nc: a,
            dangerousLogToVisitorSession: b,
            Kd: !!e,
            headers: {},
            postBodyFormat: "",
            postBody: "",
            compress: U("compress_gel") || U("compress_gel_lr")
        };
        Zo() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(X())));
        return a
    }

    function So(a, b, c) {
        Zo() || (a.requestTimeMs = String(b));
        U("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
        !c && (b = S("EVENT_ID")) && (c = $o(), a.serializedClientEventId = {
            serializedEventId: b,
            clientCounter: String(c)
        })
    }

    function Yo(a, b, c) {
        Zo() || G(a, 2, b);
        if (!c && (b = S("EVENT_ID"))) {
            c = $o();
            var d = new Ci;
            G(d, 1, b);
            G(d, 2, c);
            H(a, Ci, 5, d)
        }
    }

    function $o() {
        var a = S("BATCH_CLIENT_COUNTER") || 0;
        a || (a = Math.floor(Math.random() * to / 2));
        a++;
        a > to && (a = 1);
        Ji("BATCH_CLIENT_COUNTER", a);
        return a
    }

    function Ro(a, b, c) {
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

    function Xo(a, b, c) {
        if (kd(c, 1)) var d = 1;
        else if (c.getPlaylistId()) d = 2;
        else return;
        H(a, Di, 4, c);
        a = cd(a, mi, 1) || new mi;
        c = cd(a, li, 3) || new li;
        var e = new ki;
        G(e, 2, b);
        G(e, 1, d);
        fd(c, 12, ki, e);
        H(a, li, 3, c)
    }

    function Wo(a) {
        for (var b = [], c = 0; c < a.length; c++) try {
            b.push(new Ai(a[c]))
        } catch (d) {
            Pi(new Yj("Transport failed to deserialize " + String(a[c])))
        }
        return b
    }

    function Fo(a, b) {
        if (C("yt.logging.transport.enableScrapingForTest")) {
            var c = C("yt.logging.transport.scrapedPayloadsForTesting"),
                d = C("yt.logging.transport.payloadToScrape");
            b && (b = C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)()) && c.push(b);
            if (d && 1 <= d.length)
                for (b = 0; b < d.length; b++)
                    if (a && a.payload[d[b]]) {
                        var e = void 0;
                        c.push((null == (e = a) ? void 0 : e.payload)[d[b]])
                    }
            B("yt.logging.transport.scrapedPayloadsForTesting", c)
        }
    }

    function Zo() {
        return U("use_request_time_ms_header") || U("lr_use_request_time_ms_header")
    }

    function Jo(a, b) {
        return U("transport_use_scheduler") ? ck(a, b) : cj(a, b)
    }

    function Qo(a) {
        U("transport_use_scheduler") ? Qe.Oa(a) : window.clearTimeout(a)
    }

    function Uo(a) {
        var b, c, d, e, f, g, h, k, l, m;
        return x(function(n) {
            if (1 == n.g) {
                d = null == (b = a) ? void 0 : null == (c = b.responseContext) ? void 0 : c.globalConfigGroup;
                var r = d ? d[bi.name] : void 0;
                e = r;
                g = null == (f = d) ? void 0 : f.hotHashData;
                r = d ? d[ai.name] : void 0;
                h = r;
                l = null == (k = d) ? void 0 : k.coldHashData;
                mo || (mo = new jo);
                r = mo;
                return (m = r.resolve.call(r, new io)) ? g ? e ? w(n, zm(m, g, e), 2) : w(n, zm(m, g), 2) : n.C(2) : n.return()
            }
            return l ? h ? w(n, Am(m, l, h), 0) : w(n, Am(m, l), 0) : n.C(0)
        })
    };
    var ap = z.ytLoggingGelSequenceIdObj_ || {};
    B("ytLoggingGelSequenceIdObj_", ap);

    function bp(a) {
        Ko(void 0, void 0, void 0 === a ? !1 : a)
    }

    function cp(a) {
        ap[a] = a in ap ? ap[a] + 1 : 0;
        return ap[a]
    };
    var dp = [];

    function ep(a, b) {
        var c = void 0 === c ? {} : c;
        var d = Vn;
        S("ytLoggingEventsDefaultDisabled", !1) && Vn === Vn && (d = null);
        if (U("web_all_payloads_via_jspb")) c.timestamp || (c.timestamp = X()), dp.push({
            Qd: a,
            payload: b,
            options: c
        });
        else {
            c = void 0 === c ? {} : c;
            var e = {},
                f = Math.round(c.timestamp || X());
            e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
            e[a] = b;
            U("enable_unknown_lact_fix_on_html5") && Zn();
            a = bo();
            e.context = {
                lastActivityMs: String(c.timestamp || !isFinite(a) ? -1 : a)
            };
            U("log_sequence_info_on_gel_web") && c.sequenceGroup && (a = e.context,
                b = c.sequenceGroup, b = {
                    index: cp(b),
                    groupKey: b
                }, a.sequence = b, c.endOfSequence && delete ap[c.sequenceGroup]);
            (c.sendIsolatedPayload ? Mo : Eo)({
                endpoint: "log_event",
                payload: e,
                cttAuthInfo: c.cttAuthInfo,
                dangerousLogToVisitorSession: c.dangerousLogToVisitorSession
            }, d)
        }
    };
    var fp = z.ytLoggingGelSequenceIdObj_ || {};
    B("ytLoggingGelSequenceIdObj_", fp);

    function gp(a) {
        var b = void 0;
        b = void 0 === b ? {} : b;
        var c = !1;
        S("ytLoggingEventsDefaultDisabled", !1) && (c = !0);
        c = c ? null : Vn;
        b = void 0 === b ? {} : b;
        var d = Math.round(b.timestamp || X());
        G(a, 1, d < Number.MAX_SAFE_INTEGER ? d : 0);
        var e = bo();
        d = new zi;
        G(d, 1, b.timestamp || !isFinite(e) ? -1 : e);
        if (U("log_sequence_info_on_gel_web") && b.sequenceGroup) {
            e = b.sequenceGroup;
            var f = cp(e),
                g = new yi;
            G(g, 2, f);
            G(g, 1, e);
            H(d, yi, 3, g);
            b.endOfSequence && delete fp[b.sequenceGroup]
        }
        H(a, zi, 33, d);
        (b.sendIsolatedPayload ? Oo : Io)({
            endpoint: "log_event",
            payload: a,
            cttAuthInfo: b.cttAuthInfo,
            dangerousLogToVisitorSession: b.dangerousLogToVisitorSession
        }, c)
    };
    var hp = new Set,
        ip = 0,
        jp = 0,
        kp = 0,
        lp = [],
        mp = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

    function np(a) {
        try {
            hp.add(a.message)
        } catch (b) {}
        ip++
    }

    function op() {
        for (var a = u(mp), b = a.next(); !b.done; b = a.next()) {
            var c = Nb();
            if (c && 0 <= c.toLowerCase().indexOf(b.value.toLowerCase())) return !0
        }
        return !1
    }

    function pp(a, b) {
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
                url: S("PAGE_NAME", window.location.href),
                file: b.fileName
            },
            method: "POST"
        };
        c.version && (a["client.version"] = c.version);
        if (a.postParams) {
            b.stack && (a.postParams.stack = b.stack);
            b = u(Object.keys(c));
            for (var d = b.next(); !d.done; d = b.next()) d = d.value, a.postParams["client." + d] = c[d];
            if (c = Ki())
                for (b = u(Object.keys(c)), d = b.next(); !d.done; d = b.next()) d =
                    d.value, a.postParams[d] = c[d];
            c = S("SERVER_NAME");
            b = S("SERVER_VERSION");
            c && b && (a.postParams["server.name"] = c, a.postParams["server.version"] = b)
        }
        wj(S("ECATCHER_REPORT_HOST", "") + "/error_204", a)
    };

    function qp() {
        var a;
        return x(function(b) {
            return (a = jf()) ? b.return(a.then(function(c) {
                c = vd(c);
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var g = c.charCodeAt(f);
                    255 < g && (d[e++] = g & 255, g >>= 8);
                    d[e++] = g
                }
                return Dc(d, 3)
            })) : b.return(Promise.resolve(null))
        })
    };
    var rp = {};

    function sp(a) {
        return rp[a] || (rp[a] = String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        }))
    };
    var tp = {},
        up = [],
        gg = new K,
        vp = {};

    function wp() {
        for (var a = u(up), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    }

    function xp(a, b) {
        var c;
        "yt:" === a.tagName.toLowerCase().substr(0, 3) ? c = a.getAttribute(b) : c = a ? a.dataset ? a.dataset[sp(b)] : a.getAttribute("data-" + b) : null;
        return c
    }

    function yp(a) {
        gg.Xa.apply(gg, arguments)
    };
    var zp = window;

    function Ap(a) {
        this.g = a || {};
        a = [this.g, window.YTConfig || {}];
        for (var b = 0; b < a.length; b++) a[b].host && (a[b].host = a[b].host.toString().replace("http://", "https://"))
    }

    function Z(a, b) {
        a = [a.g, window.YTConfig || {}];
        for (var c = 0; c < a.length; c++) {
            var d = a[c][b];
            if (void 0 !== d) return d
        }
        return null
    }

    function Bp(a, b, c) {
        if (zp.yt_embedsEnableHouseBrandAndYtCoexistence) {
            Cp || (Cp = {}, Dp = new Set, bj(window, "message", function(e) {
                Ep(a, e)
            }));
            var d = String(Z(a, "host"));
            Cp[c] = {
                pd: b,
                Fc: d
            };
            Dp.add(d)
        } else Fp || (Fp = {}, bj(window, "message", function(e) {
            return Ep(a, e)
        })), Fp[c] = b
    }

    function Ep(a, b) {
        if (zp.yt_embedsEnableHouseBrandAndYtCoexistence) {
            if (Dp.has(b.origin)) {
                try {
                    var c = JSON.parse(b.data)
                } catch (e) {
                    return
                }
                var d = Cp[c.id];
                d && b.origin === d.Fc && (b = d.pd, Gp(b), b.Fb(c))
            }
        } else if (b.origin === Z(a, "host")) {
            try {
                d = JSON.parse(b.data)
            } catch (e) {
                return
            }
            if (c = Fp[d.id]) Gp(c), c.Fb(d)
        }
    }
    var Fp = null,
        Cp = null,
        Dp = null;
    var Hp = window;

    function Ip(a, b, c) {
        this.u = this.g = this.h = null;
        this.i = 0;
        this.G = !1;
        this.o = [];
        this.l = null;
        this.W = {};
        if (!a) throw Error("YouTube player element ID required.");
        this.id = Qa(this);
        this.M = c;
        c = document;
        if (a = "string" === typeof a ? c.getElementById(a) : a)
            if (c = "iframe" === a.tagName.toLowerCase(), b.host || (b.host = c ? Zb(a.src) : "https://www.youtube.com"), this.h = new Ap(b), c || (b = Jp(this, a), this.u = a, (c = a.parentNode) && c.replaceChild(b, a), a = b), this.g = a, this.g.id || (this.g.id = "widget" + Qa(this.g)), tp[this.g.id] = this, window.postMessage) {
                this.l =
                    new K;
                Kp(this);
                b = Z(this.h, "events");
                for (var d in b) b.hasOwnProperty(d) && this.addEventListener(d, b[d]);
                for (var e in vp) vp.hasOwnProperty(e) && Lp(this, e)
            }
    }

    function Gp(a) {
        a.G = !0;
        a.G && (db(a.o, a.sendMessage, a), a.o.length = 0)
    }
    q = Ip.prototype;
    q.setSize = function(a, b) {
        this.g.width = a.toString();
        this.g.height = b.toString();
        return this
    };
    q.getIframe = function() {
        return this.g
    };
    q.Fb = function(a) {
        Mp(this, a.event, a)
    };
    q.addEventListener = function(a, b) {
        var c = b;
        "string" === typeof b && (c = function() {
            window[b].apply(window, arguments)
        });
        if (!c) return this;
        this.l.subscribe(a, c);
        Np(this, a);
        return this
    };

    function Lp(a, b) {
        b = b.split(".");
        if (2 === b.length) {
            var c = b[1];
            a.M === b[0] && Np(a, c)
        }
    }
    q.destroy = function() {
        this.g && this.g.id && (tp[this.g.id] = null);
        var a = this.l;
        a && "function" == typeof a.dispose && a.dispose();
        if (this.u) {
            a = this.g;
            var b = a.parentNode;
            b && b.replaceChild(this.u, a)
        } else(a = this.g) && a.parentNode && a.parentNode.removeChild(a);
        a = this.id;
        zp.yt_embedsEnableHouseBrandAndYtCoexistence ? Cp && (Cp[a] = null) : Fp && (Fp[a] = null);
        this.h = null;
        a = this.g;
        for (var c in lb) lb[c][0] == a && $i(c);
        this.u = this.g = null
    };
    q.Xb = function() {
        return {}
    };

    function Op(a, b, c) {
        c = c || [];
        c = Array.prototype.slice.call(c);
        b = {
            event: "command",
            func: b,
            args: c
        };
        a.G ? a.sendMessage(b) : a.o.push(b)
    }

    function Mp(a, b, c) {
        a.l.i || (c = {
            target: a,
            data: c
        }, a.l.Xa(b, c), yp(a.M + "." + b, c))
    }

    function Jp(a, b) {
        var c = document.createElement("iframe");
        b = b.attributes;
        for (var d = 0, e = b.length; d < e; d++) {
            var f = b[d].value;
            null != f && "" !== f && "null" !== f && c.setAttribute(b[d].name, f)
        }
        c.setAttribute("frameBorder", "0");
        c.setAttribute("allowfullscreen", "1");
        c.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
        c.setAttribute("title", "YouTube " + Z(a.h, "title"));
        (b = Z(a.h, "width")) && c.setAttribute("width", b.toString());
        (b = Z(a.h, "height")) &&
        c.setAttribute("height", b.toString());
        var g = a.Xb();
        g.enablejsapi = window.postMessage ? 1 : 0;
        window.location.host && (g.origin = window.location.protocol + "//" + window.location.host);
        g.widgetid = a.id;
        window.location.href && db(["debugjs", "debugcss"], function(k) {
            var l = cc(window.location.href, k);
            null !== l && (g[k] = l)
        });
        var h = "" + Z(a.h, "host") + ("/embed/" + Z(a.h, "videoId")) + "?" + ac(g);
        Hp.yt_embedsEnableUaChProbe ? qp().then(function(k) {
            var l = new URL(h),
                m = Number(l.searchParams.get("reloads"));
            isNaN(m) && (m = 0);
            l.searchParams.set("reloads", (m + 1).toString());
            k && l.searchParams.set("uach", k);
            l.searchParams.set("uats", Math.floor(window.performance.timeOrigin).toString());
            k = Ld(l.href).toString();
            Hd(c, Md(k));
            c.sandbox.add("allow-presentation", "allow-top-navigation");
            return k
        }) : Hp.yt_embedsEnableIframeSrcWithIntent ? (Hd(c, Md(h)),
            c.sandbox.add("allow-presentation", "allow-top-navigation")) : c.src = h;
        return c
    }
    q.pc = function() {
        this.g && this.g.contentWindow ? this.sendMessage({
            event: "listening"
        }) : window.clearInterval(this.i)
    };

    function Kp(a) {
        Bp(a.h, a, a.id);
        a.i = dj(a.pc.bind(a), 250);
        bj(a.g, "load", function() {
            window.clearInterval(a.i);
            a.i = dj(a.pc.bind(a), 250)
        })
    }

    function Np(a, b) {
        a.W[b] || (a.W[b] = !0, Op(a, "addEventListener", [b]))
    }
    q.sendMessage = function(a) {
        a.id = this.id;
        a.channel = "widget";
        var b = JSON.stringify(a),
            c = [Zb(this.g.src || "").replace("http:", "https:")];
        if (this.g.contentWindow)
            for (var d = 0; d < c.length; d++) try {
                this.g.contentWindow.postMessage(b, c[d])
            } catch (jc) {
                if (jc.name && "SyntaxError" === jc.name) {
                    if (!(jc.message && 0 < jc.message.indexOf("target origin ''"))) {
                        var e = void 0,
                            f = jc;
                        e = void 0 === e ? {} : e;
                        e.name = S("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
                        e.version = S("INNERTUBE_CONTEXT_CLIENT_VERSION");
                        var g = "WARNING",
                            h = !1;
                        g = void 0 === g ? "ERROR" :
                            g;
                        h = void 0 === h ? !1 : h;
                        if (f) {
                            f.hasOwnProperty("level") && f.level && (g = f.level);
                            if (U("console_log_js_exceptions")) {
                                var k = f,
                                    l = [];
                                l.push("Name: " + k.name);
                                l.push("Message: " + k.message);
                                k.hasOwnProperty("params") && l.push("Error Params: " + JSON.stringify(k.params));
                                k.hasOwnProperty("args") && l.push("Error args: " + JSON.stringify(k.args));
                                l.push("File name: " + k.fileName);
                                l.push("Stacktrace: " + k.stack);
                                window.console.log(l.join("\n"), k)
                            }
                            if (!(5 <= ip)) {
                                var m = void 0,
                                    n = void 0,
                                    r = f,
                                    p = e,
                                    y = Bd(r),
                                    A = y.message || "Unknown Error",
                                    I = y.name || "UnknownError",
                                    O = y.stack || r.h || "Not available";
                                if (O.startsWith(I + ": " + A)) {
                                    var T = O.split("\n");
                                    T.shift();
                                    O = T.join("\n")
                                }
                                var Q = y.lineNumber || "Not available",
                                    ya = y.fileName || "Not available",
                                    Qc = O,
                                    Ja = 0;
                                if (r.hasOwnProperty("args") && r.args && r.args.length)
                                    for (var za = 0; za < r.args.length && !(Ja = Oj(r.args[za], "params." + za, p, Ja), 500 <= Ja); za++);
                                else if (r.hasOwnProperty("params") && r.params) {
                                    var da = r.params;
                                    if ("object" === typeof r.params)
                                        for (n in da) {
                                            if (da[n]) {
                                                var ja = "params." + n,
                                                    ka = Qj(da[n]);
                                                p[ja] = ka;
                                                Ja +=
                                                    ja.length + ka.length;
                                                if (500 < Ja) break
                                            }
                                        } else p.params = Qj(da)
                                }
                                if (lp.length)
                                    for (var ca = 0; ca < lp.length && !(Ja = Oj(lp[ca], "params.context." + ca, p, Ja), 500 <= Ja); ca++);
                                navigator.vendor && !p.hasOwnProperty("vendor") && (p["device.vendor"] = navigator.vendor);
                                var V = {
                                        message: A,
                                        name: I,
                                        lineNumber: Q,
                                        fileName: ya,
                                        stack: Qc,
                                        params: p,
                                        sampleWeight: 1
                                    },
                                    gl = Number(r.columnNumber);
                                isNaN(gl) || (V.lineNumber = V.lineNumber + ":" + gl);
                                if ("IGNORED" === r.level) m = 0;
                                else a: {
                                    for (var hl = Kj(), il = u(hl.Aa), Lg = il.next(); !Lg.done; Lg = il.next()) {
                                        var jl =
                                            Lg.value;
                                        if (V.message && V.message.match(jl.Nd)) {
                                            m = jl.weight;
                                            break a
                                        }
                                    }
                                    for (var kl = u(hl.wa), Mg = kl.next(); !Mg.done; Mg = kl.next()) {
                                        var ll = Mg.value;
                                        if (ll.Ic(V)) {
                                            m = ll.weight;
                                            break a
                                        }
                                    }
                                    m = 1
                                }
                                V.sampleWeight = m;
                                for (var ml = u(Fj), Ng = ml.next(); !Ng.done; Ng = ml.next()) {
                                    var Og = Ng.value;
                                    if (Og.xb[V.name])
                                        for (var nl = u(Og.xb[V.name]), Pg = nl.next(); !Pg.done; Pg = nl.next()) {
                                            var ol = Pg.value,
                                                se = V.message.match(ol.regexp);
                                            if (se) {
                                                V.params["params.error.original"] = se[0];
                                                for (var Qg = ol.groups, pl = {}, kc = 0; kc < Qg.length; kc++) pl[Qg[kc]] = se[kc +
                                                    1], V.params["params.error." + Qg[kc]] = se[kc + 1];
                                                V.message = Og.Mb(pl);
                                                break
                                            }
                                        }
                                }
                                V.params || (V.params = {});
                                var ql = Kj();
                                V.params["params.errorServiceSignature"] = "msg=" + ql.Aa.length + "&cb=" + ql.wa.length;
                                V.params["params.serviceWorker"] = "false";
                                z.document && z.document.querySelectorAll && (V.params["params.fscripts"] = String(document.querySelectorAll("script:not([nonce])").length));
                                sb("sample").constructor !== rb && (V.params["params.fconst"] = "true");
                                var hd = V;
                                window.yterr && "function" === typeof window.yterr && window.yterr(hd);
                                if (0 !== hd.sampleWeight && !hp.has(hd.message))
                                    if (h && U("web_enable_error_204")) {
                                        var rl = hd;
                                        pp(void 0 === g ? "ERROR" : g, rl);
                                        np(rl)
                                    } else {
                                        var Rg = void 0,
                                            Sg = void 0,
                                            sl = void 0,
                                            tl = void 0,
                                            Tg = void 0,
                                            L = hd,
                                            Eb = g;
                                        Eb = void 0 === Eb ? "ERROR" : Eb;
                                        if ("ERROR" === Eb) {
                                            Lj.Xa("handleError", L);
                                            if (U("record_app_crashed_web") && 0 === kp && 1 === L.sampleWeight)
                                                if (kp++, U("errors_via_jspb")) {
                                                    var Up = new xi;
                                                    Tg = G(Up, 1, 1);
                                                    if (!U("report_client_error_with_app_crash_ks")) {
                                                        var Vp = new wi,
                                                            Wp = new vi,
                                                            Xp = new ui,
                                                            Yp = new ti;
                                                        var Zp = G(Yp, 1, L.message);
                                                        var $p = H(Xp,
                                                            ti, 3, Zp);
                                                        tl = H(Wp, ui, 5, $p);
                                                        sl = H(Vp, vi, 9, tl);
                                                        H(Tg, wi, 4, sl)
                                                    }
                                                    var ul = new Ai;
                                                    ed(ul, xi, 20, Bi, Tg);
                                                    gp(ul)
                                                } else {
                                                    var vl = {
                                                        appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                                                    };
                                                    U("report_client_error_with_app_crash_ks") || (vl.systemHealth = {
                                                        crashData: {
                                                            clientError: {
                                                                logMessage: {
                                                                    message: L.message
                                                                }
                                                            }
                                                        }
                                                    });
                                                    ep("appCrashed", vl)
                                                }
                                            jp++
                                        } else "WARNING" === Eb && Lj.Xa("handleWarning", L);
                                        if (U("kevlar_gel_error_routing")) a: {
                                            var id = Eb;
                                            if (U("errors_via_jspb")) {
                                                if (op()) Sg = void 0;
                                                else {
                                                    var lc = new qi;
                                                    G(lc, 1, L.stack);
                                                    L.fileName && G(lc, 4, L.fileName);
                                                    var Va =
                                                        L.lineNumber && L.lineNumber.split ? L.lineNumber.split(":") : [];
                                                    if (0 !== Va.length)
                                                        if (1 === Va.length && !isNaN(Number(Va[0]))) {
                                                            var aq = lc,
                                                                wl = Number(Va[0]);
                                                            Na(wl);
                                                            G(aq, 2, wl)
                                                        } else if (2 === Va.length && !isNaN(Number(Va[0])) && !isNaN(Number(Va[1]))) {
                                                        var bq = lc,
                                                            xl = Number(Va[0]);
                                                        Na(xl);
                                                        G(bq, 2, xl);
                                                        var cq = lc,
                                                            yl = Number(Va[1]);
                                                        Na(yl);
                                                        G(cq, 3, yl)
                                                    }
                                                    var Fb = new ti;
                                                    G(Fb, 1, L.message);
                                                    G(Fb, 3, L.name);
                                                    var dq = Fb,
                                                        zl = L.sampleWeight;
                                                    Na(zl);
                                                    G(dq, 6, zl);
                                                    "ERROR" === id ? G(Fb, 2, 2) : "WARNING" === id ? G(Fb, 2, 1) : G(Fb, 2, 0);
                                                    var Ug = new ri;
                                                    G(Ug, 1, !0);
                                                    ed(Ug,
                                                        qi, 3, si, lc);
                                                    var Gb = new pi;
                                                    G(Gb, 3, window.location.href);
                                                    for (var Al = S("FEXP_EXPERIMENTS", []), Vg = 0; Vg < Al.length; Vg++) {
                                                        var Bl = Gb,
                                                            eq = Al[Vg];
                                                        Tc(Bl);
                                                        $c(Bl, 5, 2, !1, !1).push(eq)
                                                    }
                                                    var Wg = Ki();
                                                    if (!Li() && Wg)
                                                        for (var Cl = u(Object.keys(Wg)), Hb = Cl.next(); !Hb.done; Hb = Cl.next()) {
                                                            var Dl = Hb.value,
                                                                Xg = new oi;
                                                            G(Xg, 1, Dl);
                                                            G(Xg, 2, String(Wg[Dl]));
                                                            fd(Gb, 4, oi, Xg)
                                                        }
                                                    var Yg = L.params;
                                                    if (Yg) {
                                                        var El = u(Object.keys(Yg));
                                                        for (Hb = El.next(); !Hb.done; Hb = El.next()) {
                                                            var Fl = Hb.value,
                                                                Zg = new oi;
                                                            G(Zg, 1, "client." + Fl);
                                                            G(Zg, 2, String(Yg[Fl]));
                                                            fd(Gb, 4,
                                                                oi, Zg)
                                                        }
                                                    }
                                                    var Gl = S("SERVER_NAME"),
                                                        Hl = S("SERVER_VERSION");
                                                    if (Gl && Hl) {
                                                        var $g = new oi;
                                                        G($g, 1, "server.name");
                                                        G($g, 2, Gl);
                                                        fd(Gb, 4, oi, $g);
                                                        var ah = new oi;
                                                        G(ah, 1, "server.version");
                                                        G(ah, 2, Hl);
                                                        fd(Gb, 4, oi, ah)
                                                    }
                                                    var te = new ui;
                                                    H(te, pi, 1, Gb);
                                                    H(te, ri, 2, Ug);
                                                    H(te, ti, 3, Fb);
                                                    Sg = te
                                                }
                                                var Il = Sg;
                                                if (!Il) break a;
                                                var Jl = new Ai;
                                                ed(Jl, ui, 163, Bi, Il);
                                                gp(Jl)
                                            } else {
                                                if (op()) Rg = void 0;
                                                else {
                                                    var jd = {
                                                        stackTrace: L.stack
                                                    };
                                                    L.fileName && (jd.filename = L.fileName);
                                                    var Wa = L.lineNumber && L.lineNumber.split ? L.lineNumber.split(":") : [];
                                                    0 !== Wa.length && (1 !==
                                                        Wa.length || isNaN(Number(Wa[0])) ? 2 !== Wa.length || isNaN(Number(Wa[0])) || isNaN(Number(Wa[1])) || (jd.lineNumber = Number(Wa[0]), jd.columnNumber = Number(Wa[1])) : jd.lineNumber = Number(Wa[0]));
                                                    var bh = {
                                                        level: "ERROR_LEVEL_UNKNOWN",
                                                        message: L.message,
                                                        errorClassName: L.name,
                                                        sampleWeight: L.sampleWeight
                                                    };
                                                    "ERROR" === id ? bh.level = "ERROR_LEVEL_ERROR" : "WARNING" === id && (bh.level = "ERROR_LEVEL_WARNNING");
                                                    var fq = {
                                                            isObfuscated: !0,
                                                            browserStackInfo: jd
                                                        },
                                                        mc = {
                                                            pageUrl: window.location.href,
                                                            kvPairs: []
                                                        };
                                                    S("FEXP_EXPERIMENTS") && (mc.experimentIds =
                                                        S("FEXP_EXPERIMENTS"));
                                                    var ch = Ki();
                                                    if (!Li() && ch)
                                                        for (var Kl = u(Object.keys(ch)), Ib = Kl.next(); !Ib.done; Ib = Kl.next()) {
                                                            var Ll = Ib.value;
                                                            mc.kvPairs.push({
                                                                key: Ll,
                                                                value: String(ch[Ll])
                                                            })
                                                        }
                                                    var dh = L.params;
                                                    if (dh) {
                                                        var Ml = u(Object.keys(dh));
                                                        for (Ib = Ml.next(); !Ib.done; Ib = Ml.next()) {
                                                            var Nl = Ib.value;
                                                            mc.kvPairs.push({
                                                                key: "client." + Nl,
                                                                value: String(dh[Nl])
                                                            })
                                                        }
                                                    }
                                                    var Ol = S("SERVER_NAME"),
                                                        Pl = S("SERVER_VERSION");
                                                    Ol && Pl && (mc.kvPairs.push({
                                                        key: "server.name",
                                                        value: Ol
                                                    }), mc.kvPairs.push({
                                                        key: "server.version",
                                                        value: Pl
                                                    }));
                                                    Rg = {
                                                        errorMetadata: mc,
                                                        stackTrace: fq,
                                                        logMessage: bh
                                                    }
                                                }
                                                var Ql = Rg;
                                                if (!Ql) break a;
                                                ep("clientError", Ql)
                                            }
                                            if ("ERROR" === id || U("errors_flush_gel_always_killswitch")) b: {
                                                if (U("web_fp_via_jspb") && (bp(!0), !U("web_fp_via_jspb_and_json"))) break b;bp()
                                            }
                                        }
                                        U("suppress_error_204_logging") || pp(Eb, L);
                                        np(L)
                                    }
                            }
                        }
                    }
                } else throw jc;
            } else console && console.warn && console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")
    };

    function Pp(a) {
        return (0 === a.search("cue") || 0 === a.search("load")) && "loadModule" !== a
    }

    function Qp(a) {
        return 0 === a.search("get") || 0 === a.search("is")
    };

    function Rp(a, b) {
        Ip.call(this, a, Object.assign({
            title: "video player",
            videoId: "",
            width: 640,
            height: 360
        }, b || {}), "player");
        this.ka = {};
        this.playerInfo = {};
        this.videoTitle = ""
    }
    v(Rp, Ip);
    q = Rp.prototype;
    q.Xb = function() {
        var a = Z(this.h, "playerVars");
        if (a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            a = b
        } else a = {};
        window !== window.top && document.referrer && (a.widget_referrer = document.referrer.substring(0, 256));
        if (c = Z(this.h, "embedConfig")) {
            if (Pa(c)) try {
                c = JSON.stringify(c)
            } catch (d) {
                console.error("Invalid embed config JSON", d)
            }
            a.embed_config = c
        }
        return a
    };
    q.Fb = function(a) {
        var b = a.event;
        a = a.info;
        switch (b) {
            case "apiInfoDelivery":
                if (Pa(a))
                    for (var c in a) a.hasOwnProperty(c) && (this.ka[c] = a[c]);
                break;
            case "infoDelivery":
                Sp(this, a);
                break;
            case "initialDelivery":
                Pa(a) && (window.clearInterval(this.i), this.playerInfo = {}, this.ka = {}, Tp(this, a.apiInterface), Sp(this, a));
                break;
            default:
                Mp(this, b, a)
        }
    };

    function Sp(a, b) {
        if (Pa(b)) {
            for (var c in b) b.hasOwnProperty(c) && (a.playerInfo[c] = b[c]);
            a.playerInfo.hasOwnProperty("videoData") && (b = a.playerInfo.videoData, b.hasOwnProperty("title") && b.title ? (b = b.title, b !== a.videoTitle && (a.videoTitle = b, a.g.setAttribute("title", b))) : (a.videoTitle = "", a.g.setAttribute("title", "YouTube " + Z(a.h, "title"))))
        }
    }

    function Tp(a, b) {
        db(b, function(c) {
            this[c] || ("getCurrentTime" === c ? this[c] = function() {
                var d = this.playerInfo.currentTime;
                if (1 === this.playerInfo.playerState) {
                    var e = (Date.now() / 1E3 - this.playerInfo.currentTimeLastUpdated_) * this.playerInfo.playbackRate;
                    0 < e && (d += Math.min(e, 1))
                }
                return d
            } : Pp(c) ? this[c] = function() {
                this.playerInfo = {};
                this.ka = {};
                Op(this, c, arguments);
                return this
            } : Qp(c) ? this[c] = function() {
                var d = 0;
                0 === c.search("get") ? d = 3 : 0 === c.search("is") && (d = 2);
                return this.playerInfo[c.charAt(d).toLowerCase() + c.substr(d + 1)]
            } : this[c] = function() {
                Op(this, c, arguments);
                return this
            })
        }, a)
    }
    q.getVideoEmbedCode = function() {
        var a = Z(this.h, "host") + ("/embed/" + Z(this.h, "videoId")),
            b = Number(Z(this.h, "width")),
            c = Number(Z(this.h, "height"));
        if (isNaN(b) || isNaN(c)) throw Error("Invalid width or height property");
        b = Math.floor(b);
        c = Math.floor(c);
        var d = this.videoTitle;
        a = Vb(a);
        d = Vb(null != d ? d : "YouTube video player");
        return '<iframe width="' + b + '" height="' + c + '" src="' + a + '" title="' + (d + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    };
    q.getOptions = function(a) {
        return this.ka.namespaces ? a ? this.ka[a] ? this.ka[a].options || [] : [] : this.ka.namespaces || [] : []
    };
    q.getOption = function(a, b) {
        if (this.ka.namespaces && a && b && this.ka[a]) return this.ka[a][b]
    };

    function gq(a) {
        if ("iframe" !== a.tagName.toLowerCase()) {
            var b = xp(a, "videoid");
            b && (b = {
                videoId: b,
                width: xp(a, "width"),
                height: xp(a, "height")
            }, new Rp(a, b))
        }
    };
    B("YT.PlayerState.UNSTARTED", -1);
    B("YT.PlayerState.ENDED", 0);
    B("YT.PlayerState.PLAYING", 1);
    B("YT.PlayerState.PAUSED", 2);
    B("YT.PlayerState.BUFFERING", 3);
    B("YT.PlayerState.CUED", 5);
    B("YT.get", function(a) {
        return tp[a]
    });
    B("YT.scan", wp);
    B("YT.subscribe", function(a, b, c) {
        gg.subscribe(a, b, c);
        vp[a] = !0;
        for (var d in tp) tp.hasOwnProperty(d) && Lp(tp[d], a)
    });
    B("YT.unsubscribe", function(a, b, c) {
        fg(a, b, c)
    });
    B("YT.Player", Rp);
    Ip.prototype.destroy = Ip.prototype.destroy;
    Ip.prototype.setSize = Ip.prototype.setSize;
    Ip.prototype.getIframe = Ip.prototype.getIframe;
    Ip.prototype.addEventListener = Ip.prototype.addEventListener;
    Rp.prototype.getVideoEmbedCode = Rp.prototype.getVideoEmbedCode;
    Rp.prototype.getOptions = Rp.prototype.getOptions;
    Rp.prototype.getOption = Rp.prototype.getOption;
    up.push(function(a) {
        var b = a;
        b || (b = document);
        a = hb(b.getElementsByTagName("yt:player"));
        var c = b || document;
        if (c.querySelectorAll && c.querySelector) b = c.querySelectorAll(".yt-player");
        else {
            var d;
            c = document;
            b = b || c;
            if (b.querySelectorAll && b.querySelector) b = b.querySelectorAll(".yt-player");
            else if (b.getElementsByClassName) {
                var e = b.getElementsByClassName("yt-player");
                b = e
            } else {
                e = b.getElementsByTagName("*");
                var f = {};
                for (c = d = 0; b = e[c]; c++) {
                    var g = b.className,
                        h;
                    if (h = "function" == typeof g.split) h = 0 <= cb(g.split(/\s+/),
                        "yt-player");
                    h && (f[d++] = b)
                }
                f.length = d;
                b = f
            }
        }
        b = hb(b);
        db(gb(a, b), gq)
    });
    "undefined" != typeof YTConfig && YTConfig.parsetags && "onload" != YTConfig.parsetags || wp();
    var hq = z.onYTReady;
    hq && hq();
    var iq = z.onYouTubeIframeAPIReady;
    iq && iq();
    var jq = z.onYouTubePlayerAPIReady;
    jq && jq();
}).call(this);