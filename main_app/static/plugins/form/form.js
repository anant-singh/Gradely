/* 
 Textarea Elastic (Autosize) 
 http://www.jacklmoore.com/autosize
 */
(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(window.jQuery || window.$)
})(function (e) {
    var t, o = {className: "autosizejs", append: "", callback: !1, resizeDelay: 10}, i = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>', n = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"], s = e(i).data("autosize", !0)[0];
    s.style.lineHeight = "99px", "99px" === e(s).css("lineHeight") && n.push("lineHeight"), s.style.lineHeight = "", e.fn.autosize = function (i) {
        return this.length ? (i = e.extend({}, o, i || {}), s.parentNode !== document.body && e(document.body).append(s), this.each(function () {
            function o() {
                var t, o;
                "getComputedStyle"in window ? (t = window.getComputedStyle(u), o = u.getBoundingClientRect().width, e.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function (e, i) {
                    o -= parseInt(t[i], 10)
                }), s.style.width = o + "px") : s.style.width = Math.max(p.width(), 0) + "px"
            }

            function a() {
                var a = {};
                if (t = u, s.className = i.className, d = parseInt(p.css("maxHeight"), 10), e.each(n, function (e, t) {
                    a[t] = p.css(t)
                }), e(s).css(a), o(), window.chrome) {
                    var r = u.style.width;
                    u.style.width = "0px", u.offsetWidth, u.style.width = r
                }
            }

            function r() {
                var e, n;
                t !== u ? a() : o(), s.value = u.value + i.append, s.style.overflowY = u.style.overflowY, n = parseInt(u.style.height, 10), s.scrollTop = 0, s.scrollTop = 9e4, e = s.scrollTop, d && e > d ? (u.style.overflowY = "scroll", e = d) : (u.style.overflowY = "hidden", c > e && (e = c)), e += f, n !== e && (u.style.height = e + "px", w && i.callback.call(u, u))
            }

            function l() {
                clearTimeout(h), h = setTimeout(function () {
                    var e = p.width();
                    e !== g && (g = e, r())
                }, parseInt(i.resizeDelay, 10))
            }

            var d, c, h, u = this, p = e(u), f = 0, w = e.isFunction(i.callback), z = {height: u.style.height, overflow: u.style.overflow, overflowY: u.style.overflowY, wordWrap: u.style.wordWrap, resize: u.style.resize}, g = p.width();
            p.data("autosize") || (p.data("autosize", !0), ("border-box" === p.css("box-sizing") || "border-box" === p.css("-moz-box-sizing") || "border-box" === p.css("-webkit-box-sizing")) && (f = p.outerHeight() - p.height()), c = Math.max(parseInt(p.css("minHeight"), 10) - f || 0, p.height()), p.css({overflow: "hidden", overflowY: "hidden", wordWrap: "break-word", resize: "none" === p.css("resize") || "vertical" === p.css("resize") ? "none" : "horizontal"}), "onpropertychange"in u ? "oninput"in u ? p.on("input.autosize keyup.autosize", r) : p.on("propertychange.autosize", function () {
                "value" === event.propertyName && r()
            }) : p.on("input.autosize", r), i.resizeDelay !== !1 && e(window).on("resize.autosize", l), p.on("autosize.resize", r), p.on("autosize.resizeIncludeStyle", function () {
                t = null, r()
            }), p.on("autosize.destroy", function () {
                t = null, clearTimeout(h), e(window).off("resize", l), p.off("autosize").off(".autosize").css(z).removeData("autosize")
            }), r())
        })) : this
    }
});

(function ($) {
    $.fn.limit = function (options) {
        var defaults = {
            limit: 140, result: true,
            autosize: true,
            text_result: 'Limit <strong> %C </strong>',
            alert_remaining: 5,
            alertClass: 'limited'
        }
        var options = $.extend(defaults, options);
        return this.each(function () {
            var characters = options.limit , wrapper = $('<div class="cl-textlimit" />') , result_class = $('<div class="cl-textlimit-result" />');
            $(this).replaceWith(wrapper);
            wrapper.append(this);
            if (options.result) {
                wrapper.append(result_class.append(options.text_result.replace('%C', characters)));
            }
            if (options.autosize) {
                wrapper.find('textarea').autosize();
            }
            $(this).keyup(function () {
                if ($(this).val().length > characters) {
                    $(this).val($(this).val().substr(0, characters));
                }
                if (options.result != false) {
                    var remaining = characters - $(this).val().length;
                    $('.cl-textlimit-result').html(options.text_result.replace('%C', remaining));
                    if (remaining <= options.alert_remaining) {
                        wrapper.find('textarea').addClass(options.alertClass);
                        result_class.addClass(options.alertClass);
                    } else {
                        wrapper.find('textarea').removeClass(options.alertClass);
                        result_class.removeClass(options.alertClass);
                    }
                }

            });
        });
    };
})(jQuery);


/**
 *  Markdown
 **/
// Released under MIT license
// Copyright (c) 2009-2010 Dominic Baggott
// Copyright (c) 2009-2010 Ash Berlin
// Copyright (c) 2011 Christoph Dorn <christoph@christophdorn.com> (http://www.christophdorn.com)

