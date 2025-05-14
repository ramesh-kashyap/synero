(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-login-login"], {
        "0f54": function(t, a, e) {
            "use strict";
            e("7a82"), Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var i = {
                data: function() {
                    return {
                        email: "",
                        password: "",
                        captcha: "",
                        word: "",
                        isload: !1
                    }
                },
                onLoad: function() {
                    this.randomWord()
                },
                methods: {
                    randomWord: function() {
                        this.word = "" + Math.floor(10 * Math.random()) + Math.floor(10 * Math.random()) + Math.floor(10 * Math.random()) + Math.floor(10 * Math.random())
                    },
                    goRegister: function() {
                        uni.navigateTo({
                            url: "/pages/login/register"
                        })
                    },
                    goForget: function() {
                        uni.navigateTo({
                            url: "/pages/login/forget"
                        })
                    },
                    goWeb: function() {
                        this.helper.isPC() ? window.open("https://chat.ssrchat.com/service/glrcjs") : uni.navigateTo({
                            url: "/pages/user/goWeb"
                        })
                    },
                    goLang: function() {
                        uni.navigateTo({
                            url: "/pages/login/language"
                        })
                    },
                    submit: function() {
                        var t = this;
                        if ("" != this.email)
                            if ("" != this.password)
                                if (this.word == this.captcha) {
                                    if (!this.isload) {
                                        this.isload = !0, uni.showLoading({
                                            mask: !0,
                                            title: ""
                                        });
                                        var a = {
                                            account: this.email,
                                            password: this.password
                                        };
                                        this.helper.post("user/login", a, (function(a) {
                                            uni.hideLoading(), t.isload = !1, 1 == a.code && (t.$store.commit("user", a.data.userinfo), getApp().globalData.loginStatus = 1, uni.showToast({
                                                title: a.msg,
                                                duration: 3e3,
                                                success: function() {
                                                    var t = this;
                                                    setTimeout((function() {
                                                        t.email = "", t.password = "", uni.switchTab({
                                                            url: "/pages/index/index"
                                                        })
                                                    }), 1500)
                                                }
                                            }))
                                        }))
                                    }
                                } else this.helper.toast(this.$t("Incorrect Captcha"));
                        else this.helper.toast(this.$t("Please Enter Password"));
                        else this.helper.toast(this.$t("Please Enter Username"))
                    }
                }
            };
            a.default = i
        },
        "0fb2": function(t, a, e) {
            "use strict";
            var i = e("e34c"),
                n = e.n(i);
            n.a
        },
        1881: function(t, a, e) {
            "use strict";
            e.r(a);
            var i = e("0f54"),
                n = e.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                e.d(a, t, (function() {
                    return i[t]
                }))
            }(s);
            a["default"] = n.a
        },
        "9d76": function(t, a, e) {
            "use strict";
            e.r(a);
            var i = e("bb67"),
                n = e("1881");
            for (var s in n)["default"].indexOf(s) < 0 && function(t) {
                e.d(a, t, (function() {
                    return n[t]
                }))
            }(s);
            e("0fb2");
            var o = e("f0c5"),
                c = Object(o["a"])(n["default"], i["b"], i["c"], !1, null, "2b56ecaf", null, !1, i["a"], void 0);
            a["default"] = c.exports
        },
        b045: function(t, a, e) {
            var i = e("24fb");
            a = i(!1), a.push([t.i, ".page[data-v-2b56ecaf]{padding:20px;font-size:14px;line-height:24px;font-family:Raleway;color:#fff;position:relative}.welcome[data-v-2b56ecaf]{font-size:26px;line-height:40px;font-weight:600;letter-spacing:-2%;text-align:center;margin-top:20px}.welcome-tips[data-v-2b56ecaf]{font-size:14px;line-height:17px;letter-spacing:-2%;text-align:center;font-weight:500;margin-top:5px;color:hsla(0,0%,100%,.6);padding:0 10px}.input-box[data-v-2b56ecaf]{margin-top:40px}.input-layer[data-v-2b56ecaf]{margin-bottom:15px}.input-title[data-v-2b56ecaf]{font-size:15px;line-height:17px;letter-spacing:-2%;font-weight:500;margin-bottom:8px}.forget[data-v-2b56ecaf]{font-size:13px;line-height:17px;letter-spacing:-2%;color:#35f7e7;margin-bottom:25px}.captcha-box[data-v-2b56ecaf]{display:flex;flex-direction:row;align-items:center;font-family:RockSalt;border-radius:16px;background-color:hsla(0,0%,100%,.10196078431372549);margin-top:10px;padding:10px 10px;justify-content:space-between}.left[data-v-2b56ecaf]{padding-left:30px;display:flex;width:80%;justify-content:center}.captcha-num[data-v-2b56ecaf]{margin-left:10px;width:35%}.captcha-box img[data-v-2b56ecaf]{padding-top:7px;width:20px}.login[data-v-2b56ecaf]{margin-top:20px;background-color:#35f7e7;border-radius:70px;color:#000;font-weight:600;font-size:18px;line-height:48px;text-align:center;letter-spacing:-2%}.register[data-v-2b56ecaf]{display:flex;justify-content:center;margin-top:20px}.create[data-v-2b56ecaf]{margin-left:5px;color:#35f7e7}.language[data-v-2b56ecaf]{position:absolute;right:20px;top:30px;display:flex;align-items:center}.language img[data-v-2b56ecaf]{width:25px;margin-right:8px}.service[data-v-2b56ecaf]{position:absolute;left:20px;top:30px}", ""]), t.exports = a
        },
        bb67: function(t, a, e) {
            "use strict";
            e.d(a, "b", (function() {
                return n
            })), e.d(a, "c", (function() {
                return s
            })), e.d(a, "a", (function() {
                return i
            }));
            var i = {
                    uniIcons: e("1c53").default,
                    uniMyinput: e("f286").default
                },
                n = function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("v-uni-view", {
                        staticClass: "page"
                    }, [e("v-uni-view", {
                        staticClass: "ellipse"
                    }), e("v-uni-view", {
                        staticClass: "service",
                        on: {
                            click: function(a) {
                                arguments[0] = a = t.$handleEvent(a), t.goWeb()
                            }
                        }
                    }, [e("uni-icons", {
                        attrs: {
                            type: "headphones",
                            color: "#35F7E7",
                            size: "30"
                        }
                    })], 1), e("v-uni-view", {
                        staticClass: "language",
                        on: {
                            click: function(a) {
                                arguments[0] = a = t.$handleEvent(a), t.goLang()
                            }
                        }
                    }, [e("img", {
                        attrs: {
                            src: "/static/img/icon-lang.png",
                            alt: ""
                        }
                    })]), e("v-uni-view", {
                        staticClass: "welcome"
                    }, [t._v(t._s(t.$t("welcome")))]), e("v-uni-view", {
                        staticClass: "welcome-tips"
                    }, [t._v(t._s(t.$t("Enter your Email and password to continue to your account")))]), e("v-uni-view", {
                        staticClass: "input-box"
                    }, [e("v-uni-view", {
                        staticClass: "input-layer"
                    }, [e("v-uni-view", {
                        staticClass: "input-title"
                    }, [t._v(t._s(t.$t("Username")))]), e("uni-myinput", {
                        attrs: {
                            trim: "all",
                            prefixImg: "/static/img/user.png",
                            placeholder: t.$t("Please Enter Username")
                        },
                        model: {
                            value: t.email,
                            callback: function(a) {
                                t.email = a
                            },
                            expression: "email"
                        }
                    })], 1), e("v-uni-view", {
                        staticClass: "input-layer"
                    }, [e("v-uni-view", {
                        staticClass: "input-title"
                    }, [t._v(t._s(t.$t("Password")))]), e("uni-myinput", {
                        attrs: {
                            trim: "all",
                            type: "password",
                            prefixImg: "/static/img/lock.png",
                            placeholder: t.$t("Please Enter Password")
                        },
                        model: {
                            value: t.password,
                            callback: function(a) {
                                t.password = a
                            },
                            expression: "password"
                        }
                    })], 1), e("v-uni-view", {
                        staticClass: "forget",
                        on: {
                            click: function(a) {
                                arguments[0] = a = t.$handleEvent(a), t.goForget.apply(void 0, arguments)
                            }
                        }
                    }, [t._v(t._s(t.$t("Forget Password")))]), e("v-uni-view", {
                        staticClass: "input-layer"
                    }, [e("v-uni-view", {
                        staticClass: "input-title"
                    }, [t._v(t._s(t.$t("Captcha")))]), e("uni-myinput", {
                        attrs: {
                            trim: "all",
                            prefixImg: "/static/img/pen.png",
                            placeholder: t.$t("Type The Number Below")
                        },
                        model: {
                            value: t.captcha,
                            callback: function(a) {
                                t.captcha = a
                            },
                            expression: "captcha"
                        }
                    }), e("v-uni-view", {
                        staticClass: "captcha-box"
                    }, [e("v-uni-view", {
                        staticClass: "left"
                    }, [e("v-uni-view", {
                        staticClass: "captcha-title"
                    }, [t._v(t._s(t.$t("Captcha")))]), e("v-uni-view", {
                        staticClass: "captcha-num"
                    }, [t._v(t._s(t.word))])], 1), e("v-uni-view", {
                        staticClass: "refresh",
                        on: {
                            click: function(a) {
                                arguments[0] = a = t.$handleEvent(a), t.randomWord.apply(void 0, arguments)
                            }
                        }
                    }, [e("img", {
                        attrs: {
                            src: "/static/img/refresh.png",
                            alt: ""
                        }
                    })])], 1)], 1)], 1), e("v-uni-view", {
                        staticClass: "login",
                        on: {
                            click: function(a) {
                                arguments[0] = a = t.$handleEvent(a), t.submit.apply(void 0, arguments)
                            }
                        }
                    }, [t._v(t._s(t.$t("Log in")))]), e("v-uni-view", {
                        staticClass: "register",
                        on: {
                            click: function(a) {
                                arguments[0] = a = t.$handleEvent(a), t.goRegister.apply(void 0, arguments)
                            }
                        }
                    }, [t._v(t._s(t.$t("Dont have an account?"))), e("v-uni-view", {
                        staticClass: "create"
                    }, [t._v(t._s(t.$t("Create Account")))])], 1)], 1)
                },
                s = []
        },
        e34c: function(t, a, e) {
            var i = e("b045");
            i.__esModule && (i = i.default), "string" === typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            var n = e("4f06").default;
            n("1f5aa304", i, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        }
    }
]);