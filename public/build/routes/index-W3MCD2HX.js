import {
  Link,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-PXBPMIIH.js";

// app/routes/index.tsx
var import_react = __toESM(require_react());

// public/img/ja1.png
var ja1_default = "/build/_assets/ja1-ZP4Y3AOT.png";

// public/img/promoted-ads.png
var promoted_ads_default = "/build/_assets/promoted-ads-D5BGC74D.png";

// public/img/takeover-ads.png
var takeover_ads_default = "/build/_assets/takeover-ads-XZR7ZOND.png";

// public/img/text-ads.png
var text_ads_default = "/build/_assets/text-ads-3LZ3C6FV.png";

// public/img/samae.jpg
var samae_default = "/build/_assets/samae-CWPSNLTO.jpg";

// public/img/tobic.jpg
var tobic_default = "/build/_assets/tobic-6TILYHMG.jpg";

// public/img/jensene.jpg
var jensene_default = "/build/_assets/jensene-YYPH47ZK.jpg";

// public/img/newads.jpg
var newads_default = "/build/_assets/newads-A2NPDGWT.jpg";

// public/img/convertads.jpg
var convertads_default = "/build/_assets/convertads-TLDFO5OQ.jpg";

// public/img/takeoverbg.jpg
var takeoverbg_default = "/build/_assets/takeoverbg-BTKWLYA2.jpg";

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
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var rotatingWords = ["on Wall Street.", "in Silicon Valley.", "across the world."];
var ads = [
  {
    image: promoted_ads_default,
    title: "Promoted Ads",
    description: "Promoted ads allow you to showcase your product or service with a single image or gif."
  },
  {
    image: takeover_ads_default,
    title: "Takeover Ads",
    description: "Our most premium mass-reach placements that drive more engagement and results."
  },
  {
    image: text_ads_default,
    title: "Text Ads",
    description: "The easiest way to promote a press release or quick thought to our most loyal readers."
  }
];
function Index() {
  const [index, setIndex] = (0, import_react.useState)(0);
  const [fadeOut, setFadeOut] = (0, import_react.useState)(false);
  const [adIndex, setAdIndex] = (0, import_react.useState)(0);
  const mainFormRef = (0, import_react.useRef)(null);
  const gettingStartedFormRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIndex((prev2) => (prev2 + 1) % rotatingWords.length);
        setFadeOut(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  (0, import_react.useEffect)(() => {
    if (!document.getElementById("hcaptcha-script")) {
      const script = document.createElement("script");
      script.id = "hcaptcha-script";
      script.src = "https://js.hcaptcha.com/1/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
    window.onSubmit = function() {
      if (mainFormRef.current && mainFormRef.current.getAttribute("data-hcaptcha-active") === "true") {
        mainFormRef.current.submit();
      } else if (gettingStartedFormRef.current && gettingStartedFormRef.current.getAttribute("data-hcaptcha-active") === "true") {
        gettingStartedFormRef.current.submit();
      }
    };
  }, []);
  const next = () => setAdIndex((prev2) => (prev2 + 1) % ads.length);
  const prev = () => setAdIndex((prev2) => (prev2 - 1 + ads.length) % ads.length);
  const handleMainFormSubmit = (e) => {
    e.preventDefault();
    if (window.hcaptcha && mainFormRef.current) {
      mainFormRef.current.setAttribute("data-hcaptcha-active", "true");
      window.hcaptcha.execute();
    } else {
      e.currentTarget.submit();
    }
  };
  const handleGettingStartedSubmit = (e) => {
    e.preventDefault();
    if (window.hcaptcha && gettingStartedFormRef.current) {
      gettingStartedFormRef.current.setAttribute("data-hcaptcha-active", "true");
      window.hcaptcha.execute();
    } else {
      e.currentTarget.submit();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja1_default, alt: "Jeffamzn Logo" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 121,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "JEFFAMZN" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 126,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
            "Don't start your day without knowing what's happening ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 128,
              columnNumber: 69
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `${fadeOut ? "fade-out" : "fade-in"}`, children: rotatingWords[index] }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 129,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 127,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subscribe to stay informed." }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 133,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "form",
          {
            ref: mainFormRef,
            method: "post",
            action: "https://app.jeffamzn.com/subscription/form",
            onSubmit: handleMainFormSubmit,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-wrapper", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "input",
                  {
                    className: "email",
                    type: "email",
                    name: "email",
                    required: true,
                    placeholder: "Email Address *"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 142,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "submit", type: "submit", children: "Subscribe" }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 149,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/index.tsx",
                lineNumber: 141,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "div",
                {
                  className: "h-captcha",
                  "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230",
                  "data-callback": "onSubmit",
                  "data-size": "invisible"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 155,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  id: "6d48f",
                  type: "hidden",
                  name: "l",
                  value: "6d48fffe-7d37-4c14-b317-3e4cda33a647"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 162,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 168,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 135,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: mainbg_default, alt: "Background" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 171,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "one newsletter" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 174,
          columnNumber: 17
        }, this),
        " that helps you stay informed"
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 174,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Every day Jeffamzn sends you a quick timeline of what's happening in the world. Easy to digest. And read by the most authoritative minds in business." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 175,
        columnNumber: 22
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 173,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: trump_default }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 179,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: handcoin_default }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: rocket_default }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 185,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Delivered straight to your inbox." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 189,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Jeffamzn is not the only way to know what's happening in the world. But it's a pretty good way to know what's happening in the world. Don't start your day without knowing what's really happening." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 190,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 188,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: samae_default }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 194,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Every story that matters" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 195,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Get every business news story that matters delivered straight to your inbox every day." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 196,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 193,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: tobic_default }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 199,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "An audience with authority" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 200,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Join high powered tech execs, founders, and 9 figure operators who want to know what's really going on in the world." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 201,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 198,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: jensene_default }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 204,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Enjoy smarter conversations" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 205,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Have more informed and smarter conversations with colleagues, customers and friends." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 206,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 203,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 192,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "pricebtn", children: "Sign up for free" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 210,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 209,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content7", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "ADVERTISE WITH US" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 216,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Connect with your next customers on Jeffamzn." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 217,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 215,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Jeffamzn's audience is authoritative, engaged, and constantly in discovery mode." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 219,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 214,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ads-carousel", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "carousel-button prev", onClick: prev, children: "\u25C0" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 222,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "carousel-button next", onClick: next, children: "\u25B6" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 223,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "carousel-track",
          style: { transform: `translateX(-${adIndex * 100}%)` },
          children: ads.map((ad, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carousel-slide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ad.image, alt: ad.title }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 231,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: ad.title }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 232,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ad.description }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 233,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 230,
            columnNumber: 15
          }, this) }, i, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 229,
            columnNumber: 13
          }, this))
        },
        void 0,
        false,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 224,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 221,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", className: "pricebtn", children: "Start a campaign" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 240,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 239,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "MOST POPULAR" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 246,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Promoted Ads." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 247,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 245,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: convertads_default }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 251,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Promote a post from LinkedIn, Instagram, or X" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 252,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Have a successful post on social? promote it to our audience and increase your engagement." }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 253,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 250,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: newads_default }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 256,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Use existing Meta and LinkedIn ad campaigns" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 257,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Give your existing Meta or LinkedIn ad campaigns an extra boost as email newsletter ads." }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 258,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 255,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 249,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 244,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content11", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "TAKEOVER OUR TIMELINE" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 264,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Widen your ad." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 265,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 263,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: takeoverbg_default }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 269,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Takeover Ads" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 270,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Give your favorite ads a widescreen image experience that takes over our timeline and maximizes engagement." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 271,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 268,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 267,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 262,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "GETTING STARTED" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 277,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Start your journey with Jeffamzn." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 278,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 276,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: bg_default, alt: "Sign up free" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 282,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Sign up for free" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 283,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Sign up for free to get the most authoritative business newsletter in the world, delivered straight to your inbox every day." }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 284,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "form",
            {
              ref: gettingStartedFormRef,
              method: "post",
              action: "https://app.jeffamzn.com/subscription/form",
              target: "_blank",
              onSubmit: handleGettingStartedSubmit,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-wrapper", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "input",
                    {
                      className: "email",
                      type: "email",
                      name: "email",
                      required: true,
                      placeholder: "Email Address *"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 296,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "submit", type: "submit", children: "Sign up" }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 303,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 295,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "div",
                  {
                    className: "h-captcha",
                    "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230",
                    "data-callback": "onSubmit",
                    "data-size": "invisible"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 308,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "input",
                  {
                    id: "6d48f",
                    type: "hidden",
                    name: "l",
                    value: "6d48fffe-7d37-4c14-b317-3e4cda33a647"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 315,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 321,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 288,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 281,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: bg1_default }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 325,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Start advertising with us" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 326,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Start or expand your marketing funnel by placing your ads exactly where people do business \u2014 the email inbox." }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 327,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", className: "pricebtn", children: "Start a campaign" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 328,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 324,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 280,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 275,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-blog", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "JEFFAMZN NEWS" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 358,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "The latest and greatest." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 359,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 357,
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
              lineNumber: 367,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Test Campaign \u2014 Preview" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 368,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "June 29, 2025" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 369,
              columnNumber: 9
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 363,
          columnNumber: 7
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 362,
        columnNumber: 5
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 361,
        columnNumber: 3
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 356,
      columnNumber: 1
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-top", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja1_default, alt: "Logo" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 377,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 376,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-links", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Company" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 381,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: "About" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 382,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:press@jeffamzn.com", children: "Press" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 383,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:job@jeffamzn.com", children: "Careers" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 384,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 380,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Ads" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 387,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:plan@jeffamzn.com", children: "Request Plan" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 388,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://app.jeffamzn.com/campaign/9f60dcc3-107c-4075-94a8-cb5c96a36423/6716369b-5785-4c74-be76-73af2558eebb", rel: "noopener noreferrer", children: "Media Kit" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 389,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://app.jeffamzn.com/campaign/b80e7e1c-c9b6-4eee-9809-602e24a0a2f8/6716369b-5785-4c74-be76-73af2558eebb", rel: "noopener noreferrer", children: "Rate Card" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 390,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 386,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Support" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 393,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: "Getting Started" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 394,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: "Archive" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 395,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", children: "Contact" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 396,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 392,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Jeffamzn" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 399,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:buy@jeffamzn.com", children: "Start a Campaign" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 400,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: "Case Studies" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 401,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: "Sign up" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 402,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 398,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 379,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 375,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-bottom", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-meta", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://policies.google.com/privacy?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Privacy Policy" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 409,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://policies.google.com/terms?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Terms of Service" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 412,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 408,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-social", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://instagram.com/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ig_default, alt: "Instagram" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 418,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 417,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://x.com/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: x_default, alt: "X (formerly Twitter)" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 421,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 420,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://linkedin.com/company/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: in_default, alt: "LinkedIn" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 424,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 423,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hey@jeffamzn.com", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: email_default, alt: "Email us" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 427,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 426,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 416,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 407,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 374,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 119,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-W3MCD2HX.js.map
