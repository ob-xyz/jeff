import {
  carouselads_default,
  videoads_default
} from "/build/_shared/chunk-SOZL25KD.js";
import {
  ja2_default
} from "/build/_shared/chunk-VTMYO4HS.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-S4ZNHW4H.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/ads/advertise.tsx
var import_react = __toESM(require_react());

// public/img/promoted-ads.png
var promoted_ads_default = "/build/_assets/promoted-ads-RD4SWZBS.png";

// public/img/text-ads.png
var text_ads_default = "/build/_assets/text-ads-UVDZPA4E.png";

// app/routes/ads/advertise.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ads = [
  {
    image: promoted_ads_default,
    title: "Images Ads",
    description: "Showcase your product or service with a single image, six-images, or a short video."
  },
  {
    image: carouselads_default,
    title: "Carousel Ads",
    description: "Rotate up to six images to showcase multiple products or promotions."
  },
  {
    image: videoads_default,
    title: "Video Ads",
    description: "Make products feel alive and drive engagement to your website, app, or brand message."
  },
  {
    image: text_ads_default,
    title: "Text Ads",
    description: "Use plain jane words to say something that gets your brands message across our audience."
  }
];
function Index() {
  const [adIndex, setAdIndex] = (0, import_react.useState)(0);
  const next = () => setAdIndex((prev2) => (prev2 + 1) % ads.length);
  const prev = () => setAdIndex((prev2) => (prev2 - 1 + ads.length) % ads.length);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content-awu", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja2_default, alt: "Jeffamazon Logo" }, void 0, false, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 45,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content-awu2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Reach 32K+ decision makers who like knowing what matters." }, void 0, false, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "MOST POPULAR" }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Jeffamazon ad formats" }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 48,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ads-carousel-txt", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "adsbox", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Jeffamazon Ads can support a variety of media formats through the following sub-categories:" }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 57,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Image Ads " }, void 0, false, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 60,
              columnNumber: 9
            }, this),
            "allow you to showcase your product or service with a single photo."
          ] }, void 0, true, {
            fileName: "app/routes/ads/advertise.tsx",
            lineNumber: 59,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Carousel Ads " }, void 0, false, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 64,
              columnNumber: 9
            }, this),
            "automatically rotate up to six horizontally-shaped images to showcase multiple products or promotions."
          ] }, void 0, true, {
            fileName: "app/routes/ads/advertise.tsx",
            lineNumber: 63,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Video Ads " }, void 0, false, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 68,
              columnNumber: 9
            }, this),
            "make products feel alive while driving people to your website, app, or brand message."
          ] }, void 0, true, {
            fileName: "app/routes/ads/advertise.tsx",
            lineNumber: 67,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Text Ads " }, void 0, false, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 72,
              columnNumber: 9
            }, this),
            "are the most simple and frictionless way to say something and get a message directly to our audience."
          ] }, void 0, true, {
            fileName: "app/routes/ads/advertise.tsx",
            lineNumber: 71,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 58,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:chris@jeffamazon.com", className: "pricebtn", children: "Start a campaign" }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 77,
          columnNumber: 5
        }, this) }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 76,
          columnNumber: 5
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 56,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ads-carousel", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "carousel-button prev", onClick: prev, children: "\u25C0" }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 83,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "carousel-button next", onClick: next, children: "\u25B6" }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 84,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "carousel-track",
            style: { transform: `translateX(-${adIndex * 100}%)` },
            children: ads.map((ad, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carousel-slide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ad.image, alt: ad.title }, void 0, false, {
                fileName: "app/routes/ads/advertise.tsx",
                lineNumber: 92,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: ad.title }, void 0, false, {
                fileName: "app/routes/ads/advertise.tsx",
                lineNumber: 93,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ad.description }, void 0, false, {
                fileName: "app/routes/ads/advertise.tsx",
                lineNumber: 94,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 91,
              columnNumber: 13
            }, this) }, i, false, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 90,
              columnNumber: 11
            }, this))
          },
          void 0,
          false,
          {
            fileName: "app/routes/ads/advertise.tsx",
            lineNumber: 85,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 82,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 55,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content2555", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { title: "the poast home", href: "https://thepoast.com/", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: '" Using 3 or more ad formats increases campaign awareness by 20% and purchase intent by 7%.' }, void 0, false, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 103,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 102,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "tag", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "SOURCE" }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 106,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Nielsen Brand Effect (US/UK/JP/CA), Q3 2015 - Q3 2018 Connect campaigns. Comparison is v. 1 ad format alone." }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 109,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 105,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 101,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content3sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Advertise" }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 117,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Want to post? We're looking for new advertisers." }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 118,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { title: "get in touch", href: "mailto:ads@jeffamazon.com", rel: "noopener noreferrer", children: "Get in touch \u2192" }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 119,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 116,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Subscribe" }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 122,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Want to know what matters?" }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 123,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { title: "subscribe today", href: "https://jeffamazon.com/subscribe", rel: "noopener noreferrer", children: "Subscribe \u2192" }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 124,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 121,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 114,
      columnNumber: 8
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/ads/advertise.tsx",
    lineNumber: 44,
    columnNumber: 3
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/ads/advertise-ZGCXS7IB.js.map
