var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});

// app/components/footer.tsx
var import_react2 = require("@remix-run/react");

// public/img/ja1.png
var ja1_default = "/build/_assets/ja1-B66P6XQH.png";

// public/img/in.png
var in_default = "/build/_assets/in-4S25RRTW.png";

// public/img/ig.png
var ig_default = "/build/_assets/ig-WB7RHRJR.png";

// public/img/x.png
var x_default = "/build/_assets/x-J2PMTTZT.png";

// public/img/email.png
var email_default = "/build/_assets/email-KANKX45L.png";

// app/components/footer.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "footer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: ja1_default, alt: "Logo" }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 12,
      columnNumber: 3
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-top", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-signup", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Screw it, let's do it." }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 15,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Sign up to Jeffamzn's one minute business newsletter." }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "input-wrapper", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 19,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "submit", type: "submit", children: "Let's do it" }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 20,
              columnNumber: 9
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/footer.tsx",
            lineNumber: 18,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 22,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 23,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 24,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 17,
          columnNumber: 5
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 14,
        columnNumber: 3
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { children: "Company" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 30,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: "Home" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 31,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/about", children: "About" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 32,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/ads/advertise-with-us", children: "Advertise With Us" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 33,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 29,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { children: "Support" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 36,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", children: "Contact" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 37,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "mailto:press@jeffamzn.com", children: "Press" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 38,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { title: "subscription form", href: "https://app.jeffamzn.com/subscription/form", rel: "noopener noreferrer", children: "Subscribe" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 39,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 35,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 28,
        columnNumber: 1
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/footer.tsx",
      lineNumber: 13,
      columnNumber: 1
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-meta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 46,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://policies.google.com/terms?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Terms of Service" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 47,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 45,
        columnNumber: 3
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-social", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://instagram.com/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: ig_default, alt: "Instagram" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 53,
          columnNumber: 5
        }, this) }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 52,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://x.com/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: x_default, alt: "X (formerly Twitter)" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 56,
          columnNumber: 5
        }, this) }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 55,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://linkedin.com/company/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: in_default, alt: "LinkedIn" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 59,
          columnNumber: 5
        }, this) }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 58,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: email_default, alt: "Email us" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 62,
          columnNumber: 5
        }, this) }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 61,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 51,
        columnNumber: 3
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/footer.tsx",
      lineNumber: 44,
      columnNumber: 1
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.tsx",
    lineNumber: 11,
    columnNumber: 1
  }, this);
}

// app/root.tsx
var import_react3 = require("@remix-run/react");

