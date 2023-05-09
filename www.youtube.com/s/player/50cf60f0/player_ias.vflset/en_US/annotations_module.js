(function(g) {
    var window = this;
    'use strict';
    var x4 = function(a) {
            a.ma("cardstatechange", a.rk() && a.xo() ? 1 : 0)
        },
        y4 = function(a, b) {
            var c = g.Oa(b),
                d = c ? b : arguments;
            for (c = c ? 0 : 1; c < d.length; c++) {
                if (null == a) return;
                a = a[d[c]]
            }
            return a
        },
        tcb = function(a) {
            var b = g.Xm(a);
            a = g.$m(a);
            return new g.Mm(b.x, b.y, a.width, a.height)
        },
        B4 = function(a) {
            a = g.Sa(a);
            delete z4[a];
            g.fd(z4) && A4 && A4.stop()
        },
        vcb = function() {
            A4 || (A4 = new g.Gp(function() {
                ucb()
            }, 20));
            var a = A4;
            a.isActive() || a.start()
        },
        ucb = function() {
            var a = g.Va();
            g.Vc(z4, function(b) {
                wcb(b, a)
            });
            g.fd(z4) || vcb()
        },
        C4 = function(a, b, c, d) {
            g.$p.call(this);
            if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Start and end parameters must be arrays");
            if (a.length != b.length) throw Error("Start and end points must be the same length");
            this.u = a;
            this.J = b;
            this.duration = c;
            this.D = d;
            this.coords = [];
            this.progress = this.I = 0;
            this.C = null
        },
        wcb = function(a, b) {
            b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
            a.progress = (b - a.startTime) / (a.endTime - a.startTime);
            1 < a.progress && (a.progress = 1);
            a.I = 1E3 / (b - a.C);
            a.C = b;
            xcb(a, a.progress);
            1 == a.progress ? (a.j = 0, B4(a), a.onFinish(), a.Jq()) : a.bd() && a.gJ()
        },
        xcb = function(a, b) {
            "function" === typeof a.D && (b = a.D(b));
            a.coords = Array(a.u.length);
            for (var c = 0; c < a.u.length; c++) a.coords[c] = (a.J[c] - a.u[c]) * b + a.u[c]
        },
        ycb = function(a, b) {
            g.pb.call(this, a);
            this.coords = b.coords;
            this.x = b.coords[0];
            this.y = b.coords[1];
            this.z = b.coords[2];
            this.duration = b.duration;
            this.progress = b.progress;
            this.fps = b.I;
            this.state = b.j
        },
        D4 = function(a, b, c, d, e) {
            C4.call(this, b, c, d, e);
            this.element = a
        },
        zcb = function(a, b, c, d, e) {
            if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
            D4.call(this, a, b, c, d, e)
        },
        Acb = function(a) {
            return Math.pow(a, 3)
        },
        Bcb = function(a) {
            return 3 * a * a - 2 * a * a * a
        },
        Ccb = function(a) {
            g.E.call(this);
            this.u = a || window;
            this.j = []
        },
        E4 = function(a) {
            return a.baseUrl || null
        },
        F4 = function(a, b) {
            return g.Un(g.fm(a, b), function(c) {
                return !!c
            })
        },
        Dcb = function(a, b, c) {
            function d(J) {
                var ha = J.hovercardButton;
                if (!ha) return null;
                ha = ha.subscribeButtonRenderer;
                if (!ha) return null;
                var X = f(ha.unsubscribedButtonText),
                    Da = f(ha.subscribedButtonText);
                if (ha.subscribed) {
                    var za = f(ha.subscriberCountWithUnsubscribeText);
                    var Za = f(ha.subscriberCountText)
                } else za = f(ha.subscriberCountText), Za = f(ha.subscriberCountWithSubscribeText);
                var cb = null;
                if (J.signinEndpoint) {
                    cb = y4(J, "signinEndpoint", "webNavigationEndpointData", "url");
                    if (!cb) {
                        var wa, $a;
                        cb = null == ($a = g.S(null == (wa = ha.signInEndpoint) ? void 0 : wa.commandMetadata, g.q3)) ? void 0 :
                            $a.url
                    }
                    if (!cb) return null
                }
                return X && (Da || cb) ? {
                    subscribed: ha.subscribed,
                    subscribeText: X,
                    subscribeCount: za,
                    unsubscribeText: Da,
                    unsubscribeCount: Za,
                    enabled: ha.enabled,
                    signinUrl: cb,
                    classic: J.useClassicSubscribeButton
                } : null
            }

            function e(J) {
                if (J) {
                    var ha = [],
                        X = J.videoId;
                    X && ha.push("v=" + X);
                    (X = J.playlistId) && ha.push("list=" + X);
                    (J = J.startTimeSeconds) && ha.push("t=" + J);
                    return "/watch?" + ha.join("&")
                }
            }

            function f(J) {
                if (!J) return null;
                var ha = J.simpleText;
                return ha ? ha : J.runs ? g.fm(J.runs, function(X) {
                    return X.text
                }).join("") : null
            }
            b = b.endscreenElementRenderer;
            if (!b) return null;
            var h = b.style,
                l = b.endpoint || {},
                m = null,
                n = null,
                p = !1,
                q = null,
                t = null,
                w = null,
                z = null,
                C = !1,
                G = null,
                O = null,
                N = null,
                K = null,
                W = null,
                Z = null;
            if ("VIDEO" === h) g.S(l, g.BM) ? m = g.S(l, g.BM).url : (Z = g.S(l, g.AM), m = e(Z)), n = !1, q = a, b.thumbnailOverlays ? (p = b.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer, t = f(p.text), p = "LIVE" === p.style) : t = f(b.videoDuration);
            else if ("PLAYLIST" === h) g.S(l, g.BM) ? m = g.S(l, g.BM).url : (Z = g.S(l, g.AM), m = e(Z)), n = !1, q = a, w = f(b.playlistLength);
            else if ("CHANNEL" ===
                h) {
                if (C = y4(l, "browseEndpoint", "browseId")) z = C, m = "/channel/" + z;
                n = !1;
                q = "new";
                (C = !!b.isSubscribe) ? G = d(b): O = f(b.subscribersText)
            } else "WEBSITE" === h ? ((N = y4(l, "urlEndpoint", "url")) && (m = N), n = !0, q = "new", N = b.icon.thumbnails[0].url) : "CREATOR_MERCHANDISE" === h && (b.productPrice && (K = f(b.productPrice)), b.additionalFeesText && (W = f(b.additionalFeesText)), (n = y4(l, "urlEndpoint", "url")) && (m = n), n = !0, q = "new");
            a = y4(b, "title", "accessibility", "accessibilityData", "label");
            var Q = b.endpoint ? b.endpoint.clickTrackingParams : null,
                na = "";
            if (b.metadata) {
                var r = f(b.metadata);
                r && (na = r)
            }
            return {
                id: "element-" + c,
                type: h,
                title: f(b.title),
                metadata: na,
                callToAction: f(b.callToAction),
                mT: b.image,
                iconUrl: N,
                left: Number(b.left),
                width: Number(b.width),
                top: Number(b.top),
                aspectRatio: Number(b.aspectRatio),
                startMs: Math.floor(Number(b.startMs)),
                endMs: Math.floor(Number(b.endMs)),
                videoDuration: t,
                tC: p,
                playlistLength: w,
                channelId: z,
                subscribeButton: G,
                subscribersText: O,
                isSubscribe: C,
                Nt: m || null,
                v4: n,
                sessionData: Q ? {
                    itct: Q
                } : null,
                w9: q,
                SA: a ? a : null,
                isPlaceholder: b.isPlaceholder,
                impressionUrls: F4(b.impressionUrls || [], E4),
                j4: F4(b.hovercardShowUrls || [], E4),
                clickUrls: F4(l.loggingUrls || [], E4),
                visualElement: g.GE(b.trackingParams),
                productPrice: K,
                additionalFeesText: W,
                watchEndpoint: Z || null
            }
        },
        Ecb = function(a, b) {
            var c = {
                startMs: Math.floor(Number(a.startMs)),
                impressionUrls: F4(a.impressionUrls || [], E4),
                elements: F4(a.elements || [], function(d, e) {
                    return Dcb(b, d, e)
                })
            };
            a.trackingParams && (c.visualElement = g.GE(a.trackingParams));
            return c
        },
        Fcb = function(a) {
            g.tT.call(this, a);
            this.B = this.endscreen = null;
            this.j = {};
            this.D = {};
            this.C = this.u = null;
            this.J = [];
            this.ea = !0;
            this.I = 0;
            a = a.V();
            this.T = g.wK(a) || "profilepage" === a.Ka;
            this.events = new g.XH(this);
            g.I(this, this.events);
            this.events.S(this.player, g.dE("creatorendscreen"), this.onCueRangeEnter);
            this.events.S(this.player, g.eE("creatorendscreen"), this.onCueRangeExit);
            this.events.S(this.player, "resize", this.Eb);
            this.events.S(window, "focus", this.c8);
            this.load();
            var b = g.df("STYLE");
            (g.Qe("HEAD")[0] || document.body).appendChild(b);
            g.lb(this,
                function() {
                    g.jf(b)
                });
            b.sheet && (b.sheet.insertRule(".ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}", 0), b.sheet.insertRule(".ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                0))
        },
        Gcb = function(a) {
            return a.player.getVideoData().rd ? "current" : a.T ? "new" : "current"
        },
        G4 = function(a) {
            return "creator-endscreen-editor" === a.player.V().playerStyle
        },
        Hcb = function(a) {
            var b = a.player.getVideoData(),
                c = b.videoId;
            a.B && a.B.abort();
            c = {
                method: "POST",
                onFinish: function(e) {
                    var f = a.B = null;
                    200 === e.status && (e = e.responseText, ")]}" === e.substring(0, 3) && (e = e.substring(3), f = JSON.parse(e), f = Ecb(f, Gcb(a))));
                    H4(a, f)
                },
                urlParams: {
                    v: c
                },
                withCredentials: !0
            };
            a.T && (c.urlParams.ptype = "embedded");
            var d = b.Tw;
            d && (c.postParams = {
                ad_tracking: d
            });
            if (b = g.xya(b))
                if (b = g.$d(b), b = g.Yd(b)) a.B = g.Ky(b, c)
        },
        H4 = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            a.player.jf("creatorendscreen");
            a.u && (a.u.dispose(), a.u = null, a.C.dispose(), a.C = null);
            for (var d = g.v(Object.values(a.j)), e = d.next(); !e.done; e = d.next()) e.value.dispose();
            a.j = {};
            a.D = {};
            0 < a.J.length && (a.J.forEach(function(l) {
                l.dispose()
            }), a.J.length = 0);
            a.I = 0;
            if ((a.endscreen = b) && b.elements) {
                c && Icb(a);
                c = [];
                d = new g.bE(b.startMs, 0x7ffffffffffff, {
                    id: "ytp-ce-in-endscreen",
                    namespace: "creatorendscreen"
                });
                c.push(d);
                a.player.V().u || (a.u = new g.V({
                    G: "div",
                    N: "ytp-ce-shadow"
                }), g.yS(a.player, a.u.element, 4), a.C = new g.aR(a.u, 200));
                for (d = 0; d < b.elements.length; ++d) {
                    e = b.elements[d];
                    var f = Jcb(a, e);
                    if (f) {
                        a.j[e.id] = f;
                        a.D[e.id] = e;
                        g.yS(a.player, f.element, 4);
                        var h = new g.bE(e.startMs, e.endMs, {
                            id: "ytp-ce-element-" + e.id,
                            namespace: "creatorendscreen"
                        });
                        c.push(h);
                        Kcb(a, f, e)
                    } else g.ID(new g.eA("buildEndscreenElement null",
                        e))
                }
                a.player.De(c);
                a.Eb()
            }
        },
        Icb = function(a) {
            var b = g.JE(),
                c = g.KE();
            c && b && a.endscreen.visualElement && g.py(g.oP)(void 0, c, b, a.endscreen.visualElement)
        },
        Jcb = function(a, b) {
            var c = null;
            switch (b.type) {
                case "VIDEO":
                    a = {
                        G: "div",
                        Ja: ["ytp-ce-element", "ytp-ce-video"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.SA || "",
                            "aria-hidden": "true"
                        },
                        W: [{
                            G: "div",
                            N: "ytp-ce-element-shadow"
                        }, {
                            G: "div",
                            N: "ytp-ce-covering-image",
                            X: I4(b)
                        }, {
                            G: "div",
                            N: "ytp-ce-covering-shadow-top"
                        }, {
                            G: "a",
                            N: "ytp-ce-covering-overlay",
                            X: {
                                href: J4(a, b.Nt),
                                tabindex: "-1"
                            },
                            W: [{
                                G: "div",
                                Ja: ["ytp-ce-video-title", "ytp-webkit-ellipsis"],
                                X: {
                                    dir: g.dq(b.title || "")
                                },
                                ra: b.title
                            }, {
                                G: "div",
                                N: b.tC ? "ytp-ce-live-video-duration" : "ytp-ce-video-duration",
                                ra: b.videoDuration ||
                                    void 0
                            }]
                        }]
                    };
                    c = new g.V(a);
                    break;
                case "PLAYLIST":
                    a = {
                        G: "div",
                        Ja: ["ytp-ce-element", "ytp-ce-playlist"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.SA || "",
                            "aria-hidden": "true"
                        },
                        W: [{
                            G: "div",
                            N: "ytp-ce-element-shadow"
                        }, {
                            G: "div",
                            N: "ytp-ce-covering-image",
                            X: I4(b)
                        }, {
                            G: "div",
                            N: "ytp-ce-covering-shadow-top"
                        }, {
                            G: "a",
                            N: "ytp-ce-covering-overlay",
                            X: {
                                href: J4(a, b.Nt),
                                tabindex: "-1"
                            },
                            W: [{
                                G: "div",
                                Ja: ["ytp-ce-playlist-title", "ytp-webkit-ellipsis"],
                                X: {
                                    dir: g.dq(b.title || "")
                                },
                                ra: b.title
                            }, {
                                G: "div",
                                N: "ytp-ce-playlist-count",
                                W: [{
                                        G: "div",
                                        N: "ytp-ce-playlist-icon"
                                    },
                                    {
                                        G: "div",
                                        N: "ytp-ce-playlist-count-text",
                                        ra: b.playlistLength || void 0
                                    }
                                ]
                            }]
                        }]
                    };
                    c = new g.V(a);
                    break;
                case "CHANNEL":
                    c = {
                        G: "div",
                        Ja: ["ytp-ce-element", "ytp-ce-channel", b.isSubscribe ? "ytp-ce-channel-this" : "ytp-ce-channel-that"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.SA || "",
                            "aria-hidden": "true"
                        },
                        W: [{
                            G: "div",
                            N: "ytp-ce-element-shadow"
                        }, {
                            G: "div",
                            N: "ytp-ce-expanding-overlay",
                            W: [{
                                G: "div",
                                N: "ytp-ce-expanding-overlay-hider"
                            }, {
                                G: "div",
                                N: "ytp-ce-expanding-overlay-background"
                            }, {
                                G: "div",
                                N: "ytp-ce-expanding-overlay-content",
                                W: [{
                                    G: "div",
                                    N: "ytp-ce-expanding-overlay-body",
                                    W: [{
                                        G: "div",
                                        N: "ytp-ce-expanding-overlay-body-padding",
                                        W: [{
                                            G: "a",
                                            Ja: ["ytp-ce-channel-title", "ytp-ce-link"],
                                            X: {
                                                href: J4(a, b.Nt),
                                                target: "_blank",
                                                tabindex: "-1",
                                                dir: g.dq(b.title || "")
                                            },
                                            ra: b.title
                                        }, b.subscribeButton ? {
                                            G: "div",
                                            N: "ytp-ce-subscribe-container",
                                            W: [{
                                                G: "div",
                                                N: "ytp-ce-channel-subscribe"
                                            }]
                                        } : "", b.subscribersText ? {
                                            G: "div",
                                            N: "ytp-ce-channel-subscribers-text",
                                            ra: b.subscribersText
                                        } : "", b.metadata ? {
                                            G: "div",
                                            Ja: ["ytp-ce-channel-metadata", "yt-ui-ellipsis", "yt-ui-ellipsis-3"],
                                            ra: b.metadata
                                        } : ""]
                                    }]
                                }]
                            }]
                        }, {
                            G: "div",
                            N: "ytp-ce-expanding-image",
                            X: I4(b)
                        }]
                    };
                    c = new g.V(c);
                    var d = g.Re(document, "div", "ytp-ce-channel-subscribe", c.element)[0];
                    if (b.subscribeButton && b.channelId) {
                        g.Op(d, "ytp-ce-subscribe-button");
                        if (a.player.V().u) {
                            var e = null;
                            var f = b.sessionData.itct
                        } else e = "endscreen", f = null;
                        e = new g.hU(b.subscribeButton.subscribeText, b.subscribeButton.subscribeCount, b.subscribeButton.unsubscribeText, b.subscribeButton.unsubscribeCount, !!b.subscribeButton.enabled, !!b.subscribeButton.classic,
                            b.channelId, !!b.subscribeButton.subscribed, e, f, a.player);
                        d.appendChild(e.element);
                        a.J.push(e)
                    }
                    break;
                case "WEBSITE":
                    a = {
                        G: "div",
                        Ja: ["ytp-ce-element", "ytp-ce-website"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.SA || "",
                            "aria-hidden": "true"
                        },
                        W: [{
                            G: "div",
                            N: "ytp-ce-element-shadow"
                        }, {
                            G: "div",
                            N: "ytp-ce-expanding-overlay",
                            W: [{
                                G: "div",
                                N: "ytp-ce-expanding-overlay-hider"
                            }, {
                                G: "div",
                                N: "ytp-ce-expanding-overlay-background"
                            }, {
                                G: "div",
                                N: "ytp-ce-expanding-overlay-content",
                                W: [{
                                    G: "div",
                                    N: "ytp-ce-expanding-overlay-body",
                                    W: [{
                                        G: "div",
                                        N: "ytp-ce-expanding-overlay-body-padding",
                                        W: [{
                                            G: "div",
                                            N: "ytp-ce-website-title",
                                            X: {
                                                dir: g.dq(b.title || "")
                                            },
                                            ra: b.title
                                        }, {
                                            G: "div",
                                            N: "ytp-ce-website-metadata",
                                            ra: b.metadata
                                        }, {
                                            G: "a",
                                            Ja: ["ytp-ce-website-goto", "ytp-ce-link"],
                                            X: {
                                                href: J4(a, b.Nt),
                                                target: "_blank",
                                                tabindex: "-1"
                                            },
                                            ra: b.callToAction
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            G: "div",
                            N: "ytp-ce-expanding-image",
                            X: I4(b)
                        }, {
                            G: "div",
                            N: "ytp-ce-expanding-icon",
                            X: Lcb(b.iconUrl)
                        }]
                    };
                    c = new g.V(a);
                    break;
                case "CREATOR_MERCHANDISE":
                    c = "", b.productPrice && (c = {
                        G: "div",
                        N: "ytp-ce-merchandise-price-container",
                        W: [{
                            G: "div",
                            N: "ytp-ce-merchandise-price",
                            ra: b.productPrice
                        }]
                    }, b.additionalFeesText && c.W.push({
                        G: "div",
                        N: "ytp-ce-merchandise-additional-fees",
                        ra: b.additionalFeesText
                    })), a = {
                        G: "div",
                        Ja: ["ytp-ce-element", "ytp-ce-merchandise"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.SA || "",
                            "aria-hidden": "true"
                        },
                        W: [{
                            G: "div",
                            N: "ytp-ce-element-shadow"
                        }, {
                            G: "div",
                            N: "ytp-ce-expanding-overlay",
                            W: [{
                                G: "div",
                                N: "ytp-ce-expanding-overlay-hider"
                            }, {
                                G: "div",
                                N: "ytp-ce-expanding-overlay-background"
                            }, {
                                G: "div",
                                N: "ytp-ce-expanding-overlay-content",
                                W: [{
                                    G: "div",
                                    N: "ytp-ce-expanding-overlay-body",
                                    W: [{
                                        G: "div",
                                        N: "ytp-ce-expanding-overlay-body-padding",
                                        W: [{
                                            G: "div",
                                            N: "ytp-ce-merchandise-title",
                                            X: {
                                                dir: g.dq(b.title || "")
                                            },
                                            ra: b.title
                                        }, c, {
                                            G: "div",
                                            N: "ytp-ce-merchandise-metadata",
                                            ra: b.metadata
                                        }, {
                                            G: "a",
                                            Ja: ["ytp-ce-merchandise-goto", "ytp-ce-link"],
                                            X: {
                                                href: J4(a, b.Nt),
                                                target: "_blank",
                                                tabindex: "-1"
                                            },
                                            ra: b.callToAction
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            G: "div",
                            N: "ytp-ce-expanding-image",
                            X: I4(b)
                        }, {
                            G: "div",
                            N: "ytp-ce-merchandise-invideo-cta-container",
                            W: [{
                                G: "div",
                                N: "ytp-ce-merchandise-invideo-cta",
                                ra: b.callToAction || void 0
                            }]
                        }]
                    }, c = new g.V(a)
            }
            b.isPlaceholder && g.Op(c.element, "ytp-ce-placeholder");
            return c
        },
        I4 = function(a) {
            if (a.mT) var b = a.mT.thumbnails;
            return Lcb(b ? b[b.length - 1].url : null)
        },
        Lcb = function(a) {
            return a ? {
                style: "background-image: url(" + a + ")"
            } : {}
        },
        Kcb = function(a, b, c) {
            function d(m) {
                m && (b.Sa("blur", function() {
                    "none" != m.style.display && a.ea && m.focus()
                }), b.S(m, "focus", f), b.S(m, "blur", h))
            }

            function e(m) {
                a.I += m;
                0 < a.I ? (g.Op(b.element, "ytp-ce-force-expand"), K4(a, c.id, !0)) : (g.Qp(b.element, "ytp-ce-force-expand"), g.Qp(b.element, "ytp-ce-element-hover"), K4(a, c.id, !1))
            }

            function f() {
                e(1)
            }

            function h() {
                e(-1)
            }
            b.Sa("mouseenter", function() {
                Mcb(a, b, c)
            });
            b.Sa("mouseleave", function() {
                Ncb(a, b, c)
            });
            a.player.V().u || b.Sa("click", function() {
                g.Op(b.element, "ytp-ce-element-hover")
            });
            b.Sa("click", function(m) {
                Ocb(a, c, m)
            });
            b.Sa("keypress", function(m) {
                Ocb(a, c, m)
            });
            b.Sa("focus", function() {
                Mcb(a, b, c)
            });
            b.Sa("blur", function() {
                Ncb(a, b, c)
            });
            b.Sa("touchstart", function() {
                Mcb(a, b, c)
            });
            var l = g.Te("ytp-ce-expanding-overlay-hider", b.element);
            l && b.S(l, "touchstart", function(m) {
                g.LO ? m.stopPropagation() : (m = m || window.event, m.cancelBubble = !0, m.stopPropagation && m.stopPropagation());
                g.Qp(b.element, "ytp-ce-element-hover");
                g.Qp(b.element, "ytp-ce-force-expand")
            });
            b.Sa("keydown", function(m) {
                a.ea = 9 === m.keyCode && !m.shiftKey
            });
            d(g.Te("ytp-sb-subscribe", b.element));
            d(g.Te("ytp-sb-unsubscribe", b.element));
            b.Sa("focus", f);
            b.Sa("blur", h)
        },
        Ocb = function(a, b, c) {
            if (b.Nt && (!c || "keypress" !== c.type || 13 === c.keyCode)) {
                for (var d = c.target; d && !g.Np(d, "ytp-ce-element");) {
                    g.Np(d, "subscribe-label") && Pcb(a, b);
                    if (g.Np(d, "ytp-ce-channel-subscribe")) return;
                    d = g.kf(d)
                }
                if (!d || g.Np(d, "ytp-ce-element-hover")) {
                    c.preventDefault();
                    c.stopPropagation();
                    if (d = a.j[b.id]) Ncb(a, d, b), d.element.blur();
                    if (c.ctrlKey || c.metaKey || "new" === b.w9) Pcb(a, b), a.player.sendVideoStatsEngageEvent(17, void 0), a.player.pauseVideo(), c = g.$d(J4(a, b.Nt)), g.UN(g.Yd(c), void 0, b.sessionData);
                    else {
                        var e = g.OK(a.player.V()) || a.player.getVideoData().rd,
                            f = function() {
                                var h = J4(a, b.Nt),
                                    l = b.sessionData,
                                    m = b.watchEndpoint,
                                    n = g.vy(h);
                                e && n && (n.v || n.list) ? a.player.Mn(n.v,
                                    l, n.list, !1, void 0, m || void 0) : g.SN(h, l)
                            };
                        Pcb(a, b, function() {
                            a.player.sendVideoStatsEngageEvent(17, f)
                        })
                    }
                }
            }
        },
        J4 = function(a, b) {
            a = a.player.V();
            if (b) {
                if (b.startsWith("//")) return a.protocol + ":" + b;
                if (b.startsWith("/")) return g.XK(a) + b
            } else return "";
            return b
        },
        Mcb = function(a, b, c) {
            g.Np(b.element, "ytp-ce-element-hover") || ("VIDEO" === c.type || "PLAYLIST" === c.type ? g.Op(b.element, "ytp-ce-element-hover") : a.player.V().u ? (new g.Gp(function() {
                g.Op(b.element, "ytp-ce-element-hover")
            }, 200)).start() : g.Op(b.element, "ytp-ce-element-hover"), L4(a, c.j4), K4(a, c.id, !0))
        },
        Ncb = function(a, b, c) {
            g.Qp(b.element, "ytp-ce-element-hover");
            g.Qp(b.element, "ytp-ce-force-expand");
            K4(a, c.id, !1)
        },
        K4 = function(a, b, c) {
            a.u && (c ? a.C.show() : a.C.hide());
            for (var d = g.v(Object.keys(a.j)), e = d.next(); !e.done; e = d.next()) e = e.value, e !== b && g.Sp(a.j[e].element, "ytp-ce-element-shadow-show", c)
        },
        L4 = function(a, b, c) {
            function d() {
                f || (e++, e === b.length && (h.stop(), c && c()))
            }
            if (!b || 0 === b.length || G4(a)) c && c();
            else {
                b = Qcb(a, b);
                var e = 0,
                    f = !1,
                    h = new g.Gp(function() {
                        f = !0;
                        c && c()
                    }, 1E3, a);
                h.start();
                for (a = 0; a < b.length; a++) g.cC(b[a], d)
            }
        },
        Pcb = function(a, b, c) {
            L4(a, b.clickUrls, c);
            (a = g.KE()) && b.v4 && g.xP(a, b.visualElement)
        },
        Qcb = function(a, b) {
            var c = a.player.getVideoData().clientPlaybackNonce;
            a = a.player.getCurrentTime().toFixed(2);
            c = {
                CPN: c,
                AD_CPN: c,
                MT: a
            };
            a = [];
            for (var d = 0; d < b.length; d++) a.push(Rcb(b[d], c));
            return a
        },
        Rcb = function(a, b) {
            return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, function(c) {
                var d = unescape(c);
                d = d.substring(1, d.length - 1);
                return b[d] ? escape(b[d]) : c
            })
        },
        Scb = function(a) {
            return "string" === typeof a ? a : ""
        },
        M4 = function(a, b, c) {
            for (var d in b)
                if (b[d] === a) return a;
            return c
        },
        Tcb = function(a, b, c, d) {
            this.value = a;
            this.target = b;
            this.showLinkIcon = c;
            this.j = d
        },
        N4 = function(a) {
            return a.value ? a.value : null
        },
        O4 = function(a) {
            if (!a) return null;
            var b = g.$d(Scb(a.value));
            b = g.Yd(b);
            if (!b) return null;
            var c = M4(a.target, Ucb, "current");
            if (null == c) a = null;
            else {
                var d = a.show_link_icon;
                a = new Tcb(b, c, "true" === d || "false" === d ? "true" === d : !0, null != a.pause_on_navigation ? a.pause_on_navigation : !0)
            }
            return a
        },
        Vcb = function(a, b, c) {
            this.type = a;
            this.trigger = b;
            this.url = c
        },
        Ycb = function(a) {
            if (!a) return null;
            var b = M4(a.type, Wcb),
                c = M4(a.trigger, Xcb);
            a = a.url;
            a = Array.isArray(a) && a.length ? a[0] : a;
            a = O4(a ? a : null);
            return b ? new Vcb(b, c, a) : null
        },
        Zcb = function(a, b, c, d, e) {
            this.id = a;
            this.type = b;
            this.style = c;
            this.data = e;
            this.action = d || []
        },
        $cb = function(a, b) {
            return g.sb(a.action, b)
        },
        adb = function(a, b) {
            this.context = a;
            this.j = b
        },
        bdb = function(a) {
            return a.customMessage ? P4("div", "iv-card-message", a.customMessage) : ""
        },
        Q4 = function(a, b) {
            a = "background-image: url(" + a + ");";
            var c = [];
            b && c.push(b);
            return {
                G: "div",
                N: "iv-card-image",
                X: {
                    style: a
                },
                W: c
            }
        },
        cdb = function(a) {
            if (!a.metaInfo || 0 === a.metaInfo.length) return "";
            var b = [];
            a = g.v(a.metaInfo);
            for (var c = a.next(); !c.done; c = a.next()) b.push(P4("li", "", c.value));
            return {
                G: "ul",
                N: "iv-card-meta-info",
                W: b
            }
        },
        P4 = function(a, b, c) {
            b ? "string" === typeof b ? b = {
                "class": b
            } : Array.isArray(b) && (b = {
                "class": b.join(" ")
            }) : b = {};
            b.dir = g.dq(c);
            return {
                G: a,
                X: b,
                ra: c
            }
        },
        ddb = function(a) {
            if (!a.customMessage) return "";
            var b = ["iv-card-action", "iv-card-primary-link"],
                c = {};
            a.cB && (b.push("iv-card-action-icon"), c.style = "background-image: url(" + a.cB + ");");
            c.dir = g.dq(a.customMessage);
            var d = [{
                G: "span",
                ra: a.customMessage
            }];
            a.showLinkIcon && (d.push("\u00a0"), d.push({
                G: "span",
                N: "iv-card-link-icon"
            }));
            return {
                G: "div",
                Ja: b,
                X: c,
                W: d
            }
        },
        R4 = function(a, b, c, d) {
            if (d) {
                b = g.v(b);
                for (var e = b.next(); !e.done; e = b.next()) a.j(e.value, d, c.id, c.sessionData, c.Pi.click, 5)
            }
        },
        edb = function(a, b) {
            this.merchant = a;
            this.price = b
        },
        fdb = function(a) {
            var b;
            (b = a) && !(b = 1 < a.length ? "/" === a.charAt(0) && "/" !== a.charAt(1) : "/" === a) && (b = a.replace(/^(https?:)?\/\//, "").split("/", 1), b = !b || 1 > b.length || !b[0] ? [] : b[0].toLowerCase().split(".").reverse(), b = "com" === b[0] && "youtube" === b[1] || "be" === b[0] && "youtu" === b[1]);
            return b ? -1 === a.indexOf("/redirect?") : !1
        },
        gdb = function(a, b) {
            return b ? b : fdb(a) ? "current" : "new"
        },
        S4 = function(a, b) {
            g.E.call(this);
            var c = this;
            this.element = a;
            this.context = b;
            this.ub = !1;
            this.bb = new Map;
            this.Za = new Map;
            this.context.F.addEventListener(g.dE("annotations_module"), function(d) {
                (d = c.bb.get(d)) && d.apply(c)
            });
            this.context.F.addEventListener(g.eE("annotations_module"), function(d) {
                (d = c.Za.get(d)) && d.apply(c)
            })
        },
        T4 = function(a, b, c, d, e, f, h) {
            a.context.j.Sa(b, "click", function(l) {
                a.hJ(c, d, e, f || [], h || 0, l)
            });
            a.context.j.Sa(b, "touchstart", function() {
                a.ub = !1
            });
            a.context.j.Sa(b, "touchmove", function() {
                a.ub = !0
            })
        },
        hdb = function(a) {
            var b;
            return (null == (b = g.S(a, g.BM)) ? 0 : b.url) ? g.S(a, g.BM).url : (a = g.S(a, g.AM)) && a.videoId ? (b = "/watch?v=" + a.videoId, a.playlistId && (b += "&list=" + a.playlistId), a.index && (b += "&index=" + a.index), a.startTimeSeconds && (b += "&t=" + a.startTimeSeconds), b) : null
        },
        U4 = function(a, b, c) {
            return {
                JU: (a.impressionLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                click: (c.loggingUrls || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                close: (b.dismissLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                hY: (b.impressionLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                qI: (b.clickLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                })
            }
        },
        idb = function(a, b, c) {
            S4.call(this, b, c);
            var d = this;
            this.F = a;
            this.eventId = null;
            this.Ma = this.Vb = this.B = this.isInitialized = !1;
            this.cards = [];
            this.Ob = this.T = this.Ka = this.D = this.Xa = this.j = null;
            this.Z = [];
            this.oa = this.J = this.cg = this.Ga = null;
            this.I = 0;
            this.Aa = new g.Gp(function() {}, c.Y.wi ? 4E3 : 3E3);
            g.I(this, this.Aa);
            this.qb = new g.Gp(function() {});
            g.I(this, this.qb);
            this.ya = new adb(c, function(e, f, h, l, m, n) {
                T4(d, e, f, h, l, m, n)
            });
            this.ea = new g.V({
                G: "div",
                N: "iv-drawer",
                X: {
                    id: "iv-drawer"
                },
                W: [{
                    G: "div",
                    N: "iv-drawer-header",
                    X: {
                        "aria-role": "heading"
                    },
                    W: [{
                        G: "span",
                        N: "iv-drawer-header-text"
                    }, {
                        G: "button",
                        Ja: ["iv-drawer-close-button", "ytp-button"],
                        X: {
                            "aria-label": "Hide cards",
                            tabindex: "0"
                        }
                    }]
                }, {
                    G: "div",
                    N: "iv-drawer-content"
                }]
            });
            g.I(this, this.ea);
            this.C = this.ea.element;
            this.jb = new g.aR(this.ea, 330);
            g.I(this, this.jb);
            this.Gb = g.Te("iv-drawer-header-text", this.C);
            this.u = g.Te("iv-drawer-content", this.C);
            this.addCueRange(0, 1E3 * c.videoData.lengthSeconds,
                "",
                function() {
                    d.Vb && V4(d, "YOUTUBE_DRAWER_AUTO_OPEN")
                },
                function() {
                    (d.Vb = d.B) && W4(d)
                });
            this.Pa = new g.XH(this);
            g.I(this, this.Pa);
            this.F.addEventListener("videodatachange", this.Ks.bind(this))
        },
        jdb = function(a, b) {
            b = b.data;
            b.autoOpenMs && a.addCueRange(b.autoOpenMs, 0x8000000000000, "", function() {
                V4(a, "YOUTUBE_DRAWER_AUTO_OPEN")
            });
            b.autoCloseMs && a.addCueRange(b.autoCloseMs, 0x8000000000000, "", function() {
                W4(a)
            });
            var c = b.headerText;
            g.qf(a.Gb, c);
            a.T && a.T.setAttribute("title", c);
            b.eventId && (a.eventId = b.eventId);
            a.Ga = g.GE(b.trackingParams);
            a.J = g.GE(b.closeTrackingParams);
            a.cg = g.GE(b.iconTrackingParams)
        },
        kdb = function(a, b) {
            var c = b.cardId ? b.cardId : "cr:" + a.I,
                d = a.F.V().experiments.ob("enable_error_corrections_infocard_web_client");
            if (!b.content && b.teaser.simpleCardTeaserRenderer && d) {
                var e = b.teaser.simpleCardTeaserRenderer,
                    f = b.icon ? b.icon.infoCardIconRenderer : null;
                b = {
                    id: c,
                    timestamp: a.I,
                    type: "simple",
                    teaserText: g.lE(e.message),
                    teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                    startMs: Number(b.cueRanges[0].startCardActiveMs),
                    autoOpen: !!b.autoOpen,
                    sessionData: {},
                    sponsored: !1,
                    Pi: {},
                    zo: null,
                    al: e.trackingParams ? g.GE(e.trackingParams) : null,
                    cg: f && f.trackingParams ? g.GE(f.trackingParams) : null,
                    imageUrl: "",
                    displayDomain: null,
                    showLinkIcon: !1,
                    cB: null,
                    title: "",
                    customMessage: "",
                    url: null,
                    onClickCommand: e.onTapCommand || null
                };
                X4(a, b)
            } else {
                var h;
                if (null == (h = b.content) ? 0 : h.simpleCardContentRenderer) {
                    if (!b.cueRanges.length) return;
                    f = null == (e = b.content) ? void 0 : e.simpleCardContentRenderer;
                    e = b.teaser.simpleCardTeaserRenderer;
                    var l = b.icon ? b.icon.infoCardIconRenderer : null;
                    b = {
                        id: c,
                        timestamp: a.I,
                        type: "simple",
                        teaserText: g.lE(e.message),
                        teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                        startMs: Number(b.cueRanges[0].startCardActiveMs),
                        autoOpen: !!b.autoOpen,
                        sessionData: Y4(a, c, b, f),
                        sponsored: !1,
                        Pi: U4(f, e, f.command),
                        zo: f.trackingParams ? g.GE(f.trackingParams) : null,
                        al: e.trackingParams ? g.GE(e.trackingParams) : null,
                        cg: l && l.trackingParams ? g.GE(l.trackingParams) : null,
                        imageUrl: Z4(f.image.thumbnails, 290).url,
                        displayDomain: f.displayDomain ? g.lE(f.displayDomain) : null,
                        showLinkIcon: !!f.showLinkIcon,
                        cB: null,
                        title: f.title ? g.lE(f.title) : "",
                        customMessage: f.callToAction ? g.lE(f.callToAction) : "",
                        url: g.S(f.command, g.BM).url ? O4({
                            pause_on_navigation: !a.context.videoData.isLivePlayback,
                            target: "new",
                            value: g.S(f.command, g.BM).url
                        }) : null,
                        onClickCommand: null
                    };
                    X4(a, b)
                } else {
                    var m;
                    if (null == (m = b.content) ? 0 : m.collaboratorInfoCardContentRenderer) {
                        if (!b.cueRanges.length) return;
                        e = null == (f = b.content) ? void 0 : f.collaboratorInfoCardContentRenderer;
                        f = b.teaser.simpleCardTeaserRenderer;
                        l = b.icon ? b.icon.infoCardIconRenderer : null;
                        b = {
                            id: c,
                            timestamp: a.I,
                            type: "collaborator",
                            teaserText: g.lE(f.message),
                            teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                            startMs: Number(b.cueRanges[0].startCardActiveMs),
                            autoOpen: !!b.autoOpen,
                            sessionData: Y4(a, c, b, e),
                            sponsored: !1,
                            Pi: U4(e, f, e.endpoint),
                            zo: e.trackingParams ? g.GE(e.trackingParams) : null,
                            al: f.trackingParams ? g.GE(f.trackingParams) : null,
                            cg: l && l.trackingParams ? g.GE(l.trackingParams) : null,
                            channelId: g.S(e.endpoint, g.p3).browseId,
                            customMessage: e.customText ? g.lE(e.customText) : null,
                            aX: Z4(e.channelAvatar.thumbnails, 290).url,
                            title: e.channelName ? g.lE(e.channelName) : "",
                            metaInfo: [e.subscriberCountText ? g.lE(e.subscriberCountText) : ""],
                            url: O4({
                                pause_on_navigation: !a.context.videoData.isLivePlayback,
                                target: "new",
                                value: g.S(e.endpoint, g.p3).canonicalBaseUrl ? g.S(e.endpoint, g.p3).canonicalBaseUrl : "/channel/" + g.S(e.endpoint, g.p3).browseId
                            }),
                            onClickCommand: null
                        };
                        X4(a, b)
                    } else {
                        var n;
                        if (null == (n = b.content) ? 0 : n.playlistInfoCardContentRenderer) {
                            if (!b.cueRanges.length) return;
                            e = null == (l = b.content) ? void 0 : l.playlistInfoCardContentRenderer;
                            f = b.teaser.simpleCardTeaserRenderer;
                            l = b.icon ? b.icon.infoCardIconRenderer : null;
                            b = {
                                id: c,
                                timestamp: a.I,
                                type: "playlist",
                                teaserText: g.lE(f.message),
                                teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                                startMs: Number(b.cueRanges[0].startCardActiveMs),
                                autoOpen: !!b.autoOpen,
                                sessionData: Y4(a, c, b, e),
                                sponsored: !1,
                                Pi: U4(e, f, e.action),
                                zo: e.trackingParams ? g.GE(e.trackingParams) : null,
                                al: f.trackingParams ? g.GE(f.trackingParams) : null,
                                cg: l && l.trackingParams ? g.GE(l.trackingParams) : null,
                                eE: Z4(e.playlistThumbnail.thumbnails, 258).url,
                                customMessage: e.customMessage ? g.lE(e.customMessage) : null,
                                playlistVideoCount: g.lE(e.playlistVideoCount),
                                title: e.playlistTitle ? g.lE(e.playlistTitle) : "",
                                metaInfo: [e.channelName ? g.lE(e.channelName) :
                                    "", e.videoCountText ? g.lE(e.videoCountText) : ""
                                ],
                                url: O4({
                                    pause_on_navigation: !a.context.videoData.isLivePlayback,
                                    target: "new",
                                    value: hdb(e.action)
                                }),
                                onClickCommand: null
                            };
                            X4(a, b)
                        } else {
                            var p;
                            if (null == (p = b.content) ? 0 : p.videoInfoCardContentRenderer) {
                                if (!b.cueRanges.length) return;
                                var q;
                                e = null == (q = b.content) ? void 0 : q.videoInfoCardContentRenderer;
                                f = b.teaser.simpleCardTeaserRenderer;
                                l = b.icon ? b.icon.infoCardIconRenderer : null;
                                b = {
                                    id: c,
                                    timestamp: a.I,
                                    type: "video",
                                    teaserText: g.lE(f.message),
                                    teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                                    startMs: Number(b.cueRanges[0].startCardActiveMs),
                                    autoOpen: !!b.autoOpen,
                                    sessionData: Y4(a, c, b, e),
                                    sponsored: !1,
                                    Pi: U4(e, f, e.action),
                                    zo: e.trackingParams ? g.GE(e.trackingParams) : null,
                                    al: f.trackingParams ? g.GE(f.trackingParams) : null,
                                    cg: l && l.trackingParams ? g.GE(l.trackingParams) : null,
                                    eE: Z4(e.videoThumbnail.thumbnails, 258).url,
                                    videoDuration: e.lengthString ? g.lE(e.lengthString) : null,
                                    customMessage: e.customMessage ? g.lE(e.customMessage) : null,
                                    title: e.videoTitle ? g.lE(e.videoTitle) : "",
                                    metaInfo: [e.channelName ? g.lE(e.channelName) :
                                        "", e.viewCountText ? g.lE(e.viewCountText) : ""
                                    ],
                                    isLiveNow: !!e.badge,
                                    url: O4({
                                        pause_on_navigation: !a.context.videoData.isLivePlayback,
                                        target: "new",
                                        value: hdb(e.action)
                                    }),
                                    onClickCommand: null
                                };
                                X4(a, b)
                            }
                        }
                    }
                }
            }
            a.I++
        },
        Z4 = function(a, b) {
            for (var c = -1, d = -1, e = 0; e < a.length; e++) {
                if (a[e].height === b || 290 === a[e].width) return a[e];
                ((a[e].height || 0) < b || 290 > (a[e].width || 0)) && (0 > c || (a[c].height || 0) < (a[e].height || 0) || (a[c].width || 0) < (a[e].width || 0)) ? c = e: ((a[e].height || 0) >= b || 290 <= (a[e].width || 0)) && (0 > d || (a[d].height || 0) > (a[e].height || 0) || (a[d].width || 0) > (a[e].width || 0)) && (d = e)
            }
            return a[0 <= d ? d : c]
        },
        Y4 = function(a, b, c, d) {
            return {
                feature: c.feature ? c.feature : "cards",
                src_vid: a.context.videoData.videoId,
                annotation_id: b,
                ei: a.context.videoData.eventId || "",
                itct: d.trackingParams || ""
            }
        },
        mdb = function(a, b) {
            if (b = ldb(a, b)) b === a.j && (a.j = null), a.F.removeCueRange(b.qg.id), g.jf(b.LK), g.Ab(a.cards, b), a.bF(), $4(a)
        },
        V4 = function(a, b, c) {
            if (!a.B) {
                a.jb.show();
                a.Xa = new g.Gp(function() {
                    g.Op(a.context.F.getRootNode(), g.SW.IV_DRAWER_OPEN)
                }, 0);
                a.Xa.start();
                a.Pa.S(a.u, "mousewheel", function(h) {
                    a.Aa.start();
                    h.preventDefault();
                    h = h || window.event;
                    var l = 0;
                    "MozMousePixelScroll" == h.type ? l = 0 == (h.axis == h.HORIZONTAL_AXIS) ? h.detail : 0 : window.opera ? l = h.detail : l = 0 == h.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.chrome && 0 == navigator.platform.indexOf("Mac") ? h.wheelDeltaY / -30 : h.wheelDeltaY / -1.2 : h.wheelDelta / -1.6 : h.wheelDeltaY / -3;
                    if (h = l) a.u.scrollTop += h
                });
                a.B = !0;
                var d = g.KE();
                d && a.Ga && a.J && g.vP(d, [a.Ga, a.J]);
                b = {
                    TRIGGER_TYPE: b
                };
                for (var e = g.v(a.cards), f = e.next(); !f.done; f = e.next()) f = f.value, f.vV || (f.vV = !0, ndb(a.context.logger, f.qg.Pi.JU, b)), d && g.vP(d, [f.qg.zo]);
                x4(a.F);
                c && (a.D = new g.Gp(function() {
                    a.Ka = a.T;
                    a.Ob.focus()
                }, 330), a.D.start())
            }
        },
        W4 = function(a) {
            a.B && (a.jb.hide(), g.Oz(a.Pa), g.Qp(a.context.F.getRootNode(), g.SW.IV_DRAWER_OPEN), a.B = !1, x4(a.F), a.D && a.D.stop(), a.D = new g.Gp(function() {
                a.Ka && (a.Ka.focus(), a.Ka = null)
            }, 330), a.D.start())
        },
        pdb = function(a) {
            g.Pp(a.vb(), [g.SW.STOP_EVENT_PROPAGATION,
                "iv-drawer-manager"
            ]);
            g.yS(a.F, a.C, 5);
            odb(a);
            a.T = g.Te("ytp-cards-button", a.F.getRootNode());
            a.Ob = g.Te("iv-drawer-close-button", a.C);
            a.isInitialized = !0
        },
        odb = function(a) {
            var b = g.Te("iv-drawer-close-button", a.C);
            a.context.j.Sa(b, "click", a.w2, a);
            a.context.j.Sa(a.u, "touchend", function() {
                a.Aa.start()
            });
            a.context.j.Sa(a.u, "scroll", a.Q2, a);
            a.context.u.subscribe("onHideControls", function() {
                a.Ma = !0
            });
            a.context.u.subscribe("onShowControls", function() {
                a.Ma = !1
            });
            a.context.u.subscribe("onVideoAreaChange", function() {
                a.Ma = g.Np(a.F.getRootNode(), "ytp-autohide")
            });
            a.Z.push(g.tC("iv-button-shown", a.F4, a));
            a.Z.push(g.tC("iv-button-hidden", a.E4, a));
            a.Z.push(g.tC("iv-teaser-shown", a.PZ, a));
            a.Z.push(g.tC("iv-teaser-hidden", a.G4, a));
            a.Z.push(g.tC("iv-teaser-clicked", a.OZ, a))
        },
        qdb = function(a, b) {
            var c;
            return b.onClickCommand && "engagement-panel-error-corrections" === (null == (c = g.S(b.onClickCommand, g.f$a)) ? void 0 : c.targetId) ? (a.oa = b, !0) : !1
        },
        rdb = function(a, b) {
            a.oa = b;
            var c = a.F.getVideoData();
            if (!c) return !1;
            c = a.F.K("embeds_web_enable_video_data_refactoring_offline_and_progress_bar") ? g.UL(c) : c.multiMarkersPlayerBarRenderer;
            if (null == c ? 0 : c.markersMap)
                for (var d, e = 0;
                    (null == (d = c) ? void 0 : d.markersMap.length) > e; e++) {
                    var f = void 0,
                        h = null == (f = c) ? void 0 : f.markersMap[e];
                    if ("ERROR_CORRECTION_MARKERS" === h.key && (f = void 0, (h = null == (f = h.value) ? void 0 : f.markers) && 0 < h.length)) return d = void 0, b.startMs = (null == (d = g.S(h[0], g.YNa)) ? void 0 : d.timeRangeStartMillis) || 0, a.oa = null, !0
                }
            return !1
        },
        X4 = function(a, b) {
            if (!qdb(a, b) || rdb(a, b)) {
                var c = sdb(a, b);
                if (c) {
                    var d = {
                        qg: b,
                        LK: c.element,
                        vV: !1
                    };
                    if (!b.onClickCommand) {
                        a.isInitialized || pdb(a);
                        mdb(a, b.id);
                        var e = tdb(a, d);
                        g.Jb(a.cards, e, 0, d);
                        c.Ea(a.u, e);
                        a.bF()
                    }
                    b.autoOpen ? a.addCueRange(b.startMs, 0x8000000000000, b.id, function() {
                        a.B || (a.j = d, $4(a), udb(a, d), V4(a, "YOUTUBE_DRAWER_AUTO_OPEN", !1))
                    }) : (c = 1E3 * a.context.F.getCurrentTime(), 5E3 > c && c > b.startMs && vdb(a, d), a.addCueRange(b.startMs, b.startMs + 1, b.id, function() {
                        vdb(a, d)
                    }), $4(a))
                }
            }
        },
        sdb = function(a, b) {
            switch (b.type) {
                case "simple":
                    a = a.ya;
                    var c = b.displayDomain ? {
                        G: "div",
                        N: "iv-card-image-text",
                        ra: b.displayDomain
                    } : void 0;
                    var d = ddb(b);
                    c = {
                        G: "div",
                        Ja: ["iv-card"],
                        W: [{
                            G: "a",
                            N: "iv-click-target",
                            X: {
                                href: b.url ? N4(b.url) || "" : ""
                            },
                            W: [Q4(b.imageUrl, c), {
                                G: "div",
                                N: "iv-card-content",
                                W: [P4("h2", void 0, b.title), d]
                            }]
                        }]
                    };
                    c = new g.V(c);
                    R4(a, g.Se("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "collaborator":
                    a = a.ya;
                    c = {
                        G: "div",
                        Ja: ["iv-card", "iv-card-channel"],
                        W: [{
                            G: "a",
                            Ja: ["iv-click-target"],
                            X: {
                                href: N4(b.url) || "",
                                "data-ytid": b.channelId
                            },
                            W: [Q4(b.aX), {
                                G: "div",
                                N: "iv-card-content",
                                W: [bdb(b), {
                                    G: "h2",
                                    N: "iv-card-primary-link",
                                    ra: b.title
                                }, cdb(b)]
                            }]
                        }]
                    };
                    c = new g.V(c);
                    R4(a, g.Se("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "playlist":
                    a = a.ya;
                    c = {
                        G: "div",
                        Ja: ["iv-card", "iv-card-playlist"],
                        W: [{
                            G: "a",
                            N: "iv-click-target",
                            X: {
                                href: N4(b.url) || ""
                            },
                            W: [Q4(b.eE, {
                                G: "div",
                                N: "iv-card-image-overlay",
                                W: [{
                                    G: "span",
                                    N: "iv-card-playlist-video-count",
                                    ra: b.playlistVideoCount
                                }]
                            }), {
                                G: "div",
                                N: "iv-card-content",
                                W: [bdb(b), P4("h2", "iv-card-primary-link", b.title), cdb(b)]
                            }]
                        }]
                    };
                    c = new g.V(c);
                    R4(a, g.Se("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "productListing":
                    a = a.ya;
                    var e = !g.xb(b.offers);
                    c = ["iv-card"];
                    d = "";
                    var f = ddb(b);
                    e && (c.push("iv-card-product-listing"), d = "iv-card-primary-link", f = b.offers[0], e = [], f.price && e.push({
                        G: "div",
                        N: "iv-card-offer-price",
                        ra: f.price
                    }), f.merchant && e.push({
                        G: "div",
                        N: "iv-card-offer-merchant",
                        ra: f.merchant
                    }), f = {
                        G: "div",
                        W: e
                    });
                    e = b.url ? N4(b.url) || "" : "";
                    c = {
                        G: "div",
                        Ja: c,
                        X: {
                            tabindex: "0"
                        },
                        W: [{
                            G: "a",
                            Ja: ["iv-card-image", "iv-click-target"],
                            X: {
                                style: "background-image: url(" +
                                    b.imageUrl + ");",
                                href: e,
                                "aria-hidden": "true",
                                tabindex: "-1"
                            }
                        }, {
                            G: "div",
                            N: "iv-card-content",
                            W: [b.sponsored ? {
                                G: "div",
                                N: "iv-card-sponsored",
                                W: ["Sponsored", {
                                    G: "div",
                                    N: "iv-ad-info-container",
                                    W: [{
                                        G: "div",
                                        N: "iv-ad-info",
                                        ra: "{{adInfo}}"
                                    }, {
                                        G: "div",
                                        N: "iv-ad-info-icon-container",
                                        W: [{
                                            G: "div",
                                            N: "iv-ad-info-icon"
                                        }, {
                                            G: "div",
                                            N: "iv-ad-info-callout"
                                        }]
                                    }]
                                }]
                            } : "", {
                                G: "a",
                                N: "iv-click-target",
                                X: {
                                    href: e
                                },
                                W: [P4("h2", d, b.title), f]
                            }]
                        }]
                    };
                    c = new g.V(c);
                    d = g.df("span");
                    g.qf(d, "You are seeing this product because we think it is relevant to the video. Google may be compensated by the merchant.");
                    c.le(d, "adInfo");
                    R4(a, g.Se("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "video":
                    a = a.ya;
                    d = b.videoDuration ? {
                        G: "span",
                        N: "iv-card-video-duration",
                        ra: b.videoDuration
                    } : void 0;
                    f = b.isLiveNow ? {
                        G: "span",
                        Ja: ["yt-badge", "yt-badge-live"],
                        ra: "LIVE NOW"
                    } : null;
                    e = {
                        G: "div",
                        Ja: ["iv-card", "iv-card-video"],
                        W: [{
                            G: "a",
                            N: "iv-click-target",
                            X: {
                                href: (null == (c = b.url) ? void 0 : N4(c)) || ""
                            },
                            W: [Q4(b.eE, d), {
                                G: "div",
                                N: "iv-card-content",
                                W: [bdb(b), P4("h2", "iv-card-primary-link", b.title), cdb(b), f]
                            }]
                        }]
                    };
                    c = new g.V(e);
                    R4(a, g.Se("iv-click-target",
                        c.element), b, b.url);
                    b = c;
                    break;
                default:
                    return null
            }
            return b
        },
        tdb = function(a, b) {
            if (0 === a.cards.length) return 0;
            a = g.vb(a.cards, function(c) {
                return b.qg.startMs > c.qg.startMs || b.qg.startMs === c.qg.startMs && b.qg.timestamp >= c.qg.timestamp ? !0 : !1
            });
            return -1 === a ? 0 : a + 1
        },
        wdb = function(a) {
            return a.j ? "productListing" === a.j.qg.type : g.gm(a.cards, function(b) {
                return "productListing" === b.qg.type
            })
        },
        $4 = function(a) {
            g.Sp(a.F.getRootNode(), "ytp-cards-shopping-active", wdb(a))
        },
        vdb = function(a, b) {
            if (!g.Np(a.F.getRootNode(), "ytp-cards-teaser-shown")) {
                if (a.j !== b) {
                    var c = g.KE(),
                        d = a.j ? a.j.qg.cg : a.cg;
                    c && d && g.wP(c, [d]);
                    a.j = b;
                    $4(a)
                }(c = a.isInitialized && "none" == a.vb().style.display) || (c = a.context.F.getPlayerState(), d = 0 === c && 0 === a.context.F.getCurrentTime(), c = !(1 === c || 3 === c || d));
                c || b.qg.teaserDurationMs && a.F.Mz(!0, {
                    teaserText: b.qg.teaserText,
                    durationMs: b.qg.teaserDurationMs,
                    onClickCommand: b.qg.onClickCommand
                });
                a.qb.isActive() || ((!a.B || !a.Aa.isActive() && a.Ma) && udb(a, b), a.qb.start(910 + b.qg.teaserDurationMs))
            }
        },
        udb = function(a, b) {
            a.ea.zb ? (b = new C4([0,
                a.u.scrollTop
            ], [0, b.LK.offsetTop], 600, Bcb), a.context.B.Sa(b, "animate", function(c) {
                a.u.scrollTop = c.y
            }), a.context.B.Sa(b, "finish", function(c) {
                a.u.scrollTop = c.y
            }), b.play()) : (g.rQ(a.ea, !0), a.u.scrollTop = b.LK.offsetTop, g.rQ(a.ea, !1))
        },
        a5 = function(a) {
            return a.j && a.j.qg ? a.j.qg : a.cards[0] && a.cards[0].qg ? a.cards[0].qg : null
        },
        ldb = function(a, b) {
            return g.sb(a.cards, function(c) {
                return c.qg.id === b
            })
        },
        b5 = function(a, b, c) {
            S4.call(this, a, b);
            this.annotation = c;
            this.isActive = !1
        },
        xdb = function(a) {
            var b = a.annotation.data;
            "start_ms" in b && "end_ms" in b && a.addCueRange(b.start_ms, b.end_ms, a.annotation.id, function() {
                a.show()
            }, function() {
                a.hide()
            })
        },
        c5 = function(a, b, c) {
            b5.call(this, a, b, c);
            this.u = null;
            this.J = !1;
            this.B = null;
            this.C = !1;
            this.j = this.I = this.D = null
        },
        ydb = function(a, b) {
            var c = void 0 === c ? 0 : c;
            var d = tcb(b).width;
            g.Vm(b, d);
            c = new zcb(b, [d, b.offsetTop], [d - d - c, b.offsetTop], 200, Acb);
            g.I(a, c);
            a.context.B.Sa(c, "begin", function() {
                g.an(b, !0)
            });
            c.play()
        },
        Bdb = function(a, b) {
            if (b.channel_name) {
                var c = a.createElement({
                        G: "div",
                        Ja: ["iv-branding-context-name"],
                        ra: b.channel_name
                    }),
                    d = a.createElement({
                        G: "div",
                        Ja: ["iv-branding-context-subscribe"]
                    }),
                    e = b.standalone_subscribe_button_data;
                e && (a.j = new g.hU(e.subscribeText, e.subscribeCount, e.unsubscribeText, e.unsubscribeCount, !!e.enabled, !!e.classic, b.channel_id, !!e.subscribed, e.feature, b.session_data.itct, a.context.F), a.j.Ea(d));
                var f = a.createElement({
                        G: "div",
                        Ja: ["iv-branding-context-subscribe-caret"]
                    }),
                    h = a.createElement({
                        G: "div",
                        Ja: ["branding-context-container-inner"]
                    });
                h.appendChild(f);
                h.appendChild(c);
                h.appendChild(d);
                g.an(h, !1);
                var l = a.createElement({
                    G: "div",
                    Ja: ["branding-context-container-outer"]
                });
                l.appendChild(h);
                g.Pm(l, "right", b.image_width + "px");
                g.ff(a.vb(), l);
                a.B = new g.Gp(function() {
                    zdb(a, h, l)
                }, 500);
                g.I(a, a.B);
                a.context.j.Sa(a.vb(), "mouseover", function() {
                    Adb(a, h, l, f, b.image_height)
                });
                a.context.j.Sa(a.vb(), "mouseout", function() {
                    a.B.start()
                })
            }
        },
        Adb = function(a, b, c, d, e) {
            a.B.stop();
            if (!a.C) {
                var f = g.$m(b);
                a.j || (b.style.width = g.Um(f.width, !0), c.style.width = g.Um(f.width, !0));
                g.Pm(d, "top", f.height - Math.max(Math.min(f.height, e) / 2 + 10, 20) + "px");
                g.Pm(d, "right", "1px");
                a.C = !0;
                g.an(b, !0);
                a.D = new g.Gp(function() {
                    g.Op(this.vb(), "iv-branding-active")
                }, 0, a);
                a.D.start()
            }
        },
        zdb = function(a, b, c) {
            g.Qp(a.vb(), "iv-branding-active");
            a.I = new g.Gp(function() {
                g.an(b, !1);
                a.j || (c.style.width = g.Um(0, !0))
            }, 250);
            a.I.start();
            a.C = !1
        },
        Cdb = function(a, b, c, d, e, f, h) {
            this.j = a;
            this.B = b;
            this.Y = c;
            this.videoData = d;
            this.logger = e;
            this.F = f;
            this.u = h
        },
        Ddb = function(a, b, c) {
            b5.call(this, a, b, c);
            var d = this;
            this.T = this.isCollapsed = this.ea = !1;
            this.I = 5E3;
            this.u = this.B = this.j = this.C = null;
            this.J = this.createElement({
                G: "div",
                Ja: ["iv-promo-contents"]
            });
            this.D = new g.Gp(function() {
                d.j.setAttribute("aria-hidden", "true");
                g.an(d.B, !1);
                g.an(d.u, !0)
            }, 700, this);
            g.I(this, this.D)
        },
        Fdb = function(a) {
            var b = a.annotation.data;
            if ("cta" === a.annotation.style) var c = 6;
            else if ("video" === a.annotation.style || "playlist" === a.annotation.style) c = 7;
            a.I = b.collapsedelay_ms || a.I;
            var d = ["iv-promo", "iv-promo-inactive"];
            a.vb().setAttribute("aria-hidden", "true");
            a.vb().setAttribute("aria-label", "Promotion");
            a.vb().tabIndex = 0;
            var e = a.annotation.bf(),
                f = b.image_url;
            if (f) {
                var h = a.createElement({
                    G: "div",
                    Ja: ["iv-promo-img", "iv-click-target"]
                });
                f = a.createElement({
                    G: "img",
                    X: {
                        src: f,
                        "aria-hidden": "true"
                    }
                });
                h.appendChild(f);
                b.video_duration && !b.is_live ?
                    (f = a.createElement({
                        G: "span",
                        N: "iv-promo-video-duration",
                        ra: b.video_duration
                    }), h.appendChild(f)) : b.playlist_length && (f = a.createElement({
                        G: "span",
                        N: "iv-promo-playlist-length",
                        ra: b.playlist_length.toString()
                    }), h.appendChild(f));
                e && T4(a, h, e, a.annotation.id, b.session_data, void 0, c)
            }
            e ? (f = a.createElement({
                G: "a",
                N: "iv-promo-txt"
            }), g.ne(f, N4(e)), a.j = f) : a.j = a.createElement({
                G: "div",
                N: "iv-promo-txt"
            });
            switch (a.annotation.style) {
                case "cta":
                case "website":
                    var l = a.createElement({
                        G: "p",
                        W: [{
                            G: "strong",
                            ra: b.text_line_1
                        }]
                    });
                    var m = a.createElement({
                        G: "p",
                        W: [{
                            G: "span",
                            N: "iv-promo-link",
                            ra: b.text_line_2
                        }]
                    });
                    if (f = b.text_line_3) {
                        d.push("iv-promo-website-card-cta-redesign");
                        var n = a.createElement({
                            G: "button",
                            Ja: ["iv-promo-round-expand-icon", "ytp-button"]
                        });
                        f = a.createElement({
                            G: "button",
                            Ja: ["iv-button", "iv-promo-button"],
                            W: [{
                                G: "span",
                                N: "iv-button-content",
                                ra: f
                            }]
                        });
                        var p = a.createElement({
                            G: "div",
                            N: "iv-promo-button-container"
                        });
                        p.appendChild(f);
                        e && T4(a, a.vb(), e, a.annotation.id, b.session_data, void 0, c)
                    }
                    g.Op(a.j, "iv-click-target");
                    e && T4(a, a.j, e, a.annotation.id, b.session_data, void 0, c);
                    break;
                case "playlist":
                case "video":
                    l = a.createElement({
                        G: "p",
                        W: [{
                            G: "span",
                            ra: b.text_line_1
                        }]
                    }), m = a.createElement({
                        G: "p",
                        W: [{
                            G: "strong",
                            ra: b.text_line_2
                        }]
                    }), b.is_live && (l = m, m = a.createElement({
                        G: "span",
                        Ja: ["yt-badge", "iv-promo-badge-live"],
                        ra: "LIVE NOW"
                    })), g.Op(a.j, "iv-click-target"), e && T4(a, a.j, e, a.annotation.id, b.session_data, void 0, c), d.push("iv-promo-video")
            }
            l && a.j.appendChild(l);
            m && a.j.appendChild(m);
            a.J.appendChild(a.j);
            p && a.J.appendChild(p);
            c = a.createElement({
                G: "div",
                N: "iv-promo-actions"
            });
            a.u = a.createElement({
                G: "button",
                Ja: ["iv-promo-expand", "ytp-button"]
            });
            a.u.title = "Expand";
            a.context.j.Sa(a.u, "click", function(q) {
                Edb(a, 5E3, q)
            });
            c.appendChild(a.u);
            g.an(a.u, !1);
            a.context.j.Sa(a.vb(), "mouseover", a.N3, a);
            a.context.j.Sa(a.vb(), "mouseout", a.M3, a);
            a.context.j.Sa(a.vb(), "touchend", function(q) {
                Edb(a, 5E3, q)
            });
            a.B = a.createElement({
                G: "button",
                Ja: ["iv-promo-close", "ytp-button"]
            });
            a.B.title = "Close";
            a.context.j.Sa(a.B, "click", "cta" === a.annotation.style && b.text_line_3 ? a.I3 : a.H3, a);
            c.appendChild(a.B);
            g.Pp(a.vb(), d);
            h && (g.ff(a.vb(), h), n && h.appendChild(n));
            g.ff(a.vb(), a.J);
            g.ff(a.vb(), c)
        },
        Edb = function(a, b, c) {
            c.stopPropagation();
            Gdb(a);
            Hdb(a, b);
            a.j.focus()
        },
        Idb = function(a) {
            a.isCollapsed || a.T || a.C || (g.Op(a.vb(), "iv-promo-collapsed"), a.isCollapsed = !0, a.D.start())
        },
        Gdb = function(a) {
            a.D.stop();
            a.isCollapsed && (g.Rp(a.vb(), ["iv-promo-collapsed", "iv-promo-collapsed-no-delay"]), a.isCollapsed = !1, a.j && a.j.removeAttribute("aria-hidden"), g.an(a.u, !1), g.an(a.B, !0))
        },
        Hdb = function(a, b) {
            a.C || (a.C = g.Mf(function() {
                Jdb(this);
                Idb(this)
            }, b, a))
        },
        Jdb = function(a) {
            a.C && (g.Ja.clearTimeout(a.C), a.C = null)
        },
        Kdb = function(a) {
            this.F = a
        },
        ndb = function(a, b, c) {
            b && (c ? d5(a, b.map(function(d) {
                return g.vp(d, c)
            })) : d5(a, b))
        },
        d5 = function(a, b, c, d) {
            var e = 1,
                f = void 0,
                h = -1;
            if (c) {
                var l = !1;
                f = function() {
                    e--;
                    e || l || (clearTimeout(h), l = !0, c())
                };
                h = setTimeout(function() {
                    l = !0;
                    c()
                }, 1E3)
            }
            b = g.v(b || []);
            for (var m = b.next(); !m.done; m = b.next()) m = m.value, e++, g.cC(m, f);
            d && (e++, 0 !== d && a.F.sendVideoStatsEngageEvent(d, f))
        },
        Ldb = function(a) {
            g.tT.call(this, a);
            var b = this;
            this.ea = this.J = !1;
            this.loadNumber = 0;
            this.I = {};
            this.logger = new Kdb(this.player);
            this.C = new g.XH(this);
            this.D = this.Aw = null;
            this.events = new g.XH(this);
            this.T = this.j = null;
            this.Z = [];
            g.I(this, this.C);
            this.C.S(this.player, "onVideoAreaChange", function() {
                b.ma("onVideoAreaChange")
            });
            this.C.S(this.player, "onHideControls", function() {
                b.ma("onHideControls")
            });
            this.C.S(this.player, "onShowControls", function() {
                b.ma("onShowControls")
            });
            this.C.S(this.player, "resize", function(d) {
                b.ma("resize", d)
            });
            this.C.S(this.player, "presentingplayerstatechange", function(d) {
                b.ma("presentingplayerstatechange", d)
            });
            this.subscribe("presentingplayerstatechange", this.QZ, this);
            this.subscribe("resize", this.fH, this);
            this.player.V().Ga.subscribe("vast_info_card_add", this.IW, this);
            g.I(this, this.events);
            this.oa = this.createElement({
                G: "div",
                N: "video-custom-annotations"
            });
            this.u = new g.V({
                G: "div",
                Ja: ["ytp-player-content", "ytp-iv-player-content"]
            });
            g.I(this, this.u);
            g.yS(this.player, this.u.element, 4);
            this.u.hide();
            this.B = new g.V({
                G: "div",
                Ja: ["ytp-iv-video-content"]
            });
            g.I(this, this.B);
            a = this.createElement({
                G: "div",
                N: "video-annotations"
            });
            a.appendChild(this.oa);
            this.B.element.appendChild(a);
            this.lw() && this.load();
            var c = this.createElement({
                G: "style"
            });
            (g.Qe("HEAD")[0] || document.body).appendChild(c);
            g.lb(this, function() {
                g.jf(c)
            });
            if (a = c.sheet) a.insertRule(".iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}",
                0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}",
                0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}", 0), a.insertRule(".iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}",
                0), a.insertRule(".iv-card-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", 0), a.insertRule(".iv-card-playlist-video-count:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                0), a.insertRule(".iv-drawer-close-button:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}", 0), a.insertRule(".iv-ad-info-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}",
                0), a.insertRule(".annotation-close-button {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}", 0), a.insertRule(".annotation-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}",
                0)
        },
        Mdb = function(a) {
            a = a.createElement({
                G: "div",
                Ja: ["annotation", "annotation-type-custom"]
            });
            g.an(a, !1);
            return a
        },
        Ndb = function(a, b) {
            b = !b.isCued() && !g.cO(b, 1024);
            g.rQ(a.u, b);
            g.rQ(a.B, b)
        },
        Odb = function(a, b, c) {
            a.J = !0;
            a.D = g.Ky(b, c)
        },
        Pdb = function(a, b) {
            for (var c = {}, d = g.v(b.attributes), e = d.next(); !e.done; e = d.next()) e = e.value, c[e.name] = e.nodeValue;
            for (d = 0; d < b.childNodes.length; d++)
                if (e = b.childNodes[d], g.Pa(e) && 1 == e.nodeType) {
                    if (c[e.tagName]) var f = c[e.tagName];
                    else if ("data" === e.tagName) {
                        0 < e.childNodes.length && (f = e.childNodes[0].nodeValue, c[e.tagName] = "string" === typeof f ? f.trim() : f);
                        continue
                    } else f = [], c[e.tagName] = f;
                    e && "TEXT" === e.tagName ? 1 === e.childNodes.length && 3 === e.childNodes[0].nodeType ? f.push(e.childNodes[0].nodeValue) : f.push("") : e && f.push(Pdb(a, e))
                }
            return c
        },
        Tdb = function(a) {
            var b = a.player.getVideoData();
            if (b.Ma) {
                var c = a.player.V().Ga.get(b.videoId);
                if (c) {
                    var d = {
                        format: "XML",
                        urlParams: {},
                        method: "POST",
                        withCredentials: !0,
                        onFinish: function(e, f, h) {
                            e = b.videoId;
                            a.loaded && a.loadNumber === a.loadNumber && a.player.getVideoData().videoId === e && (h = g.Ey(h) && h.responseXML ? h.responseXML : null) && Qdb(a, h)
                        }
                    };
                    g.mA() && (d.onFinish = Rdb(a, d.onFinish));
                    d.postParams = {
                        ic_only: "1"
                    };
                    Sdb(d, c);
                    a.J = !0;
                    g.Ky(b.Ma, d)
                }
            }
        },
        Sdb = function(a, b) {
            a.method = "POST";
            a.postParams = a.postParams || {};
            b.eB && (a.postParams.ic_coll = b.eB);
            b.MK && (a.postParams.ic_xml = b.MK);
            b.tI && (a.postParams.ic_track = b.tI)
        },
        Udb = function(a) {
            var b = new g.V({
                G: "div"
            });
            g.an(b.element, !1);
            var c = new idb(a.player, b.element, e5(a));
            g.I(c, b);
            b.Ea(a.u.element);
            c.SD();
            return c
        },
        e5 = function(a) {
            if (!a.T) {
                var b = new Ccb(a);
                g.I(a, b);
                var c = new g.$k(a);
                g.I(a, c);
                a.T = new Cdb(b, c, a.player.V(), a.player.getVideoData(), a.logger, a.player, a.wi)
            }
            return a.T
        },
        Qdb = function(a, b) {
            var c = !1,
                d = b.getElementsByTagName("annotations");
            if (d && !(1 > d.length) && (d = d[0].getAttribute("itct"))) {
                var e = g.KE();
                if (e) {
                    var f = g.JE();
                    f && g.py(g.nP)(void 0, e, f, [g.GE(d)])
                }
            }
            b = b.getElementsByTagName("annotation");
            for (d = 0; d < b.length; d++) {
                f = Pdb(a, b[d]);
                e = null;
                try {
                    if (f) {
                        var h = f.id,
                            l = /.+/;
                        var m = "string" === typeof h && null != l && null != h && h.match(l) ? h : "";
                        var n = M4(f.type, Vdb),
                            p = M4(f.style, Wdb),
                            q = Scb(f.data),
                            t = 0 !== q.length ? JSON.parse(q) : {};
                        var w = f.action;
                        f = Ycb;
                        if (null == w) var z = null;
                        else if (g.Oa(w)) {
                            l = [];
                            for (var C = g.v(w), G = C.next(); !G.done; G = C.next()) {
                                var O = f(G.value);
                                O && l.push(O)
                            }
                            z = l
                        } else {
                            var N = f(w);
                            z = N ? [N] : []
                        }
                        e = m && n ? new Zcb(m, n, p, z, t) : null
                    } else e = null
                } catch (r) {}
                if (e)
                    if ("branding" === e.type || "promotion" === e.type) {
                        f = a;
                        l = e;
                        var K = Mdb(f),
                            W = null;
                        switch (l.type) {
                            case "branding":
                                if (f.player.V().Jd) break;
                                f.u.element.appendChild(K);
                                W = new c5(K, e5(f), l);
                                break;
                            case "promotion":
                                g.yS(f.player, K, 4), W = new Ddb(K, e5(f), l)
                        }
                        W && W.SD();
                        if (f = W) g.I(a, f), a.I[e.id] = f
                    } else if ("card" === e.type || "drawer" === e.type) {
                    a.j || (a.j = Udb(a), g.I(a, a.j));
                    if ("card" === e.type) {
                        c = a.j;
                        var Z = e && e.data && e.data.card_type;
                        f = e.data;
                        if (Z) switch (l = f.tracking || {}, l = {
                            JU: l.impression,
                            click: l.click,
                            close: l.close,
                            hY: l.teaser_impression,
                            qI: l.teaser_click
                        }, K = f.tracking_params || {}, W = null, Z) {
                            case "collaborator":
                                e = {
                                    id: e.id,
                                    timestamp: f.timestamp || 0,
                                    type: f.card_type,
                                    teaserText: f.teaser_text,
                                    teaserDurationMs: f.teaser_duration_ms,
                                    startMs: f.start_ms,
                                    autoOpen: f.auto_open || !1,
                                    sessionData: f.session_data || {},
                                    sponsored: f.sponsored || !1,
                                    Pi: l,
                                    zo: K.card ? g.GE(K.card) : null,
                                    al: K.teaser ? g.GE(K.teaser) : null,
                                    cg: K.icon ? g.GE(K.icon) : null,
                                    channelId: f.channel_id,
                                    customMessage: f.custom_message ? f.custom_message : null,
                                    aX: f.image_url,
                                    title: f.title,
                                    metaInfo: f.meta_info,
                                    url: O4({
                                        pause_on_navigation: f.pause_on_navigation,
                                        target: f.target || "new",
                                        value: f.url
                                    }),
                                    onClickCommand: null
                                };
                                X4(c, e);
                                break;
                            case "playlist":
                                e = {
                                    id: e.id,
                                    timestamp: f.timestamp || 0,
                                    type: f.card_type,
                                    teaserText: f.teaser_text,
                                    teaserDurationMs: f.teaser_duration_ms,
                                    startMs: f.start_ms,
                                    autoOpen: f.auto_open || !1,
                                    sessionData: f.session_data || {},
                                    sponsored: f.sponsored || !1,
                                    Pi: l,
                                    zo: K.card ? g.GE(K.card) : null,
                                    al: K.teaser ?
                                        g.GE(K.teaser) : null,
                                    cg: K.icon ? g.GE(K.icon) : null,
                                    eE: f.image_url,
                                    playlistVideoCount: f.playlist_video_count,
                                    customMessage: f.custom_message ? f.custom_message : null,
                                    title: f.title,
                                    metaInfo: f.meta_info,
                                    url: O4({
                                        pause_on_navigation: f.pause_on_navigation,
                                        target: f.target || "new",
                                        value: f.url
                                    }),
                                    onClickCommand: null
                                };
                                X4(c, e);
                                break;
                            case "productListing":
                                f.signin_url && (W = O4({
                                    target: "current",
                                    value: f.signin_url
                                }));
                                Z = [];
                                for (var Q = f.offers || [], na = 0; na < Q.length; na++) Z.push(new edb(g.He(Q[na].merchant), g.He(Q[na].price)));
                                e = {
                                    id: e.id,
                                    timestamp: f.timestamp || 0,
                                    type: f.card_type,
                                    teaserText: f.teaser_text,
                                    teaserDurationMs: f.teaser_duration_ms,
                                    startMs: f.start_ms,
                                    autoOpen: f.auto_open || !1,
                                    sessionData: f.session_data || {},
                                    sponsored: f.sponsored || !1,
                                    Pi: l,
                                    zo: K.card ? g.GE(K.card) : null,
                                    al: K.teaser ? g.GE(K.teaser) : null,
                                    cg: K.icon ? g.GE(K.icon) : null,
                                    imageUrl: f.image_url,
                                    displayDomain: f.display_domain ? f.display_domain : null,
                                    showLinkIcon: !!f.show_link_icon,
                                    cB: f.button_icon_url ? f.button_icon_url : null,
                                    title: f.title,
                                    customMessage: f.custom_message ?
                                        f.custom_message : null,
                                    url: O4({
                                        pause_on_navigation: f.pause_on_navigation,
                                        target: f.target || "new",
                                        value: f.url
                                    }),
                                    Z8a: W,
                                    Y8a: f.signin_title ? f.signin_title : void 0,
                                    X8a: f.signin_message ? f.signin_message : void 0,
                                    offers: Z,
                                    onClickCommand: null
                                };
                                X4(c, e);
                                break;
                            case "simple":
                                e = {
                                    id: e.id,
                                    timestamp: f.timestamp || 0,
                                    type: f.card_type,
                                    teaserText: f.teaser_text,
                                    teaserDurationMs: f.teaser_duration_ms,
                                    startMs: f.start_ms,
                                    autoOpen: f.auto_open || !1,
                                    sessionData: f.session_data || {},
                                    sponsored: f.sponsored || !1,
                                    Pi: l,
                                    zo: K.card ? g.GE(K.card) : null,
                                    al: K.teaser ? g.GE(K.teaser) : null,
                                    cg: K.icon ? g.GE(K.icon) : null,
                                    imageUrl: f.image_url,
                                    displayDomain: f.display_domain ? f.display_domain : null,
                                    showLinkIcon: !!f.show_link_icon,
                                    cB: f.button_icon_url ? f.button_icon_url : null,
                                    title: f.title,
                                    customMessage: f.custom_message ? f.custom_message : null,
                                    url: O4({
                                        pause_on_navigation: f.pause_on_navigation,
                                        target: f.target || "new",
                                        value: f.url
                                    }),
                                    onClickCommand: null
                                };
                                X4(c, e);
                                break;
                            case "video":
                                e = {
                                    id: e.id,
                                    timestamp: f.timestamp || 0,
                                    type: f.card_type,
                                    teaserText: f.teaser_text,
                                    teaserDurationMs: f.teaser_duration_ms,
                                    startMs: f.start_ms,
                                    autoOpen: f.auto_open || !1,
                                    sessionData: f.session_data || {},
                                    sponsored: f.sponsored || !1,
                                    Pi: l,
                                    zo: K.card ? g.GE(K.card) : null,
                                    al: K.teaser ? g.GE(K.teaser) : null,
                                    cg: K.icon ? g.GE(K.icon) : null,
                                    eE: f.image_url,
                                    videoDuration: f.video_duration || null,
                                    customMessage: f.custom_message ? f.custom_message : null,
                                    title: f.title,
                                    metaInfo: f.meta_info,
                                    isLiveNow: !!f.is_live_now,
                                    url: O4({
                                        pause_on_navigation: f.pause_on_navigation,
                                        target: f.target || "new",
                                        value: f.url
                                    }),
                                    onClickCommand: null
                                }, X4(c, e)
                        }
                    } else jdb(a.j, e);
                    c = !0
                }
            }
            c &&
                (x4(a.player), a.fH())
        },
        Xdb = function(a, b) {
            var c = !1;
            a.j || (a.j = Udb(a), g.I(a, a.j));
            for (var d = g.v(b.cards || []), e = d.next(); !e.done; e = d.next()) e = e.value, e.cardRenderer && (kdb(a.j, e.cardRenderer), c = !0);
            if (c) {
                var f;
                null != (f = a.player.getVideoData()) && g.YM(f) || (c = a.j, d = b.headerText ? g.lE(b.headerText) : "", g.qf(c.Gb, d), c.T && c.T.setAttribute("title", d), c.context.videoData.eventId && (c.eventId = c.context.videoData.eventId), c.Ga = b.trackingParams ? g.GE(b.trackingParams) : null, c.J = b.closeButton.infoCardIconRenderer.trackingParams ? g.GE(b.closeButton.infoCardIconRenderer.trackingParams) :
                    null, c.cg = b.icon.infoCardIconRenderer.trackingParams ? g.GE(b.icon.infoCardIconRenderer.trackingParams) : null, a.fH());
                x4(a.player)
            }
        },
        Ydb = function(a, b, c, d, e) {
            if (!a.player.V().Jd) {
                var f = [];
                b.navigationEndpoint && g.S(b.navigationEndpoint, g.p3) && g.S(b.navigationEndpoint, g.p3).browseId && f.push(new Vcb("openUrl", "click", new Tcb("/channel/" + g.S(b.navigationEndpoint, g.p3).browseId, "new", !0, !0)));
                var h = b.watermark.thumbnails[0];
                d = {
                    channel_name: b.channelName,
                    end_ms: b.endTimeMs,
                    image_height: h.height,
                    image_type: 1,
                    image_url: h.url,
                    image_width: h.width,
                    is_mobile: !1,
                    session_data: {
                        annotation_id: c,
                        ei: e,
                        feature: "iv",
                        itct: b.trackingParams,
                        src_vid: d
                    },
                    start_ms: b.startTimeMs
                };
                if (b.subscribeButton && g.S(b.subscribeButton,
                        g.RM)) {
                    d.channel_id = g.S(b.subscribeButton, g.RM).channelId;
                    var l;
                    b = g.S(b.subscribeButton, g.RM);
                    h = e = null;
                    b.subscribed ? (b.subscriberCountWithUnsubscribeText && (e = g.lE(b.subscriberCountWithUnsubscribeText)), b.subscriberCountText && (h = g.lE(b.subscriberCountText))) : (b.subscriberCountText && (e = g.lE(b.subscriberCountText)), b.subscriberCountWithSubscribeText && (h = g.lE(b.subscriberCountWithSubscribeText)));
                    var m, n = (null == (m = g.S(null == (l = b.signInEndpoint) ? void 0 : l.commandMetadata, g.q3)) ? void 0 : m.url) || "";
                    l = {
                        subscribeText: g.lE(b.unsubscribedButtonText),
                        subscribeCount: e || "",
                        unsubscribeText: g.lE(b.subscribedButtonText),
                        unsubscribeCount: h || "",
                        enabled: b.enabled || !1,
                        classic: !1,
                        subscribed: b.subscribed || !1,
                        feature: "iv",
                        signInUrl: n
                    };
                    d.standalone_subscribe_button_data = l
                }
                f = new Zcb(c, "branding", "branding", f, d);
                l = Mdb(a);
                a.u.element.appendChild(l);
                f = new c5(l, e5(a), f);
                f.SD();
                g.I(f, f);
                a.I[c] = f
            }
        },
        Rdb = function(a, b) {
            return function() {
                var c = g.Ca.apply(0, arguments);
                a.isDisposed() || a.Z.push(g.yp.zi(function() {
                    b.apply(null, g.la(c))
                }))
            }
        },
        Zdb = function(a) {
            return "annotation-editor" === a || "live-dashboard" === a
        };
    g.rS.prototype.Mz = g.ba(18, function(a, b) {
        var c = g.JT(this.xb());
        c && c.Mz(a, b)
    });
    var z4 = {},
        A4 = null;
    g.Ya(C4, g.$p);
    g.k = C4.prototype;
    g.k.getDuration = function() {
        return this.duration
    };
    g.k.play = function(a) {
        if (a || 0 == this.j) this.progress = 0, this.coords = this.u;
        else if (this.bd()) return !1;
        B4(this);
        this.startTime = a = g.Va(); - 1 == this.j && (this.startTime -= this.duration * this.progress);
        this.endTime = this.startTime + this.duration;
        this.C = this.startTime;
        this.progress || this.aH();
        this.Gl("play"); - 1 == this.j && this.Gl("resume");
        this.j = 1;
        var b = g.Sa(this);
        b in z4 || (z4[b] = this);
        vcb();
        wcb(this, a);
        return !0
    };
    g.k.stop = function(a) {
        B4(this);
        this.j = 0;
        a && (this.progress = 1);
        xcb(this, this.progress);
        this.Gl("stop");
        this.Jq()
    };
    g.k.pause = function() {
        this.bd() && (B4(this), this.j = -1, this.Gl("pause"))
    };
    g.k.qa = function() {
        0 == this.j || this.stop(!1);
        this.Gl("destroy");
        C4.Hf.qa.call(this)
    };
    g.k.destroy = function() {
        this.dispose()
    };
    g.k.gJ = function() {
        this.Gl("animate")
    };
    g.k.Gl = function(a) {
        this.dispatchEvent(new ycb(a, this))
    };
    g.Ya(ycb, g.pb);
    g.Ya(D4, C4);
    D4.prototype.B = function() {};
    D4.prototype.gJ = function() {
        this.B();
        D4.Hf.gJ.call(this)
    };
    D4.prototype.Jq = function() {
        this.B();
        D4.Hf.Jq.call(this)
    };
    D4.prototype.aH = function() {
        this.B();
        D4.Hf.aH.call(this)
    };
    g.Ya(zcb, D4);
    zcb.prototype.B = function() {
        this.element.style.left = Math.round(this.coords[0]) + "px";
        this.element.style.top = Math.round(this.coords[1]) + "px"
    };
    g.x(Ccb, g.E);
    g.k = Ccb.prototype;
    g.k.Sa = function(a, b, c, d) {
        c = (0, g.Ta)(c, d || this.u);
        a = g.Hz(a, b, c);
        this.j.push(a);
        return a
    };
    g.k.DG = function(a, b, c, d) {
        c = (0, g.Ta)(c, d || this.u);
        a = g.mna(a, b, c);
        this.j.push(a);
        return a
    };
    g.k.Hc = function(a) {
        g.Iz(a);
        g.Ab(this.j, a)
    };
    g.k.Ff = function() {
        g.Iz(this.j);
        this.j.length = 0
    };
    g.k.qa = function() {
        this.Ff();
        g.E.prototype.qa.call(this)
    };
    g.x(Fcb, g.tT);
    g.k = Fcb.prototype;
    g.k.load = function() {
        g.tT.prototype.load.call(this);
        if (!G4(this)) {
            var a = g.yya(this.player.getVideoData());
            a ? (a = Ecb(a, Gcb(this)), H4(this, a, !1)) : Hcb(this)
        }
    };
    g.k.unload = function() {
        H4(this, null);
        this.B && (this.B.abort(), this.B = null);
        g.tT.prototype.unload.call(this)
    };
    g.k.rh = function(a, b) {
        return G4(this) ? "loadCustomEndscreenRenderer" === a ? (a = Ecb(b, "new"), H4(this, a), !0) : null : null
    };
    g.k.getOptions = function() {
        return G4(this) ? ["loadCustomEndscreenRenderer"] : []
    };
    g.k.Eb = function() {
        if (this.endscreen && this.endscreen.elements) {
            var a = this.player.getVideoContentRect();
            if (a && 0 !== a.width && 0 !== a.height) {
                var b = this.player.getPlayerSize();
                if (b && 0 !== b.width && 0 !== b.height) {
                    var c = a.width / a.height;
                    var d = 0;
                    for (var e = -1, f = 0; f < $db.length; f++) {
                        var h = Math.abs(b.width - $db[f]);
                        if (-1 === e || d >= h) e = f, d = h
                    }
                    d = aeb[e];
                    this.u && g.Pm(this.u.element, "outline-width", Math.max(b.width, b.height) + "px");
                    for (b = 0; b < this.endscreen.elements.length; ++b)
                        if (f = this.endscreen.elements[b].id, e = this.j[f],
                            h = this.D[f], e && h) {
                            var l = h.width * c / h.aspectRatio,
                                m = Math.round(h.width * a.width);
                            f = Math.round(l * a.height);
                            var n = a.left + Math.round(h.left * a.width),
                                p = a.top + Math.round(h.top * a.height);
                            g.Zm(e.element, m, f);
                            g.Vm(e.element, n, p);
                            g.Rp(e.element, beb);
                            256 < m || 256 < f ? g.Op(e.element, "ytp-ce-large-round") : 96 < m || 96 < f ? g.Op(e.element, "ytp-ce-medium-round") : g.Op(e.element, "ytp-ce-small-round");
                            g.Rp(e.element, ceb);
                            m = h.left + h.width / 2;
                            h = h.top + l / 2;
                            g.Op(e.element, .5 >= m && .5 >= h ? "ytp-ce-top-left-quad" : .5 < m && .5 >= h ? "ytp-ce-top-right-quad" :
                                .5 >= m && .5 < h ? "ytp-ce-bottom-left-quad" : "ytp-ce-bottom-right-quad");
                            g.Rp(e.element, aeb);
                            g.Op(e.element, d);
                            (e = g.Re(document, "div", "ytp-ce-expanding-overlay-body", e.element)[0]) && g.Pm(e, "height", f + "px")
                        }
                }
            }
        }
    };
    g.k.onCueRangeEnter = function(a) {
        if (this.endscreen)
            if ("ytp-ce-in-endscreen" === a.getId()) L4(this, this.endscreen.impressionUrls), (a = g.KE()) && this.endscreen.visualElement && g.uP(a, this.endscreen.visualElement);
            else {
                a = a.getId().substring(15);
                var b = this.j[a],
                    c = this.D[a];
                g.Op(b.element, "ytp-ce-element-show");
                b.element.removeAttribute("aria-hidden");
                b = this.player.getRootNode();
                g.Op(b, "ytp-ce-shown");
                L4(this, c.impressionUrls);
                (b = g.KE()) && g.uP(b, c.visualElement);
                this.player.V().I && this.player.Oa("endscreenelementshown",
                    a)
            }
    };
    g.k.onCueRangeExit = function(a) {
        if ("ytp-ce-in-endscreen" !== a.getId()) {
            a = a.getId().substring(15);
            var b = this.j[a];
            g.Qp(b.element, "ytp-ce-element-show");
            b.element.setAttribute("aria-hidden", "true");
            b = this.player.getRootNode();
            g.Qp(b, "ytp-ce-shown");
            this.player.V().I && this.player.Oa("endscreenelementhidden", a)
        }
    };
    g.k.c8 = function(a) {
        var b = this;
        a.target === window && (new g.Gp(function() {
            for (var c = g.v(Object.values(b.j)), d = c.next(); !d.done; d = c.next()) g.Rp(d.value.element, ["ytp-ce-force-expand", "ytp-ce-element-hover", "ytp-ce-element-shadow-show"])
        }, 0)).start()
    };
    var $db = [346, 426, 470, 506, 570, 640, 853, 1280, 1920],
        aeb = "ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920".split(" "),
        ceb = ["ytp-ce-top-left-quad", "ytp-ce-top-right-quad", "ytp-ce-bottom-left-quad", "ytp-ce-bottom-right-quad"],
        beb = ["ytp-ce-small-round", "ytp-ce-medium-round", "ytp-ce-large-round"];
    var Ucb = {
        Xma: "current",
        xKa: "new"
    };
    var Wcb = {
            CLOSE: "close",
            VNa: "openUrl",
            SUBSCRIBE: "subscribe"
        },
        Xcb = {
            Cla: "click",
            CLOSE: "close",
            Kwa: "hidden",
            DSa: "rollOut",
            ESa: "rollOver",
            dUa: "shown"
        };
    Zcb.prototype.bf = function() {
        var a = $cb(this, function(b) {
            return "openUrl" === b.type && null != b.url
        });
        return a ? a.url : null
    };
    var Wdb = {
            eha: "anchored",
            mZ: "branding",
            CHANNEL: "channel",
            Nma: "cta",
            Nwa: "highlightText",
            IAa: "label",
            PLAYLIST: "playlist",
            mQa: "popup",
            IWa: "speech",
            SUBSCRIBE: "subscribe",
            JZa: "title",
            VIDEO: "video",
            x4a: "website"
        },
        Vdb = {
            mZ: "branding",
            wja: "card",
            Woa: "drawer",
            Mwa: "highlight",
            AGa: "marker",
            yRa: "promotion",
            TEXT: "text",
            Y5a: "widget"
        };
    g.x(S4, g.E);
    g.k = S4.prototype;
    g.k.addCueRange = function(a, b, c, d, e) {
        a = new g.bE(a, b, {
            id: c,
            namespace: "annotations_module"
        });
        d && this.bb.set(a, d);
        e && this.Za.set(a, e);
        this.context.F.De([a])
    };
    g.k.SD = function() {
        this.context.u.subscribe("resize", this.bF, this)
    };
    g.k.vb = function() {
        return this.element
    };
    g.k.hJ = function(a, b, c, d, e, f) {
        if (this.ub) return !1;
        f && (f.stopPropagation(), f.preventDefault());
        this.navigate(a, c, d, e);
        return !1
    };
    g.k.show = function() {};
    g.k.hide = function() {};
    g.k.destroy = function() {
        g.jf(this.vb())
    };
    g.k.bF = function() {};
    g.k.navigate = function(a, b, c, d) {
        var e = this,
            f = N4(a);
        if (f) {
            var h = gdb(f, a.target),
                l = function() {
                    a.j && e.context.F.pauseVideo();
                    var m = e.context.videoData.rd || !1,
                        n = g.vy(f || "");
                    m && n && (n.v || n.list) ? e.context.F.Mn(n.v, b, n.list, !1) : g.UN(f || "", "current" === h ? "_top" : void 0, b)
                };
            "new" === h && (l(), l = null);
            d5(this.context.logger, c, l, d);
            fdb(f) || (c = g.KE(), d = b.itct, c && d && g.xP(c, g.GE(d)))
        }
    };
    g.k.qa = function() {
        this.bb.clear();
        this.Za.clear();
        g.E.prototype.qa.call(this)
    };
    g.k.createElement = function(a) {
        a = new g.V(a);
        g.I(this, a);
        return a.element
    };
    g.x(idb, S4);
    g.k = idb.prototype;
    g.k.Ks = function() {
        this.oa && X4(this, this.oa)
    };
    g.k.isAvailable = function() {
        var a;
        if (a = !!this.cards.length)(a = this.F.getRootNode()) ? (a = g.$m(a), a = 173 < a.width && 173 < a.height) : a = !1;
        return a
    };
    g.k.bF = function() {
        var a = this.isAvailable();
        g.an(this.vb(), a);
        g.Sp(this.context.F.getRootNode(), g.SW.IV_DRAWER_ENABLED, a);
        x4(this.F)
    };
    g.k.destroy = function() {
        this.F.Mz(!1);
        try {
            this.F.getRootNode().removeChild(this.C)
        } catch (a) {}
        g.uC(this.Z);
        g.Oz(this.Pa);
        this.Xa && this.Xa.dispose();
        this.D && this.D.dispose();
        S4.prototype.destroy.call(this)
    };
    g.k.w2 = function() {
        if (this.B) {
            d5(this.context.logger, a5(this).Pi.close);
            var a = g.KE();
            a && this.J && g.xP(a, this.J);
            W4(this)
        }
    };
    g.k.Q2 = function() {
        g.Sp(this.C, "iv-drawer-scrolled", 0 < this.u.scrollTop)
    };
    g.k.F4 = function() {
        var a = g.KE(),
            b = a5(this);
        b = b ? b.cg : this.cg;
        a && b && g.vP(a, [b])
    };
    g.k.E4 = function() {
        var a = g.KE(),
            b = a5(this);
        b = b ? b.cg : this.cg;
        a && b && g.wP(a, [b])
    };
    g.k.PZ = function() {
        var a = a5(this);
        d5(this.context.logger, a.Pi.hY);
        var b = g.KE();
        b && a && g.vP(b, [a.al, a.cg])
    };
    g.k.G4 = function() {
        var a = g.KE(),
            b = a5(this);
        a && b && g.wP(a, [b.al])
    };
    g.k.OZ = function(a) {
        var b = a5(this),
            c = g.KE();
        this.j ? a ? (a = this.context.logger, d5(a, b.Pi.qI), a.F.sendVideoStatsEngageEvent(4, void 0), c && b.al && g.xP(c, b.al)) : (a = this.context.logger, d5(a, b.Pi.qI), a.F.sendVideoStatsEngageEvent(4, void 0), c && b.cg && g.xP(c, b.cg)) : (a = this.context.logger, d5(a, b.Pi.qI), a.F.sendVideoStatsEngageEvent(4, void 0), c && this.cg && g.xP(c, this.cg))
    };
    g.x(b5, S4);
    b5.prototype.SD = function() {
        S4.prototype.SD.call(this);
        xdb(this)
    };
    b5.prototype.show = function() {
        S4.prototype.show.call(this);
        var a = g.KE(),
            b = this.annotation.data;
        a && b && (b = b.session_data) && g.vP(a, [g.GE(b.itct)])
    };
    b5.prototype.hide = function() {
        S4.prototype.hide.call(this);
        var a = g.KE(),
            b = this.annotation.data;
        a && b && (b = b.session_data) && g.wP(a, [g.GE(b.itct)])
    };
    g.x(c5, b5);
    c5.prototype.show = function() {
        if (!this.isActive) {
            b5.prototype.show.call(this);
            if (!this.J) {
                g.Op(this.vb(), "iv-branding");
                var a = this.annotation.data;
                this.u = this.createElement({
                    G: "img",
                    Ja: ["branding-img", "iv-click-target"],
                    X: {
                        "aria-label": "Channel watermark",
                        src: a.image_url,
                        width: a.image_width,
                        height: a.image_height
                    }
                });
                g.an(this.u, !1);
                var b = this.createElement({
                    G: "button",
                    Ja: ["branding-img-container", "ytp-button"]
                });
                b.appendChild(this.u);
                this.vb().appendChild(b);
                var c = this.annotation.bf();
                c && T4(this, b,
                    c, this.annotation.id, a.session_data);
                Bdb(this, a);
                this.J = !0
            }
            g.an(this.vb(), !0);
            this.isActive = !0;
            this.u && (ydb(this, this.u), g.Op(this.context.F.getRootNode(), "ytp-branding-shown"))
        }
    };
    c5.prototype.hide = function() {
        this.isActive && (b5.prototype.hide.call(this), g.an(this.vb(), !1), this.isActive = !1, g.Qp(this.context.F.getRootNode(), "ytp-branding-shown"))
    };
    c5.prototype.destroy = function() {
        this.j && (this.j.dispose(), this.j = null);
        b5.prototype.destroy.call(this)
    };
    g.x(Ddb, b5);
    g.k = Ddb.prototype;
    g.k.show = function() {
        this.isActive || (b5.prototype.show.call(this), this.ea || (Fdb(this), this.ea = !0), g.an(this.vb(), !0), g.Mf(function() {
            g.Qp(this.vb(), "iv-promo-inactive")
        }, 100, this), this.vb().removeAttribute("aria-hidden"), this.isActive = !0, Jdb(this), Gdb(this), Hdb(this, this.I))
    };
    g.k.hide = function() {
        this.isActive && (g.Op(this.vb(), "iv-promo-inactive"), this.isActive = !1, this.vb().setAttribute("aria-hidden", "true"))
    };
    g.k.hJ = function(a, b, c, d, e, f) {
        return this.isCollapsed ? !1 : b5.prototype.hJ.call(this, a, b, c, d, e, f)
    };
    g.k.N3 = function(a) {
        this.T = !0;
        Edb(this, 500, a)
    };
    g.k.M3 = function() {
        this.T = !1;
        Idb(this)
    };
    g.k.H3 = function(a) {
        a.stopPropagation();
        this.hide()
    };
    g.k.I3 = function(a) {
        a.stopPropagation();
        Jdb(this);
        this.isCollapsed = !0;
        g.Op(this.vb(), "iv-promo-collapsed-no-delay");
        this.D.start()
    };
    g.k.destroy = function() {
        this.D.dispose();
        b5.prototype.destroy.call(this)
    };
    g.x(Ldb, g.tT);
    g.k = Ldb.prototype;
    g.k.rh = function(a, b) {
        if (!Zdb(this.player.V().playerStyle)) return null;
        switch (a) {
            case "loadCustomAnnotationsXml":
                return (a = g.L7a(b)) && Qdb(this, a), !0;
            case "removeCustomAnnotationById":
                return b && this.j && (mdb(this.j, b), x4(this.player)), !0
        }
        return null
    };
    g.k.getOptions = function() {
        return Zdb(this.player.V().playerStyle) ? ["loadCustomAnnotationsXml", "removeCustomAnnotationById"] : []
    };
    g.k.lw = function() {
        var a = this.player.V(),
            b = this.player.getVideoData(),
            c = a.annotationsLoadPolicy || b.annotationsLoadPolicy;
        return b.rd && a.Z || g.lS(this.player.app) ? !1 : 1 === c && !b.VR || a.Ga.get(b.videoId) || g.ZM(b) || g.$M(b) ? !0 : !1
    };
    g.k.fH = function() {
        if (this.B) {
            var a = this.player.kb().getVideoContentRect(!0);
            g.Zm(this.B.element, a.width, a.height);
            g.Vm(this.B.element, a.left, a.top)
        }
        if (this.j) {
            var b = this.player.Ck();
            a = this.j;
            b = b.width;
            g.Sp(a.C, "iv-drawer-small", 426 >= b);
            g.Sp(a.C, "iv-drawer-big", 1280 <= b)
        }
    };
    g.k.QZ = function(a) {
        Ndb(this, a.state);
        g.cO(a.state, 2) && (this.rk() && this.xo() && 2 !== this.player.getPresentingPlayerType() && this.Nz(!1), this.Mz(!1))
    };
    g.k.load = function() {
        function a(h) {
            var l = b.loadNumber;
            b.D = null;
            b.loaded && b.loadNumber === l && b.player.getVideoData().videoId === d && (h = g.Ey(h) && h.responseXML ? h.responseXML : null) && (Qdb(b, h), g.Op(b.player.getRootNode(), "iv-module-loaded"))
        }
        var b = this;
        g.tT.prototype.load.call(this);
        Ndb(this, this.player.Db());
        this.loadNumber++;
        var c = this.player.getVideoData(),
            d = c.videoId;
        g.mA() && (a = Rdb(this, a));
        var e = {
            format: "XML",
            onFinish: a,
            onError: function() {
                b.D = null
            },
            urlParams: {}
        };
        c.isPharma && (e.urlParams.pharma = "1");
        e.method = "POST";
        e.withCredentials = !0;
        var f = this.player.V().Ga.get(d);
        f && Sdb(e, f);
        f = f && (f.MK || f.eB);
        if (!c.oA || f) c.Ma ? Odb(this, c.Ma, e) : (this.Aw = function() {
            if (!b.J) b.onVideoDataChange(e);
            var h = b.player.getVideoData();
            if ((null == h ? 0 : g.YM(h)) && !b.ea) {
                var l, m;
                if (h = null == (l = h.jd) ? void 0 : null == (m = l.cards) ? void 0 : m.cardCollectionRenderer) Xdb(b, h), b.ea = !0
            }
        }, this.player.addEventListener("videodatachange", this.Aw));
        g.yS(this.player, this.B.element, 4);
        this.fH();
        (f = g.ZM(c)) && Xdb(this, f);
        (f = g.$M(c)) && f.featuredChannel && Ydb(this, f.featuredChannel, f.annotationId || "branding", c.videoId || null, c.eventId || null)
    };
    g.k.onVideoDataChange = function(a) {
        var b = this.player.getVideoData();
        b.Ma && Odb(this, b.Ma, a)
    };
    g.k.unload = function() {
        this.player.jf("annotations_module");
        for (var a = g.v(Object.keys(this.I)), b = a.next(); !b.done; b = a.next()) this.I[b.value].destroy();
        this.T = null;
        this.j && (this.j.destroy(), this.j = null, x4(this.player));
        this.J = !1;
        this.D && (this.D.abort(), this.D = null);
        this.ea = !1;
        this.I = {};
        this.u.hide();
        g.tT.prototype.unload.call(this);
        this.B.detach();
        this.Aw && (this.player.removeEventListener("videodatachange", this.Aw), this.Aw = null)
    };
    g.k.IW = function(a) {
        a === this.player.getVideoData().videoId && (this.loaded ? Tdb(this) : this.load())
    };
    g.k.rk = function() {
        var a;
        return (null == (a = this.j) ? void 0 : a.isAvailable()) || this.ea
    };
    g.k.xo = function() {
        return !!this.j && this.j.B
    };
    g.k.Nz = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        this.rk();
        this.j && (a ? c ? V4(this.j, c, b) : V4(this.j, "YOUTUBE_DRAWER_AUTO_OPEN", b) : W4(this.j))
    };
    g.k.Mz = function(a, b) {
        this.player.ma(a ? "cardsteasershow" : "cardsteaserhide", b)
    };
    g.k.qa = function() {
        this.player.V().Ga.unsubscribe("vast_info_card_add", this.IW, this);
        g.Qp(this.player.getRootNode(), g.SW.IV_DRAWER_OPEN);
        for (var a = this.Z, b = g.yp, c = 0, d = a.length; c < d; c++) b.Hm(a[c]);
        this.Z.length = 0;
        g.tT.prototype.qa.call(this)
    };
    g.k.createElement = function(a) {
        a = new g.V(a);
        g.I(this, a);
        return a.element
    };
    g.sT("annotations_module", Ldb);
    g.sT("creatorendscreen", Fcb);
})(_yt_player);