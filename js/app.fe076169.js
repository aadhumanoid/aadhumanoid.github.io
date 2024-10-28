(function () {
  "use strict";
  var a = {
      9844: function (a, e, t) {
        var s = t(5130),
          i = t(6768);
        function o(a, e) {
          const t = (0, i.g2)("router-view");
          return (0, i.uX)(), (0, i.Wv)(t);
        }
        var n = t(1241);
        const l = {},
          r = (0, n.A)(l, [["render", o]]);
        var c = r,
          d = t(1387);
        const m = (0, i.Lk)(
          "div",
          { style: { display: "flex", "justify-content": "center", "margin-top": "40px" } },
          [
            (0, i.Lk)("iframe", {
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.07302915903173!2d110.38721573536087!3d-7.771953643055321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13. 1!3m3!1m2!1s0x2e7a59b6c270ec03%3A0x78c699bae0c45583!2sRobotika%20UNY!5e0!3m2!1sid!2sid!4v1726587997438!5m2!1sid!2sid",
              width: "85%",
              height: "450",
              style: { border: "1px solid #000" },
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "no-referrer-when-downgrade",
            }),
          ],
          -1
        );
        function v(a, e, t, s, o, n) {
          const l = (0, i.g2)("HeaderNav"),
            r = (0, i.g2)("Hero"),
            c = (0, i.g2)("VideoCard"),
            d = (0, i.g2)("FilterCard"),
            v = (0, i.g2)("News"),
            k = (0, i.g2)("FooterBar");
          return (0, i.uX)(), (0, i.CE)("div", null, [(0, i.bF)(l, { "data-aos": "fade-down" }), (0, i.bF)(r), (0, i.bF)(c, { "data-aos": "fade-right" }), (0, i.bF)(d), (0, i.bF)(v), m, (0, i.bF)(k)]);
        }
        var k = t(3497),
          b = t.n(k),
          f = t(4232),
          h = t.p + "img/Logo_aad.36e3f93c.png";
        const g = { class: "max-w-[1360px] mx-auto" },
          p = { class: "px-4 pt-4 pt-0 min-[845px]:pt-9 transition-all" },
          u = { class: "flex justify-between items-center" },
          L = (0, i.Fv)(
            '<div class="flex"><div class="logo flex flex-shrink-0 items-center text-white hover:text-[#ff5e14] transition-colors"><div class="flex items-center space-x-2"><img class="hidden md:block logo-svg transform hover:transition-transform duration-700" style="transform-style:preserve-3d;" src="' +
              h +
              '" alt="Al-Aadiyaat" width="52" height="44"><span class="text-white font-semibold hidden md:block text-3xl">AL-&#39;AADIYAAT</span></div><img class="md:hidden" src="' +
              h +
              '" alt="Al-Aadiyaat" width="37" height="31"></div></div>',
            1
          ),
          x = { class: "min-[845px]:hidden" },
          w = (0, i.Lk)(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", class: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
            [(0, i.Lk)("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M4 6h16M4 12h16m-7 6h7" })],
            -1
          ),
          y = [w],
          A = { class: "hidden min-[845px]:flex sm:space-x-8" },
          _ = { key: 0, class: "absolute top-16 right-4 w-40 bg-bodyy bg-opacity-90 text-white flex flex-col items-start space-y-3 py-3 px-3 rounded-md shadow-lg z-50" };
        function I(a, e, t, s, o, n) {
          const l = (0, i.g2)("router-link");
          return (
            (0, i.uX)(),
            (0, i.CE)("nav", g, [
              (0, i.Lk)("div", p, [
                (0, i.Lk)("div", u, [
                  L,
                  (0, i.Lk)("div", x, [(0, i.Lk)("button", { onClick: e[0] || (e[0] = (...a) => n.toggleMenu && n.toggleMenu(...a)), class: "text-white focus:outline-none" }, y)]),
                  (0, i.Lk)("div", A, [
                    (0, i.bF)(
                      l,
                      {
                        to: "/",
                        exact: "",
                        class: (0, f.C4)([
                          { "text-[#ff5e14] font-bold  before:w-full before:bg-white": "/" === a.$route.path, "text-white hover:text-[#ff5e14] font-bold": "/" !== a.$route.path },
                          "relative inline-flex items-center before:content-[''] before:absolute before:bottom-2.5 before:left-1/2 before:transform before:-translate-x-1/2",
                        ]),
                        "aria-current": "page",
                      },
                      { default: (0, i.k6)(() => [(0, i.eW)(" Home ")]), _: 1 },
                      8,
                      ["class"]
                    ),
                    (0, i.bF)(
                      l,
                      {
                        to: "/members",
                        class: (0, f.C4)([
                          { "text-[#ff5e14] font-bold  before:w-full before:bg-white": "/members" === a.$route.path, "text-white hover:text-[#ff5e14] font-bold": "/members" !== a.$route.path },
                          "relative inline-flex items-center before:content-[''] before:absolute before:bottom-2.5 before:left-1/2 before:transform before:-translate-x-1/2",
                        ]),
                      },
                      { default: (0, i.k6)(() => [(0, i.eW)(" Members ")]), _: 1 },
                      8,
                      ["class"]
                    ),
                    (0, i.bF)(
                      l,
                      {
                        to: "/robots",
                        class: (0, f.C4)([
                          { "text-[#ff5e14] font-bold  before:w-full before:bg-white": "/robots" === a.$route.path, "text-white hover:text-[#ff5e14] font-bold": "/robots" !== a.$route.path },
                          "relative inline-flex items-center before:content-[''] before:absolute before:bottom-2.5 before:left-1/2 before:transform before:-translate-x-1/2",
                        ]),
                      },
                      { default: (0, i.k6)(() => [(0, i.eW)(" Robots ")]), _: 1 },
                      8,
                      ["class"]
                    ),
                    (0, i.bF)(
                      l,
                      {
                        to: "/achievement",
                        class: (0, f.C4)([
                          { "text-[#ff5e14] font-bold  before:w-full before:bg-white": "/achievement" === a.$route.path, "text-white hover:text-[#ff5e14] font-bold": "/achievement" !== a.$route.path },
                          "relative inline-flex items-center before:content-[''] before:absolute before:bottom-2.5 before:left-1/2 before:transform before:-translate-x-1/2",
                        ]),
                      },
                      { default: (0, i.k6)(() => [(0, i.eW)(" Achievement ")]), _: 1 },
                      8,
                      ["class"]
                    ),
                  ]),
                  o.isMenuOpen
                    ? ((0, i.uX)(),
                      (0, i.CE)("div", _, [
                        (0, i.bF)(l, { to: "/", onClick: n.toggleMenu, class: "text-[#ff5e14] font-semibold text-sm" }, { default: (0, i.k6)(() => [(0, i.eW)("Home")]), _: 1 }, 8, ["onClick"]),
                        (0, i.bF)(l, { to: "/members", onClick: n.toggleMenu, class: "text-[#ff5e14] font-semibold text-sm" }, { default: (0, i.k6)(() => [(0, i.eW)("Members")]), _: 1 }, 8, ["onClick"]),
                        (0, i.bF)(l, { to: "/robots", onClick: n.toggleMenu, class: "text-[#ff5e14] font-semibold text-sm" }, { default: (0, i.k6)(() => [(0, i.eW)("Robots")]), _: 1 }, 8, ["onClick"]),
                        (0, i.bF)(l, { to: "/achievement", onClick: n.toggleMenu, class: "text-[#ff5e14] font-semibold text-sm" }, { default: (0, i.k6)(() => [(0, i.eW)("Achievement")]), _: 1 }, 8, ["onClick"]),
                      ]))
                    : (0, i.Q3)("", !0),
                ]),
              ]),
            ])
          );
        }
        var M = {
          name: "Header",
          data() {
            return { isMenuOpen: !1 };
          },
          methods: {
            toggleMenu() {
              this.isMenuOpen = !this.isMenuOpen;
            },
          },
        };
        const C = (0, n.A)(M, [["render", I]]);
        var E = C;
        const R = (a) => ((0, i.Qi)("data-v-2bad450c"), (a = a()), (0, i.jt)(), a),
          j = { class: "hero-section" },
          F = { class: "card-grid" },
          T = ["onClick"],
          P = { class: "card__content" },
          H = R(() => (0, i.Lk)("p", { class: "card__category" }, "Role", -1)),
          N = { class: "card__heading" },
          K = { key: 0, class: "popup-overlay" },
          U = { class: "popup-content" },
          S = { class: "popup-title" },
          W = { class: "popup-description" };
        function Y(a, e, t, o, n, l) {
          return (
            (0, i.uX)(),
            (0, i.CE)("section", j, [
              (0, i.Lk)("div", F, [
                ((0, i.uX)(!0),
                (0, i.CE)(
                  i.FK,
                  null,
                  (0, i.pI)(
                    n.cards,
                    (a) => (
                      (0, i.uX)(),
                      (0, i.CE)(
                        "a",
                        { key: a.id, class: "card", href: "#", onClick: (0, s.D$)((e) => l.showPopup(a), ["prevent"]) },
                        [(0, i.Lk)("div", { class: "card__background", style: (0, f.Tr)({ backgroundImage: "url(" + a.image + ")" }) }, null, 4), (0, i.Lk)("div", P, [H, (0, i.Lk)("h3", N, (0, f.v_)(a.title), 1)])],
                        8,
                        T
                      )
                    )
                  ),
                  128
                )),
              ]),
              n.isPopupVisible
                ? ((0, i.uX)(),
                  (0, i.CE)("div", K, [
                    (0, i.Lk)("div", U, [
                      (0, i.Lk)("button", { class: "close-btn", onClick: e[0] || (e[0] = (...a) => l.closePopup && l.closePopup(...a)) }, "✕"),
                      (0, i.Lk)("h2", S, (0, f.v_)(n.selectedCard.title), 1),
                      (0, i.Lk)("p", W, (0, f.v_)(n.selectedCard.description), 1),
                    ]),
                  ]))
                : (0, i.Q3)("", !0),
            ])
          );
        }
        var B = {
          name: "FilterCard",
          data() {
            return {
              cards: [
                {
                  id: 1,
                  title: "Manager",
                  description: "The manager oversees all documentation and correspondence, ensuring the team stays aligned with its goals while guiding them through the project.",
                  image: "https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                },
                {
                  id: 2,
                  title: "Mechanic",
                  description: "The mechanic is responsible for designing, building, and assembling all the joints and physical components of the robot, serving as the muscle of the team.",
                  image: "https://www.blibli.com/friends-backend/wp-content/uploads/2023/06/B500485-Cover-Cara-Menghitung-Jangka-Sorong.jpg",
                },
                {
                  id: 3,
                  title: "Electronics",
                  description: "The electronics team designs and implements the internal systems of the robot, including power circuits, switches, mini-computers, and cameras, functioning as the robot's vital organs.",
                  image: "https://tokoteknologi.co.id/resources/image/18/ae/1.jpg",
                },
                {
                  id: 4,
                  title: "Programmer",
                  description: "The programming team develops the software and algorithms that control the robot, acting as the brain to enable its decision-making and functionality.",
                  image: "https://toffeedev.com/wp-content/uploads/2023/03/contoh-dan-tugas-programmer.png",
                },
              ],
              isPopupVisible: !1,
              selectedCard: null,
            };
          },
          methods: {
            showPopup(a) {
              (this.selectedCard = a), (this.isPopupVisible = !0);
            },
            closePopup() {
              this.isPopupVisible = !1;
            },
          },
        };
        const G = (0, n.A)(B, [
          ["render", Y],
          ["__scopeId", "data-v-2bad450c"],
        ]);
        var X = G;
        const q = { class: "pt-20" },
          D = { class: "relative isolate" },
          z = { class: "mx-auto max-w-7xl px-6 space-y-20 sm:space-y-52 lg:space-y-0 lg:flex lg:items-center lg:gap-x-10 lg:pl-8 lg:pr-20" },
          O = { class: "mx-auto max-w-2xl lg:mx-0 lg:flex-auto" },
          J = { class: "flex" },
          Q = {
            "x-on:mouseover": "openError = true",
            class:
              "relative flex items-center gap-x-4 rounded-full px-4 py-1 leading-6 text-sm xl:text-base text-white xl:font-semibold border border-[#CACACA]/60 bg-transparent hover:bg-[#E730CA] hover:border-transparent transition-colors",
          },
          V = (0, i.Lk)(
            "svg",
            { class: "-mr-2 h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
            [(0, i.Lk)("path", { "fill-rule": "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", "clip-rule": "evenodd" })],
            -1
          ),
          $ = (0, i.Lk)("h1", { class: "mt-6 max-w-lg text-4xl sm:text-7xl lg:text-6xl font-semibold text-white xl:text-7xl tracking-tight" }, "AL-'AADIYAAT", -1),
          Z = (0, i.Lk)("p", { class: "text-[#ff5e14] sm:text-xl font-semibold tracking-tight max-w-lg" }, "Kuda Perang Lapangan, Juara di Setiap Pertandingan!", -1),
          aa = (0, i.Lk)("p", { class: "xl:text-lg font-medium leading-8 text-white max-w-[553px]" }, "Humanoid Robosoccer Team From UNY", -1),
          ea = { class: "relative flex justify-center items-center mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow" },
          ta = (0, i.Lk)(
            "svg",
            { class: "mx-auto max-w-md max-h-md lg:max-w-full lg:min-w-[445px] lg:max-h-full lg:min-h-[445px] text-gray-300", "aria-hidden": "true", viewBox: "0 0 580 580", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            [(0, i.Lk)("circle", { cx: "290", cy: "290", r: "289.5", stroke: "currentColor", "stroke-opacity": "0.2" }), (0, i.Lk)("circle", { cx: "290", cy: "290", r: "231.5", stroke: "currentColor", "stroke-opacity": "0.2" })],
            -1
          ),
          sa = { class: "circle w-full h-full max-w-md max-h-md lg:max-w-full lg:min-w-[445px] lg:max-h-full lg:min-h-[445px]", style: { "--total": "12" } },
          ia = { class: "stat", style: { "--i": "2" } },
          oa = { class: "card3d" },
          na = { class: "wrapper3d" },
          la = {
            class:
              "flex items-end mr-[55px] 2xl:mr-0 w-[85px] sm:w-[175px] h-[126px] sm:h-[225px] 2xl:w-[200px] 2xl:h-[250px] rounded-md sm:rounded-2xl 2xl:rounded-3xl bg-center bg-cover bg-no-repeat scale-[0.6] sm:scale-100 overflow-hidden transition-all",
            style: { "background-image": "url('img/Robot3.101b6189.png')", animation: "float 3s ease-in-out infinite" },
          },
          ra = { class: "hidden sm:block flex-1 bg-white h-[95px] px-4 glass" },
          ca = (0, i.Lk)("h4", { class: "text-xs font-bold text-[#161616] py-4 truncate max-w-[145px] 2xl:max-w-none" }, "Robot #3", -1),
          da = { class: "flex items-center justify-between font-bold text-[0.625rem]" },
          ma = (0, i.Lk)("div", { class: "flex flex-col" }, [(0, i.Lk)("span", { class: "text-[#646464]" }, "Pono")], -1),
          va = (0, i.Lk)("button", { type: "button", class: "text-[#161616] hover:text-[#E730CA] border rounded-full border-[#161616] hover:border-[#E730CA] w-12 h-6 transition-colors" }, "See", -1),
          ka = { class: "stat", style: { "--i": "5" } },
          ba = { class: "card3d" },
          fa = { class: "wrapper3d" },
          ha = {
            class:
              "flex items-end mr-[55px] 2xl:mr-0 w-[85px] sm:w-[175px] h-[126px] sm:h-[225px] 2xl:w-[200px] 2xl:h-[250px] rounded-md sm:rounded-2xl 2xl:rounded-3xl bg-center bg-cover bg-no-repeat scale-[0.6] sm:scale-100 overflow-hidden transition-all",
            style: { "background-image": "url('./Robot2.jpg')", animation: "float 4s ease-in-out infinite" },
          },
          ga = { class: "hidden sm:block flex-1 bg-white h-[95px] px-4 glass" },
          pa = (0, i.Lk)("h4", { class: "text-xs font-bold text-[#161616] py-4 truncate max-w-[145px] 2xl:max-w-none" }, "Robot #2", -1),
          ua = { class: "flex items-center justify-between font-bold text-[0.625rem]" },
          La = (0, i.Lk)("div", { class: "flex flex-col" }, [(0, i.Lk)("span", { class: "text-[#646464]" }, "Ujang")], -1),
          xa = (0, i.Lk)("button", { type: "button", class: "text-[#161616] hover:text-[#E730CA] border rounded-full border-[#161616] hover:border-[#E730CA] w-12 h-6 transition-colors" }, "See", -1),
          wa = { class: "stat", style: { "--i": "8" } },
          ya = { class: "card3d" },
          Aa = { class: "wrapper3d" },
          _a = {
            class:
              "flex items-end mr-[55px] 2xl:mr-0 w-[85px] sm:w-[175px] h-[126px] sm:h-[225px] 2xl:w-[200px] 2xl:h-[250px] rounded-md sm:rounded-2xl 2xl:rounded-3xl bg-center bg-cover bg-no-repeat scale-[0.6] sm:scale-100 overflow-hidden transition-all",
            style: { "background-image": "url('img/Robot1.d54aee0d.png')", animation: "float 4s ease-in-out infinite" },
          },
          Ia = { class: "hidden sm:block flex-1 bg-white h-[95px] px-4 glass" },
          Ma = (0, i.Lk)("h4", { class: "text-xs font-bold text-[#161616] py-4 truncate max-w-[145px] 2xl:max-w-none" }, "Robot #1", -1),
          Ca = { class: "flex items-center justify-between font-bold text-[0.625rem]" },
          Ea = (0, i.Lk)("div", { class: "flex flex-col" }, [(0, i.Lk)("span", { class: "text-[#646464]" }, "Mono")], -1),
          Ra = (0, i.Lk)("button", { type: "button", class: "text-[#161616] hover:text-[#E730CA] border rounded-full border-[#161616] hover:border-[#E730CA] w-12 h-6 transition-colors" }, "See", -1),
          ja = { class: "stat", style: { "--i": "11" } },
          Fa = { class: "card3d" },
          Ta = { class: "wrapper3d" },
          Pa = {
            class: "flex items-end mr-[55px] 2xl:mr-0 w-[85px] sm:w-[175px] h-[126px] sm:h-[225px] 2xl:w-[200px] 2xl:h-[250px] rounded-md sm:rounded-2xl 2xl:rounded-3xl bg-center bg-cover bg-no-repeat overflow-hidden transition-all",
            style: { "background-image": "url('img/Robot4.e27b6094.png')", animation: "floatdown 5s ease-in-out infinite" },
          },
          Ha = { class: "hidden sm:block flex-1 bg-white h-[95px] px-4 glass" },
          Na = (0, i.Lk)("h4", { class: "text-xs font-bold text-[#161616] py-4 truncate max-w-[145px] 2xl:max-w-none" }, "Robot #4", -1),
          Ka = { class: "flex items-center justify-between font-bold text-[0.625rem]" },
          Ua = (0, i.Lk)("div", { class: "flex flex-col" }, [(0, i.Lk)("span", { class: "text-[#646464]" }, "Arno")], -1),
          Sa = (0, i.Lk)("button", { type: "button", class: "text-[#161616] hover:text-[#E730CA] border rounded-full border-[#161616] hover:border-[#E730CA] w-12 h-6 transition-colors" }, "See", -1);
        function Wa(a, e, t, s, o, n) {
          const l = (0, i.g2)("router-link"),
            r = (0, i.g2)("AboutUs");
          return (
            (0, i.uX)(),
            (0, i.CE)(
              i.FK,
              null,
              [
                (0, i.Lk)("section", null, [
                  (0, i.Lk)("div", q, [
                    (0, i.Lk)("div", D, [
                      (0, i.Lk)("div", z, [
                        (0, i.Lk)("div", O, [
                          (0, i.Lk)("div", J, [(0, i.Lk)("div", Q, [(0, i.bF)(l, { to: "/achievement", class: "flex items-center gap-x-1" }, { default: (0, i.k6)(() => [(0, i.eW)(" Everything about a team "), V]), _: 1 })])]),
                          $,
                          Z,
                          aa,
                        ]),
                        (0, i.Lk)("div", ea, [
                          ta,
                          (0, i.Lk)("div", sa, [
                            (0, i.Lk)("div", ia, [
                              (0, i.Lk)("div", oa, [
                                (0, i.Lk)("div", na, [
                                  (0, i.Lk)("div", la, [
                                    (0, i.Lk)("div", ra, [ca, (0, i.Lk)("div", da, [ma, (0, i.Lk)("div", null, [(0, i.bF)(l, { to: "/robots", class: "flex items-center gap-x-1" }, { default: (0, i.k6)(() => [va]), _: 1 })])])]),
                                  ]),
                                ]),
                              ]),
                            ]),
                            (0, i.Lk)("div", ka, [
                              (0, i.Lk)("div", ba, [
                                (0, i.Lk)("div", fa, [
                                  (0, i.Lk)("div", ha, [
                                    (0, i.Lk)("div", ga, [pa, (0, i.Lk)("div", ua, [La, (0, i.Lk)("div", null, [(0, i.bF)(l, { to: "/robots", class: "flex items-center gap-x-1" }, { default: (0, i.k6)(() => [xa]), _: 1 })])])]),
                                  ]),
                                ]),
                              ]),
                            ]),
                            (0, i.Lk)("div", wa, [
                              (0, i.Lk)("div", ya, [
                                (0, i.Lk)("div", Aa, [
                                  (0, i.Lk)("div", _a, [
                                    (0, i.Lk)("div", Ia, [Ma, (0, i.Lk)("div", Ca, [Ea, (0, i.Lk)("div", null, [(0, i.bF)(l, { to: "/robots", class: "flex items-center gap-x-1" }, { default: (0, i.k6)(() => [Ra]), _: 1 })])])]),
                                  ]),
                                ]),
                              ]),
                            ]),
                            (0, i.Lk)("div", ja, [
                              (0, i.Lk)("div", Fa, [
                                (0, i.Lk)("div", Ta, [
                                  (0, i.Lk)("div", Pa, [
                                    (0, i.Lk)("div", Ha, [Na, (0, i.Lk)("div", Ka, [Ua, (0, i.Lk)("div", null, [(0, i.bF)(l, { to: "/robots", class: "flex items-center gap-x-1" }, { default: (0, i.k6)(() => [Sa]), _: 1 })])])]),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i.bF)(r),
              ],
              64
            )
          );
        }
        const Ya = { class: "light mt-60" },
          Ba = (0, i.Lk)(
            "header",
            { class: "title" },
            [
              (0, i.Lk)("h2", null, [(0, i.eW)("About "), (0, i.Lk)("span", null, "Us")]),
              (0, i.Lk)(
                "p",
                null,
                ' Tim Al-‘Aadiyaat dari Universitas Negeri Yogyakarta (UNY) adalah tim robot humanoid yang telah menunjukkan prestasi luar biasa di berbagai ajang Kontes Robot Indonesia (KRI). Dengan filosofi sebagai "kuda perang yang gagah dan lincah," tim ini terdiri dari 4-5 robot humanoid yang memiliki keunikan masing-masing, namun berbagi tujuan yang sama untuk meraih kemenangan. '
              ),
            ],
            -1
          ),
          Ga = [Ba];
        function Xa(a, e, t, s, o, n) {
          return (0, i.uX)(), (0, i.CE)("section", Ya, Ga);
        }
        var qa = { name: "AboutUs", components: {} };
        const Da = (0, n.A)(qa, [["render", Xa]]);
        var za = Da,
          Oa = { name: "Hero", components: { AboutUs: za } };
        const Ja = (0, n.A)(Oa, [["render", Wa]]);
        var Qa = Ja,
          Va = t.p + "img/Berita1.465735bf.jpg";
        const $a = (0, i.Fv)(
          '<div class="text-center newstext-container" data-v-53a7b1c6><h6 class="newstext" data-v-53a7b1c6>latest news</h6></div><div class="cardsnews mb-6" data-v-53a7b1c6><div class="cardnews content" data-v-53a7b1c6><a href="https://www.uny.ac.id/id/berita/al-aadiyaat-uny-raih-juara-2-kontes-robot-sepak-bola-indonesia-humanoid-tingkat-nasional" class="cardnews-link" target="_blank" rel="noopener noreferrer" data-v-53a7b1c6><div class="cardnews-content" data-v-53a7b1c6><div class="cardnews-img" data-v-53a7b1c6><img src="' +
            Va +
            '" alt="KRI24" data-v-53a7b1c6></div><div class="cardnews-label" data-v-53a7b1c6>KRI24</div><div class="cardnews-title hidden md:block" data-v-53a7b1c6>Al-‘Aadiyaat UNY Raih Juara 2 Kontes Robot Sepak Bola Indonesia Humanoid Tingkat Nasional Tahun 2024</div></div></a></div><div class="cardnews content" data-v-53a7b1c6><a href="https://www.beritajogja.com/news/181411068/robot-al-aadiyaat-uny-mulai-mengukir-prestasi-di-kontes-robot-indonesia-nasional-2023" class="cardnews-link" target="_blank" rel="noopener noreferrer" data-v-53a7b1c6><div class="cardnews-content" data-v-53a7b1c6><div class="cardnews-img" data-v-53a7b1c6><img src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/18/2023/06/27/WhatsApp-Image-2023-06-27-at-101306-162902739.jpeg" alt="KRI23" data-v-53a7b1c6></div><div class="cardnews-label" data-v-53a7b1c6>KRI23</div><div class="cardnews-title hidden md:block" data-v-53a7b1c6>Berita Jogja: Robot Al-‘Aadiyaat UNY Mulai Mengukir Prestasi Di Kontes Robot Indonesia Nasional 2023</div></div></a></div><div class="cardnews content" data-v-53a7b1c6><a href="https://jateng.antaranews.com/berita/232407/uny-raih-juara-umum-kri-2019-regional-iii" class="cardnews-link" target="_blank" rel="noopener noreferrer" data-v-53a7b1c6><div class="cardnews-content" data-v-53a7b1c6><div class="cardnews-img" data-v-53a7b1c6><img src="https://img.antaranews.com/cache/1200x800/2019/04/27/juara-umum.jpg.webp" alt="KRI19" data-v-53a7b1c6></div><div class="cardnews-label" data-v-53a7b1c6>KRI19</div><div class="cardnews-title hidden md:block" data-v-53a7b1c6>Antara Jateng: UNY raih juara umum KRI 2019 Regional III</div></div></a></div><div class="cardnews content" data-v-53a7b1c6><a href="https://www.uny.ac.id/id/berita/kemenangan-gemilang-uny-robotics-team-di-kontes-robot-indonesia-2024" class="cardnews-link" target="_blank" rel="noopener noreferrer" data-v-53a7b1c6><div class="cardnews-content" data-v-53a7b1c6><div class="cardnews-img" data-v-53a7b1c6><img src="https://www.uny.ac.id/sites/default/files/styles/large/public/2024-07/WhatsApp%20Image%202024-07-23%20at%2020.43.50.jpeg?itok=PGCoBhjz" alt="Robotika" data-v-53a7b1c6></div><div class="cardnews-label" data-v-53a7b1c6>Robotika UNY</div><div class="cardnews-title hidden md:block" data-v-53a7b1c6>Kemenangan Gemilang UNY Robotics Team di Kontes Robot Indonesia 2024</div></div></a></div></div>',
          2
        );
        function Za(a, e, t, s, i, o) {
          return $a;
        }
        var ae = { name: "News", components: {} };
        const ee = (0, n.A)(ae, [
          ["render", Za],
          ["__scopeId", "data-v-53a7b1c6"],
        ]);
        var te = ee;
        const se = { class: "footer-section" },
          ie = (0, i.Fv)(
            '<div class="max-w-[1440px] mx-auto"><div class="container"><div class="footer-cta pt-5 pb-5"><div class="row"><div class="col-xl-4 col-md-4 mb-6"><div class="single-cta"><i class="fas fa-map-marker-alt"></i><div class="cta-text"><h4>Find us</h4><span>Gedung Aula FT UNY, Sleman Regency</span></div></div></div><div class="col-xl-4 col-md-4 mb-6"><div class="single-cta"><i class="fas fa-phone"></i><div class="cta-text"><h4>Call us</h4><span>12345678 0</span></div></div></div><div class="col-xl-4 col-md-4"><div class="single-cta"><i class="far fa-envelope-open"></i><div class="cta-text"><h4>Mail us</h4><span>alaadiyaat@.uny.ac.id</span></div></div></div></div></div><div class="footer-content pt-5 pb-5"><div class="row"><div class="col-xl-4 col-lg-4 mb-50"><div class="footer-widget"><div class="footer-social-icon mb-6"><span>Follow us</span><a href="https://github.com/aadhumanoid" target="_blank" rel="noopener noreferrer"><i class="fab fa-github github-bg"></i></a><a href="https://www.instagram.com/al_aadiyaatuny?igsh=MW54eTc0YjZ3dTV2eA==" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram instagram-bg"></i></a><a href="https://www.tiktok.com/@alaadiyaat.krsbih?is_from_webapp=1&amp;sender_device=pc" target="_blank" rel="noopener noreferrer"><i class="fab fa-tiktok tiktok-bg"></i></a><a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter twitter-bg"></i></a><a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-google-plus-g google-bg"></i></a></div></div></div><div class="col-xl-4 col-lg-4 col-md-6 mb-30"><div class="footer-widget"><div class="footer-widget-heading"><h3>Useful Links</h3></div><ul><li><a href="/">Home</a></li><li><a href="/members">Members</a></li><li><a href="/robots">Robots</a></li><li><a href="/achievement">Achievement</a></li><li><a href="#">Contact us</a></li><li><a href="/">Latest News</a></li></ul></div></div><div class="col-xl-4 col-lg-4 col-md-6 mb-50"><div class="footer-widget"><div class="footer-widget-heading"><h3>We grateful for your input</h3></div><div class="footer-text mb-25"><p>Don’t forget to provide feedback to our team by simply filling out the form below.</p></div><div class="subscribe-form"><form action="#"><input type="text" placeholder="Message"><button><i class="fab fa-telegram-plane"></i></button></form></div></div></div></div></div></div></div><div class="copyright-area"><div class="container"><div class="row"><div class="col-xl-6 col-lg-6 text-center text-lg-left"><div class="copyright-text"><p>Copyright © 2024, Made with 🤍 by <a href="https://github.com/DigtaAl">Rifky Andigta Al-Fathir</a></p></div></div></div></div></div>',
            2
          ),
          oe = [ie];
        function ne(a, e, t, s, o, n) {
          return (0, i.uX)(), (0, i.CE)("footer", se, oe);
        }
        var le = {
          name: "FooterBar",
          components: {},
          mounted() {
            const a = document.createElement("link");
            (a.rel = "stylesheet"), (a.href = "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css");
          },
        };
        const re = (0, n.A)(le, [["render", ne]]);
        var ce = re,
          de = t.p + "img/AAD.3ef8b813.jpg";
        const me = { class: "cardvideo" },
          ve = (0, i.Lk)("strong", { class: "desktop-only" }, "See about the team on Youtube:", -1),
          ke = (0, i.Lk)("a", { href: "https://www.youtube.com/live/SPJr9b8SPIA?si=GFnkVPBoCY8E3F-n&t=4080", target: "_blank" }, [(0, i.Lk)("img", { src: de, alt: "Youtube Thumbnail" })], -1),
          be = [ve, ke];
        function fe(a, e, t, s, o, n) {
          return (0, i.uX)(), (0, i.CE)("div", me, be);
        }
        var he = { name: "VideoCard" };
        const ge = (0, n.A)(he, [["render", fe]]);
        var pe = ge,
          ue = {
            name: "Home",
            components: { HeaderNav: E, FilterCard: X, Hero: Qa, FooterBar: ce, VideoCard: pe, News: te },
            mounted() {
              b().init(), b().refresh();
            },
          };
        const Le = (0, n.A)(ue, [["render", v]]);
        var xe = Le;
        const we = (0, i.Fv)(
          '<footer class="footer-section"><div class="copyright-area"><div class="container"><div class="row"><div class="col-xl-6 col-lg-6 text-center text-lg-left"><div class="copyright-text"><p>Copyright © 2024, Made with 🤍 by <a href="https://github.com/DigtaAl">Rifky Andigta Al-Fathir</a></p></div></div></div></div></div></footer>',
          1
        );
        function ye(a, e, t, s, o, n) {
          const l = (0, i.g2)("HeaderNav"),
            r = (0, i.g2)("TeamNow");
          return (0, i.uX)(), (0, i.CE)(i.FK, null, [(0, i.bF)(l), (0, i.bF)(r), we], 64);
        }
        var Ae = t.p + "img/lead1.8ec693cd.png",
          _e = t.p + "img/lead2.4e7014d2.png",
          Ie = t.p + "img/IMG_6667.e5d569e7.jpg",
          Me = t.p + "img/IMG_6674.903890f0.jpg";
        const Ce = (a) => ((0, i.Qi)("data-v-23e7a180"), (a = a()), (0, i.jt)(), a),
          Ee = { class: "team-section pt-5 pb-5" },
          Re = { class: "container" },
          je = Ce(() =>
            (0, i.Lk)(
              "div",
              { class: "row justify-content-center" },
              [(0, i.Lk)("div", { class: "col-lg-8 text-center pb-5" }, [(0, i.Lk)("span", null, "meet our"), (0, i.Lk)("h2", null, "Leader"), (0, i.Lk)("span", { class: "bg-watermark2" }, "Team")])],
              -1
            )
          ),
          Fe = Ce(() =>
            (0, i.Lk)(
              "div",
              { class: "row mt-2 justify-content-center" },
              [
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ae, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: _e, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Hudzaifi Adzkar L"), (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '21")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Hudzaifi Adzkar L"),
                        (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '21"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ],
              -1
            )
          ),
          Te = Ce(() =>
            (0, i.Lk)(
              "div",
              { class: "row justify-content-center" },
              [
                (0, i.Lk)("div", { class: "col-lg-8 text-center pb-5" }, [
                  (0, i.Lk)("h2", null, "Manager"),
                  (0, i.Lk)("span", { class: "bg-watermark2" }, "Team"),
                  (0, i.Lk)("p", null, "Meet the masterminds behind keeping the team on track and driving us toward victory."),
                ]),
              ],
              -1
            )
          ),
          Pe = Ce(() =>
            (0, i.Lk)(
              "div",
              { class: "row mt-2 justify-content-center" },
              [
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Desfitra Nur A"), (0, i.Lk)("div", { class: "designation" }, "Akuntansi '21")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Desfitra Nur A"),
                        (0, i.Lk)("div", { class: "designation" }, "Akuntansi '21"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Qusnul Qotimah"), (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '23")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Qusnul Qotimah"),
                        (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '23"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ],
              -1
            )
          ),
          He = Ce(() =>
            (0, i.Lk)(
              "div",
              { class: "row justify-content-center" },
              [
                (0, i.Lk)("div", { class: "col-lg-8 text-center pb-5" }, [
                  (0, i.Lk)("h2", null, "Program"),
                  (0, i.Lk)("span", { class: "bg-watermark2" }, "Role"),
                  (0, i.Lk)("p", null, "Meet the minds behind the code, ready to bring ideas to life, one line at a time."),
                ]),
              ],
              -1
            )
          ),
          Ne = Ce(() =>
            (0, i.Lk)(
              "div",
              { class: "row mt-2 justify-content-center" },
              [
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Ie, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Rifky Andigta Al-Fathir"), (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '21")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Rifky Andigta Al-Fathir"),
                        (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '21"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Muhamad Fikri"), (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '20")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Muhamad Fikri"),
                        (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '20"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Naufal Nafi' N"), (0, i.Lk)("div", { class: "designation" }, "Teknik Elektronika '20")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Naufal Nafi' N"),
                        (0, i.Lk)("div", { class: "designation" }, "Teknik Elektronika '20"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Afif Ilham S.U"), (0, i.Lk)("div", { class: "designation" }, "Teknik Elektronika '20")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Afif Ilham S.U"),
                        (0, i.Lk)("div", { class: "designation" }, "Teknik Elektronika '20"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Kiflan Anugerah S"), (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Informatika '21")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Kiflan Anugerah S"),
                        (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Informatika '21"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Hafidh Rasyiq R"), (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektronika '22")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Hafidh Rasyiq R"),
                        (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektronika '22"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Shafa Feby A"), (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '23")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Shafa Feby A"),
                        (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '23"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ],
              -1
            )
          ),
          Ke = Ce(() =>
            (0, i.Lk)(
              "div",
              { class: "row justify-content-center" },
              [
                (0, i.Lk)("div", { class: "col-lg-8 text-center pb-5" }, [
                  (0, i.Lk)("h2", null, "Electrics"),
                  (0, i.Lk)("span", { class: "bg-watermark2" }, "Role"),
                  (0, i.Lk)("p", null, "Say hello to the powerhouses, they are the spark that keeps our robots alive and thriving."),
                ]),
              ],
              -1
            )
          ),
          Ue = Ce(() =>
            (0, i.Lk)(
              "div",
              { class: "row mt-2 justify-content-center" },
              [
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Cikal Ardhiansyah"), (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '22")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Cikal Ardhiansyah"),
                        (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '22"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Muhamad Yoga P"), (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '20")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Muhamad Yoga P"),
                        (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '20"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Hudzaifi Adzkar L"), (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '21")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Hudzaifi Adzkar L"),
                        (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '21"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Amara Livia A.P"), (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '22")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Amara Livia A.P"),
                        (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '22"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Fahreizain A.R"), (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '23")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Fahreizain A.R"),
                        (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '23"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Veri Saputra"), (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '23")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Veri Saputra"),
                        (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '23"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ],
              -1
            )
          ),
          Se = Ce(() =>
            (0, i.Lk)(
              "div",
              { class: "row justify-content-center" },
              [
                (0, i.Lk)("div", { class: "col-lg-8 text-center pb-5" }, [
                  (0, i.Lk)("h2", null, "Mechanics"),
                  (0, i.Lk)("span", { class: "bg-watermark2" }, "Role"),
                  (0, i.Lk)("p", null, "Get ready to meet the muscle, precision, strength, and innovation all in one."),
                ]),
              ],
              -1
            )
          ),
          We = Ce(() =>
            (0, i.Lk)(
              "div",
              { class: "row mt-2 justify-content-center" },
              [
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Bagus Ari Wibowo"), (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '21")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Bagus Ari Wibowo"),
                        (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Elektro '21"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Muhammad Farid K"), (0, i.Lk)("div", { class: "designation" }, "Teknik Mesin '22")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Muhammad Farid K"),
                        (0, i.Lk)("div", { class: "designation" }, "Teknik Mesin '22"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Yusuf Ade P"), (0, i.Lk)("div", { class: "designation" }, "Teknik Mesin '22")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Yusuf Ade P"),
                        (0, i.Lk)("div", { class: "designation" }, "Teknik Mesin '22"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, i.Lk)("div", { class: "col-md-3 col-sm-6" }, [
                  (0, i.Lk)("div", { class: "team-member mb-3" }, [
                    (0, i.Lk)("div", { class: "inner-box" }, [
                      (0, i.Lk)("div", { class: "image-box" }, [(0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("img", { src: Ie, alt: "Image", class: "main-img" }), (0, i.Lk)("img", { src: Me, alt: "Hover Image", class: "hover-img" })])]),
                      (0, i.Lk)("div", { class: "desc-content" }, [(0, i.Lk)("h3", null, "Rizal Hermawan S"), (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Mesin '23")]),
                      (0, i.Lk)("div", { class: "hover-content" }, [
                        (0, i.Lk)("h3", null, "Rizal Hermawan S"),
                        (0, i.Lk)("div", { class: "designation" }, "Pend. Teknik Mesin '23"),
                        (0, i.Lk)("div", { class: "social" }, [
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-tiktok" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-twitter" })]),
                          (0, i.Lk)("a", { href: "#" }, [(0, i.Lk)("i", { class: "fab fa-instagram" })]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ],
              -1
            )
          );
        function Ye(a, e, t, s, o, n) {
          const l = (0, i.g2)("leader"),
            r = (0, i.g2)("manager"),
            c = (0, i.g2)("program"),
            d = (0, i.g2)("elektronik"),
            m = (0, i.g2)("mekanik");
          return (
            (0, i.uX)(),
            (0, i.CE)("section", Ee, [
              (0, i.Lk)("div", Re, [
                (0, i.bF)(l, { style: { display: "block", "margin-bottom": "50px" } }, { default: (0, i.k6)(() => [je, Fe]), _: 1 }),
                (0, i.bF)(r, { style: { display: "block", "margin-bottom": "50px" } }, { default: (0, i.k6)(() => [Te, Pe]), _: 1 }),
                (0, i.bF)(c, { style: { display: "block", "margin-bottom": "50px" } }, { default: (0, i.k6)(() => [He, Ne]), _: 1 }),
                (0, i.bF)(d, { style: { display: "block", "margin-bottom": "50px" } }, { default: (0, i.k6)(() => [Ke, Ue]), _: 1 }),
                (0, i.bF)(m, { style: { display: "block", "margin-bottom": "50px" } }, { default: (0, i.k6)(() => [Se, We]), _: 1 }),
              ]),
            ])
          );
        }
        var Be = {
          name: "TeamNow",
          mounted() {
            const a = document.createElement("link");
            (a.rel = "stylesheet"), (a.href = "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css");
            const e = document.createElement("link");
            (e.rel = "stylesheet"), (e.href = "https://use.fontawesome.com/releases/v5.6.3/css/all.css");
            const t = document.createElement("link");
            (t.rel = "stylesheet"), (t.href = "https://daneden.github.io/animate.css/animate.min.css"), document.head.appendChild(e), document.head.appendChild(t);
          },
        };
        const Ge = (0, n.A)(Be, [
          ["render", Ye],
          ["__scopeId", "data-v-23e7a180"],
        ]);
        var Xe = Ge,
          qe = { name: "Members", components: { HeaderNav: E, TeamNow: Xe } };
        const De = (0, n.A)(qe, [["render", ye]]);
        var ze = De;
        const Oe = (0, i.Fv)(
          '<footer class="footer-section"><div class="copyright-area"><div class="container"><div class="row"><div class="col-xl-6 col-lg-6 text-center text-lg-left"><div class="copyright-text"><p>Copyright © 2024, Made with 🤍 by <a href="https://github.com/DigtaAl">Rifky Andigta Al-Fathir</a></p></div></div></div></div></div></footer>',
          1
        );
        function Je(a, e, t, s, o, n) {
          const l = (0, i.g2)("HeaderNav"),
            r = (0, i.g2)("RobotList");
          return (0, i.uX)(), (0, i.CE)(i.FK, null, [(0, i.bF)(l), (0, i.bF)(r), Oe], 64);
        }
        var Qe = t.p + "img/Robot1.d54aee0d.png",
          Ve = t.p + "img/RobotAssembly.51a04e28.jpg",
          $e = t.p + "img/Robot3.101b6189.png",
          Ze = t.p + "img/Robot4.e27b6094.png";
        const at = (0, i.Fv)(
            '<div class="row justify-content-center" data-v-1321f675><div class="col-lg-8 text-center pb-3 mt-6" data-v-1321f675><span data-v-1321f675>introducing our</span><h2 data-v-1321f675>Cherished</h2><span class="bg-watermark2" data-v-1321f675>Robot</span></div></div><div class="containerrobot" data-v-1321f675><div class="cardrobot" data-v-1321f675><div class="Box" data-v-1321f675><img src="' +
              Qe +
              '" data-v-1321f675></div><div class="details" data-v-1321f675><strong style="font-weight:bold;" data-v-1321f675>Robot 1 (Mono)</strong><p class="mb-6" data-v-1321f675>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><strong class="mt-6" style="font-weight:bold;" data-v-1321f675>Specification</strong><p data-v-1321f675>Weight : 4,4 kg</p><p data-v-1321f675>Height : 57 cm</p></div></div><div class="cardrobot" data-v-1321f675><div class="Box" data-v-1321f675><img src="' +
              Ve +
              '" data-v-1321f675></div><div class="details" data-v-1321f675><strong style="font-weight:bold;" data-v-1321f675>Robot 2 (Ujang)</strong><p class="mb-6" data-v-1321f675>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><strong class="mt-6" style="font-weight:bold;" data-v-1321f675>Specification</strong><p data-v-1321f675>Weight : 4,85 kg</p><p data-v-1321f675>Height : 61,5 cm</p></div></div><div class="cardrobot" data-v-1321f675><div class="Box" data-v-1321f675><img src="' +
              $e +
              '" data-v-1321f675></div><div class="details" data-v-1321f675><strong style="font-weight:bold;" data-v-1321f675>Robot 3 (Pono)</strong><p class="mb-6" data-v-1321f675> Pono, a humanoid robot by the Al-‘Aadiyaat team at Universitas Negeri Yogyakarta (UNY), showcases advanced robotics engineering. Built to mimic human movements with high efficiency, it’s designed for various applications. </p><strong class="mt-6" style="font-weight:bold;" data-v-1321f675>Specification</strong><p data-v-1321f675>Weight : 4 kg</p><p data-v-1321f675>Height : 61.5 cm</p></div></div><div class="cardrobot" data-v-1321f675><div class="Box" data-v-1321f675><img src="' +
              Ze +
              '" data-v-1321f675></div><div class="details" data-v-1321f675><strong style="font-weight:bold;" data-v-1321f675>Robot 4 (Arno)</strong><p class="mb-6" data-v-1321f675>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><strong class="mt-6" style="font-weight:bold;" data-v-1321f675>Specification</strong><p data-v-1321f675>Weight : 3,5 kg</p><p data-v-1321f675>Height : 56 cm</p></div></div><div class="cardrobot" data-v-1321f675><div class="Box" data-v-1321f675><img src="' +
              Ve +
              '" data-v-1321f675></div><div class="details" data-v-1321f675><strong style="font-weight:bold;" data-v-1321f675>Robot 5 (BayMax)</strong><p class="mb-6" data-v-1321f675>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><strong class="mt-6" style="font-weight:bold;" data-v-1321f675>Specification</strong><p data-v-1321f675>Weight : 3,2 kg</p><p data-v-1321f675>Height : 63,5 cm</p></div></div></div>',
            2
          ),
          et = [at];
        function tt(a, e, t, s, o, n) {
          return (0, i.uX)(), (0, i.CE)("section", null, et);
        }
        var st = { name: "RobotList", components: {} };
        const it = (0, n.A)(st, [
          ["render", tt],
          ["__scopeId", "data-v-1321f675"],
        ]);
        var ot = it,
          nt = { name: "Robots", components: { HeaderNav: E, RobotList: ot } };
        const lt = (0, n.A)(nt, [["render", Je]]);
        var rt = lt;
        const ct = (0, i.Fv)(
          '<footer class="footer-section"><div class="copyright-area"><div class="container"><div class="row"><div class="col-xl-6 col-lg-6 text-center text-lg-left"><div class="copyright-text"><p>Copyright © 2024, Made with 🤍 by <a href="https://github.com/DigtaAl">Rifky Andigta Al-Fathir</a></p></div></div></div></div></div></footer>',
          1
        );
        function dt(a, e, t, s, o, n) {
          const l = (0, i.g2)("HeaderNav"),
            r = (0, i.g2)("Timeline");
          return (0, i.uX)(), (0, i.CE)(i.FK, null, [(0, i.bF)(l), (0, i.bF)(r), ct], 64);
        }
        const mt = { class: "container" },
          vt = (0, i.Fv)(
            '<div class="timeline" data-v-cc23ff94><ul data-v-cc23ff94><li data-v-cc23ff94><div class="timeline-content" data-v-cc23ff94><h3 class="date" data-v-cc23ff94>1 - 6th July, 2024</h3><h1 data-v-cc23ff94>KRI 2024 (Nasional)</h1><p data-v-cc23ff94> Acara ini diadakan secara offline di Universitas Muhammadiyah Surakarta, dan tim berhasil meraih juara 2 tingkat nasional dalam kompetisi tersebut. </p><img src="' +
              de +
              '" alt="KRI 2024 (Nasional)" data-v-cc23ff94></div></li><li data-v-cc23ff94><div class="timeline-content" data-v-cc23ff94><h3 class="date" data-v-cc23ff94>28th may - 1st June, 2024</h3><h1 data-v-cc23ff94>KRI 2024 ( Regional )</h1><p data-v-cc23ff94>Acara ini diadakan secara online di Universitas Muhammadiyah Surakarta, dan tim berhasil meraih juara 1 tingkat regional I dalam kompetisi tersebut.</p><img src="' +
              de +
              '" alt="KRI 2024 (Regional)" data-v-cc23ff94></div></li><li data-v-cc23ff94><div class="timeline-content" data-v-cc23ff94><h3 class="date" data-v-cc23ff94>22 - 25th june, 2023</h3><h1 data-v-cc23ff94>KRI 2023 ( Nasional )</h1><p data-v-cc23ff94>Acara ini diadakan secara offline di Universitas Semarang, dan tim berhasil meraih juara 3 tingkat nasional dalam kompetisi tersebut.</p><img src="' +
              de +
              '" alt="KRI 2023 (Nasional)" data-v-cc23ff94></div></li><li data-v-cc23ff94><div class="timeline-content" data-v-cc23ff94><h3 class="date" data-v-cc23ff94>28 - 31 may, 2023</h3><h1 data-v-cc23ff94>KRI 2023 ( Regional )</h1><p data-v-cc23ff94>Acara ini diadakan secara online di Universitas Semarang, dan tim berhasil meraih juara 1 tingkat regional I dalam kompetisi tersebut.</p><img src="' +
              de +
              '" alt="KRI 2023 (Regional)" data-v-cc23ff94></div></li></ul></div>',
            1
          ),
          kt = [vt];
        function bt(a, e, t, s, o, n) {
          return (0, i.uX)(), (0, i.CE)("div", mt, kt);
        }
        var ft = { name: "Timeline" };
        const ht = (0, n.A)(ft, [
          ["render", bt],
          ["__scopeId", "data-v-cc23ff94"],
        ]);
        var gt = ht,
          pt = { name: "Achievement", components: { HeaderNav: E, Timeline: gt } };
        const ut = (0, n.A)(pt, [["render", dt]]);
        var Lt = ut;
        const xt = { class: "borderbat mt-16" },
          wt = (0, i.Lk)("div", { class: "kemasanbat" }, null, -1),
          yt = [wt];
        function At(a, e, t, s, o, n) {
          return (0, i.uX)(), (0, i.CE)("section", xt, yt);
        }
        var _t = { name: "NotFound", components: {} };
        const It = (0, n.A)(_t, [["render", At]]);
        var Mt = It;
        const Ct = { key: 0 },
          Et = (0, i.Fv)(
            '<section data-v-aeb6b6e6><h2 data-v-aeb6b6e6>2 December</h2><div class="grid-wrapper" data-v-aeb6b6e6><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>9:00 AM</h3><p data-v-aeb6b6e6>Life finds a way. You know what? It is beets.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>10:00 AM</h3><p data-v-aeb6b6e6>I&#39;ve crashed into a beet truck</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>12:30 AM</h3><p data-v-aeb6b6e6>I was part of something special.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>13:30 AM</h3><p data-v-aeb6b6e6>Yeah, but your scientists were so preoccupied with whether or not they could, they didn&#39;t stop to think if they should.</p><img src="https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg" alt="Black and white photo of a lake" data-v-aeb6b6e6></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>14:30 AM</h3><p data-v-aeb6b6e6>Just my luck, no ice. God help us, we&#39;re in the hands of engineers.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>15:30 AM</h3><p data-v-aeb6b6e6>I gave it a cold? I gave it a virus. A computer virus.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>16:30 AM</h3><p data-v-aeb6b6e6>God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>17:30 AM</h3><p data-v-aeb6b6e6>What do they got in there? King Kong?</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg/1200px-Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg" alt="Black and White Eiffel\r\n            Tower" data-v-aeb6b6e6></article></div></section><section data-v-aeb6b6e6><h2 data-v-aeb6b6e6>3 Jan</h2><div class="grid-wrapper" data-v-aeb6b6e6><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>9:00 AM</h3><p data-v-aeb6b6e6>Life finds a way. You know what? It is beets.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>10:00 AM</h3><p data-v-aeb6b6e6>I&#39;ve crashed into a beet truck</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>12:30 AM</h3><p data-v-aeb6b6e6>I was part of something special.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>13:30 AM</h3><p data-v-aeb6b6e6>Yeah, but your scientists were so preoccupied with whether or not they could, they didn&#39;t stop to think if they should.</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg/1200px-Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg" alt="Black and White Eiffel Tower" data-v-aeb6b6e6></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>14:30 AM</h3><p data-v-aeb6b6e6>Just my luck, no ice. God help us, we&#39;re in the hands of engineers.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>15:30 AM</h3><p data-v-aeb6b6e6>I gave it a cold? I gave it a virus. A computer virus.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>16:30 AM</h3><p data-v-aeb6b6e6>God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>17:30 AM</h3><p data-v-aeb6b6e6>What do they got in there? King Kong?</p><img src="https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg" alt="Black and white Mountian view" data-v-aeb6b6e6></article></div></section>',
            2
          ),
          Rt = [Et],
          jt = { key: 1 },
          Ft = (0, i.Fv)(
            '<section data-v-aeb6b6e6><h2 data-v-aeb6b6e6>2 December</h2><div class="grid-wrapper" data-v-aeb6b6e6><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>9:00 AM</h3><p data-v-aeb6b6e6>Life finds a way. You know what? It is beets.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>10:00 AM</h3><p data-v-aeb6b6e6>I&#39;ve crashed into a beet truck</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>12:30 AM</h3><p data-v-aeb6b6e6>I was part of something special.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>13:30 AM</h3><p data-v-aeb6b6e6>Yeah, but your scientists were so preoccupied with whether or not they could, they didn&#39;t stop to think if they should.</p><img src="https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg" alt="Black and white photo of a lake" data-v-aeb6b6e6></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>14:30 AM</h3><p data-v-aeb6b6e6>Just my luck, no ice. God help us, we&#39;re in the hands of engineers.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>15:30 AM</h3><p data-v-aeb6b6e6>I gave it a cold? I gave it a virus. A computer virus.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>16:30 AM</h3><p data-v-aeb6b6e6>God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>17:30 AM</h3><p data-v-aeb6b6e6>What do they got in there? King Kong?</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg/1200px-Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg" alt="Black and White Eiffel\r\n            Tower" data-v-aeb6b6e6></article></div></section><section data-v-aeb6b6e6><h2 data-v-aeb6b6e6>3 Jan</h2><div class="grid-wrapper" data-v-aeb6b6e6><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>9:00 AM</h3><p data-v-aeb6b6e6>Life finds a way. You know what? It is beets.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>10:00 AM</h3><p data-v-aeb6b6e6>I&#39;ve crashed into a beet truck</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>12:30 AM</h3><p data-v-aeb6b6e6>I was part of something special.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>13:30 AM</h3><p data-v-aeb6b6e6>Yeah, but your scientists were so preoccupied with whether or not they could, they didn&#39;t stop to think if they should.</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg/1200px-Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg" alt="Black and White Eiffel Tower" data-v-aeb6b6e6></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>14:30 AM</h3><p data-v-aeb6b6e6>Just my luck, no ice. God help us, we&#39;re in the hands of engineers.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>15:30 AM</h3><p data-v-aeb6b6e6>I gave it a cold? I gave it a virus. A computer virus.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>16:30 AM</h3><p data-v-aeb6b6e6>God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.</p></article><article data-v-aeb6b6e6><h3 data-v-aeb6b6e6>17:30 AM</h3><p data-v-aeb6b6e6>What do they got in there? King Kong?</p><img src="https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg" alt="Black and white Mountian view" data-v-aeb6b6e6></article></div></section>',
            2
          ),
          Tt = [Ft],
          Pt = { key: 2 },
          Ht = { key: 3 },
          Nt = { key: 4 },
          Kt = { key: 5 };
        function Ut(a, e, t, s, o, n) {
          return (
            (0, i.uX)(),
            (0, i.CE)("main", null, [
              (0, i.Lk)("h1", null, "KRI " + (0, f.v_)(n.year), 1),
              "2024" === n.year ? ((0, i.uX)(), (0, i.CE)("section", Ct, Rt)) : (0, i.Q3)("", !0),
              "2023" === n.year ? ((0, i.uX)(), (0, i.CE)("section", jt, Tt)) : (0, i.Q3)("", !0),
              "2022" === n.year ? ((0, i.uX)(), (0, i.CE)("section", Pt)) : (0, i.Q3)("", !0),
              "2021" === n.year ? ((0, i.uX)(), (0, i.CE)("section", Ht)) : (0, i.Q3)("", !0),
              "2020" === n.year ? ((0, i.uX)(), (0, i.CE)("section", Nt)) : (0, i.Q3)("", !0),
              "2019" === n.year ? ((0, i.uX)(), (0, i.CE)("section", Kt)) : (0, i.Q3)("", !0),
            ])
          );
        }
        var St = {
          name: "History",
          computed: {
            year() {
              return this.$route.params.year;
            },
          },
        };
        const Wt = (0, n.A)(St, [
          ["render", Ut],
          ["__scopeId", "data-v-aeb6b6e6"],
        ]);
        var Yt = Wt;
        const Bt = [
            { path: "/", name: "home", component: xe },
            { path: "/members", name: "Members", component: ze },
            { path: "/robots", name: "Robots", component: rt },
            { path: "/achievement", name: "Achievement", component: Lt },
            { path: "/history/:year", name: "History", component: Yt },
            { path: "/:pathMatch(.*)*", name: "NotFound", component: Mt },
          ],
          Gt = (0, d.aE)({ history: (0, d.LA)("/"), routes: Bt });
        var Xt = Gt;
        b().init(), (0, s.Ef)(c).use(Xt).mount("#app");
      },
    },
    e = {};
  function t(s) {
    var i = e[s];
    if (void 0 !== i) return i.exports;
    var o = (e[s] = { exports: {} });
    return a[s].call(o.exports, o, o.exports, t), o.exports;
  }
  (t.m = a),
    (function () {
      var a = [];
      t.O = function (e, s, i, o) {
        if (!s) {
          var n = 1 / 0;
          for (d = 0; d < a.length; d++) {
            (s = a[d][0]), (i = a[d][1]), (o = a[d][2]);
            for (var l = !0, r = 0; r < s.length; r++)
              (!1 & o || n >= o) &&
              Object.keys(t.O).every(function (a) {
                return t.O[a](s[r]);
              })
                ? s.splice(r--, 1)
                : ((l = !1), o < n && (n = o));
            if (l) {
              a.splice(d--, 1);
              var c = i();
              void 0 !== c && (e = c);
            }
          }
          return e;
        }
        o = o || 0;
        for (var d = a.length; d > 0 && a[d - 1][2] > o; d--) a[d] = a[d - 1];
        a[d] = [s, i, o];
      };
    })(),
    (function () {
      t.n = function (a) {
        var e =
          a && a.__esModule
            ? function () {
                return a["default"];
              }
            : function () {
                return a;
              };
        return t.d(e, { a: e }), e;
      };
    })(),
    (function () {
      t.d = function (a, e) {
        for (var s in e) t.o(e, s) && !t.o(a, s) && Object.defineProperty(a, s, { enumerable: !0, get: e[s] });
      };
    })(),
    (function () {
      t.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (a) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      t.o = function (a, e) {
        return Object.prototype.hasOwnProperty.call(a, e);
      };
    })(),
    (function () {
      t.p = "/";
    })(),
    (function () {
      var a = { 524: 0 };
      t.O.j = function (e) {
        return 0 === a[e];
      };
      var e = function (e, s) {
          var i,
            o,
            n = s[0],
            l = s[1],
            r = s[2],
            c = 0;
          if (
            n.some(function (e) {
              return 0 !== a[e];
            })
          ) {
            for (i in l) t.o(l, i) && (t.m[i] = l[i]);
            if (r) var d = r(t);
          }
          for (e && e(s); c < n.length; c++) (o = n[c]), t.o(a, o) && a[o] && a[o][0](), (a[o] = 0);
          return t.O(d);
        },
        s = (self["webpackChunkdefault"] = self["webpackChunkdefault"] || []);
      s.forEach(e.bind(null, 0)), (s.push = e.bind(null, s.push.bind(s)));
    })();
  var s = t.O(void 0, [504], function () {
    return t(9844);
  });
  s = t.O(s);
})();
//# sourceMappingURL=app.fe076169.js.map