// app/style/global/global.css
var global_default = "/build/_assets/global-RUZQR3UF.css";

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links = () => [
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/png"
  },
  {
    rel: "stylesheet",
    href: global_default
  }
], meta = () => ({
  charset: "utf-8",
  title: "One Minute Business Newsletter : Jeffamzn",
  description: "Sign up for the free, one minute business newsletter keeping 10,000+ people updated about the business world.",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/routes/ads/advertise-with-us.tsx
var advertise_with_us_exports = {};
__export(advertise_with_us_exports, {
  default: () => Index
});
var import_react4 = require("react");

// public/img/promoted-ads.png
var promoted_ads_default = "/build/_assets/promoted-ads-43WUEOAA.png";

// public/img/takeover-ads.png
var takeover_ads_default = "/build/_assets/takeover-ads-CEMG6WW2.png";

// public/img/text-ads.png
var text_ads_default = "/build/_assets/text-ads-HITJ3Z4A.png";

// public/img/newads.jpg
var newads_default = "/build/_assets/newads-A2NPDGWT.jpg";

// public/img/convertads.jpg
var convertads_default = "/build/_assets/convertads-SBXTVORY.jpg";

// public/img/takeoverbg.jpg
var takeoverbg_default = "/build/_assets/takeoverbg-Y5YO6SS6.jpg";

// public/img/takeoverbg2.jpg
var takeoverbg2_default = "/build/_assets/takeoverbg2-ODZSH2AG.jpg";

// public/img/bg.jpg
var bg_default = "/build/_assets/bg-KNEKVA3I.jpg";

// app/routes/ads/advertise-with-us.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), ads = [
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
  let [adIndex, setAdIndex] = (0, import_react4.useState)(0), next = () => setAdIndex((prev2) => (prev2 + 1) % ads.length), prev = () => setAdIndex((prev2) => (prev2 - 1 + ads.length) % ads.length);
  return (0, import_react4.useEffect)(() => {
    let script = document.createElement("script");
    return script.src = "https://js.hcaptcha.com/1/api.js", script.async = !0, script.defer = !0, document.body.appendChild(script), () => {
      document.body.removeChild(script);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "content-awu", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: ja1_default, alt: "Jeffamzn Logo" }, void 0, !1, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 57,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "content-awu2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { children: "ADVERTISE WITH US" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { children: "Connect with your next customers on Jeffamzn." }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Jeffamzn is one of the most engaged email audiences in the world, and we're constantly in discovery mode." }, void 0, !1, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 60,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "ads-carousel", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "carousel-button prev", onClick: prev, children: "\u25C0" }, void 0, !1, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 68,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "carousel-button next", onClick: next, children: "\u25B6" }, void 0, !1, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "div",
        {
          className: "carousel-track",
          style: { transform: `translateX(-${adIndex * 100}%)` },
          children: ads.map((ad, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "carousel-slide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: ad.image, alt: ad.title }, void 0, !1, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 77,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: ad.title }, void 0, !1, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 78,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: ad.description }, void 0, !1, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 79,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this) }, i, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 75,
            columnNumber: 11
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 70,
          columnNumber: 7
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 67,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", className: "pricebtn", children: "Start a campaign" }, void 0, !1, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 85,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "content-awu3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { children: "MOST POPULAR" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { children: "Promoted Ads." }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 91,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: convertads_default }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 97,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Promote a post from social media" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 98,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Have a successful post on LinkedIn, Instagram, Facebook, or X? promote it to our audience to increase your engagement." }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 99,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 96,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: newads_default }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 102,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Use existing Meta and LinkedIn ads" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 103,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Give your existing Instagram, Facebook, or LinkedIn ads an extra boost as Jeffamzn ads." }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 104,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 101,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 95,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 90,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "content-awu4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { children: "BIGGEST VIEWS" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { children: "Takeover Ads." }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 109,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: takeoverbg_default }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 115,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Takeover Ads" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 116,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Give your favorite ads a big experience that takes over our timeline with a widescreen image and a CTA button to maximize engagement." }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 117,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 114,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 113,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 108,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "content-awu5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { children: "QUICK THOUGHT" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 123,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { children: "Text Ads." }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 124,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 122,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: takeoverbg2_default }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 128,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Text Ads" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 129,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Send your hottest takes directly to our audience." }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 130,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 127,
        columnNumber: 5
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 126,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 121,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "content-awu6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { children: "GETTING STARTED" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 136,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { children: "Start your journey with Jeffamzn." }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 137,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 135,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: bg_default }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 141,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Advertise with us" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 142,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Jeffamzn helps you diversify your brand by placing your content where people do business \u2014 the email inbox." }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 143,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", className: "pricebtn", children: "Start a campaign" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 144,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 140,
        columnNumber: 5
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 139,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 134,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ads/advertise-with-us.tsx",
    lineNumber: 56,
    columnNumber: 3
  }, this);
}

