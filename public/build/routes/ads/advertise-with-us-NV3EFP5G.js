import {
  bg_default
} from "/build/_shared/chunk-E7AKTGCF.js";
import {
  ja1_default
} from "/build/_shared/chunk-3UAG7PBE.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-4QJKEWZT.js";

// app/routes/ads/advertise-with-us.tsx
var import_react = __toESM(require_react());

// public/img/promoted-ads.png
var promoted_ads_default = "/build/_assets/promoted-ads-43WUEOAA.png";

// public/img/takeover-ads.png
var takeover_ads_default = "/build/_assets/takeover-ads-CEMG6WW2.png";

// public/img/text-ads.png
var text_ads_default = "/build/_assets/text-ads-JKN2YR45.png";

// public/img/newads.jpg
var newads_default = "/build/_assets/newads-A2NPDGWT.jpg";

// public/img/convertads.jpg
var convertads_default = "/build/_assets/convertads-SBXTVORY.jpg";

// public/img/takeoverbg.jpg
var takeoverbg_default = "/build/_assets/takeoverbg-Y5YO6SS6.jpg";

// public/img/takeoverbg2.jpg
var takeoverbg2_default = "/build/_assets/takeoverbg2-ODZSH2AG.jpg";

// app/routes/ads/advertise-with-us.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ads = [
  {
    image: promoted_ads_default,
    title: "Promoted Ads",
    description: "Showcase your product or service with a single image or short gif."
  },
  {
    image: takeover_ads_default,
    title: "Takeover Ads",
    description: "Maxmize your engagement with a big image and custom CTA."
  },
  {
    image: text_ads_default,
    title: "Text Ads",
    description: "A quick and easy way to promote your ideas to our readers."
  }
];
function Index() {
  const [adIndex, setAdIndex] = (0, import_react.useState)(0);
  const next = () => setAdIndex((prev2) => (prev2 + 1) % ads.length);
  const prev = () => setAdIndex((prev2) => (prev2 - 1 + ads.length) % ads.length);
  (0, import_react.useEffect)(() => {
    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content-awu", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja1_default, alt: "Jeffamzn Logo" }, void 0, false, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 57,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content-awu2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "ADVERTISE WITH US" }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Connect with your next customers on Jeffamzn." }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Jeffamzn is one of the most engaged email audiences in the world, and we're constantly in discovery mode." }, void 0, false, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 60,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ads-carousel", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "carousel-button prev", onClick: prev, children: "\u25C0" }, void 0, false, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 68,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "carousel-button next", onClick: next, children: "\u25B6" }, void 0, false, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "carousel-track",
          style: { transform: `translateX(-${adIndex * 100}%)` },
          children: ads.map((ad, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carousel-slide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ad.image, alt: ad.title }, void 0, false, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 77,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: ad.title }, void 0, false, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 78,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ad.description }, void 0, false, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 79,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this) }, i, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 75,
            columnNumber: 11
          }, this))
        },
        void 0,
        false,
        {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 70,
          columnNumber: 7
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 67,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", className: "pricebtn", children: "Start a campaign" }, void 0, false, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 85,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content-awu3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "MOST POPULAR" }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Promoted Ads." }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 91,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: convertads_default }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 97,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Promote a post from social media" }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 98,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Have a successful post on LinkedIn, Instagram, Facebook, or X? promote it to our audience to increase your engagement." }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 99,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 96,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: newads_default }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 102,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Use existing Meta and LinkedIn ads" }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 103,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Give your existing Instagram, Facebook, or LinkedIn ads an extra boost as Jeffamzn ads." }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 104,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 101,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 95,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 90,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content-awu4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "BIGGEST VIEWS" }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Takeover Ads." }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 109,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: takeoverbg_default }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 115,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Takeover Ads" }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 116,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Give your favorite ads a big experience that takes over our timeline with a widescreen image and a CTA button to maximize engagement." }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 117,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 114,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 113,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 108,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content-awu5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "QUICK THOUGHT" }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 123,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Text Ads." }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 124,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 122,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: takeoverbg2_default }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 128,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Text Ads" }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 129,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Send your hottest takes directly to our audience." }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 130,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 127,
        columnNumber: 5
      }, this) }, void 0, false, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 126,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 121,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content-awu6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "GETTING STARTED" }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 136,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Start your journey with Jeffamzn." }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 137,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 135,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: bg_default }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 141,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Advertise with us" }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 142,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Jeffamzn helps you diversify your brand by placing your content where people do business \u2014 the email inbox." }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 143,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", className: "pricebtn", children: "Start a campaign" }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 144,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 140,
        columnNumber: 5
      }, this) }, void 0, false, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 139,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 134,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/ads/advertise-with-us.tsx",
    lineNumber: 56,
    columnNumber: 3
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/ads/advertise-with-us-NV3EFP5G.js.map
