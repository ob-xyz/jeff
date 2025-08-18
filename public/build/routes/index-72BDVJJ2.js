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

// app/routes/index.tsx
var import_react = __toESM(require_react());

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
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var rotatingWords = ["on Wall Street.", "in Silicon Valley.", "across the world."];
function Index() {
  const [index, setIndex] = (0, import_react.useState)(0);
  const [fadeOut, setFadeOut] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length);
        setFadeOut(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja1_default, alt: "Jeffamzn Logo" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "JEFFAMZN" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
          "Don't start your day without knowing what's happening ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 59,
            columnNumber: 69
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `${fadeOut ? "fade-out" : "fade-in"}`, children: rotatingWords[index] }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subscribe to stay informed." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-wrapper", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "email", type: "email", name: "email", required: true, placeholder: "Email Address *" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 68,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "submit", type: "submit", children: "Subscribe" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 69,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 67,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 71,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 72,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "one newsletter" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 78,
          columnNumber: 17
        }, this),
        " you can trust"
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Jeffamzn is daily habit that helps you stay informed about the latest and greatest trends happening in the business world." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 79,
        columnNumber: 22
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: trump_default }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: handcoin_default }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: rocket_default }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Delivered straight to your inbox." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Every day of the week Jeffamzn delivers a 5 minute or less newsletter on what's happening at the edges of technology and business." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: samae_default }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Every story that matters" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Get every business news story that matters \u2014 delivered to you." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: tobic_default }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Real go-getters" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Join go-getter tech execs, founders, and venture capitalists building the world." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: jensene_default }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Free deep dive" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Enjoy our free Sunday Dive into one current, big thing happening in our lives." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "pricebtn", children: "Sign up for free" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-blog", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "JEFFAMZN NEWS" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "The latest and greatest." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 143,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 141,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "a",
        {
          href: "http://app.jeffamzn.com/campaign/ba97f2f9-a8c7-46a7-b183-ccffbc3b6891/6716369b-5785-4c74-be76-73af2558eebb",
          rel: "noopener noreferrer",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://jeffamazn.com/Screen-Shot-2025-06-03-at-5.09.08-PM.png", alt: "Test Campaign Preview" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 151,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Test Campaign \u2014 Preview" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 152,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "June 29, 2025" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 153,
              columnNumber: 9
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 147,
          columnNumber: 7
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 146,
        columnNumber: 5
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 145,
        columnNumber: 3
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 140,
      columnNumber: 1
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-top", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-logo", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja1_default, alt: "Logo" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 161,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subscribe to Jeffamzn." }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 162,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-wrapper", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "email", type: "email", name: "email", required: true, placeholder: "Email Address *" }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 165,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "submit", type: "submit", children: "Sign up" }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 166,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/index.tsx",
              lineNumber: 164,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 168,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 169,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 170,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 163,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 160,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-links", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Company" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 176,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", children: "About" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 177,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:press@jeffamzn.com", children: "Press" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 178,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/ads/advertise-with-us", children: "Advertise With Us" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 179,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 175,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Support" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 182,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: "Sign Up" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 183,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: "Archive" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 184,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", children: "Contact" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 185,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 181,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 174,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 159,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-bottom", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-meta", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://policies.google.com/privacy?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Privacy Policy" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 192,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://policies.google.com/terms?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Terms of Service" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 195,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 191,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-social", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://instagram.com/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ig_default, alt: "Instagram" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 201,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 200,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://x.com/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: x_default, alt: "X (formerly Twitter)" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 204,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 203,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://linkedin.com/company/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: in_default, alt: "LinkedIn" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 207,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 206,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: email_default, alt: "Email us" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 210,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 209,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 199,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 190,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 158,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-72BDVJJ2.js.map