// app/routes/policies/privacy.tsx
var privacy_exports = {};
__export(privacy_exports, {
  default: () => Index2
});
var import_react5 = require("react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Index2() {
  return (0, import_react5.useEffect)(() => {
    let script = document.createElement("script");
    return script.src = "https://js.hcaptcha.com/1/api.js", script.async = !0, script.defer = !0, document.body.appendChild(script), () => {
      document.body.removeChild(script);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "content-privacy", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: ja1_default, alt: "Jeffamzn Logo" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "content-privacy2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Privacy Policy." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 25,
          columnNumber: 41
        }, this),
        "Effective: September 1, 2025."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Jeffamzn respects your privacy and values your trust. This Privacy Policy (\u201CPolicy\u201D) describes how we collect and use your information and explains your rights and options. This Policy applies to these services (which we call the \u201CServices\u201D in this Policy):" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "websites, the Jeffamzn Store, paid products" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "newsletters and other disseminated content" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "merchandise, mobile apps and related social media pages" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "anywhere else we gather information about you and refer to this Policy." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "This Policy is grouped into these sections:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "about us and this Policy;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "information we collect" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "how we use information, including for advertising purposes;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "when we disclose information to other parties, including for advertising purposes; and" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "your rights and how to exercise them." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
        "We encourage you to read this Policy carefully. If you have questions, please contact us at ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:privacyrequest@jeffamzn.com", children: "privacyrequest@jeffamzn.com" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 41,
          columnNumber: 104
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "1. About This Policy And Us" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(a)Who we are" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Jeffamzn, Inc. (\u201CJeffamzn,\u201D \u201Cwe\u201D, \u201Cour\u201D or \u201Cus\u201D) operates the Services. This Policy supplements and is governed by our Terms of Service (\u201CTerms\u201D). Capitalized terms used but not defined in this Policy are defined in our Terms. The Terms describe how the Services work in general and its conditions and requirements of use." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(b) When this Policy applies" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "This Policy applies when you use the Services, effective as of the Last Updated date above. By using or accessing the Services, you signify that you have read, understand and agree to be bound by this Policy and the Terms." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Because the Services change often, this Policy may change over time. Anytime we modify the Policy, we will post a revised version on the Services and update the Last Updated date above. If you have given us your contact information, we will notify you before any material changes take effect, so you have time to review them." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Certain parts of the Services work differently, and some information falls outside this Policy:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Certain parts of the Services may have additional terms and privacy disclosures that supplement this Policy." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "The Services may contain links to and from third-party websites and services. This Policy doesn\u2019t apply to outside of our Services. See Third Party Services to learn more." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
          "If you are a current or former employee or contractor of ours, this Policy does not apply to you. You may contact us about your privacy practices and rights at ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:privacyrequest@jeffamzn.com", children: "privacyrequest@jeffamzn.com" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 52,
            columnNumber: 175
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "If we receive your information in our role as a service provider to another business, our agreement with that business governs our use of your information. We will refer any questions or concerns of yours to that business." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(c) Location-specific sections" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
        "The Services operates from the United States, but this Policy applies worldwide. Our practices generally do not differ based on your location, but your rights and choices depend in part on the law where you live. For example, you may have rights under: (1) \u201CGDPR\u201D: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "THE EU GENERAL DATA PROTECTION REGULATION (EU) 2016/679, AND THE UK GENERAL DATA PROTECTION REGULATION (UK GDPR) AS TAILORED BY THE DATA PROTECTION ACT 2018" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 56,
          columnNumber: 277
        }, this),
        "; or (2) \u201CCCPA\u201D: the California Consumer Privacy Act, as amended."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "As a result, certain sections of this Policy apply to you only if you reside in a particular location:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Residents of jurisdictions where GDPR applies \u2013 such as U.K., EU and Swiss residents \u2013 should consult the Rights under GDPR and International Data Transfers sections." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Residents of Mexico should consult the Aviso de Privacidad addendum." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Canadian residents should consult the Canadian users section." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "California residents should consult the Rights under California law section. If you reside in a U.S. jurisdiction that has enacted a data privacy law similar to CCPA or GDPR, we extend the same rights CCPA grants to California residents to you, except where we specify otherwise." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
        "If those sections apply to you, they override any contrary descriptions elsewhere in the Policy as they relate to you. Please contact us at ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:privacyrequest@jeffamzn.com", children: "privacyrequest@jeffamzn.com" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 64,
          columnNumber: 152
        }, this),
        " if you have questions about your rights under other data privacy laws."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(a) Information you provide" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You may use the Services without providing any information about yourself. However, to use some aspects of the Services, we will need information about you, such as if you:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Purchase our Offerings or services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Contact or communicate with us" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Subscribe or opt-in to our newsletters, alerts, or other communications" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Participate in a contest or promotion or redeem a prize" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Information you provide may include your name or email address (\u201Cpersonal identifiers\u201D)." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We generally don\u2019t collect (or want!) your sensitive information, and we strive to limit the amount of sensitive personal information we collect." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "For instance, make a purchase through our Services, your payment information, like your full credit card number and any payment-related security information, is only collected and processed by our payment processor." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "In the event you provide sensitive personal information to us, we use it only for our operational business purposes, and we do not disclose it to others for any other purpose." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(b) Information collected when you use the Services" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "As you use the Services, cookies and other technology we use will generate technical data about which features you use, how you use them and the devices you use to access our services. This information may include:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u201CCommercial Information\u201D about your orders of Offerings or other products or services from us and interactions with Jeffamzn Store products." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u201CDevice Information\u201D related to the device you use to interact with the Services, such as your device\u2019s IP address, advertising IDs (resettable, random numbers, such as the device\u2019s Apple IDFA or Android Advertising ID), its browser and operating system, its internet service provider, and its configuration." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u201CInternet Activity\u201D related to your use of the Services, such as the pages you visit, the sites you use before or after visiting ours, your actions within the Services, the content or advertisements you interact with, general geolocation information, time stamps and performance logs and reports." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "MANAGING COOKIES AND SIMILAR TECHNOLOGIES: WHEN YOU FIRST VISIT OUR SERVICES, AND PERIODICALLY THEREAFTER, YOU WILL BE PRESENTED WITH A COOKIE BANNER PROVIDING YOU WITH INFORMATION ABOUT THE COOKIES AND SIMILAR TRACKING TECHNOLOGIES WE USE. FOR COOKIES THAT ARE NOT STRICTLY NECESSARY FOR THE FUNCTIONING OF OUR SERVICES, WE WILL REQUEST YOUR EXPLICIT CONSENT BEFORE PLACING THEM ON YOUR DEVICE. OUR COOKIE BANNER ALLOWS YOU TO:" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "ACCEPT ALL COOKIES;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "REJECT ALL NON-ESSENTIAL COOKIES; OR" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 87,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "CUSTOMIZE YOUR PREFERENCES AND CONSENT TO SPECIFIC CATEGORIES OF COOKIES." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "PREFERENCES FOR NON-ESSENTIAL COOKIES ARE NOT PRE-SELECTED. YOU CAN WITHDRAW OR CHANGE YOUR CONSENT AT ANY TIME." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 89,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(c) Information we generate" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We infer new information from other data we collect, including using automated means to generate information about your likely preferences or other characteristics (\u201Cinferences\u201D)." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(2) How We Use Your Information" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We use each of the categories of personal information described above for the following business and commercial purposes. The activities below can involve outside companies, agents or contractors (\u201Cservice providers\u201D) to whom we disclose your information for these purposes (discussed further below in Section 4)." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(a)To provide our content, services and products to you" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Deliver content you request" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Provide you with customer support and respond to your requests" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Complete your orders" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Communicate with you about our services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(b)To manage your subscriptions or fulfill product orders" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Manage your content subscriptions" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Deliver and process payments for Offerings you order" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(c) To improve our services and develop new ones" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Administer focus groups, market studies and surveys" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Review interactions with customer teams to improve our quality of service" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Develop new content and services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(d)To allow personalized ads and create audiences for third-party advertisers" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Administer sweepstakes, contests, discounts or other offers" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Gather data and work with third parties to show you personalized ads on behalf of advertisers" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Perform and measure the effectiveness of advertising campaigns on our services and marketing campaigns off of the Services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Communicate with you about products or services that we believe may interest you" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 118,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "OUR PERSONALIZED ADVERTISING ACTIVITIES RELY ON YOUR PRIOR CONSENT FOR THE USE OF RELEVANT COOKIES AND TRACKING TECHNOLOGIES, AND FOR THE SHARING OF YOUR INFORMATION WITH ADVERTISING PARTNERS FOR THESE PURPOSES." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 119,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(e) To prevent, detect and fight fraud and other illegal or unauthorized activities" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Find and address ongoing, suspected or alleged violations of our Terms" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Retain data related to violations of our Terms to prevent against recurrences" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 124,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Enforce or exercise our rights; for example, those in our Terms" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(f)To create broader findings with aggregate and deidentified data" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Aggregate or deidentify information so that it can no longer identify you, as defined under applicable laws." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 129,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Better understand and represent our users using deidentified data, such as to measure ad performance, create advertising interest-based segments or compile survey results." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 130,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(g) To ensure legal compliance" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Verify copyright or IP claims" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Comply with legal requirements" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 135,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Assist law enforcement" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(h) Purposes" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We rely on the following purposes to collect and use your information as described in this Policy:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("u", { children: "Commercial purposes" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 141,
            columnNumber: 15
          }, this),
          ": At times, the reason we process your information is to advance your economic interests or our economic interests. These purposes include performing the contract that you have with us, as embodied by our Terms, which advance our economic interests and yours. For instance, if you order products from us, we use your information to complete your payment and provide your product to you."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("u", { children: "Business purposes" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this),
          ": Most often, we process your information for operational reasons, in a reasonably necessary and proportionate manner (i.e., for business purposes under CCPA). For instance, we analyze users\u2019 behavior on our services to continuously improve our offerings, we suggest content we think might interest you and promote our own services, we process information to help keep our members safe and we process data where necessary to enforce our rights, assist law enforcement and enable us to defend ourselves in the event of a legal action."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("u", { children: "Comply with applicable laws and regulations" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, this),
          ": We also process your information where it is necessary for us to comply with applicable laws and regulations and evidence our compliance with applicable laws and regulations. For example, we retain traffic data and data about transactions in line with our accounting, tax and other statutory data retention obligations and to be able to respond to valid access requests from law enforcement."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 143,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("u", { children: "Consent" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 144,
            columnNumber: 15
          }, this),
          ": From time to time, we may ask for your consent to collect specific information, such as your precise geolocation, or use your information for certain specific reasons, like providing your email address or phone number for direct marketing purposes, or for the use of certain types of cookies for personalized advertising. In general, you may withdraw your consent by changing your settings (such as browser or device settings) or following instructions provided with information we send you on a consent basis (such as clicking \u2018unsubscribe\u2019 in any email we send you). You may always withdraw your consent at any time \u2013 just contact us at ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:privacyrequest@jeffamzn.com", children: "privacyrequest@jeffamzn.com" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 144,
            columnNumber: 670
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/policies/privacy.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/policies/terms.tsx
var terms_exports = {};
__export(terms_exports, {
  default: () => Index3
});
var import_react6 = require("react");

// public/img/bg1.jpg
var bg1_default = "/build/_assets/bg1-4DYQZ6RJ.jpg";

// app/routes/policies/terms.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Index3() {
  return (0, import_react6.useEffect)(() => {
    let script = document.createElement("script");
    return script.src = "https://js.hcaptcha.com/1/api.js", script.async = !0, script.defer = !0, document.body.appendChild(script), () => {
      document.body.removeChild(script);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "content-aboutus", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: ja1_default, alt: "Jeffamzn Logo" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "content-aboutus2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Staying informed is hard." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 27,
          columnNumber: 51
        }, this),
        "We make it easy."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Jeffamzn is a daily newsletter for go-getters who like to stay informed about the business world." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "content-aboutus3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h4", { children: "GETTING STARTED" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { children: "Start your journey with Jeffamzn." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: bg_default, alt: "Sign up free" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 37,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Sign up for free" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Sign up for free to get the business world delivered straight to your inbox every day of the week." }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 39,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "input-wrapper", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
                fileName: "app/routes/policies/terms.tsx",
                lineNumber: 44,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "submit", type: "submit", children: "Sign up" }, void 0, !1, {
                fileName: "app/routes/policies/terms.tsx",
                lineNumber: 45,
                columnNumber: 11
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 43,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 47,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 48,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 49,
              columnNumber: 9
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 42,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: bg1_default }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Advertise with us" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
            "Jeffamzn helps you diversify your brand by placing your content where people do business \u2014 the email inbox. ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 55,
              columnNumber: 120
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 55,
              columnNumber: 126
            }, this),
            "Get started today by promoting just one of your existing LinkedIn, Instagram, Facebook, or X posts."
          ] }, void 0, !0, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", className: "pricebtn", children: "Start a campaign" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 52,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 35,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/policies/terms.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index4
});
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Index4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "content-aboutus", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: ja1_default, alt: "The Poast Logo" }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "content-aboutus2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Staying informed is hard." }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 9,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 9,
          columnNumber: 51
        }, this),
        "We make it easy."
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Jeffamzn is the one newsletter for people who actually hate newsletters." }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index5
});
var import_react7 = require("react");