!function (e) {
    function t() {
        return"Markdown.mk_block( " + uneval(this.toString()) + ", " + uneval(this.trailing) + ", " + uneval(this.lineNumber) + " )"
    }

    function r() {
        var e = require("util");
        return"Markdown.mk_block( " + e.inspect(this.toString()) + ", " + e.inspect(this.trailing) + ", " + e.inspect(this.lineNumber) + " )"
    }

    function n(e) {
        for (var t = 0, r = -1; -1 !== (r = e.indexOf("\n", r + 1));)t++;
        return t
    }

    function i(e, t) {
        function r(e) {
            this.len_after = e, this.name = "close_" + t
        }

        var n = e + "_state", i = "strong" == e ? "em_state" : "strong_state";
        return function (l) {
            if (this[n][0] == t)return this[n].shift(), [l.length, new r(l.length - t.length)];
            var a = this[i].slice(), s = this[n].slice();
            this[n].unshift(t);
            {
                var o = this.processInline(l.substr(t.length)), c = o[o.length - 1];
                this[n].shift()
            }
            if (c instanceof r) {
                o.pop();
                var u = l.length - c.len_after;
                return[u, [e].concat(o)]
            }
            return this[i] = a, this[n] = s, [t.length, t]
        }
    }

    function l(e) {
        for (var t = e.split(""), r = [""], n = !1; t.length;) {
            var i = t.shift();
            switch (i) {
                case" ":
                    n ? r[r.length - 1] += i : r.push("");
                    break;
                case"'":
                case'"':
                    n = !n;
                    break;
                case"\\":
                    i = t.shift();
                default:
                    r[r.length - 1] += i
            }
        }
        return r
    }

    function s(e) {
        return d(e) && e.length > 1 && "object" == typeof e[1] && !d(e[1]) ? e[1] : void 0
    }

    function o(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }

    function c(e) {
        if ("string" == typeof e)return o(e);
        var t = e.shift(), r = {}, n = [];
        for (!e.length || "object" != typeof e[0] || e[0]instanceof Array || (r = e.shift()); e.length;)n.push(arguments.callee(e.shift()));
        var i = "";
        for (var l in r)i += " " + l + '="' + o(r[l]) + '"';
        return"img" == t || "br" == t || "hr" == t ? "<" + t + i + "/>" : "<" + t + i + ">" + n.join("") + "</" + t + ">"
    }

    function u(e, t, r) {
        var n;
        r = r || {};
        var i = e.slice(0);
        "function" == typeof r.preprocessTreeNode && (i = r.preprocessTreeNode(i, t));
        var l = s(i);
        if (l) {
            i[1] = {};
            for (n in l)i[1][n] = l[n];
            l = i[1]
        }
        if ("string" == typeof i)return i;
        switch (i[0]) {
            case"header":
                i[0] = "h" + i[1].level, delete i[1].level;
                break;
            case"bulletlist":
                i[0] = "ul";
                break;
            case"numberlist":
                i[0] = "ol";
                break;
            case"listitem":
                i[0] = "li";
                break;
            case"para":
                i[0] = "p";
                break;
            case"markdown":
                i[0] = "html", l && delete l.references;
                break;
            case"code_block":
                i[0] = "pre", n = l ? 2 : 1;
                var a = ["code"];
                a.push.apply(a, i.splice(n)), i[n] = a;
                break;
            case"inlinecode":
                i[0] = "code";
                break;
            case"img":
                i[1].src = i[1].href, delete i[1].href;
                break;
            case"linebreak":
                i[0] = "br";
                break;
            case"link":
                i[0] = "a";
                break;
            case"link_ref":
                i[0] = "a";
                var o = t[l.ref];
                if (!o)return l.original;
                delete l.ref, l.href = o.href, o.title && (l.title = o.title), delete l.original;
                break;
            case"img_ref":
                i[0] = "img";
                var o = t[l.ref];
                if (!o)return l.original;
                delete l.ref, l.src = o.href, o.title && (l.title = o.title), delete l.original
        }
        if (n = 1, l) {
            for (var c in i[1])n = 2;
            1 === n && i.splice(n, 1)
        }
        for (; n < i.length; ++n)i[n] = arguments.callee(i[n], t, r);
        return i
    }

    function h(e) {
        for (var t = s(e) ? 2 : 1; t < e.length;)"string" == typeof e[t] ? t + 1 < e.length && "string" == typeof e[t + 1] ? e[t] += e.splice(t + 1, 1)[0] : ++t : (arguments.callee(e[t]), ++t)
    }

    var f = e.Markdown = function _(e) {
        switch (typeof e) {
            case"undefined":
                this.dialect = _.dialects.Gruber;
                break;
            case"object":
                this.dialect = e;
                break;
            default:
                if (!(e in _.dialects))throw new Error("Unknown Markdown dialect '" + String(e) + "'");
                this.dialect = _.dialects[e]
        }
        this.em_state = [], this.strong_state = [], this.debug_indent = ""
    };
    e.parse = function (e, t) {
        var r = new f(t);
        return r.toTree(e)
    }, e.toHTML = function (t, r, n) {
        var i = e.toHTMLTree(t, r, n);
        return e.renderJsonML(i)
    }, e.toHTMLTree = function (e, t, r) {
        "string" == typeof e && (e = this.parse(e, t));
        var n = s(e), i = {};
        n && n.references && (i = n.references);
        var l = u(e, i, r);
        return h(l), l
    };
    var g = f.mk_block = function (e, n, i) {
        1 == arguments.length && (n = "\n\n");
        var l = new String(e);
        return l.trailing = n, l.inspect = r, l.toSource = t, void 0 != i && (l.lineNumber = i), l
    };
    f.prototype.split_blocks = function (e) {
        var t, r = /([\s\S]+?)($|\n(?:\s*\n|$)+)/g, i = [], l = 1;
        for (null != (t = /^(\s*\n)/.exec(e)) && (l += n(t[0]), r.lastIndex = t[0].length); null !== (t = r.exec(e));)i.push(g(t[1], t[2], l)), l += n(t[0]);
        return i
    }, f.prototype.processBlock = function (e, t) {
        var r = this.dialect.block, n = r.__order__;
        if ("__call__"in r)return r.__call__.call(this, e, t);
        for (var i = 0; i < n.length; i++) {
            var l = r[n[i]].call(this, e, t);
            if (l)return(!d(l) || l.length > 0 && !d(l[0])) && this.debug(n[i], "didn't return a proper array"), l
        }
        return[]
    }, f.prototype.processInline = function (e) {
        return this.dialect.inline.__call__.call(this, String(e))
    }, f.prototype.toTree = function (e, t) {
        var r = e instanceof Array ? e : this.split_blocks(e), n = this.tree;
        try {
            for (this.tree = t || this.tree || ["markdown"]; r.length;) {
                var i = this.processBlock(r.shift(), r);
                i.length && this.tree.push.apply(this.tree, i)
            }
            return this.tree
        } finally {
            t && (this.tree = n)
        }
    }, f.prototype.debug = function () {
        var e = Array.prototype.slice.call(arguments);
        e.unshift(this.debug_indent), "undefined" != typeof print && print.apply(print, e), "undefined" != typeof console && "undefined" != typeof console.log && console.log.apply(null, e)
    }, f.prototype.loop_re_over_block = function (e, t, r) {
        for (var n, i = t.valueOf(); i.length && null != (n = e.exec(i));)i = i.substr(n[0].length), r.call(this, n);
        return i
    }, f.dialects = {}, f.dialects.Gruber = {block: {atxHeader: function (e, t) {
        var r = e.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);
        if (!r)return void 0;
        var n = ["header", {level: r[1].length}];
        return Array.prototype.push.apply(n, this.processInline(r[2])), r[0].length < e.length && t.unshift(g(e.substr(r[0].length), e.trailing, e.lineNumber + 2)), [n]
    }, setextHeader: function (e, t) {
        var r = e.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);
        if (!r)return void 0;
        var n = "=" === r[2] ? 1 : 2, i = ["header", {level: n}, r[1]];
        return r[0].length < e.length && t.unshift(g(e.substr(r[0].length), e.trailing, e.lineNumber + 2)), [i]
    }, code: function (e, t) {
        var r = [], n = /^(?: {0,3}\t| {4})(.*)\n?/;
        if (!e.match(n))return void 0;
        e:for (; ;) {
            var i = this.loop_re_over_block(n, e.valueOf(), function (e) {
                r.push(e[1])
            });
            if (i.length) {
                t.unshift(g(i, e.trailing));
                break e
            }
            if (!t.length)break e;
            if (!t[0].match(n))break e;
            r.push(e.trailing.replace(/[^\n]/g, "").substring(2)), e = t.shift()
        }
        return[
            ["code_block", r.join("\n")]
        ]
    }, horizRule: function (e, t) {
        var r = e.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);
        if (!r)return void 0;
        var n = [
            ["hr"]
        ];
        return r[1] && n.unshift.apply(n, this.processBlock(r[1], [])), r[3] && t.unshift(g(r[3])), n
    }, lists: function () {
        function e(e) {
            return new RegExp("(?:^(" + o + "{0," + e + "} {0,3})(" + l + ")\\s+)|(^" + o + "{0," + (e - 1) + "}[ ]{0,4})")
        }

        function t(e) {
            return e.replace(/ {0,3}\t/g, "    ")
        }

        function r(e, t, r, n) {
            if (t)return e.push(["para"].concat(r)), void 0;
            var i = e[e.length - 1]instanceof Array && "para" == e[e.length - 1][0] ? e[e.length - 1] : e;
            n && e.length > 1 && r.unshift(n);
            for (var l = 0; l < r.length; l++) {
                var a = r[l], s = "string" == typeof a;
                s && i.length > 1 && "string" == typeof i[i.length - 1] ? i[i.length - 1] += a : i.push(a)
            }
        }

        function n(e, t) {
            for (var r = new RegExp("^(" + o + "{" + e + "}.*?\\n?)*$"), n = new RegExp("^" + o + "{" + e + "}", "gm"), i = []; t.length > 0;) {
                if (r.exec(t[0])) {
                    var l = t.shift(), a = l.replace(n, "");
                    i.push(g(a, l.trailing, l.lineNumber))
                }
                break
            }
            return i
        }

        function i(e, t, r) {
            var n = e.list, i = n[n.length - 1];
            if (!(i[1]instanceof Array && "para" == i[1][0]))if (t + 1 == r.length)i.push(["para"].concat(i.splice(1))); else {
                var l = i.pop();
                i.push(["para"].concat(i.splice(1)), l)
            }
        }

        var l = "[*+-]|\\d+\\.", a = /[*+-]/, s = new RegExp("^( {0,3})(" + l + ")[ 	]+"), o = "(?: {0,3}\\t| {4})";
        return function (l, o) {
            function c(e) {
                var t = a.exec(e[2]) ? ["bulletlist"] : ["numberlist"];
                return p.push({list: t, indent: e[1]}), t
            }

            var u = l.match(s);
            if (!u)return void 0;
            for (var h, f, p = [], g = c(u), d = !1, _ = [p[0].list]; ;) {
                for (var b = l.split(/(?=\n)/), k = "", m = 0; m < b.length; m++) {
                    var y = "", w = b[m].replace(/^\n/, function (e) {
                        return y = e, ""
                    }), M = e(p.length);
                    if (u = w.match(M), void 0 !== u[1]) {
                        k.length && (r(h, d, this.processInline(k), y), d = !1, k = ""), u[1] = t(u[1]);
                        var x = Math.floor(u[1].length / 4) + 1;
                        if (x > p.length)g = c(u), h.push(g), h = g[1] = ["listitem"]; else {
                            var S = !1;
                            for (f = 0; f < p.length; f++)if (p[f].indent == u[1]) {
                                g = p[f].list, p.splice(f + 1), S = !0;
                                break
                            }
                            S || (x++, x <= p.length ? (p.splice(x), g = p[x - 1].list) : (g = c(u), h.push(g))), h = ["listitem"], g.push(h)
                        }
                        y = ""
                    }
                    w.length > u[0].length && (k += y + w.substr(u[0].length))
                }
                k.length && (r(h, d, this.processInline(k), y), d = !1, k = "");
                var $ = n(p.length, o);
                $.length > 0 && (v(p, i, this), h.push.apply(h, this.toTree($, [])));
                var j = o[0] && o[0].valueOf() || "";
                if (!j.match(s) && !j.match(/^ /))break;
                l = o.shift();
                var A = this.dialect.block.horizRule(l, o);
                if (A) {
                    _.push.apply(_, A);
                    break
                }
                v(p, i, this), d = !0
            }
            return _
        }
    }(), blockquote: function (e, t) {
        if (!e.match(/^>/m))return void 0;
        var r = [];
        if (">" != e[0]) {
            for (var n = e.split(/\n/), i = []; n.length && ">" != n[0][0];)i.push(n.shift());
            e = n.join("\n"), r.push.apply(r, this.processBlock(i.join("\n"), []))
        }
        for (; t.length && ">" == t[0][0];) {
            var l = t.shift();
            e = new String(e + e.trailing + l), e.trailing = l.trailing
        }
        {
            var a = e.replace(/^> ?/gm, "");
            this.tree
        }
        return r.push(this.toTree(a, ["blockquote"])), r
    }, referenceDefn: function (e, t) {
        var r = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
        if (!e.match(r))return void 0;
        s(this.tree) || this.tree.splice(1, 0, {});
        var n = s(this.tree);
        void 0 === n.references && (n.references = {});
        var i = this.loop_re_over_block(r, e, function (e) {
            e[2] && "<" == e[2][0] && ">" == e[2][e[2].length - 1] && (e[2] = e[2].substring(1, e[2].length - 1));
            var t = n.references[e[1].toLowerCase()] = {href: e[2]};
            void 0 !== e[4] ? t.title = e[4] : void 0 !== e[5] && (t.title = e[5])
        });
        return i.length && t.unshift(g(i, e.trailing)), []
    }, para: function (e) {
        return[["para"].concat(this.processInline(e))]
    }}}, f.dialects.Gruber.inline = {__oneElement__: function (e, t, r) {
        var n, i;
        t = t || this.dialect.inline.__patterns__;
        var l = new RegExp("([\\s\\S]*?)(" + (t.source || t) + ")");
        if (n = l.exec(e), !n)return[e.length, e];
        if (n[1])return[n[1].length, n[1]];
        var i;
        return n[2]in this.dialect.inline && (i = this.dialect.inline[n[2]].call(this, e.substr(n.index), n, r || [])), i = i || [n[2].length, n[2]]
    }, __call__: function (e, t) {
        function r(e) {
            "string" == typeof e && "string" == typeof i[i.length - 1] ? i[i.length - 1] += e : i.push(e)
        }

        for (var n, i = []; e.length > 0;)n = this.dialect.inline.__oneElement__.call(this, e, t, i), e = e.substr(n.shift()), v(n, r);
        return i
    }, "]": function () {
    }, "}": function () {
    }, "\\": function (e) {
        return e.match(/^\\[\\`\*_{}\[\]()#\+.!\-]/) ? [2, e[1]] : [1, "\\"]
    }, "![": function (e) {
        var t = e.match(/^!\[(.*?)\][ \t]*\([ \t]*(\S*)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);
        if (t) {
            t[2] && "<" == t[2][0] && ">" == t[2][t[2].length - 1] && (t[2] = t[2].substring(1, t[2].length - 1)), t[2] = this.dialect.inline.__call__.call(this, t[2], /\\/)[0];
            var r = {alt: t[1], href: t[2] || ""};
            return void 0 !== t[4] && (r.title = t[4]), [t[0].length, ["img", r]]
        }
        return t = e.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/), t ? [t[0].length, ["img_ref", {alt: t[1], ref: t[2].toLowerCase(), original: t[0]}]] : [2, "!["]
    }, "[": function b(e) {
        var t = String(e), r = f.DialectHelpers.inline_until_char.call(this, e.substr(1), "]");
        if (!r)return[1, "["];
        var b, n, i = 1 + r[0], l = r[1];
        e = e.substr(i);
        var a = e.match(/^\s*\([ \t]*(\S+)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);
        if (a) {
            var s = a[1];
            if (i += a[0].length, s && "<" == s[0] && ">" == s[s.length - 1] && (s = s.substring(1, s.length - 1)), !a[3])for (var o = 1, c = 0; c < s.length; c++)switch (s[c]) {
                case"(":
                    o++;
                    break;
                case")":
                    0 == --o && (i -= s.length - c, s = s.substring(0, c))
            }
            return s = this.dialect.inline.__call__.call(this, s, /\\/)[0], n = {href: s || ""}, void 0 !== a[3] && (n.title = a[3]), b = ["link", n].concat(l), [i, b]
        }
        return a = e.match(/^\s*\[(.*?)\]/), a ? (i += a[0].length, n = {ref: (a[1] || String(l)).toLowerCase(), original: t.substr(0, i)}, b = ["link_ref", n].concat(l), [i, b]) : 1 == l.length && "string" == typeof l[0] ? (n = {ref: l[0].toLowerCase(), original: t.substr(0, i)}, b = ["link_ref", n, l[0]], [i, b]) : [1, "["]
    }, "<": function (e) {
        var t;
        return null != (t = e.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/)) ? t[3] ? [t[0].length, ["link", {href: "mailto:" + t[3]}, t[3]]] : "mailto" == t[2] ? [t[0].length, ["link", {href: t[1]}, t[1].substr("mailto:".length)]] : [t[0].length, ["link", {href: t[1]}, t[1]]] : [1, "<"]
    }, "`": function (e) {
        var t = e.match(/(`+)(([\s\S]*?)\1)/);
        return t && t[2] ? [t[1].length + t[2].length, ["inlinecode", t[3]]] : [1, "`"]
    }, "  \n": function () {
        return[3, ["linebreak"]]
    }}, f.dialects.Gruber.inline["**"] = i("strong", "**"), f.dialects.Gruber.inline.__ = i("strong", "__"), f.dialects.Gruber.inline["*"] = i("em", "*"), f.dialects.Gruber.inline._ = i("em", "_"), f.buildBlockOrder = function (e) {
        var t = [];
        for (var r in e)"__order__" != r && "__call__" != r && t.push(r);
        e.__order__ = t
    }, f.buildInlinePatterns = function (e) {
        var t = [];
        for (var r in e)if (!r.match(/^__.*__$/)) {
            var n = r.replace(/([\\.*+?|()\[\]{}])/g, "\\$1").replace(/\n/, "\\n");
            t.push(1 == r.length ? n : "(?:" + n + ")")
        }
        t = t.join("|"), e.__patterns__ = t;
        var i = e.__call__;
        e.__call__ = function (e, r) {
            return void 0 != r ? i.call(this, e, r) : i.call(this, e, t)
        }
    }, f.DialectHelpers = {}, f.DialectHelpers.inline_until_char = function (e, t) {
        for (var r = 0, n = []; ;) {
            if (e[r] == t)return r++, [r, n];
            if (r >= e.length)return null;
            var i = this.dialect.inline.__oneElement__.call(this, e.substr(r));
            r += i[0], n.push.apply(n, i.slice(1))
        }
    }, f.subclassDialect = function (e) {
        function t() {
        }

        function r() {
        }

        return t.prototype = e.block, r.prototype = e.inline, {block: new t, inline: new r}
    }, f.buildBlockOrder(f.dialects.Gruber.block), f.buildInlinePatterns(f.dialects.Gruber.inline), f.dialects.Maruku = f.subclassDialect(f.dialects.Gruber), f.dialects.Maruku.processMetaHash = function (e) {
        for (var t = l(e), r = {}, n = 0; n < t.length; ++n)if (/^#/.test(t[n]))r.id = t[n].substring(1); else if (/^\./.test(t[n]))r["class"] = r["class"] ? r["class"] + t[n].replace(/./, " ") : t[n].substring(1); else if (/\=/.test(t[n])) {
            var i = t[n].split(/\=/);
            r[i[0]] = i[1]
        }
        return r
    }, f.dialects.Maruku.block.document_meta = function (e) {
        if (e.lineNumber > 1)return void 0;
        if (!e.match(/^(?:\w+:.*\n)*\w+:.*$/))return void 0;
        s(this.tree) || this.tree.splice(1, 0, {});
        var t = e.split(/\n/);
        for (p in t) {
            var r = t[p].match(/(\w+):\s*(.*)$/), n = r[1].toLowerCase(), i = r[2];
            this.tree[1][n] = i
        }
        return[]
    }, f.dialects.Maruku.block.block_meta = function (e) {
        var t = e.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);
        if (!t)return void 0;
        var r, n = this.dialect.processMetaHash(t[2]);
        if ("" === t[1]) {
            var i = this.tree[this.tree.length - 1];
            if (r = s(i), "string" == typeof i)return void 0;
            r || (r = {}, i.splice(1, 0, r));
            for (a in n)r[a] = n[a];
            return[]
        }
        var l = e.replace(/\n.*$/, ""), o = this.processBlock(l, []);
        r = s(o[0]), r || (r = {}, o[0].splice(1, 0, r));
        for (a in n)r[a] = n[a];
        return o
    }, f.dialects.Maruku.block.definition_list = function (e, t) {
        var r, n = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/, i = ["dl"];
        if (!(s = e.match(n)))return void 0;
        for (var l = [e]; t.length && n.exec(t[0]);)l.push(t.shift());
        for (var a = 0; a < l.length; ++a) {
            var s = l[a].match(n), o = s[1].replace(/\n$/, "").split(/\n/), c = s[2].split(/\n:\s+/);
            for (r = 0; r < o.length; ++r)i.push(["dt", o[r]]);
            for (r = 0; r < c.length; ++r)i.push(["dd"].concat(this.processInline(c[r].replace(/(\n)\s+/, "$1"))))
        }
        return[i]
    }, f.dialects.Maruku.inline["{:"] = function (e, t, r) {
        if (!r.length)return[2, "{:"];
        var n = r[r.length - 1];
        if ("string" == typeof n)return[2, "{:"];
        var i = e.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);
        if (!i)return[2, "{:"];
        var l = this.dialect.processMetaHash(i[1]), a = s(n);
        a || (a = {}, n.splice(1, 0, a));
        for (var o in l)a[o] = l[o];
        return[i[0].length, ""]
    }, f.buildBlockOrder(f.dialects.Maruku.block), f.buildInlinePatterns(f.dialects.Maruku.inline);
    var v, d = Array.isArray || function (e) {
        return"[object Array]" == Object.prototype.toString.call(e)
    };
    v = Array.prototype.forEach ? function (e, t, r) {
        return e.forEach(t, r)
    } : function (e, t, r) {
        for (var n = 0; n < e.length; n++)t.call(r || e, e[n], n, e)
    }, e.renderJsonML = function (e, t) {
        t = t || {}, t.root = t.root || !1;
        var r = [];
        if (t.root)r.push(c(e)); else for (e.shift(), !e.length || "object" != typeof e[0] || e[0]instanceof Array || e.shift(); e.length;)r.push(c(e.shift()));
        return r.join("\n\n")
    }
}(function () {
    return"undefined" == typeof exports ? (window.markdown = {}, window.markdown) : exports
}());
/**
 toMarkdown                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      **/
var toMarkdown = function (string) {
    var ELEMENTS = [
        {patterns: 'p', replacement: function (str, attrs, innerHTML) {
            return innerHTML ? '\n\n' + innerHTML + '\n' : '';
        }},
        {patterns: 'br', type: 'void', replacement: '\n'},
        {patterns: 'h([1-6])', replacement: function (str, hLevel, attrs, innerHTML) {
            var hPrefix = '';
            for (var i = 0; i < hLevel; i++) {
                hPrefix += '#';
            }
            return'\n\n' + hPrefix + ' ' + innerHTML + '\n';
        }},
        {patterns: 'hr', type: 'void', replacement: '\n\n* * *\n'},
        {patterns: 'a', replacement: function (str, attrs, innerHTML) {
            var href = attrs.match(attrRegExp('href')), title = attrs.match(attrRegExp('title'));
            return href ? '[' + innerHTML + ']' + '(' + href[1] + (title && title[1] ? ' "' + title[1] + '"' : '') + ')' : str;
        }},
        {patterns: ['b', 'strong'], replacement: function (str, attrs, innerHTML) {
            return innerHTML ? '**' + innerHTML + '**' : '';
        }},
        {patterns: ['i', 'em'], replacement: function (str, attrs, innerHTML) {
            return innerHTML ? '_' + innerHTML + '_' : '';
        }},
        {patterns: 'code', replacement: function (str, attrs, innerHTML) {
            return innerHTML ? '`' + innerHTML + '`' : '';
        }},
        {patterns: 'img', type: 'void', replacement: function (str, attrs, innerHTML) {
            var src = attrs.match(attrRegExp('src')), alt = attrs.match(attrRegExp('alt')), title = attrs.match(attrRegExp('title'));
            return'![' + (alt && alt[1] ? alt[1] : '') + ']' + '(' + src[1] + (title && title[1] ? ' "' + title[1] + '"' : '') + ')';
        }}
    ];
    for (var i = 0, len = ELEMENTS.length; i < len; i++) {
        if (typeof ELEMENTS[i].patterns === 'string') {
            string = replaceEls(string, {tag: ELEMENTS[i].patterns, replacement: ELEMENTS[i].replacement, type: ELEMENTS[i].type});
        } else {
            for (var j = 0, pLen = ELEMENTS[i].patterns.length; j < pLen; j++) {
                string = replaceEls(string, {tag: ELEMENTS[i].patterns[j], replacement: ELEMENTS[i].replacement, type: ELEMENTS[i].type});
            }
        }
    }
    function replaceEls(html, elProperties) {
        var pattern = elProperties.type === 'void' ? '<' + elProperties.tag + '\\b([^>]*)\\/?>' : '<' + elProperties.tag + '\\b([^>]*)>([\\s\\S]*?)<\\/' + elProperties.tag + '>', regex = new RegExp(pattern, 'gi'), markdown = '';
        if (typeof elProperties.replacement === 'string') {
            markdown = html.replace(regex, elProperties.replacement);
        } else {
            markdown = html.replace(regex, function (str, p1, p2, p3) {
                return elProperties.replacement.call(this, str, p1, p2, p3);
            });
        }
        return markdown;
    }

    function attrRegExp(attr) {
        return new RegExp(attr + '\\s*=\\s*["\']?([^"\']*)["\']?', 'i');
    }

    string = string.replace(/<pre\b[^>]*>`([\s\S]*)`<\/pre>/gi, function (str, innerHTML) {
        innerHTML = innerHTML.replace(/^\t+/g, '  ');
        innerHTML = innerHTML.replace(/\n/g, '\n    ');
        return'\n\n    ' + innerHTML + '\n';
    });
    string = string.replace(/^(\s{0,3}\d+)\. /g, '$1\\. ');
    var noChildrenRegex = /<(ul|ol)\b[^>]*>(?:(?!<ul|<ol)[\s\S])*?<\/\1>/gi;
    while (string.match(noChildrenRegex)) {
        string = string.replace(noChildrenRegex, function (str) {
            return replaceLists(str);
        });
    }
    function replaceLists(html) {
        html = html.replace(/<(ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi, function (str, listType, innerHTML) {
            var lis = innerHTML.split('</li>');
            lis.splice(lis.length - 1, 1);
            for (i = 0, len = lis.length; i < len; i++) {
                if (lis[i]) {
                    var prefix = (listType === 'ol') ? (i + 1) + ".  " : "*   ";
                    lis[i] = lis[i].replace(/\s*<li[^>]*>([\s\S]*)/i, function (str, innerHTML) {
                        innerHTML = innerHTML.replace(/^\s+/, '');
                        innerHTML = innerHTML.replace(/\n\n/g, '\n\n    ');
                        innerHTML = innerHTML.replace(/\n([ ]*)+(\*|\d+\.) /g, '\n$1    $2 ');
                        return prefix + innerHTML;
                    });
                }
            }
            return lis.join('\n');
        });
        return'\n\n' + html.replace(/[ \t]+\n|\s+$/g, '');
    }

    var deepest = /<blockquote\b[^>]*>((?:(?!<blockquote)[\s\S])*?)<\/blockquote>/gi;
    while (string.match(deepest)) {
        string = string.replace(deepest, function (str) {
            return replaceBlockquotes(str);
        });
    }
    function replaceBlockquotes(html) {
        html = html.replace(/<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/gi, function (str, inner) {
            inner = inner.replace(/^\s+|\s+$/g, '');
            inner = cleanUp(inner);
            inner = inner.replace(/^/gm, '> ');
            inner = inner.replace(/^(>([ \t]{2,}>)+)/gm, '> >');
            return inner;
        });
        return html;
    }

    function cleanUp(string) {
        string = string.replace(/^[\t\r\n]+|[\t\r\n]+$/g, '');
        string = string.replace(/\n\s+\n/g, '\n\n');
        string = string.replace(/\n{3,}/g, '\n\n');
        return string;
    }

    return cleanUp(string);
};
if (typeof exports === 'object') {
    exports.toMarkdown = toMarkdown;
}
/* 
 * ===============================
 * bootstrap-markdown.js  v2.1.0
 * http://github.com/toopay/bootstrap-markdown
 * ===============================
 */
!function (t) {
    "use strict";
    var e = function (e, n) {
        this.$ns = "bootstrap-markdown", this.$element = t(e), this.$editable = {el: null, type: null, attrKeys: [], attrValues: [], content: null}, this.$options = t.extend(!0, {}, t.fn.markdown.defaults, n), this.$oldContent = null, this.$isPreview = !1, this.$editor = null, this.$textarea = null, this.$handler = [], this.$callback = [], this.$nextTab = [], this.showEditor()
    };
    e.prototype = {constructor: e, __alterButtons: function (e, n) {
        var i = this.$handler, a = "all" == e, r = this;
        t.each(i, function (t, i) {
            var s = !0;
            s = a ? !1 : i.indexOf(e) < 0, 0 == s && n(r.$editor.find('button[data-handler="' + i + '"]'))
        })
    }, __buildButtons: function (e, n) {
        var i, a = this.$ns, r = this.$handler, s = this.$callback;
        for (i = 0; i < e.length; i++) {
            var o, l = e[i];
            for (o = 0; o < l.length; o++) {
                var c, h = l[o].data, d = t("<div/>", {"class": "btn-group"});
                for (c = 0; c < h.length; c++) {
                    var u = h[c], p = "", f = a + "-" + u.name, v = u.btnText ? u.btnText : "", g = u.btnClass ? u.btnClass : "btn", m = u.tabIndex ? u.tabIndex : "-1";
                    1 == u.toggle && (p = ' data-toggle="button"'), d.append('<button class="' + g + ' btn-default btn-sm" title="' + u.title + '" tabindex="' + m + '" data-provider="' + a + '" data-handler="' + f + '"' + p + '><span class="' + u.icon + '"></span> ' + v + "</button>"), r.push(f), s.push(u.callback)
                }
                n.append(d)
            }
        }
        return n
    }, __setListener: function () {
        var e = "undefined" != typeof this.$textarea.attr("rows"), n = this.$textarea.val().split("\n").length > 5 ? this.$textarea.val().split("\n").length : "5", i = e ? this.$textarea.attr("rows") : n;
        this.$textarea.attr("rows", i), this.$textarea.css("resize", "none"), this.$textarea.on("focus", t.proxy(this.focus, this)).on("keypress", t.proxy(this.keypress, this)).on("keyup", t.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$textarea.on("keydown", t.proxy(this.keydown, this)), this.$textarea.data("markdown", this)
    }, __handle: function (e) {
        var n = t(e.currentTarget), i = this.$handler, a = this.$callback, r = n.attr("data-handler"), s = i.indexOf(r), o = a[s];
        t(e.currentTarget).focus(), o(this), r.indexOf("cmdSave") < 0 && this.$textarea.focus(), e.preventDefault()
    }, showEditor: function () {
        var e, n = this, i = this.$ns, a = this.$element, r = (a.css("height"), a.css("width"), this.$editable), s = this.$handler, o = this.$callback, l = this.$options, c = t("<div/>", {"class": "md-editor", click: function () {
            n.focus()
        }});
        if (null == this.$editor) {
            var h = t("<div/>", {"class": "md-header btn-toolbar"});
            if (l.buttons.length > 0 && (h = this.__buildButtons(l.buttons, h)), l.additionalButtons.length > 0 && (h = this.__buildButtons(l.additionalButtons, h)), c.append(h), a.is("textarea"))a.before(c), e = a, e.addClass("md-input form-control"), c.append(e); else {
                var d = "function" == typeof toMarkdown ? toMarkdown(a.html()) : a.html(), u = t.trim(d);
                e = t("<textarea/>", {"class": "form-control", val: u}), c.append(e), r.el = a, r.type = a.prop("tagName").toLowerCase(), r.content = a.html(), t(a[0].attributes).each(function () {
                    r.attrKeys.push(this.nodeName), r.attrValues.push(this.nodeValue)
                }), a.replaceWith(c)
            }
            if (l.savable) {
                var p = t("<div/>", {"class": "md-footer"}), f = "cmdSave";
                s.push(f), o.push(l.onSave), p.append('<button class="btn btn-success" data-provider="' + i + '" data-handler="' + f + '"><i class="fa icon-white fa-ok"></i> Save</button>'), c.append(p)
            }
            t.each(["height", "width"], function (t, e) {
                "inherit" != l[e] && (jQuery.isNumeric(l[e]) ? c.css(e, l[e] + "px") : c.addClass(l[e]))
            }), this.$editor = c, this.$textarea = e, this.$editable = r, this.$oldContent = this.getContent(), this.__setListener(), this.$editor.attr("id", (new Date).getTime()), this.$editor.on("click", '[data-provider="bootstrap-markdown"]', t.proxy(this.__handle, this))
        } else this.$editor.show();
        return l.autofocus && (this.$textarea.focus(), this.$editor.addClass("active")), l.onShow(this), this
    }, showPreview: function () {
        var e, n = this.$options, i = n.onPreview(this), a = this.$textarea, r = a.next(), s = t("<div/>", {"class": "md-preview", "data-provider": "markdown-preview"});
        return this.$isPreview = !0, this.disableButtons("all").enableButtons("cmdPreview"), e = "string" == typeof i ? i : "object" == typeof markdown ? markdown.toHTML(a.val()) : a.val(), s.html(e), r && "md-footer" == r.attr("class") ? s.insertBefore(r) : a.parent().append(s), a.hide(), s.data("markdown", this), this
    }, hidePreview: function () {
        this.$isPreview = !1;
        var t = this.$editor.find('div[data-provider="markdown-preview"]');
        return t.remove(), this.enableButtons("all"), this.$textarea.show(), this.__setListener(), this
    }, isDirty: function () {
        return this.$oldContent != this.getContent()
    }, getContent: function () {
        return this.$textarea.val()
    }, setContent: function (t) {
        return this.$textarea.val(t), this
    }, findSelection: function (t) {
        var e, n = this.getContent();
        if (e = n.indexOf(t), e >= 0 && t.length > 0) {
            var i, a = this.getSelection();
            return this.setSelection(e, e + t.length), i = this.getSelection(), this.setSelection(a.start, a.end), i
        }
        return null
    }, getSelection: function () {
        var t = this.$textarea[0];
        return("selectionStart"in t && function () {
            var e = t.selectionEnd - t.selectionStart;
            return{start: t.selectionStart, end: t.selectionEnd, length: e, text: t.value.substr(t.selectionStart, e)}
        } || function () {
            return null
        })()
    }, setSelection: function (t, e) {
        var n = this.$textarea[0];
        return("selectionStart"in n && function () {
            n.selectionStart = t, n.selectionEnd = e
        } || function () {
            return null
        })()
    }, replaceSelection: function (t) {
        var e = this.$textarea[0];
        return("selectionStart"in e && function () {
            return e.value = e.value.substr(0, e.selectionStart) + t + e.value.substr(e.selectionEnd, e.value.length), e.selectionStart = e.value.length, this
        } || function () {
            return e.value += t, jQuery(e)
        })()
    }, getNextTab: function () {
        if (0 == this.$nextTab.length)return null;
        var t, e = this.$nextTab.shift();
        return"function" == typeof e ? t = e() : "object" == typeof e && e.length > 0 && (t = e), t
    }, setNextTab: function (t, e) {
        if ("string" == typeof t) {
            var n = this;
            this.$nextTab.push(function () {
                return n.findSelection(t)
            })
        } else if ("numeric" == typeof t && "numeric" == typeof e) {
            var i = this.getSelection();
            this.setSelection(t, e), this.$nextTab.push(this.getSelection()), this.setSelection(i.start, i.end)
        }
    }, enableButtons: function (t) {
        var e = function (t) {
            t.removeAttr("disabled")
        };
        return this.__alterButtons(t, e), this
    }, disableButtons: function (t) {
        var e = function (t) {
            t.attr("disabled", "disabled")
        };
        return this.__alterButtons(t, e), this
    }, eventSupported: function (t) {
        var e = t in this.$element;
        return e || (this.$element.setAttribute(t, "return;"), e = "function" == typeof this.$element[t]), e
    }, keydown: function (e) {
        this.suppressKeyPressRepeat = ~t.inArray(e.keyCode, [40, 38, 9, 13, 27]), this.keyup(e)
    }, keypress: function (t) {
        this.suppressKeyPressRepeat || this.keyup(t)
    }, keyup: function (t) {
        var e = !1;
        switch (t.keyCode) {
            case 40:
            case 38:
            case 16:
            case 17:
            case 18:
                break;
            case 9:
                var n;
                if (n = this.getNextTab(), null != n) {
                    var i = this;
                    setTimeout(function () {
                        i.setSelection(n.start, n.end)
                    }, 500), e = !0
                } else {
                    var a = this.getSelection();
                    a.start == a.end && a.end == this.getContent().length ? e = !1 : (this.setSelection(this.getContent().length, this.getContent().length), e = !0)
                }
                break;
            case 13:
            case 27:
                e = !1;
                break;
            default:
                e = !1
        }
        e && (t.stopPropagation(), t.preventDefault())
    }, focus: function () {
        var e = this.$options, n = (e.hideable, this.$editor);
        return n.addClass("active"), t(document).find(".md-editor").each(function () {
            if (t(this).attr("id") != n.attr("id")) {
                var e;
                e = t(this).find("textarea").data("markdown"), null == e && (e = t(this).find('div[data-provider="markdown-preview"]').data("markdown")), e && e.blur()
            }
        }), this
    }, blur: function () {
        var e = this.$options, n = e.hideable, i = this.$editor, a = this.$editable;
        if (i.hasClass("active") || 0 == this.$element.parent().length) {
            if (i.removeClass("active"), n)if (null != a.el) {
                var r = t("<" + a.type + "/>"), s = this.getContent(), o = "object" == typeof markdown ? markdown.toHTML(s) : s;
                t(a.attrKeys).each(function (t) {
                    r.attr(a.attrKeys[t], a.attrValues[t])
                }), r.html(o), i.replaceWith(r)
            } else i.hide();
            e.onBlur(this)
        }
        return this
    }};
    var n = t.fn.markdown;
    t.fn.markdown = function (n) {
        return this.each(function () {
            var i = t(this), a = i.data("markdown"), r = "object" == typeof n && n;
            a || i.data("markdown", a = new e(this, r))
        })
    }, t.fn.markdown.defaults = {autofocus: !1, hideable: !1, savable: !1, width: "inherit", height: "inherit", buttons: [
        [
            {name: "groupFont", data: [
                {name: "cmdBold", title: "Bold", icon: "glyphicon glyphicon-bold", callback: function (t) {
                    var e, n, i = t.getSelection(), a = t.getContent();
                    e = 0 == i.length ? "strong text" : i.text, "**" == a.substr(i.start - 2, 2) && "**" == a.substr(i.end, 2) ? (t.setSelection(i.start - 2, i.end + 2), t.replaceSelection(e), n = i.start - 2) : (t.replaceSelection("**" + e + "**"), n = i.start + 2), t.setSelection(n, n + e.length)
                }},
                {name: "cmdItalic", title: "Italic", icon: "glyphicon glyphicon-italic", callback: function (t) {
                    var e, n, i = t.getSelection(), a = t.getContent();
                    e = 0 == i.length ? "emphasized text" : i.text, "*" == a.substr(i.start - 1, 1) && "*" == a.substr(i.end, 1) ? (t.setSelection(i.start - 1, i.end + 1), t.replaceSelection(e), n = i.start - 1) : (t.replaceSelection("*" + e + "*"), n = i.start + 1), t.setSelection(n, n + e.length)
                }},
                {name: "cmdHeading", title: "Heading", icon: "glyphicon glyphicon-font", callback: function (t) {
                    var e, n, i, a, r = t.getSelection(), s = t.getContent();
                    e = 0 == r.length ? "heading text" : r.text, i = 4, "### " == s.substr(r.start - i, i) || (i = 3, "###" == s.substr(r.start - i, i)) ? (t.setSelection(r.start - i, r.end), t.replaceSelection(e), n = r.start - i) : (a = s.substr(r.start - 1, 1), a && "\n" != a ? (t.replaceSelection("\n\n### " + e + "\n"), n = r.start + 6) : (t.replaceSelection("### " + e + "\n"), n = r.start + 4)), t.setSelection(n, n + e.length)
                }}
            ]},
            {name: "groupLink", data: [
                {name: "cmdUrl", title: "URL/Link", icon: "glyphicon glyphicon-globe", callback: function (t) {
                    {
                        var e, n, i, a = t.getSelection();
                        t.getContent()
                    }
                    e = 0 == a.length ? "enter link description here" : a.text, i = prompt("Insert Hyperlink", "http://"), null != i && (t.replaceSelection("[" + e + "](" + i + ")"), n = a.start + 1, t.setSelection(n, n + e.length))
                }},
                {name: "cmdImage", title: "Image", icon: "glyphicon glyphicon-picture", callback: function (t) {
                    {
                        var e, n, i, a = t.getSelection();
                        t.getContent()
                    }
                    e = 0 == a.length ? "enter image description here" : a.text, i = prompt("Insert Image Hyperlink", "http://"), null != i && (t.replaceSelection("![" + e + "](" + i + ' "enter image title here")'), n = a.start + 2, t.setNextTab("enter image title here"), t.setSelection(n, n + e.length))
                }}
            ]},
            {name: "groupMisc", data: [
                {name: "cmdList", title: "List", icon: "glyphicon glyphicon-list", callback: function (e) {
                    {
                        var n, i, a = e.getSelection();
                        e.getContent()
                    }
                    if (0 == a.length)n = "list text here", e.replaceSelection("- " + n), i = a.start + 2; else if (a.text.indexOf("\n") < 0)n = a.text, e.replaceSelection("- " + n), i = a.start + 2; else {
                        var r = [];
                        r = a.text.split("\n"), n = r[0], t.each(r, function (t, e) {
                            r[t] = "- " + e
                        }), e.replaceSelection("\n\n" + r.join("\n")), i = a.start + 4
                    }
                    e.setSelection(i, i + n.length)
                }}
            ]},
            {name: "groupUtil", data: [
                {name: "cmdPreview", toggle: !0, title: "Preview", btnText: "Preview", btnClass: "btn btn-sm", icon: "glyphicon glyphicon-search", callback: function (t) {
                    var e = t.$isPreview;
                    0 == e ? t.showPreview() : t.hidePreview()
                }}
            ]}
        ]
    ], additionalButtons: [], onShow: function () {
    }, onPreview: function () {
    }, onSave: function () {
    }, onBlur: function () {
    }}, t.fn.markdown.Constructor = e, t.fn.markdown.noConflict = function () {
        return t.fn.markdown = n, this
    };
    var i = function (t) {
        var e = t;
        return e.data("markdown") ? (e.data("markdown").showEditor(), void 0) : (e.markdown(e.data()), void 0)
    }, a = function (e) {
        var n, i = !1, a = t(e.currentTarget);
        "focusin" != e.type && "click" != e.type || 1 != a.length || "object" != typeof a[0] || (n = a[0].activeElement, t(n).data("markdown") || ("undefined" == typeof t(n).parent().parent().parent().attr("class") || t(n).parent().parent().parent().attr("class").indexOf("md-editor") < 0 ? ("undefined" == typeof t(n).parent().parent().attr("class") || t(n).parent().parent().attr("class").indexOf("md-editor") < 0) && (i = !0) : i = !1), i && t(document).find(".md-editor").each(function () {
            var e = t(n).parent();
            if (t(this).attr("id") != e.attr("id")) {
                var i;
                i = t(this).find("textarea").data("markdown"), null == i && (i = t(this).find('div[data-provider="markdown-preview"]').data("markdown")), i && i.blur()
            }
        }), e.stopPropagation())
    };
    t(document).on("click.markdown.data-api", '[data-provide="markdown-editable"]',function (e) {
        i(t(this)), e.preventDefault()
    }).on("click",function (t) {
        a(t)
    }).on("focusin",function (t) {
        a(t)
    }).ready(function () {
        t('textarea[data-provide="markdown"]').each(function () {
            i(t(this))
        })
    })
}(window.jQuery);


/*iCheck*/
/*!
 * iCheck v0.9.1 jQuery plugin, http://git.io/uhUPMA
 */
(function (f) {
    function C(a, c, d) {
        var b = a[0], e = /er/.test(d) ? k : /bl/.test(d) ? u : j;
        active = d == E ? {checked: b[j], disabled: b[u], indeterminate: "true" == a.attr(k) || "false" == a.attr(v)} : b[e];
        if (/^(ch|di|in)/.test(d) && !active)p(a, e); else if (/^(un|en|de)/.test(d) && active)w(a, e); else if (d == E)for (var e in active)active[e] ? p(a, e, !0) : w(a, e, !0); else if (!c || "toggle" == d) {
            if (!c)a[r]("ifClicked");
            active ? b[l] !== x && w(a, e) : p(a, e)
        }
    }

    function p(a, c, d) {
        var b = a[0], e = a.parent(), g = c == j, H = c == k, m = H ? v : g ? I : "enabled", r = h(b, m + y(b[l])), L = h(b,
            c + y(b[l]));
        if (!0 !== b[c]) {
            if (!d && c == j && b[l] == x && b.name) {
                var p = a.closest("form"), s = 'input[name="' + b.name + '"]', s = p.length ? p.find(s) : f(s);
                s.each(function () {
                    this !== b && f.data(this, n) && w(f(this), c)
                })
            }
            H ? (b[c] = !0, b[j] && w(a, j, "force")) : (d || (b[c] = !0), g && b[k] && w(a, k, !1));
            J(a, g, c, d)
        }
        b[u] && h(b, z, !0) && e.find("." + F).css(z, "default");
        e[t](L || h(b, c));
        e[A](r || h(b, m) || "")
    }

    function w(a, c, d) {
        var b = a[0], e = a.parent(), g = c == j, f = c == k, m = f ? v : g ? I : "enabled", n = h(b, m + y(b[l])), p = h(b, c + y(b[l]));
        if (!1 !== b[c]) {
            if (f || !d || "force" == d)b[c] = !1;
            J(a, g, m, d)
        }
        !b[u] && h(b, z, !0) && e.find("." + F).css(z, "pointer");
        e[A](p || h(b, c) || "");
        e[t](n || h(b, m))
    }

    function K(a, c) {
        if (f.data(a, n)) {
            var d = f(a), line = d.parents("li.line"), lineLabel = line.find("span").text();
            d.parent().html(d.attr("style", f.data(a, n).s || "")[r](c || ""));
            d.off(".i").unwrap();
            d.removeAttr("id");
            d.next().removeAttr("for");
            line.append("<label>" + lineLabel + "</label>");
            f(D + '[for="' + a.id + '"]').add(d.closest(D)).off(".i")
        }
    }

    function h(a, c, d) {
        if (f.data(a, n))return f.data(a, n).o[c + (d ? "" : "Class")]
    }

    function y(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function J(a, c, d, b) {
        if (!b) {
            if (c)a[r]("ifToggled");
            a[r]("ifChanged")[r]("if" + y(d))
        }
    }

    var n = "iCheck",
        F = n + "-helper", x = "radio", j = "checked", I = "un" + j, u = "disabled", v = "determinate", k = "in" + v, E = "update", l = "type", t = "addClass", A = "removeClass", r = "trigger", D = "label", z = "cursor", G = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini/i.test(navigator.userAgent);
    f.fn[n] = function (a, c) {
        var d = ":checkbox, :" + x, b = f(), e = function (a) {
            a.each(function () {
                var a = f(this);
                b = a.is(d) ? b.add(a) : b.add(a.find(d))
            })
        };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a = a.toLowerCase(),
            e(this), b.each(function () {
            "destroy" == a ? K(this, "ifDestroyed") : C(f(this), !0, a);
            f.isFunction(c) && c()
        });
        if ("object" == typeof a || !a) {
            var g = f.extend({checkedClass: j, disabledClass: u, indeterminateClass: k, labelHover: !0}, a), h = g.handle, m = g.hoverClass || "hover", y = g.focusClass || "focus", v = g.activeClass || "active", z = !!g.labelHover, s = g.labelHoverClass || "hover", B = ("" + g.increaseArea).replace("%", "") | 0;
            if ("checkbox" == h || h == x)d = ":" + h;
            -50 > B && (B = -50);
            e(this);
            return b.each(function () {
                K(this);
                var a = f(this), b = this, c = b.id, d =
                    -B + "%", e = 100 + 2 * B + "%", e = {position: "absolute", top: d, left: d, display: "block", width: e, height: e, margin: 0, padding: 0, background: "#fff", border: 0, opacity: 0}, d = G ? {position: "absolute", visibility: "hidden"} : B ? e : {position: "absolute", opacity: 0}, h = "checkbox" == b[l] ? g.checkboxClass || "icheckbox" : g.radioClass || "i" + x, k = f(D + '[for="' + c + '"]').add(a.closest(D)), q = a.wrap('<div class="' + h + '"/>')[r]("ifCreated").parent().append(g.insert), e = f('<ins class="' + F + '"/>').css(e).appendTo(q);
                a.data(n, {o: g, s: a.attr("style")}).css(d);
                g.inheritClass && q[t](b.className);
                g.inheritID && c && q.attr("id", n + "-" + c);
                "static" == q.css("position") && q.css("position", "relative");
                C(a, !0, E);
                if (k.length)k.on("click.i mouseenter.i mouseleave.i touchbegin.i touchend.i", function (c) {
                    var d = c[l], e = f(this);
                    if (!b[u])if ("click" == d ? C(a, !1, !0) : z && (/ve|nd/.test(d) ? (q[A](m), e[A](s)) : (q[t](m), e[t](s))), G)c.stopPropagation(); else return!1
                });
                a.on("click.i focus.i blur.i keyup.i keydown.i keypress.i", function (c) {
                    var d = c[l];
                    c = c.keyCode;
                    if ("click" == d)return!1;
                    if ("keydown" ==
                        d && 32 == c)return b[l] == x && b[j] || (b[j] ? w(a, j) : p(a, j)), !1;
                    if ("keyup" == d && b[l] == x)!b[j] && p(a, j); else if (/us|ur/.test(d))q["blur" == d ? A : t](y)
                });
                e.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i", function (d) {
                    var c = d[l], e = /wn|up/.test(c) ? v : m;
                    if (!b[u]) {
                        if ("click" == c)C(a, !1, !0); else {
                            if (/wn|er|in/.test(c))q[t](e); else q[A](e + " " + v);
                            if (k.length && z && e == m)k[/ut|nd/.test(c) ? A : t](s)
                        }
                        if (G)d.stopPropagation(); else return!1
                    }
                })
            })
        }
        return this
    }
})(jQuery);


/* bootstrapSwitch v1.8  */
!function ($) {
    $.fn.bootstrapSwitch = function (method) {
        var inputSelector = 'input[type!="hidden"]';
        var methods = {init: function () {
            return this.each(function () {
                var $element = $(this), $div, $switchLeft, $switchRight, $label, $form = $element.closest("form"), myClasses = "", classes = $element.attr("class"), color, moving, onLabel = "<i class='fa fa-check'></i>", offLabel = "<i class='fa fa-times'></i>", icon = false, textLabel = false;
                $.each(["switch-mini", "switch-small", "switch-large"], function (i, el) {
                    if (classes.indexOf(el) >= 0) {
                        myClasses = el
                    }
                });
                $element.addClass("has-switch");
                if ($element.data("on") !== undefined) {
                    color = "switch-" + $element.data("on")
                }
                if ($element.data("on-label") !== undefined) {
                    onLabel = $element.data("on-label")
                }
                if ($element.data("off-label") !== undefined) {
                    offLabel = $element.data("off-label")
                }
                if ($element.data("label-icon") !== undefined) {
                    icon = $element.data("label-icon")
                }
                if ($element.data("text-label") !== undefined) {
                    textLabel = $element.data("text-label")
                }
                $switchLeft = $("<span>").addClass("switch-left").addClass(myClasses).addClass(color).html(onLabel);
                color = "";
                if ($element.data("off") !== undefined) {
                    color = "switch-" + $element.data("off")
                }
                $switchRight = $("<span>").addClass("switch-right").addClass(myClasses).addClass(color).html(offLabel);
                $label = $("<label>").html("&nbsp;").addClass(myClasses + " normal").attr("for", $element.find(inputSelector).attr("id"));
                if (icon) {
                    $label.html('<i class="fa ' + icon + '"></i>').removeClass("normal")
                }
                if (textLabel) {
                    $label.html("" + textLabel + "")
                }
                $div = $element.find(inputSelector).wrap($("<div>")).parent().data("animated", false);
                if ($element.data("animated") !== false) {
                    $div.addClass("switch-animate").data("animated", true)
                }
                $div.append($switchLeft).append($label).append($switchRight);
                $element.addClass($element.find(inputSelector).is(":checked") ? "checked" : "unchecked");
                $element.find(">div").addClass($element.find(inputSelector).is(":checked") ? "switch-on" : "switch-off");
                if ($element.find(inputSelector).is(":disabled")) {
                    $(this).addClass("deactivate")
                }
                var changeStatus = function ($this) {
                    if ($element.parent("label").is(".label-change-switch")) {
                    } else {
                        $this.siblings("label").trigger("mousedown").trigger("mouseup").trigger("click")
                    }
                };
                $element.on("keydown", function (e) {
                    if (e.keyCode === 32) {
                        e.stopImmediatePropagation();
                        e.preventDefault();
                        changeStatus($(e.target).find("span:first"))
                    }
                });
                $switchLeft.on("click", function (e) {
                    changeStatus($(this))
                });
                $switchRight.on("click", function (e) {
                    changeStatus($(this))
                });
                $element.find(inputSelector).on("change", function (e, skipOnChange) {
                    var $this = $(this), $element = $this.parent(), thisState = $this.is(":checked"), state = $element.is(".switch-off");
                    e.preventDefault();
                    $element.css("left", "");
                    if (state === thisState) {
                        if (thisState) {
                            $element.removeClass("switch-off").addClass("switch-on");
                            $element.parents(".has-switch").removeClass("unchecked").addClass("checked")
                        } else {
                            $element.removeClass("switch-on").addClass("switch-off");
                            $element.parents(".has-switch").removeClass("checked").addClass("unchecked")
                        }
                        if ($element.data("animated") !== false) {
                            $element.addClass("switch-animate")
                        }
                        if (typeof skipOnChange === "boolean" && skipOnChange) {
                            return
                        }
                        $element.parent().trigger("switch-change", {el: $this, value: thisState})
                    }
                });
                $element.find("label").on("mousedown touchstart", function (e) {
                    var $this = $(this);
                    moving = false;
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    $this.closest("div").removeClass("switch-animate");
                    if ($this.closest(".has-switch").is(".deactivate")) {
                        $this.unbind("click")
                    } else {
                        if ($this.closest(".switch-on").parent().is(".radio-no-uncheck")) {
                            $this.unbind("click")
                        } else {
                            if (!$element.hasClass("ios")) {
                                $this.on("mousemove touchmove", function (e) {
                                    var $element = $(this).closest(".switch"), relativeX = (e.pageX || e.originalEvent.targetTouches[0].pageX) - $element.offset().left, percent = (relativeX / $element.width()) * 100, left = 25, right = 75;
                                    moving = true;
                                    if (percent < left) {
                                        percent = left
                                    } else {
                                        if (percent > right) {
                                            percent = right
                                        }
                                    }
                                    $element.find(">div").css("left", (percent - right) + "%")
                                })
                            }
                            $this.on("click touchend", function (e) {
                                var $this = $(this), $target = $(e.target), $myRadioCheckBox = $target.siblings("input");
                                e.stopImmediatePropagation();
                                e.preventDefault();
                                $this.unbind("mouseleave");
                                if (moving) {
                                    $myRadioCheckBox.prop("checked", !(parseInt($this.parent().css("left")) < -25))
                                } else {
                                    $myRadioCheckBox.prop("checked", !$myRadioCheckBox.is(":checked"))
                                }
                                moving = false;
                                $myRadioCheckBox.trigger("change")
                            });
                            $this.on("mouseleave", function (e) {
                                var $this = $(this), $myInputBox = $this.siblings("input");
                                e.preventDefault();
                                e.stopImmediatePropagation();
                                $this.unbind("mouseleave");
                                $this.trigger("mouseup");
                                $myInputBox.prop("checked", !(parseInt($this.parent().css("left")) < -25)).trigger("change")
                            });
                            $this.on("mouseup", function (e) {
                                e.stopImmediatePropagation();
                                e.preventDefault();
                                $(this).unbind("mousemove")
                            })
                        }
                    }
                });
                if ($form.data("bootstrapSwitch") !== "injected") {
                    $form.bind("reset", function () {
                        setTimeout(function () {
                            $form.find(".make-switch").each(function () {
                                var $input = $(this).find(inputSelector);
                                $input.prop("checked", $input.is(":checked")).trigger("change")
                            })
                        }, 1)
                    });
                    $form.data("bootstrapSwitch", "injected")
                }
            })
        }, toggleActivation: function () {
            var $this = $(this);
            $this.toggleClass("deactivate");
            $this.find(inputSelector).prop("disabled", $this.is(".deactivate"))
        }, isActive: function () {
            return !$(this).hasClass("deactivate")
        }, setActive: function (active) {
            var $this = $(this);
            if (active) {
                $this.removeClass("deactivate");
                $this.find(inputSelector).removeAttr("disabled")
            } else {
                $this.addClass("deactivate");
                $this.find(inputSelector).attr("disabled", "disabled")
            }
        }, toggleState: function (skipOnChange) {
            var $input = $(this).find(":checkbox");
            $input.prop("checked", !$input.is(":checked")).trigger("change", skipOnChange)
        }, toggleRadioState: function (skipOnChange) {
            var $radioinput = $(this).find(":radio");
            $radioinput.not(":checked").prop("checked", !$radioinput.is(":checked")).trigger("change", skipOnChange)
        }, toggleRadioStateAllowUncheck: function (uncheck, skipOnChange) {
            var $radioinput = $(this).find(":radio");
            if (uncheck) {
                $radioinput.not(":checked").trigger("change", skipOnChange)
            } else {
                $radioinput.not(":checked").prop("checked", !$radioinput.is(":checked")).trigger("change", skipOnChange)
            }
        }, setState: function (value, skipOnChange) {
            $(this).find(inputSelector).prop("checked", value).trigger("change", skipOnChange)
        }, setOnLabel: function (value) {
            var $switchLeft = $(this).find(".switch-left");
            $switchLeft.html(value)
        }, setOffLabel: function (value) {
            var $switchRight = $(this).find(".switch-right");
            $switchRight.html(value)
        }, setOnClass: function (value) {
            var $switchLeft = $(this).find(".switch-left");
            var color = "";
            if (value !== undefined) {
                if ($(this).attr("data-on") !== undefined) {
                    color = "switch-" + $(this).attr("data-on")
                }
                $switchLeft.removeClass(color);
                color = "switch-" + value;
                $switchLeft.addClass(color)
            }
        }, setOffClass: function (value) {
            var $switchRight = $(this).find(".switch-right");
            var color = "";
            if (value !== undefined) {
                if ($(this).attr("data-off") !== undefined) {
                    color = "switch-" + $(this).attr("data-off")
                }
                $switchRight.removeClass(color);
                color = "switch-" + value;
                $switchRight.addClass(color)
            }
        }, setAnimated: function (value) {
            var $element = $(this).find(inputSelector).parent();
            if (value === undefined) {
                value = false
            }
            $element.data("animated", value);
            $element.attr("data-animated", value);
            if ($element.data("animated") !== false) {
                $element.addClass("switch-animate")
            } else {
                $element.removeClass("switch-animate")
            }
        }, setSizeClass: function (value) {
            var $element = $(this);
            var $switchLeft = $element.find(".switch-left");
            var $switchRight = $element.find(".switch-right");
            var $label = $element.find("label");
            $.each(["switch-mini", "switch-small", "switch-large"], function (i, el) {
                if (el !== value) {
                    $switchLeft.removeClass(el);
                    $switchRight.removeClass(el);
                    $label.removeClass(el)
                } else {
                    $switchLeft.addClass(el);
                    $switchRight.addClass(el);
                    $label.addClass(el)
                }
            })
        }, status: function () {
            return $(this).find(inputSelector).is(":checked")
        }, destroy: function () {
            var $element = $(this), $div = $element.find("div"), $form = $element.closest("form"), $inputbox;
            $div.find(":not(input)").remove();
            $inputbox = $div.children();
            $inputbox.unwrap().unwrap();
            $inputbox.unbind("change");
            if ($form) {
                $form.unbind("reset");
                $form.removeData("bootstrapSwitch")
            }
            return $inputbox
        }};
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof method === "object" || !method) {
                return methods.init.apply(this, arguments)
            } else {
                $.error("Method " + method + " does not exist!")
            }
        }
    }
}(jQuery);
(function ($) {
    $(function () {
        $(".switch")["bootstrapSwitch"]()
    })
})(jQuery);


