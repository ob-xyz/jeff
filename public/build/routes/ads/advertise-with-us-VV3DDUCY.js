import {
  bg_default
} from "/build/_shared/chunk-E7AKTGCF.js";
import {
  email_default,
  ig_default,
  in_default,
  ja1_default,
  x_default
} from "/build/_shared/chunk-VG66BXVD.js";
import {
  Link,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-PXBPMIIH.js";

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
var convertads_default = "/build/_assets/convertads-4J5F7EYG.jpg";

// public/img/takeoverbg.jpg
var takeoverbg_default = "/build/_assets/takeoverbg-Y5YO6SS6.jpg";

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
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content-awu2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "ADVERTISE WITH US" }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Connect with your next customers on Jeffamzn." }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Jeffamzn is one of the most engaged email audiences in the world, and we're constantly in discovery mode." }, void 0, false, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ads-carousel", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "carousel-button prev", onClick: prev, children: "\u25C0" }, void 0, false, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "carousel-button next", onClick: next, children: "\u25B6" }, void 0, false, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "carousel-track",
          style: { transform: `translateX(-${adIndex * 100}%)` },
          children: ads.map((ad, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carousel-slide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ad.image, alt: ad.title }, void 0, false, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 81,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: ad.title }, void 0, false, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 82,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ad.description }, void 0, false, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 83,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 80,
            columnNumber: 15
          }, this) }, i, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, this))
        },
        void 0,
        false,
        {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 74,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", className: "pricebtn", children: "Start a campaign" }, void 0, false, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 90,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content-awu3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "MOST POPULAR" }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Promoted Ads." }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: convertads_default }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 101,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Promote a post from social media" }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 102,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Have a successful post on LinkedIn, Instagram, Facebook, or X? promote it to our audience to increase your engagement." }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 103,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 100,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: newads_default }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 106,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Use existing Meta and LinkedIn ads" }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 107,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Give your existing Instagram, Facebook, or LinkedIn ads an extra boost as Jeffamzn ads." }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 108,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 105,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content-awu4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "BIGGEST VIEWS" }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Takeover Ads." }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: takeoverbg_default }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Takeover Ads" }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Give your favorite ads a big experience that takes over our timeline with a widescreen image and a CTA button to maximize engagement." }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 121,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content-awu5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "GETTING STARTED" }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 127,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Start your journey with Jeffamzn." }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 128,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 126,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: bg_default }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 132,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Advertise with us" }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 133,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Jeffamzn helps you diversify your brand by placing your content where people do business \u2014 the email inbox." }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 134,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", className: "pricebtn", children: "Start a campaign" }, void 0, false, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 135,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 131,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 130,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-top", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-logo", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja1_default, alt: "Logo" }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 145,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-wrapper", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "email", type: "email", name: "email", required: true, placeholder: "Email Address *" }, void 0, false, {
                fileName: "app/routes/ads/advertise-with-us.tsx",
                lineNumber: 148,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "submit", type: "submit", children: "Sign up" }, void 0, false, {
                fileName: "app/routes/ads/advertise-with-us.tsx",
                lineNumber: 149,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 147,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, false, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 151,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, false, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 152,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 153,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 146,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 144,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-links", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Company" }, void 0, false, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 159,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Home" }, void 0, false, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 160,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", children: "About" }, void 0, false, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 161,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: "Advertise With Us" }, void 0, false, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 162,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 158,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Support" }, void 0, false, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 165,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", children: "Contact" }, void 0, false, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 166,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:press@jeffamzn.com", children: "Press" }, void 0, false, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 167,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Sign Up" }, void 0, false, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 168,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 164,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 157,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 143,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-bottom", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-meta", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://policies.google.com/privacy?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Privacy Policy" }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 175,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://policies.google.com/terms?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Terms of Service" }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 178,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 174,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-social", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://instagram.com/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ig_default, alt: "Instagram" }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 184,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 183,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://x.com/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: x_default, alt: "X (formerly Twitter)" }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 187,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 186,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://linkedin.com/company/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: in_default, alt: "LinkedIn" }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 190,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 189,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: email_default, alt: "Email us" }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 193,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 192,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 182,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 173,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 142,
      columnNumber: 3
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/ads/advertise-with-us.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/ads/advertise-with-us-VV3DDUCY.js.map