// public/img/samae.jpg
var samae_default = "/build/_assets/samae-CWPSNLTO.jpg";

// public/img/tobic.jpg
var tobic_default = "/build/_assets/tobic-6TILYHMG.jpg";

// public/img/jensene.jpg
var jensene_default = "/build/_assets/jensene-YYPH47ZK.jpg";

// public/img/trump.webp
var trump_default = "/build/_assets/trump-BMRPD2H4.webp";

// public/img/rocket.jpg
var rocket_default = "/build/_assets/rocket-42E6OGTB.jpg";

// public/img/handcoin.jpg
var handcoin_default = "/build/_assets/handcoin-T7BQUMTT.jpg";

// app/routes/index.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), rotatingWords = ["on Wall Street.", "in Silicon Valley.", "across the world."];
function Index5() {
  let [index, setIndex] = (0, import_react7.useState)(0), [fadeOut, setFadeOut] = (0, import_react7.useState)(!1);
  return (0, import_react7.useEffect)(() => {
    let interval = setInterval(() => {
      setFadeOut(!0), setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length), setFadeOut(!1);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []), (0, import_react7.useEffect)(() => {
    let script = document.createElement("script");
    return script.src = "https://js.hcaptcha.com/1/api.js", script.async = !0, script.defer = !0, document.body.appendChild(script), () => {
      document.body.removeChild(script);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: ja1_default, alt: "Jeffamzn Logo" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h4", { children: "ONE MINUTE BUSINESS NEWSLETTER" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: [
          "Don't start your day without knowing what's happening ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 55,
            columnNumber: 69
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: `${fadeOut ? "fade-out" : "fade-in"}`, children: rotatingWords[index] }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 56,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Sign up to Jeffamzn's free one minute newsletter." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "input-wrapper", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 64,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "submit", type: "submit", children: "Let's do it" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 65,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 63,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 67,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 69,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 62,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: [
        "We're the ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "one minute business newsletter" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 74,
          columnNumber: 21
        }, this),
        " for people who hate newsletters."
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { title: "subscription form", href: "https://app.jeffamzn.com/subscription/form", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Every day is a business day at Jeffamzn where we deliver a free one minute newsletter for people who hate newsletters." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 75,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-content3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: trump_default }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: handcoin_default }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: rocket_default }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-content4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { children: "Delivered straight to your inbox daily." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Read by people who want to know what's going on in the business world." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 92,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-content5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: samae_default }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "We're big time builders" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Join tech execs, founders, and venture capitalists who like to build things." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: tobic_default }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Get every news story that matters" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Get every business story that matters \u2014 delivered to your email inbox." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: jensene_default }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Our Sunday Special is to die for" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Enjoy our once-a-week deep dive into high culture trends." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { title: "subscription form", href: "https://app.jeffamzn.com/subscription/form", rel: "noopener noreferrer", className: "pricebtn", children: "Subscribe for free" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-blog", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h4", { children: "JEFFAMZN NEWS" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { children: "The latest and greatest." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 139,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "a",
        {
          href: "http://app.jeffamzn.com/campaign/ba97f2f9-a8c7-46a7-b183-ccffbc3b6891/6716369b-5785-4c74-be76-73af2558eebb",
          rel: "noopener noreferrer",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: "https://jeffamazn.com/Screen-Shot-2025-06-03-at-5.09.08-PM.png", alt: "Test Campaign Preview" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 149,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: "Test Campaign \u2014 Preview" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 150,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "June 29, 2025" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 151,
              columnNumber: 9
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 145,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 144,
        columnNumber: 5
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 143,
        columnNumber: 3
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 138,
      columnNumber: 1
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WZ6NJVAJ.js", imports: ["/build/_shared/chunk-UWAZYJMR.js", "/build/_shared/chunk-4QJKEWZT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-7U4SVABO.js", imports: ["/build/_shared/chunk-3UAG7PBE.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-YFLNPZ22.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ads/advertise-with-us": { id: "routes/ads/advertise-with-us", parentId: "root", path: "ads/advertise-with-us", index: void 0, caseSensitive: void 0, module: "/build/routes/ads/advertise-with-us-KIYZYKZX.js", imports: ["/build/_shared/chunk-E7AKTGCF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-3ILM3ZXL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/privacy": { id: "routes/policies/privacy", parentId: "root", path: "policies/privacy", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/privacy-VH3O4EM5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/terms": { id: "routes/policies/terms", parentId: "root", path: "policies/terms", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/terms-W7VNV2SV.js", imports: ["/build/_shared/chunk-E7AKTGCF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "ceba00f4", hmr: void 0, url: "/build/manifest-CEBA00F4.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/ads/advertise-with-us": {
    id: "routes/ads/advertise-with-us",
    parentId: "root",
    path: "ads/advertise-with-us",
    index: void 0,
    caseSensitive: void 0,
    module: advertise_with_us_exports
  },
  "routes/policies/privacy": {
    id: "routes/policies/privacy",
    parentId: "root",
    path: "policies/privacy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_exports
  },
  "routes/policies/terms": {
    id: "routes/policies/terms",
    parentId: "root",
    path: "policies/terms",
    index: void 0,
    caseSensitive: void 0,
    module: terms_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