/*
 * bootstrap-tagsinput v0.3.9 by Tim Schlechter
 * 
 */
!function (a) {
    "use strict";
    function b(b, c) {
        this.itemsArray = [], this.$element = a(b), this.$element.hide(), this.isSelect = "SELECT" === b.tagName, this.multiple = this.isSelect && b.hasAttribute("multiple"), this.objectItems = c && c.itemValue, this.placeholderText = b.hasAttribute("placeholder") ? this.$element.attr("placeholder") : "", this.inputSize = Math.max(1, this.placeholderText.length), this.$container = a('<div class="bootstrap-tagsinput"></div>'), this.$input = a('<input size="' + this.inputSize + '" type="text" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container), this.$element.after(this.$container), this.build(c)
    }

    function c(a, b) {
        if ("function" != typeof a[b]) {
            var c = a[b];
            a[b] = function (a) {
                return a[c]
            }
        }
    }

    function d(a, b) {
        if ("function" != typeof a[b]) {
            var c = a[b];
            a[b] = function () {
                return c
            }
        }
    }

    function e(a) {
        return a ? h.text(a).html() : ""
    }

    function f(a) {
        var b = 0;
        if (document.selection) {
            a.focus();
            var c = document.selection.createRange();
            c.moveStart("character", -a.value.length), b = c.text.length
        } else(a.selectionStart || "0" == a.selectionStart) && (b = a.selectionStart);
        return b
    }

    var g = {tagClass: function () {
        return"label label-default"
    }, itemValue: function (a) {
        return a ? a.toString() : a
    }, itemText: function (a) {
        return this.itemValue(a)
    }, freeInput: !0, maxTags: void 0, confirmKeys: [13], onTagExists: function (a, b) {
        b.hide().fadeIn()
    }};
    b.prototype = {constructor: b, add: function (b, c) {
        var d = this;
        if (!(d.options.maxTags && d.itemsArray.length >= d.options.maxTags || b !== !1 && !b)) {
            if ("object" == typeof b && !d.objectItems)throw"Can't add objects when itemValue option is not set";
            if (!b.toString().match(/^\s*$/)) {
                if (d.isSelect && !d.multiple && d.itemsArray.length > 0 && d.remove(d.itemsArray[0]), "string" == typeof b && "INPUT" === this.$element[0].tagName) {
                    var f = b.split(",");
                    if (f.length > 1) {
                        for (var g = 0; g < f.length; g++)this.add(f[g], !0);
                        return c || d.pushVal(), void 0
                    }
                }
                var h = d.options.itemValue(b), i = d.options.itemText(b), j = d.options.tagClass(b), k = a.grep(d.itemsArray, function (a) {
                    return d.options.itemValue(a) === h
                })[0];
                if (k) {
                    if (d.options.onTagExists) {
                        var l = a(".tag", d.$container).filter(function () {
                            return a(this).data("item") === k
                        });
                        d.options.onTagExists(b, l)
                    }
                } else {
                    d.itemsArray.push(b);
                    var m = a('<span class="tag ' + e(j) + '">' + e(i) + '<span data-role="remove"></span></span>');
                    if (m.data("item", b), d.findInputWrapper().before(m), m.after(" "), d.isSelect && !a('option[value="' + escape(h) + '"]', d.$element)[0]) {
                        var n = a("<option selected>" + e(i) + "</option>");
                        n.data("item", b), n.attr("value", h), d.$element.append(n)
                    }
                    c || d.pushVal(), d.options.maxTags === d.itemsArray.length && d.$container.addClass("bootstrap-tagsinput-max"), d.$element.trigger(a.Event("itemAdded", {item: b}))
                }
            }
        }
    }, remove: function (b, c) {
        var d = this;
        d.objectItems && (b = "object" == typeof b ? a.grep(d.itemsArray, function (a) {
            return d.options.itemValue(a) == d.options.itemValue(b)
        })[0] : a.grep(d.itemsArray, function (a) {
            return d.options.itemValue(a) == b
        })[0]), b && (a(".tag", d.$container).filter(function () {
            return a(this).data("item") === b
        }).remove(), a("option", d.$element).filter(function () {
            return a(this).data("item") === b
        }).remove(), d.itemsArray.splice(a.inArray(b, d.itemsArray), 1)), c || d.pushVal(), d.options.maxTags > d.itemsArray.length && d.$container.removeClass("bootstrap-tagsinput-max"), d.$element.trigger(a.Event("itemRemoved", {item: b}))
    }, removeAll: function () {
        var b = this;
        for (a(".tag", b.$container).remove(), a("option", b.$element).remove(); b.itemsArray.length > 0;)b.itemsArray.pop();
        b.pushVal(), b.options.maxTags && !this.isEnabled() && this.enable()
    }, refresh: function () {
        var b = this;
        a(".tag", b.$container).each(function () {
            var c = a(this), d = c.data("item"), f = b.options.itemValue(d), g = b.options.itemText(d), h = b.options.tagClass(d);
            if (c.attr("class", null), c.addClass("tag " + e(h)), c.contents().filter(function () {
                return 3 == this.nodeType
            })[0].nodeValue = e(g), b.isSelect) {
                var i = a("option", b.$element).filter(function () {
                    return a(this).data("item") === d
                });
                i.attr("value", f)
            }
        })
    }, items: function () {
        return this.itemsArray
    }, pushVal: function () {
        var b = this, c = a.map(b.items(), function (a) {
            return b.options.itemValue(a).toString()
        });
        b.$element.val(c, !0).trigger("change")
    }, build: function (b) {
        var e = this;
        e.options = a.extend({}, g, b);
        var h = e.options.typeahead || {};
        e.objectItems && (e.options.freeInput = !1), c(e.options, "itemValue"), c(e.options, "itemText"), c(e.options, "tagClass"), e.options.source && (h.source = e.options.source), h.source && a.fn.typeahead && (d(h, "source"), e.$input.typeahead({source: function (b, c) {
            function d(a) {
                for (var b = [], d = 0; d < a.length; d++) {
                    var g = e.options.itemText(a[d]);
                    f[g] = a[d], b.push(g)
                }
                c(b)
            }

            this.map = {};
            var f = this.map, g = h.source(b);
            a.isFunction(g.success) ? g.success(d) : a.when(g).then(d)
        }, updater: function (a) {
            e.add(this.map[a])
        }, matcher: function (a) {
            return-1 !== a.toLowerCase().indexOf(this.query.trim().toLowerCase())
        }, sorter: function (a) {
            return a.sort()
        }, highlighter: function (a) {
            var b = new RegExp("(" + this.query + ")", "gi");
            return a.replace(b, "<strong>$1</strong>")
        }})), e.$container.on("click", a.proxy(function () {
            e.$input.focus()
        }, e)), e.$container.on("keydown", "input", a.proxy(function (b) {
            var c = a(b.target), d = e.findInputWrapper();
            switch (b.which) {
                case 8:
                    if (0 === f(c[0])) {
                        var g = d.prev();
                        g && e.remove(g.data("item"))
                    }
                    break;
                case 46:
                    if (0 === f(c[0])) {
                        var h = d.next();
                        h && e.remove(h.data("item"))
                    }
                    break;
                case 37:
                    var i = d.prev();
                    0 === c.val().length && i[0] && (i.before(d), c.focus());
                    break;
                case 39:
                    var j = d.next();
                    0 === c.val().length && j[0] && (j.after(d), c.focus());
                    break;
                default:
                    e.options.freeInput && a.inArray(b.which, e.options.confirmKeys) >= 0 && (e.add(c.val()), c.val(""), b.preventDefault())
            }
            c.attr("size", Math.max(this.inputSize, c.val().length))
        }, e)), e.$container.on("click", "[data-role=remove]", a.proxy(function (b) {
            e.remove(a(b.target).closest(".tag").data("item"))
        }, e)), e.options.itemValue === g.itemValue && ("INPUT" === e.$element[0].tagName ? e.add(e.$element.val()) : a("option", e.$element).each(function () {
            e.add(a(this).attr("value"), !0)
        }))
    }, destroy: function () {
        var a = this;
        a.$container.off("keypress", "input"), a.$container.off("click", "[role=remove]"), a.$container.remove(), a.$element.removeData("tagsinput"), a.$element.show()
    }, focus: function () {
        this.$input.focus()
    }, input: function () {
        return this.$input
    }, findInputWrapper: function () {
        for (var b = this.$input[0], c = this.$container[0]; b && b.parentNode !== c;)b = b.parentNode;
        return a(b)
    }}, a.fn.tagsinput = function (c, d) {
        var e = [];
        return this.each(function () {
            var f = a(this).data("tagsinput");
            if (f) {
                var g = f[c](d);
                void 0 !== g && e.push(g)
            } else f = new b(this, c), a(this).data("tagsinput", f), e.push(f), "SELECT" === this.tagName && a("option", a(this)).attr("selected", "selected"), a(this).val(a(this).val())
        }), "string" == typeof c ? e.length > 1 ? e : e[0] : e
    }, a.fn.tagsinput.Constructor = b;
    var h = a("<div />");
    a(function () {
        a("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput()
    })
}(window.jQuery);


/* Parsley dist/parsley.min.js build version 1.2.2 http://parsleyjs.org */
!function (d) {
    var h = function (a) {
        this.messages = {defaultMessage: "This value seems to be invalid.", type: {email: "This value should be a valid email.", url: "This value should be a valid url.", urlstrict: "This value should be a valid url.", number: "This value should be a valid number.", digits: "This value should be digits.", dateIso: "This value should be a valid date (YYYY-MM-DD).", alphanum: "This value should be alphanumeric.", phone: "This value should be a valid phone number."}, notnull: "This value should not be null.",
            notblank: "This value should not be blank.", required: "This value is required.", regexp: "This value seems to be invalid.", min: "This value should be greater than or equal to %s.", max: "This value should be lower than or equal to %s.", range: "This value should be between %s and %s.", minlength: "This value is too short. It should have %s characters or more.", maxlength: "This value is too long. It should have %s characters or less.", rangelength: "This value length is invalid. It should be between %s and %s characters long.",
            mincheck: "You must select at least %s choices.", maxcheck: "You must select %s choices or less.", rangecheck: "You must select between %s and %s choices.", equalto: "This value should be the same."};
        this.init(a)
    };
    h.prototype = {constructor: h, validators: {notnull: function () {
        return{validate: function (a) {
            return 0 < a.length
        }, priority: 2}
    }, notblank: function () {
        return{validate: function (a) {
            return"string" === typeof a && "" !== a.replace(/^\s+/g, "").replace(/\s+$/g, "")
        }, priority: 2}
    }, required: function () {
        var a = this;
        return{validate: function (b) {
            if ("object" === typeof b) {
                for (var c in b)if (a.required().validate(b[c]))return!0;
                return!1
            }
            return a.notnull().validate(b) && a.notblank().validate(b)
        }, priority: 512}
    }, type: function () {
        return{validate: function (a, b) {
            var c;
            switch (b) {
                case "number":
                    c = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;
                    break;
                case "digits":
                    c = /^\d+$/;
                    break;
                case "alphanum":
                    c = /^\w+$/;
                    break;
                case "email":
                    c = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))){2,6}$/i;
                    break;
                case "url":
                    a = /(https?|s?ftp|git)/i.test(a) ? a : "http://" + a;
                case "urlstrict":
                    c = /^(https?|s?ftp|git):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
                    break;
                case "dateIso":
                    c = /^(\d{4})\D?(0[1-9]|1[0-2])\D?([12]\d|0[1-9]|3[01])$/;
                    break;
                case "phone":
                    c = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
                    break;
                default:
                    return!1
            }
            return"" !== a ? c.test(a) : !1
        }, priority: 256}
    }, regexp: function () {
        return{validate: function (a, b, c) {
            return RegExp(b, c.options.regexpFlag || "").test(a)
        }, priority: 64}
    }, minlength: function () {
        return{validate: function (a, b) {
            return a.length >= b
        }, priority: 32}
    }, maxlength: function () {
        return{validate: function (a, b) {
            return a.length <= b
        }, priority: 32}
    }, rangelength: function () {
        var a = this;
        return{validate: function (b, c) {
            return a.minlength().validate(b, c[0]) && a.maxlength().validate(b, c[1])
        }, priority: 32}
    }, min: function () {
        return{validate: function (a, b) {
            return Number(a) >= b
        }, priority: 32}
    }, max: function () {
        return{validate: function (a, b) {
            return Number(a) <= b
        }, priority: 32}
    }, range: function () {
        var a = this;
        return{validate: function (b, c) {
            return a.min().validate(b, c[0]) && a.max().validate(b, c[1])
        }, priority: 32}
    }, equalto: function () {
        return{validate: function (a, b, c) {
            c.options.validateIfUnchanged = !0;
            return a === d(b).val()
        }, priority: 64}
    }, remote: function () {
        return{validate: function (a, b, c) {
            var e = {}, f = {};
            e[c.$element.attr("name")] = a;
            "undefined" !== typeof c.options.remoteDatatype && (f = {dataType: c.options.remoteDatatype});
            var g = function (a, b) {
                "undefined" !== typeof b && ("undefined" !== typeof c.Validator.messages.remote && b !== c.Validator.messages.remote) && d(c.UI.ulError + " .remote").remove();
                if (!1 === a)c.options.listeners.onFieldError(c.element, c.constraints, c); else!0 === a &&
                    !1 === c.options.listeners.onFieldSuccess(c.element, c.constraints, c) && (a = !1);
                c.updtConstraint({name: "remote", valid: a}, b);
                c.manageValidationResult()
            }, k = function (a) {
                if ("object" === typeof a)return a;
                try {
                    a = d.parseJSON(a)
                } catch (b) {
                }
                return a
            }, l = function (a) {
                return"object" === typeof a && null !== a ? "undefined" !== typeof a.error ? a.error : "undefined" !== typeof a.message ? a.message : null : null
            };
            d.ajax(d.extend({}, {url: b, data: e, type: c.options.remoteMethod || "GET", success: function (a) {
                a = k(a);
                g(1 === a || !0 === a || "object" === typeof a &&
                    null !== a && "undefined" !== typeof a.success, l(a))
            }, error: function (a) {
                a = k(a);
                g(!1, l(a))
            }}, f));
            return null
        }, priority: 64}
    }, mincheck: function () {
        var a = this;
        return{validate: function (b, c) {
            return a.minlength().validate(b, c)
        }, priority: 32}
    }, maxcheck: function () {
        var a = this;
        return{validate: function (b, c) {
            return a.maxlength().validate(b, c)
        }, priority: 32}
    }, rangecheck: function () {
        var a = this;
        return{validate: function (b, c) {
            return a.rangelength().validate(b, c)
        }, priority: 32}
    }}, init: function (a) {
        var b = a.validators;
        a = a.messages;
        for (var c in b)this.addValidator(c, b[c]);
        for (c in a)this.addMessage(c, a[c])
    }, formatMesssage: function (a, b) {
        if ("object" === typeof b) {
            for (var c in b)a = this.formatMesssage(a, b[c]);
            return a
        }
        return"string" === typeof a ? a.replace(/%s/i, b) : ""
    }, addValidator: function (a, b) {
        if ("undefined" === typeof b().validate)throw Error("Validator `" + a + "` must have a validate method. See more here: http://parsleyjs.org/documentation.html#javascript-general");
        "undefined" === typeof b().priority && (b = {validate: b().validate, priority: 32},
            window.console && window.console.warn && window.console.warn("Validator `" + a + "` should have a priority. Default priority 32 given"));
        this.validators[a] = b
    }, addMessage: function (a, b, c) {
        if ("undefined" !== typeof c && !0 === c)this.messages.type[a] = b; else if ("type" === a)for (var d in b)this.messages.type[d] = b[d]; else this.messages[a] = b
    }};
    var n = function (a) {
        this.init(a)
    };
    n.prototype = {constructor: n, init: function (a) {
        this.ParsleyInstance = a;
        this.hash = a.hash;
        this.options = this.ParsleyInstance.options;
        this.errorClassHandler =
            this.options.errors.classHandler(this.ParsleyInstance.element, this.ParsleyInstance.isRadioOrCheckbox) || this.ParsleyInstance.$element;
        this.ulErrorManagement()
    }, ulErrorManagement: function () {
        this.ulError = "#" + this.hash;
        this.ulTemplate = d(this.options.errors.errorsWrapper).attr("id", this.hash).addClass("parsley-error-list")
    }, removeError: function (a) {
        a = this.ulError + " ." + a;
        var b = this;
        this.options.animate ? d(a).fadeOut(this.options.animateDuration, function () {
            d(this).remove();
            b.ulError && 0 === d(b.ulError).children().length &&
            b.removeErrors()
        }) : d(a).remove()
    }, addError: function (a) {
        for (var b in a) {
            var c = d(this.options.errors.errorElem).addClass(b);
            d(this.ulError).append(this.options.animate ? d(c).html(a[b]).hide().fadeIn(this.options.animateDuration) : d(c).html(a[b]))
        }
    }, removeErrors: function () {
        this.options.animate ? d(this.ulError).fadeOut(this.options.animateDuration, function () {
            d(this).remove()
        }) : d(this.ulError).remove()
    }, reset: function () {
        this.ParsleyInstance.valid = null;
        this.removeErrors();
        this.ParsleyInstance.validatedOnce = !1;
        this.errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass);
        for (var a in this.constraints)this.constraints[a].valid = null;
        return this
    }, manageError: function (a) {
        d(this.ulError).length || this.manageErrorContainer();
        if (!("required" === a.name && null !== this.ParsleyInstance.getVal() && 0 < this.ParsleyInstance.getVal().length))if (this.ParsleyInstance.isRequired && "required" !== a.name && (null === this.ParsleyInstance.getVal() || 0 === this.ParsleyInstance.getVal().length))this.removeError(a.name);
        else {
            var b = a.name, c = !1 !== this.options.errorMessage ? "custom-error-message" : b, e = {};
            a = !1 !== this.options.errorMessage ? this.options.errorMessage : "type" === a.name ? this.ParsleyInstance.Validator.messages[b][a.requirements] : "undefined" === typeof this.ParsleyInstance.Validator.messages[b] ? this.ParsleyInstance.Validator.messages.defaultMessage : this.ParsleyInstance.Validator.formatMesssage(this.ParsleyInstance.Validator.messages[b], a.requirements);
            d(this.ulError + " ." + c).length || (e[c] = a, this.addError(e))
        }
    }, manageErrorContainer: function () {
        var a =
            this.options.errorContainer || this.options.errors.container(this.ParsleyInstance.element, this.ParsleyInstance.isRadioOrCheckbox), b = this.options.animate ? this.ulTemplate.css("display", "") : this.ulTemplate;
        "undefined" !== typeof a ? d(a).append(b) : !this.ParsleyInstance.isRadioOrCheckbox ? this.ParsleyInstance.$element.after(b) : this.ParsleyInstance.$element.parent().after(b)
    }};
    var m = function (a, b, c) {
        this.options = b;
        if ("ParsleyFieldMultiple" === c)return this;
        this.init(a, c || "ParsleyField")
    };
    m.prototype = {constructor: m,
        init: function (a, b) {
            this.type = b;
            this.valid = !0;
            this.element = a;
            this.validatedOnce = !1;
            this.$element = d(a);
            this.val = this.$element.val();
            this.Validator = new h(this.options);
            this.isRequired = !1;
            this.constraints = {};
            "undefined" === typeof this.isRadioOrCheckbox && (this.isRadioOrCheckbox = !1, this.hash = this.generateHash());
            this.UI = new n(this);
            this.bindHtml5Constraints();
            this.addConstraints();
            this.hasConstraints() && this.bindValidationEvents()
        }, setParent: function (a) {
            this.$parent = d(a)
        }, getParent: function () {
            return this.$parent
        },
        bindHtml5Constraints: function () {
            if (this.$element.hasClass("required") || this.$element.attr("required"))this.options.required = !0;
            var a = this.$element.attr("type");
            "undefined" !== typeof a && RegExp(a, "i").test("email url number range tel") && (this.options.type = "tel" === a ? "phone" : a, RegExp(this.options.type, "i").test("number range") && (this.options.type = "number", "undefined" !== typeof this.$element.attr("min") && this.$element.attr("min").length && (this.options.min = this.$element.attr("min")), "undefined" !== typeof this.$element.attr("max") &&
                this.$element.attr("max").length && (this.options.max = this.$element.attr("max"))));
            "string" === typeof this.$element.attr("pattern") && this.$element.attr("pattern").length && (this.options.regexp = this.$element.attr("pattern"))
        }, addConstraints: function () {
            for (var a in this.options) {
                var b = {};
                b[a] = this.options[a];
                this.addConstraint(b, !0, !1)
            }
        }, addConstraint: function (a, b, c) {
            for (var d in a)d = d.toLowerCase(), "function" === typeof this.Validator.validators[d] && (this.constraints[d] = {name: d, requirements: a[d], valid: null},
                "required" === d && (this.isRequired = !0), this.addCustomConstraintMessage(d));
            "undefined" === typeof b && this.bindValidationEvents()
        }, updateConstraint: function (a, b) {
            for (var c in a)this.updtConstraint({name: c, requirements: a[c], valid: null}, b)
        }, updtConstraint: function (a, b) {
            this.constraints[a.name] = d.extend(!0, this.constraints[a.name], a);
            "string" === typeof b && (this.Validator.messages[a.name] = b);
            this.bindValidationEvents()
        }, removeConstraint: function (a) {
            a = a.toLowerCase();
            delete this.constraints[a];
            "required" ===
                a && (this.isRequired = !1);
            this.hasConstraints() ? this.bindValidationEvents() : this.UI.reset()
        }, addCustomConstraintMessage: function (a) {
            var b = a + ("type" === a && "undefined" !== typeof this.options[a] ? this.options[a].charAt(0).toUpperCase() + this.options[a].substr(1) : "") + "Message";
            "undefined" !== typeof this.options[b] && this.Validator.addMessage("type" === a ? this.options[a] : a, this.options[b], "type" === a)
        }, bindValidationEvents: function () {
            this.valid = null;
            this.$element.addClass("parsley-validated");
            this.$element.off("." +
                this.type);
            this.options.remote && !/change/i.test(this.options.trigger) && (this.options.trigger = !this.options.trigger ? "change" : " change");
            var a = (!this.options.trigger ? "" : this.options.trigger) + (/key/i.test(this.options.trigger) ? "" : " keyup");
            this.$element.is("select") && (a += /change/i.test(a) ? "" : " change");
            a = a.replace(/^\s+/g, "").replace(/\s+$/g, "");
            this.$element.on((a + " ").split(" ").join("." + this.type + " "), !1, d.proxy(this.eventValidation, this))
        }, generateHash: function () {
            return"parsley-" + (Math.random() +
                "").substring(2)
        }, getHash: function () {
            return this.hash
        }, getVal: function () {
            return"undefined" !== typeof this.$element.domApi(this.options.namespace).value ? this.$element.domApi(this.options.namespace).value : this.$element.val()
        }, eventValidation: function (a) {
            var b = this.getVal();
            if ("keyup" === a.type && !/keyup/i.test(this.options.trigger) && !this.validatedOnce || "change" === a.type && !/change/i.test(this.options.trigger) && !this.validatedOnce || !this.isRadioOrCheckbox && this.getLength(b) < this.options.validationMinlength && !this.validatedOnce)return!0;
            this.validate()
        }, getLength: function (a) {
            return!a || !a.hasOwnProperty("length") ? 0 : a.length
        }, isValid: function () {
            return this.validate(!1)
        }, hasConstraints: function () {
            for (var a in this.constraints)return!0;
            return!1
        }, validate: function (a) {
            var b = this.getVal(), c = null;
            if (!this.hasConstraints() || this.$element.is(this.options.excluded))return null;
            if (this.options.listeners.onFieldValidate(this.element, this) || "" === b && !this.isRequired)return this.UI.reset(), null;
            if (!this.needsValidation(b))return this.valid;
            c = this.applyValidators();
            ("undefined" !== typeof a ? a : this.options.showErrors) && this.manageValidationResult();
            return c
        }, needsValidation: function (a) {
            if (!this.options.validateIfUnchanged && null !== this.valid && this.val === a && this.validatedOnce)return!1;
            this.val = a;
            return this.validatedOnce = !0
        }, applyValidators: function () {
            var a = null, b;
            for (b in this.constraints) {
                var c = this.Validator.validators[this.constraints[b].name]().validate(this.val, this.constraints[b].requirements, this);
                !1 === c ? (a = !1, this.constraints[b].valid =
                    a) : !0 === c && (this.constraints[b].valid = !0, a = !1 !== a)
            }
            if (!1 === a)this.options.listeners.onFieldError(this.element, this.constraints, this); else!0 === a && !1 === this.options.listeners.onFieldSuccess(this.element, this.constraints, this) && (a = !1);
            return a
        }, manageValidationResult: function () {
            var a = null, b = [], c;
            for (c in this.constraints)!1 === this.constraints[c].valid ? (b.push(this.constraints[c]), a = !1) : !0 === this.constraints[c].valid && (this.UI.removeError(this.constraints[c].name), a = !1 !== a);
            this.valid = a;
            if (!0 === this.valid)return this.UI.removeErrors(),
                this.UI.errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass), !0;
            if (!1 === this.valid) {
                if (!0 === this.options.priorityEnabled) {
                    for (var a = 0, e, f = 0; f < b.length; f++)e = this.Validator.validators[b[f].name]().priority, e > a && (c = b[f], a = e);
                    this.UI.manageError(c)
                } else for (f = 0; f < b.length; f++)this.UI.manageError(b[f]);
                this.UI.errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass);
                return!1
            }
            this.UI.ulError && 0 === d(this.ulError).children().length &&
            this.UI.removeErrors();
            return a
        }, addListener: function (a) {
            for (var b in a)this.options.listeners[b] = a[b]
        }, destroy: function () {
            this.$element.removeClass("parsley-validated");
            this.UI.reset();
            this.$element.off("." + this.type).removeData(this.type)
        }};
    var p = function (a, b, c) {
        this.initMultiple(a, b);
        this.inherit(a, b);
        this.Validator = new h(b);
        this.init(a, c || "ParsleyFieldMultiple")
    };
    p.prototype = {constructor: p, initMultiple: function (a, b) {
        this.element = a;
        this.$element = d(a);
        this.group = b.group || !1;
        this.hash = this.getName();
        this.siblings = this.group ? '[parsley-group="' + this.group + '"]' : 'input[name="' + this.$element.attr("name") + '"]';
        this.isRadioOrCheckbox = !0;
        this.isRadio = this.$element.is("input[type=radio]");
        this.isCheckbox = this.$element.is("input[type=checkbox]");
        this.errorClassHandler = b.errors.classHandler(a, this.isRadioOrCheckbox) || this.$element.parent()
    }, inherit: function (a, b) {
        var c = new m(a, b, "ParsleyFieldMultiple"), d;
        for (d in c)"undefined" === typeof this[d] && (this[d] = c[d])
    }, getName: function () {
        if (this.group)return"parsley-" +
            this.group;
        if ("undefined" === typeof this.$element.attr("name"))throw"A radio / checkbox input must have a parsley-group attribute or a name to be Parsley validated !";
        return"parsley-" + this.$element.attr("name").replace(/(:|\.|\[|\])/g, "")
    }, getVal: function () {
        if (this.isRadio)return d(this.siblings + ":checked").val() || "";
        if (this.isCheckbox) {
            var a = [];
            d(this.siblings + ":checked").each(function () {
                a.push(d(this).val())
            });
            return a
        }
    }, bindValidationEvents: function () {
        this.valid = null;
        this.$element.addClass("parsley-validated");
        this.$element.off("." + this.type);
        var a = this, b = (!this.options.trigger ? "" : this.options.trigger) + (/change/i.test(this.options.trigger) ? "" : " change"), b = b.replace(/^\s+/g, "").replace(/\s+$/g, "");
        d(this.siblings).each(function () {
            d(this).on(b.split(" ").join("." + a.type + " "), !1, d.proxy(a.eventValidation, a))
        })
    }};
    var q = function (a, b, c) {
        this.init(a, b, c || "parsleyForm")
    };
    q.prototype = {constructor: q, init: function (a, b, c) {
        this.type = c;
        this.items = [];
        this.$element = d(a);
        this.options = b;
        var e = this;
        this.$element.find(b.inputs).each(function () {
            e.addItem(this)
        });
        this.$element.on("submit." + this.type, !1, d.proxy(this.validate, this))
    }, addListener: function (a) {
        for (var b in a)if (/Field/.test(b))for (var c = 0; c < this.items.length; c++)this.items[c].addListener(a); else this.options.listeners[b] = a[b]
    }, addItem: function (a) {
        if (d(a).is(this.options.excluded))return!1;
        a = d(a).parsley(this.options);
        a.setParent(this);
        this.items.push(a)
    }, removeItem: function (a) {
        a = d(a).parsley();
        for (var b = 0; b < this.items.length; b++)if (this.items[b].hash === a.hash)return this.items[b].destroy(), this.items.splice(b,
            1), !0;
        return!1
    }, validate: function (a) {
        var b = !0;
        this.focusedField = !1;
        for (var c = 0; c < this.items.length; c++)if ("undefined" !== typeof this.items[c] && !1 === this.items[c].validate() && (b = !1, !this.focusedField && "first" === this.options.focus || "last" === this.options.focus))this.focusedField = this.items[c].$element;
        if (this.focusedField && !b)if (0 < this.options.scrollDuration) {
            var e = this, c = this.focusedField.offset().top - d(window).height() / 2;
            d("html, body").animate({scrollTop: c}, this.options.scrollDuration, function () {
                e.focusedField.focus()
            })
        } else this.focusedField.focus();
        a = this.options.listeners.onFormValidate(b, a, this);
        return"undefined" !== typeof a ? a : b
    }, isValid: function () {
        for (var a = 0; a < this.items.length; a++)if (!1 === this.items[a].isValid())return!1;
        return!0
    }, removeErrors: function () {
        for (var a = 0; a < this.items.length; a++)this.items[a].parsley("reset")
    }, destroy: function () {
        for (var a = 0; a < this.items.length; a++)this.items[a].destroy();
        this.$element.off("." + this.type).removeData(this.type)
    }, reset: function () {
        for (var a = 0; a < this.items.length; a++)this.items[a].UI.reset()
    }};
    d.fn.parsley =
        function (a, b) {
            function c(b, c) {
                var e = d(b).data(c);
                if (!e) {
                    switch (c) {
                        case "parsleyForm":
                            e = new q(b, f, "parsleyForm");
                            break;
                        case "parsleyField":
                            e = new m(b, f, "parsleyField");
                            break;
                        case "parsleyFieldMultiple":
                            e = new p(b, f, "parsleyFieldMultiple");
                            break;
                        default:
                            return
                    }
                    d(b).data(c, e)
                }
                return"string" === typeof a && "function" === typeof e[a] ? (e = e[a].apply(e, k), "undefined" !== typeof e ? e : d(b)) : e
            }

            var e = d(this).data("parsleyNamespace") ? d(this).data("parsleyNamespace") : "undefined" !== typeof a && "undefined" !== typeof a.namespace ?
                a.namespace : d.fn.parsley.defaults.namespace, f = d.extend(!0, {}, d.fn.parsley.defaults, "undefined" !== typeof window.ParsleyConfig ? window.ParsleyConfig : {}, a, this.domApi(e)), g = null, k = Array.prototype.slice.call(arguments, 1);
            d(this).is("form") || "undefined" !== typeof d(this).domApi(e).bind ? g = c(d(this), "parsleyForm") : d(this).is(f.inputs) && (g = c(d(this), !d(this).is("input[type=radio], input[type=checkbox]") ? "parsleyField" : "parsleyFieldMultiple"));
            return"function" === typeof b ? b() : g
        };
    d(window).on("load", function () {
        d("[parsley-validate], [data-parsley-validate]").each(function () {
            d(this).parsley()
        })
    });
    d.fn.domApi = function (a) {
        var b, c = {}, e = RegExp("^" + a, "i");
        if ("undefined" === typeof this[0])return{};
        for (var f in this[0].attributes)if (b = this[0].attributes[f], null !== b && b.specified && e.test(b.name)) {
            var g = c, k = r(b.name.replace(a, "")), l;
            b = b.value;
            var h = void 0;
            try {
                l = b ? "true" == b || ("false" == b ? !1 : "null" == b ? null : !isNaN(h = Number(b)) ? h : /^[\[\{]/.test(b) ? d.parseJSON(b) : b) : b
            } catch (m) {
                l = b
            }
            g[k] = l
        }
        return c
    };
    var r = function (a) {
        return a.replace(/-+(.)?/g, function (a, c) {
            return c ? c.toUpperCase() : ""
        })
    };
    d.fn.parsley.defaults =
    {namespace: "parsley-", inputs: "input, textarea, select", excluded: "input[type=hidden], input[type=file], :disabled", priorityEnabled: !0, trigger: !1, animate: !0, animateDuration: 300, scrollDuration: 500, focus: "first", validationMinlength: 3, successClass: "parsley-success", errorClass: "parsley-error", errorMessage: !1, validators: {}, showErrors: !0, messages: {}, validateIfUnchanged: !1, errors: {classHandler: function (a, b) {
    }, container: function (a, b) {
    }, errorsWrapper: "<ul></ul>", errorElem: "<li></li>"}, listeners: {onFieldValidate: function (a, b) {
        return!1
    }, onFormValidate: function (a, b, c) {
    }, onFieldError: function (a, b, c) {
    }, onFieldSuccess: function (a, b, c) {
    }}}
}(window.jQuery || window.Zepto);


/*
 colpick Color Picker
 Copyright 2013 Jose Vargas. Licensed under GPL license. Based on Stefan Petre's Color Picker www.eyecon.ro, dual licensed under the MIT and GPL licenses
 For usage and examples: colpick.com/plugin
 */
!function (t) {
    var i = function () {
        var i = '<div class="colpick"><div class="colpick_color"><div class="colpick_color_overlay1"><div class="colpick_color_overlay2"><div class="colpick_selector_outer"><div class="colpick_selector_inner"></div></div></div></div></div><div class="colpick_hue"><div class="colpick_hue_arrs"><div class="colpick_hue_larr"></div><div class="colpick_hue_rarr"></div></div></div><div class="colpick_new_color"></div><div class="colpick_current_color"></div><div class="colpick_hex_field"><div class="colpick_field_letter">#</div><input type="text" maxlength="6" size="6" /></div><div class="colpick_rgb_r colpick_field"><div class="colpick_field_letter">R</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_g colpick_field"><div class="colpick_field_letter">G</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_h colpick_field"><div class="colpick_field_letter">H</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_s colpick_field"><div class="colpick_field_letter">S</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_submit"></div></div>', a = {showEvent: "click", bornIn: "body", onShow: function () {
        }, onBeforeShow: function () {
        }, onHide: function () {
        }, onChange: function () {
        }, onSubmit: function () {
        }, colorScheme: "light", color: "2EB398", livePreview: !0, flat: !1, layout: "full", submit: 1, submitText: '<i class="fa fa-magic"></i>', height: 156}, l = function (i, a) {
            var c = o(i);
            t(a).data("colpick").fields.eq(1).val(c.r).end().eq(2).val(c.g).end().eq(3).val(c.b).end()
        }, r = function (i, a) {
            t(a).data("colpick").fields.eq(4).val(Math.round(i.h)).end().eq(5).val(Math.round(i.s)).end().eq(6).val(Math.round(i.b)).end()
        }, n = function (i, a) {
            t(a).data("colpick").fields.eq(0).val(d(i))
        }, s = function (i, a) {
            t(a).data("colpick").selector.css("backgroundColor", "#" + d({h: i.h, s: 100, b: 100})), t(a).data("colpick").selectorIndic.css({left: parseInt(t(a).data("colpick").height * i.s / 100, 10), top: parseInt(t(a).data("colpick").height * (100 - i.b) / 100, 10)})
        }, p = function (i, a) {
            t(a).data("colpick").hue.css("top", parseInt(t(a).data("colpick").height - t(a).data("colpick").height * i.h / 360, 10))
        }, f = function (i, a) {
            t(a).data("colpick").currentColor.css("backgroundColor", "#" + d(i))
        }, u = function (i, a) {
            t(a).data("colpick").newColor.css("backgroundColor", "#" + d(i))
        }, v = function () {
            var i, a = t(this).parent().parent();
            this.parentNode.className.indexOf("_hex") > 0 ? (a.data("colpick").color = i = c(L(this.value)), l(i, a.get(0)), r(i, a.get(0))) : this.parentNode.className.indexOf("_hsb") > 0 ? (a.data("colpick").color = i = H({h: parseInt(a.data("colpick").fields.eq(4).val(), 10), s: parseInt(a.data("colpick").fields.eq(5).val(), 10), b: parseInt(a.data("colpick").fields.eq(6).val(), 10)}), l(i, a.get(0)), n(i, a.get(0))) : (a.data("colpick").color = i = e(z({r: parseInt(a.data("colpick").fields.eq(1).val(), 10), g: parseInt(a.data("colpick").fields.eq(2).val(), 10), b: parseInt(a.data("colpick").fields.eq(3).val(), 10)})), n(i, a.get(0)), r(i, a.get(0))), s(i, a.get(0)), p(i, a.get(0)), u(i, a.get(0)), a.data("colpick").onChange.apply(a.parent(), [i, d(i), o(i)])
        }, h = function () {
            t(this).parent().removeClass("colpick_focus")
        }, k = function () {
            t(this).parent().parent().data("colpick").fields.parent().removeClass("colpick_focus"), t(this).parent().addClass("colpick_focus")
        }, g = function (i) {
            i.preventDefault ? i.preventDefault() : i.returnValue = !1;
            var a = t(this).parent().find("input").focus(), c = {el: t(this).parent().addClass("colpick_slider"), max: this.parentNode.className.indexOf("_hsb_h") > 0 ? 360 : this.parentNode.className.indexOf("_hsb") > 0 ? 100 : 255, y: i.pageY, field: a, val: parseInt(a.val(), 10), preview: t(this).parent().parent().data("colpick").livePreview};
            t(document).mouseup(c, m), t(document).mousemove(c, _)
        }, _ = function (t) {
            return t.data.field.val(Math.max(0, Math.min(t.data.max, parseInt(t.data.val - t.pageY + t.data.y, 10)))), t.data.preview && v.apply(t.data.field.get(0), [!0]), !1
        }, m = function (i) {
            return v.apply(i.data.field.get(0), [!0]), i.data.el.removeClass("colpick_slider").find("input").focus(), t(document).off("mouseup", m), t(document).off("mousemove", _), !1
        }, b = function (i) {
            i.preventDefault ? i.preventDefault() : i.returnValue = !1;
            var a = {cal: t(this).parent(), y: t(this).offset().top};
            a.preview = a.cal.data("colpick").livePreview, t(document).mouseup(a, w), t(document).mousemove(a, x), v.apply(a.cal.data("colpick").fields.eq(4).val(parseInt(360 * (a.cal.data("colpick").height - (i.pageY - a.y)) / a.cal.data("colpick").height, 10)).get(0), [a.preview])
        }, x = function (t) {
            return v.apply(t.data.cal.data("colpick").fields.eq(4).val(parseInt(360 * (t.data.cal.data("colpick").height - Math.max(0, Math.min(t.data.cal.data("colpick").height, t.pageY - t.data.y))) / t.data.cal.data("colpick").height, 10)).get(0), [t.data.preview]), !1
        }, w = function (i) {
            return l(i.data.cal.data("colpick").color, i.data.cal.get(0)), n(i.data.cal.data("colpick").color, i.data.cal.get(0)), t(document).off("mouseup", w), t(document).off("mousemove", x), !1
        }, y = function (i) {
            i.preventDefault ? i.preventDefault() : i.returnValue = !1;
            var a = {cal: t(this).parent(), pos: t(this).offset()};
            a.preview = a.cal.data("colpick").livePreview, t(document).mouseup(a, I), t(document).mousemove(a, M), v.apply(a.cal.data("colpick").fields.eq(6).val(parseInt(100 * (a.cal.data("colpick").height - (i.pageY - a.pos.top)) / a.cal.data("colpick").height, 10)).end().eq(5).val(parseInt(100 * (i.pageX - a.pos.left) / a.cal.data("colpick").height, 10)).get(0), [a.preview])
        }, M = function (t) {
            return v.apply(t.data.cal.data("colpick").fields.eq(6).val(parseInt(100 * (t.data.cal.data("colpick").height - Math.max(0, Math.min(t.data.cal.data("colpick").height, t.pageY - t.data.pos.top))) / t.data.cal.data("colpick").height, 10)).end().eq(5).val(parseInt(100 * Math.max(0, Math.min(t.data.cal.data("colpick").height, t.pageX - t.data.pos.left)) / t.data.cal.data("colpick").height, 10)).get(0), [t.data.preview]), !1
        }, I = function (i) {
            return l(i.data.cal.data("colpick").color, i.data.cal.get(0)), n(i.data.cal.data("colpick").color, i.data.cal.get(0)), t(document).off("mouseup", I), t(document).off("mousemove", M), !1
        }, C = function () {
            var i = t(this).parent(), a = i.data("colpick").color;
            i.data("colpick").origColor = a, f(a, i.get(0)), i.data("colpick").onSubmit(a, d(a), o(a), i.data("colpick").el)
        }, q = function () {
            var i = t("#" + t(this).data("colpickId"));
            i.data("colpick").onBeforeShow.apply(this, [i.get(0)]);
            var a = t(i.data("colpick").bornIn), c = a.offset(), e = t(this).offset(), o = a.scrollTop() + e.top + this.offsetHeight, l = e.left - c.left, d = T();
            l + 346 > d.l + d.w && (l -= 346), i.css({left: l + "px", top: o + "px"}), 0 != i.data("colpick").onShow.apply(this, [i.get(0)]) && i.show(), t("html").mousedown({cal: i}, S), i.mousedown(function (t) {
                t.stopPropagation()
            })
        }, S = function (i) {
            0 != i.data.cal.data("colpick").onHide.apply(this, [i.data.cal.get(0)]) && i.data.cal.hide(), t("html").off("mousedown", S)
        }, T = function () {
            var t = "CSS1Compat" == document.compatMode;
            return{l: window.pageXOffset || (t ? document.documentElement.scrollLeft : document.body.scrollLeft), w: window.innerWidth || (t ? document.documentElement.clientWidth : document.body.clientWidth)}
        }, H = function (t) {
            return{h: Math.min(360, Math.max(0, t.h)), s: Math.min(100, Math.max(0, t.s)), b: Math.min(100, Math.max(0, t.b))}
        }, z = function (t) {
            return{r: Math.min(255, Math.max(0, t.r)), g: Math.min(255, Math.max(0, t.g)), b: Math.min(255, Math.max(0, t.b))}
        }, L = function (t) {
            var i = 6 - t.length;
            if (i > 0) {
                for (var a = [], c = 0; i > c; c++)a.push("0");
                a.push(t), t = a.join("")
            }
            return t
        }, N = function () {
            var i = t(this).parent(), a = i.data("colpick").origColor;
            i.data("colpick").color = a, l(a, i.get(0)), n(a, i.get(0)), r(a, i.get(0)), s(a, i.get(0)), p(a, i.get(0)), u(a, i.get(0))
        };
        return{init: function (o) {
            if (o = t.extend({}, a, o || {}), "string" == typeof o.color)o.color = c(o.color); else if (void 0 != o.color.r && void 0 != o.color.g && void 0 != o.color.b)o.color = e(o.color); else {
                if (void 0 == o.color.h || void 0 == o.color.s || void 0 == o.color.b)return this;
                o.color = H(o.color)
            }
            return this.each(function () {
                if (!t(this).data("colpickId")) {
                    var a = t.extend({}, o);
                    a.origColor = o.color;
                    var c = "collorpicker_" + parseInt(1e3 * Math.random());
                    t(this).data("colpickId", c);
                    var e = t(i).attr("id", c);
                    e.addClass("colpick_" + a.layout + (a.submit ? "" : " colpick_" + a.layout + "_ns")), "light" != a.colorScheme && e.addClass("colpick_" + a.colorScheme), e.find("div.colpick_submit").html(a.submitText).click(C), a.fields = e.find("input").change(v).blur(h).focus(k), e.find("div.colpick_field_arrs").mousedown(g).end().find("div.colpick_current_color").click(N), a.selector = e.find("div.colpick_color").mousedown(y), a.selectorIndic = a.selector.find("div.colpick_selector_outer"), a.el = this, a.hue = e.find("div.colpick_hue_arrs"), huebar = a.hue.parent();
                    var d = navigator.userAgent.toLowerCase(), _ = "Microsoft Internet Explorer" === navigator.appName, m = _ ? parseFloat(d.match(/msie ([0-9]{1,}[\.0-9]{0,})/)[1]) : 0, x = _ && 10 > m, w = ["#ff0000", "#ff0080", "#ff00ff", "#8000ff", "#0000ff", "#0080ff", "#00ffff", "#00ff80", "#00ff00", "#80ff00", "#ffff00", "#ff8000", "#ff0000"];
                    if (x) {
                        var M, I;
                        for (M = 0; 11 >= M; M++)I = t("<div></div>").attr("style", "height:8.333333%; filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=" + w[M] + ", endColorstr=" + w[M + 1] + '); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=' + w[M] + ", endColorstr=" + w[M + 1] + ')";'), huebar.append(I)
                    } else stopList = w.join(","), huebar.attr("style", "background:-webkit-linear-gradient(top center," + stopList + "); background:-moz-linear-gradient(top center," + stopList + "); background:linear-gradient(to bottom," + stopList + "); "), huebar.css({background: "linear-gradient(to bottom," + stopList + ")"}), huebar.css({background: "-moz-linear-gradient(top," + stopList + ")"});
                    e.find("div.colpick_hue").mousedown(b), a.newColor = e.find("div.colpick_new_color"), a.currentColor = e.find("div.colpick_current_color"), e.data("colpick", a), l(a.color, e.get(0)), r(a.color, e.get(0)), n(a.color, e.get(0)), p(a.color, e.get(0)), s(a.color, e.get(0)), f(a.color, e.get(0)), u(a.color, e.get(0)), a.flat ? (e.appendTo(this).show(), e.addClass("colpick_flat").css({position: "relative", display: "block"})) : (e.appendTo(a.bornIn), t(this).on(a.showEvent, q), e.css({position: "absolute"}))
                }
            })
        }, showPicker: function () {
            return this.each(function () {
                t(this).data("colpickId") && q.apply(this)
            })
        }, hidePicker: function () {
            return this.each(function () {
                t(this).data("colpickId") && t("#" + t(this).data("colpickId")).hide()
            })
        }, setColor: function (i, a) {
            if (a = "undefined" == typeof a ? 1 : a, "string" == typeof i)i = c(i); else if (void 0 != i.r && void 0 != i.g && void 0 != i.b)i = e(i); else {
                if (void 0 == i.h || void 0 == i.s || void 0 == i.b)return this;
                i = H(i)
            }
            return this.each(function () {
                if (t(this).data("colpickId")) {
                    var c = t("#" + t(this).data("colpickId"));
                    c.data("colpick").color = i, c.data("colpick").origColor = i, l(i, c.get(0)), r(i, c.get(0)), n(i, c.get(0)), p(i, c.get(0)), s(i, c.get(0)), u(i, c.get(0)), c.data("colpick").onChange.apply(c.parent(), [i, d(i), o(i), 1]), a && f(i, c.get(0))
                }
            })
        }}
    }(), a = function (t) {
        var t = parseInt(t.indexOf("#") > -1 ? t.substring(1) : t, 16);
        return{r: t >> 16, g: (65280 & t) >> 8, b: 255 & t}
    }, c = function (t) {
        return e(a(t))
    }, e = function (t) {
        var i = {h: 0, s: 0, b: 0}, a = Math.min(t.r, t.g, t.b), c = Math.max(t.r, t.g, t.b), e = c - a;
        return i.b = c, i.s = 0 != c ? 255 * e / c : 0, i.h = 0 != i.s ? t.r == c ? (t.g - t.b) / e : t.g == c ? 2 + (t.b - t.r) / e : 4 + (t.r - t.g) / e : -1, i.h *= 60, i.h < 0 && (i.h += 360), i.s *= 100 / 255, i.b *= 100 / 255, i
    }, o = function (t) {
        var i = {}, a = Math.round(t.h), c = Math.round(255 * t.s / 100), e = Math.round(255 * t.b / 100);
        if (0 == c)i.r = i.g = i.b = e; else {
            var o = e, l = (255 - c) * e / 255, d = (o - l) * (a % 60) / 60;
            360 == a && (a = 0), 60 > a ? (i.r = o, i.b = l, i.g = l + d) : 120 > a ? (i.g = o, i.b = l, i.r = o - d) : 180 > a ? (i.g = o, i.r = l, i.b = l + d) : 240 > a ? (i.b = o, i.r = l, i.g = o - d) : 300 > a ? (i.b = o, i.g = l, i.r = l + d) : 360 > a ? (i.r = o, i.g = l, i.b = o - d) : (i.r = 0, i.g = 0, i.b = 0)
        }
        return{r: Math.round(i.r), g: Math.round(i.g), b: Math.round(i.b)}
    }, l = function (i) {
        var a = [i.r.toString(16), i.g.toString(16), i.b.toString(16)];
        return t.each(a, function (t, i) {
            1 == i.length && (a[t] = "0" + i)
        }), a.join("")
    }, d = function (t) {
        return l(o(t))
    };
    t.fn.extend({colpick: i.init, colpickHide: i.hidePicker, colpickShow: i.showPicker, colpickSetColor: i.setColor}), t.extend({colpickRgbToHex: l, colpickRgbToHsb: e, colpickHsbToHex: d, colpickHsbToRgb: o, colpickHexToHsb: c, colpickHexToRgb: a})
}(jQuery);

/**
 * bootstrap-colorpalette.js
 * (c) 2013~ Jiung Kang
 * Licensed under the Apache License, Version 2.0 (the "License");
 */
!function (t) {
    "use strict";
    var F = [
        ["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"],
        ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"],
        ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"],
        ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"],
        ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"],
        ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"],
        ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"],
        ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]
    ], e = function (F, e) {
        F.addClass("bootstrap-colorpalette");
        var o = [];
        t.each(e, function (F, e) {
            o.push("<div>"), t.each(e, function (t, F) {
                var e = ['<a href="javascript:void(0)"  class="btn-color" style="background-color:', F, '" data-value="', F, '" title="', F, '"></a>'].join("");
                o.push(e)
            }), o.push("</div>")
        }), F.html(o.join(""))
    }, o = function (F) {
        F.element.on("click", function (e) {
            var o = t(e.target), a = o.closest(".btn-color");
            if (a[0]) {
                var n = a.attr("data-value");
                F.value = n, F.element.trigger({type: "selectColor", color: n, element: F.element})
            }
        })
    }, a = function (t, a) {
        this.element = t, e(t, a && a.colors || F), o(this)
    };
    t.fn.extend({colorPalette: function (F) {
        return this.each(function () {
            var e = t(this), o = e.data("colorpalette");
            o || e.data("colorpalette", new a(e, F))
        }), this
    }})
}(jQuery);


