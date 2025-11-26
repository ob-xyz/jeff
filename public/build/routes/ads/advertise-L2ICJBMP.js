import {
  ja1_default
} from "/build/_shared/chunk-3UAG7PBE.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-4QJKEWZT.js";

// app/routes/ads/advertise.tsx
var import_react = __toESM(require_react());

// public/img/promoted-ads.png
var promoted_ads_default = "/build/_assets/promoted-ads-AYBTQGWK.png";

// public/img/takeover-ads.png
var takeover_ads_default = "/build/_assets/takeover-ads-DXY5PCDV.png";

// public/img/text-ads.png
var text_ads_default = "/build/_assets/text-ads-2UM5HP3Q.png";

// app/routes/ads/advertise.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ads = [
  {
    image: promoted_ads_default,
    title: "Images Ads",
    description: "Showcase your product or service with a single image, six-images, or a short video."
  },
  {
    image: text_ads_default,
    title: "Text Ads",
    description: "Use plain jane words to get your brand in front of our audience."
  },
  {
    image: takeover_ads_default,
    title: "Widescreen Ads",
    description: "Highlight your product or service with a full screen image and bolded header."
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, false, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 52,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content-awu2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Reach thousands of tech execs, founders, and entrepreneurs." }, void 0, false, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "ADVERTISE" }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Jeffamazon ad formats." }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 55,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ads-carousel-txt", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "adsbox", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Promoted Ads can support a variety of media formats through the following sub-categories:" }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 64,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Image Ads " }, void 0, false, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 67,
              columnNumber: 9
            }, this),
            "allow you to showcase your product or service with a single photo"
          ] }, void 0, true, {
            fileName: "app/routes/ads/advertise.tsx",
            lineNumber: 66,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Video Ads " }, void 0, false, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 71,
              columnNumber: 9
            }, this),
            "make products feel alive while driving people to your website, app, or brand message."
          ] }, void 0, true, {
            fileName: "app/routes/ads/advertise.tsx",
            lineNumber: 70,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Carousel Ads " }, void 0, false, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 75,
              columnNumber: 9
            }, this),
            "automatically rotate up to six horizontally-shaped images to showcase multiple products or promotions."
          ] }, void 0, true, {
            fileName: "app/routes/ads/advertise.tsx",
            lineNumber: 74,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Text Ads " }, void 0, false, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 79,
              columnNumber: 9
            }, this),
            "are the most simple and low touch way to introduce something or communicate a message straight to our audience."
          ] }, void 0, true, {
            fileName: "app/routes/ads/advertise.tsx",
            lineNumber: 78,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 65,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hey@jeffamazon.com", className: "pricebtn", children: "Start a campaign" }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 84,
          columnNumber: 5
        }, this) }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 83,
          columnNumber: 5
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 63,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ads-carousel", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "carousel-button prev", onClick: prev, children: "\u25C0" }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 91,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "carousel-button next", onClick: next, children: "\u25B6" }, void 0, false, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 92,
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
                lineNumber: 100,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: ad.title }, void 0, false, {
                fileName: "app/routes/ads/advertise.tsx",
                lineNumber: 101,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ad.description }, void 0, false, {
                fileName: "app/routes/ads/advertise.tsx",
                lineNumber: 102,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 99,
              columnNumber: 13
            }, this) }, i, false, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 98,
              columnNumber: 11
            }, this))
          },
          void 0,
          false,
          {
            fileName: "app/routes/ads/advertise.tsx",
            lineNumber: 93,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 90,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 62,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content-awu6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "ADVERTISE WITH US" }, void 0, false, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 112,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Using 3 or more ad formats increases campaign awareness by 20% and purchase intent by 7%." }, void 0, false, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 113,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Source: Nielsen Brand Effect (US/UK/JP/CA), Q3 2015 - Q3 2018 Connect campaigns. Comparison is v. 1 ad format alone." }, void 0, false, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 114,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 111,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 110,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/ads/advertise.tsx",
    lineNumber: 51,
    columnNumber: 3
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/ads/advertise-L2ICJBMP.js.map
