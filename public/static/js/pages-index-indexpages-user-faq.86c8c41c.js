(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-index-index~pages-user-faq"], {
        "0163": function(t, e, i) {
            "use strict";
            var n = i("1e6c"),
                a = i.n(n);
            a.a
        },
        "1e6c": function(t, e, i) {
            var n = i("2429");
            n.__esModule && (n = n.default), "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            var a = i("4f06").default;
            a("fc9bf474", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        2429: function(t, e, i) {
            var n = i("24fb");
            e = n(!1), e.push([t.i, '@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.input-box[data-v-6fe2d4dd]{margin-top:40px}.input-layer[data-v-6fe2d4dd]{margin-bottom:15px}.input-title[data-v-6fe2d4dd]{font-size:15px;line-height:17px;letter-spacing:-2%;font-weight:500;margin-bottom:8px}.policy-big-title[data-v-6fe2d4dd]{font-size:24px;text-align:center;font-weight:600;margin:20px 0}.policy-mid-title[data-v-6fe2d4dd]{font-size:20px;font-weight:600;margin:10px 0}.policy-ms-title[data-v-6fe2d4dd]{font-size:17px;font-weight:600;margin:10px 0}.policy-sm-title[data-v-6fe2d4dd]{font-size:14px;text-align:center;font-weight:600}.policy-text[data-v-6fe2d4dd]{font-weight:500;font-size:14px}.uni-collapse[data-v-6fe2d4dd]{width:100%;display:flex;flex-direction:column;background-color:hsla(0,0%,100%,.10196078431372549);border-radius:14px;margin-bottom:10px}', ""]), t.exports = e
        },
        "24b9": function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i("415e"),
                a = i("3d8d");
            for (var o in a)["default"].indexOf(o) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(o);
            i("0163");
            var s = i("f0c5"),
                l = Object(s["a"])(a["default"], n["b"], n["c"], !1, null, "6fe2d4dd", null, !1, n["a"], void 0);
            e["default"] = l.exports
        },
        3159: function(t, e, i) {
            "use strict";
            i.d(e, "b", (function() {
                return a
            })), i.d(e, "c", (function() {
                return o
            })), i.d(e, "a", (function() {
                return n
            }));
            var n = {
                    uniIcons: i("1c53").default
                },
                a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("v-uni-view", {
                        staticClass: "uni-collapse-item"
                    }, [i("v-uni-view", {
                        staticClass: "uni-collapse-item__title",
                        class: {
                            "is-open": t.isOpen && "auto" === t.titleBorder, "uni-collapse-item-border": "none" !== t.titleBorder
                        },
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.onClick(!t.isOpen)
                            }
                        }
                    }, [i("v-uni-view", {
                        staticClass: "uni-collapse-item__title-wrap"
                    }, [t._t("title", [i("v-uni-view", {
                        staticClass: "uni-collapse-item__title-box",
                        class: {
                            "is-disabled": t.disabled
                        }
                    }, [t.thumb ? i("v-uni-image", {
                        staticClass: "uni-collapse-item__title-img",
                        attrs: {
                            src: t.thumb
                        }
                    }) : t._e(), i("v-uni-text", {
                        staticClass: "uni-collapse-item__title-text"
                    }, [t._v(t._s(t.title))])], 1)])], 2), t.showArrow ? i("v-uni-view", {
                        staticClass: "uni-collapse-item__title-arrow",
                        class: {
                            "uni-collapse-item__title-arrow-active": t.isOpen, "uni-collapse-item--animation": !0 === t.showAnimation
                        }
                    }, [i("uni-icons", {
                        attrs: {
                            color: t.disabled ? "#ddd" : "#bbb",
                            size: "14",
                            type: "bottom"
                        }
                    })], 1) : t._e()], 1), i("v-uni-view", {
                        staticClass: "uni-collapse-item__wrap",
                        class: {
                            "is--transition": t.showAnimation
                        },
                        style: {
                            height: (t.isOpen ? t.height : 0) + "px"
                        }
                    }, [i("v-uni-view", {
                        ref: "collapse--hook",
                        staticClass: "uni-collapse-item__wrap-content",
                        class: {
                            open: t.isheight, "uni-collapse-item--border": t.border && t.isOpen
                        },
                        attrs: {
                            id: t.elId
                        }
                    }, [t._t("default")], 2)], 1)], 1)
                },
                o = []
        },
        "3d8d": function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i("583d"),
                a = i.n(n);
            for (var o in n)["default"].indexOf(o) < 0 && function(t) {
                i.d(e, t, (function() {
                    return n[t]
                }))
            }(o);
            e["default"] = a.a
        },
        "415e": function(t, e, i) {
            "use strict";
            i.d(e, "b", (function() {
                return n
            })), i.d(e, "c", (function() {
                return a
            })), i.d(e, "a", (function() {}));
            var n = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("v-uni-view", {
                        staticClass: "uni-collapse"
                    }, [this._t("default")], 2)
                },
                a = []
        },
        "583d": function(t, e, i) {
            "use strict";
            i("7a82"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, i("d3b7"), i("159b"), i("14d9");
            var n = {
                name: "uniCollapse",
                emits: ["change", "activeItem", "input", "update:modelValue"],
                props: {
                    value: {
                        type: [String, Array],
                        default: ""
                    },
                    modelValue: {
                        type: [String, Array],
                        default: ""
                    },
                    accordion: {
                        type: [Boolean, String],
                        default: !1
                    }
                },
                data: function() {
                    return {}
                },
                computed: {
                    dataValue: function() {
                        var t = "string" === typeof this.value && "" === this.value || Array.isArray(this.value) && 0 === this.value.length;
                        "string" === typeof this.modelValue && "" === this.modelValue || Array.isArray(this.modelValue) && this.modelValue.length;
                        return t ? this.modelValue : this.value
                    }
                },
                watch: {
                    dataValue: function(t) {
                        this.setOpen(t)
                    }
                },
                created: function() {
                    this.childrens = [], this.names = []
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.setOpen(t.dataValue)
                    }))
                },
                methods: {
                    setOpen: function(t) {
                        var e = this,
                            i = "string" === typeof t,
                            n = Array.isArray(t);
                        this.childrens.forEach((function(a, o) {
                            if (i && t === a.nameSync) {
                                if (!e.accordion) return void console.warn("accordion 属性为 false ,v-model 类型应该为 array");
                                a.isOpen = !0
                            }
                            n && t.forEach((function(t) {
                                if (t === a.nameSync) {
                                    if (e.accordion) return void console.warn("accordion 属性为 true ,v-model 类型应该为 string");
                                    a.isOpen = !0
                                }
                            }))
                        })), this.emit(t)
                    },
                    setAccordion: function(t) {
                        this.accordion && this.childrens.forEach((function(e, i) {
                            t !== e && (e.isOpen = !1)
                        }))
                    },
                    resize: function() {
                        this.childrens.forEach((function(t, e) {
                            t.getCollapseHeight()
                        }))
                    },
                    onChange: function(t, e) {
                        var i = [];
                        this.accordion ? i = t ? e.nameSync : "" : this.childrens.forEach((function(t, e) {
                            t.isOpen && i.push(t.nameSync)
                        })), this.$emit("change", i), this.emit(i)
                    },
                    emit: function(t) {
                        this.$emit("input", t), this.$emit("update:modelValue", t)
                    }
                }
            };
            e.default = n
        },
        "6efb": function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i("e57e"),
                a = i.n(n);
            for (var o in n)["default"].indexOf(o) < 0 && function(t) {
                i.d(e, t, (function() {
                    return n[t]
                }))
            }(o);
            e["default"] = a.a
        },
        "844d": function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i("3159"),
                a = i("6efb");
            for (var o in a)["default"].indexOf(o) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(o);
            i("f362");
            var s = i("f0c5"),
                l = Object(s["a"])(a["default"], n["b"], n["c"], !1, null, "9da912bc", null, !1, n["a"], void 0);
            e["default"] = l.exports
        },
        9845: function(t, e, i) {
            var n = i("24fb");
            e = n(!1), e.push([t.i, '@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.input-box[data-v-9da912bc]{margin-top:40px}.input-layer[data-v-9da912bc]{margin-bottom:15px}.input-title[data-v-9da912bc]{font-size:15px;line-height:17px;letter-spacing:-2%;font-weight:500;margin-bottom:8px}.policy-big-title[data-v-9da912bc]{font-size:24px;text-align:center;font-weight:600;margin:20px 0}.policy-mid-title[data-v-9da912bc]{font-size:20px;font-weight:600;margin:10px 0}.policy-ms-title[data-v-9da912bc]{font-size:17px;font-weight:600;margin:10px 0}.policy-sm-title[data-v-9da912bc]{font-size:14px;text-align:center;font-weight:600}.policy-text[data-v-9da912bc]{font-weight:500;font-size:14px}.uni-collapse-item[data-v-9da912bc]{box-sizing:border-box}.uni-collapse-item__title[data-v-9da912bc]{display:flex;width:100%;box-sizing:border-box;flex-direction:row;align-items:center;transition:border-bottom-color .3s}.uni-collapse-item__title-wrap[data-v-9da912bc]{width:100%;flex:1}.uni-collapse-item__title-box[data-v-9da912bc]{padding:0 15px;border-radius:14px;display:flex;width:100%;box-sizing:border-box;flex-direction:row;justify-content:space-between;align-items:center;height:48px;background-color:hsla(0,0%,100%,.10196078431372549);color:#fff;font-size:13px;font-weight:500;cursor:pointer;outline:none}.uni-collapse-item__title-box.is-disabled .uni-collapse-item__title-text[data-v-9da912bc]{color:#999}.uni-collapse-item__title.is-open[data-v-9da912bc]{border-bottom-color:transparent}.uni-collapse-item__title-img[data-v-9da912bc]{height:22px;width:22px;margin-right:10px}.uni-collapse-item__title-text[data-v-9da912bc]{flex:1;font-size:16px;white-space:wrap;color:inherit}.uni-collapse-item__title-arrow[data-v-9da912bc]{display:flex;box-sizing:border-box;align-items:center;justify-content:center;width:20px;height:20px;margin-right:10px;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.uni-collapse-item__title-arrow-active[data-v-9da912bc]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.uni-collapse-item__wrap[data-v-9da912bc]{will-change:height;box-sizing:border-box;background-color:hsla(0,0%,100%,.10196078431372549);overflow:hidden;position:relative;height:0;border-radius:14px}.uni-collapse-item__wrap.is--transition[data-v-9da912bc]{transition-property:height,border-bottom-width;transition-duration:.3s;will-change:height}.uni-collapse-item__wrap-content[data-v-9da912bc]{padding:0 10px;position:absolute;font-size:13px;color:#fff;border-bottom-color:transparent;border-bottom-style:solid;border-bottom-width:0}.uni-collapse-item__wrap-content.open[data-v-9da912bc]{position:relative}.uni-collapse-item--animation[data-v-9da912bc]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.3s;transition-timing-function:ease}', ""]), t.exports = e
        },
        cea3: function(t, e, i) {
            var n = i("9845");
            n.__esModule && (n = n.default), "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            var a = i("4f06").default;
            a("8d143de0", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        e57e: function(t, e, i) {
            "use strict";
            i("7a82"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, i("a9e3"), i("d401"), i("d3b7"), i("25f0"), i("c975"), i("14d9"), i("159b"), i("a434"), i("ac1f");
            var n = {
                name: "uniCollapseItem",
                props: {
                    title: {
                        type: String,
                        default: ""
                    },
                    name: {
                        type: [Number, String],
                        default: ""
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    showAnimation: {
                        type: Boolean,
                        default: !0
                    },
                    open: {
                        type: Boolean,
                        default: !1
                    },
                    thumb: {
                        type: String,
                        default: ""
                    },
                    titleBorder: {
                        type: String,
                        default: "auto"
                    },
                    border: {
                        type: Boolean,
                        default: !0
                    },
                    showArrow: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    var t = "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36));
                    return {
                        isOpen: !1,
                        isheight: null,
                        height: 0,
                        elId: t,
                        nameSync: 0
                    }
                },
                watch: {
                    open: function(t) {
                        this.isOpen = t, this.onClick(t, "init")
                    }
                },
                updated: function(t) {
                    var e = this;
                    this.$nextTick((function() {
                        e.init(!0)
                    }))
                },
                created: function() {
                    this.collapse = this.getCollapse(), this.oldHeight = 0, this.onClick(this.open, "init")
                },
                destroyed: function() {
                    this.__isUnmounted || this.uninstall()
                },
                mounted: function() {
                    this.collapse && ("" !== this.name ? this.nameSync = this.name : this.nameSync = this.collapse.childrens.length + "", -1 === this.collapse.names.indexOf(this.nameSync) ? this.collapse.names.push(this.nameSync) : console.warn("name 值 ".concat(this.nameSync, " 重复")), -1 === this.collapse.childrens.indexOf(this) && this.collapse.childrens.push(this), this.init())
                },
                methods: {
                    init: function(t) {
                        this.getCollapseHeight(t)
                    },
                    uninstall: function() {
                        var t = this;
                        this.collapse && (this.collapse.childrens.forEach((function(e, i) {
                            e === t && t.collapse.childrens.splice(i, 1)
                        })), this.collapse.names.forEach((function(e, i) {
                            e === t.nameSync && t.collapse.names.splice(i, 1)
                        })))
                    },
                    onClick: function(t, e) {
                        this.disabled || (this.isOpen = t, this.isOpen && this.collapse && this.collapse.setAccordion(this), "init" !== e && this.collapse.onChange(t, this))
                    },
                    getCollapseHeight: function(t) {
                        var e = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = uni.createSelectorQuery().in(this);
                        n.select("#".concat(this.elId)).fields({
                            size: !0
                        }, (function(n) {
                            if (!(i >= 10)) {
                                if (!n) return i++, void e.getCollapseHeight(!1, i);
                                e.height = n.height, e.isheight = !0, t || e.onClick(e.isOpen, "init")
                            }
                        })).exec()
                    },
                    getNvueHwight: function(t) {
                        var e = this;
                        dom.getComponentRect(this.$refs["collapse--hook"], (function(i) {
                            if (i && i.result && i.size) {
                                if (e.height = i.size.height, e.isheight = !0, t) return;
                                e.onClick(e.open, "init")
                            }
                        }))
                    },
                    getCollapse: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uniCollapse",
                            e = this.$parent,
                            i = e.$options.name;
                        while (i !== t) {
                            if (e = e.$parent, !e) return !1;
                            i = e.$options.name
                        }
                        return e
                    }
                }
            };
            e.default = n
        },
        f362: function(t, e, i) {
            "use strict";
            var n = i("cea3"),
                a = i.n(n);
            a.a
        }
    }
]);