/* ==========================================================
 * bootstrap-maxlength.js v1.4.2
 * 
 * Copyright (c) 2013 Maurizio Napoleoni; 
 *
 * Licensed under the terms of the MIT license.
 * See: https://github.com/mimo84/bootstrap-maxlength/blob/master/LICENSE
 * ========================================================== */
/*jslint browser:true*/
/*global  jQuery*/
!function (t) {
    "use strict";
    t.fn.extend({maxlength: function (e, a) {
        function s(t) {
            var a = t.val(), s = a.match(/\n/g), o = 0, r = 0;
            return e.utf8 ? (o = s ? n(s) : 0, r = n(t.val()) + o) : (o = s ? s.length : 0, r = t.val().length + o), r
        }

        function n(t) {
            for (var e = 0, a = 0; a < t.length; a++) {
                var s = t.charCodeAt(a);
                128 > s ? e++ : e += s > 127 && 2048 > s ? 2 : 3
            }
            return e
        }

        function o(t, a, n) {
            var o = !0;
            return!e.alwaysShow && n - s(t) > a && (o = !1), o
        }

        function r(t, e) {
            var a = e - s(t);
            return a
        }

        function i(t) {
            t.css({display: "block"})
        }

        function l(t) {
            t.css({display: "none"})
        }

        function h(t, a) {
            var s = "";
            return e.message ? s = e.message.replace("%charsTyped%", a).replace("%charsRemaining%", t - a).replace("%charsTotal%", t) : (e.preText && (s += e.preText), s += e.showCharsTyped ? a : t - a, e.showMaxLength && (s += e.separator + t), e.postText && (s += e.postText)), s
        }

        function c(t, a, s, n) {
            n.html(h(s, s - t)), t > 0 ? o(a, e.threshold, s) ? i(n.removeClass(e.limitReachedClass).addClass(e.warningClass)) : l(n) : i(n.removeClass(e.warningClass).addClass(e.limitReachedClass))
        }

        function d(e) {
            var a = e[0];
            return t.extend({}, "function" == typeof a.getBoundingClientRect ? a.getBoundingClientRect() : {width: a.offsetWidth, height: a.offsetHeight}, e.offset())
        }

        function u(t, a) {
            var s = d(t), n = m.offset(), o = t.outerWidth(), r = a.outerWidth(), i = a.outerWidth(), l = a.outerHeight(), h = m.scrollTop() + s.top, c = s.left - n.left;
            switch (e.placement) {
                case"bottom":
                    a.css({top: h + s.height, left: c + s.width / 2 - i / 2});
                    break;
                case"top":
                    a.css({top: h - l, left: c + s.width / 2 - i / 2});
                    break;
                case"left":
                    a.css({top: h + s.height / 2 - l / 2, left: c - i});
                    break;
                case"right":
                    a.css({top: h + s.height / 2 - l / 2, left: c + s.width});
                    break;
                case"bottom-right":
                    a.css({top: h + s.height, left: c + o - i});
                    break;
                case"top-right":
                    a.css({top: h - l, left: c + o - i});
                    break;
                case"top-left":
                    a.css({top: h - l, left: c});
                    break;
                case"bottom-left":
                    a.css({top: h + t.outerHeight(), left: c});
                    break;
                case"centered-right":
                    a.css({top: h + l / 2, left: c + o - r - 3})
            }
        }

        function f(t) {
            return t.attr("maxlength") || t.attr("size")
        }

        var p = t(this), g = {alwaysShow: p.data("always-show") || !1, bornIn: "body", threshold: p.data("threshold") || 10, warningClass: "label label-success", limitReachedClass: "label label-danger", separator: p.data("separator") || " / ", preText: p.data("pre-text"), postText: p.data("post-text"), showMaxLength: !0, placement: p.data("position") || "bottom-left", showCharsTyped: !0, validate: !1, utf8: !1};
        t.isFunction(e) && !a && (a = e, e = {}), e = t.extend(g, e), console.log(e.warningClass);
        var m = t(e.bornIn);
        return this.each(function () {
            var a, s, n = t(this);
            n.focus(function () {
                var e = h(a, "0");
                a = f(n), s = t('<span class="bootstrap-maxlength"></span>').css({display: "none", position: "absolute", whiteSpace: "nowrap", zIndex: 1099}).html(e), n.is("textarea") && (n.data("maxlenghtsizex", n.outerWidth()), n.data("maxlenghtsizey", n.outerHeight()), n.mouseup(function () {
                    (n.outerWidth() !== n.data("maxlenghtsizex") || n.outerHeight() !== n.data("maxlenghtsizey")) && u(n, s), n.data("maxlenghtsizex", n.outerWidth()), n.data("maxlenghtsizey", n.outerHeight())
                })), m.append(s);
                var o = r(n, f(n));
                c(o, n, a, s), u(n, s)
            }), n.blur(function () {
                s.remove()
            }), n.keyup(function (t) {
                {
                    var o = r(n, f(n)), i = !0;
                    t.keyCode || t.which
                }
                return e.validate && 0 > o ? i = !1 : c(o, n, a, s), i
            })
        })
    }})
}(jQuery);


