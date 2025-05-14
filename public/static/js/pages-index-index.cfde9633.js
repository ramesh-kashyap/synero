(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-index-index"], {
        "0487": function(t, e, a) {
            "use strict";
            a.d(e, "b", (function() {
                return n
            })), a.d(e, "c", (function() {
                return s
            })), a.d(e, "a", (function() {
                return i
            }));
            var i = {
                    uniCollapse: a("24b9").default,
                    uniCollapseItem: a("844d").default,
                    uniIcons: a("1c53").default
                },
                n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("v-uni-view", {
                        staticClass: "page"
                    }, [a("v-uni-view", {
                        staticClass: "ellipse"
                    }), a("v-uni-view", {
                        staticClass: "top-box"
                    }, [a("v-uni-view", {
                        staticClass: "left"
                    }, [a("v-uni-view", {
                        staticClass: "ava",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.goPage("/pages/user/user")
                            }
                        }
                    }, [a("img", {
                        attrs: {
                            src: "/static/ava/ava4.jpg",
                            alt: ""
                        }
                    })]), a("v-uni-view", {
                        staticClass: "top-text"
                    }, [a("v-uni-view", {
                        staticClass: "name"
                    }, [t._v(t._s(t.userInfo.nickname))]), a("v-uni-view", {
                        staticClass: "uid"
                    }, [t._v("UID:" + t._s(t.userInfo.user_no))])], 1)], 1), a("v-uni-view", {
                        staticClass: "right"
                    }, [a("v-uni-view", {
                        staticClass: "notice",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.goPage("/pages/user/rewards")
                            }
                        }
                    }, [a("img", {
                        staticStyle: {
                            width: "28px"
                        },
                        attrs: {
                            src: "/static/img/rewards.png",
                            alt: ""
                        }
                    })]), a("v-uni-view", {
                        staticClass: "notice",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.goPage("/pages/index/message")
                            }
                        }
                    }, [a("img", {
                        attrs: {
                            src: "/static/img/notice.png",
                            alt: ""
                        }
                    }), t.isNewMessage ? a("v-uni-view", {
                        staticClass: "red-point"
                    }) : t._e()], 1)], 1)], 1), a("v-uni-view", {
                        staticClass: "balance-card"
                    }, [a("v-uni-view", {
                        staticClass: "first"
                    }, [a("v-uni-view", {
                        staticClass: "balance-title"
                    }, [t._v(t._s(t.$t("Your Balance")) + " (USDT)")])], 1), a("v-uni-view", {
                        staticClass: "second"
                    }, [a("v-uni-view", {
                        staticClass: "balance-num",
                        attrs: {
                            translate: "no"
                        }
                    }, [t._v(t._s(t.helper.tofixnum(t.userInfo.money, 4)))]), a("v-uni-view", {
                        staticClass: "profit-num",
                        attrs: {
                            translate: "no"
                        }
                    }, [t._v("+" + t._s(t.helper.tofixnum(t.userInfo.user7dayIncome[0].total_amount, 4))), a("v-uni-view", {
                        staticClass: "today"
                    }, [t._v(t._s(t.$t("Yesterday")))])], 1)], 1), a("v-uni-view", {
                        staticClass: "third"
                    }, [a("v-uni-view", {
                        staticClass: "balance-btn",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.goPage("/pages/user/recharge")
                            }
                        }
                    }, [t._v(t._s(t.$t("Deposit"))), a("img", {
                        attrs: {
                            src: "/static/img/usdtdown.png",
                            alt: ""
                        }
                    })]), a("v-uni-view", {
                        staticClass: "transfer",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.goPage("/pages/user/transfer")
                            }
                        }
                    }, [a("img", {
                        attrs: {
                            src: "/static/img/transfer.png",
                            alt: ""
                        }
                    })]), a("v-uni-view", {
                        staticClass: "balance-btn",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.goPage("/pages/user/withdrawal")
                            }
                        }
                    }, [t._v(t._s(t.$t("Withdraw"))), a("img", {
                        attrs: {
                            src: "/static/img/usdtup.png",
                            alt: ""
                        }
                    })])], 1)], 1), a("v-uni-view", {
                        staticClass: "index-title"
                    }, [t._v(t._s(t.$t("My Attention")))]), a("v-uni-view", {
                        staticClass: "attention-box"
                    }, ["" == t.facusList ? a("v-uni-view", {
                        staticClass: "no-focus"
                    }, [t._v(t._s(t.$t("No currency of interest yet")))]) : t._e(), t._l(t.facusData, (function(e, i) {
                        return a("v-uni-view", {
                            staticClass: "attention-item",
                            on: {
                                click: function(a) {
                                    arguments[0] = a = t.$handleEvent(a), t.goSymbol(e.symbol)
                                }
                            }
                        }, [a("v-uni-view", {
                            staticClass: "coin-layer"
                        }, [a("img", {
                            attrs: {
                                src: t.getImg(e.symbol),
                                alt: ""
                            }
                        }), a("v-uni-view", {
                            staticClass: "coin-name"
                        }, [t._v(t._s(e.symbol.toUpperCase())), a("v-uni-view", {
                            staticClass: "coin"
                        }, [t._v(t._s(t.changeKMB(e.vol)))])], 1)], 1), a("v-uni-view", {
                            staticClass: "price"
                        }, [t._v(t._s(t.helper.tofixnum(e.close, 2)))]), a("v-uni-view", {
                            class: e.close - e.open < 0 ? "prop-down" : "prop-updown"
                        }, [t._v(t._s(t.getProp(e.close, e.open)) + "%")])], 1)
                    }))], 2), a("v-uni-view", {
                        staticClass: "new-banner"
                    }, [a("v-uni-swiper", {
                        staticStyle: {
                            height: "165px"
                        },
                        attrs: {
                            "indicator-dots": !0,
                            autoplay: !0,
                            interval: 3e3,
                            duration: 1e3
                        }
                    }, [a("v-uni-swiper-item", [a("v-uni-view", {
                        staticClass: "banner-item"
                    }, [a("img", {
                        attrs: {
                            src: "/static/img/Registration.png",
                            alt: ""
                        }
                    }), a("v-uni-view", {
                        staticClass: "banner-title"
                    }, [t._v(t._s(t.$t("Exclusive For New Users")))]), a("v-uni-view", {
                        staticClass: "banner-text"
                    }, [t._v(t._s(t.$t("Exclusive for new users – Sign up & claim your USD rewards!")))]), a("v-uni-view", {
                        staticClass: "banner-btn",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.goPage("/pages/user/rewards")
                            }
                        }
                    }, [t._v(t._s(t.$t("Get Rewards")))])], 1)], 1), a("v-uni-swiper-item", [a("v-uni-view", {
                        staticClass: "banner-item"
                    }, [a("img", {
                        attrs: {
                            src: "/static/img/server-icon.png",
                            alt: ""
                        }
                    }), a("v-uni-view", {
                        staticClass: "banner-title"
                    }, [t._v(t._s(t.$t("Unlock Smart Trading")))]), a("v-uni-view", {
                        staticClass: "banner-text"
                    }, [t._v(t._s(t.$t("Unlock Smart Trading with Firefly Star – Try 228 AI Strategies for Free!")))]), a("v-uni-view", {
                        staticClass: "banner-btn",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.goPage("/pages/user/rewards")
                            }
                        }
                    }, [t._v(t._s(t.$t("Get Rewards")))])], 1)], 1), a("v-uni-swiper-item", [a("v-uni-view", {
                        staticClass: "banner-item"
                    }, [a("img", {
                        attrs: {
                            src: "/static/img/flash.png",
                            alt: ""
                        }
                    }), a("v-uni-view", {
                        staticClass: "banner-title"
                    }, [t._v(t._s(t.$t("Smart Trading")))]), a("v-uni-view", {
                        staticClass: "banner-text"
                    }, [t._v(t._s(t.$t("Smart Trading, Steady Growth – Build Your Wealth with Confidence!")))]), a("v-uni-view", {
                        staticClass: "banner-btn",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.goPage("/pages/user/rewards")
                            }
                        }
                    }, [t._v(t._s(t.$t("Get Rewards")))])], 1)], 1)], 1)], 1), a("v-uni-view", {
                        staticClass: "market-box"
                    }, [a("v-uni-view", {
                        staticClass: "market-title"
                    }, [t._v(t._s(t.$t("Market Quotes")))]), t._l(t.displayedList, (function(e, i) {
                        return a("v-uni-view", {
                            staticClass: "market-item",
                            on: {
                                click: function(a) {
                                    arguments[0] = a = t.$handleEvent(a), t.goSymbol(e.symbol)
                                }
                            }
                        }, [a("v-uni-view", {
                            staticClass: "coin-layer"
                        }, [a("img", {
                            attrs: {
                                src: t.getImg(e.symbol),
                                alt: ""
                            }
                        }), a("v-uni-view", {
                            staticClass: "coin-name"
                        }, [t._v(t._s(e.symbol.toUpperCase())), a("v-uni-view", {
                            staticClass: "coin"
                        }, [t._v(t._s(t.changeKMB(e.vol)))])], 1)], 1), a("v-uni-view", {
                            staticClass: "num-box"
                        }, [a("v-uni-view", {
                            staticClass: "price"
                        }, [t._v(t._s(t.helper.tofixnum(e.close, 2)))]), e.close - e.open > 0 ? a("v-uni-view", {
                            staticClass: "change-num green"
                        }, [t._v("+" + t._s(t.helper.tofixnum(e.close - e.open, 3)))]) : a("v-uni-view", {
                            staticClass: "change-num red"
                        }, [t._v(t._s(t.helper.tofixnum(e.close - e.open, 3)))])], 1), a("v-uni-view", {
                            staticClass: "num-box"
                        }, [a("v-uni-view", {
                            class: e.close - e.open < 0 ? "down" : "prop-btn"
                        }, [t._v(t._s(t.getProp(e.close, e.open)) + "%")])], 1)], 1)
                    })), a("v-uni-view", {
                        staticStyle: {
                            display: "flex",
                            "justify-content": "center",
                            "flex-direction": "column",
                            "align-items": "center",
                            "margin-top": "3px"
                        },
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.moreOrExpand.apply(void 0, arguments)
                            }
                        }
                    }, [t._v(t._s(t.isMore ? t.$t("Hide") : t.$t("More"))), t.isMore ? t._e() : a("img", {
                        staticStyle: {
                            width: "30px",
                            height: "20px"
                        },
                        attrs: {
                            src: "/static/img/Expand.png",
                            alt: ""
                        }
                    }), t.isMore ? a("img", {
                        staticStyle: {
                            width: "30px",
                            height: "20px"
                        },
                        attrs: {
                            src: "/static/img/Hide.png",
                            alt: ""
                        }
                    }) : t._e()])], 2), a("v-uni-view", {
                        staticClass: "market-title",
                        staticStyle: {
                            "margin-top": "10px",
                            "margin-bottom": "8px"
                        }
                    }, [t._v(t._s(t.$t("FAQ")))]), a("v-uni-view", {
                        staticClass: "content"
                    }, [a("uni-collapse", {
                        attrs: {
                            accordion: !0
                        }
                    }, [a("uni-collapse-item", {
                        attrs: {
                            title: t.$t("faq1")
                        }
                    }, [a("v-uni-view", {
                        staticClass: "content"
                    }, [a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a1-1")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a1-2")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a1-3")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a1-4")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a1-5")))])], 1)], 1)], 1), a("uni-collapse", {
                        attrs: {
                            accordion: !0
                        }
                    }, [a("uni-collapse-item", {
                        attrs: {
                            title: t.$t("faq2")
                        }
                    }, [a("v-uni-view", {
                        staticClass: "content"
                    }, [a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a2-1")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a2-2")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a2-3")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a2-4")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a2-5")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a2-6")))])], 1)], 1)], 1), a("uni-collapse", {
                        attrs: {
                            accordion: !0
                        }
                    }, [a("uni-collapse-item", {
                        attrs: {
                            title: t.$t("faq3")
                        }
                    }, [a("v-uni-view", {
                        staticClass: "content"
                    }, [a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a3-1")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a3-2")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a3-3")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a3-4")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a3-5")))])], 1)], 1)], 1), a("uni-collapse", {
                        attrs: {
                            accordion: !0
                        }
                    }, [a("uni-collapse-item", {
                        attrs: {
                            title: t.$t("faq4")
                        }
                    }, [a("v-uni-view", {
                        staticClass: "content"
                    }, [a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a4-1")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a4-2")))])], 1)], 1)], 1), a("uni-collapse", {
                        attrs: {
                            accordion: !0
                        }
                    }, [a("uni-collapse-item", {
                        attrs: {
                            title: t.$t("faq5")
                        }
                    }, [a("v-uni-view", {
                        staticClass: "content"
                    }, [a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a5-1")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a5-2")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a5-3")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a5-4")))])], 1)], 1)], 1), a("uni-collapse", {
                        attrs: {
                            accordion: !0
                        }
                    }, [a("uni-collapse-item", {
                        attrs: {
                            title: t.$t("faq6")
                        }
                    }, [a("v-uni-view", {
                        staticClass: "content"
                    }, [a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a6-1")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a6-2")))])], 1)], 1)], 1), a("uni-collapse", {
                        attrs: {
                            accordion: !0
                        }
                    }, [a("uni-collapse-item", {
                        attrs: {
                            title: t.$t("faq7")
                        }
                    }, [a("v-uni-view", {
                        staticClass: "content"
                    }, [a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a7-1")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a7-2")))])], 1)], 1)], 1), a("uni-collapse", {
                        attrs: {
                            accordion: !0
                        }
                    }, [a("uni-collapse-item", {
                        attrs: {
                            title: t.$t("faq8")
                        }
                    }, [a("v-uni-view", {
                        staticClass: "content"
                    }, [a("v-uni-view", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("t8-1")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a8-1")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a8-2")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a8-3")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a8-4")))]), a("v-uni-view", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("t8-2")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a8-5")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a8-6")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a8-7")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a8-8")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a8-9")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a8-10")))]), a("v-uni-view", {
                        staticStyle: {
                            height: "8px"
                        }
                    })], 1)], 1)], 1), a("uni-collapse", {
                        attrs: {
                            accordion: !0
                        }
                    }, [a("uni-collapse-item", {
                        attrs: {
                            title: t.$t("faq9")
                        }
                    }, [a("v-uni-view", {
                        staticClass: "content"
                    }, [a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a9-1")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a9-2")))])], 1)], 1)], 1), a("uni-collapse", {
                        attrs: {
                            accordion: !0
                        }
                    }, [a("uni-collapse-item", {
                        attrs: {
                            title: t.$t("faq10")
                        }
                    }, [a("v-uni-view", {
                        staticClass: "content"
                    }, [a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a10-1")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a10-2")))])], 1)], 1)], 1), a("uni-collapse", {
                        attrs: {
                            accordion: !0
                        }
                    }, [a("uni-collapse-item", {
                        attrs: {
                            title: t.$t("faq11")
                        }
                    }, [a("v-uni-view", {
                        staticClass: "content"
                    }, [a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a11-1")))]), a("v-uni-text", {
                        staticClass: "text"
                    }, [t._v(t._s(t.$t("a11-2")))])], 1)], 1)], 1), a("v-uni-view", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("Policy")))]), a("v-uni-view", {
                        staticClass: "policy-item",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.goPage("/pages/policy/amlcft")
                            }
                        }
                    }, [t._v(t._s(t.$t("AML/CFT Policy"))), a("uni-icons", {
                        attrs: {
                            color: "#ffffff80",
                            type: "right"
                        }
                    })], 1), a("v-uni-view", {
                        staticClass: "policy-item",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.goPage("/pages/policy/InsuranceAgreement")
                            }
                        }
                    }, [t._v(t._s(t.$t("FIREFLY STAR LLC User Strategy Insurance Agreement"))), a("uni-icons", {
                        attrs: {
                            color: "#ffffff80",
                            type: "right"
                        }
                    })], 1), a("v-uni-view", {
                        staticClass: "policy-item",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.goPage("/pages/policy/LegalNotice")
                            }
                        }
                    }, [t._v(t._s(t.$t("Legal Notice"))), a("uni-icons", {
                        attrs: {
                            color: "#ffffff80",
                            type: "right"
                        }
                    })], 1), a("v-uni-view", {
                        staticClass: "policy-item",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.goPage("/pages/policy/UserAgreement")
                            }
                        }
                    }, [t._v(t._s(t.$t("FIREFLY STAR LLC User Agreement"))), a("uni-icons", {
                        attrs: {
                            color: "#ffffff80",
                            type: "right"
                        }
                    })], 1), a("v-uni-view", {
                        staticClass: "policy-item",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.goPage("/pages/policy/tradingAgreement")
                            }
                        }
                    }, [t._v(t._s(t.$t("Firefly Star LLC Trading Server Usage Agreement"))), a("uni-icons", {
                        attrs: {
                            color: "#ffffff80",
                            type: "right"
                        }
                    })], 1)], 1)], 1)
                },
                s = []
        },
        "0ab3": function(t, e, a) {
            var i = a("0add");
            i.__esModule && (i = i.default), "string" === typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            var n = a("4f06").default;
            n("56efd6b7", i, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        "0ac1": function(t, e, a) {
            "use strict";
            a("7a82");
            var i = a("ee27").default;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, a("fb6a"), a("acd8");
            var n = i(a("20f8")),
                s = i(a("16e0")),
                o = {
                    components: {
                        Swiper: s.default,
                        echarts: n.default
                    },
                    data: function() {
                        return {
                            imgList: ["/static/banner/banner1.png", "/static/banner/banner1.png", "/static/banner/banner1.png"],
                            userInfo: {},
                            ptions: {
                                xAxis: {
                                    type: "category",
                                    show: !1,
                                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 1, 2, 3, 4, 5, 6, 7, 8]
                                },
                                yAxis: {
                                    type: "value",
                                    show: !1
                                },
                                grid: {
                                    top: 3,
                                    left: 3,
                                    right: 3,
                                    bottom: 3
                                },
                                series: [{
                                    data: [150, 230, 224, 218, 365, 147, 260, 150, 230, 224, 218, 135, 147, 260, 310],
                                    type: "line",
                                    color: "#35F7E7",
                                    symbol: "none",
                                    lineStyle: {
                                        width: 1
                                    }
                                }]
                            },
                            timerId: null,
                            symbols: "btc,eth,xrp,ltc,eos,bch,etc,trb,iota,qtum,snt,neo,doge,near,sol,dot,ada",
                            coinsData: [],
                            facusList: "",
                            facusData: {},
                            isGetFacuList: !1,
                            sse1: null,
                            sse2: null,
                            isNewMessage: !1,
                            isMore: !1,
                            animationData: {}
                        }
                    },
                    onLoad: function() {
                        this.getFacus(), this.initSSE()
                    },
                    onUnload: function() {},
                    beforeDestroy: function() {
                        this.sse1 && (this.sse1.close(), this.sse2.close())
                    },
                    onHide: function() {},
                    onShow: function() {
                        this.getInfo(), this.checkMessage()
                    },
                    computed: {
                        displayedList: function() {
                            return this.isMore ? this.coinsData : this.coinsData.slice(0, 5)
                        }
                    },
                    methods: {
                        getInfo: function() {
                            var t = this;
                            this.helper.post("user/index", {}, (function(e) {
                                t.userInfo = e.data
                            }))
                        },
                        recharge: function() {},
                        goPage: function(t) {
                            clearInterval(this.timerId), this.timerId = null, uni.navigateTo({
                                url: t
                            })
                        },
                        moreOrExpand: function() {
                            this.isMore = !this.isMore
                        },
                        checkMessage: function() {
                            var t = this;
                            this.helper.post("message/getUnreadMessageCount", {}, (function(e) {
                                1 == e.code && e.data > 0 && (t.isNewMessage = !0), 1 == e.code && 0 == e.data && (t.isNewMessage = !1)
                            }))
                        },
                        getFacus: function() {
                            var t = this;
                            this.helper.post("user/get_follow_symbol", {}, (function(e) {
                                null != e.data && (t.facusList = e.data, t.isGetFacuList = !0, null == t.sse2 && t.initFacus())
                            }))
                        },
                        getFacusData: function() {
                            var t = this;
                            "" != this.facusList && uni.request({
                                url: "https://ws.fireflyanalysis.com/api/market_tickers?symbols=" + this.facusList,
                                success: function(e) {
                                    t.facusData = e.data.data
                                },
                                fail: function(t) {
                                    console.error("Error fetching ticker data:", t)
                                }
                            })
                        },
                        getImg: function(t) {
                            return "/static/coin/" + t.slice(0, -4) + ".png"
                        },
                        getProp: function(t, e) {
                            return parseFloat(t) - parseFloat(e) > 0 ? "+" + this.helper.tofixnum((parseFloat(t) - parseFloat(e)) / parseFloat(e) * 100, 2) : this.helper.tofixnum((parseFloat(t) - parseFloat(e)) / parseFloat(e) * 100, 2)
                        },
                        Withdraw: function() {
                            console.log(2222)
                        },
                        goSymbol: function(t) {
                            clearInterval(this.timerId), this.timerId = null;
                            var e = t.slice(0, -4);
                            uni.navigateTo({
                                url: "/pages/index/symbol?symbol=" + e
                            })
                        },
                        fetchData: function() {
                            var t = this;
                            uni.request({
                                url: "https://ws.fireflyanalysis.com/api/market_tickers?symbols=" + this.symbols,
                                success: function(e) {
                                    t.coinsData = e.data.data
                                },
                                fail: function(t) {
                                    console.error("Error fetching ticker data:", t)
                                }
                            }), this.isGetFacuList && this.getFacusData()
                        },
                        changeKMB: function(t) {
                            var e = parseFloat(t);
                            return e < 1e3 ? e.toFixed(2) : e < 1e6 ? (e / 1e3).toFixed(2) + "K" : e < 1e9 ? (e / 1e6).toFixed(2) + "M" : (e / 1e9).toFixed(2) + "B"
                        },
                        connectWebSocket: function() {
                            var t = this,
                                e = "https://ws.fireflyanalysis.com/api/market_tickers/stream?symbols=" + this.symbols;
                            uni.connectSocket({
                                url: e,
                                success: function() {
                                    console.log("WebSocket success")
                                }
                            }), uni.onSocketOpen((function() {
                                console.log("WebSocket open")
                            })), uni.onSocketMessage((function(e) {
                                var a = JSON.parse(e.data);
                                a && a.data && (t.coinsData = e.data.data)
                            })), uni.onSocketError((function(t) {
                                console.error("WebSocket err", t)
                            })), uni.onSocketClose((function() {
                                console.log("WebSocket close")
                            }))
                        },
                        closeWebSocket: function() {
                            uni.closeSocket()
                        },
                        initFacus: function() {
                            var t = this;
                            "undefined" !== typeof EventSource ? (this.sse2 = new EventSource("https://ws.fireflyanalysis.com/api/market_tickers/stream?symbols=" + this.facusList), this.sse2.addEventListener("serverData", (function(t) {
                                var e = JSON.parse(t.data);
                                console.log(e)
                            })), this.sse2.onmessage = function(e) {
                                var a = JSON.parse(e.data);
                                t.facusData = a.data
                            }, this.sse2.onerror = function(t) {
                                console.error("SSE:", t)
                            }) : console.error("no supp SSE")
                        },
                        initSSE: function() {
                            var t = this;
                            "undefined" !== typeof EventSource ? (this.sse1 = new EventSource("https://ws.fireflyanalysis.com/api/market_tickers/stream?symbols=" + this.symbols), this.sse1.addEventListener("serverData", (function(t) {
                                var e = JSON.parse(t.data);
                                console.log(e)
                            })), this.sse1.onmessage = function(e) {
                                var a = JSON.parse(e.data);
                                t.coinsData = a.data
                            }, this.sse1.onerror = function(t) {
                                console.error("SSE:", t)
                            }) : console.error("no supp SSE")
                        }
                    }
                };
            e.default = o
        },
        "0add": function(t, e, a) {
            var i = a("24fb");
            e = i(!1), e.push([t.i, '@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.input-box[data-v-c3c2634e]{margin-top:40px}.input-layer[data-v-c3c2634e]{margin-bottom:15px}.input-title[data-v-c3c2634e]{font-size:15px;line-height:17px;letter-spacing:-2%;font-weight:500;margin-bottom:8px}.policy-big-title[data-v-c3c2634e]{font-size:24px;text-align:center;font-weight:600;margin:20px 0}.policy-mid-title[data-v-c3c2634e]{font-size:20px;font-weight:600;margin:10px 0}.policy-ms-title[data-v-c3c2634e]{font-size:17px;font-weight:600;margin:10px 0}.policy-sm-title[data-v-c3c2634e]{font-size:14px;text-align:center;font-weight:600}.policy-text[data-v-c3c2634e]{font-weight:500;font-size:14px}.echarts[data-v-c3c2634e]{width:100%;height:100%}', ""]), t.exports = e
        },
        "16e0": function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a("a359"),
                n = a("54cf");
            for (var s in n)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(s);
            a("90b7");
            var o = a("f0c5"),
                r = Object(o["a"])(n["default"], i["b"], i["c"], !1, null, "539d9eda", null, !1, i["a"], void 0);
            e["default"] = r.exports
        },
        "187b": function(t, e, a) {
            var i = a("24fb");
            e = i(!1), e.push([t.i, ".swiper[data-v-539d9eda]{width:100%;height:%?320?%;border-radius:15px;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.swiper-img[data-v-539d9eda]{width:100%;height:%?320?%;border-radius:15px}", ""]), t.exports = e
        },
        "1d49": function(t, e, a) {
            var i = a("24fb");
            e = i(!1), e.push([t.i, ".page[data-v-06ae08d2]{padding:15px;font-size:14px;line-height:24px;font-family:Raleway;color:#fff}.top-box[data-v-06ae08d2]{display:flex;align-items:center;justify-content:space-between}.left[data-v-06ae08d2]{display:flex}.top-box .right[data-v-06ae08d2]{display:flex}.ava[data-v-06ae08d2]{height:52px;width:52px;display:flex;justify-content:center;align-items:center;background-color:hsla(0,0%,100%,.10196078431372549);border-radius:50%}.ava img[data-v-06ae08d2]{border-radius:50%;width:30px;height:30px}.top-text[data-v-06ae08d2]{margin-left:10px;display:flex;flex-direction:column;justify-content:space-between}.name[data-v-06ae08d2]{font-size:20px;line-height:24px;font-weight:600}.uid[data-v-06ae08d2]{font-size:15px;line-height:20px;font-weight:400;font-family:Montserrat;color:hsla(0,0%,100%,.5019607843137255)}.notice[data-v-06ae08d2]{width:40px;height:40px;border-radius:50%;background-color:hsla(0,0%,100%,.10196078431372549);display:flex;justify-content:center;align-items:center;margin-right:10px;position:relative}.red-point[data-v-06ae08d2]{height:8px;width:8px;border-radius:50%;background-color:#ff6767;position:absolute;top:2px;right:2px}.balance-card[data-v-06ae08d2]{margin-top:20px;padding:16px 18px;border:.5px solid rgba(82,97,98,.25098039215686274);border-radius:20px;background:linear-gradient(155deg,rgba(0,0,0,.2),rgba(0,0,0,.2) 55%,rgba(82,97,98,.058823529411764705) 0,rgba(82,97,98,.058823529411764705))}.first[data-v-06ae08d2]{display:flex;justify-content:space-between;align-items:center}.balance-title[data-v-06ae08d2]{font-size:12px;line-height:14px;font-weight:400;color:hsla(0,0%,100%,.6)}.prop[data-v-06ae08d2]{display:flex;align-items:center;font-family:Montserrat;color:#35f7e7}.second[data-v-06ae08d2]{margin-top:10px;display:flex;flex-direction:column}.balance-num[data-v-06ae08d2]{font-family:Montserrat;font-weight:500;font-size:32px;line-height:40px}.profit-num[data-v-06ae08d2]{display:flex;align-items:flex-end;font-family:Montserrat;font-size:12px;line-height:14px;font-weight:500}.today[data-v-06ae08d2]{margin-left:8px;font-weight:500;font-size:11px;line-height:12px;color:hsla(0,0%,100%,.5019607843137255)}.third[data-v-06ae08d2]{margin-top:25px;display:flex;align-items:center;justify-content:space-around}.balance-btn[data-v-06ae08d2]{padding:5px;border-radius:100px;background-color:hsla(0,0%,100%,.2196078431372549);width:40%;color:#fff;font-size:14.5px;line-height:17px;font-weight:500;text-align:center;display:flex;align-items:center;justify-content:center}.index-title[data-v-06ae08d2]{display:flex;align-items:flex-end;justify-content:space-between;margin-top:15px;font-size:18px;font-weight:600;line-height:22px;letter-spacing:1px}.view-all[data-v-06ae08d2]{display:flex;align-items:center;font-size:14px;font-weight:500;line-height:17px;letter-spacing:0}.view-all img[data-v-06ae08d2]{margin-left:5px;width:20px;height:20px}.attention-box[data-v-06ae08d2]{margin-top:12px;display:flex;max-width:%?828?%;overflow:auto}.attention-item[data-v-06ae08d2]{width:140px;margin-right:10px;background-color:hsla(0,0%,100%,.10196078431372549);border-radius:17px;padding:9px;margin-bottom:5px}.coin-layer[data-v-06ae08d2]{display:flex}.coin-layer img[data-v-06ae08d2]{background-color:hsla(0,0%,100%,.10196078431372549);border-radius:50%;padding:5px;width:27px;height:27px}.coin-name[data-v-06ae08d2]{margin-left:5px;padding:2px 0;font-size:13.5px;line-height:16px;font-weight:500;display:flex;flex-direction:column;justify-content:space-between}.coin[data-v-06ae08d2]{color:hsla(0,0%,100%,.5019607843137255);font-size:10px;line-height:12px;font-weight:400;font-family:Montserrat}.line-layer[data-v-06ae08d2]{margin:3px}.price[data-v-06ae08d2]{font-size:16px;line-height:18px;font-weight:600;font-family:Montserrat;letter-spacing:1px}.prop-updown[data-v-06ae08d2]{margin-top:3px;color:#35f7e7;font-size:10px;line-height:12px;font-weight:500;font-family:Montserrat}.prop-down[data-v-06ae08d2]{margin-top:3px;color:#ff3d3d;font-size:10px;line-height:12px;font-weight:500;font-family:Montserrat}.banner[data-v-06ae08d2]{margin-top:15px}.market-box[data-v-06ae08d2]{display:flex;flex-direction:column;margin-top:20px}.market-title[data-v-06ae08d2]{font-size:18px;line-height:22px;font-weight:600}.market-item[data-v-06ae08d2]{display:flex;flex-direction:row;padding:9px;margin:5px 0;justify-content:space-between;align-items:center;background-color:hsla(0,0%,100%,.10196078431372549);border-radius:14px}.market-item .coin-layer[data-v-06ae08d2]{width:140px}.market-item .coin-layer img[data-v-06ae08d2]{background-color:hsla(0,0%,100%,.10196078431372549);border-radius:11px;padding:5px;width:37px;height:37px}.market-item .coin-layer .coin-name[data-v-06ae08d2]{margin-left:5px;padding:2px 0;font-size:15px;line-height:20px;font-weight:600;display:flex;flex-direction:column;justify-content:space-between}.market-item .coin-layer .coin-name .coin[data-v-06ae08d2]{color:hsla(0,0%,100%,.5019607843137255);font-size:14px;line-height:16px;font-weight:500}.num-box[data-v-06ae08d2]{display:flex;flex-direction:column;justify-content:space-between;align-items:end}.num-box .price[data-v-06ae08d2]{font-size:15px;line-height:18px;font-weight:500;letter-spacing:unset;font-family:Montserrat}.num-box .prop-updown[data-v-06ae08d2]{margin-top:5px}.change-num[data-v-06ae08d2]{font-family:Montserrat;font-size:12px}.green[data-v-06ae08d2]{color:#35f7e7}.red[data-v-06ae08d2]{color:#ff3d3d}.down[data-v-06ae08d2]{width:60px;display:flex;justify-content:center;align-items:center;font-family:Montserrat;padding:5px 10px;border-radius:10px;background-color:#ff3d3d;color:#fff}.prop-btn[data-v-06ae08d2]{width:60px;display:flex;justify-content:center;align-items:center;font-family:Montserrat;padding:5px 10px;border-radius:10px;background-color:#35f7e7;color:#000}.no-focus[data-v-06ae08d2]{width:100%;font-weight:500;font-size:15px;text-align:center;margin:10px 0}.transfer[data-v-06ae08d2]{margin:0 10px}.transfer img[data-v-06ae08d2]{margin-top:5px;width:35px}.new-banner[data-v-06ae08d2]{margin-top:15px;margin-left:-5px;margin-right:-5px}.banner-item[data-v-06ae08d2]{display:flex;flex-direction:column;align-items:center;justify-content:space-around;background-color:#35f7e7;border-radius:19px;height:150px;color:#000;padding:5px 10px;margin:0 5px}.banner-item img[data-v-06ae08d2]{margin-top:5px;height:40px;width:40px}.banner-title[data-v-06ae08d2]{font-size:16px;font-weight:600}.banner-text[data-v-06ae08d2]{margin-top:4px;font-size:12px;font-weight:500;line-height:15px;text-align:center}.banner-btn[data-v-06ae08d2]{margin-top:8px;padding:5px 10px;border-radius:90px;color:#fff;font-size:12px;display:flex;background-color:#000;justify-content:center;align-items:center}.policy-item[data-v-06ae08d2]{min-height:48px;\n\t/* height: 48px; */display:flex;justify-content:space-between;padding:0 15px;align-items:center;background-color:hsla(0,0%,100%,.10196078431372549);border-radius:14px;font-size:16px;margin:10px 0;line-height:18px}.content .title[data-v-06ae08d2]{margin:10px 0;font-size:18px;font-weight:600}", ""]), t.exports = e
        },
        "20f8": function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a("c33a"),
                n = a("942c");
            for (var s in n)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(s);
            var o = a("36cc");
            for (var s in o)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return o[t]
                }))
            }(s);
            a("79ed");
            var r = a("f0c5");
            n["default"].__module = "echarts";
            var c = Object(r["a"])(o["default"], i["b"], i["c"], !1, null, "c3c2634e", null, !1, i["a"], n["default"]);
            e["default"] = c.exports
        },
        "36cc": function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a("cb0e"),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            e["default"] = n.a
        },
        "44b1": function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a("0487"),
                n = a("d6b1");
            for (var s in n)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(s);
            a("717d");
            var o = a("f0c5"),
                r = Object(o["a"])(n["default"], i["b"], i["c"], !1, null, "06ae08d2", null, !1, i["a"], void 0);
            e["default"] = r.exports
        },
        "54cf": function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a("6b66"),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            e["default"] = n.a
        },
        5895: function(t, e, a) {
            var i = a("1d49");
            i.__esModule && (i = i.default), "string" === typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            var n = a("4f06").default;
            n("031fdd73", i, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        "6b66": function(t, e, a) {
            "use strict";
            a("7a82"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                props: {
                    item: {
                        type: Array,
                        default: {}
                    }
                },
                data: function() {
                    return {}
                },
                methods: {}
            };
            e.default = i
        },
        "717d": function(t, e, a) {
            "use strict";
            var i = a("5895"),
                n = a.n(i);
            n.a
        },
        "79ed": function(t, e, a) {
            "use strict";
            var i = a("0ab3"),
                n = a.n(i);
            n.a
        },
        "90b7": function(t, e, a) {
            "use strict";
            var i = a("9b7e"),
                n = a.n(i);
            n.a
        },
        "942c": function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a("c21a"),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            e["default"] = n.a
        },
        "9b7e": function(t, e, a) {
            var i = a("187b");
            i.__esModule && (i = i.default), "string" === typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            var n = a("4f06").default;
            n("76cabab4", i, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        a359: function(t, e, a) {
            "use strict";
            a.d(e, "b", (function() {
                return i
            })), a.d(e, "c", (function() {
                return n
            })), a.d(e, "a", (function() {}));
            var i = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("v-uni-swiper", {
                        staticClass: "swiper",
                        attrs: {
                            "indicator-dots": !0,
                            autoplay: !0,
                            interval: 3e3,
                            duration: 1e3
                        }
                    }, [this._l(this.item, (function(t) {
                        return [e("v-uni-swiper-item", [e("v-uni-view", {
                            staticClass: "swiper-item"
                        }, [e("v-uni-image", {
                            staticClass: "swiper-img",
                            attrs: {
                                src: t,
                                mode: ""
                            }
                        })], 1)], 1)]
                    }))], 2)
                },
                n = []
        },
        c21a: function(t, e, a) {
            "use strict";
            a("7a82");
            var i = a("ee27").default;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, a("acd8"), a("d401"), a("d3b7"), a("25f0"), a("ac1f"), a("5319");
            var n = i(a("0122")),
                s = {
                    data: function() {
                        return {
                            chart: null
                        }
                    },
                    mounted: function() {
                        if ("object" === (0, n.default)(window.echarts)) this.init();
                        else {
                            var t = document.createElement("script");
                            t.src = "./static/echarts.min.js", t.onload = this.init, document.head.appendChild(t)
                        }
                    },
                    methods: {
                        init: function() {
                            this.chart = echarts.init(this.$el), this.update(this.option)
                        },
                        update: function(t) {
                            this.chart && t && (t.tooltip && (t.tooltip.positionStatus && (t.tooltip.position = this.tooltipPosition()), t.tooltip.formatterStatus && (t.tooltip.formatter = this.tooltipFormatter(t.tooltip.formatterUnit, t.tooltip.formatFloat2, t.tooltip.formatThousands))), this.chart.setOption(t, t.notMerge))
                        },
                        tooltipPosition: function() {
                            return function(t, e, a, i, n) {
                                var s = t[0],
                                    o = t[1],
                                    r = (n.viewSize[0], n.viewSize[1], n.contentSize[0]),
                                    c = n.contentSize[1],
                                    l = 0,
                                    u = 0;
                                return l = s < r ? 5 : s - r, u = o < c ? 5 : o - c, [l, u]
                            }
                        },
                        tooltipFormatter: function(t, e, a) {
                            var i = this;
                            return function(n) {
                                var s = "";
                                for (var o in t = t || "", n) {
                                    0 == o && (s += n[o].axisValueLabel);
                                    var r = "--";
                                    null !== n[o].data && (r = n[o].data, e && (r = i.formatFloat2(r)), a && (r = i.formatThousands(r))), s += "\n" + n[o].seriesName + "：" + r + " " + t
                                }
                                return s
                            }
                        },
                        formatFloat2: function(t) {
                            var e = Math.round(100 * parseFloat(t)) / 100,
                                a = e.toString().split(".");
                            return 1 === a.length ? (e = (isNaN(e) ? "0" : e.toString()) + ".00", e) : a.length > 1 ? (a[1].length < 2 && (e = e.toString() + "0"), e) : void 0
                        },
                        formatThousands: function(t) {
                            void 0 !== t && null !== t || (t = ""), isNaN(t) || (t += "");
                            var e = /\d{1,3}(?=(\d{3})+$)/g,
                                a = t.replace(/^(\d+)((\.\d+)?)$/, (function(t, a, i) {
                                    return a.replace(e, "$&,") + i
                                }));
                            return a
                        }
                    }
                };
            e.default = s
        },
        c33a: function(t, e, a) {
            "use strict";
            a.d(e, "b", (function() {
                return i
            })), a.d(e, "c", (function() {
                return n
            })), a.d(e, "a", (function() {}));
            var i = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("v-uni-view", [e("v-uni-view", {
                        wxsProps: {
                            "change:prop": "option"
                        },
                        staticClass: "echarts",
                        attrs: {
                            prop: this.option,
                            "change:prop": this.echarts.update
                        }
                    })], 1)
                },
                n = []
        },
        cb0e: function(t, e, a) {
            "use strict";
            a("7a82"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                name: "Echarts",
                props: {
                    option: {
                        type: Object,
                        required: !0
                    }
                }
            };
            e.default = i
        },
        d6b1: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a("0ac1"),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            e["default"] = n.a
        }
    }
]);