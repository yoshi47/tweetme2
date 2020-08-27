(this["webpackJsonptweetme2-web"] = this["webpackJsonptweetme2-web"] || []).push([[0], [, , , , , , , function (e, t, a) {
    e.exports = a.p + "static/media/logo.5d5d9eef.svg"
}, , function (e, t, a) {
    e.exports = a(16)
}, , , , , function (e, t, a) {
}, function (e, t, a) {
}, function (e, t, a) {
    "use strict";
    a.r(t);
    var n = a(0), r = a.n(n), c = a(5), o = a.n(c), s = (a(14), a(7)), l = a.n(s);
    a(15);

    function i(e, t, a, n) {
        var r;
        n && (r = JSON.stringify(n));
        var c = new XMLHttpRequest, o = "http://localhost:8000/api".concat(t);
        c.responseType = "json";
        var s = function (e) {
            var t = null;
            if (document.cookie && "" !== document.cookie) for (var a = document.cookie.split(";"), n = 0; n < a.length; n++) {
                var r = a[n].trim();
                if (r.substring(0, e.length + 1) === e + "=") {
                    t = decodeURIComponent(r.substring(e.length + 1));
                    break
                }
            }
            return t
        }("csrftoken");
        c.open(e, o), c.setRequestHeader("Content-Type", "application/json"), s && (c.setRequestHeader("X-Requested-With", "XMLHttpRequest"), c.setRequestHeader("X-CSRFToken", s)), c.onload = function () {
            403 === c.status && ("Authentication credentials were not provided." === c.response.detail && (window.location.href = "/login?showLoginRequired=true"));
            a(c.response, c.status)
        }, c.onerror = function (e) {
            a({massage: "The request was an error"}, 400)
        }, c.send(r)
    }

    function u(e) {
        var t = e.tweet, a = e.action, n = e.didPerformAction, c = t.likes ? t.likes : 0,
            o = e.className ? e.className : "btn btn-primary btn-sm", s = a.display ? a.display : "Action",
            l = function (e, t) {
                200 !== t && 201 !== t || !n || n(e, t)
            }, u = "like" === a.type ? "".concat(c, " ").concat(s) : s;
        return r.a.createElement("button", {
            className: o, onClick: function (e) {
                e.preventDefault(), function (e, t, a) {
                    i("POST", "/tweets/action/", a, {id: e, action: t})
                }(t.id, a.type, l)
            }
        }, u)
    }

    var m = a(2), d = a(1);

    function f(e) {
        var t = r.a.createRef(), a = e.didTweet, n = function (e, t) {
            201 === t ? a(e) : (console.log(e), alert("An error occurred please try again"))
        };
        return r.a.createElement("div", {className: e.className}, r.a.createElement("form", {
            onSubmit: function (e) {
                e.preventDefault();
                var a = t.current.value;
                i("POST", "/tweets/create/", n, {content: a}), t.current.value = ""
            }
        }, r.a.createElement("textarea", {
            ref: t,
            required: !0,
            className: "form-control",
            name: "tweet"
        }), r.a.createElement("button", {type: "submit", className: "btn btn-primary my-3"}, "Tweet")))
    }

    var w = a(8);

    function p(e) {
        var t = e.tweet;
        return t.parent ? r.a.createElement("div", {className: "row"}, r.a.createElement("div", {className: "col-11 mx-auto p-3 border rounded"}, r.a.createElement("p", {className: "mb-0 text-muted small"}, "Retweet"), r.a.createElement(b, {
            hideActions: !0,
            className: " ",
            tweet: t.parent
        }))) : null
    }

    function b(e) {
        var t = e.tweet, a = e.didRetweet, c = e.hideActions, o = Object(n.useState)(e.tweet ? e.tweet : null),
            s = Object(d.a)(o, 2), l = s[0], i = s[1], m = e.className ? e.className : "col-10 mx-auto col-md-6",
            f = window.location.pathname.match(Object(w.a)(/([0-9]+)/, {tweetid: 1})), b = f ? f.groups.tweetid : -1,
            v = "".concat(t.id) === "".concat(b), E = function (e, t) {
                200 === t ? i(e) : 201 === t && a && a(e)
            };
        return r.a.createElement("div", {className: m}, r.a.createElement("div", null, r.a.createElement("p", null, t.id, " - ", t.content), r.a.createElement(p, {tweet: t})), r.a.createElement("div", {className: "btn btn-group"}, l && !0 !== c && r.a.createElement(r.a.Fragment, null, r.a.createElement(u, {
            tweet: l,
            didPerformAction: E,
            action: {type: "like", display: "Likes"}
        }), r.a.createElement(u, {
            tweet: l,
            didPerformAction: E,
            action: {type: "unlike", display: "Unlike"}
        }), r.a.createElement(u, {
            tweet: l,
            didPerformAction: E,
            action: {type: "retweet", display: "Retweet"}
        })), !0 === v ? null : r.a.createElement("button", {
            className: "btn btn-outline-primary btn-sm",
            onClick: function (e) {
                e.preventDefault(), window.location.href = "/".concat(t.id)
            }
        }, "View")))
    }

    function v(e) {
        var t = Object(n.useState)([]), a = Object(d.a)(t, 2), c = a[0], o = a[1], s = Object(n.useState)([]),
            l = Object(d.a)(s, 2), u = l[0], f = l[1], w = Object(n.useState)(!1), p = Object(d.a)(w, 2), v = p[0],
            E = p[1];
        Object(n.useEffect)((function () {
            var t = Object(m.a)(e.newTweets).concat(c);
            t.length !== u.length && f(t)
        }), [e.newTweets, u, c]), Object(n.useEffect)((function () {
            if (!1 === v) {
                !function (e, t) {
                    var a = "/tweets/";
                    e && (a = "/tweets/?username=".concat(e)), i("GET", a, t)
                }(e.username, (function (e, t) {
                    200 === t ? (o(e), E(!0)) : alert("There was an error")
                }))
            }
        }), [c, v, E, e.username]);
        var h = function (e) {
            var t = Object(m.a)(c);
            t.unshift(e), o(t);
            var a = Object(m.a)(u);
            a.unshift(u), f(a)
        };
        return u.map((function (e, t) {
            return r.a.createElement(b, {
                tweet: e,
                didRetweet: h,
                className: "my-5 py-5 border bg-white text-dark",
                key: "".concat(t, "-{item.id}")
            })
        }))
    }

    function E(e) {
        var t = Object(n.useState)([]), a = Object(d.a)(t, 2), c = a[0], o = a[1], s = "false" !== e.canTweet;
        return r.a.createElement("div", {className: e.className}, !0 === s && r.a.createElement(f, {
            didTweet: function (e) {
                var t = Object(m.a)(c);
                t.unshift(e), o(t)
            }, className: "col-12 mb-3"
        }), r.a.createElement(v, Object.assign({newTweets: c}, e)))
    }

    function h(e) {
        var t = e.tweetId, a = Object(n.useState)(!1), c = Object(d.a)(a, 2), o = c[0], s = c[1],
            l = Object(n.useState)(null), u = Object(d.a)(l, 2), m = u[0], f = u[1], w = function (e, t) {
                200 === t ? f(e) : alert("There was an error finding your tweet.")
            };
        return Object(n.useEffect)((function () {
            !1 === o && (!function (e, t) {
                i("GET", "/tweets/".concat(e, "/"), t)
            }(t, w), s(!0))
        }), [t, o, s]), null === m ? null : r.a.createElement(b, {tweet: m, className: e.className})
    }

    var g = function () {
        return r.a.createElement("div", {className: "App"}, r.a.createElement("header", {className: "App-header"}, r.a.createElement("img", {
            src: l.a,
            className: "App-logo",
            alt: "logo"
        }), r.a.createElement("p", null, "Edit ", r.a.createElement("code", null, "src/App.js"), " and save to reload."), r.a.createElement("div", null, r.a.createElement(E, null)), r.a.createElement("a", {
            className: "App-link",
            href: "https://reactjs.org",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "Learn React")))
    };
    Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
    var j = document.getElementById("root");
    j && o.a.render(r.a.createElement(g, null), j);
    var y = r.a.createElement, N = document.getElementById("tweetme-2");
    N && o.a.render(y(E, N.dataset), N), document.querySelectorAll(".tweetme-2-detail").forEach((function (e) {
        o.a.render(y(h, e.dataset), e)
    })), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) {
        e.unregister()
    })).catch((function (e) {
        console.error(e.message)
    }))
}], [[9, 1, 2]]]);
//# sourceMappingURL=main.3e381805.chunk.js.map
