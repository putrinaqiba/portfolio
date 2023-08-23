(window.webpackJsonp = window.webpackJsonp || []).push([[6, 90, 93, 101, 140, 141, 142], {
    1012: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(68)
            , o = r(0)
            , l = r(1)
            , d = (r(11),
            r(20),
            r(57),
            r(48),
            r(712))
            , m = r(610)
            , c = function() {
            function t(e) {
                Object(o.a)(this, t),
                    this.wrapper = e,
                    this.awards = e.children,
                    this.options = {
                        rootMargin: "-50% 0px -50% 0px"
                    },
                    this.createObserver = this.createObserver.bind(this),
                    this.createObserver()
            }
            return Object(l.a)(t, [{
                key: "createObserver",
                value: function() {
                    var t = this;
                    this.observer = new IntersectionObserver(this.handler,this.options),
                        Array.from(this.awards).forEach((function(e) {
                                t.observer.observe(e)
                            }
                        ))
                }
            }, {
                key: "handler",
                value: function(t, e) {
                    t.forEach((function(t) {
                            t.isIntersecting ? t.target.classList.add("active") : t.target.classList.remove("active")
                        }
                    ))
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    Array.from(this.awards).forEach((function(e) {
                            t.observer.unobserve(e)
                        }
                    ))
                }
            }, {
                key: "observe",
                value: function(t) {
                    var e = this;
                    this.destroy(),
                        this.awards = t,
                        Array.from(this.awards).forEach((function(t) {
                                e.observer.observe(t)
                            }
                        ))
                }
            }]),
                t
        }()
            , f = {
            components: {
                MainAward: d.default
            },
            mixins: [m.a],
            props: {
                awards: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    activeIndex: 0,
                    observer: null
                }
            },
            mounted: function() {
                var t = this;
                this.$nextTick((function() {
                        t.animateAwards()
                    }
                ))
            },
            beforeDestroy: function() {
                this.observer && this.observer.destroy()
            },
            methods: {
                setupAnimation: function() {
                    var t = this
                        , e = this.$refs.section.querySelectorAll(".main-awards__item");
                    Object(n.a)(e).forEach((function(e) {
                            var r = t.$gsap.timeline({
                                scrollTrigger: {
                                    trigger: e
                                }
                            }).from(e, {
                                transition: "unset",
                                autoAlpha: 0,
                                y: 50,
                                duration: .5,
                                clearProps: "all"
                            });
                            t.timelines.push(r),
                                t.scrollTriggers.push(r.scrollTrigger)
                        }
                    ))
                },
                animateAwards: function() {
                    if (window.innerWidth < 1024)
                        return !1;
                    var section = this.$refs.section;
                    this.observer = new c(section)
                }
            }
        }
            , h = (r(894),
            r(13))
            , component = Object(h.a)(f, (function() {
                var t = this
                    , e = t.$createElement
                    , r = t._self._c || e;
                return r("div", {
                    ref: "section",
                    staticClass: "main-awards"
                }, t._l(t.awards, (function(t) {
                        return r("MainAward", {
                            key: t.id,
                            staticClass: "main-awards__item",
                            attrs: {
                                description: t.description,
                                count: t.count,
                                logo: t.logo
                            }
                        })
                    }
                )), 1)
            }
        ), [], !1, null, "40d54e29", null);
        e.default = component.exports;
        installComponents(component, {
            MainAward: r(712).default
        })
    },
    1013: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(624)
            , o = r(625)
            , l = r(626)
            , d = r(612)
            , m = r(610)
            , c = {
            components: {
                LabelSmallBlock: d.default,
                TheTitle: n.default,
                TheSubtitle: o.default,
                TheText: l.default
            },
            mixins: [m.a],
            props: {
                title: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                subtitle: {
                    type: String,
                    default: ""
                },
                text: {
                    type: String,
                    default: ""
                },
                labels: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            methods: {
                setupAnimation: function() {
                    var section = this.$refs.section
                        , t = section.querySelectorAll(".text-line__inner")
                        , text = section.querySelector(".description-2__text")
                        , e = this.$gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start: function() {
                                return "top bottom"
                            }
                        }
                    }).from(t, {
                        stagger: .1,
                        yPercent: 105,
                        duration: .5
                    }).from(text, {
                        yPercent: 50,
                        duration: .5,
                        autoAlpha: 0
                    }, "-=0.2");
                    this.timelines.push(e),
                        this.scrollTriggers.push(e.scrollTrigger)
                }
            }
        }
            , f = (r(896),
            r(13))
            , component = Object(f.a)(c, (function() {
                var t = this
                    , e = t.$createElement
                    , r = t._self._c || e;
                return r("div", {
                    ref: "section",
                    staticClass: "description-2 grid"
                }, [r("TheTitle", {
                    staticClass: "description-2__title",
                    attrs: {
                        texts: t.title
                    }
                }), t._v(" "), r("TheSubtitle", {
                    staticClass: "description-2__subtitle",
                    attrs: {
                        text: t.subtitle
                    }
                }), t._v(" "), r("TheText", {
                    staticClass: "description-2__text",
                    attrs: {
                        text: t.text
                    }
                }, t._l(t.labels, (function(label, t) {
                        return r("LabelSmallBlock", {
                            key: t,
                            staticClass: "no-cursor",
                            attrs: {
                                text: label
                            }
                        })
                    }
                )), 1), t._v(" "), t._t("button")], 2)
            }
        ), [], !1, null, "2d15bd09", null);
        e.default = component.exports;
        installComponents(component, {
            TheTitle: r(624).default,
            TheSubtitle: r(625).default,
            LabelSmallBlock: r(612).default,
            TheText: r(626).default
        })
    },
    1014: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
            data: function() {
                return {
                    tlBlob1: null,
                    tlBlob2: null,
                    tlBlob3: null
                }
            },
            mounted: function() {
                var t = this;
                this.$nextTick((function() {
                        t.animateBlob1(),
                            t.animateBlob2(),
                            t.animateBlob3()
                    }
                ))
            },
            beforeDestroy: function() {
                this.tlBlob1 && (this.tlBlob1.kill(),
                    this.tlBlob1 = null),
                this.tlBlob2 && (this.tlBlob2.kill(),
                    this.tlBlob2 = null),
                this.tlBlob3 && (this.tlBlob3.kill(),
                    this.tlBlob3 = null)
            },
            methods: {
                animateBlob1: function() {
                    var t = this
                        , e = this.$refs.blob1;
                    this.tlBlob1 && (this.tlBlob1.kill(),
                        this.tlBlob1 = null),
                        this.tlBlob2 = this.$gsap.timeline({
                            onComplete: function() {
                                t.animateBlob2()
                            }
                        }).to(e, {
                            x: 400 * Math.random() - 200,
                            y: 400 * Math.random() - 200,
                            duration: 5 + 2 * Math.random(),
                            scale: .9 + .4 * Math.random(),
                            rotate: 360 * Math.random(),
                            ease: "power1.inOut"
                        })
                },
                animateBlob2: function() {
                    var t = this
                        , e = this.$refs.blob2;
                    this.tlBlob2 && (this.tlBlob2.kill(),
                        this.tlBlob2 = null),
                        this.tlBlob2 = this.$gsap.timeline({
                            onComplete: function() {
                                t.animateBlob2()
                            }
                        }).to(e, {
                            x: 80 * Math.random() - 20,
                            y: 80 * Math.random() - 20,
                            duration: 5 + 2 * Math.random(),
                            scale: .6 + .4 * Math.random(),
                            ease: "power1.inOut"
                        })
                },
                animateBlob3: function() {
                    var t = this
                        , e = this.$refs.blob3;
                    this.tlBlob3 && (this.tlBlob3.kill(),
                        this.tlBlob3 = null),
                        this.tlBlob3 = this.$gsap.timeline({
                            onComplete: function() {
                                t.animateBlob3()
                            }
                        }).to(e, {
                            x: 100 * Math.random() - 40,
                            y: 100 * Math.random() - 40,
                            duration: 6 + 4 * Math.random(),
                            scale: .6 + .4 * Math.random(),
                            ease: "power1.inOut"
                        })
                }
            }
        }
            , o = (r(898),
            r(13))
            , component = Object(o.a)(n, (function() {
                var t = this
                    , e = t.$createElement
                    , r = t._self._c || e;
                return r("div", {
                    staticClass: "main-block-3__bg-lg"
                }, [r("div", {
                    staticClass: "blob-1-wrapper"
                }, [r("svg", {
                    ref: "blob1",
                    staticClass: "blob-1",
                    attrs: {
                        viewBox: "0 0 200 200",
                        xmlns: "http://www.w3.org/2000/svg",
                        filter: "url(#blur-1)"
                    }
                }, [r("defs", [r("filter", {
                    attrs: {
                        id: "blur-1"
                    }
                }, [r("feGaussianBlur", {
                    attrs: {
                        in: "FillPaint",
                        stdDeviation: "3"
                    }
                })], 1)]), t._v(" "), r("path", {
                    attrs: {
                        fill: "#B2F366",
                        d: "M56.2,-62.2C71.7,-53.9,82.4,-35.2,84.6,-16C86.7,3.2,80.2,22.9,70.2,40.8C60.2,58.7,46.6,74.8,30.5,78.3C14.4,81.8,-4.3,72.6,-21.8,64.3C-39.3,56,-55.5,48.7,-62.2,36.3C-68.8,23.9,-66,6.4,-61.2,-9.1C-56.5,-24.5,-49.8,-37.9,-39.2,-47.1C-28.7,-56.2,-14.3,-61.1,3,-64.7C20.3,-68.2,40.6,-70.5,56.2,-62.2Z",
                        transform: "translate(100 100)"
                    }
                }, [r("animate", {
                    attrs: {
                        attributeName: "d",
                        values: "\n                  M58.7,-33.3C72.5,-10.1,77.5,18.8,66.3,39.4C55,60,27.5,72.4,0.7,72C-26.1,71.6,-52.3,58.4,-66.2,36.3C-80.1,14.1,-81.8,-17,-68.7,-39.9C-55.6,-62.8,-27.8,-77.4,-2.7,-75.9C22.5,-74.3,45,-56.6,58.7,-33.3Z;\n                  M59.1,-34.3C70.9,-13.6,71,13.7,59.2,33.8C47.4,53.9,23.7,66.7,0.5,66.4C-22.7,66.1,-45.3,52.7,-59.2,31.4C-73,10.2,-78.1,-18.9,-66.7,-39.3C-55.4,-59.7,-27.7,-71.4,-2,-70.3C23.6,-69.1,47.2,-55,59.1,-34.3Z;\n                M69.5,-40.9C82.9,-16.8,81.8,14.9,67.8,35.7C53.8,56.6,26.9,66.6,0.7,66.2C-25.5,65.8,-50.9,54.9,-63.3,35C-75.8,15.1,-75.1,-14,-62.4,-37.7C-49.7,-61.4,-24.8,-79.7,1.6,-80.6C28,-81.5,56,-65,69.5,-40.9Z;\n                  M62,-37.6C73,-16.6,69.7,10.8,57,31.2C44.2,51.6,22.1,64.8,0,64.8C-22,64.8,-44,51.5,-58.3,30.2C-72.5,9,-79,-20.2,-68,-41.1C-57,-62,-28.5,-74.6,-1.5,-73.7C25.5,-72.9,50.9,-58.5,62,-37.6Z;\n                  M60.3,-33.5C74.5,-10.3,79.8,19.4,68.3,39.7C56.7,59.9,28.4,70.7,0.2,70.6C-28,70.5,-55.9,59.5,-69.7,37.9C-83.5,16.4,-83,-15.7,-69.1,-38.8C-55.1,-61.9,-27.5,-76,-2.2,-74.7C23.1,-73.4,46.2,-56.7,60.3,-33.5Z;\n                  M58.7,-33.3C72.5,-10.1,77.5,18.8,66.3,39.4C55,60,27.5,72.4,0.7,72C-26.1,71.6,-52.3,58.4,-66.2,36.3C-80.1,14.1,-81.8,-17,-68.7,-39.9C-55.6,-62.8,-27.8,-77.4,-2.7,-75.9C22.5,-74.3,45,-56.6,58.7,-33.3Z\n                ",
                        dur: "30s",
                        begin: "0s",
                        repeatCount: "indefinite",
                        keySplines: "\n            0.2 0.1 0.8 0.9;\n            0.2 0.1 0.8 0.9;\n            0.2 0.1 0.8 0.9;\n            0.2 0.1 0.8 0.9;\n            0.2 0.1 0.8 0.9",
                        keyTimes: "0.0; 0.16; 0.32; 0.48; 0.64; 1.0"
                    }
                })])])]), t._v(" "), r("svg", {
                    ref: "blob2",
                    staticClass: "blob-2",
                    attrs: {
                        viewBox: "0 0 200 200",
                        xmlns: "http://www.w3.org/2000/svg",
                        filter: "url(#blur-2)"
                    }
                }, [r("defs", [r("filter", {
                    attrs: {
                        id: "blur-2"
                    }
                }, [r("feGaussianBlur", {
                    attrs: {
                        in: "FillPaint",
                        stdDeviation: "7"
                    }
                })], 1)]), t._v(" "), r("path", {
                    attrs: {
                        fill: "#B2F366",
                        d: "M70.1,-23.9C77.6,0.3,61.4,31.2,37,48.3C12.6,65.4,-19.8,68.6,-41,53.9C-62.1,39.1,-72,6.3,-63.2,-19.7C-54.5,-45.6,-27.3,-64.6,2,-65.2C31.3,-65.9,62.6,-48.2,70.1,-23.9Z",
                        transform: "translate(100 100)"
                    }
                })]), t._v(" "), r("div", {
                    staticClass: "blob-3-wrapper"
                }, [r("svg", {
                    ref: "blob3",
                    staticClass: "blob-3",
                    attrs: {
                        viewBox: "0 0 200 200",
                        xmlns: "http://www.w3.org/2000/svg",
                        filter: "url(#blur-3)"
                    }
                }, [r("filter", {
                    attrs: {
                        id: "blur-3"
                    }
                }, [r("feGaussianBlur", {
                    attrs: {
                        in: "FillPaint",
                        stdDeviation: "15"
                    }
                })], 1), t._v(" "), r("path", {
                    attrs: {
                        fill: "#B2F366",
                        d: "M72.5,-21.4C82,5.8,69.6,42.2,45,59.6C20.3,76.9,-16.5,75.2,-40.8,57.3C-65.1,39.4,-76.8,5.3,-67.9,-21C-59,-47.2,-29.5,-65.7,1,-66C31.5,-66.3,62.9,-48.5,72.5,-21.4Z",
                        transform: "translate(100 100)"
                    }
                }, [r("animate", {
                    attrs: {
                        attributeName: "d",
                        values: "\n                M72.5,-21.4C82,5.8,69.6,42.2,45,59.6C20.3,76.9,-16.5,75.2,-40.8,57.3C-65.1,39.4,-76.8,5.3,-67.9,-21C-59,-47.2,-29.5,-65.7,1,-66C31.5,-66.3,62.9,-48.5,72.5,-21.4Z;\n                M70.9,-26C78.7,0.7,62.5,32.2,37.9,49.5C13.3,66.7,-19.8,69.7,-40.4,54.9C-61,40.1,-69.1,7.5,-60.3,-20.7C-51.5,-48.8,-25.7,-72.6,2.9,-73.6C31.6,-74.5,63.2,-52.7,70.9,-26Z;\n               M69.5,-23.4C77,0.8,61.3,31.7,36.7,49.3C12.1,66.8,-21.3,71.1,-41.4,56.6C-61.4,42.1,-68.2,8.9,-59.1,-17.4C-49.9,-43.8,-25,-63.2,3,-64.1C30.9,-65.1,61.9,-47.6,69.5,-23.4Z;\n                M67.9,-20.9C77.6,7.8,67.9,44,44,61.6C20.1,79.2,-18.1,78.3,-42.8,60.1C-67.4,41.9,-78.6,6.4,-69.2,-21.9C-59.9,-50.2,-29.9,-71.2,-0.4,-71C29.1,-70.9,58.2,-49.6,67.9,-20.9Z;\n                M64.8,-21.6C73.8,6.4,63.7,40.1,40.8,57C17.8,73.9,-18,73.9,-39.3,57.6C-60.6,41.3,-67.4,8.6,-58.5,-19.5C-49.5,-47.5,-24.8,-70.9,1.6,-71.4C27.9,-71.9,55.9,-49.6,64.8,-21.6Z;\n                M72.5,-21.4C82,5.8,69.6,42.2,45,59.6C20.3,76.9,-16.5,75.2,-40.8,57.3C-65.1,39.4,-76.8,5.3,-67.9,-21C-59,-47.2,-29.5,-65.7,1,-66C31.5,-66.3,62.9,-48.5,72.5,-21.4Z;\n              ",
                        dur: "30s",
                        begin: "0s",
                        repeatCount: "indefinite",
                        keySplines: "\n          0.2 0.1 0.8 0.9;\n          0.2 0.1 0.8 0.9;\n          0.2 0.1 0.8 0.9;\n          0.2 0.1 0.8 0.9;\n          0.2 0.1 0.8 0.9",
                        keyTimes: "0.0; 0.16; 0.32; 0.48; 0.64; 1.0"
                    }
                })])])])])
            }
        ), [], !1, null, "ea9d90c4", null);
        e.default = component.exports
    },
    1048: function(t, e, r) {
        var content = r(1125);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            r(35).default)("71de0f93", content, !0, {
            sourceMap: !1
        })
    },
    1080: function(t, e, r) {
        "use strict";
        r.r(e);
        r(11),
            r(20);
        var n = r(1081)
            , o = r(1012)
            , l = r(104)
            , d = r(1013)
            , m = r(1014)
            , c = r(610)
            , f = {
            components: {
                EllipsesProgress: n.default,
                MainAwards: o.default,
                ButtonEllipse: l.default,
                BlockDescription2: d.default,
                MainBlockAwwwardsBg: m.default
            },
            mixins: [c.a],
            props: {
                awards: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                title: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                subtitle: {
                    type: String,
                    default: ""
                },
                description: {
                    type: String,
                    default: ""
                },
                smallText: {
                    type: String,
                    default: ""
                },
                btnText: {
                    type: String,
                    default: "Load more"
                }
            },
            data: function() {
                return {
                    labels: ["Our  tight-knit"]
                }
            },
            methods: {
                setupAnimation: function() {
                    var t = this
                        , button = this.$refs.button
                        , e = this.$gsap.timeline({
                        scrollTrigger: {
                            trigger: button
                        }
                    }).from(button, {
                        yPercent: 100,
                        duration: .5,
                        autoAlpha: 0,
                        clearProps: "all"
                    });
                    this.timelines.push(e),
                        this.scrollTriggers.push(e.scrollTrigger);
                    var r = this.$tftl.getTimelineElements("blockSeven")
                        , ellipse = r.ellipse
                        , n = r.arrow
                        , o = this.$refs
                        , l = o.endText
                        , section = o.section
                        , d = ellipse.reverse();
                    this.$gsap.set([l, n[0]], {
                        autoAlpha: 0
                    });
                    var m = this.$gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start: function() {
                                return "top top"
                            },
                            end: function() {
                                return "bottom 80%"
                            },
                            scrub: .2,
                            onLeave: function() {
                                t.$gsap.to([n[0], l], {
                                    autoAlpha: 1,
                                    duration: .3
                                })
                            },
                            onEnterBack: function() {
                                t.$gsap.to([n[0], l], {
                                    autoAlpha: 0,
                                    duration: .3
                                })
                            }
                        }
                    });
                    d.forEach((function(t) {
                            m.to(t, {
                                attr: {
                                    "stroke-dasharray": "0 1"
                                },
                                duration: .3
                            })
                        }
                    )),
                        this.timelines.push(m),
                        this.scrollTriggers.push(m.scrollTrigger)
                }
            }
        }
            , h = (r(1124),
            r(13))
            , component = Object(h.a)(f, (function() {
                var t = this
                    , e = t.$createElement
                    , r = t._self._c || e;
                return r("section", {
                    ref: "section",
                    staticClass: "goals-section"
                }, [r("MainBlockAwwwardsBg"), t._v(" "), r("BlockDescription2", {
                    attrs: {
                        title: t.title,
                        subtitle: t.subtitle,
                        text: t.description,
                        labels: t.labels
                    }
                }), t._v(" "), r("div", {
                    staticClass: "main-block-7 grid"
                }, [r("div", {
                    staticClass: "main-block-7__left"
                }, [r("div", {
                    staticClass: "main-block-7__progress"
                }, [r("EllipsesProgress"), t._v(" "), r("div", {
                    ref: "endText",
                    staticClass: "main-block-7__end-text p1"
                }, [t._v("\n          " + t._s(t.smallText) + "\n        ")])], 1)]), t._v(" "), r("div", {
                    staticClass: "main-block-7__right"
                }, [r("MainAwards", {
                    attrs: {
                        awards: t.awards
                    }
                }), t._v(" "), r("div", {
                    ref: "button",
                    staticClass: "main-block-7__button"
                }, [r("nuxt-link", {
                    staticClass: "main-block-7__button-inner",
                    attrs: {
                        to: t.localePath("/about#about-awards")
                    }
                }, [r("ButtonEllipse", {
                    attrs: {
                        text: t.btnText
                    }
                })], 1)], 1)], 1)])], 1)
            }
        ), [], !1, null, "86a7d17e", null);
        e.default = component.exports;
        installComponents(component, {
            MainBlockAwwwardsBg: r(1014).default,
            BlockDescription2: r(1013).default,
            MainAwards: r(1012).default,
            ButtonEllipse: r(104).default
        })
    },
    1081: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {}
            , o = (r(892),
            r(13))
            , component = Object(o.a)(n, (function() {
                var t = this
                    , e = t.$createElement
                    , r = t._self._c || e;
                return r("div", {
                    staticClass: "spring-wrapper"
                }, [r("svg", {
                    directives: [{
                        name: "tftl-tl",
                        rawName: "v-tftl-tl:blockSeven",
                        value: {
                            name: "spring"
                        },
                        expression: "{ name: 'spring' }",
                        arg: "blockSeven"
                    }],
                    staticClass: "spring",
                    attrs: {
                        width: "574",
                        height: "760",
                        viewBox: "0 0 574 760",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [r("g", [r("ellipse", {
                    attrs: {
                        cx: "287",
                        cy: "694.668",
                        rx: "286",
                        ry: "64.3304",
                        pathLength: "1",
                        stroke: "#B2F366",
                        "stroke-width": "1.5"
                    }
                }), t._v(" "), r("ellipse", {
                    directives: [{
                        name: "tftl-tl",
                        rawName: "v-tftl-tl:blockSeven",
                        value: {
                            name: "ellipse"
                        },
                        expression: "{ name: 'ellipse' }",
                        arg: "blockSeven"
                    }],
                    attrs: {
                        cx: "287",
                        cy: "694.668",
                        rx: "286",
                        ry: "64.3304",
                        stroke: "#222222",
                        "stroke-dasharray": "1 0",
                        "stroke-dashoffset": "0.11",
                        pathLength: "1",
                        "stroke-width": "2"
                    }
                }), t._v(" "), r("ellipse", {
                    attrs: {
                        cx: "287",
                        cy: "694.668",
                        rx: "286",
                        ry: "64.3304",
                        stroke: "#222222",
                        "stroke-dasharray": "0.5 0.5",
                        "stroke-dashoffset": "0.11",
                        pathLength: "1",
                        "stroke-width": "2"
                    }
                })]), t._v(" "), r("g", [r("ellipse", {
                    attrs: {
                        cx: "287",
                        cy: "589.783",
                        rx: "286",
                        ry: "64.3304",
                        pathLength: "1",
                        stroke: "#B2F366",
                        "stroke-width": "1.5"
                    }
                }), t._v(" "), r("ellipse", {
                    directives: [{
                        name: "tftl-tl",
                        rawName: "v-tftl-tl:blockSeven",
                        value: {
                            name: "ellipse"
                        },
                        expression: "{ name: 'ellipse' }",
                        arg: "blockSeven"
                    }],
                    attrs: {
                        cx: "287",
                        cy: "589.783",
                        rx: "286",
                        ry: "64.3304",
                        stroke: "#222222",
                        "stroke-dasharray": "1 0",
                        "stroke-dashoffset": "0.11",
                        pathLength: "1",
                        "stroke-width": "2"
                    }
                })]), t._v(" "), r("g", [r("ellipse", {
                    attrs: {
                        cx: "287",
                        cy: "484.896",
                        rx: "286",
                        ry: "64.3304",
                        pathLength: "1",
                        stroke: "#B2F366",
                        "stroke-width": "1.5"
                    }
                }), t._v(" "), r("ellipse", {
                    directives: [{
                        name: "tftl-tl",
                        rawName: "v-tftl-tl:blockSeven",
                        value: {
                            name: "ellipse"
                        },
                        expression: "{ name: 'ellipse' }",
                        arg: "blockSeven"
                    }],
                    attrs: {
                        cx: "287",
                        cy: "484.896",
                        rx: "286",
                        ry: "64.3304",
                        stroke: "#222222",
                        "stroke-dasharray": "1 0",
                        "stroke-dashoffset": "0.11",
                        pathLength: "1",
                        "stroke-width": "2"
                    }
                })]), t._v(" "), r("g", [r("ellipse", {
                    attrs: {
                        cx: "287",
                        cy: "380.01",
                        rx: "286",
                        ry: "64.3304",
                        pathLength: "1",
                        stroke: "#B2F366",
                        "stroke-width": "1.5"
                    }
                }), t._v(" "), r("ellipse", {
                    directives: [{
                        name: "tftl-tl",
                        rawName: "v-tftl-tl:blockSeven",
                        value: {
                            name: "ellipse"
                        },
                        expression: "{ name: 'ellipse' }",
                        arg: "blockSeven"
                    }],
                    attrs: {
                        cx: "287",
                        cy: "380.01",
                        rx: "286",
                        ry: "64.3304",
                        stroke: "#222222",
                        "stroke-dasharray": "1 0",
                        "stroke-dashoffset": "0.11",
                        pathLength: "1",
                        "stroke-width": "2"
                    }
                })]), t._v(" "), r("g", [r("ellipse", {
                    attrs: {
                        stroke: "#B2F366",
                        cx: "287",
                        cy: "275.122",
                        rx: "286",
                        ry: "64.3304",
                        pathLength: "1",
                        "stroke-width": "1.5"
                    }
                }), t._v(" "), r("ellipse", {
                    directives: [{
                        name: "tftl-tl",
                        rawName: "v-tftl-tl:blockSeven",
                        value: {
                            name: "ellipse"
                        },
                        expression: "{ name: 'ellipse' }",
                        arg: "blockSeven"
                    }],
                    attrs: {
                        cx: "287",
                        cy: "275.122",
                        rx: "286",
                        ry: "64.3304",
                        stroke: "#222222",
                        "stroke-dasharray": "1 0",
                        "stroke-dashoffset": "0.11",
                        pathLength: "1",
                        "stroke-width": "2"
                    }
                })]), t._v(" "), r("g", [r("ellipse", {
                    attrs: {
                        cx: "287",
                        cy: "169.536",
                        rx: "286",
                        ry: "64.3304",
                        stroke: "#B2F366",
                        "stroke-width": "1.5"
                    }
                }), t._v(" "), r("ellipse", {
                    directives: [{
                        name: "tftl-tl",
                        rawName: "v-tftl-tl:blockSeven",
                        value: {
                            name: "ellipse"
                        },
                        expression: "{ name: 'ellipse' }",
                        arg: "blockSeven"
                    }],
                    attrs: {
                        cx: "287",
                        cy: "169.536",
                        rx: "286",
                        ry: "64.3304",
                        stroke: "#222222",
                        "stroke-dasharray": "1 0",
                        "stroke-dashoffset": "0.11",
                        pathLength: "1",
                        "stroke-width": "2"
                    }
                })]), t._v(" "), r("g", [r("ellipse", {
                    attrs: {
                        cx: "287",
                        cy: "65.3499",
                        rx: "286",
                        ry: "64.3304",
                        stroke: "#B2F366",
                        "stroke-width": "1.5"
                    }
                }), t._v(" "), r("ellipse", {
                    directives: [{
                        name: "tftl-tl",
                        rawName: "v-tftl-tl:blockSeven",
                        value: {
                            name: "ellipse"
                        },
                        expression: "{ name: 'ellipse' }",
                        arg: "blockSeven"
                    }],
                    attrs: {
                        cx: "287",
                        cy: "65.3499",
                        rx: "286",
                        ry: "64.3304",
                        stroke: "#222222",
                        "stroke-dasharray": "1 0",
                        "stroke-dashoffset": "0.11",
                        pathLength: "1",
                        "stroke-width": "2"
                    }
                })]), t._v(" "), r("circle", {
                    directives: [{
                        name: "tftl-tl",
                        rawName: "v-tftl-tl:blockSeven",
                        value: {
                            name: "arrowPositionElement"
                        },
                        expression: "{ name: 'arrowPositionElement' }",
                        arg: "blockSeven"
                    }],
                    attrs: {
                        r: "0",
                        cx: "118",
                        cy: "746",
                        fill: "red",
                        "fill-opacity": "0"
                    }
                })]), t._v(" "), r("svg", {
                    directives: [{
                        name: "tftl-tl",
                        rawName: "v-tftl-tl:blockSeven",
                        value: {
                            name: "arrow"
                        },
                        expression: "{ name: 'arrow' }",
                        arg: "blockSeven"
                    }],
                    staticClass: "main-block-7__progress-arrow",
                    attrs: {
                        width: "7",
                        height: "7",
                        viewBox: "0 0 7 7",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [r("path", {
                    attrs: {
                        d: "M6.99046 4.55938L0.942575 6.88744L1.76423 0.727497L6.99046 4.55938Z",
                        fill: "#B2F366"
                    }
                })])])
            }
        ), [], !1, null, "1a5888f0", null);
        e.default = component.exports
    },
    1124: function(t, e, r) {
        "use strict";
        r(1048)
    },
    1125: function(t, e, r) {
        var n = r(34)(!1);
        n.push([t.i, ".goals-section[data-v-86a7d17e]{margin-top:15.2rem}@media screen and (min-width:1920px){.goals-section[data-v-86a7d17e]{margin-top:16.8rem}}@media screen and (max-width:1439px){.goals-section[data-v-86a7d17e]{margin-top:13.6rem}}@media screen and (max-width:1023px){.goals-section[data-v-86a7d17e]{margin-top:12rem}}@media screen and (max-width:767px){.goals-section[data-v-86a7d17e]{margin-top:9.6rem}}.main-block-7[data-v-86a7d17e]{margin-top:6.4rem}@media screen and (min-width:1920px){.main-block-7[data-v-86a7d17e]{margin-top:8rem}}@media screen and (max-width:1439px){.main-block-7[data-v-86a7d17e]{margin-top:5.6rem}}@media screen and (max-width:1023px){.main-block-7[data-v-86a7d17e]{margin-top:4.8rem}}@media screen and (max-width:767px){.main-block-7[data-v-86a7d17e]{margin-top:4rem}}@media(max-width:1023px){.main-block-7[data-v-86a7d17e]{display:block;padding:0 var(--padding-container-lg)}}.main-block-7__left[data-v-86a7d17e],.main-block-7__right[data-v-86a7d17e]{grid-column:span 6}.main-block-7__left[data-v-86a7d17e]{position:relative;z-index:-1}@media(max-width:1919px){.main-block-7__left[data-v-86a7d17e]{grid-column:2/span 5}}@media(max-width:1439px){.main-block-7__left[data-v-86a7d17e]{grid-column:span 5}}@media(max-width:1023px){.main-block-7__left[data-v-86a7d17e]{display:none}}@media(max-width:1439px){.main-block-7__right[data-v-86a7d17e]{grid-column:span 7}}.main-block-7__progress[data-v-86a7d17e]{position:absolute;left:0;top:-12.7rem;pointer-events:none}@media(max-width:1919px){.main-block-7__progress[data-v-86a7d17e]{width:44.8rem;top:-8rem}}@media(max-width:1439px){.main-block-7__progress[data-v-86a7d17e]{width:36.3rem;height:100%;top:0}}.main-block-7__button[data-v-86a7d17e]{margin-top:2.4rem}@media screen and (min-width:1920px){.main-block-7__button[data-v-86a7d17e]{margin-top:3.2rem}}@media screen and (max-width:1439px){.main-block-7__button[data-v-86a7d17e]{margin-top:2.4rem}}@media screen and (max-width:1023px){.main-block-7__button[data-v-86a7d17e]{margin-top:2.4rem}}@media screen and (max-width:767px){.main-block-7__button[data-v-86a7d17e]{margin-top:2.4rem}}.main-block-7__button-inner[data-v-86a7d17e]{display:inline-flex}.main-block-7__end-text[data-v-86a7d17e]{position:absolute;bottom:0;left:30%;width:35.1rem;transform:translateY(40%)}@media(max-width:1919px){.main-block-7__end-text[data-v-86a7d17e]{width:25.1rem}}@media(max-width:1439px){.main-block-7__end-text[data-v-86a7d17e]{bottom:10.4rem}}", ""]),
            t.exports = n
    },
    619: function(t, e, r) {
        var content = r(634);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            r(35).default)("028a227d", content, !0, {
            sourceMap: !1
        })
    },
    620: function(t, e, r) {
        var content = r(636);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            r(35).default)("d8a8def4", content, !0, {
            sourceMap: !1
        })
    },
    621: function(t, e, r) {
        var content = r(638);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            r(35).default)("375d0573", content, !0, {
            sourceMap: !1
        })
    },
    624: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
            props: {
                texts: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            }
        }
            , o = (r(633),
            r(13))
            , component = Object(o.a)(n, (function() {
                var t = this
                    , e = t.$createElement
                    , r = t._self._c || e;
                return r("h2", {
                    staticClass: "description-title h6"
                }, t._l(t.texts, (function(text, e) {
                        return r("span", {
                            key: e,
                            staticClass: "text-line"
                        }, [r("span", {
                            staticClass: "text-line__inner"
                        }, [t._v(t._s(text))])])
                    }
                )), 0)
            }
        ), [], !1, null, "6389319a", null);
        e.default = component.exports
    },
    625: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
            props: {
                text: {
                    type: String,
                    default: ""
                }
            }
        }
            , o = (r(635),
            r(13))
            , component = Object(o.a)(n, (function() {
                var t = this
                    , e = t.$createElement
                    , r = t._self._c || e;
                return r("h3", {
                    staticClass: "description-subtitle h5-add"
                }, [r("span", {
                    staticClass: "description-subtitle__inner text-line__inner"
                }, [t._v(t._s(t.text))])])
            }
        ), [], !1, null, "cc68d102", null);
        e.default = component.exports
    },
    626: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
            props: {
                text: {
                    type: String,
                    default: ""
                },
                isHtml: {
                    type: Boolean,
                    default: !1
                }
            }
        }
            , o = (r(637),
            r(13))
            , component = Object(o.a)(n, (function() {
                var t = this
                    , e = t.$createElement
                    , r = t._self._c || e;
                return t.isHtml ? r("div", {
                    staticClass: "p2"
                }, [r("span", {
                    staticClass: "labels"
                }, [t._t("default")], 2), t._v(" \n  "), r("div", {
                    domProps: {
                        innerHTML: t._s(t.text)
                    }
                })]) : r("div", {
                    staticClass: "p1"
                }, [r("span", {
                    staticClass: "labels"
                }, [t._t("default")], 2), t._v(" " + t._s(t.text) + "\n")])
            }
        ), [], !1, null, "5076c4b5", null);
        e.default = component.exports
    },
    633: function(t, e, r) {
        "use strict";
        r(619)
    },
    634: function(t, e, r) {
        var n = r(34)(!1);
        n.push([t.i, ".text-line[data-v-6389319a]{overflow:hidden;padding:0 10px;margin:0 -10px}.text-line[data-v-6389319a],.text-line__inner[data-v-6389319a]{display:block}", ""]),
            t.exports = n
    },
    635: function(t, e, r) {
        "use strict";
        r(620)
    },
    636: function(t, e, r) {
        var n = r(34)(!1);
        n.push([t.i, ".description-subtitle[data-v-cc68d102]{overflow:hidden;padding:0 10px;margin:0 -10px}.description-subtitle__inner[data-v-cc68d102]{display:block}", ""]),
            t.exports = n
    },
    637: function(t, e, r) {
        "use strict";
        r(621)
    },
    638: function(t, e, r) {
        var n = r(34)(!1);
        n.push([t.i, ".labels[data-v-5076c4b5]{display:inline-block;position:relative;top:.7rem}@media(min-width:1920px){.labels[data-v-5076c4b5]{top:.8rem}}", ""]),
            t.exports = n
    },
    676: function(t, e, r) {
        var content = r(760);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            r(35).default)("44b04642", content, !0, {
            sourceMap: !1
        })
    },
    712: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
            props: {
                alt: {
                    type: String,
                    default: "award logo"
                },
                count: {
                    type: String,
                    default: ""
                },
                logo: {
                    type: String,
                    default: ""
                },
                description: {
                    type: String,
                    default: ""
                }
            }
        }
            , o = (r(759),
            r(13))
            , component = Object(o.a)(n, (function() {
                var t = this
                    , e = t.$createElement
                    , r = t._self._c || e;
                return r("div", {
                    staticClass: "main-award"
                }, [r("div", {
                    staticClass: "main-award__left"
                }, [r("div", {
                    staticClass: "main-award__count"
                }, [r("span", [t._v(t._s(t.count))]), t._v(" "), r("svg", {
                    staticClass: "main-award__count-x",
                    attrs: {
                        width: "20",
                        height: "14",
                        viewBox: "0 0 20 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [r("path", {
                    attrs: {
                        d: "M0 14H4.11189L9.9021 8.848L15.6364 14H19.7483L12.0559 7.084L20 0H15.8601L9.98601 5.264L4.13986 0H0L7.8042 6.972L0 14Z",
                        fill: "white"
                    }
                })])]), t._v(" "), r("div", {
                    staticClass: "main-award__logo"
                }, [r("img", {
                    attrs: {
                        src: t.logo,
                        alt: "award"
                    }
                })])]), t._v(" "), r("div", {
                    staticClass: "main-award__texts",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                })])
            }
        ), [], !1, null, "6d0481f9", null);
        e.default = component.exports
    },
    758: function(t, e, r) {
        var content = r(893);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            r(35).default)("6d5314e1", content, !0, {
            sourceMap: !1
        })
    },
    759: function(t, e, r) {
        "use strict";
        r(676)
    },
    760: function(t, e, r) {
        var n = r(34)(!1);
        n.push([t.i, ".main-award[data-v-6d0481f9]{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:var(--column-gap);-moz-column-gap:var(--column-gap);column-gap:var(--column-gap);align-items:center}@media(max-width:767px){.main-award[data-v-6d0481f9]{display:flex;flex-wrap:wrap}}.main-award__count[data-v-6d0481f9]{font-family:var(--font-main);font-weight:var(--font-normal);font-size:5.1rem;line-height:1;display:flex;justify-content:flex-start;align-items:center;flex:0 0 12rem}@media(max-width:1919px){.main-award__count[data-v-6d0481f9]{font-size:3.2rem;flex-basis:7.5rem}}@media(max-width:1023px){.main-award__count[data-v-6d0481f9]{font-size:3.8rem;flex-basis:8.5rem}}@media(max-width:767px){.main-award__count[data-v-6d0481f9]{flex-basis:auto}}.main-award__left[data-v-6d0481f9]{display:flex;align-items:center;justify-content:flex-start}@media(max-width:767px){.main-award__left[data-v-6d0481f9]{flex-grow:1}}.main-award__count-x[data-v-6d0481f9]{display:block;width:2rem;height:auto;margin-left:.8rem;flex-shrink:1;transform:translateY(.3rem)}@media(max-width:1919px){.main-award__count-x[data-v-6d0481f9]{transform:translateY(.2rem);width:1.2rem;margin-left:.4rem}}@media(max-width:1023px){.main-award__count-x[data-v-6d0481f9]{width:1.4rem}}.main-award__logo[data-v-6d0481f9]{flex-grow:1;display:flex;justify-content:center;align-items:center}@media(max-width:767px){.main-award__logo[data-v-6d0481f9]{justify-content:flex-end}}.main-award__logo>img[data-v-6d0481f9]{display:block;width:auto;max-height:5.8rem;max-width:15rem}@media(min-width:1920px){.main-award__logo>img[data-v-6d0481f9]{max-height:9rem;max-width:20rem}}@media(max-width:1439px){.main-award__logo>img[data-v-6d0481f9]{max-height:9.8rem}}@media(max-width:1023px){.main-award__logo>img[data-v-6d0481f9]{max-width:11.6rem;max-height:7rem}}@media(max-width:767px){.main-award__logo>img[data-v-6d0481f9]{max-width:15rem}}.main-award__texts[data-v-6d0481f9]{grid-column:2/span 1;font-family:var(--font-main);font-style:var(--font-italic);font-weight:var(--font-normal);font-size:1.4rem;opacity:.7;line-height:1.2}@media(max-width:767px){.main-award__texts[data-v-6d0481f9]{flex-basis:100%;margin-top:2.4rem}}@media(max-width:1919px){.main-award__texts[data-v-6d0481f9]{font-size:1.2rem}}@media(max-width:1439px){.main-award__texts[data-v-6d0481f9]{font-size:1rem}}@media(max-width:1023px){.main-award__texts[data-v-6d0481f9]{font-size:1.2rem}}.main-award__texts[data-v-6d0481f9]>p+p{margin-top:.8rem}@media screen and (min-width:1920px){.main-award__texts[data-v-6d0481f9]>p+p{margin-top:1.6rem}}@media screen and (max-width:1439px){.main-award__texts[data-v-6d0481f9]>p+p{margin-top:.8rem}}@media screen and (max-width:1023px){.main-award__texts[data-v-6d0481f9]>p+p{margin-top:.8rem}}@media screen and (max-width:767px){.main-award__texts[data-v-6d0481f9]>p+p{margin-top:.8rem}}", ""]),
            t.exports = n
    },
    761: function(t, e, r) {
        var content = r(895);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            r(35).default)("ab81f79a", content, !0, {
            sourceMap: !1
        })
    },
    762: function(t, e, r) {
        var content = r(897);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            r(35).default)("2f854976", content, !0, {
            sourceMap: !1
        })
    },
    763: function(t, e, r) {
        var content = r(899);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            r(35).default)("1b8243d3", content, !0, {
            sourceMap: !1
        })
    },
    892: function(t, e, r) {
        "use strict";
        r(758)
    },
    893: function(t, e, r) {
        var n = r(34)(!1);
        n.push([t.i, ".spring-wrapper[data-v-1a5888f0]{position:relative;width:100%}.spring[data-v-1a5888f0]{display:block;width:100%;height:auto;transform-origin:center bottom}@media(max-width:1439px){.spring[data-v-1a5888f0]{height:100%}}.main-block-7__progress-arrow[data-v-1a5888f0]{position:absolute;left:20%;top:97.7%;pointer-events:none;opacity:0}@media(max-width:1919px){.main-block-7__progress-arrow[data-v-1a5888f0]{top:97.6%}}@-webkit-keyframes spring-data-v-1a5888f0{0%{transform:scaleY(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{transform:scaleY(.5);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes spring-data-v-1a5888f0{0%{transform:scaleY(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{transform:scaleY(.5);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}", ""]),
            t.exports = n
    },
    894: function(t, e, r) {
        "use strict";
        r(761)
    },
    895: function(t, e, r) {
        var n = r(34)(!1);
        n.push([t.i, ".main-awards__item[data-v-40d54e29]{opacity:.2;transition:var(--transition-300)}@media(max-width:1023px){.main-awards__item[data-v-40d54e29]{opacity:1}}.main-awards__item.active[data-v-40d54e29]{opacity:1}.main-awards__item[data-v-40d54e29]:not(:first-child){padding-top:3.2rem}@media screen and (min-width:1920px){.main-awards__item[data-v-40d54e29]:not(:first-child){padding-top:4rem}}@media screen and (max-width:1439px){.main-awards__item[data-v-40d54e29]:not(:first-child){padding-top:3.2rem}}@media screen and (max-width:1023px){.main-awards__item[data-v-40d54e29]:not(:first-child){padding-top:2.4rem}}@media screen and (max-width:767px){.main-awards__item[data-v-40d54e29]:not(:first-child){padding-top:2.4rem}}.main-awards__item[data-v-40d54e29]:not(:last-child){padding-bottom:3.2rem}@media screen and (min-width:1920px){.main-awards__item[data-v-40d54e29]:not(:last-child){padding-bottom:4rem}}@media screen and (max-width:1439px){.main-awards__item[data-v-40d54e29]:not(:last-child){padding-bottom:3.2rem}}@media screen and (max-width:1023px){.main-awards__item[data-v-40d54e29]:not(:last-child){padding-bottom:2.4rem}}@media screen and (max-width:767px){.main-awards__item[data-v-40d54e29]:not(:last-child){padding-bottom:2.4rem}}", ""]),
            t.exports = n
    },
    896: function(t, e, r) {
        "use strict";
        r(762)
    },
    897: function(t, e, r) {
        var n = r(34)(!1);
        n.push([t.i, "@media(max-width:1023px){.description-2[data-v-2d15bd09]{display:block;padding:0 var(--padding-container-lg)}}.description-2__title[data-v-2d15bd09]{grid-column:2/span 6}.description-2__subtitle[data-v-2d15bd09]{margin-top:.8rem;grid-column:2/span 6}.description-2__text[data-v-2d15bd09]{margin-top:6.4rem;grid-column:3/span 6;max-width:72.1rem}@media screen and (min-width:1920px){.description-2__text[data-v-2d15bd09]{margin-top:8rem}}@media screen and (max-width:1439px){.description-2__text[data-v-2d15bd09]{margin-top:5.6rem}}@media screen and (max-width:1023px){.description-2__text[data-v-2d15bd09]{margin-top:4.8rem}}@media screen and (max-width:767px){.description-2__text[data-v-2d15bd09]{margin-top:4rem}}@media(max-width:1919px){.description-2__text[data-v-2d15bd09]{max-width:53.6rem}}@media(max-width:1439px){.description-2__text[data-v-2d15bd09]{grid-column:2/span 6;max-width:51rem}}", ""]),
            t.exports = n
    },
    898: function(t, e, r) {
        "use strict";
        r(763)
    },
    899: function(t, e, r) {
        var n = r(34)(!1);
        n.push([t.i, ".main-block-3__bg-lg[data-v-ea9d90c4]{position:absolute;right:0;top:0;z-index:-1}@media(max-width:1023px){.main-block-3__bg-lg[data-v-ea9d90c4]{top:-100px;right:-150px}}@media(max-width:767px){.main-block-3__bg-lg[data-v-ea9d90c4]{right:-100px}}.blob-1-wrapper[data-v-ea9d90c4]{animation:orbit-data-v-ea9d90c4 40s ease-in-out infinite alternate-reverse}.blob-1[data-v-ea9d90c4]{width:600px;height:600px}@media(max-width:1919px){.blob-1[data-v-ea9d90c4]{width:400px;height:400px}}@media(max-width:767px){.blob-1[data-v-ea9d90c4]{width:300px;height:300px}}.blob-2[data-v-ea9d90c4]{width:400px;height:400px;display:block;position:absolute;right:300px;bottom:-50px}@media(max-width:1919px){.blob-2[data-v-ea9d90c4]{width:300px;height:300px;right:150px;bottom:0}}@media(max-width:767px){.blob-2[data-v-ea9d90c4]{width:150px;height:150px;right:35px}}.blob-3-wrapper[data-v-ea9d90c4]{display:block;position:absolute;right:0;top:-150px;animation:orbit-data-v-ea9d90c4 60s linear infinite alternate-reverse}@media(max-width:1919px){.blob-3-wrapper[data-v-ea9d90c4]{right:50px;top:0}}@media(max-width:767px){.blob-3-wrapper[data-v-ea9d90c4]{right:20px}}.blob-3[data-v-ea9d90c4]{width:300px;height:300px}@media(max-width:1919px){.blob-3[data-v-ea9d90c4]{width:200px;height:200px}}@-webkit-keyframes orbit-data-v-ea9d90c4{0%{transform:rotate(0deg) translateX(0)}30%{transform:rotate(-180deg) translateX(100px)}60%{transform:rotate(-180deg) translateX(-100px)}to{transform:rotate(-1turn) translateX(0)}}@keyframes orbit-data-v-ea9d90c4{0%{transform:rotate(0deg) translateX(0)}30%{transform:rotate(-180deg) translateX(100px)}60%{transform:rotate(-180deg) translateX(-100px)}to{transform:rotate(-1turn) translateX(0)}}@-webkit-keyframes rotate-data-v-ea9d90c4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotate-data-v-ea9d90c4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes rotate-scale-data-v-ea9d90c4{0%{transform:rotate(0deg) scale(1)}to{transform:rotate(-1turn) scale(.7)}}@keyframes rotate-scale-data-v-ea9d90c4{0%{transform:rotate(0deg) scale(1)}to{transform:rotate(-1turn) scale(.7)}}", ""]),
            t.exports = n
    }
}]);
