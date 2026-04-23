import {
  ja7_default
} from "/build/_shared/chunk-PA6DKYKG.js";
import {
  info_default,
  instagram_default,
  linkedin_default,
  x_default
} from "/build/_shared/chunk-OYBPKWJ5.js";
import {
  AltchaWrapper
} from "/build/_shared/chunk-552RS725.js";
import {
  Link,
  useActionData,
  useNavigation
} from "/build/_shared/chunk-ROHSLC5J.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-S4ZNHW4H.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/routes/index.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const [showModal, setShowModal] = (0, import_react.useState)(false);
  const navigation = useNavigation();
  const actionData = useActionData();
  (0, import_react.useEffect)(() => {
    const isSubscribed = localStorage.getItem("jeffamzn_subscribed");
    const hasSeenThisSession = sessionStorage.getItem("jeffamzn_seen_session");
    if (!isSubscribed && !hasSeenThisSession) {
      const timer = setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem("jeffamzn_seen_session", "true");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);
  (0, import_react.useEffect)(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape")
        setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  (0, import_react.useEffect)(() => {
    if (actionData == null ? void 0 : actionData.success) {
      localStorage.setItem("jeffamzn_subscribed", "true");
      setShowModal(false);
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    showModal && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "modal-overlay",
        onClick: () => setShowModal(false),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "modal-content",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Jeffamazon" }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 66,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subscribe to Jeffamazon's free newsletter" }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 67,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Get the trending thing in tech every morning, plus new interviews and exclusive subscriber-only news" }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 68,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-wrapper", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "email", type: "email", name: "email", required: true, placeholder: "Email Address *" }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 72,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "submit", type: "submit", children: "Subscribe" }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 73,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 71,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 75,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 76,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 77,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/index.tsx",
                lineNumber: 70,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "p",
                {
                  className: "dismiss-text",
                  onClick: () => setShowModal(false),
                  children: "No thanks! I'm already subscribed"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 80,
                  columnNumber: 13
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 62,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 58,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Jeffamazon" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Tech news in 1-minute" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Join 38,000 daily readers" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "outer-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "social", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "x", href: "https://x.com/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: x_default, alt: "X (Twitter)" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 99,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "ig", href: "https://instagram.com/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: instagram_default, alt: "Instagram" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 102,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "li", href: "https://linkedin.com/company/jeffamzn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: linkedin_default, alt: "LinkedIn" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 105,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 104,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "info", to: "/info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: info_default, alt: "More Info" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 108,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribe", children: "Subscribe" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 112,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "headerimg", src: ja7_default, alt: "Jeffamazon" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-PJSQOTBE.js.map
