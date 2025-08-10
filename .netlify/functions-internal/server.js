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
var import_react2 = require("@remix-run/react");

// app/style/global/global.css
var global_default = "/build/_assets/global-ZYSIJ6NY.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
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
  title: "Jeffamzn : Business News You Can Trust",
  description: "Don't start your day without knowing what's going on in the world.",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react3 = require("react"), import_react4 = require("@remix-run/react");

// public/img/ja1.png
var ja1_default = "/build/_assets/ja1-ZP4Y3AOT.png";

// public/img/promoted-ads.png
var promoted_ads_default = "/build/_assets/promoted-ads-WP43K5F2.png";

// public/img/takeover-ads.png
var takeover_ads_default = "/build/_assets/takeover-ads-ZKOBHDM7.png";

// public/img/text-ads.png
var text_ads_default = "/build/_assets/text-ads-2M56BVR3.png";

// public/img/samae.jpg
var samae_default = "/build/_assets/samae-CWPSNLTO.jpg";

// public/img/tobic.jpg
var tobic_default = "/build/_assets/tobic-6TILYHMG.jpg";

// public/img/jensene.jpg
var jensene_default = "/build/_assets/jensene-YYPH47ZK.jpg";

// public/img/newads.jpg
var newads_default = "/build/_assets/newads-A2NPDGWT.jpg";

// public/img/convertads.jpg
var convertads_default = "/build/_assets/convertads-JSJUWURI.jpg";

// public/img/takeoverbg.jpg
var takeoverbg_default = "/build/_assets/takeoverbg-BX2YXBVT.jpg";

// public/img/trump.webp
var trump_default = "/build/_assets/trump-BMRPD2H4.webp";

// public/img/mainbg.png
var mainbg_default = "/build/_assets/mainbg-SCFLIG6S.png";

// public/img/rocket.jpg
var rocket_default = "/build/_assets/rocket-42E6OGTB.jpg";

// public/img/handcoin.jpg
var handcoin_default = "/build/_assets/handcoin-T7BQUMTT.jpg";

// public/img/bg.jpg
var bg_default = "/build/_assets/bg-SWLSYA4L.jpg";

// public/img/bg1.jpg
var bg1_default = "/build/_assets/bg1-4DYQZ6RJ.jpg";

// public/img/in.png
var in_default = "/build/_assets/in-4S25RRTW.png";

// public/img/ig.png
var ig_default = "/build/_assets/ig-WB7RHRJR.png";

// public/img/x.png
var x_default = "/build/_assets/x-J2PMTTZT.png";

// public/img/email.png
var email_default = "/build/_assets/email-KANKX45L.png";