/*!
 * bootstrap-select v1.3.5
 * http://silviomoreto.github.io/bootstrap-select/
 *
 * Copyright 2013 bootstrap-select
 * Licensed under the MIT license
 */
!function (t) {
    "use strict";
    t.expr[":"].icontains = function (e, i, s) {
        return t(e).text().toUpperCase().indexOf(s[3].toUpperCase()) >= 0
    };
    var e = function (i, s, n) {
        n && (n.stopPropagation(), n.preventDefault()), this.$element = t(i), this.$newElement = null, this.$button = null, this.$menu = null, this.options = t.extend({}, t.fn.selectpicker.defaults, this.$element.data(), "object" == typeof s && s), null == this.options.title && (this.options.title = this.$element.attr("title")), this.val = e.prototype.val, this.render = e.prototype.render, this.refresh = e.prototype.refresh, this.setStyle = e.prototype.setStyle, this.selectAll = e.prototype.selectAll, this.deselectAll = e.prototype.deselectAll, this.init()
    };
    e.prototype = {constructor: e, init: function () {
        this.$element.hide(), this.multiple = this.$element.prop("multiple");
        var e = this.$element.attr("id");
        if (this.$newElement = this.createView(), this.$element.after(this.$newElement), this.$menu = this.$newElement.find("> .dropdown-menu"), this.$button = this.$newElement.find("> button"), this.$searchbox = this.$newElement.find("input"), void 0 !== e) {
            var i = this;
            this.$button.attr("data-id", e), t('label[for="' + e + '"]').click(function (t) {
                t.preventDefault(), i.$button.focus()
            })
        }
        this.checkDisabled(), this.clickListener(), this.liveSearchListener(), this.render(), this.liHeight(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this)
    }, createDropdown: function () {
        var e = this.multiple ? " show-tick" : "", i = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "", s = this.options.liveSearch ? '<div class="bootstrap-select-searchbox"><input type="text" class="input-block-level form-control" /></div>' : "", n = "<div class='btn-group bootstrap-select" + e + "'><button type='button' class='btn dropdown-toggle selectpicker' data-toggle='dropdown'><div class='filter-option pull-left'></div>&nbsp;<div class='caret'></div></button><div class='dropdown-menu open'>" + i + s + "<ul class='dropdown-menu inner selectpicker' role='menu'></ul></div></div>";
        return t(n)
    }, createView: function () {
        var t = this.createDropdown(), e = this.createLi();
        return t.find("ul").append(e), t
    }, reloadLi: function () {
        this.destroyLi();
        var t = this.createLi();
        this.$menu.find("ul").append(t)
    }, destroyLi: function () {
        this.$menu.find("li").remove()
    }, createLi: function () {
        var e = this, i = [], s = "";
        return this.$element.find("option").each(function () {
            var s = t(this), n = s.attr("class") || "", o = s.attr("style") || "", a = s.data("content") ? s.data("content") : s.html(), l = void 0 !== s.data("subtext") ? '<small class="muted text-muted">' + s.data("subtext") + "</small>" : "", d = void 0 !== s.data("icon") ? '<i class="glyphicon ' + s.data("icon") + '"></i> ' : "";
            if ("" !== d && (s.is(":disabled") || s.parent().is(":disabled")) && (d = "<span>" + d + "</span>"), s.data("content") || (a = d + '<span class="text">' + a + l + "</span>"), e.options.hideDisabled && (s.is(":disabled") || s.parent().is(":disabled")))i.push('<a style="min-height: 0; padding: 0"></a>'); else if (s.parent().is("optgroup") && s.data("divider") !== !0)if (0 == s.index()) {
                var h = s.parent().attr("label"), r = void 0 !== s.parent().data("subtext") ? '<small class="muted text-muted">' + s.parent().data("subtext") + "</small>" : "", c = s.parent().data("icon") ? '<i class="' + s.parent().data("icon") + '"></i> ' : "";
                h = c + '<span class="text">' + h + r + "</span>", 0 != s[0].index ? i.push('<div class="div-contain"><div class="divider"></div></div><dt>' + h + "</dt>" + e.createA(a, "opt " + n, o)) : i.push("<dt>" + h + "</dt>" + e.createA(a, "opt " + n, o))
            } else i.push(e.createA(a, "opt " + n, o)); else s.data("divider") === !0 ? i.push('<div class="div-contain"><div class="divider"></div></div>') : t(this).data("hidden") === !0 ? i.push("") : i.push(e.createA(a, n, o))
        }), t.each(i, function (t, e) {
            s += "<li rel=" + t + ">" + e + "</li>"
        }), this.multiple || 0 != this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), t(s)
    }, createA: function (t, e, i) {
        return'<a tabindex="0" class="' + e + '" style="' + i + '">' + t + '<i class="glyphicon glyphicon-ok icon-ok check-mark"></i></a>'
    }, render: function () {
        var e = this;
        this.$element.find("option").each(function (i) {
            e.setDisabled(i, t(this).is(":disabled") || t(this).parent().is(":disabled")), e.setSelected(i, t(this).is(":selected"))
        }), this.tabIndex();
        var i = this.$element.find("option:selected").map(function () {
            var i, s = t(this), n = s.data("icon") && e.options.showIcon ? '<i class="glyphicon ' + s.data("icon") + '"></i> ' : "";
            return i = e.options.showSubtext && s.attr("data-subtext") && !e.multiple ? ' <small class="muted text-muted">' + s.data("subtext") + "</small>" : "", s.data("content") && e.options.showContent ? s.data("content") : void 0 != s.attr("title") ? s.attr("title") : n + s.html() + i
        }).toArray(), s = this.multiple ? i.join(", ") : i[0];
        if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
            var n = this.options.selectedTextFormat.split(">"), o = this.options.hideDisabled ? ":not([disabled])" : "";
            (n.length > 1 && i.length > n[1] || 1 == n.length && i.length >= 2) && (s = this.options.countSelectedText.replace("{0}", i.length).replace("{1}", this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])' + o).length))
        }
        s || (s = void 0 != this.options.title ? this.options.title : this.options.noneSelectedText), this.$newElement.find(".filter-option").html(s)
    }, setStyle: function (t, e) {
        this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device/gi, ""));
        var i = t ? t : this.options.style;
        "add" == e ? this.$button.addClass(i) : "remove" == e ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i))
    }, liHeight: function () {
        var t = this.$newElement.clone();
        t.appendTo("body");
        var e = t.addClass("open").find("> .dropdown-menu"), i = e.find("li > a").outerHeight(), s = this.options.header ? e.find(".popover-title").outerHeight() : 0, n = this.options.liveSearch ? e.find(".bootstrap-select-searchbox").outerHeight() : 0;
        t.remove(), this.$newElement.data("liHeight", i).data("headerHeight", s).data("searchHeight", n)
    }, setSize: function () {
        var e, i, s, n = this, o = this.$menu, a = o.find(".inner"), l = this.$newElement.outerHeight(), d = this.$newElement.data("liHeight"), h = this.$newElement.data("headerHeight"), r = this.$newElement.data("searchHeight"), c = o.find("li .divider").outerHeight(!0), p = parseInt(o.css("padding-top")) + parseInt(o.css("padding-bottom")) + parseInt(o.css("border-top-width")) + parseInt(o.css("border-bottom-width")), u = this.options.hideDisabled ? ":not(.disabled)" : "", f = t(window), m = p + parseInt(o.css("margin-top")) + parseInt(o.css("margin-bottom")) + 2, v = function () {
            i = n.$newElement.offset().top - f.scrollTop(), s = f.height() - i - l
        };
        if (v(), this.options.header && o.css("padding-top", 0), "auto" == this.options.size) {
            var b = function () {
                var t;
                v(), e = s - m, n.$newElement.toggleClass("dropup", i > s && e - m < o.height() && n.options.dropupAuto), n.$newElement.hasClass("dropup") && (e = i - m), t = o.find("li").length + o.find("dt").length > 3 ? 3 * d + m - 2 : 0, o.css({"max-height": e + "px", overflow: "hidden", "min-height": t + "px"}), a.css({"max-height": e - h - r - p + "px", "overflow-y": "auto", "min-height": t - p + "px"})
            };
            b(), t(window).resize(b), t(window).scroll(b)
        } else if (this.options.size && "auto" != this.options.size && o.find("li" + u).length > this.options.size) {
            var $ = o.find("li" + u + " > *").filter(":not(.div-contain)").slice(0, this.options.size).last().parent().index(), w = o.find("li").slice(0, $ + 1).find(".div-contain").length;
            e = d * this.options.size + w * c + p, this.$newElement.toggleClass("dropup", i > s && e < o.height() && this.options.dropupAuto), o.css({"max-height": e + h + r + "px", overflow: "hidden"}), a.css({"max-height": e - p + "px", "overflow-y": "auto"})
        }
    }, setWidth: function () {
        if ("auto" == this.options.width) {
            this.$menu.css("min-width", "0");
            var t = this.$newElement.clone().appendTo("body"), e = t.find("> .dropdown-menu").css("width");
            t.remove(), this.$newElement.css("width", e)
        } else"fit" == this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
        this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
    }, selectPosition: function () {
        var e, i, s = this, n = "<div />", o = t(n), a = function (t) {
            o.addClass(t.attr("class")).toggleClass("dropup", t.hasClass("dropup")), e = t.offset(), i = t.hasClass("dropup") ? 0 : t[0].offsetHeight, o.css({top: e.top + i, left: e.left, width: t[0].offsetWidth, position: "absolute"})
        };
        this.$newElement.on("click", function () {
            a(t(this)), o.appendTo(s.options.container), o.toggleClass("open", !t(this).hasClass("open")), o.append(s.$menu)
        }), t(window).resize(function () {
            a(s.$newElement)
        }), t(window).on("scroll", function () {
            a(s.$newElement)
        }), t("html").on("click", function (e) {
            t(e.target).closest(s.$newElement).length < 1 && o.removeClass("open")
        })
    }, mobile: function () {
        this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide()
    }, refresh: function () {
        this.reloadLi(), this.render(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight()
    }, update: function () {
        this.reloadLi(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight()
    }, setSelected: function (t, e) {
        this.$menu.find("li").eq(t).toggleClass("selected", e)
    }, setDisabled: function (t, e) {
        e ? this.$menu.find("li").eq(t).addClass("disabled").find("a").attr("href", "#").attr("tabindex", -1) : this.$menu.find("li").eq(t).removeClass("disabled").find("a").removeAttr("href").attr("tabindex", 0)
    }, isDisabled: function () {
        return this.$element.is(":disabled")
    }, checkDisabled: function () {
        var t = this;
        this.isDisabled() ? this.$button.addClass("disabled").attr("tabindex", -1) : (this.$button.hasClass("disabled") && this.$button.removeClass("disabled"), -1 == this.$button.attr("tabindex") && (this.$element.data("tabindex") || this.$button.removeAttr("tabindex"))), this.$button.click(function () {
            return!t.isDisabled()
        })
    }, tabIndex: function () {
        this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex")))
    }, clickListener: function () {
        var e = this;
        t("body").on("touchstart.dropdown", ".dropdown-menu", function (t) {
            t.stopPropagation()
        }), this.$newElement.on("click", function () {
            e.setSize()
        }), this.$menu.on("click", "li a", function (i) {
            var s = t(this).parent().index(), n = e.$element.val();
            if (e.multiple && i.stopPropagation(), i.preventDefault(), !e.isDisabled() && !t(this).parent().hasClass("disabled")) {
                var o = e.$element.find("option"), a = o.eq(s);
                if (e.multiple) {
                    var l = a.prop("selected");
                    a.prop("selected", !l)
                } else o.prop("selected", !1), a.prop("selected", !0);
                e.$button.focus(), n != e.$element.val() && e.$element.change()
            }
        }), this.$menu.on("click", "li.disabled a, li dt, li .div-contain, h3.popover-title", function (t) {
            t.target == this && (t.preventDefault(), t.stopPropagation(), e.$button.focus())
        }), this.$searchbox.on("click", function (t) {
            t.stopPropagation()
        }), this.$element.change(function () {
            e.render()
        })
    }, liveSearchListener: function () {
        var t = this;
        this.$newElement.on("click.dropdown.data-api", function () {
            t.options.liveSearch && setTimeout(function () {
                t.$searchbox.focus()
            }, 10)
        }), this.$searchbox.on("keyup",function (e) {
            40 == e.keyCode ? t.$menu.find("li:not(.divider):visible a").first().focus() : 38 == e.keyCode ? t.$menu.find("li:not(.divider):visible a").last().focus() : t.$searchbox.val() ? t.$menu.find("li").show().not(":icontains(" + t.$searchbox.val() + ")").hide() : t.$menu.find("li").show()
        }).on("keydown", function (e) {
            return 13 == e.keyCode ? (t.$button.click().focus(), e.preventDefault(), !1) : void 0
        })
    }, val: function (t) {
        return void 0 != t ? (this.$element.val(t), this.$element.change(), this.$element) : this.$element.val()
    }, selectAll: function () {
        this.$element.find("option").prop("selected", !0).attr("selected", "selected"), this.render()
    }, deselectAll: function () {
        this.$element.find("option").prop("selected", !1).removeAttr("selected"), this.render()
    }, keydown: function (e) {
        var i = t(this).parent().data("this");
        i.$searchbox && i.$searchbox.is(":not(:visible)") && e.keyCode >= 48 && e.keyCode <= 90 && (t(":focus").click(), i.$searchbox.focus())
    }, keyup: function (e) {
        var i, s, n, o;
        if (i = t(this), n = i.parent(), o = n.data("this"), o.options.container && (n = o.$menu), s = t("[role=menu] li:not(.divider):visible a", n), s.length) {
            if (/(38|40)/.test(e.keyCode) && o.$searchbox) {
                var a = s.index(t(":focus")), l = i.data("lastIndex");
                i.data("lastIndex", a), a == l && (0 == a || a == s.length - 1) && o.$searchbox.focus()
            } else {
                var d = {48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";", 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m", 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y", 90: "z", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9"}, h = [];
                s.each(function () {
                    t(this).parent().is(":not(.disabled)") && t.trim(t(this).text().toLowerCase()).substring(0, 1) == d[e.keyCode] && h.push(t(this).parent().index())
                });
                var r = t(document).data("keycount");
                r++, t(document).data("keycount", r);
                var c = t.trim(t(":focus").text().toLowerCase()).substring(0, 1);
                c != d[e.keyCode] ? (r = 1, t(document).data("keycount", r)) : r >= h.length && t(document).data("keycount", 0), s.eq(h[r - 1]).focus()
            }
            /(13|32)/.test(e.keyCode) && i.is("[role=menu]") && (e.preventDefault(), t(":focus").click(), t(document).data("keycount", 0))
        }
    }, hide: function () {
        this.$newElement.hide()
    }, show: function () {
        this.$newElement.show()
    }, destroy: function () {
        this.$newElement.remove(), this.$element.remove()
    }}, t.fn.selectpicker = function (i, s) {
        var n, o = arguments, a = this.each(function () {
            if (t(this).is("select")) {
                var a = t(this), l = a.data("selectpicker"), d = "object" == typeof i && i;
                if (l) {
                    if (d)for (var h in d)l.options[h] = d[h]
                } else a.data("selectpicker", l = new e(this, d, s));
                if ("string" == typeof i) {
                    var r = i;
                    l[r]instanceof Function ? ([].shift.apply(o), n = l[r].apply(l, o)) : n = l.options[r]
                }
            }
        });
        return void 0 != n ? n : a
    }, t.fn.selectpicker.defaults = {style: "btn-default", size: "auto", title: null, selectedTextFormat: "values", noneSelectedText: "Nothing selected", countSelectedText: "{0} of {1} selected", width: !1, container: !1, hideDisabled: !1, showSubtext: !1, showIcon: !0, showContent: !0, dropupAuto: !0, header: !1, liveSearch: !1}, t(document).data("keycount", 0).on("keydown", ".selectpicker[data-toggle=dropdown], .selectpicker[role=menu]", e.prototype.keydown).on("keyup", ".selectpicker[data-toggle=dropdown], .selectpicker[role=menu]", e.prototype.keyup)
}(window.jQuery);

/* ===========================================================
 * Bootstrap: fileinput.js v3.0.0-p7
 * http://jasny.github.com/bootstrap/javascript.html#fileinput
 * ===========================================================
 * Copyright 2012 Jasny BV, Netherlands.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function (e) {
    "use strict";
    var t = "Microsoft Internet Explorer" == window.navigator.appName, i = function (t, i) {
        if (this.$element = e(t), this.$input = this.$element.find(":file"), 0 !== this.$input.length) {
            this.name = this.$input.attr("name") || i.name, this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]'), 0 === this.$hidden.length && (this.$hidden = e('<input type="hidden" />'), this.$element.prepend(this.$hidden)), this.$preview = this.$element.find(".fileinput-preview");
            var n = this.$preview.css("height");
            "inline" != this.$preview.css("display") && "0px" != n && "none" != n && this.$preview.css("line-height", n), this.original = {exists: this.$element.hasClass("fileinput-exists"), preview: this.$preview.html(), hiddenVal: this.$hidden.val()}, this.listen()
        }
    };
    i.prototype.listen = function () {
        this.$input.on("change.bs.fileinput", e.proxy(this.change, this)), e(this.$input[0].form).on("reset.bs.fileinput", e.proxy(this.reset, this)), this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput", e.proxy(this.trigger, this)), this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput", e.proxy(this.clear, this))
    }, i.prototype.change = function (t) {
        if (void 0 === t.target.files && (t.target.files = t.target && t.target.value ? [
            {name: t.target.value.replace(/^.+\\/, "")}
        ] : []), 0 !== t.target.files.length) {
            this.$hidden.val(""), this.$hidden.attr("name", ""), this.$input.attr("name", this.name);
            var i = t.target.files[0];
            if (this.$preview.length > 0 && ("undefined" != typeof i.type ? i.type.match("image.*") : i.name.match(/\.(gif|png|jpe?g)$/i)) && "undefined" != typeof FileReader) {
                var n = new FileReader, s = this.$preview, a = this.$element;
                n.onload = function (n) {
                    var l = e("<img>").attr("src", n.target.result);
                    t.target.files[0].result = n.target.result, a.find(".fileinput-filename").text(i.name), "none" != s.css("max-height") && l.css("max-height", parseInt(s.css("max-height"), 10) - parseInt(s.css("padding-top"), 10) - parseInt(s.css("padding-bottom"), 10) - parseInt(s.css("border-top"), 10) - parseInt(s.css("border-bottom"), 10)), s.html(l), a.addClass("fileinput-exists").removeClass("fileinput-new"), a.trigger("change.bs.fileinput", t.target.files)
                }, n.readAsDataURL(i)
            } else this.$element.find(".fileinput-filename").text(i.name), this.$preview.text(i.name), this.$element.addClass("fileinput-exists").removeClass("fileinput-new"), this.$element.trigger("change.bs.fileinput")
        }
    }, i.prototype.clear = function (e) {
        if (e && e.preventDefault(), this.$hidden.val(""), this.$hidden.attr("name", this.name), this.$input.attr("name", ""), t) {
            var i = this.$input.clone(!0);
            this.$input.after(i), this.$input.remove(), this.$input = i
        } else this.$input.val("");
        this.$preview.html(""), this.$element.find(".fileinput-filename").text(""), this.$element.addClass("fileinput-new").removeClass("fileinput-exists"), e !== !1 && (this.$input.trigger("change"), this.$element.trigger("clear.bs.fileinput"))
    }, i.prototype.reset = function () {
        this.clear(!1), this.$hidden.val(this.original.hiddenVal), this.$preview.html(this.original.preview), this.$element.find(".fileinput-filename").text(""), this.original.exists ? this.$element.addClass("fileinput-exists").removeClass("fileinput-new") : this.$element.addClass("fileinput-new").removeClass("fileinput-exists"), this.$element.trigger("reset.bs.fileinput")
    }, i.prototype.trigger = function (e) {
        this.$input.trigger("click"), e.preventDefault()
    }, e.fn.fileinput = function (t) {
        return this.each(function () {
            var n = e(this), s = n.data("fileinput");
            s || n.data("fileinput", s = new i(this, t)), "string" == typeof t && s[t]()
        })
    }, e.fn.fileinput.Constructor = i, e(document).on("click.fileinput.data-api", '[data-provides="fileinput"]', function (t) {
        var i = e(this);
        if (!i.data("fileinput")) {
            i.fileinput(i.data());
            var n = e(t.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
            n.length > 0 && (t.preventDefault(), n.trigger("click.bs.fileinput"))
        }
    })
}(window.jQuery);


// jQuery Slider Plugin
// Egor Khmelev - http://blog.egorkhmelev.com/ - hmelyoff@gmail.com
!function () {
    Function.prototype.inheritFrom = function (t, e) {
        var i = function () {
        };
        if (i.prototype = t.prototype, this.prototype = new i, this.prototype.constructor = this, this.prototype.baseConstructor = t, this.prototype.superClass = t.prototype, e)for (var s in e)this.prototype[s] = e[s]
    }, Number.prototype.jSliderNice = function (t) {
        var e, i = /^(-)?(\d+)([\.,](\d+))?$/, s = Number(this), n = String(s), o = "", r = " ";
        if (e = n.match(i)) {
            var a = e[2], h = e[4] ? Number("0." + e[4]) : 0;
            if (h) {
                var l = Math.pow(10, t ? t : 2);
                if (h = Math.round(h * l), sNewDecPart = String(h), o = sNewDecPart, sNewDecPart.length < t)for (var u = t - sNewDecPart.length, c = 0; u > c; c++)o = "0" + o;
                o = "," + o
            } else if (t && 0 != t) {
                for (var c = 0; t > c; c++)o += "0";
                o = "," + o
            }
            var d;
            if (Number(a) < 1e3)d = a + o; else {
                var c, p = "";
                for (c = 1; 3 * c < a.length; c++)p = r + a.substring(a.length - 3 * c, a.length - 3 * (c - 1)) + p;
                d = a.substr(0, 3 - 3 * c + a.length) + p + o
            }
            return e[1] ? "-" + d : d
        }
        return n
    }, this.jSliderIsArray = function (t) {
        return"undefined" == typeof t ? !1 : t instanceof Array || !(t instanceof Object) && "[object Array]" == Object.prototype.toString.call(t) || "number" == typeof t.length && "undefined" != typeof t.splice && "undefined" != typeof t.propertyIsEnumerable && !t.propertyIsEnumerable("splice") ? !0 : !1
    }
}(), function () {
    var t = {};
    this.jSliderTmpl = function e(i, s) {
        var n = /\W/.test(i) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + i.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : t[i] = t[i] || e(i);
        return s ? n(s) : n
    }
}(), function (t) {
    this.Draggable = function () {
        this._init.apply(this, arguments)
    }, Draggable.prototype = {oninit: function () {
    }, events: function () {
    }, onmousedown: function () {
        this.ptr.css({position: "absolute"})
    }, onmousemove: function (t, e, i) {
        this.ptr.css({left: e, top: i})
    }, onmouseup: function () {
    }, isDefault: {drag: !1, clicked: !1, toclick: !0, mouseup: !1}, _init: function () {
        if (arguments.length > 0) {
            this.ptr = t(arguments[0]), this.outer = t(".draggable-outer"), this.is = {}, t.extend(this.is, this.isDefault);
            var e = this.ptr.offset();
            this.d = {left: e.left, top: e.top, width: this.ptr.width(), height: this.ptr.height()}, this.oninit.apply(this, arguments), this._events()
        }
    }, _getPageCoords: function (t) {
        return t.targetTouches && t.targetTouches[0] ? {x: t.targetTouches[0].pageX, y: t.targetTouches[0].pageY} : {x: t.pageX, y: t.pageY}
    }, _bindEvent: function (t, e, i) {
        this.supportTouches_ ? t.get(0).addEventListener(this.events_[e], i, !1) : t.bind(this.events_[e], i)
    }, _events: function () {
        var e = this;
        this.supportTouches_ = t.browser.webkit && -1 != navigator.userAgent.indexOf("Mobile"), this.events_ = {click: this.supportTouches_ ? "touchstart" : "click", down: this.supportTouches_ ? "touchstart" : "mousedown", move: this.supportTouches_ ? "touchmove" : "mousemove", up: this.supportTouches_ ? "touchend" : "mouseup"}, this._bindEvent(t(document), "move", function (t) {
            e.is.drag && (t.stopPropagation(), t.preventDefault(), e._mousemove(t))
        }), this._bindEvent(t(document), "down", function (t) {
            e.is.drag && (t.stopPropagation(), t.preventDefault())
        }), this._bindEvent(t(document), "up", function (t) {
            e._mouseup(t)
        }), this._bindEvent(this.ptr, "down", function (t) {
            return e._mousedown(t), !1
        }), this._bindEvent(this.ptr, "up", function (t) {
            e._mouseup(t)
        }), this.ptr.find("a").click(function () {
            return e.is.clicked = !0, e.is.toclick ? void 0 : (e.is.toclick = !0, !1)
        }).mousedown(function (t) {
            return e._mousedown(t), !1
        }), this.events()
    }, _mousedown: function (e) {
        this.is.drag = !0, this.is.clicked = !1, this.is.mouseup = !1;
        var i = this.ptr.offset(), s = this._getPageCoords(e);
        this.cx = s.x - i.left, this.cy = s.y - i.top, t.extend(this.d, {left: i.left, top: i.top, width: this.ptr.width(), height: this.ptr.height()}), this.outer && this.outer.get(0) && this.outer.css({height: Math.max(this.outer.height(), t(document.body).height()), overflow: "hidden"}), this.onmousedown(e)
    }, _mousemove: function (t) {
        this.is.toclick = !1;
        var e = this._getPageCoords(t);
        this.onmousemove(t, e.x - this.cx, e.y - this.cy)
    }, _mouseup: function (e) {
        this.is.drag && (this.is.drag = !1, this.outer && this.outer.get(0) && (t.browser.mozilla ? this.outer.css({overflow: "hidden"}) : this.outer.css({overflow: "visible"}), t.browser.msie && "6.0" == t.browser.version ? this.outer.css({height: "100%"}) : this.outer.css({height: "auto"})), this.onmouseup(e))
    }}
}(jQuery), function (t) {
    function e() {
        this.baseConstructor.apply(this, arguments)
    }

    t.jslider = function (e, i) {
        var s = t(e);
        return s.data("jslider") || s.data("jslider", new jSlider(e, i)), s.data("jslider")
    }, t.fn.jslider = function (e, i) {
        function s(t) {
            return void 0 !== t
        }

        function n(t) {
            return null != t
        }

        var o, r = arguments;
        return this.each(function () {
            var a = t.jslider(this, e);
            if ("string" == typeof e)switch (e) {
                case"value":
                    if (s(r[1]) && s(r[2])) {
                        var h = a.getPointers();
                        n(h[0]) && n(r[1]) && (h[0].set(r[1]), h[0].setIndexOver()), n(h[1]) && n(r[2]) && (h[1].set(r[2]), h[1].setIndexOver())
                    } else if (s(r[1])) {
                        var h = a.getPointers();
                        n(h[0]) && n(r[1]) && (h[0].set(r[1]), h[0].setIndexOver())
                    } else o = a.getValue();
                    break;
                case"prc":
                    if (s(r[1]) && s(r[2])) {
                        var h = a.getPointers();
                        n(h[0]) && n(r[1]) && (h[0]._set(r[1]), h[0].setIndexOver()), n(h[1]) && n(r[2]) && (h[1]._set(r[2]), h[1].setIndexOver())
                    } else if (s(r[1])) {
                        var h = a.getPointers();
                        n(h[0]) && n(r[1]) && (h[0]._set(r[1]), h[0].setIndexOver())
                    } else o = a.getPrcValue();
                    break;
                case"calculatedValue":
                    var l = a.getValue().split(";");
                    o = "";
                    for (var u = 0; u < l.length; u++)o += (u > 0 ? ";" : "") + a.nice(l[u]);
                    break;
                case"skin":
                    a.setSkin(r[1])
            } else e || i || (jSliderIsArray(o) || (o = []), o.push(jslider))
        }), jSliderIsArray(o) && 1 == o.length && (o = o[0]), o || this
    };
    var i = {settings: {from: 1, to: 10, step: 1, smooth: !0, limits: !0, round: 0, value: "5;7", dimension: ""}, className: "jslider", selector: ".jslider-", template: jSliderTmpl('<span class="<%=className%>"><table><tr><td><div class="<%=className%>-bg"><i class="l"><i></i></i><i class="r"><i></i></i><i class="v"><i></i></i></div><div class="<%=className%>-pointer"><i></i></div><div class="<%=className%>-pointer <%=className%>-pointer-to"><i></i></div><div class="<%=className%>-label"><span><%=settings.from%></span></div><div class="<%=className%>-label <%=className%>-label-to"><span><%=settings.to%></span><%=settings.dimension%></div><div class="<%=className%>-value"><span></span><%=settings.dimension%></div><div class="<%=className%>-value <%=className%>-value-to"><span></span><%=settings.dimension%></div><div class="<%=className%>-scale"><%=scale%></div></td></tr></table></span>')};
    this.jSlider = function () {
        return this.init.apply(this, arguments)
    }, jSlider.prototype = {init: function (e, s) {
        this.settings = t.extend(!0, {}, i.settings, s ? s : {}), this.inputNode = t(e).hide(), this.settings.interval = this.settings.to - this.settings.from, this.settings.value = this.inputNode.attr("value"), this.settings.calculate && t.isFunction(this.settings.calculate) && (this.nice = this.settings.calculate), this.settings.onstatechange && t.isFunction(this.settings.onstatechange) && (this.onstatechange = this.settings.onstatechange), this.is = {init: !1}, this.o = {}, this.create()
    }, onstatechange: function () {
    }, create: function () {
        var s = this;
        this.domNode = t(i.template({className: i.className, settings: {from: this.nice(this.settings.from), to: this.nice(this.settings.to), dimension: this.settings.dimension}, scale: this.generateScale()})), this.inputNode.after(this.domNode), this.drawScale(), this.settings.skin && this.settings.skin.length > 0 && this.setSkin(this.settings.skin), this.sizes = {domWidth: this.domNode.width(), domOffset: this.domNode.offset()}, t.extend(this.o, {pointers: {}, labels: {0: {o: this.domNode.find(i.selector + "value").not(i.selector + "value-to")}, 1: {o: this.domNode.find(i.selector + "value").filter(i.selector + "value-to")}}, limits: {0: this.domNode.find(i.selector + "label").not(i.selector + "label-to"), 1: this.domNode.find(i.selector + "label").filter(i.selector + "label-to")}}), t.extend(this.o.labels[0], {value: this.o.labels[0].o.find("span")}), t.extend(this.o.labels[1], {value: this.o.labels[1].o.find("span")}), s.settings.value.split(";")[1] || (this.settings.single = !0, this.domNode.addDependClass("single")), s.settings.limits || this.domNode.addDependClass("limitless"), this.domNode.find(i.selector + "pointer").each(function (t) {
            var i = s.settings.value.split(";")[t];
            if (i) {
                s.o.pointers[t] = new e(this, t, s);
                var n = s.settings.value.split(";")[t - 1];
                n && new Number(i) < new Number(n) && (i = n), i = i < s.settings.from ? s.settings.from : i, i = i > s.settings.to ? s.settings.to : i, s.o.pointers[t].set(i, !0)
            }
        }), this.o.value = this.domNode.find(".v"), this.is.init = !0, t.each(this.o.pointers, function () {
            s.redraw(this)
        }), function (e) {
            t(window).resize(function () {
                e.onresize()
            })
        }(this)
    }, setSkin: function (t) {
        this.skin_ && this.domNode.removeDependClass(this.skin_, "_"), this.domNode.addDependClass(this.skin_ = t, "_")
    }, setPointersIndex: function () {
        t.each(this.getPointers(), function (t) {
            this.index(t)
        })
    }, getPointers: function () {
        return this.o.pointers
    }, generateScale: function () {
        if (this.settings.scale && this.settings.scale.length > 0) {
            for (var t = "", e = this.settings.scale, i = Math.round(100 / (e.length - 1) * 10) / 10, s = 0; s < e.length; s++)t += '<span style="left: ' + s * i + '%">' + ("|" != e[s] ? "<ins>" + e[s] + "</ins>" : "") + "</span>";
            return t
        }
        return""
    }, drawScale: function () {
        this.domNode.find(i.selector + "scale span ins").each(function () {
            t(this).css({marginLeft: -t(this).outerWidth() / 2})
        })
    }, onresize: function () {
        var e = this;
        this.sizes = {domWidth: this.domNode.width(), domOffset: this.domNode.offset()}, t.each(this.o.pointers, function () {
            e.redraw(this)
        })
    }, limits: function (t, e) {
        if (!this.settings.smooth) {
            var i = 100 * this.settings.step / this.settings.interval;
            t = Math.round(t / i) * i
        }
        var s = this.o.pointers[1 - e.uid];
        return s && e.uid && t < s.value.prc && (t = s.value.prc), s && !e.uid && t > s.value.prc && (t = s.value.prc), 0 > t && (t = 0), t > 100 && (t = 100), Math.round(10 * t) / 10
    }, redraw: function (t) {
        return this.is.init ? (this.setValue(), this.o.pointers[0] && this.o.pointers[1] && this.o.value.css({left: this.o.pointers[0].value.prc + "%", width: this.o.pointers[1].value.prc - this.o.pointers[0].value.prc + "%"}), this.o.labels[t.uid].value.html(this.nice(t.value.origin)), this.redrawLabels(t), void 0) : !1
    }, redrawLabels: function (t) {
        function e(t, e, s) {
            return e.margin = -e.label / 2, label_left = e.border + e.margin, 0 > label_left && (e.margin -= label_left), e.border + e.label / 2 > i.sizes.domWidth ? (e.margin = 0, e.right = !0) : e.right = !1, t.o.css({left: s + "%", marginLeft: e.margin, right: "auto"}), e.right && t.o.css({left: "auto", right: 0}), e
        }

        var i = this, s = this.o.labels[t.uid], n = t.value.prc, o = {label: s.o.outerWidth(), right: !1, border: n * this.sizes.domWidth / 100};
        if (!this.settings.single) {
            var r = this.o.pointers[1 - t.uid], a = this.o.labels[r.uid];
            switch (t.uid) {
                case 0:
                    o.border + o.label / 2 > a.o.offset().left - this.sizes.domOffset.left ? (a.o.css({visibility: "hidden"}), a.value.html(this.nice(r.value.origin)), s.o.css({visibility: "visible"}), n = (r.value.prc - n) / 2 + n, r.value.prc != t.value.prc && (s.value.html(this.nice(t.value.origin) + "&nbsp;&ndash;&nbsp;" + this.nice(r.value.origin)), o.label = s.o.outerWidth(), o.border = n * this.sizes.domWidth / 100)) : a.o.css({visibility: "visible"});
                    break;
                case 1:
                    o.border - o.label / 2 < a.o.offset().left - this.sizes.domOffset.left + a.o.outerWidth() ? (a.o.css({visibility: "hidden"}), a.value.html(this.nice(r.value.origin)), s.o.css({visibility: "visible"}), n = (n - r.value.prc) / 2 + r.value.prc, r.value.prc != t.value.prc && (s.value.html(this.nice(r.value.origin) + "&nbsp;&ndash;&nbsp;" + this.nice(t.value.origin)), o.label = s.o.outerWidth(), o.border = n * this.sizes.domWidth / 100)) : a.o.css({visibility: "visible"})
            }
        }
        if (o = e(s, o, n), a) {
            var o = {label: a.o.outerWidth(), right: !1, border: r.value.prc * this.sizes.domWidth / 100};
            o = e(a, o, r.value.prc)
        }
        this.redrawLimits()
    }, redrawLimits: function () {
        if (this.settings.limits) {
            var t = [!0, !0];
            for (key in this.o.pointers)if (!this.settings.single || 0 == key) {
                var e = this.o.pointers[key], i = this.o.labels[e.uid], s = i.o.offset().left - this.sizes.domOffset.left, n = this.o.limits[0];
                s < n.outerWidth() && (t[0] = !1);
                var n = this.o.limits[1];
                s + i.o.outerWidth() > this.sizes.domWidth - n.outerWidth() && (t[1] = !1)
            }
            for (var o = 0; o < t.length; o++)t[o] ? this.o.limits[o].fadeIn("fast") : this.o.limits[o].fadeOut("fast")
        }
    }, setValue: function () {
        var t = this.getValue();
        this.inputNode.attr("value", t), this.onstatechange.call(this, t)
    }, getValue: function () {
        if (!this.is.init)return!1;
        var e = this, i = "";
        return t.each(this.o.pointers, function (t) {
            void 0 == this.value.prc || isNaN(this.value.prc) || (i += (t > 0 ? ";" : "") + e.prcToValue(this.value.prc))
        }), i
    }, getPrcValue: function () {
        if (!this.is.init)return!1;
        var e = "";
        return t.each(this.o.pointers, function (t) {
            void 0 == this.value.prc || isNaN(this.value.prc) || (e += (t > 0 ? ";" : "") + this.value.prc)
        }), e
    }, prcToValue: function (t) {
        if (this.settings.heterogeneity && this.settings.heterogeneity.length > 0)for (var e = this.settings.heterogeneity, i = 0, s = this.settings.from, n = 0; n <= e.length; n++) {
            if (e[n])var o = e[n].split("/"); else var o = [100, this.settings.to];
            if (o[0] = new Number(o[0]), o[1] = new Number(o[1]), t >= i && t <= o[0])var r = s + (t - i) * (o[1] - s) / (o[0] - i);
            i = o[0], s = o[1]
        } else var r = this.settings.from + t * this.settings.interval / 100;
        return this.round(r)
    }, valueToPrc: function (t, e) {
        if (this.settings.heterogeneity && this.settings.heterogeneity.length > 0)for (var i = this.settings.heterogeneity, s = 0, n = this.settings.from, o = 0; o <= i.length; o++) {
            if (i[o])var r = i[o].split("/"); else var r = [100, this.settings.to];
            if (r[0] = new Number(r[0]), r[1] = new Number(r[1]), t >= n && t <= r[1])var a = e.limits(s + (t - n) * (r[0] - s) / (r[1] - n));
            s = r[0], n = r[1]
        } else var a = e.limits(100 * (t - this.settings.from) / this.settings.interval);
        return a
    }, round: function (t) {
        return t = Math.round(t / this.settings.step) * this.settings.step, t = this.settings.round ? Math.round(t * Math.pow(10, this.settings.round)) / Math.pow(10, this.settings.round) : Math.round(t)
    }, nice: function (t) {
        return t = t.toString().replace(/,/gi, "."), t = t.toString().replace(/ /gi, ""), Number.prototype.jSliderNice ? new Number(t).jSliderNice(this.settings.round).replace(/-/gi, "&minus;") : new Number(t)
    }}, e.inheritFrom(Draggable, {oninit: function (t, e, i) {
        this.uid = e, this.parent = i, this.value = {}, this.settings = this.parent.settings
    }, onmousedown: function () {
        this._parent = {offset: this.parent.domNode.offset(), width: this.parent.domNode.width()}, this.ptr.addDependClass("hover"), this.setIndexOver()
    }, onmousemove: function (t) {
        var e = this._getPageCoords(t);
        this._set(this.calc(e.x))
    }, onmouseup: function () {
        this.parent.settings.callback && t.isFunction(this.parent.settings.callback) && this.parent.settings.callback.call(this.parent, this.parent.getValue()), this.ptr.removeDependClass("hover")
    }, setIndexOver: function () {
        this.parent.setPointersIndex(1), this.index(2)
    }, index: function (t) {
        this.ptr.css({zIndex: t})
    }, limits: function (t) {
        return this.parent.limits(t, this)
    }, calc: function (t) {
        var e = this.limits(100 * (t - this._parent.offset.left) / this._parent.width);
        return e
    }, set: function (t, e) {
        this.value.origin = this.parent.round(t), this._set(this.parent.valueToPrc(t, this), e)
    }, _set: function (t, e) {
        e || (this.value.origin = this.parent.prcToValue(t)), this.value.prc = t, this.ptr.css({left: t + "%"}), this.parent.redraw(this)
    }})
}(jQuery);

/**
 * Slider Pagination Concept
 * jquery.pagination.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
!function (t) {
    "use strict";
    t.Slider = function (t, i) {
        this.$el = i, this.range = t.range, this.value = t.value, this.total = t.total, this.width = t.width, this._create()
    }, t.Slider.prototype = {_create: function () {
        this.slider = this.$el.slider({ range: this.range, value: this.value, min: 1, max: this.total, step: 1}), this.$value = t("<span>" + this.value + "</span>"), this.getHandle().append(this.$value)
    }, setValue: function (t) {
        this.value = t, this.$value.text(t), this.slider.slider("value", t)
    }, getValue: function () {
        return this.value
    }, getHandle: function () {
        return this.$el.find("a.ui-slider-handle")
    }, getSlider: function () {
        return this.slider
    }, getSliderEl: function () {
        return this.$el
    }, next: function (t) {
        this.value < this.total && (this.setValue(++this.value), t && t.call(this, this.value))
    }, previous: function (t) {
        this.value > 1 && (this.setValue(--this.value), t && t.call(this, this.value))
    }}, t.Pagination = function (i, n) {
        this.$el = t(n), this._init(i)
    }, t.Pagination.defaults = {  value: 1, total: 5, width: 200, onChange: function () {
        return!1
    }, onSlide: function () {
        return!1
    }}, t.Pagination.prototype = {_init: function (i) {
        this.options = t.extend(!0, {}, t.Pagination.defaults, i);
        var n = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", msTransition: "MSTransitionEnd", transition: "transitionend"};
        this.transEndEventName = n[Modernizr.prefixed("transition")], t.fn.applyStyle = Modernizr.csstransitions ? t.fn.css : t.fn.animate, this._layout(), this._initEvents()
    }, _layout: function () {
        this.$navNext = this.$el.find("nav > a.cp-next"), this.$navPrev = this.$el.find("nav > a.cp-prev");
        var i = t('<div class="cp-slider"></div>').appendTo(this.$el);
        this.slider = new t.Slider({ range: this.options.range, value: this.options.value, total: this.options.total, width: this.options.width}, i), this.isSliderOpened = this.options.sliderOpened
    }, _initEvents: function () {
        var i = this;
        this.slider.getHandle().on("click", function () {
            return i.isSliderOpened ? !1 : (i.isSliderOpened = !0, i.slider.getSliderEl().addClass("cp-slider-open"), i.$el.stop().applyStyle({width: i.options.width}, t.extend(!0, [], {duration: "150ms"})), i.toggleNavigation(!1), !1)
        }), this.slider.getSlider().on({slidestop: function (n, e) {
            if (!i.isSliderOpened)return!1;
            var s = function () {
                i.isSliderOpened = !1, i.slider.getSliderEl().removeClass("cp-slider-open"), i.toggleNavigation(!0)
            };
            i.$el.stop().applyStyle({width: 0}, t.extend(!0, [], {duration: "150ms", complete: s})).on(i.transEndEventName, function () {
                t(this).off(i.transEndEventName), s.call()
            }), i.options.onChange(e.value)
        }, slide: function (t, n) {
            return i.isSliderOpened ? (i.slider.setValue(n.value), i.options.onSlide(n.value), void 0) : !1
        }}), this.$navNext.on("click", function () {
            return i.slider.next(function (t) {
                i.options.onChange(t)
            }), !1
        }), this.$navPrev.on("click", function () {
            return i.slider.previous(function (t) {
                i.options.onChange(t)
            }), !1
        })
    }, toggleNavigation: function (i) {
        t.fn.render = i ? t.fn.show : t.fn.hide, this.$navNext.render(), this.$navPrev.render()
    }}, t.fn.modernSlider = function (i) {
        var n = t.data(this, "pagination");
        if ("string" == typeof i) {
            var e = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                n[i].apply(n, e)
            })
        } else this.each(function () {
            n ? n._init() : n = t.data(this, "pagination", new t.Pagination(i, this))
        });
        return n
    }
}(jQuery, window);

/*!
 * jQuery twitter bootstrap wizard plugin
 * Examples and documentation at: http://github.com/VinceG/twitter-bootstrap-wizard
 * version 1.0
 * Requires jQuery v1.3.2 or later
 * Supports Bootstrap 2.2.x, 2.3.x, 3.0
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Authors: Vadim Vincent Gabriel (http://vadimg.com), Jason Gill (www.gilluminate.com)
 */
(function (e) {
    var k = function (d, g) {
        d = e(d);
        var a = this, b = e.extend({}, e.fn.bootstrapWizard.defaults, g), f = null, c = null;
        this.rebindClick = function (b, a) {
            b.unbind("click", a).bind("click", a)
        };
        this.fixNavigationButtons = function () {
            f.length || (c.find("a:first").tab("show"), f = c.find('li:has([data-toggle="tab"]):first'));
            e(b.previousSelector, d).toggleClass("disabled", a.firstIndex() >= a.currentIndex());
            e(b.nextSelector, d).toggleClass("disabled", a.currentIndex() >= a.navigationLength());
            a.rebindClick(e(b.nextSelector, d),
                a.next);
            a.rebindClick(e(b.previousSelector, d), a.previous);
            a.rebindClick(e(b.lastSelector, d), a.last);
            a.rebindClick(e(b.firstSelector, d), a.first);
            if (b.onTabShow && "function" === typeof b.onTabShow && !1 === b.onTabShow(f, c, a.currentIndex()))return!1
        };
        this.next = function (h) {
            if (d.hasClass("last") || b.onNext && "function" === typeof b.onNext && !1 === b.onNext(f, c, a.nextIndex()))return!1;
            $index = a.nextIndex();
            $index > a.navigationLength() || c.find('li:has([data-toggle="tab"]):eq(' + $index + ") a").tab("show")
        };
        this.previous =
            function (h) {
                if (d.hasClass("first") || b.onPrevious && "function" === typeof b.onPrevious && !1 === b.onPrevious(f, c, a.previousIndex()))return!1;
                $index = a.previousIndex();
                0 > $index || c.find('li:has([data-toggle="tab"]):eq(' + $index + ") a").tab("show")
            };
        this.first = function (h) {
            if (b.onFirst && "function" === typeof b.onFirst && !1 === b.onFirst(f, c, a.firstIndex()) || d.hasClass("disabled"))return!1;
            c.find('li:has([data-toggle="tab"]):eq(0) a').tab("show")
        };
        this.last = function (h) {
            if (b.onLast && "function" === typeof b.onLast && !1 ===
                b.onLast(f, c, a.lastIndex()) || d.hasClass("disabled"))return!1;
            c.find('li:has([data-toggle="tab"]):eq(' + a.navigationLength() + ") a").tab("show")
        };
        this.currentIndex = function () {
            return c.find('li:has([data-toggle="tab"])').index(f)
        };
        this.firstIndex = function () {
            return 0
        };
        this.lastIndex = function () {
            return a.navigationLength()
        };
        this.getIndex = function (a) {
            return c.find('li:has([data-toggle="tab"])').index(a)
        };
        this.nextIndex = function () {
            return c.find('li:has([data-toggle="tab"])').index(f) + 1
        };
        this.previousIndex =
            function () {
                return c.find('li:has([data-toggle="tab"])').index(f) - 1
            };
        this.navigationLength = function () {
            return c.find('li:has([data-toggle="tab"])').length - 1
        };
        this.activeTab = function () {
            return f
        };
        this.nextTab = function () {
            return c.find('li:has([data-toggle="tab"]):eq(' + (a.currentIndex() + 1) + ")").length ? c.find('li:has([data-toggle="tab"]):eq(' + (a.currentIndex() + 1) + ")") : null
        };
        this.previousTab = function () {
            return 0 >= a.currentIndex() ? null : c.find('li:has([data-toggle="tab"]):eq(' + parseInt(a.currentIndex() - 1) + ")")
        };
        this.show = function (a) {
            return d.find('li:has([data-toggle="tab"]):eq(' + a + ") a").tab("show")
        };
        this.disable = function (a) {
            c.find('li:has([data-toggle="tab"]):eq(' + a + ")").addClass("disabled")
        };
        this.enable = function (a) {
            c.find('li:has([data-toggle="tab"]):eq(' + a + ")").removeClass("disabled")
        };
        this.hide = function (a) {
            c.find('li:has([data-toggle="tab"]):eq(' + a + ")").hide()
        };
        this.display = function (a) {
            c.find('li:has([data-toggle="tab"]):eq(' + a + ")").show()
        };
        this.remove = function (a) {
            var b = "undefined" != typeof a[1] ? a[1] :
                !1;
            a = c.find('li:has([data-toggle="tab"]):eq(' + a[0] + ")");
            b && (b = a.find("a").attr("href"), e(b).remove());
            a.remove()
        };
        c = d.find("ul:first", d);
        f = c.find('li:has([data-toggle="tab"]).active', d);
        c.hasClass(b.tabClass) || c.addClass(b.tabClass);
        if (b.onInit && "function" === typeof b.onInit)b.onInit(f, c, 0);
        if (b.onShow && "function" === typeof b.onShow)b.onShow(f, c, a.nextIndex());
        a.fixNavigationButtons();
        e('a[data-toggle="tab"]', c).on("click", function (d) {
            d = c.find('li:has([data-toggle="tab"])').index(e(d.currentTarget).parent('li:has([data-toggle="tab"])'));
            if (b.onTabClick && "function" === typeof b.onTabClick && !1 === b.onTabClick(f, c, a.currentIndex(), d))return!1
        });
        e('a[data-toggle="tab"]', c).on("shown shown.bs.tab", function (d) {
            $element = e(d.target).parent();
            d = c.find('li:has([data-toggle="tab"])').index($element);
            if ($element.hasClass("disabled") || b.onTabChange && "function" === typeof b.onTabChange && !1 === b.onTabChange(f, c, a.currentIndex(), d))return!1;
            f = $element;
            a.fixNavigationButtons()
        })
    };
    e.fn.bootstrapWizard = function (d) {
        if ("string" == typeof d) {
            var g = Array.prototype.slice.call(arguments,
                1);
            1 === g.length && g.toString();
            return this.data("bootstrapWizard")[d](g)
        }
        return this.each(function (a) {
            a = e(this);
            if (!a.data("bootstrapWizard")) {
                var b = new k(a, d);
                a.data("bootstrapWizard", b)
            }
        })
    };
    e.fn.bootstrapWizard.defaults = {tabClass: "nav nav-pills", nextSelector: ".wizard .next", previousSelector: ".wizard .previous", firstSelector: ".wizard  .first", lastSelector: ".wizard  .last", onShow: null, onInit: null, onNext: null, onPrevious: null, onLast: null, onFirst: null, onTabChange: null, onTabClick: null, onTabShow: null}
})(jQuery);


/*
 * MultiSelect v0.9.10
 * Copyright (c) 2012 Louis Cuny
 *
 * This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://sam.zoy.org/wtfpl/COPYING for more details.
 */

!function (e) {
    "use strict";
    var t = function (t, s) {
        this.options = s, this.$element = e(t), this.$container = e("<div/>", {"class": "ms-container"}), this.$selectableContainer = e("<div/>", {"class": "ms-selectable"}), this.$selectionContainer = e("<div/>", {"class": "ms-selection"}), this.$selectableUl = e("<ul/>", {"class": "ms-list", tabindex: "-1"}), this.$selectionUl = e("<ul/>", {"class": "ms-list", tabindex: "-1"}), this.scrollTo = 0, this.elemsSelector = "li:visible:not(.ms-optgroup-label,.ms-optgroup-container,." + s.disabledClass + ")"
    };
    t.prototype = {constructor: t, init: function () {
        var t = this, s = this.$element;
        if (0 === s.next(".ms-container").length) {
            s.css({position: "absolute", left: "-9999px"}), s.attr("id", s.attr("id") ? s.attr("id") : Math.ceil(1e3 * Math.random()) + "multiselect"), this.$container.attr("id", "ms-" + s.attr("id")), this.$container.addClass(t.options.cssClass), s.find("option").each(function () {
                t.generateLisFromOption(this)
            }), this.$selectionUl.find(".ms-optgroup-label").hide(), t.options.selectableHeader && t.$selectableContainer.append(t.options.selectableHeader), t.$selectableContainer.append(t.$selectableUl), t.options.selectableFooter && t.$selectableContainer.append(t.options.selectableFooter), t.options.selectionHeader && t.$selectionContainer.append(t.options.selectionHeader), t.$selectionContainer.append(t.$selectionUl), t.options.selectionFooter && t.$selectionContainer.append(t.options.selectionFooter), t.$container.append(t.$selectableContainer), t.$container.append(t.$selectionContainer), s.after(t.$container), t.activeMouse(t.$selectableUl), t.activeKeyboard(t.$selectableUl);
            var l = t.options.dblClick ? "dblclick" : "click";
            t.$selectableUl.on(l, ".ms-elem-selectable", function () {
                t.select(e(this).data("ms-value"))
            }), t.$selectionUl.on(l, ".ms-elem-selection", function () {
                t.deselect(e(this).data("ms-value"))
            }), t.activeMouse(t.$selectionUl), t.activeKeyboard(t.$selectionUl), s.on("focus", function () {
                t.$selectableUl.focus()
            })
        }
        var i = s.find("option:selected").map(function () {
            return e(this).val()
        }).get();
        t.select(i, "init"), "function" == typeof t.options.afterInit && t.options.afterInit.call(this, this.$container)
    }, generateLisFromOption: function (t, s) {
        for (var l = this, i = l.$element, n = "", o = e(t), a = 0; a < t.attributes.length; a++) {
            var r = t.attributes[a];
            "value" !== r.name && "disabled" !== r.name && (n += r.name + '="' + r.value + '" ')
        }
        var c = e("<li " + n + "><span>" + l.escapeHTML(o.text()) + "</span></li>"), d = c.clone(), h = o.val(), p = l.sanitize(h);
        c.data("ms-value", h).addClass("ms-elem-selectable").attr("id", p + "-selectable"), d.data("ms-value", h).addClass("ms-elem-selection").attr("id", p + "-selection").hide(), (o.prop("disabled") || i.prop("disabled")) && (d.addClass(l.options.disabledClass), c.addClass(l.options.disabledClass));
        var f = o.parent("optgroup");
        if (f.length > 0) {
            var u = f.attr("label"), m = l.sanitize(u), v = l.$selectableUl.find("#optgroup-selectable-" + m), b = l.$selectionUl.find("#optgroup-selection-" + m);
            if (0 === v.length) {
                var g = '<li class="ms-optgroup-container"></li>', $ = '<ul class="ms-optgroup"><li class="ms-optgroup-label"><span>' + u + "</span></li></ul>";
                v = e(g), b = e(g), v.attr("id", "optgroup-selectable-" + m), b.attr("id", "optgroup-selection-" + m), v.append(e($)), b.append(e($)), l.options.selectableOptgroup && (v.find(".ms-optgroup-label").on("click", function () {
                    var t = f.children(":not(:selected)").map(function () {
                        return e(this).val()
                    }).get();
                    l.select(t)
                }), b.find(".ms-optgroup-label").on("click", function () {
                    var t = f.children(":selected").map(function () {
                        return e(this).val()
                    }).get();
                    l.deselect(t)
                })), l.$selectableUl.append(v), l.$selectionUl.append(b)
            }
            s = void 0 == s ? v.children().length : s + 1, c.insertAt(s, v.children()), d.insertAt(s, b.children())
        } else s = void 0 == s ? l.$selectableUl.children().length : s, c.insertAt(s, l.$selectableUl), d.insertAt(s, l.$selectionUl)
    }, addOption: function (t) {
        var s = this;
        t.value && (t = [t]), e.each(t, function (t, l) {
            if (l.value && 0 === s.$element.find("option[value='" + l.value + "']").length) {
                var i = e('<option value="' + l.value + '">' + l.text + "</option>"), t = parseInt("undefined" == typeof l.index ? s.$element.children().length : l.index), n = void 0 == l.nested ? s.$element : e("optgroup[label='" + l.nested + "']");
                i.insertAt(t, n), s.generateLisFromOption(i.get(0), t, l.nested)
            }
        })
    }, escapeHTML: function (t) {
        return e("<div>").text(t).html()
    }, activeKeyboard: function (t) {
        var s = this;
        t.on("focus",function () {
            e(this).addClass("ms-focus")
        }).on("blur",function () {
            e(this).removeClass("ms-focus")
        }).on("keydown", function (l) {
            switch (l.which) {
                case 40:
                case 38:
                    return l.preventDefault(), l.stopPropagation(), s.moveHighlight(e(this), 38 === l.which ? -1 : 1), void 0;
                case 37:
                case 39:
                    return l.preventDefault(), l.stopPropagation(), s.switchList(t), void 0;
                case 9:
                    if (s.$element.is("[tabindex]")) {
                        l.preventDefault();
                        var i = parseInt(s.$element.attr("tabindex"), 10);
                        return i = l.shiftKey ? i - 1 : i + 1, e('[tabindex="' + i + '"]').focus(), void 0
                    }
                    l.shiftKey && s.$element.trigger("focus")
            }
            return e.inArray(l.which, s.options.keySelect) > -1 ? (l.preventDefault(), l.stopPropagation(), s.selectHighlighted(t), void 0) : void 0
        })
    }, moveHighlight: function (e, t) {
        {
            var s = e.find(this.elemsSelector), l = s.filter(".ms-hover"), i = null, n = s.first().outerHeight(), o = e.height();
            "#" + this.$container.prop("id")
        }
        if (s.off("mouseenter"), s.removeClass("ms-hover"), 1 === t) {
            if (i = l.nextAll(this.elemsSelector).first(), 0 === i.length) {
                var a = l.parent();
                if (a.hasClass("ms-optgroup")) {
                    var r = a.parent(), c = r.next(":visible");
                    i = c.length > 0 ? c.find(this.elemsSelector).first() : s.first()
                } else i = s.first()
            }
        } else if (-1 === t && (i = l.prevAll(this.elemsSelector).first(), 0 === i.length)) {
            var a = l.parent();
            if (a.hasClass("ms-optgroup")) {
                var r = a.parent(), d = r.prev(":visible");
                i = d.length > 0 ? d.find(this.elemsSelector).last() : s.last()
            } else i = s.last()
        }
        if (i.length > 0) {
            i.addClass("ms-hover");
            var h = e.scrollTop() + i.position().top - o / 2 + n / 2;
            e.scrollTop(h)
        }
    }, selectHighlighted: function (e) {
        var t = e.find(this.elemsSelector), s = t.filter(".ms-hover").first();
        s.length > 0 && (e.parent().hasClass("ms-selectable") ? this.select(s.data("ms-value")) : this.deselect(s.data("ms-value")), t.removeClass("ms-hover"))
    }, switchList: function (e) {
        e.blur(), e.parent().hasClass("ms-selectable") ? this.$selectionUl.focus() : this.$selectableUl.focus()
    }, activeMouse: function (t) {
        var s = this;
        t.on("mousemove", function () {
            var l = t.find(s.elemsSelector);
            l.on("mouseenter", function () {
                l.removeClass("ms-hover"), e(this).addClass("ms-hover")
            })
        })
    }, refresh: function () {
        this.destroy(), this.$element.multiSelect(this.options)
    }, destroy: function () {
        e("#ms-" + this.$element.attr("id")).remove(), this.$element.removeData("multiselect")
    }, select: function (t, s) {
        "string" == typeof t && (t = [t]);
        var l = this, i = this.$element, n = e.map(t, function (e) {
            return l.sanitize(e)
        }), o = this.$selectableUl.find("#" + n.join("-selectable, #") + "-selectable").filter(":not(." + l.options.disabledClass + ")"), a = this.$selectionUl.find("#" + n.join("-selection, #") + "-selection").filter(":not(." + l.options.disabledClass + ")"), r = i.find("option:not(:disabled)").filter(function () {
            return e.inArray(this.value, t) > -1
        });
        if ("init" === s && (o = this.$selectableUl.find("#" + n.join("-selectable, #") + "-selectable"), a = this.$selectionUl.find("#" + n.join("-selection, #") + "-selection")), o.length > 0) {
            o.addClass("ms-selected").hide(), a.addClass("ms-selected").show(), r.prop("selected", !0);
            var c = l.$selectableUl.children(".ms-optgroup-container");
            if (c.length > 0) {
                c.each(function () {
                    var t = e(this).find(".ms-elem-selectable");
                    t.length === t.filter(".ms-selected").length && e(this).find(".ms-optgroup-label").hide()
                });
                var d = l.$selectionUl.children(".ms-optgroup-container");
                d.each(function () {
                    var t = e(this).find(".ms-elem-selection");
                    t.filter(".ms-selected").length > 0 && e(this).find(".ms-optgroup-label").show()
                })
            } else if (l.options.keepOrder) {
                var h = l.$selectionUl.find(".ms-selected");
                h.length > 1 && h.last().get(0) != a.get(0) && a.insertAfter(h.last())
            }
            "init" !== s && (i.trigger("change"), "function" == typeof l.options.afterSelect && l.options.afterSelect.call(this, t))
        }
    }, deselect: function (t) {
        "string" == typeof t && (t = [t]);
        var s = this, l = this.$element, i = e.map(t, function (e) {
            return s.sanitize(e)
        }), n = this.$selectableUl.find("#" + i.join("-selectable, #") + "-selectable"), o = this.$selectionUl.find("#" + i.join("-selection, #") + "-selection").filter(".ms-selected").filter(":not(." + s.options.disabledClass + ")"), a = l.find("option").filter(function () {
            return e.inArray(this.value, t) > -1
        });
        if (o.length > 0) {
            n.removeClass("ms-selected").show(), o.removeClass("ms-selected").hide(), a.prop("selected", !1);
            var r = s.$selectableUl.children(".ms-optgroup-container");
            if (r.length > 0) {
                r.each(function () {
                    var t = e(this).find(".ms-elem-selectable");
                    t.filter(":not(.ms-selected)").length > 0 && e(this).find(".ms-optgroup-label").show()
                });
                var c = s.$selectionUl.children(".ms-optgroup-container");
                c.each(function () {
                    var t = e(this).find(".ms-elem-selection");
                    0 === t.filter(".ms-selected").length && e(this).find(".ms-optgroup-label").hide()
                })
            }
            l.trigger("change"), "function" == typeof s.options.afterDeselect && s.options.afterDeselect.call(this, t)
        }
    }, select_all: function () {
        var t = this.$element, s = t.val();
        if (t.find('option:not(":disabled")').prop("selected", !0), this.$selectableUl.find(".ms-elem-selectable").filter(":not(." + this.options.disabledClass + ")").addClass("ms-selected").hide(), this.$selectionUl.find(".ms-optgroup-label").show(), this.$selectableUl.find(".ms-optgroup-label").hide(), this.$selectionUl.find(".ms-elem-selection").filter(":not(." + this.options.disabledClass + ")").addClass("ms-selected").show(), this.$selectionUl.focus(), t.trigger("change"), "function" == typeof this.options.afterSelect) {
            var l = e.grep(t.val(), function (t) {
                return e.inArray(t, s) < 0
            });
            this.options.afterSelect.call(this, l)
        }
    }, deselect_all: function () {
        var e = this.$element, t = e.val();
        e.find("option").prop("selected", !1), this.$selectableUl.find(".ms-elem-selectable").removeClass("ms-selected").show(), this.$selectionUl.find(".ms-optgroup-label").hide(), this.$selectableUl.find(".ms-optgroup-label").show(), this.$selectionUl.find(".ms-elem-selection").removeClass("ms-selected").hide(), this.$selectableUl.focus(), e.trigger("change"), "function" == typeof this.options.afterDeselect && this.options.afterDeselect.call(this, t)
    }, sanitize: function (e) {
        var t, s, l = 0;
        if (0 == e.length)return l;
        var i = 0;
        for (t = 0, i = e.length; i > t; t++)s = e.charCodeAt(t), l = (l << 5) - l + s, l |= 0;
        return l
    }}, e.fn.multiSelect = function () {
        var s = arguments[0], l = arguments;
        return this.each(function () {
            var i = e(this), n = i.data("multiselect"), o = e.extend({}, e.fn.multiSelect.defaults, i.data(), "object" == typeof s && s);
            n || i.data("multiselect", n = new t(this, o)), "string" == typeof s ? n[s](l[1]) : n.init()
        })
    }, e.fn.multiSelect.defaults = {keySelect: [32], selectableOptgroup: !1, disabledClass: "disabled", dblClick: !1, keepOrder: !1, cssClass: ""}, e.fn.multiSelect.Constructor = t, e.fn.insertAt = function (e, t) {
        return this.each(function () {
            0 === e ? t.prepend(this) : t.children().eq(e - 1).after(this)
        })
    }
}(window.jQuery);