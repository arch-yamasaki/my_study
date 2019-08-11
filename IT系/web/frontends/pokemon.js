! function s(a, o, l) {
  function u(t, e) {
    if (!o[t]) {
      if (!a[t]) {
        var n = "function" == typeof require && require;
        if (!e && n) return n(t, !0);
        if (c) return c(t, !0);
        var i = new Error("Cannot find module '" + t + "'");
        throw i.code = "MODULE_NOT_FOUND", i
      }
      var r = o[t] = {
        exports: {}
      };
      a[t][0].call(r.exports, function (e) {
        return u(a[t][1][e] || e)
      }, r, r.exports, s, a, o, l)
    }
    return o[t].exports
  }
  for (var c = "function" == typeof require && require, e = 0; e < l.length; e++) u(l[e]);
  return u
}({
  1: [function (e, t, n) {
    t.exports = {
      A: {
        quest: ["データや　すうじを　みることが　すき。", "じぜんの　じゅんびは　しっかりする。", "おおざっぱな　ひとを　みると　イライラする。", "ふかく　かんがえることが　すきだと　おもう。"]
      },
      B: {
        quest: ["かんがえる　より　さきに　こうどう　する。", "けつろん　から　はなす　ほうが　すき。", "つめたいと　いわれることが　よくある。", "ムダな　ことが　きらい。"]
      },
      C: {
        quest: ["じぶんは　うけみ　スタンスだ。", "ひとの　ためになる　ことであれば　なんでもできる。", "ひとから　やさしいと　いわれる　ことが　よくある。", "いつも　そのばの　くうきを　よんで　こうどうする。"]
      },
      D: {
        quest: ["しょたいめんでも　せっきょくてきに　はなしかける。", "いつのまにか　はなしの　ちゅうしんに　なっている。", "ひとから　あかるいね　と　いわれる。", "おもった　ことが　かおに　よくでる。"]
      }
    }
  }, {}],
  2: [function (e, t, n) {
    t.exports = {
      A1B1C1D1: {
        name: "コイキング"
      },
      A1B1C1D2: {
        name: "コイキング"
      },
      A1B1C1D3: {
        name: "カビゴン"
      },
      A1B1C1D4: {
        name: "ラッキー"
      },
      A1B1C2D1: {
        name: "コイキング"
      },
      A1B1C2D2: {
        name: "コダック"
      },
      A1B1C2D3: {
        name: "カイリュー"
      },
      A1B1C2D4: {
        name: "ラッキー"
      },
      A1B1C3D1: {
        name: "コダック"
      },
      A1B1C3D2: {
        name: "コダック"
      },
      A1B1C3D3: {
        name: "カイリュー"
      },
      A1B1C3D4: {
        name: "ラッキー"
      },
      A1B1C4D1: {
        name: "ラッキー"
      },
      A1B1C4D2: {
        name: "ラプラス"
      },
      A1B1C4D3: {
        name: "ラプラス"
      },
      A1B1C4D4: {
        name: "ラッキー"
      },
      A1B2C1D1: {
        name: "コイキング"
      },
      A1B2C1D2: {
        name: "コイキング"
      },
      A1B2C1D3: {
        name: "カイリュー"
      },
      A1B2C1D4: {
        name: "カイリュー"
      },
      A1B2C2D1: {
        name: "フーディン"
      },
      A1B2C2D2: {
        name: "コイキング"
      },
      A1B2C2D3: {
        name: "カイリュー"
      },
      A1B2C2D4: {
        name: "ラッキー"
      },
      A1B2C3D1: {
        name: "ディグダ"
      },
      A1B2C3D2: {
        name: "コダック"
      },
      A1B2C3D3: {
        name: "ディグダ"
      },
      A1B2C3D4: {
        name: "ラッキー"
      },
      A1B2C4D1: {
        name: "ポリゴン"
      },
      A1B2C4D2: {
        name: "ディグダ"
      },
      A1B2C4D3: {
        name: "ラプラス"
      },
      A1B2C4D4: {
        name: "ポリゴン"
      },
      A1B3C1D1: {
        name: "カイリキー"
      },
      A1B3C1D2: {
        name: "カイリキー"
      },
      A1B3C1D3: {
        name: "メタモン"
      },
      A1B3C1D4: {
        name: "カビゴン"
      },
      A1B3C2D1: {
        name: "カイリキー"
      },
      A1B3C2D2: {
        name: "カイリキー"
      },
      A1B3C2D3: {
        name: "コダック"
      },
      A1B3C2D4: {
        name: "ラッキー"
      },
      A1B3C3D1: {
        name: "ディグダ"
      },
      A1B3C3D2: {
        name: "ディグダ"
      },
      A1B3C3D3: {
        name: "ディグダ"
      },
      A1B3C3D4: {
        name: "ラッキー"
      },
      A1B3C4D1: {
        name: "ポリゴン"
      },
      A1B3C4D2: {
        name: "ポリゴン"
      },
      A1B3C4D3: {
        name: "ポリゴン"
      },
      A1B3C4D4: {
        name: "ラプラス"
      },
      A1B4C1D1: {
        name: "スピアー"
      },
      A1B4C1D2: {
        name: "カイリキー"
      },
      A1B4C1D3: {
        name: "カイリキー"
      },
      A1B4C1D4: {
        name: "イーブイ"
      },
      A1B4C2D1: {
        name: "スピアー"
      },
      A1B4C2D2: {
        name: "スピアー"
      },
      A1B4C2D3: {
        name: "スピアー"
      },
      A1B4C2D4: {
        name: "コダック"
      },
      A1B4C3D1: {
        name: "スピアー"
      },
      A1B4C3D2: {
        name: "スピアー"
      },
      A1B4C3D3: {
        name: "スピアー"
      },
      A1B4C3D4: {
        name: "ディグダ"
      },
      A1B4C4D1: {
        name: "スピアー"
      },
      A1B4C4D2: {
        name: "ポリゴン"
      },
      A1B4C4D3: {
        name: "ラプラス"
      },
      A1B4C4D4: {
        name: "ラプラス"
      },
      A2B1C1D1: {
        name: "コイキング"
      },
      A2B1C1D2: {
        name: "ニャース"
      },
      A2B1C1D3: {
        name: "カビゴン"
      },
      A2B1C1D4: {
        name: "ピッピ"
      },
      A2B1C2D1: {
        name: "コイキング"
      },
      A2B1C2D2: {
        name: "コイキング"
      },
      A2B1C2D3: {
        name: "カイリュー"
      },
      A2B1C2D4: {
        name: "カビゴン"
      },
      A2B1C3D1: {
        name: "ディグダ"
      },
      A2B1C3D2: {
        name: "コダック"
      },
      A2B1C3D3: {
        name: "カイリュー"
      },
      A2B1C3D4: {
        name: "ラッキー"
      },
      A2B1C4D1: {
        name: "ポリゴン"
      },
      A2B1C4D2: {
        name: "ラプラス"
      },
      A2B1C4D3: {
        name: "ラプラス"
      },
      A2B1C4D4: {
        name: "ラッキー"
      },
      A2B2C1D1: {
        name: "マルマイン"
      },
      A2B2C1D2: {
        name: "コイキング"
      },
      A2B2C1D3: {
        name: "カビゴン"
      },
      A2B2C1D4: {
        name: "ピッピ"
      },
      A2B2C2D1: {
        name: "コイキング"
      },
      A2B2C2D2: {
        name: "メタモン"
      },
      A2B2C2D3: {
        name: "カイリュー"
      },
      A2B2C2D4: {
        name: "ピッピ"
      },
      A2B2C3D1: {
        name: "ディグダ"
      },
      A2B2C3D2: {
        name: "ディグダ"
      },
      A2B2C3D3: {
        name: "コダック"
      },
      A2B2C3D4: {
        name: "ラッキー"
      },
      A2B2C4D1: {
        name: "ポリゴン"
      },
      A2B2C4D2: {
        name: "ラプラス"
      },
      A2B2C4D3: {
        name: "ラプラス"
      },
      A2B2C4D4: {
        name: "カビゴン"
      },
      A2B3C1D1: {
        name: "フーディン"
      },
      A2B3C1D2: {
        name: "カイリキー"
      },
      A2B3C1D3: {
        name: "マルマイン"
      },
      A2B3C1D4: {
        name: "ピッピ"
      },
      A2B3C2D1: {
        name: "フーディン"
      },
      A2B3C2D2: {
        name: "カイリキー"
      },
      A2B3C2D3: {
        name: "メタモン"
      },
      A2B3C2D4: {
        name: "カビゴン"
      },
      A2B3C3D1: {
        name: "カイリキー"
      },
      A2B3C3D2: {
        name: "フーディン"
      },
      A2B3C3D3: {
        name: "ディグダ"
      },
      A2B3C3D4: {
        name: "ラッキー"
      },
      A2B3C4D1: {
        name: "ポリゴン"
      },
      A2B3C4D2: {
        name: "ポリゴン"
      },
      A2B3C4D3: {
        name: "コダック"
      },
      A2B3C4D4: {
        name: "ラプラス"
      },
      A2B4C1D1: {
        name: "リザードン"
      },
      A2B4C1D2: {
        name: "リザードン"
      },
      A2B4C1D3: {
        name: "リザードン"
      },
      A2B4C1D4: {
        name: "マルマイン"
      },
      A2B4C2D1: {
        name: "フーディン"
      },
      A2B4C2D2: {
        name: "リザードン"
      },
      A2B4C2D3: {
        name: "フーディン"
      },
      A2B4C2D4: {
        name: "イーブイ"
      },
      A2B4C3D1: {
        name: "スピアー"
      },
      A2B4C3D2: {
        name: "スピアー"
      },
      A2B4C3D3: {
        name: "スピアー"
      },
      A2B4C3D4: {
        name: "コダック"
      },
      A2B4C4D1: {
        name: "スピアー"
      },
      A2B4C4D2: {
        name: "ポリゴン"
      },
      A2B4C4D3: {
        name: "ポリゴン"
      },
      A2B4C4D4: {
        name: "ポリゴン"
      },
      A3B1C1D1: {
        name: "マルマイン"
      },
      A3B1C1D2: {
        name: "ニャース"
      },
      A3B1C1D3: {
        name: "ニャース"
      },
      A3B1C1D4: {
        name: "ピッピ"
      },
      A3B1C2D1: {
        name: "ニャース"
      },
      A3B1C2D2: {
        name: "ニャース"
      },
      A3B1C2D3: {
        name: "カイリュー"
      },
      A3B1C2D4: {
        name: "ピッピ"
      },
      A3B1C3D1: {
        name: "メタモン"
      },
      A3B1C3D2: {
        name: "カイリュー"
      },
      A3B1C3D3: {
        name: "カビゴン"
      },
      A3B1C3D4: {
        name: "カイリュー"
      },
      A3B1C4D1: {
        name: "ディグダ"
      },
      A3B1C4D2: {
        name: "ラプラス"
      },
      A3B1C4D3: {
        name: "ラプラス"
      },
      A3B1C4D4: {
        name: "ラッキー"
      },
      A3B2C1D1: {
        name: "マルマイン"
      },
      A3B2C1D2: {
        name: "ニャース"
      },
      A3B2C1D3: {
        name: "ニャース"
      },
      A3B2C1D4: {
        name: "ピッピ"
      },
      A3B2C2D1: {
        name: "ニャース"
      },
      A3B2C2D2: {
        name: "マルマイン"
      },
      A3B2C2D3: {
        name: "ニャース"
      },
      A3B2C2D4: {
        name: "ピッピ"
      },
      A3B2C3D1: {
        name: "カイリキー"
      },
      A3B2C3D2: {
        name: "メタモン"
      },
      A3B2C3D3: {
        name: "カイリュー"
      },
      A3B2C3D4: {
        name: "カイリュー"
      },
      A3B2C4D1: {
        name: "ディグダ"
      },
      A3B2C4D2: {
        name: "コダック"
      },
      A3B2C4D3: {
        name: "ラプラス"
      },
      A3B2C4D4: {
        name: "カビゴン"
      },
      A3B3C1D1: {
        name: "マルマイン"
      },
      A3B3C1D2: {
        name: "ニャース"
      },
      A3B3C1D3: {
        name: "フーディン"
      },
      A3B3C1D4: {
        name: "ピッピ"
      },
      A3B3C2D1: {
        name: "フーディン"
      },
      A3B3C2D2: {
        name: "マルマイン"
      },
      A3B3C2D3: {
        name: "マルマイン"
      },
      A3B3C2D4: {
        name: "ピッピ"
      },
      A3B3C3D1: {
        name: "カイリキー"
      },
      A3B3C3D2: {
        name: "フーディン"
      },
      A3B3C3D3: {
        name: "イーブイ"
      },
      A3B3C3D4: {
        name: "カビゴン"
      },
      A3B3C4D1: {
        name: "ポリゴン"
      },
      A3B3C4D2: {
        name: "ポリゴン"
      },
      A3B3C4D3: {
        name: "コダック"
      },
      A3B3C4D4: {
        name: "コダック"
      },
      A3B4C1D1: {
        name: "リザードン"
      },
      A3B4C1D2: {
        name: "リザードン"
      },
      A3B4C1D3: {
        name: "リザードン"
      },
      A3B4C1D4: {
        name: "ニャース"
      },
      A3B4C2D1: {
        name: "リザードン"
      },
      A3B4C2D2: {
        name: "リザードン"
      },
      A3B4C2D3: {
        name: "リザードン"
      },
      A3B4C2D4: {
        name: "ニャース"
      },
      A3B4C3D1: {
        name: "スピアー"
      },
      A3B4C3D2: {
        name: "フーディン"
      },
      A3B4C3D3: {
        name: "カイリキー"
      },
      A3B4C3D4: {
        name: "イーブイ"
      },
      A3B4C4D1: {
        name: "スピアー"
      },
      A3B4C4D2: {
        name: "スピアー"
      },
      A3B4C4D3: {
        name: "フーディン"
      },
      A3B4C4D4: {
        name: "ミュウ"
      },
      A4B1C1D1: {
        name: "ナッシー（アローラのすがた）"
      },
      A4B1C1D2: {
        name: "ピカチュウ"
      },
      A4B1C1D3: {
        name: "ピカチュウ"
      },
      A4B1C1D4: {
        name: "ピッピ"
      },
      A4B1C2D1: {
        name: "マルマイン"
      },
      A4B1C2D2: {
        name: "ピカチュウ"
      },
      A4B1C2D3: {
        name: "ピカチュウ"
      },
      A4B1C2D4: {
        name: "コダック"
      },
      A4B1C3D1: {
        name: "マルマイン"
      },
      A4B1C3D2: {
        name: "ピカチュウ"
      },
      A4B1C3D3: {
        name: "ピカチュウ"
      },
      A4B1C3D4: {
        name: "ピッピ"
      },
      A4B1C4D1: {
        name: "マルマイン"
      },
      A4B1C4D2: {
        name: "カイリュー"
      },
      A4B1C4D3: {
        name: "カビゴン"
      },
      A4B1C4D4: {
        name: "ラッキー"
      },
      A4B2C1D1: {
        name: "ナッシー（アローラのすがた）"
      },
      A4B2C1D2: {
        name: "ニャース"
      },
      A4B2C1D3: {
        name: "ピカチュウ"
      },
      A4B2C1D4: {
        name: "ナッシー（アローラのすがた）"
      },
      A4B2C2D1: {
        name: "ナッシー（アローラのすがた）"
      },
      A4B2C2D2: {
        name: "ピカチュウ"
      },
      A4B2C2D3: {
        name: "ピカチュウ"
      },
      A4B2C2D4: {
        name: "カビゴン"
      },
      A4B2C3D1: {
        name: "ナッシー（アローラのすがた）"
      },
      A4B2C3D2: {
        name: "マルマイン"
      },
      A4B2C3D3: {
        name: "ピカチュウ"
      },
      A4B2C3D4: {
        name: "ピッピ"
      },
      A4B2C4D1: {
        name: "カイリキー"
      },
      A4B2C4D2: {
        name: "メタモン"
      },
      A4B2C4D3: {
        name: "カビゴン"
      },
      A4B2C4D4: {
        name: "カイリュー"
      },
      A4B3C1D1: {
        name: "ナッシー（アローラのすがた）"
      },
      A4B3C1D2: {
        name: "ナッシー（アローラのすがた）"
      },
      A4B3C1D3: {
        name: "ナッシー（アローラのすがた）"
      },
      A4B3C1D4: {
        name: "ピカチュウ"
      },
      A4B3C2D1: {
        name: "ナッシー（アローラのすがた）"
      },
      A4B3C2D2: {
        name: "ナッシー（アローラのすがた）"
      },
      A4B3C2D3: {
        name: "ナッシー（アローラのすがた）"
      },
      A4B3C2D4: {
        name: "カイリキー"
      },
      A4B3C3D1: {
        name: "ナッシー（アローラのすがた）"
      },
      A4B3C3D2: {
        name: "ナッシー（アローラのすがた）"
      },
      A4B3C3D3: {
        name: "ピカチュウ"
      },
      A4B3C3D4: {
        name: "ニャース"
      },
      A4B3C4D1: {
        name: "フーディン"
      },
      A4B3C4D2: {
        name: "カイリキー"
      },
      A4B3C4D3: {
        name: "マルマイン"
      },
      A4B3C4D4: {
        name: "ミュウ"
      },
      A4B4C1D1: {
        name: "ラッキー"
      },
      A4B4C1D2: {
        name: "ピカチュウ"
      },
      A4B4C1D3: {
        name: "ピカチュウ"
      },
      A4B4C1D4: {
        name: "ナッシー（アローラのすがた）"
      },
      A4B4C2D1: {
        name: "リザードン"
      },
      A4B4C2D2: {
        name: "コダック"
      },
      A4B4C2D3: {
        name: "リザードン"
      },
      A4B4C2D4: {
        name: "ナッシー（アローラのすがた）"
      },
      A4B4C3D1: {
        name: "リザードン"
      },
      A4B4C3D2: {
        name: "リザードン"
      },
      A4B4C3D3: {
        name: "マルマイン"
      },
      A4B4C3D4: {
        name: "ミュウ"
      },
      A4B4C4D1: {
        name: "リザードン"
      },
      A4B4C4D2: {
        name: "フーディン"
      },
      A4B4C4D3: {
        name: "ミュウ"
      },
      A4B4C4D4: {
        name: "ミュウ"
      }
    }
  }, {}],
  3: [function (e, t, n) {
    t.exports = {
      "ピカチュウ": "pikachu",
      "ニャース": "meowth",
      "イーブイ": "eevee",
      "ナッシー（アローラのすがた）": "exeggutor",
      "リザードン": "charizard",
      "カイリキー": "machamp",
      "フーディン": "alakazam",
      "スピアー": "beedrill",
      "ポリゴン": "porygon",
      "ディグダ": "diglett",
      "コダック": "psyduck",
      "ラプラス": "lapras",
      "カイリュー": "dragonite",
      "ラッキー": "chansey",
      "カビゴン": "snorlax",
      "ピッピ": "clefairy",
      "マルマイン": "electrode",
      "ミュウ": "mew",
      "メタモン": "ditto",
      "コイキング": "magikarp"
    }
  }, {}],
  4: [function (e, t, n) {
    "use strict";
    e("./polyfills.js");
    var i = f(e("svg4everybody")),
      r = f(e("object-fit-images")),
      s = f(e("jquery")),
      a = f(e("./page/top.js")),
      o = f(e("./page/result.js")),
      l = f(e("./page/globalnav.js")),
      u = f(e("./page/quest.js")),
      c = f(e("./page/scrollevents.js"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    window.jQuery = window.$ = e("jquery"), e("imagesloaded").makeJQueryPlugin(s.default), (0, s.default)(function () {
      (0, r.default)(), (0, i.default)(), (0, l.default)();
      (function () {
        for (var e = "clipPath", t = ["webkit", "moz", "ms", "o"], n = [e], i = document.createElement("testelement"), r = 0, s = t.length; r < s; r++) {
          var a = t[r] + e.charAt(0).toUpperCase() + e.slice(1);
          n.push(a)
        }
        for (r = 0, s = n.length; r < s; r++) {
          var o = n[r];
          if ("" === i.style[o] && (i.style[o] = "polygon(50% 0%, 0% 100%, 100% 100%)", "" !== i.style[o])) return !0
        }
        return !1
      })() || (0, s.default)("html").addClass("clip-path"), (0, s.default)("body").imagesLoaded({
        background: !0
      }, function () {
        setTimeout(function () {
          (0, s.default)("body").addClass("is-loaded"), (0, a.default)(), (0, u.default)(), (0, o.default)(), (0, c.default)()
        }, 1e3)
      })
    })
  }, {
    "./page/globalnav.js": 5,
    "./page/quest.js": 6,
    "./page/result.js": 7,
    "./page/scrollevents.js": 8,
    "./page/top.js": 9,
    "./polyfills.js": 10,
    imagesloaded: 18,
    jquery: 19,
    "object-fit-images": 20,
    svg4everybody: 21
  }],
  5: [function (e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i = s(e("jquery")),
      r = s(e("../utils/getScrollbarWidth"));

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    e("../utils/transitionEnd");
    var a = function () {
      (0, i.default)(".globalnav-btn").on("click", function (e) {
        if (e.preventDefault(), (0, i.default)(".globalnav-btn").toggleClass("is-open"), (0, i.default)(".header-logo").toggleClass("is-open"), (0, i.default)(".globalnav").toggleClass("is-open"), (0, i.default)("body").toggleClass("is-open"), (0, i.default)("body").hasClass("is-open")) {
          var t = (0, r.default)();
          (0, i.default)("body").css({
            "padding-right": "".concat(t, "px"),
            overflow: "hidden"
          }), (0, i.default)(".header").css("margin-right", "".concat(t, "px"))
        }
      }), (0, i.default)(".globalnav").on(transitionEnd, function () {
        (0, i.default)("body").hasClass("is-open") || ((0, i.default)("body").css("overflow", "auto"), (0, i.default)("body").css("padding-right", "0"), (0, i.default)(".header").css("margin-right", "0"))
      }), (0, i.default)(".is-sublist").on("mouseleave mouseenter", function (e) {
        e.preventDefault(), (0, i.default)(e.currentTarget).find(".globalnav-sublist").toggleClass("is-open")
      }), (0, i.default)(window).on("resize", function () {
        "100%" === (0, i.default)("body").css("max-width") && (0, i.default)("body").hasClass("is-open") && ((0, i.default)(".globalnav-btn").removeClass("is-open"), (0, i.default)(".header-logo").removeClass("is-open"), (0, i.default)(".globalnav").removeClass("is-open"), (0, i.default)("body").removeClass("is-open"), (0, i.default)("body").css("overflow", "auto"), (0, i.default)("body").css("padding-right", "0"), (0, i.default)(".header").css("margin-right", "0"))
      })
    };
    n.default = a
  }, {
    "../utils/getScrollbarWidth": 14,
    "../utils/transitionEnd": 15,
    jquery: 19
  }],
  6: [function (e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var c = i(e("jquery")),
      f = i(e("../../data/result.json")),
      h = i(e("../../data/quest.json")),
      p = i(e("../../data/url.json"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var r = function () {
      if ((0, c.default)("body").hasClass("question")) {
        var i, t, n = ["A", "B", "C", "D"],
          r = 0,
          s = {
            A: 0,
            B: 0,
            C: 0,
            D: 0
          },
          a = 0,
          o = !1,
          e = 0;
        (0, c.default)(".special-question-box").on("webkitTransitionEnd transitionend", function () {
          (0, c.default)(this).hasClass("is-hide") && (o = !1, clearInterval(i), (0, c.default)(".answers button").removeClass("is-select").blur(), (0, c.default)(this).removeClass("is-hide"), (0, c.default)("#question").text(""), setTimeout(l, 500))
        }), (0, c.default)(".answers button").on("click", function (e) {
          e.preventDefault(), o || ((0, c.default)(e.currentTarget).hasClass("answer-yes") ? s[n[r]] += 3 : (0, c.default)(e.currentTarget).hasClass("answer-neither-yes") ? s[n[r]] += 2 : (0, c.default)(e.currentTarget).hasClass("answer-neither-no") ? s[n[r]] += 1 : (0, c.default)(e.currentTarget).hasClass("answer-no") && (s[n[r]] += 0), o = !0, (a += 1) >= h.default[n[r]].quest.length && (a = 0, r += 1), (0, c.default)(e.currentTarget).addClass("is-select"), n.length <= r ? function () {
            var e = f.default["A".concat(u(s.A), "B").concat(u(s.B), "C").concat(u(s.C), "D").concat(u(s.D))].name;
            location.href = "../result/".concat(p.default[e], ".html")
          }() : (clearTimeout(t), (0, c.default)(".special-question-box").removeClass("is-show").addClass("is-hide")))
        }), (0, c.default)(".answers button").on("mouseenter touchstart", function () {
          (0, c.default)(this).addClass("hover")
        }).on("mouseleave touchend", function () {
          (0, c.default)(this).removeClass("hover")
        }), setTimeout(l, 1e3)
      }

      function l() {
        e += 1, (0, c.default)(".special-question-num span").text("QUESTION ".concat(("0" + e).slice(-2))), (0, c.default)(".special-question-box").addClass("is-show"), t = setTimeout(function () {
          ! function (e) {
            clearInterval(i);
            var t = 0,
              n = "";
            e.split("").forEach(function (e) {
              n += "<span>".concat(e, "</span>")
            }), (0, c.default)("#question").html(n), i = setInterval(function () {
              (0, c.default)("#question span").eq(t).css("opacity", 1), t++, e.length <= t && clearInterval(i)
            }, 75)
          }(h.default[n[r]].quest[a])
        }, 200)
      }

      function u(e) {
        return e <= 3 ? 1 : e <= 7 ? 2 : e <= 10 ? 3 : e <= 12 ? 4 : void 0
      }
    };
    n.default = r
  }, {
    "../../data/quest.json": 1,
    "../../data/result.json": 2,
    "../../data/url.json": 3,
    jquery: 19
  }],
  7: [function (e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i, r = (i = e("jquery")) && i.__esModule ? i : {
      default: i
    };
    var s = function () {
      if ((0, r.default)("body").hasClass("result")) {
        (0, r.default)(window).on("resize", t), t();
        var e = {
          url: window.location.href,
          text: "キミは".concat(String((0, r.default)("title").html()).match(/【.*?】/), "の要素を持つ人材！\nどのポケモンに近い人材か診断しよう！")
        };
        (0, r.default)(".special-result-sns-list a.fb").attr("href", "http://www.facebook.com/sharer.php?u=" + e.url), (0, r.default)(".special-result-sns-list a.tw").attr("href", "https://twitter.com/intent/tweet?url=" + e.url + "&text=" + encodeURI(e.text) + "&hashtags=ポケモン自己分析"), (0, r.default)("a.tw, a.fb", ".special-result-sns-list ").on("click", function (e) {
          e.preventDefault();
          var t = (0, r.default)(this).attr("href");
          return window.open(t, "social", "width=550, height=450,personalbar=0,toolbar=0,scrollbars=1,resizable=1"), !1
        })
      }

      function t() {
        var n = 0;
        (0, r.default)(".special-result-match-profile").removeAttr("style"), "none" !== (0, r.default)(".pc").css("display") && ((0, r.default)(".special-result-match-profile").each(function (e, t) {
          n = n > (0, r.default)(t).outerHeight() ? n : (0, r.default)(t).outerHeight()
        }), (0, r.default)(".special-result-match-profile").css("height", n + "px"));
        var i = 0;
        (0, r.default)(".special-result-match-name").removeAttr("style"), "none" !== (0, r.default)(".pc").css("display") && ((0, r.default)(".special-result-match-name").each(function (e, t) {
          i = i > (0, r.default)(t).outerHeight() ? i : (0, r.default)(t).outerHeight()
        }), (0, r.default)(".special-result-match-name").css("height", i + "px"))
      }
    };
    n.default = s
  }, {
    jquery: 19
  }],
  8: [function (e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i, u = (i = e("jquery")) && i.__esModule ? i : {
        default: i
      },
      c = e("gsap");
    var r = function () {
      function t(l) {
        (0, u.default)(".slideup, .blockeffect").each(function (e, t) {
          if (!(0, u.default)(t).hasClass("is-show")) {
            var n = (0, u.default)(t).data("timing") || 100;
            (0, u.default)(t).offset().top - l - (0, u.default)(window).outerHeight() + n < 0 && (0, u.default)(t).addClass("is-show")
          }
        }), (0, u.default)(".texteffect").each(function (e, t) {
          if (!(0, u.default)(t).hasClass("is-show") && (0, u.default)(t).offset().top - l - (0, u.default)(window).outerHeight() + 100 < 0 && ((0, u.default)(t).addClass("texteffect-visible").addClass("texteffect-animation").addClass("is-show"), (0, u.default)("html").hasClass("clip-path"))) {
            var n = (0, u.default)(t).outerWidth(),
              i = (0, u.default)(t).outerHeight(),
              r = "rect(0px " + n + "px " + i + "px 0px)",
              s = "rect(0px " + n + "px " + i + "px " + n + "px)",
              a = (0, u.default)(t).find(".texteffect-clone"),
              o = (0, u.default)(t).find(".texteffect-cover");
            c.TweenMax.to(a, 1.5, {
              clip: r,
              ease: Sine.easeInOut
            }), c.TweenMax.to(o, 1.5, {
              clip: s,
              ease: Sine.easeInOut,
              onComplete: function () {
                (0, u.default)(this).parent().addClass("texteffect-animated").removeClass("texteffect-animation"), (0, u.default)(this).parent().find(".texteffect-cover").remove(), (0, u.default)(this).parent().find(".texteffect-clone").remove()
              }
            })
          }
        })
      }(0, u.default)(".texteffect").each(function (e, t) {
        var n = (0, u.default)(t).find(".texteffect-orign"),
          i = n.clone().insertAfter(n).addClass("texteffect-cover").removeClass("texteffect-orign"),
          r = n.clone().insertAfter(n).addClass("texteffect-clone").removeClass("texteffect-orign");
        if ((0, u.default)("html").hasClass("clip-path")) {
          var s = (0, u.default)(t).outerWidth(),
            a = (0, u.default)(t).outerHeight(),
            o = "rect(0px 0px " + a + "px 0px)",
            l = "rect(0px " + s + "px " + a + "px 0px)";
          r.css({
            clip: o
          }), i.css({
            clip: l
          })
        }
      }), (0, u.default)("html").hasClass("clip-path") || (0, u.default)(".texteffect").on(transitionEnd, function (e) {
        (0, u.default)(e.currentTarget).addClass("texteffect-animated").removeClass("texteffect-animation"), (0, u.default)(e.currentTarget).find(".texteffect-cover").remove(), (0, u.default)(e.currentTarget).find(".texteffect-clone").remove()
      }), (0, u.default)(window).on("scroll", function (e) {
        t((0, u.default)(window).scrollTop())
      }), t((0, u.default)(window).scrollTop())
    };
    n.default = r
  }, {
    gsap: 17,
    jquery: 19
  }],
  9: [function (e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i, r = (i = e("jquery")) && i.__esModule ? i : {
      default: i
    };
    var s = function () {
      (0, r.default)("body").hasClass("home") && ! function e(t) {
        var n;
        (0, r.default)(".home-slider-item.is-off").removeClass("is-off"), n = (0, r.default)(".home-slider-item.is-on").next().length <= 0 ? (0, r.default)(".home-slider-item:first-child") : (0, r.default)(".home-slider-item.is-on").next(), (0, r.default)(".home-slider-item").hasClass("is-on") && (0, r.default)(".home-slider-item.is-on").removeClass("is-on").addClass("is-off"), n.addClass("is-on"), setTimeout(e, 6e3, ""), "init" !== t && (0, r.default)(".home-slider").hasClass("is-init") && (0, r.default)(".home-slider").removeClass("is-init")
      }("init")
    };
    n.default = s
  }, {
    jquery: 19
  }],
  10: [function (e, t, n) {
    "use strict";
    e("./polyfills/Element.matches.js"), e("./polyfills/picturefill.js"), e("./polyfills/CustomEvent.js")
  }, {
    "./polyfills/CustomEvent.js": 11,
    "./polyfills/Element.matches.js": 12,
    "./polyfills/picturefill.js": 13
  }],
  11: [function (e, t, n) {
    "use strict";
    ! function () {
      if ("function" == typeof window.CustomEvent) return;

      function e(e, t) {
        t = t || {
          bubbles: !1,
          cancelable: !1,
          detail: void 0
        };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
      }
      e.prototype = window.Event.prototype, window.CustomEvent = e
    }()
  }, {}],
  12: [function (e, t, n) {
    "use strict";
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (e) {
      for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; 0 <= --n && t.item(n) !== this;);
      return -1 < n
    })
  }, {}],
  13: [function (e, fe, t) {
    "use strict";

    function he(e) {
      return (he = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }
    var n, i, r, s, a, o, l, u, c;
    n = window, c = navigator.userAgent, n.HTMLPictureElement && /ecko/.test(c) && c.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (r = document.createElement("source"), s = function (e) {
        var t, n, i = e.parentNode;
        "PICTURE" === i.nodeName.toUpperCase() ? (t = r.cloneNode(), i.insertBefore(t, i.firstElementChild), setTimeout(function () {
          i.removeChild(t)
        })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, n = e.sizes, e.sizes += ",100vw", setTimeout(function () {
          e.sizes = n
        }))
      }, a = function () {
        var e, t = document.querySelectorAll("picture > img, img[srcset][sizes]");
        for (e = 0; e < t.length; e++) s(t[e])
      }, o = function () {
        clearTimeout(i), i = setTimeout(a, 99)
      }, l = n.matchMedia && matchMedia("(orientation: landscape)"), u = function () {
        o(), l && l.addListener && l.addListener(o)
      }, r.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? u() : document.addEventListener("DOMContentLoaded", u), o)),
      function (e, s, u) {
        function c(e) {
          return " " === e || "  " === e || "\n" === e || "\f" === e || "\r" === e
        }

        function y(e, t) {
          return e.res - t.res
        }

        function x(e, t) {
          var n, i, r;
          if (e && t)
            for (r = P.parseSet(t), e = P.makeUrl(e), n = 0; n < r.length; n++)
              if (e === P.makeUrl(r[n].url)) {
                i = r[n];
                break
              }
          return i
        }
        s.createElement("picture");
        var r, f, a, i, o, n, l, h, p, d, t, m, g, _, v, b, w, T, A, C, D, S, P = {},
          k = !1,
          B = function () {},
          E = s.createElement("img"),
          O = E.getAttribute,
          R = E.setAttribute,
          j = E.removeAttribute,
          M = s.documentElement,
          N = {},
          L = {
            algorithm: ""
          },
          I = "data-pfsrc",
          q = I + "set",
          z = navigator.userAgent,
          F = /rident/.test(z) || /ecko/.test(z) && z.match(/rv\:(\d+)/) && 35 < RegExp.$1,
          H = "currentSrc",
          W = /\s+\+?\d+(e\d+)?w/,
          X = /(\([^)]+\))?\s*(.+)/,
          $ = e.picturefillCFG,
          U = "font-size:100%!important;",
          Y = !0,
          V = {},
          G = {},
          Q = e.devicePixelRatio,
          Z = {
            px: 1,
            in : 96
          },
          J = s.createElement("a"),
          K = !1,
          ee = /^[ \t\n\r\u000c]+/,
          te = /^[, \t\n\r\u000c]+/,
          ne = /^[^ \t\n\r\u000c]+/,
          ie = /[,]+$/,
          re = /^\d+$/,
          se = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
          ae = function (e, t, n, i) {
            e.addEventListener ? e.addEventListener(t, n, i || !1) : e.attachEvent && e.attachEvent("on" + t, n)
          },
          oe = function (t) {
            var n = {};
            return function (e) {
              return e in n || (n[e] = t(e)), n[e]
            }
          },
          le = (i = /^([\d\.]+)(em|vw|px)$/, o = oe(function (e) {
            return "return " + function () {
              for (var e = arguments, t = 0, n = e[0]; ++t in e;) n = n.replace(e[t], e[++t]);
              return n
            }((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
          }), function (e, t) {
            var n;
            if (!(e in V))
              if (V[e] = !1, t && (n = e.match(i))) V[e] = n[1] * Z[n[2]];
              else try {
                V[e] = new Function("e", o(e))(Z)
              } catch (e) {}
            return V[e]
          }),
          ue = function (e, t) {
            return e.w ? (e.cWidth = P.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e
          },
          ce = function (e) {
            if (k) {
              var t, n, i, r = e || {};
              if (r.elements && 1 === r.elements.nodeType && ("IMG" === r.elements.nodeName.toUpperCase() ? r.elements = [r.elements] : (r.context = r.elements, r.elements = null)), i = (t = r.elements || P.qsa(r.context || s, r.reevaluate || r.reselect ? P.sel : P.selShort)).length) {
                for (P.setupRun(r), K = !0, n = 0; n < i; n++) P.fillImg(t[n], r);
                P.teardownRun(r)
              }
            }
          };
        e.console && console.warn, H in E || (H = "src"), N["image/jpeg"] = !0, N["image/gif"] = !0, N["image/png"] = !0, N["image/svg+xml"] = s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), P.ns = ("pf" + (new Date).getTime()).substr(0, 9), P.supSrcset = "srcset" in E, P.supSizes = "sizes" in E, P.supPicture = !!e.HTMLPictureElement, P.supSrcset && P.supPicture && !P.supSizes && (A = s.createElement("img"), E.srcset = "data:,a", A.src = "data:,a", P.supSrcset = E.complete === A.complete, P.supPicture = P.supSrcset && P.supPicture), P.supSrcset && !P.supSizes ? (b = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", w = s.createElement("img"), T = function () {
          2 === w.width && (P.supSizes = !0), f = P.supSrcset && !P.supSizes, k = !0, setTimeout(ce)
        }, w.onload = T, w.onerror = T, w.setAttribute("sizes", "9px"), w.srcset = b + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", w.src = b) : k = !0, P.selShort = "picture>img,img[srcset]", P.sel = P.selShort, P.cfg = L, P.DPR = Q || 1, P.u = Z, P.types = N, P.setSize = B, P.makeUrl = oe(function (e) {
          return J.href = e, J.href
        }), P.qsa = function (e, t) {
          return "querySelector" in e ? e.querySelectorAll(t) : []
        }, P.matchesMedia = function () {
          return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? P.matchesMedia = function (e) {
            return !e || matchMedia(e).matches
          } : P.matchesMedia = P.mMQ, P.matchesMedia.apply(this, arguments)
        }, P.mMQ = function (e) {
          return !e || le(e)
        }, P.calcLength = function (e) {
          var t = le(e, !0) || !1;
          return t < 0 && (t = !1), t
        }, P.supportsType = function (e) {
          return !e || N[e]
        }, P.parseSize = oe(function (e) {
          var t = (e || "").match(X);
          return {
            media: t && t[1],
            length: t && t[2]
          }
        }), P.parseSet = function (e) {
          return e.cands || (e.cands = function (i, f) {
            function e(e) {
              var t, n = e.exec(i.substring(l));
              return n ? (t = n[0], l += t.length, t) : void 0
            }

            function t() {
              var e, t, n, i, r, s, a, o, l, u = !1,
                c = {};
              for (i = 0; i < p.length; i++) s = (r = p[i])[r.length - 1], a = r.substring(0, r.length - 1), o = parseInt(a, 10), l = parseFloat(a), re.test(a) && "w" === s ? ((e || t) && (u = !0), 0 === o ? u = !0 : e = o) : se.test(a) && "x" === s ? ((e || t || n) && (u = !0), l < 0 ? u = !0 : t = l) : re.test(a) && "h" === s ? ((n || t) && (u = !0), 0 === o ? u = !0 : n = o) : u = !0;
              u || (c.url = h, e && (c.w = e), t && (c.d = t), n && (c.h = n), n || t || e || (c.d = 1), 1 === c.d && (f.has1x = !0), c.set = f, d.push(c))
            }

            function n() {
              for (e(ee), r = "", s = "in descriptor";;) {
                if (a = i.charAt(l), "in descriptor" === s)
                  if (c(a)) r && (p.push(r), r = "", s = "after descriptor");
                  else {
                    if ("," === a) return l += 1, r && p.push(r), void t();
                    if ("(" === a) r += a, s = "in parens";
                    else {
                      if ("" === a) return r && p.push(r), void t();
                      r += a
                    }
                  }
                else if ("in parens" === s)
                  if (")" === a) r += a, s = "in descriptor";
                  else {
                    if ("" === a) return p.push(r), void t();
                    r += a
                  }
                else if ("after descriptor" === s)
                  if (c(a));
                  else {
                    if ("" === a) return void t();
                    s = "in descriptor", l -= 1
                  }
                l += 1
              }
            }
            for (var h, p, r, s, a, o = i.length, l = 0, d = [];;) {
              if (e(te), o <= l) return d;
              h = e(ne), p = [], "," === h.slice(-1) ? (h = h.replace(ie, ""), t()) : n()
            }
          }(e.srcset, e)), e.cands
        }, P.getEmValue = function () {
          var e;
          if (!r && (e = s.body)) {
            var t = s.createElement("div"),
              n = M.style.cssText,
              i = e.style.cssText;
            t.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", M.style.cssText = U, e.style.cssText = U, e.appendChild(t), r = t.offsetWidth, e.removeChild(t), r = parseFloat(r, 10), M.style.cssText = n, e.style.cssText = i
          }
          return r || 16
        }, P.calcListLength = function (e) {
          if (!(e in G) || L.uT) {
            var t = P.calcLength(function (e) {
              var t, n, i, r, s, a, o, l = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
                u = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
              for (i = (n = function (e) {
                  function t() {
                    r && (s.push(r), r = "")
                  }

                  function n() {
                    s[0] && (a.push(s), s = [])
                  }
                  for (var i, r = "", s = [], a = [], o = 0, l = 0, u = !1;;) {
                    if ("" === (i = e.charAt(l))) return t(), n(), a;
                    if (u) {
                      if ("*" === i && "/" === e[l + 1]) {
                        u = !1, l += 2, t();
                        continue
                      }
                      l += 1
                    } else {
                      if (c(i)) {
                        if (e.charAt(l - 1) && c(e.charAt(l - 1)) || !r) {
                          l += 1;
                          continue
                        }
                        if (0 === o) {
                          t(), l += 1;
                          continue
                        }
                        i = " "
                      } else if ("(" === i) o += 1;
                      else if (")" === i) o -= 1;
                      else {
                        if ("," === i) {
                          t(), n(), l += 1;
                          continue
                        }
                        if ("/" === i && "*" === e.charAt(l + 1)) {
                          u = !0, l += 2;
                          continue
                        }
                      }
                      r += i, l += 1
                    }
                  }
                }(e)).length, t = 0; t < i; t++)
                if (s = (r = n[t])[r.length - 1], o = s, l.test(o) && 0 <= parseFloat(o) || u.test(o) || "0" === o || "-0" === o || "+0" === o) {
                  if (a = s, r.pop(), 0 === r.length) return a;
                  if (r = r.join(" "), P.matchesMedia(r)) return a
                }
              return "100vw"
            }(e));
            G[e] = t || Z.width
          }
          return G[e]
        }, P.setRes = function (e) {
          var t;
          if (e)
            for (var n = 0, i = (t = P.parseSet(e)).length; n < i; n++) ue(t[n], e.sizes);
          return t
        }, P.setRes.res = ue, P.applySetCandidate = function (e, t) {
          if (e.length) {
            var n, i, r, s, a, o, l, u, c, f = t[P.ns],
              h = P.DPR;
            if (o = f.curSrc || t[H], (l = f.curCan || function (e, t, n) {
                var i;
                return !n && t && (n = (n = e[P.ns].sets) && n[n.length - 1]), (i = x(t, n)) && (t = P.makeUrl(t), e[P.ns].curSrc = t, (e[P.ns].curCan = i).res || ue(i, i.set.sizes)), i
              }(t, o, e[0].set)) && l.set === e[0].set && ((c = F && !t.complete && l.res - .1 > h) || (l.cached = !0, l.res >= h && (a = l))), !a)
              for (e.sort(y), a = e[(s = e.length) - 1], i = 0; i < s; i++)
                if ((n = e[i]).res >= h) {
                  a = e[r = i - 1] && (c || o !== P.makeUrl(n.url)) && (p = e[r].res, d = n.res, m = h, g = e[r].cached, v = _ = void 0, m < ("saveData" === L.algorithm ? 2.7 < p ? m + 1 : (v = (d - m) * (_ = Math.pow(p - .6, 1.5)), g && (v += .1 * _), p + v) : 1 < m ? Math.sqrt(p * d) : p)) ? e[r] : n;
                  break
                }
            a && (u = P.makeUrl(a.url), f.curSrc = u, f.curCan = a, u !== o && P.setSrc(t, a), P.setSize(t))
          }
          var p, d, m, g, _, v
        }, P.setSrc = function (e, t) {
          var n;
          e.src = t.url, "image/svg+xml" === t.set.type && (n = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = n))
        }, P.getSet = function (e) {
          var t, n, i, r = !1,
            s = e[P.ns].sets;
          for (t = 0; t < s.length && !r; t++)
            if ((n = s[t]).srcset && P.matchesMedia(n.media) && (i = P.supportsType(n.type))) {
              "pending" === i && (n = i), r = n;
              break
            }
          return r
        }, P.parseSets = function (e, t, n) {
          var i, r, s, a, o = t && "PICTURE" === t.nodeName.toUpperCase(),
            l = e[P.ns];
          (l.src === u || n.src) && (l.src = O.call(e, "src"), l.src ? R.call(e, I, l.src) : j.call(e, I)), (l.srcset === u || n.srcset || !P.supSrcset || e.srcset) && (i = O.call(e, "srcset"), l.srcset = i, a = !0), l.sets = [], o && (l.pic = !0, function (e, t) {
            var n, i, r, s, a = e.getElementsByTagName("source");
            for (n = 0, i = a.length; n < i; n++)(r = a[n])[P.ns] = !0, (s = r.getAttribute("srcset")) && t.push({
              srcset: s,
              media: r.getAttribute("media"),
              type: r.getAttribute("type"),
              sizes: r.getAttribute("sizes")
            })
          }(t, l.sets)), l.srcset ? (r = {
            srcset: l.srcset,
            sizes: O.call(e, "sizes")
          }, l.sets.push(r), (s = (f || l.src) && W.test(l.srcset || "")) || !l.src || x(l.src, r) || r.has1x || (r.srcset += ", " + l.src, r.cands.push({
            url: l.src,
            d: 1,
            set: r
          }))) : l.src && l.sets.push({
            srcset: l.src,
            sizes: null
          }), l.curCan = null, l.curSrc = u, l.supported = !(o || r && !P.supSrcset || s && !P.supSizes), a && P.supSrcset && !l.supported && (i ? (R.call(e, q, i), e.srcset = "") : j.call(e, q)), l.supported && !l.srcset && (!l.src && e.src || e.src !== P.makeUrl(l.src)) && (null === l.src ? e.removeAttribute("src") : e.src = l.src), l.parsed = !0
        }, P.fillImg = function (e, t) {
          var n, i = t.reselect || t.reevaluate;
          e[P.ns] || (e[P.ns] = {}), n = e[P.ns], (i || n.evaled !== a) && ((!n.parsed || t.reevaluate) && P.parseSets(e, e.parentNode, t), n.supported ? n.evaled = a : function (e) {
            var t, n = P.getSet(e),
              i = !1;
            "pending" !== n && (i = a, n && (t = P.setRes(n), P.applySetCandidate(t, e))), e[P.ns].evaled = i
          }(e))
        }, P.setupRun = function () {
          (!K || Y || Q !== e.devicePixelRatio) && (Y = !1, Q = e.devicePixelRatio, V = {}, G = {}, P.DPR = Q || 1, Z.width = Math.max(e.innerWidth || 0, M.clientWidth), Z.height = Math.max(e.innerHeight || 0, M.clientHeight), Z.vw = Z.width / 100, Z.vh = Z.height / 100, a = [Z.height, Z.width, Q].join("-"), Z.em = P.getEmValue(), Z.rem = Z.em)
        }, P.supPicture ? (ce = B, P.fillImg = B) : (m = e.attachEvent ? /d$|^c/ : /d$|^c|^i/, g = function e() {
          var t = s.readyState || "";
          _ = setTimeout(e, "loading" === t ? 200 : 999), s.body && (P.fillImgs(), (n = n || m.test(t)) && clearTimeout(_))
        }, _ = setTimeout(g, s.body ? 9 : 99), v = M.clientHeight, ae(e, "resize", (l = function () {
          Y = Math.max(e.innerWidth || 0, M.clientWidth) !== Z.width || M.clientHeight !== v, v = M.clientHeight, Y && P.fillImgs()
        }, h = 99, t = function e() {
          var t = new Date - d;
          t < h ? p = setTimeout(e, h - t) : (p = null, l())
        }, function () {
          d = new Date, p || (p = setTimeout(t, h))
        })), ae(s, "readystatechange", g)), P.picturefill = ce, P.fillImgs = ce, P.teardownRun = B, ce._ = P, e.picturefillCFG = {
          pf: P,
          push: function (e) {
            var t = e.shift();
            "function" == typeof P[t] ? P[t].apply(P, e) : (L[t] = e[0], K && P.fillImgs({
              reselect: !0
            }))
          }
        };
        for (; $ && $.length;) e.picturefillCFG.push($.shift());
        e.picturefill = ce, "object" == (void 0 === fe ? "undefined" : he(fe)) && "object" == he(fe.exports) ? fe.exports = ce : "function" == typeof define && define.amd && define("picturefill", function () {
          return ce
        }), P.supPicture || (N["image/webp"] = (C = "image/webp", D = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==", (S = new e.Image).onerror = function () {
          N[C] = !1, ce()
        }, S.onload = function () {
          N[C] = 1 === S.width, ce()
        }, S.src = D, "pending"))
      }(window, document)
  }, {}],
  14: [function (e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i, r = (i = e("jquery")) && i.__esModule ? i : {
      default: i
    };
    var s = function () {
      (0, r.default)("body").css("overflow-y", "scroll");
      var e = window.innerWidth - document.body.clientWidth;
      return (0, r.default)("body").removeAttr("style"), e
    };
    n.default = s
  }, {
    jquery: 19
  }],
  15: [function (e, t, n) {
    "use strict";
    var i;
    i = function (e) {
      var t = document.createElement("div");
      for (var n in e)
        if (e.hasOwnProperty(n) && void 0 !== t.style[n]) return e[n]
    }, window.transitionEnd = i({
      transition: "transitionend",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    }), window.animationEnd = i({
      animation: "animationend",
      MozAnimation: "mozAnimationEnd",
      WebkitAnimation: "webkitAnimationEnd"
    })
  }, {}],
  16: [function (e, t, n) {
    var i, r;
    i = "undefined" != typeof window ? window : this, r = function () {
      "use strict";

      function e() {}
      var t = e.prototype;
      return t.on = function (e, t) {
        if (e && t) {
          var n = this._events = this._events || {},
            i = n[e] = n[e] || [];
          return -1 == i.indexOf(t) && i.push(t), this
        }
      }, t.once = function (e, t) {
        if (e && t) {
          this.on(e, t);
          var n = this._onceEvents = this._onceEvents || {};
          return (n[e] = n[e] || {})[t] = !0, this
        }
      }, t.off = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
          var i = n.indexOf(t);
          return -1 != i && n.splice(i, 1), this
        }
      }, t.emitEvent = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
          n = n.slice(0), t = t || [];
          for (var i = this._onceEvents && this._onceEvents[e], r = 0; r < n.length; r++) {
            var s = n[r];
            i && i[s] && (this.off(e, s), delete i[s]), s.apply(this, t)
          }
          return this
        }
      }, t.allOff = function () {
        delete this._events, delete this._onceEvents
      }, e
    }, "function" == typeof define && define.amd ? define(r) : "object" == typeof t && t.exports ? t.exports = r() : i.EvEmitter = r()
  }, {}],
  17: [function (e, se, t) {
    (function (e) {
      "use strict";

      function st(e) {
        return (st = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }
      var at = void 0 !== se && se.exports && void 0 !== e ? e : window;
      (at._gsQueue || (at._gsQueue = [])).push(function () {
          var A, b, w, T, _, n, v, C, y, x, p, d, g, e, t, l, u, i;
          at._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (i, c, y) {
            var m = function (e) {
                var t, n = [],
                  i = e.length;
                for (t = 0; t !== i; n.push(e[t++]));
                return n
              },
              g = function (e, t, n) {
                var i, r, s = e.cycle;
                for (i in s) r = s[i], e[i] = "function" == typeof r ? r(n, t[n], t) : r[n % r.length];
                delete e.cycle
              },
              _ = function (e) {
                if ("function" == typeof e) return e;
                var d = "object" === st(e) ? e : {
                    each: e
                  },
                  m = d.ease,
                  g = d.from || 0,
                  _ = d.base || 0,
                  v = {},
                  y = isNaN(g),
                  x = d.axis,
                  b = {
                    center: .5,
                    end: 1
                  }[g] || 0;
                return function (e, t, n) {
                  var i, r, s, a, o, l, u, c, f, h = (n || d).length,
                    p = v[h];
                  if (!p) {
                    if (!(f = "auto" === d.grid ? 0 : (d.grid || [1 / 0])[0])) {
                      for (u = -1 / 0; u < (u = n[f++].getBoundingClientRect().left) && f < h;);
                      f--
                    }
                    for (p = v[h] = [], i = y ? Math.min(f, h) * b - .5 : g % f, r = y ? h * b / f - .5 : g / f | 0, c = 1 / (u = 0), l = 0; l < h; l++) s = l % f - i, a = r - (l / f | 0), p[l] = o = x ? Math.abs("y" === x ? a : s) : Math.sqrt(s * s + a * a), u < o && (u = o), o < c && (c = o);
                    p.max = u - c, p.min = c, p.v = h = d.amount || d.each * (h < f ? h - 1 : x ? "y" === x ? h / f : f : Math.max(f, h / f)) || 0, p.b = h < 0 ? _ - h : _
                  }
                  return h = (p[e] - p.min) / p.max, p.b + (m ? m.getRatio(h) : h) * p.v
                }
              },
              v = function e(t, n, i) {
                y.call(this, t, n, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = e.prototype.render
              },
              x = 1e-8,
              b = y._internals,
              w = b.isSelector,
              T = b.isArray,
              e = v.prototype = y.to({}, .1, {}),
              A = [];
            v.version = "2.1.3", e.constructor = v, e.kill()._gc = !1, v.killTweensOf = v.killDelayedCallsTo = y.killTweensOf, v.getTweensOf = y.getTweensOf, v.lagSmoothing = y.lagSmoothing, v.ticker = y.ticker, v.render = y.render, v.distribute = _, e.invalidate = function () {
              return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), y.prototype.invalidate.call(this)
            }, e.updateTo = function (e, t) {
              var n, i = this,
                r = i.ratio,
                s = i.vars.immediateRender || e.immediateRender;
              for (n in t && i._startTime < i._timeline._time && (i._startTime = i._timeline._time, i._uncache(!1), i._gc ? i._enabled(!0, !1) : i._timeline.insert(i, i._startTime - i._delay)), e) i.vars[n] = e[n];
              if (i._initted || s)
                if (t) i._initted = !1, s && i.render(0, !0, !0);
                else if (i._gc && i._enabled(!0, !1), i._notifyPluginsOfEnabled && i._firstPT && y._onPluginEvent("_onDisable", i), .998 < i._time / i._duration) {
                var a = i._totalTime;
                i.render(0, !0, !1), i._initted = !1, i.render(a, !0, !1)
              } else if (i._initted = !1, i._init(), 0 < i._time || s)
                for (var o, l = 1 / (1 - r), u = i._firstPT; u;) o = u.s + u.c, u.c *= l, u.s = o - u.c, u = u._next;
              return i
            }, e.render = function (e, t, n) {
              this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
              var i, r, s, a, o, l, u, c, f, h = this,
                p = h._dirty ? h.totalDuration() : h._totalDuration,
                d = h._time,
                m = h._totalTime,
                g = h._cycle,
                _ = h._duration,
                v = h._rawPrevTime;
              if (p - x <= e && 0 <= e ? (h._totalTime = p, h._cycle = h._repeat, h._yoyo && 0 != (1 & h._cycle) ? (h._time = 0, h.ratio = h._ease._calcEnd ? h._ease.getRatio(0) : 0) : (h._time = _, h.ratio = h._ease._calcEnd ? h._ease.getRatio(1) : 1), h._reversed || (i = !0, r = "onComplete", n = n || h._timeline.autoRemoveChildren), 0 === _ && (h._initted || !h.vars.lazy || n) && (h._startTime === h._timeline._duration && (e = 0), (v < 0 || e <= 0 && -x <= e || v === x && "isPause" !== h.data) && v !== e && (n = !0, x < v && (r = "onReverseComplete")), h._rawPrevTime = c = !t || e || v === e ? e : x)) : e < x ? (h._totalTime = h._time = h._cycle = 0, h.ratio = h._ease._calcEnd ? h._ease.getRatio(0) : 0, (0 !== m || 0 === _ && 0 < v) && (r = "onReverseComplete", i = h._reversed), -x < e ? e = 0 : e < 0 && (h._active = !1, 0 === _ && (h._initted || !h.vars.lazy || n) && (0 <= v && (n = !0), h._rawPrevTime = c = !t || e || v === e ? e : x)), h._initted || (n = !0)) : (h._totalTime = h._time = e, 0 !== h._repeat && (a = _ + h._repeatDelay, h._cycle = h._totalTime / a >> 0, 0 !== h._cycle && h._cycle === h._totalTime / a && m <= e && h._cycle--, h._time = h._totalTime - h._cycle * a, h._yoyo && 0 != (1 & h._cycle) && (h._time = _ - h._time, (f = h._yoyoEase || h.vars.yoyoEase) && (h._yoyoEase || (!0 !== f || h._initted ? h._yoyoEase = f = !0 === f ? h._ease : f instanceof Ease ? f : Ease.map[f] : (f = h.vars.ease, h._yoyoEase = f = f ? f instanceof Ease ? f : "function" == typeof f ? new Ease(f, h.vars.easeParams) : Ease.map[f] || y.defaultEase : y.defaultEase)), h.ratio = f ? 1 - f.getRatio((_ - h._time) / _) : 0)), h._time > _ ? h._time = _ : h._time < 0 && (h._time = 0)), h._easeType && !f ? (o = h._time / _, (1 === (l = h._easeType) || 3 === l && .5 <= o) && (o = 1 - o), 3 === l && (o *= 2), 1 === (u = h._easePower) ? o *= o : 2 === u ? o *= o * o : 3 === u ? o *= o * o * o : 4 === u && (o *= o * o * o * o), h.ratio = 1 === l ? 1 - o : 2 === l ? o : h._time / _ < .5 ? o / 2 : 1 - o / 2) : f || (h.ratio = h._ease.getRatio(h._time / _))), d !== h._time || n || g !== h._cycle) {
                if (!h._initted) {
                  if (h._init(), !h._initted || h._gc) return;
                  if (!n && h._firstPT && (!1 !== h.vars.lazy && h._duration || h.vars.lazy && !h._duration)) return h._time = d, h._totalTime = m, h._rawPrevTime = v, h._cycle = g, b.lazyTweens.push(h), void(h._lazy = [e, t]);
                  !h._time || i || f ? i && this._ease._calcEnd && !f && (h.ratio = h._ease.getRatio(0 === h._time ? 0 : 1)) : h.ratio = h._ease.getRatio(h._time / _)
                }
                for (!1 !== h._lazy && (h._lazy = !1), h._active || !h._paused && h._time !== d && 0 <= e && (h._active = !0), 0 === m && (2 === h._initted && 0 < e && h._init(), h._startAt && (0 <= e ? h._startAt.render(e, !0, n) : r || (r = "_dummyGS")), h.vars.onStart && (0 === h._totalTime && 0 !== _ || t || h._callback("onStart"))), s = h._firstPT; s;) s.f ? s.t[s.p](s.c * h.ratio + s.s) : s.t[s.p] = s.c * h.ratio + s.s, s = s._next;
                h._onUpdate && (e < 0 && h._startAt && h._startTime && h._startAt.render(e, !0, n), t || (h._totalTime !== m || r) && h._callback("onUpdate")), h._cycle !== g && (t || h._gc || h.vars.onRepeat && h._callback("onRepeat")), r && (h._gc && !n || (e < 0 && h._startAt && !h._onUpdate && h._startTime && h._startAt.render(e, !0, n), i && (h._timeline.autoRemoveChildren && h._enabled(!1, !1), h._active = !1), !t && h.vars[r] && h._callback(r), 0 === _ && h._rawPrevTime === x && c !== x && (h._rawPrevTime = 0)))
              } else m !== h._totalTime && h._onUpdate && (t || h._callback("onUpdate"))
            }, v.to = function (e, t, n) {
              return new v(e, t, n)
            }, v.from = function (e, t, n) {
              return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new v(e, t, n)
            }, v.fromTo = function (e, t, n, i) {
              return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new v(e, t, i)
            }, v.staggerTo = v.allTo = function (e, t, n, i, r, s, a) {
              var o, l, u, c, f = [],
                h = _(n.stagger || i),
                p = n.cycle,
                d = (n.startAt || A).cycle;
              for (T(e) || ("string" == typeof e && (e = y.selector(e) || e), w(e) && (e = m(e))), o = (e = e || []).length - 1, u = 0; u <= o; u++) {
                for (c in l = {}, n) l[c] = n[c];
                if (p && (g(l, e, u), null != l.duration && (t = l.duration, delete l.duration)), d) {
                  for (c in d = l.startAt = {}, n.startAt) d[c] = n.startAt[c];
                  g(l.startAt, e, u)
                }
                l.delay = h(u, e[u], e) + (l.delay || 0), u === o && r && (l.onComplete = function () {
                  n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), r.apply(a || n.callbackScope || this, s || A)
                }), f[u] = new v(e[u], t, l)
              }
              return f
            }, v.staggerFrom = v.allFrom = function (e, t, n, i, r, s, a) {
              return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, v.staggerTo(e, t, n, i, r, s, a)
            }, v.staggerFromTo = v.allFromTo = function (e, t, n, i, r, s, a, o) {
              return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, v.staggerTo(e, t, i, r, s, a, o)
            }, v.delayedCall = function (e, t, n, i, r) {
              return new v(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: n,
                callbackScope: i,
                onReverseComplete: t,
                onReverseCompleteParams: n,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
              })
            }, v.set = function (e, t) {
              return new v(e, 0, t)
            }, v.isTweening = function (e) {
              return 0 < y.getTweensOf(e, !0).length
            };
            var t = function e(t, n) {
                for (var i = [], r = 0, s = t._first; s;) s instanceof y ? i[r++] = s : (n && (i[r++] = s), r = (i = i.concat(e(s, n))).length), s = s._next;
                return i
              },
              f = v.getAllTweens = function (e) {
                return t(i._rootTimeline, e).concat(t(i._rootFramesTimeline, e))
              };
            v.killAll = function (e, t, n, i) {
              null == t && (t = !0), null == n && (n = !0);
              var r, s, a, o = f(0 != i),
                l = o.length,
                u = t && n && i;
              for (a = 0; a < l; a++) s = o[a], (u || s instanceof c || (r = s.target === s.vars.onComplete) && n || t && !r) && (e ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
            }, v.killChildTweensOf = function (e, t) {
              if (null != e) {
                var n, i, r, s, a, o = b.tweenLookup;
                if ("string" == typeof e && (e = y.selector(e) || e), w(e) && (e = m(e)), T(e))
                  for (s = e.length; - 1 < --s;) v.killChildTweensOf(e[s], t);
                else {
                  for (r in n = [], o)
                    for (i = o[r].target.parentNode; i;) i === e && (n = n.concat(o[r].tweens)), i = i.parentNode;
                  for (a = n.length, s = 0; s < a; s++) t && n[s].totalTime(n[s].totalDuration()), n[s]._enabled(!1, !1)
                }
              }
            };
            var r = function (e, t, n, i) {
              t = !1 !== t, n = !1 !== n;
              for (var r, s, a = f(i = !1 !== i), o = t && n && i, l = a.length; - 1 < --l;) s = a[l], (o || s instanceof c || (r = s.target === s.vars.onComplete) && n || t && !r) && s.paused(e)
            };
            return v.pauseAll = function (e, t, n) {
              r(!0, e, t, n)
            }, v.resumeAll = function (e, t, n) {
              r(!1, e, t, n)
            }, v.globalTimeScale = function (e) {
              var t = i._rootTimeline,
                n = y.ticker.time;
              return arguments.length ? (e = e || x, t._startTime = n - (n - t._startTime) * t._timeScale / e, t = i._rootFramesTimeline, n = y.ticker.frame, t._startTime = n - (n - t._startTime) * t._timeScale / e, t._timeScale = i._rootTimeline._timeScale = e, e) : t._timeScale
            }, e.progress = function (e, t) {
              return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this.duration() ? this._time / this._duration : this.ratio
            }, e.totalProgress = function (e, t) {
              return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
            }, e.time = function (e, t) {
              if (!arguments.length) return this._time;
              this._dirty && this.totalDuration();
              var n = this._duration,
                i = this._cycle,
                r = i * (n + this._repeatDelay);
              return n < e && (e = n), this.totalTime(this._yoyo && 1 & i ? n - e + r : this._repeat ? e + r : e, t)
            }, e.duration = function (e) {
              return arguments.length ? i.prototype.duration.call(this, e) : this._duration
            }, e.totalDuration = function (e) {
              return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, e.repeat = function (e) {
              return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
            }, e.repeatDelay = function (e) {
              return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
            }, e.yoyo = function (e) {
              return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, v
          }, !0), at._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (f, h, d) {
            var m = function (e) {
                h.call(this, e);
                var t, n, i = this,
                  r = i.vars;
                for (n in i._labels = {}, i.autoRemoveChildren = !!r.autoRemoveChildren, i.smoothChildTiming = !!r.smoothChildTiming, i._sortChildren = !0, i._onUpdate = r.onUpdate, r) t = r[n], p(t) && -1 !== t.join("").indexOf("{self}") && (r[n] = i._swapSelfInParams(t));
                p(r.tweens) && i.add(r.tweens, 0, r.align, r.stagger)
              },
              _ = 1e-8,
              e = d._internals,
              t = m._internals = {},
              g = e.isSelector,
              p = e.isArray,
              v = e.lazyTweens,
              y = e.lazyRender,
              a = at._gsDefine.globals,
              x = function (e) {
                var t, n = {};
                for (t in e) n[t] = e[t];
                return n
              },
              b = function (e, t, n) {
                var i, r, s = e.cycle;
                for (i in s) r = s[i], e[i] = "function" == typeof r ? r(n, t[n], t) : r[n % r.length];
                delete e.cycle
              },
              s = t.pauseCallback = function () {},
              u = function (e, t, n, i) {
                var r = "immediateRender";
                return r in t || (t[r] = !(n && !1 === n[r] || i)), t
              },
              w = function (e) {
                if ("function" == typeof e) return e;
                var d = "object" === st(e) ? e : {
                    each: e
                  },
                  m = d.ease,
                  g = d.from || 0,
                  _ = d.base || 0,
                  v = {},
                  y = isNaN(g),
                  x = d.axis,
                  b = {
                    center: .5,
                    end: 1
                  }[g] || 0;
                return function (e, t, n) {
                  var i, r, s, a, o, l, u, c, f, h = (n || d).length,
                    p = v[h];
                  if (!p) {
                    if (!(f = "auto" === d.grid ? 0 : (d.grid || [1 / 0])[0])) {
                      for (u = -1 / 0; u < (u = n[f++].getBoundingClientRect().left) && f < h;);
                      f--
                    }
                    for (p = v[h] = [], i = y ? Math.min(f, h) * b - .5 : g % f, r = y ? h * b / f - .5 : g / f | 0, c = 1 / (u = 0), l = 0; l < h; l++) s = l % f - i, a = r - (l / f | 0), p[l] = o = x ? Math.abs("y" === x ? a : s) : Math.sqrt(s * s + a * a), u < o && (u = o), o < c && (c = o);
                    p.max = u - c, p.min = c, p.v = h = d.amount || d.each * (h < f ? h - 1 : x ? "y" === x ? h / f : f : Math.max(f, h / f)) || 0, p.b = h < 0 ? _ - h : _
                  }
                  return h = (p[e] - p.min) / p.max, p.b + (m ? m.getRatio(h) : h) * p.v
                }
              },
              n = m.prototype = new h;
            return m.version = "2.1.3", m.distribute = w, n.constructor = m, n.kill()._gc = n._forcingPlayhead = n._hasPause = !1, n.to = function (e, t, n, i) {
              var r = n.repeat && a.TweenMax || d;
              return t ? this.add(new r(e, t, n), i) : this.set(e, n, i)
            }, n.from = function (e, t, n, i) {
              return this.add((n.repeat && a.TweenMax || d).from(e, t, u(0, n)), i)
            }, n.fromTo = function (e, t, n, i, r) {
              var s = i.repeat && a.TweenMax || d;
              return i = u(0, i, n), t ? this.add(s.fromTo(e, t, n, i), r) : this.set(e, i, r)
            }, n.staggerTo = function (e, t, n, i, r, s, a, o) {
              var l, u, c = new m({
                  onComplete: s,
                  onCompleteParams: a,
                  callbackScope: o,
                  smoothChildTiming: this.smoothChildTiming
                }),
                f = w(n.stagger || i),
                h = n.startAt,
                p = n.cycle;
              for ("string" == typeof e && (e = d.selector(e) || e), g(e = e || []) && (e = function (e) {
                  var t, n = [],
                    i = e.length;
                  for (t = 0; t !== i; n.push(e[t++]));
                  return n
                }(e)), u = 0; u < e.length; u++) l = x(n), h && (l.startAt = x(h), h.cycle && b(l.startAt, e, u)), p && (b(l, e, u), null != l.duration && (t = l.duration, delete l.duration)), c.to(e[u], t, l, f(u, e[u], e));
              return this.add(c, r)
            }, n.staggerFrom = function (e, t, n, i, r, s, a, o) {
              return n.runBackwards = !0, this.staggerTo(e, t, u(0, n), i, r, s, a, o)
            }, n.staggerFromTo = function (e, t, n, i, r, s, a, o, l) {
              return i.startAt = n, this.staggerTo(e, t, u(0, i, n), r, s, a, o, l)
            }, n.call = function (e, t, n, i) {
              return this.add(d.delayedCall(0, e, t, n), i)
            }, n.set = function (e, t, n) {
              return this.add(new d(e, 0, u(0, t, null, !0)), n)
            }, m.exportRoot = function (e, t) {
              null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
              var n, i, r, s, a = new m(e),
                o = a._timeline;
              for (null == t && (t = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) s = r._next, t && r instanceof d && r.target === r.vars.onComplete || ((i = r._startTime - r._delay) < 0 && (n = 1), a.add(r, i)), r = s;
              return o.add(a, 0), n && a.totalDuration(), a
            }, n.add = function (e, t, n, i) {
              var r, s, a, o, l, u, c = this;
              if ("number" != typeof t && (t = c._parseTimeOrLabel(t, 0, !0, e)), !(e instanceof f)) {
                if (e instanceof Array || e && e.push && p(e)) {
                  for (n = n || "normal", i = i || 0, r = t, s = e.length, a = 0; a < s; a++) p(o = e[a]) && (o = new m({
                    tweens: o
                  })), c.add(o, r), "string" != typeof o && "function" != typeof o && ("sequence" === n ? r = o._startTime + o.totalDuration() / o._timeScale : "start" === n && (o._startTime -= o.delay())), r += i;
                  return c._uncache(!0)
                }
                if ("string" == typeof e) return c.addLabel(e, t);
                if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                e = d.delayedCall(0, e)
              }
              if (h.prototype.add.call(c, e, t), (e._time || !e._duration && e._initted) && (r = (c.rawTime() - e._startTime) * e._timeScale, (!e._duration || 1e-5 < Math.abs(Math.max(0, Math.min(e.totalDuration(), r))) - e._totalTime) && e.render(r, !1, !1)), (c._gc || c._time === c._duration) && !c._paused && c._duration < c.duration())
                for (u = (l = c).rawTime() > e._startTime; l._timeline;) u && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
              return c
            }, n.remove = function (e) {
              if (e instanceof f) {
                this._remove(e, !1);
                var t = e._timeline = e.vars.useFrames ? f._rootFramesTimeline : f._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime : t._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
              }
              if (e instanceof Array || e && e.push && p(e)) {
                for (var n = e.length; - 1 < --n;) this.remove(e[n]);
                return this
              }
              return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, n._remove = function (e, t) {
              return h.prototype._remove.call(this, e, t), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, n.append = function (e, t) {
              return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
            }, n.insert = n.insertMultiple = function (e, t, n, i) {
              return this.add(e, t || 0, n, i)
            }, n.appendMultiple = function (e, t, n, i) {
              return this.add(e, this._parseTimeOrLabel(null, t, !0, e), n, i)
            }, n.addLabel = function (e, t) {
              return this._labels[e] = this._parseTimeOrLabel(t), this
            }, n.addPause = function (e, t, n, i) {
              var r = d.delayedCall(0, s, n, i || this);
              return r.vars.onComplete = r.vars.onReverseComplete = t, r.data = "isPause", this._hasPause = !0, this.add(r, e)
            }, n.removeLabel = function (e) {
              return delete this._labels[e], this
            }, n.getLabelTime = function (e) {
              return null != this._labels[e] ? this._labels[e] : -1
            }, n._parseTimeOrLabel = function (e, t, n, i) {
              var r, s;
              if (i instanceof f && i.timeline === this) this.remove(i);
              else if (i && (i instanceof Array || i.push && p(i)))
                for (s = i.length; - 1 < --s;) i[s] instanceof f && i[s].timeline === this && this.remove(i[s]);
              if (r = "number" != typeof e || t ? 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof t) return this._parseTimeOrLabel(t, n && "number" == typeof e && null == this._labels[t] ? e - r : 0, n);
              if (t = t || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = r);
              else {
                if (-1 === (s = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = r + t : t : this._labels[e] + t;
                t = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = 1 < s ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : r
              }
              return Number(e) + t
            }, n.seek = function (e, t) {
              return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
            }, n.stop = function () {
              return this.paused(!0)
            }, n.gotoAndPlay = function (e, t) {
              return this.play(e, t)
            }, n.gotoAndStop = function (e, t) {
              return this.pause(e, t)
            }, n.render = function (e, t, n) {
              this._gc && this._enabled(!0, !1);
              var i, r, s, a, o, l, u, c, f = this,
                h = f._time,
                p = f._dirty ? f.totalDuration() : f._totalDuration,
                d = f._startTime,
                m = f._timeScale,
                g = f._paused;
              if (h !== f._time && (e += f._time - h), f._hasPause && !f._forcingPlayhead && !t) {
                if (h < e)
                  for (i = f._first; i && i._startTime <= e && !l;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === f._rawPrevTime || (l = i), i = i._next;
                else
                  for (i = f._last; i && i._startTime >= e && !l;) i._duration || "isPause" === i.data && 0 < i._rawPrevTime && (l = i), i = i._prev;
                l && (f._time = f._totalTime = e = l._startTime, c = f._startTime + (f._reversed ? f._duration - e : e) / f._timeScale)
              }
              if (p - _ <= e && 0 <= e) f._totalTime = f._time = p, f._reversed || f._hasPausedChild() || (r = !0, a = "onComplete", o = !!f._timeline.autoRemoveChildren, 0 === f._duration && (e <= 0 && -_ <= e || f._rawPrevTime < 0 || f._rawPrevTime === _) && f._rawPrevTime !== e && f._first && (o = !0, f._rawPrevTime > _ && (a = "onReverseComplete"))), f._rawPrevTime = f._duration || !t || e || f._rawPrevTime === e ? e : _, e = p + 1e-4;
              else if (e < _)
                if (f._totalTime = f._time = 0, -_ < e && (e = 0), (0 !== h || 0 === f._duration && f._rawPrevTime !== _ && (0 < f._rawPrevTime || e < 0 && 0 <= f._rawPrevTime)) && (a = "onReverseComplete", r = f._reversed), e < 0) f._active = !1, f._timeline.autoRemoveChildren && f._reversed ? (o = r = !0, a = "onReverseComplete") : 0 <= f._rawPrevTime && f._first && (o = !0), f._rawPrevTime = e;
                else {
                  if (f._rawPrevTime = f._duration || !t || e || f._rawPrevTime === e ? e : _, 0 === e && r)
                    for (i = f._first; i && 0 === i._startTime;) i._duration || (r = !1), i = i._next;
                  e = 0, f._initted || (o = !0)
                }
              else f._totalTime = f._time = f._rawPrevTime = e;
              if (f._time !== h && f._first || n || o || l) {
                if (f._initted || (f._initted = !0), f._active || !f._paused && f._time !== h && 0 < e && (f._active = !0), 0 === h && f.vars.onStart && (0 === f._time && f._duration || t || f._callback("onStart")), h <= (u = f._time))
                  for (i = f._first; i && (s = i._next, u === f._time && (!f._paused || g));)(i._active || i._startTime <= u && !i._paused && !i._gc) && (l === i && (f.pause(), f._pauseTime = c), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)), i = s;
                else
                  for (i = f._last; i && (s = i._prev, u === f._time && (!f._paused || g));) {
                    if (i._active || i._startTime <= h && !i._paused && !i._gc) {
                      if (l === i) {
                        for (l = i._prev; l && l.endTime() > f._time;) l.render(l._reversed ? l.totalDuration() - (e - l._startTime) * l._timeScale : (e - l._startTime) * l._timeScale, t, n), l = l._prev;
                        l = null, f.pause(), f._pauseTime = c
                      }
                      i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)
                    }
                    i = s
                  }
                f._onUpdate && (t || (v.length && y(), f._callback("onUpdate"))), a && (f._gc || d !== f._startTime && m === f._timeScale || (0 === f._time || p >= f.totalDuration()) && (r && (v.length && y(), f._timeline.autoRemoveChildren && f._enabled(!1, !1), f._active = !1), !t && f.vars[a] && f._callback(a)))
              }
            }, n._hasPausedChild = function () {
              for (var e = this._first; e;) {
                if (e._paused || e instanceof m && e._hasPausedChild()) return !0;
                e = e._next
              }
              return !1
            }, n.getChildren = function (e, t, n, i) {
              i = i || -9999999999;
              for (var r = [], s = this._first, a = 0; s;) s._startTime < i || (s instanceof d ? !1 !== t && (r[a++] = s) : (!1 !== n && (r[a++] = s), !1 !== e && (a = (r = r.concat(s.getChildren(!0, t, n))).length))), s = s._next;
              return r
            }, n.getTweensOf = function (e, t) {
              var n, i, r = this._gc,
                s = [],
                a = 0;
              for (r && this._enabled(!0, !0), i = (n = d.getTweensOf(e)).length; - 1 < --i;)(n[i].timeline === this || t && this._contains(n[i])) && (s[a++] = n[i]);
              return r && this._enabled(!1, !0), s
            }, n.recent = function () {
              return this._recent
            }, n._contains = function (e) {
              for (var t = e.timeline; t;) {
                if (t === this) return !0;
                t = t.timeline
              }
              return !1
            }, n.shiftChildren = function (e, t, n) {
              n = n || 0;
              for (var i, r = this._first, s = this._labels; r;) r._startTime >= n && (r._startTime += e), r = r._next;
              if (t)
                for (i in s) s[i] >= n && (s[i] += e);
              return this._uncache(!0)
            }, n._kill = function (e, t) {
              if (!e && !t) return this._enabled(!1, !1);
              for (var n = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), i = n.length, r = !1; - 1 < --i;) n[i]._kill(e, t) && (r = !0);
              return r
            }, n.clear = function (e) {
              var t = this.getChildren(!1, !0, !0),
                n = t.length;
              for (this._time = this._totalTime = 0; - 1 < --n;) t[n]._enabled(!1, !1);
              return !1 !== e && (this._labels = {}), this._uncache(!0)
            }, n.invalidate = function () {
              for (var e = this._first; e;) e.invalidate(), e = e._next;
              return f.prototype.invalidate.call(this)
            }, n._enabled = function (e, t) {
              if (e === this._gc)
                for (var n = this._first; n;) n._enabled(e, !0), n = n._next;
              return h.prototype._enabled.call(this, e, t)
            }, n.totalTime = function (e, t, n) {
              this._forcingPlayhead = !0;
              var i = f.prototype.totalTime.apply(this, arguments);
              return this._forcingPlayhead = !1, i
            }, n.duration = function (e) {
              return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
            }, n.totalDuration = function (e) {
              if (arguments.length) return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this;
              if (this._dirty) {
                for (var t, n, i = 0, r = this, s = r._last, a = 999999999999; s;) t = s._prev, s._dirty && s.totalDuration(), s._startTime > a && r._sortChildren && !s._paused && !r._calculatingDuration ? (r._calculatingDuration = 1, r.add(s, s._startTime - s._delay), r._calculatingDuration = 0) : a = s._startTime, s._startTime < 0 && !s._paused && (i -= s._startTime, r._timeline.smoothChildTiming && (r._startTime += s._startTime / r._timeScale, r._time -= s._startTime, r._totalTime -= s._startTime, r._rawPrevTime -= s._startTime), r.shiftChildren(-s._startTime, !1, -9999999999), a = 0), i < (n = s._startTime + s._totalDuration / s._timeScale) && (i = n), s = t;
                r._duration = r._totalDuration = i, r._dirty = !1
              }
              return this._totalDuration
            }, n.paused = function (e) {
              if (!1 === e && this._paused)
                for (var t = this._first; t;) t._startTime === this._time && "isPause" === t.data && (t._rawPrevTime = 0), t = t._next;
              return f.prototype.paused.apply(this, arguments)
            }, n.usesFrames = function () {
              for (var e = this._timeline; e._timeline;) e = e._timeline;
              return e === f._rootFramesTimeline
            }, n.rawTime = function (e) {
              return e && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(e) - this._startTime) * this._timeScale
            }, m
          }, !0), at._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, o, e) {
            var n = function (e) {
                t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0
              },
              P = 1e-8,
              i = o._internals,
              k = i.lazyTweens,
              B = i.lazyRender,
              l = at._gsDefine.globals,
              u = new e(null, null, 1, 0),
              r = n.prototype = new t;
            return r.constructor = n, r.kill()._gc = !1, n.version = "2.1.3", r.invalidate = function () {
              return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
            }, r.addCallback = function (e, t, n, i) {
              return this.add(o.delayedCall(0, e, n, i), t)
            }, r.removeCallback = function (e, t) {
              if (e)
                if (null == t) this._kill(null, e);
                else
                  for (var n = this.getTweensOf(e, !1), i = n.length, r = this._parseTimeOrLabel(t); - 1 < --i;) n[i]._startTime === r && n[i]._enabled(!1, !1);
              return this
            }, r.removePause = function (e) {
              return this.removeCallback(t._internals.pauseCallback, e)
            }, r.tweenTo = function (e, t) {
              t = t || {};
              var n, i, r, s = {
                  ease: u,
                  useFrames: this.usesFrames(),
                  immediateRender: !1,
                  lazy: !1
                },
                a = t.repeat && l.TweenMax || o;
              for (i in t) s[i] = t[i];
              return s.time = this._parseTimeOrLabel(e), n = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, r = new a(this, n, s), s.onStart = function () {
                r.target.paused(!0), r.vars.time === r.target.time() || n !== r.duration() || r.isFromTo || r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale).render(r.time(), !0, !0), t.onStart && t.onStart.apply(t.onStartScope || t.callbackScope || r, t.onStartParams || [])
              }, r
            }, r.tweenFromTo = function (e, t, n) {
              n = n || {}, e = this._parseTimeOrLabel(e), n.startAt = {
                onComplete: this.seek,
                onCompleteParams: [e],
                callbackScope: this
              }, n.immediateRender = !1 !== n.immediateRender;
              var i = this.tweenTo(t, n);
              return i.isFromTo = 1, i.duration(Math.abs(i.vars.time - e) / this._timeScale || .001)
            }, r.render = function (e, t, n) {
              this._gc && this._enabled(!0, !1);
              var i, r, s, a, o, l, u, c, f, h = this,
                p = h._time,
                d = h._dirty ? h.totalDuration() : h._totalDuration,
                m = h._duration,
                g = h._totalTime,
                _ = h._startTime,
                v = h._timeScale,
                y = h._rawPrevTime,
                x = h._paused,
                b = h._cycle;
              if (p !== h._time && (e += h._time - p), d - P <= e && 0 <= e) h._locked || (h._totalTime = d, h._cycle = h._repeat), h._reversed || h._hasPausedChild() || (r = !0, a = "onComplete", o = !!h._timeline.autoRemoveChildren, 0 === h._duration && (e <= 0 && -P <= e || y < 0 || y === P) && y !== e && h._first && (o = !0, P < y && (a = "onReverseComplete"))), h._rawPrevTime = h._duration || !t || e || h._rawPrevTime === e ? e : P, h._yoyo && 1 & h._cycle ? h._time = e = 0 : e = (h._time = m) + 1e-4;
              else if (e < P)
                if (h._locked || (h._totalTime = h._cycle = 0), h._time = 0, -P < e && (e = 0), (0 !== p || 0 === m && y !== P && (0 < y || e < 0 && 0 <= y) && !h._locked) && (a = "onReverseComplete", r = h._reversed), e < 0) h._active = !1, h._timeline.autoRemoveChildren && h._reversed ? (o = r = !0, a = "onReverseComplete") : 0 <= y && h._first && (o = !0), h._rawPrevTime = e;
                else {
                  if (h._rawPrevTime = m || !t || e || h._rawPrevTime === e ? e : P, 0 === e && r)
                    for (i = h._first; i && 0 === i._startTime;) i._duration || (r = !1), i = i._next;
                  e = 0, h._initted || (o = !0)
                }
              else 0 === m && y < 0 && (o = !0), h._time = h._rawPrevTime = e, h._locked || (h._totalTime = e, 0 !== h._repeat && (l = m + h._repeatDelay, h._cycle = h._totalTime / l >> 0, h._cycle && h._cycle === h._totalTime / l && g <= e && h._cycle--, h._time = h._totalTime - h._cycle * l, h._yoyo && 1 & h._cycle && (h._time = m - h._time), h._time > m ? e = (h._time = m) + 1e-4 : h._time < 0 ? h._time = e = 0 : e = h._time));
              if (h._hasPause && !h._forcingPlayhead && !t) {
                if (p < (e = h._time) || h._repeat && b !== h._cycle)
                  for (i = h._first; i && i._startTime <= e && !u;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === h._rawPrevTime || (u = i), i = i._next;
                else
                  for (i = h._last; i && i._startTime >= e && !u;) i._duration || "isPause" === i.data && 0 < i._rawPrevTime && (u = i), i = i._prev;
                u && (f = h._startTime + (h._reversed ? h._duration - u._startTime : u._startTime) / h._timeScale, u._startTime < m && (h._time = h._rawPrevTime = e = u._startTime, h._totalTime = e + h._cycle * (h._totalDuration + h._repeatDelay)))
              }
              if (h._cycle !== b && !h._locked) {
                var w = h._yoyo && 0 != (1 & b),
                  T = w === (h._yoyo && 0 != (1 & h._cycle)),
                  A = h._totalTime,
                  C = h._cycle,
                  D = h._rawPrevTime,
                  S = h._time;
                if (h._totalTime = b * m, h._cycle < b ? w = !w : h._totalTime += m, h._time = p, h._rawPrevTime = 0 === m ? y - 1e-4 : y, h._cycle = b, h._locked = !0, p = w ? 0 : m, h.render(p, t, 0 === m), t || h._gc || h.vars.onRepeat && (h._cycle = C, h._locked = !1, h._callback("onRepeat")), p !== h._time) return;
                if (T && (h._cycle = b, h._locked = !0, p = w ? m + 1e-4 : -1e-4, h.render(p, !0, !1)), h._locked = !1, h._paused && !x) return;
                h._time = S, h._totalTime = A, h._cycle = C, h._rawPrevTime = D
              }
              if (h._time !== p && h._first || n || o || u) {
                if (h._initted || (h._initted = !0), h._active || !h._paused && h._totalTime !== g && 0 < e && (h._active = !0), 0 === g && h.vars.onStart && (0 === h._totalTime && h._totalDuration || t || h._callback("onStart")), p <= (c = h._time))
                  for (i = h._first; i && (s = i._next, c === h._time && (!h._paused || x));)(i._active || i._startTime <= h._time && !i._paused && !i._gc) && (u === i && (h.pause(), h._pauseTime = f), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)), i = s;
                else
                  for (i = h._last; i && (s = i._prev, c === h._time && (!h._paused || x));) {
                    if (i._active || i._startTime <= p && !i._paused && !i._gc) {
                      if (u === i) {
                        for (u = i._prev; u && u.endTime() > h._time;) u.render(u._reversed ? u.totalDuration() - (e - u._startTime) * u._timeScale : (e - u._startTime) * u._timeScale, t, n), u = u._prev;
                        u = null, h.pause(), h._pauseTime = f
                      }
                      i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)
                    }
                    i = s
                  }
                h._onUpdate && (t || (k.length && B(), h._callback("onUpdate"))), a && (h._locked || h._gc || _ !== h._startTime && v === h._timeScale || (0 === h._time || d >= h.totalDuration()) && (r && (k.length && B(), h._timeline.autoRemoveChildren && h._enabled(!1, !1), h._active = !1), !t && h.vars[a] && h._callback(a)))
              } else g !== h._totalTime && h._onUpdate && (t || h._callback("onUpdate"))
            }, r.getActive = function (e, t, n) {
              var i, r, s = [],
                a = this.getChildren(e || null == e, t || null == e, !!n),
                o = 0,
                l = a.length;
              for (i = 0; i < l; i++)(r = a[i]).isActive() && (s[o++] = r);
              return s
            }, r.getLabelAfter = function (e) {
              e || 0 !== e && (e = this._time);
              var t, n = this.getLabelsArray(),
                i = n.length;
              for (t = 0; t < i; t++)
                if (n[t].time > e) return n[t].name;
              return null
            }, r.getLabelBefore = function (e) {
              null == e && (e = this._time);
              for (var t = this.getLabelsArray(), n = t.length; - 1 < --n;)
                if (t[n].time < e) return t[n].name;
              return null
            }, r.getLabelsArray = function () {
              var e, t = [],
                n = 0;
              for (e in this._labels) t[n++] = {
                time: this._labels[e],
                name: e
              };
              return t.sort(function (e, t) {
                return e.time - t.time
              }), t
            }, r.invalidate = function () {
              return this._locked = !1, t.prototype.invalidate.call(this)
            }, r.progress = function (e, t) {
              return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0
            }, r.totalProgress = function (e, t) {
              return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration() || 0
            }, r.totalDuration = function (e) {
              return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, r.time = function (e, t) {
              if (!arguments.length) return this._time;
              this._dirty && this.totalDuration();
              var n = this._duration,
                i = this._cycle,
                r = i * (n + this._repeatDelay);
              return n < e && (e = n), this.totalTime(this._yoyo && 1 & i ? n - e + r : this._repeat ? e + r : e, t)
            }, r.repeat = function (e) {
              return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
            }, r.repeatDelay = function (e) {
              return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
            }, r.yoyo = function (e) {
              return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, r.currentLabel = function (e) {
              return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + P)
            }, n
          }, !0), A = 180 / Math.PI, b = [], w = [], T = [], _ = {}, n = at._gsDefine.globals, v = function (e, t, n, i) {
            n === i && (n = i - (i - t) / 1e6), e === t && (t = e + (n - e) / 1e6), this.a = e, this.b = t, this.c = n, this.d = i, this.da = i - e, this.ca = n - e, this.ba = t - e
          }, C = function (e, t, n, i) {
            var r = {
                a: e
              },
              s = {},
              a = {},
              o = {
                c: i
              },
              l = (e + t) / 2,
              u = (t + n) / 2,
              c = (n + i) / 2,
              f = (l + u) / 2,
              h = (u + c) / 2,
              p = (h - f) / 8;
            return r.b = l + (e - l) / 4, s.b = f + p, r.c = s.a = (r.b + s.b) / 2, s.c = a.a = (f + h) / 2, a.b = h - p, o.b = c + (i - c) / 4, a.c = o.a = (a.b + o.b) / 2, [r, s, a, o]
          }, y = function (e, t, n, i, r) {
            var s, a, o, l, u, c, f, h, p, d, m, g, _, v = e.length - 1,
              y = 0,
              x = e[0].a;
            for (s = 0; s < v; s++) a = (u = e[y]).a, o = u.d, l = e[y + 1].d, h = r ? (m = b[s], _ = ((g = w[s]) + m) * t * .25 / (i ? .5 : T[s] || .5), o - ((c = o - (o - a) * (i ? .5 * t : 0 !== m ? _ / m : 0)) + (((f = o + (l - o) * (i ? .5 * t : 0 !== g ? _ / g : 0)) - c) * (3 * m / (m + g) + .5) / 4 || 0))) : o - ((c = o - (o - a) * t * .5) + (f = o + (l - o) * t * .5)) / 2, c += h, f += h, u.c = p = c, u.b = 0 !== s ? x : x = u.a + .6 * (u.c - u.a), u.da = o - a, u.ca = p - a, u.ba = x - a, n ? (d = C(a, x, p, o), e.splice(y, 1, d[0], d[1], d[2], d[3]), y += 4) : y++, x = f;
            (u = e[y]).b = x, u.c = x + .4 * (u.d - x), u.da = u.d - u.a, u.ca = u.c - u.a, u.ba = x - u.a, n && (d = C(u.a, x, u.c, u.d), e.splice(y, 1, d[0], d[1], d[2], d[3]))
          }, x = function (e, t, n, i) {
            var r, s, a, o, l, u, c = [];
            if (i)
              for (s = (e = [i].concat(e)).length; - 1 < --s;) "string" == typeof (u = e[s][t]) && "=" === u.charAt(1) && (e[s][t] = i[t] + Number(u.charAt(0) + u.substr(2)));
            if ((r = e.length - 2) < 0) return c[0] = new v(e[0][t], 0, 0, e[0][t]), c;
            for (s = 0; s < r; s++) a = e[s][t], o = e[s + 1][t], c[s] = new v(a, 0, 0, o), n && (l = e[s + 2][t], b[s] = (b[s] || 0) + (o - a) * (o - a), w[s] = (w[s] || 0) + (l - o) * (l - o));
            return c[s] = new v(e[s][t], 0, 0, e[s + 1][t]), c
          }, p = function (e, t, n, i, r, s) {
            var a, o, l, u, c, f, h, p, d = {},
              m = [],
              g = s || e[0];
            for (o in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == t && (t = 1), e[0]) m.push(o);
            if (1 < e.length) {
              for (p = e[e.length - 1], h = !0, a = m.length; - 1 < --a;)
                if (o = m[a], .05 < Math.abs(g[o] - p[o])) {
                  h = !1;
                  break
                }
              h && (e = e.concat(), s && e.unshift(s), e.push(e[1]), s = e[e.length - 3])
            }
            for (b.length = w.length = T.length = 0, a = m.length; - 1 < --a;) o = m[a], _[o] = -1 !== r.indexOf("," + o + ","), d[o] = x(e, o, _[o], s);
            for (a = b.length; - 1 < --a;) b[a] = Math.sqrt(b[a]), w[a] = Math.sqrt(w[a]);
            if (!i) {
              for (a = m.length; - 1 < --a;)
                if (_[o])
                  for (f = (l = d[m[a]]).length - 1, u = 0; u < f; u++) c = l[u + 1].da / w[u] + l[u].da / b[u] || 0, T[u] = (T[u] || 0) + c * c;
              for (a = T.length; - 1 < --a;) T[a] = Math.sqrt(T[a])
            }
            for (a = m.length, u = n ? 4 : 1; - 1 < --a;) l = d[o = m[a]], y(l, t, n, i, _[o]), h && (l.splice(0, u), l.splice(l.length - u, u));
            return d
          }, d = function (e, t, n) {
            for (var i, r, s, a, o, l, u, c, f, h, p, d = 1 / n, m = e.length; - 1 < --m;)
              for (s = (h = e[m]).a, a = h.d - s, o = h.c - s, l = h.b - s, i = r = 0, c = 1; c <= n; c++) i = r - (r = ((u = d * c) * u * a + 3 * (f = 1 - u) * (u * o + f * l)) * u), t[p = m * n + c - 1] = (t[p] || 0) + i * i
          }, g = at._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.9",
            API: 2,
            global: !0,
            init: function (e, t, n) {
              this._target = e, t instanceof Array && (t = {
                values: t
              }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
              var i, r, s, a, o, l = t.values || [],
                u = {},
                c = l[0],
                f = t.autoRotate || n.vars.orientToBezier;
              for (i in this._autoRotate = f ? f instanceof Array ? f : [
                  ["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]
                ] : null, c) this._props.push(i);
              for (s = this._props.length; - 1 < --s;) i = this._props[s], this._overwriteProps.push(i), r = this._func[i] = "function" == typeof e[i], u[i] = r ? e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(e[i]), o || u[i] !== l[0][i] && (o = u);
              if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? p(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, o) : function (e, t, n) {
                  var i, r, s, a, o, l, u, c, f, h, p, d = {},
                    m = "cubic" === (t = t || "soft") ? 3 : 2,
                    g = "soft" === t,
                    _ = [];
                  if (g && n && (e = [n].concat(e)), null == e || e.length < 1 + m) throw "invalid Bezier data";
                  for (f in e[0]) _.push(f);
                  for (l = _.length; - 1 < --l;) {
                    for (d[f = _[l]] = o = [], h = 0, c = e.length, u = 0; u < c; u++) i = null == n ? e[u][f] : "string" == typeof (p = e[u][f]) && "=" === p.charAt(1) ? n[f] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && 1 < u && u < c - 1 && (o[h++] = (i + o[h - 2]) / 2), o[h++] = i;
                    for (c = h - m + 1, u = h = 0; u < c; u += m) i = o[u], r = o[u + 1], s = o[u + 2], a = 2 == m ? 0 : o[u + 3], o[h++] = p = 3 == m ? new v(i, r, s, a) : new v(i, (2 * r + i) / 3, (2 * r + s) / 3, s);
                    o.length = h
                  }
                  return d
                }(l, t.type, u), this._segCount = this._beziers[i].length, this._timeRes) {
                var h = function (e, t) {
                  var n, i, r, s, a = [],
                    o = [],
                    l = 0,
                    u = 0,
                    c = (t = t >> 0 || 6) - 1,
                    f = [],
                    h = [];
                  for (n in e) d(e[n], a, t);
                  for (r = a.length, i = 0; i < r; i++) l += Math.sqrt(a[i]), h[s = i % t] = l, s === c && (u += l, f[s = i / t >> 0] = h, o[s] = u, l = 0, h = []);
                  return {
                    length: u,
                    lengths: o,
                    segments: f
                  }
                }(this._beziers, this._timeRes);
                this._length = h.length, this._lengths = h.lengths, this._segments = h.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
              }
              if (f = this._autoRotate)
                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), s = f.length; - 1 < --s;) {
                  for (a = 0; a < 3; a++) i = f[s][a], this._func[i] = "function" == typeof e[i] && e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)];
                  i = f[s][2], this._initialRotations[s] = (this._func[i] ? this._func[i].call(this._target) : this._target[i]) || 0, this._overwriteProps.push(i)
                }
              return this._startRatio = n.vars.runBackwards ? 1 : 0, !0
            },
            set: function (e) {
              var t, n, i, r, s, a, o, l, u, c, f, h = this._segCount,
                p = this._func,
                d = this._target,
                m = e !== this._startRatio;
              if (this._timeRes) {
                if (u = this._lengths, c = this._curSeg, f = e * this._length, i = this._li, f > this._l2 && i < h - 1) {
                  for (l = h - 1; i < l && (this._l2 = u[++i]) <= f;);
                  this._l1 = u[i - 1], this._li = i, this._curSeg = c = this._segments[i], this._s2 = c[this._s1 = this._si = 0]
                } else if (f < this._l1 && 0 < i) {
                  for (; 0 < i && (this._l1 = u[--i]) >= f;);
                  0 === i && f < this._l1 ? this._l1 = 0 : i++, this._l2 = u[i], this._li = i, this._curSeg = c = this._segments[i], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                }
                if (t = i, f -= this._l1, i = this._si, f > this._s2 && i < c.length - 1) {
                  for (l = c.length - 1; i < l && (this._s2 = c[++i]) <= f;);
                  this._s1 = c[i - 1], this._si = i
                } else if (f < this._s1 && 0 < i) {
                  for (; 0 < i && (this._s1 = c[--i]) >= f;);
                  0 === i && f < this._s1 ? this._s1 = 0 : i++, this._s2 = c[i], this._si = i
                }
                a = 1 === e ? 1 : (i + (f - this._s1) / (this._s2 - this._s1)) * this._prec || 0
              } else a = (e - (t = e < 0 ? 0 : 1 <= e ? h - 1 : h * e >> 0) * (1 / h)) * h;
              for (n = 1 - a, i = this._props.length; - 1 < --i;) r = this._props[i], o = (a * a * (s = this._beziers[r][t]).da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a, this._mod[r] && (o = this._mod[r](o, d)), p[r] ? d[r](o) : d[r] = o;
              if (this._autoRotate) {
                var g, _, v, y, x, b, w, T = this._autoRotate;
                for (i = T.length; - 1 < --i;) r = T[i][2], b = T[i][3] || 0, w = !0 === T[i][4] ? 1 : A, s = this._beziers[T[i][0]], g = this._beziers[T[i][1]], s && g && (s = s[t], g = g[t], _ = s.a + (s.b - s.a) * a, _ += ((y = s.b + (s.c - s.b) * a) - _) * a, y += (s.c + (s.d - s.c) * a - y) * a, v = g.a + (g.b - g.a) * a, v += ((x = g.b + (g.c - g.b) * a) - v) * a, x += (g.c + (g.d - g.c) * a - x) * a, o = m ? Math.atan2(x - v, y - _) * w + b : this._initialRotations[i], this._mod[r] && (o = this._mod[r](o, d)), p[r] ? d[r](o) : d[r] = o)
              }
            }
          }), e = g.prototype, g.bezierThrough = p, g.cubicToQuadratic = C, g._autoCSS = !0, g.quadraticToCubic = function (e, t, n) {
            return new v(e, (2 * t + e) / 3, (2 * t + n) / 3, n)
          }, g._cssRegister = function () {
            var e = n.CSSPlugin;
            if (e) {
              var t = e._internals,
                p = t._parseToProxy,
                d = t._setPluginRatio,
                m = t.CSSPropTween;
              t._registerComplexSpecialProp("bezier", {
                parser: function (e, t, n, i, r, s) {
                  t instanceof Array && (t = {
                    values: t
                  }), s = new g;
                  var a, o, l, u = t.values,
                    c = u.length - 1,
                    f = [],
                    h = {};
                  if (c < 0) return r;
                  for (a = 0; a <= c; a++) l = p(e, u[a], i, r, s, c !== a), f[a] = l.end;
                  for (o in t) h[o] = t[o];
                  return h.values = f, (r = new m(e, "bezier", 0, 0, l.pt, 2)).data = l, r.plugin = s, r.setRatio = d, 0 === h.autoRotate && (h.autoRotate = !0), !h.autoRotate || h.autoRotate instanceof Array || (a = !0 === h.autoRotate ? 0 : Number(h.autoRotate), h.autoRotate = null != l.end.left ? [
                    ["left", "top", "rotation", a, !1]
                  ] : null != l.end.x && [
                    ["x", "y", "rotation", a, !1]
                  ]), h.autoRotate && (i._transform || i._enableTransforms(!1), l.autoRotate = i._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, i._overwriteProps.push("rotation")), s._onInitTween(l.proxy, h, i._tween), r
                }
              })
            }
          }, e._mod = function (e) {
            for (var t, n = this._overwriteProps, i = n.length; - 1 < --i;)(t = e[n[i]]) && "function" == typeof t && (this._mod[n[i]] = t)
          }, e._kill = function (e) {
            var t, n, i = this._props;
            for (t in this._beziers)
              if (t in e)
                for (delete this._beziers[t], delete this._func[t], n = i.length; - 1 < --n;) i[n] === t && i.splice(n, 1);
            if (i = this._autoRotate)
              for (n = i.length; - 1 < --n;) e[i[n][2]] && i.splice(n, 1);
            return this._super._kill.call(this, e)
          }, at._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (s, z) {
            var d, A, C, m, F = function e() {
                s.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = e.prototype.setRatio
              },
              u = at._gsDefine.globals,
              g = {},
              e = F.prototype = new s("css");
            (e.constructor = F).version = "2.1.3", F.API = 2, F.defaultTransformPerspective = 0, F.defaultSkewType = "compensated", F.defaultSmoothOrigin = !0, F.suffixMap = {
              top: e = "px",
              right: e,
              bottom: e,
              left: e,
              width: e,
              height: e,
              fontSize: e,
              padding: e,
              margin: e,
              perspective: e,
              lineHeight: ""
            };
            var S, _, v, H, y, D, P, k, t, n, B = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
              E = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
              x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
              r = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
              c = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
              O = /(?:\d|\-|\+|=|#|\.)*/g,
              R = /opacity *= *([^)]*)/i,
              b = /opacity:([^;]*)/i,
              a = /alpha\(opacity *=.+?\)/i,
              w = /^(rgb|hsl)/,
              o = /([A-Z])/g,
              l = /-([a-z])/gi,
              T = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
              f = function (e, t) {
                return t.toUpperCase()
              },
              p = /(?:Left|Right|Width)/i,
              h = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
              j = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
              M = /,(?=[^\)]*(?:\(|$))/gi,
              N = /[\s,\(]/i,
              W = Math.PI / 180,
              X = 180 / Math.PI,
              L = {},
              i = {
                style: {}
              },
              I = at.document || {
                createElement: function () {
                  return i
                }
              },
              q = function (e, t) {
                var n = I.createElementNS ? I.createElementNS(t || "http://www.w3.org/1999/xhtml", e) : I.createElement(e);
                return n.style ? n : I.createElement(e)
              },
              $ = q("div"),
              U = q("img"),
              Y = F._internals = {
                _specialProps: g
              },
              V = (at.navigator || {}).userAgent || "",
              G = (t = V.indexOf("Android"), n = q("a"), v = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === t || 3 < parseFloat(V.substr(t + 8, 2))), y = v && parseFloat(V.substr(V.indexOf("Version/") + 8, 2)) < 6, H = -1 !== V.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (D = parseFloat(RegExp.$1)), !!n && (n.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(n.style.opacity))),
              Q = function (e) {
                return R.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
              },
              Z = function (e) {
                at.console && console.log(e)
              },
              J = "",
              K = "",
              ee = function (e, t) {
                var n, i, r = (t = t || $).style;
                if (void 0 !== r[e]) return e;
                for (e = e.charAt(0).toUpperCase() + e.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; - 1 < --i && void 0 === r[n[i] + e];);
                return 0 <= i ? (J = "-" + (K = 3 === i ? "ms" : n[i]).toLowerCase() + "-", K + e) : null
              },
              te = "undefined" != typeof window ? window : I.defaultView || {
                getComputedStyle: function () {}
              },
              ne = function (e) {
                return te.getComputedStyle(e)
              },
              ie = F.getStyle = function (e, t, n, i, r) {
                var s;
                return G || "opacity" !== t ? (!i && e.style[t] ? s = e.style[t] : (n = n || ne(e)) ? s = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(o, "-$1").toLowerCase()) : e.currentStyle && (s = e.currentStyle[t]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : Q(e)
              },
              re = Y.convertToPixels = function (e, t, n, i, r) {
                if ("px" === i || !i && "lineHeight" !== t) return n;
                if ("auto" === i || !n) return 0;
                var s, a, o, l = p.test(t),
                  u = e,
                  c = $.style,
                  f = n < 0,
                  h = 1 === n;
                if (f && (n = -n), h && (n *= 100), "lineHeight" !== t || i)
                  if ("%" === i && -1 !== t.indexOf("border")) s = n / 100 * (l ? e.clientWidth : e.clientHeight);
                  else {
                    if (c.cssText = "border:0 solid red;position:" + ie(e, "position") + ";line-height:0;", "%" !== i && u.appendChild && "v" !== i.charAt(0) && "rem" !== i) c[l ? "borderLeftWidth" : "borderTopWidth"] = n + i;
                    else {
                      if (u = e.parentNode || I.body, -1 !== ie(u, "display").indexOf("flex") && (c.position = "absolute"), a = u._gsCache, o = z.ticker.frame, a && l && a.time === o) return a.width * n / 100;
                      c[l ? "width" : "height"] = n + i
                    }
                    u.appendChild($), s = parseFloat($[l ? "offsetWidth" : "offsetHeight"]), u.removeChild($), l && "%" === i && !1 !== F.cacheWidths && ((a = u._gsCache = u._gsCache || {}).time = o, a.width = s / n * 100), 0 !== s || r || (s = re(e, t, n, i, !0))
                  }
                else a = ne(e).lineHeight, e.style.lineHeight = n, s = parseFloat(ne(e).lineHeight), e.style.lineHeight = a;
                return h && (s /= 100), f ? -s : s
              },
              se = Y.calculateOffset = function (e, t, n) {
                if ("absolute" !== ie(e, "position", n)) return 0;
                var i = "left" === t ? "Left" : "Top",
                  r = ie(e, "margin" + i, n);
                return e["offset" + i] - (re(e, t, parseFloat(r), r.replace(O, "")) || 0)
              },
              ae = function (e, t) {
                var n, i, r, s = {};
                if (t = t || ne(e))
                  if (n = t.length)
                    for (; - 1 < --n;) - 1 !== (r = t[n]).indexOf("-transform") && Le !== r || (s[r.replace(l, f)] = t.getPropertyValue(r));
                  else
                    for (n in t) - 1 !== n.indexOf("Transform") && Ne !== n || (s[n] = t[n]);
                else if (t = e.currentStyle || e.style)
                  for (n in t) "string" == typeof n && void 0 === s[n] && (s[n.replace(l, f)] = t[n]);
                return G || (s.opacity = Q(e)), i = Qe(e, t, !1), s.rotation = i.rotation, s.skewX = i.skewX, s.scaleX = i.scaleX, s.scaleY = i.scaleY, s.x = i.x, s.y = i.y, qe && (s.z = i.z, s.rotationX = i.rotationX, s.rotationY = i.rotationY, s.scaleZ = i.scaleZ), s.filters && delete s.filters, s
              },
              oe = function (e, t, n, i, r) {
                var s, a, o, l = {},
                  u = e.style;
                for (a in n) "cssText" !== a && "length" !== a && isNaN(a) && (t[a] !== (s = n[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" != typeof s && "string" != typeof s || (l[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof t[a] || "" === t[a].replace(c, "") ? s : 0 : se(e, a), void 0 !== u[a] && (o = new we(u, a, u[a], o))));
                if (i)
                  for (a in i) "className" !== a && (l[a] = i[a]);
                return {
                  difs: l,
                  firstMPT: o
                }
              },
              le = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
              },
              ue = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
              ce = function (e, t, n) {
                if ("svg" === (e.nodeName + "").toLowerCase()) return (n || ne(e))[t] || 0;
                if (e.getCTM && Ye(e)) return e.getBBox()[t] || 0;
                var i = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                  r = le[t],
                  s = r.length;
                for (n = n || ne(e); - 1 < --s;) i -= parseFloat(ie(e, "padding" + r[s], n, !0)) || 0, i -= parseFloat(ie(e, "border" + r[s] + "Width", n, !0)) || 0;
                return i
              },
              fe = function e(t, n) {
                if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                null != t && "" !== t || (t = "0 0");
                var i, r = t.split(" "),
                  s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : r[0],
                  a = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : r[1];
                if (3 < r.length && !n) {
                  for (r = t.split(", ").join(",").split(","), t = [], i = 0; i < r.length; i++) t.push(e(r[i]));
                  return t.join(",")
                }
                return null == a ? a = "center" === s ? "50%" : "0" : "center" === a && (a = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + a + (2 < r.length ? " " + r[2] : ""), n && (n.oxp = -1 !== s.indexOf("%"), n.oyp = -1 !== a.indexOf("%"), n.oxr = "=" === s.charAt(1), n.oyr = "=" === a.charAt(1), n.ox = parseFloat(s.replace(c, "")), n.oy = parseFloat(a.replace(c, "")), n.v = t), n || t
              },
              he = function (e, t) {
                return "function" == typeof e && (e = e(k, P)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
              },
              pe = function (e, t) {
                "function" == typeof e && (e = e(k, P));
                var n = "string" == typeof e && "=" === e.charAt(1);
                return "string" == typeof e && "v" === e.charAt(e.length - 2) && (e = (n ? e.substr(0, 2) : 0) + window["inner" + ("vh" === e.substr(-2) ? "Height" : "Width")] * (parseFloat(n ? e.substr(2) : e) / 100)), null == e ? t : n ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
              },
              de = function (e, t, n, i) {
                var r, s, a, o, l;
                return "function" == typeof e && (e = e(k, P)), (o = null == e ? t : "number" == typeof e ? e : (r = 360, s = e.split("_"), a = ((l = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === e.indexOf("rad") ? 1 : X) - (l ? 0 : t), s.length && (i && (i[n] = t + a), -1 !== e.indexOf("short") && (a %= r) !== a % 180 && (a = a < 0 ? a + r : a - r), -1 !== e.indexOf("_cw") && a < 0 ? a = (a + 3599999999640) % r - (a / r | 0) * r : -1 !== e.indexOf("ccw") && 0 < a && (a = (a - 3599999999640) % r - (a / r | 0) * r)), t + a)) < 1e-6 && -1e-6 < o && (o = 0), o
              },
              me = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
              },
              ge = function (e, t, n) {
                return 255 * (6 * (e = e < 0 ? e + 1 : 1 < e ? e - 1 : e) < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) + .5 | 0
              },
              _e = F.parseColor = function (e, t) {
                var n, i, r, s, a, o, l, u, c, f, h;
                if (e)
                  if ("number" == typeof e) n = [e >> 16, e >> 8 & 255, 255 & e];
                  else {
                    if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), me[e]) n = me[e];
                    else if ("#" === e.charAt(0)) 4 === e.length && (e = "#" + (i = e.charAt(1)) + i + (r = e.charAt(2)) + r + (s = e.charAt(3)) + s), n = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                    else if ("hsl" === e.substr(0, 3))
                      if (n = h = e.match(B), t) {
                        if (-1 !== e.indexOf("=")) return e.match(E)
                      } else a = Number(n[0]) % 360 / 360, o = Number(n[1]) / 100, i = 2 * (l = Number(n[2]) / 100) - (r = l <= .5 ? l * (o + 1) : l + o - l * o), 3 < n.length && (n[3] = Number(n[3])), n[0] = ge(a + 1 / 3, i, r), n[1] = ge(a, i, r), n[2] = ge(a - 1 / 3, i, r);
                    else n = e.match(B) || me.transparent;
                    n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), 3 < n.length && (n[3] = Number(n[3]))
                  }
                else n = me.black;
                return t && !h && (i = n[0] / 255, r = n[1] / 255, s = n[2] / 255, l = ((u = Math.max(i, r, s)) + (c = Math.min(i, r, s))) / 2, u === c ? a = o = 0 : (f = u - c, o = .5 < l ? f / (2 - u - c) : f / (u + c), a = u === i ? (r - s) / f + (r < s ? 6 : 0) : u === r ? (s - i) / f + 2 : (i - r) / f + 4, a *= 60), n[0] = a + .5 | 0, n[1] = 100 * o + .5 | 0, n[2] = 100 * l + .5 | 0), n
              },
              ve = function (e, t) {
                var n, i, r, s = e.match(ye) || [],
                  a = 0,
                  o = "";
                if (!s.length) return e;
                for (n = 0; n < s.length; n++) i = s[n], a += (r = e.substr(a, e.indexOf(i, a) - a)).length + i.length, 3 === (i = _e(i, t)).length && i.push(1), o += r + (t ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
                return o + e.substr(a)
              },
              ye = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (e in me) ye += "|" + e + "\\b";
            ye = new RegExp(ye + ")", "gi"), F.colorStringFilter = function (e) {
              var t, n = e[0] + " " + e[1];
              ye.test(n) && (t = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla("), e[0] = ve(e[0], t), e[1] = ve(e[1], t)), ye.lastIndex = 0
            }, z.defaultStringFilter || (z.defaultStringFilter = F.colorStringFilter);
            var xe = function (e, t, s, a) {
                if (null == e) return function (e) {
                  return e
                };
                var o, l = t ? (e.match(ye) || [""])[0] : "",
                  u = e.split(l).join("").match(x) || [],
                  c = e.substr(0, e.indexOf(u[0])),
                  f = ")" === e.charAt(e.length - 1) ? ")" : "",
                  h = -1 !== e.indexOf(" ") ? " " : ",",
                  p = u.length,
                  d = 0 < p ? u[0].replace(B, "") : "";
                return p ? o = t ? function (e) {
                  var t, n, i, r;
                  if ("number" == typeof e) e += d;
                  else if (a && M.test(e)) {
                    for (r = e.replace(M, "|").split("|"), i = 0; i < r.length; i++) r[i] = o(r[i]);
                    return r.join(",")
                  }
                  if (t = (e.match(ye) || [l])[0], i = (n = e.split(t).join("").match(x) || []).length, p > i--)
                    for (; ++i < p;) n[i] = s ? n[(i - 1) / 2 | 0] : u[i];
                  return c + n.join(h) + h + t + f + (-1 !== e.indexOf("inset") ? " inset" : "")
                } : function (e) {
                  var t, n, i;
                  if ("number" == typeof e) e += d;
                  else if (a && M.test(e)) {
                    for (n = e.replace(M, "|").split("|"), i = 0; i < n.length; i++) n[i] = o(n[i]);
                    return n.join(",")
                  }
                  if (i = (t = e.match("," == h ? x : r) || []).length, p > i--)
                    for (; ++i < p;) t[i] = s ? t[(i - 1) / 2 | 0] : u[i];
                  return (c && "none" !== e && e.substr(0, e.indexOf(t[0])) || c) + t.join(h) + f
                } : function (e) {
                  return e
                }
              },
              be = function (u) {
                return u = u.split(","),
                  function (e, t, n, i, r, s, a) {
                    var o, l = (t + "").split(" ");
                    for (a = {}, o = 0; o < 4; o++) a[u[o]] = l[o] = l[o] || l[(o - 1) / 2 >> 0];
                    return i.parse(e, a, r, s)
                  }
              },
              we = (Y._setPluginRatio = function (e) {
                this.plugin.setRatio(e);
                for (var t, n, i, r, s, a = this.data, o = a.proxy, l = a.firstMPT; l;) t = o[l.v], l.r ? t = l.r(t) : t < 1e-6 && -1e-6 < t && (t = 0), l.t[l.p] = t, l = l._next;
                if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod.call(this._tween, o.rotation, this.t, this._tween) : o.rotation), 1 === e || 0 === e)
                  for (l = a.firstMPT, s = 1 === e ? "e" : "b"; l;) {
                    if ((n = l.t).type) {
                      if (1 === n.type) {
                        for (r = n.xs0 + n.s + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                        n[s] = r
                      }
                    } else n[s] = n.s + n.xs0;
                    l = l._next
                  }
              }, function (e, t, n, i, r) {
                this.t = e, this.p = t, this.v = n, this.r = r, i && ((i._prev = this)._next = i)
              }),
              Te = (Y._parseToProxy = function (e, t, n, i, r, s) {
                var a, o, l, u, c, f = i,
                  h = {},
                  p = {},
                  d = n._transform,
                  m = L;
                for (n._transform = null, L = t, i = c = n.parse(e, t, i, r), L = m, s && (n._transform = d, f && (f._prev = null, f._prev && (f._prev._next = null))); i && i !== f;) {
                  if (i.type <= 1 && (p[o = i.p] = i.s + i.c, h[o] = i.s, s || (u = new we(i, "s", o, u, i.r), i.c = 0), 1 === i.type))
                    for (a = i.l; 0 < --a;) l = "xn" + a, p[o = i.p + "_" + l] = i.data[l], h[o] = i[l], s || (u = new we(i, l, o, u, i.rxp[l]));
                  i = i._next
                }
                return {
                  proxy: h,
                  end: p,
                  firstMPT: u,
                  pt: c
                }
              }, Y.CSSPropTween = function (e, t, n, i, r, s, a, o, l, u, c) {
                this.t = e, this.p = t, this.s = n, this.c = i, this.n = a || t, e instanceof Te || m.push(this.n), this.r = o ? "function" == typeof o ? o : Math.round : o, this.type = s || 0, l && (this.pr = l, d = !0), this.b = void 0 === u ? n : u, this.e = void 0 === c ? n + i : c, r && ((this._next = r)._prev = this)
              }),
              Ae = function (e, t, n, i, r, s) {
                var a = new Te(e, t, n, i - n, r, -1, s);
                return a.b = n, a.e = a.xs0 = i, a
              },
              Ce = F.parseComplex = function (e, t, n, i, r, s, a, o, l, u) {
                n = n || s || "", "function" == typeof i && (i = i(k, P)), a = new Te(e, t, 0, 0, a, u ? 2 : 1, null, !1, o, n, i), i += "", r && ye.test(i + n) && (F.colorStringFilter(i = [n, i]), n = i[0], i = i[1]);
                var c, f, h, p, d, m, g, _, v, y, x, b, w, T = n.split(", ").join(",").split(" "),
                  A = i.split(", ").join(",").split(" "),
                  C = T.length,
                  D = !1 !== S;
                for (-1 === i.indexOf(",") && -1 === n.indexOf(",") || (A = -1 !== (i + n).indexOf("rgb") || -1 !== (i + n).indexOf("hsl") ? (T = T.join(" ").replace(M, ", ").split(" "), A.join(" ").replace(M, ", ").split(" ")) : (T = T.join(" ").split(",").join(", ").split(" "), A.join(" ").split(",").join(", ").split(" ")), C = T.length), C !== A.length && (C = (T = (s || "").split(" ")).length), a.plugin = l, a.setRatio = u, c = ye.lastIndex = 0; c < C; c++)
                  if (p = T[c], d = A[c] + "", (_ = parseFloat(p)) || 0 === _) a.appendXtra("", _, he(d, _), d.replace(E, ""), D && -1 !== d.indexOf("px") && Math.round, !0);
                  else if (r && ye.test(p)) b = ")" + ((b = d.indexOf(")") + 1) ? d.substr(b) : ""), w = -1 !== d.indexOf("hsl") && G, y = d, p = _e(p, w), d = _e(d, w), (v = 6 < p.length + d.length) && !G && 0 === d[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(A[c]).join("transparent")) : (G || (v = !1), w ? a.appendXtra(y.substr(0, y.indexOf("hsl")) + (v ? "hsla(" : "hsl("), p[0], he(d[0], p[0]), ",", !1, !0).appendXtra("", p[1], he(d[1], p[1]), "%,", !1).appendXtra("", p[2], he(d[2], p[2]), v ? "%," : "%" + b, !1) : a.appendXtra(y.substr(0, y.indexOf("rgb")) + (v ? "rgba(" : "rgb("), p[0], d[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], d[1] - p[1], ",", Math.round).appendXtra("", p[2], d[2] - p[2], v ? "," : b, Math.round), v && (p = p.length < 4 ? 1 : p[3], a.appendXtra("", p, (d.length < 4 ? 1 : d[3]) - p, b, !1))), ye.lastIndex = 0;
                else if (m = p.match(B)) {
                  if (!(g = d.match(E)) || g.length !== m.length) return a;
                  for (f = h = 0; f < m.length; f++) x = m[f], y = p.indexOf(x, h), a.appendXtra(p.substr(h, y - h), Number(x), he(g[f], x), "", D && "px" === p.substr(y + x.length, 2) && Math.round, 0 === f), h = y + x.length;
                  a["xs" + a.l] += p.substr(h)
                } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + d : d;
                if (-1 !== i.indexOf("=") && a.data) {
                  for (b = a.xs0 + a.data.s, c = 1; c < a.l; c++) b += a["xs" + c] + a.data["xn" + c];
                  a.e = b + a["xs" + c]
                }
                return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
              },
              De = 9;
            for ((e = Te.prototype).l = e.pr = 0; 0 < --De;) e["xn" + De] = 0, e["xs" + De] = "";
            e.xs0 = "", e._next = e._prev = e.xfirst = e.data = e.plugin = e.setRatio = e.rxp = null, e.appendXtra = function (e, t, n, i, r, s) {
              var a = this,
                o = a.l;
              return a["xs" + o] += s && (o || a["xs" + o]) ? " " + e : e || "", n || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = i || "", 0 < o ? (a.data["xn" + o] = t + n, a.rxp["xn" + o] = r, a["xn" + o] = t, a.plugin || (a.xfirst = new Te(a, "xn" + o, t, n, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0)) : (a.data = {
                s: t + n
              }, a.rxp = {}, a.s = t, a.c = n, a.r = r), a) : (a["xs" + o] += t + (i || ""), a)
            };
            var Se = function (e, t) {
                t = t || {}, this.p = t.prefix && ee(e) || e, g[e] = g[this.p] = this, this.format = t.formatter || xe(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.allowFunc = t.allowFunc, this.pr = t.priority || 0
              },
              Pe = Y._registerComplexSpecialProp = function (e, t, n) {
                "object" !== st(t) && (t = {
                  parser: n
                });
                var i, r = e.split(","),
                  s = t.defaultValue;
                for (n = n || [s], i = 0; i < r.length; i++) t.prefix = 0 === i && t.prefix, t.defaultValue = n[i] || s, new Se(r[i], t)
              },
              ke = Y._registerPluginProp = function (e) {
                if (!g[e]) {
                  var l = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                  Pe(e, {
                    parser: function (e, t, n, i, r, s, a) {
                      var o = u.com.greensock.plugins[l];
                      return o ? (o._cssRegister(), g[n].parse(e, t, n, i, r, s, a)) : (Z("Error: " + l + " js file not loaded."), r)
                    }
                  })
                }
              };
            (e = Se.prototype).parseComplex = function (e, t, n, i, r, s) {
              var a, o, l, u, c, f, h = this.keyword;
              if (this.multi && (M.test(n) || M.test(t) ? (o = t.replace(M, "|").split("|"), l = n.replace(M, "|").split("|")) : h && (o = [t], l = [n])), l) {
                for (u = l.length > o.length ? l.length : o.length, a = 0; a < u; a++) t = o[a] = o[a] || this.dflt, n = l[a] = l[a] || this.dflt, h && (c = t.indexOf(h)) !== (f = n.indexOf(h)) && (-1 === f ? o[a] = o[a].split(h).join("") : -1 === c && (o[a] += " " + h));
                t = o.join(", "), n = l.join(", ")
              }
              return Ce(e, this.p, t, n, this.clrs, this.dflt, i, this.pr, r, s)
            }, e.parse = function (e, t, n, i, r, s, a) {
              return this.parseComplex(e.style, this.format(ie(e, this.p, C, !1, this.dflt)), this.format(t), r, s)
            }, F.registerSpecialProp = function (e, l, u) {
              Pe(e, {
                parser: function (e, t, n, i, r, s, a) {
                  var o = new Te(e, n, 0, 0, r, 2, n, !1, u);
                  return o.plugin = s, o.setRatio = l(e, t, i._tween, n), o
                },
                priority: u
              })
            }, F.useSVGTransformAttr = !0;
            var Be, Ee, Oe, Re, je, Me = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
              Ne = ee("transform"),
              Le = J + "transform",
              Ie = ee("transformOrigin"),
              qe = null !== ee("perspective"),
              ze = Y.Transform = function () {
                this.perspective = parseFloat(F.defaultTransformPerspective) || 0, this.force3D = !(!1 === F.defaultForce3D || !qe) && (F.defaultForce3D || "auto")
              },
              Fe = at.SVGElement,
              He = function (e, t, n) {
                var i, r = I.createElementNS("http://www.w3.org/2000/svg", e),
                  s = /([a-z])([A-Z])/g;
                for (i in n) r.setAttributeNS(null, i.replace(s, "$1-$2").toLowerCase(), n[i]);
                return t.appendChild(r), r
              },
              We = I.documentElement || {},
              Xe = (je = D || /Android/i.test(V) && !at.chrome, I.createElementNS && We.appendChild && !je && (Ee = He("svg", We), Re = (Oe = He("rect", Ee, {
                width: 100,
                height: 50,
                x: 100
              })).getBoundingClientRect().width, Oe.style[Ie] = "50% 50%", Oe.style[Ne] = "scaleX(0.5)", je = Re === Oe.getBoundingClientRect().width && !(H && qe), We.removeChild(Ee)), je),
              $e = function (e, t, n, i, r, s) {
                var a, o, l, u, c, f, h, p, d, m, g, _, v, y, x = e._gsTransform,
                  b = Ge(e, !0);
                x && (v = x.xOrigin, y = x.yOrigin), (!i || (a = i.split(" ")).length < 2) && (0 === (h = e.getBBox()).x && 0 === h.y && h.width + h.height === 0 && (h = {
                  x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
                  y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
                  width: 0,
                  height: 0
                }), a = [(-1 !== (t = fe(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * h.width : parseFloat(t[0])) + h.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * h.height : parseFloat(t[1])) + h.y]), n.xOrigin = u = parseFloat(a[0]), n.yOrigin = c = parseFloat(a[1]), i && b !== Ve && (f = b[0], h = b[1], p = b[2], d = b[3], m = b[4], g = b[5], (_ = f * d - h * p) && (o = u * (d / _) + c * (-p / _) + (p * g - d * m) / _, l = u * (-h / _) + c * (f / _) - (f * g - h * m) / _, u = n.xOrigin = a[0] = o, c = n.yOrigin = a[1] = l)), x && (s && (n.xOffset = x.xOffset, n.yOffset = x.yOffset, x = n), r || !1 !== r && !1 !== F.defaultSmoothOrigin ? (o = u - v, l = c - y, x.xOffset += o * b[0] + l * b[2] - o, x.yOffset += o * b[1] + l * b[3] - l) : x.xOffset = x.yOffset = 0), s || e.setAttribute("data-svg-origin", a.join(" "))
              },
              Ue = function (t) {
                try {
                  return t.getBBox()
                } catch (e) {
                  return function e(t) {
                    var n, i = q("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                      r = this.parentNode,
                      s = this.nextSibling,
                      a = this.style.cssText;
                    if (We.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                      n = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = e
                    } catch (e) {} else this._originalGetBBox && (n = this._originalGetBBox());
                    return s ? r.insertBefore(this, s) : r.appendChild(this), We.removeChild(i), this.style.cssText = a, n
                  }.call(t, !0)
                }
              },
              Ye = function (e) {
                return !(!Fe || !e.getCTM || e.parentNode && !e.ownerSVGElement || !Ue(e))
              },
              Ve = [1, 0, 0, 1, 0, 0],
              Ge = function (e, t) {
                var n, i, r, s, a, o, l, u = e._gsTransform || new ze,
                  c = e.style;
                if (Ne ? i = ie(e, Le, null, !0) : e.currentStyle && (i = (i = e.currentStyle.filter.match(h)) && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), u.x || 0, u.y || 0].join(",") : ""), n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, Ne && n && !e.offsetParent && e !== We && (s = c.display, c.display = "block", (l = e.parentNode) && e.offsetParent || (a = 1, o = e.nextSibling, We.appendChild(e)), n = !(i = ie(e, Le, null, !0)) || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, s ? c.display = s : et(c, "display"), a && (o ? l.insertBefore(e, o) : l ? l.appendChild(e) : We.removeChild(e))), (u.svg || e.getCTM && Ye(e)) && (n && -1 !== (c[Ne] + "").indexOf("matrix") && (i = c[Ne], n = 0), r = e.getAttribute("transform"), n && r && (i = "matrix(" + (r = e.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")", n = 0)), n) return Ve;
                for (r = (i || "").match(B) || [], De = r.length; - 1 < --De;) s = Number(r[De]), r[De] = (a = s - (s |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + s : s;
                return t && 6 < r.length ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
              },
              Qe = Y.getTransform = function (e, t, n, i) {
                if (e._gsTransform && n && !i) return e._gsTransform;
                var r, s, a, o, l, u, c = n && e._gsTransform || new ze,
                  f = c.scaleX < 0,
                  h = qe && (parseFloat(ie(e, Ie, t, !1, "0 0 0").split(" ")[2]) || c.zOrigin) || 0,
                  p = parseFloat(F.defaultTransformPerspective) || 0;
                if (c.svg = !(!e.getCTM || !Ye(e)), c.svg && ($e(e, ie(e, Ie, t, !1, "50% 50%") + "", c, e.getAttribute("data-svg-origin")), Be = F.useSVGTransformAttr || Xe), (r = Ge(e)) !== Ve) {
                  if (16 === r.length) {
                    var d, m, g, _, v, y = r[0],
                      x = r[1],
                      b = r[2],
                      w = r[3],
                      T = r[4],
                      A = r[5],
                      C = r[6],
                      D = r[7],
                      S = r[8],
                      P = r[9],
                      k = r[10],
                      B = r[12],
                      E = r[13],
                      O = r[14],
                      R = r[11],
                      j = Math.atan2(C, k);
                    c.zOrigin && (B = S * (O = -c.zOrigin) - r[12], E = P * O - r[13], O = k * O + c.zOrigin - r[14]), c.rotationX = j * X, j && (d = T * (_ = Math.cos(-j)) + S * (v = Math.sin(-j)), m = A * _ + P * v, g = C * _ + k * v, S = T * -v + S * _, P = A * -v + P * _, k = C * -v + k * _, R = D * -v + R * _, T = d, A = m, C = g), j = Math.atan2(-b, k), c.rotationY = j * X, j && (m = x * (_ = Math.cos(-j)) - P * (v = Math.sin(-j)), g = b * _ - k * v, P = x * v + P * _, k = b * v + k * _, R = w * v + R * _, y = d = y * _ - S * v, x = m, b = g), j = Math.atan2(x, y), c.rotation = j * X, j && (d = y * (_ = Math.cos(j)) + x * (v = Math.sin(j)), m = T * _ + A * v, g = S * _ + P * v, x = x * _ - y * v, A = A * _ - T * v, P = P * _ - S * v, y = d, T = m, S = g), c.rotationX && 359.9 < Math.abs(c.rotationX) + Math.abs(c.rotation) && (c.rotationX = c.rotation = 0, c.rotationY = 180 - c.rotationY), j = Math.atan2(T, A), c.scaleX = (1e5 * Math.sqrt(y * y + x * x + b * b) + .5 | 0) / 1e5, c.scaleY = (1e5 * Math.sqrt(A * A + C * C) + .5 | 0) / 1e5, c.scaleZ = (1e5 * Math.sqrt(S * S + P * P + k * k) + .5 | 0) / 1e5, y /= c.scaleX, T /= c.scaleY, x /= c.scaleX, A /= c.scaleY, 2e-5 < Math.abs(j) ? (c.skewX = j * X, T = 0, "simple" !== c.skewType && (c.scaleY *= 1 / Math.cos(j))) : c.skewX = 0, c.perspective = R ? 1 / (R < 0 ? -R : R) : 0, c.x = B, c.y = E, c.z = O, c.svg && (c.x -= c.xOrigin - (c.xOrigin * y - c.yOrigin * T), c.y -= c.yOrigin - (c.yOrigin * x - c.xOrigin * A))
                  } else if (!qe || i || !r.length || c.x !== r[4] || c.y !== r[5] || !c.rotationX && !c.rotationY) {
                    var M = 6 <= r.length,
                      N = M ? r[0] : 1,
                      L = r[1] || 0,
                      I = r[2] || 0,
                      q = M ? r[3] : 1;
                    c.x = r[4] || 0, c.y = r[5] || 0, a = Math.sqrt(N * N + L * L), o = Math.sqrt(q * q + I * I), l = N || L ? Math.atan2(L, N) * X : c.rotation || 0, u = I || q ? Math.atan2(I, q) * X + l : c.skewX || 0, c.scaleX = a, c.scaleY = o, c.rotation = l, c.skewX = u, qe && (c.rotationX = c.rotationY = c.z = 0, c.perspective = p, c.scaleZ = 1), c.svg && (c.x -= c.xOrigin - (c.xOrigin * N + c.yOrigin * I), c.y -= c.yOrigin - (c.xOrigin * L + c.yOrigin * q))
                  }
                  for (s in 90 < Math.abs(c.skewX) && Math.abs(c.skewX) < 270 && (f ? (c.scaleX *= -1, c.skewX += c.rotation <= 0 ? 180 : -180, c.rotation += c.rotation <= 0 ? 180 : -180) : (c.scaleY *= -1, c.skewX += c.skewX <= 0 ? 180 : -180)), c.zOrigin = h, c) c[s] < 2e-5 && -2e-5 < c[s] && (c[s] = 0)
                }
                return n && (e._gsTransform = c).svg && (Be && e.style[Ne] ? z.delayedCall(.001, function () {
                  et(e.style, Ne)
                }) : !Be && e.getAttribute("transform") && z.delayedCall(.001, function () {
                  e.removeAttribute("transform")
                })), c
              },
              Ze = function (e) {
                var t, n, i = this.data,
                  r = -i.rotation * W,
                  s = r + i.skewX * W,
                  a = 1e5,
                  o = (Math.cos(r) * i.scaleX * a | 0) / a,
                  l = (Math.sin(r) * i.scaleX * a | 0) / a,
                  u = (Math.sin(s) * -i.scaleY * a | 0) / a,
                  c = (Math.cos(s) * i.scaleY * a | 0) / a,
                  f = this.t.style,
                  h = this.t.currentStyle;
                if (h) {
                  n = l, l = -u, u = -n, t = h.filter, f.filter = "";
                  var p, d, m = this.t.offsetWidth,
                    g = this.t.offsetHeight,
                    _ = "absolute" !== h.position,
                    v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                    y = i.x + m * i.xPercent / 100,
                    x = i.y + g * i.yPercent / 100;
                  if (null != i.ox && (y += (p = (i.oxp ? m * i.ox * .01 : i.ox) - m / 2) - (p * o + (d = (i.oyp ? g * i.oy * .01 : i.oy) - g / 2) * l), x += d - (p * u + d * c)), v += _ ? ", Dx=" + ((p = m / 2) - (p * o + (d = g / 2) * l) + y) + ", Dy=" + (d - (p * u + d * c) + x) + ")" : ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? f.filter = t.replace(j, v) : f.filter = v + " " + t, 0 !== e && 1 !== e || 1 == o && 0 === l && 0 === u && 1 == c && (_ && -1 === v.indexOf("Dx=0, Dy=0") || R.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && f.removeAttribute("filter")), !_) {
                    var b, w, T, A = D < 8 ? 1 : -1;
                    for (p = i.ieOffsetX || 0, d = i.ieOffsetY || 0, i.ieOffsetX = Math.round((m - ((o < 0 ? -o : o) * m + (l < 0 ? -l : l) * g)) / 2 + y), i.ieOffsetY = Math.round((g - ((c < 0 ? -c : c) * g + (u < 0 ? -u : u) * m)) / 2 + x), De = 0; De < 4; De++) T = (n = -1 !== (b = h[w = ue[De]]).indexOf("px") ? parseFloat(b) : re(this.t, w, parseFloat(b), b.replace(O, "")) || 0) !== i[w] ? De < 2 ? -i.ieOffsetX : -i.ieOffsetY : De < 2 ? p - i.ieOffsetX : d - i.ieOffsetY, f[w] = (i[w] = Math.round(n - T * (0 === De || 2 === De ? 1 : A))) + "px"
                  }
                }
              },
              Je = Y.set3DTransformRatio = Y.setTransformRatio = function (e) {
                var t, n, i, r, s, a, o, l, u, c, f, h, p, d, m, g, _, v, y, x, b, w, T, A = this.data,
                  C = this.t.style,
                  D = A.rotation,
                  S = A.rotationX,
                  P = A.rotationY,
                  k = A.scaleX,
                  B = A.scaleY,
                  E = A.scaleZ,
                  O = A.x,
                  R = A.y,
                  j = A.z,
                  M = A.svg,
                  N = A.perspective,
                  L = A.force3D,
                  I = A.skewY,
                  q = A.skewX;
                if (I && (q += I, D += I), !((1 !== e && 0 !== e || "auto" !== L || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && L || j || N || P || S || 1 !== E) || Be && M || !qe) D || q || M ? (D *= W, w = q * W, T = 1e5, n = Math.cos(D) * k, s = Math.sin(D) * k, i = Math.sin(D - w) * -B, a = Math.cos(D - w) * B, w && "simple" === A.skewType && (t = Math.tan(w - I * W), i *= t = Math.sqrt(1 + t * t), a *= t, I && (t = Math.tan(I * W), n *= t = Math.sqrt(1 + t * t), s *= t)), M && (O += A.xOrigin - (A.xOrigin * n + A.yOrigin * i) + A.xOffset, R += A.yOrigin - (A.xOrigin * s + A.yOrigin * a) + A.yOffset, Be && (A.xPercent || A.yPercent) && (m = this.t.getBBox(), O += .01 * A.xPercent * m.width, R += .01 * A.yPercent * m.height), O < (m = 1e-6) && -m < O && (O = 0), R < m && -m < R && (R = 0)), y = (n * T | 0) / T + "," + (s * T | 0) / T + "," + (i * T | 0) / T + "," + (a * T | 0) / T + "," + O + "," + R + ")", M && Be ? this.t.setAttribute("transform", "matrix(" + y) : C[Ne] = (A.xPercent || A.yPercent ? "translate(" + A.xPercent + "%," + A.yPercent + "%) matrix(" : "matrix(") + y) : C[Ne] = (A.xPercent || A.yPercent ? "translate(" + A.xPercent + "%," + A.yPercent + "%) matrix(" : "matrix(") + k + ",0,0," + B + "," + O + "," + R + ")";
                else {
                  if (H && (k < (m = 1e-4) && -m < k && (k = E = 2e-5), B < m && -m < B && (B = E = 2e-5), !N || A.z || A.rotationX || A.rotationY || (N = 0)), D || q) D *= W, g = n = Math.cos(D), _ = s = Math.sin(D), q && (D -= q * W, g = Math.cos(D), _ = Math.sin(D), "simple" === A.skewType && (t = Math.tan((q - I) * W), g *= t = Math.sqrt(1 + t * t), _ *= t, A.skewY && (t = Math.tan(I * W), n *= t = Math.sqrt(1 + t * t), s *= t))), i = -_, a = g;
                  else {
                    if (!(P || S || 1 !== E || N || M)) return void(C[Ne] = (A.xPercent || A.yPercent ? "translate(" + A.xPercent + "%," + A.yPercent + "%) translate3d(" : "translate3d(") + O + "px," + R + "px," + j + "px)" + (1 !== k || 1 !== B ? " scale(" + k + "," + B + ")" : ""));
                    n = a = 1, i = s = 0
                  }
                  c = 1, r = o = l = u = f = h = 0, p = N ? -1 / N : 0, d = A.zOrigin, m = 1e-6, x = ",", b = "0", (D = P * W) && (g = Math.cos(D), f = p * (l = -(_ = Math.sin(D))), r = n * _, o = s * _, p *= c = g, n *= g, s *= g), (D = S * W) && (t = i * (g = Math.cos(D)) + r * (_ = Math.sin(D)), v = a * g + o * _, u = c * _, h = p * _, r = i * -_ + r * g, o = a * -_ + o * g, c *= g, p *= g, i = t, a = v), 1 !== E && (r *= E, o *= E, c *= E, p *= E), 1 !== B && (i *= B, a *= B, u *= B, h *= B), 1 !== k && (n *= k, s *= k, l *= k, f *= k), (d || M) && (d && (O += r * -d, R += o * -d, j += c * -d + d), M && (O += A.xOrigin - (A.xOrigin * n + A.yOrigin * i) + A.xOffset, R += A.yOrigin - (A.xOrigin * s + A.yOrigin * a) + A.yOffset), O < m && -m < O && (O = b), R < m && -m < R && (R = b), j < m && -m < j && (j = 0)), y = A.xPercent || A.yPercent ? "translate(" + A.xPercent + "%," + A.yPercent + "%) matrix3d(" : "matrix3d(", y += (n < m && -m < n ? b : n) + x + (s < m && -m < s ? b : s) + x + (l < m && -m < l ? b : l), y += x + (f < m && -m < f ? b : f) + x + (i < m && -m < i ? b : i) + x + (a < m && -m < a ? b : a), S || P || 1 !== E ? (y += x + (u < m && -m < u ? b : u) + x + (h < m && -m < h ? b : h) + x + (r < m && -m < r ? b : r), y += x + (o < m && -m < o ? b : o) + x + (c < m && -m < c ? b : c) + x + (p < m && -m < p ? b : p) + x) : y += ",0,0,0,0,1,0,", y += O + x + R + x + j + x + (N ? 1 + -j / N : 1) + ")", C[Ne] = y
                }
              };
            (e = ze.prototype).x = e.y = e.z = e.skewX = e.skewY = e.rotation = e.rotationX = e.rotationY = e.zOrigin = e.xPercent = e.yPercent = e.xOffset = e.yOffset = 0, e.scaleX = e.scaleY = e.scaleZ = 1, Pe("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
              parser: function (e, t, n, i, r, s, a) {
                if (i._lastParsedTransform === a) return r;
                var o = (i._lastParsedTransform = a).scale && "function" == typeof a.scale ? a.scale : 0;
                o && (a.scale = o(k, e));
                var l, u, c, f, h, p, d, m, g, _ = e._gsTransform,
                  v = e.style,
                  y = Me.length,
                  x = a,
                  b = {},
                  w = "transformOrigin",
                  T = Qe(e, C, !0, x.parseTransform),
                  A = x.transform && ("function" == typeof x.transform ? x.transform(k, P) : x.transform);
                if (T.skewType = x.skewType || T.skewType || F.defaultSkewType, i._transform = T, "rotationZ" in x && (x.rotation = x.rotationZ), A && "string" == typeof A && Ne)(u = $.style)[Ne] = A, u.display = "block", u.position = "absolute", -1 !== A.indexOf("%") && (u.width = ie(e, "width"), u.height = ie(e, "height")), I.body.appendChild($), l = Qe($, null, !1), "simple" === T.skewType && (l.scaleY *= Math.cos(l.skewX * W)), T.svg && (p = T.xOrigin, d = T.yOrigin, l.x -= T.xOffset, l.y -= T.yOffset, (x.transformOrigin || x.svgOrigin) && (A = {}, $e(e, fe(x.transformOrigin), A, x.svgOrigin, x.smoothOrigin, !0), p = A.xOrigin, d = A.yOrigin, l.x -= A.xOffset - T.xOffset, l.y -= A.yOffset - T.yOffset), (p || d) && (m = Ge($, !0), l.x -= p - (p * m[0] + d * m[2]), l.y -= d - (p * m[1] + d * m[3]))), I.body.removeChild($), l.perspective || (l.perspective = T.perspective), null != x.xPercent && (l.xPercent = pe(x.xPercent, T.xPercent)), null != x.yPercent && (l.yPercent = pe(x.yPercent, T.yPercent));
                else if ("object" === st(x)) {
                  if (l = {
                      scaleX: pe(null != x.scaleX ? x.scaleX : x.scale, T.scaleX),
                      scaleY: pe(null != x.scaleY ? x.scaleY : x.scale, T.scaleY),
                      scaleZ: pe(x.scaleZ, T.scaleZ),
                      x: pe(x.x, T.x),
                      y: pe(x.y, T.y),
                      z: pe(x.z, T.z),
                      xPercent: pe(x.xPercent, T.xPercent),
                      yPercent: pe(x.yPercent, T.yPercent),
                      perspective: pe(x.transformPerspective, T.perspective)
                    }, null != (h = x.directionalRotation))
                    if ("object" === st(h))
                      for (u in h) x[u] = h[u];
                    else x.rotation = h;
                  "string" == typeof x.x && -1 !== x.x.indexOf("%") && (l.x = 0, l.xPercent = pe(x.x, T.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (l.y = 0, l.yPercent = pe(x.y, T.yPercent)), l.rotation = de("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : T.rotation, T.rotation, "rotation", b), qe && (l.rotationX = de("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : T.rotationX || 0, T.rotationX, "rotationX", b), l.rotationY = de("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : T.rotationY || 0, T.rotationY, "rotationY", b)), l.skewX = de(x.skewX, T.skewX), l.skewY = de(x.skewY, T.skewY)
                }
                for (qe && null != x.force3D && (T.force3D = x.force3D, f = !0), (c = T.force3D || T.z || T.rotationX || T.rotationY || l.z || l.rotationX || l.rotationY || l.perspective) || null == x.scale || (l.scaleZ = 1); - 1 < --y;)(1e-6 < (A = l[g = Me[y]] - T[g]) || A < -1e-6 || null != x[g] || null != L[g]) && (f = !0, r = new Te(T, g, T[g], A, r), g in b && (r.e = b[g]), r.xs0 = 0, r.plugin = s, i._overwriteProps.push(r.n));
                return A = "function" == typeof x.transformOrigin ? x.transformOrigin(k, P) : x.transformOrigin, T.svg && (A || x.svgOrigin) && (p = T.xOffset, d = T.yOffset, $e(e, fe(A), l, x.svgOrigin, x.smoothOrigin), r = Ae(T, "xOrigin", (_ ? T : l).xOrigin, l.xOrigin, r, w), r = Ae(T, "yOrigin", (_ ? T : l).yOrigin, l.yOrigin, r, w), p === T.xOffset && d === T.yOffset || (r = Ae(T, "xOffset", _ ? p : T.xOffset, T.xOffset, r, w), r = Ae(T, "yOffset", _ ? d : T.yOffset, T.yOffset, r, w)), A = "0px 0px"), (A || qe && c && T.zOrigin) && (Ne ? (f = !0, g = Ie, A || (A = (A = (ie(e, g, C, !1, "50% 50%") + "").split(" "))[0] + " " + A[1] + " " + T.zOrigin + "px"), A += "", (r = new Te(v, g, 0, 0, r, -1, w)).b = v[g], r.plugin = s, qe ? (u = T.zOrigin, A = A.split(" "), T.zOrigin = (2 < A.length ? parseFloat(A[2]) : u) || 0, r.xs0 = r.e = A[0] + " " + (A[1] || "50%") + " 0px", (r = new Te(T, "zOrigin", 0, 0, r, -1, r.n)).b = u, r.xs0 = r.e = T.zOrigin) : r.xs0 = r.e = A) : fe(A + "", T)), f && (i._transformType = T.svg && Be || !c && 3 !== this._transformType ? 2 : 3), o && (a.scale = o), r
              },
              allowFunc: !0,
              prefix: !0
            }), Pe("boxShadow", {
              defaultValue: "0px 0px 0px 0px #999",
              prefix: !0,
              color: !0,
              multi: !0,
              keyword: "inset"
            }), Pe("clipPath", {
              defaultValue: "inset(0%)",
              prefix: !0,
              multi: !0,
              formatter: xe("inset(0% 0% 0% 0%)", !1, !0)
            }), Pe("borderRadius", {
              defaultValue: "0px",
              parser: function (e, t, n, i, r, s) {
                t = this.format(t);
                var a, o, l, u, c, f, h, p, d, m, g, _, v, y, x, b, w = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                  T = e.style;
                for (d = parseFloat(e.offsetWidth), m = parseFloat(e.offsetHeight), a = t.split(" "), o = 0; o < w.length; o++) this.p.indexOf("border") && (w[o] = ee(w[o])), -1 !== (c = u = ie(e, w[o], C, !1, "0px")).indexOf(" ") && (c = (u = c.split(" "))[0], u = u[1]), f = l = a[o], h = parseFloat(c), _ = c.substr((h + "").length), "" === (g = (v = "=" === f.charAt(1)) ? (p = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), p *= parseFloat(f), f.substr((p + "").length - (p < 0 ? 1 : 0)) || "") : (p = parseFloat(f), f.substr((p + "").length))) && (g = A[n] || _), g !== _ && (y = re(e, "borderLeft", h, _), x = re(e, "borderTop", h, _), u = "%" === g ? (c = y / d * 100 + "%", x / m * 100 + "%") : "em" === g ? (c = y / (b = re(e, "borderLeft", 1, "em")) + "em", x / b + "em") : (c = y + "px", x + "px"), v && (f = parseFloat(c) + p + g, l = parseFloat(u) + p + g)), r = Ce(T, w[o], c + " " + u, f + " " + l, !1, "0px", r);
                return r
              },
              prefix: !0,
              formatter: xe("0px 0px 0px 0px", !1, !0)
            }), Pe("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
              defaultValue: "0px",
              parser: function (e, t, n, i, r, s) {
                return Ce(e.style, n, this.format(ie(e, n, C, !1, "0px 0px")), this.format(t), !1, "0px", r)
              },
              prefix: !0,
              formatter: xe("0px 0px", !1, !0)
            }), Pe("backgroundPosition", {
              defaultValue: "0 0",
              parser: function (e, t, n, i, r, s) {
                var a, o, l, u, c, f, h = "background-position",
                  p = C || ne(e),
                  d = this.format((p ? D ? p.getPropertyValue(h + "-x") + " " + p.getPropertyValue(h + "-y") : p.getPropertyValue(h) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                  m = this.format(t);
                if (-1 !== d.indexOf("%") != (-1 !== m.indexOf("%")) && m.split(",").length < 2 && (f = ie(e, "backgroundImage").replace(T, "")) && "none" !== f) {
                  for (a = d.split(" "), o = m.split(" "), U.setAttribute("src", f), l = 2; - 1 < --l;)(u = -1 !== (d = a[l]).indexOf("%")) != (-1 !== o[l].indexOf("%")) && (c = 0 === l ? e.offsetWidth - U.width : e.offsetHeight - U.height, a[l] = u ? parseFloat(d) / 100 * c + "px" : parseFloat(d) / c * 100 + "%");
                  d = a.join(" ")
                }
                return this.parseComplex(e.style, d, m, r, s)
              },
              formatter: fe
            }), Pe("backgroundSize", {
              defaultValue: "0 0",
              formatter: function (e) {
                return "co" === (e += "").substr(0, 2) ? e : fe(-1 === e.indexOf(" ") ? e + " " + e : e)
              }
            }), Pe("perspective", {
              defaultValue: "0px",
              prefix: !0
            }), Pe("perspectiveOrigin", {
              defaultValue: "50% 50%",
              prefix: !0
            }), Pe("transformStyle", {
              prefix: !0
            }), Pe("backfaceVisibility", {
              prefix: !0
            }), Pe("userSelect", {
              prefix: !0
            }), Pe("margin", {
              parser: be("marginTop,marginRight,marginBottom,marginLeft")
            }), Pe("padding", {
              parser: be("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), Pe("clip", {
              defaultValue: "rect(0px,0px,0px,0px)",
              parser: function (e, t, n, i, r, s) {
                var a, o, l;
                return t = D < 9 ? (o = e.currentStyle, l = D < 8 ? " " : ",", a = "rect(" + o.clipTop + l + o.clipRight + l + o.clipBottom + l + o.clipLeft + ")", this.format(t).split(",").join(l)) : (a = this.format(ie(e, this.p, C, !1, this.dflt)), this.format(t)), this.parseComplex(e.style, a, t, r, s)
              }
            }), Pe("textShadow", {
              defaultValue: "0px 0px 0px #999",
              color: !0,
              multi: !0
            }), Pe("autoRound,strictUnits", {
              parser: function (e, t, n, i, r) {
                return r
              }
            }), Pe("border", {
              defaultValue: "0px solid #000",
              parser: function (e, t, n, i, r, s) {
                var a = ie(e, "borderTopWidth", C, !1, "0px"),
                  o = this.format(t).split(" "),
                  l = o[0].replace(O, "");
                return "px" !== l && (a = parseFloat(a) / re(e, "borderTopWidth", 1, l) + l), this.parseComplex(e.style, this.format(a + " " + ie(e, "borderTopStyle", C, !1, "solid") + " " + ie(e, "borderTopColor", C, !1, "#000")), o.join(" "), r, s)
              },
              color: !0,
              formatter: function (e) {
                var t = e.split(" ");
                return t[0] + " " + (t[1] || "solid") + " " + (e.match(ye) || ["#000"])[0]
              }
            }), Pe("borderWidth", {
              parser: be("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), Pe("float,cssFloat,styleFloat", {
              parser: function (e, t, n, i, r, s) {
                var a = e.style,
                  o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                return new Te(a, o, 0, 0, r, -1, n, !1, 0, a[o], t)
              }
            });
            var Ke = function (e) {
              var t, n = this.t,
                i = n.filter || ie(this.data, "filter") || "",
                r = this.s + this.c * e | 0;
              100 == r && (t = -1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), !ie(this.data, "filter")) : (n.filter = i.replace(a, ""), !0)), t || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? 0 == r && this.xn1 || (n.filter = i + " alpha(opacity=" + r + ")") : n.filter = i.replace(R, "opacity=" + r))
            };
            Pe("opacity,alpha,autoAlpha", {
              defaultValue: "1",
              parser: function (e, t, n, i, r, s) {
                var a = parseFloat(ie(e, "opacity", C, !1, "1")),
                  o = e.style,
                  l = "autoAlpha" === n;
                return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + a), l && 1 === a && "hidden" === ie(e, "visibility", C) && 0 !== t && (a = 0), G ? r = new Te(o, "opacity", a, t - a, r) : ((r = new Te(o, "opacity", 100 * a, 100 * (t - a), r)).xn1 = l ? 1 : 0, o.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = e, r.plugin = s, r.setRatio = Ke), l && ((r = new Te(o, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", i._overwriteProps.push(r.n), i._overwriteProps.push(n)), r
              }
            });
            var et = function (e, t) {
                t && (e.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), e.removeProperty(t.replace(o, "-$1").toLowerCase())) : e.removeAttribute(t))
              },
              tt = function (e) {
                if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                  this.t.setAttribute("class", 0 === e ? this.b : this.e);
                  for (var t = this.data, n = this.t.style; t;) t.v ? n[t.p] = t.v : et(n, t.p), t = t._next;
                  1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
              };
            Pe("className", {
              parser: function (e, t, n, i, r, s, a) {
                var o, l, u, c, f, h = e.getAttribute("class") || "",
                  p = e.style.cssText;
                if ((r = i._classNamePT = new Te(e, n, 0, 0, r, 2)).setRatio = tt, r.pr = -11, d = !0, r.b = h, l = ae(e, C), u = e._gsClassPT) {
                  for (c = {}, f = u.data; f;) c[f.p] = 1, f = f._next;
                  u.setRatio(1)
                }
                return (e._gsClassPT = r).e = "=" !== t.charAt(1) ? t : h.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", r.e), o = oe(e, l, ae(e), a, c), e.setAttribute("class", h), r.data = o.firstMPT, e.style.cssText !== p && (e.style.cssText = p), r = r.xfirst = i.parse(e, o.difs, r, s)
              }
            });
            var nt = function (e) {
              if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var t, n, i, r, s, a = this.t.style,
                  o = g.transform.parse;
                if ("all" === this.e) r = !(a.cssText = "");
                else
                  for (i = (t = this.e.split(" ").join("").split(",")).length; - 1 < --i;) n = t[i], g[n] && (g[n].parse === o ? r = !0 : n = "transformOrigin" === n ? Ie : g[n].p), et(a, n);
                r && (et(a, Ne), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
              }
            };
            for (Pe("clearProps", {
                parser: function (e, t, n, i, r) {
                  return (r = new Te(e, n, 0, 0, r, 2)).setRatio = nt, r.e = t, r.pr = -10, r.data = i._tween, d = !0, r
                }
              }), e = "bezier,throwProps,physicsProps,physics2D".split(","), De = e.length; De--;) ke(e[De]);
            (e = F.prototype)._firstPT = e._lastParsedTransform = e._transform = null, e._onInitTween = function (e, t, n, i) {
              if (!e.nodeType) return !1;
              this._target = P = e, this._tween = n, this._vars = t, k = i, S = t.autoRound, d = !1, A = t.suffixMap || F.suffixMap, C = ne(e), m = this._overwriteProps;
              var r, s, a, o, l, u, c, f, h, p = e.style;
              if (_ && "" === p.zIndex && ("auto" !== (r = ie(e, "zIndex", C)) && "" !== r || this._addLazySet(p, "zIndex", 0)), "string" == typeof t && (o = p.cssText, r = ae(e, C), p.cssText = o + ";" + t, r = oe(e, r, ae(e)).difs, !G && b.test(t) && (r.opacity = parseFloat(RegExp.$1)), t = r, p.cssText = o), t.className ? this._firstPT = s = g.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = s = this.parse(e, t, null), this._transformType) {
                for (h = 3 === this._transformType, Ne ? v && (_ = !0, "" === p.zIndex && ("auto" !== (c = ie(e, "zIndex", C)) && "" !== c || this._addLazySet(p, "zIndex", 0)), y && this._addLazySet(p, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (h ? "visible" : "hidden"))) : p.zoom = 1, a = s; a && a._next;) a = a._next;
                f = new Te(e, "transform", 0, 0, null, 2), this._linkCSSP(f, null, a), f.setRatio = Ne ? Je : Ze, f.data = this._transform || Qe(e, C, !0), f.tween = n, f.pr = -1, m.pop()
              }
              if (d) {
                for (; s;) {
                  for (u = s._next, a = o; a && a.pr > s.pr;) a = a._next;
                  (s._prev = a ? a._prev : l) ? s._prev._next = s: o = s, (s._next = a) ? a._prev = s : l = s, s = u
                }
                this._firstPT = o
              }
              return !0
            }, e.parse = function (e, t, n, i) {
              var r, s, a, o, l, u, c, f, h, p, d = e.style;
              for (r in t) {
                if (u = t[r], s = g[r], "function" != typeof u || s && s.allowFunc || (u = u(k, P)), s) n = s.parse(e, u, r, this, n, i, t);
                else {
                  if ("--" === r.substr(0, 2)) {
                    this._tween._propLookup[r] = this._addTween.call(this._tween, e.style, "setProperty", ne(e).getPropertyValue(r) + "", u + "", r, !1, r);
                    continue
                  }
                  l = ie(e, r, C) + "", h = "string" == typeof u, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || h && w.test(u) ? (h || (u = (3 < (u = _e(u)).length ? "rgba(" : "rgb(") + u.join(",") + ")"), n = Ce(d, r, l, u, !0, "transparent", n, 0, i)) : h && N.test(u) ? n = Ce(d, r, l, u, !0, null, n, 0, i) : (c = (a = parseFloat(l)) || 0 === a ? l.substr((a + "").length) : "", "" !== l && "auto" !== l || (c = "width" === r || "height" === r ? (a = ce(e, r, C), "px") : "left" === r || "top" === r ? (a = se(e, r, C), "px") : (a = "opacity" !== r ? 0 : 1, "")), "" === (f = (p = h && "=" === u.charAt(1)) ? (o = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), o *= parseFloat(u), u.replace(O, "")) : (o = parseFloat(u), h ? u.replace(O, "") : "")) && (f = r in A ? A[r] : c), u = o || 0 === o ? (p ? o + a : o) + f : t[r], c !== f && ("" === f && "lineHeight" !== r || (o || 0 === o) && a && (a = re(e, r, a, c), "%" === f ? (a /= re(e, r, 100, "%") / 100, !0 !== t.strictUnits && (l = a + "%")) : "em" === f || "rem" === f || "vw" === f || "vh" === f ? a /= re(e, r, 1, f) : "px" !== f && (o = re(e, r, o, f), f = "px"), p && (o || 0 === o) && (u = o + a + f))), p && (o += a), !a && 0 !== a || !o && 0 !== o ? void 0 !== d[r] && (u || u + "" != "NaN" && null != u) ? (n = new Te(d, r, o || a || 0, 0, n, -1, r, !1, 0, l, u)).xs0 = "none" !== u || "display" !== r && -1 === r.indexOf("Style") ? u : l : Z("invalid " + r + " tween value: " + t[r]) : (n = new Te(d, r, a, o - a, n, 0, r, !1 !== S && ("px" === f || "zIndex" === r), 0, l, u)).xs0 = f)
                }
                i && n && !n.plugin && (n.plugin = i)
              }
              return n
            }, e.setRatio = function (e) {
              var t, n, i, r = this._firstPT;
              if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                  for (; r;) {
                    if (t = r.c * e + r.s, r.r ? t = r.r(t) : t < 1e-6 && -1e-6 < t && (t = 0), r.type)
                      if (1 === r.type)
                        if (2 === (i = r.l)) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                        else if (3 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                    else if (4 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                    else if (5 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                    else {
                      for (n = r.xs0 + t + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                      r.t[r.p] = n
                    } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(e);
                    else r.t[r.p] = t + r.xs0;
                    r = r._next
                  } else
                    for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(e), r = r._next;
                else
                  for (; r;) {
                    if (2 !== r.type)
                      if (r.r && -1 !== r.type)
                        if (t = r.r(r.s + r.c), r.type) {
                          if (1 === r.type) {
                            for (i = r.l, n = r.xs0 + t + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                            r.t[r.p] = n
                          }
                        } else r.t[r.p] = t + r.xs0;
                    else r.t[r.p] = r.e;
                    else r.setRatio(e);
                    r = r._next
                  }
            }, e._enableTransforms = function (e) {
              this._transform = this._transform || Qe(this._target, C, !0), this._transformType = this._transform.svg && Be || !e && 3 !== this._transformType ? 2 : 3
            };
            var it = function (e) {
              this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            e._addLazySet = function (e, t, n) {
              var i = this._firstPT = new Te(e, t, 0, 0, this._firstPT, 2);
              i.e = n, i.setRatio = it, i.data = this
            }, e._linkCSSP = function (e, t, n, i) {
              return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, i = !0), n ? n._next = e : i || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = n), e
            }, e._mod = function (e) {
              for (var t = this._firstPT; t;) "function" == typeof e[t.p] && (t.r = e[t.p]), t = t._next
            }, e._kill = function (e) {
              var t, n, i, r = e;
              if (e.autoAlpha || e.alpha) {
                for (n in r = {}, e) r[n] = e[n];
                r.opacity = 1, r.autoAlpha && (r.visibility = 1)
              }
              for (e.className && (t = this._classNamePT) && ((i = t.xfirst) && i._prev ? this._linkCSSP(i._prev, t._next, i._prev._prev) : i === this._firstPT && (this._firstPT = t._next), t._next && this._linkCSSP(t._next, t._next._next, i._prev), this._classNamePT = null), t = this._firstPT; t;) t.plugin && t.plugin !== n && t.plugin._kill && (t.plugin._kill(e), n = t.plugin), t = t._next;
              return s.prototype._kill.call(this, r)
            };
            var rt = function e(t, n, i) {
              var r, s, a, o;
              if (t.slice)
                for (s = t.length; - 1 < --s;) e(t[s], n, i);
              else
                for (s = (r = t.childNodes).length; - 1 < --s;) o = (a = r[s]).type, a.style && (n.push(ae(a)), i && i.push(a)), 1 !== o && 9 !== o && 11 !== o || !a.childNodes.length || e(a, n, i)
            };
            return F.cascadeTo = function (e, t, n) {
              var i, r, s, a, o = z.to(e, t, n),
                l = [o],
                u = [],
                c = [],
                f = [],
                h = z._internals.reservedProps;
              for (e = o._targets || o.target, rt(e, u, f), o.render(t, !0, !0), rt(e, c), o.render(0, !0, !0), o._enabled(!0), i = f.length; - 1 < --i;)
                if ((r = oe(f[i], u[i], c[i])).firstMPT) {
                  for (s in r = r.difs, n) h[s] && (r[s] = n[s]);
                  for (s in a = {}, r) a[s] = u[i][s];
                  l.push(z.fromTo(f[i], t, a, r))
                }
              return l
            }, s.activate([F]), F
          }, !0), t = at._gsDefine.plugin({
            propName: "roundProps",
            version: "1.7.0",
            priority: -1,
            API: 2,
            init: function (e, t, n) {
              return this._tween = n, !0
            }
          }), l = function (t) {
            var n = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function (e) {
              return (Math.round(e / t) * t * n | 0) / n
            }
          }, u = function (e, t) {
            for (; e;) e.f || e.blob || (e.m = t || Math.round), e = e._next
          }, (i = t.prototype)._onInitAllProps = function () {
            var e, t, n, i, r = this._tween,
              s = r.vars.roundProps,
              a = {},
              o = r._propLookup.roundProps;
            if ("object" !== st(s) || s.push)
              for ("string" == typeof s && (s = s.split(",")), n = s.length; - 1 < --n;) a[s[n]] = Math.round;
            else
              for (i in s) a[i] = l(s[i]);
            for (i in a)
              for (e = r._firstPT; e;) t = e._next, e.pg ? e.t._mod(a) : e.n === i && (2 === e.f && e.t ? u(e.t._firstPT, a[i]) : (this._add(e.t, i, e.s, e.c, a[i]), t && (t._prev = e._prev), e._prev ? e._prev._next = t : r._firstPT === e && (r._firstPT = t), e._next = e._prev = null, r._propLookup[i] = o)), e = t;
            return !1
          }, i._add = function (e, t, n, i, r) {
            this._addTween(e, t, n, n + i, t, r || Math.round), this._overwriteProps.push(t)
          }, at._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.1",
            init: function (e, t, n, i) {
              var r, s;
              if ("function" != typeof e.setAttribute) return !1;
              for (r in t) "function" == typeof (s = t[r]) && (s = s(i, e)), this._addTween(e, "setAttribute", e.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r);
              return !0
            }
          }), at._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function (e, t, n, i) {
              "object" !== st(t) && (t = {
                rotation: t
              }), this.finals = {};
              var r, s, a, o, l, u, c = !0 === t.useRadians ? 2 * Math.PI : 360;
              for (r in t) "useRadians" !== r && ("function" == typeof (o = t[r]) && (o = o(i, e)), s = (u = (o + "").split("_"))[0], a = parseFloat("function" != typeof e[r] ? e[r] : e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), l = (o = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? a + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - a, u.length && (-1 !== (s = u.join("_")).indexOf("short") && (l %= c) !== l % (c / 2) && (l = l < 0 ? l + c : l - c), -1 !== s.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== s.indexOf("ccw") && 0 < l && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (1e-6 < l || l < -1e-6) && (this._addTween(e, r, a, a + l, r), this._overwriteProps.push(r)));
              return !0
            },
            set: function (e) {
              var t;
              if (1 !== e) this._super.setRatio.call(this, e);
              else
                for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
            }
          })._autoCSS = !0, at._gsDefine("easing.Back", ["easing.Ease"], function (g) {
            var n, i, t, e, r = at.GreenSockGlobals || at,
              s = r.com.greensock,
              a = 2 * Math.PI,
              o = Math.PI / 2,
              l = s._class,
              u = function (e, t) {
                var n = l("easing." + e, function () {}, !0),
                  i = n.prototype = new g;
                return i.constructor = n, i.getRatio = t, n
              },
              c = g.register || function () {},
              f = function (e, t, n, i, r) {
                var s = l("easing." + e, {
                  easeOut: new t,
                  easeIn: new n,
                  easeInOut: new i
                }, !0);
                return c(s, e), s
              },
              _ = function (e, t, n) {
                this.t = e, this.v = t, n && (((this.next = n).prev = this).c = n.v - t, this.gap = n.t - e)
              },
              h = function (e, t) {
                var n = l("easing." + e, function (e) {
                    this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                  }, !0),
                  i = n.prototype = new g;
                return i.constructor = n, i.getRatio = t, i.config = function (e) {
                  return new n(e)
                }, n
              },
              p = f("Back", h("BackOut", function (e) {
                return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
              }), h("BackIn", function (e) {
                return e * e * ((this._p1 + 1) * e - this._p1)
              }), h("BackInOut", function (e) {
                return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
              })),
              d = l("easing.SlowMo", function (e, t, n) {
                t = t || 0 === t ? t : .7, null == e ? e = .7 : 1 < e && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === n
              }, !0),
              m = d.prototype = new g;
            return m.constructor = d, m.getRatio = function (e) {
              var t = e + (.5 - e) * this._p;
              return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 === e ? 0 : 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
            }, d.ease = new d(.7, .7), m.config = d.config = function (e, t, n) {
              return new d(e, t, n)
            }, (m = (n = l("easing.SteppedEase", function (e, t) {
              e = e || 1, this._p1 = 1 / e, this._p2 = e + (t ? 0 : 1), this._p3 = t ? 1 : 0
            }, !0)).prototype = new g).constructor = n, m.getRatio = function (e) {
              return e < 0 ? e = 0 : 1 <= e && (e = .999999999), ((this._p2 * e | 0) + this._p3) * this._p1
            }, m.config = n.config = function (e, t) {
              return new n(e, t)
            }, (m = (i = l("easing.ExpoScaleEase", function (e, t, n) {
              this._p1 = Math.log(t / e), this._p2 = t - e, this._p3 = e, this._ease = n
            }, !0)).prototype = new g).constructor = i, m.getRatio = function (e) {
              return this._ease && (e = this._ease.getRatio(e)), (this._p3 * Math.exp(this._p1 * e) - this._p3) / this._p2
            }, m.config = i.config = function (e, t, n) {
              return new i(e, t, n)
            }, (m = (t = l("easing.RoughEase", function (e) {
              for (var t, n, i, r, s, a, o = (e = e || {}).taper || "none", l = [], u = 0, c = 0 | (e.points || 20), f = c, h = !1 !== e.randomize, p = !0 === e.clamp, d = e.template instanceof g ? e.template : null, m = "number" == typeof e.strength ? .4 * e.strength : .4; - 1 < --f;) t = h ? Math.random() : 1 / c * f, n = d ? d.getRatio(t) : t, i = "none" === o ? m : "out" === o ? (r = 1 - t) * r * m : "in" === o ? t * t * m : t < .5 ? (r = 2 * t) * r * .5 * m : (r = 2 * (1 - t)) * r * .5 * m, h ? n += Math.random() * i - .5 * i : f % 2 ? n += .5 * i : n -= .5 * i, p && (1 < n ? n = 1 : n < 0 && (n = 0)), l[u++] = {
                x: t,
                y: n
              };
              for (l.sort(function (e, t) {
                  return e.x - t.x
                }), a = new _(1, 1, null), f = c; - 1 < --f;) s = l[f], a = new _(s.x, s.y, a);
              this._prev = new _(0, 0, 0 !== a.t ? a : a.next)
            }, !0)).prototype = new g).constructor = t, m.getRatio = function (e) {
              var t = this._prev;
              if (e > t.t) {
                for (; t.next && e >= t.t;) t = t.next;
                t = t.prev
              } else
                for (; t.prev && e <= t.t;) t = t.prev;
              return (this._prev = t).v + (e - t.t) / t.gap * t.c
            }, m.config = function (e) {
              return new t(e)
            }, t.ease = new t, f("Bounce", u("BounceOut", function (e) {
              return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }), u("BounceIn", function (e) {
              return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }), u("BounceInOut", function (e) {
              var t = e < .5;
              return (e = t ? 1 - 2 * e : 2 * e - 1) < 1 / 2.75 ? e *= 7.5625 * e : e = e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
            })), f("Circ", u("CircOut", function (e) {
              return Math.sqrt(1 - (e -= 1) * e)
            }), u("CircIn", function (e) {
              return -(Math.sqrt(1 - e * e) - 1)
            }), u("CircInOut", function (e) {
              return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            })), f("Elastic", (e = function (e, t, n) {
              var i = l("easing." + e, function (e, t) {
                  this._p1 = 1 <= e ? e : 1, this._p2 = (t || n) / (e < 1 ? e : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                }, !0),
                r = i.prototype = new g;
              return r.constructor = i, r.getRatio = t, r.config = function (e, t) {
                return new i(e, t)
              }, i
            })("ElasticOut", function (e) {
              return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
            }, .3), e("ElasticIn", function (e) {
              return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)
            }, .3), e("ElasticInOut", function (e) {
              return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
            }, .45)), f("Expo", u("ExpoOut", function (e) {
              return 1 - Math.pow(2, -10 * e)
            }), u("ExpoIn", function (e) {
              return Math.pow(2, 10 * (e - 1)) - .001
            }), u("ExpoInOut", function (e) {
              return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            })), f("Sine", u("SineOut", function (e) {
              return Math.sin(e * o)
            }), u("SineIn", function (e) {
              return 1 - Math.cos(e * o)
            }), u("SineInOut", function (e) {
              return -.5 * (Math.cos(Math.PI * e) - 1)
            })), l("easing.EaseLookup", {
              find: function (e) {
                return g.map[e]
              }
            }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(t, "RoughEase", "ease,"), c(n, "SteppedEase", "ease,"), p
          }, !0)
        }), at._gsDefine && at._gsQueue.pop()(),
        function (p, d) {
          var m = {},
            r = p.document,
            g = p.GreenSockGlobals = p.GreenSockGlobals || p,
            e = g[d];
          if (e) return void 0 !== se && se.exports && (se.exports = e);
          var t, n, i, _, v, s, a, y = function (e) {
              var t, n = e.split("."),
                i = g;
              for (t = 0; t < n.length; t++) i[n[t]] = i = i[n[t]] || {};
              return i
            },
            f = y("com.greensock"),
            x = 1e-8,
            l = function (e) {
              var t, n = [],
                i = e.length;
              for (t = 0; t !== i; n.push(e[t++]));
              return n
            },
            b = function () {},
            w = (s = Object.prototype.toString, a = s.call([]), function (e) {
              return null != e && (e instanceof Array || "object" === st(e) && !!e.push && s.call(e) === a)
            }),
            T = {},
            o = function o(l, u, c, f) {
              this.sc = T[l] ? T[l].sc : [], (T[l] = this).gsClass = null, this.func = c;
              var h = [];
              this.check = function (e) {
                for (var t, n, i, r, s = u.length, a = s; - 1 < --s;)(t = T[u[s]] || new o(u[s], [])).gsClass ? (h[s] = t.gsClass, a--) : e && t.sc.push(this);
                if (0 === a && c) {
                  if (i = (n = ("com.greensock." + l).split(".")).pop(), r = y(n.join("."))[i] = this.gsClass = c.apply(c, h), f)
                    if (g[i] = m[i] = r, void 0 !== se && se.exports)
                      if (l === d)
                        for (s in se.exports = m[d] = r, m) r[s] = m[s];
                      else m[d] && (m[d][i] = r);
                  else "function" == typeof define && define.amd && define((p.GreenSockAMDPath ? p.GreenSockAMDPath + "/" : "") + l.split(".").pop(), [], function () {
                    return r
                  });
                  for (s = 0; s < this.sc.length; s++) this.sc[s].check()
                }
              }, this.check(!0)
            },
            u = p._gsDefine = function (e, t, n, i) {
              return new o(e, t, n, i)
            },
            h = f._class = function (e, t, n) {
              return t = t || function () {}, u(e, [], function () {
                return t
              }, n), t
            };
          u.globals = g;
          var c = [0, 0, 1, 1],
            A = h("easing.Ease", function (e, t, n, i) {
              this._func = e, this._type = n || 0, this._power = i || 0, this._params = t ? c.concat(t) : c
            }, !0),
            C = A.map = {},
            D = A.register = function (e, t, n, i) {
              for (var r, s, a, o, l = t.split(","), u = l.length, c = (n || "easeIn,easeOut,easeInOut").split(","); - 1 < --u;)
                for (s = l[u], r = i ? h("easing." + s, null, !0) : f.easing[s] || {}, a = c.length; - 1 < --a;) o = c[a], C[s + "." + o] = C[o + s] = r[o] = e.getRatio ? e : e[o] || new e
            };
          for ((i = A.prototype)._calcEnd = !1, i.getRatio = function (e) {
              if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
              var t = this._type,
                n = this._power,
                i = 1 === t ? 1 - e : 2 === t ? e : e < .5 ? 2 * e : 2 * (1 - e);
              return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === t ? 1 - i : 2 === t ? i : e < .5 ? i / 2 : 1 - i / 2
            }, n = (t = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --n;) i = t[n] + ",Power" + n, D(new A(null, null, 1, n), i, "easeOut", !0), D(new A(null, null, 2, n), i, "easeIn" + (0 === n ? ",easeNone" : "")), D(new A(null, null, 3, n), i, "easeInOut");
          C.linear = f.easing.Linear.easeIn, C.swing = f.easing.Quad.easeInOut;
          var S = h("events.EventDispatcher", function (e) {
            this._listeners = {}, this._eventTarget = e || this
          });
          (i = S.prototype).addEventListener = function (e, t, n, i, r) {
            r = r || 0;
            var s, a, o = this._listeners[e],
              l = 0;
            for (this !== _ || v || _.wake(), null == o && (this._listeners[e] = o = []), a = o.length; - 1 < --a;)(s = o[a]).c === t && s.s === n ? o.splice(a, 1) : 0 === l && s.pr < r && (l = a + 1);
            o.splice(l, 0, {
              c: t,
              s: n,
              up: i,
              pr: r
            })
          }, i.removeEventListener = function (e, t) {
            var n, i = this._listeners[e];
            if (i)
              for (n = i.length; - 1 < --n;)
                if (i[n].c === t) return void i.splice(n, 1)
          }, i.dispatchEvent = function (e) {
            var t, n, i, r = this._listeners[e];
            if (r)
              for (1 < (t = r.length) && (r = r.slice(0)), n = this._eventTarget; - 1 < --t;)(i = r[t]) && (i.up ? i.c.call(i.s || n, {
                type: e,
                target: n
              }) : i.c.call(i.s || n))
          };
          var P = p.requestAnimationFrame,
            k = p.cancelAnimationFrame,
            B = Date.now || function () {
              return (new Date).getTime()
            },
            E = B();
          for (n = (t = ["ms", "moz", "webkit", "o"]).length; - 1 < --n && !P;) P = p[t[n] + "RequestAnimationFrame"], k = p[t[n] + "CancelAnimationFrame"] || p[t[n] + "CancelRequestAnimationFrame"];
          h("Ticker", function (e, t) {
            var s, a, o, l, u, c = this,
              f = B(),
              n = !(!1 === t || !P) && "auto",
              h = 500,
              p = 33,
              i = function e(t) {
                var n, i, r = B() - E;
                h < r && (f += r - p), E += r, c.time = (E - f) / 1e3, n = c.time - u, (!s || 0 < n || !0 === t) && (c.frame++, u += n + (l <= n ? .004 : l - n), i = !0), !0 !== t && (o = a(e)), i && c.dispatchEvent("tick")
              };
            S.call(c), c.time = c.frame = 0, c.tick = function () {
              i(!0)
            }, c.lagSmoothing = function (e, t) {
              if (!arguments.length) return h < 1e8;
              h = e || 1e8, p = Math.min(t, h, 0)
            }, c.sleep = function () {
              null != o && (n && k ? k(o) : clearTimeout(o), a = b, o = null, c === _ && (v = !1))
            }, c.wake = function (e) {
              null !== o ? c.sleep() : e ? f += -E + (E = B()) : 10 < c.frame && (E = B() - h + 5), a = 0 === s ? b : n && P ? P : function (e) {
                return setTimeout(e, 1e3 * (u - c.time) + 1 | 0)
              }, c === _ && (v = !0), i(2)
            }, c.fps = function (e) {
              if (!arguments.length) return s;
              l = 1 / ((s = e) || 60), u = this.time + l, c.wake()
            }, c.useRAF = function (e) {
              if (!arguments.length) return n;
              c.sleep(), n = e, c.fps(s)
            }, c.fps(e), setTimeout(function () {
              "auto" === n && c.frame < 5 && "hidden" !== (r || {}).visibilityState && c.useRAF(!1)
            }, 1500)
          }), (i = f.Ticker.prototype = new f.events.EventDispatcher).constructor = f.Ticker;
          var O = h("core.Animation", function (e, t) {
            if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = !!t.immediateRender, this.data = t.data, this._reversed = !!t.reversed, Z) {
              v || _.wake();
              var n = this.vars.useFrames ? Q : Z;
              n.add(this, n._time), this.vars.paused && this.paused(!0)
            }
          });
          _ = O.ticker = new f.Ticker, (i = O.prototype)._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1;
          ! function e() {
            v && 2e3 < B() - E && ("hidden" !== (r || {}).visibilityState || !_.lagSmoothing()) && _.wake();
            var t = setTimeout(e, 2e3);
            t.unref && t.unref()
          }(), i.play = function (e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
          }, i.pause = function (e, t) {
            return null != e && this.seek(e, t), this.paused(!0)
          }, i.resume = function (e, t) {
            return null != e && this.seek(e, t), this.paused(!1)
          }, i.seek = function (e, t) {
            return this.totalTime(Number(e), !1 !== t)
          }, i.restart = function (e, t) {
            return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
          }, i.reverse = function (e, t) {
            return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
          }, i.render = function (e, t, n) {}, i.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
          }, i.isActive = function () {
            var e, t = this._timeline,
              n = this._startTime;
            return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime(!0)) >= n && e < n + this.totalDuration() / this._timeScale - x
          }, i._enabled = function (e, t) {
            return v || _.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
          }, i._kill = function (e, t) {
            return this._enabled(!1, !1)
          }, i.kill = function (e, t) {
            return this._kill(e, t), this
          }, i._uncache = function (e) {
            for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
            return this
          }, i._swapSelfInParams = function (e) {
            for (var t = e.length, n = e.concat(); - 1 < --t;) "{self}" === e[t] && (n[t] = this);
            return n
          }, i._callback = function (e) {
            var t = this.vars,
              n = t[e],
              i = t[e + "Params"],
              r = t[e + "Scope"] || t.callbackScope || this;
            switch (i ? i.length : 0) {
            case 0:
              n.call(r);
              break;
            case 1:
              n.call(r, i[0]);
              break;
            case 2:
              n.call(r, i[0], i[1]);
              break;
            default:
              n.apply(r, i)
            }
          }, i.eventCallback = function (e, t, n, i) {
            if ("on" === (e || "").substr(0, 2)) {
              var r = this.vars;
              if (1 === arguments.length) return r[e];
              null == t ? delete r[e] : (r[e] = t, r[e + "Params"] = w(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[e + "Scope"] = i), "onUpdate" === e && (this._onUpdate = t)
            }
            return this
          }, i.delay = function (e) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
          }, i.duration = function (e) {
            return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
          }, i.totalDuration = function (e) {
            return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
          }, i.time = function (e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
          }, i.totalTime = function (e, t, n) {
            if (v || _.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
              if (e < 0 && !n && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var i = this._totalDuration,
                  r = this._timeline;
                if (i < e && !n && (e = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - e : e) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                  for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
              }
              this._gc && this._enabled(!0, !1), this._totalTime === e && 0 !== this._duration || (N.length && K(), this.render(e, t, !1), N.length && K())
            }
            return this
          }, i.progress = i.totalProgress = function (e, t) {
            var n = this.duration();
            return arguments.length ? this.totalTime(n * e, t) : n ? this._time / n : this.ratio
          }, i.startTime = function (e) {
            return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
          }, i.endTime = function (e) {
            return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
          }, i.timeScale = function (e) {
            if (!arguments.length) return this._timeScale;
            var t, n;
            for (e = e || x, this._timeline && this._timeline.smoothChildTiming && (n = (t = this._pauseTime) || 0 === t ? t : this._timeline.totalTime(), this._startTime = n - (n - this._startTime) * this._timeScale / e), this._timeScale = e, n = this.timeline; n && n.timeline;) n._dirty = !0, n.totalDuration(), n = n.timeline;
            return this
          }, i.reversed = function (e) {
            return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
          }, i.paused = function (e) {
            if (!arguments.length) return this._paused;
            var t, n, i = this._timeline;
            return e != this._paused && i && (v || e || _.wake(), n = (t = i.rawTime()) - this._pauseTime, !e && i.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 != n && this._initted && this.duration() && (t = i.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
          };
          var R = h("core.SimpleTimeline", function (e) {
            O.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
          });
          (i = R.prototype = new O).constructor = R, i.kill()._gc = !1, i._first = i._last = i._recent = null, i._sortChildren = !1, i.add = i.insert = function (e, t, n, i) {
            var r, s;
            if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = this.rawTime() - (e._timeline.rawTime() - e._pauseTime)), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), r = this._last, this._sortChildren)
              for (s = e._startTime; r && r._startTime > s;) r = r._prev;
            return r ? (e._next = r._next, r._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = r, this._recent = e, this._timeline && this._uncache(!0), this
          }, i._remove = function (e, t) {
            return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
          }, i.render = function (e, t, n) {
            var i, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = e; r;) i = r._next, (r._active || e >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = i
          }, i.rawTime = function () {
            return v || _.wake(), this._totalTime
          };
          var j = h("TweenLite", function (e, t, n) {
              if (O.call(this, t, n), this.render = j.prototype.render, null == e) throw "Cannot tween a null target.";
              this.target = e = "string" != typeof e ? e : j.selector(e) || e;
              var i, r, s, a = e.jquery || e.length && e !== p && e[0] && (e[0] === p || e[0].nodeType && e[0].style && !e.nodeType),
                o = this.vars.overwrite;
              if (this._overwrite = o = null == o ? G[j.defaultOverwrite] : "number" == typeof o ? o >> 0 : G[o], (a || e instanceof Array || e.push && w(e)) && "number" != typeof e[0])
                for (this._targets = s = l(e), this._propLookup = [], this._siblings = [], i = 0; i < s.length; i++)(r = s[i]) ? "string" != typeof r ? r.length && r !== p && r[0] && (r[0] === p || r[0].nodeType && r[0].style && !r.nodeType) ? (s.splice(i--, 1), this._targets = s = s.concat(l(r))) : (this._siblings[i] = ee(r, this, !1), 1 === o && 1 < this._siblings[i].length && ne(r, this, null, 1, this._siblings[i])) : "string" == typeof (r = s[i--] = j.selector(r)) && s.splice(i + 1, 1) : s.splice(i--, 1);
              else this._propLookup = {}, this._siblings = ee(e, this, !1), 1 === o && 1 < this._siblings.length && ne(e, this, null, 1, this._siblings);
              (this.vars.immediateRender || 0 === t && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -x, this.render(Math.min(0, -this._delay)))
            }, !0),
            M = function (e) {
              return e && e.length && e !== p && e[0] && (e[0] === p || e[0].nodeType && e[0].style && !e.nodeType)
            };
          (i = j.prototype = new O).constructor = j, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = i._lazy = !1, j.version = "2.1.3", j.defaultEase = i._ease = new A(null, null, 1, 1), j.defaultOverwrite = "auto", j.ticker = _, j.autoSleep = 120, j.lagSmoothing = function (e, t) {
            _.lagSmoothing(e, t)
          }, j.selector = p.$ || p.jQuery || function (e) {
            var t = p.$ || p.jQuery;
            return t ? (j.selector = t)(e) : (r || (r = p.document), r ? r.querySelectorAll ? r.querySelectorAll(e) : r.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e)
          };
          var N = [],
            L = {},
            I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            q = /[\+-]=-?[\.\d]/,
            z = function (e) {
              for (var t, n = this._firstPT; n;) t = n.blob ? 1 === e && null != this.end ? this.end : e ? this.join("") : this.start : n.c * e + n.s, n.m ? t = n.m.call(this._tween, t, this._target || n.t, this._tween) : t < 1e-6 && -1e-6 < t && !n.blob && (t = 0), n.f ? n.fp ? n.t[n.p](n.fp, t) : n.t[n.p](t) : n.t[n.p] = t, n = n._next
            },
            F = function (e) {
              return (1e3 * e | 0) / 1e3 + ""
            },
            H = function (e, t, n, i) {
              var r, s, a, o, l, u, c, f = [],
                h = 0,
                p = "",
                d = 0;
              for (f.start = e, f.end = t, e = f[0] = e + "", t = f[1] = t + "", n && (n(f), e = f[0], t = f[1]), f.length = 0, r = e.match(I) || [], s = t.match(I) || [], i && (i._next = null, i.blob = 1, f._firstPT = f._applyPT = i), l = s.length, o = 0; o < l; o++) c = s[o], p += (u = t.substr(h, t.indexOf(c, h) - h)) || !o ? u : ",", h += u.length, d ? d = (d + 1) % 5 : "rgba(" === u.substr(-5) && (d = 1), c === r[o] || r.length <= o ? p += c : (p && (f.push(p), p = ""), a = parseFloat(r[o]), f.push(a), f._firstPT = {
                _next: f._firstPT,
                t: f,
                p: f.length - 1,
                s: a,
                c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - a) || 0,
                f: 0,
                m: d && d < 4 ? Math.round : F
              }), h += c.length;
              return (p += t.substr(h)) && f.push(p), f.setRatio = z, q.test(t) && (f.end = null), f
            },
            W = function (e, t, n, i, r, s, a, o, l) {
              "function" == typeof i && (i = i(l || 0, e));
              var u = st(e[t]),
                c = "function" !== u ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3),
                f = "get" !== n ? n : c ? a ? e[c](a) : e[c]() : e[t],
                h = "string" == typeof i && "=" === i.charAt(1),
                p = {
                  t: e,
                  p: t,
                  s: f,
                  f: "function" === u,
                  pg: 0,
                  n: r || t,
                  m: s ? "function" == typeof s ? s : Math.round : 0,
                  pr: 0,
                  c: h ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - f || 0
                };
              if (("number" != typeof f || "number" != typeof i && !h) && (a || isNaN(f) || !h && isNaN(i) || "boolean" == typeof f || "boolean" == typeof i ? (p.fp = a, p = {
                  t: H(f, h ? parseFloat(p.s) + p.c + (p.s + "").replace(/[0-9\-\.]/g, "") : i, o || j.defaultStringFilter, p),
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 2,
                  pg: 0,
                  n: r || t,
                  pr: 0,
                  m: 0
                }) : (p.s = parseFloat(f), h || (p.c = parseFloat(i) - p.s || 0))), p.c) return (p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p
            },
            X = j._internals = {
              isArray: w,
              isSelector: M,
              lazyTweens: N,
              blobDif: H
            },
            $ = j._plugins = {},
            U = X.tweenLookup = {},
            Y = 0,
            V = X.reservedProps = {
              ease: 1,
              delay: 1,
              overwrite: 1,
              onComplete: 1,
              onCompleteParams: 1,
              onCompleteScope: 1,
              useFrames: 1,
              runBackwards: 1,
              startAt: 1,
              onUpdate: 1,
              onUpdateParams: 1,
              onUpdateScope: 1,
              onStart: 1,
              onStartParams: 1,
              onStartScope: 1,
              onReverseComplete: 1,
              onReverseCompleteParams: 1,
              onReverseCompleteScope: 1,
              onRepeat: 1,
              onRepeatParams: 1,
              onRepeatScope: 1,
              easeParams: 1,
              yoyo: 1,
              immediateRender: 1,
              repeat: 1,
              repeatDelay: 1,
              data: 1,
              paused: 1,
              reversed: 1,
              autoCSS: 1,
              lazy: 1,
              onOverwrite: 1,
              callbackScope: 1,
              stringFilter: 1,
              id: 1,
              yoyoEase: 1,
              stagger: 1
            },
            G = {
              none: 0,
              all: 1,
              auto: 2,
              concurrent: 3,
              allOnStart: 4,
              preexisting: 5,
              true: 1,
              false: 0
            },
            Q = O._rootFramesTimeline = new R,
            Z = O._rootTimeline = new R,
            J = 30,
            K = X.lazyRender = function () {
              var e, t, n = N.length;
              for (L = {}, e = 0; e < n; e++)(t = N[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
              N.length = 0
            };
          Z._startTime = _.time, Q._startTime = _.frame, Z._active = Q._active = !0, setTimeout(K, 1), O._updateRoot = j.render = function () {
            var e, t, n;
            if (N.length && K(), Z.render((_.time - Z._startTime) * Z._timeScale, !1, !1), Q.render((_.frame - Q._startTime) * Q._timeScale, !1, !1), N.length && K(), _.frame >= J) {
              for (n in J = _.frame + (parseInt(j.autoSleep, 10) || 120), U) {
                for (e = (t = U[n].tweens).length; - 1 < --e;) t[e]._gc && t.splice(e, 1);
                0 === t.length && delete U[n]
              }
              if ((!(n = Z._first) || n._paused) && j.autoSleep && !Q._first && 1 === _._listeners.tick.length) {
                for (; n && n._paused;) n = n._next;
                n || _.sleep()
              }
            }
          }, _.addEventListener("tick", O._updateRoot);
          var ee = function (e, t, n) {
              var i, r, s = e._gsTweenID;
              if (U[s || (e._gsTweenID = s = "t" + Y++)] || (U[s] = {
                  target: e,
                  tweens: []
                }), t && ((i = U[s].tweens)[r = i.length] = t, n))
                for (; - 1 < --r;) i[r] === t && i.splice(r, 1);
              return U[s].tweens
            },
            te = function (e, t, n, i) {
              var r, s, a = e.vars.onOverwrite;
              return a && (r = a(e, t, n, i)), (a = j.onOverwrite) && (s = a(e, t, n, i)), !1 !== r && !1 !== s
            },
            ne = function (e, t, n, i, r) {
              var s, a, o, l;
              if (1 === i || 4 <= i) {
                for (l = r.length, s = 0; s < l; s++)
                  if ((o = r[s]) !== t) o._gc || o._kill(null, e, t) && (a = !0);
                  else if (5 === i) break;
                return a
              }
              var u, c = t._startTime + x,
                f = [],
                h = 0,
                p = 0 === t._duration;
              for (s = r.length; - 1 < --s;)(o = r[s]) === t || o._gc || o._paused || (o._timeline !== t._timeline ? (u = u || ie(t, 0, p), 0 === ie(o, u, p) && (f[h++] = o)) : o._startTime <= c && o._startTime + o.totalDuration() / o._timeScale > c && ((p || !o._initted) && c - o._startTime <= 2e-8 || (f[h++] = o)));
              for (s = h; - 1 < --s;)
                if (l = (o = f[s])._firstPT, 2 === i && o._kill(n, e, t) && (a = !0), 2 !== i || !o._firstPT && o._initted && l) {
                  if (2 !== i && !te(o, t)) continue;
                  o._enabled(!1, !1) && (a = !0)
                }
              return a
            },
            ie = function (e, t, n) {
              for (var i = e._timeline, r = i._timeScale, s = e._startTime; i._timeline;) {
                if (s += i._startTime, r *= i._timeScale, i._paused) return -100;
                i = i._timeline
              }
              return t < (s /= r) ? s - t : n && s === t || !e._initted && s - t < 2e-8 ? x : (s += e.totalDuration() / e._timeScale / r) > t + x ? 0 : s - t - x
            };
          i._init = function () {
            var e, t, n, i, r, s, a = this.vars,
              o = this._overwrittenProps,
              l = this._duration,
              u = !!a.immediateRender,
              c = a.ease,
              f = this._startAt;
            if (a.startAt) {
              for (i in f && (f.render(-1, !0), f.kill()), r = {}, a.startAt) r[i] = a.startAt[i];
              if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = u && !1 !== a.lazy, r.startAt = r.delay = null, r.onUpdate = a.onUpdate, r.onUpdateParams = a.onUpdateParams, r.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = j.to(this.target || {}, 0, r), u)
                if (0 < this._time) this._startAt = null;
                else if (0 !== l) return
            } else if (a.runBackwards && 0 !== l)
              if (f) f.render(-1, !0), f.kill(), this._startAt = null;
              else {
                for (i in 0 !== this._time && (u = !1), n = {}, a) V[i] && "autoCSS" !== i || (n[i] = a[i]);
                if (n.overwrite = 0, n.data = "isFromStart", n.lazy = u && !1 !== a.lazy, n.immediateRender = u, this._startAt = j.to(this.target, 0, n), u) {
                  if (0 === this._time) return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
              }
            if (this._ease = c = c ? c instanceof A ? c : "function" == typeof c ? new A(c, a.easeParams) : C[c] || j.defaultEase : j.defaultEase, a.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
              for (s = this._targets.length, e = 0; e < s; e++) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], o ? o[e] : null, e) && (t = !0);
            else t = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
            if (t && j._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
              for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
            this._onUpdate = a.onUpdate, this._initted = !0
          }, i._initProps = function (e, t, n, i, r) {
            var s, a, o, l, u, c;
            if (null == e) return !1;
            for (s in L[e._gsTweenID] && K(), this.vars.css || e.style && e !== p && e.nodeType && $.css && !1 !== this.vars.autoCSS && function (e, t) {
                var n, i = {};
                for (n in e) V[n] || n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!$[n] || $[n] && $[n]._autoCSS) || (i[n] = e[n], delete e[n]);
                e.css = i
              }(this.vars, e), this.vars)
              if (c = this.vars[s], V[s]) c && (c instanceof Array || c.push && w(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
              else if ($[s] && (l = new $[s])._onInitTween(e, this.vars[s], this, r)) {
              for (this._firstPT = u = {
                  _next: this._firstPT,
                  t: l,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 1,
                  n: s,
                  pg: 1,
                  pr: l._priority,
                  m: 0
                }, a = l._overwriteProps.length; - 1 < --a;) t[l._overwriteProps[a]] = this._firstPT;
              (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
            } else t[s] = W.call(this, e, s, "get", c, s, 0, null, this.vars.stringFilter, r);
            return i && this._kill(i, e) ? this._initProps(e, t, n, i, r) : 1 < this._overwrite && this._firstPT && 1 < n.length && ne(e, this, t, this._overwrite, n) ? (this._kill(t, e), this._initProps(e, t, n, i, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), o)
          }, i.render = function (e, t, n) {
            var i, r, s, a, o = this,
              l = o._time,
              u = o._duration,
              c = o._rawPrevTime;
            if (u - x <= e && 0 <= e) o._totalTime = o._time = u, o.ratio = o._ease._calcEnd ? o._ease.getRatio(1) : 1, o._reversed || (i = !0, r = "onComplete", n = n || o._timeline.autoRemoveChildren), 0 === u && (o._initted || !o.vars.lazy || n) && (o._startTime === o._timeline._duration && (e = 0), (c < 0 || e <= 0 && -x <= e || c === x && "isPause" !== o.data) && c !== e && (n = !0, x < c && (r = "onReverseComplete")), o._rawPrevTime = a = !t || e || c === e ? e : x);
            else if (e < x) o._totalTime = o._time = 0, o.ratio = o._ease._calcEnd ? o._ease.getRatio(0) : 0, (0 !== l || 0 === u && 0 < c) && (r = "onReverseComplete", i = o._reversed), -x < e ? e = 0 : e < 0 && (o._active = !1, 0 === u && (o._initted || !o.vars.lazy || n) && (0 <= c && (c !== x || "isPause" !== o.data) && (n = !0), o._rawPrevTime = a = !t || e || c === e ? e : x)), (!o._initted || o._startAt && o._startAt.progress()) && (n = !0);
            else if (o._totalTime = o._time = e, o._easeType) {
              var f = e / u,
                h = o._easeType,
                p = o._easePower;
              (1 === h || 3 === h && .5 <= f) && (f = 1 - f), 3 === h && (f *= 2), 1 === p ? f *= f : 2 === p ? f *= f * f : 3 === p ? f *= f * f * f : 4 === p && (f *= f * f * f * f), o.ratio = 1 === h ? 1 - f : 2 === h ? f : e / u < .5 ? f / 2 : 1 - f / 2
            } else o.ratio = o._ease.getRatio(e / u);
            if (o._time !== l || n) {
              if (!o._initted) {
                if (o._init(), !o._initted || o._gc) return;
                if (!n && o._firstPT && (!1 !== o.vars.lazy && o._duration || o.vars.lazy && !o._duration)) return o._time = o._totalTime = l, o._rawPrevTime = c, N.push(o), void(o._lazy = [e, t]);
                o._time && !i ? o.ratio = o._ease.getRatio(o._time / u) : i && o._ease._calcEnd && (o.ratio = o._ease.getRatio(0 === o._time ? 0 : 1))
              }
              for (!1 !== o._lazy && (o._lazy = !1), o._active || !o._paused && o._time !== l && 0 <= e && (o._active = !0), 0 === l && (o._startAt && (0 <= e ? o._startAt.render(e, !0, n) : r || (r = "_dummyGS")), o.vars.onStart && (0 === o._time && 0 !== u || t || o._callback("onStart"))), s = o._firstPT; s;) s.f ? s.t[s.p](s.c * o.ratio + s.s) : s.t[s.p] = s.c * o.ratio + s.s, s = s._next;
              o._onUpdate && (e < 0 && o._startAt && -1e-4 !== e && o._startAt.render(e, !0, n), t || (o._time !== l || i || n) && o._callback("onUpdate")), r && (o._gc && !n || (e < 0 && o._startAt && !o._onUpdate && -1e-4 !== e && o._startAt.render(e, !0, n), i && (o._timeline.autoRemoveChildren && o._enabled(!1, !1), o._active = !1), !t && o.vars[r] && o._callback(r), 0 === u && o._rawPrevTime === x && a !== x && (o._rawPrevTime = 0)))
            }
          }, i._kill = function (e, t, n) {
            if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            t = "string" != typeof t ? t || this._targets || this.target : j.selector(t) || t;
            var i, r, s, a, o, l, u, c, f, h = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline,
              p = this._firstPT;
            if ((w(t) || M(t)) && "number" != typeof t[0])
              for (i = t.length; - 1 < --i;) this._kill(e, t[i], n) && (l = !0);
            else {
              if (this._targets) {
                for (i = this._targets.length; - 1 < --i;)
                  if (t === this._targets[i]) {
                    o = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[i] = e ? this._overwrittenProps[i] || {} : "all";
                    break
                  }
              } else {
                if (t !== this.target) return !1;
                o = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
              }
              if (o) {
                if (u = e || o, c = e !== r && "all" !== r && e !== o && ("object" !== st(e) || !e._tempKill), n && (j.onOverwrite || this.vars.onOverwrite)) {
                  for (s in u) o[s] && (f || (f = []), f.push(s));
                  if ((f || !e) && !te(this, n, t, f)) return !1
                }
                for (s in u)(a = o[s]) && (h && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(u) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[s]), c && (r[s] = 1);
                !this._firstPT && this._initted && p && this._enabled(!1, !1)
              }
            }
            return l
          }, i.invalidate = function () {
            this._notifyPluginsOfEnabled && j._onPluginEvent("_onDisable", this);
            var e = this._time;
            return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -x, this.render(e, !1, !1 !== this.vars.lazy)), this
          }, i._enabled = function (e, t) {
            if (v || _.wake(), e && this._gc) {
              var n, i = this._targets;
              if (i)
                for (n = i.length; - 1 < --n;) this._siblings[n] = ee(i[n], this, !0);
              else this._siblings = ee(this.target, this, !0)
            }
            return O.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && j._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
          }, j.to = function (e, t, n) {
            return new j(e, t, n)
          }, j.from = function (e, t, n) {
            return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new j(e, t, n)
          }, j.fromTo = function (e, t, n, i) {
            return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new j(e, t, i)
          }, j.delayedCall = function (e, t, n, i, r) {
            return new j(t, 0, {
              delay: e,
              onComplete: t,
              onCompleteParams: n,
              callbackScope: i,
              onReverseComplete: t,
              onReverseCompleteParams: n,
              immediateRender: !1,
              lazy: !1,
              useFrames: r,
              overwrite: 0
            })
          }, j.set = function (e, t) {
            return new j(e, 0, t)
          }, j.getTweensOf = function (e, t) {
            if (null == e) return [];
            var n, i, r, s;
            if (e = "string" != typeof e ? e : j.selector(e) || e, (w(e) || M(e)) && "number" != typeof e[0]) {
              for (n = e.length, i = []; - 1 < --n;) i = i.concat(j.getTweensOf(e[n], t));
              for (n = i.length; - 1 < --n;)
                for (s = i[n], r = n; - 1 < --r;) s === i[r] && i.splice(n, 1)
            } else if (e._gsTweenID)
              for (n = (i = ee(e).concat()).length; - 1 < --n;)(i[n]._gc || t && !i[n].isActive()) && i.splice(n, 1);
            return i || []
          }, j.killTweensOf = j.killDelayedCallsTo = function (e, t, n) {
            "object" === st(t) && (n = t, t = !1);
            for (var i = j.getTweensOf(e, t), r = i.length; - 1 < --r;) i[r]._kill(n, e)
          };
          var re = h("plugins.TweenPlugin", function (e, t) {
            this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = re.prototype
          }, !0);
          if (i = re.prototype, re.version = "1.19.0", re.API = 2, i._firstPT = null, i._addTween = W, i.setRatio = z, i._kill = function (e) {
              var t, n = this._overwriteProps,
                i = this._firstPT;
              if (null != e[this._propName]) this._overwriteProps = [];
              else
                for (t = n.length; - 1 < --t;) null != e[n[t]] && n.splice(t, 1);
              for (; i;) null != e[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
              return !1
            }, i._mod = i._roundProps = function (e) {
              for (var t, n = this._firstPT; n;)(t = e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")]) && "function" == typeof t && (2 === n.f ? n.t._applyPT.m = t : n.m = t), n = n._next
            }, j._onPluginEvent = function (e, t) {
              var n, i, r, s, a, o = t._firstPT;
              if ("_onInitAllProps" === e) {
                for (; o;) {
                  for (a = o._next, i = r; i && i.pr > o.pr;) i = i._next;
                  (o._prev = i ? i._prev : s) ? o._prev._next = o: r = o, (o._next = i) ? i._prev = o : s = o, o = a
                }
                o = t._firstPT = r
              }
              for (; o;) o.pg && "function" == typeof o.t[e] && o.t[e]() && (n = !0), o = o._next;
              return n
            }, re.activate = function (e) {
              for (var t = e.length; - 1 < --t;) e[t].API === re.API && ($[(new e[t])._propName] = e[t]);
              return !0
            }, u.plugin = function (e) {
              if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
              var t, n = e.propName,
                i = e.priority || 0,
                r = e.overwriteProps,
                s = {
                  init: "_onInitTween",
                  set: "setRatio",
                  kill: "_kill",
                  round: "_mod",
                  mod: "_mod",
                  initAll: "_onInitAllProps"
                },
                a = h("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function () {
                  re.call(this, n, i), this._overwriteProps = r || []
                }, !0 === e.global),
                o = a.prototype = new re(n);
              for (t in (o.constructor = a).API = e.API, s) "function" == typeof e[t] && (o[s[t]] = e[t]);
              return a.version = e.version, re.activate([a]), a
            }, t = p._gsQueue) {
            for (n = 0; n < t.length; n++) t[n]();
            for (i in T) T[i].func || p.console.log("GSAP encountered missing dependency: " + i)
          }
          v = !1
        }(void 0 !== se && se.exports && void 0 !== e ? e : window, "TweenMax")
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, {}],
  18: [function (e, i, t) {
    ! function (t, n) {
      "use strict";
      "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (e) {
        return n(t, e)
      }) : "object" == typeof i && i.exports ? i.exports = n(t, e("ev-emitter")) : t.imagesLoaded = n(t, t.EvEmitter)
    }("undefined" != typeof window ? window : this, function (t, e) {
      "use strict";
      var r = t.jQuery,
        s = t.console;

      function a(e, t) {
        for (var n in t) e[n] = t[n];
        return e
      }
      var o = Array.prototype.slice;

      function l(e, t, n) {
        if (!(this instanceof l)) return new l(e, t, n);
        var i = e;
        "string" == typeof e && (i = document.querySelectorAll(e)), i ? (this.elements = function (e) {
          return Array.isArray(e) ? e : "object" == typeof e && "number" == typeof e.length ? o.call(e) : [e]
        }(i), this.options = a({}, this.options), "function" == typeof t ? n = t : a(this.options, t), n && this.on("always", n), this.getImages(), r && (this.jqDeferred = new r.Deferred), setTimeout(this.check.bind(this))) : s.error("Bad element for imagesLoaded " + (i || e))
      }(l.prototype = Object.create(e.prototype)).options = {}, l.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
      }, l.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
            var r = n[i];
            this.addImage(r)
          }
          if ("string" == typeof this.options.background) {
            var s = e.querySelectorAll(this.options.background);
            for (i = 0; i < s.length; i++) {
              var a = s[i];
              this.addElementBackgroundImages(a)
            }
          }
        }
      };
      var u = {
        1: !0,
        9: !0,
        11: !0
      };

      function n(e) {
        this.img = e
      }

      function i(e, t) {
        this.url = e, this.element = t, this.img = new Image
      }
      return l.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
            var r = i && i[2];
            r && this.addBackground(r, e), i = n.exec(t.backgroundImage)
          }
      }, l.prototype.addImage = function (e) {
        var t = new n(e);
        this.images.push(t)
      }, l.prototype.addBackground = function (e, t) {
        var n = new i(e, t);
        this.images.push(n)
      }, l.prototype.check = function () {
        var i = this;

        function t(e, t, n) {
          setTimeout(function () {
            i.progress(e, t, n)
          })
        }
        this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (e) {
          e.once("progress", t), e.check()
        }) : this.complete()
      }, l.prototype.progress = function (e, t, n) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && s && s.log("progress: " + n, e, t)
      }, l.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this)
        }
      }, (n.prototype = Object.create(e.prototype)).check = function () {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
      }, n.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
      }, n.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
      }, n.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
      }, n.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
      }, n.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
      }, n.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
      }, (i.prototype = Object.create(n.prototype)).check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
      }, i.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
      }, i.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
      }, l.makeJQueryPlugin = function (e) {
        (e = e || t.jQuery) && ((r = e).fn.imagesLoaded = function (e, t) {
          return new l(this, e, t).jqDeferred.promise(r(this))
        })
      }, l.makeJQueryPlugin(), l
    })
  }, {
    "ev-emitter": 16
  }],
  19: [function (e, n, t) {
    ! function (e, t) {
      "use strict";
      "object" == typeof n && "object" == typeof n.exports ? n.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
      } : t(e)
    }("undefined" != typeof window ? window : this, function (T, e) {
      "use strict";
      var t = [],
        A = T.document,
        i = Object.getPrototypeOf,
        o = t.slice,
        m = t.concat,
        l = t.push,
        r = t.indexOf,
        n = {},
        s = n.toString,
        g = n.hasOwnProperty,
        a = g.toString,
        u = a.call(Object),
        _ = {},
        v = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType
        },
        y = function (e) {
          return null != e && e === e.window
        },
        c = {
          type: !0,
          src: !0,
          noModule: !0
        };

      function x(e, t, n) {
        var i, r = (t = t || A).createElement("script");
        if (r.text = e, n)
          for (i in c) n[i] && (r[i] = n[i]);
        t.head.appendChild(r).parentNode.removeChild(r)
      }

      function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[s.call(e)] || "object" : typeof e
      }
      var C = function (e, t) {
          return new C.fn.init(e, t)
        },
        f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

      function h(e) {
        var t = !!e && "length" in e && e.length,
          n = b(e);
        return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
      }
      C.fn = C.prototype = {
        jquery: "3.3.1",
        constructor: C,
        length: 0,
        toArray: function () {
          return o.call(this)
        },
        get: function (e) {
          return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
          var t = C.merge(this.constructor(), e);
          return t.prevObject = this, t
        },
        each: function (e) {
          return C.each(this, e)
        },
        map: function (n) {
          return this.pushStack(C.map(this, function (e, t) {
            return n.call(e, t, e)
          }))
        },
        slice: function () {
          return this.pushStack(o.apply(this, arguments))
        },
        first: function () {
          return this.eq(0)
        },
        last: function () {
          return this.eq(-1)
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
          return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
      }, C.extend = C.fn.extend = function () {
        var e, t, n, i, r, s, a = arguments[0] || {},
          o = 1,
          l = arguments.length,
          u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[o] || {}, o++), "object" == typeof a || v(a) || (a = {}), o === l && (a = this, o--); o < l; o++)
          if (null != (e = arguments[o]))
            for (t in e) n = a[t], a !== (i = e[t]) && (u && i && (C.isPlainObject(i) || (r = Array.isArray(i))) ? (s = r ? (r = !1, n && Array.isArray(n) ? n : []) : n && C.isPlainObject(n) ? n : {}, a[t] = C.extend(u, s, i)) : void 0 !== i && (a[t] = i));
        return a
      }, C.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
          var t, n;
          return !(!e || "[object Object]" !== s.call(e)) && (!(t = i(e)) || "function" == typeof (n = g.call(t, "constructor") && t.constructor) && a.call(n) === u)
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0
        },
        globalEval: function (e) {
          x(e)
        },
        each: function (e, t) {
          var n, i = 0;
          if (h(e))
            for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
          else
            for (i in e)
              if (!1 === t.call(e[i], i, e[i])) break;
          return e
        },
        trim: function (e) {
          return null == e ? "" : (e + "").replace(f, "")
        },
        makeArray: function (e, t) {
          var n = t || [];
          return null != e && (h(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : r.call(t, e, n)
        },
        merge: function (e, t) {
          for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
          return e.length = r, e
        },
        grep: function (e, t, n) {
          for (var i = [], r = 0, s = e.length, a = !n; r < s; r++) !t(e[r], r) != a && i.push(e[r]);
          return i
        },
        map: function (e, t, n) {
          var i, r, s = 0,
            a = [];
          if (h(e))
            for (i = e.length; s < i; s++) null != (r = t(e[s], s, n)) && a.push(r);
          else
            for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
          return m.apply([], a)
        },
        guid: 1,
        support: _
      }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
      });
      var p = function (n) {
        var e, p, x, s, r, d, f, m, b, l, u, w, T, a, A, g, o, c, _, C = "sizzle" + 1 * new Date,
          v = n.document,
          D = 0,
          i = 0,
          h = ae(),
          y = ae(),
          S = ae(),
          P = function (e, t) {
            return e === t && (u = !0), 0
          },
          k = {}.hasOwnProperty,
          t = [],
          B = t.pop,
          E = t.push,
          O = t.push,
          R = t.slice,
          j = function (e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              if (e[n] === t) return n;
            return -1
          },
          M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          N = "[\\x20\\t\\r\\n\\f]",
          L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          I = "\\[" + N + "*(" + L + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + N + "*\\]",
          q = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
          z = new RegExp(N + "+", "g"),
          F = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
          H = new RegExp("^" + N + "*," + N + "*"),
          W = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
          X = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"),
          $ = new RegExp(q),
          U = new RegExp("^" + L + "$"),
          Y = {
            ID: new RegExp("^#(" + L + ")"),
            CLASS: new RegExp("^\\.(" + L + ")"),
            TAG: new RegExp("^(" + L + "|[*])"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + M + ")$", "i"),
            needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
          },
          V = /^(?:input|select|textarea|button)$/i,
          G = /^h\d$/i,
          Q = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          J = /[+~]/,
          K = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
          ee = function (e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
          },
          te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ne = function (e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
          },
          ie = function () {
            w()
          },
          re = ve(function (e) {
            return !0 === e.disabled && ("form" in e || "label" in e)
          }, {
            dir: "parentNode",
            next: "legend"
          });
        try {
          O.apply(t = R.call(v.childNodes), v.childNodes), t[v.childNodes.length].nodeType
        } catch (e) {
          O = {
            apply: t.length ? function (e, t) {
              E.apply(e, R.call(t))
            } : function (e, t) {
              for (var n = e.length, i = 0; e[n++] = t[i++];);
              e.length = n - 1
            }
          }
        }

        function se(e, t, n, i) {
          var r, s, a, o, l, u, c, f = t && t.ownerDocument,
            h = t ? t.nodeType : 9;
          if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
          if (!i && ((t ? t.ownerDocument || t : v) !== T && w(t), t = t || T, A)) {
            if (11 !== h && (l = Z.exec(e)))
              if (r = l[1]) {
                if (9 === h) {
                  if (!(a = t.getElementById(r))) return n;
                  if (a.id === r) return n.push(a), n
                } else if (f && (a = f.getElementById(r)) && _(t, a) && a.id === r) return n.push(a), n
              } else {
                if (l[2]) return O.apply(n, t.getElementsByTagName(e)), n;
                if ((r = l[3]) && p.getElementsByClassName && t.getElementsByClassName) return O.apply(n, t.getElementsByClassName(r)), n
              }
            if (p.qsa && !S[e + " "] && (!g || !g.test(e))) {
              if (1 !== h) f = t, c = e;
              else if ("object" !== t.nodeName.toLowerCase()) {
                for ((o = t.getAttribute("id")) ? o = o.replace(te, ne) : t.setAttribute("id", o = C), s = (u = d(e)).length; s--;) u[s] = "#" + o + " " + _e(u[s]);
                c = u.join(","), f = J.test(e) && me(t.parentNode) || t
              }
              if (c) try {
                return O.apply(n, f.querySelectorAll(c)), n
              } catch (e) {} finally {
                o === C && t.removeAttribute("id")
              }
            }
          }
          return m(e.replace(F, "$1"), t, n, i)
        }

        function ae() {
          var i = [];
          return function e(t, n) {
            return i.push(t + " ") > x.cacheLength && delete e[i.shift()], e[t + " "] = n
          }
        }

        function oe(e) {
          return e[C] = !0, e
        }

        function le(e) {
          var t = T.createElement("fieldset");
          try {
            return !!e(t)
          } catch (e) {
            return !1
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null
          }
        }

        function ue(e, t) {
          for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t
        }

        function ce(e, t) {
          var n = t && e,
            i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (i) return i;
          if (n)
            for (; n = n.nextSibling;)
              if (n === t) return -1;
          return e ? 1 : -1
        }

        function fe(t) {
          return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t
          }
        }

        function he(n) {
          return function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n
          }
        }

        function pe(t) {
          return function (e) {
            return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label" in e && e.disabled === t
          }
        }

        function de(a) {
          return oe(function (s) {
            return s = +s, oe(function (e, t) {
              for (var n, i = a([], e.length, s), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
            })
          })
        }

        function me(e) {
          return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = se.support = {}, r = se.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
          }, w = se.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : v;
            return i !== T && 9 === i.nodeType && i.documentElement && (a = (T = i).documentElement, A = !r(T), v !== T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ie, !1) : n.attachEvent && n.attachEvent("onunload", ie)), p.attributes = le(function (e) {
              return e.className = "i", !e.getAttribute("className")
            }), p.getElementsByTagName = le(function (e) {
              return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
            }), p.getElementsByClassName = Q.test(T.getElementsByClassName), p.getById = le(function (e) {
              return a.appendChild(e).id = C, !T.getElementsByName || !T.getElementsByName(C).length
            }), p.getById ? (x.filter.ID = function (e) {
              var t = e.replace(K, ee);
              return function (e) {
                return e.getAttribute("id") === t
              }
            }, x.find.ID = function (e, t) {
              if (void 0 !== t.getElementById && A) {
                var n = t.getElementById(e);
                return n ? [n] : []
              }
            }) : (x.filter.ID = function (e) {
              var n = e.replace(K, ee);
              return function (e) {
                var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                return t && t.value === n
              }
            }, x.find.ID = function (e, t) {
              if (void 0 !== t.getElementById && A) {
                var n, i, r, s = t.getElementById(e);
                if (s) {
                  if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                  for (r = t.getElementsByName(e), i = 0; s = r[i++];)
                    if ((n = s.getAttributeNode("id")) && n.value === e) return [s]
                }
                return []
              }
            }), x.find.TAG = p.getElementsByTagName ? function (e, t) {
              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
              var n, i = [],
                r = 0,
                s = t.getElementsByTagName(e);
              if ("*" !== e) return s;
              for (; n = s[r++];) 1 === n.nodeType && i.push(n);
              return i
            }, x.find.CLASS = p.getElementsByClassName && function (e, t) {
              if (void 0 !== t.getElementsByClassName && A) return t.getElementsByClassName(e)
            }, o = [], g = [], (p.qsa = Q.test(T.querySelectorAll)) && (le(function (e) {
              a.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + N + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + N + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + C + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || g.push(".#.+[+~]")
            }), le(function (e) {
              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = T.createElement("input");
              t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + N + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (p.matchesSelector = Q.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && le(function (e) {
              p.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), o.push("!=", q)
            }), g = g.length && new RegExp(g.join("|")), o = o.length && new RegExp(o.join("|")), t = Q.test(a.compareDocumentPosition), _ = t || Q.test(a.contains) ? function (e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e,
                i = t && t.parentNode;
              return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
              if (t)
                for (; t = t.parentNode;)
                  if (t === e) return !0;
              return !1
            }, P = t ? function (e, t) {
              if (e === t) return u = !0, 0;
              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument === v && _(v, e) ? -1 : t === T || t.ownerDocument === v && _(v, t) ? 1 : l ? j(l, e) - j(l, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
              if (e === t) return u = !0, 0;
              var n, i = 0,
                r = e.parentNode,
                s = t.parentNode,
                a = [e],
                o = [t];
              if (!r || !s) return e === T ? -1 : t === T ? 1 : r ? -1 : s ? 1 : l ? j(l, e) - j(l, t) : 0;
              if (r === s) return ce(e, t);
              for (n = e; n = n.parentNode;) a.unshift(n);
              for (n = t; n = n.parentNode;) o.unshift(n);
              for (; a[i] === o[i];) i++;
              return i ? ce(a[i], o[i]) : a[i] === v ? -1 : o[i] === v ? 1 : 0
            }), T
          }, se.matches = function (e, t) {
            return se(e, null, null, t)
          }, se.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== T && w(e), t = t.replace(X, "='$1']"), p.matchesSelector && A && !S[t + " "] && (!o || !o.test(t)) && (!g || !g.test(t))) try {
              var n = c.call(e, t);
              if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {}
            return 0 < se(t, T, null, [e]).length
          }, se.contains = function (e, t) {
            return (e.ownerDocument || e) !== T && w(e), _(e, t)
          }, se.attr = function (e, t) {
            (e.ownerDocument || e) !== T && w(e);
            var n = x.attrHandle[t.toLowerCase()],
              i = n && k.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
            return void 0 !== i ? i : p.attributes || !A ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
          }, se.escape = function (e) {
            return (e + "").replace(te, ne)
          }, se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
          }, se.uniqueSort = function (e) {
            var t, n = [],
              i = 0,
              r = 0;
            if (u = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(P), u) {
              for (; t = e[r++];) t === e[r] && (i = n.push(r));
              for (; i--;) e.splice(n[i], 1)
            }
            return l = null, e
          }, s = se.getText = function (e) {
            var t, n = "",
              i = 0,
              r = e.nodeType;
            if (r) {
              if (1 === r || 9 === r || 11 === r) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
              } else if (3 === r || 4 === r) return e.nodeValue
            } else
              for (; t = e[i++];) n += s(t);
            return n
          }, (x = se.selectors = {
            cacheLength: 50,
            createPseudo: oe,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
              ">": {
                dir: "parentNode",
                first: !0
              },
              " ": {
                dir: "parentNode"
              },
              "+": {
                dir: "previousSibling",
                first: !0
              },
              "~": {
                dir: "previousSibling"
              }
            },
            preFilter: {
              ATTR: function (e) {
                return e[1] = e[1].replace(K, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(K, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
              },
              CHILD: function (e) {
                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
              },
              PSEUDO: function (e) {
                var t, n = !e[6] && e[2];
                return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
              }
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(K, ee).toLowerCase();
                return "*" === e ? function () {
                  return !0
                } : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t
                }
              },
              CLASS: function (e) {
                var t = h[e + " "];
                return t || (t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) && h(e, function (e) {
                  return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                })
              },
              ATTR: function (n, i, r) {
                return function (e) {
                  var t = se.attr(e, n);
                  return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(z, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                }
              },
              CHILD: function (d, e, t, m, g) {
                var _ = "nth" !== d.slice(0, 3),
                  v = "last" !== d.slice(-4),
                  y = "of-type" === e;
                return 1 === m && 0 === g ? function (e) {
                  return !!e.parentNode
                } : function (e, t, n) {
                  var i, r, s, a, o, l, u = _ != v ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = y && e.nodeName.toLowerCase(),
                    h = !n && !y,
                    p = !1;
                  if (c) {
                    if (_) {
                      for (; u;) {
                        for (a = e; a = a[u];)
                          if (y ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                        l = u = "only" === d && !l && "nextSibling"
                      }
                      return !0
                    }
                    if (l = [v ? c.firstChild : c.lastChild], v && h) {
                      for (p = (o = (i = (r = (s = (a = c)[C] || (a[C] = {}))[a.uniqueID] || (s[a.uniqueID] = {}))[d] || [])[0] === D && i[1]) && i[2], a = o && c.childNodes[o]; a = ++o && a && a[u] || (p = o = 0) || l.pop();)
                        if (1 === a.nodeType && ++p && a === e) {
                          r[d] = [D, o, p];
                          break
                        }
                    } else if (h && (p = o = (i = (r = (s = (a = e)[C] || (a[C] = {}))[a.uniqueID] || (s[a.uniqueID] = {}))[d] || [])[0] === D && i[1]), !1 === p)
                      for (;
                        (a = ++o && a && a[u] || (p = o = 0) || l.pop()) && ((y ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++p || (h && ((r = (s = a[C] || (a[C] = {}))[a.uniqueID] || (s[a.uniqueID] = {}))[d] = [D, p]), a !== e)););
                    return (p -= g) === m || p % m == 0 && 0 <= p / m
                  }
                }
              },
              PSEUDO: function (e, s) {
                var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                return a[C] ? a(s) : 1 < a.length ? (t = [e, e, "", s], x.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function (e, t) {
                  for (var n, i = a(e, s), r = i.length; r--;) e[n = j(e, i[r])] = !(t[n] = i[r])
                }) : function (e) {
                  return a(e, 0, t)
                }) : a
              }
            },
            pseudos: {
              not: oe(function (e) {
                var i = [],
                  r = [],
                  o = f(e.replace(F, "$1"));
                return o[C] ? oe(function (e, t, n, i) {
                  for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                }) : function (e, t, n) {
                  return i[0] = e, o(i, null, n, r), i[0] = null, !r.pop()
                }
              }),
              has: oe(function (t) {
                return function (e) {
                  return 0 < se(t, e).length
                }
              }),
              contains: oe(function (t) {
                return t = t.replace(K, ee),
                  function (e) {
                    return -1 < (e.textContent || e.innerText || s(e)).indexOf(t)
                  }
              }),
              lang: oe(function (n) {
                return U.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(K, ee).toLowerCase(),
                  function (e) {
                    var t;
                    do {
                      if (t = A ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1
                  }
              }),
              target: function (e) {
                var t = n.location && n.location.hash;
                return t && t.slice(1) === e.id
              },
              root: function (e) {
                return e === a
              },
              focus: function (e) {
                return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              },
              enabled: pe(!1),
              disabled: pe(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && !!e.checked || "option" === t && !!e.selected
              },
              selected: function (e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0
              },
              parent: function (e) {
                return !x.pseudos.empty(e)
              },
              header: function (e) {
                return G.test(e.nodeName)
              },
              input: function (e) {
                return V.test(e.nodeName)
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && "button" === e.type || "button" === t
              },
              text: function (e) {
                var t;
                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              },
              first: de(function () {
                return [0]
              }),
              last: de(function (e, t) {
                return [t - 1]
              }),
              eq: de(function (e, t, n) {
                return [n < 0 ? n + t : n]
              }),
              even: de(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e
              }),
              odd: de(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e
              }),
              lt: de(function (e, t, n) {
                for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                return e
              }),
              gt: de(function (e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                return e
              })
            }
          }).pseudos.nth = x.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
          }) x.pseudos[e] = fe(e);
        for (e in {
            submit: !0,
            reset: !0
          }) x.pseudos[e] = he(e);

        function ge() {}

        function _e(e) {
          for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
          return i
        }

        function ve(o, e, t) {
          var l = e.dir,
            u = e.next,
            c = u || l,
            f = t && "parentNode" === c,
            h = i++;
          return e.first ? function (e, t, n) {
            for (; e = e[l];)
              if (1 === e.nodeType || f) return o(e, t, n);
            return !1
          } : function (e, t, n) {
            var i, r, s, a = [D, h];
            if (n) {
              for (; e = e[l];)
                if ((1 === e.nodeType || f) && o(e, t, n)) return !0
            } else
              for (; e = e[l];)
                if (1 === e.nodeType || f)
                  if (r = (s = e[C] || (e[C] = {}))[e.uniqueID] || (s[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[l] || e;
                  else {
                    if ((i = r[c]) && i[0] === D && i[1] === h) return a[2] = i[2];
                    if ((r[c] = a)[2] = o(e, t, n)) return !0
                  } return !1
          }
        }

        function ye(r) {
          return 1 < r.length ? function (e, t, n) {
            for (var i = r.length; i--;)
              if (!r[i](e, t, n)) return !1;
            return !0
          } : r[0]
        }

        function xe(e, t, n, i, r) {
          for (var s, a = [], o = 0, l = e.length, u = null != t; o < l; o++)(s = e[o]) && (n && !n(s, i, r) || (a.push(s), u && t.push(o)));
          return a
        }

        function be(p, d, m, g, _, e) {
          return g && !g[C] && (g = be(g)), _ && !_[C] && (_ = be(_, e)), oe(function (e, t, n, i) {
            var r, s, a, o = [],
              l = [],
              u = t.length,
              c = e || function (e, t, n) {
                for (var i = 0, r = t.length; i < r; i++) se(e, t[i], n);
                return n
              }(d || "*", n.nodeType ? [n] : n, []),
              f = !p || !e && d ? c : xe(c, o, p, n, i),
              h = m ? _ || (e ? p : u || g) ? [] : t : f;
            if (m && m(f, h, n, i), g)
              for (r = xe(h, l), g(r, [], n, i), s = r.length; s--;)(a = r[s]) && (h[l[s]] = !(f[l[s]] = a));
            if (e) {
              if (_ || p) {
                if (_) {
                  for (r = [], s = h.length; s--;)(a = h[s]) && r.push(f[s] = a);
                  _(null, h = [], r, i)
                }
                for (s = h.length; s--;)(a = h[s]) && -1 < (r = _ ? j(e, a) : o[s]) && (e[r] = !(t[r] = a))
              }
            } else h = xe(h === t ? h.splice(u, h.length) : h), _ ? _(null, t, h, i) : O.apply(t, h)
          })
        }

        function we(e) {
          for (var r, t, n, i = e.length, s = x.relative[e[0].type], a = s || x.relative[" "], o = s ? 1 : 0, l = ve(function (e) {
              return e === r
            }, a, !0), u = ve(function (e) {
              return -1 < j(r, e)
            }, a, !0), c = [function (e, t, n) {
              var i = !s && (n || t !== b) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
              return r = null, i
            }]; o < i; o++)
            if (t = x.relative[e[o].type]) c = [ve(ye(c), t)];
            else {
              if ((t = x.filter[e[o].type].apply(null, e[o].matches))[C]) {
                for (n = ++o; n < i && !x.relative[e[n].type]; n++);
                return be(1 < o && ye(c), 1 < o && _e(e.slice(0, o - 1).concat({
                  value: " " === e[o - 2].type ? "*" : ""
                })).replace(F, "$1"), t, o < n && we(e.slice(o, n)), n < i && we(e = e.slice(n)), n < i && _e(e))
              }
              c.push(t)
            }
          return ye(c)
        }
        return ge.prototype = x.filters = x.pseudos, x.setFilters = new ge, d = se.tokenize = function (e, t) {
          var n, i, r, s, a, o, l, u = y[e + " "];
          if (u) return t ? 0 : u.slice(0);
          for (a = e, o = [], l = x.preFilter; a;) {
            for (s in n && !(i = H.exec(a)) || (i && (a = a.slice(i[0].length) || a), o.push(r = [])), n = !1, (i = W.exec(a)) && (n = i.shift(), r.push({
                value: n,
                type: i[0].replace(F, " ")
              }), a = a.slice(n.length)), x.filter) !(i = Y[s].exec(a)) || l[s] && !(i = l[s](i)) || (n = i.shift(), r.push({
              value: n,
              type: s,
              matches: i
            }), a = a.slice(n.length));
            if (!n) break
          }
          return t ? a.length : a ? se.error(e) : y(e, o).slice(0)
        }, f = se.compile = function (e, t) {
          var n, i = [],
            r = [],
            s = S[e + " "];
          if (!s) {
            for (t || (t = d(e)), n = t.length; n--;)(s = we(t[n]))[C] ? i.push(s) : r.push(s);
            (s = S(e, function (g, _) {
              var v = 0 < _.length,
                y = 0 < g.length,
                e = function (e, t, n, i, r) {
                  var s, a, o, l = 0,
                    u = "0",
                    c = e && [],
                    f = [],
                    h = b,
                    p = e || y && x.find.TAG("*", r),
                    d = D += null == h ? 1 : Math.random() || .1,
                    m = p.length;
                  for (r && (b = t === T || t || r); u !== m && null != (s = p[u]); u++) {
                    if (y && s) {
                      for (a = 0, t || s.ownerDocument === T || (w(s), n = !A); o = g[a++];)
                        if (o(s, t || T, n)) {
                          i.push(s);
                          break
                        }
                      r && (D = d)
                    }
                    v && ((s = !o && s) && l--, e && c.push(s))
                  }
                  if (l += u, v && u !== l) {
                    for (a = 0; o = _[a++];) o(c, f, t, n);
                    if (e) {
                      if (0 < l)
                        for (; u--;) c[u] || f[u] || (f[u] = B.call(i));
                      f = xe(f)
                    }
                    O.apply(i, f), r && !e && 0 < f.length && 1 < l + _.length && se.uniqueSort(i)
                  }
                  return r && (D = d, b = h), c
                };
              return v ? oe(e) : e
            }(r, i))).selector = e
          }
          return s
        }, m = se.select = function (e, t, n, i) {
          var r, s, a, o, l, u = "function" == typeof e && e,
            c = !i && d(e = u.selector || e);
          if (n = n || [], 1 === c.length) {
            if (2 < (s = c[0] = c[0].slice(0)).length && "ID" === (a = s[0]).type && 9 === t.nodeType && A && x.relative[s[1].type]) {
              if (!(t = (x.find.ID(a.matches[0].replace(K, ee), t) || [])[0])) return n;
              u && (t = t.parentNode), e = e.slice(s.shift().value.length)
            }
            for (r = Y.needsContext.test(e) ? 0 : s.length; r-- && (a = s[r], !x.relative[o = a.type]);)
              if ((l = x.find[o]) && (i = l(a.matches[0].replace(K, ee), J.test(s[0].type) && me(t.parentNode) || t))) {
                if (s.splice(r, 1), !(e = i.length && _e(s))) return O.apply(n, i), n;
                break
              }
          }
          return (u || f(e, c))(i, t, !A, n, !t || J.test(e) && me(t.parentNode) || t), n
        }, p.sortStable = C.split("").sort(P).join("") === C, p.detectDuplicates = !!u, w(), p.sortDetached = le(function (e) {
          return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), le(function (e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), p.attributes && le(function (e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ue("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function (e) {
          return null == e.getAttribute("disabled")
        }) || ue(M, function (e, t, n) {
          var i;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), se
      }(T);
      C.find = p, C.expr = p.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = p.uniqueSort, C.text = p.getText, C.isXMLDoc = p.isXML, C.contains = p.contains, C.escapeSelector = p.escape;
      var d = function (e, t, n) {
          for (var i = [], r = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
              if (r && C(e).is(n)) break;
              i.push(e)
            }
          return i
        },
        w = function (e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n
        },
        D = C.expr.match.needsContext;

      function S(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      }
      var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

      function k(e, n, i) {
        return v(n) ? C.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== i
        }) : n.nodeType ? C.grep(e, function (e) {
          return e === n !== i
        }) : "string" != typeof n ? C.grep(e, function (e) {
          return -1 < r.call(n, e) !== i
        }) : C.filter(n, e, i)
      }
      C.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function (e) {
          return 1 === e.nodeType
        }))
      }, C.fn.extend({
        find: function (e) {
          var t, n, i = this.length,
            r = this;
          if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
            for (t = 0; t < i; t++)
              if (C.contains(r[t], this)) return !0
          }));
          for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, r[t], n);
          return 1 < i ? C.uniqueSort(n) : n
        },
        filter: function (e) {
          return this.pushStack(k(this, e || [], !1))
        },
        not: function (e) {
          return this.pushStack(k(this, e || [], !0))
        },
        is: function (e) {
          return !!k(this, "string" == typeof e && D.test(e) ? C(e) : e || [], !1).length
        }
      });
      var B, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (C.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || B, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : E.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
          if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : A, !0)), P.test(i[1]) && C.isPlainObject(t))
            for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this
        }
        return (r = A.getElementById(i[2])) && (this[0] = r, this.length = 1), this
      }).prototype = C.fn, B = C(A);
      var O = /^(?:parents|prev(?:Until|All))/,
        R = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };

      function j(e, t) {
        for (;
          (e = e[t]) && 1 !== e.nodeType;);
        return e
      }
      C.fn.extend({
        has: function (e) {
          var t = C(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++)
              if (C.contains(this, t[e])) return !0
          })
        },
        closest: function (e, t) {
          var n, i = 0,
            r = this.length,
            s = [],
            a = "string" != typeof e && C(e);
          if (!D.test(e))
            for (; i < r; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
                if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                  s.push(n);
                  break
                }
          return this.pushStack(1 < s.length ? C.uniqueSort(s) : s)
        },
        index: function (e) {
          return e ? "string" == typeof e ? r.call(C(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
          return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        },
        addBack: function (e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
      }), C.each({
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
          return d(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
          return d(e, "parentNode", n)
        },
        next: function (e) {
          return j(e, "nextSibling")
        },
        prev: function (e) {
          return j(e, "previousSibling")
        },
        nextAll: function (e) {
          return d(e, "nextSibling")
        },
        prevAll: function (e) {
          return d(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
          return d(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
          return d(e, "previousSibling", n)
        },
        siblings: function (e) {
          return w((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
          return w(e.firstChild)
        },
        contents: function (e) {
          return S(e, "iframe") ? e.contentDocument : (S(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
        }
      }, function (i, r) {
        C.fn[i] = function (e, t) {
          var n = C.map(this, r, e);
          return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (R[i] || C.uniqueSort(n), O.test(i) && n.reverse()), this.pushStack(n)
        }
      });
      var M = /[^\x20\t\r\n\f]+/g;

      function N(e) {
        return e
      }

      function L(e) {
        throw e
      }

      function I(e, t, n, i) {
        var r;
        try {
          e && v(r = e.promise) ? r.call(e).done(t).fail(n) : e && v(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
          n.apply(void 0, [e])
        }
      }
      C.Callbacks = function (i) {
        i = "string" == typeof i ? function (e) {
          var n = {};
          return C.each(e.match(M) || [], function (e, t) {
            n[t] = !0
          }), n
        }(i) : C.extend({}, i);
        var n, e, t, r, s = [],
          a = [],
          o = -1,
          l = function () {
            for (r = r || i.once, t = n = !0; a.length; o = -1)
              for (e = a.shift(); ++o < s.length;) !1 === s[o].apply(e[0], e[1]) && i.stopOnFalse && (o = s.length, e = !1);
            i.memory || (e = !1), n = !1, r && (s = e ? [] : "")
          },
          u = {
            add: function () {
              return s && (e && !n && (o = s.length - 1, a.push(e)), function n(e) {
                C.each(e, function (e, t) {
                  v(t) ? i.unique && u.has(t) || s.push(t) : t && t.length && "string" !== b(t) && n(t)
                })
              }(arguments), e && !n && l()), this
            },
            remove: function () {
              return C.each(arguments, function (e, t) {
                for (var n; - 1 < (n = C.inArray(t, s, n));) s.splice(n, 1), n <= o && o--
              }), this
            },
            has: function (e) {
              return e ? -1 < C.inArray(e, s) : 0 < s.length
            },
            empty: function () {
              return s && (s = []), this
            },
            disable: function () {
              return r = a = [], s = e = "", this
            },
            disabled: function () {
              return !s
            },
            lock: function () {
              return r = a = [], e || n || (s = e = ""), this
            },
            locked: function () {
              return !!r
            },
            fireWith: function (e, t) {
              return r || (t = [e, (t = t || []).slice ? t.slice() : t], a.push(t), n || l()), this
            },
            fire: function () {
              return u.fireWith(this, arguments), this
            },
            fired: function () {
              return !!t
            }
          };
        return u
      }, C.extend({
        Deferred: function (e) {
          var s = [
              ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
              ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
              ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
            ],
            r = "pending",
            a = {
              state: function () {
                return r
              },
              always: function () {
                return o.done(arguments).fail(arguments), this
              },
              catch: function (e) {
                return a.then(null, e)
              },
              pipe: function () {
                var r = arguments;
                return C.Deferred(function (i) {
                  C.each(s, function (e, t) {
                    var n = v(r[t[4]]) && r[t[4]];
                    o[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && v(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                    })
                  }), r = null
                }).promise()
              },
              then: function (t, n, i) {
                var l = 0;

                function u(r, s, a, o) {
                  return function () {
                    var n = this,
                      i = arguments,
                      e = function () {
                        var e, t;
                        if (!(r < l)) {
                          if ((e = a.apply(n, i)) === s.promise()) throw new TypeError("Thenable self-resolution");
                          t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? o ? t.call(e, u(l, s, N, o), u(l, s, L, o)) : (l++, t.call(e, u(l, s, N, o), u(l, s, L, o), u(l, s, N, s.notifyWith))) : (a !== N && (n = void 0, i = [e]), (o || s.resolveWith)(n, i))
                        }
                      },
                      t = o ? e : function () {
                        try {
                          e()
                        } catch (e) {
                          C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (a !== L && (n = void 0, i = [e]), s.rejectWith(n, i))
                        }
                      };
                    r ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), T.setTimeout(t))
                  }
                }
                return C.Deferred(function (e) {
                  s[0][3].add(u(0, e, v(i) ? i : N, e.notifyWith)), s[1][3].add(u(0, e, v(t) ? t : N)), s[2][3].add(u(0, e, v(n) ? n : L))
                }).promise()
              },
              promise: function (e) {
                return null != e ? C.extend(e, a) : a
              }
            },
            o = {};
          return C.each(s, function (e, t) {
            var n = t[2],
              i = t[5];
            a[t[1]] = n.add, i && n.add(function () {
              r = i
            }, s[3 - e][2].disable, s[3 - e][3].disable, s[0][2].lock, s[0][3].lock), n.add(t[3].fire), o[t[0]] = function () {
              return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
            }, o[t[0] + "With"] = n.fireWith
          }), a.promise(o), e && e.call(o, o), o
        },
        when: function (e) {
          var n = arguments.length,
            t = n,
            i = Array(t),
            r = o.call(arguments),
            s = C.Deferred(),
            a = function (t) {
              return function (e) {
                i[t] = this, r[t] = 1 < arguments.length ? o.call(arguments) : e, --n || s.resolveWith(i, r)
              }
            };
          if (n <= 1 && (I(e, s.done(a(t)).resolve, s.reject, !n), "pending" === s.state() || v(r[t] && r[t].then))) return s.then();
          for (; t--;) I(r[t], a(t), s.reject);
          return s.promise()
        }
      });
      var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      C.Deferred.exceptionHook = function (e, t) {
        T.console && T.console.warn && e && q.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
      }, C.readyException = function (e) {
        T.setTimeout(function () {
          throw e
        })
      };
      var z = C.Deferred();

      function F() {
        A.removeEventListener("DOMContentLoaded", F), T.removeEventListener("load", F), C.ready()
      }
      C.fn.ready = function (e) {
        return z.then(e).catch(function (e) {
          C.readyException(e)
        }), this
      }, C.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || z.resolveWith(A, [C])
        }
      }), C.ready.then = z.then, "complete" === A.readyState || "loading" !== A.readyState && !A.documentElement.doScroll ? T.setTimeout(C.ready) : (A.addEventListener("DOMContentLoaded", F), T.addEventListener("load", F));
      var H = function (e, t, n, i, r, s, a) {
          var o = 0,
            l = e.length,
            u = null == n;
          if ("object" === b(n))
            for (o in r = !0, n) H(e, t, o, n[o], !0, s, a);
          else if (void 0 !== i && (r = !0, v(i) || (a = !0), u && (t = a ? (t.call(e, i), null) : (u = t, function (e, t, n) {
              return u.call(C(e), n)
            })), t))
            for (; o < l; o++) t(e[o], n, a ? i : i.call(e[o], o, t(e[o], n)));
          return r ? e : u ? t.call(e) : l ? t(e[0], n) : s
        },
        W = /^-ms-/,
        X = /-([a-z])/g;

      function $(e, t) {
        return t.toUpperCase()
      }

      function U(e) {
        return e.replace(W, "ms-").replace(X, $)
      }
      var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      };

      function V() {
        this.expando = C.expando + V.uid++
      }
      V.uid = 1, V.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
          }))), t
        },
        set: function (e, t, n) {
          var i, r = this.cache(e);
          if ("string" == typeof t) r[U(t)] = n;
          else
            for (i in t) r[U(i)] = t[i];
          return r
        },
        get: function (e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
        },
        access: function (e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
          var n, i = e[this.expando];
          if (void 0 !== i) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in i ? [t] : t.match(M) || []).length;
              for (; n--;) delete i[t[n]]
            }(void 0 === t || C.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !C.isEmptyObject(t)
        }
      };
      var G = new V,
        Q = new V,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

      function K(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
          if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
            try {
              n = function (e) {
                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
              }(n)
            } catch (e) {}
            Q.set(e, t, n)
          } else n = void 0;
        return n
      }
      C.extend({
        hasData: function (e) {
          return Q.hasData(e) || G.hasData(e)
        },
        data: function (e, t, n) {
          return Q.access(e, t, n)
        },
        removeData: function (e, t) {
          Q.remove(e, t)
        },
        _data: function (e, t, n) {
          return G.access(e, t, n)
        },
        _removeData: function (e, t) {
          G.remove(e, t)
        }
      }), C.fn.extend({
        data: function (n, e) {
          var t, i, r, s = this[0],
            a = s && s.attributes;
          if (void 0 !== n) return "object" == typeof n ? this.each(function () {
            Q.set(this, n)
          }) : H(this, function (e) {
            var t;
            if (s && void 0 === e) return void 0 !== (t = Q.get(s, n)) ? t : void 0 !== (t = K(s, n)) ? t : void 0;
            this.each(function () {
              Q.set(this, n, e)
            })
          }, null, e, 1 < arguments.length, null, !0);
          if (this.length && (r = Q.get(s), 1 === s.nodeType && !G.get(s, "hasDataAttrs"))) {
            for (t = a.length; t--;) a[t] && 0 === (i = a[t].name).indexOf("data-") && (i = U(i.slice(5)), K(s, i, r[i]));
            G.set(s, "hasDataAttrs", !0)
          }
          return r
        },
        removeData: function (e) {
          return this.each(function () {
            Q.remove(this, e)
          })
        }
      }), C.extend({
        queue: function (e, t, n) {
          var i;
          if (e) return t = (t || "fx") + "queue", i = G.get(e, t), n && (!i || Array.isArray(n) ? i = G.access(e, t, C.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = C.queue(e, t),
            i = n.length,
            r = n.shift(),
            s = C._queueHooks(e, t);
          "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, function () {
            C.dequeue(e, t)
          }, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return G.get(e, n) || G.access(e, n, {
            empty: C.Callbacks("once memory").add(function () {
              G.remove(e, [t + "queue", n])
            })
          })
        }
      }), C.fn.extend({
        queue: function (t, n) {
          var e = 2;
          return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function () {
            var e = C.queue(this, t, n);
            C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
          })
        },
        dequeue: function (e) {
          return this.each(function () {
            C.dequeue(this, e)
          })
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
          var n, i = 1,
            r = C.Deferred(),
            s = this,
            a = this.length,
            o = function () {
              --i || r.resolveWith(s, [s])
            };
          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = G.get(s[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(o));
          return o(), r.promise(t)
        }
      });
      var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = function (e, t) {
          return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
        },
        re = function (e, t, n, i) {
          var r, s, a = {};
          for (s in t) a[s] = e.style[s], e.style[s] = t[s];
          for (s in r = n.apply(e, i || []), t) e.style[s] = a[s];
          return r
        };

      function se(e, t, n, i) {
        var r, s, a = 20,
          o = i ? function () {
            return i.cur()
          } : function () {
            return C.css(e, t, "")
          },
          l = o(),
          u = n && n[3] || (C.cssNumber[t] ? "" : "px"),
          c = (C.cssNumber[t] || "px" !== u && +l) && te.exec(C.css(e, t));
        if (c && c[3] !== u) {
          for (l /= 2, u = u || c[3], c = +l || 1; a--;) C.style(e, t, c + u), (1 - s) * (1 - (s = o() / l || .5)) <= 0 && (a = 0), c /= s;
          c *= 2, C.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
      }
      var ae = {};

      function oe(e, t) {
        for (var n, i, r, s, a, o, l, u = [], c = 0, f = e.length; c < f; c++)(i = e[c]).style && (n = i.style.display, t ? ("none" === n && (u[c] = G.get(i, "display") || null, u[c] || (i.style.display = "")), "" === i.style.display && ie(i) && (u[c] = (l = a = s = void 0, a = (r = i).ownerDocument, o = r.nodeName, (l = ae[o]) || (s = a.body.appendChild(a.createElement(o)), l = C.css(s, "display"), s.parentNode.removeChild(s), "none" === l && (l = "block"), ae[o] = l)))) : "none" !== n && (u[c] = "none", G.set(i, "display", n)));
        for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]);
        return e
      }
      C.fn.extend({
        show: function () {
          return oe(this, !0)
        },
        hide: function () {
          return oe(this)
        },
        toggle: function (e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
            ie(this) ? C(this).show() : C(this).hide()
          })
        }
      });
      var le = /^(?:checkbox|radio)$/i,
        ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ce = /^$|^module$|\/(?:java|ecma)script/i,
        fe = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };

      function he(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? C.merge([e], n) : n
      }

      function pe(e, t) {
        for (var n = 0, i = e.length; n < i; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
      }
      fe.optgroup = fe.option, fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td;
      var de, me, ge = /<|&#?\w+;/;

      function _e(e, t, n, i, r) {
        for (var s, a, o, l, u, c, f = t.createDocumentFragment(), h = [], p = 0, d = e.length; p < d; p++)
          if ((s = e[p]) || 0 === s)
            if ("object" === b(s)) C.merge(h, s.nodeType ? [s] : s);
            else if (ge.test(s)) {
          for (a = a || f.appendChild(t.createElement("div")), o = (ue.exec(s) || ["", ""])[1].toLowerCase(), l = fe[o] || fe._default, a.innerHTML = l[1] + C.htmlPrefilter(s) + l[2], c = l[0]; c--;) a = a.lastChild;
          C.merge(h, a.childNodes), (a = f.firstChild).textContent = ""
        } else h.push(t.createTextNode(s));
        for (f.textContent = "", p = 0; s = h[p++];)
          if (i && -1 < C.inArray(s, i)) r && r.push(s);
          else if (u = C.contains(s.ownerDocument, s), a = he(f.appendChild(s), "script"), u && pe(a), n)
          for (c = 0; s = a[c++];) ce.test(s.type || "") && n.push(s);
        return f
      }
      de = A.createDocumentFragment().appendChild(A.createElement("div")), (me = A.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), de.appendChild(me), _.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked, de.innerHTML = "<textarea>x</textarea>", _.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue;
      var ve = A.documentElement,
        ye = /^key/,
        xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        be = /^([^.]*)(?:\.(.+)|)/;

      function we() {
        return !0
      }

      function Te() {
        return !1
      }

      function Ae() {
        try {
          return A.activeElement
        } catch (e) {}
      }

      function Ce(e, t, n, i, r, s) {
        var a, o;
        if ("object" == typeof t) {
          for (o in "string" != typeof n && (i = i || n, n = void 0), t) Ce(e, o, n, i, t[o], s);
          return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Te;
        else if (!r) return e;
        return 1 === s && (a = r, (r = function (e) {
          return C().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = C.guid++)), e.each(function () {
          C.event.add(this, t, r, i, n)
        })
      }
      C.event = {
        global: {},
        add: function (t, e, n, i, r) {
          var s, a, o, l, u, c, f, h, p, d, m, g = G.get(t);
          if (g)
            for (n.handler && (n = (s = n).handler, r = s.selector), r && C.find.matchesSelector(ve, r), n.guid || (n.guid = C.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (e) {
                return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
              }), u = (e = (e || "").match(M) || [""]).length; u--;) p = m = (o = be.exec(e[u]) || [])[1], d = (o[2] || "").split(".").sort(), p && (f = C.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = C.event.special[p] || {}, c = C.extend({
              type: p,
              origType: m,
              data: i,
              handler: n,
              guid: n.guid,
              selector: r,
              needsContext: r && C.expr.match.needsContext.test(r),
              namespace: d.join(".")
            }, s), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, d, a) || t.addEventListener && t.addEventListener(p, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), C.event.global[p] = !0)
        },
        remove: function (e, t, n, i, r) {
          var s, a, o, l, u, c, f, h, p, d, m, g = G.hasData(e) && G.get(e);
          if (g && (l = g.events)) {
            for (u = (t = (t || "").match(M) || [""]).length; u--;)
              if (p = m = (o = be.exec(t[u]) || [])[1], d = (o[2] || "").split(".").sort(), p) {
                for (f = C.event.special[p] || {}, h = l[p = (i ? f.delegateType : f.bindType) || p] || [], o = o[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length; s--;) c = h[s], !r && m !== c.origType || n && n.guid !== c.guid || o && !o.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(s, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(e, c));
                a && !h.length && (f.teardown && !1 !== f.teardown.call(e, d, g.handle) || C.removeEvent(e, p, g.handle), delete l[p])
              } else
                for (p in l) C.event.remove(e, p + t[u], n, i, !0);
            C.isEmptyObject(l) && G.remove(e, "handle events")
          }
        },
        dispatch: function (e) {
          var t, n, i, r, s, a, o = C.event.fix(e),
            l = new Array(arguments.length),
            u = (G.get(this, "events") || {})[o.type] || [],
            c = C.event.special[o.type] || {};
          for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
          if (o.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, o)) {
            for (a = C.event.handlers.call(this, o, u), t = 0;
              (r = a[t++]) && !o.isPropagationStopped();)
              for (o.currentTarget = r.elem, n = 0;
                (s = r.handlers[n++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(s.namespace) || (o.handleObj = s, o.data = s.data, void 0 !== (i = ((C.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (o.result = i) && (o.preventDefault(), o.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, o), o.result
          }
        },
        handlers: function (e, t) {
          var n, i, r, s, a, o = [],
            l = t.delegateCount,
            u = e.target;
          if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
            for (; u !== this; u = u.parentNode || this)
              if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                for (s = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? -1 < C(r, this).index(u) : C.find(r, this, null, [u]).length), a[r] && s.push(i);
                s.length && o.push({
                  elem: u,
                  handlers: s
                })
              }
          return u = this, l < t.length && o.push({
            elem: u,
            handlers: t.slice(l)
          }), o
        },
        addProp: function (t, e) {
          Object.defineProperty(C.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: v(e) ? function () {
              if (this.originalEvent) return e(this.originalEvent)
            } : function () {
              if (this.originalEvent) return this.originalEvent[t]
            },
            set: function (e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e
              })
            }
          })
        },
        fix: function (e) {
          return e[C.expando] ? e : new C.Event(e)
        },
        special: {
          load: {
            noBubble: !0
          },
          focus: {
            trigger: function () {
              if (this !== Ae() && this.focus) return this.focus(), !1
            },
            delegateType: "focusin"
          },
          blur: {
            trigger: function () {
              if (this === Ae() && this.blur) return this.blur(), !1
            },
            delegateType: "focusout"
          },
          click: {
            trigger: function () {
              if ("checkbox" === this.type && this.click && S(this, "input")) return this.click(), !1
            },
            _default: function (e) {
              return S(e.target, "a")
            }
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
            }
          }
        }
      }, C.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
      }, C.Event = function (e, t) {
        if (!(this instanceof C.Event)) return new C.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
      }, C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
      }, C.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
      }, C.event.addProp), C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (e, r) {
        C.event.special[e] = {
          delegateType: r,
          bindType: r,
          handle: function (e) {
            var t, n = e.relatedTarget,
              i = e.handleObj;
            return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
          }
        }
      }), C.fn.extend({
        on: function (e, t, n, i) {
          return Ce(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
          return Ce(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
          var i, r;
          if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
          if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
            C.event.remove(this, e, n, t)
          });
          for (r in e) this.off(r, t, e[r]);
          return this
        }
      });
      var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Se = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      function Be(e, t) {
        return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
      }

      function Ee(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
      }

      function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
      }

      function Re(e, t) {
        var n, i, r, s, a, o, l, u;
        if (1 === t.nodeType) {
          if (G.hasData(e) && (s = G.access(e), a = G.set(t, s), u = s.events))
            for (r in delete a.handle, a.events = {}, u)
              for (n = 0, i = u[r].length; n < i; n++) C.event.add(t, r, u[r][n]);
          Q.hasData(e) && (o = Q.access(e), l = C.extend({}, o), Q.set(t, l))
        }
      }

      function je(n, i, r, s) {
        i = m.apply([], i);
        var e, t, a, o, l, u, c = 0,
          f = n.length,
          h = f - 1,
          p = i[0],
          d = v(p);
        if (d || 1 < f && "string" == typeof p && !_.checkClone && Pe.test(p)) return n.each(function (e) {
          var t = n.eq(e);
          d && (i[0] = p.call(this, e, t.html())), je(t, i, r, s)
        });
        if (f && (t = (e = _e(i, n[0].ownerDocument, !1, n, s)).firstChild, 1 === e.childNodes.length && (e = t), t || s)) {
          for (o = (a = C.map(he(e, "script"), Ee)).length; c < f; c++) l = e, c !== h && (l = C.clone(l, !0, !0), o && C.merge(a, he(l, "script"))), r.call(n[c], l, c);
          if (o)
            for (u = a[a.length - 1].ownerDocument, C.map(a, Oe), c = 0; c < o; c++) l = a[c], ce.test(l.type || "") && !G.access(l, "globalEval") && C.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(l.src) : x(l.textContent.replace(ke, ""), u, l))
        }
        return n
      }

      function Me(e, t, n) {
        for (var i, r = t ? C.filter(t, e) : e, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || C.cleanData(he(i)), i.parentNode && (n && C.contains(i.ownerDocument, i) && pe(he(i, "script")), i.parentNode.removeChild(i));
        return e
      }
      C.extend({
        htmlPrefilter: function (e) {
          return e.replace(De, "<$1></$2>")
        },
        clone: function (e, t, n) {
          var i, r, s, a, o, l, u, c = e.cloneNode(!0),
            f = C.contains(e.ownerDocument, e);
          if (!(_.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
            for (a = he(c), i = 0, r = (s = he(e)).length; i < r; i++) o = s[i], l = a[i], void 0, "input" === (u = l.nodeName.toLowerCase()) && le.test(o.type) ? l.checked = o.checked : "input" !== u && "textarea" !== u || (l.defaultValue = o.defaultValue);
          if (t)
            if (n)
              for (s = s || he(e), a = a || he(c), i = 0, r = s.length; i < r; i++) Re(s[i], a[i]);
            else Re(e, c);
          return 0 < (a = he(c, "script")).length && pe(a, !f && he(e, "script")), c
        },
        cleanData: function (e) {
          for (var t, n, i, r = C.event.special, s = 0; void 0 !== (n = e[s]); s++)
            if (Y(n)) {
              if (t = n[G.expando]) {
                if (t.events)
                  for (i in t.events) r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                n[G.expando] = void 0
              }
              n[Q.expando] && (n[Q.expando] = void 0)
            }
        }
      }), C.fn.extend({
        detach: function (e) {
          return Me(this, e, !0)
        },
        remove: function (e) {
          return Me(this, e)
        },
        text: function (e) {
          return H(this, function (e) {
            return void 0 === e ? C.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
            })
          }, null, e, arguments.length)
        },
        append: function () {
          return je(this, arguments, function (e) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Be(this, e).appendChild(e)
          })
        },
        prepend: function () {
          return je(this, arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = Be(this, e);
              t.insertBefore(e, t.firstChild)
            }
          })
        },
        before: function () {
          return je(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
          })
        },
        after: function () {
          return je(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(he(e, !1)), e.textContent = "");
          return this
        },
        clone: function (e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function () {
            return C.clone(this, e, t)
          })
        },
        html: function (e) {
          return H(this, function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof e && !Se.test(e) && !fe[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = C.htmlPrefilter(e);
              try {
                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(he(t, !1)), t.innerHTML = e);
                t = 0
              } catch (e) {}
            }
            t && this.empty().append(e)
          }, null, e, arguments.length)
        },
        replaceWith: function () {
          var n = [];
          return je(this, arguments, function (e) {
            var t = this.parentNode;
            C.inArray(this, n) < 0 && (C.cleanData(he(this)), t && t.replaceChild(e, this))
          }, n)
        }
      }), C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (e, a) {
        C.fn[e] = function (e) {
          for (var t, n = [], i = C(e), r = i.length - 1, s = 0; s <= r; s++) t = s === r ? this : this.clone(!0), C(i[s])[a](t), l.apply(n, t.get());
          return this.pushStack(n)
        }
      });
      var Ne = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Le = function (e) {
          var t = e.ownerDocument.defaultView;
          return t && t.opener || (t = T), t.getComputedStyle(e)
        },
        Ie = new RegExp(ne.join("|"), "i");

      function qe(e, t, n) {
        var i, r, s, a, o = e.style;
        return (n = n || Le(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (a = C.style(e, t)), !_.pixelBoxStyles() && Ne.test(a) && Ie.test(t) && (i = o.width, r = o.minWidth, s = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = n.width, o.width = i, o.minWidth = r, o.maxWidth = s)), void 0 !== a ? a + "" : a
      }

      function ze(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get
          }
        }
      }! function () {
        function e() {
          if (l) {
            o.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ve.appendChild(o).appendChild(l);
            var e = T.getComputedStyle(l);
            n = "1%" !== e.top, a = 12 === t(e.marginLeft), l.style.right = "60%", s = 36 === t(e.right), i = 36 === t(e.width), l.style.position = "absolute", r = 36 === l.offsetWidth || "absolute", ve.removeChild(o), l = null
          }
        }

        function t(e) {
          return Math.round(parseFloat(e))
        }
        var n, i, r, s, a, o = A.createElement("div"),
          l = A.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", _.clearCloneStyle = "content-box" === l.style.backgroundClip, C.extend(_, {
          boxSizingReliable: function () {
            return e(), i
          },
          pixelBoxStyles: function () {
            return e(), s
          },
          pixelPosition: function () {
            return e(), n
          },
          reliableMarginLeft: function () {
            return e(), a
          },
          scrollboxSize: function () {
            return e(), r
          }
        }))
      }();
      var Fe = /^(none|table(?!-c[ea]).+)/,
        He = /^--/,
        We = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
        Xe = {
          letterSpacing: "0",
          fontWeight: "400"
        },
        $e = ["Webkit", "Moz", "ms"],
        Ue = A.createElement("div").style;

      function Ye(e) {
        var t = C.cssProps[e];
        return t || (t = C.cssProps[e] = function (e) {
          if (e in Ue) return e;
          for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--;)
            if ((e = $e[n] + t) in Ue) return e
        }(e) || e), t
      }

      function Ve(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
      }

      function Ge(e, t, n, i, r, s) {
        var a = "width" === t ? 1 : 0,
          o = 0,
          l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += C.css(e, n + ne[a], !0, r)), i ? ("content" === n && (l -= C.css(e, "padding" + ne[a], !0, r)), "margin" !== n && (l -= C.css(e, "border" + ne[a] + "Width", !0, r))) : (l += C.css(e, "padding" + ne[a], !0, r), "padding" !== n ? l += C.css(e, "border" + ne[a] + "Width", !0, r) : o += C.css(e, "border" + ne[a] + "Width", !0, r));
        return !i && 0 <= s && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - o - .5))), l
      }

      function Qe(e, t, n) {
        var i = Le(e),
          r = qe(e, t, i),
          s = "border-box" === C.css(e, "boxSizing", !1, i),
          a = s;
        if (Ne.test(r)) {
          if (!n) return r;
          r = "auto"
        }
        return a = a && (_.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === C.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (r = parseFloat(r) || 0) + Ge(e, t, n || (s ? "border" : "content"), a, i, r) + "px"
      }

      function Ze(e, t, n, i, r) {
        return new Ze.prototype.init(e, t, n, i, r)
      }
      C.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = qe(e, "opacity");
                return "" === n ? "1" : n
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var r, s, a, o = U(t),
              l = He.test(t),
              u = e.style;
            if (l || (t = Ye(o)), a = C.cssHooks[t] || C.cssHooks[o], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t];
            "string" === (s = typeof n) && (r = te.exec(n)) && r[1] && (n = se(e, t, r), s = "number"), null != n && n == n && ("number" === s && (n += r && r[3] || (C.cssNumber[o] ? "" : "px")), _.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
          }
        },
        css: function (e, t, n, i) {
          var r, s, a, o = U(t);
          return He.test(t) || (t = Ye(o)), (a = C.cssHooks[t] || C.cssHooks[o]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = qe(e, t, i)), "normal" === r && t in Xe && (r = Xe[t]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r
        }
      }), C.each(["height", "width"], function (e, o) {
        C.cssHooks[o] = {
          get: function (e, t, n) {
            if (t) return !Fe.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, o, n) : re(e, We, function () {
              return Qe(e, o, n)
            })
          },
          set: function (e, t, n) {
            var i, r = Le(e),
              s = "border-box" === C.css(e, "boxSizing", !1, r),
              a = n && Ge(e, o, n, s, r);
            return s && _.scrollboxSize() === r.position && (a -= Math.ceil(e["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(r[o]) - Ge(e, o, "border", !1, r) - .5)), a && (i = te.exec(t)) && "px" !== (i[3] || "px") && (e.style[o] = t, t = C.css(e, o)), Ve(0, t, a)
          }
        }
      }), C.cssHooks.marginLeft = ze(_.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(qe(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
          marginLeft: 0
        }, function () {
          return e.getBoundingClientRect().left
        })) + "px"
      }), C.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function (r, s) {
        C.cssHooks[r + s] = {
          expand: function (e) {
            for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + ne[t] + s] = i[t] || i[t - 2] || i[0];
            return n
          }
        }, "margin" !== r && (C.cssHooks[r + s].set = Ve)
      }), C.fn.extend({
        css: function (e, t) {
          return H(this, function (e, t, n) {
            var i, r, s = {},
              a = 0;
            if (Array.isArray(t)) {
              for (i = Le(e), r = t.length; a < r; a++) s[t[a]] = C.css(e, t[a], !1, i);
              return s
            }
            return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
          }, e, t, 1 < arguments.length)
        }
      }), ((C.Tween = Ze).prototype = {
        constructor: Ze,
        init: function (e, t, n, i, r, s) {
          this.elem = e, this.prop = n, this.easing = r || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (C.cssNumber[n] ? "" : "px")
        },
        cur: function () {
          var e = Ze.propHooks[this.prop];
          return e && e.get ? e.get(this) : Ze.propHooks._default.get(this)
        },
        run: function (e) {
          var t, n = Ze.propHooks[this.prop];
          return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ze.propHooks._default.set(this), this
        }
      }).init.prototype = Ze.prototype, (Ze.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
          },
          set: function (e) {
            C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
          }
        }
      }).scrollTop = Ze.propHooks.scrollLeft = {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
      }, C.easing = {
        linear: function (e) {
          return e
        },
        swing: function (e) {
          return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
      }, C.fx = Ze.prototype.init, C.fx.step = {};
      var Je, Ke, et, tt, nt = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;

      function rt() {
        Ke && (!1 === A.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(rt) : T.setTimeout(rt, C.fx.interval), C.fx.tick())
      }

      function st() {
        return T.setTimeout(function () {
          Je = void 0
        }), Je = Date.now()
      }

      function at(e, t) {
        var n, i = 0,
          r = {
            height: e
          };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
      }

      function ot(e, t, n) {
        for (var i, r = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), s = 0, a = r.length; s < a; s++)
          if (i = r[s].call(n, t, e)) return i
      }

      function lt(s, e, t) {
        var n, a, i = 0,
          r = lt.prefilters.length,
          o = C.Deferred().always(function () {
            delete l.elem
          }),
          l = function () {
            if (a) return !1;
            for (var e = Je || st(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
            return o.notifyWith(s, [u, n, t]), n < 1 && r ? t : (r || o.notifyWith(s, [u, 1, 0]), o.resolveWith(s, [u]), !1)
          },
          u = o.promise({
            elem: s,
            props: C.extend({}, e),
            opts: C.extend(!0, {
              specialEasing: {},
              easing: C.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Je || st(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
              var n = C.Tween(s, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
              return u.tweens.push(n), n
            },
            stop: function (e) {
              var t = 0,
                n = e ? u.tweens.length : 0;
              if (a) return this;
              for (a = !0; t < n; t++) u.tweens[t].run(1);
              return e ? (o.notifyWith(s, [u, 1, 0]), o.resolveWith(s, [u, e])) : o.rejectWith(s, [u, e]), this
            }
          }),
          c = u.props;
        for (! function (e, t) {
            var n, i, r, s, a;
            for (n in e)
              if (r = t[i = U(n)], s = e[n], Array.isArray(s) && (r = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (a = C.cssHooks[i]) && "expand" in a)
                for (n in s = a.expand(s), delete e[i], s) n in e || (e[n] = s[n], t[n] = r);
              else t[i] = r
          }(c, u.opts.specialEasing); i < r; i++)
          if (n = lt.prefilters[i].call(u, s, c, u.opts)) return v(n.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
        return C.map(c, ot, u), v(u.opts.start) && u.opts.start.call(s, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), C.fx.timer(C.extend(l, {
          elem: s,
          anim: u,
          queue: u.opts.queue
        })), u
      }
      C.Animation = C.extend(lt, {
        tweeners: {
          "*": [function (e, t) {
            var n = this.createTween(e, t);
            return se(n.elem, e, te.exec(t), n), n
          }]
        },
        tweener: function (e, t) {
          for (var n, i = 0, r = (e = v(e) ? (t = e, ["*"]) : e.match(M)).length; i < r; i++) n = e[i], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
          var i, r, s, a, o, l, u, c, f = "width" in t || "height" in t,
            h = this,
            p = {},
            d = e.style,
            m = e.nodeType && ie(e),
            g = G.get(e, "fxshow");
          for (i in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, o = a.empty.fire, a.empty.fire = function () {
              a.unqueued || o()
            }), a.unqueued++, h.always(function () {
              h.always(function () {
                a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
              })
            })), t)
            if (r = t[i], nt.test(r)) {
              if (delete t[i], s = s || "toggle" === r, r === (m ? "hide" : "show")) {
                if ("show" !== r || !g || void 0 === g[i]) continue;
                m = !0
              }
              p[i] = g && g[i] || C.style(e, i)
            }
          if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
            for (i in f && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], null == (u = g && g.display) && (u = G.get(e, "display")), "none" === (c = C.css(e, "display")) && (u ? c = u : (oe([e], !0), u = e.style.display || u, c = C.css(e, "display"), oe([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === C.css(e, "float") && (l || (h.done(function () {
                d.display = u
              }), null == u && (c = d.display, u = "none" === c ? "" : c)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", h.always(function () {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
              })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = G.access(e, "fxshow", {
              display: u
            }), s && (g.hidden = !m), m && oe([e], !0), h.done(function () {
              for (i in m || oe([e]), G.remove(e, "fxshow"), p) C.style(e, i, p[i])
            })), l = ot(m ? g[i] : 0, i, h), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function (e, t) {
          t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
      }), C.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? C.extend({}, e) : {
          complete: n || !n && t || v(e) && e,
          duration: e,
          easing: n && t || t && !v(t) && t
        };
        return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
          v(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
        }, i
      }, C.fn.extend({
        fadeTo: function (e, t, n, i) {
          return this.filter(ie).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, i)
        },
        animate: function (t, e, n, i) {
          var r = C.isEmptyObject(t),
            s = C.speed(e, n, i),
            a = function () {
              var e = lt(this, C.extend({}, t), s);
              (r || G.get(this, "finish")) && e.stop(!0)
            };
          return a.finish = a, r || !1 === s.queue ? this.each(a) : this.queue(s.queue, a)
        },
        stop: function (r, e, s) {
          var a = function (e) {
            var t = e.stop;
            delete e.stop, t(s)
          };
          return "string" != typeof r && (s = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function () {
            var e = !0,
              t = null != r && r + "queueHooks",
              n = C.timers,
              i = G.get(this);
            if (t) i[t] && i[t].stop && a(i[t]);
            else
              for (t in i) i[t] && i[t].stop && it.test(t) && a(i[t]);
            for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(s), e = !1, n.splice(t, 1));
            !e && s || C.dequeue(this, r)
          })
        },
        finish: function (a) {
          return !1 !== a && (a = a || "fx"), this.each(function () {
            var e, t = G.get(this),
              n = t[a + "queue"],
              i = t[a + "queueHooks"],
              r = C.timers,
              s = n ? n.length : 0;
            for (t.finish = !0, C.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0), r.splice(e, 1));
            for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish
          })
        }
      }), C.each(["toggle", "show", "hide"], function (e, i) {
        var r = C.fn[i];
        C.fn[i] = function (e, t, n) {
          return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(at(i, !0), e, t, n)
        }
      }), C.each({
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function (e, i) {
        C.fn[e] = function (e, t, n) {
          return this.animate(i, e, t, n)
        }
      }), C.timers = [], C.fx.tick = function () {
        var e, t = 0,
          n = C.timers;
        for (Je = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || C.fx.stop(), Je = void 0
      }, C.fx.timer = function (e) {
        C.timers.push(e), C.fx.start()
      }, C.fx.interval = 13, C.fx.start = function () {
        Ke || (Ke = !0, rt())
      }, C.fx.stop = function () {
        Ke = null
      }, C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, C.fn.delay = function (i, e) {
        return i = C.fx && C.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
          var n = T.setTimeout(e, i);
          t.stop = function () {
            T.clearTimeout(n)
          }
        })
      }, et = A.createElement("input"), tt = A.createElement("select").appendChild(A.createElement("option")), et.type = "checkbox", _.checkOn = "" !== et.value, _.optSelected = tt.selected, (et = A.createElement("input")).value = "t", et.type = "radio", _.radioValue = "t" === et.value;
      var ut, ct = C.expr.attrHandle;
      C.fn.extend({
        attr: function (e, t) {
          return H(this, C.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
          return this.each(function () {
            C.removeAttr(this, e)
          })
        }
      }), C.extend({
        attr: function (e, t, n) {
          var i, r, s = e.nodeType;
          if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === s && C.isXMLDoc(e) || (r = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!_.radioValue && "radio" === t && S(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t
              }
            }
          }
        },
        removeAttr: function (e, t) {
          var n, i = 0,
            r = t && t.match(M);
          if (r && 1 === e.nodeType)
            for (; n = r[i++];) e.removeAttribute(n)
        }
      }), ut = {
        set: function (e, t, n) {
          return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
        }
      }, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = ct[t] || C.find.attr;
        ct[t] = function (e, t, n) {
          var i, r, s = t.toLowerCase();
          return n || (r = ct[s], ct[s] = i, i = null != a(e, t, n) ? s : null, ct[s] = r), i
        }
      });
      var ft = /^(?:input|select|textarea|button)$/i,
        ht = /^(?:a|area)$/i;

      function pt(e) {
        return (e.match(M) || []).join(" ")
      }

      function dt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
      }

      function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
      }
      C.fn.extend({
        prop: function (e, t) {
          return H(this, C.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[C.propFix[e] || e]
          })
        }
      }), C.extend({
        prop: function (e, t, n) {
          var i, r, s = e.nodeType;
          if (3 !== s && 8 !== s && 2 !== s) return 1 === s && C.isXMLDoc(e) || (t = C.propFix[t] || t, r = C.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = C.find.attr(e, "tabindex");
              return t ? parseInt(t, 10) : ft.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      }), _.optSelected || (C.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
      }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        C.propFix[this.toLowerCase()] = this
      }), C.fn.extend({
        addClass: function (t) {
          var e, n, i, r, s, a, o, l = 0;
          if (v(t)) return this.each(function (e) {
            C(this).addClass(t.call(this, e, dt(this)))
          });
          if ((e = mt(t)).length)
            for (; n = this[l++];)
              if (r = dt(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
                for (a = 0; s = e[a++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                r !== (o = pt(i)) && n.setAttribute("class", o)
              }
          return this
        },
        removeClass: function (t) {
          var e, n, i, r, s, a, o, l = 0;
          if (v(t)) return this.each(function (e) {
            C(this).removeClass(t.call(this, e, dt(this)))
          });
          if (!arguments.length) return this.attr("class", "");
          if ((e = mt(t)).length)
            for (; n = this[l++];)
              if (r = dt(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
                for (a = 0; s = e[a++];)
                  for (; - 1 < i.indexOf(" " + s + " ");) i = i.replace(" " + s + " ", " ");
                r !== (o = pt(i)) && n.setAttribute("class", o)
              }
          return this
        },
        toggleClass: function (r, t) {
          var s = typeof r,
            a = "string" == s || Array.isArray(r);
          return "boolean" == typeof t && a ? t ? this.addClass(r) : this.removeClass(r) : v(r) ? this.each(function (e) {
            C(this).toggleClass(r.call(this, e, dt(this), t), t)
          }) : this.each(function () {
            var e, t, n, i;
            if (a)
              for (t = 0, n = C(this), i = mt(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
            else void 0 !== r && "boolean" != s || ((e = dt(this)) && G.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : G.get(this, "__className__") || ""))
          })
        },
        hasClass: function (e) {
          var t, n, i = 0;
          for (t = " " + e + " "; n = this[i++];)
            if (1 === n.nodeType && -1 < (" " + pt(dt(n)) + " ").indexOf(t)) return !0;
          return !1
        }
      });
      var gt = /\r/g;
      C.fn.extend({
        val: function (n) {
          var i, e, r, t = this[0];
          return arguments.length ? (r = v(n), this.each(function (e) {
            var t;
            1 === this.nodeType && (null == (t = r ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function (e) {
              return null == e ? "" : e + ""
            })), (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
          })) : t ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(gt, "") : null == e ? "" : e : void 0
        }
      }), C.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = C.find.attr(e, "value");
              return null != t ? t : pt(C.text(e))
            }
          },
          select: {
            get: function (e) {
              var t, n, i, r = e.options,
                s = e.selectedIndex,
                a = "select-one" === e.type,
                o = a ? null : [],
                l = a ? s + 1 : r.length;
              for (i = s < 0 ? l : a ? s : 0; i < l; i++)
                if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                  if (t = C(n).val(), a) return t;
                  o.push(t)
                }
              return o
            },
            set: function (e, t) {
              for (var n, i, r = e.options, s = C.makeArray(t), a = r.length; a--;)((i = r[a]).selected = -1 < C.inArray(C.valHooks.option.get(i), s)) && (n = !0);
              return n || (e.selectedIndex = -1), s
            }
          }
        }
      }), C.each(["radio", "checkbox"], function () {
        C.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
          }
        }, _.checkOn || (C.valHooks[this].get = function (e) {
          return null === e.getAttribute("value") ? "on" : e.value
        })
      }), _.focusin = "onfocusin" in T;
      var _t = /^(?:focusinfocus|focusoutblur)$/,
        vt = function (e) {
          e.stopPropagation()
        };
      C.extend(C.event, {
        trigger: function (e, t, n, i) {
          var r, s, a, o, l, u, c, f, h = [n || A],
            p = g.call(e, "type") ? e.type : e,
            d = g.call(e, "namespace") ? e.namespace.split(".") : [];
          if (s = f = a = n = n || A, 3 !== n.nodeType && 8 !== n.nodeType && !_t.test(p + C.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[C.expando] ? e : new C.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), c = C.event.special[p] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
            if (!i && !c.noBubble && !y(n)) {
              for (o = c.delegateType || p, _t.test(o + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
              a === (n.ownerDocument || A) && h.push(a.defaultView || a.parentWindow || T)
            }
            for (r = 0;
              (s = h[r++]) && !e.isPropagationStopped();) f = s, e.type = 1 < r ? o : c.bindType || p, (u = (G.get(s, "events") || {})[e.type] && G.get(s, "handle")) && u.apply(s, t), (u = l && s[l]) && u.apply && Y(s) && (e.result = u.apply(s, t), !1 === e.result && e.preventDefault());
            return e.type = p, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), t) || !Y(n) || l && v(n[p]) && !y(n) && ((a = n[l]) && (n[l] = null), C.event.triggered = p, e.isPropagationStopped() && f.addEventListener(p, vt), n[p](), e.isPropagationStopped() && f.removeEventListener(p, vt), C.event.triggered = void 0, a && (n[l] = a)), e.result
          }
        },
        simulate: function (e, t, n) {
          var i = C.extend(new C.Event, n, {
            type: e,
            isSimulated: !0
          });
          C.event.trigger(i, null, t)
        }
      }), C.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            C.event.trigger(e, t, this)
          })
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return C.event.trigger(e, t, n, !0)
        }
      }), _.focusin || C.each({
        focus: "focusin",
        blur: "focusout"
      }, function (n, i) {
        var r = function (e) {
          C.event.simulate(i, e.target, C.event.fix(e))
        };
        C.event.special[i] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = G.access(e, i);
            t || e.addEventListener(n, r, !0), G.access(e, i, (t || 0) + 1)
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = G.access(e, i) - 1;
            t ? G.access(e, i, t) : (e.removeEventListener(n, r, !0), G.remove(e, i))
          }
        }
      });
      var yt = T.location,
        xt = Date.now(),
        bt = /\?/;
      C.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
          t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
      };
      var wt = /\[\]$/,
        Tt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;

      function Dt(n, e, i, r) {
        var t;
        if (Array.isArray(e)) C.each(e, function (e, t) {
          i || wt.test(n) ? r(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
        });
        else if (i || "object" !== b(e)) r(n, e);
        else
          for (t in e) Dt(n + "[" + t + "]", e[t], i, r)
      }
      C.param = function (e, t) {
        var n, i = [],
          r = function (e, t) {
            var n = v(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
          };
        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
          r(this.name, this.value)
        });
        else
          for (n in e) Dt(n, e[n], t, r);
        return i.join("&")
      }, C.fn.extend({
        serialize: function () {
          return C.param(this.serializeArray())
        },
        serializeArray: function () {
          return this.map(function () {
            var e = C.prop(this, "elements");
            return e ? C.makeArray(e) : this
          }).filter(function () {
            var e = this.type;
            return this.name && !C(this).is(":disabled") && Ct.test(this.nodeName) && !At.test(e) && (this.checked || !le.test(e))
          }).map(function (e, t) {
            var n = C(this).val();
            return null == n ? null : Array.isArray(n) ? C.map(n, function (e) {
              return {
                name: t.name,
                value: e.replace(Tt, "\r\n")
              }
            }) : {
              name: t.name,
              value: n.replace(Tt, "\r\n")
            }
          }).get()
        }
      });
      var St = /%20/g,
        Pt = /#.*$/,
        kt = /([?&])_=[^&]*/,
        Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Et = /^(?:GET|HEAD)$/,
        Ot = /^\/\//,
        Rt = {},
        jt = {},
        Mt = "*/".concat("*"),
        Nt = A.createElement("a");

      function Lt(s) {
        return function (e, t) {
          "string" != typeof e && (t = e, e = "*");
          var n, i = 0,
            r = e.toLowerCase().match(M) || [];
          if (v(t))
            for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (s[n] = s[n] || []).unshift(t)) : (s[n] = s[n] || []).push(t)
        }
      }

      function It(t, r, s, a) {
        var o = {},
          l = t === jt;

        function u(e) {
          var i;
          return o[e] = !0, C.each(t[e] || [], function (e, t) {
            var n = t(r, s, a);
            return "string" != typeof n || l || o[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), u(n), !1)
          }), i
        }
        return u(r.dataTypes[0]) || !o["*"] && u("*")
      }

      function qt(e, t) {
        var n, i, r = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && C.extend(!0, e, i), e
      }
      Nt.href = yt.href, C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: yt.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Mt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": C.parseXML
          },
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        ajaxSetup: function (e, t) {
          return t ? qt(qt(e, C.ajaxSettings), t) : qt(C.ajaxSettings, e)
        },
        ajaxPrefilter: Lt(Rt),
        ajaxTransport: Lt(jt),
        ajax: function (e, t) {
          "object" == typeof e && (t = e, e = void 0), t = t || {};
          var c, f, h, n, p, i, d, m, r, s, g = C.ajaxSetup({}, t),
            _ = g.context || g,
            v = g.context && (_.nodeType || _.jquery) ? C(_) : C.event,
            y = C.Deferred(),
            x = C.Callbacks("once memory"),
            b = g.statusCode || {},
            a = {},
            o = {},
            l = "canceled",
            w = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (d) {
                  if (!n)
                    for (n = {}; t = Bt.exec(h);) n[t[1].toLowerCase()] = t[2];
                  t = n[e.toLowerCase()]
                }
                return null == t ? null : t
              },
              getAllResponseHeaders: function () {
                return d ? h : null
              },
              setRequestHeader: function (e, t) {
                return null == d && (e = o[e.toLowerCase()] = o[e.toLowerCase()] || e, a[e] = t), this
              },
              overrideMimeType: function (e) {
                return null == d && (g.mimeType = e), this
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (d) w.always(e[w.status]);
                  else
                    for (t in e) b[t] = [b[t], e[t]];
                return this
              },
              abort: function (e) {
                var t = e || l;
                return c && c.abort(t), u(0, t), this
              }
            };
          if (y.promise(w), g.url = ((e || g.url || yt.href) + "").replace(Ot, yt.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(M) || [""], null == g.crossDomain) {
            i = A.createElement("a");
            try {
              i.href = g.url, i.href = i.href, g.crossDomain = Nt.protocol + "//" + Nt.host != i.protocol + "//" + i.host
            } catch (e) {
              g.crossDomain = !0
            }
          }
          if (g.data && g.processData && "string" != typeof g.data && (g.data = C.param(g.data, g.traditional)), It(Rt, g, t, w), d) return w;
          for (r in (m = C.event && g.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Et.test(g.type), f = g.url.replace(Pt, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(St, "+")) : (s = g.url.slice(f.length), g.data && (g.processData || "string" == typeof g.data) && (f += (bt.test(f) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (f = f.replace(kt, "$1"), s = (bt.test(f) ? "&" : "?") + "_=" + xt++ + s), g.url = f + s), g.ifModified && (C.lastModified[f] && w.setRequestHeader("If-Modified-Since", C.lastModified[f]), C.etag[f] && w.setRequestHeader("If-None-Match", C.etag[f])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && w.setRequestHeader("Content-Type", g.contentType), w.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : g.accepts["*"]), g.headers) w.setRequestHeader(r, g.headers[r]);
          if (g.beforeSend && (!1 === g.beforeSend.call(_, w, g) || d)) return w.abort();
          if (l = "abort", x.add(g.complete), w.done(g.success), w.fail(g.error), c = It(jt, g, t, w)) {
            if (w.readyState = 1, m && v.trigger("ajaxSend", [w, g]), d) return w;
            g.async && 0 < g.timeout && (p = T.setTimeout(function () {
              w.abort("timeout")
            }, g.timeout));
            try {
              d = !1, c.send(a, u)
            } catch (e) {
              if (d) throw e;
              u(-1, e)
            }
          } else u(-1, "No Transport");

          function u(e, t, n, i) {
            var r, s, a, o, l, u = t;
            d || (d = !0, p && T.clearTimeout(p), c = void 0, h = i || "", w.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (o = function (e, t, n) {
              for (var i, r, s, a, o = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
              if (i)
                for (r in o)
                  if (o[r] && o[r].test(i)) {
                    l.unshift(r);
                    break
                  }
              if (l[0] in n) s = l[0];
              else {
                for (r in n) {
                  if (!l[0] || e.converters[r + " " + l[0]]) {
                    s = r;
                    break
                  }
                  a || (a = r)
                }
                s = s || a
              }
              if (s) return s !== l[0] && l.unshift(s), n[s]
            }(g, w, n)), o = function (e, t, n, i) {
              var r, s, a, o, l, u = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
              for (s = c.shift(); s;)
                if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift())
                  if ("*" === s) s = l;
                  else if ("*" !== l && l !== s) {
                if (!(a = u[l + " " + s] || u["* " + s]))
                  for (r in u)
                    if ((o = r.split(" "))[1] === s && (a = u[l + " " + o[0]] || u["* " + o[0]])) {
                      !0 === a ? a = u[r] : !0 !== u[r] && (s = o[0], c.unshift(o[1]));
                      break
                    }
                if (!0 !== a)
                  if (a && e.throws) t = a(t);
                  else try {
                    t = a(t)
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: a ? e : "No conversion from " + l + " to " + s
                    }
                  }
              }
              return {
                state: "success",
                data: t
              }
            }(g, o, w, r), r ? (g.ifModified && ((l = w.getResponseHeader("Last-Modified")) && (C.lastModified[f] = l), (l = w.getResponseHeader("etag")) && (C.etag[f] = l)), 204 === e || "HEAD" === g.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = o.state, s = o.data, r = !(a = o.error))) : (a = u, !e && u || (u = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || u) + "", r ? y.resolveWith(_, [s, u, w]) : y.rejectWith(_, [w, u, a]), w.statusCode(b), b = void 0, m && v.trigger(r ? "ajaxSuccess" : "ajaxError", [w, g, r ? s : a]), x.fireWith(_, [w, u]), m && (v.trigger("ajaxComplete", [w, g]), --C.active || C.event.trigger("ajaxStop")))
          }
          return w
        },
        getJSON: function (e, t, n) {
          return C.get(e, t, n, "json")
        },
        getScript: function (e, t) {
          return C.get(e, void 0, t, "script")
        }
      }), C.each(["get", "post"], function (e, r) {
        C[r] = function (e, t, n, i) {
          return v(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
            url: e,
            type: r,
            dataType: i,
            data: t,
            success: n
          }, C.isPlainObject(e) && e))
        }
      }), C._evalUrl = function (e) {
        return C.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          throws: !0
        })
      }, C.fn.extend({
        wrapAll: function (e) {
          var t;
          return this[0] && (v(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
            return e
          }).append(this)), this
        },
        wrapInner: function (n) {
          return v(n) ? this.each(function (e) {
            C(this).wrapInner(n.call(this, e))
          }) : this.each(function () {
            var e = C(this),
              t = e.contents();
            t.length ? t.wrapAll(n) : e.append(n)
          })
        },
        wrap: function (t) {
          var n = v(t);
          return this.each(function (e) {
            C(this).wrapAll(n ? t.call(this, e) : t)
          })
        },
        unwrap: function (e) {
          return this.parent(e).not("body").each(function () {
            C(this).replaceWith(this.childNodes)
          }), this
        }
      }), C.expr.pseudos.hidden = function (e) {
        return !C.expr.pseudos.visible(e)
      }, C.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
      }, C.ajaxSettings.xhr = function () {
        try {
          return new T.XMLHttpRequest
        } catch (e) {}
      };
      var zt = {
          0: 200,
          1223: 204
        },
        Ft = C.ajaxSettings.xhr();
      _.cors = !!Ft && "withCredentials" in Ft, _.ajax = Ft = !!Ft, C.ajaxTransport(function (r) {
        var s, a;
        if (_.cors || Ft && !r.crossDomain) return {
          send: function (e, t) {
            var n, i = r.xhr();
            if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
              for (n in r.xhrFields) i[n] = r.xhrFields[n];
            for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
            s = function (e) {
              return function () {
                s && (s = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(zt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                  binary: i.response
                } : {
                  text: i.responseText
                }, i.getAllResponseHeaders()))
              }
            }, i.onload = s(), a = i.onerror = i.ontimeout = s("error"), void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function () {
              4 === i.readyState && T.setTimeout(function () {
                s && a()
              })
            }, s = s("abort");
            try {
              i.send(r.hasContent && r.data || null)
            } catch (e) {
              if (s) throw e
            }
          },
          abort: function () {
            s && s()
          }
        }
      }), C.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
      }), C.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function (e) {
            return C.globalEval(e), e
          }
        }
      }), C.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
      }), C.ajaxTransport("script", function (n) {
        var i, r;
        if (n.crossDomain) return {
          send: function (e, t) {
            i = C("<script>").prop({
              charset: n.scriptCharset,
              src: n.url
            }).on("load error", r = function (e) {
              i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
            }), A.head.appendChild(i[0])
          },
          abort: function () {
            r && r()
          }
        }
      });
      var Ht, Wt = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
      C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Wt.pop() || C.expando + "_" + xt++;
          return this[e] = !0, e
        }
      }), C.ajaxPrefilter("json jsonp", function (e, t, n) {
        var i, r, s, a = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Xt, "$1" + i) : !1 !== e.jsonp && (e.url += (bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
          return s || C.error(i + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = T[i], T[i] = function () {
          s = arguments
        }, n.always(function () {
          void 0 === r ? C(T).removeProp(i) : T[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Wt.push(i)), s && v(r) && r(s[0]), s = r = void 0
        }), "script"
      }), _.createHTMLDocument = ((Ht = A.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ht.childNodes.length), C.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (_.createHTMLDocument ? ((i = (t = A.implementation.createHTMLDocument("")).createElement("base")).href = A.location.href, t.head.appendChild(i)) : t = A), s = !n && [], (r = P.exec(e)) ? [t.createElement(r[1])] : (r = _e([e], t, s), s && s.length && C(s).remove(), C.merge([], r.childNodes)));
        var i, r, s
      }, C.fn.load = function (e, t, n) {
        var i, r, s, a = this,
          o = e.indexOf(" ");
        return -1 < o && (i = pt(e.slice(o)), e = e.slice(0, o)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < a.length && C.ajax({
          url: e,
          type: r || "GET",
          dataType: "html",
          data: t
        }).done(function (e) {
          s = arguments, a.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
          a.each(function () {
            n.apply(this, s || [e.responseText, t, e])
          })
        }), this
      }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        C.fn[t] = function (e) {
          return this.on(t, e)
        }
      }), C.expr.pseudos.animated = function (t) {
        return C.grep(C.timers, function (e) {
          return t === e.elem
        }).length
      }, C.offset = {
        setOffset: function (e, t, n) {
          var i, r, s, a, o, l, u = C.css(e, "position"),
            c = C(e),
            f = {};
          "static" === u && (e.style.position = "relative"), o = c.offset(), s = C.css(e, "top"), l = C.css(e, "left"), r = ("absolute" === u || "fixed" === u) && -1 < (s + l).indexOf("auto") ? (a = (i = c.position()).top, i.left) : (a = parseFloat(s) || 0, parseFloat(l) || 0), v(t) && (t = t.call(e, n, C.extend({}, o))), null != t.top && (f.top = t.top - o.top + a), null != t.left && (f.left = t.left - o.left + r), "using" in t ? t.using.call(e, f) : c.css(f)
        }
      }, C.fn.extend({
        offset: function (t) {
          if (arguments.length) return void 0 === t ? this : this.each(function (e) {
            C.offset.setOffset(this, t, e)
          });
          var e, n, i = this[0];
          return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
            top: e.top + n.pageYOffset,
            left: e.left + n.pageXOffset
          }) : {
            top: 0,
            left: 0
          } : void 0
        },
        position: function () {
          if (this[0]) {
            var e, t, n, i = this[0],
              r = {
                top: 0,
                left: 0
              };
            if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
            else {
              for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
              e && e !== i && 1 === e.nodeType && ((r = C(e).offset()).top += C.css(e, "borderTopWidth", !0), r.left += C.css(e, "borderLeftWidth", !0))
            }
            return {
              top: t.top - r.top - C.css(i, "marginTop", !0),
              left: t.left - r.left - C.css(i, "marginLeft", !0)
            }
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
            return e || ve
          })
        }
      }), C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function (t, r) {
        var s = "pageYOffset" === r;
        C.fn[t] = function (e) {
          return H(this, function (e, t, n) {
            var i;
            if (y(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
            i ? i.scrollTo(s ? i.pageXOffset : n, s ? n : i.pageYOffset) : e[t] = n
          }, t, e, arguments.length)
        }
      }), C.each(["top", "left"], function (e, n) {
        C.cssHooks[n] = ze(_.pixelPosition, function (e, t) {
          if (t) return t = qe(e, n), Ne.test(t) ? C(e).position()[n] + "px" : t
        })
      }), C.each({
        Height: "height",
        Width: "width"
      }, function (a, o) {
        C.each({
          padding: "inner" + a,
          content: o,
          "": "outer" + a
        }, function (i, s) {
          C.fn[s] = function (e, t) {
            var n = arguments.length && (i || "boolean" != typeof e),
              r = i || (!0 === e || !0 === t ? "margin" : "border");
            return H(this, function (e, t, n) {
              var i;
              return y(e) ? 0 === s.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? C.css(e, t, r) : C.style(e, t, n, r)
            }, o, n ? e : void 0, n)
          }
        })
      }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        C.fn[n] = function (e, t) {
          return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
      }), C.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e)
        }
      }), C.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
          return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
          return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
      }), C.proxy = function (e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return i = o.call(arguments, 2), (r = function () {
          return e.apply(t || this, i.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || C.guid++, r
      }, C.holdReady = function (e) {
        e ? C.readyWait++ : C.ready(!0)
      }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = S, C.isFunction = v, C.isWindow = y, C.camelCase = U, C.type = b, C.now = Date.now, C.isNumeric = function (e) {
        var t = C.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
      }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return C
      });
      var $t = T.jQuery,
        Ut = T.$;
      return C.noConflict = function (e) {
        return T.$ === C && (T.$ = Ut), e && T.jQuery === C && (T.jQuery = $t), C
      }, e || (T.jQuery = T.$ = C), C
    })
  }, {}],
  20: [function (e, t, n) {
    "use strict";
    var r = "bfred-it:object-fit-images",
      s = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
      i = "undefined" == typeof Image ? {
        style: {
          "object-position": 1
        }
      } : new Image,
      a = "object-fit" in i.style,
      o = "object-position" in i.style,
      l = "background-size" in i.style,
      u = "string" == typeof i.currentSrc,
      c = i.getAttribute,
      f = i.setAttribute,
      h = !1;

    function p(e, t, n) {
      var i = function (e, t) {
        return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + e + "' height='" + t + "'%3E%3C/svg%3E"
      }(t || 1, n || 0);
      c.call(e, "src") !== i && f.call(e, "src", i)
    }

    function d(e, t) {
      e.naturalWidth ? t(e) : setTimeout(d, 100, e, t)
    }

    function m(t) {
      var e = function (e) {
          for (var t, n = getComputedStyle(e).fontFamily, i = {}; null !== (t = s.exec(n));) i[t[1]] = t[2];
          return i
        }(t),
        n = t[r];
      if (e["object-fit"] = e["object-fit"] || "fill", !n.img) {
        if ("fill" === e["object-fit"]) return;
        if (!n.skipTest && a && !e["object-position"]) return
      }
      if (!n.img) {
        n.img = new Image(t.width, t.height), n.img.srcset = c.call(t, "data-ofi-srcset") || t.srcset, n.img.src = c.call(t, "data-ofi-src") || t.src, f.call(t, "data-ofi-src", t.src), t.srcset && f.call(t, "data-ofi-srcset", t.srcset), p(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = "");
        try {
          ! function (n) {
            var t = {
              get: function (e) {
                return n[r].img[e || "src"]
              },
              set: function (e, t) {
                return n[r].img[t || "src"] = e, f.call(n, "data-ofi-" + t, e), m(n), e
              }
            };
            Object.defineProperty(n, "src", t), Object.defineProperty(n, "currentSrc", {
              get: function () {
                return t.get("currentSrc")
              }
            }), Object.defineProperty(n, "srcset", {
              get: function () {
                return t.get("srcset")
              },
              set: function (e) {
                return t.set(e, "srcset")
              }
            })
          }(t)
        } catch (e) {
          window.console && console.warn("https://bit.ly/ofi-old-browser")
        }
      }! function (e) {
        if (e.srcset && !u && window.picturefill) {
          var t = window.picturefill._;
          e[t.ns] && e[t.ns].evaled || t.fillImg(e, {
            reselect: !0
          }), e[t.ns].curSrc || (e[t.ns].supported = !1, t.fillImg(e, {
            reselect: !0
          })), e.currentSrc = e[t.ns].curSrc || e.src
        }
      }(n.img), t.style.backgroundImage = 'url("' + (n.img.currentSrc || n.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = e["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(e["object-fit"]) ? d(n.img, function () {
        n.img.naturalWidth > t.width || n.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto"
      }) : t.style.backgroundSize = e["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), d(n.img, function (e) {
        p(t, e.naturalWidth, e.naturalHeight)
      })
    }

    function g(e, t) {
      var n = !h && !e;
      if (t = t || {}, e = e || "img", o && !t.skipTest || !l) return !1;
      "img" === e ? e = document.getElementsByTagName("img") : "string" == typeof e ? e = document.querySelectorAll(e) : "length" in e || (e = [e]);
      for (var i = 0; i < e.length; i++) e[i][r] = e[i][r] || {
        skipTest: t.skipTest
      }, m(e[i]);
      n && (document.body.addEventListener("load", function (e) {
        "IMG" === e.target.tagName && g(e.target, {
          skipTest: t.skipTest
        })
      }, !0), h = !0, e = "img"), t.watchMQ && window.addEventListener("resize", g.bind(null, e, {
        skipTest: t.skipTest
      }))
    }
    g.supportsObjectFit = a, g.supportsObjectPosition = o,
      function () {
        function n(e, t) {
          return e[r] && e[r].img && ("src" === t || "srcset" === t) ? e[r].img : e
        }
        o || (HTMLImageElement.prototype.getAttribute = function (e) {
          return c.call(n(this, e), e)
        }, HTMLImageElement.prototype.setAttribute = function (e, t) {
          return f.call(n(this, e), e, String(t))
        })
      }(), t.exports = g
  }, {}],
  21: [function (e, t, n) {
    var i, r;
    i = this, r = function () {
      function g(e, t, n) {
        if (n) {
          var i = document.createDocumentFragment(),
            r = !t.hasAttribute("viewBox") && n.getAttribute("viewBox");
          r && t.setAttribute("viewBox", r);
          for (var s = n.cloneNode(!0); s.childNodes.length;) i.appendChild(s.firstChild);
          e.appendChild(i)
        }
      }

      function _(i) {
        i.onreadystatechange = function () {
          if (4 === i.readyState) {
            var n = i._cachedDocument;
            n || ((n = i._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = i.responseText, i._cachedTarget = {}), i._embeds.splice(0).map(function (e) {
              var t = i._cachedTarget[e.id];
              t || (t = i._cachedTarget[e.id] = n.getElementById(e.id)), g(e.parent, e.svg, t)
            })
          }
        }, i.onreadystatechange()
      }

      function v(e) {
        for (var t = e;
          "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode););
        return t
      }
      return function (e) {
        var c, f = Object(e),
          t = window.top !== window.self;
        c = "polyfill" in f ? f.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && t;
        var h = {},
          p = window.requestAnimationFrame || setTimeout,
          d = document.getElementsByTagName("use"),
          m = 0;
        c && function e() {
          for (var t = 0; t < d.length;) {
            var n = d[t],
              i = n.parentNode,
              r = v(i),
              s = n.getAttribute("xlink:href") || n.getAttribute("href");
            if (!s && f.attributeName && (s = n.getAttribute(f.attributeName)), r && s) {
              if (c)
                if (!f.validate || f.validate(s, r, n)) {
                  i.removeChild(n);
                  var a = s.split("#"),
                    o = a.shift(),
                    l = a.join("#");
                  if (o.length) {
                    var u = h[o];
                    u || ((u = h[o] = new XMLHttpRequest).open("GET", o), u.send(), u._embeds = []), u._embeds.push({
                      parent: i,
                      svg: r,
                      id: l
                    }), _(u)
                  } else g(i, r, document.getElementById(l))
                } else ++t, ++m
            } else ++t
          }(!d.length || 0 < d.length - m) && p(e, 67)
        }()
      }
    }, "function" == typeof define && define.amd ? define([], function () {
      return i.svg4everybody = r()
    }) : "object" == typeof t && t.exports ? t.exports = r() : i.svg4everybody = r()
  }, {}]
}, {}, [4]);