// app/routes/index.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), rotatingWords = ["on Wall Street.", "in Silicon Valley.", "across the world."], ads = [
  {
    image: promoted_ads_default,
    title: "Boosted Ads",
    description: "Boosted ads allow you to showcase your product or service with a single image or gif."
  },
  {
    image: takeover_ads_default,
    title: "Takeover Ads",
    description: "Our premium widescreen ads increase engagement with a CTA button."
  },
  {
    image: text_ads_default,
    title: "Text Ads",
    description: "The easiest way to promote a press release or quick thought to our most loyal readers."
  }
];
function Index() {
  let [index, setIndex] = (0, import_react3.useState)(0), [fadeOut, setFadeOut] = (0, import_react3.useState)(!1), [adIndex, setAdIndex] = (0, import_react3.useState)(0);
  (0, import_react3.useEffect)(() => {
    let interval = setInterval(() => {
      setFadeOut(!0), setTimeout(() => {
        setIndex((prev2) => (prev2 + 1) % rotatingWords.length), setFadeOut(!1);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  let next = () => setAdIndex((prev2) => (prev2 + 1) % ads.length), prev = () => setAdIndex((prev2) => (prev2 - 1 + ads.length) % ads.length);
  return (0, import_react3.useEffect)(() => {
    let script = document.createElement("script");
    return script.src = "https://js.hcaptcha.com/1/api.js", script.async = !0, script.defer = !0, document.body.appendChild(script), () => {
      document.body.removeChild(script);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: ja1_default, alt: "Jeffamzn Logo" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "JEFFAMZN" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 91,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: [
            "Don't start your day without knowing what's happening ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 93,
              columnNumber: 69
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: `${fadeOut ? "fade-out" : "fade-in"}`, children: rotatingWords[index] }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 94,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Subscribe to stay informed." }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 98,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "input-wrapper", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 102,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "submit", type: "submit", children: "Subscribe" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 103,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 101,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 105,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 106,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 107,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 100,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: mainbg_default, alt: "Background" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "one newsletter" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 113,
          columnNumber: 17
        }, this),
        " you can trust"
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Become informed in just 5 minutes. Every day of the week Jeffamzn delivers a quick and insightful update about the business world." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 114,
        columnNumber: 22
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: trump_default }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: handcoin_default }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: rocket_default }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Delivered straight to your inbox." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 128,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Jeffamzn is not the only way to know what's going on in the business world, but it's a pretty good way to know what's going on in the business world." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 129,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: samae_default }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Every story that matters" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Get every business news story that matters \u2014 delivered to you." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 135,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: tobic_default }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 138,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "No bots" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Join high powered tech execs and founders who quickly stay informed." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: jensene_default }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 143,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Informed discussions " }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Have informed discussions about all the latest technology trends." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 145,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 131,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", className: "pricebtn", children: "Sign up for free" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 149,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 148,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content7", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "ADVERTISE WITH US" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 155,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Connect with your next customers on Jeffamzn." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 156,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 154,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Jeffamzn is one of the most engaged email audiences in the world, and we're constantly in discovery mode." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 158,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 153,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ads-carousel", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "carousel-button prev", onClick: prev, children: "\u25C0" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "carousel-button next", onClick: next, children: "\u25B6" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 162,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "div",
        {
          className: "carousel-track",
          style: { transform: `translateX(-${adIndex * 100}%)` },
          children: ads.map((ad, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "carousel-slide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: ad.image, alt: ad.title }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 170,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: ad.title }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 171,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: ad.description }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 172,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 169,
            columnNumber: 15
          }, this) }, i, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 168,
            columnNumber: 13
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 163,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", className: "pricebtn", children: "Boost a post" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 179,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "MOST POPULAR" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 185,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Boosted Ads." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 186,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: convertads_default }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 190,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Boost a post from social media" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 191,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Have a successful post on LinkedIn, Instagram, Facebook, or X? boost it to our audience to increase your engagement." }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 192,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 189,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: newads_default }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 195,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Use existing Meta and LinkedIn ads" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 196,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Give your existing LinkedIn or Meta ads an extra boost as email newsletter ads." }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 197,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 194,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 183,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content11", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "MOST WIDESCREEN" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 203,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Takeover Ads." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 204,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 202,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: takeoverbg_default }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 208,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Takeover Ads" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 209,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Give your favorite ads a widescreen experience that takes over our timeline and adds a clear CTA button that maximizes your engagement." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 210,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 207,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 206,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 201,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "GETTING STARTED" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 216,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Start your journey with Jeffamzn." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 217,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 215,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: bg_default, alt: "Sign up free" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 221,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Sign up for free" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 222,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Sign up for free to get the business world delivered straight to your inbox every day of the week." }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 223,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "input-wrapper", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 228,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "submit", type: "submit", children: "Sign up" }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 229,
                columnNumber: 11
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 227,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 231,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 232,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 233,
              columnNumber: 9
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 226,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 220,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: bg1_default }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 237,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Advertise with us" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 238,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
            "Jeffamzn helps you diversify your brand by placing your ads where people do business \u2014 the email inbox. ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 239,
              columnNumber: 116
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 239,
              columnNumber: 122
            }, this),
            "Get started today by remixing your existing LinkedIn, Meta, or X ads and posts into newsletter ads that still look good."
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 239,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", className: "pricebtn", children: "Boost a post" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 240,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 236,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 219,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 214,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-blog", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "JEFFAMZN NEWS" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 270,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "The latest and greatest." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 271,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 269,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "a",
        {
          href: "http://app.jeffamzn.com/campaign/ba97f2f9-a8c7-46a7-b183-ccffbc3b6891/6716369b-5785-4c74-be76-73af2558eebb",
          rel: "noopener noreferrer",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "https://jeffamazn.com/Screen-Shot-2025-06-03-at-5.09.08-PM.png", alt: "Test Campaign Preview" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 279,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "Test Campaign \u2014 Preview" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 280,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "June 29, 2025" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 281,
              columnNumber: 9
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 275,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 274,
        columnNumber: 5
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 273,
        columnNumber: 3
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 268,
      columnNumber: 1
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-top", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: ja1_default, alt: "Logo" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 289,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 288,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-links", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "Company" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 293,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "About" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 294,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "mailto:press@jeffamzn.com", children: "Press" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 295,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "mailto:job@jeffamzn.com", children: "Careers" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 296,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 292,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "Ads" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 299,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "mailto:plan@jeffamzn.com", children: "Request Plan" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 300,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://app.jeffamzn.com/campaign/9f60dcc3-107c-4075-94a8-cb5c96a36423/6716369b-5785-4c74-be76-73af2558eebb", rel: "noopener noreferrer", children: "Media Kit" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 301,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://app.jeffamzn.com/campaign/b80e7e1c-c9b6-4eee-9809-602e24a0a2f8/6716369b-5785-4c74-be76-73af2558eebb", rel: "noopener noreferrer", children: "Rate Card" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 302,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 298,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "Support" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 305,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Getting Started" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 306,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Archive" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 307,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", children: "Contact" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 308,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 304,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "Jeffamzn" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 311,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "mailto:buy@jeffamzn.com", children: "Start a Campaign" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 312,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Case Studies" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 313,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Sign up" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 314,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 310,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 291,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 287,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-bottom", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-meta", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://policies.google.com/privacy?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Privacy Policy" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 321,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://policies.google.com/terms?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Terms of Service" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 324,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 320,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-social", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://instagram.com/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: ig_default, alt: "Instagram" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 330,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 329,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://x.com/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: x_default, alt: "X (formerly Twitter)" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 333,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 332,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://linkedin.com/company/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: in_default, alt: "LinkedIn" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 336,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 335,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: email_default, alt: "Email us" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 339,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 338,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 328,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 319,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 286,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-YX4PKDA3.js", imports: ["/build/_shared/chunk-PXBPMIIH.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CEUAHZ53.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-OFDKTQ5Y.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "a941ac34", hmr: void 0, url: "/build/manifest-A941AC34.js" };

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
