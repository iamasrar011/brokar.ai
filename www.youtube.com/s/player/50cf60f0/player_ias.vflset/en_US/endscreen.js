(function(g) {
    var window = this;
    'use strict';
    var igb = function(a, b) {
            a.Oa("onAutonavCoundownStarted", b)
        },
        a6 = function(a, b, c) {
            g.Sp(a.element, "ytp-suggestion-set", !!b.videoId);
            var d = b.playlistId;
            c = b.xg(c ? c : "mqdefault.jpg");
            var e = null,
                f = null;
            b instanceof g.SL && (b.lengthText ? (e = b.lengthText || null, f = b.yv || null) : b.lengthSeconds && (e = g.jR(b.lengthSeconds), f = g.jR(b.lengthSeconds, !0)));
            var h = !!d;
            d = h && "RD" === g.QL(d).type;
            var l = b instanceof g.SL ? b.isLivePlayback : null,
                m = b instanceof g.SL ? b.isUpcoming : null,
                n = b.author,
                p = b.shortViewCount,
                q = b.publishedTimeText,
                t = [],
                w = [];
            n && t.push(n);
            p && (t.push(p), w.push(p));
            q && w.push(q);
            c = {
                title: b.title,
                author: n,
                author_and_views: t.join(" \u2022 "),
                aria_label: b.ariaLabel ||
                    g.yO("Watch $TITLE", {
                        TITLE: b.title
                    }),
                duration: e,
                timestamp: f,
                url: b.Dk(),
                is_live: l,
                is_upcoming: m,
                is_list: h,
                is_mix: d,
                background: c ? "background-image: url(" + c + ")" : "",
                views_and_publish_time: w.join(" \u2022 "),
                autoplayAlternativeHeader: b.Jr
            };
            b instanceof g.RL && (c.playlist_length = b.playlistLength);
            a.update(c)
        },
        b6 = function(a) {
            var b = a.V(),
                c = b.C;
            g.V.call(this, {
                G: "a",
                N: "ytp-autonav-suggestion-card",
                X: {
                    href: "{{url}}",
                    target: c ? b.ea : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                W: [{
                    G: "div",
                    Ja: ["ytp-autonav-endscreen-upnext-thumbnail", "ytp-autonav-thumbnail-small"],
                    X: {
                        style: "{{background}}"
                    },
                    W: [{
                        G: "div",
                        X: {
                            "aria-label": "{{timestamp}}"
                        },
                        Ja: ["ytp-autonav-timestamp"],
                        ra: "{{duration}}"
                    }, {
                        G: "div",
                        Ja: ["ytp-autonav-live-stamp"],
                        ra: "Live"
                    }, {
                        G: "div",
                        Ja: ["ytp-autonav-upcoming-stamp"],
                        ra: "Upcoming"
                    }, {
                        G: "div",
                        N: "ytp-autonav-list-overlay",
                        W: [{
                            G: "div",
                            N: "ytp-autonav-mix-text",
                            ra: "Mix"
                        }, {
                            G: "div",
                            N: "ytp-autonav-mix-icon"
                        }]
                    }]
                }, {
                    G: "div",
                    Ja: ["ytp-autonav-endscreen-upnext-title", "ytp-autonav-title-card"],
                    ra: "{{title}}"
                }, {
                    G: "div",
                    Ja: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-author-card"],
                    ra: "{{author}}"
                }, {
                    G: "div",
                    Ja: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-view-and-date-card"],
                    ra: "{{views_and_publish_time}}"
                }]
            });
            this.F = a;
            this.suggestion =
                null;
            this.j = c;
            this.Sa("click", this.onClick);
            this.Sa("keypress", this.onKeyPress)
        },
        c6 = function(a, b) {
            b = void 0 === b ? !1 : b;
            g.V.call(this, {
                G: "div",
                N: "ytp-autonav-endscreen-countdown-overlay"
            });
            var c = this;
            this.I = b;
            this.D = void 0;
            this.B = 0;
            this.container = new g.V({
                G: "div",
                N: "ytp-autonav-endscreen-countdown-container"
            });
            g.I(this, this.container);
            this.container.Ea(this.element);
            b = a.V();
            var d = b.C;
            this.F = a;
            this.suggestion = null;
            this.onVideoDataChange("newdata", this.F.getVideoData());
            this.S(a, "videodatachange", this.onVideoDataChange);
            this.j = new g.V({
                G: "div",
                N: "ytp-autonav-endscreen-upnext-container",
                X: {
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                W: [{
                    G: "div",
                    N: "ytp-autonav-endscreen-upnext-header"
                }, {
                    G: "div",
                    N: "ytp-autonav-endscreen-upnext-alternative-header",
                    ra: "{{autoplayAlternativeHeader}}"
                }, {
                    G: "a",
                    N: "ytp-autonav-endscreen-link-container",
                    X: {
                        href: "{{url}}",
                        target: d ? b.ea : ""
                    },
                    W: [{
                        G: "div",
                        N: "ytp-autonav-endscreen-upnext-thumbnail",
                        X: {
                            style: "{{background}}"
                        },
                        W: [{
                            G: "div",
                            X: {
                                "aria-label": "{{timestamp}}"
                            },
                            Ja: ["ytp-autonav-timestamp"],
                            ra: "{{duration}}"
                        }, {
                            G: "div",
                            Ja: ["ytp-autonav-live-stamp"],
                            ra: "Live"
                        }, {
                            G: "div",
                            Ja: ["ytp-autonav-upcoming-stamp"],
                            ra: "Upcoming"
                        }]
                    }, {
                        G: "div",
                        N: "ytp-autonav-endscreen-video-info",
                        W: [{
                            G: "div",
                            N: "ytp-autonav-endscreen-premium-badge"
                        }, {
                            G: "div",
                            N: "ytp-autonav-endscreen-upnext-title",
                            ra: "{{title}}"
                        }, {
                            G: "div",
                            N: "ytp-autonav-endscreen-upnext-author",
                            ra: "{{author}}"
                        }, {
                            G: "div",
                            N: "ytp-autonav-view-and-date",
                            ra: "{{views_and_publish_time}}"
                        }, {
                            G: "div",
                            N: "ytp-autonav-author-and-view",
                            ra: "{{author_and_views}}"
                        }]
                    }]
                }]
            });
            g.I(this, this.j);
            this.j.Ea(this.container.element);
            d || this.S(this.j.Da("ytp-autonav-endscreen-link-container"), "click", this.IQ);
            this.F.tb(this.container.element, this, 115127);
            this.F.tb(this.j.Da("ytp-autonav-endscreen-link-container"), this, 115128);
            this.overlay = new g.V({
                G: "div",
                N: "ytp-autonav-overlay"
            });
            g.I(this, this.overlay);
            this.overlay.Ea(this.container.element);
            this.u = new g.V({
                G: "div",
                N: "ytp-autonav-endscreen-button-container"
            });
            g.I(this, this.u);
            this.u.Ea(this.container.element);
            this.cancelButton =
                new g.V({
                    G: "button",
                    Ja: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-cancel-button", b.K("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""],
                    X: {
                        "aria-label": "Cancel autoplay"
                    },
                    ra: "Cancel"
                });
            g.I(this, this.cancelButton);
            this.cancelButton.Ea(this.u.element);
            this.cancelButton.Sa("click", this.XZ, this);
            this.F.tb(this.cancelButton.element, this, 115129);
            this.playButton = new g.V({
                G: "a",
                Ja: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-play-button",
                    b.K("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""
                ],
                X: {
                    href: "{{url}}",
                    role: "button",
                    "aria-label": "Play next video"
                },
                ra: "Play Now"
            });
            g.I(this, this.playButton);
            this.playButton.Ea(this.u.element);
            this.playButton.Sa("click", this.IQ, this);
            this.F.tb(this.playButton.element, this, 115130);
            this.C = new g.Gp(function() {
                jgb(c)
            }, 500);
            g.I(this, this.C);
            this.HQ();
            this.S(a, "autonavvisibility", this.HQ);
            this.F.K("web_autonav_color_transition") && (this.S(a, "autonavchange", this.WZ), this.S(a, "onAutonavCoundownStarted", this.G5))
        },
        d6 = function(a) {
            var b = a.F.Ck(!0, a.F.isFullscreen());
            g.Sp(a.container.element, "ytp-autonav-endscreen-small-mode", a.Xg(b));
            g.Sp(a.container.element, "ytp-autonav-endscreen-is-premium", !!a.suggestion && !!a.suggestion.lI);
            g.Sp(a.F.getRootNode(), "ytp-autonav-endscreen-cancelled-state", !a.F.Cf());
            g.Sp(a.F.getRootNode(), "countdown-running", a.Ik());
            g.Sp(a.container.element, "ytp-player-content", a.F.Cf());
            g.Pm(a.overlay.element, {
                width: b.width + "px"
            });
            if (!a.Ik()) {
                a.F.Cf() ? kgb(a, Math.round(lgb(a) / 1E3)) : kgb(a);
                b = !!a.suggestion && !!a.suggestion.Jr;
                var c = a.F.Cf() || !b;
                g.Sp(a.container.element, "ytp-autonav-endscreen-upnext-alternative-header-only", !c && b);
                g.Sp(a.container.element, "ytp-autonav-endscreen-upnext-no-alternative-header", c && !b);
                g.rQ(a.u, a.F.Cf());
                g.Sp(a.element, "ytp-enable-w2w-color-transitions", mgb(a))
            }
        },
        jgb = function(a) {
            var b = lgb(a),
                c = Math,
                d = c.min;
            var e = a.B ? Date.now() - a.B : 0;
            c = d.call(c, e, b);
            kgb(a, Math.ceil((b - c) / 1E3));
            500 >= b - c && a.Ik() ? a.select(!0) : a.Ik() && a.C.start()
        },
        lgb = function(a) {
            if (a.F.isFullscreen()) {
                var b;
                a = null == (b = a.F.getVideoData()) ? void 0 : b.nQ;
                return -1 === a || void 0 === a ? 8E3 : a
            }
            return 0 <= a.F.hs() ? a.F.hs() : g.rJ(a.F.V().experiments, "autoplay_time") || 1E4
        },
        mgb = function(a) {
            var b;
            return !(null == (b = a.F.getVideoData()) || !b.watchToWatchTransitionRenderer)
        },
        kgb = function(a, b) {
            b = void 0 === b ? -1 : b;
            a = a.j.Da("ytp-autonav-endscreen-upnext-header");
            g.gf(a);
            if (0 <= b) {
                b = String(b);
                var c = "Up next in $SECONDS".match(RegExp("\\$SECONDS", "gi"))[0],
                    d = "Up next in $SECONDS".indexOf(c);
                if (0 <= d) {
                    a.appendChild(g.ef("Up next in $SECONDS".slice(0, d)));
                    var e = g.df("span");
                    g.Mp(e, "ytp-autonav-endscreen-upnext-header-countdown-number");
                    g.qf(e, b);
                    a.appendChild(e);
                    a.appendChild(g.ef("Up next in $SECONDS".slice(d + c.length)));
                    return
                }
            }
            g.qf(a, "Up next")
        },
        e6 = function(a, b) {
            g.V.call(this, {
                G: "div",
                Ja: ["html5-endscreen", "ytp-player-content", b || "base-endscreen"]
            });
            this.created = !1;
            this.player = a
        },
        f6 = function(a) {
            g.V.call(this, {
                G: "div",
                Ja: ["ytp-upnext", "ytp-player-content"],
                X: {
                    "aria-label": "{{aria_label}}"
                },
                W: [{
                    G: "div",
                    N: "ytp-cued-thumbnail-overlay-image",
                    X: {
                        style: "{{background}}"
                    }
                }, {
                    G: "span",
                    N: "ytp-upnext-top",
                    W: [{
                        G: "span",
                        N: "ytp-upnext-header",
                        ra: "Up Next"
                    }, {
                        G: "span",
                        N: "ytp-upnext-title",
                        ra: "{{title}}"
                    }, {
                        G: "span",
                        N: "ytp-upnext-author",
                        ra: "{{author}}"
                    }]
                }, {
                    G: "a",
                    N: "ytp-upnext-autoplay-icon",
                    X: {
                        role: "button",
                        href: "{{url}}",
                        "aria-label": "Play next video"
                    },
                    W: [{
                        G: "svg",
                        X: {
                            height: "100%",
                            version: "1.1",
                            viewBox: "0 0 72 72",
                            width: "100%"
                        },
                        W: [{
                            G: "circle",
                            N: "ytp-svg-autoplay-circle",
                            X: {
                                cx: "36",
                                cy: "36",
                                fill: "#fff",
                                "fill-opacity": "0.3",
                                r: "31.5"
                            }
                        }, {
                            G: "circle",
                            N: "ytp-svg-autoplay-ring",
                            X: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-dasharray": "211",
                                "stroke-dashoffset": "-211",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }, {
                            G: "path",
                            N: "ytp-svg-fill",
                            X: {
                                d: "M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"
                            }
                        }]
                    }]
                }, {
                    G: "span",
                    N: "ytp-upnext-bottom",
                    W: [{
                        G: "span",
                        N: "ytp-upnext-cancel"
                    }, {
                        G: "span",
                        N: "ytp-upnext-paused",
                        ra: "Autoplay is paused"
                    }]
                }]
            });
            this.api = a;
            this.cancelButton = null;
            this.D = this.Da("ytp-svg-autoplay-ring");
            this.B = this.notification = this.j = this.suggestion = null;
            this.C = new g.Gp(this.lF, 5E3, this);
            this.u = 0;
            var b = this.Da("ytp-upnext-cancel");
            this.cancelButton = new g.V({
                G: "button",
                Ja: ["ytp-upnext-cancel-button", "ytp-button"],
                X: {
                    tabindex: "0",
                    "aria-label": "Cancel autoplay"
                },
                ra: "Cancel"
            });
            g.I(this, this.cancelButton);
            this.cancelButton.Sa("click", this.YZ, this);
            this.cancelButton.Ea(b);
            this.cancelButton && this.api.tb(this.cancelButton.element,
                this, 115129);
            g.I(this, this.C);
            this.api.tb(this.element, this, 18788);
            b = this.Da("ytp-upnext-autoplay-icon");
            this.S(b, "click", this.ZZ);
            this.api.tb(b, this, 115130);
            this.JQ();
            this.S(a, "autonavvisibility", this.JQ);
            this.S(a, "mdxnowautoplaying", this.t6);
            this.S(a, "mdxautoplaycanceled", this.u6);
            g.Sp(this.element, "ytp-upnext-mobile", this.api.V().u)
        },
        ngb = function(a, b) {
            if (b) return b;
            if (a.api.isFullscreen()) {
                var c;
                a = null == (c = a.api.getVideoData()) ? void 0 : c.nQ;
                return -1 === a || void 0 === a ? 8E3 : a
            }
            return 0 <= a.api.hs() ? a.api.hs() : g.rJ(a.api.V().experiments, "autoplay_time") || 1E4
        },
        ogb = function(a, b) {
            b = ngb(a, b);
            var c = Math,
                d = c.min;
            var e = (0, g.NA)() - a.u;
            c = d.call(c, e, b);
            b = 0 === b ? 1 : Math.min(c / b, 1);
            a.D.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
            1 <= b && a.Ik() && 3 !== a.api.getPresentingPlayerType() ? a.select(!0) : a.Ik() && a.j.start()
        },
        g6 = function(a) {
            e6.call(this, a, "autonav-endscreen");
            this.overlay = this.videoData = null;
            this.table = new g.V({
                G: "div",
                N: "ytp-suggestion-panel",
                W: [{
                    G: "div",
                    Ja: ["ytp-autonav-endscreen-upnext-header", "ytp-autonav-endscreen-more-videos"],
                    ra: "More videos"
                }]
            });
            this.J = new g.V({
                G: "div",
                N: "ytp-suggestions-container"
            });
            this.videos = [];
            this.B = null;
            this.D = this.I = !1;
            this.u = new c6(this.player);
            g.I(this, this.u);
            this.u.Ea(this.element);
            a.getVideoData().uf ? this.j = this.u : (this.j = new f6(a), g.yS(this.player, this.j.element, 4), g.I(this, this.j));
            this.overlay = new g.V({
                G: "div",
                N: "ytp-autonav-overlay-cancelled-state"
            });
            g.I(this, this.overlay);
            this.overlay.Ea(this.element);
            this.C = new g.XH(this);
            g.I(this, this.C);
            g.I(this, this.table);
            this.table.Ea(this.element);
            this.table.show();
            g.I(this, this.J);
            this.J.Ea(this.table.element);
            this.hide()
        },
        h6 = function(a) {
            var b = a.Cf();
            b !== a.D && (a.D = b, a.player.ma("autonavvisibility"), a.D ? (a.u !== a.j && a.u.hide(), a.table.hide()) : (a.u !== a.j && a.u.show(), a.table.show()))
        },
        i6 = function(a, b) {
            g.V.call(this, {
                G: "button",
                Ja: ["ytp-watch-on-youtube-button", "ytp-button"],
                ra: "{{content}}"
            });
            this.F = a;
            this.buttonType = this.buttonType = b;
            b = this.F.getVideoData();
            if (a.K("embeds_enable_server_driven_watch_again_on_youtube")) {
                var c, d;
                if (c = (a = null == (c = b.jd) ? void 0 : null == (d = c.playerOverlays) ? void 0 : d.playerOverlayRenderer) && g.S(a.watchOnYoutubeButton, g.AJa)) this.j = c
            }
            if (this.j) this.update({
                content: this.j.title
            }), this.F.ag(this.element, this), this.F.pg(this.element, this.j.trackingParams || null);
            else {
                switch (this.buttonType) {
                    case 1:
                        c =
                            "Watch again on YouTube";
                        d = 156915;
                        break;
                    case 2:
                        c = "Continue watching on YouTube";
                        d = 156942;
                        break;
                    default:
                        c = "Continue watching on YouTube", d = 156942
                }
                this.update({
                    content: c
                });
                this.F.tb(this.element, this, d)
            }
            2 === this.buttonType && g.Op(this.element, "ytp-continue-watching-button");
            this.Sa("click", this.onClick);
            g.rQ(this, !0)
        },
        j6 = function(a, b) {
            e6.call(this, a, "embeds-lite-endscreen");
            this.F = a;
            this.j = b;
            this.F.tb(this.element, this, 156943);
            this.watchButton = new i6(a, 2);
            g.I(this, this.watchButton);
            this.watchButton.Ea(this.element);
            this.hide()
        },
        pgb = function(a) {
            e6.call(this, a, "subscribecard-endscreen");
            this.j = new g.V({
                G: "div",
                N: "ytp-subscribe-card",
                W: [{
                    G: "img",
                    N: "ytp-author-image",
                    X: {
                        src: "{{profilePicture}}"
                    }
                }, {
                    G: "div",
                    N: "ytp-subscribe-card-right",
                    W: [{
                        G: "div",
                        N: "ytp-author-name",
                        ra: "{{author}}"
                    }, {
                        G: "div",
                        N: "html5-subscribe-button-container"
                    }]
                }]
            });
            g.I(this, this.j);
            this.j.Ea(this.element);
            var b = a.getVideoData();
            this.subscribeButton = new g.hU("Subscribe", null, "Unsubscribe", null, !0, !1, b.ek, b.subscribed, "trailer-endscreen", null, a);
            g.I(this, this.subscribeButton);
            this.subscribeButton.Ea(this.j.Da("html5-subscribe-button-container"));
            this.S(a, "videodatachange", this.Ra);
            this.Ra();
            this.hide()
        },
        k6 = function(a) {
            var b = a.V(),
                c = g.$H || g.oK ? {
                    style: "will-change: opacity"
                } : void 0,
                d = b.C,
                e = ["ytp-videowall-still"];
            b.u && e.push("ytp-videowall-show-text");
            g.V.call(this, {
                G: "a",
                Ja: e,
                X: {
                    href: "{{url}}",
                    target: d ? b.ea : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}"
                },
                W: [{
                    G: "div",
                    N: "ytp-videowall-still-image",
                    X: {
                        style: "{{background}}"
                    }
                }, {
                    G: "span",
                    N: "ytp-videowall-still-info",
                    X: {
                        "aria-hidden": "true"
                    },
                    W: [{
                        G: "span",
                        N: "ytp-videowall-still-info-bg",
                        W: [{
                            G: "span",
                            N: "ytp-videowall-still-info-content",
                            X: c,
                            W: [{
                                    G: "span",
                                    N: "ytp-videowall-still-info-title",
                                    ra: "{{title}}"
                                },
                                {
                                    G: "span",
                                    N: "ytp-videowall-still-info-author",
                                    ra: "{{author_and_views}}"
                                }, {
                                    G: "span",
                                    N: "ytp-videowall-still-info-live",
                                    ra: "Live"
                                }, {
                                    G: "span",
                                    N: "ytp-videowall-still-info-duration",
                                    ra: "{{duration}}"
                                }
                            ]
                        }]
                    }]
                }, {
                    G: "span",
                    Ja: ["ytp-videowall-still-listlabel-regular", "ytp-videowall-still-listlabel"],
                    X: {
                        "aria-hidden": "true"
                    },
                    W: [{
                        G: "span",
                        N: "ytp-videowall-still-listlabel-icon"
                    }, "Playlist", {
                        G: "span",
                        N: "ytp-videowall-still-listlabel-length",
                        W: [" (", {
                            G: "span",
                            ra: "{{playlist_length}}"
                        }, ")"]
                    }]
                }, {
                    G: "span",
                    Ja: ["ytp-videowall-still-listlabel-mix",
                        "ytp-videowall-still-listlabel"
                    ],
                    X: {
                        "aria-hidden": "true"
                    },
                    W: [{
                        G: "span",
                        N: "ytp-videowall-still-listlabel-mix-icon"
                    }, "Mix", {
                        G: "span",
                        N: "ytp-videowall-still-listlabel-length",
                        ra: " (50+)"
                    }]
                }]
            });
            this.suggestion = null;
            this.u = d;
            this.api = a;
            this.j = new g.XH(this);
            g.I(this, this.j);
            this.Sa("click", this.onClick);
            this.Sa("keypress", this.onKeyPress);
            this.j.S(a, "videodatachange", this.onVideoDataChange);
            a.ag(this.element, this);
            this.onVideoDataChange()
        },
        l6 = function(a) {
            e6.call(this, a, "videowall-endscreen");
            var b = this;
            this.F = a;
            this.B = 0;
            this.stills = [];
            this.C = this.videoData = null;
            this.D = this.J = !1;
            this.T = null;
            this.u = new g.XH(this);
            g.I(this, this.u);
            this.I = new g.Gp(function() {
                g.Op(b.element, "ytp-show-tiles")
            }, 0);
            g.I(this, this.I);
            var c = new g.V({
                G: "button",
                Ja: ["ytp-button", "ytp-endscreen-previous"],
                X: {
                    "aria-label": "Previous"
                },
                W: [g.wQ()]
            });
            g.I(this, c);
            c.Ea(this.element);
            c.Sa("click", this.d_, this);
            this.table = new g.oQ({
                G: "div",
                N: "ytp-endscreen-content"
            });
            g.I(this, this.table);
            this.table.Ea(this.element);
            c = new g.V({
                G: "button",
                Ja: ["ytp-button", "ytp-endscreen-next"],
                X: {
                    "aria-label": "Next"
                },
                W: [g.xQ()]
            });
            g.I(this, c);
            c.Ea(this.element);
            c.Sa("click", this.c_, this);
            a.getVideoData().uf ? this.j = new c6(a, !0) : this.j = new f6(a);
            g.I(this, this.j);
            g.yS(this.player, this.j.element, 4);
            a.tb(this.element, this, 158789);
            this.hide()
        },
        m6 = function(a) {
            return g.zS(a.player) && a.ZA() && !a.C
        },
        n6 = function(a) {
            var b = a.Cf();
            b !== a.J && (a.J = b, a.player.ma("autonavvisibility"))
        },
        o6 = function(a) {
            e6.call(this, a, "watch-again-on-youtube-endscreen");
            this.watchButton = new i6(a, 1);
            g.I(this, this.watchButton);
            this.watchButton.Ea(this.element);
            g.M7a(a) && (this.j = new g.Z2(a, g.iS(a)), g.I(this, this.j), this.u = new g.V({
                G: "div",
                Ja: ["ytp-watch-again-on-youtube-endscreen-more-videos-container"],
                X: {
                    tabIndex: "-1"
                },
                W: [this.j]
            }), g.I(this, this.u), this.j.Ea(this.u.element), this.u.Ea(this.element));
            a.tb(this.element, this, 156914);
            this.hide()
        },
        tgb = function(a) {
            g.tT.call(this, a);
            var b = this;
            this.endScreen = null;
            this.u = this.j = this.B = this.C = !1;
            this.listeners = new g.XH(this);
            g.I(this, this.listeners);
            var c = a.V(),
                d = a.getVideoData();
            d = d && 0 !== d.endSeconds;
            if (g.tz(g.HK(c)) && d && !g.vS(a)) this.u = !0, this.endScreen = new j6(a, g.iS(a));
            else {
                var e;
                (c.K("shorts_mode_to_player_api") ? a.Ub() : null == (e = g.iS(a)) ? 0 : e.Ub()) ? this.endScreen = new o6(a): qgb(a) ? (this.C = !0, rgb(this), this.j ? this.endScreen = new g6(a) : this.endScreen = new l6(a)) : c.Rg ? this.endScreen = new pgb(a) : this.endScreen = new e6(a)
            }
            g.I(this, this.endScreen);
            g.yS(a, this.endScreen.element, 4);
            sgb(this);
            this.listeners.S(a, "videodatachange", this.onVideoDataChange, this);
            this.listeners.S(a, g.dE("endscreen"), function(f) {
                b.onCueRangeEnter(f)
            });
            this.listeners.S(a, g.eE("endscreen"), function(f) {
                b.onCueRangeExit(f)
            })
        },
        rgb = function(a) {
            var b = a.player.getVideoData();
            if (!b || a.j === b.mm && a.B === b.uf) return !1;
            a.j = b.mm;
            a.B = b.uf;
            return !0
        },
        qgb = function(a) {
            a = a.V();
            return a.wd && !a.Rg
        },
        sgb = function(a) {
            a.player.jf("endscreen");
            var b = a.player.getVideoData();
            b = new g.bE(Math.max(1E3 * (b.lengthSeconds - 10), 0), 0x8000000000000, {
                id: "preload",
                namespace: "endscreen"
            });
            var c = new g.bE(0x8000000000000, 0x8000000000000, {
                id: "load",
                priority: 8,
                namespace: "endscreen"
            });
            a.player.De([b, c])
        };
    g.UV.prototype.Pz = g.ba(36, function(a) {
        this.oO !== a && (this.oO = a, this.il())
    });
    g.KU.prototype.Xq = g.ba(35, function(a) {
        this.u !== a && (this.u = a, this.Ra())
    });
    g.UV.prototype.Xq = g.ba(34, function(a) {
        this.shareButton && this.shareButton.Xq(a)
    });
    g.GU.prototype.Wq = g.ba(33, function(a) {
        this.u !== a && (this.u = a, this.Ra())
    });
    g.UV.prototype.Wq = g.ba(32, function(a) {
        this.overflowButton && this.overflowButton.Wq(a)
    });
    g.ZT.prototype.RD = g.ba(31, function(a) {
        this.pO !== a && (this.pO = a, this.xp())
    });
    g.rS.prototype.hs = g.ba(5, function() {
        return this.app.hs()
    });
    g.xZ.prototype.hs = g.ba(4, function() {
        return this.getVideoData().ZR
    });
    g.x(b6, g.V);
    b6.prototype.select = function() {
        this.F.Mn(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.tB || void 0) && this.F.rb(this.element)
    };
    b6.prototype.onClick = function(a) {
        g.OT(a, this.F, this.j, this.suggestion.sessionData || void 0) && this.select()
    };
    b6.prototype.onKeyPress = function(a) {
        switch (a.keyCode) {
            case 13:
            case 32:
                g.QO(a) || (this.select(), g.RO(a))
        }
    };
    g.x(c6, g.V);
    g.k = c6.prototype;
    g.k.DE = function(a) {
        this.suggestion !== a && (this.suggestion = a, a6(this.j, a), this.playButton.updateValue("url", this.suggestion.Dk()), d6(this))
    };
    g.k.Ik = function() {
        return 0 < this.B
    };
    g.k.Xz = function() {
        this.Ik() || (this.B = Date.now(), jgb(this), igb(this.F, lgb(this)), g.Sp(this.F.getRootNode(), "countdown-running", this.Ik()))
    };
    g.k.Ov = function() {
        this.ir();
        jgb(this);
        var a = this.j.Da("ytp-autonav-endscreen-upnext-header");
        a && g.qf(a, "Up next")
    };
    g.k.ir = function() {
        this.Ik() && (this.C.stop(), this.B = 0)
    };
    g.k.select = function(a) {
        this.F.nextVideo(!1, void 0 === a ? !1 : a);
        this.ir()
    };
    g.k.IQ = function(a) {
        g.OT(a, this.F) && (a.currentTarget === this.playButton.element ? this.F.rb(this.playButton.element) : a.currentTarget === this.j.Da("ytp-autonav-endscreen-link-container") && (a = this.j.Da("ytp-autonav-endscreen-link-container"), this.F.Wa(a, !0), this.F.rb(a)), this.select())
    };
    g.k.XZ = function() {
        this.F.rb(this.cancelButton.element);
        g.tS(this.F, !0);
        this.D && this.F.Oa("innertubeCommand", this.D)
    };
    g.k.onVideoDataChange = function(a, b) {
        var c;
        this.D = null == (c = b.q1) ? void 0 : c.command
    };
    g.k.G5 = function(a) {
        if (mgb(this)) {
            var b = this.F.getVideoData().watchToWatchTransitionRenderer,
                c = null == b ? void 0 : b.fromColorPaletteDark;
            b = null == b ? void 0 : b.toColorPaletteDark;
            if (c && b) {
                var d = this.element;
                d.style.setProperty("--w2w-start-background-color", g.qR(c.surgeColor));
                d.style.setProperty("--w2w-start-primary-text-color", g.qR(c.primaryTitleColor));
                d.style.setProperty("--w2w-start-secondary-text-color", g.qR(c.secondaryTitleColor));
                d.style.setProperty("--w2w-end-background-color", g.qR(b.surgeColor));
                d.style.setProperty("--w2w-end-primary-text-color", g.qR(b.primaryTitleColor));
                d.style.setProperty("--w2w-end-secondary-text-color", g.qR(b.secondaryTitleColor));
                d.style.setProperty("--w2w-animation-duration", a + "ms")
            }
            g.Sp(this.element, "ytp-w2w-animate", !0)
        }
    };
    g.k.WZ = function(a) {
        this.F.K("web_autonav_color_transition") && 2 !== a && g.Sp(this.element, "ytp-w2w-animate", !1)
    };
    g.k.HQ = function() {
        var a = this.F.Cf();
        this.I && this.zb !== a && g.rQ(this, a);
        d6(this);
        this.F.Wa(this.container.element, a);
        this.F.Wa(this.cancelButton.element, a);
        this.F.Wa(this.j.Da("ytp-autonav-endscreen-link-container"), a);
        this.F.Wa(this.playButton.element, a)
    };
    g.k.Xg = function(a) {
        return 400 > a.width || 459 > a.height
    };
    g.x(e6, g.V);
    g.k = e6.prototype;
    g.k.create = function() {
        this.created = !0
    };
    g.k.destroy = function() {
        this.created = !1
    };
    g.k.ZA = function() {
        return !1
    };
    g.k.Cf = function() {
        return !1
    };
    g.k.cV = function() {
        return !1
    };
    g.x(f6, g.V);
    g.k = f6.prototype;
    g.k.lF = function() {
        this.notification && (this.C.stop(), this.Hc(this.B), this.B = null, this.notification.close(), this.notification = null)
    };
    g.k.DE = function(a) {
        this.suggestion = a;
        a6(this, a, "hqdefault.jpg")
    };
    g.k.JQ = function() {
        g.rQ(this, this.api.Cf());
        this.api.Wa(this.element, this.api.Cf());
        this.api.Wa(this.Da("ytp-upnext-autoplay-icon"), this.api.Cf());
        this.cancelButton && this.api.Wa(this.cancelButton.element, this.api.Cf())
    };
    g.k.C6 = function() {
        window.focus();
        this.lF()
    };
    g.k.Xz = function(a) {
        var b = this;
        this.Ik() || (g.vC("a11y-announce", "Up Next " + this.suggestion.title), this.u = (0, g.NA)(), this.j = new g.Gp(function() {
            ogb(b, a)
        }, 25), ogb(this, a), igb(this.api, ngb(this, a)));
        g.Qp(this.element, "ytp-upnext-autoplay-paused")
    };
    g.k.hide = function() {
        g.V.prototype.hide.call(this)
    };
    g.k.Ik = function() {
        return !!this.j
    };
    g.k.Ov = function() {
        this.ir();
        this.u = (0, g.NA)();
        ogb(this);
        g.Op(this.element, "ytp-upnext-autoplay-paused")
    };
    g.k.ir = function() {
        this.Ik() && (this.j.dispose(), this.j = null)
    };
    g.k.select = function(a) {
        a = void 0 === a ? !1 : a;
        if (this.api.V().K("autonav_notifications") && a && window.Notification && "function" === typeof document.hasFocus) {
            var b = Notification.permission;
            "default" === b ? Notification.requestPermission() : "granted" !== b || document.hasFocus() || (this.lF(), this.notification = new Notification("Up Next", {
                body: this.suggestion.title,
                icon: this.suggestion.xg()
            }), this.B = this.S(this.notification, "click", this.C6), this.C.start())
        }
        this.ir();
        this.api.nextVideo(!1, a)
    };
    g.k.ZZ = function(a) {
        !g.lf(this.cancelButton.element, g.OO(a)) && g.OT(a, this.api) && (this.api.Cf() && this.api.rb(this.Da("ytp-upnext-autoplay-icon")), this.select())
    };
    g.k.YZ = function() {
        this.api.Cf() && this.cancelButton && this.api.rb(this.cancelButton.element);
        g.tS(this.api, !0)
    };
    g.k.t6 = function(a) {
        this.api.getPresentingPlayerType();
        this.show();
        this.Xz(a)
    };
    g.k.u6 = function() {
        this.api.getPresentingPlayerType();
        this.ir();
        this.hide()
    };
    g.k.qa = function() {
        this.ir();
        this.lF();
        g.V.prototype.qa.call(this)
    };
    g.x(g6, e6);
    g.k = g6.prototype;
    g.k.create = function() {
        e6.prototype.create.call(this);
        this.C.S(this.player, "appresize", this.AA);
        this.C.S(this.player, "onVideoAreaChange", this.AA);
        this.C.S(this.player, "videodatachange", this.onVideoDataChange);
        this.C.S(this.player, "autonavchange", this.KQ);
        this.C.S(this.player, "autonavcancel", this.a_);
        this.onVideoDataChange()
    };
    g.k.show = function() {
        e6.prototype.show.call(this);
        (this.I || this.B && this.B !== this.videoData.clientPlaybackNonce) && g.tS(this.player, !1);
        g.zS(this.player) && this.ZA() && !this.B ? (h6(this), 2 === this.videoData.autonavState ? 3 === this.player.getVisibilityState() ? this.j.select(!0) : this.j.Xz() : 3 === this.videoData.autonavState && this.j.Ov()) : (g.tS(this.player, !0), h6(this));
        this.AA()
    };
    g.k.hide = function() {
        e6.prototype.hide.call(this);
        this.j.Ov();
        h6(this)
    };
    g.k.AA = function() {
        var a = this.player.Ck(!0, this.player.isFullscreen());
        h6(this);
        d6(this.u);
        g.Sp(this.element, "ytp-autonav-cancelled-small-mode", this.Xg(a));
        g.Sp(this.element, "ytp-autonav-cancelled-tiny-mode", this.yG(a));
        g.Sp(this.element, "ytp-autonav-cancelled-mini-mode", 400 >= a.width || 360 >= a.height);
        this.overlay && g.Pm(this.overlay.element, {
            width: a.width + "px"
        });
        if (!this.D)
            for (a = 0; a < this.videos.length; a++) g.Sp(this.videos[a].element, "ytp-suggestion-card-with-margin", 1 === a % 2)
    };
    g.k.onVideoDataChange = function() {
        var a = this.player.getVideoData();
        if (this.videoData !== a && a) {
            this.videoData = a;
            if ((a = this.videoData.suggestions) && a.length || this.player.K("web_player_autonav_empty_suggestions_fix")) {
                var b = g.CM(this.videoData);
                b && (this.j.DE(b), this.j !== this.u && this.u.DE(b))
            }
            if (a && a.length)
                for (b = 0; b < ugb.length; ++b) {
                    var c = ugb[b];
                    if (a && a[c]) {
                        this.videos[b] = new b6(this.player);
                        var d = this.videos[b];
                        c = a[c];
                        d.suggestion !== c && (d.suggestion = c, a6(d, c));
                        g.I(this, this.videos[b]);
                        this.videos[b].Ea(this.J.element)
                    }
                }
            this.AA()
        }
    };
    g.k.KQ = function(a) {
        1 === a ? (this.I = !1, this.B = this.videoData.clientPlaybackNonce, this.j.ir(), this.zb && this.AA()) : (this.I = !0, this.Cf() && (2 === a ? this.j.Xz() : 3 === a && this.j.Ov()))
    };
    g.k.a_ = function(a) {
        a ? this.KQ(1) : (this.B = null, this.I = !1)
    };
    g.k.ZA = function() {
        return 1 !== this.videoData.autonavState
    };
    g.k.Xg = function(a) {
        return (910 > a.width || 459 > a.height) && !this.yG(a) && !(400 >= a.width || 360 >= a.height)
    };
    g.k.yG = function(a) {
        return 800 > a.width && !(400 >= a.width || 360 >= a.height)
    };
    g.k.Cf = function() {
        return this.zb && g.zS(this.player) && this.ZA() && !this.B
    };
    var ugb = [1, 3, 2, 4];
    g.x(i6, g.V);
    g.k = i6.prototype;
    g.k.onClick = function(a) {
        this.F.K("web_player_log_click_before_generating_ve_conversion_params") && this.F.rb(this.element);
        this.j ? this.F.Oa("innertubeCommand", g.S(this.j.onTap, g.kQ)) : g.PT(this.getVideoUrl(), this.F, a);
        this.F.K("web_player_log_click_before_generating_ve_conversion_params") || this.F.rb(this.element)
    };
    g.k.getVideoUrl = function() {
        var a = !0;
        switch (this.buttonType) {
            case 1:
                a = !0;
                break;
            case 2:
                a = !1
        }
        a = this.F.getVideoUrl(a, !1, !1, !0);
        var b = this.F.V();
        if (g.qK(b) || g.zK(b)) {
            var c = {};
            b.Aa && g.qK(b) && g.$R(c, b.loaderUrl);
            g.qK(b) && g.gS(this.F, "addEmbedsConversionTrackingParams", [c]);
            a: {
                switch (this.buttonType) {
                    case 2:
                        b = "emb_ytp_continue_watching";
                        break a
                }
                b = "emb_ytp_watch_again"
            }
            g.ZR(c, b);
            a = g.Xi(a, c)
        }
        return a
    };
    g.k.Wa = function() {
        this.F.Wa(this.element, this.zb && this.ea)
    };
    g.k.show = function() {
        g.V.prototype.show.call(this);
        this.Wa()
    };
    g.k.hide = function() {
        g.V.prototype.hide.call(this);
        this.Wa()
    };
    g.k.ac = function(a) {
        g.V.prototype.ac.call(this, a);
        this.Wa()
    };
    g.x(j6, e6);
    j6.prototype.show = function() {
        3 !== this.player.getPlayerState() && (e6.prototype.show.call(this), this.j.Pz(!0), this.j.Xq(!0), this.F.V().lm || this.j.Wq(!0), this.F.Wa(this.element, !0), this.watchButton.ac(!0))
    };
    j6.prototype.hide = function() {
        e6.prototype.hide.call(this);
        this.j.Pz(!1);
        this.j.Xq(!1);
        this.j.Wq(!1);
        this.F.Wa(this.element, !1);
        this.watchButton.ac(!1)
    };
    g.x(pgb, e6);
    pgb.prototype.Ra = function() {
        var a = this.player.getVideoData();
        this.j.update({
            profilePicture: a.profilePicture,
            author: a.author
        });
        this.subscribeButton.channelId = a.ek;
        var b = this.subscribeButton;
        a.subscribed ? b.j() : b.u()
    };
    g.x(k6, g.V);
    k6.prototype.select = function() {
        this.api.Mn(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.tB || void 0) && this.api.rb(this.element)
    };
    k6.prototype.onClick = function(a) {
        if (g.qK(this.api.V()) && this.api.K("web_player_log_click_before_generating_ve_conversion_params")) {
            this.api.rb(this.element);
            var b = this.suggestion.Dk(),
                c = {};
            g.hJa(this.api, c, "emb_rel_end");
            b = g.Xi(b, c);
            g.PT(b, this.api, a)
        } else g.OT(a, this.api, this.u, this.suggestion.sessionData || void 0) && this.select()
    };
    k6.prototype.onKeyPress = function(a) {
        switch (a.keyCode) {
            case 13:
            case 32:
                g.QO(a) || (this.select(), g.RO(a))
        }
    };
    k6.prototype.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.V();
        this.u = a.rd ? !1 : b.C
    };
    g.x(l6, e6);
    g.k = l6.prototype;
    g.k.create = function() {
        e6.prototype.create.call(this);
        var a = this.player.getVideoData();
        a && (this.videoData = a);
        this.Ep();
        this.u.S(this.player, "appresize", this.Ep);
        this.u.S(this.player, "onVideoAreaChange", this.Ep);
        this.u.S(this.player, "videodatachange", this.onVideoDataChange);
        this.u.S(this.player, "autonavchange", this.jJ);
        this.u.S(this.player, "autonavcancel", this.b_);
        a = this.videoData.autonavState;
        a !== this.T && this.jJ(a);
        this.u.S(this.element, "transitionend", this.Q7)
    };
    g.k.destroy = function() {
        g.Oz(this.u);
        g.ib(this.stills);
        this.stills = [];
        e6.prototype.destroy.call(this);
        g.Qp(this.element, "ytp-show-tiles");
        this.I.stop();
        this.T = this.videoData.autonavState
    };
    g.k.ZA = function() {
        return 1 !== this.videoData.autonavState
    };
    g.k.show = function() {
        var a = this.zb;
        e6.prototype.show.call(this);
        g.Qp(this.element, "ytp-show-tiles");
        this.player.V().u ? g.Ip(this.I) : this.I.start();
        (this.D || this.C && this.C !== this.videoData.clientPlaybackNonce) && g.tS(this.player, !1);
        m6(this) ? (n6(this), 2 === this.videoData.autonavState ? 3 === this.player.getVisibilityState() ? this.j.select(!0) : this.j.Xz() : 3 === this.videoData.autonavState && this.j.Ov()) : (g.tS(this.player, !0), n6(this));
        a !== this.zb && this.player.Wa(this.element, !0)
    };
    g.k.hide = function() {
        var a = this.zb;
        e6.prototype.hide.call(this);
        this.j.Ov();
        n6(this);
        a !== this.zb && this.player.Wa(this.element, !1)
    };
    g.k.Q7 = function(a) {
        g.OO(a) === this.element && this.Ep()
    };
    g.k.Ep = function() {
        var a, b, c, d;
        var e = (null == (a = this.videoData) ? 0 : null == (b = a.suggestions) ? 0 : b.length) ? null == (c = this.videoData) ? void 0 : c.suggestions : [null == (d = this.videoData) ? void 0 : g.CM(d)];
        if (e.length) {
            g.Op(this.element, "ytp-endscreen-paginate");
            var f = this.F.Ck(!0, this.F.isFullscreen());
            if (a = g.iS(this.F)) a = a.zg() ? 48 : 32, f.width -= 2 * a;
            var h = f.width / f.height;
            d = 96 / 54;
            b = a = 2;
            var l = Math.max(f.width / 96, 2),
                m = Math.max(f.height / 54, 2);
            c = e.length;
            var n = Math.pow(2, 2);
            var p = c * n + (Math.pow(2, 2) - n);
            p += Math.pow(2, 2) -
                n;
            for (p -= n; 0 < p && (a < l || b < m);) {
                var q = a / 2,
                    t = b / 2,
                    w = a <= l - 2 && p >= t * n,
                    z = b <= m - 2 && p >= q * n;
                if ((q + 1) / t * d / h > h / (q / (t + 1) * d) && z) p -= q * n, b += 2;
                else if (w) p -= t * n, a += 2;
                else if (z) p -= q * n, b += 2;
                else break
            }
            d = !1;
            p >= 3 * n && 6 >= c * n - p && (4 <= b || 4 <= a) && (d = !0);
            n = 96 * a;
            p = 54 * b;
            h = n / p < h ? f.height / p : f.width / n;
            h = Math.min(h, 2);
            n = Math.floor(Math.min(f.width, n * h));
            p = Math.floor(Math.min(f.height, p * h));
            f = this.table.element;
            f.ariaLive = "polite";
            g.Zm(f, n, p);
            g.Pm(f, {
                marginLeft: n / -2 + "px",
                marginTop: p / -2 + "px"
            });
            this.j.DE(g.CM(this.videoData));
            this.j instanceof
            c6 && d6(this.j);
            g.Sp(this.element, "ytp-endscreen-takeover", m6(this));
            n6(this);
            n += 4;
            p += 4;
            h = 0;
            f.ariaBusy = "true";
            for (l = 0; l < a; l++)
                for (m = 0; m < b; m++)
                    if (q = h, w = 0, d && l >= a - 2 && m >= b - 2 ? w = 1 : 0 === m % 2 && 0 === l % 2 && (2 > m && 2 > l ? 0 === m && 0 === l && (w = 2) : w = 2), q = g.se(q + this.B, c), 0 !== w) {
                        t = this.stills[h];
                        t || (t = new k6(this.player), this.stills[h] = t, f.appendChild(t.element));
                        z = Math.floor(p * m / b);
                        var C = Math.floor(n * l / a),
                            G = Math.floor(p * (m + w) / b) - z - 4,
                            O = Math.floor(n * (l + w) / a) - C - 4;
                        g.Vm(t.element, C, z);
                        g.Zm(t.element, O, G);
                        g.Pm(t.element, "transitionDelay",
                            (m + l) / 20 + "s");
                        g.Sp(t.element, "ytp-videowall-still-mini", 1 === w);
                        g.Sp(t.element, "ytp-videowall-still-large", 2 < w);
                        w = Math.max(O, G);
                        g.Sp(t.element, "ytp-videowall-still-round-large", 256 <= w);
                        g.Sp(t.element, "ytp-videowall-still-round-medium", 96 < w && 256 > w);
                        g.Sp(t.element, "ytp-videowall-still-round-small", 96 >= w);
                        q = e[q];
                        t.suggestion !== q && (t.suggestion = q, w = t.api.V(), z = g.Np(t.element, "ytp-videowall-still-large") ? "hqdefault.jpg" : "mqdefault.jpg", a6(t, q, z), g.qK(w) && !t.api.K("web_player_log_click_before_generating_ve_conversion_params") &&
                            (z = q.Dk(), C = {}, w.Aa && g.$R(C, w.loaderUrl), g.gS(t.api, "addEmbedsConversionTrackingParams", [C]), z = g.Xi(z, g.ZR(C, "emb_rel_end")), t.updateValue("url", z)), (q = (q = q.sessionData) && q.itct) && t.api.pg(t.element, q));
                        h++
                    }
            f.ariaBusy = "false";
            g.Sp(this.element, "ytp-endscreen-paginate", h < c);
            for (e = this.stills.length - 1; e >= h; e--) a = this.stills[e], g.jf(a.element), g.gb(a);
            this.stills.length = h
        }
    };
    g.k.onVideoDataChange = function() {
        var a = this.player.getVideoData();
        this.videoData !== a && (this.B = 0, this.videoData = a, this.Ep())
    };
    g.k.c_ = function() {
        this.B += this.stills.length;
        this.Ep()
    };
    g.k.d_ = function() {
        this.B -= this.stills.length;
        this.Ep()
    };
    g.k.cV = function() {
        return this.j.Ik()
    };
    g.k.jJ = function(a) {
        1 === a ? (this.D = !1, this.C = this.videoData.clientPlaybackNonce, this.j.ir(), this.zb && this.Ep()) : (this.D = !0, this.zb && m6(this) && (2 === a ? this.j.Xz() : 3 === a && this.j.Ov()))
    };
    g.k.b_ = function(a) {
        if (a) {
            for (a = 0; a < this.stills.length; a++) this.F.Wa(this.stills[a].element, !0);
            this.jJ(1)
        } else this.C = null, this.D = !1;
        this.Ep()
    };
    g.k.Cf = function() {
        return this.zb && m6(this)
    };
    g.x(o6, e6);
    o6.prototype.show = function() {
        if (3 !== this.player.getPlayerState()) {
            e6.prototype.show.call(this);
            var a = this.u;
            if (a) {
                var b = 0 < this.j.suggestionData.length;
                g.Sp(this.element, "ytp-shorts-branded-ui", b);
                b ? a.show() : a.hide()
            }
            var c;
            null == (c = g.iS(this.player)) || c.RD(!0);
            this.player.Wa(this.element, !0);
            this.watchButton.ac(!0)
        }
    };
    o6.prototype.hide = function() {
        e6.prototype.hide.call(this);
        var a;
        null == (a = g.iS(this.player)) || a.RD(!1);
        this.player.Wa(this.element, !1);
        this.watchButton.ac(!1)
    };
    g.x(tgb, g.tT);
    g.k = tgb.prototype;
    g.k.lw = function() {
        var a;
        if ((this.player.V().K("shorts_mode_to_player_api") ? this.player.Ub() : null == (a = g.iS(this.player)) ? 0 : a.Ub()) || this.u) return !0;
        a = this.player.getVideoData();
        var b;
        var c = !!((null == a ? 0 : g.CM(a)) || (null == a ? 0 : null == (b = a.suggestions) ? 0 : b.length));
        b = !qgb(this.player) || c;
        c = a.dj || g.zK(a.B);
        var d = this.player.EB();
        a = a.mutedAutoplay;
        return b && !c && !d && !a
    };
    g.k.Cf = function() {
        return this.endScreen.Cf()
    };
    g.k.s4 = function() {
        return this.Cf() ? this.endScreen.cV() : !1
    };
    g.k.qa = function() {
        this.player.jf("endscreen");
        g.tT.prototype.qa.call(this)
    };
    g.k.load = function() {
        var a = this.player.getVideoData();
        var b = a.transitionEndpointAtEndOfStream;
        if (b && b.videoId) {
            var c = this.player.xb().gf.get("heartbeat"),
                d = g.CM(a);
            !d || b.videoId !== d.videoId || a.xY ? (this.player.Mn(b.videoId, void 0, void 0, !0, !0, b), c && c.FG("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END", "HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"), a = !0) : a = !1
        } else a = !1;
        a || (g.tT.prototype.load.call(this), this.endScreen.show())
    };
    g.k.unload = function() {
        g.tT.prototype.unload.call(this);
        this.endScreen.hide();
        this.endScreen.destroy()
    };
    g.k.onCueRangeEnter = function(a) {
        this.lw() && (this.endScreen.created || this.endScreen.create(), "load" === a.getId() && this.load())
    };
    g.k.onCueRangeExit = function(a) {
        "load" === a.getId() && this.loaded && this.unload()
    };
    g.k.onVideoDataChange = function() {
        sgb(this);
        this.C && rgb(this) && (this.endScreen && (this.endScreen.hide(), this.endScreen.created && this.endScreen.destroy(), this.endScreen.dispose()), this.j ? this.endScreen = new g6(this.player) : this.endScreen = new l6(this.player), g.I(this, this.endScreen), g.yS(this.player, this.endScreen.element, 4))
    };
    g.sT("endscreen", tgb);
})(_yt_player);